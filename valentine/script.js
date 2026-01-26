const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.getElementById("hearts-container");

const noMessages = [
  "bro 😐",
  "pls seriously",
  "think again",
  "right thats it i have had enough"
];

let noCount = 0;
let runawayMode = false;

// NO button click
noBtn.addEventListener("click", () => {
  if (noCount < noMessages.length - 1) {
    question.textContent = noMessages[noCount];
    noCount++;
  } else {
    question.textContent = noMessages[noMessages.length - 1];
    runawayMode = true;
  }
});

const yesRect = yesBtn.getBoundingClientRect();

const moveNoButton = () => {
  let x, y, tries = 0;

  do {
    x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    tries++;
    // Check if NO overlaps YES
  } while (
    x < yesRect.right &&
    x + noBtn.offsetWidth > yesRect.left &&
    y < yesRect.bottom &&
    y + noBtn.offsetHeight > yesRect.top &&
    tries < 100
  );

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

// Desktop hover
noBtn.addEventListener("mouseover", () => {
  if (!runawayMode) return;
  moveNoButton();
});

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  if (!runawayMode) return;
  e.preventDefault();
  moveNoButton();
});


// NO button hover / touch
noBtn.addEventListener("mouseover", () => {
  if (!runawayMode) return;
  moveNoButton();
});

noBtn.addEventListener("touchstart", (e) => {
  if (!runawayMode) return;
  e.preventDefault();
  moveNoButton();
});

// YES button click
yesBtn.addEventListener("click", () => {
  question.textContent = "YES OKAY WE GO TACO BELL NOW!!!!!! I LOVE YOU";
  noBtn.style.display = "none";

  const numberOfHearts = 40;

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    // Random position anywhere on screen
    heart.style.left = Math.random() * (window.innerWidth - 30) + "px";
    heart.style.bottom = "-50px"; // start below screen
    heart.style.fontSize = `${20 + Math.random() * 30}px`;

    heartsContainer.appendChild(heart);

    const riseDistance = 300 + Math.random() * 400; // height to float
    const riseDuration = 2000 + Math.random() * 2000;

    // Optional swaying motion
    const sway = (Math.random() - 0.5) * 100; // -50 to 50 px
    setTimeout(() => {
      heart.style.transition = `transform ${riseDuration}ms ease-out, opacity ${riseDuration}ms linear`;
      heart.style.transform = `translate(${sway}px, -${riseDistance}px)`;
      heart.style.opacity = 0;
    }, 50);

    setTimeout(() => heart.remove(), riseDuration + 100);
  }
});



