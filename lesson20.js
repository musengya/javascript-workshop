/* eslint-disable no-undef, no-unused-vars, no-const-assign */
"use strict";

function printAmount() {
    document.write(amount.toFixed(2));
}

let amount = 99.99;

printAmount();
amount = amount * 2;
printAmount();
