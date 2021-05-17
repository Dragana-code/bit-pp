/*4.	Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

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

var x = [8, 0, 14, -22, 25];
var min = x[0];
var secMin = "Nema";
for (i = 0; i < x.length; i++) {
    if (x[i] < min) {
        secMin = min;
        min = x[i];
    } else if (x[i] != min && secMin === "Nema") {
        secMin = x[i];
    } else if (secMin > x[i]) {
        secMin = x[i];
    }
}
console.log(secMin);


// var x = [8, 0, 14, -22, 25];
// pretpostavka min=x[0] (min=8)

//1. i=0 i<x.lenght (0<5) => true =>
    //1.1 if (x[i] < min) => if (8<8) => false =>
    //1.2 else if (x[i] != min && secMin === "Nema") => if (8 != 8 i 'Nema'==='Nema') => false =>
    //1.3 else if (secMin > x[i]) => if ('Nema' > 8) => false => end
//2. i=1 i<x.lenght (1<5) => true =>
    //2.1 if (x[i] < min) => if (0<8) => true => secMin = min => (secMin=x[0] (0)), min = x[1] => (min=0) => end
//3. i=2 i<x.lenght (2<5) => true =>
    //3.1 if (x[i] < min) => (14<0) => false =>
    //3.2 else if (x[i] != min && secMin === "Nema") => if (14 != 0 && 0 === 'Nema) => false =>
    //3.3 else if (secMin > x[i]) => if (14 > 14) => false => end
//4. i=3 i<x.lenght (3<5) => true =>
    //4.1 if (x[i] < min) => if (-22 < 0) => true => secMin = min => (secMin=x[3] (0)), min = x[3] => (min=-22) => end
//5. i=4 i<x.lenght (4<5) => true =>
    //5.1 if (x[i] < min) => if (25<-22) => false =>
    //5.2 else if (x[i] != min && secMin === "Nema") => if (25 != -22 && -22 === 'Nema') => false =>
    //5.3 else if (secMin > x[i]) => if (-22>25) => false => end
//6. i=5 i<x.lenght (5<5) => false => end =>
//7. console.log(secMin) => 0