const generateBtn = document.getElementById("GenerateButton");
const input = document.getElementById("passwordField");
let disablePassField = document.getElementById("passwordField").disabled = false;
// disablePassField =true;

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const signs = "!@#$%&*/|~{}[]";
const digits = "0123456789"
const allChars = uppercase + lowercase + signs + digits;


function generatePassword(){
    let length = document.getElementById("passwordLength").value;
    input.textContent ="";
    let password ="";

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    input.value = password;
    disablePassField = document.getElementById("passwordField").disabled = true;
}
document.addEventListener("keydown", (e)=>{
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
