// Creating a buffer 'but' from the string "Hey".
const but = Buffer.from("Hey")

// Creating a buffer 'but1' with a length of 4 and writing the string "Hai!!" into it.
const but1 = Buffer.alloc(4)
but1.write("Hai!!")

// Logging the 'but' buffer.
console.log(but)

// Logging the string representation of the 'but' buffer.
console.log(but.toString())

// Accessing individual elements of the 'but' buffer and logging them.
console.log(but[0])
console.log(but[1])
console.log(but[2])

// Accessing individual elements of the 'but1' buffer and logging them.
console.log(but1[0])
console.log(but1[1])
console.log(but1[2])

// Modifying an element in 'but1' and logging the updated string representation.
but1[1] = 111
console.log(but1.toString())
