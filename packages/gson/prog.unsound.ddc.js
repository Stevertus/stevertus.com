define(['dart_sdk'], (function load__packages__gson__prog(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var prog = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:gson/prog.dart";
  prog.ErrorGenerator = class ErrorGenerator extends core.Object {
    error(error) {
      return core.Exception.new(error);
    }
  };
  (prog.ErrorGenerator.new = function() {
    ;
  }).prototype = prog.ErrorGenerator.prototype;
  dart.addTypeTests(prog.ErrorGenerator);
  dart.addTypeCaches(prog.ErrorGenerator);
  dart.setMethodSignature(prog.ErrorGenerator, () => ({
    __proto__: dart.getMethods(prog.ErrorGenerator.__proto__),
    error: dart.fnType(dart.legacy(core.Exception), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(prog.ErrorGenerator, L0);
  dart.trackLibraries("packages/gson/prog", {
    "package:gson/prog.dart": prog
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["prog.dart"],"names":[],"mappings":";;;;;;;;;UAQyB;AACrB,YAAO,oBAAU,KAAK;IACxB;;;;EALgB","file":"prog.unsound.ddc.js"}');
  // Exports:
  return {
    prog: prog
  };
}));

//# sourceMappingURL=prog.unsound.ddc.js.map
