import { carHTML } from "./Cars.js";
import {getCars, useCars} from "./CarsProvider.js"

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
