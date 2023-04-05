// Assignment code here

//code that leads to prompts when you click generate password
document.querySelector("#generate").addEventListener("click", generatePassword);

function generatePassword (){
  //create variables that will randomly generate characters depending on the criteria
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numerics = [1,2,3,4,5,6,7,8,9,0];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

var numofCharacters = parseInt(prompt("How many characters (between 8 and 128) should your password contain?"));

if (numofCharacters < 8 || numofCharacters > 128 === true) {
  alert("Your password must be between 8 and 128 characters.");
} else {
  //create prompts for types of characters
  var uppercasePrompt = confirm("Should your password include uppercase letters?");
  var lowercasePrompt = confirm("Should your password include lowercase letters?");
  var numericsPrompt = confirm("Should your password include numerical values?");
  var symbolsPrompt = confirm("Should your password include special characters?");  
}
//create if/else statement for selection of at least one type of character using or ||
if (uppercasePrompt === false && lowercasePrompt === false && numericsPrompt=== false && symbolsPrompt === false ) {
  alert("Your password must contain at lease one type of character.");
  var uppercasePrompt = confirm("Should your password include uppercase letters?");
  var lowercasePrompt = confirm("Should your password include lowercase letters?");
  var numericsPrompt = confirm("Should your password include numerical values?");
  var symbolsPrompt = confirm("Should your password include special characters?");
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
console.log (passwordCharacters);
var password = [];

for (var i=0; i < numofCharacters; i++) {
  password.push(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
  }

return password;
}

//display password on the webpage
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

//need to get rid of commas??????/