import extension from "../data/pathPatch.json"
import weekday from "../data/sessionAddonData.json"

// const REACT_APP_USE_MOCK = true; process.env.REACT_APP_USE_MOCK
const BASE_URL = "http://localhost:3001";

export default class User {
    // constructor() {
    //     this.general = {}
    //     this.general.id = 0
    //     this.general.userInfos ={"firstName":null,"lastName":null,"age":0}
    //     this.general.todayScore = []
    //     this.general.keyData = {"calorieCount":0,"proteinCount":0,"carbohydrateCount":0,"lipidCount":0}
    //     this.activity = {}
    //     this.activity.sessions = []
    //     this.performance = {}
    //     this.performance.kind = {}
    //     this.performance.data = []
    //     this.averagesessions = {}
    //     this.averagesessions.sessions = []
    // }

    fetchData(id) {
        return new Promise((resolve, reject) => {
            const fetchPromises = Object.entries(extension).map((slug) => {
                let url = `/mock/user/${id + slug[1]}.json`;
                if (process.env.REACT_APP_USE_MOCK !== "true") url = `${BASE_URL}/user/${id + slug[1]}`;
                // console.log(url) // checking server or mock rooting
                
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
            
            Promise.all(fetchPromises)
            .then((results) => {
              const newData = {};
              for (const item of results) {
                const key = Object.keys(item)[0];
                newData[key] = item[key];
              }
              Object.assign(this, newData);
              resolve(this);
            })
            .catch((error) => {
              console.error('Error:', error);
              reject(error);
            });
        })
    }

    formatAverageSessionData() {
        const formattedObject = {}
        this.averagesessions.sessions.map((object) => {
            const key = object.day
            formattedObject[key] = { ...object, day: Object.values(weekday)[key] };
            // console.log("!!! object.day:", object.day, "!!! formattedObject:", formattedObject)
            return formattedObject
        })
        Object.assign(this.averagesessions.sessions, formattedObject)
        return this.averagesessions.sessions
    }

    formatGeneralData() {
        this.general.todayScore =  
            [
                { name: "Score", value: this.general.todayScore},
                { name: "!Score", value: 1 - this.general.todayScore}
            ];
        return this.general.todayScore
    }

    formatPerformanceData() {
        const formattedObject = {}
        this.performance.data.map((object, index) => {
            formattedObject[index] = { ...object, kind: this.performance.kind[object.kind] };
            return formattedObject
        })
        Object.assign(this.performance.data, formattedObject)
        return this.performance.data
    }
}