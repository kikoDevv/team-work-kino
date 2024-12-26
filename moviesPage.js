document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filterBtn");
    const filterMenu = document.querySelector(".filterMenu");

    // Event listener for filter menu toggle
    filterBtn.addEventListener("click", () => {
        if (filterMenu.classList.value === "filterMenu") {
            filterMenu.classList.remove("filterMenu");
            filterMenu.classList.add("hidden");
            console.log("hidden");
        } else {
            console.log("else");
            filterMenu.classList.remove("hidden");
            filterMenu.classList.add("filterMenu");
        }
    });

    // Codeblock for search bar
    const searchSection = document.querySelector(".searchSection");
    const initialTop = searchSection.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= initialTop + 160) {
            searchSection.style.position = "fixed";
            searchSection.style.top = "30px";
        } else {
            searchSection.style.position = "absolute";
            searchSection.style.top = "45%";
            searchSection.style.minWidth = "40vw";
        }
    });

    // Log the scroll value
    window.addEventListener("scroll", () => {
        console.log("value: " + window.scrollY);
    });
});