define(['dart_sdk'], (function load__packages__fluix_web__fluix__appbar__appbar(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var appbar = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/appbar/appbar.dart";
  var fixed = dart.privateName(appbar, "FluidAppbar.fixed");
  appbar.FluidAppbar = class FluidAppbar extends core.Object {
    get fixed() {
      return this[fixed];
    }
    set fixed(value) {
      this[fixed] = value;
    }
  };
  (appbar.FluidAppbar.new = function() {
    this[fixed] = true;
    ;
  }).prototype = appbar.FluidAppbar.prototype;
  dart.addTypeTests(appbar.FluidAppbar);
  dart.addTypeCaches(appbar.FluidAppbar);
  dart.setLibraryUri(appbar.FluidAppbar, L0);
  dart.setFieldSignature(appbar.FluidAppbar, () => ({
    __proto__: dart.getFields(appbar.FluidAppbar.__proto__),
    fixed: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/appbar/appbar", {
    "package:fluix_web/fluix/appbar/appbar.dart": appbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["appbar.dart"],"names":[],"mappings":";;;;;;;;;;IAcuB;;;;;;;;kBAAQ;;EAE/B","file":"appbar.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__appbar__appbar: appbar
  };
}));

//# sourceMappingURL=appbar.unsound.ddc.js.map
