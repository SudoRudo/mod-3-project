const url = "http://localhost:3000/api/monsters/"
const docBody = document.querySelector('body')
const sideBar = document.createElement('div')
const mainDiv = document.createElement('div')
sideBar.id = "side-bar"
mainDiv.className = "main-div"
docBody.appendChild(sideBar)
docBody.appendChild(mainDiv)

function sideBarTitle(){
    const sideTitle = document.createElement('div')
    sideTitle.innerHTML = `<h3>Monsters</h3>`
    sideBar.appendChild(sideTitle)
}

function renderSideBar(monster){

    
    const head = document.createElement('div')
    const body = document.createElement('div')
    const lArm = document.createElement('div')
    const rArm = document.createElement('div')
    const legs = document.createElement('div')
    const name = document.createElement('div')
    const parentDiv = document.createElement('div')
    
    parentDiv.className = "parent-div"

    parentDiv.appendChild(legs)
    parentDiv.appendChild(rArm)
    parentDiv.appendChild(body)
    parentDiv.appendChild(head)
    parentDiv.appendChild(lArm)
    parentDiv.appendChild(name)

    head.className = "head" 
    lArm.className = "lArm"
    rArm.className = "rArm"
    legs.className = "legs"
    body.className = "body"
    name.className = "name"

    head.innerHTML = `<img src="${monster.head.url}" style="max-width: 20px" />`
    lArm.innerHTML = `<img src="${monster.left_arm.url}" style="max-width: 10px" />`
    rArm.innerHTML = `<img src="${monster.right_arm.url}" style="max-width: 10px" />`
    legs.innerHTML = `<img src="${monster.leg.url}" style="max-width: 23px" />`
    body.innerHTML = `<img src="${monster.body.url}" style="max-width: 20px" />`
    name.innerHTML = `<h4>${monster.name}</h4>`

    sideBar.appendChild(parentDiv)

    // parentDiv.addEventListener("click", e => {
    //     console.log(e.target.closest(".parent-div"))
    // })

    parentDiv.addEventListener("click", () => {
        renderMonster(monster);
        autoFill(monster);
        let elem = document.querySelector('.submit-div')
        elem.parentNode.removeChild(elem);
        updateDelete();
    })
}



function renderMonster(monster){
    mainDiv.innerHTML=""

    const head = document.createElement('div')
    const body = document.createElement('div')
    const lArm = document.createElement('div')
    const rArm = document.createElement('div')
    const legs = document.createElement('div')
    const name = document.createElement('div')

    
    mainDiv.id = monster.id
    

    mainDiv.appendChild(legs)
    mainDiv.appendChild(rArm)
    mainDiv.appendChild(body)
    mainDiv.appendChild(head)
    mainDiv.appendChild(lArm)
    mainDiv.appendChild(name)

    head.id = "head" 
    lArm.id = "lArm"
    rArm.id = "rArm"
    legs.id = "legs"
    body.id = "body"
    name.id = "name"

    head.innerHTML = `<img src="${monster.head.url}" />`
    lArm.innerHTML = `<img src="${monster.left_arm.url}" />`
    rArm.innerHTML = `<img src="${monster.right_arm.url}" />`
    legs.innerHTML = `<img src="${monster.leg.url}" />`
    body.innerHTML = `<img src="${monster.body.url}" />`
    name.innerHTML = `<h2>${monster.name.toUpperCase()}</h2> `

    
    
}

const fetchMonsters=()=>{
    fetch(url)
    .then(resp => resp.json())
    .then(collection => {
        renderMonsters(collection);
        submitButton()
    })
}

const renderMonsters = monsterObjectArray =>{
    monsterObjectArray.forEach(monsterObject =>{
        renderSideBar(monsterObject)
    })
    renderMonster(monsterObjectArray[0])
}

const saveMonster = () =>{
    document.addEventListener("click", e => {
        if (e.target.matches('#submit')){
            const name = document.querySelector('textarea').value
            const head = parseInt(document.getElementById('head-select').value, 10)
            const body = parseInt(document.getElementById('body-select').value, 10)
            const left_arm = parseInt(document.getElementById('left-arm-select').value, 10)
            const right_arm = parseInt(document.getElementById('right-arm-select').value, 10)
            const leg = parseInt(document.getElementById('legs-select').value, 10)
            
            const monsterObj = {name: name, left_arm_id: left_arm, right_arm_id: right_arm, body_id: body, leg_id: leg, head_id: head, user_id: 1 }

            
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(monsterObj)
            })
            .then(response => response.json())
            .then( () =>{
                sideBar.innerHTML = "";
                fetchMonsters();
                sideBarTitle()
            })
     
        }
    })
}

function autoFill(monster){
    document.querySelector('textarea').value = monster.name
    document.getElementById('head-select').value = monster.head.id
    document.getElementById('body-select').value = monster.body.id
    document.getElementById('left-arm-select').value = monster.left_arm.id
    document.getElementById('right-arm-select').value = monster.right_arm.id
    document.getElementById('legs-select').value = monster.leg.id
}

const updateMonster = () =>{
    document.addEventListener("click", e => {
        if (e.target.matches('#update')){
            
            const monId = parseInt(mainDiv.id, 10)

            const name = document.querySelector('textarea').value
            const head = parseInt(document.getElementById('head-select').value, 10)
            const body = parseInt(document.getElementById('body-select').value, 10)
            const left_arm = parseInt(document.getElementById('left-arm-select').value, 10)
            const right_arm = parseInt(document.getElementById('right-arm-select').value, 10)
            const leg = parseInt(document.getElementById('legs-select').value, 10)
            
            const monsterObj = {name: name, left_arm_id: left_arm, right_arm_id: right_arm, body_id: body, leg_id: leg, head_id: head, user_id: 1 }

            
            fetch(`http://localhost:3000/api/monsters/${monId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(monsterObj)
            })
            .then(response => response.json())
            .then( () =>{
                sideBar.innerHTML = "";
                fetchMonsters();
                sideBarTitle()
            })
     
        }
    })
}

const deleteMonster = () => {
    document.addEventListener("click", e => {
        if (e.target.matches('#delete')){
            const monId = parseInt(mainDiv.id, 10)
            const monName = document.getElementById('name').innerText
                var r = confirm(`Are you sure you want to delete ${monName}`);
                if (r == true) {
                  fetch(`http://localhost:3000/api/monsters/${monId}`, {
                      method: 'DELETE'
                  })
                  .then( ()=>{
                    sideBar.innerHTML = "";
                    fetchMonsters();
                    sideBarTitle()
                })
                } else {
                }
        }
    })
} 


fetchMonsters()
saveMonster()
updateMonster()
deleteMonster()
sideBarTitle()