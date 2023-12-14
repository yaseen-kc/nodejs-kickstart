// Calling 'doSomething1' and chaining a promise chain using 'then' and 'catch'.
doSomething1()
    .then(() => {
        // Calling 'doSomething2' within the first 'then' block.
        return doSomething2().catch(err => {
            // Handling errors for 'doSomething2' and rethrowing the error.
            throw err
        })
    })
    .then(() => {
        // Calling 'doSomething2' within the second 'then' block.
        return doSomething2().catch(err => {
            // Handling errors for 'doSomething2' and rethrowing the error.
            throw err
        })
    })
    // Catching errors from any part of the promise chain.
    .catch(err => console.error(err))
