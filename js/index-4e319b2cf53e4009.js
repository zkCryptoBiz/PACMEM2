(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(6806);
        },
      ]);
    },
    5634: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return l;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          ACTION_PREFETCH: function () {
            return i;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return f;
          },
          isThenable: function () {
            return s;
          },
        });
      let l = "refresh",
        o = "navigate",
        a = "restore",
        u = "server-patch",
        i = "prefetch",
        c = "fast-refresh",
        f = "server-action";
      function s(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((r = n || (n = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7149: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(4648),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5494: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(8754),
        l = n(5893),
        o = r._(n(7294)),
        a = n(5203),
        u = n(298),
        i = n(1024),
        c = n(5522),
        f = n(2208),
        s = n(5832),
        d = n(2497),
        p = n(7283),
        h = n(7149),
        m = n(9290),
        v = n(5634),
        g = new Set();
      function b(e, t, n, r, l, o) {
        if (o || (0, u.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let l =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (g.has(l)) return;
            g.add(l);
          }
          Promise.resolve(o ? e.prefetch(t, l) : e.prefetch(t, n, r)).catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, i.formatUrl)(e);
      }
      let w = o.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: i,
          as: g,
          children: w,
          prefetch: x = null,
          passHref: _,
          replace: j,
          shallow: O,
          scroll: E,
          locale: C,
          onClick: T,
          onMouseEnter: P,
          onTouchStart: N,
          legacyBehavior: M = !1,
          ...k
        } = e;
        (n = w),
          M &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, l.jsx)("a", { children: n }));
        let R = o.default.useContext(s.RouterContext),
          A = o.default.useContext(d.AppRouterContext),
          q = null != R ? R : A,
          I = !R,
          L = !1 !== x,
          S = null === x ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: V, as: H } = o.default.useMemo(() => {
            if (!R) {
              let e = y(i);
              return { href: e, as: g ? y(g) : e };
            }
            let [e, t] = (0, a.resolveHref)(R, i, !0);
            return { href: e, as: g ? (0, a.resolveHref)(R, g) : t || e };
          }, [R, i, g]),
          z = o.default.useRef(V),
          F = o.default.useRef(H);
        M && (r = o.default.Children.only(n));
        let U = M ? r && "object" == typeof r && r.ref : t,
          [K, D, B] = (0, p.useIntersection)({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (e) => {
              (F.current !== H || z.current !== V) &&
                (B(), (F.current = H), (z.current = V)),
                K(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [H, U, V, B, K]
          );
        o.default.useEffect(() => {
          q && D && L && b(q, V, H, { locale: C }, { kind: S }, I);
        }, [H, V, D, C, L, null == R ? void 0 : R.locale, q, I, S]);
        let G = {
          ref: X,
          onClick(e) {
            M || "function" != typeof T || T(e),
              M &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              q &&
                !e.defaultPrevented &&
                (function (e, t, n, r, l, a, i, c, f) {
                  let { nodeName: s } = e.currentTarget;
                  if (
                    "A" === s.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!f && !(0, u.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == i || i;
                    "beforePopState" in t
                      ? t[l ? "replace" : "push"](n, r, {
                          shallow: a,
                          locale: c,
                          scroll: e,
                        })
                      : t[l ? "replace" : "push"](r || n, { scroll: e });
                  };
                  f ? o.default.startTransition(d) : d();
                })(e, q, V, H, j, O, E, C, I);
          },
          onMouseEnter(e) {
            M || "function" != typeof P || P(e),
              M &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              q &&
                (L || !I) &&
                b(
                  q,
                  V,
                  H,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: S },
                  I
                );
          },
          onTouchStart(e) {
            M || "function" != typeof N || N(e),
              M &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              q &&
                (L || !I) &&
                b(
                  q,
                  V,
                  H,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: S },
                  I
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(H)) G.href = H;
        else if (!M || _ || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== C ? C : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                H,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          G.href =
            t ||
            (0, m.addBasePath)(
              (0, f.addLocale)(H, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return M
          ? o.default.cloneElement(r, G)
          : (0, l.jsx)("a", { ...k, ...G, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7283: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(7294),
        l = n(9833),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      function i(e) {
        let { rootRef: t, rootMargin: n, disabled: i } = e,
          c = i || !o,
          [f, s] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (c || f) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: l,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = u.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let l = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = l.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: l,
                      }),
                      u.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    l.observe(e),
                    function () {
                      if ((o.delete(e), l.unobserve(e), 0 === o.size)) {
                        l.disconnect(), a.delete(r);
                        let e = u.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!f) {
              let e = (0, l.requestIdleCallback)(() => s(!0));
              return () => (0, l.cancelIdleCallback)(e);
            }
          }, [c, n, t, f, d.current]),
          [
            p,
            f,
            (0, r.useCallback)(() => {
              s(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6806: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r,
        l,
        o,
        a = n(5893),
        u = n(7294);
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var c = function (e) {
        return u.createElement(
          "svg",
          i(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 60,
              height: 60,
              fill: "none",
              viewBox: "0 0 60 60",
            },
            e
          ),
          r ||
            (r = u.createElement("rect", {
              width: 58,
              height: 58,
              x: 1,
              y: 1,
              stroke: "#fff",
              strokeWidth: 2,
              rx: 29,
            })),
          l ||
            (l = u.createElement("path", {
              fill: "#fff",
              d: "M41.352 28.273q-.24-.034-.427-.34-.188-.305-.29-1.12-.17-1.325-.871-1.952-.7-.63-2.169-.9a6.3 6.3 0 0 1-2.714-1.24 20 20 0 0 1-1.964-1.748q-.75-.713-1.16-.51-.41.204-.41.747v4.652q0 1.902-.017 4.109a540 540 0 0 0-.017 4.177v5.398q.033.816-.256 1.817-.29 1.002-1.093 1.885t-2.134 1.51q-1.332.63-3.313.73-2.014.102-3.636-.712-1.623-.816-2.51-2.055-.888-1.239-.87-2.716.016-1.477 1.28-2.768 1.263-1.29 2.732-1.8 1.467-.509 2.834-.56 1.365-.05 2.441.187 1.076.238 1.588.442v-9.61q0-4.006.034-9.032 0-.985.512-1.613.513-.628 1.366-.73.717-.102 1.178.289t.94 1.086q.477.695 1.177 1.58.7.882 1.895 1.731 1.024.78 1.793 1.12t1.434.629 1.315.696q.648.407 1.434 1.324.785.883.956 1.834.171.95.017 1.731-.153.781-.495 1.274-.342.491-.58.458",
            }))
        );
      };
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var s = function (e) {
          return
           u.createElement(
            "svg",
            f(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 373,
                height: 54,
                fill: "none",
                viewBox: "0 0 373 54",
              },
              e
            ),
            o ||
              (o = u.createElement("path", {
                fill: "#FFF733",
                d: "M.844 2.094H8L32.125 24.75 56.906 2.094h6.907V52H43.28V35.813l-12.75 14-12.406-13.626V52H.844zM90.969 52H71.53V2.094H90.97zm7.625-49.906h5.062l27.25 19.437V2.094H148.5V52h-6.719l-25.656-17.156V52H98.594zm55.562 0h47.25V18.28H187.5V52h-19.438V18.281h-13.906zM247.812.688q8.719 0 14.126 2.062 5.437 2.063 7.968 6.531 2.532 4.47 2.532 11.75 0 4.875-1.844 8.938a21 21 0 0 1-5.032 6.968q-3.217 2.939-7.5 4.563-4.25 1.594-9.124 1.594-1.25 0-2.594-.063a63 63 0 0 0-2.969-.062V52h-20.406V2.219q7.281-.72 13.437-1.125 6.156-.407 11.406-.407m3.313 12.968q-1.094 0-2.469.563-1.343.562-2.594 1.312-1.218.72-2.031 1.281l-.781.563v11.781l3.656-1.781q3.156-1.563 5.438-3.844 2.312-2.312 2.312-5.968 0-1.563-.937-2.72-.906-1.186-2.594-1.187M267.594 52l24.812-47.375q.906-1.719 2.813-2.656A8.65 8.65 0 0 1 299.188 1q1.844 0 3.593.844a6.02 6.02 0 0 1 2.75 2.593L332.156 52h-25.344l-1.968-4.937h-13.5L289.656 52zm25.281-14.844h10.094l-4.781-13.5zm79.219 13.375q-6.657 2.688-14.406 2.688-5.313 0-10.313-1.625-4.97-1.626-8.937-4.75-3.938-3.126-6.282-7.688-2.312-4.561-2.312-10.437 0-6.219 2.187-11.344 2.219-5.156 6.281-8.875 4.063-3.75 9.626-5.781T360.25.688q1.25 0 3.156.125 1.938.125 4 .468 2.063.313 3.719.938v16.125a11.8 11.8 0 0 0-4.219-.782q-3.219 0-5.937 1.594a12.04 12.04 0 0 0-4.344 4.219Q355 26.031 355 29.281q0 3.219 1.25 5.032 1.25 1.812 3.688 1.812.968 0 2.312-.312 1.344-.314 3.656-1.563 2.344-1.25 6.188-4.062z",
              }))
          );
        },
        d = n(1664),
        p = n.n(d);
      let h = [
        { logo: "/images/x.png", url: "https://x.com/PacSolFun" },
        { logo: "/images/tg.png", url: "https://t.me/PacSolFun" },
        {
          logo: "/images/mint-rich.png",
          url: "https://pump.fun/coin/rRLiAekqmknBXwFAwMNQYfErwDw6r6DJJNnnHm9pump",
        },
      ];
      var m = () => {
        let [e, t] = (0, u.useState)(!0),
          n = (0, u.useRef)(null),
          [r, l] = (0, u.useState)(!1),
          o = (0, u.useCallback)((e) => {
            var t;
            ((null === (t = n.current) || void 0 === t
              ? void 0
              : t.currentTime) || 0) >= 26 &&
              n.current &&
              (n.current.currentTime = 0);
          }, []);
        return (
          (0, u.useEffect)(() => {
            setTimeout(() => {
              l(!0);
            }, 600);
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: "w-full h-screen relative",
              children: [
                (0, a.jsx)("video", {
                  ref: n,
                  muted: e,
                  className:
                    "h-full w-full object-cover object-center relative z-0",
                  src: "/bg.mp4",
                  autoPlay: !0,
                  loop: !0,
                  onTimeUpdate: o,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full h-full absolute left-0 top-0 z-10 flex flex-col items-center pt-[10.5%] pb-6 bg-[rgba(0,0,0,0.6)]",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "absolute right-14 top-14 cursor-pointer",
                      onClick: () => {
                        t(!e);
                      },
                      children: [
                        (0, a.jsx)(c, {}),
                        e &&
                          (0, a.jsx)("div", {
                            className:
                              "w-full h-[2px] bg-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -rotate-45",
                          }),
                      ],
                    }),
                    (0, a.jsx)("img", {
                      src: "/images/logo.png",
                      className: "w-[240px] h-auto mb-4",
                      alt: "",
                    }),
                    (0, a.jsx)("img", {
                      src: "/pac.png",
                      style: { width: "373px", height: "54px" },
                      // className: " mb-4",
                      alt: "",
                    }),
                    (0, a.jsx)(s, {}),
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-3 mt-9",
                      children: h.map((e, t) =>
                        (0, a.jsx)(
                          p(),
                          {
                            className: "w-12 hover:scale-110 transition-all",
                            target: "_blank",
                            href: e.url,
                            children: (0, a.jsx)("img", {
                              className: "w-full h-auto",
                              style : { borderRadius: "50%" },
                              src: e.logo,
                              alt: "",
                            }),
                          },
                          t
                        )
                      ),
                    }),
                    r &&
                      (0, a.jsx)("div", {
                        className: "flex-1 overflow-hidden relative w-full",
                        children: (0, a.jsx)("div", {
                          className:
                            "flex items-center gap-4 absolute left-0 bottom-3 scroll-left-anim",
                          children: Array.from({ length: 96 }).map((e, t) =>
                            (0, a.jsx)(
                              "div",
                              {
                                className:
                                  "w-[90px] h-[90px] flex-shrink-0 hover:scale-125 transition-all hover:mx-1",
                                children: (0, a.jsx)("img", {
                                  className: "w-full h-full",
                                  src: "/images/nft/".concat(
                                    (t % 48) + 1,
                                    ".png"
                                  ),
                                  alt: "",
                                }),
                              },
                              t
                            )
                          ),
                        }),
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    1664: function (e, t, n) {
      e.exports = n(5494);
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
