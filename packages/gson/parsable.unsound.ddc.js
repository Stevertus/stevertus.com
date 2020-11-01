define(['dart_sdk', 'packages/gson/terminal_web', 'packages/colorize/colorize', 'packages/gson/prog'], (function load__packages__gson__parsable(dart_sdk, packages__gson__terminal_web, packages__colorize__colorize, packages__gson__prog) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const terminal_web = packages__gson__terminal_web.terminal_web;
  const colorize = packages__colorize__colorize.colorize;
  const prog = packages__gson__prog.prog;
  var parsable = Object.create(dart.library);
  var $substring = dartx.substring;
  var $toString = dartx.toString;
  var $round = dartx.round;
  const CT = Object.create(null);
  var L0 = "package:gson/parsable.dart";
  var _position = dart.privateName(parsable, "_position");
  var _ended = dart.privateName(parsable, "_ended");
  var _parsable$ = dart.privateName(parsable, "_parsable");
  var _checkEnded = dart.privateName(parsable, "_checkEnded");
  var _repeatString = dart.privateName(parsable, "_repeatString");
  parsable.GsonParsable = class GsonParsable extends prog.ErrorGenerator {
    get parsable() {
      return this[_parsable$];
    }
    get position() {
      return this[_position];
    }
    get ended() {
      return this[_ended];
    }
    next() {
      this.skip();
      return this.parsable[$substring](dart.notNull(this.position) - 1, this.position);
    }
    skip() {
      if (dart.test(this.ended)) {
        dart.throw(this.error("Input ended"));
      }
      this[_position] = dart.notNull(this[_position]) + 1;
      this[_checkEnded]();
    }
    goBack(number) {
      this[_position] = dart.notNull(this[_position]) - dart.notNull(number);
      if (dart.notNull(this[_position]) < 0) {
        this[_position] = 0;
      }
      this[_checkEnded]();
    }
    actual() {
      return this.parsable[$substring](this.position, dart.notNull(this.position) + 1);
    }
    peek(number) {
      return dart.test(this.has(number)) ? this.parsable[$substring](dart.notNull(this.position) + dart.notNull(number), dart.notNull(this.position) + dart.notNull(number) + 1) : dart.throw(this.error("Not enough space to peek " + dart.str(number)));
    }
    hasNext() {
      return this.has(1);
    }
    has(space) {
      return this.parsable.length > dart.notNull(this.position) + dart.notNull(space);
    }
    error(message, opts) {
      let from = opts && 'from' in opts ? opts.from : 0;
      let to = opts && 'to' in opts ? opts.to : 0;
      return core.Exception.new(dart.notNull(message) + " at " + dart.notNull(this.toString({from: from, to: to, err: true})));
    }
    reformatError(e, stack = null) {
      return core.Exception.new(dart.toString(e)[$substring](10) + "at " + dart.notNull(this.toString()) + dart.notNull(stack != null ? dart.toString(stack) : ""));
    }
    toString(opts) {
      let from = opts && 'from' in opts ? opts.from : 0;
      let to = opts && 'to' in opts ? opts.to : 0;
      let err = opts && 'err' in opts ? opts.err : false;
      if (this.parsable.length > dart.notNull(terminal_web.terminalColumns)) {
        let start = this.parsable.length > dart.notNull(terminal_web.terminalColumns) ? (dart.notNull(this.position) - dart.notNull(terminal_web.terminalColumns) / 2 + 3)[$round]() : 0;
        let end = this.parsable.length > dart.notNull(terminal_web.terminalColumns) ? (dart.notNull(this.position) + dart.notNull(terminal_web.terminalColumns) / 2 - 4)[$round]() : this.parsable.length - 1;
        if (start < 0) {
          end = end + start * -1;
          start = 0;
        }
        if (end >= this.parsable.length) {
          start = start - (end - this.parsable.length + 1);
          end = this.parsable.length - 1;
        }
        let startletters = "(+" + dart.str(start) + ")";
        let startletters_ = null;
        let endletters = "(+" + dart.str(this.parsable.length - end + 7) + ")";
        let endletters_ = null;
        end = end - (endletters.length + startletters.length);
        do {
          endletters_ = endletters;
          startletters = "(+" + dart.str(end) + ")";
          if (endletters.length - endletters_.length > 0) {
            end = end - (endletters.length - endletters_.length);
          }
        } while (endletters_.length !== endletters.length);
        do {
          startletters_ = startletters;
          startletters = "(+" + dart.str(start) + ")";
          if (startletters.length - startletters_.length > 0) {
            end = end - (startletters.length - startletters_.length);
          }
        } while (startletters_.length !== startletters.length);
        if (start < 0) {
          end = end + start * -1;
          start = 0;
        }
        let pos = dart.notNull(this.position) - start + startletters.length + 3;
        let code = startletters + "..." + this.parsable[$substring](start, end) + ("..." + endletters + "\n");
        let beforeSelect = code[$substring](0, pos - dart.notNull(from));
        let selected = new colorize.Colorize.new(code[$substring](pos - dart.notNull(from), pos + dart.notNull(to) + 1));
        let afterSelect = code[$substring](pos + dart.notNull(to) + 1);
        let bottom = new colorize.Colorize.new(dart.notNull(this[_repeatString](" ", pos - dart.notNull(from))) + dart.notNull(this[_repeatString]("^", 1 + dart.notNull(from) + dart.notNull(to))) + "\n");
        if (dart.test(err)) {
          bottom.red();
          selected.bgRed();
        }
        return "position " + dart.str(dart.notNull(this.position) + 1) + "/" + dart.str(this.parsable.length) + " (\"" + dart.str(this.actual()) + "\")\n\nHere:\n" + beforeSelect + dart.notNull(selected.toString()) + afterSelect + dart.notNull(bottom.toString());
      }
      let beforeSelect = this.parsable[$substring](0, dart.notNull(this.position) - dart.notNull(from));
      let selected = new colorize.Colorize.new(this.parsable[$substring](dart.notNull(this.position) - dart.notNull(from), dart.notNull(this.position) + dart.notNull(to) + 1));
      let afterSelect = this.parsable[$substring](dart.notNull(this.position) + dart.notNull(to) + 1);
      let bottom = new colorize.Colorize.new(dart.notNull(this[_repeatString](" ", dart.notNull(this.position) - dart.notNull(from))) + dart.notNull(this[_repeatString]("^", 1 + dart.notNull(from) + dart.notNull(to))) + "\n");
      if (dart.test(err)) {
        bottom.red();
        selected.bgRed();
      }
      return "position " + dart.str(dart.notNull(this.position) + 1) + "/" + dart.str(this.parsable.length) + " (\"" + dart.str(this.actual()) + "\")\n\nHere:\n" + beforeSelect + dart.notNull(selected.toString()) + afterSelect + "\n" + dart.notNull(bottom.toString());
    }
    [_repeatString](s, number) {
      let ret = "";
      for (let i = 0; i < dart.notNull(number); i = i + 1) {
        ret = ret + dart.notNull(s);
      }
      return ret;
    }
    [_checkEnded]() {
      this[_ended] = dart.notNull(this.position) >= this.parsable.length - 1;
    }
  };
  (parsable.GsonParsable.new = function(_parsable, opts) {
    let position = opts && 'position' in opts ? opts.position : 0;
    this[_position] = 0;
    this[_ended] = false;
    this[_parsable$] = _parsable;
    parsable.GsonParsable.__proto__.new.call(this);
    this[_position] = position;
  }).prototype = parsable.GsonParsable.prototype;
  dart.addTypeTests(parsable.GsonParsable);
  dart.addTypeCaches(parsable.GsonParsable);
  dart.setMethodSignature(parsable.GsonParsable, () => ({
    __proto__: dart.getMethods(parsable.GsonParsable.__proto__),
    next: dart.fnType(dart.legacy(core.String), []),
    skip: dart.fnType(dart.void, []),
    goBack: dart.fnType(dart.void, [dart.legacy(core.int)]),
    actual: dart.fnType(dart.legacy(core.String), []),
    peek: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    hasNext: dart.fnType(dart.legacy(core.bool), []),
    has: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    error: dart.fnType(dart.legacy(core.Exception), [dart.legacy(core.String)], {from: dart.legacy(core.int), to: dart.legacy(core.int)}, {}),
    reformatError: dart.fnType(dart.legacy(core.Exception), [dart.legacy(core.Exception)], [dart.legacy(core.StackTrace)]),
    toString: dart.fnType(dart.legacy(core.String), [], {err: dart.legacy(core.bool), from: dart.legacy(core.int), to: dart.legacy(core.int)}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {err: dart.legacy(core.bool), from: dart.legacy(core.int), to: dart.legacy(core.int)}, {}),
    [_repeatString]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.int)]),
    [_checkEnded]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(parsable.GsonParsable, () => ({
    __proto__: dart.getGetters(parsable.GsonParsable.__proto__),
    parsable: dart.legacy(core.String),
    position: dart.legacy(core.int),
    ended: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(parsable.GsonParsable, L0);
  dart.setFieldSignature(parsable.GsonParsable, () => ({
    __proto__: dart.getFields(parsable.GsonParsable.__proto__),
    [_parsable$]: dart.fieldType(dart.legacy(core.String)),
    [_position]: dart.fieldType(dart.legacy(core.int)),
    [_ended]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(parsable.GsonParsable, ['toString']);
  dart.trackLibraries("packages/gson/parsable", {
    "package:gson/parsable.dart": parsable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["parsable.dart"],"names":[],"mappings":"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","file":"parsable.unsound.ddc.js"}');
  // Exports:
  return {
    parsable: parsable
  };
}));

//# sourceMappingURL=parsable.unsound.ddc.js.map
