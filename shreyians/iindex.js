//declarations and initialization

// var a; //declare variable
// var a=12; //initialization of the variable
//window me add hota hai
// function scoped hota hai
// app firse declare kr skte ho same name se and error nho aayega
// let dulha ="labn";
// let dulhan ="baby";

// temporal dead zone:- utna area jitne mein js ko pata to hai ki variavle exist karta hai par wo aapko value nahi de sakta
// console.log(a);
// let a=12;

// Hoisting impact per type
// hoisting-> ek variable ko jab js mein banate hai to wo variable do hisso mein toot jata hai and uska declare part upar chla jata hai and uska initialization part neeche reh jata hai 
 //var a=undefined;// ye vala part top pr chla jata hai 
//  a=12;// ye vala part neech rhta hai isliye var me output undefined aata hai agr hm variable declare neeche kre aur access phle kre
//  let a=10;
//  {
//     let a=20;
//     console.log("Inside:",a);
//  }
//  console.log("Outside:",a);

//data types
// primmitive data  types->aisi saari values jinko copy karnne par ek real  copy mil jaye
// string , number ,boolean ,null,  undefined, symmbol, bigint
// let d=1;
// let c=d;// agr hm isme change krege to real value  me koi change nhi milega
// d=d+3;;


// references-> inko copy krne par real copy nahii milegi but aapko reference milega parent ka
// arrays ,object ,functions

// let a =[1,2,3];
// let b=a; // agr isme hm change krege to real value me bhi change milega
// b.pop();


//string define krne ke teen tarike first single quotes ''  , double quotes "", backticks `` 


// number me hm kisi bhi type ki value rkh skte hai like integer and float value 
// let a=12;
//let b=12.3;

// boolean me hm value true and false me denge 

// let a =true;
//let b=false;

//null ka matlab hai aapne jaan boojh kr koi value  nhi di

// let numberOfstudents= null;

// undefined ka matlab ki aapne ek variable bnaya aur usey value nahi di to jo value by default mili wo hai undefined
// let z;

// console.log(z);



//symbol-> unique immutable value


//bigint ke liye hm largest number ke end me n ko lga dete hai like this
//  let a =9007199254740991n; // a is type of bigint number
// a=a+3n;



//dynamic typing-> js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha pr dynamic data types hote hai

// var kartikey =12;
// kartikey="aryan";


// typeof quirks (e.g., typeof null === 'object')


//type coercion-> concept jismein aapka ek type automatically conver hojayaega

// let a=5;
// a=a+"Kartikey";


// + sign do kaam kr skta hai add aur concate dono kaam kr skta hai isliye ye string me add krne pr concate krta hai aur jb hm subtraction krte hai to - sign sirf subtraction hi krta hai isliye ye string ko number me bdlta hai aur subtraction perform krta hai
// let a =5;
// a="harsh"-2;



// truthy and falsy values
// 0,false, "" , null , undefined, NaN , document.all these are the falsy value that mean they are use for the checking the condintion is true or false hai ya nhi baki sari value truthy hoti hai


// if(null){
//    // isme null false hai to ye blockk run ni krega

// }


// Arithmetic , comparison , logical,assignment, unary,ternary

// comparison operator

// == ye value ka type nhi check krta hai value ko dekhta hai ki value same hai ya nhi

//=== ye check krta hai value aur type bhi dono ki

//<== ye strictaly check krta hai ki value same nhi hai ki nhi
// 12!=="12"; true


// ternary operator


// 12>13? console.log("true"):console.log("false");

//practice questions

// let x=10;
// let y =20;
// if(x>5&&y<25){
//    console.log("A");
// }else{
//    console.log("B");
// }
 

// let isAdmin= true;
// let isLoggedIn=false;
// if(isAdmin||isLoggedIn){
//    console.log("Access granted");
// }else{
//    console.log("Access denied");
// }

// let temp=35;
// if(!(temp<30)){
//    console.log("Hot");
// }else{
//    console.log("Pleasant");
// }
 

// let a=0;
// if(a){
//    console.log("Truthy");

// }else{
//    console.log("Falsy");
// }


// let score =78;
// let grade =score>=90?"A":score>=75?"B":score>=60?"C":"fail";
// console.log(grade);


// let points =120;
// let status =points>100? "gold": points>50?"silver":"Bronze";
// console.log(status); 

//rock paper scissor logic
// rock scissor ko hrata hai ,
// paper rock ko hrata hai,
// scissor paper ko hrati hai,

// function rps( user ,computer){
//    if(user===computer) return "Draw";
//    if(user==="Rock" && computer==="Scissor") return "user";
//    if(user==="paper" && computer==="Rock") return "user";
//    if(user==="Scissor" && computer==="paper") return "user";
//    return "computer";
// }

