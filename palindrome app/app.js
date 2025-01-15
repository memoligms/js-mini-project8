const textİnput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultİnfo = document.getElementById("result-info");


checkBtn.addEventListener("click", ()=>{
    let text = (textİnput.value);
    let reverseText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    if(text == ""){
        alert("Please input a value")
    }else if(reverseText == reverseText.split('').reverse().join('')){
        resultİnfo.textContent= `${text} is a palindrome.`;
    }else{
        resultİnfo.textContent= `${text} is not a palindrome.`;
    }
});
