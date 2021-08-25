// Write a function that returns the character count of all letters. Make all letters lowercase, only alphanumeric characters

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result);
}

charCount("Hello how are you?");
