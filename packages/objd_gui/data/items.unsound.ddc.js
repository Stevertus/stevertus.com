define(['dart_sdk'], (function load__packages__objd_gui__data__items(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var items = Object.create(dart.library);
  var $contains = dartx.contains;
  var $add = dartx.add;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_gui/data/items.dart";
  items.UsedItems = class UsedItems extends core.Object {
    static add(b) {
      if (dart.test(items.UsedItems.items[$contains](b))) return;
      items.UsedItems.items[$add](b);
    }
  };
  (items.UsedItems.new = function() {
    ;
  }).prototype = items.UsedItems.prototype;
  dart.addTypeTests(items.UsedItems);
  dart.addTypeCaches(items.UsedItems);
  dart.setLibraryUri(items.UsedItems, L0);
  dart.defineLazy(items.UsedItems, {
    /*items.UsedItems.items*/get items() {
      return JSArrayOfStringL().of([]);
    }
  }, true);
  dart.trackLibraries("packages/objd_gui/data/items", {
    "package:objd_gui/data/items.dart": items
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["items.dart"],"names":[],"mappings":";;;;;;;;;;;;;;eAGyB;AACrB,oBAAI,AAAM,iCAAS,CAAC,IAAG;AACX,MAAZ,AAAM,4BAAI,CAAC;IACb;;;;EACF;;;;;MANe,qBAAK;YAAW","file":"items.unsound.ddc.js"}');
  // Exports:
  return {
    data__items: items
  };
}));

//# sourceMappingURL=items.unsound.ddc.js.map
