define(['dart_sdk'], (function load__packages__fluix_web__fluix__tag__tag(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tag = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/tag/tag.dart";
  var value$ = dart.privateName(tag, "FluidTag.value");
  var disabled = dart.privateName(tag, "FluidTag.disabled");
  tag.FluidTag = class FluidTag extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
  };
  (tag.FluidTag.new = function() {
    this[value$] = null;
    this[disabled] = null;
    ;
  }).prototype = tag.FluidTag.prototype;
  dart.addTypeTests(tag.FluidTag);
  dart.addTypeCaches(tag.FluidTag);
  dart.setLibraryUri(tag.FluidTag, L0);
  dart.setFieldSignature(tag.FluidTag, () => ({
    __proto__: dart.getFields(tag.FluidTag.__proto__),
    value: dart.fieldType(dart.legacy(core.bool)),
    disabled: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/tag/tag", {
    "package:fluix_web/fluix/tag/tag.dart": tag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tag.dart"],"names":[],"mappings":";;;;;;;;;;;IAUO;;;;;;IAEA;;;;;;;;IAFA;IAEA;;EACP","file":"tag.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__tag__tag: tag
  };
}));

//# sourceMappingURL=tag.unsound.ddc.js.map
