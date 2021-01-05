// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
 }
 function generatePassword() {
 
      var passwordLength = Number(prompt("How many characters would you like in your password?"));
      console.log(passwordLength);

      if (passwordLength < 8) { 
        alert("Your password must have at least 8 characters.");
      }

      if (passwordLength > 128) {
        alert("Your password must have less that 129 characters.");
      }

      var charSet = "";
      var passwordUpperCase = confirm("Would you like uppercase letters?");
      console.log(passwordUpperCase);

      if (passwordUpperCase == true) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(charSet);
      }

      var passwordLowerCase = confirm("Would you like lowercase letters?");
      console.log(passwordLowerCase);

      if (passwordLowerCase == true) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
        console.log(charSet);
      }

      var passwordNumbers = confirm("Would you like numbers?");
      console.log(passwordNumbers);

      if (passwordNumbers == true) {
        charSet += "1234567890";
        console.log(charSet);
      }

      var passwordSpecial = confirm("Would you like special characters?");
      console.log(passwordSpecial);

      if(passwordSpecial == true) {
        charSet += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
        console.log(charSet);
      }

      var retVal = " ";
      console.log(retVal);

        for (var i = 0; i < passwordLength; i++) {
          //picks a character within charSet at index of random number
          retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return retVal; 
        
 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 