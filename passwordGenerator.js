const generateBtn = document.getElementById("GenerateButton");
const input = document.getElementById("passwordField");
let disablePassField = document.getElementById("passwordField").disabled = false;
// disablePassField =true;

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const signs = "!@#$%&*/|~{}[]";
const digits = "0123456789"
const allChars = uppercase + lowercase + signs;


function generatePassword(){
    let length = document.getElementById("passwordLength").value;
    length = Number(length);
    // console.log(typeof(length));


    

    input.textContent ="";
    let password ="";
    // length = length.textContent;
    // password += uppercase[Math.floor(Math.random() * uppercase.length)];
    // password += lowercase[Math.floor(Math.random() * lowercase.length)];
    // password += signs[Math.floor(Math.random() * signs.length)];
    // password += digits[Math.floor(Math.random() * digits.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // console.log(password.length)
    // console.log("entered length:", length)
    input.value = password;
    disablePassField = document.getElementById("passwordField").disabled = true;
}
document.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    if(e.key == "Enter"){
        generatePassword();
    }
})
function copyPassword(){
    disablePassField = document.getElementById("passwordField").disabled = false;
    input.select();
    document.execCommand("copy");
    disablePassField = document.getElementById("passwordField").disabled = true;
}
