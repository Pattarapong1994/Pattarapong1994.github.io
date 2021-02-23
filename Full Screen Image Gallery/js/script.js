(function() {

    let el = document.querySelectorAll("li img");
    let target = document.querySelector(".covered");
    let str = document.querySelector(".text");

    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function() {

            str.style.display = "none";

            target.style.background = "url(" + this.getAttribute("src") + ") no-repeat top center"  ;
            target.style.backgroundSize = "cover";
            target.style.height = "100vh";

            console.log(this.getAttribute("src"));
        });
        
    }
})();