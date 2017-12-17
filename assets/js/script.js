// Modified by @Orcuslc 2017/12/16

$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#container-shuffle")
	var s = container.text().split(',')

	// Shuffle the contents of container
	container.shuffleLetters({"text": s[Math.floor(Math.random()*s.length)]});

	// Leave a 4 second pause
	setInterval(function(){
			// text = s[Math.floor(Math.random()*s.length)];
			container.shuffleLetters({"text": s[Math.floor(Math.random()*s.length)]});
			
	},2000);
	
});

