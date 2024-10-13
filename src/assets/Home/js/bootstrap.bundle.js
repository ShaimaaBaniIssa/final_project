"use strict";

function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
        var i = _superPropBase(e, t);
        if (i) {
            var r = Object.getOwnPropertyDescriptor(i, t);
            return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value
        }
    }).apply(this, arguments)
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
    return e
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _createSuper(i) {
    var r = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(i);
        if (r) {
            var n = _getPrototypeOf(this).constructor;
            e = Reflect.construct(t, arguments, n)
        } else e = t.apply(this, arguments);
        return _possibleConstructorReturn(this, e)
    }
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e)
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
        return !1
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(n), !0).forEach(function(e) {
            _defineProperty(t, e, n[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, _toPropertyKey(i.key), i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == _typeof(t) ? t : String(t)
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 === n) return ("string" === t ? String : Number)(e);
    var i = n.call(e, t || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var i, r, o, a, s = [],
            l = !0,
            c = !1;
        try {
            if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                l = !1
            } else
                for (; !(l = (i = o.call(n)).done) && (s.push(i.value), s.length !== t); l = !0);
        } catch (e) {
            c = !0, r = e
        } finally {
            try {
                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
            } finally {
                if (c) throw r
            }
        }
        return s
    }
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _createForOfIteratorHelper(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return i >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[i++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: r
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var o, a = !0,
        s = !1;
    return {
        s: function() {
            n = n.call(e)
        },
        n: function() {
            var e = n.next();
            return a = e.done, e
        },
        e: function(e) {
            s = !0, o = e
        },
        f: function() {
            try {
                a || null == n.return || n.return()
            } finally {
                if (s) throw o
            }
        }
    }
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
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
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
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(void 0, function() {
    var r = new Map,
        o = function(e, t, n) {
            r.has(e) || r.set(e, new Map);
            var i = r.get(e);
            i.has(t) || 0 === i.size ? i.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."))
        },
        t = function(e, t) {
            return r.has(e) && r.get(e).get(t) || null
        },
        n = function(e, t) {
            if (r.has(e)) {
                var n = r.get(e);
                n.delete(t), 0 === n.size && r.delete(e)
            }
        },
        a = "transitionend",
        i = function(e) {
            return e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, function(e, t) {
                return "#".concat(CSS.escape(t))
            })), e
        },
        s = function(e) {
            e.dispatchEvent(new Event(a))
        },
        u = function(e) {
            return !(!e || "object" !== _typeof(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType)
        },
        f = function(e) {
            return u(e) ? e.jquery ? e[0] : e : "string" == typeof e && 0 < e.length ? document.querySelector(i(e)) : null
        },
        c = function(e) {
            if (!u(e) || 0 === e.getClientRects().length) return !1;
            var t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
            if (!n) return t;
            if (n !== e) {
                var i = e.closest("summary");
                if (i && i.parentNode !== n) return !1;
                if (null === i) return !1
            }
            return t
        },
        d = function(e) {
            return !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")))
        },
        h = function() {},
        p = function(e) {
            e.offsetHeight
        },
        _ = function() {
            return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
        },
        l = [],
        v = function() {
            return "rtl" === document.documentElement.dir
        },
        e = function(i) {
            var e;
            e = function() {
                var e = _();
                if (e) {
                    var t = i.NAME,
                        n = e.fn[t];
                    e.fn[t] = i.jQueryInterface, e.fn[t].Constructor = i, e.fn[t].noConflict = function() {
                        return e.fn[t] = n, i.jQueryInterface
                    }
                }
            }, "loading" === document.readyState ? (l.length || document.addEventListener("DOMContentLoaded", function() {
                for (var e = 0, t = l; e < t.length; e++)(0, t[e])()
            }), l.push(e)) : e()
        },
        g = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e;
            return "function" == typeof e ? e.apply(void 0, _toConsumableArray(t)) : n
        },
        m = function(n, i) {
            if (!(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]) {
                var e = function(e) {
                        if (!e) return 0;
                        var t = window.getComputedStyle(e),
                            n = t.transitionDuration,
                            i = t.transitionDelay,
                            r = Number.parseFloat(n),
                            o = Number.parseFloat(i);
                        return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
                    }(i) + 5,
                    r = !1;
                i.addEventListener(a, function e(t) {
                    t.target === i && (r = !0, i.removeEventListener(a, e), g(n))
                }), setTimeout(function() {
                    r || s(i)
                }, e)
            } else g(n)
        },
        y = function(e, t, n, i) {
            var r = e.length,
                o = e.indexOf(t);
            return -1 === o ? !n && i ? e[r - 1] : e[0] : (o += n ? 1 : -1, i && (o = (o + r) % r), e[Math.max(0, Math.min(o, r - 1))])
        },
        b = /[^.]*(?=\..*)\.|.*/,
        k = /\..*/,
        w = /::\d+$/,
        C = {},
        O = 1,
        A = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        E = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function T(e, t) {
        return t && "".concat(t, "::").concat(O++) || e.uidEvent || O++
    }

    function S(e) {
        var t = T(e);
        return e.uidEvent = t, C[t] = C[t] || {}, C[t]
    }

    function x(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return Object.values(e).find(function(e) {
            return e.callable === t && e.delegationSelector === n
        })
    }

    function I(e, t, n) {
        var i = "string" == typeof t,
            r = i ? n : t || n,
            o = D(e);
        return E.has(o) || (o = e), [i, r, o]
    }

    function P(e, t, n, i, r) {
        if ("string" == typeof t && e) {
            var o, a = _slicedToArray(I(t, n, i), 3),
                s = a[0],
                l = a[1],
                c = a[2];
            if (t in A) {
                o = l, l = function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return o.call(this, e)
                }
            }
            var u = S(e),
                f = u[c] || (u[c] = {}),
                d = x(f, l, s ? n : null);
            if (d) d.oneOff = d.oneOff && r;
            else {
                var h, p, _, v, g, m = T(l, t.replace(b, "")),
                    y = s ? (_ = e, v = n, g = l, function e(t) {
                        for (var n = _.querySelectorAll(v), i = t.target; i && i !== this; i = i.parentNode) {
                            var r, o = _createForOfIteratorHelper(n);
                            try {
                                for (o.s(); !(r = o.n()).done;)
                                    if (r.value === i) return M(t, {
                                        delegateTarget: i
                                    }), e.oneOff && N.off(_, t.type, v, g), g.apply(i, [t])
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                    }) : (h = e, p = l, function e(t) {
                        return M(t, {
                            delegateTarget: h
                        }), e.oneOff && N.off(h, t.type, p), p.apply(h, [t])
                    });
                y.delegationSelector = s ? n : null, y.callable = l, y.oneOff = r, f[y.uidEvent = m] = y, e.addEventListener(c, y, s)
            }
        }
    }

    function L(e, t, n, i, r) {
        var o = x(t[n], i, r);
        o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent])
    }

    function j(e, t, n, i) {
        for (var r = t[n] || {}, o = 0, a = Object.entries(r); o < a.length; o++) {
            var s = _slicedToArray(a[o], 2),
                l = s[0],
                c = s[1];
            l.includes(i) && L(e, t, n, c.callable, c.delegationSelector)
        }
    }

    function D(e) {
        return e = e.replace(k, ""), A[e] || e
    }
    var N = {
        on: function(e, t, n, i) {
            P(e, t, n, i, !1)
        },
        one: function(e, t, n, i) {
            P(e, t, n, i, !0)
        },
        off: function(e, t, n, i) {
            if ("string" == typeof t && e) {
                var r = _slicedToArray(I(t, n, i), 3),
                    o = r[0],
                    a = r[1],
                    s = r[2],
                    l = s !== t,
                    c = S(e),
                    u = c[s] || {},
                    f = t.startsWith(".");
                if (void 0 === a) {
                    if (f)
                        for (var d = 0, h = Object.keys(c); d < h.length; d++) {
                            j(e, c, h[d], t.slice(1))
                        }
                    for (var p = 0, _ = Object.entries(u); p < _.length; p++) {
                        var v = _slicedToArray(_[p], 2),
                            g = v[0],
                            m = v[1],
                            y = g.replace(w, "");
                        l && !t.includes(y) || L(e, c, s, m.callable, m.delegationSelector)
                    }
                } else {
                    if (!Object.keys(u).length) return;
                    L(e, c, s, a, o ? n : null)
                }
            }
        },
        trigger: function(e, t, n) {
            if ("string" != typeof t || !e) return null;
            var i = _(),
                r = null,
                o = !0,
                a = !0,
                s = !1;
            t !== D(t) && i && (r = i.Event(t, n), i(e).trigger(r), o = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), s = r.isDefaultPrevented());
            var l = M(new Event(t, {
                bubbles: o,
                cancelable: !0
            }), n);
            return s && l.preventDefault(), a && e.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
        }
    };

    function M(i) {
        for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = function() {
                var e = _slicedToArray(o[r], 2),
                    t = e[0],
                    n = e[1];
                try {
                    i[t] = n
                } catch (e) {
                    Object.defineProperty(i, t, {
                        configurable: !0,
                        get: function() {
                            return n
                        }
                    })
                }
            }, r = 0, o = Object.entries(e); r < o.length; r++) t();
        return i
    }

    function F(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function H(e) {
        return e.replace(/[A-Z]/g, function(e) {
            return "-".concat(e.toLowerCase())
        })
    }
    var R = function(e, t, n) {
            e.setAttribute("data-bs-".concat(H(t)), n)
        },
        W = function(e, t) {
            e.removeAttribute("data-bs-".concat(H(t)))
        },
        B = function(e) {
            if (!e) return {};
            var t, n = {},
                i = _createForOfIteratorHelper(Object.keys(e.dataset).filter(function(e) {
                    return e.startsWith("bs") && !e.startsWith("bsConfig")
                }));
            try {
                for (i.s(); !(t = i.n()).done;) {
                    var r = t.value,
                        o = r.replace(/^bs/, "");
                    n[o = o.charAt(0).toLowerCase() + o.slice(1, o.length)] = F(e.dataset[r])
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            return n
        },
        z = function(e, t) {
            return F(e.getAttribute("data-bs-".concat(H(t))))
        },
        q = function() {
            function e() {
                _classCallCheck(this, e)
            }
            return _createClass(e, [{
                key: "_getConfig",
                value: function(e) {
                    return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e
                }
            }, {
                key: "_mergeConfigObj",
                value: function(e, t) {
                    var n = u(t) ? z(t, "config") : {};
                    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" === _typeof(n) ? n : {}), u(t) ? B(t) : {}), "object" === _typeof(e) ? e : {})
                }
            }, {
                key: "_typeCheckConfig",
                value: function(e) {
                    for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.constructor.DefaultType, i = 0, r = Object.entries(n); i < r.length; i++) {
                        var o = _slicedToArray(r[i], 2),
                            a = o[0],
                            s = o[1],
                            l = e[a],
                            c = u(l) ? "element" : null == (t = l) ? "".concat(t) : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(s).test(c)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ': Option "').concat(a, '" provided type "').concat(c, '" but expected type "').concat(s, '".'))
                    }
                }
            }], [{
                key: "Default",
                get: function() {
                    return {}
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return {}
                }
            }, {
                key: "NAME",
                get: function() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
            }]), e
        }(),
        V = function(e) {
            _inherits(r, q);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), n = i.call(this), (e = f(e)) ? (n._element = e, n._config = n._getConfig(t), o(n._element, n.constructor.DATA_KEY, _assertThisInitialized(n)), n) : _possibleConstructorReturn(n)
            }
            return _createClass(r, [{
                key: "dispose",
                value: function() {
                    n(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
                    var e, t = _createForOfIteratorHelper(Object.getOwnPropertyNames(this));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            this[e.value] = null
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "_queueCallback",
                value: function(e, t) {
                    var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                    m(e, t, n)
                }
            }, {
                key: "_getConfig",
                value: function(e) {
                    return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
                }
            }], [{
                key: "getInstance",
                value: function(e) {
                    return t(f(e), this.DATA_KEY)
                }
            }, {
                key: "getOrCreateInstance",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.getInstance(e) || new this(e, "object" === _typeof(t) ? t : null)
                }
            }, {
                key: "VERSION",
                get: function() {
                    return "5.3.3"
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.".concat(this.NAME)
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".".concat(this.DATA_KEY)
                }
            }, {
                key: "eventName",
                value: function(e) {
                    return "".concat(e).concat(this.EVENT_KEY)
                }
            }]), r
        }(),
        K = function(e) {
            var t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = "#".concat(n.split("#")[1])), t = n && "#" !== n ? n.trim() : null
            }
            return t ? t.split(",").map(function(e) {
                return i(e)
            }).join(",") : null
        },
        Q = {
            find: function(e) {
                var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                return (t = []).concat.apply(t, _toConsumableArray(Element.prototype.querySelectorAll.call(n, e)))
            },
            findOne: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                return Element.prototype.querySelector.call(t, e)
            },
            children: function(e, t) {
                var n;
                return (n = []).concat.apply(n, _toConsumableArray(e.children)).filter(function(e) {
                    return e.matches(t)
                })
            },
            parents: function(e, t) {
                for (var n = [], i = e.parentNode.closest(t); i;) n.push(i), i = i.parentNode.closest(t);
                return n
            },
            prev: function(e, t) {
                for (var n = e.previousElementSibling; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function(e, t) {
                for (var n = e.nextElementSibling; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            },
            focusableChildren: function(e) {
                var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function(e) {
                    return "".concat(e, ':not([tabindex^="-"])')
                }).join(",");
                return this.find(t, e).filter(function(e) {
                    return !d(e) && c(e)
                })
            },
            getSelectorFromElement: function(e) {
                var t = K(e);
                return t && Q.findOne(t) ? t : null
            },
            getElementFromSelector: function(e) {
                var t = K(e);
                return t ? Q.findOne(t) : null
            },
            getMultipleElementsFromSelector: function(e) {
                var t = K(e);
                return t ? Q.find(t) : []
            }
        },
        U = function(n) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "hide",
                e = "click.dismiss".concat(n.EVENT_KEY),
                r = n.NAME;
            N.on(document, e, '[data-bs-dismiss="'.concat(r, '"]'), function(e) {
                if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !d(this)) {
                    var t = Q.getElementFromSelector(this) || this.closest(".".concat(r));
                    n.getOrCreateInstance(t)[i]()
                }
            })
        },
        X = ".".concat("bs.alert"),
        Y = "close".concat(X),
        $ = "closed".concat(X),
        G = function(e) {
            _inherits(n, V);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }
            return _createClass(n, [{
                key: "close",
                value: function() {
                    var e = this;
                    if (!N.trigger(this._element, Y).defaultPrevented) {
                        this._element.classList.remove("show");
                        var t = this._element.classList.contains("fade");
                        this._queueCallback(function() {
                            return e._destroyElement()
                        }, this._element, t)
                    }
                }
            }, {
                key: "_destroyElement",
                value: function() {
                    this._element.remove(), N.trigger(this._element, $), this.dispose()
                }
            }], [{
                key: "NAME",
                get: function() {
                    return "alert"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = n.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](this)
                        }
                    })
                }
            }]), n
        }();
    U(G, "close"), e(G);
    var J = ".".concat("bs.button"),
        Z = '[data-bs-toggle="button"]',
        ee = "click".concat(J).concat(".data-api"),
        te = function(e) {
            _inherits(n, V);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }
            return _createClass(n, [{
                key: "toggle",
                value: function() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
            }], [{
                key: "NAME",
                get: function() {
                    return "button"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = n.getOrCreateInstance(this);
                        "toggle" === t && e[t]()
                    })
                }
            }]), n
        }();
    N.on(document, ee, Z, function(e) {
        e.preventDefault();
        var t = e.target.closest(Z);
        te.getOrCreateInstance(t).toggle()
    }), e(te);
    var ne = ".bs.swipe",
        ie = "touchstart".concat(ne),
        re = "touchmove".concat(ne),
        oe = "touchend".concat(ne),
        ae = "pointerdown".concat(ne),
        se = "pointerup".concat(ne),
        le = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        ce = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        },
        ue = function(e) {
            _inherits(r, q);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), ((n = i.call(this))._element = e) && r.isSupported() ? (n._config = n._getConfig(t), n._deltaX = 0, n._supportPointerEvents = Boolean(window.PointerEvent), n._initEvents(), n) : _possibleConstructorReturn(n)
            }
            return _createClass(r, [{
                key: "dispose",
                value: function() {
                    N.off(this._element, ne)
                }
            }, {
                key: "_start",
                value: function(e) {
                    this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
                }
            }, {
                key: "_end",
                value: function(e) {
                    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
                }
            }, {
                key: "_move",
                value: function(e) {
                    this._deltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this._deltaX
                }
            }, {
                key: "_handleSwipe",
                value: function() {
                    var e = Math.abs(this._deltaX);
                    if (!(e <= 40)) {
                        var t = e / this._deltaX;
                        this._deltaX = 0, t && g(0 < t ? this._config.rightCallback : this._config.leftCallback)
                    }
                }
            }, {
                key: "_initEvents",
                value: function() {
                    var t = this;
                    this._supportPointerEvents ? (N.on(this._element, ae, function(e) {
                        return t._start(e)
                    }), N.on(this._element, se, function(e) {
                        return t._end(e)
                    }), this._element.classList.add("pointer-event")) : (N.on(this._element, ie, function(e) {
                        return t._start(e)
                    }), N.on(this._element, re, function(e) {
                        return t._move(e)
                    }), N.on(this._element, oe, function(e) {
                        return t._end(e)
                    }))
                }
            }, {
                key: "_eventIsPointerPenTouch",
                value: function(e) {
                    return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
                }
            }], [{
                key: "Default",
                get: function() {
                    return le
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ce
                }
            }, {
                key: "NAME",
                get: function() {
                    return "swipe"
                }
            }, {
                key: "isSupported",
                value: function() {
                    return "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints
                }
            }]), r
        }(),
        fe = ".".concat("bs.carousel"),
        de = ".data-api",
        he = "next",
        pe = "prev",
        _e = "left",
        ve = "right",
        ge = "slide".concat(fe),
        me = "slid".concat(fe),
        ye = "keydown".concat(fe),
        be = "mouseenter".concat(fe),
        ke = "mouseleave".concat(fe),
        we = "dragstart".concat(fe),
        Ce = "load".concat(fe).concat(de),
        Oe = "click".concat(fe).concat(de),
        Ae = "carousel",
        Ee = "active",
        Te = ".active",
        Se = ".carousel-item",
        xe = _defineProperty(_defineProperty({}, "ArrowLeft", ve), "ArrowRight", _e),
        Ie = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        Pe = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        },
        Le = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), (n = i.call(this, e, t))._interval = null, n._activeElement = null, n._isSliding = !1, n.touchTimeout = null, n._swipeHelper = null, n._indicatorsElement = Q.findOne(".carousel-indicators", n._element), n._addEventListeners(), n._config.ride === Ae && n.cycle(), n
            }
            return _createClass(r, [{
                key: "next",
                value: function() {
                    this._slide(he)
                }
            }, {
                key: "nextWhenVisible",
                value: function() {
                    !document.hidden && c(this._element) && this.next()
                }
            }, {
                key: "prev",
                value: function() {
                    this._slide(pe)
                }
            }, {
                key: "pause",
                value: function() {
                    this._isSliding && s(this._element), this._clearInterval()
                }
            }, {
                key: "cycle",
                value: function() {
                    var e = this;
                    this._clearInterval(), this._updateInterval(), this._interval = setInterval(function() {
                        return e.nextWhenVisible()
                    }, this._config.interval)
                }
            }, {
                key: "_maybeEnableCycle",
                value: function() {
                    var e = this;
                    this._config.ride && (this._isSliding ? N.one(this._element, me, function() {
                        return e.cycle()
                    }) : this.cycle())
                }
            }, {
                key: "to",
                value: function(e) {
                    var t = this,
                        n = this._getItems();
                    if (!(e > n.length - 1 || e < 0))
                        if (this._isSliding) N.one(this._element, me, function() {
                            return t.to(e)
                        });
                        else {
                            var i = this._getItemIndex(this._getActive());
                            if (i !== e) {
                                var r = i < e ? he : pe;
                                this._slide(r, n[e])
                            }
                        }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e.defaultInterval = e.interval, e
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    var t = this;
                    this._config.keyboard && N.on(this._element, ye, function(e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && (N.on(this._element, be, function() {
                        return t.pause()
                    }), N.on(this._element, ke, function() {
                        return t._maybeEnableCycle()
                    })), this._config.touch && ue.isSupported() && this._addTouchEventListeners()
                }
            }, {
                key: "_addTouchEventListeners",
                value: function() {
                    var e, t = this,
                        n = _createForOfIteratorHelper(Q.find(".carousel-item img", this._element));
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value;
                            N.on(i, we, function(e) {
                                return e.preventDefault()
                            })
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    var r = {
                        leftCallback: function() {
                            return t._slide(t._directionToOrder(_e))
                        },
                        rightCallback: function() {
                            return t._slide(t._directionToOrder(ve))
                        },
                        endCallback: function() {
                            "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function() {
                                return t._maybeEnableCycle()
                            }, 500 + t._config.interval))
                        }
                    };
                    this._swipeHelper = new ue(this._element, r)
                }
            }, {
                key: "_keydown",
                value: function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) {
                        var t = xe[e.key];
                        t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
                    }
                }
            }, {
                key: "_getItemIndex",
                value: function(e) {
                    return this._getItems().indexOf(e)
                }
            }, {
                key: "_setActiveIndicatorElement",
                value: function(e) {
                    if (this._indicatorsElement) {
                        var t = Q.findOne(Te, this._indicatorsElement);
                        t.classList.remove(Ee), t.removeAttribute("aria-current");
                        var n = Q.findOne('[data-bs-slide-to="'.concat(e, '"]'), this._indicatorsElement);
                        n && (n.classList.add(Ee), n.setAttribute("aria-current", "true"))
                    }
                }
            }, {
                key: "_updateInterval",
                value: function() {
                    var e = this._activeElement || this._getActive();
                    if (e) {
                        var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                        this._config.interval = t || this._config.defaultInterval
                    }
                }
            }, {
                key: "_slide",
                value: function(t) {
                    var n = this,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!this._isSliding) {
                        var i = this._getActive(),
                            r = t === he,
                            o = e || y(this._getItems(), i, r, this._config.wrap);
                        if (o !== i) {
                            var a = this._getItemIndex(o),
                                s = function(e) {
                                    return N.trigger(n._element, e, {
                                        relatedTarget: o,
                                        direction: n._orderToDirection(t),
                                        from: n._getItemIndex(i),
                                        to: a
                                    })
                                };
                            if (!s(ge).defaultPrevented && i && o) {
                                var l = Boolean(this._interval);
                                this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = o;
                                var c = r ? "carousel-item-start" : "carousel-item-end",
                                    u = r ? "carousel-item-next" : "carousel-item-prev";
                                o.classList.add(u), p(o), i.classList.add(c), o.classList.add(c);
                                this._queueCallback(function() {
                                    o.classList.remove(c, u), o.classList.add(Ee), i.classList.remove(Ee, u, c), n._isSliding = !1, s(me)
                                }, i, this._isAnimated()), l && this.cycle()
                            }
                        }
                    }
                }
            }, {
                key: "_isAnimated",
                value: function() {
                    return this._element.classList.contains("slide")
                }
            }, {
                key: "_getActive",
                value: function() {
                    return Q.findOne(".active.carousel-item", this._element)
                }
            }, {
                key: "_getItems",
                value: function() {
                    return Q.find(Se, this._element)
                }
            }, {
                key: "_clearInterval",
                value: function() {
                    this._interval && (clearInterval(this._interval), this._interval = null)
                }
            }, {
                key: "_directionToOrder",
                value: function(e) {
                    return v() ? e === _e ? pe : he : e === _e ? he : pe
                }
            }, {
                key: "_orderToDirection",
                value: function(e) {
                    return v() ? e === pe ? _e : ve : e === pe ? ve : _e
                }
            }], [{
                key: "Default",
                get: function() {
                    return Ie
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Pe
                }
            }, {
                key: "NAME",
                get: function() {
                    return "carousel"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("number" != typeof t) {
                            if ("string" == typeof t) {
                                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                                e[t]()
                            }
                        } else e.to(t)
                    })
                }
            }]), r
        }();
    N.on(document, Oe, "[data-bs-slide], [data-bs-slide-to]", function(e) {
        var t = Q.getElementFromSelector(this);
        if (t && t.classList.contains(Ae)) {
            e.preventDefault();
            var n = Le.getOrCreateInstance(t),
                i = this.getAttribute("data-bs-slide-to");
            if (i) return n.to(i), void n._maybeEnableCycle();
            if ("next" === z(this, "slide")) return n.next(), void n._maybeEnableCycle();
            n.prev(), n._maybeEnableCycle()
        }
    }), N.on(window, Ce, function() {
        var e, t = _createForOfIteratorHelper(Q.find('[data-bs-ride="carousel"]'));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                Le.getOrCreateInstance(n)
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }), e(Le);
    var je = ".".concat("bs.collapse"),
        De = "show".concat(je),
        Ne = "shown".concat(je),
        Me = "hide".concat(je),
        Fe = "hidden".concat(je),
        He = "click".concat(je).concat(".data-api"),
        Re = "show",
        We = "collapse",
        Be = "collapsing",
        ze = ":scope .".concat(We, " .").concat(We),
        qe = '[data-bs-toggle="collapse"]',
        Ve = {
            parent: null,
            toggle: !0
        },
        Ke = {
            parent: "(null|element)",
            toggle: "boolean"
        },
        Qe = function(e) {
            _inherits(c, V);
            var l = _createSuper(c);

            function c(e, t) {
                var n;
                _classCallCheck(this, c), (n = l.call(this, e, t))._isTransitioning = !1, n._triggerArray = [];
                var i, r = _createForOfIteratorHelper(Q.find(qe));
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        var o = i.value,
                            a = Q.getSelectorFromElement(o),
                            s = Q.find(a).filter(function(e) {
                                return e === n._element
                            });
                        null !== a && s.length && n._triggerArray.push(o)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return n._initializeChildren(), n._config.parent || n._addAriaAndCollapsedClass(n._triggerArray, n._isShown()), n._config.toggle && n.toggle(), n
            }
            return _createClass(c, [{
                key: "toggle",
                value: function() {
                    this._isShown() ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    if (!this._isTransitioning && !this._isShown()) {
                        var e = [];
                        if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function(e) {
                                return e !== t._element
                            }).map(function(e) {
                                return c.getOrCreateInstance(e, {
                                    toggle: !1
                                })
                            })), !e.length || !e[0]._isTransitioning)
                            if (!N.trigger(this._element, De).defaultPrevented) {
                                var n, i = _createForOfIteratorHelper(e);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        n.value.hide()
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                                var r = this._getDimension();
                                this._element.classList.remove(We), this._element.classList.add(Be), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                                var o = r[0].toUpperCase() + r.slice(1),
                                    a = "scroll".concat(o);
                                this._queueCallback(function() {
                                    t._isTransitioning = !1, t._element.classList.remove(Be), t._element.classList.add(We, Re), t._element.style[r] = "", N.trigger(t._element, Ne)
                                }, this._element, !0), this._element.style[r] = "".concat(this._element[a], "px")
                            }
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    if (!this._isTransitioning && this._isShown() && !N.trigger(this._element, Me).defaultPrevented) {
                        var t = this._getDimension();
                        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), p(this._element), this._element.classList.add(Be), this._element.classList.remove(We, Re);
                        var n, i = _createForOfIteratorHelper(this._triggerArray);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = n.value,
                                    o = Q.getElementFromSelector(r);
                                o && !this._isShown(o) && this._addAriaAndCollapsedClass([r], !1)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this._isTransitioning = !0;
                        this._element.style[t] = "", this._queueCallback(function() {
                            e._isTransitioning = !1, e._element.classList.remove(Be), e._element.classList.add(We), N.trigger(e._element, Fe)
                        }, this._element, !0)
                    }
                }
            }, {
                key: "_isShown",
                value: function() {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._element).classList.contains(Re)
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e.toggle = Boolean(e.toggle), e.parent = f(e.parent), e
                }
            }, {
                key: "_getDimension",
                value: function() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
            }, {
                key: "_initializeChildren",
                value: function() {
                    if (this._config.parent) {
                        var e, t = _createForOfIteratorHelper(this._getFirstLevelChildren(qe));
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value,
                                    i = Q.getElementFromSelector(n);
                                i && this._addAriaAndCollapsedClass([n], this._isShown(i))
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }
            }, {
                key: "_getFirstLevelChildren",
                value: function(e) {
                    var t = Q.find(ze, this._config.parent);
                    return Q.find(e, this._config.parent).filter(function(e) {
                        return !t.includes(e)
                    })
                }
            }, {
                key: "_addAriaAndCollapsedClass",
                value: function(e, t) {
                    if (e.length) {
                        var n, i = _createForOfIteratorHelper(e);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var r = n.value;
                                r.classList.toggle("collapsed", !t), r.setAttribute("aria-expanded", t)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }
            }], [{
                key: "Default",
                get: function() {
                    return Ve
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ke
                }
            }, {
                key: "NAME",
                get: function() {
                    return "collapse"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    var n = {};
                    return "string" == typeof t && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
                        var e = c.getOrCreateInstance(this, n);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }]), c
        }();
    N.on(document, He, qe, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        var t, n = _createForOfIteratorHelper(Q.getMultipleElementsFromSelector(this));
        try {
            for (n.s(); !(t = n.n()).done;) {
                var i = t.value;
                Qe.getOrCreateInstance(i, {
                    toggle: !1
                }).toggle()
            }
        } catch (e) {
            n.e(e)
        } finally {
            n.f()
        }
    }), e(Qe);
    var Ue = "top",
        Xe = "bottom",
        Ye = "right",
        $e = "left",
        Ge = "auto",
        Je = [Ue, Xe, Ye, $e],
        Ze = "start",
        et = "end",
        tt = "clippingParents",
        nt = "viewport",
        it = "popper",
        rt = "reference",
        ot = Je.reduce(function(e, t) {
            return e.concat([t + "-" + Ze, t + "-" + et])
        }, []),
        at = [].concat(Je, [Ge]).reduce(function(e, t) {
            return e.concat([t, t + "-" + Ze, t + "-" + et])
        }, []),
        st = "beforeRead",
        lt = "afterRead",
        ct = "beforeMain",
        ut = "afterMain",
        ft = "beforeWrite",
        dt = "afterWrite",
        ht = [st, "read", lt, ct, "main", ut, ft, "write", dt];

    function pt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function _t(e) {
        if (null == e) return window;
        if ("[object Window]" === e.toString()) return e;
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }

    function vt(e) {
        return e instanceof _t(e).Element || e instanceof Element
    }

    function gt(e) {
        return e instanceof _t(e).HTMLElement || e instanceof HTMLElement
    }

    function mt(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof _t(e).ShadowRoot || e instanceof ShadowRoot)
    }
    var yt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var r = e.state;
            Object.keys(r.elements).forEach(function(e) {
                var t = r.styles[e] || {},
                    n = r.attributes[e] || {},
                    i = r.elements[e];
                gt(i) && pt(i) && (Object.assign(i.style, t), Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                }))
            })
        },
        effect: function(e) {
            var r = e.state,
                o = {
                    popper: {
                        position: r.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(r.elements.popper.style, o.popper), r.styles = o, r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow),
                function() {
                    Object.keys(r.elements).forEach(function(e) {
                        var t = r.elements[e],
                            n = r.attributes[e] || {},
                            i = Object.keys(r.styles.hasOwnProperty(e) ? r.styles[e] : o[e]).reduce(function(e, t) {
                                return e[t] = "", e
                            }, {});
                        gt(t) && pt(t) && (Object.assign(t.style, i), Object.keys(n).forEach(function(e) {
                            t.removeAttribute(e)
                        }))
                    })
                }
        },
        requires: ["computeStyles"]
    };

    function bt(e) {
        return e.split("-")[0]
    }
    var kt = Math.max,
        wt = Math.min,
        Ct = Math.round;

    function Ot() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
            return e.brand + "/" + e.version
        }).join(" ") : navigator.userAgent
    }

    function At() {
        return !/^((?!chrome|android).)*safari/i.test(Ot())
    }

    function Et(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var i = e.getBoundingClientRect(),
            r = 1,
            o = 1;
        t && gt(e) && (r = 0 < e.offsetWidth && Ct(i.width) / e.offsetWidth || 1, o = 0 < e.offsetHeight && Ct(i.height) / e.offsetHeight || 1);
        var a = (vt(e) ? _t(e) : window).visualViewport,
            s = !At() && n,
            l = (i.left + (s && a ? a.offsetLeft : 0)) / r,
            c = (i.top + (s && a ? a.offsetTop : 0)) / o,
            u = i.width / r,
            f = i.height / o;
        return {
            width: u,
            height: f,
            top: c,
            right: l + u,
            bottom: c + f,
            left: l,
            x: l,
            y: c
        }
    }

    function Tt(e) {
        var t = Et(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    }

    function St(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && mt(n)) {
            var i = t;
            do {
                if (i && e.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function xt(e) {
        return _t(e).getComputedStyle(e)
    }

    function It(e) {
        return ((vt(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function Pt(e) {
        return "html" === pt(e) ? e : e.assignedSlot || e.parentNode || (mt(e) ? e.host : null) || It(e)
    }

    function Lt(e) {
        return gt(e) && "fixed" !== xt(e).position ? e.offsetParent : null
    }

    function jt(e) {
        for (var t = _t(e), n = Lt(e); n && 0 <= ["table", "td", "th"].indexOf(pt(n)) && "static" === xt(n).position;) n = Lt(n);
        return n && ("html" === pt(n) || "body" === pt(n) && "static" === xt(n).position) ? t : n || function(e) {
            var t = /firefox/i.test(Ot());
            if (/Trident/i.test(Ot()) && gt(e) && "fixed" === xt(e).position) return null;
            var n = Pt(e);
            for (mt(n) && (n = n.host); gt(n) && ["html", "body"].indexOf(pt(n)) < 0;) {
                var i = xt(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(e) || t
    }

    function Dt(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }

    function Nt(e, t, n) {
        return kt(e, wt(t, n))
    }

    function Mt(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function Ft(n, e) {
        return e.reduce(function(e, t) {
            return e[t] = n, e
        }, {})
    }
    var Ht = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state,
                i = e.name,
                r = e.options,
                o = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = bt(n.placement),
                l = Dt(s),
                c = 0 <= [$e, Ye].indexOf(s) ? "height" : "width";
            if (o && a) {
                var u, f, d = (u = r.padding, f = n, Mt("number" != typeof(u = "function" == typeof u ? u(Object.assign({}, f.rects, {
                        placement: f.placement
                    })) : u) ? u : Ft(u, Je))),
                    h = Tt(o),
                    p = "y" === l ? Ue : $e,
                    _ = "y" === l ? Xe : Ye,
                    v = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
                    g = a[l] - n.rects.reference[l],
                    m = jt(o),
                    y = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                    b = v / 2 - g / 2,
                    k = d[p],
                    w = y - h[c] - d[_],
                    C = y / 2 - h[c] / 2 + b,
                    O = Nt(k, C, w),
                    A = l;
                n.modifiersData[i] = ((t = {})[A] = O, t.centerOffset = O - C, t)
            }
        },
        effect: function(e) {
            var t = e.state,
                n = e.options.element,
                i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && St(t.elements.popper, i) && (t.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function Rt(e) {
        return e.split("-")[1]
    }
    var Wt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function Bt(e) {
        var t, n = e.popper,
            i = e.popperRect,
            r = e.placement,
            o = e.variation,
            a = e.offsets,
            s = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            u = e.roundOffsets,
            f = e.isFixed,
            d = a.x,
            h = void 0 === d ? 0 : d,
            p = a.y,
            _ = void 0 === p ? 0 : p,
            v = "function" == typeof u ? u({
                x: h,
                y: _
            }) : {
                x: h,
                y: _
            };
        h = v.x, _ = v.y;
        var g = a.hasOwnProperty("x"),
            m = a.hasOwnProperty("y"),
            y = $e,
            b = Ue,
            k = window;
        if (c) {
            var w = jt(n),
                C = "clientHeight",
                O = "clientWidth";
            if (w === _t(n) && "static" !== xt(w = It(n)).position && "absolute" === s && (C = "scrollHeight", O = "scrollWidth"), w = w, r === Ue || (r === $e || r === Ye) && o === et) b = Xe, _ -= (f && w === k && k.visualViewport ? k.visualViewport.height : w[C]) - i.height, _ *= l ? 1 : -1;
            if (r === $e || (r === Ue || r === Xe) && o === et) y = Ye, h -= (f && w === k && k.visualViewport ? k.visualViewport.width : w[O]) - i.width, h *= l ? 1 : -1
        }
        var A, E, T, S, x, I, P = Object.assign({
                position: s
            }, c && Wt),
            L = !0 === u ? (A = {
                x: h,
                y: _
            }, E = _t(n), T = A.x, S = A.y, x = E.devicePixelRatio || 1, {
                x: Ct(T * x) / x || 0,
                y: Ct(S * x) / x || 0
            }) : {
                x: h,
                y: _
            };
        return h = L.x, _ = L.y, l ? Object.assign({}, P, ((I = {})[b] = m ? "0" : "", I[y] = g ? "0" : "", I.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + _ + "px)" : "translate3d(" + h + "px, " + _ + "px, 0)", I)) : Object.assign({}, P, ((t = {})[b] = m ? _ + "px" : "", t[y] = g ? h + "px" : "", t.transform = "", t))
    }
    var zt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    i = n.gpuAcceleration,
                    r = void 0 === i || i,
                    o = n.adaptive,
                    a = void 0 === o || o,
                    s = n.roundOffsets,
                    l = void 0 === s || s,
                    c = {
                        placement: bt(t.placement),
                        variation: Rt(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: r,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Bt(Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: a,
                    roundOffsets: l
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bt(Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        },
        qt = {
            passive: !0
        };
    var Vt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state,
                    n = e.instance,
                    i = e.options,
                    r = i.scroll,
                    o = void 0 === r || r,
                    a = i.resize,
                    s = void 0 === a || a,
                    l = _t(t.elements.popper),
                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return o && c.forEach(function(e) {
                        e.addEventListener("scroll", n.update, qt)
                    }), s && l.addEventListener("resize", n.update, qt),
                    function() {
                        o && c.forEach(function(e) {
                            e.removeEventListener("scroll", n.update, qt)
                        }), s && l.removeEventListener("resize", n.update, qt)
                    }
            },
            data: {}
        },
        Kt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function Qt(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return Kt[e]
        })
    }
    var Ut = {
        start: "end",
        end: "start"
    };

    function Xt(e) {
        return e.replace(/start|end/g, function(e) {
            return Ut[e]
        })
    }

    function Yt(e) {
        var t = _t(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function $t(e) {
        return Et(It(e)).left + Yt(e).scrollLeft
    }

    function Gt(e) {
        var t = xt(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i)
    }

    function Jt(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = function e(t) {
                return 0 <= ["html", "body", "#document"].indexOf(pt(t)) ? t.ownerDocument.body : gt(t) && Gt(t) ? t : e(Pt(t))
            }(e),
            r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
            o = _t(i),
            a = r ? [o].concat(o.visualViewport || [], Gt(i) ? i : []) : i,
            s = t.concat(a);
        return r ? s : s.concat(Jt(Pt(a)))
    }

    function Zt(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function en(e, t, n) {
        return t === nt ? Zt(function(e, t) {
            var n = _t(e),
                i = It(e),
                r = n.visualViewport,
                o = i.clientWidth,
                a = i.clientHeight,
                s = 0,
                l = 0;
            if (r) {
                o = r.width, a = r.height;
                var c = At();
                (c || !c && "fixed" === t) && (s = r.offsetLeft, l = r.offsetTop)
            }
            return {
                width: o,
                height: a,
                x: s + $t(e),
                y: l
            }
        }(e, n)) : vt(t) ? ((h = Et(d = t, !1, "fixed" === n)).top = h.top + d.clientTop, h.left = h.left + d.clientLeft, h.bottom = h.top + d.clientHeight, h.right = h.left + d.clientWidth, h.width = d.clientWidth, h.height = d.clientHeight, h.x = h.left, h.y = h.top, h) : Zt((i = It(e), o = It(i), a = Yt(i), s = null == (r = i.ownerDocument) ? void 0 : r.body, l = kt(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), c = kt(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), u = -a.scrollLeft + $t(i), f = -a.scrollTop, "rtl" === xt(s || o).direction && (u += kt(o.clientWidth, s ? s.clientWidth : 0) - l), {
            width: l,
            height: c,
            x: u,
            y: f
        }));
        var i, r, o, a, s, l, c, u, f, d, h
    }

    function tn(i, e, t, r) {
        var n, o, a, s = "clippingParents" === e ? (o = Jt(Pt(n = i)), vt(a = 0 <= ["absolute", "fixed"].indexOf(xt(n).position) && gt(n) ? jt(n) : n) ? o.filter(function(e) {
                return vt(e) && St(e, a) && "body" !== pt(e)
            }) : []) : [].concat(e),
            l = [].concat(s, [t]),
            c = l[0],
            u = l.reduce(function(e, t) {
                var n = en(i, t, r);
                return e.top = kt(n.top, e.top), e.right = wt(n.right, e.right), e.bottom = wt(n.bottom, e.bottom), e.left = kt(n.left, e.left), e
            }, en(i, c, r));
        return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u
    }

    function nn(e) {
        var t, n = e.reference,
            i = e.element,
            r = e.placement,
            o = r ? bt(r) : null,
            a = r ? Rt(r) : null,
            s = n.x + n.width / 2 - i.width / 2,
            l = n.y + n.height / 2 - i.height / 2;
        switch (o) {
            case Ue:
                t = {
                    x: s,
                    y: n.y - i.height
                };
                break;
            case Xe:
                t = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case Ye:
                t = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case $e:
                t = {
                    x: n.x - i.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
        }
        var c = o ? Dt(o) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (a) {
                case Ze:
                    t[c] = t[c] - (n[u] / 2 - i[u] / 2);
                    break;
                case et:
                    t[c] = t[c] + (n[u] / 2 - i[u] / 2)
            }
        }
        return t
    }

    function rn(e, t) {
        void 0 === t && (t = {});
        var n = t,
            i = n.placement,
            r = void 0 === i ? e.placement : i,
            o = n.strategy,
            a = void 0 === o ? e.strategy : o,
            s = n.boundary,
            l = void 0 === s ? tt : s,
            c = n.rootBoundary,
            u = void 0 === c ? nt : c,
            f = n.elementContext,
            d = void 0 === f ? it : f,
            h = n.altBoundary,
            p = void 0 !== h && h,
            _ = n.padding,
            v = void 0 === _ ? 0 : _,
            g = Mt("number" != typeof v ? v : Ft(v, Je)),
            m = d === it ? rt : it,
            y = e.rects.popper,
            b = e.elements[p ? m : d],
            k = tn(vt(b) ? b : b.contextElement || It(e.elements.popper), l, u, a),
            w = Et(e.elements.reference),
            C = nn({
                reference: w,
                element: y,
                strategy: "absolute",
                placement: r
            }),
            O = Zt(Object.assign({}, y, C)),
            A = d === it ? O : w,
            E = {
                top: k.top - A.top + g.top,
                bottom: A.bottom - k.bottom + g.bottom,
                left: k.left - A.left + g.left,
                right: A.right - k.right + g.right
            },
            T = e.modifiersData.offset;
        if (d === it && T) {
            var S = T[r];
            Object.keys(E).forEach(function(e) {
                var t = 0 <= [Ye, Xe].indexOf(e) ? 1 : -1,
                    n = 0 <= [Ue, Xe].indexOf(e) ? "y" : "x";
                E[e] += S[n] * t
            })
        }
        return E
    }
    var on = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var n = e.state,
                t = e.options,
                i = e.name;
            if (!n.modifiersData[i]._skip) {
                for (var r = t.mainAxis, o = void 0 === r || r, a = t.altAxis, s = void 0 === a || a, l = t.fallbackPlacements, c = t.padding, u = t.boundary, f = t.rootBoundary, d = t.altBoundary, h = t.flipVariations, p = void 0 === h || h, _ = t.allowedAutoPlacements, v = n.options.placement, g = bt(v), m = l || (g !== v && p ? function(e) {
                        if (bt(e) === Ge) return [];
                        var t = Qt(e);
                        return [Xt(e), t, Xt(t)]
                    }(v) : [Qt(v)]), y = [v].concat(m).reduce(function(e, t) {
                        return e.concat(bt(t) === Ge ? function(n, e) {
                            void 0 === e && (e = {});
                            var t = e,
                                i = t.placement,
                                r = t.boundary,
                                o = t.rootBoundary,
                                a = t.padding,
                                s = t.flipVariations,
                                l = t.allowedAutoPlacements,
                                c = void 0 === l ? at : l,
                                u = Rt(i),
                                f = u ? s ? ot : ot.filter(function(e) {
                                    return Rt(e) === u
                                }) : Je,
                                d = f.filter(function(e) {
                                    return 0 <= c.indexOf(e)
                                });
                            0 === d.length && (d = f);
                            var h = d.reduce(function(e, t) {
                                return e[t] = rn(n, {
                                    placement: t,
                                    boundary: r,
                                    rootBoundary: o,
                                    padding: a
                                })[bt(t)], e
                            }, {});
                            return Object.keys(h).sort(function(e, t) {
                                return h[e] - h[t]
                            })
                        }(n, {
                            placement: t,
                            boundary: u,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: _
                        }) : t)
                    }, []), b = n.rects.reference, k = n.rects.popper, w = new Map, C = !0, O = y[0], A = 0; A < y.length; A++) {
                    var E = y[A],
                        T = bt(E),
                        S = Rt(E) === Ze,
                        x = 0 <= [Ue, Xe].indexOf(T),
                        I = x ? "width" : "height",
                        P = rn(n, {
                            placement: E,
                            boundary: u,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: c
                        }),
                        L = x ? S ? Ye : $e : S ? Xe : Ue;
                    b[I] > k[I] && (L = Qt(L));
                    var j = Qt(L),
                        D = [];
                    if (o && D.push(P[T] <= 0), s && D.push(P[L] <= 0, P[j] <= 0), D.every(function(e) {
                            return e
                        })) {
                        O = E, C = !1;
                        break
                    }
                    w.set(E, D)
                }
                if (C)
                    for (var N = function(n) {
                            var e = y.find(function(e) {
                                var t = w.get(e);
                                if (t) return t.slice(0, n).every(function(e) {
                                    return e
                                })
                            });
                            if (e) return O = e, "break"
                        }, M = p ? 3 : 1; 0 < M && "break" !== N(M); M--);
                n.placement !== O && (n.modifiersData[i]._skip = !0, n.placement = O, n.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function an(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function sn(t) {
        return [Ue, Ye, Xe, $e].some(function(e) {
            return 0 <= t[e]
        })
    }
    var ln = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state,
                n = e.name,
                i = t.rects.reference,
                r = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                a = rn(t, {
                    elementContext: "reference"
                }),
                s = rn(t, {
                    altBoundary: !0
                }),
                l = an(a, i),
                c = an(s, r, o),
                u = sn(l),
                f = sn(c);
            t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: f
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": f
            })
        }
    };
    var cn = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var u = e.state,
                t = e.options,
                n = e.name,
                i = t.offset,
                f = void 0 === i ? [0, 0] : i,
                r = at.reduce(function(e, t) {
                    var n, i, r, o, a, s, l, c;
                    return e[t] = (n = t, i = u.rects, r = f, o = bt(n), a = 0 <= [$e, Ue].indexOf(o) ? -1 : 1, s = "function" == typeof r ? r(Object.assign({}, i, {
                        placement: n
                    })) : r, l = s[0], c = s[1], l = l || 0, c = (c || 0) * a, 0 <= [$e, Ye].indexOf(o) ? {
                        x: c,
                        y: l
                    } : {
                        x: l,
                        y: c
                    }), e
                }, {}),
                o = r[u.placement],
                a = o.x,
                s = o.y;
            null != u.modifiersData.popperOffsets && (u.modifiersData.popperOffsets.x += a, u.modifiersData.popperOffsets.y += s), u.modifiersData[n] = r
        }
    };
    var un = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state,
                n = e.name;
            t.modifiersData[n] = nn({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    };
    var fn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                i = e.name,
                r = n.mainAxis,
                o = void 0 === r || r,
                a = n.altAxis,
                s = void 0 !== a && a,
                l = n.boundary,
                c = n.rootBoundary,
                u = n.altBoundary,
                f = n.padding,
                d = n.tether,
                h = void 0 === d || d,
                p = n.tetherOffset,
                _ = void 0 === p ? 0 : p,
                v = rn(t, {
                    boundary: l,
                    rootBoundary: c,
                    padding: f,
                    altBoundary: u
                }),
                g = bt(t.placement),
                m = Rt(t.placement),
                y = !m,
                b = Dt(g),
                k = "x" === b ? "y" : "x",
                w = t.modifiersData.popperOffsets,
                C = t.rects.reference,
                O = t.rects.popper,
                A = "function" == typeof _ ? _(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : _,
                E = "number" == typeof A ? {
                    mainAxis: A,
                    altAxis: A
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, A),
                T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                S = {
                    x: 0,
                    y: 0
                };
            if (w) {
                if (o) {
                    var x, I = "y" === b ? Ue : $e,
                        P = "y" === b ? Xe : Ye,
                        L = "y" === b ? "height" : "width",
                        j = w[b],
                        D = j + v[I],
                        N = j - v[P],
                        M = h ? -O[L] / 2 : 0,
                        F = m === Ze ? C[L] : O[L],
                        H = m === Ze ? -O[L] : -C[L],
                        R = t.elements.arrow,
                        W = h && R ? Tt(R) : {
                            width: 0,
                            height: 0
                        },
                        B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        z = B[I],
                        q = B[P],
                        V = Nt(0, C[L], W[L]),
                        K = y ? C[L] / 2 - M - V - z - E.mainAxis : F - V - z - E.mainAxis,
                        Q = y ? -C[L] / 2 + M + V + q + E.mainAxis : H + V + q + E.mainAxis,
                        U = t.elements.arrow && jt(t.elements.arrow),
                        X = U ? "y" === b ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                        Y = null != (x = null == T ? void 0 : T[b]) ? x : 0,
                        $ = j + Q - Y,
                        G = Nt(h ? wt(D, j + K - Y - X) : D, j, h ? kt(N, $) : N);
                    w[b] = G, S[b] = G - j
                }
                if (s) {
                    var J, Z = "x" === b ? Ue : $e,
                        ee = "x" === b ? Xe : Ye,
                        te = w[k],
                        ne = "y" === k ? "height" : "width",
                        ie = te + v[Z],
                        re = te - v[ee],
                        oe = -1 !== [Ue, $e].indexOf(g),
                        ae = null != (J = null == T ? void 0 : T[k]) ? J : 0,
                        se = oe ? ie : te - C[ne] - O[ne] - ae + E.altAxis,
                        le = oe ? te + C[ne] + O[ne] - ae - E.altAxis : re,
                        ce = h && oe ? (fe = Nt(se, te, ue = le), ue < fe ? ue : fe) : Nt(h ? se : ie, te, h ? le : re);
                    w[k] = ce, S[k] = ce - te
                }
                var ue, fe;
                t.modifiersData[i] = S
            }
        },
        requiresIfExists: ["offset"]
    };

    function dn(e, t, n) {
        void 0 === n && (n = !1);
        var i, r, o, a, s, l, c = gt(t),
            u = gt(t) && (r = (i = t).getBoundingClientRect(), o = Ct(r.width) / i.offsetWidth || 1, a = Ct(r.height) / i.offsetHeight || 1, 1 !== o || 1 !== a),
            f = It(t),
            d = Et(e, u, n),
            h = {
                scrollLeft: 0,
                scrollTop: 0
            },
            p = {
                x: 0,
                y: 0
            };
        return (c || !c && !n) && (("body" !== pt(t) || Gt(f)) && (h = (s = t) !== _t(s) && gt(s) ? {
            scrollLeft: (l = s).scrollLeft,
            scrollTop: l.scrollTop
        } : Yt(s)), gt(t) ? ((p = Et(t, !0)).x += t.clientLeft, p.y += t.clientTop) : f && (p.x = $t(f))), {
            x: d.left + h.scrollLeft - p.x,
            y: d.top + h.scrollTop - p.y,
            width: d.width,
            height: d.height
        }
    }

    function hn(e) {
        var i = new Map,
            r = new Set,
            t = [];
        return e.forEach(function(e) {
            i.set(e.name, e)
        }), e.forEach(function(e) {
            r.has(e.name) || function n(e) {
                r.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                    if (!r.has(e)) {
                        var t = i.get(e);
                        t && n(t)
                    }
                }), t.push(e)
            }(e)
        }), t
    }
    var pn = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function _n() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function vn(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            p = void 0 === n ? [] : n,
            i = t.defaultOptions,
            _ = void 0 === i ? pn : i;
        return function(s, l, t) {
            void 0 === t && (t = _);
            var n, i, c = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, pn, _),
                    modifiersData: {},
                    elements: {
                        reference: s,
                        popper: l
                    },
                    attributes: {},
                    styles: {}
                },
                u = [],
                f = !1,
                d = {
                    state: c,
                    setOptions: function(e) {
                        var t = "function" == typeof e ? e(c.options) : e;
                        h(), c.options = Object.assign({}, _, c.options, t), c.scrollParents = {
                            reference: vt(s) ? Jt(s) : s.contextElement ? Jt(s.contextElement) : [],
                            popper: Jt(l)
                        };
                        var n, i, r, o, a = (r = [].concat(p, c.options.modifiers), o = r.reduce(function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t, e
                        }, {}), n = Object.keys(o).map(function(e) {
                            return o[e]
                        }), i = hn(n), ht.reduce(function(e, t) {
                            return e.concat(i.filter(function(e) {
                                return e.phase === t
                            }))
                        }, []));
                        return c.orderedModifiers = a.filter(function(e) {
                            return e.enabled
                        }), c.orderedModifiers.forEach(function(e) {
                            var t = e.name,
                                n = e.options,
                                i = void 0 === n ? {} : n,
                                r = e.effect;
                            if ("function" == typeof r) {
                                var o = r({
                                    state: c,
                                    name: t,
                                    instance: d,
                                    options: i
                                });
                                u.push(o || function() {})
                            }
                        }), d.update()
                    },
                    forceUpdate: function() {
                        if (!f) {
                            var e = c.elements,
                                t = e.reference,
                                n = e.popper;
                            if (_n(t, n)) {
                                c.rects = {
                                    reference: dn(t, jt(n), "fixed" === c.options.strategy),
                                    popper: Tt(n)
                                }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(e) {
                                    return c.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var i = 0; i < c.orderedModifiers.length; i++)
                                    if (!0 !== c.reset) {
                                        var r = c.orderedModifiers[i],
                                            o = r.fn,
                                            a = r.options,
                                            s = void 0 === a ? {} : a,
                                            l = r.name;
                                        "function" == typeof o && (c = o({
                                            state: c,
                                            options: s,
                                            name: l,
                                            instance: d
                                        }) || c)
                                    } else c.reset = !1, i = -1
                            }
                        }
                    },
                    update: (n = function() {
                        return new Promise(function(e) {
                            d.forceUpdate(), e(c)
                        })
                    }, function() {
                        return i || (i = new Promise(function(e) {
                            Promise.resolve().then(function() {
                                i = void 0, e(n())
                            })
                        })), i
                    }),
                    destroy: function() {
                        h(), f = !0
                    }
                };
            if (!_n(s, l)) return d;

            function h() {
                u.forEach(function(e) {
                    return e()
                }), u = []
            }
            return d.setOptions(t).then(function(e) {
                !f && t.onFirstUpdate && t.onFirstUpdate(e)
            }), d
        }
    }
    var gn = vn(),
        mn = vn({
            defaultModifiers: [Vt, un, zt, yt]
        }),
        yn = vn({
            defaultModifiers: [Vt, un, zt, yt, cn, on, fn, Ht, ln]
        }),
        bn = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: ut,
            afterRead: lt,
            afterWrite: dt,
            applyStyles: yt,
            arrow: Ht,
            auto: Ge,
            basePlacements: Je,
            beforeMain: ct,
            beforeRead: st,
            beforeWrite: ft,
            bottom: Xe,
            clippingParents: tt,
            computeStyles: zt,
            createPopper: yn,
            createPopperBase: gn,
            createPopperLite: mn,
            detectOverflow: rn,
            end: et,
            eventListeners: Vt,
            flip: on,
            hide: ln,
            left: $e,
            main: "main",
            modifierPhases: ht,
            offset: cn,
            placements: at,
            popper: it,
            popperGenerator: vn,
            popperOffsets: un,
            preventOverflow: fn,
            read: "read",
            reference: rt,
            right: Ye,
            start: Ze,
            top: Ue,
            variationPlacements: ot,
            viewport: nt,
            write: "write"
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        kn = "dropdown",
        wn = ".".concat("bs.dropdown"),
        Cn = ".data-api",
        On = "ArrowUp",
        An = "ArrowDown",
        En = "hide".concat(wn),
        Tn = "hidden".concat(wn),
        Sn = "show".concat(wn),
        xn = "shown".concat(wn),
        In = "click".concat(wn).concat(Cn),
        Pn = "keydown".concat(wn).concat(Cn),
        Ln = "keyup".concat(wn).concat(Cn),
        jn = "show",
        Dn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Nn = "".concat(Dn, ".").concat(jn),
        Mn = ".dropdown-menu",
        Fn = v() ? "top-end" : "top-start",
        Hn = v() ? "top-start" : "top-end",
        Rn = v() ? "bottom-end" : "bottom-start",
        Wn = v() ? "bottom-start" : "bottom-end",
        Bn = v() ? "left-start" : "right-start",
        zn = v() ? "right-start" : "left-start",
        qn = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        Vn = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        },
        Kn = function(e) {
            _inherits(l, V);
            var i = _createSuper(l);

            function l(e, t) {
                var n;
                return _classCallCheck(this, l), (n = i.call(this, e, t))._popper = null, n._parent = n._element.parentNode, n._menu = Q.next(n._element, Mn)[0] || Q.prev(n._element, Mn)[0] || Q.findOne(Mn, n._parent), n._inNavbar = n._detectNavbar(), n
            }
            return _createClass(l, [{
                key: "toggle",
                value: function() {
                    return this._isShown() ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    if (!d(this._element) && !this._isShown()) {
                        var e = {
                            relatedTarget: this._element
                        };
                        if (!N.trigger(this._element, Sn, e).defaultPrevented) {
                            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
                                var t, n, i = _createForOfIteratorHelper((t = []).concat.apply(t, _toConsumableArray(document.body.children)));
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var r = n.value;
                                        N.on(r, "mouseover", h)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(jn), this._element.classList.add(jn), N.trigger(this._element, xn, e)
                        }
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    if (!d(this._element) && this._isShown()) {
                        var e = {
                            relatedTarget: this._element
                        };
                        this._completeHide(e)
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._popper && this._popper.destroy(), _get(_getPrototypeOf(l.prototype), "dispose", this).call(this)
                }
            }, {
                key: "update",
                value: function() {
                    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                }
            }, {
                key: "_completeHide",
                value: function(e) {
                    if (!N.trigger(this._element, En, e).defaultPrevented) {
                        if ("ontouchstart" in document.documentElement) {
                            var t, n, i = _createForOfIteratorHelper((t = []).concat.apply(t, _toConsumableArray(document.body.children)));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value;
                                    N.off(r, "mouseover", h)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                        this._popper && this._popper.destroy(), this._menu.classList.remove(jn), this._element.classList.remove(jn), this._element.setAttribute("aria-expanded", "false"), W(this._menu, "popper"), N.trigger(this._element, Tn, e)
                    }
                }
            }, {
                key: "_getConfig",
                value: function(e) {
                    if ("object" === _typeof((e = _get(_getPrototypeOf(l.prototype), "_getConfig", this).call(this, e)).reference) && !u(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("".concat(kn.toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'));
                    return e
                }
            }, {
                key: "_createPopper",
                value: function() {
                    if (void 0 === bn) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    var e = this._element;
                    "parent" === this._config.reference ? e = this._parent : u(this._config.reference) ? e = f(this._config.reference) : "object" === _typeof(this._config.reference) && (e = this._config.reference);
                    var t = this._getPopperConfig();
                    this._popper = yn(e, this._menu, t)
                }
            }, {
                key: "_isShown",
                value: function() {
                    return this._menu.classList.contains(jn)
                }
            }, {
                key: "_getPlacement",
                value: function() {
                    var e = this._parent;
                    if (e.classList.contains("dropend")) return Bn;
                    if (e.classList.contains("dropstart")) return zn;
                    if (e.classList.contains("dropup-center")) return "top";
                    if (e.classList.contains("dropdown-center")) return "bottom";
                    var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return e.classList.contains("dropup") ? t ? Hn : Fn : t ? Wn : Rn
                }
            }, {
                key: "_detectNavbar",
                value: function() {
                    return null !== this._element.closest(".navbar")
                }
            }, {
                key: "_getOffset",
                value: function() {
                    var t = this,
                        n = this._config.offset;
                    return "string" == typeof n ? n.split(",").map(function(e) {
                        return Number.parseInt(e, 10)
                    }) : "function" == typeof n ? function(e) {
                        return n(e, t._element)
                    } : n
                }
            }, {
                key: "_getPopperConfig",
                value: function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return (this._inNavbar || "static" === this._config.display) && (R(this._menu, "popper", "static"), e.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]), _objectSpread(_objectSpread({}, e), g(this._config.popperConfig, [e]))
                }
            }, {
                key: "_selectMenuItem",
                value: function(e) {
                    var t = e.key,
                        n = e.target,
                        i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function(e) {
                            return c(e)
                        });
                    i.length && y(i, n, t === An, !i.includes(n)).focus()
                }
            }], [{
                key: "Default",
                get: function() {
                    return qn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Vn
                }
            }, {
                key: "NAME",
                get: function() {
                    return kn
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = l.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }, {
                key: "clearMenus",
                value: function(e) {
                    if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) {
                        var t, n = _createForOfIteratorHelper(Q.find(Nn));
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = t.value,
                                    r = l.getInstance(i);
                                if (r && !1 !== r._config.autoClose) {
                                    var o = e.composedPath(),
                                        a = o.includes(r._menu);
                                    if (!(o.includes(r._element) || "inside" === r._config.autoClose && !a || "outside" === r._config.autoClose && a || r._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))) {
                                        var s = {
                                            relatedTarget: r._element
                                        };
                                        "click" === e.type && (s.clickEvent = e), r._completeHide(s)
                                    }
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }
            }, {
                key: "dataApiKeydownHandler",
                value: function(e) {
                    var t = /input|textarea/i.test(e.target.tagName),
                        n = "Escape" === e.key,
                        i = [On, An].includes(e.key);
                    if ((i || n) && (!t || n)) {
                        e.preventDefault();
                        var r = this.matches(Dn) ? this : Q.prev(this, Dn)[0] || Q.next(this, Dn)[0] || Q.findOne(Dn, e.delegateTarget.parentNode),
                            o = l.getOrCreateInstance(r);
                        if (i) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
                        o._isShown() && (e.stopPropagation(), o.hide(), r.focus())
                    }
                }
            }]), l
        }();
    N.on(document, Pn, Dn, Kn.dataApiKeydownHandler), N.on(document, Pn, Mn, Kn.dataApiKeydownHandler), N.on(document, In, Kn.clearMenus), N.on(document, Ln, Kn.clearMenus), N.on(document, In, Dn, function(e) {
        e.preventDefault(), Kn.getOrCreateInstance(this).toggle()
    }), e(Kn);
    var Qn = "backdrop",
        Un = "mousedown.bs.".concat(Qn),
        Xn = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        Yn = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        },
        $n = function(e) {
            _inherits(i, q);
            var n = _createSuper(i);

            function i(e) {
                var t;
                return _classCallCheck(this, i), (t = n.call(this))._config = t._getConfig(e), t._isAppended = !1, t._element = null, t
            }
            return _createClass(i, [{
                key: "show",
                value: function(e) {
                    if (this._config.isVisible) {
                        this._append();
                        var t = this._getElement();
                        this._config.isAnimated && p(t), t.classList.add("show"), this._emulateAnimation(function() {
                            g(e)
                        })
                    } else g(e)
                }
            }, {
                key: "hide",
                value: function(e) {
                    var t = this;
                    this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function() {
                        t.dispose(), g(e)
                    })) : g(e)
                }
            }, {
                key: "dispose",
                value: function() {
                    this._isAppended && (N.off(this._element, Un), this._element.remove(), this._isAppended = !1)
                }
            }, {
                key: "_getElement",
                value: function() {
                    if (!this._element) {
                        var e = document.createElement("div");
                        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                    }
                    return this._element
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e.rootElement = f(e.rootElement), e
                }
            }, {
                key: "_append",
                value: function() {
                    var e = this;
                    if (!this._isAppended) {
                        var t = this._getElement();
                        this._config.rootElement.append(t), N.on(t, Un, function() {
                            g(e._config.clickCallback)
                        }), this._isAppended = !0
                    }
                }
            }, {
                key: "_emulateAnimation",
                value: function(e) {
                    m(e, this._getElement(), this._config.isAnimated)
                }
            }], [{
                key: "Default",
                get: function() {
                    return Xn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Yn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Qn
                }
            }]), i
        }(),
        Gn = ".".concat("bs.focustrap"),
        Jn = "focusin".concat(Gn),
        Zn = "keydown.tab".concat(Gn),
        ei = "backward",
        ti = {
            autofocus: !0,
            trapElement: null
        },
        ni = {
            autofocus: "boolean",
            trapElement: "element"
        },
        ii = function(e) {
            _inherits(i, q);
            var n = _createSuper(i);

            function i(e) {
                var t;
                return _classCallCheck(this, i), (t = n.call(this))._config = t._getConfig(e), t._isActive = !1, t._lastTabNavDirection = null, t
            }
            return _createClass(i, [{
                key: "activate",
                value: function() {
                    var t = this;
                    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gn), N.on(document, Jn, function(e) {
                        return t._handleFocusin(e)
                    }), N.on(document, Zn, function(e) {
                        return t._handleKeydown(e)
                    }), this._isActive = !0)
                }
            }, {
                key: "deactivate",
                value: function() {
                    this._isActive && (this._isActive = !1, N.off(document, Gn))
                }
            }, {
                key: "_handleFocusin",
                value: function(e) {
                    var t = this._config.trapElement;
                    if (e.target !== document && e.target !== t && !t.contains(e.target)) {
                        var n = Q.focusableChildren(t);
                        0 === n.length ? t.focus() : this._lastTabNavDirection === ei ? n[n.length - 1].focus() : n[0].focus()
                    }
                }
            }, {
                key: "_handleKeydown",
                value: function(e) {
                    "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ei : "forward")
                }
            }], [{
                key: "Default",
                get: function() {
                    return ti
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ni
                }
            }, {
                key: "NAME",
                get: function() {
                    return "focustrap"
                }
            }]), i
        }(),
        ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        oi = ".sticky-top",
        ai = "padding-right",
        si = "margin-right",
        li = function() {
            function e() {
                _classCallCheck(this, e), this._element = document.body
            }
            return _createClass(e, [{
                key: "getWidth",
                value: function() {
                    var e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e)
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, ai, function(e) {
                        return e + t
                    }), this._setElementAttributes(ri, ai, function(e) {
                        return e + t
                    }), this._setElementAttributes(oi, si, function(e) {
                        return e - t
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ai), this._resetElementAttributes(ri, ai), this._resetElementAttributes(oi, si)
                }
            }, {
                key: "isOverflowing",
                value: function() {
                    return 0 < this.getWidth()
                }
            }, {
                key: "_disableOverFlow",
                value: function() {
                    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                }
            }, {
                key: "_setElementAttributes",
                value: function(e, n, i) {
                    var r = this,
                        o = this.getWidth();
                    this._applyManipulationCallback(e, function(e) {
                        if (!(e !== r._element && window.innerWidth > e.clientWidth + o)) {
                            r._saveInitialAttribute(e, n);
                            var t = window.getComputedStyle(e).getPropertyValue(n);
                            e.style.setProperty(n, "".concat(i(Number.parseFloat(t)), "px"))
                        }
                    })
                }
            }, {
                key: "_saveInitialAttribute",
                value: function(e, t) {
                    var n = e.style.getPropertyValue(t);
                    n && R(e, t, n)
                }
            }, {
                key: "_resetElementAttributes",
                value: function(e, n) {
                    this._applyManipulationCallback(e, function(e) {
                        var t = z(e, n);
                        null !== t ? (W(e, n), e.style.setProperty(n, t)) : e.style.removeProperty(n)
                    })
                }
            }, {
                key: "_applyManipulationCallback",
                value: function(e, t) {
                    if (u(e)) t(e);
                    else {
                        var n, i = _createForOfIteratorHelper(Q.find(e, this._element));
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                t(n.value)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }
            }]), e
        }(),
        ci = ".".concat("bs.modal"),
        ui = "hide".concat(ci),
        fi = "hidePrevented".concat(ci),
        di = "hidden".concat(ci),
        hi = "show".concat(ci),
        pi = "shown".concat(ci),
        _i = "resize".concat(ci),
        vi = "click.dismiss".concat(ci),
        gi = "mousedown.dismiss".concat(ci),
        mi = "keydown.dismiss".concat(ci),
        yi = "click".concat(ci).concat(".data-api"),
        bi = "modal-open",
        ki = "modal-static",
        wi = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Ci = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        },
        Oi = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), (n = i.call(this, e, t))._dialog = Q.findOne(".modal-dialog", n._element), n._backdrop = n._initializeBackDrop(), n._focustrap = n._initializeFocusTrap(), n._isShown = !1, n._isTransitioning = !1, n._scrollBar = new li, n._addEventListeners(), n
            }
            return _createClass(r, [{
                key: "toggle",
                value: function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
            }, {
                key: "show",
                value: function(e) {
                    var t = this;
                    this._isShown || this._isTransitioning || (N.trigger(this._element, hi, {
                        relatedTarget: e
                    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(bi), this._adjustDialog(), this._backdrop.show(function() {
                        return t._showElement(e)
                    })))
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    this._isShown && !this._isTransitioning && (N.trigger(this._element, ui).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(function() {
                        return e._hideModal()
                    }, this._element, this._isAnimated())))
                }
            }, {
                key: "dispose",
                value: function() {
                    N.off(window, ci), N.off(this._dialog, ci), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "handleUpdate",
                value: function() {
                    this._adjustDialog()
                }
            }, {
                key: "_initializeBackDrop",
                value: function() {
                    return new $n({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
            }, {
                key: "_initializeFocusTrap",
                value: function() {
                    return new ii({
                        trapElement: this._element
                    })
                }
            }, {
                key: "_showElement",
                value: function(e) {
                    var t = this;
                    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                    var n = Q.findOne(".modal-body", this._dialog);
                    n && (n.scrollTop = 0), p(this._element), this._element.classList.add("show");
                    this._queueCallback(function() {
                        t._config.focus && t._focustrap.activate(), t._isTransitioning = !1, N.trigger(t._element, pi, {
                            relatedTarget: e
                        })
                    }, this._dialog, this._isAnimated())
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    var n = this;
                    N.on(this._element, mi, function(e) {
                        "Escape" === e.key && (n._config.keyboard ? n.hide() : n._triggerBackdropTransition())
                    }), N.on(window, _i, function() {
                        n._isShown && !n._isTransitioning && n._adjustDialog()
                    }), N.on(this._element, gi, function(t) {
                        N.one(n._element, vi, function(e) {
                            n._element === t.target && n._element === e.target && ("static" !== n._config.backdrop ? n._config.backdrop && n.hide() : n._triggerBackdropTransition())
                        })
                    })
                }
            }, {
                key: "_hideModal",
                value: function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function() {
                        document.body.classList.remove(bi), e._resetAdjustments(), e._scrollBar.reset(), N.trigger(e._element, di)
                    })
                }
            }, {
                key: "_isAnimated",
                value: function() {
                    return this._element.classList.contains("fade")
                }
            }, {
                key: "_triggerBackdropTransition",
                value: function() {
                    var e = this;
                    if (!N.trigger(this._element, fi).defaultPrevented) {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight,
                            n = this._element.style.overflowY;
                        "hidden" === n || this._element.classList.contains(ki) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ki), this._queueCallback(function() {
                            e._element.classList.remove(ki), e._queueCallback(function() {
                                e._element.style.overflowY = n
                            }, e._dialog)
                        }, this._dialog), this._element.focus())
                    }
                }
            }, {
                key: "_adjustDialog",
                value: function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight,
                        t = this._scrollBar.getWidth(),
                        n = 0 < t;
                    if (n && !e) {
                        var i = v() ? "paddingLeft" : "paddingRight";
                        this._element.style[i] = "".concat(t, "px")
                    }
                    if (!n && e) {
                        var r = v() ? "paddingRight" : "paddingLeft";
                        this._element.style[r] = "".concat(t, "px")
                    }
                }
            }, {
                key: "_resetAdjustments",
                value: function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
            }], [{
                key: "Default",
                get: function() {
                    return wi
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ci
                }
            }, {
                key: "NAME",
                get: function() {
                    return "modal"
                }
            }, {
                key: "jQueryInterface",
                value: function(t, n) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](n)
                        }
                    })
                }
            }]), r
        }();
    N.on(document, yi, '[data-bs-toggle="modal"]', function(e) {
        var t = this,
            n = Q.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), N.one(n, hi, function(e) {
            e.defaultPrevented || N.one(n, di, function() {
                c(t) && t.focus()
            })
        });
        var i = Q.findOne(".modal.show");
        i && Oi.getInstance(i).hide(), Oi.getOrCreateInstance(n).toggle(this)
    }), U(Oi), e(Oi);
    var Ai = ".".concat("bs.offcanvas"),
        Ei = ".data-api",
        Ti = "load".concat(Ai).concat(Ei),
        Si = "showing",
        xi = ".offcanvas.show",
        Ii = "show".concat(Ai),
        Pi = "shown".concat(Ai),
        Li = "hide".concat(Ai),
        ji = "hidePrevented".concat(Ai),
        Di = "hidden".concat(Ai),
        Ni = "resize".concat(Ai),
        Mi = "click".concat(Ai).concat(Ei),
        Fi = "keydown.dismiss".concat(Ai),
        Hi = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Ri = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        },
        Wi = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), (n = i.call(this, e, t))._isShown = !1, n._backdrop = n._initializeBackDrop(), n._focustrap = n._initializeFocusTrap(), n._addEventListeners(), n
            }
            return _createClass(r, [{
                key: "toggle",
                value: function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
            }, {
                key: "show",
                value: function(e) {
                    var t = this;
                    if (!this._isShown && !N.trigger(this._element, Ii, {
                            relatedTarget: e
                        }).defaultPrevented) {
                        this._isShown = !0, this._backdrop.show(), this._config.scroll || (new li).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Si);
                        this._queueCallback(function() {
                            t._config.scroll && !t._config.backdrop || t._focustrap.activate(), t._element.classList.add("show"), t._element.classList.remove(Si), N.trigger(t._element, Pi, {
                                relatedTarget: e
                            })
                        }, this._element, !0)
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    if (this._isShown && !N.trigger(this._element, Li).defaultPrevented) {
                        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add("hiding"), this._backdrop.hide();
                        this._queueCallback(function() {
                            e._element.classList.remove("show", "hiding"), e._element.removeAttribute("aria-modal"), e._element.removeAttribute("role"), e._config.scroll || (new li).reset(), N.trigger(e._element, Di)
                        }, this._element, !0)
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_initializeBackDrop",
                value: function() {
                    var e = this,
                        t = Boolean(this._config.backdrop);
                    return new $n({
                        className: "offcanvas-backdrop",
                        isVisible: t,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: t ? function() {
                            "static" !== e._config.backdrop ? e.hide() : N.trigger(e._element, ji)
                        } : null
                    })
                }
            }, {
                key: "_initializeFocusTrap",
                value: function() {
                    return new ii({
                        trapElement: this._element
                    })
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    var t = this;
                    N.on(this._element, Fi, function(e) {
                        "Escape" === e.key && (t._config.keyboard ? t.hide() : N.trigger(t._element, ji))
                    })
                }
            }], [{
                key: "Default",
                get: function() {
                    return Hi
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ri
                }
            }, {
                key: "NAME",
                get: function() {
                    return "offcanvas"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](this)
                        }
                    })
                }
            }]), r
        }();
    N.on(document, Mi, '[data-bs-toggle="offcanvas"]', function(e) {
        var t = this,
            n = Q.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), !d(this)) {
            N.one(n, Di, function() {
                c(t) && t.focus()
            });
            var i = Q.findOne(xi);
            i && i !== n && Wi.getInstance(i).hide(), Wi.getOrCreateInstance(n).toggle(this)
        }
    }), N.on(window, Ti, function() {
        var e, t = _createForOfIteratorHelper(Q.find(xi));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                Wi.getOrCreateInstance(n).show()
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }), N.on(window, Ni, function() {
        var e, t = _createForOfIteratorHelper(Q.find("[aria-modal][class*=show][class*=offcanvas-]"));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                "fixed" !== getComputedStyle(n).position && Wi.getOrCreateInstance(n).hide()
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }), U(Wi), e(Wi);
    var Bi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            dd: [],
            div: [],
            dl: [],
            dt: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        zi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        qi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Vi = function(e, t) {
            var n = e.nodeName.toLowerCase();
            return t.includes(n) ? !zi.has(n) || Boolean(qi.test(e.nodeValue)) : t.filter(function(e) {
                return e instanceof RegExp
            }).some(function(e) {
                return e.test(n)
            })
        };
    var Ki = {
            allowList: Bi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Qi = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Ui = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        },
        Xi = function(e) {
            _inherits(a, q);
            var n = _createSuper(a);

            function a(e) {
                var t;
                return _classCallCheck(this, a), (t = n.call(this))._config = t._getConfig(e), t
            }
            return _createClass(a, [{
                key: "getContent",
                value: function() {
                    var t = this;
                    return Object.values(this._config.content).map(function(e) {
                        return t._resolvePossibleFunction(e)
                    }).filter(Boolean)
                }
            }, {
                key: "hasContent",
                value: function() {
                    return 0 < this.getContent().length
                }
            }, {
                key: "changeContent",
                value: function(e) {
                    return this._checkContent(e), this._config.content = _objectSpread(_objectSpread({}, this._config.content), e), this
                }
            }, {
                key: "toHtml",
                value: function() {
                    var e = document.createElement("div");
                    e.innerHTML = this._maybeSanitize(this._config.template);
                    for (var t = 0, n = Object.entries(this._config.content); t < n.length; t++) {
                        var i = _slicedToArray(n[t], 2),
                            r = i[0],
                            o = i[1];
                        this._setContent(e, o, r)
                    }
                    var a, s = e.children[0],
                        l = this._resolvePossibleFunction(this._config.extraClass);
                    l && (a = s.classList).add.apply(a, _toConsumableArray(l.split(" ")));
                    return s
                }
            }, {
                key: "_typeCheckConfig",
                value: function(e) {
                    _get(_getPrototypeOf(a.prototype), "_typeCheckConfig", this).call(this, e), this._checkContent(e.content)
                }
            }, {
                key: "_checkContent",
                value: function(e) {
                    for (var t = 0, n = Object.entries(e); t < n.length; t++) {
                        var i = _slicedToArray(n[t], 2),
                            r = i[0],
                            o = i[1];
                        _get(_getPrototypeOf(a.prototype), "_typeCheckConfig", this).call(this, {
                            selector: r,
                            entry: o
                        }, Ui)
                    }
                }
            }, {
                key: "_setContent",
                value: function(e, t, n) {
                    var i = Q.findOne(n, e);
                    i && ((t = this._resolvePossibleFunction(t)) ? u(t) ? this._putElementInTemplate(f(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
                }
            }, {
                key: "_maybeSanitize",
                value: function(e) {
                    return this._config.sanitize ? function(e, t, n) {
                        var i;
                        if (!e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        var r, o = (new window.DOMParser).parseFromString(e, "text/html"),
                            a = _createForOfIteratorHelper((i = []).concat.apply(i, _toConsumableArray(o.body.querySelectorAll("*"))));
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var s, l = r.value,
                                    c = l.nodeName.toLowerCase();
                                if (Object.keys(t).includes(c)) {
                                    var u, f = (s = []).concat.apply(s, _toConsumableArray(l.attributes)),
                                        d = [].concat(t["*"] || [], t[c] || []),
                                        h = _createForOfIteratorHelper(f);
                                    try {
                                        for (h.s(); !(u = h.n()).done;) {
                                            var p = u.value;
                                            Vi(p, d) || l.removeAttribute(p.nodeName)
                                        }
                                    } catch (e) {
                                        h.e(e)
                                    } finally {
                                        h.f()
                                    }
                                } else l.remove()
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return o.body.innerHTML
                    }(e, this._config.allowList, this._config.sanitizeFn) : e
                }
            }, {
                key: "_resolvePossibleFunction",
                value: function(e) {
                    return g(e, [this])
                }
            }, {
                key: "_putElementInTemplate",
                value: function(e, t) {
                    if (this._config.html) return t.innerHTML = "", void t.append(e);
                    t.textContent = e.textContent
                }
            }], [{
                key: "Default",
                get: function() {
                    return Ki
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Qi
                }
            }, {
                key: "NAME",
                get: function() {
                    return "TemplateFactory"
                }
            }]), a
        }(),
        Yi = new Set(["sanitize", "allowList", "sanitizeFn"]),
        $i = "fade",
        Gi = "show",
        Ji = ".".concat("modal"),
        Zi = "hide.bs.modal",
        er = "hover",
        tr = "focus",
        nr = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: v() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: v() ? "right" : "left"
        },
        ir = {
            allowList: Bi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        rr = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        },
        or = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                if (_classCallCheck(this, r), void 0 === bn) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (n = i.call(this, e, t))._isEnabled = !0, n._timeout = 0, n._isHovered = null, n._activeTrigger = {}, n._popper = null, n._templateFactory = null, n._newContent = null, n.tip = null, n._setListeners(), n._config.selector || n._fixTitle(), n
            }
            return _createClass(r, [{
                key: "enable",
                value: function() {
                    this._isEnabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this._isEnabled = !1
                }
            }, {
                key: "toggleEnabled",
                value: function() {
                    this._isEnabled = !this._isEnabled
                }
            }, {
                key: "toggle",
                value: function() {
                    this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
                }
            }, {
                key: "dispose",
                value: function() {
                    clearTimeout(this._timeout), N.off(this._element.closest(Ji), Zi, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "show",
                value: function() {
                    var e = this;
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (this._isWithContent() && this._isEnabled) {
                        var t = N.trigger(this._element, this.constructor.eventName("show")),
                            n = (function e(t) {
                                if (!document.documentElement.attachShadow) return null;
                                if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null;
                                var n = t.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                        if (!t.defaultPrevented && n) {
                            this._disposePopper();
                            var i = this._getTipElement();
                            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
                            var r = this._config.container;
                            if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Gi), "ontouchstart" in document.documentElement) {
                                var o, a, s = _createForOfIteratorHelper((o = []).concat.apply(o, _toConsumableArray(document.body.children)));
                                try {
                                    for (s.s(); !(a = s.n()).done;) {
                                        var l = a.value;
                                        N.on(l, "mouseover", h)
                                    }
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                            }
                            this._queueCallback(function() {
                                N.trigger(e._element, e.constructor.eventName("shown")), !1 === e._isHovered && e._leave(), e._isHovered = !1
                            }, this.tip, this._isAnimated())
                        }
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                        if (this._getTipElement().classList.remove(Gi), "ontouchstart" in document.documentElement) {
                            var t, n, i = _createForOfIteratorHelper((t = []).concat.apply(t, _toConsumableArray(document.body.children)));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var r = n.value;
                                    N.off(r, "mouseover", h)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                        this._activeTrigger.click = !1, this._activeTrigger[tr] = !1, this._activeTrigger[er] = !1, this._isHovered = null;
                        this._queueCallback(function() {
                            e._isWithActiveTrigger() || (e._isHovered || e._disposePopper(), e._element.removeAttribute("aria-describedby"), N.trigger(e._element, e.constructor.eventName("hidden")))
                        }, this.tip, this._isAnimated())
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this._popper && this._popper.update()
                }
            }, {
                key: "_isWithContent",
                value: function() {
                    return Boolean(this._getTitle())
                }
            }, {
                key: "_getTipElement",
                value: function() {
                    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
                }
            }, {
                key: "_createTipElement",
                value: function(e) {
                    var t = this._getTemplateFactory(e).toHtml();
                    if (!t) return null;
                    t.classList.remove($i, Gi), t.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
                    var n = function(e) {
                        for (; e += Math.floor(1e6 * Math.random()), document.getElementById(e););
                        return e
                    }(this.constructor.NAME).toString();
                    return t.setAttribute("id", n), this._isAnimated() && t.classList.add($i), t
                }
            }, {
                key: "setContent",
                value: function(e) {
                    this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
                }
            }, {
                key: "_getTemplateFactory",
                value: function(e) {
                    return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Xi(_objectSpread(_objectSpread({}, this._config), {}, {
                        content: e,
                        extraClass: this._resolvePossibleFunction(this._config.customClass)
                    })), this._templateFactory
                }
            }, {
                key: "_getContentForTemplate",
                value: function() {
                    return _defineProperty({}, ".tooltip-inner", this._getTitle())
                }
            }, {
                key: "_getTitle",
                value: function() {
                    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
                }
            }, {
                key: "_initializeOnDelegatedTarget",
                value: function(e) {
                    return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
                }
            }, {
                key: "_isAnimated",
                value: function() {
                    return this._config.animation || this.tip && this.tip.classList.contains($i)
                }
            }, {
                key: "_isShown",
                value: function() {
                    return this.tip && this.tip.classList.contains(Gi)
                }
            }, {
                key: "_createPopper",
                value: function(e) {
                    var t = g(this._config.placement, [this, e, this._element]),
                        n = nr[t.toUpperCase()];
                    return yn(this._element, e, this._getPopperConfig(n))
                }
            }, {
                key: "_getOffset",
                value: function() {
                    var t = this,
                        n = this._config.offset;
                    return "string" == typeof n ? n.split(",").map(function(e) {
                        return Number.parseInt(e, 10)
                    }) : "function" == typeof n ? function(e) {
                        return n(e, t._element)
                    } : n
                }
            }, {
                key: "_resolvePossibleFunction",
                value: function(e) {
                    return g(e, [this._element])
                }
            }, {
                key: "_getPopperConfig",
                value: function(e) {
                    var t = this,
                        n = {
                            placement: e,
                            modifiers: [{
                                name: "flip",
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: ".".concat(this.constructor.NAME, "-arrow")
                                }
                            }, {
                                name: "preSetPlacement",
                                enabled: !0,
                                phase: "beforeMain",
                                fn: function(e) {
                                    t._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                                }
                            }]
                        };
                    return _objectSpread(_objectSpread({}, n), g(this._config.popperConfig, [n]))
                }
            }, {
                key: "_setListeners",
                value: function() {
                    var e, n = this,
                        t = _createForOfIteratorHelper(this._config.trigger.split(" "));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var i = e.value;
                            if ("click" === i) N.on(this._element, this.constructor.eventName("click"), this._config.selector, function(e) {
                                n._initializeOnDelegatedTarget(e).toggle()
                            });
                            else if ("manual" !== i) {
                                var r = i === er ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                                    o = i === er ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                                N.on(this._element, r, this._config.selector, function(e) {
                                    var t = n._initializeOnDelegatedTarget(e);
                                    t._activeTrigger["focusin" === e.type ? tr : er] = !0, t._enter()
                                }), N.on(this._element, o, this._config.selector, function(e) {
                                    var t = n._initializeOnDelegatedTarget(e);
                                    t._activeTrigger["focusout" === e.type ? tr : er] = t._element.contains(e.relatedTarget), t._leave()
                                })
                            }
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    this._hideModalHandler = function() {
                        n._element && n.hide()
                    }, N.on(this._element.closest(Ji), Zi, this._hideModalHandler)
                }
            }, {
                key: "_fixTitle",
                value: function() {
                    var e = this._element.getAttribute("title");
                    e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
                }
            }, {
                key: "_enter",
                value: function() {
                    var e = this;
                    this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function() {
                        e._isHovered && e.show()
                    }, this._config.delay.show))
                }
            }, {
                key: "_leave",
                value: function() {
                    var e = this;
                    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function() {
                        e._isHovered || e.hide()
                    }, this._config.delay.hide))
                }
            }, {
                key: "_setTimeout",
                value: function(e, t) {
                    clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
                }
            }, {
                key: "_isWithActiveTrigger",
                value: function() {
                    return Object.values(this._activeTrigger).includes(!0)
                }
            }, {
                key: "_getConfig",
                value: function(e) {
                    for (var t = B(this._element), n = 0, i = Object.keys(t); n < i.length; n++) {
                        var r = i[n];
                        Yi.has(r) && delete t[r]
                    }
                    return e = _objectSpread(_objectSpread({}, t), "object" === _typeof(e) && e ? e : {}), e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e.container = !1 === e.container ? document.body : f(e.container), "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
                }
            }, {
                key: "_getDelegateConfig",
                value: function() {
                    for (var e = {}, t = 0, n = Object.entries(this._config); t < n.length; t++) {
                        var i = _slicedToArray(n[t], 2),
                            r = i[0],
                            o = i[1];
                        this.constructor.Default[r] !== o && (e[r] = o)
                    }
                    return e.selector = !1, e.trigger = "manual", e
                }
            }, {
                key: "_disposePopper",
                value: function() {
                    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
                }
            }], [{
                key: "Default",
                get: function() {
                    return ir
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return rr
                }
            }, {
                key: "NAME",
                get: function() {
                    return "tooltip"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }]), r
        }();
    e(or);
    var ar = _objectSpread(_objectSpread({}, or.Default), {}, {
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        }),
        sr = _objectSpread(_objectSpread({}, or.DefaultType), {}, {
            content: "(null|string|element|function)"
        }),
        lr = function(e) {
            _inherits(n, or);
            var t = _createSuper(n);

            function n() {
                return _classCallCheck(this, n), t.apply(this, arguments)
            }
            return _createClass(n, [{
                key: "_isWithContent",
                value: function() {
                    return this._getTitle() || this._getContent()
                }
            }, {
                key: "_getContentForTemplate",
                value: function() {
                    return _defineProperty(_defineProperty({}, ".popover-header", this._getTitle()), ".popover-body", this._getContent())
                }
            }, {
                key: "_getContent",
                value: function() {
                    return this._resolvePossibleFunction(this._config.content)
                }
            }], [{
                key: "Default",
                get: function() {
                    return ar
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return sr
                }
            }, {
                key: "NAME",
                get: function() {
                    return "popover"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }]), n
        }();
    e(lr);
    var cr = ".".concat("bs.scrollspy"),
        ur = "activate".concat(cr),
        fr = "click".concat(cr),
        dr = "load".concat(cr).concat(".data-api"),
        hr = "active",
        pr = "[href]",
        _r = ".nav-link",
        vr = "".concat(_r, ", ").concat(".nav-item", " > ").concat(_r, ", ").concat(".list-group-item"),
        gr = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
        },
        mr = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        },
        yr = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), (n = i.call(this, e, t))._targetLinks = new Map, n._observableSections = new Map, n._rootElement = "visible" === getComputedStyle(n._element).overflowY ? null : n._element, n._activeTarget = null, n._observer = null, n._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }, n.refresh(), n
            }
            return _createClass(r, [{
                key: "refresh",
                value: function() {
                    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                    var e, t = _createForOfIteratorHelper(this._observableSections.values());
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            this._observer.observe(n)
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._observer.disconnect(), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_configAfterMerge",
                value: function(e) {
                    return e.target = f(e.target) || document.body, e.rootMargin = e.offset ? "".concat(e.offset, "px 0px -30%") : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(function(e) {
                        return Number.parseFloat(e)
                    })), e
                }
            }, {
                key: "_maybeEnableSmoothScroll",
                value: function() {
                    var r = this;
                    this._config.smoothScroll && (N.off(this._config.target, fr), N.on(this._config.target, fr, pr, function(e) {
                        var t = r._observableSections.get(e.target.hash);
                        if (t) {
                            e.preventDefault();
                            var n = r._rootElement || window,
                                i = t.offsetTop - r._element.offsetTop;
                            if (n.scrollTo) return void n.scrollTo({
                                top: i,
                                behavior: "smooth"
                            });
                            n.scrollTop = i
                        }
                    }))
                }
            }, {
                key: "_getNewObserver",
                value: function() {
                    var t = this,
                        e = {
                            root: this._rootElement,
                            threshold: this._config.threshold,
                            rootMargin: this._config.rootMargin
                        };
                    return new IntersectionObserver(function(e) {
                        return t._observerCallback(e)
                    }, e)
                }
            }, {
                key: "_observerCallback",
                value: function(e) {
                    var t = this,
                        n = function(e) {
                            return t._targetLinks.get("#".concat(e.target.id))
                        },
                        i = function(e) {
                            t._previousScrollData.visibleEntryTop = e.target.offsetTop, t._process(n(e))
                        },
                        r = (this._rootElement || document.documentElement).scrollTop,
                        o = r >= this._previousScrollData.parentScrollTop;
                    this._previousScrollData.parentScrollTop = r;
                    var a, s = _createForOfIteratorHelper(e);
                    try {
                        for (s.s(); !(a = s.n()).done;) {
                            var l = a.value;
                            if (l.isIntersecting) {
                                var c = l.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                                if (o && c) {
                                    if (i(l), !r) return
                                } else o || c || i(l)
                            } else this._activeTarget = null, this._clearActiveClass(n(l))
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                }
            }, {
                key: "_initializeTargetsAndObservables",
                value: function() {
                    this._targetLinks = new Map, this._observableSections = new Map;
                    var e, t = _createForOfIteratorHelper(Q.find(pr, this._config.target));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            if (n.hash && !d(n)) {
                                var i = Q.findOne(decodeURI(n.hash), this._element);
                                c(i) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, i))
                            }
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "_process",
                value: function(e) {
                    this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e).classList.add(hr), this._activateParents(e), N.trigger(this._element, ur, {
                        relatedTarget: e
                    }))
                }
            }, {
                key: "_activateParents",
                value: function(e) {
                    if (e.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(hr);
                    else {
                        var t, n = _createForOfIteratorHelper(Q.parents(e, ".nav, .list-group"));
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i, r = t.value,
                                    o = _createForOfIteratorHelper(Q.prev(r, vr));
                                try {
                                    for (o.s(); !(i = o.n()).done;) {
                                        i.value.classList.add(hr)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }
            }, {
                key: "_clearActiveClass",
                value: function(e) {
                    e.classList.remove(hr);
                    var t, n = _createForOfIteratorHelper(Q.find("".concat(pr, ".").concat(hr), e));
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            t.value.classList.remove(hr)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                }
            }], [{
                key: "Default",
                get: function() {
                    return gr
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return mr
                }
            }, {
                key: "NAME",
                get: function() {
                    return "scrollspy"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }]), r
        }();
    N.on(window, dr, function() {
        var e, t = _createForOfIteratorHelper(Q.find('[data-bs-spy="scroll"]'));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                yr.getOrCreateInstance(n)
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }), e(yr);
    var br = ".".concat("bs.tab"),
        kr = "hide".concat(br),
        wr = "hidden".concat(br),
        Cr = "show".concat(br),
        Or = "shown".concat(br),
        Ar = "click".concat(br),
        Er = "keydown".concat(br),
        Tr = "load".concat(br),
        Sr = "ArrowLeft",
        xr = "ArrowRight",
        Ir = "ArrowUp",
        Pr = "ArrowDown",
        Lr = "Home",
        jr = "End",
        Dr = "active",
        Nr = "show",
        Mr = ".dropdown-toggle",
        Fr = ":not(".concat(Mr, ")"),
        Hr = ".nav-link".concat(Fr, ", .list-group-item").concat(Fr, ', [role="tab"]').concat(Fr),
        Rr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Wr = "".concat(Hr, ", ").concat(Rr),
        Br = ".".concat(Dr, '[data-bs-toggle="tab"], .').concat(Dr, '[data-bs-toggle="pill"], .').concat(Dr, '[data-bs-toggle="list"]'),
        zr = function(e) {
            _inherits(r, V);
            var n = _createSuper(r);

            function r(e) {
                var t;
                return _classCallCheck(this, r), (t = n.call(this, e))._parent = t._element.closest('.list-group, .nav, [role="tablist"]'), t._parent ? (t._setInitialAttributes(t._parent, t._getChildren()), N.on(t._element, Er, function(e) {
                    return t._keydown(e)
                }), t) : _possibleConstructorReturn(t)
            }
            return _createClass(r, [{
                key: "show",
                value: function() {
                    var e = this._element;
                    if (!this._elemIsActive(e)) {
                        var t = this._getActiveElem(),
                            n = t ? N.trigger(t, kr, {
                                relatedTarget: e
                            }) : null;
                        N.trigger(e, Cr, {
                            relatedTarget: t
                        }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
                    }
                }
            }, {
                key: "_activate",
                value: function(e, t) {
                    var n = this;
                    if (e) {
                        e.classList.add(Dr), this._activate(Q.getElementFromSelector(e));
                        this._queueCallback(function() {
                            "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), n._toggleDropDown(e, !0), N.trigger(e, Or, {
                                relatedTarget: t
                            })) : e.classList.add(Nr)
                        }, e, e.classList.contains("fade"))
                    }
                }
            }, {
                key: "_deactivate",
                value: function(e, t) {
                    var n = this;
                    if (e) {
                        e.classList.remove(Dr), e.blur(), this._deactivate(Q.getElementFromSelector(e));
                        this._queueCallback(function() {
                            "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), n._toggleDropDown(e, !1), N.trigger(e, wr, {
                                relatedTarget: t
                            })) : e.classList.remove(Nr)
                        }, e, e.classList.contains("fade"))
                    }
                }
            }, {
                key: "_keydown",
                value: function(e) {
                    if ([Sr, xr, Ir, Pr, Lr, jr].includes(e.key)) {
                        e.stopPropagation(), e.preventDefault();
                        var t, n = this._getChildren().filter(function(e) {
                            return !d(e)
                        });
                        if ([Lr, jr].includes(e.key)) t = n[e.key === Lr ? 0 : n.length - 1];
                        else {
                            var i = [xr, Pr].includes(e.key);
                            t = y(n, e.target, i, !0)
                        }
                        t && (t.focus({
                            preventScroll: !0
                        }), r.getOrCreateInstance(t).show())
                    }
                }
            }, {
                key: "_getChildren",
                value: function() {
                    return Q.find(Wr, this._parent)
                }
            }, {
                key: "_getActiveElem",
                value: function() {
                    var t = this;
                    return this._getChildren().find(function(e) {
                        return t._elemIsActive(e)
                    }) || null
                }
            }, {
                key: "_setInitialAttributes",
                value: function(e, t) {
                    this._setAttributeIfNotExists(e, "role", "tablist");
                    var n, i = _createForOfIteratorHelper(t);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = n.value;
                            this._setInitialAttributesOnChild(r)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "_setInitialAttributesOnChild",
                value: function(e) {
                    e = this._getInnerElement(e);
                    var t = this._elemIsActive(e),
                        n = this._getOuterElement(e);
                    e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
                }
            }, {
                key: "_setInitialAttributesOnTargetPanel",
                value: function(e) {
                    var t = Q.getElementFromSelector(e);
                    t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", "".concat(e.id)))
                }
            }, {
                key: "_toggleDropDown",
                value: function(e, i) {
                    var r = this._getOuterElement(e);
                    if (r.classList.contains("dropdown")) {
                        var t = function(e, t) {
                            var n = Q.findOne(e, r);
                            n && n.classList.toggle(t, i)
                        };
                        t(Mr, Dr), t(".dropdown-menu", Nr), r.setAttribute("aria-expanded", i)
                    }
                }
            }, {
                key: "_setAttributeIfNotExists",
                value: function(e, t, n) {
                    e.hasAttribute(t) || e.setAttribute(t, n)
                }
            }, {
                key: "_elemIsActive",
                value: function(e) {
                    return e.classList.contains(Dr)
                }
            }, {
                key: "_getInnerElement",
                value: function(e) {
                    return e.matches(Wr) ? e : Q.findOne(Wr, e)
                }
            }, {
                key: "_getOuterElement",
                value: function(e) {
                    return e.closest(".nav-item, .list-group-item") || e
                }
            }], [{
                key: "NAME",
                get: function() {
                    return "tab"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    })
                }
            }]), r
        }();
    N.on(document, Ar, Rr, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), d(this) || zr.getOrCreateInstance(this).show()
    }), N.on(window, Tr, function() {
        var e, t = _createForOfIteratorHelper(Q.find(Br));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                zr.getOrCreateInstance(n)
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }), e(zr);
    var qr = ".".concat("bs.toast"),
        Vr = "mouseover".concat(qr),
        Kr = "mouseout".concat(qr),
        Qr = "focusin".concat(qr),
        Ur = "focusout".concat(qr),
        Xr = "hide".concat(qr),
        Yr = "hidden".concat(qr),
        $r = "show".concat(qr),
        Gr = "shown".concat(qr),
        Jr = "show",
        Zr = "showing",
        eo = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        to = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        },
        no = function(e) {
            _inherits(r, V);
            var i = _createSuper(r);

            function r(e, t) {
                var n;
                return _classCallCheck(this, r), (n = i.call(this, e, t))._timeout = null, n._hasMouseInteraction = !1, n._hasKeyboardInteraction = !1, n._setListeners(), n
            }
            return _createClass(r, [{
                key: "show",
                value: function() {
                    var e = this;
                    if (!N.trigger(this._element, $r).defaultPrevented) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        this._element.classList.remove("hide"), p(this._element), this._element.classList.add(Jr, Zr), this._queueCallback(function() {
                            e._element.classList.remove(Zr), N.trigger(e._element, Gr), e._maybeScheduleHide()
                        }, this._element, this._config.animation)
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    if (this.isShown() && !N.trigger(this._element, Xr).defaultPrevented) {
                        this._element.classList.add(Zr), this._queueCallback(function() {
                            e._element.classList.add("hide"), e._element.classList.remove(Zr, Jr), N.trigger(e._element, Yr)
                        }, this._element, this._config.animation)
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    this._clearTimeout(), this.isShown() && this._element.classList.remove(Jr), _get(_getPrototypeOf(r.prototype), "dispose", this).call(this)
                }
            }, {
                key: "isShown",
                value: function() {
                    return this._element.classList.contains(Jr)
                }
            }, {
                key: "_maybeScheduleHide",
                value: function() {
                    var e = this;
                    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function() {
                        e.hide()
                    }, this._config.delay)))
                }
            }, {
                key: "_onInteraction",
                value: function(e, t) {
                    switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = t;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = t
                    }
                    if (t) this._clearTimeout();
                    else {
                        var n = e.relatedTarget;
                        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                    }
                }
            }, {
                key: "_setListeners",
                value: function() {
                    var t = this;
                    N.on(this._element, Vr, function(e) {
                        return t._onInteraction(e, !0)
                    }), N.on(this._element, Kr, function(e) {
                        return t._onInteraction(e, !1)
                    }), N.on(this._element, Qr, function(e) {
                        return t._onInteraction(e, !0)
                    }), N.on(this._element, Ur, function(e) {
                        return t._onInteraction(e, !1)
                    })
                }
            }, {
                key: "_clearTimeout",
                value: function() {
                    clearTimeout(this._timeout), this._timeout = null
                }
            }], [{
                key: "Default",
                get: function() {
                    return to
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return eo
                }
            }, {
                key: "NAME",
                get: function() {
                    return "toast"
                }
            }, {
                key: "jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var e = r.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](this)
                        }
                    })
                }
            }]), r
        }();
    return U(no), e(no), {
        Alert: G,
        Button: te,
        Carousel: Le,
        Collapse: Qe,
        Dropdown: Kn,
        Modal: Oi,
        Offcanvas: Wi,
        Popover: lr,
        ScrollSpy: yr,
        Tab: zr,
        Toast: no,
        Tooltip: or
    }
});