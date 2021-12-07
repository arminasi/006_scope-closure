"use strict"

function isTruly(arr) {
    arr.forEach(function (val) {
        if(val)
            console.log(val);
    });
}

isTruly([null, true, {}, {name: "Elon" }, "", NaN, 0]);
isTruly(["hell0", 1233, []]);