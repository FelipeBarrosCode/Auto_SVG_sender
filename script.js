
let holdValuec = document.getElementById("send-button");

holdValuec.addEventListener("click",createPage);
let form = document.getElementById("form");
function createPage(){

    

    form.style.visibility = "visible";
    subpage.addEventListener("click",keepformON);

}

let subpage = document.getElementById("form")
let subpageInform = document.getElementById("Special")




function keepformON(event){

    if((event.target === subpage)){

        form.style.visibility = "hidden";

    }




}



//Backend integration now

let buttonSend = document.getElementById("button-send");

buttonSend.addEventListener("click",submitForm)

const formData = {
  email: email
};


// Fetch data from an API endpoint on your Azure App Service
function submitForm() {
    prompt("working function")
    const email = document.getElementById('email').value;
  
    // Create a JavaScript object with the form data
    console.log(JSON.stringify(formData))
    console.log(formData.email)
    // Send the data to the server (server-side script)
    fetch('https://svgsender.azurewebsites.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      prompt("Operation was a sucess prepare for pretty SVG's on your email")
      console.log(data);
    })
    .catch(error => {
        prompt("data was not sent")
        console.error('Error:', error);
    });
  }
  


  
  






