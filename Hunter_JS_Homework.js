// 1.Create a script with two variables, each assigned to a number. 
// Add them together and output the result to the console. 
// Now do the same with two strings.
var num1= 1;
var num2 = 2;

console.log(num1 + num2);

var str1 = "I am string 1.";
var str2 = "I am string 2.";

console.log(str1 + " " + str2);

// 2.Create a multidimensional array related to a subject that interests you. 
// Output two of the items in sub-arrays to the console.
var gear = [["superfly", "trek"], ["fiveten shoes", "phase helmet"]]
alert(gear[0][0] + " and " + gear[1][0]);

// 3.Write a script that checks if a variable captured from a prompt is less than 100. 
// If it is, alert the user that their variable is less than 100. 
// If it is not alert the user of what the value was and that it was greater than 100.
function greaterLess(x) {
	var x = prompt("Enter a number.", "Your number goes here.");

	if (x < 100) {
		alert("Your variable is less than 100.");
	}
	else {
		alert("You value, " + x + ", is greater than 100")
	}
}

//4-5. Blacked out on assignment page.

// 6.Declare a function that takes a name as an argument and tells the user what name they've entered. 
// Try running it after it has been declared.
 
function yourName(name){
	var name = prompt("Kindly, enter your name.", "Your name");

	alert("Your name is " + name);
}

// 7. Declare a function that takes no arguments but prints something to the console. 
// Try running it after it has been declared.
function surprise() {
	console.log("SURPRISE!!! SURPRISE!!! SURPRISE!!!SURPRISE!!! SURPRISE!!! SURPRISE!!!")
}

surprise();

// 8.Declare a function that depending upon which virtual 'door' was entered tells 
// the user they've received a different 'prize' in an alert. 
// After declaring the function, try running it with different options. 
// There must be at least 3 doors.
var door = Math.floor((Math.random() * 3) + 1);

function randomDoor(door) {
	// var door = Math.floor((Math.random() * 3) + 1);

	if (door === 1) {
		alert("You win mini-fridge for entering Door " + door);
	}
	else if (door === 2) {
		alert("You win a case of beer for entering Door " + door);
	}
	else {
		alert("You win cold hard cash for entering Door " + door);
	}

}

randomDoor(door);