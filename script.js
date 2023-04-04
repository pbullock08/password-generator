// Assignment code here

function generatePassword (){
//create a bank of variables that will randomly generate characters depending on criteria and a pool that combines them together into 1 array
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerics = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];
var characters = uppercase.concat(lowercase, numerics, symbols);

//code that leads to prompts when you first click generate password 
var generateBtn = document.querySelector("#generate");

//generateBtn.addEventListener("click", ???());

//create a prompt and if/else statement for number of characters between 8 and 128
var numofCharacters = parseInt(prompt("How many characters (between 8 and 128) should your password contain?"));

if (numofCharacters >=8 && numofCharacters <=128) {
  var uppercasePrompt = confirm("Should your password include uppercase letters?");
} else {
  alert("Your password must be between 8 and 128 characters.");
  var numofCharacters = parseInt(prompt("How many characters (between 8 and 128) should your password contain?"));
} //how do you make this repeat -- a loop?

//create prompts and if/else statement for selection of at least one type of character using or ||
var uppercasePrompt = confirm("Should your password include uppercase letters?");
var lowercasePrompt = confirm("Should your password include lowercase letters?");
var numericsPrompt = confirm("Should your password include numerical values?");
var symbolsPrompt = confirm("Should your password include special characters?");

if (uppercasePrompt || lowercasePrompt || numericsPrompt || symbolsPrompt) {
  //generate password 
} else { 
  alert("Your password must contain at lease one type of character.");
  var uppercasePrompt = confirm("Should your password include uppercase letters?");
  var lowercasePrompt = confirm("Should your password include lowercase letters?");
  var numericsPrompt = confirm("Should your password include numerical values?");
  var symbolsPrompt = confirm("Should your password include special characters?");
}
}
//generate password using a for loop that considers criteria and variable pool 
var password = [];

for (var i=0; i < numofCharacters; i++) {
  (characters[Math.floor(Math.random() * numofCharacters)]);
}
//}
//generatePassword ();
//}
//display password in the your secure password box 
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;