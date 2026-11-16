class Account {
  constructor(
    readonly id: string,
    public owner: string,
    private _balance: number,
    public nominee?: string
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }


  private verifyAccount() {

  }

  private calculateFee () {

  }

  get balance() : number {
    this.verifyAccount()
    return this._balance
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error("Amount can not be less than 0");
    }
    this._balance = this._balance + amount;
  }

  get withDraw(): number {
    return this._balance;
  }
}

const rahimMoney = new Account("101", "Rahim", 1, 'Joshim');
rahimMoney.nominee = 'Ammu'
rahimMoney.deposit(3);
console.log(rahimMoney);

// Property 'balance' is private and only accessible within class 'Account'.
// rahimMoney.balance = 10
// console.log(rahimMoney);

// console.log(rahimMoney.withDraw);

// console.log(rahimMoney instanceof Account); //true

const fakeAccount = {};

// console.log(fakeAccount instanceof Account); //false
