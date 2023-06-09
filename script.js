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

let useLowercase = "";
let useUppercase = "";
let useNumbers = "";
let useSpecial = "";

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

const passwordLength = window.prompt("How long would you like you password? Choose between 8 and 128 Characters");

//generate random number of desired length -- You are running into Number.MAX_SAFE_INTEGER. The largest exact integral value is 2^53-1, or 9007199254740991.

// const randomNumber = Math.random().toString().slice(2, passwordLength);

// console.log(randomNumber);


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

const lowercase = window.confirm("Would you like your password to contain Lowercase Letters?");
if (lowercase) {
  window.alert("Lowercase Letters will be used :)");
  useLowercase = "abcdefghijklmnopqrstuvwxyz";
} else {
  window.alert("Lowercase Letters will NOT be used :(")
}

const uppercase = window.confirm("Would you like your password to contain Uppercase Letters?");
if (uppercase) {
  window.alert("Uppercase Letters will be used :)");
  useUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  window.alert("Uppercase Letters will NOT be used :(")
}

const numbers = window.confirm("Would you like your password to contain Numbers?");
if (numbers) {
  window.alert("Numbers will be used :)");
  useNumbers = "0123456789";
} else {
  window.alert("Numbers will NOT be used :(")
}

const special = window.confirm("Would you like your password to contain Special Characters?");
if (special) {
  window.alert("Special Characters will be used :)");
  useSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
} else {
  window.alert("Special Characters will NOT be used :(")
}





// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

function generatePassword(length) {
  var chars = useLowercase + useUppercase + useNumbers + useSpecial;
  var charLength = chars.length;
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

let password = generatePassword(passwordLength);
window.alert("Your secure password is " + password)
