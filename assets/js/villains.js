// Card Flip Toggle
let villainCard = document.getElementById("user-card");
let heroCard = document.getElementById("cpu-card");
let userBtns = document.getElementById("user-villain-buttons");
let dealBtnContainer = document.getElementById("deal-button-container");
let dealCardsBtn = document.getElementById("deal-cards-button");

dealCardsBtn.addEventListener("click", () => {
  playClick1();
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  userBtns.style.display = "block";
  dealCards();
  dealBtnContainer.style.display = "none";
});

/**
 * MAIN GAME LOOP - deals the User's and
 * CPU's cards by randomly generating heroes
 * and villains, then removing each from their
 * respective arrays to prevent the same cards
 * from coming up more than once
 */
function dealCards() {
  // Plays audio
  playDeal();
  // Generate random index for hero
 let heroIndex = Math.floor(Math.random() * heroesGallery.length);
 let selectHero = heroesGallery[heroIndex];

 // Generate random index for villain
 let villainIndex = Math.floor(Math.random() * villainsGallery.length);
 let selectVillain = villainsGallery[villainIndex];

 // Display the selected hero and villain
 document.getElementById("hero").innerHTML = selectHero;
 document.getElementById("villain").innerHTML = selectVillain;

 // Remove the selected hero and villain from their arrays
 heroesGallery.splice(heroIndex, 1);
 villainsGallery.splice(villainIndex, 1);
}

// RESULTS
let heroName = document.getElementsByClassName("hero-name");
let villainName = document.getElementsByClassName("villain-name");
let resultsScreen = document.getElementById("results-screen");
let resultsWin = document.getElementById("win");
let resultsDraw = document.getElementById("draw");
let resultsLose = document.getElementById("lose");

/**
 * This function is called when the User wins.
 * It displays the 'win' screen, increments their
 * score by one and checks to see if they've one 7 rounds yet
 */
function win() {
  playWin();
  resultsScreen.style.display = "block";
  resultsWin.style.display = "block";
  incrementUserWins();
  checkScore();
}

/**
 * This function is called when the User
 * and CPU draw. It displays the 'draw' screen
 */
function draw() {
  playDraw();
  resultsScreen.style.display = "block";
  resultsDraw.style.display = "block";
}

/**
 * This function is called when the CPU wins.
 * It displays the 'lose' screen, increments their
 * score by one and checks to see if they've one 7 rounds yet
 */
function lose() {
  playLose();
  resultsScreen.style.display = "block";
  resultsLose.style.display = "block";
  incrementCpuWins();
  checkScore();
}

// RESET GAME
let winResetButton = document.getElementsByClassName("next-game-button")[0];
let drawResetButton = document.getElementsByClassName("next-game-button")[1];
let loseResetButton = document.getElementsByClassName("next-game-button")[2];

/**
 * Resets the game from the 'win' screen
 */
winResetButton.addEventListener("click", function () {
  playClick1();
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
  incrementRounds();
  checkRounds();
});

/**
 * Resets the game from the 'draw' screen
 */
drawResetButton.addEventListener("click", function () {
  playClick1();
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
  incrementRounds();
  checkRounds();
});

/**
 * Resets the game from the 'lose' screen
 */
loseResetButton.addEventListener("click", function () {
  playClick1();
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
  incrementRounds();
  checkRounds();
});

// SCORE BOARD
let userDisplayScore = document.getElementById("user-display-score");
let userScore = 0;
let cpuDisplayScore = document.getElementById("cpu-display-score");
let cpuScore = 0;
let winningScore = 7;
let roundDisplay = document.getElementById("round-display");
let roundsPlayed = 0;
let deckLimit = 14;
let gameOverScreen = document.getElementById("game-over-screen");

/**
 * Increments the User's display score and
 * the back-end score by 1
 */
function incrementUserWins() {
  let previousUserWins = parseInt(userDisplayScore.innerText);
  userDisplayScore.innerText = ++previousUserWins;
  ++userScore;
}

/**
 * Increments the CPU's display score and
 * the back-end score by 1
 */
function incrementCpuWins() {
  let previousCpuWins = parseInt(cpuDisplayScore.innerText);
  cpuDisplayScore.innerText = ++previousCpuWins;
  ++cpuScore;
}

