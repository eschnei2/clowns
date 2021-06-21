import { ClownsRUSsplash } from "./ClownsRUSsplash.js"
import { fetchReservations } from "./dataAccess.js"
/* import { fetchClowns } from "./dataAccess.js" */
 

const mainContainer = document.querySelector("#container")

 const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ClownsRUSsplash()
        }
    )
}

render() 

