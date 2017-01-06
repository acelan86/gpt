(function() {
  /**
   * @return {undefined}
   */
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
  /**
   * @return {undefined}
   */
  function complete() {
    try {
      if (parseQuery(window.location.href)) {
        /** @type {boolean} */
        cg = true;
        ctor.getInstance().set(38, 1);
      }
      var args = split();
      reply("apiReady", true);
      if ($(selector, field.G) && "complete" != document.readyState) {
        contentLoaded(window, function() {
          window.setTimeout(function() {
            e();
          }, 0);
        });
      } else {
        e();
      }
      cb();
      add(watch.getInstance(), o.Ua);
      stop();
      listener(args);
      /** @type {string} */
      var b = oncomplete() + "//www.googletagservices.com";
      handleSuccess(args, b + "/tag/js/gpt.js", "gpt");
      handleSuccess(args, b + "/tag/js/gpt_mobile.js", "gpt");
    } catch (v1CompNum) {
      html(106, v1CompNum);
    }
  }
  var window = this;
  var document = this.document;
  var self;
  var global = this;
  /**
   * @param {Object} val
   * @return {?}
   */
  var set = function(val) {
    return void 0 !== val;
  };
  /**
   * @return {undefined}
   */
  var clearedOnReadyStateChange = function() {
  };
  /**
   * @param {Function} obj
   * @return {undefined}
   */
  var HOP = function(obj) {
    /**
     * @return {?}
     */
    obj.getInstance = function() {
      return obj.ma ? obj.ma : obj.ma = new obj;
    };
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var typeOf = function(value) {
    /** @type {string} */
    var type = typeof value;
    if ("object" == type) {
      if (value) {
        if (value instanceof Array) {
          return "array";
        }
        if (value instanceof Object) {
          return type;
        }
        /** @type {string} */
        var isFunction = Object.prototype.toString.call(value);
        if ("[object Window]" == isFunction) {
          return "object";
        }
        if ("[object Array]" == isFunction || "number" == typeof value.length && ("undefined" != typeof value.splice && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")))) {
          return "array";
        }
        if ("[object Function]" == isFunction || "undefined" != typeof value.call && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call"))) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == type && "undefined" == typeof value.call) {
        return "object";
      }
    }
    return type;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var isFunction = function(obj) {
    return "array" == typeOf(obj);
  };
  /**
   * @param {?} val
   * @return {?}
   */
  var isArray = function(val) {
    var type = typeOf(val);
    return "array" == type || "object" == type && "number" == typeof val.length;
  };
  /**
   * @param {?} val
   * @return {?}
   */
  var push = function(val) {
    return "string" == typeof val;
  };
  /**
   * @param {Function} opt_attributes
   * @return {?}
   */
  var isDefined = function(opt_attributes) {
    return "boolean" == typeof opt_attributes;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var isClassOf = function(value) {
    return "number" == typeof value;
  };
  /**
   * @param {Function} callback
   * @return {?}
   */
  var then = function(callback) {
    return "function" == typeOf(callback);
  };
  /**
   * @param {string} object
   * @return {?}
   */
  var apply = function(object) {
    /** @type {string} */
    var $s = typeof object;
    return "object" == $s && null != object || "function" == $s;
  };
  /** @type {string} */
  var prop = "closure_uid_" + (1E9 * Math.random() >>> 0);
  /** @type {number} */
  var uid = 0;
  /**
   * @param {Function} fn
   * @param {Object} item
   * @param {(Node|string)} context
   * @return {?}
   */
  var program = function(fn, item, context) {
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
    bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? program : $goog$bindJs_$;
    return bind.apply(null, arguments);
  };
  /**
   * @param {Function} func
   * @param {?} var_args
   * @return {?}
   */
  var partial = function(func, var_args) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      /** @type {Array.<?>} */
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return func.apply(this, newArgs);
    };
  };
  /**
   * @return {?}
   */
  var onFrame = function() {
    return+new Date;
  };
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
  /**
   * @param {Function} obj
   * @param {Function} type
   * @return {undefined}
   */
  var expect = function(obj, type) {
    /**
     * @return {undefined}
     */
    function F() {
    }
    F.prototype = type.prototype;
    obj.Fa = type.prototype;
    obj.prototype = new F;
    /** @type {Function} */
    obj.prototype.constructor = obj;
    /**
     * @param {?} opt_context
     * @param {?} method
     * @param {?} color
     * @return {?}
     */
    obj.cc = function(opt_context, method, color) {
      /** @type {Array} */
      var args = Array(arguments.length - 2);
      /** @type {number} */
      var i = 2;
      for (;i < arguments.length;i++) {
        args[i - 2] = arguments[i];
      }
      return type.prototype[method].apply(opt_context, args);
    };
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  var assert = function(message) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, assert);
    } else {
      /** @type {string} */
      var stack = Error().stack;
      if (stack) {
        /** @type {string} */
        this.stack = stack;
      }
    }
    if (message) {
      /** @type {string} */
      this.message = String(message);
    }
  };
  expect(assert, Error);
  /** @type {string} */
  assert.prototype.name = "CustomError";
  var mirror;
  /**
   * @param {?} a
   * @return {?}
   */
  var assertFalse = function(a) {
    return/^[\s\xa0]*$/.test(a);
  };
  /**
   * @param {string} string1
   * @return {?}
   */
  var trim = function(string1) {
    return string1.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var isString = function(value) {
    if (!spaceRe.test(value)) {
      return value;
    }
    if (-1 != value.indexOf("&")) {
      value = value.replace(r20, "&amp;");
    }
    if (-1 != value.indexOf("<")) {
      value = value.replace(reChars, "&lt;");
    }
    if (-1 != value.indexOf(">")) {
      value = value.replace(percentPattern, "&gt;");
    }
    if (-1 != value.indexOf('"')) {
      value = value.replace(rclass, "&quot;");
    }
    if (-1 != value.indexOf("'")) {
      value = value.replace(rxhtmlTag, "&#39;");
    }
    if (-1 != value.indexOf("\x00")) {
      value = value.replace(core_rnotwhite, "&#0;");
    }
    return value;
  };
  /** @type {RegExp} */
  var r20 = /&/g;
  /** @type {RegExp} */
  var reChars = /</g;
  /** @type {RegExp} */
  var percentPattern = />/g;
  /** @type {RegExp} */
  var rclass = /"/g;
  /** @type {RegExp} */
  var rxhtmlTag = /'/g;
  /** @type {RegExp} */
  var core_rnotwhite = /\x00/g;
  /** @type {RegExp} */
  var spaceRe = /[\x00&<>"']/;
  /**
   * @param {string} code
   * @return {?}
   */
  var runInContext = function(code) {
    return-1 != code.indexOf("&") ? "document" in global ? init(code) : download(code) : code;
  };
  /**
   * @param {string} s
   * @return {?}
   */
  var init = function(s) {
    var values = {
      "&amp;" : "&",
      "&lt;" : "<",
      "&gt;" : ">",
      "&quot;" : '"'
    };
    var div;
    div = global.document.createElement("div");
    return s.replace(rSlash, function(s, number) {
      var value = values[s];
      if (value) {
        return value;
      }
      if ("#" == number.charAt(0)) {
        /** @type {number} */
        number = Number("0" + number.substr(1));
        if (!isNaN(number)) {
          /** @type {string} */
          value = String.fromCharCode(number);
        }
      }
      if (!value) {
        /** @type {string} */
        div.innerHTML = s + " ";
        value = div.firstChild.nodeValue.slice(0, -1);
      }
      return values[s] = value;
    });
  };
  /**
   * @param {string} code
   * @return {?}
   */
  var download = function(code) {
    return code.replace(/&([^;]+);/g, function(dataAndEvents, c) {
      switch(c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return'"';
        default:
          return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? dataAndEvents : String.fromCharCode(c);
      }
    });
  };
  /** @type {RegExp} */
  var rSlash = /&([^;\s<&]+);?/g;
  var iterable = {
    "\x00" : "\\0",
    "\b" : "\\b",
    "\f" : "\\f",
    "\n" : "\\n",
    "\r" : "\\r",
    "\t" : "\\t",
    "\x0B" : "\\x0B",
    '"' : '\\"',
    "\\" : "\\\\",
    "<" : "<"
  };
  var attributes = {
    "'" : "\\'"
  };
  /**
   * @param {string} format
   * @return {?}
   */
  var toString = function(format) {
    /** @type {string} */
    format = String(format);
    /** @type {Array} */
    var order = ['"'];
    /** @type {number} */
    var i = 0;
    for (;i < format.length;i++) {
      /** @type {string} */
      var key = format.charAt(i);
      /** @type {number} */
      var value = key.charCodeAt(0);
      /** @type {number} */
      var j = i + 1;
      var current;
      if (!(current = iterable[key])) {
        if (!(31 < value && 127 > value)) {
          if (key in attributes) {
            key = attributes[key];
          } else {
            if (key in iterable) {
              key = attributes[key] = iterable[key];
            } else {
              /** @type {number} */
              current = key.charCodeAt(0);
              if (31 < current && 127 > current) {
                /** @type {string} */
                value = key;
              } else {
                if (256 > current) {
                  if (value = "\\x", 16 > current || 256 < current) {
                    value += "0";
                  }
                } else {
                  /** @type {string} */
                  value = "\\u";
                  if (4096 > current) {
                    value += "0";
                  }
                }
                value += current.toString(16).toUpperCase();
              }
              /** @type {string} */
              key = attributes[key] = value;
            }
          }
        }
        current = key;
      }
      order[j] = current;
    }
    order.push('"');
    return order.join("");
  };
  /**
   * @param {?} s
   * @return {?}
   */
  var escape = function(s) {
    return null == s ? "" : String(s);
  };
  /**
   * @param {(Array|string)} data
   * @param {(Array|number)} s
   * @return {?}
   */
  var parser = function(data, s) {
    /** @type {number} */
    var ret = 0;
    data = trim(String(data)).split(".");
    s = trim(String(s)).split(".");
    /** @type {number} */
    var padLength = Math.max(data.length, s.length);
    /** @type {number} */
    var i = 0;
    for (;0 == ret && i < padLength;i++) {
      var value = data[i] || "";
      var elem = s[i] || "";
      do {
        /** @type {Array} */
        value = /(\d*)(\D*)(.*)/.exec(value) || ["", "", "", ""];
        /** @type {Array} */
        elem = /(\d*)(\D*)(.*)/.exec(elem) || ["", "", "", ""];
        if (0 == value[0].length && 0 == elem[0].length) {
          break;
        }
        ret = is(0 == value[1].length ? 0 : parseInt(value[1], 10), 0 == elem[1].length ? 0 : parseInt(elem[1], 10)) || (is(0 == value[2].length, 0 == elem[2].length) || is(value[2], elem[2]));
        value = value[3];
        elem = elem[3];
      } while (0 == ret);
    }
    return ret;
  };
  /**
   * @param {(boolean|number|string)} x
   * @param {(boolean|number|string)} y
   * @return {?}
   */
  var is = function(x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
  };
  /**
   * @param {Array} array
   * @param {string} item
   * @return {?}
   */
  var getName = function(array, item) {
    if (push(array)) {
      return push(item) && 1 == item.length ? array.indexOf(item, 0) : -1;
    }
    /** @type {number} */
    var i = 0;
    for (;i < array.length;i++) {
      if (i in array && array[i] === item) {
        return i;
      }
    }
    return-1;
  };
  /**
   * @param {string} arr
   * @param {Function} f
   * @param {Object} obj
   * @return {undefined}
   */
  var forEach = function(arr, f, obj) {
    var e = arr.length;
    var arr2 = push(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        f.call(obj, arr2[i], i, arr);
      }
    }
  };
  /**
   * @param {?} arr
   * @param {Function} fn
   * @return {?}
   */
  var remove = function(arr, fn) {
    var e = arr.length;
    /** @type {Array} */
    var res = [];
    /** @type {number} */
    var resLength = 0;
    var arr2 = push(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        var val = arr2[i];
        if (fn.call(void 0, val, i, arr)) {
          res[resLength++] = val;
        }
      }
    }
    return res;
  };
  /**
   * @param {string} arr
   * @param {Function} fn
   * @param {Function} elems
   * @return {?}
   */
  var map = function(arr, fn, elems) {
    var e = arr.length;
    /** @type {Array} */
    var result = Array(e);
    var arr2 = push(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2) {
        result[i] = fn.call(elems, arr2[i], i, arr);
      }
    }
    return result;
  };
  /**
   * @param {string} list
   * @param {Function} iterator
   * @return {?}
   */
  var reduceRight = function(list, iterator) {
    /** @type {number} */
    var memo = 0;
    forEach(list, function(value, index) {
      memo = iterator.call(void 0, memo, value, index, list);
    });
    return memo;
  };
  /**
   * @param {string} arr
   * @param {Function} f
   * @return {?}
   */
  var insert = function(arr, f) {
    var e = arr.length;
    var arr2 = push(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2 && f.call(void 0, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  /**
   * @param {string} arr
   * @param {Function} i
   * @return {?}
   */
  var last = function(arr, i) {
    i = toArray(arr, i, void 0);
    return 0 > i ? null : push(arr) ? arr.charAt(i) : arr[i];
  };
  /**
   * @param {string} arr
   * @param {Function} f
   * @param {?} opt_obj
   * @return {?}
   */
  var toArray = function(arr, f, opt_obj) {
    var e = arr.length;
    var arr2 = push(arr) ? arr.split("") : arr;
    /** @type {number} */
    var i = 0;
    for (;i < e;i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return-1;
  };
  /**
   * @param {?} callback
   * @param {string} obj
   * @return {?}
   */
  var synchronize = function(callback, obj) {
    return 0 <= getName(callback, obj);
  };
  /**
   * @param {?} attr
   * @param {?} val
   * @return {undefined}
   */
  var validate = function(attr, val) {
    if (!synchronize(attr, val)) {
      attr.push(val);
    }
  };
  /**
   * @param {?} value
   * @param {number} name
   * @return {undefined}
   */
  var formatValue = function(value, name) {
    name = getName(value, name);
    if (0 <= name) {
      Array.prototype.splice.call(value, name, 1);
    }
  };
  /**
   * @param {?} var_args
   * @return {?}
   */
  var concat = function(var_args) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  };
  /**
   * @param {Array} object
   * @return {?}
   */
  var hasKey = function(object) {
    var length = object.length;
    if (0 < length) {
      /** @type {Array} */
      var result = Array(length);
      /** @type {number} */
      var i = 0;
      for (;i < length;i++) {
        result[i] = object[i];
      }
      return result;
    }
    return[];
  };
  /**
   * @param {Array} target
   * @param {number} crossScope
   * @param {number} b
   * @return {?}
   */
  var augment = function(target, crossScope, b) {
    return 2 >= arguments.length ? Array.prototype.slice.call(target, crossScope) : Array.prototype.slice.call(target, crossScope, b);
  };
  /**
   * @param {Array} object
   * @return {undefined}
   */
  var isNumber = function(object) {
    var seen = {};
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var idx = 0;
    for (;idx < object.length;) {
      var value = object[idx++];
      var current;
      current = value;
      current = apply(current) ? "o" + (current[prop] || (current[prop] = ++uid)) : (typeof current).charAt(0) + current;
      if (!Object.prototype.hasOwnProperty.call(seen, current)) {
        /** @type {boolean} */
        seen[current] = true;
        object[i++] = value;
      }
    }
    /** @type {number} */
    object.length = i;
  };
  /**
   * @param {Array} array
   * @param {Function} obj
   * @return {undefined}
   */
  var sortedIndex = function(array, obj) {
    array.sort(obj || comparator);
  };
  /**
   * @param {Array} arr
   * @return {undefined}
   */
  var sortBy = function(arr) {
    /** @type {function (Array, ?): ?} */
    var high = lines;
    /** @type {Array} */
    var array = Array(arr.length);
    /** @type {number} */
    var i = 0;
    for (;i < arr.length;i++) {
      array[i] = {
        index : i,
        value : arr[i]
      };
    }
    /** @type {function (Array, ?): ?} */
    var sorterFn = high || comparator;
    sortedIndex(array, function(a, b) {
      return sorterFn(a.value, b.value) || a.index - b.index;
    });
    /** @type {number} */
    i = 0;
    for (;i < arr.length;i++) {
      arr[i] = array[i].value;
    }
  };
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  var comparator = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  /**
   * @param {Array} obj
   * @param {Function} fn
   * @return {?}
   */
  var getter = function(obj, fn) {
    var proxy = {};
    /** @type {number} */
    var i = 0;
    for (;i < obj.length;i++) {
      var val = obj[i];
      var key = fn.call(void 0, val, i, obj);
      if (set(key)) {
        (proxy[key] || (proxy[key] = [])).push(val);
      }
    }
    return proxy;
  };
  /**
   * @param {Object} obj
   * @param {Function} f
   * @return {undefined}
   */
  var isPlainObject = function(obj, f) {
    var key;
    for (key in obj) {
      f.call(void 0, obj[key], key, obj);
    }
  };
  /**
   * @param {Object} obj
   * @param {Function} f
   * @return {?}
   */
  var isNull = function(obj, f) {
    var key;
    for (key in obj) {
      if (f.call(void 0, obj[key], key, obj)) {
        return true;
      }
    }
    return false;
  };
  /**
   * @param {Object} obj
   * @param {?} target
   * @return {?}
   */
  var i = function(obj, target) {
    return null !== obj && target in obj;
  };
  /**
   * @param {?} elems
   * @param {string} type
   * @return {?}
   */
  var removeEventListener = function(elems, type) {
    var i;
    for (i in elems) {
      if (elems[i] == type) {
        return true;
      }
    }
    return false;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var setAttribute = function(value) {
    var k;
    for (k in value) {
      return false;
    }
    return true;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var forceArray = function(obj) {
    var old = {};
    var name;
    for (name in obj) {
      old[name] = obj[name];
    }
    return old;
  };
  /** @type {Array.<string>} */
  var file2indices = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  /**
   * @param {Object} target
   * @param {Object} parent
   * @return {undefined}
   */
  var _find = function(target, parent) {
    var j;
    var source;
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      source = arguments[i];
      for (j in source) {
        target[j] = source[j];
      }
      /** @type {number} */
      var jX = 0;
      for (;jX < file2indices.length;jX++) {
        /** @type {string} */
        j = file2indices[jX];
        if (Object.prototype.hasOwnProperty.call(source, j)) {
          target[j] = source[j];
        }
      }
    }
  };
  var uri;
  a: {
    var nav = global.navigator;
    if (nav) {
      var userAgent = nav.userAgent;
      if (userAgent) {
        uri = userAgent;
        break a;
      }
    }
    /** @type {string} */
    uri = "";
  }
  /**
   * @param {string} str
   * @return {?}
   */
  var agent_contains = function(str) {
    return-1 != uri.indexOf(str);
  };
  /**
   * @param {?} source
   * @return {?}
   */
  var lex = function(source) {
    /** @type {RegExp} */
    var linePattern = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g;
    /** @type {Array} */
    var buffer = [];
    var sourceKeys;
    for (;sourceKeys = linePattern.exec(source);) {
      buffer.push([sourceKeys[1], sourceKeys[2], sourceKeys[3] || void 0]);
    }
    return buffer;
  };
  /**
   * @return {?}
   */
  var createTextNode = function() {
    return agent_contains("Trident") || agent_contains("MSIE");
  };
  /**
   * @return {?}
   */
  var client = function() {
    return(agent_contains("Chrome") || agent_contains("CriOS")) && !agent_contains("Edge");
  };
  /**
   * @return {?}
   */
  var detect = function() {
    /**
     * @param {(Array|string)} name
     * @return {?}
     */
    function getParameterByName(name) {
      name = last(name, index);
      return options[name] || "";
    }
    var value = uri;
    if (createTextNode()) {
      return parseText(value);
    }
    value = lex(value);
    var options = {};
    forEach(value, function(match) {
      options[match[0]] = match[1];
    });
    var index = partial(i, options);
    return agent_contains("Opera") ? getParameterByName(["Version", "Opera"]) : agent_contains("Edge") ? getParameterByName(["Edge"]) : client() ? getParameterByName(["Chrome", "CriOS"]) : (value = value[2]) && value[1] || "";
  };
  /**
   * @param {Object} tag
   * @return {?}
   */
  var parseText = function(tag) {
    /** @type {(Array.<string>|null)} */
    var node = /rv: *([\d\.]*)/.exec(tag);
    if (node && node[1]) {
      return node[1];
    }
    /** @type {string} */
    node = "";
    /** @type {(Array.<string>|null)} */
    var nodes = /MSIE +([\d\.]+)/.exec(tag);
    if (nodes && nodes[1]) {
      if (tag = /Trident\/(\d.\d)/.exec(tag), "7.0" == nodes[1]) {
        if (tag && tag[1]) {
          switch(tag[1]) {
            case "4.0":
              /** @type {string} */
              node = "8.0";
              break;
            case "5.0":
              /** @type {string} */
              node = "9.0";
              break;
            case "6.0":
              /** @type {string} */
              node = "10.0";
              break;
            case "7.0":
              /** @type {string} */
              node = "11.0";
          }
        } else {
          /** @type {string} */
          node = "7.0";
        }
      } else {
        /** @type {string} */
        node = nodes[1];
      }
    }
    return node;
  };
  /**
   * @return {?}
   */
  var getDevice = function() {
    return agent_contains("iPhone") && (!agent_contains("iPod") && !agent_contains("iPad"));
  };
  /**
   * @param {?} event
   * @return {?}
   */
  var fix = function(event) {
    fix[" "](event);
    return event;
  };
  /** @type {function (): undefined} */
  fix[" "] = clearedOnReadyStateChange;
  /**
   * @param {Object} a
   * @param {string} key
   * @return {?}
   */
  var equal = function(a, key) {
    try {
      return fix(a[key]), true;
    } catch (c) {
    }
    return false;
  };
  /**
   * @param {number} name
   * @param {Function} definition
   * @return {?}
   */
  var define = function(name, definition) {
    var context = buffer_canvas_ctx;
    return Object.prototype.hasOwnProperty.call(context, name) ? context[name] : context[name] = definition(name);
  };
  var sz = agent_contains("Opera");
  var sx = createTextNode();
  var sy = agent_contains("Edge");
  var expectationResult = sy || sx;
  var opt_domHelper = agent_contains("Gecko") && (!(-1 != uri.toLowerCase().indexOf("webkit") && !agent_contains("Edge")) && (!(agent_contains("Trident") || agent_contains("MSIE")) && !agent_contains("Edge")));
  /** @type {boolean} */
  var qsaAvail = -1 != uri.toLowerCase().indexOf("webkit") && !agent_contains("Edge");
  var useQSA = qsaAvail && agent_contains("Mobile");
  var length = agent_contains("Macintosh");
  var bulk = agent_contains("Windows");
  var params = agent_contains("Android");
  var tz = getDevice();
  var tx = agent_contains("iPad");
  var ty = agent_contains("iPod");
  var mat = getDevice() || (agent_contains("iPad") || agent_contains("iPod"));
  /**
   * @return {?}
   */
  var iframeCssFixes = function() {
    var doc = global.document;
    return doc ? doc.documentMode : void 0;
  };
  var file;
  a: {
    /** @type {string} */
    var version = "";
    var arr = function() {
      var expectedArgs = uri;
      if (opt_domHelper) {
        return/rv\:([^\);]+)(\)|;)/.exec(expectedArgs);
      }
      if (sy) {
        return/Edge\/([\d\.]+)/.exec(expectedArgs);
      }
      if (sx) {
        return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(expectedArgs);
      }
      if (qsaAvail) {
        return/WebKit\/(\S+)/.exec(expectedArgs);
      }
      if (sz) {
        return/(?:Version)[ \/]?(\S+)/.exec(expectedArgs);
      }
    }();
    if (arr) {
      version = arr ? arr[1] : "";
    }
    if (sx) {
      var docMode = iframeCssFixes();
      if (null != docMode && docMode > parseFloat(version)) {
        /** @type {string} */
        file = String(docMode);
        break a;
      }
    }
    file = version;
  }
  var cDigit = file;
  var buffer_canvas_ctx = {};
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var attr = function(opt_attributes) {
    return define(opt_attributes, function() {
      return 0 <= parser(cDigit, opt_attributes);
    });
  };
  var sizeAsString;
  var DOC = global.document;
  sizeAsString = DOC && sx ? iframeCssFixes() || ("CSS1Compat" == DOC.compatMode ? parseInt(cDigit, 10) : 5) : void 0;
  var index = agent_contains("Firefox");
  var err = getDevice() || agent_contains("iPod");
  var err2 = agent_contains("iPad");
  var sf = agent_contains("Android") && !(client() || (agent_contains("Firefox") || (agent_contains("Opera") || agent_contains("Silk"))));
  var cl = client();
  var uf = agent_contains("Safari") && (!(client() || (agent_contains("Coast") || (agent_contains("Opera") || (agent_contains("Edge") || (agent_contains("Silk") || agent_contains("Android")))))) && !(getDevice() || (agent_contains("iPad") || agent_contains("iPod"))));
  /** @type {null} */
  var props = null;
  var dom = opt_domHelper || (qsaAvail && !uf || (sz || "function" == typeof global.btoa));
  /**
   * @param {string} s
   * @return {?}
   */
  var quote = function(s) {
    return/^\s*$/.test(s) ? false : /^[\],:{}\s\u2028\u2029]*$/.test(s.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  };
  /**
   * @param {string} str
   * @return {?}
   */
  var encodeURIComponent = function(str) {
    /** @type {string} */
    str = String(str);
    if (quote(str)) {
      try {
        return eval("(" + str + ")");
      } catch (b) {
      }
    }
    throw Error("Invalid JSON string: " + str);
  };
  /**
   * @param {?} opt_attributes
   * @return {?}
   */
  var url = function(opt_attributes) {
    /** @type {Array} */
    var sb = [];
    l(new sh, opt_attributes, sb);
    return sb.join("");
  };
  /**
   * @return {undefined}
   */
  var sh = function() {
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {Object} value
   * @param {Array} sb
   * @return {undefined}
   */
  var l = function(deepDataAndEvents, value, sb) {
    if (null == value) {
      sb.push("null");
    } else {
      if ("object" == typeof value) {
        if (isFunction(value)) {
          /** @type {Object} */
          var v = value;
          value = v.length;
          sb.push("[");
          /** @type {string} */
          var json = "";
          /** @type {number} */
          var member = 0;
          for (;member < value;member++) {
            sb.push(json);
            l(deepDataAndEvents, v[member], sb);
            /** @type {string} */
            json = ",";
          }
          sb.push("]");
          return;
        }
        if (value instanceof String || (value instanceof Number || value instanceof Boolean)) {
          /** @type {*} */
          value = value.valueOf();
        } else {
          sb.push("{");
          /** @type {string} */
          json = "";
          for (v in value) {
            if (Object.prototype.hasOwnProperty.call(value, v)) {
              member = value[v];
              if ("function" != typeof member) {
                sb.push(json);
                b(v, sb);
                sb.push(":");
                l(deepDataAndEvents, member, sb);
                /** @type {string} */
                json = ",";
              }
            }
          }
          sb.push("}");
          return;
        }
      }
      switch(typeof value) {
        case "string":
          b(value, sb);
          break;
        case "number":
          sb.push(isFinite(value) && !isNaN(value) ? String(value) : "null");
          break;
        case "boolean":
          sb.push(String(value));
          break;
        case "function":
          sb.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof value);;
      }
    }
  };
  var builtInOps = {
    '"' : '\\"',
    "\\" : "\\\\",
    "/" : "\\/",
    "\b" : "\\b",
    "\f" : "\\f",
    "\n" : "\\n",
    "\r" : "\\r",
    "\t" : "\\t",
    "\x0B" : "\\u000b"
  };
  /** @type {RegExp} */
  var rCRLF = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  /**
   * @param {string} val
   * @param {Array} n
   * @return {undefined}
   */
  var b = function(val, n) {
    n.push('"', val.replace(rCRLF, function(ch) {
      var channel = builtInOps[ch];
      if (!channel) {
        /** @type {string} */
        channel = "\\u" + (ch.charCodeAt(0) | 65536).toString(16).substr(1);
        /** @type {string} */
        builtInOps[ch] = channel;
      }
      return channel;
    }), '"');
  };
  /**
   * @return {?}
   */
  var emit = function() {
    return global.googletag || (global.googletag = {});
  };
  /**
   * @param {string} method
   * @param {Function} type
   * @return {undefined}
   */
  var reply = function(method, type) {
    var methods = emit();
    if (!methods.hasOwnProperty(method)) {
      /** @type {Function} */
      methods[method] = type;
    }
  };
  /**
   * @param {HTMLElement} win
   * @param {Function} callback
   * @return {undefined}
   */
  var contentLoaded = function(win, callback) {
    if (win.addEventListener) {
      win.addEventListener("load", callback, false);
    } else {
      if (win.attachEvent) {
        win.attachEvent("onload", callback);
      }
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {Function} handler
   * @return {undefined}
   */
  var addListener = function(target, handler) {
    if (target.addEventListener) {
      target.addEventListener("beforeunload", handler, false);
    } else {
      if (target.attachEvent) {
        target.attachEvent("onbeforeunload", handler);
      }
    }
  };
  /**
   * @param {?} socket
   * @param {Node} opts
   * @return {undefined}
   */
  var JSONPPolling = function(socket, opts) {
    this.l = socket;
    this.j = opts || [];
  };
  /**
   * @return {?}
   */
  JSONPPolling.prototype.getMessageId = function() {
    return this.l;
  };
  /**
   * @return {?}
   */
  JSONPPolling.prototype.getMessageArgs = function() {
    return this.j;
  };
  /**
   * @param {?} index
   * @param {?} value
   * @param {Node} elementName
   * @param {string} v
   * @param {Node} j
   * @return {undefined}
   */
  var Element = function(index, value, elementName, v, j) {
    /** @type {Date} */
    this.l = new Date;
    this.v = v || null;
    this.u = elementName || null;
    this.m = index;
    this.o = value;
    this.j = j || null;
  };
  self = Element.prototype;
  /**
   * @return {?}
   */
  self.getSlot = function() {
    return this.v;
  };
  /**
   * @return {?}
   */
  self.getService = function() {
    return this.u;
  };
  /**
   * @return {?}
   */
  self.getLevel = function() {
    return this.m;
  };
  /**
   * @return {?}
   */
  self.getTimestamp = function() {
    return this.l;
  };
  /**
   * @return {?}
   */
  self.getMessage = function() {
    return this.o;
  };
  /**
   * @return {?}
   */
  self.getReference = function() {
    return this.j;
  };
  /** @type {Array} */
  var sample = ["Debug", "Info", "Warning", "Error", "Fatal"];
  /**
   * @return {?}
   */
  Element.prototype.toString = function() {
    /** @type {string} */
    var callStr = this.l.toTimeString() + ": " + sample[this.m] + ": " + this.o;
    if (this.j) {
      callStr += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.";
    }
    return callStr;
  };
  /**
   * @return {undefined}
   */
  var app = function() {
    /** @type {Array} */
    this.j = [];
  };
  /**
   * @return {?}
   */
  app.prototype.getAllEvents = function() {
    return this.j;
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  app.prototype.getEventsByService = function(dataAndEvents) {
    return removeEmpty(this, function(inSource) {
      return inSource.getService() === dataAndEvents;
    });
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  app.prototype.getEventsBySlot = function(dataAndEvents) {
    return removeEmpty(this, function(p) {
      return p.getSlot() === dataAndEvents;
    });
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  app.prototype.getEventsByLevel = function(dataAndEvents) {
    return removeEmpty(this, function(logRecord) {
      return logRecord.getLevel() >= dataAndEvents;
    });
  };
  /**
   * @param {Object} array
   * @param {Function} push
   * @return {?}
   */
  var removeEmpty = function(array, push) {
    /** @type {Array} */
    var ret = [];
    /** @type {number} */
    var ii = 0;
    for (;ii < array.j.length;++ii) {
      if (push(array.j[ii])) {
        ret.push(array.j[ii]);
      }
    }
    return ret;
  };
  /**
   * @param {number} message
   * @param {string} msgString
   * @param {string} recurring
   * @param {string} name
   * @param {number} obj
   * @return {?}
   */
  app.prototype.log = function(message, msgString, recurring, name, obj) {
    message = new Element(message, msgString, recurring, name, obj);
    this.j.push(message);
    return message;
  };
  /**
   * @param {string} msg
   * @param {(Array|string)} recurring
   * @param {string} condition
   * @param {?} data
   * @return {?}
   */
  app.prototype.info = function(msg, recurring, condition, data) {
    return this.log(1, msg, recurring, condition, data);
  };
  /**
   * @param {?} msg
   * @param {(Array|string)} recurring
   * @param {Object} label
   * @param {number} walkers
   * @return {?}
   */
  app.prototype.$a = function(msg, recurring, label, walkers) {
    return this.log(2, msg, recurring, label, walkers);
  };
  /**
   * @param {string} msg
   * @param {(Array|string)} recurring
   * @param {string} label
   * @param {number} data
   * @return {?}
   */
  app.prototype.error = function(msg, recurring, label, data) {
    return this.log(3, msg, recurring, label, data);
  };
  /**
   * @return {?}
   */
  var scale = function() {
    var debug_log = emit();
    return debug_log.debug_log || (debug_log.debug_log = new app);
  };
  reply("getEventLog", scale);
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var once = function(opt_attributes) {
    return function() {
      return new JSONPPolling(opt_attributes, []);
    };
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var createDom = function(opt_attributes) {
    return function(dataAndEvents) {
      return new JSONPPolling(opt_attributes, [dataAndEvents]);
    };
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var putter = function(opt_attributes) {
    return function(dataAndEvents, deepDataAndEvents) {
      return new JSONPPolling(opt_attributes, [dataAndEvents, deepDataAndEvents]);
    };
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  var isType = function(opt_attributes) {
    return function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
      return new JSONPPolling(opt_attributes, [dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist]);
    };
  };
  /**
   * @param {string} name
   * @return {?}
   */
  var func = function(name) {
    return "[" + map(name, function(value) {
      return push(value) ? "'" + value + "'" : isFunction(value) ? func(value) : String(value);
    }).join(", ") + "]";
  };
  var appendModelPrefix = once(1);
  var toInt = createDom(2);
  var argsToString = createDom(3);
  var getResponseSummary = createDom(4);
  var summary = createDom(5);
  var toVLQSigned = createDom(6);
  var rev = once(8);
  var isObject = isType(9);
  var updateFunc = isType(10);
  var loopMatch = putter(12);
  var accept = createDom(13);
  var getArrayBuffer = createDom(14);
  var internalCallback = once(16);
  var setCtx = isType(17);
  var isUndefinedOrNull = once(19);
  var compiled = createDom(20);
  var instrumentAttrSetter = createDom(21);
  var getPath = putter(22);
  var _ = putter(23);
  var getList = createDom(26);
  var statement = createDom(27);
  var objectToString = createDom(28);
  var enc = createDom(30);
  var hasOwnProperty = putter(31);
  var asyncForEach = once(34);
  var transformFn = createDom(35);
  var condition = isType(36);
  var addAttributeTemplate = isType(37);
  var proxy = once(38);
  var checkMethod = createDom(39);
  var defaultLibName = putter(40);
  var newBindings = once(42);
  var resetQueues = putter(43);
  var addLineNumbers = once(44);
  var help = once(45);
  var sansSemicolonTemplate = createDom(46);
  var _t = createDom(47);
  var isF = createDom(48);
  var scrollTop = once(49);
  var is_identifier_char = once(50);
  var parseBody = once(52);
  var str = putter(53);
  var errcb = putter(54);
  var formatMessage = createDom(55);
  var closurefromCode = putter(57);
  var dateFilter = isType(58);
  var compare = createDom(59);
  var throttledUpdate = createDom(60);
  var traverseNode = putter(61);
  var exposeValue = putter(62);
  var __ = createDom(63);
  var __extends = putter(64);
  var clearSelection = createDom(65);
  var first = once(66);
  var hasVirtualBindings = once(67);
  var fadeOut = once(68);
  var _isLocalStorageAvailable = once(69);
  var getData = once(70);
  var consume = once(71);
  var clearPageTransitionStack = once(72);
  var padd = createDom(74);
  var replaceState = createDom(75);
  var contest = isType(77);
  var indentMultiline = createDom(78);
  var customQuote = once(79);
  var easing = createDom(80);
  var oldErrorHandler = putter(82);
  var makeStructured = putter(84);
  var processMessage = createDom(85);
  var cancelAnimationFrame = once(87);
  var dataAttr = isType(88);
  var stripBOM = createDom(90);
  var pipe = createDom(92);
  var getListeners = createDom(93);
  var addCharsToCharClass = createDom(94);
  var safe_add = createDom(95);
  /**
   * @param {string} number
   * @param {Array} name
   * @return {?}
   */
  var call = function(number, name) {
    name = func(name);
    name = name.substring(1, name.length - 1);
    return new JSONPPolling(96, [number, name]);
  };
  var theCallback = createDom(97);
  var checkProd = createDom(98);
  var y = createDom(99);
  var expression = createDom(100);
  var put = putter(101);
  var escapeText = putter(102);
  var generateError = putter(103);
  var getActual = createDom(104);
  /**
   * @param {string} v
   * @param {string} width
   * @param {string} x
   * @return {undefined}
   */
  var VBarchart = function(v, width, x) {
    /** @type {string} */
    this.label = v;
    /** @type {number} */
    this.type = 4;
    /** @type {string} */
    this.eventId = width;
    /** @type {string} */
    this.value = x;
  };
  /**
   * @param {number} throwable
   * @return {undefined}
   */
  var info = function(throwable) {
    this.l = manipulationTarget();
    /** @type {boolean} */
    this.u = Math.random() < throwable;
    /** @type {Array} */
    this.events = [];
    this.w = {};
  };
  var manipulationTarget = global.performance && global.performance.now ? bind(global.performance.now, global.performance) : onFrame;
  /**
   * @param {Node} scope
   * @return {undefined}
   */
  info.prototype.install = function(scope) {
    scope = scope || window;
    scope.google_js_reporting_queue = scope.google_js_reporting_queue || [];
    this.events = scope.google_js_reporting_queue;
  };
  /**
   * @param {Object} position
   * @return {undefined}
   */
  info.prototype.v = function(position) {
    this.events.push(position);
  };
  /**
   * @param {Object} data
   * @param {Function} name
   * @param {number} y
   * @return {undefined}
   */
  var setter = function(data, name, y) {
    if (data.u) {
      var left = data.w[name] || 0;
      var x = left + 1;
      if (x > left) {
        data.w[name] = x;
      }
      data.v(new VBarchart(name, x, y));
    }
  };
  /**
   * @param {Object} self
   * @param {?} n
   * @param {Function} cur
   * @return {?}
   */
  var sibling = function(self, n, cur) {
    var target = manipulationTarget();
    cur = cur();
    var x = manipulationTarget();
    setter(self, n, x - self.l - (target - self.l));
    return cur;
  };
  /**
   * @param {?} element
   * @param {Function} fn
   * @return {?}
   */
  var compose = function(element, fn) {
    return bind(function() {
      /** @type {Array} */
      var newArgs = [];
      /** @type {number} */
      var i = 0;
      for (;i < arguments.length;++i) {
        newArgs[i] = arguments[i];
      }
      return sibling(this, element, function() {
        return fn.apply(void 0, newArgs);
      });
    }, datum);
  };
  /**
   * @param {?} evt
   * @return {?}
   */
  var getTarget = function(evt) {
    try {
      return!!evt && (null != evt.location.href && equal(evt, "foo"));
    } catch (b) {
      return false;
    }
  };
  /**
   * @param {Element} d
   * @param {string} path
   * @return {undefined}
   */
  var loadScript = function(d, path) {
    var el = d.createElement("script");
    /** @type {string} */
    el.src = path;
    if (d = d.getElementsByTagName("script")[0]) {
      if (d.parentNode) {
        d.parentNode.insertBefore(el, d);
      }
    }
  };
  /**
   * @param {Array} precision
   * @param {number} value
   * @return {?}
   */
  var floor = function(precision, value) {
    if (!(1E-4 > Math.random())) {
      /** @type {number} */
      var count = Math.random();
      if (count < value) {
        value = window;
        try {
          /** @type {Uint32Array} */
          var _rnds = new Uint32Array(1);
          value.crypto.getRandomValues(_rnds);
          /** @type {number} */
          count = _rnds[0] / 65536 / 65536;
        } catch (e) {
          /** @type {number} */
          count = Math.random();
        }
        return precision[Math.floor(count * precision.length)];
      }
    }
    return null;
  };
  /**
   * @param {?} obj
   * @param {Function} fn
   * @param {Object} bind
   * @return {undefined}
   */
  var each = function(obj, fn, bind) {
    var key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(bind, obj[key], key, obj);
      }
    }
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var defaults = function(obj) {
    /** @type {number} */
    var ret = 0;
    each(obj, function() {
      ret++;
    });
    return ret;
  };
  /**
   * @param {?} funcs
   * @return {?}
   */
  var rFlatten = function(funcs) {
    /** @type {Array} */
    var worker = [];
    each(funcs, function(dataAndEvents, v) {
      worker.push(v);
    });
    return worker;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var reject = function(obj) {
    /** @type {Array} */
    var results = [];
    each(obj, function(elem) {
      results.push(elem);
    });
    return results;
  };
  /**
   * @param {string} a
   * @return {?}
   */
  var getChar = function(a) {
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
  /**
   * @param {Object} w
   * @return {?}
   */
  var wrap = function(w) {
    try {
      /** @type {null} */
      var nw = null;
      for (;nw != w;nw = w, w = w.parent) {
        switch(w.location.protocol) {
          case "https:":
            return true;
          case "http:":
          ;
          case "file:":
            return false;
        }
      }
    } catch (c) {
    }
    return true;
  };
  /**
   * @param {?} url
   * @return {?}
   */
  var parseQuery = function(url) {
    if (!url) {
      return "";
    }
    /** @type {RegExp} */
    var regex = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
    try {
      /** @type {(Array.<string>|null)} */
      var matches = regex.exec(decodeURIComponent(url));
      if (matches) {
        return matches[1] && 1 < matches[1].length ? matches[1].substring(1) : "true";
      }
    } catch (d) {
    }
    return "";
  };
  /**
   * @param {string} append
   * @param {string} file
   * @param {string} w
   * @param {string} item
   * @param {string} y
   * @param {string} x
   * @return {?}
   */
  var crop = function(append, file, w, item, y, x) {
    /** @type {string} */
    var str = "";
    if (append) {
      str += append + ":";
    }
    if (w) {
      str += "//";
      if (file) {
        str += file + "@";
      }
      str += w;
      if (item) {
        str += ":" + item;
      }
    }
    if (y) {
      str += y;
    }
    if (x) {
      str += "?" + x;
    }
    return str;
  };
  /** @type {RegExp} */
  var id = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  /**
   * @param {?} param
   * @return {?}
   */
  var random = function(param) {
    return param ? decodeURI(param) : param;
  };
  /** @type {RegExp} */
  var searchString = /#|$/;
  /**
   * @param {string} text
   * @param {string} arr
   * @return {?}
   */
  var search = function(text, arr) {
    var limit = text.search(searchString);
    var i;
    a: {
      /** @type {number} */
      i = 0;
      var index = arr.length;
      for (;0 <= (i = text.indexOf(arr, i)) && i < limit;) {
        var zeroQuoted = text.charCodeAt(i - 1);
        if (38 == zeroQuoted || 63 == zeroQuoted) {
          if (zeroQuoted = text.charCodeAt(i + index), !zeroQuoted || (61 == zeroQuoted || (38 == zeroQuoted || 35 == zeroQuoted))) {
            break a;
          }
        }
        i += index + 1;
      }
      /** @type {number} */
      i = -1;
    }
    if (0 > i) {
      return null;
    }
    index = text.indexOf("&", i);
    if (0 > index || index > limit) {
      index = limit;
    }
    i += arr.length + 1;
    return decodeURIComponent(text.substr(i, index - i).replace(/\+/g, " "));
  };
  /**
   * @param {string} a
   * @return {?}
   */
  var scanPunctuator = function(a) {
    if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
      /** @type {string} */
      a = a[0].toLowerCase();
      /** @type {number} */
      var d = 0;
      /** @type {number} */
      var i = 0;
      for (;i < a.length;++i) {
        /** @type {number} */
        d = 31 * d + a.charCodeAt(i) >>> 0;
      }
      switch(d) {
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
          return 33;
      }
    }
    return-1;
  };
  /**
   * @param {(Array|NodeList)} obj
   * @return {?}
   */
  var getValue = function(obj) {
    if (!obj.length) {
      return 0;
    }
    /** @type {Array} */
    var hash = [];
    /** @type {number} */
    var val = 0;
    for (;33 >= val;val++) {
      /** @type {number} */
      hash[val] = 0;
    }
    /** @type {number} */
    val = obj.length - 1;
    for (;0 <= val;val--) {
      var n = scanPunctuator(obj[val]);
      if (0 <= n) {
        /** @type {number} */
        hash[33 - n] = 1;
      }
    }
    return parseInt(hash.join(""), 2);
  };
  /**
   * @param {?} j
   * @param {?} l
   * @return {undefined}
   */
  var StringType = function(j, l) {
    this.j = j;
    this.l = l;
  };
  /**
   * @param {?} src
   * @param {?} state
   * @param {?} is_comment
   * @return {undefined}
   */
  var token = function(src, state, is_comment) {
    this.url = src;
    this.Ga = state;
    /** @type {boolean} */
    this.Na = !!is_comment;
    /** @type {(null|undefined)} */
    this.depth = isClassOf(void 0) ? void 0 : null;
  };
  /**
   * @param {Node} root
   * @return {undefined}
   */
  var Matrix = function(root) {
    root = (this.l = root || global) || global;
    /** @type {number} */
    this.m = root.top == root ? 1 : getTarget(root.top) ? 2 : 3;
    if (3 != this.m) {
      Date.parse(global.top.document.lastModified);
    }
    this.j = Parser(this.l);
  };
  /**
   * @param {Object} v
   * @param {Array} lines
   * @return {?}
   */
  var next = function(v, lines) {
    /** @type {number} */
    var rv = 0;
    var pad = (v = v.j[Math.max(v.j.length - 1, 0)].url || null) && random(v.match(id)[3] || null);
    /** @type {number} */
    var subLn = Math.min(lines.length, 26);
    /** @type {number} */
    var j = 0;
    for (;j < subLn;j++) {
      if (v = null != lines[j] && random(lines[j].match(id)[3] || null) || "", rv *= 4, v) {
        if (pad && v == pad) {
          rv += 3;
        } else {
          var line;
          a: {
            line = lines[j];
            /** @type {Array} */
            var codeSegments = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i, /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i, /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;++i) {
              if (codeSegments[i].test(line)) {
                /** @type {boolean} */
                line = true;
                break a;
              }
            }
            /** @type {boolean} */
            line = false;
          }
          if (line) {
            rv += 2;
          } else {
            if (v) {
              if (0 <= scanPunctuator(v)) {
                rv += 1;
              }
            }
          }
        }
      }
    }
    return rv;
  };
  /**
   * @param {Node} req
   * @return {?}
   */
  var Parser = function(req) {
    var i = req || global;
    /** @type {Array} */
    var codeSegments = [];
    var tmp;
    /** @type {null} */
    var cur = null;
    do {
      var e = i;
      if (getTarget(e)) {
        tmp = e.location.href;
        cur = e.document && e.document.referrer || null;
      } else {
        /** @type {null} */
        tmp = cur;
        /** @type {null} */
        cur = null;
      }
      codeSegments.push(new token(tmp || "", e));
      try {
        i = e.parent;
      } catch (g) {
        /** @type {null} */
        i = null;
      }
    } while (i && e != i);
    /** @type {number} */
    i = 0;
    /** @type {number} */
    e = codeSegments.length - 1;
    for (;i <= e;++i) {
      /** @type {number} */
      codeSegments[i].depth = e - i;
    }
    e = req || global;
    if (e.location && (e.location.ancestorOrigins && e.location.ancestorOrigins.length == codeSegments.length - 1)) {
      /** @type {number} */
      i = 1;
      for (;i < codeSegments.length;++i) {
        req = codeSegments[i];
        if (!req.url) {
          req.url = e.location.ancestorOrigins[i - 1] || "";
          /** @type {boolean} */
          req.Na = true;
        }
      }
    }
    return codeSegments;
  };
  var is_capturing = function() {
    /** @type {boolean} */
    var a = false;
    try {
      /** @type {Object} */
      var capturing = Object.defineProperty({}, "passive", {
        /**
         * @return {undefined}
         */
        get : function() {
          /** @type {boolean} */
          a = true;
        }
      });
      window.addEventListener("test", null, capturing);
    } catch (c) {
    }
    return a;
  }();
  /**
   * @param {Object} el
   * @param {string} type
   * @param {Function} callback
   * @return {undefined}
   */
  var on = function(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback, is_capturing ? void 0 : isDefined(void 0) ? void 0 : false);
    } else {
      if (el.attachEvent) {
        el.attachEvent("on" + type, callback);
      }
    }
  };
  /**
   * @param {HTMLDocument} target
   * @param {string} eventType
   * @param {?} callback
   * @return {undefined}
   */
  var unbind = function(target, eventType, callback) {
    if (target.removeEventListener) {
      target.removeEventListener(eventType, callback, is_capturing ? void 0 : isDefined(void 0) ? void 0 : false);
    } else {
      if (target.detachEvent) {
        target.detachEvent("on" + eventType, callback);
      }
    }
  };
  /**
   * @param {string} dataAndEvents
   * @param {string} w
   * @param {number} v
   * @param {Object} root
   * @param {Node} obj
   * @return {undefined}
   */
  var _remove_subtree = function(dataAndEvents, w, v, root, obj) {
    this.v = v || 4E3;
    this.m = dataAndEvents || "&";
    this.w = w || ",$";
    this.o = set(root) ? root : "trn";
    this.B = obj || null;
    /** @type {boolean} */
    this.u = false;
    this.l = {};
    /** @type {number} */
    this.A = 0;
    /** @type {Array} */
    this.j = [];
  };
  /**
   * @param {?} data
   * @param {Array} value
   * @return {?}
   */
  var publish = function(data, value) {
    var cache = {};
    /** @type {Array} */
    cache[data] = value;
    return[cache];
  };
  /**
   * @param {Object} m
   * @param {number} expectedNumberOfNonCommentArgs
   * @param {string} data
   * @param {Array} ev
   * @return {undefined}
   */
  var onerror = function(m, expectedNumberOfNonCommentArgs, data, ev) {
    m.j.push(expectedNumberOfNonCommentArgs);
    m.l[expectedNumberOfNonCommentArgs] = publish(data, ev);
  };
  /**
   * @param {Object} data
   * @param {string} value
   * @param {number} index
   * @param {Object} j
   * @return {?}
   */
  var sort = function(data, value, index, j) {
    /** @type {string} */
    value = value + "//" + index + j;
    /** @type {number} */
    var pos = getRefs(data) - j.length - 0;
    if (0 > pos) {
      return "";
    }
    data.j.sort(function(far, near) {
      return far - near;
    });
    /** @type {null} */
    j = null;
    /** @type {string} */
    index = "";
    /** @type {number} */
    var item = 0;
    for (;item < data.j.length;item++) {
      var i = data.j[item];
      var b = data.l[i];
      /** @type {number} */
      var bi = 0;
      for (;bi < b.length;bi++) {
        if (!pos) {
          j = null == j ? i : j;
          break;
        }
        var c = indent(b[bi], data.m, data.w);
        if (c) {
          c = index + c;
          if (pos >= c.length) {
            pos -= c.length;
            value += c;
            index = data.m;
            break;
          } else {
            if (data.u) {
              /** @type {number} */
              index = pos;
              if (c[index - 1] == data.m) {
                --index;
              }
              value += c.substr(0, index);
              index = data.m;
              /** @type {number} */
              pos = 0;
            }
          }
          j = null == j ? i : j;
        }
      }
    }
    /** @type {string} */
    item = "";
    if (data.o) {
      if (null != j) {
        /** @type {string} */
        item = index + data.o + "=" + (data.B || j);
      }
    }
    return value + item + "";
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var getRefs = function(data) {
    if (!data.o) {
      return data.v;
    }
    /** @type {number} */
    var memo = 1;
    var s;
    for (s in data.l) {
      /** @type {number} */
      memo = s.length > memo ? s.length : memo;
    }
    return data.v - data.o.length - memo - data.m.length - 1;
  };
  /**
   * @param {?} obj
   * @param {string} text
   * @param {string} name
   * @param {number} options
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  var indent = function(obj, text, name, options, deepDataAndEvents) {
    /** @type {Array} */
    var headers = [];
    each(obj, function(value, key) {
      if (value = string(value, text, name, options, deepDataAndEvents)) {
        headers.push(key + "=" + value);
      }
    });
    return headers.join(text);
  };
  /**
   * @param {?} str
   * @param {string} value
   * @param {string} paths
   * @param {number} p
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  var string = function(str, value, paths, p, deepDataAndEvents) {
    if (null == str) {
      return "";
    }
    value = value || "&";
    paths = paths || ",$";
    if ("string" == typeof paths) {
      /** @type {Array.<string>} */
      paths = paths.split("");
    }
    if (str instanceof Array) {
      if (p = p || 0, p < paths.length) {
        /** @type {Array} */
        var results = [];
        /** @type {number} */
        var strCounter = 0;
        for (;strCounter < str.length;strCounter++) {
          results.push(string(str[strCounter], value, paths, p + 1, deepDataAndEvents));
        }
        return results.join(paths[p]);
      }
    } else {
      if ("object" == typeof str) {
        return deepDataAndEvents = deepDataAndEvents || 0, 2 > deepDataAndEvents ? encodeURIComponent(indent(str, value, paths, p, deepDataAndEvents + 1)) : "...";
      }
    }
    return encodeURIComponent(String(str));
  };
  /**
   * @param {?} a
   * @param {?} opt_messageObject
   * @param {?} m
   * @param {?} ev
   * @return {undefined}
   */
  var onmessage = function(a, opt_messageObject, m, ev) {
    this.o = a;
    this.l = opt_messageObject;
    this.m = m;
    this.j = ev;
    /** @type {number} */
    this.u = Math.random();
  };
  /**
   * @param {Object} data
   * @param {?} size
   * @param {Object} key
   * @param {boolean} recurring
   * @param {Node} deepDataAndEvents
   * @return {undefined}
   */
  var reduce = function(data, size, key, recurring, deepDataAndEvents) {
    if ((recurring ? data.u : Math.random()) < (deepDataAndEvents || data.j)) {
      try {
        var value;
        if (key instanceof _remove_subtree) {
          /** @type {Object} */
          value = key;
        } else {
          value = new _remove_subtree;
          each(key, function(j, data) {
            var item = value;
            /** @type {number} */
            var i = item.A++;
            j = publish(data, j);
            item.j.push(i);
            /** @type {Array} */
            item.l[i] = j;
          });
        }
        var input = sort(value, data.o, data.l, data.m + size + "&");
        if (input) {
          listen(global, input);
        }
      } catch (k) {
      }
    }
  };
  /**
   * @param {Window} target
   * @param {string} s
   * @return {undefined}
   */
  var listen = function(target, s) {
    if (!target.google_image_requests) {
      /** @type {Array} */
      target.google_image_requests = [];
    }
    var img = target.document.createElement("img");
    /** @type {string} */
    img.src = s;
    target.google_image_requests.push(img);
  };
  /**
   * @param {string} line
   * @param {?} _arg
   * @param {?} parentEl
   * @return {undefined}
   */
  var Text = function(line, _arg, parentEl) {
    /** @type {string} */
    this.m = line;
    this.u = _arg;
    this.l = parentEl;
    this.o = this.j;
  };
  /**
   * @param {string} msg
   * @param {string} message
   * @param {number} error
   * @return {undefined}
   */
  var logError = function(msg, message, error) {
    /** @type {string} */
    this.message = msg;
    this.j = message || "";
    this.l = error || -1;
  };
  /**
   * @param {Object} args
   * @param {string} ctx
   * @param {Function} render
   * @return {?}
   */
  var draw = function(args, ctx, render) {
    var div;
    try {
      div = render();
    } catch (e) {
      var val = args.l;
      try {
        var start = posFromMouse(e);
        val = args.o.call(args, ctx, start, void 0, void 0);
      } catch (memory) {
        args.j("pAR", memory);
      }
      if (!val) {
        throw e;
      }
    } finally {
    }
    return div;
  };
  /**
   * @param {Error} message
   * @param {string} scope
   * @param {Function} fn
   * @return {?}
   */
  var confirm = function(message, scope, fn) {
    return function() {
      /** @type {Array} */
      var newArgs = [];
      /** @type {number} */
      var i = 0;
      for (;i < arguments.length;++i) {
        newArgs[i] = arguments[i];
      }
      return draw(message, scope, function() {
        return fn.apply(void 0, newArgs);
      });
    };
  };
  /**
   * @param {Object} sx
   * @param {Object} data
   * @param {Node} deepDataAndEvents
   * @param {number} c
   * @param {(Document|string)} a
   * @return {?}
   */
  Text.prototype.j = function(sx, data, deepDataAndEvents, c, a) {
    try {
      var size = a || this.u;
      var msg = new _remove_subtree;
      /** @type {boolean} */
      msg.u = true;
      onerror(msg, 1, "context", sx);
      if (!(data instanceof logError)) {
        data = posFromMouse(data);
      }
      onerror(msg, 2, "msg", data.message.substring(0, 512));
      if (data.j) {
        onerror(msg, 3, "file", data.j);
      }
      if (0 < data.l) {
        onerror(msg, 4, "line", data.l.toString());
      }
      data = {};
      if (c) {
        try {
          c(data);
        } catch (x) {
        }
      }
      /** @type {Array} */
      c = [data];
      msg.j.push(5);
      /** @type {number} */
      msg.l[5] = c;
      var h;
      var map = Parser();
      var result = new token(global.location.href, global, false);
      /** @type {number} */
      var n = map.length - 1;
      /** @type {number} */
      c = n;
      for (;0 <= c;--c) {
        var val = map[c];
        if (val.url && !val.Na) {
          result = val;
          break;
        }
      }
      /** @type {null} */
      val = null;
      var w = map.length && map[n].url;
      if (0 != result.depth) {
        if (w) {
          val = map[n];
        }
      }
      h = new StringType(result, val);
      if (h.l) {
        onerror(msg, 6, "top", h.l.url || "");
      }
      onerror(msg, 7, "url", h.j.url || "");
      reduce(this.m, size, msg, false, deepDataAndEvents);
    } catch (e) {
      try {
        reduce(this.m, size, {
          context : "ecmserr",
          rctx : sx,
          msg : fn(e),
          url : h.j.url
        }, false, deepDataAndEvents);
      } catch (U) {
      }
    }
    return this.l;
  };
  /**
   * @param {Object} e
   * @return {?}
   */
  var posFromMouse = function(e) {
    return new logError(fn(e), e.fileName, e.lineNumber);
  };
  /**
   * @param {Object} arg
   * @return {?}
   */
  var fn = function(arg) {
    var t = arg.toString();
    if (arg.name) {
      if (-1 == t.indexOf(arg.name)) {
        t += ": " + arg.name;
      }
    }
    if (arg.message) {
      if (-1 == t.indexOf(arg.message)) {
        t += ": " + arg.message;
      }
    }
    if (arg.stack) {
      t = resolvePath(arg.stack, t);
    }
    return t;
  };
  /**
   * @param {string} expr
   * @param {string} path
   * @return {?}
   */
  var resolvePath = function(expr, path) {
    try {
      if (-1 == expr.indexOf(path)) {
        /** @type {string} */
        expr = path + "\n" + expr;
      }
      var old;
      for (;expr != old;) {
        /** @type {string} */
        old = expr;
        expr = expr.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
      }
      return expr.replace(/\n */g, "\n");
    } catch (d) {
      return path;
    }
  };
  /**
   * @param {boolean} result
   * @return {?}
   */
  var countdown = function(result) {
    return function() {
      return result;
    };
  };
  /**
   * @param {?} $q
   * @return {?}
   */
  var factory = function($q) {
    /** @type {Arguments} */
    var functions = arguments;
    /** @type {number} */
    var length = functions.length;
    return function() {
      /** @type {number} */
      var i = 0;
      for (;i < length;i++) {
        if (!functions[i].apply(this, arguments)) {
          return false;
        }
      }
      return true;
    };
  };
  /**
   * @param {Function} callback
   * @return {?}
   */
  var singleFire = function(callback) {
    return function() {
      return!callback.apply(this, arguments);
    };
  };
  /**
   * @param {Function} fn
   * @param {?} opt_context
   * @return {?}
   */
  var blur = function(fn, opt_context) {
    /** @type {number} */
    var name = 0;
    /** @type {boolean} */
    var d = false;
    /** @type {Array} */
    var args = [];
    /**
     * @return {undefined}
     */
    var func = function() {
      /** @type {number} */
      name = 0;
      if (d) {
        /** @type {boolean} */
        d = false;
        trigger();
      }
    };
    /**
     * @return {undefined}
     */
    var trigger = function() {
      name = global.setTimeout(func, 200);
      fn.apply(opt_context, args);
    };
    return function(dataAndEvents) {
      /** @type {Arguments} */
      args = arguments;
      if (name) {
        /** @type {boolean} */
        d = true;
      } else {
        trigger();
      }
    };
  };
  /**
   * @return {?}
   */
  var isMobile = function() {
    return agent_contains("iPad") || (agent_contains("Android") && !agent_contains("Mobile") || agent_contains("Silk"));
  };
  /**
   * @return {?}
   */
  var which = function() {
    return!(!isMobile() && (agent_contains("iPod") || (agent_contains("iPhone") || (agent_contains("Android") || agent_contains("IEMobile"))))) && !isMobile();
  };
  var memory = function() {
    var paramsMatch;
    return bulk ? (paramsMatch = /Windows NT ([0-9.]+)/, (paramsMatch = paramsMatch.exec(uri)) ? paramsMatch[1] : "0") : length ? (paramsMatch = /10[_.][0-9_.]+/, (paramsMatch = paramsMatch.exec(uri)) ? paramsMatch[0].replace(/_/g, ".") : "10") : params ? (paramsMatch = /Android\s+([^\);]+)(\)|;)/, (paramsMatch = paramsMatch.exec(uri)) ? paramsMatch[1] : "") : tz || (tx || ty) ? (paramsMatch = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (paramsMatch = paramsMatch.exec(uri)) ? paramsMatch[1].replace(/_/g, ".") : 
    "") : "";
  }();
  /**
   * @param {Object} args
   * @param {string} method
   * @param {?} name
   * @return {undefined}
   */
  var fetch = function(args, method, name) {
    if ("" != method) {
      if (name) {
        if (args.j.hasOwnProperty(name)) {
          /** @type {string} */
          args.j[name] = method;
        }
      } else {
        /** @type {boolean} */
        args.l[method] = true;
      }
    }
  };
  /**
   * @param {?} object
   * @param {?} property
   * @return {?}
   */
  var parseOptions = function(object, property) {
    return object.j.hasOwnProperty(property) ? object.j[property] : "";
  };
  /**
   * @return {?}
   */
  var filter = function() {
    var me = typePattern;
    /** @type {Array} */
    var copy = [];
    each(me.l, function(dataAndEvents, val) {
      copy.push(val);
    });
    each(me.j, function(val) {
      if ("" != val) {
        copy.push(val);
      }
    });
    return copy;
  };
  var scrubbed = {
    1 : "pagead2.googlesyndication.com",
    2 : "pubads.g.doubleclick.net",
    3 : "securepubads.g.doubleclick.net",
    7 : 0,
    10 : 0,
    13 : 1500,
    16 : 0,
    17 : 0,
    20 : 0,
    23 : 0.001,
    24 : 200,
    27 : 0,
    28 : 0,
    29 : 0,
    33 : "pagead2.googlesyndication.com",
    34 : 0,
    36 : false,
    37 : 0,
    38 : 0.001,
    46 : false,
    47 : 0,
    53 : "",
    54 : 0,
    57 : 0,
    58 : 0,
    60 : 0,
    61 : 0,
    63 : 0,
    65 : 0,
    66 : 0,
    67 : 0,
    68 : 0,
    69 : 0,
    70 : 0,
    71 : 0,
    72 : 0,
    73 : 0,
    74 : 0,
    75 : "",
    76 : "",
    77 : 0,
    78 : 0,
    88 : 0,
    79 : 0,
    80 : 0,
    86 : 0,
    81 : 0,
    82 : 0,
    83 : 0,
    84 : 0,
    85 : 0,
    87 : 0,
    89 : 0,
    90 : 0,
    91 : 0,
    92 : 0,
    93 : 0,
    94 : 0,
    95 : 0,
    96 : 0,
    97 : 0
  };
  scrubbed[6] = wrap(window);
  /** @type {number} */
  scrubbed[49] = (new Date).getTime();
  /**
   * @return {undefined}
   */
  var ctor = function() {
    this.j = forceArray(scrubbed);
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  ctor.prototype.get = function(opt_attributes) {
    return this.j[opt_attributes];
  };
  /**
   * @param {number} key
   * @param {number} value
   * @return {undefined}
   */
  ctor.prototype.set = function(key, value) {
    /** @type {number} */
    this.j[key] = value;
  };
  HOP(ctor);
  var methods = ctor.getInstance().j;
  var suite = emit();
  var tests = suite._vars_;
  var testName;
  for (testName in tests) {
    methods[testName] = tests[testName];
  }
  suite._vars_ = methods;
  var doc = document;
  var win = window;
  /**
   * @return {undefined}
   */
  var Buffer = function() {
    /** @type {string} */
    this.Aa = "";
    this.Wa = ObjectExpression;
  };
  /** @type {boolean} */
  Buffer.prototype.Ma = true;
  /**
   * @return {?}
   */
  Buffer.prototype.za = function() {
    return this.Aa;
  };
  /** @type {RegExp} */
  var rchecked = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
  var ObjectExpression = {};
  /**
   * @param {string} fn
   * @return {?}
   */
  var numeric = function(fn) {
    var on = new Buffer;
    /** @type {string} */
    on.Aa = fn;
    return on;
  };
  numeric("about:blank");
  /**
   * @return {undefined}
   */
  var Color = function() {
    this.Xa = Literal;
  };
  /** @type {boolean} */
  Color.prototype.Ma = true;
  /**
   * @return {?}
   */
  Color.prototype.za = function() {
    return "";
  };
  var Literal = {};
  /**
   * @param {number} x
   * @param {number} y
   * @return {undefined}
   */
  var Rect = function(x, y) {
    this.x = set(x) ? x : 0;
    this.y = set(y) ? y : 0;
  };
  /**
   * @return {?}
   */
  Rect.prototype.ceil = function() {
    /** @type {number} */
    this.x = Math.ceil(this.x);
    /** @type {number} */
    this.y = Math.ceil(this.y);
    return this;
  };
  /**
   * @return {?}
   */
  Rect.prototype.floor = function() {
    /** @type {number} */
    this.x = Math.floor(this.x);
    /** @type {number} */
    this.y = Math.floor(this.y);
    return this;
  };
  /**
   * @return {?}
   */
  Rect.prototype.round = function() {
    /** @type {number} */
    this.x = Math.round(this.x);
    /** @type {number} */
    this.y = Math.round(this.y);
    return this;
  };
  /**
   * @param {?} x
   * @param {?} y
   * @return {undefined}
   */
  var Vector = function(x, y) {
    this.width = x;
    this.height = y;
  };
  /**
   * @return {?}
   */
  Vector.prototype.j = function() {
    return this.width * this.height;
  };
  /**
   * @return {?}
   */
  Vector.prototype.ceil = function() {
    /** @type {number} */
    this.width = Math.ceil(this.width);
    /** @type {number} */
    this.height = Math.ceil(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  Vector.prototype.floor = function() {
    /** @type {number} */
    this.width = Math.floor(this.width);
    /** @type {number} */
    this.height = Math.floor(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  Vector.prototype.round = function() {
    /** @type {number} */
    this.width = Math.round(this.width);
    /** @type {number} */
    this.height = Math.round(this.height);
    return this;
  };
  /** @type {boolean} */
  var He = !sx || 9 <= Number(sizeAsString);
  var __GCC__INCLUDE_EXTRAS__ = !opt_domHelper && !sx || (sx && 9 <= Number(sizeAsString) || opt_domHelper && attr("1.9.1"));
  if (sx) {
    attr("9");
  }
  var radix = sx || (sz || qsaAvail);
  /**
   * @param {string} el
   * @return {?}
   */
  var getPosition = function(el) {
    return el ? new Mirror(getStyle(el)) : mirror || (mirror = new Mirror);
  };
  /**
   * @param {Element} t
   * @return {?}
   */
  var errorCallback = function(t) {
    var ownerDocument = document;
    return push(t) ? ownerDocument.getElementById(t) : t;
  };
  /**
   * @param {Element} node
   * @param {Object} source
   * @return {undefined}
   */
  var setNodeAttributes = function(node, source) {
    isPlainObject(source, function(val, name) {
      if ("style" == name) {
        node.style.cssText = val;
      } else {
        if ("class" == name) {
          node.className = val;
        } else {
          if ("for" == name) {
            node.htmlFor = val;
          } else {
            if (names.hasOwnProperty(name)) {
              node.setAttribute(names[name], val);
            } else {
              if (0 == name.lastIndexOf("aria-", 0) || 0 == name.lastIndexOf("data-", 0)) {
                node.setAttribute(name, val);
              } else {
                node[name] = val;
              }
            }
          }
        }
      }
    });
  };
  var names = {
    cellpadding : "cellPadding",
    cellspacing : "cellSpacing",
    colspan : "colSpan",
    frameborder : "frameBorder",
    height : "height",
    maxlength : "maxLength",
    nonce : "nonce",
    role : "role",
    rowspan : "rowSpan",
    type : "type",
    usemap : "useMap",
    valign : "vAlign",
    width : "width"
  };
  /**
   * @param {Object} e
   * @return {?}
   */
  var getWindowSize = function(e) {
    e = e.document;
    e = "CSS1Compat" == e.compatMode ? e.documentElement : e.body;
    return new Vector(e.clientWidth, e.clientHeight);
  };
  /**
   * @param {Document} doc
   * @return {?}
   */
  var getViewportHeight = function(doc) {
    return doc.scrollingElement ? doc.scrollingElement : qsaAvail || "CSS1Compat" != doc.compatMode ? doc.body || doc.documentElement : doc.documentElement;
  };
  /**
   * @param {boolean} element
   * @return {?}
   */
  var getAttribute = function(element) {
    return element ? offset(element) : window;
  };
  /**
   * @param {Object} elem
   * @return {?}
   */
  var offset = function(elem) {
    return elem.parentWindow || elem.defaultView;
  };
  /**
   * @param {Document} context
   * @param {Node} parent
   * @param {Object} args
   * @return {undefined}
   */
  var iterate = function(context, parent, args) {
    /**
     * @param {?} child
     * @return {undefined}
     */
    function add(child) {
      if (child) {
        parent.appendChild(push(child) ? context.createTextNode(child) : child);
      }
    }
    /** @type {number} */
    var i = 2;
    for (;i < args.length;i++) {
      var value = args[i];
      if (!isArray(value) || apply(value) && 0 < value.nodeType) {
        add(value);
      } else {
        forEach(makeArray(value) ? hasKey(value) : value, add);
      }
    }
  };
  /**
   * @param {Element} element
   * @return {?}
   */
  var removeItem = function(element) {
    return __GCC__INCLUDE_EXTRAS__ && void 0 != element.children ? element.children : remove(element.childNodes, function(dest) {
      return 1 == dest.nodeType;
    });
  };
  /**
   * @param {Object} el
   * @return {?}
   */
  var getStyle = function(el) {
    return 9 == el.nodeType ? el : el.ownerDocument || el.document;
  };
  /**
   * @param {Object} results
   * @return {?}
   */
  var makeArray = function(results) {
    if (results && "number" == typeof results.length) {
      if (apply(results)) {
        return "function" == typeof results.item || "string" == typeof results.item;
      }
      if (then(results)) {
        return "function" == typeof results.item;
      }
    }
    return false;
  };
  /**
   * @param {(Document|string)} sender
   * @return {undefined}
   */
  var Mirror = function(sender) {
    this.j = sender || (global.document || document);
  };
  /**
   * @param {Object} sx
   * @param {Object} data
   * @param {Object} d
   * @return {?}
   */
  Mirror.prototype.l = function(sx, data, d) {
    var j = this.j;
    /** @type {Arguments} */
    var args = arguments;
    /** @type {string} */
    var p = String(args[0]);
    var item = args[1];
    if (!He && (item && (item.name || item.type))) {
      /** @type {Array} */
      p = ["<", p];
      if (item.name) {
        p.push(' name="', isString(item.name), '"');
      }
      if (item.type) {
        p.push(' type="', isString(item.type), '"');
        var query = {};
        _find(query, item);
        delete query.type;
        item = query;
      }
      p.push(">");
      /** @type {string} */
      p = p.join("");
    }
    p = j.createElement(p);
    if (item) {
      if (push(item)) {
        p.className = item;
      } else {
        if (isFunction(item)) {
          p.className = item.join(" ");
        } else {
          setNodeAttributes(p, item);
        }
      }
    }
    if (2 < args.length) {
      iterate(j, p, args);
    }
    return p;
  };
  /**
   * @param {?} top
   * @param {number} right
   * @param {number} bottom
   * @param {?} left
   * @return {undefined}
   */
  var Bounds = function(top, right, bottom, left) {
    this.top = top;
    /** @type {number} */
    this.right = right;
    /** @type {number} */
    this.bottom = bottom;
    this.left = left;
  };
  /**
   * @param {?} val
   * @return {?}
   */
  var inverse = function(val) {
    return new Bounds(val.top, val.right, val.bottom, val.left);
  };
  /**
   * @return {?}
   */
  Bounds.prototype.ceil = function() {
    /** @type {number} */
    this.top = Math.ceil(this.top);
    /** @type {number} */
    this.right = Math.ceil(this.right);
    /** @type {number} */
    this.bottom = Math.ceil(this.bottom);
    /** @type {number} */
    this.left = Math.ceil(this.left);
    return this;
  };
  /**
   * @return {?}
   */
  Bounds.prototype.floor = function() {
    /** @type {number} */
    this.top = Math.floor(this.top);
    /** @type {number} */
    this.right = Math.floor(this.right);
    /** @type {number} */
    this.bottom = Math.floor(this.bottom);
    /** @type {number} */
    this.left = Math.floor(this.left);
    return this;
  };
  /**
   * @return {?}
   */
  Bounds.prototype.round = function() {
    /** @type {number} */
    this.top = Math.round(this.top);
    /** @type {number} */
    this.right = Math.round(this.right);
    /** @type {number} */
    this.bottom = Math.round(this.bottom);
    /** @type {number} */
    this.left = Math.round(this.left);
    return this;
  };
  /**
   * @param {?} w
   * @param {?} t
   * @param {?} val
   * @param {?} h
   * @return {undefined}
   */
  var Node = function(w, t, val, h) {
    this.left = w;
    this.top = t;
    this.width = val;
    this.height = h;
  };
  /**
   * @param {?} src
   * @return {?}
   */
  var normalize = function(src) {
    return new Bounds(src.top, src.left + src.width, src.top + src.height, src.left);
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var parseObject = function(obj) {
    return new Node(obj.left, obj.top, obj.right - obj.left, obj.bottom - obj.top);
  };
  /**
   * @param {number} offset
   * @param {?} options
   * @return {?}
   */
  var drag = function(offset, options) {
    /** @type {number} */
    var from = Math.max(offset.left, options.left);
    /** @type {number} */
    var to = Math.min(offset.left + offset.width, options.left + options.width);
    if (from <= to) {
      /** @type {number} */
      var currentOffset = Math.max(offset.top, options.top);
      /** @type {number} */
      offset = Math.min(offset.top + offset.height, options.top + options.height);
      if (currentOffset <= offset) {
        return new Node(from, currentOffset, to - from, offset - currentOffset);
      }
    }
    return null;
  };
  /**
   * @return {?}
   */
  Node.prototype.ceil = function() {
    /** @type {number} */
    this.left = Math.ceil(this.left);
    /** @type {number} */
    this.top = Math.ceil(this.top);
    /** @type {number} */
    this.width = Math.ceil(this.width);
    /** @type {number} */
    this.height = Math.ceil(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  Node.prototype.floor = function() {
    /** @type {number} */
    this.left = Math.floor(this.left);
    /** @type {number} */
    this.top = Math.floor(this.top);
    /** @type {number} */
    this.width = Math.floor(this.width);
    /** @type {number} */
    this.height = Math.floor(this.height);
    return this;
  };
  /**
   * @return {?}
   */
  Node.prototype.round = function() {
    /** @type {number} */
    this.left = Math.round(this.left);
    /** @type {number} */
    this.top = Math.round(this.top);
    /** @type {number} */
    this.width = Math.round(this.width);
    /** @type {number} */
    this.height = Math.round(this.height);
    return this;
  };
  /**
   * @param {Object} element
   * @param {string} property
   * @return {?}
   */
  var getComputedStyle = function(element, property) {
    var doc = getStyle(element);
    return doc.defaultView && (doc.defaultView.getComputedStyle && (element = doc.defaultView.getComputedStyle(element, null))) ? element[property] || (element.getPropertyValue(property) || "") : "";
  };
  /**
   * @param {Object} element
   * @param {string} style
   * @return {?}
   */
  var _getStyle = function(element, style) {
    return getComputedStyle(element, style) || ((element.currentStyle ? element.currentStyle[style] : null) || element.style && element.style[style]);
  };
  /**
   * @param {Object} element
   * @return {?}
   */
  var getElementOffset = function(element) {
    var otherElementRect;
    try {
      otherElementRect = element.getBoundingClientRect();
    } catch (c) {
      return{
        left : 0,
        top : 0,
        right : 0,
        bottom : 0
      };
    }
    if (sx) {
      if (element.ownerDocument.body) {
        element = element.ownerDocument;
        otherElementRect.left -= element.documentElement.clientLeft + element.body.clientLeft;
        otherElementRect.top -= element.documentElement.clientTop + element.body.clientTop;
      }
    }
    return otherElementRect;
  };
  /**
   * @param {Object} el
   * @return {?}
   */
  var getOffsetParent = function(el) {
    if (sx && !(8 <= Number(sizeAsString))) {
      return el.offsetParent;
    }
    var doc = getStyle(el);
    var pos = _getStyle(el, "position");
    /** @type {boolean} */
    var skipStatic = "fixed" == pos || "absolute" == pos;
    el = el.parentNode;
    for (;el && el != doc;el = el.parentNode) {
      if (11 == el.nodeType && (el.host && (el = el.host)), pos = _getStyle(el, "position"), skipStatic = skipStatic && ("static" == pos && (el != doc.documentElement && el != doc.body)), !skipStatic && (el.scrollWidth > el.clientWidth || (el.scrollHeight > el.clientHeight || ("fixed" == pos || ("absolute" == pos || "relative" == pos))))) {
        return el;
      }
    }
    return null;
  };
  /**
   * @param {string} v
   * @return {?}
   */
  var scroll = function(v) {
    var el = getStyle(v);
    var r = new Rect(0, 0);
    var win;
    win = el ? getStyle(el) : document;
    win = !sx || (9 <= Number(sizeAsString) || "CSS1Compat" == getPosition(win).j.compatMode) ? win.documentElement : win.body;
    if (v == win) {
      return r;
    }
    v = getElementOffset(v);
    win = getPosition(el).j;
    el = getViewportHeight(win);
    win = offset(win);
    el = sx && (attr("10") && win.pageYOffset != el.scrollTop) ? new Rect(el.scrollLeft, el.scrollTop) : new Rect(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop);
    r.x = v.left + el.x;
    r.y = v.top + el.y;
    return r;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var px = function(value) {
    if ("number" == typeof value) {
      /** @type {string} */
      value = Math.round(value) + "px";
    }
    return value;
  };
  /**
   * @param {Object} node
   * @return {?}
   */
  var rect = function(node) {
    var x = node.offsetWidth;
    var y = node.offsetHeight;
    /** @type {boolean} */
    var useQSA = qsaAvail && (!x && !y);
    return set(x) && !useQSA || !node.getBoundingClientRect ? new Vector(x, y) : (node = getElementOffset(node), new Vector(node.right - node.left, node.bottom - node.top));
  };
  /**
   * @param {Object} v
   * @return {?}
   */
  var ok = function(v) {
    /** @type {string} */
    var message = "//tpc.googlesyndication.com/safeframe/1-0-5/html/container.html";
    var n;
    /** @type {Object} */
    n = v;
    /** @type {number} */
    var step = 0;
    for (;n != n.parent;) {
      step++;
      n = n.parent;
    }
    if (n = step) {
      message += "?n=" + n;
    }
    return(wrap(v) ? "https:" : "http:") + message;
  };
  /** @type {boolean} */
  var YY_START = false;
  /** @type {string} */
  var expected = "";
  /**
   * @param {string} tail
   * @return {?}
   */
  var extract = function(tail) {
    tail = tail.match(/[\d]+/g);
    if (!tail) {
      return "";
    }
    /** @type {number} */
    tail.length = 3;
    return tail.join(".");
  };
  (function() {
    if (navigator.plugins && navigator.plugins.length) {
      var mimeType = navigator.plugins["Shockwave Flash"];
      if (mimeType && (YY_START = true, mimeType.description)) {
        expected = extract(mimeType.description);
        return;
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        /** @type {boolean} */
        YY_START = true;
        /** @type {string} */
        expected = "2.0.0.11";
        return;
      }
    }
    if (navigator.mimeTypes && (navigator.mimeTypes.length && (mimeType = navigator.mimeTypes["application/x-shockwave-flash"], YY_START = !(!mimeType || !mimeType.enabledPlugin)))) {
      expected = extract(mimeType.enabledPlugin.description);
      return;
    }
    try {
      var ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      /** @type {boolean} */
      YY_START = true;
      expected = extract(ax.GetVariable("$version"));
      return;
    } catch (c) {
    }
    try {
      ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
      /** @type {boolean} */
      YY_START = true;
      /** @type {string} */
      expected = "6.0.21";
      return;
    } catch (c) {
    }
    try {
      ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      /** @type {boolean} */
      YY_START = true;
      expected = extract(ax.GetVariable("$version"));
    } catch (c) {
    }
  })();
  var YYSTATE = YY_START;
  var expectedOutput = expected;
  /**
   * @param {RegExp} route
   * @return {?}
   */
  var matcher = function(route) {
    return(route = route.exec(uri)) ? route[1] : "";
  };
  (function() {
    if (index) {
      return matcher(/Firefox\/([0-9.]+)/);
    }
    if (sx || (sy || sz)) {
      return cDigit;
    }
    if (cl) {
      return matcher(/Chrome\/([0-9.]+)/);
    }
    if (uf && !(getDevice() || (agent_contains("iPad") || agent_contains("iPod")))) {
      return matcher(/Version\/([0-9.]+)/);
    }
    if (err || err2) {
      /** @type {(Array.<string>|null)} */
      var params = /Version\/(\S+).*Mobile\/(\S+)/.exec(uri);
      if (params) {
        return params[1] + "." + params[2];
      }
    } else {
      if (sf) {
        return(params = matcher(/Android\s+([0-9.]+)/)) ? params : matcher(/Version\/([0-9.]+)/);
      }
    }
    return "";
  })();
  /**
   * @param {Node} context
   * @return {?}
   */
  var lookup = function(context) {
    context = context || global;
    var ctx = context.context;
    if (!ctx) {
      try {
        ctx = context.parent.context;
      } catch (c) {
      }
    }
    try {
      if (ctx && ("pageViewId" in ctx && "canonicalUrl" in ctx)) {
        return ctx;
      }
    } catch (c) {
    }
    return null;
  };
  /**
   * @return {?}
   */
  var readFile = function() {
    var val = lookup();
    return val && val.initialIntersection ? val.initialIntersection : null;
  };
  /**
   * @return {?}
   */
  var _error = function() {
    var input = readFile();
    return input && apply(input.rootBounds) ? new Vector(input.rootBounds.width, input.rootBounds.height) : null;
  };
  /**
   * @return {?}
   */
  var reset = function() {
    var data = readFile();
    return data && apply(data.rootBounds) ? new Rect(data.rootBounds.left + data.boundingClientRect.left, data.rootBounds.top + data.boundingClientRect.top) : null;
  };
  /**
   * @param {boolean} recurring
   * @param {Object} e
   * @param {boolean} event
   * @return {?}
   */
  var resize = function(recurring, e, event) {
    e = e || win;
    if (recurring) {
      if (null !== e) {
        if (e.top != e) {
          e = e.top;
        }
      }
    }
    try {
      return e.document && !e.document.body ? new Vector(-1, -1) : event ? (new Vector(e.innerWidth, e.innerHeight)).round() : getWindowSize(e || window).round();
    } catch (d) {
      return new Vector(-12245933, -12245933);
    }
  };
  /** @type {function (this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /**
   * @param {Object} obj
   * @param {Function} f
   * @return {undefined}
   */
  var isEmpty = function(obj, f) {
    var key;
    for (key in obj) {
      if (hasOwn.call(obj, key)) {
        f.call(void 0, obj[key], key, obj);
      }
    }
  };
  /**
   * @return {undefined}
   */
  var Main = function() {
    var failuresLink = handle();
    if (!("google_onload_fired" in failuresLink)) {
      /** @type {boolean} */
      failuresLink.google_onload_fired = false;
      on(failuresLink, "load", function() {
        /** @type {boolean} */
        failuresLink.google_onload_fired = true;
      });
    }
  };
  /**
   * @param {string} result
   * @param {number} min
   * @return {?}
   */
  var translate = function(result, min) {
    /** @type {number} */
    var offset = min - 8;
    if (result.length > min) {
      min = result.lastIndexOf("&", offset);
      if (-1 !== min) {
        result = result.substring(0, min);
      } else {
        result = result.substring(0, offset);
        result = result.replace(/%\w?$/, "");
      }
      result += "&trunc=1";
    }
    return result;
  };
  /** @type {boolean} */
  var timeout = !!window.google_async_iframe_id;
  var scope = timeout && window.parent || window;
  /**
   * @return {?}
   */
  var handle = function() {
    if (timeout && !getTarget(scope)) {
      /** @type {string} */
      var selector = "." + doc.domain;
      try {
        for (;2 < selector.split(".").length && !getTarget(scope);) {
          /** @type {string} */
          doc.domain = selector = selector.substr(selector.indexOf(".") + 1);
          scope = window.parent;
        }
      } catch (b) {
      }
      if (!getTarget(scope)) {
        scope = window;
      }
    }
    return scope;
  };
  /**
   * @return {?}
   */
  var getFlashVersion = function() {
    var obj;
    var template;
    var ActiveXObject = window.ActiveXObject;
    if (navigator.plugins && navigator.mimeTypes.length) {
      if ((obj = navigator.plugins["Shockwave Flash"]) && obj.description) {
        return obj.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".");
      }
    } else {
      if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
        /** @type {number} */
        template = 3;
        /** @type {number} */
        obj = 1;
        for (;obj;) {
          try {
            obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (template + 1));
            template++;
          } catch (d) {
            /** @type {null} */
            obj = null;
          }
        }
        return template.toString();
      }
      if (createTextNode()) {
        /** @type {null} */
        obj = null;
        try {
          obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        } catch (d) {
          /** @type {number} */
          template = 0;
          try {
            obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            /** @type {number} */
            template = 6;
            /** @type {string} */
            obj.AllowScriptAccess = "always";
          } catch (e) {
            if (6 === template) {
              return template.toString();
            }
          }
          try {
            obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          } catch (e) {
          }
        }
        if (obj) {
          return template = obj.GetVariable("$version").split(" ")[1], template.replace(/,/g, ".");
        }
      }
    }
    return "0";
  };
  var shortText;
  var datum = new info(1);
  shortText = new Text(new onmessage("http:" === win.location.protocol ? "http:" : "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=", 0.01), "jserror", true);
  datum.install(handle());
  /**
   * @param {Function} fn
   * @return {?}
   */
  var configure = function(fn) {
    /** @type {string} */
    var instance = "osd::adp::reg".toString();
    /** @type {string} */
    instance = instance.toString();
    return confirm(shortText, instance, compose(instance, fn));
  };
  /** @type {null} */
  var targetCtx = null;
  /**
   * @param {boolean} recurring
   * @return {?}
   */
  var lerp = function(recurring) {
    var e = window;
    /** @type {number} */
    var type = 0;
    var exception = e;
    /** @type {number} */
    var fx = 0;
    for (;e && e != e.parent;) {
      if (e = e.parent, fx++, getTarget(e)) {
        exception = e;
        /** @type {number} */
        type = fx;
      } else {
        if (recurring) {
          break;
        }
      }
    }
    return{
      Ga : exception,
      level : type
    };
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var isUndefined = function(obj) {
    return!!obj && obj.top == obj;
  };
  /**
   * @param {Object} target
   * @param {Object} doc
   * @param {number} url
   * @param {number} type
   * @return {?}
   */
  var _get = function(target, doc, url, type) {
    url = url || target.google_ad_width;
    type = type || target.google_ad_height;
    if (isUndefined(target)) {
      return false;
    }
    var docEl = doc.documentElement;
    if (url && type) {
      /** @type {number} */
      var width = 1;
      /** @type {number} */
      var height = 1;
      if (target.innerHeight) {
        width = target.innerWidth;
        height = target.innerHeight;
      } else {
        if (docEl && docEl.clientHeight) {
          width = docEl.clientWidth;
          height = docEl.clientHeight;
        } else {
          if (doc.body) {
            width = doc.body.clientWidth;
            height = doc.body.clientHeight;
          }
        }
      }
      if (height > 2 * type || width > 2 * url) {
        return false;
      }
    }
    return true;
  };
  /**
   * @param {boolean} data
   * @param {boolean} a
   * @return {?}
   */
  var update = function(data, a) {
    var self = {};
    self.Eb = lerp(false).Ga;
    var loc;
    var win = self.Eb;
    loc = win.location.href;
    if (win == win.top) {
      loc = {
        url : loc,
        Oa : true
      };
    } else {
      /** @type {boolean} */
      var val = false;
      var d = win.document;
      if (d) {
        if (d.referrer) {
          loc = d.referrer;
          if (win.parent == win.top) {
            /** @type {boolean} */
            val = true;
          }
        }
      }
      if (win = win.location.ancestorOrigins) {
        if (win = win[win.length - 1]) {
          if (-1 == loc.indexOf(win)) {
            /** @type {boolean} */
            val = false;
            loc = win;
          }
        }
      }
      loc = {
        url : loc,
        Oa : val
      };
    }
    /** @type {({Oa: boolean, url: ??})} */
    self.Fb = loc;
    self.nb = _get(handle(), a, data.google_ad_width, data.google_ad_height);
    data = self.nb;
    /** @type {boolean} */
    a = self.Fb.Oa;
    loc = handle();
    /** @type {number} */
    loc = loc.top == loc ? 0 : getTarget(loc.top) ? 1 : 2;
    /** @type {number} */
    val = 4;
    if (data || 1 != loc) {
      if (data || 2 != loc) {
        if (data && 1 == loc) {
          /** @type {number} */
          val = 7;
        } else {
          if (data) {
            if (2 == loc) {
              /** @type {number} */
              val = 8;
            }
          }
        }
      } else {
        /** @type {number} */
        val = 6;
      }
    } else {
      /** @type {number} */
      val = 5;
    }
    if (a) {
      val |= 16;
    }
    /** @type {string} */
    self.mb = "" + val;
    return self;
  };
  /**
   * @param {Object} value
   * @param {?} values
   * @return {?}
   */
  var store = function(value, values) {
    var val = value.getPassbackPageUrl();
    if ("" != val) {
      return val;
    }
    value = values[write(value)];
    return null != value ? isArguments(value) : null;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var data = function(value) {
    /** @type {string} */
    var ret = value;
    if ("about:blank" != value) {
      ret = ret.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27");
      if (!/^https?:\/\//.test(ret)) {
        /** @type {string} */
        ret = "unknown:" + ret;
      }
    }
    return ret;
  };
  /** @type {RegExp} */
  var rreturn = /\+/g;
  /**
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var _setTimeout = function(dataAndEvents) {
    var b = ctor.getInstance().get(6);
    return dataAndEvents || b ? "https://" + ctor.getInstance().get(3) : "http://" + ctor.getInstance().get(2);
  };
  /**
   * @return {?}
   */
  var pop = function() {
    return ctor.getInstance().get(6) ? "https://" + ctor.getInstance().get(33) : "http://" + ctor.getInstance().get(33);
  };
  /**
   * @return {?}
   */
  var read = function() {
    /** @type {string} */
    var ua = navigator.userAgent;
    /** @type {number} */
    var msie = ua.indexOf("MSIE ");
    return-1 == msie ? 0 : parseFloat(ua.substring(msie + 5, ua.indexOf(";", msie)));
  };
  /**
   * @return {?}
   */
  var h = function() {
    var newUrl = uri;
    return null != newUrl && (-1 != newUrl.indexOf("MSIE ") && -1 == newUrl.indexOf("IEMobile"));
  };
  /**
   * @param {Array} params
   * @param {Object} el
   * @return {?}
   */
  var go = function(params, el) {
    /** @type {number} */
    var c = 0;
    /** @type {Array} */
    var out = [];
    if (params) {
      out.push(params.getAdUnitPath());
      out.push(serialize(params));
      out.push(params.getSlotElementId());
    }
    if (el) {
      /** @type {Array} */
      params = [];
      /** @type {number} */
      var i = 0;
      for (;el && 25 > i;el = el.parentNode, ++i) {
        params.push(9 !== el.nodeType && el.id || "");
      }
      if (el = params.join()) {
        out.push(el);
      }
    }
    if (0 < out.length) {
      c = getChar(out.join(":"));
    }
    return c.toString();
  };
  /**
   * @param {string} str
   * @param {(number|string)} pos
   * @return {?}
   */
  var startsWith = function(str, pos) {
    if (null == pos) {
      return str;
    }
    pos = str.indexOf("google_preview=", str.lastIndexOf("?"));
    var start = str.indexOf("&", pos);
    if (-1 == start) {
      /** @type {number} */
      start = str.length - 1;
      --pos;
    }
    return str.substring(0, pos) + str.substring(start + 1, str.length);
  };
  var originalEvent = {
    VISIBLE : "visible",
    HIDDEN : "hidden",
    PRERENDER : "prerender",
    Tb : "other"
  };
  /**
   * @param {Object} d
   * @return {?}
   */
  var hidden = function(d) {
    d = d || document;
    d = d.webkitVisibilityState || (d.mozVisibilityState || (d.visibilityState || "visible"));
    return removeEventListener(originalEvent, d) ? d : "other";
  };
  var res = !(!global.JSON || !global.JSON.parse) && ((!sx || attr(10)) && (!sz || attr(12)));
  var typePattern = new function() {
    this.l = {};
    this.j = {};
    /** @type {Array} */
    var codeSegments = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var valuesLen = codeSegments.length;
    for (;i < valuesLen;++i) {
      /** @type {string} */
      this.j[codeSegments[i]] = "";
    }
  };
  /** @type {Array} */
  var codeSegments = [];
  /** @type {boolean} */
  var cg = false;
  var scheduledFunctions = {};
  /**
   * @param {?} value
   * @param {number} recurring
   * @param {Array} mayParseLabeledStatementInstead
   * @param {boolean} opt_isDefault
   * @param {boolean} commas
   * @param {string} type
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var when = function(value, recurring, mayParseLabeledStatementInstead, opt_isDefault, commas, type, dataAndEvents) {
    mayParseLabeledStatementInstead = mayParseLabeledStatementInstead || [];
    var result = new dispatchEvent(value);
    if (type) {
      if (removeEventListener(result.m, type)) {
        /** @type {string} */
        result.o = type;
      }
    }
    if (!opt_isDefault) {
      get(result, recurring, mayParseLabeledStatementInstead, !!commas);
    }
    if (dataAndEvents) {
      forEach(reject(value), function(timeoutKey) {
        /** @type {boolean} */
        scheduledFunctions[timeoutKey] = true;
      });
    }
    codeSegments.push(result);
    return result;
  };
  /**
   * @return {?}
   */
  var removeNode = function() {
    return remove(filter(), function(timeoutKey) {
      return scheduledFunctions[timeoutKey];
    });
  };
  /**
   * @param {?} m
   * @return {undefined}
   */
  var dispatchEvent = function(m) {
    var j = typePattern;
    this.m = m;
    this.j = j;
    this.l = "exp" + (this[prop] || (this[prop] = ++uid));
    /** @type {number} */
    this.u = 0;
    /** @type {string} */
    this.o = this.j.j[this.l] = "";
  };
  /**
   * @param {?} obj
   * @param {number} size
   * @param {Object} args
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var get = function(obj, size, args, dataAndEvents) {
    if (factory.apply(obj, args)()) {
      var value = reject(obj.m);
      /** @type {number} */
      var i = size;
      if (0.5 < size) {
        if (1 >= size) {
          if (obj.o) {
            /** @type {number} */
            i = 0.5 < size && 1 >= size ? 1 - size : 0;
          }
        }
      }
      args = obj.j;
      /** @type {number} */
      var udataCur = i * value.length;
      if ((i = obj.l) ? args.j.hasOwnProperty(i) && "" == args.j[i] : 1) {
        var suffix;
        b: {
          try {
            var raw = window.top.location.hash;
            if (raw) {
              var matches = raw.match(/\bdeid=([\d,]+)/);
              suffix = matches && matches[1] || "";
              break b;
            }
          } catch (m) {
          }
          /** @type {string} */
          suffix = "";
        }
        if (value = (suffix = (suffix = suffix.match(new RegExp("\\b(" + value.join("|") + ")\\b"))) && suffix[0] || null) ? suffix : floor(value, udataCur)) {
          fetch(args, value, i);
        }
      }
      /** @type {number} */
      obj.u = size;
      if (dataAndEvents) {
        if (size) {
          if (parseOptions(obj.j, obj.l) || 0.5 < size && 1 >= size) {
            if (!cg) {
              if (!$(obj, parent.K)) {
                dataAndEvents = defaults(obj.m);
                cg = $(obj, parent.G) || Math.random() * size * dataAndEvents < ctor.getInstance().get(37);
              }
            }
          }
        }
      }
    }
  };
  /**
   * @param {?} obj
   * @param {string} type
   * @return {?}
   */
  var $ = function(obj, type) {
    if (!removeEventListener(obj.m, type)) {
      return false;
    }
    var wanted = parseOptions(obj.j, obj.l);
    if (wanted) {
      /** @type {boolean} */
      obj = type == wanted;
    } else {
      if (type = obj.o == type) {
        obj = obj.u;
        /** @type {boolean} */
        type = 0.5 < obj && 1 >= obj;
      }
      /** @type {string} */
      obj = type;
    }
    return obj;
  };
  /**
   * @param {Object} data
   * @param {(number|string)} event
   * @return {undefined}
   */
  var completed = function(data, event) {
    if (removeEventListener(data.m, event)) {
      fetch(data.j, event, data.l);
    }
  };
  var pdataOld = {
    K : "108809097",
    G : "108809098"
  };
  var bytenew = {
    K : "108809030",
    G : "108809031",
    Ta : "108809080"
  };
  var silentOptions = {
    K : "108809113",
    Za : "108809114",
    Ya : "108809151"
  };
  var control = {
    K : "21060080",
    Ya : "21060081"
  };
  var element = {
    K : "21060082",
    Ya : "21060083"
  };
  var promiseOrValue = {
    K : "21060084",
    Ya : "21060085"
  };
  var ev = {
    K : "21060086",
    Ya : "21060087"
  };
  var content = {
    K : "108809124",
    G : "108809125"
  };
  var pdataCur = {
    K : "108809132",
    G : "108809133"
  };
  var radio = {
    K : "108809134",
    G : "108809135"
  };
  var field = {
    K : "108809141",
    G : "108809140"
  };
  var hiddenID = {
    K : "108809142",
    G : "108809143"
  };
  var parent = {
    G : "108809144",
    K : "108809167"
  };
  var width = {
    K : "108809147",
    G : "108809148"
  };
  var o = {
    Ua : "108809152",
    Qa : "108809153",
    Ha : "108809154",
    Ra : "108809155"
  };
  var now = {
    K : "108809159",
    G : "108809160"
  };
  var tag = {
    K : "108809161",
    G : "108809162"
  };
  var args = {
    K : "108809163",
    Va : "108809164",
    Sa : "108809165",
    ya : "21060010"
  };
  var current = {
    K : "108809166",
    G : "108809168"
  };
  var target = {
    K : "21060002",
    G : "21060003"
  };
  var colorObj = {
    K : "21060004",
    G : "21060005"
  };
  var elem = {
    K : "21060006",
    G : "21060007"
  };
  var F = {
    K : "21060015",
    G : "21060016"
  };
  var obj = {
    K : "21060017",
    G : "21060018"
  };
  var promise = {
    K : "21060019",
    G : "21060020"
  };
  var tab = {
    K : "21060000",
    G : "21060001"
  };
  var seed = {
    K : "21060013",
    G : "21060014"
  };
  var env = {
    K : "21060054",
    G : "21060055"
  };
  var event = {
    K : "21060063",
    la : "21060062",
    xa : "21060066"
  };
  var w = {
    K : "21060064",
    G : "21060065"
  };
  var STACK_JUMP_SEPARATOR = {
    K : "21060092",
    G : "21060093"
  };
  var model = {
    K : "21060096",
    G : "21060097"
  };
  var widget = {
    K : 21060067,
    G : 21060068
  };
  var udataCur = {
    K : 21060071,
    G : 21060072
  };
  var authHeader = {
    Kc : 21060069,
    Lc : 21060070,
    Ic : 21060073,
    Jc : 21060074
  };
  var node = {
    K : "21060088",
    G : "21060089",
    Hc : "21060094",
    Gc : "21060095"
  };
  /**
   * @param {string} attr
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  var unset = function(attr, dataAndEvents) {
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      var data = codeSegments[i];
      var key = void 0;
      var path = data.m;
      var res = {};
      for (key in path) {
        /** @type {string} */
        res[path[key]] = key;
      }
      if (null != res[attr]) {
        if (!(dataAndEvents && parseOptions(data.j, data.l))) {
          completed(data, attr);
        }
        return;
      }
    }
    fetch(typePattern, attr);
  };
  var count = countdown(res);
  var spyCall = countdown(expectationResult);
  var restoreScript = countdown(-1 != (window.navigator && window.navigator.userAgent || "").indexOf("Opera Mini"));
  when({
    Hb : "108809028",
    Ib : "108809029"
  }, ctor.getInstance().get(27));
  var subject = when(pdataOld, ctor.getInstance().get(54), [countdown(ctor.getInstance().get(46))]);
  var root = when(bytenew, ctor.getInstance().get(28), [singleFire(countdown(ctor.getInstance().get(46)))]);
  if (!ctor.getInstance().get(46)) {
    if (!$(root, bytenew.G)) {
      if (!$(root, bytenew.K)) {
        unset(bytenew.Ta);
      }
    }
  }
  var defs = when(silentOptions, ctor.getInstance().get(60), [count]);
  var point = when(control, ctor.getInstance().get(92), [count, client, which], false, false, control.Ya);
  var classes = when(element, ctor.getInstance().get(93), [count, client, singleFire(which)], false, false, element.Ya);
  var ctx = when(promiseOrValue, ctor.getInstance().get(94), [count, spyCall], false, false, promiseOrValue.Ya);
  var keyframes = when(ev, ctor.getInstance().get(95), [count, singleFire(client), singleFire(spyCall)], false, false, ev.Ya);
  var actual = when(content, ctor.getInstance().get(63));
  var thisObject = when(pdataCur, ctor.getInstance().get(65));
  var wrapper = when(radio, ctor.getInstance().get(67), [], false, false, radio.G);
  var selector = when(field, ctor.getInstance().get(69), [countdown(!!emit().fifWin)], false, false, field.G);
  var existing = when(hiddenID, 0, [], true, false, hiddenID.G);
  when(parent, ctor.getInstance().get(37), [], false, true, parent.G);
  var base = when(width, ctor.getInstance().get(71), [], false, false, width.G);
  when({
    K : "108809103",
    kc : "108809107",
    ic : "108809108",
    jc : "108809109"
  }, ctor.getInstance().get(88));
  var color = when(o, ctor.getInstance().get(74));
  var elements = when(tag, ctor.getInstance().get(68), [], false, false, tag.K);
  var foo = when(obj, ctor.getInstance().get(77), [], true);
  var wrapped = when(promise, ctor.getInstance().get(77), [], true);
  var curr = when(now, ctor.getInstance().get(78));
  var input = when(args, 0, [], true);
  when({
    K : "131968835",
    G : "131968836"
  }, 0, [], true, false, "", true);
  var found = when(current, 0, [], true);
  var targets = when(target, ctor.getInstance().get(79), [], false, false, target.G);
  var seen = when(colorObj, 0, [], true);
  var q = when(elem, 0, [], true);
  var suiteView = when(F, 0, [], true, false, F.G);
  var fromIndex = when({
    hc : "21060021",
    wc : "21060022",
    xc : "21060023",
    yc : "21060024",
    zc : "21060025",
    Ac : "21060026",
    Bc : "21060027",
    Cc : "21060028",
    Dc : "21060029",
    Ec : "21060030",
    vc : "21060031"
  }, 0, [], true);
  var a2 = when({
    gc : "21060032",
    mc : "21060033",
    nc : "21060034",
    oc : "21060035",
    pc : "21060036",
    qc : "21060037",
    rc : "21060038",
    sc : "21060039",
    tc : "21060040",
    uc : "21060041",
    lc : "21060042"
  }, 0, [], true);
  var meta = when(tab, 0, [], true);
  var targetElement = when(seed, ctor.getInstance().get(85), [], false, false, seed.G);
  var v = when(env, ctor.getInstance().get(86), [], false, false, env.G);
  var filters = when(event, ctor.getInstance().get(87), [countdown(!(!global.navigator || !global.navigator.sendBeacon))], false, false, event.la);
  var comp = when(w, ctor.getInstance().get(89), [singleFire(restoreScript)], false, true, w.G);
  var tasks = when(STACK_JUMP_SEPARATOR, ctor.getInstance().get(96), [client, which], false, true, STACK_JUMP_SEPARATOR.G);
  var ids = when(model, ctor.getInstance().get(97), [restoreScript], false, true, model.G);
  var form = when(widget, ctor.getInstance().get(90), [singleFire(countdown(getTarget(global.top)))]);
  var _element = when(udataCur, ctor.getInstance().get(91), [countdown(getTarget(global.top))]);
  var camelKey = when(authHeader, 0, [], true);
  var dest;
  if (dest = mat) {
    /** @type {boolean} */
    dest = 0 <= parser(memory, 9);
  }
  if (dest || uf && attr(601)) {
    if ($(form, widget.K)) {
      completed(camelKey, authHeader.Kc);
    } else {
      if ($(form, widget.G)) {
        completed(camelKey, authHeader.Lc);
      } else {
        if ($(_element, udataCur.K)) {
          completed(camelKey, authHeader.Ic);
        } else {
          if ($(_element, udataCur.G)) {
            completed(camelKey, authHeader.Jc);
          }
        }
      }
    }
  }
  var nodes = when(node, ctor.getInstance().get(81));
  if ($(nodes, node.Gc)) {
    /** @type {boolean} */
    cg = true;
  }
  /** @type {string} */
  var source = (new Date).getTime() + "_" + Math.random();
  /**
   * @param {number} o
   * @return {?}
   */
  var bindCallbacks = function(o) {
    return isClassOf(o) && (isFinite(o) && (0 == o % 1 && 0 <= o));
  };
  /**
   * @return {?}
   */
  var jsEncode = function() {
    return fascii2ascii().replace(/[^a-zA-Z0-9]/g, function(a) {
      return "&#" + a.charCodeAt() + ";";
    });
  };
  /**
   * @return {?}
   */
  var oncomplete = function() {
    return ctor.getInstance().get(6) ? "https:" : "http:";
  };
  /**
   * @param {string} str
   * @return {?}
   */
  var stringToArray = function(str) {
    var segs = str.split("/");
    return "/" == str.charAt(0) && 2 <= segs.length ? segs[1] : "/" != str.charAt(0) && 1 <= segs.length ? segs[0] : "";
  };
  /**
   * @param {(Array|string)} fn
   * @return {?}
   */
  var has = function(fn) {
    /** @type {Array} */
    var result = [];
    result = map(fn, function(dataAndEvents) {
      return stringToArray(dataAndEvents.getAdUnitPath());
    });
    isNumber(result);
    return result;
  };
  reply("getVersion", function() {
    return "107";
  });
  /**
   * @param {?} size
   * @param {string} type
   * @param {number} y
   * @return {undefined}
   */
  var test = function(size, type, y) {
    type = type || fx;
    if (!set(y) || (0 > y || 1 < y)) {
      y = ctor.getInstance().get(23);
    }
    /** @type {number} */
    this.o = Math.random();
    /** @type {boolean} */
    this.m = this.o < y;
    this.l = size;
    /** @type {string} */
    this.j = type + "/pagead/gen_204?id=" + encodeURIComponent(size);
  };
  /** @type {Array} */
  var json = [];
  var fx = ctor.getInstance().get(6) ? "https://" + ctor.getInstance().get(33) : "http://" + ctor.getInstance().get(33);
  /**
   * @param {Object} obj
   * @param {string} value
   * @param {string} item
   * @return {undefined}
   */
  var valueOf = function(obj, value, item) {
    if (value) {
      if (value.match(/^\w+$/)) {
        if (item) {
          obj.j += "&" + value + "=" + encodeURIComponent(item);
        }
      }
    }
  };
  /**
   * @param {Object} obj
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  var jQuery = function(obj, deepDataAndEvents) {
    var s = obj.m;
    if (deepDataAndEvents) {
      if (0 <= deepDataAndEvents) {
        /** @type {boolean} */
        s = Math.random() < deepDataAndEvents;
      }
    }
    if (s) {
      if (obj.l) {
        if (obj.j) {
          listen(window, obj.j);
        }
      }
    }
  };
  /**
   * @param {Object} name
   * @param {Array} params
   * @return {undefined}
   */
  var helper = function(name, params) {
    if (0 < params.length) {
      if (!(3 >= params.length)) {
        params = augment(params, 0, 3);
        params.push("__extra__");
      }
      valueOf(name, "nw_id", params.join(","));
    }
  };
  /**
   * @param {Object} obj
   * @param {?} result
   * @return {undefined}
   */
  var log = function(obj, result) {
    valueOf(obj, "vrg", "107");
    var DOC = document;
    if (result) {
      helper(obj, max(result));
      valueOf(obj, "nslots", append(result).toString());
    } else {
      helper(obj, has(json));
      valueOf(obj, "nslots", json.length.toString());
    }
    result = filter();
    if (0 < result.length) {
      valueOf(obj, "eid", result.join());
    }
    valueOf(obj, "pub_url", DOC.URL);
  };
  /**
   * @param {?} id
   * @param {?} context
   * @param {?} off
   * @param {?} d
   * @param {(Document|string)} length
   * @return {undefined}
   */
  var r = function(id, context, off, d, length) {
    info.call(this, id);
    /** @type {number} */
    this.j = this.m = 0;
    this.o = length || Infinity;
    this.B = context;
    this.C = off;
    this.D = d;
    this.A = {
      nav_api : global.performance && global.performance.now ? 1 : 0
    };
  };
  expect(r, info);
  /**
   * @param {Object} obj
   * @return {undefined}
   */
  var addEvents = function(obj) {
    if (!obj.m && (obj.u && (obj.events.length && obj.j < obj.o))) {
      /** @type {number} */
      var quietMillis = 6 < obj.j ? 2E4 : 300 << obj.j;
      obj.m = window.setTimeout(bind(obj.H, obj), quietMillis);
    }
  };
  /**
   * @return {undefined}
   */
  r.prototype.H = function() {
    if (this.u && (this.events.length && this.j < this.o)) {
      var events = map(this.events, function(d) {
        return d.label + "." + Math.round(d.value);
      });
      if (events.length) {
        var camelKey = forceArray(this.A);
        camelKey[this.D] = events.join(",");
        reduce(this.B, this.C, camelKey, true, 1);
        this.j++;
      }
    }
    /** @type {number} */
    this.events.length = 0;
    window.clearTimeout(this.m);
    /** @type {number} */
    this.m = 0;
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  r.prototype.v = function(sx) {
    if (this.j < this.o) {
      r.Fa.v.call(this, sx);
      addEvents(this);
    }
  };
  /**
   * @return {undefined}
   */
  var save = function() {
    var head = new onmessage("https:", "csi.gstatic.com", "/csi?v=2&s=gpt&action=", 1);
    var e = $(nodes, node.G) || ($(nodes, node.Gc) || $(nodes, node.Hc));
    r.call(this, e ? 1 : 0, head, "execution_time", "it", ctor.getInstance().get(82));
    /** @type {string} */
    this.A.c = source;
  };
  expect(save, r);
  HOP(save);
  var deepDataAndEvents = ctor.getInstance().get(38);
  /**
   * @param {Object} error
   * @param {Object} e
   * @return {?}
   */
  var onError = function(error, e) {
    error = {
      methodId : error
    };
    if (e.name) {
      error.name = e.name;
    }
    if (e.message) {
      error.message = e.message.substring(0, 512);
    }
    if (e.fileName) {
      error.fileName = e.fileName;
    }
    if (e.lineNumber) {
      error.lineNumber = e.lineNumber;
    }
    if (e.stack) {
      error.stack = resolvePath(e.stack, "");
    }
    return error;
  };
  /**
   * @param {number} opt_attributes
   * @param {?} left
   * @param {?} useIcons
   * @return {undefined}
   */
  var html = function(opt_attributes, left, useIcons) {
    after(opt_attributes, left);
    if (!useIcons) {
      throw left;
    }
  };
  /**
   * @param {number} opt_attributes
   * @param {?} fn
   * @return {undefined}
   */
  var after = function(opt_attributes, fn) {
    if (!fn.qb) {
      try {
        /** @type {boolean} */
        fn.qb = true;
        var funcs = onError(opt_attributes, fn);
        var suiteView = new test("gpt_exception");
        try {
          log(suiteView);
        } catch (e) {
        }
        each(funcs, function(relativeToItem, isXML) {
          valueOf(suiteView, isXML, relativeToItem);
        });
        jQuery(suiteView, deepDataAndEvents);
      } catch (e) {
      }
    }
  };
  /**
   * @param {number} opt_attributes
   * @param {Function} matcherFunction
   * @param {Function} name
   * @return {?}
   */
  var m = function(opt_attributes, matcherFunction, name) {
    return function() {
      var result;
      /** @type {boolean} */
      var e = false;
      var _forEach = name || html;
      try {
        var self = save.getInstance();
        var target = manipulationTarget();
        result = matcherFunction.apply(this, arguments);
        /** @type {boolean} */
        e = true;
        var x = manipulationTarget();
        setter(self, opt_attributes.toString(), x - self.l - (target - self.l));
        addEvents(self);
      } catch (scope) {
        if (e) {
          after(110, scope);
        } else {
          result = _forEach.call(this, opt_attributes, scope);
        }
      }
      return result;
    };
  };
  /**
   * @return {undefined}
   */
  var cmd = function() {
    /** @type {number} */
    this.l = this.j = 0;
  };
  /**
   * @param {string} val
   * @return {?}
   */
  cmd.prototype.push = function(val) {
    var a = scale();
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;++i) {
      try {
        if (then(arguments[i])) {
          arguments[i]();
          this.j++;
        }
      } catch (err) {
        this.l++;
        if (window.console) {
          if (window.console.error) {
            window.console.error("Exception in queued GPT command", err);
          }
        }
        a.error(enc(String(err.message)));
      }
    }
    a.info(hasOwnProperty(String(this.j), String(this.l)));
    return this.j;
  };
  cmd.prototype.push = m(76, cmd.prototype.push);
  /**
   * @return {undefined}
   */
  var e = function() {
    var context = emit().cmd;
    if (!context || isFunction(context)) {
      var newArgs = emit().cmd = new cmd;
      if (context) {
        if (0 < context.length) {
          newArgs.push.apply(newArgs, context);
        }
      }
    }
  };
  e = m(77, e);
  (function() {
    /**
     * @param {number} onSuccess
     * @return {undefined}
     */
    function start(onSuccess) {
      this.t = {};
      /**
       * @param {string} t
       * @param {?} opt_attributes
       * @param {number} value
       * @return {undefined}
       */
      this.tick = function(t, opt_attributes, value) {
        /** @type {Array} */
        this.t[t] = [void 0 != value ? value : (new Date).getTime(), opt_attributes];
        if (void 0 == value) {
          try {
            window.console.timeStamp("CSI/" + t);
          } catch (l) {
          }
        }
      };
      this.tick("start", null, onSuccess);
    }
    var b;
    var a;
    if (window.performance) {
      a = (b = window.performance.timing) && b.responseStart;
    }
    var load = 0 < a ? new start(a) : new start;
    window.GPT_jstiming = {
      /** @type {function (number): undefined} */
      Timer : start,
      load : load
    };
    if (b) {
      b = b.navigationStart;
      if (0 < b) {
        if (a >= b) {
          /** @type {number} */
          window.GPT_jstiming.srt = a - b;
        }
      }
    }
    try {
      /** @type {null} */
      a = null;
      if (window.chrome) {
        if (window.chrome.csi) {
          /** @type {number} */
          a = Math.floor(window.chrome.csi().pageT);
        }
      }
      if (null == a) {
        if (window.gtbExternal) {
          a = window.gtbExternal.pageT();
        }
      }
      if (null == a) {
        if (window.external) {
          a = window.external.pageT;
        }
      }
      if (a) {
        window.GPT_jstiming.pt = a;
      }
    } catch (e) {
    }
  })();
  if (window.GPT_jstiming) {
    window.GPT_jstiming.Ia = {};
    /** @type {number} */
    window.GPT_jstiming.Ab = 1;
    /**
     * @param {Object} o
     * @param {string} type
     * @param {Object} start
     * @return {?}
     */
    var unfoldSoak = function(o, type, start) {
      var size = o.t[type];
      var end = o.t.start;
      if (size && (end || start)) {
        return size = o.t[type][0], void 0 != start ? end = start : end = end[0], Math.round(size - end);
      }
    };
    /** @type {function (Object, string, Object): ?} */
    window.GPT_jstiming.getTick = unfoldSoak;
    /**
     * @param {Object} o
     * @param {string} obj
     * @param {string} arr
     * @return {?}
     */
    var join = function(o, obj, arr) {
      /** @type {string} */
      var random = "";
      if (window.GPT_jstiming.srt) {
        random += "&srt=" + window.GPT_jstiming.srt;
      }
      if (window.GPT_jstiming.pt) {
        random += "&tbsrt=" + window.GPT_jstiming.pt;
      }
      try {
        if (window.external && window.external.tran) {
          random += "&tran=" + window.external.tran;
        } else {
          if (window.gtbExternal && window.gtbExternal.tran) {
            random += "&tran=" + window.gtbExternal.tran();
          } else {
            if (window.chrome) {
              if (window.chrome.csi) {
                random += "&tran=" + window.chrome.csi().tran;
              }
            }
          }
        }
      } catch (q) {
      }
      var h = window.chrome;
      if (h && (h = h.loadTimes)) {
        if (h().wasFetchedViaSpdy) {
          random += "&p=s";
        }
        if (h().wasNpnNegotiated) {
          /** @type {string} */
          random = random + "&npn=1";
          var query = h().npnNegotiatedProtocol;
          if (query) {
            random += "&npnv=" + (encodeURIComponent || escape)(query);
          }
        }
        if (h().wasAlternateProtocolAvailable) {
          random += "&apa=1";
        }
      }
      var context = o.t;
      var j = context.start;
      /** @type {Array} */
      h = [];
      /** @type {Array} */
      query = [];
      var match;
      for (match in context) {
        if ("start" != match && 0 != match.indexOf("_")) {
          var zi = context[match][1];
          if (zi) {
            if (context[zi]) {
              query.push(match + "." + unfoldSoak(o, match, context[zi][0]));
            }
          } else {
            if (j) {
              h.push(match + "." + unfoldSoak(o, match));
            }
          }
        }
      }
      if (obj) {
        var prop;
        for (prop in obj) {
          random += "&" + prop + "=" + obj[prop];
        }
      }
      if (!(obj = arr)) {
        /** @type {string} */
        obj = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi";
      }
      return[obj, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", o.name, query.length ? "&it=" + query.join(",") : "", random, "&rt=", h.join(",")].join("");
    };
    /** @type {function (Object, string, string): ?} */
    window.GPT_jstiming.getReportUri = join;
    /**
     * @param {Object} path
     * @param {Object} data
     * @param {(Node|string)} name
     * @return {?}
     */
    var getFile = function(path, data, name) {
      path = join(path, data, name);
      if (!path) {
        return "";
      }
      /** @type {Image} */
      data = new Image;
      /** @type {number} */
      var unlock = window.GPT_jstiming.Ab++;
      /** @type {Object} */
      window.GPT_jstiming.Ia[unlock] = data;
      /** @type {function (): undefined} */
      data.onload = data.onerror = function() {
        if (window.GPT_jstiming) {
          delete window.GPT_jstiming.Ia[unlock];
        }
      };
      /** @type {Object} */
      data.src = path;
      /** @type {null} */
      data = null;
      return path;
    };
    /**
     * @param {Object} file
     * @param {Object} options
     * @param {Node} req
     * @return {?}
     */
    window.GPT_jstiming.report = function(file, options, req) {
      if ("prerender" == document.webkitVisibilityState) {
        /** @type {boolean} */
        var d = false;
        /**
         * @return {undefined}
         */
        var completed = function() {
          if (!d) {
            if (options) {
              /** @type {string} */
              options.prerender = "1";
            } else {
              options = {
                prerender : "1"
              };
            }
            var f;
            if ("prerender" == document.webkitVisibilityState) {
              /** @type {boolean} */
              f = false;
            } else {
              getFile(file, options, req);
              /** @type {boolean} */
              f = true;
            }
            if (f) {
              /** @type {boolean} */
              d = true;
              document.removeEventListener("webkitvisibilitychange", completed, false);
            }
          }
        };
        document.addEventListener("webkitvisibilitychange", completed, false);
        return "";
      }
      return getFile(file, options, req);
    };
  }
  /**
   * @return {undefined}
   */
  var orig = function() {
    this.l = this.l;
    this.m = this.m;
  };
  /** @type {boolean} */
  orig.prototype.l = false;
  /**
   * @return {undefined}
   */
  orig.prototype.u = function() {
    if (this.m) {
      for (;this.m.length;) {
        this.m.shift()();
      }
    }
  };
  /**
   * @param {?} w
   * @param {?} last
   * @param {?} regexInfo
   * @param {Node} info
   * @param {?} collection
   * @return {undefined}
   */
  var process = function(w, last, regexInfo, info, collection) {
    orig.call(this);
    this.w = w;
    /** @type {number} */
    this.status = 1;
    this.o = last;
    this.A = regexInfo;
    /** @type {Node} */
    this.I = info;
    /** @type {boolean} */
    this.na = !!collection;
    /** @type {number} */
    this.v = Math.random();
    this.B = {};
    /** @type {null} */
    this.j = null;
    this.C = bind(this.H, this);
  };
  expect(process, orig);
  /**
   * @param {Object} item
   * @return {undefined}
   */
  process.prototype.H = function(item) {
    if (item.origin === this.A && (this.na || item.source == this.o)) {
      /** @type {null} */
      var r = null;
      try {
        r = encodeURIComponent(item.data);
      } catch (c) {
      }
      if (apply(r) && (item = r.i, r.c === this.w && (item != this.v && (2 !== this.status && (this.status = 2, unlock(this), this.j && (this.j(), this.j = null)), item = r.s, r = r.p, push(item) && ((push(r) || apply(r)) && this.B.hasOwnProperty(item)))))) {
        this.B[item](r);
      }
    }
  };
  /**
   * @param {Object} self
   * @return {undefined}
   */
  var unlock = function(self) {
    var params = {};
    params.c = self.w;
    params.i = self.v;
    self.o.postMessage(url(params), self.A);
  };
  /**
   * @return {undefined}
   */
  process.prototype.D = function() {
    if (1 === this.status) {
      try {
        if (this.o.postMessage) {
          unlock(this);
        }
      } catch (a) {
      }
      window.setTimeout(bind(this.D, this), 50);
    }
  };
  /**
   * @param {?} opt_connectCb
   * @return {undefined}
   */
  process.prototype.connect = function(opt_connectCb) {
    if (opt_connectCb) {
      this.j = opt_connectCb;
    }
    on(window, "message", this.C);
    if (this.I) {
      this.D();
    }
  };
  /**
   * @param {?} arr
   * @param {string} i
   * @param {?} array
   * @return {undefined}
   */
  var inArray = function(arr, i, array) {
    arr.B[i] = array;
  };
  /**
   * @param {Object} self
   * @param {string} items
   * @param {string} op
   * @return {undefined}
   */
  var format = function(self, items, op) {
    var params = {};
    params.c = self.w;
    params.i = self.v;
    /** @type {string} */
    params.s = items;
    /** @type {string} */
    params.p = op;
    self.o.postMessage(url(params), self.A);
  };
  /**
   * @return {undefined}
   */
  process.prototype.u = function() {
    /** @type {number} */
    this.status = 3;
    unbind(window, "message", this.C);
    process.Fa.u.call(this);
  };
  if (!opt_domHelper) {
    if (!qsaAvail) {
      if (sx) {
        attr(11);
      }
    }
  }
  /**
   * @return {undefined}
   */
  var Tiled = function() {
    /** @type {Array} */
    this.j = [];
  };
  /**
   * @param {?} object
   * @param {string} obj
   * @param {string} style
   * @param {string} value
   * @param {string} text
   * @return {undefined}
   */
  var css = function(object, obj, style, value, text) {
    object.j.push(new _setStyle(obj, style, value, text));
  };
  /**
   * @param {?} which
   * @param {?} walkers
   * @param {string} number
   * @param {number} b
   * @return {undefined}
   */
  var dimension = function(which, walkers, number, b) {
    css(which, walkers, number, b + "px", void 0);
  };
  /**
   * @param {?} node
   * @param {(Object|string)} style
   * @param {string} property
   * @param {Object} value
   * @return {undefined}
   */
  var _setStyle = function(node, style, property, value) {
    this.m = node;
    this.j = (this.l = set(value) && (node.style && node.style.getPropertyPriority)) ? String(style).replace(/([A-Z])/g, "-$1").toLowerCase() : style;
    this.o = this.l ? node.style.getPropertyValue(this.j) : node.style[this.j];
    this.u = this.l ? node.style.getPropertyPriority(this.j) : null;
    if (this.l) {
      node.style.removeProperty(this.j);
      node.style.setProperty(this.j, property, value);
    } else {
      /** @type {string} */
      node.style[this.j] = property;
    }
  };
  /**
   * @param {number} data
   * @return {undefined}
   */
  var ajaxSuccess = function(data) {
    /** @type {number} */
    this.m = data;
    /** @type {null} */
    this.u = null;
    /** @type {number} */
    this.H = this.status = 0;
    /** @type {null} */
    this.l = null;
    /** @type {string} */
    this.Z = "sfchannel" + data;
  };
  /**
   * @param {?} s
   * @param {?} event
   * @param {?} o
   * @param {?} f
   * @param {?} u
   * @param {?} val
   * @return {undefined}
   */
  var slide = function(s, event, o, f, u, val) {
    this.m = inverse(s);
    this.l = inverse(event);
    this.o = o;
    this.j = inverse(f);
    this.u = u;
    this.v = val;
  };
  /**
   * @param {string} el
   * @param {Object} doc
   * @param {Object} obj
   * @return {?}
   */
  var start = function(el, doc, obj) {
    var close = window.screenX || (window.screenLeft || 0);
    var style = window.screenY || (window.screenTop || 0);
    var ret = window.outerWidth || (document.documentElement.clientWidth || 0);
    var value = window.outerHeight || (document.documentElement.clientHeight || 0);
    close = doc ? new Bounds(style, ret + close, value + style, close) : new Bounds(style, ret - close, value - style, close);
    var e = scroll(el);
    if ("none" != _getStyle(el, "display")) {
      style = rect(el);
    } else {
      style = el.style;
      ret = style.display;
      value = style.visibility;
      var p = style.position;
      /** @type {string} */
      style.visibility = "hidden";
      /** @type {string} */
      style.position = "absolute";
      /** @type {string} */
      style.display = "inline";
      var index = rect(el);
      style.display = ret;
      style.position = p;
      style.visibility = value;
      style = index;
    }
    style = new Node(e.x, e.y, style.width, style.height);
    ret = normalize(style);
    /** @type {string} */
    value = String(_getStyle(el, "zIndex"));
    if (doc) {
      obj = window;
      doc = obj.document;
      var pos;
      try {
        var t;
        var data = obj.document;
        t = "CSS1Compat" == data.compatMode ? data.documentElement : data.body;
        pos = new Vector(t.clientWidth, t.clientHeight);
      } catch (U) {
        pos = new Vector(-12245933, -12245933);
      }
      obj = new Vector(Math.max(pos.width, Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth)), Math.max(pos.height, Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)));
      obj = new Bounds(0, obj.width, obj.height, 0);
      if (el) {
        pos = new Bounds(0, Infinity, Infinity, 0);
        data = getPosition(el);
        t = data.j.body;
        data = data.j.documentElement;
        el = getOffsetParent(el);
        /** @type {number} */
        doc = 0;
        for (;el && (100 > doc && !(e = getComputedStyle(el, "overflow") || ((el.currentStyle ? el.currentStyle.overflow : null) || el.style && el.style.overflow), sx && 0 == el.clientWidth || (qsaAvail && (0 == el.clientHeight && el == t) || (el == t || (el == data || "hidden" != e)))));el = getOffsetParent(el), doc++) {
          e = scroll(el);
          p = new Rect(el.clientLeft, el.clientTop);
          e.x += p.x;
          e.y += p.y;
          /** @type {number} */
          pos.top = Math.max(pos.top, e.y);
          /** @type {number} */
          pos.right = Math.min(pos.right, e.x + el.clientWidth);
          /** @type {number} */
          pos.bottom = Math.min(pos.bottom, e.y + el.clientHeight);
          /** @type {number} */
          pos.left = Math.max(pos.left, e.x);
        }
        el = 0 <= pos.top && (0 <= pos.left && (pos.bottom > pos.top && pos.right > pos.left)) ? pos : null;
      } else {
        /** @type {null} */
        el = null;
      }
      el = el ? normalize(drag(parseObject(obj), parseObject(el))) : obj;
    } else {
      if (obj) {
        pos = obj.boundingClientRect;
        /** @type {number} */
        el = e.y - pos.top;
        /** @type {number} */
        pos = e.x - pos.left;
        el = new Bounds(el, obj.rootBounds.width + pos, obj.rootBounds.height + el, pos);
      } else {
        obj = new Bounds(0, Infinity, Infinity, 0);
        pos = getPosition(el);
        data = pos.j.body;
        doc = pos.j.documentElement;
        t = getViewportHeight(pos.j);
        for (;el = getOffsetParent(el);) {
          if (!(sx && 0 == el.clientWidth)) {
            if (!(qsaAvail && (0 == el.clientHeight && el == data))) {
              if (!(el == data)) {
                if (!(el == doc)) {
                  if (!("visible" == _getStyle(el, "overflow"))) {
                    e = scroll(el);
                    p = new Rect(el.clientLeft, el.clientTop);
                    e.x += p.x;
                    e.y += p.y;
                    /** @type {number} */
                    obj.top = Math.max(obj.top, e.y);
                    /** @type {number} */
                    obj.right = Math.min(obj.right, e.x + el.clientWidth);
                    /** @type {number} */
                    obj.bottom = Math.min(obj.bottom, e.y + el.clientHeight);
                    /** @type {number} */
                    obj.left = Math.max(obj.left, e.x);
                  }
                }
              }
            }
          }
        }
        el = t.scrollLeft;
        t = t.scrollTop;
        /** @type {number} */
        obj.left = Math.max(obj.left, el);
        /** @type {number} */
        obj.top = Math.max(obj.top, t);
        pos = getWindowSize(offset(pos.j) || window);
        /** @type {number} */
        obj.right = Math.min(obj.right, el + pos.width);
        /** @type {number} */
        obj.bottom = Math.min(obj.bottom, t + pos.height);
        el = 0 <= obj.top && (0 <= obj.left && (obj.bottom > obj.top && obj.right > obj.left)) ? obj : null;
      }
    }
    var s;
    if (null != el) {
      s = drag(parseObject(el), style);
    }
    el = (obj = (obj = null != s && (0 != s.width || s.left + s.width != el.left && s.left != el.right)) && (0 != s.height || s.top + s.height != el.top && s.top != el.bottom)) ? new Bounds(Math.max(ret.top - el.top, 0), Math.max(el.right - ret.right, 0), Math.max(el.bottom - ret.bottom, 0), Math.max(ret.left - el.left, 0)) : new Bounds(0, 0, 0, 0);
    /** @type {number} */
    pos = obj = 0;
    if (s) {
      if ((new Vector(s.width, s.height)).j()) {
        /** @type {number} */
        obj = s.width / style.width;
        /** @type {number} */
        pos = s.height / style.height;
      }
    }
    return new slide(close, ret, value, el, obj, pos);
  };
  /**
   * @param {Object} item
   * @return {?}
   */
  var onMove = function(item) {
    return url({
      windowCoords_t : item.m.top,
      windowCoords_r : item.m.right,
      windowCoords_b : item.m.bottom,
      windowCoords_l : item.m.left,
      frameCoords_t : item.l.top,
      frameCoords_r : item.l.right,
      frameCoords_b : item.l.bottom,
      frameCoords_l : item.l.left,
      styleZIndex : item.o,
      allowedExpansion_t : item.j.top,
      allowedExpansion_r : item.j.right,
      allowedExpansion_b : item.j.bottom,
      allowedExpansion_l : item.j.left,
      xInView : item.u,
      yInView : item.v
    });
  };
  /**
   * @return {undefined}
   */
  var Model = function() {
    this.j = {
      shared : {
        sf_ver : "1-0-5",
        ck_on : navigator.cookieEnabled ? 1 : 0,
        flash_ver : YYSTATE ? expectedOutput : "0"
      }
    };
  };
  /**
   * @param {?} dataAndEvents
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  var cloneNode = function(dataAndEvents, deepDataAndEvents) {
    this.pa = dataAndEvents;
    /** @type {number} */
    this.qa = deepDataAndEvents;
  };
  /**
   * @param {?} errorCode
   * @param {?} j
   * @param {?} l
   * @param {?} permissions
   * @param {?} u
   * @param {boolean} status
   * @return {undefined}
   */
  var FileTransferError = function(errorCode, j, l, permissions, u, status) {
    var model = new Model;
    this.o = errorCode;
    this.j = j;
    this.l = l;
    this.permissions = permissions;
    this.m = model;
    this.u = u;
    /** @type {boolean} */
    this.na = status;
  };
  /**
   * @param {?} n
   * @return {undefined}
   */
  var div = function(n) {
    this.j = n;
  };
  /**
   * @param {?} amount
   * @param {number} vn
   * @return {undefined}
   */
  var results = function(amount, vn) {
    this.j = amount;
    /** @type {number} */
    this.version = vn;
  };
  expect(results, div);
  /**
   * @return {?}
   */
  results.prototype.m = function() {
    return url({
      uid : this.j,
      version : this.version
    });
  };
  /**
   * @param {?} j
   * @param {?} o
   * @param {?} l
   * @return {undefined}
   */
  var Explosion = function(j, o, l) {
    this.j = j;
    this.o = o;
    this.l = l;
  };
  expect(Explosion, div);
  /**
   * @return {?}
   */
  Explosion.prototype.m = function() {
    return url({
      uid : this.j,
      initialWidth : this.o,
      initialHeight : this.l
    });
  };
  /**
   * @param {?} a
   * @param {?} lang
   * @return {undefined}
   */
  var t = function(a, lang) {
    this.j = a;
    this.l = lang;
  };
  expect(t, div);
  /**
   * @return {?}
   */
  t.prototype.m = function() {
    return url({
      uid : this.j,
      description : this.l
    });
  };
  /**
   * @param {?} aValue
   * @param {?} l
   * @param {number} toImage
   * @return {undefined}
   */
  var cache = function(aValue, l, toImage) {
    this.j = aValue;
    this.l = l;
    /** @type {number} */
    this.push = toImage;
  };
  expect(cache, div);
  /**
   * @return {?}
   */
  cache.prototype.m = function() {
    return url({
      uid : this.j,
      expand_t : this.l.top,
      expand_r : this.l.right,
      expand_b : this.l.bottom,
      expand_l : this.l.left,
      push : this.push
    });
  };
  /**
   * @param {?} v
   * @return {undefined}
   */
  var p = function(v) {
    this.j = v;
  };
  expect(p, div);
  /**
   * @return {?}
   */
  p.prototype.m = function() {
    return url({
      uid : this.j
    });
  };
  /**
   * @param {?} j
   * @param {?} o
   * @return {undefined}
   */
  var cls = function(j, o) {
    this.j = j;
    this.o = o;
  };
  expect(cls, div);
  /**
   * @return {?}
   */
  cls.prototype.m = function() {
    var attributes = {
      uid : this.j,
      newGeometry : onMove(this.o)
    };
    return url(attributes);
  };
  /**
   * @param {?} rte
   * @param {?} from_instance
   * @param {?} ref
   * @param {string} dstUri
   * @param {number} methods
   * @return {undefined}
   */
  var copy = function(rte, from_instance, ref, dstUri, methods) {
    cls.call(this, rte, ref);
    this.u = from_instance;
    /** @type {string} */
    this.l = dstUri;
    /** @type {number} */
    this.push = methods;
  };
  expect(copy, cls);
  /**
   * @return {?}
   */
  copy.prototype.m = function() {
    var attributes = {
      uid : this.j,
      success : this.u,
      newGeometry : onMove(this.o),
      expand_t : this.l.top,
      expand_r : this.l.right,
      expand_b : this.l.bottom,
      expand_l : this.l.left,
      push : this.push
    };
    return url(attributes);
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} events
   * @return {undefined}
   */
  var clone = function(dataAndEvents, deepDataAndEvents, events) {
    this.j = dataAndEvents;
    this.width = deepDataAndEvents;
    this.height = events;
  };
  expect(clone, div);
  /**
   * @return {?}
   */
  clone.prototype.m = function() {
    return url({
      uid : this.j,
      width : this.width,
      height : this.height
    });
  };
  /** @type {number} */
  var cur = 1;
  /** @type {boolean} */
  var Wh = false;
  /**
   * @param {Object} options
   * @return {undefined}
   */
  var load = function(options) {
    ajaxSuccess.call(this, cur++);
    this.A = options.ub;
    /** @type {boolean} */
    this.C = 1 == options.size;
    this.N = new cloneNode(options.permissions.pa && !this.C, options.permissions.qa && !this.C);
    this.v = options.Ca;
    /** @type {string} */
    this.W = window.location.protocol + "//" + window.location.host;
    /** @type {boolean} */
    this.X = !!options.na;
    /** @type {string} */
    this.V = window.location.protocol + "//tpc.googlesyndication.com";
    /** @type {boolean} */
    this.O = !!options.cb;
    this.U = options.sandbox || false;
    this.o = new Tiled;
    setSize(this, options.Ca, options.size);
    this.D = options.fb || false;
    this.u = this.R = start(options.Ca, this.D);
    this.Y = options.Cb || [];
    loaded(this, options);
    /** @type {null} */
    this.M = null;
    this.I = bind(this.L, this);
    /** @type {number} */
    this.J = -1;
    /** @type {number} */
    this.w = 0;
    /** @type {null} */
    this.B = null;
    if (!!options.ob) {
      if (!("function" !== typeof IntersectionObserver)) {
        if (!params) {
          if (!useQSA) {
            this.B = new IntersectionObserver(bind(function(newlines) {
              this.M = newlines[newlines.length - 1];
              this.L();
            }, this));
          }
        }
      }
    }
    this.l = new process(this.Z, this.j.contentWindow, this.V, false);
    inArray(this.l, "init_done", bind(this.pb, this));
    inArray(this.l, "register_done", bind(this.zb, this));
    inArray(this.l, "report_error", bind(this.Bb, this));
    inArray(this.l, "expand_request", bind(this.eb, this));
    inArray(this.l, "collapse_request", bind(this.bb, this));
    inArray(this.l, "creative_geometry_update", bind(this.T, this));
    this.l.connect(bind(this.xb, this));
    var restoreScript = bind(function() {
      if (this.j) {
        /** @type {string} */
        this.j.name = "";
        if (options.Pa) {
          options.Pa();
        }
        unbind(this.j, "load", restoreScript);
      }
    }, this);
    on(this.j, "load", restoreScript);
  };
  expect(load, ajaxSuccess);
  /**
   * @param {Object} args
   * @param {Element} h
   * @param {?} size
   * @return {undefined}
   */
  var setSize = function(args, h, size) {
    if (args.C) {
      h.style.width = px("100%");
      h.style.height = px("auto");
    } else {
      h.style.width = px(size.width);
      h.style.height = px(size.height);
    }
  };
  /**
   * @param {Object} e
   * @param {string} options
   * @return {undefined}
   */
  var loaded = function(e, options) {
    var pos2 = getPosition(e.v);
    var value;
    value = options.content;
    var item = e.Y;
    /** @type {string} */
    value = "1-0-5;" + (item.length ? "e:" + item.join() + ";" : "") + value.length + ";" + value;
    item = new FileTransferError(e.m, e.W, e.R, e.N, e.C, e.X);
    var el = item.o;
    var position = item.j;
    var initialGeometry = onMove(item.l);
    var permissions;
    permissions = item.permissions;
    permissions = url({
      expandByOverlay : permissions.pa,
      expandByPush : permissions.qa,
      readCookie : false,
      writeCookie : false
    });
    item = {
      uid : el,
      hostPeerName : position,
      initialGeometry : initialGeometry,
      permissions : permissions,
      metadata : url(item.m.j),
      reportCreativeGeometry : item.u,
      isDifferentSourceWindow : item.na
    };
    item = url(item);
    value += item;
    if (e.O) {
      if (options.size instanceof Vector) {
        item = options.kb;
        el = options.size;
        position = getPosition(e.v);
        if (!Wh) {
          loadScript(position.j, "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe");
          /** @type {boolean} */
          Wh = true;
        }
        position = offset(position.j);
        position.google_eas_queue = position.google_eas_queue || [];
        position.google_eas_queue.push({
          a : item,
          b : position.location.protocol + "//tpc.googlesyndication.com",
          c : el.width,
          d : el.height,
          e : "sf-gdn-exp-" + e.m,
          f : void 0,
          g : void 0,
          h : void 0,
          i : void 0
        });
      }
    }
    if (options.fc) {
      if (position = options.kb, item = options.size, options = options.lb, el = document.getElementById(position)) {
        var element;
        a: {
          try {
            element = el.contentWindow || (el.contentDocument ? getAttribute(el.contentDocument) : null);
            break a;
          } catch (m) {
          }
          /** @type {null} */
          element = null;
        }
        /** @type {string} */
        element.name = value;
        if (createTextNode()) {
          if (0 <= parser(detect(), 10)) {
            /** @type {string} */
            el.name = value;
          }
        }
        if (e.C) {
          /** @type {number} */
          item = value = 0;
          /** @type {string} */
          el.style.minWidth = "100%";
        } else {
          value = item.width;
          item = item.height;
        }
        /** @type {string} */
        el.width = String(value);
        /** @type {string} */
        el.height = String(item);
        el.title = options || "";
        el.setAttribute("data-is-safeframe", "true");
        element.location.replace(success(e, offset(pos2.j)));
        if (e.U) {
          /** @type {string} */
          el.sandbox = "allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox";
        }
        e.j = el;
      } else {
        e.j = initialize(e, position, value, item, pos2, options);
      }
    } else {
      e.j = initialize(e, options.kb, value, options.size, pos2, options.lb);
    }
  };
  /**
   * @param {Object} self
   * @param {Object} options
   * @param {Object} src
   * @param {string} parent
   * @param {Object} object
   * @param {string} text
   * @return {?}
   */
  var initialize = function(self, options, src, parent, object, text) {
    var width;
    var height;
    if (self.C) {
      /** @type {number} */
      height = width = 0;
      /** @type {string} */
      parent = "min-width:100%";
    } else {
      width = parent.width;
      height = parent.height;
      /** @type {string} */
      parent = "";
    }
    options = {
      id : options,
      title : text || "",
      name : src,
      src : success(self, offset(object.j)),
      scrolling : "no",
      marginWidth : "0",
      marginHeight : "0",
      width : String(width),
      height : String(height),
      "data-is-safeframe" : "true"
    };
    /** @type {string} */
    src = sx && !attr(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank";
    src = {
      frameborder : 0,
      style : "border:0;vertical-align:bottom;" + (parent || ""),
      allowTransparency : "true",
      src : src
    };
    if (options) {
      _find(src, options);
    }
    object = object.l("IFRAME", src);
    if (self.U) {
      /** @type {string} */
      object.sandbox = "allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox";
    }
    self.v.appendChild(object);
    return object;
  };
  /**
   * @param {Object} item
   * @param {boolean} s
   * @return {?}
   */
  var success = function(item, s) {
    var value = ok(s);
    if (item.O) {
      s = parseQuery(s.location.href);
      value += "#" + [0 < s.length ? "google_debug" + (s ? "=" + s : "") + "&" : "", "xpc=", "sf-gdn-exp-" + item.m, "&p=", encodeURIComponent(global.document.location.protocol), "//", encodeURIComponent(global.document.location.host)].join("");
    }
    return value;
  };
  self = load.prototype;
  /**
   * @return {undefined}
   */
  self.xb = function() {
    if (this.B && this.j) {
      this.B.observe(this.j);
    } else {
      on(window, "resize", this.I);
      on(window, "scroll", this.I);
    }
  };
  /**
   * @param {string} key
   * @return {undefined}
   */
  self.pb = function(key) {
    try {
      if (0 != this.status) {
        throw Error("Container already initialized");
      }
      if (!push(key)) {
        throw Error("Could not parse serialized message");
      }
      var exports;
      var value = encodeURIComponent(key);
      if (!(apply(value) && (isClassOf(value.uid) && push(value.version)))) {
        throw Error("Cannot parse JSON message");
      }
      exports = new results(value.uid, value.version);
      if (this.m != exports.j || "1-0-5" != exports.version) {
        throw Error("Wrong source container");
      }
      /** @type {number} */
      this.status = 1;
    } catch (ex) {
      this.A.error("Invalid INITIALIZE_DONE message. Reason: " + ex.message);
    }
  };
  /**
   * @param {string} str
   * @return {undefined}
   */
  self.zb = function(str) {
    try {
      if (1 != this.status) {
        throw Error("Container not initialized");
      }
      if (!push(str)) {
        throw Error("Could not parse serialized message");
      }
      var self = encodeURIComponent(str);
      if (!(apply(self) && (isClassOf(self.uid) && (isClassOf(self.initialWidth) && isClassOf(self.initialHeight))))) {
        throw Error("Cannot parse JSON message");
      }
      if (this.m != (new Explosion(self.uid, self.initialWidth, self.initialHeight)).j) {
        throw Error("Wrong source container");
      }
      /** @type {number} */
      this.status = 2;
    } catch (ex) {
      this.A.error("Invalid REGISTER_DONE message. Reason: " + ex.message);
    }
  };
  /**
   * @param {string} key
   * @return {undefined}
   */
  self.Bb = function(key) {
    try {
      if (!push(key)) {
        throw Error("Could not parse serialized message");
      }
      var exports;
      var value = encodeURIComponent(key);
      if (!(apply(value) && (isClassOf(value.uid) && push(value.description)))) {
        throw Error("Cannot parse JSON message");
      }
      exports = new t(value.uid, value.description);
      if (this.m != exports.j) {
        throw Error("Wrong source container");
      }
      this.A.info("Ext reported an error. Description: " + exports.l);
    } catch (ex) {
      this.A.error("Invalid REPORT_ERROR message. Reason: " + ex.message);
    }
  };
  /**
   * @param {number} key
   * @return {undefined}
   */
  self.eb = function(key) {
    try {
      if (2 != this.status) {
        throw Error("Container is not registered");
      }
      if (0 != this.H) {
        throw Error("Container is not collapsed");
      }
      if (!push(key)) {
        throw Error("Could not parse serialized message");
      }
      var me;
      var value = encodeURIComponent(key);
      if (!(apply(value) && (isClassOf(value.uid) && (isClassOf(value.expand_t) && (isClassOf(value.expand_r) && (isClassOf(value.expand_b) && (isClassOf(value.expand_l) && isDefined(value.push)))))))) {
        throw Error("Cannot parse JSON message");
      }
      me = new cache(value.uid, new Bounds(value.expand_t, value.expand_r, value.expand_b, value.expand_l), value.push);
      if (this.m != me.j) {
        throw Error("Wrong source container");
      }
      if (!(0 <= me.l.top && (0 <= me.l.left && (0 <= me.l.bottom && 0 <= me.l.right)))) {
        throw Error("Invalid expansion amounts");
      }
      var pair;
      if (pair = me.push && this.N.qa || !me.push && this.N.pa) {
        var parent = me.l;
        var core_push = me.push;
        var options = this.u = start(this.j, this.D);
        if (parent.top <= options.j.top && (parent.right <= options.j.right && (parent.bottom <= options.j.bottom && parent.left <= options.j.left))) {
          if (!core_push) {
            var slide = this.j.parentNode;
            for (;slide && slide.style;slide = slide.parentNode) {
              css(this.o, slide, "overflowX", "visible", "important");
              css(this.o, slide, "overflowY", "visible", "important");
            }
          }
          var s = this.u.l;
          var pos = this.u.l;
          var offset = normalize(new Node(0, 0, s.right - s.left, pos.bottom - pos.top));
          if (apply(parent)) {
            offset.top -= parent.top;
            offset.right += parent.right;
            offset.bottom += parent.bottom;
            offset.left -= parent.left;
          } else {
            offset.top -= parent;
            offset.right += Number(void 0);
            offset.bottom += Number(void 0);
            offset.left -= Number(void 0);
          }
          css(this.o, this.v, "position", "relative");
          css(this.o, this.j, "position", "absolute");
          if (core_push) {
            dimension(this.o, this.v, "width", offset.right - offset.left);
            dimension(this.o, this.v, "height", offset.bottom - offset.top);
          } else {
            css(this.o, this.j, "zIndex", "10000");
          }
          dimension(this.o, this.j, "width", offset.right - offset.left);
          dimension(this.o, this.j, "height", offset.bottom - offset.top);
          dimension(this.o, this.j, "left", offset.left);
          dimension(this.o, this.j, "top", offset.top);
          /** @type {number} */
          this.H = 2;
          this.u = start(this.j, this.D);
          /** @type {boolean} */
          pair = true;
        } else {
          /** @type {boolean} */
          pair = false;
        }
      }
      key = pair;
      format(this.l, "expand_response", (new copy(this.m, key, this.u, me.l, me.push)).m());
      if (!key) {
        throw Error("Viewport or document body not large enough to expand into.");
      }
    } catch (ex) {
      this.A.error("Invalid EXPAND_REQUEST message. Reason: " + ex.message);
    }
  };
  /**
   * @param {string} key
   * @return {undefined}
   */
  self.bb = function(key) {
    try {
      if (2 != this.status) {
        throw Error("Container is not registered");
      }
      if (2 != this.H) {
        throw Error("Container is not expanded");
      }
      if (!push(key)) {
        throw Error("Could not parse serialized message");
      }
      var value = encodeURIComponent(key);
      if (!apply(value) || !isClassOf(value.uid)) {
        throw Error("Cannot parse JSON message");
      }
      if (this.m != (new p(value.uid)).j) {
        throw Error("Wrong source container");
      }
      toggle(this);
      format(this.l, "collapse_response", (new cls(this.m, this.u)).m());
    } catch (ex) {
      this.A.error("Invalid COLLAPSE_REQUEST message. Reason: " + ex.message);
    }
  };
  /**
   * @param {Object} e
   * @return {undefined}
   */
  var toggle = function(e) {
    var io = e.o;
    /** @type {number} */
    var id = io.j.length - 1;
    for (;0 <= id;id--) {
      var obj = io.j[id];
      if (obj.l) {
        obj.m.style.removeProperty(obj.j);
        obj.m.style.setProperty(obj.j, obj.o, obj.u);
      } else {
        obj.m.style[obj.j] = obj.o;
      }
    }
    /** @type {number} */
    io.j.length = 0;
    /** @type {number} */
    e.H = 0;
    if (e.j) {
      e.u = start(e.j, e.D);
    }
  };
  /**
   * @return {undefined}
   */
  load.prototype.L = function() {
    if (1 == this.status || 2 == this.status) {
      switch(this.w) {
        case 0:
          table(this);
          this.J = window.setTimeout(bind(this.P, this), 1E3);
          /** @type {number} */
          this.w = 1;
          break;
        case 1:
          /** @type {number} */
          this.w = 2;
          break;
        case 2:
          /** @type {number} */
          this.w = 2;
      }
    }
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  load.prototype.T = function(c) {
    try {
      if (!push(c)) {
        throw Error("Could not parse serialized message");
      }
      var me;
      var value = encodeURIComponent(c);
      if (!(apply(value) && (isClassOf(value.uid) && (isClassOf(value.width) && isClassOf(value.height))))) {
        throw Error("Cannot parse JSON message");
      }
      me = new clone(value.uid, value.width, value.height);
      if (this.m != me.j) {
        throw Error("Wrong source container");
      }
      /** @type {string} */
      var h = String(me.height);
      if (this.C) {
        if (h != this.j.height) {
          /** @type {string} */
          this.j.height = h;
          this.L();
        }
      } else {
        this.A.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.");
      }
    } catch (ex) {
      this.A.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + ex.message);
    }
  };
  /**
   * @return {undefined}
   */
  load.prototype.P = function() {
    if (1 == this.status || 2 == this.status) {
      switch(this.w) {
        case 1:
          /** @type {number} */
          this.w = 0;
          break;
        case 2:
          table(this);
          this.J = window.setTimeout(bind(this.P, this), 1E3);
          /** @type {number} */
          this.w = 1;
      }
    }
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  var table = function(data) {
    data.u = start(data.j, data.D, data.M);
    /** @type {null} */
    data.M = null;
    format(data.l, "geometry_update", (new cls(data.m, data.u)).m());
  };
  /**
   * @param {Object} options
   * @return {undefined}
   */
  var close = function(options) {
    if (100 != options.status) {
      if (2 == options.H) {
        toggle(options);
      }
      window.clearTimeout(options.J);
      /** @type {number} */
      options.J = -1;
      /** @type {number} */
      options.w = 3;
      if (options.l) {
        var value = options.l;
        if (!value.l) {
          /** @type {boolean} */
          value.l = true;
          value.u();
        }
        /** @type {null} */
        options.l = null;
      }
      if (options.B && options.j) {
        options.B.unobserve(options.j);
      } else {
        unbind(window, "resize", options.I);
        unbind(window, "scroll", options.I);
      }
      if (value = options.j) {
        value = options.v;
        var element;
        a: {
          element = options.j;
          var node;
          if (radix && (!(sx && (attr("9") && (!attr("10") && (global.SVGElement && element instanceof global.SVGElement)))) && (node = element.parentElement))) {
            element = node;
            break a;
          }
          node = element.parentNode;
          element = apply(node) && 1 == node.nodeType ? node : null;
        }
        /** @type {boolean} */
        value = value == element;
      }
      if (value) {
        options.v.removeChild(options.j);
      }
      /** @type {null} */
      options.j = null;
      /** @type {null} */
      options.v = null;
      if (options.B) {
        options.B.disconnect();
        /** @type {null} */
        options.B = null;
      }
      /** @type {number} */
      options.status = 100;
    }
  };
  /**
   * @param {?} config
   * @param {?} chart
   * @param {?} args
   * @param {?} info
   * @param {?} plot
   * @return {undefined}
   */
  var constructor = function(config, chart, args, info, plot) {
    this.advertiserId = config;
    this.campaignId = chart;
    this.creativeId = args;
    this.labelIds = info;
    this.lineItemId = plot;
  };
  /**
   * @param {string} object
   * @return {?}
   */
  var subscribe = function(object) {
    var a = scale();
    var value = {};
    if (!object || !apply(object)) {
      return null;
    }
    /** @type {boolean} */
    var iterator = false;
    each(object, function(opt_attributes, i) {
      switch(i) {
        case "allowOverlayExpansion":
          if (isDefined(opt_attributes)) {
            value.allowOverlayExpansion = object.allowOverlayExpansion;
          } else {
            a.error(put("allowOverlayExpansion", object.allowOverlayExpansion), null, this);
            /** @type {boolean} */
            iterator = true;
          }
          break;
        case "allowPushExpansion":
          if (isDefined(opt_attributes)) {
            value.allowPushExpansion = object.allowPushExpansion;
          } else {
            a.error(put("allowPushExpansion", object.allowPushExpansion), null, this);
            /** @type {boolean} */
            iterator = true;
          }
          break;
        case "sandbox":
          if (true === opt_attributes) {
            value.sandbox = object.sandbox;
          } else {
            a.error(put("sandbox", object.sandbox), null, this);
            /** @type {boolean} */
            iterator = true;
          }
          break;
        default:
          a.$a(expression(i), null, this);
      }
    });
    return iterator ? null : value;
  };
  /**
   * @param {Array} codeSegments
   * @return {?}
   */
  var inject = function(codeSegments) {
    var memo = {};
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      each(codeSegments[i], function(value, key) {
        memo[key] = value;
      });
    }
    return memo;
  };
  var destElements = {
    ac : "slotRenderEnded",
    Qb : "impressionViewable",
    bc : "slotVisibilityChanged",
    $b : "slotOnload"
  };
  /**
   * @param {?} elem
   * @param {?} condition
   * @param {?} nodes
   * @param {?} root
   * @param {?} value
   * @param {?} obj
   * @param {?} xs
   * @param {?} destroy
   * @param {?} topic
   * @return {undefined}
   */
  var empty = function(elem, condition, nodes, root, value, obj, xs, destroy, topic) {
    this.slot = elem;
    this.isEmpty = condition;
    this.size = nodes;
    this.advertiserId = root;
    this.campaignId = value;
    this.creativeId = obj;
    this.labelIds = xs;
    this.lineItemId = destroy;
    this.serviceName = topic;
    /** @type {boolean} */
    this.slotContentChanged = true;
  };
  /**
   * @param {?} slot
   * @return {undefined}
   */
  var checkParametersSpecified = function(slot) {
    var serviceName = resolve().getName();
    this.slot = slot;
    this.serviceName = serviceName;
  };
  /**
   * @param {?} slot
   * @param {?} serviceName
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  var createDeployment = function(slot, serviceName, dataAndEvents) {
    this.slot = slot;
    this.serviceName = serviceName;
    this.inViewPercentage = dataAndEvents;
  };
  /**
   * @param {?} slot
   * @param {?} serviceName
   * @return {undefined}
   */
  var suspendDeploymentSlot = function(slot, serviceName) {
    this.slot = slot;
    this.serviceName = serviceName;
  };
  /**
   * @return {undefined}
   */
  var transform = function() {
    /** @type {Array} */
    this.ca = [];
    this.fa = {};
    /** @type {boolean} */
    this.l = false;
    this.B = {};
    this.log = scale();
    this.log.info(transformFn(this.getName()), this);
  };
  self = transform.prototype;
  /**
   * @return {?}
   */
  self.getName = function() {
    return "unknown";
  };
  /**
   * @return {?}
   */
  self.getVersion = function() {
    return "unversioned";
  };
  /**
   * @return {?}
   */
  self.getSlots = function() {
    return this.ca;
  };
  /**
   * @return {?}
   */
  self.getSlotIdMap = function() {
    return this.fa;
  };
  /**
   * @return {undefined}
   */
  self.enable = function() {
    if (this.l) {
      this.log.info(proxy(), this);
    } else {
      try {
        this.va();
        /** @type {boolean} */
        this.l = true;
      } catch (arg) {
        after(87, arg);
        this.log.error(checkMethod(String(arg)), this);
      }
    }
  };
  /**
   * @param {string} obj
   * @return {undefined}
   */
  self.Ea = function(obj) {
    this.ca.push(obj);
    /** @type {string} */
    this.fa[write(obj)] = obj;
    this.log.info(defaultLibName(this.getName(), obj.getAdUnitPath()), this, obj);
  };
  /**
   * @param {string} type
   * @param {Function} fn
   * @return {?}
   */
  self.addEventListener = function(type, fn) {
    try {
      if (!then(fn) || !push(type)) {
        var stackStartFunction = call("Service.addEventListener", [type, fn]);
        this.log.$a(stackStartFunction, this);
        return this;
      }
      if (!removeEventListener(destElements, type)) {
        return this.log.$a(getListeners(type), this), this;
      }
      if (!isFunction(this.B[type])) {
        /** @type {Array} */
        this.B[type] = [];
      }
      this.B[type].push(fn);
      var suiteView = new test("gpt_callback_usage");
      valueOf(suiteView, "type", type);
      log(suiteView);
      jQuery(suiteView);
      return this;
    } catch (v1CompNum) {
      html(86, v1CompNum);
    }
  };
  /**
   * @param {Object} obj
   * @param {string} data
   * @param {Object} r
   * @return {undefined}
   */
  var request = function(obj, data, r) {
    data = obj.B[data];
    if (isFunction(data)) {
      forEach(data, function(k) {
        try {
          k(r);
        } catch (ex) {
          k = ex && push(ex.name) ? ex.name : null;
          var v = ex && push(ex.message) ? ex.message : null;
          /** @type {string} */
          var result = "";
          if (k && v) {
            /** @type {string} */
            result = k + ": " + v;
          } else {
            if (k) {
              /** @type {Object} */
              result = k;
            } else {
              if (v) {
                result = v;
              }
            }
          }
          this.log.$a(pipe(result), this);
        }
      }, obj);
    }
  };
  var funcs = {
    Nb : "loader_loaded_instant",
    Ob : "loader_loaded_instant_nw",
    Zb : "_start_pubads_load_period",
    Xb : "pubads_load_period",
    Yb : "impl_loaded_instant",
    Ub : "page_load_time",
    Vb : "page_load_time_nw",
    Wb : "page_unload_time",
    Fc : "fpt"
  };
  var nameToAliasesMap = {
    start_ad_fetch_period : true,
    start_ad_render_period : true
  };
  var prevSources = {
    pubads_load_period : "_start_pubads_load_period"
  };
  var testSource = {
    ad_fetch_period : "start_ad_fetch_period",
    ad_render_period : "start_ad_render_period"
  };
  /**
   * @return {undefined}
   */
  var loop = function() {
    /** @type {boolean} */
    this.j = false;
    if (global.GPT_jstiming) {
      if (global.GPT_jstiming.load) {
        if ("http:" == global.location.protocol || "https:" == global.location.protocol) {
          if (cg) {
            /** @type {boolean} */
            this.j = true;
          }
        }
      }
    }
    /** @type {string} */
    this.Z = source;
    /** @type {null} */
    this.u = this.o = this.M = null;
    /** @type {boolean} */
    this.L = this.I = this.H = false;
    this.B = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
    this.m = window.GPT_jstiming.load;
    /** @type {string} */
    this.m.name = "global";
    if (!window.performance || !window.performance.timing) {
      var udataCur = ctor.getInstance().get(49);
      this.B = udataCur;
      this.m.tick("start", void 0, udataCur);
    }
    this.l = {};
    /** @type {number} */
    this.C = 500;
    /** @type {Array} */
    this.V = [];
    this.D = {};
    /** @type {boolean} */
    this.J = false;
    /** @type {number} */
    this.Y = this.W = 0;
    /** @type {boolean} */
    this.w = false;
    this.v = {};
    this.A = {};
    /** @type {number} */
    this.X = this.O = this.U = this.P = this.R = this.N = this.T = 0;
  };
  /** @type {null} */
  var returnItem = null;
  /**
   * @return {?}
   */
  var split = function() {
    return returnItem || getNext();
  };
  /**
   * @return {?}
   */
  var getNext = function() {
    var win = window;
    var item = new loop;
    returnItem = item;
    if (!item.j) {
      return item;
    }
    execute(item);
    include(item);
    if (emit().fifWin && "complete" == document.readyState) {
      if (win.performance) {
        if (win.performance.timing) {
          play(item, win.performance.timing.loadEventStart);
        }
      }
    } else {
      contentLoaded(win, function() {
        play(item);
      });
    }
    addListener(win, function() {
      topic(item, "page_unload_time");
      getAsset(item, true);
    });
    key(item, "v107");
    return item;
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var include = function(item) {
    each(funcs, function(timeoutKey) {
      /** @type {boolean} */
      this.l[timeoutKey] = false;
    }, item);
  };
  /**
   * @param {Object} options
   * @param {string} t
   * @param {number} opt_attributes
   * @param {number} data
   * @return {undefined}
   */
  var tick = function(options, t, opt_attributes, data) {
    if (!options.m) {
      options.m = new global.GPT_jstiming.Timer(options.B);
      /** @type {string} */
      options.m.name = "global";
    }
    /** @type {boolean} */
    var _ = "_" == t[0];
    if (opt_attributes || (_ || window.performance && window.performance.timing)) {
      options.m.tick(t, opt_attributes, data);
      if (!_) {
        /** @type {boolean} */
        options.I = true;
      }
    }
    if (!options.J) {
      getAsset(options);
    }
  };
  /**
   * @param {Object} options
   * @param {string} t
   * @param {boolean} dt
   * @param {string} opt_attributes
   * @param {number} isXML
   * @return {undefined}
   */
  var step = function(options, t, dt, opt_attributes, isXML) {
    if (dt) {
      if (!options.u) {
        options.u = new global.GPT_jstiming.Timer(options.B);
        /** @type {string} */
        options.u.name = "ad_events_psbk";
      }
    } else {
      if (!options.o) {
        options.o = new global.GPT_jstiming.Timer(options.B);
        /** @type {string} */
        options.o.name = "ad_events";
      }
    }
    /** @type {boolean} */
    var _ = "_" == t.charAt(0);
    if (dt) {
      options.u.tick(t, opt_attributes, isXML);
      if (!_) {
        /** @type {boolean} */
        options.L = true;
      }
    } else {
      options.o.tick(t, opt_attributes, isXML);
      if (!_) {
        /** @type {boolean} */
        options.H = true;
      }
    }
  };
  /**
   * @param {Object} args
   * @param {string} i
   * @param {number} stream
   * @return {undefined}
   */
  var topic = function(args, i, stream) {
    try {
      if (args.j) {
        tick(args, i, prevSources[i], stream);
        /** @type {boolean} */
        args.l[i] = true;
      }
    } catch (v1CompNum) {
      html(104, v1CompNum);
    }
  };
  /**
   * @param {Object} content
   * @param {string} i
   * @param {(number|string)} k
   * @param {number} responseText
   * @return {undefined}
   */
  var updateContent = function(content, i, k, responseText) {
    try {
      if (i = i + "." + k, k = "_" + i) {
        tick(content, k, void 0, 0);
        tick(content, i, k, responseText);
      }
    } catch (v1CompNum) {
      html(104, v1CompNum);
    }
  };
  /**
   * @param {Object} el
   * @param {string} name
   * @param {string} key
   * @param {boolean} item
   * @param {number} isXML
   * @return {undefined}
   */
  var hasClass = function(el, name, key, item, isXML) {
    /** @type {string} */
    name = name + "." + key;
    /** @type {string} */
    key = "_" + name;
    step(el, key, item, void 0, 0);
    step(el, name, item, key, isXML);
  };
  /**
   * @param {Object} item
   * @param {string} name
   * @param {string} s
   * @param {boolean} o
   * @return {undefined}
   */
  var addClass = function(item, name, s, o) {
    if (item.j && !(1E3 < s)) {
      var ref = testSource[name];
      var i = ref;
      if (ref) {
        i += "." + s;
      }
      /** @type {string} */
      s = name + ("." + s);
      if (i) {
        if (item.D.hasOwnProperty("_" + i)) {
          /** @type {string} */
          i = "_" + i;
          step(item, i, o || false, void 0, item.D[i] + item.B);
          delete item.D[i];
        }
      }
      step(item, s, o || false, i);
      o = o ? item.u : item.o;
      if (nameToAliasesMap.hasOwnProperty(name)) {
        name = window.GPT_jstiming.getTick(o, s);
        /** @type {string} */
        item.D["_" + s] = name;
      }
    }
  };
  /**
   * @param {Object} t
   * @return {undefined}
   */
  var equals = function(t) {
    if (t.l.loader_loaded_instant) {
      if (!t.l.loader_loaded_instant_nw) {
        topic(t, "loader_loaded_instant_nw", t.W);
      }
    }
    if (t.l.page_load_time) {
      if (!t.l.page_load_time_nw) {
        topic(t, "page_load_time_nw", t.Y);
      }
    }
  };
  /**
   * @param {Object} self
   * @return {undefined}
   */
  var execute = function(self) {
    window.setTimeout(bind(function() {
      try {
        var a = getAsset(this);
        var b;
        if (this.j) {
          /** @type {boolean} */
          var _b = false;
          if (this.o) {
            if (this.H) {
              getIndex(this, this.v);
              report(this.o, this.v);
              /** @type {null} */
              this.o = null;
              /** @type {boolean} */
              this.H = false;
              this.v = {};
              /** @type {boolean} */
              _b = true;
            }
          }
          if (this.u) {
            if (this.L) {
              getIndex(this, this.A);
              report(this.u, this.A);
              /** @type {null} */
              this.u = null;
              /** @type {boolean} */
              this.L = false;
              this.A = {};
              /** @type {boolean} */
              _b = true;
            }
          }
          /** @type {boolean} */
          b = _b;
        } else {
          /** @type {boolean} */
          b = false;
        }
        if (a || b) {
          /** @type {number} */
          this.C = 32E3 < 2 * this.C ? 32E3 : 2 * this.C;
        }
        execute(this);
      } catch (v1CompNum) {
        html(105, v1CompNum);
      }
    }, self), self.C);
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var queue = function(data) {
    var q = null != data.m && (data.I && ((data.l.page_load_time || "complete" == document.readyState) && data.l.loader_loaded_instant));
    if (q) {
      each(funcs, function(i) {
        var u = prevSources[i];
        if (u) {
          q = q && this.l[i] == this.l[u];
        }
      }, data);
    }
    return q;
  };
  /**
   * @param {Object} item
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  var getAsset = function(item, dataAndEvents) {
    if (!item.j) {
      return false;
    }
    /** @type {boolean} */
    var node = false;
    if (item.m && (dataAndEvents || queue(item))) {
      if (dataAndEvents) {
        key(item, "page_unload");
      } else {
        key(item, "page_load");
      }
      node = {};
      if (!item.J || dataAndEvents) {
        node.count_of_slots = item.T;
        node.count_of_requested_slots = item.R;
        node.count_of_rendered_slots = item.P;
        node.count_of_requests = item.U;
        node.count_of_refreshes_called = item.O;
        node.count_of_passback = item.N;
      }
      getIndex(item, node);
      report(item.m, node);
      /** @type {boolean} */
      item.J = true;
      /** @type {boolean} */
      item.I = false;
      /** @type {null} */
      item.m = null;
      /** @type {boolean} */
      node = true;
    }
    return node;
  };
  /**
   * @param {Object} data
   * @param {Object} result
   * @return {undefined}
   */
  var report = function(data, result) {
    /** @type {string} */
    var message = "https:" == global.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi";
    if ($(filters, event.la)) {
      message = global.GPT_jstiming.getReportUri(data, result, message);
      if (!global.navigator.sendBeacon(message, "")) {
        listen(global, message);
      }
    } else {
      if ($(filters, event.xa)) {
        message = global.GPT_jstiming.getReportUri(data, result, message);
        global.navigator.sendBeacon(message, "");
      } else {
        global.GPT_jstiming.report(data, result, message);
      }
    }
  };
  /**
   * @param {string} a
   * @param {Object} s
   * @return {undefined}
   */
  var getIndex = function(a, s) {
    /** @type {string} */
    s.vrg = "107";
    s.pl_id = a.Z;
    a = a.V.join();
    var b = filter().join();
    s.e = a.length && b.length ? a + "," + b : a + b;
  };
  /**
   * @param {Object} keepActiveItem
   * @param {string} type
   * @return {undefined}
   */
  var key = function(keepActiveItem, type) {
    if (0 < type.length) {
      validate(keepActiveItem.V, type);
    }
  };
  /**
   * @param {Date} item
   * @param {boolean} recurring
   * @return {undefined}
   */
  var getRowLineTable = function(item, recurring) {
    if (null === item.M) {
      if (item.M = recurring) {
        key(item, "sra");
      } else {
        key(item, "non-sra");
      }
    }
  };
  /**
   * @param {Object} item
   * @param {?} i
   * @param {string} key
   * @param {boolean} o
   * @return {undefined}
   */
  var getKey = function(item, i, key, o) {
    if (item.j) {
      if (o) {
        item.A[i] = item.A[i] || [];
        item.A[i].push(key);
      } else {
        item.v[i] = item.v[i] || [];
        item.v[i].push(key);
      }
    }
  };
  /**
   * @param {Object} item
   * @param {string} err
   * @return {undefined}
   */
  var resolver = function(item, err) {
    switch(err) {
      case "count_of_slots":
        ++item.T;
        break;
      case "count_of_requested_slots":
        ++item.R;
        break;
      case "count_of_rendered_slots":
        ++item.P;
        break;
      case "count_of_requests":
        ++item.U;
        break;
      case "count_of_refreshes_called":
        ++item.O;
        break;
      case "count_of_passback":
        ++item.N;
    }
  };
  /**
   * @param {Object} options
   * @param {number} y
   * @return {undefined}
   */
  var play = function(options, y) {
    if (options.j) {
      topic(options, "page_load_time", y);
      var pdataCur = calcFirstPaintTimeResults();
      if (pdataCur) {
        tick(options, "fpt", void 0, pdataCur);
      }
      if (options.w) {
        topic(options, "page_load_time_nw", y);
      } else {
        options.Y = y || (new Date).getTime();
      }
    }
  };
  /**
   * @param {Object} info
   * @return {undefined}
   */
  var listener = function(info) {
    topic(info, "loader_loaded_instant");
    if (info.w) {
      topic(info, "loader_loaded_instant_nw");
    } else {
      /** @type {number} */
      info.W = (new Date).getTime();
    }
  };
  /**
   * @return {undefined}
   */
  var charSet = function() {
    var typePattern = split();
    topic(typePattern, "_start_pubads_load_period");
  };
  /**
   * @param {Object} str
   * @return {undefined}
   */
  var str2binb = function(str) {
    topic(str, "impl_loaded_instant");
    topic(str, "pubads_load_period");
  };
  /**
   * @param {Object} item
   * @param {string} name
   * @param {boolean} test
   * @param {Object} obj
   * @return {undefined}
   */
  var all = function(item, name, test, obj) {
    addClass(item, "start_ad_fetch_period", name, test);
    if (obj) {
      each(obj, function(val, dataName) {
        getKey(this, dataName, name + "_" + val, test);
      }, item);
    }
    resolver(item, "count_of_requests");
  };
  /**
   * @param {Object} el
   * @param {string} name
   * @param {boolean} group
   * @param {boolean} opt_condition
   * @param {Object} c
   * @return {undefined}
   */
  var toggleClass = function(el, name, group, opt_condition, c) {
    addClass(el, "start_ad_render_period", name, group);
    hasClass(el, "exr", name, group, opt_condition ? 1 : 0);
    if (c) {
      each(c, function(val, dataName) {
        getKey(this, dataName, name + "_" + val, group);
      }, el);
    }
  };
  /**
   * @param {Object} el
   * @param {string} eventType
   * @param {Object} object
   * @param {boolean} name
   * @return {undefined}
   */
  var trigger = function(el, eventType, object, name) {
    if (el.j) {
      try {
        var i = object && object.contentWindow;
        if (i) {
          var region;
          if (i.performance && i.performance.getEntries) {
            var codeSegments = i.performance.getEntries();
            var valuesLen = codeSegments.length;
            /** @type {number} */
            object = 0;
            if (valuesLen && isClassOf(codeSegments[0].transferSize)) {
              /** @type {number} */
              i = 0;
              for (;i < valuesLen;i++) {
                object += codeSegments[i].transferSize;
              }
            }
            region = {
              Lb : valuesLen,
              ec : object
            };
          } else {
            /** @type {null} */
            region = null;
          }
          if (region) {
            hasClass(el, "nres", eventType, name, region.Lb);
            hasClass(el, "tts", eventType, name, region.ec);
          }
        }
      } catch (l) {
      }
    }
  };
  /**
   * @param {Object} v
   * @param {Object} t
   * @param {string} s
   * @return {undefined}
   */
  var handleSuccess = function(v, t, s) {
    if (v.j) {
      var win = emit().fifWin || window;
      if (win.performance) {
        if (win.performance.getEntriesByName) {
          if (t = win.performance.getEntriesByName(t)[0]) {
            updateContent(v, "rt_st", s, t.startTime);
            updateContent(v, "rt_fs", s, t.fetchStart);
            if (0 < t.responseStart) {
              updateContent(v, "rt_dns", s, t.domainLookupEnd - t.domainLookupStart);
              updateContent(v, "rt_tcp", s, t.connectEnd - t.connectStart);
              if (t.secureConnectionStart) {
                updateContent(v, "rt_ssl", s, t.connectEnd - t.secureConnectionStart);
              }
              updateContent(v, "rt_rtt", s, t.responseStart - t.fetchStart);
              updateContent(v, "rt_tft", s, t.responseEnd - t.responseStart);
            }
            updateContent(v, "rt_duration", s, t.duration);
          }
        }
      }
    }
  };
  /**
   * @return {?}
   */
  var calcFirstPaintTimeResults = function() {
    var t = window.performance && window.performance.timing;
    if (!t) {
      return 0;
    }
    if (window.chrome && window.chrome.loadTimes) {
      var lt = window.chrome.loadTimes();
      /** @type {number} */
      var calcFirstPaintTimeResults = 1E3 * lt.firstPaintTime;
      if (t) {
        if (t.navigationStart) {
          if (lt.startLoadTime) {
            calcFirstPaintTimeResults -= 1E3 * lt.startLoadTime - t.navigationStart;
          }
        }
      }
      return calcFirstPaintTimeResults;
    }
    return t && t.msFirstPaint ? t.msFirstPaint : 0;
  };
  /**
   * @return {undefined}
   */
  var controller = function() {
    this.j = {};
    /** @type {boolean} */
    this.m = false;
    this.l = scale();
    this.u = this.l.info(rev());
    contentLoaded(window, bind(controller.prototype.o, this));
  };
  /**
   * @param {?} args
   * @param {string} name
   * @return {?}
   */
  var g = function(args, name) {
    /** @type {null} */
    var d = null;
    if (name in args.j) {
      d = args.j[name];
    }
    return d;
  };
  /**
   * @return {undefined}
   */
  var addEventHandler = function() {
    var args = argsToArray();
    each(args.j, function(field, identifier) {
      field.enable();
      key(split(), identifier);
    });
  };
  /**
   * @return {undefined}
   */
  controller.prototype.o = function() {
    try {
      /** @type {boolean} */
      this.m = true;
      this.l.info(appendModelPrefix(), null, null, this.u);
    } catch (v1CompNum) {
      html(92, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  var argsToArray = function() {
    var service_manager_instance = emit();
    return service_manager_instance.service_manager_instance || (service_manager_instance.service_manager_instance = new controller);
  };
  reply("enableServices", function() {
    try {
      addEventHandler();
    } catch (v1CompNum) {
      html(91, v1CompNum);
    }
  });
  /**
   * @param {string} value
   * @return {?}
   */
  var formatter = function(value) {
    var userInitiated = isFunction(value) && (2 == value.length && (bindCallbacks(value[0]) && bindCallbacks(value[1])));
    value = push(value) && "fluid" == value;
    return userInitiated || value;
  };
  /**
   * @param {Array} value
   * @return {?}
   */
  var formatError = function(value) {
    return isFunction(value) ? new Sprite(value[0], value[1]) : value;
  };
  /**
   * @param {string} obj
   * @return {?}
   */
  var invoke = function(obj) {
    var ctx = isFunction(obj) && (1 < obj.length && (isClassOf(obj[0]) && isClassOf(obj[1])));
    obj = push(obj) && "fluid" == obj;
    return ctx || obj;
  };
  /**
   * @param {?} l
   * @param {?} once
   * @return {undefined}
   */
  var Sprite = function(l, once) {
    this.l = l;
    this.j = once;
  };
  /**
   * @return {?}
   */
  Sprite.prototype.getWidth = function() {
    return this.l;
  };
  /**
   * @return {?}
   */
  Sprite.prototype.getHeight = function() {
    return this.j;
  };
  /**
   * @param {?} arg
   * @return {?}
   */
  var populate = function(arg) {
    /** @type {Array} */
    var _results = [];
    if (invoke(arg)) {
      _results.push(formatError(arg));
    } else {
      if (isFunction(arg)) {
        /** @type {number} */
        var a = 0;
        for (;a < arg.length;++a) {
          var value = arg[a];
          if (invoke(value)) {
            _results.push(formatError(value));
          }
        }
      }
    }
    return _results;
  };
  /**
   * @param {?} l
   * @param {?} a
   * @return {undefined}
   */
  var int64 = function(l, a) {
    this.l = l;
    this.j = a;
  };
  /**
   * @param {?} j
   * @return {undefined}
   */
  var PluginResult = function(j) {
    this.j = j;
  };
  /**
   * @param {Object} h
   * @param {?} f
   * @return {?}
   */
  var size = function(h, f) {
    h = last(h.j, function(sf) {
      sf = sf.l;
      return sf.width <= f.width && sf.height <= f.height;
    });
    return null == h ? null : h.j;
  };
  /**
   * @param {Array} options
   * @return {?}
   */
  var cancel = function(options) {
    if (!isFunction(options) || 2 != options.length) {
      throw Error("Each mapping entry has to be an array of size 2");
    }
    var center;
    center = options[0];
    if (!formatter(center) || "fluid" == center) {
      throw Error("Size has to be an array of two non-negative integers");
    }
    center = new Vector(center[0], center[1]);
    if (isFunction(options[1]) && 0 == options[1].length) {
      /** @type {Array} */
      options = [];
    } else {
      if (options = populate(options[1]), 0 == options.length) {
        throw Error("At least one slot size must be present");
      }
    }
    return new int64(center, options);
  };
  /**
   * @param {?} j
   * @param {?} name
   * @param {string} subscript
   * @return {undefined}
   */
  var sub = function(j, name, subscript) {
    this.j = j;
    this.ma = isClassOf(name) ? name : 0;
    /** @type {string} */
    this.l = this.j + "_" + this.ma;
    this.m = subscript || "gpt_unit_" + this.l;
  };
  self = sub.prototype;
  /**
   * @return {?}
   */
  self.getId = function() {
    return this.l;
  };
  /**
   * @return {?}
   */
  self.getAdUnitPath = function() {
    return this.j;
  };
  /**
   * @return {?}
   */
  self.getName = function() {
    return this.j;
  };
  /**
   * @return {?}
   */
  self.getInstance = function() {
    return this.ma;
  };
  /** @type {function (): ?} */
  self.toString = sub.prototype.getId;
  /**
   * @return {?}
   */
  self.getDomId = function() {
    return this.m;
  };
  /**
   * @param {string} dataAndEvents
   * @param {string} m
   * @param {?} params
   * @param {string} o
   * @return {undefined}
   */
  var setFillAndStroke = function(dataAndEvents, m, params, o) {
    /** @type {string} */
    this.C = dataAndEvents;
    this.rb = populate(params);
    /** @type {null} */
    this.V = null;
    this.m = new sub(dataAndEvents, m, o);
    /** @type {Array} */
    this.u = [];
    this.D = {};
    /** @type {null} */
    this.J = null;
    this.j = scale();
    this.j.info(toInt(this.m.toString()), null, this);
    /** @type {null} */
    this.ra = this.w = this.aa = this.A = null;
    /** @type {string} */
    this.Z = this.ca = "";
    /** @type {boolean} */
    this.U = true;
    this.v = {};
    /** @type {Array} */
    this.N = [];
    /** @type {boolean} */
    this.ga = false;
    /** @type {null} */
    this.da = this.ba = null;
    /** @type {number} */
    this.Y = 0;
    /** @type {number} */
    this.W = -1;
    /** @type {number} */
    this.fa = 0;
    /** @type {boolean} */
    this.hb = false;
    this.M = {};
    /** @type {string} */
    this.oa = "";
    /** @type {boolean} */
    this.R = false;
    /** @type {null} */
    this.L = null;
    /** @type {boolean} */
    this.P = false;
    /** @type {null} */
    this.B = null;
    this.sb = blur(function() {
      if (null !== this.B) {
        this.visibilityChanged(this.B);
      }
    }, this);
    this.$ = stringToArray(this.C);
    /** @type {string} */
    this.X = "";
    /** @type {null} */
    this.I = this.o = null;
    /** @type {boolean} */
    this.sa = false;
    /** @type {null} */
    this.l = null;
    /** @type {number} */
    this.ha = this.T = 0;
    /** @type {boolean} */
    this.H = this.O = false;
    /** @type {number} */
    this.tb = ++split().X;
  };
  self = setFillAndStroke.prototype;
  /**
   * @return {?}
   */
  self.getPassbackPageUrl = function() {
    return this.oa;
  };
  /**
   * @param {?} state
   * @param {number} value
   * @return {?}
   */
  self.set = function(state, value) {
    try {
      if (!push(state) || !value) {
        return this.j.$a(call("Slot.set", [state, value]), null, this), this;
      }
      var progressValues = this.getAdUnitPath();
      /** @type {number} */
      this.D[state] = value;
      if (this.A || this.w) {
        this.j.$a(updateFunc(state, String(value), progressValues), null, this);
      } else {
        this.j.info(isObject(state, String(value), progressValues), null, this);
      }
      return this;
    } catch (v1CompNum) {
      html(40, v1CompNum);
    }
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.get = function(opt_attributes) {
    try {
      return push(opt_attributes) ? this.D.hasOwnProperty(opt_attributes) ? this.D[opt_attributes] : null : (this.j.$a(call("Slot.get", [opt_attributes]), null, this), null);
    } catch (v1CompNum) {
      html(41, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getAttributeKeys = function() {
    try {
      /** @type {Array} */
      var keys = [];
      each(this.D, function(dataAndEvents, key) {
        keys.push(key);
      });
      return keys;
    } catch (v1CompNum) {
      html(42, v1CompNum);
    }
  };
  /**
   * @param {string} p
   * @return {?}
   */
  self.addService = function(p) {
    try {
      var i = argsToArray();
      if (!removeEventListener(i.j, p)) {
        return this.j.$a(addCharsToCharClass(this.m.toString()), null, this), this;
      }
      /** @type {number} */
      i = 0;
      for (;i < this.u.length;++i) {
        if (p == this.u[i]) {
          return this.j.$a(loopMatch(p.getName(), this.m.toString()), p, this), this;
        }
      }
      this.u.push(p);
      p.Ea(this);
      return this;
    } catch (v1CompNum) {
      html(43, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getName = function() {
    return this.C;
  };
  /**
   * @return {?}
   */
  self.getAdUnitPath = function() {
    try {
      return this.C;
    } catch (v1CompNum) {
      html(54, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getInstance = function() {
    return this.getSlotId().getInstance();
  };
  /**
   * @return {?}
   */
  self.getSlotElementId = function() {
    return this.m.getDomId();
  };
  /**
   * @return {?}
   */
  self.getSlotId = function() {
    return this.m;
  };
  /**
   * @return {?}
   */
  self.getServices = function() {
    return this.u;
  };
  /**
   * @param {Array} value
   * @param {Array} ctor
   * @return {?}
   */
  self.getSizes = function(value, ctor) {
    return isClassOf(value) && (isClassOf(ctor) && this.V) ? size(this.V, new Vector(value, ctor)) : this.rb;
  };
  /**
   * @param {Object} c
   * @return {?}
   */
  var write = function(c) {
    return c.C + "_" + c.m.getInstance();
  };
  /**
   * @param {string} items
   * @return {?}
   */
  setFillAndStroke.prototype.defineSizeMapping = function(items) {
    try {
      if (!isFunction(items)) {
        throw Error("Size mapping has to be an array");
      }
      var args = map(items, cancel);
      this.V = new PluginResult(args);
    } catch (error) {
      after(44, error);
      this.j.$a(accept(error.message), null, this);
    }
    return this;
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var keys = function(obj) {
    var value = window;
    /** @type {null} */
    var $keys = null;
    if (value.top == value) {
      value = getWindowSize(window);
      $keys = obj.getSizes(value.width, value.height);
    }
    if (null == $keys) {
      $keys = obj.getSizes();
    }
    return map($keys, function(child) {
      return push(child) ? child : [child.getWidth(), child.getHeight()];
    });
  };
  /**
   * @param {?} object
   * @return {?}
   */
  var serialize = function(object) {
    /** @type {Array} */
    var list = [];
    /** @type {boolean} */
    var c = false;
    forEach(keys(object), function(arg) {
      if (isFunction(arg)) {
        list.push(arg.join("x"));
      } else {
        if ("fluid" == arg) {
          /** @type {boolean} */
          c = true;
        } else {
          list.push(arg);
        }
      }
    });
    if (c) {
      list.unshift("320x50");
    }
    return list.join("|");
  };
  self = setFillAndStroke.prototype;
  /**
   * @return {?}
   */
  self.hasWrapperDiv = function() {
    return!!document.getElementById(this.m.getDomId());
  };
  /**
   * @param {string} str
   * @return {?}
   */
  self.setClickUrl = function(str) {
    try {
      if (!push(str)) {
        return this.j.$a(call("Slot.setClickUrl", [str]), null, this), this;
      }
      /** @type {string} */
      this.Z = str;
      return this;
    } catch (v1CompNum) {
      html(45, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getClickUrl = function() {
    return this.Z;
  };
  /**
   * @param {Function} opt_attributes
   * @return {?}
   */
  self.setForceSafeFrame = function(opt_attributes) {
    try {
      if (!isDefined(opt_attributes)) {
        return this.j.$a(call("Slot.setForceSafeFrame", [opt_attributes]), null, this), this;
      }
      /** @type {Function} */
      this.L = opt_attributes;
      return this;
    } catch (v1CompNum) {
      html(55, v1CompNum);
    }
  };
  /**
   * @param {?} message
   * @return {?}
   */
  self.setCategoryExclusion = function(message) {
    try {
      return push(message) && !assertFalse(escape(message)) ? (validate(this.N, message), this.j.info(getArrayBuffer(message), null, this)) : this.j.$a(call("Slot.setCategoryExclusion", [message]), null, this), this;
    } catch (v1CompNum) {
      html(46, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.clearCategoryExclusions = function() {
    try {
      return this.j.info(internalCallback(), null, this), this.N = [], this;
    } catch (v1CompNum) {
      html(47, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getCategoryExclusions = function() {
    try {
      return hasKey(this.N);
    } catch (v1CompNum) {
      html(48, v1CompNum);
    }
  };
  /**
   * @param {?} state
   * @param {Array} source
   * @return {?}
   */
  self.setTargeting = function(state, source) {
    try {
      /** @type {Array} */
      var text = [];
      if (isFunction(source)) {
        /** @type {Array} */
        text = source;
      } else {
        if (source) {
          text.push(source.toString());
        }
      }
      if (push(state)) {
        this.j.info(setCtx(state, text.join(), this.getAdUnitPath()), null, this);
        /** @type {Array} */
        this.v[state] = text;
      } else {
        this.j.$a(call("Slot.setTargeting", [state, source]), null, this);
      }
      return this;
    } catch (v1CompNum) {
      html(49, v1CompNum);
    }
  };
  /**
   * @param {?} message
   * @return {?}
   */
  self.clearTargeting = function(message) {
    try {
      if (arguments.length) {
        if (!push(message) || assertFalse(escape(message))) {
          return this.j.$a(call("Slot.clearTargeting", [message]), null, this), this;
        }
        if (!this.v[message]) {
          return this.j.$a(escapeText(message, this.getAdUnitPath()), null, this), this;
        }
        delete this.v[message];
        this.j.info(generateError(message, this.getAdUnitPath()), null, this);
      } else {
        this.j.info(isUndefinedOrNull(), null, this);
        this.v = {};
      }
      return this;
    } catch (v1CompNum) {
      html(50, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getTargetingMap = function() {
    return forceArray(this.v);
  };
  /**
   * @param {?} c
   * @return {?}
   */
  self.getTargeting = function(c) {
    try {
      return push(c) ? this.v.hasOwnProperty(c) ? hasKey(this.v[c]) : [] : (this.j.$a(call("Slot.getTargeting", [c]), null, this), []);
    } catch (v1CompNum) {
      html(51, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getTargetingKeys = function() {
    try {
      /** @type {Array} */
      var spec = [];
      each(this.v, function(dataAndEvents, func) {
        spec.push(func);
      });
      return spec;
    } catch (v1CompNum) {
      html(52, v1CompNum);
    }
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.wa = function(deepDataAndEvents) {
    /** @type {string} */
    this.ga = deepDataAndEvents;
  };
  /**
   * @return {?}
   */
  self.getOutOfPage = function() {
    return this.ga;
  };
  /**
   * @return {?}
   */
  self.getAudExtId = function() {
    return this.Y;
  };
  /**
   * @return {?}
   */
  self.gtfcd = function() {
    return this.W;
  };
  /**
   * @param {Function} opt_attributes
   * @param {Function} attributes
   * @return {?}
   */
  self.setCollapseEmptyDiv = function(opt_attributes, attributes) {
    try {
      if (!isDefined(opt_attributes) || attributes && !isDefined(attributes)) {
        return this.j.$a(call("Slot.setCollapseEmptyDiv", remove([opt_attributes, attributes], set)), null, this), this;
      }
      this.da = (this.ba = opt_attributes) && !!attributes;
      if (attributes) {
        if (!opt_attributes) {
          this.j.$a(compiled(this.m.toString()), null, this);
        }
      }
      return this;
    } catch (v1CompNum) {
      html(53, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  self.getCollapseEmptyDiv = function() {
    return this.ba;
  };
  /**
   * @return {?}
   */
  self.getDivStartsCollapsed = function() {
    return this.da;
  };
  /**
   * @param {Object} data
   * @param {Object} name
   * @return {?}
   */
  var post = function(data, name) {
    if (!data.hasWrapperDiv()) {
      return data.j.error(instrumentAttrSetter(data.m.toString()), null, data), false;
    }
    var element = global.document;
    var value = data.m.getDomId();
    element = element && element.getElementById(value);
    if (!element) {
      return data.j.error(getPath(value, data.m.toString()), null, data), false;
    }
    value = data.J;
    return push(value) && 0 < value.length ? (data.renderStarted(), element.innerHTML = value, data.renderEnded(name), true) : false;
  };
  /**
   * @param {string} target
   * @param {?} object
   * @return {?}
   */
  var extend = function(target, object) {
    /** @type {null} */
    var c = null;
    /** @type {boolean} */
    var length = true;
    /** @type {null} */
    var e = null;
    /** @type {null} */
    var f = null;
    /** @type {null} */
    var g = null;
    /** @type {null} */
    var k = null;
    /** @type {null} */
    var l = null;
    if (apply(object)) {
      length = object._empty_;
      if (!length) {
        /** @type {Array} */
        c = [object._width_, object._height_];
        if (0 == object._is_afc_) {
          if (object._creative_ids_) {
            if (object._adgroup2_ids_) {
              g = object._creative_ids_[0];
              l = object._adgroup2_ids_[0];
            }
          }
        }
        if (object._advertiser_ids_) {
          e = object._advertiser_ids_[0];
        }
        if (object._campaign_ids_) {
          f = object._campaign_ids_[0];
        }
        if (object._label_ids_) {
          if (object._label_ids_[0]) {
            k = push(object._label_ids_[0]) ? object._label_ids_[0].split("|") : [object._label_ids_[0]];
          }
        }
      }
    }
    return new empty(target, length, c, e, f, g, k, l, "publisher_ads");
  };
  /**
   * @param {Object} e
   * @return {?}
   */
  var slice = function(e) {
    return new empty(e, true, null, null, null, null, null, null, "publisher_ads");
  };
  self = setFillAndStroke.prototype;
  /**
   * @param {?} result
   * @return {undefined}
   */
  self.fetchStarted = function(result) {
    if (!this.A) {
      resolver(split(), "count_of_requested_slots");
    }
    this.A = this.j.info(argsToString(this.getAdUnitPath()), null, this);
    this.ca = result;
    this.T++;
  };
  /**
   * @return {?}
   */
  self.getContentUrl = function() {
    return this.ca;
  };
  /**
   * @return {undefined}
   */
  self.fetchEnded = function() {
    this.aa = this.j.info(getResponseSummary(this.getAdUnitPath()), null, this, this.A);
  };
  /**
   * @return {undefined}
   */
  self.renderStarted = function() {
    this.w = this.j.info(summary(this.getAdUnitPath()), null, this);
  };
  /**
   * @return {?}
   */
  self.getResponseInformation = function() {
    return this.I;
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  self.renderEnded = function(message) {
    if (message.isEmpty) {
      /** @type {null} */
      this.I = null;
    } else {
      this.I = new constructor(message.advertiserId, message.campaignId, message.creativeId, message.labelIds, message.lineItemId);
    }
    if (!this.ra) {
      resolver(split(), "count_of_rendered_slots");
    }
    this.ra = this.j.info(toVLQSigned(this.getAdUnitPath()), null, this, this.w);
    forEach(this.u, function(self) {
      if (self.getName() == message.serviceName) {
        var html;
        if (html = !message.slotContentChanged) {
          html = self.B.slotRenderEnded;
          /** @type {boolean} */
          html = !!html && 0 < html.length;
        }
        if (html) {
          html = new test("slot_render_ended_false_positive");
          log(html);
          jQuery(html);
        }
        request(self, "slotRenderEnded", message);
      }
    });
  };
  /**
   * @return {undefined}
   */
  self.loaded = function() {
    var self = resolve();
    var data = new suspendDeploymentSlot(this, self.getName());
    request(self, "slotOnload", data);
    var el = split();
    var name = this.getCsiId();
    var rvar = this.hb;
    addClass(el, "ad_render_period", name, rvar);
    if (!this.o) {
      var which = document.getElementById(getElementById(this));
      trigger(el, name, which, rvar);
      window.setTimeout(function() {
        trigger(el, name, which, rvar);
      }, 1E3);
    }
  };
  /**
   * @return {undefined}
   */
  self.impressionViewable = function() {
    handleResult(this, "impressionViewable", new checkParametersSpecified(this));
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  var addRow = function(data) {
    /** @type {boolean} */
    data.P = false;
    /** @type {null} */
    data.B = null;
    /** @type {null} */
    data.I = null;
    /** @type {boolean} */
    data.O = false;
    /** @type {null} */
    data.l = null;
  };
  /**
   * @param {string} toggle
   * @param {?} num
   * @return {undefined}
   */
  setFillAndStroke.prototype.La = function(toggle, num) {
    if (toggle) {
      if (!this.P) {
        this.impressionViewable();
        /** @type {boolean} */
        this.P = true;
      }
    }
    toggle = this.B;
    /** @type {number} */
    this.B = Math.floor(num);
    if (toggle !== this.B) {
      this.sb();
    }
  };
  /**
   * @param {Object} error
   * @return {undefined}
   */
  setFillAndStroke.prototype.visibilityChanged = function(error) {
    error = new createDeployment(this, resolve().getName(), error);
    handleResult(this, "slotVisibilityChanged", error);
  };
  /**
   * @param {Element} opt_attributes
   * @return {?}
   */
  setFillAndStroke.prototype.setFirstLook = function(opt_attributes) {
    if (!isDefined(opt_attributes)) {
      return this.j.$a(call("Slot.setFirstLook", [opt_attributes]), null, this), this;
    }
    /** @type {number} */
    this.fa = opt_attributes ? 1 : 2;
    return this;
  };
  /**
   * @return {?}
   */
  setFillAndStroke.prototype.getFirstLook = function() {
    return this.fa;
  };
  /**
   * @param {(Array|number)} params
   * @return {?}
   */
  var flatten = function(params) {
    /** @type {Array} */
    var tagNameArr = [];
    var funcs = params.getTargetingMap();
    each(funcs, function(codeSegments, sectionName) {
      /** @type {Array} */
      var encodedItemArray = [];
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;++i) {
        encodedItemArray.push(encodeURIComponent(codeSegments[i]));
      }
      tagNameArr.push(encodeURIComponent(sectionName) + "=" + encodedItemArray.join(","));
    });
    params = params.getCategoryExclusions();
    if (0 < params.length && !("excl_cat" in funcs)) {
      /** @type {Array} */
      funcs = [];
      /** @type {number} */
      var i = 0;
      for (;i < params.length;++i) {
        funcs.push(encodeURIComponent(params[i]));
      }
      tagNameArr.push(encodeURIComponent("excl_cat") + "=" + funcs.join(","));
    }
    return tagNameArr.join("&");
  };
  /**
   * @return {?}
   */
  setFillAndStroke.prototype.ua = function() {
    return this.T;
  };
  /**
   * @return {?}
   */
  setFillAndStroke.prototype.getEscapedQemQueryId = function() {
    return this.l && this.l._qqid_ || "";
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var isArraylike = function(obj) {
    return obj.l ? obj.l._is_afc_ ? obj.l._is_afc_ : false : null;
  };
  /**
   * @param {Object} parent
   * @return {?}
   */
  var group = function(parent) {
    return parent.l ? $(input, args.ya) ? parent.l._is_afc_ && parent.l._snippet_ : !($(selector, field.G) || ($(input, args.Va) || $(input, args.Sa))) || false !== parent.l._afc_expandable_ : true;
  };
  /**
   * @param {?} self
   * @param {string} callback
   * @param {Object} result
   * @return {undefined}
   */
  var handleResult = function(self, callback, result) {
    forEach(self.u, function(method) {
      if (method.getName() == result.serviceName) {
        request(method, callback, result);
      }
    });
  };
  /**
   * @param {Object} func
   * @return {?}
   */
  setFillAndStroke.prototype.setSafeFrameConfig = function(func) {
    try {
      if (func && apply(func)) {
        var f = subscribe(func);
        if (f) {
          this.M = f;
        }
      } else {
        this.j.error(call("Slot.setSafeFrameConfig", [func]), null, this);
      }
      return this;
    } catch (v1CompNum) {
      html(56, v1CompNum);
    }
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var getElementById = function(obj) {
    return "google_ads_iframe_" + write(obj);
  };
  /**
   * @return {?}
   */
  setFillAndStroke.prototype.getCsiId = function() {
    return this.tb;
  };
  var $cookies = {
    google_ad_channel : "channel",
    google_ad_host : "host",
    google_ad_host_channel : "h_ch",
    google_ad_host_tier_id : "ht_id",
    google_ad_section : "region",
    google_ad_type : "ad_type",
    google_adtest : "adtest",
    google_available_width : "avail_w",
    google_allow_expandable_ads : "ea",
    google_alternate_ad_url : "alternate_ad_url",
    google_alternate_color : "alt_color",
    google_city : "gcs",
    google_color_bg : "color_bg",
    google_color_border : "color_border",
    google_color_line : "color_line",
    google_color_link : "color_link",
    google_color_text : "color_text",
    google_color_url : "color_url",
    google_contents : "contents",
    google_country : "gl",
    google_cpm : "cpm",
    google_cust_age : "cust_age",
    google_cust_ch : "cust_ch",
    google_cust_gender : "cust_gender",
    google_cust_id : "cust_id",
    google_cust_interests : "cust_interests",
    google_cust_job : "cust_job",
    google_cust_l : "cust_l",
    google_cust_lh : "cust_lh",
    google_cust_u_url : "cust_u_url",
    google_disable_video_autoplay : "disable_video_autoplay",
    google_ed : "ed",
    google_encoding : "oe",
    google_flash_version : "flash",
    google_font_face : "f",
    google_font_size : "fs",
    google_hints : "hints",
    google_is_split_slot : "spl",
    google_kw : "kw",
    google_kw_type : "kw_type",
    google_language : "hl",
    google_page_url : "url",
    google_pgb_reactive : "pra",
    google_region : "gr",
    google_reuse_colors : "reuse_colors",
    google_responsive_formats : "resp_fmts",
    google_safe : "adsafe",
    google_safe_for_responsive_override : "sfro",
    google_tag_info : "gut",
    google_ui_features : "ui",
    google_video_doc_id : "video_doc_id",
    google_video_product_type : "video_product_type",
    google_webgl_support : "wgl"
  };
  var internalValues = {
    google_ad_block : "ad_block",
    google_ad_client : "client",
    google_ad_format : "format",
    google_ad_output : "output",
    google_ad_callback : "callback",
    google_ad_height : "h",
    google_ad_slot : "slotname",
    google_ad_unit_key : "adk",
    google_ad_dom_fingerprint : "adf",
    google_ad_width : "w",
    google_analytics_url_parameters : "aup",
    google_auto_format : "afmt",
    google_captcha_token : "captok",
    google_content_recommendation_ui_type : "crui",
    google_content_recommendation_columns_num : "cr_col",
    google_content_recommendation_rows_num : "cr_row",
    google_ctr_threshold : "ctr_t",
    google_cust_criteria : "cust_params",
    google_delay_requests_count : "drc",
    google_delay_requests_delay : "drd",
    google_image_size : "image_size",
    google_last_modified_time : "lmt",
    google_loeid : "loeid",
    google_max_num_ads : "num_ads",
    google_max_radlink_len : "max_radlink_len",
    google_mtl : "mtl",
    google_native_settings_key : "nsk",
    google_nofo : "nofo",
    google_enable_content_recommendations : "ecr",
    google_infinite_scroll_slot_type : "ifsl",
    google_num_radlinks : "num_radlinks",
    google_num_radlinks_per_unit : "num_radlinks_per_unit",
    google_pucrd : "pucrd",
    google_reactive_plaf : "plaf",
    google_reactive_plat : "plat",
    google_reactive_sra_channels : "plach",
    google_responsive_auto_format : "rafmt",
    google_only_ads_with_video : "only_ads_with_video",
    google_rl_dest_url : "rl_dest_url",
    google_rl_filtering : "rl_filtering",
    google_rl_mode : "rl_mode",
    google_rt : "rt",
    google_source_type : "src_type",
    google_sui : "sui",
    google_skip : "skip",
    google_tag_for_child_directed_treatment : "tfcd",
    google_tag_origin : "to",
    google_tdsma : "tdsma",
    google_tfs : "tfs",
    google_tl : "tl"
  };
  var holder = {
    google_core_dbp : "dbp",
    google_lact : "lact",
    google_only_pyv_ads : "pyv",
    google_only_userchoice_ads : "uc",
    google_scs : "scs",
    google_targeting : "targeting",
    google_with_pyv_ads : "withpyv",
    google_previous_watch : "p_w",
    google_previous_searches : "p_s",
    google_video_url_to_fetch : "durl",
    google_yt_pt : "yt_pt",
    google_yt_up : "yt_up"
  };
  /**
   * @param {?} type
   * @return {undefined}
   */
  var Event = function(type) {
    this.j = {};
    this.l = type;
  };
  /**
   * @param {Object} exports
   * @param {string} key
   * @param {(Function|string)} prefix
   * @param {boolean} index
   * @return {undefined}
   */
  var _createItem = function(exports, key, prefix, index) {
    if (key) {
      if (!prefix) {
        /** @type {string} */
        prefix = "";
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
      if (key in exports.l) {
        if ("undefined" == typeof index || (index || !exports.j[key])) {
          /** @type {(Function|string)} */
          exports.j[key] = prefix;
        }
      }
    }
  };
  /**
   * @param {Object} data
   * @param {Object} options
   * @return {undefined}
   */
  var onData = function(data, options) {
    each(options.j, function(offsetPosition, i) {
      if (!this.j[i]) {
        this.j[i] = offsetPosition;
      }
    }, data);
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var makeTriggerData = function(data) {
    var result = new Event(data.l);
    result.j = forceArray(data.j);
    delete result.j.google_page_url;
    return result;
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  var isArguments = function(object) {
    return object.j.google_page_url;
  };
  /**
   * @return {?}
   */
  Event.prototype.ia = function() {
    /** @type {Array} */
    var tagNameArr = [];
    each(this.j, function(val, key) {
      if (key = $cookies[key] || (internalValues[key] || (holder[key] || null))) {
        if (val) {
          tagNameArr.push(key + "=" + encodeURIComponent(val));
        }
      }
    });
    return tagNameArr.join("&");
  };
  /**
   * @param {Object} options
   * @param {Array} data
   * @param {Object} a
   * @param {?} first
   * @return {?}
   */
  var merge = function(options, data, a, first) {
    var result = build(options, makeTriggerData(data), a, first);
    options = build(options, data, a, first);
    /** @type {Array} */
    data = [];
    if (result[0]) {
      if (0 < result[0].length) {
        data.push(result[0].join("&"));
      }
    }
    if (options[1]) {
      if (0 < options[1].length) {
        data.push("sps=" + options[1].join("|"));
      }
    }
    return data.join("&");
  };
  /**
   * @param {Array} extensions
   * @param {Array} data
   * @param {Object} result
   * @param {?} obj
   * @return {?}
   */
  var build = function(extensions, data, result, obj) {
    /** @type {Array} */
    var results = [];
    /** @type {Array} */
    var tr = [];
    var params = data.j;
    each(obj, function(name, p) {
      if (name) {
        /** @type {string} */
        var value = "";
        if (null != params[p]) {
          /** @type {string} */
          value = encodeURIComponent(params[p]);
        }
        /** @type {Array} */
        var paths = [];
        /** @type {number} */
        var next = -1;
        /** @type {number} */
        var last = -1;
        /** @type {number} */
        var i = 0;
        for (;i < extensions.length;++i) {
          var pair = write(extensions[i]);
          ++next;
          if (null == result[pair]) {
            paths.push("");
          } else {
            pair = result[pair].j;
            if (null != pair[p]) {
              paths.push(encodeURIComponent(encodeURIComponent(pair[p])));
              /** @type {number} */
              last = next;
            } else {
              paths.push("");
            }
          }
        }
        if (0 <= last) {
          /** @type {Array} */
          p = [];
          p.push(encodeURIComponent(value));
          /** @type {number} */
          i = 0;
          for (;i <= last;++i) {
            p.push(paths[i]);
          }
          tr.push(name + "," + p.join(","));
        } else {
          if (value) {
            results.push(name + "=" + value);
          }
        }
      }
    });
    /** @type {Array} */
    data = [];
    data.push(results);
    data.push(tr);
    return data;
  };
  /**
   * @param {Object} win
   * @param {boolean} doc
   * @return {?}
   */
  var moveTo = function(win, doc) {
    a: {
      var self = win.navigator;
      var value = self.userAgent;
      var xhtml = self.platform;
      /** @type {RegExp} */
      var rtagName = /WebKit\/(\d+)/;
      /** @type {RegExp} */
      var rplusequals = /rv\:(\d+\.\d+)/;
      /** @type {RegExp} */
      var rchecked = /rv\:1\.8([^.]|\.0)/;
      if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(xhtml) && (!/^Opera/.test(value) && (rtagName = (rtagName.exec(value) || [0, 0])[1], rplusequals = (rplusequals.exec(value) || [0, 0])[1], /Win/.test(xhtml) && (/Trident/.test(value) && 11 <= doc.documentMode) || (!rtagName && ("Gecko" === self.product && (27 <= rplusequals && !rchecked.test(value))) || 536 <= rtagName)))) {
        /** @type {boolean} */
        doc = true;
        break a;
      }
      /** @type {boolean} */
      doc = false;
    }
    win = _get(win, win.document, 500, 300);
    self = {};
    if (!doc || win) {
      /** @type {string} */
      self.ea = "0";
    }
    return self;
  };
  /**
   * @param {Function} e
   * @return {undefined}
   */
  var move = function(e) {
    this.j = {};
    this.l = {};
    /** @type {Array} */
    this.B = [];
    /** @type {Function} */
    this.N = e;
    this.u = new Event(e);
    this.v = {};
    this.C = {};
    this.m = {};
    this.I = {};
    /** @type {string} */
    this.M = this.A = "";
    /** @type {boolean} */
    this.o = false;
    /** @type {number} */
    this.J = -1;
    /** @type {number} */
    this.L = 0;
    /** @type {boolean} */
    this.D = this.w = false;
    this.H = {};
  };
  /**
   * @param {?} msg
   * @param {Object} value
   * @return {?}
   */
  var _format = function(msg, value) {
    var key = write(value);
    return msg.j[key] ? msg.j[key] : msg.j[key] = value;
  };
  /**
   * @param {?} opts
   * @return {?}
   */
  var unique = function(opts) {
    return remove(values(opts), function(pair) {
      return!pair.A;
    });
  };
  /**
   * @param {Object} data
   * @param {Array} ca
   * @return {undefined}
   */
  var _encode = function(data, ca) {
    /** @type {number} */
    var i = 0;
    for (;i < ca.length;i++) {
      var c = ca[i];
      if (write(c) in data.j) {
        addRow(c);
      }
    }
  };
  /**
   * @param {Text} val
   * @return {?}
   */
  var removeChild = function(val) {
    val = remove(values(val), function(pair) {
      return!!pair.A && !pair.aa;
    });
    return map(val, function(dataAndEvents) {
      return[dataAndEvents.getAdUnitPath(), dataAndEvents.getSlotId().getInstance()];
    });
  };
  /**
   * @param {?} i
   * @param {Object} text
   * @return {?}
   */
  var flush = function(i, text) {
    return!(write(text) in i.I);
  };
  /**
   * @param {?} item
   * @return {?}
   */
  var append = function(item) {
    /** @type {number} */
    var original = 0;
    each(item.j, function() {
      original++;
    });
    return original;
  };
  /**
   * @return {?}
   */
  move.prototype.toString = function() {
    /** @type {string} */
    var a = "[AdData:";
    /** @type {Array} */
    var tagNameArr = [];
    each(this.j, function(dstUri) {
      tagNameArr.push(dstUri.toString());
    });
    each(this.l, function(dataAndEvents, deepDataAndEvents) {
      tagNameArr.push("[" + deepDataAndEvents + "," + dataAndEvents + "]");
    });
    a += tagNameArr.join();
    return a + "]";
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  var values = function(options) {
    /** @type {Array} */
    var result = [];
    each(options.j, function(elem) {
      result.push(elem);
    });
    return result;
  };
  /**
   * @param {Object} obj
   * @param {string} type
   * @return {?}
   */
  var max = function(obj, type) {
    obj = type || values(obj);
    obj = map(obj, function(labelElement) {
      return labelElement.$;
    });
    isNumber(obj);
    return obj;
  };
  /**
   * @param {Object} data
   * @return {?}
   */
  var encode = function(data) {
    /** @type {Array} */
    var tagNameArr = [];
    each(data.l, function(sectionName, key) {
      tagNameArr.push(encodeURIComponent(key) + "=" + encodeURIComponent(sectionName));
    });
    if (0 < data.B.length) {
      if (!("excl_cat" in data.l)) {
        tagNameArr.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(data.B.join(",")));
      }
    }
    return tagNameArr.join("&");
  };
  /**
   * @param {Object} value
   * @param {Object} target
   * @return {?}
   */
  var getOffset = function(value, target) {
    value = value.m[write(target)];
    var v;
    if (value) {
      if (value) {
        try {
          var root = window.top;
          var rect = new Rect(0, 0);
          var parent = getAttribute(getStyle(value));
          if (equal(parent, "parent")) {
            do {
              var temp;
              if (parent == root) {
                temp = scroll(value);
              } else {
                var offset = getElementOffset(value);
                temp = new Rect(offset.left, offset.top);
              }
              target = temp;
              rect.x += target.x;
              rect.y += target.y;
            } while (parent && (parent != root && (parent != parent.parent && ((value = parent.frameElement) && (parent = parent.parent)))));
          }
          v = rect;
        } catch (l) {
          v = new Rect(-12245933, -12245933);
        }
      } else {
        /** @type {null} */
        v = null;
      }
    } else {
      /** @type {null} */
      v = null;
    }
    return v;
  };
  /**
   * @param {Array} a
   * @return {?}
   */
  var param = function(a) {
    /** @type {Array} */
    var tagNameArr = [];
    /** @type {number} */
    var i = 0;
    for (;i < a.length;++i) {
      tagNameArr.push(serialize(a[i]));
    }
    return tagNameArr.join();
  };
  /**
   * @param {Array} arr
   * @return {?}
   */
  var _forEach = function(arr) {
    /** @type {Array} */
    var assigns = [];
    /** @type {boolean} */
    var c = false;
    /** @type {number} */
    var second = 0;
    for (;second < arr.length;++second) {
      var vvar = arr[second].getFirstLook();
      if (0 != vvar) {
        /** @type {boolean} */
        c = true;
      }
      assigns.push(vvar);
    }
    return c ? assigns.join() : void 0;
  };
  /** @type {RegExp} */
  var rsingleTag = /Trident|MSIE/;
  /** @type {RegExp} */
  var rbrace = /rv:11|Trident\/[78]/;
  /**
   * @return {?}
   */
  var transport = function() {
    var resolved = optsData;
    return global.google_osd_loaded ? false : (loadScript(global.document, resolved), global.google_osd_loaded = true);
  };
  /**
   * @param {Object} node
   * @param {?} callback
   * @return {undefined}
   */
  var scriptOnload = function(node, callback) {
    if (prepareEnvironment()) {
      on(node, "readystatechange", function(basis) {
        if (node) {
          if ("complete" == node.readyState) {
            callback(basis);
          }
        }
      });
    } else {
      on(node, "load", callback);
    }
  };
  /**
   * @return {?}
   */
  var iter = function() {
    var scripts = (handle() || global).google_osd_amcb;
    return then(scripts) ? scripts : null;
  };
  /**
   * @return {?}
   */
  var prepareEnvironment = function() {
    var data = global.navigator;
    return(data = data && data.userAgent) ? rsingleTag.test(data) && !rbrace.test(data) : false;
  };
  /**
   * @return {?}
   */
  var mod = function() {
    var key = method;
    var camelKey = _clockseq;
    if (!(window && (Math.random && navigator))) {
      return-1;
    }
    if (window.__google_ad_urls) {
      var cachedOrientation = window.__google_ad_urls;
      try {
        if (cachedOrientation && cachedOrientation.getOseId()) {
          return cachedOrientation.getOseId();
        }
      } catch (e) {
      }
    }
    if (!window.__google_ad_urls_id) {
      cachedOrientation = window.google_enable_ose;
      var data;
      if (true === cachedOrientation) {
        /** @type {number} */
        data = 2;
      } else {
        if (false !== cachedOrientation) {
          data = floor([0], key);
          if (null == data) {
            if (!(data = floor([2], camelKey))) {
              /** @type {number} */
              data = 3;
            }
          }
        }
      }
      if (!data) {
        return 0;
      }
      window.__google_ad_urls_id = data;
    }
    return window.__google_ad_urls_id;
  };
  /**
   * @return {?}
   */
  var object = function() {
    /** @type {number} */
    var result = 0;
    if (!set(global.postMessage)) {
      result |= 1;
    }
    return result;
  };
  /**
   * @param {Object} a
   * @param {Object} args
   * @return {undefined}
   */
  var stringify = function(a, args) {
    /** @type {Object} */
    this.o = a;
    this.l = args && args.l ? args.l : [];
    this.m = args && args.m ? args.m : 0;
    this.u = args ? args.u : "";
    this.j = args && args.j ? args.j : [];
    if (args) {
      /** @type {number} */
      a = 0;
      for (;a < this.l.length;++a) {
        this.l[a].push("true");
      }
      /** @type {number} */
      a = 0;
      for (;a < this.j.length;++a) {
        /** @type {boolean} */
        this.j[a].o = true;
      }
    }
  };
  /** @type {string} */
  var optsData = "";
  /** @type {number} */
  var _clockseq = 0;
  /** @type {number} */
  var method = 0;
  /**
   * @param {Object} args
   * @param {string} c
   * @return {undefined}
   */
  var option = function(args, c) {
    var a = args.l;
    /** @type {function (Array): undefined} */
    var fn = args.o.google_ad_request_done;
    if (fn) {
      fn = fn.orig_callback || fn;
      /**
       * @param {Array} obj
       * @return {undefined}
       */
      args.o.google_ad_request_done = function(obj) {
        if (obj && 0 < obj.length) {
          var pos = 1 < obj.length ? obj[1].url : null;
          var yp = obj[0].log_info || null;
          var noninteraction = obj[0].activeview_url || null;
          var y = obj[0].activeview_js_enabled || null;
          var channel = obj[0].activeview_js_immediate_enabled || null;
          var oY = obj[0].activeview_js_tos_enabled || null;
          var _nestedSubmodules = obj[0].activeview_cid || null;
          var w = obj[0].activeview_metadata || null;
          var condition = obj[0].image_url || "";
          var U = obj[0].type || null;
          a.push([c, runInContext(obj[0].url), pos, yp, null, noninteraction, y, channel, oY, _nestedSubmodules, w, runInContext(condition), U]);
        }
        fn(obj);
      };
      args.o.google_ad_request_done.orig_callback = fn;
    }
  };
  /**
   * @param {Array} t
   * @param {?} ctx
   * @param {?} style
   * @param {number} deepDataAndEvents
   * @return {undefined}
   */
  var runTest = function(t, ctx, style, deepDataAndEvents) {
    var s = t.l;
    var udataCur = deepDataAndEvents || 0;
    var d = ctx.document;
    if (0 < s.length) {
      var links = d.getElementsByTagName("a");
      /** @type {number} */
      var i = 0;
      for (;i < links.length;i++) {
        /** @type {number} */
        var pos = 0;
        for (;pos < s.length;pos++) {
          if (0 <= links[i].href.indexOf(s[pos][1])) {
            var tmp = links[i].parentNode;
            if (s[pos][2]) {
              var node = tmp;
              /** @type {number} */
              var w = 0;
              for (;4 > w;w++) {
                if (0 <= node.innerHTML.indexOf(s[pos][2])) {
                  tmp = node;
                  break;
                }
                node = node.parentNode;
              }
            }
            access(s[pos], tmp, udataCur, style);
            s.splice(pos, 1);
            break;
          }
        }
      }
    }
    if (0 < s.length) {
      tmp = d.getElementsByTagName("embed");
      /** @type {number} */
      i = 0;
      for (;i < tmp.length;i++) {
        /** @type {number} */
        pos = 0;
        for (;pos < s.length;pos++) {
          if (node = s[pos][12], links = s[pos][11], "flash" == node && (links && (node = tmp[i], node.src == links))) {
            var n = node;
            if (0 == n.getBoundingClientRect().height) {
              if (n.parentElement) {
                if ("OBJECT" == n.parentElement.tagName) {
                  n = n.parentElement;
                }
              }
            }
            access(s[pos], n, udataCur, style);
            s.splice(pos, 1);
            break;
          }
        }
      }
    }
    if (0 < s.length) {
      d = d.getElementsByTagName("param");
      /** @type {number} */
      i = 0;
      for (;i < d.length;i++) {
        /** @type {number} */
        pos = 0;
        for (;pos < s.length;pos++) {
          if (node = s[pos][12], links = s[pos][11], "flash" == node && (links && (tmp = d[i], "movie" == tmp.name && tmp.value == links))) {
            if (tmp.parentNode) {
              if ("OBJECT" == tmp.parentNode.tagName) {
                n = tmp.parentNode;
              }
            }
            if (!n) {
              break;
            }
            access(s[pos], n, udataCur, style);
            s.splice(pos, 1);
            break;
          }
        }
      }
    }
    if (i = 0 < s.length) {
      if (!targetCtx) {
        targetCtx = lerp(true).Ga;
      }
      /** @type {boolean} */
      i = ctx != targetCtx;
    }
    if (i) {
      try {
        runTest(t, ctx.parent, style, deepDataAndEvents);
      } catch (U) {
      }
    }
    /** @type {number} */
    i = 0;
    for (;i < s.length;++i) {
      t = s[i];
      if ("true" == t[6]) {
        addMessage("osd2", t[3]);
      }
      if ("true" == t[7]) {
        addMessage("osdim", t[3]);
      }
    }
  };
  /**
   * @param {Array} args
   * @param {?} key
   * @param {?} value
   * @param {?} fn
   * @return {undefined}
   */
  var access = function(args, key, value, fn) {
    fn(key, args[0], value, true, args[3], void 0, args[5], "true" == args[6], "true" == args[7], "true" == args[13], "true" == args[8], args[9], args[10]);
  };
  /**
   * @param {string} message
   * @param {string} field
   * @return {undefined}
   */
  var addMessage = function(message, field) {
    if (message && field) {
      /** @type {Array} */
      var result = ["//"];
      result.push("pagead2.googlesyndication.com");
      result.push("/activeview");
      result.push("?id=" + message);
      result.push("&r=j");
      result.push("&avi=" + field);
      listen(global, result.join(""));
    }
  };
  self = stringify.prototype;
  /**
   * @param {?} callback
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  self.getNewBlocks = function(callback, dataAndEvents) {
    if (dataAndEvents) {
      runTest(this, this.o, callback, 1);
    }
    var valuesLen = this.j.length;
    /** @type {number} */
    var i = 0;
    for (;i < valuesLen;i++) {
      var item = this.j[i];
      if (!item.m) {
        if (item.j) {
          callback(item.j, item.u, item.w, item.l, "", void 0, "", false, false, item.o, false, "", "", item.v);
          /** @type {boolean} */
          item.m = true;
        }
      }
    }
    if (dataAndEvents) {
      (handle() || global).google_osd_amcb = callback;
    }
  };
  /**
   * @param {number} prefix
   * @return {?}
   */
  self.setupOse = function(prefix) {
    if (this.getOseId()) {
      return this.getOseId();
    }
    var m = mod();
    if (!m) {
      return 0;
    }
    this.m = m;
    /** @type {string} */
    this.u = String(prefix || 0);
    return this.getOseId();
  };
  /**
   * @return {?}
   */
  self.getOseId = function() {
    return window && (Math.random && navigator) ? this.m : -1;
  };
  /**
   * @return {?}
   */
  self.getCorrelator = function() {
    return this.u;
  };
  /**
   * @return {?}
   */
  self.numBlocks = function() {
    return this.l.length + this.j.length;
  };
  /**
   * @param {string} callback
   * @param {number} target
   * @param {string} destroy
   * @param {string} obj
   * @param {(Element|string)} forOwn
   * @param {?} opt_attributes
   * @param {string} millis
   * @return {undefined}
   */
  self.registerAdBlock = function(callback, target, destroy, obj, forOwn, opt_attributes, millis) {
    if ((forOwn = iter()) && obj) {
      forOwn(obj, callback, target, true, "", void 0, "", false, false, false, false, "", "", millis);
    } else {
      if ("js" == destroy) {
        option(this, callback);
      } else {
        var record = new Transform(callback, target, obj, millis);
        this.j.push(record);
        if (obj) {
          callback = configure(function() {
            /** @type {boolean} */
            record.l = true;
          });
          scriptOnload(obj, callback);
        }
      }
      if (transport()) {
        Main();
      }
    }
  };
  /**
   * @param {?} elem
   * @param {boolean} completed
   * @return {undefined}
   */
  self.unloadAdBlock = function(elem, completed) {
    if (set(window.Goog_Osd_UnloadAdBlock)) {
      window.Goog_Osd_UnloadAdBlock(elem, completed);
    }
  };
  /**
   * @return {?}
   */
  var render = function() {
    var target = handle();
    var node = target.__google_ad_urls;
    if (!node) {
      return target.__google_ad_urls = new stringify(target);
    }
    try {
      if (0 <= node.getOseId()) {
        return node;
      }
    } catch (c) {
    }
    try {
      return target.__google_ad_urls = new stringify(target, node);
    } catch (c) {
      return target.__google_ad_urls = new stringify(target);
    }
  };
  /**
   * @param {?} u
   * @param {?} str
   * @param {?} j
   * @param {(Document|string)} v
   * @return {undefined}
   */
  var Transform = function(u, str, j, v) {
    this.u = u;
    this.w = str;
    this.j = j;
    /** @type {boolean} */
    this.o = this.m = this.l = false;
    this.v = v || clearedOnReadyStateChange;
  };
  $goog$exportPath_$("Goog_AdSense_getAdAdapterInstance", render);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter", stringify);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.numBlocks", stringify.prototype.numBlocks);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", stringify.prototype.getNewBlocks);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getOseId", stringify.prototype.getOseId);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.getCorrelator", stringify.prototype.getCorrelator);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.setupOse", stringify.prototype.setupOse);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", stringify.prototype.registerAdBlock);
  $goog$exportPath_$("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", stringify.prototype.unloadAdBlock);
  var qp = ctor.getInstance().get(6);
  var activeIndex = ctor.getInstance().get(1);
  var clockseq = ctor.getInstance().get(7);
  var property = ctor.getInstance().get(20);
  optsData = sort(new _remove_subtree, qp ? "https:" : "http:", activeIndex, "/pagead/osd.js");
  _clockseq = clockseq;
  method = property;
  /**
   * @param {Object} parent
   * @param {(Object|string)} arg
   * @return {undefined}
   */
  var require = function(parent, arg) {
    var node = parent.createElement("link");
    /** @type {string} */
    node.rel = "prefetch";
    if (arg instanceof Color) {
      if (arg instanceof Color && (arg.constructor === Color && arg.Xa === Literal)) {
        /** @type {string} */
        arg = "";
      } else {
        typeOf(arg);
        /** @type {string} */
        arg = "type_error:TrustedResourceUrl";
      }
    } else {
      if (arg instanceof Buffer) {
        if (arg instanceof Buffer && (arg.constructor === Buffer && arg.Wa === ObjectExpression)) {
          arg = arg.Aa;
        } else {
          typeOf(arg);
          /** @type {string} */
          arg = "type_error:SafeUrl";
        }
      } else {
        if (!(arg instanceof Buffer)) {
          arg = arg.Ma ? arg.za() : String(arg);
          if (!rchecked.test(arg)) {
            /** @type {string} */
            arg = "about:invalid#zClosurez";
          }
          arg = numeric(arg);
        }
        arg = arg.za();
      }
    }
    /** @type {(Object|string)} */
    node.href = arg;
    if (parent = parent.getElementsByTagName("head")[0]) {
      parent.appendChild(node);
    }
  };
  /**
   * @return {undefined}
   */
  var watch = function() {
    /** @type {boolean} */
    this.l = (this.j = !!parseOptions(color.j, color.l)) ? !$(color, o.Ra) : Math.random() < ctor.getInstance().get(34);
  };
  /**
   * @param {Object} val
   * @param {Object} node
   * @return {undefined}
   */
  var add = function(val, node) {
    if (val.l && (!val.j || $(color, node))) {
      if (val.l = false, node = document, val = ok(getAttribute(node)), !(tx || (ty || tz)) && (cl || (opt_domHelper || expectationResult && attr(11)))) {
        require(node, val);
      } else {
        if (!$(selector, field.G)) {
          var doc = emit().fifWin;
          doc = doc && doc.document || node;
          node = doc.createElement("iframe");
          /** @type {Object} */
          node.src = val;
          /** @type {string} */
          node.style.visibility = "hidden";
          /** @type {string} */
          node.style.display = "none";
          val = doc.getElementsByTagName("script");
          if (0 < val.length) {
            val = val[val.length - 1];
            if (val.parentNode) {
              val.parentNode.insertBefore(node, val.nextSibling);
            }
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  var stop = function() {
    watch.getInstance();
    var resolved = ctor.getInstance().get(57);
    if (Math.random() < resolved) {
      resolved = document;
      /** @type {string} */
      var until = _setTimeout(true) + "/static/glade.js";
      require(resolved, until);
    }
  };
  HOP(watch);
  /**
   * @return {undefined}
   */
  var parse_workbook = function() {
    /** @type {Array} */
    this.j = [];
    /** @type {boolean} */
    this.I = false;
    /** @type {string} */
    this.w = "";
    /** @type {string} */
    this.H = "json_html";
    /** @type {string} */
    this.u = "fif";
    /** @type {number} */
    this.v = 1;
    /** @type {boolean} */
    this.D = false;
    /** @type {string} */
    this.l = "";
    /** @type {Array} */
    this.m = [];
    /** @type {boolean} */
    this.persistentRoadblocksOnly = false;
    /** @type {number} */
    this.videoPodNumber = this.videoPodPosition = NaN;
    /** @type {string} */
    this.B = this.C = "";
    /** @type {boolean} */
    this.A = false;
    /** @type {number} */
    this.videoStreamCorrelator = NaN;
    /** @type {number} */
    this.o = 0;
  };
  /**
   * @param {number} rotateBy
   * @return {undefined}
   */
  var uvmap = function(rotateBy) {
    this.u = document;
    this.j = rotateBy || 0;
    this.l = respond(this, "__gads=");
    /** @type {boolean} */
    this.v = this.o = false;
    setCookie(this);
  };
  /**
   * @param {Object} data
   * @param {Date} value
   * @return {undefined}
   */
  var _cookie = function(data, value) {
    if (value._cookies_) {
      if (value._cookies_.length) {
        data.m = value._cookies_[0];
        if (null != data.m) {
          data.l = data.m._value_;
          if (null != data.m) {
            if (data.l) {
              /** @type {Date} */
              value = new Date;
              value.setTime(1E3 * data.m._expires_);
              /** @type {string} */
              data.u.cookie = "__gads=" + data.l + "; expires=" + value.toGMTString() + "; path=" + data.m._path_ + "; domain=." + data.m._domain_;
            }
          }
        }
      }
    }
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  var setCookie = function(data) {
    if (!data.l && (!data.v && 1 != data.j)) {
      /** @type {string} */
      data.u.cookie = "GoogleAdServingTest=Good";
      /** @type {boolean} */
      var checked = "Good" == respond(data, "GoogleAdServingTest=");
      if (checked) {
        /** @type {Date} */
        var expiryDate = new Date;
        expiryDate.setTime((new Date).valueOf() + -1);
        /** @type {string} */
        data.u.cookie = "GoogleAdServingTest=; expires=" + expiryDate.toGMTString();
      }
      /** @type {boolean} */
      data.o = checked;
      /** @type {boolean} */
      data.v = true;
    }
  };
  /**
   * @param {(Function|string)} data
   * @param {string} next
   * @return {?}
   */
  var respond = function(data, next) {
    data = data.u.cookie;
    var n = data.indexOf(next);
    /** @type {string} */
    var ret = "";
    if (-1 != n) {
      next = n + next.length;
      n = data.indexOf(";", next);
      if (-1 == n) {
        n = data.length;
      }
      ret = data.substring(next, n);
    }
    return ret;
  };
  /** @type {null} */
  var spec = null;
  /**
   * @param {(Range|TextRange)} opt_attributes
   * @return {?}
   */
  var it = function(opt_attributes) {
    if (null == spec) {
      spec = new uvmap(opt_attributes);
    }
    return spec;
  };
  /**
   * @return {undefined}
   */
  var compile = function() {
    this.j = {};
    var url = doc.URL;
    if (null == (0,eval)(this, "target_platform")) {
      /** @type {string} */
      this.j.target_platform = "DESKTOP";
    }
    var statesData = this.j;
    url = url.split("?");
    url = url[url.length - 1].split("&");
    /** @type {number} */
    var i = 0;
    for (;i < url.length;i++) {
      var parts = url[i].split("=");
      if (parts[0]) {
        var unlock = parts[0].toLowerCase();
        if ("google_domain_reset_url" != unlock) {
          try {
            var data;
            if (1 < parts.length) {
              var ret = parts[1];
              /** @type {string} */
              data = window.decodeURIComponent ? decodeURIComponent(ret.replace(rreturn, " ")) : unescape(ret);
            } else {
              /** @type {string} */
              data = "";
            }
            /** @type {string} */
            statesData[unlock] = data;
          } catch (k) {
          }
        }
      }
    }
  };
  /**
   * @param {?} args
   * @param {string} cb
   * @return {?}
   */
  var eval = function(args, cb) {
    return null == cb ? null : args.j[cb];
  };
  /**
   * @param {?} dataAndEvents
   * @param {?} j
   * @param {?} u
   * @param {?} m
   * @param {?} l
   * @return {undefined}
   */
  var that = function(dataAndEvents, j, u, m, l) {
    this.j = j;
    this.u = u;
    this.m = m;
    this.mode = dataAndEvents;
    this.l = l;
    /** @type {string} */
    this.o = "";
    this.D = $cookies;
    /** @type {Array} */
    this.v = [];
    /** @type {Array} */
    this.C = [];
  };
  var logo_center = {
    x : -9,
    y : -9
  };
  /**
   * @param {Object} c
   * @param {(Object|string)} memory
   * @return {?}
   */
  that.prototype.ia = function(c, memory) {
    memory = memory || window;
    if (!isFunction(c)) {
      return "";
    }
    if ("sra" == this.mode) {
      if (0 == c.length) {
        c = values(this.j);
      }
    } else {
      if (0 == c.length) {
        return "";
      }
      if (1 < c.length) {
        /** @type {Array} */
        c = [c[0]];
      }
    }
    this.A();
    this.B(c, memory);
    return this.o;
  };
  /**
   * @param {Object} x
   * @param {Object} obj
   * @return {undefined}
   */
  that.prototype.B = function(x, obj) {
    obj = obj || window;
    try {
      var params;
      var i;
      var value;
      if ("prerender" == hidden(document)) {
        /** @type {string} */
        i = "108809008";
        value = ctor.getInstance().get(17);
      } else {
        /** @type {string} */
        i = "108809007";
        value = ctor.getInstance().get(16);
      }
      params = floor([i], value);
      callback(this, "eid", (params ? concat(this.l.m, params) : this.l.m).join());
    } catch (w) {
    }
    if (this.m) {
      if (0 !== this.m.j) {
        callback(this, "co", this.m.j);
      }
    }
    params = this.j.J;
    if (-1 !== params) {
      callback(this, "tfcd", params);
    }
    if (1 === this.j.L) {
      callback(this, "kfa", 1);
    }
    callback(this, "sc", ctor.getInstance().get(6) ? 1 : 0);
    if (window.postMessage) {
      callback(this, "sfv", "1-0-5");
    }
    if ("sra" == this.mode) {
      select(this, x);
      passBackControl(this);
      /** @type {Array} */
      params = [];
      /** @type {number} */
      i = 0;
      for (;i < x.length;++i) {
        params.push(flatten(x[i]));
      }
      /** @type {string} */
      i = params.join("|");
      if (i.length == params.length - 1) {
        /** @type {null} */
        i = null;
      }
      callback(this, "prev_scp", i);
    } else {
      params = x[0].gtfcd();
      if (-1 !== params) {
        callback(this, "tfcd", params);
      }
      params = x[0];
      callback(this, "iu", params.getAdUnitPath());
      callback(this, "sz", serialize(params));
      if (synchronize(keys(params), "fluid")) {
        callback(this, "fluid", "height");
      }
      if (i = params.getFirstLook()) {
        callback(this, "fl", i);
      }
      i = min(params.L, this.j.D);
      if ("1" == i) {
        callback(this, "fsf", i);
      }
      i = params.T;
      if (0 < i) {
        callback(this, "rc", i);
      }
      if (params.getClickUrl()) {
        callback(this, "click", params.getClickUrl());
      }
      if (params.getOutOfPage()) {
        callback(this, "ists", "1");
      }
      if (!flush(this.j, params)) {
        callback(this, "logonly", "1");
      }
      passBackControl(this);
      params = x[0];
      i = flatten(params);
      callback(this, "scp", i);
      params = params.getAudExtId();
      if (0 < params) {
        callback(this, "audextid", params);
      }
    }
    /** @type {boolean} */
    params = 1 != this.l.v;
    i = x[0].hb;
    value = this.j.v;
    if (null != isArguments(this.j.u)) {
      /** @type {boolean} */
      value = true;
    } else {
      /** @type {boolean} */
      var e = false;
      /** @type {number} */
      var k = 0;
      for (;k < x.length && !e;k++) {
        /** @type {boolean} */
        e = null != store(x[k], value);
      }
      /** @type {boolean} */
      value = e;
    }
    e = this.l.D;
    /** @type {boolean} */
    k = 3 == this.l.v;
    var g = ctor.getInstance().get(46);
    /** @type {number} */
    var n = 0;
    if (params) {
      n |= 1;
    }
    if (i) {
      n |= 2;
    }
    if (value) {
      n |= 4;
    }
    if (e) {
      n |= 8;
    }
    if (k) {
      n |= 16;
    }
    if (g) {
      n |= 32;
    }
    /** @type {number} */
    params = n;
    if (0 < params) {
      callback(this, "eri", params);
    }
    if ("prerender" == hidden()) {
      callback(this, "d_imp", 1);
    }
    params = obj.document;
    callback(this, "cust_params", encode(this.j));
    if (this.m) {
      if (1 != this.m.j) {
        callback(this, "cookie", this.m.l);
        if (this.m.o) {
          callback(this, "cookie_enabled", "1");
        }
      }
    }
    if (i = this.j.A) {
      callback(this, "uule", i);
    }
    if (this.m) {
      if (1 != this.m.j) {
        if (params = (isArguments(this.j.u) || (isUndefined(obj) ? params.URL : params.referrer)) != params.URL ? params.domain : "") {
          callback(this, "cdm", params);
        }
      }
    }
    if (null != (0,eval)(this.u, "google_preview")) {
      callback(this, "gct", (0,eval)(this.u, "google_preview"));
    }
    if (this.j.w) {
      callback(this, "is_amp", "1");
      params = lookup();
      callback(this, "amp_v", params && params.mode ? +params.mode.version || null : null);
    }
    this.w(new Date, x, obj);
    params = {};
    /** @type {number} */
    params.u_tz = -(new Date).getTimezoneOffset();
    var result;
    try {
      result = win.history.length;
    } catch (w) {
      /** @type {number} */
      result = 0;
    }
    params.u_his = result;
    params.u_java = !!win.navigator && ("unknown" !== typeof win.navigator.javaEnabled && (!!win.navigator.javaEnabled && win.navigator.javaEnabled()));
    if (win.screen) {
      params.u_h = win.screen.height;
      params.u_w = win.screen.width;
      params.u_ah = win.screen.availHeight;
      params.u_aw = win.screen.availWidth;
      params.u_cd = win.screen.colorDepth;
    }
    if (win.navigator) {
      if (win.navigator.plugins) {
        params.u_nplug = win.navigator.plugins.length;
      }
    }
    if (win.navigator) {
      if (win.navigator.mimeTypes) {
        params.u_nmime = win.navigator.mimeTypes.length;
      }
    }
    transition(this, params);
    result = global.devicePixelRatio;
    if (result = isClassOf(result) ? +result.toFixed(3) : null) {
      debug(this, "u_sd", result);
    }
    var data;
    try {
      data = getFlashVersion();
    } catch (w) {
      /** @type {string} */
      data = "0";
    }
    debug(this, "flash", data);
    data = obj || window;
    params = data.document;
    x = "sra" == this.mode ? isArguments(this.j.u) : store(x[0], this.j.v) || isArguments(this.j.u);
    result = startsWith(params.URL, (0,eval)(this.u, "google_preview"));
    value = startsWith(params.referrer, (0,eval)(this.u, "google_preview"));
    e = new Matrix(data);
    params = e.j[Math.max(e.j.length - 1, 0)].url;
    i = e.j[0].depth;
    if (null != i && (0 < i && (callback(this, "nhd", i), data.location.ancestorOrigins))) {
      /** @type {Array} */
      k = [];
      /** @type {number} */
      g = Math.min(e.j.length, 27);
      /** @type {number} */
      n = 1;
      for (;n < g;n++) {
        if (e.j[n]) {
          if (e.j[n].url) {
            k[n - 1] = e.j[n].url;
          }
        }
      }
      k = next(e, k.reverse());
      callback(this, "iag", k);
      e = e.j;
      /** @type {Array} */
      k = [];
      /** @type {number} */
      g = e.length - 1;
      for (;0 < g;g--) {
        if (n = e[g]) {
          if (null != n.url) {
            k.push(random(n.url.match(id)[3] || null));
          }
        }
      }
      e = getValue(k);
      if (0 < e) {
        callback(this, "mdo", e);
      }
    }
    var d;
    if (null != x) {
      d = result;
      if (!isUndefined(data)) {
        /** @type {string} */
        value = "";
        if (params) {
          params = random(params.match(id)[3] || null);
        }
      }
    } else {
      x = result;
    }
    callback(this, "url", x);
    if (null != d) {
      if (d != x) {
        callback(this, "loc", d);
      }
    }
    if (this.j.w) {
      value = (d = lookup()) ? d.referrer : null;
    }
    callback(this, "ref", value);
    if (null != i) {
      if (0 < i) {
        callback(this, "top", params);
      }
    }
    x = obj || window;
    d = x.document;
    if (data = d.scripts) {
      callback(this, "dssz", data.length);
    }
    x = new Matrix(x);
    if (data = x.l.document && x.l.document.scripts ? x.l.document.scripts : []) {
      /** @type {Array} */
      result = [];
      /** @type {number} */
      params = data.length - 1;
      for (;0 <= params && 26 > result.length;) {
        if (data[params].src) {
          result.unshift(data[params].src);
        }
        params--;
      }
      data = next(x, result);
    } else {
      /** @type {number} */
      data = 0;
    }
    callback(this, "icsg", data);
    if (x = x.l.document && x.l.document.scripts ? x.l.document.scripts : []) {
      /** @type {Array} */
      data = [];
      /** @type {number} */
      result = x.length - 1;
      for (;0 <= result;result--) {
        if (params = x[result]) {
          if (null != params.src) {
            data.push(random(params.src.match(id)[3] || null));
          }
        }
      }
      x = getValue(data);
    } else {
      /** @type {number} */
      x = 0;
    }
    if (0 < x) {
      callback(this, "mso", x);
    }
    /** @type {Error} */
    x = Error();
    if (x.stack) {
      /** @type {string} */
      data = x.stack;
      /** @type {number} */
      result = data.split(/\r\n|\r|\n/).length;
      if ("Error" == data.slice(0, 5)) {
        result--;
      }
      /** @type {number} */
      data = result - 10;
      if (0 > data) {
        /** @type {number} */
        data = 0;
        result = new test("gpt_negative_stack_trace", pop(), ctor.getInstance().get(23));
        log(result, this.j);
        valueOf(result, "stackTrace", x.stack);
        jQuery(result);
      }
      callback(this, "std", data);
    }
    if (d.currentScript) {
      if (d.currentScript.text) {
        callback(this, "csl", d.currentScript.text.length);
      }
    }
    if (Math.random() < ctor.getInstance().get(73) && isUndefined(obj)) {
      /** @type {number} */
      d = 0;
      x = emit();
      d |= !!x._syncTagged_ << 0;
      x = (obj || window).navigator.connection;
      d |= (!!x && ("cellular" == x.type && 0.5 > x.downlinkMax)) << 1;
      a: {
        obj = obj.document.getElementsByTagName("script");
        /** @type {number} */
        x = 1;
        for (;x < obj.length;x++) {
          if (-1 < obj[x].src.indexOf("/tag/js/gpt.js") && -1 < obj[x - 1].innerHTML.indexOf("/tag/js/gpt.js")) {
            /** @type {boolean} */
            obj = true;
            break a;
          }
        }
        /** @type {boolean} */
        obj = false;
      }
      callback(this, "cdw", d | obj << 2);
    }
    callback(this, "vrg", "107");
    callback(this, "vrp", "107");
  };
  /**
   * @param {Object} options
   * @param {Array} tokens
   * @return {undefined}
   */
  var c = function(options, tokens) {
    var nTokens = tokens.length;
    /** @type {Array} */
    var tagNameArr = [];
    /** @type {Array} */
    var UNICODE_SPACES = [];
    /** @type {number} */
    var ti = 0;
    for (;ti < nTokens;ti++) {
      var scrollPosition = getOffset(options.j, tokens[ti]) || logo_center;
      tagNameArr.push(Math.round(scrollPosition.x));
      UNICODE_SPACES.push(Math.round(scrollPosition.y));
    }
    callback(options, "adxs", tagNameArr.join(","));
    callback(options, "adys", UNICODE_SPACES.join(","));
  };
  /**
   * @param {Object} obj
   * @param {Array} p
   * @return {undefined}
   */
  var register = function(obj, p) {
    var pl = p.length;
    /** @type {Array} */
    var acc = [];
    /** @type {number} */
    var i = 0;
    for (;i < pl;i++) {
      var x = go(p[i]);
      p[i].X = x;
      acc.push(x);
    }
    callback(obj, "adks", acc.join(","));
  };
  /**
   * @param {Object} callback
   * @param {?} from
   * @return {undefined}
   */
  var transition = function(callback, from) {
    each(from, function(val, template) {
      debug(this, template, val);
    }, callback);
  };
  /**
   * @param {Object} result
   * @return {undefined}
   */
  var passBackControl = function(result) {
    if (!(result.m && 1 == result.m.j)) {
      callback(result, "ppid", result.j.M);
    }
  };
  /**
   * @param {?} a
   * @param {Object} data
   * @param {Object} obj
   * @return {undefined}
   */
  that.prototype.w = function(a, data, obj) {
    var doc = obj.document;
    callback(this, "lmt", (Date.parse(doc.lastModified) / 1E3).toString());
    debug(this, "dt", a.getTime());
    if (doc.body) {
      a = doc.body.scrollHeight;
      var browserHeight = doc.body.clientHeight;
      if (browserHeight) {
        if (a) {
          callback(this, "cc", Math.round(100 * browserHeight / a).toString());
        }
      }
    }
    a = (0,eval)(this.u, "deb");
    if (null != a) {
      callback(this, "deb", a);
    }
    a = (0,eval)(this.u, "haonly");
    if (null != a) {
      callback(this, "haonly", a);
    }
    a = moveTo(obj, doc);
    isEmpty(a, bind(function(body, feed) {
      callback(this, feed, body);
    }, this));
    doc = update(obj, doc).mb || null;
    if (null != doc) {
      callback(this, "frm", doc);
    }
    if (doc = (this.j.w ? _error() : null) || resize(true, obj)) {
      callback(this, "biw", doc.width);
      callback(this, "bih", doc.height);
    }
    if (!isUndefined(obj)) {
      if (obj = resize(false, obj)) {
        callback(this, "isw", obj.width);
        callback(this, "ish", obj.height);
      }
    }
    if (this.l.o) {
      callback(this, "oid", this.l.o);
    }
    if ("sra" == this.mode) {
      if ($(wrapper, radio.G)) {
        c(this, data);
      }
      register(this, data);
    } else {
      if (obj = (this.j.w ? reset() : null) || getOffset(this.j, data[0])) {
        callback(this, "adx", Math.round(obj.x));
        callback(this, "ady", Math.round(obj.y));
      }
      obj = data[0].X;
      obj = $(suiteView, F.G) ? obj || go(data[0]) : obj || go(data[0], this.j.C[write(data[0])]);
      callback(this, "adk", obj);
    }
    obj = object();
    if (0 < obj) {
      callback(this, "osd", obj);
    }
    obj = this.j.u;
    /** @type {string} */
    doc = "";
    if ("sra" == this.mode) {
      doc = merge(data, obj, this.j.v, this.D);
    } else {
      data = this.j.v[write(data[0])];
      if (null == data) {
        /** @type {Object} */
        data = obj;
      } else {
        onData(data, obj);
      }
      data = makeTriggerData(data);
      doc = data.ia();
    }
    if (doc) {
      this.o += "&" + doc;
    }
  };
  /**
   * @return {undefined}
   */
  that.prototype.A = function() {
    var nodeName = this.j.A;
    /** @type {boolean} */
    var names = false;
    var name = ctor.getInstance().get(46);
    if (!nodeName) {
      names = name ? !$(subject, pdataOld.G) : $(root, bytenew.K);
    }
    /** @type {string} */
    this.o = _setTimeout(!names) + "/gampad/ads?";
    debug(this, "gdfp_req", 1);
    callback(this, "correlator", this.l.w);
    debug(this, "output", this.l.H);
    debug(this, "callback", this.l.l);
    debug(this, "impl", this.l.u);
    if (this.l.persistentRoadblocksOnly) {
      callback(this, "per_only", 1);
    }
    if ("sra" == this.mode) {
      callback(this, "json_a", 1);
    }
  };
  /**
   * @param {Object} node
   * @param {(Array|string)} data
   * @return {undefined}
   */
  var select = function(node, data) {
    var obj = data.length;
    /** @type {number} */
    var rootProperty = 0;
    for (;rootProperty < obj;rootProperty++) {
      setData(node, data[rootProperty].getAdUnitPath());
    }
    callback(node, "iu_parts", node.v.join());
    callback(node, "enc_prev_ius", node.C.join());
    callback(node, "prev_iu_szs", param(data));
    if (insert(data, function(walkers) {
      return synchronize(keys(walkers), "fluid");
    })) {
      obj = map(data, function(walkers) {
        return synchronize(keys(walkers), "fluid") ? "height" : "0";
      }).join();
      callback(node, "fluid", obj);
    }
    if (obj = _forEach(data)) {
      callback(node, "fla", obj);
    }
    obj = map(data, function(size) {
      return min(size.L, this.j.D);
    }, node).join();
    if (0 <= obj.indexOf("1")) {
      callback(node, "fsfs", obj);
    }
    obj = map(data, Function.prototype.call, setFillAndStroke.prototype.ua);
    if (0 < insert(obj, function(dataAndEvents) {
      return 0 < dataAndEvents;
    })) {
      callback(node, "rcs", obj.join());
    }
    if (obj = _each(data)) {
      callback(node, "ists", obj);
    }
    var funcs = {};
    forEach(data, function(index) {
      if (index = index.getClickUrl()) {
        funcs[index] = (funcs[index] || 0) + 1;
      }
    });
    if (!setAttribute(funcs)) {
      node = new test("gpt_sra_setclickurl");
      /** @type {Array} */
      var assigns = [];
      each(funcs, function(vvar, newlines) {
        assigns.push(newlines.length + ":" + vvar);
      });
      valueOf(node, "lenfreqs", assigns.join());
      log(node);
      jQuery(node, ctor.getInstance().get(58));
    }
  };
  /**
   * @param {string} value
   * @param {string} other
   * @return {?}
   */
  var min = function(value, other) {
    return(null === value ? other : value) ? "1" : "0";
  };
  /**
   * @param {Object} obj
   * @param {string} id
   * @param {?} data
   * @return {undefined}
   */
  var callback = function(obj, id, data) {
    if (null != data) {
      debug(obj, id, encodeURIComponent("" + data));
    }
  };
  /**
   * @param {Object} obj
   * @param {string} name
   * @param {string} val
   * @return {undefined}
   */
  var debug = function(obj, name, val) {
    if (null != val) {
      if ("" != val) {
        /** @type {string} */
        obj.o = "?" != obj.o.charAt(obj.o.length - 1) ? obj.o + ("&" + name + "=" + val) : obj.o + (name + "=" + val);
      }
    }
  };
  /**
   * @param {Object} node
   * @param {Object} path
   * @return {undefined}
   */
  var setData = function(node, path) {
    /** @type {string} */
    var s = "";
    if ("" != path) {
      path = path.split("/");
      /** @type {number} */
      s = 0;
      for (;s < path.length;s++) {
        if ("" != path[s]) {
          /** @type {boolean} */
          var j = false;
          /** @type {number} */
          var i = 0;
          for (;i < node.v.length;i++) {
            if (path[s] == node.v[i]) {
              /** @type {boolean} */
              j = true;
              break;
            }
          }
          if (!j) {
            node.v.push(path[s]);
          }
        }
      }
      /** @type {string} */
      s = "";
      /** @type {number} */
      j = 0;
      for (;j < path.length;j++) {
        if (0 < j) {
          s += "/";
        } else {
          if ("" == path[0]) {
            continue;
          }
        }
        /** @type {number} */
        i = 0;
        for (;i < node.v.length;i++) {
          if (path[j] == node.v[i]) {
            s += i;
            break;
          }
        }
      }
    }
    node.C.push(s);
  };
  /**
   * @param {Array} data
   * @return {?}
   */
  var _each = function(data) {
    if (!data.length) {
      return 0;
    }
    /** @type {string} */
    var cDigit = "";
    /** @type {number} */
    var byteIndex = 0;
    for (;byteIndex < data.length;++byteIndex) {
      cDigit += data[byteIndex].getOutOfPage() ? "1" : "0";
    }
    return parseInt(cDigit, 2);
  };
  /**
   * @param {?} hash
   * @return {undefined}
   */
  var Message = function(hash) {
    this.S = hash;
  };
  var google_persistent_state = {
    google_persistent_state : true,
    google_persistent_state_async : true
  };
  var passedValues = {};
  var google_ps_14 = {
    14 : "gaGlobal",
    8 : "google_prev_ad_formats_by_region",
    9 : "google_prev_ad_slotnames_by_region"
  };
  /** @type {(Navigator|null)} */
  var options = navigator;
  /**
   * @return {?}
   */
  var tryIt = function() {
    try {
      return options.javaEnabled();
    } catch (a) {
      return false;
    }
  };
  /**
   * @param {string} val
   * @return {?}
   */
  var _update = function(val) {
    /** @type {number} */
    var data = 1;
    var value;
    var pos;
    if (void 0 != val && "" != val) {
      /** @type {number} */
      data = 0;
      /** @type {number} */
      pos = val.length - 1;
      for (;0 <= pos;pos--) {
        value = val.charCodeAt(pos);
        data = (data << 6 & 268435455) + value + (value << 14);
        /** @type {number} */
        value = data & 266338304;
        data = 0 != value ? data ^ value >> 21 : data;
      }
    }
    return data;
  };
  /**
   * @param {string} val
   * @param {string} value
   * @return {?}
   */
  var _init = function(val, value) {
    if (!val || "none" == val) {
      return 1;
    }
    /** @type {string} */
    val = String(val);
    if ("auto" == val) {
      /** @type {string} */
      val = value;
      if ("www." == val.substring(0, 4)) {
        val = val.substring(4, val.length);
      }
    }
    return _update(val.toLowerCase());
  };
  /** @type {RegExp} */
  var rtypenamespace = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/;
  /** @type {RegExp} */
  var re = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
  /**
   * @param {?} a
   * @param {?} b
   * @param {?} next
   * @param {?} x
   * @param {?} error
   * @return {undefined}
   */
  var ext = function(a, b, next, x, error) {
    that.call(this, a, b, next, x, error);
  };
  expect(ext, that);
  /**
   * @param {Object} a
   * @param {Object} data
   * @param {Object} c
   * @return {undefined}
   */
  ext.prototype.w = function(a, data, c) {
    if (0 < navigator.userAgent.indexOf("MSIE ")) {
      _createItem(this.j.u, "google_encoding", document.charset, false);
    }
    that.prototype.w.call(this, a, data, c);
    callback(this, "ifi", data[0].ha);
    if (null !== c && c.top != c) {
      /** @type {Array} */
      a = [];
      a.push(c.document.URL);
      if (c.name) {
        a.push(c.name);
      }
      c = resize(false, c, false);
      a.push(c.width.toString());
      a.push(c.height.toString());
      c = getChar(a.join(""));
    } else {
      /** @type {number} */
      c = 0;
    }
    if (0 != c) {
      callback(this, "ifk", c.toString());
    }
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  ext.prototype.B = function(c) {
    var name = c[0];
    var types = window;
    if (types.google_unique_id) {
      ++types.google_unique_id;
    } else {
      /** @type {number} */
      types.google_unique_id = 1;
    }
    name.ha = types.google_unique_id;
    if (this.l.A) {
      debug(this, "hxva", 1);
      callback(this, "cmsid", this.l.B);
      callback(this, "vid", this.l.C);
    } else {
      if (window.google_test_extended_pageview) {
        debug(this, "hxva", 1);
      }
    }
    if (!isNaN(this.l.videoPodNumber)) {
      debug(this, "pod", this.l.videoPodNumber);
    }
    if (!isNaN(this.l.videoPodPosition)) {
      debug(this, "ppos", this.l.videoPodPosition);
    }
    if (!isNaN(this.l.videoStreamCorrelator)) {
      debug(this, "scor", this.l.videoStreamCorrelator);
    }
    that.prototype.B.call(this, c);
    c = window;
    var self;
    name = c.document.domain;
    types = c.document.cookie;
    var queue = c.history.length;
    var t = c.screen;
    var data = c.document.referrer;
    if (lookup()) {
      self = handle().gaGlobal || {};
    } else {
      /** @type {number} */
      var path = Math.round((new Date).getTime() / 1E3);
      var result = window.google_analytics_domain_name;
      name = "undefined" == typeof result ? _init("auto", name) : _init(result, name);
      /** @type {boolean} */
      var root = -1 < types.indexOf("__utma=" + name + ".");
      /** @type {boolean} */
      var m = -1 < types.indexOf("__utmb=" + name);
      var obj;
      b: {
        if ((result = lookup(window)) && apply(result.master)) {
          result = result.master;
          /** @type {string} */
          var i = "google_persistent_state_async";
          obj = {};
        } else {
          result = handle();
          /** @type {string} */
          i = google_persistent_state.google_persistent_state ? "google_persistent_state" : timeout ? "google_persistent_state_async" : "google_persistent_state";
          if (passedValues[i]) {
            obj = passedValues[i];
            break b;
          }
          if ("google_persistent_state_async" == i) {
            obj = {};
          } else {
            obj = result;
          }
        }
        var o = result[i];
        obj = null != o && ("object" == typeof o && (null != o.S && "object" == typeof o.S)) ? passedValues[i] = o : result[i] = passedValues[i] = new Message(obj);
      }
      result = {};
      i = google_ps_14[14] || "google_ps_14";
      o = obj.S;
      var current = o[i];
      if (void 0 === current) {
        o[i] = result;
      } else {
        result = current;
      }
      obj = result || (obj.S[google_ps_14[14] || "google_ps_14"] = {});
      /** @type {boolean} */
      result = false;
      if (root) {
        data = types.split("__utma=" + name + ".")[1].split(";")[0].split(".");
        if (m) {
          obj.sid = data[3] + "";
        } else {
          if (!obj.sid) {
            /** @type {string} */
            obj.sid = path + "";
          }
        }
        obj.vid = data[0] + "." + data[1];
        /** @type {boolean} */
        obj.from_cookie = true;
      } else {
        if (!obj.sid) {
          /** @type {string} */
          obj.sid = path + "";
        }
        if (!obj.vid) {
          /** @type {boolean} */
          result = true;
          /** @type {number} */
          m = Math.round(2147483647 * Math.random());
          /** @type {string} */
          root = [options.appName, options.version, options.language ? options.language : options.browserLanguage, options.platform, options.userAgent, tryIt() ? 1 : 0].join("");
          if (t) {
            root += t.width + "x" + t.height + t.colorDepth;
          } else {
            if (window.java) {
              if (window.java.awt) {
                t = window.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                root += t.screen.width + "x" + t.screen.height;
              }
            }
          }
          /** @type {string} */
          root = root + types + (data || "");
          /** @type {number} */
          data = root.length;
          for (;0 < queue;) {
            root += queue-- ^ data++;
          }
          /** @type {string} */
          obj.vid = (m ^ _update(root) & 2147483647) + "." + path;
        }
        /** @type {boolean} */
        obj.from_cookie = false;
      }
      if (!obj.cid) {
        b: {
          /** @type {number} */
          path = 999;
          if (data = window.google_analytics_domain_name) {
            data = 0 == data.indexOf(".") ? data.substr(1) : data;
            /** @type {number} */
            path = ("" + data).split(".").length;
          }
          /** @type {number} */
          data = 999;
          types = types.split(";");
          /** @type {number} */
          t = 0;
          for (;t < types.length;t++) {
            if (queue = rtypenamespace.exec(types[t]) || re.exec(types[t])) {
              if (queue[1] == path) {
                /** @type {string} */
                self = queue[2];
                break b;
              }
              if (queue[1] < data) {
                /** @type {string} */
                data = queue[1];
                /** @type {string} */
                self = queue[2];
              }
            }
          }
        }
        if (result && (self && -1 != self.search(/^\d+\.\d+$/))) {
          /** @type {string} */
          obj.vid = self;
        } else {
          if (self != obj.vid) {
            /** @type {(string|undefined)} */
            obj.cid = self;
          }
        }
      }
      obj.dh = name;
      if (!obj.hid) {
        /** @type {number} */
        obj.hid = Math.round(2147483647 * Math.random());
      }
      self = obj;
    }
    debug(this, "ga_vid", self.vid);
    debug(this, "ga_sid", self.sid);
    debug(this, "ga_hid", self.hid);
    debug(this, "ga_fc", self.from_cookie);
    callback(this, "ga_wpids", c.google_analytics_uacct);
  };
  /**
   * @return {undefined}
   */
  var cycle = function() {
  };
  var j;
  /**
   * @return {undefined}
   */
  var reversed = function() {
  };
  expect(reversed, cycle);
  /**
   * @return {?}
   */
  reversed.prototype.j = function() {
    var item;
    a: {
      if (!this.l && ("undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject)) {
        /** @type {Array} */
        var codeSegments = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          var str = codeSegments[i];
          try {
            new ActiveXObject(str);
            item = this.l = str;
            break a;
          } catch (e) {
          }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      item = this.l;
    }
    return item ? new ActiveXObject(item) : new XMLHttpRequest;
  };
  j = new reversed;
  /**
   * @param {?} m
   * @param {?} u
   * @param {?} code
   * @return {undefined}
   */
  var a = function(m, u, code) {
    this.o = code;
    this.m = m;
    this.u = u;
    /** @type {number} */
    this.l = 0;
    /** @type {null} */
    this.j = null;
  };
  /**
   * @return {?}
   */
  a.prototype.get = function() {
    var source;
    if (0 < this.l) {
      this.l--;
      source = this.j;
      this.j = source.next;
      /** @type {null} */
      source.next = null;
    } else {
      source = this.m();
    }
    return source;
  };
  /**
   * @param {Object} data
   * @param {Object} c
   * @return {undefined}
   */
  var fire = function(data, c) {
    data.u(c);
    if (data.l < data.o) {
      data.l++;
      c.next = data.j;
      /** @type {Object} */
      data.j = c;
    }
  };
  /**
   * @param {?} callback
   * @return {undefined}
   */
  var query = function(callback) {
    global.setTimeout(function() {
      throw callback;
    }, 0);
  };
  /**
   * @param {Function} scope
   * @param {Object} fn
   * @return {undefined}
   */
  var defer = function(scope, fn) {
    /** @type {Function} */
    var callback = scope;
    if (fn) {
      callback = bind(scope, fn);
    }
    if (!then(global.setImmediate) || global.Window && (global.Window.prototype && (!agent_contains("Edge") && global.Window.prototype.setImmediate == global.setImmediate))) {
      if (!makeIterator) {
        makeIterator = create();
      }
      makeIterator(callback);
    } else {
      global.setImmediate(callback);
    }
  };
  var makeIterator;
  /**
   * @return {?}
   */
  var create = function() {
    var Channel = global.MessageChannel;
    if ("undefined" === typeof Channel) {
      if ("undefined" !== typeof window) {
        if (window.postMessage) {
          if (window.addEventListener) {
            if (!agent_contains("Presto")) {
              /**
               * @return {undefined}
               */
              Channel = function() {
                var doc = document.createElement("IFRAME");
                /** @type {string} */
                doc.style.display = "none";
                /** @type {string} */
                doc.src = "";
                document.documentElement.appendChild(doc);
                var win = doc.contentWindow;
                doc = win.document;
                doc.open();
                doc.write("");
                doc.close();
                /** @type {string} */
                var messageName = "callImmediate" + Math.random();
                /** @type {string} */
                var url = "file:" == win.location.protocol ? "*" : win.location.protocol + "//" + win.location.host;
                doc = bind(function(event) {
                  if (("*" == url || event.origin == url) && event.data == messageName) {
                    this.port1.onmessage();
                  }
                }, this);
                win.addEventListener("message", doc, false);
                this.port1 = {};
                this.port2 = {
                  /**
                   * @return {undefined}
                   */
                  postMessage : function() {
                    win.postMessage(messageName, url);
                  }
                };
              };
            }
          }
        }
      }
    }
    if ("undefined" !== typeof Channel && !createTextNode()) {
      var channel = new Channel;
      var context = {};
      var current = context;
      /**
       * @return {undefined}
       */
      channel.port1.onmessage = function() {
        if (set(context.next)) {
          context = context.next;
          var j = context.Ja;
          /** @type {null} */
          context.Ja = null;
          j();
        }
      };
      return function(dataAndEvents) {
        current.next = {
          Ja : dataAndEvents
        };
        current = current.next;
        channel.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(fetchOnlyFunction) {
      var scriptTag = document.createElement("SCRIPT");
      /**
       * @return {undefined}
       */
      scriptTag.onreadystatechange = function() {
        /** @type {null} */
        scriptTag.onreadystatechange = null;
        scriptTag.parentNode.removeChild(scriptTag);
        /** @type {null} */
        scriptTag = null;
        fetchOnlyFunction();
        /** @type {null} */
        fetchOnlyFunction = null;
      };
      document.documentElement.appendChild(scriptTag);
    } : function(funcToCall) {
      global.setTimeout(funcToCall, 0);
    };
  };
  var x = new a(function() {
    return new grid;
  }, function(record) {
    record.reset();
  }, 100);
  /**
   * @return {?}
   */
  var MAP = function() {
    var item = m4;
    /** @type {null} */
    var ret = null;
    if (item.j) {
      ret = item.j;
      item.j = item.j.next;
      if (!item.j) {
        /** @type {null} */
        item.l = null;
      }
      /** @type {null} */
      ret.next = null;
    }
    return ret;
  };
  /**
   * @return {undefined}
   */
  var grid = function() {
    /** @type {null} */
    this.next = this.l = this.j = null;
  };
  /**
   * @param {number} opt_attributes
   * @param {number} value
   * @return {undefined}
   */
  grid.prototype.set = function(opt_attributes, value) {
    /** @type {number} */
    this.j = opt_attributes;
    /** @type {number} */
    this.l = value;
    /** @type {null} */
    this.next = null;
  };
  /**
   * @return {undefined}
   */
  grid.prototype.reset = function() {
    /** @type {null} */
    this.next = this.l = this.j = null;
  };
  /**
   * @param {?} doc
   * @param {number} pdataOld
   * @return {undefined}
   */
  var setText = function(doc, pdataOld) {
    if (!assimilate) {
      handleStackObject();
    }
    if (!el) {
      assimilate();
      /** @type {boolean} */
      el = true;
    }
    var item = m4;
    var data_priv = x.get();
    data_priv.set(doc, pdataOld);
    if (item.l) {
      item.l.next = data_priv;
    } else {
      item.j = data_priv;
    }
    item.l = data_priv;
  };
  var assimilate;
  /**
   * @return {undefined}
   */
  var handleStackObject = function() {
    var value = global.Promise;
    if (-1 != String(value).indexOf("[native code]")) {
      var promise = value.resolve(void 0);
      /**
       * @return {undefined}
       */
      assimilate = function() {
        promise.then(wrappedCallback);
      };
    } else {
      /**
       * @return {undefined}
       */
      assimilate = function() {
        defer(wrappedCallback);
      };
    }
  };
  /** @type {boolean} */
  var el = false;
  var m4 = new function() {
    /** @type {null} */
    this.l = this.j = null;
  };
  /**
   * @return {undefined}
   */
  var wrappedCallback = function() {
    var args;
    for (;args = MAP();) {
      try {
        args.j.call(args.l);
      } catch (restoreScript) {
        query(restoreScript);
      }
      fire(x, args);
    }
    /** @type {boolean} */
    el = false;
  };
  /**
   * @param {?} next_callback
   * @param {?} next_scope
   * @return {undefined}
   */
  var Promise = function(next_callback, next_scope) {
    /** @type {number} */
    this.j = 0;
    this.w = void 0;
    /** @type {null} */
    this.o = this.l = this.m = null;
    /** @type {boolean} */
    this.u = this.v = false;
    if (next_callback != clearedOnReadyStateChange) {
      try {
        var vvar = this;
        next_callback.call(next_scope, function(subKey) {
          walk(vvar, 2, subKey);
        }, function(subKey) {
          walk(vvar, 3, subKey);
        });
      } catch (camelKey) {
        walk(this, 3, camelKey);
      }
    }
  };
  /**
   * @return {undefined}
   */
  var appliedOrFed = function() {
    /** @type {null} */
    this.next = this.m = this.l = this.o = this.j = null;
    /** @type {boolean} */
    this.u = false;
  };
  /**
   * @return {undefined}
   */
  appliedOrFed.prototype.reset = function() {
    /** @type {null} */
    this.m = this.l = this.o = this.j = null;
    /** @type {boolean} */
    this.u = false;
  };
  var message = new a(function() {
    return new appliedOrFed;
  }, function(record) {
    record.reset();
  }, 100);
  /**
   * @param {?} b
   * @param {?} x
   * @param {Object} name
   * @return {?}
   */
  var contains = function(b, x, name) {
    var m = message.get();
    m.o = b;
    m.l = x;
    /** @type {Object} */
    m.m = name;
    return m;
  };
  /**
   * @param {Function} callback
   * @param {?} f
   * @param {Object} label
   * @return {?}
   */
  Promise.prototype.then = function(callback, f, label) {
    return eq(this, then(callback) ? callback : null, then(f) ? f : null, label);
  };
  /** @type {function (Function, ?, Object): ?} */
  Promise.prototype.then = Promise.prototype.then;
  /** @type {boolean} */
  Promise.prototype.$goog_Thenable = true;
  /**
   * @param {?} event
   * @return {undefined}
   */
  Promise.prototype.cancel = function(event) {
    if (0 == this.j) {
      setText(function() {
        var tempCtx = new s(event);
        Line(this, tempCtx);
      }, this);
    }
  };
  /**
   * @param {Object} options
   * @param {Object} ctx
   * @return {undefined}
   */
  var Line = function(options, ctx) {
    if (0 == options.j) {
      if (options.m) {
        var data = options.m;
        if (data.l) {
          /** @type {number} */
          var current = 0;
          /** @type {null} */
          var typePattern = null;
          /** @type {null} */
          var source = null;
          var v = data.l;
          for (;v && (v.u || (current++, v.j == options && (typePattern = v), !(typePattern && 1 < current)));v = v.next) {
            if (!typePattern) {
              source = v;
            }
          }
          if (typePattern) {
            if (0 == data.j && 1 == current) {
              Line(data, ctx);
            } else {
              if (source) {
                current = source;
                if (current.next == data.o) {
                  data.o = current;
                }
                current.next = current.next.next;
              } else {
                tmpl(data);
              }
              animationLoop(data, typePattern, 3, ctx);
            }
          }
        }
        /** @type {null} */
        options.m = null;
      } else {
        walk(options, 3, ctx);
      }
    }
  };
  /**
   * @param {Object} item
   * @param {?} id
   * @return {undefined}
   */
  var addItem = function(item, id) {
    if (!item.l) {
      if (!(2 != item.j && 3 != item.j)) {
        isElement(item);
      }
    }
    if (item.o) {
      item.o.next = id;
    } else {
      item.l = id;
    }
    item.o = id;
  };
  /**
   * @param {Object} m
   * @param {boolean} context
   * @param {boolean} value
   * @param {Object} elem
   * @return {?}
   */
  var eq = function(m, context, value, elem) {
    var item = contains(null, null, null);
    item.j = new Promise(function(win, some) {
      item.o = context ? function(sx) {
        try {
          var position = context.call(elem, sx);
          win(position);
        } catch (c) {
          some(c);
        }
      } : win;
      item.l = value ? function(sx) {
        try {
          var position = value.call(elem, sx);
          if (!set(position) && sx instanceof s) {
            some(sx);
          } else {
            win(position);
          }
        } catch (c) {
          some(c);
        }
      } : some;
    });
    /** @type {Object} */
    item.j.m = m;
    addItem(m, item);
    return item.j;
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  Promise.prototype.B = function(sx) {
    /** @type {number} */
    this.j = 0;
    walk(this, 2, sx);
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  Promise.prototype.C = function(sx) {
    /** @type {number} */
    this.j = 0;
    walk(this, 3, sx);
  };
  /**
   * @param {Object} o
   * @param {number} opt_attributes
   * @param {Object} key
   * @return {undefined}
   */
  var walk = function(o, opt_attributes, key) {
    if (0 == o.j) {
      if (o === key) {
        /** @type {number} */
        opt_attributes = 3;
        /** @type {TypeError} */
        key = new TypeError("Promise cannot resolve to itself");
      }
      /** @type {number} */
      o.j = 1;
      var d;
      a: {
        /** @type {Object} */
        var value = key;
        var index = o.B;
        var f = o.C;
        if (value instanceof Promise) {
          addItem(value, contains(index || clearedOnReadyStateChange, f || null, o));
          /** @type {boolean} */
          d = true;
        } else {
          var k;
          if (value) {
            try {
              /** @type {boolean} */
              k = !!value.$goog_Thenable;
            } catch (n) {
              /** @type {boolean} */
              k = false;
            }
          } else {
            /** @type {boolean} */
            k = false;
          }
          if (k) {
            value.then(index, f, o);
            /** @type {boolean} */
            d = true;
          } else {
            if (apply(value)) {
              try {
                var restoreScript = value.then;
                if (then(restoreScript)) {
                  iterator(value, restoreScript, index, f, o);
                  /** @type {boolean} */
                  d = true;
                  break a;
                }
              } catch (resources) {
                f.call(o, resources);
                /** @type {boolean} */
                d = true;
                break a;
              }
            }
            /** @type {boolean} */
            d = false;
          }
        }
      }
      if (!d) {
        /** @type {Object} */
        o.w = key;
        /** @type {number} */
        o.j = opt_attributes;
        /** @type {null} */
        o.m = null;
        isElement(o);
        if (!(3 != opt_attributes)) {
          if (!(key instanceof s)) {
            setValue(o, key);
          }
        }
      }
    }
  };
  /**
   * @param {?} obj
   * @param {Function} callback
   * @param {Function} value
   * @param {Function} method
   * @param {Object} object
   * @return {undefined}
   */
  var iterator = function(obj, callback, value, method, object) {
    /** @type {boolean} */
    var f = false;
    /**
     * @param {?} i
     * @return {undefined}
     */
    var data = function(i) {
      if (!f) {
        /** @type {boolean} */
        f = true;
        value.call(object, i);
      }
    };
    /**
     * @param {?} el
     * @return {undefined}
     */
    var next = function(el) {
      if (!f) {
        /** @type {boolean} */
        f = true;
        method.call(object, el);
      }
    };
    try {
      callback.call(obj, data, next);
    } catch (failuresLink) {
      next(failuresLink);
    }
  };
  /**
   * @param {Object} value
   * @return {undefined}
   */
  var isElement = function(value) {
    if (!value.v) {
      /** @type {boolean} */
      value.v = true;
      setText(value.A, value);
    }
  };
  /**
   * @param {Object} c
   * @return {?}
   */
  var tmpl = function(c) {
    /** @type {null} */
    var t = null;
    if (c.l) {
      t = c.l;
      c.l = t.next;
      /** @type {null} */
      t.next = null;
    }
    if (!c.l) {
      /** @type {null} */
      c.o = null;
    }
    return t;
  };
  /**
   * @return {undefined}
   */
  Promise.prototype.A = function() {
    var typePattern;
    for (;typePattern = tmpl(this);) {
      animationLoop(this, typePattern, this.j, this.w);
    }
    /** @type {boolean} */
    this.v = false;
  };
  /**
   * @param {Object} config
   * @param {Object} args
   * @param {number} walkers
   * @param {Object} ctx
   * @return {undefined}
   */
  var animationLoop = function(config, args, walkers, ctx) {
    if (3 == walkers && (args.l && !args.u)) {
      for (;config && config.u;config = config.m) {
        /** @type {boolean} */
        config.u = false;
      }
    }
    if (args.j) {
      /** @type {null} */
      args.j.m = null;
      clean(args, walkers, ctx);
    } else {
      try {
        if (args.u) {
          args.o.call(args.m);
        } else {
          clean(args, walkers, ctx);
        }
      } catch (element) {
        keyFunc.call(null, element);
      }
    }
    fire(message, args);
  };
  /**
   * @param {Object} item
   * @param {number} obj
   * @param {Object} ctx
   * @return {undefined}
   */
  var clean = function(item, obj, ctx) {
    if (2 == obj) {
      item.o.call(item.m, ctx);
    } else {
      if (item.l) {
        item.l.call(item.m, ctx);
      }
    }
  };
  /**
   * @param {Object} b
   * @param {Object} element
   * @return {undefined}
   */
  var setValue = function(b, element) {
    /** @type {boolean} */
    b.u = true;
    setText(function() {
      if (b.u) {
        keyFunc.call(null, element);
      }
    });
  };
  /** @type {function (?): undefined} */
  var keyFunc = query;
  /**
   * @param {?} val
   * @return {undefined}
   */
  var s = function(val) {
    assert.call(this, val);
  };
  expect(s, assert);
  /** @type {string} */
  s.prototype.name = "cancel";
  /**
   * @param {string} method
   * @param {string} url
   * @param {?} input
   * @param {Object} options
   * @return {?}
   */
  var ajax = function(method, url, input, options) {
    return new Promise(function(resolve, reject) {
      var opts = options || {};
      var timerId;
      var xhr = opts.Gb ? opts.Gb.j() : j.j();
      try {
        xhr.open(method, url, true);
      } catch (ex) {
        reject(new result("Error opening XHR: " + ex.message, url));
      }
      /**
       * @return {undefined}
       */
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState) {
          global.clearTimeout(timerId);
          var str;
          a: {
            switch(xhr.status) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 206:
              ;
              case 304:
              ;
              case 1223:
                /** @type {boolean} */
                str = true;
                break a;
              default:
                /** @type {boolean} */
                str = false;
            }
          }
          if (!str) {
            if (str = 0 === xhr.status) {
              str = url.match(id)[1] || null;
              if (!str) {
                if (global.self) {
                  if (global.self.location) {
                    str = global.self.location.protocol;
                    str = str.substr(0, str.length - 1);
                  }
                }
              }
              str = str ? str.toLowerCase() : "";
              /** @type {boolean} */
              str = !("http" == str || ("https" == str || "" == str));
            }
          }
          if (str) {
            resolve(xhr);
          } else {
            reject(new error(xhr.status, url));
          }
        }
      };
      /**
       * @return {undefined}
       */
      xhr.onerror = function() {
        reject(new result("Network error", url));
      };
      var val;
      if (opts.headers) {
        var key;
        for (key in opts.headers) {
          val = opts.headers[key];
          if (null != val) {
            xhr.setRequestHeader(key, val);
          }
        }
        val = opts.headers["Content-Type"];
      }
      key = global.FormData && input instanceof global.FormData;
      if (!("POST" != method)) {
        if (!(void 0 !== val)) {
          if (!key) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          }
        }
      }
      if (opts.withCredentials) {
        xhr.withCredentials = opts.withCredentials;
      }
      if (opts.responseType) {
        xhr.responseType = opts.responseType;
      }
      if (opts.wb) {
        xhr.overrideMimeType(opts.wb);
      }
      if (0 < opts.Db) {
        timerId = global.setTimeout(function() {
          /** @type {function (): undefined} */
          xhr.onreadystatechange = clearedOnReadyStateChange;
          xhr.abort();
          reject(new module(url));
        }, opts.Db);
      }
      try {
        xhr.send(input);
      } catch (er) {
        /** @type {function (): undefined} */
        xhr.onreadystatechange = clearedOnReadyStateChange;
        global.clearTimeout(timerId);
        reject(new result("Error sending XHR: " + er.message, url));
      }
    });
  };
  /**
   * @param {string} name
   * @param {string} val
   * @return {undefined}
   */
  var result = function(name, val) {
    assert.call(this, name + ", url=" + val);
    /** @type {string} */
    this.url = val;
  };
  expect(result, assert);
  /** @type {string} */
  result.prototype.name = "XhrError";
  /**
   * @param {number} status
   * @param {?} textStatus
   * @return {undefined}
   */
  var error = function(status, textStatus) {
    result.call(this, "Request Failed, status=" + status, textStatus);
    /** @type {number} */
    this.status = status;
  };
  expect(error, result);
  /** @type {string} */
  error.prototype.name = "XhrHttpError";
  /**
   * @param {?} name
   * @return {undefined}
   */
  var module = function(name) {
    result.call(this, "Request timed out", name);
  };
  expect(module, result);
  /** @type {string} */
  module.prototype.name = "XhrTimeoutError";
  /**
   * @return {undefined}
   */
  var dst = function() {
  };
  expect(dst, cycle);
  /**
   * @return {?}
   */
  dst.prototype.j = function() {
    /** @type {XMLHttpRequest} */
    var testXHR = new XMLHttpRequest;
    if ("withCredentials" in testXHR) {
      return testXHR;
    }
    if ("undefined" != typeof XDomainRequest) {
      return new xhr;
    }
    throw Error("Unsupported browser");
  };
  /**
   * @return {undefined}
   */
  var xhr = function() {
    /** @type {XDomainRequest} */
    this.j = new XDomainRequest;
    /** @type {number} */
    this.readyState = 0;
    /** @type {null} */
    this.onreadystatechange = null;
    /** @type {string} */
    this.responseText = "";
    /** @type {number} */
    this.status = -1;
    /** @type {null} */
    this.statusText = null;
    this.j.onload = bind(this.gb, this);
    this.j.onerror = bind(this.Ka, this);
    this.j.onprogress = bind(this.ib, this);
    this.j.ontimeout = bind(this.jb, this);
  };
  self = xhr.prototype;
  /**
   * @param {string} url
   * @param {string} method
   * @param {Object} dataAndEvents
   * @return {undefined}
   */
  self.open = function(url, method, dataAndEvents) {
    if (null != dataAndEvents && !dataAndEvents) {
      throw Error("Only async requests are supported.");
    }
    this.j.open(url, method);
  };
  /**
   * @param {?} serviceName
   * @return {undefined}
   */
  self.send = function(serviceName) {
    if (serviceName) {
      if ("string" == typeof serviceName) {
        this.j.send(serviceName);
      } else {
        throw Error("Only string data is supported");
      }
    } else {
      this.j.send();
    }
  };
  /**
   * @return {undefined}
   */
  self.abort = function() {
    this.j.abort();
  };
  /**
   * @return {undefined}
   */
  self.setRequestHeader = function() {
  };
  /**
   * @return {undefined}
   */
  self.gb = function() {
    /** @type {number} */
    this.status = 200;
    this.responseText = this.j.responseText;
    abort(this, 4);
  };
  /**
   * @return {undefined}
   */
  self.Ka = function() {
    /** @type {number} */
    this.status = 500;
    /** @type {string} */
    this.responseText = "";
    abort(this, 4);
  };
  /**
   * @return {undefined}
   */
  self.jb = function() {
    this.Ka();
  };
  /**
   * @return {undefined}
   */
  self.ib = function() {
    /** @type {number} */
    this.status = 200;
    abort(this, 1);
  };
  /**
   * @param {XMLHttpRequest} request
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  var abort = function(request, expectedNumberOfNonCommentArgs) {
    /** @type {number} */
    request.readyState = expectedNumberOfNonCommentArgs;
    if (request.onreadystatechange) {
      request.onreadystatechange();
    }
  };
  /**
   * @param {Element} error
   * @return {undefined}
   */
  var failure = function(error) {
    if (error = errorCallback(error)) {
      /** @type {string} */
      error.innerHTML = "";
    }
  };
  /**
   * @param {Element} e
   * @param {boolean} state
   * @return {undefined}
   */
  var enter = function(e, state) {
    if (e = errorCallback(e)) {
      /** @type {string} */
      e.style.display = state ? "" : "none";
    }
  };
  /**
   * @param {Object} element
   * @param {string} path
   * @param {string} name
   * @param {boolean} recurring
   * @param {Array} options
   * @param {Object} iframe
   * @return {?}
   */
  var CodeMirror = function(element, path, name, recurring, options, iframe) {
    iframe = (iframe || document).createElement("iframe");
    /** @type {string} */
    iframe.id = path;
    /** @type {string} */
    iframe.title = name;
    /** @type {string} */
    iframe.name = path;
    if (isFunction(options)) {
      if (null != options[0]) {
        if (null != options[1]) {
          /** @type {string} */
          iframe.width = String(options[0]);
          /** @type {string} */
          iframe.height = String(options[1]);
        }
      }
    } else {
      /** @type {string} */
      iframe.width = "100%";
      /** @type {string} */
      iframe.height = "0";
    }
    /** @type {string} */
    iframe.vspace = "0";
    /** @type {string} */
    iframe.hspace = "0";
    /** @type {string} */
    iframe.allowTransparency = "true";
    /** @type {string} */
    iframe.scrolling = "no";
    /** @type {string} */
    iframe.marginWidth = "0";
    /** @type {string} */
    iframe.marginHeight = "0";
    /** @type {string} */
    iframe.frameBorder = "0";
    /** @type {string} */
    iframe.style.border = "0";
    /** @type {string} */
    iframe.style.verticalAlign = "bottom";
    if (recurring) {
      /** @type {string} */
      iframe.style.visibility = "hidden";
      /** @type {string} */
      iframe.style.display = "none";
    }
    if ($(targets, target.G)) {
      /** @type {string} */
      iframe.srcdoc = "";
    }
    element.appendChild(iframe);
    return iframe;
  };
  /**
   * @param {HTMLElement} element
   * @param {?} url
   * @return {undefined}
   */
  var cleanup = function(element, url) {
    if (0 != read()) {
      if (element = element.getElementById(url)) {
        if ("hidden" == element.style.visibility) {
          if ("none" == element.style.display) {
            element.parentNode.removeChild(element);
          }
        }
      }
    }
  };
  /**
   * @param {string} index
   * @param {?} all
   * @param {string} keepData
   * @param {string} elem
   * @param {string} context
   * @param {Function} arg
   * @param {string} parent
   * @param {boolean} pattern
   * @param {?} cb
   * @param {?} objects
   * @return {?}
   */
  var replace = function(index, all, keepData, elem, context, arg, parent, pattern, cb, objects) {
    var size;
    if (isFunction(context)) {
      size = new Vector(context[0], context[1]);
    } else {
      /** @type {number} */
      size = 1;
    }
    context = $(curr, now.G);
    return new load({
      Ca : index,
      kb : all,
      lb : keepData,
      content : val(elem),
      size : size,
      ub : {
        /**
         * @return {undefined}
         */
        info : function() {
        },
        /**
         * @return {undefined}
         */
        $a : function() {
        },
        /**
         * @return {undefined}
         */
        error : function() {
        }
      },
      cb : cb,
      /** @type {Function} */
      Pa : arg,
      sandbox : set(parent.sandbox) ? parent.sandbox : false,
      permissions : {
        pa : set(parent.allowOverlayExpansion) ? parent.allowOverlayExpansion : !pattern,
        qa : set(parent.allowPushExpansion) ? parent.allowPushExpansion : false
      },
      fb : $(thisObject, pdataCur.G),
      na : !!emit().fifWin,
      ob : context,
      Cb : removeNode(),
      fc : objects
    });
  };
  /**
   * @param {string} frame
   * @param {string} xhr
   * @param {boolean} recurring
   * @return {undefined}
   */
  var parse = function(frame, xhr, recurring) {
    if (recurring) {
      xhr = val(xhr, "<script>var inDapIF=true;\x3c/script>\n");
    }
    if (0 != read()) {
      var d;
      try {
        /** @type {boolean} */
        d = !!frame.contentWindow.document;
      } catch (U) {
        /** @type {boolean} */
        d = false;
      }
      if (d) {
        /** @type {string} */
        var key = xhr;
        var doc = click();
        try {
          var result = window.frames[frame.name];
          frame = key;
          /** @type {string} */
          var target = "http://" + ctor.getInstance().get(1) + "/pagead/inject_object_div.js";
          if (6 < parseInt(read(), 10) || 0 > frame.indexOf(target)) {
            var i;
            b: {
              frame = key;
              target = document;
              var pos = read();
              var m;
              if (!(m = 0 == pos || (isNaN(pos) || (7 > pos || (9 < pos || target.documentMode && 10 <= target.documentMode))))) {
                /** @type {(Array.<string>|null)} */
                var t = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                /** @type {boolean} */
                m = 6 <= (t ? parseFloat(t[1]) : 0);
              }
              if (!m) {
                /** @type {number} */
                pos = 0;
                for (;pos < frame.length;++pos) {
                  if (127 < frame.charCodeAt(pos)) {
                    /** @type {boolean} */
                    i = true;
                    break b;
                  }
                }
              }
              /** @type {boolean} */
              i = false;
            }
            if (i) {
              /** @type {string} */
              var value = unescape(encodeURIComponent(key));
              /** @type {number} */
              var j = Math.floor(value.length / 2);
              /** @type {Array} */
              frame = [];
              /** @type {number} */
              i = 0;
              for (;i < j;++i) {
                /** @type {string} */
                frame[i] = String.fromCharCode(256 * value.charCodeAt(2 * i + 1) + value.charCodeAt(2 * i));
              }
              if (1 == value.length % 2) {
                /** @type {string} */
                frame[j] = value.charAt(value.length - 1);
              }
              /** @type {string} */
              key = frame.join("");
            }
            result.contents = key;
            result.location.replace("javascript:window.contents");
          } else {
            result.contents = key;
            result.location.replace("javascript:document.write(window.contents);document.close();");
          }
        } catch (U) {
        } finally {
          promote(doc);
        }
      } else {
        /** @type {string} */
        value = xhr;
        result = click();
        try {
          /** @type {string} */
          key = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ onFrame()).toString(36));
          window[key] = value;
          /** @type {string} */
          value = 'var adContent = window.parent["' + key + '"];window.parent["' + key + '"] = null;document.write(adContent);';
          /** @type {string} */
          value = 6 == read() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + value + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + value + "document.close();";
          /** @type {string} */
          frame.src = 'javascript:\'<script type="text/javascript">' + value + "\x3c/script>'";
        } catch (U) {
          /** @type {null} */
          window[key] = null;
        } finally {
          promote(result);
        }
      }
    } else {
      /** @type {string} */
      result = xhr;
      try {
        doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument;
        if (-1 != navigator.userAgent.indexOf("Firefox") || $(base, width.G)) {
          doc.open("text/html", "replace");
        }
        doc.write(result);
        doc.close();
      } catch (U) {
      }
    }
  };
  /**
   * @param {string} value
   * @param {string} s
   * @return {?}
   */
  var val = function(value, s) {
    if (!value) {
      return value;
    }
    var excludes = value.toLowerCase();
    return-1 < excludes.indexOf("<!doctype") || -1 < excludes.indexOf("<html") ? value : "<html>\n<head>\n" + (s || "") + "</head><body>" + value + "</body></html>\n";
  };
  /**
   * @return {?}
   */
  var click = function() {
    /** @type {Array} */
    var timeline = [];
    var elems = document.getElementsByTagName("base");
    if (elems) {
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (;i < length;++i) {
        var elem = elems[i];
        var targets = elem.getAttribute("target");
        if (targets) {
          timeline.push({
            ab : elem,
            yb : targets
          });
          elem.removeAttribute("target");
        }
      }
    }
    return timeline;
  };
  /**
   * @param {Array} parent
   * @return {undefined}
   */
  var promote = function(parent) {
    if (parent) {
      /** @type {number} */
      var i = 0;
      var valuesLen = parent.length;
      for (;i < valuesLen;++i) {
        var child = parent[i];
        child.ab.setAttribute("target", child.yb);
      }
    }
  };
  /**
   * @param {?} row_id
   * @param {Object} i
   * @param {?} val
   * @param {?} page
   * @return {undefined}
   */
  var item = function(row_id, i, val, page) {
    var s = (0,eval)(val, "api_experiment");
    if (!assertFalse(escape(s))) {
      forEach(map(s.split(","), trim), function(protoProps) {
        unset(protoProps);
      });
    }
    /** @type {Object} */
    this.F = i;
    this.m = val;
    this.C = page;
    this.l = $(existing, hiddenID.G);
    /** @type {number} */
    this.w = Math.floor(4503599627370496 * Math.random());
    /** @type {boolean} */
    this.ha = false;
    this.j = row_id;
    /** @type {boolean} */
    this.sa = false;
    if (sx) {
      if (attr(9)) {
        j = new dst;
      }
    }
    this.Kb = $(defs, silentOptions.Za);
    this.Jb = $(defs, silentOptions.Ya) || ($(point, control.Ya) || ($(classes, element.Ya) || ($(ctx, promiseOrValue.Ya) || $(keyframes, ev.Ya))));
    this.Z = split();
  };
  /**
   * @return {?}
   */
  item.prototype.D = function() {
    return "lean";
  };
  /**
   * @param {Object} options
   * @param {number} value
   * @return {undefined}
   */
  var generate = function(options, value) {
    var suiteView = window;
    if (!value || isUndefined(suiteView)) {
      /** @type {number} */
      value = Math.floor(4503599627370496 * Math.random());
    } else {
      /** @type {boolean} */
      options.ha = true;
    }
    /** @type {number} */
    options.w = Math.floor(value);
  };
  /**
   * @return {?}
   */
  item.prototype.fa = function() {
    return null;
  };
  /**
   * @return {?}
   */
  item.prototype.T = function() {
    return false;
  };
  /**
   * @return {undefined}
   */
  item.prototype.ga = function() {
  };
  /**
   * @param {Object} args
   * @param {?} message
   * @param {number} dataAndEvents
   * @param {(Node|string)} value
   * @return {?}
   */
  var prompt = function(args, message, dataAndEvents, value) {
    var options = new parse_workbook;
    /** @type {string} */
    options.H = "json_html";
    options.u = args.J(args.j);
    /** @type {number} */
    options.v = dataAndEvents;
    /** @type {(Node|string)} */
    options.l = value;
    options.j = message;
    return options;
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  item.prototype.B = function(c) {
    /** @type {string} */
    c.w = this.w + "";
    c.m = filter();
    c.D = this.ha;
  };
  /**
   * @param {Object} r
   * @return {?}
   */
  item.prototype.ia = function(r) {
    this.B(r);
    return check(this, this.j ? "sra" : "single", r).ia(r.j);
  };
  /**
   * @param {Object} assert
   * @param {(Array|string)} url
   * @param {?} callback
   * @param {?} link
   * @param {boolean} keepData
   * @return {undefined}
   */
  var poll = function(assert, url, callback, link, keepData) {
    var memory = {
      timeoutMs : 0,
      withCredentials : true
    };
    /**
     * @param {Object} error
     * @return {undefined}
     */
    var init = function(error) {
      var suiteView = new test(keepData ? "gpt_post_error" : "gpt_get_error", pop());
      if (error.name) {
        valueOf(suiteView, "name", error.name);
      }
      if (error.status) {
        valueOf(suiteView, "status", error.status);
      }
      if (error.message) {
        valueOf(suiteView, "message", error.message);
      }
      log(suiteView, this.F);
      jQuery(suiteView);
    };
    /**
     * @param {string} result
     * @return {undefined}
     */
    var success = function(result) {
      var item;
      result = result.responseText;
      result = result.substring(result.indexOf("(") + 1, result.lastIndexOf(")")).replace(/\\x/g, "\\u00");
      var successCallback = global.JSON.parse;
      try {
        item = successCallback(result);
      } catch (q) {
        /** @type {null} */
        item = null;
      }
      if (item) {
        if (keepData) {
          removeListener(item);
        }
        callback(item);
      }
    };
    if (keepData) {
      url = url.match(id);
      ajax("POST", crop(url[1], url[2], url[3], url[4], url[5], "nwids=" + encodeURIComponent(link)), url[6], memory).then(success, init, assert);
    } else {
      ajax("GET", url, null, memory).then(success, init, assert);
    }
  };
  /**
   * @param {string} obj
   * @return {undefined}
   */
  var removeListener = function(obj) {
    if (isFunction(obj)) {
      forEach(obj, removeListener);
    } else {
      each(obj, function(dataAndEvents) {
        if (dataAndEvents._cookies_) {
          delete dataAndEvents._cookies_;
        }
      });
    }
  };
  /**
   * @param {Object} obj
   * @param {string} array
   * @param {string} path
   * @param {boolean} keepData
   * @return {undefined}
   */
  var collect = function(obj, array, path, keepData) {
    forEach(array, function(l) {
      var r = prompt(this, [l], 1, path);
      this.B(r);
      r.u = this.J(false);
      r = check(this, "single", r).ia([l]);
      r = translate(r, keepData ? 8192 : 4096);
      l.fetchStarted(r);
    }, obj);
  };
  /**
   * @param {Object} item
   * @param {Object} o
   * @param {boolean} recurring
   * @return {undefined}
   */
  var owns = function(item, o, recurring) {
    if (flush(item.F, o)) {
      if (recurring) {
        item.T([o]);
      }
      recurring = o.getCollapseEmptyDiv();
      if (null == recurring) {
        /** @type {boolean} */
        recurring = "true" === (0,eval)(item.m, "google_collapse_empty_div");
      }
      if (recurring) {
        enter(o.getSlotElementId(), false);
      }
    }
  };
  /**
   * @param {Object} data
   * @param {Object} array
   * @param {Object} args
   * @return {?}
   */
  var array = function(data, array, args) {
    if (data.j && !isFunction(array)) {
      return data = new test("sra_legacy_ad_response"), log(data), jQuery(data), [];
    }
    if (args.length) {
      var results = args[0];
      var i = data.Z;
      var value = results.getCsiId();
      var result = results.getContentUrl();
      addClass(i, "ad_fetch_period", value, results.hb);
      handleSuccess(i, result, "ad." + value);
    }
    if (!isFunction(array)) {
      /** @type {Array} */
      array = [array];
    }
    /** @type {Array} */
    results = [];
    /** @type {number} */
    i = 0;
    for (;i < args.length;++i) {
      value = args[i];
      var length = array[i][value.getAdUnitPath()];
      if (length) {
        /** @type {Object} */
        result = data;
        var color = value;
        color.l = length;
        color.fetchEnded();
        if (null != length._cookies_) {
          _cookie(result.C, length);
        }
        if (length._persistent_for_stream_) {
          /** @type {null} */
          result.F.I[write(color)] = null;
        }
        if (result = length._a_exps_) {
          /** @type {number} */
          color = 0;
          length = result.length;
          for (;color < length;color++) {
            unset(result[color].toString(), true);
          }
        }
        results.push(value);
      }
    }
    return results;
  };
  /**
   * @return {undefined}
   */
  var onsuccess = function() {
    /** @type {number} */
    global.googletag._getcook_ = 1;
  };
  /**
   * @param {Node} node
   * @param {string} data
   * @param {Array} mat0
   * @return {undefined}
   */
  var buildItems = function(node, data, mat0) {
    if (!(mat0.length == data.length)) {
      if (!node.sa) {
        /** @type {boolean} */
        node.sa = true;
        get(existing, ctor.getInstance().get(70), []);
        node.l = $(existing, hiddenID.G);
      }
    }
  };
  /**
   * @param {Object} other
   * @param {string} array
   * @param {Object} result
   * @return {undefined}
   */
  var match = function(other, array, result) {
    if (array.length) {
      var mapped = map(array, function(dataAndEvents) {
        return dataAndEvents.getCsiId();
      });
      result = {
        req_len : result.length,
        req_s : mapped.join("-")
      };
      array = array[0];
      all(other.Z, array.getCsiId(), array.hb, result);
    }
  };
  /**
   * @param {Object} a
   * @param {Object} obj
   * @param {Object} b
   * @return {undefined}
   */
  var assertEquals = function(a, obj, b) {
    b = {
      is_backfill_at_render : isArraylike(obj),
      qqid : b
    };
    toggleClass(a.Z, obj.getCsiId(), obj.hb, group(obj), b);
  };
  /**
   * @param {?} el
   * @param {?} item
   * @param {?} y
   * @param {?} options
   * @param {?} error
   * @return {undefined}
   */
  var src = function(el, item, y, options, error) {
    that.call(this, el, item, y, options, error);
  };
  expect(src, that);
  /**
   * @return {undefined}
   */
  src.prototype.A = function() {
    that.prototype.A.call(this);
    debug(this, "m_ast", "js");
    debug(this, "markup", "html");
    debug(this, "js", "afmc");
  };
  /**
   * @param {?} index
   * @param {?} data
   * @param {?} capture
   * @param {?} a
   * @return {undefined}
   */
  var R = function(index, data, capture, a) {
    item.call(this, index, data, capture, a);
    /** @type {boolean} */
    this.da = this.L = this.O = this.H = false;
    /** @type {string} */
    this.P = this.R = "";
    /** @type {number} */
    this.videoStreamCorrelator = NaN;
    /** @type {number} */
    this.o = 0;
    /** @type {boolean} */
    this.Sb = Math.random() < ctor.getInstance().get(66);
  };
  expect(R, item);
  /**
   * @return {?}
   */
  R.prototype.D = function() {
    return "unknown";
  };
  /**
   * @param {Object} c
   * @return {undefined}
   */
  R.prototype.B = function(c) {
    R.Fa.B.call(this, c);
    c.A = this.da;
    c.B = this.P;
    c.C = this.R;
    c.o = this.o;
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var onComplete = function(item) {
    var s = removeChild(item.F);
    if (0 < s.length) {
      var funcs = {};
      /** @type {Array} */
      var spec = [];
      /** @type {number} */
      var i = 0;
      for (;i < s.length;++i) {
        /** @type {boolean} */
        funcs[s[i][0]] = true;
      }
      each(funcs, function(dataAndEvents, func) {
        spec.push(func);
      });
      s = new test("gpt_missing_cb", pop(), ctor.getInstance().get(10));
      valueOf(s, "pending", spec.join());
      valueOf(s, "correlator", item.w.toString());
      valueOf(s, "impl", item.D());
      log(s, item.F);
      jQuery(s);
    }
  };
  /**
   * @param {?} node
   * @return {?}
   */
  var _walk = function(node) {
    return reduceRight(values(node.F), function(url, config) {
      return config.sa ? url + 1 : url;
    });
  };
  /**
   * @param {Object} e
   * @param {Object} value
   * @return {undefined}
   */
  var expand = function(e, value) {
    if (e.Sb) {
      var s = value.l;
      if (s) {
        if (!s._empty_) {
          if (s = s._html_) {
            if (-1 == s.indexOf("adpnt")) {
              value = value.getEscapedQemQueryId();
              s = new test("gpt_qse_missing", pop(), 1);
              valueOf(s, "qemQueryId", value);
              log(s, e.F);
              jQuery(s);
            }
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  R.prototype.Pb = function() {
    onComplete(this);
  };
  /**
   * @return {undefined}
   */
  R.prototype.Rb = function() {
    var suiteView = new test("gpt_req_disp_mismatch", pop(), ctor.getInstance().get(23));
    valueOf(suiteView, "dslots", _walk(this).toString());
    valueOf(suiteView, "impl", this.J(this.j));
    valueOf(suiteView, "sra", this.j ? "1" : "0");
    valueOf(suiteView, "correlator", this.w.toString());
    log(suiteView, this.F);
    jQuery(suiteView);
  };
  /**
   * @param {Function} e
   * @return {undefined}
   */
  var destroy = function(e) {
    var suiteView = new test("gpt_fluid_not_sf", pop(), ctor.getInstance().get(23));
    valueOf(suiteView, "impl", e.D());
    log(suiteView, e.F);
    jQuery(suiteView);
  };
  /**
   * @param {Object} item
   * @param {string} obj
   * @param {boolean} r
   * @return {?}
   */
  var check = function(item, obj, r) {
    switch((0,eval)(item.m, "target_platform")) {
      case "MOBILE":
        return new src(obj, item.F, item.m, item.C, r);
      default:
        return new ext(obj, item.F, item.m, item.C, r);
    }
  };
  /**
   * @param {Object} self
   * @param {string} obj
   * @param {(Function|string)} name
   * @return {undefined}
   */
  var removeClass = function(self, obj, name) {
    if (self.o) {
      if (obj) {
        if ($(found, current.G) || ($(seen, colorObj.G) || $(q, elem.G))) {
          /** @type {number} */
          self.o = 0;
        } else {
          self = self.F.j[name];
          /** @type {string} */
          name = "";
          if (self) {
            name = self.getContentUrl();
          }
          render().registerAdBlock(name, 3, "json_html", obj, void 0, void 0, bind(self.La, self));
        }
      }
    }
  };
  /** @type {string} */
  var name = "3rd party ad content";
  reply("setAdIframeTitle", function(camel) {
    /** @type {string} */
    name = camel;
  });
  /**
   * @param {?} cfg
   * @param {?} height
   * @param {?} capture
   * @param {?} width
   * @return {undefined}
   */
  var Game = function(cfg, height, capture, width) {
    R.call(this, cfg, height, capture, width);
    if (cfg) {
      get(wrapped, ctor.getInstance().get(77), [], true);
      get(fromIndex, ctor.getInstance().get(84), [], true);
    } else {
      get(foo, ctor.getInstance().get(77), [], true);
      get(a2, ctor.getInstance().get(84), [], true);
    }
    /** @type {Array} */
    this.u = [];
    this.I = {};
    /** @type {number} */
    this.U = 0;
    this.La = {};
    /** @type {number} */
    this.sb = this.rb = NaN;
    /** @type {boolean} */
    this.M = false;
    /** @type {number} */
    this.X = NaN;
    /** @type {boolean} */
    this.ra = false;
    this.dc = $(elements, tag.K) || ($(selector, field.G) || $(suiteView, F.G));
    this.Y = $(foo, obj.G) || $(wrapped, promise.G);
    this.ua = $(targetElement, seed.G);
    this.v = {};
    this.A = $(suiteView, F.G);
    /** @type {number} */
    this.Mb = 0;
    this.W = $(comp, w.G) || ($(tasks, STACK_JUMP_SEPARATOR.G) || $(ids, model.G));
  };
  expect(Game, R);
  /** @type {RegExp} */
  var nocode = /google_ads_iframe_\S+__hidden__/;
  /**
   * @return {?}
   */
  Game.prototype.D = function() {
    return this.j ? "gut_friendly_iframe_sra" : "gut_friendly_iframe";
  };
  /**
   * @param {boolean} sx
   * @return {?}
   */
  Game.prototype.J = function(sx) {
    return sx ? "fifs" : "fif";
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  Game.prototype.B = function(sx) {
    Game.Fa.B.call(this, sx);
    sx.persistentRoadblocksOnly = this.ra;
    sx.videoPodNumber = this.rb;
    sx.videoPodPosition = this.sb;
    sx.videoStreamCorrelator = this.videoStreamCorrelator;
  };
  /**
   * @param {Object} self
   * @param {Object} args
   * @param {number} c
   * @param {boolean} fn
   * @return {undefined}
   */
  var nextTick = function(self, args, c, fn) {
    var s = args.j;
    var node = self.ia(args);
    /** @type {number} */
    var active = res ? self.Kb || 4096 < node.length ? 1 : self.Jb ? 2 : 3 : 3;
    if (3 == active) {
      find(self, node, s, c, args.l, fn);
    } else {
      if (fn = 1 == active, open(self, node, s, fn), fn && (c = s[c], self.C && 1 != global.googletag._getcook_)) {
        node = self.C;
        fn = c.$;
        active = document.domain;
        if (1 == node.j || !node.l && !node.o) {
          /** @type {null} */
          node = null;
        } else {
          /** @type {string} */
          var output = _setTimeout(!!self.F.A) + "/gampad/cookie.js?";
          /** @type {string} */
          output = output + ("domain=" + encodeURIComponent(active));
          /** @type {string} */
          output = output + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + fn);
          if (node.l) {
            output += "&cookie=" + encodeURIComponent(node.l);
          }
          if (node.o) {
            output += "&cookie_enabled=1";
          }
          /** @type {string} */
          node = output;
        }
        if (node) {
          /** @type {string} */
          node = '<script src = "' + data(node) + '">\x3c/script>';
          main(self, c, node, c);
        }
      }
    }
    /** @type {boolean} */
    args.I = true;
    onsuccess();
    if (!self.j) {
      self.La[write(s[0])] = window.setTimeout(bind(self.Da, self), ctor.getInstance().get(13));
    }
    add(watch.getInstance(), o.Ha);
  };
  /**
   * @param {number} v00
   * @param {string} actual
   * @param {?} predicate
   * @return {?}
   */
  var predicate = function(v00, actual, predicate) {
    /** @type {string} */
    var optsData = "";
    if (predicate) {
      /** @type {string} */
      optsData = optsData + '<script type="text/javascript">function callbackProxy(adContents) { ' + ("window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + v00 + ");}") + "\x3c/script>";
    }
    return optsData + ('<script src = "' + actual + '">\x3c/script>');
  };
  /**
   * @param {Object} compareFn
   * @param {number} f
   * @param {string} next
   * @param {(number|string)} startAngle
   * @param {?} e
   * @return {undefined}
   */
  var clearSearch = function(compareFn, f, next, startAngle, e) {
    if (e) {
      $goog$exportPath_$(startAngle, bind(function(listb) {
        clear(this, listb, f);
      }, compareFn));
    }
    loadScript(document, next);
  };
  /**
   * @param {Object} item
   * @param {(Function|string)} value
   * @param {(Array|string)} selector
   * @param {number} n
   * @param {number} start
   * @param {boolean} array
   * @return {undefined}
   */
  var find = function(item, value, selector, n, start, array) {
    value = translate(value, 4096);
    var i = data(value);
    if (item.j) {
      collect(item, selector, start);
    } else {
      selector[0].fetchStarted(i);
    }
    template(item, selector, n);
    /** @type {number} */
    var x = ++item.U;
    /** @type {(Array|string)} */
    item.I[x] = selector;
    /** @type {string} */
    value = "";
    if (!item.W) {
      value = predicate(x, i, item.j || flush(item.F, selector[0]));
    }
    match(item, selector, i);
    if (item.W) {
      clearSearch(item, x, i, start, item.j || flush(item.F, selector[0]));
    } else {
      if (null == document.getElementById(selector[n].getSlotElementId())) {
        if (item.l || item.A) {
          if (start = toArray(selector, function(dataAndEvents) {
            return null != document.getElementById(dataAndEvents.getSlotElementId());
          }), -1 != start) {
            /** @type {number} */
            n = start;
          } else {
            if (array) {
              main(item, selector[n], value, array);
            }
            return;
          }
        } else {
          if (n = toArray(selector, function(dataAndEvents) {
            return null != document.getElementById(dataAndEvents.getSlotElementId());
          }), -1 == n) {
            return;
          }
        }
      }
      main(item, selector[n], value, selector[n]);
    }
  };
  /**
   * @param {Object} node
   * @param {string} callback
   * @param {string} y
   * @param {boolean} type
   * @return {undefined}
   */
  var open = function(node, callback, y, type) {
    callback = translate(callback, type ? 8192 : 4096);
    var result = data(callback);
    if (node.j) {
      collect(node, y, "callbackProxy", type);
    } else {
      y[0].fetchStarted(result);
    }
    /** @type {number} */
    var x = ++node.U;
    /** @type {string} */
    node.I[x] = y;
    result = bind(function(listb) {
      if (this.j || flush(this.F, y[0])) {
        clear(this, listb, x);
      }
    }, node);
    poll(node, callback, result, max(node.F, y).join(","), type);
    match(node, y, callback);
  };
  /**
   * @param {Object} value
   * @param {number} id
   * @param {string} name
   * @param {(boolean|number|string)} color
   * @return {undefined}
   */
  var main = function(value, id, name, color) {
    var d = document;
    /** @type {string} */
    var e = getElementById(id) + "__hidden__";
    var error = d.getElementById(e);
    if (!error) {
      value = value.l || value.A ? color.getSlotElementId() : id.getSlotElementId();
      value = d.getElementById(value);
      if (null == value) {
        return;
      }
      error = CodeMirror(value, e, "", true, [0, 0], d);
    }
    parse(error, name, false);
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  var isFinite = function(obj) {
    return getElementById(obj) + "__container__";
  };
  /**
   * @param {Node} e
   * @param {Object} result
   * @return {undefined}
   */
  var ready = function(e, result) {
    var doc = document;
    if (flush(e.F, result)) {
      var id = result.getSlotElementId();
      var nodes = doc.getElementById(id);
      if (nodes) {
        id = isFinite(result);
        /** @type {string} */
        var root = getElementById(result) + "__hidden__";
        nodes = nodes.childNodes;
        /** @type {boolean} */
        var currentListItem = false;
        /** @type {number} */
        var i = 0;
        for (;i < nodes.length;++i) {
          if (1 == nodes[i].nodeType) {
            var node = nodes[i];
            if (e.l || e.A) {
              if (node.id != id && (node.id != root && !nocode.test(node.id))) {
                /** @type {boolean} */
                currentListItem = true;
                break;
              }
            } else {
              if (node.id != id && node.id != root) {
                /** @type {boolean} */
                currentListItem = true;
                break;
              }
            }
          }
        }
        if (currentListItem = currentListItem || handleError(doc, result)) {
          onload(e, result);
        }
      }
    }
  };
  /**
   * @param {Element} response
   * @param {Object} result
   * @return {?}
   */
  var handleError = function(response, result) {
    response = response.getElementById(isFinite(result));
    return!!response && insert(removeItem(response), function(ignores) {
      return ignores.id != getElementById(result);
    });
  };
  /**
   * @param {Object} data
   * @param {Array} r
   * @return {undefined}
   */
  Game.prototype.ga = function(data, r) {
    data = getter(data, function(object) {
      return 0 != keys(object).length;
    });
    if (data[false]) {
      forEach(data[false], function(name) {
        owns(this, name, true);
      }, this);
    }
    if (data = data[true]) {
      /** @type {number} */
      var fragment = r.isVideoRefresh ? 3 : 2;
      var e = split();
      forEach(data, function(x) {
        /** @type {number} */
        x.tb = ++split().X;
        var filename = x.getCsiId();
        getKey(e, "request_refresh_type", filename + "_" + fragment, x.hb);
      });
      if (set(r.videoStreamCorrelator)) {
        this.videoStreamCorrelator = r.videoStreamCorrelator;
      } else {
        /** @type {boolean} */
        var sel = true;
        if (set(r.changeCorrelator)) {
          sel = r.changeCorrelator;
        }
        if (sel) {
          generate(this);
        }
      }
      this.rb = r.videoPodNumber || NaN;
      this.sb = r.videoPodPosition || NaN;
      this.ra = r.persistentRoadblocksOnly || false;
      this.M = r.clearUnfilledSlots || false;
      _encode(this.F, data);
      this.X = data.length;
      /** @type {number} */
      r = 0;
      for (;r < data.length;++r) {
        ready(this, data[r]);
      }
      if (!this.H) {
        var cb = bind(function(text) {
          var udataCur = sync(this);
          return prompt(this, text, fragment, udataCur);
        }, this);
        if (this.j) {
          r = getter(data, function(labelElement) {
            return labelElement.$;
          });
          buildItems(this, data, r[data[0].$]);
          if (this.l) {
            each(r, function(outErr) {
              link(this, cb(outErr), 0);
            }, this);
          } else {
            link(this, cb(data), 0);
          }
        } else {
          /** @type {number} */
          r = 0;
          for (;r < data.length;++r) {
            link(this, cb([data[r]]), 0);
          }
        }
      }
    }
  };
  /**
   * @param {Object} sx
   * @return {?}
   */
  Game.prototype.T = function(sx) {
    /** @type {number} */
    var conditionIndex = 0;
    for (;conditionIndex < sx.length;++conditionIndex) {
      onload(this, sx[conditionIndex]);
      evaluate(this, sx[conditionIndex]);
      addRow(sx[conditionIndex]);
    }
    return true;
  };
  /**
   * @param {Element} name
   * @param {Object} data
   * @return {undefined}
   */
  var onload = function(name, data) {
    /** @type {boolean} */
    var c = !!data.o;
    finish(name, data);
    name = data.getSlotElementId();
    if (c) {
      var d = document.getElementById(name);
      if (d) {
        /** @type {string} */
        var item = isFinite(data) + "__to_be_removed__";
        data = hasKey(d.childNodes);
        forEach(data, function(n) {
          if (!(1 == n.nodeType && n.id == item)) {
            d.removeChild(n);
          }
        });
      }
    } else {
      failure(name);
    }
  };
  /**
   * @param {boolean} x
   * @param {Element} el
   * @param {Object} s
   * @param {Element} id
   * @param {Array} value
   * @return {?}
   */
  var createElement = function(x, el, s, id, value) {
    s = isFinite(s);
    el = el.createElement("div");
    /** @type {Object} */
    el.id = s;
    /** @type {Object} */
    el.name = s;
    s = el.style;
    /** @type {string} */
    s.border = "0pt none";
    if (x.F.o) {
      /** @type {string} */
      s.margin = "auto";
      /** @type {string} */
      s.textAlign = "center";
    }
    if (value) {
      x = isFunction(value);
      s.width = x ? value[0] + "px" : "100%";
      s.height = x ? value[1] + "px" : "0%";
    }
    id.appendChild(el);
    return el;
  };
  /**
   * @param {Object} element
   * @param {Object} s
   * @param {?} el
   * @param {Object} data
   * @return {?}
   */
  var onLoad = function(element, s, el, data) {
    var obj = getElementById(s);
    element = CodeMirror(el, obj, name, false, data, element);
    on(element, "load", function() {
      if (s.w) {
        s.loaded();
      }
    });
    /** @type {boolean} */
    s.H = true;
    return element;
  };
  /**
   * @param {Object} element
   * @return {undefined}
   */
  Game.prototype.N = function(element) {
    each(this.v, function(data) {
      if (!element.getElementById(getElementById(data.slot))) {
        onLoad(element, data.slot, data.vb, data.size);
      }
    }, this);
    this.v = {};
  };
  Game.prototype.N = m(109, Game.prototype.N);
  /**
   * @param {Object} item
   * @param {Node} context
   * @param {Object} obj
   * @param {Object} data
   * @return {undefined}
   */
  var onResize = function(item, context, obj, data) {
    var result;
    result = keys(obj);
    if (0 == result.length) {
      /** @type {null} */
      result = null;
    } else {
      var element = result[0];
      if (1 < result.length) {
        b: {
          if (result = obj.getSlotElementId(), (result = (context || document).getElementById(result)) && (result.style.height && result.style.width)) {
            /** @type {Array} */
            result = [result.style.width, result.style.height];
            /** @type {number} */
            var i = 0;
            for (;i < result.length;++i) {
              if (2 < result[i].length && "px" == result[i].substring(result[i].length - 2)) {
                /** @type {number} */
                result[i] = parseInt(result[i], 10);
              } else {
                /** @type {null} */
                result = null;
                break b;
              }
            }
          } else {
            /** @type {null} */
            result = null;
          }
        }
        element = result || element;
      }
      result = element;
    }
    if (result) {
      element = context.getElementById(getElementById(obj));
      if (null != element) {
        item.F.m[write(obj)] = element;
      } else {
        element = context.getElementById(obj.getSlotElementId());
        if (null != element) {
          if (item.Y && data) {
            data = result;
            element = context.getElementById(isFinite(obj)) || createElement(item, context, obj, element, data);
            result = getElementById(obj);
            if (!item.v[result]) {
              i = setAttribute(item.v);
              item.F.m[write(obj)] = element;
              item.v[result] = {
                slot : obj,
                vb : element,
                size : data
              };
              if (i) {
                window.setTimeout(bind(item.N, item, context), 0);
              }
            }
          } else {
            data = result;
            element = createElement(item, context, obj, element);
            context = onLoad(context, obj, element, data);
            /** @type {Node} */
            item.F.m[write(obj)] = context;
          }
        }
      }
    }
  };
  /**
   * @param {Object} obj
   * @param {Object} list
   * @param {number} x
   * @return {undefined}
   */
  var clear = function(obj, list, x) {
    var typePattern = obj.I[x];
    list = array(obj, list, typePattern);
    delete obj.I[x];
    forEach(list, obj.aa, obj);
    if (!obj.j) {
      if (!(x != obj.U)) {
        window.clearTimeout(obj.La[write(typePattern[0])]);
        forOwn(obj);
      }
    }
  };
  /**
   * @return {undefined}
   */
  Game.prototype.Da = function() {
    var html = new test("gpt_request_timeout", pop(), ctor.getInstance().get(23));
    log(html, this.F);
    jQuery(html);
    forOwn(this);
  };
  /**
   * @param {Object} object
   * @return {undefined}
   */
  var forOwn = function(object) {
    if (0 < object.u.length) {
      object.u.shift();
      if (0 < object.u.length) {
        nextTick(object, object.u[0], 0);
      }
    }
  };
  /**
   * @param {Object} target
   * @param {Object} c
   * @param {Node} force
   * @return {undefined}
   */
  var mixin = function(target, c, force) {
    var l = c.l;
    onResize(target, force, c, !l);
    if (null != l) {
      target.aa(c);
    }
  };
  /**
   * @param {Object} item
   * @param {?} val
   * @param {number} b
   * @param {Node} context
   * @param {Object} scope
   * @return {undefined}
   */
  var link = function(item, val, b, context, scope) {
    context = context || document;
    /** @type {number} */
    var i = 0;
    var valuesLen = val.j.length;
    for (;i < valuesLen;i++) {
      onResize(item, context, val.j[i], true);
    }
    if (item.j || item.dc) {
      nextTick(item, val, b, scope);
    } else {
      item.u.push(val);
      if (1 == item.u.length) {
        nextTick(item, val, b);
      } else {
        val = remove(item.u, function(i) {
          return!i.I;
        });
        if (1 < val.length) {
          b = new test("gpt_request_queue_length", pop());
          valueOf(b, "len", "" + val.length);
          log(b, item.F);
          jQuery(b);
        }
      }
    }
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  Game.prototype.ca = function(sx) {
    if (!this.j) {
      var b = document.getElementById(sx.getSlotElementId());
      if (b) {
        this.F.C[write(sx)] = b;
      }
    }
  };
  /**
   * @return {undefined}
   */
  Game.prototype.oa = function() {
  };
  /**
   * @return {undefined}
   */
  Game.prototype.ba = function() {
  };
  /**
   * @param {Object} value
   * @param {Node} ret
   * @return {undefined}
   */
  Game.prototype.V = function(value, ret) {
    evaluate(this, value);
    var list;
    /** @type {Array} */
    var result = [];
    /** @type {number} */
    var oldconfig = -1;
    /** @type {null} */
    var scope = null;
    var force = ret || document;
    if (this.j || this.A) {
      mixin(this, value, force);
      list = unique(this.F);
      if (0 == list.length) {
        return;
      }
      list = getter(list, function(object) {
        return 0 != keys(object).length;
      });
      if (list[false]) {
        forEach(list[false], function(name) {
          owns(this, name, true);
        }, this);
      }
      list = list[true];
      if (!list) {
        return;
      }
    }
    if (this.j) {
      ret = getter(list, function(labelElement) {
        return labelElement.$;
      });
      buildItems(this, list, ret[value.$] || []);
      if (this.l) {
        scope = last(list, function(dataAndEvents) {
          return null != document.getElementById(dataAndEvents.getSlotElementId());
        });
        each(ret, function(item, domain) {
          if (domain == value.$) {
            result.unshift(item);
          } else {
            result.push(item);
          }
        });
      }
      oldconfig = value.A || !synchronize(list, value) ? 0 : toArray(list, function(ast) {
        return write(value) == write(ast);
      });
    } else {
      if (this.A) {
        scope = last(list, function(dataAndEvents) {
          return null != document.getElementById(dataAndEvents.getSlotElementId());
        });
        result = map(list, function(dataAndEvents) {
          return[dataAndEvents];
        });
      } else {
        if (0 == keys(value).length) {
          owns(this, value, true);
          return;
        }
        /** @type {Array} */
        list = [value];
      }
      /** @type {number} */
      oldconfig = 0;
    }
    if (!this.H) {
      if (!this.O) {
        if (this.l || this.A) {
          forEach(result, function(text) {
            text = prompt(this, text, 1, "callbackProxy");
            link(this, text, oldconfig, force, scope);
            /** @type {number} */
            oldconfig = 0;
          }, this);
        } else {
          ret = sync(this);
          list = prompt(this, list, 1, ret);
          link(this, list, oldconfig, force);
        }
      }
    }
  };
  /**
   * @param {(number|string)} msg
   * @return {?}
   */
  var sync = function(msg) {
    /** @type {string} */
    var m = "callbackProxy";
    if (msg.W) {
      /** @type {number} */
      msg = ++msg.Mb;
      /** @type {string} */
      m = "googletag.impl.pubads." + m + msg;
    }
    return m;
  };
  /**
   * @param {Date} event
   * @param {Object} resolver
   * @return {undefined}
   */
  var evaluate = function(event, resolver) {
    var value = resolver.getDivStartsCollapsed();
    if (null == value) {
      /** @type {boolean} */
      value = "true" === (0,eval)(event.m, "google_divs_start_collapsed");
    }
    if (value) {
      enter(resolver.getSlotElementId(), false);
    }
  };
  /**
   * @param {Object} n
   * @return {undefined}
   */
  Game.prototype.aa = function(n) {
    try {
      change(this, n);
    } catch (b) {
    }
  };
  /**
   * @param {Object} e
   * @param {Object} value
   * @return {undefined}
   */
  var change = function(e, value) {
    var element = document;
    var x = value.l;
    var t = value.getEscapedQemQueryId();
    var form = value.getSlotElementId();
    if (form = element.getElementById(form)) {
      form.setAttribute("data-google-query-id", t);
    }
    assertEquals(e, value, t);
    value.renderStarted();
    if (null == x || x._empty_) {
      owns(e, value, e.M);
      x = slice(value);
      x.slotContentChanged = e.M;
      value.renderEnded(x);
    } else {
      if (e.L) {
        value.renderEnded(slice(value));
      } else {
        t = x._html_;
        if (!push(t)) {
          finish(e, value);
          return;
        }
        enter(value.getSlotElementId(), true);
        animate(e, value);
        var progressValues;
        if ("height" == x._fluid_) {
          /** @type {string} */
          progressValues = "fluid";
        } else {
          /** @type {Array} */
          progressValues = [x._width_, x._height_];
        }
        if (x._use_safe_frame_) {
          setShadow(e, element, value, progressValues, t, function() {
            value.loaded();
          }, {
            sandbox : x._use_sandbox_ || false
          });
        } else {
          prepare(e, element, value, progressValues, t);
        }
        value.renderEnded(extend(value, x));
      }
    }
    /** @type {string} */
    x = getElementById(value) + "__hidden__";
    cleanup(element, x);
    expand(e, value);
  };
  /**
   * @param {Object} key
   * @param {Node} obj
   * @return {undefined}
   */
  var del = function(key, obj) {
    if (key) {
      close(key);
    }
    if (obj) {
      if (obj.parentNode) {
        obj.parentNode.removeChild(obj);
      }
    }
  };
  /**
   * @param {Object} e
   * @param {Object} obj
   * @return {undefined}
   */
  var finish = function(e, obj) {
    var st = document.getElementById(isFinite(obj));
    var o = obj.o;
    if (st) {
      var ol = document.getElementById(getElementById(obj));
      if (e.o) {
        render().unloadAdBlock(ol, !!obj.o);
      }
      if (obj.o) {
        if (e.o) {
          /** @type {string} */
          st.style.display = "none";
          st.id += "__to_be_removed__";
          /** @type {string} */
          ol.id = ol.id + "__to_be_removed__";
          e = ctor.getInstance().get(24);
          window.setTimeout(function() {
            del(o, st);
          }, e);
        } else {
          del(o, st);
        }
      } else {
        st.parentNode.removeChild(st);
      }
    } else {
      if (o) {
        close(o);
      }
    }
    /** @type {null} */
    obj.o = null;
  };
  /**
   * @param {Object} e
   * @param {Object} t
   * @return {undefined}
   */
  var animate = function(e, t) {
    var c = document;
    /** @type {boolean} */
    var p = !!t.o;
    var object = t.l._use_safe_frame_;
    var i = getElementById(t);
    var property = e.v[i];
    /** @type {boolean} */
    object = !t.H && (!object && !property);
    if (p || !e.ua && object) {
      finish(e, t);
      onResize(e, c, t);
    } else {
      c = c.getElementById(i);
      if (e.ua) {
        if (object) {
          p = c.parentNode;
          p.removeChild(c);
          p.appendChild(c);
        }
      }
      if (e.o) {
        render().unloadAdBlock(c, !!t.o);
      }
    }
  };
  /**
   * @param {Object} item
   * @param {Object} element
   * @param {Object} obj
   * @param {Object} values
   * @param {string} options
   * @return {undefined}
   */
  var prepare = function(item, element, obj, values, options) {
    var name = getElementById(obj);
    var value = element.getElementById(name);
    if (null == value) {
      if (item.Y) {
        var _this = element.getElementById(isFinite(obj));
        value = onLoad(element, obj, _this, values);
        delete item.v[name];
      } else {
        return;
      }
    }
    if (push(values)) {
      destroy(item);
    } else {
      /** @type {string} */
      value.width = String(values[0]);
      /** @type {string} */
      value.height = String(values[1]);
      if (item.Y) {
        _this = element.getElementById(isFinite(obj));
        /** @type {string} */
        _this.style.width = "";
        /** @type {string} */
        _this.style.height = "";
      }
    }
    parse(value, options, true);
    /** @type {boolean} */
    obj.H = false;
    removeClass(item, value, write(obj));
  };
  /**
   * @param {Object} item
   * @param {Object} a
   * @param {Object} obj
   * @param {(Function|string)} values
   * @param {string} element
   * @param {Function} until
   * @param {Text} c
   * @return {undefined}
   */
  var setShadow = function(item, a, obj, values, element, until, c) {
    var node = a.getElementById(isFinite(obj));
    if (null != node) {
      var message = $(meta, tab.G);
      if (!message) {
        var child;
        for (;child = node.firstChild;) {
          node.removeChild(child);
        }
      }
      if (!item.F.o) {
        /** @type {string} */
        node.style.display = "inline-block";
      }
      c = inject([c, item.F.H, obj.M]);
      values = replace(node, getElementById(obj), name, element, values, until, c, !!isArraylike(obj), group(obj), message);
      /** @type {(Function|string)} */
      obj.o = values;
      /** @type {boolean} */
      obj.H = false;
      removeClass(item, a.getElementById(getElementById(obj)), write(obj));
    }
  };
  /**
   * @return {?}
   */
  Game.prototype.fa = function() {
    return isNaN(this.X) || this.j ? 0 == unique(this.F).length : unique(this.F).length == append(this.F) - this.X;
  };
  /**
   * @param {Object} data
   * @param {(Array|string)} obj
   * @param {number} name
   * @return {undefined}
   */
  var template = function(data, obj, name) {
    if (null == document.getElementById(obj[name].getSlotElementId())) {
      successCallback(data);
    }
    if (data.j) {
      if (!insert(obj, function(dataAndEvents) {
        return null != document.getElementById(dataAndEvents.getSlotElementId());
      })) {
        focus(data);
      }
    }
  };
  /**
   * @param {Object} result
   * @return {undefined}
   */
  var successCallback = function(result) {
    var suiteView = new test("gpt_target_slot_has_no_div", pop(), ctor.getInstance().get(29));
    valueOf(suiteView, "sra", result.j ? "1" : "0");
    log(suiteView, result.F);
    jQuery(suiteView);
  };
  /**
   * @param {Object} node
   * @return {undefined}
   */
  var focus = function(node) {
    var html = new test("gpt_request_slots_have_no_divs", pop(), ctor.getInstance().get(29));
    log(html, node.F);
    jQuery(html);
  };
  /**
   * @param {?} object
   * @param {?} height
   * @param {?} capture
   * @param {?} error
   * @return {undefined}
   */
  var value = function(object, height, capture, error) {
    R.call(this, object, height, capture, error);
    /** @type {number} */
    this.I = 0;
    /** @type {null} */
    this.v = this.A = null;
    /** @type {Array} */
    this.u = [];
    /** @type {boolean} */
    this.M = Math.random() < ctor[23];
  };
  expect(value, R);
  /**
   * @return {?}
   */
  value.prototype.D = function() {
    return this.j ? "gut_sync_sra" : "gut_sync";
  };
  /**
   * @param {?} sx
   * @return {?}
   */
  value.prototype.J = function(sx) {
    return sx ? "ss" : "s";
  };
  /**
   * @param {Object} obj
   * @param {Object} e
   * @return {undefined}
   */
  var onSuccess = function(obj, e) {
    if (!obj.H) {
      obj.A = e.j;
      var expectationResult = obj.ia(e);
      expectationResult = data(translate(expectationResult, 4096));
      /** @type {number} */
      var file = ++obj.I;
      if (obj.j) {
        collect(obj, e.j, "googletag.impl.pubads.setAdContentsBySlotForSync");
      } else {
        e.j[0].fetchStarted(expectationResult);
      }
      onsuccess();
      match(obj, e.j, expectationResult);
      /** @type {string} */
      var path = "sae-script-" + file;
      document.write('<script type="text/javascript" src="' + expectationResult + '" id="' + path + '">\x3c/script>');
      if (obj.M) {
        obj.N = window.setTimeout(function() {
          if (!document.getElementById(path)) {
            var html = new test("gpt_write_script_failed");
            log(html);
            jQuery(html, 1);
          }
        }, 0);
      }
      add(watch.getInstance(), o.Ha);
    }
  };
  /**
   * @param {Object} data
   * @param {?} o
   * @return {undefined}
   */
  var onEnd = function(data, o) {
    window.clearTimeout(data.N);
    array(data, o, data.A);
    /** @type {null} */
    data.A = null;
    if (data.l) {
      if (!data.v.w) {
        f(data, data.v);
      }
    } else {
      f(data, data.v);
    }
    if (data.l) {
      if (data.u.length) {
        onSuccess(data, data.u.shift());
      }
    }
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  value.prototype.ca = function(sx) {
    if (!this.j) {
      var tag;
      /** @type {null} */
      tag = null;
      var tags = doc.getElementsByTagName("script");
      if (tags) {
        if (tags.length) {
          tag = tags[tags.length - 1];
        }
      }
      if (tag = tag && tag.parentElement) {
        this.F.C[write(sx)] = tag;
      }
    }
  };
  /**
   * @param {Object} sx
   * @return {undefined}
   */
  value.prototype.oa = function(sx) {
    /** @type {string} */
    var e = "google_temp_div_" + write(sx);
    /** @type {string} */
    var STYLESHEET = '<div id="' + isString(e) + '"></div>';
    document.write(STYLESHEET);
    if (e = errorCallback(e)) {
      this.F.m[write(sx)] = e;
    }
  };
  /**
   * @param {Object} a
   * @return {undefined}
   */
  value.prototype.ba = function(a) {
    var f = this.F;
    a = write(a);
    var temp = f.m[a];
    if (temp) {
      if (temp) {
        if (temp.parentNode) {
          temp.parentNode.removeChild(temp);
        }
      }
      delete f.m[a];
    }
  };
  /**
   * @param {Object} value
   * @return {undefined}
   */
  value.prototype.V = function(value) {
    /** @type {boolean} */
    var ret = null == this.v;
    /** @type {Object} */
    this.v = value;
    if (this.j) {
      if (ret) {
        var item = remove(values(this.F), function(object) {
          return 0 != keys(object).length;
        });
        if (!synchronize(item, value)) {
          owns(this, value, false);
        }
        if (item.length) {
          if (ret = getter(item, function(labelElement) {
            return labelElement.$;
          }), buildItems(this, item, ret[value.$] || []), this.l) {
            var key;
            for (key in ret) {
              if (ret.hasOwnProperty(key)) {
                item = prompt(this, ret[key], 1, "googletag.impl.pubads.setAdContentsBySlotForSync");
                if (key == value.$) {
                  this.u.unshift(item);
                } else {
                  this.u.push(item);
                }
              }
            }
            if (this.u.length) {
              onSuccess(this, this.u.shift());
            }
          } else {
            onSuccess(this, prompt(this, item, 1, "googletag.impl.pubads.setAdContentsBySlotForSync"));
          }
        }
      } else {
        f(this, value);
      }
    } else {
      if (0 == keys(value).length) {
        owns(this, value, false);
      } else {
        onSuccess(this, prompt(this, [value], 1, value.hb ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"));
      }
    }
  };
  /**
   * @param {Object} e
   * @param {Object} value
   * @return {undefined}
   */
  var f = function(e, value) {
    var doc = document;
    var s = value.l;
    var callback = value.getEscapedQemQueryId();
    var m = value.getSlotElementId();
    if (m = doc.getElementById(m)) {
      m.setAttribute("data-google-query-id", callback);
    }
    assertEquals(e, value, callback);
    if (null == s || s._empty_) {
      owns(e, value, false);
      value.renderEnded(slice(value));
    } else {
      if (e.L) {
        value.renderEnded(slice(value));
      } else {
        if (s._use_safe_frame_) {
          if (callback = function() {
            value.loaded();
          }, m = s._html_) {
            var c;
            if ("height" == s._fluid_) {
              /** @type {string} */
              c = "fluid";
            } else {
              /** @type {Array} */
              c = [s._width_, s._height_];
            }
            end(e, doc, value, c, m, callback, {
              sandbox : s._use_sandbox_ || false
            });
            value.renderEnded(extend(value, s));
          } else {
            value.renderEnded(slice(value));
          }
        } else {
          if (s._snippet_ && !s._is_afc_) {
            alias(e, value, doc);
          } else {
            if (h()) {
              /** @type {string} */
              doc = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + write(value) + "'," + value.hb + ");";
              /** @type {string} */
              callback = "about:blank";
              if (c = (0,eval)(e.m, "google_domain_reset_url")) {
                if (m = random(c.match(id)[3] || null), null === m || 0 <= m.indexOf(document.domain)) {
                  callback = c;
                }
              }
              if ("height" == s._fluid_) {
                destroy(e);
                return;
              }
              /** @type {Array} */
              c = [s._width_, s._height_];
              send(e, value, callback, doc, c, e.F.o);
            } else {
              s = notify(e, value, doc);
              doc.write("<script>googletag.impl.pubads.createDomIframe(" + toString(s) + " ," + toString(write(value)) + "," + e.F.o + "," + value.hb + ");\x3c/script>");
            }
          }
        }
      }
    }
    expand(e, value);
    value.renderStarted();
  };
  /**
   * @param {Object} item
   * @param {Object} result
   * @param {Object} obj
   * @param {(Function|string)} node
   * @param {string} event
   * @param {Function} chunk
   * @param {Text} tag
   * @return {undefined}
   */
  var end = function(item, result, obj, node, event, chunk, tag) {
    hide(obj, result);
    /** @type {string} */
    var i = getElementById(obj) + "__container__";
    /** @type {string} */
    var radixToPower = '<div id="' + isString(i) + '"></div>';
    result.write(radixToPower);
    i = result.getElementById(i);
    if (null != i) {
      if (item.F.o) {
        /** @type {string} */
        i.style.margin = "auto";
      } else {
        /** @type {string} */
        i.style.display = "inline-block";
      }
      tag = inject([tag, item.F.H, obj.M]);
      node = replace(i, getElementById(obj), name, event, node, chunk, tag, isArraylike(obj) || false, group(obj));
      /** @type {(Function|string)} */
      obj.o = node;
      removeClass(item, result.getElementById(getElementById(obj)), write(obj));
    }
  };
  /**
   * @param {Object} element
   * @param {Object} data
   * @return {undefined}
   */
  var restore = function(element, data) {
    var l = data.l;
    var parent = element.parentNode;
    var fileName = l && l._html_;
    if (fileName) {
      if (!l._expandable_ || l._is_afc_ && l._is_3pas_) {
        on(element, "load", function() {
          if (data.w) {
            data.loaded();
          }
        });
        parse(element, fileName, true);
      } else {
        parent.innerHTML = fileName;
      }
      data.renderEnded(extend(data, l));
    } else {
      parent.removeChild(element);
      data.renderEnded(slice(data));
    }
  };
  /**
   * @param {Object} item
   * @param {(Array|string)} s
   * @param {Object} path
   * @param {?} data
   * @return {?}
   */
  var decode = function(item, s, path, data) {
    s = s.getSlotElementId() + "_ad_container";
    /** @type {string} */
    var i = '<div id="' + isString(s) + '"';
    if (data && "height" == data._fluid_) {
      i += ' style="width:100%;">';
    } else {
      if (item.F.o && data) {
        i += ' style="width:' + data._width_;
        i += 'px;margin:auto;">';
      } else {
        i += ">";
      }
    }
    if (data) {
      i += data._html_;
    }
    path.write(i + "\n</div>\n");
    return s;
  };
  /**
   * @param {Object} elem
   * @param {Object} element
   * @return {undefined}
   */
  var hide = function(elem, element) {
    if (elem = element.getElementById(elem.getSlotElementId())) {
      if (elem.parentNode) {
        if ("" === elem.innerHTML) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  };
  /**
   * @param {Object} object
   * @param {Object} target
   * @param {Object} from
   * @return {undefined}
   */
  var alias = function(object, target, from) {
    hide(target, from);
    var l = target.l;
    if (null != l) {
      var to = decode(object, target, from, l);
      target.renderEnded(extend(target, l));
      if (from = from.getElementById(to)) {
        removeClass(object, from, write(target));
      }
    }
  };
  /**
   * @param {Function} item
   * @param {Object} body
   * @param {Text} value
   * @param {Object} text
   * @param {Array} x
   * @param {Text} out
   * @return {undefined}
   */
  var send = function(item, body, value, text, x, out) {
    hide(body, document);
    var el = getElementById(body);
    /** @type {Array} */
    var html = [];
    /** @type {number} */
    var ival = 0;
    /** @type {number} */
    var xi = 0;
    if (isFunction(x)) {
      ival = x[0];
      xi = x[1];
    } else {
      destroy(item);
    }
    value = data(value);
    html.push('<iframe id="', isString(el), '" title="', name, '" name="', isString(el), '" width="', ival, '" height="', xi, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", item.capture ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', value, '"');
    if (null != text) {
      html.push(' onload="', text, '"');
    }
    html.push("></iframe>");
    /** @type {Array} */
    text = [];
    value = body.getSlotElementId() + "_ad_container";
    text.push('<div id="', isString(value), '"');
    if (out) {
      text.push(' style="text-align:center" ');
    }
    text.push(">");
    text.push('<ins style="position:relative;width:' + ival + "px;height:" + xi + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + ival + "px;height:" + xi + 'px;border:none;display:block;">' + html.join("") + "</ins>") + "</ins>");
    text.push("</div>");
    document.write(text.join(""));
    if (out = document.getElementById(el)) {
      removeClass(item, out, write(body));
    }
  };
  /**
   * @param {Object} msg
   * @param {Object} body
   * @param {(Document|string)} a
   * @return {?}
   */
  var notify = function(msg, body, a) {
    hide(body, a || document);
    return decode(msg, body, a || document);
  };
  /**
   * @param {Object} p
   * @param {string} node
   * @param {string} e
   * @param {number} x
   * @param {number} value
   * @param {string} type
   * @param {string} val
   * @return {?}
   */
  var position = function(p, node, e, x, value, type, val) {
    p = p.createElement(node);
    /** @type {string} */
    p.style.width = x + "px";
    if (value) {
      /** @type {string} */
      p.style.height = value + "px";
    }
    /** @type {string} */
    p.style.display = type;
    /** @type {string} */
    p.style.position = "relative";
    if (val) {
      /** @type {string} */
      p.style.margin = val;
    }
    /** @type {number} */
    p.style.border = 0;
    if (e) {
      p.appendChild(e);
    }
    return p;
  };
  /**
   * @param {Object} d
   * @param {Element} t
   * @param {number} c
   * @param {(number|string)} el
   * @param {Text} data
   * @param {?} callback
   * @return {undefined}
   */
  var showTooltip = function(d, t, c, el, data, callback) {
    data = position(d, "ins", data, c, el, "block");
    el = position(d, "ins", data, c, el, "inline-table");
    /** @type {string} */
    el.style.verticalAlign = "bottom";
    t = d.getElementById(t);
    if (callback) {
      d = position(d, "div", el, c, null, "block", "auto");
      t.appendChild(d);
    } else {
      t.appendChild(el);
    }
  };
  /**
   * @param {string} obj
   * @param {Object} t
   * @param {?} object
   * @return {undefined}
   */
  var createFrame = function(obj, t, object) {
    var d = document;
    var start = t.l;
    var width = start._width_;
    var failuresLink = start._height_;
    var r = start._html_;
    var iframe = d.createElement("iframe");
    var path = getElementById(t);
    iframe.id = path;
    iframe.title = name;
    iframe.name = path;
    iframe.width = width;
    iframe.height = failuresLink;
    /** @type {number} */
    iframe.vspace = 0;
    /** @type {number} */
    iframe.hspace = 0;
    /** @type {string} */
    iframe.allowTransparency = "true";
    /** @type {string} */
    iframe.scrolling = "no";
    /** @type {number} */
    iframe.marginWidth = 0;
    /** @type {number} */
    iframe.marginHeight = 0;
    /** @type {number} */
    iframe.frameBorder = 0;
    /** @type {number} */
    iframe.style.border = 0;
    /** @type {string} */
    iframe.style.position = "absolute";
    /** @type {string} */
    iframe.style.top = "0";
    /** @type {string} */
    iframe.style.left = "0";
    on(iframe, "load", function() {
      if (t.w) {
        t.loaded();
      }
    });
    showTooltip(d, obj, width, failuresLink, iframe, object);
    iframe.contentWindow.document.write(r);
    iframe.contentWindow.document.write("<script>document.close();\x3c/script>");
    t.renderEnded(extend(t, start));
  };
  /**
   * @return {undefined}
   */
  var Deferred = function() {
    /** @type {null} */
    this.m = this.j = this.l = null;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var pub = function(data) {
    if (null == data.l) {
      data.l = new move($cookies);
    }
    return data.l;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var addEvent = function(data) {
    if (null != data.j) {
      return data.j;
    }
    var d = (0,eval)(decodeURIComponent(data), "google_ad_impl");
    var handler = split();
    switch(d) {
      case "gut_sync_sra":
        getRowLineTable(handler, true);
        data.j = new value(true, pub(data), decodeURIComponent(data), it(void 0));
        key(handler, "sync");
        break;
      case "gut_friendly_iframe":
        getRowLineTable(handler, false);
        data.j = new Game(false, pub(data), decodeURIComponent(data), it(void 0));
        key(handler, "fif");
        break;
      case "gut_friendly_iframe_sra":
        getRowLineTable(handler, true);
        data.j = new Game(true, pub(data), decodeURIComponent(data), it(void 0));
        key(handler, "fif");
        break;
      default:
        getRowLineTable(handler, false);
        data.j = new value(false, pub(data), decodeURIComponent(data), it(void 0));
        key(handler, "sync");
    }
    d = data.j;
    d.H = null != (0,eval)(d.m, "google_nofetch") || (!!window.google_noFetch || d.H);
    d.O = null != (0,eval)(d.m, "google_disable_initial_load") || (!!window.google_DisableInitialLoad || d.O);
    d.L = null != (0,eval)(d.m, "google_norender") || d.L;
    handler = bind(d.Pb, d);
    var win = window;
    if (win.attachEvent) {
      win.attachEvent("onload", handler);
    } else {
      if (win.addEventListener) {
        win.addEventListener("load", handler, false);
      }
    }
    handler = bind(d.Rb, d);
    win = window;
    if (win.attachEvent) {
      win.attachEvent("onunload", handler);
    } else {
      if (win.addEventListener) {
        win.addEventListener("unload", handler, false);
      }
    }
    if (!$(actual, content.G)) {
      d.o = render().setupOse(d.w);
    }
    add(watch.getInstance(), o.Qa);
    return data.j;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var decodeURIComponent = function(value) {
    if (null == value.m) {
      value.m = new compile;
    }
    return value.m;
  };
  /** @type {null} */
  var def = null;
  /**
   * @return {?}
   */
  var getItem = function() {
    if (!def) {
      def = new Deferred;
    }
    return def;
  };
  /** @type {null} */
  var deferred = null;
  /**
   * @return {?}
   */
  var _transition = function() {
    if (!deferred) {
      deferred = new Deferred;
    }
    return deferred;
  };
  /**
   * @return {undefined}
   */
  var Paddle = function() {
  };
  self = Paddle.prototype;
  /**
   * @param {string} values
   * @return {?}
   */
  self.addSlot = function(values) {
    if (!values) {
      return null;
    }
    var msgs = values.getAdUnitPath();
    return msgs && msgs.length ? _format(pub(getItem()), values) : null;
  };
  /**
   * @param {Object} position
   * @return {undefined}
   */
  self.fillSlot = function(position) {
    var info = getItem();
    var options = addEvent(info);
    info = pub(info);
    if (position) {
      if (info.j[write(position)]) {
        if (null == position.l || options.j) {
          options.ca(position);
          options.oa(position);
          options.V(position);
          options.ba(position);
        }
      }
    }
  };
  /**
   * @param {Node} key
   * @return {undefined}
   */
  self.setCookieOptions = function(key) {
    getItem();
    var data = it(key);
    /** @type {Node} */
    data.j = key;
    setCookie(data);
  };
  /**
   * @param {number} opt_attributes
   * @return {undefined}
   */
  self.setTagForChildDirectedTreatment = function(opt_attributes) {
    /** @type {number} */
    pub(getItem()).J = opt_attributes;
  };
  /**
   * @param {Function} deepDataAndEvents
   * @return {undefined}
   */
  self.setKidsFriendlyAds = function(deepDataAndEvents) {
    /** @type {Function} */
    pub(getItem()).L = deepDataAndEvents;
  };
  /**
   * @param {Object} isXML
   * @return {undefined}
   */
  self.passback = function(isXML) {
    if (isXML) {
      var memory = isXML.getAdUnitPath();
      if (memory) {
        if (memory.length) {
          memory = _transition();
          _format(pub(memory), isXML);
          addEvent(memory).V(isXML);
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.disableInitialLoad = function() {
    /** @type {boolean} */
    window.google_DisableInitialLoad = true;
  };
  /**
   * @param {?} name
   * @param {(Function|string)} obj
   * @return {undefined}
   */
  self.addAttribute = function(name, obj) {
    var index = pub(getItem());
    if (!assertFalse(escape(name))) {
      if (assertFalse(escape(obj))) {
        /** @type {string} */
        obj = "";
      }
      var key = index.l[name];
      index.l[name] = key ? key + "," + obj : obj;
    }
  };
  /**
   * @param {Object} message
   * @return {undefined}
   */
  self.clearAttribute = function(message) {
    var color = pub(getItem());
    if (void 0 != message) {
      if (!assertFalse(escape(message))) {
        if (color.l[message]) {
          delete color.l[message];
        }
      }
    } else {
      color.l = {};
    }
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  self.addPageCategoryExclusion = function(message) {
    var dC = pub(getItem());
    if (!assertFalse(escape(message))) {
      validate(dC.B, message);
    }
  };
  /**
   * @return {undefined}
   */
  self.clearPageCategoryExclusions = function() {
    /** @type {Array} */
    pub(getItem()).B = [];
  };
  /**
   * @param {string} subKey
   * @param {string} prefix
   * @return {undefined}
   */
  self.addAdSensePageAttribute = function(subKey, prefix) {
    var b = pub(getItem());
    _createItem(b.u, subKey, prefix);
  };
  /**
   * @param {Object} color
   * @param {string} subKey
   * @param {(Array|string)} prefix
   * @return {undefined}
   */
  self.addAdSenseSlotAttribute = function(color, subKey, prefix) {
    var options = pub(getItem());
    if (color) {
      if (options.j[write(color)]) {
        color = write(color);
        if (null == options.v[color]) {
          options.v[color] = new Event(options.N);
        }
        _createItem(options.v[color], subKey, prefix);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.enableSingleRequest = function() {
    var msg = decodeURIComponent(getItem());
    if (null == (0,eval)(msg, "google_ad_impl")) {
      /** @type {string} */
      msg.j.google_ad_impl = "gut_sync_sra";
    }
  };
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  self.collapseEmptyDivs = function(dataAndEvents) {
    var v = decodeURIComponent(getItem());
    /** @type {string} */
    v.j.google_collapse_empty_div = "true";
    if (dataAndEvents) {
      /** @type {string} */
      v.j.google_divs_start_collapsed = "true";
    }
  };
  /**
   * @return {undefined}
   */
  self.enableAsyncRendering = function() {
    var msg = decodeURIComponent(getItem());
    if (null == (0,eval)(msg, "google_ad_impl")) {
      /** @type {string} */
      msg.j.google_ad_impl = "gut_friendly_iframe";
    }
  };
  /**
   * @return {undefined}
   */
  self.enableAsyncSingleRequest = function() {
    var msg = decodeURIComponent(getItem());
    if (null == (0,eval)(msg, "google_ad_impl")) {
      /** @type {string} */
      msg.j.google_ad_impl = "gut_friendly_iframe_sra";
    }
  };
  /**
   * @param {?} p
   * @param {?} after
   * @return {undefined}
   */
  self.setVideoContentInformation = function(p, after) {
    var item = addEvent(getItem());
    /** @type {boolean} */
    item.da = true;
    item.R = p;
    item.P = after;
    /** @type {number} */
    item.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random());
  };
  /**
   * @return {?}
   */
  self.getVideoContentInformation = function() {
    var item = addEvent(getItem());
    return{
      cmsid : item.P,
      vid : item.R
    };
  };
  /**
   * @return {?}
   */
  self.getVideoStreamCorrelator = function() {
    return addEvent(getItem()).videoStreamCorrelator;
  };
  /**
   * @param {string} data
   * @param {?} e
   * @return {undefined}
   */
  self.refresh = function(data, e) {
    var memory = getItem();
    var db = addEvent(memory);
    memory = pub(memory);
    data = null != data ? showError(data) : values(memory);
    if (!(0 == data.length)) {
      db.ga(data, e);
    }
  };
  /**
   * @param {Array} data
   * @return {undefined}
   */
  self.destroySlots = function(data) {
    var exports = pub(getItem());
    this.clearSlotContents(data);
    /** @type {number} */
    var i = 0;
    for (;i < data.length;++i) {
      if (exports.j[write(data[i])]) {
        data[i].getAdUnitPath();
        var self = exports.j;
        var callbackSymbol = write(data[i]);
        if (callbackSymbol in self) {
          delete self[callbackSymbol];
        }
      }
    }
  };
  /**
   * @return {?}
   */
  self.getCorrelator = function() {
    return addEvent(getItem()).w + "";
  };
  /**
   * @param {number} isXML
   * @return {undefined}
   */
  self.setCorrelator = function(isXML) {
    generate(addEvent(getItem()), isXML);
  };
  /**
   * @return {undefined}
   */
  self.setMobilePlatform = function() {
    /** @type {string} */
    decodeURIComponent(getItem()).j.target_platform = "MOBILE";
  };
  /**
   * @param {string} deepDataAndEvents
   * @return {undefined}
   */
  self.setApiExperiment = function(deepDataAndEvents) {
    unset(deepDataAndEvents);
  };
  /**
   * @return {?}
   */
  self.isAdRequestFinished = function() {
    return addEvent(getItem()).fa();
  };
  /**
   * @param {string} o
   * @return {?}
   */
  self.isSlotAPersistentRoadblock = function(o) {
    return o ? !flush(pub(getItem()), o) : false;
  };
  /**
   * @return {undefined}
   */
  self.clearNoRefreshState = function() {
    pub(getItem()).I = {};
  };
  /**
   * @param {Object} r
   * @return {?}
   */
  self.clearSlotContents = function(r) {
    var memory = getItem();
    var target = addEvent(memory);
    memory = pub(memory);
    r = r ? showError(r) : values(memory);
    return target.T(r);
  };
  /**
   * @param {?} new_location
   * @return {undefined}
   */
  var setLocation = function(new_location) {
    pub(getItem()).D = new_location;
  };
  /**
   * @param {boolean} entry
   * @return {undefined}
   */
  var shouldShow = function(entry) {
    /** @type {boolean} */
    pub(getItem()).H = entry;
  };
  /**
   * @param {?} new_location
   * @return {undefined}
   */
  Paddle.prototype.setLocation = function(new_location) {
    pub(getItem()).A = new_location;
  };
  /**
   * @param {?} Modernizr
   * @return {undefined}
   */
  Paddle.prototype.setPublisherProvidedId = function(Modernizr) {
    pub(getItem()).M = Modernizr;
  };
  /**
   * @return {?}
   */
  Paddle.prototype.getVersion = function() {
    return "107";
  };
  /**
   * @param {?} o
   * @return {undefined}
   */
  Paddle.prototype.setCenterAds = function(o) {
    pub(getItem()).o = o;
  };
  /**
   * @param {?} name
   * @return {?}
   */
  var showError = function(name) {
    var j = pub(getItem());
    return remove(name, function(ast) {
      return!!j.j[write(ast)];
    });
  };
  /** @type {null} */
  var hasMembers = null;
  /**
   * @param {string} key
   * @param {?} val
   * @return {undefined}
   */
  var copyProp = function(key, val) {
    var self;
    self = global.googletag || (global.googletag = {});
    self = self.impl || (self.impl = {});
    self = self.pubads || (self.pubads = {});
    if (!self[key]) {
      self[key] = val;
    }
  };
  copyProp("createDomIframe", m(96, function(walkers, k, variables, item) {
    var id;
    id = item ? _transition() : getItem();
    item = addEvent(id);
    if (id = pub(id).j[k]) {
      createFrame(walkers, id, variables);
      if (walkers = document.getElementById(getElementById(id))) {
        removeClass(item, walkers, k);
      }
    }
  }));
  copyProp("setAdContentsBySlotForSync", m(98, function(e) {
    onEnd(addEvent(getItem()), e);
  }));
  copyProp("setPassbackAdContents", m(99, function(e) {
    onEnd(addEvent(_transition()), e);
  }));
  copyProp("setAdContentsBySlotForAsync", m(100, function(listb, ll) {
    clear(addEvent(getItem()), listb, ll);
  }));
  copyProp("syncAdSlotLoaded", m(102, function(classesToRemove, count, result) {
    result = addEvent(result ? _transition() : getItem());
    if (count) {
      if (count = result.F.j[count]) {
        if (!count.O) {
          /** @type {boolean} */
          count.O = true;
          restore(classesToRemove, count);
        }
      }
    }
  }));
  copyProp("setCookieInfo", m(103, function(isXML) {
    var pdataCur;
    getItem();
    pdataCur = it(void 0);
    _cookie(pdataCur, isXML);
  }));
  var visited = {
    adsense_ad_format : "google_ad_format",
    adsense_ad_types : "google_ad_type",
    adsense_allow_expandable_ads : "google_allow_expandable_ads",
    adsense_background_color : "google_color_bg",
    adsense_bid : "google_bid",
    adsense_border_color : "google_color_border",
    adsense_channel_ids : "google_ad_channel",
    adsense_content_section : "google_ad_section",
    adsense_cpm : "google_cpm",
    adsense_ed : "google_ed",
    adsense_encoding : "google_encoding",
    adsense_family_safe : "google_safe",
    adsense_feedback : "google_feedback",
    adsense_flash_version : "google_flash_version",
    adsense_font_face : "google_font_face",
    adsense_font_size : "google_font_size",
    adsense_hints : "google_hints",
    adsense_host : "google_ad_host",
    adsense_host_channel : "google_ad_host_channel",
    adsense_host_tier_id : "google_ad_host_tier_id",
    adsense_keyword_type : "google_kw_type",
    adsense_keywords : "google_kw",
    adsense_line_color : "google_line_color",
    adsense_link_color : "google_color_link",
    adsense_relevant_content : "google_contents",
    adsense_reuse_colors : "google_reuse_colors",
    adsense_targeting : "google_targeting",
    adsense_targeting_types : "google_targeting",
    adsense_test_mode : "google_adtest",
    adsense_text_color : "google_color_text",
    adsense_ui_features : "google_ui_features",
    adsense_ui_version : "google_ui_version",
    adsense_url_color : "google_color_url",
    alternate_ad_iframe_color : "google_alternate_color",
    alternate_ad_url : "google_alternate_ad_url",
    demographic_age : "google_cust_age",
    demographic_ch : "google_cust_ch",
    demographic_gender : "google_cust_gender",
    demographic_interests : "google_cust_interests",
    demographic_job : "google_cust_job",
    demographic_l : "google_cust_l",
    demographic_lh : "google_cust_lh",
    demographic_u_url : "google_cust_u_url",
    demographic_unique_id : "google_cust_id",
    document_language : "google_language",
    geography_override_city : "google_city",
    geography_override_country : "google_country",
    geography_override_region : "google_region",
    page_url : "google_page_url"
  };
  var T = ctor.getInstance().get(36);
  /**
   * @param {number} o
   * @param {string} tileHeight
   * @param {?} l
   * @return {undefined}
   */
  var Type = function(o, tileHeight, l) {
    /** @type {number} */
    var j = tmp++;
    this.j = new setFillAndStroke(o, j, tileHeight);
    /** @type {boolean} */
    this.j.hb = true;
    this.j.addService(l);
    this.l = l;
  };
  /** @type {number} */
  var tmp = 1;
  self = Type.prototype;
  /**
   * @param {string} atts
   * @return {?}
   */
  self.setClickUrl = function(atts) {
    try {
      return this.j.setClickUrl(atts), this;
    } catch (v1CompNum) {
      html(79, v1CompNum);
    }
  };
  /**
   * @param {?} line
   * @param {?} arg
   * @return {?}
   */
  self.setTargeting = function(line, arg) {
    try {
      return this.j.setTargeting(line, arg), this;
    } catch (v1CompNum) {
      html(81, v1CompNum);
    }
  };
  /**
   * @param {?} number
   * @return {?}
   */
  self.updateTargetingFromMap = function(number) {
    try {
      var suiteView = this.j.getTargetingMap();
      if (!number || (push(number) || "number" == typeof number)) {
        return scale().error(call("PassbackSlot.updateTargetingFromMap", [number])), this;
      }
      try {
        return each(number, function(arg, line) {
          this.setTargeting(line, arg);
        }, this), this;
      } catch (c) {
        return this.j.v = forceArray(suiteView), scale().error(call("PassbackSlot.updateTargetingFromMap", [number])), this;
      }
    } catch (v1CompNum) {
      html(85, v1CompNum);
    }
  };
  /**
   * @param {number} a
   * @return {?}
   */
  self.setAudExtId = function(a) {
    try {
      return bindCallbacks(a) && (this.j.Y = a), this;
    } catch (v1CompNum) {
      html(82, v1CompNum);
    }
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.setTagForChildDirectedTreatment = function(opt_attributes) {
    try {
      if (0 === opt_attributes || 1 === opt_attributes) {
        /** @type {number} */
        this.j.W = opt_attributes;
      }
      return this;
    } catch (v1CompNum) {
      html(80, v1CompNum);
    }
  };
  /**
   * @return {undefined}
   */
  self.display = function() {
    try {
      fail(this.l, this.j);
    } catch (v1CompNum) {
      html(78, v1CompNum);
    }
  };
  /**
   * @param {Function} opt_attributes
   * @return {?}
   */
  self.setForceSafeFrame = function(opt_attributes) {
    this.j.setForceSafeFrame(opt_attributes);
    return this;
  };
  /**
   * @param {string} state
   * @param {number} value
   * @return {?}
   */
  self.set = function(state, value) {
    try {
      if (!push(state) || (!value || "page_url" != state)) {
        return this;
      }
      var data = this.j;
      if (data.hb) {
        /** @type {string} */
        data.oa = "" + value;
      }
    } catch (v1CompNum) {
      html(83, v1CompNum);
    }
    return this;
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.get = function(opt_attributes) {
    try {
      return push(opt_attributes) && "page_url" == opt_attributes ? this.j.getPassbackPageUrl() : null;
    } catch (v1CompNum) {
      html(84, v1CompNum);
    }
  };
  /**
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  self.wa = function(deepDataAndEvents) {
    this.j.wa(deepDataAndEvents);
  };
  /**
   * @param {?} content
   * @param {(Document|string)} opt_model
   * @return {undefined}
   */
  var Option = function(content, opt_model) {
    this.j = content;
    this.l = opt_model || {
      changeCorrelator : true
    };
  };
  /**
   * @return {undefined}
   */
  var run = function() {
    transform.call(this);
    /** @type {boolean} */
    this.A = false;
    /** @type {null} */
    this.j = null;
    /** @type {number} */
    this.V = 0;
    /** @type {number} */
    this.M = -1;
    /** @type {number} */
    this.Y = 0;
    this.L = {};
    this.v = {};
    /** @type {Array} */
    this.P = [];
    /** @type {string} */
    this.Z = this.O = "";
    /** @type {boolean} */
    this.u = this.W = this.aa = this.da = false;
    /** @type {boolean} */
    this.m = T ? false : true;
    this.T = T;
    /** @type {boolean} */
    this.R = this.H = false;
    /** @type {Array} */
    this.o = [];
    /** @type {Array} */
    this.I = [];
    /** @type {Array} */
    this.C = [];
    this.ga = {};
    /** @type {boolean} */
    this.U = false;
    /** @type {number} */
    this.D = -1;
    /** @type {string} */
    this.ha = this.oa = "";
    /** @type {Array} */
    this.w = [];
    /** @type {boolean} */
    this.N = this.X = false;
    this.ba = {};
    if (null !== search(window.location.href, "google_force_sra")) {
      this.w.push("108809056");
    }
    var message = ctor.getInstance().get(53);
    if (message) {
      this.forceExperiment(message);
    }
    message = floor(["108809055", "108809056", "108809057"], 3 * ctor.getInstance().get(47));
    if (!assertFalse(escape(message))) {
      this.forceExperiment(message);
    }
    if (message = ctor.getInstance().get(75)) {
      this.forceExperiment(message);
    }
    if (synchronize(this.w, "108809056")) {
      /** @type {boolean} */
      this.u = true;
    }
  };
  expect(run, transform);
  self = run.prototype;
  /**
   * @param {?} state
   * @param {number} value
   * @return {?}
   */
  self.set = function(state, value) {
    if (!(push(state) && 0 < state.length)) {
      return this.log.$a(call("PubAdsService.set", [state, value]), this, null), this;
    }
    /** @type {number} */
    this.L[state] = value;
    this.log.info(condition(state, String(value), this.getName()), this, null);
    return this;
  };
  self.set = m(21, run.prototype.set);
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.get = function(opt_attributes) {
    return this.L[opt_attributes];
  };
  self.get = m(22, run.prototype.get);
  /**
   * @return {?}
   */
  self.getAttributeKeys = function() {
    /** @type {Array} */
    var keys = [];
    each(this.L, function(dataAndEvents, key) {
      keys.push(key);
    });
    return keys;
  };
  self.getAttributeKeys = m(23, run.prototype.getAttributeKeys);
  /**
   * @param {?} c
   * @param {Object} data
   * @param {?} a
   * @param {string} options
   * @return {undefined}
   */
  self.display = function(c, data, a, options) {
    this.enable();
    c = a ? exec(c, data, a) : exec(c, data);
    c.addService(this);
    if (options) {
      c.setClickUrl(options);
    }
    show(c.getSlotId().getDomId());
  };
  self.display = m(24, run.prototype.display);
  /**
   * @return {undefined}
   */
  self.va = function() {
    if (!this.A) {
      charSet();
      if (0 < this.o.length) {
        this.J();
      } else {
        defer(this.Ba, this);
      }
    }
    /** @type {boolean} */
    this.A = true;
  };
  /**
   * @return {undefined}
   */
  self.Ba = function() {
    if (!this.A) {
      charSet();
    }
    /** @type {boolean} */
    this.A = true;
    if (!this.j) {
      this.J();
    }
  };
  /**
   * @return {?}
   */
  self.getName = function() {
    return "publisher_ads";
  };
  /**
   * @param {Object} self
   * @param {?} index
   * @return {undefined}
   */
  var print = function(self, index) {
    self.log.info(is_identifier_char());
    self.j.fillSlot(index);
    /** @type {boolean} */
    self.ga[index.getAdUnitPath()] = true;
    if (self.j) {
      /** @type {number} */
      index = 0;
      for (;index < self.C.length;index++) {
        var position = self.C[index];
        if (position.j[0].getAdUnitPath() in self.ga) {
          self.refresh(position.j, position.l);
          Array.prototype.splice.call(self.C, index, 1);
          index--;
        }
      }
    } else {
      self.log.error(scrollTop(), self);
    }
  };
  /**
   * @return {undefined}
   */
  run.prototype.J = function() {
    if (!this.j) {
      var s = split();
      str2binb(s);
      var result = ctor.getInstance().get(76);
      handleSuccess(s, result, "impl");
      /** @type {boolean} */
      window.google_noFetch = false;
      /** @type {boolean} */
      window.google_DisableInitialLoad = false;
      this.j = hasMembers || (hasMembers = new Paddle);
      this.log.info(isF("GPT"), this);
      this.j.setCookieOptions(this.V);
      this.j.setTagForChildDirectedTreatment(this.M);
      this.j.setKidsFriendlyAds(this.Y);
      forEach(this.w, function(deepDataAndEvents) {
        this.j.setApiExperiment(deepDataAndEvents);
      }, this);
      this.j.setCenterAds(this.T);
      if (T) {
        /** @type {boolean} */
        this.u = false;
        this.j.setMobilePlatform();
      }
      if (this.H) {
        this.j.collapseEmptyDivs(this.R);
      }
      if (this.m) {
        if (this.u) {
          get(suiteView, ctor.getInstance().get(83), []);
          if ($(suiteView, F.G)) {
            /** @type {boolean} */
            this.u = false;
          }
        }
      }
      if (!this.aa) {
        if (this.j) {
          /** @type {boolean} */
          this.aa = true;
          if (this.u) {
            if (this.m) {
              this.j.enableAsyncSingleRequest();
            } else {
              this.j.enableSingleRequest();
            }
            done(this);
            if (!$(v, env.G)) {
              isWin(this);
            }
          } else {
            if (this.m) {
              this.j.enableAsyncRendering();
              if ($(suiteView, F.G)) {
                done(this);
                isWin(this);
              }
            }
          }
          if ($(v, env.G)) {
            isWin(this);
          }
          if (this.W) {
            this.j.disableInitialLoad();
          }
          getEnumerableProperties(this);
          pushStack(this);
        }
      }
      if (0 < this.o.length) {
        /** @type {number} */
        s = 0;
        for (;s < this.o.length;++s) {
          this.ja(this.o[s]);
        }
      }
      if (0 < this.I.length) {
        /** @type {number} */
        s = 0;
        for (;s < this.I.length;++s) {
          fail(this, this.I[s]);
        }
      }
      if (this.X) {
        /** @type {boolean} */
        pub(getItem()).w = true;
      }
      setLocation(this.N);
      shouldShow(this.ba);
      reply("pubadsReady", true);
    }
  };
  run.prototype.J = m(107, run.prototype.J, function(opt_attributes, done) {
    after(opt_attributes, done);
  });
  /**
   * @param {string} node
   * @return {undefined}
   */
  run.prototype.Ea = function(node) {
    if (!this.m) {
      /** @type {boolean} */
      node.U = false;
    }
    if (!node.hb) {
      checkFile(this, node);
    }
    transform.prototype.Ea.call(this, node);
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  run.prototype.ja = function(name) {
    if (argsToArray().m && !this.m) {
      this.log.error(parseBody(), this);
    } else {
      if (this.A && this.Ba(), this.j) {
        done(this);
        if ($(v, env.G)) {
          formatDate(this, name);
          print(this, name);
        } else {
          if (checkFile(this, name)) {
            print(this, name);
          }
        }
      } else {
        if (this.m || this.A && 0 == this.o.length) {
          /** @type {boolean} */
          var b = false;
          /** @type {number} */
          var i = 0;
          for (;i < this.o.length;++i) {
            if (name === this.o[i]) {
              /** @type {boolean} */
              b = true;
            }
          }
          if (!b) {
            this.log.info(str(name.getAdUnitPath(), "GPT"), this, name);
            this.o.push(name);
          }
        } else {
          this.log.error(formatMessage(name.getAdUnitPath()), this, name);
        }
      }
    }
  };
  /**
   * @param {Object} error
   * @param {string} name
   * @return {?}
   */
  var checkFile = function(error, name) {
    if (error.j && null == error.j.addSlot(name)) {
      return error.log.error(checkProd(name.getAdUnitPath()), error, name), false;
    }
    formatDate(error, name);
    return true;
  };
  /**
   * @param {Object} dataAndEvents
   * @return {undefined}
   */
  var isWin = function(dataAndEvents) {
    var codeSegments = dataAndEvents.getSlots();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      checkFile(dataAndEvents, codeSegments[i]);
    }
  };
  /**
   * @param {Object} item
   * @return {undefined}
   */
  var done = function(item) {
    if (!item.da && item.j) {
      /** @type {boolean} */
      item.da = true;
      var data = item.getAttributeKeys();
      /** @type {number} */
      var j = 0;
      for (;j < data.length;++j) {
        if (data[j] in visited) {
          item.j.addAdSensePageAttribute(visited[data[j]], String(item.get(data[j])));
        } else {
          item.log.$a(closurefromCode(String(data[j]), String(item.get(data[j]))), item);
        }
      }
      item.j.addAdSensePageAttribute("google_tag_info", "v2");
      each(item.v, function(haystack, name) {
        if (isFunction(haystack)) {
          /** @type {number} */
          var i = 0;
          for (;i < haystack.length;++i) {
            this.j.addAttribute(name, haystack[i]);
          }
        }
      }, item);
      forEach(item.P, function(endpoint) {
        this.j.addPageCategoryExclusion(endpoint);
      }, item);
      item.j.setPublisherProvidedId(item.Z);
      if (item.O) {
        item.j.setLocation(item.O);
      }
    }
  };
  /**
   * @param {Object} options
   * @param {Object} o
   * @return {undefined}
   */
  var formatDate = function(options, o) {
    if (options.j) {
      var tmp = o.getAttributeKeys();
      /** @type {number} */
      var j = 0;
      for (;j < tmp.length;++j) {
        if (tmp[j] in visited) {
          options.j.addAdSenseSlotAttribute(o, visited[tmp[j]], String(o.get(tmp[j])));
        } else {
          options.log.$a(dateFilter(String(tmp[j]), String(o.get(tmp[j])), o.getAdUnitPath()), options, o);
        }
      }
    }
  };
  self = run.prototype;
  /**
   * @param {string} a
   * @return {?}
   */
  self.setCookieOptions = function(a) {
    if (!isClassOf(a) || !bindCallbacks(a)) {
      return this.log.$a(compare(String(a)), this), this;
    }
    /** @type {string} */
    this.V = a;
    if (this.j) {
      this.j.setCookieOptions(a);
    }
    return this;
  };
  self.setCookieOptions = m(17, run.prototype.setCookieOptions);
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.setTagForChildDirectedTreatment = function(opt_attributes) {
    if (0 !== opt_attributes && 1 !== opt_attributes) {
      return this.log.$a(stripBOM(String(opt_attributes)), this), this;
    }
    /** @type {number} */
    this.M = opt_attributes;
    if (this.j) {
      this.j.setTagForChildDirectedTreatment(opt_attributes);
    }
    return this;
  };
  self.setTagForChildDirectedTreatment = m(18, run.prototype.setTagForChildDirectedTreatment);
  /**
   * @return {?}
   */
  self.clearTagForChildDirectedTreatment = function() {
    /** @type {number} */
    this.M = -1;
    if (this.j) {
      this.j.setTagForChildDirectedTreatment(-1);
    }
    return this;
  };
  self.clearTagForChildDirectedTreatment = m(19, run.prototype.clearTagForChildDirectedTreatment);
  /**
   * @param {number} deepDataAndEvents
   * @return {?}
   */
  self.setKidsFriendlyAds = function(deepDataAndEvents) {
    if (0 !== deepDataAndEvents && 1 !== deepDataAndEvents) {
      return this.log.$a(theCallback(String(deepDataAndEvents)), this), this;
    }
    /** @type {number} */
    this.Y = deepDataAndEvents;
    if (this.j) {
      this.j.setKidsFriendlyAds(deepDataAndEvents);
    }
    return this;
  };
  self.setKidsFriendlyAds = m(18, run.prototype.setKidsFriendlyAds);
  /**
   * @param {?} message
   * @param {?} target
   * @return {?}
   */
  self.setTargeting = function(message, target) {
    /** @type {null} */
    var targets = null;
    if (push(target)) {
      /** @type {Array} */
      targets = [target];
    } else {
      if (isFunction(target)) {
        targets = target;
      } else {
        if (isArray(target)) {
          targets = hasKey(target);
        }
      }
    }
    var camelKey = targets ? targets.join() : String(target);
    if (!push(message) || (assertFalse(escape(message)) || !targets)) {
      return this.log.$a(call("PubAdsService.setTargeting", [message, target]), this), this;
    }
    this.v[message] = targets;
    this.log.info(dataAttr(message, camelKey, this.getName()), this);
    if (this.j) {
      this.j.clearAttribute(message);
      /** @type {number} */
      target = 0;
      for (;target < targets.length;++target) {
        this.j.addAttribute(message, targets[target]);
      }
    }
    return this;
  };
  self.setTargeting = m(1, run.prototype.setTargeting);
  /**
   * @param {?} e
   * @return {?}
   */
  self.clearTargeting = function(e) {
    if (arguments.length) {
      if ("undefined" == typeof e) {
        var message = new test("gpt_cleartargeting");
        log(message);
        jQuery(message);
      }
      message = e;
      if (!push(message) || assertFalse(escape(message))) {
        return this.log.$a(call("PubAdsService.clearTargeting", [message]), this), this;
      }
      if (!this.v[message]) {
        return this.log.$a(makeStructured(message, this.getName()), this), this;
      }
      delete this.v[message];
      this.log.info(oldErrorHandler(message, this.getName()), this);
    } else {
      this.v = {};
      this.log.info(getActual(this.getName()), this);
    }
    if (this.j) {
      this.j.clearAttribute(message);
    }
    return this;
  };
  self.clearTargeting = m(2, run.prototype.clearTargeting);
  /**
   * @param {?} key
   * @return {?}
   */
  self.getTargeting = function(key) {
    return push(key) ? Object.prototype.hasOwnProperty.call(this.v, key) ? hasKey(this.v[key]) : [] : (this.log.$a(call("PubAdsService.getTargeting", [key]), this), []);
  };
  self.getTargeting = m(38, run.prototype.getTargeting);
  /**
   * @return {?}
   */
  self.getTargetingKeys = function() {
    return rFlatten(this.v);
  };
  self.getTargetingKeys = m(39, run.prototype.getTargetingKeys);
  /**
   * @param {?} message
   * @return {?}
   */
  self.setCategoryExclusion = function(message) {
    if (!push(message) || assertFalse(escape(message))) {
      return this.log.$a(call("PubAdsService.setCategoryExclusion", [message]), this), this;
    }
    validate(this.P, message);
    this.log.info(processMessage(message), this);
    if (this.j) {
      this.j.addPageCategoryExclusion(message);
    }
    return this;
  };
  self.setCategoryExclusion = m(3, run.prototype.setCategoryExclusion);
  /**
   * @return {?}
   */
  self.clearCategoryExclusions = function() {
    /** @type {Array} */
    this.P = [];
    this.log.info(cancelAnimationFrame(), this);
    if (this.j) {
      this.j.clearPageCategoryExclusions();
    }
    return this;
  };
  self.clearCategoryExclusions = m(4, run.prototype.clearCategoryExclusions);
  /**
   * @return {undefined}
   */
  self.disableInitialLoad = function() {
    if (this.j) {
      this.log.$a(traverseNode("disableInitialLoad", "pubads"), this);
    } else {
      /** @type {boolean} */
      this.W = true;
    }
  };
  self.disableInitialLoad = m(5, run.prototype.disableInitialLoad);
  /**
   * @return {?}
   */
  self.enableSingleRequest = function() {
    if (this.l && !this.u) {
      this.log.$a(throttledUpdate("enableSingleRequest"), this);
    } else {
      if (!synchronize(this.w, "108809057")) {
        if (!synchronize(this.w, "108809056")) {
          this.log.info(__("single request"), this);
          /** @type {boolean} */
          this.u = true;
        }
      }
    }
    return this.u;
  };
  self.enableSingleRequest = m(6, run.prototype.enableSingleRequest);
  /**
   * @return {?}
   */
  self.enableAsyncRendering = function() {
    if (this.l && !this.m) {
      this.log.$a(throttledUpdate("enableAsyncRendering"), this);
    } else {
      this.log.info(__("asynchronous rendering"), this);
      /** @type {boolean} */
      this.m = true;
    }
    return this.m;
  };
  self.enableAsyncRendering = m(7, run.prototype.enableAsyncRendering);
  /**
   * @return {?}
   */
  self.enableSyncRendering = function() {
    if (this.l && this.m) {
      this.log.$a(throttledUpdate("enableSyncRendering"), this);
    } else {
      this.log.info(__("synchronous rendering"), this);
      /** @type {boolean} */
      this.m = false;
      var codeSegments = this.getSlots();
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;++i) {
        /** @type {boolean} */
        codeSegments[i].U = false;
      }
    }
    return!this.m;
  };
  self.enableSyncRendering = m(8, run.prototype.enableSyncRendering);
  /**
   * @param {?} opt_message
   * @return {undefined}
   */
  self.setCentering = function(opt_message) {
    this.log.info(__extends("centering", String(opt_message)), this);
    this.T = opt_message;
  };
  self.setCentering = m(9, run.prototype.setCentering);
  /**
   * @param {?} _super
   * @return {?}
   */
  self.setPublisherProvidedId = function(_super) {
    if (this.l) {
      this.log.$a(exposeValue("setPublisherProvidedId", _super), this);
    } else {
      this.log.info(__extends("PPID", _super), this);
      this.Z = _super;
    }
    return this;
  };
  self.setPublisherProvidedId = m(20, run.prototype.setPublisherProvidedId);
  /**
   * @param {string} str
   * @param {(Function|string)} opt_attributes
   * @return {?}
   */
  self.definePassback = function(str, opt_attributes) {
    if (!push(str) || (0 >= str.length || !opt_attributes)) {
      return this.log.error(call("PubAdsService.definePassback", [str, opt_attributes])), null;
    }
    var m = stringToArray(str);
    var item = split();
    resolver(item, "count_of_passback");
    if (!item.w) {
      /** @type {boolean} */
      item.w = true;
      key(item, "n" + m);
    }
    equals(item);
    return new Type(str, opt_attributes, this);
  };
  self.definePassback = m(10, run.prototype.definePassback);
  self.defineOutOfPagePassback = m(35, function(qualifier) {
    qualifier = this.definePassback(qualifier, [1, 1]);
    qualifier.wa(true);
    return qualifier;
  });
  /**
   * @param {Object} options
   * @param {string} name
   * @return {undefined}
   */
  var fail = function(options, name) {
    options.Ba();
    if (options.j) {
      options.j.passback(name);
    } else {
      options.log.info(errcb(name.getAdUnitPath(), "GPT"), options, name);
      options.I.push(name);
    }
  };
  self = run.prototype;
  /**
   * @param {boolean} options
   * @param {boolean} item
   * @return {undefined}
   */
  self.refresh = function(options, item) {
    if (options && !isFunction(options) || item && (!apply(item) || item.changeCorrelator && !isDefined(item.changeCorrelator))) {
      this.log.$a(call("PubAdsService.refresh", remove([options, item], set)), this);
    } else {
      /** @type {null} */
      var memory = null;
      if (options && (memory = _render(this, options), !memory.length)) {
        this.log.$a(call("PubAdsService.refresh", remove([options, item], set)), this);
        return;
      }
      if (this.j) {
        this.log.info(getData(), this);
        /** @type {boolean} */
        options = true;
        if (set(item)) {
          if (set(item.changeCorrelator)) {
            options = item.changeCorrelator;
          }
        }
        resolver(split(), "count_of_refreshes_called");
        this.j.refresh(memory, {
          changeCorrelator : options
        });
      } else {
        if (this.u) {
          this.log.info(_isLocalStorageAvailable(), this);
          if (memory) {
            validate(this.C, new Option(memory, item));
          } else {
            validate(this.C, new Option(this.getSlots(), item));
          }
        } else {
          this.log.$a(first(), this);
        }
      }
    }
  };
  self.refresh = m(11, run.prototype.refresh);
  /**
   * @return {undefined}
   */
  self.enableVideoAds = function() {
    /** @type {boolean} */
    this.U = true;
    getEnumerableProperties(this);
  };
  self.enableVideoAds = m(12, run.prototype.enableVideoAds);
  /**
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  self.setVideoContent = function(dataAndEvents, deepDataAndEvents) {
    /** @type {boolean} */
    this.U = true;
    this.oa = dataAndEvents;
    this.ha = deepDataAndEvents;
    getEnumerableProperties(this);
  };
  self.setVideoContent = m(13, run.prototype.setVideoContent);
  /**
   * @return {?}
   */
  self.getVideoContent = function() {
    return this.j ? this.j.getVideoContentInformation() : null;
  };
  self.getVideoContent = m(30, run.prototype.getVideoContent);
  /**
   * @param {Object} object
   * @return {undefined}
   */
  var getEnumerableProperties = function(object) {
    if (object.U) {
      if (object.j) {
        object.j.setVideoContentInformation(object.oa, object.ha);
      }
    }
  };
  /**
   * @param {Date} item
   * @return {undefined}
   */
  var pushStack = function(item) {
    if (item.j) {
      item.j.setCorrelator(-1 == item.D ? void 0 : item.D);
    }
  };
  self = run.prototype;
  /**
   * @return {?}
   */
  self.getCorrelator = function() {
    return 0 == this.getSlots().length ? "not_available" : this.j ? this.j.getCorrelator() : "not_loaded";
  };
  self.getCorrelator = m(27, run.prototype.getCorrelator);
  /**
   * @param {number} a
   * @return {?}
   */
  self.setCorrelator = function(a) {
    if (isUndefined(window)) {
      return this;
    }
    if (!bindCallbacks(a) || 0 === a) {
      return this.log.$a(safe_add(String(a)), this), this;
    }
    /** @type {number} */
    this.D = a;
    pushStack(this);
    return this;
  };
  self.setCorrelator = m(28, run.prototype.setCorrelator);
  /**
   * @return {?}
   */
  self.updateCorrelator = function() {
    /** @type {number} */
    this.D = -1;
    pushStack(this);
    return this;
  };
  self.updateCorrelator = m(25, run.prototype.updateCorrelator);
  /**
   * @return {?}
   */
  self.isAdRequestFinished = function() {
    return this.j ? this.j.isAdRequestFinished() : false;
  };
  self.isAdRequestFinished = m(29, run.prototype.isAdRequestFinished);
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  self.collapseEmptyDivs = function(dataAndEvents) {
    if (this.H) {
      this.log.$a(customQuote(), this);
    } else {
      if (this.l) {
        this.log.$a(throttledUpdate("collapseEmptyDivs"), this);
      } else {
        /** @type {boolean} */
        this.R = !!dataAndEvents;
        this.log.info(indentMultiline(String(this.R)), this);
        /** @type {boolean} */
        this.H = true;
      }
    }
    return this.H;
  };
  self.collapseEmptyDivs = m(14, run.prototype.collapseEmptyDivs);
  /**
   * @param {boolean} options
   * @return {?}
   */
  self.clear = function(options) {
    if (!this.j) {
      return this.log.$a(fadeOut(), this), false;
    }
    /** @type {null} */
    var best = null;
    if (options && (best = _render(this, options), 0 == best.length)) {
      return this.log.$a(call("PubAdsService.clear", remove([options], set)), this), false;
    }
    this.log.info(consume(), this);
    return this.j.clearSlotContents(best);
  };
  self.clear = m(15, run.prototype.clear);
  /**
   * @param {string} p
   * @param {string} r
   * @param {number} i
   * @return {?}
   */
  self.setLocation = function(p, r, i) {
    /** @type {string} */
    var data = "role:1 producer:12";
    if (set(r)) {
      if (!isClassOf(p)) {
        return this.log.$a(replaceState("Latitude")), this;
      }
      if (!isClassOf(r)) {
        return this.log.$a(replaceState("Longitude")), this;
      }
      data += " latlng{ latitude_e7: " + Math.round(1E7 * p) + " longitude_e7: " + Math.round(1E7 * r) + "}";
      if (set(i)) {
        if (isNaN(i)) {
          return this.log.$a(replaceState("Radius")), this;
        }
        data += " radius:" + Math.round(i);
      }
    } else {
      if (50 < p.length) {
        r = p.substring(0, 50);
        this.log.$a(contest(String(p), "50", r));
        /** @type {string} */
        p = r;
      }
      data += ' loc:"' + p + '"';
    }
    /** @type {string} */
    p = data;
    if (dom) {
      data = global.btoa(p);
    } else {
      /** @type {Array} */
      data = [];
      /** @type {number} */
      i = r = 0;
      for (;i < p.length;i++) {
        /** @type {number} */
        var value = p.charCodeAt(i);
        for (;255 < value;) {
          /** @type {number} */
          data[r++] = value & 255;
          value >>= 8;
        }
        /** @type {number} */
        data[r++] = value;
      }
      if (!props) {
        props = {};
        /** @type {number} */
        p = 0;
        for (;65 > p;p++) {
          /** @type {string} */
          props[p] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p);
        }
      }
      p = props;
      /** @type {Array} */
      r = [];
      /** @type {number} */
      i = 0;
      for (;i < data.length;i += 3) {
        var o = data[i];
        var f = (value = i + 1 < data.length) ? data[i + 1] : 0;
        /** @type {boolean} */
        var perm = i + 2 < data.length;
        var type = perm ? data[i + 2] : 0;
        /** @type {number} */
        var j = o >> 2;
        /** @type {number} */
        o = (o & 3) << 4 | f >> 4;
        /** @type {number} */
        f = (f & 15) << 2 | type >> 6;
        /** @type {number} */
        type = type & 63;
        if (!perm) {
          /** @type {number} */
          type = 64;
          if (!value) {
            /** @type {number} */
            f = 64;
          }
        }
        r.push(p[j], p[o], p[f], p[type]);
      }
      /** @type {string} */
      data = r.join("");
    }
    /** @type {string} */
    this.O = "a " + data;
    return this;
  };
  self.setLocation = m(16, run.prototype.setLocation);
  /**
   * @return {?}
   */
  self.getVersion = function() {
    if (this.j) {
      return this.j.getVersion();
    }
  };
  /**
   * @param {string} config
   * @return {undefined}
   */
  self.forceExperiment = function(config) {
    if (this.l) {
      this.log.$a(exposeValue("forceExperiment", config), this);
    } else {
      this.w.push(config);
    }
  };
  /**
   * @return {?}
   */
  var resolve = function() {
    var args = argsToArray();
    var a = g(args, "publisher_ads");
    if (!a) {
      var field = a = new run;
      args.j[field.getName()] = field;
    }
    return a;
  };
  resolve = m(26, resolve);
  /**
   * @param {Object} model
   * @param {Object} namespace
   * @return {?}
   */
  var _render = function(model, namespace) {
    /** @type {Array} */
    var ret = [];
    /** @type {number} */
    var i = 0;
    for (;i < namespace.length;++i) {
      var item = namespace[i];
      if (item instanceof setFillAndStroke) {
        if (!item.R) {
          ret.push(item);
        }
      } else {
        model.log.$a(easing(String(i)), model);
      }
    }
    return ret;
  };
  /**
   * @return {undefined}
   */
  run.prototype.markAsAmp = function() {
    /** @type {boolean} */
    this.X = true;
    if (this.j) {
      /** @type {boolean} */
      pub(getItem()).w = true;
    }
  };
  /**
   * @param {string} params
   * @return {?}
   */
  run.prototype.setSafeFrameConfig = function(params) {
    if (params && apply(params)) {
      if (params = subscribe(params)) {
        /** @type {string} */
        this.ba = params;
      }
    } else {
      this.log.error(call("PubAdsService.setSafeFrameConfig", [params]), this);
    }
    return this;
  };
  run.prototype.setSafeFrameConfig = m(37, run.prototype.setSafeFrameConfig);
  /**
   * @param {Object} item
   * @param {?} elems
   * @return {undefined}
   */
  var getText = function(item, elems) {
    var val = item.getSlots();
    var res = remove(val, function(walkers) {
      return synchronize(elems, walkers);
    });
    if (0 != res.length) {
      if (item.j) {
        item.j.destroySlots(res);
      } else {
        forEach(res, function(obj) {
          formatValue(this.o, obj);
        }, item);
      }
      forEach(res, function(obj) {
        formatValue(val, obj);
      });
    }
  };
  self = run.prototype;
  /**
   * @param {Function} opt_attributes
   * @return {?}
   */
  self.setForceSafeFrame = function(opt_attributes) {
    if (!isDefined(opt_attributes)) {
      return this.log.$a(padd(String(opt_attributes)), this), this;
    }
    /** @type {Function} */
    this.N = opt_attributes;
    if (this.j) {
      setLocation(this.N);
    }
    return this;
  };
  self.setForceSafeFrame = m(36, run.prototype.setForceSafeFrame);
  /**
   * @return {undefined}
   */
  self.enableChromeInterventionSignals = function() {
    ctor.getInstance().set(73, 1);
  };
  /**
   * @return {undefined}
   */
  self.markAsGladeControl = function() {
    this.forceExperiment("108809101");
  };
  /**
   * @return {undefined}
   */
  self.markAsGladeOptOut = function() {
    this.forceExperiment("108809110");
  };
  reply("pubads", resolve);
  /**
   * @return {undefined}
   */
  var Router = function() {
    this.j = {};
    this.m = {};
    this.l = {};
    this.o = scale();
  };
  /**
   * @param {Object} data
   * @param {string} item
   * @param {Object} val
   * @param {Object} e
   * @return {?}
   */
  var refresh = function(data, item, val, e) {
    if (!push(item) || (0 >= item.length || !val)) {
      return null;
    }
    if (!(item in data.j)) {
      /** @type {Array} */
      data.j[item] = [];
      /** @type {number} */
      data.m[item] = 0;
    }
    val = new setFillAndStroke(item, data.m[item], val, e);
    data.m[item]++;
    e = val.getSlotId().getDomId();
    if (data.l[e]) {
      return data.o.error(objectToString(e)), null;
    }
    data.j[item].push(val);
    /** @type {Object} */
    data.l[val.getSlotId().getDomId()] = val;
    json.push(val);
    data = has([val])[0];
    item = split();
    resolver(item, "count_of_slots");
    if (!item.w) {
      /** @type {boolean} */
      item.w = true;
      key(item, "n" + data);
    }
    equals(item);
    return val;
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  var recurse = function(options) {
    /** @type {Array} */
    var bProperties = [];
    isPlainObject(options.j, function(values) {
      forEach(values, function(i) {
        bProperties.push(i);
      });
    });
    return bProperties;
  };
  /**
   * @param {Object} from
   * @param {string} data
   * @return {undefined}
   */
  var scan = function(from, data) {
    forEach(data, function(obj) {
      /** @type {boolean} */
      obj.R = true;
      obj.j.info(y(obj.m.toString()), null, obj);
      var i = obj.getAdUnitPath();
      formatValue(this.j[i], obj);
      if (0 == this.j[i].length) {
        var j = this.j;
        if (i in j) {
          delete j[i];
        }
      }
      i = this.l;
      j = obj.getSlotId().getDomId();
      if (j in i) {
        delete i[j];
      }
      formatValue(json, obj);
    }, from);
  };
  /**
   * @param {Object} obj
   * @param {string} val
   * @return {?}
   */
  var some = function(obj, val) {
    if (val && !isFunction(val)) {
      return obj.o.$a(call("googletag.destroySlots", [val])), false;
    }
    if (val) {
      isNumber(val);
      val = remove(val, function(pair) {
        return pair instanceof setFillAndStroke && !pair.R;
      });
    } else {
      val = recurse(obj);
    }
    if (!val || 0 == val.length) {
      return false;
    }
    getText(resolve(), val);
    scan(obj, val);
    return true;
  };
  /**
   * @param {Object} c
   * @param {number} n
   * @return {?}
   */
  Router.prototype.u = function(c, n) {
    n = n || 0;
    c = push(c) && this.j[c] || [];
    return 0 <= n && (n < c.length && (c = c[n], c.getSlotId().getInstance() == n)) ? c : null;
  };
  /**
   * @param {?} val
   * @param {string} value
   * @return {?}
   */
  var indexOf = function(val, value) {
    return isNull(val.j, function(done) {
      return synchronize(done, value);
    });
  };
  /**
   * @return {?}
   */
  var text = function() {
    var app = emit();
    return app.slot_manager_instance || (app.slot_manager_instance = new Router);
  };
  /**
   * @param {?} string
   * @param {Object} fmt
   * @param {?} thisObj
   * @return {?}
   */
  var exec = function(string, fmt, thisObj) {
    try {
      var msgs = text();
      return msgs && refresh(msgs, string, fmt, thisObj);
    } catch (v1CompNum) {
      html(74, v1CompNum);
    }
  };
  reply("defineOutOfPageSlot", function(object, completeEvent) {
    try {
      var pdataCur = text();
      if (!pdataCur) {
        return null;
      }
      var obj = refresh(pdataCur, object, [1, 1], completeEvent);
      return obj ? (obj.wa(true), obj) : null;
    } catch (v1CompNum) {
      html(73, v1CompNum);
    }
  });
  reply("defineSlot", exec);
  reply("defineUnit", exec);
  reply("destroySlots", function(method) {
    try {
      var suiteView = text();
      return!(!suiteView || !some(suiteView, method));
    } catch (v1CompNum) {
      html(75, v1CompNum);
    }
  });
  /** @type {function (Object, number): ?} */
  Router.prototype.find = Router.prototype.u;
  /** @type {function (): ?} */
  Router.getInstance = text;
  /**
   * @param {?} i
   * @return {undefined}
   */
  var show = function(i) {
    try {
      var a = scale();
      if (push(i)) {
        var item;
        var color = text();
        if (item = color.l[i] ? color.l[i] : null) {
          if (item.sa = true, item.U && !item.hasWrapperDiv()) {
            item.j.$a(_(item.C, item.m.getDomId()), null, item);
          } else {
            /** @type {number} */
            i = 0;
            for (;i < item.u.length;++i) {
              if (item.u[i].l) {
                item.u[i].ja(item);
              }
            }
          }
        } else {
          a.error(statement(String(i)));
        }
      } else {
        a.error(getList(String(i)));
      }
    } catch (v1CompNum) {
      html(95, v1CompNum);
    }
  };
  reply("display", show);
  /**
   * @return {undefined}
   */
  var A = function() {
    transform.call(this);
    /** @type {boolean} */
    this.H = true;
    /** @type {boolean} */
    this.m = this.w = false;
    /** @type {number} */
    this.D = 0;
    this.C = this.A = void 0;
    /** @type {boolean} */
    this.ta = this.ka = false;
    this.v = {};
    this.j = {};
    /** @type {boolean} */
    this.o = false;
    this.u = {};
  };
  expect(A, transform);
  self = A.prototype;
  /**
   * @param {?} state
   * @param {number} value
   * @return {?}
   */
  self.set = function(state, value) {
    if (push(state) && 0 < state.length) {
      /** @type {number} */
      this.u[state] = value;
      this.log.info(condition(state, String(value), this.getName()), this, null);
    } else {
      this.log.$a(addAttributeTemplate(String(state), String(value), this.getName()), this, null);
    }
    return this;
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.get = function(opt_attributes) {
    return this.u[opt_attributes];
  };
  /**
   * @return {?}
   */
  self.getAttributeKeys = function() {
    /** @type {Array} */
    var keys = [];
    each(this.u, function(dataAndEvents, key) {
      keys.push(key);
    });
    return keys;
  };
  /**
   * @param {?} c
   * @param {Object} data
   * @param {?} a
   * @param {string} options
   * @return {undefined}
   */
  self.display = function(c, data, a, options) {
    this.enable();
    c = a ? exec(c, data, a) : exec(c, data);
    c.addService(this);
    if (options) {
      c.setClickUrl(options);
    }
    show(c.getSlotId().getDomId());
  };
  /**
   * @return {undefined}
   */
  self.va = function() {
    if (this.H) {
      this.I();
    } else {
      if (!this.ka) {
        global.document.write('<script type="text/javascript" src="' + jsEncode() + '">\x3c/script>');
        /** @type {boolean} */
        this.ka = true;
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.enableSyncLoading = function() {
    /** @type {boolean} */
    this.H = false;
  };
  self.enableSyncLoading = m(58, A.prototype.enableSyncLoading);
  /**
   * @param {string} opt_attributes
   * @return {undefined}
   */
  self.setRefreshUnfilledSlots = function(opt_attributes) {
    if (isDefined(opt_attributes)) {
      /** @type {string} */
      this.w = opt_attributes;
    }
  };
  self.setRefreshUnfilledSlots = m(59, A.prototype.setRefreshUnfilledSlots);
  /**
   * @param {Object} opt_attributes
   * @return {undefined}
   */
  self.setClearUnfilledSlots = function(opt_attributes) {
    if (isDefined(opt_attributes)) {
      /** @type {Object} */
      this.m = opt_attributes;
    }
  };
  self.setClearUnfilledSlots = m(68, A.prototype.setClearUnfilledSlots);
  /**
   * @param {Object} parameters
   * @return {undefined}
   */
  self.notifyUnfilledSlots = function(parameters) {
    if (this.w) {
      setup(this, usage(this, parameters));
    } else {
      if (this.m) {
        parameters = usage(this, parameters);
        var self = resolve();
        if (self.l) {
          self.clear(parameters);
          /** @type {number} */
          var p = 0;
          for (;p < parameters.length;++p) {
            var data = new empty(parameters[p], true, null, null, null, null, null, null, self.getName());
            request(self, "slotRenderEnded", data);
          }
        } else {
          this.log.error(resetQueues("PubAds", "clear"));
        }
      }
    }
  };
  self.notifyUnfilledSlots = m(69, A.prototype.notifyUnfilledSlots);
  /**
   * @return {?}
   */
  self.isRoadblockingSupported = function() {
    var actual = resolve();
    if (!actual.l) {
      return false;
    }
    actual = actual.getSlots();
    var expected = this.getSlots();
    if (actual.length != expected.length) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (;i < expected.length;++i) {
      /** @type {boolean} */
      var d = false;
      /** @type {number} */
      var j = 0;
      for (;j < actual.length;++j) {
        if (expected[i] === actual[j]) {
          /** @type {boolean} */
          d = true;
          break;
        }
      }
      if (!d) {
        return false;
      }
    }
    return true;
  };
  self.isRoadblockingSupported = m(111, A.prototype.isRoadblockingSupported);
  /**
   * @return {undefined}
   */
  self.refreshAllSlots = function() {
    if (this.w) {
      setup(this, null);
    }
  };
  self.refreshAllSlots = m(60, A.prototype.refreshAllSlots);
  /**
   * @param {?} d
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @param {?} o
   * @return {undefined}
   */
  self.setVideoSession = function(d, dataAndEvents, deepDataAndEvents, o) {
    this.D = d;
    this.A = dataAndEvents;
    this.C = deepDataAndEvents;
    this.o = o;
  };
  self.setVideoSession = m(61, A.prototype.setVideoSession);
  /**
   * @return {?}
   */
  self.getDisplayAdsCorrelator = function() {
    return resolve().getCorrelator();
  };
  self.getDisplayAdsCorrelator = m(62, A.prototype.getDisplayAdsCorrelator);
  /**
   * @return {?}
   */
  self.getVideoStreamCorrelator = function() {
    var state;
    state = resolve();
    if (state.j) {
      state = state.j.getVideoStreamCorrelator();
      state = isNaN(state) ? 0 : state;
    } else {
      /** @type {number} */
      state = 0;
    }
    return state;
  };
  self.getVideoStreamCorrelator = m(63, A.prototype.getVideoStreamCorrelator);
  /**
   * @param {Object} obj
   * @param {Object} options
   * @return {undefined}
   */
  var setup = function(obj, options) {
    var data = resolve();
    if (data.l) {
      if (obj.o) {
        if (!obj.isRoadblockingSupported()) {
          obj.log.$a(newBindings());
          return;
        }
        if (data.j) {
          data.log.info(clearPageTransitionStack(), data);
          data.j.clearNoRefreshState();
        } else {
          data.log.$a(hasVirtualBindings(), data);
        }
        data.clear();
      }
      var e = {
        isVideoRefresh : true
      };
      if (set(obj.D)) {
        e.videoStreamCorrelator = obj.D;
      }
      if (obj.A) {
        e.videoPodNumber = obj.A;
      }
      if (obj.C) {
        e.videoPodPosition = obj.C;
      }
      if (obj.o) {
        e.persistentRoadblocksOnly = obj.o;
      }
      if (obj.m) {
        e.clearUnfilledSlots = obj.m;
      }
      a: {
        if (options && !isFunction(options) || (e.videoStreamCorrelator && !isClassOf(e.videoStreamCorrelator) || (e.videoPodNumber && !isClassOf(e.videoPodNumber) || (e.videoPodPosition && !isClassOf(e.videoPodPosition) || (e.persistentRoadblocksOnly && !isDefined(e.persistentRoadblocksOnly) || e.clearUnfilledSlots && !isDefined(e.clearUnfilledSlots)))))) {
          data.log.$a(call("PubAdsService.internalVideoRefresh", remove([options, e], set)), data);
        } else {
          if (data.j) {
            /** @type {null} */
            obj = null;
            if (options && (obj = _render(data, options), !obj.length)) {
              data.log.error(clearSelection("internalVideoRefresh"), data);
              break a;
            }
            data.log.info(getData(), data);
            data.j.refresh(obj, e);
          } else {
            data.log.$a(first(), data);
          }
        }
      }
    } else {
      obj.log.error(resetQueues("PubAds", "refresh"));
    }
  };
  /**
   * @param {string} key
   * @return {?}
   */
  A.prototype.isSlotAPersistentRoadblock = function(key) {
    var p = resolve();
    if (p.l && indexOf(text(), key)) {
      return p.j ? p.j.isSlotAPersistentRoadblock(key) : false;
    }
    this.log.error(addLineNumbers());
    return false;
  };
  A.prototype.isSlotAPersistentRoadblock = m(64, A.prototype.isSlotAPersistentRoadblock);
  /**
   * @param {Object} recurring
   * @param {Array} values
   * @return {?}
   */
  var usage = function(recurring, values) {
    var key = recurring.getSlotIdMap();
    /** @type {Array} */
    var byteout = [];
    /** @type {number} */
    var ii = 0;
    for (;ii < values.length;++ii) {
      var value = values[ii];
      if (i(key, value)) {
        byteout.push(key[value]);
      } else {
        recurring.log.$a(help(), recurring);
      }
    }
    return byteout;
  };
  /**
   * @return {?}
   */
  A.prototype.getName = function() {
    return "companion_ads";
  };
  /**
   * @return {?}
   */
  var fascii2ascii = function() {
    return oncomplete() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js";
  };
  A.prototype.I = m(70, function() {
    if (!this.ta) {
      var D = document;
      var resolved = fascii2ascii();
      this.log.info(sansSemicolonTemplate("GPT CompanionAds"), this);
      loadScript(D, resolved);
      /** @type {boolean} */
      this.ta = true;
    }
  }, function(opt_attributes, done) {
    after(opt_attributes, done);
    this.log.error(_t("GPT CompanionAds"), this);
  });
  A.prototype.onImplementationLoaded = m(65, function() {
    this.log.info(isF("GPT CompanionAds"), this);
    /** @type {boolean} */
    this.ka = true;
  });
  /**
   * @param {Object} node
   * @param {string} value
   * @return {?}
   */
  var visit = function(node, value) {
    var key = value && value.getSlotId().getId();
    if (key && (key in node.v && (value.hasWrapperDiv() && (node.l && !node.isSlotAPersistentRoadblock(value))))) {
      value.J = node.v[key];
      /** @type {null} */
      var val = null;
      if (node.j.hasOwnProperty(key)) {
        val = node.j[key];
        delete node.j[key];
      }
      node = new empty(value, false, val, null, null, null, null, null, node.getName());
      return post(value, node);
    }
    return false;
  };
  self = A.prototype;
  /**
   * @param {string} param
   * @return {undefined}
   */
  self.ja = function(param) {
    visit(this, param);
  };
  /**
   * @param {string} property
   * @param {string} sort
   * @param {string} dataAndEvents
   * @param {string} deepDataAndEvents
   * @return {?}
   */
  self.fillSlot = function(property, sort, dataAndEvents, deepDataAndEvents) {
    return indexOf(text(), property) && (push(sort) && 0 < sort.length) ? (this.v[property.getSlotId().getId()] = sort, null != dataAndEvents && (null != deepDataAndEvents && (this.j[property.getSlotId().getId()] = [dataAndEvents, deepDataAndEvents])), visit(this, property)) : false;
  };
  self.fillSlot = m(66, A.prototype.fillSlot);
  /**
   * @param {string} data
   * @param {string} dataAndEvents
   * @param {string} result1
   * @return {undefined}
   */
  self.slotRenderEnded = function(data, dataAndEvents, result1) {
    /** @type {null} */
    var result0 = null;
    if (null != dataAndEvents) {
      if (null != result1) {
        /** @type {Array} */
        result0 = [dataAndEvents, result1];
      }
    }
    data = new empty(data, false, result0, null, null, null, null, null, this.getName());
    request(this, "slotRenderEnded", data);
  };
  self.slotRenderEnded = m(67, A.prototype.slotRenderEnded);
  /**
   * @return {?}
   */
  var unshift = function() {
    var args = argsToArray();
    var a = g(args, "companion_ads");
    if (!a) {
      var field = a = new A;
      args.j[field.getName()] = field;
    }
    return a;
  };
  unshift = m(57, unshift);
  reply("companionAds", unshift);
  /**
   * @return {undefined}
   */
  var instance = function() {
    transform.call(this);
    this.j = {};
    this.m = {};
  };
  expect(instance, transform);
  self = instance.prototype;
  /**
   * @return {?}
   */
  self.getName = function() {
    return "content";
  };
  /**
   * @param {?} state
   * @param {number} value
   * @return {?}
   */
  self.set = function(state, value) {
    if (push(state) && 0 < state.length) {
      /** @type {number} */
      this.j[state] = value;
      this.log.info(condition(state, String(value), this.getName()), this, null);
    } else {
      this.log.$a(addAttributeTemplate(String(state), String(value), this.getName()), this, null);
    }
    return this;
  };
  /**
   * @param {number} opt_attributes
   * @return {?}
   */
  self.get = function(opt_attributes) {
    return this.j[opt_attributes];
  };
  /**
   * @return {?}
   */
  self.getAttributeKeys = function() {
    /** @type {Array} */
    var keys = [];
    each(this.j, function(dataAndEvents, key) {
      keys.push(key);
    });
    return keys;
  };
  /**
   * @param {?} c
   * @param {Object} data
   * @param {?} a
   * @param {string} options
   * @return {undefined}
   */
  self.display = function(c, data, a, options) {
    this.enable();
    c = a ? exec(c, data, a) : exec(c, data);
    c.addService(this);
    if (options) {
      c.setClickUrl(options);
    }
    show(c.getSlotId().getDomId());
  };
  /**
   * @param {Object} data
   * @param {Object} value
   * @return {undefined}
   */
  var action = function(data, value) {
    var name = value && value.getSlotId().getId();
    if (name in data.m) {
      if (data.l) {
        if (value.hasWrapperDiv()) {
          if (!value.w) {
            value.J = data.m[name];
            data = new empty(value, false, null, null, null, null, null, null, data.getName());
            post(value, data);
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  instance.prototype.va = function() {
    var codeSegments = this.getSlots();
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      action(this, codeSegments[i]);
    }
  };
  /**
   * @param {Error} value
   * @return {undefined}
   */
  instance.prototype.ja = function(value) {
    action(this, value);
  };
  /**
   * @param {string} value
   * @param {string} str
   * @return {undefined}
   */
  instance.prototype.setContent = function(value, str) {
    try {
      if (indexOf(text(), value)) {
        if (push(str)) {
          if (0 < str.length) {
            /** @type {string} */
            this.m[value.getSlotId().getId()] = str;
            action(this, value);
          }
        }
      }
    } catch (v1CompNum) {
      html(72, v1CompNum);
    }
  };
  reply("content", function() {
    try {
      var args = argsToArray();
      var params = g(args, "content");
      if (!params) {
        var p = params = new instance;
        args.j[p.getName()] = p;
      }
      return params;
    } catch (v1CompNum) {
      html(71, v1CompNum);
    }
  });
  /** @type {null} */
  var dict = null;
  /** @type {boolean} */
  var On = false;
  /** @type {boolean} */
  var Pn = false;
  /**
   * @return {undefined}
   */
  var script = function() {
    if (!Pn) {
      /** @type {string} */
      var resolved = oncomplete() + "//publisherconsole.appspot.com/js/loader.js";
      loadScript(document, resolved);
      /** @type {boolean} */
      Pn = true;
    }
  };
  /**
   * @return {?}
   */
  var handler = function() {
    var container = window;
    var special = document;
    if (emit()._pubconsole_disable_) {
      return false;
    }
    var selector;
    selector = document.cookie.split("google_pubconsole=");
    if (selector = 2 == selector.length ? selector[1].split(";")[0] : "") {
      if (selector = selector.split("|"), 0 < selector.length && ("1" == selector[0] || "0" == selector[0])) {
        return true;
      }
    }
    argsToArray();
    /** @type {boolean} */
    selector = false;
    try {
      /** @type {boolean} */
      selector = container.top.document.URL === special.URL;
    } catch (d) {
    }
    container = selector ? special.URL : special.referrer;
    return null !== search(container, "google_debug") || (null !== search(container, "dfpdeb") || (null !== search(container, "google_console") || (null !== search(container, "google_force_console") || null !== search(container, "googfc"))));
  };
  /**
   * @return {undefined}
   */
  var onChange = function() {
    try {
      if (handler()) {
        script();
      }
      _initialize();
    } catch (v1CompNum) {
      html(94, v1CompNum);
    }
  };
  /**
   * @return {undefined}
   */
  var _initialize = function() {
    on(window, "message", function(e) {
      if (e.source == window) {
        if ("gpt_open_pubconsole" == e.data.type) {
          if (e = e.data.slotDomId) {
            warn(e);
          }
        }
      }
    });
  };
  /**
   * @param {?} arg
   * @return {undefined}
   */
  var warn = function(arg) {
    if (window.googletag && window.googletag.console) {
      window.googletag.console.openConsole(arg);
    } else {
      if (arg) {
        dict = arg;
      }
      /** @type {boolean} */
      On = true;
      script();
    }
  };
  if ("complete" === document.readyState) {
    onChange();
  } else {
    contentLoaded(window, onChange);
  }
  reply("disablePublisherConsole", function() {
    try {
      /** @type {boolean} */
      emit()._pubconsole_disable_ = true;
    } catch (v1CompNum) {
      html(93, v1CompNum);
    }
  });
  reply("onPubConsoleJsLoad", function() {
    if (On) {
      window.googletag.console.openConsole(dict);
      /** @type {null} */
      dict = null;
      /** @type {boolean} */
      On = false;
    }
  });
  reply("openConsole", warn);
  /**
   * @return {undefined}
   */
  var Post = function() {
    /** @type {Array} */
    this.j = [];
    /** @type {boolean} */
    this.m = false;
    this.l = scale();
  };
  /**
   * @param {string} selector
   * @param {string} item
   * @return {?}
   */
  Post.prototype.addSize = function(selector, item) {
    try {
      var show;
      if (!(show = !formatter(selector) || "fluid" == selector)) {
        var value;
        if (!(value = formatter(item))) {
          var content;
          if (content = isFunction(item)) {
            a: {
              var valuesLen = item.length;
              var arr2 = push(item) ? item.split("") : item;
              /** @type {number} */
              var i = 0;
              for (;i < valuesLen;i++) {
                if (i in arr2 && !formatter.call(void 0, arr2[i])) {
                  /** @type {boolean} */
                  content = false;
                  break a;
                }
              }
              /** @type {boolean} */
              content = true;
            }
          }
          value = content;
        }
        /** @type {boolean} */
        show = !value;
      }
      if (show) {
        return this.m = true, this.l.$a(call("SizeMappingBuilder.addSize", [selector, item])), this;
      }
      this.j.push([selector, item]);
      return this;
    } catch (v1CompNum) {
      html(88, v1CompNum);
    }
  };
  /**
   * @return {?}
   */
  Post.prototype.build = function() {
    try {
      if (this.m) {
        return this.l.$a(asyncForEach()), null;
      }
      sortBy(this.j);
      return this.j;
    } catch (v1CompNum) {
      html(89, v1CompNum);
    }
  };
  /**
   * @param {Array} c
   * @param {?} lines
   * @return {?}
   */
  var lines = function(c, lines) {
    a: {
      lines = lines[0];
      c = c[0];
      /** @type {function ((boolean|number|string), (boolean|number|string)): ?} */
      var fn = comparator;
      /** @type {number} */
      var padLength = Math.min(lines.length, c.length);
      /** @type {number} */
      var i = 0;
      for (;i < padLength;i++) {
        var matched = fn(lines[i], c[i]);
        if (0 != matched) {
          lines = matched;
          break a;
        }
      }
      lines = comparator(lines.length, c.length);
    }
    return lines;
  };
  reply("sizeMapping", function() {
    try {
      return new Post;
    } catch (v1CompNum) {
      html(90, v1CompNum);
    }
  });
  if (window.googletag.evalScripts) {
    window.googletag.evalScripts();
  } else {
    reply("evalScripts", function() {
      cb();
    });
    complete();
  }
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this);
