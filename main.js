let passwordLenght = document.getElementById("passwordLenght")
let password = document.getElementById("password") 
let saveButton = document.getElementById("saveButton")
function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
    const number = "1234567890"
    const symbol = "\"~!@#$%^&*()_+=-[]{}\';|:/.,?>!@#$%^&*<`"
    

    const data = lowerAlphabet + upperAlphabet + number + symbol;
    let generator = '';
    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator

}
function getPassword() {
    const newPassword = generatePassword(passwordLenght.value);
    password.value = newPassword;
    alert("password has been generated")
}

function savePassword() {
    const letPassword = password.value; 
    const data = new Blob([`Password is : ${letPassword}`], {type: 'text/plain'});
    const url = window.URL.createObjectURL(data);

    saveButton.setAttribute('href', url);
    saveButton.setAttribute('download', 'password.txt');
}