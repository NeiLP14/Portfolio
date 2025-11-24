let startTime = Date.now();

let storedSeconds = localStorage.getItem("timeSpent");
let seconds = storedSeconds ? parseInt(storedSeconds) : 0;

let interval = setInterval(updateTime, 1000);

function updateTime() {
    seconds++;
    document.title = `Temps passé : ${seconds}s`;
    localStorage.setItem("timeSpent", seconds);
}


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


/*
const texte = document.getElementById("cp-wiki");

let timer; 

// Quand la souris entre sur le texte
texte.addEventListener("mouseenter", () => {
    timer = setTimeout(() => {
        window.location.href = "https://fr.wikipedia.org/wiki/Cyberpunk_2077", "_blank";
    }, 20770);
});

texte.addEventListener("mouseleave", () => {
    clearTimeout(timer); // annule la redirection
}); */
