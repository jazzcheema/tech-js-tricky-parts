function createAccount(pin, amount) {
  let balance = 0;
  if (amount) {
    balance = amount;
  }
  let accountPin = pin;

  function isValidPin(enteredPin) {
    return accountPin === enteredPin;
  }

  return {
    checkBalance: function(pin) {
      if (!isValidPin(pin)) return "Invalid PIN.";
      return `$${balance}`;
    },
    deposit: function(pin, depositAmount) {
      if (!isValidPin(pin)) return "Invalid PIN.";
      balance += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
    },
    withdraw: function(pin, withdrawAmount) {
      if (!isValidPin(pin)) return "Invalid PIN.";
      if (balance < withdrawAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      balance -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
    },
    changePin: function(oldPin, newPin) {
      if (!isValidPin(oldPin)) return "Invalid PIN.";
      accountPin = newPin;
      return "PIN successfully changed!";
    }
  }
}

module.exports = { createAccount };
