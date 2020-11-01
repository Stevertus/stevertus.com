define(['dart_sdk', 'packages/objd/basic/types/block', 'packages/objd/basic/command', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__checkarea(dart_sdk, packages__objd__basic__types__block, packages__objd__basic__command, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blocks = packages__objd__basic__types__block.basic__types__blocks;
  const block = packages__objd__basic__types__block.basic__types__block;
  const setblock = packages__objd__basic__command.wrappers__setblock;
  const location = packages__objd__basic__command.basic__types__location;
  const for_list = packages__objd__basic__command.basic__for_list;
  const widget = packages__objd__basic__command.basic__widget;
  const $if = packages__objd__basic__command.wrappers__if;
  const score = packages__objd__basic__command.basic__score;
  const entity = packages__objd__basic__command.basic__types__entity;
  const data = packages__objd__basic__command.wrappers__data;
  const kill = packages__objd__basic__command.wrappers__kill;
  const entities = packages__objd__basic__command.basic__types__entities;
  const condition = packages__objd__basic__command.basic__types__condition;
  const tag = packages__objd__basic__command.basic__tag;
  const text_components = packages__objd__basic__command.basic__text_components;
  const context = packages__objd__build__context.build__context;
  var checkarea = Object.create(dart.library);
  var $add = dartx.add;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var MapOfStringL$intL = () => (MapOfStringL$intL = dart.constFn(core.Map$(StringL(), intL())))();
  var MapLOfStringL$intL = () => (MapLOfStringL$intL = dart.constFn(dart.legacy(MapOfStringL$intL())))();
  var IdentityMapOfStringL$MapLOfStringL$intL = () => (IdentityMapOfStringL$MapLOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfStringL$intL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/checkarea.dart";
  var _block = dart.privateName(checkarea, "_block");
  var _setTable = dart.privateName(checkarea, "_setTable");
  var onDestroy$ = dart.privateName(checkarea, "CheckArea.onDestroy");
  var displayName$ = dart.privateName(checkarea, "CheckArea.displayName");
  var invisible$ = dart.privateName(checkarea, "CheckArea.invisible");
  checkarea.CheckArea = class CheckArea extends widget.Widget {
    get onDestroy() {
      return this[onDestroy$];
    }
    set onDestroy(value) {
      this[onDestroy$] = value;
    }
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get invisible() {
      return this[invisible$];
    }
    set invisible(value) {
      this[invisible$] = value;
    }
    generate(context) {
      return new for_list.For.of((() => {
        let t0 = JSArrayOfWidgetL().of([]);
        t0[$add](new $if.If.new(new score.Score.fromSelected(dart.notNull(context.packId) + "ID").matchesRange(new entity.Range.from(0)), {then: JSArrayOfWidgetL().of([new data.Data.modify(new location.Location.here(), {path: "Items[{Slot:15b}].tag." + dart.str(context.packId) + "Result", modify: new data.DataModify.set(1)})])}));
        t0[$add](new $if.If.not(this[_block], {then: (() => {
            let t1 = JSArrayOfWidgetL().of([]);
            t1[$add](new kill.Kill.new(new entity.Entity.new({type: entities.Entities.item, nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new (IdentityMapOfStringL$MapLOfStringL$intL()).from(["tag", new (IdentityMapOfStringL$intL()).from([dart.str(context.packId) + "Placeholder", 1])])])})));
            t1[$add](new kill.Kill.new(new entity.Entity.new({type: entities.Entities.item, nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new (IdentityMapOfStringL$StringL()).from(["id", dart.toString(this[_block])])])})));
            t1[$add](new kill.Kill.new(new entity.Entity.new({type: entities.Entities.item, nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new (IdentityMapOfStringL$MapLOfStringL$intL()).from(["tag", new (IdentityMapOfStringL$intL()).from([dart.str(context.packId) + "Result", 1])])])})));
            if (this.onDestroy != null) t1[$add](this.onDestroy);
            t1[$add](new kill.Kill.new(new entity.Entity.Selected()));
            return t1;
          })()}));
        if (dart.test(this.invisible)) t0[$add](new $if.If.new(new condition.Condition.and([new location.Location.rel({x: 1.0}), new condition.Condition.not(new tag.Tag.new(dart.str(context.packId) + "BlockE", {entity: new entity.Entity.Selected()}))]), {then: JSArrayOfWidgetL().of([this[_setTable], new entity.Entity.Selected().addTag(dart.str(context.packId) + "BlockE")])}));
        if (dart.test(this.invisible)) t0[$add](new $if.If.new(new condition.Condition.and([new condition.Condition.not(new location.Location.rel({x: 1.0})), new tag.Tag.new(dart.str(context.packId) + "BlockE", {entity: new entity.Entity.Selected()})]), {then: JSArrayOfWidgetL().of([this[_setTable], new entity.Entity.Selected().removeTag(dart.str(context.packId) + "BlockE")])}));
        t0[$add](new $if.If.new(new condition.Condition.block(new location.Location.rel({y: -1.0}), {block: blocks.Blocks.hopper}), {then: JSArrayOfWidgetL().of([new data.Data.merge(new location.Location.rel({y: -1.0}), {nbt: new (IdentityMapOfStringL$dynamic()).from(["TransferCooldown", 20])})])}));
        return t0;
      })());
    }
  };
  (checkarea.CheckArea.new = function(onDestroy, displayName, isBarrel, invisible) {
    this[_block] = blocks.Blocks.chest;
    this[_setTable] = null;
    this[onDestroy$] = onDestroy;
    this[displayName$] = displayName;
    this[invisible$] = invisible;
    if (isBarrel != null && dart.test(isBarrel)) {
      this[_block] = blocks.Blocks.barrel;
      this.invisible = false;
    }
    this[_setTable] = new setblock.SetBlock.new(new block.Block.nbt(this[_block], {states: dart.test(this.invisible) ? new (IdentityMapOfStringL$dynamic()).from(["type", "left"]) : null, nbt: this.displayName != null ? new (IdentityMapOfStringL$dynamic()).from(["CustomName", this.displayName.toJson()]) : null}), {location: new location.Location.here()});
  }).prototype = checkarea.CheckArea.prototype;
  dart.addTypeTests(checkarea.CheckArea);
  dart.addTypeCaches(checkarea.CheckArea);
  dart.setMethodSignature(checkarea.CheckArea, () => ({
    __proto__: dart.getMethods(checkarea.CheckArea.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(checkarea.CheckArea, L0);
  dart.setFieldSignature(checkarea.CheckArea, () => ({
    __proto__: dart.getFields(checkarea.CheckArea.__proto__),
    onDestroy: dart.fieldType(dart.legacy(widget.Widget)),
    displayName: dart.fieldType(dart.legacy(text_components.TextComponent)),
    [_block]: dart.fieldType(dart.legacy(block.Block)),
    invisible: dart.fieldType(dart.legacy(core.bool)),
    [_setTable]: dart.fieldType(dart.legacy(setblock.SetBlock))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/checkarea", {
    "package:objd_crafting/widgets/checkarea.dart": checkarea
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["checkarea.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACO;;;;;;IAET;;;;;;aAoBmB;AACtB,YAAW,qBAAG;;AAEZ,gCAAS,AAAoC,6BAAR,aAAf,AAAQ,OAAD,WAAU,mBAAyB,sBAAK,YAC3D,uBACC,qBAAgB,qCACX,AAA+C,oCAAtB,AAAQ,OAAD,WAAQ,kBAC3B,wBAAI;AAG9B,gCAAI,qBAAc;;AACnB,uCAAK,6BAAsB,6BAAW,2CACpC,QAAQ,sDACN,OAAO,wCAA+B,SAA3B,AAAQ,OAAD,WAAQ,eAAc;AAG5C,uCAAK,6BAAsB,6BAAW,2CACpC,QAAQ,2CAAC,MAAa,cAAP;AAEjB,uCAAK,6BAAsB,6BAAW,2CACpC,QAAQ,sDACN,OAAO,wCAA0B,SAAtB,AAAQ,OAAD,WAAQ,UAAS;AAGvC,gBAAI,kBAAa,MAAM;AACvB,uCAAY;;;AAGd,sBAAI,iBACF,wBAEc,4BAAI,CACH,8BAAO,OACN,4BACN,gBAA6B,SAAtB,AAAQ,OAAD,WAAQ,mBAAwB,0CAE9C,uBACJ,iBACO,AAAW,oCAAgC,SAAtB,AAAQ,OAAD,WAAQ;AAEnD,sBAAI,iBACF,wBAEY,4BAAI,CACF,4BAAa,8BAAO,QAC9B,gBAA6B,SAAtB,AAAQ,OAAD,WAAQ,mBAAwB,yCAE1C,uBACJ,iBACO,AAAW,uCAAmC,SAAtB,AAAQ,OAAD,WAAQ;AAIpD,gCACY,8BAAe,8BAAO,gBAAmB,+BAC7C,uBACC,oBACM,8BAAO,cACX,2CACH,oBAAoB;;;IAMhC;;sCAnFe,WAAgB,aAAkB,UAAe;IAH1D,eAAgB;IAkBb;IAfM;IAAgB;IAAiC;AAC9D,QAAI,QAAQ,IAAI,kBAAQ,QAAQ;AACR,MAAtB,eAAgB;AACC,MAAjB,iBAAY;;AASb,IAPD,kBAAY,0BACJ,oBACJ,iCACQ,kBAAY,2CAAC,QAAQ,WAAU,WAClC,AAAY,oBAAG,OAAO,2CAAC,cAAc,AAAY,8BAAY,mBAEjD;EAEvB","file":"checkarea.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__checkarea: checkarea
  };
}));

//# sourceMappingURL=checkarea.unsound.ddc.js.map
