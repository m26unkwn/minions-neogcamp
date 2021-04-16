const txtInput = document.querySelector("#txt-input");
const translateBtn = document.querySelector("#translate-btn");
const outputBox = document.querySelector("#output");
const apiUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function translate() {
  let text = txtInput.value;
  let url = apiUrl + text;
  getTranslation(url);
  console.log("clicked");
}

function getTranslation(url) {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      outputBox.innerHTML = result.contents.translated;
    })
    .catch(() => {
      alert("Request Limit Exceed!\n Try again after sometime");
    });
}
translateBtn.addEventListener("click", translate);
V;
