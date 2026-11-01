(() => {
    'use strict';
    var e = {
        323(e, n, t) {
            var r = t(601),
                o = t.n(r),
                s = t(314),
                i = t.n(s)()(o());
            i.push([
                e.id,
                ".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition:\n        margin 0.3s,\n        opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",
                '',
            ]);
            const a = i;
            t.d(n, ['A', 0, a]);
        },
        575(e, n, t) {
            var r = t(601),
                o = t.n(r),
                s = t(314),
                i = t.n(s)()(o());
            i.push([
                e.id,
                ".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font:\n        300 1em 'Fira Sans',\n        sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",
                '',
            ]);
            const a = i;
            t.d(n, ['A', 0, a]);
        },
        422(e, n, t) {
            var r = t(601),
                o = t.n(r),
                s = t(314),
                i = t.n(s)()(o());
            i.push([
                e.id,
                "body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n    min-width: 150px;\n    max-width: 1920px;\n}\n\nheader {\n    padding: 10px 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n",
                '',
            ]);
            const a = i;
            t.d(n, ['A', 0, a]);
        },
        314(e) {
            e.exports = function (e) {
                var n = [];
                return (
                    (n.toString = function () {
                        return this.map(function (n) {
                            var t = '',
                                r = void 0 !== n[5];
                            return (
                                n[4] && (t += '@supports ('.concat(n[4], ') {')),
                                n[2] && (t += '@media '.concat(n[2], ' {')),
                                r && (t += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
                                (t += e(n)),
                                r && (t += '}'),
                                n[2] && (t += '}'),
                                n[4] && (t += '}'),
                                t
                            );
                        }).join('');
                    }),
                    (n.i = function (e, t, r, o, s) {
                        'string' == typeof e && (e = [[null, e, void 0]]);
                        var i = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var c = this[a][0];
                                null != c && (i[c] = !0);
                            }
                        for (var l = 0; l < e.length; l++) {
                            var u = [].concat(e[l]);
                            (r && i[u[0]]) ||
                                (void 0 !== s &&
                                    (void 0 === u[5] ||
                                        (u[1] = '@layer'
                                            .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                                            .concat(u[1], '}')),
                                    (u[5] = s)),
                                t &&
                                    (u[2]
                                        ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = t))
                                        : (u[2] = t)),
                                o &&
                                    (u[4]
                                        ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = o))
                                        : (u[4] = ''.concat(o))),
                                n.push(u));
                        }
                    }),
                    n
                );
            };
        },
        601(e) {
            e.exports = function (e) {
                return e[1];
            };
        },
        168(e, n, t) {
            var r = t(72),
                o = t.n(r),
                s = t(825),
                i = t.n(s),
                a = t(659),
                c = t.n(a),
                l = t(56),
                u = t.n(l),
                d = t(540),
                f = t.n(d),
                p = t(113),
                m = t.n(p),
                _ = t(323),
                h = {};
            (h.styleTagTransform = m()),
                (h.setAttributes = u()),
                (h.insert = c().bind(null, 'head')),
                (h.domAPI = i()),
                (h.insertStyleElement = f()),
                o()(_.A, h),
                _.A && _.A.locals && _.A.locals;
        },
        180(e, n, t) {
            var r = t(72),
                o = t.n(r),
                s = t(825),
                i = t.n(s),
                a = t(659),
                c = t.n(a),
                l = t(56),
                u = t.n(l),
                d = t(540),
                f = t.n(d),
                p = t(113),
                m = t.n(p),
                _ = t(575),
                h = {};
            (h.styleTagTransform = m()),
                (h.setAttributes = u()),
                (h.insert = c().bind(null, 'head')),
                (h.domAPI = i()),
                (h.insertStyleElement = f()),
                o()(_.A, h),
                _.A && _.A.locals && _.A.locals;
        },
        939(e, n, t) {
            var r = t(72),
                o = t.n(r),
                s = t(825),
                i = t.n(s),
                a = t(659),
                c = t.n(a),
                l = t(56),
                u = t.n(l),
                d = t(540),
                f = t.n(d),
                p = t(113),
                m = t.n(p),
                _ = t(422),
                h = {};
            (h.styleTagTransform = m()),
                (h.setAttributes = u()),
                (h.insert = c().bind(null, 'head')),
                (h.domAPI = i()),
                (h.insertStyleElement = f()),
                o()(_.A, h),
                _.A && _.A.locals && _.A.locals;
        },
        72(e) {
            var n = [];
            function t(e) {
                for (var t = -1, r = 0; r < n.length; r++)
                    if (n[r].identifier === e) {
                        t = r;
                        break;
                    }
                return t;
            }
            function r(e, r) {
                for (var s = {}, i = [], a = 0; a < e.length; a++) {
                    var c = e[a],
                        l = r.base ? c[0] + r.base : c[0],
                        u = s[l] || 0,
                        d = ''.concat(l, ' ').concat(u);
                    s[l] = u + 1;
                    var f = t(d),
                        p = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
                    if (-1 !== f) n[f].references++, n[f].updater(p);
                    else {
                        var m = o(p, r);
                        (r.byIndex = a), n.splice(a, 0, { identifier: d, updater: m, references: 1 });
                    }
                    i.push(d);
                }
                return i;
            }
            function o(e, n) {
                var t = n.domAPI(n);
                return (
                    t.update(e),
                    function (n) {
                        if (n) {
                            if (
                                n.css === e.css &&
                                n.media === e.media &&
                                n.sourceMap === e.sourceMap &&
                                n.supports === e.supports &&
                                n.layer === e.layer
                            )
                                return;
                            t.update((e = n));
                        } else t.remove();
                    }
                );
            }
            e.exports = function (e, o) {
                var s = r((e = e || []), (o = o || {}));
                return function (e) {
                    e = e || [];
                    for (var i = 0; i < s.length; i++) {
                        var a = t(s[i]);
                        n[a].references--;
                    }
                    for (var c = r(e, o), l = 0; l < s.length; l++) {
                        var u = t(s[l]);
                        0 === n[u].references && (n[u].updater(), n.splice(u, 1));
                    }
                    s = c;
                };
            };
        },
        659(e) {
            var n = {};
            e.exports = function (e, t) {
                var r = (function (e) {
                    if (void 0 === n[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                            try {
                                t = t.contentDocument.head;
                            } catch (e) {
                                t = null;
                            }
                        n[e] = t;
                    }
                    return n[e];
                })(e);
                if (!r)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                r.appendChild(t);
            };
        },
        540(e) {
            e.exports = function (e) {
                var n = document.createElement('style');
                return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
            };
        },
        56(e, n, t) {
            e.exports = function (e) {
                var n = t.nc;
                n && e.setAttribute('nonce', n);
            };
        },
        825(e) {
            e.exports = function (e) {
                if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
                var n = e.insertStyleElement(e);
                return {
                    update: function (t) {
                        !(function (e, n, t) {
                            var r = '';
                            t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                                t.media && (r += '@media '.concat(t.media, ' {'));
                            var o = void 0 !== t.layer;
                            o && (r += '@layer'.concat(t.layer.length > 0 ? ' '.concat(t.layer) : '', ' {')),
                                (r += t.css),
                                o && (r += '}'),
                                t.media && (r += '}'),
                                t.supports && (r += '}');
                            var s = t.sourceMap;
                            s &&
                                'undefined' != typeof btoa &&
                                (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                                    ' */'
                                )),
                                n.styleTagTransform(r, e, n.options);
                        })(n, e, t);
                    },
                    remove: function () {
                        !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(n);
                    },
                };
            };
        },
        113(e) {
            e.exports = function (e, n) {
                if (n.styleSheet) n.styleSheet.cssText = e;
                else {
                    for (; n.firstChild; ) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(e));
                }
            };
        },
        738(e, n, t) {
            var r =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(n, '__esModule', { value: !0 });
            const o = r(t(244)),
                s = t(41);
            n.default = class {
                controller;
                view;
                constructor() {
                    (this.controller = new o.default()), (this.view = new s.AppView());
                }
                start() {
                    const e = document.querySelector('.sources');
                    e instanceof HTMLElement &&
                        (e.addEventListener('click', (e) => this.controller.getNews(e, (e) => this.view.drawNews(e))),
                        this.controller.getSources((e) => this.view.drawSources(e)));
                }
            };
        },
        34(e, n, t) {
            var r =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(n, '__esModule', { value: !0 });
            const o = r(t(359));
            class s extends o.default {
                constructor() {
                    super('https://newsapi.org/v2/', { apiKey: '9e46a6ef43a84deda7c6d906a2f3fa9a' });
                }
            }
            n.default = s;
        },
        244(e, n, t) {
            var r =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(n, '__esModule', { value: !0 });
            const o = r(t(34));
            var s;
            !(function (e) {
                (e.SOURCES = 'sources'), (e.EVERYTHING = 'everything');
            })(s || (s = {}));
            class i extends o.default {
                getSources(e) {
                    super.getResp({ endpoint: s.SOURCES }, e);
                }
                getNews(e, n) {
                    const t = e.target;
                    if (!(t instanceof HTMLElement)) return;
                    const r = e.currentTarget;
                    if (!(r instanceof HTMLElement)) return;
                    let o = t;
                    for (; o !== r; ) {
                        if (o.classList.contains('source__item')) {
                            const e = o.getAttribute('data-source-id');
                            if (!e) return;
                            return void (
                                r.getAttribute('data-source') !== e &&
                                (r.setAttribute('data-source', e),
                                super.getResp({ endpoint: s.EVERYTHING, options: { sources: e } }, n))
                            );
                        }
                        const e = o.parentElement;
                        if (!e) return;
                        o = e;
                    }
                }
            }
            n.default = i;
        },
        359(e, n) {
            var t, r;
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (function (e) {
                    e.GET = 'GET';
                })(t || (t = {})),
                (function (e) {
                    (e[(e.UNAUTHORIZED = 401)] = 'UNAUTHORIZED'), (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND');
                })(r || (r = {})),
                (n.default = class {
                    baseLink;
                    options;
                    constructor(e, n) {
                        (this.baseLink = e), (this.options = n);
                    }
                    getResp(
                        { endpoint: e, options: n = {} },
                        r = () => {
                            console.error('No callback for GET response');
                        }
                    ) {
                        this.load(t.GET, e, r, n);
                    }
                    errorHandler(e) {
                        if (!e.ok)
                            throw (
                                ((e.status !== r.UNAUTHORIZED && e.status !== r.NOT_FOUND) ||
                                    console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),
                                Error(e.statusText))
                            );
                        return e;
                    }
                    makeUrl(e, n) {
                        const t = { ...this.options, ...e };
                        let r = `${this.baseLink}${n}?`;
                        return (
                            Object.keys(t).forEach((e) => {
                                r += `${e}=${t[e]}&`;
                            }),
                            r.slice(0, -1)
                        );
                    }
                    load(e, n, t, r = {}) {
                        fetch(this.makeUrl(r, n), { method: e })
                            .then(this.errorHandler)
                            .then((e) => e.json())
                            .then((e) => t(e))
                            .catch((e) => console.error(e));
                    }
                });
        },
        41(e, n, t) {
            var r =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.AppView = void 0);
            const o = r(t(996)),
                s = r(t(912));
            class i {
                news;
                sources;
                constructor() {
                    (this.news = new o.default()), (this.sources = new s.default());
                }
                drawNews(e) {
                    const n = e?.articles ?? [];
                    this.news.draw(n);
                }
                drawSources(e) {
                    const n = e?.sources ?? [];
                    this.sources.draw(n);
                }
            }
            (n.AppView = i), (n.default = i);
        },
        996(e, n, t) {
            var r;
            Object.defineProperty(n, '__esModule', { value: !0 }),
                t(168),
                (function (e) {
                    (e.ITEM = '.news__item'),
                        (e.PHOTO = '.news__meta-photo'),
                        (e.AUTHOR = '.news__meta-author'),
                        (e.DATE = '.news__meta-date'),
                        (e.TITLE = '.news__description-title'),
                        (e.SOURCE = '.news__description-source'),
                        (e.CONTENT = '.news__description-content'),
                        (e.LINK = '.news__read-more a');
                })(r || (r = {})),
                (n.default = class {
                    draw(e) {
                        const n = e.slice(0, 10),
                            t = document.createDocumentFragment(),
                            o = document.querySelector('#newsItemTemp');
                        if (!o) return;
                        n.forEach((e, n) => {
                            const s = o.content.cloneNode(!0),
                                i = s.querySelector(r.ITEM),
                                a = s.querySelector(r.PHOTO),
                                c = s.querySelector(r.AUTHOR),
                                l = s.querySelector(r.DATE),
                                u = s.querySelector(r.TITLE),
                                d = s.querySelector(r.SOURCE),
                                f = s.querySelector(r.CONTENT),
                                p = s.querySelector(r.LINK);
                            i instanceof HTMLElement &&
                                a instanceof HTMLElement &&
                                c instanceof HTMLElement &&
                                l instanceof HTMLElement &&
                                u instanceof HTMLElement &&
                                d instanceof HTMLElement &&
                                f instanceof HTMLElement &&
                                p instanceof HTMLAnchorElement &&
                                (n % 2 && i.classList.add('alt'),
                                (a.style.backgroundImage = `url(${e.urlToImage || 'img/news_placeholder.jpg'})`),
                                (c.textContent = e.author || e.source.name),
                                (l.textContent = e.publishedAt.slice(0, 10).split('-').reverse().join('-')),
                                (u.textContent = e.title),
                                (d.textContent = e.source.name),
                                (f.textContent = e.description),
                                p.setAttribute('href', e.url),
                                t.append(s));
                        });
                        const s = document.querySelector('.news');
                        s instanceof HTMLElement && ((s.innerHTML = ''), s.appendChild(t));
                    }
                });
        },
        912(e, n, t) {
            var r;
            Object.defineProperty(n, '__esModule', { value: !0 }),
                t(180),
                (function (e) {
                    (e.TEMPLATE = '#sourceItemTemp'), (e.NAME = '.source__item-name'), (e.ITEM = '.source__item');
                })(r || (r = {})),
                (n.default = class {
                    draw(e) {
                        const n = document.createDocumentFragment(),
                            t = document.querySelector(r.TEMPLATE);
                        if (!(t instanceof HTMLTemplateElement)) return;
                        e.forEach((e) => {
                            const o = t.content.cloneNode(!0),
                                s = o.querySelector(r.NAME),
                                i = o.querySelector(r.ITEM);
                            s instanceof HTMLElement &&
                                i instanceof HTMLElement &&
                                ((s.textContent = e.name), i.setAttribute('data-source-id', e.id), n.append(o));
                        });
                        const o = document.querySelector('.sources');
                        o instanceof HTMLElement && ((o.innerHTML = ''), o.append(n));
                    }
                });
        },
        156(e, n, t) {
            var r =
                (this && this.__importDefault) ||
                function (e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(n, '__esModule', { value: !0 });
            const o = r(t(738));
            t(939), new o.default().start();
        },
    };
    const n = {};
    function t(r) {
        const o = n[r];
        if (void 0 !== o) return o.exports;
        const s = (n[r] = { id: r, exports: {} });
        return e[r].call(s.exports, s, s.exports, t), s.exports;
    }
    (t.n = (e) => {
        const n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, { a: n }), n;
    }),
        (t.d = (e, n) => {
            if (Array.isArray(n))
                for (var r = 0; r < n.length; ) {
                    var o = n[r++],
                        s = n[r++],
                        i = 0 === s ? { enumerable: !0, value: n[r++] } : { enumerable: !0, get: s };
                    t.o(e, o) || Object.defineProperty(e, o, i);
                }
            else for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
        }),
        (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (t.nc = void 0),
        t(156);
})();