/**
 * Increments the 'rounds played' display and
 * the back-end value by 1
 */
function incrementRounds() {
  let previousRoundsPlayed = parseInt(roundDisplay.innerText);
  roundDisplay.innerText = ++previousRoundsPlayed;
  ++roundsPlayed;
}

/**
 * Called when User's score reaches 7.
 * Displays victory screen and hides
 * any other interactive elements
 */
function gameOverWon() {
  let victory = document.getElementById("victory");

  playVictory();
  document.getElementById("page-buttons").style.display = "none";
  document.getElementById("villains-game").style.backdropFilter = "blur(5px)";
  document.getElementById("page-buttons").style.filter = "blur(5px)";
  userBtns.style.display = "none";
  resultsScreen.style.display = "none";
  resultsWin.style.display = "none";
  gameOverScreen.style.display = "block";
  victory.style.display = "flex";
  document.getElementById("help-button").removeEventListener("click");
}

/**
 * Called when CPU's score reaches 7.
 * Displays defeat screen and hides
 * any other interactive elements
 */
function gameOverLost() {
  let defeat = document.getElementById("defeat");

  playDefeat();
  document.getElementById("page-buttons").style.display = "none";
  document.getElementById("villains-game").style.backdropFilter = "blur(5px)";
  document.getElementById("page-buttons").style.filter = "blur(5px)";
  userBtns.style.display = "none";
  resultsScreen.style.display = "none";
  resultsLose.style.display = "none";
  gameOverScreen.style.display = "block";
  defeat.style.display = "flex";
  document.getElementById("help-button").removeEventListener("click");
}

/**
 * Called when the round counter reaches 
 * 14. Displays empty deck screen and hides
 * any other interactive elements
 */
function gameOverEmpty() {
  let emptyDeck = document.getElementById("empty-deck");

  playEmpty();
  document.getElementById("page-buttons").style.display = "none";
  document.getElementById("villains-game").style.backdropFilter = "blur(5px)";
  document.getElementById("page-buttons").style.filter = "blur(5px)";
  dealBtnContainer.style.display = "none";
  userBtns.style.display = "none";
  resultsScreen.style.display = "none";
  resultsWin.style.display = "none";
  resultsLose.style.display = "none";
  resultsDraw.style.display = "none";
  roundDisplay.innerText = "BUST";
  gameOverScreen.style.display = "block";
  emptyDeck.style.display = "flex";
  document.getElementById("help-button").removeEventListener("click");
}

/**
 * Checks the score after each
 * round to see if either side 
 * has won yet. If so, calls
 * the relevant function
 */
function checkScore() {
  if (userScore === winningScore) {
    gameOverWon();
  } else if (cpuScore === winningScore) {
    gameOverLost();
  }
}

/**
 * Checks the round counter after 
 * each round to see if the limit
 * has been reached. If so, calls the
 * gameOverEmpty function
 */
function checkRounds() {
  if (roundsPlayed === deckLimit) {
    gameOverEmpty();
  }
}

/**Replay button - victory.
 * Reloads the page*/
document.getElementById("replay-win").addEventListener("click", () => {
  playClick1();
  location.reload(true);
});

/**Replay button - defeat.
 * Reloads the page*/ 
document.getElementById("replay-lose").addEventListener("click", () => {
  playClick1();
  location.reload(true);
});

/**Replay button - empty deck.
 * Reloads the page*/ 
document.getElementById("replay-empty").addEventListener("click", () => {
  playClick1();
  location.reload(true);
});

/**
 * BATTLE BUTTONS - each button triggers a different function,
 * depending on which stat the player is using for the round
 */

// Power
let powerBtn = document.getElementById("power-btn");
powerBtn.addEventListener("click", () => {
  playClick1();
  powerAtk();
  userBtns.style.display = "none";
});

/**
 * Compares power stats
 */
function powerAtk() {
  let userPower = parseInt(document.getElementById("user-power").innerText);
  let cpuPower = parseInt(document.getElementById("cpu-power").innerText);

  if (userPower > cpuPower) {
    win();
  } else if (userPower === cpuPower) {
    draw();
  } else if (userPower < cpuPower) {
    lose();
  }
}

// Agility
let agilityBtn = document.getElementById("agility-btn");
agilityBtn.addEventListener("click", () => {
  playClick1();
  agilityAtk();
  userBtns.style.display = "none";
});

