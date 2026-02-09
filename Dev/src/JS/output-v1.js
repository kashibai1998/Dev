console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve(console.log("Promise.resolve")).then(() =>
  console.log("Promise")
);

new Promise((resolve, reject) => {
  console.log("New Promise");
  resolve("new p");
}).then((data) => console.log("New Promise", data));

console.log("End");

//Start
//Promise.resolve
//New Promise
//End
//Promise
//New Promise, new p
//Timeout
