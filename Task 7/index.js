export function swapCase(text) {
	let newText = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] === text[i].toUpperCase()) {
			newText += text[i].toLowerCase();
		} else {
			newText += text[i].toUpperCase();
		}
	}
	return newText;
}

