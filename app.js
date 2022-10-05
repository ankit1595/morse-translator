var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

serverURL = "https://api.funtranslations.com/translate/morse.json";

function getTranslationURL(text) {
  var textURL = serverURL + "?" + "text=" + text;
  return textURL;
}
function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Something wrong with server! please try again later!!!");
}
function clickEventHandler() {
  var URL = getTranslationURL(txtInput.value);
  fetch(URL)
    .then((response) => response.json())
    .then((json) => (txtOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
