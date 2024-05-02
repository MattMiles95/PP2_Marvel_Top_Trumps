// Card Flip Toggle
let heroCard = document.getElementById("user-card");
let villainCard = document.getElementById("cpu-card");
let userBtns = document.getElementById("user-buttons");
let dealBtnContainer = document.getElementById("deal-button-container");
let dealCardsBtn = document.getElementById("deal-cards-button")

dealCardsBtn.addEventListener("click", () => {
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
  userBtns.style.display = "block";
  dealCardsUH();
  dealBtnContainer.style.display = "none"; 
});

/**
 * Main Game Loop
 */
function dealCardsUH() {
  let selectHero =
    heroesGallery[Math.floor(Math.random() * heroesGallery.length)];
  let selectVillain =
    villainsGallery[Math.floor(Math.random() * villainsGallery.length)];

  document.getElementById("hero").innerHTML = selectHero;
  document.getElementById("villain").innerHTML = selectVillain;
}

/**
 * Game Score Functions
 */


/**
 * BATTLE BUTTONS - each button triggers a different function,
 * depending on which stat the player is using for the round
 */

// Power
let powerBtn = document.getElementById("power-btn");
powerBtn.addEventListener("click", () => {
  powerAtk();
  userBtns.style.display = "none";
  heroCard.classList.toggle("active");
  villainCard.classList.toggle("active");
});

function powerAtk() {
  let userPower = parseInt(document.getElementById("user-power").innerText);
  let cpuPower = parseInt(document.getElementById("cpu-power").innerText);

  if (userPower > cpuPower) {
    alert("win");
  } else if (userPower === cpuPower) {
    alert("draw");
  } else if (userPower < cpuPower) {
    alert("lose");
  }
}

// Agility
let agilityBtn = document.getElementById("agility-btn");
agilityBtn.addEventListener("click", () => {
  agilityAtk();
});

function agilityAtk() {
  let userAgility = parseInt(document.getElementById("user-agility").innerText);
  let cpuAgility = parseInt(document.getElementById("cpu-agility").innerText);

  if (userAgility > cpuAgility) {
    alert("win");
  } else if (userAgility === cpuAgility) {
    alert("draw");
  } else if (userAgility < cpuAgility) {
    alert("lose");
  }
}

// Intelligence
let intelBtn = document.getElementById("intel-btn");
intelBtn.addEventListener("click", () => {
  intelAtk();
});

function intelAtk() {
  let userIntel = parseInt(document.getElementById("user-intel").innerText);
  let cpuIntel = parseInt(document.getElementById("cpu-intel").innerText);

  if (userIntel > cpuIntel) {
    alert("win");
  } else if (userIntel === cpuIntel) {
    alert("draw");
  } else if (userIntel < cpuIntel) {
    alert("lose");
  }
}

// Fighting Skills
let fightingBtn = document.getElementById("fighting-btn");
fightingBtn.addEventListener("click", () => {
  fightingAtk();
});

function fightingAtk() {
  let userFighting = parseInt(document.getElementById("user-fighting").innerText);
  let cpuFighting = parseInt(document.getElementById("cpu-fighting").innerText);

  if (userFighting > cpuFighting) {
    alert("win");
  } else if (userFighting === cpuFighting) {
    alert("draw");
  } else if (userFighting < cpuFighting) {
    alert("lose");
  }
}

// Battle IQ
let battleIqBtn = document.getElementById("battle-iq-btn");
battleIqBtn.addEventListener("click", () => {
  battleIqAtk();
});

function battleIqAtk() {
  let userBattleIq = parseInt(document.getElementById("user-battle-iq").innerText);
  let cpuBattleIq = parseInt(document.getElementById("cpu-fighting").innerText);

  if (userBattleIq > cpuBattleIq) {
    alert("win");
  } else if (userBattleIq === cpuBattleIq) {
    alert("draw");
  } else if (userBattleIq < cpuBattleIq) {
    alert("lose");
  }
}

// Heroes Gallery
let spiderMan = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3>Spider-Man</h3>
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
    <h3>Iron Man</h3>
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
    <h3>Captain America</h3>
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
                    <td id="user-agility">8</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-brain"></i></td>
                    <td>Intelligence</td>
                    <td id="user-intelligence">6</td>
                </tr>
                <tr>
                    <td><i class="fa-solid fa-hand-fist"></i></td>
                    <td>Fighting Skills</td>
                    <td id="user-fighting">9</td>
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
                  <h3>Venom</h3>
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
                              <td id="cpu-intelligence">5</td>
                          </tr>
                          <tr>
                              <td><i class="fa-solid fa-hand-fist"></i></td>
                              <td>Fighting Skills</td>
                              <td id="cpu-fighting">7</td>
                          </tr>
                          <tr>
                              <td><i class="fa-solid fa-bullseye"></i></td>
                              <td>Battle IQ</td>
                              <td id="cpu-battle-iq">4</td>
                          </tr>
                      </table>
                  </div>
  `;

  /**
 * Villains Array
 */
let villainsGallery = [venom];