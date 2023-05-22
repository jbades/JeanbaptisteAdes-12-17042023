const mockedGetUserData  = `{"data":{"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}}`

function fetchData (endpoint, options) {
    const isMock = process.env.USE_MOCK === true

    if (isMock) {
        console.log("call mock")
        return JSON.parse(mockedGetUserData)
    } else {
        console.log("call API")
        fetch('http://localhost:3000/user/18')
        .then((response) => response.text())
        .then((body) => {
            console.log(body);
            return body;
        }); 
    
    }
}

export default fetchData