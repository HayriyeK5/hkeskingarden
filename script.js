const cookieDialog = document.querySelector(".cookie-dialog");
const openCookie = document.querySelector(".open-cookie");
const cookieJa = document.querySelector(".cookie-ja");
const cookieNee = document.querySelector(".cookie-nee");

openCookie.onclick = openDialog;
cookieJa.onclick = sluitDialog;
cookieNee.onclick = sluitDialog;

function openDialog() {
	cookieDialog.showModal();
}

function sluitDialog() {
	cookieDialog.close();
}