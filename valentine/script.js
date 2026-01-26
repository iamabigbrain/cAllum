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

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});
