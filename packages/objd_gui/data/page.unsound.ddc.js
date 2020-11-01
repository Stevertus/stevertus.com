define(['dart_sdk', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/command'], (function load__packages__objd_gui__data__page(dart_sdk, packages__objd_gui__data__gui_slot, packages__objd__basic__command) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const item = packages__objd__basic__command.basic__types__item;
  var page = Object.create(dart.library);
  const CT = Object.create(null);
  var L1 = "package:objd_gui/data/page.dart";
  var L0 = "org-dartlang-app:///packages/objd_gui/data/page.dart";
  var slots$ = dart.privateName(page, "GuiPage.slots");
  var placeholder$ = dart.privateName(page, "GuiPage.placeholder");
  var fillEmptySlots$ = dart.privateName(page, "GuiPage.fillEmptySlots");
  page.GuiPage = class GuiPage extends core.Object {
    get slots() {
      return this[slots$];
    }
    set slots(value) {
      this[slots$] = value;
    }
    get placeholder() {
      return this[placeholder$];
    }
    set placeholder(value) {
      this[placeholder$] = value;
    }
    get fillEmptySlots() {
      return this[fillEmptySlots$];
    }
    set fillEmptySlots(value) {
      this[fillEmptySlots$] = value;
    }
  };
  (page.GuiPage.new = function(slots, opts) {
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let fillEmptySlots = opts && 'fillEmptySlots' in opts ? opts.fillEmptySlots : null;
    this[slots$] = slots;
    this[placeholder$] = placeholder;
    this[fillEmptySlots$] = fillEmptySlots;
    if (!(slots != null)) dart.assertFailed(null, L0, 34, 15, "slots != null");
    ;
  }).prototype = page.GuiPage.prototype;
  dart.addTypeTests(page.GuiPage);
  dart.addTypeCaches(page.GuiPage);
  dart.setLibraryUri(page.GuiPage, L1);
  dart.setFieldSignature(page.GuiPage, () => ({
    __proto__: dart.getFields(page.GuiPage.__proto__),
    slots: dart.fieldType(dart.legacy(core.List$(dart.legacy(gui_slot.GuiSlot)))),
    placeholder: dart.fieldType(dart.legacy(item.Item)),
    fillEmptySlots: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/objd_gui/data/page", {
    "package:objd_gui/data/page.dart": page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAOgB;;;;;;IACT;;;;;;IACA;;;;;;;+BAqBE;QACA;QACA;IAFA;IACA;IACA;UACK,AAAM,KAAD,IAAI;;EAAK","file":"page.unsound.ddc.js"}');
  // Exports:
  return {
    data__page: page
  };
}));

//# sourceMappingURL=page.unsound.ddc.js.map
