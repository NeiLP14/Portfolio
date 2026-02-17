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
        description: "",
        images: [
            "assets/images/mcelec_accueil.png",
            "assets/images/mcelec_bb_form.png",
            "assets/images/mcelec_bb_results.png"
        ]
    },
    "mc-3s": {
        title: "MC-3S",
        description: "",
        images: [
            "assets/images/mc3s_logo.png",
            "assets/images/mc3s_accueil.png",
            "assets/images/mc3s_garantie.png",
            "assets/images/mc3s_profil.png"
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

// Ouvre l'image en plein écran
document.addEventListener("click", function(e) {
    if (e.target.closest(".modal-images img")) {
        viewerImg.src = e.target.src;
        viewer.classList.add("active");
    }
});

// Fermer en cliquant sur X
viewerClose.addEventListener("click", () => {
    viewer.classList.remove("active");
});

// Fermer en cliquant en dehors de l'image
viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
        viewer.classList.remove("active");
    }
});
