import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getReservations()

    let html = '<ul>'

    const listItems = reservations.map(reservation => {
        return `
        <li>
            ${reservation.id}
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Delete
            </button>
            <select name="clowns" id="clowns">
            <option value="clownId">placeholder</option>
            <option value="clownId2">placeholder</option>
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