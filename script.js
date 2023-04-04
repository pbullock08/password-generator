// Assignment code here
//character variables 
function generatePassword (){
var uppercase = ["A", "B", "C", "D", "E"];
var lowercase = ["v", "w", "x", "y", "z"];
var numerics = [2,4,6,8,0];
var symbols = ["!", "@", "#", "$", "%"];
var characters = uppercase.concat(lowercase, numerics, symbols);

//add event listener for generate password to initiate prompts 

//code for prompts
var numofCharacters = parseInt(prompt("How many characters should your password contain?"));
if (numofCharacters >=8 && numofCharacters <=128){
  
} else {alert("Choose a number between 8 and 128.")}

var uppercasePrompt = confirm("Should your password include uppercase letters?");
var lowercasePrompt = confirm("Should your password include lowercase letters?");
var numericsPrompt = confirm("Should your password include numerical values?");
var symbolsPrompt = confirm("Should your password include special characters?");

//code for generated password from user inputs
var password = [];
for (var i=0; i < numofCharacters; i++) {
  (characters[Math.floor(Math.random() * numofCharacters)]);
}



// Get references to the #generate element - button
var generateBtn = document.querySelector("#generate");
//var generateBtn = document.querySelector("#generate").addEventListener("click", charactersPrompt());
//function charactersPrompt () {


// Write password to the #password input -- output your passwod on the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log (password);
generatePassword ();
}