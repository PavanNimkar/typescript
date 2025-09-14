// syntax
const superHeroes: string[] = []

superHeroes.push("ironman")

// second syntax
const powers: Array<number> = [1, 23, 4]

// Array with type
type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({ name: "pavan", isActive: true })
allUsers.push({ name: "ritesh", isActive: true })

// array with dimensions
const MLModels: number[][] = [
    [255, 255, 255], [0, 0, 0]
]