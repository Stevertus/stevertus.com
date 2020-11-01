define(['dart_sdk', 'packages/fluix_web/theme/colors'], (function load__packages__fluix_web__theme__themedata(dart_sdk, packages__fluix_web__theme__colors) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__fluix_web__theme__colors.theme__colors;
  var themedata = Object.create(dart.library);
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var FluidThemeDataL = () => (FluidThemeDataL = dart.constFn(dart.legacy(themedata.FluidThemeData)))();
  var FluidBrightnessL = () => (FluidBrightnessL = dart.constFn(dart.legacy(themedata.FluidBrightness)))();
  const CT = Object.create(null);
  var L1 = "package:fluix_web/theme/themedata.dart";
  var L0 = "org-dartlang-app:///packages/fluix_web/theme/themedata.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: themedata.FluidBrightness.prototype,
        [_name$]: "FluidBrightness.normal",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: themedata.FluidBrightness.prototype,
        [_name$]: "FluidBrightness.light",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: themedata.FluidBrightness.prototype,
        [_name$]: "FluidBrightness.dark",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C1 || CT.C1, C0 || CT.C0, C2 || CT.C2], FluidBrightnessL());
    }
  }, false);
  var _name$ = dart.privateName(themedata, "_name");
  var C0;
  var primary$ = dart.privateName(themedata, "FluidThemeData.primary");
  var accent$ = dart.privateName(themedata, "FluidThemeData.accent");
  var background$ = dart.privateName(themedata, "FluidThemeData.background");
  var hintColor$ = dart.privateName(themedata, "FluidThemeData.hintColor");
  var inputBackground$ = dart.privateName(themedata, "FluidThemeData.inputBackground");
  var toggleBackground$ = dart.privateName(themedata, "FluidThemeData.toggleBackground");
  var disabledInput$ = dart.privateName(themedata, "FluidThemeData.disabledInput");
  var disabledColor$ = dart.privateName(themedata, "FluidThemeData.disabledColor");
  var errorColor$ = dart.privateName(themedata, "FluidThemeData.errorColor");
  var labelColor$ = dart.privateName(themedata, "FluidThemeData.labelColor");
  var cardColor$ = dart.privateName(themedata, "FluidThemeData.cardColor");
  var hoverColor$ = dart.privateName(themedata, "FluidThemeData.hoverColor");
  var dropdownHover$ = dart.privateName(themedata, "FluidThemeData.dropdownHover");
  var dropdownBackground$ = dart.privateName(themedata, "FluidThemeData.dropdownBackground");
  var brightness$ = dart.privateName(themedata, "FluidThemeData.brightness");
  var fontFamily$ = dart.privateName(themedata, "FluidThemeData.fontFamily");
  themedata.FluidThemeData = class FluidThemeData extends core.Object {
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      this[primary$] = value;
    }
    get accent() {
      return this[accent$];
    }
    set accent(value) {
      this[accent$] = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      this[background$] = value;
    }
    get hintColor() {
      return this[hintColor$];
    }
    set hintColor(value) {
      this[hintColor$] = value;
    }
    get inputBackground() {
      return this[inputBackground$];
    }
    set inputBackground(value) {
      this[inputBackground$] = value;
    }
    get toggleBackground() {
      return this[toggleBackground$];
    }
    set toggleBackground(value) {
      this[toggleBackground$] = value;
    }
    get disabledInput() {
      return this[disabledInput$];
    }
    set disabledInput(value) {
      this[disabledInput$] = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      this[disabledColor$] = value;
    }
    get errorColor() {
      return this[errorColor$];
    }
    set errorColor(value) {
      this[errorColor$] = value;
    }
    get labelColor() {
      return this[labelColor$];
    }
    set labelColor(value) {
      this[labelColor$] = value;
    }
    get cardColor() {
      return this[cardColor$];
    }
    set cardColor(value) {
      this[cardColor$] = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      this[hoverColor$] = value;
    }
    get dropdownHover() {
      return this[dropdownHover$];
    }
    set dropdownHover(value) {
      this[dropdownHover$] = value;
    }
    get dropdownBackground() {
      return this[dropdownBackground$];
    }
    set dropdownBackground(value) {
      this[dropdownBackground$] = value;
    }
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      this[brightness$] = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      this[fontFamily$] = value;
    }
    toCss() {
      let res = new (IdentityMapOfStringL$StringL()).new();
      res[$_set]("background", this.background.toHex());
      res[$_set]("cardColor", this.cardColor.toHex());
      res[$_set]("inputBackground", this.inputBackground.toHex());
      res[$_set]("hintColor", this.hintColor.toHex());
      res[$_set]("disabledColor", this.disabledColor.toHex());
      res[$_set]("errorColor", this.errorColor.toHex());
      res[$_set]("dropdown-background", this.dropdownBackground.toHex());
      res[$_set]("dropdown-hover", this.dropdownHover.toHex());
      res[$addAll](this.primary.toCss("primary"));
      res[$addAll](this.accent.toCss("accent"));
      return res;
    }
    _equals(other) {
      if (other == null) return false;
      if (FluidThemeDataL().is(other)) return this.primary.primary == other.primary.primary;
      return false;
    }
    static vibrantCyan(opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : C0 || CT.C0;
      return new themedata.FluidThemeData.new({primary: colors.Liquids.vibrantCyan, accent: colors.Liquids.vibrantYellow, brightness: brightness, errorColor: colors.Liquids.richRed});
    }
    static richBlue(opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : C0 || CT.C0;
      return new themedata.FluidThemeData.new({primary: colors.Liquids.richBlue, accent: colors.Liquids.vibrantYellow, brightness: brightness, errorColor: colors.Liquids.richRed});
    }
    static richPurple(opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : C0 || CT.C0;
      return new themedata.FluidThemeData.new({primary: colors.Liquids.richPurple, accent: colors.Liquids.vibrantCyan, brightness: brightness, errorColor: colors.Liquids.richRed});
    }
    static vibrantMagenta(opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : C0 || CT.C0;
      return new themedata.FluidThemeData.new({primary: colors.Liquids.vibrantMagenta, accent: colors.Liquids.richPurple, brightness: brightness, errorColor: colors.Liquids.richRed});
    }
    static fallback() {
      return themedata.FluidThemeData.vibrantCyan();
    }
  };
  (themedata.FluidThemeData.new = function(opts) {
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let accent = opts && 'accent' in opts ? opts.accent : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let hintColor = opts && 'hintColor' in opts ? opts.hintColor : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let inputBackground = opts && 'inputBackground' in opts ? opts.inputBackground : null;
    let toggleBackground = opts && 'toggleBackground' in opts ? opts.toggleBackground : null;
    let disabledInput = opts && 'disabledInput' in opts ? opts.disabledInput : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let errorColor = opts && 'errorColor' in opts ? opts.errorColor : null;
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    let dropdownHover = opts && 'dropdownHover' in opts ? opts.dropdownHover : null;
    let dropdownBackground = opts && 'dropdownBackground' in opts ? opts.dropdownBackground : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let cardColor = opts && 'cardColor' in opts ? opts.cardColor : null;
    this[primary$] = primary;
    this[accent$] = accent;
    this[background$] = background;
    this[hintColor$] = hintColor;
    this[brightness$] = brightness;
    this[hoverColor$] = hoverColor;
    this[inputBackground$] = inputBackground;
    this[toggleBackground$] = toggleBackground;
    this[disabledInput$] = disabledInput;
    this[disabledColor$] = disabledColor;
    this[errorColor$] = errorColor;
    this[labelColor$] = labelColor;
    this[dropdownHover$] = dropdownHover;
    this[dropdownBackground$] = dropdownBackground;
    this[fontFamily$] = fontFamily;
    this[cardColor$] = cardColor;
    if (!(primary != null)) dart.assertFailed(null, L0, 54, 16, "primary != null");
    if (!(accent != null)) dart.assertFailed(null, L0, 55, 16, "accent != null");
    this.toggleBackground == null ? this.toggleBackground = colors.Liquids.sensitiveGrey.dark : null;
    if (this.brightness == themedata.FluidBrightness.normal) {
      this.inputBackground == null ? this.inputBackground = colors.Liquids.white : null;
      this.dropdownBackground == null ? this.dropdownBackground = colors.Liquids.white : null;
      this.dropdownHover == null ? this.dropdownHover = colors.Liquids.sensitiveGrey : null;
      this.background == null ? this.background = colors.Liquids.sensitiveGrey : null;
      this.cardColor == null ? this.cardColor = colors.Liquids.white : null;
    }
    if (this.brightness == themedata.FluidBrightness.light) {
      this.inputBackground == null ? this.inputBackground = colors.Liquids.sensitiveGrey : null;
      this.dropdownBackground == null ? this.dropdownBackground = colors.Liquids.white : null;
      this.dropdownHover == null ? this.dropdownHover = colors.Liquids.sensitiveGrey : null;
      this.background == null ? this.background = colors.Liquids.white : null;
      this.cardColor == null ? this.cardColor = colors.Liquids.sensitiveGrey : null;
    }
    if (this.brightness == themedata.FluidBrightness.dark) {
      this.background == null ? this.background = colors.Liquids.richBlack.darkest : null;
      this.inputBackground == null ? this.inputBackground = colors.Liquids.richBlack : null;
      this.cardColor == null ? this.cardColor = colors.Liquids.richBlack.dark : null;
      this.hintColor == null ? this.hintColor = colors.Liquids.richBlack.lightest : null;
      this.labelColor == null ? this.labelColor = colors.Liquids.richBlack.lightest : null;
      this.disabledColor == null ? this.disabledColor = colors.Liquids.sensitiveGrey.darker : null;
      this.hoverColor == null ? this.hoverColor = colors.Liquids.sensitiveGrey.darker : null;
    } else {
      this.hintColor == null ? this.hintColor = colors.Liquids.richBlack.lightest : null;
      this.labelColor == null ? this.labelColor = colors.Liquids.richBlack.lightest : null;
      this.disabledColor == null ? this.disabledColor = colors.Liquids.sensitiveGrey.darker : null;
      this.hoverColor == null ? this.hoverColor = colors.Liquids.sensitiveGrey.darker : null;
    }
  }).prototype = themedata.FluidThemeData.prototype;
  dart.addTypeTests(themedata.FluidThemeData);
  dart.addTypeCaches(themedata.FluidThemeData);
  dart.setMethodSignature(themedata.FluidThemeData, () => ({
    __proto__: dart.getMethods(themedata.FluidThemeData.__proto__),
    toCss: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setLibraryUri(themedata.FluidThemeData, L1);
  dart.setFieldSignature(themedata.FluidThemeData, () => ({
    __proto__: dart.getFields(themedata.FluidThemeData.__proto__),
    primary: dart.fieldType(dart.legacy(colors.Liquid)),
    accent: dart.fieldType(dart.legacy(colors.Liquid)),
    background: dart.fieldType(dart.legacy(colors.Color)),
    hintColor: dart.fieldType(dart.legacy(colors.Color)),
    inputBackground: dart.fieldType(dart.legacy(colors.Color)),
    toggleBackground: dart.fieldType(dart.legacy(colors.Color)),
    disabledInput: dart.fieldType(dart.legacy(colors.Color)),
    disabledColor: dart.fieldType(dart.legacy(colors.Color)),
    errorColor: dart.fieldType(dart.legacy(colors.Color)),
    labelColor: dart.fieldType(dart.legacy(colors.Color)),
    cardColor: dart.fieldType(dart.legacy(colors.Color)),
    hoverColor: dart.fieldType(dart.legacy(colors.Color)),
    dropdownHover: dart.fieldType(dart.legacy(colors.Color)),
    dropdownBackground: dart.fieldType(dart.legacy(colors.Color)),
    brightness: dart.fieldType(dart.legacy(themedata.FluidBrightness)),
    fontFamily: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(themedata.FluidThemeData, ['_equals']);
  var C1;
  var C2;
  var C3;
  themedata.FluidBrightness = class FluidBrightness extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (themedata.FluidBrightness.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = themedata.FluidBrightness.prototype;
  dart.addTypeTests(themedata.FluidBrightness);
  dart.addTypeCaches(themedata.FluidBrightness);
  dart.setMethodSignature(themedata.FluidBrightness, () => ({
    __proto__: dart.getMethods(themedata.FluidBrightness.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(themedata.FluidBrightness, L1);
  dart.setFieldSignature(themedata.FluidBrightness, () => ({
    __proto__: dart.getFields(themedata.FluidBrightness.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(themedata.FluidBrightness, ['toString']);
  themedata.FluidBrightness.light = C1 || CT.C1;
  themedata.FluidBrightness.normal = C0 || CT.C0;
  themedata.FluidBrightness.dark = C2 || CT.C2;
  themedata.FluidBrightness.values = C3 || CT.C3;
  dart.trackLibraries("packages/fluix_web/theme/themedata", {
    "package:fluix_web/theme/themedata.dart": themedata
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["themedata.dart"],"names":[],"mappings":"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","file":"themedata.unsound.ddc.js"}');
  // Exports:
  return {
    theme__themedata: themedata
  };
}));

//# sourceMappingURL=themedata.unsound.ddc.js.map
