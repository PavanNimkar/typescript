// tuples are used in api and database

let tuser: [number, string, boolean];

tuser = [1, "John", true]

let newTuple: [number, string] = [2, "Doe"]

// tupes with types

type User = [number, string]

const newUser: User = [3, "Smith"]

newUser.push(4) // no error we can push but not reassign
// newUser[1] = 5 // error we cannot reassign