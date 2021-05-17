/*Write a program that compares two numbers and display the larger. Result should be displayed in the console.
*/


var a = 6;
var b = -10;
if (a > b) {
    console.log(a + " je vece od " + b);
} else if (a < b) {
    console.log(a + " je manje od " + b);
} else {
    console.log(a + " je jednako " + b);
}


/*Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd
*/


var a = 9;
if (a % 2 == 0) {
    console.log("number " + a + " is even");
} else {
    console.log("number " + a + " is odd");
}


/*Write a program to check if the number is divisible by 3 and 5. If it is, print that number.
Sample numbers: 15, 12 (check one at the time)
Output: 15
*/

var a = 0;
if (a == 0) {
    console.log("number is 0")
}
else if (a % 3 == 0 && a % 5 == 0) {
    console.log("number " + a + " is divisible by 3 and 5");
} else if (a % 3 == 0) {
    console.log("number " + a + " is divisible by");
} else if (a % 5 == 0) {
    console.log("number " + a + " is divisible by 5");
} else {
    console.log("number " + a + " is not divisible by 3 and 5");
}


/*Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -
*/

var a = 3, b = -7, c = 2, d;
d = a * b * c;
(d < 0) ? console.log("negative number") : console.log("positive number");


/*Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X
*/

var a = null;
if (typeof a === "number") {
    if (a % 2 == 0) {
        a = a / 2;
        console.log(a);
    } else {
        console.log("x");
    }
} else {
    console.log("wrong value");
}


/*Write a conditional statement to find the largest of five numbers. Display the result in console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0
*/

var a = -5, b = -2, c = -6, d = 0, f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > b && d > c && d > f) {
    console.log(d);
} else {
    console.log(f);
}


/*Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

var a = 10, b = 11, c = 4;
if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }

} if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} if (c > a && c > b) {
    if (a > b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
}

