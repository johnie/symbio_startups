function sections() {
    if (!Modernizr.touch) {
        $(".sections").css({
            "height" : $(window).height() + "px"
        });
    }
}

sections();

$(window).resize(function(){
    sections();    
});

function setDataHover() {
    $(".main-menu a").each(function() {
        $(this).attr("data-hover", $(this).text());
    });
}

setDataHover();

function autoFocus() {
    var section = $(".contact-section"),
        target = section.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= target) {
            section.find(".js-first-focus").focus();
            $(".pin").addClass("bounce");
        } else {
            section.find(".js-first-focus").blur();
        }
    });
}

// autoFocus(); 
// Remove?

function whereWeAt() {
    var map;
    // 59.330211,18.055214
    map = new GMaps({
        el: "#map",
        lat: 59.330211,
        lng: 18.055214,
        zoom: 16,
        zoomControl: false,
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false,
        draggable: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    });
    map.drawOverlay({
        lat: 59.330211,
        lng: 18.055214,
        content: "<div class='pin-wrap'><div class='pin'></div><div class='pulse'></div></div>"
    });
}

whereWeAt();

function startAProject() {

    var projectBtn      = $("#startAProject"),
        projectWrap     = $(".start-a-project"),
        scrollTarget    = $(".contact-section");
        
    projectBtn.click(function(e) {

        $(this).text(function(i, text){
          return text === "Start a project" ? "Close" : "Start a project";
        })

        e.preventDefault();

        projectWrap.find("input[type='text']").first().focus();
    
        $('html, body').animate({
            scrollTop: scrollTarget.offset().top
        }, 250);
    
        if (projectWrap.hasClass('active')) {
            projectWrap.removeClass("active");
        } else {
            projectWrap.addClass("active");
        }
    
    });

}

startAProject();

// Various functions and features
$(function(){
    $(".first-nav").find("li:first a").addClass("js-current");

    if (Modernizr.touch) {
        $(".main-section").addClass("js-bg-scroll");
    }

    $("#jump-next").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 250);
    });
});
