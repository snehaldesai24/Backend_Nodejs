function f1(x){
    x()
    console.log("f1 is called");
x();

}
//pass anonymous function
// f1(function(){
//     var a=10;
//     var b=20;
//     console.log(a+b);

// });
//pass named function as callback function
// f1(function add(){
//     var a=30;
//     var b=50;
//     console.log(a + b);
// });

function fncallback(){
    console.log("it is a callback function");
}
f1(fncallback);

//arrow function
f1(()=>{
    console.log("Arrow function as a callback function");
})