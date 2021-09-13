// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class Student {
    constructor(args) {
        this.studentName = arguments[0],
        this.className = arguments[1], 
        this.studentScores = arguments[2],
        this.possibleScores = arguments[3]
    }

    letterGrade() {
    // calculates the student's letter grade
    let letterGrade = this.studentScore() / this.possibleScore()
    switch(letterGrade) {
        case (score < .6): 
            grade = 'F'; break;
        case (score < .7): 
            grade = 'D'; break;
        case (score < .8): 
            grade = 'C'; break;
        case (score < .9): 
            grade = 'B'; break;
        default: 
            grade = 'A'; break;       
    }
}

    studentScore() {
        // adds up all student scores

        let studentScore = this.studentScores.reduce((currentTotal, item) => {
            return item + currentTotal
        },
        0
    )
        return studentScore
}

    possibleScore() {
        // adds up all possible scores
        let possibleScore = this.possibleScores.reduce((currentTotal, item) => {
            return item + currentTotal
        },
        0
        )
        return possibleScore
    }
}

