// combining types

type cardNumber = {
    cardNumber: number;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}
