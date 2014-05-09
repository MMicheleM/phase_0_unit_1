// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
//  RESCUE MISSION

// 1. Get Tharin out of the dead end
// Remove line six this.moveRight();

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();

// 2. Get Tharin behind the Munchkin
// Need to move up one and right two and then down one

this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();

// 3. Attack that Munchkin 
// Need to attack the Munchkin

this.attackNearbyEnemy(); 

 

// GRAB THE MUSHROOM

// 1. Need to Keep Tharin Alive
// Hit rewind button.

// 2. Get the mushroom
// Need to move up one, over one to right

this.moveUp();
this.moveRight()
 
// 3. Defeat the ogre
// Need to move up one, over one to right, back one to left then attack

this.moveUp();
this.moveLeft();
this.attackNearbyEnemy();


// DRINK KME
// 1. Keep Tharin Alive
// This was pre-checked when I launched challenge... 

// 2. Kill Munchkin #1
// Need to move right one and then attack Munchkin

this.moveRight();
this.attackNearbyEnemy();

// 3. Grab the health potion
// Need to move right one and then down one

this.moveRight();
this.moveDown();

// 4. Kill Munchkin #2
// Need to go up one to the right one and then attack

this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// TAUNT THE GUARDS
// 1. Lure the ogre
// Move right 3, up 1 and then say something annoying

// Remove comment lines from existing game code

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// 2. Escape to the right
// Move right 2, up 1, right 1...

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

// Say something and we'll run for it!
// Say something random and move down one, right one, up one, right one

this.say("Ooga Booga!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 

// IT'S A TRAP
// Get close and say something and return
// down 2, then say "Boo!", then up 2

this.moveDown();
this.moveDown();
this.say("Boo!");
this.moveUp();
this.moveUp();


// BREAK THE PRISON
// Determine if friend or foe. If friend break down door if foe leave in prison.
// Phoebe, Gordon, Lucas, Marcus, Robert and William are friends
// Brack, Gort, Grul'thock and Krogg are foes

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Marcus")
    return true;
if(name === "MARCUS")
    return false;
return true;


// TAUNT
// Insult the Ogre 4 times
// say 4 annoying things to the nice ogre (ogres are so misunderstood)

 this.say("Oi! You big ugly bugger!");
 this.say("What? Were ya bathed in a stye?!");
 this.say("You call that scary?!??");

// no idea why it only had me do this.say 3 times...
 

// COWARDLY TAUNT
// Run Tharin out where soliders can hear you and taunt
// Go back one and then say something
// (Most of the code was already entered by the program)


this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(63,20);
// Say something!
this.say("I can see you!!");
// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinates. 


// COMMANDING FOLLOWERS
// Get the troops to follow you and attack the ogres
// Use the verbal commands follow and attack and then pick a point to fight from

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say("Men follow me it is time to attack the ogres!");
this.moveXY(66,46);
this.say("Attack!");

// MOBILE ARTILLERY
// Kill three groups of ogres
// Move to spot one and fire once, move to spot two and fire twice, move to spot three and fire twice

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(55,43);
this.attackXY(69,56);
this.attackXY(66,50);
this.attackXY(50,65);
this.attackXY(52,55);


// Questions
// What is 'this' referring to?

// It is always referring to (and holding the value of) an object and it is usually used inside a 
// fucntion or method. (Although it can be used outside a function in the global scope - something 
// that I don't quite understand and so I'm not going to try and bluff my way through an explanatio) 
// It is notvassigned a value unitl an object invokes the funnction where 'this' is defined.

// What does the () do in JavaScript?

// Holds arguments for a function. Must be used even if it's a function with no parameters (and is thus
// just an empty set of parens.)

// What is the point of semi-colons?

// It separates statements.



// Reflection:
// Write your reflection here.

// * What parts of your strategy worked? What problems did you face?    
// Having fun with it was a good strategy that worked. Problems were understanding, at times, what the next move
// was meant to be. (e.g. the cannon and figuring out x,y coordinates)

// * What questions did you have while coding? What resources did you find to help you answer them?  
// Since the syntax was all laid out no real quesitons. Did wonder why in the Break The Prison challenge there
// weren't semi-colons at the end of each line... Which I then understood to be bad form when I researched it 
// in realtion to the semi-colon question.

// * What concepts are you having trouble with, or did you just figure something out? If so, what?  
// Not having any trouble with concepts. This was a rather straightforward excercise which was a nice break. :)

// * Did you learn any new skills or tricks?
// No new skills but some new language/syntax

// * How confident are you with each of the Learning Competencies?
// Pretty confident I'd say.

// * Which parts of the challenge did you enjoy?
// All of it - totally a fun way to get some repetitive concepts drilled in.

// * Which parts of the challenge did you find tedious?
// None really.
