class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True
        return False

    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            return True
        return False

account = BankAccount(1000)

while True:
    print(f'Account Balance: ${account.balance}')
    choice = input('Enter D to deposit, W to withdraw, or Q to quit: ').upper()
    
    if choice == 'D':
        amount = float(input('Enter the deposit amount: '))
        if account.deposit(amount):
            print(f'Deposited ${amount}')
        else:
            print('Invalid deposit amount.')
    elif choice == 'W':
        amount = float(input('Enter the withdrawal amount: '))
        if account.withdraw(amount):
            print(f'Withdrawn ${amount}')
        else:
            print('Invalid withdrawal amount.')
    elif choice == 'Q':
        break
    else:
        print('Invalid choice. Try again.')
