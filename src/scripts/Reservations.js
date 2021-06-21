import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"


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
            <select name="clowns" id="clowns">
            <option value="">Clown</option>
            <option value="clown">${clowns.map(clown=> {
                return `<option value="${clown.id}--${clown.name}">${clown.name}</option>`})}</option>
            </select>
        </li>
    `
    })

  html += listItems.join("")
  html += '<ul>'

  return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})