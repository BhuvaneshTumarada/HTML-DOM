function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 3000);
    });
}
async function display() {
    console.log("Loading...");
    let result = await getData();
    console.log(result);
}
display();