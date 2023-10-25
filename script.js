import { createClient } from '@supabase/supabase-js'

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

// Initialize the JS client



// Make a request



//Backend integration now

let buttonSend = document.getElementById("button-send");

buttonSend.addEventListener("click",submitForm)



// Fetch data from an API endpoint on your Azure App Service
async function submitForm() {
    let emailValue = document.getElementById("email").value
    
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    
    const { data , error } = await supabase.from('Store_email').update({email:emailValue, packet: 1})
}
  


  
  






