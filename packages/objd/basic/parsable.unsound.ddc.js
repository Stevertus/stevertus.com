define(['dart_sdk', 'packages/gson/parsable'], (function load__packages__objd__basic__parsable(dart_sdk, packages__gson__parsable) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parsable = packages__gson__parsable.parsable;
  var parsable$ = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:objd/basic/parsable.dart";
  parsable$.Parsable = class Parsable extends parsable.GsonParsable {};
  (parsable$.Parsable.new = function(parsable) {
    parsable$.Parsable.__proto__.new.call(this, parsable);
    ;
  }).prototype = parsable$.Parsable.prototype;
  dart.addTypeTests(parsable$.Parsable);
  dart.addTypeCaches(parsable$.Parsable);
  dart.setLibraryUri(parsable$.Parsable, L0);
  dart.trackLibraries("packages/objd/basic/parsable", {
    "package:objd/basic/parsable.dart": parsable$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["parsable.dart"],"names":[],"mappings":";;;;;;;;;;qCAIkB;AAAY,gDAAM,QAAQ;;EAAC","file":"parsable.unsound.ddc.js"}');
  // Exports:
  return {
    basic__parsable: parsable$
  };
}));

//# sourceMappingURL=parsable.unsound.ddc.js.map
