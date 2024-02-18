



const formin = document.getElementById('form-not-click')

form.addEventListener('submit', async function(e){
    e.preventDefault()

    const payload = new FormData(formin)

    
    console.log([...payload])

    const variable = payload.get("user-email");

    fetch('https://api-autosvg.onrender.com ',{
        method:"POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "<origin>"
        },
        body: JSON.stringify({
            "name" : variable})
        
        
    }).then(response => response.json().then(json => alert(JSON.stringify(json))))
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error.message));


})






