/*
  1. jQuery v2.2.4
  2. jQuery UI v1.12.1
  3. jquery.countTo
  4. jquery.appear
  5. jquery-css-skills-bar
  6. parallax
  7. jquery.mb.YTPlayer v3.1.4
  8. Slick v1.6.0
  9. Fullscreeneo v1.0.0
  10. jQuery.enllax.js v1.1.0
  11. PhotoSwipe v4.1.1
    11.1. PhotoSwipe Default UI v4.1.1
	11.2. PhotoSwipe Init
  12. Owl Carousel v2.2.0
  13. Bootstrap v3.3.7
*/

// 1. jQuery v2.2.4
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function (a, b) {
 "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
  if (!a.document)
   throw new Error("jQuery requires a window with a document");
  return b(a)
 } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
 var c = [],
  d = a.document,
  e = c.slice,
  f = c.concat,
  g = c.push,
  h = c.indexOf,
  i = {},
  j = i.toString,
  k = i.hasOwnProperty,
  l = {},
  m = "2.2.4",
  n = function (a, b) {
   return new n.fn.init(a, b)
  },
  o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  p = /^-ms-/,
  q = /-([\da-z])/gi,
  r = function (a, b) {
   return b.toUpperCase()
  };
 n.fn = n.prototype = {
  jquery: m,
  constructor: n,
  selector: "",
  length: 0,
  toArray: function () {
   return e.call(this)
  },
  get: function (a) {
   return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
  },
  pushStack: function (a) {
   var b = n.merge(this.constructor(), a);
   return b.prevObject = this, b.context = this.context, b
  },
  each: function (a) {
   return n.each(this, a)
  },
  map: function (a) {
   return this.pushStack(n.map(this, function (b, c) {
    return a.call(b, c, b)
   }))
  },
  slice: function () {
   return this.pushStack(e.apply(this, arguments))
  },
  first: function () {
   return this.eq(0)
  },
  last: function () {
   return this.eq(-1)
  },
  eq: function (a) {
   var b = this.length,
    c = +a + (0 > a ? b : 0);
   return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
  },
  end: function () {
   return this.prevObject || this.constructor()
  },
  push: g,
  sort: c.sort,
  splice: c.splice
 }, n.extend = n.fn.extend = function () {
  var a,
   b,
   c,
   d,
   e,
   f,
   g = arguments[0] || {},
   h = 1,
   i = arguments.length,
   j = !1;
  for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
   if (null != (a = arguments[h]))
    for (b in a)
     c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
  return g
 }, n.extend({
  expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function (a) {
   throw new Error(a)
  },
  noop: function () {},
  isFunction: function (a) {
   return "function" === n.type(a)
  },
  isArray: Array.isArray,
  isWindow: function (a) {
   return null != a && a === a.window
  },
  isNumeric: function (a) {
   var b = a && a.toString();
   return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
  },
  isPlainObject: function (a) {
   var b;
   if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
    return !1;
   if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
    return !1;
   for (b in a)
   ;
   return void 0 === b || k.call(a, b)
  },
  isEmptyObject: function (a) {
   var b;
   for (b in a)
    return !1;
   return !0
  },
  type: function (a) {
   return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
  },
  globalEval: function (a) {
   var b,
    c = eval;
   a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
  },
  camelCase: function (a) {
   return a.replace(p, "ms-").replace(q, r)
  },
  nodeName: function (a, b) {
   return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
  },
  each: function (a, b) {
   var c,
    d = 0;
   if (s(a)) {
    for (c = a.length; c > d; d++)
     if (b.call(a[d], d, a[d]) === !1)
      break
   } else
    for (d in a)
     if (b.call(a[d], d, a[d]) === !1)
      break;
   return a
  },
  trim: function (a) {
   return null == a ? "" : (a + "").replace(o, "")
  },
  makeArray: function (a, b) {
   var c = b || [];
   return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
  },
  inArray: function (a, b, c) {
   return null == b ? -1 : h.call(b, a, c)
  },
  merge: function (a, b) {
   for (var c = +b.length, d = 0, e = a.length; c > d; d++)
    a[e++] = b[d];
   return a.length = e, a
  },
  grep: function (a, b, c) {
   for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
    d = !b(a[f], f), d !== h && e.push(a[f]);
   return e
  },
  map: function (a, b, c) {
   var d,
    e,
    g = 0,
    h = [];
   if (s(a))
    for (d = a.length; d > g; g++)
     e = b(a[g], g, c), null != e && h.push(e);
   else
    for (g in a)
     e = b(a[g], g, c), null != e && h.push(e);
   return f.apply([], h)
  },
  guid: 1,
  proxy: function (a, b) {
   var c,
    d,
    f;
   return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
    return a.apply(b || this, d.concat(e.call(arguments)))
   }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
  },
  now: Date.now,
  support: l
 }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
  i["[object " + b + "]"] = b.toLowerCase()
 });

 function s(a) {
  var b = !!a && "length" in a && a.length,
   c = n.type(a);
  return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
 }
 var t = function (a) {
  var b,
   c,
   d,
   e,
   f,
   g,
   h,
   i,
   j,
   k,
   l,
   m,
   n,
   o,
   p,
   q,
   r,
   s,
   t,
   u = "sizzle" + 1 * new Date,
   v = a.document,
   w = 0,
   x = 0,
   y = ga(),
   z = ga(),
   A = ga(),
   B = function (a, b) {
    return a === b && (l = !0), 0
   },
   C = 1 << 31,
   D = {}.hasOwnProperty,
   E = [],
   F = E.pop,
   G = E.push,
   H = E.push,
   I = E.slice,
   J = function (a, b) {
    for (var c = 0, d = a.length; d > c; c++)
     if (a[c] === b)
      return c;
    return -1
   },
   K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   L = "[\\x20\\t\\r\\n\\f]",
   M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
   N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
   O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
   P = new RegExp(L + "+", "g"),
   Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
   R = new RegExp("^" + L + "*," + L + "*"),
   S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
   T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
   U = new RegExp(O),
   V = new RegExp("^" + M + "$"),
   W = {
    ID: new RegExp("^#(" + M + ")"),
    CLASS: new RegExp("^\\.(" + M + ")"),
    TAG: new RegExp("^(" + M + "|[*])"),
    ATTR: new RegExp("^" + N),
    PSEUDO: new RegExp("^" + O),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + K + ")$", "i"),
    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
   },
   X = /^(?:input|select|textarea|button)$/i,
   Y = /^h\d$/i,
   Z = /^[^{]+\{\s*\[native \w/,
   $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   _ = /[+~]/,
   aa = /'|\\/g,
   ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
   ca = function (a, b, c) {
    var d = "0x" + b - 65536;
    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
   },
   da = function () {
    m()
   };
  try {
   H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
  } catch (ea) {
   H = {
    apply: E.length ? function (a, b) {
     G.apply(a, I.call(b))
    } : function (a, b) {
     var c = a.length,
      d = 0;
     while (a[c++] = b[d++])
     ;
     a.length = c - 1
    }
   }
  }

  function fa(a, b, d, e) {
   var f,
    h,
    j,
    k,
    l,
    o,
    r,
    s,
    w = b && b.ownerDocument,
    x = b ? b.nodeType : 9;
   if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
    return d;
   if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
    if (11 !== x && (o = $.exec(a)))
     if (f = o[1]) {
      if (9 === x) {
       if (!(j = b.getElementById(f)))
        return d;
       if (j.id === f)
        return d.push(j), d
      } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
       return d.push(j), d
     } else {
      if (o[2])
       return H.apply(d, b.getElementsByTagName(a)), d;
      if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
       return H.apply(d, b.getElementsByClassName(f)), d
     }
    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
     if (1 !== x)
      w = b, s = a;
     else if ("object" !== b.nodeName.toLowerCase()) {
      (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
      while (h--)
       r[h] = l + " " + qa(r[h]);
      s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
     }
     if (s)
      try {
       return H.apply(d, w.querySelectorAll(s)), d
      } catch (y) {} finally {
       k === u && b.removeAttribute("id")
      }
    }
   }
   return i(a.replace(Q, "$1"), b, d, e)
  }

  function ga() {
   var a = [];

   function b(c, e) {
    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
   }
   return b
  }

  function ha(a) {
   return a[u] = !0, a
  }

  function ia(a) {
   var b = n.createElement("div");
   try {
    return !!a(b)
   } catch (c) {
    return !1
   } finally {
    b.parentNode && b.parentNode.removeChild(b), b = null
   }
  }

  function ja(a, b) {
   var c = a.split("|"),
    e = c.length;
   while (e--)
    d.attrHandle[c[e]] = b
  }

  function ka(a, b) {
   var c = b && a,
    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
   if (d)
    return d;
   if (c)
    while (c = c.nextSibling)
     if (c === b)
      return -1;
   return a ? 1 : -1
  }

  function la(a) {
   return function (b) {
    var c = b.nodeName.toLowerCase();
    return "input" === c && b.type === a
   }
  }

  function ma(a) {
   return function (b) {
    var c = b.nodeName.toLowerCase();
    return ("input" === c || "button" === c) && b.type === a
   }
  }

  function na(a) {
   return ha(function (b) {
    return b = +b, ha(function (c, d) {
     var e,
      f = a([], c.length, b),
      g = f.length;
     while (g--)
      c[e = f[g]] && (c[e] = !(d[e] = c[e]))
    })
   })
  }

  function oa(a) {
   return a && "undefined" != typeof a.getElementsByTagName && a
  }
  c = fa.support = {}, f = fa.isXML = function (a) {
   var b = a && (a.ownerDocument || a).documentElement;
   return b ? "HTML" !== b.nodeName : !1
  }, m = fa.setDocument = function (a) {
   var b,
    e,
    g = a ? a.ownerDocument || a : v;
   return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
    return a.className = "i", !a.getAttribute("className")
   }), c.getElementsByTagName = ia(function (a) {
    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
   }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
   }), c.getById ? (d.find.ID = function (a, b) {
    if ("undefined" != typeof b.getElementById && p) {
     var c = b.getElementById(a);
     return c ? [c] : []
    }
   }, d.filter.ID = function (a) {
    var b = a.replace(ba, ca);
    return function (a) {
     return a.getAttribute("id") === b
    }
   }) : (delete d.find.ID, d.filter.ID = function (a) {
    var b = a.replace(ba, ca);
    return function (a) {
     var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
     return c && c.value === b
    }
   }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
   } : function (a, b) {
    var c,
     d = [],
     e = 0,
     f = b.getElementsByTagName(a);
    if ("*" === a) {
     while (c = f[e++])
      1 === c.nodeType && d.push(c);
     return d
    }
    return f
   }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
   }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
   }), ia(function (a) {
    var b = n.createElement("input");
    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
   })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
   }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
    var c = 9 === a.nodeType ? a.documentElement : a,
     d = b && b.parentNode;
    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
   } : function (a, b) {
    if (b)
     while (b = b.parentNode)
      if (b === a)
       return !0;
    return !1
   }, B = b ? function (a, b) {
    if (a === b)
     return l = !0, 0;
    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
   } : function (a, b) {
    if (a === b)
     return l = !0, 0;
    var c,
     d = 0,
     e = a.parentNode,
     f = b.parentNode,
     g = [a],
     h = [b];
    if (!e || !f)
     return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
    if (e === f)
     return ka(a, b);
    c = a;
    while (c = c.parentNode)
     g.unshift(c);
    c = b;
    while (c = c.parentNode)
     h.unshift(c);
    while (g[d] === h[d])
     d++;
    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
   }, n) : n
  }, fa.matches = function (a, b) {
   return fa(a, null, null, b)
  }, fa.matchesSelector = function (a, b) {
   if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
    try {
     var d = s.call(a, b);
     if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
      return d
    } catch (e) {}
   return fa(b, n, null, [a]).length > 0
  }, fa.contains = function (a, b) {
   return (a.ownerDocument || a) !== n && m(a), t(a, b)
  }, fa.attr = function (a, b) {
   (a.ownerDocument || a) !== n && m(a);
   var e = d.attrHandle[b.toLowerCase()],
    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
   return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
  }, fa.error = function (a) {
   throw new Error("Syntax error, unrecognized expression: " + a)
  }, fa.uniqueSort = function (a) {
   var b,
    d = [],
    e = 0,
    f = 0;
   if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
    while (b = a[f++])
     b === a[f] && (e = d.push(f));
    while (e--)
     a.splice(d[e], 1)
   }
   return k = null, a
  }, e = fa.getText = function (a) {
   var b,
    c = "",
    d = 0,
    f = a.nodeType;
   if (f) {
    if (1 === f || 9 === f || 11 === f) {
     if ("string" == typeof a.textContent)
      return a.textContent;
     for (a = a.firstChild; a; a = a.nextSibling)
      c += e(a)
    } else if (3 === f || 4 === f)
     return a.nodeValue
   } else
    while (b = a[d++])
     c += e(b);
   return c
  }, d = fa.selectors = {
   cacheLength: 50,
   createPseudo: ha,
   match: W,
   attrHandle: {},
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function (a) {
     return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
    },
    CHILD: function (a) {
     return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
    },
    PSEUDO: function (a) {
     var b,
      c = !a[6] && a[2];
     return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
    }
   },
   filter: {
    TAG: function (a) {
     var b = a.replace(ba, ca).toLowerCase();
     return "*" === a ? function () {
      return !0
     } : function (a) {
      return a.nodeName && a.nodeName.toLowerCase() === b
     }
    },
    CLASS: function (a) {
     var b = y[a + " "];
     return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
      return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
     })
    },
    ATTR: function (a, b, c) {
     return function (d) {
      var e = fa.attr(d, a);
      return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
     }
    },
    CHILD: function (a, b, c, d, e) {
     var f = "nth" !== a.slice(0, 3),
      g = "last" !== a.slice(-4),
      h = "of-type" === b;
     return 1 === d && 0 === e ? function (a) {
      return !!a.parentNode
     } : function (b, c, i) {
      var j,
       k,
       l,
       m,
       n,
       o,
       p = f !== g ? "nextSibling" : "previousSibling",
       q = b.parentNode,
       r = h && b.nodeName.toLowerCase(),
       s = !i && !h,
       t = !1;
      if (q) {
       if (f) {
        while (p) {
         m = b;
         while (m = m[p])
          if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
           return !1;
         o = p = "only" === a && !o && "nextSibling"
        }
        return !0
       }
       if (o = [g ? q.firstChild : q.lastChild], g && s) {
        m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
         if (1 === m.nodeType && ++t && m === b) {
          k[a] = [w, n, t];
          break
         }
       } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
         if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))
          break;
       return t -= e, t === d || t % d === 0 && t / d >= 0
      }
     }
    },
    PSEUDO: function (a, b) {
     var c,
      e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
     return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
      var d,
       f = e(a, b),
       g = f.length;
      while (g--)
       d = J(a, f[g]), a[d] = !(c[d] = f[g])
     }) : function (a) {
      return e(a, 0, c)
     }) : e
    }
   },
   pseudos: {
    not: ha(function (a) {
     var b = [],
      c = [],
      d = h(a.replace(Q, "$1"));
     return d[u] ? ha(function (a, b, c, e) {
      var f,
       g = d(a, null, e, []),
       h = a.length;
      while (h--)
       (f = g[h]) && (a[h] = !(b[h] = f))
     }) : function (a, e, f) {
      return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
     }
    }),
    has: ha(function (a) {
     return function (b) {
      return fa(a, b).length > 0
     }
    }),
    contains: ha(function (a) {
     return a = a.replace(ba, ca),
      function (b) {
       return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
      }
    }),
    lang: ha(function (a) {
     return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
      function (b) {
       var c;
       do
        if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
         return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
       while ((b = b.parentNode) && 1 === b.nodeType);
       return !1
      }
    }),
    target: function (b) {
     var c = a.location && a.location.hash;
     return c && c.slice(1) === b.id
    },
    root: function (a) {
     return a === o
    },
    focus: function (a) {
     return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
    },
    enabled: function (a) {
     return a.disabled === !1
    },
    disabled: function (a) {
     return a.disabled === !0
    },
    checked: function (a) {
     var b = a.nodeName.toLowerCase();
     return "input" === b && !!a.checked || "option" === b && !!a.selected
    },
    selected: function (a) {
     return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
    },
    empty: function (a) {
     for (a = a.firstChild; a; a = a.nextSibling)
      if (a.nodeType < 6)
       return !1;
     return !0
    },
    parent: function (a) {
     return !d.pseudos.empty(a)
    },
    header: function (a) {
     return Y.test(a.nodeName)
    },
    input: function (a) {
     return X.test(a.nodeName)
    },
    button: function (a) {
     var b = a.nodeName.toLowerCase();
     return "input" === b && "button" === a.type || "button" === b
    },
    text: function (a) {
     var b;
     return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
    },
    first: na(function () {
     return [0]
    }),
    last: na(function (a, b) {
     return [b - 1]
    }),
    eq: na(function (a, b, c) {
     return [0 > c ? c + b : c]
    }),
    even: na(function (a, b) {
     for (var c = 0; b > c; c += 2)
      a.push(c);
     return a
    }),
    odd: na(function (a, b) {
     for (var c = 1; b > c; c += 2)
      a.push(c);
     return a
    }),
    lt: na(function (a, b, c) {
     for (var d = 0 > c ? c + b : c; --d >= 0;)
      a.push(d);
     return a
    }),
    gt: na(function (a, b, c) {
     for (var d = 0 > c ? c + b : c; ++d < b;)
      a.push(d);
     return a
    })
   }
  }, d.pseudos.nth = d.pseudos.eq;
  for (b in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
   })
   d.pseudos[b] = la(b);
  for (b in {
    submit: !0,
    reset: !0
   })
   d.pseudos[b] = ma(b);

  function pa() {}
  pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
   var c,
    e,
    f,
    g,
    h,
    i,
    j,
    k = z[a + " "];
   if (k)
    return b ? 0 : k.slice(0);
   h = a, i = [], j = d.preFilter;
   while (h) {
    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
     value: c,
     type: e[0].replace(Q, " ")
    }), h = h.slice(c.length));
    for (g in d.filter)
     !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
      value: c,
      type: g,
      matches: e
     }), h = h.slice(c.length));
    if (!c)
     break
   }
   return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
  };

  function qa(a) {
   for (var b = 0, c = a.length, d = ""; c > b; b++)
    d += a[b].value;
   return d
  }

  function ra(a, b, c) {
   var d = b.dir,
    e = c && "parentNode" === d,
    f = x++;
   return b.first ? function (b, c, f) {
    while (b = b[d])
     if (1 === b.nodeType || e)
      return a(b, c, f)
   } : function (b, c, g) {
    var h,
     i,
     j,
     k = [w, f];
    if (g) {
     while (b = b[d])
      if ((1 === b.nodeType || e) && a(b, c, g))
       return !0
    } else
     while (b = b[d])
      if (1 === b.nodeType || e) {
       if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f)
        return k[2] = h[2];
       if (i[d] = k, k[2] = a(b, c, g))
        return !0
      }
   }
  }

  function sa(a) {
   return a.length > 1 ? function (b, c, d) {
    var e = a.length;
    while (e--)
     if (!a[e](b, c, d))
      return !1;
    return !0
   } : a[0]
  }

  function ta(a, b, c) {
   for (var d = 0, e = b.length; e > d; d++)
    fa(a, b[d], c);
   return c
  }

  function ua(a, b, c, d, e) {
   for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
    (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
   return g
  }

  function va(a, b, c, d, e, f) {
   return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
    var j,
     k,
     l,
     m = [],
     n = [],
     o = g.length,
     p = f || ta(b || "*", h.nodeType ? [h] : h, []),
     q = !a || !f && b ? p : ua(p, m, a, h, i),
     r = c ? e || (f ? a : o || d) ? [] : g : q;
    if (c && c(q, r, h, i), d) {
     j = ua(r, n), d(j, [], h, i), k = j.length;
     while (k--)
      (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
    }
    if (f) {
     if (e || a) {
      if (e) {
       j = [], k = r.length;
       while (k--)
        (l = r[k]) && j.push(q[k] = l);
       e(null, r = [], j, i)
      }
      k = r.length;
      while (k--)
       (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
     }
    } else
     r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
   })
  }

  function wa(a) {
   for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
     return a === b
    }, h, !0), l = ra(function (a) {
     return J(b, a) > -1
    }, h, !0), m = [function (a, c, d) {
     var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
     return b = null, e
    }]; f > i; i++)
    if (c = d.relative[a[i].type])
     m = [ra(sa(m), c)];
    else {
     if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
      for (e = ++i; f > e; e++)
       if (d.relative[a[e].type])
        break;
      return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
       value: " " === a[i - 2].type ? "*" : ""
      })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
     }
     m.push(c)
    }
   return sa(m)
  }

  function xa(a, b) {
   var c = b.length > 0,
    e = a.length > 0,
    f = function (f, g, h, i, k) {
     var l,
      o,
      q,
      r = 0,
      s = "0",
      t = f && [],
      u = [],
      v = j,
      x = f || e && d.find.TAG("*", k),
      y = w += null == v ? 1 : Math.random() || .1,
      z = x.length;
     for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
      if (e && l) {
       o = 0, g || l.ownerDocument === n || (m(l), h = !p);
       while (q = a[o++])
        if (q(l, g || n, h)) {
         i.push(l);
         break
        }
       k && (w = y)
      }
      c && ((l = !q && l) && r--, f && t.push(l))
     }
     if (r += s, c && s !== r) {
      o = 0;
      while (q = b[o++])
       q(t, u, g, h);
      if (f) {
       if (r > 0)
        while (s--)
         t[s] || u[s] || (u[s] = F.call(i));
       u = ua(u)
      }
      H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
     }
     return k && (w = y, j = v), t
    };
   return c ? ha(f) : f
  }
  return h = fa.compile = function (a, b) {
   var c,
    d = [],
    e = [],
    f = A[a + " "];
   if (!f) {
    b || (b = g(a)), c = b.length;
    while (c--)
     f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
    f = A(a, xa(e, d)), f.selector = a
   }
   return f
  }, i = fa.select = function (a, b, e, f) {
   var i,
    j,
    k,
    l,
    m,
    n = "function" == typeof a && a,
    o = !f && g(a = n.selector || a);
   if (e = e || [], 1 === o.length) {
    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
     if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b)
      return e;
     n && (b = b.parentNode), a = a.slice(j.shift().value.length)
    }
    i = W.needsContext.test(a) ? 0 : j.length;
    while (i--) {
     if (k = j[i], d.relative[l = k.type])
      break;
     if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
      if (j.splice(i, 1), a = f.length && qa(j), !a)
       return H.apply(e, f), e;
      break
     }
    }
   }
   return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
  }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
   return 1 & a.compareDocumentPosition(n.createElement("div"))
  }), ia(function (a) {
   return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
  }) || ja("type|href|height|width", function (a, b, c) {
   return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
  }), c.attributes && ia(function (a) {
   return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
  }) || ja("value", function (a, b, c) {
   return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
  }), ia(function (a) {
   return null == a.getAttribute("disabled")
  }) || ja(K, function (a, b, c) {
   var d;
   return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
  }), fa
 }(a);
 n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
 var u = function (a, b, c) {
   var d = [],
    e = void 0 !== c;
   while ((a = a[b]) && 9 !== a.nodeType)
    if (1 === a.nodeType) {
     if (e && n(a).is(c))
      break;
     d.push(a)
    }
   return d
  },
  v = function (a, b) {
   for (var c = []; a; a = a.nextSibling)
    1 === a.nodeType && a !== b && c.push(a);
   return c
  },
  w = n.expr.match.needsContext,
  x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
  y = /^.[^:#\[\.,]*$/;

 function z(a, b, c) {
  if (n.isFunction(b))
   return n.grep(a, function (a, d) {
    return !!b.call(a, d, a) !== c
   });
  if (b.nodeType)
   return n.grep(a, function (a) {
    return a === b !== c
   });
  if ("string" == typeof b) {
   if (y.test(b))
    return n.filter(b, a, c);
   b = n.filter(b, a)
  }
  return n.grep(a, function (a) {
   return h.call(b, a) > -1 !== c
  })
 }
 n.filter = function (a, b, c) {
  var d = b[0];
  return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
   return 1 === a.nodeType
  }))
 }, n.fn.extend({
  find: function (a) {
   var b,
    c = this.length,
    d = [],
    e = this;
   if ("string" != typeof a)
    return this.pushStack(n(a).filter(function () {
     for (b = 0; c > b; b++)
      if (n.contains(e[b], this))
       return !0
    }));
   for (b = 0; c > b; b++)
    n.find(a, e[b], d);
   return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
  },
  filter: function (a) {
   return this.pushStack(z(this, a || [], !1))
  },
  not: function (a) {
   return this.pushStack(z(this, a || [], !0))
  },
  is: function (a) {
   return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
  }
 });
 var A,
  B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  C = n.fn.init = function (a, b, c) {
   var e,
    f;
   if (!a)
    return this;
   if (c = c || A, "string" == typeof a) {
    if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b)
     return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
    if (e[1]) {
     if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
      for (e in b)
       n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
     return this
    }
    return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
   }
   return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
  };
 C.prototype = n.fn, A = n(d);
 var D = /^(?:parents|prev(?:Until|All))/,
  E = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 n.fn.extend({
  has: function (a) {
   var b = n(a, this),
    c = b.length;
   return this.filter(function () {
    for (var a = 0; c > a; a++)
     if (n.contains(this, b[a]))
      return !0
   })
  },
  closest: function (a, b) {
   for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
    for (c = this[d]; c && c !== b; c = c.parentNode)
     if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
      f.push(c);
      break
     }
   return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
  },
  index: function (a) {
   return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function (a, b) {
   return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
  },
  addBack: function (a) {
   return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }
 });

 function F(a, b) {
  while ((a = a[b]) && 1 !== a.nodeType)
  ;
  return a
 }
 n.each({
  parent: function (a) {
   var b = a.parentNode;
   return b && 11 !== b.nodeType ? b : null
  },
  parents: function (a) {
   return u(a, "parentNode")
  },
  parentsUntil: function (a, b, c) {
   return u(a, "parentNode", c)
  },
  next: function (a) {
   return F(a, "nextSibling")
  },
  prev: function (a) {
   return F(a, "previousSibling")
  },
  nextAll: function (a) {
   return u(a, "nextSibling")
  },
  prevAll: function (a) {
   return u(a, "previousSibling")
  },
  nextUntil: function (a, b, c) {
   return u(a, "nextSibling", c)
  },
  prevUntil: function (a, b, c) {
   return u(a, "previousSibling", c)
  },
  siblings: function (a) {
   return v((a.parentNode || {}).firstChild, a)
  },
  children: function (a) {
   return v(a.firstChild)
  },
  contents: function (a) {
   return a.contentDocument || n.merge([], a.childNodes)
  }
 }, function (a, b) {
  n.fn[a] = function (c, d) {
   var e = n.map(this, b, c);
   return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
  }
 });
 var G = /\S+/g;

 function H(a) {
  var b = {};
  return n.each(a.match(G) || [], function (a, c) {
   b[c] = !0
  }), b
 }
 n.Callbacks = function (a) {
  a = "string" == typeof a ? H(a) : n.extend({}, a);
  var b,
   c,
   d,
   e,
   f = [],
   g = [],
   h = -1,
   i = function () {
    for (e = a.once, d = b = !0; g.length; h = -1) {
     c = g.shift();
     while (++h < f.length)
      f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
    }
    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
   },
   j = {
    add: function () {
     return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
      n.each(b, function (b, c) {
       n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
      })
     }(arguments), c && !b && i()), this
    },
    remove: function () {
     return n.each(arguments, function (a, b) {
      var c;
      while ((c = n.inArray(b, f, c)) > -1)
       f.splice(c, 1), h >= c && h--
     }), this
    },
    has: function (a) {
     return a ? n.inArray(a, f) > -1 : f.length > 0
    },
    empty: function () {
     return f && (f = []), this
    },
    disable: function () {
     return e = g = [], f = c = "", this
    },
    disabled: function () {
     return !f
    },
    lock: function () {
     return e = g = [], c || (f = c = ""), this
    },
    locked: function () {
     return !!e
    },
    fireWith: function (a, c) {
     return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
    },
    fire: function () {
     return j.fireWith(this, arguments), this
    },
    fired: function () {
     return !!d
    }
   };
  return j
 }, n.extend({
  Deferred: function (a) {
   var b = [
     ["resolve", "done", n.Callbacks("once memory"), "resolved"],
     ["reject", "fail", n.Callbacks("once memory"), "rejected"],
     ["notify", "progress", n.Callbacks("memory")]
    ],
    c = "pending",
    d = {
     state: function () {
      return c
     },
     always: function () {
      return e.done(arguments).fail(arguments), this
     },
     then: function () {
      var a = arguments;
      return n.Deferred(function (c) {
       n.each(b, function (b, f) {
        var g = n.isFunction(a[b]) && a[b];
        e[f[1]](function () {
         var a = g && g.apply(this, arguments);
         a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
        })
       }), a = null
      }).promise()
     },
     promise: function (a) {
      return null != a ? n.extend(a, d) : d
     }
    },
    e = {};
   return d.pipe = d.then, n.each(b, function (a, f) {
    var g = f[2],
     h = f[3];
    d[f[1]] = g.add, h && g.add(function () {
     c = h
    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
     return e[f[0] + "With"](this === e ? d : this, arguments), this
    }, e[f[0] + "With"] = g.fireWith
   }), d.promise(e), a && a.call(e, e), e
  },
  when: function (a) {
   var b = 0,
    c = e.call(arguments),
    d = c.length,
    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
    g = 1 === f ? a : n.Deferred(),
    h = function (a, b, c) {
     return function (d) {
      b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
     }
    },
    i,
    j,
    k;
   if (d > 1)
    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
     c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
   return f || g.resolveWith(k, c), g.promise()
  }
 });
 var I;
 n.fn.ready = function (a) {
  return n.ready.promise().done(a), this
 }, n.extend({
  isReady: !1,
  readyWait: 1,
  holdReady: function (a) {
   a ? n.readyWait++ : n.ready(!0)
  },
  ready: function (a) {
   (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
  }
 });

 function J() {
  d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
 }
 n.ready.promise = function (b) {
  return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
 }, n.ready.promise();
 var K = function (a, b, c, d, e, f, g) {
   var h = 0,
    i = a.length,
    j = null == c;
   if ("object" === n.type(c)) {
    e = !0;
    for (h in c)
     K(a, b, h, c[h], !0, f, g)
   } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
     return j.call(n(a), c)
    })), b))
    for (; i > h; h++)
     b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
   return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  },
  L = function (a) {
   return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };

 function M() {
  this.expando = n.expando + M.uid++
 }
 M.uid = 1, M.prototype = {
  register: function (a, b) {
   var c = b || {};
   return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
    value: c,
    writable: !0,
    configurable: !0
   }), a[this.expando]
  },
  cache: function (a) {
   if (!L(a))
    return {};
   var b = a[this.expando];
   return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
    value: b,
    configurable: !0
   }))), b
  },
  set: function (a, b, c) {
   var d,
    e = this.cache(a);
   if ("string" == typeof b)
    e[b] = c;
   else
    for (d in b)
     e[d] = b[d];
   return e
  },
  get: function (a, b) {
   return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
  },
  access: function (a, b, c) {
   var d;
   return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
  },
  remove: function (a, b) {
   var c,
    d,
    e,
    f = a[this.expando];
   if (void 0 !== f) {
    if (void 0 === b)
     this.register(a);
    else {
     n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
     while (c--)
      delete f[d[c]]
    }
    (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
   }
  },
  hasData: function (a) {
   var b = a[this.expando];
   return void 0 !== b && !n.isEmptyObject(b)
  }
 };
 var N = new M,
  O = new M,
  P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Q = /[A-Z]/g;

 function R(a, b, c) {
  var d;
  if (void 0 === c && 1 === a.nodeType)
   if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
    try {
     c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
    } catch (e) {}
    O.set(a, b, c)
   } else
    c = void 0;
  return c
 }
 n.extend({
  hasData: function (a) {
   return O.hasData(a) || N.hasData(a)
  },
  data: function (a, b, c) {
   return O.access(a, b, c)
  },
  removeData: function (a, b) {
   O.remove(a, b)
  },
  _data: function (a, b, c) {
   return N.access(a, b, c)
  },
  _removeData: function (a, b) {
   N.remove(a, b)
  }
 }), n.fn.extend({
  data: function (a, b) {
   var c,
    d,
    e,
    f = this[0],
    g = f && f.attributes;
   if (void 0 === a) {
    if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
     c = g.length;
     while (c--)
      g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
     N.set(f, "hasDataAttrs", !0)
    }
    return e
   }
   return "object" == typeof a ? this.each(function () {
    O.set(this, a)
   }) : K(this, function (b) {
    var c,
     d;
    if (f && void 0 === b) {
     if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c)
      return c;
     if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c)
      return c;
     if (c = R(f, d, void 0), void 0 !== c)
      return c
    } else
     d = n.camelCase(a), this.each(function () {
      var c = O.get(this, d);
      O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
     })
   }, null, b, arguments.length > 1, null, !0)
  },
  removeData: function (a) {
   return this.each(function () {
    O.remove(this, a)
   })
  }
 }), n.extend({
  queue: function (a, b, c) {
   var d;
   return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
  },
  dequeue: function (a, b) {
   b = b || "fx";
   var c = n.queue(a, b),
    d = c.length,
    e = c.shift(),
    f = n._queueHooks(a, b),
    g = function () {
     n.dequeue(a, b)
    };
   "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
  },
  _queueHooks: function (a, b) {
   var c = b + "queueHooks";
   return N.get(a, c) || N.access(a, c, {
    empty: n.Callbacks("once memory").add(function () {
     N.remove(a, [b + "queue", c])
    })
   })
  }
 }), n.fn.extend({
  queue: function (a, b) {
   var c = 2;
   return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
    var c = n.queue(this, a, b);
    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
   })
  },
  dequeue: function (a) {
   return this.each(function () {
    n.dequeue(this, a)
   })
  },
  clearQueue: function (a) {
   return this.queue(a || "fx", [])
  },
  promise: function (a, b) {
   var c,
    d = 1,
    e = n.Deferred(),
    f = this,
    g = this.length,
    h = function () {
     --d || e.resolveWith(f, [f])
    };
   "string" != typeof a && (b = a, a = void 0), a = a || "fx";
   while (g--)
    c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
   return h(), e.promise(b)
  }
 });
 var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
  U = ["Top", "Right", "Bottom", "Left"],
  V = function (a, b) {
   return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
  };

 function W(a, b, c, d) {
  var e,
   f = 1,
   g = 20,
   h = d ? function () {
    return d.cur()
   } : function () {
    return n.css(a, b, "")
   },
   i = h(),
   j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
   k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
  if (k && k[3] !== j) {
   j = j || k[3], c = c || [], k = +i || 1;
   do f = f || ".5", k /= f, n.style(a, b, k + j);
   while (f !== (f = h() / i) && 1 !== f && --g)
  }
  return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
 }
 var X = /^(?:checkbox|radio)$/i,
  Y = /<([\w:-]+)/,
  Z = /^$|\/(?:java|ecma)script/i,
  $ = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   thead: [1, "<table>", "</table>"],
   col: [2, "<table><colgroup>", "</colgroup></table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: [0, "", ""]
  };
 $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

 function _(a, b) {
  var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
  return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
 }

 function aa(a, b) {
  for (var c = 0, d = a.length; d > c; c++)
   N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
 }
 var ba = /<|&#?\w+;/;

 function ca(a, b, c, d, e) {
  for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
   if (f = a[o], f || 0 === f)
    if ("object" === n.type(f))
     n.merge(m, f.nodeType ? [f] : f);
    else if (ba.test(f)) {
   g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
   while (k--)
    g = g.lastChild;
   n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
  } else
   m.push(b.createTextNode(f));
  l.textContent = "", o = 0;
  while (f = m[o++])
   if (d && n.inArray(f, d) > -1)
    e && e.push(f);
   else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
   k = 0;
   while (f = g[k++])
    Z.test(f.type || "") && c.push(f)
  }
  return l
 }! function () {
  var a = d.createDocumentFragment(),
   b = a.appendChild(d.createElement("div")),
   c = d.createElement("input");
  c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
 }();
 var da = /^key/,
  ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  fa = /^([^.]*)(?:\.(.+)|)/;

 function ga() {
  return !0
 }

 function ha() {
  return !1
 }

 function ia() {
  try {
   return d.activeElement
  } catch (a) {}
 }

 function ja(a, b, c, d, e, f) {
  var g,
   h;
  if ("object" == typeof b) {
   "string" != typeof c && (d = d || c, c = void 0);
   for (h in b)
    ja(a, h, c, d, b[h], f);
   return a
  }
  if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)
   e = ha;
  else if (!e)
   return a;
  return 1 === f && (g = e, e = function (a) {
   return n().off(a), g.apply(this, arguments)
  }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
   n.event.add(this, b, e, d, c)
  })
 }
 n.event = {
  global: {},
  add: function (a, b, c, d, e) {
   var f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    o,
    p,
    q,
    r = N.get(a);
   if (r) {
    c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
     return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
    }), b = (b || "").match(G) || [""], j = b.length;
    while (j--)
     h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
      type: o,
      origType: q,
      data: d,
      handler: c,
      guid: c.guid,
      selector: e,
      needsContext: e && n.expr.match.needsContext.test(e),
      namespace: p.join(".")
     }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
   }
  },
  remove: function (a, b, c, d, e) {
   var f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    o,
    p,
    q,
    r = N.hasData(a) && N.get(a);
   if (r && (i = r.events)) {
    b = (b || "").match(G) || [""], j = b.length;
    while (j--)
     if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
      l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
      while (f--)
       k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
      g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
     } else
      for (o in i)
       n.event.remove(a, o + b[j], c, d, !0);
    n.isEmptyObject(i) && N.remove(a, "handle events")
   }
  },
  dispatch: function (a) {
   a = n.event.fix(a);
   var b,
    c,
    d,
    f,
    g,
    h = [],
    i = e.call(arguments),
    j = (N.get(this, "events") || {})[a.type] || [],
    k = n.event.special[a.type] || {};
   if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
    h = n.event.handlers.call(this, a, j), b = 0;
    while ((f = h[b++]) && !a.isPropagationStopped()) {
     a.currentTarget = f.elem, c = 0;
     while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
      a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
    }
    return k.postDispatch && k.postDispatch.call(this, a), a.result
   }
  },
  handlers: function (a, b) {
   var c,
    d,
    e,
    f,
    g = [],
    h = b.delegateCount,
    i = a.target;
   if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
    for (; i !== this; i = i.parentNode || this)
     if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
      for (d = [], c = 0; h > c; c++)
       f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
      d.length && g.push({
       elem: i,
       handlers: d
      })
     }
   return h < b.length && g.push({
    elem: this,
    handlers: b.slice(h)
   }), g
  },
  props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
  fixHooks: {},
  keyHooks: {
   props: "char charCode key keyCode".split(" "),
   filter: function (a, b) {
    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
   }
  },
  mouseHooks: {
   props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
   filter: function (a, b) {
    var c,
     e,
     f,
     g = b.button;
    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
   }
  },
  fix: function (a) {
   if (a[n.expando])
    return a;
   var b,
    c,
    e,
    f = a.type,
    g = a,
    h = this.fixHooks[f];
   h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
   while (b--)
    c = e[b], a[c] = g[c];
   return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function () {
     return this !== ia() && this.focus ? (this.focus(), !1) : void 0
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function () {
     return this === ia() && this.blur ? (this.blur(), !1) : void 0
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function () {
     return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
    },
    _default: function (a) {
     return n.nodeName(a.target, "a")
    }
   },
   beforeunload: {
    postDispatch: function (a) {
     void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
    }
   }
  }
 }, n.removeEvent = function (a, b, c) {
  a.removeEventListener && a.removeEventListener(b, c)
 }, n.Event = function (a, b) {
  return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
 }, n.Event.prototype = {
  constructor: n.Event,
  isDefaultPrevented: ha,
  isPropagationStopped: ha,
  isImmediatePropagationStopped: ha,
  isSimulated: !1,
  preventDefault: function () {
   var a = this.originalEvent;
   this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
  },
  stopPropagation: function () {
   var a = this.originalEvent;
   this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
  },
  stopImmediatePropagation: function () {
   var a = this.originalEvent;
   this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
  }
 }, n.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function (a, b) {
  n.event.special[a] = {
   delegateType: b,
   bindType: b,
   handle: function (a) {
    var c,
     d = this,
     e = a.relatedTarget,
     f = a.handleObj;
    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
   }
  }
 }), n.fn.extend({
  on: function (a, b, c, d) {
   return ja(this, a, b, c, d)
  },
  one: function (a, b, c, d) {
   return ja(this, a, b, c, d, 1)
  },
  off: function (a, b, c) {
   var d,
    e;
   if (a && a.preventDefault && a.handleObj)
    return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
   if ("object" == typeof a) {
    for (e in a)
     this.off(e, b, a[e]);
    return this
   }
   return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
    n.event.remove(this, a, c, b)
   })
  }
 });
 var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
  la = /<script|<style|<link/i,
  ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
  na = /^true\/(.*)/,
  oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

 function pa(a, b) {
  return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
 }

 function qa(a) {
  return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
 }

 function ra(a) {
  var b = na.exec(a.type);
  return b ? a.type = b[1] : a.removeAttribute("type"), a
 }

 function sa(a, b) {
  var c,
   d,
   e,
   f,
   g,
   h,
   i,
   j;
  if (1 === b.nodeType) {
   if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
    delete g.handle, g.events = {};
    for (e in j)
     for (c = 0, d = j[e].length; d > c; c++)
      n.event.add(b, e, j[e][c])
   }
   O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
  }
 }

 function ta(a, b) {
  var c = b.nodeName.toLowerCase();
  "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
 }

 function ua(a, b, c, d) {
  b = f.apply([], b);
  var e,
   g,
   h,
   i,
   j,
   k,
   m = 0,
   o = a.length,
   p = o - 1,
   q = b[0],
   r = n.isFunction(q);
  if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
   return a.each(function (e) {
    var f = a.eq(e);
    r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
   });
  if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
   for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++)
    j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
   if (i)
    for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
     j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
  }
  return a
 }

 function va(a, b, c) {
  for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
   c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
  return a
 }
 n.extend({
  htmlPrefilter: function (a) {
   return a.replace(ka, "<$1></$2>")
  },
  clone: function (a, b, c) {
   var d,
    e,
    f,
    g,
    h = a.cloneNode(!0),
    i = n.contains(a.ownerDocument, a);
   if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
    for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
     ta(f[d], g[d]);
   if (b)
    if (c)
     for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
      sa(f[d], g[d]);
    else
     sa(a, h);
   return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
  },
  cleanData: function (a) {
   for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
    if (L(c)) {
     if (b = c[N.expando]) {
      if (b.events)
       for (d in b.events)
        e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
      c[N.expando] = void 0
     }
     c[O.expando] && (c[O.expando] = void 0)
    }
  }
 }), n.fn.extend({
  domManip: ua,
  detach: function (a) {
   return va(this, a, !0)
  },
  remove: function (a) {
   return va(this, a)
  },
  text: function (a) {
   return K(this, function (a) {
    return void 0 === a ? n.text(this) : this.empty().each(function () {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
    })
   }, null, a, arguments.length)
  },
  append: function () {
   return ua(this, arguments, function (a) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var b = pa(this, a);
     b.appendChild(a)
    }
   })
  },
  prepend: function () {
   return ua(this, arguments, function (a) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var b = pa(this, a);
     b.insertBefore(a, b.firstChild)
    }
   })
  },
  before: function () {
   return ua(this, arguments, function (a) {
    this.parentNode && this.parentNode.insertBefore(a, this)
   })
  },
  after: function () {
   return ua(this, arguments, function (a) {
    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
   })
  },
  empty: function () {
   for (var a, b = 0; null != (a = this[b]); b++)
    1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
   return this
  },
  clone: function (a, b) {
   return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
    return n.clone(this, a, b)
   })
  },
  html: function (a) {
   return K(this, function (a) {
    var b = this[0] || {},
     c = 0,
     d = this.length;
    if (void 0 === a && 1 === b.nodeType)
     return b.innerHTML;
    if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
     a = n.htmlPrefilter(a);
     try {
      for (; d > c; c++)
       b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
      b = 0
     } catch (e) {}
    }
    b && this.empty().append(a)
   }, null, a, arguments.length)
  },
  replaceWith: function () {
   var a = [];
   return ua(this, arguments, function (b) {
    var c = this.parentNode;
    n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
   }, a)
  }
 }), n.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function (a, b) {
  n.fn[a] = function (a) {
   for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
    c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
   return this.pushStack(d)
  }
 });
 var wa,
  xa = {
   HTML: "block",
   BODY: "block"
  };

 function ya(a, b) {
  var c = n(b.createElement(a)).appendTo(b.body),
   d = n.css(c[0], "display");
  return c.detach(), d
 }

 function za(a) {
  var b = d,
   c = xa[a];
  return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
 }
 var Aa = /^margin/,
  Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
  Ca = function (b) {
   var c = b.ownerDocument.defaultView;
   return c && c.opener || (c = a), c.getComputedStyle(b)
  },
  Da = function (a, b, c, d) {
   var e,
    f,
    g = {};
   for (f in b)
    g[f] = a.style[f], a.style[f] = b[f];
   e = c.apply(a, d || []);
   for (f in b)
    a.style[f] = g[f];
   return e
  },
  Ea = d.documentElement;
 ! function () {
  var b,
   c,
   e,
   f,
   g = d.createElement("div"),
   h = d.createElement("div");
  if (h.style) {
   h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

   function i() {
    h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
    var d = a.getComputedStyle(h);
    b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
   }
   n.extend(l, {
    pixelPosition: function () {
     return i(), b
    },
    boxSizingReliable: function () {
     return null == c && i(), c
    },
    pixelMarginRight: function () {
     return null == c && i(), e
    },
    reliableMarginLeft: function () {
     return null == c && i(), f
    },
    reliableMarginRight: function () {
     var b,
      c = h.appendChild(d.createElement("div"));
     return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
    }
   })
  }
 }();

 function Fa(a, b, c) {
  var d,
   e,
   f,
   g,
   h = a.style;
  return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
 }

 function Ga(a, b) {
  return {
   get: function () {
    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
   }
  }
 }
 var Ha = /^(none|table(?!-c[ea]).+)/,
  Ia = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  Ja = {
   letterSpacing: "0",
   fontWeight: "400"
  },
  Ka = ["Webkit", "O", "Moz", "ms"],
  La = d.createElement("div").style;

 function Ma(a) {
  if (a in La)
   return a;
  var b = a[0].toUpperCase() + a.slice(1),
   c = Ka.length;
  while (c--)
   if (a = Ka[c] + b, a in La)
    return a
 }

 function Na(a, b, c) {
  var d = T.exec(b);
  return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
 }

 function Oa(a, b, c, d, e) {
  for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
   "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
  return g
 }

 function Pa(a, b, c) {
  var d = !0,
   e = "width" === b ? a.offsetWidth : a.offsetHeight,
   f = Ca(a),
   g = "border-box" === n.css(a, "boxSizing", !1, f);
  if (0 >= e || null == e) {
   if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e))
    return e;
   d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
  }
  return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
 }

 function Qa(a, b) {
  for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
   d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
  for (g = 0; h > g; g++)
   d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
  return a
 }
 n.extend({
  cssHooks: {
   opacity: {
    get: function (a, b) {
     if (b) {
      var c = Fa(a, "opacity");
      return "" === c ? "1" : c
     }
    }
   }
  },
  cssNumber: {
   animationIterationCount: !0,
   columnCount: !0,
   fillOpacity: !0,
   flexGrow: !0,
   flexShrink: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": "cssFloat"
  },
  style: function (a, b, c, d) {
   if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
    var e,
     f,
     g,
     h = n.camelCase(b),
     i = a.style;
    return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
   }
  },
  css: function (a, b, c, d) {
   var e,
    f,
    g,
    h = n.camelCase(b);
   return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
  }
 }), n.each(["height", "width"], function (a, b) {
  n.cssHooks[b] = {
   get: function (a, c, d) {
    return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
     return Pa(a, b, d)
    }) : Pa(a, b, d) : void 0
   },
   set: function (a, c, d) {
    var e,
     f = d && Ca(a),
     g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
    return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
   }
  }
 }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
  return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
   marginLeft: 0
  }, function () {
   return a.getBoundingClientRect().left
  })) + "px" : void 0
 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
  return b ? Da(a, {
   display: "inline-block"
  }, Fa, [a, "marginRight"]) : void 0
 }), n.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function (a, b) {
  n.cssHooks[a + b] = {
   expand: function (c) {
    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
     e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
    return e
   }
  }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
 }), n.fn.extend({
  css: function (a, b) {
   return K(this, function (a, b, c) {
    var d,
     e,
     f = {},
     g = 0;
    if (n.isArray(b)) {
     for (d = Ca(a), e = b.length; e > g; g++)
      f[b[g]] = n.css(a, b[g], !1, d);
     return f
    }
    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
   }, a, b, arguments.length > 1)
  },
  show: function () {
   return Qa(this, !0)
  },
  hide: function () {
   return Qa(this)
  },
  toggle: function (a) {
   return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
    V(this) ? n(this).show() : n(this).hide()
   })
  }
 });

 function Ra(a, b, c, d, e) {
  return new Ra.prototype.init(a, b, c, d, e)
 }
 n.Tween = Ra, Ra.prototype = {
  constructor: Ra,
  init: function (a, b, c, d, e, f) {
   this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
  },
  cur: function () {
   var a = Ra.propHooks[this.prop];
   return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
  },
  run: function (a) {
   var b,
    c = Ra.propHooks[this.prop];
   return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
  }
 }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
  _default: {
   get: function (a) {
    var b;
    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
   },
   set: function (a) {
    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
   }
  }
 }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
  set: function (a) {
   a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
  }
 }, n.easing = {
  linear: function (a) {
   return a
  },
  swing: function (a) {
   return .5 - Math.cos(a * Math.PI) / 2
  },
  _default: "swing"
 }, n.fx = Ra.prototype.init, n.fx.step = {};
 var Sa,
  Ta,
  Ua = /^(?:toggle|show|hide)$/,
  Va = /queueHooks$/;

 function Wa() {
  return a.setTimeout(function () {
   Sa = void 0
  }), Sa = n.now()
 }

 function Xa(a, b) {
  var c,
   d = 0,
   e = {
    height: a
   };
  for (b = b ? 1 : 0; 4 > d; d += 2 - b)
   c = U[d], e["margin" + c] = e["padding" + c] = a;
  return b && (e.opacity = e.width = a), e
 }

 function Ya(a, b, c) {
  for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
   if (d = e[f].call(c, b, a))
    return d
 }

 function Za(a, b, c) {
  var d,
   e,
   f,
   g,
   h,
   i,
   j,
   k,
   l = this,
   m = {},
   o = a.style,
   p = a.nodeType && V(a),
   q = N.get(a, "fxshow");
  c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
   h.unqueued || i()
  }), h.unqueued++, l.always(function () {
   l.always(function () {
    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
   })
  })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
   o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
  }));
  for (d in b)
   if (e = b[d], Ua.exec(e)) {
    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
     if ("show" !== e || !q || void 0 === q[d])
      continue;
     p = !0
    }
    m[d] = q && q[d] || n.style(a, d)
   } else
    j = void 0;
  if (n.isEmptyObject(m))
   "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
  else {
   q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
    n(a).hide()
   }), l.done(function () {
    var b;
    N.remove(a, "fxshow");
    for (b in m)
     n.style(a, b, m[b])
   });
   for (d in m)
    g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
  }
 }

 function $a(a, b) {
  var c,
   d,
   e,
   f,
   g;
  for (c in a)
   if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
    f = g.expand(f), delete a[d];
    for (c in f)
     c in a || (a[c] = f[c], b[c] = e)
   } else
    b[d] = e
 }

 function _a(a, b, c) {
  var d,
   e,
   f = 0,
   g = _a.prefilters.length,
   h = n.Deferred().always(function () {
    delete i.elem
   }),
   i = function () {
    if (e)
     return !1;
    for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
     j.tweens[g].run(f);
    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
   },
   j = h.promise({
    elem: a,
    props: n.extend({}, b),
    opts: n.extend(!0, {
     specialEasing: {},
     easing: n.easing._default
    }, c),
    originalProperties: b,
    originalOptions: c,
    startTime: Sa || Wa(),
    duration: c.duration,
    tweens: [],
    createTween: function (b, c) {
     var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
     return j.tweens.push(d), d
    },
    stop: function (b) {
     var c = 0,
      d = b ? j.tweens.length : 0;
     if (e)
      return this;
     for (e = !0; d > c; c++)
      j.tweens[c].run(1);
     return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
    }
   }),
   k = j.props;
  for ($a(k, j.opts.specialEasing); g > f; f++)
   if (d = _a.prefilters[f].call(j, a, k, j.opts))
    return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
  return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
   elem: a,
   anim: j,
   queue: j.opts.queue
  })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
 }
 n.Animation = n.extend(_a, {
   tweeners: {
    "*": [function (a, b) {
     var c = this.createTween(a, b);
     return W(c.elem, a, T.exec(b), c), c
    }]
   },
   tweener: function (a, b) {
    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
    for (var c, d = 0, e = a.length; e > d; d++)
     c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
   },
   prefilters: [Za],
   prefilter: function (a, b) {
    b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
   }
  }), n.speed = function (a, b, c) {
   var d = a && "object" == typeof a ? n.extend({}, a) : {
    complete: c || !c && b || n.isFunction(a) && a,
    duration: a,
    easing: c && b || b && !n.isFunction(b) && b
   };
   return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
   }, d
  }, n.fn.extend({
   fadeTo: function (a, b, c, d) {
    return this.filter(V).css("opacity", 0).show().end().animate({
     opacity: b
    }, a, c, d)
   },
   animate: function (a, b, c, d) {
    var e = n.isEmptyObject(a),
     f = n.speed(b, c, d),
     g = function () {
      var b = _a(this, n.extend({}, a), f);
      (e || N.get(this, "finish")) && b.stop(!0)
     };
    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
   },
   stop: function (a, b, c) {
    var d = function (a) {
     var b = a.stop;
     delete a.stop, b(c)
    };
    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
     var b = !0,
      e = null != a && a + "queueHooks",
      f = n.timers,
      g = N.get(this);
     if (e)
      g[e] && g[e].stop && d(g[e]);
     else
      for (e in g)
       g[e] && g[e].stop && Va.test(e) && d(g[e]);
     for (e = f.length; e--;)
      f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
     !b && c || n.dequeue(this, a)
    })
   },
   finish: function (a) {
    return a !== !1 && (a = a || "fx"), this.each(function () {
     var b,
      c = N.get(this),
      d = c[a + "queue"],
      e = c[a + "queueHooks"],
      f = n.timers,
      g = d ? d.length : 0;
     for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
      f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
     for (b = 0; g > b; b++)
      d[b] && d[b].finish && d[b].finish.call(this);
     delete c.finish
    })
   }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
   var c = n.fn[b];
   n.fn[b] = function (a, d, e) {
    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
   }
  }), n.each({
   slideDown: Xa("show"),
   slideUp: Xa("hide"),
   slideToggle: Xa("toggle"),
   fadeIn: {
    opacity: "show"
   },
   fadeOut: {
    opacity: "hide"
   },
   fadeToggle: {
    opacity: "toggle"
   }
  }, function (a, b) {
   n.fn[a] = function (a, c, d) {
    return this.animate(b, a, c, d)
   }
  }), n.timers = [], n.fx.tick = function () {
   var a,
    b = 0,
    c = n.timers;
   for (Sa = n.now(); b < c.length; b++)
    a = c[b], a() || c[b] !== a || c.splice(b--, 1);
   c.length || n.fx.stop(), Sa = void 0
  }, n.fx.timer = function (a) {
   n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
  }, n.fx.interval = 13, n.fx.start = function () {
   Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
  }, n.fx.stop = function () {
   a.clearInterval(Ta), Ta = null
  }, n.fx.speeds = {
   slow: 600,
   fast: 200,
   _default: 400
  }, n.fn.delay = function (b, c) {
   return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
    var e = a.setTimeout(c, b);
    d.stop = function () {
     a.clearTimeout(e)
    }
   })
  },
  function () {
   var a = d.createElement("input"),
    b = d.createElement("select"),
    c = b.appendChild(d.createElement("option"));
   a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
  }();
 var ab,
  bb = n.expr.attrHandle;
 n.fn.extend({
  attr: function (a, b) {
   return K(this, n.attr, a, b, arguments.length > 1)
  },
  removeAttr: function (a) {
   return this.each(function () {
    n.removeAttr(this, a)
   })
  }
 }), n.extend({
  attr: function (a, b, c) {
   var d,
    e,
    f = a.nodeType;
   if (3 !== f && 8 !== f && 2 !== f)
    return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
  },
  attrHooks: {
   type: {
    set: function (a, b) {
     if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
      var c = a.value;
      return a.setAttribute("type", b), c && (a.value = c), b
     }
    }
   }
  },
  removeAttr: function (a, b) {
   var c,
    d,
    e = 0,
    f = b && b.match(G);
   if (f && 1 === a.nodeType)
    while (c = f[e++])
     d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
  }
 }), ab = {
  set: function (a, b, c) {
   return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
  }
 }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
  var c = bb[b] || n.find.attr;
  bb[b] = function (a, b, d) {
   var e,
    f;
   return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
  }
 });
 var cb = /^(?:input|select|textarea|button)$/i,
  db = /^(?:a|area)$/i;
 n.fn.extend({
  prop: function (a, b) {
   return K(this, n.prop, a, b, arguments.length > 1)
  },
  removeProp: function (a) {
   return this.each(function () {
    delete this[n.propFix[a] || a]
   })
  }
 }), n.extend({
  prop: function (a, b, c) {
   var d,
    e,
    f = a.nodeType;
   if (3 !== f && 8 !== f && 2 !== f)
    return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
     void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
  },
  propHooks: {
   tabIndex: {
    get: function (a) {
     var b = n.find.attr(a, "tabindex");
     return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
    }
   }
  },
  propFix: {
   "for": "htmlFor",
   "class": "className"
  }
 }), l.optSelected || (n.propHooks.selected = {
  get: function (a) {
   var b = a.parentNode;
   return b && b.parentNode && b.parentNode.selectedIndex, null
  },
  set: function (a) {
   var b = a.parentNode;
   b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
  }
 }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
  n.propFix[this.toLowerCase()] = this
 });
 var eb = /[\t\r\n\f]/g;

 function fb(a) {
  return a.getAttribute && a.getAttribute("class") || ""
 }
 n.fn.extend({
  addClass: function (a) {
   var b,
    c,
    d,
    e,
    f,
    g,
    h,
    i = 0;
   if (n.isFunction(a))
    return this.each(function (b) {
     n(this).addClass(a.call(this, b, fb(this)))
    });
   if ("string" == typeof a && a) {
    b = a.match(G) || [];
    while (c = this[i++])
     if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
      g = 0;
      while (f = b[g++])
       d.indexOf(" " + f + " ") < 0 && (d += f + " ");
      h = n.trim(d), e !== h && c.setAttribute("class", h)
     }
   }
   return this
  },
  removeClass: function (a) {
   var b,
    c,
    d,
    e,
    f,
    g,
    h,
    i = 0;
   if (n.isFunction(a))
    return this.each(function (b) {
     n(this).removeClass(a.call(this, b, fb(this)))
    });
   if (!arguments.length)
    return this.attr("class", "");
   if ("string" == typeof a && a) {
    b = a.match(G) || [];
    while (c = this[i++])
     if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
      g = 0;
      while (f = b[g++])
       while (d.indexOf(" " + f + " ") > -1)
        d = d.replace(" " + f + " ", " ");
      h = n.trim(d), e !== h && c.setAttribute("class", h)
     }
   }
   return this
  },
  toggleClass: function (a, b) {
   var c = typeof a;
   return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
    n(this).toggleClass(a.call(this, c, fb(this), b), b)
   }) : this.each(function () {
    var b,
     d,
     e,
     f;
    if ("string" === c) {
     d = 0, e = n(this), f = a.match(G) || [];
     while (b = f[d++])
      e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
    } else
     void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
   })
  },
  hasClass: function (a) {
   var b,
    c,
    d = 0;
   b = " " + a + " ";
   while (c = this[d++])
    if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
     return !0;
   return !1
  }
 });
 var gb = /\r/g,
  hb = /[\x20\t\r\n\f]+/g;
 n.fn.extend({
  val: function (a) {
   var b,
    c,
    d,
    e = this[0]; {
    if (arguments.length)
     return d = n.isFunction(a), this.each(function (c) {
      var e;
      1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
       return null == a ? "" : a + ""
      })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
     });
    if (e)
     return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
   }
  }
 }), n.extend({
  valHooks: {
   option: {
    get: function (a) {
     var b = n.find.attr(a, "value");
     return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
    }
   },
   select: {
    get: function (a) {
     for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
      if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
       if (b = n(c).val(), f)
        return b;
       g.push(b)
      }
     return g
    },
    set: function (a, b) {
     var c,
      d,
      e = a.options,
      f = n.makeArray(b),
      g = e.length;
     while (g--)
      d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
     return c || (a.selectedIndex = -1), f
    }
   }
  }
 }), n.each(["radio", "checkbox"], function () {
  n.valHooks[this] = {
   set: function (a, b) {
    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
   }
  }, l.checkOn || (n.valHooks[this].get = function (a) {
   return null === a.getAttribute("value") ? "on" : a.value
  })
 });
 var ib = /^(?:focusinfocus|focusoutblur)$/;
 n.extend(n.event, {
  trigger: function (b, c, e, f) {
   var g,
    h,
    i,
    j,
    l,
    m,
    o,
    p = [e || d],
    q = k.call(b, "type") ? b.type : b,
    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
   if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
    if (!f && !o.noBubble && !n.isWindow(e)) {
     for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
      p.push(h), i = h;
     i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
    }
    g = 0;
    while ((h = p[g++]) && !b.isPropagationStopped())
     b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
    return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
   }
  },
  simulate: function (a, b, c) {
   var d = n.extend(new n.Event, c, {
    type: a,
    isSimulated: !0
   });
   n.event.trigger(d, null, b)
  }
 }), n.fn.extend({
  trigger: function (a, b) {
   return this.each(function () {
    n.event.trigger(a, b, this)
   })
  },
  triggerHandler: function (a, b) {
   var c = this[0];
   return c ? n.event.trigger(a, b, c, !0) : void 0
  }
 }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
  n.fn[b] = function (a, c) {
   return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
  }
 }), n.fn.extend({
  hover: function (a, b) {
   return this.mouseenter(a).mouseleave(b || a)
  }
 }), l.focusin = "onfocusin" in a, l.focusin || n.each({
  focus: "focusin",
  blur: "focusout"
 }, function (a, b) {
  var c = function (a) {
   n.event.simulate(b, a.target, n.event.fix(a))
  };
  n.event.special[b] = {
   setup: function () {
    var d = this.ownerDocument || this,
     e = N.access(d, b);
    e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
   },
   teardown: function () {
    var d = this.ownerDocument || this,
     e = N.access(d, b) - 1;
    e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
   }
  }
 });
 var jb = a.location,
  kb = n.now(),
  lb = /\?/;
 n.parseJSON = function (a) {
  return JSON.parse(a + "")
 }, n.parseXML = function (b) {
  var c;
  if (!b || "string" != typeof b)
   return null;
  try {
   c = (new a.DOMParser).parseFromString(b, "text/xml")
  } catch (d) {
   c = void 0
  }
  return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
 };
 var mb = /#.*$/,
  nb = /([?&])_=[^&]*/,
  ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  qb = /^(?:GET|HEAD)$/,
  rb = /^\/\//,
  sb = {},
  tb = {},
  ub = "*/".concat("*"),
  vb = d.createElement("a");
 vb.href = jb.href;

 function wb(a) {
  return function (b, c) {
   "string" != typeof b && (c = b, b = "*");
   var d,
    e = 0,
    f = b.toLowerCase().match(G) || [];
   if (n.isFunction(c))
    while (d = f[e++])
     "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
  }
 }

 function xb(a, b, c, d) {
  var e = {},
   f = a === tb;

  function g(h) {
   var i;
   return e[h] = !0, n.each(a[h] || [], function (a, h) {
    var j = h(b, c, d);
    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
   }), i
  }
  return g(b.dataTypes[0]) || !e["*"] && g("*")
 }

 function yb(a, b) {
  var c,
   d,
   e = n.ajaxSettings.flatOptions || {};
  for (c in b)
   void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
  return d && n.extend(!0, a, d), a
 }

 function zb(a, b, c) {
  var d,
   e,
   f,
   g,
   h = a.contents,
   i = a.dataTypes;
  while ("*" === i[0])
   i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
  if (d)
   for (e in h)
    if (h[e] && h[e].test(d)) {
     i.unshift(e);
     break
    }
  if (i[0] in c)
   f = i[0];
  else {
   for (e in c) {
    if (!i[0] || a.converters[e + " " + i[0]]) {
     f = e;
     break
    }
    g || (g = e)
   }
   f = f || g
  }
  return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
 }

 function Ab(a, b, c, d) {
  var e,
   f,
   g,
   h,
   i,
   j = {},
   k = a.dataTypes.slice();
  if (k[1])
   for (g in a.converters)
    j[g.toLowerCase()] = a.converters[g];
  f = k.shift();
  while (f)
   if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
    if ("*" === f)
     f = i;
    else if ("*" !== i && i !== f) {
   if (g = j[i + " " + f] || j["* " + f], !g)
    for (e in j)
     if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
      g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
      break
     }
   if (g !== !0)
    if (g && a["throws"])
     b = g(b);
    else
     try {
      b = g(b)
     } catch (l) {
      return {
       state: "parsererror",
       error: g ? l : "No conversion from " + i + " to " + f
      }
     }
  }
  return {
   state: "success",
   data: b
  }
 }
 n.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: jb.href,
   type: "GET",
   isLocal: pb.test(jb.protocol),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": ub,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
   },
   converters: {
    "* text": String,
    "text html": !0,
    "text json": n.parseJSON,
    "text xml": n.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function (a, b) {
   return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
  },
  ajaxPrefilter: wb(sb),
  ajaxTransport: wb(tb),
  ajax: function (b, c) {
   "object" == typeof b && (c = b, b = void 0), c = c || {};
   var e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m = n.ajaxSetup({}, c),
    o = m.context || m,
    p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
    q = n.Deferred(),
    r = n.Callbacks("once memory"),
    s = m.statusCode || {},
    t = {},
    u = {},
    v = 0,
    w = "canceled",
    x = {
     readyState: 0,
     getResponseHeader: function (a) {
      var b;
      if (2 === v) {
       if (!h) {
        h = {};
        while (b = ob.exec(g))
         h[b[1].toLowerCase()] = b[2]
       }
       b = h[a.toLowerCase()]
      }
      return null == b ? null : b
     },
     getAllResponseHeaders: function () {
      return 2 === v ? g : null
     },
     setRequestHeader: function (a, b) {
      var c = a.toLowerCase();
      return v || (a = u[c] = u[c] || a, t[a] = b), this
     },
     overrideMimeType: function (a) {
      return v || (m.mimeType = a), this
     },
     statusCode: function (a) {
      var b;
      if (a)
       if (2 > v)
        for (b in a)
         s[b] = [s[b], a[b]];
       else
        x.always(a[x.status]);
      return this
     },
     abort: function (a) {
      var b = a || w;
      return e && e.abort(b), z(0, b), this
     }
    };
   if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
    j = d.createElement("a");
    try {
     j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
    } catch (y) {
     m.crossDomain = !0
    }
   }
   if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v)
    return x;
   k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
   for (l in m.headers)
    x.setRequestHeader(l, m.headers[l]);
   if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
    return x.abort();
   w = "abort";
   for (l in {
     success: 1,
     error: 1,
     complete: 1
    })
    x[l](m[l]);
   if (e = xb(tb, m, c, x)) {
    if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v)
     return x;
    m.async && m.timeout > 0 && (i = a.setTimeout(function () {
     x.abort("timeout")
    }, m.timeout));
    try {
     v = 1, e.send(t, z)
    } catch (y) {
     if (!(2 > v))
      throw y;
     z(-1, y)
    }
   } else
    z(-1, "No Transport");

   function z(b, c, d, h) {
    var j,
     l,
     t,
     u,
     w,
     y = c;
    2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
   }
   return x
  },
  getJSON: function (a, b, c) {
   return n.get(a, b, c, "json")
  },
  getScript: function (a, b) {
   return n.get(a, void 0, b, "script")
  }
 }), n.each(["get", "post"], function (a, b) {
  n[b] = function (a, c, d, e) {
   return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
    url: a,
    type: b,
    dataType: e,
    data: c,
    success: d
   }, n.isPlainObject(a) && a))
  }
 }), n._evalUrl = function (a) {
  return n.ajax({
   url: a,
   type: "GET",
   dataType: "script",
   async: !1,
   global: !1,
   "throws": !0
  })
 }, n.fn.extend({
  wrapAll: function (a) {
   var b;
   return n.isFunction(a) ? this.each(function (b) {
    n(this).wrapAll(a.call(this, b))
   }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
    var a = this;
    while (a.firstElementChild)
     a = a.firstElementChild;
    return a
   }).append(this)), this)
  },
  wrapInner: function (a) {
   return n.isFunction(a) ? this.each(function (b) {
    n(this).wrapInner(a.call(this, b))
   }) : this.each(function () {
    var b = n(this),
     c = b.contents();
    c.length ? c.wrapAll(a) : b.append(a)
   })
  },
  wrap: function (a) {
   var b = n.isFunction(a);
   return this.each(function (c) {
    n(this).wrapAll(b ? a.call(this, c) : a)
   })
  },
  unwrap: function () {
   return this.parent().each(function () {
    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
   }).end()
  }
 }), n.expr.filters.hidden = function (a) {
  return !n.expr.filters.visible(a)
 }, n.expr.filters.visible = function (a) {
  return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
 };
 var Bb = /%20/g,
  Cb = /\[\]$/,
  Db = /\r?\n/g,
  Eb = /^(?:submit|button|image|reset|file)$/i,
  Fb = /^(?:input|select|textarea|keygen)/i;

 function Gb(a, b, c, d) {
  var e;
  if (n.isArray(b))
   n.each(b, function (b, e) {
    c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
   });
  else if (c || "object" !== n.type(b))
   d(a, b);
  else
   for (e in b)
    Gb(a + "[" + e + "]", b[e], c, d)
 }
 n.param = function (a, b) {
  var c,
   d = [],
   e = function (a, b) {
    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
   };
  if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
   n.each(a, function () {
    e(this.name, this.value)
   });
  else
   for (c in a)
    Gb(c, a[c], b, e);
  return d.join("&").replace(Bb, "+")
 }, n.fn.extend({
  serialize: function () {
   return n.param(this.serializeArray())
  },
  serializeArray: function () {
   return this.map(function () {
    var a = n.prop(this, "elements");
    return a ? n.makeArray(a) : this
   }).filter(function () {
    var a = this.type;
    return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
   }).map(function (a, b) {
    var c = n(this).val();
    return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
     return {
      name: b.name,
      value: a.replace(Db, "\r\n")
     }
    }) : {
     name: b.name,
     value: c.replace(Db, "\r\n")
    }
   }).get()
  }
 }), n.ajaxSettings.xhr = function () {
  try {
   return new a.XMLHttpRequest
  } catch (b) {}
 };
 var Hb = {
   0: 200,
   1223: 204
  },
  Ib = n.ajaxSettings.xhr();
 l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
  var c,
   d;
  return l.cors || Ib && !b.crossDomain ? {
   send: function (e, f) {
    var g,
     h = b.xhr();
    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
     for (g in b.xhrFields)
      h[g] = b.xhrFields[g];
    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
    for (g in e)
     h.setRequestHeader(g, e[g]);
    c = function (a) {
     return function () {
      c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
       binary: h.response
      } : {
       text: h.responseText
      }, h.getAllResponseHeaders()))
     }
    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
     4 === h.readyState && a.setTimeout(function () {
      c && d()
     })
    }, c = c("abort");
    try {
     h.send(b.hasContent && b.data || null)
    } catch (i) {
     if (c)
      throw i
    }
   },
   abort: function () {
    c && c()
   }
  } : void 0
 }), n.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function (a) {
    return n.globalEval(a), a
   }
  }
 }), n.ajaxPrefilter("script", function (a) {
  void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
 }), n.ajaxTransport("script", function (a) {
  if (a.crossDomain) {
   var b,
    c;
   return {
    send: function (e, f) {
     b = n("<script>").prop({
      charset: a.scriptCharset,
      src: a.url
     }).on("load error", c = function (a) {
      b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
     }), d.head.appendChild(b[0])
    },
    abort: function () {
     c && c()
    }
   }
  }
 });
 var Jb = [],
  Kb = /(=)\?(?=&|$)|\?\?/;
 n.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function () {
   var a = Jb.pop() || n.expando + "_" + kb++;
   return this[a] = !0, a
  }
 }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
  var e,
   f,
   g,
   h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
  return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
   return g || n.error(e + " was not called"), g[0]
  }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
   g = arguments
  }, d.always(function () {
   void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
  }), "script") : void 0
 }), n.parseHTML = function (a, b, c) {
  if (!a || "string" != typeof a)
   return null;
  "boolean" == typeof b && (c = b, b = !1), b = b || d;
  var e = x.exec(a),
   f = !c && [];
  return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
 };
 var Lb = n.fn.load;
 n.fn.load = function (a, b, c) {
  if ("string" != typeof a && Lb)
   return Lb.apply(this, arguments);
  var d,
   e,
   f,
   g = this,
   h = a.indexOf(" ");
  return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
   url: a,
   type: e || "GET",
   dataType: "html",
   data: b
  }).done(function (a) {
   f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
  }).always(c && function (a, b) {
   g.each(function () {
    c.apply(this, f || [a.responseText, b, a])
   })
  }), this
 }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
  n.fn[b] = function (a) {
   return this.on(b, a)
  }
 }), n.expr.filters.animated = function (a) {
  return n.grep(n.timers, function (b) {
   return a === b.elem
  }).length
 };

 function Mb(a) {
  return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
 }
 n.offset = {
  setOffset: function (a, b, c) {
   var d,
    e,
    f,
    g,
    h,
    i,
    j,
    k = n.css(a, "position"),
    l = n(a),
    m = {};
   "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
  }
 }, n.fn.extend({
  offset: function (a) {
   if (arguments.length)
    return void 0 === a ? this : this.each(function (b) {
     n.offset.setOffset(this, a, b)
    });
   var b,
    c,
    d = this[0],
    e = {
     top: 0,
     left: 0
    },
    f = d && d.ownerDocument;
   if (f)
    return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
     top: e.top + c.pageYOffset - b.clientTop,
     left: e.left + c.pageXOffset - b.clientLeft
    }) : e
  },
  position: function () {
   if (this[0]) {
    var a,
     b,
     c = this[0],
     d = {
      top: 0,
      left: 0
     };
    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
     top: b.top - d.top - n.css(c, "marginTop", !0),
     left: b.left - d.left - n.css(c, "marginLeft", !0)
    }
   }
  },
  offsetParent: function () {
   return this.map(function () {
    var a = this.offsetParent;
    while (a && "static" === n.css(a, "position"))
     a = a.offsetParent;
    return a || Ea
   })
  }
 }), n.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function (a, b) {
  var c = "pageYOffset" === b;
  n.fn[a] = function (d) {
   return K(this, function (a, d, e) {
    var f = Mb(a);
    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
   }, a, d, arguments.length)
  }
 }), n.each(["top", "left"], function (a, b) {
  n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
   return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
  })
 }), n.each({
  Height: "height",
  Width: "width"
 }, function (a, b) {
  n.each({
   padding: "inner" + a,
   content: b,
   "": "outer" + a
  }, function (c, d) {
   n.fn[d] = function (d, e) {
    var f = arguments.length && (c || "boolean" != typeof d),
     g = c || (d === !0 || e === !0 ? "margin" : "border");
    return K(this, function (b, c, d) {
     var e;
     return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
    }, b, f ? d : void 0, f, null)
   }
  })
 }), n.fn.extend({
  bind: function (a, b, c) {
   return this.on(a, null, b, c)
  },
  unbind: function (a, b) {
   return this.off(a, null, b)
  },
  delegate: function (a, b, c, d) {
   return this.on(b, a, c, d)
  },
  undelegate: function (a, b, c) {
   return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
  },
  size: function () {
   return this.length
  }
 }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
  return n
 });
 var Nb = a.jQuery,
  Ob = a.$;
 return n.noConflict = function (b) {
  return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
 }, b || (a.jQuery = a.$ = n), n
});

// 2. jQuery UI v1.12.1
/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
 "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (t) {
 function e(t) {
  for (var e = t.css("visibility");
   "inherit" === e;)
   t = t.parent(), e = t.css("visibility");
  return "hidden" !== e
 }

 function i(t) {
  for (var e, i; t.length && t[0] !== document;) {
   if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i))
    return i;
   t = t.parent()
  }
  return 0
 }

 function s() {
  this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
   closeText: "Done",
   prevText: "Prev",
   nextText: "Next",
   currentText: "Today",
   monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
   monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
   dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
   dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
   weekHeader: "Wk",
   dateFormat: "mm/dd/yy",
   firstDay: 0,
   isRTL: !1,
   showMonthAfterYear: !1,
   yearSuffix: ""
  }, this._defaults = {
   showOn: "focus",
   showAnim: "fadeIn",
   showOptions: {},
   defaultDate: null,
   appendText: "",
   buttonText: "...",
   buttonImage: "",
   buttonImageOnly: !1,
   hideIfNoPrevNext: !1,
   navigationAsDateFormat: !1,
   gotoCurrent: !1,
   changeMonth: !1,
   changeYear: !1,
   yearRange: "c-10:c+10",
   showOtherMonths: !1,
   selectOtherMonths: !1,
   showWeek: !1,
   calculateWeek: this.iso8601Week,
   shortYearCutoff: "+10",
   minDate: null,
   maxDate: null,
   duration: "fast",
   beforeShowDay: null,
   beforeShow: null,
   onSelect: null,
   onChangeMonthYear: null,
   onClose: null,
   numberOfMonths: 1,
   showCurrentAtPos: 0,
   stepMonths: 1,
   stepBigMonths: 12,
   altField: "",
   altFormat: "",
   constrainInput: !0,
   showButtonPanel: !1,
   autoSize: !1,
   disabled: !1
  }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
 }

 function n(e) {
  var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
  return e.on("mouseout", i, function () {
   t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
  }).on("mouseover", i, o)
 }

 function o() {
  t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
 }

 function a(e, i) {
  t.extend(e, i);
  for (var s in i)
   null == i[s] && (e[s] = i[s]);
  return e
 }

 function r(t) {
  return function () {
   var e = this.element.val();
   t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
  }
 }
 t.ui = t.ui || {}, t.ui.version = "1.12.1";
 var h = 0,
  l = Array.prototype.slice;
 t.cleanData = function (e) {
   return function (i) {
    var s,
     n,
     o;
    for (o = 0; null != (n = i[o]); o++)
     try {
      s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
     } catch (a) {}
    e(i)
   }
  }(t.cleanData), t.widget = function (e, i, s) {
   var n,
    o,
    a,
    r = {},
    h = e.split(".")[0];
   e = e.split(".")[1];
   var l = h + "-" + e;
   return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
    return !!t.data(e, l)
   }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
    return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
   }, t.extend(o, n, {
    version: s.version,
    _proto: t.extend({}, s),
    _childConstructors: []
   }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
    return t.isFunction(s) ? (r[e] = function () {
     function t() {
      return i.prototype[e].apply(this, arguments)
     }

     function n(t) {
      return i.prototype[e].apply(this, t)
     }
     return function () {
      var e,
       i = this._super,
       o = this._superApply;
      return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
     }
    }(), void 0) : (r[e] = s, void 0)
   }), o.prototype = t.widget.extend(a, {
    widgetEventPrefix: n ? a.widgetEventPrefix || e : e
   }, r, {
    constructor: o,
    namespace: h,
    widgetName: e,
    widgetFullName: l
   }), n ? (t.each(n._childConstructors, function (e, i) {
    var s = i.prototype;
    t.widget(s.namespace + "." + s.widgetName, o, i._proto)
   }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
  }, t.widget.extend = function (e) {
   for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
    for (i in n[o])
     s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
   return e
  }, t.widget.bridge = function (e, i) {
   var s = i.prototype.widgetFullName || e;
   t.fn[e] = function (n) {
    var o = "string" == typeof n,
     a = l.call(arguments, 1),
     r = this;
    return o ? this.length || "instance" !== n ? this.each(function () {
     var i,
      o = t.data(this, s);
     return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
    }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
     var e = t.data(this, s);
     e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
    })), r
   }
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
   widgetName: "widget",
   widgetEventPrefix: "",
   defaultElement: "<div>",
   options: {
    classes: {},
    disabled: !1,
    create: null
   },
   _createWidget: function (e, i) {
    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
     remove: function (t) {
      t.target === i && this.destroy()
     }
    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
   },
   _getCreateOptions: function () {
    return {}
   },
   _getCreateEventData: t.noop,
   _create: t.noop,
   _init: t.noop,
   destroy: function () {
    var e = this;
    this._destroy(), t.each(this.classesElementLookup, function (t, i) {
     e._removeClass(i, t)
    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
   },
   _destroy: t.noop,
   widget: function () {
    return this.element
   },
   option: function (e, i) {
    var s,
     n,
     o,
     a = e;
    if (0 === arguments.length)
     return t.widget.extend({}, this.options);
    if ("string" == typeof e)
     if (a = {}, s = e.split("."), e = s.shift(), s.length) {
      for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++)
       n[s[o]] = n[s[o]] || {}, n = n[s[o]];
      if (e = s.pop(), 1 === arguments.length)
       return void 0 === n[e] ? null : n[e];
      n[e] = i
     } else {
      if (1 === arguments.length)
       return void 0 === this.options[e] ? null : this.options[e];
      a[e] = i
     }
    return this._setOptions(a), this
   },
   _setOptions: function (t) {
    var e;
    for (e in t)
     this._setOption(e, t[e]);
    return this
   },
   _setOption: function (t, e) {
    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
   },
   _setOptionClasses: function (e) {
    var i,
     s,
     n;
    for (i in e)
     n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
      element: s,
      keys: i,
      classes: e,
      add: !0
     })))
   },
   _setOptionDisabled: function (t) {
    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
   },
   enable: function () {
    return this._setOptions({
     disabled: !1
    })
   },
   disable: function () {
    return this._setOptions({
     disabled: !0
    })
   },
   _classes: function (e) {
    function i(i, o) {
     var a,
      r;
     for (r = 0; i.length > r; r++)
      a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
    }
    var s = [],
     n = this;
    return e = t.extend({
     element: this.element,
     classes: this.options.classes || {}
    }, e), this._on(e.element, {
     remove: "_untrackClassesElement"
    }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
   },
   _untrackClassesElement: function (e) {
    var i = this;
    t.each(i.classesElementLookup, function (s, n) {
     -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
    })
   },
   _removeClass: function (t, e, i) {
    return this._toggleClass(t, e, i, !1)
   },
   _addClass: function (t, e, i) {
    return this._toggleClass(t, e, i, !0)
   },
   _toggleClass: function (t, e, i, s) {
    s = "boolean" == typeof s ? s : i;
    var n = "string" == typeof t || null === t,
     o = {
      extra: n ? e : i,
      keys: n ? t : e,
      element: n ? this.element : t,
      add: s
     };
    return o.element.toggleClass(this._classes(o), s), this
   },
   _on: function (e, i, s) {
    var n,
     o = this;
    "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
     function r() {
      return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
     }
     "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
     var h = s.match(/^([\w:-]*)\s*(.*)$/),
      l = h[1] + o.eventNamespace,
      c = h[2];
     c ? n.on(l, c, r) : i.on(l, r)
    })
   },
   _off: function (e, i) {
    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
   },
   _delay: function (t, e) {
    function i() {
     return ("string" == typeof t ? s[t] : t).apply(s, arguments)
    }
    var s = this;
    return setTimeout(i, e || 0)
   },
   _hoverable: function (e) {
    this.hoverable = this.hoverable.add(e), this._on(e, {
     mouseenter: function (e) {
      this._addClass(t(e.currentTarget), null, "ui-state-hover")
     },
     mouseleave: function (e) {
      this._removeClass(t(e.currentTarget), null, "ui-state-hover")
     }
    })
   },
   _focusable: function (e) {
    this.focusable = this.focusable.add(e), this._on(e, {
     focusin: function (e) {
      this._addClass(t(e.currentTarget), null, "ui-state-focus")
     },
     focusout: function (e) {
      this._removeClass(t(e.currentTarget), null, "ui-state-focus")
     }
    })
   },
   _trigger: function (e, i, s) {
    var n,
     o,
     a = this.options[e];
    if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
     for (n in o)
      n in i || (i[n] = o[n]);
    return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
   }
  }, t.each({
   show: "fadeIn",
   hide: "fadeOut"
  }, function (e, i) {
   t.Widget.prototype["_" + e] = function (s, n, o) {
    "string" == typeof n && (n = {
     effect: n
    });
    var a,
     r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
    n = n || {}, "number" == typeof n && (n = {
     duration: n
    }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
     t(this)[e](), o && o.call(s[0]), i()
    })
   }
  }), t.widget,
  function () {
   function e(t, e, i) {
    return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
   }

   function i(e, i) {
    return parseInt(t.css(e, i), 10) || 0
   }

   function s(e) {
    var i = e[0];
    return 9 === i.nodeType ? {
     width: e.width(),
     height: e.height(),
     offset: {
      top: 0,
      left: 0
     }
    } : t.isWindow(i) ? {
     width: e.width(),
     height: e.height(),
     offset: {
      top: e.scrollTop(),
      left: e.scrollLeft()
     }
    } : i.preventDefault ? {
     width: 0,
     height: 0,
     offset: {
      top: i.pageY,
      left: i.pageX
     }
    } : {
     width: e.outerWidth(),
     height: e.outerHeight(),
     offset: e.offset()
    }
   }
   var n,
    o = Math.max,
    a = Math.abs,
    r = /left|center|right/,
    h = /top|center|bottom/,
    l = /[\+\-]\d+(\.[\d]+)?%?/,
    c = /^\w+/,
    u = /%$/,
    d = t.fn.position;
   t.position = {
    scrollbarWidth: function () {
     if (void 0 !== n)
      return n;
     var e,
      i,
      s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
      o = s.children()[0];
     return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
    },
    getScrollInfo: function (e) {
     var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
      s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
      n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
      o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
     return {
      width: o ? t.position.scrollbarWidth() : 0,
      height: n ? t.position.scrollbarWidth() : 0
     }
    },
    getWithinInfo: function (e) {
     var i = t(e || window),
      s = t.isWindow(i[0]),
      n = !!i[0] && 9 === i[0].nodeType,
      o = !s && !n;
     return {
      element: i,
      isWindow: s,
      isDocument: n,
      offset: o ? t(e).offset() : {
       left: 0,
       top: 0
      },
      scrollLeft: i.scrollLeft(),
      scrollTop: i.scrollTop(),
      width: i.outerWidth(),
      height: i.outerHeight()
     }
    }
   }, t.fn.position = function (n) {
    if (!n || !n.of)
     return d.apply(this, arguments);
    n = t.extend({}, n);
    var u,
     p,
     f,
     g,
     m,
     _,
     v = t(n.of),
     b = t.position.getWithinInfo(n.within),
     y = t.position.getScrollInfo(b),
     w = (n.collision || "flip").split(" "),
     k = {};
    return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
     var t,
      e,
      i = (n[this] || "").split(" ");
     1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
    }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
     var s,
      r,
      h = t(this),
      l = h.outerWidth(),
      c = h.outerHeight(),
      d = i(this, "marginLeft"),
      _ = i(this, "marginTop"),
      x = l + d + i(this, "marginRight") + y.width,
      C = c + _ + i(this, "marginBottom") + y.height,
      D = t.extend({}, m),
      I = e(k.my, h.outerWidth(), h.outerHeight());
     "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
      marginLeft: d,
      marginTop: _
     }, t.each(["left", "top"], function (e, i) {
      t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
       targetWidth: p,
       targetHeight: f,
       elemWidth: l,
       elemHeight: c,
       collisionPosition: s,
       collisionWidth: x,
       collisionHeight: C,
       offset: [u[0] + I[0], u[1] + I[1]],
       my: n.my,
       at: n.at,
       within: b,
       elem: h
      })
     }), n.using && (r = function (t) {
      var e = g.left - D.left,
       i = e + p - l,
       s = g.top - D.top,
       r = s + f - c,
       u = {
        target: {
         element: v,
         left: g.left,
         top: g.top,
         width: p,
         height: f
        },
        element: {
         element: h,
         left: D.left,
         top: D.top,
         width: l,
         height: c
        },
        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
       };
      l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
     }), h.offset(t.extend(D, {
      using: r
     }))
    })
   }, t.ui.position = {
    fit: {
     left: function (t, e) {
      var i,
       s = e.within,
       n = s.isWindow ? s.scrollLeft : s.offset.left,
       a = s.width,
       r = t.left - e.collisionPosition.marginLeft,
       h = n - r,
       l = r + e.collisionWidth - a - n;
      e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
     },
     top: function (t, e) {
      var i,
       s = e.within,
       n = s.isWindow ? s.scrollTop : s.offset.top,
       a = e.within.height,
       r = t.top - e.collisionPosition.marginTop,
       h = n - r,
       l = r + e.collisionHeight - a - n;
      e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
     }
    },
    flip: {
     left: function (t, e) {
      var i,
       s,
       n = e.within,
       o = n.offset.left + n.scrollLeft,
       r = n.width,
       h = n.isWindow ? n.scrollLeft : n.offset.left,
       l = t.left - e.collisionPosition.marginLeft,
       c = l - h,
       u = l + e.collisionWidth - r - h,
       d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
       p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
       f = -2 * e.offset[0];
      0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
     },
     top: function (t, e) {
      var i,
       s,
       n = e.within,
       o = n.offset.top + n.scrollTop,
       r = n.height,
       h = n.isWindow ? n.scrollTop : n.offset.top,
       l = t.top - e.collisionPosition.marginTop,
       c = l - h,
       u = l + e.collisionHeight - r - h,
       d = "top" === e.my[1],
       p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
       f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
       g = -2 * e.offset[1];
      0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
     }
    },
    flipfit: {
     left: function () {
      t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
     },
     top: function () {
      t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
     }
    }
   }
  }(), t.ui.position, t.extend(t.expr[":"], {
   data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
    return function (i) {
     return !!t.data(i, e)
    }
   }) : function (e, i, s) {
    return !!t.data(e, s[3])
   }
  }), t.fn.extend({
   disableSelection: function () {
    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
    return function () {
     return this.on(t + ".ui-disableSelection", function (t) {
      t.preventDefault()
     })
    }
   }(),
   enableSelection: function () {
    return this.off(".ui-disableSelection")
   }
  });
 var c = "ui-effects-",
  u = "ui-effects-style",
  d = "ui-effects-animated",
  p = t;
 t.effects = {
   effect: {}
  },
  function (t, e) {
   function i(t, e, i) {
    var s = u[e.type] || {};
    return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
   }

   function s(i) {
    var s = l(),
     n = s._rgba = [];
    return i = i.toLowerCase(), f(h, function (t, o) {
     var a,
      r = o.re.exec(i),
      h = r && o.parse(r),
      l = o.space || "rgba";
     return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
   }

   function n(t, e, i) {
    return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
   }
   var o,
    a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
    r = /^([\-+])=\s*(\d+\.?\d*)/,
    h = [{
     re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
     parse: function (t) {
      return [t[1], t[2], t[3], t[4]]
     }
    }, {
     re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
     parse: function (t) {
      return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
     }
    }, {
     re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
     parse: function (t) {
      return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
     }
    }, {
     re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
     parse: function (t) {
      return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
     }
    }, {
     re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
     space: "hsla",
     parse: function (t) {
      return [t[1], t[2] / 100, t[3] / 100, t[4]]
     }
    }],
    l = t.Color = function (e, i, s, n) {
     return new t.Color.fn.parse(e, i, s, n)
    },
    c = {
     rgba: {
      props: {
       red: {
        idx: 0,
        type: "byte"
       },
       green: {
        idx: 1,
        type: "byte"
       },
       blue: {
        idx: 2,
        type: "byte"
       }
      }
     },
     hsla: {
      props: {
       hue: {
        idx: 0,
        type: "degrees"
       },
       saturation: {
        idx: 1,
        type: "percent"
       },
       lightness: {
        idx: 2,
        type: "percent"
       }
      }
     }
    },
    u = {
     "byte": {
      floor: !0,
      max: 255
     },
     percent: {
      max: 1
     },
     degrees: {
      mod: 360,
      floor: !0
     }
    },
    d = l.support = {},
    p = t("<p>")[0],
    f = t.each;
   p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
    e.cache = "_" + t, e.props.alpha = {
     idx: 3,
     type: "percent",
     def: 1
    }
   }), l.fn = t.extend(l.prototype, {
    parse: function (n, a, r, h) {
     if (n === e)
      return this._rgba = [null, null, null, null], this;
     (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
     var u = this,
      d = t.type(n),
      p = this._rgba = [];
     return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
      p[e.idx] = i(n[e.idx], e)
     }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
      n[e.cache] && (u[e.cache] = n[e.cache].slice())
     }) : f(c, function (e, s) {
      var o = s.cache;
      f(s.props, function (t, e) {
       if (!u[o] && s.to) {
        if ("alpha" === t || null == n[t])
         return;
        u[o] = s.to(u._rgba)
       }
       u[o][e.idx] = i(n[t], e, !0)
      }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
     }), this) : e
    },
    is: function (t) {
     var i = l(t),
      s = !0,
      n = this;
     return f(c, function (t, o) {
      var a,
       r = i[o.cache];
      return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
       return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
      })), s
     }), s
    },
    _space: function () {
     var t = [],
      e = this;
     return f(c, function (i, s) {
      e[s.cache] && t.push(i)
     }), t.pop()
    },
    transition: function (t, e) {
     var s = l(t),
      n = s._space(),
      o = c[n],
      a = 0 === this.alpha() ? l("transparent") : this,
      r = a[o.cache] || o.to(a._rgba),
      h = r.slice();
     return s = s[o.cache], f(o.props, function (t, n) {
      var o = n.idx,
       a = r[o],
       l = s[o],
       c = u[n.type] || {};
      null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
     }), this[n](h)
    },
    blend: function (e) {
     if (1 === this._rgba[3])
      return this;
     var i = this._rgba.slice(),
      s = i.pop(),
      n = l(e)._rgba;
     return l(t.map(i, function (t, e) {
      return (1 - s) * n[e] + s * t
     }))
    },
    toRgbaString: function () {
     var e = "rgba(",
      i = t.map(this._rgba, function (t, e) {
       return null == t ? e > 2 ? 1 : 0 : t
      });
     return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
    },
    toHslaString: function () {
     var e = "hsla(",
      i = t.map(this.hsla(), function (t, e) {
       return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
      });
     return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
    },
    toHexString: function (e) {
     var i = this._rgba.slice(),
      s = i.pop();
     return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
      return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
     }).join("")
    },
    toString: function () {
     return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
    }
   }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
    if (null == t[0] || null == t[1] || null == t[2])
     return [null, null, null, t[3]];
    var e,
     i,
     s = t[0] / 255,
     n = t[1] / 255,
     o = t[2] / 255,
     a = t[3],
     r = Math.max(s, n, o),
     h = Math.min(s, n, o),
     l = r - h,
     c = r + h,
     u = .5 * c;
    return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
   }, c.hsla.from = function (t) {
    if (null == t[0] || null == t[1] || null == t[2])
     return [null, null, null, t[3]];
    var e = t[0] / 360,
     i = t[1],
     s = t[2],
     o = t[3],
     a = .5 >= s ? s * (1 + i) : s + i - s * i,
     r = 2 * s - a;
    return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
   }, f(c, function (s, n) {
    var o = n.props,
     a = n.cache,
     h = n.to,
     c = n.from;
    l.fn[s] = function (s) {
     if (h && !this[a] && (this[a] = h(this._rgba)), s === e)
      return this[a].slice();
     var n,
      r = t.type(s),
      u = "array" === r || "object" === r ? s : arguments,
      d = this[a].slice();
     return f(o, function (t, e) {
      var s = u["object" === r ? t : e.idx];
      null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
     }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
    }, f(o, function (e, i) {
     l.fn[e] || (l.fn[e] = function (n) {
      var o,
       a = t.type(n),
       h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
       l = this[h](),
       c = l[i.idx];
      return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
     })
    })
   }), l.hook = function (e) {
    var i = e.split(" ");
    f(i, function (e, i) {
     t.cssHooks[i] = {
      set: function (e, n) {
       var o,
        a,
        r = "";
       if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
        if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
         for (a = "backgroundColor" === i ? e.parentNode : e;
          ("" === r || "transparent" === r) && a && a.style;)
          try {
           r = t.css(a, "backgroundColor"), a = a.parentNode
          } catch (h) {}
         n = n.blend(r && "transparent" !== r ? r : "_default")
        }
        n = n.toRgbaString()
       }
       try {
        e.style[i] = n
       } catch (h) {}
      }
     }, t.fx.step[i] = function (e) {
      e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
     }
    })
   }, l.hook(a), t.cssHooks.borderColor = {
    expand: function (t) {
     var e = {};
     return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
      e["border" + s + "Color"] = t
     }), e
    }
   }, o = t.Color.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
   }
  }(p),
  function () {
   function e(e) {
    var i,
     s,
     n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
     o = {};
    if (n && n.length && n[0] && n[n[0]])
     for (s = n.length; s--;)
      i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
    else
     for (i in n)
      "string" == typeof n[i] && (o[i] = n[i]);
    return o
   }

   function i(e, i) {
    var s,
     o,
     a = {};
    for (s in i)
     o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
    return a
   }
   var s = ["add", "remove", "toggle"],
    n = {
     border: 1,
     borderBottom: 1,
     borderColor: 1,
     borderLeft: 1,
     borderRight: 1,
     borderTop: 1,
     borderWidth: 1,
     margin: 1,
     padding: 1
    };
   t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
    t.fx.step[i] = function (t) {
     ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
    }
   }), t.fn.addBack || (t.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
   }), t.effects.animateClass = function (n, o, a, r) {
    var h = t.speed(o, a, r);
    return this.queue(function () {
     var o,
      a = t(this),
      r = a.attr("class") || "",
      l = h.children ? a.find("*").addBack() : a;
     l = l.map(function () {
      var i = t(this);
      return {
       el: i,
       start: e(this)
      }
     }), o = function () {
      t.each(s, function (t, e) {
       n[e] && a[e + "Class"](n[e])
      })
     }, o(), l = l.map(function () {
      return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
     }), a.attr("class", r), l = l.map(function () {
      var e = this,
       i = t.Deferred(),
       s = t.extend({}, h, {
        queue: !1,
        complete: function () {
         i.resolve(e)
        }
       });
      return this.el.animate(this.diff, s), i.promise()
     }), t.when.apply(t, l.get()).done(function () {
      o(), t.each(arguments, function () {
       var e = this.el;
       t.each(this.diff, function (t) {
        e.css(t, "")
       })
      }), h.complete.call(a[0])
     })
    })
   }, t.fn.extend({
    addClass: function (e) {
     return function (i, s, n, o) {
      return s ? t.effects.animateClass.call(this, {
       add: i
      }, s, n, o) : e.apply(this, arguments)
     }
    }(t.fn.addClass),
    removeClass: function (e) {
     return function (i, s, n, o) {
      return arguments.length > 1 ? t.effects.animateClass.call(this, {
       remove: i
      }, s, n, o) : e.apply(this, arguments)
     }
    }(t.fn.removeClass),
    toggleClass: function (e) {
     return function (i, s, n, o, a) {
      return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
       add: i
      } : {
       remove: i
      }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
       toggle: i
      }, s, n, o)
     }
    }(t.fn.toggleClass),
    switchClass: function (e, i, s, n, o) {
     return t.effects.animateClass.call(this, {
      add: i,
      remove: e
     }, s, n, o)
    }
   })
  }(),
  function () {
   function e(e, i, s, n) {
    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
     effect: e
    }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
   }

   function i(e) {
    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
   }

   function s(t, e) {
    var i = e.outerWidth(),
     s = e.outerHeight(),
     n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
     o = n.exec(t) || ["", 0, i, s, 0];
    return {
     top: parseFloat(o[1]) || 0,
     right: "auto" === o[2] ? i : parseFloat(o[2]),
     bottom: "auto" === o[3] ? s : parseFloat(o[3]),
     left: parseFloat(o[4]) || 0
    }
   }
   t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
    return function (i) {
     return !!t(i).data(d) || e(i)
    }
   }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
    save: function (t, e) {
     for (var i = 0, s = e.length; s > i; i++)
      null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
    },
    restore: function (t, e) {
     for (var i, s = 0, n = e.length; n > s; s++)
      null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
    },
    setMode: function (t, e) {
     return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
    },
    createWrapper: function (e) {
     if (e.parent().is(".ui-effects-wrapper"))
      return e.parent();
     var i = {
       width: e.outerWidth(!0),
       height: e.outerHeight(!0),
       "float": e.css("float")
      },
      s = t("<div></div>").addClass("ui-effects-wrapper").css({
       fontSize: "100%",
       background: "transparent",
       border: "none",
       margin: 0,
       padding: 0
      }),
      n = {
       width: e.width(),
       height: e.height()
      },
      o = document.activeElement;
     try {
      o.id
     } catch (a) {
      o = document.body
     }
     return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
      position: "relative"
     }), e.css({
      position: "relative"
     })) : (t.extend(i, {
      position: e.css("position"),
      zIndex: e.css("z-index")
     }), t.each(["top", "left", "bottom", "right"], function (t, s) {
      i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
     }), e.css({
      position: "relative",
      top: 0,
      left: 0,
      right: "auto",
      bottom: "auto"
     })), e.css(n), s.css(i).show()
    },
    removeWrapper: function (e) {
     var i = document.activeElement;
     return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
    }
   }), t.extend(t.effects, {
    version: "1.12.1",
    define: function (e, i, s) {
     return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
    },
    scaledDimensions: function (t, e, i) {
     if (0 === e)
      return {
       height: 0,
       width: 0,
       outerHeight: 0,
       outerWidth: 0
      };
     var s = "horizontal" !== i ? (e || 100) / 100 : 1,
      n = "vertical" !== i ? (e || 100) / 100 : 1;
     return {
      height: t.height() * n,
      width: t.width() * s,
      outerHeight: t.outerHeight() * n,
      outerWidth: t.outerWidth() * s
     }
    },
    clipToBox: function (t) {
     return {
      width: t.clip.right - t.clip.left,
      height: t.clip.bottom - t.clip.top,
      left: t.clip.left,
      top: t.clip.top
     }
    },
    unshift: function (t, e, i) {
     var s = t.queue();
     e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
    },
    saveStyle: function (t) {
     t.data(u, t[0].style.cssText)
    },
    restoreStyle: function (t) {
     t[0].style.cssText = t.data(u) || "", t.removeData(u)
    },
    mode: function (t, e) {
     var i = t.is(":hidden");
     return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
    },
    getBaseline: function (t, e) {
     var i,
      s;
     switch (t[0]) {
      case "top":
       i = 0;
       break;
      case "middle":
       i = .5;
       break;
      case "bottom":
       i = 1;
       break;
      default:
       i = t[0] / e.height
     }
     switch (t[1]) {
      case "left":
       s = 0;
       break;
      case "center":
       s = .5;
       break;
      case "right":
       s = 1;
       break;
      default:
       s = t[1] / e.width
     }
     return {
      x: s,
      y: i
     }
    },
    createPlaceholder: function (e) {
     var i,
      s = e.css("position"),
      n = e.position();
     return e.css({
      marginTop: e.css("marginTop"),
      marginBottom: e.css("marginBottom"),
      marginLeft: e.css("marginLeft"),
      marginRight: e.css("marginRight")
     }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
      display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
      visibility: "hidden",
      marginTop: e.css("marginTop"),
      marginBottom: e.css("marginBottom"),
      marginLeft: e.css("marginLeft"),
      marginRight: e.css("marginRight"),
      "float": e.css("float")
     }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
      position: s,
      left: n.left,
      top: n.top
     }), i
    },
    removePlaceholder: function (t) {
     var e = c + "placeholder",
      i = t.data(e);
     i && (i.remove(), t.removeData(e))
    },
    cleanUp: function (e) {
     t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
    },
    setTransition: function (e, i, s, n) {
     return n = n || {}, t.each(i, function (t, i) {
      var o = e.cssUnit(i);
      o[0] > 0 && (n[i] = o[0] * s + o[1])
     }), n
    }
   }), t.fn.extend({
    effect: function () {
     function i(e) {
      function i() {
       r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
      }

      function a() {
       t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
      }
      var r = t(this);
      s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
     }
     var s = e.apply(this, arguments),
      n = t.effects.effect[s.effect],
      o = n.mode,
      a = s.queue,
      r = a || "fx",
      h = s.complete,
      l = s.mode,
      c = [],
      u = function (e) {
       var i = t(this),
        s = t.effects.mode(i, l) || o;
       i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
      };
     return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
      h && h.call(this)
     }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
    },
    show: function (t) {
     return function (s) {
      if (i(s))
       return t.apply(this, arguments);
      var n = e.apply(this, arguments);
      return n.mode = "show", this.effect.call(this, n)
     }
    }(t.fn.show),
    hide: function (t) {
     return function (s) {
      if (i(s))
       return t.apply(this, arguments);
      var n = e.apply(this, arguments);
      return n.mode = "hide", this.effect.call(this, n)
     }
    }(t.fn.hide),
    toggle: function (t) {
     return function (s) {
      if (i(s) || "boolean" == typeof s)
       return t.apply(this, arguments);
      var n = e.apply(this, arguments);
      return n.mode = "toggle", this.effect.call(this, n)
     }
    }(t.fn.toggle),
    cssUnit: function (e) {
     var i = this.css(e),
      s = [];
     return t.each(["em", "px", "%", "pt"], function (t, e) {
      i.indexOf(e) > 0 && (s = [parseFloat(i), e])
     }), s
    },
    cssClip: function (t) {
     return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
    },
    transfer: function (e, i) {
     var s = t(this),
      n = t(e.to),
      o = "fixed" === n.css("position"),
      a = t("body"),
      r = o ? a.scrollTop() : 0,
      h = o ? a.scrollLeft() : 0,
      l = n.offset(),
      c = {
       top: l.top - r,
       left: l.left - h,
       height: n.innerHeight(),
       width: n.innerWidth()
      },
      u = s.offset(),
      d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
       top: u.top - r,
       left: u.left - h,
       height: s.innerHeight(),
       width: s.innerWidth(),
       position: o ? "fixed" : "absolute"
      }).animate(c, e.duration, e.easing, function () {
       d.remove(), t.isFunction(i) && i()
      })
    }
   }), t.fx.step.clip = function (e) {
    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
     top: e.pos * (e.end.top - e.start.top) + e.start.top,
     right: e.pos * (e.end.right - e.start.right) + e.start.right,
     bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
     left: e.pos * (e.end.left - e.start.left) + e.start.left
    })
   }
  }(),
  function () {
   var e = {};
   t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
    e[i] = function (e) {
     return Math.pow(e, t + 2)
    }
   }), t.extend(e, {
    Sine: function (t) {
     return 1 - Math.cos(t * Math.PI / 2)
    },
    Circ: function (t) {
     return 1 - Math.sqrt(1 - t * t)
    },
    Elastic: function (t) {
     return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
    },
    Back: function (t) {
     return t * t * (3 * t - 2)
    },
    Bounce: function (t) {
     for (var e, i = 4;
      ((e = Math.pow(2, --i)) - 1) / 11 > t;)
     ;
     return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
    }
   }), t.each(e, function (e, i) {
    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
     return 1 - i(1 - t)
    }, t.easing["easeInOut" + e] = function (t) {
     return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
    }
   })
  }();
 var f = t.effects;
 t.effects.define("blind", "hide", function (e, i) {
  var s = {
    up: ["bottom", "top"],
    vertical: ["bottom", "top"],
    down: ["top", "bottom"],
    left: ["right", "left"],
    horizontal: ["right", "left"],
    right: ["left", "right"]
   },
   n = t(this),
   o = e.direction || "up",
   a = n.cssClip(),
   r = {
    clip: t.extend({}, a)
   },
   h = t.effects.createPlaceholder(n);
  r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }), t.effects.define("bounce", function (e, i) {
  var s,
   n,
   o,
   a = t(this),
   r = e.mode,
   h = "hide" === r,
   l = "show" === r,
   c = e.direction || "up",
   u = e.distance,
   d = e.times || 5,
   p = 2 * d + (l || h ? 1 : 0),
   f = e.duration / p,
   g = e.easing,
   m = "up" === c || "down" === c ? "top" : "left",
   _ = "up" === c || "left" === c,
   v = 0,
   b = a.queue().length;
  for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
    opacity: 1
   }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++)
   s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
  h && (s = {
   opacity: 0
  }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
 }), t.effects.define("clip", "hide", function (e, i) {
  var s,
   n = {},
   o = t(this),
   a = e.direction || "vertical",
   r = "both" === a,
   h = r || "horizontal" === a,
   l = r || "vertical" === a;
  s = o.cssClip(), n.clip = {
   top: l ? (s.bottom - s.top) / 2 : s.top,
   right: h ? (s.right - s.left) / 2 : s.right,
   bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
   left: h ? (s.right - s.left) / 2 : s.left
  }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }), t.effects.define("drop", "hide", function (e, i) {
  var s,
   n = t(this),
   o = e.mode,
   a = "show" === o,
   r = e.direction || "left",
   h = "up" === r || "down" === r ? "top" : "left",
   l = "up" === r || "left" === r ? "-=" : "+=",
   c = "+=" === l ? "-=" : "+=",
   u = {
    opacity: 0
   };
  t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }), t.effects.define("explode", "hide", function (e, i) {
  function s() {
   b.push(this), b.length === u * d && n()
  }

  function n() {
   p.css({
    visibility: "visible"
   }), t(b).remove(), i()
  }
  var o,
   a,
   r,
   h,
   l,
   c,
   u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
   d = u,
   p = t(this),
   f = e.mode,
   g = "show" === f,
   m = p.show().css("visibility", "hidden").offset(),
   _ = Math.ceil(p.outerWidth() / d),
   v = Math.ceil(p.outerHeight() / u),
   b = [];
  for (o = 0; u > o; o++)
   for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++)
    r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
     position: "absolute",
     visibility: "visible",
     left: -a * _,
     top: -o * v
    }).parent().addClass("ui-effects-explode").css({
     position: "absolute",
     overflow: "hidden",
     width: _,
     height: v,
     left: r + (g ? l * _ : 0),
     top: h + (g ? c * v : 0),
     opacity: g ? 0 : 1
    }).animate({
     left: r + (g ? 0 : l * _),
     top: h + (g ? 0 : c * v),
     opacity: g ? 1 : 0
    }, e.duration || 500, e.easing, s)
 }), t.effects.define("fade", "toggle", function (e, i) {
  var s = "show" === e.mode;
  t(this).css("opacity", s ? 0 : 1).animate({
   opacity: s ? 1 : 0
  }, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }), t.effects.define("fold", "hide", function (e, i) {
  var s = t(this),
   n = e.mode,
   o = "show" === n,
   a = "hide" === n,
   r = e.size || 15,
   h = /([0-9]+)%/.exec(r),
   l = !!e.horizFirst,
   c = l ? ["right", "bottom"] : ["bottom", "right"],
   u = e.duration / 2,
   d = t.effects.createPlaceholder(s),
   p = s.cssClip(),
   f = {
    clip: t.extend({}, p)
   },
   g = {
    clip: t.extend({}, p)
   },
   m = [p[c[0]], p[c[1]]],
   _ = s.queue().length;
  h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
   d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
  }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
 }), t.effects.define("highlight", "show", function (e, i) {
  var s = t(this),
   n = {
    backgroundColor: s.css("backgroundColor")
   };
  "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
   backgroundImage: "none",
   backgroundColor: e.color || "#ffff99"
  }).animate(n, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 }), t.effects.define("size", function (e, i) {
  var s,
   n,
   o,
   a = t(this),
   r = ["fontSize"],
   h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
   l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
   c = e.mode,
   u = "effect" !== c,
   d = e.scale || "both",
   p = e.origin || ["middle", "center"],
   f = a.css("position"),
   g = a.position(),
   m = t.effects.scaledDimensions(a),
   _ = e.from || m,
   v = e.to || t.effects.scaledDimensions(a, 0);
  t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
   from: {
    y: _.height / m.height,
    x: _.width / m.width
   },
   to: {
    y: v.height / m.height,
    x: v.width / m.width
   }
  }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
   var i = t(this),
    s = t.effects.scaledDimensions(i),
    o = {
     height: s.height * n.from.y,
     width: s.width * n.from.x,
     outerHeight: s.outerHeight * n.from.y,
     outerWidth: s.outerWidth * n.from.x
    },
    a = {
     height: s.height * n.to.y,
     width: s.width * n.to.x,
     outerHeight: s.height * n.to.y,
     outerWidth: s.width * n.to.x
    };
   n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
    u && t.effects.restoreStyle(i)
   })
  })), a.animate(v, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: function () {
    var e = a.offset();
    0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
   }
  })
 }), t.effects.define("scale", function (e, i) {
  var s = t(this),
   n = e.mode,
   o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
   a = t.extend(!0, {
    from: t.effects.scaledDimensions(s),
    to: t.effects.scaledDimensions(s, o, e.direction || "both"),
    origin: e.origin || ["middle", "center"]
   }, e);
  e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
 }), t.effects.define("puff", "hide", function (e, i) {
  var s = t.extend(!0, {}, e, {
   fade: !0,
   percent: parseInt(e.percent, 10) || 150
  });
  t.effects.effect.scale.call(this, s, i)
 }), t.effects.define("pulsate", "show", function (e, i) {
  var s = t(this),
   n = e.mode,
   o = "show" === n,
   a = "hide" === n,
   r = o || a,
   h = 2 * (e.times || 5) + (r ? 1 : 0),
   l = e.duration / h,
   c = 0,
   u = 1,
   d = s.queue().length;
  for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++)
   s.animate({
    opacity: c
   }, l, e.easing), c = 1 - c;
  s.animate({
   opacity: c
  }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
 }), t.effects.define("shake", function (e, i) {
  var s = 1,
   n = t(this),
   o = e.direction || "left",
   a = e.distance || 20,
   r = e.times || 3,
   h = 2 * r + 1,
   l = Math.round(e.duration / h),
   c = "up" === o || "down" === o ? "top" : "left",
   u = "up" === o || "left" === o,
   d = {},
   p = {},
   f = {},
   g = n.queue().length;
  for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++)
   n.animate(p, l, e.easing).animate(f, l, e.easing);
  n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
 }), t.effects.define("slide", "show", function (e, i) {
  var s,
   n,
   o = t(this),
   a = {
    up: ["bottom", "top"],
    down: ["top", "bottom"],
    left: ["right", "left"],
    right: ["left", "right"]
   },
   r = e.mode,
   h = e.direction || "left",
   l = "up" === h || "down" === h ? "top" : "left",
   c = "up" === h || "left" === h,
   u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
   d = {};
  t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
   queue: !1,
   duration: e.duration,
   easing: e.easing,
   complete: i
  })
 });
 var f;
 t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function (e, i) {
  t(this).transfer(e, i)
 })), t.ui.focusable = function (i, s) {
  var n,
   o,
   a,
   r,
   h,
   l = i.nodeName.toLowerCase();
  return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
 }, t.extend(t.expr[":"], {
  focusable: function (e) {
   return t.ui.focusable(e, null != t.attr(e, "tabindex"))
  }
 }), t.ui.focusable, t.fn.form = function () {
  return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
 }, t.ui.formResetMixin = {
  _formResetHandler: function () {
   var e = t(this);
   setTimeout(function () {
    var i = e.data("ui-form-reset-instances");
    t.each(i, function () {
     this.refresh()
    })
   })
  },
  _bindFormResetHandler: function () {
   if (this.form = this.element.form(), this.form.length) {
    var t = this.form.data("ui-form-reset-instances") || [];
    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
   }
  },
  _unbindFormResetHandler: function () {
   if (this.form.length) {
    var e = this.form.data("ui-form-reset-instances");
    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
   }
  }
 }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
  function s(e, i, s, o) {
   return t.each(n, function () {
    i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
   }), i
  }
  var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
   o = i.toLowerCase(),
   a = {
    innerWidth: t.fn.innerWidth,
    innerHeight: t.fn.innerHeight,
    outerWidth: t.fn.outerWidth,
    outerHeight: t.fn.outerHeight
   };
  t.fn["inner" + i] = function (e) {
   return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
    t(this).css(o, s(this, e) + "px")
   })
  }, t.fn["outer" + i] = function (e, n) {
   return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
    t(this).css(o, s(this, e, !0, n) + "px")
   })
  }
 }), t.fn.addBack = function (t) {
  return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
 }), t.ui.keyCode = {
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
 }, t.ui.escapeSelector = function () {
  var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
  return function (e) {
   return e.replace(t, "\\$1")
  }
 }(), t.fn.labels = function () {
  var e,
   i,
   s,
   n,
   o;
  return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
 }, t.fn.scrollParent = function (e) {
  var i = this.css("position"),
   s = "absolute" === i,
   n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
   o = this.parents().filter(function () {
    var e = t(this);
    return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
   }).eq(0);
  return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
 }, t.extend(t.expr[":"], {
  tabbable: function (e) {
   var i = t.attr(e, "tabindex"),
    s = null != i;
   return (!s || i >= 0) && t.ui.focusable(e, s)
  }
 }), t.fn.extend({
  uniqueId: function () {
   var t = 0;
   return function () {
    return this.each(function () {
     this.id || (this.id = "ui-id-" + ++t)
    })
   }
  }(),
  removeUniqueId: function () {
   return this.each(function () {
    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
   })
  }
 }), t.widget("ui.accordion", {
  version: "1.12.1",
  options: {
   active: 0,
   animate: {},
   classes: {
    "ui-accordion-header": "ui-corner-top",
    "ui-accordion-header-collapsed": "ui-corner-all",
    "ui-accordion-content": "ui-corner-bottom"
   },
   collapsible: !1,
   event: "click",
   header: "> li > :first-child, > :not(li):even",
   heightStyle: "auto",
   icons: {
    activeHeader: "ui-icon-triangle-1-s",
    header: "ui-icon-triangle-1-e"
   },
   activate: null,
   beforeActivate: null
  },
  hideProps: {
   borderTopWidth: "hide",
   borderBottomWidth: "hide",
   paddingTop: "hide",
   paddingBottom: "hide",
   height: "hide"
  },
  showProps: {
   borderTopWidth: "show",
   borderBottomWidth: "show",
   paddingTop: "show",
   paddingBottom: "show",
   height: "show"
  },
  _create: function () {
   var e = this.options;
   this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
  },
  _getCreateEventData: function () {
   return {
    header: this.active,
    panel: this.active.length ? this.active.next() : t()
   }
  },
  _createIcons: function () {
   var e,
    i,
    s = this.options.icons;
   s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
  },
  _destroyIcons: function () {
   this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
  },
  _destroy: function () {
   var t;
   this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
  },
  _setOption: function (t, e) {
   return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
  },
  _setOptionDisabled: function (t) {
   this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
  },
  _keydown: function (e) {
   if (!e.altKey && !e.ctrlKey) {
    var i = t.ui.keyCode,
     s = this.headers.length,
     n = this.headers.index(e.target),
     o = !1;
    switch (e.keyCode) {
     case i.RIGHT:
     case i.DOWN:
      o = this.headers[(n + 1) % s];
      break;
     case i.LEFT:
     case i.UP:
      o = this.headers[(n - 1 + s) % s];
      break;
     case i.SPACE:
     case i.ENTER:
      this._eventHandler(e);
      break;
     case i.HOME:
      o = this.headers[0];
      break;
     case i.END:
      o = this.headers[s - 1]
    }
    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
   }
  },
  _panelKeyDown: function (e) {
   e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
  },
  refresh: function () {
   var e = this.options;
   this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
  },
  _processPanels: function () {
   var t = this.headers,
    e = this.panels;
   this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
  },
  _refresh: function () {
   var e,
    i = this.options,
    s = i.heightStyle,
    n = this.element.parent();
   this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
    var e = t(this),
     i = e.uniqueId().attr("id"),
     s = e.next(),
     n = s.uniqueId().attr("id");
    e.attr("aria-controls", n), s.attr("aria-labelledby", i)
   }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
    "aria-selected": "false",
    "aria-expanded": "false",
    tabIndex: -1
   }).next().attr({
    "aria-hidden": "true"
   }).hide(), this.active.length ? this.active.attr({
    "aria-selected": "true",
    "aria-expanded": "true",
    tabIndex: 0
   }).next().attr({
    "aria-hidden": "false"
   }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
    var i = t(this),
     s = i.css("position");
    "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
   }), this.headers.each(function () {
    e -= t(this).outerHeight(!0)
   }), this.headers.next().each(function () {
    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
   }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
    var i = t(this).is(":visible");
    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
   }).height(e))
  },
  _activate: function (e) {
   var i = this._findActive(e)[0];
   i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
    target: i,
    currentTarget: i,
    preventDefault: t.noop
   }))
  },
  _findActive: function (e) {
   return "number" == typeof e ? this.headers.eq(e) : t()
  },
  _setupEvents: function (e) {
   var i = {
    keydown: "_keydown"
   };
   e && t.each(e.split(" "), function (t, e) {
    i[e] = "_eventHandler"
   }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
    keydown: "_panelKeyDown"
   }), this._hoverable(this.headers), this._focusable(this.headers)
  },
  _eventHandler: function (e) {
   var i,
    s,
    n = this.options,
    o = this.active,
    a = t(e.currentTarget),
    r = a[0] === o[0],
    h = r && n.collapsible,
    l = h ? t() : a.next(),
    c = o.next(),
    u = {
     oldHeader: o,
     oldPanel: c,
     newHeader: h ? t() : a,
     newPanel: l
    };
   e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
  },
  _toggle: function (e) {
   var i = e.newPanel,
    s = this.prevShow.length ? this.prevShow : e.oldPanel;
   this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
    "aria-hidden": "true"
   }), s.prev().attr({
    "aria-selected": "false",
    "aria-expanded": "false"
   }), i.length && s.length ? s.prev().attr({
    tabIndex: -1,
    "aria-expanded": "false"
   }) : i.length && this.headers.filter(function () {
    return 0 === parseInt(t(this).attr("tabIndex"), 10)
   }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
    "aria-selected": "true",
    "aria-expanded": "true",
    tabIndex: 0
   })
  },
  _animate: function (t, e, i) {
   var s,
    n,
    o,
    a = this,
    r = 0,
    h = t.css("box-sizing"),
    l = t.length && (!e.length || t.index() < e.index()),
    c = this.options.animate || {},
    u = l && c.down || c,
    d = function () {
     a._toggleComplete(i)
    };
   return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
    duration: o,
    easing: n,
    step: function (t, e) {
     e.now = Math.round(t)
    }
   }), t.hide().animate(this.showProps, {
    duration: o,
    easing: n,
    complete: d,
    step: function (t, i) {
     i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
    }
   }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
  },
  _toggleComplete: function (t) {
   var e = t.oldPanel,
    i = e.prev();
   this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
  }
 }), t.ui.safeActiveElement = function (t) {
  var e;
  try {
   e = t.activeElement
  } catch (i) {
   e = t.body
  }
  return e || (e = t.body), e.nodeName || (e = t.body), e
 }, t.widget("ui.menu", {
  version: "1.12.1",
  defaultElement: "<ul>",
  delay: 300,
  options: {
   icons: {
    submenu: "ui-icon-caret-1-e"
   },
   items: "> *",
   menus: "ul",
   position: {
    my: "left top",
    at: "right top"
   },
   role: "menu",
   blur: null,
   focus: null,
   select: null
  },
  _create: function () {
   this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
    role: this.options.role,
    tabIndex: 0
   }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
    "mousedown .ui-menu-item": function (t) {
     t.preventDefault()
    },
    "click .ui-menu-item": function (e) {
     var i = t(e.target),
      s = t(t.ui.safeActiveElement(this.document[0]));
     !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
    },
    "mouseenter .ui-menu-item": function (e) {
     if (!this.previousFilter) {
      var i = t(e.target).closest(".ui-menu-item"),
       s = t(e.currentTarget);
      i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
     }
    },
    mouseleave: "collapseAll",
    "mouseleave .ui-menu": "collapseAll",
    focus: function (t, e) {
     var i = this.active || this.element.find(this.options.items).eq(0);
     e || this.focus(t, i)
    },
    blur: function (e) {
     this._delay(function () {
      var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
      i && this.collapseAll(e)
     })
    },
    keydown: "_keydown"
   }), this.refresh(), this._on(this.document, {
    click: function (t) {
     this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
    }
   })
  },
  _destroy: function () {
   var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
   this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
    var e = t(this);
    e.data("ui-menu-submenu-caret") && e.remove()
   })
  },
  _keydown: function (e) {
   var i,
    s,
    n,
    o,
    a = !0;
   switch (e.keyCode) {
    case t.ui.keyCode.PAGE_UP:
     this.previousPage(e);
     break;
    case t.ui.keyCode.PAGE_DOWN:
     this.nextPage(e);
     break;
    case t.ui.keyCode.HOME:
     this._move("first", "first", e);
     break;
    case t.ui.keyCode.END:
     this._move("last", "last", e);
     break;
    case t.ui.keyCode.UP:
     this.previous(e);
     break;
    case t.ui.keyCode.DOWN:
     this.next(e);
     break;
    case t.ui.keyCode.LEFT:
     this.collapse(e);
     break;
    case t.ui.keyCode.RIGHT:
     this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
     break;
    case t.ui.keyCode.ENTER:
    case t.ui.keyCode.SPACE:
     this._activate(e);
     break;
    case t.ui.keyCode.ESCAPE:
     this.collapse(e);
     break;
    default:
     a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
      delete this.previousFilter
     }, 1e3)) : delete this.previousFilter
   }
   a && e.preventDefault()
  },
  _activate: function (t) {
   this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
  },
  refresh: function () {
   var e,
    i,
    s,
    n,
    o,
    a = this,
    r = this.options.icons.submenu,
    h = this.element.find(this.options.menus);
   this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
    role: this.options.role,
    "aria-hidden": "true",
    "aria-expanded": "false"
   }).each(function () {
    var e = t(this),
     i = e.prev(),
     s = t("<span>").data("ui-menu-submenu-caret", !0);
    a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
   }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
    var e = t(this);
    a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
   }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
    tabIndex: -1,
    role: this._itemRole()
   }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
  },
  _itemRole: function () {
   return {
    menu: "menuitem",
    listbox: "option"
   } [this.options.role]
  },
  _setOption: function (t, e) {
   if ("icons" === t) {
    var i = this.element.find(".ui-menu-icon");
    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
   }
   this._super(t, e)
  },
  _setOptionDisabled: function (t) {
   this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  focus: function (t, e) {
   var i,
    s,
    n;
   this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
    this._close()
   }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
    item: e
   })
  },
  _scrollIntoView: function (e) {
   var i,
    s,
    n,
    o,
    a,
    r;
   this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
  },
  blur: function (t, e) {
   e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
    item: this.active
   }), this.active = null)
  },
  _startOpening: function (t) {
   clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
    this._close(), this._open(t)
   }, this.delay))
  },
  _open: function (e) {
   var i = t.extend({
    of: this.active
   }, this.options.position);
   clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
  },
  collapseAll: function (e, i) {
   clearTimeout(this.timer), this.timer = this._delay(function () {
    var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
    s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
   }, this.delay)
  },
  _close: function (t) {
   t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
  },
  _closeOnDocumentClick: function (e) {
   return !t(e.target).closest(".ui-menu").length
  },
  _isDivider: function (t) {
   return !/[^\-\u2014\u2013\s]/.test(t.text())
  },
  collapse: function (t) {
   var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
   e && e.length && (this._close(), this.focus(t, e))
  },
  expand: function (t) {
   var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
   e && e.length && (this._open(e.parent()), this._delay(function () {
    this.focus(t, e)
   }))
  },
  next: function (t) {
   this._move("next", "first", t)
  },
  previous: function (t) {
   this._move("prev", "last", t)
  },
  isFirstItem: function () {
   return this.active && !this.active.prevAll(".ui-menu-item").length
  },
  isLastItem: function () {
   return this.active && !this.active.nextAll(".ui-menu-item").length
  },
  _move: function (t, e, i) {
   var s;
   this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
  },
  nextPage: function (e) {
   var i,
    s,
    n;
   return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
    return i = t(this), 0 > i.offset().top - s - n
   }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
  },
  previousPage: function (e) {
   var i,
    s,
    n;
   return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
    return i = t(this), i.offset().top - s + n > 0
   }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
  },
  _hasScroll: function () {
   return this.element.outerHeight() < this.element.prop("scrollHeight")
  },
  select: function (e) {
   this.active = this.active || t(e.target).closest(".ui-menu-item");
   var i = {
    item: this.active
   };
   this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
  },
  _filterMenuItems: function (e) {
   var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
    s = RegExp("^" + i, "i");
   return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
    return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
   })
  }
 }), t.widget("ui.autocomplete", {
  version: "1.12.1",
  defaultElement: "<input>",
  options: {
   appendTo: null,
   autoFocus: !1,
   delay: 300,
   minLength: 1,
   position: {
    my: "left top",
    at: "left bottom",
    collision: "none"
   },
   source: null,
   change: null,
   close: null,
   focus: null,
   open: null,
   response: null,
   search: null,
   select: null
  },
  requestIndex: 0,
  pending: 0,
  _create: function () {
   var e,
    i,
    s,
    n = this.element[0].nodeName.toLowerCase(),
    o = "textarea" === n,
    a = "input" === n;
   this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
    keydown: function (n) {
     if (this.element.prop("readOnly"))
      return e = !0, s = !0, i = !0, void 0;
     e = !1, s = !1, i = !1;
     var o = t.ui.keyCode;
     switch (n.keyCode) {
      case o.PAGE_UP:
       e = !0, this._move("previousPage", n);
       break;
      case o.PAGE_DOWN:
       e = !0, this._move("nextPage", n);
       break;
      case o.UP:
       e = !0, this._keyEvent("previous", n);
       break;
      case o.DOWN:
       e = !0, this._keyEvent("next", n);
       break;
      case o.ENTER:
       this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
       break;
      case o.TAB:
       this.menu.active && this.menu.select(n);
       break;
      case o.ESCAPE:
       this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
       break;
      default:
       i = !0, this._searchTimeout(n)
     }
    },
    keypress: function (s) {
     if (e)
      return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
     if (!i) {
      var n = t.ui.keyCode;
      switch (s.keyCode) {
       case n.PAGE_UP:
        this._move("previousPage", s);
        break;
       case n.PAGE_DOWN:
        this._move("nextPage", s);
        break;
       case n.UP:
        this._keyEvent("previous", s);
        break;
       case n.DOWN:
        this._keyEvent("next", s)
      }
     }
    },
    input: function (t) {
     return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
    },
    focus: function () {
     this.selectedItem = null, this.previous = this._value()
    },
    blur: function (t) {
     return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
    }
   }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
    role: null
   }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
    mousedown: function (e) {
     e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
      delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
     })
    },
    menufocus: function (e, i) {
     var s,
      n;
     return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
      t(e.target).trigger(e.originalEvent)
     }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
      item: n
     }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
    },
    menuselect: function (e, i) {
     var s = i.item.data("ui-autocomplete-item"),
      n = this.previous;
     this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
      this.previous = n, this.selectedItem = s
     })), !1 !== this._trigger("select", e, {
      item: s
     }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
    }
   }), this.liveRegion = t("<div>", {
    role: "status",
    "aria-live": "assertive",
    "aria-relevant": "additions"
   }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
    beforeunload: function () {
     this.element.removeAttr("autocomplete")
    }
   })
  },
  _destroy: function () {
   clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
  },
  _setOption: function (t, e) {
   this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
  },
  _isEventTargetInWidget: function (e) {
   var i = this.menu.element[0];
   return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
  },
  _closeOnClickOutside: function (t) {
   this._isEventTargetInWidget(t) || this.close()
  },
  _appendTo: function () {
   var e = this.options.appendTo;
   return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
  },
  _initSource: function () {
   var e,
    i,
    s = this;
   t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
    s(t.ui.autocomplete.filter(e, i.term))
   }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
    s.xhr && s.xhr.abort(), s.xhr = t.ajax({
     url: i,
     data: e,
     dataType: "json",
     success: function (t) {
      n(t)
     },
     error: function () {
      n([])
     }
    })
   }) : this.source = this.options.source
  },
  _searchTimeout: function (t) {
   clearTimeout(this.searching), this.searching = this._delay(function () {
    var e = this.term === this._value(),
     i = this.menu.element.is(":visible"),
     s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
    (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
   }, this.options.delay)
  },
  search: function (t, e) {
   return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
  },
  _search: function (t) {
   this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
    term: t
   }, this._response())
  },
  _response: function () {
   var e = ++this.requestIndex;
   return t.proxy(function (t) {
    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
   }, this)
  },
  __response: function (t) {
   t && (t = this._normalize(t)), this._trigger("response", null, {
    content: t
   }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
  },
  close: function (t) {
   this.cancelSearch = !0, this._close(t)
  },
  _close: function (t) {
   this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
  },
  _change: function (t) {
   this.previous !== this._value() && this._trigger("change", t, {
    item: this.selectedItem
   })
  },
  _normalize: function (e) {
   return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
    return "string" == typeof e ? {
     label: e,
     value: e
    } : t.extend({}, e, {
     label: e.label || e.value,
     value: e.value || e.label
    })
   })
  },
  _suggest: function (e) {
   var i = this.menu.element.empty();
   this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
    of: this.element
   }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
    mousedown: "_closeOnClickOutside"
   })
  },
  _resizeMenu: function () {
   var t = this.menu.element;
   t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
  },
  _renderMenu: function (e, i) {
   var s = this;
   t.each(i, function (t, i) {
    s._renderItemData(e, i)
   })
  },
  _renderItemData: function (t, e) {
   return this._renderItem(t, e).data("ui-autocomplete-item", e)
  },
  _renderItem: function (e, i) {
   return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
  },
  _move: function (t, e) {
   return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
  },
  widget: function () {
   return this.menu.element
  },
  _value: function () {
   return this.valueMethod.apply(this.element, arguments)
  },
  _keyEvent: function (t, e) {
   (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
  },
  _isContentEditable: function (t) {
   if (!t.length)
    return !1;
   var e = t.prop("contentEditable");
   return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
  }
 }), t.extend(t.ui.autocomplete, {
  escapeRegex: function (t) {
   return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
  },
  filter: function (e, i) {
   var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
   return t.grep(e, function (t) {
    return s.test(t.label || t.value || t)
   })
  }
 }), t.widget("ui.autocomplete", t.ui.autocomplete, {
  options: {
   messages: {
    noResults: "No search results.",
    results: function (t) {
     return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }
   }
  },
  __response: function (e) {
   var i;
   this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
  }
 }), t.ui.autocomplete;
 var g = /ui-corner-([a-z]){2,6}/g;
 t.widget("ui.controlgroup", {
  version: "1.12.1",
  defaultElement: "<div>",
  options: {
   direction: "horizontal",
   disabled: null,
   onlyVisible: !0,
   items: {
    button: "input[type=button], input[type=submit], input[type=reset], button, a",
    controlgroupLabel: ".ui-controlgroup-label",
    checkboxradio: "input[type='checkbox'], input[type='radio']",
    selectmenu: "select",
    spinner: ".ui-spinner-input"
   }
  },
  _create: function () {
   this._enhance()
  },
  _enhance: function () {
   this.element.attr("role", "toolbar"), this.refresh()
  },
  _destroy: function () {
   this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
  },
  _initWidgets: function () {
   var e = this,
    i = [];
   t.each(this.options.items, function (s, n) {
    var o,
     a = {};
    return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
     var e = t(this);
     e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
     classes: {}
    }, e.element.find(n).each(function () {
     var n = t(this),
      o = n[s]("instance"),
      r = t.widget.extend({}, a);
     if ("button" !== s || !n.parent(".ui-spinner").length) {
      o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
      var h = n[s]("widget");
      t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
     }
    })), void 0) : void 0
   }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
  },
  _callChildMethod: function (e) {
   this.childWidgets.each(function () {
    var i = t(this),
     s = i.data("ui-controlgroup-data");
    s && s[e] && s[e]()
   })
  },
  _updateCornerClass: function (t, e) {
   var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
    s = this._buildSimpleOptions(e, "label").classes.label;
   this._removeClass(t, null, i), this._addClass(t, null, s)
  },
  _buildSimpleOptions: function (t, e) {
   var i = "vertical" === this.options.direction,
    s = {
     classes: {}
    };
   return s.classes[e] = {
    middle: "",
    first: "ui-corner-" + (i ? "top" : "left"),
    last: "ui-corner-" + (i ? "bottom" : "right"),
    only: "ui-corner-all"
   } [t], s
  },
  _spinnerOptions: function (t) {
   var e = this._buildSimpleOptions(t, "ui-spinner");
   return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
  },
  _buttonOptions: function (t) {
   return this._buildSimpleOptions(t, "ui-button")
  },
  _checkboxradioOptions: function (t) {
   return this._buildSimpleOptions(t, "ui-checkboxradio-label")
  },
  _selectmenuOptions: function (t) {
   var e = "vertical" === this.options.direction;
   return {
    width: e ? "auto" : !1,
    classes: {
     middle: {
      "ui-selectmenu-button-open": "",
      "ui-selectmenu-button-closed": ""
     },
     first: {
      "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
      "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
     },
     last: {
      "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
      "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
     },
     only: {
      "ui-selectmenu-button-open": "ui-corner-top",
      "ui-selectmenu-button-closed": "ui-corner-all"
     }
    } [t]
   }
  },
  _resolveClassesValues: function (e, i) {
   var s = {};
   return t.each(e, function (n) {
    var o = i.options.classes[n] || "";
    o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
   }), s
  },
  _setOption: function (t, e) {
   return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
  },
  refresh: function () {
   var e,
    i = this;
   this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
    var n = e[s]().data("ui-controlgroup-data");
    if (n && i["_" + n.widgetName + "Options"]) {
     var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
     o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
    } else
     i._updateCornerClass(e[s](), s)
   }), this._callChildMethod("refresh"))
  }
 }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
  version: "1.12.1",
  options: {
   disabled: null,
   label: null,
   icon: !0,
   classes: {
    "ui-checkboxradio-label": "ui-corner-all",
    "ui-checkboxradio-icon": "ui-corner-all"
   }
  },
  _getCreateOptions: function () {
   var e,
    i,
    s = this,
    n = this._super() || {};
   return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
    s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
   }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
  },
  _create: function () {
   var t = this.element[0].checked;
   this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
    change: "_toggleClasses",
    focus: function () {
     this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
    },
    blur: function () {
     this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
    }
   })
  },
  _readType: function () {
   var e = this.element[0].nodeName.toLowerCase();
   this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
  },
  _enhance: function () {
   this._updateIcon(this.element[0].checked)
  },
  widget: function () {
   return this.label
  },
  _getRadioGroup: function () {
   var e,
    i = this.element[0].name,
    s = "input[name='" + t.ui.escapeSelector(i) + "']";
   return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
    return 0 === t(this).form().length
   }), e.not(this.element)) : t([])
  },
  _toggleClasses: function () {
   var e = this.element[0].checked;
   this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
    var e = t(this).checkboxradio("instance");
    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
   })
  },
  _destroy: function () {
   this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
  },
  _setOption: function (t, e) {
   return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
  },
  _updateIcon: function (e) {
   var i = "ui-icon ui-icon-background ";
   this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
  },
  _updateLabel: function () {
   var t = this.label.contents().not(this.element[0]);
   this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
  },
  refresh: function () {
   var t = this.element[0].checked,
    e = this.element[0].disabled;
   this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
    disabled: e
   })
  }
 }]), t.ui.checkboxradio, t.widget("ui.button", {
  version: "1.12.1",
  defaultElement: "<button>",
  options: {
   classes: {
    "ui-button": "ui-corner-all"
   },
   disabled: null,
   icon: null,
   iconPosition: "beginning",
   label: null,
   showLabel: !0
  },
  _getCreateOptions: function () {
   var t,
    e = this._super() || {};
   return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
  },
  _create: function () {
   !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
    keyup: function (e) {
     e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
    }
   })
  },
  _enhance: function () {
   this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
  },
  _updateTooltip: function () {
   this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
  },
  _updateIcon: function (e, i) {
   var s = "iconPosition" !== e,
    n = s ? this.options.iconPosition : i,
    o = "top" === n || "bottom" === n;
   this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
  },
  _destroy: function () {
   this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
  },
  _attachIconSpace: function (t) {
   this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
  },
  _attachIcon: function (t) {
   this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
  },
  _setOptions: function (t) {
   var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
    i = void 0 === t.icon ? this.options.icon : t.icon;
   e || i || (t.showLabel = !0), this._super(t)
  },
  _setOption: function (t, e) {
   "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
  },
  refresh: function () {
   var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
   t !== this.options.disabled && this._setOptions({
    disabled: t
   }), this._updateTooltip()
  }
 }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
  options: {
   text: !0,
   icons: {
    primary: null,
    secondary: null
   }
  },
  _create: function () {
   this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
  },
  _setOption: function (t, e) {
   return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
  }
 }), t.fn.button = function (e) {
  return function () {
   return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
    icon: !1
   }) : this.checkboxradio.apply(this, arguments))
  }
 }(t.fn.button), t.fn.buttonset = function () {
  return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
   button: arguments[0].items
  }), this.controlgroup.apply(this, arguments))
 }), t.ui.button, t.extend(t.ui, {
  datepicker: {
   version: "1.12.1"
  }
 });
 var m;
 t.extend(s.prototype, {
  markerClassName: "hasDatepicker",
  maxRows: 4,
  _widgetDatepicker: function () {
   return this.dpDiv
  },
  setDefaults: function (t) {
   return a(this._defaults, t || {}), this
  },
  _attachDatepicker: function (e, i) {
   var s,
    n,
    o;
   s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
  },
  _newInst: function (e, i) {
   var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
   return {
    id: s,
    input: e,
    selectedDay: 0,
    selectedMonth: 0,
    selectedYear: 0,
    drawMonth: 0,
    drawYear: 0,
    inline: i,
    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
   }
  },
  _connectDatepicker: function (e, i) {
   var s = t(e);
   i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
  },
  _attachments: function (e, i) {
   var s,
    n,
    o,
    a = this._get(i, "appendText"),
    r = this._get(i, "isRTL");
   i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
    src: o,
    alt: n,
    title: n
   }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
    src: o,
    alt: n,
    title: n
   }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
   }))
  },
  _autoSize: function (t) {
   if (this._get(t, "autoSize") && !t.inline) {
    var e,
     i,
     s,
     n,
     o = new Date(2009, 11, 20),
     a = this._get(t, "dateFormat");
    a.match(/[DM]/) && (e = function (t) {
     for (i = 0, s = 0, n = 0; t.length > n; n++)
      t[n].length > i && (i = t[n].length, s = n);
     return s
    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
   }
  },
  _inlineDatepicker: function (e, i) {
   var s = t(e);
   s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
  },
  _dialogDatepicker: function (e, i, s, n, o) {
   var r,
    h,
    l,
    c,
    u,
    d = this._dialogInst;
   return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
  },
  _destroyDatepicker: function (e) {
   var i,
    s = t(e),
    n = t.data(e, "datepicker");
   s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
  },
  _enableDatepicker: function (e) {
   var i,
    s,
    n = t(e),
    o = t.data(e, "datepicker");
   n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
    this.disabled = !1
   }).end().filter("img").css({
    opacity: "1.0",
    cursor: ""
   })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
    return t === e ? null : t
   }))
  },
  _disableDatepicker: function (e) {
   var i,
    s,
    n = t(e),
    o = t.data(e, "datepicker");
   n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
    this.disabled = !0
   }).end().filter("img").css({
    opacity: "0.5",
    cursor: "default"
   })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
    return t === e ? null : t
   }), this._disabledInputs[this._disabledInputs.length] = e)
  },
  _isDisabledDatepicker: function (t) {
   if (!t)
    return !1;
   for (var e = 0; this._disabledInputs.length > e; e++)
    if (this._disabledInputs[e] === t)
     return !0;
   return !1
  },
  _getInst: function (e) {
   try {
    return t.data(e, "datepicker")
   } catch (i) {
    throw "Missing instance data for this datepicker"
   }
  },
  _optionDatepicker: function (e, i, s) {
   var n,
    o,
    r,
    h,
    l = this._getInst(e);
   return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
  },
  _changeDatepicker: function (t, e, i) {
   this._optionDatepicker(t, e, i)
  },
  _refreshDatepicker: function (t) {
   var e = this._getInst(t);
   e && this._updateDatepicker(e)
  },
  _setDateDatepicker: function (t, e) {
   var i = this._getInst(t);
   i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
  },
  _getDateDatepicker: function (t, e) {
   var i = this._getInst(t);
   return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
  },
  _doKeyDown: function (e) {
   var i,
    s,
    n,
    o = t.datepicker._getInst(e.target),
    a = !0,
    r = o.dpDiv.is(".ui-datepicker-rtl");
   if (o._keyEvent = !0, t.datepicker._datepickerShowing)
    switch (e.keyCode) {
     case 9:
      t.datepicker._hideDatepicker(), a = !1;
      break;
     case 13:
      return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
     case 27:
      t.datepicker._hideDatepicker();
      break;
     case 33:
      t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
      break;
     case 34:
      t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
      break;
     case 35:
      (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
      break;
     case 36:
      (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
      break;
     case 37:
      (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
      break;
     case 38:
      (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
      break;
     case 39:
      (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
      break;
     case 40:
      (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
      break;
     default:
      a = !1
    }
   else
    36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
   a && (e.preventDefault(), e.stopPropagation())
  },
  _doKeyPress: function (e) {
   var i,
    s,
    n = t.datepicker._getInst(e.target);
   return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
  },
  _doKeyUp: function (e) {
   var i,
    s = t.datepicker._getInst(e.target);
   if (s.input.val() !== s.lastVal)
    try {
     i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
    } catch (n) {}
   return !0
  },
  _showDatepicker: function (e) {
   if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
    var s,
     n,
     o,
     r,
     h,
     l,
     c;
    s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
     return r |= "fixed" === t(this).css("position"), !r
    }), h = {
     left: t.datepicker._pos[0],
     top: t.datepicker._pos[1]
    }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
     position: "absolute",
     display: "block",
     top: "-1000px"
    }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
     position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
     display: "none",
     left: h.left + "px",
     top: h.top + "px"
    }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
   }
  },
  _updateDatepicker: function (e) {
   this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
   var i,
    s = this._getNumberOfMonths(e),
    n = s[1],
    a = 17,
    r = e.dpDiv.find("." + this._dayOverClass + " a");
   r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
   }, 0))
  },
  _shouldFocusInput: function (t) {
   return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
  },
  _checkOffset: function (e, i, s) {
   var n = e.dpDiv.outerWidth(),
    o = e.dpDiv.outerHeight(),
    a = e.input ? e.input.outerWidth() : 0,
    r = e.input ? e.input.outerHeight() : 0,
    h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
    l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
   return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
  },
  _findPos: function (e) {
   for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)
    e = e[n ? "previousSibling" : "nextSibling"];
   return i = t(e).offset(), [i.left, i.top]
  },
  _hideDatepicker: function (e) {
   var i,
    s,
    n,
    o,
    a = this._curInst;
   !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function () {
    t.datepicker._tidyDialog(a)
   }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
    position: "absolute",
    left: "0",
    top: "-100px"
   }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
  },
  _tidyDialog: function (t) {
   t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
  },
  _checkExternalClick: function (e) {
   if (t.datepicker._curInst) {
    var i = t(e.target),
     s = t.datepicker._getInst(i[0]);
    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
   }
  },
  _adjustDate: function (e, i, s) {
   var n = t(e),
    o = this._getInst(n[0]);
   this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
  },
  _gotoToday: function (e) {
   var i,
    s = t(e),
    n = this._getInst(s[0]);
   this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
  },
  _selectMonthYear: function (e, i, s) {
   var n = t(e),
    o = this._getInst(n[0]);
   o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
  },
  _selectDay: function (e, i, s, n) {
   var o,
    a = t(e);
   t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
  },
  _clearDate: function (e) {
   var i = t(e);
   this._selectDate(i, "")
  },
  _selectDate: function (e, i) {
   var s,
    n = t(e),
    o = this._getInst(n[0]);
   i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
  },
  _updateAlternate: function (e) {
   var i,
    s,
    n,
    o = this._get(e, "altField");
   o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
  },
  noWeekends: function (t) {
   var e = t.getDay();
   return [e > 0 && 6 > e, ""]
  },
  iso8601Week: function (t) {
   var e,
    i = new Date(t.getTime());
   return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
  },
  parseDate: function (e, i, s) {
   if (null == e || null == i)
    throw "Invalid arguments";
   if (i = "object" == typeof i ? "" + i : i + "", "" === i)
    return null;
   var n,
    o,
    a,
    r,
    h = 0,
    l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
    c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
    u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
    d = (s ? s.dayNames : null) || this._defaults.dayNames,
    p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
    f = (s ? s.monthNames : null) || this._defaults.monthNames,
    g = -1,
    m = -1,
    _ = -1,
    v = -1,
    b = !1,
    y = function (t) {
     var i = e.length > n + 1 && e.charAt(n + 1) === t;
     return i && n++, i
    },
    w = function (t) {
     var e = y(t),
      s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
      n = "y" === t ? s : 1,
      o = RegExp("^\\d{" + n + "," + s + "}"),
      a = i.substring(h).match(o);
     if (!a)
      throw "Missing number at position " + h;
     return h += a[0].length, parseInt(a[0], 10)
    },
    k = function (e, s, n) {
     var o = -1,
      a = t.map(y(e) ? n : s, function (t, e) {
       return [
        [e, t]
       ]
      }).sort(function (t, e) {
       return -(t[1].length - e[1].length)
      });
     if (t.each(a, function (t, e) {
       var s = e[1];
       return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
      }), -1 !== o)
      return o + 1;
     throw "Unknown name at position " + h
    },
    x = function () {
     if (i.charAt(h) !== e.charAt(n))
      throw "Unexpected literal at position " + h;
     h++
    };
   for (n = 0; e.length > n; n++)
    if (b)
     "'" !== e.charAt(n) || y("'") ? x() : b = !1;
    else
     switch (e.charAt(n)) {
      case "d":
       _ = w("d");
       break;
      case "D":
       k("D", u, d);
       break;
      case "o":
       v = w("o");
       break;
      case "m":
       m = w("m");
       break;
      case "M":
       m = k("M", p, f);
       break;
      case "y":
       g = w("y");
       break;
      case "@":
       r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
       break;
      case "!":
       r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
       break;
      case "'":
       y("'") ? x() : b = !0;
       break;
      default:
       x()
     }
   if (i.length > h && (a = i.substr(h), !/^\s+/.test(a)))
    throw "Extra/unparsed characters found in date: " + a;
   if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
    for (m = 1, _ = v;;) {
     if (o = this._getDaysInMonth(g, m - 1), o >= _)
      break;
     m++, _ -= o
    }
   if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
    throw "Invalid date";
   return r
  },
  ATOM: "yy-mm-dd",
  COOKIE: "D, dd M yy",
  ISO_8601: "yy-mm-dd",
  RFC_822: "D, d M y",
  RFC_850: "DD, dd-M-y",
  RFC_1036: "D, d M y",
  RFC_1123: "D, d M yy",
  RFC_2822: "D, d M yy",
  RSS: "D, d M y",
  TICKS: "!",
  TIMESTAMP: "@",
  W3C: "yy-mm-dd",
  _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
  formatDate: function (t, e, i) {
   if (!e)
    return "";
   var s,
    n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
    o = (i ? i.dayNames : null) || this._defaults.dayNames,
    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
    r = (i ? i.monthNames : null) || this._defaults.monthNames,
    h = function (e) {
     var i = t.length > s + 1 && t.charAt(s + 1) === e;
     return i && s++, i
    },
    l = function (t, e, i) {
     var s = "" + e;
     if (h(t))
      for (; i > s.length;)
       s = "0" + s;
     return s
    },
    c = function (t, e, i, s) {
     return h(t) ? s[e] : i[e]
    },
    u = "",
    d = !1;
   if (e)
    for (s = 0; t.length > s; s++)
     if (d)
      "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
     else
      switch (t.charAt(s)) {
       case "d":
        u += l("d", e.getDate(), 2);
        break;
       case "D":
        u += c("D", e.getDay(), n, o);
        break;
       case "o":
        u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
        break;
       case "m":
        u += l("m", e.getMonth() + 1, 2);
        break;
       case "M":
        u += c("M", e.getMonth(), a, r);
        break;
       case "y":
        u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
        break;
       case "@":
        u += e.getTime();
        break;
       case "!":
        u += 1e4 * e.getTime() + this._ticksTo1970;
        break;
       case "'":
        h("'") ? u += "'" : d = !0;
        break;
       default:
        u += t.charAt(s)
      }
   return u
  },
  _possibleChars: function (t) {
   var e,
    i = "",
    s = !1,
    n = function (i) {
     var s = t.length > e + 1 && t.charAt(e + 1) === i;
     return s && e++, s
    };
   for (e = 0; t.length > e; e++)
    if (s)
     "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
    else
     switch (t.charAt(e)) {
      case "d":
      case "m":
      case "y":
      case "@":
       i += "0123456789";
       break;
      case "D":
      case "M":
       return null;
      case "'":
       n("'") ? i += "'" : s = !0;
       break;
      default:
       i += t.charAt(e)
     }
   return i
  },
  _get: function (t, e) {
   return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
  },
  _setDateFromField: function (t, e) {
   if (t.input.val() !== t.lastVal) {
    var i = this._get(t, "dateFormat"),
     s = t.lastVal = t.input ? t.input.val() : null,
     n = this._getDefaultDate(t),
     o = n,
     a = this._getFormatConfig(t);
    try {
     o = this.parseDate(i, s, a) || n
    } catch (r) {
     s = e ? "" : s
    }
    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
   }
  },
  _getDefaultDate: function (t) {
   return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
  },
  _determineDate: function (e, i, s) {
   var n = function (t) {
     var e = new Date;
     return e.setDate(e.getDate() + t), e
    },
    o = function (i) {
     try {
      return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
     } catch (s) {}
     for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
      switch (l[2] || "d") {
       case "d":
       case "D":
        r += parseInt(l[1], 10);
        break;
       case "w":
       case "W":
        r += 7 * parseInt(l[1], 10);
        break;
       case "m":
       case "M":
        a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
        break;
       case "y":
       case "Y":
        o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
      }
      l = h.exec(i)
     }
     return new Date(o, a, r)
    },
    a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
   return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
  },
  _daylightSavingAdjust: function (t) {
   return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
  },
  _setDate: function (t, e, i) {
   var s = !e,
    n = t.selectedMonth,
    o = t.selectedYear,
    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
   t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
  },
  _getDate: function (t) {
   var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
   return e
  },
  _attachHandlers: function (e) {
   var i = this._get(e, "stepMonths"),
    s = "#" + e.id.replace(/\\\\/g, "\\");
   e.dpDiv.find("[data-handler]").map(function () {
    var e = {
     prev: function () {
      t.datepicker._adjustDate(s, -i, "M")
     },
     next: function () {
      t.datepicker._adjustDate(s, +i, "M")
     },
     hide: function () {
      t.datepicker._hideDatepicker()
     },
     today: function () {
      t.datepicker._gotoToday(s)
     },
     selectDay: function () {
      return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
     },
     selectMonth: function () {
      return t.datepicker._selectMonthYear(s, this, "M"), !1
     },
     selectYear: function () {
      return t.datepicker._selectMonthYear(s, this, "Y"), !1
     }
    };
    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
   })
  },
  _generateHTML: function (t) {
   var e,
    i,
    s,
    n,
    o,
    a,
    r,
    h,
    l,
    c,
    u,
    d,
    p,
    f,
    g,
    m,
    _,
    v,
    b,
    y,
    w,
    k,
    x,
    C,
    D,
    I,
    T,
    P,
    M,
    S,
    H,
    z,
    O,
    A,
    N,
    W,
    E,
    F,
    L,
    R = new Date,
    B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
    Y = this._get(t, "isRTL"),
    j = this._get(t, "showButtonPanel"),
    q = this._get(t, "hideIfNoPrevNext"),
    K = this._get(t, "navigationAsDateFormat"),
    U = this._getNumberOfMonths(t),
    V = this._get(t, "showCurrentAtPos"),
    $ = this._get(t, "stepMonths"),
    X = 1 !== U[0] || 1 !== U[1],
    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
    Q = this._getMinMaxDate(t, "min"),
    J = this._getMinMaxDate(t, "max"),
    Z = t.drawMonth - V,
    te = t.drawYear;
   if (0 > Z && (Z += 12, te--), J)
    for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;)
     Z--, 0 > Z && (Z = 11, te--);
   for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
    for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
     if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
      if (T += "<div class='ui-datepicker-group", U[1] > 1)
       switch (C) {
        case 0:
         T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
         break;
        case U[1] - 1:
         T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
         break;
        default:
         T += " ui-datepicker-group-middle", I = ""
       }
      T += "'>"
     }
     for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)
      M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
     for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
      for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++)
       E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
      T += W + "</tr>"
     }
     Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
    }
    y += x
   }
   return y += l, t._keyEvent = !1, y
  },
  _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
   var h,
    l,
    c,
    u,
    d,
    p,
    f,
    g,
    m = this._get(t, "changeMonth"),
    _ = this._get(t, "changeYear"),
    v = this._get(t, "showMonthAfterYear"),
    b = "<div class='ui-datepicker-title'>",
    y = "";
   if (o || !m)
    y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
   else {
    for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)
     (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
    y += "</select>"
   }
   if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
    if (t.yearshtml = "", o || !_)
     b += "<span class='ui-datepicker-year'>" + i + "</span>";
    else {
     for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
       var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
       return isNaN(e) ? d : e
      }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)
      t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
     t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
    }
   return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
  },
  _adjustInstDate: function (t, e, i) {
   var s = t.selectedYear + ("Y" === i ? e : 0),
    n = t.selectedMonth + ("M" === i ? e : 0),
    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
   t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
  },
  _restrictMinMax: function (t, e) {
   var i = this._getMinMaxDate(t, "min"),
    s = this._getMinMaxDate(t, "max"),
    n = i && i > e ? i : e;
   return s && n > s ? s : n
  },
  _notifyChange: function (t) {
   var e = this._get(t, "onChangeMonthYear");
   e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
  },
  _getNumberOfMonths: function (t) {
   var e = this._get(t, "numberOfMonths");
   return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
  },
  _getMinMaxDate: function (t, e) {
   return this._determineDate(t, this._get(t, e + "Date"), null)
  },
  _getDaysInMonth: function (t, e) {
   return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
  },
  _getFirstDayOfMonth: function (t, e) {
   return new Date(t, e, 1).getDay()
  },
  _canAdjustMonth: function (t, e, i, s) {
   var n = this._getNumberOfMonths(t),
    o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
   return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
  },
  _isInRange: function (t, e) {
   var i,
    s,
    n = this._getMinMaxDate(t, "min"),
    o = this._getMinMaxDate(t, "max"),
    a = null,
    r = null,
    h = this._get(t, "yearRange");
   return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
  },
  _getFormatConfig: function (t) {
   var e = this._get(t, "shortYearCutoff");
   return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
    shortYearCutoff: e,
    dayNamesShort: this._get(t, "dayNamesShort"),
    dayNames: this._get(t, "dayNames"),
    monthNamesShort: this._get(t, "monthNamesShort"),
    monthNames: this._get(t, "monthNames")
   }
  },
  _formatDate: function (t, e, i, s) {
   e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
   var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
   return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
  }
 }), t.fn.datepicker = function (e) {
  if (!this.length)
   return this;
  t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
  var i = Array.prototype.slice.call(arguments, 1);
  return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
   "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
  }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
 }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
 var _ = !1;
 t(document).on("mouseup", function () {
  _ = !1
 }), t.widget("ui.mouse", {
  version: "1.12.1",
  options: {
   cancel: "input, textarea, button, select, option",
   distance: 1,
   delay: 0
  },
  _mouseInit: function () {
   var e = this;
   this.element.on("mousedown." + this.widgetName, function (t) {
    return e._mouseDown(t)
   }).on("click." + this.widgetName, function (i) {
    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
   }), this.started = !1
  },
  _mouseDestroy: function () {
   this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
  },
  _mouseDown: function (e) {
   if (!_) {
    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
    var i = this,
     s = 1 === e.which,
     n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
    return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
     i.mouseDelayMet = !0
    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
     return i._mouseMove(t)
    }, this._mouseUpDelegate = function (t) {
     return i._mouseUp(t)
    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
   }
  },
  _mouseMove: function (e) {
   if (this._mouseMoved) {
    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
     return this._mouseUp(e);
    if (!e.which)
     if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
      this.ignoreMissingWhich = !0;
     else if (!this.ignoreMissingWhich)
     return this._mouseUp(e)
   }
   return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
  },
  _mouseUp: function (e) {
   this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
  },
  _mouseDistanceMet: function (t) {
   return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
  },
  _mouseDelayMet: function () {
   return this.mouseDelayMet
  },
  _mouseStart: function () {},
  _mouseDrag: function () {},
  _mouseStop: function () {},
  _mouseCapture: function () {
   return !0
  }
 }), t.ui.plugin = {
  add: function (e, i, s) {
   var n,
    o = t.ui[e].prototype;
   for (n in s)
    o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
  },
  call: function (t, e, i, s) {
   var n,
    o = t.plugins[e];
   if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
    for (n = 0; o.length > n; n++)
     t.options[o[n][0]] && o[n][1].apply(t.element, i)
  }
 }, t.ui.safeBlur = function (e) {
  e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
 }, t.widget("ui.draggable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "drag",
  options: {
   addClasses: !0,
   appendTo: "parent",
   axis: !1,
   connectToSortable: !1,
   containment: !1,
   cursor: "auto",
   cursorAt: !1,
   grid: !1,
   handle: !1,
   helper: "original",
   iframeFix: !1,
   opacity: !1,
   refreshPositions: !1,
   revert: !1,
   revertDuration: 500,
   scope: "default",
   scroll: !0,
   scrollSensitivity: 20,
   scrollSpeed: 20,
   snap: !1,
   snapMode: "both",
   snapTolerance: 20,
   stack: !1,
   zIndex: !1,
   drag: null,
   start: null,
   stop: null
  },
  _create: function () {
   "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
  },
  _setOption: function (t, e) {
   this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
  },
  _destroy: function () {
   return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
  },
  _mouseCapture: function (e) {
   var i = this.options;
   return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
  },
  _blockFrames: function (e) {
   this.iframeBlocks = this.document.find(e).map(function () {
    var e = t(this);
    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
   })
  },
  _unblockFrames: function () {
   this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
  },
  _blurActiveElement: function (e) {
   var i = t.ui.safeActiveElement(this.document[0]),
    s = t(e.target);
   s.closest(i).length || t.ui.safeBlur(i)
  },
  _mouseStart: function (e) {
   var i = this.options;
   return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
    return "fixed" === t(this).css("position")
   }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
  },
  _refreshOffsets: function (t) {
   this.offset = {
    top: this.positionAbs.top - this.margins.top,
    left: this.positionAbs.left - this.margins.left,
    scroll: !1,
    parent: this._getParentOffset(),
    relative: this._getRelativeOffset()
   }, this.offset.click = {
    left: t.pageX - this.offset.left,
    top: t.pageY - this.offset.top
   }
  },
  _mouseDrag: function (e, i) {
   if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
    var s = this._uiHash();
    if (this._trigger("drag", e, s) === !1)
     return this._mouseUp(new t.Event("mouseup", e)), !1;
    this.position = s.position
   }
   return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
  },
  _mouseStop: function (e) {
   var i = this,
    s = !1;
   return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
    i._trigger("stop", e) !== !1 && i._clear()
   }) : this._trigger("stop", e) !== !1 && this._clear(), !1
  },
  _mouseUp: function (e) {
   return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
  },
  cancel: function () {
   return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
    target: this.element[0]
   })) : this._clear(), this
  },
  _getHandle: function (e) {
   return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
  },
  _setHandleClassName: function () {
   this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
  },
  _removeHandleClassName: function () {
   this._removeClass(this.handleElement, "ui-draggable-handle")
  },
  _createHelper: function (e) {
   var i = this.options,
    s = t.isFunction(i.helper),
    n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
   return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
  },
  _setPositionRelative: function () {
   /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
  },
  _adjustOffsetFromHelper: function (e) {
   "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
    left: +e[0],
    top: +e[1] || 0
   }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
  },
  _isRootNode: function (t) {
   return /(html|body)/i.test(t.tagName) || t === this.document[0]
  },
  _getParentOffset: function () {
   var e = this.offsetParent.offset(),
    i = this.document[0];
   return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
    top: 0,
    left: 0
   }), {
    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
   }
  },
  _getRelativeOffset: function () {
   if ("relative" !== this.cssPosition)
    return {
     top: 0,
     left: 0
    };
   var t = this.element.position(),
    e = this._isRootNode(this.scrollParent[0]);
   return {
    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
   }
  },
  _cacheMargins: function () {
   this.margins = {
    left: parseInt(this.element.css("marginLeft"), 10) || 0,
    top: parseInt(this.element.css("marginTop"), 10) || 0,
    right: parseInt(this.element.css("marginRight"), 10) || 0,
    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
   }
  },
  _cacheHelperProportions: function () {
   this.helperProportions = {
    width: this.helper.outerWidth(),
    height: this.helper.outerHeight()
   }
  },
  _setContainment: function () {
   var e,
    i,
    s,
    n = this.options,
    o = this.document[0];
   return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
  },
  _convertPositionTo: function (t, e) {
   e || (e = this.position);
   var i = "absolute" === t ? 1 : -1,
    s = this._isRootNode(this.scrollParent[0]);
   return {
    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
   }
  },
  _generatePosition: function (t, e) {
   var i,
    s,
    n,
    o,
    a = this.options,
    r = this._isRootNode(this.scrollParent[0]),
    h = t.pageX,
    l = t.pageY;
   return r && this.offset.scroll || (this.offset.scroll = {
    top: this.scrollParent.scrollTop(),
    left: this.scrollParent.scrollLeft()
   }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
    top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
    left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
   }
  },
  _clear: function () {
   this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
  },
  _trigger: function (e, i, s) {
   return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
  },
  plugins: {},
  _uiHash: function () {
   return {
    helper: this.helper,
    position: this.position,
    originalPosition: this.originalPosition,
    offset: this.positionAbs
   }
  }
 }), t.ui.plugin.add("draggable", "connectToSortable", {
  start: function (e, i, s) {
   var n = t.extend({}, i, {
    item: s.element
   });
   s.sortables = [], t(s.options.connectToSortable).each(function () {
    var i = t(this).sortable("instance");
    i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
   })
  },
  stop: function (e, i, s) {
   var n = t.extend({}, i, {
    item: s.element
   });
   s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
    var t = this;
    t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
     position: t.placeholder.css("position"),
     top: t.placeholder.css("top"),
     left: t.placeholder.css("left")
    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
   })
  },
  drag: function (e, i, s) {
   t.each(s.sortables, function () {
    var n = !1,
     o = this;
    o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
     return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
    })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
     return i.helper[0]
    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
     this.refreshPositions()
    }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
     this.refreshPositions()
    }))
   })
  }
 }), t.ui.plugin.add("draggable", "cursor", {
  start: function (e, i, s) {
   var n = t("body"),
    o = s.options;
   n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
  },
  stop: function (e, i, s) {
   var n = s.options;
   n._cursor && t("body").css("cursor", n._cursor)
  }
 }), t.ui.plugin.add("draggable", "opacity", {
  start: function (e, i, s) {
   var n = t(i.helper),
    o = s.options;
   n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
  },
  stop: function (e, i, s) {
   var n = s.options;
   n._opacity && t(i.helper).css("opacity", n._opacity)
  }
 }), t.ui.plugin.add("draggable", "scroll", {
  start: function (t, e, i) {
   i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
  },
  drag: function (e, i, s) {
   var n = s.options,
    o = !1,
    a = s.scrollParentNotHidden[0],
    r = s.document[0];
   a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
  }
 }), t.ui.plugin.add("draggable", "snap", {
  start: function (e, i, s) {
   var n = s.options;
   s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
    var e = t(this),
     i = e.offset();
    this !== s.element[0] && s.snapElements.push({
     item: this,
     width: e.outerWidth(),
     height: e.outerHeight(),
     top: i.top,
     left: i.left
    })
   })
  },
  drag: function (e, i, s) {
   var n,
    o,
    a,
    r,
    h,
    l,
    c,
    u,
    d,
    p,
    f = s.options,
    g = f.snapTolerance,
    m = i.offset.left,
    _ = m + s.helperProportions.width,
    v = i.offset.top,
    b = v + s.helperProportions.height;
   for (d = s.snapElements.length - 1; d >= 0; d--)
    h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
     snapItem: s.snapElements[d].item
    })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
     top: c - s.helperProportions.height,
     left: 0
    }).top), o && (i.position.top = s._convertPositionTo("relative", {
     top: u,
     left: 0
    }).top), a && (i.position.left = s._convertPositionTo("relative", {
     top: 0,
     left: h - s.helperProportions.width
    }).left), r && (i.position.left = s._convertPositionTo("relative", {
     top: 0,
     left: l
    }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
     top: c,
     left: 0
    }).top), o && (i.position.top = s._convertPositionTo("relative", {
     top: u - s.helperProportions.height,
     left: 0
    }).top), a && (i.position.left = s._convertPositionTo("relative", {
     top: 0,
     left: h
    }).left), r && (i.position.left = s._convertPositionTo("relative", {
     top: 0,
     left: l - s.helperProportions.width
    }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
     snapItem: s.snapElements[d].item
    })), s.snapElements[d].snapping = n || o || a || r || p)
  }
 }), t.ui.plugin.add("draggable", "stack", {
  start: function (e, i, s) {
   var n,
    o = s.options,
    a = t.makeArray(t(o.stack)).sort(function (e, i) {
     return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
    });
   a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
    t(this).css("zIndex", n + e)
   }), this.css("zIndex", n + a.length))
  }
 }), t.ui.plugin.add("draggable", "zIndex", {
  start: function (e, i, s) {
   var n = t(i.helper),
    o = s.options;
   n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
  },
  stop: function (e, i, s) {
   var n = s.options;
   n._zIndex && t(i.helper).css("zIndex", n._zIndex)
  }
 }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "resize",
  options: {
   alsoResize: !1,
   animate: !1,
   animateDuration: "slow",
   animateEasing: "swing",
   aspectRatio: !1,
   autoHide: !1,
   classes: {
    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
   },
   containment: !1,
   ghost: !1,
   grid: !1,
   handles: "e,s,se",
   helper: !1,
   maxHeight: null,
   maxWidth: null,
   minHeight: 10,
   minWidth: 10,
   zIndex: 90,
   resize: null,
   start: null,
   stop: null
  },
  _num: function (t) {
   return parseFloat(t) || 0
  },
  _isNumber: function (t) {
   return !isNaN(parseFloat(t))
  },
  _hasScroll: function (e, i) {
   if ("hidden" === t(e).css("overflow"))
    return !1;
   var s = i && "left" === i ? "scrollLeft" : "scrollTop",
    n = !1;
   return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
  },
  _create: function () {
   var e,
    i = this.options,
    s = this;
   this._addClass("ui-resizable"), t.extend(this, {
    _aspectRatio: !!i.aspectRatio,
    aspectRatio: i.aspectRatio,
    originalElement: this.element,
    _proportionallyResizeElements: [],
    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
   }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
    position: this.element.css("position"),
    width: this.element.outerWidth(),
    height: this.element.outerHeight(),
    top: this.element.css("top"),
    left: this.element.css("left")
   })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
    marginTop: this.originalElement.css("marginTop"),
    marginRight: this.originalElement.css("marginRight"),
    marginBottom: this.originalElement.css("marginBottom"),
    marginLeft: this.originalElement.css("marginLeft")
   }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
    position: "static",
    zoom: 1,
    display: "block"
   })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
    i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
   }).on("mouseleave", function () {
    i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
   }), this._mouseInit()
  },
  _destroy: function () {
   this._mouseDestroy();
   var e,
    i = function (e) {
     t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
    };
   return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
    position: e.css("position"),
    width: e.outerWidth(),
    height: e.outerHeight(),
    top: e.css("top"),
    left: e.css("left")
   }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
  },
  _setOption: function (t, e) {
   switch (this._super(t, e), t) {
    case "handles":
     this._removeHandles(), this._setupHandles();
     break;
    default:
   }
  },
  _setupHandles: function () {
   var e,
    i,
    s,
    n,
    o,
    a = this.options,
    r = this;
   if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
     n: ".ui-resizable-n",
     e: ".ui-resizable-e",
     s: ".ui-resizable-s",
     w: ".ui-resizable-w",
     se: ".ui-resizable-se",
     sw: ".ui-resizable-sw",
     ne: ".ui-resizable-ne",
     nw: ".ui-resizable-nw"
    } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++)
     e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
      zIndex: a.zIndex
     }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
   this._renderAxis = function (e) {
    var i,
     s,
     n,
     o;
    e = e || this.element;
    for (i in this.handles)
     this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
      mousedown: r._mouseDown
     })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
   }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
   }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
  },
  _removeHandles: function () {
   this._handles.remove()
  },
  _mouseCapture: function (e) {
   var i,
    s,
    n = !1;
   for (i in this.handles)
    s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
   return !this.options.disabled && n
  },
  _mouseStart: function (e) {
   var i,
    s,
    n,
    o = this.options,
    a = this.element;
   return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
    left: i,
    top: s
   }, this.size = this._helper ? {
    width: this.helper.width(),
    height: this.helper.height()
   } : {
    width: a.width(),
    height: a.height()
   }, this.originalSize = this._helper ? {
    width: a.outerWidth(),
    height: a.outerHeight()
   } : {
    width: a.width(),
    height: a.height()
   }, this.sizeDiff = {
    width: a.outerWidth() - a.width(),
    height: a.outerHeight() - a.height()
   }, this.originalPosition = {
    left: i,
    top: s
   }, this.originalMousePosition = {
    left: e.pageX,
    top: e.pageY
   }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
  },
  _mouseDrag: function (e) {
   var i,
    s,
    n = this.originalMousePosition,
    o = this.axis,
    a = e.pageX - n.left || 0,
    r = e.pageY - n.top || 0,
    h = this._change[o];
   return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
  },
  _mouseStop: function (e) {
   this.resizing = !1;
   var i,
    s,
    n,
    o,
    a,
    r,
    h,
    l = this.options,
    c = this;
   return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
    width: c.helper.width() - o,
    height: c.helper.height() - n
   }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
    top: h,
    left: r
   })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
  },
  _updatePrevProperties: function () {
   this.prevPosition = {
    top: this.position.top,
    left: this.position.left
   }, this.prevSize = {
    width: this.size.width,
    height: this.size.height
   }
  },
  _applyChanges: function () {
   var t = {};
   return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
  },
  _updateVirtualBoundaries: function (t) {
   var e,
    i,
    s,
    n,
    o,
    a = this.options;
   o = {
    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
   }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
  },
  _updateCache: function (t) {
   this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
  },
  _updateRatio: function (t) {
   var e = this.position,
    i = this.size,
    s = this.axis;
   return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
  },
  _respectSize: function (t) {
   var e = this._vBoundaries,
    i = this.axis,
    s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
    n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
    r = this.originalPosition.left + this.originalSize.width,
    h = this.originalPosition.top + this.originalSize.height,
    l = /sw|nw|w/.test(i),
    c = /nw|ne|n/.test(i);
   return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
  },
  _getPaddingPlusBorderDimensions: function (t) {
   for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++)
    i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
   return {
    height: i[0] + i[2],
    width: i[1] + i[3]
   }
  },
  _proportionallyResize: function () {
   if (this._proportionallyResizeElements.length)
    for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
     t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
      height: i.height() - this.outerDimensions.height || 0,
      width: i.width() - this.outerDimensions.width || 0
     })
  },
  _renderProxy: function () {
   var e = this.element,
    i = this.options;
   this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
    width: this.element.outerWidth(),
    height: this.element.outerHeight(),
    position: "absolute",
    left: this.elementOffset.left + "px",
    top: this.elementOffset.top + "px",
    zIndex: ++i.zIndex
   }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
  },
  _change: {
   e: function (t, e) {
    return {
     width: this.originalSize.width + e
    }
   },
   w: function (t, e) {
    var i = this.originalSize,
     s = this.originalPosition;
    return {
     left: s.left + e,
     width: i.width - e
    }
   },
   n: function (t, e, i) {
    var s = this.originalSize,
     n = this.originalPosition;
    return {
     top: n.top + i,
     height: s.height - i
    }
   },
   s: function (t, e, i) {
    return {
     height: this.originalSize.height + i
    }
   },
   se: function (e, i, s) {
    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
   },
   sw: function (e, i, s) {
    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
   },
   ne: function (e, i, s) {
    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
   },
   nw: function (e, i, s) {
    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
   }
  },
  _propagate: function (e, i) {
   t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
  },
  plugins: {},
  ui: function () {
   return {
    originalElement: this.originalElement,
    element: this.element,
    helper: this.helper,
    position: this.position,
    size: this.size,
    originalSize: this.originalSize,
    originalPosition: this.originalPosition
   }
  }
 }), t.ui.plugin.add("resizable", "animate", {
  stop: function (e) {
   var i = t(this).resizable("instance"),
    s = i.options,
    n = i._proportionallyResizeElements,
    o = n.length && /textarea/i.test(n[0].nodeName),
    a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
    r = o ? 0 : i.sizeDiff.width,
    h = {
     width: i.size.width - r,
     height: i.size.height - a
    },
    l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
    c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
   i.element.animate(t.extend(h, c && l ? {
    top: c,
    left: l
   } : {}), {
    duration: s.animateDuration,
    easing: s.animateEasing,
    step: function () {
     var s = {
      width: parseFloat(i.element.css("width")),
      height: parseFloat(i.element.css("height")),
      top: parseFloat(i.element.css("top")),
      left: parseFloat(i.element.css("left"))
     };
     n && n.length && t(n[0]).css({
      width: s.width,
      height: s.height
     }), i._updateCache(s), i._propagate("resize", e)
    }
   })
  }
 }), t.ui.plugin.add("resizable", "containment", {
  start: function () {
   var e,
    i,
    s,
    n,
    o,
    a,
    r,
    h = t(this).resizable("instance"),
    l = h.options,
    c = h.element,
    u = l.containment,
    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
   d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
    left: 0,
    top: 0
   }, h.containerPosition = {
    left: 0,
    top: 0
   }, h.parentData = {
    element: t(document),
    left: 0,
    top: 0,
    width: t(document).width(),
    height: t(document).height() || document.body.parentNode.scrollHeight
   }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
    i[t] = h._num(e.css("padding" + s))
   }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
    height: e.innerHeight() - i[3],
    width: e.innerWidth() - i[1]
   }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
    element: d,
    left: s.left,
    top: s.top,
    width: a,
    height: r
   }))
  },
  resize: function (e) {
   var i,
    s,
    n,
    o,
    a = t(this).resizable("instance"),
    r = a.options,
    h = a.containerOffset,
    l = a.position,
    c = a._aspectRatio || e.shiftKey,
    u = {
     top: 0,
     left: 0
    },
    d = a.containerElement,
    p = !0;
   d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
  },
  stop: function () {
   var e = t(this).resizable("instance"),
    i = e.options,
    s = e.containerOffset,
    n = e.containerPosition,
    o = e.containerElement,
    a = t(e.helper),
    r = a.offset(),
    h = a.outerWidth() - e.sizeDiff.width,
    l = a.outerHeight() - e.sizeDiff.height;
   e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
    left: r.left - n.left - s.left,
    width: h,
    height: l
   }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
    left: r.left - n.left - s.left,
    width: h,
    height: l
   })
  }
 }), t.ui.plugin.add("resizable", "alsoResize", {
  start: function () {
   var e = t(this).resizable("instance"),
    i = e.options;
   t(i.alsoResize).each(function () {
    var e = t(this);
    e.data("ui-resizable-alsoresize", {
     width: parseFloat(e.width()),
     height: parseFloat(e.height()),
     left: parseFloat(e.css("left")),
     top: parseFloat(e.css("top"))
    })
   })
  },
  resize: function (e, i) {
   var s = t(this).resizable("instance"),
    n = s.options,
    o = s.originalSize,
    a = s.originalPosition,
    r = {
     height: s.size.height - o.height || 0,
     width: s.size.width - o.width || 0,
     top: s.position.top - a.top || 0,
     left: s.position.left - a.left || 0
    };
   t(n.alsoResize).each(function () {
    var e = t(this),
     s = t(this).data("ui-resizable-alsoresize"),
     n = {},
     o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
    t.each(o, function (t, e) {
     var i = (s[e] || 0) + (r[e] || 0);
     i && i >= 0 && (n[e] = i || null)
    }), e.css(n)
   })
  },
  stop: function () {
   t(this).removeData("ui-resizable-alsoresize")
  }
 }), t.ui.plugin.add("resizable", "ghost", {
  start: function () {
   var e = t(this).resizable("instance"),
    i = e.size;
   e.ghost = e.originalElement.clone(), e.ghost.css({
    opacity: .25,
    display: "block",
    position: "relative",
    height: i.height,
    width: i.width,
    margin: 0,
    left: 0,
    top: 0
   }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
  },
  resize: function () {
   var e = t(this).resizable("instance");
   e.ghost && e.ghost.css({
    position: "relative",
    height: e.size.height,
    width: e.size.width
   })
  },
  stop: function () {
   var e = t(this).resizable("instance");
   e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
  }
 }), t.ui.plugin.add("resizable", "grid", {
  resize: function () {
   var e,
    i = t(this).resizable("instance"),
    s = i.options,
    n = i.size,
    o = i.originalSize,
    a = i.originalPosition,
    r = i.axis,
    h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
    l = h[0] || 1,
    c = h[1] || 1,
    u = Math.round((n.width - o.width) / l) * l,
    d = Math.round((n.height - o.height) / c) * c,
    p = o.width + u,
    f = o.height + d,
    g = s.maxWidth && p > s.maxWidth,
    m = s.maxHeight && f > s.maxHeight,
    _ = s.minWidth && s.minWidth > p,
    v = s.minHeight && s.minHeight > f;
   s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
  }
 }), t.ui.resizable, t.widget("ui.dialog", {
  version: "1.12.1",
  options: {
   appendTo: "body",
   autoOpen: !0,
   buttons: [],
   classes: {
    "ui-dialog": "ui-corner-all",
    "ui-dialog-titlebar": "ui-corner-all"
   },
   closeOnEscape: !0,
   closeText: "Close",
   draggable: !0,
   hide: null,
   height: "auto",
   maxHeight: null,
   maxWidth: null,
   minHeight: 150,
   minWidth: 150,
   modal: !1,
   position: {
    my: "center",
    at: "center",
    of: window,
    collision: "fit",
    using: function (e) {
     var i = t(this).css(e).offset().top;
     0 > i && t(this).css("top", e.top - i)
    }
   },
   resizable: !0,
   show: null,
   title: null,
   width: 300,
   beforeClose: null,
   close: null,
   drag: null,
   dragStart: null,
   dragStop: null,
   focus: null,
   open: null,
   resize: null,
   resizeStart: null,
   resizeStop: null
  },
  sizeRelatedOptions: {
   buttons: !0,
   height: !0,
   maxHeight: !0,
   maxWidth: !0,
   minHeight: !0,
   minWidth: !0,
   width: !0
  },
  resizableRelatedOptions: {
   maxHeight: !0,
   maxWidth: !0,
   minHeight: !0,
   minWidth: !0
  },
  _create: function () {
   this.originalCss = {
    display: this.element[0].style.display,
    width: this.element[0].style.width,
    minHeight: this.element[0].style.minHeight,
    maxHeight: this.element[0].style.maxHeight,
    height: this.element[0].style.height
   }, this.originalPosition = {
    parent: this.element.parent(),
    index: this.element.parent().children().index(this.element)
   }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
  },
  _init: function () {
   this.options.autoOpen && this.open()
  },
  _appendTo: function () {
   var e = this.options.appendTo;
   return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
  },
  _destroy: function () {
   var t,
    e = this.originalPosition;
   this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
  },
  widget: function () {
   return this.uiDialog
  },
  disable: t.noop,
  enable: t.noop,
  close: function (e) {
   var i = this;
   this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
    i._trigger("close", e)
   }))
  },
  isOpen: function () {
   return this._isOpen
  },
  moveToTop: function () {
   this._moveToTop()
  },
  _moveToTop: function (e, i) {
   var s = !1,
    n = this.uiDialog.siblings(".ui-front:visible").map(function () {
     return +t(this).css("z-index")
    }).get(),
    o = Math.max.apply(null, n);
   return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
  },
  open: function () {
   var e = this;
   return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
    e._focusTabbable(), e._trigger("focus")
   }), this._makeFocusTarget(), this._trigger("open"), void 0)
  },
  _focusTabbable: function () {
   var t = this._focusedElement;
   t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
  },
  _keepFocus: function (e) {
   function i() {
    var e = t.ui.safeActiveElement(this.document[0]),
     i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
    i || this._focusTabbable()
   }
   e.preventDefault(), i.call(this), this._delay(i)
  },
  _createWrapper: function () {
   this.uiDialog = t("<div>").hide().attr({
    tabIndex: -1,
    role: "dialog"
   }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
    keydown: function (e) {
     if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
      return e.preventDefault(), this.close(e), void 0;
     if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
      var i = this.uiDialog.find(":tabbable"),
       s = i.filter(":first"),
       n = i.filter(":last");
      e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
       n.trigger("focus")
      }), e.preventDefault()) : (this._delay(function () {
       s.trigger("focus")
      }), e.preventDefault())
     }
    },
    mousedown: function (t) {
     this._moveToTop(t) && this._focusTabbable()
    }
   }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
    "aria-describedby": this.element.uniqueId().attr("id")
   })
  },
  _createTitlebar: function () {
   var e;
   this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
    mousedown: function (e) {
     t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
    }
   }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
    label: t("<a>").text(this.options.closeText).html(),
    icon: "ui-icon-closethick",
    showLabel: !1
   }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
    click: function (t) {
     t.preventDefault(), this.close(t)
    }
   }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
    "aria-labelledby": e.attr("id")
   })
  },
  _title: function (t) {
   this.options.title ? t.text(this.options.title) : t.html("&#160;")
  },
  _createButtonPane: function () {
   this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
  },
  _createButtons: function () {
   var e = this,
    i = this.options.buttons;
   return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
    var n,
     o;
    s = t.isFunction(s) ? {
     click: s,
     text: i
    } : s, s = t.extend({
     type: "button"
    }, s), n = s.click, o = {
     icon: s.icon,
     iconPosition: s.iconPosition,
     showLabel: s.showLabel,
     icons: s.icons,
     text: s.text
    }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
     n.apply(e.element[0], arguments)
    })
   }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
  },
  _makeDraggable: function () {
   function e(t) {
    return {
     position: t.position,
     offset: t.offset
    }
   }
   var i = this,
    s = this.options;
   this.uiDialog.draggable({
    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
    handle: ".ui-dialog-titlebar",
    containment: "document",
    start: function (s, n) {
     i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
    },
    drag: function (t, s) {
     i._trigger("drag", t, e(s))
    },
    stop: function (n, o) {
     var a = o.offset.left - i.document.scrollLeft(),
      r = o.offset.top - i.document.scrollTop();
     s.position = {
      my: "left top",
      at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
      of: i.window
     }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
    }
   })
  },
  _makeResizable: function () {
   function e(t) {
    return {
     originalPosition: t.originalPosition,
     originalSize: t.originalSize,
     position: t.position,
     size: t.size
    }
   }
   var i = this,
    s = this.options,
    n = s.resizable,
    o = this.uiDialog.css("position"),
    a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
   this.uiDialog.resizable({
    cancel: ".ui-dialog-content",
    containment: "document",
    alsoResize: this.element,
    maxWidth: s.maxWidth,
    maxHeight: s.maxHeight,
    minWidth: s.minWidth,
    minHeight: this._minHeight(),
    handles: a,
    start: function (s, n) {
     i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
    },
    resize: function (t, s) {
     i._trigger("resize", t, e(s))
    },
    stop: function (n, o) {
     var a = i.uiDialog.offset(),
      r = a.left - i.document.scrollLeft(),
      h = a.top - i.document.scrollTop();
     s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
      my: "left top",
      at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
      of: i.window
     }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
    }
   }).css("position", o)
  },
  _trackFocus: function () {
   this._on(this.widget(), {
    focusin: function (e) {
     this._makeFocusTarget(), this._focusedElement = t(e.target)
    }
   })
  },
  _makeFocusTarget: function () {
   this._untrackInstance(), this._trackingInstances().unshift(this)
  },
  _untrackInstance: function () {
   var e = this._trackingInstances(),
    i = t.inArray(this, e); -
   1 !== i && e.splice(i, 1)
  },
  _trackingInstances: function () {
   var t = this.document.data("ui-dialog-instances");
   return t || (t = [], this.document.data("ui-dialog-instances", t)), t
  },
  _minHeight: function () {
   var t = this.options;
   return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
  },
  _position: function () {
   var t = this.uiDialog.is(":visible");
   t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
  },
  _setOptions: function (e) {
   var i = this,
    s = !1,
    n = {};
   t.each(e, function (t, e) {
    i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
   }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
  },
  _setOption: function (e, i) {
   var s,
    n,
    o = this.uiDialog;
   "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
    label: t("<a>").text("" + this.options.closeText).html()
   }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
  },
  _size: function () {
   var t,
    e,
    i,
    s = this.options;
   this.element.show().css({
    width: "auto",
    minHeight: 0,
    maxHeight: "none",
    height: 0
   }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
    height: "auto",
    width: s.width
   }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
    minHeight: e,
    maxHeight: i,
    height: "auto"
   }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
  },
  _blockFrames: function () {
   this.iframeBlocks = this.document.find("iframe").map(function () {
    var e = t(this);
    return t("<div>").css({
     position: "absolute",
     width: e.outerWidth(),
     height: e.outerHeight()
    }).appendTo(e.parent()).offset(e.offset())[0]
   })
  },
  _unblockFrames: function () {
   this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
  },
  _allowInteraction: function (e) {
   return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
  },
  _createOverlay: function () {
   if (this.options.modal) {
    var e = !0;
    this._delay(function () {
     e = !1
    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
     focusin: function (t) {
      e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
     }
    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
     mousedown: "_keepFocus"
    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
   }
  },
  _destroyOverlay: function () {
   if (this.options.modal && this.overlay) {
    var t = this.document.data("ui-dialog-overlays") - 1;
    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
   }
  }
 }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
  options: {
   dialogClass: ""
  },
  _createWrapper: function () {
   this._super(), this.uiDialog.addClass(this.options.dialogClass)
  },
  _setOption: function (t, e) {
   "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
  }
 }), t.ui.dialog, t.widget("ui.droppable", {
  version: "1.12.1",
  widgetEventPrefix: "drop",
  options: {
   accept: "*",
   addClasses: !0,
   greedy: !1,
   scope: "default",
   tolerance: "intersect",
   activate: null,
   deactivate: null,
   drop: null,
   out: null,
   over: null
  },
  _create: function () {
   var e,
    i = this.options,
    s = i.accept;
   this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
    return t.is(s)
   }, this.proportions = function () {
    return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
     width: this.element[0].offsetWidth,
     height: this.element[0].offsetHeight
    }
   }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
  },
  _addToManager: function (e) {
   t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
  },
  _splice: function (t) {
   for (var e = 0; t.length > e; e++)
    t[e] === this && t.splice(e, 1)
  },
  _destroy: function () {
   var e = t.ui.ddmanager.droppables[this.options.scope];
   this._splice(e)
  },
  _setOption: function (e, i) {
   if ("accept" === e)
    this.accept = t.isFunction(i) ? i : function (t) {
     return t.is(i)
    };
   else if ("scope" === e) {
    var s = t.ui.ddmanager.droppables[this.options.scope];
    this._splice(s), this._addToManager(i)
   }
   this._super(e, i)
  },
  _activate: function (e) {
   var i = t.ui.ddmanager.current;
   this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
  },
  _deactivate: function (e) {
   var i = t.ui.ddmanager.current;
   this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
  },
  _over: function (e) {
   var i = t.ui.ddmanager.current;
   i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
  },
  _out: function (e) {
   var i = t.ui.ddmanager.current;
   i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
  },
  _drop: function (e, i) {
   var s = i || t.ui.ddmanager.current,
    n = !1;
   return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
    var i = t(this).droppable("instance");
    return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
     offset: i.element.offset()
    }), i.options.tolerance, e) ? (n = !0, !1) : void 0
   }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
  },
  ui: function (t) {
   return {
    draggable: t.currentItem || t.element,
    helper: t.helper,
    position: t.position,
    offset: t.positionAbs
   }
  },
  _addHoverClass: function () {
   this._addClass("ui-droppable-hover")
  },
  _removeHoverClass: function () {
   this._removeClass("ui-droppable-hover")
  },
  _addActiveClass: function () {
   this._addClass("ui-droppable-active")
  },
  _removeActiveClass: function () {
   this._removeClass("ui-droppable-active")
  }
 });
 var v = t.ui.intersect = function () {
  function t(t, e, i) {
   return t >= e && e + i > t
  }
  return function (e, i, s, n) {
   if (!i.offset)
    return !1;
   var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
    r = o + e.helperProportions.width,
    h = a + e.helperProportions.height,
    l = i.offset.left,
    c = i.offset.top,
    u = l + i.proportions().width,
    d = c + i.proportions().height;
   switch (s) {
    case "fit":
     return o >= l && u >= r && a >= c && d >= h;
    case "intersect":
     return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
    case "pointer":
     return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
    case "touch":
     return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
    default:
     return !1
   }
  }
 }();
 t.ui.ddmanager = {
  current: null,
  droppables: {
   "default": []
  },
  prepareOffsets: function (e, i) {
   var s,
    n,
    o = t.ui.ddmanager.droppables[e.options.scope] || [],
    a = i ? i.type : null,
    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
   t:
    for (s = 0; o.length > s; s++)
     if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
      for (n = 0; r.length > n; n++)
       if (r[n] === o[s].element[0]) {
        o[s].proportions().height = 0;
        continue t
       }
      o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
       width: o[s].element[0].offsetWidth,
       height: o[s].element[0].offsetHeight
      }))
     }
  },
  drop: function (e, i) {
   var s = !1;
   return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
    this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
   }), s
  },
  dragStart: function (e, i) {
   e.element.parentsUntil("body").on("scroll.droppable", function () {
    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
   })
  },
  drag: function (e, i) {
   e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
    if (!this.options.disabled && !this.greedyChild && this.visible) {
     var s,
      n,
      o,
      a = v(e, this, this.options.tolerance, i),
      r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
     r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
      return t(this).droppable("instance").options.scope === n
     }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
    }
   })
  },
  dragStop: function (e, i) {
   e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
  }
 }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
  options: {
   hoverClass: !1,
   activeClass: !1
  },
  _addActiveClass: function () {
   this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
  },
  _removeActiveClass: function () {
   this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
  },
  _addHoverClass: function () {
   this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
  },
  _removeHoverClass: function () {
   this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
  }
 }), t.ui.droppable, t.widget("ui.progressbar", {
  version: "1.12.1",
  options: {
   classes: {
    "ui-progressbar": "ui-corner-all",
    "ui-progressbar-value": "ui-corner-left",
    "ui-progressbar-complete": "ui-corner-right"
   },
   max: 100,
   value: 0,
   change: null,
   complete: null
  },
  min: 0,
  _create: function () {
   this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
    role: "progressbar",
    "aria-valuemin": this.min
   }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
  },
  _destroy: function () {
   this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
  },
  value: function (t) {
   return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
  },
  _constrainedValue: function (t) {
   return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
  },
  _setOptions: function (t) {
   var e = t.value;
   delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
  },
  _setOption: function (t, e) {
   "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
  },
  _setOptionDisabled: function (t) {
   this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  _percentage: function () {
   return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
  },
  _refreshValue: function () {
   var e = this.options.value,
    i = this._percentage();
   this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
    "aria-valuemax": this.options.max,
    "aria-valuenow": e
   }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
  }
 }), t.widget("ui.selectable", t.ui.mouse, {
  version: "1.12.1",
  options: {
   appendTo: "body",
   autoRefresh: !0,
   distance: 0,
   filter: "*",
   tolerance: "touch",
   selected: null,
   selecting: null,
   start: null,
   stop: null,
   unselected: null,
   unselecting: null
  },
  _create: function () {
   var e = this;
   this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
     var i = t(this),
      s = i.offset(),
      n = {
       left: s.left - e.elementPos.left,
       top: s.top - e.elementPos.top
      };
     t.data(this, "selectable-item", {
      element: this,
      $element: i,
      left: n.left,
      top: n.top,
      right: n.left + i.outerWidth(),
      bottom: n.top + i.outerHeight(),
      startselected: !1,
      selected: i.hasClass("ui-selected"),
      selecting: i.hasClass("ui-selecting"),
      unselecting: i.hasClass("ui-unselecting")
     })
    })
   }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
  },
  _destroy: function () {
   this.selectees.removeData("selectable-item"), this._mouseDestroy()
  },
  _mouseStart: function (e) {
   var i = this,
    s = this.options;
   this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
    left: e.pageX,
    top: e.pageY,
    width: 0,
    height: 0
   }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
    var s = t.data(this, "selectable-item");
    s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
     unselecting: s.element
    }))
   }), t(e.target).parents().addBack().each(function () {
    var s,
     n = t.data(this, "selectable-item");
    return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
     selecting: n.element
    }) : i._trigger("unselecting", e, {
     unselecting: n.element
    }), !1) : void 0
   }))
  },
  _mouseDrag: function (e) {
   if (this.dragged = !0, !this.options.disabled) {
    var i,
     s = this,
     n = this.options,
     o = this.opos[0],
     a = this.opos[1],
     r = e.pageX,
     h = e.pageY;
    return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
     left: o,
     top: a,
     width: r - o,
     height: h - a
    }), this.selectees.each(function () {
     var i = t.data(this, "selectable-item"),
      l = !1,
      c = {};
     i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
      selecting: i.element
     }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
      unselecting: i.element
     }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
      unselecting: i.element
     })))))
    }), !1
   }
  },
  _mouseStop: function (e) {
   var i = this;
   return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
    var s = t.data(this, "selectable-item");
    i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
     unselected: s.element
    })
   }), t(".ui-selecting", this.element[0]).each(function () {
    var s = t.data(this, "selectable-item");
    i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
     selected: s.element
    })
   }), this._trigger("stop", e), this.helper.remove(), !1
  }
 }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
  version: "1.12.1",
  defaultElement: "<select>",
  options: {
   appendTo: null,
   classes: {
    "ui-selectmenu-button-open": "ui-corner-top",
    "ui-selectmenu-button-closed": "ui-corner-all"
   },
   disabled: null,
   icons: {
    button: "ui-icon-triangle-1-s"
   },
   position: {
    my: "left top",
    at: "left bottom",
    collision: "none"
   },
   width: !1,
   change: null,
   close: null,
   focus: null,
   open: null,
   select: null
  },
  _create: function () {
   var e = this.element.uniqueId().attr("id");
   this.ids = {
    element: e,
    button: e + "-button",
    menu: e + "-menu"
   }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
  },
  _drawButton: function () {
   var e,
    i = this,
    s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
   this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
    click: function (t) {
     this.button.focus(), t.preventDefault()
    }
   }), this.element.hide(), this.button = t("<span>", {
    tabindex: this.options.disabled ? -1 : 0,
    id: this.ids.button,
    role: "combobox",
    "aria-expanded": "false",
    "aria-autocomplete": "list",
    "aria-owns": this.ids.menu,
    "aria-haspopup": "true",
    title: this.element.attr("title")
   }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
    i._rendered || i._refreshMenu()
   })
  },
  _drawMenu: function () {
   var e = this;
   this.menu = t("<ul>", {
    "aria-hidden": "true",
    "aria-labelledby": this.ids.button,
    id: this.ids.menu
   }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
    classes: {
     "ui-menu": "ui-corner-bottom"
    },
    role: "listbox",
    select: function (t, i) {
     t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
    },
    focus: function (t, i) {
     var s = i.item.data("ui-selectmenu-item");
     null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
      item: s
     }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
    }
   }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
    return !1
   }, this.menuInstance._isDivider = function () {
    return !1
   }
  },
  refresh: function () {
   this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
  },
  _refreshMenu: function () {
   var t,
    e = this.element.find("option");
   this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
  },
  open: function (t) {
   this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
  },
  _position: function () {
   this.menuWrap.position(t.extend({
    of: this.button
   }, this.options.position))
  },
  close: function (t) {
   this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
  },
  widget: function () {
   return this.button
  },
  menuWidget: function () {
   return this.menu
  },
  _renderButtonItem: function (e) {
   var i = t("<span>");
   return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
  },
  _renderMenu: function (e, i) {
   var s = this,
    n = "";
   t.each(i, function (i, o) {
    var a;
    o.optgroup !== n && (a = t("<li>", {
     text: o.optgroup
    }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
   })
  },
  _renderItemData: function (t, e) {
   return this._renderItem(t, e).data("ui-selectmenu-item", e)
  },
  _renderItem: function (e, i) {
   var s = t("<li>"),
    n = t("<div>", {
     title: i.element.attr("title")
    });
   return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
  },
  _setText: function (t, e) {
   e ? t.text(e) : t.html("&#160;")
  },
  _move: function (t, e) {
   var i,
    s,
    n = ".ui-menu-item";
   this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
  },
  _getSelectedItem: function () {
   return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
  },
  _toggle: function (t) {
   this[this.isOpen ? "close" : "open"](t)
  },
  _setSelection: function () {
   var t;
   this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
  },
  _documentClick: {
   mousedown: function (e) {
    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
   }
  },
  _buttonEvents: {
   mousedown: function () {
    var t;
    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
   },
   click: function (t) {
    this._setSelection(), this._toggle(t)
   },
   keydown: function (e) {
    var i = !0;
    switch (e.keyCode) {
     case t.ui.keyCode.TAB:
     case t.ui.keyCode.ESCAPE:
      this.close(e), i = !1;
      break;
     case t.ui.keyCode.ENTER:
      this.isOpen && this._selectFocusedItem(e);
      break;
     case t.ui.keyCode.UP:
      e.altKey ? this._toggle(e) : this._move("prev", e);
      break;
     case t.ui.keyCode.DOWN:
      e.altKey ? this._toggle(e) : this._move("next", e);
      break;
     case t.ui.keyCode.SPACE:
      this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
      break;
     case t.ui.keyCode.LEFT:
      this._move("prev", e);
      break;
     case t.ui.keyCode.RIGHT:
      this._move("next", e);
      break;
     case t.ui.keyCode.HOME:
     case t.ui.keyCode.PAGE_UP:
      this._move("first", e);
      break;
     case t.ui.keyCode.END:
     case t.ui.keyCode.PAGE_DOWN:
      this._move("last", e);
      break;
     default:
      this.menu.trigger(e), i = !1
    }
    i && e.preventDefault()
   }
  },
  _selectFocusedItem: function (t) {
   var e = this.menuItems.eq(this.focusIndex).parent("li");
   e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
  },
  _select: function (t, e) {
   var i = this.element[0].selectedIndex;
   this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
    item: t
   }), t.index !== i && this._trigger("change", e, {
    item: t
   }), this.close(e)
  },
  _setAria: function (t) {
   var e = this.menuItems.eq(t.index).attr("id");
   this.button.attr({
    "aria-labelledby": e,
    "aria-activedescendant": e
   }), this.menu.attr("aria-activedescendant", e)
  },
  _setOption: function (t, e) {
   if ("icons" === t) {
    var i = this.button.find("span.ui-icon");
    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
   }
   this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
  },
  _setOptionDisabled: function (t) {
   this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
  },
  _appendTo: function () {
   var e = this.options.appendTo;
   return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
  },
  _toggleAttr: function () {
   this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
  },
  _resizeButton: function () {
   var t = this.options.width;
   return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
  },
  _resizeMenu: function () {
   this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
  },
  _getCreateOptions: function () {
   var t = this._super();
   return t.disabled = this.element.prop("disabled"), t
  },
  _parseOptions: function (e) {
   var i = this,
    s = [];
   e.each(function (e, n) {
    s.push(i._parseOption(t(n), e))
   }), this.items = s
  },
  _parseOption: function (t, e) {
   var i = t.parent("optgroup");
   return {
    element: t,
    index: e,
    value: t.val(),
    label: t.text(),
    optgroup: i.attr("label") || "",
    disabled: i.prop("disabled") || t.prop("disabled")
   }
  },
  _destroy: function () {
   this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
  }
 }]), t.widget("ui.slider", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "slide",
  options: {
   animate: !1,
   classes: {
    "ui-slider": "ui-corner-all",
    "ui-slider-handle": "ui-corner-all",
    "ui-slider-range": "ui-corner-all ui-widget-header"
   },
   distance: 0,
   max: 100,
   min: 0,
   orientation: "horizontal",
   range: !1,
   step: 1,
   value: 0,
   values: null,
   change: null,
   slide: null,
   start: null,
   stop: null
  },
  numPages: 5,
  _create: function () {
   this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
  },
  _refresh: function () {
   this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
  },
  _createHandles: function () {
   var e,
    i,
    s = this.options,
    n = this.element.find(".ui-slider-handle"),
    o = "<span tabindex='0'></span>",
    a = [];
   for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)
    a.push(o);
   this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
   })
  },
  _createRange: function () {
   var e = this.options;
   e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
    left: "",
    bottom: ""
   })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
  },
  _setupEvents: function () {
   this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
  },
  _destroy: function () {
   this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
  },
  _mouseCapture: function (e) {
   var i,
    s,
    n,
    o,
    a,
    r,
    h,
    l,
    c = this,
    u = this.options;
   return u.disabled ? !1 : (this.elementSize = {
    width: this.element.outerWidth(),
    height: this.element.outerHeight()
   }, this.elementOffset = this.element.offset(), i = {
    x: e.pageX,
    y: e.pageY
   }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
    var i = Math.abs(s - c.values(e));
    (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
   }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
    left: 0,
    top: 0
   } : {
    left: e.pageX - h.left - o.width() / 2,
    top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
   }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
  },
  _mouseStart: function () {
   return !0
  },
  _mouseDrag: function (t) {
   var e = {
     x: t.pageX,
     y: t.pageY
    },
    i = this._normValueFromMouse(e);
   return this._slide(t, this._handleIndex, i), !1
  },
  _mouseStop: function (t) {
   return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
  },
  _detectOrientation: function () {
   this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
  },
  _normValueFromMouse: function (t) {
   var e,
    i,
    s,
    n,
    o;
   return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
  },
  _uiHash: function (t, e, i) {
   var s = {
    handle: this.handles[t],
    handleIndex: t,
    value: void 0 !== e ? e : this.value()
   };
   return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
  },
  _hasMultipleValues: function () {
   return this.options.values && this.options.values.length
  },
  _start: function (t, e) {
   return this._trigger("start", t, this._uiHash(e))
  },
  _slide: function (t, e, i) {
   var s,
    n,
    o = this.value(),
    a = this.values();
   this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
  },
  _stop: function (t, e) {
   this._trigger("stop", t, this._uiHash(e))
  },
  _change: function (t, e) {
   this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
  },
  value: function (t) {
   return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
  },
  values: function (e, i) {
   var s,
    n,
    o;
   if (arguments.length > 1)
    return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
   if (!arguments.length)
    return this._values();
   if (!t.isArray(arguments[0]))
    return this._hasMultipleValues() ? this._values(e) : this.value();
   for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)
    s[o] = this._trimAlignValue(n[o]), this._change(null, o);
   this._refreshValue()
  },
  _setOption: function (e, i) {
   var s,
    n = 0;
   switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
    case "orientation":
     this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
     break;
    case "value":
     this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
     break;
    case "values":
     for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--)
      this._change(null, s);
     this._animateOff = !1;
     break;
    case "step":
    case "min":
    case "max":
     this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
     break;
    case "range":
     this._animateOff = !0, this._refresh(), this._animateOff = !1
   }
  },
  _setOptionDisabled: function (t) {
   this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
  },
  _value: function () {
   var t = this.options.value;
   return t = this._trimAlignValue(t)
  },
  _values: function (t) {
   var e,
    i,
    s;
   if (arguments.length)
    return e = this.options.values[t], e = this._trimAlignValue(e);
   if (this._hasMultipleValues()) {
    for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
     i[s] = this._trimAlignValue(i[s]);
    return i
   }
   return []
  },
  _trimAlignValue: function (t) {
   if (this._valueMin() >= t)
    return this._valueMin();
   if (t >= this._valueMax())
    return this._valueMax();
   var e = this.options.step > 0 ? this.options.step : 1,
    i = (t - this._valueMin()) % e,
    s = t - i;
   return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
  },
  _calculateNewMax: function () {
   var t = this.options.max,
    e = this._valueMin(),
    i = this.options.step,
    s = Math.round((t - e) / i) * i;
   t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
  },
  _precision: function () {
   var t = this._precisionOf(this.options.step);
   return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
  },
  _precisionOf: function (t) {
   var e = "" + t,
    i = e.indexOf(".");
   return -1 === i ? 0 : e.length - i - 1
  },
  _valueMin: function () {
   return this.options.min
  },
  _valueMax: function () {
   return this.max
  },
  _refreshRange: function (t) {
   "vertical" === t && this.range.css({
    width: "",
    left: ""
   }), "horizontal" === t && this.range.css({
    height: "",
    bottom: ""
   })
  },
  _refreshValue: function () {
   var e,
    i,
    s,
    n,
    o,
    a = this.options.range,
    r = this.options,
    h = this,
    l = this._animateOff ? !1 : r.animate,
    c = {};
   this._hasMultipleValues() ? this.handles.each(function (s) {
    i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
     left: i + "%"
    }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
     width: i - e + "%"
    }, {
     queue: !1,
     duration: r.animate
    })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
     bottom: i + "%"
    }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
     height: i - e + "%"
    }, {
     queue: !1,
     duration: r.animate
    }))), e = i
   }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
    width: i + "%"
   }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
    width: 100 - i + "%"
   }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
    height: i + "%"
   }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
    height: 100 - i + "%"
   }, r.animate))
  },
  _handleEvents: {
   keydown: function (e) {
    var i,
     s,
     n,
     o,
     a = t(e.target).data("ui-slider-handle-index");
    switch (e.keyCode) {
     case t.ui.keyCode.HOME:
     case t.ui.keyCode.END:
     case t.ui.keyCode.PAGE_UP:
     case t.ui.keyCode.PAGE_DOWN:
     case t.ui.keyCode.UP:
     case t.ui.keyCode.RIGHT:
     case t.ui.keyCode.DOWN:
     case t.ui.keyCode.LEFT:
      if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1))
       return
    }
    switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
     case t.ui.keyCode.HOME:
      n = this._valueMin();
      break;
     case t.ui.keyCode.END:
      n = this._valueMax();
      break;
     case t.ui.keyCode.PAGE_UP:
      n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
      break;
     case t.ui.keyCode.PAGE_DOWN:
      n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
      break;
     case t.ui.keyCode.UP:
     case t.ui.keyCode.RIGHT:
      if (s === this._valueMax())
       return;
      n = this._trimAlignValue(s + o);
      break;
     case t.ui.keyCode.DOWN:
     case t.ui.keyCode.LEFT:
      if (s === this._valueMin())
       return;
      n = this._trimAlignValue(s - o)
    }
    this._slide(e, a, n)
   },
   keyup: function (e) {
    var i = t(e.target).data("ui-slider-handle-index");
    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
   }
  }
 }), t.widget("ui.sortable", t.ui.mouse, {
  version: "1.12.1",
  widgetEventPrefix: "sort",
  ready: !1,
  options: {
   appendTo: "parent",
   axis: !1,
   connectWith: !1,
   containment: !1,
   cursor: "auto",
   cursorAt: !1,
   dropOnEmpty: !0,
   forcePlaceholderSize: !1,
   forceHelperSize: !1,
   grid: !1,
   handle: !1,
   helper: "original",
   items: "> *",
   opacity: !1,
   placeholder: !1,
   revert: !1,
   scroll: !0,
   scrollSensitivity: 20,
   scrollSpeed: 20,
   scope: "default",
   tolerance: "intersect",
   zIndex: 1e3,
   activate: null,
   beforeStop: null,
   change: null,
   deactivate: null,
   out: null,
   over: null,
   receive: null,
   remove: null,
   sort: null,
   start: null,
   stop: null,
   update: null
  },
  _isOverAxis: function (t, e, i) {
   return t >= e && e + i > t
  },
  _isFloating: function (t) {
   return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
  },
  _create: function () {
   this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
  },
  _setOption: function (t, e) {
   this._super(t, e), "handle" === t && this._setHandleClassName()
  },
  _setHandleClassName: function () {
   var e = this;
   this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
   })
  },
  _destroy: function () {
   this._mouseDestroy();
   for (var t = this.items.length - 1; t >= 0; t--)
    this.items[t].item.removeData(this.widgetName + "-item");
   return this
  },
  _mouseCapture: function (e, i) {
   var s = null,
    n = !1,
    o = this;
   return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
    return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
   }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
    this === e.target && (n = !0)
   }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
  },
  _mouseStart: function (e, i, s) {
   var n,
    o,
    a = this.options;
   if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
     top: this.offset.top - this.margins.top,
     left: this.offset.left - this.margins.left
    }, t.extend(this.offset, {
     click: {
      left: e.pageX - this.offset.left,
      top: e.pageY - this.offset.top
     },
     parent: this._getParentOffset(),
     relative: this._getRelativeOffset()
    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
     prev: this.currentItem.prev()[0],
     parent: this.currentItem.parent()[0]
    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
    for (n = this.containers.length - 1; n >= 0; n--)
     this.containers[n]._trigger("activate", e, this._uiHash(this));
   return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
  },
  _mouseDrag: function (e) {
   var i,
    s,
    n,
    o,
    a = this.options,
    r = !1;
   for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
    if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
     if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
      break;
     this._rearrange(e, s), this._trigger("change", e, this._uiHash());
     break
    }
   return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
  },
  _mouseStop: function (e, i) {
   if (e) {
    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
     var s = this,
      n = this.placeholder.offset(),
      o = this.options.axis,
      a = {};
     o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
      s._clear(e)
     })
    } else
     this._clear(e, i);
    return !1
   }
  },
  cancel: function () {
   if (this.dragging) {
    this._mouseUp(new t.Event("mouseup", {
     target: null
    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
    for (var e = this.containers.length - 1; e >= 0; e--)
     this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
   }
   return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
    helper: null,
    dragging: !1,
    reverting: !1,
    _noFinalSort: null
   }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
  },
  serialize: function (e) {
   var i = this._getItemsAsjQuery(e && e.connected),
    s = [];
   return e = e || {}, t(i).each(function () {
    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
    i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
   }), !s.length && e.key && s.push(e.key + "="), s.join("&")
  },
  toArray: function (e) {
   var i = this._getItemsAsjQuery(e && e.connected),
    s = [];
   return e = e || {}, i.each(function () {
    s.push(t(e.item || this).attr(e.attribute || "id") || "")
   }), s
  },
  _intersectsWith: function (t) {
   var e = this.positionAbs.left,
    i = e + this.helperProportions.width,
    s = this.positionAbs.top,
    n = s + this.helperProportions.height,
    o = t.left,
    a = o + t.width,
    r = t.top,
    h = r + t.height,
    l = this.offset.click.top,
    c = this.offset.click.left,
    u = "x" === this.options.axis || s + l > r && h > s + l,
    d = "y" === this.options.axis || e + c > o && a > e + c,
    p = u && d;
   return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
  },
  _intersectsWithPointer: function (t) {
   var e,
    i,
    s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
    n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
    o = s && n;
   return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
  },
  _intersectsWithSides: function (t) {
   var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
    s = this._getDragVerticalDirection(),
    n = this._getDragHorizontalDirection();
   return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
  },
  _getDragVerticalDirection: function () {
   var t = this.positionAbs.top - this.lastPositionAbs.top;
   return 0 !== t && (t > 0 ? "down" : "up")
  },
  _getDragHorizontalDirection: function () {
   var t = this.positionAbs.left - this.lastPositionAbs.left;
   return 0 !== t && (t > 0 ? "right" : "left")
  },
  refresh: function (t) {
   return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
  },
  _connectWith: function () {
   var t = this.options;
   return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
  },
  _getItemsAsjQuery: function (e) {
   function i() {
    r.push(this)
   }
   var s,
    n,
    o,
    a,
    r = [],
    h = [],
    l = this._connectWith();
   if (l && e)
    for (s = l.length - 1; s >= 0; s--)
     for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--)
      a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
   for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
     options: this.options,
     item: this.currentItem
    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)
    h[s][0].each(i);
   return t(r)
  },
  _removeCurrentsFromItems: function () {
   var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
   this.items = t.grep(this.items, function (t) {
    for (var i = 0; e.length > i; i++)
     if (e[i] === t.item[0])
      return !1;
    return !0
   })
  },
  _refreshItems: function (e) {
   this.items = [], this.containers = [this];
   var i,
    s,
    n,
    o,
    a,
    r,
    h,
    l,
    c = this.items,
    u = [
     [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
      item: this.currentItem
     }) : t(this.options.items, this.element), this]
    ],
    d = this._connectWith();
   if (d && this.ready)
    for (i = d.length - 1; i >= 0; i--)
     for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)
      o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
       item: this.currentItem
      }) : t(o.options.items, o.element), o]), this.containers.push(o));
   for (i = u.length - 1; i >= 0; i--)
    for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
     h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
      item: h,
      instance: a,
      width: 0,
      height: 0,
      left: 0,
      top: 0
     })
  },
  refreshPositions: function (e) {
   this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
   var i,
    s,
    n,
    o;
   for (i = this.items.length - 1; i >= 0; i--)
    s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
   if (this.options.custom && this.options.custom.refreshContainers)
    this.options.custom.refreshContainers.call(this);
   else
    for (i = this.containers.length - 1; i >= 0; i--)
     o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
   return this
  },
  _createPlaceholder: function (e) {
   e = e || this;
   var i,
    s = e.options;
   s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
    element: function () {
     var s = e.currentItem[0].nodeName.toLowerCase(),
      n = t("<" + s + ">", e.document[0]);
     return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
    },
    update: function (t, n) {
     (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
    }
   }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
  },
  _createTrPlaceholder: function (e, i) {
   var s = this;
   e.children().each(function () {
    t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
   })
  },
  _contactContainers: function (e) {
   var i,
    s,
    n,
    o,
    a,
    r,
    h,
    l,
    c,
    u,
    d = null,
    p = null;
   for (i = this.containers.length - 1; i >= 0; i--)
    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
     if (this._intersectsWith(this.containers[i].containerCache)) {
      if (d && t.contains(this.containers[i].element[0], d.element[0]))
       continue;
      d = this.containers[i], p = i
     } else
      this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
   if (d)
    if (1 === this.containers.length)
     this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
    else {
     for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--)
      t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
     if (!o && !this.options.dropOnEmpty)
      return;
     if (this.currentContainer === this.containers[p])
      return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
     o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
    }
  },
  _createHelper: function (e) {
   var i = this.options,
    s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
   return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
    width: this.currentItem[0].style.width,
    height: this.currentItem[0].style.height,
    position: this.currentItem.css("position"),
    top: this.currentItem.css("top"),
    left: this.currentItem.css("left")
   }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
  },
  _adjustOffsetFromHelper: function (e) {
   "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
    left: +e[0],
    top: +e[1] || 0
   }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
  },
  _getParentOffset: function () {
   this.offsetParent = this.helper.offsetParent();
   var e = this.offsetParent.offset();
   return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
    top: 0,
    left: 0
   }), {
    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
   }
  },
  _getRelativeOffset: function () {
   if ("relative" === this.cssPosition) {
    var t = this.currentItem.position();
    return {
     top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
     left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
    }
   }
   return {
    top: 0,
    left: 0
   }
  },
  _cacheMargins: function () {
   this.margins = {
    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
   }
  },
  _cacheHelperProportions: function () {
   this.helperProportions = {
    width: this.helper.outerWidth(),
    height: this.helper.outerHeight()
   }
  },
  _setContainment: function () {
   var e,
    i,
    s,
    n = this.options;
   "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
  },
  _convertPositionTo: function (e, i) {
   i || (i = this.position);
   var s = "absolute" === e ? 1 : -1,
    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
    o = /(html|body)/i.test(n[0].tagName);
   return {
    top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
    left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
   }
  },
  _generatePosition: function (e) {
   var i,
    s,
    n = this.options,
    o = e.pageX,
    a = e.pageY,
    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
    h = /(html|body)/i.test(r[0].tagName);
   return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
   }
  },
  _rearrange: function (t, e, i, s) {
   i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
   var n = this.counter;
   this._delay(function () {
    n === this.counter && this.refreshPositions(!s)
   })
  },
  _clear: function (t, e) {
   function i(t, e, i) {
    return function (s) {
     i._trigger(t, s, e._uiHash(e))
    }
   }
   this.reverting = !1;
   var s,
    n = [];
   if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
    for (s in this._storedCSS)
     ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
   } else
    this.currentItem.show();
   for (this.fromOutside && !e && n.push(function (t) {
     this._trigger("receive", t, this._uiHash(this.fromOutside))
    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
     this._trigger("update", t, this._uiHash())
    }), this !== this.currentContainer && (e || (n.push(function (t) {
     this._trigger("remove", t, this._uiHash())
    }), n.push(function (t) {
     return function (e) {
      t._trigger("receive", e, this._uiHash(this))
     }
    }.call(this, this.currentContainer)), n.push(function (t) {
     return function (e) {
      t._trigger("update", e, this._uiHash(this))
     }
    }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)
    e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
   if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
    for (s = 0; n.length > s; s++)
     n[s].call(this, t);
    this._trigger("stop", t, this._uiHash())
   }
   return this.fromOutside = !1, !this.cancelHelperRemoval
  },
  _trigger: function () {
   t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
  },
  _uiHash: function (e) {
   var i = e || this;
   return {
    helper: i.helper,
    placeholder: i.placeholder || t([]),
    position: i.position,
    originalPosition: i.originalPosition,
    offset: i.positionAbs,
    item: i.currentItem,
    sender: e ? e.element : null
   }
  }
 }), t.widget("ui.spinner", {
  version: "1.12.1",
  defaultElement: "<input>",
  widgetEventPrefix: "spin",
  options: {
   classes: {
    "ui-spinner": "ui-corner-all",
    "ui-spinner-down": "ui-corner-br",
    "ui-spinner-up": "ui-corner-tr"
   },
   culture: null,
   icons: {
    down: "ui-icon-triangle-1-s",
    up: "ui-icon-triangle-1-n"
   },
   incremental: !0,
   max: null,
   min: null,
   numberFormat: null,
   page: 10,
   step: 1,
   change: null,
   spin: null,
   start: null,
   stop: null
  },
  _create: function () {
   this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
    beforeunload: function () {
     this.element.removeAttr("autocomplete")
    }
   })
  },
  _getCreateOptions: function () {
   var e = this._super(),
    i = this.element;
   return t.each(["min", "max", "step"], function (t, s) {
    var n = i.attr(s);
    null != n && n.length && (e[s] = n)
   }), e
  },
  _events: {
   keydown: function (t) {
    this._start(t) && this._keydown(t) && t.preventDefault()
   },
   keyup: "_stop",
   focus: function () {
    this.previous = this.element.val()
   },
   blur: function (t) {
    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
   },
   mousewheel: function (t, e) {
    if (e) {
     if (!this.spinning && !this._start(t))
      return !1;
     this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
      this.spinning && this._stop(t)
     }, 100), t.preventDefault()
    }
   },
   "mousedown .ui-spinner-button": function (e) {
    function i() {
     var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
     e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
      this.previous = s
     }))
    }
    var s;
    s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
     delete this.cancelBlur, i.call(this)
    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
   },
   "mouseup .ui-spinner-button": "_stop",
   "mouseenter .ui-spinner-button": function (e) {
    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
   },
   "mouseleave .ui-spinner-button": "_stop"
  },
  _enhance: function () {
   this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
  },
  _draw: function () {
   this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
    classes: {
     "ui-button": ""
    }
   }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
    icon: this.options.icons.up,
    showLabel: !1
   }), this.buttons.last().button({
    icon: this.options.icons.down,
    showLabel: !1
   }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
  },
  _keydown: function (e) {
   var i = this.options,
    s = t.ui.keyCode;
   switch (e.keyCode) {
    case s.UP:
     return this._repeat(null, 1, e), !0;
    case s.DOWN:
     return this._repeat(null, -1, e), !0;
    case s.PAGE_UP:
     return this._repeat(null, i.page, e), !0;
    case s.PAGE_DOWN:
     return this._repeat(null, -i.page, e), !0
   }
   return !1
  },
  _start: function (t) {
   return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
  },
  _repeat: function (t, e, i) {
   t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
    this._repeat(40, e, i)
   }, t), this._spin(e * this.options.step, i)
  },
  _spin: function (t, e) {
   var i = this.value() || 0;
   this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
    value: i
   }) === !1 || (this._value(i), this.counter++)
  },
  _increment: function (e) {
   var i = this.options.incremental;
   return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
  },
  _precision: function () {
   var t = this._precisionOf(this.options.step);
   return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
  },
  _precisionOf: function (t) {
   var e = "" + t,
    i = e.indexOf(".");
   return -1 === i ? 0 : e.length - i - 1
  },
  _adjustValue: function (t) {
   var e,
    i,
    s = this.options;
   return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
  },
  _stop: function (t) {
   this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
  },
  _setOption: function (t, e) {
   var i,
    s,
    n;
   return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
  },
  _setOptionDisabled: function (t) {
   this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
  },
  _setOptions: r(function (t) {
   this._super(t)
  }),
  _parse: function (t) {
   return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
  },
  _format: function (t) {
   return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
  },
  _refresh: function () {
   this.element.attr({
    "aria-valuemin": this.options.min,
    "aria-valuemax": this.options.max,
    "aria-valuenow": this._parse(this.element.val())
   })
  },
  isValid: function () {
   var t = this.value();
   return null === t ? !1 : t === this._adjustValue(t)
  },
  _value: function (t, e) {
   var i;
   "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
  },
  _destroy: function () {
   this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
  },
  stepUp: r(function (t) {
   this._stepUp(t)
  }),
  _stepUp: function (t) {
   this._start() && (this._spin((t || 1) * this.options.step), this._stop())
  },
  stepDown: r(function (t) {
   this._stepDown(t)
  }),
  _stepDown: function (t) {
   this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
  },
  pageUp: r(function (t) {
   this._stepUp((t || 1) * this.options.page)
  }),
  pageDown: r(function (t) {
   this._stepDown((t || 1) * this.options.page)
  }),
  value: function (t) {
   return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
  },
  widget: function () {
   return this.uiSpinner
  }
 }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
  _enhance: function () {
   this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
  },
  _uiSpinnerHtml: function () {
   return "<span>"
  },
  _buttonHtml: function () {
   return "<a></a><a></a>"
  }
 }), t.ui.spinner, t.widget("ui.tabs", {
  version: "1.12.1",
  delay: 300,
  options: {
   active: null,
   classes: {
    "ui-tabs": "ui-corner-all",
    "ui-tabs-nav": "ui-corner-all",
    "ui-tabs-panel": "ui-corner-bottom",
    "ui-tabs-tab": "ui-corner-top"
   },
   collapsible: !1,
   event: "click",
   heightStyle: "content",
   hide: null,
   show: null,
   activate: null,
   beforeActivate: null,
   beforeLoad: null,
   load: null
  },
  _isLocal: function () {
   var t = /#.*$/;
   return function (e) {
    var i,
     s;
    i = e.href.replace(t, ""), s = location.href.replace(t, "");
    try {
     i = decodeURIComponent(i)
    } catch (n) {}
    try {
     s = decodeURIComponent(s)
    } catch (n) {}
    return e.hash.length > 1 && i === s
   }
  }(),
  _create: function () {
   var e = this,
    i = this.options;
   this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
    return e.tabs.index(t)
   }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
  },
  _initialActive: function () {
   var e = this.options.active,
    i = this.options.collapsible,
    s = location.hash.substring(1);
   return null === e && (s && this.tabs.each(function (i, n) {
    return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
   }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
  },
  _getCreateEventData: function () {
   return {
    tab: this.active,
    panel: this.active.length ? this._getPanelForTab(this.active) : t()
   }
  },
  _tabKeydown: function (e) {
   var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
    s = this.tabs.index(i),
    n = !0;
   if (!this._handlePageNav(e)) {
    switch (e.keyCode) {
     case t.ui.keyCode.RIGHT:
     case t.ui.keyCode.DOWN:
      s++;
      break;
     case t.ui.keyCode.UP:
     case t.ui.keyCode.LEFT:
      n = !1, s--;
      break;
     case t.ui.keyCode.END:
      s = this.anchors.length - 1;
      break;
     case t.ui.keyCode.HOME:
      s = 0;
      break;
     case t.ui.keyCode.SPACE:
      return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
     case t.ui.keyCode.ENTER:
      return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
     default:
      return
    }
    e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
     this.option("active", s)
    }, this.delay))
   }
  },
  _panelKeydown: function (e) {
   this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
  },
  _handlePageNav: function (e) {
   return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
  },
  _findNextTab: function (e, i) {
   function s() {
    return e > n && (e = 0), 0 > e && (e = n), e
   }
   for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);)
    e = i ? e + 1 : e - 1;
   return e
  },
  _focusNextTab: function (t, e) {
   return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
  },
  _setOption: function (t, e) {
   return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
  },
  _sanitizeSelector: function (t) {
   return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
  },
  refresh: function () {
   var e = this.options,
    i = this.tablist.children(":has(a[href])");
   e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
    return i.index(t)
   }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
  },
  _refresh: function () {
   this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
    "aria-selected": "false",
    "aria-expanded": "false",
    tabIndex: -1
   }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
    "aria-hidden": "true"
   }), this.active.length ? (this.active.attr({
    "aria-selected": "true",
    "aria-expanded": "true",
    tabIndex: 0
   }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
    "aria-hidden": "false"
   })) : this.tabs.eq(0).attr("tabIndex", 0)
  },
  _processTabs: function () {
   var e = this,
    i = this.tabs,
    s = this.anchors,
    n = this.panels;
   this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
    t(this).is(".ui-state-disabled") && e.preventDefault()
   }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
    t(this).closest("li").is(".ui-state-disabled") && this.blur()
   }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
    role: "tab",
    tabIndex: -1
   }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
    return t("a", this)[0]
   }).attr({
    role: "presentation",
    tabIndex: -1
   }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
    var n,
     o,
     a,
     r = t(s).uniqueId().attr("id"),
     h = t(s).closest("li"),
     l = h.attr("aria-controls");
    e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
     "aria-controls": a,
     "aria-labelledby": r
    }), o.attr("aria-labelledby", r)
   }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
  },
  _getList: function () {
   return this.tablist || this.element.find("ol, ul").eq(0)
  },
  _createPanel: function (e) {
   return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
  },
  _setOptionDisabled: function (e) {
   var i,
    s,
    n;
   for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++)
    i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
   this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
  },
  _setupEvents: function (e) {
   var i = {};
   e && t.each(e.split(" "), function (t, e) {
    i[e] = "_eventHandler"
   }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
    click: function (t) {
     t.preventDefault()
    }
   }), this._on(this.anchors, i), this._on(this.tabs, {
    keydown: "_tabKeydown"
   }), this._on(this.panels, {
    keydown: "_panelKeydown"
   }), this._focusable(this.tabs), this._hoverable(this.tabs)
  },
  _setupHeightStyle: function (e) {
   var i,
    s = this.element.parent();
   "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
    var e = t(this),
     s = e.css("position");
    "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
   }), this.element.children().not(this.panels).each(function () {
    i -= t(this).outerHeight(!0)
   }), this.panels.each(function () {
    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
   }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
    i = Math.max(i, t(this).height("").height())
   }).height(i))
  },
  _eventHandler: function (e) {
   var i = this.options,
    s = this.active,
    n = t(e.currentTarget),
    o = n.closest("li"),
    a = o[0] === s[0],
    r = a && i.collapsible,
    h = r ? t() : this._getPanelForTab(o),
    l = s.length ? this._getPanelForTab(s) : t(),
    c = {
     oldTab: s,
     oldPanel: l,
     newTab: r ? t() : o,
     newPanel: h
    };
   e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
  },
  _toggle: function (e, i) {
   function s() {
    o.running = !1, o._trigger("activate", e, i)
   }

   function n() {
    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
   }
   var o = this,
    a = i.newPanel,
    r = i.oldPanel;
   this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
   }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
    "aria-selected": "false",
    "aria-expanded": "false"
   }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
    return 0 === t(this).attr("tabIndex")
   }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
    "aria-selected": "true",
    "aria-expanded": "true",
    tabIndex: 0
   })
  },
  _activate: function (e) {
   var i,
    s = this._findActive(e);
   s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
    target: i,
    currentTarget: i,
    preventDefault: t.noop
   }))
  },
  _findActive: function (e) {
   return e === !1 ? t() : this.tabs.eq(e)
  },
  _getIndex: function (e) {
   return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
  },
  _destroy: function () {
   this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
   }), this.tabs.each(function () {
    var e = t(this),
     i = e.data("ui-tabs-aria-controls");
    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
   }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
  },
  enable: function (e) {
   var i = this.options.disabled;
   i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
    return t !== e ? t : null
   }) : t.map(this.tabs, function (t, i) {
    return i !== e ? i : null
   })), this._setOptionDisabled(i))
  },
  disable: function (e) {
   var i = this.options.disabled;
   if (i !== !0) {
    if (void 0 === e)
     i = !0;
    else {
     if (e = this._getIndex(e), -1 !== t.inArray(e, i))
      return;
     i = t.isArray(i) ? t.merge([e], i).sort() : [e]
    }
    this._setOptionDisabled(i)
   }
  },
  load: function (e, i) {
   e = this._getIndex(e);
   var s = this,
    n = this.tabs.eq(e),
    o = n.find(".ui-tabs-anchor"),
    a = this._getPanelForTab(n),
    r = {
     tab: n,
     panel: a
    },
    h = function (t, e) {
     "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
    };
   this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
    setTimeout(function () {
     a.html(t), s._trigger("load", i, r), h(n, e)
    }, 1)
   }).fail(function (t, e) {
    setTimeout(function () {
     h(t, e)
    }, 1)
   })))
  },
  _ajaxSettings: function (e, i, s) {
   var n = this;
   return {
    url: e.attr("href").replace(/#.*$/, ""),
    beforeSend: function (e, o) {
     return n._trigger("beforeLoad", i, t.extend({
      jqXHR: e,
      ajaxSettings: o
     }, s))
    }
   }
  },
  _getPanelForTab: function (e) {
   var i = t(e).attr("aria-controls");
   return this.element.find(this._sanitizeSelector("#" + i))
  }
 }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
  _processTabs: function () {
   this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
  }
 }), t.ui.tabs, t.widget("ui.tooltip", {
  version: "1.12.1",
  options: {
   classes: {
    "ui-tooltip": "ui-corner-all ui-widget-shadow"
   },
   content: function () {
    var e = t(this).attr("title") || "";
    return t("<a>").text(e).html()
   },
   hide: !0,
   items: "[title]:not([disabled])",
   position: {
    my: "left top+15",
    at: "left bottom",
    collision: "flipfit flip"
   },
   show: !0,
   track: !1,
   close: null,
   open: null
  },
  _addDescribedBy: function (e, i) {
   var s = (e.attr("aria-describedby") || "").split(/\s+/);
   s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
  },
  _removeDescribedBy: function (e) {
   var i = e.data("ui-tooltip-id"),
    s = (e.attr("aria-describedby") || "").split(/\s+/),
    n = t.inArray(i, s); -
   1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
  },
  _create: function () {
   this._on({
    mouseover: "open",
    focusin: "open"
   }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
    role: "log",
    "aria-live": "assertive",
    "aria-relevant": "additions"
   }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
  },
  _setOption: function (e, i) {
   var s = this;
   this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
    s._updateContent(e.element)
   })
  },
  _setOptionDisabled: function (t) {
   this[t ? "_disable" : "_enable"]()
  },
  _disable: function () {
   var e = this;
   t.each(this.tooltips, function (i, s) {
    var n = t.Event("blur");
    n.target = n.currentTarget = s.element[0], e.close(n, !0)
   }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
    var e = t(this);
    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
   }))
  },
  _enable: function () {
   this.disabledTitles.each(function () {
    var e = t(this);
    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
   }), this.disabledTitles = t([])
  },
  open: function (e) {
   var i = this,
    s = t(e ? e.target : this.element).closest(this.options.items);
   s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
    var e,
     s = t(this);
    s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
     element: this,
     title: s.attr("title")
    }, s.attr("title", ""))
   }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
  },
  _updateContent: function (t, e) {
   var i,
    s = this.options.content,
    n = this,
    o = e ? e.type : null;
   return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
    n._delay(function () {
     t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
    })
   }), i && this._open(e, t, i), void 0)
  },
  _open: function (e, i, s) {
   function n(t) {
    l.of = t, a.is(":hidden") || a.position(l)
   }
   var o,
    a,
    r,
    h,
    l = t.extend({}, this.options.position);
   if (s) {
    if (o = this._find(i))
     return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
     mousemove: n
    }), n(e)) : a.position(t.extend({
     of: i
    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
     a.is(":visible") && (n(l.of), clearInterval(r))
    }, t.fx.interval)), this._trigger("open", e, {
     tooltip: a
    })
   }
  },
  _registerCloseHandlers: function (e, i) {
   var s = {
    keyup: function (e) {
     if (e.keyCode === t.ui.keyCode.ESCAPE) {
      var s = t.Event(e);
      s.currentTarget = i[0], this.close(s, !0)
     }
    }
   };
   i[0] !== this.element[0] && (s.remove = function () {
    this._removeTooltip(this._find(i).tooltip)
   }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
  },
  close: function (e) {
   var i,
    s = this,
    n = t(e ? e.currentTarget : this.element),
    o = this._find(n);
   return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
    s._removeTooltip(t(this))
   }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
    t(i.element).attr("title", i.title), delete s.parents[e]
   }), o.closing = !0, this._trigger("close", e, {
    tooltip: i
   }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
  },
  _tooltip: function (e) {
   var i = t("<div>").attr("role", "tooltip"),
    s = t("<div>").appendTo(i),
    n = i.uniqueId().attr("id");
   return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
    element: e,
    tooltip: i
   }
  },
  _find: function (t) {
   var e = t.data("ui-tooltip-id");
   return e ? this.tooltips[e] : null
  },
  _removeTooltip: function (t) {
   t.remove(), delete this.tooltips[t.attr("id")]
  },
  _appendTo: function (t) {
   var e = t.closest(".ui-front, dialog");
   return e.length || (e = this.document[0].body), e
  },
  _destroy: function () {
   var e = this;
   t.each(this.tooltips, function (i, s) {
    var n = t.Event("blur"),
     o = s.element;
    n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
   }), this.liveRegion.remove()
  }
 }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
  options: {
   tooltipClass: null
  },
  _tooltip: function () {
   var t = this._superApply(arguments);
   return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
  }
 }), t.ui.tooltip
});

// 3. jquery.countTo
! function (a) {
 "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
 function c(a, b) {
  return a.toFixed(b.decimals)
 }
 var b = function (c, d) {
  this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, this.dataOptions(), d), this.init()
 };
 b.DEFAULTS = {
  from: 0,
  to: 0,
  speed: 1e3,
  refreshInterval: 100,
  decimals: 0,
  formatter: c,
  onUpdate: null,
  onComplete: null
 }, b.prototype.init = function () {
  this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
 }, b.prototype.dataOptions = function () {
  var a = {
    from: this.$element.data("from"),
    to: this.$element.data("to"),
    speed: this.$element.data("speed"),
    refreshInterval: this.$element.data("refresh-interval"),
    decimals: this.$element.data("decimals")
   },
   b = Object.keys(a);
  for (var c in b) {
   var d = b[c];
   "undefined" == typeof a[d] && delete a[d]
  }
  return a
 }, b.prototype.update = function () {
  this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
 }, b.prototype.render = function () {
  var a = this.options.formatter.call(this.$element, this.value, this.options);
  this.$element.text(a)
 }, b.prototype.restart = function () {
  this.stop(), this.init(), this.start()
 }, b.prototype.start = function () {
  this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
 }, b.prototype.stop = function () {
  this.interval && clearInterval(this.interval)
 }, b.prototype.toggle = function () {
  this.interval ? this.stop() : this.start()
 }, a.fn.countTo = function (c) {
  return this.each(function () {
   var d = a(this),
    e = d.data("countTo"),
    f = !e || "object" == typeof c,
    g = "object" == typeof c ? c : {},
    h = "string" == typeof c ? c : "start";
   f && (e && e.stop(), d.data("countTo", e = new b(this, g))), e[h].call(e)
  })
 }
});

// 4. jquery.appear
! function (a) {
 a.fn.appear = function (b, c) {
  var d = a.extend({
   data: void 0,
   one: !0,
   accX: 0,
   accY: 0
  }, c);
  return this.each(function () {
   var c = a(this);
   if (c.appeared = !1, !b)
    return void c.trigger("appear", d.data);
   var e = a(window),
    f = function () {
     if (!c.is(":visible"))
      return void(c.appeared = !1);
     var a = e.scrollLeft(),
      b = e.scrollTop(),
      f = c.offset(),
      g = f.left,
      h = f.top,
      i = d.accX,
      j = d.accY,
      k = c.height(),
      l = e.height(),
      m = c.width(),
      n = e.width();
     h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
    },
    g = function () {
     if (c.appeared = !0, d.one) {
      e.unbind("scroll", f);
      var g = a.inArray(f, a.fn.appear.checks);
      g >= 0 && a.fn.appear.checks.splice(g, 1)
     }
     b.apply(this, arguments)
    };
   d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
  })
 }, a.extend(a.fn.appear, {
  checks: [],
  timeout: null,
  checkAll: function () {
   var b = a.fn.appear.checks.length;
   if (b > 0)
    for (; b--;)
     a.fn.appear.checks[b]()
  },
  run: function () {
   a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
  }
 }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (b, c) {
  var d = a.fn[c];
  d && (a.fn[c] = function () {
   var b = d.apply(this, arguments);
   return a.fn.appear.run(), b
  })
 })
}(jQuery);

// 5. jquery-css-skills-bar
/*!
 * https://github.com/umarwebdeveloper/jquery-css-skills-bar
 * Author: @umarwebdeveloper
 * Licensed under the MIT license
 */
! function (a) {
 a.fn.skillBars = function (b) {
  var c = a.extend({
   from: 0,
   to: !1,
   speed: 1e3,
   interval: 100,
   decimals: 0,
   onUpdate: null,
   onComplete: null,
   classes: {
    skillBarBar: ".skillbar-bar",
    skillBarPercent: ".skill-bar-percent"
   }
  }, b);
  return this.each(function () {
   function j() {
    e += g, h++, a(b).find(c.classes.skillBarPercent).text(e.toFixed(c.decimals) + "%"), "function" == typeof c.onUpdate && c.onUpdate.call(b, e), h >= f && (clearInterval(i), e = d, "function" == typeof c.onComplete && c.onComplete.call(b, e))
   }
   var b = a(this),
    d = 0 != c.to ? c.to : parseInt(b.attr("data-percent"));
   d > 100 && (d = 100);
   var e = c.from,
    f = Math.ceil(c.speed / c.interval),
    g = (d - e) / f,
    h = 0,
    i = setInterval(j, c.interval);
   b.find(c.classes.skillBarBar).animate({
    width: parseInt(b.attr("data-percent")) + "%"
   }, c.speed)
  })
 }
}(jQuery);

// 6. parallax
$(function () {
 "use strict";

 function b() {
  var b = $(this).outerHeight(),
   c = b / 2,
   d = a / 2,
   e = $(this).offset().top,
   f = $(window).scrollTop(),
   g = $(this).attr("data-parallax-speed"),
   h = e - a,
   i = e + b,
   j = e - a,
   k = c + e - (d + d / 2);
  h < 0 && (h = 0, i = a);
  var l = (f - h) / (i - h);
  l *= 100, l *= g, l = l.toFixed(2);
  var m = (f - j) / (k - j);
  m = m.toFixed(2), m >= 1 && (m = 1), $(this).css("background-position", "center " + l + "%")
 }
 var a = $(window).height();
 $(".parallax").each(b), $(window).on("scroll", function (a) {
  $(".parallax").each(b)
 })
});

// 7. jquery.mb.YTPlayer v3.1.4
/*jquery.mb.YTPlayer 23-11-2017
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
 ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(a) {
 return a.replace(/([A-Z])/g, function (a) {
  return "-" + a.toLowerCase()
 })
}

function setUnit(a, b) {
 return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}

function setFilter(a, b, c) {
 var d = uncamel(b),
  e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
 a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b]
}

function isTouchSupported() {
 var a = nAgt.msMaxTouchPoints,
  b = "ontouchstart" in document.createElement("div");
 return a || b ? !0 : !1
}

function isTouchSupported() {
 var a = nAgt.msMaxTouchPoints,
  b = "ontouchstart" in document.createElement("div");
 return a || b ? !0 : !1
}
var ytp = ytp || {},
 getYTPVideoID = function (a) {
  var b,
   c;
  return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
   videoID: b,
   playlistID: c
  }
 };
! function (jQuery, ytp) {
 jQuery.mbYTPlayer = {
  name: "jquery.mb.YTPlayer",
  version: "3.1.4",
  build: "6517",
  author: "Matteo Bicocchi (pupunzi)",
  apiKey: "",
  defaults: {
   containment: "body",
   ratio: "auto",
   videoURL: null,
   playlistURL: null,
   startAt: 0,
   stopAt: 0,
   autoPlay: !0,
   vol: 50,
   addRaster: !1,
   mask: !1,
   opacity: 1,
   quality: "default",
   mute: !1,
   loop: !0,
   fadeOnStartTime: 500,
   showControls: !0,
   showAnnotations: !1,
   showYTLogo: !0,
   stopMovieOnBlur: !0,
   realfullscreen: !0,
   mobileFallbackImage: null,
   gaTrack: !0,
   optimizeDisplay: !0,
   remember_last_time: !1,
   playOnlyIfVisible: !1,
   anchor: "center,center",
   onReady: function (a) {},
   onError: function (a, b) {}
  },
  controls: {
   play: "P",
   pause: "p",
   mute: "M",
   unmute: "A",
   onlyYT: "O",
   showSite: "R",
   ytLogo: "Y"
  },
  controlBar: null,
  locationProtocol: "https:",
  filters: {
   grayscale: {
    value: 0,
    unit: "%"
   },
   hue_rotate: {
    value: 0,
    unit: "deg"
   },
   invert: {
    value: 0,
    unit: "%"
   },
   opacity: {
    value: 0,
    unit: "%"
   },
   saturate: {
    value: 0,
    unit: "%"
   },
   sepia: {
    value: 0,
    unit: "%"
   },
   brightness: {
    value: 0,
    unit: "%"
   },
   contrast: {
    value: 0,
    unit: "%"
   },
   blur: {
    value: 0,
    unit: "px"
   }
  },
  buildPlayer: function (options) {
   return this.each(function () {
    var YTPlayer = this,
     $YTPlayer = jQuery(YTPlayer);
    YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = 0, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
    var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
    "undefined" != typeof property && "undefined" != typeof property.vol && 0 === property.vol && (property.vol = 1, property.mute = !0), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
    var isIframe = function () {
     var a = !1;
     try {
      self.location.href != top.location.href && (a = !0)
     } catch (b) {
      a = !0
     }
     return a
    };
    YTPlayer.opt.realfullscreen = isIframe() ? !1 : YTPlayer.opt.realfullscreen, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime());
    var playerID = "iframe_" + YTPlayer.id;
    YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3";
    var start_from_last = 0;
    jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID));
    var playerVars = {
     modestbranding: 1,
     autoplay: 0,
     controls: 0,
     showinfo: 0,
     rel: 0,
     enablejsapi: 1,
     version: 3,
     playerapiid: playerID,
     origin: "*",
     allowfullscreen: !0,
     wmode: "transparent",
     iv_load_policy: YTPlayer.opt.showAnnotations,
     playsinline: jQuery.browser.mobile ? 1 : 0
    };
    if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
      html5: 1
     }), jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (this.opt.opacity = 1), YTPlayer.isPlayer = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
      position: "relative",
      maxWidth: YTPlayer.opt.containment.css("width")
     }), YTPlayer.opt.containment.width("100%"), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper), YTPlayer.opt.containment.css({
      position: "relative",
      paddingBottom: "56.25%",
      overflow: "hidden",
      height: 0
     })), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
     YTPlayer.isPlayer || $YTPlayer.hide(), YTPlayer.overlay = jQuery("<div/>").css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
     }).addClass("YTPOverlay"), YTPlayer.isPlayer && YTPlayer.overlay.on("click", function () {
      $YTPlayer.YTPTogglePlay()
     }), YTPlayer.wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id), YTPlayer.wrapper.css({
      position: "absolute",
      zIndex: 0,
      minWidth: "100%",
      minHeight: "100%",
      left: 0,
      top: 0,
      overflow: "hidden",
      opacity: 0
     });
     var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
     if (playerBox.css({
       position: "absolute",
       zIndex: 0,
       width: "100%",
       height: "100%",
       top: 0,
       left: 0,
       overflow: "hidden"
      }), YTPlayer.wrapper.append(playerBox), playerBox.css({
       opacity: 1
      }), playerBox.after(YTPlayer.overlay), YTPlayer.opt.containment.children().not("script, style").each(function () {
       "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
      }), YTPlayer.isBackground ? (jQuery("body").css({
       boxSizing: "border-box"
      }), YTPlayer.wrapper.css({
       position: "fixed",
       top: 0,
       left: 0,
       zIndex: 0
      }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
       position: "relative"
      }), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
       YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
      }).on("mouseleave", function () {
       YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
      }), ytp.YTAPIReady)
      setTimeout(function () {
       jQuery(document).trigger("YTAPIReady")
      }, 100);
     else {
      jQuery("#YTAPI").remove();
      var tag = jQuery("<script></script>").attr({
       src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
       id: "YTAPI"
      });
      jQuery("head").prepend(tag)
     }
     if (jQuery.mbBrowser.mobile && YTPlayer.opt.mobileFallbackImage)
      return YTPlayer.opt.mobileFallbackImage && YTPlayer.wrapper.css({
       backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
       backgroundPosition: "center center",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       opacity: 1
      }), jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && jQuery("body").one("touchstart", function () {
       YTPlayer.player.playVideo()
      }), YTPlayer.isPlayer || $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
     jQuery(document).on("YTAPIReady", function () {
      YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
       YTPlayer.isInit || (YTPlayer.isInit = !0, new YT.Player(playerID, {
        videoId: YTPlayer.videoID.toString(),
        playerVars: playerVars,
        events: {
         onReady: function (a) {
          YTPlayer.player = a.target, YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
           $YTPlayer.optimizeDisplay()
          }), YTPlayer.opt.remember_last_time && jQuery(window).on("unload.YTP_" + YTPlayer.id, function () {
           var a = YTPlayer.player.getCurrentTime();
           jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer.videoID, a, 0)
          }), jQuery.mbYTPlayer.checkForState(YTPlayer))
         },
         onStateChange: function (event) {
          if ("function" == typeof event.target.getPlayerState) {
           var state = event.target.getPlayerState();
           if (YTPlayer.preventTrigger)
            return void(YTPlayer.preventTrigger = !1);
           YTPlayer.state = state;
           var eventType;
           switch (state) {
            case -1:
             eventType = "YTPUnstarted";
             break;
            case 0:
             eventType = "YTPRealEnd";
             break;
            case 1:
             eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
             break;
            case 2:
             eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
             break;
            case 3:
             YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
             break;
            case 5:
             eventType = "YTPCued"
           }
           var YTPEvent = jQuery.Event(eventType);
           YTPEvent.time = YTPlayer.currentTime, YTPlayer.preventTrigger || jQuery(YTPlayer).trigger(YTPEvent)
          }
         },
         onPlaybackQualityChange: function (a) {
          var b = a.target.getPlaybackQuality(),
           c = jQuery.Event("YTPQualityChange");
          c.quality = b, jQuery(YTPlayer).trigger(c)
         },
         onError: function (a) {
          150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
         }
        }
       }))
      }))
     }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
    }
   })
  },
  isOnScreen: function (a) {
   var b = a.wrapper,
    c = $(window).scrollTop(),
    d = c + $(window).height(),
    e = b.offset().top,
    f = e + b.height() / 2;
   return d >= f && e >= c
  },
  getDataFromAPI: function (a) {
   if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
     if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
      var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium;
      a.opt.containment.css({
       background: "rgba(0,0,0,0.5) url(" + b + ") center center",
       backgroundSize: "cover"
      }), a.opt.backgroundUrl = b
     }
    }), a.videoData)
    setTimeout(function () {
     a.opt.ratio = "auto" == a.opt.ratio ? 16 / 9 : a.opt.ratio, a.dataReceived = !0;
     var b = jQuery.Event("YTPChanged");
     b.time = a.currentTime, b.videoId = a.videoID, jQuery(a).trigger(b);
     var c = jQuery.Event("YTPData");
     c.prop = {};
     for (var d in a.videoData)
      c.prop[d] = a.videoData[d];
     jQuery(a).trigger(c)
    }, a.opt.fadeOnStartTime), a.hasData = !0;
   else if (jQuery.mbYTPlayer.apiKey)
    jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (b) {
     function c(b) {
      a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.aspectratio = "auto" == a.opt.ratio ? 16 / 9 : a.opt.ratio, a.opt.ratio = a.videoData.aspectratio, a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
     }
     a.dataReceived = !0;
     var d = jQuery.Event("YTPChanged");
     d.time = a.currentTime, d.videoId = a.videoID, jQuery(a).trigger(d), c(b.items[0].snippet), a.hasData = !0;
     var e = jQuery.Event("YTPData");
     e.prop = {};
     for (var f in a.videoData)
      e.prop[f] = a.videoData[f];
     jQuery(a).trigger(e)
    });
   else {
    if (setTimeout(function () {
      var b = jQuery.Event("YTPChanged");
      b.time = a.currentTime, b.videoId = a.videoID, jQuery(a).trigger(b)
     }, 50), a.isPlayer && !a.opt.autoPlay) {
     var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/maxresdefault.jpg";
     b && a.opt.containment.css({
      background: "rgba(0,0,0,0.5) url(" + b + ") center center",
      backgroundSize: "cover"
     }), a.opt.backgroundUrl = b
    }
    a.videoData = null, a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio
   }
   a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
  },
  removeStoredData: function () {
   jQuery.mbStorage.remove()
  },
  getVideoData: function () {
   var a = this.get(0);
   return a.videoData
  },
  getVideoID: function () {
   var a = this.get(0);
   return a.videoID || !1
  },
  setVideoQuality: function (a) {
   var b = this.get(0);
   b.player.setPlaybackQuality(a)
  },
  playlist: function (a, b, c) {
   var d = this,
    e = d.get(0);
   return e.isPlayList = !0, b && (a = jQuery.shuffle(a)), e.videoID || (e.videos = a, e.videoCounter = 0, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).mb_YTPlayer()), "function" == typeof c && jQuery(e).one("YTPChanged", function () {
    c(e)
   }), jQuery(e).on("YTPEnd", function () {
    jQuery(e).playNext()
   }), this
  },
  playNext: function () {
   var a = this.get(0);
   return a.checkForStartAt && (clearInterval(a.checkForStartAt), clearInterval(a.getState)), a.videoCounter++, a.videoCounter >= a.videoLength && (a.videoCounter = 0), jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]), this
  },
  playPrev: function () {
   var a = this.get(0);
   return a.checkForStartAt && (clearInterval(a.checkForStartAt), clearInterval(a.getState)), a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a).YTPChangeMovie(a.videos[a.videoCounter]), this
  },
  playIndex: function (a) {
   var b = this.get(0);
   return a -= 1, b.checkForStartAt && (clearInterval(b.checkForStartAt), clearInterval(b.getState)), b.videoCounter = a, b.videoCounter >= b.videoLength - 1 && (b.videoCounter = b.videoLength - 1), jQuery(b).YTPChangeMovie(b.videos[b.videoCounter]), this
  },
  changeMovie: function (a) {
   var b = this,
    c = b.get(0);
   c.opt.startAt = 0, c.opt.stopAt = 0, c.opt.mask = !1, c.opt.mute = !0, c.hasData = !1, c.hasChanged = !0, c.player.loopTime = void 0, a && jQuery.extend(c.opt, a), c.videoID = getYTPVideoID(c.opt.videoURL).videoID, "true" == c.opt.loop && (c.opt.loop = 9999), jQuery(c.playerEl).CSSAnimate({
    opacity: 0
   }, c.opt.fadeOnStartTime, function () {
    var a = jQuery.Event("YTPChangeMovie");
    a.time = c.currentTime, a.videoId = c.videoID, jQuery(c).trigger(a), jQuery(c).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + c.videoID), 1, c.opt.quality), jQuery(c).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(c), jQuery.mbYTPlayer.getDataFromAPI(c)
   }), jQuery.mbYTPlayer.applyMask(c)
  },
  getPlayer: function () {
   return jQuery(this).get(0).player
  },
  playerDestroy: function () {
   var a = this.get(0);
   return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null, a.isReady = !1, a.wrapper.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this
  },
  fullscreen: function (real) {
   function hideMouse() {
    YTPlayer.overlay.css({
     cursor: "none"
    })
   }

   function RunPrefixMethod(a, b) {
    for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
     if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d)
      return e = [e[f]], "function" == d ? a[c]() : a[c];
     f++
    }
   }

   function launchFullscreen(a) {
    RunPrefixMethod(a, "RequestFullScreen")
   }

   function cancelFullscreen() {
    (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
   }
   var YTPlayer = this.get(0);
   "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
   var controls = jQuery("#controlBar_" + YTPlayer.id),
    fullScreenBtn = controls.find(".mb_OnlyYT"),
    videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
   if (real) {
    var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
    jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
     var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
     a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
      opacity: YTPlayer.opt.opacity
     }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
      zIndex: 0
     }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
    })
   }
   return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
    cursor: "auto"
   }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
    opacity: YTPlayer.opt.opacity
   }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
    zIndex: 0
   })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (a) {
    YTPlayer.overlay.css({
     cursor: "auto"
    }), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
   }), hideMouse(), real ? (videoWrapper.css({
    opacity: 0
   }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
    videoWrapper.CSSAnimate({
     opacity: 1
    }, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
   }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
    zIndex: 1e4
   }).CSSAnimate({
    opacity: 1
   }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
  },
  toggleLoops: function () {
   var a = this.get(0),
    b = a.opt;
   return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this
  },
  play: function () {
   var a = this.get(0);
   if (!a.isReady)
    return this;
   a.player.playVideo(), a.wrapper.CSSAnimate({
    opacity: a.isAlone ? 1 : a.opt.opacity
   }, a.opt.fadeOnStartTime), jQuery(a.playerEl).is(":visible") || jQuery(a.playerEl).CSSAnimate({
    opacity: 1
   }, 2 * a.opt.fadeOnStartTime);
   var b = jQuery("#controlBar_" + a.id),
    c = b.find(".mb_YTPPlaypause");
   return c.html(jQuery.mbYTPlayer.controls.pause), a.state = 1, a.orig_background = jQuery(a).css("background-image"), this
  },
  togglePlay: function (a) {
   var b = this.get(0);
   return 1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this
  },
  stop: function () {
   var a = this.get(0),
    b = jQuery("#controlBar_" + a.id),
    c = b.find(".mb_YTPPlaypause");
   return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
  },
  pause: function () {
   var a = this.get(0);
   return a.player.pauseVideo(), a.state = 2, this
  },
  seekTo: function (a) {
   var b = this.get(0);
   return b.player.seekTo(a, !0), this
  },
  setVolume: function (a) {
   var b = this.get(0);
   if (b.player.length)
    return a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.opt.vol == a ? b.isMute ? jQuery(b).YTPUnmute() : jQuery(b).YTPMute() : (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a)) : jQuery(b).YTPUnmute(), this
  },
  toggleVolume: function () {
   var a = this.get(0);
   if (a)
    return a.player.isMuted() ? (jQuery(a).YTPUnmute(), !0) : (jQuery(a).YTPMute(), !1)
  },
  mute: function () {
   var a = this.get(0);
   if (!a.isMute) {
    a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
    var b = jQuery("#controlBar_" + a.id),
     c = b.find(".mb_YTPMuteUnmute");
    c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
    var d = jQuery.Event("YTPMuted");
    return d.time = a.currentTime, a.preventTrigger || jQuery(a).trigger(d), this
   }
  },
  unmute: function () {
   var a = this.get(0);
   if (a.isMute) {
    a.player.unMute(), a.isMute = !1, a.player.setVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
    var b = jQuery("#controlBar_" + a.id),
     c = b.find(".mb_YTPMuteUnmute");
    c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
    var d = jQuery.Event("YTPUnmuted");
    return d.time = a.currentTime, a.preventTrigger || jQuery(a).trigger(d), this
   }
  },
  applyFilter: function (a, b) {
   return this.each(function () {
    var c = this;
    c.filters[a].value = b, c.filtersEnabled && jQuery(c).YTPEnableFilters()
   })
  },
  applyFilters: function (a) {
   return this.each(function () {
    var b = this;
    if (!b.isReady)
     return void jQuery(b).on("YTPReady", function () {
      jQuery(b).YTPApplyFilters(a)
     });
    for (var c in a)
     jQuery(b).YTPApplyFilter(c, a[c]);
    jQuery(b).trigger("YTPFiltersApplied")
   })
  },
  toggleFilter: function (a, b) {
   return this.each(function () {
    var c = this;
    c.filters[a].value ? c.filters[a].value = 0 : c.filters[a].value = b, c.filtersEnabled && jQuery(this).YTPEnableFilters()
   })
  },
  toggleFilters: function (a) {
   return this.each(function () {
    var b = this;
    b.filtersEnabled ? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters()) : (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")), "function" == typeof a && a(b.filtersEnabled)
   })
  },
  disableFilters: function () {
   return this.each(function () {
    var a = this,
     b = jQuery(a.playerEl);
    b.css("-webkit-filter", ""), b.css("filter", ""), a.filtersEnabled = !1
   })
  },
  enableFilters: function () {
   return this.each(function () {
    var a = this,
     b = jQuery(a.playerEl),
     c = "";
    for (var d in a.filters)
     a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") ");
    b.css("-webkit-filter", c), b.css("filter", c), a.filtersEnabled = !0
   })
  },
  removeFilter: function (a, b) {
   return this.each(function () {
    var c = this;
    if ("function" == typeof a && (b = a, a = null), a)
     jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a);
    else
     for (var d in c.filters)
      jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d)
   })
  },
  getFilters: function () {
   var a = this.get(0);
   return a.filters
  },
  addMask: function (a) {
   var b = this.get(0);
   a || (a = b.actualMask);
   var c = jQuery("<img/>").attr("src", a).on("load", function () {
    b.overlay.CSSAnimate({
     opacity: 0
    }, b.opt.fadeOnStartTime, function () {
     b.hasMask = !0, c.remove(), b.overlay.css({
      backgroundImage: "url(" + a + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover"
     }), b.overlay.CSSAnimate({
      opacity: 1
     }, b.opt.fadeOnStartTime)
    })
   });
   return this
  },
  removeMask: function () {
   var a = this.get(0);
   return a.overlay.CSSAnimate({
    opacity: 0
   }, a.opt.fadeOnStartTime, function () {
    a.hasMask = !1, a.overlay.css({
     backgroundImage: "",
     backgroundRepeat: "",
     backgroundPosition: "",
     backgroundSize: ""
    }), a.overlay.CSSAnimate({
     opacity: 1
    }, a.opt.fadeOnStartTime)
   }), this
  },
  applyMask: function (a) {
   var b = jQuery(a);
   if (b.off("YTPTime.mask"), a.opt.mask)
    if ("string" == typeof a.opt.mask)
     b.YTPAddMask(a.opt.mask), a.actualMask = a.opt.mask;
    else if ("object" == typeof a.opt.mask) {
    for (var c in a.opt.mask)
     if (a.opt.mask[c]) {
      jQuery("<img/>").attr("src", a.opt.mask[c])
     }
    a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]), b.on("YTPTime.mask", function (c) {
     for (var d in a.opt.mask)
      c.time == d && (a.opt.mask[d] ? (b.YTPAddMask(a.opt.mask[d]), a.actualMask = a.opt.mask[d]) : b.YTPRemoveMask())
    })
   }
   return this
  },
  toggleMask: function () {
   var a = this.get(0),
    b = $(a);
   return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(), this
  },
  manageProgress: function () {
   var a = this.get(0),
    b = jQuery("#controlBar_" + a.id),
    c = b.find(".mb_YTPProgress"),
    d = b.find(".mb_YTPLoaded"),
    e = b.find(".mb_YTPseekbar"),
    f = c.outerWidth(),
    g = Math.floor(a.player.getCurrentTime()),
    h = Math.floor(a.player.getDuration()),
    i = g * f / h,
    j = 0,
    k = 100 * a.player.getVideoLoadedFraction();
   return d.css({
    left: j,
    width: k + "%"
   }), e.css({
    left: 0,
    width: i
   }), {
    totalTime: h,
    currentTime: g
   }
  },
  buildControls: function (YTPlayer) {
   var data = YTPlayer.opt;
   if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
    YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
     whiteSpace: "noWrap",
     position: YTPlayer.isBackground ? "fixed" : "absolute",
     zIndex: YTPlayer.isBackground ? 1e4 : 1e3
    }).hide();
    var buttonBar = jQuery("<div/>").addClass("buttonBar"),
     playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
      1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
     }),
     MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
      0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
     }),
     volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
      display: "inline-block"
     });
    YTPlayer.volumeBar = volumeBar;
    var idx = jQuery("<span/>").addClass("mb_YTPTime"),
     vURL = data.videoURL ? data.videoURL : "";
    vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
    var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
      window.open(vURL, "viewOnYT")
     }),
     onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
      jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
     }),
     progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (a) {
      timeBar.css({
       width: a.clientX - timeBar.offset().left
      }), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
       width: 0
      });
      var b = Math.floor(YTPlayer.player.getDuration());
      YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
       width: 0
      })
     }),
     loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
     timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
    progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
     initialval: YTPlayer.opt.vol,
     scale: 100,
     orientation: "h",
     callback: function (a) {
      0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
     }
    })
   }
  },
  checkForState: function (YTPlayer) {
   var interval = YTPlayer.opt.showControls ? 100 : 400;
   return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
    var prog = jQuery(YTPlayer).YTPManageProgress(),
     $YTPlayer = jQuery(YTPlayer),
     data = YTPlayer.opt,
     startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
    YTPlayer.start_from_last = null;
    var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
     var YTPEvent = jQuery.Event("YTPTime");
     YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
    }
    if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
     var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
     isOnScreen ? $YTPlayer.YTPPlay() : $YTPlayer.YTPPause()
    }
    if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
     if (YTPlayer.isEnded)
      return;
     if (YTPlayer.isEnded = !0, setTimeout(function () {
       YTPlayer.isEnded = !1
      }, 1e3), YTPlayer.isPlayList) {
      if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
       YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
       var YTPEnd = jQuery.Event("YTPEnd");
       return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
      }
     } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)
      return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
       opacity: 0
      }, YTPlayer.opt.fadeOnStartTime, function () {
       YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
       var a = jQuery.Event("YTPEnd");
       a.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground ? YTPlayer.orig_background && jQuery(YTPlayer).css("background-image", YTPlayer.orig_background) : YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer && (YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background, YTPlayer.opt.containment.css({
        background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
        backgroundSize: "cover"
       }))
      });
     YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
    }
   }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
  },
  checkForStart: function (a) {
   var b = jQuery(a);
   if (!jQuery.contains(document, a))
    return void jQuery(a).YTPPlayerDestroy();
   if (a.preventTrigger = !0, a.state = 2, jQuery(a).YTPPlay(), jQuery(a).YTPPause(), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.controlBar = !1, a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.overlay)
    if (a.opt.addRaster) {
     var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
     a.overlay.addClass(a.isRetina ? c + " retina" : c)
    } else
     a.overlay.removeClass(function (a, b) {
      var c = b.split(" "),
       d = [];
      return jQuery.each(c, function (a, b) {
       /raster.*/.test(b) && d.push(b)
      }), d.push("retina"), d.join(" ")
     });
   var d = a.start_from_last ? a.start_from_last : a.opt.startAt ? a.opt.startAt : 1;
   a.start_from_last = null, a.player.playVideo(), a.player.seekTo(d, !0), clearInterval(a.checkForStartAt), jQuery(a).YTPMute(), a.checkForStartAt = setInterval(function () {
    var c = a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
    if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= d && c) {
     clearInterval(a.checkForStartAt), "function" == typeof a.opt.onReady && a.opt.onReady(a), a.isReady = !0;
     var e = jQuery.Event("YTPReady");
     if (e.time = a.currentTime, jQuery(a).trigger(e), a.preventTrigger = !0, a.state = 2, jQuery(a).YTPPause(), a.opt.mute || jQuery(a).YTPUnmute(), a.preventTrigger = !1, a.opt.autoPlay) {
      b.YTPPlay();
      var f = jQuery.Event("YTPStart");
      f.time = a.currentTime, jQuery(a).trigger(f), jQuery(a.playerEl).css({
       opacity: 1
      }), a.wrapper.CSSAnimate({
       opacity: a.isAlone ? 1 : a.opt.opacity
      }, 2 * a.opt.fadeOnStartTime), "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (a.safariPlay = setInterval(function () {
       1 != a.state ? b.YTPPlay() : clearInterval(a.safariPlay)
      }, 10)), b.one("YTPReady", function () {
       b.YTPPlay()
      })
     } else
      setTimeout(function () {
       a.player.pauseVideo(), a.player.seekTo(d, !0), a.isPlayer || (jQuery(a.playerEl).CSSAnimate({
        opacity: 1
       }, a.opt.fadeOnStartTime), a.wrapper.CSSAnimate({
        opacity: a.isAlone ? 1 : a.opt.opacity
       }, a.opt.fadeOnStartTime))
      }, 250), a.controlBar.length && a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
     a.isPlayer && !a.opt.autoPlay && a.loading && a.loading.length && (a.loading.html("Ready"), setTimeout(function () {
      a.loading.fadeOut()
     }, 100)), a.controlBar && a.controlBar.length && a.controlBar.slideDown(1e3)
    } else
     "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (a.player.playVideo(), d >= 0 && a.player.seekTo(d, !0))
   }, 100)
  },
  getTime: function () {
   var a = this.get(0);
   return jQuery.mbYTPlayer.formatTime(a.currentTime)
  },
  getTotalTime: function () {
   var a = this.get(0);
   return jQuery.mbYTPlayer.formatTime(a.totalTime)
  },
  formatTime: function (a) {
   var b = Math.floor(a / 60),
    c = Math.floor(a - 60 * b);
   return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
  },
  setAnchor: function (a) {
   var b = this;
   b.optimizeDisplay(a)
  },
  getAnchor: function () {
   var a = this.get(0);
   return a.opt.anchor
  }
 }, jQuery.fn.optimizeDisplay = function (anchor) {
  var YTPlayer = this.get(0),
   vid = {};
  YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
  var YTPAlign = YTPlayer.opt.anchor.split(",");
  if (YTPlayer.opt.optimizeDisplay) {
   var abundance = YTPlayer.isPlayer ? 0 : 180,
    win = {},
    el = YTPlayer.wrapper;
   win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)), vid.marginLeft = 0;
   var lowest = vid.height < win.height;
   lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
   for (var a in YTPAlign)
    if (YTPAlign.hasOwnProperty(a)) {
     var al = YTPAlign[a].replace(/ /g, "");
     switch (al) {
      case "top":
       vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
       break;
      case "bottom":
       vid.marginTop = lowest ? 0 : -(vid.height - win.height);
       break;
      case "left":
       vid.marginLeft = 0;
       break;
      case "right":
       vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
       break;
      default:
       vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
     }
    }
  } else
   vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
  jQuery(YTPlayer.playerEl).css({
   width: vid.width,
   height: vid.height,
   marginTop: vid.marginTop,
   marginLeft: vid.marginLeft,
   maxWidth: "initial"
  })
 }, jQuery.shuffle = function (a) {
  for (var b = a.slice(), c = b.length, d = c; d--;) {
   var e = parseInt(Math.random() * c),
    f = b[d];
   b[d] = b[e], b[e] = f
  }
  return b
 }, jQuery.fn.unselectable = function () {
  return this.each(function () {
   jQuery(this).css({
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "user-select": "none"
   }).attr("unselectable", "on")
  })
 }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function () {
 var a = document.body || document.documentElement,
  b = a.style;
 return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(), jQuery.CSS = {
 name: "mb.CSSAnimate",
 author: "Matteo Bicocchi",
 version: "2.0.0",
 transitionEnd: "transitionEnd",
 sfx: "",
 filters: {
  blur: {
   min: 0,
   max: 100,
   unit: "px"
  },
  brightness: {
   min: 0,
   max: 400,
   unit: "%"
  },
  contrast: {
   min: 0,
   max: 400,
   unit: "%"
  },
  grayscale: {
   min: 0,
   max: 100,
   unit: "%"
  },
  hueRotate: {
   min: 0,
   max: 360,
   unit: "deg"
  },
  invert: {
   min: 0,
   max: 100,
   unit: "%"
  },
  saturate: {
   min: 0,
   max: 400,
   unit: "%"
  },
  sepia: {
   min: 0,
   max: 100,
   unit: "%"
  }
 },
 normalizeCss: function (a) {
  var b = jQuery.extend(!0, {}, a);
  jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
  for (var c in b) {
   "transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]), "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]);
   var d = "";
   "x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]), "y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
  }
  return b
 },
 getProp: function (a) {
  var b = [];
  for (var c in a)
   b.indexOf(c) < 0 && b.push(uncamel(c));
  return b.join(",")
 },
 animate: function (a, b, c, d, e) {
  return this.each(function () {
   function f() {
    g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
   }
   var g = this,
    h = jQuery(this);
   g.id = g.id || "CSSA_" + (new Date).getTime();
   var i = i || {
    type: "noEvent"
   };
   if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9)
    return void(g.CSSqueue = function () {
     h.CSSAnimate(a, b, c, d, e)
    });
   if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
    if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)
     for (var j in jQuery.fx.speeds) {
      if (b == j) {
       b = jQuery.fx.speeds[j];
       break
      }
      b = jQuery.fx.speeds._default
     }
    if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
     for (var k in a) {
      if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) {
       var l = a[k],
        m = "left";
       a[m] = l, delete a[k]
      }
      if ("y" === k) {
       var l = a[k],
        m = "top";
       a[m] = l, delete a[k]
      }
      ("-ms-transform" === k || "-ms-filter" === k) && delete a[k]
     }
     return void h.delay(c).animate(a, b, e)
    }
    var n = {
     "default": "ease",
     "in": "ease-in",
     out: "ease-out",
     "in-out": "ease-in-out",
     snap: "cubic-bezier(0,1,.5,1)",
     easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
     easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
     easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
     easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
     easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
     easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
     easeOutExpo: "cubic-bezier(.19,1,.22,1)",
     easeInOutExpo: "cubic-bezier(1,0,0,1)",
     easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
     easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
     easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
     easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
     easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
     easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
     easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
     easeOutQuint: "cubic-bezier(.23,1,.32,1)",
     easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
     easeInSine: "cubic-bezier(.47,0,.745,.715)",
     easeOutSine: "cubic-bezier(.39,.575,.565,1)",
     easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
     easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
     easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
     easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
    var o = jQuery.CSS.getProp(a),
     p = {};
    jQuery.extend(p, a), p[jQuery.CSS.sfx + "transition-property"] = o, p[jQuery.CSS.sfx + "transition-duration"] = b + "ms", p[jQuery.CSS.sfx + "transition-delay"] = c + "ms", p[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function () {
     h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p)
    }, 1), g.timeout = setTimeout(function () {
     return g.called || !e ? (g.called = !1, void(g.CSSAIsRunning = !1)) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)))
    }, b + c + 10)
   }
  })
 }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) {
 return this.each(function () {
  var b = jQuery(this),
   c = jQuery.normalizeCss(a);
  b.css(c)
 })
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
 var a = {
  version: "Unknown version",
  name: "Unknown OS"
 };
 return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset,
 verOffset,
 ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
 jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
 jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
 jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
 jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
 var start = nAgt.indexOf("rv:") + 3,
  end = start + 4;
 jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
 -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); -
1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (a, b) {
 if ("stringstring" != typeof a + typeof b)
  return !1;
 for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
  if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
   return 1;
  if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
   return -1
 }
 return 0
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
 var a = {
  version: "Unknown version",
  name: "Unknown OS"
 };
 return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], a.version = a.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"), a.name = a.name.toLowerCase(), a.major_version = "Unknown", a.minor_version = "Unknown", "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]), a.minor_version = parseFloat(a.version.split(".")[1])), a
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset,
 verOffset,
 ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
 jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
 jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
 jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
 jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
 var start = nAgt.indexOf("rv:") + 3,
  end = start + 4;
 jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
 -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); -
1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (a, b) {
  if ("stringstring" != typeof a + typeof b)
   return !1;
  for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
   if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
    return 1;
   if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
    return -1
  }
  return 0
 },
 function (a) {
  a.simpleSlider = {
   defaults: {
    initialval: 0,
    scale: 100,
    orientation: "h",
    readonly: !1,
    callback: !1
   },
   events: {
    start: a.browser.mobile ? "touchstart" : "mousedown",
    end: a.browser.mobile ? "touchend" : "mouseup",
    move: a.browser.mobile ? "touchmove" : "mousemove"
   },
   init: function (b) {
    return this.each(function () {
     var c = this,
      d = a(c);
     d.addClass("simpleSlider"), c.opt = {}, a.extend(c.opt, a.simpleSlider.defaults, b), a.extend(c.opt, d.data());
     var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
     e = a("<div/>").addClass("level").addClass(e), d.prepend(e), c.level = e, d.css({
      cursor: "default"
     }), "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()), d.updateSliderVal(), c.opt.readonly || (d.on(a.simpleSlider.events.start, function (b) {
      a.browser.mobile && (b = b.changedTouches[0]), c.canSlide = !0, d.updateSliderVal(b), "h" == c.opt.orientation ? d.css({
       cursor: "col-resize"
      }) : d.css({
       cursor: "row-resize"
      }), a.browser.mobile || (b.preventDefault(), b.stopPropagation())
     }), a(document).on(a.simpleSlider.events.move, function (b) {
      a.browser.mobile && (b = b.changedTouches[0]), c.canSlide && (a(document).css({
       cursor: "default"
      }), d.updateSliderVal(b), a.browser.mobile || (b.preventDefault(), b.stopPropagation()))
     }).on(a.simpleSlider.events.end, function () {
      a(document).css({
       cursor: "auto"
      }), c.canSlide = !1, d.css({
       cursor: "auto"
      })
     }))
    })
   },
   updateSliderVal: function (b) {
    var c = this.get(0);
    if (c.opt) {
     c.opt.initialval = "number" == typeof c.opt.initialval ? c.opt.initialval : c.opt.initialval(c);
     var d = a(c).outerWidth(),
      e = a(c).outerHeight();
     c.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof b ? b * d / c.opt.scale : c.opt.initialval * d / c.opt.scale, c.y = "object" == typeof b ? b.clientY + document.body.scrollTop - this.offset().top : "number" == typeof b ? (c.opt.scale - c.opt.initialval - b) * e / c.opt.scale : c.opt.initialval * e / c.opt.scale, c.y = this.outerHeight() - c.y, c.scaleX = c.x * c.opt.scale / d, c.scaleY = c.y * c.opt.scale / e, c.outOfRangeX = c.scaleX > c.opt.scale ? c.scaleX - c.opt.scale : 0 > c.scaleX ? c.scaleX : 0, c.outOfRangeY = c.scaleY > c.opt.scale ? c.scaleY - c.opt.scale : 0 > c.scaleY ? c.scaleY : 0, c.outOfRange = "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY, c.value = "undefined" != typeof b ? "h" == c.opt.orientation ? c.x >= this.outerWidth() ? c.opt.scale : 0 >= c.x ? 0 : c.scaleX : c.y >= this.outerHeight() ? c.opt.scale : 0 >= c.y ? 0 : c.scaleY : "h" == c.opt.orientation ? c.scaleX : c.scaleY, "h" == c.opt.orientation ? c.level.width(Math.floor(100 * c.x / d) + "%") : c.level.height(Math.floor(100 * c.y / e)), "function" == typeof c.opt.callback && c.opt.callback(c)
    }
   }
  }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
 }(jQuery),
 function (a) {
  a.mbCookie = {
   set: function (a, b, c, d) {
    "object" == typeof b && (b = JSON.stringify(b)), d = d ? "; domain=" + d : "";
    var e = new Date,
     f = "";
    c > 0 && (e.setTime(e.getTime() + 864e5 * c), f = "; expires=" + e.toGMTString()), document.cookie = a + "=" + b + f + "; path=/" + d
   },
   get: function (a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
     for (var d = b[c];
      " " == d.charAt(0);)
      d = d.substring(1, d.length);
     if (0 == d.indexOf(a))
      try {
       return JSON.parse(d.substring(a.length, d.length))
      } catch (e) {
       return d.substring(a.length, d.length)
      }
    }
    return null
   },
   remove: function (b) {
    a.mbCookie.set(b, "", -1)
   }
  }, a.mbStorage = {
   set: function (a, b) {
    "object" == typeof b && (b = JSON.stringify(b)), localStorage.setItem(a, b)
   },
   get: function (a) {
    if (!localStorage[a])
     return null;
    try {
     return JSON.parse(localStorage[a])
    } catch (b) {
     return localStorage[a]
    }
   },
   remove: function (a) {
    a ? localStorage.removeItem(a) : localStorage.clear()
   }
  }
 }(jQuery);

// 8. Slick v1.6.0
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function (a) {
 "use strict";
 "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
 "use strict";
 var b = window.Slick || {};
 b = function () {
  function c(c, d) {
   var f,
    e = this;
   e.defaults = {
    accessibility: !0,
    adaptiveHeight: !1,
    appendArrows: a(c),
    appendDots: a(c),
    arrows: !0,
    asNavFor: null,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    autoplay: !1,
    autoplaySpeed: 3e3,
    centerMode: !1,
    centerPadding: "50px",
    cssEase: "ease",
    customPaging: function (b, c) {
     return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: .35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: "ondemand",
    mobileFirst: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    pauseOnDotsHover: !1,
    respondTo: "window",
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "",
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: !0,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    verticalSwiping: !1,
    waitForAnimate: !0,
    zIndex: 1e3
   }, e.initials = {
    animating: !1,
    dragging: !1,
    autoPlayTimer: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    $dots: null,
    listWidth: null,
    listHeight: null,
    loadIndex: 0,
    $nextArrow: null,
    $prevArrow: null,
    slideCount: null,
    slideWidth: null,
    $slideTrack: null,
    $slides: null,
    sliding: !1,
    slideOffset: 0,
    swipeLeft: null,
    $list: null,
    touchObject: {},
    transformsEnabled: !1,
    unslicked: !1
   }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
  }
  var b = 0;
  return c
 }(), b.prototype.activateADA = function () {
  var a = this;
  a.$slideTrack.find(".slick-active").attr({
   "aria-hidden": "false"
  }).find("a, input, button, select").attr({
   tabindex: "0"
  })
 }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
  var e = this;
  if ("boolean" == typeof c)
   d = c, c = null;
  else if (0 > c || c >= e.slideCount)
   return !1;
  e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
   a(c).attr("data-slick-index", b)
  }), e.$slidesCache = e.$slides, e.reinit()
 }, b.prototype.animateHeight = function () {
  var a = this;
  if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
   var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
   a.$list.animate({
    height: b
   }, a.options.speed)
  }
 }, b.prototype.animateSlide = function (b, c) {
  var d = {},
   e = this;
  e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
   left: b
  }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
   top: b
  }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
   animStart: e.currentLeft
  }).animate({
   animStart: b
  }, {
   duration: e.options.speed,
   easing: e.options.easing,
   step: function (a) {
    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
   },
   complete: function () {
    c && c.call()
   }
  })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
   e.disableTransition(), c.call()
  }, e.options.speed))
 }, b.prototype.getNavTarget = function () {
  var b = this,
   c = b.options.asNavFor;
  return c && null !== c && (c = a(c).not(b.$slider)), c
 }, b.prototype.asNavFor = function (b) {
  var c = this,
   d = c.getNavTarget();
  null !== d && "object" == typeof d && d.each(function () {
   var c = a(this).slick("getSlick");
   c.unslicked || c.slideHandler(b, !0)
  })
 }, b.prototype.applyTransition = function (a) {
  var b = this,
   c = {};
  b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
 }, b.prototype.autoPlay = function () {
  var a = this;
  a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
 }, b.prototype.autoPlayClear = function () {
  var a = this;
  a.autoPlayTimer && clearInterval(a.autoPlayTimer)
 }, b.prototype.autoPlayIterator = function () {
  var a = this,
   b = a.currentSlide + a.options.slidesToScroll;
  a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
 }, b.prototype.buildArrows = function () {
  var b = this;
  b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
   "aria-disabled": "true",
   tabindex: "-1"
  }))
 }, b.prototype.buildDots = function () {
  var c,
   d,
   b = this;
  if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
   for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1)
    d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
   b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
  }
 }, b.prototype.buildOut = function () {
  var b = this;
  b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
   a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
  }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
 }, b.prototype.buildRows = function () {
  var b,
   c,
   d,
   e,
   f,
   g,
   h,
   a = this;
  if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
   for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
    var i = document.createElement("div");
    for (c = 0; c < a.options.rows; c++) {
     var j = document.createElement("div");
     for (d = 0; d < a.options.slidesPerRow; d++) {
      var k = b * h + (c * a.options.slidesPerRow + d);
      g.get(k) && j.appendChild(g.get(k))
     }
     i.appendChild(j)
    }
    e.appendChild(i)
   }
   a.$slider.empty().append(e), a.$slider.children().children().children().css({
    width: 100 / a.options.slidesPerRow + "%",
    display: "inline-block"
   })
  }
 }, b.prototype.checkResponsive = function (b, c) {
  var e,
   f,
   g,
   d = this,
   h = !1,
   i = d.$slider.width(),
   j = window.innerWidth || a(window).width();
  if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
   f = null;
   for (e in d.breakpoints)
    d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
   null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
  }
 }, b.prototype.changeSlide = function (b, c) {
  var f,
   g,
   h,
   d = this,
   e = a(b.currentTarget);
  switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
   case "previous":
    g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
    break;
   case "next":
    g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
    break;
   case "index":
    var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
    d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
    break;
   default:
    return
  }
 }, b.prototype.checkNavigable = function (a) {
  var c,
   d,
   b = this;
  if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])
   a = c[c.length - 1];
  else
   for (var e in c) {
    if (a < c[e]) {
     a = d;
     break
    }
    d = c[e]
   }
  return a
 }, b.prototype.cleanUpEvents = function () {
  var b = this;
  b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
 }, b.prototype.cleanUpSlideEvents = function () {
  var b = this;
  b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
 }, b.prototype.cleanUpRows = function () {
  var b,
   a = this;
  a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
 }, b.prototype.clickHandler = function (a) {
  var b = this;
  b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
 }, b.prototype.destroy = function (b) {
  var c = this;
  c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
   a(this).attr("style", a(this).data("originalStyling"))
  }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
 }, b.prototype.disableTransition = function (a) {
  var b = this,
   c = {};
  c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
 }, b.prototype.fadeSlide = function (a, b) {
  var c = this;
  c.cssTransitions === !1 ? (c.$slides.eq(a).css({
   zIndex: c.options.zIndex
  }), c.$slides.eq(a).animate({
   opacity: 1
  }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
   opacity: 1,
   zIndex: c.options.zIndex
  }), b && setTimeout(function () {
   c.disableTransition(a), b.call()
  }, c.options.speed))
 }, b.prototype.fadeSlideOut = function (a) {
  var b = this;
  b.cssTransitions === !1 ? b.$slides.eq(a).animate({
   opacity: 0,
   zIndex: b.options.zIndex - 2
  }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
   opacity: 0,
   zIndex: b.options.zIndex - 2
  }))
 }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
  var b = this;
  null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
 }, b.prototype.focusHandler = function () {
  var b = this;
  b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
   c.stopImmediatePropagation();
   var d = a(this);
   setTimeout(function () {
    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
   }, 0)
  })
 }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
  var a = this;
  return a.currentSlide
 }, b.prototype.getDotCount = function () {
  var a = this,
   b = 0,
   c = 0,
   d = 0;
  if (a.options.infinite === !0)
   for (; b < a.slideCount;)
    ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
  else if (a.options.centerMode === !0)
   d = a.slideCount;
  else if (a.options.asNavFor)
   for (; b < a.slideCount;)
    ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
  else
   d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
  return d - 1
 }, b.prototype.getLeft = function (a) {
  var c,
   d,
   f,
   b = this,
   e = 0;
  return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
 }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
  var b = this;
  return b.options[a]
 }, b.prototype.getNavigableIndexes = function () {
  var e,
   a = this,
   b = 0,
   c = 0,
   d = [];
  for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;)
   d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
  return d
 }, b.prototype.getSlick = function () {
  return this
 }, b.prototype.getSlideCount = function () {
  var c,
   d,
   e,
   b = this;
  return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
   return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
  }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
 }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
  var c = this;
  c.changeSlide({
   data: {
    message: "index",
    index: parseInt(a)
   }
  }, b)
 }, b.prototype.init = function (b) {
  var c = this;
  a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
 }, b.prototype.initADA = function () {
  var b = this;
  b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
   "aria-hidden": "true",
   tabindex: "-1"
  }).find("a, input, button, select").attr({
   tabindex: "-1"
  }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
   a(this).attr({
    role: "option",
    "aria-describedby": "slick-slide" + b.instanceUid + c
   })
  }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
   a(this).attr({
    role: "presentation",
    "aria-selected": "false",
    "aria-controls": "navigation" + b.instanceUid + c,
    id: "slick-slide" + b.instanceUid + c
   })
  }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
 }, b.prototype.initArrowEvents = function () {
  var a = this;
  a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
   message: "previous"
  }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
   message: "next"
  }, a.changeSlide))
 }, b.prototype.initDotEvents = function () {
  var b = this;
  b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
   message: "index"
  }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
 }, b.prototype.initSlideEvents = function () {
  var b = this;
  b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
 }, b.prototype.initializeEvents = function () {
  var b = this;
  b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
   action: "start"
  }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
   action: "move"
  }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
   action: "end"
  }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
   action: "end"
  }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
 }, b.prototype.initUI = function () {
  var a = this;
  a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
 }, b.prototype.keyHandler = function (a) {
  var b = this;
  a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
   data: {
    message: b.options.rtl === !0 ? "next" : "previous"
   }
  }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
   data: {
    message: b.options.rtl === !0 ? "previous" : "next"
   }
  }))
 }, b.prototype.lazyLoad = function () {
  function g(c) {
   a("img[data-lazy]", c).each(function () {
    var c = a(this),
     d = a(this).attr("data-lazy"),
     e = document.createElement("img");
    e.onload = function () {
     c.animate({
      opacity: 0
     }, 100, function () {
      c.attr("src", d).animate({
       opacity: 1
      }, 200, function () {
       c.removeAttr("data-lazy").removeClass("slick-loading")
      }), b.$slider.trigger("lazyLoaded", [b, c, d])
     })
    }, e.onerror = function () {
     c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
    }, e.src = d
   })
  }
  var c,
   d,
   e,
   f,
   b = this;
  b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
 }, b.prototype.loadSlider = function () {
  var a = this;
  a.setPosition(), a.$slideTrack.css({
   opacity: 1
  }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
 }, b.prototype.next = b.prototype.slickNext = function () {
  var a = this;
  a.changeSlide({
   data: {
    message: "next"
   }
  })
 }, b.prototype.orientationChange = function () {
  var a = this;
  a.checkResponsive(), a.setPosition()
 }, b.prototype.pause = b.prototype.slickPause = function () {
  var a = this;
  a.autoPlayClear(), a.paused = !0
 }, b.prototype.play = b.prototype.slickPlay = function () {
  var a = this;
  a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
 }, b.prototype.postSlide = function (a) {
  var b = this;
  b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
 }, b.prototype.prev = b.prototype.slickPrev = function () {
  var a = this;
  a.changeSlide({
   data: {
    message: "previous"
   }
  })
 }, b.prototype.preventDefault = function (a) {
  a.preventDefault()
 }, b.prototype.progressiveLazyLoad = function (b) {
  b = b || 1;
  var e,
   f,
   g,
   c = this,
   d = a("img[data-lazy]", c.$slider);
  d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
   e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
  }, g.onerror = function () {
   3 > b ? setTimeout(function () {
    c.progressiveLazyLoad(b + 1)
   }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
  }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
 }, b.prototype.refresh = function (b) {
  var d,
   e,
   c = this;
  e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
   currentSlide: d
  }), c.init(), b || c.changeSlide({
   data: {
    message: "index",
    index: d
   }
  }, !1)
 }, b.prototype.registerBreakpoints = function () {
  var c,
   d,
   e,
   b = this,
   f = b.options.responsive || null;
  if ("array" === a.type(f) && f.length) {
   b.respondTo = b.options.respondTo || "window";
   for (c in f)
    if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
     for (; e >= 0;)
      b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
     b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
    }
   b.breakpoints.sort(function (a, c) {
    return b.options.mobileFirst ? a - c : c - a
   })
  }
 }, b.prototype.reinit = function () {
  var b = this;
  b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
 }, b.prototype.resize = function () {
  var b = this;
  a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
   b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
  }, 50))
 }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
  var d = this;
  return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
 }, b.prototype.setCSS = function (a) {
  var d,
   e,
   b = this,
   c = {};
  b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
 }, b.prototype.setDimensions = function () {
  var a = this;
  a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
   padding: "0px " + a.options.centerPadding
  }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
   padding: a.options.centerPadding + " 0px"
  })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
  var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
  a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
 }, b.prototype.setFade = function () {
  var c,
   b = this;
  b.$slides.each(function (d, e) {
   c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
    position: "relative",
    right: c,
    top: 0,
    zIndex: b.options.zIndex - 2,
    opacity: 0
   }) : a(e).css({
    position: "relative",
    left: c,
    top: 0,
    zIndex: b.options.zIndex - 2,
    opacity: 0
   })
  }), b.$slides.eq(b.currentSlide).css({
   zIndex: b.options.zIndex - 1,
   opacity: 1
  })
 }, b.prototype.setHeight = function () {
  var a = this;
  if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
   var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
   a.$list.css("height", b)
  }
 }, b.prototype.setOption = b.prototype.slickSetOption = function () {
  var c,
   d,
   e,
   f,
   h,
   b = this,
   g = !1;
  if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h)
   b.options[e] = f;
  else if ("multiple" === h)
   a.each(e, function (a, c) {
    b.options[a] = c
   });
  else if ("responsive" === h)
   for (d in f)
    if ("array" !== a.type(b.options.responsive))
     b.options.responsive = [f[d]];
    else {
     for (c = b.options.responsive.length - 1; c >= 0;)
      b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
     b.options.responsive.push(f[d])
    }
  g && (b.unload(), b.reinit())
 }, b.prototype.setPosition = function () {
  var a = this;
  a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
 }, b.prototype.setProps = function () {
  var a = this,
   b = document.body.style;
  a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
 }, b.prototype.setSlideClasses = function (a) {
  var c,
   d,
   e,
   f,
   b = this;
  d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
   d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
 }, b.prototype.setupInfinite = function () {
  var c,
   d,
   e,
   b = this;
  if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
   for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)
    d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
   for (c = 0; e > c; c += 1)
    d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
   b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
    a(this).attr("id", "")
   })
  }
 }, b.prototype.interrupt = function (a) {
  var b = this;
  a || b.autoPlay(), b.interrupted = a
 }, b.prototype.selectHandler = function (b) {
  var c = this,
   d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
   e = parseInt(d.attr("data-slick-index"));
  return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
 }, b.prototype.slideHandler = function (a, b, c) {
  var d,
   e,
   f,
   g,
   j,
   h = null,
   i = this;
  return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
   i.postSlide(d)
  }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
   i.postSlide(d)
  }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
   i.postSlide(e)
  })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
   i.postSlide(e)
  }) : i.postSlide(e))))
 }, b.prototype.startLoad = function () {
  var a = this;
  a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
 }, b.prototype.swipeDirection = function () {
  var a,
   b,
   c,
   d,
   e = this;
  return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
 }, b.prototype.swipeEnd = function (a) {
  var c,
   d,
   b = this;
  if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)
   return !1;
  if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
   switch (d = b.swipeDirection()) {
    case "left":
    case "down":
     c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
     break;
    case "right":
    case "up":
     c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
   }
   "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
  } else
   b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
 }, b.prototype.swipeHandler = function (a) {
  var b = this;
  if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
   switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
    case "start":
     b.swipeStart(a);
     break;
    case "move":
     b.swipeMove(a);
     break;
    case "end":
     b.swipeEnd(a)
   }
 }, b.prototype.swipeMove = function (a) {
  var d,
   e,
   f,
   g,
   h,
   b = this;
  return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
 }, b.prototype.swipeStart = function (a) {
  var c,
   b = this;
  return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
 }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
  var a = this;
  null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
 }, b.prototype.unload = function () {
  var b = this;
  a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
 }, b.prototype.unslick = function (a) {
  var b = this;
  b.$slider.trigger("unslick", [b, a]), b.destroy()
 }, b.prototype.updateArrows = function () {
  var b,
   a = this;
  b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
 }, b.prototype.updateDots = function () {
  var a = this;
  null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
 }, b.prototype.visibility = function () {
  var a = this;
  a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
 }, a.fn.slick = function () {
  var f,
   g,
   a = this,
   c = arguments[0],
   d = Array.prototype.slice.call(arguments, 1),
   e = a.length;
  for (f = 0; e > f; f++)
   if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)
    return g;
  return a
 }
});

// 9. Fullscreeneo v1.0.0
// MIT License
// Copyright (c) 2017 LA Watts
function sizeEverything() {
 dimensions = coverDimensions(16, 9, window.innerWidth, window.innerHeight), $el.css({
  position: "absolute",
  width: dimensions.width,
  "padding-top": dimensions.height,
  top: .5 * (window.innerHeight - dimensions.height),
  left: .5 * (window.innerWidth - dimensions.width),
  "max-width": "none"
 }), $wrap.css({
  position: "relative",
  overflow: "hidden",
  width: window.innerWidth,
  height: window.innerHeight
 })
}
var $iframe = $("iframe[data-fullscreeneo]"),
 max = function (i, e) {
  return i > e ? i : e
 },
 coverDimensions = function (i, e, n, o) {
  var t = max(n / i, o / e);
  return {
   width: Math.ceil(i * t),
   height: Math.ceil(e * t)
  }
 };
$iframe.css({
 position: "absolute",
 top: 0,
 left: 0,
 height: "100%",
 width: "100%"
}).wrap('<div class="fullscreeneo-wrap"><div class="fullscreeneo-video-container"></div></div>');
var $wrap = $(".fullscreeneo-wrap"),
 $el = $(".fullscreeneo-video-container");
sizeEverything(), window.addEventListener("resize", function () {
 console.log("Resize!"), sizeEverything()
});

// 10. jQuery.enllax.js v1.1.0
/* jQuery.enllax.js - v1.1.0 | copyright 2015, MMK Jony | https://github.com/mmkjony/enllax.js | released under the MIT license */
! function (t) {
 "use strict";
 t.fn.enllax = function (r) {
  var a = t(window).height(),
   n = t(document).height(),
   o = t.extend({
    ratio: 0,
    type: "background",
    direction: "vertical"
   }, r),
   e = t("[data-enllax-ratio]");
  e.each(function () {
   var r,
    e,
    s,
    i = t(this),
    c = i.offset().top,
    l = i.outerHeight(),
    p = i.data("enllax-ratio"),
    d = i.data("enllax-type"),
    x = i.data("enllax-direction");
   r = p ? p : o.ratio, e = d ? d : o.type, s = x ? x : o.direction;
   var f = Math.round(c * r),
    u = Math.round((c - a / 2 + l) * r);
   "background" == e ? "vertical" == s ? i.css({
    "background-position": "center " + -f + "px"
   }) : "horizontal" == s && i.css({
    "background-position": -f + "px center"
   }) : "foreground" == e && ("vertical" == s ? i.css({
    "-webkit-transform": "translateY(" + u + "px)",
    "-moz-transform": "translateY(" + u + "px)",
    transform: "translateY(" + u + "px)"
   }) : "horizontal" == s && i.css({
    "-webkit-transform": "translateX(" + u + "px)",
    "-moz-transform": "translateX(" + u + "px)",
    transform: "translateX(" + u + "px)"
   })), t(window).on("scroll", function () {
    var o = t(this).scrollTop();
    f = Math.round((c - o) * r), u = Math.round((c - a / 2 + l - o) * r), "background" == e ? "vertical" == s ? i.css({
     "background-position": "center " + -f + "px"
    }) : "horizontal" == s && i.css({
     "background-position": -f + "px center"
    }) : "foreground" == e && n > o && ("vertical" == s ? i.css({
     "-webkit-transform": "translateY(" + u + "px)",
     "-moz-transform": "translateY(" + u + "px)",
     transform: "translateY(" + u + "px)"
    }) : "horizontal" == s && i.css({
     "-webkit-transform": "translateX(" + u + "px)",
     "-moz-transform": "translateX(" + u + "px)",
     transform: "translateX(" + u + "px)"
    }))
   })
  })
 }
}(jQuery);

// 11. PhotoSwipe v4.1.1
/*! PhotoSwipe - v4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function (a, b) {
 "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function () {
 "use strict";
 var a = function (a, b, c, d) {
  var e = {
   features: null,
   bind: function (a, b, c, d) {
    var e = (d ? "remove" : "add") + "EventListener";
    b = b.split(" ");
    for (var f = 0; f < b.length; f++)
     b[f] && a[e](b[f], c, !1)
   },
   isArray: function (a) {
    return a instanceof Array
   },
   createEl: function (a, b) {
    var c = document.createElement(b || "div");
    return a && (c.className = a), c
   },
   getScrollY: function () {
    var a = window.pageYOffset;
    return void 0 !== a ? a : document.documentElement.scrollTop
   },
   unbind: function (a, b, c) {
    e.bind(a, b, c, !0)
   },
   removeClass: function (a, b) {
    var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
    a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
   },
   addClass: function (a, b) {
    e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
   },
   hasClass: function (a, b) {
    return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
   },
   getChildByClass: function (a, b) {
    for (var c = a.firstChild; c;) {
     if (e.hasClass(c, b))
      return c;
     c = c.nextSibling
    }
   },
   arraySearch: function (a, b, c) {
    for (var d = a.length; d--;)
     if (a[d][c] === b)
      return d;
    return -1
   },
   extend: function (a, b, c) {
    for (var d in b)
     if (b.hasOwnProperty(d)) {
      if (c && a.hasOwnProperty(d))
       continue;
      a[d] = b[d]
     }
   },
   easing: {
    sine: {
     out: function (a) {
      return Math.sin(a * (Math.PI / 2))
     },
     inOut: function (a) {
      return -(Math.cos(Math.PI * a) - 1) / 2
     }
    },
    cubic: {
     out: function (a) {
      return --a * a * a + 1
     }
    }
   },
   detectFeatures: function () {
    if (e.features)
     return e.features;
    var a = e.createEl(),
     b = a.style,
     c = "",
     d = {};
    if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
     var f = navigator.userAgent;
     if (/iP(hone|od)/.test(navigator.platform)) {
      var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
     }
     var h = f.match(/Android\s([0-9\.]*)/),
      i = h ? h[1] : 0;
     i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
    }
    for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
     c = m[n];
     for (var o = 0; 3 > o; o++)
      j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
     c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
    }
    if (!d.raf) {
     var p = 0;
     d.raf = function (a) {
      var b = (new Date).getTime(),
       c = Math.max(0, 16 - (b - p)),
       d = window.setTimeout(function () {
        a(b + c)
       }, c);
      return p = b + c, d
     }, d.caf = function (a) {
      clearTimeout(a)
     }
    }
    return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
   }
  };
  e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
   b = b.split(" ");
   for (var e, f = (d ? "detach" : "attach") + "Event", g = function () {
     c.handleEvent.call(c)
    }, h = 0; h < b.length; h++)
    if (e = b[h])
     if ("object" == typeof c && c.handleEvent) {
      if (d) {
       if (!c["oldIE" + e])
        return !1
      } else
       c["oldIE" + e] = g;
      a[f]("on" + e, c["oldIE" + e])
     } else
      a[f]("on" + e, c)
  });
  var f = this,
   g = 25,
   h = 3,
   i = {
    allowPanToNext: !0,
    spacing: .12,
    bgOpacity: 1,
    mouseUsed: !1,
    loop: !0,
    pinchToClose: !0,
    closeOnScroll: !0,
    closeOnVerticalDrag: !0,
    verticalDragRange: .75,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    showHideOpacity: !1,
    focus: !0,
    escKey: !0,
    arrowKeys: !0,
    mainScrollEndFriction: .35,
    panEndFriction: .35,
    isClickableElement: function (a) {
     return "A" === a.tagName
    },
    getDoubleTapZoom: function (a, b) {
     return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
    },
    maxSpreadZoom: 1.33,
    modal: !0,
    scaleMode: "fit"
   };
  e.extend(i, d);
  var j,
   k,
   l,
   m,
   n,
   o,
   p,
   q,
   r,
   s,
   t,
   u,
   v,
   w,
   x,
   y,
   z,
   A,
   B,
   C,
   D,
   E,
   F,
   G,
   H,
   I,
   J,
   K,
   L,
   M,
   N,
   O,
   P,
   Q,
   R,
   S,
   T,
   U,
   V,
   W,
   X,
   Y,
   Z,
   $,
   _,
   aa,
   ba,
   ca,
   da,
   ea,
   fa,
   ga,
   ha,
   ia,
   ja,
   ka,
   la = function () {
    return {
     x: 0,
     y: 0
    }
   },
   ma = la(),
   na = la(),
   oa = la(),
   pa = {},
   qa = 0,
   ra = {},
   sa = la(),
   ta = 0,
   ua = !0,
   va = [],
   wa = {},
   xa = !1,
   ya = function (a, b) {
    e.extend(f, b.publicMethods), va.push(a)
   },
   za = function (a) {
    var b = _b();
    return a > b - 1 ? a - b : 0 > a ? b + a : a
   },
   Aa = {},
   Ba = function (a, b) {
    return Aa[a] || (Aa[a] = []), Aa[a].push(b)
   },
   Ca = function (a) {
    var b = Aa[a];
    if (b) {
     var c = Array.prototype.slice.call(arguments);
     c.shift();
     for (var d = 0; d < b.length; d++)
      b[d].apply(f, c)
    }
   },
   Da = function () {
    return (new Date).getTime()
   },
   Ea = function (a) {
    ia = a, f.bg.style.opacity = a * i.bgOpacity
   },
   Fa = function (a, b, c, d, e) {
    (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
   },
   Ga = function (a) {
    da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
   },
   Ha = function (a) {
    a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
   },
   Ia = function (a, b) {
    b[E] = u + a + "px, 0px" + v
   },
   Ja = function (a, b) {
    if (!i.loop && b) {
     var c = m + (sa.x * qa - a) / sa.x,
      d = Math.round(a - sb.x);
     (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
    }
    sb.x = a, Ia(a, n)
   },
   Ka = function (a, b) {
    var c = tb[a] - ra[a];
    return na[a] + ma[a] + c - c * (b / t)
   },
   La = function (a, b) {
    a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
   },
   Ma = function (a) {
    a.x = Math.round(a.x), a.y = Math.round(a.y)
   },
   Na = null,
   Oa = function () {
    Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function () {
     Na = null
    }, 100)
   },
   Pa = function () {
    e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
   },
   Qa = function () {
    e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
   },
   Ra = function (a, b) {
    var c = hc(f.currItem, pa, a);
    return b && (ca = c), c
   },
   Sa = function (a) {
    return a || (a = f.currItem), a.initialZoomLevel
   },
   Ta = function (a) {
    return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
   },
   Ua = function (a, b, c, d) {
    return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] ? (c[a] = b.max[a], !0) : !1)
   },
   Va = function () {
    if (E) {
     var b = N.perspective && !G;
     return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
    }
    E = "left", e.addClass(a, "pswp--ie"), Ia = function (a, b) {
     b.left = a + "px"
    }, Ha = function (a) {
     var b = a.fitRatio > 1 ? 1 : a.fitRatio,
      c = a.container.style,
      d = b * a.w,
      e = b * a.h;
     c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
    }, Ga = function () {
     if (da) {
      var a = da,
       b = f.currItem,
       c = b.fitRatio > 1 ? 1 : b.fitRatio,
       d = c * b.w,
       e = c * b.h;
      a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
     }
    }
   },
   Wa = function (a) {
    var b = "";
    i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
   },
   Xa = function (a) {
    a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
   },
   Ya = function () {
    f.setScrollOffset(0, e.getScrollY())
   },
   Za = {},
   $a = 0,
   _a = function (a) {
    Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
   },
   ab = function (a) {
    Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
   },
   bb = function () {
    for (var a in Za)
     Za.hasOwnProperty(a) && _a(a)
   },
   cb = function (a, b, c, d, e, f, g) {
    var h,
     i = Da();
    ab(a);
    var j = function () {
     if (Za[a]) {
      if (h = Da() - i, h >= d)
       return _a(a), f(c), void(g && g());
      f((c - b) * e(h / d) + b), Za[a].raf = H(j)
     }
    };
    j()
   },
   db = {
    shout: Ca,
    listen: Ba,
    viewportSize: pa,
    options: i,
    isMainScrollAnimating: function () {
     return ea
    },
    getZoomLevel: function () {
     return s
    },
    getCurrentIndex: function () {
     return m
    },
    isDragging: function () {
     return U
    },
    isZooming: function () {
     return _
    },
    setScrollOffset: function (a, b) {
     ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
    },
    applyZoomPan: function (a, b, c, d) {
     oa.x = b, oa.y = c, s = a, Ga(d)
    },
    init: function () {
     if (!j && !k) {
      var c;
      f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
       el: f.container.children[0],
       wrap: 0,
       index: -1
      }, {
       el: f.container.children[1],
       wrap: 0,
       index: -1
      }, {
       el: f.container.children[2],
       wrap: 0,
       index: -1
      }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
       resize: f.updateSize,
       scroll: Ya,
       keydown: Wa,
       click: Xa
      };
      var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
      for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++)
       f["init" + va[c]]();
      if (b) {
       var g = f.ui = new b(f, e);
       g.init()
      }
      Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
      var l = "pswp--open ";
      for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++)
       Ia((c + o) * sa.x, y[c].el.style);
      L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function () {
       f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
      }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function () {
       $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
      }, 1e3)), e.addClass(a, "pswp--visible")
     }
    },
    close: function () {
     j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
    },
    destroy: function () {
     Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
    },
    panTo: function (a, b, c) {
     c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
    },
    handleEvent: function (a) {
     a = a || window.event, r[a.type] && r[a.type](a)
    },
    goTo: function (a) {
     a = za(a);
     var b = a - m;
     ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
    },
    next: function () {
     f.goTo(m + 1)
    },
    prev: function () {
     f.goTo(m - 1)
    },
    updateCurrZoomItem: function (a) {
     if (a && Ca("beforeChange", 0), y[1].el.children.length) {
      var b = y[1].el.children[0];
      da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
     } else
      da = null;
     ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
    },
    invalidateCurrItems: function () {
     x = !0;
     for (var a = 0; h > a; a++)
      y[a].item && (y[a].item.needsUpdate = !0)
    },
    updateCurrItem: function (a) {
     if (0 !== ta) {
      var b,
       c = Math.abs(ta);
      if (!(a && 2 > c)) {
       f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
       for (var d = 0; c > d; d++)
        ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
       if (da && 1 === Math.abs(ta)) {
        var e = $b(z);
        e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
       }
       ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
      }
     }
    },
    updateSize: function (b) {
     if (!ua && i.modal) {
      var c = e.getScrollY();
      if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight)
       return;
      wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
     }
     if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
      for (var d, g, j, k = 0; h > k; k++)
       d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
      x = !1
     }
     t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
    },
    zoomTo: function (a, b, c, d, f) {
     b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
     var g = Ra(a, !1),
      h = {};
     Ua("x", g, h, a), Ua("y", g, h, a);
     var i = s,
      j = {
       x: oa.x,
       y: oa.y
      };
     Ma(h);
     var k = function (b) {
      1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
     };
     c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
    }
   },
   eb = 30,
   fb = 10,
   gb = {},
   hb = {},
   ib = {},
   jb = {},
   kb = {},
   lb = [],
   mb = {},
   nb = [],
   ob = {},
   pb = 0,
   qb = la(),
   rb = 0,
   sb = la(),
   tb = la(),
   ub = la(),
   vb = function (a, b) {
    return a.x === b.x && a.y === b.y
   },
   wb = function (a, b) {
    return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
   },
   xb = function (a, b) {
    return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
   },
   yb = function () {
    Y && (I(Y), Y = null)
   },
   zb = function () {
    U && (Y = H(zb), Pb())
   },
   Ab = function () {
    return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
   },
   Bb = function (a, b) {
    return a && a !== document ? a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : b(a) ? a : Bb(a.parentNode, b) : !1
   },
   Cb = {},
   Db = function (a, b) {
    return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
   },
   Eb = function (a, b) {
    return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
   },
   Fb = function (a, b, c) {
    c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
   },
   Gb = function (a, b, c) {
    if (a - P > 50) {
     var d = nb.length > 2 ? nb.shift() : {};
     d.x = b, d.y = c, nb.push(d), P = a
    }
   },
   Hb = function () {
    var a = oa.y - f.currItem.initialPosition.y;
    return 1 - Math.abs(a / (pa.y / 2))
   },
   Ib = {},
   Jb = {},
   Kb = [],
   Lb = function (a) {
    for (; Kb.length > 0;)
     Kb.pop();
    return F ? (ka = 0, lb.forEach(function (a) {
     0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
    })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
   },
   Mb = function (a, b) {
    var c,
     d,
     e,
     g,
     h = 0,
     j = oa[a] + b[a],
     k = b[a] > 0,
     l = sb.x + b.x,
     m = sb.x - mb.x;
    return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g === mb.x ? !1 : !0), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
   },
   Nb = function (a) {
    if (!("mousedown" === a.type && a.button > 0)) {
     if (Zb)
      return void a.preventDefault();
     if (!T || "mousedown" !== a.type) {
      if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
       var b = e.arraySearch(lb, a.pointerId, "id");
       0 > b && (b = lb.length), lb[b] = {
        x: a.pageX,
        y: a.pageY,
        id: a.pointerId
       }
      }
      var c = Lb(a),
       d = c.length;
      $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
       x: jb.x,
       y: jb.y
      }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
     }
    }
   },
   Ob = function (a) {
    if (a.preventDefault(), F) {
     var b = e.arraySearch(lb, a.pointerId, "id");
     if (b > -1) {
      var c = lb[b];
      c.x = a.pageX, c.y = a.pageY
     }
    }
    if (U) {
     var d = Lb(a);
     if (fa || X || _)
      $ = d;
     else if (sb.x !== sa.x * qa)
      fa = "h";
     else {
      var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
      Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
     }
    }
   },
   Pb = function () {
    if ($) {
     var a = $.length;
     if (0 !== a)
      if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
       if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb))
        return;
       La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
       var b = xb(gb, hb),
        c = Ub(b);
       c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
       var d = 1,
        e = Sa(),
        g = Ta();
       if (e > c)
        if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
         var h = e - c,
          j = 1 - h / (e / 1.2);
         Ea(j), Ca("onPinchClose", j), ha = !0
        } else
         d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
       else
        c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
       0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
      } else {
       if (!fa)
        return;
       if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y)
        return;
       if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
        ma.y += ib.y, oa.y += ib.y;
        var k = Hb();
        return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
       }
       Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
       var l = Mb("x", ib);
       l || (Mb("y", ib), Ma(oa), Ga())
      }
    }
   },
   Qb = function (a) {
    if (N.isOldAndroid) {
     if (T && "mouseup" === a.type)
      return;
     a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function () {
      T = 0
     }, 600))
    }
    Ca("pointerUp"), Db(a, !1) && a.preventDefault();
    var b;
    if (F) {
     var c = e.arraySearch(lb, a.pointerId, "id");
     if (c > -1)
      if (b = lb.splice(c, 1)[0], navigator.pointerEnabled)
       b.type = a.pointerType || "mouse";
      else {
       var d = {
        4: "mouse",
        2: "touch",
        3: "pen"
       };
       b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
      }
    }
    var g,
     h = Lb(a),
     j = h.length;
    if ("mouseup" === a.type && (j = 0), 2 === j)
     return $ = null, !0;
    1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
     x: a.pageX,
     y: a.pageY,
     type: "mouse"
    } : a.changedTouches && a.changedTouches[0] && (b = {
     x: a.changedTouches[0].pageX,
     y: a.changedTouches[0].pageY,
     type: "touch"
    })), Ca("touchRelease", a, b));
    var k = -1;
    if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)
     if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
      var l = Hb();
      if (l < i.verticalDragRange)
       f.close();
      else {
       var m = oa.y,
        n = ia;
       cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
        oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
       }), Ca("onVerticalDrag", 1)
      }
     } else {
      if ((Z || ea) && 0 === j) {
       var o = Tb(g, Q);
       if (o)
        return;
       g = "zoomPointerUp"
      }
      if (!ea)
       return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
     }
   },
   Rb = function () {
    var a,
     b,
     c = {
      lastFlickOffset: {},
      lastFlickDist: {},
      lastFlickSpeed: {},
      slowDownRatio: {},
      slowDownRatioReverse: {},
      speedDecelerationRatio: {},
      speedDecelerationRatioAbs: {},
      distanceOffset: {},
      backAnimDestination: {},
      backAnimStarted: {},
      calculateSwipeSpeed: function (d) {
       nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
      },
      calculateOverBoundsAnimOffset: function (a, b) {
       c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
        oa[a] = b, Ga()
       }))))
      },
      calculateAnimOffset: function (a) {
       c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
      },
      panAnimLoop: function () {
       return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
      }
     };
    return c
   },
   Sb = function (a) {
    return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
   },
   Tb = function (a, b) {
    var c;
    ea || (pb = m);
    var d;
    if ("swipe" === a) {
     var g = jb.x - kb.x,
      h = b.lastFlickDist.x < 10;
     g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
    }
    var j;
    d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
    var k,
     l = sa.x * qa,
     n = Math.abs(l - sb.x);
    return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function () {
     bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
    }), c && f.updateCurrItem(!0), c
   },
   Ub = function (a) {
    return 1 / ba * a * t
   },
   Vb = function () {
    var a = s,
     b = Sa(),
     c = Ta();
    b > s ? a = b : s > c && (a = c);
    var d,
     g = 1,
     h = ia;
    return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function (a) {
     Ea((g - h) * a + h)
    }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
   };
  ya("Gestures", {
   publicMethods: {
    initGestures: function () {
     var a = function (a, b, c, d, e) {
      A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
     };
     F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
    }
   }
  });
  var Wb,
   Xb,
   Yb,
   Zb,
   $b,
   _b,
   ac,
   bc = function (b, c, d, g) {
    Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
    var h;
    b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
    var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
     k = function () {
      _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
     };
    if (!j || !h || void 0 === h.x)
     return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function () {
      k()
     }, j) : k());
    var n = function () {
     var c = l,
      g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
     b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function () {
      e.addClass(a, "pswp--animate_opacity")
     }, 30)), Wb = setTimeout(function () {
      if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
       var f = h.w / b.w,
        i = {
         x: oa.x,
         y: oa.y
        },
        l = s,
        m = ia,
        n = function (b) {
         1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
        };
       c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
      } else
       s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
     }, d ? 25 : 90)
    };
    n()
   },
   cc = {},
   dc = [],
   ec = {
    index: 0,
    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
    forceProgressiveLoading: !1,
    preload: [1, 1],
    getNumItemsFn: function () {
     return Xb.length
    }
   },
   fc = function () {
    return {
     center: {
      x: 0,
      y: 0
     },
     max: {
      x: 0,
      y: 0
     },
     min: {
      x: 0,
      y: 0
     }
    }
   },
   gc = function (a, b, c) {
    var d = a.bounds;
    d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
   },
   hc = function (a, b, c) {
    if (a.src && !a.loadError) {
     var d = !c;
     if (d && (a.vGap || (a.vGap = {
       top: 0,
       bottom: 0
      }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
      var e = cc.x / a.w,
       f = cc.y / a.h;
      a.fitRatio = f > e ? e : f;
      var g = i.scaleMode;
      "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
     }
     if (!c)
      return;
     return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
    }
    return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
   },
   ic = function (a, b, c, d, e, g) {
    b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function () {
     b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
    }, 500))
   },
   jc = function (a) {
    a.loading = !0, a.loaded = !1;
    var b = a.img = e.createEl("pswp__img", "img"),
     c = function () {
      a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
     };
    return b.onload = c, b.onerror = function () {
     a.loadError = !0, c()
    }, b.src = a.src, b
   },
   kc = function (a, b) {
    return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
   },
   lc = function (a, b, c) {
    if (a.src) {
     b || (b = a.container.lastChild);
     var d = c ? a.w : Math.round(a.w * a.fitRatio),
      e = c ? a.h : Math.round(a.h * a.fitRatio);
     a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
    }
   },
   mc = function () {
    if (dc.length) {
     for (var a, b = 0; b < dc.length; b++)
      a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
     dc = []
    }
   };
  ya("Controller", {
   publicMethods: {
    lazyLoadItem: function (a) {
     a = za(a);
     var b = $b(a);
     b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
    },
    initController: function () {
     e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function (a) {
      var b,
       c = i.preload,
       d = null === a ? !0 : a >= 0,
       e = Math.min(c[0], _b()),
       g = Math.min(c[1], _b());
      for (b = 1;
       (d ? g : e) >= b; b++)
       f.lazyLoadItem(m + b);
      for (b = 1;
       (d ? e : g) >= b; b++)
       f.lazyLoadItem(m - b)
     }), Ba("initialLayout", function () {
      f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
     }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function () {
      for (var a, b = 0; b < Xb.length; b++)
       a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
      dc = null
     })
    },
    getItemAt: function (a) {
     return a >= 0 && void 0 !== Xb[a] ? Xb[a] : !1
    },
    allowProgressiveImg: function () {
     return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
    },
    setContent: function (a, b) {
     i.loop && (b = za(b));
     var c = f.getItemAt(a.index);
     c && (c.container = null);
     var d,
      g = f.getItemAt(b);
     if (!g)
      return void(a.el.innerHTML = "");
     Ca("gettingData", b, g), a.index = b, a.item = g;
     var h = g.container = e.createEl("pswp__zoom-wrap");
     if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded)
      g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0));
     else {
      if (g.loadComplete = function (c) {
        if (j) {
         if (a && a.index === b) {
          if (kc(c, !0))
           return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
          c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
           item: c,
           baseDiv: h,
           img: c.img,
           index: b,
           holder: a,
           clearPlaceholder: !0
          }) : ic(b, c, h, c.img, ea || Zb, !0)
         }
         c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
        }
       }, e.features.transform) {
       var k = "pswp__img pswp__img--placeholder";
       k += g.msrc ? "" : " pswp__img--placeholder--blank";
       var l = e.createEl(k, g.msrc ? "img" : "");
       g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
      }
      g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
       item: g,
       baseDiv: h,
       img: g.img,
       index: b,
       holder: a
      }) : ic(b, g, h, g.img, !0, !0))
     }
     Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
    },
    cleanSlide: function (a) {
     a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
    }
   }
  });
  var nc,
   oc = {},
   pc = function (a, b, c) {
    var d = document.createEvent("CustomEvent"),
     e = {
      origEvent: a,
      target: a.target,
      releasePoint: b,
      pointerType: c || "touch"
     };
    d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
   };
  ya("Tap", {
   publicMethods: {
    initTap: function () {
     Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function () {
      oc = {}, nc = null
     })
    },
    onTapStart: function (a) {
     a.length > 1 && (clearTimeout(nc), nc = null)
    },
    onTapRelease: function (a, b) {
     if (b && !X && !V && !$a) {
      var c = b;
      if (nc && (clearTimeout(nc), nc = null, wb(c, oc)))
       return void Ca("doubleTap", c);
      if ("mouse" === b.type)
       return void pc(a, b, "mouse");
      var d = a.target.tagName.toUpperCase();
      if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))
       return void pc(a, b);
      La(oc, c), nc = setTimeout(function () {
       pc(a, b), nc = null
      }, 300)
     }
    }
   }
  });
  var qc;
  ya("DesktopZoom", {
   publicMethods: {
    initDesktopZoom: function () {
     L || (G ? Ba("mouseUsed", function () {
      f.setupDesktopZoom()
     }) : f.setupDesktopZoom(!0))
    },
    setupDesktopZoom: function (b) {
     qc = {};
     var c = "wheel mousewheel DOMMouseScroll";
     Ba("bindEvents", function () {
      e.bind(a, c, f.handleMouseWheel)
     }), Ba("unbindEvents", function () {
      qc && e.unbind(a, c, f.handleMouseWheel)
     }), f.mouseZoomedIn = !1;
     var d,
      g = function () {
       f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
      },
      h = function () {
       d && (e.removeClass(a, "pswp--dragging"), d = !1)
      };
     Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function () {
      f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
     }), Ba("pointerUp", h), b || g()
    },
    handleMouseWheel: function (a) {
     if (s <= f.currItem.fitRatio)
      return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
     if (a.stopPropagation(), qc.x = 0, "deltaX" in a)
      1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY);
     else if ("wheelDelta" in a)
      a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta;
     else {
      if (!("detail" in a))
       return;
      qc.y = a.detail
     }
     Ra(s, !0);
     var b = oa.x - qc.x,
      c = oa.y - qc.y;
     (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
    },
    toggleDesktopZoom: function (b) {
     b = b || {
      x: pa.x / 2 + ra.x,
      y: pa.y / 2 + ra.y
     };
     var c = i.getDoubleTapZoom(!0, f.currItem),
      d = s === c;
     f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
    }
   }
  });
  var rc,
   sc,
   tc,
   uc,
   vc,
   wc,
   xc,
   yc,
   zc,
   Ac,
   Bc,
   Cc,
   Dc = {
    history: !0,
    galleryUID: 1
   },
   Ec = function () {
    return Bc.hash.substring(1)
   },
   Fc = function () {
    rc && clearTimeout(rc), tc && clearTimeout(tc)
   },
   Gc = function () {
    var a = Ec(),
     b = {};
    if (a.length < 5)
     return b;
    var c,
     d = a.split("&");
    for (c = 0; c < d.length; c++)
     if (d[c]) {
      var e = d[c].split("=");
      e.length < 2 || (b[e[0]] = e[1])
     }
    if (i.galleryPIDs) {
     var f = b.pid;
     for (b.pid = 0, c = 0; c < Xb.length; c++)
      if (Xb[c].pid === f) {
       b.pid = c;
       break
      }
    } else
     b.pid = parseInt(b.pid, 10) - 1;
    return b.pid < 0 && (b.pid = 0), b
   },
   Hc = function () {
    if (tc && clearTimeout(tc), $a || U)
     return void(tc = setTimeout(Hc, 500));
    uc ? clearTimeout(sc) : uc = !0;
    var a = m + 1,
     b = $b(m);
    b.hasOwnProperty("pid") && (a = b.pid);
    var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
    yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
    var d = Bc.href.split("#")[0] + "#" + c;
    Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function () {
     uc = !1
    }, 60)
   };
  ya("History", {
   publicMethods: {
    initHistory: function () {
     if (e.extend(i, Dc, !0), i.history) {
      Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function () {
       e.unbind(window, "hashchange", f.onHashChange)
      });
      var a = function () {
       wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
      };
      Ba("unbindEvents", function () {
       l && a()
      }), Ba("destroy", function () {
       wc || a()
      }), Ba("firstUpdate", function () {
       m = Gc().pid
      });
      var b = xc.indexOf("pid=");
      b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function () {
       j && e.bind(window, "hashchange", f.onHashChange)
      }, 40)
     }
    },
    onHashChange: function () {
     return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
    },
    updateURL: function () {
     Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
    }
   }
  }), e.extend(f, db)
 };
 return a
});

// 11.1. PhotoSwipe Default UI v4.1.1
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function (a, b) {
 "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function () {
 "use strict";
 var a = function (a, b) {
  var c,
   d,
   e,
   f,
   g,
   h,
   i,
   j,
   k,
   l,
   m,
   n,
   o,
   p,
   q,
   r,
   s,
   t,
   u,
   v = this,
   w = !1,
   x = !0,
   y = !0,
   z = {
    barsSize: {
     top: 44,
     bottom: "auto"
    },
    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
    timeToIdle: 4e3,
    timeToIdleOutside: 1e3,
    loadingIndicatorDelay: 1e3,
    addCaptionHTMLFn: function (a, b) {
     return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
    },
    closeEl: !0,
    captionEl: !0,
    fullscreenEl: !0,
    zoomEl: !0,
    shareEl: !0,
    counterEl: !0,
    arrowEl: !0,
    preloaderEl: !0,
    tapToClose: !1,
    tapToToggleControls: !0,
    clickToCloseNonZoomable: !0,
    shareButtons: [{
     id: "facebook",
     label: "Share on Facebook",
     url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
    }, {
     id: "twitter",
     label: "Tweet",
     url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
    }, {
     id: "pinterest",
     label: "Pin it",
     url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
    }, {
     id: "download",
     label: "Download image",
     url: "{{raw_image_url}}",
     download: !0
    }],
    getImageURLForShare: function () {
     return a.currItem.src || ""
    },
    getPageURLForShare: function () {
     return window.location.href
    },
    getTextForShare: function () {
     return a.currItem.title || ""
    },
    indexIndicatorSep: " / ",
    fitControlsWidth: 1200
   },
   A = function (a) {
    if (r)
     return !0;
    a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
    for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++)
     c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
    if (d) {
     a.stopPropagation && a.stopPropagation(), r = !0;
     var h = b.features.isOldAndroid ? 600 : 30;
     s = setTimeout(function () {
      r = !1
     }, h)
    }
   },
   B = function () {
    return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
   },
   C = function (a, c, d) {
    b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
   },
   D = function () {
    var a = 1 === q.getNumItemsFn();
    a !== p && (C(d, "ui--one-slide", a), p = a)
   },
   E = function () {
    C(i, "share-modal--hidden", y)
   },
   F = function () {
    return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
     y && E()
    }, 300)) : (E(), setTimeout(function () {
     y || b.addClass(i, "pswp__share-modal--fade-in")
    }, 30)), y || H(), !1
   },
   G = function (b) {
    b = b || window.event;
    var c = b.target || b.srcElement;
    return a.shout("shareLinkClick", b, c), c.href ? c.hasAttribute("download") ? !0 : (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1) : !1
   },
   H = function () {
    for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
     a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
    i.children[0].innerHTML = f, i.children[0].onclick = G
   },
   I = function (a) {
    for (var c = 0; c < q.closeElClasses.length; c++)
     if (b.hasClass(a, "pswp__" + q.closeElClasses[c]))
      return !0
   },
   J = 0,
   K = function () {
    clearTimeout(u), J = 0, k && v.setIdle(!1)
   },
   L = function (a) {
    a = a ? a : window.event;
    var b = a.relatedTarget || a.toElement;
    b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
     v.setIdle(!0)
    }, q.timeToIdleOutside))
   },
   M = function () {
    q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
   },
   N = function () {
    q.preloaderEl && (O(!0), l("beforeChange", function () {
     clearTimeout(o), o = setTimeout(function () {
      a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
     }, q.loadingIndicatorDelay)
    }), l("imageLoadComplete", function (b, c) {
     a.currItem === c && O(!0)
    }))
   },
   O = function (a) {
    n !== a && (C(m, "preloader--active", !a), n = a)
   },
   P = function (a) {
    var c = a.vGap;
    if (B()) {
     var g = q.barsSize;
     if (q.captionEl && "auto" === g.bottom)
      if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
       var h = f.clientHeight;
       c.bottom = parseInt(h, 10) || 44
      } else
       c.bottom = g.top;
     else
      c.bottom = "auto" === g.bottom ? 0 : g.bottom;
     c.top = g.top
    } else
     c.top = c.bottom = 0
   },
   Q = function () {
    q.timeToIdle && l("mouseUsed", function () {
     b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
      J++, 2 === J && v.setIdle(!0)
     }, q.timeToIdle / 2)
    })
   },
   R = function () {
    l("onVerticalDrag", function (a) {
     x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
    });
    var a;
    l("onPinchClose", function (b) {
     x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
    }), l("zoomGestureEnded", function () {
     a = !1, a && !x && v.showControls()
    })
   },
   S = [{
    name: "caption",
    option: "captionEl",
    onInit: function (a) {
     e = a
    }
   }, {
    name: "share-modal",
    option: "shareEl",
    onInit: function (a) {
     i = a
    },
    onTap: function () {
     F()
    }
   }, {
    name: "button--share",
    option: "shareEl",
    onInit: function (a) {
     h = a
    },
    onTap: function () {
     F()
    }
   }, {
    name: "button--zoom",
    option: "zoomEl",
    onTap: a.toggleDesktopZoom
   }, {
    name: "counter",
    option: "counterEl",
    onInit: function (a) {
     g = a
    }
   }, {
    name: "button--close",
    option: "closeEl",
    onTap: a.close
   }, {
    name: "button--arrow--left",
    option: "arrowEl",
    onTap: a.prev
   }, {
    name: "button--arrow--right",
    option: "arrowEl",
    onTap: a.next
   }, {
    name: "button--fs",
    option: "fullscreenEl",
    onTap: function () {
     c.isFullscreen() ? c.exit() : c.enter()
    }
   }, {
    name: "preloader",
    option: "preloaderEl",
    onInit: function (a) {
     m = a
    }
   }],
   T = function () {
    var a,
     c,
     e,
     f = function (d) {
      if (d)
       for (var f = d.length, g = 0; f > g; g++) {
        a = d[g], c = a.className;
        for (var h = 0; h < S.length; h++)
         e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
       }
     };
    f(d.children);
    var g = b.getChildByClass(d, "pswp__top-bar");
    g && f(g.children)
   };
  v.init = function () {
   b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
    var c = a.currItem.initialZoomLevel;
    a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
   }), l("preventDragEvent", function (a, b, c) {
    var d = a.target || a.srcElement;
    d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
   }), l("bindEvents", function () {
    b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
   }), l("unbindEvents", function () {
    y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
   }), l("destroy", function () {
    q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
   }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
    q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
   }), l("initialZoomOut", function () {
    b.addClass(d, "pswp__ui--hidden")
   }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
  }, v.setIdle = function (a) {
   k = a, C(d, "ui--idle", a)
  }, v.update = function () {
   x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
  }, v.updateFullscreen = function (d) {
   d && setTimeout(function () {
    a.setScrollOffset(0, b.getScrollY())
   }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
  }, v.updateIndexIndicator = function () {
   q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
  }, v.onGlobalTap = function (c) {
   c = c || window.event;
   var d = c.target || c.srcElement;
   if (!r)
    if (c.detail && "mouse" === c.detail.pointerType) {
     if (I(d))
      return void a.close();
     b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
    } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))
    return void a.close()
  }, v.onMouseOver = function (a) {
   a = a || window.event;
   var b = a.target || a.srcElement;
   C(d, "ui--over-close", I(b))
  }, v.hideControls = function () {
   b.addClass(d, "pswp__ui--hidden"), x = !1
  }, v.showControls = function () {
   x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
  }, v.supportsFullscreen = function () {
   var a = document;
   return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
  }, v.getFullscreenAPI = function () {
   var b,
    c = document.documentElement,
    d = "fullscreenchange";
   return c.requestFullscreen ? b = {
    enterK: "requestFullscreen",
    exitK: "exitFullscreen",
    elementK: "fullscreenElement",
    eventK: d
   } : c.mozRequestFullScreen ? b = {
    enterK: "mozRequestFullScreen",
    exitK: "mozCancelFullScreen",
    elementK: "mozFullScreenElement",
    eventK: "moz" + d
   } : c.webkitRequestFullscreen ? b = {
    enterK: "webkitRequestFullscreen",
    exitK: "webkitExitFullscreen",
    elementK: "webkitFullscreenElement",
    eventK: "webkit" + d
   } : c.msRequestFullscreen && (b = {
    enterK: "msRequestFullscreen",
    exitK: "msExitFullscreen",
    elementK: "msFullscreenElement",
    eventK: "MSFullscreenChange"
   }), b && (b.enter = function () {
    return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
   }, b.exit = function () {
    return q.closeOnScroll = j, document[this.exitK]()
   }, b.isFullscreen = function () {
    return document[this.elementK]
   }), b
  }
 };
 return a
});

// 11.2. PhotoSwipe Init
$(function () {
 "use strict";
 var i,
  t,
  o;
 $(".item-folio").on("click", ".ion-share", function (i) {
  i.stopPropagation()
 }), $(".item-folio").on("click", ".ion-link", function (i) {
  i.stopPropagation()
 }), i = [], t = $(".pswp")[0], (o = $(".item-folio")).each(function (t) {
  var o = $(this),
   n = o.find(".thumb-link"),
   e = o.find(".item-folio__title"),
   c = o.find(".item-folio__caption"),
   l = "<h4>" + $.trim(e.html()) + "</h4>",
   f = $.trim(c.html()),
   h = n.attr("href"),
   a = n.data("size").split("x"),
   p = {
    src: h,
    w: a[0],
    h: a[1]
   };
  c.length > 0 && (p.title = $.trim(l + f)), i.push(p)
 }), o.each(function (o) {
  $(this).on("click", function (n) {
   n.preventDefault(), new PhotoSwipe(t, PhotoSwipeUI_Default, i, {
    index: o,
    showHideOpacity: !0
   }).init()
  })
 })
});

// 12. Owl Carousel v2.2.0
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2017 David Deutsch
 * Licensed under the MIT License. (https://github.com/OwlCarousel2/OwlCarousel2/blob/develop/LICENSE)
 */
! function (a, b, c, d) {
 function e(b, c) {
  this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
   time: null,
   target: null,
   pointer: null,
   stage: {
    start: null,
    current: null
   },
   direction: null
  }, this._states = {
   current: {},
   tags: {
    initializing: ["busy"],
    animating: ["busy"],
    dragging: ["interacting"]
   }
  }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
   this._handlers[c] = a.proxy(this[c], this)
  }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
   this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
  }, this)), a.each(e.Workers, a.proxy(function (b, c) {
   this._pipe.push({
    filter: c.filter,
    run: a.proxy(c.run, this)
   })
  }, this)), this.setup(), this.initialize()
 }
 e.Defaults = {
  items: 3,
  loop: !1,
  center: !1,
  rewind: !1,
  mouseDrag: !0,
  touchDrag: !0,
  pullDrag: !0,
  freeDrag: !1,
  margin: 0,
  stagePadding: 0,
  merge: !1,
  mergeFit: !0,
  autoWidth: !1,
  startPosition: 0,
  rtl: !1,
  smartSpeed: 250,
  fluidSpeed: !1,
  dragEndSpeed: !1,
  responsive: {},
  responsiveRefreshRate: 200,
  responsiveBaseElement: b,
  fallbackEasing: "swing",
  info: !1,
  nestedItemSelector: !1,
  itemElement: "div",
  stageElement: "div",
  refreshClass: "owl-refresh",
  loadedClass: "owl-loaded",
  loadingClass: "owl-loading",
  rtlClass: "owl-rtl",
  responsiveClass: "owl-responsive",
  dragClass: "owl-drag",
  itemClass: "owl-item",
  stageClass: "owl-stage",
  stageOuterClass: "owl-stage-outer",
  grabClass: "owl-grab"
 }, e.Width = {
  Default: "default",
  Inner: "inner",
  Outer: "outer"
 }, e.Type = {
  Event: "event",
  State: "state"
 }, e.Plugins = {}, e.Workers = [{
  filter: ["width", "settings"],
  run: function () {
   this._width = this.$element.width()
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function (a) {
   a.current = this._items && this._items[this.relative(this._current)]
  }
 }, {
  filter: ["items", "settings"],
  run: function () {
   this.$stage.children(".cloned").remove()
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function (a) {
   var b = this.settings.margin || "",
    c = !this.settings.autoWidth,
    d = this.settings.rtl,
    e = {
     width: "auto",
     "margin-left": d ? b : "",
     "margin-right": d ? "" : b
    };
   !c && this.$stage.children().css(e), a.css = e
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function (a) {
   var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
    c = null,
    d = this._items.length,
    e = !this.settings.autoWidth,
    f = [];
   for (a.items = {
     merge: !1,
     width: b
    }; d--;)
    c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
   this._widths = f
  }
 }, {
  filter: ["items", "settings"],
  run: function () {
   var b = [],
    c = this._items,
    d = this.settings,
    e = Math.max(2 * d.items, 4),
    f = 2 * Math.ceil(c.length / 2),
    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
    h = "",
    i = "";
   for (g /= 2; g--;)
    b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
   this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function () {
   for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
    d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
   this._coordinates = f
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function () {
   var a = this.settings.stagePadding,
    b = this._coordinates,
    c = {
     width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
     "padding-left": a || "",
     "padding-right": a || ""
    };
   this.$stage.css(c)
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function (a) {
   var b = this._coordinates.length,
    c = !this.settings.autoWidth,
    d = this.$stage.children();
   if (c && a.items.merge)
    for (; b--;)
     a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
   else
    c && (a.css.width = a.items.width, d.css(a.css))
  }
 }, {
  filter: ["items"],
  run: function () {
   this._coordinates.length < 1 && this.$stage.removeAttr("style")
  }
 }, {
  filter: ["width", "items", "settings"],
  run: function (a) {
   a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
  }
 }, {
  filter: ["position"],
  run: function () {
   this.animate(this.coordinates(this._current))
  }
 }, {
  filter: ["width", "position", "items", "settings"],
  run: function () {
   var a,
    b,
    c,
    d,
    e = this.settings.rtl ? 1 : -1,
    f = 2 * this.settings.stagePadding,
    g = this.coordinates(this.current()) + f,
    h = g + this.width() * e,
    i = [];
   for (c = 0, d = this._coordinates.length; c < d; c++)
    a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
   this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
  }
 }], e.prototype.initialize = function () {
  if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
   var b,
    c,
    e;
   b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
  }
  this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
 }, e.prototype.setup = function () {
  var b = this.viewport(),
   c = this.options.responsive,
   d = -1,
   e = null;
  c ? (a.each(c, function (a) {
   a <= b && a > d && (d = Number(a))
  }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
   property: {
    name: "settings",
    value: e
   }
  }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
   property: {
    name: "settings",
    value: this.settings
   }
  })
 }, e.prototype.optionsLogic = function () {
  this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
 }, e.prototype.prepare = function (b) {
  var c = this.trigger("prepare", {
   content: b
  });
  return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
   content: c.data
  }), c.data
 }, e.prototype.update = function () {
  for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
    return this[a]
   }, this._invalidated), e = {}; b < c;)
   (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
  this._invalidated = {}, !this.is("valid") && this.enter("valid")
 }, e.prototype.width = function (a) {
  switch (a = a || e.Width.Default) {
   case e.Width.Inner:
   case e.Width.Outer:
    return this._width;
   default:
    return this._width - 2 * this.settings.stagePadding + this.settings.margin
  }
 }, e.prototype.refresh = function () {
  this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
 }, e.prototype.onThrottledResize = function () {
  b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
 }, e.prototype.onResize = function () {
  return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
 }, e.prototype.registerEventHandlers = function () {
  a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
   return !1
  })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
 }, e.prototype.onDragStart = function (b) {
  var d = null;
  3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
   x: d[16 === d.length ? 12 : 4],
   y: d[16 === d.length ? 13 : 5]
  }) : (d = this.$stage.position(), d = {
   x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
   y: d.top
  }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
   var d = this.difference(this._drag.pointer, this.pointer(b));
   a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
  }, this)))
 }, e.prototype.onDragMove = function (a) {
  var b = null,
   c = null,
   d = null,
   e = this.difference(this._drag.pointer, this.pointer(a)),
   f = this.difference(this._drag.stage.start, e);
  this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
 }, e.prototype.onDragEnd = function (b) {
  var d = this.difference(this._drag.pointer, this.pointer(b)),
   e = this._drag.stage.current,
   f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
  a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
   return !1
  })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
 }, e.prototype.closest = function (b, c) {
  var d = -1,
   e = 30,
   f = this.width(),
   g = this.coordinates();
  return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
   return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
  }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
 }, e.prototype.animate = function (b) {
  var c = this.speed() > 0;
  this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
   transform: "translate3d(" + b + "px,0px,0px)",
   transition: this.speed() / 1e3 + "s"
  }) : c ? this.$stage.animate({
   left: b + "px"
  }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
   left: b + "px"
  })
 }, e.prototype.is = function (a) {
  return this._states.current[a] && this._states.current[a] > 0
 }, e.prototype.current = function (a) {
  if (a === d)
   return this._current;
  if (0 === this._items.length)
   return d;
  if (a = this.normalize(a), this._current !== a) {
   var b = this.trigger("change", {
    property: {
     name: "position",
     value: a
    }
   });
   b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
    property: {
     name: "position",
     value: this._current
    }
   })
  }
  return this._current
 }, e.prototype.invalidate = function (b) {
  return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
   return b
  })
 }, e.prototype.reset = function (a) {
  a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
 }, e.prototype.normalize = function (a, b) {
  var c = this._items.length,
   e = b ? 0 : this._clones.length;
  return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
 }, e.prototype.relative = function (a) {
  return a -= this._clones.length / 2, this.normalize(a, !0)
 }, e.prototype.maximum = function (a) {
  var b,
   c,
   d,
   e = this.settings,
   f = this._coordinates.length;
  if (e.loop)
   f = this._clones.length / 2 + this._items.length - 1;
  else if (e.autoWidth || e.merge) {
   for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));)
   ;
   f = b + 1
  } else
   f = e.center ? this._items.length - 1 : this._items.length - e.items;
  return a && (f -= this._clones.length / 2), Math.max(f, 0)
 }, e.prototype.minimum = function (a) {
  return a ? 0 : this._clones.length / 2
 }, e.prototype.items = function (a) {
  return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
 }, e.prototype.mergers = function (a) {
  return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
 }, e.prototype.clones = function (b) {
  var c = this._clones.length / 2,
   e = c + this._items.length,
   f = function (a) {
    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
   };
  return b === d ? a.map(this._clones, function (a, b) {
   return f(b)
  }) : a.map(this._clones, function (a, c) {
   return a === b ? f(c) : null
  })
 }, e.prototype.speed = function (a) {
  return a !== d && (this._speed = a), this._speed
 }, e.prototype.coordinates = function (b) {
  var c,
   e = 1,
   f = b - 1;
  return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
   return this.coordinates(b)
  }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
 }, e.prototype.duration = function (a, b, c) {
  return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
 }, e.prototype.to = function (a, b) {
  var c = this.current(),
   d = null,
   e = a - this.relative(c),
   f = (e > 0) - (e < 0),
   g = this._items.length,
   h = this.minimum(),
   i = this.maximum();
  this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
 }, e.prototype.next = function (a) {
  a = a || !1, this.to(this.relative(this.current()) + 1, a)
 }, e.prototype.prev = function (a) {
  a = a || !1, this.to(this.relative(this.current()) - 1, a)
 }, e.prototype.onTransitionEnd = function (a) {
  return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
 }, e.prototype.viewport = function () {
  var d;
  if (this.options.responsiveBaseElement !== b)
   d = a(this.options.responsiveBaseElement).width();
  else if (b.innerWidth)
   d = b.innerWidth;
  else {
   if (!c.documentElement || !c.documentElement.clientWidth)
    throw "Can not detect viewport width.";
   d = c.documentElement.clientWidth
  }
  return d
 }, e.prototype.replace = function (b) {
  this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
   return 1 === this.nodeType
  }).each(a.proxy(function (a, b) {
   b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
  }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
 }, e.prototype.add = function (b, c) {
  var e = this.relative(this._current);
  c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
   content: b,
   position: c
  }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
   content: b,
   position: c
  })
 }, e.prototype.remove = function (a) {
  a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
   content: this._items[a],
   position: a
  }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
   content: null,
   position: a
  }))
 }, e.prototype.preloadAutoWidthImages = function (b) {
  b.each(a.proxy(function (b, c) {
   this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
   }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
  }, this))
 }, e.prototype.destroy = function () {
  this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
  for (var d in this._plugins)
   this._plugins[d].destroy();
  this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
 }, e.prototype.op = function (a, b, c) {
  var d = this.settings.rtl;
  switch (b) {
   case "<":
    return d ? a > c : a < c;
   case ">":
    return d ? a < c : a > c;
   case ">=":
    return d ? a <= c : a >= c;
   case "<=":
    return d ? a >= c : a <= c
  }
 }, e.prototype.on = function (a, b, c, d) {
  a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
 }, e.prototype.off = function (a, b, c, d) {
  a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
 }, e.prototype.trigger = function (b, c, d, f, g) {
  var h = {
    item: {
     count: this._items.length,
     index: this.current()
    }
   },
   i = a.camelCase(a.grep(["on", b, d], function (a) {
    return a
   }).join("-").toLowerCase()),
   j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
    relatedTarget: this
   }, h, c));
  return this._supress[b] || (a.each(this._plugins, function (a, b) {
   b.onTrigger && b.onTrigger(j)
  }), this.register({
   type: e.Type.Event,
   name: b
  }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
 }, e.prototype.enter = function (b) {
  a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
   this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
  }, this))
 }, e.prototype.leave = function (b) {
  a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
   this._states.current[b]--
  }, this))
 }, e.prototype.register = function (b) {
  if (b.type === e.Type.Event) {
   if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
    var c = a.event.special[b.name]._default;
    a.event.special[b.name]._default = function (a) {
     return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
    }, a.event.special[b.name].owl = !0
   }
  } else
   b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
    return a.inArray(c, this._states.tags[b.name]) === d
   }, this)))
 }, e.prototype.suppress = function (b) {
  a.each(b, a.proxy(function (a, b) {
   this._supress[b] = !0
  }, this))
 }, e.prototype.release = function (b) {
  a.each(b, a.proxy(function (a, b) {
   delete this._supress[b]
  }, this))
 }, e.prototype.pointer = function (a) {
  var c = {
   x: null,
   y: null
  };
  return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
 }, e.prototype.isNumeric = function (a) {
  return !isNaN(parseFloat(a))
 }, e.prototype.difference = function (a, b) {
  return {
   x: a.x - b.x,
   y: a.y - b.y
  }
 }, a.fn.owlCarousel = function (b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return this.each(function () {
   var d = a(this),
    f = d.data("owl.carousel");
   f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
    f.register({
     type: e.Type.Event,
     name: c
    }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
     a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
    }, f))
   })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
  })
 }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this._core = b, this._interval = null, this._visible = null, this._handlers = {
   "initialized.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.autoRefresh && this.watch()
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
 };
 e.Defaults = {
  autoRefresh: !0,
  autoRefreshInterval: 500
 }, e.prototype.watch = function () {
  this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
 }, e.prototype.refresh = function () {
  this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
 }, e.prototype.destroy = function () {
  var a,
   c;
  b.clearInterval(this._interval);
  for (a in this._handlers)
   this._core.$element.off(a, this._handlers[a]);
  for (c in Object.getOwnPropertyNames(this))
   "function" != typeof this[c] && (this[c] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this._core = b, this._loaded = [], this._handlers = {
   "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
     for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
       this.load(b)
      }, this); f++ < e;)
      this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
 };
 e.Defaults = {
  lazyLoad: !1
 }, e.prototype.load = function (c) {
  var d = this._core.$stage.children().eq(c),
   e = d && d.find(".owl-lazy");
  !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
   var e,
    f = a(d),
    g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
   this._core.trigger("load", {
    element: f,
    url: g
   }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
    f.css("opacity", 1), this._core.trigger("loaded", {
     element: f,
     url: g
    }, "lazy")
   }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
    f.css({
     "background-image": "url(" + g + ")",
     opacity: "1"
    }), this._core.trigger("loaded", {
     element: f,
     url: g
    }, "lazy")
   }, this), e.src = g)
  }, this)), this._loaded.push(d.get(0)))
 }, e.prototype.destroy = function () {
  var a,
   b;
  for (a in this.handlers)
   this._core.$element.off(a, this.handlers[a]);
  for (b in Object.getOwnPropertyNames(this))
   "function" != typeof this[b] && (this[b] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this._core = b, this._handlers = {
   "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.autoHeight && this.update()
   }, this),
   "changed.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
   }, this),
   "loaded.owl.lazy": a.proxy(function (a) {
    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
 };
 e.Defaults = {
  autoHeight: !1,
  autoHeightClass: "owl-height"
 }, e.prototype.update = function () {
  var b = this._core._current,
   c = b + this._core.settings.items,
   d = this._core.$stage.children().toArray().slice(b, c),
   e = [],
   f = 0;
  a.each(d, function (b, c) {
   e.push(a(c).height())
  }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
 }, e.prototype.destroy = function () {
  var a,
   b;
  for (a in this._handlers)
   this._core.$element.off(a, this._handlers[a]);
  for (b in Object.getOwnPropertyNames(this))
   "function" != typeof this[b] && (this[b] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this._core = b, this._videos = {}, this._playing = null, this._handlers = {
   "initialized.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.register({
     type: "state",
     name: "playing",
     tags: ["interacting"]
    })
   }, this),
   "resize.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
   }, this),
   "refreshed.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
   }, this),
   "changed.owl.carousel": a.proxy(function (a) {
    a.namespace && "position" === a.property.name && this._playing && this.stop()
   }, this),
   "prepared.owl.carousel": a.proxy(function (b) {
    if (b.namespace) {
     var c = a(b.content).find(".owl-video");
     c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
    }
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
   this.play(a)
  }, this))
 };
 e.Defaults = {
  video: !1,
  videoHeight: !1,
  videoWidth: !1
 }, e.prototype.fetch = function (a, b) {
  var c = function () {
    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
   }(),
   d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
   e = a.attr("data-width") || this._core.settings.videoWidth,
   f = a.attr("data-height") || this._core.settings.videoHeight,
   g = a.attr("href");
  if (!g)
   throw new Error("Missing video URL.");
  if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)
   c = "youtube";
  else if (d[3].indexOf("vimeo") > -1)
   c = "vimeo";
  else {
   if (!(d[3].indexOf("vzaar") > -1))
    throw new Error("Video URL not supported.");
   c = "vzaar"
  }
  d = d[6], this._videos[g] = {
   type: c,
   id: d,
   width: e,
   height: f
  }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
 }, e.prototype.thumbnail = function (b, c) {
  var d,
   e,
   f,
   g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
   h = b.find("img"),
   i = "src",
   j = "",
   k = this._core.settings,
   l = function (a) {
    e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
   };
  return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
   type: "GET",
   url: "//vimeo.com/api/v2/video/" + c.id + ".json",
   jsonp: "callback",
   dataType: "jsonp",
   success: function (a) {
    f = a[0].thumbnail_large, l(f)
   }
  }) : "vzaar" === c.type && a.ajax({
   type: "GET",
   url: "//vzaar.com/api/videos/" + c.id + ".json",
   jsonp: "callback",
   dataType: "jsonp",
   success: function (a) {
    f = a.framegrab_url, l(f)
   }
  }))
 }, e.prototype.stop = function () {
  this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
 }, e.prototype.play = function (b) {
  var c,
   d = a(b.target),
   e = d.closest("." + this._core.settings.itemClass),
   f = this._videos[e.attr("data-video")],
   g = f.width || "100%",
   h = f.height || this._core.$stage.height();
  this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
 }, e.prototype.isInFullScreen = function () {
  var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
  return b && a(b).parent().hasClass("owl-video-frame")
 }, e.prototype.destroy = function () {
  var a,
   b;
  this._core.$element.off("click.owl.video");
  for (a in this._handlers)
   this._core.$element.off(a, this._handlers[a]);
  for (b in Object.getOwnPropertyNames(this))
   "function" != typeof this[b] && (this[b] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
   "change.owl.carousel": a.proxy(function (a) {
    a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
   }, this),
   "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
    a.namespace && (this.swapping = "translated" == a.type)
   }, this),
   "translate.owl.carousel": a.proxy(function (a) {
    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
   }, this)
  }, this.core.$element.on(this.handlers)
 };
 e.Defaults = {
  animateOut: !1,
  animateIn: !1
 }, e.prototype.swap = function () {
  if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
   this.core.speed(0);
   var b,
    c = a.proxy(this.clear, this),
    d = this.core.$stage.children().eq(this.previous),
    e = this.core.$stage.children().eq(this.next),
    f = this.core.settings.animateIn,
    g = this.core.settings.animateOut;
   this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
    left: b + "px"
   }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
  }
 }, e.prototype.clear = function (b) {
  a(b.target).css({
   left: ""
  }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
 }, e.prototype.destroy = function () {
  var a,
   b;
  for (a in this.handlers)
   this.core.$element.off(a, this.handlers[a]);
  for (b in Object.getOwnPropertyNames(this))
   "function" != typeof this[b] && (this[b] = null);
 }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 var e = function (b) {
  this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
   "changed.owl.carousel": a.proxy(function (a) {
    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
   }, this),
   "initialized.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.autoplay && this.play()
   }, this),
   "play.owl.autoplay": a.proxy(function (a, b, c) {
    a.namespace && this.play(b, c)
   }, this),
   "stop.owl.autoplay": a.proxy(function (a) {
    a.namespace && this.stop()
   }, this),
   "mouseover.owl.autoplay": a.proxy(function () {
    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
   }, this),
   "mouseleave.owl.autoplay": a.proxy(function () {
    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
   }, this),
   "touchstart.owl.core": a.proxy(function () {
    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
   }, this),
   "touchend.owl.core": a.proxy(function () {
    this._core.settings.autoplayHoverPause && this.play()
   }, this)
  }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
 };
 e.Defaults = {
  autoplay: !1,
  autoplayTimeout: 5e3,
  autoplayHoverPause: !1,
  autoplaySpeed: !1
 }, e.prototype.play = function (a, b) {
  this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
 }, e.prototype._getNextTimeout = function (d, e) {
  return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
   this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
  }, this), d || this._core.settings.autoplayTimeout)
 }, e.prototype._setAutoPlayInterval = function () {
  this._timeout = this._getNextTimeout()
 }, e.prototype.stop = function () {
  this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
 }, e.prototype.pause = function () {
  this._core.is("rotating") && (this._paused = !0)
 }, e.prototype.destroy = function () {
  var a,
   b;
  this.stop();
  for (a in this._handlers)
   this._core.$element.off(a, this._handlers[a]);
  for (b in Object.getOwnPropertyNames(this))
   "function" != typeof this[b] && (this[b] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 "use strict";
 var e = function (b) {
  this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
   next: this._core.next,
   prev: this._core.prev,
   to: this._core.to
  }, this._handlers = {
   "prepared.owl.carousel": a.proxy(function (b) {
    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
   }, this),
   "added.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
   }, this),
   "remove.owl.carousel": a.proxy(function (a) {
    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
   }, this),
   "changed.owl.carousel": a.proxy(function (a) {
    a.namespace && "position" == a.property.name && this.draw()
   }, this),
   "initialized.owl.carousel": a.proxy(function (a) {
    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
   }, this),
   "refreshed.owl.carousel": a.proxy(function (a) {
    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
 };
 e.Defaults = {
  nav: !1,
  navText: ["prev", "next"],
  navSpeed: !1,
  navElement: "div",
  navContainer: !1,
  navContainerClass: "owl-nav",
  navClass: ["owl-prev", "owl-next"],
  slideBy: 1,
  dotClass: "owl-dot",
  dotsClass: "owl-dots",
  dots: !0,
  dotsEach: !1,
  dotsData: !1,
  dotsSpeed: !1,
  dotsContainer: !1
 }, e.prototype.initialize = function () {
  var b,
   c = this._core.settings;
  this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
   this.prev(c.navSpeed)
  }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
   this.next(c.navSpeed)
  }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
   var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
   b.preventDefault(), this.to(d, c.dotsSpeed)
  }, this));
  for (b in this._overrides)
   this._core[b] = a.proxy(this[b], this)
 }, e.prototype.destroy = function () {
  var a,
   b,
   c,
   d;
  for (a in this._handlers)
   this.$element.off(a, this._handlers[a]);
  for (b in this._controls)
   this._controls[b].remove();
  for (d in this.overides)
   this._core[d] = this._overrides[d];
  for (c in Object.getOwnPropertyNames(this))
   "function" != typeof this[c] && (this[c] = null)
 }, e.prototype.update = function () {
  var a,
   b,
   c,
   d = this._core.clones().length / 2,
   e = d + this._core.items().length,
   f = this._core.maximum(!0),
   g = this._core.settings,
   h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
  if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
   for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
    if (b >= h || 0 === b) {
     if (this._pages.push({
       start: Math.min(f, a - d),
       end: a - d + h - 1
      }), Math.min(f, a - d) === f)
      break;
     b = 0, ++c
    }
    b += this._core.mergers(this._core.relative(a))
   }
 }, e.prototype.draw = function () {
  var b,
   c = this._core.settings,
   d = this._core.items().length <= c.items,
   e = this._core.relative(this._core.current()),
   f = c.loop || c.rewind;
  this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
 }, e.prototype.onTrigger = function (b) {
  var c = this._core.settings;
  b.page = {
   index: a.inArray(this.current(), this._pages),
   count: this._pages.length,
   size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
  }
 }, e.prototype.current = function () {
  var b = this._core.relative(this._core.current());
  return a.grep(this._pages, a.proxy(function (a, c) {
   return a.start <= b && a.end >= b
  }, this)).pop()
 }, e.prototype.getPosition = function (b) {
  var c,
   d,
   e = this._core.settings;
  return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
 }, e.prototype.next = function (b) {
  a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
 }, e.prototype.prev = function (b) {
  a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
 }, e.prototype.to = function (b, c, d) {
  var e;
  !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
 }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 "use strict";
 var e = function (c) {
  this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
   "initialized.owl.carousel": a.proxy(function (c) {
    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
   }, this),
   "prepared.owl.carousel": a.proxy(function (b) {
    if (b.namespace) {
     var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
     if (!c)
      return;
     this._hashes[c] = b.content
    }
   }, this),
   "changed.owl.carousel": a.proxy(function (c) {
    if (c.namespace && "position" === c.property.name) {
     var d = this._core.items(this._core.relative(this._core.current())),
      e = a.map(this._hashes, function (a, b) {
       return a === d ? b : null
      }).join();
     if (!e || b.location.hash.slice(1) === e)
      return;
     b.location.hash = e
    }
   }, this)
  }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
   var c = b.location.hash.substring(1),
    e = this._core.$stage.children(),
    f = this._hashes[c] && e.index(this._hashes[c]);
   f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
  }, this))
 };
 e.Defaults = {
  URLhashListener: !1
 }, e.prototype.destroy = function () {
  var c,
   d;
  a(b).off("hashchange.owl.navigation");
  for (c in this._handlers)
   this._core.$element.off(c, this._handlers[c]);
  for (d in Object.getOwnPropertyNames(this))
   "function" != typeof this[d] && (this[d] = null)
 }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
 function e(b, c) {
  var e = !1,
   f = b.charAt(0).toUpperCase() + b.slice(1);
  return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
   if (g[b] !== d)
    return e = !c || b, !1
  }), e
 }

 function f(a) {
  return e(a, !0)
 }
 var g = a("<support>").get(0).style,
  h = "Webkit Moz O ms".split(" "),
  i = {
   transition: {
    end: {
     WebkitTransition: "webkitTransitionEnd",
     MozTransition: "transitionend",
     OTransition: "oTransitionEnd",
     transition: "transitionend"
    }
   },
   animation: {
    end: {
     WebkitAnimation: "webkitAnimationEnd",
     MozAnimation: "animationend",
     OAnimation: "oAnimationEnd",
     animation: "animationend"
    }
   }
  },
  j = {
   csstransforms: function () {
    return !!e("transform")
   },
   csstransforms3d: function () {
    return !!e("perspective")
   },
   csstransitions: function () {
    return !!e("transition")
   },
   cssanimations: function () {
    return !!e("animation")
   }
  };
 j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

// 13. Bootstrap v3.3.7
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
 throw new Error("Bootstrap's JavaScript requires jQuery"); +
function (a) {
 "use strict";
 var b = a.fn.jquery.split(" ")[0].split(".");
 if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3)
  throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
 "use strict";

 function b() {
  var a = document.createElement("bootstrap"),
   b = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
   };
  for (var c in b)
   if (void 0 !== a.style[c])
    return {
     end: b[c]
    };
  return !1
 }
 a.fn.emulateTransitionEnd = function (b) {
  var c = !1,
   d = this;
  a(this).one("bsTransitionEnd", function () {
   c = !0
  });
  var e = function () {
   c || a(d).trigger(a.support.transition.end)
  };
  return setTimeout(e, b), this
 }, a(function () {
  a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
   bindType: a.support.transition.end,
   delegateType: a.support.transition.end,
   handle: function (b) {
    if (a(b.target).is(this))
     return b.handleObj.handler.apply(this, arguments)
   }
  })
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var c = a(this),
    e = c.data("bs.alert");
   e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
  })
 }
 var c = '[data-dismiss="alert"]',
  d = function (b) {
   a(b).on("click", c, this.close)
  };
 d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
  function c() {
   g.detach().trigger("closed.bs.alert").remove()
  }
  var e = a(this),
   f = e.attr("data-target");
  f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
  var g = a("#" === f ? [] : f);
  b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
 };
 var e = a.fn.alert;
 a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
  return a.fn.alert = e, this
 }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.button"),
    f = "object" == typeof b && b;
   e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
  })
 }
 var c = function (b, d) {
  this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
 };
 c.VERSION = "3.3.7", c.DEFAULTS = {
  loadingText: "loading..."
 }, c.prototype.setState = function (b) {
  var c = "disabled",
   d = this.$element,
   e = d.is("input") ? "val" : "html",
   f = d.data();
  b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
   d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
  }, this), 0)
 }, c.prototype.toggle = function () {
  var a = !0,
   b = this.$element.closest('[data-toggle="buttons"]');
  if (b.length) {
   var c = this.$element.find("input");
   "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
  } else
   this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
 };
 var d = a.fn.button;
 a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
  return a.fn.button = d, this
 }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
  var d = a(c.target).closest(".btn");
  b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
 }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
  a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.carousel"),
    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
    g = "string" == typeof b ? b : f.slide;
   e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
  })
 }
 var c = function (b, c) {
  this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
 };
 c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
  interval: 5e3,
  pause: "hover",
  wrap: !0,
  keyboard: !0
 }, c.prototype.keydown = function (a) {
  if (!/input|textarea/i.test(a.target.tagName)) {
   switch (a.which) {
    case 37:
     this.prev();
     break;
    case 39:
     this.next();
     break;
    default:
     return
   }
   a.preventDefault()
  }
 }, c.prototype.cycle = function (b) {
  return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
 }, c.prototype.getItemIndex = function (a) {
  return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
 }, c.prototype.getItemForDirection = function (a, b) {
  var c = this.getItemIndex(b),
   d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
  if (d && !this.options.wrap)
   return b;
  var e = "prev" == a ? -1 : 1,
   f = (c + e) % this.$items.length;
  return this.$items.eq(f)
 }, c.prototype.to = function (a) {
  var b = this,
   c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
  if (!(a > this.$items.length - 1 || a < 0))
   return this.sliding ? this.$element.one("slid.bs.carousel", function () {
    b.to(a)
   }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
 }, c.prototype.pause = function (b) {
  return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
 }, c.prototype.next = function () {
  if (!this.sliding)
   return this.slide("next")
 }, c.prototype.prev = function () {
  if (!this.sliding)
   return this.slide("prev")
 }, c.prototype.slide = function (b, d) {
  var e = this.$element.find(".item.active"),
   f = d || this.getItemForDirection(b, e),
   g = this.interval,
   h = "next" == b ? "left" : "right",
   i = this;
  if (f.hasClass("active"))
   return this.sliding = !1;
  var j = f[0],
   k = a.Event("slide.bs.carousel", {
    relatedTarget: j,
    direction: h
   });
  if (this.$element.trigger(k), !k.isDefaultPrevented()) {
   if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
    this.$indicators.find(".active").removeClass("active");
    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
    l && l.addClass("active")
   }
   var m = a.Event("slid.bs.carousel", {
    relatedTarget: j,
    direction: h
   });
   return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
    f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
     i.$element.trigger(m)
    }, 0)
   }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
  }
 };
 var d = a.fn.carousel;
 a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
  return a.fn.carousel = d, this
 };
 var e = function (c) {
  var d,
   e = a(this),
   f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
  if (f.hasClass("carousel")) {
   var g = a.extend({}, f.data(), e.data()),
    h = e.attr("data-slide-to");
   h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
  }
 };
 a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
  a('[data-ride="carousel"]').each(function () {
   var c = a(this);
   b.call(c, c.data())
  })
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  var c,
   d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
  return a(d)
 }

 function c(b) {
  return this.each(function () {
   var c = a(this),
    e = c.data("bs.collapse"),
    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
   !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
  })
 }
 var d = function (b, c) {
  this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
 };
 d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
  toggle: !0
 }, d.prototype.dimension = function () {
  var a = this.$element.hasClass("width");
  return a ? "width" : "height"
 }, d.prototype.show = function () {
  if (!this.transitioning && !this.$element.hasClass("in")) {
   var b,
    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
   if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
    var f = a.Event("show.bs.collapse");
    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
     e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
     var g = this.dimension();
     this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
     var h = function () {
      this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
     };
     if (!a.support.transition)
      return h.call(this);
     var i = a.camelCase(["scroll", g].join("-"));
     this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
    }
   }
  }
 }, d.prototype.hide = function () {
  if (!this.transitioning && this.$element.hasClass("in")) {
   var b = a.Event("hide.bs.collapse");
   if (this.$element.trigger(b), !b.isDefaultPrevented()) {
    var c = this.dimension();
    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
    var e = function () {
     this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
    };
    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
   }
  }
 }, d.prototype.toggle = function () {
  this[this.$element.hasClass("in") ? "hide" : "show"]()
 }, d.prototype.getParent = function () {
  return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
   var e = a(d);
   this.addAriaAndCollapsedClass(b(e), e)
  }, this)).end()
 }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
  var c = a.hasClass("in");
  a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
 };
 var e = a.fn.collapse;
 a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
  return a.fn.collapse = e, this
 }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
  var e = a(this);
  e.attr("data-target") || d.preventDefault();
  var f = b(e),
   g = f.data("bs.collapse"),
   h = g ? "toggle" : e.data();
  c.call(f, h)
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  var c = b.attr("data-target");
  c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
  var d = c && a(c);
  return d && d.length ? d : b.parent()
 }

 function c(c) {
  c && 3 === c.which || (a(e).remove(), a(f).each(function () {
   var d = a(this),
    e = b(d),
    f = {
     relatedTarget: this
    };
   e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
  }))
 }

 function d(b) {
  return this.each(function () {
   var c = a(this),
    d = c.data("bs.dropdown");
   d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
  })
 }
 var e = ".dropdown-backdrop",
  f = '[data-toggle="dropdown"]',
  g = function (b) {
   a(b).on("click.bs.dropdown", this.toggle)
  };
 g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
  var e = a(this);
  if (!e.is(".disabled, :disabled")) {
   var f = b(e),
    g = f.hasClass("open");
   if (c(), !g) {
    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
    var h = {
     relatedTarget: this
    };
    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
     return;
    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
   }
   return !1
  }
 }, g.prototype.keydown = function (c) {
  if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
   var d = a(this);
   if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
    var e = b(d),
     g = e.hasClass("open");
    if (!g && 27 != c.which || g && 27 == c.which)
     return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
    var h = " li:not(.disabled):visible a",
     i = e.find(".dropdown-menu" + h);
    if (i.length) {
     var j = i.index(c.target);
     38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
    }
   }
  }
 };
 var h = a.fn.dropdown;
 a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
  return a.fn.dropdown = h, this
 }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
  a.stopPropagation()
 }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
 "use strict";

 function b(b, d) {
  return this.each(function () {
   var e = a(this),
    f = e.data("bs.modal"),
    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
   f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
  })
 }
 var c = function (b, c) {
  this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
   this.$element.trigger("loaded.bs.modal")
  }, this))
 };
 c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
  backdrop: !0,
  keyboard: !0,
  show: !0
 }, c.prototype.toggle = function (a) {
  return this.isShown ? this.hide() : this.show(a)
 }, c.prototype.show = function (b) {
  var d = this,
   e = a.Event("show.bs.modal", {
    relatedTarget: b
   });
  this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
   d.$element.one("mouseup.dismiss.bs.modal", function (b) {
    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
   })
  }), this.backdrop(function () {
   var e = a.support.transition && d.$element.hasClass("fade");
   d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
   var f = a.Event("shown.bs.modal", {
    relatedTarget: b
   });
   e ? d.$dialog.one("bsTransitionEnd", function () {
    d.$element.trigger("focus").trigger(f)
   }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
  }))
 }, c.prototype.hide = function (b) {
  b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
 }, c.prototype.enforceFocus = function () {
  a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
   document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
  }, this))
 }, c.prototype.escape = function () {
  this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
   27 == a.which && this.hide()
  }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
 }, c.prototype.resize = function () {
  this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
 }, c.prototype.hideModal = function () {
  var a = this;
  this.$element.hide(), this.backdrop(function () {
   a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
  })
 }, c.prototype.removeBackdrop = function () {
  this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
 }, c.prototype.backdrop = function (b) {
  var d = this,
   e = this.$element.hasClass("fade") ? "fade" : "";
  if (this.isShown && this.options.backdrop) {
   var f = a.support.transition && e;
   if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
     return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
    }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
    return;
   f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
  } else if (!this.isShown && this.$backdrop) {
   this.$backdrop.removeClass("in");
   var g = function () {
    d.removeBackdrop(), b && b()
   };
   a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
  } else
   b && b()
 }, c.prototype.handleUpdate = function () {
  this.adjustDialog()
 }, c.prototype.adjustDialog = function () {
  var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
  this.$element.css({
   paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
   paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
  })
 }, c.prototype.resetAdjustments = function () {
  this.$element.css({
   paddingLeft: "",
   paddingRight: ""
  })
 }, c.prototype.checkScrollbar = function () {
  var a = window.innerWidth;
  if (!a) {
   var b = document.documentElement.getBoundingClientRect();
   a = b.right - Math.abs(b.left)
  }
  this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
 }, c.prototype.setScrollbar = function () {
  var a = parseInt(this.$body.css("padding-right") || 0, 10);
  this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
 }, c.prototype.resetScrollbar = function () {
  this.$body.css("padding-right", this.originalBodyPad)
 }, c.prototype.measureScrollbar = function () {
  var a = document.createElement("div");
  a.className = "modal-scrollbar-measure", this.$body.append(a);
  var b = a.offsetWidth - a.clientWidth;
  return this.$body[0].removeChild(a), b
 };
 var d = a.fn.modal;
 a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
  return a.fn.modal = d, this
 }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
  var d = a(this),
   e = d.attr("href"),
   f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
   g = f.data("bs.modal") ? "toggle" : a.extend({
    remote: !/#/.test(e) && e
   }, f.data(), d.data());
  d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
   a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
    d.is(":visible") && d.trigger("focus")
   })
  }), b.call(f, g, this)
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.tooltip"),
    f = "object" == typeof b && b;
   !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
  })
 }
 var c = function (a, b) {
  this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
 };
 c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1,
  viewport: {
   selector: "body",
   padding: 0
  }
 }, c.prototype.init = function (b, c, d) {
  if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
    click: !1,
    hover: !1,
    focus: !1
   }, this.$element[0] instanceof document.constructor && !this.options.selector)
   throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
  for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
   var g = e[f];
   if ("click" == g)
    this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
   else if ("manual" != g) {
    var h = "hover" == g ? "mouseenter" : "focusin",
     i = "hover" == g ? "mouseleave" : "focusout";
    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
   }
  }
  this.options.selector ? this._options = a.extend({}, this.options, {
   trigger: "manual",
   selector: ""
  }) : this.fixTitle()
 }, c.prototype.getDefaults = function () {
  return c.DEFAULTS
 }, c.prototype.getOptions = function (b) {
  return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
   show: b.delay,
   hide: b.delay
  }), b
 }, c.prototype.getDelegateOptions = function () {
  var b = {},
   c = this.getDefaults();
  return this._options && a.each(this._options, function (a, d) {
   c[a] != d && (b[a] = d)
  }), b
 }, c.prototype.enter = function (b) {
  var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
  return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
   "in" == c.hoverState && c.show()
  }, c.options.delay.show)) : c.show())
 }, c.prototype.isInStateTrue = function () {
  for (var a in this.inState)
   if (this.inState[a])
    return !0;
  return !1
 }, c.prototype.leave = function (b) {
  var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
  if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue())
   return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
    "out" == c.hoverState && c.hide()
   }, c.options.delay.hide)) : c.hide()
 }, c.prototype.show = function () {
  var b = a.Event("show.bs." + this.type);
  if (this.hasContent() && this.enabled) {
   this.$element.trigger(b);
   var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
   if (b.isDefaultPrevented() || !d)
    return;
   var e = this,
    f = this.tip(),
    g = this.getUID(this.type);
   this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
   var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
    i = /\s?auto?\s?/i,
    j = i.test(h);
   j && (h = h.replace(i, "") || "top"), f.detach().css({
    top: 0,
    left: 0,
    display: "block"
   }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
   var k = this.getPosition(),
    l = f[0].offsetWidth,
    m = f[0].offsetHeight;
   if (j) {
    var n = h,
     o = this.getPosition(this.$viewport);
    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
   }
   var p = this.getCalculatedOffset(h, k, l, m);
   this.applyPlacement(p, h);
   var q = function () {
    var a = e.hoverState;
    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
   };
   a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
  }
 }, c.prototype.applyPlacement = function (b, c) {
  var d = this.tip(),
   e = d[0].offsetWidth,
   f = d[0].offsetHeight,
   g = parseInt(d.css("margin-top"), 10),
   h = parseInt(d.css("margin-left"), 10);
  isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
   using: function (a) {
    d.css({
     top: Math.round(a.top),
     left: Math.round(a.left)
    })
   }
  }, b), 0), d.addClass("in");
  var i = d[0].offsetWidth,
   j = d[0].offsetHeight;
  "top" == c && j != f && (b.top = b.top + f - j);
  var k = this.getViewportAdjustedDelta(c, b, i, j);
  k.left ? b.left += k.left : b.top += k.top;
  var l = /top|bottom/.test(c),
   m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
   n = l ? "offsetWidth" : "offsetHeight";
  d.offset(b), this.replaceArrow(m, d[0][n], l)
 }, c.prototype.replaceArrow = function (a, b, c) {
  this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
 }, c.prototype.setContent = function () {
  var a = this.tip(),
   b = this.getTitle();
  a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
 }, c.prototype.hide = function (b) {
  function d() {
   "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
  }
  var e = this,
   f = a(this.$tip),
   g = a.Event("hide.bs." + this.type);
  if (this.$element.trigger(g), !g.isDefaultPrevented())
   return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
 }, c.prototype.fixTitle = function () {
  var a = this.$element;
  (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
 }, c.prototype.hasContent = function () {
  return this.getTitle()
 }, c.prototype.getPosition = function (b) {
  b = b || this.$element;
  var c = b[0],
   d = "BODY" == c.tagName,
   e = c.getBoundingClientRect();
  null == e.width && (e = a.extend({}, e, {
   width: e.right - e.left,
   height: e.bottom - e.top
  }));
  var f = window.SVGElement && c instanceof window.SVGElement,
   g = d ? {
    top: 0,
    left: 0
   } : f ? null : b.offset(),
   h = {
    scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
   },
   i = d ? {
    width: a(window).width(),
    height: a(window).height()
   } : null;
  return a.extend({}, e, h, i, g)
 }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
  return "bottom" == a ? {
   top: b.top + b.height,
   left: b.left + b.width / 2 - c / 2
  } : "top" == a ? {
   top: b.top - d,
   left: b.left + b.width / 2 - c / 2
  } : "left" == a ? {
   top: b.top + b.height / 2 - d / 2,
   left: b.left - c
  } : {
   top: b.top + b.height / 2 - d / 2,
   left: b.left + b.width
  }
 }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
  var e = {
   top: 0,
   left: 0
  };
  if (!this.$viewport)
   return e;
  var f = this.options.viewport && this.options.viewport.padding || 0,
   g = this.getPosition(this.$viewport);
  if (/right|left/.test(a)) {
   var h = b.top - f - g.scroll,
    i = b.top + f - g.scroll + d;
   h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
  } else {
   var j = b.left - f,
    k = b.left + f + c;
   j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
  }
  return e
 }, c.prototype.getTitle = function () {
  var a,
   b = this.$element,
   c = this.options;
  return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
 }, c.prototype.getUID = function (a) {
  do a += ~~(1e6 * Math.random());
  while (document.getElementById(a));
  return a
 }, c.prototype.tip = function () {
  if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))
   throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
  return this.$tip
 }, c.prototype.arrow = function () {
  return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
 }, c.prototype.enable = function () {
  this.enabled = !0
 }, c.prototype.disable = function () {
  this.enabled = !1
 }, c.prototype.toggleEnabled = function () {
  this.enabled = !this.enabled
 }, c.prototype.toggle = function (b) {
  var c = this;
  b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
 }, c.prototype.destroy = function () {
  var a = this;
  clearTimeout(this.timeout), this.hide(function () {
   a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
  })
 };
 var d = a.fn.tooltip;
 a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
  return a.fn.tooltip = d, this
 }
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.popover"),
    f = "object" == typeof b && b;
   !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
  })
 }
 var c = function (a, b) {
  this.init("popover", a, b)
 };
 if (!a.fn.tooltip)
  throw new Error("Popover requires tooltip.js");
 c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
  placement: "right",
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
 }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
  return c.DEFAULTS
 }, c.prototype.setContent = function () {
  var a = this.tip(),
   b = this.getTitle(),
   c = this.getContent();
  a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
 }, c.prototype.hasContent = function () {
  return this.getTitle() || this.getContent()
 }, c.prototype.getContent = function () {
  var a = this.$element,
   b = this.options;
  return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
 }, c.prototype.arrow = function () {
  return this.$arrow = this.$arrow || this.tip().find(".arrow")
 };
 var d = a.fn.popover;
 a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
  return a.fn.popover = d, this
 }
}(jQuery), + function (a) {
 "use strict";

 function b(c, d) {
  this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
 }

 function c(c) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.scrollspy"),
    f = "object" == typeof c && c;
   e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
  })
 }
 b.VERSION = "3.3.7", b.DEFAULTS = {
  offset: 10
 }, b.prototype.getScrollHeight = function () {
  return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
 }, b.prototype.refresh = function () {
  var b = this,
   c = "offset",
   d = 0;
  this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
   var b = a(this),
    e = b.data("target") || b.attr("href"),
    f = /^#./.test(e) && a(e);
   return f && f.length && f.is(":visible") && [
    [f[c]().top + d, e]
   ] || null
  }).sort(function (a, b) {
   return a[0] - b[0]
  }).each(function () {
   b.offsets.push(this[0]), b.targets.push(this[1])
  })
 }, b.prototype.process = function () {
  var a,
   b = this.$scrollElement.scrollTop() + this.options.offset,
   c = this.getScrollHeight(),
   d = this.options.offset + c - this.$scrollElement.height(),
   e = this.offsets,
   f = this.targets,
   g = this.activeTarget;
  if (this.scrollHeight != c && this.refresh(), b >= d)
   return g != (a = f[f.length - 1]) && this.activate(a);
  if (g && b < e[0])
   return this.activeTarget = null, this.clear();
  for (a = e.length; a--;)
   g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
 }, b.prototype.activate = function (b) {
  this.activeTarget = b, this.clear();
  var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
   d = a(c).parents("li").addClass("active");
  d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
 }, b.prototype.clear = function () {
  a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
 };
 var d = a.fn.scrollspy;
 a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
  return a.fn.scrollspy = d, this
 }, a(window).on("load.bs.scrollspy.data-api", function () {
  a('[data-spy="scroll"]').each(function () {
   var b = a(this);
   c.call(b, b.data())
  })
 })
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.tab");
   e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
  })
 }
 var c = function (b) {
  this.element = a(b)
 };
 c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
  var b = this.element,
   c = b.closest("ul:not(.dropdown-menu)"),
   d = b.data("target");
  if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
   var e = c.find(".active:last a"),
    f = a.Event("hide.bs.tab", {
     relatedTarget: b[0]
    }),
    g = a.Event("show.bs.tab", {
     relatedTarget: e[0]
    });
   if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
    var h = a(d);
    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
     e.trigger({
      type: "hidden.bs.tab",
      relatedTarget: b[0]
     }), b.trigger({
      type: "shown.bs.tab",
      relatedTarget: e[0]
     })
    })
   }
  }
 }, c.prototype.activate = function (b, d, e) {
  function f() {
   g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
  }
  var g = d.find("> .active"),
   h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
  g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
 };
 var d = a.fn.tab;
 a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
  return a.fn.tab = d, this
 };
 var e = function (c) {
  c.preventDefault(), b.call(a(this), "show")
 };
 a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
 "use strict";

 function b(b) {
  return this.each(function () {
   var d = a(this),
    e = d.data("bs.affix"),
    f = "object" == typeof b && b;
   e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
  })
 }
 var c = function (b, d) {
  this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
 };
 c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
  offset: 0,
  target: window
 }, c.prototype.getState = function (a, b, c, d) {
  var e = this.$target.scrollTop(),
   f = this.$element.offset(),
   g = this.$target.height();
  if (null != c && "top" == this.affixed)
   return e < c && "top";
  if ("bottom" == this.affixed)
   return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
  var h = null == this.affixed,
   i = h ? e : f.top,
   j = h ? g : b;
  return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
 }, c.prototype.getPinnedOffset = function () {
  if (this.pinnedOffset)
   return this.pinnedOffset;
  this.$element.removeClass(c.RESET).addClass("affix");
  var a = this.$target.scrollTop(),
   b = this.$element.offset();
  return this.pinnedOffset = b.top - a
 }, c.prototype.checkPositionWithEventLoop = function () {
  setTimeout(a.proxy(this.checkPosition, this), 1)
 }, c.prototype.checkPosition = function () {
  if (this.$element.is(":visible")) {
   var b = this.$element.height(),
    d = this.options.offset,
    e = d.top,
    f = d.bottom,
    g = Math.max(a(document).height(), a(document.body).height());
   "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
   var h = this.getState(g, b, e, f);
   if (this.affixed != h) {
    null != this.unpin && this.$element.css("top", "");
    var i = "affix" + (h ? "-" + h : ""),
     j = a.Event(i + ".bs.affix");
    if (this.$element.trigger(j), j.isDefaultPrevented())
     return;
    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
   }
   "bottom" == h && this.$element.offset({
    top: g - b - f
   })
  }
 };
 var d = a.fn.affix;
 a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
  return a.fn.affix = d, this
 }, a(window).on("load", function () {
  a('[data-spy="affix"]').each(function () {
   var c = a(this),
    d = c.data();
   d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
  })
 })
}(jQuery);