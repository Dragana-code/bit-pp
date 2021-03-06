/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - */

/* 
var a=3, b=-7, c=2;
var d= a*b*c;
if (d < 0){
    console.log("-");
} else {
    console.log(d);
} 
*/

/* Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */

/* 
var x=-5, y=-2, z=-6, w=0, q=-1;
if (x > y && x > z && x < w && x> q) {
    console.log(x);
} else if (y > z && y > w && y > q) {
    console.log(y);
} else if (z > w && z > q) {
    console.log(z);
} else if (w > q) {
    console.log(w);
} else {
    console.log(q);
} 
*/

/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/*
var a=4, b=0, c=-1;
if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} 
else if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c)
    }

    else {
    console.log(b, a, c);
    }
}
else if (c > a && c > b) {
    if (a > b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
} 
*/

/* Task 4. Write a program to check if the variable is a number and if it’s a 
number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X  
*/

/* 
var m=7;
if (m %2 === 0) {
    console.log("10 / 2 = 5");
} else {
    console.log("X");
} 
*/

/* Task 5. Write a program that compares two numbers and displays the larger. 
Display the result in the console.*/

/* 
var a=18, b=18;
if (a > b) {
    console.log(a + " is bigger than " + b);
} else if (a === b) {
    console.log("numbers are the same");
} else {
    console.log(b + " is bigger than " + a);
}
*/

/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, 
Fahrenheit. Formula : F = (9*C/5) + 32 
 where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F */

    /*
    var c = 60, f;
    f = (9*c/5) + 32;
    console.log(c + "°C is " + f + "°F");
    */

    /* Task 7. Write a JavaScript program to get the difference between a given 
    number and 13, if the number is greater than 13 return double difference 
    between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38
    */

    /*
    var num = 13, a = 20, b;
    if (num > a) {
        b = num - a;
        console.log(b);
    } else {
        b = (a - num) * 2;
        console.log(b);
    }
    */

    /* Task 8. Write a JavaScript program to compute the sum of the two given integers. 
    If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48
    */

    /*
    var a = 8, b = 8, c;
    if (a===b) {
        c = (a + b) * 3;
        console.log(c);
    } else {
        c = a + b;
        console.log(c);
    }
    */

    /* Task 9. Write a JavaScript program to check two given numbers and print “true” if 
    one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true
    */

    /*
    var a = 40, b = 10, c;
    c = a + b;
    if (a === 50 || b === 50 || c === 50) {
        console.log(true);
    } else {
        console.log(false);
    }
    */

    /* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 
    400, and print range in which number belongs.
    Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
    */

    /*
    var a = 256;
    if (a > 20 && a < 100) {
        console.log("20 ⇔ 100");
    } else if (a > 100 && a < 400) {
        console.log("100 ⇔ 400");
    } else {
        console.log("-");
    }
    */