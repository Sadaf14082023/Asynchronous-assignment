         // Topic : Asynchronous
         // Quiestion no 01
          
async function fetchGreeting(){
    return setTimeout(() => {
        console.log("Hello Everyone");

    }, 2000)
}
fetchGreeting();


         // Quiestion no 02

 function simulateTask(){
    console.log("Task started");

    setTimeout(() => {
      console.log("Task completed");  
 }, 1000);  
}
simulateTask();     


         // Quiestion no 03

 function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 1000);  
    });
 }  
 fetchData().then((result) => {
    console.log(result);
 }) 
 
 
          // Quiestion no 04

 function fetchWithError(){
    return new Promise( (res,rej) => {
      setTimeout( () => {
        res("Data Fetched Successfully"), 1000;
      });
      rej("Data Fetched Failed!");  
    });
 }  
 fetchWithError()
 .then((result) => {
    console.log(result);
 })  
 .catch((error) => {
    console.log(error);
 });   
 
 
           // Quiesation no 05

 function fetchData3() {
    return new Promise((resolve, reject) => {
        resolve("Data fetched");
    });
 } 
 function processData() {
    return new Promise((resolve, reject) => {
        reject("Data processed");
    });
 } 
 function executesSequentially() {
    fetchData3().then((result) => {
        console.log(result);
        processData().catch((error) => {
            console.log(error);
        });
    });
 }    
 executesSequentially();