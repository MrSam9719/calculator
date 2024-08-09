let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let symbols = document.getElementById("symbols");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#&*₹^$";
// funtion for generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerChars: "";
    allChars += uppercase.checked ? upperChars: "";
    allChars += numbers.checked ? allNumbers: "";
    allChars += symbols.checked ? allSymbols: "";
    
    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    
    let i = 1;
    while(i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.
        random() * allChars.length));
    i++;
}
    return genPassword;
}





