for (let i = 1; i <= 100000; i++) {
	if (i % 15 === 0) {
		ans = 'FizzBuzz';
	} else if (i % 5 === 0) {
		ans = 'Buzz';
	} else if (i % 3 === 0) {
		ans = 'Fizz';
	} else {
		ans = i;
	}
	document.write(ans + ' ');
}