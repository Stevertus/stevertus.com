define(['dart_sdk', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/types/slot'], (function load__packages__objd_gui__data__empty(dart_sdk, packages__objd_gui__data__gui_slot, packages__objd__basic__types__slot) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  var empty = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:objd_gui/data/empty.dart";
  empty.EmptySlot = class EmptySlot extends gui_slot.GuiSlot {
    applyWhenPossible(opts) {
      let t0;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      return new empty.EmptySlot.new({slot: (t0 = this.slot, t0 == null ? slot : t0)});
    }
  };
  (empty.EmptySlot.new = function(opts) {
    let slot = opts && 'slot' in opts ? opts.slot : null;
    empty.EmptySlot.__proto__.new.call(this, slot);
    ;
  }).prototype = empty.EmptySlot.prototype;
  dart.addTypeTests(empty.EmptySlot);
  dart.addTypeCaches(empty.EmptySlot);
  dart.setMethodSignature(empty.EmptySlot, () => ({
    __proto__: dart.getMethods(empty.EmptySlot.__proto__),
    applyWhenPossible: dart.fnType(dart.legacy(empty.EmptySlot), [], {slot: dart.legacy(slot.Slot)}, {})
  }));
  dart.setLibraryUri(empty.EmptySlot, L0);
  dart.trackLibraries("packages/objd_gui/data/empty", {
    "package:objd_gui/data/empty.dart": empty
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["empty.dart"],"names":[],"mappings":";;;;;;;;;;;;;UAWoC;AAC9B,6CAA0B,sBAAL,OAAQ,IAAI;IAAC;;;QAJtB;AAAS,6CAAM,IAAI;;EAAC","file":"empty.unsound.ddc.js"}');
  // Exports:
  return {
    data__empty: empty
  };
}));

//# sourceMappingURL=empty.unsound.ddc.js.map
