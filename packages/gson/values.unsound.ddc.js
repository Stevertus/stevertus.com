define(['dart_sdk', 'packages/gson/prog'], (function load__packages__gson__values(dart_sdk, packages__gson__prog) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const prog = packages__gson__prog.prog;
  var values = Object.create(dart.library);
  var $toString = dartx.toString;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:gson/values.dart";
  values.GsonValue = class GsonValue extends core.Object {};
  (values.GsonValue.new = function() {
    ;
  }).prototype = values.GsonValue.prototype;
  dart.addTypeTests(values.GsonValue);
  dart.addTypeCaches(values.GsonValue);
  dart.setLibraryUri(values.GsonValue, L0);
  var content$ = dart.privateName(values, "CustomValue.content");
  values.CustomValue = class CustomValue extends values.GsonValue {
    get content() {
      return this[content$];
    }
    set content(value) {
      this[content$] = value;
    }
    toString() {
      return dart.toString(this.content);
    }
    toSimple() {
      return this.toString();
    }
  };
  (values.CustomValue.new = function(content) {
    this[content$] = null;
    this.content = content;
  }).prototype = values.CustomValue.prototype;
  dart.addTypeTests(values.CustomValue);
  dart.addTypeCaches(values.CustomValue);
  dart.setMethodSignature(values.CustomValue, () => ({
    __proto__: dart.getMethods(values.CustomValue.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(values.CustomValue, L0);
  dart.setFieldSignature(values.CustomValue, () => ({
    __proto__: dart.getFields(values.CustomValue.__proto__),
    content: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(values.CustomValue, ['toString']);
  var _gen = dart.privateName(values, "_gen");
  values.NumberValue = class NumberValue extends values.GsonValue {};
  (values.NumberValue.new = function() {
    this[_gen] = new prog.ErrorGenerator.new();
    ;
  }).prototype = values.NumberValue.prototype;
  dart.addTypeTests(values.NumberValue);
  dart.addTypeCaches(values.NumberValue);
  dart.setLibraryUri(values.NumberValue, L0);
  dart.setFieldSignature(values.NumberValue, () => ({
    __proto__: dart.getFields(values.NumberValue.__proto__),
    [_gen]: dart.fieldType(dart.legacy(prog.ErrorGenerator))
  }));
  var _number = dart.privateName(values, "_number");
  values.Byte = class Byte extends values.NumberValue {
    get value() {
      return this[_number];
    }
    get boolValue() {
      return this[_number] === 0 ? false : this[_number] === 1 ? true : null;
    }
    get isBool() {
      return this[_number] === 0 || this[_number] === 1;
    }
    set(v) {
      if (boolL().is(v)) {
        v = dart.dtest(v) ? 1 : 0;
      } else if (!intL().is(v)) dart.throw(this[_gen].error("You must give a boolean or a number to the set function"));
      if (dart.dtest(dart.dsend(v, '>', [127])) || dart.dtest(dart.dsend(v, '<', [-128]))) dart.throw(this[_gen].error("Byte must be between -128 and 127"));
      this[_number] = intL().as(v);
    }
    toString() {
      return dart.str(this[_number]) + "b";
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Byte.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Byte.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Byte.prototype;
  (values.Byte.Boolean = function(b, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Byte.__proto__.new.call(this);
    this.set(b);
    this[_gen] = error_generator;
  }).prototype = values.Byte.prototype;
  dart.addTypeTests(values.Byte);
  dart.addTypeCaches(values.Byte);
  dart.setMethodSignature(values.Byte, () => ({
    __proto__: dart.getMethods(values.Byte.__proto__),
    set: dart.fnType(dart.void, [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setGetterSignature(values.Byte, () => ({
    __proto__: dart.getGetters(values.Byte.__proto__),
    value: dart.legacy(core.int),
    boolValue: dart.legacy(core.bool),
    isBool: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(values.Byte, L0);
  dart.setFieldSignature(values.Byte, () => ({
    __proto__: dart.getFields(values.Byte.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(values.Byte, ['toString']);
  values.Short = class Short extends values.NumberValue {
    get value() {
      return this[_number];
    }
    set(v) {
      if (dart.notNull(v) > 32767 || dart.notNull(v) < -32768) dart.throw(this[_gen].error("Byte must be between -32768 and 32767"));
      this[_number] = v;
    }
    toString() {
      return dart.str(this[_number]) + "s";
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Short.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Short.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Short.prototype;
  dart.addTypeTests(values.Short);
  dart.addTypeCaches(values.Short);
  dart.setMethodSignature(values.Short, () => ({
    __proto__: dart.getMethods(values.Short.__proto__),
    set: dart.fnType(dart.void, [dart.legacy(core.int)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setGetterSignature(values.Short, () => ({
    __proto__: dart.getGetters(values.Short.__proto__),
    value: dart.legacy(core.int)
  }));
  dart.setLibraryUri(values.Short, L0);
  dart.setFieldSignature(values.Short, () => ({
    __proto__: dart.getFields(values.Short.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(values.Short, ['toString']);
  values.Integer = class Integer extends values.NumberValue {
    get value() {
      return this[_number];
    }
    set(v) {
      if (dart.notNull(v) > 2147483647 || dart.notNull(v) < -2147483648) dart.throw(this[_gen].error("Byte must be between -2147483648 and 2147483647"));
      this[_number] = v;
    }
    toString() {
      return dart.toString(this[_number]);
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Integer.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Integer.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Integer.prototype;
  dart.addTypeTests(values.Integer);
  dart.addTypeCaches(values.Integer);
  dart.setMethodSignature(values.Integer, () => ({
    __proto__: dart.getMethods(values.Integer.__proto__),
    set: dart.fnType(dart.void, [dart.legacy(core.int)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setGetterSignature(values.Integer, () => ({
    __proto__: dart.getGetters(values.Integer.__proto__),
    value: dart.legacy(core.int)
  }));
  dart.setLibraryUri(values.Integer, L0);
  dart.setFieldSignature(values.Integer, () => ({
    __proto__: dart.getFields(values.Integer.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(values.Integer, ['toString']);
  values.Long = class Long extends values.NumberValue {
    get value() {
      return this[_number];
    }
    set(v) {
      if (dart.notNull(v) > 9007199254740991 || dart.notNull(v) < -9007199254740991) dart.throw(this[_gen].error("Byte must be between -9223372036854775808 and 9223372036854775807"));
      this[_number] = v;
    }
    toString() {
      return dart.str(this[_number]) + "l";
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Long.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Long.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Long.prototype;
  dart.addTypeTests(values.Long);
  dart.addTypeCaches(values.Long);
  dart.setMethodSignature(values.Long, () => ({
    __proto__: dart.getMethods(values.Long.__proto__),
    set: dart.fnType(dart.void, [dart.legacy(core.int)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setGetterSignature(values.Long, () => ({
    __proto__: dart.getGetters(values.Long.__proto__),
    value: dart.legacy(core.int)
  }));
  dart.setLibraryUri(values.Long, L0);
  dart.setFieldSignature(values.Long, () => ({
    __proto__: dart.getFields(values.Long.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(values.Long, ['toString']);
  values.Float = class Float extends values.NumberValue {
    get value() {
      return this[_number];
    }
    set(v) {
      this[_number] = v;
    }
    toString() {
      return dart.str(this[_number]) + "f";
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Float.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Float.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Float.prototype;
  dart.addTypeTests(values.Float);
  dart.addTypeCaches(values.Float);
  dart.setMethodSignature(values.Float, () => ({
    __proto__: dart.getMethods(values.Float.__proto__),
    set: dart.fnType(dart.void, [dart.legacy(core.double)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.double), [])
  }));
  dart.setGetterSignature(values.Float, () => ({
    __proto__: dart.getGetters(values.Float.__proto__),
    value: dart.legacy(core.double)
  }));
  dart.setLibraryUri(values.Float, L0);
  dart.setFieldSignature(values.Float, () => ({
    __proto__: dart.getFields(values.Float.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.double))
  }));
  dart.defineExtensionMethods(values.Float, ['toString']);
  values.Double = class Double extends values.NumberValue {
    get value() {
      return this[_number];
    }
    set(v) {
      this[_number] = v;
    }
    toString() {
      return dart.str(this[_number]) + "d";
    }
    toSimple() {
      return this.value;
    }
  };
  (values.Double.new = function(num, opts) {
    let error_generator = opts && 'error_generator' in opts ? opts.error_generator : null;
    this[_number] = null;
    values.Double.__proto__.new.call(this);
    this.set(num);
    this[_gen] = error_generator;
  }).prototype = values.Double.prototype;
  dart.addTypeTests(values.Double);
  dart.addTypeCaches(values.Double);
  dart.setMethodSignature(values.Double, () => ({
    __proto__: dart.getMethods(values.Double.__proto__),
    set: dart.fnType(dart.void, [dart.legacy(core.double)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toSimple: dart.fnType(dart.legacy(core.double), [])
  }));
  dart.setGetterSignature(values.Double, () => ({
    __proto__: dart.getGetters(values.Double.__proto__),
    value: dart.legacy(core.double)
  }));
  dart.setLibraryUri(values.Double, L0);
  dart.setFieldSignature(values.Double, () => ({
    __proto__: dart.getFields(values.Double.__proto__),
    [_number]: dart.fieldType(dart.legacy(core.double))
  }));
  dart.defineExtensionMethods(values.Double, ['toString']);
  dart.trackLibraries("packages/gson/values", {
    "package:gson/values.dart": values
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["values.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;EAOA;;;;;;IAGU;;;;;;;AAQN,YAAe,eAAR;IACT;;AAIE,YAAO;IACT;;qCAZoB;IAFZ;AAGgB,IAAjB,eAAU,OAAO;EACxB;;;;;;;;;;;;;;;;;;IAce,aAAW;;EAC5B;;;;;;;;;;;AAOmB;IAAO;;AAGF,YAAA,AAAQ,mBAAG,IAAI,QAAQ,AAAQ,kBAAG,IAAI,OAAO;IAAI;;AAGpD,YAAA,AAAQ,AAAK,mBAAF,KAAK,AAAQ,kBAAG;IAAC;QAe9B;AACf,UAAM,WAAF,CAAC;AACU,QAAb,eAAI,CAAC,IAAG,IAAI;YACP,MAAQ,UAAF,CAAC,GACZ,AAEqE,WADhE,AACA,iBAAM;AACb,qBAAM,WAAF,CAAC,QAAG,qBAAS,WAAF,CAAC,QAAG,CAAC,QAClB,AAA0D,WAA/C,AAAK,iBAAM;AACR,sBAAX,UAAU,CAAC;IAClB;;AAIE,YAAoB,UAAV,iBAAQ;IACpB;;AAIE,YAAY;IACd;;8BAhCS;QAAqB;IAZ1B;AAYJ;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B;kCAGkB;QAAmB;IAlBjC;AAkBJ;AACQ,IAAN,SAAI,CAAC;AACuB,IAAtB,aAAO,eAAe;EAC9B;;;;;;;;;;;;;;;;;;;;;;;;AA+BiB;IAAO;QASX;AACX,UAAM,aAAF,CAAC,IAAG,SAAW,aAAF,CAAC,IAAG,CAAC,OACpB,AAA8D,WAAnD,AAAK,iBAAM;AACR,MAAX,gBAAU,CAAC;IAClB;;AAIE,YAAoB,UAAV,iBAAQ;IACpB;;AAIE,YAAY;IACd;;+BApBU;QAAqB;IAN3B;AAMJ;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B;;;;;;;;;;;;;;;;;;;;;;AAyBiB;IAAO;QASX;AACX,UAAM,aAAF,CAAC,IAAG,cAAgB,aAAF,CAAC,IAAG,CAAC,YACzB,AAAwE,WAA7D,AAAK,iBAAM;AACR,MAAX,gBAAU,CAAC;IAClB;;AAIE,YAAe,eAAR;IACT;;AAIE,YAAY;IACd;;iCApBY;QAAqB;IAN7B;AAMJ;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B;;;;;;;;;;;;;;;;;;;;;;AAyBiB;IAAO;QASX;AACX,UAAM,aAAF,CAAC,IAAG,oBAAsB,aAAF,CAAC,IAAG,CAAC,kBAC/B,AACwE,WAD7D,AAAK,iBACZ;AACU,MAAX,gBAAU,CAAC;IAClB;;AAIE,YAAoB,UAAV,iBAAQ;IACpB;;AAIE,YAAY;IACd;;8BArBS;QAAqB;IAN1B;AAMJ;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B;;;;;;;;;;;;;;;;;;;;;;AA0BoB;IAAO;QASX;AACE,MAAX,gBAAU,CAAC;IAClB;;AAIE,YAAoB,UAAV,iBAAQ;IACpB;;AAIE,YAAY;IACd;;+BAlBa;QAAqB;IAN3B;AAMP;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B;;;;;;;;;;;;;;;;;;;;;;AAuBoB;IAAO;QASX;AACE,MAAX,gBAAU,CAAC;IAClB;;AAIE,YAAoB,UAAV,iBAAQ;IACpB;;AAIE,YAAY;IACd;;gCAlBc;QAAqB;IAN5B;AAMP;AACU,IAAR,SAAI,GAAG;AACqB,IAAtB,aAAO,eAAe;EAC9B","file":"values.unsound.ddc.js"}');
  // Exports:
  return {
    values: values
  };
}));

//# sourceMappingURL=values.unsound.ddc.js.map
