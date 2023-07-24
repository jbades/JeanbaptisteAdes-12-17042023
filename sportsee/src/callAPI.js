import extension from "../src/data/pathPatch.json";

// const REACT_APP_USE_MOCK = true; process.env.REACT_APP_USE_MOCK
const BASE_URL = "http://localhost:3001";

export default async function fetchData(id) {
    const fetchPromises = Object.entries(extension).map(async (slug) => {
        let url = `/mock/user/${id + slug[1]}.json`;
        if (process.env.REACT_APP_USE_MOCK !== "true") url = `${BASE_URL}/user/${id + slug[1]}`;
        // console.log("!!!mock data:", process.env.REACT_APP_USE_MOCK, "!!!url:", url) // checking server or mock rooting

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json().then((parsedData) => {
                    return { [slug[0]]: parsedData.data };
                });
            });
    });

    const results = await Promise.all(fetchPromises);
    const newData = {};
    for (const item of results) {
        const key = Object.keys(item)[0];
        newData[key] = item[key];
    }
    return newData;
}
