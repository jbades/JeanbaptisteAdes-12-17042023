import extension from "../data/pathPatch.json"

// const USE_MOCK = true; process.env.USE_MOCK
const BASE_URL = "http://localhost:3001";

export default class User {
    constructor (id) {
        this.id = id 
    }

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
                    results.forEach((data) => {
                        Object.assign(userData, data.data);
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