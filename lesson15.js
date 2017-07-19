/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";

function printTime() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    document.write(hours + ":" + mins + ":" + seconds + "<br/>");
}

setInterval(printTime(), 1000);