define(['dart_sdk'], (function load__packages__fluix_web__fluix__checkbox__checkbox(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var checkbox = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/checkbox/checkbox.dart";
  var _value = dart.privateName(checkbox, "_value");
  var _valueChange = dart.privateName(checkbox, "_valueChange");
  var disabled = dart.privateName(checkbox, "FluidCheckbox.disabled");
  var label = dart.privateName(checkbox, "FluidCheckbox.label");
  checkbox.FluidCheckbox = class FluidCheckbox extends core.Object {
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get label() {
      return this[label];
    }
    set label(value) {
      this[label] = value;
    }
    set value(val) {
      return this[_value] = val;
    }
    get valueChange() {
      return this[_valueChange].stream;
    }
    onClick() {
      this[_valueChange].add(!dart.test(this[_value]));
    }
    get value() {
      return this[_value] != null ? this[_value] : false;
    }
  };
  (checkbox.FluidCheckbox.new = function() {
    this[_value] = null;
    this[disabled] = null;
    this[label] = null;
    this[_valueChange] = StreamControllerOfboolL().new();
    ;
  }).prototype = checkbox.FluidCheckbox.prototype;
  dart.addTypeTests(checkbox.FluidCheckbox);
  dart.addTypeCaches(checkbox.FluidCheckbox);
  dart.setMethodSignature(checkbox.FluidCheckbox, () => ({
    __proto__: dart.getMethods(checkbox.FluidCheckbox.__proto__),
    onClick: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(checkbox.FluidCheckbox, () => ({
    __proto__: dart.getGetters(checkbox.FluidCheckbox.__proto__),
    valueChange: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    value: dart.dynamic
  }));
  dart.setSetterSignature(checkbox.FluidCheckbox, () => ({
    __proto__: dart.getSetters(checkbox.FluidCheckbox.__proto__),
    value: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(checkbox.FluidCheckbox, L0);
  dart.setFieldSignature(checkbox.FluidCheckbox, () => ({
    __proto__: dart.getFields(checkbox.FluidCheckbox.__proto__),
    [_value]: dart.fieldType(dart.legacy(core.bool)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    label: dart.fieldType(dart.legacy(core.String)),
    [_valueChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool))))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/checkbox/checkbox", {
    "package:fluix_web/fluix/checkbox/checkbox.dart": checkbox
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["checkbox.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAiBO;;;;;;IAEE;;;;;;cAJQ;AAAQ,4BAAS,GAAG;;;AAQH,YAAA,AAAa;IAAM;;AAIxB,MAAzB,AAAa,uBAAI,WAAC;IACpB;;AAEa,YAAA,AAAO,iBAAG,OAAO,eAAS;IAAK;;;IAjBvC;IAIA;IAEE;IAED,qBAAe;;EAUvB","file":"checkbox.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__checkbox__checkbox: checkbox
  };
}));

//# sourceMappingURL=checkbox.unsound.ddc.js.map
