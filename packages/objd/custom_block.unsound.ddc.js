define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd/basic/types/block', 'packages/objd/build/context'], (function load__packages__objd__custom_block(dart_sdk, packages__objd__basic__command, packages__objd__basic__types__block, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const entities = packages__objd__basic__command.basic__types__entities;
  const text_components = packages__objd__basic__command.basic__text_components;
  const for_list = packages__objd__basic__command.basic__for_list;
  const widget = packages__objd__basic__command.basic__widget;
  const setblock = packages__objd__basic__command.wrappers__setblock;
  const location = packages__objd__basic__command.basic__types__location;
  const clear = packages__objd__basic__command.wrappers__clear;
  const entity = packages__objd__basic__command.basic__types__entity;
  const summon = packages__objd__basic__command.wrappers__summon;
  const armorstand = packages__objd__basic__command.utils__armorstand;
  const $if = packages__objd__basic__command.wrappers__if;
  const condition = packages__objd__basic__command.basic__types__condition;
  const kill = packages__objd__basic__command.wrappers__kill;
  const execute = packages__objd__basic__command.wrappers__execute;
  const file = packages__objd__basic__command.basic__file;
  const timer = packages__objd__basic__command.utils__timer;
  const data = packages__objd__basic__command.wrappers__data;
  const pack = packages__objd__basic__command.basic__pack;
  const module = packages__objd__basic__command.basic__module;
  const item = packages__objd__basic__command.basic__types__item;
  const block = packages__objd__basic__types__block.basic__types__block;
  const context = packages__objd__build__context.build__context;
  var custom_block = Object.create(dart.library);
  var $contains = dartx.contains;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(file.File)))();
  var JSArrayOfFileL = () => (JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(FileL())))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/objd/custom_block.dart";
  var L1 = "package:objd/custom_block.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StringL());
    }
  }, false);
  var C0;
  var _setblock = dart.privateName(custom_block, "_setblock");
  var _blockLogic = dart.privateName(custom_block, "_blockLogic");
  var _break = dart.privateName(custom_block, "_break");
  var id$ = dart.privateName(custom_block, "CustomBlock.id");
  var name$ = dart.privateName(custom_block, "CustomBlock.name");
  var block$ = dart.privateName(custom_block, "CustomBlock.block");
  var item$ = dart.privateName(custom_block, "CustomBlock.item");
  var blockModel$ = dart.privateName(custom_block, "CustomBlock.blockModel");
  var main$ = dart.privateName(custom_block, "CustomBlock.main");
  var onBreak$ = dart.privateName(custom_block, "CustomBlock.onBreak");
  var onPlaced$ = dart.privateName(custom_block, "CustomBlock.onPlaced");
  var tags$ = dart.privateName(custom_block, "CustomBlock.tags");
  var generatePack$ = dart.privateName(custom_block, "CustomBlock.generatePack");
  var useItemFrame$ = dart.privateName(custom_block, "CustomBlock.useItemFrame");
  var fire$ = dart.privateName(custom_block, "CustomBlock.fire");
  var yOffset$ = dart.privateName(custom_block, "CustomBlock.yOffset");
  custom_block.CustomBlock = class CustomBlock extends module.Module {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get block() {
      return this[block$];
    }
    set block(value) {
      this[block$] = value;
    }
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    get blockModel() {
      return this[blockModel$];
    }
    set blockModel(value) {
      this[blockModel$] = value;
    }
    get main() {
      return this[main$];
    }
    set main(value) {
      this[main$] = value;
    }
    get onBreak() {
      return this[onBreak$];
    }
    set onBreak(value) {
      this[onBreak$] = value;
    }
    get onPlaced() {
      return this[onPlaced$];
    }
    set onPlaced(value) {
      this[onPlaced$] = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      this[tags$] = value;
    }
    get generatePack() {
      return this[generatePack$];
    }
    set generatePack(value) {
      this[generatePack$] = value;
    }
    get useItemFrame() {
      return this[useItemFrame$];
    }
    set useItemFrame(value) {
      this[useItemFrame$] = value;
    }
    get fire() {
      return this[fire$];
    }
    set fire(value) {
      this[fire$] = value;
    }
    get yOffset() {
      return this[yOffset$];
    }
    set yOffset(value) {
      this[yOffset$] = value;
    }
    getItem() {
      let t0;
      return this.item.copyWith({nbt: new (IdentityMapOfStringL$dynamic()).from(["EntityTag", new (IdentityMapOfStringL$ObjectL()).from(["id", dart.toString(entities.Entities.area_effect_cloud), "Tags", JSArrayOfStringL().of(["summon_" + dart.str(this.id)]), "Duration", 0, "WaitTime", 0, "Radius", 0])]), count: (t0 = this.item.count, t0 == null ? 1 : t0), name: this.name != null ? new text_components.TextComponent.new(this.name, {italic: false}) : null});
    }
    [_setblock](opts) {
      let t0;
      let fireTimer = opts && 'fireTimer' in opts ? opts.fireTimer : null;
      let headItem = (t0 = this.blockModel, t0 == null ? this.item : t0).copyWith({count: 1});
      return new for_list.For.of((() => {
        let t0 = JSArrayOfWidgetL().of([]);
        t0[$add](new setblock.SetBlock.new(this.block, {location: new location.Location.here()}));
        t0[$add](new clear.Clear.new(new entity.Entity.Player({gamemode: entity.Gamemode.creative, distance: new entity.Range.to(6)}), this.item.copyWith({count: 1})));
        t0[$add](this.useItemFrame != null && dart.test(this.useItemFrame) ? new summon.Summon.new(entities.Entities.item_frame, {location: new location.Location.rel({y: this.yOffset}), tags: (() => {
            let t1 = JSArrayOfStringL().of([]);
            t1[$add]("objd_" + dart.str(this.id));
            for (let t2 of this.tags)
              t1[$add](t2);
            return t1;
          })(), nbt: new (IdentityMapOfStringL$dynamic()).from(["Invisible", 1, "Fixed", 1, "Item", headItem.copyWith({name: new text_components.TextComponent.new(null)}).getMap(), "Facing", 1, "Invulnerable", 1])}) : new armorstand.ArmorStand.staticMarker(new location.Location.rel({y: dart.notNull(this.yOffset) - 0.5}), {tags: (() => {
            let t3 = JSArrayOfStringL().of([]);
            t3[$add]("objd_" + dart.str(this.id));
            for (let t4 of this.tags)
              t3[$add](t4);
            return t3;
          })(), head: headItem}));
        t0[$add](this.onPlaced);
        if (this.fire != null && dart.test(this.fire)) t0[$add](fireTimer);
        return t0;
      })());
    }
    [_blockLogic](opts) {
      let onbreak = opts && 'onbreak' in opts ? opts.onbreak : null;
      return new for_list.For.of((() => {
        let t5 = JSArrayOfWidgetL().of([]);
        t5[$add](new $if.If.new(new condition.Condition.and([new condition.Condition.new(new entity.Entity.Player({distance: new entity.Range.to(6)})), new condition.Condition.not(new condition.Condition.block(new location.Location.rel({y: dart.test(this.useItemFrame) ? -1.0 : 0.0}), {block: new block.Block.new(this.block.id)}))]), {then: JSArrayOfWidgetL().of([onbreak])}));
        if (this.main != null) t5[$add](this.main);
        return t5;
      })());
    }
    [_break]() {
      return new for_list.For.of(JSArrayOfWidgetL().of([new kill.Kill.new(new entity.Entity.new({distance: new entity.Range.to(1), type: entities.Entities.item}).not({tags: ["item_" + dart.str(this.id)]})), new summon.Summon.new(entities.Entities.item, {location: new location.Location.rel({y: dart.test(this.useItemFrame) ? 0.0 : 0.5}), nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", this.getItem().getMap()]), tags: JSArrayOfStringL().of(["item_" + dart.str(this.id)])}), this.onBreak, new kill.Kill.new(new entity.Entity.Self())]));
    }
    generate(context) {
      if (!(this.id != null && this.id[$isNotEmpty])) dart.assertFailed(null, L0, 160, 12, "id != null && id.isNotEmpty");
      if (!(this.block != null && dart.toString(this.block)[$isNotEmpty])) dart.assertFailed(null, L0, 161, 12, "block != null && block.toString().isNotEmpty");
      let path = dart.test(this.generatePack) ? "" : "objd_blocks/" + dart.str(this.id);
      core.print(this.getItem().getMap());
      let res = new for_list.For.of(JSArrayOfWidgetL().of([new execute.Execute.asat(new entity.Entity.new({tags: ["objd_" + dart.str(this.id)]}), {children: JSArrayOfWidgetL().of([new file.File.execute(path + "/block", {child: this[_blockLogic]({onbreak: new file.File.execute(path + "/break", {child: this[_break]()})})})])}), new execute.Execute.asat(new entity.Entity.new({type: entities.Entities.area_effect_cloud, tags: ["summon_" + dart.str(this.id)]}), {children: JSArrayOfWidgetL().of([new file.File.execute(path + "/set", {child: this[_setblock]({fireTimer: new timer.Timer.new("fire_timer", {path: path, ticks: 1200, children: JSArrayOfWidgetL().of([new data.Data.merge(new entity.Entity.Self(), {nbt: new (IdentityMapOfStringL$dynamic()).from(["Fire", 1300])})])})})})])})]));
      if (dart.test(this.generatePack)) return new pack.Pack.new({name: this.id, main: new file.File.new("main", {child: res})});
      return res;
    }
    registerFiles() {
      return JSArrayOfFileL().of([]);
    }
  };
  (custom_block.CustomBlock.new = function(id, item, opts) {
    let block = opts && 'block' in opts ? opts.block : null;
    let blockModel = opts && 'blockModel' in opts ? opts.blockModel : null;
    let main = opts && 'main' in opts ? opts.main : null;
    let onBreak = opts && 'onBreak' in opts ? opts.onBreak : null;
    let onPlaced = opts && 'onPlaced' in opts ? opts.onPlaced : null;
    let tags = opts && 'tags' in opts ? opts.tags : C0 || CT.C0;
    let generatePack = opts && 'generatePack' in opts ? opts.generatePack : true;
    let fire = opts && 'fire' in opts ? opts.fire : false;
    let name = opts && 'name' in opts ? opts.name : null;
    let useItemFrame = opts && 'useItemFrame' in opts ? opts.useItemFrame : false;
    let yOffset = opts && 'yOffset' in opts ? opts.yOffset : 1;
    this[id$] = id;
    this[item$] = item;
    this[block$] = block;
    this[blockModel$] = blockModel;
    this[main$] = main;
    this[onBreak$] = onBreak;
    this[onPlaced$] = onPlaced;
    this[tags$] = tags;
    this[generatePack$] = generatePack;
    this[fire$] = fire;
    this[name$] = name;
    this[useItemFrame$] = useItemFrame;
    this[yOffset$] = yOffset;
    if (!(id != null)) dart.assertFailed(null, L0, 73, 16, "id != null");
    if (!(block != null)) dart.assertFailed(null, L0, 74, 16, "block != null");
    if (!(item != null)) dart.assertFailed(null, L0, 75, 16, "item != null");
    if (!item.getId()[$contains]("spawn_egg")) dart.assertFailed("You have to provide a spawn egg.", L0, 77, 11, "item.getId().contains('spawn_egg')");
    custom_block.CustomBlock.__proto__.new.call(this);
    ;
  }).prototype = custom_block.CustomBlock.prototype;
  dart.addTypeTests(custom_block.CustomBlock);
  dart.addTypeCaches(custom_block.CustomBlock);
  dart.setMethodSignature(custom_block.CustomBlock, () => ({
    __proto__: dart.getMethods(custom_block.CustomBlock.__proto__),
    getItem: dart.fnType(dart.legacy(item.Item), []),
    [_setblock]: dart.fnType(dart.legacy(widget.Widget), [], {fireTimer: dart.legacy(widget.Widget)}, {}),
    [_blockLogic]: dart.fnType(dart.legacy(widget.Widget), [], {onbreak: dart.legacy(widget.Widget)}, {}),
    [_break]: dart.fnType(dart.legacy(widget.Widget), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)]),
    registerFiles: dart.fnType(dart.legacy(core.List$(dart.legacy(file.File))), [])
  }));
  dart.setLibraryUri(custom_block.CustomBlock, L1);
  dart.setFieldSignature(custom_block.CustomBlock, () => ({
    __proto__: dart.getFields(custom_block.CustomBlock.__proto__),
    id: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    block: dart.fieldType(dart.legacy(block.Block)),
    item: dart.fieldType(dart.legacy(item.Item)),
    blockModel: dart.fieldType(dart.legacy(item.Item)),
    main: dart.fieldType(dart.legacy(widget.Widget)),
    onBreak: dart.fieldType(dart.legacy(widget.Widget)),
    onPlaced: dart.fieldType(dart.legacy(widget.Widget)),
    tags: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    generatePack: dart.fieldType(dart.legacy(core.bool)),
    useItemFrame: dart.fieldType(dart.legacy(core.bool)),
    fire: dart.fieldType(dart.legacy(core.bool)),
    yOffset: dart.fieldType(dart.legacy(core.double))
  }));
  dart.trackLibraries("packages/objd/custom_block", {
    "package:objd/custom_block.dart": custom_block
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_block.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;IACA;;;;;;IACD;;;;;;IACD;;;;;;IACA;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;IACM;;;;;;IACR;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;;;AA+DW,YAAA,AAAK,0BACZ,2CACH,aAAa,2CACX,MAAiC,cAAlB,sCACf,QAAQ,uBAAC,AAAY,qBAAH,YAClB,YAAY,GACZ,YAAY,GACZ,UAAU,eAGI,KAAX,AAAK,uBAAA,OAAS,eACf,AAAK,aAAG,OAAO,sCAAc,oBAAc,UAAS;IAC3D;;;UAEoB;AACjB,qBAAgC,CAAT,4BAAX,OAAc,iCAAsB;AACtD,YAAW,qBAAG;;AACZ,2CAAS,uBAA0B;AACnC,qCACS,oCAA0B,oCAA0B,oBAAG,MAC9D,AAAK,2BAAgB;AAGnB,iBADJ,AAAqB,qBAAL,kBAAQ,qBAClB,sBACW,yCACU,8BAAO,sBACpB;;AAAW,qBAAV,mBAAO;AAAK,0BAAG;AAAH;;qBACd,2CACH,aAAa,GACb,SAAS,GACT,QAAQ,AAAS,AAAoC,QAArC,iBAAgB,sCAAc,kBAC9C,UAAU,GACV,gBAAgB,QAGT,uCACA,8BAAe,aAAR,gBAAU,cACpB;;AAAW,qBAAV,mBAAO;AAAK,0BAAG;AAAH;;sBACb,QAAQ;AAEtB;AACA,YAAI,aAAQ,kBAAQ,YAAM,kBAAS;;;IAEvC;;UAE2B;AAAa,YAAI,qBAAG;;AACzC,gCACY,4BAAI,CACZ,4BAAiB,oCAAuB,oBAAG,OACjC,4BACE,8BACC,wCAAO,qBAAe,OAAK,eAC7B,oBAAM,AAAM,4BAInB,uBAAC,OAAO;AAEhB,YAAI,aAAQ,MAAM;;;IAClB;;AAEa,YAAI,qBAAG,uBACpB,kBACE,AAAmD,iCAA5B,oBAAG,UAAmB,oCACrC,CAAC,AAAU,mBAAH,cAGlB,sBACW,mCACU,wCAAO,qBAAe,MAAI,YACxC,2CAAC,QAAQ,AAAU,iCAClB,uBAAC,AAAU,mBAAH,cAEhB,cACA,kBAAY;IACZ;aAGkB;AACtB,YAAO,AAAW,WAAL,QAAQ,AAAG;AACxB,YAAO,AAAc,cAAL,QAAc,AAAW,cAAjB;AAElB,2BAAO,qBAAe,KAAK,AAAiB,0BAAH;AAEtB,MAAzB,WAAM,AAAU;AAEV,gBAAU,oBAAG,uBACT,yBAAK,6BAAa,CAAC,AAAU,mBAAH,wBAAiB,uBAC5C,sBACD,AAAW,IAAP,qBACC,4BACS,sBACV,AAAW,IAAP,qBACC,0BAKP,yBACN,6BACiB,2CACT,CAAC,AAAY,qBAAH,wBAER,uBACH,sBACD,AAAS,IAAL,mBACC,4BACM,oBACT,qBACM,IAAI,SACH,gBACG,uBACH,oBACI,gCACF,2CAAC,QAAQ;AAU9B,oBAAI,oBAAc,MAAO,0BAAW,eAAU,kBAAK,gBAAe,GAAG;AAErE,YAAO,IAAG;IACZ;;AAG8B;IAAE;;2CAvJzB,IACA;QACU;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAZA;IACA;IACU;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAG,EAAD,IAAI;UACN,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;SAEb,AAAK,AAAQ,IAAT,oBAAkB,gCACtB;AAnBR;;EAoBO","file":"custom_block.unsound.ddc.js"}');
  // Exports:
  return {
    custom_block: custom_block
  };
}));

//# sourceMappingURL=custom_block.unsound.ddc.js.map
