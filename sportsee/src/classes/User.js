import { useActionData } from "react-router-dom";
import extension from "../data/pathPatch.json"

// const REACT_APP_USE_MOCK = true; process.env.REACT_APP_USE_MOCK
const BASE_URL = "http://localhost:3001";

export default class User {

    fetchData(id) {
        return new Promise((resolve, reject) => {
            const fetchPromises = Object.values(extension.patch).map((slug) => {
                let url = `/mock/user/${id + slug}.json`;
                if (process.env.REACT_APP_USE_MOCK !== "true") url = `${BASE_URL}/user/${id + slug}`;
                // console.log(url) // checking server or mock rooting
                
                return fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    });
                });
            
            Promise.all(fetchPromises)
                .then((results) => {
                    const userData = {};
                    results.forEach((result, index) => {
                        const object = Object.keys(extension.patch)[index]
                        if (!(object in userData)) {
                            userData[object] = result.data
                        } else {
                            const newKey = `${object}_duplicate_${result}`
                            userData[newKey] = result.data
                        }
                    });
                    resolve(userData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    reject(error);
                });
        })
    }      
}