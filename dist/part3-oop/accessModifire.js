"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance) {
        this.userBalance = this.userBalance + balance;
        return this.userBalance;
    }
}
const dippoVaiAcount = new BankAccount("1", "John", 10000);
dippoVaiAcount.addBalance(5000);
console.log(dippoVaiAcount);
//# sourceMappingURL=accessModifire.js.map