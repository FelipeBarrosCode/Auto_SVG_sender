
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


// Fetch data from an API endpoint on your Azure App Service
async function submitForm() {
  const { text } = await( await fetch(`/api/message`)).json();
  document.querySelector('#name').textContent = text;
}
  


  
  






