$(function () {

    // setTimeout(() => {
    //     $('body').css('background-color', '#022648');
    //     $('.logo-stroke').css('stroke', '#F5907C');
    // }, 2000);


    var options = {
        strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
        typeSpeed: 60,

    }

    var typed = new Typed(".typer", options);

    TweenMax.to('.logo-stroke', 0, {
        drawSVG: "0% 0%"
    });

    let tl = new TimelineMax({
        onComplete: ending
    });

    let myEase = Power4.easeOut;

    tl.to('.logo-m', 1.5, {
            drawSVG: "0% 100%",
            ease: myEase
        })
        .to('.logo-p', 0.3, {
            drawSVG: "0% 100%",
            ease: myEase
        }, '-=0.5')
        .to('.logo-h', 0.3, {
            drawSVG: "0% 100%",
            ease: myEase
        })
        .to('.logo-base', 1, {
            drawSVG: "0% 100%",
            ease: myEase
        })

    function ending() {
        $('body').css('background-color', '#022648');
        $('.logo-stroke').css('stroke', '#F5907C');

        TweenMax.to('.logo', 1, {
           scale: 0.6,
           y: -30,
           ease: Power4.easeOut
        });
    }





    // tl.from('.logo_m', 1, {drawSVG: "0% 0%", ease:Power4.easeOut});
    // tl.add(TweenMax.staggerTo('.logo-stroke', 2, {
    //     drawSVG: "0 100%",
    //     ease: Expo.easeOut
    // }, 1))

});