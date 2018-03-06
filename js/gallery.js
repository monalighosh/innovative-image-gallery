"use strict";
const titles = document.getElementsByClassName("gallery__title");

// Adding event listener to text span elements
for (var i = 0; i < titles.length; i++) {
	titles[i].addEventListener("mouseover", showImg);
	titles[i].addEventListener("mouseout", hideImg);
}

// Function to set the opacity, transform and vendor prefixes values
function setProperties(ele, opacity, value){
	ele.style.opacity = opacity;
	ele.style["-webkit-transform"] = value;
	ele.style["-moz-transform"] = value;
	ele.style["-o-transform"] = value;
	ele.style["transform"] = value;
}

// Function to show images on mouseover
function showImg(e){
	var targetId = e.target.id;
	for (var j = 0; j < titles.length; j++) {
		var id = titles[j].getAttribute("id");
		if((id !== targetId && id === "title_yellow-flower") || (id !== targetId && id === "title_colorful-umbrellas") || (id !== targetId && id === "title_chocolates") || (id !== targetId && id === "title_butterfly") || (id !== targetId && id === "title_keys") || (id !== targetId && id === "title_big-city")){
			setProperties(titles[j], "0", "translate3d(70%, 0px, 0px)");
			
		} else if((id !== targetId && id === "title_apples") || (id !== targetId && id === "title_red-leaf") || (id !== targetId && id === "title_blue-sky") || (id !== targetId && id === "title_iphone") || (id !== targetId && id === "title_peppers") || (id !== targetId && id === "title_sweet-slices") || (id !== targetId && id === "title_green-fish") || (id !== targetId && id === "title_vegetables")){
			setProperties(titles[j], "0", "translate3d(-100%, 0px, 0px)");
		} else if((id !== targetId && id === "title_coffee-beans")){
			setProperties(titles[j], "0", "translate3d(-50%, 0px, 0px)");
		} else if(id === targetId){
			titles[j].style.background = "rgba(255,255,255,0.4)";
		}
	}

	targetId = targetId.split("_")[1];
	var img = document.getElementById(targetId);
	img.style.opacity = "1";
}

// Function to hide images on mouseout
function hideImg(e){
	var targetId = e.target.id;
	// targetId = targetId.split("_")[1];

	for (var j = 0; j < titles.length; j++) {
		var id = titles[j].getAttribute("id");
		if(id !== targetId){
			setProperties(titles[j], "1", "translate3d(0, 0, 0)");
		} else if(id === targetId){
			titles[j].style.background = "none";
		} 
	}

	targetId = targetId.split("_")[1];
	var img = document.getElementById(targetId);
	img.style.opacity = "0";
}
