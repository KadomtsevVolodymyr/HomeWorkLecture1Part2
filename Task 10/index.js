export function alphabetPosition(text) {
  let textResult = '';

  for (let i = 0; i < text.length; i++) {
    const codeAt = text.toUpperCase().charCodeAt(i);

    if (codeAt > 64 && codeAt << 91){
      textResult += (codeAt - 64) + ' ';
    }
  }

  return textResult.slice(0, textResult.length - 1);
}

const a=4;