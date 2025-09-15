interface User {
    readonly dbId: number,
    email: string,
    username: string,
    googleId?: string,
    id: number,
    // saying startTrial variable a method
    startTrial: () => string,
    // saying getCoupon is always a method
    getCoupon(coupon_name: string, discount: number): string
}

// reopening interface
interface User {
    githubToken: string
}

// inheriting interface
interface Admin extends User {
    role: "admin" | "learner"
}

const oldUser: Admin = {
    role: "admin",
    email: "user@user.com",
    username: "user123",
    githubToken: "github",
    id: 1,
    dbId: 22,
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (couponname: "newuser10", off: 10) => {
        return "coupon applied"
    }
}