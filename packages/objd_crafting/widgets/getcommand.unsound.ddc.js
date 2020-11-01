define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd/basic/types/slot', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__getcommand(dart_sdk, packages__objd__basic__command, packages__objd__basic__types__slot, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_components = packages__objd__basic__command.basic__text_components;
  const location = packages__objd__basic__command.basic__types__location;
  const tellraw = packages__objd__basic__command.wrappers__tellraw;
  const entity = packages__objd__basic__command.basic__types__entity;
  const widget = packages__objd__basic__command.basic__widget;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  const context = packages__objd__build__context.build__context;
  var getcommand = Object.create(dart.library);
  var $add = dartx.add;
  var TextComponentL = () => (TextComponentL = dart.constFn(dart.legacy(text_components.TextComponent)))();
  var JSArrayOfTextComponentL = () => (JSArrayOfTextComponentL = dart.constFn(_interceptors.JSArray$(TextComponentL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/getcommand.dart";
  var useBarrel$ = dart.privateName(getcommand, "GetCommand.useBarrel");
  var show = dart.privateName(getcommand, "GetCommand.show");
  getcommand.GetCommand = class GetCommand extends widget.Widget {
    get useBarrel() {
      return this[useBarrel$];
    }
    set useBarrel(value) {
      this[useBarrel$] = value;
    }
    get show() {
      return this[show];
    }
    set show(value) {
      this[show] = value;
    }
    generate(context) {
      this.show[$add](new text_components.TextComponent.new("execute if block ~ ~ ~ minecraft:" + (dart.test(this.useBarrel) ? "chest" : "barrel") + "{\"Items\":[", {color: text_components.Color.Yellow}));
      for (let i = 1; i < 9; i = i + 1) {
        this.show[$add](new text_components.TextComponent.blockNbt(new location.Location.here(), {path: "Items[{Slot:" + dart.str(slot.Slot.craft(i).id) + "b}]"}));
      }
      this.show[$add](new text_components.TextComponent.new("]} run scoreboard players set @s " + dart.str(context.packId) + "ID [change]"));
      return new tellraw.Tellraw.new(new entity.Entity.Selected(), {show: this.show});
    }
  };
  (getcommand.GetCommand.new = function(useBarrel) {
    this[show] = JSArrayOfTextComponentL().of([]);
    this[useBarrel$] = useBarrel;
    ;
  }).prototype = getcommand.GetCommand.prototype;
  dart.addTypeTests(getcommand.GetCommand);
  dart.addTypeCaches(getcommand.GetCommand);
  dart.setMethodSignature(getcommand.GetCommand, () => ({
    __proto__: dart.getMethods(getcommand.GetCommand.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(getcommand.GetCommand, L0);
  dart.setFieldSignature(getcommand.GetCommand, () => ({
    __proto__: dart.getFields(getcommand.GetCommand.__proto__),
    useBarrel: dart.fieldType(dart.legacy(core.bool)),
    show: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_components.TextComponent))))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/getcommand", {
    "package:objd_crafting/widgets/getcommand.dart": getcommand
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["getcommand.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAGO;;;;;;IAGe;;;;;;aAGI;AAGG,MAFzB,AAAK,gBAAI,sCACL,AAA8E,iDAA1C,kBAAY,UAAU,YAAS,wBACtD;AACjB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AAE0B,QADhD,AAAK,gBAAkB,2CAAkB,qCAC/B,AAAoC,0BAAhB,AAAS,gBAAH,CAAC,QAAK;;AAGyB,MADrE,AAAK,gBAAI,sCACL,AAA+D,+CAA3B,AAAQ,OAAD,WAAQ;AAEvD,YAAO,yBAAe,qCAAkB;IAC1C;;wCAjBgB;IAEI,aAAO;IAFX;;EAAU","file":"getcommand.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__getcommand: getcommand
  };
}));

//# sourceMappingURL=getcommand.unsound.ddc.js.map
