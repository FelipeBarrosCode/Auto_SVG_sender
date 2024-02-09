


// // Example POST method implementation:
// async function postData(url="", data={}) {
//     // Default options are marked with *

//     try {
//         const response = await fetch(url, {
//             method: "POST", 
//             mode: "no-cors", 
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 "Access-Control-Allow-Origin": "*",
                
//             },
//             body: JSON.stringify(data) // body data type must match "Content-Type" header
//         }).then((response) =>{
//             return response.json()
//         }).then((data)=>{
//             if(data.result.ok == 1 && data.result.n==1){
//                 let ids = buildIDS(data.document)
//                 display.append(buildTemplate(data.document,ids))
//             }
//         });

//         if (!response.ok) {
//             console.log(`HTTP error! Status: ${response.statusText}`);
//             // Handle the error here if needed
//         } else {
//             const result = await response.json(); // Assuming the response is JSON
//             console.log(result);
//         }
//     }catch{

        
//     }
//     finally{
//         console.log("working")
//     }

  
    



// }




// const data = document.getElementById("form-not-click").addEventListener("submit", function (event) {
//     event.preventDefault();

    
//     //document.getElementById("email").value

//     console.log(axios.get('http://localhost:3000/customer'))

// })

const formin = document.getElementById('form-not-click')

form.addEventListener('submit', async function(e){
    e.preventDefault()

    const payload = new FormData(formin)

    
    console.log([...payload])

    const variable = payload.get("user-email");

    fetch('http://localhost:3000/customer',{
        method:"POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify({
            "name" : variable})
        
        
    }).then(response => response.json().then(json => alert(JSON.stringify(json))))
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error.message));

//     fetch('http://localhost:3000/customer')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(userData => {
//     // Process the retrieved user data
//     console.log('User Data:', userData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
})






