
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

// Fetch data from an API endpoint on your Azure App Service
function submitForm() {
    const email = document.getElementById('email').value;
  
    // Create a JavaScript object with the form data
    const formData = {
      email: email
    };
    console.log(formData.email)
    // Send the data to the server (server-side script)
    fetch('serverscript.azurewebsites.net', {
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
  


  
  






