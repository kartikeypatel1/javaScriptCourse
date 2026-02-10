let btn=document.querySelector("#btn");
let fileinpt=document.querySelector("#fileinp");
btn.addEventListener("click",function(){
    fileinpt.click();
});
fileinpt.addEventListener("change",function(dets){
   const file=dets.target.files[0];
   if(file){
    btn.textContent=file.name;
   }
})