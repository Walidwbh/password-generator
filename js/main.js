const copy = document.querySelector(".copy");
const length = document.querySelector("input[type=range]");
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));
const generate = document.querySelector("button");
const copiedText = document.getElementById("copiedText");
const strength = document.querySelector(".strength span:last-child");
// copy to clipboard
copy.addEventListener("click",copyFunction);
//change the length value
length.addEventListener("input",lengthFunction);
// checkbox value
checkboxes.forEach((c)=>{
    c.addEventListener("input",checkboxFunction);
});
// generate password button
generate.addEventListener("click",generatePassword);
//functions
let passwordLength = 0;
let characters = "";
function copyFunction(){
    var copiedText = document.getElementById("copiedText");
    navigator.clipboard.writeText(copiedText.value);
    // console.log(copiedText.value)
    // alert(`copied text is ${copiedText.value}`)
}
function lengthFunction(){
    passwordLength = length.value;
    length.nextElementSibling.innerHTML = length.value;
    // console.log(passwordLength)
}
function checkboxFunction(event){
    if(event.target.checked){
        characters += event.target.value;
    }else{
        characters = characters.replace(event.target.value, "");
    }
    console.log(characters);
}
function generatePassword(){
    let result ="";
    let counter = 0;
    while(counter < passwordLength){
        result += characters.charAt(Math.floor(Math.random()*characters.length));
        counter++;
    }
    // console.log(result)
    if(result){
        copiedText.value = result;
        if(result.length<8){
            strength.innerHTML = "WEAK";
            strength.style.color = "#8B0000";
        }else if(result.length<12){
            strength.innerHTML = "MEDIUM";
            strength.style.color = "#FF7F50";
            
        }else if(result.length>=12){
            strength.innerHTML = "STRONG";
            strength.style.color = "#008000";
            
        }
    }else {
        strength.innerHTML ="";
    }
}