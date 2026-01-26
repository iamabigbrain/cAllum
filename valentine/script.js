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

  const numberOfHearts = 30;

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    // Random horizontal position across the window
    const x = Math.random() * (window.innerWidth - 30); // 30px buffer
    heart.style.position = "absolute";
    heart.style.left = x + "px";
    heart.style.bottom = "-50px"; // start slightly below screen
    heart.style.fontSize = `${20 + Math.random() * 30}px`; // random size
    heart.style.opacity = 1;
    heart.style.pointerEvents = "none"; // don't block clicks

    heartsContainer.appendChild(heart);

    // Random animation duration and delay
    const riseDuration = 2000 + Math.random() * 2000; // 2s to 4s
    const riseDistance = 300 + Math.random() * 200; // 300-500px

    setTimeout(() => {
      heart.style.transition = `transform ${riseDuration}ms linear, opacity ${riseDuration}ms linear`;
      heart.style.transform = `translateY(-${riseDistance}px)`;
      heart.style.opacity = 0;
    }, 50);

    // Remove heart after animation
    setTimeout(() => heart.remove(), riseDuration + 100);
  }
});


