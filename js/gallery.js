"use strict";
const titles = document.querySelectorAll(".gallery__title");

// Adding event listener to text span elements
for (let i = 0; i < titles.length; i++) {
	titles[i].addEventListener("mouseover", showImg);
	titles[i].addEventListener("mouseout", hideImg);
}

// Function to show images on mouseover
function showImg(e){
	let targetId = e.target.id;
	for (let j = 0; j < titles.length; j++) {
		let id = titles[j].getAttribute("id");
		if(id !== targetId){
			titles[j].style.opacity = "0.15";
		}
	}
	targetId = targetId.split("_")[1];
	let img = document.getElementById(targetId);
	img.style.opacity = "1";
}

// Function to hide images on mouseout
function hideImg(e){
	let targetId = e.target.id;
	for (let j = 0; j < titles.length; j++) {
		let id = titles[j].getAttribute("id");
		if(id !== targetId){
			titles[j].style.opacity = "1";
		}
	}
	targetId = targetId.split("_")[1];
	let img = document.getElementById(targetId);
	img.style.opacity = "0";
}
