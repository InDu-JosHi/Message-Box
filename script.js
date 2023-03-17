const message= document.querySelector(".msg-input");
const submit= document.querySelector(".submit");
message.addEventListener("keydown", (event)=>{
    if(event.key =="Enter")
    getMessage();
})
function getMessage(){
document.querySelector(".msg-output p").innerHTML= message.value;
message.value="";
}
submit.addEventListener("click", getMessage);
