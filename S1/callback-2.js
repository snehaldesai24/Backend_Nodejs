//pass f3 as a callback to f2 =>f2(f3) , pass f2 as a callback to f1 => f1(f2)

function f1(f1Para){  //f1para store f2 function
    console.log("f1 is called");
    f1Para(f3);  //f2 calling
}

function f2(f2Para){  //f2para store f3 function
    console.log("f2 is called");
    f2Para();  //f3 call
}

function f3(){
    console.log("f3 is called");
}

//f2(f3);
f1(f2);