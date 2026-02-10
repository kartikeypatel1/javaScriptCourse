let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");
 form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent=""
    document.querySelector("#passwordError").textContent=""

    

 })