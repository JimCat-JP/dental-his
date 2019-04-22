// NAVIGATION SHOW/HIDE

$("nav ul").hide();

$(".nav-toggle").click(function () {
    $("nav ul").slideToggle("medium");
});

$("nav ul li a, .brand a").click(function () {
    $("nav ul").hide();
});

// SMOOTH SCROLLING WITH NAV HEIGHT OFFSET

$(function () {
    var navHeight = $("nav").outerHeight();
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - navHeight
                }, 1000);
                return false;
            }
        }
    });
});

// NAVIGATION STICKY

var viewHeight = $(window).height();
var navigation = $('nav');

$(window).scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        if ($(window).scrollTop() > 520) {
            navigation.addClass('sticky');
        } else if($(window).scrollTop() < 450) {
            navigation.removeClass('sticky');
        }
    }
    else {
        if ($(window).scrollTop() > (viewHeight + 25)) {
            navigation.addClass('sticky');
        } else {
            navigation.removeClass('sticky');
        }
    }
});

// MAKE THE SPLASH CONTAINER VERTICALLY CENTERED

function centerSplash() {
    var navHeight = $("nav").outerHeight();
    var splashHeight = $(".splash .container").height();
    var remainingHeight = $(window).height() - splashHeight - navHeight;
    $(".splash .container").css({
        "padding-top": remainingHeight / 2,
        "padding-bottom": remainingHeight / 2
    });
}

$(document).ready(function () {
    centerSplash();
});

$(window).resize(function () {
    centerSplash();
});

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass(animationName);

            if (typeof callback === 'function') callback();
        });
        return this;
    },
});
$(document).ready(function () {
    $('.splash div.title a.button').animateCss('fadeIn', function () {
        $('.splash div.title a.button').css({
            'animation-iteration-count': 2
        }).addClass('tada')
    });
});





