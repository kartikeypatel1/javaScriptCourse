// {
//     //this is the block also knowns as the (compound statement) means that it is a group of multiple statements
//     let x = 10;
//     console.log(x);
// }


//block scope
{
    var a=20;
    let b=30;
    const c=40;
    console.log(a);// this will give the output 20 because when we write console.log(a) then it will look for the a in the current scope and it will find it then it will give the output 20
    console.log(b);// this will give the output 30 because when we write console.log(b) then it will look for the b in the current scope and it will find it then it will give the output 30
    console.log(c);// this will give the output 40 because when we write console.log(c) then it will look for the c in the current scope and it will find it then it will give the output 40
}
console.log(a);//var type is global scoped thats why we can access it outside the block and it will give the output 20
console.log(b);//let type is block scoped thats why we cannot access it outside the block and it will give the error that b is not defined it give the reference error because we are trying to access the variable b which is not defined in the global scope
console.log(c);//const type is block scoped thats why we cannot access it outside the block and it will give the error that c is not defined it give the reference error because we are trying to access the variable c which is not defined in the global scope


// shadowing code
var a=200;
{
    var a=100;
    let b=30;
    console.log(a);// it give the output of 100 because it is the shadowing of the variable a which is defined in the global scope and it is defined in the block scope with the same name so it will give the output of 100
    console.log(b);// it give the output of 30 because it is defined in the block scope and it is not shadowing any variable so it will give the output of 30 
}
console.log(a);// it give the output of 100 because it is the shadowing of the variable a which is defined in the global scope and it is defined in the block scope with the same name so it will give the output of 100