// console.log(rps("Rock","Rock"));
// console.log(rps("Rock","Scissor"));
// console.log(rps("Rock","paper"));
// console.log(rps("paper","Scissor"));


//loops statement
//for loop statement

// for(let i=1;i<101;i++){
//    console.log(i);
// }

//while loop statement

// let i=1;
// while(i<100){
//    console.log(i);
//    i++;
// }


//do while loop statement

// let i=0;
// do{
//    console.log(i);
//    i++;
// }while(i<10);



//Q1. Print the numbers from 1 to 10 using for loop

// for(let i=1;i<=10;i++){
//    console.log(i);
// }


//Q2. print the numbers from the 10 to 1 using a while loop

// let i=10;
// while(i>0){
//    console.log(i);
//    i--;
// }


// Q3. Print the even number from 1 to 20 using for loop

// for(let i=2;i<=20;i+=2){
//    console.log(i);
// }


//Q4. print the odd numbers from 1 to 15 using while loop

// let i=1;
// while(i<=15){
//    console.log(i);
//    i+=2;
// }


//Q5. print the multiplication table of 5

// let i=1;
// while(i<=10){
//    console.log("5 * ",i,"=",5*i);
//    i++;
// }


//Q6. find the sume of numbers from 1 to 100 using loop
// let sum =0;
// for(let i=1;i<=100;i++){
//    sum+=i;
// }
// console.log(sum);


//Q7. Print all the number between 1 to 50 that are divisible by 3

// for(let i =3;i<=50;i+=3){
//    console.log(i);
// }


//Q8.ask the use for a number and print whether each number from 1 to that number is even or odd.(e.g. "1 is odd","2 is even")

// let val= prompt("give a number");
// for(let i=1;i<=val;i++){
//    if(i%2===0){
//       console.log(`${i} is even`);
//    }else{
//       console.log(`${i} is odd`);
//    }
// }

//Q9 . count how many numbers between 1 to 100 are divisible by both 3 and 5
// let count =0;
// for(let i=1;i<=100;i++){
//    if(i%3===0 && i%5===0){
//       count++;
//    }
// }
// console.log(count);



// write a loop from 1 to 20 that :
//skips number divisible by 3
// prints all others

// for(let i=0;i<=20;i++){
//    if(i%3===0){
//       continue;
//    }else{
//       console.log(i);
//    }
// }

//functions
//functions statement
// function dance(){
//    let val = prompt("Enter your name");
//    console.log(val);
// }

// dance();


//fat arrow function

// let kartikey =()=>{
//    console.log("Hii kartikey what are you doing");
// }
// kartikey();


// fucntion expressions

// let kartik =function(){
//       let k = prompt("enter your age");
//    console.log(`hallo kartikey your age is  ${k}`);
// } 
// console.log(kartik());



//jab arguements kai sare ho to humein utne hi parameter banane padege, issey bachne ke liye , hum rest ka use krte hia  ... agar ... function parameters space mein lage to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator


// function abcd(...value){
//    console.log(value);
// }
// abcd(1,2,3,4,5,6,6,7,9);


// function kartik(v){
//    return 23+v;
   
// }
// console.log(kartik(23));

//first class function -> functions ko values ki tarah treat krna

// function abcd(val){
//    val();
// }
// abcd(function(){
//    console.log("hey");
// });



//higher order function -> wo function hota hai jo ki return kre function ya fir  accept kre ek function apne parameter mein

// function abcd(val){
//    // ye vala function ab higher order function hai 

// }
// abcd(function(){

// })


// function abcd(){
//    return function p(){
// ye bhi higher order function ko represent krta hai 
//    }
// }
// abcd();


//pure vs impure function

//aisa function jo bahar ki value ko naa badle wo hai pure

// let a =12;
// function abcd(){
//    console.log("hehehe");// that is the fucntion of pure funtion
// }
// function hui(){
//    a++; // that is the function of impure function 
// }


//aisa function jo bahar ki value ko badal de wo hai impure function




//closure-> ek fnc jo return krega ek aur function aur return hone wala function hamesha use karega parent function ka koi variable


// function abcd(){
//    let a=12;
//    return function(){
//       console.log(a);
//    }
// }
// abcd();



//IIFE(immediately invoke function expressions)



// (function(){
//    console.log("hii kartikey");
// // this is we called the IIFE
// })();



//hoisting 

// function me hoisting mtlb ki hm function call agr phle kre to bhi function chlega aur value return krega

// abcd();




// function abcd(){
//    console.log("hii kartikey");
// }



//Q1. what is the differencce between function declaration and expression in terms of hoisting?

