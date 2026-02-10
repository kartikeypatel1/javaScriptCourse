// jispe event aayega agar uspar listenr nahi hua to humaara event uske parent oar lisntener dundhenga aur aisa krte krte upar ki taraf move krega


// let nav=document.querySelector("#nav")
// nav.addEventListener("click",function(){
//     alert("you clicked and now you are hacked");// ye aisa hai event hai jisme ye btate hai ki agr kisi element pr event listener nhi lga hai to fir us  vo element apne upr ke element ke event listner ki trh kaam krta hai jaise isme hmne event listner lgaya hai nav tag pr aur nav tag ke andr button tag hai jis pr koi  bhi nhi lga to vo nav tag ki listener ki trh work kr rha hai
// });


// let ul=document.querySelector("ul");
// let li=document.querySelector("li");
// ul.addEventListener("click",function(dets){
//     // dets.target.style.textDecoration="line-through";//one way to add text decoration on list
//     // dets.target.classList.toggle("lt");//e class ko add aur remove krega jo ki click krne pr ht jayega aur lg jayega

//     dets.target.classList.add("lt");// ye tareeka hai ki class addd krde using the js
// })


// jab bhi aap click krte ho ya koi bhi event raise krte ho to aapka jo event flow do phase mein chlata HTMLDialogElement
//  phase1: event top level element se neeche ki taraf aayega
//phase 2: event raised element se parent ki taraf jayega

// aur phle phase 1 hoti hai 


// hamesha phase 1 hi phle hoti hai par vo by default off rhti hai agr usey on kar dein to pahle phase 1 ka answer milega

//hamesha phle capture phase chlta hai fir chlta hai bubbling phase
// and capture phase ko chlane ke liye hm hm curly braces ke bad comma lga kr true likh dete hai

// let a=document.querySelector(".a");
// let b=document.querySelector(".b");
// let c=document.querySelector(".c");
// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.dir("button");
// })

// c.addEventListener("click",function(){
//     console.dir("a");
// })
// b.addEventListener("click",function(){
//     console.dir("b");
// })
// c.addEventListener("click",function(){
//     console.dir(a);
// },true)



//  let input=document.querySelector("input");
//  let spn=document.querySelector("span");
//  input.addEventListener("input",function(dets){
//     let left=20-dets.target.value.length;
//     spn.textContent=left;

//     if(left<0){
//         spn.style.color="red";
//     }
//     else{
//         spn.style.color="orange";
//     }
//  })

 