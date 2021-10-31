let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userNumber = document.getElementById("userNumber")
    let userHpNumberVal = userNumber.value

    let flavorType = document.getElementById("flavorType")
    let userFlavourVal = flavorType.value

    let flavorContent = document.getElementById("flavorContent")
    let userContentVal = flavorContent.value

    let flavorPower = document.getElementById("flavorPower")
    let userPowerVal = flavorPower.value

    let userQuantity = document.getElementById("userQuantity")
    let userQuantityVal = userQuantity.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal, userHpNumberVal, userFlavourVal, userContentVal, userPowerVal, userQuantityVal, userRemarksVal)
})

function BookNow(userName, userHpNumber, userFlavour, userContent, userPower, userQuantity, userRemarks) {
    let url = 'https://api.sheety.co/579e64b288625faf74669abdc4fe9e07/bookingApp2/booking';
    let body = {
        booking: {
            name: userName,
            hpnumber: userHpNumber,
            flavor: userFlavour,
            content: userContent,
            power: userPower,
            quantity: userQuantity,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
            location.replace("list.html")
        });
}