var num1 = 12;
var num2 = 90;
var num3 = 89;
var largest;
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log(largest);
