// //using Named Export
// export class Emp{
//     empName;
//     salary;
//     constructor(){
//         this.empName = "Mayara Sharma";
//         this.salary = 90000;
//     }

//     print(){
//         console.log(this.empName,this.salary);
//     }
// }

// export var exp = 10;

//using default Export
 class Emp{
    empName;
    salary;
    constructor(){
        this.empName = "Mayara Sharma";
        this.salary = 90000;
    }

    print(){
        console.log(this.empName,this.salary);
    }
}

 var exp = 10;

 export {Emp, exp}