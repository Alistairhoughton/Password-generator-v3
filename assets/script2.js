// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



function generatePassword(){

var numbers = '0123456789'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var symbols = '£$%^&*@_<>?!' 

var passwordValue = '';
var passwordOptions = '';

// enter a number, check if it is a number, we check value of number
var length = parseInt(
    prompt('Choose length of password between 8 and 128')
)

if(Number.isNaN(length)){
    alert('Enter Valid Password')
}


if(length < 8 || length > 128){
    alert('Numbers are not between 8 and 128')
}



//check what the password will be comprised of.

var hasNumbers = confirm(
    'do you want numbers in password?'
)

var hasLower = confirm(
    'Do you want lowercase letters in your password?'
)

var hasUpper = confirm(
    'Do you want uppercase letters in your password?'
)

var hasSymbols = confirm(
    'Do you want symbols in your password?'
)


if(hasNumbers === false && hasLower === false && hasUpper === false && hasSymbols === false){
    alert('You have to select a minimum of one option!')
}



function includeNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

if (hasNumbers === true) {
    var randomNumber = includeNumbers();
    passwordValue += randomNumber;
    passwordOptions += numbers;
}

//symbols 

function includeSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

if (hasSymbols === true) {
    var randomNumber = includeSymbols();
    passwordValue += randomNumber;
    passwordOptions += symbols;
}


// end of symbols

// lowercase 

function includeLowerCase(){
    return lowercase[Math.floor(Math.random() * lowercase.length)]
}

if (hasLower === true) {
    var randomNumber = includeLowerCase();
    passwordValue += randomNumber;
    passwordOptions += lowercase;
}

// end of lowercase 

// uppercase

function includeUpperCase(){
    return uppercase[Math.floor(Math.random() * uppercase.length)]
}

if (hasUpper === true) {
    var randomNumber = includeUpperCase();
    passwordValue += randomNumber;
    passwordOptions += uppercase;
}

// end of uppercase 

// Our loop! 


for ( var i = passwordValue.length; i < length; i++){
    passwordValue += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
}

//converting passwordValue to passwordte

passwordText.value = passwordValue


}

generateBtn.addEventListener("click", generatePassword);









