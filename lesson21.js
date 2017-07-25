/* eslint-disable no-undef, no-unused-vars, no-const-assign */
"use strict";

function outer() {
    const a = 1;

    function inner() {
        const b = 2;

        console.log(a + b);
    }

    inner();
    console.log(a);
}

outer();