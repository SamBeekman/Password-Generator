// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password



// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

const passwordLength = window.prompt("How long would you like you password? Choose between 8 and 128 Characters");


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

const lowercase = window.confirm("Would you like your password to contain Lowercase Letters?");
if (lowercase) {
  window.alert("Lowercase Letters will be used :)");
} else {
  window.alert("Lowercase Letters will NOT be used :(")
}

const uppercase = window.confirm("Would you like your password to contain Uppercase Letters?");
if (uppercase) {
  window.alert("Uppercase Letters will be used :)");
} else {
  window.alert("Uppercase Letters will NOT be used :(")
}

const numbers = window.confirm("Would you like your password to contain Numbers?");
if (numbers) {
  window.alert("Numbers will be used :)");
} else {
  window.alert("Numbers will NOT be used :(")
}

const special = window.confirm("Would you like your password to contain Special Characters?");
if (special) {
  window.alert("Special Characters will be used :)");
} else {
  window.alert("Special Characters will NOT be used :(")
}



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

const password = Math.random(passwordLength = 8 - 128) //needs to be string
const



// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page