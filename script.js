var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";

var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "124567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passwordString = "";
var passwordOutput = "";
var textArea = document.getElementById("password");

//function declaring variable parts of password
function characterTypes() {
  var passwordCapital = confirm("include uppercase letters?");
  var passwordLowercase = confirm("include lowercase letters?");
  var passwordNumeric = confirm("include numbers?");
  var passwordSpecial = confirm("include special characters?");
  if (passwordCapital === true || passwordLowercase === true || passwordNumeric === true || passwordSpecial === true) {
    //if capital is chosen, it is added to variable "passwordString"
    if (passwordCapital === true) {
      passwordString += capital;
    }
    //if lowercase is chosen, it is added to variable "passwordString"
    if (passwordLowercase === true) {
      passwordString += lowercase;
    }
    //if numeric is chosen, it is added to variable "passwordString"
    if (passwordNumeric === true) {
      passwordString += numeric;
    }
    //if special is chosen, it is added to variable "passwordString"
    if (passwordSpecial === true) {
      passwordString += special;
    }
  }

  else {
    alert("please select at least one character type");
    characterTypes();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var text = '';
  //function question loops prompt back if value is less than 8 or greater than 128
  function question() {
    var passwordLength = prompt("how long should the password be (select between 8 and 128 characters)");
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes ();

      for (let i = 0; i < passwordLength; i++) {
        let x = passwordString[Math.floor(Math.random() * passwordString.length)]
        passwordOutput += x;
      }
      console.log(passwordOutput);
      console.log(textArea);
      text = document.createTextNode(passwordOutput);
      textArea.innerHtml = '';
      textArea.appendChild(text);
      passwordOutput = '';
      
    };
  }

  question();

}
  
  // var password = passwordOutput();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword();
});
