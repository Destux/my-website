var blueBubbleSwitch = 0;
var redBubbleSwitch = 0;
var numberOfDrops = 250;
var numberOfBubbles = 20;

function uncheckAll(){
	var checks = document.getElementsByClassName("checkb");
	for(var i = 0; i < checks.length; i++){
		checks[i].checked = false;
	}
}

function blueRaincaller(){
	var bluerain = document.getElementById("blue_rain");
	if(bluerain.checked == true) 
		setupOfBlueRain();
	else
		blueDeadDropsAdder();
}

function redRaincaller(){
	var redrain = document.getElementById("red_rain");
	if(redrain.checked == true)
		setupOfRedRain();
	else
		redDeadDropsAdder();
}

/*function redRaincaller(){
	var redrain = document.getElementById("red_rain");
	if(redrain.checked == true) {
		setupOfRedRain();
		redSwitch = 1;
	}
	else
		redSwitch = 0;
}*/

function blueBubbleCaller(){
	var bluebubble = document.getElementById("blue_bubble");
	if(bluebubble.checked == true)
		setupOfBlueBubbles();
	else
		blueDeadBubblesAdder();
}

function redBubbleCaller(){
	var redbubble = document.getElementById("red_bubble");
	if(redbubble.checked == true) {
		setupOfRedBubbles();
		redBubbleSwitch = 1;
	}
	else
		redBubbleSwitch = 0;
}

function openNav() {
	document.getElementById("mySidenav").style.visibility = "visible";
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("header").style.marginLeft = "250px";
	document.getElementById("openNav").style.visibility="hidden";
}

function closeNav() {
	document.getElementById("mySidenav").style.visibility = "hidden";
	document.getElementById("mySidenav").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
	document.getElementById("header").style.marginLeft = "0px";
	document.getElementById("openNav").style.visibility="visible";
}