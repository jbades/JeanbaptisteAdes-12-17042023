export default class User {
    constructor (id) {
        this.id = id 
        this.endpoint1 = {}
    }

    

    fetchData(id) {
        return new Promise((resolve, reject) => {
          const USE_MOCK = true;
      
          if (USE_MOCK) {
            console.log("calling mock")  // to be deleted before release

            const url = `/mock/user/${id}.json`
            fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                this.endpoint1 = data
                console.log(this.endpoint1)
                resolve(data);
              })
              .catch(error => {
                console.error('Error:', error);
                reject(error);
              });
            } else {
                console.log("calling API") // to be deleted before release

                fetch(`http://localhost:3000/user/${id}`)
                .then((response) => response.text())
                .then((data) => {
                    console.log(data)
                    return data
                })
            }
        });
    }
}