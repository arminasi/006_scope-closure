"use strict"

function isLenLessThanThree(arr) {
    let filtered = arr.filter(function (val) {
        return val.length > 3;
    });
    return filtered;
}

let filtered = isLenLessThanThree(["kia", "tesla", "bmw", "mercedes"]);
console.log(filtered);
