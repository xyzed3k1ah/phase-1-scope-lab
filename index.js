// Write your solution in this file!
// Declare a variable in global scope called customerName
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a variable in global scope and assigns it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that changes the value of bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// Attempt to change the value of the constant and see what happens
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will result in an error because you cannot reassign a constant.
}
