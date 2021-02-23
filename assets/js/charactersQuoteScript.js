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
            console.log("current qoutes", quotesArray);
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
            console.log("current chars", charactersArray);
        }
    };
}

function showQuotes() {
    if (quotesArray.length > 0) {
        randomIndex = Math.floor(Math.random() * quotesArray.length) - 1;
        randomQuotes = quotesArray[randomIndex];
        quotesJsInsert.innerHTML = "";
        quotesJsInsert.insertAdjacentHTML("afterbegin", `
        <h5 class="card-title">${randomQuotes.author}</h5>
        <p class="card-text"><b>Occupation: </b>${randomQuotes.quote}</p>`);
        console.log(quotesArray);
        e.preventDefault();
    } else {
        alert("There is a problem with Random Quotes... Please send me an email so I can fix it...");
    }
};

function showCharacter() {
    if (charactersArray.length > 0) {
        randomIndex = Math.floor(Math.random() * charactersArray.length) - 1;
        randomCharacter = charactersArray[randomIndex];
        charactersJsInsert.innerHTML = "";
        charactersJsInsert.insertAdjacentHTML("afterbegin", `
        <h5 class="card-title">${randomCharacter.name}</h5>
        <p class="card-text"><b>Occupation: </b>${randomCharacter.occupation}</p>
        <p class="card-text"><b>Nickname: </b>${randomCharacter.nickname}</p>
        <p class="card-text"><b>Portrayed by: </b>${randomCharacter.portrayed}</p>`);
        document.getElementById("characterImage").src = randomCharacter.img;
        console.log(charactersArray);
    } else {
        alert("There is a problem with Random Characters... Please send me an email so I can fix it...");
    }
};