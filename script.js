// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // 1) Set libraries with special characters, lower case, upper case, and numbers. Make an empty master library that you will add the other librarys to
  
  var generatePassword = []
  var MasterLibrary = [];
  var CharacterLibrary = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var SpecLibrary = ['!','@','#','$','%','^','&','*','?'];
  var NumLibrary = ['1','2','3','4','5','6','7','8','9','0'];
  var CapLibrary = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y',"'Z"]
  var didUserSelectAtLeastOneCritera = false

//   console.log(MasterLibrary)
  // 2) prompt for password length 
  var PasswordPromptLength = window.prompt("How many characters do you want your password to be?")
//   console.log(PasswordPromptLength)
  // 3) if the answer is bellow 8 OR above 128 reprompt until a number in that range is chosen
  while (PasswordPromptLength < 8 || PasswordPromptLength > 128) {
    var PasswordPromptLength = window.prompt("So Sorry! The password must be between 8 and 128 Characters. How long do you want your password to be?")
//     console.log(PasswordPromptLength)
  }
  // 4) If the input the user has entered is not a number make them re-start writePassword function
  if (isNaN(parseInt(PasswordPromptLength))) {
		alert('Sorry, you must input a number')
		writePassword()
		return
	} 
  // 5) confirm for lower case letters characters
  var lowerCharacters = window.confirm("If you want lowercase letters in the password press 'ok' otherwise press cancel!")
//   console.log(lowerCharacters, "are lower characters")

  // 6) confirm for number characters
  var numberCharacters = window.confirm("If you want numbers in the password press 'ok' otherwise press cancel!")
//   console.log(numberCharacters)
  // 7) confirm for special characters
  var specialCharacters = window.confirm("If you want special characters in the password press 'ok' otherwise press cancel!")
//   console.log(specialCharacters)
  // 8) confirm for Capital letters 
  var CapitalCharacters = window.confirm("If you want capital letters in the password press 'ok' otherwise press cancel!")
//   console.log(CapitalCharacters)

  // 9) if lower letters confirm === true >>then>> add [characterLibarary] to MasterLibrary
  if (lowerCharacters === true) {
    var MasterLibrary = CharacterLibrary.concat(CharacterLibrary)
    var didUserSelectAtLeastOneCritera = true
  }
//   console.log(MasterLibrary)

  // 10) if capital letters confirm === true >>then>> add [CapLibarary] to CharacterLibrary
  if (CapitalCharacters === true) {
    var MasterLibrary = MasterLibrary.concat(CapLibrary)
    var didUserSelectAtLeastOneCritera = true
  }
//   console.log(MasterLibrary)

  // 11) if special characters confirm === true >>then>> add [SpecialCharacters] to CharacterLibrary
  if (specialCharacters === true) {
    var MasterLibrary = MasterLibrary.concat(SpecLibrary)
    var didUserSelectAtLeastOneCritera = true
  }
//   console.log(MasterLibrary)

  // 12) if number characters confirm === true >>then>> add [numberCharacters] to CharacterLibrary
  if (numberCharacters === true) {
    var MasterLibrary = MasterLibrary.concat(NumLibrary)
    var didUserSelectAtLeastOneCritera = true
  }
//   console.log(MasterLibrary)

  // 13) If use did not select numbers letters or special symbols make them re start 
  if (!didUserSelectAtLeastOneCritera){
		alert('you must have lower case letters, upper case letters, numbers, or special characters. Please select one!')
		writePassword()
		return
	}
	
  // 14) for loop random number generator function that finds a number between 0 and [length.CharacterLibrary],then figures out what character
  // in the Masterlibrary is positioned at that number ie: MasterLibrary[randomnumber], 
  // and then add the characte to the password string (probably using concat), this is repeated N number of times!
	
  for (i=0; i < PasswordPromptLength;i++){
  var fixpoint = Math.floor(Math.random() * MasterLibrary.length)
//   console.log(fixpoint, "is my random number")
//   console.log(MasterLibrary[fixpoint],"is the associated character")
  
  generatePassword = generatePassword.concat(MasterLibrary[fixpoint])
  }
//   console.log(generatePassword)
	
  var password = generatePassword
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


