const read = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.cyan("----------Welcome to Naruto Quiz---------"));

let score =0;
let name;

const leaderBoard = [
  {
    name: "Harshit",
    score: 3
  }
];
play();

//Function to start gamne
function play(){
  name = read.question(chalk.bold.red("What is your name?"));
  let ready = read.keyInYN(chalk.green("Are you ready to check your Naruto Knowledge?"));

  if(ready){
    startGame();
  }
  else{
    return;
  }

}

function startGame(){
  let questionSet = [
    {
      question: "Who is the father of Naruto?",
      options: ["Namato","Yamato","Minato","Yahiko"],
      answer:3
    },
    {
      question: "What is the real name of 9 tail beast?",
      options: ["Kurama","Octo","Shukaku","Gyuki"],
      answer:1
    },
    {
      question: "Naruto first teacher name?",
      options: ["Mizuki","Iruka","Kakashi","Orochimaru"],
      answer:2
    }
  ];

  questionSet.map(({question,options,answer})=>{
    askQuestion(question,options,answer);
  });
  gameOver();
}

function askQuestion(question,options,answer){
  console.log();
  console.log(chalk.yellow(question));
  let index = read.keyInSelect(options,"Choose correct option")+1;

  
  if(index===answer){
    console.log(chalk.green("Correct Answer!"));
    score++;
  } 
  else{
    console.log(chalk.red("Wrong answer"));
    score--;
  }
}

function gameOver(){
  console.log("Game is over!");
  console.log("Your score is "+ score);
  showScoreBoard();
}

function showScoreBoard(){
  console.log();
  console.log(chalk.bold.red("-------------LEADERBOARD--------------"));
  console.log();
  leaderBoard.push({name:name,score:score});
  console.table(leaderBoard);

  playAgain();
}

function playAgain(){
  let play = read.keyInYN(chalk.green("Want to play again?"));
  if(play){
    startGame();
  }
  else{
    return;
  }
}
