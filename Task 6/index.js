export function isPalindrome(text) {
  text = text.toLowerCase();

  const array = text.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '.' || array[i] === '?'|| array[i] === ',' || array[i] === '!'|| array[i] ==='\''){
      array.splice(i, 1);
    }

    if (array[i] === ' '){
      array.splice(i, 1);
    }
  }

  const arrayReverse = [].concat(array).reverse();
  let bool = true;

  for (let i = 0; i < array.length; i++) {
    if (arrayReverse[i] !== array[i]){
      bool = false;
    }
  }

  return bool;
}


