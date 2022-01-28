export function countOccurrences(text, letter) {
  let counter = 0;

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {

    if (text[i] === letter) {
      counter ++;
    }
  }

  return counter;
}
