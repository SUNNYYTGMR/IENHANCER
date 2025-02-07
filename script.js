document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector(".glow");

    setInterval(() => {
        const colors = ["#ffcc00", "#1e88e5", "#ff007f", "#00ffcc"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        heading.style.textShadow = `0px 0px 15px ${randomColor}, 0px 0px 30px ${randomColor}`;
    }, 1500);
});
