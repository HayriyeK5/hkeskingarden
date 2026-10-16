/* Jane Eyre */

const janeKnop = document.querySelector("#janeKnop");
const janeDialog = document.querySelector("#janeDialog");
const janeSluiten = document.querySelector("#janeSluiten");

janeKnop.onclick = openJane;
janeSluiten.onclick = sluitJane;

function openJane() {
	janeDialog.showModal();
}

function sluitJane() {
	janeDialog.close();
}


/* Animal Farm */

const animalKnop = document.querySelector("#animalKnop");
const animalDialog = document.querySelector("#animalDialog");
const animalSluiten = document.querySelector("#animalSluiten");

animalKnop.onclick = openAnimal;
animalSluiten.onclick = sluitAnimal;

function openAnimal() {
	animalDialog.showModal();
}

function sluitAnimal() {
	animalDialog.close();
}


/* Of Mice and Men */

const miceKnop = document.querySelector("#miceKnop");
const miceDialog = document.querySelector("#miceDialog");
const miceSluiten = document.querySelector("#miceSluiten");

miceKnop.onclick = openMice;
miceSluiten.onclick = sluitMice;

function openMice() {
	miceDialog.showModal();
}

function sluitMice() {
	miceDialog.close();
}


/* Where the Crawdads Sing */

const crawdadsKnop = document.querySelector("#crawdadsKnop");
const crawdadsDialog = document.querySelector("#crawdadsDialog");
const crawdadsSluiten = document.querySelector("#crawdadsSluiten");

crawdadsKnop.onclick = openCrawdads;
crawdadsSluiten.onclick = sluitCrawdads;

function openCrawdads() {
	crawdadsDialog.showModal();
}

function sluitCrawdads() {
	crawdadsDialog.close();
}


/* Serenade for Nadia */

const nadiaKnop = document.querySelector("#nadiaKnop");
const nadiaDialog = document.querySelector("#nadiaDialog");
const nadiaSluiten = document.querySelector("#nadiaSluiten");

nadiaKnop.onclick = openNadia;
nadiaSluiten.onclick = sluitNadia;

function openNadia() {
	nadiaDialog.showModal();
}

function sluitNadia() {
	nadiaDialog.close();
}


/* My Sweet Orange Tree */

const orangeKnop = document.querySelector("#orangeKnop");
const orangeDialog = document.querySelector("#orangeDialog");
const orangeSluiten = document.querySelector("#orangeSluiten");

orangeKnop.onclick = openOrange;
orangeSluiten.onclick = sluitOrange;

function openOrange() {
	orangeDialog.showModal();
}

function sluitOrange() {
	orangeDialog.close();
}