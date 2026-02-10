// let abcd=document.getElementById("name");
// console.dir(abcd);//agr hm log use kr rhe hai to chance rhta hai ki vo hme direct tag dede full value ke sath aur dir use krne pr vo hme value deta hai 

// let nam =document.getElementsByClassName("abcd");
// console.log(nam);

// let kartikey= document.querySelector("p");
// console.log(kartikey);


// let kartikey= document.querySelectorAll("p");
// console.log(kartikey);
// manipulating the innerhtml
// let p= document.querySelector("p");
// p.innerHTML="<i>hey kartikey</i>";//ye inner html ko change krta hai mtlb hm tag change kr deta hai html ke with value bhi

// p.innerText="hallo kartikey kidhr ho tum aaj kal" //ye dono tag andr ka text change krne ke kaam aate hai
// p.textContent="kya kr rhe ho ";


// console.dir(p);

//changing or manipulating the attributes
// let a= document.querySelector("a");
// a.href="https:\\www.google.com"; // first method to change the attributes 
// a.setAttribute("href","https://www.google.com");// this is second method to change the value of attributes
// console.log(a);
// console.log(a.getAttribute("href"));// this is use for the getting the value of the attributes

// console.log(a.removeAttribute("href"));// this is use for the removing the attributes value



 //create element
 //append/prepandkaro jaha bhi element chaiye waha
// let h1=document.createElement("h1");
// h1.textContent="hallo kartikey what are you doing";
// console.dir(h1);
// document.body.prepend(h1);//isko hm ek aur tarike se likh skte hai like 
//document.querySelector("body").append(h1);

// let p =document.createElement("p");
// p.textContent="are bhai sb smjh rha hai tu drame mt kr";
// document.querySelector("div").appendChild(p);


// isme hm seekh rhe kaise html me css style ko manipulate kaise kr rhe
// let h1 =document.querySelector("h1");
// console.dir(h1);
// h1.style.color="darkgreen";
// h1.style.backgroundColor="yellow"


// let h1=document.querySelector("h1");
// console.dir(h1);
// h1.classList.add("kittu");// ye tarika hai hm kaise class ko add krte hai html se like this we did not want to write the class name in html tag and we can add the class name by the js
// h1.classList.remove("kittu");//this is method to remove the any class from the html tag 
// h1.classList.toggle("kittu");// ye toggle krta hai class ko agr class lgi hogi to remove krega agr nhi lgi hogi to lga dega

//Q1. what is the DOM? How does it represent the HTML structure?
// dom (document object model) ye ek tree structure hai aur ye html file me jo bhi likha hota hai vo node hote hai aur btata hai ki kis cheez ko kidhr place hona hai

//Q2 what is difference between an element node and a text node?
// element node hota hai html tag aur text node hota hai unke andr ka content and html tag child node  bhi ho skte hai jbki text node ka aisa kuch nhi ho skta hai

// let lis =document.querySelectorAll("li");
// lis.forEach((val)=>{
//     console.log(val.textContent);
// })


// which time we use the innertext and textcontent in the js
// textcontent is fast way to getting the content of the html and innertext is slower and one more thing that textcontent give me all the content which are hiden but innertext is not given 


//event handling

//event mtlb koi actio hua , event listener ka kaam hai koi action ka reaction dia

// let h1=document.querySelector("h1");
// h1.addEventListener("click",()=>{
//     h1.style.color="red";
// })

// function dbl(){
//     h1.style.fontSize="100px";
// }
// h1.addEventListener("dblclick",dbl)
// h1.removeEventListener("dblclick",dbl);// this is using for the removing the event listener from the html


// let inp=document.querySelector("input");
// document.addEventListener("input",function(dets){
//      if(dets.data!==null){
//         console.log(dets.data);
//      }
// })


//change event tab chalta hai jab koi input select ya text area mein koi change ho jayee
let select =document.querySelector("select");
let h3=document.querySelector("#device");
select.addEventListener("change",function(value){
   h3.textContent=`${value.target.value} Device Selected`;
});