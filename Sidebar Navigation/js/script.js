$(document).ready(function(){
    var menu = $(".menu");
    var hamburger = $(".hamburger");
    var line = $(".line");
    var menuOpen;

    openMenu = () => {
        menu.css("left", "0px");
        line.css("background", "#333");
        menuOpen = true;
    }
    
    closeMenu = () => {
        menu.css("left", "-320px");
        line.css("backgorund", "#fff");
        menuOpen = false;
    }

    toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    hamburger.on({
        mouseenter: function() {
            openMenu();
        }
    });

    menu.on({
        mouseleave: function() {
            closeMenu();
        }
    });

    hamburger.on({
        click: function(){
            toggleMenu();
        }
    });
});