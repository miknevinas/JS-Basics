//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
    if (name === 'Tyler') {
        return true;
    }
    else {
        return false;
    }
}



isTyler('Tyler');

//Next problem


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here


function getName() {
    return prompt("What is your name?");
}

getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome() {
    function getName() {
        return prompt("What is your name?");
    }
    alert("Welcome, " + getName())
}
welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  -parameter: declared inside function
  -argument: placed inside function caller, fills parameters

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
   -NaN, undefined, null, false, 0
   -to check if something is falsy: if (condition === false) {}


//Next Problem



//Create a function called myName that returns your name

  //Code Here

function myName() {
    return "Adam";
}
myName();

//Now save the function definition of myName into a new variable called newMyName

  //Code Here


//Now alert the result of invoking newMyName


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
