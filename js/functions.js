console.log('Hello, world');
const isStringValid = (string, maxLength) => string.length <= maxLength;
// if (string.length <= maxLength) {
//   return true;
// }
// return false;

console.log(isStringValid('проверяемая строка', 20));
console.log(isStringValid('проверяемая строка', 18));
console.log(isStringValid('проверяемая строка', 10));

const isPalindrom = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString = string.at(i);
  }
  console.log(newString);
}

isPalindrom('qwerty');
