// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
 }
 var passwordLength = prompt("How many characters would you like in your password?");
 console.log(passwordLength)

 if (passwordLength < 8)  { 
   alert("Your password must have at least 8 characters.");
 }

 if (passwordLength > 128) {
   alert("Your password must have less that 129 characters.");
 }

 var lowerCase = []; confirm("Do you want your password to contain lowercase letters?");
console.log(lowerCase)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
