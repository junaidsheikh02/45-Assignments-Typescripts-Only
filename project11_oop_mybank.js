"use strict";
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
const balanceElement = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
balanceElement.textContent = account.getBalance().toString();
depositButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (account.deposit(amount)) {
        balanceElement.textContent = account.getBalance().toString();
    }
    amountInput.value = '';
});
withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    if (account.withdraw(amount)) {
        balanceElement.textContent = account.getBalance().toString();
    }
    amountInput.value = '';
});
