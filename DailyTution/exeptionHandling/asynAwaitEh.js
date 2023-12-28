// Defining an asynchronous function 'someFunction'.
async function someFunction() {
    try {
        // Using 'await' to asynchronously execute 'someOtherFunction'.
        await someOtherFunction();
    } catch (err) {
        // Catching and handling errors if 'someOtherFunction' throws an error.
        console.error(err.message);
    }
}
