/* eslint-disable no-undef */
/* eslint-disable no-alert */
"use strict";

const crap = [3];

for (let i = 0; i < 3; i++) {
    crap[i] = prompt("Add something to the array:", "");
}

document.write(crap[0] + crap[1] + crap[2]);