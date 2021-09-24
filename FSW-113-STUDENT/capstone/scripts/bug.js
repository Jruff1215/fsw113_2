// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let nbr = 0

class Bug {
    constructor(args) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.description = arguments[3]
    }
    addBug(bug) {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below).
        nbr ++  
        let addNewBug = '<div id="bugs' + nbr + '"><p>'            
            addNewBug+= 'Reported By : ' + this.reportedBy + '<br />'
            addNewBug+= 'System: ' + this.system + ' / ' + this.subSystem + '<br />'
            addNewBug+= this.description + '</p>'
            addNewBug+= '<div id="bugBtns">'
                addNewBug+= '<button class="bugButton deleteButton">X</button>'
                addNewBug+= '<button class="bugButton resolveButton">&#x2713;</button>'
            addNewBug+= '</div>'
        addNewBug+= '</div>'
        document.getElementById('listWrapper').innerHTML += addNewBug
        document.getElementsByClassName('deleteButton')[document.getElementsByClassName('deleteButton').length -1].addEventListener('click', () => {bug.deleteBug(nbr)})
        document.getElementsByClassName('resolveButton')[document.getElementsByClassName('resolveButton').length -1].addEventListener('click', () => {bug.resolveBug(nbr)})
    }

    deleteBug(nbr) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        let objBug = 
        document.getElementById('bugs' + nbr);
        objBug.remove()
    }
    

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        document.getElementById('bugs' + nbr).style.backgroundColor = "purple"
    }

}

function reportBug(e) {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let myBug  = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').value,
        document.querySelector('#subSystem').value,
        document.querySelector('#bugDesc').value,
    )
    myBug.addBug(myBug)
}
window.reportBug = reportBug

document.body.style.backgroundImage = "url('/fsw113_2/FSW-113-STUDENT/capstone/images/wallpaper.jpg')"
document.getElementById('topbar').style.color = "white";
document.getElementById('topbar').style.backgroundColor = "red"
document.getElementById('topbar').style.height = "25px"
document.getElementById('reportWrapper').style.border = "1px solid white"
document.getElementById('reportWrapper').style.borderRadius = "10px"
document.getElementById('reportWrapper').style.padding = "10px"
document.getElementById('reportWrapper').style.height = "165px"
document.getElementById('reportWrapper').style.width = "275px"
document.getElementById('reporterByDiv').style.height = "25px"
document.getElementById('reporterByDiv').style.paddingTop = ".5mm"
document.getElementById('systemDiv').style.height = "20px"
document.getElementById('systemDiv').style.paddingTop = ".01mm"
document.getElementById('`AZQ').style.height = "25px"
document.getElementById('`AZQ').style.paddingTop = "2px"
document.getElementById('resetBtn').style.backgroundColor = "red"
document.getElementById('resetBtn').style.color = "white"
document.getElementById('submitBtn').style.backgroundColor = "red"
document.getElementById('submitBtn').style.color = "white"
document.getElementById('listWrapper').style.backgroundColor = "gray"
document.getElementById('listWrapper').style.gridTemplateRows = "1fr 1fr 1fr 1fr"