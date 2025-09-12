// type Aliases
type User = {
    name:string;
    email: string;
    isActive: boolean;
}

function createUser(user:User):User{
    return user;
}

createUser({name:"John", email:"john@mai.com", isActive:true});