// function declaration me hoisting ho jati hai jbki function expressions me hoisting nhi ho pati

// function declaration ka example
// abcd();
// function abcd(){
//    console.log("hii kartikey");
// }


//function expressions ka example

// abcd();
// let value =function(){//abcd is not defined isme aayege reference error
//    console.log("hii kartikey");
// }


// Q2.
// greet(); // execute krega ye
// function greet(){
//    console.log("hello");
// }

// convert the fucntion into arrow function 
// function multiply(a,b){
//    return a*b;
// }

// let multiply =(a,b)=>{
//    return a*b;
// }
// console.log(multiply(3,4));


//use rest parameter to accept any number of scores and return the total


// function abcd(...val){
//    let total =0;

//    val.forEach(function(val){
//       total+=val;

//    });
//    console.log(total);

// }
// abcd(12,13,14,15,16);




//discount calculator
// function discountCalculator(discount){
//    return function(price){
//       return price-price*(discount/100);
//    }
// }
// let ten =discountCalculator(10);
// let twenty=discountCalculator(20);
// console.log(ten(400));
// console.log(twenty(400));


// let arr =[1,2,3,4,5];/
// arr.push(400);// ye last me value ko push kr deta hai 
// arr.pop();// ye last se value ko pop out kr deta hai

// arr.shift();//ye value ko starting se remove krta hai
// arr.unshift(3);//ye value ko add krta hai starting me

// arr.splice(2,3);//isme 2 btata hai konsi index se value htani hai aur 3 btata hai kitni value htani hai 

// let newarr =arr.slice(0,3);// ye main array ko change nhi krega aur ek new array bna dega jo bhi nikaloge value ko array se 
// let newarr=arr.reverse();// ye aapki main array ko bhi change kr dega


// let arr =[43,45,3,2,90,23];
// let sr= arr.sort(function(a,b){
//    // return a-b;//agr hmne a-b  kiya to ye ascending order me dega array 
//    // return b-a// agr hmne b-a kiya to ye descending order me dega array ko
// })



//forEach
// arr.forEach(function(val){
//    console.log(val+5);
// });



//map sirf tab use krna hai jab aapko ek naya array bnana hai pichle array ke data ke basis par
// map dikhte hi saath mein ek blank array bana liya kro

// let newarr=arr.map(function(val){
//    return 12;// ye new array bnake usme jo bhi return kr rhe use dal degea 
// });


//jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kucch values ko rkhega tab map lagega




//filter

// let arr =[1,2,3,4,5,6,7,8];
// let newarr =arr.filter(function(val){
//    if(val>4){
//       return true;  isme hm return true and false krte hai aur condition dete hai kisme return true krna hai aur kisme false like this we want greater than 4 number is filter out from the array 
// aur filter me bhi ek new array assume kr lete hai jaise hai filter word ko hm dekhte hai
//    }
// });

//reduce function -> isliye use krte hai jb hme pta ho ki mujhe ek single value ko return hai

// let arr=[1,2,3,4,5,6,6,5];
// let newarr =arr.reduce(function(accumulator, val){
//    return accumulator+val;
// },0);

//isme jo accumulator hai vo value store krta hai aur change nhi krta hai values ko , aur iski value hm initialize krte hai curly brackets ke bahar jaise isme hmne ki hai 0 .

//find function-> ye phli value ko return krega jo condition se match kregi
// let arr =[1,2,3,4,4,52,1,34];
// let newarr =arr.find(function(val){
//    return val===1;// ye phli value ko return kr dega jo bhi phli condition se match kregi like isme hmne val===1 ke kiya to isme isne 1 ko return kr diya hai isliye value aayi hai 1.
// })



//some function -> ye true and false return krta hai like ye check krta hai array me ki value exist krti hai ya nhi aur given condition ko fulfill kr rhi hai  ya nhi agr ha to true return kr dega nhi to aise false return krega

// let arr =[34,54,12,90];
// let any= arr.some(function(val){
//    return val>95;
// });

//every function-> ye check krta hai sare values condition ko follow kr rhi hai ya nhi agr kr rhi hai to true value returnn krega nhi to false


// let arr=[3,4,5,7,8,9,43,45];
// let bool=arr.every(function(val){
//    return val>3;//jaise isme ek value 3 ke barabar hai to ye false return kr rha hai
// });



// destruchturing krna 

// let arr =[1,23,4,5,764,344,36,3];
// let [a,b,x,,d]=arr; // ye destruchturing ka ek part hai jisme hm direct ek array me variable ko rkhte hai aur arr pass kr dete hai hme jis bhi index ki value nikalni hoti hai to hm aise krte hai

