// function a(){
//     console.log(b);// this give the output 10 because when we write console.log(b) then it will look for the b in the current scope and it will not find it then it will look for the b in the global scope 
// }
// var b=10;
// a();


function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
    
}
a();
console.log(b);