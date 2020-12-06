//Read input

var readlineSync=require("readline-sync")

var userName=readlineSync.question("What's your name ? ")

console.log("Welcome"+" "+ userName +" to Do you know Tanay ?")

var score=0;


// play function
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if (userAnswer=== answer){

    console.log("right!");
    score=score+1;
    
  }
  else{

    console.log("wrong!")
  }


console.log("current Score:",score);
console.log("-----------------------")

}


// array of objects

var questions=[{
 question: "Where do I Live ?",
 answer:"Bangalore"

},
{
  question:"My favourite superhero would be ?",
  answer: "Dhruv"
},
{
  question:"where do I work ? ",
  answer: "Microsoft"
}];

//loop

for (var i=0;i<questions.length; i++){

  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)

}

console.log("YAY ! You SCORED:",score)

