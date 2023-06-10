// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// declare function
function generatePassword() {

  // declare variables
  let useLowercase = "";
  let useUppercase = "";
  let useNumbers = "";
  let useSpecial = "";

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  let passwordLength = parseInt(window.prompt("How long would you like you password to be? Choose a number between 8 and 128 Characters"));

  // fix as character length can be <8 or >128 or NaN
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("That is not an accepted value, please try again");
    passwordLength = parseInt(window.prompt("How long would you like you password to be? Choose between 8 and 128 Characters"));
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  let lowercase = window.confirm("Would you like your password to contain Lowercase Letters?");
  if (lowercase) {
    useLowercase = "abcdefghijklmnopqrstuvwxyz";
  }

  let uppercase = window.confirm("Would you like your password to contain Uppercase Letters?");
  if (uppercase) {
    useUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let numbers = window.confirm("Would you like your password to contain Numbers?");
  if (numbers) {
    useNumbers = "0123456789";
  }

  let special = window.confirm("Would you like your password to contain Special Characters?");
  if (special) {
    useSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  function makePassword(length) {
    let chars = useLowercase + useUppercase + useNumbers + useSpecial;
    let charLength = chars.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  let yourPassword = makePassword(passwordLength);
  if (yourPassword === "") {
    window.alert("You must select 'OK' for at least 1 criteria");
    return generatePassword();
  } else {
    return yourPassword;
  }
}
