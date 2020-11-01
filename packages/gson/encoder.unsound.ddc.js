define(['dart_sdk', 'packages/gson/values'], (function load__packages__gson__encoder(dart_sdk, packages__gson__values) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const values = packages__gson__values.values;
  var encoder = Object.create(dart.library);
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $length = dartx.length;
  var $_get = dartx._get;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var GsonValueL = () => (GsonValueL = dart.constFn(dart.legacy(values.GsonValue)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var dynamicAnddynamicToNullN = () => (dynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:gson/encoder.dart";
  var _repeatString = dart.privateName(encoder, "_repeatString");
  encoder.GsonEncoder = class GsonEncoder extends core.Object {
    encode(obj, opts) {
      let beautify = opts && 'beautify' in opts ? opts.beautify : false;
      let indent = opts && 'indent' in opts ? opts.indent : 2;
      let quoteMapKeys = opts && 'quoteMapKeys' in opts ? opts.quoteMapKeys : false;
      let jsonBooleans = opts && 'jsonBooleans' in opts ? opts.jsonBooleans : false;
      if (dart.test(beautify)) return this.beautyEncode(obj, {indent: indent, quoteMapKeys: quoteMapKeys, jsonBooleans: jsonBooleans})[$join]("\n");
      if (boolL().is(obj)) {
        return dart.dtest(jsonBooleans) ? dart.test(obj) ? "true" : "false" : dart.test(obj) ? "1b" : "0b";
      }
      if (doubleL().is(obj)) {
        return dart.toString(obj) + "d";
      }
      if (GsonValueL().is(obj)) {
        return dart.toString(obj);
      }
      if (ListL().is(obj)) {
        let cont = JSArrayOfStringL().of([]);
        obj[$forEach](dart.fn(e => {
          cont[$add](this.encode(e, {indent: indent, beautify: beautify, quoteMapKeys: quoteMapKeys, jsonBooleans: jsonBooleans}));
        }, dynamicToNullN()));
        return "[" + dart.notNull(cont[$join](",")) + "]";
      }
      if (MapL().is(obj)) {
        let cont = JSArrayOfStringL().of([]);
        obj[$forEach](dart.fn((k, v) => {
          if (dart.test(quoteMapKeys)) {
            k = convert.json.encode(k);
          }
          cont[$add](dart.str(k) + ":" + dart.str(this.encode(v, {indent: indent, beautify: beautify, quoteMapKeys: quoteMapKeys, jsonBooleans: jsonBooleans})));
        }, dynamicAnddynamicToNullN()));
        return "{" + dart.notNull(cont[$join](",")) + "}";
      }
      return convert.json.encode(obj);
    }
    beautyEncode(obj, opts) {
      let indent = opts && 'indent' in opts ? opts.indent : 2;
      let quoteMapKeys = opts && 'quoteMapKeys' in opts ? opts.quoteMapKeys : false;
      let jsonBooleans = opts && 'jsonBooleans' in opts ? opts.jsonBooleans : false;
      if (boolL().is(obj)) {
        return JSArrayOfStringL().of([dart.dtest(jsonBooleans) ? dart.test(obj) ? "true" : "false" : dart.test(obj) ? "1b" : "0b"]);
      }
      if (doubleL().is(obj)) {
        return JSArrayOfStringL().of([dart.toString(obj) + "d"]);
      }
      if (GsonValueL().is(obj)) {
        return JSArrayOfStringL().of([dart.toString(obj)]);
      }
      if (ListL().is(obj)) {
        if (obj[$length] === 0) return JSArrayOfStringL().of(["[]"]);
        let cont = JSArrayOfStringL().of(["["]);
        for (let c = 0; c < dart.notNull(obj[$length]); c = c + 1) {
          let e = this.beautyEncode(obj[$_get](c), {indent: indent, quoteMapKeys: quoteMapKeys, jsonBooleans: jsonBooleans});
          for (let i = 0; i < dart.notNull(e[$length]); i = i + 1) {
            cont[$add](dart.notNull(this[_repeatString](" ", indent)) + dart.notNull(e[$_get](i)) + (i === dart.notNull(e[$length]) - 1 && c < dart.notNull(obj[$length]) - 1 ? "," : ""));
          }
        }
        cont[$add]("]");
        return cont;
      }
      if (MapL().is(obj)) {
        if (obj[$length] === 0) return JSArrayOfStringL().of(["{}"]);
        let cont = JSArrayOfStringL().of(["{"]);
        let c = 0;
        obj[$forEach](dart.fn((k, v) => {
          if (dart.test(quoteMapKeys)) {
            k = convert.json.encode(k);
          }
          let e = this.beautyEncode(v, {indent: indent, quoteMapKeys: quoteMapKeys, jsonBooleans: jsonBooleans});
          for (let i = 0; i < dart.notNull(e[$length]); i = i + 1) {
            cont[$add](dart.notNull(this[_repeatString](" ", indent)) + dart.notNull(core.String.as(i === 0 ? dart.dsend(k, '+', [": "]) : "")) + dart.notNull(e[$_get](i)) + (i === dart.notNull(e[$length]) - 1 && c < dart.notNull(obj[$length]) - 1 ? "," : ""));
          }
          c = c + 1;
        }, dynamicAnddynamicToNullN()));
        cont[$add]("}");
        return cont;
      }
      return JSArrayOfStringL().of([convert.json.encode(obj)]);
    }
    [_repeatString](s, number) {
      let ret = "";
      for (let i = 0; i < dart.notNull(number); i = i + 1) {
        ret = ret + dart.notNull(s);
      }
      return ret;
    }
  };
  (encoder.GsonEncoder.new = function() {
    ;
  }).prototype = encoder.GsonEncoder.prototype;
  dart.addTypeTests(encoder.GsonEncoder);
  dart.addTypeCaches(encoder.GsonEncoder);
  dart.setMethodSignature(encoder.GsonEncoder, () => ({
    __proto__: dart.getMethods(encoder.GsonEncoder.__proto__),
    encode: dart.fnType(dart.legacy(core.String), [dart.dynamic], {beautify: dart.legacy(core.bool), indent: dart.legacy(core.int), jsonBooleans: dart.dynamic, quoteMapKeys: dart.legacy(core.bool)}, {}),
    beautyEncode: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.dynamic], {indent: dart.legacy(core.int), jsonBooleans: dart.dynamic, quoteMapKeys: dart.legacy(core.bool)}, {}),
    [_repeatString]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(encoder.GsonEncoder, L0);
  dart.trackLibraries("packages/gson/encoder", {
    "package:gson/encoder.dart": encoder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["encoder.dart"],"names":[],"mappings":"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","file":"encoder.unsound.ddc.js"}');
  // Exports:
  return {
    encoder: encoder
  };
}));

//# sourceMappingURL=encoder.unsound.ddc.js.map
