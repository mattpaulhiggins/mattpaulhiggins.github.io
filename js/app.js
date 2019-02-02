$(function () {

    // setTimeout(() => {
    //     $('body').css('background-color', '#022648');
    //     $('.logo-stroke').css('stroke', '#F5907C');
    // }, 2000);




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
        .to('.logo-p', 0.2, {
            drawSVG: "0% 100%",
            ease: myEase
        }, '-=0.6')
        .to('.logo-h', 0.2, {
            drawSVG: "0% 100%",
            ease: myEase
        }, '-=0.4')
        .to('.logo-base', 1, {
            drawSVG: "0% 100%",
            ease: myEase
        }, '-=0.2');

    function ending() {
        $('body').css('background-color', '#022648');
        $('.logo-stroke').css('stroke', '#F5907C');

        let tl2 = new TimelineMax({

        });

        tl2.to('.center_logo', 0.6, {
                css: {
                    width: '10vh'
                },
                ease: Power4.easeOut
            })
            .to('.center_lower', 0.6, {
                css: {
                    height: '60vh'
                },
                ease: Power4.easeOut
            }, 0)
            .staggerFrom('.menu-link', 0.8, {
                y: -100,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.3)
            .staggerFrom('.center_lower_item', 0.8, {
                y: 100,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.3, '-=1');

        var options = {
            strings: ["Hi, I'm Matthew.", "I'm a web designer and developer.", "Learn more about me by clicking below.", "Message me using the button above."],
            startDelay: 1000,
            backDelay: 1000,
            backSpeed: 20,
            typeSpeed: 40,
            loop: true,
            loopCount: Infinity,
            cursorChar: '|',
        }

        var typed = new Typed(".typer", options);


        let expanded = false;
        const expander = document.querySelector('.expander');

        expander.addEventListener('click', function () {
            if (!expanded) {
                expander.classList.add("expander__expanded");
            } else {
                expander.classList.remove("expander__expanded");
            }
            expanded = !expanded;
        });
    }
});