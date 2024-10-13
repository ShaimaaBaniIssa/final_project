"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var SimpleBar = function() {
    var s = function(e, t) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                })(e, t)
        },
        e = !("undefined" == typeof window || !window.document || !window.document.createElement),
        t = "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global,
        a = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        i = t || a || Function("return this")(),
        r = i.Symbol,
        n = Object.prototype,
        o = n.hasOwnProperty,
        l = n.toString,
        c = r ? r.toStringTag : void 0,
        d = Object.prototype.toString,
        u = r ? r.toStringTag : void 0;
    var p = /\s/,
        f = /^\s+/;

    function b(e) {
        var t = _typeof(e);
        return null != e && ("object" == t || "function" == t)
    }
    var h = /^[-+]0x[0-9a-f]+$/i,
        v = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        g = parseInt;

    function y(e) {
        if ("number" == typeof e) return e;
        if ("symbol" == _typeof(t = e) || null != t && "object" == _typeof(t) && "[object Symbol]" == (null == (a = t) ? void 0 === a ? "[object Undefined]" : "[object Null]" : u && u in Object(a) ? function(e) {
                var t = o.call(e, c),
                    a = e[c];
                try {
                    var i = !(e[c] = void 0)
                } catch (e) {}
                var r = l.call(e);
                return i && (t ? e[c] = a : delete e[c]), r
            }(a) : (i = a, d.call(i)))) return NaN;
        var t, a, i, r;
        if (b(e)) {
            var s = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = b(s) ? s + "" : s
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = (r = e) ? r.slice(0, function(e) {
            for (var t = e.length; t-- && p.test(e.charAt(t)););
            return t
        }(r) + 1).replace(f, "") : r;
        var n = v.test(e);
        return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : h.test(e) ? NaN : +e
    }
    var w = function() {
            return i.Date.now()
        },
        E = Math.max,
        x = Math.min;

    function S(i, r, e) {
        var s, n, a, o, l, c, d = 0,
            u = !1,
            p = !1,
            t = !0;
        if ("function" != typeof i) throw new TypeError("Expected a function");

        function f(e) {
            var t = s,
                a = n;
            return s = n = void 0, d = e, o = i.apply(a, t)
        }

        function h(e) {
            var t = e - c;
            return void 0 === c || r <= t || t < 0 || p && a <= e - d
        }

        function v() {
            var e, t = w();
            if (h(t)) return m(t);
            l = setTimeout(v, (e = r - (t - c), p ? x(e, a - (t - d)) : e))
        }

        function m(e) {
            return l = void 0, t && s ? f(e) : (s = n = void 0, o)
        }

        function g() {
            var e, t = w(),
                a = h(t);
            if (s = arguments, n = this, c = t, a) {
                if (void 0 === l) return d = e = c, l = setTimeout(v, r), u ? f(e) : o;
                if (p) return clearTimeout(l), l = setTimeout(v, r), f(c)
            }
            return void 0 === l && (l = setTimeout(v, r)), o
        }
        return r = y(r) || 0, b(e) && (u = !!e.leading, a = (p = "maxWait" in e) ? E(y(e.maxWait) || 0, r) : a, t = "trailing" in e ? !!e.trailing : t), g.cancel = function() {
            void 0 !== l && clearTimeout(l), s = c = n = l = void(d = 0)
        }, g.flush = function() {
            return void 0 === l ? o : m(w())
        }, g
    }
    var T = function() {
            return (T = Object.assign || function(e) {
                for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        M = null,
        C = null;

    function A() {
        if (null === M) {
            if ("undefined" == typeof document) return M = 0;
            var e = document.body,
                t = document.createElement("div");
            t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
            var a = t.getBoundingClientRect().right;
            e.removeChild(t), M = a
        }
        return M
    }

    function L(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
    }

    function O(e) {
        return e && e.ownerDocument ? e.ownerDocument : document
    }
    e && window.addEventListener("resize", function() {
        C !== window.devicePixelRatio && (C = window.devicePixelRatio, M = null)
    });
    var P = function(e) {
        return Array.prototype.reduce.call(e, function(e, t) {
            var a = t.name.match(/data-simplebar-(.+)/);
            if (a) {
                var i = a[1].replace(/\W+(.)/g, function(e, t) {
                    return t.toUpperCase()
                });
                switch (t.value) {
                    case "true":
                        e[i] = !0;
                        break;
                    case "false":
                        e[i] = !1;
                        break;
                    case void 0:
                        e[i] = !0;
                        break;
                    default:
                        e[i] = t.value
                }
            }
            return e
        }, {})
    };

    function k(e, t) {
        var a;
        e && (a = e.classList).add.apply(a, t.split(" "))
    }

    function z(t, e) {
        t && e.split(" ").forEach(function(e) {
            t.classList.remove(e)
        })
    }

    function I(e) {
        return ".".concat(e.split(" ").join("."))
    }
    var D = Object.freeze({
            __proto__: null,
            getElementWindow: L,
            getElementDocument: O,
            getOptions: P,
            addClasses: k,
            removeClasses: z,
            classNamesToQuery: I
        }),
        _ = L,
        N = O,
        W = P,
        H = k,
        R = z,
        G = I,
        X = function() {
            function w(e, t) {
                void 0 === t && (t = {});
                var y = this;
                if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {}, this.onWindowResize = function() {}, this.onStopScrolling = function() {}, this.onMouseEntered = function() {}, this.onScroll = function() {
                        var e = _(y.el);
                        y.scrollXTicking || (e.requestAnimationFrame(y.scrollX), y.scrollXTicking = !0), y.scrollYTicking || (e.requestAnimationFrame(y.scrollY), y.scrollYTicking = !0), y.isScrolling || (y.isScrolling = !0, H(y.el, y.classNames.scrolling)), y.showScrollbar("x"), y.showScrollbar("y"), y.onStopScrolling()
                    }, this.scrollX = function() {
                        y.axis.x.isOverflowing && y.positionScrollbar("x"), y.scrollXTicking = !1
                    }, this.scrollY = function() {
                        y.axis.y.isOverflowing && y.positionScrollbar("y"), y.scrollYTicking = !1
                    }, this._onStopScrolling = function() {
                        R(y.el, y.classNames.scrolling), y.options.autoHide && (y.hideScrollbar("x"), y.hideScrollbar("y")), y.isScrolling = !1
                    }, this.onMouseEnter = function() {
                        y.isMouseEntering || (H(y.el, y.classNames.mouseEntered), y.showScrollbar("x"), y.showScrollbar("y"), y.isMouseEntering = !0), y.onMouseEntered()
                    }, this._onMouseEntered = function() {
                        R(y.el, y.classNames.mouseEntered), y.options.autoHide && (y.hideScrollbar("x"), y.hideScrollbar("y")), y.isMouseEntering = !1
                    }, this._onMouseMove = function(e) {
                        y.mouseX = e.clientX, y.mouseY = e.clientY, (y.axis.x.isOverflowing || y.axis.x.forceVisible) && y.onMouseMoveForAxis("x"), (y.axis.y.isOverflowing || y.axis.y.forceVisible) && y.onMouseMoveForAxis("y")
                    }, this.onMouseLeave = function() {
                        y.onMouseMove.cancel(), (y.axis.x.isOverflowing || y.axis.x.forceVisible) && y.onMouseLeaveForAxis("x"), (y.axis.y.isOverflowing || y.axis.y.forceVisible) && y.onMouseLeaveForAxis("y"), y.mouseX = -1, y.mouseY = -1
                    }, this._onWindowResize = function() {
                        y.scrollbarWidth = y.getScrollbarWidth(), y.hideNativeScrollbar()
                    }, this.onPointerEvent = function(e) {
                        var t, a;
                        y.axis.x.track.el && y.axis.y.track.el && y.axis.x.scrollbar.el && y.axis.y.scrollbar.el && (y.axis.x.track.rect = y.axis.x.track.el.getBoundingClientRect(), y.axis.y.track.rect = y.axis.y.track.el.getBoundingClientRect(), (y.axis.x.isOverflowing || y.axis.x.forceVisible) && (t = y.isWithinBounds(y.axis.x.track.rect)), (y.axis.y.isOverflowing || y.axis.y.forceVisible) && (a = y.isWithinBounds(y.axis.y.track.rect)), (t || a) && (e.stopPropagation(), "pointerdown" === e.type && "touch" !== e.pointerType && (t && (y.axis.x.scrollbar.rect = y.axis.x.scrollbar.el.getBoundingClientRect(), y.isWithinBounds(y.axis.x.scrollbar.rect) ? y.onDragStart(e, "x") : y.onTrackClick(e, "x")), a && (y.axis.y.scrollbar.rect = y.axis.y.scrollbar.el.getBoundingClientRect(), y.isWithinBounds(y.axis.y.scrollbar.rect) ? y.onDragStart(e, "y") : y.onTrackClick(e, "y")))))
                    }, this.drag = function(e) {
                        var t, a, i, r, s, n, o, l, c, d, u;
                        if (y.draggedAxis && y.contentWrapperEl) {
                            var p = y.axis[y.draggedAxis].track,
                                f = null !== (a = null === (t = p.rect) || void 0 === t ? void 0 : t[y.axis[y.draggedAxis].sizeAttr]) && void 0 !== a ? a : 0,
                                h = y.axis[y.draggedAxis].scrollbar,
                                v = null !== (r = null === (i = y.contentWrapperEl) || void 0 === i ? void 0 : i[y.axis[y.draggedAxis].scrollSizeAttr]) && void 0 !== r ? r : 0,
                                m = parseInt(null !== (n = null === (s = y.elStyles) || void 0 === s ? void 0 : s[y.axis[y.draggedAxis].sizeAttr]) && void 0 !== n ? n : "0px", 10);
                            e.preventDefault(), e.stopPropagation();
                            var g = ("y" === y.draggedAxis ? e.pageY : e.pageX) - (null !== (l = null === (o = p.rect) || void 0 === o ? void 0 : o[y.axis[y.draggedAxis].offsetAttr]) && void 0 !== l ? l : 0) - y.axis[y.draggedAxis].dragOffset,
                                b = (g = "x" === y.draggedAxis && y.isRtl ? (null !== (d = null === (c = p.rect) || void 0 === c ? void 0 : c[y.axis[y.draggedAxis].sizeAttr]) && void 0 !== d ? d : 0) - h.size - g : g) / (f - h.size) * (v - m);
                            "x" === y.draggedAxis && y.isRtl && (b = (null === (u = w.getRtlHelpers()) || void 0 === u ? void 0 : u.isScrollingToNegative) ? -b : b), y.contentWrapperEl[y.axis[y.draggedAxis].scrollOffsetAttr] = b
                        }
                    }, this.onEndDrag = function(e) {
                        var t = N(y.el),
                            a = _(y.el);
                        e.preventDefault(), e.stopPropagation(), R(y.el, y.classNames.dragging), t.removeEventListener("mousemove", y.drag, !0), t.removeEventListener("mouseup", y.onEndDrag, !0), y.removePreventClickId = a.setTimeout(function() {
                            t.removeEventListener("click", y.preventClick, !0), t.removeEventListener("dblclick", y.preventClick, !0), y.removePreventClickId = null
                        })
                    }, this.preventClick = function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }, this.el = e, this.options = T(T({}, w.defaultOptions), t), this.classNames = T(T({}, w.defaultOptions.classNames), t.classNames), this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            forceVisible: !1,
                            track: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: !1
                            },
                            scrollbar: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: !1
                            }
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            forceVisible: !1,
                            track: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: !1
                            },
                            scrollbar: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: !1
                            }
                        }
                    }, "object" != _typeof(this.el) || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
                this.onMouseMove = function(e, t, a) {
                    var i = !0,
                        r = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    return b(a) && (i = "leading" in a ? !!a.leading : i, r = "trailing" in a ? !!a.trailing : r), S(e, 64, {
                        leading: i,
                        maxWait: 64,
                        trailing: r
                    })
                }(this._onMouseMove), this.onWindowResize = S(this._onWindowResize, 64, {
                    leading: !0
                }), this.onStopScrolling = S(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = S(this._onMouseEntered, this.stopScrollDelay), this.init()
            }
            return w.getRtlHelpers = function() {
                if (w.rtlHelpers) return w.rtlHelpers;
                var e = document.createElement("div");
                e.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
                var t = e.firstElementChild,
                    a = null == t ? void 0 : t.firstElementChild;
                if (!a) return null;
                document.body.appendChild(t), t.scrollLeft = 0;
                var i = w.getOffset(t),
                    r = w.getOffset(a);
                t.scrollLeft = -999;
                var s = w.getOffset(a);
                return document.body.removeChild(t), w.rtlHelpers = {
                    isScrollOriginAtZero: i.left !== r.left,
                    isScrollingToNegative: r.left !== s.left
                }
            }, w.prototype.getScrollbarWidth = function() {
                try {
                    return this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : A()
                } catch (e) {
                    return A()
                }
            }, w.getOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    a = N(e),
                    i = _(e);
                return {
                    top: t.top + (i.pageYOffset || a.documentElement.scrollTop),
                    left: t.left + (i.pageXOffset || a.documentElement.scrollLeft)
                }
            }, w.prototype.init = function() {
                e && (this.initDOM(), this.rtlHelpers = w.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
            }, w.prototype.initDOM = function() {
                var e, t;
                this.wrapperEl = this.el.querySelector(G(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(G(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(G(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(G(this.classNames.offset)), this.maskEl = this.el.querySelector(G(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, G(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(G(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(G(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(G(this.classNames.track)).concat(G(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(G(this.classNames.track)).concat(G(this.classNames.vertical))), this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(G(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(G(this.classNames.scrollbar))) || null, this.options.autoHide || (H(this.axis.x.scrollbar.el, this.classNames.visible), H(this.axis.y.scrollbar.el, this.classNames.visible))
            }, w.prototype.initListeners = function() {
                var e, t = this,
                    a = _(this.el);
                if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener("scroll", this.onScroll), a.addEventListener("resize", this.onWindowResize), this.contentEl) {
                    if (window.ResizeObserver) {
                        var i = !1,
                            r = a.ResizeObserver || ResizeObserver;
                        this.resizeObserver = new r(function() {
                            i && a.requestAnimationFrame(function() {
                                t.recalculate()
                            })
                        }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), a.requestAnimationFrame(function() {
                            i = !0
                        })
                    }
                    this.mutationObserver = new a.MutationObserver(function() {
                        a.requestAnimationFrame(function() {
                            t.recalculate()
                        })
                    }), this.mutationObserver.observe(this.contentEl, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }
            }, w.prototype.recalculate = function() {
                if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
                    var e = _(this.el);
                    this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
                    var t = this.contentEl.offsetWidth,
                        a = this.heightAutoObserverEl.offsetHeight <= 1,
                        i = this.heightAutoObserverEl.offsetWidth <= 1 || 0 < t,
                        r = this.contentWrapperEl.offsetWidth,
                        s = this.elStyles.overflowX,
                        n = this.elStyles.overflowY;
                    this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
                    var o = this.contentEl.scrollHeight,
                        l = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = a ? "auto" : "100%", this.placeholderEl.style.width = i ? "".concat(t || l, "px") : "auto", this.placeholderEl.style.height = "".concat(o, "px");
                    var c = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = 0 !== t && t < l, this.axis.y.isOverflowing = c < o, this.axis.x.isOverflowing = "hidden" !== s && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== n && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
                    var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                        u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && r - u < l, this.axis.y.isOverflowing = this.axis.y.isOverflowing && c - d < o, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
                }
            }, w.prototype.getScrollbarSize = function(e) {
                var t, a;
                if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing || !this.contentEl) return 0;
                var i, r = this.contentEl[this.axis[e].scrollSizeAttr],
                    s = null !== (a = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== a ? a : 0,
                    n = s / r;
                return i = Math.max(~~(n * s), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (i = Math.min(i, this.options.scrollbarMaxSize)), i
            }, w.prototype.positionScrollbar = function(e) {
                var t, a, i;
                void 0 === e && (e = "y");
                var r = this.axis[e].scrollbar;
                if (this.axis[e].isOverflowing && this.contentWrapperEl && r.el && this.elStyles) {
                    var s = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                        n = (null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) || 0,
                        o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                        l = this.contentWrapperEl[this.axis[e].scrollOffsetAttr];
                    l = "x" === e && this.isRtl && (null === (a = w.getRtlHelpers()) || void 0 === a ? void 0 : a.isScrollOriginAtZero) ? -l : l, "x" === e && this.isRtl && (l = (null === (i = w.getRtlHelpers()) || void 0 === i ? void 0 : i.isScrollingToNegative) ? l : -l);
                    var c = l / (s - o),
                        d = ~~((n - r.size) * c);
                    d = "x" === e && this.isRtl ? -d + (n - r.size) : d, r.el.style.transform = "x" === e ? "translate3d(".concat(d, "px, 0, 0)") : "translate3d(0, ".concat(d, "px, 0)")
                }
            }, w.prototype.toggleTrackVisibility = function(e) {
                void 0 === e && (e = "y");
                var t = this.axis[e].track.el,
                    a = this.axis[e].scrollbar.el;
                t && a && this.contentWrapperEl && (this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e))) : (t.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))), this.axis[e].isOverflowing ? a.style.display = "block" : a.style.display = "none")
            }, w.prototype.showScrollbar = function(e) {
                void 0 === e && (e = "y"), this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (H(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !0)
            }, w.prototype.hideScrollbar = function(e) {
                void 0 === e && (e = "y"), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (R(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !1)
            }, w.prototype.hideNativeScrollbar = function() {
                this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px")
            }, w.prototype.onMouseMoveForAxis = function(e) {
                void 0 === e && (e = "y");
                var t = this.axis[e];
                t.track.el && t.scrollbar.el && (t.track.rect = t.track.el.getBoundingClientRect(), t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(t.track.rect) ? (this.showScrollbar(e), H(t.track.el, this.classNames.hover), this.isWithinBounds(t.scrollbar.rect) ? H(t.scrollbar.el, this.classNames.hover) : R(t.scrollbar.el, this.classNames.hover)) : (R(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)))
            }, w.prototype.onMouseLeaveForAxis = function(e) {
                void 0 === e && (e = "y"), R(this.axis[e].track.el, this.classNames.hover), R(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)
            }, w.prototype.onDragStart = function(e, t) {
                var a;
                void 0 === t && (t = "y");
                var i = N(this.el),
                    r = _(this.el),
                    s = this.axis[t].scrollbar,
                    n = "y" === t ? e.pageY : e.pageX;
                this.axis[t].dragOffset = n - ((null === (a = s.rect) || void 0 === a ? void 0 : a[this.axis[t].offsetAttr]) || 0), this.draggedAxis = t, H(this.el, this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
            }, w.prototype.onTrackClick = function(e, t) {
                var a, i, r, s, n = this;
                void 0 === t && (t = "y");
                var o = this.axis[t];
                if (this.options.clickOnTrack && o.scrollbar.el && this.contentWrapperEl) {
                    e.preventDefault();
                    var l = _(this.el);
                    this.axis[t].scrollbar.rect = o.scrollbar.el.getBoundingClientRect();
                    var c = null !== (i = null === (a = this.axis[t].scrollbar.rect) || void 0 === a ? void 0 : a[this.axis[t].offsetAttr]) && void 0 !== i ? i : 0,
                        d = parseInt(null !== (s = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[t].sizeAttr]) && void 0 !== s ? s : "0px", 10),
                        u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                        p = ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                        f = -1 === p ? u - d : u + d;
                    ! function e() {
                        n.contentWrapperEl && (-1 === p ? f < u && (u -= 40, n.contentWrapperEl[n.axis[t].scrollOffsetAttr] = u, l.requestAnimationFrame(e)) : u < f && (u += 40, n.contentWrapperEl[n.axis[t].scrollOffsetAttr] = u, l.requestAnimationFrame(e)))
                    }()
                }
            }, w.prototype.getContentElement = function() {
                return this.contentEl
            }, w.prototype.getScrollElement = function() {
                return this.contentWrapperEl
            }, w.prototype.removeListeners = function() {
                var e = _(this.el);
                this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel()
            }, w.prototype.unMount = function() {
                this.removeListeners()
            }, w.prototype.isWithinBounds = function(e) {
                return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
            }, w.prototype.findChild = function(e, t) {
                var a = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                return Array.prototype.filter.call(e.children, function(e) {
                    return a.call(e, t)
                })[0]
            }, w.rtlHelpers = null, w.defaultOptions = {
                forceVisible: !1,
                clickOnTrack: !0,
                scrollbarMinSize: 25,
                scrollbarMaxSize: 0,
                ariaLabel: "scrollable content",
                classNames: {
                    contentEl: "simplebar-content",
                    contentWrapper: "simplebar-content-wrapper",
                    offset: "simplebar-offset",
                    mask: "simplebar-mask",
                    wrapper: "simplebar-wrapper",
                    placeholder: "simplebar-placeholder",
                    scrollbar: "simplebar-scrollbar",
                    track: "simplebar-track",
                    heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                    heightAutoObserverEl: "simplebar-height-auto-observer",
                    visible: "simplebar-visible",
                    horizontal: "simplebar-horizontal",
                    vertical: "simplebar-vertical",
                    hover: "simplebar-hover",
                    dragging: "simplebar-dragging",
                    scrolling: "simplebar-scrolling",
                    scrollable: "simplebar-scrollable",
                    mouseEntered: "simplebar-mouse-entered"
                },
                scrollableNode: null,
                contentNode: null,
                autoHide: !0
            }, w.getOptions = W, w.helpers = D, w
        }(),
        B = X.helpers,
        Y = B.getOptions,
        j = B.addClasses,
        V = function(i) {
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var a = i.apply(this, e) || this;
                return r.instances.set(e[0], a), a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function a() {
                    this.constructor = e
                }
                s(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            }(r, i), r.initDOMLoadedElements = function() {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(e) {
                    "init" === e.getAttribute("data-simplebar") || r.instances.has(e) || new r(e, Y(e.attributes))
                })
            }, r.removeObserver = function() {
                var e;
                null === (e = r.globalObserver) || void 0 === e || e.disconnect()
            }, r.prototype.initDOM = function() {
                var e, t, a, i = this;
                if (!Array.prototype.filter.call(this.el.children, function(e) {
                        return e.classList.contains(i.classNames.wrapper)
                    }).length) {
                    for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), j(this.wrapperEl, this.classNames.wrapper), j(this.contentWrapperEl, this.classNames.contentWrapper), j(this.offsetEl, this.classNames.offset), j(this.maskEl, this.classNames.mask), j(this.contentEl, this.classNames.contentEl), j(this.placeholderEl, this.classNames.placeholder), j(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), j(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                    this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("tabindex", "0"), null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("role", "region"), null === (a = this.contentWrapperEl) || void 0 === a || a.setAttribute("aria-label", this.options.ariaLabel)
                }
                if (!this.axis.x.track.el || !this.axis.y.track.el) {
                    var r = document.createElement("div"),
                        s = document.createElement("div");
                    j(r, this.classNames.track), j(s, this.classNames.scrollbar), r.appendChild(s), this.axis.x.track.el = r.cloneNode(!0), j(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), j(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                }
                X.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init")
            }, r.prototype.unMount = function() {
                X.prototype.unMount.call(this), r.instances.delete(this.el)
            }, r.initHtmlApi = function() {
                this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(r.handleMutations), this.globalObserver.observe(document, {
                    childList: !0,
                    subtree: !0
                })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
            }, r.handleMutations = function(e) {
                e.forEach(function(e) {
                    e.addedNodes.forEach(function(e) {
                        1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !r.instances.has(e) && document.documentElement.contains(e) && new r(e, Y(e.attributes)) : e.querySelectorAll("[data-simplebar]").forEach(function(e) {
                            "init" !== e.getAttribute("data-simplebar") && !r.instances.has(e) && document.documentElement.contains(e) && new r(e, Y(e.attributes))
                        }))
                    }), e.removedNodes.forEach(function(e) {
                        1 === e.nodeType && ("init" === e.getAttribute("data-simplebar") ? r.instances.has(e) && !document.documentElement.contains(e) && r.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function(e) {
                            r.instances.has(e) && !document.documentElement.contains(e) && r.instances.get(e).unMount()
                        }))
                    })
                })
            }, r.instances = new WeakMap, r
        }(X);
    return e && V.initHtmlApi(), V
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var a = 0; a < t.length; a++) {
        var i = t[a];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, _toPropertyKey(i.key), i)
    }
}

function _createClass(e, t, a) {
    return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function ownKeys(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), a.push.apply(a, i)
    }
    return a
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(a), !0).forEach(function(e) {
            _defineProperty(t, e, a[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
        })
    }
    return t
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(e, t) {
    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != a) {
        var i, r, s, n, o = [],
            l = !0,
            c = !1;
        try {
            if (s = (a = a.call(e)).next, 0 === t) {
                if (Object(a) !== a) return;
                l = !1
            } else
                for (; !(l = (i = s.call(a)).done) && (o.push(i.value), o.length !== t); l = !0);
        } catch (e) {
            c = !0, r = e
        } finally {
            try {
                if (!l && null != a.return && (n = a.return(), Object(n) !== n)) return
            } finally {
                if (c) throw r
            }
        }
        return o
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
    return i
}

function _defineProperty(e, t, a) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}

function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == _typeof(t) ? t : String(t)
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var a = e[Symbol.toPrimitive];
    if (void 0 === a) return ("string" === t ? String : Number)(e);
    var i = a.call(e, t || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var Swiper = function() {
    function i(e) {
        return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object
    }

    function r(t, a) {
        void 0 === t && (t = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function(e) {
            void 0 === t[e] ? t[e] = a[e] : i(a[e]) && i(t[e]) && 0 < Object.keys(a[e]).length && r(t[e], a[e])
        })
    }
    var t = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function L() {
        var e = "undefined" != typeof document ? document : {};
        return r(e, t), e
    }
    var a, v, f, s = {
        document: t,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function k() {
        var e = "undefined" != typeof window ? window : {};
        return r(e, s), e
    }

    function T(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter(function(e) {
            return !!e.trim()
        })
    }

    function P(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function z() {
        return Date.now()
    }

    function I(e, t) {
        void 0 === t && (t = "x");
        var a, i, r, s, n, o, l = k(),
            c = (s = e, (o = k()).getComputedStyle && (n = o.getComputedStyle(s, null)), !n && s.currentStyle && (n = s.currentStyle), n || (n = s.style), n);
        return l.WebKitCSSMatrix ? (6 < (i = c.transform || c.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
            return e.replace(",", ".")
        }).join(", ")), r = new l.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = c.MozTransform || c.OTransform || c.MsTransform || c.msTransform || c.transform || c.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = l.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = l.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function d(e) {
        return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function b() {
        for (var e, t = Object(arguments.length <= 0 ? void 0 : arguments[0]), a = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
            var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != r && (e = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType))))
                for (var s = Object.keys(Object(r)).filter(function(e) {
                        return a.indexOf(e) < 0
                    }), n = 0, o = s.length; n < o; n += 1) {
                    var l = s[n],
                        c = Object.getOwnPropertyDescriptor(r, l);
                    void 0 !== c && c.enumerable && (d(t[l]) && d(r[l]) ? r[l].__swiper__ ? t[l] = r[l] : b(t[l], r[l]) : !d(t[l]) && d(r[l]) ? (t[l] = {}, r[l].__swiper__ ? t[l] = r[l] : b(t[l], r[l])) : t[l] = r[l])
                }
        }
        return t
    }

    function ie(e, t, a) {
        e.style.setProperty(t, a)
    }

    function M(e) {
        var r, s = e.swiper,
            n = e.targetPosition,
            o = e.side,
            l = k(),
            c = -s.translate,
            d = null,
            u = s.params.speed;
        s.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(s.cssModeFrameID);
        var a = c < n ? "next" : "prev",
            p = function(e, t) {
                return "next" === a && t <= e || "prev" === a && e <= t
            };
        ! function e() {
            r = (new Date).getTime(), null === d && (d = r);
            var t = Math.max(Math.min((r - d) / u, 1), 0),
                a = .5 - Math.cos(t * Math.PI) / 2,
                i = c + a * (n - c);
            if (p(i, n) && (i = n), s.wrapperEl.scrollTo(_defineProperty({}, o, i)), p(i, n)) return s.wrapperEl.style.overflow = "hidden", s.wrapperEl.style.scrollSnapType = "", setTimeout(function() {
                s.wrapperEl.style.overflow = "", s.wrapperEl.scrollTo(_defineProperty({}, o, i))
            }), void l.cancelAnimationFrame(s.cssModeFrameID);
            s.cssModeFrameID = l.requestAnimationFrame(e)
        }()
    }

    function n(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function re(e, t) {
        return void 0 === t && (t = ""), _toConsumableArray(e.children).filter(function(e) {
            return e.matches(t)
        })
    }

    function Y(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }

    function D(e, t) {
        var a;
        void 0 === t && (t = []);
        var i = document.createElement(e);
        return (a = i.classList).add.apply(a, _toConsumableArray(Array.isArray(t) ? t : T(t))), i
    }

    function _(e) {
        var t = k(),
            a = L(),
            i = e.getBoundingClientRect(),
            r = a.body,
            s = e.clientTop || r.clientTop || 0,
            n = e.clientLeft || r.clientLeft || 0,
            o = e === t ? t.scrollY : e.scrollTop,
            l = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + o - s,
            left: i.left + l - n
        }
    }

    function se(e, t) {
        return k().getComputedStyle(e, null).getPropertyValue(t)
    }

    function C(e) {
        var t, a = e;
        if (a) {
            for (t = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && (t += 1);
            return t
        }
    }

    function N(e, t) {
        for (var a = [], i = e.parentElement; i;) t ? i.matches(t) && a.push(i) : a.push(i), i = i.parentElement;
        return a
    }

    function A(a, i) {
        i && a.addEventListener("transitionend", function e(t) {
            t.target === a && (i.call(a, t), a.removeEventListener("transitionend", e))
        })
    }

    function ne(e, t, a) {
        var i = k();
        return a ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function O(e) {
        return (Array.isArray(e) ? e : [e]).filter(function(e) {
            return !!e
        })
    }

    function m() {
        return a || (e = k(), t = L(), a = {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
        }), a;
        var e, t
    }

    function h(e) {
        return void 0 === e && (e = {}), v || (t = (void 0 === e ? {} : e).userAgent, a = m(), i = k(), r = i.navigator.platform, s = t || i.navigator.userAgent, n = {
            ios: !1,
            android: !1
        }, o = i.screen.width, l = i.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/), d = s.match(/(iPad).*OS\s([\d_]+)/), u = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = "Win32" === r, h = "MacIntel" === r, !d && h && a.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(l)) && ((d = s.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), c && !f && (n.os = "android", n.android = !0), (d || p || u) && (n.os = "ios", n.ios = !0), v = n), v;
        var t, a, i, r, s, n, o, l, c, d, u, p, f, h
    }
    var g = function(e, t, a) {
            t && !e.classList.contains(a) ? e.classList.add(a) : !t && e.classList.contains(a) && e.classList.remove(a)
        },
        p = function(e, t, a) {
            t && !e.classList.contains(a) ? e.classList.add(a) : !t && e.classList.contains(a) && e.classList.remove(a)
        },
        o = function(e, t) {
            if (e && !e.destroyed && e.params) {
                var a = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
                if (a) {
                    var i = a.querySelector(".".concat(e.params.lazyPreloaderClass));
                    !i && e.isElement && (a.shadowRoot ? i = a.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame(function() {
                        a.shadowRoot && ((i = a.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass))) && i.remove())
                    })), i && i.remove()
                }
            }
        },
        u = function(e, t) {
            if (e.slides[t]) {
                var a = e.slides[t].querySelector('[loading="lazy"]');
                a && a.removeAttribute("loading")
            }
        },
        y = function(a) {
            if (a && !a.destroyed && a.params) {
                var e = a.params.lazyPreloadPrevNext,
                    t = a.slides.length;
                if (t && e && !(e < 0)) {
                    e = Math.min(e, t);
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(a.params.slidesPerView),
                        r = a.activeIndex;
                    if (a.params.grid && 1 < a.params.grid.rows) {
                        var s = r,
                            n = [s - e];
                        return n.push.apply(n, _toConsumableArray(Array.from({
                            length: e
                        }).map(function(e, t) {
                            return s + i + t
                        }))), void a.slides.forEach(function(e, t) {
                            n.includes(e.column) && u(a, t)
                        })
                    }
                    var o = r + i - 1;
                    if (a.params.rewind || a.params.loop)
                        for (var l = r - e; l <= o + e; l += 1) {
                            var c = (l % t + t) % t;
                            (c < r || o < c) && u(a, c)
                        } else
                            for (var d = Math.max(r - e, 0); d <= Math.min(o + e, t - 1); d += 1) d !== r && (o < d || d < r) && u(a, d)
                }
            }
        };

    function l(e) {
        var t = e.swiper,
            a = e.runCallbacks,
            i = e.direction,
            r = e.step,
            s = t.activeIndex,
            n = t.previousIndex,
            o = i;
        if (o || (o = n < s ? "next" : s < n ? "prev" : "reset"), t.emit("transition".concat(r)), a && s !== n) {
            if ("reset" === o) return void t.emit("slideResetTransition".concat(r));
            t.emit("slideChangeTransition".concat(r)), "next" === o ? t.emit("slideNextTransition".concat(r)) : t.emit("slidePrevTransition".concat(r))
        }
    }

    function w(e, t, a) {
        var i = k(),
            r = e.params,
            s = r.edgeSwipeDetection,
            n = r.edgeSwipeThreshold;
        return !s || !(a <= n || a >= i.innerWidth - n) || "prevent" === s && (t.preventDefault(), !0)
    }

    function E() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                r = e.allowSlidePrev,
                s = e.snapGrid,
                n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            var o = n && t.loop;
            !("auto" === t.slidesPerView || 1 < t.slidesPerView) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(function() {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }
    var c = function(e, t) {
            var a = L(),
                i = e.params,
                r = e.el,
                s = e.wrapperEl,
                n = e.device,
                o = !!i.nested,
                l = "on" === t ? "addEventListener" : "removeEventListener",
                c = t;
            r && "string" != typeof r && (a[l]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }), r[l]("touchstart", e.onTouchStart, {
                passive: !1
            }), r[l]("pointerdown", e.onTouchStart, {
                passive: !1
            }), a[l]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), a[l]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), a[l]("touchend", e.onTouchEnd, {
                passive: !0
            }), a[l]("pointerup", e.onTouchEnd, {
                passive: !0
            }), a[l]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), a[l]("touchcancel", e.onTouchEnd, {
                passive: !0
            }), a[l]("pointerout", e.onTouchEnd, {
                passive: !0
            }), a[l]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), a[l]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (i.preventClicks || i.preventClicksPropagation) && r[l]("click", e.onClick, !0), i.cssMode && s[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0) : e[c]("observerUpdate", E, !0), r[l]("load", e.onLoad, {
                capture: !0
            }))
        },
        x = function(e, t) {
            return e.grid && t.grid && 1 < t.grid.rows
        },
        S = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
    var W = {
            eventsEmitter: {
                on: function(e, t, a) {
                    var i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" != typeof t) return i;
                    var r = a ? "unshift" : "push";
                    return e.split(" ").forEach(function(e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    }), i
                },
                once: function(i, r, e) {
                    var s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" != typeof r) return s;

                    function n() {
                        s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        r.apply(s, t)
                    }
                    return n.__emitterProxy = r, s.on(i, n, e)
                },
                onAny: function(e, t) {
                    var a = this;
                    if (!a.eventsListeners || a.destroyed) return a;
                    if ("function" != typeof e) return a;
                    var i = t ? "unshift" : "push";
                    return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    var a = t.eventsAnyListeners.indexOf(e);
                    return 0 <= a && t.eventsAnyListeners.splice(a, 1), t
                },
                off: function(e, i) {
                    var r = this;
                    return !r.eventsListeners || r.destroyed || r.eventsListeners && e.split(" ").forEach(function(a) {
                        void 0 === i ? r.eventsListeners[a] = [] : r.eventsListeners[a] && r.eventsListeners[a].forEach(function(e, t) {
                            (e === i || e.__emitterProxy && e.__emitterProxy === i) && r.eventsListeners[a].splice(t, 1)
                        })
                    }), r
                },
                emit: function() {
                    var e, a, i, r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if (!r.eventsListeners) return r;
                    for (var t = arguments.length, s = new Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                    return i = "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], a = s.slice(1, s.length), r) : (e = s[0].events, a = s[0].data, s[0].context || r), a.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
                        r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(function(e) {
                            e.apply(i, [t].concat(_toConsumableArray(a)))
                        }), r.eventsListeners && r.eventsListeners[t] && r.eventsListeners[t].forEach(function(e) {
                            e.apply(i, a)
                        })
                    }), r
                }
            },
            update: {
                updateSize: function() {
                    var e, t, a = this,
                        i = a.el;
                    e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i.clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i.clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(se(i, "padding-left") || 0, 10) - parseInt(se(i, "padding-right") || 0, 10), t = t - parseInt(se(i, "padding-top") || 0, 10) - parseInt(se(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(a, {
                        width: e,
                        height: t,
                        size: a.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var a = this;

                    function e(e, t) {
                        return parseFloat(e.getPropertyValue(a.getDirectionLabel(t)) || 0)
                    }
                    var i = a.params,
                        t = a.wrapperEl,
                        r = a.slidesEl,
                        s = a.size,
                        n = a.rtlTranslate,
                        o = a.wrongRTL,
                        l = a.virtual && i.virtual.enabled,
                        c = l ? a.virtual.slides.length : a.slides.length,
                        d = re(r, ".".concat(a.params.slideClass, ", swiper-slide")),
                        u = l ? a.virtual.slides.length : d.length,
                        p = [],
                        f = [],
                        h = [],
                        v = i.slidesOffsetBefore;
                    "function" == typeof v && (v = i.slidesOffsetBefore.call(a));
                    var m = i.slidesOffsetAfter;
                    "function" == typeof m && (m = i.slidesOffsetAfter.call(a));
                    var g = a.snapGrid.length,
                        b = a.slidesGrid.length,
                        y = i.spaceBetween,
                        w = -v,
                        E = 0,
                        x = 0;
                    if (void 0 !== s) {
                        "string" == typeof y && 0 <= y.indexOf("%") ? y = parseFloat(y.replace("%", "")) / 100 * s : "string" == typeof y && (y = parseFloat(y)), a.virtualSize = -y, d.forEach(function(e) {
                            n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                        }), i.centeredSlides && i.cssMode && (ie(t, "--swiper-centered-offset-before", ""), ie(t, "--swiper-centered-offset-after", ""));
                        var S, T = i.grid && 1 < i.grid.rows && a.grid;
                        T ? a.grid.initSlides(d) : a.grid && a.grid.unsetSlides();
                        for (var M = "auto" === i.slidesPerView && i.breakpoints && 0 < Object.keys(i.breakpoints).filter(function(e) {
                                return void 0 !== i.breakpoints[e].slidesPerView
                            }).length, C = 0; C < u; C += 1) {
                            var A = void 0;
                            if (S = 0, d[C] && (A = d[C]), T && a.grid.updateSlide(C, A, d), !d[C] || "none" !== se(A, "display")) {
                                if ("auto" === i.slidesPerView) {
                                    M && (d[C].style[a.getDirectionLabel("width")] = "");
                                    var L = getComputedStyle(A),
                                        O = A.style.transform,
                                        P = A.style.webkitTransform;
                                    if (O && (A.style.transform = "none"), P && (A.style.webkitTransform = "none"), i.roundLengths) S = a.isHorizontal() ? ne(A, "width", !0) : ne(A, "height", !0);
                                    else {
                                        var k = e(L, "width"),
                                            z = e(L, "padding-left"),
                                            I = e(L, "padding-right"),
                                            D = e(L, "margin-left"),
                                            _ = e(L, "margin-right"),
                                            N = L.getPropertyValue("box-sizing");
                                        if (N && "border-box" === N) S = k + D + _;
                                        else {
                                            var W = A,
                                                H = W.clientWidth;
                                            S = k + z + I + D + _ + (W.offsetWidth - H)
                                        }
                                    }
                                    O && (A.style.transform = O), P && (A.style.webkitTransform = P), i.roundLengths && (S = Math.floor(S))
                                } else S = (s - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (S = Math.floor(S)), d[C] && (d[C].style[a.getDirectionLabel("width")] = "".concat(S, "px"));
                                d[C] && (d[C].swiperSlideSize = S), h.push(S), i.centeredSlides ? (w = w + S / 2 + E / 2 + y, 0 === E && 0 !== C && (w = w - s / 2 - y), 0 === C && (w = w - s / 2 - y), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), x % i.slidesPerGroup == 0 && p.push(w), f.push(w)) : (i.roundLengths && (w = Math.floor(w)), (x - Math.min(a.params.slidesPerGroupSkip, x)) % a.params.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + S + y), a.virtualSize += S + y, E = S, x += 1
                            }
                        }
                        if (a.virtualSize = Math.max(a.virtualSize, s) + m, n && o && ("slide" === i.effect || "coverflow" === i.effect) && (t.style.width = "".concat(a.virtualSize + y, "px")), i.setWrapperSize && (t.style[a.getDirectionLabel("width")] = "".concat(a.virtualSize + y, "px")), T && a.grid.updateWrapperSize(S, p), !i.centeredSlides) {
                            for (var R = [], G = 0; G < p.length; G += 1) {
                                var X = p[G];
                                i.roundLengths && (X = Math.floor(X)), p[G] <= a.virtualSize - s && R.push(X)
                            }
                            p = R, 1 < Math.floor(a.virtualSize - s) - Math.floor(p[p.length - 1]) && p.push(a.virtualSize - s)
                        }
                        if (l && i.loop) {
                            var B = h[0] + y;
                            if (1 < i.slidesPerGroup)
                                for (var Y = Math.ceil((a.virtual.slidesBefore + a.virtual.slidesAfter) / i.slidesPerGroup), j = B * i.slidesPerGroup, V = 0; V < Y; V += 1) p.push(p[p.length - 1] + j);
                            for (var q = 0; q < a.virtual.slidesBefore + a.virtual.slidesAfter; q += 1) 1 === i.slidesPerGroup && p.push(p[p.length - 1] + B), f.push(f[f.length - 1] + B), a.virtualSize += B
                        }
                        if (0 === p.length && (p = [0]), 0 !== y) {
                            var F = a.isHorizontal() && n ? "marginLeft" : a.getDirectionLabel("marginRight");
                            d.filter(function(e, t) {
                                return !(i.cssMode && !i.loop) || t !== d.length - 1
                            }).forEach(function(e) {
                                e.style[F] = "".concat(y, "px")
                            })
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var U = 0;
                            h.forEach(function(e) {
                                U += e + (y || 0)
                            });
                            var K = (U -= y) - s;
                            p = p.map(function(e) {
                                return e <= 0 ? -v : K < e ? K + m : e
                            })
                        }
                        if (i.centerInsufficientSlides) {
                            var Z = 0;
                            h.forEach(function(e) {
                                Z += e + (y || 0)
                            }), Z -= y;
                            var $ = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
                            if (Z + $ < s) {
                                var Q = (s - Z - $) / 2;
                                p.forEach(function(e, t) {
                                    p[t] = e - Q
                                }), f.forEach(function(e, t) {
                                    f[t] = e + Q
                                })
                            }
                        }
                        if (Object.assign(a, {
                                slides: d,
                                snapGrid: p,
                                slidesGrid: f,
                                slidesSizesGrid: h
                            }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                            ie(t, "--swiper-centered-offset-before", -p[0] + "px"), ie(t, "--swiper-centered-offset-after", a.size / 2 - h[h.length - 1] / 2 + "px");
                            var J = -a.snapGrid[0],
                                ee = -a.slidesGrid[0];
                            a.snapGrid = a.snapGrid.map(function(e) {
                                return e + J
                            }), a.slidesGrid = a.slidesGrid.map(function(e) {
                                return e + ee
                            })
                        }
                        if (u !== c && a.emit("slidesLengthChange"), p.length !== g && (a.params.watchOverflow && a.checkOverflow(), a.emit("snapGridLengthChange")), f.length !== b && a.emit("slidesGridLengthChange"), i.watchSlidesProgress && a.updateSlidesOffset(), a.emit("slidesUpdated"), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                            var te = "".concat(i.containerModifierClass, "backface-hidden"),
                                ae = a.el.classList.contains(te);
                            u <= i.maxBackfaceHiddenSlides ? ae || a.el.classList.add(te) : ae && a.el.classList.remove(te)
                        }
                    }
                },
                updateAutoHeight: function(e) {
                    var t, a = this,
                        i = [],
                        r = a.virtual && a.params.virtual.enabled,
                        s = 0;
                    "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
                    var n = function(e) {
                        return r ? a.slides[a.getSlideIndexByData(e)] : a.slides[e]
                    };
                    if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                        if (a.params.centeredSlides)(a.visibleSlides || []).forEach(function(e) {
                            i.push(e)
                        });
                        else
                            for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                                var o = a.activeIndex + t;
                                if (o > a.slides.length && !r) break;
                                i.push(n(o))
                            } else i.push(n(a.activeIndex));
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var l = i[t].offsetHeight;
                            s = s < l ? l : s
                        }(s || 0 === s) && (a.wrapperEl.style.height = "".concat(s, "px"))
                },
                updateSlidesOffset: function() {
                    for (var e = this, t = e.slides, a = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0, i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - a - e.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        a = t.params,
                        i = t.slides,
                        r = t.rtlTranslate,
                        s = t.snapGrid;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var n = -e;
                        r && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        var o = a.spaceBetween;
                        "string" == typeof o && 0 <= o.indexOf("%") ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                        for (var l = 0; l < i.length; l += 1) {
                            var c = i[l],
                                d = c.swiperSlideOffset;
                            a.cssMode && a.centeredSlides && (d -= i[0].swiperSlideOffset);
                            var u = (n + (a.centeredSlides ? t.minTranslate() : 0) - d) / (c.swiperSlideSize + o),
                                p = (n - s[0] + (a.centeredSlides ? t.minTranslate() : 0) - d) / (c.swiperSlideSize + o),
                                f = -(n - d),
                                h = f + t.slidesSizesGrid[l],
                                v = 0 <= f && f <= t.size - t.slidesSizesGrid[l],
                                m = 0 <= f && f < t.size - 1 || 1 < h && h <= t.size || f <= 0 && h >= t.size;
                            m && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(l)), g(c, m, a.slideVisibleClass), g(c, v, a.slideFullyVisibleClass), c.progress = r ? -u : u, c.originalProgress = r ? -p : p
                        }
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var a = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * a || 0
                    }
                    var i = t.params,
                        r = t.maxTranslate() - t.minTranslate(),
                        s = t.progress,
                        n = t.isBeginning,
                        o = t.isEnd,
                        l = t.progressLoop,
                        c = n,
                        d = o;
                    if (0 === r) o = n = !(s = 0);
                    else {
                        s = (e - t.minTranslate()) / r;
                        var u = Math.abs(e - t.minTranslate()) < 1,
                            p = Math.abs(e - t.maxTranslate()) < 1;
                        n = u || s <= 0, o = p || 1 <= s, u && (s = 0), p && (s = 1)
                    }
                    if (i.loop) {
                        var f = t.getSlideIndexByData(0),
                            h = t.getSlideIndexByData(t.slides.length - 1),
                            v = t.slidesGrid[f],
                            m = t.slidesGrid[h],
                            g = t.slidesGrid[t.slidesGrid.length - 1],
                            b = Math.abs(e);
                        1 < (l = v <= b ? (b - v) / g : (b + g - m) / g) && (l -= 1)
                    }
                    Object.assign(t, {
                        progress: s,
                        progressLoop: l,
                        isBeginning: n,
                        isEnd: o
                    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !c && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (c && !n || d && !o) && t.emit("fromEdge"), t.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    var t, a, i, e = this,
                        r = e.slides,
                        s = e.params,
                        n = e.slidesEl,
                        o = e.activeIndex,
                        l = e.virtual && s.virtual.enabled,
                        c = e.grid && s.grid && 1 < s.grid.rows,
                        d = function(e) {
                            return re(n, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0]
                        };
                    if (l)
                        if (s.loop) {
                            var u = o - e.virtual.slidesBefore;
                            u < 0 && (u = e.virtual.slides.length + u), u >= e.virtual.slides.length && (u -= e.virtual.slides.length), t = d('[data-swiper-slide-index="'.concat(u, '"]'))
                        } else t = d('[data-swiper-slide-index="'.concat(o, '"]'));
                    else c ? (t = r.filter(function(e) {
                        return e.column === o
                    })[0], i = r.filter(function(e) {
                        return e.column === o + 1
                    })[0], a = r.filter(function(e) {
                        return e.column === o - 1
                    })[0]) : t = r[o];
                    t && (c || (i = function(e, t) {
                        for (var a = []; e.nextElementSibling;) {
                            var i = e.nextElementSibling;
                            t ? i.matches(t) && a.push(i) : a.push(i), e = i
                        }
                        return a
                    }(t, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && !i && (i = r[0]), a = function(e, t) {
                        for (var a = []; e.previousElementSibling;) {
                            var i = e.previousElementSibling;
                            t ? i.matches(t) && a.push(i) : a.push(i), e = i
                        }
                        return a
                    }(t, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && 0 === !a && (a = r[r.length - 1]))), r.forEach(function(e) {
                        p(e, e === t, s.slideActiveClass), p(e, e === i, s.slideNextClass), p(e, e === a, s.slidePrevClass)
                    }), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t, a = this,
                        i = a.rtlTranslate ? a.translate : -a.translate,
                        r = a.snapGrid,
                        s = a.params,
                        n = a.activeIndex,
                        o = a.realIndex,
                        l = a.snapIndex,
                        c = e,
                        d = function(e) {
                            var t = e - a.virtual.slidesBefore;
                            return t < 0 && (t = a.virtual.slides.length + t), t >= a.virtual.slides.length && (t -= a.virtual.slides.length), t
                        };
                    if (void 0 === c && (c = function(e) {
                            for (var t, a = e.slidesGrid, i = e.params, r = e.rtlTranslate ? e.translate : -e.translate, s = 0; s < a.length; s += 1) void 0 !== a[s + 1] ? r >= a[s] && r < a[s + 1] - (a[s + 1] - a[s]) / 2 ? t = s : r >= a[s] && r < a[s + 1] && (t = s + 1) : r >= a[s] && (t = s);
                            return i.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                        }(a)), 0 <= r.indexOf(i)) t = r.indexOf(i);
                    else {
                        var u = Math.min(s.slidesPerGroupSkip, c);
                        t = u + Math.floor((c - u) / s.slidesPerGroup)
                    }
                    if (t >= r.length && (t = r.length - 1), c !== n || a.params.loop)
                        if (c === n && a.params.loop && a.virtual && a.params.virtual.enabled) a.realIndex = d(c);
                        else {
                            var p, f = a.grid && s.grid && 1 < s.grid.rows;
                            if (a.virtual && s.virtual.enabled && s.loop) p = d(c);
                            else if (f) {
                                var h = a.slides.filter(function(e) {
                                        return e.column === c
                                    })[0],
                                    v = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(v) && (v = Math.max(a.slides.indexOf(h), 0)), p = Math.floor(v / s.grid.rows)
                            } else if (a.slides[c]) {
                                var m = a.slides[c].getAttribute("data-swiper-slide-index");
                                p = m ? parseInt(m, 10) : c
                            } else p = c;
                            Object.assign(a, {
                                previousSnapIndex: l,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: p,
                                previousIndex: n,
                                activeIndex: c
                            }), a.initialized && y(a), a.emit("activeIndexChange"), a.emit("snapIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && (o !== p && a.emit("realIndexChange"), a.emit("slideChange"))
                        }
                    else t !== l && (a.snapIndex = t, a.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e, t) {
                    var a = this,
                        i = a.params,
                        r = e.closest(".".concat(i.slideClass, ", swiper-slide"));
                    !r && a.isElement && t && 1 < t.length && t.includes(e) && _toConsumableArray(t.slice(t.indexOf(e) + 1, t.length)).forEach(function(e) {
                        !r && e.matches && e.matches(".".concat(i.slideClass, ", swiper-slide")) && (r = e)
                    });
                    var s, n = !1;
                    if (r)
                        for (var o = 0; o < a.slides.length; o += 1)
                            if (a.slides[o] === r) {
                                n = !0, s = o;
                                break
                            } if (!r || !n) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
                    a.clickedSlide = r, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : a.clickedIndex = s, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        a = this.rtlTranslate,
                        i = this.translate,
                        r = this.wrapperEl;
                    if (t.virtualTranslate) return a ? -i : i;
                    if (t.cssMode) return i;
                    var s = I(r, e);
                    return s += this.cssOverflowAdjustment(), a && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var a = this,
                        i = a.rtlTranslate,
                        r = a.params,
                        s = a.wrapperEl,
                        n = a.progress,
                        o = 0,
                        l = 0;
                    a.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l, r.cssMode ? s[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -l : r.virtualTranslate || (a.isHorizontal() ? o -= a.cssOverflowAdjustment() : l -= a.cssOverflowAdjustment(), s.style.transform = "translate3d(".concat(o, "px, ").concat(l, "px, 0px)"));
                    var c = a.maxTranslate() - a.minTranslate();
                    (0 === c ? 0 : (e - a.minTranslate()) / c) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, a, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
                    var s = this,
                        n = s.params,
                        o = s.wrapperEl;
                    if (s.animating && n.preventInteractionOnTransition) return !1;
                    var l, c = s.minTranslate(),
                        d = s.maxTranslate();
                    if (l = i && c < e ? c : i && e < d ? d : e, s.updateProgress(l), n.cssMode) {
                        var u = s.isHorizontal();
                        if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
                        else {
                            if (!s.support.smoothScroll) return M({
                                swiper: s,
                                targetPosition: -l,
                                side: u ? "left" : "top"
                            }), !0;
                            o.scrollTo(_defineProperty(_defineProperty({}, u ? "left" : "top", -l), "behavior", "smooth"))
                        }
                        return !0
                    }
                    return 0 === t ? (s.setTransition(0), s.setTranslate(l), a && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(l), a && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, a && s.emit("transitionEnd"))
                    }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = "".concat(e, "ms"), this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var a = this.params;
                    a.cssMode || (a.autoHeight && this.updateAutoHeight(), l({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var a = this.params;
                    this.animating = !1, a.cssMode || (this.setTransition(0), l({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e, t, a, i, r) {
                    void 0 === e && (e = 0), void 0 === a && (a = !0), "string" == typeof e && (e = parseInt(e, 10));
                    var s = this,
                        n = e;
                    n < 0 && (n = 0);
                    var o = s.params,
                        l = s.snapGrid,
                        c = s.slidesGrid,
                        d = s.previousIndex,
                        u = s.activeIndex,
                        p = s.rtlTranslate,
                        f = s.wrapperEl;
                    if (!s.enabled && !i && !r || s.destroyed || s.animating && o.preventInteractionOnTransition) return !1;
                    void 0 === t && (t = s.params.speed);
                    var h = Math.min(s.params.slidesPerGroupSkip, n),
                        v = h + Math.floor((n - h) / s.params.slidesPerGroup);
                    v >= l.length && (v = l.length - 1);
                    var m, g = -l[v];
                    if (o.normalizeSlideIndex)
                        for (var b = 0; b < c.length; b += 1) {
                            var y = -Math.floor(100 * g),
                                w = Math.floor(100 * c[b]),
                                E = Math.floor(100 * c[b + 1]);
                            void 0 !== c[b + 1] ? w <= y && y < E - (E - w) / 2 ? n = b : w <= y && y < E && (n = b + 1) : w <= y && (n = b)
                        }
                    if (s.initialized && n !== u) {
                        if (!s.allowSlideNext && (p ? g > s.translate && g > s.minTranslate() : g < s.translate && g < s.minTranslate())) return !1;
                        if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (u || 0) !== n) return !1
                    }
                    if (n !== (d || 0) && a && s.emit("beforeSlideChangeStart"), s.updateProgress(g), m = u < n ? "next" : n < u ? "prev" : "reset", p && -g === s.translate || !p && g === s.translate) return s.updateActiveIndex(n), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(g), "reset" !== m && (s.transitionStart(a, m), s.transitionEnd(a, m)), !1;
                    if (o.cssMode) {
                        var x = s.isHorizontal(),
                            S = p ? g : -g;
                        if (0 === t) {
                            var T = s.virtual && s.params.virtual.enabled;
                            T && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), T && !s._cssModeVirtualInitialSet && 0 < s.params.initialSlide ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(function() {
                                f[x ? "scrollLeft" : "scrollTop"] = S
                            })) : f[x ? "scrollLeft" : "scrollTop"] = S, T && requestAnimationFrame(function() {
                                s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                            })
                        } else {
                            if (!s.support.smoothScroll) return M({
                                swiper: s,
                                targetPosition: S,
                                side: x ? "left" : "top"
                            }), !0;
                            f.scrollTo(_defineProperty(_defineProperty({}, x ? "left" : "top", S), "behavior", "smooth"))
                        }
                        return !0
                    }
                    return s.setTransition(t), s.setTranslate(g), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, m), 0 === t ? s.transitionEnd(a, m) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, m))
                    }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, a, i) {
                    void 0 === e && (e = 0), void 0 === a && (a = !0), "string" == typeof e && (e = parseInt(e, 10));
                    var r = this;
                    if (!r.destroyed) {
                        void 0 === t && (t = r.params.speed);
                        var s = r.grid && r.params.grid && 1 < r.params.grid.rows,
                            n = e;
                        if (r.params.loop)
                            if (r.virtual && r.params.virtual.enabled) n += r.virtual.slidesBefore;
                            else {
                                var o;
                                if (s) {
                                    var l = n * r.params.grid.rows;
                                    o = r.slides.filter(function(e) {
                                        return 1 * e.getAttribute("data-swiper-slide-index") === l
                                    })[0].column
                                } else o = r.getSlideIndexByData(n);
                                var c = s ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                    d = r.params.centeredSlides,
                                    u = r.params.slidesPerView;
                                "auto" === u ? u = r.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(r.params.slidesPerView, 10)), d && u % 2 == 0 && (u += 1));
                                var p = c - o < u;
                                if (d && (p = p || o < Math.ceil(u / 2)), i && d && "auto" !== r.params.slidesPerView && !s && (p = !1), p) {
                                    var f = d ? o < r.activeIndex ? "prev" : "next" : o - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                    r.loopFix({
                                        direction: f,
                                        slideTo: !0,
                                        activeSlideIndex: "next" === f ? o + 1 : o - c + 1,
                                        slideRealIndex: "next" === f ? r.realIndex : void 0
                                    })
                                }
                                if (s) {
                                    var h = n * r.params.grid.rows;
                                    n = r.slides.filter(function(e) {
                                        return 1 * e.getAttribute("data-swiper-slide-index") === h
                                    })[0].column
                                } else n = r.getSlideIndexByData(n)
                            } return requestAnimationFrame(function() {
                            r.slideTo(n, t, a, i)
                        }), r
                    }
                },
                slideNext: function(e, t, a) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.enabled,
                        s = i.params,
                        n = i.animating;
                    if (!r || i.destroyed) return i;
                    void 0 === e && (e = i.params.speed);
                    var o = s.slidesPerGroup;
                    "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    var l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                        c = i.virtual && s.virtual.enabled;
                    if (s.loop) {
                        if (n && !c && s.loopPreventsSliding) return !1;
                        if (i.loopFix({
                                direction: "next"
                            }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode) return requestAnimationFrame(function() {
                            i.slideTo(i.activeIndex + l, e, t, a)
                        }), !0
                    }
                    return s.rewind && i.isEnd ? i.slideTo(0, e, t, a) : i.slideTo(i.activeIndex + l, e, t, a)
                },
                slidePrev: function(e, t, a) {
                    void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        s = i.snapGrid,
                        n = i.slidesGrid,
                        o = i.rtlTranslate,
                        l = i.enabled,
                        c = i.animating;
                    if (!l || i.destroyed) return i;
                    void 0 === e && (e = i.params.speed);
                    var d = i.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (c && !d && r.loopPreventsSliding) return !1;
                        i.loopFix({
                            direction: "prev"
                        }), i._clientLeft = i.wrapperEl.clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var p, f = u(o ? i.translate : -i.translate),
                        h = s.map(function(e) {
                            return u(e)
                        }),
                        v = s[h.indexOf(f) - 1];
                    void 0 === v && r.cssMode && (s.forEach(function(e, t) {
                        e <= f && (p = t)
                    }), void 0 !== p && (v = s[0 < p ? p - 1 : p]));
                    var m = 0;
                    if (void 0 !== v && ((m = n.indexOf(v)) < 0 && (m = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), r.rewind && i.isBeginning) {
                        var g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(g, e, t, a)
                    }
                    return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(function() {
                        i.slideTo(m, e, t, a)
                    }), !0) : i.slideTo(m, e, t, a)
                },
                slideReset: function(e, t, a) {
                    void 0 === t && (t = !0);
                    if (!this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, a)
                },
                slideToClosest: function(e, t, a, i) {
                    void 0 === t && (t = !0), void 0 === i && (i = .5);
                    var r = this;
                    if (!r.destroyed) {
                        void 0 === e && (e = r.params.speed);
                        var s = r.activeIndex,
                            n = Math.min(r.params.slidesPerGroupSkip, s),
                            o = n + Math.floor((s - n) / r.params.slidesPerGroup),
                            l = r.rtlTranslate ? r.translate : -r.translate;
                        if (l >= r.snapGrid[o]) {
                            var c = r.snapGrid[o];
                            l - c > (r.snapGrid[o + 1] - c) * i && (s += r.params.slidesPerGroup)
                        } else {
                            var d = r.snapGrid[o - 1];
                            l - d <= (r.snapGrid[o] - d) * i && (s -= r.params.slidesPerGroup)
                        }
                        return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, e, t, a)
                    }
                },
                slideToClickedSlide: function() {
                    var e = this;
                    if (!e.destroyed) {
                        var t, a = e.params,
                            i = e.slidesEl,
                            r = "auto" === a.slidesPerView ? e.slidesPerViewDynamic() : a.slidesPerView,
                            s = e.clickedIndex,
                            n = e.isElement ? "swiper-slide" : ".".concat(a.slideClass);
                        if (a.loop) {
                            if (e.animating) return;
                            t = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), a.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = e.getSlideIndex(re(i, "".concat(n, '[data-swiper-slide-index="').concat(t, '"]'))[0]), P(function() {
                                e.slideTo(s)
                            })) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = e.getSlideIndex(re(i, "".concat(n, '[data-swiper-slide-index="').concat(t, '"]'))[0]), P(function() {
                                e.slideTo(s)
                            })) : e.slideTo(s)
                        } else e.slideTo(s)
                    }
                }
            },
            loop: {
                loopCreate: function(e) {
                    var i = this,
                        r = i.params,
                        t = i.slidesEl;
                    if (!(!r.loop || i.virtual && i.params.virtual.enabled)) {
                        var a = function() {
                                re(t, ".".concat(r.slideClass, ", swiper-slide")).forEach(function(e, t) {
                                    e.setAttribute("data-swiper-slide-index", t)
                                })
                            },
                            s = i.grid && r.grid && 1 < r.grid.rows,
                            n = r.slidesPerGroup * (s ? r.grid.rows : 1),
                            o = i.slides.length % n != 0,
                            l = s && i.slides.length % r.grid.rows != 0,
                            c = function(e) {
                                for (var t = 0; t < e; t += 1) {
                                    var a = i.isElement ? D("swiper-slide", [r.slideBlankClass]) : D("div", [r.slideClass, r.slideBlankClass]);
                                    i.slidesEl.append(a)
                                }
                            };
                        o ? r.loopAddBlankSlides ? (c(n - i.slides.length % n), i.recalcSlides(), i.updateSlides()) : Y("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : l && (r.loopAddBlankSlides ? (c(r.grid.rows - i.slides.length % r.grid.rows), i.recalcSlides(), i.updateSlides()) : Y("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), a(), i.loopFix({
                            slideRealIndex: e,
                            direction: r.centeredSlides ? void 0 : "next"
                        })
                    }
                },
                loopFix: function(e) {
                    var t = void 0 === e ? {} : e,
                        a = t.slideRealIndex,
                        i = t.slideTo,
                        r = void 0 === i || i,
                        s = t.direction,
                        n = t.setTranslate,
                        o = t.activeSlideIndex,
                        l = t.byController,
                        c = t.byMousewheel,
                        d = this;
                    if (d.params.loop) {
                        d.emit("beforeLoopFix");
                        var u = d.slides,
                            p = d.allowSlidePrev,
                            f = d.allowSlideNext,
                            h = d.slidesEl,
                            v = d.params,
                            m = v.centeredSlides;
                        if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && v.virtual.enabled) return r && (v.centeredSlides || 0 !== d.snapIndex ? v.centeredSlides && d.snapIndex < v.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = f, void d.emit("loopFix");
                        var g = v.slidesPerView;
                        "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(v.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
                        var b = v.slidesPerGroupAuto ? g : v.slidesPerGroup,
                            y = b;
                        y % b != 0 && (y += b - y % b), y += v.loopAdditionalSlides, d.loopedSlides = y;
                        var w = d.grid && v.grid && 1 < v.grid.rows;
                        u.length < g + y ? Y("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && "row" === v.grid.fill && Y("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                        var E = [],
                            x = [],
                            S = d.activeIndex;
                        void 0 === o ? o = d.getSlideIndex(u.filter(function(e) {
                            return e.classList.contains(v.slideActiveClass)
                        })[0]) : S = o;
                        var T = "next" === s || !s,
                            M = "prev" === s || !s,
                            C = 0,
                            A = 0,
                            L = w ? Math.ceil(u.length / v.grid.rows) : u.length,
                            O = (w ? u[o].column : o) + (m && void 0 === n ? -g / 2 + .5 : 0);
                        if (O < y) {
                            C = Math.max(y - O, b);
                            for (var P = 0; P < y - O; P += 1) {
                                var k = P - Math.floor(P / L) * L;
                                if (w)
                                    for (var z = L - k - 1, I = u.length - 1; 0 <= I; I -= 1) u[I].column === z && E.push(I);
                                else E.push(L - k - 1)
                            }
                        } else if (L - y < O + g) {
                            A = Math.max(O - (L - 2 * y), b);
                            for (var D = function() {
                                    var a = _ - Math.floor(_ / L) * L;
                                    w ? u.forEach(function(e, t) {
                                        e.column === a && x.push(t)
                                    }) : x.push(a)
                                }, _ = 0; _ < A; _ += 1) D()
                        }
                        if (d.__preventObserver__ = !0, requestAnimationFrame(function() {
                                d.__preventObserver__ = !1
                            }), M && E.forEach(function(e) {
                                u[e].swiperLoopMoveDOM = !0, h.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
                            }), T && x.forEach(function(e) {
                                u[e].swiperLoopMoveDOM = !0, h.append(u[e]), u[e].swiperLoopMoveDOM = !1
                            }), d.recalcSlides(), "auto" === v.slidesPerView ? d.updateSlides() : w && (0 < E.length && M || 0 < x.length && T) && d.slides.forEach(function(e, t) {
                                d.grid.updateSlide(t, e, d.slides)
                            }), v.watchSlidesProgress && d.updateSlidesOffset(), r)
                            if (0 < E.length && M) {
                                if (void 0 === a) {
                                    var N = d.slidesGrid[S],
                                        W = d.slidesGrid[S + C] - N;
                                    c ? d.setTranslate(d.translate - W) : (d.slideTo(S + Math.ceil(C), 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - W, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - W))
                                } else if (n) {
                                    var H = w ? E.length / v.grid.rows : E.length;
                                    d.slideTo(d.activeIndex + H, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                }
                            } else if (0 < x.length && T)
                            if (void 0 === a) {
                                var R = d.slidesGrid[S],
                                    G = d.slidesGrid[S - A] - R;
                                c ? d.setTranslate(d.translate - G) : (d.slideTo(S - A, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - G, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - G))
                            } else {
                                var X = w ? x.length / v.grid.rows : x.length;
                                d.slideTo(d.activeIndex - X, 0, !1, !0)
                            } if (d.allowSlidePrev = p, d.allowSlideNext = f, d.controller && d.controller.control && !l) {
                            var B = {
                                slideRealIndex: a,
                                direction: s,
                                setTranslate: n,
                                activeSlideIndex: o,
                                byController: !0
                            };
                            Array.isArray(d.controller.control) ? d.controller.control.forEach(function(e) {
                                !e.destroyed && e.params.loop && e.loopFix(_objectSpread(_objectSpread({}, B), {}, {
                                    slideTo: e.params.slidesPerView === v.slidesPerView && r
                                }))
                            }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix(_objectSpread(_objectSpread({}, B), {}, {
                                slideTo: d.controller.control.params.slidesPerView === v.slidesPerView && r
                            }))
                        }
                        d.emit("loopFix")
                    }
                },
                loopDestroy: function() {
                    var e = this,
                        t = e.params,
                        a = e.slidesEl;
                    if (!(!t.loop || e.virtual && e.params.virtual.enabled)) {
                        e.recalcSlides();
                        var i = [];
                        e.slides.forEach(function(e) {
                            var t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                            i[t] = e
                        }), e.slides.forEach(function(e) {
                            e.removeAttribute("data-swiper-slide-index")
                        }), i.forEach(function(e) {
                            a.append(e)
                        }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                    }
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!(!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                        var a = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        t.isElement && (t.__preventObserver__ = !0), a.style.cursor = "move", a.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(function() {
                            t.__preventObserver__ = !1
                        })
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(function() {
                        e.__preventObserver__ = !1
                    }))
                }
            },
            events: {
                attachEvents: function() {
                    var e = this,
                        t = e.params;
                    e.onTouchStart = function(e) {
                        var t = this,
                            a = L(),
                            i = e;
                        i.originalEvent && (i = i.originalEvent);
                        var r = t.touchEventsData;
                        if ("pointerdown" === i.type) {
                            if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
                            r.pointerId = i.pointerId
                        } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
                        if ("touchstart" !== i.type) {
                            var s = t.params,
                                n = t.touches;
                            if (t.enabled && (s.simulateTouch || "mouse" !== i.pointerType) && (!t.animating || !s.preventInteractionOnTransition)) {
                                !t.animating && s.cssMode && s.loop && t.loopFix();
                                var o = i.target;
                                if (("wrapper" !== s.touchEventsTarget || t.wrapperEl.contains(o)) && !("which" in i && 3 === i.which || "button" in i && 0 < i.button || r.isTouched && r.isMoved)) {
                                    var l = !!s.noSwipingClass && "" !== s.noSwipingClass,
                                        c = i.composedPath ? i.composedPath() : i.path;
                                    l && i.target && i.target.shadowRoot && c && (o = c[0]);
                                    var d = s.noSwipingSelector ? s.noSwipingSelector : ".".concat(s.noSwipingClass),
                                        u = !(!i.target || !i.target.shadowRoot);
                                    if (s.noSwiping && (u ? function(i, e) {
                                            return void 0 === e && (e = this),
                                                function e(t) {
                                                    if (!t || t === L() || t === k()) return null;
                                                    t.assignedSlot && (t = t.assignedSlot);
                                                    var a = t.closest(i);
                                                    return a || t.getRootNode ? a || e(t.getRootNode().host) : null
                                                }(e)
                                        }(d, o) : o.closest(d))) t.allowClick = !0;
                                    else if (!s.swipeHandler || o.closest(s.swipeHandler)) {
                                        n.currentX = i.pageX, n.currentY = i.pageY;
                                        var p = n.currentX,
                                            f = n.currentY;
                                        if (w(t, i, p)) {
                                            Object.assign(r, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0
                                            }), n.startX = p, n.startY = f, r.touchStartTime = z(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < s.threshold && (r.allowThresholdMove = !1);
                                            var h = !0;
                                            o.matches(r.focusableElements) && (h = !1, "SELECT" === o.nodeName && (r.isTouched = !1)), a.activeElement && a.activeElement.matches(r.focusableElements) && a.activeElement !== o && a.activeElement.blur();
                                            var v = h && t.allowTouchMove && s.touchStartPreventDefault;
                                            !s.touchStartForcePreventDefault && !v || o.isContentEditable || i.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
                                        }
                                    }
                                }
                            }
                        } else w(t, i, i.targetTouches[0].pageX)
                    }.bind(e), e.onTouchMove = function(e) {
                        var t = L(),
                            a = this,
                            i = a.touchEventsData,
                            r = a.params,
                            s = a.touches,
                            n = a.rtlTranslate;
                        if (a.enabled && (r.simulateTouch || "mouse" !== e.pointerType)) {
                            var o, l = e;
                            if (l.originalEvent && (l = l.originalEvent), "pointermove" === l.type) {
                                if (null !== i.touchId) return;
                                if (l.pointerId !== i.pointerId) return
                            }
                            if ("touchmove" === l.type) {
                                if (!(o = _toConsumableArray(l.changedTouches).filter(function(e) {
                                        return e.identifier === i.touchId
                                    })[0]) || o.identifier !== i.touchId) return
                            } else o = l;
                            if (i.isTouched) {
                                var c = o.pageX,
                                    d = o.pageY;
                                if (l.preventedByNestedSwiper) return s.startX = c, void(s.startY = d);
                                if (!a.allowTouchMove) return l.target.matches(i.focusableElements) || (a.allowClick = !1), void(i.isTouched && (Object.assign(s, {
                                    startX: c,
                                    startY: d,
                                    currentX: c,
                                    currentY: d
                                }), i.touchStartTime = z()));
                                if (r.touchReleaseOnEdges && !r.loop)
                                    if (a.isVertical()) {
                                        if (d < s.startY && a.translate <= a.maxTranslate() || d > s.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                                    } else if (c < s.startX && a.translate <= a.maxTranslate() || c > s.startX && a.translate >= a.minTranslate()) return;
                                if (t.activeElement && l.target === t.activeElement && l.target.matches(i.focusableElements)) return i.isMoved = !0, void(a.allowClick = !1);
                                i.allowTouchCallbacks && a.emit("touchMove", l), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = c, s.currentY = d;
                                var u, p = s.currentX - s.startX,
                                    f = s.currentY - s.startY;
                                if (!(a.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < a.params.threshold))
                                    if (void 0 === i.isScrolling && (a.isHorizontal() && s.currentY === s.startY || a.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : 25 <= p * p + f * f && (u = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = a.isHorizontal() ? u > r.touchAngle : 90 - u > r.touchAngle)), i.isScrolling && a.emit("touchMoveOpposite", l), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === l.type && i.preventTouchMoveFromPointerMove) i.isTouched = !1;
                                    else if (i.startMoving) {
                                    a.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
                                    var h = a.isHorizontal() ? p : f,
                                        v = a.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
                                    r.oneWayMovement && (h = Math.abs(h) * (n ? 1 : -1), v = Math.abs(v) * (n ? 1 : -1)), s.diff = h, h *= r.touchRatio, n && (h = -h, v = -v);
                                    var m = a.touchesDirection;
                                    a.swipeDirection = 0 < h ? "prev" : "next", a.touchesDirection = 0 < v ? "prev" : "next";
                                    var g = a.params.loop && !r.cssMode,
                                        b = "next" === a.touchesDirection && a.allowSlideNext || "prev" === a.touchesDirection && a.allowSlidePrev;
                                    if (!i.isMoved) {
                                        if (g && b && a.loopFix({
                                                direction: a.swipeDirection
                                            }), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating) {
                                            var y = new window.CustomEvent("transitionend", {
                                                bubbles: !0,
                                                cancelable: !0,
                                                detail: {
                                                    bySwiperTouchMove: !0
                                                }
                                            });
                                            a.wrapperEl.dispatchEvent(y)
                                        }
                                        i.allowMomentumBounce = !1, !r.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", l)
                                    }
                                    if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && m !== a.touchesDirection && g && b && 1 <= Math.abs(h)) return Object.assign(s, {
                                        startX: c,
                                        startY: d,
                                        currentX: c,
                                        currentY: d,
                                        startTranslate: i.currentTranslate
                                    }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
                                    a.emit("sliderMove", l), i.isMoved = !0, i.currentTranslate = h + i.startTranslate;
                                    var w = !0,
                                        E = r.resistanceRatio;
                                    if (r.touchReleaseOnEdges && (E = 0), 0 < h ? (g && b && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? a.minTranslate() - a.slidesSizesGrid[a.activeIndex + 1] : a.minTranslate()) && a.loopFix({
                                            direction: "prev",
                                            setTranslate: !0,
                                            activeSlideIndex: 0
                                        }), i.currentTranslate > a.minTranslate() && (w = !1, r.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + h, E)))) : h < 0 && (g && b && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? a.maxTranslate() + a.slidesSizesGrid[a.slidesSizesGrid.length - 1] : a.maxTranslate()) && a.loopFix({
                                            direction: "next",
                                            setTranslate: !0,
                                            activeSlideIndex: a.slides.length - ("auto" === r.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                                        }), i.currentTranslate < a.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - h, E)))), w && (l.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), 0 < r.threshold) {
                                        if (!(Math.abs(h) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void(s.diff = a.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                    }
                                    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && a.freeMode || r.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
                                }
                            } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", l)
                        }
                    }.bind(e), e.onTouchEnd = function(e) {
                        var t, a = this,
                            i = a.touchEventsData,
                            r = e;
                        if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
                            if (!(t = _toConsumableArray(r.changedTouches).filter(function(e) {
                                    return e.identifier === i.touchId
                                })[0]) || t.identifier !== i.touchId) return
                        } else {
                            if (null !== i.touchId) return;
                            if (r.pointerId !== i.pointerId) return;
                            t = r
                        }
                        if (!["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) || ["pointercancel", "contextmenu"].includes(r.type) && (a.browser.isSafari || a.browser.isWebView)) {
                            i.pointerId = null, i.touchId = null;
                            var s = a.params,
                                n = a.touches,
                                o = a.rtlTranslate,
                                l = a.slidesGrid;
                            if (a.enabled && (s.simulateTouch || "mouse" !== r.pointerType)) {
                                if (i.allowTouchCallbacks && a.emit("touchEnd", r), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && a.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                                s.grabCursor && i.isMoved && i.isTouched && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!1);
                                var c, d = z(),
                                    u = d - i.touchStartTime;
                                if (a.allowClick) {
                                    var p = r.path || r.composedPath && r.composedPath();
                                    a.updateClickedSlide(p && p[0] || r.target, p), a.emit("tap click", r), u < 300 && d - i.lastClickTime < 300 && a.emit("doubleTap doubleClick", r)
                                }
                                if (i.lastClickTime = z(), P(function() {
                                        a.destroyed || (a.allowClick = !0)
                                    }), !i.isTouched || !i.isMoved || !a.swipeDirection || 0 === n.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = s.followFinger ? o ? a.translate : -a.translate : -i.currentTranslate, !s.cssMode)
                                    if (s.freeMode && s.freeMode.enabled) a.freeMode.onTouchEnd({
                                        currentPos: c
                                    });
                                    else {
                                        for (var f = c >= -a.maxTranslate() && !a.params.loop, h = 0, v = a.slidesSizesGrid[0], m = 0; m < l.length; m += m < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                                            var g = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                            void 0 !== l[m + g] ? (f || c >= l[m] && c < l[m + g]) && (v = l[(h = m) + g] - l[m]) : (f || c >= l[m]) && (h = m, v = l[l.length - 1] - l[l.length - 2])
                                        }
                                        var b = null,
                                            y = null;
                                        s.rewind && (a.isBeginning ? y = s.virtual && s.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1 : a.isEnd && (b = 0));
                                        var w = (c - l[h]) / v,
                                            E = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                        if (u > s.longSwipesMs) {
                                            if (!s.longSwipes) return void a.slideTo(a.activeIndex);
                                            "next" === a.swipeDirection && (w >= s.longSwipesRatio ? a.slideTo(s.rewind && a.isEnd ? b : h + E) : a.slideTo(h)), "prev" === a.swipeDirection && (w > 1 - s.longSwipesRatio ? a.slideTo(h + E) : null !== y && w < 0 && Math.abs(w) > s.longSwipesRatio ? a.slideTo(y) : a.slideTo(h))
                                        } else {
                                            if (!s.shortSwipes) return void a.slideTo(a.activeIndex);
                                            !a.navigation || r.target !== a.navigation.nextEl && r.target !== a.navigation.prevEl ? ("next" === a.swipeDirection && a.slideTo(null !== b ? b : h + E), "prev" === a.swipeDirection && a.slideTo(null !== y ? y : h)) : r.target === a.navigation.nextEl ? a.slideTo(h + E) : a.slideTo(h)
                                        }
                                    }
                            }
                        }
                    }.bind(e), e.onDocumentTouchStart = function() {
                        this.documentTouchHandlerProceeded || (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
                    }.bind(e), t.cssMode && (e.onScroll = function() {
                        var e = this,
                            t = e.wrapperEl,
                            a = e.rtlTranslate;
                        if (e.enabled) {
                            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                            var i = e.maxTranslate() - e.minTranslate();
                            (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                        }
                    }.bind(e)), e.onClick = function(e) {
                        var t = this;
                        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                    }.bind(e), e.onLoad = function(e) {
                        var t = this;
                        o(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
                    }.bind(e), c(e, "on")
                },
                detachEvents: function() {
                    c(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var i = this,
                        e = i.realIndex,
                        t = i.initialized,
                        r = i.params,
                        a = i.el,
                        s = r.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var n = i.getBreakpoint(s, i.params.breakpointsBase, i.el);
                        if (n && i.currentBreakpoint !== n) {
                            var o = (n in s ? s[n] : void 0) || i.originalParams,
                                l = x(i, r),
                                c = x(i, o),
                                d = i.params.grabCursor,
                                u = o.grabCursor,
                                p = r.enabled;
                            l && !c ? (a.classList.remove("".concat(r.containerModifierClass, "grid"), "".concat(r.containerModifierClass, "grid-column")), i.emitContainerClasses()) : !l && c && (a.classList.add("".concat(r.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === r.grid.fill) && a.classList.add("".concat(r.containerModifierClass, "grid-column")), i.emitContainerClasses()), d && !u ? i.unsetGrabCursor() : !d && u && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(function(e) {
                                if (void 0 !== o[e]) {
                                    var t = r[e] && r[e].enabled,
                                        a = o[e] && o[e].enabled;
                                    t && !a && i[e].disable(), !t && a && i[e].enable()
                                }
                            });
                            var f = o.direction && o.direction !== r.direction,
                                h = r.loop && (o.slidesPerView !== r.slidesPerView || f),
                                v = r.loop;
                            f && t && i.changeDirection(), b(i.params, o);
                            var m = i.params.enabled,
                                g = i.params.loop;
                            Object.assign(i, {
                                allowTouchMove: i.params.allowTouchMove,
                                allowSlideNext: i.params.allowSlideNext,
                                allowSlidePrev: i.params.allowSlidePrev
                            }), p && !m ? i.disable() : !p && m && i.enable(), i.currentBreakpoint = n, i.emit("_beforeBreakpoint", o), t && (h ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !v && g ? (i.loopCreate(e), i.updateSlides()) : v && !g && i.loopDestroy()), i.emit("breakpoint", o)
                        }
                    }
                },
                getBreakpoint: function(e, t, a) {
                    if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
                        var i = !1,
                            r = k(),
                            s = "window" === t ? r.innerHeight : a.clientHeight,
                            n = Object.keys(e).map(function(e) {
                                if ("string" != typeof e || 0 !== e.indexOf("@")) return {
                                    value: e,
                                    point: e
                                };
                                var t = parseFloat(e.substr(1));
                                return {
                                    value: s * t,
                                    point: e
                                }
                            });
                        n.sort(function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var o = 0; o < n.length; o += 1) {
                            var l = n[o],
                                c = l.point,
                                d = l.value;
                            "window" === t ? r.matchMedia("(min-width: ".concat(d, "px)")).matches && (i = c) : d <= a.clientWidth && (i = c)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked,
                        a = e.params,
                        i = a.slidesOffsetBefore;
                    if (i) {
                        var r = e.slides.length - 1,
                            s = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * i;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    var e, t, a, i, r = this,
                        s = r.classNames,
                        n = r.params,
                        o = r.rtl,
                        l = r.el,
                        c = r.device,
                        d = (t = ["initialized", n.direction, {
                            "free-mode": r.params.freeMode && n.freeMode.enabled
                        }, {
                            autoheight: n.autoHeight
                        }, {
                            rtl: o
                        }, {
                            grid: n.grid && 1 < n.grid.rows
                        }, {
                            "grid-column": n.grid && 1 < n.grid.rows && "column" === n.grid.fill
                        }, {
                            android: c.android
                        }, {
                            ios: c.ios
                        }, {
                            "css-mode": n.cssMode
                        }, {
                            centered: n.cssMode && n.centeredSlides
                        }, {
                            "watch-progress": n.watchSlidesProgress
                        }], a = n.containerModifierClass, i = [], t.forEach(function(t) {
                            "object" == _typeof(t) ? Object.keys(t).forEach(function(e) {
                                t[e] && i.push(a + e)
                            }) : "string" == typeof t && i.push(a + t)
                        }), i);
                    s.push.apply(s, _toConsumableArray(d)), (e = l.classList).add.apply(e, _toConsumableArray(s)), r.emitContainerClasses()
                },
                removeClasses: function() {
                    var e, t = this.el,
                        a = this.classNames;
                    t && "string" != typeof t && ((e = t.classList).remove.apply(e, _toConsumableArray(a)), this.emitContainerClasses())
                }
            }
        },
        H = {},
        R = function() {
            function p() {
                var e, t, a, s;
                _classCallCheck(this, p);
                for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                s = 1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? r[0] : (a = (e = _slicedToArray(r, 2))[0], e[1]), s || (s = {}), s = b({}, s), a && !s.el && (s.el = a);
                var o = L();
                if (s.el && "string" == typeof s.el && 1 < o.querySelectorAll(s.el).length) {
                    var l = [];
                    return o.querySelectorAll(s.el).forEach(function(e) {
                        var t = b({}, s, {
                            el: e
                        });
                        l.push(new p(t))
                    }), l
                }
                var c = this;
                c.__swiper__ = !0, c.support = m(), c.device = h({
                    userAgent: s.userAgent
                }), c.browser = (f || (f = function() {
                    var t = k(),
                        e = h(),
                        a = !1;

                    function i() {
                        var e = t.navigator.userAgent.toLowerCase();
                        return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }
                    if (i()) {
                        var r = String(t.navigator.userAgent);
                        if (r.includes("Version/")) {
                            var s = _slicedToArray(r.split("Version/")[1].split(" ")[0].split(".").map(function(e) {
                                    return Number(e)
                                }), 2),
                                n = s[0],
                                o = s[1];
                            a = n < 16 || 16 === n && o < 2
                        }
                    }
                    var l = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                        c = i();
                    return {
                        isSafari: a || c,
                        needPerspectiveFix: a,
                        need3dFix: c || l && e.ios,
                        isWebView: l
                    }
                }()), f), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = _toConsumableArray(c.__modules__), s.modules && Array.isArray(s.modules) && (t = c.modules).push.apply(t, _toConsumableArray(s.modules));
                var d = {};
                c.modules.forEach(function(e) {
                    var i, r;
                    e({
                        params: s,
                        swiper: c,
                        extendParams: (i = s, r = d, function(e) {
                            void 0 === e && (e = {});
                            var t = Object.keys(e)[0],
                                a = e[t];
                            "object" == _typeof(a) && null !== a && (!0 === i[t] && (i[t] = {
                                enabled: !0
                            }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), 0 <= ["pagination", "scrollbar"].indexOf(t) && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), t in i && "enabled" in a && ("object" != _typeof(i[t]) || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                enabled: !1
                            }))), b(r, e)
                        }),
                        on: c.on.bind(c),
                        once: c.once.bind(c),
                        off: c.off.bind(c),
                        emit: c.emit.bind(c)
                    })
                });
                var u = b({}, S, d);
                return c.params = b({}, u, H, s), c.originalParams = b({}, c.params), c.passedParams = b({}, s), c.params && c.params.on && Object.keys(c.params.on).forEach(function(e) {
                    c.on(e, c.params.on[e])
                }), c.params && c.params.onAny && c.onAny(c.params.onAny), Object.assign(c, {
                    enabled: c.params.enabled,
                    el: a,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === c.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === c.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment: function() {
                        return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23)
                    },
                    allowSlideNext: c.params.allowSlideNext,
                    allowSlidePrev: c.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: c.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: c.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), c.emit("_swiper"), c.params.init && c.init(), c
            }
            return _createClass(p, [{
                key: "getDirectionLabel",
                value: function(e) {
                    return this.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    } [e]
                }
            }, {
                key: "getSlideIndex",
                value: function(e) {
                    var t = this.slidesEl,
                        a = this.params,
                        i = C(re(t, ".".concat(a.slideClass, ", swiper-slide"))[0]);
                    return C(e) - i
                }
            }, {
                key: "getSlideIndexByData",
                value: function(t) {
                    return this.getSlideIndex(this.slides.filter(function(e) {
                        return 1 * e.getAttribute("data-swiper-slide-index") === t
                    })[0])
                }
            }, {
                key: "recalcSlides",
                value: function() {
                    var e = this.slidesEl,
                        t = this.params;
                    this.slides = re(e, ".".concat(t.slideClass, ", swiper-slide"))
                }
            }, {
                key: "enable",
                value: function() {
                    var e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
            }, {
                key: "disable",
                value: function() {
                    var e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
            }, {
                key: "setProgress",
                value: function(e, t) {
                    var a = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var i = a.minTranslate(),
                        r = (a.maxTranslate() - i) * e + i;
                    a.translateTo(r, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, {
                key: "emitContainerClasses",
                value: function() {
                    var t = this;
                    if (t.params._emitClasses && t.el) {
                        var e = t.el.className.split(" ").filter(function(e) {
                            return 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)
                        });
                        t.emit("_containerClasses", e.join(" "))
                    }
                }
            }, {
                key: "getSlideClasses",
                value: function(e) {
                    var t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(function(e) {
                        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                    }).join(" ")
                }
            }, {
                key: "emitSlidesClasses",
                value: function() {
                    var a = this;
                    if (a.params._emitClasses && a.el) {
                        var i = [];
                        a.slides.forEach(function(e) {
                            var t = a.getSlideClasses(e);
                            i.push({
                                slideEl: e,
                                classNames: t
                            }), a.emit("_slideClass", e, t)
                        }), a.emit("_slideClasses", i)
                    }
                }
            }, {
                key: "slidesPerViewDynamic",
                value: function(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var a = this.params,
                        i = this.slides,
                        r = this.slidesGrid,
                        s = this.slidesSizesGrid,
                        n = this.size,
                        o = this.activeIndex,
                        l = 1;
                    if ("number" == typeof a.slidesPerView) return a.slidesPerView;
                    if (a.centeredSlides) {
                        for (var c, d = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0, u = o + 1; u < i.length; u += 1) i[u] && !c && (l += 1, n < (d += Math.ceil(i[u].swiperSlideSize)) && (c = !0));
                        for (var p = o - 1; 0 <= p; p -= 1) i[p] && !c && (l += 1, n < (d += i[p].swiperSlideSize) && (c = !0))
                    } else if ("current" === e)
                        for (var f = o + 1; f < i.length; f += 1)(t ? r[f] + s[f] - r[o] < n : r[f] - r[o] < n) && (l += 1);
                    else
                        for (var h = o - 1; 0 <= h; h -= 1) r[o] - r[h] < n && (l += 1);
                    return l
                }
            }, {
                key: "update",
                value: function() {
                    var a = this;
                    if (a && !a.destroyed) {
                        var e, t = a.snapGrid,
                            i = a.params;
                        if (i.breakpoints && a.setBreakpoint(), _toConsumableArray(a.el.querySelectorAll('[loading="lazy"]')).forEach(function(e) {
                                e.complete && o(a, e)
                            }), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && a.updateAutoHeight();
                        else {
                            if (("auto" === i.slidesPerView || 1 < i.slidesPerView) && a.isEnd && !i.centeredSlides) {
                                var r = a.virtual && i.virtual.enabled ? a.virtual.slides : a.slides;
                                e = a.slideTo(r.length - 1, 0, !1, !0)
                            } else e = a.slideTo(a.activeIndex, 0, !1, !0);
                            e || s()
                        }
                        i.watchOverflow && t !== a.snapGrid && a.checkOverflow(), a.emit("update")
                    }

                    function s() {
                        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                        a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                    }
                }
            }, {
                key: "changeDirection",
                value: function(t, e) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.params.direction;
                    return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t || (a.el.classList.remove("".concat(a.params.containerModifierClass).concat(i)), a.el.classList.add("".concat(a.params.containerModifierClass).concat(t)), a.emitContainerClasses(), a.params.direction = t, a.slides.forEach(function(e) {
                        "vertical" === t ? e.style.width = "" : e.style.height = ""
                    }), a.emit("changeDirection"), e && a.update()), a
                }
            }, {
                key: "changeLanguageDirection",
                value: function(e) {
                    var t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
                }
            }, {
                key: "mount",
                value: function(e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var a = e || t.params.el;
                    if ("string" == typeof a && (a = document.querySelector(a)), !a) return !1;
                    a.swiper = t, a.parentNode && a.parentNode.host && a.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    var i = function() {
                            return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."))
                        },
                        r = a && a.shadowRoot && a.shadowRoot.querySelector ? a.shadowRoot.querySelector(i()) : re(a, i())[0];
                    return !r && t.params.createElements && (r = D("div", t.params.wrapperClass), a.append(r), re(a, ".".concat(t.params.slideClass)).forEach(function(e) {
                        r.append(e)
                    })), Object.assign(t, {
                        el: a,
                        wrapperEl: r,
                        slidesEl: t.isElement && !a.parentNode.host.slideSlots ? a.parentNode.host : r,
                        hostEl: t.isElement ? a.parentNode.host : a,
                        mounted: !0,
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === se(a, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === se(a, "direction")),
                        wrongRTL: "-webkit-box" === se(r, "display")
                    }), !0
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = this;
                    if (t.initialized) return t;
                    if (!1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    var a = _toConsumableArray(t.el.querySelectorAll('[loading="lazy"]'));
                    return t.isElement && a.push.apply(a, _toConsumableArray(t.hostEl.querySelectorAll('[loading="lazy"]'))), a.forEach(function(e) {
                        e.complete ? o(t, e) : e.addEventListener("load", function(e) {
                            o(t, e.target)
                        })
                    }), y(t), t.initialized = !0, y(t), t.emit("init"), t.emit("afterInit"), t
                }
            }, {
                key: "destroy",
                value: function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a, i = this,
                        r = i.params,
                        s = i.el,
                        n = i.wrapperEl,
                        o = i.slides;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), s && "string" != typeof s && s.removeAttribute("style"), n && n.removeAttribute("style"), o && o.length && o.forEach(function(e) {
                        e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                        i.off(e)
                    }), !1 !== e && (i.el && "string" != typeof i.el && (i.el.swiper = null), a = i, Object.keys(a).forEach(function(e) {
                        try {
                            a[e] = null
                        } catch (e) {}
                        try {
                            delete a[e]
                        } catch (e) {}
                    })), i.destroyed = !0), null
                }
            }], [{
                key: "extendDefaults",
                value: function(e) {
                    b(H, e)
                }
            }, {
                key: "extendedDefaults",
                get: function() {
                    return H
                }
            }, {
                key: "defaults",
                get: function() {
                    return S
                }
            }, {
                key: "installModule",
                value: function(e) {
                    p.prototype.__modules__ || (p.prototype.__modules__ = []);
                    var t = p.prototype.__modules__;
                    "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
                }
            }, {
                key: "use",
                value: function(e) {
                    return Array.isArray(e) ? e.forEach(function(e) {
                        return p.installModule(e)
                    }) : p.installModule(e), p
                }
            }]), p
        }();

    function G(a, i, r, s) {
        return a.params.createElements && Object.keys(s).forEach(function(e) {
            if (!r[e] && !0 === r.auto) {
                var t = re(a.el, ".".concat(s[e]))[0];
                t || ((t = D("div", s[e])).className = s[e], a.el.append(t)), r[e] = t, i[e] = t
            }
        }), r
    }

    function X(e) {
        return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."))
    }

    function B(e) {
        var t, a = e.effect,
            i = e.swiper,
            r = e.on,
            s = e.setTranslate,
            n = e.setTransition,
            o = e.overwriteParams,
            l = e.perspective,
            c = e.recreateShadows,
            d = e.getEffectParams;
        r("beforeInit", function() {
            if (i.params.effect === a) {
                i.classNames.push("".concat(i.params.containerModifierClass).concat(a)), l && l() && i.classNames.push("".concat(i.params.containerModifierClass, "3d"));
                var e = o ? o() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e)
            }
        }), r("setTranslate", function() {
            i.params.effect === a && s()
        }), r("setTransition", function(e, t) {
            i.params.effect === a && n(t)
        }), r("transitionEnd", function() {
            if (i.params.effect === a && c) {
                if (!d || !d().slideShadows) return;
                i.slides.forEach(function(e) {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function(e) {
                        return e.remove()
                    })
                }), c()
            }
        }), r("virtualUpdate", function() {
            i.params.effect === a && (i.slides.length || (t = !0), requestAnimationFrame(function() {
                t && i.slides && i.slides.length && (s(), t = !1)
            }))
        })
    }

    function j(e, t) {
        var a = n(t);
        return a !== t && (a.style.backfaceVisibility = "hidden", a.style["-webkit-backface-visibility"] = "hidden"), a
    }

    function V(e) {
        var i = e.swiper,
            t = e.duration,
            a = e.transformElements,
            r = e.allSlides,
            s = i.activeIndex;
        if (i.params.virtualTranslate && 0 !== t) {
            var n = !1;
            (r ? a : a.filter(function(e) {
                var t, a = e.classList.contains("swiper-slide-transform") ? (t = e).parentElement ? t.parentElement : i.slides.filter(function(e) {
                    return e.shadowRoot && e.shadowRoot === t.parentNode
                })[0] : e;
                return i.getSlideIndex(a) === s
            })).forEach(function(e) {
                A(e, function() {
                    if (!n && i && !i.destroyed) {
                        n = !0, i.animating = !1;
                        var e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.wrapperEl.dispatchEvent(e)
                    }
                })
            })
        }
    }

    function q(e, t, a) {
        var i = "swiper-slide-shadow".concat(a ? "-".concat(a) : "").concat(e ? " swiper-slide-shadow-".concat(e) : ""),
            r = n(t),
            s = r.querySelector(".".concat(i.split(" ").join(".")));
        return s || (s = D("div", i.split(" ")), r.append(s)), s
    }
    Object.keys(W).forEach(function(t) {
        Object.keys(W[t]).forEach(function(e) {
            R.prototype[e] = W[t][e]
        })
    }), R.use([function(e) {
        var n = e.swiper,
            t = e.on,
            a = e.emit,
            i = k(),
            r = null,
            s = null,
            o = function() {
                n && !n.destroyed && n.initialized && (a("beforeResize"), a("resize"))
            },
            l = function() {
                n && !n.destroyed && n.initialized && a("orientationchange")
            };
        t("init", function() {
            n.params.resizeObserver && void 0 !== i.ResizeObserver ? n && !n.destroyed && n.initialized && (r = new ResizeObserver(function(a) {
                s = i.requestAnimationFrame(function() {
                    var e = n.width,
                        t = n.height,
                        r = e,
                        s = t;
                    a.forEach(function(e) {
                        var t = e.contentBoxSize,
                            a = e.contentRect,
                            i = e.target;
                        i && i !== n.el || (r = a ? a.width : (t[0] || t).inlineSize, s = a ? a.height : (t[0] || t).blockSize)
                    }), r === e && s === t || o()
                })
            })).observe(n.el) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l))
        }), t("destroy", function() {
            s && i.cancelAnimationFrame(s), r && r.unobserve && n.el && (r.unobserve(n.el), r = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l)
        })
    }, function(e) {
        var i = e.swiper,
            t = e.extendParams,
            a = e.on,
            r = e.emit,
            s = [],
            n = k(),
            o = function(e, t) {
                void 0 === t && (t = {});
                var a = new(n.MutationObserver || n.WebkitMutationObserver)(function(e) {
                    if (!i.__preventObserver__)
                        if (1 !== e.length) {
                            var t = function() {
                                r("observerUpdate", e[0])
                            };
                            n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                        } else r("observerUpdate", e[0])
                });
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), s.push(a)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", function() {
            if (i.params.observer) {
                if (i.params.observeParents)
                    for (var e = N(i.hostEl), t = 0; t < e.length; t += 1) o(e[t]);
                o(i.hostEl, {
                    childList: i.params.observeSlideChildren
                }), o(i.wrapperEl, {
                    attributes: !1
                })
            }
        }), a("destroy", function() {
            s.forEach(function(e) {
                e.disconnect()
            }), s.splice(0, s.length)
        })
    }]);
    var e = [function(e) {
        var t, N = e.swiper,
            a = e.extendParams,
            i = e.on,
            W = e.emit;
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        var r = L();
        N.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        var s = r.createElement("div");

        function H(e, t) {
            var a, i = N.params.virtual;
            return i.cache && N.virtual.cache[t] ? N.virtual.cache[t] : (i.renderSlide ? "string" == typeof(a = i.renderSlide.call(N, e, t)) && (s.innerHTML = a, a = s.children[0]) : a = N.isElement ? D("swiper-slide") : D("div", N.params.slideClass), a.setAttribute("data-swiper-slide-index", t), i.renderSlide || (a.innerHTML = e), i.cache && (N.virtual.cache[t] = a), a)
        }

        function o(e, t) {
            var a = N.params,
                i = a.slidesPerView,
                r = a.slidesPerGroup,
                s = a.centeredSlides,
                n = a.loop,
                o = a.initialSlide;
            if (!(t && !n && 0 < o)) {
                var l = N.params.virtual,
                    c = l.addSlidesBefore,
                    d = l.addSlidesAfter,
                    u = N.virtual,
                    p = u.from,
                    f = u.to,
                    h = u.slides,
                    v = u.slidesGrid,
                    m = u.offset;
                N.params.cssMode || N.updateActiveIndex();
                var g, b, y, w = N.activeIndex || 0;
                g = N.rtlTranslate ? "right" : N.isHorizontal() ? "left" : "top";
                var E = w - (y = s ? (b = Math.floor(i / 2) + r + d, Math.floor(i / 2) + r + c) : (b = i + (r - 1) + d, (n ? i : r) + c)),
                    x = w + b;
                n || (E = Math.max(E, 0), x = Math.min(x, h.length - 1));
                var S = (N.slidesGrid[E] || 0) - (N.slidesGrid[0] || 0);
                if (n && y <= w ? (E -= y, s || (S += N.slidesGrid[0])) : n && w < y && (E = -y, s && (S += N.slidesGrid[0])), Object.assign(N.virtual, {
                        from: E,
                        to: x,
                        offset: S,
                        slidesGrid: N.slidesGrid,
                        slidesBefore: y,
                        slidesAfter: b
                    }), p === E && f === x && !e) return N.slidesGrid !== v && S !== m && N.slides.forEach(function(e) {
                    e.style[g] = S - Math.abs(N.cssOverflowAdjustment()) + "px"
                }), N.updateProgress(), void W("virtualUpdate");
                if (N.params.virtual.renderExternal) return N.params.virtual.renderExternal.call(N, {
                    offset: S,
                    from: E,
                    to: x,
                    slides: function() {
                        for (var e = [], t = E; t <= x; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void(N.params.virtual.renderExternalUpdate ? _() : W("virtualUpdate"));
                var T = [],
                    M = [],
                    C = function(e) {
                        var t = e;
                        return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length), t
                    };
                if (e) N.slides.filter(function(e) {
                    return e.matches(".".concat(N.params.slideClass, ", swiper-slide"))
                }).forEach(function(e) {
                    e.remove()
                });
                else
                    for (var A = p; A <= f; A += 1)
                        if (A < E || x < A) {
                            var L = C(A);
                            N.slides.filter(function(e) {
                                return e.matches(".".concat(N.params.slideClass, '[data-swiper-slide-index="').concat(L, '"], swiper-slide[data-swiper-slide-index="').concat(L, '"]'))
                            }).forEach(function(e) {
                                e.remove()
                            })
                        } for (var O = n ? -h.length : 0, P = n ? 2 * h.length : h.length, k = O; k < P; k += 1)
                    if (E <= k && k <= x) {
                        var z = C(k);
                        void 0 === f || e ? M.push(z) : (f < k && M.push(z), k < p && T.push(z))
                    } if (M.forEach(function(e) {
                        N.slidesEl.append(H(h[e], e))
                    }), n)
                    for (var I = T.length - 1; 0 <= I; I -= 1) {
                        var D = T[I];
                        N.slidesEl.prepend(H(h[D], D))
                    } else T.sort(function(e, t) {
                        return t - e
                    }), T.forEach(function(e) {
                        N.slidesEl.prepend(H(h[e], e))
                    });
                re(N.slidesEl, ".swiper-slide, swiper-slide").forEach(function(e) {
                    e.style[g] = S - Math.abs(N.cssOverflowAdjustment()) + "px"
                }), _()
            }

            function _() {
                N.updateSlides(), N.updateProgress(), N.updateSlidesClasses(), W("virtualUpdate")
            }
        }
        i("beforeInit", function() {
            if (N.params.virtual.enabled) {
                var e;
                if (void 0 === N.passedParams.virtual.slides) {
                    var t = _toConsumableArray(N.slidesEl.children).filter(function(e) {
                        return e.matches(".".concat(N.params.slideClass, ", swiper-slide"))
                    });
                    t && t.length && (N.virtual.slides = _toConsumableArray(t), e = !0, t.forEach(function(e, t) {
                        e.setAttribute("data-swiper-slide-index", t), (N.virtual.cache[t] = e).remove()
                    }))
                }
                e || (N.virtual.slides = N.params.virtual.slides), N.classNames.push("".concat(N.params.containerModifierClass, "virtual")), N.params.watchSlidesProgress = !0, o(!(N.originalParams.watchSlidesProgress = !0), !0)
            }
        }), i("setTranslate", function() {
            N.params.virtual.enabled && (N.params.cssMode && !N._immediateVirtual ? (clearTimeout(t), t = setTimeout(function() {
                o()
            }, 100)) : o())
        }), i("init update resize", function() {
            N.params.virtual.enabled && N.params.cssMode && ie(N.wrapperEl, "--swiper-virtual-size", "".concat(N.virtualSize, "px"))
        }), Object.assign(N.virtual, {
            appendSlide: function(e) {
                if ("object" == _typeof(e) && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && N.virtual.slides.push(e[t]);
                else N.virtual.slides.push(e);
                o(!0)
            },
            prependSlide: function(e) {
                var t = N.activeIndex,
                    a = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && N.virtual.slides.unshift(e[r]);
                    a = t + e.length, i = e.length
                } else N.virtual.slides.unshift(e);
                if (N.params.virtual.cache) {
                    var s = N.virtual.cache,
                        n = {};
                    Object.keys(s).forEach(function(e) {
                        var t = s[e],
                            a = t.getAttribute("data-swiper-slide-index");
                        a && t.setAttribute("data-swiper-slide-index", parseInt(a, 10) + i), n[parseInt(e, 10) + i] = t
                    }), N.virtual.cache = n
                }
                o(!0), N.slideTo(a, 0)
            },
            removeSlide: function(t) {
                if (null != t) {
                    var e = N.activeIndex;
                    if (Array.isArray(t))
                        for (var a = t.length - 1; 0 <= a; a -= 1) N.params.virtual.cache && (delete N.virtual.cache[t[a]], Object.keys(N.virtual.cache).forEach(function(e) {
                            t < e && (N.virtual.cache[e - 1] = N.virtual.cache[e], N.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete N.virtual.cache[e])
                        })), N.virtual.slides.splice(t[a], 1), t[a] < e && (e -= 1), e = Math.max(e, 0);
                    else N.params.virtual.cache && (delete N.virtual.cache[t], Object.keys(N.virtual.cache).forEach(function(e) {
                        t < e && (N.virtual.cache[e - 1] = N.virtual.cache[e], N.virtual.cache[e - 1].setAttribute("data-swiper-slide-index", e - 1), delete N.virtual.cache[e])
                    })), N.virtual.slides.splice(t, 1), t < e && (e -= 1), e = Math.max(e, 0);
                    o(!0), N.slideTo(e, 0)
                }
            },
            removeAllSlides: function() {
                N.virtual.slides = [], N.params.virtual.cache && (N.virtual.cache = {}), o(!0), N.slideTo(0, 0)
            },
            update: o
        })
    }, function(e) {
        var E = e.swiper,
            t = e.extendParams,
            a = e.on,
            x = e.emit,
            S = L(),
            T = k();

        function i(e) {
            if (E.enabled) {
                var t = E.rtlTranslate,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode,
                    r = E.params.keyboard.pageUpDown,
                    s = r && 33 === i,
                    n = r && 34 === i,
                    o = 37 === i,
                    l = 39 === i,
                    c = 38 === i,
                    d = 40 === i;
                if (!E.allowSlideNext && (E.isHorizontal() && l || E.isVertical() && d || n)) return !1;
                if (!E.allowSlidePrev && (E.isHorizontal() && o || E.isVertical() && c || s)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || S.activeElement && S.activeElement.nodeName && ("input" === S.activeElement.nodeName.toLowerCase() || "textarea" === S.activeElement.nodeName.toLowerCase()))) {
                    if (E.params.keyboard.onlyInViewport && (s || n || o || l || c || d)) {
                        var u = !1;
                        if (0 < N(E.el, ".".concat(E.params.slideClass, ", swiper-slide")).length && 0 === N(E.el, ".".concat(E.params.slideActiveClass)).length) return;
                        var p = E.el,
                            f = p.clientWidth,
                            h = p.clientHeight,
                            v = T.innerWidth,
                            m = T.innerHeight,
                            g = _(p);
                        t && (g.left -= p.scrollLeft);
                        for (var b = [
                                [g.left, g.top],
                                [g.left + f, g.top],
                                [g.left, g.top + h],
                                [g.left + f, g.top + h]
                            ], y = 0; y < b.length; y += 1) {
                            var w = b[y];
                            if (0 <= w[0] && w[0] <= v && 0 <= w[1] && w[1] <= m) {
                                if (0 === w[0] && 0 === w[1]) continue;
                                u = !0
                            }
                        }
                        if (!u) return
                    }
                    E.isHorizontal() ? ((s || n || o || l) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((n || l) && !t || (s || o) && t) && E.slideNext(), ((s || o) && !t || (n || l) && t) && E.slidePrev()) : ((s || n || c || d) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (n || d) && E.slideNext(), (s || c) && E.slidePrev()), x("keyPress", i)
                }
            }
        }

        function r() {
            E.keyboard.enabled || (S.addEventListener("keydown", i), E.keyboard.enabled = !0)
        }

        function s() {
            E.keyboard.enabled && (S.removeEventListener("keydown", i), E.keyboard.enabled = !1)
        }
        t({
            keyboard: {
                enabled: !(E.keyboard = {
                    enabled: !1
                }),
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), a("init", function() {
            E.params.keyboard.enabled && r()
        }), a("destroy", function() {
            E.keyboard.enabled && s()
        }), Object.assign(E.keyboard, {
            enable: r,
            disable: s
        })
    }, function(e) {
        var T, M = e.swiper,
            t = e.extendParams,
            a = e.on,
            C = e.emit,
            i = k();
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }), M.mousewheel = {
            enabled: !1
        };
        var A, r = z(),
            L = [];

        function s() {
            M.enabled && (M.mouseEntered = !0)
        }

        function n() {
            M.enabled && (M.mouseEntered = !1)
        }

        function O(e) {
            return !(M.params.mousewheel.thresholdDelta && e.delta < M.params.mousewheel.thresholdDelta || M.params.mousewheel.thresholdTime && z() - r < M.params.mousewheel.thresholdTime || !(6 <= e.delta && z() - r < 60) && (e.direction < 0 ? M.isEnd && !M.params.loop || M.animating || (M.slideNext(), C("scroll", e.raw)) : M.isBeginning && !M.params.loop || M.animating || (M.slidePrev(), C("scroll", e.raw)), r = (new i.Date).getTime(), 1))
        }

        function o(e) {
            var t = e;
            if (M.enabled && !e.target.closest(".".concat(M.params.mousewheel.noMousewheelClass))) {
                var a = M.params.mousewheel;
                M.params.cssMode && t.preventDefault();
                var i = M.el;
                "container" !== M.params.mousewheel.eventsTarget && (i = document.querySelector(M.params.mousewheel.eventsTarget));
                var r = i && i.contains(t.target);
                if (!M.mouseEntered && !r && !a.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s, n, o, l, c, d = 0,
                    u = M.rtlTranslate ? -1 : 1,
                    p = (c = l = o = n = 0, "detail" in (s = t) && (o = s.detail), "wheelDelta" in s && (o = -s.wheelDelta / 120), "wheelDeltaY" in s && (o = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (n = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (n = o, o = 0), l = 10 * n, c = 10 * o, "deltaY" in s && (c = s.deltaY), "deltaX" in s && (l = s.deltaX), s.shiftKey && !l && (l = c, c = 0), (l || c) && s.deltaMode && (1 === s.deltaMode ? (l *= 40, c *= 40) : (l *= 800, c *= 800)), l && !n && (n = l < 1 ? -1 : 1), c && !o && (o = c < 1 ? -1 : 1), {
                        spinX: n,
                        spinY: o,
                        pixelX: l,
                        pixelY: c
                    });
                if (a.forceToAxis)
                    if (M.isHorizontal()) {
                        if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
                        d = -p.pixelX * u
                    } else {
                        if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
                        d = -p.pixelY
                    }
                else d = Math.abs(p.pixelX) > Math.abs(p.pixelY) ? -p.pixelX * u : -p.pixelY;
                if (0 === d) return !0;
                a.invert && (d = -d);
                var f = M.getTranslate() + d * a.sensitivity;
                if (f >= M.minTranslate() && (f = M.minTranslate()), f <= M.maxTranslate() && (f = M.maxTranslate()), (!!M.params.loop || !(f === M.minTranslate() || f === M.maxTranslate())) && M.params.nested && t.stopPropagation(), M.params.freeMode && M.params.freeMode.enabled) {
                    var h = {
                            time: z(),
                            delta: Math.abs(d),
                            direction: Math.sign(d)
                        },
                        v = A && h.time < A.time + 500 && h.delta <= A.delta && h.direction === A.direction;
                    if (!v) {
                        A = void 0;
                        var m = M.getTranslate() + d * a.sensitivity,
                            g = M.isBeginning,
                            b = M.isEnd;
                        if (m >= M.minTranslate() && (m = M.minTranslate()), m <= M.maxTranslate() && (m = M.maxTranslate()), M.setTransition(0), M.setTranslate(m), M.updateProgress(), M.updateActiveIndex(), M.updateSlidesClasses(), (!g && M.isBeginning || !b && M.isEnd) && M.updateSlidesClasses(), M.params.loop && M.loopFix({
                                direction: h.direction < 0 ? "next" : "prev",
                                byMousewheel: !0
                            }), M.params.freeMode.sticky) {
                            clearTimeout(T), T = void 0, 15 <= L.length && L.shift();
                            var y = L.length ? L[L.length - 1] : void 0,
                                w = L[0];
                            if (L.push(h), y && (h.delta > y.delta || h.direction !== y.direction)) L.splice(0);
                            else if (15 <= L.length && h.time - w.time < 500 && 1 <= w.delta - h.delta && h.delta <= 6) {
                                var E = 0 < d ? .8 : .2;
                                A = h, L.splice(0), T = P(function() {
                                    M.slideToClosest(M.params.speed, !0, void 0, E)
                                }, 0)
                            }
                            T || (T = P(function() {
                                A = h, L.splice(0), M.slideToClosest(M.params.speed, !0, void 0, .5)
                            }, 500))
                        }
                        if (v || C("scroll", t), M.params.autoplay && M.params.autoplayDisableOnInteraction && M.autoplay.stop(), a.releaseOnEdges && (m === M.minTranslate() || m === M.maxTranslate())) return !0
                    }
                } else {
                    var x = {
                        time: z(),
                        delta: Math.abs(d),
                        direction: Math.sign(d),
                        raw: e
                    };
                    2 <= L.length && L.shift();
                    var S = L.length ? L[L.length - 1] : void 0;
                    if (L.push(x), S ? (x.direction !== S.direction || x.delta > S.delta || x.time > S.time + 150) && O(x) : O(x), function(e) {
                            var t = M.params.mousewheel;
                            if (e.direction < 0) {
                                if (M.isEnd && !M.params.loop && t.releaseOnEdges) return !0
                            } else if (M.isBeginning && !M.params.loop && t.releaseOnEdges) return !0;
                            return !1
                        }(x)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            }
        }

        function l(e) {
            var t = M.el;
            "container" !== M.params.mousewheel.eventsTarget && (t = document.querySelector(M.params.mousewheel.eventsTarget)), t[e]("mouseenter", s), t[e]("mouseleave", n), t[e]("wheel", o)
        }

        function c() {
            return M.params.cssMode ? (M.wrapperEl.removeEventListener("wheel", o), !0) : !M.mousewheel.enabled && (l("addEventListener"), M.mousewheel.enabled = !0)
        }

        function d() {
            return M.params.cssMode ? (M.wrapperEl.addEventListener(event, o), !0) : !!M.mousewheel.enabled && (l("removeEventListener"), !(M.mousewheel.enabled = !1))
        }
        a("init", function() {
            !M.params.mousewheel.enabled && M.params.cssMode && d(), M.params.mousewheel.enabled && c()
        }), a("destroy", function() {
            M.params.cssMode && c(), M.mousewheel.enabled && d()
        }), Object.assign(M.mousewheel, {
            enable: c,
            disable: d
        })
    }, function(e) {
        var c = e.swiper,
            t = e.extendParams,
            a = e.on,
            d = e.emit;

        function r(e) {
            var t;
            return e && "string" == typeof e && c.isElement && (t = c.el.querySelector(e)) ? t : (e && ("string" == typeof e && (t = _toConsumableArray(document.querySelectorAll(e))), c.params.uniqueNavElements && "string" == typeof e && t && 1 < t.length && 1 === c.el.querySelectorAll(e).length ? t = c.el.querySelector(e) : t && 1 === t.length && (t = t[0])), e && !t ? e : t)
        }

        function i(e, a) {
            var i = c.params.navigation;
            (e = O(e)).forEach(function(e) {
                var t;
                e && ((t = e.classList)[a ? "add" : "remove"].apply(t, _toConsumableArray(i.disabledClass.split(" "))), "BUTTON" === e.tagName && (e.disabled = a), c.params.watchOverflow && c.enabled && e.classList[c.isLocked ? "add" : "remove"](i.lockClass))
            })
        }

        function s() {
            var e = c.navigation,
                t = e.nextEl,
                a = e.prevEl;
            if (c.params.loop) return i(a, !1), void i(t, !1);
            i(a, c.isBeginning && !c.params.rewind), i(t, c.isEnd && !c.params.rewind)
        }

        function n(e) {
            e.preventDefault(), (!c.isBeginning || c.params.loop || c.params.rewind) && (c.slidePrev(), d("navigationPrev"))
        }

        function o(e) {
            e.preventDefault(), (!c.isEnd || c.params.loop || c.params.rewind) && (c.slideNext(), d("navigationNext"))
        }

        function l() {
            var i = c.params.navigation;
            if (c.params.navigation = G(c, c.originalParams.navigation, c.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), i.nextEl || i.prevEl) {
                var e = r(i.nextEl),
                    t = r(i.prevEl);
                Object.assign(c.navigation, {
                    nextEl: e,
                    prevEl: t
                }), e = O(e), t = O(t);
                var a = function(e, t) {
                    var a;
                    e && e.addEventListener("click", "next" === t ? o : n), !c.enabled && e && (a = e.classList).add.apply(a, _toConsumableArray(i.lockClass.split(" ")))
                };
                e.forEach(function(e) {
                    return a(e, "next")
                }), t.forEach(function(e) {
                    return a(e, "prev")
                })
            }
        }

        function u() {
            var e = c.navigation,
                t = e.nextEl,
                a = e.prevEl;
            t = O(t), a = O(a);
            var i = function(e, t) {
                var a;
                e.removeEventListener("click", "next" === t ? o : n), (a = e.classList).remove.apply(a, _toConsumableArray(c.params.navigation.disabledClass.split(" ")))
            };
            t.forEach(function(e) {
                return i(e, "next")
            }), a.forEach(function(e) {
                return i(e, "prev")
            })
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), c.navigation = {
            nextEl: null,
            prevEl: null
        }, a("init", function() {
            !1 === c.params.navigation.enabled ? p() : (l(), s())
        }), a("toEdge fromEdge lock unlock", function() {
            s()
        }), a("destroy", function() {
            u()
        }), a("enable disable", function() {
            var e = c.navigation,
                t = e.nextEl,
                a = e.prevEl;
            t = O(t), a = O(a), c.enabled ? s() : [].concat(_toConsumableArray(t), _toConsumableArray(a)).filter(function(e) {
                return !!e
            }).forEach(function(e) {
                return e.classList.add(c.params.navigation.lockClass)
            })
        }), a("click", function(e, t) {
            var a = c.navigation,
                i = a.nextEl,
                r = a.prevEl;
            i = O(i), r = O(r);
            var s = t.target,
                n = r.includes(s) || i.includes(s);
            if (c.isElement && !n) {
                var o = t.path || t.composedPath && t.composedPath();
                o && (n = o.find(function(e) {
                    return i.includes(e) || r.includes(e)
                }))
            }
            if (c.params.navigation.hideOnClick && !n) {
                if (c.pagination && c.params.pagination && c.params.pagination.clickable && (c.pagination.el === s || c.pagination.el.contains(s))) return;
                var l;
                i.length ? l = i[0].classList.contains(c.params.navigation.hiddenClass) : r.length && (l = r[0].classList.contains(c.params.navigation.hiddenClass)), d(!0 === l ? "navigationShow" : "navigationHide"), [].concat(_toConsumableArray(i), _toConsumableArray(r)).filter(function(e) {
                    return !!e
                }).forEach(function(e) {
                    return e.classList.toggle(c.params.navigation.hiddenClass)
                })
            }
        });
        var p = function() {
            var e;
            (e = c.el.classList).add.apply(e, _toConsumableArray(c.params.navigation.navigationDisabledClass.split(" "))), u()
        };
        Object.assign(c.navigation, {
            enable: function() {
                var e;
                (e = c.el.classList).remove.apply(e, _toConsumableArray(c.params.navigation.navigationDisabledClass.split(" "))), l(), s()
            },
            disable: p,
            update: s,
            init: l,
            destroy: u
        })
    }, function(e) {
        var w, E = e.swiper,
            t = e.extendParams,
            a = e.on,
            x = e.emit,
            i = "swiper-pagination";
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "".concat(i, "-bullet"),
                bulletActiveClass: "".concat(i, "-bullet-active"),
                modifierClass: "".concat(i, "-"),
                currentClass: "".concat(i, "-current"),
                totalClass: "".concat(i, "-total"),
                hiddenClass: "".concat(i, "-hidden"),
                progressbarFillClass: "".concat(i, "-progressbar-fill"),
                progressbarOppositeClass: "".concat(i, "-progressbar-opposite"),
                clickableClass: "".concat(i, "-clickable"),
                lockClass: "".concat(i, "-lock"),
                horizontalClass: "".concat(i, "-horizontal"),
                verticalClass: "".concat(i, "-vertical"),
                paginationDisabledClass: "".concat(i, "-disabled")
            }
        }), E.pagination = {
            el: null,
            bullets: []
        };
        var S = 0;

        function T() {
            return !E.params.pagination.el || !E.pagination.el || Array.isArray(E.pagination.el) && 0 === E.pagination.el.length
        }

        function M(e, t) {
            var a = E.params.pagination.bulletActiveClass;
            e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add("".concat(a, "-").concat(t)), (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add("".concat(a, "-").concat(t, "-").concat(t)))
        }

        function r(e) {
            var t = e.target.closest(X(E.params.pagination.bulletClass));
            if (t) {
                e.preventDefault();
                var a = C(t) * E.params.slidesPerGroup;
                if (E.params.loop) {
                    if (E.realIndex === a) return;
                    E.slideToLoop(a)
                } else E.slideTo(a)
            }
        }

        function s() {
            var e = E.rtl,
                n = E.params.pagination;
            if (!T()) {
                var o, t, a = E.pagination.el;
                a = O(a);
                var i = E.virtual && E.params.virtual.enabled ? E.virtual.slides.length : E.slides.length,
                    l = E.params.loop ? Math.ceil(i / E.params.slidesPerGroup) : E.snapGrid.length;
                if (E.params.loop ? (t = E.previousRealIndex || 0, o = 1 < E.params.slidesPerGroup ? Math.floor(E.realIndex / E.params.slidesPerGroup) : E.realIndex) : void 0 !== E.snapIndex ? (o = E.snapIndex, t = E.previousSnapIndex) : (t = E.previousIndex || 0, o = E.activeIndex || 0), "bullets" === n.type && E.pagination.bullets && 0 < E.pagination.bullets.length) {
                    var r, s, c, d = E.pagination.bullets;
                    if (n.dynamicBullets && (w = ne(d[0], E.isHorizontal() ? "width" : "height", !0), a.forEach(function(e) {
                            e.style[E.isHorizontal() ? "width" : "height"] = w * (n.dynamicMainBullets + 4) + "px"
                        }), 1 < n.dynamicMainBullets && void 0 !== t && ((S += o - (t || 0)) > n.dynamicMainBullets - 1 ? S = n.dynamicMainBullets - 1 : S < 0 && (S = 0)), r = Math.max(o - S, 0), c = ((s = r + (Math.min(d.length, n.dynamicMainBullets) - 1)) + r) / 2), d.forEach(function(e) {
                            var t, a = _toConsumableArray(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function(e) {
                                return "".concat(n.bulletActiveClass).concat(e)
                            })).map(function(e) {
                                return "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                            }).flat();
                            (t = e.classList).remove.apply(t, _toConsumableArray(a))
                        }), 1 < a.length) d.forEach(function(e) {
                        var t, a, i = C(e);
                        i === o ? (t = e.classList).add.apply(t, _toConsumableArray(n.bulletActiveClass.split(" "))) : E.isElement && e.setAttribute("part", "bullet"), n.dynamicBullets && (r <= i && i <= s && (a = e.classList).add.apply(a, _toConsumableArray("".concat(n.bulletActiveClass, "-main").split(" "))), i === r && M(e, "prev"), i === s && M(e, "next"))
                    });
                    else {
                        var u, p = d[o];
                        if (p && (u = p.classList).add.apply(u, _toConsumableArray(n.bulletActiveClass.split(" "))), E.isElement && d.forEach(function(e, t) {
                                e.setAttribute("part", t === o ? "bullet-active" : "bullet")
                            }), n.dynamicBullets) {
                            for (var f = d[r], h = d[s], v = r; v <= s; v += 1) {
                                var m;
                                d[v] && (m = d[v].classList).add.apply(m, _toConsumableArray("".concat(n.bulletActiveClass, "-main").split(" ")))
                            }
                            M(f, "prev"), M(h, "next")
                        }
                    }
                    if (n.dynamicBullets) {
                        var g = Math.min(d.length, n.dynamicMainBullets + 4),
                            b = (w * g - w) / 2 - c * w,
                            y = e ? "right" : "left";
                        d.forEach(function(e) {
                            e.style[E.isHorizontal() ? y : "top"] = "".concat(b, "px")
                        })
                    }
                }
                a.forEach(function(e, t) {
                    if ("fraction" === n.type && (e.querySelectorAll(X(n.currentClass)).forEach(function(e) {
                            e.textContent = n.formatFractionCurrent(o + 1)
                        }), e.querySelectorAll(X(n.totalClass)).forEach(function(e) {
                            e.textContent = n.formatFractionTotal(l)
                        })), "progressbar" === n.type) {
                        var a;
                        a = n.progressbarOpposite ? E.isHorizontal() ? "vertical" : "horizontal" : E.isHorizontal() ? "horizontal" : "vertical";
                        var i = (o + 1) / l,
                            r = 1,
                            s = 1;
                        "horizontal" === a ? r = i : s = i, e.querySelectorAll(X(n.progressbarFillClass)).forEach(function(e) {
                            e.style.transform = "translate3d(0,0,0) scaleX(".concat(r, ") scaleY(").concat(s, ")"), e.style.transitionDuration = "".concat(E.params.speed, "ms")
                        })
                    }
                    "custom" === n.type && n.renderCustom ? (e.innerHTML = n.renderCustom(E, o + 1, l), 0 === t && x("paginationRender", e)) : (0 === t && x("paginationRender", e), x("paginationUpdate", e)), E.params.watchOverflow && E.enabled && e.classList[E.isLocked ? "add" : "remove"](n.lockClass)
                })
            }
        }

        function n() {
            var a = E.params.pagination;
            if (!T()) {
                var e = E.virtual && E.params.virtual.enabled ? E.virtual.slides.length : E.grid && 1 < E.params.grid.rows ? E.slides.length / Math.ceil(E.params.grid.rows) : E.slides.length,
                    t = E.pagination.el;
                t = O(t);
                var i = "";
                if ("bullets" === a.type) {
                    var r = E.params.loop ? Math.ceil(e / E.params.slidesPerGroup) : E.snapGrid.length;
                    E.params.freeMode && E.params.freeMode.enabled && e < r && (r = e);
                    for (var s = 0; s < r; s += 1) a.renderBullet ? i += a.renderBullet.call(E, s, a.bulletClass) : i += "<".concat(a.bulletElement, " ").concat(E.isElement ? 'part="bullet"' : "", ' class="').concat(a.bulletClass, '"></').concat(a.bulletElement, ">")
                }
                "fraction" === a.type && (i = a.renderFraction ? a.renderFraction.call(E, a.currentClass, a.totalClass) : '<span class="'.concat(a.currentClass, '"></span> / <span class="').concat(a.totalClass, '"></span>')), "progressbar" === a.type && (i = a.renderProgressbar ? a.renderProgressbar.call(E, a.progressbarFillClass) : '<span class="'.concat(a.progressbarFillClass, '"></span>')), E.pagination.bullets = [], t.forEach(function(e) {
                    var t;
                    "custom" !== a.type && (e.innerHTML = i || ""), "bullets" === a.type && (t = E.pagination.bullets).push.apply(t, _toConsumableArray(e.querySelectorAll(X(a.bulletClass))))
                }), "custom" !== a.type && x("paginationRender", t[0])
            }
        }

        function o() {
            E.params.pagination = G(E, E.originalParams.pagination, E.params.pagination, {
                el: "swiper-pagination"
            });
            var e, a = E.params.pagination;
            a.el && ("string" == typeof a.el && E.isElement && (e = E.el.querySelector(a.el)), e || "string" != typeof a.el || (e = _toConsumableArray(document.querySelectorAll(a.el))), e || (e = a.el), e && 0 !== e.length && (E.params.uniqueNavElements && "string" == typeof a.el && Array.isArray(e) && 1 < e.length && (1 < (e = _toConsumableArray(E.el.querySelectorAll(a.el))).length && (e = e.filter(function(e) {
                return N(e, ".swiper")[0] === E.el
            })[0])), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(E.pagination, {
                el: e
            }), (e = O(e)).forEach(function(e) {
                var t;
                "bullets" === a.type && a.clickable && (t = e.classList).add.apply(t, _toConsumableArray((a.clickableClass || "").split(" "))), e.classList.add(a.modifierClass + a.type), e.classList.add(E.isHorizontal() ? a.horizontalClass : a.verticalClass), "bullets" === a.type && a.dynamicBullets && (e.classList.add("".concat(a.modifierClass).concat(a.type, "-dynamic")), S = 0, a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)), "progressbar" === a.type && a.progressbarOpposite && e.classList.add(a.progressbarOppositeClass), a.clickable && e.addEventListener("click", r), E.enabled || e.classList.add(a.lockClass)
            })))
        }

        function l() {
            var a = E.params.pagination;
            if (!T()) {
                var e = E.pagination.el;
                e && (e = O(e)).forEach(function(e) {
                    var t;
                    e.classList.remove(a.hiddenClass), e.classList.remove(a.modifierClass + a.type), e.classList.remove(E.isHorizontal() ? a.horizontalClass : a.verticalClass), a.clickable && ((t = e.classList).remove.apply(t, _toConsumableArray((a.clickableClass || "").split(" "))), e.removeEventListener("click", r))
                }), E.pagination.bullets && E.pagination.bullets.forEach(function(e) {
                    var t;
                    return (t = e.classList).remove.apply(t, _toConsumableArray(a.bulletActiveClass.split(" ")))
                })
            }
        }
        a("changeDirection", function() {
            if (E.pagination && E.pagination.el) {
                var t = E.params.pagination,
                    e = E.pagination.el;
                (e = O(e)).forEach(function(e) {
                    e.classList.remove(t.horizontalClass, t.verticalClass), e.classList.add(E.isHorizontal() ? t.horizontalClass : t.verticalClass)
                })
            }
        }), a("init", function() {
            !1 === E.params.pagination.enabled ? c() : (o(), n(), s())
        }), a("activeIndexChange", function() {
            void 0 === E.snapIndex && s()
        }), a("snapIndexChange", function() {
            s()
        }), a("snapGridLengthChange", function() {
            n(), s()
        }), a("destroy", function() {
            l()
        }), a("enable disable", function() {
            var e = E.pagination.el;
            e && (e = O(e)).forEach(function(e) {
                return e.classList[E.enabled ? "remove" : "add"](E.params.pagination.lockClass)
            })
        }), a("lock unlock", function() {
            s()
        }), a("click", function(e, t) {
            var a = t.target,
                i = O(E.pagination.el);
            if (E.params.pagination.el && E.params.pagination.hideOnClick && i && 0 < i.length && !a.classList.contains(E.params.pagination.bulletClass)) {
                if (E.navigation && (E.navigation.nextEl && a === E.navigation.nextEl || E.navigation.prevEl && a === E.navigation.prevEl)) return;
                var r = i[0].classList.contains(E.params.pagination.hiddenClass);
                x(!0 === r ? "paginationShow" : "paginationHide"), i.forEach(function(e) {
                    return e.classList.toggle(E.params.pagination.hiddenClass)
                })
            }
        });
        var c = function() {
            E.el.classList.add(E.params.pagination.paginationDisabledClass);
            var e = E.pagination.el;
            e && (e = O(e)).forEach(function(e) {
                return e.classList.add(E.params.pagination.paginationDisabledClass)
            }), l()
        };
        Object.assign(E.pagination, {
            enable: function() {
                E.el.classList.remove(E.params.pagination.paginationDisabledClass);
                var e = E.pagination.el;
                e && (e = O(e)).forEach(function(e) {
                    return e.classList.remove(E.params.pagination.paginationDisabledClass)
                }), o(), n(), s()
            },
            disable: c,
            render: n,
            update: s,
            init: o,
            destroy: l
        })
    }, function(e) {
        var n, l, c, i, d = e.swiper,
            t = e.extendParams,
            a = e.on,
            o = e.emit,
            u = L(),
            p = !1,
            f = null,
            h = null;

        function r() {
            if (d.params.scrollbar.el && d.scrollbar.el) {
                var e = d.scrollbar,
                    t = d.rtlTranslate,
                    a = e.dragEl,
                    i = e.el,
                    r = d.params.scrollbar,
                    s = d.params.loop ? d.progressLoop : d.progress,
                    n = l,
                    o = (c - l) * s;
                t ? 0 < (o = -o) ? (n = l - o, o = 0) : c < -o + l && (n = c + o) : o < 0 ? (n = l + o, o = 0) : c < o + l && (n = c - o), d.isHorizontal() ? (a.style.transform = "translate3d(".concat(o, "px, 0, 0)"), a.style.width = "".concat(n, "px")) : (a.style.transform = "translate3d(0px, ".concat(o, "px, 0)"), a.style.height = "".concat(n, "px")), r.hide && (clearTimeout(f), i.style.opacity = 1, f = setTimeout(function() {
                    i.style.opacity = 0, i.style.transitionDuration = "400ms"
                }, 1e3))
            }
        }

        function s() {
            if (d.params.scrollbar.el && d.scrollbar.el) {
                var e = d.scrollbar,
                    t = e.dragEl,
                    a = e.el;
                t.style.width = "", t.style.height = "", c = d.isHorizontal() ? a.offsetWidth : a.offsetHeight, i = d.size / (d.virtualSize + d.params.slidesOffsetBefore - (d.params.centeredSlides ? d.snapGrid[0] : 0)), l = "auto" === d.params.scrollbar.dragSize ? c * i : parseInt(d.params.scrollbar.dragSize, 10), d.isHorizontal() ? t.style.width = "".concat(l, "px") : t.style.height = "".concat(l, "px"), a.style.display = 1 <= i ? "none" : "", d.params.scrollbar.hide && (a.style.opacity = 0), d.params.watchOverflow && d.enabled && e.el.classList[d.isLocked ? "add" : "remove"](d.params.scrollbar.lockClass)
            }
        }

        function v(e) {
            return d.isHorizontal() ? e.clientX : e.clientY
        }

        function m(e) {
            var t, a = d.scrollbar,
                i = d.rtlTranslate,
                r = a.el;
            t = (v(e) - _(r)[d.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (c - l), t = Math.max(Math.min(t, 1), 0), i && (t = 1 - t);
            var s = d.minTranslate() + (d.maxTranslate() - d.minTranslate()) * t;
            d.updateProgress(s), d.setTranslate(s), d.updateActiveIndex(), d.updateSlidesClasses()
        }

        function g(e) {
            var t = d.params.scrollbar,
                a = d.scrollbar,
                i = d.wrapperEl,
                r = a.el,
                s = a.dragEl;
            p = !0, n = e.target === s ? v(e) - e.target.getBoundingClientRect()[d.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", s.style.transitionDuration = "100ms", m(e), clearTimeout(h), r.style.transitionDuration = "0ms", t.hide && (r.style.opacity = 1), d.params.cssMode && (d.wrapperEl.style["scroll-snap-type"] = "none"), o("scrollbarDragStart", e)
        }

        function b(e) {
            var t = d.scrollbar,
                a = d.wrapperEl,
                i = t.el,
                r = t.dragEl;
            p && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, m(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", o("scrollbarDragMove", e))
        }

        function y(e) {
            var t = d.params.scrollbar,
                a = d.scrollbar,
                i = d.wrapperEl,
                r = a.el;
            p && (p = !1, d.params.cssMode && (d.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), t.hide && (clearTimeout(h), h = P(function() {
                r.style.opacity = 0, r.style.transitionDuration = "400ms"
            }, 1e3)), o("scrollbarDragEnd", e), t.snapOnRelease && d.slideToClosest())
        }

        function w(e) {
            var t = d.scrollbar,
                a = d.params,
                i = t.el;
            if (i) {
                var r = i,
                    s = !!a.passiveListeners && {
                        passive: !1,
                        capture: !1
                    },
                    n = !!a.passiveListeners && {
                        passive: !0,
                        capture: !1
                    };
                if (r) {
                    var o = "on" === e ? "addEventListener" : "removeEventListener";
                    r[o]("pointerdown", g, s), u[o]("pointermove", b, s), u[o]("pointerup", y, n)
                }
            }
        }

        function E() {
            var e, t = d.scrollbar,
                a = d.el;
            d.params.scrollbar = G(d, d.originalParams.scrollbar, d.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            var i = d.params.scrollbar;
            if (i.el) {
                var r, s;
                if ("string" == typeof i.el && d.isElement && (r = d.el.querySelector(i.el)), r || "string" != typeof i.el) r || (r = i.el);
                else if (!(r = u.querySelectorAll(i.el)).length) return;
                d.params.uniqueNavElements && "string" == typeof i.el && 1 < r.length && 1 === a.querySelectorAll(i.el).length && (r = a.querySelector(i.el)), 0 < r.length && (r = r[0]), r.classList.add(d.isHorizontal() ? i.horizontalClass : i.verticalClass), r && ((s = r.querySelector(X(d.params.scrollbar.dragClass))) || (s = D("div", d.params.scrollbar.dragClass), r.append(s))), Object.assign(t, {
                    el: r,
                    dragEl: s
                }), i.draggable && d.params.scrollbar.el && d.scrollbar.el && w("on"), r && (e = r.classList)[d.enabled ? "remove" : "add"].apply(e, _toConsumableArray(T(d.params.scrollbar.lockClass)))
            }
        }

        function x() {
            var e, t = d.params.scrollbar,
                a = d.scrollbar.el;
            a && (e = a.classList).remove.apply(e, _toConsumableArray(T(d.isHorizontal() ? t.horizontalClass : t.verticalClass))), d.params.scrollbar.el && d.scrollbar.el && w("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), d.scrollbar = {
            el: null,
            dragEl: null
        }, a("changeDirection", function() {
            if (d.scrollbar && d.scrollbar.el) {
                var t = d.params.scrollbar,
                    e = d.scrollbar.el;
                (e = O(e)).forEach(function(e) {
                    e.classList.remove(t.horizontalClass, t.verticalClass), e.classList.add(d.isHorizontal() ? t.horizontalClass : t.verticalClass)
                })
            }
        }), a("init", function() {
            !1 === d.params.scrollbar.enabled ? S() : (E(), s(), r())
        }), a("update resize observerUpdate lock unlock changeDirection", function() {
            s()
        }), a("setTranslate", function() {
            r()
        }), a("setTransition", function(e, t) {
            var a;
            a = t, d.params.scrollbar.el && d.scrollbar.el && (d.scrollbar.dragEl.style.transitionDuration = "".concat(a, "ms"))
        }), a("enable disable", function() {
            var e, t = d.scrollbar.el;
            t && (e = t.classList)[d.enabled ? "remove" : "add"].apply(e, _toConsumableArray(T(d.params.scrollbar.lockClass)))
        }), a("destroy", function() {
            x()
        });
        var S = function() {
            var e, t;
            (e = d.el.classList).add.apply(e, _toConsumableArray(T(d.params.scrollbar.scrollbarDisabledClass))), d.scrollbar.el && (t = d.scrollbar.el.classList).add.apply(t, _toConsumableArray(T(d.params.scrollbar.scrollbarDisabledClass))), x()
        };
        Object.assign(d.scrollbar, {
            enable: function() {
                var e, t;
                (e = d.el.classList).remove.apply(e, _toConsumableArray(T(d.params.scrollbar.scrollbarDisabledClass))), d.scrollbar.el && (t = d.scrollbar.el.classList).remove.apply(t, _toConsumableArray(T(d.params.scrollbar.scrollbarDisabledClass))), E(), s(), r()
            },
            disable: S,
            updateSize: s,
            setTranslate: r,
            init: E,
            destroy: x
        })
    }, function(e) {
        var u = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            parallax: {
                enabled: !1
            }
        });
        var s = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            n = function(e, t) {
                var a = u.rtl ? -1 : 1,
                    i = e.getAttribute("data-swiper-parallax") || "0",
                    r = e.getAttribute("data-swiper-parallax-x"),
                    s = e.getAttribute("data-swiper-parallax-y"),
                    n = e.getAttribute("data-swiper-parallax-scale"),
                    o = e.getAttribute("data-swiper-parallax-opacity"),
                    l = e.getAttribute("data-swiper-parallax-rotate");
                if (r || s ? (r = r || "0", s = s || "0") : u.isHorizontal() ? (r = i, s = "0") : (s = i, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t * a + "%" : r * t * a + "px", s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t + "%" : s * t + "px", null != o) {
                    var c = o - (o - 1) * (1 - Math.abs(t));
                    e.style.opacity = c
                }
                var d = "translate3d(".concat(r, ", ").concat(s, ", 0px)");
                null != n && (d += " scale(".concat(n - (n - 1) * (1 - Math.abs(t)), ")")), l && null != l && (d += " rotate(".concat(l * t * -1, "deg)")), e.style.transform = d
            },
            i = function() {
                var e = u.el,
                    t = u.slides,
                    i = u.progress,
                    r = u.snapGrid,
                    a = (u.isElement, re(e, s));
                u.isElement && a.push.apply(a, _toConsumableArray(re(u.hostEl, s))), a.forEach(function(e) {
                    n(e, i)
                }), t.forEach(function(e, t) {
                    var a = e.progress;
                    1 < u.params.slidesPerGroup && "auto" !== u.params.slidesPerView && (a += Math.ceil(t / 2) - i * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), e.querySelectorAll("".concat(s, ", [data-swiper-parallax-rotate]")).forEach(function(e) {
                        n(e, a)
                    })
                })
            };
        a("beforeInit", function() {
            u.params.parallax.enabled && (u.params.watchSlidesProgress = !0, u.originalParams.watchSlidesProgress = !0)
        }), a("init", function() {
            u.params.parallax.enabled && i()
        }), a("setTranslate", function() {
            u.params.parallax.enabled && i()
        }), a("setTransition", function(e, t) {
            u.params.parallax.enabled && function(a) {
                void 0 === a && (a = u.params.speed);
                var e = u.el,
                    t = u.hostEl,
                    i = _toConsumableArray(e.querySelectorAll(s));
                u.isElement && i.push.apply(i, _toConsumableArray(t.querySelectorAll(s))), i.forEach(function(e) {
                    var t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || a;
                    0 === a && (t = 0), e.style.transitionDuration = "".concat(t, "ms")
                })
            }(t)
        })
    }, function(e) {
        var x = e.swiper,
            t = e.extendParams,
            a = e.on,
            i = e.emit,
            S = k();
        t({
            zoom: {
                enabled: !1,
                limitToOriginalSize: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), x.zoom = {
            enabled: !1
        };
        var n, o, c, T = 1,
            d = !1,
            u = [],
            M = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            },
            C = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            p = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            },
            r = 1;

        function l() {
            if (u.length < 2) return 1;
            var e = u[0].pageX,
                t = u[0].pageY,
                a = u[1].pageX,
                i = u[1].pageY;
            return Math.sqrt(Math.pow(a - e, 2) + Math.pow(i - t, 2))
        }

        function A() {
            var e = x.params.zoom,
                t = M.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
            if (e.limitToOriginalSize && M.imageEl && M.imageEl.naturalWidth) {
                var a = M.imageEl.naturalWidth / M.imageEl.offsetWidth;
                return Math.min(a, t)
            }
            return t
        }

        function f(t) {
            var e = x.isElement ? "swiper-slide" : ".".concat(x.params.slideClass);
            return !!t.target.matches(e) || 0 < x.slides.filter(function(e) {
                return e.contains(t.target)
            }).length
        }

        function s(e) {
            if ("mouse" === e.pointerType && u.splice(0, u.length), f(e)) {
                var t = x.params.zoom;
                if (o = n = !1, u.push(e), !(u.length < 2)) {
                    if (n = !0, M.scaleStart = l(), !M.slideEl) {
                        M.slideEl = e.target.closest(".".concat(x.params.slideClass, ", swiper-slide")), M.slideEl || (M.slideEl = x.slides[x.activeIndex]);
                        var a = M.slideEl.querySelector(".".concat(t.containerClass));
                        if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), M.imageEl = a, M.imageWrapEl = a ? N(M.imageEl, ".".concat(t.containerClass))[0] : void 0, !M.imageWrapEl) return void(M.imageEl = void 0);
                        M.maxRatio = A()
                    }
                    if (M.imageEl) {
                        var i = _slicedToArray(function() {
                                if (u.length < 2) return {
                                    x: null,
                                    y: null
                                };
                                var e = M.imageEl.getBoundingClientRect();
                                return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - S.scrollX) / T, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - S.scrollY) / T]
                            }(), 2),
                            r = i[0],
                            s = i[1];
                        M.originX = r, M.originY = s, M.imageEl.style.transitionDuration = "0ms"
                    }
                    d = !0
                }
            }
        }

        function h(t) {
            if (f(t)) {
                var e = x.params.zoom,
                    a = x.zoom,
                    i = u.findIndex(function(e) {
                        return e.pointerId === t.pointerId
                    });
                0 <= i && (u[i] = t), u.length < 2 || (o = !0, M.scaleMove = l(), M.imageEl && (a.scale = M.scaleMove / M.scaleStart * T, a.scale > M.maxRatio && (a.scale = M.maxRatio - 1 + Math.pow(a.scale - M.maxRatio + 1, .5)), a.scale < e.minRatio && (a.scale = e.minRatio + 1 - Math.pow(e.minRatio - a.scale + 1, .5)), M.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")")))
            }
        }

        function v(t) {
            if (f(t) && ("mouse" !== t.pointerType || "pointerout" !== t.type)) {
                var e = x.params.zoom,
                    a = x.zoom,
                    i = u.findIndex(function(e) {
                        return e.pointerId === t.pointerId
                    });
                0 <= i && u.splice(i, 1), n && o && (o = n = !1, M.imageEl && (a.scale = Math.max(Math.min(a.scale, M.maxRatio), e.minRatio), M.imageEl.style.transitionDuration = "".concat(x.params.speed, "ms"), M.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(a.scale, ")"), T = a.scale, d = !1, 1 < a.scale && M.slideEl ? M.slideEl.classList.add("".concat(e.zoomedSlideClass)) : a.scale <= 1 && M.slideEl && M.slideEl.classList.remove("".concat(e.zoomedSlideClass)), 1 === a.scale && (M.originX = 0, M.originY = 0, M.slideEl = void 0)))
            }
        }

        function m() {
            x.touchEventsData.preventTouchMoveFromPointerMove = !1
        }

        function g(e) {
            if (f(e) && (t = e, a = ".".concat(x.params.zoom.containerClass), t.target.matches(a) || 0 < _toConsumableArray(x.hostEl.querySelectorAll(a)).filter(function(e) {
                    return e.contains(t.target)
                }).length)) {
                var t, a, i = x.zoom;
                if (M.imageEl && C.isTouched && M.slideEl) {
                    C.isMoved || (C.width = M.imageEl.offsetWidth || M.imageEl.clientWidth, C.height = M.imageEl.offsetHeight || M.imageEl.clientHeight, C.startX = I(M.imageWrapEl, "x") || 0, C.startY = I(M.imageWrapEl, "y") || 0, M.slideWidth = M.slideEl.offsetWidth, M.slideHeight = M.slideEl.offsetHeight, M.imageWrapEl.style.transitionDuration = "0ms");
                    var r = C.width * i.scale,
                        s = C.height * i.scale;
                    if (C.minX = Math.min(M.slideWidth / 2 - r / 2, 0), C.maxX = -C.minX, C.minY = Math.min(M.slideHeight / 2 - s / 2, 0), C.maxY = -C.minY, C.touchesCurrent.x = 0 < u.length ? u[0].pageX : e.pageX, C.touchesCurrent.y = 0 < u.length ? u[0].pageY : e.pageY, 5 < Math.max(Math.abs(C.touchesCurrent.x - C.touchesStart.x), Math.abs(C.touchesCurrent.y - C.touchesStart.y)) && (x.allowClick = !1), !C.isMoved && !d) {
                        if (x.isHorizontal() && (Math.floor(C.minX) === Math.floor(C.startX) && C.touchesCurrent.x < C.touchesStart.x || Math.floor(C.maxX) === Math.floor(C.startX) && C.touchesCurrent.x > C.touchesStart.x)) return C.isTouched = !1, void m();
                        if (!x.isHorizontal() && (Math.floor(C.minY) === Math.floor(C.startY) && C.touchesCurrent.y < C.touchesStart.y || Math.floor(C.maxY) === Math.floor(C.startY) && C.touchesCurrent.y > C.touchesStart.y)) return C.isTouched = !1, void m()
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(c), x.touchEventsData.preventTouchMoveFromPointerMove = !0, c = setTimeout(function() {
                        m()
                    }), C.isMoved = !0;
                    var n = (i.scale - T) / (M.maxRatio - x.params.zoom.minRatio),
                        o = M.originX,
                        l = M.originY;
                    C.currentX = C.touchesCurrent.x - C.touchesStart.x + C.startX + n * (C.width - 2 * o), C.currentY = C.touchesCurrent.y - C.touchesStart.y + C.startY + n * (C.height - 2 * l), C.currentX < C.minX && (C.currentX = C.minX + 1 - Math.pow(C.minX - C.currentX + 1, .8)), C.currentX > C.maxX && (C.currentX = C.maxX - 1 + Math.pow(C.currentX - C.maxX + 1, .8)), C.currentY < C.minY && (C.currentY = C.minY + 1 - Math.pow(C.minY - C.currentY + 1, .8)), C.currentY > C.maxY && (C.currentY = C.maxY - 1 + Math.pow(C.currentY - C.maxY + 1, .8)), p.prevPositionX || (p.prevPositionX = C.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = C.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (C.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (C.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(C.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(C.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = C.touchesCurrent.x, p.prevPositionY = C.touchesCurrent.y, p.prevTime = Date.now(), M.imageWrapEl.style.transform = "translate3d(".concat(C.currentX, "px, ").concat(C.currentY, "px,0)")
                }
            }
        }

        function b() {
            var e = x.zoom;
            M.slideEl && x.activeIndex !== x.slides.indexOf(M.slideEl) && (M.imageEl && (M.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), M.imageWrapEl && (M.imageWrapEl.style.transform = "translate3d(0,0,0)"), M.slideEl.classList.remove("".concat(x.params.zoom.zoomedSlideClass)), e.scale = 1, T = 1, M.slideEl = void 0, M.imageEl = void 0, M.imageWrapEl = void 0, M.originX = 0, M.originY = 0)
        }

        function y(e) {
            var t = x.zoom,
                a = x.params.zoom;
            if (!M.slideEl) {
                e && e.target && (M.slideEl = e.target.closest(".".concat(x.params.slideClass, ", swiper-slide"))), M.slideEl || (x.params.virtual && x.params.virtual.enabled && x.virtual ? M.slideEl = re(x.slidesEl, ".".concat(x.params.slideActiveClass))[0] : M.slideEl = x.slides[x.activeIndex]);
                var i = M.slideEl.querySelector(".".concat(a.containerClass));
                i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), M.imageEl = i, M.imageWrapEl = i ? N(M.imageEl, ".".concat(a.containerClass))[0] : void 0
            }
            if (M.imageEl && M.imageWrapEl) {
                var r, s, n, o, l, c, d, u, p, f, h, v, m, g, b, y;
                x.params.cssMode && (x.wrapperEl.style.overflow = "hidden", x.wrapperEl.style.touchAction = "none"), M.slideEl.classList.add("".concat(a.zoomedSlideClass)), s = void 0 === C.touchesStart.x && e ? (r = e.pageX, e.pageY) : (r = C.touchesStart.x, C.touchesStart.y);
                var w = "number" == typeof e ? e : null;
                1 === T && w && (s = r = void 0);
                var E = A();
                t.scale = w || E, T = w || E, !e || 1 === T && w ? c = l = 0 : (b = M.slideEl.offsetWidth, y = M.slideEl.offsetHeight, n = _(M.slideEl).left + S.scrollX + b / 2 - r, o = _(M.slideEl).top + S.scrollY + y / 2 - s, d = M.imageEl.offsetWidth || M.imageEl.clientWidth, u = M.imageEl.offsetHeight || M.imageEl.clientHeight, p = d * t.scale, f = u * t.scale, m = -(h = Math.min(b / 2 - p / 2, 0)), g = -(v = Math.min(y / 2 - f / 2, 0)), (l = n * t.scale) < h && (l = h), m < l && (l = m), (c = o * t.scale) < v && (c = v), g < c && (c = g)), w && 1 === t.scale && (M.originX = 0, M.originY = 0), M.imageWrapEl.style.transitionDuration = "300ms", M.imageWrapEl.style.transform = "translate3d(".concat(l, "px, ").concat(c, "px,0)"), M.imageEl.style.transitionDuration = "300ms", M.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(t.scale, ")")
            }
        }

        function w() {
            var e = x.zoom,
                t = x.params.zoom;
            if (!M.slideEl) {
                x.params.virtual && x.params.virtual.enabled && x.virtual ? M.slideEl = re(x.slidesEl, ".".concat(x.params.slideActiveClass))[0] : M.slideEl = x.slides[x.activeIndex];
                var a = M.slideEl.querySelector(".".concat(t.containerClass));
                a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), M.imageEl = a, M.imageWrapEl = a ? N(M.imageEl, ".".concat(t.containerClass))[0] : void 0
            }
            M.imageEl && M.imageWrapEl && (x.params.cssMode && (x.wrapperEl.style.overflow = "", x.wrapperEl.style.touchAction = ""), e.scale = 1, T = 1, M.imageWrapEl.style.transitionDuration = "300ms", M.imageWrapEl.style.transform = "translate3d(0,0,0)", M.imageEl.style.transitionDuration = "300ms", M.imageEl.style.transform = "translate3d(0,0,0) scale(1)", M.slideEl.classList.remove("".concat(t.zoomedSlideClass)), M.slideEl = void 0, M.originX = 0, M.originY = 0)
        }

        function E(e) {
            var t = x.zoom;
            t.scale && 1 !== t.scale ? w() : y(e)
        }

        function L() {
            return {
                passiveListener: !!x.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !x.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function O() {
            var e = x.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = L(),
                    a = t.passiveListener,
                    i = t.activeListenerWithCapture;
                x.wrapperEl.addEventListener("pointerdown", s, a), x.wrapperEl.addEventListener("pointermove", h, i), ["pointerup", "pointercancel", "pointerout"].forEach(function(e) {
                    x.wrapperEl.addEventListener(e, v, a)
                }), x.wrapperEl.addEventListener("pointermove", g, i)
            }
        }

        function P() {
            var e = x.zoom;
            if (e.enabled) {
                e.enabled = !1;
                var t = L(),
                    a = t.passiveListener,
                    i = t.activeListenerWithCapture;
                x.wrapperEl.removeEventListener("pointerdown", s, a), x.wrapperEl.removeEventListener("pointermove", h, i), ["pointerup", "pointercancel", "pointerout"].forEach(function(e) {
                    x.wrapperEl.removeEventListener(e, v, a)
                }), x.wrapperEl.removeEventListener("pointermove", g, i)
            }
        }
        Object.defineProperty(x.zoom, "scale", {
            get: function() {
                return r
            },
            set: function(e) {
                if (r !== e) {
                    var t = M.imageEl,
                        a = M.slideEl;
                    i("zoomChange", e, t, a)
                }
                r = e
            }
        }), a("init", function() {
            x.params.zoom.enabled && O()
        }), a("destroy", function() {
            P()
        }), a("touchStart", function(e, t) {
            x.zoom.enabled && function(e) {
                var t = x.device;
                if (M.imageEl && !C.isTouched) {
                    t.android && e.cancelable && e.preventDefault(), C.isTouched = !0;
                    var a = 0 < u.length ? u[0] : e;
                    C.touchesStart.x = a.pageX, C.touchesStart.y = a.pageY
                }
            }(t)
        }), a("touchEnd", function(e, t) {
            x.zoom.enabled && function() {
                var e = x.zoom;
                if (M.imageEl) {
                    if (!C.isTouched || !C.isMoved) return C.isTouched = !1, C.isMoved = !1;
                    C.isTouched = !1, C.isMoved = !1;
                    var t = 300,
                        a = 300,
                        i = p.x * t,
                        r = C.currentX + i,
                        s = p.y * a,
                        n = C.currentY + s;
                    0 !== p.x && (t = Math.abs((r - C.currentX) / p.x)), 0 !== p.y && (a = Math.abs((n - C.currentY) / p.y));
                    var o = Math.max(t, a);
                    C.currentX = r, C.currentY = n;
                    var l = C.width * e.scale,
                        c = C.height * e.scale;
                    C.minX = Math.min(M.slideWidth / 2 - l / 2, 0), C.maxX = -C.minX, C.minY = Math.min(M.slideHeight / 2 - c / 2, 0), C.maxY = -C.minY, C.currentX = Math.max(Math.min(C.currentX, C.maxX), C.minX), C.currentY = Math.max(Math.min(C.currentY, C.maxY), C.minY), M.imageWrapEl.style.transitionDuration = "".concat(o, "ms"), M.imageWrapEl.style.transform = "translate3d(".concat(C.currentX, "px, ").concat(C.currentY, "px,0)")
                }
            }()
        }), a("doubleTap", function(e, t) {
            !x.animating && x.params.zoom.enabled && x.zoom.enabled && x.params.zoom.toggle && E(t)
        }), a("transitionEnd", function() {
            x.zoom.enabled && x.params.zoom.enabled && b()
        }), a("slideChange", function() {
            x.zoom.enabled && x.params.zoom.enabled && x.params.cssMode && b()
        }), Object.assign(x.zoom, {
            enable: O,
            disable: P,
            in: y,
            out: w,
            toggle: E
        })
    }, function(e) {
        var l = e.swiper,
            t = e.extendParams,
            a = e.on;

        function c(e, t) {
            var a, i, r, s, n, o = function(e, t) {
                for (i = -1, a = e.length; 1 < a - i;) e[r = a + i >> 1] <= t ? i = r : a = r;
                return a
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = o(this.x, e), s = n - 1, (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
            }, this
        }

        function i() {
            l.controller.control && l.controller.spline && (l.controller.spline = void 0, delete l.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), l.controller = {
            control: void 0
        }, a("beforeInit", function() {
            if ("undefined" != typeof window && ("string" == typeof l.params.controller.control || l.params.controller.control instanceof HTMLElement)) {
                var a = document.querySelector(l.params.controller.control);
                if (a && a.swiper) l.controller.control = a.swiper;
                else if (a) {
                    a.addEventListener("init", function e(t) {
                        l.controller.control = t.detail[0], l.update(), a.removeEventListener("init", e)
                    })
                }
            } else l.controller.control = l.params.controller.control
        }), a("update", function() {
            i()
        }), a("resize", function() {
            i()
        }), a("observerUpdate", function() {
            i()
        }), a("setTranslate", function(e, t, a) {
            l.controller.control && !l.controller.control.destroyed && l.controller.setTranslate(t, a)
        }), a("setTransition", function(e, t, a) {
            l.controller.control && !l.controller.control.destroyed && l.controller.setTransition(t, a)
        }), Object.assign(l.controller, {
            setTranslate: function(e, t) {
                var i, r, a = l.controller.control,
                    s = l.constructor;

                function n(e) {
                    if (!e.destroyed) {
                        var t, a = l.rtlTranslate ? -l.translate : l.translate;
                        "slide" === l.params.controller.by && (t = e, l.controller.spline = l.params.loop ? new c(l.slidesGrid, t.slidesGrid) : new c(l.snapGrid, t.snapGrid), r = -l.controller.spline.interpolate(-a)), r && "container" !== l.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (l.maxTranslate() - l.minTranslate()), !Number.isNaN(i) && Number.isFinite(i) || (i = 1), r = (a - l.minTranslate()) * i + e.minTranslate()), l.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, l), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof s && n(a[o]);
                else a instanceof s && t !== a && n(a)
            },
            setTransition: function(t, e) {
                var a, i = l.constructor,
                    r = l.controller.control;

                function s(e) {
                    e.destroyed || (e.setTransition(t, l), 0 !== t && (e.transitionStart(), e.params.autoHeight && P(function() {
                        e.updateAutoHeight()
                    }), A(e.wrapperEl, function() {
                        r && e.transitionEnd()
                    })))
                }
                if (Array.isArray(r))
                    for (a = 0; a < r.length; a += 1) r[a] !== e && r[a] instanceof i && s(r[a]);
                else r instanceof i && e !== r && s(r)
            }
        })
    }, function(e) {
        var u = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), u.a11y = {
            clicked: !1
        };
        var r, s, p = null,
            n = (new Date).getTime();

        function o(e) {
            var t = p;
            0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
        }

        function l(e) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("tabIndex", "0")
            })
        }

        function i(e) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("tabIndex", "-1")
            })
        }

        function c(e, t) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("role", t)
            })
        }

        function f(e, t) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("aria-roledescription", t)
            })
        }

        function h(e, t) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("aria-label", t)
            })
        }

        function d(e) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("aria-disabled", !0)
            })
        }

        function v(e) {
            (e = O(e)).forEach(function(e) {
                e.setAttribute("aria-disabled", !1)
            })
        }

        function m(e) {
            if (13 === e.keyCode || 32 === e.keyCode) {
                var t = u.params.a11y,
                    a = e.target;
                if (!u.pagination || !u.pagination.el || a !== u.pagination.el && !u.pagination.el.contains(e.target) || e.target.matches(X(u.params.pagination.bulletClass))) {
                    if (u.navigation && u.navigation.prevEl && u.navigation.nextEl) {
                        var i = O(u.navigation.prevEl);
                        O(u.navigation.nextEl).includes(a) && (u.isEnd && !u.params.loop || u.slideNext(), u.isEnd ? o(t.lastSlideMessage) : o(t.nextSlideMessage)), i.includes(a) && (u.isBeginning && !u.params.loop || u.slidePrev(), u.isBeginning ? o(t.firstSlideMessage) : o(t.prevSlideMessage))
                    }
                    u.pagination && a.matches(X(u.params.pagination.bulletClass)) && a.click()
                }
            }
        }

        function g() {
            return u.pagination && u.pagination.bullets && u.pagination.bullets.length
        }

        function b() {
            return g() && u.params.pagination.clickable
        }
        var y = function(e, t, a) {
                var i;
                l(e), "BUTTON" !== e.tagName && (c(e, "button"), e.addEventListener("keydown", m)), h(e, a), i = t, O(e).forEach(function(e) {
                    e.setAttribute("aria-controls", i)
                })
            },
            w = function(e) {
                s && s !== e.target && !s.contains(e.target) && (r = !0), u.a11y.clicked = !0
            },
            E = function() {
                r = !1, requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        u.destroyed || (u.a11y.clicked = !1)
                    })
                })
            },
            x = function(e) {
                n = (new Date).getTime()
            },
            S = function(e) {
                if (!(u.a11y.clicked || (new Date).getTime() - n < 100)) {
                    var t = e.target.closest(".".concat(u.params.slideClass, ", swiper-slide"));
                    if (t && u.slides.includes(t)) {
                        s = t;
                        var a = u.slides.indexOf(t) === u.activeIndex,
                            i = u.params.watchSlidesProgress && u.visibleSlides && u.visibleSlides.includes(t);
                        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (u.isHorizontal() ? u.el.scrollLeft = 0 : u.el.scrollTop = 0, requestAnimationFrame(function() {
                            r || (u.params.loop ? u.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")), 0) : u.slideTo(u.slides.indexOf(t), 0), r = !1)
                        }))
                    }
                }
            },
            T = function() {
                var i = u.params.a11y;
                i.itemRoleDescriptionMessage && f(u.slides, i.itemRoleDescriptionMessage), i.slideRole && c(u.slides, i.slideRole);
                var r = u.slides.length;
                i.slideLabelMessage && u.slides.forEach(function(e, t) {
                    var a = u.params.loop ? parseInt(e.getAttribute("data-swiper-slide-index"), 10) : t;
                    h(e, i.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, r))
                })
            };
        a("beforeInit", function() {
            (p = D("span", u.params.a11y.notificationClass)).setAttribute("aria-live", "assertive"), p.setAttribute("aria-atomic", "true")
        }), a("afterInit", function() {
            u.params.a11y.enabled && function() {
                var t = u.params.a11y;
                u.el.append(p);
                var e = u.el;
                t.containerRoleDescriptionMessage && f(e, t.containerRoleDescriptionMessage), t.containerMessage && h(e, t.containerMessage);
                var a, i, r, s = u.wrapperEl,
                    n = t.id || s.getAttribute("id") || "swiper-wrapper-".concat((void 0 === (a = 16) && (a = 16), "x".repeat(a).replace(/x/g, function() {
                        return Math.round(16 * Math.random()).toString(16)
                    }))),
                    o = u.params.autoplay && u.params.autoplay.enabled ? "off" : "polite";
                i = n, O(s).forEach(function(e) {
                    e.setAttribute("id", i)
                }), r = o, O(s).forEach(function(e) {
                    e.setAttribute("aria-live", r)
                }), T();
                var l = u.navigation ? u.navigation : {},
                    c = l.nextEl,
                    d = l.prevEl;
                c = O(c), d = O(d), c && c.forEach(function(e) {
                    return y(e, n, t.nextSlideMessage)
                }), d && d.forEach(function(e) {
                    return y(e, n, t.prevSlideMessage)
                }), b() && O(u.pagination.el).forEach(function(e) {
                    e.addEventListener("keydown", m)
                }), L().addEventListener("visibilitychange", x), u.el.addEventListener("focus", S, !0), u.el.addEventListener("focus", S, !0), u.el.addEventListener("pointerdown", w, !0), u.el.addEventListener("pointerup", E, !0)
            }()
        }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function() {
            u.params.a11y.enabled && T()
        }), a("fromEdge toEdge afterInit lock unlock", function() {
            u.params.a11y.enabled && function() {
                if (!u.params.loop && !u.params.rewind && u.navigation) {
                    var e = u.navigation,
                        t = e.nextEl,
                        a = e.prevEl;
                    a && (u.isBeginning ? (d(a), i(a)) : (v(a), l(a))), t && (u.isEnd ? (d(t), i(t)) : (v(t), l(t)))
                }
            }()
        }), a("paginationUpdate", function() {
            var t;
            u.params.a11y.enabled && (t = u.params.a11y, g() && u.pagination.bullets.forEach(function(e) {
                u.params.pagination.clickable && (l(e), u.params.pagination.renderBullet || (c(e, "button"), h(e, t.paginationBulletMessage.replace(/\{\{index\}\}/, C(e) + 1)))), e.matches(X(u.params.pagination.bulletActiveClass)) ? e.setAttribute("aria-current", "true") : e.removeAttribute("aria-current")
            }))
        }), a("destroy", function() {
            u.params.a11y.enabled && function() {
                p && p.remove();
                var e = u.navigation ? u.navigation : {},
                    t = e.nextEl,
                    a = e.prevEl;
                t = O(t), a = O(a), t && t.forEach(function(e) {
                    return e.removeEventListener("keydown", m)
                }), a && a.forEach(function(e) {
                    return e.removeEventListener("keydown", m)
                }), b() && O(u.pagination.el).forEach(function(e) {
                    e.removeEventListener("keydown", m)
                }), L().removeEventListener("visibilitychange", x), u.el && "string" != typeof u.el && (u.el.removeEventListener("focus", S, !0), u.el.removeEventListener("pointerdown", w, !0), u.el.removeEventListener("pointerup", E, !0))
            }()
        })
    }, function(e) {
        var l = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        var c = !1,
            i = {},
            d = function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            r = function(e) {
                var t = k(),
                    a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            s = function(e, t) {
                var a = k();
                if (c && l.params.history.enabled) {
                    var i;
                    i = l.params.url ? new URL(l.params.url) : a.location;
                    var r = l.virtual && l.params.virtual.enabled ? l.slidesEl.querySelector('[data-swiper-slide-index="'.concat(t, '"]')) : l.slides[t],
                        s = d(r.getAttribute("data-history"));
                    if (0 < l.params.history.root.length) {
                        var n = l.params.history.root;
                        "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), s = "".concat(n, "/").concat(e ? "".concat(e, "/") : "").concat(s)
                    } else i.pathname.includes(e) || (s = "".concat(e ? "".concat(e, "/") : "").concat(s));
                    l.params.history.keepQuery && (s += i.search);
                    var o = a.history.state;
                    o && o.value === s || (l.params.history.replaceState ? a.history.replaceState({
                        value: s
                    }, null, s) : a.history.pushState({
                        value: s
                    }, null, s))
                }
            },
            n = function(e, t, a) {
                if (t)
                    for (var i = 0, r = l.slides.length; i < r; i += 1) {
                        var s = l.slides[i];
                        if (d(s.getAttribute("data-history")) === t) {
                            var n = l.getSlideIndex(s);
                            l.slideTo(n, e, a)
                        }
                    } else l.slideTo(0, e, a)
            },
            o = function() {
                i = r(l.params.url), n(l.params.speed, i.value, !1)
            };
        a("init", function() {
            l.params.history.enabled && function() {
                var e = k();
                if (l.params.history) {
                    if (!e.history || !e.history.pushState) return l.params.history.enabled = !1, l.params.hashNavigation.enabled = !0;
                    c = !0, ((i = r(l.params.url)).key || i.value) && n(0, i.value, l.params.runCallbacksOnInit), l.params.history.replaceState || e.addEventListener("popstate", o)
                }
            }()
        }), a("destroy", function() {
            var e;
            l.params.history.enabled && (e = k(), l.params.history.replaceState || e.removeEventListener("popstate", o))
        }), a("transitionEnd _freeModeNoMomentumRelease", function() {
            c && s(l.params.history.key, l.activeIndex)
        }), a("slideChange", function() {
            c && l.params.cssMode && s(l.params.history.key, l.activeIndex)
        })
    }, function(e) {
        var i = e.swiper,
            t = e.extendParams,
            r = e.emit,
            a = e.on,
            s = !1,
            n = L(),
            o = k();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex: function(e, t) {
                    if (i.virtual && i.params.virtual.enabled) {
                        var a = i.slides.filter(function(e) {
                            return e.getAttribute("data-hash") === t
                        })[0];
                        return a ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : 0
                    }
                    return i.getSlideIndex(re(i.slidesEl, ".".concat(i.params.slideClass, '[data-hash="').concat(t, '"], swiper-slide[data-hash="').concat(t, '"]'))[0])
                }
            }
        });
        var l = function() {
                r("hashChange");
                var e = n.location.hash.replace("#", ""),
                    t = i.virtual && i.params.virtual.enabled ? i.slidesEl.querySelector('[data-swiper-slide-index="'.concat(i.activeIndex, '"]')) : i.slides[i.activeIndex];
                if (e !== (t ? t.getAttribute("data-hash") : "")) {
                    var a = i.params.hashNavigation.getSlideIndex(i, e);
                    if (void 0 === a || Number.isNaN(a)) return;
                    i.slideTo(a)
                }
            },
            c = function() {
                if (s && i.params.hashNavigation.enabled) {
                    var e = i.virtual && i.params.virtual.enabled ? i.slidesEl.querySelector('[data-swiper-slide-index="'.concat(i.activeIndex, '"]')) : i.slides[i.activeIndex],
                        t = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                    i.params.hashNavigation.replaceState && o.history && o.history.replaceState ? o.history.replaceState(null, null, "#".concat(t) || "") : n.location.hash = t || "", r("hashSet")
                }
            };
        a("init", function() {
            i.params.hashNavigation.enabled && function() {
                if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                    s = !0;
                    var e = n.location.hash.replace("#", "");
                    if (e) {
                        var t = i.params.hashNavigation.getSlideIndex(i, e);
                        i.slideTo(t || 0, 0, i.params.runCallbacksOnInit, !0)
                    }
                    i.params.hashNavigation.watchState && o.addEventListener("hashchange", l)
                }
            }()
        }), a("destroy", function() {
            i.params.hashNavigation.enabled && i.params.hashNavigation.watchState && o.removeEventListener("hashchange", l)
        }), a("transitionEnd _freeModeNoMomentumRelease", function() {
            s && c()
        }), a("slideChange", function() {
            s && i.params.cssMode && c()
        })
    }, function(e) {
        var n, o, l = e.swiper,
            t = e.extendParams,
            a = e.on,
            c = e.emit,
            i = e.params;
        t({
            autoplay: {
                enabled: !(l.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }),
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        var d, u, r, s, p, f, h, v, m = i && i.autoplay ? i.autoplay.delay : 3e3,
            g = i && i.autoplay ? i.autoplay.delay : 3e3,
            b = (new Date).getTime();

        function y(e) {
            l && !l.destroyed && l.wrapperEl && e.target === l.wrapperEl && (l.wrapperEl.removeEventListener("transitionend", y), v || e.detail && e.detail.bySwiperTouchMove || T())
        }
        var w = function e(t) {
                if (!l.destroyed && l.autoplay.running) {
                    cancelAnimationFrame(o),
                        function e() {
                            if (!l.destroyed && l.autoplay.running) {
                                l.autoplay.paused ? u = !0 : u && (g = d, u = !1);
                                var t = l.autoplay.paused ? d : b + g - (new Date).getTime();
                                l.autoplay.timeLeft = t, c("autoplayTimeLeft", t, t / m), o = requestAnimationFrame(function() {
                                    e()
                                })
                            }
                        }();
                    var a = void 0 === t ? l.params.autoplay.delay : t;
                    m = l.params.autoplay.delay, g = l.params.autoplay.delay;
                    var i = function() {
                        var e;
                        if (e = l.virtual && l.params.virtual.enabled ? l.slides.filter(function(e) {
                                return e.classList.contains("swiper-slide-active")
                            })[0] : l.slides[l.activeIndex]) return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                    }();
                    !Number.isNaN(i) && 0 < i && void 0 === t && (g = m = a = i), d = a;
                    var r = l.params.speed,
                        s = function() {
                            l && !l.destroyed && (l.params.autoplay.reverseDirection ? !l.isBeginning || l.params.loop || l.params.rewind ? (l.slidePrev(r, !0, !0), c("autoplay")) : l.params.autoplay.stopOnLastSlide || (l.slideTo(l.slides.length - 1, r, !0, !0), c("autoplay")) : !l.isEnd || l.params.loop || l.params.rewind ? (l.slideNext(r, !0, !0), c("autoplay")) : l.params.autoplay.stopOnLastSlide || (l.slideTo(0, r, !0, !0), c("autoplay")), l.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame(function() {
                                e()
                            })))
                        };
                    return 0 < a ? (clearTimeout(n), n = setTimeout(function() {
                        s()
                    }, a)) : requestAnimationFrame(function() {
                        s()
                    }), a
                }
            },
            E = function() {
                b = (new Date).getTime(), l.autoplay.running = !0, w(), c("autoplayStart")
            },
            x = function() {
                l.autoplay.running = !1, clearTimeout(n), cancelAnimationFrame(o), c("autoplayStop")
            },
            S = function(e, t) {
                if (!l.destroyed && l.autoplay.running) {
                    clearTimeout(n), e || (h = !0);
                    var a = function() {
                        c("autoplayPause"), l.params.autoplay.waitForTransition ? l.wrapperEl.addEventListener("transitionend", y) : T()
                    };
                    if (l.autoplay.paused = !0, t) return f && (d = l.params.autoplay.delay), f = !1, void a();
                    var i = d || l.params.autoplay.delay;
                    d = i - ((new Date).getTime() - b), l.isEnd && d < 0 && !l.params.loop || (d < 0 && (d = 0), a())
                }
            },
            T = function() {
                l.isEnd && d < 0 && !l.params.loop || l.destroyed || !l.autoplay.running || (b = (new Date).getTime(), h ? (h = !1, w(d)) : w(), l.autoplay.paused = !1, c("autoplayResume"))
            },
            M = function() {
                if (!l.destroyed && l.autoplay.running) {
                    var e = L();
                    "hidden" === e.visibilityState && S(h = !0), "visible" === e.visibilityState && T()
                }
            },
            C = function(e) {
                "mouse" === e.pointerType && (v = h = !0, l.animating || l.autoplay.paused || S(!0))
            },
            A = function(e) {
                "mouse" === e.pointerType && (v = !1, l.autoplay.paused && T())
            };
        a("init", function() {
            l.params.autoplay.enabled && (l.params.autoplay.pauseOnMouseEnter && (l.el.addEventListener("pointerenter", C), l.el.addEventListener("pointerleave", A)), L().addEventListener("visibilitychange", M), E())
        }), a("destroy", function() {
            l.el && "string" != typeof l.el && (l.el.removeEventListener("pointerenter", C), l.el.removeEventListener("pointerleave", A)), L().removeEventListener("visibilitychange", M), l.autoplay.running && x()
        }), a("_freeModeStaticRelease", function() {
            (s || h) && T()
        }), a("_freeModeNoMomentumRelease", function() {
            l.params.autoplay.disableOnInteraction ? x() : S(!0, !0)
        }), a("beforeTransitionStart", function(e, t, a) {
            !l.destroyed && l.autoplay.running && (a || !l.params.autoplay.disableOnInteraction ? S(!0, !0) : x())
        }), a("sliderFirstMove", function() {
            !l.destroyed && l.autoplay.running && (l.params.autoplay.disableOnInteraction ? x() : (h = s = !(r = !0), p = setTimeout(function() {
                S(s = h = !0)
            }, 200)))
        }), a("touchEnd", function() {
            if (!l.destroyed && l.autoplay.running && r) {
                if (clearTimeout(p), clearTimeout(n), l.params.autoplay.disableOnInteraction) return void(r = s = !1);
                s && l.params.cssMode && T(), r = s = !1
            }
        }), a("slideChange", function() {
            !l.destroyed && l.autoplay.running && (f = !0)
        }), Object.assign(l.autoplay, {
            start: E,
            stop: x,
            pause: S,
            resume: T
        })
    }, function(e) {
        var f = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        var i = !1,
            r = !1;

        function s() {
            var e = f.thumbs.swiper;
            if (e && !e.destroyed) {
                var t, a = e.clickedIndex,
                    i = e.clickedSlide;
                if (!i || !i.classList.contains(f.params.thumbs.slideThumbActiveClass))
                    if (null != a) t = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : a, f.params.loop ? f.slideToLoop(t) : f.slideTo(t)
            }
        }

        function n() {
            var e = f.params.thumbs;
            if (i) return !1;
            i = !0;
            var t = f.constructor;
            if (e.swiper instanceof t) f.thumbs.swiper = e.swiper, Object.assign(f.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(f.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), f.thumbs.swiper.update();
            else if (d(e.swiper)) {
                var a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), f.thumbs.swiper = new t(a), r = !0
            }
            return f.thumbs.swiper.el.classList.add(f.params.thumbs.thumbsContainerClass), f.thumbs.swiper.on("tap", s), !0
        }

        function o(e) {
            var t = f.thumbs.swiper;
            if (t && !t.destroyed) {
                var a = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                    i = 1,
                    r = f.params.thumbs.slideThumbActiveClass;
                if (1 < f.params.slidesPerView && !f.params.centeredSlides && (i = f.params.slidesPerView), f.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), t.slides.forEach(function(e) {
                        return e.classList.remove(r)
                    }), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                    for (var s = 0; s < i; s += 1) re(t.slidesEl, '[data-swiper-slide-index="'.concat(f.realIndex + s, '"]')).forEach(function(e) {
                        e.classList.add(r)
                    });
                else
                    for (var n = 0; n < i; n += 1) t.slides[f.realIndex + n] && t.slides[f.realIndex + n].classList.add(r);
                var o = f.params.thumbs.autoScrollOffset,
                    l = o && !t.params.loop;
                if (f.realIndex !== t.realIndex || l) {
                    var c, d, u = t.activeIndex;
                    if (t.params.loop) {
                        var p = t.slides.filter(function(e) {
                            return e.getAttribute("data-swiper-slide-index") === "".concat(f.realIndex)
                        })[0];
                        c = t.slides.indexOf(p), d = f.activeIndex > f.previousIndex ? "next" : "prev"
                    } else d = (c = f.realIndex) > f.previousIndex ? "next" : "prev";
                    l && (c += "next" === d ? o : -1 * o), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(c) < 0 && (t.params.centeredSlides ? c = u < c ? c - Math.floor(a / 2) + 1 : c + Math.floor(a / 2) - 1 : u < c && t.params.slidesPerGroup, t.slideTo(c, e ? 0 : void 0))
                }
            }
        }
        f.thumbs = {
            swiper: null
        }, a("beforeInit", function() {
            var i = f.params.thumbs;
            if (i && i.swiper)
                if ("string" == typeof i.swiper || i.swiper instanceof HTMLElement) {
                    var t = L();
                    requestAnimationFrame(function e() {
                        f.destroyed || (a = "string" == typeof i.swiper ? t.querySelector(i.swiper) : i.swiper, a && a.swiper ? (i.swiper = a.swiper, n(), o(!0)) : a && a.addEventListener("init", function e(t) {
                            i.swiper = t.detail[0], a.removeEventListener("init", e), n(), o(!0), i.swiper.update(), f.update()
                        }), a) || requestAnimationFrame(e);
                        var a
                    })
                } else n(), o(!0)
        }), a("slideChange update resize observerUpdate", function() {
            o()
        }), a("setTransition", function(e, t) {
            var a = f.thumbs.swiper;
            a && !a.destroyed && a.setTransition(t)
        }), a("beforeDestroy", function() {
            var e = f.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        }), Object.assign(f.thumbs, {
            init: n,
            update: o
        })
    }, function(e) {
        var S = e.swiper,
            t = e.extendParams,
            T = e.emit,
            M = e.once;
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(S, {
            freeMode: {
                onTouchStart: function() {
                    if (!S.params.cssMode) {
                        var e = S.getTranslate();
                        S.setTranslate(e), S.setTransition(0), S.touchEventsData.velocities.length = 0, S.freeMode.onTouchEnd({
                            currentPos: S.rtl ? S.translate : -S.translate
                        })
                    }
                },
                onTouchMove: function() {
                    if (!S.params.cssMode) {
                        var e = S.touchEventsData,
                            t = S.touches;
                        0 === e.velocities.length && e.velocities.push({
                            position: t[S.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: t[S.isHorizontal() ? "currentX" : "currentY"],
                            time: z()
                        })
                    }
                },
                onTouchEnd: function(e) {
                    var t = e.currentPos;
                    if (!S.params.cssMode) {
                        var a = S.params,
                            i = S.wrapperEl,
                            r = S.rtlTranslate,
                            s = S.snapGrid,
                            n = S.touchEventsData,
                            o = z() - n.touchStartTime;
                        if (t < -S.minTranslate()) S.slideTo(S.activeIndex);
                        else if (t > -S.maxTranslate()) S.slides.length < s.length ? S.slideTo(s.length - 1) : S.slideTo(S.slides.length - 1);
                        else {
                            if (a.freeMode.momentum) {
                                if (1 < n.velocities.length) {
                                    var l = n.velocities.pop(),
                                        c = n.velocities.pop(),
                                        d = l.position - c.position,
                                        u = l.time - c.time;
                                    S.velocity = d / u, S.velocity /= 2, Math.abs(S.velocity) < a.freeMode.minimumVelocity && (S.velocity = 0), (150 < u || 300 < z() - l.time) && (S.velocity = 0)
                                } else S.velocity = 0;
                                S.velocity *= a.freeMode.momentumVelocityRatio, n.velocities.length = 0;
                                var p = 1e3 * a.freeMode.momentumRatio,
                                    f = S.velocity * p,
                                    h = S.translate + f;
                                r && (h = -h);
                                var v, m, g = !1,
                                    b = 20 * Math.abs(S.velocity) * a.freeMode.momentumBounceRatio;
                                if (h < S.maxTranslate()) a.freeMode.momentumBounce ? (h + S.maxTranslate() < -b && (h = S.maxTranslate() - b), v = S.maxTranslate(), g = !0, n.allowMomentumBounce = !0) : h = S.maxTranslate(), a.loop && a.centeredSlides && (m = !0);
                                else if (h > S.minTranslate()) a.freeMode.momentumBounce ? (h - S.minTranslate() > b && (h = S.minTranslate() + b), v = S.minTranslate(), g = !0, n.allowMomentumBounce = !0) : h = S.minTranslate(), a.loop && a.centeredSlides && (m = !0);
                                else if (a.freeMode.sticky) {
                                    for (var y, w = 0; w < s.length; w += 1)
                                        if (s[w] > -h) {
                                            y = w;
                                            break
                                        } h = -(h = Math.abs(s[y] - h) < Math.abs(s[y - 1] - h) || "next" === S.swipeDirection ? s[y] : s[y - 1])
                                }
                                if (m && M("transitionEnd", function() {
                                        S.loopFix()
                                    }), 0 !== S.velocity) {
                                    if (p = r ? Math.abs((-h - S.translate) / S.velocity) : Math.abs((h - S.translate) / S.velocity), a.freeMode.sticky) {
                                        var E = Math.abs((r ? -h : h) - S.translate),
                                            x = S.slidesSizesGrid[S.activeIndex];
                                        p = E < x ? a.speed : E < 2 * x ? 1.5 * a.speed : 2.5 * a.speed
                                    }
                                } else if (a.freeMode.sticky) return void S.slideToClosest();
                                a.freeMode.momentumBounce && g ? (S.updateProgress(v), S.setTransition(p), S.setTranslate(h), S.transitionStart(!0, S.swipeDirection), S.animating = !0, A(i, function() {
                                    S && !S.destroyed && n.allowMomentumBounce && (T("momentumBounce"), S.setTransition(a.speed), setTimeout(function() {
                                        S.setTranslate(v), A(i, function() {
                                            S && !S.destroyed && S.transitionEnd()
                                        })
                                    }, 0))
                                })) : S.velocity ? (T("_freeModeNoMomentumRelease"), S.updateProgress(h), S.setTransition(p), S.setTranslate(h), S.transitionStart(!0, S.swipeDirection), S.animating || (S.animating = !0, A(i, function() {
                                    S && !S.destroyed && S.transitionEnd()
                                }))) : S.updateProgress(h), S.updateActiveIndex(), S.updateSlidesClasses()
                            } else {
                                if (a.freeMode.sticky) return void S.slideToClosest();
                                a.freeMode && T("_freeModeNoMomentumRelease")
                            }(!a.freeMode.momentum || o >= a.longSwipesMs) && (T("_freeModeStaticRelease"), S.updateProgress(), S.updateActiveIndex(), S.updateSlidesClasses())
                        }
                    }
                }
            }
        })
    }, function(e) {
        var v, m, g, i, b = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        var y = function() {
            var e = b.params.spaceBetween;
            return "string" == typeof e && 0 <= e.indexOf("%") ? e = parseFloat(e.replace("%", "")) / 100 * b.size : "string" == typeof e && (e = parseFloat(e)), e
        };
        a("init", function() {
            i = b.params.grid && 1 < b.params.grid.rows
        }), a("update", function() {
            var e = b.params,
                t = b.el,
                a = e.grid && 1 < e.grid.rows;
            i && !a ? (t.classList.remove("".concat(e.containerModifierClass, "grid"), "".concat(e.containerModifierClass, "grid-column")), g = 1, b.emitContainerClasses()) : !i && a && (t.classList.add("".concat(e.containerModifierClass, "grid")), "column" === e.grid.fill && t.classList.add("".concat(e.containerModifierClass, "grid-column")), b.emitContainerClasses()), i = a
        }), b.grid = {
            initSlides: function(e) {
                var t = b.params.slidesPerView,
                    a = b.params.grid,
                    i = a.rows,
                    r = a.fill,
                    s = b.virtual && b.params.virtual.enabled ? b.virtual.slides.length : e.length;
                g = Math.floor(s / i), v = Math.floor(s / i) === s / i ? s : Math.ceil(s / i) * i, "auto" !== t && "row" === r && (v = Math.max(v, t * i)), m = v / i
            },
            unsetSlides: function() {
                b.slides && b.slides.forEach(function(e) {
                    e.swiperSlideGridSet && (e.style.height = "", e.style[b.getDirectionLabel("margin-top")] = "")
                })
            },
            updateSlide: function(e, t, a) {
                var i, r, s, n = b.params.slidesPerGroup,
                    o = y(),
                    l = b.params.grid,
                    c = l.rows,
                    d = l.fill,
                    u = b.virtual && b.params.virtual.enabled ? b.virtual.slides.length : a.length;
                if ("row" === d && 1 < n) {
                    var p = Math.floor(e / (n * c)),
                        f = e - c * n * p,
                        h = 0 === p ? n : Math.min(Math.ceil((u - p * c * n) / c), n);
                    i = (r = f - (s = Math.floor(f / h)) * h + p * n) + s * v / c, t.style.order = i
                } else "column" === d ? (s = e - (r = Math.floor(e / c)) * c, (g < r || r === g && s === c - 1) && (c <= (s += 1) && (s = 0, r += 1))) : r = e - (s = Math.floor(e / m)) * m;
                t.row = s, t.column = r, t.style.height = "calc((100% - ".concat((c - 1) * o, "px) / ").concat(c, ")"), t.style[b.getDirectionLabel("margin-top")] = 0 !== s ? o && "".concat(o, "px") : "", t.swiperSlideGridSet = !0
            },
            updateWrapperSize: function(e, t) {
                var a = b.params,
                    i = a.centeredSlides,
                    r = a.roundLengths,
                    s = y(),
                    n = b.params.grid.rows;
                if (b.virtualSize = (e + s) * v, b.virtualSize = Math.ceil(b.virtualSize / n) - s, b.params.cssMode || (b.wrapperEl.style[b.getDirectionLabel("width")] = "".concat(b.virtualSize + s, "px")), i) {
                    for (var o = [], l = 0; l < t.length; l += 1) {
                        var c = t[l];
                        r && (c = Math.floor(c)), t[l] < b.virtualSize + t[0] && o.push(c)
                    }
                    t.splice(0, t.length), t.push.apply(t, o)
                }
            }
        }
    }, function(e) {
        var t = e.swiper;
        Object.assign(t, {
            appendSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.slidesEl;
                a.loop && t.loopDestroy();
                var r = function(e) {
                    if ("string" == typeof e) {
                        var t = document.createElement("div");
                        t.innerHTML = e, i.append(t.children[0]), t.innerHTML = ""
                    } else i.append(e)
                };
                if ("object" == _typeof(e) && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && r(e[s]);
                else r(e);
                t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update()
            }.bind(t),
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.activeIndex,
                    r = t.slidesEl;
                a.loop && t.loopDestroy();
                var s = i + 1,
                    n = function(e) {
                        if ("string" == typeof e) {
                            var t = document.createElement("div");
                            t.innerHTML = e, r.prepend(t.children[0]), t.innerHTML = ""
                        } else r.prepend(e)
                    };
                if ("object" == _typeof(e) && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) e[o] && n(e[o]);
                    s = i + e.length
                } else n(e);
                t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update(), t.slideTo(s, 0, !1)
            }.bind(t),
            addSlide: function(e, t) {
                var a = this,
                    i = a.params,
                    r = a.activeIndex,
                    s = a.slidesEl,
                    n = r;
                i.loop && (n -= a.loopedSlides, a.loopDestroy(), a.recalcSlides());
                var o = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (o <= e) a.appendSlide(t);
                else {
                    for (var l = e < n ? n + 1 : n, c = [], d = o - 1; e <= d; d -= 1) {
                        var u = a.slides[d];
                        u.remove(), c.unshift(u)
                    }
                    if ("object" == _typeof(t) && "length" in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && s.append(t[p]);
                        l = e < n ? n + t.length : n
                    } else s.append(t);
                    for (var f = 0; f < c.length; f += 1) s.append(c[f]);
                    a.recalcSlides(), i.loop && a.loopCreate(), i.observer && !a.isElement || a.update(), i.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
                }
            }.bind(t),
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.activeIndex;
                a.loop && (i -= t.loopedSlides, t.loopDestroy());
                var r, s = i;
                if ("object" == _typeof(e) && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) r = e[n], t.slides[r] && t.slides[r].remove(), r < s && (s -= 1);
                    s = Math.max(s, 0)
                } else r = e, t.slides[r] && t.slides[r].remove(), r < s && (s -= 1), s = Math.max(s, 0);
                t.recalcSlides(), a.loop && t.loopCreate(), a.observer && !t.isElement || t.update(), a.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
            }.bind(t),
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }.bind(t)
        })
    }, function(e) {
        var o = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            fadeEffect: {
                crossFade: !1
            }
        }), B({
            effect: "fade",
            swiper: o,
            on: a,
            setTranslate: function() {
                var e = o.slides;
                o.params.fadeEffect;
                for (var t = 0; t < e.length; t += 1) {
                    var a = o.slides[t],
                        i = -a.swiperSlideOffset;
                    o.params.virtualTranslate || (i -= o.translate);
                    var r = 0;
                    o.isHorizontal() || (r = i, i = 0);
                    var s = o.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a.progress), 0) : 1 + Math.min(Math.max(a.progress, -1), 0),
                        n = j(0, a);
                    n.style.opacity = s, n.style.transform = "translate3d(".concat(i, "px, ").concat(r, "px, 0px)")
                }
            },
            setTransition: function(t) {
                var e = o.slides.map(function(e) {
                    return n(e)
                });
                e.forEach(function(e) {
                    e.style.transitionDuration = "".concat(t, "ms")
                }), V({
                    swiper: o,
                    duration: t,
                    transformElements: e,
                    allSlides: !0
                })
            },
            overwriteParams: function() {
                return {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !o.params.cssMode
                }
            }
        })
    }, function(e) {
        var O = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        var P = function(e, t, a) {
            var i = a ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                r = a ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            i || (i = D("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (a ? "left" : "top")).split(" ")), e.append(i)), r || (r = D("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (a ? "right" : "bottom")).split(" ")), e.append(r)), i && (i.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0))
        };
        B({
            effect: "cube",
            swiper: O,
            on: a,
            setTranslate: function() {
                var e, t = O.el,
                    a = O.wrapperEl,
                    i = O.slides,
                    r = O.width,
                    s = O.height,
                    n = O.rtlTranslate,
                    o = O.size,
                    l = O.browser,
                    c = O.params.cubeEffect,
                    d = O.isHorizontal(),
                    u = O.virtual && O.params.virtual.enabled,
                    p = 0;
                c.shadow && (d ? ((e = O.wrapperEl.querySelector(".swiper-cube-shadow")) || (e = D("div", "swiper-cube-shadow"), O.wrapperEl.append(e)), e.style.height = "".concat(r, "px")) : (e = t.querySelector(".swiper-cube-shadow")) || (e = D("div", "swiper-cube-shadow"), t.append(e)));
                for (var f = 0; f < i.length; f += 1) {
                    var h = i[f],
                        v = f;
                    u && (v = parseInt(h.getAttribute("data-swiper-slide-index"), 10));
                    var m = 90 * v,
                        g = Math.floor(m / 360);
                    n && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(h.progress, 1), -1),
                        y = 0,
                        w = 0,
                        E = 0;
                    v % 4 == 0 ? (y = 4 * -g * o, E = 0) : (v - 1) % 4 == 0 ? (y = 0, E = 4 * -g * o) : (v - 2) % 4 == 0 ? (y = o + 4 * g * o, E = o) : (v - 3) % 4 == 0 && (y = -o, E = 3 * o + 4 * o * g), n && (y = -y), d || (w = y, y = 0);
                    var x = "rotateX(".concat(d ? 0 : -m, "deg) rotateY(").concat(d ? m : 0, "deg) translate3d(").concat(y, "px, ").concat(w, "px, ").concat(E, "px)");
                    b <= 1 && -1 < b && (p = 90 * v + 90 * b, n && (p = 90 * -v - 90 * b), O.browser && O.browser.need3dFix && Math.abs(p) / 90 % 2 == 1 && (p += .001)), h.style.transform = x, c.slideShadows && P(h, b, d)
                }
                if (a.style.transformOrigin = "50% 50% -".concat(o / 2, "px"), a.style["-webkit-transform-origin"] = "50% 50% -".concat(o / 2, "px"), c.shadow)
                    if (d) e.style.transform = "translate3d(0px, ".concat(r / 2 + c.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(89.99deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")");
                    else {
                        var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                            T = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                            M = c.shadowScale,
                            C = c.shadowScale / T,
                            A = c.shadowOffset;
                        e.style.transform = "scale3d(".concat(M, ", 1, ").concat(C, ") translate3d(0px, ").concat(s / 2 + A, "px, ").concat(-s / 2 / C, "px) rotateX(-89.99deg)")
                    } var L = (l.isSafari || l.isWebView) && l.needPerspectiveFix ? -o / 2 : 0;
                a.style.transform = "translate3d(0px,0,".concat(L, "px) rotateX(").concat(O.isHorizontal() ? 0 : p, "deg) rotateY(").concat(O.isHorizontal() ? -p : 0, "deg)"), a.style.setProperty("--swiper-cube-translate-z", "".concat(L, "px"))
            },
            setTransition: function(t) {
                var e = O.el;
                if (O.slides.forEach(function(e) {
                        e.style.transitionDuration = "".concat(t, "ms"), e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function(e) {
                            e.style.transitionDuration = "".concat(t, "ms")
                        })
                    }), O.params.cubeEffect.shadow && !O.isHorizontal()) {
                    var a = e.querySelector(".swiper-cube-shadow");
                    a && (a.style.transitionDuration = "".concat(t, "ms"))
                }
            },
            recreateShadows: function() {
                var a = O.isHorizontal();
                O.slides.forEach(function(e) {
                    var t = Math.max(Math.min(e.progress, 1), -1);
                    P(e, t, a)
                })
            },
            getEffectParams: function() {
                return O.params.cubeEffect
            },
            perspective: function() {
                return !0
            },
            overwriteParams: function() {
                return {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                }
            }
        })
    }, function(e) {
        var p = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        var f = function(e, t) {
            var a = p.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = p.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = q("flip", e, p.isHorizontal() ? "left" : "top")), i || (i = q("flip", e, p.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
        };
        B({
            effect: "flip",
            swiper: p,
            on: a,
            setTranslate: function() {
                for (var e = p.slides, t = p.rtlTranslate, a = p.params.flipEffect, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        s = r.progress;
                    p.params.flipEffect.limitRotation && (s = Math.max(Math.min(r.progress, 1), -1));
                    var n = r.swiperSlideOffset,
                        o = -180 * s,
                        l = 0,
                        c = p.params.cssMode ? -n - p.translate : -n,
                        d = 0;
                    p.isHorizontal() ? t && (o = -o) : (d = c, l = -o, o = c = 0), p.browser && p.browser.need3dFix && (Math.abs(o) / 90 % 2 == 1 && (o += .001), Math.abs(l) / 90 % 2 == 1 && (l += .001)), r.style.zIndex = -Math.abs(Math.round(s)) + e.length, a.slideShadows && f(r, s);
                    var u = "translate3d(".concat(c, "px, ").concat(d, "px, 0px) rotateX(").concat(l, "deg) rotateY(").concat(o, "deg)");
                    j(0, r).style.transform = u
                }
            },
            setTransition: function(t) {
                var e = p.slides.map(function(e) {
                    return n(e)
                });
                e.forEach(function(e) {
                    e.style.transitionDuration = "".concat(t, "ms"), e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function(e) {
                        e.style.transitionDuration = "".concat(t, "ms")
                    })
                }), V({
                    swiper: p,
                    duration: t,
                    transformElements: e
                })
            },
            recreateShadows: function() {
                p.params.flipEffect, p.slides.forEach(function(e) {
                    var t = e.progress;
                    p.params.flipEffect.limitRotation && (t = Math.max(Math.min(e.progress, 1), -1)), f(e, t)
                })
            },
            getEffectParams: function() {
                return p.params.flipEffect
            },
            perspective: function() {
                return !0
            },
            overwriteParams: function() {
                return {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !p.params.cssMode
                }
            }
        })
    }, function(e) {
        var C = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }), B({
            effect: "coverflow",
            swiper: C,
            on: a,
            setTranslate: function() {
                for (var e = C.width, t = C.height, a = C.slides, i = C.slidesSizesGrid, r = C.params.coverflowEffect, s = C.isHorizontal(), n = C.translate, o = s ? e / 2 - n : t / 2 - n, l = s ? r.rotate : -r.rotate, c = r.depth, d = 0, u = a.length; d < u; d += 1) {
                    var p = a[d],
                        f = i[d],
                        h = (o - p.swiperSlideOffset - f / 2) / f,
                        v = "function" == typeof r.modifier ? r.modifier(h) : h * r.modifier,
                        m = s ? l * v : 0,
                        g = s ? 0 : l * v,
                        b = -c * Math.abs(v),
                        y = r.stretch;
                    "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * f);
                    var w = s ? 0 : y * v,
                        E = s ? y * v : 0,
                        x = 1 - (1 - r.scale) * Math.abs(v);
                    Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0), C.browser && C.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(g) / 90 % 2 == 1 && (g += .001));
                    var S = "translate3d(".concat(E, "px,").concat(w, "px,").concat(b, "px)  rotateX(").concat(g, "deg) rotateY(").concat(m, "deg) scale(").concat(x, ")");
                    if (j(0, p).style.transform = S, p.style.zIndex = 1 - Math.abs(Math.round(v)), r.slideShadows) {
                        var T = s ? p.querySelector(".swiper-slide-shadow-left") : p.querySelector(".swiper-slide-shadow-top"),
                            M = s ? p.querySelector(".swiper-slide-shadow-right") : p.querySelector(".swiper-slide-shadow-bottom");
                        T || (T = q("coverflow", p, s ? "left" : "top")), M || (M = q("coverflow", p, s ? "right" : "bottom")), T && (T.style.opacity = 0 < v ? v : 0), M && (M.style.opacity = 0 < -v ? -v : 0)
                    }
                }
            },
            setTransition: function(t) {
                C.slides.map(function(e) {
                    return n(e)
                }).forEach(function(e) {
                    e.style.transitionDuration = "".concat(t, "ms"), e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(function(e) {
                        e.style.transitionDuration = "".concat(t, "ms")
                    })
                })
            },
            perspective: function() {
                return !0
            },
            overwriteParams: function() {
                return {
                    watchSlidesProgress: !0
                }
            }
        })
    }, function(e) {
        var x = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        B({
            effect: "creative",
            swiper: x,
            on: a,
            setTranslate: function() {
                var g = x.slides,
                    e = x.wrapperEl,
                    t = x.slidesSizesGrid,
                    b = x.params.creativeEffect,
                    y = b.progressMultiplier,
                    w = x.params.centeredSlides;
                if (w) {
                    var a = t[0] / 2 - x.params.slidesOffsetBefore || 0;
                    e.style.transform = "translateX(calc(50% - ".concat(a, "px))")
                }
                for (var i = function() {
                        var e = g[E],
                            t = e.progress,
                            i = Math.min(Math.max(e.progress, -b.limitProgress), b.limitProgress),
                            a = i;
                        w || (a = Math.min(Math.max(e.originalProgress, -b.limitProgress), b.limitProgress));
                        var r = e.swiperSlideOffset,
                            s = [x.params.cssMode ? -r - x.translate : -r, 0, 0],
                            n = [0, 0, 0],
                            o = !1;
                        x.isHorizontal() || (s[1] = s[0], s[0] = 0);
                        var l = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        i < 0 ? (l = b.next, o = !0) : 0 < i && (l = b.prev, o = !0), s.forEach(function(e, t) {
                            var a;
                            s[t] = "calc(".concat(e, "px + (").concat((a = l.translate[t], "string" == typeof a ? a : "".concat(a, "px")), " * ").concat(Math.abs(i * y), "))")
                        }), n.forEach(function(e, t) {
                            var a = l.rotate[t] * Math.abs(i * y);
                            x.browser && x.browser.need3dFix && Math.abs(a) / 90 % 2 == 1 && (a += .001), n[t] = a
                        }), e.style.zIndex = -Math.abs(Math.round(t)) + g.length;
                        var c = s.join(", "),
                            d = "rotateX(".concat(n[0], "deg) rotateY(").concat(n[1], "deg) rotateZ(").concat(n[2], "deg)"),
                            u = "scale(".concat(a < 0 ? 1 + (1 - l.scale) * a * y : 1 - (1 - l.scale) * a * y, ")"),
                            p = a < 0 ? 1 + (1 - l.opacity) * a * y : 1 - (1 - l.opacity) * a * y,
                            f = "translate3d(".concat(c, ") ").concat(d, " ").concat(u);
                        if (o && l.shadow || !o) {
                            var h = e.querySelector(".swiper-slide-shadow");
                            if (!h && l.shadow && (h = q("creative", e)), h) {
                                var v = b.shadowPerProgress ? i * (1 / b.limitProgress) : i;
                                h.style.opacity = Math.min(Math.max(Math.abs(v), 0), 1)
                            }
                        }
                        var m = j(0, e);
                        m.style.transform = f, m.style.opacity = p, l.origin && (m.style.transformOrigin = l.origin)
                    }, E = 0; E < g.length; E += 1) i()
            },
            setTransition: function(t) {
                var e = x.slides.map(function(e) {
                    return n(e)
                });
                e.forEach(function(e) {
                    e.style.transitionDuration = "".concat(t, "ms"), e.querySelectorAll(".swiper-slide-shadow").forEach(function(e) {
                        e.style.transitionDuration = "".concat(t, "ms")
                    })
                }), V({
                    swiper: x,
                    duration: t,
                    transformElements: e,
                    allSlides: !0
                })
            },
            perspective: function() {
                return x.params.creativeEffect.perspective
            },
            overwriteParams: function() {
                return {
                    watchSlidesProgress: !0,
                    virtualTranslate: !x.params.cssMode
                }
            }
        })
    }, function(e) {
        var A = e.swiper,
            t = e.extendParams,
            a = e.on;
        t({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), B({
            effect: "cards",
            swiper: A,
            on: a,
            setTranslate: function() {
                for (var e = A.slides, t = A.activeIndex, a = A.rtlTranslate, i = A.params.cardsEffect, r = A.touchEventsData, s = r.startTranslate, n = r.isTouched, o = a ? -A.translate : A.translate, l = 0; l < e.length; l += 1) {
                    var c = e[l],
                        d = c.progress,
                        u = Math.min(Math.max(d, -4), 4),
                        p = c.swiperSlideOffset;
                    A.params.centeredSlides && !A.params.cssMode && (A.wrapperEl.style.transform = "translateX(".concat(A.minTranslate(), "px)")), A.params.centeredSlides && A.params.cssMode && (p -= e[0].swiperSlideOffset);
                    var f = A.params.cssMode ? -p - A.translate : -p,
                        h = 0,
                        v = -100 * Math.abs(u),
                        m = 1,
                        g = -i.perSlideRotate * u,
                        b = i.perSlideOffset - .75 * Math.abs(u),
                        y = A.virtual && A.params.virtual.enabled ? A.virtual.from + l : l,
                        w = (y === t || y === t - 1) && 0 < u && u < 1 && (n || A.params.cssMode) && o < s,
                        E = (y === t || y === t + 1) && u < 0 && -1 < u && (n || A.params.cssMode) && s < o;
                    if (w || E) {
                        var x = Math.pow(1 - Math.abs((Math.abs(u) - .5) / .5), .5);
                        g += -28 * u * x, m += -.5 * x, b += 96 * x, h = -25 * x * Math.abs(u) + "%"
                    }
                    if (f = u < 0 ? "calc(".concat(f, "px ").concat(a ? "-" : "+", " (").concat(b * Math.abs(u), "%))") : 0 < u ? "calc(".concat(f, "px ").concat(a ? "-" : "+", " (-").concat(b * Math.abs(u), "%))") : "".concat(f, "px"), !A.isHorizontal()) {
                        var S = h;
                        h = f, f = S
                    }
                    var T = u < 0 ? "" + (1 + (1 - m) * u) : "" + (1 - (1 - m) * u),
                        M = "\n        translate3d(".concat(f, ", ").concat(h, ", ").concat(v, "px)\n        rotateZ(").concat(i.rotate ? a ? -g : g : 0, "deg)\n        scale(").concat(T, ")\n      ");
                    if (i.slideShadows) {
                        var C = c.querySelector(".swiper-slide-shadow");
                        C || (C = q("cards", c)), C && (C.style.opacity = Math.min(Math.max((Math.abs(u) - .5) / .5, 0), 1))
                    }
                    c.style.zIndex = -Math.abs(Math.round(d)) + e.length, j(0, c).style.transform = M
                }
            },
            setTransition: function(t) {
                var e = A.slides.map(function(e) {
                    return n(e)
                });
                e.forEach(function(e) {
                    e.style.transitionDuration = "".concat(t, "ms"), e.querySelectorAll(".swiper-slide-shadow").forEach(function(e) {
                        e.style.transitionDuration = "".concat(t, "ms")
                    })
                }), V({
                    swiper: A,
                    duration: t,
                    transformElements: e
                })
            },
            perspective: function() {
                return !0
            },
            overwriteParams: function() {
                return {
                    watchSlidesProgress: !0,
                    virtualTranslate: !A.params.cssMode
                }
            }
        })
    }];
    return R.use(e), R
}();