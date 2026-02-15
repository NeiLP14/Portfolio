// CHRONO POUR LE TITLE //
let startTime = Date.now();

let storedSeconds = localStorage.getItem("timeSpent");
let seconds = storedSeconds ? parseInt(storedSeconds) : 0;

let interval = setInterval(updateTime, 1000);

function updateTime() {
    seconds++;
    document.title = `Temps passé : ${seconds}s`;
    localStorage.setItem("timeSpent", seconds);
}

// MENU BURGER //
const menuBtn = document.querySelector('.menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
});


// POUR LES POP-UPS DES CARTES BTS //
// Ouvrir pop-up
document.querySelectorAll(".bts-button").forEach(btn => {
    btn.addEventListener("click", () => {
        const popupName = btn.getAttribute("data-popup");
        document.getElementById("popup-" + popupName).classList.add("active");
    });
});

// Fermer pop-up
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".popup").classList.remove("active");
    });
});

// Fermer en cliquant autour
document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.classList.remove("active");
    });
});


const projectCards = document.querySelectorAll(".project-card");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".popup .close-btn");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const popupId = card.getAttribute("data-popup");
        document.getElementById(popupId).classList.add("active");
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".popup").classList.remove("active");
    });
});

popups.forEach(popup => {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});

document.querySelectorAll(".carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    if (!track) return;

    const slides = Array.from(track.children);
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    if (!slides.length || !nextBtn || !prevBtn) return;

    let currentIndex = 0;

    function updateSlide() {
        const width = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

    window.addEventListener("resize", updateSlide);

});
