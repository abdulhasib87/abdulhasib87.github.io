const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

let vowelBtn = document.getElementById("cVowels")
vowelBtn.addEventListener("click", function(){
    let getString = document.getElementById("nVowels")
    let x = countVowel(getString.value)    
    alert("The total vowels used: "+ x)           
})