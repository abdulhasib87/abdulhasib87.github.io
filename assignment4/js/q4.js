function checkPalindrome(str) {
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            alert("It is not a palindrome");
            return;
        }
    }
    alert("It is a palindrome");    
}  

let palindromeBtn = document.getElementById("cPalindrome")
palindromeBtn.addEventListener("click", function(){
    let getString = document.getElementById("nPalindrome")
    checkPalindrome(getString.value)           
})