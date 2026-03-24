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
        description: "Dans le cadre de mon alternance au sein de Mauguin Citagri, j’ai conçu et développé un portail numérique nommé MC-3S, destiné à centraliser plusieurs services internes de l’entreprise. Le site comprend une page d’accueil accessible à tous, présentant l’entreprise ainsi qu’une photographie de la façade des locaux. J’ai veillé à proposer une interface claire et intuitive afin de faciliter la navigation des utilisateurs. Le portail intègre également un module de demande de garantie, accessible uniquement aux membres identifiés externes à l’entreprise (hors service après-vente). Ce formulaire permet de renseigner différentes informations relatives à la tonne à lisier et au client, telles que les caractéristiques du matériel, le nombre d’heures d’utilisation, ainsi qu’une signature numérique. Il est également possible d’y ajouter des pièces jointes si nécessaire. Enfin, une troisième page permet d’accéder au configurateur électrique MC-Elec, que j’ai initialement développé lors de mon stage de première année, puis amélioré au début de mon alternance. Cet outil est exclusivement réservé au personnel du service après-vente et au bureau d’études, et permet de faciliter la configuration électrique des équipements. Ce projet me réconforte dans l’idée de continuer le développement Web, voir en faire un projet professionnel.",
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
    },
    "w2g_leger": {
        title: "Work Together Léger",
        description: "Work Together Léger est un projet de fin d'année de BTS. Il s'agit d'une application web permettant à des clients d'acheter des unités.",
        images: [
            "assets/images/W2GL_accueil.png",
            "assets/images/W2GL_offres.png",
            "assets/images/W2GL_login.png",
            "assets/images/W2GL_commande.png",
            "assets/images/W2GL_profil.png",
            "assets/images/W2GL_baies.png",
            "assets/images/W2GL_config.png",
            "assets/images/W2GL_interventions.png"
        ]
    },
    "w2g_desktop": {
        title: "Work Together Desktop",
        description: "Work Together Desktop est un projet de fin d'année de BTS. Il s'agit d'une application C# qui permet aux staff de l'application d'accèder à différents services.",
        images: [
            "assets/images/W2GD_login.png",
            "assets/images/W2GD_user.png",
            "assets/images/W2GD_modifuser.png",
            "assets/images/W2GD_intervention.png",
            "assets/images/W2GD_baie.png"
        ]
    },
    "portfolio": {
        title: "Portfolio",
        description: "Portfolio est un projet personnel visant à présenter mes compétences et mes réalisations.",
        images: [
            "assets/images/portfolio1.png",
            "assets/images/portfolio2.png",
            "assets/images/portfolio3.png",
            "assets/images/portfolio4.png",
            "assets/images/portfolio5.png"
        ]
    }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImages = document.getElementById("modal-images");
const closeProjectBtn = document.getElementById("close-project");

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

// Fermer avec la croix
closeProjectBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Fermer en cliquant en dehors
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

// PARTIE TABLEAU E5 //
function ouvrirPopup() {
  document.getElementById("popupMdp").style.display = "flex";
}

function fermerPopup() {
  document.getElementById("popupMdp").style.display = "none";
  document.getElementById("erreurMdp").innerText = "";
  document.getElementById("champMdp").value = "";
}

function verifierMotDePasse() {
  var mdp = document.getElementById("champMdp").value;

  if (mdp === VAR_MDP) {
    window.location.href = "tableau_E5.html";
  } else {
    document.getElementById("erreurMdp").innerText = "Mot de passe incorrect";
  }
}

/* INTERETS */
const Interetsmodal = document.getElementById("interestModal");
const InteretsmodalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const InteretscloseBtn = document.querySelector("#interestModal .close");
const interests = document.querySelectorAll(".interest");

const content = {
    linkinpark: {
        title: "🎵 Linkin Park",
        text: "Groupe de rock alternatif formé en 1996, connu pour son mélange de nu metal, rap et électro."
    },
    columbine: {
        title: "🎵 Columbine",
        text: "Groupe de rap français mêlant introspection, esthétique sombre et univers visuel fort."
    },
    mademoiselle: {
        title: "🎬 Mademoiselle",
        text: "Film sud-coréen réalisé par Park Chan-wook, connu pour son esthétique et sa narration complexe."
    },
    arcane: {
        title: "🎬 Arcane",
        text: "Série animée inspirée de l’univers de League of Legends, reconnue pour sa qualité visuelle exceptionnelle."
    },
    cyberpunk: {
        title: "🎮 Cyberpunk 2077",
        text: "RPG futuriste en monde ouvert développé par CD Projekt Red, avec un univers cyberpunk immersif."
    },
    tlou2: {
        title: "🎮 The Last of Us Part II",
        text: "Jeu narratif intense explorant la vengeance, la morale et la survie dans un monde post-apocalyptique."
    }
};

interests.forEach(item => {
    item.addEventListener("click", () => {
        const key = item.getAttribute("data-interest");
        InteretsmodalTitle.textContent = content[key].title;
        modalText.textContent = content[key].text;
        Interetsmodal.style.display = "flex";
    });
});

VAR_MDP = "Achang€r2026";
InteretscloseBtn.onclick = () => Interetsmodal.style.display = "none";

window.onclick = (e) => {
    if (e.target === Interetsmodal) {
        Interetsmodal.style.display = "none";
    }
};