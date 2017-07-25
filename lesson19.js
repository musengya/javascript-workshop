/* eslint-disable no-undef, no-unused-vars, no-const-assign */
"use strict";

const acceccoryPrice = 9.99;
const bankBalance = 302.13;
let amount = 350.99;

amount = amount * 2;

if (amount < bankBalance) {
    document.write("I want to buy the accessory");
    amount = amount + accessoryPrice;
} else {
    document.write("No, thanks.");
}