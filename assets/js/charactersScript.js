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
            document.getElementById("characterImage1").src = charactersArray[i].img
        }
    }
}