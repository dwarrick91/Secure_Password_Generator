// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "|", "~","!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "|", "~"]

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



function numberList() {
  var numbers = [];
  for (let i = 0; i <= 128; i++) {
    numbers.push(i);
  }
  return numbers;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var finalPassword = "";
  var characterOptions = []
  var passwordLength = prompt("How many characters do you want your password.  Please choose between 8-128 characters.")
  var tempPassword = ""
  if (isNaN(passwordLength)) {
    alert("Please pick a valid number")
    return ""
  }

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("please pick a number between 8-128")
    return ""
  }

  var userLowercase = confirm("do you want to include lowercase letters?")

  if (userLowercase) {
    characterOptions = characterOptions.concat(lowercase)

  }

  var userUppercase = confirm("do you want to include UPPERCASE letters?")

  if (userUppercase) {
    characterOptions = characterOptions.concat(uppercase)

  }


  var userSpecial = confirm("do you want to include special characters?")

  if (userSpecial) {
    characterOptions = characterOptions.concat(special)


  }
  var userNumeric = confirm("do you want to include numbers")

  if (userNumeric) {
    characterOptions = characterOptions.concat(numeric)

  }

  function jumble(characterOptions) {
    for (let i = characterOptions.length - 1; i > 0; i--) {
      const jumbleArray = Math.floor(Math.random() * (i+1));
      [characterOptions[i], characterOptions[jumbleArray]] = [characterOptions[jumbleArray], characterOptions[i]];
      
    }
  }
jumble(characterOptions)

console.log(characterOptions);
  for (let index = 0; index < passwordLength; index++) {
    finalPassword += characterOptions[index];

  }

 console.log(finalPassword);


  return finalPassword


}
// document.getElementById(generate) + prompt("How long do you want your password to be?")


// function generatePassword() {
//   prompt ("How many characters do you want to use?")
// }


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);