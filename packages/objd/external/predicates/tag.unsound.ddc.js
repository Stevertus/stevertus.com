define(['dart_sdk'], (function load__packages__objd__external__predicates__tag(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var tag = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:objd/external/predicates/tag.dart";
  tag.Tag = class Tag extends core.Object {};
  (tag.Tag.new = function() {
    ;
  }).prototype = tag.Tag.prototype;
  dart.addTypeTests(tag.Tag);
  dart.addTypeCaches(tag.Tag);
  dart.setLibraryUri(tag.Tag, L0);
  tag.LocationTag = class LocationTag extends tag.Tag {};
  (tag.LocationTag.new = function() {
    ;
  }).prototype = tag.LocationTag.prototype;
  dart.addTypeTests(tag.LocationTag);
  dart.addTypeCaches(tag.LocationTag);
  dart.setLibraryUri(tag.LocationTag, L0);
  tag.ItemTag = class ItemTag extends tag.Tag {};
  (tag.ItemTag.new = function() {
    ;
  }).prototype = tag.ItemTag.prototype;
  dart.addTypeTests(tag.ItemTag);
  dart.addTypeCaches(tag.ItemTag);
  dart.setLibraryUri(tag.ItemTag, L0);
  dart.trackLibraries("packages/objd/external/predicates/tag", {
    "package:objd/external/predicates/tag.dart": tag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tag.dart"],"names":[],"mappings":";;;;;;;;;;;EAEA;;;;;;;EAEwC;;;;;;;EAEJ","file":"tag.unsound.ddc.js"}');
  // Exports:
  return {
    external__predicates__tag: tag
  };
}));

//# sourceMappingURL=tag.unsound.ddc.js.map
