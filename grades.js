var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

	//create a counter for each grade;
//Create an array of grades
var grades = {
	As: 0,
	Bs: 0, 
	Cs: 0, 
	Ds: 0,
	Fs: 0
}
//Output how many of each grade
	//Sort through each number and grade
for (var i = 0; i < scores.length; i++) {
	//IF the number is the grade, add to counter
	if (scores[i] > 90) {
		grades.As++;
	} else if (scores[i] > 80) {
		grades.Bs++;
	} else if (scores[i] > 70) {
		grades.Cs++;
	} else if (scores [i] > 60) {
		grades.Ds++;
	} else {
		grades.Fs++;
	}
}
	//output the grades to the console
console.log(grades);
//Output what is the lowest grade
  //Sort through each number


  //keep the number that is lowest
  var lowestGrade = Math.min.apply(null, scores);
  //output that number to the console
  console.log("The lowest grade is " + lowestGrade);
//Output what is the highest grade
  //Sort through each number
  //keep the number that is highest
  var highestGrade = Math.max.apply(null, scores);
  //output that number to the console
  console.log("The highest grade is " + highestGrade);