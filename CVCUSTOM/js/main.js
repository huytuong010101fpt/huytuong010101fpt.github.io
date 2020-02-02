//code for slide text in header
var i = 0;
setInterval(function () {
    if (i == 1) {
        document.getElementById("sp3").className = "hide";
        document.getElementById("sp1").className = "hide";
        document.getElementById("sp2").className = "show";
        i = 2;
    } else if (i == 2) {
        document.getElementById("sp3").className = "hide";
        document.getElementById("sp2").className = "hide";
        document.getElementById("sp1").className = "show";
        i = 0;
    } else {
        document.getElementById("sp1").className = "hide";
        document.getElementById("sp2").className = "hide";
        document.getElementById("sp3").className = "show";
        i = 1;
    }

}, 2000);
//code to active when slide to id
$('#Home').waypoint(function () {
    $("#labelHome").addClass("activeMenu")
    $("#labelAbout").removeClass("activeMenu")
    $("#labelServices").removeClass("activeMenu")
    $("#labelPortfolio").removeClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").removeClass("activeMenu")
}, { offset: -10 });
$('#Home').waypoint(function () {
    $("#labelHome").addClass("activeMenu")
    $("#labelAbout").removeClass("activeMenu")
    $("#labelServices").removeClass("activeMenu")
    $("#labelPortfolio").removeClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").removeClass("activeMenu")
});
$('#level').waypoint(function () {
    $(".percent1").css("width", "80%");
    $(".percent2").css("width", "70%");
    $(".percent3").css("width", "90%");
}, { offset: 700 });
$('#Services').waypoint(function () {
    $("#labelHome").removeClass("activeMenu")
    $("#labelAbout").removeClass("activeMenu")
    $("#labelServices").addClass("activeMenu")
    $("#labelPortfolio").removeClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").removeClass("activeMenu")
}, { offset: 200 });
$('#About').waypoint(function () {
    $("#labelHome").removeClass("activeMenu")
    $("#labelAbout").addClass("activeMenu")
    $("#labelServices").removeClass("activeMenu")
    $("#labelPortfolio").removeClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").removeClass("activeMenu")
}, { offset: 200 });
$('#Portfolio').waypoint(function () {
    $("#labelHome").removeClass("activeMenu")
    $("#labelAbout").removeClass("activeMenu")
    $("#labelServices").removeClass("activeMenu")
    $("#labelPortfolio").addClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").removeClass("activeMenu")
}, { offset: 200 });
$('#Contact').waypoint(function () {
    $("#labelHome").removeClass("activeMenu")
    $("#labelAbout").removeClass("activeMenu")
    $("#labelServices").removeClass("activeMenu")
    $("#labelPortfolio").removeClass("activeMenu")
    $("#labelBlog").removeClass("activeMenu")
    $("#labelContact").addClass("activeMenu")
}, { offset: 200 });
var isNavDown = 0;
//code for menu
isClose = true;
$(".iconMenu").click(() => {
    if (isClose) {
        $(".listMenu").removeClass("d-none")
        $(".listMenu").addClass("menuShow")
        $(".listMenu li").addClass("liWhenShow")
        $(".listMenu").removeClass("hideMenu")
        $(".listMenu").addClass("animeShowMenu")
        isClose = false
    } else {
        $(".listMenu").removeClass("animeShowMenu")
        $(".listMenu").addClass("hideMenu")
        setTimeout(() => {
            $(".listMenu").addClass("d-none")
            $(".listMenu li").removeClass("liWhenShow")
            $(".listMenu").removeClass("menuShow")
        }, 1000)


        isClose = true
    }

})
$(".listMenu").click(() => {
    $(".listMenu").removeClass("animeShowMenu")
    $(".listMenu").addClass("hideMenu")
    $(".listMenu").addClass("d-none")
    $(".listMenu li").removeClass("liWhenShow")
    $(".listMenu").removeClass("menuShow")
    isClose = true
})
//code for nav
document.getElementsByTagName("body")[0].onscroll = function () { EBodyScroll() }
document.getElementsByTagName("body")[0].ontouchmove = function () { EBodyScroll() }
function EBodyScroll() {
    var heightScroll = document.getElementsByTagName("html")[0].scrollTop;
    alert(heightScroll)
    if (heightScroll > 90) {
        $(".fixedMenu").css("background-color", "#222");
        $(".fixedMenu").css("transform", "translateY(0px)");
        $(".fixedMenu").css("position", "fixed");
        $(".fixedMenu").addClass("navDown");
        $(".fixedMenu").removeClass("navUp");
    } else {
        $(".fixedMenu").removeClass("navDown");
        $(".fixedMenu").addClass("navUp");
        $(".fixedMenu").css("background-color", "transparent");
    }
}
//code for icon
$(".btnHome1").mouseover(() => {
    $(".btnHome1 .fillBtn2").addClass("fillBtnAnime")
    $(".btnHome1 .fillBtn").addClass("fillBtnAnime2")
    $(".btnHome1 .fillBtn2").removeClass("emptyBtnAnime")
    $(".btnHome1 .fillBtn").removeClass("emptyBtnAnime")
})
$(".btnHome1").mouseleave(() => {
    $(".btnHome1 .fillBtn2").removeClass("fillBtnAnime")
    $(".btnHome1 .fillBtn").removeClass("fillBtnAnime2")
    $(".btnHome1 .fillBtn2").addClass("emptyBtnAnime")
    $(".btnHome1 .fillBtn").addClass("emptyBtnAnime")
})
$(".btnHome2").mouseover(() => {
    $(".btnHome2 .fillBtn2").addClass("fillBtnAnime")
    $(".btnHome2 .fillBtn").addClass("fillBtnAnime2")
    $(".btnHome2 .fillBtn2").removeClass("emptyBtnAnime")
    $(".btnHome2 .fillBtn").removeClass("emptyBtnAnime")
})
$(".btnHome2").mouseleave(() => {
    $(".btnHome2 .fillBtn2").removeClass("fillBtnAnime")
    $(".btnHome2 .fillBtn").removeClass("fillBtnAnime2")
    $(".btnHome2 .fillBtn2").addClass("emptyBtnAnime")
    $(".btnHome2 .fillBtn").addClass("emptyBtnAnime")
})
$(".webDesin").mouseover(() => {
    $(".webDesin .iconService").addClass("outsideIcon")
    $(".webDesin .iconService i").addClass("insideIcon")
    $(".webDesin .iconService").removeClass("outsideIcon2")
    $(".webDesin .iconService i").removeClass("insideIcon2")
})
$(".webDesin").mouseleave(() => {
    $(".webDesin .iconService").addClass("outsideIcon2")
    $(".webDesin .iconService i").addClass("insideIcon2")
    $(".webDesin .iconService").removeClass("outsideIcon")
    $(".webDesin .iconService i").removeClass("insideIcon")
})

