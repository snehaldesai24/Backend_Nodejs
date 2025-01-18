function fncreatefolder(){
    //write logic to send a request to server
    //1=>url,2=>object
    fetch("http://localhost:4646/create",{}).then((res)=>{
        return res.text()  //server we are sending string data so used text
    }).then((data)=>{
        console.log(data);
        document.getElementById("response").innerHTML = data;
    }).catch((error)=>{
        alert("Something Wrong")
    }); 
}

function fndeletefolder(){
    fetch("http://localhost:4646/delete",{}).then((res)=>{
        return res.text()  
    }).then((data)=>{
        console.log(data);
        document.getElementById("response").innerHTML = data;
    }).catch((error)=>{
        alert("Something Wrong")
    }); 
}

