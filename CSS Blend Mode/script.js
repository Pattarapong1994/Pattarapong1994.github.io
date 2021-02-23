var form = document.querySelector("form");
var background = document.querySelector(".page-warp");
var updateBlendMode = () => {
    var selection = document.querySelector(".jsColor").value;
    background.style.backgroundBlendMode = selection;

};

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

form.addEventListener("change", () => {
    updateBlendMode();
});

updateBlendMode();