// Assignment Code
var generateBtn = document.querySelector("#generate");
// generatePassword(); 
// Write password to the #password input

/*Prompts and comfirms that are set to variables. take the variables and make if then statements creating a library of
potnetial characters housed 
in a LibararyVar using concat to combine strings . then take a random number generator function(for loop) that runs N 
number of times n being one of the initial promp vars. this number 
generator functoin will generate a number (between 1 and length of Library Var) refference what number of character  that 
number is in the libraryVar (libraryVar[1]) and add it to the Password var-
this then repeats and grabs another letter and then adds it to the password var over and over the number of times the person dicatated */


function writePassword() {
  // 0) CharacterLibrary = [alphabet]
  var generatePassword = []
  var MasterLibrary = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var CharacterLibrary = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var SpecLibrary = ['!','@','#','$','%','^','&','*','?'];
  var NumLibrary = ['1','2','3','4','5','6','7','8','9','0'];
  var CapLibrary = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y',"'Z"]
  // 1) confirm for number characters
  var numberCharacters = window.confirm("If you want numbers in the password press 'ok' otherwise press cancel!")
  console.log(numberCharacters)
  // 2) confirm for capital characters
  var specialCharacters = window.confirm("If you want special characters in the password press 'ok' otherwise press cancel!")
  console.log(specialCharacters)
  // 3) confirm for special characters 
  var CapitalCharacters = window.confirm("If you want capital letters in the password press 'ok' otherwise press cancel!")
  console.log(CapitalCharacters)
  // 4) prompt for password length 
  var PasswordPromptLength = window.prompt("How many characters do you want your password to be?")
  console.log(PasswordPromptLength)
  // 5) if the answer is bellow 8 OR above 128 reprompt until a number in that range is chosen
  while (PasswordPromptLength < 8 || PasswordPromptLength > 128) {
    var PasswordPromptLength = window.prompt("So Sorry! The password must be between 8 and 128 Characters. How long do you want your password to be?")
    console.log(PasswordPromptLength)
  }
  // 6) if capital letters confirm === true >>> add [CapLibarary] to CharacterLibrary
  if (CapitalCharacters === true) {
    var MasterLibrary = CharacterLibrary.concat(CapLibrary)
  }
  console.log(MasterLibrary)

  // 7) if special characters confirm === true >>> add [SpecialCharacters] to CharacterLibrary
  if (specialCharacters === true) {
    var MasterLibrary = MasterLibrary.concat(SpecLibrary)
  }
  console.log(MasterLibrary)
  // 8) if number characters confirm === true >>> add [numberCharacters] to CharacterLibrary
  if (numberCharacters === true) {
    var MasterLibrary = MasterLibrary.concat(NumLibrary)
  }
  console.log(MasterLibrary)
  // 9) for loop random number generator function that finds a number between 0 and [length.CharacterLibrary],then figures out what character
  // in the character library is positioned at that number ie: CharacterLibrary[randomnumber], 
  // and then add the characte to the password string (probably using concat), this is repeated N number of times!
  console.log(PasswordPromptLength, "is the PPL")
  for (i=0; i < PasswordPromptLength;i++){
  var fixpoint = Math.floor(Math.random() * MasterLibrary.length)
  console.log(fixpoint, "is my random number")
  console.log(MasterLibrary[fixpoint],"is the associated character")
  generatePassword = generatePassword.concat(MasterLibrary[fixpoint])
  }
  console.log(generatePassword)


  var password = generatePassword
  var passwordText = document.querySelector("#password");
  
  // password = "ian is cool";
  passwordText.value = password.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// if (PasswordPromptLength < 129 && PasswordPromptLength > 7) {
//   var PasswordLength = PasswordPromptLength
//   console.log("the password length is" , PasswordLength )
// }
// else {
// var PasswordPromptLength = window.prompt("So Sorry! The password must be between 8 and 128 Characters. How long do you want your password to be?")
// console.log(PasswordLength)
// }