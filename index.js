// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = 'tony';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'johnny';
}
