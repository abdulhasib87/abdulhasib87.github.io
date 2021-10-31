let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/72897b2095cc735660eae162145da678/bookingApp2/bookings';
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
                let name = json.bookings[i].name;
                let hpnumber = json.bookings[i].hpnumber;
                let flavor = json.bookings[i].flavor;
                let content = json.bookings[i].content;
                let power = json.bookings[i].power;
                let quantity = json.bookings[i].quantity;
                let remarks = json.bookings[i].remarks;
                let Id = json.bookings[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = Id
                row.insertCell(1).innerHTML = name
                row.insertCell(2).innerHTML = hpnumber
                row.insertCell(3).innerHTML = flavor
                row.insertCell(4).innerHTML = content 
                row.insertCell(5).innerHTML = power
                row.insertCell(6).innerHTML = quantity
                row.insertCell(7).innerHTML = remarks 
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
    let url = 'https://api.sheety.co/72897b2095cc735660eae162145da678/bookingApp2/booking/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}