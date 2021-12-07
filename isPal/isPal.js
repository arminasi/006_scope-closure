"use strict"

// function don't working correctly

function isPal(str) {
    let inc = 1;
    let dec = -1;
    let right = [];
    let left = [];
    let lMedian = Math.round(str.length/2) - 1;
    let rMedian = Math.round(str.length/2) - 1;
    for(i = 0; i < str.length; i++) {
        right[i] = str[lMedian += inc];
        left[i] = str[rMedian += dec];
    }
    let newRight = right.filter(function (val) {
        return val;
    }).join("");
    let newLeft = left.filter(function(val) {
        return val;
    }).join("");

    console.log(newLeft === newRight);
}

isPal("dontnod");