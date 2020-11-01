define(['dart_sdk'], (function load__packages__colorize__colorize(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var colorize = Object.create(dart.library);
  var $toString = dartx.toString;
  var StylesL = () => (StylesL = dart.constFn(dart.legacy(colorize.Styles)))();
  const CT = Object.create(null);
  var L0 = "package:colorize/colorize.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.RESET",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BOLD",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.DARK",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.ITALIC",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.UNDERLINE",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BLINK",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.REVERSE",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.CONCEALED",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.DEFAULT",
        index: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BLACK",
        index: 9
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.RED",
        index: 10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.GREEN",
        index: 11
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.YELLOW",
        index: 12
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BLUE",
        index: 13
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.MAGENTA",
        index: 14
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.CYAN",
        index: 15
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_GRAY",
        index: 16
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.DARK_GRAY",
        index: 17
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_RED",
        index: 18
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_GREEN",
        index: 19
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_YELLOW",
        index: 20
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_BLUE",
        index: 21
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_MAGENTA",
        index: 22
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.LIGHT_CYAN",
        index: 23
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.WHITE",
        index: 24
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_DEFAULT",
        index: 25
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_BLACK",
        index: 26
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_RED",
        index: 27
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_GREEN",
        index: 28
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_YELLOW",
        index: 29
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_BLUE",
        index: 30
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_MAGENTA",
        index: 31
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_CYAN",
        index: 32
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_GRAY",
        index: 33
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_DARK_GRAY",
        index: 34
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_RED",
        index: 35
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_GREEN",
        index: 36
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_YELLOW",
        index: 37
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_BLUE",
        index: 38
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_MAGENTA",
        index: 39
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_LIGHT_CYAN",
        index: 40
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: colorize.Styles.prototype,
        [_name$]: "Styles.BG_WHITE",
        index: 41
      });
    },
    get C42() {
      return C42 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], StylesL());
    }
  }, false);
  var _name$ = dart.privateName(colorize, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  colorize.Styles = class Styles extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (colorize.Styles.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = colorize.Styles.prototype;
  dart.addTypeTests(colorize.Styles);
  dart.addTypeCaches(colorize.Styles);
  dart.setMethodSignature(colorize.Styles, () => ({
    __proto__: dart.getMethods(colorize.Styles.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(colorize.Styles, L0);
  dart.setFieldSignature(colorize.Styles, () => ({
    __proto__: dart.getFields(colorize.Styles.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(colorize.Styles, ['toString']);
  colorize.Styles.RESET = C0 || CT.C0;
  colorize.Styles.BOLD = C1 || CT.C1;
  colorize.Styles.DARK = C2 || CT.C2;
  colorize.Styles.ITALIC = C3 || CT.C3;
  colorize.Styles.UNDERLINE = C4 || CT.C4;
  colorize.Styles.BLINK = C5 || CT.C5;
  colorize.Styles.REVERSE = C6 || CT.C6;
  colorize.Styles.CONCEALED = C7 || CT.C7;
  colorize.Styles.DEFAULT = C8 || CT.C8;
  colorize.Styles.BLACK = C9 || CT.C9;
  colorize.Styles.RED = C10 || CT.C10;
  colorize.Styles.GREEN = C11 || CT.C11;
  colorize.Styles.YELLOW = C12 || CT.C12;
  colorize.Styles.BLUE = C13 || CT.C13;
  colorize.Styles.MAGENTA = C14 || CT.C14;
  colorize.Styles.CYAN = C15 || CT.C15;
  colorize.Styles.LIGHT_GRAY = C16 || CT.C16;
  colorize.Styles.DARK_GRAY = C17 || CT.C17;
  colorize.Styles.LIGHT_RED = C18 || CT.C18;
  colorize.Styles.LIGHT_GREEN = C19 || CT.C19;
  colorize.Styles.LIGHT_YELLOW = C20 || CT.C20;
  colorize.Styles.LIGHT_BLUE = C21 || CT.C21;
  colorize.Styles.LIGHT_MAGENTA = C22 || CT.C22;
  colorize.Styles.LIGHT_CYAN = C23 || CT.C23;
  colorize.Styles.WHITE = C24 || CT.C24;
  colorize.Styles.BG_DEFAULT = C25 || CT.C25;
  colorize.Styles.BG_BLACK = C26 || CT.C26;
  colorize.Styles.BG_RED = C27 || CT.C27;
  colorize.Styles.BG_GREEN = C28 || CT.C28;
  colorize.Styles.BG_YELLOW = C29 || CT.C29;
  colorize.Styles.BG_BLUE = C30 || CT.C30;
  colorize.Styles.BG_MAGENTA = C31 || CT.C31;
  colorize.Styles.BG_CYAN = C32 || CT.C32;
  colorize.Styles.BG_LIGHT_GRAY = C33 || CT.C33;
  colorize.Styles.BG_DARK_GRAY = C34 || CT.C34;
  colorize.Styles.BG_LIGHT_RED = C35 || CT.C35;
  colorize.Styles.BG_LIGHT_GREEN = C36 || CT.C36;
  colorize.Styles.BG_LIGHT_YELLOW = C37 || CT.C37;
  colorize.Styles.BG_LIGHT_BLUE = C38 || CT.C38;
  colorize.Styles.BG_LIGHT_MAGENTA = C39 || CT.C39;
  colorize.Styles.BG_LIGHT_CYAN = C40 || CT.C40;
  colorize.Styles.BG_WHITE = C41 || CT.C41;
  colorize.Styles.values = C42 || CT.C42;
  var _applyStyle = dart.privateName(colorize, "_applyStyle");
  var initial$ = dart.privateName(colorize, "Colorize.initial");
  colorize.Colorize = class Colorize extends core.Object {
    get initial() {
      return this[initial$];
    }
    set initial(value) {
      this[initial$] = value;
    }
    apply(style, text = null) {
      if (text == null) {
        text = this.initial;
      }
      this.initial = this[_applyStyle](style, text);
      return this;
    }
    bgBlack() {
      this.apply(colorize.Styles.BG_BLACK);
    }
    bgBlue() {
      this.apply(colorize.Styles.BG_BLUE);
    }
    bgCyan() {
      this.apply(colorize.Styles.BG_CYAN);
    }
    bgDarkGray() {
      this.apply(colorize.Styles.BG_DARK_GRAY);
    }
    bgDefault() {
      this.apply(colorize.Styles.BG_DEFAULT);
    }
    bgGreen() {
      this.apply(colorize.Styles.BG_GREEN);
    }
    bgLightBlue() {
      this.apply(colorize.Styles.BG_LIGHT_BLUE);
    }
    bgLightCyan() {
      this.apply(colorize.Styles.BG_LIGHT_CYAN);
    }
    bgLightGray() {
      this.apply(colorize.Styles.BG_LIGHT_GRAY);
    }
    bgLightGreen() {
      this.apply(colorize.Styles.BG_LIGHT_GREEN);
    }
    bgLightMagenta() {
      this.apply(colorize.Styles.BG_LIGHT_MAGENTA);
    }
    bgLightRed() {
      this.apply(colorize.Styles.BG_LIGHT_RED);
    }
    bgLightYellow() {
      this.apply(colorize.Styles.BG_LIGHT_YELLOW);
    }
    bgMagenta() {
      this.apply(colorize.Styles.BG_MAGENTA);
    }
    bgRed() {
      this.apply(colorize.Styles.BG_RED);
    }
    bgWhite() {
      this.apply(colorize.Styles.BG_WHITE);
    }
    bgYellow() {
      this.apply(colorize.Styles.BG_YELLOW);
    }
    black() {
      this.apply(colorize.Styles.BLACK);
    }
    blink() {
      this.apply(colorize.Styles.BLINK);
    }
    blue() {
      this.apply(colorize.Styles.BLUE);
    }
    bold() {
      this.apply(colorize.Styles.BOLD);
    }
    buildEscSeq(style) {
      return dart.notNull(colorize.Colorize.ESC) + ("[" + dart.str(colorize.Colorize.getStyle(style)) + "m");
    }
    call(text) {
      this.initial = text;
      return this;
    }
    concealed() {
      this.apply(colorize.Styles.CONCEALED);
    }
    cyan() {
      this.apply(colorize.Styles.CYAN);
    }
    dark() {
      this.apply(colorize.Styles.DARK);
    }
    darkGray() {
      this.apply(colorize.Styles.DARK_GRAY);
    }
    default_slyle() {
      this.apply(colorize.Styles.DEFAULT);
    }
    green() {
      this.apply(colorize.Styles.GREEN);
    }
    italic() {
      this.apply(colorize.Styles.ITALIC);
    }
    lightBlue() {
      this.apply(colorize.Styles.LIGHT_BLUE);
    }
    lightCyan() {
      this.apply(colorize.Styles.LIGHT_CYAN);
    }
    lightGray() {
      this.apply(colorize.Styles.LIGHT_GRAY);
    }
    lightGreen() {
      this.apply(colorize.Styles.LIGHT_GREEN);
    }
    lightMagenta() {
      this.apply(colorize.Styles.LIGHT_MAGENTA);
    }
    lightRed() {
      this.apply(colorize.Styles.LIGHT_RED);
    }
    lightYellow() {
      this.apply(colorize.Styles.LIGHT_YELLOW);
    }
    magenta() {
      this.apply(colorize.Styles.MAGENTA);
    }
    red() {
      this.apply(colorize.Styles.RED);
    }
    reverse() {
      this.apply(colorize.Styles.REVERSE);
    }
    toString() {
      return this.initial;
    }
    underline() {
      this.apply(colorize.Styles.UNDERLINE);
    }
    white() {
      this.apply(colorize.Styles.WHITE);
    }
    yellow() {
      this.apply(colorize.Styles.YELLOW);
    }
    [_applyStyle](style, text) {
      return dart.notNull(this.buildEscSeq(style)) + dart.notNull(text) + dart.notNull(this.buildEscSeq(colorize.Styles.RESET));
    }
    static getStyle(style) {
      switch (style) {
        case C0 || CT.C0:
        {
          return "0";
        }
        case C1 || CT.C1:
        {
          return "1";
        }
        case C2 || CT.C2:
        {
          return "2";
        }
        case C3 || CT.C3:
        {
          return "3";
        }
        case C4 || CT.C4:
        {
          return "4";
        }
        case C5 || CT.C5:
        {
          return "5";
        }
        case C6 || CT.C6:
        {
          return "7";
        }
        case C7 || CT.C7:
        {
          return "8";
        }
        case C8 || CT.C8:
        {
          return "39";
        }
        case C9 || CT.C9:
        {
          return "30";
        }
        case C10 || CT.C10:
        {
          return "31";
        }
        case C11 || CT.C11:
        {
          return "32";
        }
        case C12 || CT.C12:
        {
          return "33";
        }
        case C13 || CT.C13:
        {
          return "34";
        }
        case C14 || CT.C14:
        {
          return "35";
        }
        case C15 || CT.C15:
        {
          return "36";
        }
        case C16 || CT.C16:
        {
          return "37";
        }
        case C17 || CT.C17:
        {
          return "90";
        }
        case C18 || CT.C18:
        {
          return "91";
        }
        case C19 || CT.C19:
        {
          return "92";
        }
        case C20 || CT.C20:
        {
          return "93";
        }
        case C21 || CT.C21:
        {
          return "94";
        }
        case C22 || CT.C22:
        {
          return "95";
        }
        case C23 || CT.C23:
        {
          return "96";
        }
        case C24 || CT.C24:
        {
          return "97";
        }
        case C25 || CT.C25:
        {
          return "49";
        }
        case C26 || CT.C26:
        {
          return "40";
        }
        case C27 || CT.C27:
        {
          return "41";
        }
        case C28 || CT.C28:
        {
          return "42";
        }
        case C29 || CT.C29:
        {
          return "43";
        }
        case C30 || CT.C30:
        {
          return "44";
        }
        case C31 || CT.C31:
        {
          return "45";
        }
        case C32 || CT.C32:
        {
          return "46";
        }
        case C33 || CT.C33:
        {
          return "47";
        }
        case C34 || CT.C34:
        {
          return "100";
        }
        case C35 || CT.C35:
        {
          return "101";
        }
        case C36 || CT.C36:
        {
          return "102";
        }
        case C37 || CT.C37:
        {
          return "103";
        }
        case C38 || CT.C38:
        {
          return "104";
        }
        case C39 || CT.C39:
        {
          return "105";
        }
        case C40 || CT.C40:
        {
          return "106";
        }
        case C41 || CT.C41:
        {
          return "107";
        }
        default:
        {
          return "";
        }
      }
    }
  };
  (colorize.Colorize.new = function(initial = "") {
    this[initial$] = "";
    this[initial$] = initial;
    ;
  }).prototype = colorize.Colorize.prototype;
  dart.addTypeTests(colorize.Colorize);
  dart.addTypeCaches(colorize.Colorize);
  dart.setMethodSignature(colorize.Colorize, () => ({
    __proto__: dart.getMethods(colorize.Colorize.__proto__),
    apply: dart.fnType(dart.legacy(colorize.Colorize), [dart.legacy(colorize.Styles)], [dart.legacy(core.String)]),
    bgBlack: dart.fnType(dart.void, []),
    bgBlue: dart.fnType(dart.void, []),
    bgCyan: dart.fnType(dart.void, []),
    bgDarkGray: dart.fnType(dart.void, []),
    bgDefault: dart.fnType(dart.void, []),
    bgGreen: dart.fnType(dart.void, []),
    bgLightBlue: dart.fnType(dart.void, []),
    bgLightCyan: dart.fnType(dart.void, []),
    bgLightGray: dart.fnType(dart.void, []),
    bgLightGreen: dart.fnType(dart.void, []),
    bgLightMagenta: dart.fnType(dart.void, []),
    bgLightRed: dart.fnType(dart.void, []),
    bgLightYellow: dart.fnType(dart.void, []),
    bgMagenta: dart.fnType(dart.void, []),
    bgRed: dart.fnType(dart.void, []),
    bgWhite: dart.fnType(dart.void, []),
    bgYellow: dart.fnType(dart.void, []),
    black: dart.fnType(dart.void, []),
    blink: dart.fnType(dart.void, []),
    blue: dart.fnType(dart.void, []),
    bold: dart.fnType(dart.void, []),
    buildEscSeq: dart.fnType(dart.legacy(core.String), [dart.legacy(colorize.Styles)]),
    call: dart.fnType(dart.legacy(colorize.Colorize), [dart.legacy(core.String)]),
    concealed: dart.fnType(dart.void, []),
    cyan: dart.fnType(dart.void, []),
    dark: dart.fnType(dart.void, []),
    darkGray: dart.fnType(dart.void, []),
    default_slyle: dart.fnType(dart.void, []),
    green: dart.fnType(dart.void, []),
    italic: dart.fnType(dart.void, []),
    lightBlue: dart.fnType(dart.void, []),
    lightCyan: dart.fnType(dart.void, []),
    lightGray: dart.fnType(dart.void, []),
    lightGreen: dart.fnType(dart.void, []),
    lightMagenta: dart.fnType(dart.void, []),
    lightRed: dart.fnType(dart.void, []),
    lightYellow: dart.fnType(dart.void, []),
    magenta: dart.fnType(dart.void, []),
    red: dart.fnType(dart.void, []),
    reverse: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    underline: dart.fnType(dart.void, []),
    white: dart.fnType(dart.void, []),
    yellow: dart.fnType(dart.void, []),
    [_applyStyle]: dart.fnType(dart.legacy(core.String), [dart.legacy(colorize.Styles), dart.legacy(core.String)])
  }));
  dart.setLibraryUri(colorize.Colorize, L0);
  dart.setFieldSignature(colorize.Colorize, () => ({
    __proto__: dart.getFields(colorize.Colorize.__proto__),
    initial: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(colorize.Colorize, ['toString']);
  dart.defineLazy(colorize.Colorize, {
    /*colorize.Colorize.ESC*/get ESC() {
      return "";
    }
  }, true);
  colorize.color = function color(text, opts) {
    let front = opts && 'front' in opts ? opts.front : null;
    let back = opts && 'back' in opts ? opts.back : null;
    let isUnderline = opts && 'isUnderline' in opts ? opts.isUnderline : false;
    let isBold = opts && 'isBold' in opts ? opts.isBold : false;
    let isDark = opts && 'isDark' in opts ? opts.isDark : false;
    let isItalic = opts && 'isItalic' in opts ? opts.isItalic : false;
    let isReverse = opts && 'isReverse' in opts ? opts.isReverse : false;
    let string = new colorize.Colorize.new(text);
    if (front != null) {
      string.apply(front);
    }
    if (back != null) {
      string.apply(back);
    }
    if (dart.test(isUnderline)) {
      string.apply(colorize.Styles.UNDERLINE);
    }
    if (dart.test(isBold)) {
      string.apply(colorize.Styles.BOLD);
    }
    if (dart.test(isDark)) {
      string.apply(colorize.Styles.DARK);
    }
    if (dart.test(isItalic)) {
      string.apply(colorize.Styles.ITALIC);
    }
    if (dart.test(isReverse)) {
      string.apply(colorize.Styles.REVERSE);
    }
    core.print(string);
  };
  dart.trackLibraries("packages/colorize/colorize", {
    "package:colorize/colorize.dart": colorize
  }, {
    "package:colorize/colorize.dart": ["src/styles.dart", "src/colorize.dart", "src/color.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/styles.dart","src/colorize.dart","src/color.dart"],"names":[],"mappings":"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","file":"colorize.unsound.ddc.js"}');
  // Exports:
  return {
    colorize: colorize
  };
}));

//# sourceMappingURL=colorize.unsound.ddc.js.map
