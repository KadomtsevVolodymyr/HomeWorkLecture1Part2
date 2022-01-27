export function countOccurrences(text, letter) {
  let counter = 0, newText = '';

  for (let i = 0; i < text.length; i++) {
    newText += text[i].toLowerCase();

    if (newText[i] === letter) {
      counter ++;
    }
  }

  return counter;
}
