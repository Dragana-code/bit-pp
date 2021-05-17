/*1.	Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/


var a = [5, -4.2, 3, 7];
var e = 3;
var member = false;
for (var i = 0; i < a.length; i++) {
    if (e == a[i]) {
        member = true;
    }
}
if (member) {
    console.log('Yes');
} else {
    console.log('No');
}


/*
2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var b = [-3, 11, 5, 3.4, -8];
var c;
for (var i = 0; i < b.length; i++) {
    if (b[i] > 0) {
        c = b[i] * 2;
        b[i] = c;
    }
} console.log(b);


/*
3.	Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/


var a = [4, 2, 2, -1, 6];
var x = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] < a[x]) {
        x = i;
    }

} console.log(a[x], x);


/*
4.	Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -1, -1, 6];
var temp;
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[j] < a[i]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

    }

} console.log(a);
for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
        console.log(a[i + 1]);
        break;
    }
}
// another solution

var a = [4, 2, 2, -1, 6, 0];
var temp;
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

    }

} console.log(a);
for (var i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
        console.log('first element larger than minimum is: ' + a[i + 1]);
        break;
    }
}

/*
5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i];
    }
} console.log(sum);


/*
6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/

//var a = [3, 4, 12, 8];
var a = [2, 4, -2, 7, -2, 4, 2];
var x = a.length - 1;
var symetric = false;
for (var i = 0; i < a.length; i++) {
    if (a[i] === a[x] && x >= 0) {
        x--;
        symetric = true;
    } else {
        break;
    }
}
if (symetric) {
    console.log('The array is symmetric.');
}
else {
    console.log('The array isn\'t symmetric.');
}



/*
7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;
var i = 0;

while (j < a.length + b.length) {

    c[j] = a[i];
    c[j + 1] = b[i];
    i++;
    j += 2;
}
console.log(c);



/*
8.	Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var a = [4, 5, 6, 2, 8, 66];
var b = [3, 8, 11, 9, 45, 26];

for (var i = 0; i < b.length; i++) {
    a[a.length] = b[i];
}
console.log(a);


/*
9.	Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i];

    } else {
        b[b.length] = a[i];
    }
} console.log(b);


/*
10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;


for (var i = a.length; i > p; i--) {
    a[i] = a[i - 1];
} a[p] = e;

if (p > a.length) {
    console.log('Value is not valid.');
} else {
    console.log(a);
}



