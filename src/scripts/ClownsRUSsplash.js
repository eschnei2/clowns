import { ReservationsForm } from "./ReservationsForm.js"
import { Reservations } from "./Reservations.js" 

export const ClownsRUSsplash = () => {
    return `
        <h1>Clowns-R-Us</h1>
        <section class="serviceForm">
            ${ReservationsForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}