define(['dart_sdk'], (function load__packages__fluix_web__fluix__list__list_item__list_item(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var list_item = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/list/list-item/list-item.dart";
  var _clickable = dart.privateName(list_item, "_clickable");
  var _selected = dart.privateName(list_item, "_selected");
  var icon = dart.privateName(list_item, "FluidListItem.icon");
  list_item.FluidListItem = class FluidListItem extends core.Object {
    get icon() {
      return this[icon];
    }
    set icon(value) {
      this[icon] = value;
    }
    set clickable(val) {
      return this[_clickable] = val;
    }
    get clickable() {
      return this[_clickable] != null ? this[_clickable] : false;
    }
    set selected(val) {
      return this[_selected] = val;
    }
    get selected() {
      return this[_selected] != null ? this[_selected] : false;
    }
    get cssClasses() {
      return new (IdentityMapOfStringL$boolL()).from(["clickable", this.clickable, "selected", this.selected]);
    }
  };
  (list_item.FluidListItem.new = function() {
    this[icon] = null;
    this[_clickable] = null;
    this[_selected] = null;
    ;
  }).prototype = list_item.FluidListItem.prototype;
  dart.addTypeTests(list_item.FluidListItem);
  dart.addTypeCaches(list_item.FluidListItem);
  dart.setGetterSignature(list_item.FluidListItem, () => ({
    __proto__: dart.getGetters(list_item.FluidListItem.__proto__),
    clickable: dart.legacy(core.bool),
    selected: dart.legacy(core.bool),
    cssClasses: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.bool)))
  }));
  dart.setSetterSignature(list_item.FluidListItem, () => ({
    __proto__: dart.getSetters(list_item.FluidListItem.__proto__),
    clickable: dart.legacy(core.bool),
    selected: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(list_item.FluidListItem, L0);
  dart.setFieldSignature(list_item.FluidListItem, () => ({
    __proto__: dart.getFields(list_item.FluidListItem.__proto__),
    icon: dart.fieldType(dart.legacy(core.String)),
    [_clickable]: dart.fieldType(dart.legacy(core.bool)),
    [_selected]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/list/list-item/list-item", {
    "package:fluix_web/fluix/list/list-item/list-item.dart": list_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list-item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAcS;;;;;;kBAGY;AAAQ,gCAAa,GAAG;;;AACrB,YAAA,AAAW,qBAAG,OAAO,mBAAa;IAAK;iBAI3C;AAAQ,+BAAY,GAAG;;;AACpB,YAAA,AAAU,oBAAG,OAAO,kBAAY;IAAK;;AAEtB,sDAC9B,aAAa,gBACb,YAAY;IACb;;;IAdE;IACF;IAKA;;EASP","file":"list-item.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__list__list_item__list_item: list_item
  };
}));

//# sourceMappingURL=list-item.unsound.ddc.js.map
