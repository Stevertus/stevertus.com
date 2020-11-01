define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__fluix_web__fluix__multi_input__input(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var input = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $classes = dartx.classes;
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/multi_input/input.dart";
  var label = dart.privateName(input, "FluidMultiInput.label");
  var error = dart.privateName(input, "FluidMultiInput.error");
  var element$ = dart.privateName(input, "FluidMultiInput.element");
  input.FluidMultiInput = class FluidMultiInput extends core.Object {
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    ngOnInit() {
      if (this.error != null && this.error[$isNotEmpty]) this.applyClass("error");
    }
    applyClass(name, prefix = true) {
      this.element[$classes].add((dart.test(prefix) ? "fluidMultiInput-" : "") + dart.notNull(name));
    }
  };
  (input.FluidMultiInput.new = function(element) {
    this[label] = null;
    this[error] = null;
    this[element$] = element;
    ;
  }).prototype = input.FluidMultiInput.prototype;
  dart.addTypeTests(input.FluidMultiInput);
  dart.addTypeCaches(input.FluidMultiInput);
  input.FluidMultiInput[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(input.FluidMultiInput, () => ({
    __proto__: dart.getMethods(input.FluidMultiInput.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    applyClass: dart.fnType(dart.dynamic, [dart.legacy(core.String)], [dart.legacy(core.bool)])
  }));
  dart.setLibraryUri(input.FluidMultiInput, L0);
  dart.setFieldSignature(input.FluidMultiInput, () => ({
    __proto__: dart.getFields(input.FluidMultiInput.__proto__),
    label: dart.fieldType(dart.legacy(core.String)),
    error: dart.fieldType(dart.legacy(core.String)),
    element: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/multi_input/input", {
    "package:fluix_web/fluix/multi_input/input.dart": input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAaS;;;;;;IAEA;;;;;;IAEK;;;;;;;AAMV,UAAI,cAAS,QAAQ,AAAM,yBAAY,AAAmB,gBAAR;IACpD;eAEkB,MAAY;AACkC,MAA9D,AAAQ,AAAQ,2BAAuC,WAAlC,MAAM,IAAG,qBAAqB,mBAAM,IAAI;IAC/D;;wCATqB;IANd;IAEA;IAIc;;EAAQ","file":"input.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__multi_input__input: input
  };
}));

//# sourceMappingURL=input.unsound.ddc.js.map