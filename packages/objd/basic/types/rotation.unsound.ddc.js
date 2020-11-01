define(['dart_sdk'], (function load__packages__objd__basic__types__rotation(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var rotation = Object.create(dart.library);
  var $toString = dartx.toString;
  var $truncate = dartx.truncate;
  var $replaceAll = dartx.replaceAll;
  const CT = Object.create(null);
  var L0 = "package:objd/basic/types/rotation.dart";
  var _rotation$ = dart.privateName(rotation, "_rotation");
  var x$ = dart.privateName(rotation, "Rotation.x");
  var y$ = dart.privateName(rotation, "Rotation.y");
  rotation.Rotation = class Rotation extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      this[x$] = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      this[y$] = value;
    }
    getDirection() {
      let dir = (dart.notNull(this.x) / 90)[$truncate]();
      switch (dir) {
        case 0:
        {
          return "south";
        }
        case 1:
        {
          return "west";
        }
        case 2:
        {
          return "north";
        }
        case -1:
        {
          return "east";
        }
      }
      return "north";
    }
    toString() {
      return this[_rotation$][$replaceAll](".0", "");
    }
  };
  (rotation.Rotation.new = function(_rotation) {
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = _rotation;
    ;
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.glob = function(opts) {
    let x = opts && 'x' in opts ? opts.x : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[_rotation$] = null;
    this[x$] = x;
    this[y$] = y;
    this[_rotation$] = dart.toString(this.x) + " " + dart.toString(this.y);
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.rel = function(opts) {
    let x = opts && 'x' in opts ? opts.x : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[_rotation$] = null;
    this[x$] = x;
    this[y$] = y;
    this[_rotation$] = "~" + (this.x === 0 ? "" : dart.toString(this.x)) + " ~" + (this.y === 0 ? "" : dart.toString(this.y));
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.here = function() {
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = null;
    this[_rotation$] = "~ ~";
    this.x = this.y = 0.0;
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.north = function(opts) {
    let dx = opts && 'dx' in opts ? opts.dx : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = null;
    this[y$] = y;
    this.x = dart.notNull(rotation.Rotation.n) + dart.notNull(dx);
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.south = function(opts) {
    let dx = opts && 'dx' in opts ? opts.dx : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = null;
    this[y$] = y;
    this.x = dart.notNull(rotation.Rotation.s) + dart.notNull(dx);
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.east = function(opts) {
    let dx = opts && 'dx' in opts ? opts.dx : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = null;
    this[y$] = y;
    this.x = dart.notNull(rotation.Rotation.e) + dart.notNull(dx);
  }).prototype = rotation.Rotation.prototype;
  (rotation.Rotation.west = function(opts) {
    let dx = opts && 'dx' in opts ? opts.dx : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    this[y$] = 0.0;
    this[x$] = null;
    this[_rotation$] = null;
    this[y$] = y;
    this.x = dart.notNull(rotation.Rotation.w) + dart.notNull(dx);
  }).prototype = rotation.Rotation.prototype;
  dart.addTypeTests(rotation.Rotation);
  dart.addTypeCaches(rotation.Rotation);
  dart.setMethodSignature(rotation.Rotation, () => ({
    __proto__: dart.getMethods(rotation.Rotation.__proto__),
    getDirection: dart.fnType(dart.legacy(core.String), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(rotation.Rotation, L0);
  dart.setFieldSignature(rotation.Rotation, () => ({
    __proto__: dart.getFields(rotation.Rotation.__proto__),
    x: dart.fieldType(dart.legacy(core.double)),
    y: dart.fieldType(dart.legacy(core.double)),
    [_rotation$]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(rotation.Rotation, ['toString']);
  dart.defineLazy(rotation.Rotation, {
    /*rotation.Rotation.n*/get n() {
      return 180;
    },
    set n(_) {},
    /*rotation.Rotation.s*/get s() {
      return 0;
    },
    set s(_) {},
    /*rotation.Rotation.e*/get e() {
      return -90;
    },
    set e(_) {},
    /*rotation.Rotation.w*/get w() {
      return 90;
    },
    set w(_) {}
  }, true);
  dart.trackLibraries("packages/objd/basic/types/rotation", {
    "package:objd/basic/types/rotation.dart": rotation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rotation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IACS;;;;;;IAAG;;;;;;;AAsCJ,gBAAQ,cAAF,UAAK;AACf,cAAQ,GAAG;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;AAEX,YAAO;IACT;;AAIE,YAAO,AAAU,+BAAW,MAAM;IACpC;;oCAnDc;IAJJ,WAAI;;IAIA;;EAAU;;QACJ;QAAY;IALtB,WAAI;;IAKM;IAAY;AACe,IAA7C,mBAAc,AAAW,AAAM,cAAnB,UAAe,MAAQ,cAAF;EACnC;;QACmB;QAAY;IARrB,WAAI;;IAQK;IAAY;AAIG,IAHhC,mBAAY,AAAI,AACiB,AACxB,OADJ,AAAE,WAAG,IAAI,KAAO,cAAF,WACf,QACC,AAAE,WAAG,IAAI,KAAO,cAAF;EACrB;;IAbU,WAAI;;;AAeK,IAAjB,mBAAY;AACH,IAAT,SAAI,SAAI;EACV;;QAOuB;QAAa;IAxB1B,WAAI;;;IAwBsB;AACf,IAAnB,SAAe,aAAF,oCAAI,EAAE;EACrB;;QACuB;QAAa;IA3B1B,WAAI;;;IA2BsB;AACf,IAAnB,SAAe,aAAF,oCAAI,EAAE;EACrB;;QACsB;QAAa;IA9BzB,WAAI;;;IA8BqB;AACd,IAAnB,SAAe,aAAF,oCAAI,EAAE;EACrB;;QACsB;QAAa;IAjCzB,WAAI;;;IAiCqB;AACd,IAAnB,SAAe,aAAF,oCAAI,EAAE;EACrB;;;;;;;;;;;;;;;;;;MAhBW,mBAAC;YAAG;;;MACJ,mBAAC;YAAG;;;MACJ,mBAAC;YAAG,EAAC;;;MACL,mBAAC;YAAG","file":"rotation.unsound.ddc.js"}');
  // Exports:
  return {
    basic__types__rotation: rotation
  };
}));

//# sourceMappingURL=rotation.unsound.ddc.js.map
