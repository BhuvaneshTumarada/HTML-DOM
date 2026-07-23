let age = 15;
try {
    if (age < 18) {
        throw "You must be at least 18 years old.";
    }
    console.log("Access Granted");
} catch (error) {
    console.log(error);
}