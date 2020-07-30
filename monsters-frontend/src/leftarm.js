function renderLeftArmMenu(leftArms){
    const leftArmMenuDiv = document.createElement('div')
    leftArmMenuDiv.classList += "menu-div"
    
    leftArmMenuDiv.innerHTML = `
    <label for="leftArms">Left Arm</label>
    <select name="left-arms" id="left-arm-select">
    </select>
    `
    const selectEl = leftArmMenuDiv.querySelector('select')

    
    leftArms.forEach(leftArm => {
        selectEl.innerHTML += `<option value="${leftArm.id}" >${leftArm.name}</option>`;
    });
    
    selectEl.addEventListener("change", e => {
        const leftArmPart = document.querySelector('#lArm');
        leftArmPart.innerHTML = `<img src="${leftArms[e.target.value - 1].url}" />`;
        console.log(e.target.value)

    });

    dropDownDiv.appendChild(leftArmMenuDiv)
    console.log(selectEl)
}

fetch('http://localhost:3000/left_arms')
.then(res => res.json())
.then(leftArmsArray => {
    renderLeftArmMenu(leftArmsArray)
})