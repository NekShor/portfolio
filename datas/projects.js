var projects = [
    {
        images : [
            "ecoquiz/ecoquiz1.png",
            "ecoquiz/ecoquizz2.webp",
            "ecoquiz/ecoquizz-3.PNG",
            "ecoquiz/ecoquizz-4.png",
        ],
        visible : true,
    },
    {
        images : [
            'aubox/aubox-1.png',
            'aubox/aubox-2.png',
            'aubox/aubox-3.png',
            'aubox/aubox-4.png',
            'aubox/aubox-5.png',
            'aubox/aubox-6.png'
        ],
        visible : true,
    },
    {
        images : [
            'bde-cesi-caen/bde-caen-1.png',
            'bde-cesi-caen/bde-caen-2.png',
            'bde-cesi-caen/bde-caen-3.png'
        ],
        visible : true,
    }
];


var number_first = [0, 2]
var projects_first = [];
number_first.forEach((number, index) => {
    projects_first.push(projects[number]);
    projects[number].visible = false;
})

