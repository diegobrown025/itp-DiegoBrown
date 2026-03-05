# FizzBuzz Assignment
I first began the assignment by checking the class github for the code that was mentioned in class to be important for the assignment, the string being shown as below
```javascript
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```
This string allows me to count integers in a certain range and filter this data by the remainders of whatever factor we decide, meaning I can repurpose this code for the FizzBuzz task.

I also repurposed the code found in the repository being the example for multiple conditional ifs as shown below
```javascript
let mmMIDI = 64;
if (mmMIDI === 12) {
  console.log("MIDI is 12.");
} else if (mmMIDI === 13) {
  console.log("MIDI is 13.");
} else if (mmMIDI > 64) {
  console.log("MIDI is greater than 64.");
} else {
  console.log("MIDI is less than 64 but not 12 or 13.");
}
```

This code allows me to set multiple conditions, I need this for the fizz buzz task.

With these two blocks of code to guide me I began to write my program and started with 
```javascript
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
		}
	}
```
Which gave me 6 instances of Fizz Buzz in the console. I replaced "fizzbuzz" with i and lo and behold, the 6 numbers who have factors of 3 and 5 "15 30 45 60 75 90". Success.

I then added
```javascript
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
		} else {
		console.log(i);
		}
	}
```

Which gave me all the integers between 1 and 100 with the FizzBuzz text applied to the necessary numbers.
Now that I know that my text will display with the Fizz Buzz text in there as well, I applied more nested else if statements, as shown in the second block of code from the github repository, to then filter the fizz and the buzz, numbers divisible by 3 and 5 respectively.

```javascript
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```
I then got the string I desired and my program runs well! To check my work I just added '&& i' to the text in the console log areas and the program listed the numbers like normal.
