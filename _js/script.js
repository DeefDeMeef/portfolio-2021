AOS.init();

$("#talk").click(function() {
    $('html, body').animate({
        scrollTop: $("#letsTalk").offset().top
    }, 1000);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#myWork").offset().top
    }, 1000);
});

var textWrapper = document.querySelector('.headline');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.headline .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1100,
    delay: (el, i) => 150*i
});