// spread operator-> ye copy krta hai array ki values ko aur agr hm us copied value me koi changes kr rhe hai to vo real vale me ni dikhega


// let arr =[12,2,23,4,5,52,2,43,2,5,52];
// let arr2=[...arr];// jaise isme arr ki sari values copy ho gyi 
// arr2.shift();// shift function ne phli value ko hta diya aur jb hm first vali array ko print krra rhe hai to vo change nhi ho rhi hai


//Q1 create the array with 3 fruits and print the second fruit
// let arr =["banana","apple",'grapes'];
// let secondElement=arr.splice(1,1);
// console.log(secondElement);


//add "mango " at the end and "pineapple" at the beginnig of the array

// let fruits =["apple","guava","grapes"];
// fruits.push("Mango");// push are use for the pushing the last element of the array
// fruits.unshift("Pineapple")// unshift are use to push the first element of the array

//replace the banana with the kiwi
// let fruits =["apple","banana"];
// fruits.pop();
// fruits.push("Kiwi");


//what is the difference between the .push() and .unshift()?

// .push() are use for the inserting the element at the end of the array and .unshift() are use for the inserting first element of the array 



//insert red and blue at index 1 in this array;
// let colors=["Green","Yellow"];
// colors.splice(1,0,"red","Blue");// splice ek aur kaam krta hai jisme hm value bhi add kr skte hai kisi bhi position pr isme  1 bta rha konsi index se start krna hai aur 0 bta rha kitne element remove krne hai aur red and blue dono ko add krna hia first index pr to unko likh to ve dono add ho jayege


// extract only the 3 middle elements from this array 

// let arr= [1,24,4,5,2,1,14,4,2,2];
// let newarr = arr.slice(3,7);
// console.log(newarr);



//sort the array alphabetically and then reverse it:
// let names =["Zara","arjun","Kartikey","Patel"];
// names.sort().reverse();


// use .map() to square each number 

// let arr =[1,2,3,4,5];
// let newarr=arr.map(function(val){
//    return val*val;
// });


//use .filter() to keep numbers greater than 10;
//  let arr=[2,4,5,6,10,1,4,45];
//  let newarr =arr.filter(function(val){
//   return val>10;
// });


//use .recuce() to find the sum of this array

// let arr=[23,24,26];
// let sum = arr.reduce(function(accumulator ,val){
//    return accumulator+val;
// },0);
  // use .find() to get the first number less than 10

//   let arr=[12,23,45,32,45];
//   let num =arr.find((val)=>{
//    return val>40;
//   });


//use .some() to check if any student has scored below 35

// let arr =[34,24,90,25,89];
// let run = arr.some((val)=>{
//    return val<35;
// });


//use .every() to check if all numbers are even:

// let arr=[3,5,2,1,12,4,6];
// let newarr=arr.every((val)=>{
//    return val%2===0;
// });


//merge two array using spread operator
// let a =[1,4,5];
// let b=[2,5,8];
// let c=[...a,...b];


//add "India " at the first 
// let arr =["USA","UK"];
// let newarr=["India",...arr];

//clone this array properly(not by reference):
// let arr=[1,2,3];
// let arr2=[...arr];
// arr2.pop();

//object

// let obj={
//    name:"Kartikey Patel",
//    age:20,
//    khana:"Chicken",
// };
// let val=obj.khana;// isme hm .(dot) ke baad ke bad jo bhi value likhte hai to jo bhi likha hota hai to use direct object ke andr check kiya jata hai

// let val ="khana";
// console.log(obj[val]);// isme hm jo chahe vo value check kr skte hai object ke andr jaise ki isme hm dekhe ki val naam ki value exist hi nhi krti object ke andr

let obj ={
   name:"Kartikey",
   age:20,
   email:"kartikeypatel@info.com",
   address:{
      city:"Kannauj",
      village:"Subhashnagar",
   },
};
//for-in block in object
// for(let key in obj){
//    //console.log(key); // this is returning the key of the object 
//    console.log(key ,obj[key]);// this ie returning the value of the key of object
// }


// Object.keys(obj); // this returning the array of the keys of the object 

// console.log(Object.entries(obj)); // this is returning the array of array element which are made of the object values


// let obj2={...obj};//spread operator are use for the spread the value and storing the copy of the object

// let obj2= Object.assign({love: "kartikey"},obj); // this is use for the adding the new object value to the object 


//Deep clone -> mtlb ki hm copy kr rhe hai aise object ko jiske andr nested object structure hai
let obj2=JSON.parse(JSON.stringify(obj));// isme json.stringify are use for the change the object in the string and json.parse are use for the change the value of string from the object and this will store the value


obj2.address.city="Kanpur";

