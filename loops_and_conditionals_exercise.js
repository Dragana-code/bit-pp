/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

'use strict';
function ifString(a) {
    var isString = false;
    if (typeof (a) === 'string') {
        isString = true;
    }
    return isString;
}
var thisIsString = ifString(6);
console.log(thisIsString);


/* 2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

'use strict';
function blankString(a) {
    var bString = false;
    if (!!(a) === false) {
        bString = true;
    }
    return bString;
}
var isStringBlank = blankString('');
console.log(isStringBlank);

/* 3.	Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

'use strict';
function concatenate(string, n) {
    var newString = '';
    for (var i = 1; i <= n; i++) {
        newString += string;
    }
    return newString;
}
var concatenatedString = concatenate('Ha', 6);
console.log(concatenatedString);

/* 4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

'use strict';
function numOfOccurr(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'n') {
            count++;
        }
    }
    return count;
}
var letterOccurr = numOfOccurr("My random string n n n ", 'm');
console.log(letterOccurr);

/* 5.	Write a function to find the position of the first occurrence of a character in a string. 
The result should be the position of character. If there are no occurrences of the character, the function should return -1.
*/

'use strict';
function positionOfOccurr(s) {
    var position;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            position = i;
            break;
        } else {
            position = -1;
        }
    }
    return position;
}
var firstOccurrence = positionOfOccurr("My random string");
console.log(firstOccurrence);

/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. 
If there are no occurrences of the character, function should return -1.
*/

'use strict';
function lastOccurrOfChar(s) {
    var lastPosition;
    var sIndex = (s.length - 1);
    for (var i = sIndex; i >= 0; i--) {
        if (s[i] === 'a') {
            lastPosition = i + 1;
            break;
        } else {
            lastPosition = -1;
        }
    }
    return lastPosition;
}
var charLastOccurr = lastOccurrOfChar("My random stringa");
console.log('Position of letter a is: ' + charLastOccurr);

/* 7.	Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

'use strict';
function stringIntoArray(s) {
    var array = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            array[array.length] = null;
        } else {
            array[array.length] = s[i];
        }
    }
    return array;
}
var newArray = stringIntoArray("My random string");
console.log(newArray);

/* 8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

'use strict';
function primeNum(n) {
    var prime = false;
    if (n % 2 === 0 || n= 2) {
        continue;

    } else if (n % 3)

}

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

'use strict';
function replace(string, separator) {
    var replace = separator;
    var defaultSep = '-';
    var newString = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newString += replace;
        } else {
            newString += string[i];
        }
    }
    return newString;
}
var replaceSpace = replace("My random string", '_');
console.log(replaceSpace);


//another solution

'use strict';
function replace(s) {
    var replace = '_'

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            s[i] = replace;
        }
    }
    return s;
}
var replaceSpace = replace("My random string");
console.log(replaceSpace);

/* 10.	 Write a function to get the first n characters and add “...” at the end 
of newly created string.
*/

'use strict';
function addChar(string, n) {
    var newString = '';
    var i = 0;
    while (i < n) {
        newString += string[i];
        i++;
    }
    newString += '...';

    return newString;
}
console.log(addChar('dragana', 3));

/* 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

'use strict';
function filterArray(a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        var arrayElement = isFinite(a[i]);
        if (!!arrayElement) {
            newArray[newArray.length] = parseFloat(a[i]);
        }
    }
    return newArray;
}
console.log(filterArray(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. 
Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
*/


'use strict';
function retirement(yearOfBirth, currentYear, sex) {
    var men = 65;
    var women = 60;
    var yearsToRetirement = currentYear - yearOfBirth;

    if (sex === 'm') {
        if (yearsToRetirement < men) {
            yearsToRetirement = men - yearsToRetirement;
            console.log('You have ' + yearsToRetirement + ' years untill retirement.');
        } else {
            console.log('Enyou your retrement.');
        }
    } else if (sex === 'w') {
        if (yearsToRetirement < women) {
            yearsToRetirement = women - yearsToRetirement;
            console.log('You have ' + yearsToRetirement + ' years untill retirement.');
        } else {
            console.log('Enyou your retrement.');
        }
    }
    return yearsToRetirement;
}
console.log(retirement(1958, 2021, 'm'));




/* 13.	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/

'use strict';
function humanizeNum(n) {
    var number = '';

    switch (n) {
        case 1:
            number = n + 'st';
            break;
        case 2:
            number = n + 'nd';
            break;
        case 3:
            number = n + 'rd';
            break;
        default:
            number = n + 'th';

    }
    return number;
}
console.log(humanizeNum(1));

'use strict';
function humanize(n) {
    var number = '';
    var numberToString = '';

    for (var i = 0; i < n.length; i++) {
        numberToString += n[i];
    }

    switch (numberToString[numberToString.length - 1]) {
        case 1:
            number = n + 'st';
            break;
        case 2:
            number = n + 'nd';
            break;
        case 3:
            number = n + 'rd';
            break;
        default:
            number = n + 'th';
            break;
    }
    return number;
}
console.log(humanize(1));