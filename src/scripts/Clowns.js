/* import { getClowns } from "./dataAccess.js"

export const Clowns = () => {
    const clowns = getClowns()

    let html = '<ul>'

    const listItems = clowns.map(clown => {
        return `
        <li>
            ${clown.description}
            <button class="clown__delete"
                    id="clown--${clown.id}">
                Delete
            </button>
        </li>
    `
    })

  html += listItems.join("")
  html += '<ul>'

  return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("clown--")) {
        const [,clownId] = click.target.id.split("--")
        deleteclown(parseInt(clownId))
    }
}) */