/**
 * Compares agility stats
 */
function agilityAtk() {
  let userAgility = parseInt(document.getElementById("user-agility").innerText);
  let cpuAgility = parseInt(document.getElementById("cpu-agility").innerText);

  if (userAgility > cpuAgility) {
    win();
  } else if (userAgility === cpuAgility) {
    draw();
  } else if (userAgility < cpuAgility) {
    lose();
  }
}

// Intelligence
let intelBtn = document.getElementById("intel-btn");
intelBtn.addEventListener("click", () => {
  playClick1();
  intelAtk();
  userBtns.style.display = "none";
});

/**
 * Compares intelligence stats
 */
function intelAtk() {
  let userIntel = parseInt(
    document.getElementById("user-intelligence").innerText
  );
  let cpuIntel = parseInt(
    document.getElementById("cpu-intelligence").innerText
  );

  if (userIntel > cpuIntel) {
    win();
  } else if (userIntel === cpuIntel) {
    draw();
  } else if (userIntel < cpuIntel) {
    lose();
  }
}

// Fighting Skills
let fightingBtn = document.getElementById("fighting-btn");
fightingBtn.addEventListener("click", () => {
  playClick1();
  fightingAtk();
  userBtns.style.display = "none";
});

/**
 * Compares fighting skills stats
 */
function fightingAtk() {
  let userFighting = parseInt(
    document.getElementById("user-fighting").innerText
  );
  let cpuFighting = parseInt(document.getElementById("cpu-fighting").innerText);

  if (userFighting > cpuFighting) {
    win();
  } else if (userFighting === cpuFighting) {
    draw();
  } else if (userFighting < cpuFighting) {
    lose();
  }
}

// Battle IQ
let battleIqBtn = document.getElementById("battle-iq-btn");
battleIqBtn.addEventListener("click", () => {
  playClick1();
  battleIqAtk();
  userBtns.style.display = "none";
});

/**
 * Compares battle IQ stats
 */
function battleIqAtk() {
  let userBattleIq = parseInt(
    document.getElementById("user-battle-iq").innerText
  );
  let cpuBattleIq = parseInt(
    document.getElementById("cpu-battle-iq").innerText
  );

  if (userBattleIq > cpuBattleIq) {
    win();
  } else if (userBattleIq === cpuBattleIq) {
    draw();
  } else if (userBattleIq < cpuBattleIq) {
    lose();
  }
}

// PAGE BUTTONS

/**
 * Displays 'How to Play' screen 
 */
document.getElementById("help-button").addEventListener("click", () => {
  playPop();
  document.getElementById("h2p").style.display = "block";
});

/**
 * Closes 'How to Play' screen
 */
let closeWindow = document.getElementsByClassName("close-window")[0];
closeWindow.addEventListener("click", () => {
  playClick1();
  document.getElementById("h2p").style.display = "none";
});

let sfxBtnOn = document.getElementById("sfx-button-on");
let sfxBtnOff = document.getElementById("sfx-button-off");

// AUDIO
const clickSound1 = new Audio("assets/audio/click-sound1.mp3");
const clickSound2 = new Audio("assets/audio/click-sound2.mp3");
const popSound = new Audio("assets/audio/pop-sound.mp3");
const dealSound = new Audio("assets/audio/deal-sound.mp3");
const winSound = new Audio("assets/audio/win-sound.mp3");
const loseSound = new Audio("assets/audio/lose-sound.mp3");
const drawSound = new Audio("assets/audio/draw-sound.mp3");
const victorySound = new Audio("assets/audio/victory-sound.mp3");
const defeatSound = new Audio("assets/audio/defeat-sound.mp3");
const emptySound = new Audio("assets/audio/empty-sound.mp3");

clickSound1.muted = true;
clickSound2.muted = true;
popSound.muted = true;
dealSound.muted = true;
winSound.muted = true;
loseSound.muted = true;
drawSound.muted = true;
victorySound.muted = true;
defeatSound.muted = true;
emptySound.muted = true;

function playClick1() {
  clickSound1.play();
}

function playClick2() {
  clickSound2.play();
}

function playPop() {
  popSound.play();
}

function playDeal() {
  dealSound.play();
}

function playWin() {
  winSound.play();
}

