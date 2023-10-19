const isStringValid = (string, maxLength) => string.length <= maxLength;

console.log(isStringValid('проверяемая строка', 20));
console.log(isStringValid('проверяемая строка', 18));
console.log(isStringValid('проверяемая строка', 10));

const isPalindrome = (string) => {
  const normalisedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalisedString.length - 1; i >= 0; i--) {
    newString += normalisedString.at(i);
  }
  console.log(normalisedString, newString);
  return normalisedString === newString;
};

console.log(isPalindrome('топот'));
console.log(isPalindrome('До вОд'));
console.log(isPalindrome('Кекс'));
