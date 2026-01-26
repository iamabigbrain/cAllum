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
  noBtn.style.display = "none";

  const numberOfHearts = 30;

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    // Random horizontal position
    heart.style.left = Math.random() * (window.innerWidth - 30) + "px";
    // Start just below the bottom
    heart.style.bottom = "-50px";
    // Random size
    heart.style.fontSize = `${20 + Math.random() * 30}px`;

    heartsContainer.appendChild(heart);

    const riseDistance = 300 + Math.random() * 200; // 300-500px
    const riseDuration = 2000 + Math.random() * 2000; // 2s-4s

    setTimeout(() => {
      heart.style.transition = `transform ${riseDuration}ms linear, opacity ${riseDuration}ms linear`;
      heart.style.transform = `translateY(-${riseDistance}px)`;
      heart.style.opacity = 0;
    }, 50);

    setTimeout(() => heart.remove(), riseDuration + 100);
  }
});



