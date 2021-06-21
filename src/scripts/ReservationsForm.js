export const ReservationsForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childrenAttending">Children Attending</label>
            <input type="number" name="childrenAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveDate">Reservation</label>
            <input type="date" name="reserveDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveLength">Reservation Length</label>
            <input type="text" name="reserveLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Request</button>
    `

    return html
}

import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const pName = document.querySelector("input[name='parentName']").value
        const cName = document.querySelector("input[name='childName']").value
        const cAttending = document.querySelector("input[name='childrenAttending']").value
        const pAddress = document.querySelector("input[name='partyAddress']").value
        const rdate = document.querySelector("input[name='reserveDate']").value
        const rduration = document.querySelector("input[name='reserveLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: pName,
            childName: cName,
            ChildrenAttending: cAttending,
            partyAddress: pAddress,
            reserveDate: rdate,
            duration: rduration

        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})