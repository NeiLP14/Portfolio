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

// PARTIE PROJETS //

const projectsData = {
    "mc-elec": {
        title: "MC-Elec",
        description: "MC-Elec est un configurateur électrique pour la socété Mauguin Citagri. Il est développé en HTML/CSS et JavaScript. Il suffit de remplir un formulaire avec des propositions, qui représentent des options sur une Tonne à lisier, les choix fait sont reliés à un fichier javascript qui permet de sortir les composants nécessaires pour la tonne ainsi que les schémas électriques nécessaires.",
        images: [
            "assets/images/mcelec_accueil.png",
            "assets/images/mcelec_bb_form.png",
            "assets/images/mcelec_bb_results.png"
        ]
    },
    "mc-3s": {
        title: "MC-3S",
        description: "MC-3S est un site web servant de portail numérique pour la société Mauguin Citagri. Il est développé avec le CMS Drupal, et contient un formulaire de garantie ainsi que le configurateur électrique MC-Elec.",
        images: [
            "assets/images/mc3s_accueil.png",
            "assets/images/mc3s_garantie.png",
            "assets/images/mc3s_profil.png"
        ]
    },
    "covergame": {
        title: "The Cover Game (Bêta)",
        description: "The Cover Game est un petit jeu web developpé en PHP, HTML/CSS et Javascript. Le but du jeu est de trouvé le plus rapidement une affiche de films, séries, animés, jeux vidéo, ect ...",
        images: [
            "assets/images/TCG_accueil.png",
            "assets/images/TCG_game1.png",
            "assets/images/TCG_game2.png"
        ]
    }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImages = document.getElementById("modal-images");
const closePopupBtn = document.querySelector(".close");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const projectId = card.id;
        const project = projectsData[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            modalImages.innerHTML = "";
            project.images.forEach(img => {
                const image = document.createElement("img");
                image.src = img;
                modalImages.appendChild(image);
            });

            modal.classList.add("active");
        }
    });
});

closePopupBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


const viewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const viewerClose = document.querySelector(".viewer-close");
const prevArrow = document.querySelector(".viewer-arrow.left");
const nextArrow = document.querySelector(".viewer-arrow.right");

let currentImages = [];
let currentIndex = 0;

// Ouvre image et récupère toutes les images de la modal active
document.addEventListener("click", function(e) {
    const clickedImg = e.target.closest(".modal-images img");
    if (clickedImg) {

        currentImages = Array.from(
            document.querySelectorAll(".modal-images img")
        );

        currentIndex = currentImages.indexOf(clickedImg);

        viewerImg.src = clickedImg.src;
        viewer.classList.add("active");
    }
});

// Fonction afficher image
function showImage(index) {
    if (index >= 0 && index < currentImages.length) {
        currentIndex = index;
        viewerImg.src = currentImages[currentIndex].src;
    }
}

// Flèche droite
nextArrow.addEventListener("click", () => {
    let newIndex = (currentIndex + 1) % currentImages.length;
    showImage(newIndex);
});

// Flèche gauche
prevArrow.addEventListener("click", () => {
    let newIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage(newIndex);
});

// Navigation clavier
document.addEventListener("keydown", (e) => {
    if (!viewer.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
        nextArrow.click();
    }

    if (e.key === "ArrowLeft") {
        prevArrow.click();
    }

    if (e.key === "Escape") {
        viewer.classList.remove("active");
    }
});

// Fermer
viewerClose.addEventListener("click", () => {
    viewer.classList.remove("active");
});

viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
        viewer.classList.remove("active");
    }
});
