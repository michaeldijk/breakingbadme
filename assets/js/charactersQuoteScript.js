// empty charactersArray & quotesArray to store the API JSON data
let charactersArray = [];
let quotesArray = [];

// Load quotes from BreakingBadAPI.com, and store them inside QuotesArray to work from later
function loadQoutes() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.breakingbadapi.com/api/quotes");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            quotesArray = JSON.parse(this.responseText);
        }
    };
}
// Load Characters from BreakingBadAPI.com, and store them inside charactersArray to work from later
function loadChars(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.breakingbadapi.com/api/characters");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            charactersArray = JSON.parse(this.responseText);
            if (cb) {
                cb();
            }
        }
    };
}

// With the help of my mentor, Antonio, I've been able to solve the Random Quote image issue.
function findCharactersImage(charName) {
    console.log("Looking for ", charName);
    char = charactersArray.filter(function (character) {
        console.log("compare ", character.name, charName, character.name.localeCompare(charName));
        return character.name.localeCompare(charName) === 0;
    });
    if (char[0]) {
        return char[0].img;
        // End reference from my Mentor, below is what I wrote myself
    } else {
        char = charactersArray.filter(function (character) {
            console.log("compare else name:", character.nickname, charName, character.nickname.localeCompare(charName));
            return character.nickname.localeCompare(charName) === 0;
        });
    }
    return char[0].img;
}

// Function which loads in, if button is pressed to show quote on the site.
function showQuotes() {
    // Prevent button from moving browser back to top, as this is default behaviour
    event.preventDefault();
    if (quotesArray.length > 0) {
        randomIndex = Math.floor(Math.random() * quotesArray.length) - 1;
        randomQuotes = quotesArray[randomIndex];
        quotesJsInsert.innerHTML = "";
        quotesJsInsert.insertAdjacentHTML("afterbegin", `
        <blockquote class="blockquote">
  <p class="mb-0">${randomQuotes.quote}</p>
  <footer class="blockquote-footer">${randomQuotes.author}</footer>
</blockquote>`);
        document.getElementById("quotesImage").setAttribute("src", findCharactersImage(randomQuotes.author))
    } else {
        alert("There is a problem with Random Quotes... Please send me an email so I can fix it...");
    }
}

// Function which loads in, if button is pressed to show Character on the site.
function showCharacter() {
    // Prevent button from moving browser back to top, as this is default behaviour
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
}