(function() {
    var window = this,
        document = this.document;
    var h,
        p = this,
        notNull = function(val) {
            return null !== val
        },
        aa = function() {},
        // 为对象创建单例
        singleton = function(_Obj) {
            _Obj.getInstance = function() {
                return _Obj.ma ? _Obj.ma : _Obj.ma = new _Obj
            }
        },
        // 获取a的类型
        // da -> type
        type = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        // isArray
        // t -> isArray
        isArray = function(a) {
            return "array" == type(a)
        },
        // ea -> isList
        isList = function(a) {
            var b = type(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        // u -> isString
        isString = function(a) {
            return "string" == typeof a
        },
        // fa -> isBoolean
        isBoolean = function(a) {
            return "boolean" == typeof a
        },
        // v -> isNumber
        isNumber = function(a) {
            return "number" == typeof a
        },
        // ga -> isFunction
        isFunction = function(a) {
            return "function" == type(a)
        },
        // y -> isNotNull
        isNotNull = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        // ha -> closure_uid
        closure_uid = "closure_uid_" + (1E9 * Math.random() >>> 0),
        // ia -> uuid
        uuid = 0,
        /**
         * @param {Function} fn
         * @param {Object} item
         * @param {(Node|string)} context
         * @return {?}
         */
        var proxy = function(fn, item, context) {
          return fn.call.apply(fn.bind, arguments);
        };
        /**
         * @param {Function} fn
         * @param {Object} item
         * @param {(Node|string)} endpoint
         * @return {?}
         */
        var $goog$bindJs_$ = function(fn, item, endpoint) {
          if (!fn) {
            throw Error();
          }
          if (2 < arguments.length) {
            /** @type {Array.<?>} */
            var args = Array.prototype.slice.call(arguments, 2);
            return function() {
              /** @type {Array.<?>} */
              var newArgs = Array.prototype.slice.call(arguments);
              Array.prototype.unshift.apply(newArgs, args);
              return fn.apply(item, newArgs);
            };
          }
          return function() {
            return fn.apply(item, arguments);
          };
        };
        /**
         * @param {Function} fn
         * @param {Object} item
         * @param {(Node|string)} endpoint
         * @return {?}
         */
        var bind = function(fn, item, endpoint) {
          /** @type {function (Function, Object, (Node|string)): ?} */
          bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? proxy : $goog$bindJs_$;
          return bind.apply(null, arguments);
        };
        /**
         * @param {Function} func
         * @param {?} var_args
         * @return {?}
         */
        var curry = function(func, var_args) {
          /** @type {Array.<?>} */
          var args = Array.prototype.slice.call(arguments, 1);
          return function() {
            /** @type {Array.<?>} */
            var newArgs = args.slice();
            newArgs.push.apply(newArgs, arguments);
            return func.apply(this, newArgs);
          };
        };
        // now -> now
        now = function() {
            return +new Date
        },
        // val("a.b.c..", value)
        // get window[a.b.c....]
        // set window[a.b.c....] = value
        // la => $goog$exportPath_$
        /**
         * @param {string} $name$$
         * @param {Function} func
         * @return {undefined}
         */
        var $goog$exportPath_$ = function($name$$, func) {
          $name$$ = $name$$.split(".");
          var root = global;
          if (!($name$$[0] in root)) {
            if (!!root.execScript) {
              root.execScript("var " + $name$$[0]);
            }
          }
          var part;
          for (;$name$$.length && (part = $name$$.shift());) {
            if (!$name$$.length && set(func)) {
              /** @type {Function} */
              root[part] = func;
            } else {
              if (root[part]) {
                root = root[part];
              } else {
                root = root[part] = {};
              }
            }
          }
        };
        extend = function(Clazz, Base) {
          function Obj() {}
          Obj.prototype = Base.prototype;
          Clazz.Fa = Base.prototype;
          Clazz.prototype = new Obj;
          Clazz.prototype.constructor = Clazz;
          Clazz.cc = function(obj, method, f) {
            var args = Array(arguments.length - 2)
            for (var i = 2; i < arguments.length; i++) {
              args[i - 2] = arguments[i];
            }
            return Base.prototype[method].apply(obj, args)
          }
        };
    var CustomError = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, CustomError);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    extend(CustomError, Error);
    CustomError.prototype.name = "CustomError";
    var pc;
    var isBlank = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        rc = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        encodeAttrValue = function(id) {
            if (!sc.test(id)) {
              return id;
            }
            - 1 != id.indexOf("&") && (id = id.replace(tc, "&amp;"));
            - 1 != id.indexOf("<") && (id = id.replace(uc, "&lt;"));
            - 1 != id.indexOf(">") && (id = id.replace(vc, "&gt;"));
            - 1 != id.indexOf('"') && (id = id.replace(wc, "&quot;"));
            - 1 != id.indexOf("'") && (id = id.replace(xc, "&#39;"));
            - 1 != id.indexOf("\x00") && (id = id.replace(yc, "&#0;"));
            return id
        },
        tc = /&/g,
        uc = /</g,
        vc = />/g,
        wc = /"/g,
        xc = /'/g,
        yc = /\x00/g,
        sc = /[\x00&<>"']/,
        Cc = function(a) {
            return -1 != a.indexOf("&") ? "document" in p ? Ac(a) : Bc(a) : a
        },
        Ac = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c;
            c = global.document.createElement("div");
            return a.replace(Dc, function(a, e) {
                var d = b[a];
                if (d) return d;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
                d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = d
            })
        },
        Bc = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
                }
            })
        },
        Dc = /&([^;\s<&]+);?/g,
        Ec = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Fc = {
            "'": "\\'"
        },
        Gc = function(a) {
            a = String(a);
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = c + 1,
                    g;
                if (!(g = Ec[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in Fc) d = Fc[d];
                        else if (d in Ec) d = Fc[d] = Ec[d];
                    else {
                        g = d.charCodeAt(0);
                        if (31 < g && 127 > g) e = d;
                        else {
                            if (256 > g) {
                                if (e = "\\x", 16 > g || 256 < g) e += "0"
                            } else e = "\\u", 4096 > g && (e += "0");
                            e += g.toString(16).toUpperCase()
                        }
                        d = Fc[d] = e
                    }
                    g = d
                }
                b[f] = g
            }
            b.push('"');
            return b.join("")
        },
        toString = function(str) {
            return null == str ? "" : String(str)
        },
        Jd = function(a, b) {
            var c = 0;
            a = rc(String(a)).split(".");
            b = rc(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ic(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ic(0 == f[2].length, 0 == g[2].length) || Ic(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ic = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var find = function(arr, item) {
            if (isString(arr)) {
                return isString(arr) && 1 == item.length ? arr.indexOf(item, 0) : -1;
            }
            for (var i = 0; i < arr.length; i++)
              if (i in arr && arr[i] === b) {
                return c;
              }
            }
            return -1
        },
        forEach = function(arr, f, obj) {
          var e = arr.length;
          var arr2 = isString(arr) ? arr.split("") : arr;
          /** @type {number} */
          var i = 0;
          for (;i < e;i++) {
            if (i in arr2) {
              f.call(obj, arr2[i], i, arr);
            }
          }
        },
        filter = function(arr, fn) {
          var result = [],
              f = isString(arr) ? arr.split("") : arr;
            for (var i = 0, len = arr.length,; i < len; i++) {
              if (i in f) {
                  var item = f[i];
                  if (fn.call(null, item, i, arr)) {
                    result.push(item)
                  }
              }
            }
            return result
        },
        Array$Map = function(arr, fn, context) {
          var len = arr.length,
            res = Array(len),
            tmp = isString(arr) ? arr.split("") : arr,
          for (i = 0; i < len; i++) {
            i in tmp && (res[i] = fn.call(context, tmp[i], i, arr));
          }
          return res
        },
        pd = function(arr, fn) {
            var cnt = 0;
            forEach(arr, function(item, i) {
                cnt = fn.call(null, cnt, item, i, arr)
            });
            return cnt
        },
        hasMatch = function(arr, fn) {
            var len = arr.length,
              _arr = isString(arr) ? arr.split("") : arr

            for (i = 0; i < len; i++) {
              if (i in _arr && fn.call(null, _arr[i], i, arr)) {
                return true;
              }
            }
            return false
        },
        StringOrArray$find = function(arr, fn) {
            index = findIndex(arr, fn, null);
            return index < 0
              ? null
              : isString(arr)
                ? arr.charAt(index)
                : arr[index]
        },
        findIndex = function(arr, fn, context) {
            var _arr = isString(arr) ? arr.split("") : arr
            var len = arr.length,
            for (i = 0; i < len; i++) {
                if (i in _arr && fn.call(context, _arr[i], i, arr)) {
                  return i;
                }
            }
            return -1
        },
         // td inArray
        inArray = function(arr, item) {
            return find(arr, item) >= 0
        },
        notInThenPush = function(a, b) {
          if (!has(a, b)) {
            a.push(b)
          }
        },
        remove = function(arr, item) {
            b = find(arr, item);
            if (0 <= b) {
              Array.prototype.splice.call(arr, item, 1)
            }
        },
        wd = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        listToArray = function(arr) {
            var len = arr.length;
            if (len > 0) {
                var res = Array(len)
                for (i = 0; i < len; i++) {
                  res[i] = arr[i];
                }
                return res
            }
            return []
        },
        yd = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        unique = function(arr) {
          var cache = {},
            j = 0,
            i = 0
            for (; i < arr.length;) {
                var item = arr[i++],
                    copyItem;
                copyItem = item;
                var key = isNotNull(copyItem) ? "o" + (copyItem[closure_uid] || (copyItem[closure_uid] = ++uuid)) : (typeof copyItem).charAt(0) + copyItem;
                if (!Object.prototype.hasOwnProperty.call(cache, key)) {
                  cache[key] = true
                  arr[j++] = item
                }
            }
            arr.length = j
        },
        Bd = function(a, b) {
            a.sort(b || Ad)
        },
        Dd = function(a) {
            for (var b = Cd, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
                index: d,
                value: a[d]
            };
            var e = b || Ad;
            Bd(c, function(a, b) {
                return e(a.value, b.value) || a.index - b.index
            });
            for (d = 0; d < a.length; d++) a[d] = c[d].value
        },
        Ad = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        groupByFnCallResult = function(arr, fn) {
            var c = {},
            for (i = 0; i < arr.length; i++) {
                var item = arr[i],
                    result = fn.call(null, item, i, arr);
                notNull(result) && (c[result] || (c[result] = [])).push(item)
            }
            return c
        };
    var map = function(obj, fn) {
          for (var key in obj) {
            fn.call(null, obj[key], key, obj)
          }
        },
        Md = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Kd = function(a, b) {
            return null !== a && b in a
        },
        hasInObject = function(obj, item) {
            for (var key in obj)
                if (obj[key] == item) {
                  return true;
                }
            }
            return false
        },
        Od = function(a) {
            for (var b in a) return !1;
            return !0
        },
        Qd = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Rd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        extendObject = function(dest, source) {
            var c, d,
            for (i = 1; i < arguments.length; i++) {
                arg = arguments[i]; //d
                for (key in arg) {
                  dest[key] = arg[key];
                }
                for (var j = 0; j < Rd.length; j++) {
                  key = Rd[i]
                  Object.prototype.hasOwnProperty.call(arg, key) && (dest[key] = arg[key])
                }
            }
        };
    var UA;
    a: {
        var ae = global.navigator;
        if (ae) {
            var be = ae.userAgent;
            if (be) {
                UA = be;
                break a
            }
        }
        UA = ""
    }
    var findInUA = function(str) {
            return -1 != UA.indexOf(str)
        },
        ze = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var isIE = function() {
            return findInUA("Trident") || findInUA("MSIE")
        },
        ee = function() {
            return (findInUA("Chrome") || findInUA("CriOS")) && !findInUA("Edge")
        },
        Be = function() {
            function a(a) {
                a = StringOrArray$find(a, d);
                return c[a] || ""
            }
            var b = UA;
            if (isIE()) return Ae(b);
            var b = ze(b),
                c = {};
            forEach(b, function(a) {
                c[a[0]] = a[1]
            });
            var d = curry(Kd, c);
            return findInUA("Opera") ? a(["Version", "Opera"]) : findInUA("Edge") ? a(["Edge"]) : ee() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
        },
        Ae = function(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) return b[1];
            var b = "",
                c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                    if (a && a[1]) switch (a[1]) {
                        case "4.0":
                            b = "8.0";
                            break;
                        case "5.0":
                            b = "9.0";
                            break;
                        case "6.0":
                            b = "10.0";
                            break;
                        case "7.0":
                            b = "11.0"
                    } else b = "7.0";
                    else b = c[1];
            return b
        };
    var isIOS = function() {
        return findInUA("iPhone") && !findInUA("iPod") && !findInUA("iPad")
    };
    var cc = function(a) {
        cc[" "](a);
        return a
    };
    cc[" "] = aa;
    var dc = function(a, b) {
            try {
                return cc(a[b]), !0
            } catch (c) {}
            return !1
        },
        fc = function(a, b) {
            var c = ec;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var oe = findInUA("Opera"),
        isOldIE = isIE(),
        pe = findInUA("Edge"),
        qe = pe || isOldIE,
        re = findInUA("Gecko") && !(-1 != UA.toLowerCase().indexOf("webkit") && !findInUA("Edge")) && !(findInUA("Trident") || findInUA("MSIE")) && !findInUA("Edge"),
        se = -1 != UA.toLowerCase().indexOf("webkit") && !findInUA("Edge"),
        te = se && findInUA("Mobile"),
        Ce = findInUA("Macintosh"),
        qg = findInUA("Windows"),
        ue = findInUA("Android"),
        ve = isIOS(),
        we = findInUA("iPad"),
        xe = findInUA("iPod"),
        jd = isIOS() || findInUA("iPad") || findInUA("iPod"),
        ye = function() {
            var a = global.document;
            return a ? a.documentMode : void 0
        },
        Cg;
    a: {
        var version = "",
            matchVer = function() {
                var a = UA;
                if (re) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (pe) return /Edge\/([\d\.]+)/.exec(a);
                if (isOldIE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (se) return /WebKit\/(\S+)/.exec(a);
                if (oe) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        matchVer && (version = matchVer ? matchVer[1] : "");
        if (isOldIE) {
            var Fi = ye();
            if (null != Fi && Fi > parseFloat(version)) {
                Cg = String(Fi);
                break a
            }
        }
        Cg = version
    }
    var De = Cg,
        ec = {},
        Ee = function(a) {
            return fc(a, function() {
                return Jd(De, a) >= 0
            })
        },
        Oi;
    var Jj = global.document;
    Oi = Jj && isOldIE ? ye() || ("CSS1Compat" == Jj.compatMode ? parseInt(De, 10) : 5) : void 0;
    var pf = findInUA("Firefox"),
        qf = isIOS() || findInUA("iPod"),
        rf = findInUA("iPad"),
        sf = findInUA("Android") && !(ee() || findInUA("Firefox") || findInUA("Opera") || findInUA("Silk")),
        tf = ee(),
        uf = findInUA("Safari") && !(ee() || findInUA("Coast") || findInUA("Opera") || findInUA("Edge") || findInUA("Silk") || findInUA("Android")) && !(isIOS() || findInUA("iPad") || findInUA("iPod"));
    var gn = null,
        hn = re || se && !uf || oe || "function" == typeof global.btoa;
    var ph = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        qh = function(a) {
            a = String(a);
            if (ph(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        th = function(a) {
            var b = [];
            rh(new sh, a, b);
            return b.join("")
        },
        sh = function() {},
        rh = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), rh(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), uh(d, c), c.push(":"), rh(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        uh(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) &&
                            !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        vh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        wh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        uh = function(a, b) {
            b.push('"', a.replace(wh, function(a) {
                var b = vh[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), vh[a] = b);
                return b
            }), '"')
        };

    // ma -> getGT
    var getGT = function() {
        // p == this
        return global.googletag || (global.googletag = {})
    },
    // B -> setProperty2googleTag
    B = function(a, b) {
        var c = getGT();
        c.hasOwnProperty(a) || (c[a] = b)
    },
    // na -> onload
    onload = function(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    },
    // oa -> beforeunload
    oa = function(a, b) {
        a.addEventListener ? a.addEventListener("beforeunload", b, !1) : a.attachEvent && a.attachEvent("onbeforeunload", b)
    };
    // pa -> MessageObject
    // {
    //   l: id,
    //   j: args
    // }
    //
    var MessageObject = function(a, b) {
        this.l = a;
        this.j = b || []
    };
    //
    MessageObject.prototype.getMessageId = function() {
        return this.l
    };
    MessageObject.prototype.getMessageArgs = function() {
        return this.j
    };
    // qa -> Info
    // {
    //  l: timestamp
    //  v: slot
    //  u: service
    //  m: level
    //  o: message,
    //  j: reference
    // }
    var Info = function(level, message, service, slot, reference) {
        this.l = new Date;
        this.v = slot || null;
        this.u = service || null;
        this.m = level;
        this.o = message;
        this.j = reference || null
    };
    Info.prototype.getSlot = function() {
        return this.v
    };
    Info.prototype.getService = function() {
        return this.u
    };
    Info.prototype.getLevel = function() {
        return this.m
    };
    Info.prototype.getTimestamp = function() {
        return this.l
    };
    Info.prototype.getMessage = function() {
        return this.o
    };
    Info.prototype.getReference = function() {
        return this.j
    };
    var ra = ["Debug", "Info", "Warning", "Error", "Fatal"];
    Info.prototype.toString = function() {
        var a = this.l.toTimeString() + ": " + ra[this.m] + ": " + this.o;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    // qa -> LogObject end


    // sa -> EventManager
    // {
    //  j: listeners
    // }
    var EventManager = function() {
        this.j = []
    };
    EventManager.prototype.getAllEvents = function() {
        return this.j
    };
    EventManager.prototype.getEventsByService = function(a) {
        return createListernerFilter(this, function(b) {
            return b.getService() === a
        })
    };
    EventManager.prototype.getEventsBySlot = function(a) {
        return createListernerFilter(this, function(b) {
            return b.getSlot() === a
        })
    };
    EventManager.prototype.getEventsByLevel = function(a) {
        return createListernerFilter(this, function(b) {
            return b.getLevel() >= a
        })
    };

    // ta -> filterListeners
    var filterListeners = function(a, filter) {
      var listeners = [],
      for (i = 0; i < a.j.length; ++i) {
        filter(a.j[i]) && listeners.push(a.j[i]);
      }
      return listeners
    };
    EventManager.prototype.log = function(a, b, c, d, e) {
        a = new Info(a, b, c, d, e);
        this.j.push(a);
        return a
    };
    EventManager.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    EventManager.prototype.$a = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    EventManager.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    // sa ->  end


    var getEventLog = function() {
        var a = getGT();
        return a.debug_log || (a.debug_log = new EventManager)
    };
    setProp2GoogleTagObj("getEventLog", getEventLog);


    // C
    var createMessageObject0arg = function(a) {
            return function() {
                return new pa(a, [])
            }
        },
    // D
        createMessageObject1arg = function(a) {
            return function(b) {
                return new pa(a, [b])
            }
        },
    // E
        createMessageObject2arg = function(a) {
            return function(b, c) {
                return new pa(a, [b, c])
            }
        },
    // va
        createMessageObject3arg = function(a) {
            return function(b, c, d) {
                return new pa(a, [b, c, d])
            }
        },
    // xa
        xa = function(a) {
            return "[" + Array$map(a, function(a) {
                return isString(a) ? "'" + a + "'" : isArray(a) ? xa(a) : String(a)
            }).join(", ") + "]"
        },
        // messageObject id,    args
        ya = C(1),      // 1,   0
        za = D(2),      // 2,   1
        Aa = D(3),      // 3,   1
        Ba = D(4),      // 4,   1
        Ca = D(5),      // 5,   1
        Da = D(6),      // 6,   1
        Ea = C(8),      // 8,   0
        Fa = va(9),     // 9,   3
        Ga = va(10),    // 10,  3
        Ha = E(12),     // 12,  2
        Ia = D(13),     // 13,  1
        Ja = D(14),     // 14,  1
        Ka = C(16),     // 16,  0
        La = va(17),    // 17,  3
        Ma = C(19),     // 19,  0
        Na = D(20),     // 20,  1
        Oa = D(21),     // 21,  1
        Pa = E(22),     // 22,  2
        Qa = E(23),     // 23,  2
        Ra = D(26),     //
        Sa = D(27),
        Ta = D(28),
        Ua = D(30),
        Va = E(31),
        Wa = C(34),
        Xa = D(35),
        Ya = va(36),
        Za = va(37),
        $a = C(38),
        ab = D(39),
        bb = E(40),
        cb = C(42),
        db = E(43),
        eb = C(44),
        fb = C(45),
        gb = D(46),
        hb = D(47),
        ib = D(48),
        jb = C(49),
        kb = C(50),
        lb = C(52),
        mb = E(53),
        nb = E(54),
        ob = D(55),
        pb = E(57),
        qb = va(58),
        rb = D(59),
        sb = D(60),
        tb = E(61),
        ub = E(62),
        vb = D(63),
        wb = E(64),
        xb = D(65),
        yb = C(66),
        zb = C(67),
        Ab = C(68),
        Bb = C(69),
        Cb = C(70),
        Db = C(71),
        Eb = C(72),
        Fb = D(74),
        Gb = D(75),
        Hb = va(77),
        Ib = D(78),
        Jb = C(79),
        Kb = D(80),
        Lb = E(82),
        Mb = E(84),
        Nb = D(85),
        Ob = C(87),
        Pb = va(88),
        Qb = D(90),
        Rb = D(92),
        Sb = D(93),
        Tb = D(94),
        Ub = D(95),
        F = function(a, b) {
            b = xa(b);
            b = b.substring(1, b.length - 1);
            return new pa(96, [a, b])
        },
        Vb = D(97),
        Wb = D(98),
        Xb = D(99),
        Yb = D(100),
        Zb = E(101),
        $b = E(102),
        ac = E(103),
        bc = D(104);

    var Pd = function(a, b, c) {
        this.label = a;
        this.type = 4;
        this.eventId = b;
        this.value = c
    };
    var jg = function(a) {
            this.l = getNow();
            this.u = Math.random() < a;
            this.events = [];
            this.w = {}
        },
        getNow = global.performance && global.performance.now ? bind(global.performance.now, global.performance) : now;
    jg.prototype.install = function(a) {
        a = a || window;
        a.google_js_reporting_queue = a.google_js_reporting_queue || [];
        this.events = a.google_js_reporting_queue
    };
    jg.prototype.v = function(a) {
        this.events.push(a)
    };
    var Bf = function(a, b, c) {
            if (a.u) {
                var d = a.w[b] || 0,
                    e = d + 1;
                e > d && (a.w[b] = e);
                a.v(new Pd(b, e, c))
            }
        },
        fk = function(a, b, c) {
            var d = getNow();
            c = c();
            var e = getNow();
            Bf(a, b, e - a.l - (d - a.l));
            return c
        },
        wm = function(a, b) {
            return bind(function() {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return fk(this, a, function() {
                    return b.apply(void 0, c)
                })
            }, Hf)
        };


    var gc = function(a) {
            try {
                return !!a && null != a.location.href && dc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        // hc => appendScript
        appendScript = function(doc, src) {
            var script = doc.createElement("script");
            script.src = src;
            (doc = doc.getElementsByTagName("script")[0]) && doc.parentNode && doc.parentNode.insertBefore(script, doc)
        },
        // ic => seed
        seed = function(a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b) {
                    b = window;
                    try {
                        var d = new Uint32Array(1);
                        b.crypto.getRandomValues(d);
                        c = d[0] / 65536 / 65536
                    } catch (e) {
                        c = Math.random()
                    }
                    return a[Math.floor(c * a.length)]
                }
            }
            return null
        },
        object$each = function(obj, fn, thiz) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(thiz, obj[key], key, obj)
            }
          }
        },
        jc = function(a) {
            var b = 0;
            object$each(a, function() {
                b++
            });
            return b
        },
        object$keys = function(obj) {
            var keys = [];
            object$each(obj, function(value, key) {
                keys.push(key)
            });
            return keys
        },
        object$values = function(obj) {
            var values = [];
            object$each(obj, function(value) {
                values.push(value)
            });
            return values
        },
        // hash( -> hash
        /**
         * @param {string} a
         * @return {?}
         */
        var hash = function(a) {
          var aLength = a.length;
          if (0 == aLength) {
            return 0;
          }
          /** @type {number} */
          var value = 305419896;
          /** @type {number} */
          var i = 0;
          for (;i < aLength;i++) {
            value ^= (value << 5) + (value >> 2) + a.charCodeAt(i) & 4294967295;
          }
          return 0 < value ? value : 4294967296 + value;
        };
        // mc -> isHTTPS
        isHTTPS = function(a) {
            try {
                for (var b = null; b != a; b = a, a = a.parent) {
                    switch (a.location.protocol) {
                        case "https:":
                            return !0;
                        case "http:":
                        case "file:":
                            return !1
                    }
                }
            } catch (c) {}
            return !0
        },
        // nc -> isDebug
        isDebug = function(a) {
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
        // Jc -> createURL
    var createURL = function(protocal, name, domain, port, path, query) {
            var url = "";
            protocal && (url += protocal + ":");
            if (domain) {
                url += "//";
                name && (url += name + "@");
                url += domain;
                port && (url += ":" + port)
            }
            path && (url += path);
            query && (url += "?" + query);
            return g
        },
        // Kc => URLReg
        Kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,

        // Lc => decodeURI
        decodeURI = function(a) {
            return a ? decodeURI(a) : a
        },
        Mc = /#|$/,

        //  应该是吧url中的中文进行转换
        Nc = function(a, b) {
            var c = a.search(Mc),
                d;
            a: {
                d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 >
                d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
        };

    // 某种转换方法
    var Oc = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                switch (b) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33
                }
            }
            return -1
        },
        Pc = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = Oc(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };

    var Qc = function(a, b) {
            this.j = a;
            this.l = b
        },
        Rc = function(a, b, c) {
            this.url = a;
            this.Ga = b;
            this.Na = !!c;
            this.depth = isNumber(void 0) ? void 0 : null
        },
        Tc = function(a) {
            a = (this.l = a || p) || p;
            this.m = a.top == a ? 1 : gc(a.top) ? 2 : 3;
            3 != this.m && Date.parse(global.top.document.lastModified);
            this.j = Sc(this.l)
        },
        Uc = function(a, b) {
            for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && decodeURI(a.match(Kc)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++)
                if (a = null != b[f] && decodeURI(b[f].match(Kc)[3] || null) || "", c *= 4, a)
                    if (d && a == d) c += 3;
                    else {
                        var g;
                        a: {
                            g = b[f];
                            for (var k = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i, /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i], l = 0; l < k.length; ++l)
                                if (k[l].test(g)) {
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        g ? c += 2 : a && 0 <= Oc(a) && (c += 1)
                    }
            return c
        },
        Sc = function(a) {
            var b = a || p,
                c = [],
                d, e = null;
            do {
                var f = b;
                gc(f) ? (d = f.location.href,
                    e = f.document && f.document.referrer || null) : (d = e, e = null);
                c.push(new Rc(d || "", f));
                try {
                    b = f.parent
                } catch (g) {
                    b = null
                }
            } while (b && f != b);
            b = 0;
            for (f = c.length - 1; b <= f; ++b) c[b].depth = f - b;
            f = a || p;
            if (f.location && f.location.ancestorOrigins && f.location.ancestorOrigins.length == c.length - 1)
                for (b = 1; b < c.length; ++b) a = c[b], a.url || (a.url = f.location.ancestorOrigins[b - 1] || "", a.Na = !0);
            return c
        };
    var tn = function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                window.addEventListener("test", null, b)
            } catch (c) {}
            return a
        }(),
        on = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, tn ? void 0 : isBoolean(void 0) ? void 0 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        un = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, tn ? void 0 : isBoolean(void 0) ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var Xc = function(a, b, c, d, e) {
            this.v = c || 4E3;
            this.m = a || "&";
            this.w = b || ",$";
            this.o = notNull(d) ? d : "trn";
            this.B = e || null;
            this.u = !1;
            this.l = {};
            this.A = 0;
            this.j = []
        },
        Yc = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Zc = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Yc(c, d)
        },
        bd = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = $c(a) - d.length - 0;
            if (0 > e) return "";
            a.j.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++)
                for (var g = a.j[f], k = a.l[g], l = 0; l < k.length; l++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var n = ad(k[l], a.m, a.w);
                    if (n) {
                        n = c + n;
                        if (e >=
                            n.length) {
                            e -= n.length;
                            b += n;
                            c = a.m;
                            break
                        } else a.u && (c = e, n[c - 1] == a.m && --c, b += n.substr(0, c), c = a.m, e = 0);
                        d = null == d ? g : d
                    }
                }
            f = "";
            a.o && null != d && (f = c + a.o + "=" + (a.B || d));
            return b + f + ""
        },
        $c = function(a) {
            if (!a.o) return a.v;
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return a.v - a.o.length - b - a.m.length - 1
        },
        ad = function(a, b, c, d, e) {
            var f = [];
            object$each(a, function(a, k) {
                (a = cd(a, b, c, d, e)) && f.push(k + "=" + a)
            });
            return f.join(b)
        },
        cd = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(cd(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ad(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    var Loc = function(protocal, domain, path, useCache) {
            this.o = protocal;
            this.l = domain;
            this.m = path;
            this.j = useCache;
            this.u = Math.random()
        },
        ed = function(a, b, c, d, e) {
            if ((d ? a.u : Math.random()) < (e || a.j)) try {
                var f;
                c instanceof Xc ? f = c : (f = new Xc, object$each(c, function(a, b) {
                    var c = f,
                        d = c.A++;
                    a = Yc(b, a);
                    c.j.push(d);
                    c.l[d] = a
                }));
                var g = bd(f, a.o, a.l, a.m + b + "&");
                g && logWithImg(p, g)
            } catch (k) {}
        },
        // dd -> imageRequests
        logWithImg = function(win, url) {
            win.google_image_requests || (win.google_image_requests = []);
            var img = win.document.createElement("img");
            img.src = url;
            win.google_image_requests.push(img)
        };

    var fd = function(a, b, c) {
            this.m = a;
            this.u = b;
            this.l = c;
            this.o = this.j
        },
        gd = function(a, b, c) {
            this.message = a;
            this.j = b || "";
            this.l = c || -1
        },
        id = function(a, b, c) {
            var d;
            try {
                d = c()
            } catch (g) {
                var e = a.l;
                try {
                    var f = hd(g),
                        e = a.o.call(a, b, f, void 0, void 0)
                } catch (k) {
                    a.j("pAR", k)
                }
                if (!e) throw g;
            } finally {}
            return d
        },
        kd = function(a, b, c) {
            return function() {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
                return id(a, b, function() {
                    return c.apply(void 0, d)
                })
            }
        };
    fd.prototype.j = function(a, b, c, d, e) {
        try {
            var f = e || this.u,
                g = new Xc;
            g.u = !0;
            Zc(g, 1, "context", a);
            b instanceof gd || (b = hd(b));
            Zc(g, 2, "msg", b.message.substring(0, 512));
            b.j && Zc(g, 3, "file", b.j);
            0 < b.l && Zc(g, 4, "line", b.l.toString());
            b = {};
            if (d) try {
                d(b)
            } catch (x) {}
            d = [b];
            g.j.push(5);
            g.l[5] = d;
            var k, l = Sc(),
                n = new Rc(global.location.href, p, !1),
                m = l.length - 1;
            for (d = m; 0 <= d; --d) {
                var q = l[d];
                if (q.url && !q.Na) {
                    n = q;
                    break
                }
            }
            var q = null,
                w = l.length && l[m].url;
            0 != n.depth && w && (q = l[m]);
            k = new Qc(n, q);
            k.l && Zc(g, 6, "top", k.l.url || "");
            Zc(g, 7, "url",
                k.j.url || "");
            ed(this.m, f, g, !1, c)
        } catch (x) {
            try {
                ed(this.m, f, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ld(x),
                    url: k.j.url
                }, !1, c)
            } catch (U) {}
        }
        return this.l
    };
    var hd = function(a) {
            return new gd(ld(a), a.fileName, a.lineNumber)
        },
        ld = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            a.stack && (b = md(a.stack, b));
            return b
        },
        md = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        };
    var Fd = function(a) {
            return function() {
                return a
            }
        },
        createHandlerAllReturnTrue = function(a) {
            var args = arguments,
                len = args.length;
            return function() {
                for (var i = 0; i < len; i++) {
                  if (!args[i].apply(this, arguments)) {
                    return false;
                  }
                }
                return true
            }
        },
        ik = function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        },
        Hd = function(a, b) {
            var c = 0,
                d = !1,
                e = [],
                f = function() {
                    c = 0;
                    d && (d = !1, g())
                },
                g = function() {
                    c = global.setTimeout(f, 200);
                    a.apply(b, e)
                };
            return function(a) {
                e = arguments;
                c ? d = !0 : g()
            }
        };
    var Fo = function() {
            return findInUA("iPad") || findInUA("Android") && !findInUA("Mobile") || findInUA("Silk")
        },
        Go = function() {
            return !(!Fo() && (findInUA("iPod") || findInUA("iPhone") || findInUA("Android") || findInUA("IEMobile"))) && !Fo()
        };
    var Ho = function() {
        var a;
        return qg ? (a = /Windows NT ([0-9.]+)/, (a = a.exec(UA)) ? a[1] : "0") : Ce ? (a = /10[_.][0-9_.]+/, (a = a.exec(UA)) ? a[0].replace(/_/g, ".") : "10") : ue ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(UA)) ? a[1] : "") : ve || we || xe ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(UA)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Td = function(a, b, c) {
            "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l[b] = !0)
        },
        getObj$j$ownProperty = function(obj, key) {
            return obj.j.hasOwnProperty(key) ? obj.j[key] : ""
        },
        Wd = function() {
            var a = Vd,
                keyAndValues = [];
            object$each(a.l, function(value, key) {
                keyAndValues.push(key)
            });
            object$each(a.j, function(value) {
                "" != value && keyAndValues.push(value)
            });
            return keyAndValues
        };
    var config = {
        1: "pagead2.googlesyndication.com",
        2: "pubads.g.doubleclick.net",
        3: "securepubads.g.doubleclick.net",
        6: '{ isHTTPS }',
        7: 0,
        10: 0,
        13: 1500,
        16: 0,
        17: 0,
        20: 0,
        23: .001,
        24: 200,
        27: 0,
        28: 0,
        29: 0,
        33: "pagead2.googlesyndication.com",
        34: 0,
        36: false, //isSyncRendering
        37: 0,
        38: .001, // isDebug
        46: !1,
        47: 0,
        49: '{ NOW }',
        53: "",
        54: 0,
        57: 0,
        58: 0,
        60: 0,
        61: 0,
        63: 0,
        65: 0,
        66: 0,
        67: 0,
        68: 0,
        69: 0,
        70: 0,
        71: 0,
        72: 0,
        73: 0,
        74: 0,
        75: "",
        76: "",
        77: 0,
        78: 0,
        88: 0,
        79: 0,
        80: 0,
        86: 0,
        81: 0,
        82: 0,
        83: 0,
        84: 0,
        85: 0,
        87: 0,
        89: 0,
        90: 0,
        91: 0,
        92: 0,
        93: 0,
        94: 0,
        95: 0,
        96: 0,
        97: 0
    };

    config[6] = isHTTPS(window);
    config[49] = (new Date).getTime();
    var SingletonConfig = function() {
        this.j = copy(config)
    };
    SingletonConfig.prototype.get = function(a) {
        return this.j[a]
    };
    SingletonConfig.prototype.set = function(a, b) {
        this.j[a] = b
    };
    singleton(SingletonConfig);
    var Yd = SingletonConfig.getInstance().j,
        Fe = getGoogleTagObj(),
        Zd = Fe._vars_,
        Ge;
    for (Ge in Zd) Yd[Ge] = Zd[Ge];
    Fe._vars_ = Yd;
    var doc = document,
        K = window;
    var ge = function() {
        this.Aa = "";
        this.Wa = fe
    };
    ge.prototype.Ma = !0;
    ge.prototype.za = function() {
        return this.Aa
    };
    var he = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        fe = {},
        ie = function(a) {
            var b = new ge;
            b.Aa = a;
            return b
        };
    ie("about:blank");
    var ke = function() {
        this.Xa = je
    };
    ke.prototype.Ma = !0;
    ke.prototype.za = function() {
        return ""
    };
    var je = {};
    var le = function(a, b) {
        this.x = notNull(a) ? a : 0;
        this.y = notNull(b) ? b : 0
    };
    le.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    le.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    le.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var Box = function(w, h) {
        this.width = w;
        this.height = h
    };
    Box.prototype.j = function() {
        return this.width * this.height
    };
    Box.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Box.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Box.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var He = !isOldIE || 9 <= Number(Oi),
        Ie = !re && !isOldIE || isOldIE && 9 <= Number(Oi) || re && Ee("1.9.1");
    isOldIE && Ee("9");
    var Je = isOldIE || oe || se;
    var Me = function(container) {
            return container ? new Ke(getOwnDocument(container)) : pc || (pc = new Ke)
        },
        getDom = function(el) {
            var doc = document;
            return isString(el) ? doc.getElementById(el) : el
        },
        Pe = function(a, b) {
            map(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Oe.hasOwnProperty(d) ? a.setAttribute(Oe[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Oe = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        getPageSize = function(win) {
            doc = win.document;
            doc = "CSS1Compat" == doc.compatMode ? doc.documentElement : doc.body;
            return new Box(doc.clientWidth, doc.clientHeight)
        },
        Re = function(a) {
            return a.scrollingElement ? a.scrollingElement : se || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        $n = function(doc) {
            return doc ? getParentWindow(doc) : window
        },
        getParentWindow = function(doc) {
            return doc.parentWindow || doc.defaultView
        },
        Ue = function(a, b, c) {
            function d(c) {
                c && b.appendChild(isString(c) ?
                    a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !ea(f) || isNotNull(f) && 0 < f.nodeType ? d(f) : forEach(Te(f) ? listToArray(f) : f, d)
            }
        },
        Ve = function(a) {
            return Ie && void 0 != a.children ? a.children : filter(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        getOwnDocument = function(node) {
            return 9/* document node */ == node.nodeType
              ? node
              : node.ownerDocument || node.document
        },
        Te = function(a) {
            if (a && "number" == typeof a.length) {
                if (y(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (isFunction(a)) return "function" == typeof a.item
            }
            return !1
        },
        Ke = function(doc) {
            this.j = doc || global.document || document
        };
    Ke.prototype.l = function(a, b, c) {
        var doc = this.j, //d
            args = arguments, //e
            f = String(args[0]),
            g = e[1];
        if (!He && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', encodeAttrValue(g.name), '"');
            if (g.type) {
                f.push(' type="', encodeAttrValue(g.type), '"');
                var k = {};
                extendObject(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = doc.createElement(f);
        g && (isString(g) ? f.className = g : isArray(g) ? f.className = g.join(" ") : Pe(f, g));
        2 < e.length && Ue(d, f, e);
        return f
    };
    var We = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        Xe = function(a) {
            return new We(a.top, a.right, a.bottom, a.left)
        };
    We.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    We.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    We.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Ye = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Ze = function(a) {
            return new We(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        $e = function(a) {
            return new Ye(a.left, a.top, a.right - a.left, a.bottom - a.top)
        },
        af = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Ye(c, e, d - c, a - e)
            }
            return null
        };
    Ye.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ye.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ye.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var bf = function(a, b) {
            var c = getOwnDocument(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        cf = function(a, b) {
            return bf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        df = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            isOldIE && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        ef = function(a) {
            if (isOldIE&& !(8 <= Number(Oi))) return a.offsetParent;
            var b = getOwnDocument(a),
                c = cf(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = cf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        ff = function(a) {
            var b = getOwnDocument(a),
                c = new le(0, 0),
                d;
            d = b ? getOwnDocument(b) : document;
            d = !isOldIE || 9 <= Number(Oi) || "CSS1Compat" ==
                Me(d).j.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = df(a);
            d = Me(b).j;
            b = Re(d);
            d = getParentWindow(d);
            b = isOldIE && Ee("10") && d.pageYOffset != b.scrollTop ? new le(b.scrollLeft, b.scrollTop) : new le(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        gf = function(a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        hf = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = se && !b && !c;
            return notNull(b) && !d || !a.getBoundingClientRect ? new Box(b, c) : (a = df(a), new Box(a.right - a.left, a.bottom - a.top))
        };
    var getSafeFrameContainerUrl = function(win) {
        var url = "//tpc.googlesyndication.com/safeframe/1-0-5/html/container.html",
            _win = win,
            i = 0
        for (_win != _win.parent;) {
          i++
          _win = _win.parent;
        }
        if (i) {
          url += "?n=" + i);
        return (isHTTPS(win) ? "https:" : "http:") + url
    };
    var kf = !1,
        lf = "",
        mf = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (kf = !0, a.description)) {
                lf = mf(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                kf = !0;
                lf = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], kf = !(!a || !a.enabledPlugin))) {
            lf = mf(a.enabledPlugin.description);
            return
        }
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            kf = !0;
            lf = mf(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            kf = !0;
            lf = "6.0.21";
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), kf = !0, lf = mf(b.GetVariable("$version"))
        } catch (c) {}
    })();
    var nf = kf,
        of = lf;
    var vf = function(a) {
        return (a = a.exec(UA)) ? a[1] : ""
    };
    (function() {
        if (pf) return vf(/Firefox\/([0-9.]+)/);
        if (isOldIE|| pe || oe) return De;
        if (tf) return vf(/Chrome\/([0-9.]+)/);
        if (uf && !(isIOS() || findInUA("iPad") || findInUA("iPod"))) return vf(/Version\/([0-9.]+)/);
        if (qf || rf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(UA);
            if (a) return a[1] + "." + a[2]
        } else if (sf) return (a = vf(/Android\s+([0-9.]+)/)) ? a : vf(/Version\/([0-9.]+)/);
        return ""
    })();
    var wf = function(a) {
            a = a || p;
            var b = a.context;
            if (!b) try {
                b = a.parent.context
            } catch (c) {}
            try {
                if (b && "pageViewId" in b && "canonicalUrl" in b) return b
            } catch (c) {}
            return null
        },
        xf = function() {
            var a = wf();
            return a && a.initialIntersection ? a.initialIntersection : null
        },
        yf = function() {
            var a = xf();
            return a && isNotNull(a.rootBounds) ? new Box(a.rootBounds.width, a.rootBounds.height) : null
        },
        zf = function() {
            var a = xf();
            return a && isNotNull(a.rootBounds) ? new le(a.rootBounds.left + a.boundingClientRect.left, a.rootBounds.top + a.boundingClientRect.top) : null
        };
    var Af = function(a, b, c) {
        b = b || K;
        a && null !== b && b.top != b && (b = b.top);
        try {
            return b.document && !b.document.body ? new Box(-1, -1) : c ? (new Box(b.innerWidth, b.innerHeight)).round() : getPageSize(b || window).round()
        } catch (d) {
            return new Box(-12245933, -12245933)
        }
    };
    var Io = Object.prototype.hasOwnProperty,
        Cf = function(a, b) {
            for (var c in a) Io.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ef = function() {
            var a = Df();
            "google_onload_fired" in a || (a.google_onload_fired = !1, on(a, "load", function() {
                a.google_onload_fired = !0
            }))
        },
        Ff = function(url, len) {
            var searchStart = len - 8;
            if (url.length > len) {
              len = url.lastIndexOf("&", searchStart)
              if (-1 !== len) {
                url = url.substring(0, len)
              } else {
                url = url.substring(0, searchStart)
                url = url.replace(/%\w?$/, "")
              }
            } else {
              url += "&trunc=1"
            }
            return url
        },
        Gf = !!window.google_async_iframe_id,
        Qo = Gf && window.parent || window,
        Df = function() {
            if (Gf && !gc(Qo)) {
                var a = "." +
                    doc.domain;
                try {
                    for (; 2 < a.split(".").length && !gc(Qo);) doc.domain = a = a.substr(a.indexOf(".") + 1), Qo = window.parent
                } catch (b) {}
                gc(Qo) || (Qo = window)
            }
            return Qo
        },
        If = function() {
            var a, b, c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." +
                            (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (isIE()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g, ".")
                }
            }
            return "0"
        };
    var Ro, Hf = new jg(1);
    Ro = new fd(new Loc("http:" === K.location.protocol ? "http:" : "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=", .01), "jserror", !0);
    Hf.install(Df());
    var go = function(a) {
        var b = "osd::adp::reg".toString(),
            b = b.toString();
        return kd(Ro, b, wm(b, a))
    };
    var Jf = null,
        Kf = function(a) {
            for (var b = window, c = 0, d = b, e = 0; b && b != b.parent;)
                if (b = b.parent, e++, gc(b)) d = b, c = e;
                else if (a) break;
            return {
                Ga: d,
                level: c
            }
        };
    var notInFrame = function(win) {
            return !!win && win.top == win
        },
        Mf = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (notInFrame(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Nf = function(a, b) {
            var c = {};
            c.Eb = Kf(!1).Ga;
            var d;
            var e = c.Eb;
            d = e.location.href;
            if (e == e.top) d = {
                url: d,
                Oa: !0
            };
            else {
                var f = !1,
                    g = e.document;
                g && g.referrer &&
                    (d = g.referrer, e.parent == e.top && (f = !0));
                (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == d.indexOf(e) && (f = !1, d = e);
                d = {
                    url: d,
                    Oa: f
                }
            }
            c.Fb = d;
            c.nb = Mf(Df(), b, a.google_ad_width, a.google_ad_height);
            a = c.nb;
            b = c.Fb.Oa;
            d = Df();
            d = d.top == d ? 0 : gc(d.top) ? 1 : 2;
            f = 4;
            a || 1 != d ? a || 2 != d ? a && 1 == d ? f = 7 : a && 2 == d && (f = 8) : f = 6 : f = 5;
            b && (f |= 16);
            c.mb = "" + f;
            return c
        };
    var Pf = function(a, b) {
            var c = a.getPassbackPageUrl();
            if ("" != c) return c;
            a = b[getUUID(a)];
            return null != a ? Of(a) : null
        },
        Qf = function(url) {
            var _url = url;
            if ("about:blank" != url) {
              _url = _url
                .replace(/</g, "%3C")
                .replace(/>/g, "%3E")
                .replace(/"/g, "%22")
                .replace(/'/g, "%27")
              if (!/^https?:\/\//.test(_url)) {
                _url = "unknown:" + _url
              }
            }
            return _url
        },
        // 匹配加号，用于替换url参数中的+表示空格的情况
        Rf = /\+/g,
        Sf = function(a) {
            var b = SingletonConfig.getInstance().get(6);
            return a || b ? "https://" + SingletonConfig.getInstance().get(3) : "http://" + SingletonConfig.getInstance().get(2)
        },
        getReportSenderURL = function() {
            return SingletonConfig.getInstance().get(6) // isHTTPs
              ? "https://" + SingletonConfig.getInstance().get(33)
              : "http://" + SingletonConfig.getInstance().get(33)
        },
        Uf = function() {
            var a = navigator.userAgent,
                b = a.indexOf("MSIE ");
            return -1 == b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
        },
        Vf = function() {
            var a = UA;
            return null != a && -1 != a.indexOf("MSIE ") && -1 == a.indexOf("IEMobile")
        },
        Xf = function(a, b) {
            var c = 0,
                d = [];
            a && (d.push(a.getAdUnitPath()), d.push(getSlotSizesString(a)), d.push(a.getSlotElementId()));
            if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode, ++e) a.push(9 !== b.nodeType && b.id || "");
                (b = a.join()) && d.push(b)
            }
            0 < d.length && (c = hash((d.join(":")));
            return c.toString()
        },
        Yf = function(a, b) {
            if (null == b) return a;
            b = a.indexOf("google_preview=", a.lastIndexOf("?"));
            var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
            return a.substring(0, b) + a.substring(c + 1, a.length)
        },
        Zf = {
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PRERENDER: "prerender",
            Tb: "other"
        },
        $f = function(a) {
            a = a || document;
            a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
            return hasInObject(Zf, a) ? a : "other"
        },
        ag = !(!global.JSON || !global.JSON.parse) && (!isOldIE || Ee(10)) && (!oe || Ee(12));
    var Vd = new function () {
            this.l = {};
            this.j = {};
            var arr = []
            for (i = 0, len = arr.length; i < len; ++i) {
              this.j[arr[i]] = ""
            }
        },
        bg = [],
        cg = !1,
        dg = {},

        //          ho, 0, [], !0, !1, ho.G),
        N = function(a, b,  c,  d,  e, f,     cacheToDG) {
            c = c || [];
            var k = new eg(a);
            f && hasInObject(k.m, f) && (k.o = f);
            d || fg(k, b, c, !!e);
            cacheToDG && forEach(object$values(a), function(id) {
                dg[id] = true
            });
            bg.push(k);
            return k
        },
        hg = function() {
            return filter(Wd(), function(a) {
                return dg[a]
            })
        },
        eg = function(a) {
            var b = Vd; /*{j:{}, l:{}}*/
            this.m = a;
            this.j = b;
            this.l = "exp" + (this[closure_uid] || (this[closure_uid] = ++uuid));
            this.u = 0;
            this.o = this.j.j[this.l] = ""
        },
        fg = function(a, b, c, d) {
            //执行c数组中的所有方法，如果都返回true继续，c是空数组的话直接返回true
            if (createHandlerAllReturnTrue.apply(a, c)()) {
                var ids = object$values(a.m),
                    f = b;
                if (b > 0.5 && b <= 1 && a.o) {
                  f = b > 0.5 && b <= 1
                    ? 1 - b
                    : 0
                }
                c = a.j;
                var g = f * ids.length;
                if ((f = a.l) ? c.j.hasOwnProperty(f) && "" == c.j[f] : 1) {
                    var k;
                    b: {
                        try {
                            var l = window.top.location.hash;
                            if (l) {
                                var n = l.match(/\bdeid=([\d,]+)/);
                                k = n && n[1] || "";
                                break b
                            }
                        } catch (m) {}
                        k = ""
                    }(e = (k = (k = k.match(new RegExp("\\b(" + e.join("|") + ")\\b"))) && k[0] || null) ? k : seed(e, g)) && Td(c, e, f)
                }
                a.u = b;
                d && b && (getObj$j$ownProperty(a.j, a.l) || .5 < b && 1 >= b) && !cg && !O(a, ig.K) && (d = jc(a.m), cg = O(a, ig.G) || Math.random() * b * d < SingletonConfig.getInstance().get(37))
            }
        },
        O = function(eg, num) {
            if (!hasInObject(eg.m, num)) {
              return false;
            }
            // getPropertyIn a.j.j(key)
            var val = getObj$j$ownProperty(eg.j, eg.l);
            if (val) {
              a = num == val;
            } else {
              if (val = eg.o == num) {
                a = eg.u,
                val = .5 < a && 1 >= a; /*.5 < a <= 1*/
              }
              a = val
            }
            return a
        },
        So = function(a, b) {
            hasInObject(a.m, b) && Td(a.j, b, a.l)
        },
        kg = {
            K: "108809097",
            G: "108809098"
        },
        lg = {
            K: "108809030",
            G: "108809031",
            Ta: "108809080"
        },
        mg = {
            K: "108809113",
            Za: "108809114",
            Ya: "108809151"
        },
        To = {
            K: "21060080",
            Ya: "21060081"
        },
        Uo = {
            K: "21060082",
            Ya: "21060083"
        },
        Vo = {
            K: "21060084",
            Ya: "21060085"
        },
        Wo = {
            K: "21060086",
            Ya: "21060087"
        },
        ng = {
            K: "108809124",
            G: "108809125"
        },
        og = {
            K: "108809132",
            G: "108809133"
        },
        pg = {
            K: "108809134",
            G: "108809135"
        },
        rg = {
            K: "108809141",
            G: "108809140"
        },
        sg = {
            K: "108809142",
            G: "108809143"
        },
        ig = {
            G: "108809144",
            K: "108809167"
        },
        tg = {
            K: "108809147",
            G: "108809148"
        },
        vg = {
            Ua: "108809152",
            Qa: "108809153",
            Ha: "108809154",
            Ra: "108809155"
        },
        xg = {
            K: "108809159",
            G: "108809160"
        },
        yg = {
            K: "108809161",
            G: "108809162"
        },
        zg = {
            K: "108809163",
            Va: "108809164",
            Sa: "108809165",
            ya: "21060010"
        },
        Ag = {
            K: "108809166",
            G: "108809168"
        },
        fm = {
            K: "21060002",
            G: "21060003"
        },
        ug = {
            K: "21060004",
            G: "21060005"
        },
        wg = {
            K: "21060006",
            G: "21060007"
        },
        ho = {
            K: "21060015",
            G: "21060016"
        },
        Jg = {
            K: "21060017",
            G: "21060018"
        },
        Ng = {
            K: "21060019",
            G: "21060020"
        },
        io = {
            K: "21060000",
            G: "21060001"
        },
        jo = {
            K: "21060013",
            G: "21060014"
        },
        ko = {
            K: "21060054",
            G: "21060055"
        },
        lo = {
            K: "21060063",
            la: "21060062",
            xa: "21060066"
        },
        mo = {
            K: "21060064",
            G: "21060065"
        },
        Xo = {
            K: "21060092",
            G: "21060093"
        },
        Yo = {
            K: "21060096",
            G: "21060097"
        },
        Zo = {
            K: 21060067,
            G: 21060068
        },
        $o = {
            K: 21060071,
            G: 21060072
        },
        ap = {
            Kc: 21060069,
            Lc: 21060070,
            Ic: 21060073,
            Jc: 21060074
        },
        bp = {
            K: "21060088",
            G: "21060089",
            Hc: "21060094",
            Gc: "21060095"
        },
        setApiExperiment = function(a, b) {
            for (var c = 0; c < bg.length; ++c) {
                var d = bg[c],
                    e = void 0,
                    f = d.m,
                    g = {};
                for (e in f) g[f[e]] = e;
                if (null != g[a]) {
                    b && getObj$j$ownProperty(d.j,
                        d.l) || So(d, a);
                    return
                }
            }
            Td(Vd, a)
        },
        cp = Fd(ag),
        dp = Fd(qe),
        ep = Fd(-1 != (window.navigator && window.navigator.userAgent || "").indexOf("Opera Mini"));
    N({
        Hb: "108809028",
        Ib: "108809029"
    }, SingletonConfig.getInstance().get(27));
    var Dg = N(
          kg,
          SingletonConfig.getInstance().get(54),
          [Fd(J.getInstance().get(46))]
        ),
        Eg = N(lg, SingletonConfig.getInstance().get(28), [ik(Fd(J.getInstance().get(46)))]);
    SingletonConfig.getInstance().get(46) || O(Eg, lg.G) || O(Eg, lg.K) || setApiExperiment(lg.Ta);
    var Fg = N(mg, SingletonConfig.getInstance().get(60), [cp]),
        fp = N(To, SingletonConfig.getInstance().get(92), [cp, ee, Go], !1, !1, To.Ya),
        gp = N(Uo, SingletonConfig.getInstance().get(93), [cp, ee, ik(Go)], !1, !1, Uo.Ya),
        hp = N(Vo, SingletonConfig.getInstance().get(94), [cp, dp], !1, !1, Vo.Ya),
        ip = N(Wo, SingletonConfig.getInstance().get(95), [cp, ik(ee), ik(dp)], !1, !1, Wo.Ya),
        Gg = N(ng, SingletonConfig.getInstance().get(63)),
        Hg = N(og, SingletonConfig.getInstance().get(65)),
        Ig = N(pg, SingletonConfig.getInstance().get(67), [], !1, !1, pg.G),
        Kg = N(rg, SingletonConfig.getInstance().get(69), [Fd(!!ma().fifWin)], !1, !1, rg.G),
        Lg = N(sg, 0, [], !0, !1, sg.G);
    N(ig, SingletonConfig.getInstance().get(37), [], !1, !0, ig.G);
    var Mg = N(tg, SingletonConfig.getInstance().get(71), [], !1, !1, tg.G);
    N({
        K: "108809103",
        kc: "108809107",
        ic: "108809108",
        jc: "108809109"
    }, SingletonConfig.getInstance().get(88));
    var Og = N(vg, SingletonConfig.getInstance().get(74)),
        Pg = N(yg, SingletonConfig.getInstance().get(68), [], !1, !1, yg.K),
        Qg = N(Jg, SingletonConfig.getInstance().get(77), [], !0),
        fj = N(Ng, SingletonConfig.getInstance().get(77), [], !0),
        Rg = N(xg, SingletonConfig.getInstance().get(78)),
        Sg = N(zg, 0, [], !0);
    N({
        K: "131968835",
        G: "131968836"
    }, 0, [], !0, !1, "", !0);
    var Tg = N(Ag, 0, [], !0),
        vm = N(fm, SingletonConfig.getInstance().get(79), [], !1, !1, fm.G),
        hj = N(ug, 0, [], !0),
        kj = N(wg, 0, [], !0),
        no = N(ho, 0, [], !0, !1, ho.G),
        oo = N({
            hc: "21060021",
            wc: "21060022",
            xc: "21060023",
            yc: "21060024",
            zc: "21060025",
            Ac: "21060026",
            Bc: "21060027",
            Cc: "21060028",
            Dc: "21060029",
            Ec: "21060030",
            vc: "21060031"
        }, 0, [], !0),
        po = N({
            gc: "21060032",
            mc: "21060033",
            nc: "21060034",
            oc: "21060035",
            pc: "21060036",
            qc: "21060037",
            rc: "21060038",
            sc: "21060039",
            tc: "21060040",
            uc: "21060041",
            hash(: "21060042"
        }, 0, [], !0),
        qo = N(io, 0, [], !0),
        ro = N(jo, SingletonConfig.getInstance().get(85), [], !1, !1, jo.G),
        so = N(ko, SingletonConfig.getInstance().get(86), [], !1, !1, ko.G),
        to = N(lo, SingletonConfig.getInstance().get(87), [Fd(!(!global.navigator || !global.navigator.sendBeacon))], !1, !1, lo.la/* 21060062 */),
        uo = N(mo, SingletonConfig.getInstance().get(89), [ik(ep)], !1, !0, mo.G),
        jp = N(Xo, SingletonConfig.getInstance().get(96), [ee, Go], !1, !0, Xo.G),
        kp = N(Yo, SingletonConfig.getInstance().get(97), [ep], !1, !0, Yo.G),
        lp = N(Zo, SingletonConfig.getInstance().get(90), [ik(Fd(gc(global.top)))]),
        mp = N($o, SingletonConfig.getInstance().get(91), [Fd(gc(global.top))]),
        np = N(ap, 0, [], !0),
        op;
    if (op = jd) op = 0 <= Jd(Ho, 9);
    if (op || uf && Ee(601)) O(lp, Zo.K) ? So(np, ap.Kc) : O(lp, Zo.G) ? So(np, ap.Lc) : O(mp, $o.K) ? So(np, ap.Ic) : O(mp, $o.G) && So(np, ap.Jc);
    var pp = N(bp, SingletonConfig.getInstance().get(81));
    O(pp, bp.Gc) && (cg = !0);
    var now_rand = (new Date).getTime() + "_" + Math.random(),
        isPositiveNumber = function(num) {
            return isNumber(num) && isFinite(num) && 0 == num % 1 && a > 0
        },
        Wg = function() {
            return Vg().replace(/[^a-zA-Z0-9]/g, function(a) {
                return "&#" + a.charCodeAt() + ";"
            })
        },
        Xg = function() {
            return SingletonConfig.getInstance().get(6) ? "https:" : "http:"
        },
        getChannel0From = function(adUnitPath) {
            var channels = adUnitPath.split("/");
            return "/" == adUnitPath.charAt(0) && 2 <= channels.length ? channels[1] : "/" != adUnitPath.charAt(0) && 1 <= channels.length ? b[0] : ""
        },
        Zg = function(a) {
            var b = [],
                b = Array$map(a, function(a) {
                    return getChannel0From(a.getAdUnitPath())
                });
            unique(b);
            return b
        };
    setProp2GoogleTagObj("getVersion", function() {
        return "107"
    });
    var ReportSender = function(type, url, c) {
            url = url || defaultReportURL;
            if (!notNull(c) || c < 0 || c > 1) {
              c = SingletonConfig.getInstance().get(23);
            }
            this.o = Math.random();
            this.m = this.o < c;
            this.l = type;
            this.j = url + "/pagead/gen_204?id=" + encodeURIComponent(type)
        },
        ah = [],
        defaultReportURL = SingletonConfig.getInstance().get(6) ? "https://" + SingletonConfig.getInstance().get(33) : "http://" + SingletonConfig.getInstance().get(33),
        appendReportSenderParams = function(requestSender, key, value) {
            key && key.match(/^\w+$/) && c && (requestSender.j += "&" + key + "=" + encodeURIComponent(value))
        },
        sendReport = function(reportSender, b) {
            var c = reportSender.m;
            b && b >= 0 && (c = Math.random() < b);
            c && reportSender.l && reportSender.j && logWithImg(window, reportSender.j)
        },
        ch = function(a, b) {
            0 < b.length && (3 >= b.length || (b = yd(b, 0, 3), b.push("__extra__")),
                appendReportSenderParams(a, "nw_id", b.join(",")))
        },
        addExParamsToReportSender = function(reportSender, adData) {
            appendReportSenderParams(reportSender, "vrg", "107");
            var doc = document;
            if (adData) {
              ch(reportSender, getChannel0sFromAdData(adData))
              appendReportSenderParams(reportSender, "nslots", countObjectLength(adData).toString())
            } else {
              ch(reportSender, Zg(ah))
              appendReportSenderParams(reportSender, "nslots", ah.length.toString())
            }
            b = Wd();
            0 < b.length && appendReportSenderParams(a, "eid", b.join());
            appendReportSenderParams(reportSender, "pub_url", doc.URL)
        };
    var ao = function(a, b, c, d, e) {
        jg.call(this, a);
        this.j = this.m = 0;
        this.o = e || Infinity;
        this.B = b;
        this.C = c;
        this.D = d;
        this.A = {
            nav_api: global.performance && global.performance.now ? 1 : 0
        }
    };
    extend(ao, jg);
    var fo = function(a) {
        if (!a.m && a.u && a.events.length && a.j < a.o) {
            var b = 6 < a.j ? 2E4 : 300 << a.j;
            a.m = window.setTimeout(bind(a.H, a), b)
        }
    };
    ao.prototype.H = function() {
        if (this.u && this.events.length && this.j < this.o) {
            var a = Array$map(this.events, function(a) {
                return a.label + "." + Math.round(a.value)
            });
            if (a.length) {
                var b = copy(this.A);
                b[this.D] = a.join(",");
                ed(this.B, this.C, b, !0, 1);
                this.j++
            }
        }
        this.events.length = 0;
        window.clearTimeout(this.m);
        this.m = 0
    };
    ao.prototype.v = function(a) {
        this.j < this.o && (ao.Fa.v.call(this, a), fo(this))
    };
    var wo = function() {
        var a = new Loc("https:", "csi.gstatic.com", "/csi?v=2&s=gpt&action=", 1),
            b = O(pp, bp.G) || O(pp, bp.Gc) || O(pp, bp.Hc);
        ao.call(this, b ? 1 : 0, a, "execution_time", "it", SingletonConfig.getInstance().get(82));
        this.A.c = now_rand
    };
    extend(wo, ao);
    singleton(wo);
    var xo = SingletonConfig.getInstance().get(38),
        hh = function(a, b) {
            a = {
                methodId: a
            };
            b.name && (a.name = b.name);
            b.message && (a.message = b.message.substring(0, 512));
            b.fileName && (a.fileName = b.fileName);
            b.lineNumber && (a.lineNumber = b.lineNumber);
            b.stack && (a.stack = md(b.stack, ""));
            return a
        },
        R = function(a, b, c) {
            sendGPTException(a, b);
            if (!c) throw b;
        },
        // ih => sendGPTException
        sendGPTException = function(a, b) {
            if (!b.qb) try {
                b.qb = !0;
                var c = hh(a, b),
                    d = new ReportSender("gpt_exception");
                try {
                    addExParamsToReportSender(d)
                } catch (e) {}
                object$each(c, function(a, b) {
                    appendReportSenderParams(d, b, a)
                });
                sendReport(d, xo)
            } catch (e) {}
        },
        // 包装函数，记录执行时间
        wrapFnForPerformance = function(id, fn, c) {
            return function() {
                var d, e = !1,
                    f = c || R;
                try {
                    var g = wo.getInstance(),
                        start = getNow();
                    d = fn.apply(this, arguments);
                    var e = !0,
                        end = getNow();
                    Bf(g, id.toString(), end - g.l - (start - g.l));
                    fo(g)
                } catch (n) {
                    e ? sendGPTException(110, n) : d = f.call(this, a, n)
                }
                return d
            }
        };

    // 构造一个支持push的对象，这个对象的push是真正的执行入口
    var GoogleTagCommands = function() {
        this.l = this.j = 0
    };
    GoogleTagCommands.prototype.push = function(a) {
        for (var b = getEventLog(), c = 0; c < arguments.length; ++c) {
            try {
                if (isFunction(arguments[c])) {
                    arguments[c]();
                    this.j++;
                }
            } catch (d) {
                this.l++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Ua(String(d.message)))
            }
        }
        // 记录处理到哪个
        b.info(Va(String(this.j), String(this.l)));
        return this.j
    };
    GoogleTagCommands.prototype.push = wrapFnForPerformance(76, GoogleTagCommands.prototype.push);
    var bootstrap = function() {
        var prepareCmds = getGoogleTagObj().cmd;
        if (!prepareCmds || isArray(prepareCmds)) {
            var cmds = getGoogleTagObj().cmd = new GoogleTagCommands;
            prepareCmds && 0 < prepareCmds.length && cmds.push.apply(cmds, prepareCmds)
        }
    },
    bootstrap = wrapFnForPerformance(77, bootstrap);

    //===== 性能监测相关代码 ===========
    (function() {
        function a(a) {
            this.t = {};
            this.tick = function(a, b, c) {
                this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
                if (void 0 == c) try {
                    window.console.timeStamp("CSI/" + a)
                } catch (l) {}
            };
            this.tick("start", null, a)
        }
        var b, c;
        window.performance && (c = (b = window.performance.timing) && b.responseStart);
        var d = 0 < c ? new a(c) : new a;
        window.GPT_jstiming = {
            Timer: a,
            load: d
        };
        b && (b = b.navigationStart, 0 < b && c >= b && (window.GPT_jstiming.srt = c - b));
        try {
            c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT)), null == c &&
                window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT), c && (window.GPT_jstiming.pt = c)
        } catch (e) {}
    })();
    if (window.GPT_jstiming) {
        window.GPT_jstiming.Ia = {};
        window.GPT_jstiming.Ab = 1;
        var lh = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        };
        window.GPT_jstiming.getTick = lh;
        var mh = function(a, b, c) {
            var d = "";
            window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
            window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d +=
                    "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (q) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    var d = d + "&npn=1",
                        f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                k = g.start,
                e = [],
                f = [],
                l;
            for (l in g)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var n = g[l][1];
                    n ? g[n] && f.push(l + "." + lh(a, l, g[n][0])) : k && e.push(l +
                        "." + lh(a, l))
                }
            if (b)
                for (var m in b) d += "&" + m + "=" + b[m];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        };
        window.GPT_jstiming.getReportUri = mh;
        var nh = function(a, b, c) {
            a = mh(a, b, c);
            if (!a) return "";
            b = new Image;
            var d = window.GPT_jstiming.Ab++;
            window.GPT_jstiming.Ia[d] = b;
            b.onload = b.onerror = function() {
                window.GPT_jstiming &&
                    delete window.GPT_jstiming.Ia[d]
            };
            b.src = a;
            b = null;
            return a
        };
        window.GPT_jstiming.report = function(a, b, c) {
            if ("prerender" == document.webkitVisibilityState) {
                var d = !1,
                    e = function() {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var f;
                            "prerender" == document.webkitVisibilityState ? f = !1 : (nh(a, b, c), f = !0);
                            f && (d = !0, document.removeEventListener("webkitvisibilitychange", e, !1))
                        }
                    };
                document.addEventListener("webkitvisibilitychange", e, !1);
                return ""
            }
            return nh(a, b, c)
        }
    };
    //===== 性能监测相关代码 end ===========
    //
    var oh = function() {
        this.l = this.l;
        this.m = this.m
    };
    oh.prototype.l = !1;
    oh.prototype.u = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };


     // ======safeframe相关 start ======
    //this.Z, this.j.contentWindow, this.V, false
    var xh = function(a, b, c, d, e) {
        oh.call(this);
        this.w = a;
        this.status = 1;
        this.o = b;
        this.A = c;
        this.I = d;
        this.na = !!e;
        this.v = Math.random();
        this.B = {};
        this.j = null;
        this.C = bind(this.H, this)
    };
    extend(xh, oh);
    xh.prototype.H = function(a) {
        if (a.origin === this.A && (this.na || a.source == this.o)) {
            var b = null;
            try {
                b = qh(a.data)
            } catch (c) {}
            if (y(b) && (a = b.i, b.c === this.w && a != this.v && (2 !== this.status && (this.status = 2, yh(this), this.j && (this.j(), this.j = null)), a = b.s, b = b.p, isString(a) && (isString(b) || isNotNull(b)) && this.B.hasOwnProperty(a)))) this.B[a](b)
        }
    };
    var yh = function(a) {
        var b = {};
        b.c = a.w;
        b.i = a.v;
        a.o.postMessage(th(b), a.A)
    };
    xh.prototype.D = function() {
        if (1 === this.status) {
            try {
                this.o.postMessage && yh(this)
            } catch (a) {}
            window.setTimeout(bind(this.D, this), 50)
        }
    };
    xh.prototype.connect = function(a) {
        a && (this.j = a);
        on(window, "message", this.C);
        this.I && this.D()
    };
    var zh = function(a, b, c) {
            a.B[b] = c
        },
        Ah = function(a, b, c) {
            var d = {};
            d.c = a.w;
            d.i = a.v;
            d.s = b;
            d.p = c;
            a.o.postMessage(th(d), a.A)
        };
    xh.prototype.u = function() {
        this.status = 3;
        un(window, "message", this.C);
        xh.Fa.u.call(this)
    };
    re || se || isOldIE && Ee(11);
    var Bh = function() {
            this.j = []
        },
        Dh = function(a, b, c, d, e) {
            a.j.push(new Ch(b, c, d, e))
        },
        Eh = function(a, b, c, d) {
            Dh(a, b, c, d + "px", void 0)
        },
        Ch = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = notNull(d) && a.style && a.style.getPropertyPriority) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.u = this.l ? a.style.getPropertyPriority(this.j) : null;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, c, d)) : a.style[this.j] = c
        };
    // Fh = BaseSFChannel
    var BaseSFChannel = function(id) {
        this.m = id;
        this.u = null;
        this.H = this.status = 0;
        this.l = null;
        this.Z = "sfchannel" + id
    };
    var Gh = function(a, b, c, d, e, f) {
            this.m = Xe(a);
            this.l = Xe(b);
            this.o = c;
            this.j = Xe(d);
            this.u = e;
            this.v = f
        },
        //   sfchannel.j, D, entry
        Hh = function(a, b, entry) {
            var d = window.screenX || window.screenLeft || 0,
                e = window.screenY || window.screenTop || 0,
                f = window.outerWidth || document.documentElement.clientWidth || 0,
                g = window.outerHeight || document.documentElement.clientHeight || 0,
                d = b ? new We(e, f + d, g + e, d) : new We(e, f - d, g - e, d),
                k = ff(a);
            if ("none" != cf(a, "display")) e = hf(a);
            else {
                var e = a.style,
                    f = e.display,
                    g = e.visibility,
                    l = e.position;
                e.visibility = "hidden";
                e.position = "absolute";
                e.display = "inline";
                var n = hf(a);
                e.display = f;
                e.position = l;
                e.visibility = g;
                e = n
            }
            e = new Ye(k.x, k.y, e.width, e.height);
            f = Ze(e);
            g = String(cf(a, "zIndex"));
            if (b) {
                c = window;
                b = c.document;
                var m;
                try {
                    var q, w = c.document;
                    q = "CSS1Compat" == w.compatMode ? w.documentElement : w.body;
                    m = new Box(q.clientWidth, q.clientHeight)
                } catch (U) {
                    m = new Box(-12245933, -12245933)
                }
                c = new Box(Math.max(m.width, Math.max(b.body.scrollWidth, b.documentElement.scrollWidth)), Math.max(m.height, Math.max(b.body.scrollHeight, b.documentElement.scrollHeight)));
                c =
                    new We(0, c.width, c.height, 0);
                if (a) {
                    m = new We(0, Infinity, Infinity, 0);
                    w = Me(a);
                    q = w.j.body;
                    w = w.j.documentElement;
                    a = ef(a);
                    for (b = 0; a && 100 > b && !(k = bf(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow, isOldIE && 0 == a.clientWidth || se && 0 == a.clientHeight && a == q || a == q || a == w || "hidden" != k); a = ef(a), b++) k = ff(a), l = new le(a.clientLeft, a.clientTop), k.x += l.x, k.y += l.y, m.top = Math.max(m.top, k.y), m.right = Math.min(m.right, k.x + a.clientWidth), m.bottom = Math.min(m.bottom, k.y + a.clientHeight), m.left =
                        Math.max(m.left, k.x);
                    a = 0 <= m.top && 0 <= m.left && m.bottom > m.top && m.right > m.left ? m : null
                } else a = null;
                a = a ? Ze(af($e(c), $e(a))) : c
            } else if (c) m = c.boundingClientRect, a = k.y - m.top, m = k.x - m.left, a = new We(a, c.rootBounds.width + m, c.rootBounds.height + a, m);
            else {
                c = new We(0, Infinity, Infinity, 0);
                m = Me(a);
                w = m.j.body;
                b = m.j.documentElement;
                for (q = Re(m.j); a = ef(a);) isOldIE && 0 == a.clientWidth || se && 0 == a.clientHeight && a == w || a == w || a == b || "visible" == cf(a, "overflow") || (k = ff(a), l = new le(a.clientLeft, a.clientTop), k.x += l.x, k.y += l.y, c.top = Math.max(c.top,
                    k.y), c.right = Math.min(c.right, k.x + a.clientWidth), c.bottom = Math.min(c.bottom, k.y + a.clientHeight), c.left = Math.max(c.left, k.x));
                a = q.scrollLeft;
                q = q.scrollTop;
                c.left = Math.max(c.left, a);
                c.top = Math.max(c.top, q);
                m = getPageSize(getParentWindow(m.j) || window);
                c.right = Math.min(c.right, a + m.width);
                c.bottom = Math.min(c.bottom, q + m.height);
                a = 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : null
            }
            var x;
            null != a && (x = af($e(a), e));
            a = (c = (c = null != x && (0 != x.width || x.left + x.width != a.left && x.left != a.right)) && (0 != x.height || x.top + x.height != a.top &&
                x.top != a.bottom)) ? new We(Math.max(f.top - a.top, 0), Math.max(a.right - f.right, 0), Math.max(a.bottom - f.bottom, 0), Math.max(f.left - a.left, 0)) : new We(0, 0, 0, 0);
            m = c = 0;
            x && (new Box(x.width, x.height)).j() && (c = x.width / e.width, m = x.height / e.height);
            return new Gh(d, f, g, a, c, m)
        },
        createGeometry = function(a) {
            return th({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.o,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.u,
                yInView: a.v
            })
        };
    var Jh = function() {
        this.j = {
            shared: {
                sf_ver: "1-0-5",
                ck_on: navigator.cookieEnabled ? 1 : 0,
                flash_ver: nf ? of : "0"
            }
        }
    };
    var Kh = function(a, b) {
        this.pa = a;
        this.qa = b
    };
    var Lh = function(a, b, c, d, e, f) {
        var g = new Jh;
        this.o = a;
        this.j = b;
        this.l = c;
        this.permissions = d;
        this.m = g;
        this.u = e;
        this.na = f
    };
    var Mh = function(a) {
            this.j = a
        },
        Nh = function(a, b) {
            this.j = a;
            this.version = b
        };
    extend(Nh, Mh);
    Nh.prototype.m = function() {
        return th({
            uid: this.j,
            version: this.version
        })
    };
    var Oh = function(a, b, c) {
        this.j = a;
        this.o = b;
        this.l = c
    };
    extend(Oh, Mh);
    Oh.prototype.m = function() {
        return th({
            uid: this.j,
            initialWidth: this.o,
            initialHeight: this.l
        })
    };
    var Ph = function(a, b) {
        this.j = a;
        this.l = b
    };
    extend(Ph, Mh);
    Ph.prototype.m = function() {
        return th({
            uid: this.j,
            description: this.l
        })
    };
    var Qh = function(a, b, c) {
        this.j = a;
        this.l = b;
        this.push = c
    };
    extend(Qh, Mh);
    Qh.prototype.m = function() {
        return th({
            uid: this.j,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var Rh = function(a) {
        this.j = a
    };
    extend(Rh, Mh);
    Rh.prototype.m = function() {
        return th({
            uid: this.j
        })
    };
    var Sh = function(a, b) {
        this.j = a;
        this.o = b
    };
    extend(Sh, Mh);
    Sh.prototype.m = function() {
        var a = {
            uid: this.j,
            newGeometry: createGeometry(this.o)
        };
        return th(a)
    };
    var ExpandResponse = function(a, b, c, d, e) {
        Sh.call(this, a, c);
        this.u = b;
        this.l = d;
        this.push = e
    };
    extend(ExpandResponse, Sh);
    ExpandResponse.prototype.m = function() {
        var a = {
            uid: this.j,
            success: this.u,
            newGeometry: createGeometry(this.o),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        return th(a)
    };
    var Uh = function(a, b, c) {
        this.j = a;
        this.width = b;
        this.height = c
    };
    extend(Uh, Mh);
    Uh.prototype.m = function() {
        return th({
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var globalChannelId = 1,
        Wh = !1,
        SFChannel = function(a) {
            BaseSFChannel.call(this, globalChannelId++);
            this.eventLog = a.ub;
            this.size = 1 == a.size;
            this.N = new Kh(a.permissions.pa && !this.C, a.permissions.qa && !this.size);
            this.container = a.Ca;
            this.host = window.location.protocol + "//" + window.location.host;
            this.isfif = !!a.na;
            this.tpcGoogleURL = window.location.protocol + "//tpc.googlesyndication.com";
            this.O = !!a.cb;
            this.useSandbox = a.sandbox || false;
            this.o = new Bh;
            setFrameSize(this, a.Ca, a.size);
            this.D = a.fb || !1;
            this.u = this.R = Hh(a.Ca, this.D);
            this.Y = a.Cb || [];
            fillSafeFrameData(this, a);
            this.M = null;
            this.I = bind(this.L, this);
            this.J = -1;
            this.w = 0;
            this.intersectionObserver = null;
            if(a.ob) {
              if (!(
                  "function" !== typeof IntersectionObserver
                  || ue
                  || te)
              ) {
                this.B = new IntersectionObserver(bind(function(entries) {
                  this.M = entries[entries.length - 1];
                  this.L()
                }, this))
              }
            }
            this.l = new xh(this.Z, this.j.contentWindow, this.V, !1);
            zh(this.l, "init_done", bind(this.pb, this));
            zh(this.l, "register_done", bind(this.zb, this));
            zh(this.l, "report_error", bind(this.Bb, this));
            zh(this.l, "expand_request", bind(this.eb, this));
            zh(this.l, "collapse_request", bind(this.bb, this));
            zh(this.l, "creative_geometry_update", bind(this.T, this));
            this.l.connect(bind(this.xb, this));
            var b = bind(function() {
              if (this.j) {
                this.j.name = ""
                a.Pa && a.Pa()
                un(this.j, "load", b)
              }
            }, this);
            on(this.j, "load", b)
        };
    extend(SFChannel, BaseSFChannel);
    var setFrameSize = function(sfchannel, iframe, size) {
            if (sfchannel.isFluidSize) {
              iframe.style.width = gf("100%")
              iframe.style.height = gf("auto")
            } else {
              iframe.style.width = gf(size.width)
              iframe.style.height = gf(size.height)
            }
        },
        fillSafeFrameData = function(sfchannel, b) {
            var jIsDocument = Me(sfchannel.container), //c
                content = b.content; //d
            var e = sfchannel.Y;
            content = "1-0-5;" + (e.length ? "e:" + e.join() + ";" : "") + content.length + ";" + content;
            var e = new Lh(sfchannel.id, sfchannel.host, sfchannel.R, sfchannel.N, sfchannel.size, sfchannel.X),
                f = e.o,
                g = e.j,
                k = createGeometry(e.l),
                l;
            l = e.permissions;
            l = th({
                expandByOverlay: l.pa,
                expandByPush: l.qa,
                readCookie: !1,
                writeCookie: !1
            });
            e = {
                uid: f,
                hostPeerName: g,
                initialGeometry: k,
                permissions: l,
                metadata: th(e.m.j),
                reportCreativeGeometry: e.u,
                isDifferentSourceWindow: e.na
            };
            e = th(e);
            d += e;
            if (sfchannel.O && b.size instanceof Box) {
              e = b.kb
              size = b.size //f
              g = Me(sfchannel.container)
              if (!Wh) {
                appendScript(g.j, "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe")
                Wh = true
              }
              win = getParentWindow(g.j) //g
              win.google_eas_queue = win.google_eas_queue || []
              win.google_eas_queue.push({
                  a: e,
                  b: win.location.protocol + "//tpc.googlesyndication.com",
                  c: size.width,
                  d: size.height,
                  e: "sf-gdn-exp-" + sfchannel.id,
                  f: null,
                  g: null,
                  h: null,
                  i: null
              })
            }
            if (b.fc) {
                iframeId = b.kb //g
                size = b.size //e
                title = b.lb, //b
                if (iframe = document.getElementById(iframeId)/*f*/) {
                    var n;
                    a: {
                        try {
                            iframeWindow = iframe.contentWindow || (iframe.contentDocument ? $n(iframe.contentDocument) : null); //n
                            break a
                        } catch (e) {}
                        n = null
                    }
                    iframeWindow.name = content;
                    isIE() && 0 <= Jd(Be(), 10) && (iframeWindow.name = content);
                    sfchannel.isFluidSize
                      ? (
                        width = height = 0,
                        iframe.style.minWidth = "100%"
                      )
                      : (
                        width = size.width, //d
                        height = size.height //e
                      );
                    iframe.width = String(width);
                    iframe.height = String(height);
                    iframe.title = title || "";
                    iframe.setAttribute("data-is-safeframe", "true");
                    iframeWindow.location.replace(getSFUrl(sfchannel, getParentWindow(jIsDocument.j)));
                    sfchannel.U && (iframe.sandbox = "allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox");
                    sfchannel.safeframeIframe = iframe
                } else {
                  sfchannel.safeframeIframe = createSafeFrame(sfchannel, iframId, content, size, jIsDocument, title);
                }
            } else {
              sfchannel.safeframeIframe = createSafeFrame(sfchannel, b.kb, content, b.size, jIsDocument, b.lb)
            }
        },

        createSafeFrame = function(sfchannel, id, content, size, jIsDocument, title) {
            var g, k;
            sfchannel.isFluidSize
              ? (w = h = 0, d = "min-width:100%")
              : (w = size.width, h = size.height, d = "");
            b = {
                id: id,
                title: title || "",
                name: content,
                src: getSFUrl(sfchannel, getParentWindow(jIsDocument.j)),
                scrolling: "no",
                marginWidth: "0",
                marginHeight: "0",
                width: String(w),
                height: String(h),
                "data-is-safeframe": "true"
            };
            c = isOldIE && !Ee(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank";
            c = {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;" + (d || ""),
                allowTransparency: "true",
                src: c
            };
            b && extendObject(c, b);
            iframe = jIsDocument.l("IFRAME", c); //e
            sfchannel.useSandbox && (iframe.sandbox = "allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox");
            sfchannel.container.appendChild(iframe);
            return iframe
        },
        getSFUrl = function(sfchannel, doc) {
            var sfurl = getSafeFrameContainerUrl(doc); //c
            if (sfchannel.O) {
              isDebug = isDebug(doc.location.href) //b
              sfurl += "#" + [0 < isDebug.length ? "google_debug" + (isDebug ? "=" + isDebug : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.m, "&p=", encodeURIComponent(global.document.location.protocol), "//", encodeURIComponent(global.document.location.host)].join(""));
            }
            return sfurl
        };
    SFChannel.prototype.xb = function() {
        this.B && this.j ? this.B.observe(this.j) : (Vc(window, "resize", this.I), on(window, "scroll", this.I))
    };
    SFChannel.prototype.pb = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b, c = qh(a);
            if (!(y(c) && isNumber(c.uid) && isString(c.version))) throw Error("Cannot parse JSON message");
            b = new Nh(c.uid, c.version);
            if (this.m != b.j || "1-0-5" != b.version) throw Error("Wrong source container");
            this.status = 1
        } catch (d) {
            this.A.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    SFChannel.prototype.zb = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b = qh(a);
            if (!(y(b) && isNumber(b.uid) && isNumber(b.initialWidth) && isNumber(b.initialHeight))) throw Error("Cannot parse JSON message");
            if (this.m != (new Oh(b.uid, b.initialWidth, b.initialHeight)).j) throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.A.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    SFChannel.prototype.Bb = function(a) {
        try {
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b, c = qh(a);
            if (!(y(c) && isNumber(c.uid) && isString(c.description))) throw Error("Cannot parse JSON message");
            b = new Ph(c.uid, c.description);
            if (this.m != b.j) throw Error("Wrong source container");
            this.A.info("Ext reported an error. Description: " + b.l)
        } catch (d) {
            this.A.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    SFChannel.prototype.eb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.H) throw Error("Container is not collapsed");
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b, c = qh(a);
            if (!(y(c) && isNumber(c.uid) && isNumber(c.expand_t) && isNumber(c.expand_r) && isNumber(c.expand_b) && isNumber(c.expand_l) && isBoolean(c.push))) throw Error("Cannot parse JSON message");
            b = new Qh(c.uid, new We(c.expand_t, c.expand_r, c.expand_b, c.expand_l), c.push);
            if (this.m != b.j) throw Error("Wrong source container");
            if (!(0 <= b.l.top && 0 <= b.l.left &&
                0 <= b.l.bottom && 0 <= b.l.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = b.push && this.N.qa || !b.push && this.N.pa) {
                var e = b.l,
                    f = b.push,
                    g = this.u = Hh(this.j, this.D);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var k = this.j.parentNode; k && k.style; k = k.parentNode) Dh(this.o, k, "overflowX", "visible", "important"), Dh(this.o, k, "overflowY", "visible", "important");
                    var l = this.u.l,
                        n = this.u.l,
                        m = Ze(new Ye(0, 0, l.right - l.left, n.bottom - n.top));
                    isNotNull(e) ? (m.top -= e.top, m.right +=
                        e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                    Dh(this.o, this.v, "position", "relative");
                    Dh(this.o, this.j, "position", "absolute");
                    f ? (Eh(this.o, this.v, "width", m.right - m.left), Eh(this.o, this.v, "height", m.bottom - m.top)) : Dh(this.o, this.j, "zIndex", "10000");
                    Eh(this.o, this.j, "width", m.right - m.left);
                    Eh(this.o, this.j, "height", m.bottom - m.top);
                    Eh(this.o, this.j, "left", m.left);
                    Eh(this.o, this.j, "top", m.top);
                    this.H = 2;
                    this.u = Hh(this.j, this.D);
                    d = !0
                } else d = !1
            }
            a = d;
            Ah(this.l, "expand_response", (new ExpandResponse(this.m, a, this.u, b.l, b.push)).m());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (q) {
            this.A.error("Invalid EXPAND_REQUEST message. Reason: " + q.message)
        }
    };
    SFChannel.prototype.bb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.H) throw Error("Container is not expanded");
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b = qh(a);
            if (!isNotNull(b) || !isNumber(b.uid)) throw Error("Cannot parse JSON message");
            if (this.m != (new Rh(b.uid)).j) throw Error("Wrong source container");
            $h(this);
            Ah(this.l, "collapse_response", (new Sh(this.m, this.u)).m())
        } catch (c) {
            this.A.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var $h = function(a) {
        for (var b = a.o, c = b.j.length - 1; 0 <= c; c--) {
            var d = b.j[c];
            d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, d.o, d.u)) : d.m.style[d.j] = d.o
        }
        b.j.length = 0;
        a.H = 0;
        a.j && (a.u = Hh(a.j, a.D))
    };
    SFChannel.prototype.L = function() {
        if (1 == this.status || 2 == this.status) {
          switch (this.w) {
            case 0:
                ai(this);
                this.J = window.setTimeout(bind(this.P, this), 1000);
                this.w = 1;
                break;
            case 1:
                this.w = 2;
                break;
            case 2:
                this.w = 2
        }
      }
    };
    SFChannel.prototype.T = function(a) {
        try {
            if (!isString(a)) throw Error("Could not parse serialized message");
            var b, c = qh(a);
            if (!(y(c) && isNumber(c.uid) && isNumber(c.width) && isNumber(c.height))) throw Error("Cannot parse JSON message");
            b = new Uh(c.uid, c.width, c.height);
            if (this.m != b.j) throw Error("Wrong source container");
            var d = String(b.height);
            this.C ? d != this.j.height && (this.j.height = d, this.L()) : this.A.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (e) {
            this.A.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " +
                e.message)
        }
    };
    SFChannel.prototype.P = function() {
        if (1 == this.status || 2 == this.status) switch (this.w) {
            case 1:
                this.w = 0;
                break;
            case 2:
                ai(this), this.J = window.setTimeout(bind(this.P, this), 1E3), this.w = 1
        }
    };
    var ai = function(sfchannel) {
            sfchannel.u = Hh(sfchannel.j, sfchannel.D, sfchannel.M);
            sfchannel.M = null;
            Ah(sfchannel.l, "geometry_update", (new Sh(sfchannel.id, sfchannel.u)).m())
        },
        bi = function(sfchannel) {
            if (100 != sfchannel.status) {
                2 == sfchannel.H && $h(sfchannel);
                window.clearTimeout(sfchannel.J);
                sfchannel.J = -1;
                sfchannel.w = 3;
                if (sfchannel.l) {
                    var b = sfchannel.l;
                    b.l || (b.l = !0, b.u());
                    sfchannel.l = null
                }
                sfchannel.B && sfchannel.j ? sfchannel.B.unobserve(sfchannel.j) : (Wc(window, "resize", sfchannel.I), un(window, "scroll", sfchannel.I));
                if (b = sfchannel.j) {
                    var b = sfchannel.v,
                        c;
                    a: {
                        c = sfchannel.j;
                        var d;
                        if (Je && !(isOldIE&& Ee("9") && !Ee("10") && global.SVGElement && c instanceof global.SVGElement) && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;
                        c = isNotNull(d) && 1 == d.nodeType ? d : null
                    }
                    b = b == c
                }
                b &&
                    sfchannel.v.removeChild(a.j);
                sfchannel.j = null;
                sfchannel.v = null;
                sfchannel.B && (sfchannel.B.disconnect(), sfchannel.B = null);
                sfchannel.status = 100
            }
        };
    var ResponseInfo = function(advertiserId, campaignId, creativeId, labelIds, lineItemId) {
        this.advertiserId = advertiserId;
        this.campaignId = campaignId;
        this.creativeId = creativeId;
        this.labelIds = labelIds;
        this.lineItemId = lineItemId
    };
    var validSafeFrameConfig = function(config) {
            var eventLog = getEventLog(),
                _config = {};
            if (!config || !isNotNull(config)) {
              return null;
            }
            var invalidConfig = false;
            object$each(config, function(value, key) {
                switch (key) {
                    case "allowOverlayExpansion":
                        isBoolean(value)
                          ? _config.allowOverlayExpansion = config.allowOverlayExpansion
                          : (
                            eventLog.error(Zb("allowOverlayExpansion", config.allowOverlayExpansion), null, this),
                            invalidConfig = true
                          );
                        break;
                    case "allowPushExpansion":
                        isBoolean(value)
                          ? _config.allowPushExpansion = config.allowPushExpansion
                          : (
                            eventLog.error(Zb("allowPushExpansion", config.allowPushExpansion), null, this),
                            invalidConfig = true
                          );
                        break;
                    case "sandbox":
                        true === value
                          ? _config.sandbox = config.sandbox
                          : (
                            eventLog.error(Zb("sandbox", a.sandbox), null, this),
                            invalidConfig = true
                          );
                        break;
                    default:
                        eventLog.$a(Yb(f), null, this)
                }
            });
            return invalidConfig ? null : _config
        },
        mergeObjs = function(objArray) {
          var obj = {},
          for (i = 0; i < objArray.length; ++i) {
            object$each(objArray[i], function(v, k) {
            obj[k] = v
          });
          return obj
        };

    // ======safeframe相关 end ======
    //
    //
    //
    //
    //
    var eventNameMap = {
            ac: "slotRenderEnded",
            Qb: "impressionViewable",
            bc: "slotVisibilityChanged",
            $b: "slotOnload"
        },
        gi = function(a, b, c, d, e, f, g, k, l) {
            this.slot = a;
            this.isEmpty = b;
            this.size = c;
            this.advertiserId = d;
            this.campaignId = e;
            this.creativeId = f;
            this.labelIds = g;
            this.lineItemId = k;
            this.serviceName = l;
            this.slotContentChanged = !0
        },
        ii = function(slot) {
            var sn = pubads().getName();
            this.slot = slot;
            this.serviceName = sn
        },
        ji = function(slot, serviceName, inViewPercentage) {
            this.slot = slot;
            this.serviceName = serviceName;
            this.inViewPercentage = inViewPercentage
        },
        ki = function(a, b) {
            this.slot = a;
            this.serviceName = b
        };
    // li -> Service
    var Service = function() {
        this.slots = [];
        this.slotIdMap = {};
        this.enable = false;
        this.listeners = {};
        this.log = getEventLog();
        this.log.info(Xa(this.getName()), this)
    };
    Service.prototype.getName = function() {
        return "unknown"
    };
    Service.prototype.getVersion = function() {
        return "unversioned"
    };
    Service.prototype.getSlots = function() {
        return this.slots
    };
    Service.prototype.getSlotIdMap = function() {
        return this.slotIdMap
    };
    Service.prototype.enable = function() {
        if (this.enable) {
          this.log.info($a(), this);
        }
        else try {
            this.va()
            this.enable = true
        } catch (e) {
            sendGPTException(87, e), this.log.error(ab(String(e)), this)
        }
    };
    Service.prototype.addSlot = function(slot) {
        this.slots.push(slot);
        this.slotIdMap[getUUID(slot)] = slot;
        this.log.info(bb(this.getName(), slot.getAdUnitPath()), this, slot)
    };
    Service.prototype.addEventListener = function(type, fn) {
        try {
            if (!isFunction(fn) || !isString(type)) {
                var c = F("Service.addEventListener", [type, fn]);
                this.log.$a(c, this);
                return this
            }
            if (!hasInObject(eventNameMap, type)) {
              return this.log.$a(Sb(type), this), this;
            }
            if (!isArray(this.listeners[type])) {
              this.listeners[type] = []
            }
            this.listeners[type].push(fn);
            var rs = new ReportSender("gpt_callback_usage");
            appendReportSenderParams(rs, "type", type);
            addExParamsToReportSender(rs);
            sendReport(rs);
            return this
        } catch (e) {
            R(86, e)
        }
    };
    var fireServiceEvent = function(service, type, args) {
        handlers = service.listeners[type];
        isArray(handlers) && forEach(handlers, function(handler) {
            try {
                handler(args)
            } catch (e) {
                a = e && isString(e.name) ? e.name : null;
                var b = e && isString(e.message) ? e.message : null,
                    d = "";
                a && b ? d = a + ": " + b : a ? d = a : b && (d = b);
                this.log.$a(Rb(d), this)
            }
        }, service)
    };
    var ni = {
            Nb: "loader_loaded_instant",
            Ob: "loader_loaded_instant_nw",
            Zb: "_start_pubads_load_period",
            Xb: "pubads_load_period",
            Yb: "impl_loaded_instant",
            Ub: "page_load_time",
            Vb: "page_load_time_nw",
            Wb: "page_unload_time",
            Fc: "fpt"
        },
        oi = {
            start_ad_fetch_period: !0,
            start_ad_render_period: !0
        },
        pi = {
            pubads_load_period: "_start_pubads_load_period"
        },
        qi = {
            ad_fetch_period: "start_ad_fetch_period",
            ad_render_period: "start_ad_render_period"
        },
        ri = function() {
            this.j = false;
            if (
              global.GPT_jstiming
              && global.GPT_jstiming.load
              && ("http:" == global.location.protocol || "https:" == global.location.protocol)
              && cg
            ) {
              this.j = true
            }
            this.now_rand = now_rand;
            this.u = this.o = this.M = null;
            this.L = this.I = this.H = !1;
            this.B = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
            this.m = window.GPT_jstiming.load;
            this.m.name = "global";
            if (!window.performance || !window.performance.timing) {
                var now = SingletonConfig.getInstance().get(49);
                this.B = now;
                this.m.tick("start", null, now)
            }
            this.l = {};
            this.C = 500;
            this.V = [];
            this.D = {};
            this.J = !1;
            this.Y = this.W = 0;
            this.w = !1;
            this.v = {};
            this.A = {};
            this.X = this.O = this.U = this.P = this.R = this.N = this.T = 0
        },
        si = null,
        S = function() {
            return si || ti()
        },
        ti = function() {
            var win = window,
                b = new ri;
            si = b;
            if (!b.j) {
              return b;
            }
            ui(b);
            vi(b);
            if (getGoogleTagObj().fifWin && "complete" == document.readyState) {
              if (win.performance && win.performance.timing) {
                wi(b, win.performance.timing.loadEventStart)
              }
            } else {
              onload(win, function() {
                wi(b)
              });
            }

            oa(a, function() {
                xi(b, "page_unload_time");
                yi(b, !0)
            });
            zi(b, "v107");
            return b
        },
        vi = function(a) {
            object$each(ni, function(a) {
                this.l[a] = !1
            }, a)
        },
        Ai = function(a, b, c, d) {
            a.m || (a.m = new global.GPT_jstiming.Timer(a.B), a.m.name = "global");
            var e = "_" == b[0];
            if (c || e || window.performance &&
                window.performance.timing) a.m.tick(b, c, d), e || (a.I = !0);
            a.J || yi(a)
        },
        Bi = function(a, b, c, d, e) {
            c ? a.u || (a.u = new global.GPT_jstiming.Timer(a.B), a.u.name = "ad_events_psbk") : a.o || (a.o = new global.GPT_jstiming.Timer(a.B), a.o.name = "ad_events");
            var f = "_" == b.charAt(0);
            c ? (a.u.tick(b, d, e), f || (a.L = !0)) : (a.o.tick(b, d, e), f || (a.H = !0))
        },
        xi = function(a, b, c) {
            try {
                a.j && (Ai(a, b, pi[b], c), a.l[b] = !0)
            } catch (d) {
                R(104, d)
            }
        },
         // a, key, c, timestamp
        Ci = function(a, key, c, timestanp) {
            try {
                if (key = key + "." + c, c = "_" + key) {
                  Ai(a, c, null, 0)
                  Ai(a, b, c, d)
                }
            } catch (e) {
                R(104, e)
            }
        },
        gk = function(a, b, c, d, e) {
            b =
                b + "." + c;
            c = "_" + b;
            Bi(a, c, d, void 0, 0);
            Bi(a, b, d, c, e)
        },
        Di = function(a, b, c, d) {
            if (a.j && !(1E3 < c)) {
                var e = qi[b],
                    f = e;
                e && (f += "." + c);
                c = b + ("." + c);
                f && a.D.hasOwnProperty("_" + f) && (f = "_" + f, Bi(a, f, d || !1, void 0, a.D[f] + a.B), delete a.D[f]);
                Bi(a, c, d || !1, f);
                d = d ? a.u : a.o;
                oi.hasOwnProperty(b) && (b = window.GPT_jstiming.getTick(d, c), a.D["_" + c] = b)
            }
        },
        Ei = function(a) {
            a.l.loader_loaded_instant && !a.l.loader_loaded_instant_nw && xi(a, "loader_loaded_instant_nw", a.W);
            a.l.page_load_time && !a.l.page_load_time_nw && xi(a, "page_load_time_nw", a.Y)
        },
        ui = function(ri) {
            window.setTimeout(bind(function() {
                try {
                    var a = yi(this),
                        c;
                    if (this.j) {
                        var d = false;
                        if (this.o && this.H) {
                          Gi(this, this.v)
                          Co(this.o, this.v)
                          this.o = null
                          this.H = false
                          this.v = {}
                          d = true
                        }
                        if (this.u && this.L) {
                          Gi(this, this.A)
                          Co(this.u, this.A)
                          this.u = null
                          this.L = false
                          this.A = {}
                          d = true
                        }
                        c = d
                    } else {
                      c = false
                    }
                    if (a || c) {
                      this.C = Math.min(2 * this.C, 32E3)
                    }
                    ui(this)
                } catch (e) {
                    R(105, e)
                }
            }, ri), ri.freq/* 500 */)
        },
        Hi = function(a) {
            var b = null != a.m && a.I && (a.l.page_load_time || "complete" == document.readyState) && a.l.loader_loaded_instant;
            b && object$each(ni, function(a) {
                var c =
                    pi[a];
                c && (b = b && this.l[a] == this.l[c])
            }, a);
            return b
        },
        yi = function(ri, b) {
            if (!ri.j) {
              return false;
            }
            var c = false;
            if (ri.m && (b || Hi(ri))) {
                b
                  ? zi(ri, "page_unload")
                  : zi(ri, "page_load");
                c = {};
                if (!ri.J || b) {
                  c.count_of_slots = ri.count_of_slots
                  c.count_of_requested_slots = ri.count_of_requested_slots
                  c.count_of_rendered_slots = ri.count_of_rendered_slots
                  c.count_of_requests = ri.count_of_requests
                  c.count_of_refreshes_called = ri.count_of_refreshes_called
                  c.count_of_passback = ri.count_of_passback
                }

                Gi(ri, c);
                // send Beacon
                Co(ri.m, c);

                ri.J = !0;
                ri.I = !1;
                ri.m = null;
                c = true
            }
            return c
        },
        Co = function(a, b) {
            var c = "https:" == global.location.protocol
              ? "https://www.google.com/csi"
              : "http://csi.gstatic.com/csi";
            if (O(to, lo.la/* 21060062 */)) {
              c = global.GPT_jstiming.getReportUri(a, b, c)
              global.navigator.sendBeacon(c, "") || logWithImg(p, c)
            } else if (O(to, lo.xa)) {
              c = global.GPT_jstiming.getReportUri(a, b, c)
              global.navigator.sendBeacon(c, "")
            } else {
              global.GPT_jstiming.report(a, b, c)
            }
        },
        Gi = function(ri, b) {
            b.vrg = "107";
            b.pl_id = ri.Z;
            a = ri.V.join();
            var c = Wd().join();
            b.e = a.length && c.length
              ? a + "," + c
              : a + c
        },
        zi = function(a, b) {
            b.length > 0 && notInThenPush(a.V, b)
        },
        Ii = function(a, b) {
            null === a.M && ((a.M = b) ? zi(a, "sra") : zi(a, "non-sra"))
        },
        Ji = function(a, b, c, d) {
            a.j && (d ? (a.A[b] = a.A[b] || [], a.A[b].push(c)) : (a.v[b] = a.v[b] || [], a.v[b].push(c)))
        },
        riCounterIncrease = function(ri, type) {
            switch (type) {
                case "count_of_slots":
                    ++ri.count_of_slots;
                    break;
                case "count_of_requested_slots":
                    ++ri.count_of_requested_slots;
                    break;
                case "count_of_rendered_slots":
                    ++ri.count_of_rendered_slots;
                    break;
                case "count_of_requests":
                    ++ri.count_of_requests;
                    break;
                case "count_of_refreshes_called":
                    ++ri.count_of_refreshes_called;
                    break;
                case "count_of_passback":
                    ++ri.count_of_passback
            }
        },
        wi = function(a, b) {
            if (a.j) {
                xi(a, "page_load_time", b);
                var c = Do();
                c && Ai(a, "fpt", void 0, c);
                a.w ? xi(a, "page_load_time_nw", b) : a.Y = b || (new Date).getTime()
            }
        },
        Li = function(a) {
            xi(a, "loader_loaded_instant");
            a.w ? xi(a, "loader_loaded_instant_nw") : a.W = (new Date).getTime()
        },
        Mi = function() {
            var a = S();
            xi(a, "_start_pubads_load_period")
        },
        Ni = function(a) {
            xi(a, "impl_loaded_instant");
            xi(a, "pubads_load_period")
        },
        Pi = function(ri, b, c, d) {
            Di(ri, "start_ad_fetch_period", b, c);
            d && object$each(d, function(a, d) {
                Ji(this, d, b + "_" + a, c)
            }, a);
            riCounterIncrease(ri, "count_of_requests")
        },
        Qi = function(a, b, c, d, e) {
            Di(a, "start_ad_render_period", b, c);
            gk(a, "exr", b, c, d ? 1 : 0);
            e && object$each(e, function(a, d) {
                Ji(this, d, b + "_" + a, c)
            }, a)
        },
        hk = function(a, b, c, d) {
            if (a.j) try {
                var e = c && c.contentWindow;
                if (e) {
                    var f;
                    if (e.performance && e.performance.getEntries) {
                        var g =
                            e.performance.getEntries(),
                            k = g.length;
                        c = 0;
                        if (k && isNumber(g[0].transferSize))
                            for (e = 0; e < k; e++) c += g[e].transferSize;
                        f = {
                            Lb: k,
                            ec: c
                        }
                    } else f = null;
                    f && (gk(a, "nres", b, d, f.Lb), gk(a, "tts", b, d, f.ec))
                }
            } catch (l) {}
        },
        Ri = function(a, name, c) {
            if (a.j) {
                var win = getGoogleTagObj().fifWin || window;
                if (
                  win.performance
                  && win.performance.getEntriesByName
                  && (b = win.performance.getEntriesByName(name)[0])
                ) {
                  Ci(a, "rt_st", c, b.startTime)
                  Ci(a, "rt_fs", c, b.fetchStart)
                  if (0 < b.responseStart) {
                    Ci(a, "rt_dns", c, b.domainLookupEnd - b.domainLookupStart)
                    Ci(a, "rt_tcp", c, b.connectEnd - b.connectStart)
                    if (b.secureConnectionStart) {
                      Ci(a, "rt_ssl", c, b.connectEnd - b.secureConnectionStart)
                    }
                    Ci(a, "rt_rtt", c, b.responseStart - b.fetchStart)
                    Ci(a, "rt_tft", c, b.responseEnd - b.responseStart)
                  }
                  Ci(a, "rt_duration", c, b.duration)
                }
            }
        },
        Do = function() {
            var a = window.performance && window.performance.timing;
            if (!a) return 0;
            if (window.chrome && window.chrome.loadTimes) {
                var b = window.chrome.loadTimes(),
                    c = 1E3 * b.firstPaintTime;
                a && a.navigationStart && b.startLoadTime && (c -= 1E3 * b.startLoadTime - a.navigationStart);
                return c
            }
            return a && a.msFirstPaint ?
                a.msFirstPaint : 0
        };
    var ServiceManager = function() {
            this.serviceMap = {};
            this.m = false;
            this.eventLog = getEventLog();
            this.u = this.eventLog.info(Ea());
            onload(window, bind(ServiceManager.prototype.oninit, this))
        },
        getServiceFromServiceManagerByName = function(serviceManagerInstance, name) {
            var service = null;
            name in serviceManagerInstance.serviceMap && (service = serviceManagerInstance.serviceMap[name]);
            return service
        },
        Vi = function() {
            var a = $googleTags$ServiceManagerInstance();
            object$each(a.j, function(a, c) {
                a.enable();
                zi(S(), c)
            })
        };
    ServiceManager.prototype.oninit = function() {
        try {
            this.m = true;
            this.eventLog.info(ya(), null, null, this.u)
        } catch (a) {
            R(92, a)
        }
    };
    var $googleTags$ServiceManagerInstance = function() {
        var googleTags = getGoogleTagObj();
        return googleTags.service_manager_instance || (googleTags.service_manager_instance = new ServiceManager)
    };
    setProp2GoogleTagObj("enableServices", function() {
        try {
            Vi()
        } catch (a) {
            R(91, a)
        }
    });
    var isPrimitiveSize2 = function(size) {
            var isNumberSize = isArray(size) && size.length == 2 && isPositiveNumber(size[0]) && isPositiveNumber(size[1]);
            isFluidSize = isString(size) && "fluid" == size;
            return isNumberSize || isFluidSize
        },
        createSizeObject = function(size) {
            return isArray(size) ? new NumberSize(size[0], size[1]) : size
        },
        //判断是否是最基本的尺寸值 [number, number] or 'fluid'
        isPrimitiveSize = function(size) {
            var isNumberSize = isArray(size) && size.length > 1 && isNumber(size[0]) && isNumber(size[1]);
            isFluidSize = isString(size) && "fluid" == size;
            return isNumberSize || isFluidSize
        };
    var NumberSize = function(w, h) {
        this.w = w;
        this.h = h
    };
    NumberSize.prototype.getWidth = function() {
        return this.w
    };
    NumberSize.prototype.getHeight = function() {
        return this.h
    };
    // 从size数组中提取出所有的size，如果sizes本身就是个原始值，直接存入数组
    // size 可能是原始值组成的多个数组：
    //  [[number, number], 'fluid', [number, number]]
    // 或者是原始值[number, number] 'fluid'
    var getSizeObjectArray = function(sizes) {
        var result = [];
        if (isPrimitiveSize(sizes)) {
          result.push(createSizeObject(size));
        } else if (isArray(sizes)) {
          for (var i = 0; i < size.length; ++i) {
              var size = sizes[i];
              isPrimitiveSize(size) && result.push(createSizeObject(d))
          }
        }
        return result
    };
    var SizeMappingObject = function(viewport, sizes) {
        this.viewport = viewport;
        this.sizes = sizes
    };
    var bj = function(a) {
            this.j = a
        },
        // 找到比当前给定的展示窗口尺寸小的展示窗口对应的slot的尺寸
        // 即当前窗口可以展示的slot size
        getCurViewportSizeCanDisplaySizesFrom = function(sizeMappings, curViewportSize) {
            mappings = StringOrArray$find(sizeMappings.data, function(sizeMapping) {
                vp = sizeMapping.viewport;
                return curViewportSize.width >= vp.width && curViewportSize.height >= vp.height
            });
            return null == mappings ? null : mappings.sizes
        },
        // 定义某一个viewport大小跟slot尺寸的关系
        createSizeMapping = function(mapping/*[viewportSize, sizes]*/) {
            if (!isArray(mapping) || mapping.length != 2) {
              throw Error("Each mapping entry has to be an array of size 2");
            }
            var viewportSize;
            viewportSize = mapping[0];
            if (!isPrimitiveSize2(viewportSize) || "fluid" == viewportSize) {
              throw Error("Size has to be an array of two non-negative integers");
            }
            viewport = new Box(viewportSize[0], viewportSize[1]);

            if (isArray(mapping[1]) && mapping[1].length == 0) {
              mapping = [];
            } else {
              sizes = getSizeObjectArray(mapping[1])
              if (sizes.length == 0) {
                throw Error("At least one slot size must be present");
              }
            }
            return SizeMappingObject(viewport, sizes)
        };
    // j = adUnitPath
    // ma = uid
    // l = adUnitPath_uid
    // m = divId || gpt_unit_adunitpath_uid
    // 保存slot的一些简单信息
    var _Slot = function(adUnitPath, uid, div_id) {
        this.adUnitpath = adUnitPath;
        this.instance = isNumber(uid) ? uid : 0;
        this.id = this.j + "_" + this.ma;
        this.domId = div_id || "gpt_unit_" + this.l
    };
    _Slot.prototype.getId = function() {
        return this.id
    };
    _Slot.prototype.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _Slot.prototype.getName = function() {
        return this.adUnitPath
    };
    _Slot.prototype.getInstance = function() {
        return this.instance
    };
    _Slot.prototype.toString = _Slot.prototype.getId;
    _Slot.prototype.getDomId = function() {
        return this.domId
    };
    var Slot = function(adUnitPath, uid, sizes, div_id) {
        this.adUnitPath = adUnitPath;
        this.sizeObjs = getSizeObjectArray(sizes);
        this.sizeMappings = null;
        this._slot = new _Slot(adUnitPath, uid, div_id);
        this.serviceList = []; // service list
        this.adsenceAttr = {};
        this.J = null;
        this.eventLog = getEventLog();
        this.eventLog.info(za(this.m.toString()), null, this);
        this.renderEnd = this.renderStart = this.fetchEnd = this.fetchStart = null;
        this.clickUrl = this.contentUrl = "";
        this.U = !0;
        this.targeting = {}; // {key: [value, value], key: [value, value]}
        this.N = [];
        this.ga = !1;
        this.divStartsCollapsed = this.collapseEmptyDiv = null; //bool
        this.Y = 0;
        this.W = -1;
        this.fa = 0;
        this.hb = !1;
        this.safeFrameConfig = {};
        this.passbackUrl = "";
        this.R = flase;
        this.forceSafeFrame = null;
        this.P = !1;
        this.B = null;
        this.sb = Hd(function() {
            null !== this.B && this.visibilityChanged(this.B)
        }, this);
        this.channel0 = getChannel0From(this.adUnitPath);
        this.X = "";
        this.responseInfo = this.o =
            null;
        this.sa = !1;
        this.l = null;
        this.ha = this.T = 0;
        this.H = this.O = !1;
        this.csiId = ++S().X
    };
    Slot.prototype.getPassbackPageUrl = function() {
        return this.passbackUrl
    };
    // 设置adsence attritube
    Slot.prototype.set = function(key, value) {
        try {
            if (!isString(key) || !value) {
              this.eventLog.$a(F("Slot.set", [key, value]), null, this)
              return this;
            }
            var adUnitPath = this.getAdUnitPath();
            this.adsenceAttr[key] = value;
            if (this.fetchStart || this.renderStart) {
              this.eventLog.$a(Ga(key, String(value), adUnitPath), null, this)
            } else {
              this.eventLog.info(Fa(key, String(value), adUnitPath), null, this)
            }
            return this
        } catch (e) {
            R(40, e)
        }
    };
    // 获取adsence attritube
    Slot.prototype.get = function(key) {
        try {
            return isString(key)
              ? this.adsenceAttr.hasOwnProperty(key)
                ? this.adsenceAttr[key]
                : null
              : (this.eventLog.$a(F("Slot.get", [key]), null, this), null)
        } catch (e) {
            R(41, e)
        }
    };
    Slot.prototype.getAttributeKeys = function() {
        try {
            var keys = [];
            object$each(this.adsenceAttr, function(value, key) {
                keys.push(key)
            });
            return keys
        } catch (e) {
            R(42, e)
        }
    };
    Slot.prototype.addService = function(service) {
        try {
            var smi = $googleTags$ServiceManagerInstance();
            if (!hasInObject(smi.serviceMap, service)) {
              this.eventLog.$a(Tb(this._slot.toString()), null, this)
              return this;
            }
            for (i = 0; i < this.serviceList.length; ++i)
              if (service == this.serviceList[i]) {
                this.eventLog.$a(Ha(service.getName(), this._slot.toString()), service, this)
                return this;
              }
            }
            this.serviceList.push(service);
            service.Ea(this);
            return this
        } catch (e) {
            R(43, e)
        }
    };
    Slot.prototype.getName = function() {
        return this.adUnitPath
    };
    Slot.prototype.getAdUnitPath = function() {
        try {
            return this.adUnitPath
        } catch (e) {
            R(54, e)
        }
    };
    Slot.prototype.getInstance = function() {
        return this.getSlotId().getInstance()
    };
    Slot.prototype.getSlotElementId = function() {
        return this.m.getDomId()
    };
    Slot.prototype.getSlotId = function() {
        return this._slot
    };
    Slot.prototype.getServices = function() {
        return this.serviceList
    };
    // 根据给定的尺寸获取能够展示的尺寸， 如果没有给定宽高，返回这个slot所有的sizes
    Slot.prototype.getSizes = function(w, h) {
        return isNumber(w) && isNumber(h) && this.sizeMappings
          ? getCurViewportSizeCanDisplaySizesFrom(this.sizeMappings, new Box(w, h))
          : this.sizeObjs
    };
    var getUUID = function(slot) {
        //slot.adUnitpath + '_' + slot.ma
        return slot.adUnitPath + "_" + slot._slotlot.getInstance()
    };
    Slot.prototype.defineSizeMapping = function(sizeMapping) {
        try {
            if (!isArray(sizeMapping)) {
              throw Error("Size mapping has to be an array");
            }
            var sizeMappings = Array$map(sizeMapping, createSizeMapping);
            this.sizeMappings = {
              data: sizeMappings
            }
        } catch (c) {
            sendGPTException(44, c), this.eventLog.$a(Ia(c.message), null, this)
        }
        return this
    };
    // 如果当前没有在iframe中，那么返回vp中可以展现的匡高，否则返回全部匡高，
    // 返回的是String or [number, number] 不是size对象
    var getSlotSizes = function(slot) {
          var win = window,
              size = null;
          if (win.top == win) {
            var pageSize = getPageSize(window)
            sizes = slot.getSizes(pageSize.width, pageSize.height)
          }
          null == sizes && (sizes = slot.getSizes());
          return Array$map(sizes, function(size) {
              return isString(size) ? size : [size.getWidth(), size.getHeight()]
          })
        },
        getSlotSizesString = function(slot) {
            var res = [],
                c = false;
            forEach(getSlotSizes(slot), function(size) {
                isArray(size)
                  ? res.push(size.join("x"))
                  : "fluid" == size
                    ? c = true
                    : res.push(size)
            });
            c && res.unshift("320x50");
            return res.join("|")
        };
    Slot.prototype.hasWrapperDiv = function() {
        return !!document.getElementById(this._slot.getDomId())
    };
    Slot.prototype.setClickUrl = function(url) {
        try {
            if (!isString(url)) {
              return this.eventLog.$a(F("Slot.setClickUrl", [url]), null, this), this;
            }
            this.clickUrl = url;
            return this
        } catch (b) {
            R(45, b)
        }
    };
    Slot.prototype.getClickUrl = function() {
        return this.clickUrl
    };
    Slot.prototype.setForceSafeFrame = function(forceSafeFrame) {
        try {
            if (!isBoolean(forceSafeFrame)) return this.eventLog.$a(F("Slot.setForceSafeFrame", [forceSafeFrame]), null, this), this;
            this.forceSafeFrame = forceSafeFrame;
            return this
        } catch (e) {
            R(55, e)
        }
    };
    Slot.prototype.setCategoryExclusion = function(category) {
        try {
            if (isString(category) && !isBlank(toString(category)) {
              notInThenPush(this.categoryExclusion, category)
              return this.eventLog.info(Ja(a), null, this)
            } else {
              this.eventLog.$a(F("Slot.setCategoryExclusion", [category]), null, this)
              return this
            }
        } catch (b) {
            R(46, b)
        }
    };
    Slot.prototype.clearCategoryExclusions = function() {
        try {
            this.eventLog.info(Ka(), null, this)
            this.categoryExclusion = []
            return this
        } catch (a) {
            R(47, a)
        }
    };
    Slot.prototype.getCategoryExclusions = function() {
        try {
            return listToArray(this.categoryExclusion)
        } catch (a) {
            R(48, a)
        }
    };
    Slot.prototype.setTargeting = function(key, value) {
        try {
            var targetings = [];
            isArray(value)
              ? targetings = value
              : value && targetings.push(value.toString());
            if (isString(key)) {
              this.eventLog.info(La(key, targetings.join(), this.getAdUnitPath()), null, this)
              this.targeting[key] = targetings
            } else {
              this.eventLog.$a(F("Slot.setTargeting", [key, value]), null, this)
            }
            return this
        } catch (d) {
            R(49, d)
        }
    };
    // 不加opt_key就删除全部
    Slot.prototype.clearTargeting = function(opt_key) {
        try {
            if (arguments.length) {
                if (!isString(opt_key) || isBlank(toString(opt_key))) {
                  this.eventLog.$a(F("Slot.clearTargeting", [opt_key]), null, this)
                  return this;
                }
                if (!this.targeting[opt_key]) {
                  this.eventLog.$a($b(opt_key, this.getAdUnitPath()), null, this)
                  return this
                }
                delete this.targeting[opt_key];
                this.eventLog.info(ac(opt_key, this.getAdUnitPath()), null, this)
            } else {
              this.eventLog.info(Ma(), null, this)
              this.targeting = {};
            }
            return this
        } catch (b) {
            R(50, b)
        }
    };
    Slot.prototype.getTargetingMap = function() {
        return copy(this.targeting)
    };
    Slot.prototype.getTargeting = function(key) {
        try {
            return isString(key)
              ? this.targeting.hasOwnProperty(key)
                ? listToArray(this.targeting[key])
                : []
              : (this.eventLog.$a(F("Slot.getTargeting", [key]), null, this), [])
        } catch (b) {
            R(51, b)
        }
    };
    Slot.prototype.getTargetingKeys = function() {
        try {
            var keys = [];
            object$each(this.targeting, function(val, key) {
                keys.push(key)
            });
            return keys
        } catch (b) {
            R(52, b)
        }
    };
    Slot.prototype.wa = function(a) {
        this.ga = a
    };
    Slot.prototype.getOutOfPage = function() {
        return this.ga
    };
    Slot.prototype.getAudExtId = function() {
        return this.Y
    };
    Slot.prototype.gtfcd = function() {
        return this.W
    };
    Slot.prototype.setCollapseEmptyDiv = function(collapse, opt_collapseBeforeAdFetch) {
        try {
            if (!isBoolean(collapse) || opt_collapseBeforeAdFetch && !isBoolean(opt_collapseBeforeAdFetch)) {
              this.eventLog.$a(F("Slot.setCollapseEmptyDiv", filter([collapse, opt_collapseBeforeAdFetch], r)), null, this)
              return this;
            }
            this.divStartsCollapsed = (this.collapseEmptyDiv = collapse) && !!opt_collapseBeforeAdFetch;
            if (opt_collapseBeforeAdFetch && !collapse) {
              this.eventLog.$a(Na(this._slot.toString()), null, this);
            }
            return this
        } catch (c) {
            R(53, c)
        }
    };
    Slot.prototype.getCollapseEmptyDiv = function() {
        return this.collapseEmptyDiv
    };
    Slot.prototype.getDivStartsCollapsed = function() {
        return this.divStartsCollapsed
    };
    var jj = function(a, b) {
            if (!a.hasWrapperDiv()) return a.j.error(Oa(a.m.toString()), null, a), !1;
            var c = global.document,
                d = a.m.getDomId(),
                c = c && c.getElementById(d);
            if (!c) return a.j.error(Pa(d, a.m.toString()), null, a), !1;
            d = a.J;
            return isString(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
        },
        lj = function(a, b) {
            var c = null,
                d = !0,
                e = null,
                f = null,
                g = null,
                k = null,
                l = null;
            isNotNull(b) && (d = b._empty_, d || (c = [b._width_, b._height_], 0 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (g = b._creative_ids_[0], l = b._adgroup2_ids_[0]),
                b._advertiser_ids_ && (e = b._advertiser_ids_[0]), b._campaign_ids_ && (f = b._campaign_ids_[0]), b._label_ids_ && b._label_ids_[0] && (k = isString(b._label_ids_[0]) ? b._label_ids_[0].split("|") : [b._label_ids_[0]])));
            return new gi(a, d, c, e, f, g, k, l, "publisher_ads")
        },
        mj = function(a) {
            return new gi(a, !0, null, null, null, null, null, null, "publisher_ads")
        };
    Slot.prototype.fetchStarted = function(url) {
        if (!this.fetchStart) {
          riCounterIncrease(S(), "count_of_requested_slots");
        }
        this.fetchStart = this.eventLog.info(Aa(this.getAdUnitPath()), null, this); // return logInfo
        this.contentUrl = url;
        this.T++
    };
    Slot.prototype.getContentUrl = function() {
        return this.contentUrl
    };
    Slot.prototype.fetchEnded = function() {
        this.fetchEnd = this.eventLog.info(Ba(this.getAdUnitPath()), null, this, this.fetchStart) //return logInfo
    };
    Slot.prototype.renderStarted = function() {
        this.renderStart = this.eventLog.info(Ca(this.getAdUnitPath()), null, this) //return logInfo
    };
    Slot.prototype.getResponseInformation = function() {
        return this.responseInfo
    };
    Slot.prototype.renderEnded = function(gi) {
        if (gi.isEmpty) {
          this.responseInfo = null
        } else {
          this.responseInfo = new ResponseInfo(gi.advertiserId, gi.campaignId, gi.creativeId, gi.labelIds, gi.lineItemId);
        }
        if (!this.renderEnd) {
          riCounterIncrease(S(), "count_of_rendered_slots");
        }
        this.renderEnd = this.eventLog.info(Da(this.getAdUnitPath()), null, this, this.renderStart);
        forEach(this.serviceList, function(service) {
            if (service.getName() == gi.serviceName) {
                var c;
                if (c = !gi.slotContentChanged) {
                  c = service.B.slotRenderEnded
                  c = !!c && 0 < c.length
                }
                if (c) {
                  rs = new ReportSender("slot_render_ended_false_positive")
                  addExParamsToReportSender(rs)
                  sendReport(rs))
                }
                fireServiceEvent(service, "slotRenderEnded", gi)
            }
        })
    };
    Slot.prototype.loaded = function() {
        var service = pubads(),
            b = new ki(this, service.getName());
        fireServiceEvent(service, "slotOnload", b);
        var c = S(),
            d = this.getCsiId(),
            e = this.hb;
        Di(c, "ad_render_period", d, e);
        if (!this.o) {
            var f = document.getElementById(getIframeUUID(this));
            hk(c, d, f, e);
            window.setTimeout(function() {
                hk(c, d, f, e)
            }, 1E3)
        }
    };
    Slot.prototype.impressionViewable = function() {
        nj(this, "impressionViewable", new ii(this))
    };
    var oj = function(a) {
        a.P = !1;
        a.B = null;
        a.I = null;
        a.O = !1;
        a.l = null
    };
    Slot.prototype.La = function(a, b) {
        if (a && !this.P) {
          this.impressionViewable()
          this.P = true
        }
        a = this.B;
        this.B = Math.floor(b);
        if (a !== this.B) {
          this.sb()
        }
    };
    Slot.prototype.visibilityChanged = function(inViewPercentage) {
        _ji = new ji(this, pubads().getName(), inViewPercentage);
        nj(this, "slotVisibilityChanged", _ji)
    };
    Slot.prototype.setFirstLook = function(b) {
        if (!isBoolean(b)) {
          this.eventLog.$a(F("Slot.setFirstLook", [b]), null, this)
          return this;
        }
        this.firstLook = b ? 1 : 2;
        return this
    };
    Slot.prototype.getFirstLook = function() {
        return this.firstLook
    };
    var pj = function(a) {
        var b = [],
            c = a.getTargetingMap();
        object$each(c, function(a, c) {
            for (var d = [], e = 0; e < a.length; ++e) d.push(encodeURIComponent(a[e]));
            b.push(encodeURIComponent(c) + "=" + d.join(","))
        });
        a = a.getCategoryExclusions();
        if (0 < a.length && !("excl_cat" in c)) {
            for (var c = [], d = 0; d < a.length; ++d) c.push(encodeURIComponent(a[d]));
            b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
        }
        return b.join("&")
    };
    Slot.prototype.ua = function() {
        return this.T
    };
    Slot.prototype.getEscapedQemQueryId = function() {
        return this.l && this.l._qqid_ || ""
    };
    var slot$l$isAFC = function(slot) {
            return slot.l
              ? slot.l._is_afc_
                ? slot.l._is_afc_
                : false
              : null
        },
        Eo = function(slot) {
            return slot.l
              ? O(Sg, zg.ya)
                ? slot.l._is_afc_ && slot.l._snippet_
                : !(O(Kg, rg.G) || O(Sg, zg.Va) || O(Sg, zg.Sa)) || false !== slot.l._afc_expandable_
              : true
        },
        nj = function(slot, type, c) {
            forEach(slot.serviceList, function(service) {
              if (service.getName() == c.serviceName) {
                fireServiceEvent(service, type, c)
              }
            })
        };
    // Sets the slot-level preferences for SafeFrame configuration.
    Slot.prototype.setSafeFrameConfig = function(config) {
        try {
            if (config && isNotNull(config)) {
                var sfconfig = validSafeFrameConfig(config);
                if (sfconfig) {
                  this.safeFrameConfig = sfconfig
                }
            } else {
              this.eventLog.error(F("Slot.setSafeFrameConfig", [config]), null, this);
            }
            return this
        } catch (c) {
            R(56, c)
        }
    };
    var getIframeUUID = function(slot) {
        return "google_ads_iframe_" + getUUID(slot)
    };
    Slot.prototype.getCsiId = function() {
        return this.csiId
    };
    // rj -> queryMap
    var queryMap = {
            google_ad_channel: "channel",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_ad_section: "region",
            google_ad_type: "ad_type",
            google_adtest: "adtest",
            google_available_width: "avail_w",
            google_allow_expandable_ads: "ea",
            google_alternate_ad_url: "alternate_ad_url",
            google_alternate_color: "alt_color",
            google_city: "gcs",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_line: "color_line",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_contents: "contents",
            google_country: "gl",
            google_cpm: "cpm",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_id: "cust_id",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_ed: "ed",
            google_encoding: "oe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_is_split_slot: "spl",
            google_kw: "kw",
            google_kw_type: "kw_type",
            google_language: "hl",
            google_page_url: "url",
            google_pgb_reactive: "pra",
            google_region: "gr",
            google_reuse_colors: "reuse_colors",
            google_responsive_formats: "resp_fmts",
            google_safe: "adsafe",
            google_safe_for_responsive_override: "sfro",
            google_tag_info: "gut",
            google_ui_features: "ui",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl"
        },
        sj = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_format: "format",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_ad_width: "w",
            google_analytics_url_parameters: "aup",
            google_auto_format: "afmt",
            google_captcha_token: "captok",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            google_delay_requests_count: "drc",
            google_delay_requests_delay: "drd",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_nofo: "nofo",
            google_enable_content_recommendations: "ecr",
            google_infinite_scroll_slot_type: "ifsl",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            google_only_ads_with_video: "only_ads_with_video",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_source_type: "src_type",
            google_sui: "sui",
            google_skip: "skip",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_origin: "to",
            google_tdsma: "tdsma",
            google_tfs: "tfs",
            google_tl: "tl"
        },
        tj = {
            google_core_dbp: "dbp",
            google_lact: "lact",
            google_only_pyv_ads: "pyv",
            google_only_userchoice_ads: "uc",
            google_scs: "scs",
            google_targeting: "targeting",
            google_with_pyv_ads: "withpyv",
            google_previous_watch: "p_w",
            google_previous_searches: "p_s",
            google_video_url_to_fetch: "durl",
            google_yt_pt: "yt_pt",
            google_yt_up: "yt_up"
        };
    var _Query = function(queryMap) {
            this.query = {};
            this.queryMap = queryMap //用来过滤设置进来的值
        },
        // 只有在attr的querymap里面的key才能被设置
        setAttribute = function(attr, key, value, dontOverwrite) {
          if (key) {
            if (!value) {
              value = "";
            }
            if ("google_gl" == key) {
              /** @type {string} */
              key = "google_country";
            } else {
              if ("google_region" == key) {
                /** @type {string} */
                key = "google_section";
              }
            }
            if (key in attr.queryMap) {
              if ("undefined" == typeof dontOverwrite || (dontOverwrite || !attr.query[key])) {
                /** @type {(Function|string)} */
                attr.query[key] = value;
              }
            }
          }
        },
        wj = function(a, b) {
            object$each(b.j, function(a, b) {
                this.j[b] || (this.j[b] = a)
            }, a)
        },
        xj = function(a) {
            var b = new _Query(a.l);
            b.j = copy(a.j);
            delete b.j.google_page_url;
            return b
        },
        Of = function(a) {
            return a.j.google_page_url
        };
    _Query.prototype.ia = function() {
        var a = [];
        object$each(this.j, function(b, c) {
            (c = queryMap[c] || sj[c] || tj[c] || null) && b && a.push(c + "=" + encodeURIComponent(b))
        });
        return a.join("&")
    };
    var zj = function(a, b, c, d) {
            var e = yj(a, xj(b), c, d);
            a = yj(a, b, c, d);
            b = [];
            e[0] && 0 < e[0].length && b.push(e[0].join("&"));
            a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
            return b.join("&")
        },
        yj = function(a, b, c, d) {
            var e = [],
                f = [],
                g = b.j;
            object$each(d, function(b, d) {
                if (b) {
                    var k = "";
                    null != g[d] && (k = encodeURIComponent(g[d]));
                    for (var l = [], q = -1, w = -1, x = 0; x < a.length; ++x) {
                        var U = getUUID(a[x]);
                        ++q;
                        null == c[U] ? l.push("") : (U = c[U].j, null != U[d] ? (l.push(encodeURIComponent(encodeURIComponent(U[d]))), w = q) : l.push(""))
                    }
                    if (0 <= w) {
                        d = [];
                        d.push(encodeURIComponent(k));
                        for (x = 0; x <= w; ++x) d.push(l[x]);
                        f.push(b + "," + d.join(","))
                    } else k && e.push(b + "=" + k)
                }
            });
            b = [];
            b.push(e);
            b.push(f);
            return b
        },
        Aj = function(a, b) {
            a: {
                var c = a.navigator,
                    d = c.userAgent,
                    e = c.platform,
                    f = /WebKit\/(\d+)/,
                    g = /rv\:(\d+\.\d+)/,
                    k = /rv\:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(d) && (f = (f.exec(d) || [0, 0])[1], g = (g.exec(d) || [0, 0])[1], /Win/.test(e) && /Trident/.test(d) && 11 <= b.documentMode || !f && "Gecko" === c.product && 27 <= g && !k.test(d) || 536 <= f)) {
                    b = !0;
                    break a
                }
                b = !1
            }
            a = Mf(a, a.document, 500,
                300);
            c = {};
            if (!b || a) c.ea = "0";
            return c
        };
    // Bj -> AdData
    var AdData = function(a) {
            this.mapForAdUnitPathToSlots = {}; //adunitpath_uid: adData
            this.l = {}; //attribute {key: value}
            this.B = [];
            this.N = a;
            this.u = new _Query(a);
            this.v = {};
            this.mapForAdUnitPath_CountToDiv = {};
            this.mapForAdUnitPath_CountToTmpDiv = {};
            this.I = {};
            this.M = this.A = "";
            this.alignCenter = !1;
            this.J = -1;
            this.L = 0;
            this.D = this.w = !1;
            this.H = {}
        },
        getSlotFromAdDataAndSet = function(adData, slot) {
          var id = getUUID(slot);
          return adData.j[id]
            ? adData.j[id]
            : adData.j[id] = slot
        },
        getNoFetchStartSlotFrom = function(adData) {
            return filter(getSlotsFrom(adData), function(slot) {
                return !slot.fetchStart
            })
        },
        Fj = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                getUUID(d) in a.j && oj(d)
            }
        },
        // 从adData中获取广告数据加载中的slot
        getFetchingSlots = function(adData) {
            slots = filter(getSlotsFrom(adData), function(slot) {
                // 开始获取但还没结束
                return !!slot.fetchStart && !slot.fetchEnd
            });
            return Array$map(slots, function(slot) {
                return [slot.getAdUnitPath(), slot.getSlotId().getInstance()]
            })
        },
        noSlotData = function(adData, slot) {
            return !(getUUID(slot) in adData.I)
        },
        countObjectLength = function(a) {
            var b = 0;
            object$each(a.j, function() {
                b++
            });
            return b
        };
    AdData.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        object$each(this.j, function(a) {
            b.push(a.toString())
        });
        object$each(this.l, function(a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    var getSlotsFrom = function(adData) {
            var slots = [];
            object$each(adData.j/*{adunitpath: slot}*/, function(slot) {
                slots.push(slot)
            });
            return slots
        },
        getChannel0sFromAdData = function(adData, slots) {
            slots = slots || getSlotsFrom(adData);
            channel0s = Array$map(slots, function(slot) {
                return slot.channel0
            });
            unique(channel0s);
            return channel0s
        },
        Ij = function(a) {
            var b = [];
            object$each(a.l, function(a, d) {
                b.push(encodeURIComponent(d) + "=" + encodeURIComponent(a))
            });
            0 < a.B.length && ("excl_cat" in a.l || b.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.B.join(","))));
            return b.join("&")
        },
        Kj = function(a, b) {
            a = a.m[getUUID(b)];
            var c;
            if (a)
                if (a) try {
                    var d = window.top,
                        e = new le(0, 0),
                        f = $n(getOwnDocument(a));
                    if (dc(f, "parent")) {
                        do {
                            var g;
                            if (f ==
                                d) g = ff(a);
                            else {
                                var k = df(a);
                                g = new le(k.left, k.top)
                            }
                            b = g;
                            e.x += b.x;
                            e.y += b.y
                        } while (f && f != d && f != f.parent && (a = f.frameElement) && (f = f.parent))
                    }
                    c = e
                } catch (l) {
                    c = new le(-12245933, -12245933)
                } else c = null;
                else c = null;
            return c
        },
        Lj = function(a) {
            for (var b = [], c = 0; c < a.length; ++c) {
              b.push(getSlotSizesString(a[c]));
            }
            return b.join()
        },
        Mj = function(a) {
            for (var b = [], c = !1, d = 0; d < a.length; ++d) {
                var e = a[d].getFirstLook();
                0 != e && (c = !0);
                b.push(e)
            }
            return c ? b.join() : void 0
        };
    var Nj = /Trident|MSIE/,
        Oj = /rv:11|Trident\/[78]/,
        Qj = function() {
            var a = Pj;
            return global.google_osd_loaded ? !1 : (appendScript(global.document, a), global.google_osd_loaded = !0)
        },
        Sj = function(a, b) {
            Rj() ? on(a, "readystatechange", function(c) {
                a && "complete" == a.readyState && b(c)
            }) : on(a, "load", b)
        },
        Tj = function() {
            var a = (Df() || p).google_osd_amcb;
            return isFunction(a) ? a : null
        },
        Rj = function() {
            var a = global.navigator;
            return (a = a && a.userAgent) ? Nj.test(a) && !Oj.test(a) : !1
        };
    var Wj = function() {
            var a = Uj,
                b = Vj;
            if (!(window && Math.random && navigator)) return -1;
            if (window.__google_ad_urls) {
                var c = window.__google_ad_urls;
                try {
                    if (c && c.getOseId()) return c.getOseId()
                } catch (e) {}
            }
            if (!window.__google_ad_urls_id) {
                var c = window.google_enable_ose,
                    d;
                !0 === c ? d = 2 : !1 !== c && (d = seed([0], a), null == d && ((d = seed([2], b)) || (d = 3)));
                if (!d) return 0;
                window.__google_ad_urls_id = d
            }
            return window.__google_ad_urls_id
        },
        Xj = function() {
            var a = 0;
            !notNull(global.postMessage) && (a |= 1);
            return a
        };
    var Yj = function(a, b) {
            this.o = a;
            this.l = b && b.l ? b.l : [];
            this.m = b && b.m ? b.m : 0;
            this.u = b ? b.u : "";
            this.j = b && b.j ? b.j : [];
            if (b) {
                for (a = 0; a < this.l.length; ++a) this.l[a].push("true");
                for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
            }
        },
        Pj = "",
        Vj = 0,
        Uj = 0,
        Zj = function(a, b) {
            var c = a.l,
                d = a.o.google_ad_request_done;
            d && (d = d.orig_callback || d, a.o.google_ad_request_done = function(a) {
                if (a && 0 < a.length) {
                    var e = 1 < a.length ? a[1].url : null,
                        g = a[0].log_info || null,
                        k = a[0].activeview_url || null,
                        l = a[0].activeview_js_enabled || null,
                        n = a[0].activeview_js_immediate_enabled ||
                        null,
                        m = a[0].activeview_js_tos_enabled || null,
                        q = a[0].activeview_cid || null,
                        w = a[0].activeview_metadata || null,
                        x = a[0].image_url || "",
                        U = a[0].type || null;
                    c.push([b, Cc(a[0].url), e, g, null, k, l, n, m, q, w, Cc(x), U])
                }
                d(a)
            }, a.o.google_ad_request_done.orig_callback = d)
        },
        bk = function(a, b, c, d) {
            var e = a.l,
                f = d || 0,
                g = b.document;
            if (0 < e.length)
                for (var k = g.getElementsByTagName("a"), l = 0; l < k.length; l++)
                    for (var n = 0; n < e.length; n++)
                        if (0 <= k[l].href.indexOf(e[n][1])) {
                            var m = k[l].parentNode;
                            if (e[n][2])
                                for (var q = m, w = 0; 4 > w; w++) {
                                    if (0 <= q.innerHTML.indexOf(e[n][2])) {
                                        m =
                                            q;
                                        break
                                    }
                                    q = q.parentNode
                                }
                            ak(e[n], m, f, c);
                            e.splice(n, 1);
                            break
                        }
            if (0 < e.length)
                for (m = g.getElementsByTagName("embed"), l = 0; l < m.length; l++)
                    for (n = 0; n < e.length; n++)
                        if (q = e[n][12], k = e[n][11], "flash" == q && k && (q = m[l], q.src == k)) {
                            var x = q;
                            0 == x.getBoundingClientRect().height && x.parentElement && "OBJECT" == x.parentElement.tagName && (x = x.parentElement);
                            ak(e[n], x, f, c);
                            e.splice(n, 1);
                            break
                        }
            if (0 < e.length)
                for (g = g.getElementsByTagName("param"), l = 0; l < g.length; l++)
                    for (n = 0; n < e.length; n++)
                        if (q = e[n][12], k = e[n][11], "flash" == q && k && (m = g[l],
                            "movie" == m.name && m.value == k)) {
                            m.parentNode && "OBJECT" == m.parentNode.tagName && (x = m.parentNode);
                            if (!x) break;
                            ak(e[n], x, f, c);
                            e.splice(n, 1);
                            break
                        }
            if (l = 0 < e.length) Jf || (Jf = Kf(!0).Ga), l = b != Jf;
            if (l) try {
                bk(a, b.parent, c, d)
            } catch (U) {}
            for (l = 0; l < e.length; ++l) a = e[l], "true" == a[6] && ck("osd2", a[3]), "true" == a[7] && ck("osdim", a[3])
        },
        ak = function(a, b, c, d) {
            d(b, a[0], c, !0, a[3], void 0, a[5], "true" == a[6], "true" == a[7], "true" == a[13], "true" == a[8], a[9], a[10])
        },
        ck = function(a, b) {
            if (a && b) {
                var c = ["//"];
                c.push("pagead2.googlesyndication.com");
                c.push("/activeview");
                c.push("?id=" + a);
                c.push("&r=j");
                c.push("&avi=" + b);
                logWithImg(p, c.join(""))
            }
        };
    h = Yj.prototype;
    h.getNewBlocks = function(a, b) {
        b && bk(this, this.o, a, 1);
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (a(e.j, e.u, e.w, e.l, "", void 0, "", !1, !1, e.o, !1, "", "", e.v), e.m = !0)
        }
        b && ((Df() || p).google_osd_amcb = a)
    };
    h.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = Wj();
        if (!b) return 0;
        this.m = b;
        this.u = String(a || 0);
        return this.getOseId()
    };
    h.getOseId = function() {
        return window && Math.random && navigator ? this.m : -1
    };
    h.getCorrelator = function() {
        return this.u
    };
    h.numBlocks = function() {
        return this.l.length + this.j.length
    };
    h.registerAdBlock = function(a, b, c, d, e, f, g) {
        if ((e = Tj()) && d) e(d, a, b, !0, "", void 0, "", !1, !1, !1, !1, "", "", g);
        else {
            if ("js" == c) Zj(this, a);
            else {
                var k = new dk(a, b, d, g);
                this.j.push(k);
                d && (a = go(function() {
                    k.l = !0
                }), Sj(d, a))
            }
            Qj() && Ef()
        }
    };
    h.unloadAdBlock = function(a, b) {
        notNull(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, b)
    };
    var ek = function() {
            var a = Df(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new Yj(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new Yj(a, b)
            } catch (c) {
                return a.__google_ad_urls = new Yj(a)
            }
        },
        dk = function(a, b, c, d) {
            this.u = a;
            this.w = b;
            this.j = c;
            this.o = this.m = this.l = !1;
            this.v = d || aa
        };
    $goog$exportPath_$("Goog_AdSense_getAdAdapterInstance", ek);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter", Yj);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.numBlocks", Yj.prototype.numBlocks);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", Yj.prototype.getNewBlocks);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getOseId", Yj.prototype.getOseId);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getCorrelator", Yj.prototype.getCorrelator);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.setupOse", Yj.prototype.setupOse);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", Yj.prototype.registerAdBlock);
    $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", Yj.prototype.unloadAdBlock);
    var qp = SingletonConfig.getInstance().get(6),
        rp = SingletonConfig.getInstance().get(1),
        sp = SingletonConfig.getInstance().get(7),
        tp = SingletonConfig.getInstance().get(20),
        Pj = bd(new Xc, qp ? "https:" : "http:", rp, "/pagead/osd.js"),
        Vj = sp,
        Uj = tp;
    var prefetch = function(doc, url) {
        var link = doc.createElement("link");
        link.rel = "prefetch";
        url instanceof ke
          ? url instanceof ke && b.constructor === ke && b.Xa === je
            ? b = ""
            : {
              type(b),
              b = "type_error:TrustedResourceUrl"
            }
          : b instanceof ge
            ? b instanceof ge && b.constructor === ge && b.Wa === fe
              ? b = b.Aa
              : {
                type(b),
                b = "type_error:SafeUrl"
              }
            : (b instanceof ge || (b = b.Ma ? b.za() : String(b), he.test(b) || (
              b = "about:invalid#zClosurez"),
              b = ie(b)
            ),
            b = b.za()
        );
        link.href = url;
        (head = doc.getElementsByTagName("head")[0]) && head.appendChild(link)
    };
    var kk = function() {
          this.l = (this.j = !!getObj$j$ownProperty(Og.j, Og.l)) ? !O(Og, vg.Ra) : Math.random() < SingletonConfig.getInstance().get(34)
        },
        lk = function(a, b) {
            if (a.l && (!a.j || O(Og, b)))
                a.l = false
                doc = document //b
                sfUrl = getSafeFrameContainerUrl($n(doc)) //a
                if (!(we || xe || ve) && (tf || re || qe && Ee(11))) {
                  prefetch(b, a);
                } else if (!O(Kg, rg.G)) {
                  var win = getGoogleTagObj().fifWin,
                      doc = win && win.document || b; //c
                  iframe = doc.createElement("iframe");
                  iframe.src = sfUrl;
                  iframe.style.visibility = "hidden";
                  iframe.style.display = "none";
                  scripts = doc.getElementsByTagName("script");
                  if (scripts.length > 0) {
                    script = scripts[scripts.length - 1]
                    script.parentNode && script.parentNode.insertBefore(iframe, script.nextSibling)
                  }
                }
              }
        },
        mk = function() {
            kk.getInstance();
            var a = SingletonConfig.getInstance().get(57);
            if (Math.random() < a) {
                var a = document,
                    // http://pubads.g.doubleclick.net/static/glade.js x
                    // https://securepubads.g.doubleclick.net/static/glade.js
                    b = Sf(!0) + "/static/glade.js";
                prefetch(a, b)
            }
        };
    singleton(kk);
    var ReqConfig = function() {
        this.j = [];
        this.I = !1;
        this.w = "";
        this.H = "json_html";
        this.u = "fif";
        this.v = 1;
        this.D = !1;
        this.l = "";
        this.m = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = NaN;
        this.B = this.C = "";
        this.A = !1;
        this.videoStreamCorrelator = NaN;
        this.o = 0
    };
    var qk = function(number) {
            this.doc = document;
            this.num = number || 0;
            this.gads = qk$getCookie(this, "__gads=");
            this.v = this.o = false;
            pk(this)
        },
        rk = function(a, b) {
            b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.l = a.m._value_, null != a.m && a.l && (b = new Date, b.setTime(1E3 * a.m._expires_), a.u.cookie = "__gads=" + a.l + "; expires=" + b.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_)))
        },
        pk = function(qk) {
            if (!qk.gads && !qk.v && 1 != a.num) {
                qk.doc.cookie = "GoogleAdServingTest=Good";
                var b = "Good" == qk$getCookie(qk, "GoogleAdServingTest=");
                if (b) {
                    var now = new Date;
                    now.setTime((new Date).valueOf() + -1);
                    qk.doc.cookie = "GoogleAdServingTest=; expires=" + now.toGMTString()
                }
                qk.o = b;
                qk.v = true
            }
        },
        qk$getCookie = function(qk, key) {
            cookie = qk.doc.cookie;
            var index = cookie.indexOf(key),
                value = "";
              if (- 1 != index) {
                start = index + key.length
                end = a.indexOf(";", start)
                if (-1 == end) {
                  end = cookie.length,
                  d = cookie.substring(start, end)
                }
              }
            return value
        },
        sk = null,
        tk = function(number) {
            null == sk && (sk = new qk(number));
            return sk
        };
    var DocumentURLQuerys = function() {
            this.data = {};
            var loc = doc.URL;
            null == getQueryData(this, "target_platform") && (this.data.target_platform = "DESKTOP");
            var b = this.data;
            loc = loc.split("?");
            var query = loc[log.length - 1].split("&"),
            for (i = 0; i < query.length; i++) {
                var kv = query[i].split("=");
                if (kv[0]) {
                    var key = key[0].toLowerCase();
                    var value
                    if ("google_domain_reset_url" != key) {
                      try {
                        if (kv.length > 1) {
                            value = kv[1];
                            value = window.decodeURIComponent ? decodeURIComponent(value.replace(Rf, " ")) : unescape(value)
                        } else {
                          value = "";
                        }
                        b[key] = value
                      } catch (e) {}
                    }
                }
            }
        },
        //
        getQueryData = function(urlQuerys, key) {
            return null == key ? null : urlQuerys.data[key]
        };
    var Requester = function(a, b, c, d, e) {
            this.j = b;
            this.u = c;
            this.m = d;
            this.mode = a;
            this.l = e;
            this.o = "";
            this.D = queryMap;
            this.v = [];
            this.C = []
        },
        wk = {
            x: -9,
            y: -9
        };

    Requester.prototype.ia = function(slots, b) {
        b = b || window;
        if (!isArray(slots)) return "";
        if ("sra" == this.mode) 0 == slots.length && (a = getSlotsFrom(this.j));
        else {
            if (0 == slots.length) return "";
            1 < slots.length && (slots = [slots[0]])
        }
        this.A();
        this.setProp2GoogleTagObj(slots, b);
        return this.o
    };
    Requester.prototype.B = function(a, b) {
        b = b || window;
        try {
            var c, d, e;
            "prerender" == $f(document) ? (d = "108809008", e = SingletonConfig.getInstance().get(17)) : (d = "108809007", e = SingletonConfig.getInstance().get(16));
            c = seed([d], e);
            W(this, "eid", (c ? wd(this.l.m, c) : this.l.m).join())
        } catch (w) {}
        this.m && 0 !== this.m.j && W(this, "co", this.m.j);
        c = this.j.J; - 1 !== c && W(this, "tfcd", c);
        1 === this.j.L && W(this, "kfa", 1);
        W(this, "sc", SingletonConfig.getInstance().get(6) ? 1 : 0);
        window.postMessage && W(this, "sfv", "1-0-5");
        if ("sra" == this.mode) {
            xk(this, a);
            yk(this);
            c = [];
            for (d = 0; d < a.length; ++d) c.push(pj(a[d]));
            d = c.join("|");
            d.length == c.length - 1 && (d = null);
            W(this, "prev_scp", d)
        } else c = a[0].gtfcd(), -1 !== c && W(this, "tfcd", c), c = a[0], W(this, "iu", c.getAdUnitPath()), W(this, "sz", getSlotSizesString(c)), has(getSlotSizes(c), "fluid") && W(this, "fluid", "height"), (d = c.getFirstLook()) && W(this, "fl", d), d = zk(c.L, this.j.D), "1" == d && W(this, "fsf", d), d = c.T, 0 < d && W(this, "rc", d), c.getClickUrl() && W(this, "click", c.getClickUrl()), c.getOutOfPage() && W(this, "ists", "1"), noSlotData(this.j, c) || W(this, "logonly", "1"), yk(this), c = a[0], d = pj(c), W(this, "scp", d), c = c.getAudExtId(), 0 < c &&
            W(this, "audextid", c);
        c = 1 != this.l.v;
        d = a[0].hb;
        e = this.j.v;
        if (null != Of(this.j.u)) e = !0;
        else {
            for (var f = !1, g = 0; g < a.length && !f; g++) f = null != Pf(a[g], e);
            e = f
        }
        var f = this.l.D,
            g = 3 == this.l.v,
            k = SingletonConfig.getInstance().get(46),
            l = 0;
        c && (l |= 1);
        d && (l |= 2);
        e && (l |= 4);
        f && (l |= 8);
        g && (l |= 16);
        k && (l |= 32);
        c = l;
        0 < c && W(this, "eri", c);
        "prerender" == $f() && W(this, "d_imp", 1);
        c = b.document;
        W(this, "cust_params", Ij(this.j));
        this.m && 1 != this.m.j && (W(this, "cookie", this.m.l), this.m.o && W(this, "cookie_enabled", "1"));
        (d = this.j.A) && W(this, "uule", d);
        this.m &&
            1 != this.m.j && (c = (Of(this.j.u) || (notInFrame(b) ? c.URL : c.referrer)) != c.URL ? c.domain : "") && W(this, "cdm", c);
        null != getQueryData(this.u, "google_preview") && W(this, "gct", getQueryData(this.u, "google_preview"));
        this.j.w && (W(this, "is_amp", "1"), c = wf(), W(this, "amp_v", c && c.mode ? +c.mode.version || null : null));
        this.w(new Date, a, b);
        c = {};
        c.u_tz = -(new Date).getTimezoneOffset();
        var n;
        try {
            n = K.history.length
        } catch (w) {
            n = 0
        }
        c.u_his = n;
        c.u_java = !!K.navigator && "unknown" !== typeof K.navigator.javaEnabled && !!K.navigator.javaEnabled && K.navigator.javaEnabled();
        K.screen &&
            (c.u_h = K.screen.height, c.u_w = K.screen.width, c.u_ah = K.screen.availHeight, c.u_aw = K.screen.availWidth, c.u_cd = K.screen.colorDepth);
        K.navigator && K.navigator.plugins && (c.u_nplug = K.navigator.plugins.length);
        K.navigator && K.navigator.mimeTypes && (c.u_nmime = K.navigator.mimeTypes.length);
        Ak(this, c);
        n = global.devicePixelRatio;
        (n = isNumber(n) ? +n.toFixed(3) : null) && X(this, "u_sd", n);
        var m;
        try {
            m = If()
        } catch (w) {
            m = "0"
        }
        X(this, "flash", m);
        m = b || window;
        c = m.document;
        a = "sra" == this.mode ? Of(this.j.u) : Pf(a[0], this.j.v) || Of(this.j.u);
        n = Yf(c.URL,
            getQueryData(this.u, "google_preview"));
        e = Yf(c.referrer, getQueryData(this.u, "google_preview"));
        f = new Tc(m);
        c = f.j[Math.max(f.j.length - 1, 0)].url;
        d = f.j[0].depth;
        if (null != d && 0 < d && (W(this, "nhd", d), m.location.ancestorOrigins)) {
            g = [];
            k = Math.min(f.j.length, 27);
            for (l = 1; l < k; l++) f.j[l] && f.j[l].url && (g[l - 1] = f.j[l].url);
            g = Uc(f, g.reverse());
            W(this, "iag", g);
            f = f.j;
            g = [];
            for (k = f.length - 1; 0 < k; k--)(l = f[k]) && null != l.url && g.push(Lc(l.url.match(Kc)[3] || null));
            f = Pc(g);
            0 < f && W(this, "mdo", f)
        }
        var q;
        null != a ? (q = n, notInFrame(m) || (e = "", c && (c = decodeURI(c.match(Kc)[3] ||
            null)))) : a = n;
        W(this, "url", a);
        null != q && q != a && W(this, "loc", q);
        this.j.w && (e = (q = wf()) ? q.referrer : null);
        W(this, "ref", e);
        null != d && 0 < d && W(this, "top", c);
        a = b || window;
        q = a.document;
        (m = q.scripts) && W(this, "dssz", m.length);
        a = new Tc(a);
        if (m = a.l.document && a.l.document.scripts ? a.l.document.scripts : []) {
            n = [];
            for (c = m.length - 1; 0 <= c && 26 > n.length;) m[c].src && n.unshift(m[c].src), c--;
            m = Uc(a, n)
        } else m = 0;
        W(this, "icsg", m);
        if (a = a.l.document && a.l.document.scripts ? a.l.document.scripts : []) {
            m = [];
            for (n = a.length - 1; 0 <= n; n--)(c = a[n]) &&
                null != c.src && m.push(Lc(c.src.match(Kc)[3] || null));
            a = Pc(m)
        } else a = 0;
        0 < a && W(this, "mso", a);
        a = Error();
        a.stack && (m = a.stack, n = m.split(/\r\n|\r|\n/).length, "Error" == m.slice(0, 5) && n--, m = n - 10, 0 > m && (m = 0, n = new ReportSender("gpt_negative_stack_trace", getReportSenderURL(), SingletonConfig.getInstance().get(23)), addExParamsToReportSender(n, this.j), appendReportSenderParams(n, "stackTrace", a.stack), sendReport(n)), W(this, "std", m));
        q.currentScript && q.currentScript.text && W(this, "csl", q.currentScript.text.length);
        if (Math.random() < SingletonConfig.getInstance().get(73) && notInFrame(b)) {
            q = 0;
            a = getGoogleTagObj();
            q |= !!a._syncTagged_ << 0;
            a = (b || window).navigator.connection;
            q |= (!!a && "cellular" == a.type && .5 > a.downlinkMax) << 1;
            a: {
                b = b.document.getElementsByTagName("script");
                for (a = 1; a < b.length; a++)
                    if (-1 < b[a].src.indexOf("/tag/js/gpt.js") && -1 < b[a - 1].innerHTML.indexOf("/tag/js/gpt.js")) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            W(this, "cdw", q | b << 2)
        }
        W(this, "vrg", "107");
        W(this, "vrp", "107")
    };
    var Bk = function(a, b) {
            for (var c = b.length, d = [], e = [], f = 0; f < c; f++) {
                var g = Kj(a.j, b[f]) || wk;
                d.push(Math.round(g.x));
                e.push(Math.round(g.y))
            }
            W(a, "adxs", d.join(","));
            W(a, "adys", e.join(","))
        },
        Ck = function(a, b) {
            for (var c = b.length, d = [], e = 0; e < c; e++) {
                var f = Xf(b[e]);
                b[e].X = f;
                d.push(f)
            }
            W(a, "adks", d.join(","))
        },
        Ak = function(a, b) {
            object$each(b, function(a, b) {
                X(this, b, a)
            }, a)
        },
        yk = function(a) {
            a.m && 1 == a.m.j || W(a, "ppid", a.j.M)
        };
    Requester.prototype.w = function(a, b, c) {
        var d = c.document;
        W(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
        X(this, "dt", a.getTime());
        if (d.body) {
            a = d.body.scrollHeight;
            var e = d.body.clientHeight;
            e && a && W(this, "cc", Math.round(100 * e / a).toString())
        }
        a = getQueryData(this.u, "deb");
        null != a && W(this, "deb", a);
        a = getQueryData(this.u, "haonly");
        null != a && W(this, "haonly", a);
        a = Aj(c, d);
        Cf(a, bind(function(a, b) {
            W(this, b, a)
        }, this));
        d = Nf(c, d).mb || null;
        null != d && W(this, "frm", d);
        if (d = (this.j.w ? yf() : null) || Af(!0, c)) W(this, "biw", d.width), W(this, "bih", d.height);
        !notInFrame(c) && (c = Af(!1, c)) && (W(this, "isw", c.width), W(this, "ish", c.height));
        this.l.o && W(this, "oid", this.l.o);
        if ("sra" == this.mode) O(Ig, pg.G) && Bk(this, b), Ck(this, b);
        else {
            if (c = (this.j.w ? zf() : null) || Kj(this.j, b[0])) W(this, "adx", Math.round(c.x)), W(this, "ady", Math.round(c.y));
            c = b[0].X;
            c = O(no, ho.G) ? c || Xf(b[0]) : c || Xf(b[0], this.j.C[getUUID(b[0])]);
            W(this, "adk", c)
        }
        c = Xj();
        0 < c && W(this, "osd", c);
        c = this.j.u;
        d = "";
        "sra" == this.mode ? d = zj(b, c, this.j.v, this.D) : (b = this.j.v[getUUID(b[0])], null == b ? b = c : wj(b, c), b = xj(b), d = b.ia());
        d && (this.o +=
            "&" + d)
    };
    Requester.prototype.A = function() {
        var a = this.j.A,
            b = !1,
            c = SingletonConfig.getInstance().get(46);
        a || (b = c ? !O(Dg, kg.G) : O(Eg, lg.K));
        this.o = Sf(!b) + "/gampad/ads?";
        X(this, "gdfp_req", 1);
        W(this, "correlator", this.l.w);
        X(this, "output", this.l.H);
        X(this, "callback", this.l.l);
        X(this, "impl", this.l.u);
        this.l.persistentRoadblocksOnly && W(this, "per_only", 1);
        "sra" == this.mode && W(this, "json_a", 1)
    };
    var xk = function(a, b) {
            for (var c = b.length, d = 0; d < c; d++) Dk(a, b[d].getAdUnitPath());
            W(a, "iu_parts", a.v.join());
            W(a, "enc_prev_ius", a.C.join());
            W(a, "prev_iu_szs", Lj(b));
            hasMatch(b, function(a) {
                return has(getSlotSizes(a), "fluid")
            }) && (c = Array$map(b, function(a) {
                return has(getSlotSizes(a), "fluid") ? "height" : "0"
            }).join(), W(a, "fluid", c));
            (c = Mj(b)) && W(a, "fla", c);
            c = Array$map(b, function(a) {
                return zk(a.L, this.j.D)
            }, a).join();
            0 <= c.indexOf("1") && W(a, "fsfs", c);
            c = Array$map(b, Function.prototype.call, Slot.prototype.ua);
            0 < hasMatch(c, function(a) {
                return 0 < a
            }) && W(a, "rcs", c.join());
            (c = Ek(b)) && W(a, "ists", c);
            var e = {};
            forEach(b, function(a) {
                (a = a.getClickUrl()) && (e[a] = (e[a] || 0) + 1)
            });
            if (!Od(e)) {
                a = new ReportSender("gpt_sra_setclickurl");
                var f = [];
                object$each(e, function(a, b) {
                    f.push(b.length + ":" + a)
                });
                appendReportSenderParams(a, "lenfreqs", f.join());
                addExParamsToReportSender(a);
                sendReport(a, SingletonConfig.getInstance().get(58))
            }
        },
        zk = function(a, b) {
            return (null === a ? b : a) ? "1" : "0"
        },
        W = function(a, b, c) {
            null != c && X(a, b, encodeURIComponent("" + c))
        },
        X = function(a, b, c) {
            null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
        },
        Dk = function(a, b) {
            var c = "";
            if ("" != b) {
                b = b.split("/");
                for (c = 0; c < b.length; c++)
                    if ("" != b[c]) {
                        for (var d = !1, e = 0; e < a.v.length; e++)
                            if (b[c] == a.v[e]) {
                                d = !0;
                                break
                            }
                        d || a.v.push(b[c])
                    }
                c = "";
                for (d = 0; d < b.length; d++) {
                    if (0 < d) c += "/";
                    else if ("" == b[0]) continue;
                    for (e = 0; e < a.v.length; e++)
                        if (b[d] == a.v[e]) {
                            c += e;
                            break
                        }
                }
            }
            a.C.push(c)
        },
        Ek = function(a) {
            if (!a.length) return 0;
            for (var b = "", c = 0; c < a.length; ++c) b += a[c].getOutOfPage() ? "1" : "0";
            return parseInt(b, 2)
        };
    var Fk = function(a) {
            this.S = a
        },
        Gk = {
            google_persistent_state: !0,
            google_persistent_state_async: !0
        },
        Hk = {},
        Ik = {
            14: "gaGlobal",
            8: "google_prev_ad_formats_by_region",
            9: "google_prev_ad_slotnames_by_region"
        };
    var Jk = navigator,
        Kk = function() {
            try {
                return Jk.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        Lk = function(a) {
            var b = 1,
                c, d;
            if (void 0 != a && "" != a)
                for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
            return b
        },
        Mk = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Lk(a.toLowerCase())
        },
        Nk = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Ok = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
    var PcRequester = function(a, b, c, d, e) {
        Requester.call(this, a, b, c, d, e)
    };
    extend(PcRequester, Requester);
    PcRequester.prototype.w = function(a, b, c) {
        0 < navigator.userAgent.indexOf("MSIE ") && setAttribute(this.j.u, "google_encoding", document.charset, !1);
        Requester.prototype.w.call(this, a, b, c);
        W(this, "ifi", b[0].ha);
        null !== c && c.top != c ? (a = [], a.push(c.document.URL), c.name && a.push(c.name), c = Af(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = hash((a.join(""))) : c = 0;
        0 != c && W(this, "ifk", c.toString())
    };
    PcRequester.prototype.B = function(a) {
        var b = a[0],
            c = window;
        c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
        b.ha = c.google_unique_id;
        this.l.A ? (X(this, "hxva", 1), W(this, "cmsid", this.l.B), W(this, "vid", this.l.C)) : window.google_test_extended_pageview && X(this, "hxva", 1);
        isNaN(this.l.videoPodNumber) || X(this, "pod", this.l.videoPodNumber);
        isNaN(this.l.videoPodPosition) || X(this, "ppos", this.l.videoPodPosition);
        isNaN(this.l.videoStreamCorrelator) || X(this, "scor", this.l.videoStreamCorrelator);
        Requester.prototype.B.call(this,
            a);
        a = window;
        var d;
        var b = a.document.domain,
            c = a.document.cookie,
            e = a.history.length,
            f = a.screen,
            g = a.document.referrer;
        if (wf()) d = Df().gaGlobal || {};
        else {
            var k = Math.round((new Date).getTime() / 1E3),
                l = window.google_analytics_domain_name,
                b = "undefined" == typeof l ? Mk("auto", b) : Mk(l, b),
                n = -1 < c.indexOf("__utma=" + b + "."),
                m = -1 < c.indexOf("__utmb=" + b),
                q;
            b: {
                if ((l = wf(window)) && isNotNull(l.master)) {
                    var l = l.master,
                        w = "google_persistent_state_async";
                    q = {}
                } else {
                    l = Df();
                    w = Gk.google_persistent_state ? "google_persistent_state" : Gf ? "google_persistent_state_async" :
                        "google_persistent_state";
                    if (Hk[w]) {
                        q = Hk[w];
                        break b
                    }
                    "google_persistent_state_async" == w ? q = {} : q = l
                }
                var x = l[w];
                q = null != x && "object" == typeof x && null != x.S && "object" == typeof x.S ? Hk[w] = x : l[w] = Hk[w] = new Fk(q)
            }
            var l = {},
                w = Ik[14] || "google_ps_14",
                x = q.S,
                U = x[w];
            void 0 === U ? x[w] = l : l = U;
            q = l || (q.S[Ik[14] || "google_ps_14"] = {});
            l = !1;
            if (n) g = c.split("__utma=" + b + ".")[1].split(";")[0].split("."), m ? q.sid = g[3] + "" : q.sid || (q.sid = k + ""), q.vid = g[0] + "." + g[1], q.from_cookie = !0;
            else {
                q.sid || (q.sid = k + "");
                if (!q.vid) {
                    l = !0;
                    m = Math.round(2147483647 *
                        Math.random());
                    n = [Jk.appName, Jk.version, Jk.language ? Jk.language : Jk.browserLanguage, Jk.platform, Jk.userAgent, Kk() ? 1 : 0].join("");
                    f ? n += f.width + "x" + f.height + f.colorDepth : window.java && window.java.awt && (f = window.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), n += f.screen.width + "x" + f.screen.height);
                    n = n + c + (g || "");
                    for (g = n.length; 0 < e;) n += e-- ^ g++;
                    q.vid = (m ^ Lk(n) & 2147483647) + "." + k
                }
                q.from_cookie = !1
            } if (!q.cid) {
                b: {
                    k = 999;
                    if (g = window.google_analytics_domain_name) g = 0 == g.indexOf(".") ? g.substr(1) : g, k = ("" + g).split(".").length;
                    g = 999;
                    c = c.split(";");
                    for (f = 0; f < c.length; f++)
                        if (e = Nk.exec(c[f]) || Ok.exec(c[f])) {
                            if (e[1] == k) {
                                d = e[2];
                                break b
                            }
                            e[1] < g && (g = e[1], d = e[2])
                        }
                }
                l && d && -1 != d.search(/^\d+\.\d+$/) ? q.vid = d : d != q.vid && (q.cid = d)
            }
            q.dh = b;
            q.hid || (q.hid = Math.round(2147483647 * Math.random()));
            d = q
        }
        X(this, "ga_vid", d.vid);
        X(this, "ga_sid", d.sid);
        X(this, "ga_hid", d.hid);
        X(this, "ga_fc", d.from_cookie);
        W(this, "ga_wpids", a.google_analytics_uacct)
    };
    var _BaseRequester = function() {};
    var Http,
    BaseRequester = function() {};
    extend(BaseRequester, _BaseRequester);
    BaseRequester.prototype.j = function() {
        var a;
        a: {
            if (!this.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        new ActiveXObject(d);
                        a = this.l = d;
                        break a
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            a = this.l
        }
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Http = new BaseRequester;
    var Tk = function(a, b, c) {
        this.o = c;
        this.m = a;
        this.u = b;
        this.l = 0;
        this.j = null
    };
    Tk.prototype.get = function() {
        var a;
        0 < this.l ? (this.l--, a = this.j, this.j = a.next, a.next = null) : a = this.m();
        return a
    };
    var Uk = function(a, b) {
        a.u(b);
        a.l < a.o && (a.l++, b.next = a.j, a.j = b)
    };
    var Vk = function(a) {
            global.setTimeout(function() {
                throw a;
            }, 0)
        },
        Yk = function(fn, service) {
            var c = fn;
            service && (c = bind(fn, service));
            !isFunction(global.setImmediate)
            || global.Window
            && global.Window.prototype
            && !findInUA("Edge")
            && global.Window.prototype.setImmediate == global.setImmediate
              ? (Wk || (Wk = Xk()), Wk(c))
              : global.setImmediate(c)
        },
        Wk, Xk = function() {
            var a = global.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !findInUA("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = bind(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !isIE()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (notNull(c.next)) {
                        c = c.next;
                        var a = c.Ja;
                        c.Ja = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        Ja: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function(a) {
                global.setTimeout(a, 0)
            }
        };
    var $k = new Tk(function() {
            return new Zk
        }, function(a) {
            a.reset()
        }, 100),
        bl = function() {
            var a = al,
                b = null;
            a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
            return b
        },
        Zk = function() {
            this.next = this.l = this.j = null
        };
    Zk.prototype.set = function(a, b) {
        this.j = a;
        this.l = b;
        this.next = null
    };
    Zk.prototype.reset = function() {
        this.next = this.l = this.j = null
    };
    var fl = function(a, b) {
            cl || dl();
            el || (cl(), el = !0);
            var c = al,
                d = $k.get();
            d.set(a, b);
            c.l ? c.l.next = d : c.j = d;
            c.l = d
        },
        cl, dl = function() {
            var a = global.Promise;
            if (-1 != String(a).indexOf("[native code]")) {
                var b = a.resolve(void 0);
                cl = function() {
                    b.then(gl)
                }
            } else cl = function() {
                Yk(gl)
            }
        },
        el = !1,
        al = new function() {
            this.l = this.j = null
        },
        gl = function() {
            for (var a; a = bl();) {
                try {
                    a.j.call(a.l)
                } catch (b) {
                    Vk(b)
                }
                Uk($k, a)
            }
            el = !1
        };
    var il = function(a, b) {
            this.j = 0;
            this.w = void 0;
            this.o = this.l = this.m = null;
            this.u = this.v = !1;
            if (a != aa) try {
                var c = this;
                a.call(b, function(a) {
                    hl(c, 2, a)
                }, function(a) {
                    hl(c, 3, a)
                })
            } catch (d) {
                hl(this, 3, d)
            }
        },
        jl = function() {
            this.next = this.m = this.l = this.o = this.j = null;
            this.u = !1
        };
    jl.prototype.reset = function() {
        this.m = this.l = this.o = this.j = null;
        this.u = !1
    };
    var kl = new Tk(function() {
            return new jl
        }, function(a) {
            a.reset()
        }, 100),
        ll = function(a, b, c) {
            var d = kl.get();
            d.o = a;
            d.l = b;
            d.m = c;
            return d
        };
    il.prototype.then = function(a, b, c) {
        return ml(this, isFunction(a) ? a : null, isFunction(b) ? b : null, c)
    };
    il.prototype.then = il.prototype.then;
    il.prototype.$goog_Thenable = !0;
    il.prototype.cancel = function(a) {
        0 == this.j && fl(function() {
            var b = new nl(a);
            ol(this, b)
        }, this)
    };
    var ol = function(a, b) {
            if (0 == a.j)
                if (a.m) {
                    var c = a.m;
                    if (c.l) {
                        for (var d = 0, e = null, f = null, g = c.l; g && (g.u || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.j && 1 == d ? ol(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : pl(c), ql(c, e, 3, b)))
                    }
                    a.m = null
                } else hl(a, 3, b)
        },
        sl = function(a, b) {
            a.l || 2 != a.j && 3 != a.j || rl(a);
            a.o ? a.o.next = b : a.l = b;
            a.o = b
        },
        ml = function(a, b, c, d) {
            var e = ll(null, null, null);
            e.j = new Promise(function(a, g) {
                e.o = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : a;
                e.l = c ? function(b) {
                    try {
                        var e = c.call(d,
                            b);
                        !notNull(e) && b instanceof CancelError ? g(b) : a(e)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.j.m = a;
            sl(a, e);
            return e.j
        };
    Promise.prototype.B = function(a) {
        this.j = 0;
        hl(this, 2, a)
    };
    Promise.prototype.C = function(a) {
        this.j = 0;
        hl(this, 3, a)
    };
    var hl = function(a, b, c) {
            if (0 == a.j) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                var d;
                a: {
                    var e = c,
                        f = a.B,
                        g = a.C;
                    if (e instanceof Promise) sl(e, ll(f || aa, g || null, a)), d = !0;
                    else {
                        var k;
                        if (e) try {
                            k = !!e.$goog_Thenable
                        } catch (n) {
                            k = !1
                        } else k = !1;
                        if (k) e.then(f, g, a), d = !0;
                        else {
                            if (y(e)) try {
                                var l = e.then;
                                if (isFunction(l)) {
                                    tl(e, l, f, g, a);
                                    d = !0;
                                    break a
                                }
                            } catch (n) {
                                g.call(a, n);
                                d = !0;
                                break a
                            }
                            d = !1
                        }
                    }
                }
                d || (a.w = c, a.j = b, a.m = null, rl(a), 3 != b || c instanceof CancelError || ul(a, c))
            }
        },
        tl = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0,
                        c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        },
        rl = function(a) {
            a.v || (a.v = !0, fl(a.A, a))
        },
        pl = function(a) {
            var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.o = null);
            return b
        };
    Promise.prototype.A = function() {
        for (var a; a = pl(this);) ql(this, a, this.j, this.w);
        this.v = !1
    };
    var ql = function(a, b, c, d) {
            if (3 == c && b.l && !b.u)
                for (; a && a.u; a = a.m) a.u = !1;
            if (b.j) b.j.m = null, vl(b, c, d);
            else try {
                b.u ? b.o.call(b.m) : vl(b, c, d)
            } catch (e) {
                wl.call(null, e)
            }
            Uk(kl, b)
        },
        vl = function(a, b, c) {
            2 == b ? a.o.call(a.m, c) : a.l && a.l.call(a.m, c)
        },
        ul = function(a, b) {
            a.u = !0;
            fl(function() {
                a.u && wl.call(null, b)
            })
        },
        wl = Vk,
        CancelError = function(a) {
            CustomError.call(this, a)
        };
    extend(CancelError, CustomError);
    CancelError.prototype.name = "cancel";
    var ajax = function(a, b, c, d) {
            return new Promise(function(e, f) {
                var g = d || {},
                    k, l = g.Gb ? g.Gb.j() : Http.j();
                try {
                    l.open(a, b, !0)
                } catch (q) {
                    f(new XhrError("Error opening XHR: " + q.message, b))
                }
                l.onreadystatechange = function() {
                    if (4 == l.readyState) {
                        global.clearTimeout(k);
                        var a;
                        a: switch (l.status) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                a = !0;
                                break a;
                            default:
                                a = !1
                        }!a && (a = 0 === l.status) && (a = b.match(Kc)[1] || null, !a && global.self && global.self.location && (a = global.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
                        a ? e(l) : f(new XhrHttpError(l.status, b))
                    }
                };
                l.onerror = function() {
                    f(new XhrError("Network error", b))
                };
                var n;
                if (g.headers) {
                    for (var m in g.headers) n = g.headers[m], null != n && l.setRequestHeader(m, n);
                    n = g.headers["Content-Type"]
                }
                m = global.FormData && c instanceof global.FormData;
                "POST" != a || void 0 !== n || m || l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                g.withCredentials && (l.withCredentials = g.withCredentials);
                g.responseType && (l.responseType = g.responseType);
                g.wb && l.overrideMimeType(g.wb);
                0 < g.Db && (k = global.setTimeout(function() {
                    l.onreadystatechange = aa;
                    l.abort();
                    f(new zl(b))
                }, g.Db));
                try {
                    l.send(c)
                } catch (q) {
                    l.onreadystatechange = aa, global.clearTimeout(k), f(new XhrError("Error sending XHR: " + q.message, b))
                }
            })
        },
        XhrError = function(a, b) {
            CustomError.call(this, a + ", url=" + b);
            this.url = b
        };
    extend(XhrError, CustomError);
    XhrError.prototype.name = "XhrError";
    var XhrHttpError = function(a, b) {
        XhrError.call(this, "Request Failed, status=" + a, b);
        this.status = a
    };
    extend(XhrHttpError, XhrError);
    XhrHttpError.prototype.name = "XhrHttpError";
    var XhrTimeoutError = function(a) {
        XhrError.call(this, "Request timed out", a)
    };
    extend(XhrTimeoutError, XhrError);
    XhrTimeoutError.prototype.name = "XhrTimeoutError";
    var XMLHttpRequester = function() {};
    extend(XMLHttpRequester, _BaseRequester);
    XMLHttpRequester.prototype.j = function() {
        var xhr = new XMLHttpRequest;
        if ("withCredentials" in xhr) {
          return xhr;
        }
        if ("undefined" != typeof XDomainRequest) {
          return new XDomainRequester;
        }
        throw Error("Unsupported browser");
    };
    var XDomainRequester = function() {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = null;
        this.j.onload = bind(this.gb, this);
        this.j.onerror = bind(this.Ka, this);
        this.j.onprogress = bind(this.ib, this);
        this.j.ontimeout = bind(this.jb, this)
    };
    XDomainRequester.prototype.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.j.open(a, b)
    };
    XDomainRequester.prototype.send = function(a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("Only string data is supported");
        else this.j.send()
    };
    XDomainRequester.prototype.abort = function() {
        this.j.abort()
    };
    XDomainRequester.prototype.setRequestHeader = function() {};
    XDomainRequester.prototype.gb = function() {
        this.status = 200;
        this.responseText = this.j.responseText;
        Dl(this, 4)
    };
    XDomainRequester.prototype.Ka = function() {
        this.status = 500;
        this.responseText = "";
        Dl(this, 4)
    };
    XDomainRequester.prototype.jb = function() {
        this.Ka()
    };
    XDomainRequester.prototype.ib = function() {
        this.status = 200;
        Dl(this, 1)
    };
    var Dl = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var clearDOM = function(el) {
          if (el = getDom(el)) {
            el.innerHTML = ""
          }
        },
        show = function(el, show) {
          if (el = getDom(el)) {
            el.style.display = show ? "" : "none"
          }
        },
       //a = Gl(slotElement, iframId, iframeTitle, !1, size, doc);
        createIframe = function(el, id, title, isHide, size, doc) {
            ifr = (doc || document).createElement("iframe");
            ifr.id = id;
            ifr.title = title;
            ifr.name = id;
            isArray(size) ? null != size[0] && null != size[1] && (ifr.width = String(size[0]), ifr.height = String(size[1])) : (ifr.width = "100%", ifr.height = "0");
            ifr.vspace = "0";
            ifr.hspace = "0";
            ifr.allowTransparency = "true";
            ifr.scrolling = "no";
            ifr.marginWidth = "0";
            ifr.marginHeight = "0";
            ifr.frameBorder = "0";
            ifr.style.border = "0";
            ifr.style.verticalAlign = "bottom";
            isHide && (
              ifr.style.visibility = "hidden",
              ifr.style.display = "none"
            );
            O(vm, fm.G) && (ifr.srcdoc = "");
            el.appendChild(ifr);
            return ifr
        },
        removeDom = function(doc, domId) {
            0 != Uf() && (dom = doc.getElementById(domId)) && "hidden" == dom.style.visibility && "none" == dom.style.display && dom.parentNode.removeChild(dom)
        },
        createSFChannel = function(container, iframeId, title, content, size, cb, safeFrameConfig, k, l, n) {
            var sizebox;
            isArray(size) ? sizebox = new Box(size[0], size[1]) : sizebox = 1;
            e = O(Rg, xg.G);
            return new SFChannel({
                Ca: container,
                kb: iframeId,
                lb: title,
                content: formatContentToHTMLString(content),
                size: sizebox,
                ub: {
                    info: function() {},
                    $a: function() {},
                    error: function() {}
                },
                cb: l,
                Pa: cb,
                sandbox: notNull(safeFrameConfig.sandbox) ? safeFrameConfig.sandbox : !1,
                permissions: {
                    pa: notNull(safeFrameConfig.allowOverlayExpansion) ? safeFrameConfig.allowOverlayExpansion :
                        !k,
                    qa: notNull(safeFrameConfig.allowPushExpansion) ? safeFrameConfig.allowPushExpansion : !1
                },
                fb: O(Hg, og.G),
                na: !!ma().fifWin,
                ob: size,
                Cb: hg(),
                fc: n
            })
        },
        fillIframe = function(iframe, content, inDapIF) {
            inDapIF && (content = formatContentToHTMLString(content, "<script>var inDapIF=true;\x3c/script>\n"));
            if (0 != Uf()) {
                var d;
                try {
                    d = !!a.contentWindow.document
                } catch (U) {
                    d = !1
                }
                if (d) {
                    var e = b,
                        f = Ll();
                    try {
                        var g = window.frames[a.name];
                        a = e;
                        var k = "http://" + SingletonConfig.getInstance().get(1) + "/pagead/inject_object_div.js";
                        if (6 < parseInt(Uf(), 10) || 0 > a.indexOf(k)) {
                            var l;
                            b: {
                                a = e;
                                var k = document,
                                    n = Uf(),
                                    m;
                                if (!(m = 0 == n || isNaN(n) || 7 > n || 9 < n || k.documentMode && 10 <=
                                    k.documentMode)) {
                                    var q = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                    m = 6 <= (q ? parseFloat(q[1]) : 0)
                                }
                                if (!m)
                                    for (n = 0; n < a.length; ++n)
                                        if (127 < a.charCodeAt(n)) {
                                            l = !0;
                                            break b
                                        }
                                l = !1
                            }
                            if (l) {
                                var w = unescape(encodeURIComponent(e)),
                                    x = Math.floor(w.length / 2);
                                a = [];
                                for (l = 0; l < x; ++l) a[l] = String.fromCharCode(256 * w.charCodeAt(2 * l + 1) + w.charCodeAt(2 * l));
                                1 == w.length % 2 && (a[x] = w.charAt(w.length - 1));
                                e = a.join("")
                            }
                            g.contents = e;
                            g.location.replace("javascript:window.contents")
                        } else g.contents = e, g.location.replace("javascript:document.write(window.contents);document.close();")
                    } catch (U) {} finally {
                        Ml(f)
                    }
                } else {
                    w =
                        b;
                    g = Ll();
                    try {
                        e = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ now()).toString(36)), window[e] = w, w = 'var adContent = window.parent["' + e + '"];window.parent["' + e + '"] = null;document.write(adContent);', w = 6 == Uf() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + w + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + w +
                            "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + w + "\x3c/script>'"
                    } catch (U) {
                        window[e] = null
                    } finally {
                        Ml(g)
                    }
                }
            } else {
                g = b;
                try {
                    f = a.contentWindow ? a.contentWindow.document : a.contentDocument, (-1 != navigator.userAgent.indexOf("Firefox") || O(Mg, tg.G)) && f.open("text/html", "replace"), f.write(g), f.close()
                } catch (U) {}
            }
        },
        formatContentToHTMLString = function(content, head) {
            if (!content) return content;
            var c = content.toLowerCase();
            return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? c : "<html>\n<head>\n" + (head || "") + "</head><body>" + content + "</body></html>\n"
        },
        Ll = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c],
                        f = e.getAttribute("target");
                    f && (a.push({
                        ab: e,
                        yb: f
                    }), e.removeAttribute("target"))
                }
            return a
        },
        Ml = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.ab.setAttribute("target", d.yb)
                }
        };
    var _BaseImpl = function(isSync, adData, querys, d) {
        var api_experiment = getQueryData(querys, "api_experiment");
        isBlank(toString(api_experiment)) || forEach(Array$map(api_experiment.split(","), rc), function(a) {
            setApiExperiment(a)
        });
        this.adData = adData;
        this.querys = querys;
        this.C = d;
        this.l = O(Lg, sg.G);
        this.w = Math.floor(4503599627370496 * Math.random());
        this.ha = !1;
        this.isSync = isSync;
        this.sa = !1;
        isOldIE && Ee(9) && (Http = new XMLHttpRequester);
        this.Kb = O(Fg, mg.Za);
        this.Jb = O(Fg, mg.Ya) || O(fp, To.Ya) || O(gp, Uo.Ya) || O(hp, Vo.Ya) || O(ip, Wo.Ya);
        this.Z = S()
    };
    _BaseImpl.prototype.D = function() {
        return "lean"
    };
    var createCorrelator = function(impl, defaultCorrelator) {
        var win = window;
        if (!defaultCorrelator || notInFrame(win)) {
          defaultCorrelator = Math.floor(4503599627370496 * Math.random())
        } else {
          impl.ha = true;
        }
        impl.correlator = Math.floor(defaultCorrelator)
    };
    _BaseImpl.prototype.fa = function() {
        return null
    };
    _BaseImpl.prototype.T = function() {
        return false
    };
    _BaseImpl.prototype.ga = function() {};
    var getRequestConfig = function(impl, slots, isXXX, cbName) {
        var conf = new ReqConfig;
        conf.type = "json_html";
        conf.mode = impl.getMode(impl.isSync); // return 'fifs' : "fif"
        conf.v = isXXX;
        conf.cbName = cbName;
        conf.slots = slots;
        return conf
    };
    _BaseImpl.prototype.B = function(a) {
        a.w = this.w + "";
        a.m = Wd();
        a.D = this.ha
    };
    _BaseImpl.prototype.ia = function(reqConf) {
        this.setProp2GoogleTagObj(reqConf);
        // 根据平台创建一个合适的请求对象 调用Requester.prototype.ia(slots) 返回请求url
        return createRequester(this, this.isSync ? "sra" : "single", reqConf).ia(reqConf.slots)
    };
    var xhrRequest = function(impl, url, fn, channel0s, opt_use_post) {
            var config = {
                    timeoutMs: 0,
                    withCredentials: !0
                },
                fail = function(a) {
                    var rs = new ReportSender(opt_use_post ? "gpt_post_error" : "gpt_get_error", getReportSenderURL());
                    a.name && appendReportSenderParams(rs, "name", a.name);
                    a.status && appendReportSenderParams(rs, "status", a.status);
                    a.message && appendReportSenderParams(rs, "message", a.message);
                    addExParamsToReportSender(rs, this.F);
                    sendReport(rs)
                },
                success = function(xhr) {
                    var data;
                    response = xhr.responseText;
                    response = response.substring(response.indexOf("(") + 1, response.lastIndexOf(")")).replace(/\\x/g, "\\u00");
                    var parse = global.JSON.parse;
                    try {
                        data = parse(response)
                    } catch (e) {
                        data = null
                    }
                    data && (e && Rl(b), c(b))
                };
            if (opt_use_post) {
              b = b.match(Kc)
              ajax("POST", createURL(b[1], b[2], b[3], b[4], b[5], "nwids=" + encodeURIComponent(d)), b[6], config)
                .then(success, fail, impl)
            } else {
              ajax("GET", url, null, config)
              .then(success, fail, impl)
            }
        },
        Rl = function(a) {
            isArray(a) ? forEach(a, Rl) : object$each(a, function(a) {
                a._cookies_ && delete a._cookies_
            })
        },
        //impl, slots, cbName
        // 只是把内容请求的地址放到了slot.ca中（contentUrl)
        setRequestToSlots = function(impl, slots, cbName, opt_use_post) {
            forEach(slots, function(slot) {
                // this = impl
                var reqConf = getRequestConfig(this, [slot], 1, cbName);
                this.setProp2GoogleTagObj(reqConf);
                reqConf.u = this.J(false); //impl.getReqMode(isSync)
                reqURL = createRequester(this, "single", reqConf).ia([slot]);
                reqURL = Ff(reqURL, opt_use_post ? 8192 : 4096);
                slot.fetchStarted(reqURL)
            }, impl)
        },
        doCollapseEmptyDiv = function(impl, slot, bool) {
            if (noSlotData(impl.adData, slot)) {
              bool && impl.T([slot])
              collapseEmptyDiv = slot.getCollapseEmptyDiv(),
              if (null == collapseEmptyDiv) {
                collapseEmptyDiv = "true" === getQueryData(impl.querys, "google_collapse_empty_div"))
                collapseEmptyDiv && show(slot.getSlotElementId(), false)
              }
            }
        },
        setResponseToSlots = function(impl, response, slots) {
            if (impl.isSync && !isArray(response)) {
              rs = new ReportSender("sra_legacy_ad_response")
              addExParamsToReportSender(rs)
              sendReport(rs)
              return []
            }
            if (slots.length) {
                var slot = slots[0],  //d
                    ri = impl.Z, //e
                    csiid = slot.getCsiId(), //f
                    contentUrl = slot.getContentUrl(); //g
                Di(ri, "ad_fetch_period", csiid, slot.hb);
                Ri(ri, contentUrl, "ad." + csiid)
            }
            if (!isArray(response)) {
              response = [response]
            }
            result = [];
            for (i = 0; i < slots.length; ++i) {
                var slot = slots[i], // f
                    data = response[i][slot.getAdUnitPath()]; //k
                if (data) {
                    var _impl = impl, //g
                        _slot = slot; //l
                    _slot.data = data; //slot.l
                    _slot.fetchEnded();
                    null != data._cookies_ && rk(_impl.C, data);
                    data._persistent_for_stream_ && (_impl.adData.I[getUUID(_slot)] = null);
                    if (exps = data._a_exps_) {
                      for (j = 0, jlen = exps.length; j < jlen; j++) {
                        setApiExperiment(exps[j].toString(), true);
                      }
                    }
                    result.push(slot)
                }
            }
            return result
        },
        Wl = function() {
            global.googletag._getcook_ = 1
        },
        Xl = function(impl, allNeedSlot, slots) {
          if (slots.length == allNeedSlot.length || impl.sa) {
            impl.sa = true
            fg(Lg, SingletonConfig.getInstance().get(70), [])
            impl.l = O(Lg, sg.G)
          }
        },
        bo = function(impl, slots, url) {
            if (slots.length) {
                var csiIds = Array$map(slots, function(slot) {
                    return slot.getCsiId()
                });
                obj = {
                    req_len: url.length,
                    req_s: csiIds.join("-")
                };
                slot = slot[0];
                Pi(impl.Z, slot.getCsiId(), slot.hb, obj)
            }
        },
        co = function(a, b, c) {
            c = {
                is_backfill_at_render: slot$l$isAFC(b),
                qqid: c
            };
            Qi(a.Z, b.getCsiId(), b.hb, Eo(b), c)
        };
    var MobileRequester = function(a, b, c, d, e) {
        Requester.call(this, a, b, c, d, e)
    };
    extend(MobileRequester, Requester);
    MobileRequester.prototype.A = function() {
        Requester.prototype.A.call(this);
        X(this, "m_ast", "js");
        X(this, "markup", "html");
        X(this, "js", "afmc")
    };
    var BaseImpl = function(isSync, adData, querys, d) {
        _BaseImpl.call(this, isSync, adData, querys, d);
        this.da = this.L = this.O = this.H = !1;
        this.P = this.R = "";
        this.videoStreamCorrelator = NaN;
        this.o = 0;
        this.Sb = Math.random() < SingletonConfig.getInstance().get(66)
    };
    extend(BaseImpl, _BaseImpl);
    BaseImpl.prototype.D = function() {
        return "unknown"
    };
    BaseImpl.prototype.B = function(a) {
        BaseImpl.Fa.B.call(this, a);
        a.A = this.da;
        a.B = this.P;
        a.C = this.R;
        a.o = this.o
    };
    var $l = function(impl) {
            var fetchingSlots = getFetchingSlots(impl.adData);
            if (0 < fetchingSlots.length) {
                var c = {}, pendingSlotsAdUnitPath = [],
                for (i = 0; i < fetchingSlots.length; ++i) {
                  c[fetchingSlots[i][0]/* adunitpath */] = !0;
                }
                object$each(c, function(value, key) {
                    pendingSlotsAdUnitPath.push(key)
                });
                rs = new ReportSender("gpt_missing_cb", getReportSenderURL(), SingletonConfig.getInstance().get(10));
                appendReportSenderParams(rs, "pending", pendingSlotsAdUnitPath.join());
                appendReportSenderParams(rs, "correlator", impl.w.toString());
                appendReportSenderParams(rs, "impl", impl.D()/*impl type*/);
                addExParamsToReportSender(rs, impl.adData);
                sendReport(rs)
            }
        },
        am = function(impl) {
            return pd(getSlotsFrom(impl.adData), function(count, slot) {
                return slot.sa ? count + 1 : count
            })
        },
        reportIfQSEMissing = function(impl, slot) {
          if (impl.Sb) {
            var conf = slot.data;
            if (conf && !conf._empty_ && content = conf._html_ && -1 == content.indexOf("adpnt")) {
              qseId = slot.getEscapedQemQueryId()
              rs = new ReportSender("gpt_qse_missing", getReportSenderURL(), 1)
              appendReportSenderParams(rs, "qemQueryId", qseId)
              addExParamsToReportSender(rs, impl.adData)
              sendReport(rs)
            }
          }
        };
    BaseImpl.prototype.Pb = function() {
        $l(this)
    };
    BaseImpl.prototype.Rb = function() {
        var rs = new ReportSender("gpt_req_disp_mismatch", getReportSenderURL(), SingletonConfig.getInstance().get(23));
        appendReportSenderParams(rs, "dslots", am(this).toString());
        appendReportSenderParams(rs, "impl", this.J(this.isSync)/*mode*/);
        appendReportSenderParams(rs, "sra", this.isSync ? "1" : "0");
        appendReportSenderParams(rs, "correlator", this.random.toString());
        addExParamsToReportSender(rs, this.adData);
        sendReport(rs)
    };
    var cm = function(a) {
            var rs = new ReportSender("gpt_fluid_not_sf", getReportSenderURL(), SingletonConfig.getInstance().get(23));
            appendReportSenderParams(rs, "impl", impl.D());
            addExParamsToReportSender(rs, impl.F);
            sendReport(rs)
        },
        createRequester = function(impl, mode /*single | sra*/, reqConf) {
            switch (getQueryData(impl.querys, "target_platform")) {
                case "MOBILE":
                    return new MobileRequester(mode, impl.adData, impl.querys, impl.C, reqConf);
                default:
                    return new PcRequester(mode, impl.adData, impl.querys, impl.C, reqConf)
            }
        },
        dm = function(impl, iframe, slotId) {
          if (impl.o && iframe) {
            if (O(Tg, Ag.G) || O(hj, ug.G) || O(kj, wg.G) {
              impl.o = 0
            } else {
              slot = impl.adData.mapForAdUnitPathToSlots[slotId]
              c = ""
              slot && (c = slot.getContentUrl())
              ek().registerAdBlock(c, 3, "json_html", iframe, null, null, bind(impl.La, impl))
            }
          }
        };
    var iframeTitle = "3rd party ad content";
    setProp2GoogleTagObj("setAdIframeTitle", function(a) {
        iframeTitle = a
    });
    // for friendly_iframe   friendly_iframe_sra
    var FriendlyIframeImpl = function(a, b, c, d) {
        BaseImpl.call(this, a, b, c, d);
        a ? (fg(fj, SingletonConfig.getInstance().get(77), [], !0), fg(oo, SingletonConfig.getInstance().get(84), [], !0)) : (fg(Qg, SingletonConfig.getInstance().get(77), [], !0), fg(po, SingletonConfig.getInstance().get(84), [], !0));
        this.u = [];
        this.I = {};
        this.U = 0;
        this.La = {};
        this.sb = this.rb = NaN;
        this.M = !1;
        this.X = NaN;
        this.ra = !1;
        this.dc = O(Pg, yg.K) || O(Kg, rg.G) || O(no, ho.G);
        this.Y = O(Qg, Jg.G) || O(fj, Ng.G);
        this.ua = O(ro, jo.G);
        this.v = {};
        this.A = O(no, ho.G);
        this.Mb = 0;
        this.W = O(uo, mo.G) || O(jp, Xo.G) || O(kp, Yo.G)
    };
    extend(FriendlyIframeImpl, BaseImpl);
    var eo = /google_ads_iframe_\S+__hidden__/;
    FriendlyIframeImpl.prototype.D = function() {
        return this.j ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    };
    FriendlyIframeImpl.prototype.J = function(isSync) {
        return isSync ? "fifs" : "fif"
    };
    FriendlyIframeImpl.prototype.B = function(a) {
        FriendlyIframeImpl.Fa.B.call(this, a);
        a.persistentRoadblocksOnly = this.ra;
        a.videoPodNumber = this.rb;
        a.videoPodPosition = this.sb;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    jm(impl, reqConf, c, e)
    var jm = function(impl, reqConf, index, opt_use_post) {
            var slots = reqConf.slots,
                reqURL = impl.ia(reqConf),
                g = ag
                  ? impl.Kb || reqURL.length > 4096
                    ? 1
                    : impl.Jb
                      ? 2
                      : 3
                  : 3;
            if (3 == g) {
              gm(impl, reqURL, slots, index, reqConf.cbName, opt_use_post);
            } else {
              d = 1 == g
              hm(impl, reqURL, slots, opt_use_post)
              slot = slots[index],
              if (d && impl.C && 1 != global.googletag._getcook_) {
                f = impl.C;
                d = slot.channel0;
                g = document.domain;
                if (1 == f.j || !f.l && !f.o) {
                  f = null;
                } else {
                  var k = Sf(!!impl.F.A) + "/gampad/cookie.js?",
                      k = k + ("domain=" + encodeURIComponent(g)),
                      k = k + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + d);
                  f.l && (k += "&cookie=" + encodeURIComponent(f.l));
                  f.o && (k += "&cookie_enabled=1");
                  f = k
                }
                if (f) {
                  f = '<script src = "' + Qf(f) + '">\x3c/script>'
                  im(impl, slot, f, slot)
                }
              }
            }
            b.I = !0;
            Wl();
            if (!impl.isSync) {
              a.La[getUUID(e[0])] = window.setTimeout(bind(impl.Da, a), SingletonConfig.getInstance().get(13))
            }
            lk(kk.getInstance(), vg.Ha)
        },
        km = function(index, contentUrl, c) {
            var d = "";
            c && (d = d + '<script type="text/javascript">function callbackProxy(adContents) { ' + ("window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + index + ");}") + "\x3c/script>");
            return d + ('<script src = "' + contentUrl + '">\x3c/script>')
        },
        // impl, k, _url, cbName, impl.isSync || noSlotData(impl.adData, slot[0])
        jsonpRequest = function(impl, reqIndex, url, cbName, slotNoData) {
            slotNoData && $goog$exportPath_$(cbName, bind(function(response) {
                processResponse(this, response, reqIndex)
            }, impl));
            appendScript(document, url)
        },
        gm = function(impl, url, slots, index, cbName, opt_use_post) {
            url = Ff(url, 4096); //b
            var _url = Qf(url); //g
            impl.isSync
              ? setRequestToSlots(impl, slots, cbName)
              : slots[0].fetchStarted(_url);
            reportIfSlotNoDivInPage(impl, slots, index);
            var reqIndex = ++impl.reqIndex; //reqIndex
            // I 用来记录每一次请求结果对应的slots
            impl.mapForReqIndexToSlots[reqIndex] = slots;
            b = "";
            impl.W || (b = km(k, _url, impl.isSync || noSlotData(impl.AdData, slot[0])));
            //这个也不太重要，就是跟ri对象相关的
            bo(impl, slots, _url);

            if (impl.W) {
              //发送jsonp请求广告数据
              jsonpRequest(impl, reqIndex, _url, cbName, impl.isSync || noSlotData(impl.adData, slot[0]));
            } else {
              if (null == document.getElementById(slots[index].getSlotElementId()))
                  if (impl.l || impl.A)
                      if (e = findIndex(slots, function(slot) {
                          return null != document.getElementById(slot.getSlotElementId())
                      }), -1 != e) d = e;
                      else {
                          opt_use_post && im(a, c[d], b, opt_use_post);
                          return
                      } else if (d = findIndex(c, function(a) {
                  return null != document.getElementById(a.getSlotElementId())
              }), -1 == d) return;
              im(a, c[d], b, c[d])
            }
        },
        hm = function(impl, url, slots, opt_use_post) {
            url = Ff(url, opt_use_post ? 8192 : 4096);
            var _url = Qf(url);
            // impl, slots, cbName, opt_use_post
            impl.isSync
              ? setRequestToSlots(impl, slots, "callbackProxy", opt_use_post)
              : slots[0].fetchStarted(_url);
            var reqIndex = ++impl.reqIndex;
            impl.mapForReqIndexToSlots[reqIndex] = slots;
            fn = bind(function(response) {
              if (this.isSync || noSlotData(this.adData, slots[0]) {
                processResponse(this, response, reqIndex)
              }
            }, impl);
            xhrRequest(impl, url, fn, getChannel0sFromAdData(impl.adData, slots).join(","), opt_use_post);
            bo(impl, slots, url)
        },
        im = function(impl, slot1, content, slot2) {
            var doc = document,
                hiddenIframeId = getIframeUUID(b) + "__hidden__",
                iframe = doc.getElementById(hiddenIframeId);
            if (!iframe) {
                id = impl.l || impl.A
                  ? slot1.getSlotElementId()
                  : slot2.getSlotElementId();
                div = doc.getElementById(id);
                if (null == div) return;
                iframe = createIframe(div, hiddenIframeId, "", !0, [0, 0], doc)
            }
            fillIframe(iframe, content, !1)
        },
        getIframeContainerUUID = function(slot) {
            return getIframeUUID(slot) + "__container__"
        },
        qm = function(a, b) {
            var c =
                document;
            if (noSlotData(a.F, b)) {
                var d = b.getSlotElementId(),
                    e = c.getElementById(d);
                if (e) {
                    for (var d = getIframeContainerUUID(b), f = getIframeUUID(b) + "__hidden__", e = e.childNodes, g = !1, k = 0; k < e.length; ++k)
                        if (1 == e[k].nodeType) {
                            var l = e[k];
                            if (a.l || a.A) {
                                if (l.id != d && l.id != f && !eo.test(l.id)) {
                                    g = !0;
                                    break
                                }
                            } else if (l.id != d && l.id != f) {
                                g = !0;
                                break
                            }
                        }(g = g || om(c, b)) && pm(a, b)
                }
            }
        },
        om = function(a, b) {
            a = a.getElementById(getIframeContainerUUID(b));
            return !!a && hasMatch(Ve(a), function(a) {
                return a.id != getIframeUUID(b)
            })
        };
    FriendlyIframeImpl.prototype.ga = function(a, b) {
        a = groupByFnCallResult(a, function(a) {
            return 0 != getSlotSizes(a).length
        });
        a[!1] && forEach(a[!1], function(a) {
            doCollapseEmptyDiv(this, a, !0)
        }, this);
        if (a = a[!0]) {
            var c = b.isVideoRefresh ? 3 : 2,
                d = S();
            forEach(a, function(a) {
                a.tb = ++S().X;
                var b = a.getCsiId();
                Ji(d, "request_refresh_type", b + "_" + c, a.hb)
            });
            if (notNull(b.videoStreamCorrelator)) this.videoStreamCorrelator = b.videoStreamCorrelator;
            else {
                var e = !0;
                notNull(b.changeCorrelator) && (e = b.changeCorrelator);
                e && createCorrelator(this)
            }
            this.rb = b.videoPodNumber || NaN;
            this.sb = b.videoPodPosition || NaN;
            this.ra = b.persistentRoadblocksOnly ||
                !1;
            this.M = b.clearUnfilledSlots || !1;
            Fj(this.F, a);
            this.X = a.length;
            for (b = 0; b < a.length; ++b) qm(this, a[b]);
            if (!this.H) {
                var f = bind(function(a) {
                    var b = getCallbackName(this);
                    return getRequestConfig(this, a, c, b)
                }, this);
                if (this.j) b = groupByFnCallResult(a, function(a) {
                    return a.$
                }), Xl(this, a, b[a[0].$]), this.l ? object$each(b, function(a) {
                    rm(this, f(a), 0)
                }, this) : rm(this, f(a), 0);
                else
                    for (b = 0; b < a.length; ++b) rm(this, f([a[b]]), 0)
            }
        }
    };

    FriendlyIframeImpl.prototype.T = function(slots) {
        for (var i = 0; i < slots.length; ++i) {
          pm(this, slots[i])
          initSlotStartCollapsed(this, slots[i])
          oj(slots[i]);
        }
        return true
    };
    var pm = function(impl, slot) {
            var c = !!slot.o;
            tm(impl, slot);
            id = slot.getSlotElementId();
            if (c) {
                var slotElement = document.getElementById(id);
                if (slotElement) {
                    var removedIframeId = getIframeContainerUUID(slot) + "__to_be_removed__";
                    children = listToArray(slotElement.childNodes);
                    forEach(children, function(child) {
                      if (!(1 == child.nodeType && child.id == removedIframeId)) {
                        slotElement.removeChild(child)
                      }
                    })
                }
            } else {
              clearDOM(id)
            }
        },
        createIframeContainer = function(impl, doc, slot, slotEl, size) {
            var containerId = getIframeContainerUUID(slot);
            var div = doc.createElement("div");
            div.id = containerId;
            div.name = containerId;
            var style = div.style;
            style.border = "0pt none";
            if (impl.adData.o) {
              style.margin = "auto"
              style.textAlign = "center"
            }
            if (size) {
              hasSize = isArray(size)
              style.width = hasSize ? size[0] + "px" : "100%"
              style.height = hasSize ? size[1] + "px" : "0%")
            }
            slotEl.appendChild(div);
            return div
        },
        createSlotIframe = function(doc, slot, slotElement, size) {
            var iframeId = getIframeUUID(slot);
            iframe = createIframe(slotElement, iframId, iframeTitle, false, size, doc);
            on(iframe, "load", function() {
                slot.renderStart && slot.loaded()
            });
            slot.H = true;
            return iframe
        };
    FriendlyIframeImpl.prototype.N = function(a) {
        object$each(this.v, function(b) {
            a.getElementById(getIframeUUID(b.slot)) || createSlotIframe(a, b.slot, b.vb, b.size)
        }, this);
        this.v = {}
    };
    FriendlyIframeImpl.prototype.N = wrapFnForPerformance(109, FriendlyIframeImpl.prototype.N);
    var initFriendlyIframeImpl$Iframe = function(impl, doc, slot, d) {
          var sizes = getSlotSizes(slot);
          if (0 == sizes.length) {
            sizes = null;
          } else {
            var sizeInSlot = sizes[0];
            if (1 < sizes.length) {
              b: {
                var id = slot.getSlotElementId(),
                var el = (doc || document).getElementById(id)
                if (el && el.style.height && el.style.width) {
                  var size = [el.style.width, el.style.height];
                  for (var i = 0; i < size.length; ++i) {
                      // 如果size带px,转成数字
                      if (2 < size[i].length && "px" == size[i].substring(size[i].length - 2)) {
                        size[i] = parseInt(size[i], 10);
                      } else {
                        size = null;
                        break b
                      }
                } else {
                  size = null;
                }
              }
              sizeInSlot = size || sizeInSlot
            }
            size = sizeInSlot
          }
          if (size) {
            var iframe = doc.getElementById(getIframeUUID(slot)),
            if (null != iframe) {
              impl.adData.mapForAdUnitPath_CountToTmpDiv[getUUID(slot)] = iframe
            } else {
              slotElement = doc.getElementById(slot.getSlotElementId())
              if (null != slotElement)
                if (impl.Y && d) {
                  var iframeContainer = doc.getElementById(getIframeContainerUUID(slot)) || createIframeContainer(impl, doc, slot, slotElement, size)
                  var iframeId = getIframeUUID(slot)
                  if (!impl.v[iframeId]) {
                    g = Od(impl.v)
                    impl.adData.mapForAdUnitPath_CountToTmpDiv[getUUID(slot)] = iframeContainer
                    impl.v[iframeId] = {
                        slot: slot,
                        vb: firameContainer,
                        size: size
                    }
                    g && window.setTimeout(bind(impl.N, impl, size), 0)
                  }
                } else {
                  iframeContainer = createIframeContainer(impl, doc, slot, slotElement)
                  iframe = createSlotIframe(doc, slot, iframeContainer, size)
                  impl.adData.mapForAdUnitPath_CountToTmpDiv[getUUID(slot)] = iframe
                }
              }
            }
          }
        },
        processResponse = function(impl, response, reqInex) {
            var slots = impl.mapForReqIndexToSlots[reqIndex];
            slots = setResponseToSlots(impl, response, slots);
            delete impl.mapForReqIndexToSlots[reqInex];
            forEach(slots, impl.renderSlot, impl);
            if (!(impl.isSync || c != impl.U)) {
              window.clearTimeout(impl.La[getUUID(slots[0])])
              ym(impl)
            }
        };
    FriendlyIframeImpl.prototype.Da = function() {
        var a = new ReportSender("gpt_request_timeout", getReportSenderURL(), SingletonConfig.getInstance().get(23));
        addExParamsToReportSender(a, this.F);
        sendReport(a);
        ym(this)
    };
    var ym = function(a) {
            0 < a.u.length && (a.u.shift(), 0 < a.u.length && jm(a, a.u[0], 0))
        },
        zm = function(impl, slot, doc) {
            var config = slot.data;
            initFriendlyIframeImpl$Iframe(impl, doc, slot, !d);
            null != d && impl.renderSlot(slot)
        },
        rm = function(impl, reqConf, index, doc, opt_use_post) {
          doc = doc || document;

          //为reqConf中的slots创建iframe这时候iframe没有内容，记录在impl.adData.mapForAdup_countToTmpDivs中
          for (var i = 0, len = reqConf.slots.length; i < len; i++) {
            initFriendlyIframeImpl$Iframe(impl, doc, reqConf.slots[i], true);
          }
          if (impl.isSync || impl.dc) {
            jm(impl, reqConf, index, opt_use_post)
          } else {
            impl.u.push(reqConf)
            if (1 == impl.u.length) {
              jm(impl, reqConf, index)
            } else {
              reqConf = filter(impl.u, function(reqConf) {
                return !reqConf.I
              })
              if (1 < reqConf.length) {
                c = new ReportSender("gpt_request_queue_length", getReportSenderURL())
                appendReportSenderParams(c, "len", "" + reqConf.length)
                addExParamsToReportSender(c, impl.F)
                sendReport(c)
              }
            }
          }
        };
    // 把slot的div设置到adData的map中
    FriendlyIframeImpl.prototype.ca = function(slot) {
        if (!this.isSync) {
            var div = document.getElementById(slot.getSlotElementId());
            div && (this.adData.mapForAdUnitPath_CountToDiv[getUUID(slot)] = div)
        }
    };
    FriendlyIframeImpl.prototype.oa = function() {};
    FriendlyIframeImpl.prototype.ba = function() {};
    FriendlyIframeImpl.prototype.V = function(slot, ownerDocument) {
       // 初始化状态下收起div
        initSlotStartCollapsed(this, slot);

        var _renderSlots,
            d = [],
            index = -1,
            f = null,
            doc = ownerDocument || document;

        if (this.isSync || this.A) {
            zm(this, slot, doc);
            _renderSlots = getNoFetchStartSlotFrom(this.adData);
            if (0 == _renderSlots.length) {
              return;
            }
            // {true: slots, false:slots} 分成是否有sizes两组
            groupSlotsByIfOrNoSizes = groupByFnCallResult(_renderSlots, function(slot) {
                return 0 != getSlotSizes(slot).length
            });
            //没有内容对应尺寸的主动收起
            groupSlotsByIfOrNoSizes[false] && forEach(groupSlotsByIfOrNoSizes[false], function(slot) {
                doCollapseEmptyDiv(this, slot, true)
            }, this);

            //需要渲染的有尺寸的slots
            _renderSlots = groupSlotsByIfOrNoSizes[true];
            if (!_renderSlots) {
              return
            }
        }
        if (this.isSync) {
          groupSlotsByChannel0 = groupByFnCallResult(_renderSlots, function(slot) {
            return slot.channel0
          })
          Xl(this, _renderSlots, groupSlotsByChannel0[slot.channel0] || [])
          if (this.l) {
            f = StringOrArray$find(_renderSlots, function(slot) {
              return null != document.getElementById(slot.getSlotElementId())
            })
            object$each(b, function(b, c) {
              c == a.$ ? d.unshift(b) : d.push(b)
            })
          }
          index = slot.fetchStart || !inArray(_renderSlots, slot)
            ? 0
            : findIndex(_renderSlots, function(_slot) {
              return getUUID(_slot) == getUUID(slot)
            });
        } else {
            if (this.A) {
              f = StringOrArray$find(_renderSlots, function(slot) {
                return null != document.getElementById(slot.getSlotElementId())
              });
              d = Array$map(_renderSlots, function(slot) {
                return [slot]
              });
            } else {
                if (0 == getSlotSizes(slot).length) {
                    doCollapseEmptyDiv(this, slot, true);
                    return
                }
                _renderSlots = [slot]
            }
            index = 0
        }
        if (!this.H) {
          if (!this.O) {
            if (this.l || this.A) {
              forEach(d, function(slot) {
                var reqConf  = getRequestConfig(this, slot, 1, "callbackProxy");
                rm(this, reqConf, index, doc, f);
                index = 0;
              }, this);
            } else {
              cbName = getCallbackName(this);
              reqConf = getRequestConfig(this, _renderSlots, 1, cbName);
              rm(this, reqConf, index, doc);
            }
          }
        }
    };
    var getCallbackName = function(impl) {
            var cbName = "callbackProxy";
            if (impl.W) {
              var count = ++impl.Mb
              cbName = "googletag.impl.pubads." + cbName + count
            }
            return cbName
        },
        initSlotStartCollapsed = function(impl, slot) {
            var c = slot.getDivStartsCollapsed();
            null == c && (c = "true" === getQueryData(impl.querys, "google_divs_start_collapsed"));
            c && show(slot.getSlotElementId(), false)
        };
    // 渲染slot  .prototype.aa
    FriendlyIframeImpl.prototype.renderSlot = function(slot) {
        try {
            renderSlot(this, slot)
        } catch (b) {}
    };
    var renderSlot = function(impl, slot) {
            var doc = document,
                config = slot.data,
                googleQueryId = slot.getEscapedQemQueryId(),
                slotDomId = slot.getSlotElementId();
            if (slotDom = doc.getElementById(slotDomId)) {
              slotDom.setAttribute("data-google-query-id", googleQueryId);
            }
            co(impl, slot, googleQueryId);
            slot.renderStarted();
            if (null == config || config._empty_) {
              doCollapseEmptyDiv(impl, slot, impl.M)
              d = mj(slot)
              d.slotContentChanged = impl.M
              slot.renderEnded(d)
            } else if (impl.L) {
              slot.renderEnded(mj(slot));
            } else {
              content = config._html_;
              if (!isString(content)) {
                  tm(impl, slot);
                  return
              }
              show(slot.getSlotElementId(), true);
              Bm(impl, slot);
              var size;
              "height" == config._fluid_ ? size = "fluid" : size = [config._width_, config._height_];
              config._use_safe_frame_
                //如果使用safeFrame
                ? Cm(impl, doc, slot, size, content, function() {
                    slot.loaded()
                  }, {
                    sandbox: config._use_sandbox_ || false
                  })
                //不使用safeframes, 直接填充iframe
                : Dm(impl, doc, slot, size, content);
              slot.renderEnded(lj(slot, config))
            }
            hiddenIframeId = getIframeUUID(slot) + "__hidden__";
            removeDom(doc, hiddenIframeId);
            reportIfQSEMissing(impl, slot)
        },
        Em = function(sfchannel, dom) {
            sfchannel && bi(sfchannel);
            dom && dom.parentNode && dom.parentNode.removeChild(dom)
        },
        tm = function(impl, slot) {
            var iframeContainer = document.getElementById(getIframeContainerUUID(slot)),
                sfchannel = slot.sfchannel;
            if (iframeContainer) {
                var iframe = document.getElementById(getIframeUUID(slot));
                impl.o && ek().unloadAdBlock(iframe, !!slot.sfchannel);
                if (slot.sfchannel) {
                  if (impl.o) {
                    iframeContainer.style.display = "none"
                    iframeContainer.id += "__to_be_removed__"
                    iframe.id = iframe.id + "__to_be_removed__"
                    freq = SingletonConfig.getInstance().get(24) // 200ms
                    window.setTimeout(function() {
                      Em(sfchannel, iframeContainer)
                    }, freq)
                  } else {
                    Em(sfchannel, iframeContainer)
                  }
                } else {
                  iframeContainer.parentNode.removeChild(iframeContainer)
                }
            } else {
              sfchannel && bi(sfchannel);
            }
            slot.sfchannel = null // slot.o = { status: 100}
        },
        Bm = function(impl, slot) {
            var doc = document, //c
                sfchannel = !!slot.sfchannel, //d
                useSafeFrame = slot.data._use_safe_frame_, //e
                iframeId = getIframeUUID(slot), //f
                iframe = impl.mapForIframeIdToIframe[iframeId], //g
                e = !slot.H && !useSafeFrame && !iframe;
            if (sfchannel || !impl.ua && e) {
              tm(impl, slot)
              initFriendlyIframeImpl$Iframe(impl, doc, slot)
            } else {
              iframe = doc.getElementById(iframeId)
              if (impl.ua && e) {
                d = iframe.parentNode,
                d.removeChild(iframe)
                d.appendChild(iframe)
              }
              impl.o && ek().unloadAdBlock(doc, !!impl.o)
            }
        },
        // impl, doc, slot, size, content
        Dm = function(impl, doc, slot, size, content) {
            var iframeId = getIframeUUID(slot),
                iframe = doc.getElementById(iframeId); //g
            if (null == iframe)
                if (impl.Y) {
                    var iframeContainer = doc.getElementById(getIframeContainerUUID(slot)), //K
                        iframe = createSlotIframe(doc, slot, iframeContainer, size); //g
                    delete impl.mapForIframeIdToIframe[iframeId]
                } else {
                  return;
                }
            isString(d) ? cm(a) : (g.width = String(d[0]), g.height = String(d[1]), a.Y && (k = b.getElementById(getIframeContainerUUID(c)), k.style.width = "", k.style.height =
                ""));
            fillIframe(iframe, content, !0);
            slot.H = false;
            dm(impl, iframe, getUUID(slot))
        },
                    //impl, doc, slot, size, content, cb, config
        Cm = function(impl, doc, slot, size, content, cb, config) {
            var iframeContainer = doc.getElementById(getIframeContainerUUID(slot));
            if (null != iframeContainer) {
                var l = O(qo, io.G/* 21060001 */);
                if (!l) {
                  for (var n; n = iframeContainer.firstChild;) {
                    iframeContainer.removeChild(n);
                  }
                }
                if (!impl.adData.alignCenter) {
                  k.style.display = "inline-block");
                }
                config = mergeObjs([config, impl.adData.H, slot.safeFrameConfig]);
                sfchannel = createSFChannel(iframeContainer, getIframeUUID(slot), iframeTitle, content, size, cb, config, !!slot$l$isAFC(slot), Eo(slot), l);
                slot.sfchannel = sfchannel;
                slot.H = false;
                dm(impl, doc.getElementById(getIframeUUID(slot)), getUUID(slot))
            }
        };

    // 判断是否所slot都已经开始获取数据
    FriendlyIframeImpl.prototype.fa = function() {
        return isNaN(this.X) || this.isSync
          ? 0 == getNoFetchStartSlotFrom(this.adData).length
          : getNoFetchStartSlotFrom(this.adData).length == countObjectLength(this.adData) - this.X
    };
    var reportIfSlotNoDivInPage = function(impl, slots, index) {
            if (null == document.getElementById(slots[index].getSlotElementId())) {
              Fm(a);
            }
            // 同步状态且slots在页面一个匹配的div都找不到
            if (impl.isSync) {
              if (!hasMatch(slots, function(slot) {
                return null != document.getElementById(slot.getSlotElementId())
              })) {
                Gm(impl)
              }
            }
        },
        Fm = function(a) {
            var b = new ReportSender("gpt_target_slot_has_no_div", getReportSenderURL(), SingletonConfig.getInstance().get(29));
            appendReportSenderParams(b, "sra", a.j ? "1" : "0");
            addExParamsToReportSender(b, a.F);
            sendReport(b)
        },
        Gm = function(impl) {
            var rs = new ReportSender("gpt_request_slots_have_no_divs", getReportSenderURL(), SingletonConfig.getInstance().get(29));
            addExParamsToReportSender(rs, impl.adData);
            sendReport(rs)
        };

    // for gut_sync_sra
    var SyncSraImpl = function(isSync, adData, querys, d) {
        BaseImpl.call(this, isSync, adData, querys, d);
        this.I = 0;
        this.v = this.A = null;
        this.u = [];
        this.M = Math.random() < J[23]
    };
    extend(SyncSraImpl, BaseImpl);
    SyncSraImpl.prototype.D = function() {
        return this.j ? "gut_sync_sra" : "gut_sync"
    };
    SyncSraImpl.prototype.J = function(a) {
        return a ? "ss" : "s"
    };
    var Im = function(a, b) {
            if (!a.H) {
                a.A = b.j;
                var c = a.ia(b),
                    c = Qf(Ff(c, 4096)),
                    d = ++a.I;
                a.j ? setRequestToSlots(a, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync") : b.j[0].fetchStarted(c);
                Wl();
                bo(a, b.j, c);
                var e = "sae-script-" + d;
                document.write('<script type="text/javascript" src="' + c + '" id="' + e + '">\x3c/script>');
                a.M && (a.N = window.setTimeout(function() {
                    if (!document.getElementById(e)) {
                        var a = new ReportSender("gpt_write_script_failed");
                        addExParamsToReportSender(a);
                        sendReport(a, 1)
                    }
                }, 0));
                lk(kk.getInstance(), vg.Ha)
            }
        },
        Km = function(a, b) {
            window.clearTimeout(a.N);
            setResponseToSlots(a, b, a.A);
            a.A = null;
            a.l ? a.v.w || Jm(a, a.v) : Jm(a, a.v);
            a.l && a.u.length && Im(a, a.u.shift())
        };
    // 记录渲染节点
    SyncSraImpl.prototype.ca = function(slot) {
        if (!this.isSync) {
            var b = null;
            var scripts = doc.getElementsByTagName("script");
            scripts && scripts.length && (b = scripts[scripts.length - 1]);
            (b = b && b.parentElement) && (this.adData.mapForAdUnitPath_CountToDiv[getUUID(slot)] = b)
        }
    };
    // 增加临时的渲染节点
    SyncSraImpl.prototype.oa = function(slot) {
        var id = "google_temp_div_" + getUUID(slot),
            html = '<div id="' + encodeAttrValue(id) + '"></div>';
        document.write(html);
        (div = getDom(id)) && (this.adData.mapForAdUnitPath_CountToTmpDiv[getUUID(slot)] = div)
    };
    // 清除临时的渲染节点
    SyncSraImpl.prototype.ba = function(slot) {
      var adData = this.adData;
      id = getUUID(slot);
      var tmp = adData.mapForAdUnitPath_CountToTmpDiv[id];
      if (tmp) {
        tmp && tmp.parentNode && tmp.parentNode.removeChild(tmp)
        delete adData.mapForAdUnitPath_CountToTmpDiv[id]
      }
    };
    SyncSraImpl.prototype.V = function(a) {
        var b = null == this.v;
        this.v = a;
        if (this.isSync) {
            if (b) {
                var c = filter(getSlotsFrom(this.F), function(a) {
                    return 0 != getSlotSizes(a).length
                });
                has(c, a) || doCollapseEmptyDiv(this, a, !1);
                if (c.length)
                    if (b = groupByFnCallResult(c, function(a) {
                        return a.$
                    }), Xl(this, c, b[a.$] || []), this.l) {
                        for (var d in b) b.hasOwnProperty(d) && (c = getRequestConfig(this, b[d], 1, "googletag.impl.pubads.setAdContentsBySlotForSync"), d == a.$ ? this.u.unshift(c) : this.u.push(c));
                        this.u.length && Im(this, this.u.shift())
                    } else Im(this, getRequestConfig(this, c, 1, "googletag.impl.pubads.setAdContentsBySlotForSync"))
            } else {
              Jm(this, a);
            }
        } else {
          0 == getSlotSizes(a).length ? doCollapseEmptyDiv(this, a, !1) : Im(this, getRequestConfig(this, [a], 1, a.hb ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
        }
    };
    var Jm = function(impl, slot) {
            var doc = document, // c
                d = b.l,
                e = b.getEscapedQemQueryId(),
                f = b.getSlotElementId();
            (f = c.getElementById(f)) && f.setAttribute("data-google-query-id", e);
            co(a, b, e);
            if (null == d || d._empty_) doCollapseEmptyDiv(a, b, !1), b.renderEnded(mj(b));
            else if (a.L) b.renderEnded(mj(b));
            else if (d._use_safe_frame_)
                if (e = function() {
                    b.loaded()
                }, f = d._html_) {
                    var g;
                    "height" == d._fluid_ ? g = "fluid" : g = [d._width_, d._height_];
                    Lm(impl, doc, slot, g, f, e, {
                        sandbox: d._use_sandbox_ || !1
                    });
                    b.renderEnded(lj(b, d))
                } else b.renderEnded(mj(b));
            else if (d._snippet_ && !d._is_afc_) Mm(a,
                b, c);
            else if (Vf()) {
                c = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + getUUID(b) + "'," + b.hb + ");";
                e = "about:blank";
                if (g = getQueryData(a.m, "google_domain_reset_url"))
                    if (f = decodeURI(g.match(Kc)[3] || null), null === f || 0 <= f.indexOf(document.domain)) e = g;
                if ("height" == d._fluid_) {
                    cm(a);
                    return
                }
                g = [d._width_, d._height_];
                Nm(a, b, e, c, g, a.F.o)
            } else d = Om(a, b, c), c.write("<script>googletag.impl.pubads.createDomIframe(" + Gc(d) + " ," + Gc(getUUID(b)) + "," + a.F.o + "," + b.hb + ");\x3c/script>");
            reportIfQSEMissing(a, b);
            b.renderStarted()
        },
        Lm = function(impl, doc, slot, size, content, cb, config) {
            Pm(slot, doc);
            var firameContainerId = getIframeUUID(slot) + "__container__",
                html = '<div id="' + encodeAttrValue(firameContainerId) + '"></div>';
            doc.write(html);
            iframeContainer = doc.getElementById(firameContainerId);
            if (null != iframeContainer) {
              impl.adData.alignCenter
                ? iframeContainer.style.margin = "auto"
                : iframeContainer.style.display = "inline-block"
              config = mergeObjs([config, impl.adData.H, slot.safeFrameConfig])
              sfchannel = createSFChannel(iframeContainer, getIframeUUID(slot), iframeTitle, content, size, cb, config, slot$l$isAFC(slot) || false, Eo(slot))
              slot.sfchannel = sfchannel
              dm(impl, doc.getElementById(getIframeUUID(slot)), getUUID(slot))
            }
        },
        Qm = function(a, b) {
            var c = b.l,
                d = a.parentNode,
                e = c && c._html_;
            e ? (!c._expandable_ || c._is_afc_ && c._is_3pas_ ? (Vc(a, "load", function() {
                b.w && b.loaded()
            }), fillIframe(a, e, !0)) : d.innerHTML = e, b.renderEnded(lj(b, c))) : (d.removeChild(a), b.renderEnded(mj(b)))
        },
        Rm = function(a, b, c,
            d) {
            b = b.getSlotElementId() + "_ad_container";
            var e = '<div id="' + encodeAttrValue(b) + '"';
            d && "height" == d._fluid_ ? e += ' style="width:100%;">' : a.F.o && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
            d && (e += d._html_);
            c.write(e + "\n</div>\n");
            return b
        },
        Pm = function(a, b) {
            (a = b.getElementById(a.getSlotElementId())) && a.parentNode && "" === a.innerHTML && a.parentNode.removeChild(a)
        },
        Mm = function(a, b, c) {
            Pm(b, c);
            var d = b.l;
            if (null != d) {
                var e = Rm(a, b, c, d);
                b.renderEnded(lj(b, d));
                (c = c.getElementById(e)) && dm(a, c, getUUID(b))
            }
        },
        Nm = function(a,
            b, c, d, e, f) {
            Pm(b, document);
            var g = getIframeUUID(b),
                k = [],
                l = 0,
                n = 0;
            isArray(e) ? (l = e[0], n = e[1]) : cm(a);
            c = Qf(c);
            k.push('<iframe id="', encodeAttrValue(g), '" title="', iframeTitle, '" name="', encodeAttrValue(g), '" width="', l, '" height="', n, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", a.capture ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
            null != d && k.push(' onload="', d, '"');
            k.push("></iframe>");
            d = [];
            c = b.getSlotElementId() + "_ad_container";
            d.push('<div id="',
                encodeAttrValue(c), '"');
            f && d.push(' style="text-align:center" ');
            d.push(">");
            d.push('<ins style="position:relative;width:' + l + "px;height:" + n + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + l + "px;height:" + n + 'px;border:none;display:block;">' + k.join("") + "</ins>") + "</ins>");
            d.push("</div>");
            document.write(d.join(""));
            (f = document.getElementById(g)) && dm(a, f, getUUID(b))
        },
        Om = function(a, b, c) {
            Pm(b, c || document);
            return Rm(a, b, c || document)
        },
        Sm = function(a, b, c, d, e, f, g) {
            a = a.createElement(b);
            a.style.width = d + "px";
            e && (a.style.height = e + "px");
            a.style.display = f;
            a.style.position = "relative";
            g && (a.style.margin = g);
            a.style.border = 0;
            c && a.appendChild(c);
            return a
        },
        Tm = function(a, b, c, d, e, f) {
            e = Sm(a, "ins", e, c, d, "block");
            d = Sm(a, "ins", e, c, d, "inline-table");
            d.style.verticalAlign = "bottom";
            b = a.getElementById(b);
            f ? (a = Sm(a, "div", d, c, null, "block", "auto"), b.appendChild(a)) : b.appendChild(d)
        },
        Um = function(a, b, c) {
            var d = document,
                e = b.l,
                f = e._width_,
                g = e._height_,
                k = e._html_,
                l = d.createElement("iframe"),
                n = getIframeUUID(b);
            l.id = n;
            l.title =
                iframeTitle;
            l.name = n;
            l.width = f;
            l.height = g;
            l.vspace = 0;
            l.hspace = 0;
            l.allowTransparency = "true";
            l.scrolling = "no";
            l.marginWidth = 0;
            l.marginHeight = 0;
            l.frameBorder = 0;
            l.style.border = 0;
            l.style.position = "absolute";
            l.style.top = "0";
            l.style.left = "0";
            on(l, "load", function() {
                b.w && b.loaded()
            });
            Tm(d, a, f, g, l, c);
            l.contentWindow.document.write(k);
            l.contentWindow.document.write("<script>document.close();\x3c/script>");
            b.renderEnded(lj(b, e))
        };
    var ServiceConfig = function() {
            this.m =  // document url querys
            this.j =  //
            this.l = null //adData
        },
        getAdDataFrom = function(serviceConfig) {
            null == serviceConfig.l && (serviceConfig.l = new AdData(queryMap));
            return serviceConfig.l
        },
        // Xm getImplFrom
        getImplFrom = function(serviceConfig) {
            if (null != serviceConfig.j) {
              return serviceConfig.j;
            }
            //
            var ad_impl_type = getQueryData(setURLQuerysTo(serviceConfig), "google_ad_impl"),
                c = S();
            switch (ad_impl_type) {
                case "gut_sync_sra":
                    Ii(c, !0);
                    serviceConfig.j = new SyncSraImpl(true, getAdDataFrom(serviceConfig), setURLQuerysTo(serviceConfig), tk(void 0));
                    zi(c, "sync");
                    break;
                case "gut_friendly_iframe":
                    Ii(c, !1);
                    serviceConfig.j = new FriendlyIframeImpl(false, getAdDataFrom(serviceConfig), setURLQuerysTo(serviceConfig), tk(void 0));
                    zi(c, "fif");
                    break;
                case "gut_friendly_iframe_sra":
                    Ii(c, !0);
                    serviceConfig.j = new FriendlyIframeImpl(true, getAdDataFrom(serviceConfig), setURLQuerysTo(serviceConfig), tk(void 0));
                    zi(c, "fif");
                    break;
                default:
                    Ii(c, !1);
                    serviceConfig.j = new SyncSraImpl(false, getAdDataFrom(serviceConfig), setURLQuerysTo(serviceConfig), tk(void 0));
                    zi(c, "sync");
            }
            var impl = serviceConfig.j;
            impl.H = null != getQueryData(impl.m, "google_nofetch") || !!window.google_noFetch || impl.H;
            impl.O = null != getQueryData(impl.m, "google_disable_initial_load") || !!window.google_DisableInitialLoad || impl.O;
            impl.L = null != getQueryData(impl.m, "google_norender") || impl.L;
            var cb = bind(impl.Pb, impl),
                win = window;
            win.attachEvent ? win.attachEvent("onload", cb) : win.addEventListener && win.addEventListener("load", cb, !1);
            cb = bind(impl.Rb, impl);
            win = window;
            win.attachEvent ? win.attachEvent("onunload", cb) : win.addEventListener && win.addEventListener("unload", cb, !1);
            if (!O(Gg, ng.G)) {
              b.o = ek().setupOse(b.w)
            }
            lk(kk.getInstance(), vg.Qa);
            return serviceConfig.j
        },
        setURLQuerysTo = function(serviceConfig) {
            null == serviceConfig.urlQuerys && (serviceConfig.urlQuerys = new DocumentURLQuerys);
            return serviceConfiga.urlQuerys
        },
        _serviceConfigCache = null,
        getServiceConfig = function() {
          if (!_serviceConfigCache) {
            _serviceConfigCache = new ServiceConfig;
          }
          return _serviceConfigCache
        },
        _serviceConfigCache2 = null,
        getServiceConfig2 = function() {
            if (!_serviceConfigCache2) {
              _serviceConfigCache2 = new ServiceConfig
            }
            return _serviceConfigCache2
        };
    var BaseAdsService = function() {};
    // 添加slot到service如果存在不设置，然后返回slot
    BaseAdsService.prototype.addSlot = function(slot) {
        if (!slot) {
          return null;
        }
        var adunitpath = slot.getAdUnitPath();
        return adunitpath && adunitpath.length
          ? getSlotFromAdDataAndSet(getAdDataFrom(getServiceConfig()), slot)
          : null
    };
    BaseAdsService.prototype.fillSlot = function(slot) {
        var serviceConfig = getServiceConfig(),
            impl = getImplFrom(serviceConfig),
        var adData = getAdDataFrom(serviceConfig);
        if (slot && adData.j[getUUID(slot)] && (null == slot.l || impl.isSync)) {
          impl.ca(slot);
          impl.oa(slot);
          impl.V(slot);
          impl.ba(slot);
        }
    };
    BaseAdsService.prototype.setCookieOptions = function(number) {
        getServiceConfig();
        var b = tk(number);
        b.j = number;
        pk(b)
    };
    BaseAdsService.prototype.setTagForChildDirectedTreatment = function(a) {
        getAdDataFrom(getServiceConfig()).J = a
    };
    BaseAdsService.prototype.setKidsFriendlyAds = function(a) {
        getAdDataFrom(getServiceConfig()).L = a
    };
    BaseAdsService.prototype.passback = function(slot) {
        if (slot) {
            var adUnitPath = slot.getAdUnitPath();
            if (adUnitPath && adUnitPath.length) {
              serviceConfig = getServiceConfig2()
              getSlotFromAdDataAndSet(getAdDataFrom(serviceConfig), slot)
              getImplFrom(serviceConfig).V(slot)
            }
        }
    };
    BaseAdsService.prototype.disableInitialLoad = function() {
        window.google_DisableInitialLoad = true
    };
    BaseAdsService.prototype.addAttribute = function(key, value) {
        var adData = getAdDataFrom(getServiceConfig());
        if (!isBlank(toString(key))) {
            isBlank(toString(value)) && (value = "");
            var d = adData.attrs[key];
            adData.attrs[a] = d
              ? d + "," + value
              : value
        }
    };
    BaseAdsService.prototype.clearAttribute = function(key) {
        var adData = getAdDataFrom(getServiceConfig());
        if (null != key) {
          if (isBlank(toString(key)) || adData.attrs[key]) {
            delete adData.attrs[key]
          }
        } else {
          adData.attrs = {}
        }
    };
    BaseAdsService.prototype.addPageCategoryExclusion = function(category) {
        var adData = getAdDataFrom(getServiceConfig());
        if (!isBlank(toString(category))) {
          notInThenPush(adData.categoryExclusions, category)
        }
    };
    BaseAdsService.prototype.clearPageCategoryExclusions = function() {
        getAdDataFrom(getServiceConfig()).categoryExclusions = []
    };
    BaseAdsService.prototype.addAdSensePageAttribute = function(key, value) {
        var adData = getAdDataFrom(getServiceConfig());
        setAttribute(adData.adsenceAttr, key, value)
    };
    BaseAdsService.prototype.addAdSenseSlotAttribute = function(slot, key, value) {
        var adData = getAdDataFrom(getServiceConfig());
        if (slot && adData.j[getUUID(slot)]) {
          id = getUUID(slot),
          if (null == adData.adsenceSlotAttr[id]) {
            adData.adsenceSlotAttr[id] = new _Query(adData.N)
          }
          setAttribute(adData.adsenceSlotAttr[id], key, value)
        }
    };
    BaseAdsService.prototype.enableSingleRequest = function() {
        var querys = setURLQuerysTo(getServiceConfig());
        if (null == getQueryData(querys, "google_ad_impl")) {
          querys.data.google_ad_impl = "gut_sync_sra"
        }
    };
    BaseAdsService.prototype.collapseEmptyDivs = function(startCollapsed) {
        var querys = setURLQuerysTo(getServiceConfig());
        querys.data.google_collapse_empty_div = "true";
        startCollapsed && (querys.data.google_divs_start_collapsed = "true")
    };
    BaseAdsService.prototype.enableAsyncRendering = function() {
        var querys = setURLQuerysTo(getServiceConfig());
        null == getQueryData(querys, "google_ad_impl") && (querys.data.google_ad_impl = "gut_friendly_iframe")
    };
    BaseAdsService.prototype.enableAsyncSingleRequest = function() {
        var querys = setURLQuerysTo(getServiceConfig());
        null == getQueryData(querys, "google_ad_impl") && (querys.data.google_ad_impl = "gut_friendly_iframe_sra")
    };
    BaseAdsService.prototype.setVideoContentInformation = function(vid, cmsid) {
        var impl = getImplFrom(getServiceConfig());
        impl.da = !0;
        impl.vid = vid;
        impl.cmsid = cmsid;
        impl.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
    };
    BaseAdsService.prototype.getVideoContentInformation = function() {
        var impl = getImplFrom(getServiceConfig());
        return {
            cmsid: impl.cmsid,
            vid: impl.vid
        }
    };
    BaseAdsService.prototype.getVideoStreamCorrelator = function() {
        return getImplFrom(getServiceConfig()).videoStreamCorrelator
    };
    BaseAdsService.prototype.refresh = function(opt_slots, opt_options) {
        var sc = getServiceConfig(),
            impl = getImplFrom(sc),
            adData = getAdDataFrom(sc);
        slots = null != opt_slots
          ? filterSlotsInServiceConfig(opt_slots)
          : getSlotsFrom(adData);
        if (!0 == slots.length) {
          impl.ga(slots, opt_options)
        }
    };
    BaseAdsService.prototype.destroySlots = function(opt_slots) {
        var adData = getAdDataFrom(getServiceConfig());
        this.clearSlotContents(opt_slots);
        for (var i = 0; i < opt_slots.length; ++i)
            if (adData.j[getUUID(opt_slots[i])] && opt_slots[i].getAdUnitPath()) {
                var d = adData.j,
                    id = getUUID(opt_slots[i]);
                if (id in d) {
                  delete d[id]
                }
            }
    };
    // 关联子
    BaseAdsService.prototype.getCorrelator = function() {
        return getImplFrom(getServiceConfig()).correlator + ""
    };
    BaseAdsService.prototype.setCorrelator = function(correlator) {
        createCorrelator(getImplFrom(getServiceConfig()), correlator)
    };
    BaseAdsService.prototype.setMobilePlatform = function() {
        setURLQuerysTo(getServiceConfig()).data.target_platform = "MOBILE"
    };
    BaseAdsService.prototype.setApiExperiment = function(a) {
        setApiExperiment(a)
    };
    BaseAdsService.prototype.isAdRequestFinished = function() {
        return getImplFrom(getServiceConfig()).fa()
    };
    BaseAdsService.prototype.isSlotAPersistentRoadblock = function(a) {
        return a ? !noSlotData(getAdDataFrom(getServiceConfig()), a) : !1
    };
    BaseAdsService.prototype.clearNoRefreshState = function() {
        getAdDataFrom(getServiceConfig()).I = {}
    };
    BaseAdsService.prototype.clearSlotContents = function(opt_slots) {
        var sc = getServiceConfig(),
            impl = getImplFrom(sc),
            adData = getAdDataFrom(sc);
        slots = opt_slots ? filterSlotsInServiceConfig(opt_slots) : getSlotsFrom(adData);
        return impl.T(slots)
    };
    var setAdDataFroceSafeFrame = function(forceSafeFrame) {
            getAdDataFrom(getServiceConfig()).forceSafeFrame = forceSafeFrame
        },
        dn = function(a) {
            getAdDataFrom(getServiceConfig()).H = a
        };
    BaseAdsService.prototype.setLocation = function(geo) {
        getAdDataFrom(getServiceConfig()).geoLocation = geo
    };
    BaseAdsService.prototype.setPublisherProvidedId = function(ppid) {
        getAdDataFrom(getServiceConfig()).publisherProvidedId = ppid
    };
    BaseAdsService.prototype.getVersion = function() {
        return "107"
    };
    BaseAdsService.prototype.setCenterAds = function(center) {
        getAdDataFrom(getServiceConfig()).centerAds = center
    };
    var filterSlotsInServiceConfig = function(slots) {
            var adData = getAdDataFrom(getServiceConfig());
            return filter(slots, function(slot) {
                return !!adData.j[getUUID(slot)]
            })
        },
        en = null,
        setTo$Impl$Pubads = function(key, value) {
            var c;
            c = global.googletag || (global.googletag = {});
            c = c.impl || (c.impl = {});
            c = c.pubads || (c.pubads = {});
            if (!c[key]) {
              c[key] = value
            }
        };
    setTo$Impl$Pubads("createDomIframe", wrapFnForPerformance(96, function(a, b, c, d) {
        var e;
        e = d ? getServiceConfig2() : getServiceConfig();
        d = getImplFrom(e);
        if (e = getAdDataFrom(e).j[b]) Um(a, e, c), (a = document.getElementById(getIframeUUID(e))) && dm(d, a, b)
    }));
    setTo$Impl$Pubads("setAdContentsBySlotForSync", wrapFnForPerformance(98, function(a) {
        Km(getImplFrom(getServiceConfig()), a)
    }));
    setTo$Impl$Pubads("setPassbackAdContents", wrapFnForPerformance(99, function(a) {
        Km(getImplFrom(getServiceConfig2()), a)
    }));
    setTo$Impl$Pubads("setAdContentsBySlotForAsync", wrapFnForPerformance(100, function(a, b) {
        processResponse(getImplFrom(getServiceConfig()), a, b)
    }));
    setTo$Impl$Pubads("syncAdSlotLoaded", wrapFnForPerformance(102, function(a, b, c) {
        c = getImplFrom(c ? getServiceConfig2() : getServiceConfig());
        b && (b = c.F.j[b]) && !b.O && (b.O = !0, Qm(a, b))
    }));
    setTo$Impl$Pubads("setCookieInfo", wrapFnForPerformance(103, function(a) {
        var b;
        getServiceConfig();
        b = tk(void 0);
        rk(b, a)
    }));
    var adsenceAttrKey2googleAttrKeyMap = {
        adsense_ad_format: "google_ad_format",
        adsense_ad_types: "google_ad_type",
        adsense_allow_expandable_ads: "google_allow_expandable_ads",
        adsense_background_color: "google_color_bg",
        adsense_bid: "google_bid",
        adsense_border_color: "google_color_border",
        adsense_channel_ids: "google_ad_channel",
        adsense_content_section: "google_ad_section",
        adsense_cpm: "google_cpm",
        adsense_ed: "google_ed",
        adsense_encoding: "google_encoding",
        adsense_family_safe: "google_safe",
        adsense_feedback: "google_feedback",
        adsense_flash_version: "google_flash_version",
        adsense_font_face: "google_font_face",
        adsense_font_size: "google_font_size",
        adsense_hints: "google_hints",
        adsense_host: "google_ad_host",
        adsense_host_channel: "google_ad_host_channel",
        adsense_host_tier_id: "google_ad_host_tier_id",
        adsense_keyword_type: "google_kw_type",
        adsense_keywords: "google_kw",
        adsense_line_color: "google_line_color",
        adsense_link_color: "google_color_link",
        adsense_relevant_content: "google_contents",
        adsense_reuse_colors: "google_reuse_colors",
        adsense_targeting: "google_targeting",
        adsense_targeting_types: "google_targeting",
        adsense_test_mode: "google_adtest",
        adsense_text_color: "google_color_text",
        adsense_ui_features: "google_ui_features",
        adsense_ui_version: "google_ui_version",
        adsense_url_color: "google_color_url",
        alternate_ad_iframe_color: "google_alternate_color",
        alternate_ad_url: "google_alternate_ad_url",
        demographic_age: "google_cust_age",
        demographic_ch: "google_cust_ch",
        demographic_gender: "google_cust_gender",
        demographic_interests: "google_cust_interests",
        demographic_job: "google_cust_job",
        demographic_l: "google_cust_l",
        demographic_lh: "google_cust_lh",
        demographic_u_url: "google_cust_u_url",
        demographic_unique_id: "google_cust_id",
        document_language: "google_language",
        geography_override_city: "google_city",
        geography_override_country: "google_country",
        geography_override_region: "google_region",
        page_url: "google_page_url"
    };
    var isSyncRending = SingletonConfig.getInstance().get(36);
    var mn = function(adUnitPath, size, pubService) {
            var uid = uuid++;
            this.j = new Slot(adUnitPath, uid, size);
            this.j.hb = !0;
            this.j.addService(pubService);
            this.l = PubService
        },
        uuid = 1;
    h = mn.prototype;
    h.setClickUrl = function(a) {
        try {
            return this.j.setClickUrl(a), this
        } catch (b) {
            R(79, b)
        }
    };
    h.setTargeting = function(a, b) {
        try {
            return this.j.setTargeting(a, b), this
        } catch (c) {
            R(81, c)
        }
    };
    h.updateTargetingFromMap = function(a) {
        try {
            var b = this.j.getTargetingMap();
            if (!a || isString(a) || "number" == typeof a) return getEventLog().error(F("PassbackSlot.updateTargetingFromMap", [a])), this;
            try {
                return object$each(a, function(a, b) {
                    this.setTargeting(b, a)
                }, this), this
            } catch (c) {
                return this.j.v = copy(b), getEventLog().error(F("PassbackSlot.updateTargetingFromMap", [a])), this
            }
        } catch (c) {
            R(85, c)
        }
    };
    h.setAudExtId = function(a) {
        try {
            return isPositiveNumber(a) && (this.j.Y = a), this
        } catch (b) {
            R(82, b)
        }
    };
    h.setTagForChildDirectedTreatment = function(a) {
        try {
            if (0 === a || 1 === a) this.j.W = a;
            return this
        } catch (b) {
            R(80, b)
        }
    };
    h.display = function() {
        try {
            nn(this.l, this.j)
        } catch (a) {
            R(78, a)
        }
    };
    h.setForceSafeFrame = function(a) {
        this.j.setForceSafeFrame(a);
        return this
    };
    h.set = function(a, b) {
        try {
            if (!isString(a) || !b || "page_url" != a) return this;
            var c = this.j;
            c.hb && (c.oa = "" + b)
        } catch (d) {
            R(83, d)
        }
        return this
    };
    h.get = function(a) {
        try {
            return isString(a) && "page_url" == a ? this.j.getPassbackPageUrl() : null
        } catch (b) {
            R(84, b)
        }
    };
    h.wa = function(a) {
        this.j.wa(a)
    };
    var on = function(a, b) {
            this.j = a;
            this.l = b || {
                changeCorrelator: !0
            }
        },
        PubAdsService = function() {
            Service.call(this);
            this.isStartLoad = false;
            this.base = null;
            this.setCookieOption = 0;
            this.tagForChildDirectedTreatment = -1;
            this.Y = 0;
            this.adsenceAttr = {};
            this.attrs = {};
            this.categoryExclusion = [];
            this.publisherProvidedId = this.geoLocation = "";
            this.isSingleRequest = this.disableInitialLoad = this.aa = this.da = !1;
            this.isAsyncRending = isSyncRending ? false : true;
            this.T = kn;
            this.R = this.H = !1;
            this.processingSlotQueue = [];
            this.I = [];
            this.C = [];
            this.ga = {};
            this.enableVideoAd = !1;
            this.correlator = -1;
            this.cmsid = this.vid = "";
            this.forceSingleRequestIds = [];
            this.forceSafeFrame = this.X = !1;
            this.safeFrameConfig = {};

            null !== Nc(window.location.href, "google_force_sra") && this.w.push("108809056");
            var a = SingletonConfig.getInstance().get(53);
            if (a) {
              this.forceExperiment(a);
            }
            a = seed(["108809055", "108809056", "108809057"], 3 * SingletonConfig.getInstance().get(47));
            if (!isBlank(toString(a))) {
              this.forceExperiment(a);
            }
            if (a = SingletonConfig.getInstance().get(75)) {
              this.forceExperiment(a);
            }
            if (has(this.forceSingleRequestIds, "108809056")) {
              this.isSingleRequest = true
            }
        };
    extend(PubAdsService, Service);

    PubAdsService.prototype.set = function(key, value) {
        if (!(isString(key) && 0 < key.length)) {
          return this.log.$a(F("PubAdsService.set", [key, value]), this, null), this;
        }
        this.adsenceAttr[key] = value;
        this.log.info(Ya(key, String(value), this.getName()), this, null);
        return this
    };
    PubAdsService.prototype.set = wrapFnForPerformance(21, PubAdsService.prototype.set);
    PubAdsService.prototype.get = function(key) {
        return this.adsenceAttr[key]
    };
    PubAdsService.prototype.get = wrapFnForPerformance(22, PubAdsService.prototype.get);
    PubAdsService.prototype.getAttributeKeys = function() {
        var keys = [];
        object$each(this.adsenceAttr, function(vaue, key) {
            keys.push(key)
        });
        return keys
    };
    PubAdsService.prototype.getAttributeKeys = wrapFnForPerformance(23, PubAdsService.prototype.getAttributeKeys);
    PubAdsService.prototype.display = function(adUnitPath, size, opt_div, opt_clickUrl) {
        this.enable();
        adUnitPath = opt_div ? defineSlot(adUnitPath, size, opt_div) : defineSlot(adUnitPath, size);
        adUnitPath.addService(this);
        opt_clickUrl && adUnitPath.setClickUrl(opt_clickUrl);
        display(adUnitPath.getSlotId().getDomId())
    };
    PubAdsService.prototype.display = wrapFnForPerformance(24, PubAdsService.prototype.display);
    PubAdsService.prototype.va = function() {
        if (!this.isStartLoad) {
          Mi()
          this.processingSlotQueue.length > 0
            ? this.J()
            : Yk(this.Ba, this)
        }
        this.isStartLoad = true
    };
    PubAdsService.prototype.Ba = function() {
        if (!this.isStartLoad) {
          Mi();
        }
        this.isStartLoad = true;
        if (!this.base) {
          this.J()
        }
    };
    PubAdsService.prototype.getName = function() {
        return "publisher_ads"
    };
    var Mo = function(pubads, slot) {
        pubads.log.info(kb());
        pubads.base.fillSlot(slot);
        pubads.ga[slot.getAdUnitPath()] = !0;
        if (pubads.base) {
            for (var i = 0; i < pubads.needRefreshSlotConfigs.length; i++) {
                var obj = pubads.needRefreshSlotConfigs[i];
                if (obj.slots[0].getAdUnitPath() in pubads.ga) {
                  pubads.refresh(obj.slots, obj.options)
                  Array.prototype.splice.call(pubads.needRefreshSlotConfigs, i, 1)
                  i--
                }
            }
        } else {
          pubads.log.error(jb(), pubads)
        }
    };
    PubAdsService.prototype.J = function() {
        if (!this.base) {
            var a = S();
            Ni(a);
            var b = SingletonConfig.getInstance().get(76);
            // 这句是网络Timeline相关
            Ri(a, b, "impl");
            window.google_noFetch = false;
            window.google_DisableInitialLoad = false;
            this.base = en || (en = new BaseAdsService);
            this.log.info(ib("GPT"), this);

            this.base.setCookieOptions(this.V);
            this.base.setTagForChildDirectedTreatment(this.M);
            this.base.setKidsFriendlyAds(this.Y);

            forEach(this.w, function(a) {
                this.base.setApiExperiment(a)
            }, this);

            this.base.setCenterAds(this.T);

            if (kn) {
              this.u = false
              this.base.setMobilePlatform()
            }

            if (this.H) {
              this.base.collapseEmptyDivs(this.R);
            }
            if (this.m && this.u) {
                fg(no, SingletonConfig.getInstance().get(83), [])
                if (O(no, ho.G)) {
                  this.u = false
                }
            }

            if (!this.aa && this.base) {
              this.aa = true,
              if (this.u) {
                if (this.m) {
                  this.base.enableAsyncSingleRequest()
                } else {
                  this.base.enableSingleRequest()
                }
                setPropertiesToService(this)
                if (!O(so, ko.G)) {
                  syncServiceSlotAttribute(this)
                }
              } else {
                if (this.m) {
                  this.base.enableAsyncRendering()
                  if(O(no, ho.G)) {
                    setPropertiesToService(this)
                    syncServiceSlotAttribute(this)
                  }
                }
              }
              O(so, ko.G) && syncServiceSlotAttribute(this)
              this.W && this.base.disableInitialLoad()
              setVideoContentInformation(this)
              setCorrelator(this)
            }
            if (0 < this.processingSlotQueue.length) {
                for (i = 0; i < this.processingSlotQueue.length; ++i) {
                  this.ja(this.processingSlotQueue[i]);
                }
            }
            if (0 < this.I.length) {
                for (i = 0; i < this.I.length; ++i) {
                  nn(this, this.I[i]);
                }
            }
            this.X && (getAdDataFrom(getServiceConfig()).w = true);
            setAdDataFroceSafeFrame(this.forceSafeFrame);
            dn(this.safeFrameConfig);
            setProp2GoogleTagObj("pubadsReady", true)
        }
    };
    PubAdsService.prototype.J = wrapFnForPerformance(107, PubAdsService.prototype.J, function(a, b) {
        sendGPTException(a, b)
    });
    PubAdsService.prototype.Ea = function(slot) {
        if (!this.asyncRendering) {
          slot.asyncRendering = false
        }
        if (!slot.hb) {
          validAndAddSlotAttribute2Service(this, slot)
        }
        Service.prototype.Ea.call(this, slot)
    };
    // 发送请求，获取数据
    PubAdsService.prototype.ja = function(slot) {
        if ($googleTags$ServiceManagerInstance().m && !this.m) {
          this.log.error(lb(), this);
        } else {
          if (this.isStartLoad && this.Ba(), this.base) {
            setPropertiesToService(this);
            if (O(so, ko.G)) {
              addSlotAttribute2Service(this, slot);
              Mo(this, slot));
            } else {
              if (validAndAddSlotAttribute2Service(this, slot)) {
                Mo(this, slot);
              }
            }
          } else {
            // 异步处理
            if (this.asyncRendering || this.isStartLoad && 0 == this.processingSlotQueue.length) {
              var inProcessingQueue = false;
              var i = 0;
              for (; i < this.processingSlotQueue.length; ++i) {
                slot === this.processingSlotQueue[i] && (inProcessingQueue = true);
              }
              if(!inProcessingQueue) {
                this.log.info(mb(slot.getAdUnitPath(), "GPT"), this, slot);
                this.processingSlotQueue.push(slot)
              }
            } else {
              this.log.error(ob(slot.getAdUnitPath()), this, slot)
            }
          }
        }
    };
    var validAndAddSlotAttribute2Service = function(service, slot) {
            if (service.base && null == service.base.addSlot(slot)) {
              service.log.error(Wb(slot.getAdUnitPath()), service, slot)
              return false;
            }
            addSlotAttribute2Service(service, slot);
            return true
        },
        syncServiceSlotAttribute = function(service) {
            var slots = service.getSlots(),
            for (i = 0; i < slots.length; ++i) {
              validAndAddSlotAttribute2Service(service, slots[i])
            }
        },
        setPropertiesToService = function(service) {
            if (!service.da && service.base) {
                service.da = true;
                var attrKeys = service.getAttributeKeys()
                for (i = 0; i < attrKeys.length; ++i) {
                  if (attrKeys[i] in adsenceAttrKey2googleAttrKeyMap) {
                    service.base.addAdSensePageAttribute(adsenceAttrKey2googleAttrKeyMap[attrKeys[i]], String(service.get(attrKeys[i])))
                  } else {
                    service.log.$a(pb(String(attrKeys[i]), String(service.get(attrKeys[i]))), service);
                  }
                }
                service.base.addAdSensePageAttribute("google_tag_info", "v2");
                object$each(service.attrs, function(attr, key) {
                    if (isArray(attr)) {
                        for (var i = 0; i < attr.length; ++i) {
                          this.base.addAttribute(key, attr[i])
                        }
                    }
                }, service);
                forEach(service.categoryExclusions, function(categoryExclusion) {
                    this.base.addPageCategoryExclusion(categoryExclusion)
                }, service);
                service.base.setPublisherProvidedId(service.publisherProvidedId);
                service.geoLocation && service.base.setLocation(a.geoLocation)
            }
        },
        addSlotAttribute2Service = function(service, slot) {
            if (service.base) {
              var attrKeys = slot.getAttributeKeys()
              for (i = 0; i < attrKeys.length; ++i) {
                attrKeys[i] in adsenceAttrKey2googleAttrKeyMap
                  ? service.base.addAdSenseSlotAttribute(slot, adsenceAttrKey2googleAttrKeyMap[attrKeys[i]], String(slot.get(attrKeys[i])))
                  : service.log.$a(qb(String(attrKeys[i]), String(slot.get(attrKeys[i])), slot.getAdUnitPath()), service, slot)
              }
            }
        };
    PubAdsService.prototype.setCookieOptions = function(a) {
        if (!isNumber(a) || !isPositiveNumber(a)) return this.log.$a(rb(String(a)), this), this;
        this.setCookieOptions = a;
        this.base && this.base.setCookieOptions(a);
        return this
    };
    PubAdsService.prototype.setCookieOptions = wrapFnForPerformance(17, PubAdsService.prototype.setCookieOptions);
    PubAdsService.prototype.setTagForChildDirectedTreatment = function(a) {
        if (0 !== a && 1 !== a) return this.log.$a(Qb(String(a)), this), this;
        this.TagForChildDirectedTreatment = a;
        this.base && this.base.setTagForChildDirectedTreatment(a);
        return this
    };
    PubAdsService.prototype.setTagForChildDirectedTreatment = wrapFnForPerformance(18, PubAdsService.prototype.setTagForChildDirectedTreatment);
    PubAdsService.prototype.clearTagForChildDirectedTreatment = function() {
        this.tagForChildDirectedTreatment = -1;
        this.base && this.base.setTagForChildDirectedTreatment(-1);
        return this
    };
    PubAdsService.prototype.clearTagForChildDirectedTreatment = wrapFnForPerformance(19, PubAdsService.prototype.clearTagForChildDirectedTreatment);
    PubAdsService.prototype.setKidsFriendlyAds = function(kidsFriendlyAd) {
        if (0 !== kidsFriendlyAd && 1 !== kidsFriendlyAd) {
          this.log.$a(Vb(String(kidsFriendlyAd)), this)
          return this;
        }
        this.kidsFriendlyAd = kidsFriendlyAd;
        this.base && this.base.setKidsFriendlyAds(kidsFriendlyAd);
        return this
    };
    PubAdsService.prototype.setKidsFriendlyAds = wrapFnForPerformance(18, PubAdsService.prototype.setKidsFriendlyAds);
    PubAdsService.prototype.setTargeting = function(key, value) {
        var c = null;
        if (isString(value)) {
          c = [vaule]
        } else {
          if (isArray(value)) {
            c = value
          } else {
            isList(value) && (c = listToArray(value))
          }
        }
        var keyString = c
          ? c.join()
          : String(value);
        if (!isString(key) || isBlank(toString(key)) || !c) {
          this.log.$a(F("PubAdsService.setTargeting", [key, value]), this)
          return this;
        }
        this.attr[key] = keyString;
        this.log.info(Pb(key, value, this.getName()), this);
        if (this.base) {
          this.base.clearAttribute(key),
          for (i = 0; len < c.length; ++i) {
            this.base.addAttribute(key, c[i]);
          }
        }
        return this
    };
    PubAdsService.prototype.setTargeting = wrapFnForPerformance(1, PubAdsService.prototype.setTargeting);
    PubAdsService.prototype.clearTargeting = function(key) {
        if (arguments.length) {
            if ("undefined" == typeof key) {
                var rs = new ReportSender("gpt_cleartargeting");
                addExParamsToReportSender(rs);
                sendReport(rs)
            }
            _key = key;
            if (!isString(_key) || isBlank(toString(_key))) {
              this.log.$a(F("PubAdsService.clearTargeting", [b]), this)
              return this;
            }
            if (!this.attr[_key]) {
              this.log.$a(Mb(_key, this.getName()), this)
              return this;
            }
            delete this.attr[_key];
            this.log.info(Lb(_key, this.getName()), this)
        } else {
          this.attr = {}
          this.log.info(bc(this.getName()), this)
        }
        if (this.base) {
          this.base.clearAttribute(_key);
        }
        return this
    };
    PubAdsService.prototype.clearTargeting = wrapFnForPerformance(2, PubAdsService.prototype.clearTargeting);
    PubAdsService.prototype.getTargeting = function(key) {
        return isString(key)
          ? Object.prototype.hasOwnProperty.call(this.attr, key)
            ? listToArray(this.attr[key])
            : []
          : (this.log.$a(F("PubAdsService.getTargeting", [key]), this), [])
    };
    PubAdsService.prototype.getTargeting = wrapFnForPerformance(38, PubAdsService.prototype.getTargeting);
    PubAdsService.prototype.getTargetingKeys = function() {
        return object$keys(this.attr)
    };
    PubAdsService.prototype.getTargetingKeys = wrapFnForPerformance(39, PubAdsService.prototype.getTargetingKeys);
    PubAdsService.prototype.setCategoryExclusion = function(categoryExclusion) {
        if (!isString(categoryExclusion) || isBlank(toString(categoryExclusion))) {
          this.log.$a(F("PubAdsService.setCategoryExclusion", [categoryExclusion]), this)
          return this
        }
        notInThenPush(this.categoryExclusion, categoryExclusion);
        this.log.info(Nb(categoryExclusion), this);
        this.base && this.base.addPageCategoryExclusion(categoryExclusion);
        return this
    };
    PubAdsService.prototype.setCategoryExclusion = wrapFnForPerformance(3, PubAdsService.prototype.setCategoryExclusion);
    PubAdsService.prototype.clearCategoryExclusions = function() {
        this.categoryExclusion = [];
        this.log.info(Ob(), this);
        this.base && this.base.clearPageCategoryExclusions();
        return this
    };
    PubAdsService.prototype.clearCategoryExclusions = wrapFnForPerformance(4, PubAdsService.prototype.clearCategoryExclusions);
    PubAdsService.prototype.disableInitialLoad = function() {
        this.base
          ? this.log.$a(tb("disableInitialLoad", "pubads"), this)
          : this.disableInitialLoad = true
    };
    PubAdsService.prototype.disableInitialLoad = wrapFnForPerformance(5, PubAdsService.prototype.disableInitialLoad);
    PubAdsService.prototype.enableSingleRequest = function() {
        if (this.l && !this.isSingleRequest) {
          this.log.$a(sb("enableSingleRequest"), this)
        } else {
          if (!(has(this.forceSingleRequestIds, "108809057") || has(this.forceSingleRequestIds, "108809056"))) {
            this.log.info(vb("single request"), this)
            this.isSingleRequest = true
          }
        }
        return this.isSingleRequest
    };
    PubAdsService.prototype.enableSingleRequest = wrapFnForPerformance(6, PubAdsService.prototype.enableSingleRequest);
    h.enableAsyncRendering = function() {
        if (this.base && !this.isAsyncRending) {
          this.log.$a(sb("enableAsyncRendering"), this)
        } else {
          this.log.info(vb("asynchronous rendering"), this)
          this.isAsyncRending = true;
        }
        return this.isAsyncRending
    };
    PubAdsService.prototype.enableAsyncRendering = wrapFnForPerformance(7, PubAdsService.prototype.enableAsyncRendering);
    PubAdsService.prototype.enableSyncRendering = function() {
        if (this.l && this.isAsyncRending) {
          this.log.$a(sb("enableSyncRendering"), this);
        } else {
            this.log.info(vb("synchronous rendering"), this);
            this.isAsyncRending = false;
            var slots = this.getSlots(),
            for (i = 0; i < slots.length; ++i) {
              slots[i].asyncRendering = false
            }
        }
        return !this.isAsyncRending
    };
    PubAdsService.prototype.enableSyncRendering = wrapFnForPerformance(8, PubAdsService.prototype.enableSyncRendering);
    PubAdsService.prototype.setCentering = function(centerAd) {
        this.log.info(wb("centering", String(centerAd)), this);
        this.centerAd = centerAd
    };
    PubAdsService.prototype.setCentering = wrapFnForPerformance(9, PubAdsService.prototype.setCentering);
    PubAdsService.prototype.setPublisherProvidedId = function(ppid) {
        if (this.l) {
          this.log.$a(ub("setPublisherProvidedId", a), this)
        } else {
          this.log.info(wb("PPID", ppid), this)
          this.publisherProvidedId = ppid
        }
        return this
    };
    PubAdsService.prototype.setPublisherProvidedId = wrapFnForPerformance(20, PubAdsService.prototype.setPublisherProvidedId);
    PubAdsService.prototype.definePassback = function(adUnitPath, size) {
        if (!isString(adUnitPath) || 0 >= adUnitPath.length || !size) {
          return this.log.error(F("PubAdsService.definePassback", [adUnitPath, size])), null;
        }
        var channel0 = getChannel0From(adUnitPath),
            d = S();
        riCounterIncrease(d, "count_of_passback");
        if (!d.w) {
          d.w = true
          zi(d, "n" + channel0)
        }
        Ei(d);
        return new mn(adUnitPath, size, this)
    };
    PubAdsService.prototype.definePassback = wrapFnForPerformance(10, PubAdsService.prototype.definePassback);
    PubAdsService.prototype.defineOutOfPagePassback = wrapFnForPerformance(35, function(a) {
        a = this.definePassback(a, [1, 1]);
        a.wa(!0);
        return a
    });
    var nn = function(a, b) {
        a.Ba();
        a.j ? a.j.passback(b) : (a.log.info(nb(b.getAdUnitPath(), "GPT"), a, b), a.I.push(b))
    };
    PubAdsService.prototype.refresh = function(opt_slots, opt_options) {
        if (opt_slots && !isArray(opt_slots) || opt_options && (!isNotNull(opt_options) || opt_options.changeCorrelator && !isBoolean(opt_options.changeCorrelator))) {
          this.log.$a(F("PubAdsService.refresh", filter([opt_slots, opt_options], r)), this);
        } else {
          var c = null;
          if (opt_slots && (needRemoveSlots = filterNeedRemoveSlots(this, opt_slots), !needRemoveSlots.length)) {
              this.log.$a(F("PubAdsService.refresh", filter([opt_slots, opt_options], r)), this);
              return
          }
          if (this.base) {
            this.log.info(Cb(), this)
            a = !0
            if (notNull(opt_options) && notNull(opt_options.changeCorrelator) {
              a = opt_.changeCorrelator
              riCounterIncrease(S(), "count_of_refreshes_called")
              this.base.refresh(needRemoveSlots, {
                changeCorrelator: a
              })
            } else {
              if (this.isSingleRequest) {
                this.log.info(Bb(), this)
                needRemoveSlots
                  //                           on就是为了纯粹构造一个j,l的对象格式
                  ? notInThenPush(this.C, new on(needRemoveSlots, opt_options))
                  : notInThenPush(this.C, new on(this.getSlots(), opt_options))
              } else {
                this.log.$a(yb(), this)
              }
            }
          }
        }
    };
    PubAdsService.prototype.refresh = wrapFnForPerformance(11, PubAdsService.prototype.refresh);
    PubAdsService.prototype.enableVideoAds = function() {
        this.enableVideoAd = true;
        setVideoContentInformation(this)
    };
    PubAdsService.prototype.enableVideoAds = wrapFnForPerformance(12, PubAdsService.prototype.enableVideoAds);
    PubAdsService.prototype.setVideoContent = function(vid, cmsid) {
        this.enableVideoAd = true;
        this.vid = vid;
        this.cmsid = cmsid;
        setVideoContentInformation(this)
    };
    PubAdsService.prototype.setVideoContent = wrapFnForPerformance(13, PubAdsService.prototype.setVideoContent);
    PubAdsService.prototype.getVideoContent = function() {
        return this.base ? this.base.getVideoContentInformation() : null
    };
    PubAdsService.prototype.getVideoContent = wrapFnForPerformance(30, PubAdsService.prototype.getVideoContent);
    var setVideoContentInformation = function(service) {
            service.enableVideoAd && service.base && service.base.setVideoContentInformation(service.vid, service.cmsid)
        },
        setCorrelator = function(service) {
            service.base && service.base.setCorrelator(-1 == service.correlator ? null : service.correlator)
        };

    PubAdsService.prototype.getCorrelator = function() {
        return 0 == this.getSlots().length
          ? "not_available"
          : this.base
            ? this.base.getCorrelator()
            : "not_loaded"
    };
    PubAdsService.prototype.getCorrelator = wrapFnForPerformance(27, PubAdsService.prototype.getCorrelator);
    PubAdsService.prototype.setCorrelator = function(correlator) {
        if (notInFrame(window)) {
          return this;
        }
        if (!isPositiveNumber(correlator) || 0 === correlator) {
          this.log.$a(Ub(String(correlator)), this)
          return this;
        }
        this.correlator = correlator;
        setCorrelator(this);
        return this
    };
    PubAdsService.prototype.setCorrelator = wrapFnForPerformance(28, PubAdsService.prototype.setCorrelator);
    PubAdsService.prototype.updateCorrelator = function() {
        this.correlator = -1;
        setCorrelator(this);
        return this
    };
    PubAdsService.prototype.updateCorrelator = wrapFnForPerformance(25, PubAdsService.prototype.updateCorrelator);
    PubAdsService.prototype.isAdRequestFinished = function() {
        return this.base ? this.base.isAdRequestFinished() : false
    };
    PubAdsService.prototype.isAdRequestFinished = wrapFnForPerformance(29, PubAdsService.prototype.isAdRequestFinished);
    PubAdsService.prototype.collapseEmptyDivs = function(collapse) {
        if (this.H)
          this.log.$a(Jb(), this)
        } else {
          if (this.l) {
            this.log.$a(sb("collapseEmptyDivs"), this)
          } else {
            this.R = !!collapse,
            this.log.info(Ib(String(this.R)), this)
            this.H = true
          }
        }
        return this.H
    };
    PubAdsService.prototype.collapseEmptyDivs = wrapFnForPerformance(14, PubAdsService.prototype.collapseEmptyDivs);
    PubAdsService.prototype.clear = function(opt_slot) {
        if (!this.base) {
          this.log.$a(Ab(), this);
          return !1;
        }
        var b = null;
        if (opt_slot) {
          b = filterNeedRemoveSlots(this, opt_slot)
          if (0 == b.length)) {
            this.log.$a(F("PubAdsService.clear", filter([opt_slot], r)), this);
            return !1;
          }
        }
        this.log.info(Db(), this);
        return this.base.clearSlotContents(b)
    };
    PubAdsService.prototype.clear = wrapFnForPerformance(15, PubAdsService.prototype.clear);
    //latitudeOrAddress, opt_longitude, opt_radius
    PubAdsService.prototype.setLocation = function(latitudeOrAddress, opt_longitude, opt_radius) {
        var d = "role:1 producer:12";
        if (notNull(b)) {
            if (!isNumber(a)) return this.log.$a(Gb("Latitude")), this;
            if (!isNumber(b)) return this.log.$a(Gb("Longitude")), this;
            d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
            if (notNull(c)) {
                if (isNaN(c)) return this.log.$a(Gb("Radius")), this;
                d += " radius:" + Math.round(c)
            }
        } else 50 < a.length && (b = a.substring(0, 50), this.log.$a(Hb(String(a), "50", b)), a = b), d += ' loc:"' + a + '"';
        a = d;
        if (hn) d = global.btoa(a);
        else {
            d = [];
            for (c = b = 0; c < a.length; c++) {
                for (var e =
                    a.charCodeAt(c); 255 < e;) d[b++] = e & 255, e >>= 8;
                d[b++] = e
            }
            if (!gn)
                for (gn = {}, a = 0; 65 > a; a++) gn[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
            a = gn;
            b = [];
            for (c = 0; c < d.length; c += 3) {
                var f = d[c],
                    g = (e = c + 1 < d.length) ? d[c + 1] : 0,
                    k = c + 2 < d.length,
                    l = k ? d[c + 2] : 0,
                    n = f >> 2,
                    f = (f & 3) << 4 | g >> 4,
                    g = (g & 15) << 2 | l >> 6,
                    l = l & 63;
                k || (l = 64, e || (g = 64));
                b.push(a[n], a[f], a[g], a[l])
            }
            d = b.join("")
        }
        this.O = "a " + d;
        return this
    };
    PubAdsService.prototype.setLocation = wrapFnForPerformance(16, PubAdsService.prototype.setLocation);
    PubAdsService.prototype.getVersion = function() {
        if (this.base) return this.base.getVersion()
    };
    PubAdsService.prototype.forceExperiment = function(a) {
        this.l ? this.log.$a(ub("forceExperiment", a), this) : this.w.push(a)
    };
    // hi  pubads
    var pubads = function() {
            var smi = $googleTags$ServiceManagerInstance(),
                service = getServiceFromServiceManagerByName(smi, "publisher_ads");
            if (!service) {
                var c = service = new PubAdsService;
                smi.serviceMap[c.getName()] = c
            }
            return service
        },
        pubads = wrapFnForPerformance(26, pubads),
        filterNeedRemoveSlots = function(service, slots) {
            var _slots = []
            for (var i = 0; i < slots.length; ++i) {
                var slot = slots[i];
                if (slot instanceof Slot) {
                  if (!slot.isRemoved) {
                    _slots.push(slot)
                  }
                } else {
                  service.log.$a(Kb(String(i)), service)
                }
            }
            return _slots
        };
    PubAdsService.prototype.markAsAmp = function() {
        this.X = !0;
        this.base && (getAdDataFrom(getServiceConfig()).w = !0)
    };
    PubAdsService.prototype.setSafeFrameConfig = function(config) {
        if (config && isNotNull(config)) {
            if (config = validSafeFrameConfig(config)) {
              this.safeFrameConfig = config
            }
        } else {
          this.log.error(F("PubAdsService.setSafeFrameConfig", [config]), this);
        }
        return this
    };
    PubAdsService.prototype.setSafeFrameConfig = wrapFnForPerformance(37, PubAdsService.prototype.setSafeFrameConfig);
    var removeSlotsFromPubAdsService = function(pubads, slots) {
        var serviceSlots = pubads.getSlots(),
            // 从service的slots中筛选出slots中有的slot, 交集
            _slots = filter(serviceSlots, function(slot) {
                return has(slots, slot)
            });
        if (0 != _slots.length) {
          pubads.base
            ? pubads.base.destroySlots(_slots)
            : {
              forEach(_slots, function(slot) {
                remove(this.o, slot)
              }, pubads);
              forEach(_slots, function(slot) {
                remove(serviceSlots, slot)
              })
            }
        }
    };
    PubAdsService.prototype.setForceSafeFrame = function(forceSafeFrame) {
        if (!isBoolean(forceSafeFrame)) {
          return this.log.$a(Fb(String(forceSafeFrame)), this), this;
        }
        this.forceSafeFrame = forceSafeFrame;
        this.base && setAdDataFroceSafeFrame(this.forceSafeFrame);
        return this
    };
    PubAdsService.prototype.setForceSafeFrame = wrapFnForPerformance(36, PubAdsService.prototype.setForceSafeFrame);
    PubAdsService.prototype.enableChromeInterventionSignals = function() {
        SingletonConfig.getInstance().set(73, 1)
    };
    PubAdsService.prototype.markAsGladeControl = function() {
        this.forceExperiment("108809101")
    };
    PubAdsService.prototype.markAsGladeOptOut = function() {
        this.forceExperiment("108809110")
    };
    setProp2GoogleTagObj("pubads", pubads);
    var SlotManager = function() {
            this.mapForAdUnitPathToSlots = {}; // slot list by adunitpath {adunitpath: [slots]}
            this.mapForAdUnitPathToCount = {}; // adunitpath count
            this.mapForDivIdToSlot = {}; // slot by div_id {div_id: slot}
            this.eventLog = getEventLog() // event manager
        },
        // 在defineSlot中使用
        createSlot = function(slotManager, adUnitPath, size, opt_div) {
            if (!isString(adUnitPath) || adUnitPath.length <= 0 || !size) {
              return null;
            }
            if (!adUnitPath in slotManager.j) {
              slotManager.mapForAdUnitPathToSlots[adUnitPath] = []
              slotManager.mapForAdUnitPathToCount[adUnitPath] = 0
            }
            slot = new Slot(adUnitPath, slotManager.mapForAdUnitPathToCount[adUnitPath], size, opt_div);
            slotManager.mapForAdUnitPathToCount[adUnitPath]++;
            divId = slot.getSlotId().getDomId();
            if (slotManager.mapForDivIdToSlot[divId]) {
              return a.o.error(Ta(divId)), null;
            }
            slotManager.mapForAdUnitPathToSlots[adUnitPath].push(slot);
            slotManager.mapForDivIdToSlot[slot.getSlotId().getDomId()] = slot;
            ah.push(slot);

            a = Zg([slot])[0];
            b = S();
            riCounterIncrease(b, "count_of_slots");
            b.w || (b.w = !0, zi(b, "n" + a));
            Ei(b);
            return slot
        },
        getAllSlots = function(slotManager) {
            var result = [];
            map(slotManager.mapForAdUnitPathToSlots, function(slots) {
                forEach(slots, function(slot) {
                    result.push(slot)
                })
            });
            return result
        },
        removeSlotsFromSlotManager = function(slotManager, slots) {
            forEach(slots, function(slot) {
                slot.isRemoved = true;
                slot.eventLog.info(Xb(slot._slot.toString()), null, slot);
                var adUnitPath = slot.getAdUnitPath();
                remove(this.mapForAdUnitPathToSlots[adUnitPath], slot);
                if (0 == this.j[adUnitPath].length) {
                  var _slots = this.mapForAdUnitPathToSlots;
                  if (var key in _slots) {
                    delete slots[key]
                  }
                }
                _slots = this.mapForDivIdToSlot;
                divId = slot.getSlotId().getDomId();
                if (divId in _slots) {
                  delete _slots[divId];
                }
                remove(ah, slot)
            }, slotManager)
        },
        removeSlots = function(slotManager, slots) {
            if (slotManager && !isArray(slots)) {
              return slotManager.o.$a(F("googletag.destroySlots", [slots])), !1;
            }
            if (slots) {
              unique(slots);
              slots = filter(slots, function(slot) {
                return slot instanceof Slot && !slot.isRemoved
              })
            } else {
              slots = getAllSlots(slotManager);
            }
            if (!slots || 0 == slots.length) {
              return false;
            }
            removeSlotsFromPubAdsService(pubads(), slots);
            removeSlotsFromSlotManager(slotManager, slots);
            return true
        };
    SlotManager.prototype.getSlot = function(adUnitpath, index) {
        index = index || 0;
        slots = isString(adUnitpath) && this.mapForAdUnitPathToSlots[adUnitpath] || [];
        return 0 <= index && index < slots.length && (slot = slots[index], slot.getSlotId().getInstance() == index)
          ? slot
          : null
    };
    var Fn = function(a, b) {
            return Md(a.j, function(a) {
                return has(a, b)
            })
        },
        getSlotManagerInstance = function() {
            var googletag = getGoogleTagObj();
            return googletag.slot_manager_instance || (googletag.slot_manager_instance = new SlotManager)
        },
        //adUnitPath, size, opt_div
        defineSlot = function(adUnitPath, size, opt_div) {
            try {
                var slotManager = getSlotManagerInstance();
                return slotManager && createSlot(slotManager, adUnitPath, size, opt_div)
            } catch (e) {
                R(74, e)
            }
        };
    setProp2GoogleTagObj("defineOutOfPageSlot", function(adUnitPath, opt_div) {
        try {
            var slotManager = getSlotManagerInstance();
            if (!slotManager) return null;
            var slot = createSlot(slotManager, adUnitPath, [1, 1], opt_div);
            return slot ? (slot.wa(!0), slot) : null
        } catch (e) {
            R(73, e)
        }
    });
    setProp2GoogleTagObj("defineSlot", defineSlot);
    setProp2GoogleTagObj("defineUnit", defineSlot);
    setProp2GoogleTagObj("destroySlots", function(opt_slots) {
        try {
            var slotManager = getSlotManagerInstance();
            return !(!slotManager || !removeSlots(slotManager, opt_slots))
        } catch (e) {
            R(75, e)
        }
    });
    SlotManager.prototype.find = SlotManager.prototype.getSlot;
    SlotManager.getInstance = getSlotManagerInstance;

    // googletag.display
    var display = function(div) {
        try {
            var eventManager = getEventLog();
            if (isString(div)) {
                var slot,
                    slotManager = getSlotManagerInstance();
                if (slot = slotManager.mapForDivIdToSlot[div] ? slotManager.mapForDivIdToSlot[div] : null) {
                    slot.sa = true
                    if (slot.U && !slot.hasWrapperDiv()) {
                        //            adUnitPath,  div_id, null, slot
                        slot.eventLog.$a(Qa(slot.adUnitPath, slot._slot.getDomId()), null, slot);
                    } else {
                        for (i = 0; i < slot.serviceList.length; ++i) {
                          slot.serviceList[i].l && slot.serviceList[i].ja(slot);
                        }
                    }
                } else {
                    eventManager.error(Sa(String(div)))
                }
            } else {
                eventManager.error(Ra(String(div)))
            }
        } catch (e) {
            R(95, e)
        }
    };
    setProp2GoogleTagObj("display", display);
    var CompanionAds = function() {
        Service.call(this);
        this.H = !0;
        this.m = this.w = !1;
        this.D = 0;
        this.C = this.A = void 0;
        this.ta = this.ka = !1;
        this.v = {};
        this.j = {};
        this.o = !1;
        this.u = {}
    };
    extend(CompanionAds, Service);
    CompanionAds.prototype.set = function(key, value) {
        if (isString(key) && 0 < key.length) {
          this.u[key] = value
          this.log.info(Ya(key, String(value), this.getName()), this, null)
        } else {
          this.log.$a(Za(String(key), String(value), this.getName()), this, null)
        }
        return this
    };
    CompanionAds.prototype.get = function(key) {
        return this.u[key]
    };
    CompanionAds.prototype.getAttributeKeys = function() {
        var keys = [];
        object$each(this.u, function(value, key) {
            keys.push(key)
        });
        return keys
    };
    CompanionAds.prototype.display = function(adUnitPath, size, opt_div, clickUrl) {
        this.enable();
        slot = opt_div ? defineSlot(adUnitPath, size, opt_div) : defineSlot(adUnitPath, size);
        slot.addService(this);
        clickUrl && slot.setClickUrl(clickUrl);
        display(slot.getSlotId().getDomId())
    };
    CompanionAds.prototype.va = function() {
        this.H ? this.I() : this.ka || (global.document.write('<script type="text/javascript" src="' + Wg() + '">\x3c/script>'), this.ka = !0)
    };
    CompanionAds.prototype.enableSyncLoading = function() {
        this.H = !1
    };
    CompanionAds.prototype.enableSyncLoading = wrapFnForPerformance(58, CompanionAds.prototype.enableSyncLoading);
    CompanionAds.prototype.setRefreshUnfilledSlots = function(a) {
        isBoolean(a) && (this.w = a)
    };
    CompanionAds.prototype.setRefreshUnfilledSlots = wrapFnForPerformance(59, CompanionAds.prototype.setRefreshUnfilledSlots);
    CompanionAds.prototype.setClearUnfilledSlots = function(a) {
        isBoolean(a) && (this.m = a)
    };
    CompanionAds.prototype.setClearUnfilledSlots = wrapFnForPerformance(68, CompanionAds.prototype.setClearUnfilledSlots);
    CompanionAds.prototype.notifyUnfilledSlots = function(a) {
        if (this.w) In(this, Jn(this, a));
        else if (this.m) {
            a = Jn(this, a);
            var b = pubads();
            if (b.l) {
                b.clear(a);
                for (var c = 0; c < a.length; ++c) {
                    var d = new gi(a[c], !0, null, null, null, null, null, null, b.getName());
                    fireServiceEvent(b, "slotRenderEnded", d)
                }
            } else this.log.error(db("PubAds", "clear"))
        }
    };
    CompanionAds.prototype.notifyUnfilledSlots = wrapFnForPerformance(69, CompanionAds.prototype.notifyUnfilledSlots);
    CompanionAds.prototype.isRoadblockingSupported = function() {
        var a = pubads();
        if (!a.l) return !1;
        var a = a.getSlots(),
            b = this.getSlots();
        if (a.length != b.length) return !1;
        for (var c = 0; c < b.length; ++c) {
            for (var d = !1, e = 0; e < a.length; ++e)
                if (b[c] === a[e]) {
                    d = !0;
                    break
                }
            if (!d) return !1
        }
        return !0
    };
    CompanionAds.prototype.isRoadblockingSupported = wrapFnForPerformance(111, CompanionAds.prototype.isRoadblockingSupported);
    CompanionAds.prototype.refreshAllSlots = function() {
        this.w && In(this, null)
    };
    CompanionAds.prototype.refreshAllSlots = wrapFnForPerformance(60, CompanionAds.prototype.refreshAllSlots);
    CompanionAds.prototype.setVideoSession = function(a, b, c, d) {
        this.D = a;
        this.A = b;
        this.C = c;
        this.o = d
    };
    CompanionAds.prototype.setVideoSession = wrapFnForPerformance(61, CompanionAds.prototype.setVideoSession);
    CompanionAds.prototype.getDisplayAdsCorrelator = function() {
        return pubads().getCorrelator()
    };
    CompanionAds.prototype.getDisplayAdsCorrelator = wrapFnForPerformance(62, CompanionAds.prototype.getDisplayAdsCorrelator);
    CompanionAds.prototype.getVideoStreamCorrelator = function() {
        var a;
        a = pubads();
        a.j ? (a = a.j.getVideoStreamCorrelator(), a = isNaN(a) ? 0 : a) : a = 0;
        return a
    };
    CompanionAds.prototype.getVideoStreamCorrelator = wrapFnForPerformance(63, CompanionAds.prototype.getVideoStreamCorrelator);
    var In = function(a, b) {
        var c = pubads();
        if (c.l) {
            if (a.o) {
                if (!a.isRoadblockingSupported()) {
                    a.log.$a(cb());
                    return
                }
                c.j ? (c.log.info(Eb(), c), c.j.clearNoRefreshState()) : c.log.$a(zb(), c);
                c.clear()
            }
            var d = {
                isVideoRefresh: !0
            };
            notNull(a.D) && (d.videoStreamCorrelator = a.D);
            a.A && (d.videoPodNumber = a.A);
            a.C && (d.videoPodPosition = a.C);
            a.o && (d.persistentRoadblocksOnly = a.o);
            a.m && (d.clearUnfilledSlots = a.m);
            a: if (b && !isArray(b) || d.videoStreamCorrelator && !isNumber(d.videoStreamCorrelator) || d.videoPodNumber && !isNumber(d.videoPodNumber) || d.videoPodPosition &&
                    !isNumber(d.videoPodPosition) || d.persistentRoadblocksOnly && !isBoolean(d.persistentRoadblocksOnly) || d.clearUnfilledSlots && !isBoolean(d.clearUnfilledSlots)) c.log.$a(F("PubAdsService.internalVideoRefresh", filter([b, d], r)), c);
                else
            if (c.j) {
                a = null;
                if (b && (a = filterNeedRemoveSlots(c, b), !a.length)) {
                    c.log.error(xb("internalVideoRefresh"), c);
                    break a
                }
                c.log.info(Cb(), c);
                c.j.refresh(a, d)
            } else c.log.$a(yb(), c)
        } else a.log.error(db("PubAds", "refresh"))
    };
    CompanionAds.prototype.isSlotAPersistentRoadblock = function(a) {
        var b = pubads();
        if (b.l && Fn(Gn(), a)) return b.j ? b.j.isSlotAPersistentRoadblock(a) : !1;
        this.log.error(eb());
        return !1
    };
    CompanionAds.prototype.isSlotAPersistentRoadblock = wrapFnForPerformance(64, CompanionAds.prototype.isSlotAPersistentRoadblock);
    var Jn = function(a, b) {
        for (var c = a.getSlotIdMap(), d = [], e = 0; e < b.length; ++e) {
            var f = b[e];
            Kd(c, f) ? d.push(c[f]) : a.log.$a(fb(), a)
        }
        return d
    };
    CompanionAds.prototype.getName = function() {
        return "companion_ads"
    };
    var Vg = function() {
        return Xg() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    CompanionAds.prototype.I = wrapFnForPerformance(70, function() {
        if (!this.ta) {
            var a = document,
                b = Vg();
            this.log.info(gb("GPT CompanionAds"), this);
            appendScript(a, b);
            this.ta = !0
        }
    }, function(a, b) {
        sendGPTException(a, b);
        this.log.error(hb("GPT CompanionAds"), this)
    });
    CompanionAds.prototype.onImplementationLoaded = wrapFnForPerformance(65, function() {
        this.log.info(ib("GPT CompanionAds"), this);
        this.ka = !0
    });
    var Kn = function(a, b) {
        var c = b && b.getSlotId().getId();
        if (c && c in a.v && b.hasWrapperDiv() && a.l && !a.isSlotAPersistentRoadblock(b)) {
            b.J = a.v[c];
            var d = null;
            a.j.hasOwnProperty(c) && (d = a.j[c], delete a.j[c]);
            a = new gi(b, !1, d, null, null, null, null, null, a.getName());
            return jj(b, a)
        }
        return !1
    };
    CompanionAds.prototype.ja = function(a) {
        Kn(this, a)
    };
    CompanionAds.prototype.fillSlot = function(a, b, c, d) {
        return Fn(Gn(), a) && isString(b) && 0 < b.length ? (this.v[a.getSlotId().getId()] = b, null != c && null != d && (this.j[a.getSlotId().getId()] = [c, d]), Kn(this, a)) : !1
    };
    CompanionAds.prototype.fillSlot = wrapFnForPerformance(66, CompanionAds.prototype.fillSlot);
    CompanionAds.prototype.slotRenderEnded = function(a, b, c) {
        var d = null;
        null != b && null != c && (d = [b, c]);
        a = new gi(a, !1, d, null, null, null, null, null, this.getName());
        fireServiceEvent(this, "slotRenderEnded", a)
    };
    CompanionAds.prototype.slotRenderEnded = wrapFnForPerformance(67, CompanionAds.prototype.slotRenderEnded);
    var companionAds = function() {
            var a = $googleTags$ServiceManagerInstance(),
                b = getServiceFromServiceManagerByName(a, "companion_ads");
            if (!b) {
                var c = b = new CompanionAds;
                a.j[c.getName()] = c
            }
            return b
        },
        companionAds = wrapFnForPerformance(57, companionAds);
    setProp2GoogleTagObj("companionAds", companionAds);
    var ContentAdService = function() {
        Service.call(this);
        this.j = {};
        this.m = {}
    };
    extend(ContentAdService, Service);
    ContentAdService.prototype.getName = function() {
        return "content"
    };
    ContentAdService.prototype.set = function(key, value) {
        if (isString(key) && 0 < key.length) {
          this.j[key] = value
          this.log.info(Ya(key, String(value), this.getName()), this, null)
        } else {
          this.log.$a(Za(String(key), String(value), this.getName()), this, null);
        }
        return this
    };
    ContentAdService.prototype.get = function(key) {
        return this.j[key]
    };
    ContentAdService.prototype.getAttributeKeys = function() {
        var keys = [];
        object$each(this.j, function(v, k) {
            keys .push(k)
        });
        return keys
    };
    ContentAdService.prototype.display = function(adUnitPath, size, opt_div, clickUrl) {
        this.enable();
        slot = opt_div ? defineSlot(adUnitPath, size, opt_div) : defineSlot(adUnitPath, size);
        slot.addService(this);
        clickUrl && slot.setClickUrl(clickUrl);
        display(slot.getSlotId().getDomId())
    };
    var Mn = function(a, b) {
        var c = b && b.getSlotId().getId();
        c in a.m && a.l && b.hasWrapperDiv() && !b.w && (b.J = a.m[c], a = new gi(b, !1, null, null, null, null, null, null, a.getName()), jj(b, a))
    };
    ContentAdService.prototype.va = function() {
        for (var a = this.getSlots(), b = 0; b < a.length; ++b) Mn(this, a[b])
    };
    ContentAdService.prototype.ja = function(a) {
        Mn(this, a)
    };
    ContentAdService.prototype.setContent = function(a, b) {
        try {
            Fn(Gn(), a) && isString(b) && 0 < b.length && (this.m[a.getSlotId().getId()] = b, Mn(this, a))
        } catch (c) {
            R(72, c)
        }
    };
    setProp2GoogleTagObj("content", function() {
        try {
            var smi = $googleTags$ServiceManagerInstance(),
                service = getServiceFromServiceManagerByName(smi, "content");
            if (!service) {
                var c = service = new ContentAdService;
                smi.serviceMap[c.getName()] = c
            }
            return service
        } catch (d) {
            R(71, d)
        }
    });
    var Nn = null,
        On = !1,
        Pn = !1,
        Qn = function() {
            if (!Pn) {
                var a = Xg() + "//publisherconsole.appspot.com/js/loader.js";
                appendScript(document, a);
                Pn = !0
            }
        },
        Rn = function() {
            var a = window,
                b = document;
            if (ma()._pubconsole_disable_) return !1;
            var c;
            c = document.cookie.split("google_pubconsole=");
            if (c = 2 == c.length ? c[1].split(";")[0] : "")
                if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0])) return !0;
            $googleTags$ServiceManagerInstance();
            c = !1;
            try {
                c = a.top.document.URL === b.URL
            } catch (d) {}
            a = c ? b.URL : b.referrer;
            return null !== Nc(a, "google_debug") || null !== Nc(a, "dfpdeb") || null !== Nc(a, "google_console") ||
                null !== Nc(a, "google_force_console") || null !== Nc(a, "googfc")
        },
        Tn = function() {
            try {
                Rn() && Qn(), Sn()
            } catch (a) {
                R(94, a)
            }
        },
        Sn = function() {
            on(window, "message", function(a) {
                a.source == window && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && openConsole(a)
            })
        },
        openConsole = function(a) {
            window.googletag && window.googletag.console ? window.googletag.console.openConsole(a) : (a && (Nn = a), On = !0, Qn())
        };
    "complete" === document.readyState ? Tn() : onload(window, Tn);
    setProp2GoogleTagObj("disablePublisherConsole", function() {
        try {
            getGoogleTagObj()._pubconsole_disable_ = !0
        } catch (a) {
            R(93, a)
        }
    });
    setProp2GoogleTagObj("onPubConsoleJsLoad", function() {
        On && (window.googletag.console.openConsole(Nn), Nn = null, On = !1)
    });
    setProp2GoogleTagObj("openConsole", openConsole);
    var SizeMapping = function() {
        this.j = [];
        this.m = !1;
        this.l = getEventLog()
    };
    SizeMapping.prototype.addSize = function(a, b) {
        try {
            var c;
            if (!(c = !isPrimitiveSize2(a) || "fluid" == a)) {
                var d;
                if (!(d = isPrimitiveSize2(b))) {
                    var e;
                    if (e = isArray(b)) a: {
                        for (var f = b.length, g = isString(b) ? b.split("") : b, k = 0; k < f; k++)
                            if (k in g && !Wi.call(void 0, g[k])) {
                                e = !1;
                                break a
                            }
                        e = !0
                    }
                    d = e
                }
                c = !d
            }
            if (c) return this.m = !0, this.l.$a(F("SizeMappingBuilder.addSize", [a, b])), this;
            this.j.push([a, b]);
            return this
        } catch (l) {
            R(88, l)
        }
    };
    SizeMapping.prototype.build = function() {
        try {
            if (this.m) return this.l.$a(Wa()), null;
            Dd(this.j);
            return this.j
        } catch (a) {
            R(89, a)
        }
    };
    var Cd = function(a, b) {
        a: {
            b = b[0];
            a = a[0];
            for (var c = Ad, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = Ad(b.length, a.length)
        }
        return b
    };
    setProp2GoogleTagObj("sizeMapping", function() {
        try {
            return new SizeMapping()
        } catch (a) {
            R(90, a)
        }
    });

    // 执行script节点中其他内容，通过googletag_executed来防止重复执行
    function cb() {
      forEach(document.getElementsByTagName("script"), function(script) {
        var src = script.src;
        if (src) {
          if (0 <= src.indexOf("/tag/js/gpt.js") || 0 <= src.indexOf("/tag/js/gpt_mobile.js")) {
            if (script.innerHTML) {
              if (!script.googletag_executed) {
                /** @type {boolean} */
                script.googletag_executed = true;
                eval(script.innerHTML);
              }
            }
          }
        }
      });
    }

    function go() {
        try {
            isDebug(window.location.href) && (cg = !0, SingletonConfig.getInstance().set(38, 1));
            var a = S();
            setProp2GoogleTagObj("apiReady", !0);

            // 真正的实行函数bootstrap
            O(Kg, rg.G) && "complete" != document.readyState ? onload(window, function() {
                window.setTimeout(function() {
                    bootstrap()
                }, 0)
            }) : bootstrap();

            // 接下来应该是一些跟性能相关的监测代码
            cb();
            lk(kk.getInstance(), vg.Ua);
            mk();
            Li(a);
            var b = Xg() + "//www.googletagservices.com";
            Ri(a, b + "/tag/js/gpt.js", "gpt");
            Ri(a, b + "/tag/js/gpt_mobile.js", "gpt")
        } catch (c) {
            R(106, c)
        }
    }
    if (window.googletag.evalScripts) {
        window.googletag.evalScripts()
    } else {
        setProp2GoogleTagObj("evalScripts", function() {
            // 执行google_tag的扩展代码
            cb()
        }), go());
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this)
