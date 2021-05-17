/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function insertString(string, position) {
    var newString = '';
    var existingString = 'My random string';

    if (position === 1) {
        newString = string + existingString;
    } else {
        for (var i = 0; i < position; i++) {
            newString += existingString[i];
        }
        newString += string;
        for (var j = i; j < existingString.length; j++) {
            newString += existingString[j];
        }
    }
    return newString;
}
console.log(insertString('JS ', 10));

/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function joinElements(a) {
    var string = '';
    var newA = [];
    for (var i = 0; i < a.length; i++) {

        if (isFinite(a[i]) === true && a[i] != null) {
            string += a[i];
        }

    }
    return string;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));



/* 3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function filterFalsy(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (!!array[i]) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/

function reverseNum(n) {
    var number;
    var reverse = '';

    var nString = n.toString();
    var nElement = nString.length - 1;

    for (var i = nElement; i >= 0; i--) {
        reverse += nString[i];
    }
    number = parseFloat(reverse);
    return number;
}
console.log(reverseNum(12345));

//another solution

function reverseNum(n) {
    var number;
    var reverse = '';

    var nString = '';
    nString += n;

    var nElement = nString.length - 1;

    for (var i = nElement; i >= 0; i--) {

        reverse += nString[i];
    }
    number = parseFloat(reverse);
    return number;
}
console.log(reverseNum(12345));

/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/

function lastElement(array, p) {
    var last = [];
    var arrayIndex = array.length - 1;
    var x = array.length - p;
    var lastElements = [];

    last = array[arrayIndex];
    console.log('Last element of the array is: ' + last);

    var i = arrayIndex;
    for (var j = p; j > 0; j--) {
        lastElements[j - 1] = array[i];
        i--;
    }
    return lastElements;
}
console.log(lastElement([7, 9, 0, -2], 2));

/* 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function createArray(n, value) {
    var array = [];

    if (value === 'undefined') {
        value = null;
    }
    for (var i = 0; i < n; i++) {
        array[array.length] = value;
    }
    return array;
}
console.log(createArray(2));

/* 7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function perfectNum(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
console.log(perfectNum(28));


/* 8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/

function search_word(text, word) {

    var x = 0;
    var y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

/* 9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function hideAddress(a) {
    var newstring = '';
    var dot = ".";

    for (var i = 0; i < a.length; i++) {

        if (i < 3) {
            newstring += a[i];
        } else {
            if (a[i] == '@') {
                while (i < a.length) {
                    newstring += a[i];
                    i++;
                }
            } else {
                newstring += dot;
            }
        }
    }
    return newstring;
}
console.log(hideAddress("myemailaddress@bgit.rs"));

/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function mostFrequent(a) {

    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            if (a[i] == a[j])
                m++;
            if (mf < m) {
                mf = m;
                item = a[i];
            }
        }
        m = 0;
    }
    return item;
}
var mostFrequentItem = mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log('Most frequent item of the array is ' + mostFrequentItem);

