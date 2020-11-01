define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__fluix_web__fluix__icon__icon(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var icon = Object.create(dart.library);
  var $text = dartx.text;
  var $classes = dartx.classes;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/icon/icon.dart";
  var outline = dart.privateName(icon, "FluidIcon.outline");
  var size = dart.privateName(icon, "FluidIcon.size");
  var icon$ = dart.privateName(icon, "FluidIcon.icon");
  var element$ = dart.privateName(icon, "FluidIcon.element");
  icon.FluidIcon = class FluidIcon extends core.Object {
    get outline() {
      return this[outline];
    }
    set outline(value) {
      this[outline] = value;
    }
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get sizeStyle() {
      return new (IdentityMapOfStringL$StringL()).from(["font-size", dart.str(this.size) + "px"]);
    }
    get isOutline() {
      return this.outline != null ? this.outline : false;
    }
    ngOnInit() {
      if (this.icon != null) this.applyClass(dart.notNull(this.icon) + (dart.test(this.isOutline) ? "Outline" : ""));
      if (this.element.firstChild[$text] != null) this.applyClass(dart.notNull(this.element.firstChild[$text]) + (dart.test(this.isOutline) ? "Outline" : ""));
    }
    applyClass(name, prefix = true) {
      this.element[$classes].add((dart.test(prefix) ? "fluid-icon-" : "") + dart.notNull(name));
    }
  };
  (icon.FluidIcon.new = function(element) {
    this[outline] = null;
    this[size] = 24.0;
    this[icon$] = null;
    this[element$] = element;
    ;
  }).prototype = icon.FluidIcon.prototype;
  dart.addTypeTests(icon.FluidIcon);
  dart.addTypeCaches(icon.FluidIcon);
  icon.FluidIcon[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(icon.FluidIcon, () => ({
    __proto__: dart.getMethods(icon.FluidIcon.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    applyClass: dart.fnType(dart.dynamic, [dart.legacy(core.String)], [dart.legacy(core.bool)])
  }));
  dart.setGetterSignature(icon.FluidIcon, () => ({
    __proto__: dart.getGetters(icon.FluidIcon.__proto__),
    sizeStyle: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))),
    isOutline: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(icon.FluidIcon, L0);
  dart.setFieldSignature(icon.FluidIcon, () => ({
    __proto__: dart.getFields(icon.FluidIcon.__proto__),
    outline: dart.fieldType(dart.legacy(core.bool)),
    size: dart.fieldType(dart.legacy(core.double)),
    icon: dart.fieldType(dart.legacy(core.String)),
    element: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/icon/icon", {
    "package:fluix_web/fluix/icon/icon.dart": icon
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAYO;;;;;;IAEE;;;;;;IAEA;;;;;;IAIK;;;;;;;AAFyB,wDAAC,aAAwB,SAAR,aAAK;IAAI;;AAMzC,YAAA,AAAQ,iBAAG,OAAO,eAAU;IAAK;;AAIrD,UAAI,aAAQ,MAAM,AAA+C,gBAA/B,aAAL,wBAAQ,kBAAY,YAAY;AAC7D,UAAI,AAAQ,AAAW,kCAAQ,MAC7B,AAAkE,gBAA/B,aAAxB,AAAQ,AAAW,6CAAQ,kBAAY,YAAY;IAClE;eAEkB,MAAY;AAC6B,MAAzD,AAAQ,AAAQ,2BAAkC,WAA7B,MAAM,IAAG,gBAAgB,mBAAM,IAAI;IAC1D;;iCAbe;IAVV;IAEE,aAAO;IAEP;IAMQ;;EAAQ","file":"icon.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__icon__icon: icon
  };
}));

//# sourceMappingURL=icon.unsound.ddc.js.map
