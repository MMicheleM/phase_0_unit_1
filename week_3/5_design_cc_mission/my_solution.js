// I worked with Premila Anand on this challenge

// Your mission description:
// 
// We will have one character, Roopa, whose mission it is to escape the room without being killed by the ogre.
// She will have two choices, one of which will result in death and the other is living.//  

// Pseudocode
//
// We need to create two characters: Roopa and the Ogre.
// She needs to be able to move right or left.
// We need to create a prompt for the player to pick a direction.
// We need to create a result message.

// Initial Code
var heronine = {firstName: "Roopa"};
var villian = {firstName: "The Ogre"};

alert("Welcome to Roopa takes on the Ogre!  The mission, if you choose to accept it, is to help Roopa escape the Ogre without getting killed! To do this you move toward the correct exit.");

var playerDirection = prompt("Do you want to move left or right?");

    playerDirection = playerDirection.toLowerCase();

    if (playerDirection === "left") {
        console.log("Congratulations!  You made it out alive");
    }
    else   
        console.log("I'm sorry, but you are now dead!");





// Refactored Code

var heronine = {firstName: "Roopa"};
var villian = {firstName: "The Ogre"};

alert("Welcome to Roopa takes on the Ogre!  The mission, if you choose to accept it, is to help Roopa escape the Ogre without getting killed! To do this you move toward the correct exit.");

var playerDirection = prompt("Do you want to move left or right?");
    playerDirection = playerDirection.toLowerCase();
  
if (playerDirection === "left") {
    console.log("Congratulations!  You made it out alive");
    }

else if (playerDirection === "right") {  
    console.log("I'm sorry, but you are now dead!");
 }
 
else console.log("Hmmm, that was neither left nor right. Please refresh page and try again.");




// Reflection
// 
// What parts of your strategy worked? What problems did you face?
// 
// The basic syntax seemed to work fine. The looping we attempted we were not so successful at.
// 
// What questions did you have while coding? What resources did you find to help you answer them?
// 
// What am I doing here, who am I kidding, OMG this is never going to sink in, is it? Chocolate.
// 
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// 
// I basically need to spend another week on JS - which I thought we might be doing but as we're
// on to Ruby next I plan to come back to JS in a few weeks when I'm no longer working full time.
// 
// Did you learn any new skills or tricks?
// 
// I probably knew it before but I think I now have "alert" firmly in mind, along with prompt and
// console.log  And I re-learned the skill of walking away after I'd been at it for awhile as I
// was spinning my wheels and getting incredibly frustrated.
// 
// How confident are you with each of the Learning Competencies?
// 
// Tepid. Ergo the plan, nay commitment, to do at least a full week on the topic again in about 
// two weeks.
// 
// Which parts of the challenge did you enjoy?
// 
// Working with others. (I also did a pairing with Daniel Deepak on this exercise though with 
// other code/objective/etc. that did not, on my part, continue past our pairing session.) The
// time with him greatly informed my time with Premila as I realized that we, or at least I,
// needed to be as unambitious in my approach as possible. So much so that I suspect I may not
// have actually successfully met this challenge fully. But it's been a long week and I'm not
// going to suddenly have an "aha" about JS in the remaining time this evening. I'm trying to 
// avoid a repeat of this by taking a day off this next week to devote to prep. The week after
// I have a few too many commitments but it is, in theory, a four day work week for me as well.
// And then I'm only focused on DBC prep as my job will have finished.
// 
// Which parts of the challenge did you find tedious?
// 
// My lack of knowledge. I would have loved debugging if I could have gotten myself to a place
// where there was debugging to be done. 
// 
