///Exploring JavaScript Objects


//creating  book construct functions and assigning different attribute using the "this."

function book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
}

/// creating a display information function that takes all the objects and create a statment to display that info.

 book.prototype.displayInfo = function () {
    console.log(`Author: ${this.author}, Title: ${this.title}, with ${this.pages} Pages.`)
    };

// created books to verify the construct function works.

const bookNum1 = new book("Great Gabsty", "F.Scott Fitzgerald", 180)
const bookNum2 = new book ("Times Ruin Everything", "Kenza Samir", 168)

// print the display info method using the new books created above.

bookNum1.displayInfo();
bookNum2.displayInfo();

/// created custom console.log to verify the info is readily available if need.

console.log(`${bookNum1.title} with ${bookNum1.pages} pages has more pages than ${bookNum2.title} with ${bookNum2.pages} pages. `)


console.log(`${bookNum1.author} wrote the ${bookNum1.title} while ${bookNum2.author} wrote the ${bookNum2.title}`)


///Exploring Objects and Math in JavaScript

// create an account functions with the respective attributes.

function account (accountNumber, balance, owner){

    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

// assign accounts to for testing.

const accountNum1 = new account(1111, 25, "Jim Doe")
const accountNum2 = new account(1112, 5000, "John Doe")

// creating a account info method.

account.prototype.acctInfo = function () {
    console.log(`${this.owner}, Account number: ${this.accountNumber}, account balance of $${this.balance}.`)
    };

// implement to show the account info.

accountNum1.acctInfo();
accountNum2.acctInfo();


// create a deposit method with functioning amount field and a output blended with the accounts information
account.prototype.deposit = function(amount){
        this.balance += amount;
        console.log(`${this.owner} your request for a $${amount} deposit was successfull. Current balance is now $${this.balance}`)
}

// show output of the deposit method
accountNum1.deposit(10);


// create a withdraw method with functioning amount field and a output blended with the accounts information
account.prototype.withdraw = function(amount){
    if (amount <= this.balance){
        this.balance -= amount;
        console.log(`${this.owner} your request for a $${amount} withdrawal was successfull. Current balance is now $${this.balance} `)
    } else {
        console.log(`Sorry ${this.owner}, Your Current balance is ${this.balance}, you have Insufficenet Funds. GoodBye.`)
    }
};

// show output of the withdraw method
accountNum1.withdraw(5);


account.prototype.ComInterest = function(years, rate) {
    const principal = this.balance;
    const interestRate = rate / 100;
    const compoundedAmount = principal * Math.pow((years + interestRate), years);
    Math.ceil(compoundedAmount);
    
    console.log(`${this.balance}`)
  };

  accountNum1.ComInterest(3,.2);