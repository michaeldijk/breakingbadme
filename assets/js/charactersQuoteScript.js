/* jshint esversion: 6 */

// empty charactersArray & quotesArray to store the API JSON data
let charactersArray = [];
let quotesArray = [];

// Load quotes from BreakingBadAPI.com, and store them inside QuotesArray to work from later
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
// Load Characters from BreakingBadAPI.com, and store them inside charactersArray to work from later
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


// Dropdown field population on select, section below:
// Created a variable to select the element
const dropdown = document.getElementById("charactersDropdown");
// Clears dropdown to empty
dropdown.length = 0;

// Create a default selection option, to show when options are not selected yet, and options are not present yet.
const defaultOption = document.createElement("option");
defaultOption.text = "Select a Character";
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

// For loop to itterate through the array of characters, to create a list of characters.
document.getElementById("charactersDropdown").onmouseenter = function changeContent() {
    for (let i = 0; i < charactersArray.length; i++) {
        option = document.createElement('option');
        option.text = charactersArray[i].name;
        option.value = charactersArray[i].name;
        dropdown.add(option);
    }
};

// Function to match the name of the dropdown, to the charractersArray, and if it matches, then return values.
function charactersDropdownSelection(value) {
    for (let i = 0; i < charactersArray.length; i++) {
        if (charactersArray[i].name === value) {
            charactersJsInsert.innerHTML = "";
            charactersJsInsert.insertAdjacentHTML("afterbegin",
                `<h4>${charactersArray[i].name}</h4>
                <p>Nickname: ${charactersArray[i].nickname}</p>
                <p>Birthday: ${charactersArray[i].birthday}</p>
        <p>Dead or Alive: ${charactersArray[i].status}</p>
        <p>Occupation: ${charactersArray[i].occupation}</p>
        <p>Appeared in seasons: ${charactersArray[i].appearance}</p>
        <p>Portrayed by: ${charactersArray[i].portrayed}</p>`);
            document.getElementById("characterImage").src = charactersArray[i].img;
        }
    }
}