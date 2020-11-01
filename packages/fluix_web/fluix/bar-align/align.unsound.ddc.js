define(['dart_sdk'], (function load__packages__fluix_web__fluix__bar_align__align(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var align = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/bar-align/align.dart";
  var fixed = dart.privateName(align, "FluidBarAlign.fixed");
  align.FluidBarAlign = class FluidBarAlign extends core.Object {
    get fixed() {
      return this[fixed];
    }
    set fixed(value) {
      this[fixed] = value;
    }
  };
  (align.FluidBarAlign.new = function() {
    this[fixed] = true;
    ;
  }).prototype = align.FluidBarAlign.prototype;
  dart.addTypeTests(align.FluidBarAlign);
  dart.addTypeCaches(align.FluidBarAlign);
  dart.setLibraryUri(align.FluidBarAlign, L0);
  dart.setFieldSignature(align.FluidBarAlign, () => ({
    __proto__: dart.getFields(align.FluidBarAlign.__proto__),
    fixed: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/bar-align/align", {
    "package:fluix_web/fluix/bar-align/align.dart": align
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["align.dart"],"names":[],"mappings":";;;;;;;;;;IAauB;;;;;;;;kBAAQ;;EAE/B","file":"align.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__bar_align__align: align
  };
}));

//# sourceMappingURL=align.unsound.ddc.js.map
