export function vowelCount(text) {
  let counter = 0;

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {

    if (['e', 'a', 'i', 'o', 'u'].includes(text[i])){
      counter++;
    }
  }

  return counter;
}

