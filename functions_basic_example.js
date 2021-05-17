function sumOfTwoNums(a, b) {
    var result = a + b;
    return result;
}

function sumOfAllNums() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var sum = sumOfTwoNums(1, 3, 102, 6); // javascript ignores 102 and 6
var sumAll = sumOfAllNums(17, 5, 23, 10);

console.log(sum);
console.log(sumAll);

// Write a program that checks if a given number is odd.

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

var someValue = 3;

if (isOdd(someValue)) {
    console.log('Odd');
} else {
    console.log('Even');
}

// Write a program that checks if a given number is a three digit long number.

function isThreeDigit(num) {
    var abs = num;
    if (abs < 0) {
        abs *= -1;
    }
    if (abs > 99 && abs < 1000) {
        return true;
    }
    return false;
}
console.log(isThreeDigit(-124));