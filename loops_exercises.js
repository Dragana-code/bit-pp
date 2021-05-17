/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/


for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}



//2.	Write a program to sum the multiples of 3 and 5 under 1000.


var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);



// 3.	Write a program to compute the sum and product of an array of integers.


var array = [1, 5, 6, 3], x = 0, y = 1;
for (var i = 0; i < array.length; i++) {
    x = x + array[i];
    y = y * array[i];

}
console.log("sum of numbers is: " + x);
console.log("product of numbers is: " + y);


/* 4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var y = '';

for (var i = 0; i < x.length; i++) {
    y += x[i];
}
console.log(y);


/*5.	Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/


var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4, 6],
    [7, 0, 7, 27]
]
var result = '';

for (var i = 0; i < a.length; i++) {
    var currentElement = a[i];
    for (var j = 0; j < currentElement.length; j++) {
        var currentValue = currentElement[j];
        result = result + currentValue + '\t';
    }
    result = result + '\n';
} console.log(result);


/* 6. Write a program that outputs the sum of squares of the first 20 numbers.*/

var sum = 0, sq;
for (var i = 1; i <= 20; i++) {
    sq = i * i;
    sum += sq;

} console.log(sum);


/*7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. */
/*
David	80
Marko	77
Dany	88
John	95
Thomas	68
< 60%	F
< 70%	D
< 80%	C
< 90%	B
< 100%	A
*/

var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var avgPoints;
var sumOfPoints = 0;
var numOfStudents = students.length;

for (var i = 0; i < numOfStudents; i++) {
    var currentStudentName = students[i][0];
    var currentStudentPoints = students[i][1];
    sumOfPoints += currentStudentPoints;
    if (currentStudentPoints < 60) {
        console.log(currentStudentName + "'s grade is: F");
    } else if (currentStudentPoints < 70) {
        console.log(currentStudentName + "'s grade is: D");
    } else if (currentStudentPoints < 80) {
        console.log(currentStudentName + "'s grade is: C");
    } else if (currentStudentPoints < 90) {
        console.log(currentStudentName + "'s grade is: B");
    } else if (currentStudentPoints < 100) {
        console.log(currentStudentName + "'s grade is: A");
    }
}

avgPoints = sumOfPoints / numOfStudents;

//avg grade of class
if (avgPoints < 60) {
    console.log("Avg grade is: F");
} else if (avgPoints < 70) {
    console.log("Avg grade is: D");
} else if (avgPoints < 80) {
    console.log("Avg grade is: C");
} else if (avgPoints < 90) {
    console.log("Avg grade is: B");
} else if (avgPoints < 100) {
    console.log("Avg grade is: A");
}


/*8.	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}





