function enMenseki(hankei) {
	let result = (hankei ** 2) * 3.14;
	return result;
}
let question = [5, 10, 15]
for (let i = 0; i < question.length; i++) {
	let ans = enMenseki(question[i]);
	document.write('<p>' + ans + '</p>');
}