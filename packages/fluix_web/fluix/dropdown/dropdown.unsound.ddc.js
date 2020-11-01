define(['dart_sdk'], (function load__packages__fluix_web__fluix__dropdown__dropdown(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dropdown = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StreamControllerOfintL = () => (StreamControllerOfintL = dart.constFn(async.StreamController$(intL())))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/dropdown/dropdown.dart";
  var _selectedChange = dart.privateName(dropdown, "_selectedChange");
  var selected = dart.privateName(dropdown, "FluidDropdown.selected");
  var disabled = dart.privateName(dropdown, "FluidDropdown.disabled");
  var placeholder = dart.privateName(dropdown, "FluidDropdown.placeholder");
  var values = dart.privateName(dropdown, "FluidDropdown.values");
  var open = dart.privateName(dropdown, "FluidDropdown.open");
  dropdown.FluidDropdown = class FluidDropdown extends core.Object {
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get placeholder() {
      return this[placeholder];
    }
    set placeholder(value) {
      this[placeholder] = value;
    }
    get values() {
      return this[values];
    }
    set values(value) {
      this[values] = value;
    }
    get open() {
      return this[open];
    }
    set open(value) {
      this[open] = value;
    }
    get displayedText() {
      return this.selected != null ? this.values[$_get](this.selected) : this.placeholder;
    }
    get selectedChange() {
      return this[_selectedChange].stream;
    }
    select(i) {
      if (dart.notNull(i) < dart.notNull(this.values[$length])) {
        this.selected = i;
        this[_selectedChange].add(i);
        this.open = false;
      }
    }
    toggle() {
      if (this.disabled == null || !dart.test(this.disabled)) this.open = !dart.test(this.open);
    }
  };
  (dropdown.FluidDropdown.new = function() {
    this[selected] = null;
    this[disabled] = null;
    this[placeholder] = null;
    this[values] = null;
    this[open] = false;
    this[_selectedChange] = StreamControllerOfintL().new();
    ;
  }).prototype = dropdown.FluidDropdown.prototype;
  dart.addTypeTests(dropdown.FluidDropdown);
  dart.addTypeCaches(dropdown.FluidDropdown);
  dart.setMethodSignature(dropdown.FluidDropdown, () => ({
    __proto__: dart.getMethods(dropdown.FluidDropdown.__proto__),
    select: dart.fnType(dart.void, [dart.legacy(core.int)]),
    toggle: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dropdown.FluidDropdown, () => ({
    __proto__: dart.getGetters(dropdown.FluidDropdown.__proto__),
    displayedText: dart.legacy(core.String),
    selectedChange: dart.legacy(async.Stream$(dart.legacy(core.int)))
  }));
  dart.setLibraryUri(dropdown.FluidDropdown, L0);
  dart.setFieldSignature(dropdown.FluidDropdown, () => ({
    __proto__: dart.getFields(dropdown.FluidDropdown.__proto__),
    selected: dart.fieldType(dart.legacy(core.int)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    placeholder: dart.fieldType(dart.legacy(core.String)),
    values: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    open: dart.fieldType(dart.legacy(core.bool)),
    [_selectedChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.int))))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/dropdown/dropdown", {
    "package:fluix_web/fluix/dropdown/dropdown.dart": dropdown
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAaM;;;;;;IAEC;;;;;;IAEE;;;;;;IAEM;;;;;;IAER;;;;;;;AAEuB,YAAA,AAAS,kBAAG,OAAO,AAAM,mBAAC,iBAAY;IAAW;;AAI3C,YAAA,AAAgB;IAAM;WAExC;AACd,UAAM,aAAF,CAAC,iBAAG,AAAO;AACD,QAAZ,gBAAW,CAAC;AACU,QAAtB,AAAgB,0BAAI,CAAC;AACT,QAAZ,YAAO;;IAEX;;AAGE,UAAI,AAAS,iBAAG,mBAAS,gBAAU,AAAY,YAAL,WAAC;IAC7C;;;IA1BI;IAEC;IAEE;IAEM;IAER,aAAO;IAIN,wBAAkB;;EAe1B","file":"dropdown.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__dropdown__dropdown: dropdown
  };
}));

//# sourceMappingURL=dropdown.unsound.ddc.js.map
