/* +1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchPlaces(array) {
    var newArray = array;
    var min = array[0];
    var minIndex = 0;
    var max = array[0];
    var maxIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        } else {
            continue;
        }
    }
    for (var j = 0; j < array.length; j++) {

        if (max < array[j]) {
            max = array[j];
            maxIndex = j;
        } else {
            continue;
        }
    }
    newArray[minIndex] = max;
    newArray[maxIndex] = min;

    return newArray;
}
console.log(switchPlaces([3, 500, 12, 149, 53, 414, 1, 19]));

/* +2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function changeArray(a) {
    var newArray = [];
    var newValue = 0;
    for (var i = 0; i < a.length; i++) {
        newValue = (a[i] / 2) + 5;
        if (newValue !== 0) {

            newArray[newArray.length] = newValue;
        } if (newValue == 0) {
            newArray[newArray.length] = 20;
        }
    }
    return newArray;
}
console.log(changeArray([3, 500, -10, 149, 53, 414, 1, 19]));

/* +3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function studentGrade(s, g) {
    var studentsExame = '';
    var grades = [];
    for (var i = 0; i < s.length; i++) {
        if (g[i] <= 50) {
            grades[i] = 5;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and failed to complete the exam.' + '\n');
        } else if (g[i] >= 51 && g[i] < 60) {
            grades[i] = 6;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
        } else if (g[i] >= 61 && g[i] < 70) {
            grades[i] = 7;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
        } else if (g[i] >= 71 && g[i] < 80) {
            grades[i] = 8;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
        } else if (g[i] >= 81 && g[i] < 90) {
            grades[i] = 9;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
        } else if (g[i] >= 91 && g[i] < 100) {
            grades[i] = 10;
            studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
        }
    }

    return studentsExame;
}
console.log(studentGrade(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/* +4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sortArr(a) {
    var temp = [];
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    for (var i = 0; i < a.length; i++) {
        newArr[i] = a[i] * 2;
    }

    return newArr;
}
console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12]));

/* 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function sortDesc(a) {
    var temp = [];

    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] < a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return a;
}
console.log(sortDesc([13, 11, 15, 5, 6, 1, 8, 12]));

/* +6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function calculate() {
    var sum = 0;
    var sub = 0;
    var result;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    for (var j = 1; j <= 500; j++) {
        if (j % 2 !== 0) {
            sub += j;
        }
    }
    result = (sum - sub) * 12.5;
    return result;
}
console.log(calculate());

/* -7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

function newString(array) {
    var newString = '';
    var currentString = '';
    var n = 2;
    console.log(typeof array[0]);

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string' && array[i].length >= n) {
            currentString = array[i];
            for(var j=0; j<n; j++){
                newString=newString + currentString[i];

            }             
        }
    }

    return newString;
}
console.log(newString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

/* +8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reverseString(s) {
    var newString = '';
    var i = s.length - 1;
    while (i >= 0) {

        newString += s[i];
        i--;
    }
    return newString;
}
console.log(reverseString('Belgrade Institute of Technology'));

/* +-9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function numCombination(n) {
    var combo = [];
    var currentCombo = '';
    var count = 0;
    for (var i = 1; i <= (n + 1); i++) {
        //currentCombo = '';
        for (var j = i + 1; j <= n; j++) {
            currentCombo = '';
            currentCombo += (i + '.' + j);
            combo[combo.length] = currentCombo;
            count++;
            currentCombo = '';
            currentCombo += (j + '.' + i);
            combo[combo.length] = currentCombo;
            count++;
        }
    }

    return [combo, count];
}
console.log(numCombination(7));

/* +10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/

function ifPrime(n) {
    var prime = true;
    if (n !== 0 && n !== 1) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                prime = false;
                continue;
            }
        }
    }
    return prime;
}
console.log(ifPrime(77));

/* +11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function ifPalindrome(s) {
    var j = s.length - 1;
    var palindrome = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[j]) {
            palindrome = true;
            j--;
        } else {
            break;
        }
    }
    return palindrome;
}
console.log(ifPalindrome('a nut for a jar of tuna'));

/* +12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function commonDivisor(n, m) {
    var divisor = 1;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            divisor = i;
            continue;
        } else {
            continue;
        }
    }
    return divisor;
}
console.log(commonDivisor(9, 81));

// more complex solution

function commonDivisor(n, m) {
    var divisor = 1;
    var i = 1;
    if (n !== 0 && m !== 0) {
        if (n < m) {
            for (var i = 1; i <= n; i++) {
                if (n % i === 0 && m % i === 0) {
                    divisor = i;
                    continue;
                } else {
                    continue;
                }
            }
        } else {
            for (var i = 1; i <= m; i++) {
                if (n % i === 0 && m % i === 0) {
                    divisor = i;
                    continue;
                } else {
                    continue;
                }
            }
        }
    } else {
        divisor = 'Enter number different than 0.';
    }
    return divisor;
}
console.log(commonDivisor(0, 12));

