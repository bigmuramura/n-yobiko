let entryWords = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (let i = 0; i < entryWords.length; i++) {
	for (let j = 0; j < entryWords.length; j++) {
		document.write('<p>' + entryWords[i] + entryWords[j] + '</p>');
	}
}