export function isPalindrome(text) {
  text = text.toLowerCase();

  const normalText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ?]/g,'');

  return normalText === normalText.split('').reverse().join('');
}