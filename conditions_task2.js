var a=5;

if (a%3===0) {
    if (a%5===0) {
        console.log("number is divisible by 5");
    } 
} else if (a%5===0) {
    console.log("number is not divisible by 3 and 5"); 
} else {
    console.log("number is not divisible by 3 or 5"); 
}
