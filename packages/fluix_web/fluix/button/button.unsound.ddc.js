define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__fluix_web__fluix__button__button(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var button = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $classes = dartx.classes;
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/button/button.dart";
  var look = dart.privateName(button, "FluidButton.look");
  var primary = dart.privateName(button, "FluidButton.primary");
  var secondary = dart.privateName(button, "FluidButton.secondary");
  var highlight = dart.privateName(button, "FluidButton.highlight");
  var ghost = dart.privateName(button, "FluidButton.ghost");
  var small = dart.privateName(button, "FluidButton.small");
  var element$ = dart.privateName(button, "FluidButton.element");
  button.FluidButton = class FluidButton extends core.Object {
    get look() {
      return this[look];
    }
    set look(value) {
      this[look] = value;
    }
    get primary() {
      return this[primary];
    }
    set primary(value) {
      this[primary] = value;
    }
    get secondary() {
      return this[secondary];
    }
    set secondary(value) {
      this[secondary] = value;
    }
    get highlight() {
      return this[highlight];
    }
    set highlight(value) {
      this[highlight] = value;
    }
    get ghost() {
      return this[ghost];
    }
    set ghost(value) {
      this[ghost] = value;
    }
    get small() {
      return this[small];
    }
    set small(value) {
      this[small] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    ngOnInit() {
      if (this.small != null && dart.test(this.small)) this.applyClass("small");
      if (this.primary != null && dart.test(this.primary)) this.setPrimary();
      if (this.secondary != null && dart.test(this.secondary)) this.setSecondary();
      if (this.highlight != null && dart.test(this.highlight)) this.setHighlight();
      if (this.ghost != null && dart.test(this.ghost)) this.setGhost();
      if (this.look != null && this.look[$isNotEmpty]) {
        switch (this.look) {
          case "primary":
          {
            this.setPrimary();
            break;
          }
          case "secondary":
          {
            this.setSecondary();
            break;
          }
          case "highlight":
          {
            this.setHighlight();
            break;
          }
          case "ghost":
          {
            this.setGhost();
            break;
          }
        }
      }
    }
    applyClass(name, prefix = true) {
      this.element[$classes].add((dart.test(prefix) ? "fluidBtn-" : "") + dart.notNull(name));
    }
    setPrimary() {
      this.applyClass("primary");
    }
    setSecondary() {
      this.applyClass("secondary");
    }
    setHighlight() {
      this.applyClass("highlight");
    }
    setGhost() {
      this.applyClass("ghost");
    }
  };
  (button.FluidButton.new = function(element) {
    this[look] = null;
    this[primary] = null;
    this[secondary] = null;
    this[highlight] = null;
    this[ghost] = null;
    this[small] = null;
    this[element$] = element;
    ;
  }).prototype = button.FluidButton.prototype;
  dart.addTypeTests(button.FluidButton);
  dart.addTypeCaches(button.FluidButton);
  button.FluidButton[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(button.FluidButton, () => ({
    __proto__: dart.getMethods(button.FluidButton.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    applyClass: dart.fnType(dart.dynamic, [dart.legacy(core.String)], [dart.legacy(core.bool)]),
    setPrimary: dart.fnType(dart.dynamic, []),
    setSecondary: dart.fnType(dart.dynamic, []),
    setHighlight: dart.fnType(dart.dynamic, []),
    setGhost: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(button.FluidButton, L0);
  dart.setFieldSignature(button.FluidButton, () => ({
    __proto__: dart.getFields(button.FluidButton.__proto__),
    look: dart.fieldType(dart.legacy(core.String)),
    primary: dart.fieldType(dart.legacy(core.bool)),
    secondary: dart.fieldType(dart.legacy(core.bool)),
    highlight: dart.fieldType(dart.legacy(core.bool)),
    ghost: dart.fieldType(dart.legacy(core.bool)),
    small: dart.fieldType(dart.legacy(core.bool)),
    element: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/button/button", {
    "package:fluix_web/fluix/button/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAaS;;;;;;IAEF;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEO;;;;;;;AAMV,UAAI,cAAS,kBAAQ,aAAO,AAAmB,gBAAR;AACvC,UAAI,gBAAW,kBAAQ,eAAS,AAAY;AAC5C,UAAI,kBAAa,kBAAQ,iBAAW,AAAc;AAClD,UAAI,kBAAa,kBAAQ,iBAAW,AAAc;AAClD,UAAI,cAAS,kBAAQ,aAAO,AAAU;AACtC,UAAI,aAAQ,QAAQ,AAAK;AACvB,gBAAQ;;;AAEQ,YAAZ;AACA;;;;AAEc,YAAd;AACA;;;;AAEc,YAAd;AACA;;;;AAEU,YAAV;AACA;;;;IAGR;eAEkB,MAAY;AAC2B,MAAvD,AAAQ,AAAQ,2BAAgC,WAA3B,MAAM,IAAG,cAAc,mBAAM,IAAI;IACxD;;AAGuB,MAArB,gBAAW;IACb;;AAGyB,MAAvB,gBAAW;IACb;;AAGyB,MAAvB,gBAAW;IACb;;AAGqB,MAAnB,gBAAW;IACb;;qCA7CiB;IAdV;IAEF;IAEA;IAEA;IAEA;IAEA;IAIY;;EAAQ","file":"button.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__button__button: button
  };
}));

//# sourceMappingURL=button.unsound.ddc.js.map
