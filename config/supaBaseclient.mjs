
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://glgywmloagleqisqjblz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZ3l3bWxvYWdsZXFpc3FqYmx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODcwNTIsImV4cCI6MjAxMTI2MzA1Mn0.5h3Qh9yyqmvUNlMGbP2h6uEOwAocSE34eaMsJPBoxCQ"
const supabase = createClient(supabaseUrl, supabaseKey)

  

let eventSend = document.getElementById("form-not-click");

eventSend.addEventListener("submit",sendData)



async function sendData(){
    let emailg = document.getElementById("email"); 
    const { data, error } = await supabase
  .from('Store_email')
  .insert([
    { "Email": "TENTAR", "Packet": 0 },
  ])
  .select()

}



