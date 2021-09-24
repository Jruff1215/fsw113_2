const systemSelect = document.getElementById('system')
const subSystemSelect = document.getElementById('subSystem')

window.addEventListener('load', () => {
    getSystems(0, systemSelect);
})

function getSystems(parentID, domElement) {
    fetch('/fsw113_2/FSW-113-STUDENT/capstone/data.json')
    .then(res => res.json())
    .then(res => {
        let responseArray = res.systems;

        let newArray = responseArray.filter((e) => {
            return e.parentID === parentID;
        })

        populateDD(newArray, domElement)
    })
    .catch(err => console.log(err))
}

function populateDD(array, domElement) {
    let option = document.createElement('option');
    option.textContent = 'Select an Item'
    domElement.appendChild(option)

    for (let i =0; i < array.length; i++) {
        let nextOption = document.createElement('option')
        let txt = document.createTextNode(array[i].sysName)
        nextOption.appendChild(txt)
        domElement.appendChild(nextOption) 
    }
}

document.querySelector('#system').addEventListener('change', () => {

    if (document.querySelector('#system').value == 'Sales') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(1, subSystemSelect)
    } else if (document.querySelector('#system').value == 'Operations') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(2, subSystemSelect)
    } else if (document.querySelector('#system').value == 'Customer Support') {
        for (let i = 0; i < subSystemSelect.length; i++) {
            subSystemSelect.innerHTML = '';
        }
        getSystems(3, subSystemSelect)
    } 
})
