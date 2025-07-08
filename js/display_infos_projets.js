function display_images() {
    var projects_first_div = document.querySelector('.content .images');
    var project = getProjet();

    project.images.forEach((img, imgIndex) => {
        var imgElement = document.createElement('img');
        imgElement.src = '/public/projets/' + img;
        imgElement.alt = 'Visuel et ' + project.name;
        imgElement.title = 'Visuel et ' + project.name;
        projects_first_div.appendChild(imgElement);
    });
}

function display_title() {
    var projet = getProjet();
    var titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = projet.nom.replace(/-/g, ' ');
    }
}

function display_link() {
    var projet = getProjet();
    var linkElement = document.querySelector('#link');
    if (linkElement) {
        if (projet.lien !== undefined && projet.lien !== '-' && projet.lien !== '') {
            linkElement.href = projet.lien;
            linkElement.style.display = 'block';
        } else {
            linkElement.style.display = 'none';
        }
    }
}

function display_technos() {
    var projet = getProjet();
    var technosDiv = document.querySelector('.technosProjet');
    projet.technos.forEach((techno) => {
        var technoData = technos.find(t => {
            return t.nom.toLowerCase() === techno.toLowerCase();
        });
        if (technoData) {
            var technoDiv = document.createElement('div');
            technoDiv.className = 'technoProjet';
            var imgElement = document.createElement('img');
            imgElement.src = '/public/technos/' + technoData.img;
            imgElement.alt = 'Technologie utilisées';
            imgElement.title = 'Technologie utilisées';
            technoDiv.appendChild(imgElement);
            technosDiv.appendChild(technoDiv);
        }
    });
}

function display_description() {
    var projet = getProjet();
    var descriptionElement = document.querySelector('.description');
    if (descriptionElement) {
        var lang = localStorage.getItem('lang') || 'fr';
        descriptionElement.textContent = projet.description[lang];
    }
}

function getProjet() {
    var urlname = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    var projet = projects.find(project => project.nom.replaceAll(' ', '-') === urlname.replaceAll(' ', '-'));
    console.log(projet);
    if (!projet) {
        window.location.href = '/';
    }
    return projet;
}

display_images();
display_title();
display_link();
display_technos();
display_description();