// Card Flip Toggle
let heroCard = document.getElementById("user-card");
let villainCard = document.getElementById("cpu-card");
let userBtns = document.getElementById("user-buttons");
let dealBtnContainer = document.getElementById("deal-button-container");
let dealCardsBtn = document.getElementById("deal-cards-button");

dealCardsBtn.addEventListener("click", () => {
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  userBtns.style.display = "block";
  dealCardsUH();
  dealBtnContainer.style.display = "none";
});

/**
 * Start Game
 */
function dealCardsUH() {
  let selectHero =
    heroesGallery[Math.floor(Math.random() * heroesGallery.length)];
  let selectVillain =
    villainsGallery[Math.floor(Math.random() * villainsGallery.length)];

  document.getElementById("hero").innerHTML = selectHero;
  document.getElementById("villain").innerHTML = selectVillain;
}

// Results
let heroName = document.getElementsByClassName("hero-name");
let villainName = document.getElementsByClassName("villain-name");
let resultsScreen = document.getElementById("results-screen");
let resultsWin = document.getElementById("win");
let resultsDraw = document.getElementById("draw");
let resultsLose = document.getElementById("lose");

function win() {
  resultsScreen.style.display = "block";
  resultsWin.style.display = "block";
  incrementUserWins();
  checkScore();
};

function draw() {
  resultsScreen.style.display = "block";
  resultsDraw.style.display = "block";
};

function lose() {
  resultsScreen.style.display = "block";
  resultsLose.style.display = "block";
  incrementCpuWins();
  checkScore();
};

// Reset Game
let winResetButton = document.getElementsByClassName("next-game-button")[0];
let drawResetButton = document.getElementsByClassName("next-game-button")[1];
let loseResetButton = document.getElementsByClassName("next-game-button")[2];

winResetButton.addEventListener("click", function() {
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
});

drawResetButton.addEventListener("click", function() {
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
});

loseResetButton.addEventListener("click", function() {
  resultsScreen.style.display = "none";
  dealBtnContainer.style.display = "flex";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  resultsWin.style.display = "none";
  resultsDraw.style.display = "none";
  resultsLose.style.display = "none";
});

// Score Board
let userDisplayScore = document.getElementById("user-display-score");
let userScore = 0;
let cpuDisplayScore = document.getElementById("cpu-display-score");
let cpuScore = 0;
let winningScore = 2;

function incrementUserWins() {
  let previousUserWins = parseInt(userDisplayScore.innerText);
  userDisplayScore.innerText = ++previousUserWins;
  ++userScore;
};

function incrementCpuWins() {
  let previousCpuWins = parseInt(cpuDisplayScore.innerText);
  cpuDisplayScore.innerText = ++previousCpuWins;
  ++cpuScore;
};

function checkScore() {
  if (userScore === winningScore) {
    alert("You win!");
  } else if (cpuScore === winningScore) {
    alert("You lose!")
  }
}

/**
 * BATTLE BUTTONS - each button triggers a different function,
 * depending on which stat the player is using for the round
 */

// Power
let powerBtn = document.getElementById("power-btn");
powerBtn.addEventListener("click", () => {
  powerAtk();
  userBtns.style.display = "none";
});

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
  agilityAtk();
  userBtns.style.display = "none";
});

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
  intelAtk();
  userBtns.style.display = "none";
});

function intelAtk() {
  let userIntel = parseInt(document.getElementById("user-intelligence").innerText);
  let cpuIntel = parseInt(document.getElementById("cpu-intelligence").innerText);

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
  fightingAtk();
  userBtns.style.display = "none";
});

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
  battleIqAtk();
  userBtns.style.display = "none";
});

function battleIqAtk() {
  let userBattleIq = parseInt(
    document.getElementById("user-battle-iq").innerText
  );
  let cpuBattleIq = parseInt(document.getElementById("cpu-battle-iq").innerText);

  if (userBattleIq > cpuBattleIq) {
    win();
  } else if (userBattleIq === cpuBattleIq) {
    draw();
  } else if (userBattleIq < cpuBattleIq) {
    lose();
  }
}

// Page Buttons
document.getElementById("help-button").addEventListener("click", () => {
  document.getElementById("h2p").style.display = "block";
})

let closeWindow = document.getElementsByClassName("close-window")[0];
closeWindow.addEventListener("click", () => {
  document.getElementById("h2p").style.display = "none";
});

// Heroes Gallery
let spiderMan = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3 class="hero-name">Spider-Man</h3>
      <h4>"I don't suppose I could convince you to come up here and fight like a spider?"</h4>
        <div id="hero-stats">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="user-power">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-feather-pointed"></i></td>
                    <td>Agility</td>
                    <td id="user-agility">10</td>
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
                    <td id="user-battle-iq">7</td>
                </tr>
            </table>
        </div>
  `;

let ironMan = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3 class="hero-name">Iron Man</h3>
      <h4>"Doth mother know you weareth her drapes?"</h4>
        <div id="hero-stats">
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

let captainAmerica = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3 class="hero-name">Captain America</h3>
      <h4>"I can do this all day."</h4>
        <div id="hero-stats">
            <table>
                <tr>
                    <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                    <td class="skill">Power</td>
                    <td id="user-power">4</td>
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
                    <td id="user-battle-iq">10</td>
                </tr>
            </table>
        </div>
  `;

/**
 * Heroes Array
 */
let heroesGallery = [spiderMan, ironMan, captainAmerica];

// Villains Gallery
let venom = `
  <img src="assets/images/villains/venom.webp">
                  <h3 class="villain-name">Venom</h3>
                  <h4>“Eyes, lungs, pancreas. So many snacks, so little time.”</h4>
                  <div id="villain-stats" class="hidden-text">
                      <table>
                          <tr>
                              <td><i class="fa-solid fa-fire-flame-curved"></i></td>
                              <td class="skill">Power</td>
                              <td id="cpu-power">8</td>
                          </tr>
                          <tr>
                              <td><i class="fa-solid fa-feather-pointed"></i></td>
                              <td>Agility</td>
                              <td id="cpu-agility">7</td>
                          </tr>
                          <tr>
                              <td><i class="fa-solid fa-brain"></i></td>
                              <td>Intelligence</td>
                              <td id="cpu-intelligence">3</td>
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

/**
 * Villains Array
 */
let villainsGallery = [venom];
