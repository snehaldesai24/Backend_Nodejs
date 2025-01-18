function getName() {
    return "Hello, Rajma";
  }
  
  function myFun() {
    let promise = new Promise((resolve, reject) => {
      resolve({ name: "Ram", city: "hyd" });
      // reject({ error: "Something went" });
    });
  
    return promise;
  }
  
  async function getPromiseData() {
    try {
      var res = await myFun();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  
  getPromiseData();