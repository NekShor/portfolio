function display_images() {
    var projects_first_div = document.querySelector('.content .images');
    var projet = getProjet();
    projetimages.forEach((project, index) => {
        if (project.visible) {
            project.images.forEach((img, imgIndex) => {
                var imgElement = document.createElement('img');
                imgElement.src = 'images/' + img;
                imgElement.alt = 'Visuel et ' + projet.name;
                imgElement.title = 'Visuel et ' + projet.name;
                projects_first_div.appendChild(imgElement);
            });
        }
    });
}

function display_title() {
    var projet = getProjet();
    var titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.textContent = projet.name.replace(/-/g, ' ');
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
        var technoData = technos.find(t => t.name === techno);
        if (technoData) {
            var technoDiv = document.createElement('div');
            technoDiv.className = 'technoProjet';
            var imgElement = document.createElement('img');
            imgElement.src = 'images/' + technoData.infos.img;
            imgElement.alt = 'Technologie utilisées';
            imgElement.title = 'Technologie utilisées';
            technoDiv.appendChild(imgElement);
            technosDiv.appendChild(technoDiv);
        }
    });
}

function getProjet() {
    var urlname = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    var projet = projects.find(project => project.name === urlname);
    if (!projet) {
        window.location.href = '/';
    }
    return projet;
}

display_images();
display_title();
display_link();
display_technos();