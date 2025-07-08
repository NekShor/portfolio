function getParamsUrl() {
    const params = new URLSearchParams(window.location.search);
    const paramsObj = {};
    for (const [key, value] of params.entries()) {
        paramsObj[key] = value;
    }
    return paramsObj;
}

// when load
window.addEventListener('load', () => {
    var curriculumDiv = document.querySelectorAll('.curriculumDiv');
    var params = getParamsUrl();
    if (params.curriculum === 'true') {
        curriculumDiv.forEach((element) => {
            element.style.display = 'block';
        });
    } else {
        curriculumDiv.forEach((element) => {
            element.style.display = 'none';
        });
    }
});