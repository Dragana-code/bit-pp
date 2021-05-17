/* 1. Write a program that calculates the maximum of two given numbers.*/

function max(a, b) {
    if (a > b) {
        var c = a;
        return c;
    } else {
        var c = b;
        return c;
    }
}
var m = max(3, 8);
console.log(m);


/* 2. Write a program that checks if a given number is odd. */

function odd(a) {
    if (a % 2 == 0) {
        var x = 'number is even';
        return x;
    } else {
        var x = 'number is odd';
        return x;
    }
}
var y = odd(12);
console.log(y);


/* 3. Write a program that checks if a given number is a three digit long number. */


function digit(a) {
    if (a > 99 && a < 1000) {
        var d = a;
        return d;
    } else {
        var d = 'wrong number';
        return d;
    }
}
var digLenght = digit(98);
console.log(digLenght);


/* 4. Write a program that calculates an arithmetic mean of four numbers. */

function numbers(a, b, c, d) {
    var sum = a + b + c + d;
    var aritMean = sum / 4;
    return aritMean;
}
var aritMean = numbers(8, 7, 3, 6);
console.log(aritMean);


/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/

function drawSquare(n) {
    var square = '';
    for (var row = 0; row < n; row++) {
        for (var col = 0; col < n; col++) {
            if (row === 0 || row === n - 1) {
                square += '* ';
            } else if (col === 0 || col === n - 1) {
                square += '* ';
            } else {
                square += '  ';
            }
        }
        square += '\n';
    }
    return square;
}

var draw = drawSquare(5);
console.log(draw);

/* 6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function horizontalChart(x, y, z) {
    var chart = '';
    for (var i = 0; i < x; i++) {
        chart += '*';
    }
    chart += '\n';
    for (var i = 0; i < y; i++) {
        chart += '*';
    }
    chart += '\n';
    for (var i = 0; i < z; i++) {
        chart += '*';
    }
    return chart;
}
var horChar = horizontalChart(5, 3, 7);
console.log(horChar);

//another solution:

function horizontalChart() {
    var chart = '';
    var numOfArgs = arguments.length;
    for (var j = 0; j < numOfArgs; j++) {
        for (var i = 0; i < arguments[j]; i++) {
            chart += '*';
        }
        chart += '\n';
    }
    return chart;
}
var horChar = horizontalChart(15, 23, 7, 1, 16, 3);
console.log(horChar);


/* 7. Write a program that calculates a number of digits of a given number. */

function numOfDigits(n) {

    n = n + '';
    return n.length;
}
var result = numOfDigits(135698985);
console.log(result);

// another solution

function numOfDigits(n) {
    var counter = 0;
    if (n < 0) {
        n *= -1;
    }
    while (n >= 1) {
        counter++;
        n /= 10;
    }
    return counter;
}
var result = numOfDigits(135);
console.log(result);

/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function countNumber(a, e) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count++;
        }
    }
    return count;
}

var number = countNumber([2, 4, 7, 8, 7, 7, 1], 7);
console.log(number);


/* 9. Write a program that calculates the sum of odd elements of a given array. */

function oddSum(a) {

    for (var i = 0; i < a.length; i++) {
        var sum = 0;
        if (a[i] & 2 == 0) {
            sum += a[i];
        }
    }
    return sum;
}
var sumOfOdd = oddSum([9, 5, 6, 2]);
console.log(sumOfOdd);



/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */

function letterA(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'A') {
            count = count + 1;
        }
    }
    return count;
}

var letterApp = letterA('a, h, K, A, o, a');
console.log(letterApp);


/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenateString(string) {

    var i = 1;
    var newString = '';
    while (i <= 4) {
        newString += string;
        i++;
    }
    return newString;
}
var conString = concatenateString('abc');
console.log(conString);

