/* 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] 
*/


function convertArray(a) {

    var newA = [];
    for (var i = 0; i < a.length; i++) {
        var currentValue = a[i];
        var isVallid = isFinite(currentValue);
        if (isVallid) {
            var number = parseFloat(currentValue)
            newA[newA.length] = number;
        }
    }
    return newA;
}

var filteredString = convertArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(filteredString);




/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”
    */

function arrayToSTring(a) {
    var string = '';

    for (var i = 0; i < a.length; i++) {

        if (a[i] === null) {
            continue;
        }
        var currentElement = isFinite(a[i])

        if (currentElement) {
            string += a[i];
        }
    }
    return string;
}

var arrayOfElements = arrayToSTring([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(arrayOfElements)



/* 3.	Write a program to filter out falsy values from the array.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/
function filterArray(a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {

        if (!!a[i] === false) {
            continue;
        } else {
            newArray[newArray.length] = a[i];
        }
    }
    return newArray;
}
var filteredArr = filterArray([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(filteredArr);

//another solution

function filterArray(a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {

        var arrayElement = parseInt(a[i]);
        if (!isNaN(arrayElement) && arrayElement !== 0) {
            newArray[newArray.length] = a[i];
        }

    }

    return newArray;
}
var filteredArr = filterArray([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(filteredArr);


/* 4.	Write a program that calculates a number of integer values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function numOfIntegers(a) {

    var counter = 0;

    for (var i = 0; i < a.length; i++) {

        var aFloatElement = parseFloat(a[i]);
        var aParseElement = parseInt(a[i]);

        if (aFloatElement == aParseElement) {
            counter++;
        }
    }

    return counter;
}
var integersInArray = numOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(integersInArray);



/* 5.	Write a program that calculates a number of float values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/
function numOfFloats(a) {

    var counter = 0;

    for (var i = 0; i < a.length; i++) {

        var floatElement = parseFloat(a[i]);
        var intElement = parseInt(a[i]);

        if (isNaN(floatElement)) {
            continue;
        }
        if (floatElement !== intElement) {
            counter++;
        }
    }
    return counter;
}
var floatsInArray = numOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(floatsInArray);

//parseFloat(NaN)=NaN
//parseFloat(23.1)=23.1
//parseFloat(15)=15
//parseFloat(false)=NaN
//parseFloat(-22.5)=-22.5
//parseFloat('')=NaN
//parseFloat(4)=4
//parseFloat(7)=7
//parseFloat(null)=NaN

// another solution

function numOfFloats(a) {

    var counter = 0;

    for (var i = 0; i < a.length; i++) {

        var floatElement = parseFloat(a[i]);
        var intElement = parseInt(a[i]);
        var aFinitElement = isFinite(floatElement);

        if (aFinitElement && floatElement !== intElement) {
            counter++;
        }
    }
    return counter;
}
var floatsInArray = numOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(floatsInArray);