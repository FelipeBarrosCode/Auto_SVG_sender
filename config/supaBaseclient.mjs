
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

  

let eventSend = document.getElementById("button-send");

eventSend.addEventListener("click",sendData)



async function sendData(){
    //let emailg = document.getElementById("email"); 
  prompt("WORKING")
  const { data, error } = await supabase
  .from('Store_email')
  .insert([
    { "Email": "TENTAR", "Packet": 0 },
  ])
  .select()

}



