var a=10;
function b(){
    var a=100;

}
console.log(window.a);// if we write window.a then it will look for the a in the global scope and it will print 10 because the a is present in the global scope.
console.log(a);// if we write a without window then it will assume that the a is present in the current scope and it will print 10 but if we write window.a then it will look for the a in the global scope and it will print 10 because the a is present in the global scope.