import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"
import { sendCompletions } from "./dataAccess.js"
import { getCompletions } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    const sortedReservations = reservations.sort((a,b) => {
        return parseInt(a.reserveDate.split("-").join("")) - parseInt(b.reserveDate.split("-").join(""))
      })

    let html = '<ul>'

    const listItems = sortedReservations.map(reservation => {
        return `
        <li>
            ${reservation.reserveDate}
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Delete
            </button>
            <select name="clowns" id="clowns--">
            <option value="">Clown</option>
            ${clowns.map(clown=> {
                return `<option value="${reservation.id}--${reservation.parentName}--${reservation.childName}--${reservation.ChildrenAttending}--${reservation.partyAddress}--${reservation.reserveDate}--${reservation.duration}--${clown.name}">${clown.name}</option>`})}
            </select>
        </li>
    `
    })

  html += listItems.join("")
  html += '<ul>'

  return html
}


export const Completions = () => {
    const completions = getCompletions()

    let html = '<ul>'

    const listItems = completions.map(completion => {
        return`
        <li>
          ${completion}
        </li>
    `
    
    })

    html += listItems.join("")
    html += '</ul>'

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns--") {
            const [,pName, cName, cAttending, pAddress, rDate, Dhours, clown] = event.target.value.split("--")

            const completions = {
                parentName: pName,
                childName: cName,
                ChildrenAttending: cAttending,
                partyAddress: pAddress,
                reserveDate: rDate,
                duration: Dhours,
                clown: clown,
                fullfilled: true
            }

            sendCompletions(completions)

        }
        if (event.target.id === "clowns--") {

            const[reservationId] = event.target.value.split("--")

            deleteReservation(parseInt(reservationId))
        }
    }
)
