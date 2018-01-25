console.log("I am in a grader")

var grade;
var finalGrade;

var grader = function (grade) {
		switch(true) {
			case (grade >= 0 && grade<= 20):
				finalGrade = "A";
				break;

			case (grade >20 && grade <= 50): 
				finalGrade = "B";
				break;
			case (grade >50 && grade <=100):
				finalGrade = "C";
				break;
		}
		console.log(finalGrade);
	}

grader(25);