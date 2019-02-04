$(function () {

    TweenMax.to('.logo-stroke', 0, {
        drawSVG: "0% 0%"
    });

    TweenMax.to('.expander', 0, {
        scale: 0
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
                    width: '7vh'
                },
                ease: Power4.easeOut
            })
            .staggerFrom('.menu-link', 0.8, {
                y: -100,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.3)
            .staggerFrom('.work-row', 0.8, {
                y: 100,
                opacity: 0,
                ease: Power4.easeOut
            }, 0.3, '-=1')
            .to('.expander', 1, {
                scale: 1,
                ease: Elastic.easeOut
            });

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

        let activeLink = 'about';


        $('.about').click(function () {
            if (activeLink !== 'about') {
                activeLink = 'about';
                $('.about').addClass('link_active');
                $('.work').removeClass('link_active');
            }
        });

        $('.work').click(function () {
            if (activeLink !== 'work') {
                activeLink = 'work';
                $('.work').addClass('link_active');
                $('.about').removeClass('link_active');
            }
        });

        let expanded = false;
        const expander = document.querySelector('.expander');
        const contact = document.querySelector('.contact-form');
        const thankYou = document.querySelector('.thank-you');
        const contactMe = document.querySelector('#contact-me');

        function postToGoogle() {
            var name = $('#name').val();
            var email = $('#email').val();
            var msg = $('#msg').val();

            $.ajax({
                url: "https://docs.google.com/forms/d/147C2SVFRoSkk55Q5qozQfjJEYLizB7oYzdaauLLldSI/formResponse",
           
                data: {
                    'entry.1597425946': name,
                    'entry.24140995': email,
                    'entry.1715298080': msg
                },
                type: "GET",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        showSuccess();
                    },
                    200: function () {
                        showSuccess();
                    }
                }
            });
        }

        function showSuccess() {
            TweenMax.set('.thank-you', {opacity:0});
            thankYou.style.display = 'inline-block';
            TweenMax.to('.lds-facebook', 0.3, {opacity:0});
            TweenMax.to('.thank-you', 0.3, {opacity:1});
        }

        $('#contact-me').submit(function (e) {
            e.preventDefault();
            // TweenMax.to('#contact-me', 0.3, {opacity:0, onComplete:alert('hdf')});
            contactMe.style.display = 'none';
            TweenMax.to('.lds-facebook', 0.3, {opacity:1});
            postToGoogle();
            return false;
        });

        TweenMax.set('.btn-send', {
            opacity: 0
        });
        TweenMax.set('.lds-facebook', {
            opacity: 0
        });

        expander.addEventListener('click', function () {
            if (!expanded) {
                expander.classList.add("expander__expanded");
                contact.style.display = 'block';
                TweenMax.staggerFromTo('.form-element', 0.6, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeOut
                }, 0.1);
                TweenMax.to('.btn-send', 0.1, {
                    opacity: 1,
                    ease: Power4.easeOut,
                    delay: 0.4
                });
            } else {
                expander.classList.remove("expander__expanded");
                contact.style.display = 'none';
                TweenMax.set('.btn-send', {
                    opacity: 0
                });
            }
            expanded = !expanded;
        });
    }
});