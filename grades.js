//Declared input arrays with values.
var scoreF = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
var scoreD = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var scoreC = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
var scoreB = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var scoreA = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//Function to compare input arrays and calculate grades.
function compareScore(scores1, scores2, finalGrades){
	for (var i = 0; i < scores1.length; i++) {
		for (var j = 0; j< scores2.length; j++) {
			if(scores1[i] === scores2[j]){
				finalGrades++;
			}
		}
	}
return finalGrades;
}
//Calcute grades by calling the function.
var gradeA = compareScore(scores, scoreA, 0);
var gradeB = compareScore(scores, scoreB, 0);
var gradeC = compareScore(scores, scoreC, 0);
var gradeD = compareScore(scores, scoreD, 0);
var gradeF = compareScore(scores, scoreF, 0);
console.log("output: " + gradeA + " A, " + gradeB + " B, " + gradeC + " C, " + gradeD + " D, " + gradeF + " F");
//Find out lowest grade.
for (var i = 0; i < scores.length; i++) {
	console.log("lowest grade is " + Math.min(...scores));
}
//Find out highest grade.
for (var i = 0; i < scores.length; i++) {
	console.log("highest grade is " + Math.max(...scores));
}


/*Requirements

Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log() to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
Contact GitHub API*/