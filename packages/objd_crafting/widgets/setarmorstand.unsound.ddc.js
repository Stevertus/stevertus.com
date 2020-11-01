define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd/basic/types/block', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__setarmorstand(dart_sdk, packages__objd__basic__command, packages__objd__basic__types__block, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const for_list = packages__objd__basic__command.basic__for_list;
  const execute = packages__objd__basic__command.wrappers__execute;
  const armorstand = packages__objd__basic__command.utils__armorstand;
  const location = packages__objd__basic__command.basic__types__location;
  const widget = packages__objd__basic__command.basic__widget;
  const setblock = packages__objd__basic__command.wrappers__setblock;
  const item = packages__objd__basic__command.basic__types__item;
  const text_components = packages__objd__basic__command.basic__text_components;
  const block = packages__objd__basic__types__block.basic__types__block;
  const blocks = packages__objd__basic__types__block.basic__types__blocks;
  const context = packages__objd__build__context.build__context;
  var setarmorstand = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/setarmorstand.dart";
  var blockModel$ = dart.privateName(setarmorstand, "SetArmorstand.blockModel");
  var displayName$ = dart.privateName(setarmorstand, "SetArmorstand.displayName");
  var useBarrel$ = dart.privateName(setarmorstand, "SetArmorstand.useBarrel");
  var invisible$ = dart.privateName(setarmorstand, "SetArmorstand.invisible");
  setarmorstand.SetArmorstand = class SetArmorstand extends widget.Widget {
    get blockModel() {
      return this[blockModel$];
    }
    set blockModel(value) {
      this[blockModel$] = value;
    }
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get useBarrel() {
      return this[useBarrel$];
    }
    set useBarrel(value) {
      this[useBarrel$] = value;
    }
    get invisible() {
      return this[invisible$];
    }
    set invisible(value) {
      this[invisible$] = value;
    }
    generate(context) {
      return new for_list.For.of(JSArrayOfWidgetL().of([new execute.Execute.new({children: JSArrayOfWidgetL().of([new armorstand.ArmorStand.staticMarker(new location.Location.rel({y: -0.5}), {head: this.blockModel, small: true, tags: JSArrayOfStringL().of([dart.str(context.packId) + "Table"])})])}).center(), new setblock.SetBlock.new(new block.Block.nbt(dart.test(this.useBarrel) ? blocks.Blocks.barrel : blocks.Blocks.chest, {states: dart.test(this.useBarrel) || !dart.test(this.invisible) ? new (IdentityMapOfStringL$dynamic()).new() : new (IdentityMapOfStringL$dynamic()).from(["type", "left"]), nbt: new (IdentityMapOfStringL$dynamic()).from(["CustomName", this.displayName.toJson()])}), {location: new location.Location.here()})]));
    }
  };
  (setarmorstand.SetArmorstand.new = function(blockModel, displayName, useBarrel, invisible) {
    this[blockModel$] = blockModel;
    this[displayName$] = displayName;
    this[useBarrel$] = useBarrel;
    this[invisible$] = invisible;
    ;
  }).prototype = setarmorstand.SetArmorstand.prototype;
  dart.addTypeTests(setarmorstand.SetArmorstand);
  dart.addTypeCaches(setarmorstand.SetArmorstand);
  dart.setMethodSignature(setarmorstand.SetArmorstand, () => ({
    __proto__: dart.getMethods(setarmorstand.SetArmorstand.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(setarmorstand.SetArmorstand, L0);
  dart.setFieldSignature(setarmorstand.SetArmorstand, () => ({
    __proto__: dart.getFields(setarmorstand.SetArmorstand.__proto__),
    blockModel: dart.fieldType(dart.legacy(item.Item)),
    displayName: dart.fieldType(dart.legacy(text_components.TextComponent)),
    useBarrel: dart.fieldType(dart.legacy(core.bool)),
    invisible: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/setarmorstand", {
    "package:objd_crafting/widgets/setarmorstand.dart": setarmorstand
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["setarmorstand.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;IACS;;;;;;IACT;;;;;;IACA;;;;;;aAUmB;AACtB,YAAW,qBAAG,uBACZ,AASE,mCARU,uBACG,uCACA,8BAAO,CAAC,cACX,wBACC,YACD,uBAAyB,SAArB,AAAQ,OAAD,WAAQ,0BAI/B,0BACQ,8BACJ,kBAAmB,uBAAgB,8BACjB,UAAV,8BAAc,kBAAY,6CAAK,2CAAC,QAAQ,eAC3C,2CAAC,cAAc,AAAY,0CAEf;IAGzB;;8CA5BO,YACA,aACA,WACA;IAHA;IACA;IACA;IACA;;EACN","file":"setarmorstand.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__setarmorstand: setarmorstand
  };
}));

//# sourceMappingURL=setarmorstand.unsound.ddc.js.map
