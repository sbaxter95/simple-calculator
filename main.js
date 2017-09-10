var type = prompt('Would you like the a(dvanced) or the s(imple) calculator?');

if (type === 's') {
	var total = 0;
	var operation = prompt('What operation would you like to use? a(ddition) s(ubtraction) m(ultiplication) d(ivision)');
	var num1 = prompt('Enter first number');
	var num2 = prompt('Enter second number');
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (operation === 'a') {
		total = (num1 + num2).toFixed(2);
	} else if (operation === 's') {
		total = (num1 - num2).toFixed(2);
	} else if (operation === 'm') {
		total = (num1 * num2).toFixed(2);
	} else {
		total = (num1 / num2).toFixed(2);
	} 
	alert(total);
} else {
	var answer = 0;
	var task = prompt('Would you like to find the s(quare root) or the p(ower) of a number?');
	var num = prompt('Enter a number');
	num = parseFloat(num);
	if (task === 's') {
		answer = Math.sqrt(num).toFixed(2);
	} else {
		answer = Math.pow(num, 2).toFixed(2);
	}
	alert(answer);
}