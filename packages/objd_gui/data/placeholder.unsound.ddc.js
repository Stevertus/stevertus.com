define(['dart_sdk', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/command', 'packages/objd/basic/types/slot'], (function load__packages__objd_gui__data__placeholder(dart_sdk, packages__objd_gui__data__gui_slot, packages__objd__basic__command, packages__objd__basic__types__slot) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const item = packages__objd__basic__command.basic__types__item;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  var placeholder = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:objd_gui/data/placeholder.dart";
  var item$ = dart.privateName(placeholder, "Placeholder.item");
  placeholder.Placeholder = class Placeholder extends gui_slot.GuiSlot {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    applyWhenPossible(opts) {
      let t0, t0$;
      let item = opts && 'item' in opts ? opts.item : null;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      return new placeholder.Placeholder.new({item: (t0 = this.item, t0 == null ? item : t0), slot: (t0$ = this.slot, t0$ == null ? slot : t0$)});
    }
  };
  (placeholder.Placeholder.new = function(opts) {
    let item = opts && 'item' in opts ? opts.item : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    this[item$] = item;
    placeholder.Placeholder.__proto__.new.call(this, slot);
    ;
  }).prototype = placeholder.Placeholder.prototype;
  dart.addTypeTests(placeholder.Placeholder);
  dart.addTypeCaches(placeholder.Placeholder);
  dart.setMethodSignature(placeholder.Placeholder, () => ({
    __proto__: dart.getMethods(placeholder.Placeholder.__proto__),
    applyWhenPossible: dart.fnType(dart.legacy(placeholder.Placeholder), [], {item: dart.legacy(item.Item), slot: dart.legacy(slot.Slot)}, {})
  }));
  dart.setLibraryUri(placeholder.Placeholder, L0);
  dart.setFieldSignature(placeholder.Placeholder, () => ({
    __proto__: dart.getFields(placeholder.Placeholder.__proto__),
    item: dart.finalFieldType(dart.legacy(item.Item))
  }));
  dart.trackLibraries("packages/objd_gui/data/placeholder", {
    "package:objd_gui/data/placeholder.dart": placeholder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["placeholder.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAOa;;;;;;;;UAMyB;UAAW;AAC3C,qDAA4B,sBAAL,OAAQ,IAAI,eAAkB,wBAAL,OAAQ,IAAI;IAAC;;;QAJ/C;QAAW;IAAX;AAAoB,qDAAM,IAAI;;EAAC","file":"placeholder.unsound.ddc.js"}');
  // Exports:
  return {
    data__placeholder: placeholder
  };
}));

//# sourceMappingURL=placeholder.unsound.ddc.js.map
