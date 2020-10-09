function fix_name(name) {
  let promise = new Promise(function (resolve, reject) {
    try {
      let new_name = name.replace("-", " ");
      resolve(new_name);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

let fixedName = fix_name("andrew-bell").then(function (result) {
  return result;
});

fixedName.then(function (result) {
  let message = `Hello ${result}`;
  console.log(message);
});
