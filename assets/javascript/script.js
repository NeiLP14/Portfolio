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

