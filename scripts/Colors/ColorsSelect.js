//IMPORT COLORS 
//CREATE DROPDOWN
//CREATE A CHANGE EVENT

import {getAvailableColors, useColors} from "./ColorsProvider.js"

//REFERENCE THE DOM FOR THE EVENTHUB
const eventHub = document.querySelector("#main")
const domElement = document.querySelector(".colorFilter")

//EVENT LISTENER FOR CHANGE EVENT
eventHub.addEventListener("change", e =>{
    //CALLBACK FOR EVENT
    if (e.target.id === "colorSelect"){
        const customEvent = new CustomEvent ("colorChosen", {
            detail: {
                chosenColor : parseInt(e.target.value),
                chosenColorId : e.target.id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (arrayOfColors)=>{
     domElement.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Select a color</option>

        ${arrayOfColors.map(colorObj => {
                return `<option value="${colorObj.id}">${colorObj.color}</option>`
            })
        }
      </select>
     `
 };

 export const colorSelect = () => {
    getAvailableColors()
    .then(() => {
        const theColorArray = useColors()
    render(theColorArray)
    })
}

