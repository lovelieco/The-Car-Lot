import { carHTML } from "./Cars.js";
import {getCars, useCars} from "./CarsProvider.js"

const eventHub = document.querySelector("#main")

export const carList = () => {
    getCars()
    .then(() =>{
        const arrayOfCars = useCars();
        addToDom(arrayOfCars);
    })
}

const addToDom = (theArrayOfCars) => {
    const domElement = document.querySelector(".carContainer")
    let HTMLArray = theArrayOfCars.map(oneCar => {
        return carHTML(oneCar);
    })
    domElement.innerHTML = HTMLArray.join("");

}

// EVENT LISTENER FOR COLOR CHOSEN EVENT

eventHub.addEventListener("colorChosen", e =>{
    if(e.detail.chosenColor !== "0"){ 
        const matchingCars = useCars().filter(singleCar => {
            return singleCar.colorId === e.detail.chosenColor
        });
        addToDom(matchingCars)    

    }
    else addToDom(useCars())
    })
       
    
        
    