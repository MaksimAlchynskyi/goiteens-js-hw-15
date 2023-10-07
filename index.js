"use strikt"

// 1.
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
    name: "Mango",
    age: 20,
    hobby: "HTML",
    premium: true
}
let {mood, hobby, premium} = user
mood = "happy";
hobby = "skydiving"
premium = false;
user.mood = "happy";
user.hobby = "skydiving"
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(key);
    console.log(user[key]);
    }

    // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const countProps = function(obj) {
    const keys = Object.keys(obj)
    return keys.length;
}
console.log(countProps({}));

console.log(countProps({ mail: 'james@gmail.com', isOnline: false, score: 50000 }));

// 3. 
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
    for (const employee in employees) {
        const tasksCompleted = employees[employee];
        if (tasksCompleted > maxTasks) {
          maxTasks = tasksCompleted;
          bestEmployee = employee;
        }
    }
    return bestEmployee;
  };
console.log(findBestEmployee({
      Gleb: 44,
      Michael: 43,
      Dimitri: 20,
      Sasha: 5,
    }),
  );

  // 4.
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
    const valuesEmployees = Object.values(employees)
    let total = 0;
    for (const valueEmployee of valuesEmployees) {
        total += valueEmployee; 
    }   
    return total;
  };
  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      Jorge: 40,
      Gosha: 100,
      Archibald: 150,
    }),
  ); 

  //   5.
//   Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві. 
const products = [
    { name: 'Radar', price: 10300, quantity: 7 },
    { name: 'Scanner', price: 200, quantity: 4 },
    { name: 'Droid', price: 1900, quantity: 9 },
    { name: 'Capture', price: 5000, quantity: 12 },
  ];
  
  const getAllPropValues = function (arr, prop) {
    const propValues = [];
    for (const item of arr) {
        const {name, price, quantity} = item;
      if (item.hasOwnProperty(prop)) {
        propValues.push(item[prop]);
      }
    }
  
    return propValues;
  };
  
  console.log(getAllPropValues(products, 'name'));
  
  console.log(getAllPropValues(products, 'quantity'));
  
  console.log(getAllPropValues(products, 'category'));
//   6.
//   Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
//   Викличи функції для перевірки працездатності твоєї реалізації.
  const games = [
    { name: 'Domino', price: 600, quantity: 2 },
    { name: 'Monopoly', price: 1000, quantity: 5 },
    { name: 'Chess', price: 500, quantity: 3 },
    { name: 'Cards', price: 20, quantity: 7 },
  ];
  
  const calculateTotalPrice = function (allgames, gameName) {
    for (const {name, price, quantity} of allgames) {
        if (name === gameName) {
            return price * quantity;
          }
        }
    };
  
  console.log(calculateTotalPrice(games, 'Domino'));
  
  console.log(calculateTotalPrice(games, 'Chess'));

  console.log(calculateTotalPrice(games, 'Monopoly'));

  console.log(calculateTotalPrice(games, 'Cards'));

  // 7.
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [{id: 0, type: "deposit", amount: 0}],
  
    createTransaction(amount, type) {
      const transaction = { 
        id: this.transactions.length + 1, 
        type, 
        amount 
      };
      return transaction;
    },
  
    deposit(amount) {
      const {transactions} = this
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      transactions.push(transaction);
      this.balance += amount;
      return console.log(`Ваш рахунок поповнено на ${amount}`);
    },
  
    withdraw(amount) {
      const {transactions} = this
      if (amount > this.balance) {
        console.log("зняття суми відхилено, недостатньо коштів.");
        return;
      }
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      transactions.push(transaction);
      this.balance -= amount;
      return console.log(`З рахунку знято ${amount}`);
    },
  
    getBalance() {
      const {balance} = this
      return balance
    },
  
    getTransactionDetails(id) {
      const {transactions} = this;
      for (const transaction of transactions) {
        if (transaction.id === id) {
          return transaction
        }
      }
    },
  
    getTransactionTotal(type) {
      let sum = 0;
      const {transactions} = this;
      for (const transaction of transactions) {
        if (transaction.type === type) {
          sum += transaction.amount
        }
      }
      return sum;
    },
  };
  
  account.deposit(1000000);
  account.withdraw(500);  
  account.deposit(12312323);
  
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(4));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));