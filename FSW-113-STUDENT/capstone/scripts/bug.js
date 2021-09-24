// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let nbr

class Bug {
    constructor(args) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = arguments[0],
        this.system = arguments[1],
        this.subSystem = arguments[2],
        this.description = arguments[3]
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below).
        nbr ++  
        let addNewBug = '<div id="bugs' + nbr + '"><p>'            
            addNewBug+= 'Reported By : ' + this.reportedBy + '<br />'
            addNewBug+= 'System: ' + this.system + ' / ' + this.subSystem + '<br />'
            addNewBug+= this.description + '</p>'
            addNewBug+= '<div id="bugBtns">'
                addNewBug+= '<button onClick="Bug.deleteBug( ' + nbr + ');" class="bugButton">X</button>'
                addNewBug+= '<button onClick="Bug.resolveBug( ' + nbr + ')" class="bugButton">&#x2713;</button>'
            addNewBug+= '</div>'
        addNewBug+= '</div>'
        document.getElementById('listWrapper').innerHTML += addNewBug 
    }
    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        let objBug = 
        document.getElementById('bug');
        objBug.remove()
    }
    

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        document.getElementById('listWrapper')
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let myBug  = new Bug (
        document.querySelector('#reportedBy').value,
        document.querySelector('#system').value,
        document.querySelector('#subSystem').value,
        document.querySelector('#bugDesc').value,
    )
    myBug.addBug()
}
window.reportBug = reportBug

