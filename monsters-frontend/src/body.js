function renderBodyMenu(bodies){
    const bodyMenuDiv = document.createElement('div')
    bodyMenuDiv.classList += "menu-div"
    
    bodyMenuDiv.innerHTML = `
    <label for="bodies">Body</label>
    <select name="bodies" id="bodyselect">
    </select>
    `
    const selectEl = bodyMenuDiv.querySelector('select')

    
    bodies.forEach(body => {
        selectEl.innerHTML += `<option value="${body.id}" >${body.name}</option>`;
    });

    selectEl.addEventListener("change", e => {
        const bodyPart = document.querySelector('#body');
        bodyPart.innerHTML = `<img src="${bodies[e.target.value - 1].url}" />`;
        console.log(e.target.value)

    });



    dropDownDiv.appendChild(bodyMenuDiv)
    console.log(selectEl)
}

fetch('http://localhost:3000/bodies')
.then(res => res.json())
.then(bodiesArray => {
    renderBodyMenu(bodiesArray)
})