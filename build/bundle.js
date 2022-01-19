(() => {
  "use strict";
  function e() {}
  function t(e) {
    return e();
  }
  function n() {
    return Object.create(null);
  }
  function s(e) {
    e.forEach(t);
  }
  function o(e) {
    return "function" == typeof e;
  }
  function a(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let r;
  function l(e, t) {
    return r || (r = document.createElement("a")), (r.href = t), e === r.href;
  }
  function i(e) {
    return 0 === Object.keys(e).length;
  }
  new Set();
  let c,
    u = !1;
  function d(e, t) {
    e.appendChild(t);
  }
  function f(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function h(e) {
    e.parentNode.removeChild(e);
  }
  function p(e) {
    return document.createElement(e);
  }
  function m() {
    return (e = " "), document.createTextNode(e);
    var e;
  }
  function g(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function $(e) {
    c = e;
  }
  new Map();
  const b = [],
    v = [],
    k = [],
    y = [],
    w = Promise.resolve();
  let x = !1;
  function _(e) {
    k.push(e);
  }
  const T = new Set();
  let E = 0;
  function S() {
    const e = c;
    do {
      for (; E < b.length; ) {
        const e = b[E];
        E++, $(e), C(e.$$);
      }
      for ($(null), b.length = 0, E = 0; v.length; ) v.pop()();
      for (let e = 0; e < k.length; e += 1) {
        const t = k[e];
        T.has(t) || (T.add(t), t());
      }
      k.length = 0;
    } while (b.length);
    for (; y.length; ) y.pop()();
    (x = !1), T.clear(), $(e);
  }
  function C(e) {
    if (null !== e.fragment) {
      e.update(), s(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(_);
    }
  }
  const H = new Set();
  let M;
  function A(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (s(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function L(a, r, l, i, d, f, p, m = [-1]) {
    const g = c;
    $(a);
    const v = (a.$$ = {
      fragment: null,
      ctx: null,
      props: f,
      update: e,
      not_equal: d,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(r.context || (g ? g.$$.context : [])),
      callbacks: n(),
      dirty: m,
      skip_bound: !1,
      root: r.target || g.$$.root,
    });
    p && p(v.root);
    let k = !1;
    if (
      ((v.ctx = l
        ? l(a, r.props || {}, (e, t, ...n) => {
            const s = n.length ? n[0] : t;
            return (
              v.ctx &&
                d(v.ctx[e], (v.ctx[e] = s)) &&
                (!v.skip_bound && v.bound[e] && v.bound[e](s),
                k &&
                  (function (e, t) {
                    -1 === e.$$.dirty[0] &&
                      (b.push(e),
                      x || ((x = !0), w.then(S)),
                      e.$$.dirty.fill(0)),
                      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                  })(a, e)),
              t
            );
          })
        : []),
      v.update(),
      (k = !0),
      s(v.before_update),
      (v.fragment = !!i && i(v.ctx)),
      r.target)
    ) {
      if (r.hydrate) {
        u = !0;
        const e = ((E = r.target), Array.from(E.childNodes));
        v.fragment && v.fragment.l(e), e.forEach(h);
      } else v.fragment && v.fragment.c();
      r.intro && (y = a.$$.fragment) && y.i && (H.delete(y), y.i(T)),
        (function (e, n, a, r) {
          const {
            fragment: l,
            on_mount: i,
            on_destroy: c,
            after_update: u,
          } = e.$$;
          l && l.m(n, a),
            r ||
              _(() => {
                const n = i.map(t).filter(o);
                c ? c.push(...n) : s(n), (e.$$.on_mount = []);
              }),
            u.forEach(_);
        })(a, r.target, r.anchor, r.customElement),
        (u = !1),
        S();
    }
    var y, T, E;
    $(g);
  }
  "undefined" != typeof window
    ? window
    : "undefined" != typeof globalThis
    ? globalThis
    : global,
    new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ]),
    "function" == typeof HTMLElement &&
      (M = class extends HTMLElement {
        constructor() {
          super(), this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount: e } = this.$$;
          this.$$.on_disconnect = e.map(t).filter(o);
          for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
        }
        attributeChangedCallback(e, t, n) {
          this[e] = n;
        }
        disconnectedCallback() {
          s(this.$$.on_disconnect);
        }
        $destroy() {
          A(this, 1), (this.$destroy = e);
        }
        $on(e, t) {
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            n.push(t),
            () => {
              const e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !i(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      });
  function B(e) {
    !(function (e, t, n) {
      const s = (function (e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument;
      })(e);
      if (!s.getElementById(t)) {
        const e = p("style");
        (e.id = t),
          (e.textContent =
            ".center.svelte-3s6u2k{display:block;margin-left:auto;margin-right:auto}.header.svelte-3s6u2k{background-image:url(./assets/header-background2.png);background-repeat:no-repeat;background-size:cover;height:50rem;animation:svelte-3s6u2k-fadein 1s}#logo.svelte-3s6u2k{padding-top:14rem;padding-bottom:5rem;animation:svelte-3s6u2k-fadein 1.5s ease-in}#chromeButton.svelte-3s6u2k{box-shadow:0px 0px 20px rgb(206, 206, 206);border-radius:10%/35%}h1.svelte-3s6u2k{font-family:Raleway, Arial, Helvetica, sans;font-weight:900;font-size:2.5em}p.svelte-3s6u2k{font-family:Raleway, Arial, Helvetica, sans;font-size:1.3em}.whiteText.svelte-3s6u2k{color:white;text-align:center}span.svelte-3s6u2k{font-family:Raleway, Arial, Helvetica, sans}.mainContainer.svelte-3s6u2k{padding:3em;margin-left:10em;margin-right:10em;margin-top:5em;border-radius:20px;background-color:white}@keyframes svelte-3s6u2k-fadein{from{opacity:0}to{opacity:1}}@keyframes svelte-3s6u2k-slideup{0%{transform:translateY(250px)}100%{transform:translateY(0)}}"),
          (function (e, t) {
            d(e.head || e, t);
          })(s, e);
      }
    })(e, "svelte-3s6u2k");
  }
  function R(t) {
    let n, s, o, a, r, i, c, u, $, b, v, k, y, w, x, _;
    return {
      c() {
        (n = p("link")),
          (s = m()),
          (o = p("div")),
          (a = p("img")),
          (i = m()),
          (c = p("br")),
          (u = m()),
          ($ = p("img")),
          (v = m()),
          (k = p("div")),
          (k.innerHTML =
            '<h1 class="svelte-3s6u2k">Built for <span style="color: rgb(255, 50, 57)" class="svelte-3s6u2k">devs</span></h1> \n  <p class="svelte-3s6u2k">Developed under tech accelerator, OS Labs, <span style="font-weight: 700; color: coral" class="svelte-3s6u2k">DeLorean</span> is Svelte&#39;s the first time traveling debugger tool that allows you to jump from state to state seamlessly.</p>'),
          (y = m()),
          (w = p("div")),
          (w.innerHTML =
            '<div><h1 class="svelte-3s6u2k">Features</h1> \n    <span class="svelte-3s6u2k">feature 1:</span> \n    <br/> \n    \n    <span class="svelte-3s6u2k">feature 2:</span></div> \n\n  <div><h1 class="whiteText svelte-3s6u2k">How to Get Started</h1> \n    <span class="svelte-3s6u2k">Step 1: <br/>\n      Step 2: <br/>\n      Step 3: <br/></span></div>'),
          (x = m()),
          (_ = p("div")),
          (_.innerHTML =
            '<h1 class="whiteText svelte-3s6u2k">Meet the Team</h1> \n  <div></div>'),
          g(
            n,
            "href",
            "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          ),
          g(n, "rel", "stylesheet"),
          g(a, "id", "logo"),
          g(a, "class", "center svelte-3s6u2k"),
          l(a.src, (r = N)) || g(a, "src", r),
          g(a, "alt", "logo"),
          g($, "class", "center svelte-3s6u2k"),
          g($, "id", "chromeButton"),
          l($.src, (b = O)) || g($, "src", b),
          g($, "alt", "chrome-webstore-button"),
          g(o, "class", "header svelte-3s6u2k"),
          g(k, "class", "mainContainer svelte-3s6u2k");
      },
      m(e, t) {
        d(document.head, n),
          f(e, s, t),
          f(e, o, t),
          d(o, a),
          d(o, i),
          d(o, c),
          d(o, u),
          d(o, $),
          f(e, v, t),
          f(e, k, t),
          f(e, y, t),
          f(e, w, t),
          f(e, x, t),
          f(e, _, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        h(n),
          e && h(s),
          e && h(o),
          e && h(v),
          e && h(k),
          e && h(y),
          e && h(w),
          e && h(x),
          e && h(_);
      },
    };
  }
  let N = "./assets/logo(white).png",
    O = "./assets/webstore-button.png";
  new (class extends class {
    $destroy() {
      A(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !i(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  } {
    constructor(e) {
      super(), L(this, e, null, R, a, {}, B);
    }
  })({ target: document.getElementById("root") });
})();
