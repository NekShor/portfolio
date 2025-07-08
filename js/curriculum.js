window.addEventListener('load', () => {
    var curriculumDiv = document.querySelectorAll('.curriculumDiv');
    var urlParams = window.location.href.split('/')[window.location.href.split('/').length - 1];

    if (urlParams === 'cv') {
        curriculumDiv.forEach((element) => {
            element.style.display = 'block';
        });
    } else {
        curriculumDiv.forEach((element) => {
            element.style.display = 'none';
        });
    }
});