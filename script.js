// Assignment code here
var generateBtn = document.querySelector("#generate");
var output = document.querySelector('output');
// var password = document.querySelector('#password');


function generatePassword() {

  // var passLength = prompt('Choose a password length of 8 character or more')

  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'F', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['[', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', '"', ':', '{', '}', '|', '<', '>', ']', ')', ')', ';',];

  var optionsSelection = getUserOptions();
//
 
  var passwordOptions = [];
  var passwordList = [];
  var password = [];

  if (passwordOptions.lowercase) {
    passwordOptions = passwordOptions.concat(lowercase);
  }

  if (passwordOptions.uppercase) {
    passwordOptions = passwordOptions.concat(uppercase);
  }

  if (passwordOptions.specialCharacters) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }

  if (passwordOptions.numeric) {
    passwordOptions = passwordOptions.concat(numeric);
  }


  for (var i = 0; i < optionsSelection.amount; i++) {
    var randomSelection = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]

    passwordList.push(randomSelection);

    console.log(passwordList);
  }

}


// Get references to the #generate element
//query is asking do you have to button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getUserOptions() {
  var lowercaseSelection = confirm ('Try a lowercase letter');
  var uppercaseSelection = confirm ('Try a uppercase letter');
  var specialCharaSelction = confirm ('Try a special character');
  var numericSelection = confirm ('Try a number');
  var amountSelection = prompt ('Please choose a passsword between 8 to 128 characters');
  var parsedAmount = parseInt('amountSelection');


  var options = {
    lowercase : lowercaseSelection,
    uppercase : uppercaseSelection,
    specialCharacters : specialCharaSelction,
    numeric : numericSelection,
    amount : parsedAmount
  };
  // console.log(password);
  return options

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password();
//   var password = document.querySelector().innerText;
//   alert('Password Made!');
 }


// Add event listener to generate button
//this is a method, 2nd argument is for the listener
generateBtn.addEventListener("click", writePassword);

















