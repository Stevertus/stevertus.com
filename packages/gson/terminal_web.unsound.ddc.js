define(['dart_sdk'], (function load__packages__gson__terminal_web(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var terminal_web = Object.create(dart.library);
  const CT = Object.create(null);
  dart.copyProperties(terminal_web, {
    get terminalColumns() {
      return 50;
    }
  });
  dart.trackLibraries("packages/gson/terminal_web", {
    "package:gson/terminal_web.dart": terminal_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["terminal_web.dart"],"names":[],"mappings":";;;;;;;;;AAC2B;IAAE","file":"terminal_web.unsound.ddc.js"}');
  // Exports:
  return {
    terminal_web: terminal_web
  };
}));

//# sourceMappingURL=terminal_web.unsound.ddc.js.map
