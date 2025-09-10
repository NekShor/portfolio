function display_projects() {
    var projects_first_div = document.querySelector('.projets-g');
    projects_first.forEach((project, index) => {
        var project_div = document.createElement('div');
        project_div.className = 'proj-g proj';
        project_div.style.backgroundImage = `url('/public/projets/${project.images[0]}')`;
        var nom = (project.nom.substr(0, 1).toUpperCase() + project.nom.substr(1).toLowerCase()) || '';
        project_div.innerHTML = `<a title="Projet ${nom}" href="/projet?projet=${project.nom.replaceAll(' ', '-')}"><div><h3>${nom}</h3></div></a>`;
        projects_first_div.appendChild(project_div);
    });
    var projects_div = document.querySelector('.projets-p');
    project = project_use.sort((a, b) => a.order - b.order);
    project_use.forEach((project, index) => {
        if (!project.visible) return; 
        var project_div = document.createElement('div');
        project_div.className = 'proj-p proj';
        project_div.style.backgroundImage = `url('/public/projets/${project.images[0]}')`;
        var nom = (project.nom.substr(0, 1).toUpperCase() + project.nom.substr(1).toLowerCase()) || '';
        project_div.innerHTML = `<a title="Projet ${nom}" href="/projet?projet=${project.nom.replaceAll(' ', '-')}"><div><h3>${nom}</h3></div></a>`;
        projects_div.appendChild(project_div);
    });
}

function display_technos() {
    var technos_div = document.querySelector('#competences .liste');
    technos.forEach((techno, index) => {
        var techno_div = document.createElement('div');
        techno_div.className = 'tech';
        techno_div.innerHTML = `
            <div class="img">
                <img src="/public/technos/${techno.img}" title="logo de la technologie ${techno.nom}" alt="logo de la technologie ${techno.nom}">
            </div>
            <p>${techno.nom}</p>
            <div class="stars">
                ${'<i class="material-icons stars-icon" style="color: #d1cb0c;">star</i>'.repeat(techno.etoiles)}
            </div>
        `;
        technos_div.appendChild(techno_div);
    });
}

function display_date(){
    var date = new Date();
    var year = date.getFullYear();
    var footer = document.querySelector('.copyright .date');
    footer.textContent = year;
}

display_date();
display_technos();
// display_projects();