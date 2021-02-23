let data = [];

// function to handle success
function success() {
    data = JSON.parse(this.responseText); //parse the string to JSON
    // console.log(data);
}

// function to handle error
function error(err) {
    console.log('Request Failed', err); //error details will be in the "err" object
}

const xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error; // call error function if request failed
xhr.open('GET', 'https://www.breakingbadapi.com/api/characters'); // open a GET request
xhr.send(); // send the request to the server.

function showCharacter() {
    if (data.length > 0) {
        randomIndex = Math.floor(Math.random() * data.length) - 1;
        randomCharacter = data[randomIndex];
        charactersJsInsert.innerHTML = "";
        charactersJsInsert.insertAdjacentHTML("afterbegin", `
        <h5 class="card-title">${randomCharacter.name}</h5>
        <p class="card-text"><b>Occupation: </b>${randomCharacter.occupation}</p>
        <p class="card-text"><b>Nickname: </b>${randomCharacter.nickname}</p>
        <p class="card-text"><b>Portrayed by: </b>${randomCharacter.portrayed}</p>`);
        document.getElementById("characterImage").src = randomCharacter.img;
        console.log(data);
    } else {
        alert("There is a problem with Random Characters... Please send me an email so I can fix it...")
    }
};