// combining types

type cardNmber = {
    cardNumber: number;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}
