document.addEventListener('DOMContentLoaded', () => {
    const searchSection = document.querySelector('.searchSection');
    const initialTop = searchSection.offsetTop;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= initialTop + 160) {
            searchSection.style.position = 'fixed';
            searchSection.style.top = '30px';
        } else {
            searchSection.style.position = 'absolute';
            searchSection.style.top = '45%';
            searchSection.style.minWidth = "40vw";
        }
    });
});

window.addEventListener("scroll", ()=>{
    console.log("value: " + window.scrollY);
});
