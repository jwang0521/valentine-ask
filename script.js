// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const gift = document.getElementById("gift");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const giftText = document.getElementById("final-text-gift");
const foodImg = document.getElementById("food");

// Click Envelope

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
  const min = 200;
  const max = 200;

  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";

  catImg.src = "/assets/cat_dance.gif";

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";

  finalText.style.display = "block";

  document.getElementById("gift").style.display = "block";
});

// Click gift
const giftContainer = document.querySelector(".gift-container");

gift.addEventListener("click", () => {
  // hide the single gift and final text
  gift.style.display = "none";
  finalText.style.display = "none";

  giftText.style.display = "block";
  catImg.src = "/assets/cat_love.gif";

  giftContainer.style.display = "flex";

  title.textContent = "Here are some special gifts for you!";
});

const loveLetter = document.getElementById("letter");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// When love letter is clicked
loveLetter.addEventListener("click", () => {
  modal.style.display = "flex";
  modalImg.src = "assets/letter_content.JPG";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
