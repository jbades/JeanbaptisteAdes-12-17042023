// const USE_MOCK = process.env.USE_MOCK 

// export default function fetchData(id) {
//     return new Promise((resolve, reject) => {
  
//       if (USE_MOCK) {
//         const url = `/mock/user/${id}.json`;
//         fetch(url)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             return response.json();
//           })
//           .then(data => {
//             console.log(data);
//             resolve(data);
//           })
//           .catch(error => {
//             console.error('Error:', error);
//             reject(error);
//           });
//       } else {
//         // Handle the non-mock case
//       }
//     });
//   }

// export default function fetchData () {
    
//     const endpoint = '../public/mock/user/12.json'
//     console.log(endpoint)

//     const USE_MOCK = true

//     if (USE_MOCK) {
//         console.log("call mock")
//         fetch(endpoint)
//         .then((response) => {

//             if (!response.ok) {
//                 throw new Error('Error fetching data')
//               }
//             return response.json()

//         })
//         .then((data) => {
//             console.log(data)
//             return data
//         })

//         .catch((error) => {
//             console.error(error);
//         })
        
//     } else {
//         console.log("call API")
//         fetch('http://localhost:3000/user/12')
//         .then((response) => response.text())
//         .then((data) => {
//             console.log(data)
//             return data
//         })
//     } 
// }