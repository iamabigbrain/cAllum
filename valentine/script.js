const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.getElementById("hearts-container");

const noMessages = [
  "Are you sure? 😐",
  "Are you REALLY sure? 🥺",
  "Think again 😭",
  "Last chance… 💔"
];

let noCount = 0;
let runawayMode = false;

noBtn.addEventListener("click", () => {
  if (noCount < noMessages.length - 1) {
    question.textContent = noMessages[noCount];
    noCount++;
  } else {
    question.textContent = noMessages[noMessages.length - 1];
    runawayMode = true;
  }
});

noBtn.addEventListener("mouseover", () => {
  if (!runawayMode) return;

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  question.textContent = "YAYYYYY 💖💍";

  // hide the No button
  noBtn.style.display = "none";

  const numberOfHearts = 20;

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    // Random horizontal position
    const x = Math.random() * window.innerWidth;

    heart.style.position = "absolute";
    heart.style.left = x + "px";
    heart.style.bottom = "0px"; // start at bottom
    heart.style.fontSize = `${20 + Math.random() * 20}px`; // random size
    heart.style.transition = `transform 2s linear, opacity 2s linear`;

    heartsContainer.appendChild(heart);

    // Make it rise up after a short delay
    setTimeout(() => {
      const riseDistance = 200 + Math.random() * 200; // random rise distance
      heart.style.transform = `translateY(-${riseDistance}px)`;
      heart.style.opacity = 0;
    }, 50);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 2100);
  }
});

