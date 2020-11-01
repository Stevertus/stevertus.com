define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/types/slot'], (function load__packages__objd_gui__data__interactive_slot(dart_sdk, packages__objd__basic__command, packages__objd_gui__data__gui_slot, packages__objd__basic__types__slot) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget = packages__objd__basic__command.basic__widget;
  const score = packages__objd__basic__command.basic__score;
  const item = packages__objd__basic__command.basic__types__item;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  var interactive_slot = Object.create(dart.library);
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  const CT = Object.create(null);
  var L1 = "package:objd_gui/data/interactive_slot.dart";
  var L0 = "org-dartlang-app:///packages/objd_gui/data/interactive_slot.dart";
  var _actions = dart.privateName(interactive_slot, "_actions");
  var item$ = dart.privateName(interactive_slot, "Interactive.item");
  var countScore$ = dart.privateName(interactive_slot, "Interactive.countScore");
  interactive_slot.Interactive = class Interactive extends gui_slot.GuiSlot {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get countScore() {
      return this[countScore$];
    }
    set countScore(value) {
      super.countScore = value;
    }
    get actions() {
      let t0;
      t0 = this[_actions];
      return t0 == null ? JSArrayOfWidgetL().of([]) : t0;
    }
    applyWhenPossible(opts) {
      let t0, t0$, t0$0, t0$1;
      let item = opts && 'item' in opts ? opts.item : null;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      let actions = opts && 'actions' in opts ? opts.actions : null;
      let count = opts && 'count' in opts ? opts.count : null;
      return new interactive_slot.Interactive.new((t0 = item, t0 == null ? this.item : t0), {slot: (t0$ = slot, t0$ == null ? this.slot : t0$), actions: (t0$0 = actions, t0$0 == null ? this.actions : t0$0), countScore: (t0$1 = count, t0$1 == null ? this.countScore : t0$1)});
    }
  };
  (interactive_slot.Interactive.new = function(item, opts) {
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let countScore = opts && 'countScore' in opts ? opts.countScore : null;
    this[item$] = item;
    this[countScore$] = countScore;
    this[_actions] = actions;
    if (!(item != null)) dart.assertFailed(null, L0, 24, 16, "item != null");
    interactive_slot.Interactive.__proto__.new.call(this, slot);
    ;
  }).prototype = interactive_slot.Interactive.prototype;
  dart.addTypeTests(interactive_slot.Interactive);
  dart.addTypeCaches(interactive_slot.Interactive);
  dart.setMethodSignature(interactive_slot.Interactive, () => ({
    __proto__: dart.getMethods(interactive_slot.Interactive.__proto__),
    applyWhenPossible: dart.fnType(dart.legacy(interactive_slot.Interactive), [], {actions: dart.legacy(core.List$(dart.legacy(widget.Widget))), count: dart.legacy(score.Score), item: dart.legacy(item.Item), slot: dart.legacy(slot.Slot)}, {})
  }));
  dart.setGetterSignature(interactive_slot.Interactive, () => ({
    __proto__: dart.getGetters(interactive_slot.Interactive.__proto__),
    actions: dart.legacy(core.List$(dart.legacy(widget.Widget)))
  }));
  dart.setLibraryUri(interactive_slot.Interactive, L1);
  dart.setFieldSignature(interactive_slot.Interactive, () => ({
    __proto__: dart.getFields(interactive_slot.Interactive.__proto__),
    item: dart.finalFieldType(dart.legacy(item.Item)),
    [_actions]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    countScore: dart.finalFieldType(dart.legacy(score.Score))
  }));
  dart.trackLibraries("packages/objd_gui/data/interactive_slot", {
    "package:objd_gui/data/interactive_slot.dart": interactive_slot
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interactive_slot.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAUa;;;;;;IAEC;;;;;;;;AAEgB;0BAAY;IAAE;;;UAcnC;UACA;UACQ;UACP;AAEJ,mDACO,KAAL,IAAI,QAAJ,OAAa,yBACF,MAAL,IAAI,SAAJ,OAAa,4BACF,OAAR,OAAO,UAAP,OAAgB,mCACP,OAAN,KAAK,UAAL,OAAS;IACtB;;+CApBE;QACA;QACQ;QACR;IAHA;IAGA;IACQ,iBAAE,OAAO;UACX,AAAK,IAAD,IAAI;AACf,0DAAM,IAAI;;EAAC","file":"interactive_slot.unsound.ddc.js"}');
  // Exports:
  return {
    data__interactive_slot: interactive_slot
  };
}));

//# sourceMappingURL=interactive_slot.unsound.ddc.js.map
