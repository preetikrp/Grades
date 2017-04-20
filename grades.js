const scoreA= [91,92,93,94,95,96,97,98,99,100];
const scoreB= [81,82,83,84,85,86,87,88,89.90];
const scoreC= [71,72,73,74,75,76,78,79,80];
const scoreD= [61,62,63,64,65,66,67,68,69,70];
const scoreF= [51,52,53,54,55,56,57,58,59,60];
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

function scoreCheck(fristArray,secondArray,grade){
	for(var a=0; a<fristArray.length; a++){
		for(var b=0; b<secondArray.length; b++){
			if(fristArray[a] === secondArray[b]){
				grade++;
			}
		}
	}
	return grade;
}
var gradeA= scoreCheck(scores, scoreA, 0);
var gradeB= scoreCheck(scores, scoreB, 0);
var gradeC= scoreCheck(scores, scoreC, 0);
var gradeD= scoreCheck(scores, scoreD, 0);
var gradeF= scoreCheck(scores, scoreF, 0);
console.log("There are "+ gradeA + " A's, " + gradeB +" B's, " + gradeC + " C's, " + gradeD + " D's, and " + gradeF + " F's.");

for(var i=0; i<scores.length; i+=12){
	var min= Math.min(...scores);
	console.log("The lowest grade is ", + min);
}
for(var j=0; j<scores.length; j+=12){
	var max= Math.max(...scores);
	console.log("The highest grade is ", + max);
}


