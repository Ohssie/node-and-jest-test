/** Task nr 2: "Write a function that determines if a string starts with an upper-case letter A-Z and returns true or false." 
 * 
 * Using regular expressions, one can test the string against the expression rules.
 * To check for the occurrence, we will use the expression `/^[A-Z]/` which checks the first character of the string against all alphabets in uppercase to see if there is an occurrence
 * 
 * Below is the Regular expression 
 * 
 * Description of the Regular expression.
 * ^ - Specifies that the match has to start with a particular character
 * [A-Z] -  Should fall within the alphabets and should be uppercase
 * 
 * Test 
 * 
 * /^[A-Z]/.('i am a boy') //False
 * /^[A-Z]/.('I am a boy') //True
*/

const testString = str => /^[A-Z]/.test(str)

module.exports = testString