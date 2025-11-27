function checkNumber(num) {
    if (num > 0) {
        return "The number is positive";
    } else if (num < 0) {
        return "The number is negative";
    } else {
        return "The number is zero";
    }
}


let result = checkNumber(5);
console.log(result);

