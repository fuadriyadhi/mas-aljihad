const text = "MAS AL-JIHAD";
const typingSpeed = 100; // Kecepatan pengetikan (ms)

const typingTextElement = document.getElementById("typing-text");

function type() {
  let i = 0;
  const typeInterval = setInterval(function () {
    typingTextElement.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(typeInterval);
    }
  }, typingSpeed);
}

// Memulai animasi
type();

const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar_menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// masAljihad-06
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#galeri-container .col-md-4");
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");

  function showInitialCards() {
    cards.forEach((card, index) => {
      card.style.display = index > 5 ? "none" : "block";
    });
    showMoreBtn.classList.remove("d-none");
    showLessBtn.classList.add("d-none");
  }

  showInitialCards(); // tampilkan hanya 6 pertama saat awal

  showMoreBtn.addEventListener("click", function () {
    cards.forEach(card => {
      card.style.display = "block";
    });
    showMoreBtn.classList.add("d-none");
    showLessBtn.classList.remove("d-none");
  });

  showLessBtn.addEventListener("click", function () {
    showInitialCards();
  });
});