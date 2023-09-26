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