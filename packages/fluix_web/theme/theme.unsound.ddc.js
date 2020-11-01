define(['dart_sdk', 'packages/fluix_web/theme/themedata'], (function load__packages__fluix_web__theme__theme(dart_sdk, packages__fluix_web__theme__themedata) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const themedata = packages__fluix_web__theme__themedata.theme__themedata;
  var theme = Object.create(dart.library);
  var $setProperty = dartx.setProperty;
  var $toLowerCase = dartx.toLowerCase;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $join = dartx.join;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FluidThemeDataL = () => (FluidThemeDataL = dart.constFn(dart.legacy(themedata.FluidThemeData)))();
  var IdentityMapOfStringL$FluidThemeDataL = () => (IdentityMapOfStringL$FluidThemeDataL = dart.constFn(_js_helper.IdentityMap$(StringL(), FluidThemeDataL())))();
  var FluidBrightnessL = () => (FluidBrightnessL = dart.constFn(dart.legacy(themedata.FluidBrightness)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var StringLAndStringLToNullN = () => (StringLAndStringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), StringL()])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/theme/theme.dart";
  var _setCss = dart.privateName(theme, "_setCss");
  var _stringgetter = dart.privateName(theme, "_stringgetter");
  var data = dart.privateName(theme, "FluidTheme.data");
  var themes = dart.privateName(theme, "FluidTheme.themes");
  theme.FluidTheme = class FluidTheme extends core.Object {
    get data() {
      return this[data];
    }
    set data(value) {
      this[data] = value;
    }
    get themes() {
      return this[themes];
    }
    set themes(value) {
      this[themes] = value;
    }
    setTheme(theme) {
      if (this.data != null && dart.equals(this.data, theme)) return;
      this.data = theme;
      this[_setCss](this.toCss());
    }
    setVariable(name, value) {
      html.document.documentElement.style[$setProperty](name, value);
    }
    setThemeFromString(theme, opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      brightness = brightness == null ? themedata.FluidBrightness.normal : this.getBrightness(StringL().as(brightness));
      this.setTheme(this[_stringgetter](theme, FluidBrightnessL().as(brightness)));
    }
    getBrightness(b) {
      if (b[$toLowerCase]() === "light") return themedata.FluidBrightness.light;
      if (b[$toLowerCase]() === "dark") return themedata.FluidBrightness.dark;
      return themedata.FluidBrightness.normal;
    }
    [_stringgetter](th, brightness) {
      switch (th[$toLowerCase]()) {
        case "vibrantcyan":
        {
          return themedata.FluidThemeData.vibrantCyan({brightness: brightness});
        }
        case "richblue":
        {
          return themedata.FluidThemeData.richBlue({brightness: brightness});
        }
        case "richpurple":
        {
          return themedata.FluidThemeData.richPurple({brightness: brightness});
        }
        case "vibrantmagenta":
        {
          return themedata.FluidThemeData.vibrantMagenta({brightness: brightness});
        }
      }
      return themedata.FluidThemeData.fallback();
    }
    toMap() {
      return this.data.toCss();
    }
    toCss() {
      let res = JSArrayOfStringL().of([]);
      let css = MapLOfStringL$StringL().as(this.toMap());
      css[$_set]("appbar-background", css[$_get]("primary"));
      css[$forEach](dart.fn((key, val) => {
        res[$add]("--" + dart.str(key) + ":" + dart.str(val) + ";");
      }, StringLAndStringLToNullN()));
      res[$add]("background:var(--background)");
      return res[$join]("\n");
    }
    [_setCss](css) {
      html.document.documentElement.style.cssText = css;
    }
  };
  (theme.FluidTheme.new = function() {
    this[data] = null;
    this[themes] = new (IdentityMapOfStringL$FluidThemeDataL()).from(["vibrantCyan", themedata.FluidThemeData.vibrantCyan(), "richBlue", themedata.FluidThemeData.richBlue(), "richPurple", themedata.FluidThemeData.richPurple(), "vibrantMagenta", themedata.FluidThemeData.vibrantMagenta()]);
    if (this.data == null) this.setTheme(themedata.FluidThemeData.fallback());
  }).prototype = theme.FluidTheme.prototype;
  dart.addTypeTests(theme.FluidTheme);
  dart.addTypeCaches(theme.FluidTheme);
  dart.setMethodSignature(theme.FluidTheme, () => ({
    __proto__: dart.getMethods(theme.FluidTheme.__proto__),
    setTheme: dart.fnType(dart.dynamic, [dart.legacy(themedata.FluidThemeData)]),
    setVariable: dart.fnType(dart.dynamic, [dart.legacy(core.String), dart.legacy(core.String)]),
    setThemeFromString: dart.fnType(dart.dynamic, [dart.legacy(core.String)], {brightness: dart.dynamic}, {}),
    getBrightness: dart.fnType(dart.legacy(themedata.FluidBrightness), [dart.legacy(core.String)]),
    [_stringgetter]: dart.fnType(dart.legacy(themedata.FluidThemeData), [dart.legacy(core.String), dart.legacy(themedata.FluidBrightness)]),
    toMap: dart.fnType(dart.legacy(core.Map), []),
    toCss: dart.fnType(dart.legacy(core.String), []),
    [_setCss]: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(theme.FluidTheme, L0);
  dart.setFieldSignature(theme.FluidTheme, () => ({
    __proto__: dart.getFields(theme.FluidTheme.__proto__),
    data: dart.fieldType(dart.legacy(themedata.FluidThemeData)),
    themes: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(themedata.FluidThemeData))))
  }));
  dart.trackLibraries("packages/fluix_web/theme/theme", {
    "package:fluix_web/theme/theme.dart": theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaiB;;;;;;IAGa;;;;;;aAWJ;AACtB,UAAI,aAAQ,QAAa,YAAL,WAAQ,KAAK,GAAE;AACvB,MAAZ,YAAO,KAAK;AACI,MAAhB,cAAQ;IACV;gBAEmB,MAAa;AACyB,MAAvD,AAAS,AAAgB,AAAM,kDAAY,IAAI,EAAE,KAAK;IACxD;uBAE0B;UAAgB;AAGC,MAFzC,aAAa,AAAW,UAAD,IAAI,OACL,mCAChB,mBAAyB,aAAX,UAAU;AACY,MAA1C,cAAS,oBAAc,KAAK,wBAAE,UAAU;IAC1C;kBAEqC;AACnC,UAAI,AAAE,AAAc,CAAf,qBAAkB,SAAS,MAAuB;AACvD,UAAI,AAAE,AAAc,CAAf,qBAAkB,QAAQ,MAAuB;AACtD,YAAuB;IACzB;oBAEoC,IAAoB;AACtD,cAAQ,AAAG,EAAD;;;AAEN,gBAAsB,mDAAwB,UAAU;;;;AAExD,gBAAsB,gDAAqB,UAAU;;;;AAErD,gBAAsB,kDAAuB,UAAU;;;;AAEvD,gBAAsB,sDAA2B,UAAU;;;AAE/D,YAAsB;IACxB;;AAGE,YAAO,AAAK;IACd;;AAGe,gBAAM;AACC,2CAAM;AACe,MAAzC,AAAG,GAAA,QAAC,qBAAuB,AAAG,GAAA,QAAC;AAG7B,MAFF,AAAI,GAAD,WAAS,SAAC,KAAK;AACO,QAAvB,AAAI,GAAD,OAAK,AAAc,gBAAV,GAAG,mBAAE,GAAG;;AAEiB,MAAvC,AAAI,GAAD,OAAK;AAER,YAAO,AAAI,IAAD,QAAM;IAClB;cAEoB;AAC0B,MAA5C,AAAS,AAAgB,AAAM,8CAAU,GAAG;IAC9C;;;IArEe;IAGa,eAAS,mDACnC,eAA8B,wCAC9B,YAA2B,qCAC3B,cAA6B,uCAC7B,kBAAiC;AAIjC,QAAI,AAAK,aAAG,MAAM,AAAmC,cAAX;EAC5C","file":"theme.unsound.ddc.js"}');
  // Exports:
  return {
    theme__theme: theme
  };
}));

//# sourceMappingURL=theme.unsound.ddc.js.map
