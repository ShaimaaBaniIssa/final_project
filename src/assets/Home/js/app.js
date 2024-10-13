"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var r = document.querySelector("body"),
        i = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500;
            return void 0 === e.attributes.style || "none" === e.style.display ? function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500;
                e.style.removeProperty("display");
                var o = window.getComputedStyle(e).display;
                "none" === o && (o = "block"), e.style.display = o;
                var r = e.offsetHeight;
                e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = r + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(function() {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                }, t)
            }(e, t) : function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500;
                e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(function() {
                    e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                }, t)
            }(e, t)
        },
        t = window.matchMedia("(max-width: 991px)"),
        o = document.querySelectorAll(".has-sub > a"),
        n = function(e) {
            e.matches ? o.forEach(function(o) {
                o.addEventListener("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), e.target.classList.toggle("active");
                    var t = o.nextElementSibling;
                    i(t, 500)
                })
            }) : o.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    e.preventDefault()
                })
            })
        };
    t.addEventListener("change", function(e) {
        e.matches ? (window.location.reload(), n(e)) : (t.removeEventListener("change", function(e) {
            n(e)
        }), window.location.reload())
    }), n(t), window.addEventListener("scroll", function() {
        var e = document.querySelector(".navbar-overlay");
        if (e) {
            var t = e.offsetHeight,
                o = window.scrollY;
            setTimeout(function() {
                t < o ? r.classList.add("navbar-sticky-init") : r.classList.remove("navbar-sticky-init")
            }, 100)
        }
    });
    var e = document.querySelector(".feedback-slider-1");
    e && new Swiper(e, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !0,
        navigation: {
            nextEl: ".feedback-1__next",
            prevEl: ".feedback-1__prev"
        }
    });
    var s = document.querySelector(".feedback-slider-2");
    s && new Swiper(s, {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: !0,
        autoplay: !0,
        centerSlides: !0,
        centeredSlidesBounds: !0,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    var a = document.querySelector(".feedback-slider-3");
    a && new Swiper(a, {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: !0,
        autoplay: !0,
        breakpoints: {
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2.5
            }
        }
    })
});
var preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader && (preloader.style.display = "none")
});