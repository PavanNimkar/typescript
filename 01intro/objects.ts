const User = {
    name: "Pavan",
    email: "nimkar@gmail.com",
    isActive: true
}

function createUser({ name: string, isActive: boolean }): void { }
createUser({ name: "pavan", isActive: false })
// object returns object

function createCourse(): { name: string, price: number } {
    return { name: "Python", price: 400 }
}

// bad objects

const CreatedUser = {
    name: "Pavan",
    email: "pavan@pavan.com",
    isActive: false,
    age: 22
}

createUser(CreatedUser)
