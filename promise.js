let p = new Promise((resolve, reject) => {
  let num = 2;
  if (num === 1) {
    resolve("Number equal 1");
  } else {
    reject("Number not equal to 1");
  }
});

p.then((value) => {
  console.log("DONE: ", value);
}).catch((rejectedValue) => {
  console.log(`This was rejected: ${rejectedValue}`);
});

// p.then((otherValue) => {
//   console.log("ALSO DONE: ", otherValue);
// });
