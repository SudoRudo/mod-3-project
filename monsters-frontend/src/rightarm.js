function renderRightArmMenu(rightArms){
    const rightArmMenuDiv = document.createElement('div')
    rightArmMenuDiv.classList += "menu-div"
    
    rightArmMenuDiv.innerHTML = `
    <label for="rightArms">Right Arm</label>
    <select name="right-arms" id="right-arm-select">
    </select>
    `
    const selectEl = rightArmMenuDiv.querySelector('select')

    
    rightArms.forEach(rightArm => {
        selectEl.innerHTML += `<option value="${rightArm.id}" >${rightArm.name}</option>`;
    });
    
    selectEl.addEventListener("change", e => {
        const rightArmPart = document.querySelector('#rArm');
        rightArmPart.innerHTML = `<img src="${rightArms[e.target.value - 1].url}" />`;
        console.log(e.target.value)

    });

    dropDownDiv.appendChild(rightArmMenuDiv)
    console.log(selectEl)
}

fetch('http://localhost:3000/right_arms')
.then(res => res.json())
.then(rightArmsArray => {
    renderRightArmMenu(rightArmsArray)
})