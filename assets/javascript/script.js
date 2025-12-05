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



/*
Cette option forme à la gestion des infrastructures réseaux et systèmes.
L’étudiant apprend à installer, configurer et sécuriser serveurs et postes.
Il administre réseaux locaux, VLAN, VPN et services essentiels (web, mail, sauvegarde).
Les outils utilisés incluent Linux, Windows Server, Active Directory et firewalls.
*/

/* 
L’option SLAM est centrée sur le développement d’applications web et logicielles.
Elle enseigne la création d’interfaces, la gestion de bases de données et les bonnes pratiques.
Les technologies étudiées incluent HTML, CSS, JS, PHP, Python et SQL.
L’accent est mis sur l’analyse des besoins, la sécurité et la gestion de projet.
*/