function playLose() {
  loseSound.play();
}

function playDraw() {
  drawSound.play();
}

function playVictory() {
  victorySound.play();
}

function playDefeat() {
  defeatSound.play();
}

function playEmpty() {
  emptySound.play();
}

function muteSfx() {
  if (clickSound1.muted === true) {
    clickSound1.muted = false;
    clickSound2.muted = false;
    popSound.muted = false;
    dealSound.muted = false;
    winSound.muted = false;
    loseSound.muted = false;
    drawSound.muted = false;
    victorySound.muted = false;
    defeatSound.muted = false;
    emptySound.muted = false;
  }
}

function unmuteSfx() {
  if (clickSound1.muted === false) {
    clickSound1.muted = true;
    clickSound2.muted = true;
    popSound.muted = true;
    dealSound.muted = true;
    winSound.muted = true;
    loseSound.muted = true;
    drawSound.muted = true;
    victorySound.muted = true;
    defeatSound.muted = true;
    emptySound.muted = true;
  }
}

/**
 * Toggles SFX on and off
 */
sfxBtnOn.addEventListener("click", () => {
  clickSound1.muted === true;
  muteSfx();
  sfxBtnOn.style.display = "none";
  sfxBtnOff.style.display = "block";
});

sfxBtnOff.addEventListener("click", () => {
  clickSound1.muted === false;
  unmuteSfx();
  sfxBtnOff.style.display = "none";
  sfxBtnOn.style.display = "block";
});

// HEROES
let spiderMan = `
  <img src="assets/images/heroes/spider-man.webp" alt="Image of Spider-Man">
    <h3 class="hero-name">The Amazing Spider-Man</h3>
      <h4>"I don't suppose I could convince you to come up here and fight like a spider?"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">10</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let ironMan = `
  <img src="assets/images/heroes/iron-man.webp" alt="Image of Iron Man">
    <h3 class="hero-name">Iron Man</h3>
      <h4>"Doth mother know you weareth her drapes?"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">3</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">8</td>
                </tr>
            </table>
        </div>
  `;

let captainAmerica = `
  <img src="assets/images/heroes/capt-america.webp" alt="Image of Captain America">
    <h3 class="hero-name">Captain America</h3>
      <h4>"I can do this all day."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">10</td>
                </tr>
            </table>
        </div>
  `;

let hulk = `
  <img src="assets/images/heroes/hulk.webp" alt="Image of the Hulk">
    <h3 class="hero-name">The Incredible Hulk</h3>
      <h4>"Hulk... SMASH!"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">3</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">2</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">2</td>
                </tr>
            </table>
        </div>
  `;

let thor = `
  <img src="assets/images/heroes/thor.webp" alt="Image of Thor">
    <h3 class="hero-name">Thor Odinson</h3>
      <h4>"He's a friend from work!"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">9</td>
                </tr>
            </table>
        </div>
  `;

let blackWidow = `
  <img src="assets/images/heroes/black-widow.webp" alt="Image of Black Widow">
    <h3 class="hero-name">Black Widow</h3>
      <h4>"I'm always picking up after you boys"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">3</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">6</td>
                </tr>
            </table>
        </div>
  `;

let captMarvel = `
  <img src="assets/images/heroes/capt-marvel.webp" alt="Image of Captain Marvel">
    <h3 class="hero-name">Captain Marvel</h3>
      <h4>"These are not the droids you're looking for… It was worth a shot."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">6</td>
                </tr>
            </table>
        </div>
  `;

let squirrelGirl = `
  <img src="assets/images/heroes/squirrel-girl.webp" alt="Image of Squirrel Girl">
    <h3 class="hero-name">Squirrel Girl</h3>
      <h4>"Give a squirrel a nut, feed 'im for a day...but teach 'im to plant an oak tree, and he'll never go nut-less."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">4</td>
                </tr>
            </table>
        </div>
  `;

let wandaMaximoff = `
  <img src="assets/images/heroes/wanda-maximoff.webp" alt="Image of Wnada Maximoff">
    <h3 class="hero-name">Wanda Maximoff</h3>
      <h4>"I can't control their fear. Only my own."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">3</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">3</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">5</td>
                </tr>
            </table>
        </div>
  `;

let drStrange = `
  <img src="assets/images/heroes/dr-strange.webp" alt="Image of Dr Strange">
    <h3 class="hero-name">Dr Strange</h3>
      <h4>"Dormammu, I have come to bargain."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">2</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">5</td>
                </tr>
            </table>
        </div>
  `;

let deadpool = `
  <img src="assets/images/heroes/deadpool.webp" alt="Image of Deadpool">
    <h3 class="hero-name">Deadpool</h3>
      <h4>"With this collar on, my superpower is just unbridled cancer. Give me a bow and arrow and I'm basically Hawkeye."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let wolverine = `
  <img src="assets/images/heroes/wolverine.webp"alt="Image of Wolverine">
    <h3 class="hero-name">Wolverine</h3>
      <h4>"I'm the best at what I do. And what I do isn't very nice."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">8</td>
                </tr>
            </table>
        </div>
  `;

