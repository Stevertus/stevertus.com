define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__dropitem(dart_sdk, packages__objd__basic__command, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const $if = packages__objd__basic__command.wrappers__if;
  const data = packages__objd__basic__command.wrappers__data;
  const entity = packages__objd__basic__command.basic__types__entity;
  const execute = packages__objd__basic__command.wrappers__execute;
  const summon = packages__objd__basic__command.wrappers__summon;
  const entities = packages__objd__basic__command.basic__types__entities;
  const widget = packages__objd__basic__command.basic__widget;
  const context = packages__objd__build__context.build__context;
  var dropitem = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/dropitem.dart";
  dropitem.DropItem = class DropItem extends widget.Widget {
    generate(context) {
      return new $if.If.new(new data.Data.get(new entity.Entity.Selected(), {path: "HandItems[0].Count"}), {then: JSArrayOfWidgetL().of([new execute.Execute.at(new entity.Entity.Player(), {children: JSArrayOfWidgetL().of([new summon.Summon.new(entities.Entities.item, {tags: JSArrayOfStringL().of([dart.notNull(context.packId) + "Dropped"]), nbt: new (IdentityMapOfStringL$dynamic()).from(["PickupDelay", 0, "Item", new (IdentityMapOfStringL$ObjectL()).from(["id", "minecraft:stone", "Count", 1])])}), new data.Data.modify(new entity.Entity.new({tags: [dart.notNull(context.packId) + "Dropped"], limit: 1}).sort(entity.Sort.nearest), {path: "Item", modify: new data.DataModify.set(new entity.Entity.Selected(), {fromPath: "HandItems[0]"})})])}), new data.Data.merge(new entity.Entity.Selected(), {nbt: new (IdentityMapOfStringL$dynamic()).from(["HandItems", []])})])});
    }
  };
  (dropitem.DropItem.new = function() {
    ;
  }).prototype = dropitem.DropItem.prototype;
  dart.addTypeTests(dropitem.DropItem);
  dart.addTypeCaches(dropitem.DropItem);
  dart.setMethodSignature(dropitem.DropItem, () => ({
    __proto__: dart.getMethods(dropitem.DropItem.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(dropitem.DropItem, L0);
  dart.trackLibraries("packages/objd_crafting/widgets/dropitem", {
    "package:objd_crafting/widgets/dropitem.dart": dropitem
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropitem.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;aAM0B;AACtB,YAAO,gBACA,kBAAW,qCAAkB,+BAC5B,uBACI,uBAAU,uCAAoB,uBACpC,sBACW,+BACH,uBACW,aAAf,AAAQ,OAAD,WAAU,kBAEd,2CACH,eAAe,GACf,QAAQ,2CACN,MAAM,mBACN,SAAS,SAIV,qBACH,AACK,6BADQ,CAAgB,aAAf,AAAQ,OAAD,WAAU,mBAAmB,SACnC,6BACT,gBACa,wBAAW,yCAAsB,wBAGnD,oBAAa,oCAAiB,2CAAC,aAAa;IAGvD;;;;EA/BU","file":"dropitem.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__dropitem: dropitem
  };
}));

//# sourceMappingURL=dropitem.unsound.ddc.js.map
