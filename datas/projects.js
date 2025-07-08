var projects = [
    {
        nom : 'CoronaRun',
        images : [
            'coronarun/coronarun-1.png',
            'coronarun/coronarun-2.png',
            'coronarun/coronarun-3.png',
            'coronarun/coronarun-4.png'
        ],
        technos: [
            'unity',
            'csharp'
        ],
        description : 'CoronaRun est un projet fait au Cesi qui consiste en un jeu vidéo ou le professeur Didier Raoult se bat contre le covid.',
        visible : true,
        order: 7
    },
    {
        nom : 'Expandable',
        images : [
            'expandable/expandable-1.png',
            'expandable/expandable-2.png',
            'expandable/expandable-3.png',
            'expandable/expandable-4.png'
        ],
        technos: [
            'html',
            'css',
            'js',
            'php',
            'symfony',
            'SQL',
            'apache'
        ],
        description : 'Expandable était le site du BDE du Cesi de Rouen. Il permettait aux étudiants de consulter les événements à venir, de s\'inscrire et de payer en ligne. Le site a été réalisé en HTML, CSS, JavaScript, PHP avec le framework Symfony et une base de données SQL.',
        visible : false,
        order: 5
    },
    {
        nom : 'Game of Life by Conway',
        images : [
            'game-of-life/game-of-life-1.png',
            'game-of-life/game-of-life-2.png',
            'game-of-life/game-of-life-3.png'
        ],
        technos: [
            'html',
            'css',
            'js'
        ],
        description : 'Le jeu de la vie de Conway est un automate cellulaire inventé par John Horton Conway en 1970. Il s\'agit d\'un modèle mathématique qui simule l\'évolution d\'une population de cellules sur une grille en fonction de règles simples. Je l\'ai réalisé en HTML, CSS et JavaScript pour démontrer son fonctionnement.',
        visible : true,
        order: 2
    },
    {
        nom : 'Ancien Portfolio',
        images : [
            'old-portfolio/old-portfolio-1.png',
            'old-portfolio/old-portfolio-2.png',
            'old-portfolio/old-portfolio-3.png',
            'old-portfolio/old-portfolio-4.png',
            'old-portfolio/old-portfolio-5.png',
            'old-portfolio/old-portfolio-6.png'
        ],
        technos: [
            'html',
            'css',
            'js',
        ],
        description : 'Mon ancien portfolio, réalisé en HTML, CSS et JavaScript. Il présente mes compétences, mes projets et mes expériences professionnelles. Bien que ce ne soit pas le plus récent, il reste un témoignage de mon parcours et de mon évolution en tant que développeur web.',
        visible : true,
        order: 8
    },
    {
        nom : 'Portail Valgo',
        images : [
            'portail-valgo/portail-valgo-1.png',
            'portail-valgo/portail-valgo-2.png',
            'portail-valgo/portail-valgo-3.png'
        ],
        technos: [
            'html',
            'css',
            'js',
            'php',
            'SQL',
            'docker'
        ],
        description : 'Valgo étant une entreprise de 600 employés, cet entreprise a eu le besoin d\'un portail pour les employés. Le portail permet aux employés de se connecter, de consulter leurs informations personnelles et de consulter les actualités de l\'entreprise.',
        visible : true,
        order: 4
    },
    {
        nom : 'ecoquiz',
        images : [
            "ecoquiz/ecoquiz-1.png",
            "ecoquiz/ecoquiz-2.png",
            "ecoquiz/ecoquiz-3.png",
            "ecoquiz/ecoquiz-4.png",
        ],
        technos: [
            'html',
            'css',
            'js',
            'php',
            'codeigniter'
        ],
        visible : true,
        description : 'EcoQuiz est un jeu éducatif en ligne visant à sensibiliser les utilisateurs aux enjeux environnementaux. Il propose des quiz interactifs sur divers sujets écologiques, permettant aux joueurs de tester et d\'améliorer leurs connaissances tout en s\'amusant.',
        order: 6
    },
    {
        nom : 'Aubox du Florival',
        images : [
            'aubox/aubox-1.png',
            'aubox/aubox-2.png',
            'aubox/aubox-3.png',
            'aubox/aubox-4.png',
            'aubox/aubox-5.png',
            'aubox/aubox-6.png'
        ],
        technos: [
            'html',
            'css',
            'js',
            'php',
        ],
        description : 'Aubox du florival une entreprise qui fait de la location de box et d\'éspace de co-working. Le site permet de présenter les différents espaces disponibles, de consulter les tarifs et de réserver en ligne et de prendre contact avec l\'entreprise.',
        visible : true,
        order: 1
    },
    {
        nom : 'Bde Cesi Caen',
        images : [
            'bde-cesi-caen/bde-caen-1.png',
            'bde-cesi-caen/bde-caen-2.png',
            'bde-cesi-caen/bde-caen-3.png'
        ],
        technos: [
            'react',
            'next',
            'strapi'
        ],
        description : 'Le site du BDE Cesi Caen est un site de présentation du bureau des élèves du Cesi de Caen. Il permet de présenter les membres du BDE, les événements à venir et de contacter le BDE.',
        visible : true,
        order: 3
    }
];

var number_first = [0, 2]
var projects_first = [];
var project_use = projects.slice(0);
number_first.forEach((number, index) => {
    projects_first.push(project_use[number]);
    project_use[number].visible = false;
})