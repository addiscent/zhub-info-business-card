/*
		business-card.js
		Copyright 2015 DalorWeb LLC.  All rights reserved.
*/

var fadeTime = 200;

function showClient () {
	var cardpane = document.querySelector('#cardpane');
	cardpane.innerHTML = clientInnerHTML; // clientInnerHTML defined in .html file
	$("#cardpane").fadeIn(fadeTime);
}

function client () {
	$("#cardpane").fadeOut(fadeTime, showClient);
}

function showServices () {
	var cardpane = document.querySelector('#cardpane');
	cardpane.innerHTML = servicesInnerHTML; // servicesInnerHTML defined in .html file
	$("#cardpane").fadeIn(fadeTime);
}

function services () {
	$("#cardpane").fadeOut(fadeTime, showServices);
}

function showContact () {
	var cardpane = document.querySelector('#cardpane');
	cardpane.innerHTML = contactInnerHTML; // contactInnerHTML defined in .html file
	$("#cardpane").fadeIn(fadeTime);
}

function contact () {
	$("#cardpane").fadeOut(fadeTime, showContact);
}

function showServicesRollout () {
	var servicesRollout = document.querySelector('#services');
  // servicesRolloutInnerHTML defined in .html file
	servicesRollout.innerHTML = servicesRolloutInnerHTML;
	$("#services").fadeIn(fadeTime);
}

function servicesHideDone () {
	var servicesRollout = document.querySelector('#services');
	servicesRollout.innerHTML = '';
}

function hideServicesRollout () {
	var servicesRollout = document.querySelector('#services');
	$("#services").fadeOut(fadeTime, servicesHideDone);
}

function main () {
  // body background is set to black during HTML page load.  Now the
  // document is loaded and ready to start.  We need to set
  // the body background to transparent for normal fade operation.
  document.querySelector("body").style.background = "none";
  // fade in the client's cardpane contents
  $("#cardpane").fadeOut(fadeTime, showClient);
}

