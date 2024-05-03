/**
 * Script to display and close User's Deck Choice window
 */
let playBtn = document.getElementById("play-button");
let deckChoiceContainer = document.getElementById("deck-choice-container");
let closeWindow = document.getElementsByClassName("close-window")[0];

playBtn.addEventListener("click", () => {
    deckChoiceContainer.style.display = "flex";
})

closeWindow.addEventListener("click", () => {
    deckChoiceContainer.style.display = "none";
});