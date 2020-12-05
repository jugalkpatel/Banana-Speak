let btnTranslate = document.querySelector('#btn-translate');
let userInput = document.querySelector('#user-input');
let userOutput = document.querySelector('#user-output');
btnTranslate.addEventListener('click', function() {
    let text = userInput.value;
    getTranslatedText(text);
});

function constructURL(text) {
    return "https://api.funtranslations.com/translate/minion.json?text=" + text;
}

function getTranslatedText(text) {
    let url = constructURL(text);
    fetch(url)
      .then(response => response.json())
      .then(json => {
          let translatedText = json.contents.translated;
          userOutput.innerText = translatedText;
      })
      .catch(err => console.log("could not fetch" + err));
}