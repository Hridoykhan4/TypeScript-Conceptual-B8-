"use strict";
class Account {
    id;
    owner;
    _balance;
    nominee;
    constructor(id, owner, _balance, nominee) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nominee = nominee;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    verifyAccount() {
    }
    calculateFee() {
    }
    get balance() {
        this.verifyAccount();
        return this._balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error("Amount can not be less than 0");
        }
        this._balance = this._balance + amount;
    }
    get withDraw() {
        return this._balance;
    }
}
const rahimMoney = new Account("101", "Rahim", 1, 'Joshim');
rahimMoney.nominee = 'Ammu';
rahimMoney.deposit(3);
console.log(rahimMoney);
// Property 'balance' is private and only accessible within class 'Account'.
// rahimMoney.balance = 10
// console.log(rahimMoney);
// console.log(rahimMoney.withDraw);
// console.log(rahimMoney instanceof Account); //true
const fakeAccount = {};
// console.log(fakeAccount instanceof Account); //false
