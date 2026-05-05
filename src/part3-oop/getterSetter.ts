class BankAccount {
    readonly userId: string;
    userName: string;
    private userBalance: number;
    // prptected userBalance: number;

    constructor(userId: string, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance;
    //     return this.userBalance
    // } 

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount
    }

    // get getBalance() {
    //     return this.userBalance
    // }

    get getBalance() {
        return this.userBalance
    }

}



const dippoVaiAcount = new BankAccount("1", "John", 10000)

// dippoVaiAcount.addBalance(5000) 
// console.log(dippoVaiAcount.getBalance())

dippoVaiAcount.addBalance = 10000;
console.log(dippoVaiAcount.getBalance);
