console.log("hello welcome to node.js");

const Demo=(a=0,b=0)=>{
    return a+b;
}
console.log(Demo(30,40));


// callback function
// behaves like ssynsc i.e parallel execution it doesnot wait for another fuctions execution
// passing one function inside another function as a argument
// or execute one function into another function
// one funtion execute after another funciton finish their execution


function A(){
    console.log("hello function A");
}

function B(callback){
    callback();
    console.log("hello function B");
}
B(A);

const Calsi=(a,b)=>{
    // console.log(a+b);
    return a+b


}
const Addition=(callback,x,y)=>{
    let result=callback(20,20+x+y)
    console.log("Addition funtion",result)
}

Addition(Calsi,100,200)

// higher Order Funtion-HOf
// such a funciton which we pass one funtion into another funtion as a argument eg:callback funtiom
// one function returns another funtion
// eg:

function Mult(x){
    return function B(y){
        console.log(x*y);
    }
}
Mult(20)(10)


// map method
