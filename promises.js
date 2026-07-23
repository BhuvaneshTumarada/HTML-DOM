let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Failed to Load Data");
    }

});

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});