console.log(a);//var a is hoisted and initialized with undefined, so it will print undefined
// console.log(b);//let b is hoisted but not initialized, so it will throw a ReferenceError: Cannot access 'b' before initialization
var a=10;
let b=20;
console.log(b);// it will print 20 because let b is initialized with 20 and it is in the current scope


