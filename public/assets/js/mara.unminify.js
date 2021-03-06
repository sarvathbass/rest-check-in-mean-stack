function ol() {
    $("div[data-on-load]").each(function() {
        $(this).load($(this).attr("data-template"))
    })
}

function root() {
    var a = window.location,
        b = a.pathname + a.hash;
    console.log(b);
    var c, d, e, f, g, h, i = "undefined" != typeof ThemeSettings && "no" == ThemeSettings.getCookie("first-visit");
    c = $('aside a[href="' + b + '"]'), i && c.length > 0 && (d = c.parent(), e = d.parent(), f = e.parent(), g = f.siblings(), h = f.parent(), c.addClass("active"), d.addClass("active"), f.length > 0 && "aside" != f[0].localName && (f.attr("visit", c.attr("href")), f.css("display", "block")), g.length > 0 && "header" != g[0].localName && (g.addClass("active"), g.attr("visit", c.attr("href"))), h.length > 0 && "div" != h[0].localName && (h.addClass("active"), h.attr("visit", c.attr("href")))), c = $('nav.horizontal-nav a[href="' + b + '"]'), i && c.length > 0 && (c.closest("ul.dropdown-content").length > 0 && c.closest("ul.dropdown-content").parent("li").addClass("active"), c.parent("li").addClass("active")), "undefined" != typeof ThemeSettings ? ThemeSettings.setCookie("first-visit", "no") : null
}

function sparkBar(a, b, c, d, e, f) {
    $(a).sparkline(b, {
        type: "bar",
        height: c,
        barWidth: d,
        barColor: e,
        barSpacing: f
    })
}

