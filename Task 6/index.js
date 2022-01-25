export function isPalindrome(text) {
	text = text.toLowerCase();
	const arrayNoraml = text.split('');
	const array = text.split('');
	for (let i = 0; i < arrayNoraml.length; i++) {
		if (arrayNoraml[i] == '.' || arrayNoraml[i] == '?'|| arrayNoraml[i] == ',' || arrayNoraml[i] == '!'){
			arrayNoraml.splice(i, 1)
		}
		if (arrayNoraml[i] == ' '){
			arrayNoraml.splice(i, 1)
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] == '.' || array[i] == '?'|| array[i] == ',' || array[i] == '!'){
			array.splice(i, 1)
		}
		if (array[i] == ' '){
			array.splice(i, 1)
		}
	}
	let arrayReverse = array.reverse();
	let bool = true;
	for (let i = 0; i < array.length; i++) {
		if (arrayReverse[i] != arrayNoraml[i]){
			bool = false;
		}
	}
	return bool
}

