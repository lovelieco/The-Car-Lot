// This is the fetch URL to get an array of available colors
const availableColorsURL =
"https://gist.githubusercontent.com/AdamSheaffer/242f907515474ab081b5a49971bd51f4/raw/fb61fc45a3676a67f7fb5634b987a8f7393b453c/colors.json";

let availableColors = [];

//EXPORT A COPY OF THE COLORS ARRAY
export const useColors = () => {
  return availableColors.slice()  
};


//FETCH THE COLORS AND RETURN THEM
export const getAvailableColors = () => {
  return fetch(availableColorsURL)
  .then(response => response.json())
  .then(colorReturn =>{
    availableColors = colorReturn
    } )
};
