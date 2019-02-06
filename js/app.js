$(function () {

    $('[data-toggle="tooltip"]').tooltip();

    //INIT
    $('.work-content').hide();
    TweenMax.set('.about-text', {
        opacity: 0,
        y: 50
    });
    TweenMax.set('.icon', {
        opacity: 0,
        y: 50
    });
    TweenMax.set('.menu-link', {
        opacity: 0,
        y: 50
    });
    TweenMax.set('.work-content', {
        opacity: 0,
        y: 50
    });

    TweenMax.to('.logo-stroke', 0, {
        drawSVG: "0% 0%"
    });

    TweenMax.to('.expander', 0, {
        scale: 0
    });

    let tl = new TimelineMax({
        delay: 0.5,
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

        let tl2 = new TimelineMax({});

        tl2.to('.center_logo', 0.4, {
                css: {
                    width: '7vh'
                },
                ease: Power4.easeOut
            })
            .to('.center', 0.6, {
                css: {
                    top: '10vh'
                },
                ease: Elastic.easeInOut.config(1, 0.75)
            }, "-=0.4")
            .from('.typer-row', 0.6, {
                y: 100,
                opacity: 0,
                ease: Power4.easeOut
            })
            .staggerTo('.menu-link', 0.6, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
            }, 0.2)
            .to('.about-text', 0.6, {
                y: 100,
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
            }, '-=0.4')
            .staggerTo('.icon', 0.6, {
                y: 0,
                opacity: 1,
                ease: Power4.easeOut
            }, 0.2, '-=0.4')
            .to('.expander', 1, {
                scale: 1,
                ease: Elastic.easeOut
            }, '-=0.4');

        var options = {
            strings: ["Hi, I'm Matthew.", "I'm a web designer/developer.", "Learn more about me below,", "or message me using the <i>plus</i> button."],
            startDelay: 2500,
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

                TweenMax.to('.work-content', 0.4, {
                    y: 50,
                    opacity: 0,
                    ease: Power4.easeOut,
                    onComplete: showAbout
                });

                function showAbout() {
                    $('.work-content').hide();
                    $('.about-content').show();
                    TweenMax.to('.about-content', 0.4, {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut,
                    });
                }
            }
        });

        $('.work').click(function () {
            if (activeLink !== 'work') {
                activeLink = 'work';
                $('.work').addClass('link_active');
                $('.about').removeClass('link_active');

                TweenMax.to('.about-content', 0.4, {
                    y: 50,
                    opacity: 0,
                    ease: Power4.easeOut,
                    onComplete: showWork
                });

                function showWork() {
                    $('.about-content').hide();
                    $('.work-content').show();
                    TweenMax.to('.work-content', 0.4, {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut,
                    });
                }
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
            TweenMax.set('.thank-you', {
                opacity: 0
            });
            thankYou.style.display = 'inline-block';
            TweenMax.to('.lds-facebook', 0.3, {
                opacity: 0
            });
            TweenMax.to('.thank-you', 0.3, {
                opacity: 1
            });
        }

        $('#contact-me').submit(function (e) {
            e.preventDefault();
            // TweenMax.to('#contact-me', 0.3, {opacity:0, onComplete:alert('hdf')});
            contactMe.style.display = 'none';
            TweenMax.to('.lds-facebook', 0.3, {
                opacity: 1
            });
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