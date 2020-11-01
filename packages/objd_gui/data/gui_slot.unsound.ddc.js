define(['dart_sdk', 'packages/objd/basic/types/slot'], (function load__packages__objd_gui__data__gui_slot(dart_sdk, packages__objd__basic__types__slot) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  var gui_slot = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:objd_gui/data/gui_slot.dart";
  var slot$ = dart.privateName(gui_slot, "GuiSlot.slot");
  gui_slot.GuiSlot = class GuiSlot extends core.Object {
    get slot() {
      return this[slot$];
    }
    set slot(value) {
      super.slot = value;
    }
  };
  (gui_slot.GuiSlot.new = function(slot) {
    this[slot$] = slot;
    ;
  }).prototype = gui_slot.GuiSlot.prototype;
  dart.addTypeTests(gui_slot.GuiSlot);
  dart.addTypeCaches(gui_slot.GuiSlot);
  dart.setLibraryUri(gui_slot.GuiSlot, L0);
  dart.setFieldSignature(gui_slot.GuiSlot, () => ({
    __proto__: dart.getFields(gui_slot.GuiSlot.__proto__),
    slot: dart.finalFieldType(dart.legacy(slot.Slot))
  }));
  dart.trackLibraries("packages/objd_gui/data/gui_slot", {
    "package:objd_gui/data/gui_slot.dart": gui_slot
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gui_slot.dart"],"names":[],"mappings":";;;;;;;;;;;IAMa;;;;;;;;IAME;;EAAK","file":"gui_slot.unsound.ddc.js"}');
  // Exports:
  return {
    data__gui_slot: gui_slot
  };
}));

//# sourceMappingURL=gui_slot.unsound.ddc.js.map
