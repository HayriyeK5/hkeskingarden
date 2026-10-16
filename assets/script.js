const popup = document.querySelector("aside");
const button = document.querySelector("aside button");

button.addEventListener("click", function () {
	popup.classList.add("verstopt");
});



const janeKnop = document.querySelector("#janeKnop");
const janeDialog = document.querySelector("#janeDialog");
const janeSluiten = document.querySelector("#janeSluiten");

const animalKnop = document.querySelector("#animalKnop");
const animalDialog = document.querySelector("#animalDialog");
const animalSluiten = document.querySelector("#animalSluiten");

const miceKnop = document.querySelector("#miceKnop");
const miceDialog = document.querySelector("#miceDialog");
const miceSluiten = document.querySelector("#miceSluiten");

const crawdadsKnop = document.querySelector("#crawdadsKnop");
const crawdadsDialog = document.querySelector("#crawdadsDialog");
const crawdadsSluiten = document.querySelector("#crawdadsSluiten");

const nadiaKnop = document.querySelector("#nadiaKnop");
const nadiaDialog = document.querySelector("#nadiaDialog");
const nadiaSluiten = document.querySelector("#nadiaSluiten");

const orangeKnop = document.querySelector("#orangeKnop");
const orangeDialog = document.querySelector("#orangeDialog");
const orangeSluiten = document.querySelector("#orangeSluiten");



janeKnop.onclick = openJane;
janeSluiten.onclick = sluitJane;

animalKnop.onclick = openAnimal;
animalSluiten.onclick = sluitAnimal;

miceKnop.onclick = openMice;
miceSluiten.onclick = sluitMice;

crawdadsKnop.onclick = openCrawdads;
crawdadsSluiten.onclick = sluitCrawdads;

nadiaKnop.onclick = openNadia;
nadiaSluiten.onclick = sluitNadia;

orangeKnop.onclick = openOrange;
orangeSluiten.onclick = sluitOrange;


function openJane() {
	janeDialog.showModal();
}

function sluitJane() {
	janeDialog.close();
}


function openAnimal() {
	animalDialog.showModal();
}

function sluitAnimal() {
	animalDialog.close();
}


function openMice() {
	miceDialog.showModal();
}

function sluitMice() {
	miceDialog.close();
}


function openCrawdads() {
	crawdadsDialog.showModal();
}

function sluitCrawdads() {
	crawdadsDialog.close();
}


function openNadia() {
	nadiaDialog.showModal();
}

function sluitNadia() {
	nadiaDialog.close();
}


function openOrange() {
	orangeDialog.showModal();
}

function sluitOrange() {
	orangeDialog.close();
}