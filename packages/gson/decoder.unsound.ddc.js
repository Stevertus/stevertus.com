define(['dart_sdk', 'packages/gson/parsable', 'packages/gson/values', 'packages/gson/encoder'], (function load__packages__gson__decoder(dart_sdk, packages__gson__parsable, packages__gson__values, packages__gson__encoder) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parsable = packages__gson__parsable.parsable;
  const values = packages__gson__values.values;
  const encoder = packages__gson__encoder.encoder;
  var decoder = Object.create(dart.library);
  var gson = Object.create(dart.library);
  var $add = dartx.add;
  var $_set = dartx._set;
  var $indexOf = dartx.indexOf;
  var $forEach = dartx.forEach;
  var GsonParsableL = () => (GsonParsableL = dart.constFn(dart.legacy(parsable.GsonParsable)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var StringLAnddynamicToNullN = () => (StringLAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), dart.dynamic])))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var GsonValueL = () => (GsonValueL = dart.constFn(dart.legacy(values.GsonValue)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  const CT = Object.create(null);
  var L0 = "package:gson/decoder.dart";
  var L1 = "package:gson/gson.dart";
  var _skipIgnored = dart.privateName(decoder, "_skipIgnored");
  decoder.GsonDecoder = class GsonDecoder extends core.Object {
    decode(gson) {
      let p = GsonParsableL().is(gson) ? gson : StringL().is(gson) ? new parsable.GsonParsable.new(gson) : dart.throw("The gson is not a valid input to decode an Array from");
      if (p.actual() === "{") {
        return this.decodeMap(p);
      } else if (p.actual() === "[") {
        return this.decodeArray(p);
      } else if (p.actual() === "t" && p.peek(1) === "r" && p.peek(2) === "u" && p.peek(3) === "e") {
        return true;
      } else if (p.actual() === "f" && p.peek(1) === "a" && p.peek(2) === "l" && p.peek(3) === "s" && p.peek(4) === "e") {
        return false;
      } else if (dart.test(core.RegExp.new("[0-9\\.]").hasMatch(p.actual()))) {
        return this.decodeNumber(p);
      } else if (p.actual() === "\"" || p.actual() === "'" || dart.test(decoder.GsonDecoder._PURE_STRING.hasMatch(p.actual()))) {
        return this.decodeString(p);
      } else {
        dart.throw(p.error("Unexpected character " + dart.notNull(p.actual())));
      }
    }
    decodeArray(src) {
      let p = GsonParsableL().is(src) ? src : StringL().is(src) ? new parsable.GsonParsable.new(src) : dart.throw("The src is not a valid input to decode an Array from");
      let arr = [];
      let foundComma = true;
      if (p.next() !== "[") {
        dart.throw(p.error("Array has to start with a ["));
      }
      while (p.actual() !== "]") {
        if (!foundComma) {
          dart.throw(p.error("Expected \"]\" or \",\""));
        }
        foundComma = false;
        this[_skipIgnored](p);
        if (dart.test(core.RegExp.new("[\\\\[\\\\{\\\\\\\"\\\\\\'0-9]").hasMatch(p.actual())) || dart.test(decoder.GsonDecoder._PURE_STRING.hasMatch(p.actual()))) {
          arr[$add](this.decode(p));
        } else {
          dart.throw(p.error("Expected \"[\", \"\\\"\",\"\\'\", \"{\" or a number"));
        }
        this[_skipIgnored](p);
        if (p.actual() === ",") {
          foundComma = true;
          p.skip();
        }
        this[_skipIgnored](p);
      }
      if (!dart.test(p.ended)) {
        p.skip();
      }
      return arr;
    }
    decodeMap(src) {
      let p = GsonParsableL().is(src) ? src : StringL().is(src) ? new parsable.GsonParsable.new(src) : dart.throw("The src is not a valid input to decode an Array from");
      let map = new (IdentityMapOfStringL$dynamic()).new();
      let foundComma = true;
      if (p.next() !== "{") {
        dart.throw("Array has to start with a [");
      }
      while (p.actual() !== "}") {
        if (!foundComma) {
          dart.throw(p.error("Expected \"}\" or \",\""));
        }
        foundComma = false;
        this[_skipIgnored](p);
        let key = "";
        if (p.actual() === "\"" || p.actual() === "'") {
          key = this.decodeString(src);
        } else {
          while (dart.test(decoder.GsonDecoder._KEY_CHARACTERS.hasMatch(p.actual()))) {
            key = dart.notNull(key) + dart.notNull(p.next());
          }
        }
        this[_skipIgnored](p);
        if (p.actual() !== ":") {
          dart.throw(p.error("Expected \":\""));
        }
        p.skip();
        this[_skipIgnored](p);
        if (dart.test(core.RegExp.new("[\\\\[\\\\{\\\\\\\"\\\\\\'0-9]").hasMatch(p.actual())) || dart.test(decoder.GsonDecoder._PURE_STRING.hasMatch(p.actual()))) {
          map[$_set](key, this.decode(p));
        } else {
          dart.throw(p.error("Expected \"[\", \"\\\"\",\"\\'\", \"{\" or a number"));
        }
        this[_skipIgnored](p);
        if (p.actual() === ",") {
          foundComma = true;
          p.skip();
        }
        this[_skipIgnored](p);
      }
      if (!dart.test(p.ended)) p.skip();
      return map;
    }
    decodeString(src) {
      let p = GsonParsableL().is(src) ? src : StringL().is(src) ? new parsable.GsonParsable.new(src) : dart.throw("The src is not a valid input to decode an Array from");
      let str = "\"";
      if (p.actual() === "\"" || p.actual() === "'") {
        let search = p.next();
        while (p.actual() != search) {
          if (p.actual() === "\\") {
            str = str + dart.notNull(p.next());
          } else if (p.actual() === "\"") {
            str = str + ("\\" + dart.notNull(p.next()));
            continue;
          }
          str = str + dart.notNull(p.next());
        }
        if (!dart.test(p.ended)) {
          p.skip();
        }
      } else if (dart.test(decoder.GsonDecoder._PURE_STRING.hasMatch(p.actual()))) {
        while (dart.test(decoder.GsonDecoder._PURE_STRING.hasMatch(p.actual()))) {
          if (p.actual() === "\\") {
            str = str + dart.notNull(p.next());
          }
          str = str + dart.notNull(p.next());
        }
      } else {
        dart.throw(p.error("String has to start with a \"\\\"\" or \"\\'\" when it contains some characters"));
      }
      return StringL().as(convert.json.decode(str + "\""));
    }
    decodeNumber(src) {
      let p = GsonParsableL().is(src) ? src : StringL().is(src) ? new parsable.GsonParsable.new(src) : dart.throw("The src is not a valid input to decode an Array from");
      if (!dart.test(core.RegExp.new("[0-9\\.]").hasMatch(p.actual()))) {
        dart.throw(p.error("Any number has to start with a number between 0 and 9"));
      }
      let number = "";
      while (dart.test(core.RegExp.new("[0-9\\.]").hasMatch(p.actual()))) {
        number = number + dart.notNull(p.next());
      }
      let ret = null;
      switch (p.actual()) {
        case "b":
        {
          ret = new values.Byte.new(dart.asNullableInt(core.num.parse(number)));
          if (!dart.test(p.ended)) {
            p.skip();
          }
          break;
        }
        case "s":
        {
          ret = new values.Short.new(dart.asNullableInt(core.num.parse(number)));
          if (!dart.test(p.ended)) {
            p.skip();
          }
          break;
        }
        case "l":
        {
          ret = new values.Long.new(dart.asNullableInt(core.num.parse(number)));
          if (!dart.test(p.ended)) {
            p.skip();
          }
          break;
        }
        case "f":
        {
          ret = new values.Float.new(core.num.parse(number));
          if (!dart.test(p.ended)) {
            p.skip();
          }
          break;
        }
        case "d":
        {
          ret = new values.Double.new(core.num.parse(number));
          if (!dart.test(p.ended)) {
            p.skip();
          }
          break;
        }
        default:
        {
          if (number[$indexOf](".") !== -1) {
            ret = new values.Double.new(core.double.parse(number));
          } else {
            ret = new values.Integer.new(dart.asNullableInt(core.num.parse(number)));
          }
          break;
        }
      }
      return ret;
    }
    [_skipIgnored](p) {
      while (dart.test(decoder.GsonDecoder._IGNORED.hasMatch(p.actual()))) {
        p.skip();
      }
    }
  };
  (decoder.GsonDecoder.new = function() {
    ;
  }).prototype = decoder.GsonDecoder.prototype;
  dart.addTypeTests(decoder.GsonDecoder);
  dart.addTypeCaches(decoder.GsonDecoder);
  dart.setMethodSignature(decoder.GsonDecoder, () => ({
    __proto__: dart.getMethods(decoder.GsonDecoder.__proto__),
    decode: dart.fnType(dart.dynamic, [dart.dynamic]),
    decodeArray: dart.fnType(dart.legacy(core.List), [dart.dynamic]),
    decodeMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [dart.dynamic]),
    decodeString: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    decodeNumber: dart.fnType(dart.legacy(values.NumberValue), [dart.dynamic]),
    [_skipIgnored]: dart.fnType(dart.void, [dart.legacy(parsable.GsonParsable)])
  }));
  dart.setLibraryUri(decoder.GsonDecoder, L0);
  dart.defineLazy(decoder.GsonDecoder, {
    /*decoder.GsonDecoder._KEY_CHARACTERS*/get _KEY_CHARACTERS() {
      return core.RegExp.new("\\w");
    },
    set _KEY_CHARACTERS(_) {},
    /*decoder.GsonDecoder._IGNORED*/get _IGNORED() {
      return core.RegExp.new("[ \\t\\r\\n]");
    },
    set _IGNORED(_) {},
    /*decoder.GsonDecoder._PURE_STRING*/get _PURE_STRING() {
      return core.RegExp.new("[^\\{\\}\\[\\]\\,]");
    },
    set _PURE_STRING(_) {}
  }, true);
  var decoder$ = dart.privateName(gson, "Gson.decoder");
  var encoder$ = dart.privateName(gson, "Gson.encoder");
  gson.Gson = class Gson extends core.Object {
    get decoder() {
      return this[decoder$];
    }
    set decoder(value) {
      this[decoder$] = value;
    }
    get encoder() {
      return this[encoder$];
    }
    set encoder(value) {
      this[encoder$] = value;
    }
    simplify(value) {
      if (MapLOfStringL$dynamic().is(value)) {
        let map = new (IdentityMapOfStringL$dynamic()).new();
        value[$forEach](dart.fn((k, v) => {
          map[$_set](k, this.simplify(v));
        }, StringLAnddynamicToNullN()));
      } else if (ListL().is(value)) {
        let list = [];
        value[$forEach](dart.fn(v => {
          list[$add](this.simplify(v));
        }, dynamicToNullN()));
      } else if (GsonValueL().is(value)) {
        return value.toSimple();
      } else
        return value;
    }
    encode(obj, opts) {
      let beautify = opts && 'beautify' in opts ? opts.beautify : false;
      let indent = opts && 'indent' in opts ? opts.indent : 2;
      let jsonBooleans = opts && 'jsonBooleans' in opts ? opts.jsonBooleans : false;
      let quoteMapKeys = opts && 'quoteMapKeys' in opts ? opts.quoteMapKeys : false;
      return this.encoder.encode(obj, {beautify: beautify, indent: indent, jsonBooleans: jsonBooleans, quoteMapKeys: boolL().as(quoteMapKeys)});
    }
    decode(gson, opts) {
      let simplify = opts && 'simplify' in opts ? opts.simplify : false;
      return this.decoder.decode(gson);
    }
  };
  (gson.Gson.new = function() {
    this[decoder$] = new decoder.GsonDecoder.new();
    this[encoder$] = new encoder.GsonEncoder.new();
    this.decoder = new decoder.GsonDecoder.new();
  }).prototype = gson.Gson.prototype;
  dart.addTypeTests(gson.Gson);
  dart.addTypeCaches(gson.Gson);
  dart.setMethodSignature(gson.Gson, () => ({
    __proto__: dart.getMethods(gson.Gson.__proto__),
    simplify: dart.fnType(dart.dynamic, [dart.dynamic]),
    encode: dart.fnType(dart.legacy(core.String), [dart.dynamic], {beautify: dart.legacy(core.bool), indent: dart.legacy(core.int), jsonBooleans: dart.dynamic, quoteMapKeys: dart.dynamic}, {}),
    decode: dart.fnType(dart.dynamic, [dart.legacy(core.String)], {simplify: dart.dynamic}, {})
  }));
  dart.setLibraryUri(gson.Gson, L1);
  dart.setFieldSignature(gson.Gson, () => ({
    __proto__: dart.getFields(gson.Gson.__proto__),
    decoder: dart.fieldType(dart.legacy(decoder.GsonDecoder)),
    encoder: dart.fieldType(dart.legacy(encoder.GsonEncoder))
  }));
  gson.gsonEncode = function gsonEncode(obj) {
    return gson.gson.encode(obj);
  };
  gson.gsonDecode = function gsonDecode(str) {
    return gson.gson.decode(str);
  };
  dart.copyProperties(gson, {
    get gson() {
      return gson._gson;
    }
  });
  dart.defineLazy(gson, {
    /*gson._gson*/get _gson() {
      return new gson.Gson.new();
    },
    set _gson(_) {}
  }, true);
  dart.trackLibraries("packages/gson/decoder", {
    "package:gson/decoder.dart": decoder,
    "package:gson/gson.dart": gson
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["decoder.dart","gson.dart"],"names":[],"mappings":"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","file":"decoder.unsound.ddc.js"}');
  // Exports:
  return {
    decoder: decoder,
    gson: gson
  };
}));

//# sourceMappingURL=decoder.unsound.ddc.js.map
