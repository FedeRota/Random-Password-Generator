const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let paswA = document.getElementById("psw1")
let paswB = document.getElementById("psw2")
let check = true
function generatePsw(){
    //Math.floor(Math.random()*characters.length)
    if(check ===true){
    for(i=0;i<15;i++){
        paswA.textContent += characters[Math.floor(Math.random()*characters.length)]
        paswB.textContent += characters[Math.floor(Math.random()*characters.length)]
        check= false
        }   
    }
}

function resetPsw(){
    check = true;
    paswA.textContent =" "
    paswB.textContent =" "
}
