let playBtn = document.getElementById("play-button");
let deckChoiceContainer = document.getElementById("deck-choice-container");
let closeWindow = document.getElementsByClassName("close-window")[0];

/**
 * Opens User's Deck Choice window
 */
playBtn.addEventListener("click", () => {
    deckChoiceContainer.style.display = "flex";
    document.getElementById("play-button-container").style.display = "none";
});

/**
 * Closes User's Deck Choice window
 */
closeWindow.addEventListener("click", () => {
    deckChoiceContainer.style.display = "none";
    document.getElementById("play-button-container").style.display = "block";
});