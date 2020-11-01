define(['dart_sdk', 'packages/objd/basic/types/block', 'packages/objd/basic/command', 'packages/objd/basic/types/slot', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__placeholder_setdetect(dart_sdk, packages__objd__basic__types__block, packages__objd__basic__command, packages__objd__basic__types__slot, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blocks = packages__objd__basic__types__block.basic__types__blocks;
  const block = packages__objd__basic__types__block.basic__types__block;
  const for_list = packages__objd__basic__command.basic__for_list;
  const comment = packages__objd__basic__command.wrappers__comment;
  const $if = packages__objd__basic__command.wrappers__if;
  const condition = packages__objd__basic__command.basic__types__condition;
  const data = packages__objd__basic__command.wrappers__data;
  const entity = packages__objd__basic__command.basic__types__entity;
  const location = packages__objd__basic__command.basic__types__location;
  const widget = packages__objd__basic__command.basic__widget;
  const replaceitem = packages__objd__basic__command.wrappers__replaceitem;
  const rest_action = packages__objd__basic__command.basic__rest_action;
  const item = packages__objd__basic__command.basic__types__item;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  const context = packages__objd__build__context.build__context;
  var placeholder_setdetect = Object.create(dart.library);
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var RestActionAbleL = () => (RestActionAbleL = dart.constFn(dart.legacy(rest_action.RestActionAble)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToRestActionAbleL = () => (intLToRestActionAbleL = dart.constFn(dart.fnType(RestActionAbleL(), [intL()])))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/placeholder_setdetect.dart";
  var _block = dart.privateName(placeholder_setdetect, "_block");
  var placeholder$ = dart.privateName(placeholder_setdetect, "PlaceholderSetDetect.placeholder");
  var guiModel$ = dart.privateName(placeholder_setdetect, "PlaceholderSetDetect.guiModel");
  placeholder_setdetect.PlaceholderSetDetect = class PlaceholderSetDetect extends widget.Widget {
    get placeholder() {
      return this[placeholder$];
    }
    set placeholder(value) {
      this[placeholder$] = value;
    }
    get guiModel() {
      return this[guiModel$];
    }
    set guiModel(value) {
      this[guiModel$] = value;
    }
    generate(context) {
      return new for_list.For.new({to: 26, create: dart.fn(i => {
          if (dart.notNull(i) > 0 && dart.notNull(i) < 4) return new comment.Comment.Null();
          if (dart.notNull(i) > 9 && dart.notNull(i) < 13) return new comment.Comment.Null();
          if (dart.notNull(i) > 18 && dart.notNull(i) < 22) return new comment.Comment.Null();
          if (i === 15) {
            return new $if.If.not(new condition.Condition.and([new block.Block.nbt(this[_block], {strNbt: "{Items:[{Slot:15b,Count:0b}]}"}), new block.Block.nbt(this[_block], {strNbt: "{Items:[{Slot:15b,tag:{" + dart.str(context.packId) + "Result:1}}]}"})]), {then: JSArrayOfWidgetL().of([new data.Data.modify(new entity.Entity.Selected(), {path: "HandItems[0]", modify: new data.DataModify.set(new location.Location.here(), {fromPath: "Items[{Slot:15b}]"})}), new data.Data.remove(new location.Location.here(), {path: "Items[{Slot:15b}]"})])});
          }
          let replaceItem = this.placeholder;
          if (this.guiModel != null && this.guiModel.slot != null && this.guiModel.slot.id == i) {
            replaceItem = this.guiModel;
          }
          let throwItem = new $if.If.not(new condition.Condition.and([new block.Block.nbt(this[_block], {strNbt: "{Items:[{Slot:" + dart.str(i) + "b,Count:0b}]}"}), new block.Block.nbt(this[_block], {strNbt: "{Items:[{Slot:" + dart.str(i) + "b,tag:{" + dart.str(context.packId) + "Placeholder:1}}]}"})]), {then: JSArrayOfWidgetL().of([new data.Data.modify(new entity.Entity.Selected(), {path: "HandItems[0]", modify: new data.DataModify.set(new location.Location.here(), {fromPath: "Items[{Slot:" + dart.str(i) + "b}]"})})])});
          return new for_list.For.of(JSArrayOfWidgetL().of([throwItem, new $if.If.not(new block.Block.nbt(this[_block], {strNbt: "{Items:[{Slot:" + dart.str(i) + "b,tag:{" + dart.str(context.packId) + "Placeholder:1}}]}"}), {then: JSArrayOfWidgetL().of([new replaceitem.ReplaceItem.block(new location.Location.here(), {slot: slot.Slot.chest(dart.notNull(i) + 1), item: replaceItem})])})]));
        }, intLToRestActionAbleL())});
    }
  };
  (placeholder_setdetect.PlaceholderSetDetect.new = function(placeholder, guiModel, useBarrel) {
    this[_block] = blocks.Blocks.chest;
    this[placeholder$] = placeholder;
    this[guiModel$] = guiModel;
    if (useBarrel != null && dart.test(useBarrel)) this[_block] = blocks.Blocks.barrel;
  }).prototype = placeholder_setdetect.PlaceholderSetDetect.prototype;
  dart.addTypeTests(placeholder_setdetect.PlaceholderSetDetect);
  dart.addTypeCaches(placeholder_setdetect.PlaceholderSetDetect);
  dart.setMethodSignature(placeholder_setdetect.PlaceholderSetDetect, () => ({
    __proto__: dart.getMethods(placeholder_setdetect.PlaceholderSetDetect.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(placeholder_setdetect.PlaceholderSetDetect, L0);
  dart.setFieldSignature(placeholder_setdetect.PlaceholderSetDetect, () => ({
    __proto__: dart.getFields(placeholder_setdetect.PlaceholderSetDetect.__proto__),
    placeholder: dart.fieldType(dart.legacy(item.Item)),
    guiModel: dart.fieldType(dart.legacy(item.Item)),
    [_block]: dart.fieldType(dart.legacy(block.Block))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/placeholder_setdetect", {
    "package:objd_crafting/widgets/placeholder_setdetect.dart": placeholder_setdetect
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["placeholder_setdetect.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;IACA;;;;;;aAQmB;AACtB,YAAO,2BACD,YACI,QAAK;AAEX,cAAM,aAAF,CAAC,IAAG,KAAO,aAAF,CAAC,IAAG,GAAG,MAAe;AACnC,cAAM,aAAF,CAAC,IAAG,KAAO,aAAF,CAAC,IAAG,IAAI,MAAe;AACpC,cAAM,aAAF,CAAC,IAAG,MAAQ,aAAF,CAAC,IAAG,IAAI,MAAe;AAErC,cAAI,AAAE,CAAD,KAAI;AACP,kBAAU,gBAGI,4BAAI,CACN,oBAAI,uBAAgB,mCACpB,oBAAI,uBAEF,AAAsD,qCAA5B,AAAQ,OAAD,WAAQ,2BAE7C,uBAEC,qBACI,qCACD,wBACa,wBAAa,yCAClB,yBAEX,qBAAgB,qCAAc;;AAIvC,4BAAc;AAElB,cAAI,iBAAY,QACZ,AAAS,sBAAQ,QACjB,AAAS,AAAK,AAAG,yBAAG,CAAC;AACD,YAAtB,cAAc;;AAGZ,0BAAe,eACP,4BAAI,CAGN,oBAAI,uBAAgB,AAAiC,4BAAhB,CAAC,IAAC,mBACvC,oBAAI,uBAEF,AAA6D,4BAA5C,CAAC,IAAC,qBAAS,AAAQ,OAAD,WAAQ,gCAE/C,uBAEC,qBAAc,qCACT,wBACa,wBAAa,yCAClB,AAAqB,0BAAN,CAAC,IAAC;AAIvC,gBAAW,qBACT,uBAEE,SAAS,EACN,eAEK,oBAAI,uBAEF,AAA6D,4BAA5C,CAAC,IAAC,qBAAS,AAAQ,OAAD,WAAQ,8BAC7C,uBAEQ,kCAAe,qCACZ,gBAAQ,aAAF,CAAC,IAAG,UAAU,WAAW;;IAO5D;;6DAjF0B,aAAkB,UAAe;IAFrD,eAAgB;IAEI;IAAkB;AAC1C,QAAI,SAAS,IAAI,kBAAQ,SAAS,GAAE,AAAsB,eAAN;EACtD","file":"placeholder_setdetect.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__placeholder_setdetect: placeholder_setdetect
  };
}));

//# sourceMappingURL=placeholder_setdetect.unsound.ddc.js.map
