function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i 
    const startChar = word[i]
    const endChar = word[j]
    if( startChar !== endChar ) return false
  }
  return true
}

/* 

racecar
0123456
i     j
  make a function that will return a word true or false. 
  if the palindrome word is the same as it is backwords
  return true 
  otherwise return false if word is not the same as it is backwords. 

  itrate frin the beginning to the middle of the word
  check each letter to the corresponding letter from the end 
  if any letters don't match, return false

  return true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // abba
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
