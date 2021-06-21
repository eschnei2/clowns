import { ClownsRUSsplash } from "./ClownsRUSsplash.js"
import { fetchReservations } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js" 
 

const mainContainer = document.querySelector("#container")

 export const render = () => {
    fetchReservations()
    .then(fetchClowns)
    .then(
        () => {
            mainContainer.innerHTML = ClownsRUSsplash()
        }
    )
}

render() 

