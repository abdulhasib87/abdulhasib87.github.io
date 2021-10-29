let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingApp2/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for (let i = 0; i < json.bookings.length; i++) {
                let gId = json.bookings[i].id;
                let gName = json.bookings[i].name;
                let gHpNumber = json.bookings[i].hpnumber;
                let gFlavour = json.bookings[i].flavor;
                let gContent = json.bookings[i].content;
                let gPower = json.bookings[i].power;
                let gQuantity = json.bookings[i].quantity;
                let gRemarks = json.bookings[i].remarks;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gHpNumber
                row.insertCell(3).innerHTML = gFlavour
                row.insertCell(4).innerHTML = gContent
                row.insertCell(5).innerHTML = gPower
                row.insertCell(6).innerHTML = gQuantity
                row.insertCell(7).innerHTML = gRemarks  
                row.insertCell(8).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }


        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingApp2/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}