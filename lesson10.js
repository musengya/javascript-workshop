/* eslint-disable no-undef */
"use strict";

const bp = ["head", "shoulders", "knees", "toes"];

bp.reverse();
bp.push("tongue", "liver");
bp.sort();

const string1 = bp.join();

document.write(string1);