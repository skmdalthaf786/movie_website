const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270); // Number of items visible at a time
        clickCounter++;

        // Ensure there are enough items to scroll
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            const currentTransform = parseFloat(
                getComputedStyle(movieLists[i]).transform.split(",")[4] || 0
            );
            movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});


// TOGGLE DARK/LIGHT MODE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});
