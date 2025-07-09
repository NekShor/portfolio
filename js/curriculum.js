window.addEventListener('load', () => {
    var curriculumDiv = document.querySelectorAll('.curriculumDiv');
    var urlParams = new URLSearchParams(window.location.search).get('cv');

    if (urlParams === 'true') {
        curriculumDiv.forEach((element) => {
            element.style.display = 'block';
        });
    } else {
        curriculumDiv.forEach((element) => {
            element.style.display = 'none';
        });
    }
});