let blackPanther = `
  <img src="assets/images/heroes/black-panther.webp" alt="Image of Black Panther">
    <h3 class="hero-name">Black Panther</h3>
      <h4>"Wakanda forever!"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let msMarvel = `
  <img src="assets/images/heroes/ms-marvel.webp" alt="Image of Ms Marvel">
    <h3 class="hero-name">Ms Marvel</h3>
      <h4>"Good is not a thing you are. It's a thing you do."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">3</td>
                </tr>
            </table>
        </div>
  `;

let falcon = `
  <img src="assets/images/heroes/falcon.webp" alt="Image of Falcon">
    <h3 class="hero-name">Falcon</h3>
      <h4>"On your left."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let winterSoldier = `
  <img src="assets/images/heroes/winter-soldier.webp" alt="Image of the Winter Soldier">
    <h3 class="hero-name">The Winter Soldier</h3>
      <h4>"I read The Hobbit in 1937 when it first came out."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">9</td>
                </tr>
            </table>
        </div>
  `;

let punisher = `
  <img src="assets/images/heroes/punisher.webp" alt="Image of the Punisher">
    <h3 class="hero-name">The Punisher</h3>
      <h4>"One batch, two batch, penny and dime."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">10</td>
                </tr>
            </table>
        </div>
  `;

let daredevil = `
  <img src="assets/images/heroes/daredevil.webp" alt="Image of Daredevil">
    <h3 class="hero-name">Daredevil</h3>
      <h4>"I'm not seeking penance for what I've done, father. I'm asking forgiveness for what I'm about to do."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">4</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let storm = `
  <img src="assets/images/heroes/storm.webp" alt="Image of Storm">
    <h3 class="hero-name">Storm</h3>
      <h4>"You spoke once of power. Little man, you do not know the meaning of the word!"</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">6</td>
                </tr>
            </table>
        </div>
  `;

let gamora = `
  <img src="assets/images/heroes/gamora.webp" alt="Image of Gamora">
    <h3 class="hero-name">Gamora</h3>
      <h4>"Shoot her if she does anything suspicious. Or if you feel like it."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">5</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">7</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let theCreator = `
  <img src="assets/images/heroes/the-creator.webp" alt="Image of me - the Creator!">
    <h3 class="hero-name">The Creator</h3>
      <h4>"What kind of ego maniac puts himself in his own game?."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Coding</td>
                    <td id="cpu-power">10</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Type Speed</td>
                    <td id="cpu-agility">10</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">10</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Problem Solving</td>
                    <td id="cpu-fighting">10</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Modesty</td>
                    <td id="cpu-battle-iq">1</td>
                </tr>
            </table>
        </div>
  `;

let profX = `
  <img src="assets/images/heroes/prof-x.webp" alt="Image of Professor X">
    <h3 class="hero-name">Professor X</h3>
      <h4>"Just because someone stumbles and loses their way, doesn't mean they're lost forever."</h4>
        <div id="hero-stats" class="hidden-text">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="cpu-power">9</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="cpu-agility">1</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="cpu-intelligence">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="cpu-fighting">1</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-bullseye"></i></td>
                    <td>Battle IQ</td>
                    <td id="cpu-battle-iq">8</td>
                </tr>
            </table>
        </div>
  `;

/**
 * Heroes Array
 */
