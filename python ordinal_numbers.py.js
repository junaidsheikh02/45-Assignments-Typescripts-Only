"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = `${number}th`;
    }
    console.log(ordinal);
}
1;
st;
2n;
d;
3;
rd;
4;
th;
5;
th;
6;
th;
7;
th;
8;
th;
9;
th;
