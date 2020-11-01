define(['dart_sdk'], (function load__packages__fluix_web__fluix__sidebar__sidebar_item__item(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var item = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/sidebar/sidebar-item/item.dart";
  var _active = dart.privateName(item, "_active");
  var _expanded = dart.privateName(item, "_expanded");
  var icon = dart.privateName(item, "FluidSidebarItem.icon");
  var text = dart.privateName(item, "FluidSidebarItem.text");
  item.FluidSidebarItem = class FluidSidebarItem extends core.Object {
    get icon() {
      return this[icon];
    }
    set icon(value) {
      this[icon] = value;
    }
    get text() {
      return this[text];
    }
    set text(value) {
      this[text] = value;
    }
    set active(v) {
      return this[_active] = v;
    }
    get active() {
      return this[_active] != null ? this[_active] : false;
    }
    set expanded(v) {
      return this[_expanded] = v;
    }
    get expanded() {
      return this[_expanded];
    }
    expand() {
      this[_expanded] = true;
    }
    shrink() {
      this[_expanded] = false;
    }
  };
  (item.FluidSidebarItem.new = function() {
    this[icon] = null;
    this[text] = null;
    this[_active] = null;
    this[_expanded] = false;
    ;
  }).prototype = item.FluidSidebarItem.prototype;
  dart.addTypeTests(item.FluidSidebarItem);
  dart.addTypeCaches(item.FluidSidebarItem);
  dart.setMethodSignature(item.FluidSidebarItem, () => ({
    __proto__: dart.getMethods(item.FluidSidebarItem.__proto__),
    expand: dart.fnType(dart.void, []),
    shrink: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(item.FluidSidebarItem, () => ({
    __proto__: dart.getGetters(item.FluidSidebarItem.__proto__),
    active: dart.legacy(core.bool),
    expanded: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(item.FluidSidebarItem, () => ({
    __proto__: dart.getSetters(item.FluidSidebarItem.__proto__),
    active: dart.legacy(core.bool),
    expanded: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(item.FluidSidebarItem, L0);
  dart.setFieldSignature(item.FluidSidebarItem, () => ({
    __proto__: dart.getFields(item.FluidSidebarItem.__proto__),
    icon: dart.fieldType(dart.legacy(core.String)),
    text: dart.fieldType(dart.legacy(core.String)),
    [_active]: dart.fieldType(dart.legacy(core.bool)),
    [_expanded]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/sidebar/sidebar-item/item", {
    "package:fluix_web/fluix/sidebar/sidebar-item/item.dart": item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["item.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAYS;;;;;;IAEA;;;;;;eAES;AAAM,6BAAU,CAAC;;;AAEd,YAAA,AAAQ,kBAAG,OAAO,gBAAU;IAAK;iBAGlC;AAAM,+BAAY,CAAC;;;AAChB;IAAS;;AAKZ,MAAhB,kBAAY;IACd;;AAGmB,MAAjB,kBAAY;IACd;;;IApBO;IAEA;IAGF;IAOA,kBAAY;;EASnB","file":"item.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__sidebar__sidebar_item__item: item
  };
}));

//# sourceMappingURL=item.unsound.ddc.js.map
