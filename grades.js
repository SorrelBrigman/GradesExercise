var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

	//create a counter for each grade;
var As = 0;
var Bs = 0;
var Cs = 0;
var Ds = 0;
var Fs = 0;

//Create an array of grades
var grades = [As, Bs, Cs, Ds, Fs]
//Output how many of each grade
	//Sort through each number and grade
for (var = i; i < scores.length; i++) {
	//IF the number is the grade, add to counter
	if (scores[i] > 90) {
		As++;
	} else if (scores[i] > 80) {
		Bs++;
	} else if (scores[i] > 70) {
		Cs++;
	} else if (scores [i]) > 60 {
		Ds++
	} else {
		F++;
	}

}
	//output the grades to the console

//Output what is the lowest grade
  //Sort through each number
  //keep the number that is lowest
  //output that number to the console

//Output what is the highest grade
  //Sort through each number
  //keep the number that is highest
  //output that number to the console