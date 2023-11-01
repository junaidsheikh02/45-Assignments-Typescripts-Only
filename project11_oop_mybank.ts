class BankAccount {
    private balance: number;
  
    constructor(balance: number) {
      this.balance = balance;
    }
  
    deposit(amount: number): boolean {
      if (amount > 0) {
        this.balance += amount;
        return true;
      }
      return false;
    }
  
    withdraw(amount: number): boolean {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new BankAccount(1000);
  const balanceElement = document.getElementById('balance') as HTMLSpanElement;
  const amountInput = document.getElementById('amount') as HTMLInputElement;
  const depositButton = document.getElementById('deposit') as HTMLButtonElement;
  const withdrawButton = document.getElementById('withdraw') as HTMLButtonElement;
  
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
  