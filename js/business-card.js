/*
		business-card.js
		Copyright 2015 DalorWeb LLC.  All rights reserved.

    Code licensed under the Apache License v2.0.
    For details, see http://www.apache.org/licenses/LICENSE-2.0.

*/

var fadeTime = 200;

function showClient () {
	var cardpane = document.querySelector('#cardpane');
	
  // clientInnerHTML defined in .html file
  cardpane.innerHTML = clientInnerHTML;
  
	$("#cardpane").fadeIn(fadeTime);
}

function client () {
	$("#cardpane").fadeOut(fadeTime, showClient);
}

function showServices () {
	var cardpane = document.querySelector('#cardpane');
	
  // servicesInnerHTML defined in .html file
  cardpane.innerHTML = servicesInnerHTML;
	
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
  // Now the document is loaded and ready to start.  The body
  // background was set to black during HTML page load.  We need to set
  // the body background to transparent for normal fade appearance/operation.
  document.querySelector("body").style.background = "none";
  
  // fade in the client's cardpane contents
  $("#cardpane").fadeOut(fadeTime, showClient);
}

