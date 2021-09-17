// Declare any necessary variables.
let myStudentObj

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
document.getElementById('print').addEventListener('click', function() {
    //console.log('print button clicked!')

    //  a new student object, and another function to print the certificate.
    newStudent();
    populateCertificate();

    //console.log('Student Name: ', myStudentObj.studentName)
    //console.log('Class Name: ', myStudentObj.className)
    
    
})  
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementById('reset').addEventListener('click', function(){
resetCert()

})
function resetCert() {
        document.getElementById('studentName').value = "",
        document.getElementById('className').value = "",
        document.getElementById('studentScores').value = "",
        document.getElementById('possibleScores').value = "",
        document.getElementById('certStudentName').innerHTML = "&nbsp;"
        document.getElementById('certClassName').innerHTML = "&nbsp;"
        document.getElementById('certGrade').innerHTML = "&nbsp;"
}
// Create a function that instantiates a new student object with the input from the HTML form.
function newStudent() {
    myStudentObj = new Student(
        document.getElementById('studentName').value,
        document.getElementById('className').value,
        convertArray(document.getElementById('studentScores')),
        convertArray(document.getElementById('possibleScores'))
    )
    console.log(convertArray(document.getElementById('studentScores')))
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function populateCertificate() {
    document.getElementById('certStudentName').innerText = myStudentObj.studentName
    document.getElementById('certClassName').innerText = myStudentObj.className
    document.getElementById('certGrade').innerText = myStudentObj.letterGrade()
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// You can use this function when instantiating the arrays in the student object.