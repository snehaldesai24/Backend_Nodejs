//f1 is passed as callback to f2
//f2 is passed as callback to f3
//f3 is passed as callback to f4
//f4 is passed as callback to f5

function f1(){
    console.log("f1 is called");

}
function f2(f1callback){
    console.log("f2 is called");
    f1callback();  //f1 call
}
function f3(f2callback){
    console.log("f3 is called");
    f2callback(f1); //f2 call
}
function f4(f3callback){
    console.log("f4 is called");
    f3callback(f2);  //f3 call
}
function f5(f4callback){
    console.log("f5 is called");
    f4callback(f3); //f4 call
}
// f2(f1);
// f3(f2);
// f4(f3);
f5(f4);  //OUTPUT=>f5 is called f4 is called f3 is called f2 is called f1 is called =>reverse.