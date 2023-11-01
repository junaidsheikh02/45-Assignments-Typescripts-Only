"use strict";
class Account {
    constructor(accountNumber, pin, balance) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = balance;
    }
}
class ATM {
    constructor() {
        this.accounts = [];
        // Initialize accounts (for simplicity, use an array; in reality, use a database)
        this.accounts.push(new Account("12345", "1234", 1000));
        this.accounts.push(new Account("67890", "5678", 500));
    }
    authenticate(accountNumber, pin) {
        // Simulate account authentication
        const account = this.accounts.find((acc) => acc.accountNumber === accountNumber && acc.pin === pin);
        return account || null;
    }
    withdraw(account, amount) {
        if (amount > account.balance) {
            return false; // Insufficient funds
        }
        account.balance -= amount;
        return true; // Successful withdrawal
    }
    deposit(account, amount) {
        account.balance += amount;
    }
    getBalance(account) {
        return account.balance;
    }
}
// Example usage:
const atm = new ATM();
const authenticatedAccount = atm.authenticate("12345", "1234");
if (authenticatedAccount) {
    console.log("Authentication successful.");
    const withdrawalSuccess = atm.withdraw(authenticatedAccount, 200);
    if (withdrawalSuccess) {
        console.log("Withdrawal successful.");
    }
    else {
        console.log("Insufficient funds.");
    }
    const currentBalance = atm.getBalance(authenticatedAccount);
}
