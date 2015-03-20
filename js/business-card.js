/*
		business-card.js
		Copyright 2015 DalorWeb.  All rights reserved.
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
	servicesRollout.innerHTML = servicesRolloutInnerHTML; // servicesRolloutInnerHTML defined in .html file
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