let heroesGallery = [
  spiderMan,
  ironMan,
  captainAmerica,
  hulk,
  thor,
  blackWidow,
  captMarvel,
  squirrelGirl,
  wandaMaximoff,
  drStrange,
  deadpool,
  wolverine,
  blackPanther,
  msMarvel,
  falcon,
  winterSoldier,
  punisher,
  daredevil,
  storm,
  gamora,
  theCreator,
  profX,
];

// VILLAINS
let venom = `
  <img src="assets/images/villains/venom.webp" alt="Image of Venom">
    <h3 class="villain-name">Venom</h3>
    <h4>“Eyes, lungs, pancreas. So many snacks, so little time.”</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">7</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">7</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">3</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">7</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">3</td>
            </tr>
        </table>
    </div>
  `;

let thanos = `
  <img src="assets/images/villains/thanos.webp" alt="Image of Thanos">
    <h3 class="villain-name">Thanos</h3>
    <h4>"Fun isn't something one considers when balancing the universe. But this... this does put a smile on my face.”</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">9</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">5</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">8</td>
            </tr>
        </table>
    </div>
  `;

let ultron = `
  <img src="assets/images/villains/ultron.webp" alt="Image of Ultron">
    <h3 class="villain-name">Ultron</h3>
    <h4>"I had strings, but now I'm free...”</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">9</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">3</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">10</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">8</td>
            </tr>
        </table>
    </div>
  `;

let loki = `
  <img src="assets/images/villains/loki.webp" alt="Image of Loki">
    <h3 class="villain-name">Loki</h3>
    <h4>"I am Loki, of Asgard, and I am burdened with glorious purpose."</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">4</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">9</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">6</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">8</td>
            </tr>
        </table>
    </div>
  `;

let hela = `
  <img src="assets/images/villains/hela.webp" alt="Image of Hela">
    <h3 class="villain-name">Hela</h3>
    <h4>"Our destiny is to rule over all others."</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">9</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">6</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">9</td>
            </tr>
        </table>
    </div>
  `;

let galactus = `
  <img src="assets/images/villains/galactus.webp" alt="Image of Galactus">
    <h3 class="villain-name">Galactus</h3>
    <h4>"You are not unlike an ant fighting the Sun."</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">10</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">2</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">10</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">3</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">3</td>
            </tr>
        </table>
    </div>
  `;

let redSkull = `
  <img src="assets/images/villains/red-skull.webp" alt="Image of Red Skull">
    <h3 class="villain-name">Red Skull</h3>
    <h4>"Quite simply, gentlemen, I have harnessed the power of the Gods."</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">3</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">3</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">6</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">10</td>
            </tr>
        </table>
    </div>
  `;

let killmonger = `
  <img src="assets/images/villains/killmonger.webp" alt="Image of Erik Killmonger">
    <h3 class="villain-name">Erik Killmonger</h3>
    <h4>"Is this your king? Nah, I'm your king."</h4>
    <div id="villain-stats">
        <table>
            <tr>
                <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                <td class="skill">Power</td>
                <td id="user-power">5</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-feather-pointed"></i></td>
                <td>Agility</td>
                <td id="user-agility">7</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-brain"></i></td>
                <td>Intelligence</td>
                <td id="user-intelligence">5</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-hand-fist"></i></td>
                <td>Fighting Skills</td>
                <td id="user-fighting">8</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-bullseye"></i></td>
                <td>Battle IQ</td>
                <td id="user-battle-iq">8</td>
            </tr>
        </table>
    </div>
  `;

let scarletWitch = `
  <img src="assets/images/villains/scarlet-witch.webp" alt="Image of the Scarlet Witch">
    <h3 class="villain-name">The Scarlet Witch</h3>
      <h4>"You break the rules and become a hero. I do it and I become the enemy. That doesn't seem fair."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">9</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">3</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">5</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">3</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">5</td>
          </tr>
      </table>
  </div>
`;

let kingpin = `
  <img src="assets/images/villains/kingpin.webp" alt="Image of the Kingpin">
    <h3 class="villain-name">Kingpin</h3>
      <h4>"Killing a journalist is a high-profile high-risk endeavor. I try to avoid it when possible."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">4</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">2</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">7</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">8</td>
          </tr>
      </table>
  </div>
`;

