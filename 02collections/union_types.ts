// Syntax

let value: string | number = "hello"

value = 55

// with types
type User = {
    id: number
    name: string
}

type Admin = {
    id: number
    role: string
}

let user: User | Admin = {
    id: 1,
    name: "Pavan"
}

user = {
    id: 2,
    role: 'admin'
}

// with arrays
let arr: (string | number)[] = ["hello", 55]

// with same type of data in arrays

let arr2: string[] | number[] = ["hello"]
arr2 = [55, 66]

// with strict values
const pi: 3.14 = 3.14
// pi=3.15 Error

let update: "success" | "error" | "loading" = "success"

update = "loading"
// update="fail" Error