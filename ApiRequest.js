



const formin = document.getElementById('form-not-click')




form.addEventListener('submit', async function(e){
    e.preventDefault()


    
    
    
    const payload = new FormData(formin)

    
    console.log([...payload])

    const variable = payload.get("user-email");

    fetch('https://api-autosvg.onrender.com/customer',{
        method:"POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "<origin>"
        },
        body: JSON.stringify({
            "name" : variable})
        
        
    }).then((response) => console.log('Response Data:', response.data))
    .then(data => console.log(data))
    .catch(error => alert("Something is going wrong please try again alter"));
   

})






