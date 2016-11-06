$(function() {
    
    function setMenuIcon() {
        var windowWidth = $(window).width();
        var menuIcon = $("#menu-icon");
        var menuButton = $(".nav-button");
        
        if (windowWidth < 600) {
            menuIcon.css("display", "block");
            menuButton.css("display", "none");

        } else {
            menuIcon.css("display", "none");
            menuButton.css("display", "inline-block");
        }
    }
    
    function setNavLocation() {
        var windowWidth = $(window).width();
        
        if (windowWidth < 400) {
            $("header").after($("nav"));
        } else {
            $("#main-heading-block").after($("nav"));
        }
    }
    
    $(window).scroll(function() {
        var windowWidth = $(window).width();
        
        if ($(window).scrollTop() > 100 && windowWidth >= 600) {
            
            if (!$("nav").hasClass("fixed-nav-style")) {
                $("header").after($("nav"));
                $("nav").addClass("fixed-nav-style");
                $("#nav-block").attr("id", "fixed-nav-block-style");
                $("nav").animate({top: 50}, 300);
            }
            
        } else {
            $("nav").removeClass("fixed-nav-style");
            $("#fixed-nav-block-style").attr("id", "nav-block");
            $("nav").css("top", "0");
            $("#main-heading-block").after($("nav"));
        }
    });
    
    setMenuIcon();
    setNavLocation();
    
    $(window).resize(function() {
        setTimeout(function() {
            setMenuIcon();
            setNavLocation();
        }, 250);
    });
    
    $("#menu-icon").on("click", function() {
        $("#mobile-menu-wrap").animate({right: 200}, 300);
        $("#menu-icon").css("display", "none");
    });
    
    $("#back-button-block").on("click", function() {
        $("#mobile-menu-wrap").animate({right: -200}, 300);
        $("#menu-icon").css("display", "block");
    });
    
    $("#nav-block li a").on("click", function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top
        }, 500);
    });
});