// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}


/* Pseudocode Section - write pseudocode for each challenge below.

1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

      Create new object giving 'var' the name of 'adam' and since it's meant to be an property-less object follow 
      with empty curly brackets. 

2. Give adam a name property with the value "Adam".

      assign the string of "Adam" to the property 'name'

3. Add a spouse property to terah and assign it the value of adam.

      add 'spouse' after eyeColor and give it the string value of "Adam"
        [This proved not to be true - ended up making the assignment outside of either var]

4. Change the value of the terah weight property to 125.
      
      modify the number '130' to be '125'
        [Originally I had assumed this was meant to literally be overwritten but believe 
        instead that the intent is to impact 'terah'  from outside it's existing definition.]

5. Remove the eyeColor property from terah.

      either delete the line or comment it out (in this case delete)
        [And once I realized we were likely not meant be modifying anything of the 'terah' 
        we'd been given I realized that it would need to be down as a standalone reassignment]

6. Add a spouse property to adam and assign it the value of terah.

      add 'spouse' after 'name' in the Adam object and give it the value of  pointing to'terah'

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

    add 'children' after 'spouse' in 'Terah' and then since it's an object with no properties  
    you'd handle that by having empty curly brackets

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.
    add a [what is correct word] and point it to 'terah' children object by virtue of 
    'terah.children'

*/

// __________________________________________
// Write your code below.




var adam = {
name: "Adam",
spouse: terah
}; 


var kids = {
    carson: {
      name: "Carson"
    },  
    carter: {
      name: "Carter"
    },
    colton: {
      name: "Colton"
    }  
  }


terah.spouse = adam;
delete terah.eyeColor;
terah.weight = 125;
terah.children  = kids; 
adam.children = terah.children;



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// * What parts of your strategy worked? What problems did you face?
// 
//  Create/assign adam worked fine. I had mistakenly copied the terah var and used it to start my 
//  code (having commented out the original code) Had I not down that I would have realized the
//  need to assign adam as terah.spouse AFTER the creation of adam. Got stuck for a good half hour
//  trying to figure out why that test kept failing. My biggest problem is that I'm crossing
//  JavaScript with Ruby with some SQL and it's all alphabet soup in my head right now. I hope
//  that as my skills develop it'll be simply a case of cross-referencing the knowledge to find
//  the right syntax rather than not being certain about it to begin with.
//
// * What questions did you have while coding? What resources did you find to help you answer them?
//
//  My problem that I had to search on was the children - I had originally made them each their own
//  (variable?) but then eventually worked it out to where it's at now. I'm not sure that my
//  original code was invalid per se - just not the structure the test was looking for.  
//
//
// * What concepts are you having trouble with, or did you just figure something out? If so, what?
//
//  Object vs. function vs. method vs. my brain... Think I finally hit a limit this week on new info
//  I can absorb. Am hoping that I bounce back in a few days after a bit of a deeper dive. I'm 
//  assuming we've got another week of JS ahead of us so hopefully things solidify then.
//
// * Did you learn any new skills or tricks?
//
//  Not really - more general knowledge.
//
// * How confident are you with each of the Learning Competencies?
//
//  Feeling a bit tepid after this one. Suspect it's just a matter of getting enough hours under
//  my belt to get this to a solid confidence rating.
//
// * Which parts of the challenge did you enjoy?
//
//  The de-bugging and eventual victory. 
//
// * Which parts of the challenge did you find tedious?
// 
//  Nothing about the challenge - only my limited knowledge was tedious. 
// 
// 


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)