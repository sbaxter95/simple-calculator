var total = 0;
var type = prompt('Would you like the a(dvanced) or the s(imple) calculator?');

if (type === 's') {
	var operation = prompt('What operation would you like to use? a(ddition) s(ubtraction) m(ultiplication) d(ivision)');
	var num1 = prompt('Enter first number');
	var num2 = prompt('Enter second number');
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (operation === 'a') {
	total = num1 + num2;
} else if (operation === 's') {
	total = num1 - num2;
} else if (operation === 'm') {
	total = num1 * num2;
} else {
	total = num1 / num2;
}
} else {

}

alert(total);