!(function () {
  function t(t) {
    return t && t.__esModule ? t.default : t;
  }
  var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = {};
  var r = function (t) {
    var e = n[t];
    if (null == e) throw new Error("Could not resolve bundle with id " + t);
    return e;
  };
  (function (t) {
    for (var e = Object.keys(t), r = 0; r < e.length; r++) n[e[r]] = t[e[r]];
  })(
    JSON.parse(
      '{"5ZBTk":"js/index.67c41334.1758ab.js","15xNj":"sounds/mur.abe46eec.f579ef.mp3","53D5p":"sounds/mur_2.4f408009.960590.mp3","3ggzm":"sounds/mur_3.19902bf1.be78a9.mp3","2PwTS":"sounds/mur_4.75a61f66.ccffe5.mp3","7bYeI":"sounds/hss.c48a0395.04fcef.mp3","Ro4e5":"sounds/mau2.34512387.c021f3.mp3","6Of1K":"sounds/hss2.87621876.2e3b4f.mp3","5rskr":"sounds/mau3.cbfa422c.f95a8d.mp3"}'
    )
  );
  var i = (window.App = {
    mobile: !1,
    H: document.getElementsByTagName("html")[0],
  });
  "ontouchstart" in window
    ? ((i.mobile = !0), i.H.classList.add("mobile"))
    : i.H.classList.add("desktop"),
    App.mobile ||
      (App.H.classList.add("_has-no-visible-focus"),
      window.addEventListener("keydown", function t(e) {
        "Tab" === e.code &&
          (App.H.classList.remove("_has-no-visible-focus"),
          window.removeEventListener("keydown", t));
      }));
  var o = new Promise(function (t) {
    document.querySelector(".js-start").addEventListener("click", function () {
      document.querySelector(".js-splashscreen").classList.add("_is-hidden"),
        t();
    });
  });
  document
    .querySelector(".js-splashscreen-share-btn")
    .addEventListener("click", function () {
      document
        .querySelector(".js-splashscreen-share")
        .classList.toggle("_is-visible");
    });
  var a = {};
  function s(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function u(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.5.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ !(function (t) {
    "object" == typeof a
      ? (a = t())
      : (("undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : this
        ).interact = t());
  })(function () {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = void 0),
      (t.default = function (t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      });
    var e = {};
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.init = i),
      (e.getWindow = function (e) {
        return (0, t.default)(e)
          ? e
          : (e.ownerDocument || e).defaultView || r.window;
      }),
      (e.window = e.realWindow = void 0);
    var n = void 0;
    e.realWindow = n;
    var r = void 0;
    function i(t) {
      e.realWindow = n = t;
      var i = t.document.createTextNode("");
      i.ownerDocument !== t.document &&
        "function" == typeof t.wrap &&
        t.wrap(i) === i &&
        (t = t.wrap(t)),
        (e.window = r = t);
    }
    (e.window = r), "undefined" != typeof window && window && i(window);
    var o = {};
    function a(t) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
    var s = function (t) {
        return !!t && "object" === a(t);
      },
      u = function (t) {
        return "function" == typeof t;
      },
      l = {
        window: function (n) {
          return n === e.window || (0, t.default)(n);
        },
        docFrag: function (t) {
          return s(t) && 11 === t.nodeType;
        },
        object: s,
        func: u,
        number: function (t) {
          return "number" == typeof t;
        },
        bool: function (t) {
          return "boolean" == typeof t;
        },
        string: function (t) {
          return "string" == typeof t;
        },
        element: function (t) {
          if (!t || "object" !== a(t)) return !1;
          var n = e.getWindow(t) || e.window;
          return /object|function/.test(a(n.Element))
            ? t instanceof n.Element
            : 1 === t.nodeType && "string" == typeof t.nodeName;
        },
        plainObject: function (t) {
          return (
            s(t) &&
            !!t.constructor &&
            /function Object\b/.test(t.constructor.toString())
          );
        },
        array: function (t) {
          return s(t) && void 0 !== t.length && u(t.splice);
        },
      };
    o.default = l;
    var c = {};
    function f(t) {
      var e = t.interaction;
      if ("drag" === e.prepared.name) {
        var n = e.prepared.axis;
        "x" === n
          ? ((e.coords.cur.page.y = e.coords.start.page.y),
            (e.coords.cur.client.y = e.coords.start.client.y),
            (e.coords.velocity.client.y = 0),
            (e.coords.velocity.page.y = 0))
          : "y" === n &&
            ((e.coords.cur.page.x = e.coords.start.page.x),
            (e.coords.cur.client.x = e.coords.start.client.x),
            (e.coords.velocity.client.x = 0),
            (e.coords.velocity.page.x = 0));
      }
    }
    function d(t) {
      var e = t.iEvent,
        n = t.interaction;
      if ("drag" === n.prepared.name) {
        var r = n.prepared.axis;
        if ("x" === r || "y" === r) {
          var i = "x" === r ? "y" : "x";
          (e.page[i] = n.coords.start.page[i]),
            (e.client[i] = n.coords.start.client[i]),
            (e.delta[i] = 0);
        }
      }
    }
    Object.defineProperty(c, "__esModule", { value: !0 }), (c.default = void 0);
    var p = {
        id: "actions/drag",
        install: function (t) {
          var e = t.actions,
            n = t.Interactable,
            r = t.defaults;
          (n.prototype.draggable = p.draggable),
            (e.map.drag = p),
            (e.methodDict.drag = "draggable"),
            (r.actions.drag = p.defaults);
        },
        listeners: {
          "interactions:before-action-move": f,
          "interactions:action-resume": f,
          "interactions:action-move": d,
          "auto-start:check": function (t) {
            var e = t.interaction,
              n = t.interactable,
              r = t.buttons,
              i = n.options.drag;
            if (
              i &&
              i.enabled &&
              (!e.pointerIsDown ||
                !/mouse|pointer/.test(e.pointerType) ||
                0 != (r & n.options.drag.mouseButtons))
            )
              return (
                (t.action = {
                  name: "drag",
                  axis: "start" === i.lockAxis ? i.startAxis : i.lockAxis,
                }),
                !1
              );
          },
        },
        draggable: function (t) {
          return o.default.object(t)
            ? ((this.options.drag.enabled = !1 !== t.enabled),
              this.setPerAction("drag", t),
              this.setOnEvents("drag", t),
              /^(xy|x|y|start)$/.test(t.lockAxis) &&
                (this.options.drag.lockAxis = t.lockAxis),
              /^(xy|x|y)$/.test(t.startAxis) &&
                (this.options.drag.startAxis = t.startAxis),
              this)
            : o.default.bool(t)
            ? ((this.options.drag.enabled = t), this)
            : this.options.drag;
        },
        beforeMove: f,
        move: d,
        defaults: { startAxis: "xy", lockAxis: "xy" },
        getCursor: function () {
          return "move";
        },
      },
      h = p;
    c.default = h;
    var v = {};
    Object.defineProperty(v, "__esModule", { value: !0 }), (v.default = void 0);
    var g = {
      init: function (t) {
        var e = t;
        (g.document = e.document),
          (g.DocumentFragment = e.DocumentFragment || m),
          (g.SVGElement = e.SVGElement || m),
          (g.SVGSVGElement = e.SVGSVGElement || m),
          (g.SVGElementInstance = e.SVGElementInstance || m),
          (g.Element = e.Element || m),
          (g.HTMLElement = e.HTMLElement || g.Element),
          (g.Event = e.Event),
          (g.Touch = e.Touch || m),
          (g.PointerEvent = e.PointerEvent || e.MSPointerEvent);
      },
      document: null,
      DocumentFragment: null,
      SVGElement: null,
      SVGSVGElement: null,
      SVGElementInstance: null,
      Element: null,
      HTMLElement: null,
      Event: null,
      Touch: null,
      PointerEvent: null,
    };
    function m() {}
    var y = g;
    v.default = y;
    var _ = {};
    Object.defineProperty(_, "__esModule", { value: !0 }), (_.default = void 0);
    var b = {
        init: function (t) {
          var n = v.default.Element,
            r = e.window.navigator;
          (b.supportsTouch =
            "ontouchstart" in t ||
            (o.default.func(t.DocumentTouch) &&
              v.default.document instanceof t.DocumentTouch)),
            (b.supportsPointerEvent =
              !1 !== r.pointerEnabled && !!v.default.PointerEvent),
            (b.isIOS = /iP(hone|od|ad)/.test(r.platform)),
            (b.isIOS7 =
              /iP(hone|od|ad)/.test(r.platform) &&
              /OS 7[^\d]/.test(r.appVersion)),
            (b.isIe9 = /MSIE 9/.test(r.userAgent)),
            (b.isOperaMobile =
              "Opera" === r.appName &&
              b.supportsTouch &&
              /Presto/.test(r.userAgent)),
            (b.prefixedMatchesSelector =
              "matches" in n.prototype
                ? "matches"
                : "webkitMatchesSelector" in n.prototype
                ? "webkitMatchesSelector"
                : "mozMatchesSelector" in n.prototype
                ? "mozMatchesSelector"
                : "oMatchesSelector" in n.prototype
                ? "oMatchesSelector"
                : "msMatchesSelector"),
            (b.pEventTypes = b.supportsPointerEvent
              ? v.default.PointerEvent === t.MSPointerEvent
                ? {
                    up: "MSPointerUp",
                    down: "MSPointerDown",
                    over: "mouseover",
                    out: "mouseout",
                    move: "MSPointerMove",
                    cancel: "MSPointerCancel",
                  }
                : {
                    up: "pointerup",
                    down: "pointerdown",
                    over: "pointerover",
                    out: "pointerout",
                    move: "pointermove",
                    cancel: "pointercancel",
                  }
              : null),
            (b.wheelEvent =
              "onmousewheel" in v.default.document ? "mousewheel" : "wheel");
        },
        supportsTouch: null,
        supportsPointerEvent: null,
        isIOS7: null,
        isIOS: null,
        isIe9: null,
        isOperaMobile: null,
        prefixedMatchesSelector: null,
        pEventTypes: null,
        wheelEvent: null,
      },
      x = b;
    _.default = x;
    var w = {};
    function T(t) {
      var e = t.parentNode;
      if (o.default.docFrag(e)) {
        for (; (e = e.host) && o.default.docFrag(e); );
        return e;
      }
      return e;
    }
    function S(t, n) {
      return (
        e.window !== e.realWindow && (n = n.replace(/\/deep\//g, " ")),
        t[_.default.prefixedMatchesSelector](n)
      );
    }
    Object.defineProperty(w, "__esModule", { value: !0 }),
      (w.nodeContains = function (t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }),
      (w.closest = function (t, e) {
        for (; o.default.element(t); ) {
          if (S(t, e)) return t;
          t = T(t);
        }
        return null;
      }),
      (w.parentNode = T),
      (w.matchesSelector = S),
      (w.indexOfDeepestElement = function (t) {
        for (var n, r = [], i = 0; i < t.length; i++) {
          var o = t[i],
            a = t[n];
          if (o && i !== n)
            if (a) {
              var s = O(o),
                u = O(a);
              if (s !== o.ownerDocument)
                if (u !== o.ownerDocument)
                  if (s !== u) {
                    r = r.length ? r : P(a);
                    var l = void 0;
                    if (
                      a instanceof v.default.HTMLElement &&
                      o instanceof v.default.SVGElement &&
                      !(o instanceof v.default.SVGSVGElement)
                    ) {
                      if (o === u) continue;
                      l = o.ownerSVGElement;
                    } else l = o;
                    for (
                      var c = P(l, a.ownerDocument), f = 0;
                      c[f] && c[f] === r[f];

                    )
                      f++;
                    for (
                      var d = [c[f - 1], c[f], r[f]], p = d[0].lastChild;
                      p;

                    ) {
                      if (p === d[1]) {
                        (n = i), (r = c);
                        break;
                      }
                      if (p === d[2]) break;
                      p = p.previousSibling;
                    }
                  } else
                    (h = o),
                      (g = a),
                      (parseInt(
                        e.getWindow(h).getComputedStyle(h).zIndex,
                        10
                      ) || 0) >=
                        (parseInt(
                          e.getWindow(g).getComputedStyle(g).zIndex,
                          10
                        ) || 0) && (n = i);
                else n = i;
            } else n = i;
        }
        var h, g;
        return n;
      }),
      (w.matchesUpTo = function (t, e, n) {
        for (; o.default.element(t); ) {
          if (S(t, e)) return !0;
          if ((t = T(t)) === n) return S(t, e);
        }
        return !1;
      }),
      (w.getActualElement = function (t) {
        return t.correspondingUseElement || t;
      }),
      (w.getScrollXY = E),
      (w.getElementClientRect = M),
      (w.getElementRect = function (t) {
        var n = M(t);
        if (!_.default.isIOS7 && n) {
          var r = E(e.getWindow(t));
          (n.left += r.x), (n.right += r.x), (n.top += r.y), (n.bottom += r.y);
        }
        return n;
      }),
      (w.getPath = function (t) {
        for (var e = []; t; ) e.push(t), (t = T(t));
        return e;
      }),
      (w.trySelector = function (t) {
        return (
          !!o.default.string(t) && (v.default.document.querySelector(t), !0)
        );
      });
    var O = function (t) {
      return t.parentNode || t.host;
    };
    function P(t, e) {
      for (
        var n, r = [], i = t;
        (n = O(i)) && i !== e && n !== i.ownerDocument;

      )
        r.unshift(i), (i = n);
      return r;
    }
    function E(t) {
      return {
        x: (t = t || e.window).scrollX || t.document.documentElement.scrollLeft,
        y: t.scrollY || t.document.documentElement.scrollTop,
      };
    }
    function M(t) {
      var e =
        t instanceof v.default.SVGElement
          ? t.getBoundingClientRect()
          : t.getClientRects()[0];
      return (
        e && {
          left: e.left,
          right: e.right,
          top: e.top,
          bottom: e.bottom,
          width: e.width || e.right - e.left,
          height: e.height || e.bottom - e.top,
        }
      );
    }
    var k = {};
    Object.defineProperty(k, "__esModule", { value: !0 }),
      (k.default = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      });
    var A = {};
    function j(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function D(t, e, n) {
      return "parent" === t
        ? (0, w.parentNode)(n)
        : "self" === t
        ? e.getRect(n)
        : (0, w.closest)(n, t);
    }
    Object.defineProperty(A, "__esModule", { value: !0 }),
      (A.getStringOptionResult = D),
      (A.resolveRectLike = function (t, e, n, r) {
        var i,
          a = t;
        return (
          o.default.string(a)
            ? (a = D(a, e, n))
            : o.default.func(a) &&
              (a = a.apply(
                void 0,
                (function (t) {
                  if (Array.isArray(t)) return j(t);
                })((i = r)) ||
                  (function (t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(t)
                    )
                      return Array.from(t);
                  })(i) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return j(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? j(t, void 0)
                          : void 0
                      );
                    }
                  })(i) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )),
          o.default.element(a) && (a = (0, w.getElementRect)(a)),
          a
        );
      }),
      (A.rectToXY = function (t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }),
      (A.xywhToTlbr = function (t) {
        return (
          !t ||
            ("left" in t && "top" in t) ||
            (((t = (0, k.default)({}, t)).left = t.x || 0),
            (t.top = t.y || 0),
            (t.right = t.right || t.left + t.width),
            (t.bottom = t.bottom || t.top + t.height)),
          t
        );
      }),
      (A.tlbrToXywh = function (t) {
        return (
          !t ||
            ("x" in t && "y" in t) ||
            (((t = (0, k.default)({}, t)).x = t.left || 0),
            (t.y = t.top || 0),
            (t.width = t.width || (t.right || 0) - t.x),
            (t.height = t.height || (t.bottom || 0) - t.y)),
          t
        );
      }),
      (A.addEdges = function (t, e, n) {
        t.left && (e.left += n.x),
          t.right && (e.right += n.x),
          t.top && (e.top += n.y),
          t.bottom && (e.bottom += n.y),
          (e.width = e.right - e.left),
          (e.height = e.bottom - e.top);
      });
    var I = {};
    Object.defineProperty(I, "__esModule", { value: !0 }),
      (I.default = function (t, e, n) {
        var r = t.options[n],
          i = (r && r.origin) || t.options.origin,
          o = (0, A.resolveRectLike)(i, t, e, [t && e]);
        return (0, A.rectToXY)(o) || { x: 0, y: 0 };
      });
    var C = {};
    function z(t) {
      return t.trim().split(/ +/);
    }
    Object.defineProperty(C, "__esModule", { value: !0 }),
      (C.default = function t(e, n, r) {
        if (
          ((r = r || {}),
          o.default.string(e) && -1 !== e.search(" ") && (e = z(e)),
          o.default.array(e))
        )
          return e.reduce(function (e, i) {
            return (0, k.default)(e, t(i, n, r));
          }, r);
        if ((o.default.object(e) && ((n = e), (e = "")), o.default.func(n)))
          (r[e] = r[e] || []), r[e].push(n);
        else if (o.default.array(n))
          for (var i = 0; i < n.length; i++) {
            var a;
            (a = n[i]), t(e, a, r);
          }
        else if (o.default.object(n))
          for (var s in n) {
            var u = z(s).map(function (t) {
              return "".concat(e).concat(t);
            });
            t(u, n[s], r);
          }
        return r;
      });
    var R = {};
    Object.defineProperty(R, "__esModule", { value: !0 }),
      (R.default = void 0),
      (R.default = function (t, e) {
        return Math.sqrt(t * t + e * e);
      });
    var F = {};
    function L(t, e) {
      for (var n in e) {
        var r = L.prefixedPropREs,
          i = !1;
        for (var o in r)
          if (0 === n.indexOf(o) && r[o].test(n)) {
            i = !0;
            break;
          }
        i || "function" == typeof e[n] || (t[n] = e[n]);
      }
      return t;
    }
    Object.defineProperty(F, "__esModule", { value: !0 }),
      (F.default = void 0),
      (L.prefixedPropREs = {
        webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
        moz: /(Pressure)$/,
      });
    var B = L;
    F.default = B;
    var Y = {};
    function X(t) {
      return t instanceof v.default.Event || t instanceof v.default.Touch;
    }
    function q(t, e, n) {
      return (
        (t = t || "page"), ((n = n || {}).x = e[t + "X"]), (n.y = e[t + "Y"]), n
      );
    }
    function N(t, e) {
      return (
        (e = e || { x: 0, y: 0 }),
        _.default.isOperaMobile && X(t)
          ? (q("screen", t, e),
            (e.x += window.scrollX),
            (e.y += window.scrollY))
          : q("page", t, e),
        e
      );
    }
    function H(t, e) {
      return (
        (e = e || {}),
        _.default.isOperaMobile && X(t) ? q("screen", t, e) : q("client", t, e),
        e
      );
    }
    function U(t) {
      var e = [];
      return (
        o.default.array(t)
          ? ((e[0] = t[0]), (e[1] = t[1]))
          : "touchend" === t.type
          ? 1 === t.touches.length
            ? ((e[0] = t.touches[0]), (e[1] = t.changedTouches[0]))
            : 0 === t.touches.length &&
              ((e[0] = t.changedTouches[0]), (e[1] = t.changedTouches[1]))
          : ((e[0] = t.touches[0]), (e[1] = t.touches[1])),
        e
      );
    }
    function W(t) {
      for (
        var e = {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0,
          },
          n = 0;
        n < t.length;
        n++
      ) {
        var r = t[n];
        for (var i in e) e[i] += r[i];
      }
      for (var o in e) e[o] /= t.length;
      return e;
    }
    Object.defineProperty(Y, "__esModule", { value: !0 }),
      (Y.copyCoords = function (t, e) {
        (t.page = t.page || {}),
          (t.page.x = e.page.x),
          (t.page.y = e.page.y),
          (t.client = t.client || {}),
          (t.client.x = e.client.x),
          (t.client.y = e.client.y),
          (t.timeStamp = e.timeStamp);
      }),
      (Y.setCoordDeltas = function (t, e, n) {
        (t.page.x = n.page.x - e.page.x),
          (t.page.y = n.page.y - e.page.y),
          (t.client.x = n.client.x - e.client.x),
          (t.client.y = n.client.y - e.client.y),
          (t.timeStamp = n.timeStamp - e.timeStamp);
      }),
      (Y.setCoordVelocity = function (t, e) {
        var n = Math.max(e.timeStamp / 1e3, 0.001);
        (t.page.x = e.page.x / n),
          (t.page.y = e.page.y / n),
          (t.client.x = e.client.x / n),
          (t.client.y = e.client.y / n),
          (t.timeStamp = n);
      }),
      (Y.setZeroCoords = function (t) {
        (t.page.x = 0), (t.page.y = 0), (t.client.x = 0), (t.client.y = 0);
      }),
      (Y.isNativePointer = X),
      (Y.getXY = q),
      (Y.getPageXY = N),
      (Y.getClientXY = H),
      (Y.getPointerId = function (t) {
        return o.default.number(t.pointerId) ? t.pointerId : t.identifier;
      }),
      (Y.setCoords = function (t, e, n) {
        var r = e.length > 1 ? W(e) : e[0];
        N(r, t.page), H(r, t.client), (t.timeStamp = n);
      }),
      (Y.getTouchPair = U),
      (Y.pointerAverage = W),
      (Y.touchBBox = function (t) {
        if (!t.length) return null;
        var e = U(t),
          n = Math.min(e[0].pageX, e[1].pageX),
          r = Math.min(e[0].pageY, e[1].pageY),
          i = Math.max(e[0].pageX, e[1].pageX),
          o = Math.max(e[0].pageY, e[1].pageY);
        return {
          x: n,
          y: r,
          left: n,
          top: r,
          right: i,
          bottom: o,
          width: i - n,
          height: o - r,
        };
      }),
      (Y.touchDistance = function (t, e) {
        var n = e + "X",
          r = e + "Y",
          i = U(t),
          o = i[0][n] - i[1][n],
          a = i[0][r] - i[1][r];
        return (0, R.default)(o, a);
      }),
      (Y.touchAngle = function (t, e) {
        var n = e + "X",
          r = e + "Y",
          i = U(t),
          o = i[1][n] - i[0][n],
          a = i[1][r] - i[0][r];
        return (180 * Math.atan2(a, o)) / Math.PI;
      }),
      (Y.getPointerType = function (t) {
        return o.default.string(t.pointerType)
          ? t.pointerType
          : o.default.number(t.pointerType)
          ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType]
          : /touch/.test(t.type) || t instanceof v.default.Touch
          ? "touch"
          : "mouse";
      }),
      (Y.getEventTargets = function (t) {
        var e = o.default.func(t.composedPath) ? t.composedPath() : t.path;
        return [
          w.getActualElement(e ? e[0] : t.target),
          w.getActualElement(t.currentTarget),
        ];
      }),
      (Y.newCoords = function () {
        return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
      }),
      (Y.coordsToEvent = function (t) {
        return {
          coords: t,
          get page() {
            return this.coords.page;
          },
          get client() {
            return this.coords.client;
          },
          get timeStamp() {
            return this.coords.timeStamp;
          },
          get pageX() {
            return this.coords.page.x;
          },
          get pageY() {
            return this.coords.page.y;
          },
          get clientX() {
            return this.coords.client.x;
          },
          get clientY() {
            return this.coords.client.y;
          },
          get pointerId() {
            return this.coords.pointerId;
          },
          get target() {
            return this.coords.target;
          },
          get type() {
            return this.coords.type;
          },
          get pointerType() {
            return this.coords.pointerType;
          },
          get buttons() {
            return this.coords.buttons;
          },
          preventDefault: function () {},
        };
      }),
      Object.defineProperty(Y, "pointerExtend", {
        enumerable: !0,
        get: function () {
          return F.default;
        },
      });
    var V = {};
    Object.defineProperty(V, "__esModule", { value: !0 }),
      (V.BaseEvent = void 0);
    var G = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.type = void 0),
          (this.target = void 0),
          (this.currentTarget = void 0),
          (this.interactable = void 0),
          (this._interaction = void 0),
          (this.timeStamp = void 0),
          (this.immediatePropagationStopped = !1),
          (this.propagationStopped = !1),
          (this._interaction = e);
      }
      var e;
      return (
        (e = [
          { key: "preventDefault", value: function () {} },
          {
            key: "stopPropagation",
            value: function () {
              this.propagationStopped = !0;
            },
          },
          {
            key: "stopImmediatePropagation",
            value: function () {
              this.immediatePropagationStopped = this.propagationStopped = !0;
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    (V.BaseEvent = G),
      Object.defineProperty(G.prototype, "interaction", {
        get: function () {
          return this._interaction._proxy;
        },
        set: function () {},
      });
    var $ = {};
    Object.defineProperty($, "__esModule", { value: !0 }),
      ($.find =
        $.findIndex =
        $.from =
        $.merge =
        $.remove =
        $.contains =
          void 0),
      ($.contains = function (t, e) {
        return -1 !== t.indexOf(e);
      }),
      ($.remove = function (t, e) {
        return t.splice(t.indexOf(e), 1);
      });
    var Z = function (t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(r);
      }
      return t;
    };
    ($.merge = Z),
      ($.from = function (t) {
        return Z([], t);
      });
    var K = function (t, e) {
      for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
      return -1;
    };
    ($.findIndex = K),
      ($.find = function (t, e) {
        return t[K(t, e)];
      });
    var Q = {};
    function J(t) {
      return (J =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function tt(t, e) {
      return (tt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function et(t, e) {
      return !e || ("object" !== J(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function nt(t) {
      return (nt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    Object.defineProperty(Q, "__esModule", { value: !0 }),
      (Q.DropEvent = void 0);
    var rt = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && tt(t, e);
      })(o, t);
      var e,
        n,
        r,
        i =
          ((n = o),
          (r = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()),
          function () {
            var t,
              e = nt(n);
            if (r) {
              var i = nt(this).constructor;
              t = Reflect.construct(e, arguments, i);
            } else t = e.apply(this, arguments);
            return et(this, t);
          });
      function o(t, e, n) {
        var r;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
          ((r = i.call(this, e._interaction)).target = void 0),
          (r.dropzone = void 0),
          (r.dragEvent = void 0),
          (r.relatedTarget = void 0),
          (r.draggable = void 0),
          (r.timeStamp = void 0),
          (r.propagationStopped = !1),
          (r.immediatePropagationStopped = !1);
        var a = "dragleave" === n ? t.prev : t.cur,
          s = a.element,
          u = a.dropzone;
        return (
          (r.type = n),
          (r.target = s),
          (r.currentTarget = s),
          (r.dropzone = u),
          (r.dragEvent = e),
          (r.relatedTarget = e.target),
          (r.draggable = e.interactable),
          (r.timeStamp = e.timeStamp),
          r
        );
      }
      return (
        (e = [
          {
            key: "reject",
            value: function () {
              var t = this,
                e = this._interaction.dropState;
              if (
                "dropactivate" === this.type ||
                (this.dropzone &&
                  e.cur.dropzone === this.dropzone &&
                  e.cur.element === this.target)
              )
                if (
                  ((e.prev.dropzone = this.dropzone),
                  (e.prev.element = this.target),
                  (e.rejected = !0),
                  (e.events.enter = null),
                  this.stopImmediatePropagation(),
                  "dropactivate" === this.type)
                ) {
                  var n = e.activeDrops,
                    r = $.findIndex(n, function (e) {
                      var n = e.dropzone,
                        r = e.element;
                      return n === t.dropzone && r === t.target;
                    });
                  e.activeDrops.splice(r, 1);
                  var i = new o(e, this.dragEvent, "dropdeactivate");
                  (i.dropzone = this.dropzone),
                    (i.target = this.target),
                    this.dropzone.fire(i);
                } else
                  this.dropzone.fire(new o(e, this.dragEvent, "dragleave"));
            },
          },
          { key: "preventDefault", value: function () {} },
          {
            key: "stopPropagation",
            value: function () {
              this.propagationStopped = !0;
            },
          },
          {
            key: "stopImmediatePropagation",
            value: function () {
              this.immediatePropagationStopped = this.propagationStopped = !0;
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(o.prototype, e),
        o
      );
    })(V.BaseEvent);
    Q.DropEvent = rt;
    var it = {};
    function ot(t, e) {
      for (var n = 0; n < t.slice().length; n++) {
        var r = t.slice()[n],
          i = r.dropzone,
          o = r.element;
        (e.dropzone = i),
          (e.target = o),
          i.fire(e),
          (e.propagationStopped = e.immediatePropagationStopped = !1);
      }
    }
    function at(t, e) {
      for (
        var n = (function (t, e) {
            for (
              var n = t.interactables, r = [], i = 0;
              i < n.list.length;
              i++
            ) {
              var a = n.list[i];
              if (a.options.drop.enabled) {
                var s = a.options.drop.accept;
                if (
                  !(
                    (o.default.element(s) && s !== e) ||
                    (o.default.string(s) && !w.matchesSelector(e, s)) ||
                    (o.default.func(s) &&
                      !s({ dropzone: a, draggableElement: e }))
                  )
                )
                  for (
                    var u = o.default.string(a.target)
                        ? a._context.querySelectorAll(a.target)
                        : o.default.array(a.target)
                        ? a.target
                        : [a.target],
                      l = 0;
                    l < u.length;
                    l++
                  ) {
                    var c = u[l];
                    c !== e && r.push({ dropzone: a, element: c });
                  }
              }
            }
            return r;
          })(t, e),
          r = 0;
        r < n.length;
        r++
      ) {
        var i = n[r];
        i.rect = i.dropzone.getRect(i.element);
      }
      return n;
    }
    function st(t, e, n) {
      for (
        var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0;
        s < r.activeDrops.length;
        s++
      ) {
        var u = r.activeDrops[s],
          l = u.dropzone,
          c = u.element,
          f = u.rect;
        a.push(l.dropCheck(e, n, i, o, c, f) ? c : null);
      }
      var d = w.indexOfDeepestElement(a);
      return r.activeDrops[d] || null;
    }
    function ut(t, e, n) {
      var r = t.dropState,
        i = {
          enter: null,
          leave: null,
          activate: null,
          deactivate: null,
          move: null,
          drop: null,
        };
      return (
        "dragstart" === n.type &&
          ((i.activate = new Q.DropEvent(r, n, "dropactivate")),
          (i.activate.target = null),
          (i.activate.dropzone = null)),
        "dragend" === n.type &&
          ((i.deactivate = new Q.DropEvent(r, n, "dropdeactivate")),
          (i.deactivate.target = null),
          (i.deactivate.dropzone = null)),
        r.rejected ||
          (r.cur.element !== r.prev.element &&
            (r.prev.dropzone &&
              ((i.leave = new Q.DropEvent(r, n, "dragleave")),
              (n.dragLeave = i.leave.target = r.prev.element),
              (n.prevDropzone = i.leave.dropzone = r.prev.dropzone)),
            r.cur.dropzone &&
              ((i.enter = new Q.DropEvent(r, n, "dragenter")),
              (n.dragEnter = r.cur.element),
              (n.dropzone = r.cur.dropzone))),
          "dragend" === n.type &&
            r.cur.dropzone &&
            ((i.drop = new Q.DropEvent(r, n, "drop")),
            (n.dropzone = r.cur.dropzone),
            (n.relatedTarget = r.cur.element)),
          "dragmove" === n.type &&
            r.cur.dropzone &&
            ((i.move = new Q.DropEvent(r, n, "dropmove")),
            (i.move.dragmove = n),
            (n.dropzone = r.cur.dropzone))),
        i
      );
    }
    function lt(t, e) {
      var n = t.dropState,
        r = n.activeDrops,
        i = n.cur,
        o = n.prev;
      e.leave && o.dropzone.fire(e.leave),
        e.enter && i.dropzone.fire(e.enter),
        e.move && i.dropzone.fire(e.move),
        e.drop && i.dropzone.fire(e.drop),
        e.deactivate && ot(r, e.deactivate),
        (n.prev.dropzone = i.dropzone),
        (n.prev.element = i.element);
    }
    function ct(t, e) {
      var n = t.interaction,
        r = t.iEvent,
        i = t.event;
      if ("dragmove" === r.type || "dragend" === r.type) {
        var o = n.dropState;
        e.dynamicDrop && (o.activeDrops = at(e, n.element));
        var a = r,
          s = st(n, a, i);
        (o.rejected =
          o.rejected &&
          !!s &&
          s.dropzone === o.cur.dropzone &&
          s.element === o.cur.element),
          (o.cur.dropzone = s && s.dropzone),
          (o.cur.element = s && s.element),
          (o.events = ut(n, 0, a));
      }
    }
    Object.defineProperty(it, "__esModule", { value: !0 }),
      (it.default = void 0);
    var ft = {
        id: "actions/drop",
        install: function (t) {
          var e = t.actions,
            n = t.interactStatic,
            r = t.Interactable,
            i = t.defaults;
          t.usePlugin(c.default),
            (r.prototype.dropzone = function (t) {
              return (function (t, e) {
                if (o.default.object(e)) {
                  if (
                    ((t.options.drop.enabled = !1 !== e.enabled), e.listeners)
                  ) {
                    var n = (0, C.default)(e.listeners),
                      r = Object.keys(n).reduce(function (t, e) {
                        return (
                          (t[
                            /^(enter|leave)/.test(e)
                              ? "drag".concat(e)
                              : /^(activate|deactivate|move)/.test(e)
                              ? "drop".concat(e)
                              : e
                          ] = n[e]),
                          t
                        );
                      }, {});
                    t.off(t.options.drop.listeners),
                      t.on(r),
                      (t.options.drop.listeners = r);
                  }
                  return (
                    o.default.func(e.ondrop) && t.on("drop", e.ondrop),
                    o.default.func(e.ondropactivate) &&
                      t.on("dropactivate", e.ondropactivate),
                    o.default.func(e.ondropdeactivate) &&
                      t.on("dropdeactivate", e.ondropdeactivate),
                    o.default.func(e.ondragenter) &&
                      t.on("dragenter", e.ondragenter),
                    o.default.func(e.ondragleave) &&
                      t.on("dragleave", e.ondragleave),
                    o.default.func(e.ondropmove) &&
                      t.on("dropmove", e.ondropmove),
                    /^(pointer|center)$/.test(e.overlap)
                      ? (t.options.drop.overlap = e.overlap)
                      : o.default.number(e.overlap) &&
                        (t.options.drop.overlap = Math.max(
                          Math.min(1, e.overlap),
                          0
                        )),
                    "accept" in e && (t.options.drop.accept = e.accept),
                    "checker" in e && (t.options.drop.checker = e.checker),
                    t
                  );
                }
                return o.default.bool(e)
                  ? ((t.options.drop.enabled = e), t)
                  : t.options.drop;
              })(this, t);
            }),
            (r.prototype.dropCheck = function (t, e, n, r, i, a) {
              return (function (t, e, n, r, i, a, s) {
                var u = !1;
                if (!(s = s || t.getRect(a)))
                  return (
                    !!t.options.drop.checker &&
                    t.options.drop.checker(e, n, u, t, a, r, i)
                  );
                var l = t.options.drop.overlap;
                if ("pointer" === l) {
                  var c = (0, I.default)(r, i, "drag"),
                    f = Y.getPageXY(e);
                  (f.x += c.x), (f.y += c.y);
                  var d = f.x > s.left && f.x < s.right,
                    p = f.y > s.top && f.y < s.bottom;
                  u = d && p;
                }
                var h = r.getRect(i);
                if (h && "center" === l) {
                  var v = h.left + h.width / 2,
                    g = h.top + h.height / 2;
                  u =
                    v >= s.left && v <= s.right && g >= s.top && g <= s.bottom;
                }
                return (
                  h &&
                    o.default.number(l) &&
                    (u =
                      (Math.max(
                        0,
                        Math.min(s.right, h.right) - Math.max(s.left, h.left)
                      ) *
                        Math.max(
                          0,
                          Math.min(s.bottom, h.bottom) - Math.max(s.top, h.top)
                        )) /
                        (h.width * h.height) >=
                      l),
                  t.options.drop.checker &&
                    (u = t.options.drop.checker(e, n, u, t, a, r, i)),
                  u
                );
              })(this, t, e, n, r, i, a);
            }),
            (n.dynamicDrop = function (e) {
              return o.default.bool(e)
                ? ((t.dynamicDrop = e), n)
                : t.dynamicDrop;
            }),
            (0, k.default)(e.phaselessTypes, {
              dragenter: !0,
              dragleave: !0,
              dropactivate: !0,
              dropdeactivate: !0,
              dropmove: !0,
              drop: !0,
            }),
            (e.methodDict.drop = "dropzone"),
            (t.dynamicDrop = !1),
            (i.actions.drop = ft.defaults);
        },
        listeners: {
          "interactions:before-action-start": function (t) {
            var e = t.interaction;
            "drag" === e.prepared.name &&
              (e.dropState = {
                cur: { dropzone: null, element: null },
                prev: { dropzone: null, element: null },
                rejected: null,
                events: null,
                activeDrops: [],
              });
          },
          "interactions:after-action-start": function (t, e) {
            var n = t.interaction,
              r = (t.event, t.iEvent);
            if ("drag" === n.prepared.name) {
              var i = n.dropState;
              (i.activeDrops = null),
                (i.events = null),
                (i.activeDrops = at(e, n.element)),
                (i.events = ut(n, 0, r)),
                i.events.activate &&
                  (ot(i.activeDrops, i.events.activate),
                  e.fire("actions/drop:start", {
                    interaction: n,
                    dragEvent: r,
                  }));
            }
          },
          "interactions:action-move": ct,
          "interactions:after-action-move": function (t, e) {
            var n = t.interaction,
              r = t.iEvent;
            "drag" === n.prepared.name &&
              (lt(n, n.dropState.events),
              e.fire("actions/drop:move", { interaction: n, dragEvent: r }),
              (n.dropState.events = {}));
          },
          "interactions:action-end": function (t, e) {
            if ("drag" === t.interaction.prepared.name) {
              var n = t.interaction,
                r = t.iEvent;
              ct(t, e),
                lt(n, n.dropState.events),
                e.fire("actions/drop:end", { interaction: n, dragEvent: r });
            }
          },
          "interactions:stop": function (t) {
            var e = t.interaction;
            if ("drag" === e.prepared.name) {
              var n = e.dropState;
              n &&
                ((n.activeDrops = null),
                (n.events = null),
                (n.cur.dropzone = null),
                (n.cur.element = null),
                (n.prev.dropzone = null),
                (n.prev.element = null),
                (n.rejected = !1));
            }
          },
        },
        getActiveDrops: at,
        getDrop: st,
        getDropEvents: ut,
        fireDropEvents: lt,
        defaults: { enabled: !1, accept: null, overlap: "pointer" },
      },
      dt = ft;
    it.default = dt;
    var pt = {};
    function ht(t) {
      var e = t.interaction,
        n = t.iEvent,
        r = t.phase;
      if ("gesture" === e.prepared.name) {
        var i = e.pointers.map(function (t) {
            return t.pointer;
          }),
          a = "start" === r,
          s = "end" === r,
          u = e.interactable.options.deltaSource;
        if (((n.touches = [i[0], i[1]]), a))
          (n.distance = Y.touchDistance(i, u)),
            (n.box = Y.touchBBox(i)),
            (n.scale = 1),
            (n.ds = 0),
            (n.angle = Y.touchAngle(i, u)),
            (n.da = 0),
            (e.gesture.startDistance = n.distance),
            (e.gesture.startAngle = n.angle);
        else if (s) {
          var l = e.prevEvent;
          (n.distance = l.distance),
            (n.box = l.box),
            (n.scale = l.scale),
            (n.ds = 0),
            (n.angle = l.angle),
            (n.da = 0);
        } else
          (n.distance = Y.touchDistance(i, u)),
            (n.box = Y.touchBBox(i)),
            (n.scale = n.distance / e.gesture.startDistance),
            (n.angle = Y.touchAngle(i, u)),
            (n.ds = n.scale - e.gesture.scale),
            (n.da = n.angle - e.gesture.angle);
        (e.gesture.distance = n.distance),
          (e.gesture.angle = n.angle),
          o.default.number(n.scale) &&
            n.scale !== 1 / 0 &&
            !isNaN(n.scale) &&
            (e.gesture.scale = n.scale);
      }
    }
    Object.defineProperty(pt, "__esModule", { value: !0 }),
      (pt.default = void 0);
    var vt = {
        id: "actions/gesture",
        before: ["actions/drag", "actions/resize"],
        install: function (t) {
          var e = t.actions,
            n = t.Interactable,
            r = t.defaults;
          (n.prototype.gesturable = function (t) {
            return o.default.object(t)
              ? ((this.options.gesture.enabled = !1 !== t.enabled),
                this.setPerAction("gesture", t),
                this.setOnEvents("gesture", t),
                this)
              : o.default.bool(t)
              ? ((this.options.gesture.enabled = t), this)
              : this.options.gesture;
          }),
            (e.map.gesture = vt),
            (e.methodDict.gesture = "gesturable"),
            (r.actions.gesture = vt.defaults);
        },
        listeners: {
          "interactions:action-start": ht,
          "interactions:action-move": ht,
          "interactions:action-end": ht,
          "interactions:new": function (t) {
            t.interaction.gesture = {
              angle: 0,
              distance: 0,
              scale: 1,
              startAngle: 0,
              startDistance: 0,
            };
          },
          "auto-start:check": function (t) {
            if (!(t.interaction.pointers.length < 2)) {
              var e = t.interactable.options.gesture;
              if (e && e.enabled) return (t.action = { name: "gesture" }), !1;
            }
          },
        },
        defaults: {},
        getCursor: function () {
          return "";
        },
      },
      gt = vt;
    pt.default = gt;
    var mt = {};
    function yt(t, e, n, r, i, a, s) {
      if (!e) return !1;
      if (!0 === e) {
        var u = o.default.number(a.width) ? a.width : a.right - a.left,
          l = o.default.number(a.height) ? a.height : a.bottom - a.top;
        if (
          ((s = Math.min(
            s,
            Math.abs(("left" === t || "right" === t ? u : l) / 2)
          )),
          u < 0 &&
            ("left" === t ? (t = "right") : "right" === t && (t = "left")),
          l < 0 &&
            ("top" === t ? (t = "bottom") : "bottom" === t && (t = "top")),
          "left" === t)
        )
          return n.x < (u >= 0 ? a.left : a.right) + s;
        if ("top" === t) return n.y < (l >= 0 ? a.top : a.bottom) + s;
        if ("right" === t) return n.x > (u >= 0 ? a.right : a.left) - s;
        if ("bottom" === t) return n.y > (l >= 0 ? a.bottom : a.top) - s;
      }
      return (
        !!o.default.element(r) &&
        (o.default.element(e) ? e === r : w.matchesUpTo(r, e, i))
      );
    }
    function _t(t) {
      var e = t.iEvent,
        n = t.interaction;
      if ("resize" === n.prepared.name && n.resizeAxes) {
        var r = e;
        n.interactable.options.resize.square
          ? ("y" === n.resizeAxes
              ? (r.delta.x = r.delta.y)
              : (r.delta.y = r.delta.x),
            (r.axes = "xy"))
          : ((r.axes = n.resizeAxes),
            "x" === n.resizeAxes
              ? (r.delta.y = 0)
              : "y" === n.resizeAxes && (r.delta.x = 0));
      }
    }
    Object.defineProperty(mt, "__esModule", { value: !0 }),
      (mt.default = void 0);
    var bt = {
        id: "actions/resize",
        before: ["actions/drag"],
        install: function (t) {
          var e = t.actions,
            n = t.browser,
            r = t.Interactable,
            i = t.defaults;
          (bt.cursors = (function (t) {
            return t.isIe9
              ? {
                  x: "e-resize",
                  y: "s-resize",
                  xy: "se-resize",
                  top: "n-resize",
                  left: "w-resize",
                  bottom: "s-resize",
                  right: "e-resize",
                  topleft: "se-resize",
                  bottomright: "se-resize",
                  topright: "ne-resize",
                  bottomleft: "ne-resize",
                }
              : {
                  x: "ew-resize",
                  y: "ns-resize",
                  xy: "nwse-resize",
                  top: "ns-resize",
                  left: "ew-resize",
                  bottom: "ns-resize",
                  right: "ew-resize",
                  topleft: "nwse-resize",
                  bottomright: "nwse-resize",
                  topright: "nesw-resize",
                  bottomleft: "nesw-resize",
                };
          })(n)),
            (bt.defaultMargin =
              n.supportsTouch || n.supportsPointerEvent ? 20 : 10),
            (r.prototype.resizable = function (e) {
              return (function (t, e, n) {
                return o.default.object(e)
                  ? ((t.options.resize.enabled = !1 !== e.enabled),
                    t.setPerAction("resize", e),
                    t.setOnEvents("resize", e),
                    o.default.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis)
                      ? (t.options.resize.axis = e.axis)
                      : null === e.axis &&
                        (t.options.resize.axis =
                          n.defaults.actions.resize.axis),
                    o.default.bool(e.preserveAspectRatio)
                      ? (t.options.resize.preserveAspectRatio =
                          e.preserveAspectRatio)
                      : o.default.bool(e.square) &&
                        (t.options.resize.square = e.square),
                    t)
                  : o.default.bool(e)
                  ? ((t.options.resize.enabled = e), t)
                  : t.options.resize;
              })(this, e, t);
            }),
            (e.map.resize = bt),
            (e.methodDict.resize = "resizable"),
            (i.actions.resize = bt.defaults);
        },
        listeners: {
          "interactions:new": function (t) {
            t.interaction.resizeAxes = "xy";
          },
          "interactions:action-start": function (t) {
            !(function (t) {
              var e = t.iEvent,
                n = t.interaction;
              if ("resize" === n.prepared.name && n.prepared.edges) {
                var r = e,
                  i = n.rect;
                (n._rects = {
                  start: (0, k.default)({}, i),
                  corrected: (0, k.default)({}, i),
                  previous: (0, k.default)({}, i),
                  delta: {
                    left: 0,
                    right: 0,
                    width: 0,
                    top: 0,
                    bottom: 0,
                    height: 0,
                  },
                }),
                  (r.edges = n.prepared.edges),
                  (r.rect = n._rects.corrected),
                  (r.deltaRect = n._rects.delta);
              }
            })(t),
              _t(t);
          },
          "interactions:action-move": function (t) {
            !(function (t) {
              var e = t.iEvent,
                n = t.interaction;
              if ("resize" === n.prepared.name && n.prepared.edges) {
                var r = e,
                  i = n.interactable.options.resize.invert,
                  o = "reposition" === i || "negate" === i,
                  a = n.rect,
                  s = n._rects,
                  u = s.start,
                  l = s.corrected,
                  c = s.delta,
                  f = s.previous;
                if (((0, k.default)(f, l), o)) {
                  if (((0, k.default)(l, a), "reposition" === i)) {
                    if (l.top > l.bottom) {
                      var d = l.top;
                      (l.top = l.bottom), (l.bottom = d);
                    }
                    if (l.left > l.right) {
                      var p = l.left;
                      (l.left = l.right), (l.right = p);
                    }
                  }
                } else
                  (l.top = Math.min(a.top, u.bottom)),
                    (l.bottom = Math.max(a.bottom, u.top)),
                    (l.left = Math.min(a.left, u.right)),
                    (l.right = Math.max(a.right, u.left));
                for (var h in ((l.width = l.right - l.left),
                (l.height = l.bottom - l.top),
                l))
                  c[h] = l[h] - f[h];
                (r.edges = n.prepared.edges), (r.rect = l), (r.deltaRect = c);
              }
            })(t),
              _t(t);
          },
          "interactions:action-end": function (t) {
            var e = t.iEvent,
              n = t.interaction;
            if ("resize" === n.prepared.name && n.prepared.edges) {
              var r = e;
              (r.edges = n.prepared.edges),
                (r.rect = n._rects.corrected),
                (r.deltaRect = n._rects.delta);
            }
          },
          "auto-start:check": function (t) {
            var e = t.interaction,
              n = t.interactable,
              r = t.element,
              i = t.rect,
              a = t.buttons;
            if (i) {
              var s = (0, k.default)({}, e.coords.cur.page),
                u = n.options.resize;
              if (
                u &&
                u.enabled &&
                (!e.pointerIsDown ||
                  !/mouse|pointer/.test(e.pointerType) ||
                  0 != (a & u.mouseButtons))
              ) {
                if (o.default.object(u.edges)) {
                  var l = { left: !1, right: !1, top: !1, bottom: !1 };
                  for (var c in l)
                    l[c] = yt(
                      c,
                      u.edges[c],
                      s,
                      e._latestPointer.eventTarget,
                      r,
                      i,
                      u.margin || bt.defaultMargin
                    );
                  (l.left = l.left && !l.right),
                    (l.top = l.top && !l.bottom),
                    (l.left || l.right || l.top || l.bottom) &&
                      (t.action = { name: "resize", edges: l });
                } else {
                  var f = "y" !== u.axis && s.x > i.right - bt.defaultMargin,
                    d = "x" !== u.axis && s.y > i.bottom - bt.defaultMargin;
                  (f || d) &&
                    (t.action = {
                      name: "resize",
                      axes: (f ? "x" : "") + (d ? "y" : ""),
                    });
                }
                return !t.action && void 0;
              }
            }
          },
        },
        defaults: {
          square: !1,
          preserveAspectRatio: !1,
          axis: "xy",
          margin: NaN,
          edges: null,
          invert: "none",
        },
        cursors: null,
        getCursor: function (t) {
          var e = t.edges,
            n = t.axis,
            r = t.name,
            i = bt.cursors,
            o = null;
          if (n) o = i[r + n];
          else if (e) {
            for (
              var a = "", s = ["top", "bottom", "left", "right"], u = 0;
              u < s.length;
              u++
            ) {
              var l = s[u];
              e[l] && (a += l);
            }
            o = i[a];
          }
          return o;
        },
        defaultMargin: null,
      },
      xt = bt;
    mt.default = xt;
    var wt = {};
    Object.defineProperty(wt, "__esModule", { value: !0 }),
      (wt.default = void 0);
    var Tt = {
      id: "actions",
      install: function (t) {
        t.usePlugin(pt.default),
          t.usePlugin(mt.default),
          t.usePlugin(c.default),
          t.usePlugin(it.default);
      },
    };
    wt.default = Tt;
    var St = {};
    Object.defineProperty(St, "__esModule", { value: !0 }),
      (St.default = void 0),
      (St.default = {});
    var Ot = {};
    Object.defineProperty(Ot, "__esModule", { value: !0 }),
      (Ot.default = void 0);
    var Pt,
      Et,
      Mt = 0,
      kt = {
        request: function (t) {
          return Pt(t);
        },
        cancel: function (t) {
          return Et(t);
        },
        init: function (t) {
          if (
            ((Pt = t.requestAnimationFrame), (Et = t.cancelAnimationFrame), !Pt)
          )
            for (
              var e = ["ms", "moz", "webkit", "o"], n = 0;
              n < e.length;
              n++
            ) {
              var r = e[n];
              (Pt = t["".concat(r, "RequestAnimationFrame")]),
                (Et =
                  t["".concat(r, "CancelAnimationFrame")] ||
                  t["".concat(r, "CancelRequestAnimationFrame")]);
            }
          (Pt = Pt && Pt.bind(t)),
            (Et = Et && Et.bind(t)),
            Pt ||
              ((Pt = function (e) {
                var n = Date.now(),
                  r = Math.max(0, 16 - (n - Mt)),
                  i = t.setTimeout(function () {
                    e(n + r);
                  }, r);
                return (Mt = n + r), i;
              }),
              (Et = function (t) {
                return clearTimeout(t);
              }));
        },
      };
    Ot.default = kt;
    var At = {};
    Object.defineProperty(At, "__esModule", { value: !0 }),
      (At.getContainer = Dt),
      (At.getScroll = It),
      (At.getScrollSize = function (t) {
        return (
          o.default.window(t) && (t = window.document.body),
          { x: t.scrollWidth, y: t.scrollHeight }
        );
      }),
      (At.getScrollSizeDelta = function (t, e) {
        var n = t.interaction,
          r = t.element,
          i = n && n.interactable.options[n.prepared.name].autoScroll;
        if (!i || !i.enabled) return e(), { x: 0, y: 0 };
        var o = Dt(i.container, n.interactable, r),
          a = It(o);
        e();
        var s = It(o);
        return { x: s.x - a.x, y: s.y - a.y };
      }),
      (At.default = void 0);
    var jt = {
      defaults: { enabled: !1, margin: 60, container: null, speed: 300 },
      now: Date.now,
      interaction: null,
      i: 0,
      x: 0,
      y: 0,
      isScrolling: !1,
      prevTime: 0,
      margin: 0,
      speed: 0,
      start: function (t) {
        (jt.isScrolling = !0),
          Ot.default.cancel(jt.i),
          (t.autoScroll = jt),
          (jt.interaction = t),
          (jt.prevTime = jt.now()),
          (jt.i = Ot.default.request(jt.scroll));
      },
      stop: function () {
        (jt.isScrolling = !1),
          jt.interaction && (jt.interaction.autoScroll = null),
          Ot.default.cancel(jt.i);
      },
      scroll: function () {
        var t = jt.interaction,
          e = t.interactable,
          n = t.element,
          r = t.prepared.name,
          i = e.options[r].autoScroll,
          a = Dt(i.container, e, n),
          s = jt.now(),
          u = (s - jt.prevTime) / 1e3,
          l = i.speed * u;
        if (l >= 1) {
          var c = { x: jt.x * l, y: jt.y * l };
          if (c.x || c.y) {
            var f = It(a);
            o.default.window(a)
              ? a.scrollBy(c.x, c.y)
              : a && ((a.scrollLeft += c.x), (a.scrollTop += c.y));
            var d = It(a),
              p = { x: d.x - f.x, y: d.y - f.y };
            (p.x || p.y) &&
              e.fire({
                type: "autoscroll",
                target: n,
                interactable: e,
                delta: p,
                interaction: t,
                container: a,
              });
          }
          jt.prevTime = s;
        }
        jt.isScrolling &&
          (Ot.default.cancel(jt.i), (jt.i = Ot.default.request(jt.scroll)));
      },
      check: function (t, e) {
        var n = t.options;
        return n[e].autoScroll && n[e].autoScroll.enabled;
      },
      onInteractionMove: function (t) {
        var e = t.interaction,
          n = t.pointer;
        if (e.interacting() && jt.check(e.interactable, e.prepared.name))
          if (e.simulation) jt.x = jt.y = 0;
          else {
            var r,
              i,
              a,
              s,
              u = e.interactable,
              l = e.element,
              c = e.prepared.name,
              f = u.options[c].autoScroll,
              d = Dt(f.container, u, l);
            if (o.default.window(d))
              (s = n.clientX < jt.margin),
                (r = n.clientY < jt.margin),
                (i = n.clientX > d.innerWidth - jt.margin),
                (a = n.clientY > d.innerHeight - jt.margin);
            else {
              var p = w.getElementClientRect(d);
              (s = n.clientX < p.left + jt.margin),
                (r = n.clientY < p.top + jt.margin),
                (i = n.clientX > p.right - jt.margin),
                (a = n.clientY > p.bottom - jt.margin);
            }
            (jt.x = i ? 1 : s ? -1 : 0),
              (jt.y = a ? 1 : r ? -1 : 0),
              jt.isScrolling ||
                ((jt.margin = f.margin), (jt.speed = f.speed), jt.start(e));
          }
      },
    };
    function Dt(t, n, r) {
      return (
        (o.default.string(t) ? (0, A.getStringOptionResult)(t, n, r) : t) ||
        (0, e.getWindow)(r)
      );
    }
    function It(t) {
      return (
        o.default.window(t) && (t = window.document.body),
        { x: t.scrollLeft, y: t.scrollTop }
      );
    }
    var Ct = {
      id: "auto-scroll",
      install: function (t) {
        var e = t.defaults,
          n = t.actions;
        (t.autoScroll = jt),
          (jt.now = function () {
            return t.now();
          }),
          (n.phaselessTypes.autoscroll = !0),
          (e.perAction.autoScroll = jt.defaults);
      },
      listeners: {
        "interactions:new": function (t) {
          t.interaction.autoScroll = null;
        },
        "interactions:destroy": function (t) {
          (t.interaction.autoScroll = null),
            jt.stop(),
            jt.interaction && (jt.interaction = null);
        },
        "interactions:stop": jt.stop,
        "interactions:action-move": function (t) {
          return jt.onInteractionMove(t);
        },
      },
    };
    At.default = Ct;
    var zt = {};
    Object.defineProperty(zt, "__esModule", { value: !0 }),
      (zt.warnOnce = function (t, n) {
        var r = !1;
        return function () {
          return (
            r || (e.window.console.warn(n), (r = !0)), t.apply(this, arguments)
          );
        };
      }),
      (zt.copyAction = function (t, e) {
        return (t.name = e.name), (t.axis = e.axis), (t.edges = e.edges), t;
      });
    var Rt = {};
    function Ft(t) {
      return o.default.bool(t)
        ? ((this.options.styleCursor = t), this)
        : null === t
        ? (delete this.options.styleCursor, this)
        : this.options.styleCursor;
    }
    function Lt(t) {
      return o.default.func(t)
        ? ((this.options.actionChecker = t), this)
        : null === t
        ? (delete this.options.actionChecker, this)
        : this.options.actionChecker;
    }
    Object.defineProperty(Rt, "__esModule", { value: !0 }),
      (Rt.default = void 0);
    var Bt = {
      id: "auto-start/interactableMethods",
      install: function (t) {
        var e = t.Interactable;
        (e.prototype.getAction = function (e, n, r, i) {
          var o = (function (t, e, n, r, i) {
            var o = t.getRect(r),
              a = {
                action: null,
                interactable: t,
                interaction: n,
                element: r,
                rect: o,
                buttons: e.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e.button],
              };
            return i.fire("auto-start:check", a), a.action;
          })(this, n, r, i, t);
          return this.options.actionChecker
            ? this.options.actionChecker(e, n, o, this, i, r)
            : o;
        }),
          (e.prototype.ignoreFrom = (0, zt.warnOnce)(function (t) {
            return this._backCompatOption("ignoreFrom", t);
          }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).")),
          (e.prototype.allowFrom = (0, zt.warnOnce)(function (t) {
            return this._backCompatOption("allowFrom", t);
          }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).")),
          (e.prototype.actionChecker = Lt),
          (e.prototype.styleCursor = Ft);
      },
    };
    Rt.default = Bt;
    var Yt = {};
    function Xt(t, e, n, r, i) {
      return e.testIgnoreAllow(e.options[t.name], n, r) &&
        e.options[t.name].enabled &&
        Ut(e, n, t, i)
        ? t
        : null;
    }
    function qt(t, e, n, r, i, o, a) {
      for (var s = 0, u = r.length; s < u; s++) {
        var l = r[s],
          c = i[s],
          f = l.getAction(e, n, t, c);
        if (f) {
          var d = Xt(f, l, c, o, a);
          if (d) return { action: d, interactable: l, element: c };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function Nt(t, e, n, r, i) {
      var a = [],
        s = [],
        u = r;
      function l(t) {
        a.push(t), s.push(u);
      }
      for (; o.default.element(u); ) {
        (a = []), (s = []), i.interactables.forEachMatch(u, l);
        var c = qt(t, e, n, a, s, r, i);
        if (c.action && !c.interactable.options[c.action.name].manualStart)
          return c;
        u = w.parentNode(u);
      }
      return { action: null, interactable: null, element: null };
    }
    function Ht(t, e, n) {
      var r = e.action,
        i = e.interactable,
        o = e.element;
      (r = r || { name: null }),
        (t.interactable = i),
        (t.element = o),
        (0, zt.copyAction)(t.prepared, r),
        (t.rect = i && r.name ? i.getRect(o) : null),
        Gt(t, n),
        n.fire("autoStart:prepared", { interaction: t });
    }
    function Ut(t, e, n, r) {
      var i = t.options,
        o = i[n.name].max,
        a = i[n.name].maxPerElement,
        s = r.autoStart.maxInteractions,
        u = 0,
        l = 0,
        c = 0;
      if (!(o && a && s)) return !1;
      for (var f = 0; f < r.interactions.list.length; f++) {
        var d = r.interactions.list[f],
          p = d.prepared.name;
        if (d.interacting()) {
          if (++u >= s) return !1;
          if (d.interactable === t) {
            if ((l += p === n.name ? 1 : 0) >= o) return !1;
            if (d.element === e && (c++, p === n.name && c >= a)) return !1;
          }
        }
      }
      return s > 0;
    }
    function Wt(t, e) {
      return o.default.number(t)
        ? ((e.autoStart.maxInteractions = t), this)
        : e.autoStart.maxInteractions;
    }
    function Vt(t, e, n) {
      var r = n.autoStart.cursorElement;
      r && r !== t && (r.style.cursor = ""),
        (t.ownerDocument.documentElement.style.cursor = e),
        (t.style.cursor = e),
        (n.autoStart.cursorElement = e ? t : null);
    }
    function Gt(t, e) {
      var n = t.interactable,
        r = t.element,
        i = t.prepared;
      if ("mouse" === t.pointerType && n && n.options.styleCursor) {
        var a = "";
        if (i.name) {
          var s = n.options[i.name].cursorChecker;
          a = o.default.func(s)
            ? s(i, n, r, t._interacting)
            : e.actions.map[i.name].getCursor(i);
        }
        Vt(t.element, a || "", e);
      } else e.autoStart.cursorElement && Vt(e.autoStart.cursorElement, "", e);
    }
    Object.defineProperty(Yt, "__esModule", { value: !0 }),
      (Yt.default = void 0);
    var $t = {
      id: "auto-start/base",
      before: ["actions"],
      install: function (t) {
        var e = t.interactStatic,
          n = t.defaults;
        t.usePlugin(Rt.default),
          (n.base.actionChecker = null),
          (n.base.styleCursor = !0),
          (0, k.default)(n.perAction, {
            manualStart: !1,
            max: 1 / 0,
            maxPerElement: 1,
            allowFrom: null,
            ignoreFrom: null,
            mouseButtons: 1,
          }),
          (e.maxInteractions = function (e) {
            return Wt(e, t);
          }),
          (t.autoStart = {
            maxInteractions: 1 / 0,
            withinInteractionLimit: Ut,
            cursorElement: null,
          });
      },
      listeners: {
        "interactions:down": function (t, e) {
          var n = t.interaction,
            r = t.pointer,
            i = t.event,
            o = t.eventTarget;
          n.interacting() || Ht(n, Nt(n, r, i, o, e), e);
        },
        "interactions:move": function (t, e) {
          !(function (t, e) {
            var n = t.interaction,
              r = t.pointer,
              i = t.event,
              o = t.eventTarget;
            "mouse" !== n.pointerType ||
              n.pointerIsDown ||
              n.interacting() ||
              Ht(n, Nt(n, r, i, o, e), e);
          })(t, e),
            (function (t, e) {
              var n = t.interaction;
              if (
                n.pointerIsDown &&
                !n.interacting() &&
                n.pointerWasMoved &&
                n.prepared.name
              ) {
                e.fire("autoStart:before-start", t);
                var r = n.interactable,
                  i = n.prepared.name;
                i &&
                  r &&
                  (r.options[i].manualStart || !Ut(r, n.element, n.prepared, e)
                    ? n.stop()
                    : (n.start(n.prepared, r, n.element), Gt(n, e)));
              }
            })(t, e);
        },
        "interactions:stop": function (t, e) {
          var n = t.interaction,
            r = n.interactable;
          r && r.options.styleCursor && Vt(n.element, "", e);
        },
      },
      maxInteractions: Wt,
      withinInteractionLimit: Ut,
      validateAction: Xt,
    };
    Yt.default = $t;
    var Zt = {};
    Object.defineProperty(Zt, "__esModule", { value: !0 }),
      (Zt.default = void 0);
    var Kt = {
      id: "auto-start/dragAxis",
      listeners: {
        "autoStart:before-start": function (t, e) {
          var n = t.interaction,
            r = t.eventTarget,
            i = t.dx,
            a = t.dy;
          if ("drag" === n.prepared.name) {
            var s = Math.abs(i),
              u = Math.abs(a),
              l = n.interactable.options.drag,
              c = l.startAxis,
              f = s > u ? "x" : s < u ? "y" : "xy";
            if (
              ((n.prepared.axis = "start" === l.lockAxis ? f[0] : l.lockAxis),
              "xy" !== f && "xy" !== c && c !== f)
            ) {
              n.prepared.name = null;
              for (
                var d = r,
                  p = function (t) {
                    if (t !== n.interactable) {
                      var i = n.interactable.options.drag;
                      if (!i.manualStart && t.testIgnoreAllow(i, d, r)) {
                        var o = t.getAction(n.downPointer, n.downEvent, n, d);
                        if (
                          o &&
                          "drag" === o.name &&
                          (function (t, e) {
                            if (!e) return !1;
                            var n = e.options.drag.startAxis;
                            return "xy" === t || "xy" === n || n === t;
                          })(f, t) &&
                          Yt.default.validateAction(o, t, d, r, e)
                        )
                          return t;
                      }
                    }
                  };
                o.default.element(d);

              ) {
                var h = e.interactables.forEachMatch(d, p);
                if (h) {
                  (n.prepared.name = "drag"),
                    (n.interactable = h),
                    (n.element = d);
                  break;
                }
                d = (0, w.parentNode)(d);
              }
            }
          }
        },
      },
    };
    Zt.default = Kt;
    var Qt = {};
    function Jt(t) {
      var e = t.prepared && t.prepared.name;
      if (!e) return null;
      var n = t.interactable.options;
      return n[e].hold || n[e].delay;
    }
    Object.defineProperty(Qt, "__esModule", { value: !0 }),
      (Qt.default = void 0);
    var te = {
      id: "auto-start/hold",
      install: function (t) {
        var e = t.defaults;
        t.usePlugin(Yt.default),
          (e.perAction.hold = 0),
          (e.perAction.delay = 0);
      },
      listeners: {
        "interactions:new": function (t) {
          t.interaction.autoStartHoldTimer = null;
        },
        "autoStart:prepared": function (t) {
          var e = t.interaction,
            n = Jt(e);
          n > 0 &&
            (e.autoStartHoldTimer = setTimeout(function () {
              e.start(e.prepared, e.interactable, e.element);
            }, n));
        },
        "interactions:move": function (t) {
          var e = t.interaction,
            n = t.duplicate;
          e.autoStartHoldTimer &&
            e.pointerWasMoved &&
            !n &&
            (clearTimeout(e.autoStartHoldTimer), (e.autoStartHoldTimer = null));
        },
        "autoStart:before-start": function (t) {
          var e = t.interaction;
          Jt(e) > 0 && (e.prepared.name = null);
        },
      },
      getHoldDuration: Jt,
    };
    Qt.default = te;
    var ee = {};
    Object.defineProperty(ee, "__esModule", { value: !0 }),
      (ee.default = void 0);
    var ne = {
      id: "auto-start",
      install: function (t) {
        t.usePlugin(Yt.default),
          t.usePlugin(Qt.default),
          t.usePlugin(Zt.default);
      },
    };
    ee.default = ne;
    var re = {};
    Object.defineProperty(re, "__esModule", { value: !0 }),
      (re.default = void 0),
      (re.default = {});
    var ie = {};
    function oe(t) {
      return /^(always|never|auto)$/.test(t)
        ? ((this.options.preventDefault = t), this)
        : o.default.bool(t)
        ? ((this.options.preventDefault = t ? "always" : "never"), this)
        : this.options.preventDefault;
    }
    function ae(t) {
      var e = t.interaction,
        n = t.event;
      e.interactable && e.interactable.checkAndPreventDefault(n);
    }
    function se(t) {
      var n = t.Interactable;
      (n.prototype.preventDefault = oe),
        (n.prototype.checkAndPreventDefault = function (n) {
          return (function (t, n, r) {
            var i = t.options.preventDefault;
            if ("never" !== i)
              if ("always" !== i) {
                if (
                  n.events.supportsPassive &&
                  /^touch(start|move)$/.test(r.type)
                ) {
                  var a = (0, e.getWindow)(r.target).document,
                    s = n.getDocOptions(a);
                  if (!s || !s.events || !1 !== s.events.passive) return;
                }
                /^(mouse|pointer|touch)*(down|start)/i.test(r.type) ||
                  (o.default.element(r.target) &&
                    (0, w.matchesSelector)(
                      r.target,
                      "input,select,textarea,[contenteditable=true],[contenteditable=true] *"
                    )) ||
                  r.preventDefault();
              } else r.preventDefault();
          })(this, t, n);
        }),
        t.interactions.docEvents.push({
          type: "dragstart",
          listener: function (e) {
            for (var n = 0; n < t.interactions.list.length; n++) {
              var r = t.interactions.list[n];
              if (
                r.element &&
                (r.element === e.target ||
                  (0, w.nodeContains)(r.element, e.target))
              )
                return void r.interactable.checkAndPreventDefault(e);
            }
          },
        });
    }
    Object.defineProperty(ie, "__esModule", { value: !0 }),
      (ie.install = se),
      (ie.default = void 0);
    var ue = {
      id: "core/interactablePreventDefault",
      install: se,
      listeners: ["down", "move", "up", "cancel"].reduce(function (t, e) {
        return (t["interactions:".concat(e)] = ae), t;
      }, {}),
    };
    ie.default = ue;
    var le,
      ce = {};
    function fe(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    Object.defineProperty(ce, "__esModule", { value: !0 }),
      (ce.default = void 0),
      (function (t) {
        (t.touchAction = "touchAction"),
          (t.boxSizing = "boxSizing"),
          (t.noListeners = "noListeners");
      })(le || (le = {}));
    var de = {
        touchAction:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
        boxSizing:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
      },
      pe = [
        {
          name: le.touchAction,
          perform: function (t) {
            return !(function (t, e, n) {
              for (var r = t; o.default.element(r); ) {
                if (he(r, "touchAction", n)) return !0;
                r = (0, w.parentNode)(r);
              }
              return !1;
            })(t.element, 0, /pan-|pinch|none/);
          },
          getInfo: function (t) {
            return [t.element, de.touchAction];
          },
          text: 'Consider adding CSS "touch-action: none" to this element\n',
        },
        {
          name: le.boxSizing,
          perform: function (t) {
            var e = t.element;
            return (
              "resize" === t.prepared.name &&
              e instanceof v.default.HTMLElement &&
              !he(e, "boxSizing", /border-box/)
            );
          },
          text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
          getInfo: function (t) {
            return [t.element, de.boxSizing];
          },
        },
        {
          name: le.noListeners,
          perform: function (t) {
            var e = t.prepared.name;
            return !(t.interactable.events.types["".concat(e, "move")] || [])
              .length;
          },
          getInfo: function (t) {
            return [t.prepared.name, t.interactable];
          },
          text: "There are no listeners set for this action",
        },
      ];
    function he(t, n, r) {
      var i = t.style[n] || e.window.getComputedStyle(t)[n];
      return r.test((i || "").toString());
    }
    var ve = {
      id: "dev-tools",
      install: function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.logger,
          r = t.Interactable,
          i = t.defaults;
        (t.logger = n || console),
          (i.base.devTools = { ignore: {} }),
          (r.prototype.devTools = function (t) {
            return t
              ? ((0, k.default)(this.options.devTools, t), this)
              : this.options.devTools;
          });
      },
      listeners: {
        "interactions:action-start": function (t, e) {
          for (var n = t.interaction, r = 0; r < pe.length; r++) {
            var i,
              o = pe[r],
              a = n.interactable && n.interactable.options;
            (a && a.devTools && a.devTools.ignore[o.name]) ||
              !o.perform(n) ||
              (i = e.logger).warn.apply(
                i,
                ["[interact.js] " + o.text].concat(
                  (function (t) {
                    if (Array.isArray(t)) return fe(t);
                  })((s = o.getInfo(n))) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(s) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return fe(t, void 0);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? fe(t, void 0)
                            : void 0
                        );
                      }
                    })(s) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )
              );
          }
          var s;
        },
      },
      checks: pe,
      CheckName: le,
      links: de,
      prefix: "[interact.js] ",
    };
    ce.default = ve;
    var ge = {};
    Object.defineProperty(ge, "__esModule", { value: !0 }),
      (ge.default = void 0),
      (ge.default = {});
    var me = {};
    Object.defineProperty(me, "__esModule", { value: !0 }),
      (me.default = function t(e) {
        var n = {};
        for (var r in e) {
          var i = e[r];
          o.default.plainObject(i)
            ? (n[r] = t(i))
            : o.default.array(i)
            ? (n[r] = $.from(i))
            : (n[r] = i);
        }
        return n;
      });
    var ye = {};
    function _e(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return be(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? be(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function be(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    Object.defineProperty(ye, "__esModule", { value: !0 }),
      (ye.getRectOffset = Te),
      (ye.default = void 0);
    var xe = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.states = []),
          (this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }),
          (this.startDelta = null),
          (this.result = null),
          (this.endResult = null),
          (this.edges = void 0),
          (this.interaction = void 0),
          (this.interaction = e),
          (this.result = we());
      }
      var e;
      return (
        (e = [
          {
            key: "start",
            value: function (t, e) {
              var n = t.phase,
                r = this.interaction,
                i = (function (t) {
                  var e = t.interactable.options[t.prepared.name],
                    n = e.modifiers;
                  return n && n.length
                    ? n
                    : [
                        "snap",
                        "snapSize",
                        "snapEdges",
                        "restrict",
                        "restrictEdges",
                        "restrictSize",
                      ]
                        .map(function (t) {
                          var n = e[t];
                          return (
                            n &&
                            n.enabled && { options: n, methods: n._methods }
                          );
                        })
                        .filter(function (t) {
                          return !!t;
                        });
                })(r);
              this.prepareStates(i),
                (this.edges = (0, k.default)({}, r.edges)),
                (this.startOffset = Te(r.rect, e)),
                (this.startDelta = { x: 0, y: 0 });
              var o = { phase: n, pageCoords: e, preEnd: !1 };
              return (
                (this.result = we()),
                this.startAll(o),
                (this.result = this.setAll(o))
              );
            },
          },
          {
            key: "fillArg",
            value: function (t) {
              var e = this.interaction;
              (t.interaction = e),
                (t.interactable = e.interactable),
                (t.element = e.element),
                (t.rect = t.rect || e.rect),
                (t.edges = this.edges),
                (t.startOffset = this.startOffset);
            },
          },
          {
            key: "startAll",
            value: function (t) {
              this.fillArg(t);
              for (var e = 0; e < this.states.length; e++) {
                var n = this.states[e];
                n.methods.start && ((t.state = n), n.methods.start(t));
              }
            },
          },
          {
            key: "setAll",
            value: function (t) {
              this.fillArg(t);
              var e = t.phase,
                n = t.preEnd,
                r = t.skipModifiers,
                i = t.rect;
              (t.coords = (0, k.default)({}, t.pageCoords)),
                (t.rect = (0, k.default)({}, i));
              for (
                var o = r ? this.states.slice(r) : this.states,
                  a = we(t.coords, t.rect),
                  s = 0;
                s < o.length;
                s++
              ) {
                var u = o[s],
                  l = u.options,
                  c = (0, k.default)({}, t.coords),
                  f = null;
                u.methods.set &&
                  this.shouldDo(l, n, e) &&
                  ((t.state = u),
                  (f = u.methods.set(t)),
                  A.addEdges(this.interaction.edges, t.rect, {
                    x: t.coords.x - c.x,
                    y: t.coords.y - c.y,
                  })),
                  a.eventProps.push(f);
              }
              (a.delta.x = t.coords.x - t.pageCoords.x),
                (a.delta.y = t.coords.y - t.pageCoords.y),
                (a.rectDelta.left = t.rect.left - i.left),
                (a.rectDelta.right = t.rect.right - i.right),
                (a.rectDelta.top = t.rect.top - i.top),
                (a.rectDelta.bottom = t.rect.bottom - i.bottom);
              var d = this.result.coords,
                p = this.result.rect;
              if (d && p) {
                var h =
                  a.rect.left !== p.left ||
                  a.rect.right !== p.right ||
                  a.rect.top !== p.top ||
                  a.rect.bottom !== p.bottom;
                a.changed = h || d.x !== a.coords.x || d.y !== a.coords.y;
              }
              return a;
            },
          },
          {
            key: "applyToInteraction",
            value: function (t) {
              var e = this.interaction,
                n = t.phase,
                r = e.coords.cur,
                i = e.coords.start,
                o = this.result,
                a = this.startDelta,
                s = o.delta;
              "start" === n && (0, k.default)(this.startDelta, o.delta);
              for (
                var u = [
                    [i, a],
                    [r, s],
                  ],
                  l = 0;
                l < u.length;
                l++
              ) {
                var c = _e(u[l], 2),
                  f = c[0],
                  d = c[1];
                (f.page.x += d.x),
                  (f.page.y += d.y),
                  (f.client.x += d.x),
                  (f.client.y += d.y);
              }
              var p = this.result.rectDelta,
                h = t.rect || e.rect;
              (h.left += p.left),
                (h.right += p.right),
                (h.top += p.top),
                (h.bottom += p.bottom),
                (h.width = h.right - h.left),
                (h.height = h.bottom - h.top);
            },
          },
          {
            key: "setAndApply",
            value: function (t) {
              var e = this.interaction,
                n = t.phase,
                r = t.preEnd,
                i = t.skipModifiers,
                o = this.setAll({
                  preEnd: r,
                  phase: n,
                  pageCoords: t.modifiedCoords || e.coords.cur.page,
                });
              if (
                ((this.result = o),
                !o.changed && (!i || i < this.states.length) && e.interacting())
              )
                return !1;
              if (t.modifiedCoords) {
                var a = e.coords.cur.page,
                  s = {
                    x: t.modifiedCoords.x - a.x,
                    y: t.modifiedCoords.y - a.y,
                  };
                (o.coords.x += s.x),
                  (o.coords.y += s.y),
                  (o.delta.x += s.x),
                  (o.delta.y += s.y);
              }
              this.applyToInteraction(t);
            },
          },
          {
            key: "beforeEnd",
            value: function (t) {
              var e = t.interaction,
                n = t.event,
                r = this.states;
              if (r && r.length) {
                for (var i = !1, o = 0; o < r.length; o++) {
                  var a = r[o];
                  t.state = a;
                  var s = a.options,
                    u = a.methods,
                    l = u.beforeEnd && u.beforeEnd(t);
                  if (l) return (this.endResult = l), !1;
                  i = i || (!i && this.shouldDo(s, !0, t.phase, !0));
                }
                i && e.move({ event: n, preEnd: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function (t) {
              var e = t.interaction;
              if (this.states && this.states.length) {
                var n = (0, k.default)(
                  {
                    states: this.states,
                    interactable: e.interactable,
                    element: e.element,
                    rect: null,
                  },
                  t
                );
                this.fillArg(n);
                for (var r = 0; r < this.states.length; r++) {
                  var i = this.states[r];
                  (n.state = i), i.methods.stop && i.methods.stop(n);
                }
                (this.states = null), (this.endResult = null);
              }
            },
          },
          {
            key: "prepareStates",
            value: function (t) {
              this.states = [];
              for (var e = 0; e < t.length; e++) {
                var n = t[e],
                  r = n.options,
                  i = n.methods,
                  o = n.name;
                this.states.push({ options: r, methods: i, index: e, name: o });
              }
              return this.states;
            },
          },
          {
            key: "restoreInteractionCoords",
            value: function (t) {
              var e = t.interaction,
                n = e.coords,
                r = e.rect,
                i = e.modification;
              if (i.result) {
                for (
                  var o = i.startDelta,
                    a = i.result,
                    s = a.delta,
                    u = a.rectDelta,
                    l = [
                      [n.start, o],
                      [n.cur, s],
                    ],
                    c = 0;
                  c < l.length;
                  c++
                ) {
                  var f = _e(l[c], 2),
                    d = f[0],
                    p = f[1];
                  (d.page.x -= p.x),
                    (d.page.y -= p.y),
                    (d.client.x -= p.x),
                    (d.client.y -= p.y);
                }
                (r.left -= u.left),
                  (r.right -= u.right),
                  (r.top -= u.top),
                  (r.bottom -= u.bottom);
              }
            },
          },
          {
            key: "shouldDo",
            value: function (t, e, n, r) {
              return !(
                !t ||
                !1 === t.enabled ||
                (r && !t.endOnly) ||
                (t.endOnly && !e) ||
                ("start" === n && !t.setStart)
              );
            },
          },
          {
            key: "copyFrom",
            value: function (t) {
              (this.startOffset = t.startOffset),
                (this.startDelta = t.startDelta),
                (this.edges = t.edges),
                (this.states = t.states.map(function (t) {
                  return (0, me.default)(t);
                })),
                (this.result = we(
                  (0, k.default)({}, t.result.coords),
                  (0, k.default)({}, t.result.rect)
                ));
            },
          },
          {
            key: "destroy",
            value: function () {
              for (var t in this) this[t] = null;
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    function we(t, e) {
      return {
        rect: e,
        coords: t,
        delta: { x: 0, y: 0 },
        rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
        eventProps: [],
        changed: !0,
      };
    }
    function Te(t, e) {
      return t
        ? {
            left: e.x - t.left,
            top: e.y - t.top,
            right: t.right - e.x,
            bottom: t.bottom - e.y,
          }
        : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    ye.default = xe;
    var Se = {};
    function Oe(t) {
      var e = t.iEvent,
        n = t.interaction.modification.result;
      n && (e.modifiers = n.eventProps);
    }
    Object.defineProperty(Se, "__esModule", { value: !0 }),
      (Se.makeModifier = function (t, e) {
        var n = t.defaults,
          r = {
            start: t.start,
            set: t.set,
            beforeEnd: t.beforeEnd,
            stop: t.stop,
          },
          i = function (t) {
            var i = t || {};
            for (var o in ((i.enabled = !1 !== i.enabled), n))
              o in i || (i[o] = n[o]);
            var a = {
              options: i,
              methods: r,
              name: e,
              enable: function () {
                return (i.enabled = !0), a;
              },
              disable: function () {
                return (i.enabled = !1), a;
              },
            };
            return a;
          };
        return (
          e && "string" == typeof e && ((i._defaults = n), (i._methods = r)), i
        );
      }),
      (Se.addEventModifiers = Oe),
      (Se.default = void 0);
    var Pe = {
      id: "modifiers/base",
      before: ["actions"],
      install: function (t) {
        t.defaults.perAction.modifiers = [];
      },
      listeners: {
        "interactions:new": function (t) {
          var e = t.interaction;
          e.modification = new ye.default(e);
        },
        "interactions:before-action-start": function (t) {
          var e = t.interaction.modification;
          e.start(t, t.interaction.coords.start.page),
            (t.interaction.edges = e.edges),
            e.applyToInteraction(t);
        },
        "interactions:before-action-move": function (t) {
          return t.interaction.modification.setAndApply(t);
        },
        "interactions:before-action-end": function (t) {
          return t.interaction.modification.beforeEnd(t);
        },
        "interactions:action-start": Oe,
        "interactions:action-move": Oe,
        "interactions:action-end": Oe,
        "interactions:after-action-start": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
        "interactions:after-action-move": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
        "interactions:stop": function (t) {
          return t.interaction.modification.stop(t);
        },
      },
    };
    Se.default = Pe;
    var Ee = {};
    Object.defineProperty(Ee, "__esModule", { value: !0 }),
      (Ee.defaults = void 0),
      (Ee.defaults = {
        base: { preventDefault: "auto", deltaSource: "page" },
        perAction: { enabled: !1, origin: { x: 0, y: 0 } },
        actions: {},
      });
    var Me = {};
    function ke(t) {
      return (ke =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Ae(t, e) {
      return (Ae =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function je(t, e) {
      return !e || ("object" !== ke(e) && "function" != typeof e) ? De(t) : e;
    }
    function De(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function Ie(t) {
      return (Ie = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    Object.defineProperty(Me, "__esModule", { value: !0 }),
      (Me.InteractEvent = void 0);
    var Ce = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ae(t, e);
      })(o, t);
      var e,
        n,
        r,
        i =
          ((n = o),
          (r = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()),
          function () {
            var t,
              e = Ie(n);
            if (r) {
              var i = Ie(this).constructor;
              t = Reflect.construct(e, arguments, i);
            } else t = e.apply(this, arguments);
            return je(this, t);
          });
      function o(t, e, n, r, a, s, u) {
        var l;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
          ((l = i.call(this, t)).target = void 0),
          (l.currentTarget = void 0),
          (l.relatedTarget = null),
          (l.screenX = void 0),
          (l.screenY = void 0),
          (l.button = void 0),
          (l.buttons = void 0),
          (l.ctrlKey = void 0),
          (l.shiftKey = void 0),
          (l.altKey = void 0),
          (l.metaKey = void 0),
          (l.page = void 0),
          (l.client = void 0),
          (l.delta = void 0),
          (l.rect = void 0),
          (l.x0 = void 0),
          (l.y0 = void 0),
          (l.t0 = void 0),
          (l.dt = void 0),
          (l.duration = void 0),
          (l.clientX0 = void 0),
          (l.clientY0 = void 0),
          (l.velocity = void 0),
          (l.speed = void 0),
          (l.swipe = void 0),
          (l.timeStamp = void 0),
          (l.dragEnter = void 0),
          (l.dragLeave = void 0),
          (l.axes = void 0),
          (l.preEnd = void 0),
          (a = a || t.element);
        var c = t.interactable,
          f = ((c && c.options) || Ee.defaults).deltaSource,
          d = (0, I.default)(c, a, n),
          p = "start" === r,
          h = "end" === r,
          v = p ? De(l) : t.prevEvent,
          g = p
            ? t.coords.start
            : h
            ? {
                page: v.page,
                client: v.client,
                timeStamp: t.coords.cur.timeStamp,
              }
            : t.coords.cur;
        return (
          (l.page = (0, k.default)({}, g.page)),
          (l.client = (0, k.default)({}, g.client)),
          (l.rect = (0, k.default)({}, t.rect)),
          (l.timeStamp = g.timeStamp),
          h ||
            ((l.page.x -= d.x),
            (l.page.y -= d.y),
            (l.client.x -= d.x),
            (l.client.y -= d.y)),
          (l.ctrlKey = e.ctrlKey),
          (l.altKey = e.altKey),
          (l.shiftKey = e.shiftKey),
          (l.metaKey = e.metaKey),
          (l.button = e.button),
          (l.buttons = e.buttons),
          (l.target = a),
          (l.currentTarget = a),
          (l.preEnd = s),
          (l.type = u || n + (r || "")),
          (l.interactable = c),
          (l.t0 = p ? t.pointers[t.pointers.length - 1].downTime : v.t0),
          (l.x0 = t.coords.start.page.x - d.x),
          (l.y0 = t.coords.start.page.y - d.y),
          (l.clientX0 = t.coords.start.client.x - d.x),
          (l.clientY0 = t.coords.start.client.y - d.y),
          (l.delta =
            p || h
              ? { x: 0, y: 0 }
              : { x: l[f].x - v[f].x, y: l[f].y - v[f].y }),
          (l.dt = t.coords.delta.timeStamp),
          (l.duration = l.timeStamp - l.t0),
          (l.velocity = (0, k.default)({}, t.coords.velocity[f])),
          (l.speed = (0, R.default)(l.velocity.x, l.velocity.y)),
          (l.swipe = h || "inertiastart" === r ? l.getSwipe() : null),
          l
        );
      }
      return (
        (e = [
          {
            key: "getSwipe",
            value: function () {
              var t = this._interaction;
              if (
                t.prevEvent.speed < 600 ||
                this.timeStamp - t.prevEvent.timeStamp > 150
              )
                return null;
              var e =
                (180 *
                  Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX)) /
                Math.PI;
              e < 0 && (e += 360);
              var n = 112.5 <= e && e < 247.5,
                r = 202.5 <= e && e < 337.5;
              return {
                up: r,
                down: !r && 22.5 <= e && e < 157.5,
                left: n,
                right: !n && (292.5 <= e || e < 67.5),
                angle: e,
                speed: t.prevEvent.speed,
                velocity: {
                  x: t.prevEvent.velocityX,
                  y: t.prevEvent.velocityY,
                },
              };
            },
          },
          { key: "preventDefault", value: function () {} },
          {
            key: "stopImmediatePropagation",
            value: function () {
              this.immediatePropagationStopped = this.propagationStopped = !0;
            },
          },
          {
            key: "stopPropagation",
            value: function () {
              this.propagationStopped = !0;
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(o.prototype, e),
        o
      );
    })(V.BaseEvent);
    (Me.InteractEvent = Ce),
      Object.defineProperties(Ce.prototype, {
        pageX: {
          get: function () {
            return this.page.x;
          },
          set: function (t) {
            this.page.x = t;
          },
        },
        pageY: {
          get: function () {
            return this.page.y;
          },
          set: function (t) {
            this.page.y = t;
          },
        },
        clientX: {
          get: function () {
            return this.client.x;
          },
          set: function (t) {
            this.client.x = t;
          },
        },
        clientY: {
          get: function () {
            return this.client.y;
          },
          set: function (t) {
            this.client.y = t;
          },
        },
        dx: {
          get: function () {
            return this.delta.x;
          },
          set: function (t) {
            this.delta.x = t;
          },
        },
        dy: {
          get: function () {
            return this.delta.y;
          },
          set: function (t) {
            this.delta.y = t;
          },
        },
        velocityX: {
          get: function () {
            return this.velocity.x;
          },
          set: function (t) {
            this.velocity.x = t;
          },
        },
        velocityY: {
          get: function () {
            return this.velocity.y;
          },
          set: function (t) {
            this.velocity.y = t;
          },
        },
      });
    var ze = {};
    Object.defineProperty(ze, "__esModule", { value: !0 }),
      (ze.PointerInfo = void 0),
      (ze.PointerInfo = function t(e, n, r, i, o) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.id = void 0),
          (this.pointer = void 0),
          (this.event = void 0),
          (this.downTime = void 0),
          (this.downTarget = void 0),
          (this.id = e),
          (this.pointer = n),
          (this.event = r),
          (this.downTime = i),
          (this.downTarget = o);
      });
    var Re,
      Fe,
      Le = {};
    function Be(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ye(t, e, n) {
      return e && Be(t.prototype, e), n && Be(t, n), t;
    }
    Object.defineProperty(Le, "__esModule", { value: !0 }),
      Object.defineProperty(Le, "PointerInfo", {
        enumerable: !0,
        get: function () {
          return ze.PointerInfo;
        },
      }),
      (Le.default =
        Le.Interaction =
        Le._ProxyMethods =
        Le._ProxyValues =
          void 0),
      (Le._ProxyValues = Re),
      (function (t) {
        (t.interactable = ""),
          (t.element = ""),
          (t.prepared = ""),
          (t.pointerIsDown = ""),
          (t.pointerWasMoved = ""),
          (t._proxy = "");
      })(Re || (Le._ProxyValues = Re = {})),
      (Le._ProxyMethods = Fe),
      (function (t) {
        (t.start = ""),
          (t.move = ""),
          (t.end = ""),
          (t.stop = ""),
          (t.interacting = "");
      })(Fe || (Le._ProxyMethods = Fe = {}));
    var Xe = 0,
      qe = (function () {
        function t(e) {
          var n = this,
            r = e.pointerType,
            i = e.scopeFire;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.interactable = null),
            (this.element = null),
            (this.rect = void 0),
            (this._rects = void 0),
            (this.edges = void 0),
            (this._scopeFire = void 0),
            (this.prepared = { name: null, axis: null, edges: null }),
            (this.pointerType = void 0),
            (this.pointers = []),
            (this.downEvent = null),
            (this.downPointer = {}),
            (this._latestPointer = {
              pointer: null,
              event: null,
              eventTarget: null,
            }),
            (this.prevEvent = null),
            (this.pointerIsDown = !1),
            (this.pointerWasMoved = !1),
            (this._interacting = !1),
            (this._ending = !1),
            (this._stopped = !0),
            (this._proxy = null),
            (this.simulation = null),
            (this.doMove = (0, zt.warnOnce)(function (t) {
              this.move(t);
            }, "The interaction.doMove() method has been renamed to interaction.move()")),
            (this.coords = {
              start: Y.newCoords(),
              prev: Y.newCoords(),
              cur: Y.newCoords(),
              delta: Y.newCoords(),
              velocity: Y.newCoords(),
            }),
            (this._id = Xe++),
            (this._scopeFire = i),
            (this.pointerType = r);
          var o = this;
          this._proxy = {};
          var a = function (t) {
            Object.defineProperty(n._proxy, t, {
              get: function () {
                return o[t];
              },
            });
          };
          for (var s in Re) a(s);
          var u = function (t) {
            Object.defineProperty(n._proxy, t, {
              value: function () {
                return o[t].apply(o, arguments);
              },
            });
          };
          for (var l in Fe) u(l);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return (
          Ye(t, [
            {
              key: "pointerMoveTolerance",
              get: function () {
                return 1;
              },
            },
          ]),
          Ye(t, [
            {
              key: "pointerDown",
              value: function (t, e, n) {
                var r = this.updatePointer(t, e, n, !0),
                  i = this.pointers[r];
                this._scopeFire("interactions:down", {
                  pointer: t,
                  event: e,
                  eventTarget: n,
                  pointerIndex: r,
                  pointerInfo: i,
                  type: "down",
                  interaction: this,
                });
              },
            },
            {
              key: "start",
              value: function (t, e, n) {
                return (
                  !(
                    this.interacting() ||
                    !this.pointerIsDown ||
                    this.pointers.length < ("gesture" === t.name ? 2 : 1) ||
                    !e.options[t.name].enabled
                  ) &&
                  ((0, zt.copyAction)(this.prepared, t),
                  (this.interactable = e),
                  (this.element = n),
                  (this.rect = e.getRect(n)),
                  (this.edges = this.prepared.edges
                    ? (0, k.default)({}, this.prepared.edges)
                    : { left: !0, right: !0, top: !0, bottom: !0 }),
                  (this._stopped = !1),
                  (this._interacting =
                    this._doPhase({
                      interaction: this,
                      event: this.downEvent,
                      phase: "start",
                    }) && !this._stopped),
                  this._interacting)
                );
              },
            },
            {
              key: "pointerMove",
              value: function (t, e, n) {
                this.simulation ||
                  (this.modification && this.modification.endResult) ||
                  this.updatePointer(t, e, n, !1);
                var r,
                  i,
                  o =
                    this.coords.cur.page.x === this.coords.prev.page.x &&
                    this.coords.cur.page.y === this.coords.prev.page.y &&
                    this.coords.cur.client.x === this.coords.prev.client.x &&
                    this.coords.cur.client.y === this.coords.prev.client.y;
                this.pointerIsDown &&
                  !this.pointerWasMoved &&
                  ((r = this.coords.cur.client.x - this.coords.start.client.x),
                  (i = this.coords.cur.client.y - this.coords.start.client.y),
                  (this.pointerWasMoved =
                    (0, R.default)(r, i) > this.pointerMoveTolerance));
                var a = this.getPointerIndex(t),
                  s = {
                    pointer: t,
                    pointerIndex: a,
                    pointerInfo: this.pointers[a],
                    event: e,
                    type: "move",
                    eventTarget: n,
                    dx: r,
                    dy: i,
                    duplicate: o,
                    interaction: this,
                  };
                o ||
                  Y.setCoordVelocity(this.coords.velocity, this.coords.delta),
                  this._scopeFire("interactions:move", s),
                  o ||
                    this.simulation ||
                    (this.interacting() && ((s.type = null), this.move(s)),
                    this.pointerWasMoved &&
                      Y.copyCoords(this.coords.prev, this.coords.cur));
              },
            },
            {
              key: "move",
              value: function (t) {
                (t && t.event) || Y.setZeroCoords(this.coords.delta),
                  ((t = (0, k.default)(
                    {
                      pointer: this._latestPointer.pointer,
                      event: this._latestPointer.event,
                      eventTarget: this._latestPointer.eventTarget,
                      interaction: this,
                    },
                    t || {}
                  )).phase = "move"),
                  this._doPhase(t);
              },
            },
            {
              key: "pointerUp",
              value: function (t, e, n, r) {
                var i = this.getPointerIndex(t);
                -1 === i && (i = this.updatePointer(t, e, n, !1));
                var o = /cancel$/i.test(e.type) ? "cancel" : "up";
                this._scopeFire("interactions:".concat(o), {
                  pointer: t,
                  pointerIndex: i,
                  pointerInfo: this.pointers[i],
                  event: e,
                  eventTarget: n,
                  type: o,
                  curEventTarget: r,
                  interaction: this,
                }),
                  this.simulation || this.end(e),
                  this.removePointer(t, e);
              },
            },
            {
              key: "documentBlur",
              value: function (t) {
                this.end(t),
                  this._scopeFire("interactions:blur", {
                    event: t,
                    type: "blur",
                    interaction: this,
                  });
              },
            },
            {
              key: "end",
              value: function (t) {
                var e;
                (this._ending = !0),
                  (t = t || this._latestPointer.event),
                  this.interacting() &&
                    (e = this._doPhase({
                      event: t,
                      interaction: this,
                      phase: "end",
                    })),
                  (this._ending = !1),
                  !0 === e && this.stop();
              },
            },
            {
              key: "currentAction",
              value: function () {
                return this._interacting ? this.prepared.name : null;
              },
            },
            {
              key: "interacting",
              value: function () {
                return this._interacting;
              },
            },
            {
              key: "stop",
              value: function () {
                this._scopeFire("interactions:stop", { interaction: this }),
                  (this.interactable = this.element = null),
                  (this._interacting = !1),
                  (this._stopped = !0),
                  (this.prepared.name = this.prevEvent = null);
              },
            },
            {
              key: "getPointerIndex",
              value: function (t) {
                var e = Y.getPointerId(t);
                return "mouse" === this.pointerType ||
                  "pen" === this.pointerType
                  ? this.pointers.length - 1
                  : $.findIndex(this.pointers, function (t) {
                      return t.id === e;
                    });
              },
            },
            {
              key: "getPointerInfo",
              value: function (t) {
                return this.pointers[this.getPointerIndex(t)];
              },
            },
            {
              key: "updatePointer",
              value: function (t, e, n, r) {
                var i = Y.getPointerId(t),
                  o = this.getPointerIndex(t),
                  a = this.pointers[o];
                return (
                  (r = !1 !== r && (r || /(down|start)$/i.test(e.type))),
                  a
                    ? (a.pointer = t)
                    : ((a = new ze.PointerInfo(i, t, e, null, null)),
                      (o = this.pointers.length),
                      this.pointers.push(a)),
                  Y.setCoords(
                    this.coords.cur,
                    this.pointers.map(function (t) {
                      return t.pointer;
                    }),
                    this._now()
                  ),
                  Y.setCoordDeltas(
                    this.coords.delta,
                    this.coords.prev,
                    this.coords.cur
                  ),
                  r &&
                    ((this.pointerIsDown = !0),
                    (a.downTime = this.coords.cur.timeStamp),
                    (a.downTarget = n),
                    Y.pointerExtend(this.downPointer, t),
                    this.interacting() ||
                      (Y.copyCoords(this.coords.start, this.coords.cur),
                      Y.copyCoords(this.coords.prev, this.coords.cur),
                      (this.downEvent = e),
                      (this.pointerWasMoved = !1))),
                  this._updateLatestPointer(t, e, n),
                  this._scopeFire("interactions:update-pointer", {
                    pointer: t,
                    event: e,
                    eventTarget: n,
                    down: r,
                    pointerInfo: a,
                    pointerIndex: o,
                    interaction: this,
                  }),
                  o
                );
              },
            },
            {
              key: "removePointer",
              value: function (t, e) {
                var n = this.getPointerIndex(t);
                if (-1 !== n) {
                  var r = this.pointers[n];
                  this._scopeFire("interactions:remove-pointer", {
                    pointer: t,
                    event: e,
                    eventTarget: null,
                    pointerIndex: n,
                    pointerInfo: r,
                    interaction: this,
                  }),
                    this.pointers.splice(n, 1),
                    (this.pointerIsDown = !1);
                }
              },
            },
            {
              key: "_updateLatestPointer",
              value: function (t, e, n) {
                (this._latestPointer.pointer = t),
                  (this._latestPointer.event = e),
                  (this._latestPointer.eventTarget = n);
              },
            },
            {
              key: "destroy",
              value: function () {
                (this._latestPointer.pointer = null),
                  (this._latestPointer.event = null),
                  (this._latestPointer.eventTarget = null);
              },
            },
            {
              key: "_createPreparedEvent",
              value: function (t, e, n, r) {
                return new Me.InteractEvent(
                  this,
                  t,
                  this.prepared.name,
                  e,
                  this.element,
                  n,
                  r
                );
              },
            },
            {
              key: "_fireEvent",
              value: function (t) {
                this.interactable.fire(t),
                  (!this.prevEvent ||
                    t.timeStamp >= this.prevEvent.timeStamp) &&
                    (this.prevEvent = t);
              },
            },
            {
              key: "_doPhase",
              value: function (t) {
                var e = t.event,
                  n = t.phase,
                  r = t.preEnd,
                  i = t.type,
                  o = this.rect;
                if (
                  (o &&
                    "move" === n &&
                    (A.addEdges(
                      this.edges,
                      o,
                      this.coords.delta[this.interactable.options.deltaSource]
                    ),
                    (o.width = o.right - o.left),
                    (o.height = o.bottom - o.top)),
                  !1 ===
                    this._scopeFire("interactions:before-action-".concat(n), t))
                )
                  return !1;
                var a = (t.iEvent = this._createPreparedEvent(e, n, r, i));
                return (
                  this._scopeFire("interactions:action-".concat(n), t),
                  "start" === n && (this.prevEvent = a),
                  this._fireEvent(a),
                  this._scopeFire("interactions:after-action-".concat(n), t),
                  !0
                );
              },
            },
            {
              key: "_now",
              value: function () {
                return Date.now();
              },
            },
          ]),
          t
        );
      })();
    Le.Interaction = qe;
    var Ne = qe;
    Le.default = Ne;
    var He = {};
    function Ue(t) {
      t.pointerIsDown &&
        ($e(t.coords.cur, t.offset.total),
        (t.offset.pending.x = 0),
        (t.offset.pending.y = 0));
    }
    function We(t) {
      Ve(t.interaction);
    }
    function Ve(t) {
      if (
        !(function (t) {
          return !(!t.offset.pending.x && !t.offset.pending.y);
        })(t)
      )
        return !1;
      var e = t.offset.pending;
      return (
        $e(t.coords.cur, e),
        $e(t.coords.delta, e),
        A.addEdges(t.edges, t.rect, e),
        (e.x = 0),
        (e.y = 0),
        !0
      );
    }
    function Ge(t) {
      var e = t.x,
        n = t.y;
      (this.offset.pending.x += e),
        (this.offset.pending.y += n),
        (this.offset.total.x += e),
        (this.offset.total.y += n);
    }
    function $e(t, e) {
      var n = t.page,
        r = t.client,
        i = e.x,
        o = e.y;
      (n.x += i), (n.y += o), (r.x += i), (r.y += o);
    }
    Object.defineProperty(He, "__esModule", { value: !0 }),
      (He.addTotal = Ue),
      (He.applyPending = Ve),
      (He.default = void 0),
      (Le._ProxyMethods.offsetBy = "");
    var Ze = {
      id: "offset",
      before: ["modifiers", "pointer-events", "actions", "inertia"],
      install: function (t) {
        t.Interaction.prototype.offsetBy = Ge;
      },
      listeners: {
        "interactions:new": function (t) {
          t.interaction.offset = {
            total: { x: 0, y: 0 },
            pending: { x: 0, y: 0 },
          };
        },
        "interactions:update-pointer": function (t) {
          return Ue(t.interaction);
        },
        "interactions:before-action-start": We,
        "interactions:before-action-move": We,
        "interactions:before-action-end": function (t) {
          var e = t.interaction;
          if (Ve(e)) return e.move({ offset: !0 }), e.end(), !1;
        },
        "interactions:stop": function (t) {
          var e = t.interaction;
          (e.offset.total.x = 0),
            (e.offset.total.y = 0),
            (e.offset.pending.x = 0),
            (e.offset.pending.y = 0);
        },
      },
    };
    He.default = Ze;
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: !0 }),
      (Ke.default = Ke.InertiaState = void 0);
    var Qe = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.active = !1),
          (this.isModified = !1),
          (this.smoothEnd = !1),
          (this.allowResume = !1),
          (this.modification = null),
          (this.modifierCount = 0),
          (this.modifierArg = null),
          (this.startCoords = null),
          (this.t0 = 0),
          (this.v0 = 0),
          (this.te = 0),
          (this.targetOffset = null),
          (this.modifiedOffset = null),
          (this.currentOffset = null),
          (this.lambda_v0 = 0),
          (this.one_ve_v0 = 0),
          (this.timeout = null),
          (this.interaction = void 0),
          (this.interaction = e);
      }
      var e;
      return (
        (e = [
          {
            key: "start",
            value: function (t) {
              var e = this.interaction,
                n = Je(e);
              if (!n || !n.enabled) return !1;
              var r = e.coords.velocity.client,
                i = (0, R.default)(r.x, r.y),
                o =
                  this.modification || (this.modification = new ye.default(e));
              if (
                (o.copyFrom(e.modification),
                (this.t0 = e._now()),
                (this.allowResume = n.allowResume),
                (this.v0 = i),
                (this.currentOffset = { x: 0, y: 0 }),
                (this.startCoords = e.coords.cur.page),
                (this.modifierArg = {
                  interaction: e,
                  interactable: e.interactable,
                  element: e.element,
                  rect: e.rect,
                  edges: e.edges,
                  pageCoords: this.startCoords,
                  preEnd: !0,
                  phase: "inertiastart",
                }),
                this.t0 - e.coords.cur.timeStamp < 50 &&
                  i > n.minSpeed &&
                  i > n.endSpeed)
              )
                this.startInertia();
              else {
                if (
                  ((o.result = o.setAll(this.modifierArg)), !o.result.changed)
                )
                  return !1;
                this.startSmoothEnd();
              }
              return (
                (e.modification.result.rect = null),
                e.offsetBy(this.targetOffset),
                e._doPhase({ interaction: e, event: t, phase: "inertiastart" }),
                e.offsetBy({
                  x: -this.targetOffset.x,
                  y: -this.targetOffset.y,
                }),
                (e.modification.result.rect = null),
                (this.active = !0),
                (e.simulation = this),
                !0
              );
            },
          },
          {
            key: "startInertia",
            value: function () {
              var t = this,
                e = this.interaction.coords.velocity.client,
                n = Je(this.interaction),
                r = n.resistance,
                i = -Math.log(n.endSpeed / this.v0) / r;
              (this.targetOffset = { x: (e.x - i) / r, y: (e.y - i) / r }),
                (this.te = i),
                (this.lambda_v0 = r / this.v0),
                (this.one_ve_v0 = 1 - n.endSpeed / this.v0);
              var o = this.modification,
                a = this.modifierArg;
              (a.pageCoords = {
                x: this.startCoords.x + this.targetOffset.x,
                y: this.startCoords.y + this.targetOffset.y,
              }),
                (o.result = o.setAll(a)),
                o.result.changed &&
                  ((this.isModified = !0),
                  (this.modifiedOffset = {
                    x: this.targetOffset.x + o.result.delta.x,
                    y: this.targetOffset.y + o.result.delta.y,
                  })),
                this.onNextFrame(function () {
                  return t.inertiaTick();
                });
            },
          },
          {
            key: "startSmoothEnd",
            value: function () {
              var t = this;
              (this.smoothEnd = !0),
                (this.isModified = !0),
                (this.targetOffset = {
                  x: this.modification.result.delta.x,
                  y: this.modification.result.delta.y,
                }),
                this.onNextFrame(function () {
                  return t.smoothEndTick();
                });
            },
          },
          {
            key: "onNextFrame",
            value: function (t) {
              var e = this;
              this.timeout = Ot.default.request(function () {
                e.active && t();
              });
            },
          },
          {
            key: "inertiaTick",
            value: function () {
              var t,
                e,
                n,
                r,
                i,
                o = this,
                a = this.interaction,
                s = Je(a).resistance,
                u = (a._now() - this.t0) / 1e3;
              if (u < this.te) {
                var l,
                  c = 1 - (Math.exp(-s * u) - this.lambda_v0) / this.one_ve_v0;
                this.isModified
                  ? ((t = this.targetOffset.x),
                    (e = this.targetOffset.y),
                    (n = this.modifiedOffset.x),
                    (r = this.modifiedOffset.y),
                    (l = { x: tn((i = c), 0, t, n), y: tn(i, 0, e, r) }))
                  : (l = {
                      x: this.targetOffset.x * c,
                      y: this.targetOffset.y * c,
                    });
                var f = {
                  x: l.x - this.currentOffset.x,
                  y: l.y - this.currentOffset.y,
                };
                (this.currentOffset.x += f.x),
                  (this.currentOffset.y += f.y),
                  a.offsetBy(f),
                  a.move(),
                  this.onNextFrame(function () {
                    return o.inertiaTick();
                  });
              } else
                a.offsetBy({
                  x: this.modifiedOffset.x - this.currentOffset.x,
                  y: this.modifiedOffset.y - this.currentOffset.y,
                }),
                  this.end();
            },
          },
          {
            key: "smoothEndTick",
            value: function () {
              var t = this,
                e = this.interaction,
                n = e._now() - this.t0,
                r = Je(e).smoothEndDuration;
              if (n < r) {
                var i = {
                    x: en(n, 0, this.targetOffset.x, r),
                    y: en(n, 0, this.targetOffset.y, r),
                  },
                  o = {
                    x: i.x - this.currentOffset.x,
                    y: i.y - this.currentOffset.y,
                  };
                (this.currentOffset.x += o.x),
                  (this.currentOffset.y += o.y),
                  e.offsetBy(o),
                  e.move({ skipModifiers: this.modifierCount }),
                  this.onNextFrame(function () {
                    return t.smoothEndTick();
                  });
              } else
                e.offsetBy({
                  x: this.targetOffset.x - this.currentOffset.x,
                  y: this.targetOffset.y - this.currentOffset.y,
                }),
                  this.end();
            },
          },
          {
            key: "resume",
            value: function (t) {
              var e = t.pointer,
                n = t.event,
                r = t.eventTarget,
                i = this.interaction;
              i.offsetBy({
                x: -this.currentOffset.x,
                y: -this.currentOffset.y,
              }),
                i.updatePointer(e, n, r, !0),
                i._doPhase({ interaction: i, event: n, phase: "resume" }),
                (0, Y.copyCoords)(i.coords.prev, i.coords.cur),
                this.stop();
            },
          },
          {
            key: "end",
            value: function () {
              this.interaction.move(), this.interaction.end(), this.stop();
            },
          },
          {
            key: "stop",
            value: function () {
              (this.active = this.smoothEnd = !1),
                (this.interaction.simulation = null),
                Ot.default.cancel(this.timeout);
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    function Je(t) {
      var e = t.interactable,
        n = t.prepared;
      return e && e.options && n.name && e.options[n.name].inertia;
    }
    function tn(t, e, n, r) {
      var i = 1 - t;
      return i * i * e + 2 * i * t * n + t * t * r;
    }
    function en(t, e, n, r) {
      return -n * (t /= r) * (t - 2) + e;
    }
    Ke.InertiaState = Qe;
    var nn = {
      id: "inertia",
      before: ["modifiers", "actions"],
      install: function (t) {
        var e = t.defaults;
        t.usePlugin(He.default),
          t.usePlugin(Se.default),
          (t.actions.phases.inertiastart = !0),
          (t.actions.phases.resume = !0),
          (e.perAction.inertia = {
            enabled: !1,
            resistance: 10,
            minSpeed: 100,
            endSpeed: 10,
            allowResume: !0,
            smoothEndDuration: 300,
          });
      },
      listeners: {
        "interactions:new": function (t) {
          var e = t.interaction;
          e.inertia = new Qe(e);
        },
        "interactions:before-action-end": function (t) {
          var e = t.interaction,
            n = t.event;
          return (
            (!e._interacting || e.simulation || !e.inertia.start(n)) && null
          );
        },
        "interactions:down": function (t) {
          var e = t.interaction,
            n = t.eventTarget,
            r = e.inertia;
          if (r.active)
            for (var i = n; o.default.element(i); ) {
              if (i === e.element) {
                r.resume(t);
                break;
              }
              i = w.parentNode(i);
            }
        },
        "interactions:stop": function (t) {
          var e = t.interaction.inertia;
          e.active && e.stop();
        },
        "interactions:before-action-resume": function (t) {
          var e = t.interaction.modification;
          e.stop(t),
            e.start(t, t.interaction.coords.cur.page),
            e.applyToInteraction(t);
        },
        "interactions:before-action-inertiastart": function (t) {
          return t.interaction.modification.setAndApply(t);
        },
        "interactions:action-resume": Se.addEventModifiers,
        "interactions:action-inertiastart": Se.addEventModifiers,
        "interactions:after-action-inertiastart": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
        "interactions:after-action-resume": function (t) {
          return t.interaction.modification.restoreInteractionCoords(t);
        },
      },
    };
    Ke.default = nn;
    var rn = {};
    function on(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (t.immediatePropagationStopped) break;
        r(t);
      }
    }
    Object.defineProperty(rn, "__esModule", { value: !0 }),
      (rn.Eventable = void 0);
    var an = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.options = void 0),
          (this.types = {}),
          (this.propagationStopped = !1),
          (this.immediatePropagationStopped = !1),
          (this.global = void 0),
          (this.options = (0, k.default)({}, e || {}));
      }
      var e;
      return (
        (e = [
          {
            key: "fire",
            value: function (t) {
              var e,
                n = this.global;
              (e = this.types[t.type]) && on(t, e),
                !t.propagationStopped && n && (e = n[t.type]) && on(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              var n = (0, C.default)(t, e);
              for (t in n) this.types[t] = $.merge(this.types[t] || [], n[t]);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              var n = (0, C.default)(t, e);
              for (t in n) {
                var r = this.types[t];
                if (r && r.length)
                  for (var i = 0; i < n[t].length; i++) {
                    var o = n[t][i],
                      a = r.indexOf(o);
                    -1 !== a && r.splice(a, 1);
                  }
              }
            },
          },
          {
            key: "getRect",
            value: function (t) {
              return null;
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    rn.Eventable = an;
    var sn = {};
    Object.defineProperty(sn, "__esModule", { value: !0 }),
      (sn.default = function (t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map)
          if (0 === t.indexOf(n) && t.substr(n.length) in e.phases) return !0;
        return !1;
      });
    var un = {};
    function ln(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function cn(t, e, n) {
      return e && ln(t.prototype, e), n && ln(t, n), t;
    }
    Object.defineProperty(un, "__esModule", { value: !0 }),
      (un.Interactable = void 0);
    var fn = (function () {
      function t(n, r, i, o) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.options = void 0),
          (this._actions = void 0),
          (this.target = void 0),
          (this.events = new rn.Eventable()),
          (this._context = void 0),
          (this._win = void 0),
          (this._doc = void 0),
          (this._scopeEvents = void 0),
          (this._rectChecker = void 0),
          (this._actions = r.actions),
          (this.target = n),
          (this._context = r.context || i),
          (this._win = (0, e.getWindow)(
            (0, w.trySelector)(n) ? this._context : n
          )),
          (this._doc = this._win.document),
          (this._scopeEvents = o),
          this.set(r);
      }
      return (
        cn(t, [
          {
            key: "_defaults",
            get: function () {
              return { base: {}, perAction: {}, actions: {} };
            },
          },
        ]),
        cn(t, [
          {
            key: "setOnEvents",
            value: function (t, e) {
              return (
                o.default.func(e.onstart) &&
                  this.on("".concat(t, "start"), e.onstart),
                o.default.func(e.onmove) &&
                  this.on("".concat(t, "move"), e.onmove),
                o.default.func(e.onend) &&
                  this.on("".concat(t, "end"), e.onend),
                o.default.func(e.oninertiastart) &&
                  this.on("".concat(t, "inertiastart"), e.oninertiastart),
                this
              );
            },
          },
          {
            key: "updatePerActionListeners",
            value: function (t, e, n) {
              (o.default.array(e) || o.default.object(e)) && this.off(t, e),
                (o.default.array(n) || o.default.object(n)) && this.on(t, n);
            },
          },
          {
            key: "setPerAction",
            value: function (t, e) {
              var n = this._defaults;
              for (var r in e) {
                var i = r,
                  a = this.options[t],
                  s = e[i];
                "listeners" === i &&
                  this.updatePerActionListeners(t, a.listeners, s),
                  o.default.array(s)
                    ? (a[i] = $.from(s))
                    : o.default.plainObject(s)
                    ? ((a[i] = (0, k.default)(a[i] || {}, (0, me.default)(s))),
                      o.default.object(n.perAction[i]) &&
                        "enabled" in n.perAction[i] &&
                        (a[i].enabled = !1 !== s.enabled))
                    : o.default.bool(s) && o.default.object(n.perAction[i])
                    ? (a[i].enabled = s)
                    : (a[i] = s);
              }
            },
          },
          {
            key: "getRect",
            value: function (t) {
              return (
                (t =
                  t || (o.default.element(this.target) ? this.target : null)),
                o.default.string(this.target) &&
                  (t = t || this._context.querySelector(this.target)),
                (0, w.getElementRect)(t)
              );
            },
          },
          {
            key: "rectChecker",
            value: function (t) {
              var e = this;
              return o.default.func(t)
                ? ((this._rectChecker = t),
                  (this.getRect = function (t) {
                    var n = (0, k.default)({}, e._rectChecker(t));
                    return (
                      "width" in n ||
                        ((n.width = n.right - n.left),
                        (n.height = n.bottom - n.top)),
                      n
                    );
                  }),
                  this)
                : null === t
                ? (delete this.getRect, delete this._rectChecker, this)
                : this.getRect;
            },
          },
          {
            key: "_backCompatOption",
            value: function (t, e) {
              if ((0, w.trySelector)(e) || o.default.object(e)) {
                for (var n in ((this.options[t] = e), this._actions.map))
                  this.options[n][t] = e;
                return this;
              }
              return this.options[t];
            },
          },
          {
            key: "origin",
            value: function (t) {
              return this._backCompatOption("origin", t);
            },
          },
          {
            key: "deltaSource",
            value: function (t) {
              return "page" === t || "client" === t
                ? ((this.options.deltaSource = t), this)
                : this.options.deltaSource;
            },
          },
          {
            key: "context",
            value: function () {
              return this._context;
            },
          },
          {
            key: "inContext",
            value: function (t) {
              return (
                this._context === t.ownerDocument ||
                (0, w.nodeContains)(this._context, t)
              );
            },
          },
          {
            key: "testIgnoreAllow",
            value: function (t, e, n) {
              return (
                !this.testIgnore(t.ignoreFrom, e, n) &&
                this.testAllow(t.allowFrom, e, n)
              );
            },
          },
          {
            key: "testAllow",
            value: function (t, e, n) {
              return (
                !t ||
                (!!o.default.element(n) &&
                  (o.default.string(t)
                    ? (0, w.matchesUpTo)(n, t, e)
                    : !!o.default.element(t) && (0, w.nodeContains)(t, n)))
              );
            },
          },
          {
            key: "testIgnore",
            value: function (t, e, n) {
              return (
                !(!t || !o.default.element(n)) &&
                (o.default.string(t)
                  ? (0, w.matchesUpTo)(n, t, e)
                  : !!o.default.element(t) && (0, w.nodeContains)(t, n))
              );
            },
          },
          {
            key: "fire",
            value: function (t) {
              return this.events.fire(t), this;
            },
          },
          {
            key: "_onOff",
            value: function (t, e, n, r) {
              o.default.object(e) &&
                !o.default.array(e) &&
                ((r = n), (n = null));
              var i = "on" === t ? "add" : "remove",
                a = (0, C.default)(e, n);
              for (var s in a) {
                "wheel" === s && (s = _.default.wheelEvent);
                for (var u = 0; u < a[s].length; u++) {
                  var l = a[s][u];
                  (0, sn.default)(s, this._actions)
                    ? this.events[t](s, l)
                    : o.default.string(this.target)
                    ? this._scopeEvents["".concat(i, "Delegate")](
                        this.target,
                        this._context,
                        s,
                        l,
                        r
                      )
                    : this._scopeEvents[i](this.target, s, l, r);
                }
              }
              return this;
            },
          },
          {
            key: "on",
            value: function (t, e, n) {
              return this._onOff("on", t, e, n);
            },
          },
          {
            key: "off",
            value: function (t, e, n) {
              return this._onOff("off", t, e, n);
            },
          },
          {
            key: "set",
            value: function (t) {
              var e = this._defaults;
              for (var n in (o.default.object(t) || (t = {}),
              (this.options = (0, me.default)(e.base)),
              this._actions.methodDict)) {
                var r = n,
                  i = this._actions.methodDict[r];
                (this.options[r] = {}),
                  this.setPerAction(
                    r,
                    (0, k.default)(
                      (0, k.default)({}, e.perAction),
                      e.actions[r]
                    )
                  ),
                  this[i](t[r]);
              }
              for (var a in t) o.default.func(this[a]) && this[a](t[a]);
              return this;
            },
          },
          {
            key: "unset",
            value: function () {
              if (o.default.string(this.target))
                for (var t in this._scopeEvents.delegatedEvents)
                  for (
                    var e = this._scopeEvents.delegatedEvents[t],
                      n = e.length - 1;
                    n >= 0;
                    n--
                  ) {
                    var r = e[n],
                      i = r.selector,
                      a = r.context,
                      s = r.listeners;
                    i === this.target && a === this._context && e.splice(n, 1);
                    for (var u = s.length - 1; u >= 0; u--)
                      this._scopeEvents.removeDelegate(
                        this.target,
                        this._context,
                        t,
                        s[u][0],
                        s[u][1]
                      );
                  }
              else this._scopeEvents.remove(this.target, "all");
            },
          },
        ]),
        t
      );
    })();
    un.Interactable = fn;
    var dn = {};
    Object.defineProperty(dn, "__esModule", { value: !0 }),
      (dn.InteractableSet = void 0);
    var pn = (function () {
      function t(e) {
        var n = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.list = []),
          (this.selectorMap = {}),
          (this.scope = void 0),
          (this.scope = e),
          e.addListeners({
            "interactable:unset": function (t) {
              var e = t.interactable,
                r = e.target,
                i = e._context,
                a = o.default.string(r) ? n.selectorMap[r] : r[n.scope.id],
                s = $.findIndex(a, function (t) {
                  return t.context === i;
                });
              a[s] && ((a[s].context = null), (a[s].interactable = null)),
                a.splice(s, 1);
            },
          });
      }
      var e;
      return (
        (e = [
          {
            key: "new",
            value: function (t, e) {
              e = (0, k.default)(e || {}, { actions: this.scope.actions });
              var n = new this.scope.Interactable(
                  t,
                  e,
                  this.scope.document,
                  this.scope.events
                ),
                r = { context: n._context, interactable: n };
              return (
                this.scope.addDocument(n._doc),
                this.list.push(n),
                o.default.string(t)
                  ? (this.selectorMap[t] || (this.selectorMap[t] = []),
                    this.selectorMap[t].push(r))
                  : (n.target[this.scope.id] ||
                      Object.defineProperty(t, this.scope.id, {
                        value: [],
                        configurable: !0,
                      }),
                    t[this.scope.id].push(r)),
                this.scope.fire("interactable:new", {
                  target: t,
                  options: e,
                  interactable: n,
                  win: this.scope._win,
                }),
                n
              );
            },
          },
          {
            key: "get",
            value: function (t, e) {
              var n = (e && e.context) || this.scope.document,
                r = o.default.string(t),
                i = r ? this.selectorMap[t] : t[this.scope.id];
              if (!i) return null;
              var a = $.find(i, function (e) {
                return e.context === n && (r || e.interactable.inContext(t));
              });
              return a && a.interactable;
            },
          },
          {
            key: "forEachMatch",
            value: function (t, e) {
              for (var n = 0; n < this.list.length; n++) {
                var r = this.list[n],
                  i = void 0;
                if (
                  ((o.default.string(r.target)
                    ? o.default.element(t) && w.matchesSelector(t, r.target)
                    : t === r.target) &&
                    r.inContext(t) &&
                    (i = e(r)),
                  void 0 !== i)
                )
                  return i;
              }
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    dn.InteractableSet = pn;
    var hn = {};
    function vn(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return gn(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? gn(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function gn(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    Object.defineProperty(hn, "__esModule", { value: !0 }),
      (hn.default = void 0);
    var mn = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.currentTarget = void 0),
          (this.originalEvent = void 0),
          (this.type = void 0),
          (this.originalEvent = e),
          (0, F.default)(this, e);
      }
      var e;
      return (
        (e = [
          {
            key: "preventOriginalDefault",
            value: function () {
              this.originalEvent.preventDefault();
            },
          },
          {
            key: "stopPropagation",
            value: function () {
              this.originalEvent.stopPropagation();
            },
          },
          {
            key: "stopImmediatePropagation",
            value: function () {
              this.originalEvent.stopImmediatePropagation();
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(t.prototype, e),
        t
      );
    })();
    function yn(t) {
      if (!o.default.object(t)) return { capture: !!t, passive: !1 };
      var e = (0, k.default)({}, t);
      return (e.capture = !!t.capture), (e.passive = !!t.passive), e;
    }
    var _n = {
      id: "events",
      install: function (t) {
        var e = [],
          n = {},
          r = [],
          i = {
            add: a,
            remove: s,
            addDelegate: function (t, e, i, o, s) {
              var c = yn(s);
              if (!n[i]) {
                n[i] = [];
                for (var f = 0; f < r.length; f++) {
                  var d = r[f];
                  a(d, i, u), a(d, i, l, !0);
                }
              }
              var p = n[i],
                h = $.find(p, function (n) {
                  return n.selector === t && n.context === e;
                });
              h ||
                ((h = { selector: t, context: e, listeners: [] }), p.push(h)),
                h.listeners.push([o, c]);
            },
            removeDelegate: function (t, e, r, i, o) {
              var a,
                c = yn(o),
                f = n[r],
                d = !1;
              if (f)
                for (a = f.length - 1; a >= 0; a--) {
                  var p = f[a];
                  if (p.selector === t && p.context === e) {
                    for (var h = p.listeners, v = h.length - 1; v >= 0; v--) {
                      var g = vn(h[v], 2),
                        m = g[0],
                        y = g[1],
                        _ = y.capture,
                        b = y.passive;
                      if (m === i && _ === c.capture && b === c.passive) {
                        h.splice(v, 1),
                          h.length ||
                            (f.splice(a, 1), s(e, r, u), s(e, r, l, !0)),
                          (d = !0);
                        break;
                      }
                    }
                    if (d) break;
                  }
                }
            },
            delegateListener: u,
            delegateUseCapture: l,
            delegatedEvents: n,
            documents: r,
            targets: e,
            supportsOptions: !1,
            supportsPassive: !1,
          };
        function a(t, n, r, o) {
          var a = yn(o),
            s = $.find(e, function (e) {
              return e.eventTarget === t;
            });
          s || ((s = { eventTarget: t, events: {} }), e.push(s)),
            s.events[n] || (s.events[n] = []),
            t.addEventListener &&
              !$.contains(s.events[n], r) &&
              (t.addEventListener(n, r, i.supportsOptions ? a : a.capture),
              s.events[n].push(r));
        }
        function s(t, n, r, o) {
          var a = yn(o),
            u = $.findIndex(e, function (e) {
              return e.eventTarget === t;
            }),
            l = e[u];
          if (l && l.events)
            if ("all" !== n) {
              var c = !1,
                f = l.events[n];
              if (f) {
                if ("all" === r) {
                  for (var d = f.length - 1; d >= 0; d--) s(t, n, f[d], a);
                  return;
                }
                for (var p = 0; p < f.length; p++)
                  if (f[p] === r) {
                    t.removeEventListener(
                      n,
                      r,
                      i.supportsOptions ? a : a.capture
                    ),
                      f.splice(p, 1),
                      0 === f.length && (delete l.events[n], (c = !0));
                    break;
                  }
              }
              c && !Object.keys(l.events).length && e.splice(u, 1);
            } else
              for (n in l.events) l.events.hasOwnProperty(n) && s(t, n, "all");
        }
        function u(t, e) {
          for (
            var r = yn(e),
              i = new mn(t),
              a = n[t.type],
              s = vn(Y.getEventTargets(t), 1)[0],
              u = s;
            o.default.element(u);

          ) {
            for (var l = 0; l < a.length; l++) {
              var c = a[l],
                f = c.selector,
                d = c.context;
              if (
                w.matchesSelector(u, f) &&
                w.nodeContains(d, s) &&
                w.nodeContains(d, u)
              ) {
                var p = c.listeners;
                i.currentTarget = u;
                for (var h = 0; h < p.length; h++) {
                  var v = vn(p[h], 2),
                    g = v[0],
                    m = v[1],
                    y = m.capture,
                    _ = m.passive;
                  y === r.capture && _ === r.passive && g(i);
                }
              }
            }
            u = w.parentNode(u);
          }
        }
        function l(t) {
          return u(t, !0);
        }
        return (
          t.document.createElement("div").addEventListener("test", null, {
            get capture() {
              return (i.supportsOptions = !0);
            },
            get passive() {
              return (i.supportsPassive = !0);
            },
          }),
          (t.events = i),
          i
        );
      },
    };
    hn.default = _n;
    var bn = {};
    Object.defineProperty(bn, "__esModule", { value: !0 }),
      (bn.createInteractStatic = function (t) {
        var e = function e(n, r) {
          var i = t.interactables.get(n, r);
          return (
            i ||
              ((i = t.interactables.new(n, r)).events.global = e.globalEvents),
            i
          );
        };
        return (
          (e.getPointerAverage = Y.pointerAverage),
          (e.getTouchBBox = Y.touchBBox),
          (e.getTouchDistance = Y.touchDistance),
          (e.getTouchAngle = Y.touchAngle),
          (e.getElementRect = w.getElementRect),
          (e.getElementClientRect = w.getElementClientRect),
          (e.matchesSelector = w.matchesSelector),
          (e.closest = w.closest),
          (e.globalEvents = {}),
          (e.version = void 0),
          (e.scope = t),
          (e.use = function (t, e) {
            return this.scope.usePlugin(t, e), this;
          }),
          (e.isSet = function (t, e) {
            return !!this.scope.interactables.get(t, e && e.context);
          }),
          (e.on = function (t, e, n) {
            if (
              (o.default.string(t) &&
                -1 !== t.search(" ") &&
                (t = t.trim().split(/ +/)),
              o.default.array(t))
            ) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                this.on(i, e, n);
              }
              return this;
            }
            if (o.default.object(t)) {
              for (var a in t) this.on(a, t[a], e);
              return this;
            }
            return (
              (0, sn.default)(t, this.scope.actions)
                ? this.globalEvents[t]
                  ? this.globalEvents[t].push(e)
                  : (this.globalEvents[t] = [e])
                : this.scope.events.add(this.scope.document, t, e, {
                    options: n,
                  }),
              this
            );
          }),
          (e.off = function (t, e, n) {
            if (
              (o.default.string(t) &&
                -1 !== t.search(" ") &&
                (t = t.trim().split(/ +/)),
              o.default.array(t))
            ) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                this.off(i, e, n);
              }
              return this;
            }
            if (o.default.object(t)) {
              for (var a in t) this.off(a, t[a], e);
              return this;
            }
            var s;
            return (
              (0, sn.default)(t, this.scope.actions)
                ? t in this.globalEvents &&
                  -1 !== (s = this.globalEvents[t].indexOf(e)) &&
                  this.globalEvents[t].splice(s, 1)
                : this.scope.events.remove(this.scope.document, t, e, n),
              this
            );
          }),
          (e.debug = function () {
            return this.scope;
          }),
          (e.supportsTouch = function () {
            return _.default.supportsTouch;
          }),
          (e.supportsPointerEvent = function () {
            return _.default.supportsPointerEvent;
          }),
          (e.stop = function () {
            for (var t = 0; t < this.scope.interactions.list.length; t++)
              this.scope.interactions.list[t].stop();
            return this;
          }),
          (e.pointerMoveTolerance = function (t) {
            return o.default.number(t)
              ? ((this.scope.interactions.pointerMoveTolerance = t), this)
              : this.scope.interactions.pointerMoveTolerance;
          }),
          (e.addDocument = function (t, e) {
            this.scope.addDocument(t, e);
          }),
          (e.removeDocument = function (t) {
            this.scope.removeDocument(t);
          }),
          e
        );
      });
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: !0 }),
      (xn.default = void 0);
    var wn = {
      methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
      search: function (t) {
        for (var e = 0; e < wn.methodOrder.length; e++) {
          var n;
          n = wn.methodOrder[e];
          var r = wn[n](t);
          if (r) return r;
        }
        return null;
      },
      simulationResume: function (t) {
        var e = t.pointerType,
          n = t.eventType,
          r = t.eventTarget,
          i = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0; o < i.interactions.list.length; o++) {
          var a = i.interactions.list[o],
            s = r;
          if (a.simulation && a.simulation.allowResume && a.pointerType === e)
            for (; s; ) {
              if (s === a.element) return a;
              s = w.parentNode(s);
            }
        }
        return null;
      },
      mouseOrPen: function (t) {
        var e,
          n = t.pointerId,
          r = t.pointerType,
          i = t.eventType,
          o = t.scope;
        if ("mouse" !== r && "pen" !== r) return null;
        for (var a = 0; a < o.interactions.list.length; a++) {
          var s = o.interactions.list[a];
          if (s.pointerType === r) {
            if (s.simulation && !Tn(s, n)) continue;
            if (s.interacting()) return s;
            e || (e = s);
          }
        }
        if (e) return e;
        for (var u = 0; u < o.interactions.list.length; u++) {
          var l = o.interactions.list[u];
          if (!(l.pointerType !== r || (/down/i.test(i) && l.simulation)))
            return l;
        }
        return null;
      },
      hasPointer: function (t) {
        for (
          var e = t.pointerId, n = t.scope, r = 0;
          r < n.interactions.list.length;
          r++
        ) {
          var i = n.interactions.list[r];
          if (Tn(i, e)) return i;
        }
        return null;
      },
      idle: function (t) {
        for (
          var e = t.pointerType, n = t.scope, r = 0;
          r < n.interactions.list.length;
          r++
        ) {
          var i = n.interactions.list[r];
          if (1 === i.pointers.length) {
            var o = i.interactable;
            if (o && (!o.options.gesture || !o.options.gesture.enabled))
              continue;
          } else if (i.pointers.length >= 2) continue;
          if (!i.interacting() && e === i.pointerType) return i;
        }
        return null;
      },
    };
    function Tn(t, e) {
      return t.pointers.some(function (t) {
        return t.id === e;
      });
    }
    var Sn = wn;
    xn.default = Sn;
    var On = {};
    function Pn(t) {
      return (Pn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function En(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return Mn(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Mn(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Mn(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function kn(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function An(t, e) {
      return (An =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function jn(t, e) {
      return !e || ("object" !== Pn(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Dn(t) {
      return (Dn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    Object.defineProperty(On, "__esModule", { value: !0 }),
      (On.default = void 0);
    var In = [
      "pointerDown",
      "pointerMove",
      "pointerUp",
      "updatePointer",
      "removePointer",
      "windowBlur",
    ];
    function Cn(t, e) {
      return function (n) {
        var r = e.interactions.list,
          i = Y.getPointerType(n),
          o = En(Y.getEventTargets(n), 2),
          a = o[0],
          s = o[1],
          u = [];
        if (/^touch/.test(n.type)) {
          e.prevTouchTime = e.now();
          for (var l = 0; l < n.changedTouches.length; l++) {
            var c = n.changedTouches[l],
              f = {
                pointer: c,
                pointerId: Y.getPointerId(c),
                pointerType: i,
                eventType: n.type,
                eventTarget: a,
                curEventTarget: s,
                scope: e,
              },
              d = zn(f);
            u.push([f.pointer, f.eventTarget, f.curEventTarget, d]);
          }
        } else {
          var p = !1;
          if (!_.default.supportsPointerEvent && /mouse/.test(n.type)) {
            for (var h = 0; h < r.length && !p; h++)
              p = "mouse" !== r[h].pointerType && r[h].pointerIsDown;
            p = p || e.now() - e.prevTouchTime < 500 || 0 === n.timeStamp;
          }
          if (!p) {
            var v = {
                pointer: n,
                pointerId: Y.getPointerId(n),
                pointerType: i,
                eventType: n.type,
                curEventTarget: s,
                eventTarget: a,
                scope: e,
              },
              g = zn(v);
            u.push([v.pointer, v.eventTarget, v.curEventTarget, g]);
          }
        }
        for (var m = 0; m < u.length; m++) {
          var y = En(u[m], 4),
            b = y[0],
            x = y[1],
            w = y[2];
          y[3][t](b, n, x, w);
        }
      };
    }
    function zn(t) {
      var e = t.pointerType,
        n = t.scope,
        r = { interaction: xn.default.search(t), searchDetails: t };
      return (
        n.fire("interactions:find", r),
        r.interaction || n.interactions.new({ pointerType: e })
      );
    }
    function Rn(t, e) {
      var n = t.doc,
        r = t.scope,
        i = t.options,
        o = r.interactions.docEvents,
        a = r.events,
        s = a[e];
      for (var u in (r.browser.isIOS &&
        !i.events &&
        (i.events = { passive: !1 }),
      a.delegatedEvents))
        s(n, u, a.delegateListener), s(n, u, a.delegateUseCapture, !0);
      for (var l = i && i.events, c = 0; c < o.length; c++) {
        var f = o[c];
        s(n, f.type, f.listener, l);
      }
    }
    var Fn = {
      id: "core/interactions",
      install: function (t) {
        for (var e = {}, n = 0; n < In.length; n++) {
          var r = In[n];
          e[r] = Cn(r, t);
        }
        var i,
          o = _.default.pEventTypes;
        function a() {
          for (var e = 0; e < t.interactions.list.length; e++) {
            var n = t.interactions.list[e];
            if (n.pointerIsDown && "touch" === n.pointerType && !n._interacting)
              for (
                var r = function () {
                    var e = n.pointers[i];
                    t.documents.some(function (t) {
                      var n = t.doc;
                      return (0, w.nodeContains)(n, e.downTarget);
                    }) || n.removePointer(e.pointer, e.event);
                  },
                  i = 0;
                i < n.pointers.length;
                i++
              )
                r();
          }
        }
        (i = v.default.PointerEvent
          ? [
              { type: o.down, listener: a },
              { type: o.down, listener: e.pointerDown },
              { type: o.move, listener: e.pointerMove },
              { type: o.up, listener: e.pointerUp },
              { type: o.cancel, listener: e.pointerUp },
            ]
          : [
              { type: "mousedown", listener: e.pointerDown },
              { type: "mousemove", listener: e.pointerMove },
              { type: "mouseup", listener: e.pointerUp },
              { type: "touchstart", listener: a },
              { type: "touchstart", listener: e.pointerDown },
              { type: "touchmove", listener: e.pointerMove },
              { type: "touchend", listener: e.pointerUp },
              { type: "touchcancel", listener: e.pointerUp },
            ]).push({
          type: "blur",
          listener: function (e) {
            for (var n = 0; n < t.interactions.list.length; n++)
              t.interactions.list[n].documentBlur(e);
          },
        }),
          (t.prevTouchTime = 0),
          (t.Interaction = (function (e) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && An(t, e);
            })(a, e);
            var n,
              r,
              i,
              o =
                ((r = a),
                (i = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                function () {
                  var t,
                    e = Dn(r);
                  if (i) {
                    var n = Dn(this).constructor;
                    t = Reflect.construct(e, arguments, n);
                  } else t = e.apply(this, arguments);
                  return jn(this, t);
                });
            function a() {
              return kn(this, a), o.apply(this, arguments);
            }
            return (
              (n = [
                {
                  key: "_now",
                  value: function () {
                    return t.now();
                  },
                },
                {
                  key: "pointerMoveTolerance",
                  get: function () {
                    return t.interactions.pointerMoveTolerance;
                  },
                  set: function (e) {
                    t.interactions.pointerMoveTolerance = e;
                  },
                },
              ]) &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                })(a.prototype, n),
              a
            );
          })(Le.default)),
          (t.interactions = {
            list: [],
            new: function (e) {
              e.scopeFire = function (e, n) {
                return t.fire(e, n);
              };
              var n = new t.Interaction(e);
              return t.interactions.list.push(n), n;
            },
            listeners: e,
            docEvents: i,
            pointerMoveTolerance: 1,
          }),
          t.usePlugin(ie.default);
      },
      listeners: {
        "scope:add-document": function (t) {
          return Rn(t, "add");
        },
        "scope:remove-document": function (t) {
          return Rn(t, "remove");
        },
        "interactable:unset": function (t, e) {
          for (
            var n = t.interactable, r = e.interactions.list.length - 1;
            r >= 0;
            r--
          ) {
            var i = e.interactions.list[r];
            i.interactable === n &&
              (i.stop(),
              e.fire("interactions:destroy", { interaction: i }),
              i.destroy(),
              e.interactions.list.length > 2 &&
                e.interactions.list.splice(r, 1));
          }
        },
      },
      onDocSignal: Rn,
      doOnInteractions: Cn,
      methodNames: In,
    };
    On.default = Fn;
    var Ln = {};
    function Bn(t) {
      return (Bn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Yn(t, e, n) {
      return (Yn =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = Nn(t));

                );
                return t;
              })(t, e);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function Xn(t, e) {
      return (Xn =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function qn(t, e) {
      return !e || ("object" !== Bn(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Nn(t) {
      return (Nn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function Hn(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Un(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Wn(t, e, n) {
      return e && Un(t.prototype, e), n && Un(t, n), t;
    }
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
      (Ln.initScope = Gn),
      (Ln.Scope = void 0);
    var Vn = (function () {
      function t() {
        var e = this;
        Hn(this, t),
          (this.id = "__interact_scope_".concat(
            Math.floor(100 * Math.random())
          )),
          (this.isInitialized = !1),
          (this.listenerMaps = []),
          (this.browser = _.default),
          (this.defaults = (0, me.default)(Ee.defaults)),
          (this.Eventable = rn.Eventable),
          (this.actions = {
            map: {},
            phases: { start: !0, move: !0, end: !0 },
            methodDict: {},
            phaselessTypes: {},
          }),
          (this.interactStatic = (0, bn.createInteractStatic)(this)),
          (this.InteractEvent = Me.InteractEvent),
          (this.Interactable = void 0),
          (this.interactables = new dn.InteractableSet(this)),
          (this._win = void 0),
          (this.document = void 0),
          (this.window = void 0),
          (this.documents = []),
          (this._plugins = { list: [], map: {} }),
          (this.onWindowUnload = function (t) {
            return e.removeDocument(t.target);
          });
        var n = this;
        this.Interactable = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Xn(t, e);
          })(o, t);
          var e,
            r,
            i =
              ((e = o),
              (r = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  n = Nn(e);
                if (r) {
                  var i = Nn(this).constructor;
                  t = Reflect.construct(n, arguments, i);
                } else t = n.apply(this, arguments);
                return qn(this, t);
              });
          function o() {
            return Hn(this, o), i.apply(this, arguments);
          }
          return (
            Wn(o, [
              {
                key: "set",
                value: function (t) {
                  return (
                    Yn(Nn(o.prototype), "set", this).call(this, t),
                    n.fire("interactable:set", {
                      options: t,
                      interactable: this,
                    }),
                    this
                  );
                },
              },
              {
                key: "unset",
                value: function () {
                  Yn(Nn(o.prototype), "unset", this).call(this),
                    n.interactables.list.splice(
                      n.interactables.list.indexOf(this),
                      1
                    ),
                    n.fire("interactable:unset", { interactable: this });
                },
              },
              {
                key: "_defaults",
                get: function () {
                  return n.defaults;
                },
              },
            ]),
            o
          );
        })(un.Interactable);
      }
      return (
        Wn(t, [
          {
            key: "addListeners",
            value: function (t, e) {
              this.listenerMaps.push({ id: e, map: t });
            },
          },
          {
            key: "fire",
            value: function (t, e) {
              for (var n = 0; n < this.listenerMaps.length; n++) {
                var r = this.listenerMaps[n].map[t];
                if (r && !1 === r(e, this, t)) return !1;
              }
            },
          },
          {
            key: "init",
            value: function (t) {
              return this.isInitialized ? this : Gn(this, t);
            },
          },
          {
            key: "pluginIsInstalled",
            value: function (t) {
              return (
                this._plugins.map[t.id] || -1 !== this._plugins.list.indexOf(t)
              );
            },
          },
          {
            key: "usePlugin",
            value: function (t, e) {
              if (!this.isInitialized) return this;
              if (this.pluginIsInstalled(t)) return this;
              if (
                (t.id && (this._plugins.map[t.id] = t),
                this._plugins.list.push(t),
                t.install && t.install(this, e),
                t.listeners && t.before)
              ) {
                for (
                  var n = 0,
                    r = this.listenerMaps.length,
                    i = t.before.reduce(function (t, e) {
                      return (t[e] = !0), (t[$n(e)] = !0), t;
                    }, {});
                  n < r;
                  n++
                ) {
                  var o = this.listenerMaps[n].id;
                  if (i[o] || i[$n(o)]) break;
                }
                this.listenerMaps.splice(n, 0, { id: t.id, map: t.listeners });
              } else
                t.listeners &&
                  this.listenerMaps.push({ id: t.id, map: t.listeners });
              return this;
            },
          },
          {
            key: "addDocument",
            value: function (t, n) {
              if (-1 !== this.getDocIndex(t)) return !1;
              var r = e.getWindow(t);
              (n = n ? (0, k.default)({}, n) : {}),
                this.documents.push({ doc: t, options: n }),
                this.events.documents.push(t),
                t !== this.document &&
                  this.events.add(r, "unload", this.onWindowUnload),
                this.fire("scope:add-document", {
                  doc: t,
                  window: r,
                  scope: this,
                  options: n,
                });
            },
          },
          {
            key: "removeDocument",
            value: function (t) {
              var n = this.getDocIndex(t),
                r = e.getWindow(t),
                i = this.documents[n].options;
              this.events.remove(r, "unload", this.onWindowUnload),
                this.documents.splice(n, 1),
                this.events.documents.splice(n, 1),
                this.fire("scope:remove-document", {
                  doc: t,
                  window: r,
                  scope: this,
                  options: i,
                });
            },
          },
          {
            key: "getDocIndex",
            value: function (t) {
              for (var e = 0; e < this.documents.length; e++)
                if (this.documents[e].doc === t) return e;
              return -1;
            },
          },
          {
            key: "getDocOptions",
            value: function (t) {
              var e = this.getDocIndex(t);
              return -1 === e ? null : this.documents[e].options;
            },
          },
          {
            key: "now",
            value: function () {
              return (this.window.Date || Date).now();
            },
          },
        ]),
        t
      );
    })();
    function Gn(t, n) {
      return (
        (t.isInitialized = !0),
        e.init(n),
        v.default.init(n),
        _.default.init(n),
        Ot.default.init(n),
        (t.window = n),
        (t.document = n.document),
        t.usePlugin(On.default),
        t.usePlugin(hn.default),
        t
      );
    }
    function $n(t) {
      return t && t.replace(/\/.*$/, "");
    }
    Ln.Scope = Vn;
    var Zn = {};
    function Kn(t) {
      return (Kn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    Object.defineProperty(Zn, "__esModule", { value: !0 }),
      (Zn.init = Zn.default = void 0);
    var Qn = new Ln.Scope(),
      Jn = Qn.interactStatic;
    Zn.default = Jn;
    var tr = function (t) {
      return Qn.init(t);
    };
    (Zn.init = tr),
      "object" === ("undefined" == typeof window ? "undefined" : Kn(window)) &&
        window &&
        tr(window);
    var er = {};
    Object.defineProperty(er, "__esModule", { value: !0 }),
      (er.default = void 0),
      (er.default = function () {});
    var nr = {};
    Object.defineProperty(nr, "__esModule", { value: !0 }),
      (nr.default = void 0),
      (nr.default = function () {});
    var rr = {};
    function ir(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = t[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return or(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? or(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function or(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    Object.defineProperty(rr, "__esModule", { value: !0 }),
      (rr.default = void 0),
      (rr.default = function (t) {
        var e = [
            ["x", "y"],
            ["left", "top"],
            ["right", "bottom"],
            ["width", "height"],
          ].filter(function (e) {
            var n = ir(e, 2),
              r = n[0],
              i = n[1];
            return r in t || i in t;
          }),
          n = function (n, r) {
            for (
              var i = t.range,
                o = t.limits,
                a =
                  void 0 === o
                    ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 }
                    : o,
                s = t.offset,
                u = void 0 === s ? { x: 0, y: 0 } : s,
                l = { range: i, grid: t, x: null, y: null },
                c = 0;
              c < e.length;
              c++
            ) {
              var f = ir(e[c], 2),
                d = f[0],
                p = f[1],
                h = Math.round((n - u.x) / t[d]),
                v = Math.round((r - u.y) / t[p]);
              (l[d] = Math.max(a.left, Math.min(a.right, h * t[d] + u.x))),
                (l[p] = Math.max(a.top, Math.min(a.bottom, v * t[p] + u.y)));
            }
            return l;
          };
        return (n.grid = t), (n.coordFields = e), n;
      });
    var ar = {};
    Object.defineProperty(ar, "__esModule", { value: !0 }),
      Object.defineProperty(ar, "edgeTarget", {
        enumerable: !0,
        get: function () {
          return er.default;
        },
      }),
      Object.defineProperty(ar, "elements", {
        enumerable: !0,
        get: function () {
          return nr.default;
        },
      }),
      Object.defineProperty(ar, "grid", {
        enumerable: !0,
        get: function () {
          return rr.default;
        },
      });
    var sr = {};
    Object.defineProperty(sr, "__esModule", { value: !0 }),
      (sr.default = void 0);
    var ur = {
      id: "snappers",
      install: function (t) {
        var e = t.interactStatic;
        (e.snappers = (0, k.default)(e.snappers || {}, ar)),
          (e.createSnapGrid = e.snappers.grid);
      },
    };
    sr.default = ur;
    var lr = {};
    function cr(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function fr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cr(Object(n), !0).forEach(function (e) {
              dr(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : cr(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function dr(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    Object.defineProperty(lr, "__esModule", { value: !0 }),
      (lr.aspectRatio = lr.default = void 0);
    var pr = {
      start: function (t) {
        var e = t.state,
          n = t.rect,
          r = t.edges,
          i = t.pageCoords,
          o = e.options.ratio,
          a = e.options,
          s = a.equalDelta,
          u = a.modifiers;
        "preserve" === o && (o = n.width / n.height),
          (e.startCoords = (0, k.default)({}, i)),
          (e.startRect = (0, k.default)({}, n)),
          (e.ratio = o),
          (e.equalDelta = s);
        var l = (e.linkedEdges = {
          top: r.top || (r.left && !r.bottom),
          left: r.left || (r.top && !r.right),
          bottom: r.bottom || (r.right && !r.top),
          right: r.right || (r.bottom && !r.left),
        });
        if (((e.xIsPrimaryAxis = !(!r.left && !r.right)), e.equalDelta))
          e.edgeSign = (l.left ? 1 : -1) * (l.top ? 1 : -1);
        else {
          var c = e.xIsPrimaryAxis ? l.top : l.left;
          e.edgeSign = c ? -1 : 1;
        }
        if (((0, k.default)(t.edges, l), u && u.length)) {
          var f = new ye.default(t.interaction);
          f.copyFrom(t.interaction.modification),
            f.prepareStates(u),
            (e.subModification = f),
            f.startAll(fr({}, t));
        }
      },
      set: function (t) {
        var e = t.state,
          n = t.rect,
          r = t.coords,
          i = (0, k.default)({}, r),
          o = e.equalDelta ? hr : vr;
        if ((o(e, e.xIsPrimaryAxis, r, n), !e.subModification)) return null;
        var a = (0, k.default)({}, n);
        (0, A.addEdges)(e.linkedEdges, a, { x: r.x - i.x, y: r.y - i.y });
        var s = e.subModification.setAll(
            fr(
              fr({}, t),
              {},
              {
                rect: a,
                edges: e.linkedEdges,
                pageCoords: r,
                prevCoords: r,
                prevRect: a,
              }
            )
          ),
          u = s.delta;
        return (
          s.changed &&
            (o(e, Math.abs(u.x) > Math.abs(u.y), s.coords, s.rect),
            (0, k.default)(r, s.coords)),
          s.eventProps
        );
      },
      defaults: {
        ratio: "preserve",
        equalDelta: !1,
        modifiers: [],
        enabled: !1,
      },
    };
    function hr(t, e, n) {
      var r = t.startCoords,
        i = t.edgeSign;
      e ? (n.y = r.y + (n.x - r.x) * i) : (n.x = r.x + (n.y - r.y) * i);
    }
    function vr(t, e, n, r) {
      var i = t.startRect,
        o = t.startCoords,
        a = t.ratio,
        s = t.edgeSign;
      if (e) {
        var u = r.width / a;
        n.y = o.y + (u - i.height) * s;
      } else {
        var l = r.height * a;
        n.x = o.x + (l - i.width) * s;
      }
    }
    lr.aspectRatio = pr;
    var gr = (0, Se.makeModifier)(pr, "aspectRatio");
    lr.default = gr;
    var mr = {};
    Object.defineProperty(mr, "__esModule", { value: !0 }),
      (mr.default = void 0);
    var yr = function () {};
    yr._defaults = {};
    var _r = yr;
    mr.default = _r;
    var br = {};
    Object.defineProperty(br, "__esModule", { value: !0 }),
      Object.defineProperty(br, "default", {
        enumerable: !0,
        get: function () {
          return mr.default;
        },
      });
    var xr = {};
    function wr(t, e, n) {
      return o.default.func(t)
        ? A.resolveRectLike(t, e.interactable, e.element, [n.x, n.y, e])
        : A.resolveRectLike(t, e.interactable, e.element);
    }
    Object.defineProperty(xr, "__esModule", { value: !0 }),
      (xr.getRestrictionRect = wr),
      (xr.restrict = xr.default = void 0);
    var Tr = {
      start: function (t) {
        var e = t.rect,
          n = t.startOffset,
          r = t.state,
          i = t.interaction,
          o = t.pageCoords,
          a = r.options,
          s = a.elementRect,
          u = (0, k.default)(
            { left: 0, top: 0, right: 0, bottom: 0 },
            a.offset || {}
          );
        if (e && s) {
          var l = wr(a.restriction, i, o);
          if (l) {
            var c = l.right - l.left - e.width,
              f = l.bottom - l.top - e.height;
            c < 0 && ((u.left += c), (u.right += c)),
              f < 0 && ((u.top += f), (u.bottom += f));
          }
          (u.left += n.left - e.width * s.left),
            (u.top += n.top - e.height * s.top),
            (u.right += n.right - e.width * (1 - s.right)),
            (u.bottom += n.bottom - e.height * (1 - s.bottom));
        }
        r.offset = u;
      },
      set: function (t) {
        var e = t.coords,
          n = t.interaction,
          r = t.state,
          i = r.options,
          o = r.offset,
          a = wr(i.restriction, n, e);
        if (a) {
          var s = A.xywhToTlbr(a);
          (e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left)),
            (e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top));
        }
      },
      defaults: {
        restriction: null,
        elementRect: null,
        offset: null,
        endOnly: !1,
        enabled: !1,
      },
    };
    xr.restrict = Tr;
    var Sr = (0, Se.makeModifier)(Tr, "restrict");
    xr.default = Sr;
    var Or = {};
    Object.defineProperty(Or, "__esModule", { value: !0 }),
      (Or.restrictEdges = Or.default = void 0);
    var Pr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
      Er = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Mr(t, e) {
      for (
        var n = ["top", "left", "bottom", "right"], r = 0;
        r < n.length;
        r++
      ) {
        var i = n[r];
        i in t || (t[i] = e[i]);
      }
      return t;
    }
    var kr = {
      noInner: Pr,
      noOuter: Er,
      start: function (t) {
        var e,
          n = t.interaction,
          r = t.startOffset,
          i = t.state,
          o = i.options;
        if (o) {
          var a = (0, xr.getRestrictionRect)(o.offset, n, n.coords.start.page);
          e = A.rectToXY(a);
        }
        (e = e || { x: 0, y: 0 }),
          (i.offset = {
            top: e.y + r.top,
            left: e.x + r.left,
            bottom: e.y - r.bottom,
            right: e.x - r.right,
          });
      },
      set: function (t) {
        var e = t.coords,
          n = t.edges,
          r = t.interaction,
          i = t.state,
          o = i.offset,
          a = i.options;
        if (n) {
          var s = (0, k.default)({}, e),
            u = (0, xr.getRestrictionRect)(a.inner, r, s) || {},
            l = (0, xr.getRestrictionRect)(a.outer, r, s) || {};
          Mr(u, Pr),
            Mr(l, Er),
            n.top
              ? (e.y = Math.min(Math.max(l.top + o.top, s.y), u.top + o.top))
              : n.bottom &&
                (e.y = Math.max(
                  Math.min(l.bottom + o.bottom, s.y),
                  u.bottom + o.bottom
                )),
            n.left
              ? (e.x = Math.min(
                  Math.max(l.left + o.left, s.x),
                  u.left + o.left
                ))
              : n.right &&
                (e.x = Math.max(
                  Math.min(l.right + o.right, s.x),
                  u.right + o.right
                ));
        }
      },
      defaults: {
        inner: null,
        outer: null,
        offset: null,
        endOnly: !1,
        enabled: !1,
      },
    };
    Or.restrictEdges = kr;
    var Ar = (0, Se.makeModifier)(kr, "restrictEdges");
    Or.default = Ar;
    var jr = {};
    Object.defineProperty(jr, "__esModule", { value: !0 }),
      (jr.restrictRect = jr.default = void 0);
    var Dr = (0, k.default)(
        {
          get elementRect() {
            return { top: 0, left: 0, bottom: 1, right: 1 };
          },
          set elementRect(t) {},
        },
        xr.restrict.defaults
      ),
      Ir = { start: xr.restrict.start, set: xr.restrict.set, defaults: Dr };
    jr.restrictRect = Ir;
    var Cr = (0, Se.makeModifier)(Ir, "restrictRect");
    jr.default = Cr;
    var zr = {};
    Object.defineProperty(zr, "__esModule", { value: !0 }),
      (zr.restrictSize = zr.default = void 0);
    var Rr = { width: -1 / 0, height: -1 / 0 },
      Fr = { width: 1 / 0, height: 1 / 0 },
      Lr = {
        start: function (t) {
          return Or.restrictEdges.start(t);
        },
        set: function (t) {
          var e = t.interaction,
            n = t.state,
            r = t.rect,
            i = t.edges,
            o = n.options;
          if (i) {
            var a =
                A.tlbrToXywh((0, xr.getRestrictionRect)(o.min, e, t.coords)) ||
                Rr,
              s =
                A.tlbrToXywh((0, xr.getRestrictionRect)(o.max, e, t.coords)) ||
                Fr;
            (n.options = {
              endOnly: o.endOnly,
              inner: (0, k.default)({}, Or.restrictEdges.noInner),
              outer: (0, k.default)({}, Or.restrictEdges.noOuter),
            }),
              i.top
                ? ((n.options.inner.top = r.bottom - a.height),
                  (n.options.outer.top = r.bottom - s.height))
                : i.bottom &&
                  ((n.options.inner.bottom = r.top + a.height),
                  (n.options.outer.bottom = r.top + s.height)),
              i.left
                ? ((n.options.inner.left = r.right - a.width),
                  (n.options.outer.left = r.right - s.width))
                : i.right &&
                  ((n.options.inner.right = r.left + a.width),
                  (n.options.outer.right = r.left + s.width)),
              Or.restrictEdges.set(t),
              (n.options = o);
          }
        },
        defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
      };
    zr.restrictSize = Lr;
    var Br = (0, Se.makeModifier)(Lr, "restrictSize");
    zr.default = Br;
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: !0 }),
      Object.defineProperty(Yr, "default", {
        enumerable: !0,
        get: function () {
          return mr.default;
        },
      });
    var Xr = {};
    Object.defineProperty(Xr, "__esModule", { value: !0 }),
      (Xr.snap = Xr.default = void 0);
    var qr = {
      start: function (t) {
        var e,
          n = t.interaction,
          r = t.interactable,
          i = t.element,
          o = t.rect,
          a = t.state,
          s = t.startOffset,
          u = a.options,
          l = u.offsetWithOrigin
            ? (function (t) {
                var e = t.interaction.element;
                return (
                  (0, A.rectToXY)(
                    (0, A.resolveRectLike)(t.state.options.origin, null, null, [
                      e,
                    ])
                  ) ||
                  (0, I.default)(t.interactable, e, t.interaction.prepared.name)
                );
              })(t)
            : { x: 0, y: 0 };
        if ("startCoords" === u.offset)
          e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var c = (0, A.resolveRectLike)(u.offset, r, i, [n]);
          ((e = (0, A.rectToXY)(c) || { x: 0, y: 0 }).x += l.x), (e.y += l.y);
        }
        var f = u.relativePoints;
        a.offsets =
          o && f && f.length
            ? f.map(function (t, n) {
                return {
                  index: n,
                  relativePoint: t,
                  x: s.left - o.width * t.x + e.x,
                  y: s.top - o.height * t.y + e.y,
                };
              })
            : [(0, k.default)({ index: 0, relativePoint: null }, e)];
      },
      set: function (t) {
        var e = t.interaction,
          n = t.coords,
          r = t.state,
          i = r.options,
          a = r.offsets,
          s = (0, I.default)(e.interactable, e.element, e.prepared.name),
          u = (0, k.default)({}, n),
          l = [];
        i.offsetWithOrigin || ((u.x -= s.x), (u.y -= s.y));
        for (var c = 0; c < a.length; c++)
          for (
            var f = a[c],
              d = u.x - f.x,
              p = u.y - f.y,
              h = 0,
              v = i.targets.length;
            h < v;
            h++
          ) {
            var g,
              m = i.targets[h];
            (g = o.default.func(m) ? m(d, p, e._proxy, f, h) : m) &&
              l.push({
                x: (o.default.number(g.x) ? g.x : d) + f.x,
                y: (o.default.number(g.y) ? g.y : p) + f.y,
                range: o.default.number(g.range) ? g.range : i.range,
                source: m,
                index: h,
                offset: f,
              });
          }
        for (
          var y = {
              target: null,
              inRange: !1,
              distance: 0,
              range: 0,
              delta: { x: 0, y: 0 },
            },
            _ = 0;
          _ < l.length;
          _++
        ) {
          var b = l[_],
            x = b.range,
            w = b.x - u.x,
            T = b.y - u.y,
            S = (0, R.default)(w, T),
            O = S <= x;
          x === 1 / 0 && y.inRange && y.range !== 1 / 0 && (O = !1),
            (y.target &&
              !(O
                ? y.inRange && x !== 1 / 0
                  ? S / x < y.distance / y.range
                  : (x === 1 / 0 && y.range !== 1 / 0) || S < y.distance
                : !y.inRange && S < y.distance)) ||
              ((y.target = b),
              (y.distance = S),
              (y.range = x),
              (y.inRange = O),
              (y.delta.x = w),
              (y.delta.y = T));
        }
        return (
          y.inRange && ((n.x = y.target.x), (n.y = y.target.y)),
          (r.closest = y),
          y
        );
      },
      defaults: {
        range: 1 / 0,
        targets: null,
        offset: null,
        offsetWithOrigin: !0,
        origin: null,
        relativePoints: null,
        endOnly: !1,
        enabled: !1,
      },
    };
    Xr.snap = qr;
    var Nr = (0, Se.makeModifier)(qr, "snap");
    Xr.default = Nr;
    var Hr = {};
    function Ur(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    Object.defineProperty(Hr, "__esModule", { value: !0 }),
      (Hr.snapSize = Hr.default = void 0);
    var Wr = {
      start: function (t) {
        var e = t.state,
          n = t.edges,
          r = e.options;
        if (!n) return null;
        (t.state = {
          options: {
            targets: null,
            relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }],
            offset: r.offset || "self",
            origin: { x: 0, y: 0 },
            range: r.range,
          },
        }),
          (e.targetFields = e.targetFields || [
            ["width", "height"],
            ["x", "y"],
          ]),
          Xr.snap.start(t),
          (e.offsets = t.state.offsets),
          (t.state = e);
      },
      set: function (t) {
        var e,
          n = t.interaction,
          r = t.state,
          i = t.coords,
          a = r.options,
          s = r.offsets,
          u = { x: i.x - s[0].x, y: i.y - s[0].y };
        (r.options = (0, k.default)({}, a)), (r.options.targets = []);
        for (var l = 0; l < (a.targets || []).length; l++) {
          var c = (a.targets || [])[l],
            f = void 0;
          if ((f = o.default.func(c) ? c(u.x, u.y, n) : c)) {
            for (var d = 0; d < r.targetFields.length; d++) {
              var p =
                  (2,
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((e = r.targetFields[d])) ||
                    (function (t, e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      ) {
                        var n = [],
                          r = !0,
                          i = !1,
                          o = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), 2 !== n.length);
                            r = !0
                          );
                        } catch (t) {
                          (i = !0), (o = t);
                        } finally {
                          try {
                            r || null == s.return || s.return();
                          } finally {
                            if (i) throw o;
                          }
                        }
                        return n;
                      }
                    })(e) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return Ur(t, 2);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Ur(t, 2)
                            : void 0
                        );
                      }
                    })(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()),
                h = p[0],
                v = p[1];
              if (h in f || v in f) {
                (f.x = f[h]), (f.y = f[v]);
                break;
              }
            }
            r.options.targets.push(f);
          }
        }
        var g = Xr.snap.set(t);
        return (r.options = a), g;
      },
      defaults: {
        range: 1 / 0,
        targets: null,
        offset: null,
        endOnly: !1,
        enabled: !1,
      },
    };
    Hr.snapSize = Wr;
    var Vr = (0, Se.makeModifier)(Wr, "snapSize");
    Hr.default = Vr;
    var Gr = {};
    Object.defineProperty(Gr, "__esModule", { value: !0 }),
      (Gr.snapEdges = Gr.default = void 0);
    var $r = {
      start: function (t) {
        var e = t.edges;
        return e
          ? ((t.state.targetFields = t.state.targetFields || [
              [e.left ? "left" : "right", e.top ? "top" : "bottom"],
            ]),
            Hr.snapSize.start(t))
          : null;
      },
      set: Hr.snapSize.set,
      defaults: (0, k.default)((0, me.default)(Hr.snapSize.defaults), {
        targets: null,
        range: null,
        offset: { x: 0, y: 0 },
      }),
    };
    Gr.snapEdges = $r;
    var Zr = (0, Se.makeModifier)($r, "snapEdges");
    Gr.default = Zr;
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: !0 }),
      Object.defineProperty(Kr, "default", {
        enumerable: !0,
        get: function () {
          return mr.default;
        },
      });
    var Qr = {};
    Object.defineProperty(Qr, "__esModule", { value: !0 }),
      Object.defineProperty(Qr, "default", {
        enumerable: !0,
        get: function () {
          return mr.default;
        },
      });
    var Jr = {};
    Object.defineProperty(Jr, "__esModule", { value: !0 }),
      (Jr.default = void 0);
    var ti = {
      aspectRatio: lr.default,
      restrictEdges: Or.default,
      restrict: xr.default,
      restrictRect: jr.default,
      restrictSize: zr.default,
      snapEdges: Gr.default,
      snap: Xr.default,
      snapSize: Hr.default,
      spring: Kr.default,
      avoid: br.default,
      transform: Qr.default,
      rubberband: Yr.default,
    };
    Jr.default = ti;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: !0 }),
      (ei.default = void 0);
    var ni = {
      id: "modifiers",
      install: function (t) {
        var e = t.interactStatic;
        for (var n in (t.usePlugin(Se.default),
        t.usePlugin(sr.default),
        (e.modifiers = Jr.default),
        Jr.default)) {
          var r = Jr.default[n],
            i = r._defaults,
            o = r._methods;
          (i._methods = o), (t.defaults.perAction[n] = i);
        }
      },
    };
    ei.default = ni;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: !0 }),
      (ri.default = void 0),
      (ri.default = {});
    var ii = {};
    function oi(t) {
      return (oi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ai(t, e) {
      return (ai =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function si(t, e) {
      return !e || ("object" !== oi(e) && "function" != typeof e) ? ui(t) : e;
    }
    function ui(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function li(t) {
      return (li = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    Object.defineProperty(ii, "__esModule", { value: !0 }),
      (ii.PointerEvent = ii.default = void 0);
    var ci = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && ai(t, e);
      })(o, t);
      var e,
        n,
        r,
        i =
          ((n = o),
          (r = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()),
          function () {
            var t,
              e = li(n);
            if (r) {
              var i = li(this).constructor;
              t = Reflect.construct(e, arguments, i);
            } else t = e.apply(this, arguments);
            return si(this, t);
          });
      function o(t, e, n, r, a, s) {
        var u;
        if (
          ((function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, o),
          ((u = i.call(this, a)).type = void 0),
          (u.originalEvent = void 0),
          (u.pointerId = void 0),
          (u.pointerType = void 0),
          (u.double = void 0),
          (u.pageX = void 0),
          (u.pageY = void 0),
          (u.clientX = void 0),
          (u.clientY = void 0),
          (u.dt = void 0),
          (u.eventable = void 0),
          Y.pointerExtend(ui(u), n),
          n !== e && Y.pointerExtend(ui(u), e),
          (u.timeStamp = s),
          (u.originalEvent = n),
          (u.type = t),
          (u.pointerId = Y.getPointerId(e)),
          (u.pointerType = Y.getPointerType(e)),
          (u.target = r),
          (u.currentTarget = null),
          "tap" === t)
        ) {
          var l = a.getPointerIndex(e);
          u.dt = u.timeStamp - a.pointers[l].downTime;
          var c = u.timeStamp - a.tapTime;
          u.double = !!(
            a.prevTap &&
            "doubletap" !== a.prevTap.type &&
            a.prevTap.target === u.target &&
            c < 500
          );
        } else "doubletap" === t && (u.dt = e.timeStamp - a.tapTime);
        return u;
      }
      return (
        (e = [
          {
            key: "_subtractOrigin",
            value: function (t) {
              var e = t.x,
                n = t.y;
              return (
                (this.pageX -= e),
                (this.pageY -= n),
                (this.clientX -= e),
                (this.clientY -= n),
                this
              );
            },
          },
          {
            key: "_addOrigin",
            value: function (t) {
              var e = t.x,
                n = t.y;
              return (
                (this.pageX += e),
                (this.pageY += n),
                (this.clientX += e),
                (this.clientY += n),
                this
              );
            },
          },
          {
            key: "preventDefault",
            value: function () {
              this.originalEvent.preventDefault();
            },
          },
        ]) &&
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(o.prototype, e),
        o
      );
    })(V.BaseEvent);
    ii.PointerEvent = ii.default = ci;
    var fi = {};
    Object.defineProperty(fi, "__esModule", { value: !0 }),
      (fi.default = void 0);
    var di = {
      id: "pointer-events/base",
      before: ["inertia", "modifiers", "auto-start", "actions"],
      install: function (t) {
        (t.pointerEvents = di),
          (t.defaults.actions.pointerEvents = di.defaults),
          (0, k.default)(t.actions.phaselessTypes, di.types);
      },
      listeners: {
        "interactions:new": function (t) {
          var e = t.interaction;
          (e.prevTap = null), (e.tapTime = 0);
        },
        "interactions:update-pointer": function (t) {
          var e = t.down,
            n = t.pointerInfo;
          (!e && n.hold) || (n.hold = { duration: 1 / 0, timeout: null });
        },
        "interactions:move": function (t, e) {
          var n = t.interaction,
            r = t.pointer,
            i = t.event,
            o = t.eventTarget;
          t.duplicate ||
            (n.pointerIsDown && !n.pointerWasMoved) ||
            (n.pointerIsDown && vi(t),
            pi(
              {
                interaction: n,
                pointer: r,
                event: i,
                eventTarget: o,
                type: "move",
              },
              e
            ));
        },
        "interactions:down": function (t, e) {
          !(function (t, e) {
            for (
              var n = t.interaction,
                r = t.pointer,
                i = t.event,
                o = t.eventTarget,
                a = t.pointerIndex,
                s = n.pointers[a].hold,
                u = w.getPath(o),
                l = {
                  interaction: n,
                  pointer: r,
                  event: i,
                  eventTarget: o,
                  type: "hold",
                  targets: [],
                  path: u,
                  node: null,
                },
                c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c];
              (l.node = f), e.fire("pointerEvents:collect-targets", l);
            }
            if (l.targets.length) {
              for (var d = 1 / 0, p = 0; p < l.targets.length; p++) {
                var h = l.targets[p].eventable.options.holdDuration;
                h < d && (d = h);
              }
              (s.duration = d),
                (s.timeout = setTimeout(function () {
                  pi(
                    {
                      interaction: n,
                      eventTarget: o,
                      pointer: r,
                      event: i,
                      type: "hold",
                    },
                    e
                  );
                }, d));
            }
          })(t, e),
            pi(t, e);
        },
        "interactions:up": function (t, e) {
          vi(t),
            pi(t, e),
            (function (t, e) {
              var n = t.interaction,
                r = t.pointer,
                i = t.event,
                o = t.eventTarget;
              n.pointerWasMoved ||
                pi(
                  {
                    interaction: n,
                    eventTarget: o,
                    pointer: r,
                    event: i,
                    type: "tap",
                  },
                  e
                );
            })(t, e);
        },
        "interactions:cancel": function (t, e) {
          vi(t), pi(t, e);
        },
      },
      PointerEvent: ii.PointerEvent,
      fire: pi,
      collectEventTargets: hi,
      defaults: {
        holdDuration: 600,
        ignoreFrom: null,
        allowFrom: null,
        origin: { x: 0, y: 0 },
      },
      types: {
        down: !0,
        move: !0,
        up: !0,
        cancel: !0,
        tap: !0,
        doubletap: !0,
        hold: !0,
      },
    };
    function pi(t, e) {
      var n = t.interaction,
        r = t.pointer,
        i = t.event,
        o = t.eventTarget,
        a = t.type,
        s = t.targets,
        u = void 0 === s ? hi(t, e) : s,
        l = new ii.PointerEvent(a, r, i, o, n, e.now());
      e.fire("pointerEvents:new", { pointerEvent: l });
      for (
        var c = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            targets: u,
            type: a,
            pointerEvent: l,
          },
          f = 0;
        f < u.length;
        f++
      ) {
        var d = u[f];
        for (var p in d.props || {}) l[p] = d.props[p];
        var h = (0, I.default)(d.eventable, d.node);
        if (
          (l._subtractOrigin(h),
          (l.eventable = d.eventable),
          (l.currentTarget = d.node),
          d.eventable.fire(l),
          l._addOrigin(h),
          l.immediatePropagationStopped ||
            (l.propagationStopped &&
              f + 1 < u.length &&
              u[f + 1].node !== l.currentTarget))
        )
          break;
      }
      if ((e.fire("pointerEvents:fired", c), "tap" === a)) {
        var v = l.double
          ? pi(
              {
                interaction: n,
                pointer: r,
                event: i,
                eventTarget: o,
                type: "doubletap",
              },
              e
            )
          : l;
        (n.prevTap = v), (n.tapTime = v.timeStamp);
      }
      return l;
    }
    function hi(t, e) {
      var n = t.interaction,
        r = t.pointer,
        i = t.event,
        o = t.eventTarget,
        a = t.type,
        s = n.getPointerIndex(r),
        u = n.pointers[s];
      if ("tap" === a && (n.pointerWasMoved || !u || u.downTarget !== o))
        return [];
      for (
        var l = w.getPath(o),
          c = {
            interaction: n,
            pointer: r,
            event: i,
            eventTarget: o,
            type: a,
            path: l,
            targets: [],
            node: null,
          },
          f = 0;
        f < l.length;
        f++
      ) {
        var d = l[f];
        (c.node = d), e.fire("pointerEvents:collect-targets", c);
      }
      return (
        "hold" === a &&
          (c.targets = c.targets.filter(function (t) {
            return (
              t.eventable.options.holdDuration === n.pointers[s].hold.duration
            );
          })),
        c.targets
      );
    }
    function vi(t) {
      var e = t.interaction,
        n = t.pointerIndex,
        r = e.pointers[n].hold;
      r && r.timeout && (clearTimeout(r.timeout), (r.timeout = null));
    }
    var gi = di;
    fi.default = gi;
    var mi = {};
    function yi(t) {
      var e = t.interaction;
      e.holdIntervalHandle &&
        (clearInterval(e.holdIntervalHandle), (e.holdIntervalHandle = null));
    }
    Object.defineProperty(mi, "__esModule", { value: !0 }),
      (mi.default = void 0);
    var _i = {
      id: "pointer-events/holdRepeat",
      install: function (t) {
        t.usePlugin(fi.default);
        var e = t.pointerEvents;
        (e.defaults.holdRepeatInterval = 0),
          (e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0);
      },
      listeners: ["move", "up", "cancel", "endall"].reduce(
        function (t, e) {
          return (t["pointerEvents:".concat(e)] = yi), t;
        },
        {
          "pointerEvents:new": function (t) {
            var e = t.pointerEvent;
            "hold" === e.type && (e.count = (e.count || 0) + 1);
          },
          "pointerEvents:fired": function (t, e) {
            var n = t.interaction,
              r = t.pointerEvent,
              i = t.eventTarget,
              o = t.targets;
            if ("hold" === r.type && o.length) {
              var a = o[0].eventable.options.holdRepeatInterval;
              a <= 0 ||
                (n.holdIntervalHandle = setTimeout(function () {
                  e.pointerEvents.fire(
                    {
                      interaction: n,
                      eventTarget: i,
                      type: "hold",
                      pointer: r,
                      event: r,
                    },
                    e
                  );
                }, a));
            }
          },
        }
      ),
    };
    mi.default = _i;
    var bi = {};
    function xi(t) {
      return (0, k.default)(this.events.options, t), this;
    }
    Object.defineProperty(bi, "__esModule", { value: !0 }),
      (bi.default = void 0);
    var wi = {
      id: "pointer-events/interactableTargets",
      install: function (t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = xi;
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function (t, e) {
          var r = n.call(this, t, e);
          return r === this && (this.events.options[t] = e), r;
        };
      },
      listeners: {
        "pointerEvents:collect-targets": function (t, e) {
          var n = t.targets,
            r = t.node,
            i = t.type,
            o = t.eventTarget;
          e.interactables.forEachMatch(r, function (t) {
            var e = t.events,
              a = e.options;
            e.types[i] &&
              e.types[i].length &&
              t.testIgnoreAllow(a, r, o) &&
              n.push({ node: r, eventable: e, props: { interactable: t } });
          });
        },
        "interactable:new": function (t) {
          var e = t.interactable;
          e.events.getRect = function (t) {
            return e.getRect(t);
          };
        },
        "interactable:set": function (t, e) {
          var n = t.interactable,
            r = t.options;
          (0, k.default)(n.events.options, e.pointerEvents.defaults),
            (0, k.default)(n.events.options, r.pointerEvents || {});
        },
      },
    };
    bi.default = wi;
    var Ti = {};
    Object.defineProperty(Ti, "__esModule", { value: !0 }),
      (Ti.default = void 0);
    var Si = {
      id: "pointer-events",
      install: function (t) {
        t.usePlugin(fi), t.usePlugin(mi.default), t.usePlugin(bi.default);
      },
    };
    Ti.default = Si;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: !0 }),
      (Oi.default = void 0),
      (Oi.default = {});
    var Pi = {};
    function Ei(t) {
      var e = t.Interactable;
      (t.actions.phases.reflow = !0),
        (e.prototype.reflow = function (e) {
          return (function (t, e, n) {
            for (
              var r = o.default.string(t.target)
                  ? $.from(t._context.querySelectorAll(t.target))
                  : [t.target],
                i = n.window.Promise,
                a = i ? [] : null,
                s = function () {
                  var o = r[u],
                    s = t.getRect(o);
                  if (!s) return "break";
                  var l = $.find(n.interactions.list, function (n) {
                      return (
                        n.interacting() &&
                        n.interactable === t &&
                        n.element === o &&
                        n.prepared.name === e.name
                      );
                    }),
                    c = void 0;
                  if (l)
                    l.move(),
                      a &&
                        (c =
                          l._reflowPromise ||
                          new i(function (t) {
                            l._reflowResolve = t;
                          }));
                  else {
                    var f = (0, A.tlbrToXywh)(s),
                      d = {
                        page: { x: f.x, y: f.y },
                        client: { x: f.x, y: f.y },
                        timeStamp: n.now(),
                      },
                      p = Y.coordsToEvent(d);
                    c = (function (t, e, n, r, i) {
                      var o = t.interactions.new({ pointerType: "reflow" }),
                        a = {
                          interaction: o,
                          event: i,
                          pointer: i,
                          eventTarget: n,
                          phase: "reflow",
                        };
                      (o.interactable = e),
                        (o.element = n),
                        (o.prevEvent = i),
                        o.updatePointer(i, i, n, !0),
                        Y.setZeroCoords(o.coords.delta),
                        (0, zt.copyAction)(o.prepared, r),
                        o._doPhase(a);
                      var s = t.window.Promise,
                        u = s
                          ? new s(function (t) {
                              o._reflowResolve = t;
                            })
                          : void 0;
                      return (
                        (o._reflowPromise = u),
                        o.start(r, e, n),
                        o._interacting
                          ? (o.move(a), o.end(i))
                          : (o.stop(), o._reflowResolve()),
                        o.removePointer(i, i),
                        u
                      );
                    })(n, t, o, e, p);
                  }
                  a && a.push(c);
                },
                u = 0;
              u < r.length && "break" !== s();
              u++
            );
            return (
              a &&
              i.all(a).then(function () {
                return t;
              })
            );
          })(this, e, t);
        });
    }
    Object.defineProperty(Pi, "__esModule", { value: !0 }),
      (Pi.install = Ei),
      (Pi.default = void 0);
    var Mi = {
      id: "reflow",
      install: Ei,
      listeners: {
        "interactions:stop": function (t, e) {
          var n = t.interaction;
          "reflow" === n.pointerType &&
            (n._reflowResolve && n._reflowResolve(),
            $.remove(e.interactions.list, n));
        },
      },
    };
    Pi.default = Mi;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: !0 }),
      (ki.default = void 0),
      (ki.default = {});
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: !0 }),
      (Ai.exchange = void 0),
      (Ai.exchange = {});
    var ji = {};
    Object.defineProperty(ji, "__esModule", { value: !0 }),
      (ji.default = void 0),
      (ji.default = {});
    var Di = { exports: {} };
    function Ii(t) {
      return (Ii =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    Object.defineProperty(Di.exports, "__esModule", { value: !0 }),
      (Di.exports.default = void 0),
      Zn.default.use(ri.default),
      Zn.default.use(ie.default),
      Zn.default.use(He.default),
      Zn.default.use(re.default),
      Zn.default.use(St.default),
      Zn.default.use(Ti.default),
      Zn.default.use(Ke.default),
      Zn.default.use(ei.default),
      Zn.default.use(ee.default),
      Zn.default.use(wt.default),
      Zn.default.use(At.default),
      Zn.default.use(Pi.default),
      Zn.default.use(ge.default),
      Zn.default.use(ji.default),
      Zn.default.use(Oi.default),
      (Zn.default.__utils = {
        exchange: Ai.exchange,
        displace: ki,
        pointer: Y,
      }),
      Zn.default.use(ce.default);
    var Ci = Zn.default;
    if (((Di.exports.default = Ci), "object" === Ii(Di) && Di))
      try {
        Di.exports = Zn.default;
      } catch (t) {}
    (Zn.default.default = Zn.default), (Di = Di.exports);
    var zi = { exports: {} };
    function Ri(t) {
      return (Ri =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    Object.defineProperty(zi.exports, "__esModule", { value: !0 }),
      (zi.exports.default = void 0);
    var Fi = Di.default;
    if (((zi.exports.default = Fi), "object" === Ri(zi) && zi))
      try {
        zi.exports = Di.default;
      } catch (t) {}
    return (Di.default.default = Di.default), zi.exports;
  });
  var l,
    c,
    f,
    d,
    p,
    h,
    v,
    g,
    m,
    y,
    _,
    b,
    x,
    w,
    T,
    S,
    O,
    P,
    E,
    M,
    k,
    A,
    j,
    D,
    I,
    C,
    z,
    R = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    F = { duration: 0.5, overwrite: !1, delay: 0 },
    L = 1e8,
    B = 1e-8,
    Y = 2 * Math.PI,
    X = Y / 4,
    q = 0,
    N = Math.sqrt,
    H = Math.cos,
    U = Math.sin,
    W = function (t) {
      return "string" == typeof t;
    },
    V = function (t) {
      return "function" == typeof t;
    },
    G = function (t) {
      return "number" == typeof t;
    },
    $ = function (t) {
      return void 0 === t;
    },
    Z = function (t) {
      return "object" == typeof t;
    },
    K = function (t) {
      return !1 !== t;
    },
    Q = function () {
      return "undefined" != typeof window;
    },
    J = function (t) {
      return V(t) || W(t);
    },
    tt =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    et = Array.isArray,
    nt = /(?:-?\.?\d|\.)+/gi,
    rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ot = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    at = /[+-]=-?[\.\d]+/,
    st = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    ut = {},
    lt = {},
    ct = function (t) {
      return (lt = Rt(t, ut)) && bn;
    },
    ft = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    dt = function (t, e) {
      return !e && console.warn(t);
    },
    pt = function (t, e) {
      return (t && (ut[t] = e) && lt && (lt[t] = e)) || ut;
    },
    ht = function () {
      return 0;
    },
    vt = {},
    gt = [],
    mt = {},
    yt = {},
    _t = {},
    bt = 30,
    xt = [],
    wt = "",
    Tt = function (t) {
      var e,
        n,
        r = t[0];
      if ((Z(r) || V(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (n = xt.length; n-- && !xt[n].targetTest(r); );
        e = xt[n];
      }
      for (n = t.length; n--; )
        (t[n] && (t[n]._gsap || (t[n]._gsap = new He(t[n], e)))) ||
          t.splice(n, 1);
      return t;
    },
    St = function (t) {
      return t._gsap || Tt(le(t))[0]._gsap;
    },
    Ot = function (t, e, n) {
      return (n = t[e]) && V(n)
        ? t[e]()
        : ($(n) && t.getAttribute && t.getAttribute(e)) || n;
    },
    Pt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    Et = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Mt = function (t, e) {
      for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
      return r < n;
    },
    kt = function (t, e, n) {
      var r,
        i = G(t[1]),
        o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[o];
      if ((i && (a.duration = t[1]), (a.parent = n), e)) {
        for (r = a; n && !("immediateRender" in r); )
          (r = n.vars.defaults || {}), (n = K(n.vars.inherit) && n.parent);
        (a.immediateRender = K(r.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[o - 1]);
      }
      return a;
    },
    At = function () {
      var t,
        e,
        n = gt.length,
        r = gt.slice(0);
      for (mt = {}, gt.length = 0, t = 0; t < n; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    jt = function (t, e, n, r) {
      gt.length && At(), t.render(e, n, r), gt.length && At();
    },
    Dt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(st).length < 2
        ? e
        : W(t)
        ? t.trim()
        : t;
    },
    It = function (t) {
      return t;
    },
    Ct = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    zt = function (t, e) {
      for (var n in e)
        n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
    },
    Rt = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    Ft = function t(e, n) {
      for (var r in n) e[r] = Z(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r];
      return e;
    },
    Lt = function (t, e) {
      var n,
        r = {};
      for (n in t) n in e || (r[n] = t[n]);
      return r;
    },
    Bt = function (t) {
      var e = t.parent || l,
        n = t.keyframes ? zt : Ct;
      if (K(t.inherit))
        for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    Yt = function (t, e, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i = e._prev,
        o = e._next;
      i ? (i._next = o) : t[n] === e && (t[n] = o),
        o ? (o._prev = i) : t[r] === e && (t[r] = i),
        (e._next = e._prev = e.parent = null);
    },
    Xt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    qt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
      return t;
    },
    Nt = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Ht = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Ut = function (t) {
      return t._repeat ? Wt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Wt = function (t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    Vt = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Gt = function (t) {
      return (t._end = Et(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0)
      ));
    },
    $t = function (t, e) {
      var n = t._dp;
      return (
        n &&
          n.smoothChildTiming &&
          t._ts &&
          ((t._start = Et(
            t._dp._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Gt(t),
          n._dirty || qt(n, t)),
        t
      );
    },
    Zt = function (t, e) {
      var n;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((n = Vt(t.rawTime(), e)),
          (!e._dur || oe(0, e.totalDuration(), n) - e._tTime > B) &&
            e.render(n, !0)),
        qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (n = t; n._dp; )
            n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        t._zTime = -1e-8;
      }
    },
    Kt = function (t, e, n, r) {
      return (
        e.parent && Xt(e),
        (e._start = Et(n + e._delay)),
        (e._end = Et(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        (function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o,
            a = t[r];
          if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
          a
            ? ((e._next = a._next), (a._next = e))
            : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = a),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        r || Zt(t, e),
        t
      );
    },
    Qt = function (t, e) {
      return (
        (ut.ScrollTrigger || ft("scrollTrigger", e)) &&
        ut.ScrollTrigger.create(e, t)
      );
    },
    Jt = function (t, e, n, r) {
      return (
        Ke(t, e),
        t._initted
          ? !n &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            h !== je.frame
            ? (gt.push(t), (t._lazy = [e, r]), 1)
            : void 0
          : 1
      );
    },
    te = function (t, e, n, r) {
      var i = t._repeat,
        o = Et(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = i ? (i < 0 ? 1e10 : Et(o * (i + 1) + t._rDelay * i)) : o),
        a && !r ? $t(t, (t._tTime = t._tDur * a)) : t.parent && Gt(t),
        n || qt(t.parent, t),
        t
      );
    },
    ee = function (t) {
      return t instanceof We ? qt(t) : te(t, t._dur);
    },
    ne = { _start: 0, endTime: ht },
    re = function t(e, n) {
      var r,
        i,
        o = e.labels,
        a = e._recent || ne,
        s = e.duration() >= L ? a.endTime(!1) : e._dur;
      return W(n) && (isNaN(n) || n in o)
        ? "<" === (r = n.charAt(0)) || ">" === r
          ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) +
            (parseFloat(n.substr(1)) || 0)
          : (r = n.indexOf("=")) < 0
          ? (n in o || (o[n] = s), o[n])
          : ((i = +(n.charAt(r - 1) + n.substr(r + 1))),
            r > 1 ? t(e, n.substr(0, r - 1)) + i : s + i)
        : null == n
        ? s
        : +n;
    },
    ie = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    oe = function (t, e, n) {
      return n < t ? t : n > e ? e : n;
    },
    ae = function (t) {
      return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
        ? t
        : "";
    },
    se = [].slice,
    ue = function (t, e) {
      return (
        t &&
        Z(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && Z(t[0]))) &&
        !t.nodeType &&
        t !== c
      );
    },
    le = function (t, e) {
      return !W(t) || e || (!f && De())
        ? et(t)
          ? (function (t, e, n) {
              return (
                void 0 === n && (n = []),
                t.forEach(function (t) {
                  var r;
                  return (W(t) && !e) || ue(t, 1)
                    ? (r = n).push.apply(r, le(t))
                    : n.push(t);
                }) || n
              );
            })(t, e)
          : ue(t)
          ? se.call(t, 0)
          : t
          ? [t]
          : []
        : se.call(d.querySelectorAll(t), 0);
    },
    ce = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    fe = function (t) {
      if (V(t)) return t;
      var e = Z(t) ? t : { each: t },
        n = Be(e.ease),
        r = e.from || 0,
        i = parseFloat(e.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        s = isNaN(r) || a,
        u = e.axis,
        l = r,
        c = r;
      return (
        W(r)
          ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && s && ((l = r[0]), (c = r[1])),
        function (t, a, f) {
          var d,
            p,
            h,
            v,
            g,
            m,
            y,
            _,
            b,
            x = (f || e).length,
            w = o[x];
          if (!w) {
            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, L])[1])) {
              for (
                y = -1e8;
                y < (y = f[b++].getBoundingClientRect().left) && b < x;

              );
              b--;
            }
            for (
              w = o[x] = [],
                d = s ? Math.min(b, x) * l - 0.5 : r % b,
                p = s ? (x * c) / b - 0.5 : (r / b) | 0,
                y = 0,
                _ = L,
                m = 0;
              m < x;
              m++
            )
              (h = (m % b) - d),
                (v = p - ((m / b) | 0)),
                (w[m] = g = u ? Math.abs("y" === u ? v : h) : N(h * h + v * v)),
                g > y && (y = g),
                g < _ && (_ = g);
            "random" === r && ce(w),
              (w.max = y - _),
              (w.min = _),
              (w.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (b > x
                      ? x - 1
                      : u
                      ? "y" === u
                        ? x / b
                        : b
                      : Math.max(b, x / b)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (w.b = x < 0 ? i - x : i),
              (w.u = ae(e.amount || e.each) || 0),
              (n = n && x < 0 ? Fe(n) : n);
          }
          return (
            (x = (w[t] - w.min) / w.max || 0),
            Et(w.b + (n ? n(x) : x) * w.v) + w.u
          );
        }
      );
    },
    de = function (t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (n) {
        return (
          Math.floor(Math.round(parseFloat(n) / t) * t * e) / e +
          (G(n) ? 0 : ae(n))
        );
      };
    },
    pe = function (t, e) {
      var n,
        r,
        i = et(t);
      return (
        !i &&
          Z(t) &&
          ((n = i = t.radius || L),
          t.values
            ? ((t = le(t.values)), (r = !G(t[0])) && (n *= n))
            : (t = de(t.increment))),
        ie(
          e,
          i
            ? V(t)
              ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                }
              : function (e) {
                  for (
                    var i,
                      o,
                      a = parseFloat(r ? e.x : e),
                      s = parseFloat(r ? e.y : 0),
                      u = L,
                      l = 0,
                      c = t.length;
                    c--;

                  )
                    (i = r
                      ? (i = t[c].x - a) * i + (o = t[c].y - s) * o
                      : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                  return (
                    (l = !n || u <= n ? t[l] : e),
                    r || l === e || G(e) ? l : l + ae(e)
                  );
                }
            : de(t)
        )
      );
    },
    he = function (t, e, n, r) {
      return ie(et(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
        return et(t)
          ? t[~~(Math.random() * t.length)]
          : (n = n || 1e-5) &&
              (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
              Math.floor(
                Math.round((t + Math.random() * (e - t)) / n) * n * r
              ) / r;
      });
    },
    ve = function (t, e, n) {
      return ie(n, function (n) {
        return t[~~e(n)];
      });
    },
    ge = function (t) {
      for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
        (r = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (n = t.substr(e + 7, r - e - 7).match(i ? st : nt)),
          (a +=
            t.substr(o, e - o) +
            he(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
          (o = r + 1);
      return a + t.substr(o, t.length - o);
    },
    me = function (t, e, n, r, i) {
      var o = e - t,
        a = r - n;
      return ie(i, function (e) {
        return n + (((e - t) / o) * a || 0);
      });
    },
    ye = function (t, e, n) {
      var r,
        i,
        o,
        a = t.labels,
        s = L;
      for (r in a)
        (i = a[r] - e) < 0 == !!n &&
          i &&
          s > (i = Math.abs(i)) &&
          ((o = r), (s = i));
      return o;
    },
    _e = function (t, e, n) {
      var r,
        i,
        o = t.vars,
        a = o[e];
      if (a)
        return (
          (r = o[e + "Params"]),
          (i = o.callbackScope || t),
          n && gt.length && At(),
          r ? a.apply(i, r) : a.call(i)
        );
    },
    be = function (t) {
      return Xt(t), t.progress() < 1 && _e(t, "onInterrupt"), t;
    },
    xe = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        n = V(t),
        r =
          e && !n && t.init
            ? function () {
                this._props = [];
              }
            : t,
        i = {
          init: ht,
          render: fn,
          add: $e,
          kill: pn,
          modifier: dn,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: sn, aliases: {}, register: 0 };
      if ((De(), t !== r)) {
        if (yt[e]) return;
        Ct(r, Ct(Lt(t, i), o)),
          Rt(r.prototype, Rt(i, Lt(t, o))),
          (yt[(r.prop = e)] = r),
          t.targetTest && (xt.push(r), (vt[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      pt(e, r), t.register && t.register(bn, r, gn);
    },
    we = 255,
    Te = {
      aqua: [0, we, we],
      lime: [0, we, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, we],
      navy: [0, 0, 128],
      white: [we, we, we],
      olive: [128, 128, 0],
      yellow: [we, we, 0],
      orange: [we, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [we, 0, 0],
      pink: [we, 192, 203],
      cyan: [0, we, we],
      transparent: [we, we, we, 0],
    },
    Se = function (t, e, n) {
      return (
        ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (n - e) * t * 6
          : t < 0.5
          ? n
          : 3 * t < 2
          ? e + (n - e) * (2 / 3 - t) * 6
          : e) *
          we +
          0.5) |
        0
      );
    },
    Oe = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p = t ? (G(t) ? [t >> 16, (t >> 8) & we, t & we] : 0) : Te.black;
      if (!p) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]))
          p = Te[t];
        else if ("#" === t.charAt(0))
          4 === t.length &&
            ((r = t.charAt(1)),
            (i = t.charAt(2)),
            (o = t.charAt(3)),
            (t = "#" + r + r + i + i + o + o)),
            (p = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & we,
              t & we,
            ]);
        else if ("hsl" === t.substr(0, 3))
          if (((p = d = t.match(nt)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(rt)), n && p.length < 4 && (p[3] = 1), p;
          } else
            (a = (+p[0] % 360) / 360),
              (s = +p[1] / 100),
              (r =
                2 * (u = +p[2] / 100) -
                (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = Se(a + 1 / 3, r, i)),
              (p[1] = Se(a, r, i)),
              (p[2] = Se(a - 1 / 3, r, i));
        else p = t.match(nt) || Te.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !d &&
          ((r = p[0] / we),
          (i = p[1] / we),
          (o = p[2] / we),
          (u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
          l === c
            ? (a = s = 0)
            : ((f = l - c),
              (s = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
              (a =
                l === r
                  ? (i - o) / f + (i < o ? 6 : 0)
                  : l === i
                  ? (o - r) / f + 2
                  : (r - i) / f + 4),
              (a *= 60)),
          (p[0] = ~~(a + 0.5)),
          (p[1] = ~~(100 * s + 0.5)),
          (p[2] = ~~(100 * u + 0.5))),
        n && p.length < 4 && (p[3] = 1),
        p
      );
    },
    Pe = function (t) {
      var e = [],
        n = [],
        r = -1;
      return (
        t.split(Me).forEach(function (t) {
          var i = t.match(it) || [];
          e.push.apply(e, i), n.push((r += i.length + 1));
        }),
        (e.c = n),
        e
      );
    },
    Ee = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s = "",
        u = (t + s).match(Me),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = Oe(t, e, 1)) &&
            l +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        n && ((o = Pe(t)), (r = n.c).join(s) !== o.c.join(s)))
      )
        for (a = (i = t.replace(Me, "1").split(it)).length - 1; c < a; c++)
          s +=
            i[c] +
            (~r.indexOf(c)
              ? u.shift() || l + "0,0,0,0)"
              : (o.length ? o : u.length ? u : n).shift());
      if (!i)
        for (a = (i = t.split(Me)).length - 1; c < a; c++) s += i[c] + u[c];
      return s + i[a];
    },
    Me = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in Te) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    ke = /hsl[a]?\(/,
    Ae = function (t) {
      var e,
        n = t.join(" ");
      if (((Me.lastIndex = 0), Me.test(n)))
        return (
          (e = ke.test(n)),
          (t[1] = Ee(t[1], e)),
          (t[0] = Ee(t[0], e, Pe(t[1]))),
          !0
        );
    },
    je =
      ((T = Date.now),
      (S = 500),
      (O = 33),
      (P = T()),
      (E = P),
      (k = M = 1e3 / 240),
      (j = function t(e) {
        var n,
          r,
          i,
          o,
          a = T() - E,
          s = !0 === e;
        if (
          (a > S && (P += a - O),
          ((n = (i = (E += a) - P) - k) > 0 || s) &&
            ((o = ++b.frame),
            (x = i - 1e3 * b.time),
            (b.time = i /= 1e3),
            (k += n + (n >= M ? 4 : M - n)),
            (r = 1)),
          s || (m = y(t)),
          r)
        )
          for (w = 0; w < A.length; w++) A[w](i, x, o, e);
      }),
      (b = {
        time: 0,
        frame: 0,
        tick: function () {
          j(!0);
        },
        deltaRatio: function (t) {
          return x / (1e3 / (t || 60));
        },
        wake: function () {
          p &&
            (!f &&
              Q() &&
              ((c = f = window),
              (d = c.document || {}),
              (ut.gsap = bn),
              (c.gsapVersions || (c.gsapVersions = [])).push(bn.version),
              ct(lt || c.GreenSockGlobals || (!c.gsap && c) || {}),
              (_ = c.requestAnimationFrame)),
            m && b.sleep(),
            (y =
              _ ||
              function (t) {
                return setTimeout(t, (k - 1e3 * b.time + 1) | 0);
              }),
            (g = 1),
            j(2));
        },
        sleep: function () {
          (_ ? c.cancelAnimationFrame : clearTimeout)(m), (g = 0), (y = ht);
        },
        lagSmoothing: function (t, e) {
          (S = t || 1e8), (O = Math.min(e, S, 0));
        },
        fps: function (t) {
          (M = 1e3 / (t || 240)), (k = 1e3 * b.time + M);
        },
        add: function (t) {
          A.indexOf(t) < 0 && A.push(t), De();
        },
        remove: function (t) {
          var e;
          ~(e = A.indexOf(t)) && A.splice(e, 1) && w >= e && w--;
        },
        _listeners: (A = []),
      })),
    De = function () {
      return !g && je.wake();
    },
    Ie = {},
    Ce = /^[\d.\-M][\d.\-,\s]/,
    ze = /["']/g,
    Re = function (t) {
      for (
        var e,
          n,
          r,
          i = {},
          o = t.substr(1, t.length - 3).split(":"),
          a = o[0],
          s = 1,
          u = o.length;
        s < u;
        s++
      )
        (n = o[s]),
          (e = s !== u - 1 ? n.lastIndexOf(",") : n.length),
          (r = n.substr(0, e)),
          (i[a] = isNaN(r) ? r.replace(ze, "").trim() : +r),
          (a = n.substr(e + 1).trim());
      return i;
    },
    Fe = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Le = function t(e, n) {
      for (var r, i = e._first; i; )
        i instanceof We
          ? t(i, n)
          : !i.vars.yoyoEase ||
            (i._yoyo && i._repeat) ||
            i._yoyo === n ||
            (i.timeline
              ? t(i.timeline, n)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = n))),
          (i = i._next);
    },
    Be = function (t, e) {
      return (
        (t &&
          (V(t)
            ? t
            : Ie[t] ||
              (function (t) {
                var e,
                  n,
                  r,
                  i,
                  o = (t + "").split("("),
                  a = Ie[o[0]];
                return a && o.length > 1 && a.config
                  ? a.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [Re(o[1])]
                        : ((e = t),
                          (n = e.indexOf("(") + 1),
                          (r = e.indexOf(")")),
                          (i = e.indexOf("(", n)),
                          e.substring(
                            n,
                            ~i && i < r ? e.indexOf(")", r + 1) : r
                          ))
                            .split(",")
                            .map(Dt)
                    )
                  : Ie._CE && Ce.test(t)
                  ? Ie._CE("", t)
                  : a;
              })(t))) ||
        e
      );
    },
    Ye = function (t, e, n, r) {
      void 0 === n &&
        (n = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var i,
        o = { easeIn: e, easeOut: n, easeInOut: r };
      return (
        Pt(t, function (t) {
          for (var e in ((Ie[t] = ut[t] = o),
          (Ie[(i = t.toLowerCase())] = n),
          o))
            Ie[
              i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Ie[t + "." + e] = o[e];
        }),
        o
      );
    },
    Xe = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    qe = function t(e, n, r) {
      var i = n >= 1 ? n : 1,
        o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (o / Y) * (Math.asin(1 / i) || 0),
        s = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * U((t - a) * o) + 1;
        },
        u =
          "out" === e
            ? s
            : "in" === e
            ? function (t) {
                return 1 - s(1 - t);
              }
            : Xe(s);
      return (
        (o = Y / o),
        (u.config = function (n, r) {
          return t(e, n, r);
        }),
        u
      );
    },
    Ne = function t(e, n) {
      void 0 === n && (n = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
        },
        i =
          "out" === e
            ? r
            : "in" === e
            ? function (t) {
                return 1 - r(1 - t);
              }
            : Xe(r);
      return (
        (i.config = function (n) {
          return t(e, n);
        }),
        i
      );
    };
  Pt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Ye(
      t + ",Power" + (n - 1),
      e
        ? function (t) {
            return Math.pow(t, n);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, n);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, n) / 2
          : 1 - Math.pow(2 * (1 - t), n) / 2;
      }
    );
  }),
    (Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn),
    Ye("Elastic", qe("in"), qe("out"), qe()),
    (D = 7.5625),
    (C = 1 / (I = 2.75)),
    Ye(
      "Bounce",
      function (t) {
        return 1 - z(1 - t);
      },
      (z = function (t) {
        return t < C
          ? D * t * t
          : t < 0.7272727272727273
          ? D * Math.pow(t - 1.5 / I, 2) + 0.75
          : t < 0.9090909090909092
          ? D * (t -= 2.25 / I) * t + 0.9375
          : D * Math.pow(t - 2.625 / I, 2) + 0.984375;
      })
    ),
    Ye("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Ye("Circ", function (t) {
      return -(N(1 - t * t) - 1);
    }),
    Ye("Sine", function (t) {
      return 1 === t ? 1 : 1 - H(t * X);
    }),
    Ye("Back", Ne("in"), Ne("out"), Ne()),
    (Ie.SteppedEase =
      Ie.steps =
      ut.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
              r = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((r * oe(0, 0.99999999, t)) | 0) + i) * n;
            };
          },
        }),
    (F.ease = Ie["quad.out"]),
    Pt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (wt += t + "," + t + "Params,");
      }
    );
  var He = function (t, e) {
      (this.id = q++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Ot),
        (this.set = e ? e.getSetter : sn);
    },
    Ue = (function () {
      function t(t, e) {
        var n = t.parent || l;
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          te(this, +t.duration, 1, 1),
          (this.data = t.data),
          g || je.wake(),
          n && Kt(n, this, e || 0 === e ? e : n._time, 1),
          t.reversed && this.reverse(),
          t.paused && this.paused(!0);
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              te(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((De(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for ($t(this, t); n.parent; )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Kt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === B) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), jt(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Ut(this)) % this._dur ||
                  (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Ut(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * n, e)
            : this._repeat
            ? Wt(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Vt(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            Nt(this.totalTime(oe(-this._delay, this._tDur, e), !0))
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (De(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= B) &&
                        Math.abs(this._zTime) !== B
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Kt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (K(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Vt(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            (n = e._start + n / (e._ts || 1)), (e = e._dp);
          return n;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), ee(this))
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), ee(this))
            : this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(re(this, t), K(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, K(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            n = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= n &&
              t < this.endTime(!0) - B
            )
          );
        }),
        (e.eventCallback = function (t, e, n) {
          var r = this.vars;
          return arguments.length > 1
            ? (e
                ? ((r[t] = e),
                  n && (r[t + "Params"] = n),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete r[t],
              this)
            : r[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (n) {
            var r = V(t) ? t : It,
              i = function () {
                var t = e.then;
                (e.then = null),
                  V(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                  n(r),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? i()
              : (e._prom = i);
          });
        }),
        (e.kill = function () {
          be(this);
        }),
        t
      );
    })();
  Ct(Ue.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var We = (function (t) {
    function e(e, n) {
      var r;
      return (
        void 0 === e && (e = {}),
        ((r = t.call(this, e, n) || this).labels = {}),
        (r.smoothChildTiming = !!e.smoothChildTiming),
        (r.autoRemoveChildren = !!e.autoRemoveChildren),
        (r._sort = K(e.sortChildren)),
        r.parent && Zt(r.parent, s(r)),
        e.scrollTrigger && Qt(s(r), e.scrollTrigger),
        r
      );
    }
    u(e, t);
    var n = e.prototype;
    return (
      (n.to = function (t, e, n) {
        return (
          new en(t, kt(arguments, 0, this), re(this, G(e) ? arguments[3] : n)),
          this
        );
      }),
      (n.from = function (t, e, n) {
        return (
          new en(t, kt(arguments, 1, this), re(this, G(e) ? arguments[3] : n)),
          this
        );
      }),
      (n.fromTo = function (t, e, n, r) {
        return (
          new en(t, kt(arguments, 2, this), re(this, G(e) ? arguments[4] : r)),
          this
        );
      }),
      (n.set = function (t, e, n) {
        return (
          (e.duration = 0),
          (e.parent = this),
          Bt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new en(t, e, re(this, n), 1),
          this
        );
      }),
      (n.call = function (t, e, n) {
        return Kt(this, en.delayedCall(0, t, e), re(this, n));
      }),
      (n.staggerTo = function (t, e, n, r, i, o, a) {
        return (
          (n.duration = e),
          (n.stagger = n.stagger || r),
          (n.onComplete = o),
          (n.onCompleteParams = a),
          (n.parent = this),
          new en(t, n, re(this, i)),
          this
        );
      }),
      (n.staggerFrom = function (t, e, n, r, i, o, a) {
        return (
          (n.runBackwards = 1),
          (Bt(n).immediateRender = K(n.immediateRender)),
          this.staggerTo(t, e, n, r, i, o, a)
        );
      }),
      (n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
        return (
          (r.startAt = n),
          (Bt(r).immediateRender = K(r.immediateRender)),
          this.staggerTo(t, e, r, i, o, a, s)
        );
      }),
      (n.render = function (t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c,
          f,
          d,
          p,
          h,
          v,
          g = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          _ = this !== l && t > m - B && t >= 0 ? m : t < B ? 0 : t,
          b = this._zTime < 0 != t < 0 && (this._initted || !y);
        if (_ !== this._tTime || n || b) {
          if (
            (g !== this._time &&
              y &&
              ((_ += this._time - g), (t += this._time - g)),
            (r = _),
            (d = this._start),
            (u = !(f = this._ts)),
            b && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat &&
              ((h = this._yoyo),
              (s = y + this._rDelay),
              (r = Et(_ % s)),
              _ === m
                ? ((a = this._repeat), (r = y))
                : ((a = ~~(_ / s)) && a === _ / s && ((r = y), a--),
                  r > y && (r = y)),
              (p = Wt(this._tTime, s)),
              !g && this._tTime && p !== a && (p = a),
              h && 1 & a && ((r = y - r), (v = 1)),
              a !== p && !this._lock))
          ) {
            var x = h && 1 & p,
              w = x === (h && 1 & a);
            if (
              (a < p && (x = !x),
              (g = x ? 0 : y),
              (this._lock = 1),
              (this.render(g || (v ? 0 : Et(a * s)), e, !y)._lock = 0),
              !e && this.parent && _e(this, "onRepeat"),
              this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1),
              g !== this._time || u !== !this._ts)
            )
              return this;
            if (
              ((y = this._dur),
              (m = this._tDur),
              w &&
                ((this._lock = 2),
                (g = x ? y : -1e-4),
                this.render(g, !0),
                this.vars.repeatRefresh && !v && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            Le(this, v);
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (c = (function (t, e, n) {
                var r;
                if (n > e)
                  for (r = t._first; r && r._start <= n; ) {
                    if (!r._dur && "isPause" === r.data && r._start > e)
                      return r;
                    r = r._next;
                  }
                else
                  for (r = t._last; r && r._start >= n; ) {
                    if (!r._dur && "isPause" === r.data && r._start < e)
                      return r;
                    r = r._prev;
                  }
              })(this, Et(g), Et(r))) &&
              (_ -= r - (r = c._start)),
            (this._tTime = _),
            (this._time = r),
            (this._act = !f),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t)),
            !g && r && !e && _e(this, "onStart"),
            r >= g && t >= 0)
          )
            for (i = this._first; i; ) {
              if (
                ((o = i._next), (i._act || r >= i._start) && i._ts && c !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, n);
                if (
                  (i.render(
                    i._ts > 0
                      ? (r - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (r - i._start) * i._ts,
                    e,
                    n
                  ),
                  r !== this._time || (!this._ts && !u))
                ) {
                  (c = 0), o && (_ += this._zTime = -1e-8);
                  break;
                }
              }
              i = o;
            }
          else {
            i = this._last;
            for (var T = t < 0 ? t : r; i; ) {
              if (
                ((o = i._prev), (i._act || T <= i._end) && i._ts && c !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, n);
                if (
                  (i.render(
                    i._ts > 0
                      ? (T - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (T - i._start) * i._ts,
                    e,
                    n
                  ),
                  r !== this._time || (!this._ts && !u))
                ) {
                  (c = 0), o && (_ += this._zTime = T ? -1e-8 : B);
                  break;
                }
              }
              i = o;
            }
          }
          if (
            c &&
            !e &&
            (this.pause(),
            (c.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1),
            this._ts)
          )
            return (this._start = d), Gt(this), this.render(t, e, n);
          this._onUpdate && !e && _e(this, "onUpdate", !0),
            ((_ === m && m >= this.totalDuration()) || (!_ && g)) &&
              ((d !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !y) &&
                  ((_ === m && this._ts > 0) || (!_ && this._ts < 0)) &&
                  Xt(this, 1),
                e ||
                  (t < 0 && !g) ||
                  (!_ && !g) ||
                  (_e(this, _ === m ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(_ < m && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (n.add = function (t, e) {
        var n = this;
        if ((G(e) || (e = re(this, e)), !(t instanceof Ue))) {
          if (et(t))
            return (
              t.forEach(function (t) {
                return n.add(t, e);
              }),
              this
            );
          if (W(t)) return this.addLabel(t, e);
          if (!V(t)) return this;
          t = en.delayedCall(0, t);
        }
        return this !== t ? Kt(this, t, e) : this;
      }),
      (n.getChildren = function (t, e, n, r) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === n && (n = !0),
          void 0 === r && (r = -1e8);
        for (var i = [], o = this._first; o; )
          o._start >= r &&
            (o instanceof en
              ? e && i.push(o)
              : (n && i.push(o),
                t && i.push.apply(i, o.getChildren(!0, e, n)))),
            (o = o._next);
        return i;
      }),
      (n.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
          if (e[n].vars.id === t) return e[n];
      }),
      (n.remove = function (t) {
        return W(t)
          ? this.removeLabel(t)
          : V(t)
          ? this.killTweensOf(t)
          : (Yt(this, t),
            t === this._recent && (this._recent = this._last),
            qt(this));
      }),
      (n.totalTime = function (e, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Et(
                je.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (n.addLabel = function (t, e) {
        return (this.labels[t] = re(this, e)), this;
      }),
      (n.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (n.addPause = function (t, e, n) {
        var r = en.delayedCall(0, e || ht, n);
        return (
          (r.data = "isPause"), (this._hasPause = 1), Kt(this, r, re(this, t))
        );
      }),
      (n.removePause = function (t) {
        var e = this._first;
        for (t = re(this, t); e; )
          e._start === t && "isPause" === e.data && Xt(e), (e = e._next);
      }),
      (n.killTweensOf = function (t, e, n) {
        for (var r = this.getTweensOf(t, n), i = r.length; i--; )
          Ve !== r[i] && r[i].kill(t, e);
        return this;
      }),
      (n.getTweensOf = function (t, e) {
        for (var n, r = [], i = le(t), o = this._first, a = G(e); o; )
          o instanceof en
            ? Mt(o._targets, i) &&
              (a
                ? (!Ve || (o._initted && o._ts)) &&
                  o.globalTime(0) <= e &&
                  o.globalTime(o.totalDuration()) > e
                : !e || o.isActive()) &&
              r.push(o)
            : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
            (o = o._next);
        return r;
      }),
      (n.tweenTo = function (t, e) {
        e = e || {};
        var n = this,
          r = re(n, t),
          i = e,
          o = i.startAt,
          a = i.onStart,
          s = i.onStartParams,
          u = en.to(
            n,
            Ct(e, {
              ease: "none",
              lazy: !1,
              time: r,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (r - (o && "time" in o ? o.time : n._time)) / n.timeScale()
                ) ||
                B,
              onStart: function () {
                n.pause();
                var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                u._dur !== t && te(u, t, 0, 1).render(u._time, !0, !0),
                  a && a.apply(u, s || []);
              },
            })
          );
        return u;
      }),
      (n.tweenFromTo = function (t, e, n) {
        return this.tweenTo(e, Ct({ startAt: { time: re(this, t) } }, n));
      }),
      (n.recent = function () {
        return this._recent;
      }),
      (n.nextLabel = function (t) {
        return void 0 === t && (t = this._time), ye(this, re(this, t));
      }),
      (n.previousLabel = function (t) {
        return void 0 === t && (t = this._time), ye(this, re(this, t), 1);
      }),
      (n.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + B);
      }),
      (n.shiftChildren = function (t, e, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, o = this.labels; i; )
          i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
        if (e) for (r in o) o[r] >= n && (o[r] += t);
        return qt(this);
      }),
      (n.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (n.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, n = this._first; n; )
          (e = n._next), this.remove(n), (n = e);
        return (
          (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          qt(this)
        );
      }),
      (n.totalDuration = function (t) {
        var e,
          n,
          r,
          i = 0,
          o = this,
          a = o._last,
          s = L;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -t : t)
          );
        if (o._dirty) {
          for (r = o.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              (n = a._start) > s && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (Kt(o, a, n - a._delay, 1)._lock = 0))
                : (s = n),
              n < 0 &&
                a._ts &&
                ((i -= n),
                ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                  ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
                o.shiftChildren(-n, !1, -Infinity),
                (s = 0)),
              a._end > i && a._ts && (i = a._end),
              (a = e);
          te(o, o === l && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (t) {
        if ((l._ts && (jt(l, Vt(t, l)), (h = je.frame)), je.frame >= bt)) {
          bt += R.autoSleep || 120;
          var e = l._first;
          if ((!e || !e._ts) && R.autoSleep && je._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || je.sleep();
          }
        }
      }),
      e
    );
  })(Ue);
  Ct(We.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ve,
    Ge = function (t, e, n, r, i, o, a) {
      var s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        v = new gn(this._pt, t, e, 0, 1, cn, null, i),
        g = 0,
        m = 0;
      for (
        v.b = n,
          v.e = r,
          n += "",
          (p = ~(r += "").indexOf("random(")) && (r = ge(r)),
          o && (o((h = [n, r]), t, e), (n = h[0]), (r = h[1])),
          u = n.match(ot) || [];
        (s = ot.exec(r));

      )
        (c = s[0]),
          (f = r.substring(g, s.index)),
          l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
          c !== u[m++] &&
            ((d = parseFloat(u[m - 1]) || 0),
            (v._pt = {
              _next: v._pt,
              p: f || 1 === m ? f : ",",
              s: d,
              c:
                "=" === c.charAt(1)
                  ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1)
                  : parseFloat(c) - d,
              m: l && l < 4 ? Math.round : 0,
            }),
            (g = ot.lastIndex));
      return (
        (v.c = g < r.length ? r.substring(g, r.length) : ""),
        (v.fp = a),
        (at.test(r) || p) && (v.e = 0),
        (this._pt = v),
        v
      );
    },
    $e = function (t, e, n, r, i, o, a, s, u) {
      V(r) && (r = r(i || 0, t, o));
      var l,
        c = t[e],
        f =
          "get" !== n
            ? n
            : V(c)
            ? u
              ? t[
                  e.indexOf("set") || !V(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : c,
        d = V(c) ? (u ? on : rn) : nn;
      if (
        (W(r) &&
          (~r.indexOf("random(") && (r = ge(r)),
          "=" === r.charAt(1) &&
            (r =
              parseFloat(f) +
              parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
              (ae(f) || 0))),
        f !== r)
      )
        return isNaN(f * r)
          ? (!c && !(e in t) && ft(e, r),
            Ge.call(this, t, e, f, r, d, s || R.stringFilter, u))
          : ((l = new gn(
              this._pt,
              t,
              e,
              +f || 0,
              r - (f || 0),
              "boolean" == typeof c ? ln : un,
              0,
              d
            )),
            u && (l.fp = u),
            a && l.modifier(a, this, t),
            (this._pt = l));
    },
    Ze = function (t, e, n, r, i, o) {
      var a, s, u, l;
      if (
        yt[t] &&
        !1 !==
          (a = new yt[t]()).init(
            i,
            a.rawVars
              ? e[t]
              : (function (t, e, n, r, i) {
                  if (
                    (V(t) && (t = Qe(t, i, e, n, r)),
                    !Z(t) || (t.style && t.nodeType) || et(t) || tt(t))
                  )
                    return W(t) ? Qe(t, i, e, n, r) : t;
                  var o,
                    a = {};
                  for (o in t) a[o] = Qe(t[o], i, e, n, r);
                  return a;
                })(e[t], r, i, o, n),
            n,
            r,
            o
          ) &&
        ((n._pt = s = new gn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
        n !== v)
      )
        for (u = n._ptLookup[n._targets.indexOf(i)], l = a._props.length; l--; )
          u[a._props[l]] = s;
      return a;
    },
    Ke = function t(e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        f,
        d,
        p,
        h,
        v,
        g,
        m = e.vars,
        y = m.ease,
        _ = m.startAt,
        b = m.immediateRender,
        x = m.lazy,
        w = m.onUpdate,
        T = m.onUpdateParams,
        S = m.callbackScope,
        O = m.runBackwards,
        P = m.yoyoEase,
        E = m.keyframes,
        M = m.autoRevert,
        k = e._dur,
        A = e._startAt,
        j = e._targets,
        D = e.parent,
        I = D && "nested" === D.data ? D.parent._targets : j,
        C = "auto" === e._overwrite,
        z = e.timeline;
      if (
        (z && (!E || !y) && (y = "none"),
        (e._ease = Be(y, F.ease)),
        (e._yEase = P ? Fe(Be(!0 === P ? y : P, F.ease)) : 0),
        P &&
          e._yoyo &&
          !e._repeat &&
          ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
        !z)
      ) {
        if (
          ((v = (f = j[0] ? St(j[0]).harness : 0) && m[f.prop]),
          (r = Lt(m, vt)),
          A && A.render(-1, !0).kill(),
          _)
        ) {
          if (
            (Xt(
              (e._startAt = en.set(
                j,
                Ct(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: K(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: T,
                    callbackScope: S,
                    stagger: 0,
                  },
                  _
                )
              ))
            ),
            b)
          )
            if (n > 0) M || (e._startAt = 0);
            else if (k && !(n < 0 && A)) return void (n && (e._zTime = n));
        } else if (O && k)
          if (A) !M && (e._startAt = 0);
          else if (
            (n && (b = !1),
            (o = Ct(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: b && K(x),
                immediateRender: b,
                stagger: 0,
                parent: D,
              },
              r
            )),
            v && (o[f.prop] = v),
            Xt((e._startAt = en.set(j, o))),
            b)
          ) {
            if (!n) return;
          } else t(e._startAt, B);
        for (
          e._pt = 0, x = (k && K(x)) || (x && !k), i = 0;
          i < j.length;
          i++
        ) {
          if (
            ((c = (s = j[i])._gsap || Tt(j)[i]._gsap),
            (e._ptLookup[i] = p = {}),
            mt[c.id] && gt.length && At(),
            (h = I === j ? i : I.indexOf(s)),
            f &&
              !1 !== (d = new f()).init(s, v || r, e, h, I) &&
              ((e._pt = a =
                new gn(e._pt, s, d.name, 0, 1, d.render, d, 0, d.priority)),
              d._props.forEach(function (t) {
                p[t] = a;
              }),
              d.priority && (u = 1)),
            !f || v)
          )
            for (o in r)
              yt[o] && (d = Ze(o, r, e, h, s, I))
                ? d.priority && (u = 1)
                : (p[o] = a =
                    $e.call(e, s, o, "get", r[o], h, I, 0, m.stringFilter));
          e._op && e._op[i] && e.kill(s, e._op[i]),
            C &&
              e._pt &&
              ((Ve = e),
              l.killTweensOf(s, p, e.globalTime(0)),
              (g = !e.parent),
              (Ve = 0)),
            e._pt && x && (mt[c.id] = 1);
        }
        u && vn(e), e._onInit && e._onInit(e);
      }
      (e._from = !z && !!m.runBackwards),
        (e._onUpdate = w),
        (e._initted = (!e._op || e._pt) && !g);
    },
    Qe = function (t, e, n, r, i) {
      return V(t)
        ? t.call(e, n, r, i)
        : W(t) && ~t.indexOf("random(")
        ? ge(t)
        : t;
    },
    Je = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    tn = (Je + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    en = (function (t) {
      function e(e, n, r, i) {
        var o;
        "number" == typeof n && ((r.duration = n), (n = r), (r = null));
        var a,
          u,
          c,
          f,
          d,
          p,
          h,
          v,
          g = (o = t.call(this, i ? n : Bt(n), r) || this).vars,
          m = g.duration,
          y = g.delay,
          _ = g.immediateRender,
          b = g.stagger,
          x = g.overwrite,
          w = g.keyframes,
          T = g.defaults,
          S = g.scrollTrigger,
          O = g.yoyoEase,
          P = o.parent,
          E = (et(e) || tt(e) ? G(e[0]) : "length" in n) ? [e] : le(e);
        if (
          ((o._targets = E.length
            ? Tt(E)
            : dt(
                "GSAP target " + e + " not found. https://greensock.com",
                !R.nullTargetWarn
              ) || []),
          (o._ptLookup = []),
          (o._overwrite = x),
          w || b || J(m) || J(y))
        ) {
          if (
            ((n = o.vars),
            (a = o.timeline =
              new We({ data: "nested", defaults: T || {} })).kill(),
            (a.parent = s(o)),
            w)
          )
            Ct(a.vars.defaults, { ease: "none" }),
              w.forEach(function (t) {
                return a.to(E, t, ">");
              });
          else {
            if (((f = E.length), (h = b ? fe(b) : ht), Z(b)))
              for (d in b) ~Je.indexOf(d) && (v || (v = {}), (v[d] = b[d]));
            for (u = 0; u < f; u++) {
              for (d in ((c = {}), n)) tn.indexOf(d) < 0 && (c[d] = n[d]);
              (c.stagger = 0),
                O && (c.yoyoEase = O),
                v && Rt(c, v),
                (p = E[u]),
                (c.duration = +Qe(m, s(o), u, p, E)),
                (c.delay = (+Qe(y, s(o), u, p, E) || 0) - o._delay),
                !b &&
                  1 === f &&
                  c.delay &&
                  ((o._delay = y = c.delay), (o._start += y), (c.delay = 0)),
                a.to(p, c, h(u, p, E));
            }
            a.duration() ? (m = y = 0) : (o.timeline = 0);
          }
          m || o.duration((m = a.duration()));
        } else o.timeline = 0;
        return (
          !0 === x && ((Ve = s(o)), l.killTweensOf(E), (Ve = 0)),
          P && Zt(P, s(o)),
          (_ ||
            (!m &&
              !w &&
              o._start === Et(P._time) &&
              K(_) &&
              Ht(s(o)) &&
              "nested" !== P.data)) &&
            ((o._tTime = -1e-8), o.render(Math.max(0, -y))),
          S && Qt(s(o), S),
          o
        );
      }
      u(e, t);
      var n = e.prototype;
      return (
        (n.render = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            d = this._time,
            p = this._tDur,
            h = this._dur,
            v = t > p - B && t >= 0 ? p : t < B ? 0 : t;
          if (h) {
            if (
              v !== this._tTime ||
              !t ||
              n ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((r = v), (c = this.timeline), this._repeat)) {
                if (
                  ((a = h + this._rDelay),
                  (r = Et(v % a)),
                  v === p
                    ? ((o = this._repeat), (r = h))
                    : ((o = ~~(v / a)) && o === v / a && ((r = h), o--),
                      r > h && (r = h)),
                  (u = this._yoyo && 1 & o) && ((f = this._yEase), (r = h - r)),
                  (s = Wt(this._tTime, a)),
                  r === d && !n && this._initted)
                )
                  return this;
                o !== s &&
                  (c && this._yEase && Le(c, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = n = 1),
                    (this.render(Et(a * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Jt(this, t < 0 ? t : r, n, e))
                  return (this._tTime = 0), this;
                if (h !== this._dur) return this.render(t, e, n);
              }
              for (
                this._tTime = v,
                  this._time = r,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = l = (f || this._ease)(r / h),
                  this._from && (this.ratio = l = 1 - l),
                  r && !d && !e && _e(this, "onStart"),
                  i = this._pt;
                i;

              )
                i.r(l, i.d), (i = i._next);
              (c && c.render(t < 0 ? t : !r && u ? -1e-8 : c._dur * l, e, n)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                  _e(this, "onUpdate")),
                this._repeat &&
                  o !== s &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  _e(this, "onRepeat"),
                (v !== this._tDur && v) ||
                  this._tTime !== v ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (t || !h) &&
                    ((v === this._tDur && this._ts > 0) ||
                      (!v && this._ts < 0)) &&
                    Xt(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!v && !d) ||
                    (_e(this, v === p ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(v < p && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, n, r) {
              var i,
                o,
                a = t.ratio,
                s =
                  e < 0 ||
                  (!e && a && !t._start && t._zTime > B && !t._dp._lock) ||
                  ((t._ts < 0 || t._dp._ts < 0) &&
                    "isFromStart" !== t.data &&
                    "isStart" !== t.data)
                    ? 0
                    : 1,
                u = t._rDelay,
                l = 0;
              if (
                (u &&
                  t._repeat &&
                  ((l = oe(0, t._tDur, e)),
                  Wt(l, u) !== (o = Wt(t._tTime, u)) &&
                    ((a = 1 - s),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                s !== a || r || t._zTime === B || (!e && t._zTime))
              ) {
                if (!t._initted && Jt(t, e, r, n)) return;
                for (
                  o = t._zTime,
                    t._zTime = e || (n ? B : 0),
                    n || (n = e && !o),
                    t.ratio = s,
                    t._from && (s = 1 - s),
                    t._time = 0,
                    t._tTime = l,
                    n || _e(t, "onStart"),
                    i = t._pt;
                  i;

                )
                  i.r(s, i.d), (i = i._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !n && _e(t, "onUpdate"),
                  l && t._repeat && !n && t.parent && _e(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === s &&
                    (s && Xt(t, 1),
                    n ||
                      (_e(t, s ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, n);
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (n.kill = function (t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return be(this);
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)
                ._first || be(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                te(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = this._targets,
            f = t ? le(t) : c,
            d = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var n = t.length, r = n === e.length;
                r && n-- && t[n] === e[n];

              );
              return n < 0;
            })(c, f)
          )
            return "all" === e && (this._pt = 0), be(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (W(e) &&
                  ((s = {}),
                  Pt(e, function (t) {
                    return (s[t] = 1);
                  }),
                  (e = s)),
                (e = (function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    a = t[0] ? St(t[0]).harness : 0,
                    s = a && a.aliases;
                  if (!s) return e;
                  for (r in ((n = Rt({}, e)), s))
                    if ((r in n))
                      for (i = (o = s[r].split(",")).length; i--; )
                        n[o[i]] = n[r];
                  return n;
                })(c, e))),
              l = c.length;
            l--;

          )
            if (~f.indexOf(c[l]))
              for (s in ((i = d[l]),
              "all" === e
                ? ((r[l] = e), (a = i), (o = {}))
                : ((o = r[l] = r[l] || {}), (a = e)),
              a))
                (u = i && i[s]) &&
                  (("kill" in u.d && !0 !== u.d.kill(s)) || Yt(this, u, "_pt"),
                  delete i[s]),
                  "all" !== o && (o[s] = 1);
          return this._initted && !this._pt && p && be(this), this;
        }),
        (e.to = function (t, n) {
          return new e(t, n, arguments[2]);
        }),
        (e.from = function (t, n) {
          return new e(t, kt(arguments, 1));
        }),
        (e.delayedCall = function (t, n, r, i) {
          return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (e.fromTo = function (t, n, r) {
          return new e(t, kt(arguments, 2));
        }),
        (e.set = function (t, n) {
          return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
        }),
        (e.killTweensOf = function (t, e, n) {
          return l.killTweensOf(t, e, n);
        }),
        e
      );
    })(Ue);
  Ct(en.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Pt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      en[t] = function () {
        var e = new We(),
          n = se.call(arguments, 0);
        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var nn = function (t, e, n) {
      return (t[e] = n);
    },
    rn = function (t, e, n) {
      return t[e](n);
    },
    on = function (t, e, n, r) {
      return t[e](r.fp, n);
    },
    an = function (t, e, n) {
      return t.setAttribute(e, n);
    },
    sn = function (t, e) {
      return V(t[e]) ? rn : $(t[e]) && t.setAttribute ? an : nn;
    },
    un = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    ln = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    cn = function (t, e) {
      var n = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; n; )
          (r =
            n.p +
            (n.m
              ? n.m(n.s + n.c * t)
              : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
            r),
            (n = n._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    fn = function (t, e) {
      for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
    },
    dn = function (t, e, n, r) {
      for (var i, o = this._pt; o; )
        (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
    },
    pn = function (t) {
      for (var e, n, r = this._pt; r; )
        (n = r._next),
          (r.p === t && !r.op) || r.op === t
            ? Yt(this, r, "_pt")
            : r.dep || (e = 1),
          (r = n);
      return !e;
    },
    hn = function (t, e, n, r) {
      r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
    },
    vn = function (t) {
      for (var e, n, r, i, o = t._pt; o; ) {
        for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
        (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
          (o._next = n) ? (n._prev = o) : (i = o),
          (o = e);
      }
      t._pt = r;
    },
    gn = (function () {
      function t(t, e, n, r, i, o, a, s, u) {
        (this.t = e),
          (this.s = r),
          (this.c = i),
          (this.p = n),
          (this.r = o || un),
          (this.d = a || this),
          (this.set = s || nn),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = hn),
            (this.m = t),
            (this.mt = n),
            (this.tween = e);
        }),
        t
      );
    })();
  Pt(
    wt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (vt[t] = 1);
    }
  ),
    (ut.TweenMax = ut.TweenLite = en),
    (ut.TimelineLite = ut.TimelineMax = We),
    (l = new We({
      sortChildren: !1,
      defaults: F,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (R.stringFilter = Ae);
  var mn = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      e.forEach(function (t) {
        return xe(t);
      });
    },
    timeline: function (t) {
      return new We(t);
    },
    getTweensOf: function (t, e) {
      return l.getTweensOf(t, e);
    },
    getProperty: function (t, e, n, r) {
      W(t) && (t = le(t)[0]);
      var i = St(t || {}).get,
        o = n ? It : Dt;
      return (
        "native" === n && (n = ""),
        t
          ? e
            ? o(((yt[e] && yt[e].get) || i)(t, e, n, r))
            : function (e, n, r) {
                return o(((yt[e] && yt[e].get) || i)(t, e, n, r));
              }
          : t
      );
    },
    quickSetter: function (t, e, n) {
      if ((t = le(t)).length > 1) {
        var r = t.map(function (t) {
            return bn.quickSetter(t, e, n);
          }),
          i = r.length;
        return function (t) {
          for (var e = i; e--; ) r[e](t);
        };
      }
      t = t[0] || {};
      var o = yt[e],
        a = St(t),
        s = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = o
          ? function (e) {
              var r = new o();
              (v._pt = 0),
                r.init(t, n ? e + n : e, v, 0, [t]),
                r.render(1, r),
                v._pt && fn(1, v);
            }
          : a.set(t, s);
      return o
        ? u
        : function (e) {
            return u(t, s, n ? e + n : e, a, 1);
          };
    },
    isTweening: function (t) {
      return l.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Be(t.ease, F.ease)), Ft(F, t || {});
    },
    config: function (t) {
      return Ft(R, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        n = t.effect,
        r = t.plugins,
        i = t.defaults,
        o = t.extendTimeline;
      (r || "").split(",").forEach(function (t) {
        return (
          t && !yt[t] && !ut[t] && dt(e + " effect requires " + t + " plugin.")
        );
      }),
        (_t[e] = function (t, e, r) {
          return n(le(t), Ct(e || {}, i), r);
        }),
        o &&
          (We.prototype[e] = function (t, n, r) {
            return this.add(_t[e](t, Z(n) ? n : (r = n) && {}, this), r);
          });
    },
    registerEase: function (t, e) {
      Ie[t] = Be(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Be(t, e) : Ie;
    },
    getById: function (t) {
      return l.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var n,
        r,
        i = new We(t);
      for (
        i.smoothChildTiming = K(t.smoothChildTiming),
          l.remove(i),
          i._dp = 0,
          i._time = i._tTime = l._time,
          n = l._first;
        n;

      )
        (r = n._next),
          (!e &&
            !n._dur &&
            n instanceof en &&
            n.vars.onComplete === n._targets[0]) ||
            Kt(i, n, n._start - n._delay),
          (n = r);
      return Kt(l, i, 0), i;
    },
    utils: {
      wrap: function t(e, n, r) {
        var i = n - e;
        return et(e)
          ? ve(e, t(0, e.length), n)
          : ie(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function t(e, n, r) {
        var i = n - e,
          o = 2 * i;
        return et(e)
          ? ve(e, t(0, e.length - 1), n)
          : ie(r, function (t) {
              return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
            });
      },
      distribute: fe,
      random: he,
      snap: pe,
      normalize: function (t, e, n) {
        return me(t, e, 0, 1, n);
      },
      getUnit: ae,
      clamp: function (t, e, n) {
        return ie(n, function (n) {
          return oe(t, e, n);
        });
      },
      splitColor: Oe,
      toArray: le,
      mapRange: me,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (n) {
          return t(parseFloat(n)) + (e || ae(n));
        };
      },
      interpolate: function t(e, n, r, i) {
        var o = isNaN(e + n)
          ? 0
          : function (t) {
              return (1 - t) * e + t * n;
            };
        if (!o) {
          var a,
            s,
            u,
            l,
            c,
            f = W(e),
            d = {};
          if ((!0 === r && (i = 1) && (r = null), f))
            (e = { p: e }), (n = { p: n });
          else if (et(e) && !et(n)) {
            for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++)
              u.push(t(e[s - 1], e[s]));
            l--,
              (o = function (t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e);
              }),
              (r = n);
          } else i || (e = Rt(et(e) ? [] : {}, e));
          if (!u) {
            for (a in n) $e.call(d, e, a, "get", n[a]);
            o = function (t) {
              return fn(t, d) || (f ? e.p : e);
            };
          }
        }
        return ie(r, o);
      },
      shuffle: ce,
    },
    install: ct,
    effects: _t,
    ticker: je,
    updateRoot: We.updateRoot,
    plugins: yt,
    globalTimeline: l,
    core: {
      PropTween: gn,
      globals: pt,
      Tween: en,
      Timeline: We,
      Animation: Ue,
      getCache: St,
      _removeLinkedListItem: Yt,
    },
  };
  Pt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (mn[t] = en[t]);
  }),
    je.add(We.updateRoot),
    (v = mn.to({}, { duration: 0 }));
  var yn = function (t, e) {
      for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
        n = n._next;
      return n;
    },
    _n = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, n, r) {
          r._onInit = function (t) {
            var r, i;
            if (
              (W(n) &&
                ((r = {}),
                Pt(n, function (t) {
                  return (r[t] = 1);
                }),
                (n = r)),
              e)
            ) {
              for (i in ((r = {}), n)) r[i] = e(n[i]);
              n = r;
            }
            !(function (t, e) {
              var n,
                r,
                i,
                o = t._targets;
              for (n in e)
                for (r = o.length; r--; )
                  (i = t._ptLookup[r][n]) &&
                    (i = i.d) &&
                    (i._pt && (i = yn(i, n)),
                    i && i.modifier && i.modifier(e[n], t, o[r], n));
            })(t, n);
          };
        },
      };
    },
    bn =
      mn.registerPlugin(
        {
          name: "attr",
          init: function (t, e, n, r, i) {
            var o, a;
            for (o in e)
              (a = this.add(
                t,
                "setAttribute",
                (t.getAttribute(o) || 0) + "",
                e[o],
                r,
                i,
                0,
                0,
                o
              )) && (a.op = o),
                this._props.push(o);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
          },
        },
        _n("roundProps", de),
        _n("modifiers"),
        _n("snap", pe)
      ) || mn;
  (en.version = We.version = bn.version = "3.5.1"), (p = 1), Q() && De();
  Ie.Power0,
    Ie.Power1,
    Ie.Power2,
    Ie.Power3,
    Ie.Power4,
    Ie.Linear,
    Ie.Quad,
    Ie.Cubic,
    Ie.Quart,
    Ie.Quint,
    Ie.Strong,
    Ie.Elastic,
    Ie.Back,
    Ie.SteppedEase,
    Ie.Bounce,
    Ie.Sine,
    Ie.Expo,
    Ie.Circ;
  var xn,
    wn,
    Tn,
    Sn,
    On,
    Pn,
    En,
    Mn,
    kn = {},
    An = 180 / Math.PI,
    jn = Math.PI / 180,
    Dn = Math.atan2,
    In = /([A-Z])/g,
    Cn = /(?:left|right|width|margin|padding|x)/i,
    zn = /[\s,\(]\S/,
    Rn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Fn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Ln = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    Bn = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    Yn = function (t, e) {
      var n = e.s + e.c * t;
      e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Xn = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    qn = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    Nn = function (t, e, n) {
      return (t.style[e] = n);
    },
    Hn = function (t, e, n) {
      return t.style.setProperty(e, n);
    },
    Un = function (t, e, n) {
      return (t._gsap[e] = n);
    },
    Wn = function (t, e, n) {
      return (t._gsap.scaleX = t._gsap.scaleY = n);
    },
    Vn = function (t, e, n, r, i) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
    },
    Gn = function (t, e, n, r, i) {
      var o = t._gsap;
      (o[e] = n), o.renderTransform(i, o);
    },
    $n = "transform",
    Zn = $n + "Origin",
    Kn = function (t, e) {
      var n = wn.createElementNS
        ? wn.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : wn.createElement(t);
      return n.style ? n : wn.createElement(t);
    },
    Qn = function t(e, n, r) {
      var i = getComputedStyle(e);
      return (
        i[n] ||
        i.getPropertyValue(n.replace(In, "-$1").toLowerCase()) ||
        i.getPropertyValue(n) ||
        (!r && t(e, tr(n) || n, 1)) ||
        ""
      );
    },
    Jn = "O,Moz,ms,Ms,Webkit".split(","),
    tr = function (t, e, n) {
      var r = (e || On).style,
        i = 5;
      if (t in r && !n) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(Jn[i] + t in r);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Jn[i] : "") + t;
    },
    er = function () {
      "undefined" != typeof window &&
        window.document &&
        ((xn = window),
        (wn = xn.document),
        (Tn = wn.documentElement),
        (On = Kn("div") || { style: {} }),
        (Pn = Kn("div")),
        ($n = tr($n)),
        (Zn = $n + "Origin"),
        (On.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Mn = !!tr("perspective")),
        (Sn = 1));
    },
    nr = function t(e) {
      var n,
        r = Kn(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        o = this.nextSibling,
        a = this.style.cssText;
      if (
        (Tn.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (n = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (n = this._gsapBBox());
      return (
        i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
        Tn.removeChild(r),
        (this.style.cssText = a),
        n
      );
    },
    rr = function (t, e) {
      for (var n = e.length; n--; )
        if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
    },
    ir = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (n) {
        e = nr.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === nr ||
          (e = nr.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +rr(t, ["x", "cx", "x1"]) || 0,
              y: +rr(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    or = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ir(t));
    },
    ar = function (t, e) {
      if (e) {
        var n = t.style;
        e in kn && e !== Zn && (e = $n),
          n.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              n.removeProperty(e.replace(In, "-$1").toLowerCase()))
            : n.removeAttribute(e);
      }
    },
    sr = function (t, e, n, r, i, o) {
      var a = new gn(t._pt, e, n, 0, 1, o ? qn : Xn);
      return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
    },
    ur = { deg: 1, rad: 1, turn: 1 },
    lr = function t(e, n, r, i) {
      var o,
        a,
        s,
        u,
        l = parseFloat(r) || 0,
        c = (r + "").trim().substr((l + "").length) || "px",
        f = On.style,
        d = Cn.test(n),
        p = "svg" === e.tagName.toLowerCase(),
        h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
        v = 100,
        g = "px" === i,
        m = "%" === i;
      return i === c || !l || ur[i] || ur[c]
        ? l
        : ("px" !== c && !g && (l = t(e, n, r, "px")),
          (u = e.getCTM && or(e)),
          m && (kn[n] || ~n.indexOf("adius"))
            ? Et((l / (u ? e.getBBox()[d ? "width" : "height"] : e[h])) * v)
            : ((f[d ? "width" : "height"] = v + (g ? c : i)),
              (a =
                ~n.indexOf("adius") || ("em" === i && e.appendChild && !p)
                  ? e
                  : e.parentNode),
              u && (a = (e.ownerSVGElement || {}).parentNode),
              (a && a !== wn && a.appendChild) || (a = wn.body),
              (s = a._gsap) && m && s.width && d && s.time === je.time
                ? Et((l / s.width) * v)
                : ((m || "%" === c) && (f.position = Qn(e, "position")),
                  a === e && (f.position = "static"),
                  a.appendChild(On),
                  (o = On[h]),
                  a.removeChild(On),
                  (f.position = "absolute"),
                  d && m && (((s = St(a)).time = je.time), (s.width = a[h])),
                  Et(g ? (o * l) / v : o && l ? (v / o) * l : 0))));
    },
    cr = function (t, e, n, r) {
      var i;
      return (
        Sn || er(),
        e in Rn &&
          "transform" !== e &&
          ~(e = Rn[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        kn[e] && "transform" !== e
          ? ((i = xr(t, r)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : wr(Qn(t, Zn)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              r ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (hr[e] && hr[e](t, e, n)) ||
              Qn(t, e) ||
              Ot(t, e) ||
              ("opacity" === e ? 1 : 0)),
        n && !~(i + "").indexOf(" ") ? lr(t, e, i, n) + n : i
      );
    },
    fr = function (t, e, n, r) {
      if (!n || "none" === n) {
        var i = tr(e, t, 1),
          o = i && Qn(t, i, 1);
        o && o !== n
          ? ((e = i), (n = o))
          : "borderColor" === e && (n = Qn(t, "borderTopColor"));
      }
      var a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        v,
        g,
        m,
        y = new gn(this._pt, t.style, e, 0, 1, cn),
        _ = 0,
        b = 0;
      if (
        ((y.b = n),
        (y.e = r),
        (n += ""),
        "auto" === (r += "") &&
          ((t.style[e] = r), (r = Qn(t, e) || r), (t.style[e] = n)),
        Ae((a = [n, r])),
        (r = a[1]),
        (u = (n = a[0]).match(it) || []),
        (r.match(it) || []).length)
      ) {
        for (; (s = it.exec(r)); )
          (d = s[0]),
            (h = r.substring(_, s.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                (c = 1),
            d !== (f = u[b++] || "") &&
              ((l = parseFloat(f) || 0),
              (g = f.substr((l + "").length)),
              (m = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                (d = d.substr(2)),
              (p = parseFloat(d)),
              (v = d.substr((p + "").length)),
              (_ = it.lastIndex - v.length),
              v ||
                ((v = v || R.units[e] || g),
                _ === r.length && ((r += v), (y.e += v))),
              g !== v && (l = lr(t, e, f, v) || 0),
              (y._pt = {
                _next: y._pt,
                p: h || 1 === b ? h : ",",
                s: l,
                c: m ? m * p : p - l,
                m: c && c < 4 ? Math.round : 0,
              }));
        y.c = _ < r.length ? r.substring(_, r.length) : "";
      } else y.r = "display" === e && "none" === r ? qn : Xn;
      return at.test(r) && (y.e = 0), (this._pt = y), y;
    },
    dr = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    pr = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var n,
          r,
          i,
          o = e.t,
          a = o.style,
          s = e.u,
          u = o._gsap;
        if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
        else
          for (i = (s = s.split(",")).length; --i > -1; )
            (n = s[i]),
              kn[n] && ((r = 1), (n = "transformOrigin" === n ? Zn : $n)),
              ar(o, n);
        r &&
          (ar(o, $n),
          u &&
            (u.svg && o.removeAttribute("transform"),
            xr(o, 1),
            (u.uncache = 1)));
      }
    },
    hr = {
      clearProps: function (t, e, n, r, i) {
        if ("isFromStart" !== i.data) {
          var o = (t._pt = new gn(t._pt, e, n, 0, 0, pr));
          return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1;
        }
      },
    },
    vr = [1, 0, 0, 1, 0, 0],
    gr = {},
    mr = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    yr = function (t) {
      var e = Qn(t, $n);
      return mr(e) ? vr : e.substr(7).match(rt).map(Et);
    },
    _r = function (t, e) {
      var n,
        r,
        i,
        o,
        a = t._gsap || St(t),
        s = t.style,
        u = yr(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? vr
          : u
        : (u !== vr ||
            t.offsetParent ||
            t === Tn ||
            a.svg ||
            ((i = s.display),
            (s.display = "block"),
            ((n = t.parentNode) && t.offsetParent) ||
              ((o = 1), (r = t.nextSibling), Tn.appendChild(t)),
            (u = yr(t)),
            i ? (s.display = i) : ar(t, "display"),
            o &&
              (r
                ? n.insertBefore(t, r)
                : n
                ? n.appendChild(t)
                : Tn.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    br = function (t, e, n, r, i, o) {
      var a,
        s,
        u,
        l = t._gsap,
        c = i || _r(t, !0),
        f = l.xOrigin || 0,
        d = l.yOrigin || 0,
        p = l.xOffset || 0,
        h = l.yOffset || 0,
        v = c[0],
        g = c[1],
        m = c[2],
        y = c[3],
        _ = c[4],
        b = c[5],
        x = e.split(" "),
        w = parseFloat(x[0]) || 0,
        T = parseFloat(x[1]) || 0;
      n
        ? c !== vr &&
          (s = v * y - g * m) &&
          ((u = w * (-g / s) + T * (v / s) - (v * b - g * _) / s),
          (w = w * (y / s) + T * (-m / s) + (m * b - y * _) / s),
          (T = u))
        : ((w = (a = ir(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
          (T =
            a.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
        r || (!1 !== r && l.smooth)
          ? ((_ = w - f),
            (b = T - d),
            (l.xOffset = p + (_ * v + b * m) - _),
            (l.yOffset = h + (_ * g + b * y) - b))
          : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = w),
        (l.yOrigin = T),
        (l.smooth = !!r),
        (l.origin = e),
        (l.originIsAbsolute = !!n),
        (t.style[Zn] = "0px 0px"),
        o &&
          (sr(o, l, "xOrigin", f, w),
          sr(o, l, "yOrigin", d, T),
          sr(o, l, "xOffset", p, l.xOffset),
          sr(o, l, "yOffset", h, l.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + T);
    },
    xr = function (t, e) {
      var n = t._gsap || new He(t);
      if ("x" in n && !e && !n.uncache) return n;
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        v,
        g,
        m,
        y,
        _,
        b,
        x,
        w,
        T,
        S,
        O,
        P,
        E,
        M,
        k,
        A,
        j,
        D,
        I,
        C,
        z = t.style,
        F = n.scaleX < 0,
        L = "px",
        B = "deg",
        Y = Qn(t, Zn) || "0";
      return (
        (r = i = o = u = l = c = f = d = p = 0),
        (a = s = 1),
        (n.svg = !(!t.getCTM || !or(t))),
        (g = _r(t, n.svg)),
        n.svg &&
          ((P = !n.uncache && t.getAttribute("data-svg-origin")),
          br(t, P || Y, !!P || n.originIsAbsolute, !1 !== n.smooth, g)),
        (h = n.xOrigin || 0),
        (v = n.yOrigin || 0),
        g !== vr &&
          ((b = g[0]),
          (x = g[1]),
          (w = g[2]),
          (T = g[3]),
          (r = S = g[4]),
          (i = O = g[5]),
          6 === g.length
            ? ((a = Math.sqrt(b * b + x * x)),
              (s = Math.sqrt(T * T + w * w)),
              (u = b || x ? Dn(x, b) * An : 0),
              (f = w || T ? Dn(w, T) * An + u : 0) && (s *= Math.cos(f * jn)),
              n.svg && ((r -= h - (h * b + v * w)), (i -= v - (h * x + v * T))))
            : ((C = g[6]),
              (D = g[7]),
              (k = g[8]),
              (A = g[9]),
              (j = g[10]),
              (I = g[11]),
              (r = g[12]),
              (i = g[13]),
              (o = g[14]),
              (l = (m = Dn(C, j)) * An),
              m &&
                ((P = S * (y = Math.cos(-m)) + k * (_ = Math.sin(-m))),
                (E = O * y + A * _),
                (M = C * y + j * _),
                (k = S * -_ + k * y),
                (A = O * -_ + A * y),
                (j = C * -_ + j * y),
                (I = D * -_ + I * y),
                (S = P),
                (O = E),
                (C = M)),
              (c = (m = Dn(-w, j)) * An),
              m &&
                ((y = Math.cos(-m)),
                (I = T * (_ = Math.sin(-m)) + I * y),
                (b = P = b * y - k * _),
                (x = E = x * y - A * _),
                (w = M = w * y - j * _)),
              (u = (m = Dn(x, b)) * An),
              m &&
                ((P = b * (y = Math.cos(m)) + x * (_ = Math.sin(m))),
                (E = S * y + O * _),
                (x = x * y - b * _),
                (O = O * y - S * _),
                (b = P),
                (S = E)),
              l &&
                Math.abs(l) + Math.abs(u) > 359.9 &&
                ((l = u = 0), (c = 180 - c)),
              (a = Et(Math.sqrt(b * b + x * x + w * w))),
              (s = Et(Math.sqrt(O * O + C * C))),
              (m = Dn(S, O)),
              (f = Math.abs(m) > 2e-4 ? m * An : 0),
              (p = I ? 1 / (I < 0 ? -I : I) : 0)),
          n.svg &&
            ((P = t.getAttribute("transform")),
            (n.forceCSS = t.setAttribute("transform", "") || !mr(Qn(t, $n))),
            P && t.setAttribute("transform", P))),
        Math.abs(f) > 90 &&
          Math.abs(f) < 270 &&
          (F
            ? ((a *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((s *= -1), (f += f <= 0 ? 180 : -180))),
        (n.x =
          ((n.xPercent =
            r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)
            ? 0
            : r) + L),
        (n.y =
          ((n.yPercent =
            i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + L),
        (n.z = o + L),
        (n.scaleX = Et(a)),
        (n.scaleY = Et(s)),
        (n.rotation = Et(u) + B),
        (n.rotationX = Et(l) + B),
        (n.rotationY = Et(c) + B),
        (n.skewX = f + B),
        (n.skewY = d + B),
        (n.transformPerspective = p + L),
        (n.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (z[Zn] = wr(Y)),
        (n.xOffset = n.yOffset = 0),
        (n.force3D = R.force3D),
        (n.renderTransform = n.svg ? kr : Mn ? Mr : Sr),
        (n.uncache = 0),
        n
      );
    },
    wr = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Tr = function (t, e, n) {
      var r = ae(e);
      return Et(parseFloat(e) + parseFloat(lr(t, "x", n + "px", r))) + r;
    },
    Sr = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Mr(t, e);
    },
    Or = "0deg",
    Pr = "0px",
    Er = ") ",
    Mr = function (t, e) {
      var n = e || this,
        r = n.xPercent,
        i = n.yPercent,
        o = n.x,
        a = n.y,
        s = n.z,
        u = n.rotation,
        l = n.rotationY,
        c = n.rotationX,
        f = n.skewX,
        d = n.skewY,
        p = n.scaleX,
        h = n.scaleY,
        v = n.transformPerspective,
        g = n.force3D,
        m = n.target,
        y = n.zOrigin,
        _ = "",
        b = ("auto" === g && t && 1 !== t) || !0 === g;
      if (y && (c !== Or || l !== Or)) {
        var x,
          w = parseFloat(l) * jn,
          T = Math.sin(w),
          S = Math.cos(w);
        (w = parseFloat(c) * jn),
          (x = Math.cos(w)),
          (o = Tr(m, o, T * x * -y)),
          (a = Tr(m, a, -Math.sin(w) * -y)),
          (s = Tr(m, s, S * x * -y + y));
      }
      v !== Pr && (_ += "perspective(" + v + Er),
        (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
        (b || o !== Pr || a !== Pr || s !== Pr) &&
          (_ +=
            s !== Pr || b
              ? "translate3d(" + o + ", " + a + ", " + s + ") "
              : "translate(" + o + ", " + a + Er),
        u !== Or && (_ += "rotate(" + u + Er),
        l !== Or && (_ += "rotateY(" + l + Er),
        c !== Or && (_ += "rotateX(" + c + Er),
        (f === Or && d === Or) || (_ += "skew(" + f + ", " + d + Er),
        (1 === p && 1 === h) || (_ += "scale(" + p + ", " + h + Er),
        (m.style[$n] = _ || "translate(0, 0)");
    },
    kr = function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s = e || this,
        u = s.xPercent,
        l = s.yPercent,
        c = s.x,
        f = s.y,
        d = s.rotation,
        p = s.skewX,
        h = s.skewY,
        v = s.scaleX,
        g = s.scaleY,
        m = s.target,
        y = s.xOrigin,
        _ = s.yOrigin,
        b = s.xOffset,
        x = s.yOffset,
        w = s.forceCSS,
        T = parseFloat(c),
        S = parseFloat(f);
      (d = parseFloat(d)),
        (p = parseFloat(p)),
        (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
        d || p
          ? ((d *= jn),
            (p *= jn),
            (n = Math.cos(d) * v),
            (r = Math.sin(d) * v),
            (i = Math.sin(d - p) * -g),
            (o = Math.cos(d - p) * g),
            p &&
              ((h *= jn),
              (a = Math.tan(p - h)),
              (i *= a = Math.sqrt(1 + a * a)),
              (o *= a),
              h &&
                ((a = Math.tan(h)), (n *= a = Math.sqrt(1 + a * a)), (r *= a))),
            (n = Et(n)),
            (r = Et(r)),
            (i = Et(i)),
            (o = Et(o)))
          : ((n = v), (o = g), (r = i = 0)),
        ((T && !~(c + "").indexOf("px")) || (S && !~(f + "").indexOf("px"))) &&
          ((T = lr(m, "x", c, "px")), (S = lr(m, "y", f, "px"))),
        (y || _ || b || x) &&
          ((T = Et(T + y - (y * n + _ * i) + b)),
          (S = Et(S + _ - (y * r + _ * o) + x))),
        (u || l) &&
          ((a = m.getBBox()),
          (T = Et(T + (u / 100) * a.width)),
          (S = Et(S + (l / 100) * a.height))),
        (a =
          "matrix(" +
          n +
          "," +
          r +
          "," +
          i +
          "," +
          o +
          "," +
          T +
          "," +
          S +
          ")"),
        m.setAttribute("transform", a),
        w && (m.style[$n] = a);
    },
    Ar = function (t, e, n, r, i, o) {
      var a,
        s,
        u = 360,
        l = W(i),
        c = parseFloat(i) * (l && ~i.indexOf("rad") ? An : 1),
        f = o ? c * o : c - r,
        d = r + f + "deg";
      return (
        l &&
          ("short" === (a = i.split("_")[1]) &&
            (f %= u) !== f % 180 &&
            (f += f < 0 ? u : -360),
          "cw" === a && f < 0
            ? (f = ((f + 36e9) % u) - ~~(f / u) * u)
            : "ccw" === a && f > 0 && (f = ((f - 36e9) % u) - ~~(f / u) * u)),
        (t._pt = s = new gn(t._pt, e, n, r, f, Ln)),
        (s.e = d),
        (s.u = "deg"),
        t._props.push(n),
        s
      );
    },
    jr = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = Pn.style,
        f = n._gsap;
      for (i in ((c.cssText =
        getComputedStyle(n).cssText + ";position:absolute;display:block;"),
      (c[$n] = e),
      wn.body.appendChild(Pn),
      (r = xr(Pn, 1)),
      kn))
        (o = f[i]) !== (a = r[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((s = ae(o) !== (l = ae(a)) ? lr(n, i, o, l) : parseFloat(o)),
          (u = parseFloat(a)),
          (t._pt = new gn(t._pt, f, i, s, u - s, Fn)),
          (t._pt.u = l || 0),
          t._props.push(i));
      wn.body.removeChild(Pn);
    };
  Pt("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      o = "Left",
      a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (
        n
      ) {
        return e < 2 ? t + n : "border" + n + t;
      });
    hr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
      var o, s;
      if (arguments.length < 4)
        return (
          (o = a.map(function (e) {
            return cr(t, e, n);
          })),
          5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
        );
      (o = (r + "").split(" ")),
        (s = {}),
        a.forEach(function (t, e) {
          return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
        }),
        t.init(e, s, i);
    };
  });
  var Dr,
    Ir,
    Cr,
    zr = {
      name: "css",
      register: er,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h,
          v,
          g,
          m,
          y,
          _,
          b,
          x,
          w,
          T,
          S = this._props,
          O = t.style;
        for (f in (Sn || er(), e))
          if (
            "autoRound" !== f &&
            ((a = e[f]), !yt[f] || !Ze(f, e, n, r, t, i))
          )
            if (
              ((l = typeof a),
              (c = hr[f]),
              "function" === l && (l = typeof (a = a.call(n, r, t, i))),
              "string" === l && ~a.indexOf("random(") && (a = ge(a)),
              c)
            )
              c(this, t, f, a, n) && (_ = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                O,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                a + "",
                r,
                i,
                0,
                0,
                f
              );
            else if ("undefined" !== l) {
              if (
                ((o = cr(t, f)),
                (u = parseFloat(o)),
                (h =
                  "string" === l && "=" === a.charAt(1)
                    ? +(a.charAt(0) + "1")
                    : 0) && (a = a.substr(2)),
                (s = parseFloat(a)),
                f in Rn &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === cr(t, "visibility") &&
                      s &&
                      (u = 0),
                    sr(
                      this,
                      O,
                      "visibility",
                      u ? "inherit" : "hidden",
                      s ? "inherit" : "hidden",
                      !s
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Rn[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (v = f in kn))
              )
                if (
                  (g ||
                    ((m = t._gsap).renderTransform || xr(t),
                    (y = !1 !== e.smoothOrigin && m.smooth),
                    ((g = this._pt =
                      new gn(
                        this._pt,
                        O,
                        $n,
                        0,
                        1,
                        m.renderTransform,
                        m,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new gn(
                    this._pt,
                    m,
                    "scaleY",
                    m.scaleY,
                    h ? h * s : s - m.scaleY
                  )),
                    S.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (x = void 0),
                      (w = void 0),
                      (T = void 0),
                      (x = (b = a).split(" ")),
                      (w = x[0]),
                      (T = x[1] || "50%"),
                      ("top" !== w &&
                        "bottom" !== w &&
                        "left" !== T &&
                        "right" !== T) ||
                        ((b = w), (w = T), (T = b)),
                      (x[0] = dr[w] || w),
                      (x[1] = dr[T] || T),
                      (a = x.join(" ")),
                      m.svg
                        ? br(t, a, 0, y, 0, this)
                        : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                            m.zOrigin && sr(this, m, "zOrigin", m.zOrigin, p),
                          sr(this, O, f, wr(o), wr(a)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    br(t, a, 1, y, 0, this);
                    continue;
                  }
                  if (f in gr) {
                    Ar(this, m, f, u, a, h);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    sr(this, m, "smooth", m.smooth, a);
                    continue;
                  }
                  if ("force3D" === f) {
                    m[f] = a;
                    continue;
                  }
                  if ("transform" === f) {
                    jr(this, a, t);
                    continue;
                  }
                }
              else f in O || (f = tr(f) || f);
              if (
                v ||
                ((s || 0 === s) && (u || 0 === u) && !zn.test(a) && f in O)
              )
                s || (s = 0),
                  (d = (o + "").substr((u + "").length)) !==
                    (p = ae(a) || (f in R.units ? R.units[f] : d)) &&
                    (u = lr(t, f, o, p)),
                  (this._pt = new gn(
                    this._pt,
                    v ? m : O,
                    f,
                    u,
                    h ? h * s : s - u,
                    "px" !== p || !1 === e.autoRound || v ? Fn : Yn
                  )),
                  (this._pt.u = p || 0),
                  d !== p && ((this._pt.b = o), (this._pt.r = Bn));
              else if (f in O) fr.call(this, t, f, o, a);
              else {
                if (!(f in t)) {
                  ft(f, a);
                  continue;
                }
                this.add(t, f, t[f], a, r, i);
              }
              S.push(f);
            }
        _ && vn(this);
      },
      get: cr,
      aliases: Rn,
      getSetter: function (t, e, n) {
        var r = Rn[e];
        return (
          r && r.indexOf(",") < 0 && (e = r),
          e in kn && e !== Zn && (t._gsap.x || cr(t, "x"))
            ? n && En === n
              ? "scale" === e
                ? Wn
                : Un
              : (En = n || {}) && ("scale" === e ? Vn : Gn)
            : t.style && !$(t.style[e])
            ? Nn
            : ~e.indexOf("-")
            ? Hn
            : sn(t, e)
        );
      },
      core: { _removeProperty: ar, _getMatrix: _r },
    };
  (bn.utils.checkPrefix = tr),
    (Cr = Pt(
      (Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Ir = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        kn[t] = 1;
      }
    )),
    Pt(Ir, function (t) {
      (R.units[t] = "deg"), (gr[t] = 1);
    }),
    (Rn[Cr[13]] = Dr + "," + Ir),
    Pt(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Rn[e[1]] = Cr[e[0]];
      }
    ),
    Pt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        R.units[t] = "px";
      }
    ),
    bn.registerPlugin(zr);
  var Rr,
    Fr,
    Lr = bn.registerPlugin(zr) || bn,
    Br = (Lr.core.Tween, 0),
    Yr = document.querySelector(".js-scroll-container"),
    Xr = Yr.querySelector(".js-cat"),
    qr = Xr.cloneNode(!0);
  qr.classList.remove("cat--1"), qr.classList.add("cat--2"), Yr.appendChild(qr);
  var Nr = Xr.querySelector(".js-cat-parallax-0"),
    Hr = Xr.querySelector(".js-cat-parallax-1"),
    Ur = Xr.querySelector(".js-cat-parallax-2"),
    Wr = qr.querySelector(".js-cat-parallax-0"),
    Vr = qr.querySelector(".js-cat-parallax-1"),
    Gr = qr.querySelector(".js-cat-parallax-2"),
    $r = function () {
      (Rr = Xr.offsetHeight), (Fr = 2 * Rr), Zr();
    };
  function Zr() {
    var t = -1 * (Rr + 50),
      e = (Br % Fr) * -1;
    Br >= 0 && e < t && (e += Fr),
      Br < 0 && e > t + Fr && (e -= Fr),
      Lr.to(Xr, { duration: 0, y: e }),
      Lr.to(Nr, { duration: 0, y: 0.1 * e }),
      Lr.to(Hr, { duration: 0, y: 0.25 * e }),
      Lr.to(Ur, { duration: 0, y: 0.6 * e });
    var n = -1 * (Rr + 50) - Rr,
      r = (Br % Fr) * -1;
    r > -50 && (r -= Fr),
      Br >= 0 && r < n && (r += Fr),
      Br < 0 && r > n + Fr && (r -= Fr),
      Lr.to(qr, { duration: 0, y: r + Rr }),
      Lr.to(Wr, { duration: 0, y: 0.1 * (r + Rr) }),
      Lr.to(Vr, { duration: 0, y: 0.25 * (r + Rr) }),
      Lr.to(Gr, { duration: 0, y: 0.6 * (r + Rr) });
  }
  $r(),
    window.addEventListener("resize", $r),
    window.addEventListener("load", $r),
    t(a)(Yr).draggable({
      inertia: !0,
      listeners: {
        move: function (t) {
          var e;
          (Br -= 1 * t.dy),
            Zr(),
            (e = "hsl(".concat(
              ((Br / 360) * 0.025 * 360 + 15) % 360,
              ", 100%, 52%)"
            )),
            Lr.to(App.H, { duration: 0, "--color-disco": e });
        },
      },
    }),
    Zr();
  var Kr,
    Qr = null;
  var Jr,
    ti = function () {
      return (
        Qr ||
          (Qr = (function () {
            try {
              throw new Error();
            } catch (e) {
              var t = ("" + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
              if (t)
                return (
                  ("" + t[0]).replace(
                    /^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,
                    "$1"
                  ) + "/"
                );
            }
            return "/";
          })()),
        Qr
      );
    },
    ei = r;
  function ni(t) {
    if ("" === t) return ".";
    var e = "/" === t[t.length - 1] ? t.slice(0, t.length - 1) : t,
      n = e.lastIndexOf("/");
    return -1 === n ? "." : e.slice(0, n);
  }
  function ri(t, e) {
    if (t === e) return "";
    var n = t.split("/");
    "." === n[0] && n.shift();
    var r,
      i,
      o = e.split("/");
    for (
      "." === o[0] && o.shift(), r = 0;
      (r < o.length || r < n.length) && null == i;
      r++
    )
      n[r] !== o[r] && (i = r);
    var a = [];
    for (r = 0; r < n.length - i; r++) a.push("..");
    return o.length > i && a.push.apply(a, o.slice(i)), a.join("/");
  }
  ((Jr = function (t, e) {
    return ri(ni(ei(t)), ei(e));
  })._dirname = ni),
    (Jr._relative = ri),
    (Kr = ti() + Jr("5ZBTk", "15xNj"));
  var ii;
  ii = ti() + Jr("5ZBTk", "53D5p");
  var oi;
  oi = ti() + Jr("5ZBTk", "3ggzm");
  var ai;
  ai = ti() + Jr("5ZBTk", "2PwTS");
  var si = !1,
    ui = [];
  function li() {
    if (!si) {
      si = !0;
      var t = ui[Math.floor(Math.random() * ui.length)];
      t.addEventListener("ended", function () {
        si = !1;
      }),
        t.play();
    }
  }
  [t(Kr), t(ii), t(oi), t(ai)].forEach(function (t) {
    var e = new Audio(t);
    ui.push(e);
  }),
    o.then(function () {
      document.querySelectorAll(".js-cat-zone").forEach(function (t) {
        t.addEventListener("touchstart", li),
          t.addEventListener("touchmove", li),
          t.addEventListener("mousedown", li);
      });
    });
  var ci;
  ci = ti() + Jr("5ZBTk", "7bYeI");
  var fi;
  fi = ti() + Jr("5ZBTk", "Ro4e5");
  var di;
  di = ti() + Jr("5ZBTk", "6Of1K");
  var pi;
  pi = ti() + Jr("5ZBTk", "5rskr");
  var hi = document.querySelector(".js-simulator"),
    vi = document.querySelector(".js-simulator-stickers"),
    gi = !1,
    mi = [],
    yi = [
      "2021",
      "cat",
      "censored",
      "eye",
      "leave-me-in-peace",
      "stitch",
      "leave-me-alone",
      "give-me-a-break",
      "go-away",
      "2cats",
      "box",
      "exmark",
      "deadmouse",
      "catmask",
      "frame",
      "can",
      "virus",
    ];
  function _i(t) {
    return t[Math.floor(Math.random() * t.length)];
  }
  function bi(t) {
    !gi &&
      t.target.closest(".js-simulator-zone") &&
      ((gi = !0),
      _i(mi).play(),
      (function (t) {
        var e = t.touches ? t.touches[0].clientX : t.x,
          n = t.touches ? t.touches[0].clientY : t.y,
          r = "ru" === App.H.getAttribute("lang") ? _i(stickersRu) : _i(yi),
          i =
            Math.ceil(45 * Math.random()) *
            (Math.round(Math.random()) ? 1 : -1),
          o = '<div\n        class="sticker sticker--'
            .concat(r, ' simulator__sticker"\n        style="left: ')
            .concat(e, "px; top: ")
            .concat(
              n,
              "px; transform: translateX(-50%) translateY(-50%) rotate("
            )
            .concat(i, 'deg)"\n    ></div>');
        vi.insertAdjacentHTML("beforeend", o);
      })(t));
  }
  [t(ci), t(fi), t(di), t(pi)].forEach(function (t) {
    var e = new Audio(t);
    e.addEventListener("ended", function () {
      gi = !1;
    }),
      mi.push(e);
  }),
    document
      .querySelector(".js-toggle-simulator")
      .addEventListener("change", function (t) {
        t.target.checked
          ? App.H.classList.remove("_has-open-simulator")
          : App.H.classList.add("_has-open-simulator");
      }),
    o.then(function () {
      hi.addEventListener("touchstart", bi),
        hi.addEventListener("mousedown", bi);
    }),
    document.querySelector(".js-start").addEventListener("click", function () {
      vi.innerHTML = "";
    }),
    document.querySelector(".js-logo").addEventListener("click", function (t) {
      t.preventDefault(),
        App.H.classList.remove("_has-open-simulator"),
        (document.querySelector(".js-toggle-simulator").checked = !0),
        document
          .querySelector(".js-splashscreen")
          .classList.remove("_is-hidden");
    }),
    document
      .querySelector(".js-header-share-btn")
      .addEventListener("click", function () {
        document
          .querySelector(".js-header-share")
          .classList.toggle("_is-visible");
      });
})();
//# sourceMappingURL=index.67c41334.1758ab.js.map
