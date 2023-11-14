


let subpage = document.getElementById("form")

let holdValuec = document.getElementById("send-button");

holdValuec.addEventListener("click",createPage);
let form = document.getElementById("form");
function createPage(){

    

    form.style.visibility = "visible";
    subpage.addEventListener("click",keepformON);

}







function keepformON(event){

    if((event.target === subpage)){

        form.style.visibility = "hidden";

    }




}







  
  






