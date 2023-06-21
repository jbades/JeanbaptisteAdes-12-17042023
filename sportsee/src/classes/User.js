import extension from "../data/pathPatch.json"

// const USE_MOCK = true; process.env.USE_MOCK
const BASE_URL = "http://localhost:3001";

export default class User {

    fetchData(id) {
        return new Promise((resolve, reject) => {
            const fetchPromises = Object.values(extension.patch).map((slug) => {
                let url = `/mock/user/${id + slug}.json`;
                if (!process.env.USE_MOCK) url = `${BASE_URL}/user/${id + slug}`;
                
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
                    Object.keys(results).forEach((object) => {
                        if (!(object in userData)) {
                            userData[object] = results[object]
                        } else {
                            const newKey = `${object}_duplicate_${results}`
                            userData[newKey] = results[object]
                        }
                    });
                    console.log(userData)
                    resolve(userData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    reject(error);
                });
        })
    }      
}