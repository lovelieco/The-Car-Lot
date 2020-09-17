export const carHTML = (carObj) => {
    return `
    <section id="carCard"${carObj.id} class="carCard">
    <h3>${carObj.name}</h3>
    <p>Year ${carObj.year}</p>
    <p>MPG ${carObj.milesPerGallon}</p>
    </section>
    `
}




