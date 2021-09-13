var readlinesync = require("readline-sync"); 

console.log("Hello!, Welcome to THE OFFICE Quiz.")
var name = readlinesync.question("What is ur good name ? ");
console.log("Welcome",name);
console.log("");

console.log("Rules : -- ");
console.log("");

console.log("This is quiz consists of 3 levels");
console.log("To enter next level you have to answer more questions correctly of present level than wrong.");
console.log("");
console.log("Level 1: 1 points every question (3 questions)");
console.log("Level 2: 2 points every question (2 questions)");
console.log("Level 3: 5 points every question (1 questions)");

question1 = [ { ques: " ' That's What She Said ' . Identify the character ? ",ans: "Michael Scott"},
               { ques: "what is the other name of scranton ?", ans: "Electric City"},
               { ques: "what farm does Dwight own's?",  ans: "Beet Farms"},
                ];

question2 = [ { ques: "what is the surname of kevin? ", ans: "Malone"},
               { ques: "which department did Kelly work in ?", ans: "Customer Support"} ];
               
question3 = [ { ques: "Who is admin's favourite character in The Office? ", ans: "Jim Halpert"}];

var score = 0;

function ask(question, answer)
{
  var ans = readlinesync.question(question);
  if(ans==answer)
  {
    console.log("You are right");
    return 1;
  }
  else
  {
    console.log("You are wrong");
    return 0;
  }
}
console.log("");
console.log("LEVEL 1 : ");
console.log("------");
for(var i=0; i<question1.length; i=i+1)
{
  currques=question1[i];
  var re = ask(currques.ques,currques.ans);
  if(re==1)
  {
    score =score+1;
  }
  console.log("Current Score : ",score);
  console.log("");
}
if(score>=2)
{
  console.log("");
  console.log("LEVEL 2 : ");
  console.log("------");
  for(var i=0; i<question2.length; i=i+1)
  {
    currques=question2[i];
    var re = ask(currques.ques,currques.ans);
    if(re==1)
    {
      score =score+2;
    }
    console.log("Current Score : ",score);
    console.log("");
  }
}
if(score>=6)
{
  console.log("");
  console.log("LEVEL 3 : ");
  console.log("------");
  for(var i=0; i<question3.length; i=i+1)
  {
    currques=question3[i];
    var re = ask(currques.ques,currques.ans);
    if(re==1)
    {
      score =score+5;
    }
    console.log("Current Score : ",score);
    console.log("");
  }
}

console.log("-------");
console.log("Final Score : ",score);