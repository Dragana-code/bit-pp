/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var ifElement = function arrayElement(array, e) {
    var element = 'no';
    for (var i = 0; i < array.length; i++) {
        if (array[i] === e) {
            element = 'yes';
            break;
        }
    }
    return element;
}
console.log(ifElement([5, -4.2, 38, 3, 7], 3));

/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var newArray = function positiveElement(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] *= 2;
        }
    }
    return array;
}
console.log(newArray([-3, 11, 5, 3.4, -8]))

/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var minimum = function arrayMin(a) {
    var currentMin = 0;
    var curretIndex = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] < a[i + 1]) {
            currentMin = a[i];
            curretIndex = i;
        }
    }
    return [currentMin, curretIndex];
}
console.log(minimum([4, 2, 2, -1, 6]));

/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var second = function secondSmall(a) {
    var temp = [];
    var small = [];
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
            small = a[i + 1];
            break;
        }
    }
    return small;
}
console.log(second([4, 2, 2, -1, 6]));


/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumOfPositive(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(sumOfPositive([3, 11, -5, -3, 2]));

/* 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/

function symetric(a) {
    var sym = true;
    var j = a.length - 1;
    for (var i = 0; i < a.length / 2; i++) {
        if (a[i] === a[j]) {
            j--;
            continue;
        } else {
            sym = false;
        }
    }
    return sym;
}
console.log(symetric([2, 4, -2, 7, -2, 4, 2]));

/* 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwineArrays(a, b) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
        c[c.length] = a[i];
        c[c.length] = b[i];
    }
    return c;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenateArr(a, b) {
    var c = a;
    for (var i = 0; i < b.length; i++) {
        c[c.length] = b[i];
    }
    return c;
}
console.log(concatenateArr([4, 5, 6, 2], [3, 8, 11, 9]));

/* 9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
*/

function deleteElement(a, e) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== e) {
            newArray[newArray.length] = a[i];
        } else {
            continue;
        }
    }
    return newArray;
}
console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertElement(a, e, p) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (i !== p) {
            newArray[newArray.length] = a[i];
        } else {
            newArray[newArray.length] = e;
            newArray[newArray.length] = a[i];
        }
    }
    return newArray;
}
console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 3));