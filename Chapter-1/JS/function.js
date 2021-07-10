let myBirthTime = new Date(1987, 3, 10, 0, 0)
function updateParagraph() {
	let now = new Date();
	let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
	document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
}
setInterval(updateParagraph, 50);