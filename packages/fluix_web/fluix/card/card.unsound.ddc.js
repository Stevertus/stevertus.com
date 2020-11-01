define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__fluix_web__fluix__card__card(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var card = Object.create(dart.library);
  var $toString = dartx.toString;
  var $classes = dartx.classes;
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/card/card.dart";
  var elevation = dart.privateName(card, "FluidCard.elevation");
  var element$ = dart.privateName(card, "FluidCard.element");
  card.FluidCard = class FluidCard extends core.Object {
    get elevation() {
      return this[elevation];
    }
    set elevation(value) {
      this[elevation] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    ngOnInit() {
      if (this.elevation != null && dart.notNull(this.elevation) > 0) this.applyClass(dart.toString(this.elevation));
    }
    applyClass(name, prefix = true) {
      this.element[$classes].add((dart.test(prefix) ? "fluidCard-" : "") + dart.notNull(name));
    }
  };
  (card.FluidCard.new = function(element) {
    this[elevation] = null;
    this[element$] = element;
    ;
  }).prototype = card.FluidCard.prototype;
  dart.addTypeTests(card.FluidCard);
  dart.addTypeCaches(card.FluidCard);
  card.FluidCard[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(card.FluidCard, () => ({
    __proto__: dart.getMethods(card.FluidCard.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    applyClass: dart.fnType(dart.dynamic, [dart.legacy(core.String)], [dart.legacy(core.bool)])
  }));
  dart.setLibraryUri(card.FluidCard, L0);
  dart.setFieldSignature(card.FluidCard, () => ({
    __proto__: dart.getFields(card.FluidCard.__proto__),
    elevation: dart.fieldType(dart.legacy(core.int)),
    element: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/card/card", {
    "package:fluix_web/fluix/card/card.dart": card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAYM;;;;;;IAEQ;;;;;;;AAMV,UAAI,kBAAa,QAAkB,aAAV,kBAAY,GAAG,AAAgC,gBAAX,cAAV;IACrD;eAEkB,MAAY;AAC4B,MAAxD,AAAQ,AAAQ,2BAAiC,WAA5B,MAAM,IAAG,eAAe,mBAAM,IAAI;IACzD;;iCATe;IAJX;IAIW;;EAAQ","file":"card.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__card__card: card
  };
}));

//# sourceMappingURL=card.unsound.ddc.js.map
