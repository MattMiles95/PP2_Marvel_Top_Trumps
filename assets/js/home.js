/**
 * Script to display and close User's Deck Choice window
 */
let playBtn = document.getElementById("play-button");
let deckChoiceContainer = document.getElementById("deck-choice-container");
let closeWindow = document.getElementById("close-window");

playBtn.addEventListener("click", () => {
    deckChoiceContainer.style.display = "flex";
})

closeWindow.addEventListener("click", () => {
    deckChoiceContainer.style.display = "none";
});