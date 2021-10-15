let calc = document.getElementById("calFactorial");

calc.addEventListener("click", function(){
    const num = document.querySelector("#nFactorial").value;
    var arr = 1;
    for (var i = num; i > 0; i--) {
        arr *= i
    }
    if (num < 0) {
        alert("negative numbers do not have a factorial")
    }
    alert(arr);
})