define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd_gui/data/items', 'packages/objd/build/context'], (function load__packages__objd_gui__widgets__all_tag(dart_sdk, packages__objd__basic__command, packages__objd_gui__data__items, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const raw_file = packages__objd__basic__command.basic__raw_file;
  const widget = packages__objd__basic__command.basic__widget;
  const items = packages__objd_gui__data__items.data__items;
  const context = packages__objd__build__context.build__context;
  var all_tag = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var IdentityMapOfStringL$ListLOfStringL = () => (IdentityMapOfStringL$ListLOfStringL = dart.constFn(_js_helper.IdentityMap$(StringL(), ListLOfStringL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_gui/widgets/all_tag.dart";
  all_tag.TagAll = class TagAll extends widget.Widget {
    generate(context) {
      return new raw_file.RawFile.new("tags/items/all.json", convert.json.encode(new (IdentityMapOfStringL$ListLOfStringL()).from(["values", items.UsedItems.items])));
    }
  };
  (all_tag.TagAll.new = function() {
    ;
  }).prototype = all_tag.TagAll.prototype;
  dart.addTypeTests(all_tag.TagAll);
  dart.addTypeCaches(all_tag.TagAll);
  dart.setMethodSignature(all_tag.TagAll, () => ({
    __proto__: dart.getMethods(all_tag.TagAll.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(all_tag.TagAll, L0);
  dart.trackLibraries("packages/objd_gui/widgets/all_tag", {
    "package:objd_gui/widgets/all_tag.dart": all_tag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["all_tag.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;aAO0B;AACtB,YAAO,0BACL,uBACA,AAAK,oBACH,kDACE,UAAoB;IAI5B;;;;EACF","file":"all_tag.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__all_tag: all_tag
  };
}));

//# sourceMappingURL=all_tag.unsound.ddc.js.map