function sparkLine(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    $(a).sparkline(b, {
        type: "line",
        width: c,
        height: d,
        lineColor: e,
        fillColor: f,
        lineWidth: g,
        maxSpotColor: h,
        minSpotColor: i,
        spotColor: j,
        spotRadius: k,
        highlightSpotColor: l,
        highlightLineColor: m
    })
}! function(a) {
    var b = {
        init: function(b) {
            var c = {
                time_constant: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                full_width: !1
            };
            return b = a.extend(c, b), this.each(function() {
                function c() {
                    "undefined" != typeof window.ontouchstart && (F[0].addEventListener("touchstart", k), F[0].addEventListener("touchmove", l), F[0].addEventListener("touchend", m)), F[0].addEventListener("mousedown", k), F[0].addEventListener("mousemove", l), F[0].addEventListener("mouseup", m), F[0].addEventListener("click", j)
                }

                function d(a) {
                    return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX
                }

                function e(a) {
                    return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY
                }

                function f(a) {
                    return a >= s ? a % s : a < 0 ? f(s + a % s) : a
                }

                function g(c) {
                    var d, e, g, h, i, j, k;
                    for (o = "number" == typeof c ? c : o, p = Math.floor((o + r / 2) / r), g = o - p * r, h = g < 0 ? 1 : -1, i = -h * g * 2 / r, b.full_width ? k = "translateX(0)" : (k = "translateX(" + (F[0].clientWidth - item_width) / 2 + "px) ", k += "translateY(" + (F[0].clientHeight - item_width) / 2 + "px)"), j = n[f(p)], a(j).hasClass("item2") && a(".carousel2").children(j).length ? a("img.sliderImg2").attr("src", a(j).find("img").attr("src")) : a(".carousel1").children(j).length && a("img.sliderImg").attr("src", a(j).find("img").attr("src")), j.style[z] = k + " translateX(" + -g / 2 + "px) translateX(" + h * b.shift * i * d + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, e = s >> 1, d = 1; d <= e; ++d) b.full_width ? (zTranslation = b.dist, tweenedOpacity = d === e && g < 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d + i * h), tweenedOpacity = 1 - .2 * (2 * d + i * h)), j = n[f(p + d)], j.style[z] = k + " translateX(" + (b.shift + (r * d - g) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, b.full_width ? (zTranslation = b.dist, tweenedOpacity = d === e && g > 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d - i * h), tweenedOpacity = 1 - .2 * (2 * d - i * h)), j = n[f(p - d)], j.style[z] = k + " translateX(" + (-b.shift + (-r * d - g) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity;
                    j = n[f(p)], j.style[z] = k + " translateX(" + -g / 2 + "px) translateX(" + h * b.shift * i + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity
                }

                function h() {
                    var a, b, c, d;
                    a = Date.now(), b = a - B, B = a, c = o - A, A = o, d = 1e3 * c / (1 + b), x = .8 * d + .2 * x
                }

                function i() {
                    var a, c;
                    v && (a = Date.now() - B, c = v * Math.exp(-a / b.time_constant), c > 2 || c < -2 ? (g(w - c), requestAnimationFrame(i)) : g(w))
                }

                function j(c) {
                    if (D) return c.preventDefault(), c.stopPropagation(), !1;
                    if (!b.full_width) {
                        var d = a(c.target).closest(".carousel-item").index(),
                            e = p % s - d;
                        e < 0 ? Math.abs(e + s) < Math.abs(e) && (e += s) : e > 0 && Math.abs(e - s) < e && (e -= s), e < 0 ? a(this).trigger("carouselNext", [Math.abs(e)]) : e > 0 && a(this).trigger("carouselPrev", [e])
                    }
                }

                function k(a) {
                    q = !0, D = !1, E = !1, t = d(a), u = e(a), x = v = 0, A = o, B = Date.now(), clearInterval(C), C = setInterval(h, 100)
                }

                function l(a) {
                    var b, c, f;
                    if (q)
                        if (b = d(a), y = e(a), c = t - b, f = Math.abs(u - y), f < 30 && !E)(c > 2 || c < -2) && (D = !0, t = b, g(o + c));
                        else {
                            if (D) return a.preventDefault(), a.stopPropagation(), !1;
                            E = !0
                        }
                    if (D) return a.preventDefault(), a.stopPropagation(), !1
                }

                function m(a) {
                    return q = !1, clearInterval(C), w = o, (x > 10 || x < -10) && (v = .9 * x, w = o + v), w = Math.round(w / r) * r, v = w - o, B = Date.now(), requestAnimationFrame(i), a.preventDefault(), a.stopPropagation(), !1
                }
                var n, o, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F = a(this);
                return !!F.hasClass("initialized") || (b.full_width && (b.dist = 0, imageHeight = F.find(".carousel-item img").first().load(function() {
                    F.css("height", a(this).height())
                })), F.addClass("initialized"), q = !1, o = w = 0, n = [], item_width = F.find(".carousel-item").first().innerWidth(), r = 2 * item_width + b.padding, F.find(".carousel-item").each(function() {
                    n.push(a(this)[0])
                }), s = n.length, z = "transform", ["webkit", "Moz", "O", "ms"].every(function(a) {
                    var b = a + "Transform";
                    return "undefined" == typeof document.body.style[b] || (z = b, !1)
                }), window.onresize = g, c(), g(o), a(this).on("carouselNext", function(a, b) {
                    void 0 === b && (b = 1), w = o + r * b, o !== w && (v = w - o, B = Date.now(), requestAnimationFrame(i))
                }), void a(this).on("carouselPrev", function(a, b) {
                    void 0 === b && (b = 1), w = o - r * b, o !== w && (v = w - o, B = Date.now(), requestAnimationFrame(i))
                }))
            })
        },
        next: function(b) {
            a(this).trigger("carouselNext", [b])
        },
        prev: function(b) {
            a(this).trigger("carouselPrev", [b])
        }
    };
    a.fn.maraCarousel = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.maraCarousel") : b.init.apply(this, arguments)
    }
}(jQuery);
var ThemeSettings = {
    init: function() {
        this.defineUI(), this.restoreCookieSettings(), this.bindUIEvents(), window.location.hash.indexOf("#disable-iframe") == -1 ? this.loadIframe() : this.window.hide()
    },
    defineUI: function() {
        $.extend(this, {
            constants: {
                LTR: "ltr",
                RTL: "rtl"
            },
            htmlDOM: $("html"),
            bodyDOM: $("body"),
            window: $("#theme-settings"),
            openButton: $("#open-theme-settings"),
            closeButton: $("#close-theme-settings"),
            headerToggle: $("#header-toggle"),
            fullWidthRadio: $("#full-width-layout"),
            boxedRadio: $("#boxed-layout"),
            verticalRadio: $("#vertical-navigation"),
            horizontalRadio: $("#horizontal-navigation"),
            pinkScheme: $("#pink-scheme"),
            darkScheme: $("#dark-scheme"),
            blueScheme: $("#blue-scheme"),
            cyanScheme: $("#cyan-scheme"),
            greenScheme: $("#green-scheme"),
            purpleScheme: $("#purple-scheme"),
            yellowScheme: $("#yellow-scheme"),
            desktopDevice: $("#desktop-device"),
            smartPortraitLarge: $("#smart-portrait-large"),
            smartLandscapeLarge: $("#smart-landscape-large"),
            smartPortraitSmall: $("#smart-portrait-small"),
            smartLandscapeSmall: $("#smart-landscape-small"),
            fullPage: $("#full-page"),
            iframe: null,
            readingDirectionToggle: $("#reading-direction-toggle")
        })
    },
    setCookie: function(a, b, c) {
        if (c) {
            var d, e = new Date;
            e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3), d = "; expires=" + e.toGMTString()
        } else d = "";
        document.cookie = a + "=" + b + d + "; path=/"
    },
    getCookie: function(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d];
                " " == e.charAt(0);) e = e.substring(1, e.length);
            if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
        }
        return null
    },
    changeFloatingHeaderState: function(a) {
        a ? (this.setCookie("floating-header", !0), this.bodyDOM.addClass("floating-header"), this.headerToggle.attr("checked", "checked")) : (this.setCookie("floating-header", !1), this.bodyDOM.removeClass("floating-header"), this.headerToggle.removeAttr("checked")), this.refreshIframe()
    },
    changeLayoutMode: function(a) {
        "boxed" == a ? (this.setCookie("layout-mode", "boxed"), this.bodyDOM.addClass("boxed-layout"), this.boxedRadio.attr("checked", "checked")) : (this.setCookie("layout-mode", "full"), this.bodyDOM.removeClass("boxed-layout"), this.fullWidthRadio.attr("checked", "checked")), this.fixedTabMailbox(a)
    },
    changeNavigationStyle: function(a) {
        "horizontal" == a ? (this.setCookie("navigation-style", "horizontal"), this.bodyDOM.addClass("horizontal-navigation"), this.horizontalRadio.attr("checked", "checked"), $('div[data-template="/templates/navigation/sidebar.html"]').attr("data-template", "/templates/navigation/topbar.html").load("/templates/navigation/topbar.html")) : (this.setCookie("navigation-style", "vertical"), this.bodyDOM.removeClass("horizontal-navigation"), this.verticalRadio.attr("checked", "checked"), $('div[data-template="/templates/navigation/topbar.html"]').attr("data-template", "/templates/navigation/sidebar.html").load("/templates/navigation/sidebar.html")), this.changeAngularNavigationStyle(a), this.refreshIframe()
    },
    changeAngularNavigationStyle: function(a) {
        if ("undefined" != typeof angular) {
            var b = angular.element(document.body),
                c = b.injector().get("$rootScope");
            c.$apply(function() {
                c.navigationStyle = a
            })
        }
    },
    changeReadingDirection: function(a) {
        a == this.constants.RTL ? (this.setCookie("reading-direction", this.constants.RTL), this.htmlDOM.attr("lang", "ar").attr("dir", this.constants.RTL), this.readingDirectionToggle.attr("checked", "checked")) : (this.setCookie("reading-direction", this.constants.LTR), this.htmlDOM.attr("lang", "en").attr("dir", this.constants.LTR), this.readingDirectionToggle.removeAttr("checked")), "function" == typeof ol ? ol() : null
    },
    changeColorScheme: function(a) {
        var b = "blue-scheme cyan-scheme green-scheme purple-scheme yellow-scheme dark-scheme";
        this.pinkScheme.removeClass("active"), this.blueScheme.removeClass("active"), this.cyanScheme.removeClass("active"), this.greenScheme.removeClass("active"), this.purpleScheme.removeClass("active"), this.yellowScheme.removeClass("active"), this.darkScheme.removeClass("active"), "dark" == a ? this.darkScheme.addClass("active") : "blue" == a ? this.blueScheme.addClass("active") : "cyan" == a ? this.cyanScheme.addClass("active") : "green" == a ? this.greenScheme.addClass("active") : "purple" == a ? this.purpleScheme.addClass("active") : "yellow" == a ? this.yellowScheme.addClass("active") : (this.pinkScheme.addClass("active"), a = "pink"), this.setCookie("color-scheme", a), this.bodyDOM.removeClass(b), "pink" != a ? this.bodyDOM.addClass(a + "-scheme") : null, this.bodyDOM.trigger("classChange"), this.refreshIframe()
    },
    restoreCookieSettings: function() {
        this.changeReadingDirection(this.getCookie("reading-direction")), "true" == this.getCookie("floating-header") ? this.changeFloatingHeaderState(!0) : null, "boxed" == this.getCookie("layout-mode") ? this.changeLayoutMode("boxed") : null, "horizontal" == this.getCookie("navigation-style") ? this.changeNavigationStyle("horizontal") : null, "undefined" != typeof this.getCookie("color-scheme") ? this.changeColorScheme(this.getCookie("color-scheme")) : null
    },
    bindUIEvents: function() {
        var a = this;
        a.openButton.on("click", function(b) {
            parseInt(a.openButton.css("opacity")) > 0 ? a.window.addClass("open") : b.stopPropagation()
        }), a.closeButton.on("click", function() {
            a.window.removeClass("open")
        }), a.headerToggle.on("change", function() {
            a.headerToggle.is(":checked") ? a.changeFloatingHeaderState(!0) : a.changeFloatingHeaderState(!1)
        }), a.boxedRadio.on("click", function() {
            a.changeLayoutMode("boxed")
        }), a.fullWidthRadio.on("click", function() {
            a.changeLayoutMode("full")
        }), a.verticalRadio.on("click", function() {
            a.changeNavigationStyle("vertical")
        }), a.horizontalRadio.on("click", function() {
            a.changeNavigationStyle("horizontal")
        }), a.pinkScheme.on("click", function() {
            a.changeColorScheme("pink")
        }), a.darkScheme.on("click", function() {
            a.changeColorScheme("dark")
        }), a.blueScheme.on("click", function() {
            a.changeColorScheme("blue")
        }), a.cyanScheme.on("click", function() {
            a.changeColorScheme("cyan")
        }), a.greenScheme.on("click", function() {
            a.changeColorScheme("green")
        }), a.purpleScheme.on("click", function() {
            a.changeColorScheme("purple")
        }), a.yellowScheme.on("click", function() {
            a.changeColorScheme("yellow")
        }), a.desktopDevice.on("click", function() {
            a.changeDevice("desktop")
        }), a.smartPortraitLarge.on("click", function() {
            a.changeDevice("spl")
        }), a.smartLandscapeLarge.on("click", function() {
            a.changeDevice("sll")
        }), a.smartPortraitSmall.on("click", function() {
            a.changeDevice("sps")
        }), a.smartLandscapeSmall.on("click", function() {
            a.changeDevice("sls")
        }), a.readingDirectionToggle.on("change", function() {
            a.changeReadingDirection(a.readingDirectionToggle.is(":checked") ? a.constants.RTL : a.constants.LTR)
        })
    },
    fixedTabMailbox: function(a) {
        "boxed" == a ? $(".part2_1_1 ul li").addClass("fixed-mailbox-tab") : $(".part2_1_1 ul li").removeClass("fixed-mailbox-tab")
    },
    loadIframe: function() {
        this.iframe = document.createElement("IFRAME"), this.iframe.setAttribute("src", window.location.href + "#disable-iframe"), this.iframe.setAttribute("frameBorder", "0"), this.iframe.id = "mara-iframe", this.iframe.style.display = "none", document.body.appendChild(this.iframe), this.iframe = $("#mara-iframe")
    },
    changeDevice: function(a) {
        this.smartLandscapeSmall.removeClass("active-device"), this.desktopDevice.removeClass("active-device"), this.smartPortraitLarge.removeClass("active-device"), this.smartLandscapeLarge.removeClass("active-device"), this.smartPortraitSmall.removeClass("active-device"), "desktop" == a ? (this.desktopDevice.addClass("active-device"), this.fullPage.show(), this.setCookie("device-preview", "full"), this.iframe.attr("style", "display: none")) : ("spl" == a ? (this.smartPortraitLarge.addClass("active-device"), this.showIframe("width: 768px;")) : "sll" == a ? (this.smartLandscapeLarge.addClass("active-device"), this.showIframe("width: 1024px;")) : "sps" == a ? (this.smartPortraitSmall.addClass("active-device"), this.showIframe("width: 330px;")) : "sls" == a && (this.smartLandscapeSmall.addClass("active-device"), this.showIframe("width: 480px;")), this.setCookie("device-preview", "device"))
    },
    showIframe: function(a) {
        var b = "height: " + $(window).height() + "px;display: block;margin: 0 auto;";
        this.fullPage.hide(), this.iframe.attr("style", b + a), this.iframe.show()
    },
    refreshIframe: function() {
        null != this.iframe && this.iframe[0].contentDocument.location.reload(!0)
    }
};
$(window).on("load", function() {
        window.disableThemeSettings !== !0 ? $("body").append($("<div/>").load("/templates/themeSettings.html", function() {
            ThemeSettings.init()
        })) : window.showRTL === !0 && (ThemeSettings.defineUI(), ThemeSettings.changeReadingDirection(ThemeSettings.getCookie("reading-direction")))
    }),
    function(a) {
        a(document).ready(function() {
            a(document).on("click.card", ".card", function(b) {
                a(this).find("> .card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        a(this).css({
                            display: "none"
                        })
                    }
                }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && (a(b.target).closest(".card").css("overflow", "hidden"), a(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))), a(".card-reveal").closest(".card").css("overflow", "hidden")
            })
        })
    }(jQuery),
    function(a) {
        a(document).ready(function() {
            function b(c) {
                null != c ? (a(".carousel").maraCarousel("next", [a(".carousel")[0].children.length]), b(null)) : setInterval(function() {
                    a(".carousel").maraCarousel("next")
                }, 6e3)
            }

            function c() {
                a(".code1").length && a(".example1").length && (a(".code1").height(a(".example1").height()), a(".code1 pre").height(a(".example1 img").height())), a(".code2").length && a(".example2").length && (a(".code2").height(a(".example2").height()), a(".code2 pre").height(a(".example2 img").height())), a(".code1").length && a(".charts").length && (a(".code1").height(a(".charts").height()), a(".code1 pre").height(a(".charts").height())), a(".code1").length && a(".mgrid > figure > img").length && (a(".code1").height(a(".mgrid > figure > img").height()), a(".code1 pre").height(a(".mgrid > figure > img").height())), a(".code1").length && a(".table-height").length && (a(".code1").height(a(".table-height").height()), a(".code1 pre").height(a(".table-height").height())), a(".code1").length && a(".charts").length && (a(".code1").height(a(".charts").height()), a(".code1 pre").height(a(".charts").height())), a(".code1").length && a(".grid-h").length && (a(".code1").height(a(".grid-h").height()), a(".code1 pre").height(a(".grid-h").height()))
            }
            a(".slider1").slider(), a(".carousel").maraCarousel({
                time_constant: 150,
                padding: 150
            });
            var d = 0;
            a(".product-panel-trigger").on("click", function() {
                0 == d && (b(1), d++)
            });
            var e = a("#products-table");
            if (e.length > 0) {
                e.DataTable({
                    dom: 't<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>><"clear">',
                    pagingType: "simple",
                    aLengthMenu: [
                        [10, 20, 30, 50, 100, -1],
                        [10, 20, 30, 50, 100, "All"]
                    ],
                    pageLength: 10,
                    language: {
                        lengthMenu: "Show _MENU_ products per page",
                        info: "Showing page _PAGE_ of _PAGES_"
                    }
                });
                var f = e.DataTable();
                a("#search-product").keyup(function() {
                    f.search(a(this).val()).draw()
                }), a(".product-count span:last").html("" + f.rows().count()), a(".edit-product").on("click", function() {
                    a("#product-list").fadeOut("slow", function() {
                        a("#product-details").fadeIn("slow", function() {})
                    })
                })
            }
            var g = a("#orders-table");
            if (g.length > 0) {
                g.DataTable({
                    dom: 't<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>><"clear">',
                    pagingType: "simple",
                    aLengthMenu: [
                        [10, 20, 30, 50, 100, -1],
                        [10, 20, 30, 50, 100, "All"]
                    ],
                    pageLength: 10,
                    language: {
                        lengthMenu: "Show _MENU_ orders per page",
                        info: "Showing page _PAGE_ of _PAGES_"
                    }
                });
                var h = g.DataTable();
                a("#search-order").keyup(function() {
                    h.search(a(this).val()).draw()
                }), a(".order-count span:last").html("" + h.rows().count())
            }
            window.onload = window.onresize = function() {
                c()
            }
        })
    }(jQuery), $(window).on("load", function(a) {
        function b(a) {
            a.length > 0 && a.one("submit", function(a) {
                a.preventDefault();
                var b = $(this),
                    d = b.find("textarea"),
                    e = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    f = new Date,
                    g = f.getHours() + ":" + f.getMinutes() + " " + e[f.getDay()] + " " + f.getDate(),
                    h = $($("#reply-template").text().replace(/\{time}/g, g).replace(/\{replyText}/g, d.val()));
                c(b, h, !1)
            })
        }

        function c(a, b, c) {
            function d(d) {
                d = d || "", b.find(".reply-post-images").html(d), c ? b.insertAfter(a.closest(".new-feed-input")) : b.insertBefore(a.closest(".feed-input")), b.fadeIn(), a[0].reset()
            }
            var e = a.find(".reply-images")[0],
                f = $("#reply-image-template");
            if (e.files.length > 0) {
                var g = "",
                    h = [],
                    i = 0,
                    j = Math.random().toString(16).slice(2),
                    k = function(a) {
                        i++, g += f.text().replace(/\{id\}/g, j).replace(/\{imageData\}/g, a.target.result), i == h.length && d(g)
                    };
                $.each(e.files, function(a, b) {
                    ["image/jpeg", "image/jpg", "image/png", "image/gif"].indexOf(b.type) != -1 && h.push(b)
                }), h.length > 0 ? $.each(h, function(a, b) {
                    var c = new FileReader;
                    c.onload = k, c.readAsDataURL(b)
                }) : d()
            } else d()
        }
        var d = jQuery(".feed-item");
        $.each(d, function(a, b) {
            $(b).css("background-image", "url(" + $(b).attr("href") + ")")
        }), $(".feed-page").on("click", '.wall-feed .feed-reply-action button[type="submit"]', function(a) {
            b($(this).closest(".feed-reply-action"))
        });
        var e = $(".new-feed-action");
        e.length > 0 && e.on("submit", function(a) {
            a.preventDefault();
            var b = $(this),
                d = b.find("textarea"),
                e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                f = new Date,
                g = f.getDate() + " " + e[f.getMonth()] + " " + f.getFullYear() + " " + f.getHours() + ":" + f.getMinutes(),
                h = $($("#new-feed-template").text().replace(/\{time}/g, g).replace(/\{replyText}/g, d.val()));
            c(b, h, !0)
        })
    }),
    function(a) {
        var b = {
            init: function(b) {
                var c = {
                    time_constant: 200,
                    dist: -100,
                    shift: 0,
                    padding: 0,
                    full_width: !1
                };
                return b = a.extend(c, b), this.each(function() {
                    function c() {
                        "undefined" != typeof window.ontouchstart && (F[0].addEventListener("touchstart", k), F[0].addEventListener("touchmove", l), F[0].addEventListener("touchend", m)), F[0].addEventListener("mousedown", k), F[0].addEventListener("mousemove", l), F[0].addEventListener("mouseup", m), F[0].addEventListener("click", j)
                    }

                    function d(a) {
                        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX
                    }

                    function e(a) {
                        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY
                    }

                    function f(a) {
                        return a >= s ? a % s : a < 0 ? f(s + a % s) : a
                    }

                    function g(a) {
                        var c, d, e, g, h, i, j;
                        for (o = "number" == typeof a ? a : o, p = Math.floor((o + r / 2) / r), e = o - p * r, g = e < 0 ? 1 : -1, h = -g * e * 2 / r, b.full_width ? j = "translateX(0)" : (j = "translateX(" + (F[0].clientWidth - item_width) / 2 + "px) ", j += "translateY(" + (F[0].clientHeight - item_width) / 2 + "px)"), i = n[f(p)], i.style[z] = j + " translateX(" + -e / 2 + "px) translateX(" + g * b.shift * h * c + "px) translateZ(" + b.dist * h + "px)", i.style.zIndex = 0, b.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * h, i.style.opacity = tweenedOpacity, d = s >> 1, c = 1; c <= d; ++c) b.full_width ? (zTranslation = b.dist, tweenedOpacity = c === d && e < 0 ? 1 - h : 1) : (zTranslation = b.dist * (2 * c + h * g), tweenedOpacity = 1 - .2 * (2 * c + h * g)), i = n[f(p + c)], i.style[z] = j + " translateX(" + (b.shift + (r * c - e) / 2) + "px) translateZ(" + zTranslation + "px)", i.style.zIndex = -c, i.style.opacity = tweenedOpacity, b.full_width ? (zTranslation = b.dist, tweenedOpacity = c === d && e > 0 ? 1 - h : 1) : (zTranslation = b.dist * (2 * c - h * g), tweenedOpacity = 1 - .2 * (2 * c - h * g)), i = n[f(p - c)], i.style[z] = j + " translateX(" + (-b.shift + (-r * c - e) / 2) + "px) translateZ(" + zTranslation + "px)", i.style.zIndex = -c, i.style.opacity = tweenedOpacity;
                        i = n[f(p)], i.style[z] = j + " translateX(" + -e / 2 + "px) translateX(" + g * b.shift * h + "px) translateZ(" + b.dist * h + "px)", i.style.zIndex = 0, b.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * h, i.style.opacity = tweenedOpacity
                    }

                    function h() {
                        var a, b, c, d;
                        a = Date.now(), b = a - B, B = a, c = o - A, A = o, d = 1e3 * c / (1 + b), x = .8 * d + .2 * x
                    }

                    function i() {
                        var a, c;
                        v && (a = Date.now() - B, c = v * Math.exp(-a / b.time_constant), c > 2 || c < -2 ? (g(w - c), requestAnimationFrame(i)) : g(w))
                    }

                    function j(c) {
                        if (D) return c.preventDefault(), c.stopPropagation(), !1;
                        if (!b.full_width) {
                            var d = a(c.target).closest(".carousel-item-gallery").index(),
                                e = p % s - d;
                            e < 0 ? Math.abs(e + s) < Math.abs(e) && (e += s) : e > 0 && Math.abs(e - s) < e && (e -= s), e < 0 ? a(this).trigger("carouselNext", [Math.abs(e)]) : e > 0 && a(this).trigger("carouselPrev", [e])
                        }
                    }

                    function k(a) {
                        q = !0, D = !1, E = !1, t = d(a), u = e(a), x = v = 0, A = o, B = Date.now(), clearInterval(C), C = setInterval(h, 100)
                    }

                    function l(a) {
                        var b, c, f;
                        if (q)
                            if (b = d(a), y = e(a), c = t - b, f = Math.abs(u - y), f < 30 && !E)(c > 2 || c < -2) && (D = !0, t = b, g(o + c));
                            else {
                                if (D) return a.preventDefault(), a.stopPropagation(), !1;
                                E = !0
                            }
                        if (D) return a.preventDefault(), a.stopPropagation(), !1
                    }

                    function m(a) {
                        return q = !1, clearInterval(C), w = o, (x > 10 || x < -10) && (v = .9 * x, w = o + v), w = Math.round(w / r) * r, v = w - o, B = Date.now(), requestAnimationFrame(i), a.preventDefault(), a.stopPropagation(), !1
                    }
                    var n, o, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F = a(this);
                    return !!F.hasClass("initialized") || (b.full_width && (b.dist = 0, imageHeight = F.find(".carousel-item-gallery img").first().load(function() {
                        F.css("height", a(this).height())
                    })), F.addClass("initialized"), q = !1, o = w = 0, n = [], item_width = F.find(".carousel-item-gallery").first().innerWidth(), r = 2 * item_width + b.padding, F.find(".carousel-item-gallery").each(function() {
                        n.push(a(this)[0])
                    }), s = n.length, z = "transform", ["webkit", "Moz", "O", "ms"].every(function(a) {
                        var b = a + "Transform";
                        return "undefined" == typeof document.body.style[b] || (z = b, !1)
                    }), window.onresize = g, c(), g(o), a(this).on("carouselNext", function(a, b) {
                        void 0 === b && (b = 1), w = o + r * b, o !== w && (v = w - o, B = Date.now(), requestAnimationFrame(i))
                    }), void a(this).on("carouselPrev", function(a, b) {
                        void 0 === b && (b = 1), w = o - r * b, o !== w && (v = w - o, B = Date.now(), requestAnimationFrame(i))
                    }))
                })
            },
            next: function(b) {
                a(this).trigger("carouselNext", [b])
            },
            prev: function(b) {
                a(this).trigger("carouselPrev", [b])
            }
        };
        a.fn.gallery_carousel = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.carousel") : b.init.apply(this, arguments)
        }
    }(jQuery), $(document).ready(function() {
        ! function(a) {
            "mailPage" == a("#checkMailPage").val() && a(".collection li").on("click", function() {
                if (a(".collection li").removeClass("active-item"), !a(this).parent().parent().hasClass("messageBox") && (a(this).addClass("active-item"), void 0 != a(this).attr("data-group") && ("first" == a(this).attr("data-group") ? (a(".first_2_2,.first_3_2").removeClass("hiddendiv"), a(".second_2_2,.second_3_2,.user_first_2_2,.user_first_3_2,.user_second_2_2,.user_second_3_2").addClass("hiddendiv")) : "second" == a(this).attr("data-group") && (a(".first_2_2,.first_3_2,.user_first_2_2,.user_first_3_2,.user_second_2_2,.user_second_3_2").addClass("hiddendiv"), a(".second_3_2,.second_2_2").removeClass("hiddendiv"))), void 0 != a(this).attr("data-user"))) {
                    if (a(this).hasClass("unread")) {
                        var b = a(".countEmails");
                        b.html() > 0 && b.html(b.html() - 1), a(this).removeClass("unread")
                    }
                    "first" == a(this).attr("data-user") ? (a(".first_2_2,.first_3_2,.second_2_2,.second_3_2,.user_second_2_2,.user_second_3_2").addClass("hiddendiv"), a(".user_first_2_2,.user_first_3_2").removeClass("hiddendiv")) : "second" == a(this).attr("data-user") && (a(".first_2_2,.first_3_2,.second_2_2,.second_3_2,.user_first_2_2,.user_first_3_2").addClass("hiddendiv"), a(".user_second_2_2,.user_second_3_2").removeClass("hiddendiv"))
                }
            }), a(".tabInbox").on("click", function() {
                a(this).addClass("grey lighten-3"), a(".tabImportant_3_1,.tabSend_3_1,.tabDelete_3_1").addClass("hiddendiv"), a(".tabInbox_3_1").removeClass("hiddendiv"), a(".tabImportant,.tabSend,.tabDelete").removeClass("grey lighten-3")
            }), a(".tabImportant").on("click", function() {
                a(this).addClass("grey lighten-3"), a(".tabInbox_3_1,.tabSend_3_1,.tabDelete_3_1").addClass("hiddendiv").removeClass("pink"), a(".tabImportant_3_1").removeClass("hiddendiv"), a(".tabInbox,.tabSend,.tabDelete").removeClass("grey lighten-3")
            }), a(".tabSend").on("click", function() {
                a(this).addClass("grey lighten-3"), a(".tabImportant_3_1,.tabInbox_3_1,.tabDelete_3_1").addClass("hiddendiv").removeClass("pink"), a(".tabSend_3_1").removeClass("hiddendiv"), a(".tabInbox,.tabImportant,.tabDelete").removeClass("grey lighten-3")
            }), a(".tabDelete").on("click", function() {
                a(this).addClass("grey lighten-3"), a(".tabImportant_3_1,.tabInbox_3_1,.tabSend_3_1").addClass("hiddendiv").removeClass("pink"), a(".tabDelete_3_1").removeClass("hiddendiv"), a(".tabInbox,.tabImportant,.tabSend").removeClass("grey lighten-3")
            });
            var b = function() {
                a(".modal-participants").addClass("hiddendiv").html("Participants: @Me"), a(".first-one-johanna,.second-one-jane,.third-one-katia").addClass("hiddendiv"), a("#autocompleteState").val("")
            };
            a(".compose-modal").on("click", function() {
                a("#compose-modal").openModal({
                    complete: b
                })
            });
            var c = [{
                value: "Johanna Doe"
            }, {
                value: "Jane Doe"
            }, {
                value: "Katia Herbert"
            }];
            a("#autocompleteState").data("array", c);
            var d = ".navbar-custom-search input[type=text]";
            a(d).each(function() {
                function b(b) {
                    a(".autocomplete-content li").each(function() {
                        var c = a(this).text().toLowerCase().indexOf("" + b.toLowerCase()),
                            d = c + b.length - 1,
                            e = a(this).text().slice(0, c),
                            f = a(this).text().slice(c, d + 1),
                            g = a(this).text().slice(d + 1);
                        a(this).html("<span>" + e + "<span class='highlight'>" + f + "</span>" + g + "</span>")
                    })
                }
                var c = a(this);
                if (c.hasClass("autocomplete")) {
                    var d = c.data("array"),
                        e = c.closest(".input-field");
                    if ("" === d) return !1;
                    for (var f = '<ul class="autocomplete-content hide">', g = 0; g < d.length; g++) f += "" !== d[g].path && void 0 !== d[g].path && null !== d[g].path && void 0 !== d[g]["class"] && "" !== d[g]["class"] ? '<li class="autocomplete-option"><img src="' + d[g].path + '" class="' + d[g]["class"] + '"><span>' + d[g].value + "</span></li>" : '<li class="autocomplete-option waves-effect"><span>' + d[g].value + "</span></li>";
                    f += "</ul>", e.append(f), a(document).on("keyup", c, function() {
                        var d = c.val().trim(),
                            e = a(".autocomplete-content");
                        e.css("width", c.width()), "" != d ? (e.children("li").addClass("hide"), e.children("li").filter(function() {
                            e.removeClass("hide"), c.hasClass("highlight-matching") && b(d);
                            var f = !0;
                            for (var g in d) d[g].toLowerCase() !== a(this).text().toLowerCase()[g] && (f = !1);
                            return !!f && a(this).text().toLowerCase().indexOf(d.toLowerCase()) !== -1
                        }).removeClass("hide")) : e.children("li").addClass("hide")
                    }), a(".autocomplete-option").click(function() {
                        var b, c = a(".modal-participants").text();
                        b = c.indexOf("Participants") > -1 ? "" : "Participants: @Me", c.indexOf(a(this).text().trim()) > -1 ? ("Johanna Doe" == a(this).text().trim() ? (a(".first-one-johanna").removeClass("hiddendiv"), a(".second-one-jane,.third-one-katia").addClass("hiddendiv")) : "Jane Doe" == a(this).text().trim() ? (a(".second-one-jane").removeClass("hiddendiv"), a(".first-one-johanna,.third-one-katia").addClass("hiddendiv")) : (a(".third-one-katia").removeClass("hiddendiv"), a(".first-one-johanna,.second-one-jane").addClass("hiddendiv")), a(".autocomplete-option").addClass("hide"), a("#autocompleteState").val("")) : ("Johanna Doe" == a(this).text().trim() ? (a(".first-one-johanna").removeClass("hiddendiv"), a(".second-one-jane,.third-one-katia").addClass("hiddendiv")) : "Jane Doe" == a(this).text().trim() ? (a(".second-one-jane").removeClass("hiddendiv"), a(".first-one-johanna,.third-one-katia").addClass("hiddendiv")) : (a(".third-one-katia").removeClass("hiddendiv"), a(".first-one-johanna,.second-one-jane").addClass("hiddendiv")), a(".modal-participants").removeClass("hiddendiv").append(b + ", @" + a(this).text().trim() + " "), a("#autocompleteState").val(""), a(".autocomplete-option").addClass("hide"))
                    })
                }
            })
        }(jQuery)
    }), $(window).on("load", function() {
        $(".modal-trigger").leanModal(), $(".scrollspy").scrollSpy();
        var a = $(".page-loader-container");
        a.length > 0 && setTimeout(function() {
            a.addClass("closed"), setTimeout(function() {
                $(".dizzy-gillespie").remove()
            }, 200), setTimeout(function() {
                a.remove()
            }, 500)
        }, 400)
    }), $(window).scroll(function() {
        var a = $(window).scrollTop(),
            b = $("html body").hasClass("floating-header");
        a >= 1 && !b ? $(".wrapper.vertical-sidebar .side-nav").addClass("topScroll") : $(".wrapper.vertical-sidebar .side-nav").removeClass("topScroll")
    }),
    function(a) {
        function b(b, c, d, e) {
            var f = a();
            return a.each(g, function(a, g) {
                if (g.height() > 0) {
                    var h = g.offset().top,
                        i = g.offset().left,
                        j = i + g.width(),
                        k = h + g.height(),
                        l = !(i > c || j < e || h > d || k < b);
                    l && f.push(g)
                }
            }), f
        }

        function c() {
            ++j;
            var c = f.scrollTop(),
                d = f.scrollLeft(),
                e = d + f.width(),
                g = c + f.height(),
                i = b(c + k.top + 200, e + k.right, g + k.bottom, d + k.left);
            a.each(i, function(a, b) {
                var c = b.data("scrollSpy:ticks");
                "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", j)
            }), a.each(h, function(a, b) {
                var c = b.data("scrollSpy:ticks");
                "number" == typeof c && c !== j && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null))
            }), h = i
        }

        function d() {
            f.trigger("scrollSpy:winSize")
        }

        function e(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = c.leading === !1 ? 0 : l(), g = null, f = a.apply(d, e), d = e = null
            };
            return function() {
                var j = l();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }
        var f = a(window),
            g = [],
            h = [],
            i = !1,
            j = 0,
            k = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            l = Date.now || function() {
                return (new Date).getTime()
            };
        a.scrollSpy = function(b, d) {
            var h = [];
            b = a(b), b.each(function(b, c) {
                g.push(a(c)), a(c).data("scrollSpy:id", b), a('a[href="#' + a(c).attr("id") + '"]').click(function(b) {
                    b.preventDefault();
                    var c = a(this.hash).offset().top + 1;
                    a("html, body").animate({
                        scrollTop: c - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), d = d || {
                throttle: 100
            }, k.top = d.offsetTop || 0, k.right = d.offsetRight || 0, k.bottom = d.offsetBottom || 0, k.left = d.offsetLeft || 0;
            var j = e(c, d.throttle || 100),
                l = function() {
                    a(document).ready(j)
                };
            return i || (f.on("scroll", l), f.on("resize", l), i = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function() {
                h = a.grep(h, function(a) {
                    return 0 != a.height()
                });
                var b = a(this);
                h[0] ? (a('a[href="#' + h[0].attr("id") + '"]').removeClass("active"), b.data("scrollSpy:id") < h[0].data("scrollSpy:id") ? h.unshift(a(this)) : h.push(a(this))) : h.push(a(this)), a('a[href="#' + h[0].attr("id") + '"]').addClass("active")
            }), b.on("scrollSpy:exit", function() {
                if (h = a.grep(h, function(a) {
                        return 0 != a.height()
                    }), h[0]) {
                    a('a[href="#' + h[0].attr("id") + '"]').removeClass("active");
                    var b = a(this);
                    h = a.grep(h, function(a) {
                        return a.attr("id") != b.attr("id")
                    }), h[0] && a('a[href="#' + h[0].attr("id") + '"]').addClass("active")
                }
            }), b
        }, a.winSizeSpy = function(b) {
            return a.winSizeSpy = function() {
                return f
            }, b = b || {
                throttle: 100
            }, f.on("resize", e(d, b.throttle || 100))
        }, a.fn.scrollSpy = function(b) {
            return a.scrollSpy(a(this), b)
        }
    }(jQuery);