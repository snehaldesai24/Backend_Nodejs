//using then and catch is very complex so overcome this issue we use aynch and await.
function f1(){
    var promiseobj= new Promise(function(resolve,reject){
        resolve({
            f1:"f1 is called",
        });
    });
    return promiseobj;
}
function f2(f1data){
    var promiseobj= new Promise(function(resolve,reject){
        resolve({
            ...f1data,
            f2:"f2 is called",
        });
    });
    return promiseobj;
}

f1().then(function(res){
    //console.log(res);
    return f2(res);
})
.then((f2data)=>{
    //console.log(f2data);
    return f3(f2data);
})
.then((f3data)=>{
    console.log(f3data);   
})
.catch(function(error){
    //console.log()
});
function f3(f2data){
    var promiseobj= new Promise(function(resolve,reject){
        resolve({
            ...f2data,
            f3:"f3 is called",
        });
    });
    return promiseobj;
}