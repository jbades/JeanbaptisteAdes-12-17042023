import weekday from "../data/sessionAddonData.json"
import fetchData from "../callAPI"

export default class User {

    async getData(id) {
        try {
            const newData = await fetchData(id);
            Object.assign(this, newData);
            return this;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    formatAverageSessionData() {
        const formattedObject = {}
        this.averagesessions.sessions.map((object) => {
            const key = object.day
            formattedObject[key - 1] = { ...object, day: Object.values(weekday)[key - 1] };
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