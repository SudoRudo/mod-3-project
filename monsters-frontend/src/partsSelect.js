
const body = document.querySelector('body')
const dropDownGrandfather = document.createElement('div')
const dropDownDiv = document.createElement('div')
dropDownGrandfather.classList += "grand-div"
dropDownDiv.classList += "drop-down-div"

body.appendChild(dropDownGrandfather)
dropDownGrandfather.appendChild(dropDownDiv)

function headSelect(){
    function renderHeadMenu(heads){
        const headMenuDiv = document.createElement('div')
        headMenuDiv.classList += "menu-div"
        
        headMenuDiv.innerHTML = `
        <label for="heads">Head</label>
        <select name="heads" id="head-select">
        </select>
        `
        const selectEl = headMenuDiv.querySelector('select')
    
        
        heads.forEach(head => {
            selectEl.innerHTML += `<option value="${head.id}" >${head.name}</option>`;
        });
        
        selectEl.addEventListener("change", e => {
            const headPart = document.querySelector('#head');
            headPart.innerHTML = `<img src="${heads[e.target.value - 1].url}" />`;
            console.log(e.target.value)
    
        });
    
    
        dropDownDiv.appendChild(headMenuDiv)
        console.log(selectEl)
    
    }
    
    fetch('http://localhost:3000/heads')
    .then(res => res.json())
    .then(headsArray => {
        renderHeadMenu(headsArray)
    })
}

function bodySelect(){
    function renderBodyMenu(bodies){
        const bodyMenuDiv = document.createElement('div')
        bodyMenuDiv.classList += "menu-div"
        
        bodyMenuDiv.innerHTML = `
        <label for="bodies">Body</label>
        <select name="bodies" id="body-select">
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
}

function rightArmSelect(){
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
}


function leftArmSelect(){
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
}

function legSelect(){
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
}

function nameSelect(){
    const nameDiv = document.createElement('div')
    nameDiv.classList += "menu-div"
    dropDownDiv.appendChild(nameDiv)
    nameDiv.innerHTML = `
    <label for="name">Name Your Little Guy</label><br>
    <textarea id="name" name="name" rows="1" ></textarea>`
}

function submitButton(){
    const submitDiv = document.createElement('div')
    submitDiv.classList += "submit-div"
    docBody.append(submitDiv)
    submitDiv.innerHTML = `<button type="button" id="submit">Submit!</button>`
}

function updateDelete(){
    const updateDeleteDiv = document.createElement('div')
    updateDeleteDiv.className = "update-delete"
    docBody.append(updateDeleteDiv)

    // const editSpan = document.createElement('span')
    // updateDeleteDiv.append(editSpan)
    // editSpan.innerHTML = `<button type="button" id="edit">Edit Monster</button><br>`

    const updateSpan = document.createElement('span')
    updateDeleteDiv.append(updateSpan)
    updateSpan.innerHTML = `<button type="button" id="update">Update!</button> || `

    const deleteSpan = document.createElement('span')
    deleteSpan.classList += "delete-span"
    updateDeleteDiv.append(deleteSpan)
    deleteSpan.innerHTML = `<button type="button" id="delete">Delete Monster</button>`

}
const formGen = () => {
headSelect()
bodySelect()
legSelect()
rightArmSelect()
leftArmSelect()
nameSelect()
}



formGen()