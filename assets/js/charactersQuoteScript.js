// empty charactersArray & quotesArray to store the API JSON data
let charactersArray = [];
let quotesArray = [];

function loadQoutes() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.breakingbadapi.com/api/quotes");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            quotesArray = JSON.parse(this.responseText);
        }
    };
}

function loadChars() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.breakingbadapi.com/api/characters");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            charactersArray = JSON.parse(this.responseText);
        }
    };
}

function showQuotes() {
    event.preventDefault();
    if (quotesArray.length > 0) {
        randomIndex = Math.floor(Math.random() * quotesArray.length) - 1;
        randomQuotes = quotesArray[randomIndex];
        quotesJsInsert.innerHTML = "";
        quotesJsInsert.insertAdjacentHTML("afterbegin", `
        <p>${randomQuotes.quote}</p>
        <h4>${randomQuotes.author}</h4>`);
    } else {
        alert("There is a problem with Random Quotes... Please send me an email so I can fix it...");
    }
};

function showCharacter() {
    event.preventDefault();
    if (charactersArray.length > 0) {
        randomIndex = Math.floor(Math.random() * charactersArray.length) - 1;
        randomCharacter = charactersArray[randomIndex];
        charactersJsInsert.innerHTML = "";
        charactersJsInsert.insertAdjacentHTML("afterbegin",
            `<h4>${randomCharacter.name}</h4>
        <p>Occupation: ${randomCharacter.occupation}</p>
        <p>Nickname: ${randomCharacter.nickname}</p>
        <p>Portrayed by: ${randomCharacter.portrayed}</p>`);
        document.getElementById("characterImage").src = randomCharacter.img;
    } else {
        alert("There is a problem with Random Characters... Please send me an email so I can fix it...");
    }
};