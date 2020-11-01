define(['dart_sdk', 'packages/fluix_web/fluix/sidebar/sidebar-item/item'], (function load__packages__fluix_web__fluix__sidebar__sidebar(dart_sdk, packages__fluix_web__fluix__sidebar__sidebar_item__item) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const item = packages__fluix_web__fluix__sidebar__sidebar_item__item.fluix__sidebar__sidebar_item__item;
  var sidebar = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var FluidSidebarItemL = () => (FluidSidebarItemL = dart.constFn(dart.legacy(item.FluidSidebarItem)))();
  var FluidSidebarItemLTovoid = () => (FluidSidebarItemLTovoid = dart.constFn(dart.fnType(dart.void, [FluidSidebarItemL()])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/sidebar/sidebar.dart";
  var _onChangeController = dart.privateName(sidebar, "_onChangeController");
  var fixed = dart.privateName(sidebar, "FluidSidebar.fixed");
  var expanded = dart.privateName(sidebar, "FluidSidebar.expanded");
  var expandable = dart.privateName(sidebar, "FluidSidebar.expandable");
  var children = dart.privateName(sidebar, "FluidSidebar.children");
  sidebar.FluidSidebar = class FluidSidebar extends core.Object {
    get fixed() {
      return this[fixed];
    }
    set fixed(value) {
      this[fixed] = value;
    }
    get expanded() {
      return this[expanded];
    }
    set expanded(value) {
      this[expanded] = value;
    }
    get expandable() {
      return this[expandable];
    }
    set expandable(value) {
      this[expandable] = value;
    }
    get children() {
      return this[children];
    }
    set children(value) {
      this[children] = value;
    }
    get onChange() {
      return this[_onChangeController].stream;
    }
    expand() {
      this.expanded = true;
      this.children[$forEach](dart.fn(child => child.expand(), FluidSidebarItemLTovoid()));
    }
    shrink() {
      this.expanded = false;
      this.children[$forEach](dart.fn(child => child.shrink(), FluidSidebarItemLTovoid()));
    }
    handleToggleExpand() {
      if (dart.test(this.expandable)) {
        dart.test(this.expanded) ? this.shrink() : this.expand();
      }
    }
  };
  (sidebar.FluidSidebar.new = function() {
    this[fixed] = true;
    this[expanded] = false;
    this[expandable] = true;
    this[_onChangeController] = StreamControllerOfboolL().broadcast();
    this[children] = null;
    ;
  }).prototype = sidebar.FluidSidebar.prototype;
  dart.addTypeTests(sidebar.FluidSidebar);
  dart.addTypeCaches(sidebar.FluidSidebar);
  dart.setMethodSignature(sidebar.FluidSidebar, () => ({
    __proto__: dart.getMethods(sidebar.FluidSidebar.__proto__),
    expand: dart.fnType(dart.dynamic, []),
    shrink: dart.fnType(dart.dynamic, []),
    handleToggleExpand: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(sidebar.FluidSidebar, () => ({
    __proto__: dart.getGetters(sidebar.FluidSidebar.__proto__),
    onChange: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setLibraryUri(sidebar.FluidSidebar, L0);
  dart.setFieldSignature(sidebar.FluidSidebar, () => ({
    __proto__: dart.getFields(sidebar.FluidSidebar.__proto__),
    fixed: dart.fieldType(dart.legacy(core.bool)),
    expanded: dart.fieldType(dart.legacy(core.bool)),
    expandable: dart.fieldType(dart.legacy(core.bool)),
    [_onChangeController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    children: dart.fieldType(dart.legacy(core.List$(dart.legacy(item.FluidSidebarItem))))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/sidebar/sidebar", {
    "package:fluix_web/fluix/sidebar/sidebar.dart": sidebar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sidebar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAmBuB;;;;;;IAEG;;;;;;IACE;;;;;;IAQH;;;;;;;AAHM,YAAA,AAAoB;IAAM;;AAMtC,MAAf,gBAAW;AACgC,MAA3C,AAAS,wBAAQ,QAAC,SAAU,AAAM,KAAD;IACnC;;AAEkB,MAAhB,gBAAW;AACgC,MAA3C,AAAS,wBAAQ,QAAC,SAAU,AAAM,KAAD;IACnC;;AAEE,oBAAG;AAC6B,kBAA9B,iBAAW,gBAAW;;IAG1B;;;IA1BqB,cAAQ;IAEL,iBAAW;IACT,mBAAa;IAEjC,4BAAsB;IAML;;EAiBzB","file":"sidebar.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__sidebar__sidebar: sidebar
  };
}));

//# sourceMappingURL=sidebar.unsound.ddc.js.map
