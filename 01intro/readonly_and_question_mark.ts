type User = {
    readonly id: string;
    name: string;
    email: string;
    creditCardDetails?: number;  // Fixed typo
}

const myUser: User = {
    id: "1234",
    name: "John",
    email: "john@g.com",
}
