// I paired by myself on this challenge.


// Pseudocode
// Need to set the value of a secret number to 7 
// Need set the password to "just open the door" 
// Need to create a group of four people with John the first member
// and Mary the fourth (two other random names in between)  
// 
// 


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Ringo", "George", "Mary"];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//
// I don't know of a way to refactor my code - though if there is I'd love to know what it is. 
// It's a straightforward assignment of variables and I don't believe you can refactor such a thing.
// The tests were really clear what they were looking for I thought and so I did the assigning
// with as few words/values/characters possible.

   

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// * What parts of your strategy worked? What problems did you face?
//
// Trying to keep it as simple as possible; not over-thinking it. The problems I faced are me 
// perennial inner dialogs around my approach, understanding, etc. My inner critic is often a
// little too loud.
//
// * What questions did you have while coding? What resources did you find to help you answer them?
//
// Could it really be this simple? What am I missing? But trying out my simple code worked so I
// had no need to search out resources for that. I did however research the assert function - which 
// proved enlightening and confusing. Am still unclear if it's now a defined function in JavaScript
// or if it's just a standard self-defined function. (It seems like it's the latter.)
//
// * What concepts are you having trouble with, or did you just figure something out? If so, what?
// 
// Reading the tests and understanding what assert was. I think I have it sussed out but time will tell.
//
// * Did you learn any new skills or tricks?
//
// I think I've got a solid basic understanding of tests and at lease some idea of test driven development.
//
// * How confident are you with each of the Learning Competencies?
// 
// Feeling pretty good about defining local (vs. global) variables, create objects of different types
// and creating/adding objects to an array. I suspect that I will still be challenged by them as things
// get more sophisticated. Likewise I feel like I have a decent understanding of the concept of TDD but
// that things will quickly get challenging and I'll have learning to do along the way.
//
// * Which parts of the challenge did you enjoy?
//
// Having my code work! :) Figuring out the tests and having them make sense pretty quickly. (Or at least
// I think they did. At the very least I was able to write code that passed.)
//
// * Which parts of the challenge did you find tedious?
// 
//  None of it really. I think I'm challenged to continue to grow my pseudo-code skills. My tendency
//  is to go straight to code. And yet I see the potential in going the pseduo-code route so as not to
//  lock yourself into a single approach which can happen if you jump off the blocks with code instead.


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

