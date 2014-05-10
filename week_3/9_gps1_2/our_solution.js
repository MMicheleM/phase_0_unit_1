// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ariel Fogel
//  2. Michele Murphy


// 1. "YOU SIGNED... WHO?!"
function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var edwardNorton = new Client("Edward Norton", 44, "You met me at a very strange time in my life");
var annaKendrick = new Client("Anna Kendrick", 28, "What? You've got juice pouches and Rocky!");

// Explanation of the constructor function:
// Constructor function is a good example of a DRY approach. it allows you to be as concise as possible
// in creating functions that will allow to pass a variety of parameters into the function?

// 2. "Here they Come!"
var adamSandler = new Client("Adam Sandler", 47, "That's your home, ball. Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...so you're telling me there's a chance? Yeah!");

var clientList = [edwardNorton, annaKendrick, adamSandler, kristenBell, jimCarrey];


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

// psuedocode
// our loop initiated
// log command "My client's name is:"+name
// log command "they are " + age + " years old"
// log command "they love to say " + quote
// log command: empty

for (var i = 0; i< clientList.length; i++){
    console.log("My client's name is: ", clientList[i].name);
    console.log("They are", clientList[i].age, "years old.");
    console.log("They love to say,", clientList[i].quote);
    console.log();
};

// 5. "But wait, there's more!"

edwardNorton.showQuote = function() {
  console.log(edwardNorton.quote);
};

edwardNorton.showQuote();

// ** BONUS **


//  Your Reflection:

// * What parts of your strategy worked? What problems did you face?
//
// Having Ariel be kick-ass conversant in JavaScript. Oh wait, that was probably not our strategy. 
// Problems for me were still getting more comfortable with JS - for Ariel it was only that
// he hadn't memorized syntax yet (though he's fast on his way to being able to reel things off
// without having to do any research!) Aside from the usual figuring out each other's style I'm not
// sure we had any real problems. Again, with huge kudos to Ariel.
//
// * What questions did you have while coding? What resources did you find to help you answer them?
//
// Syntax was primary. Ensuring that had the looping syntax correct, checking with our facilitator
// about use of commas, semi-colons. Really the questions were from Ariel to me trying to help me
// understand pieces I wasn't solid on.
//
// * What concepts are you having trouble with, or did you just figure something out? If so, what?
//
// I wouldn't say I'm having trouble with concepts per se it's just that I'm not yet conversant enough.
//
// * Did you learn any new skills or tricks?
//
// Embarrassing as this is - I've figured out how to share screen via G+ hangout and am more comfortable
// using node in terminal. Also Lorena reminded us about multi-line cursors which made a search/replace 
// type thing incredibly easy.
//
// * How confident are you with each of the Learning Competencies?
//
// Create and manipulate objects in JavaScript: feeling like I have decent foundation with this idea.
// Still need to improve my syntax knowledge. Also am clear there's a lot I don't know I don't know.
//
// Use functions in JavaScript: Again, good with concept less so syntax. Really need to spend more
// time with JS in general. Looking forward to some "free" time after my job ends in two weeks. Until then
// will do my best to fit in some additional learning.
//
// Debug using Node's error messages. Believe I'm very comfortable but it remains to be see what it is
// that I don't know I don't know. Ya know? :P
//
//
// * Which parts of the challenge did you enjoy?
//
// Having Ariel be a kind pair and not be impatinet with my lagging. The whole excercise was enjoyable to
// me as it was helping to cement some of my earlier learning.
//
// * Which parts of the challenge did you find tedious?
// 
// Not knowing the answer to things. I hate not knowing. Outside of DBC I'm incredibly comfortable with
// owning what I don't know. Within DBC I'm finding I'm having to push myself more to say I don't know
// in part I believe it's that my fear of not being able to "get" something gets in the way. Or rather
// I get in the way of myself.


