const carsUrl =
  "https://gist.githubusercontent.com/AdamSheaffer/fe50daf69c713eeb1a83edc2525a4643/raw/3d84acd63a40582c12f47885106071c0ffee6e83/cars.json";

let cars = []

//EXPORT A COPY OF THE ARRAY 

export const useCars = () =>
 cars.slice()


//FETCH ALL CARS AND RETURN CONVERT RESPONSE TO JSON
export const getCars = () => {
  return fetch("https://gist.githubusercontent.com/AdamSheaffer/fe50daf69c713eeb1a83edc2525a4643/raw/3d84acd63a40582c12f47885106071c0ffee6e83/cars.json")
  .then( response => response.json())
  .then ( carReturn => {
    console.table(carReturn)
    cars = carReturn
})
  
}

