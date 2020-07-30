
function renderLegMenu(legs){
    const legMenuDiv = document.createElement('div')
    legMenuDiv.classList += "menu-div"
    
    legMenuDiv.innerHTML = `
    <label for="legs">Legs</label>
    <select name="legs" id="legs-select">
    </select>
    `
    const selectEl = legMenuDiv.querySelector('select')

    
    legs.forEach(leg => {
        selectEl.innerHTML += `<option value="${leg.id}" >${leg.name}</option>`;
    });
    
    selectEl.addEventListener("change", e => {
        const legPart = document.querySelector('#legs');
        legPart.innerHTML = `<img src="${legs[e.target.value - 1].url}" />`;
        console.log(e.target.value)

    });

    dropDownDiv.appendChild(legMenuDiv)
    console.log(selectEl)
}

fetch('http://localhost:3000/legs')
.then(res => res.json())
.then(legsArray => {
    renderLegMenu(legsArray)
})