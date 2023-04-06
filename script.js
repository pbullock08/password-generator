// Assignment code here

//allows code to start running when you click generate password
document.querySelector("button#generate.btn").addEventListener("click", writePassword);

//displays password on the webpage
function writePassword () {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

//code for prompts and random selection of characters
function generatePassword() {
  //create variables that will randomly generate characters depending on the criteria
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numerics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "?", "~"];
  //prompt for # of characters 
  var numofCharacters = parseInt(prompt("How many characters (between 8 and 128) should your password contain?"));

  if (numofCharacters < 8 || numofCharacters > 128 === true) {
    alert("Your password must be between 8 and 128 characters.");
  } else {
    //prompts for types of characters
    var uppercasePrompt = confirm("Should your password include uppercase letters?");
    var lowercasePrompt = confirm("Should your password include lowercase letters?");
    var numericsPrompt = confirm("Should your password include numerical values?");
    var symbolsPrompt = confirm("Should your password include special characters?");
  }
  //if statements for selection of at least one type of character
  if (uppercasePrompt === false && lowercasePrompt === false && numericsPrompt === false && symbolsPrompt === false) {
    alert("Your password must contain at lease one type of character.");
  } else {
    var characters = [];

    if (uppercasePrompt === true) {
      characters.push(uppercase);
    }

    if (lowercasePrompt === true) {
      characters.push(lowercase);
    }

    if (numericsPrompt === true) {
      characters.push(numerics);
    }

    if (symbolsPrompt === true) {
      characters.push(symbols);
    }
  }

  //generate password using a for loop that considers criteria and variable pool 
  var passwordCharacters = [].concat.apply([], characters);
  var password = [];

  for (var i = 0; i < numofCharacters; i++) {
    password.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
  }

  return password.join("");
}