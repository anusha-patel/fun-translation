var translateBtn = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txt-input");
var outputTxt = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationURL(input) {
    return URL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something  went wrong! try again after some time")
}

function clickHandler() {
    var inputText = inputTxt.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerText = translatedText; 
           })
        .catch(errorHandler)
};

translateBtn.addEventListener("click", clickHandler)