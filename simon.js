var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var guessPattern = [];
var gameStart = false;


$(document).keypress(function(){
	if(!gameStart){
		$(h1).text("Level" + level);
		nextSequence();
		gameStart = true;
	}
});
function nextSequence(){
	guessPattern = [];
	level++;
	$(h1).text("Level" + level);
	randomNumber = Math.floor((Math.random()) * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);	
	console.log(gamePattern);
	
};

$("img").click(nextSequence);

/*$("img").click(function(){
	var guess= event.srcElement.id;
	guessPattern.push(guess);
	console.log(guessPattern);
});
*/



