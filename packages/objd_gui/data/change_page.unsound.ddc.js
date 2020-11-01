define(['dart_sdk', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/types/slot', 'packages/objd/basic/command'], (function load__packages__objd_gui__data__change_page(dart_sdk, packages__objd_gui__data__gui_slot, packages__objd__basic__types__slot, packages__objd__basic__command) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  const item = packages__objd__basic__command.basic__types__item;
  var change_page = Object.create(dart.library);
  var $toString = dartx.toString;
  var ChangePageModeL = () => (ChangePageModeL = dart.constFn(dart.legacy(change_page.ChangePageMode)))();
  const CT = Object.create(null);
  var L1 = "package:objd_gui/data/change_page.dart";
  var L0 = "org-dartlang-app:///packages/objd_gui/data/change_page.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name$]: "ChangePageMode.exact",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name$]: "ChangePageMode.prev",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name$]: "ChangePageMode.next",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.constList([C1 || CT.C1, C2 || CT.C2, C0 || CT.C0], ChangePageModeL());
    }
  }, false);
  var _name$ = dart.privateName(change_page, "_name");
  var C0;
  var mode$ = dart.privateName(change_page, "ChangePage.mode");
  var page$ = dart.privateName(change_page, "ChangePage.page");
  var item$ = dart.privateName(change_page, "ChangePage.item");
  change_page.ChangePage = class ChangePage extends gui_slot.GuiSlot {
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    static next(item, opts) {
      let slot = opts && 'slot' in opts ? opts.slot : null;
      return new change_page.ChangePage.new(1, item, {slot: slot, mode: change_page.ChangePageMode.next});
    }
    static prev(item, opts) {
      let slot = opts && 'slot' in opts ? opts.slot : null;
      return new change_page.ChangePage.new(-1, item, {slot: slot, mode: change_page.ChangePageMode.prev});
    }
    applyWhenPossible(opts) {
      let t0, t0$;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      let mode = opts && 'mode' in opts ? opts.mode : null;
      return new change_page.ChangePage.new(this.page, this.item, {slot: (t0 = this.slot, t0 == null ? slot : t0), mode: (t0$ = this.mode, t0$ == null ? mode : t0$)});
    }
  };
  (change_page.ChangePage.new = function(page, item, opts) {
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let mode = opts && 'mode' in opts ? opts.mode : C0 || CT.C0;
    this[page$] = page;
    this[item$] = item;
    this[mode$] = mode;
    if (!(page != null)) dart.assertFailed(null, L0, 18, 16, "page != null");
    if (!(item != null)) dart.assertFailed(null, L0, 19, 16, "item != null");
    if (!(mode != null)) dart.assertFailed(null, L0, 20, 16, "mode != null");
    change_page.ChangePage.__proto__.new.call(this, slot);
    ;
  }).prototype = change_page.ChangePage.prototype;
  dart.addTypeTests(change_page.ChangePage);
  dart.addTypeCaches(change_page.ChangePage);
  dart.setMethodSignature(change_page.ChangePage, () => ({
    __proto__: dart.getMethods(change_page.ChangePage.__proto__),
    applyWhenPossible: dart.fnType(dart.legacy(change_page.ChangePage), [], {mode: dart.legacy(change_page.ChangePageMode), slot: dart.legacy(slot.Slot)}, {})
  }));
  dart.setLibraryUri(change_page.ChangePage, L1);
  dart.setFieldSignature(change_page.ChangePage, () => ({
    __proto__: dart.getFields(change_page.ChangePage.__proto__),
    mode: dart.finalFieldType(dart.legacy(change_page.ChangePageMode)),
    page: dart.finalFieldType(dart.legacy(core.int)),
    item: dart.finalFieldType(dart.legacy(item.Item))
  }));
  var C1;
  var C2;
  var C3;
  change_page.ChangePageMode = class ChangePageMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (change_page.ChangePageMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = change_page.ChangePageMode.prototype;
  dart.addTypeTests(change_page.ChangePageMode);
  dart.addTypeCaches(change_page.ChangePageMode);
  dart.setMethodSignature(change_page.ChangePageMode, () => ({
    __proto__: dart.getMethods(change_page.ChangePageMode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(change_page.ChangePageMode, L1);
  dart.setFieldSignature(change_page.ChangePageMode, () => ({
    __proto__: dart.getFields(change_page.ChangePageMode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(change_page.ChangePageMode, ['toString']);
  change_page.ChangePageMode.prev = C1 || CT.C1;
  change_page.ChangePageMode.next = C2 || CT.C2;
  change_page.ChangePageMode.exact = C0 || CT.C0;
  change_page.ChangePageMode.values = C3 || CT.C3;
  dart.trackLibraries("packages/objd_gui/data/change_page", {
    "package:objd_gui/data/change_page.dart": change_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["change_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOuB;;;;;;IACX;;;;;;IACC;;;;;;gBAaJ;UACA;AAEH,4CAAW,GAAG,IAAI,SAAQ,IAAI,QAAuB;IAAK;gBAEvD;UACA;AAEH,4CAAW,CAAC,GAAG,IAAI,SAAQ,IAAI,QAAuB;IAAK;;;UAG5B;UAAqB;AAAU,4CAC5D,WACA,mBACgB,sBAAL,OAAQ,IAAI,eACP,wBAAL,OAAQ,IAAI;IACxB;;yCAzBE,MACA;QACA;QACA;IAHA;IACA;IAEA;UACM,AAAK,IAAD,IAAI;UACR,AAAK,IAAD,IAAI;UACR,AAAK,IAAD,IAAI;AACf,oDAAM,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;IAqBqB;;oDAAnC;;;;EAAmC","file":"change_page.unsound.ddc.js"}');
  // Exports:
  return {
    data__change_page: change_page
  };
}));

//# sourceMappingURL=change_page.unsound.ddc.js.map
