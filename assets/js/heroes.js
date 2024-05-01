
// Card Flip Toggle - User Hero
let userHeroCard = document.getElementById("user-hero-card");
let cpuVillainCard = document.getElementById("cpu-villain-card");
let dealCardsButton = document.getElementById("deal-cards-button");

dealCardsButton.addEventListener("click", () => {
  userHeroCard.classList.toggle("active");
  cpuVillainCard.classList.toggle("active");
  dealCardsUH();
  // dealCardsButton.classList.toggle("hidden-text"); (commented out for editing ease - uncomment to play)
});

/**
 * Main Game Loop - User Hero
 */
function dealCardsUH() {
  let selectUserHero =
    userHeroesGallery[Math.floor(Math.random() * userHeroesGallery.length)];
  let selectCpuVillain =
    cpuVillainsGallery[Math.floor(Math.random() * cpuVillainsGallery.length)];

  document.getElementById("user-hero").innerHTML = selectUserHero;
  document.getElementById("cpu-villain").innerHTML = selectCpuVillain;
}

/**
 * Game Score Functions
 */


/**
 * Battle Buttons - each button
 * triggers a different function,
 * depending on which stat. the player
 * is using for the round
 */
let powerBtn = document.getElementById("power-btn");
powerBtn.addEventListener("click", () => {
  powerAtk();
});

function powerAtk() {
  let userPower = parseInt(
    document.getElementById("user-power").innerText);
  let cpuPower = parseInt(
    document.getElementById("cpu-power").innerText);

  if (userPower > cpuPower) {
    alert("win");
  } else if (userPower === cpuPower) {
    alert("draw");
  } else if (userPower < cpuPower) { 
    alert("lose");
  }
}

// User Heroes
let userSpiderMan = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3>Spider-Man</h3>
      <h4>"I don't suppose I could convince you to come up here and fight like a spider?"</h4>
        <div id="user-hero-stats">
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

let userIronMan = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3>Iron Man</h3>
      <h4>"Doth mother know you weareth her drapes?"</h4>
        <div id="user-hero-stats">
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

let userCaptainAmerica = `
  <img src="assets/images/heroes/spider-man.webp">
    <h3>Captain America</h3>
      <h4>"I can do this all day."</h4>
        <div id="user-hero-stats">
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

// User Heroes Gallery
let userHeroesGallery = [userSpiderMan, userIronMan, userCaptainAmerica];

// CPU Villains
let cpuVenom = `
  <img src="assets/images/villains/venom.webp">
                  <h3>Venom</h3>
                  <h4>“Eyes, lungs, pancreas. So many snacks, so little time.”</h4>
                  <div id="cpu-villain-stats" class="hidden-text">
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

// CPU Villains Gallery
let cpuVillainsGallery = [cpuVenom];