$(".Development").mouseover(() => {
    $(".Development .iconService").addClass("outsideIcon")
    $(".Development .iconService i").addClass("insideIcon")
    $(".Development .iconService").removeClass("outsideIcon2")
    $(".Development .iconService i").removeClass("insideIcon2")
})
$(".Development").mouseleave(() => {
    $(".Development .iconService").addClass("outsideIcon2")
    $(".Development .iconService i").addClass("insideIcon2")
    $(".Development .iconService").removeClass("outsideIcon")
    $(".Development .iconService i").removeClass("insideIcon")
})

$(".Branding").mouseover(() => {
    $(".Branding .iconService").addClass("outsideIcon")
    $(".Branding .iconService i").addClass("insideIcon")
    $(".Branding .iconService").removeClass("outsideIcon2")
    $(".Branding .iconService i").removeClass("insideIcon2")
})
$(".Branding").mouseleave(() => {
    $(".Branding .iconService").addClass("outsideIcon2")
    $(".Branding .iconService i").addClass("insideIcon2")
    $(".Branding .iconService").removeClass("outsideIcon")
    $(".Branding .iconService i").removeClass("insideIcon")
})

$(".Maketing").mouseover(() => {
    $(".Maketing .iconService").addClass("outsideIcon")
    $(".Maketing .iconService i").addClass("insideIcon")
    $(".Maketing .iconService").removeClass("outsideIcon2")
    $(".Maketing .iconService i").removeClass("insideIcon2")
})
$(".Maketing").mouseleave(() => {
    $(".Maketing .iconService").addClass("outsideIcon2")
    $(".Maketing .iconService i").addClass("insideIcon2")
    $(".Maketing .iconService").removeClass("outsideIcon")
    $(".Maketing .iconService i").removeClass("insideIcon")
})
//code for icon on footer
$(".social-icon").mouseover((e) => {
    e.currentTarget.firstElementChild.classList.add("insideIcon")
    e.currentTarget.firstElementChild.classList.remove("insideIcon2")
    e.currentTarget.classList.add("outsideIcon")
    e.currentTarget.classList.remove("outsideIcon2")
})
$(".social-icon").mouseleave((e) => {
    e.currentTarget.firstElementChild.classList.add("insideIcon2")
    e.currentTarget.firstElementChild.classList.remove("insideIcon")
    e.currentTarget.classList.add("outsideIcon2")
    e.currentTarget.classList.remove("outsideIcon")
})
// Code for layout picture
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
});
$grid.packery();
// code for filter picture
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    layoutMode: 'packery'
});
function filterAll() {
    toggleActive();
    $(".selectAll").addClass("active");
    $grid.isotope({ filter: '*' });
    $grid.packery();
    setTimeout(() => {
        $grid.packery('shiftLayout')
    }, 500)
}
function filterBrand() {
    toggleActive();
    $(".selectBrand").addClass("active");
    $grid.isotope({ filter: '.brand' });
}
function filterDesign() {
    toggleActive();
    $(".selectDesign").addClass("active");
    $grid.isotope({ filter: '.design' });
}
function filterGraphic() {
    toggleActive();
    $(".selectGraphic").addClass("active");
    $grid.isotope({ filter: '.graphic' });
}
function toggleActive() {
    $(".selectAll").removeClass("active");
    $(".selectBrand").removeClass("active");
    $(".selectDesign").removeClass("active");
    $(".selectGraphic").removeClass("active");
}

