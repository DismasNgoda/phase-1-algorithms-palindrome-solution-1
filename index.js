function reverseWord(word) {
  // Write your algorithm here
  /*
  initialize a function to reverse the input
  creates variables to store each output
  call the reverseWord function in another function to check test performance.
  create an if statement with expected returns
  try out multiple cases if it matches the required palindrome set
  */
  const newWord = word.split('');
  const reversedNewWord = newWord.reverse();
  const output = reversedNewWord.join('');
  return output;
}
function isPalindrome(word){
  const output = reverseWord(word);
  if(word===output){
    return true;
  }
  else{
    return false;
  }
}


/* 
  Add your pseudocode here
  initializes reverseWord function(str)  
  const newWord, reversedNewWord, output;
  invokes the if else statement
*/

/*
  Add written explanation of your solution here
  initializes reverseWord function(str), passing the a string as its parameter 
  each variable stores a new outcome: split, reversed and joined outcomes.
  the if else statements checks the words and returns bolean true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
