# FtoC assignment documentation document

I first began this assignment by noting which variables I would need to define for the conversion process
Fahrenheit in this case would need to define, 99, the value that we are trying to convert to Celsius and would represent the variable of Fahrenheit in the conversion equation,
Celsius = (F-32)5/9 (found in class github)
so i typed into the js file

```javascript
let F = 99;
```
Since that represents the value we want to change
I then used the operator const (as seen in the readings and class github) to establish that celsius equaled the data inputted as 'F' put through the equation as so 

```javascript
const C = (F - 32)*(5/9);
```

Since Fahrenheit was being changed by the function I used the let operator, since the function should be effectively unchanging I used const.

Then to run the program I added 

```javascript
console.log(C);
```
And with the help of a classmate since I missed class I found the [eloquent Javascript website](https://eloquentjavascript.net/code/) that allows us to run the code

On the website I ran the code and recieved the answer 37.222222222, which is 99 degrees Fahrenheit in Celsius.