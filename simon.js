var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var guessPattern = [];
var gameStart = false;
var level = 0;



$(document).keypress(function(){
	if(!gameStart){
		$("h1").text("Level " + level);
		nextSequence();
		gameStart = true;
	}
});
function nextSequence(){
	guessPattern = [];	
	level++;
	$("h1").text("Level " + level);
	randomNumber = Math.floor((Math.random()) * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	
};


$(".button").click(function(){
	var guess = event.srcElement.id;
	guessPattern.push(guess);
	checkAnswer(guessPattern.length-1);
	if(gameStart){
	$("#"+ guess).addClass("pressed");
	setTimeout(function(){
		$("#"+guess).removeClass("pressed");
}, 300);
};

});

function checkAnswer(currentLevel){
	if (guessPattern[currentLevel] == gamePattern[currentLevel]){
		if (guessPattern.length === gamePattern.length){
			setTimeout(function(){
          		nextSequence();
			}, 1000);
       	
      		};	
	}
	else { 
		startOver();
      		$("body").addClass("game-over"); 
      		$("h1").text("Game Over, Press Any Key to Restart");
      		setTimeout(function () {
        		$("body").removeClass("game-over");
      		}, 200);

      		
	}
}

/*function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
*/

function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}

