document.addEventListener('DOMContentLoaded', () => {
    const searchSection = document.querySelector('.searchSection');
    const initialTop = searchSection.offsetTop;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= initialTop + 150) {
            searchSection.style.position = 'fixed';
            searchSection.style.top = '50px';
            searchSection.style.minWidth = "200px";
        } else {
            searchSection.style.position = 'absolute';
            searchSection.style.top = '30%';
            searchSection.style.minWidth = "40vw";
        }
    });
});