let drDoom = `
  <img src="assets/images/villains/dr-doom.webp" alt="Image of Doctor Doom">
    <h3 class="villain-name">Doctor Doom</h3>
      <h4>"The world is mine to rule. Mine alone."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">4</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">9</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">7</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">8</td>
          </tr>
      </table>
  </div>
`;

let mandarin = `
  <img src="assets/images/villains/mandarin.webp" alt="Image of the Mandarin">
    <h3 class="villain-name">The Mandarin</h3>
      <h4>"I'll give you a choice. Do you want an empty life, or a meaningful death?"</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">7</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">9</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">8</td>
          </tr>
      </table>
  </div>
`;

let destroyer = `
  <img src="assets/images/villains/destroyer.webp" alt="Image of the Destroyer">
    <h3 class="villain-name">The Destroyer</h3>
      <h4>"Is that one of Stark's?" - S.H.I.E.L.D. Agent</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">2</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">2</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">7</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">3</td>
          </tr>
      </table>
  </div>
`;

let greenGoblin = `
  <img src="assets/images/villains/green-goblin.webp" alt="Image of Green Goblin">
    <h3 class="villain-name">Green Goblin</h3>
      <h4>"The itsy bitsy spider went up the water spout. Down came the goblin and took the spider out."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">6</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">6</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">9</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">7</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">7</td>
          </tr>
      </table>
  </div>
`;

let abomination = `
  <img src="assets/images/villains/abomination.webp" alt="Image of the Abomination">
    <h3 class="villain-name">The Abomination</h3>
      <h4>"Give me a real fight!"</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">3</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">4</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">7</td>
          </tr>
      </table>
  </div>
`;

let baronZemo = `
  <img src="assets/images/villains/baron-zemo.webp" alt="Image of Baron Zemo">
    <h3 class="villain-name">Baron Zemo</h3>
      <h4>"An empire toppled by its enemies can rise again. But one which crumbles from within? That's dead, forever."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">3</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">5</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">10</td>
          </tr>
      </table>
  </div>
`;

let magneto = `
  <img src="assets/images/villains/magneto.webp" alt="Image of Magneto">
    <h3 class="villain-name">Magneto</h3>
      <h4>"Mankind has always feared what it doesn't understand."</h4>
      <div id="villain-stats">
      <table>
          <tr>
              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
              <td class="skill">Power</td>
              <td id="user-power">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-feather-pointed"></i></td>
              <td>Agility</td>
              <td id="user-agility">3</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-brain"></i></td>
              <td>Intelligence</td>
              <td id="user-intelligence">8</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-hand-fist"></i></td>
              <td>Fighting Skills</td>
              <td id="user-fighting">6</td>
          </tr>
          <tr>
              <td><i class="fa-solid fa-bullseye"></i></td>
              <td>Battle IQ</td>
              <td id="user-battle-iq">9</td>
          </tr>
      </table>
  </div>
`;

let mystique = `
  <img src="assets/images/villains/mystique.webp" alt="Image of Mystique">
    <h3 class="villain-name">Mystique</h3>
    <h4>"We shouldn't be trying to fit into society. Society should aspire to be more like us."</h4>
    <div id="villain-stats">
    <table>
        <tr>
            <td><i class="fa-solid fa-fire-flame-curved"></i></td>
            <td class="skill">Power</td>
            <td id="user-power">5</td>
        </tr>
        <tr>
            <td><i class="fa-solid fa-feather-pointed"></i></td>
            <td>Agility</td>
            <td id="user-agility">9</td>
        </tr>
        <tr>
            <td><i class="fa-solid fa-brain"></i></td>
            <td>Intelligence</td>
            <td id="user-intelligence">6</td>
        </tr>
        <tr>
            <td><i class="fa-solid fa-hand-fist"></i></td>
            <td>Fighting Skills</td>
            <td id="user-fighting">8</td>
        </tr>
        <tr>
            <td><i class="fa-solid fa-bullseye"></i></td>
            <td>Battle IQ</td>
            <td id="user-battle-iq">6</td>
        </tr>
    </table>
  </div>
`;

/**
 * Villains Array
 */
let villainsGallery = [
  venom,
  thanos,
  ultron,
  hela,
  galactus,
  redSkull,
  killmonger,
  scarletWitch,
  kingpin,
  drDoom,
  mandarin,
  destroyer,
  greenGoblin,
  abomination,
  baronZemo,
  magneto,
  mystique,
];