console.log("This is the starting point of my code");

setTimeout(() => {
    console.log("This is first timeout function");
}, 5000);

setTimeout(() => {
    console.log("This is second timeout function");
}, 2000);
setTimeout(() => {
    console.log("This statement will be executed after 0 seconds");
}, 0);

process.nextTick(() => {
    console.log("This is process.nextTick code");
});

new Promise((resolve, reject) => {
     let success=false;
     if(success)
          resolve("Data Loaded successfully");
     else
    reject("Something went wrong");
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

new Promise((resolve) => {
    setTimeout(() => {
     resolve("Task completed this time");
    }, 10000);
 }).then((result) => console.log(result));
 console.log("This is the end point of my code");