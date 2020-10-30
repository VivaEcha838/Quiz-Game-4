var canvas, bgImage;

var quiz;

var gameStart = 0;


var form, player, game;

var database;

var allQuestions;

var score = 0;

var radio = []

var marvelImg;

var radioTopics;

var allTopics

function preload(){
    marvelImg = loadImage("Wakanda.jpg");
}



function setup(){
    canvas = createCanvas(displayWidth - 35, displayHeight - 30);


database = firebase.database();

game = new Game();
//game.getState();
game.start();

}

function draw(){
    Quiz.fetchQuizTopics();
Quiz.fetchAllQuestion();
   /* if(playerCount === 4){
        game.update(1);

    }*/
    if(gameStart === 1){
       
       game.play();
    }
  
    
}



