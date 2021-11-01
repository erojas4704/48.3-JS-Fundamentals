function createAccount(pin, balance = 0) {
    return {
        checkBalance: function (accessPin) {
            if (accessPin !== pin) return "Invalid PIN.";
            return `$${balance}`;
        },

        deposit: function (accessPin, amount) {
            if (accessPin !== pin) return "Invalid PIN.";
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },

        withdraw: function (accessPin, amount) {
            if (accessPin !== pin) return "Invalid PIN.";
            if (amount > balance) return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },

        changePin: function (accessPin, newPin) {
            if (accessPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
