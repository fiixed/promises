var urls = [
  "https://dog.ceo/api/breed/beagle/images/random",
  "https://dog.ceo/api/breed/chow/images/random",
  "https://dog.ceo/api/breed/akita/images/random",
  "https://dog.ceo/api/breed/dingo/images/random",
  "https://dog.ceo/api/breed/eskimo/images/random",
];

// use fetch to call each of these and console log 'data was fetched'

//   urls.forEach((link) => {
//     fetch(link).then(() => {
//         console.log('data was fetched');
//     }).catch((error) => {
//         console.log('an error occured');
//     });
//   });

let promiseArray = [fetch(urls[0]), fetch(urls[1])];
Promise.all(promiseArray).then((results) => {
  console.log("all promises have run successfully");
});
