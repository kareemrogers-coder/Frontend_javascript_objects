### Exploring JavaScript Objects

**Objective:** The aim of this assignment is to deepen understanding and proficiency in manipulating JavaScript objects, including creating objects, accessing properties and methods, using constructors, and working with prototypes.


**Problem Statement:** You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.


**Task 1:** Create a constructor function for the Book object with properties for title, author, and pages.

```js
function book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
}

```

**Task 2:** Implement a method within the Book object to display book information.

```js
book.prototype.displayInfo = function () {
    console.log(`Author: ${this.author}, Title: ${this.title}, with ${this.pages} Pages.`)
    };

const bookNum1 = new book("Great Gabsty", "F.Scott Fitzgerald", 180)
const bookNum2 = new book ("Times Ruin Everything", "Kenza Samir", 168)


bookNum1.displayInfo();
bookNum2.displayInfo();
```


### Exploring Objects and Math in JavaScript

**Task 1:** Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

```js
function account (accountNumber, balance, owner){

    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

const accountNum1 = new account(1111, 25, "Jim Doe")
const accountNum2 = new account(1112, 5000, "John Doe")
```

**Task 2:** Implement methods within the Account object to deposit and withdraw funds.

```js
account.prototype.deposit = function(amount){
        this.balance += amount;
        console.log(`${this.owner} your request for a $${amount} deposit was successfull. Current balance is now $${this.balance}`)
}

accountNum1.deposit(10);



account.prototype.withdraw = function(amount){
    if (amount <= this.balance){
        this.balance -= amount;
        console.log(`${this.owner} your request for a $${amount} withdrawal was successfull. Current balance is now $${this.balance} `)
    } else {
        console.log(`Sorry ${this.owner}, Your Current balance is ${this.balance}, you have Insufficenet Funds. GoodBye.`)
    }
};

accountNum1.withdraw(5);

```
**Task 3:** Create a method to calculate compound interest based on the balance and specified interest rate. Allow users to pass a year parameter to your method that represents the # of years the money has been invested and an interest rate. The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...

A=P(1+nr​)^nt

Where:

𝐴
 is the amount of money accumulated after n years, including interest.
𝑃
 is the principal amount (the initial sum of money).
𝑟
 is the annual interest rate (in decimal form).
𝑛
 is the number of times interest is compounded per year (you can use 1 for this example).
𝑡
 is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).

 ```js
account.prototype.ComInterest = function(years, rate) {
    const principal = this.balance;
    const interestRate = rate / 100;
    const compoundedAmount = principal * Math.pow((years + interestRate), years);
   console.log(Math.ceil(compoundedAmount));
    
  };

  // compound being calulate over 5 years using a 0.2(20%) interest.
  accountNum1.ComInterest(5,.2);
 ```