import { ClownsRUSsplash } from "./ClownsRUSsplash.js"
import { fetchReservations, fetchCompletions } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js" 
 

const mainContainer = document.querySelector("#container")

 export const render = () => {
    fetchReservations()
    .then(fetchClowns)
    .then(fetchCompletions)
    .then(
        () => {
            mainContainer.innerHTML = ClownsRUSsplash()
        }
    )
}

render() 


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render();
    }
);