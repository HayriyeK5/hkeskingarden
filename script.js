const cookieDialog = document.querySelector("#cookieDialog");
const cookieJa = document.querySelector("#cookieJa");
const cookieNee = document.querySelector("#cookieNee");

cookieDialog.showModal();

cookieJa.onclick = sluitCookie;
cookieNee.onclick = sluitCookie;

function sluitCookie() {
	cookieDialog.close();
}