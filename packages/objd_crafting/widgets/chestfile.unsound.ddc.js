define(['dart_sdk', 'packages/objd/basic/types/slot', 'packages/objd/basic/command', 'packages/objd_crafting/widgets/placeholder_setdetect', 'packages/objd_crafting/widgets/dropitem', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__chestfile(dart_sdk, packages__objd__basic__types__slot, packages__objd__basic__command, packages__objd_crafting__widgets__placeholder_setdetect, packages__objd_crafting__widgets__dropitem, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  const score = packages__objd__basic__command.basic__score;
  const for_list = packages__objd__basic__command.basic__for_list;
  const widget = packages__objd__basic__command.basic__widget;
  const data = packages__objd__basic__command.wrappers__data;
  const location = packages__objd__basic__command.basic__types__location;
  const $if = packages__objd__basic__command.wrappers__if;
  const condition = packages__objd__basic__command.basic__types__condition;
  const entity = packages__objd__basic__command.basic__types__entity;
  const comment = packages__objd__basic__command.wrappers__comment;
  const clear = packages__objd__basic__command.wrappers__clear;
  const file = packages__objd__basic__command.basic__file;
  const item = packages__objd__basic__command.basic__types__item;
  const placeholder_setdetect = packages__objd_crafting__widgets__placeholder_setdetect.widgets__placeholder_setdetect;
  const dropitem = packages__objd_crafting__widgets__dropitem.widgets__dropitem;
  const context = packages__objd__build__context.build__context;
  var chestfile = Object.create(dart.library);
  var $_set = dartx._set;
  var $add = dartx.add;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var ForL = () => (ForL = dart.constFn(dart.legacy(for_list.For)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToForL = () => (intLToForL = dart.constFn(dart.fnType(ForL(), [intL()])))();
  var ScoreL = () => (ScoreL = dart.constFn(dart.legacy(score.Score)))();
  var intLToScoreL = () => (intLToScoreL = dart.constFn(dart.fnType(ScoreL(), [intL()])))();
  var ListOfScoreL = () => (ListOfScoreL = dart.constFn(core.List$(ScoreL())))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/chestfile.dart";
  var _resID = dart.privateName(chestfile, "_resID");
  var _resCount = dart.privateName(chestfile, "_resCount");
  var _resDCount = dart.privateName(chestfile, "_resDCount");
  var hasRecipes$ = dart.privateName(chestfile, "ChestFile.hasRecipes");
  var useBarrel$ = dart.privateName(chestfile, "ChestFile.useBarrel");
  var recipeSource$ = dart.privateName(chestfile, "ChestFile.recipeSource");
  var recipeResultSource$ = dart.privateName(chestfile, "ChestFile.recipeResultSource");
  var placeholder$ = dart.privateName(chestfile, "ChestFile.placeholder");
  var guiModel$ = dart.privateName(chestfile, "ChestFile.guiModel");
  chestfile.ChestFile = class ChestFile extends widget.Widget {
    get hasRecipes() {
      return this[hasRecipes$];
    }
    set hasRecipes(value) {
      this[hasRecipes$] = value;
    }
    get useBarrel() {
      return this[useBarrel$];
    }
    set useBarrel(value) {
      this[useBarrel$] = value;
    }
    get recipeSource() {
      return this[recipeSource$];
    }
    set recipeSource(value) {
      this[recipeSource$] = value;
    }
    get recipeResultSource() {
      return this[recipeResultSource$];
    }
    set recipeResultSource(value) {
      this[recipeResultSource$] = value;
    }
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
      if (this.placeholder != null) {
        this.placeholder.tag[$_set](dart.str(context.packId) + "Placeholder", 1);
      }
      if (this.guiModel != null) this.guiModel.tag[$_set](dart.str(context.packId) + "Placeholder", 1);
      this[_resID] = new score.Score.fromSelected(dart.notNull(context.packId) + "ID");
      this[_resCount] = new score.Score.fromSelected(dart.notNull(context.packId) + "Count");
      this[_resDCount] = new score.Score.fromSelected(dart.notNull(context.packId) + "dCount");
      return new for_list.For.of((() => {
        let t0 = JSArrayOfWidgetL().of([]);
        t0[$add](this[_resCount].setToData(new data.Data.get(new location.Location.here(), {path: "Items[{Slot:15b}].Count"})));
        t0[$add](new $if.If.new(new condition.Condition.and([this[_resID].matchesRange(new entity.Range.from(0)), this[_resDCount].matchesRange(new entity.Range.new(1, 999)), this[_resDCount].isBigger(this[_resCount])]), {then: JSArrayOfWidgetL().of([this[_resDCount].subtractScore(this[_resCount]), new for_list.For.new({from: 1, to: 9, create: dart.fn(i => {
                let myslot = slot.Slot.craft(i);
                let count = new score.Score.fromSelected(dart.notNull(context.packId) + ("Count" + dart.str(i)));
                return new for_list.For.of(JSArrayOfWidgetL().of([new score.Score.new(new entity.Entity.Selected(), dart.notNull(context.packId) + ("Count" + dart.str(i))).setToData(new data.Data.get(new location.Location.here(), {path: "Items[{Slot:" + dart.str(myslot.id) + "b}].Count"})), count.subtractScore(this[_resDCount]), new data.Data.fromScore(new location.Location.here(), {path: "Items[{Slot:" + dart.str(myslot.id) + "b}].Count", score: count})]));
              }, intLToForL())}), new comment.Comment.Null(), this[_resDCount].reset()])}));
        if (this.placeholder != null) t0[$add](new for_list.For.of((() => {
          let t1 = JSArrayOfWidgetL().of([]);
          t1[$add](new placeholder_setdetect.PlaceholderSetDetect.new(this.placeholder, this.guiModel, this.useBarrel));
          t1[$add](new clear.Clear.new(new entity.Entity.All({distance: new entity.Range.to(4)}), this.placeholder));
          if (this.guiModel != null) t1[$add](new clear.Clear.new(new entity.Entity.All({distance: new entity.Range.to(4)}), this.guiModel));
          t1[$add](new dropitem.DropItem.new());
          return t1;
        })()));
        t0[$add](this[_resID].reset());
        t0[$add](this[_resCount].set(1000));
        t0[$add](new for_list.For.new({from: 1, to: 9, create: dart.fn(i => {
            let myslot = slot.Slot.craft(i);
            return new score.Score.new(new entity.Entity.Selected(), dart.notNull(context.packId) + ("Count" + dart.str(i))).setToData(new data.Data.get(new location.Location.here(), {path: "Items[{Slot:" + dart.str(myslot.id) + "b}].Count"}));
          }, intLToScoreL())}));
        if (dart.test(this.hasRecipes)) t0[$add](new file.File.execute("recipes/" + dart.notNull(context.packId), {create: false}));
        if (this.recipeSource != null) t0[$add](new file.File.execute(this.recipeSource, {create: false}));
        t0[$add](new $if.If.new(this[_resID].matchesRange(new entity.Range.from(0)), {targetFileName: "hasid", then: (() => {
            let t2 = JSArrayOfWidgetL().of([]);
            t2[$add](this[_resCount].findSmallest(ListOfScoreL().generate(9, dart.fn(i => new score.Score.fromSelected(dart.notNull(context.packId) + ("Count" + dart.str(dart.notNull(i) + 1))), intLToScoreL())), {min: 1}));
            if (dart.test(this.hasRecipes)) t2[$add](new file.File.execute("recipes/res_" + dart.notNull(context.packId), {create: false}));
            if (this.recipeResultSource != null) t2[$add](new file.File.execute(this.recipeResultSource, {create: false}));
            t2[$add](new data.Data.fromScore(new location.Location.here(), {path: "Items[{Slot:15b}].Count", score: this[_resCount]}));
            t2[$add](this[_resDCount].setEqual(this[_resCount]));
            return t2;
          })()}));
        t0[$add](new $if.If.not(this[_resID].matchesRange(new entity.Range.from(0)), {then: JSArrayOfWidgetL().of([new data.Data.remove(new location.Location.here(), {path: "Items[{Slot:15b}]"})])}));
        return t0;
      })());
    }
  };
  (chestfile.ChestFile.new = function(hasRecipes, recipeSource, recipeResultSource, placeholder, guiModel, useBarrel) {
    let t0, t0$;
    this[hasRecipes$] = true;
    this[_resID] = null;
    this[_resCount] = null;
    this[_resDCount] = null;
    this[hasRecipes$] = hasRecipes;
    this[recipeSource$] = recipeSource;
    this[recipeResultSource$] = recipeResultSource;
    this[placeholder$] = placeholder;
    this[guiModel$] = guiModel;
    this[useBarrel$] = useBarrel;
    if (this.placeholder != null && this.placeholder.tag == null) {
      this.placeholder = this.placeholder.copyWith({nbt: new (IdentityMapOfStringL$dynamic()).new()});
    }
    if (this.guiModel != null) {
      this.guiModel = this.guiModel.copyWith({nbt: (t0 = this.guiModel.tag, t0 == null ? new (IdentityMapOfStringL$dynamic()).new() : t0), slot: (t0$ = this.guiModel.slot, t0$ == null ? slot.Slot.chest(3, 5) : t0$)});
    }
  }).prototype = chestfile.ChestFile.prototype;
  dart.addTypeTests(chestfile.ChestFile);
  dart.addTypeCaches(chestfile.ChestFile);
  dart.setMethodSignature(chestfile.ChestFile, () => ({
    __proto__: dart.getMethods(chestfile.ChestFile.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(chestfile.ChestFile, L0);
  dart.setFieldSignature(chestfile.ChestFile, () => ({
    __proto__: dart.getFields(chestfile.ChestFile.__proto__),
    hasRecipes: dart.fieldType(dart.legacy(core.bool)),
    useBarrel: dart.fieldType(dart.legacy(core.bool)),
    recipeSource: dart.fieldType(dart.legacy(core.String)),
    recipeResultSource: dart.fieldType(dart.legacy(core.String)),
    placeholder: dart.fieldType(dart.legacy(item.Item)),
    guiModel: dart.fieldType(dart.legacy(item.Item)),
    [_resID]: dart.fieldType(dart.legacy(score.Score)),
    [_resCount]: dart.fieldType(dart.legacy(score.Score)),
    [_resDCount]: dart.fieldType(dart.legacy(score.Score))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/chestfile", {
    "package:objd_crafting/widgets/chestfile.dart": chestfile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chestfile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBO;;;;;;IACA;;;;;;IACE;;;;;;IACA;;;;;;IACF;;;;;;IACA;;;;;;aAOmB;AACtB,UAAI,oBAAe;AACkC,QAAnD,AAAY,AAAG,4BAA+B,SAA3B,AAAQ,OAAD,WAAQ,eAAgB;;AAEpD,UAAI,iBAAY,MAAM,AAAS,AAAG,AAAoC,yBAAL,SAA3B,AAAQ,OAAD,WAAQ,eAAgB;AAEnB,MAAlD,eAAe,6BAA4B,aAAf,AAAQ,OAAD,WAAU;AACW,MAAxD,kBAAkB,6BAA4B,aAAf,AAAQ,OAAD,WAAU;AACU,MAA1D,mBAAmB,6BAA4B,aAAf,AAAQ,OAAD,WAAU;AAEjD,YAAW,qBAAG;;AAEF,iBAAV,0BACS,kBAAa,qCAAc;AACpC,gCAGc,4BAAI,CACZ,AAAO,0BAAmB,sBAAK,KAC/B,AAAW,8BAAa,qBAAM,GAAG,OACjC,AAAW,0BAAS,2BAEhB,uBAEJ,AAAW,+BAAc,kBAEzB,4BACU,OACF,WACI,QAAK;AACP,6BAAc,gBAAM,CAAC;AACrB,4BAAc,6BAA4B,aAAf,AAAQ,OAAD,YAAU,AAAS,mBAAF,CAAC;AACxD,sBAAW,qBAAG,uBAEZ,AACK,oBADQ,8BAA2B,aAAf,AAAQ,OAAD,YAAU,AAAS,mBAAF,CAAC,cAC9B,kBAAa,qCACnB,AAAmC,0BAApB,AAAO,MAAD,OAAI,gBAEvC,AAAM,KAAD,eAAe,mBAEf,wBAAmB,qCACd,AAAmC,0BAApB,AAAO,MAAD,OAAI,oBAAmB,KAAK;kCAG3D,4BACR,AAAW;AAIjB,YAAI,oBAAe,MACb,6BAAG;;AAEL,sEAAqB,kBAAa,eAAU;AAE5C,uCAAa,iCAAoB,oBAAG,MAAK;AACzC,cAAI,iBAAY,MACd,6BAAa,iCAAoB,oBAAG,MAAK;AAE3C;;;AAIG,iBAAP;AACU,iBAAV,oBAAc;AAEd,6CACU,OACF,WACI,QAAK;AACP,yBAAc,gBAAM,CAAC;AACzB,kBAAO,AACF,qBADe,8BAA2B,aAAf,AAAQ,OAAD,YAAU,AAAS,mBAAF,CAAC,cAElD,kBAAa,qCACR,AAAmC,0BAApB,AAAO,MAAD,OAAI;;AAI3C,sBAAI,kBACG,+BAAQ,AAAW,0BAAE,AAAQ,OAAD,mBAAiB;AACpD,YAAI,qBAAgB,MACb,+BAAQ,4BAAsB;AAGrC,gCAAG,AAAO,0BAAmB,sBAAK,sBAAqB,eAAe;;AAE1D,qBAAV,6BACO,wBACH,GACA,QAAK,KAAY,6BAA4B,aAAf,AAAQ,OAAD,YAAU,AAAe,mBAAL,aAAF,CAAC,IAAG,8BAExD;AAEP,0BAAI,kBACG,+BAAQ,AAAe,8BAAE,AAAQ,OAAD,mBAAiB;AACxD,gBAAI,2BAAsB,MACnB,+BAAQ,kCAA4B;AACtC,6CACM,qCACH,kCACC;AAGE,qBAAX,0BAAoB;;;AAGnB,gCAAI,AAAO,0BAAmB,sBAAK,YAC5B,uBAAM,qBAAgB,qCAAc;;;IAElD;;sCAxIO,YACA,cACA,oBACA,aACA,UACA;;IAWF,oBAAa;IAOZ;IACA;IACA;IAzBC;IACA;IACA;IACA;IACA;IACA;AAEL,QAAI,oBAAe,QAAQ,AAAY,AAAI,wBAAG;AACD,MAA3C,mBAAc,AAAY,gCAAc;;AAE1C,QAAI,iBAAY;AAEuD,MADrE,gBAAW,AAAS,8BACE,KAAb,AAAS,yBAAA,OAAO,yDAAwB,MAAd,AAAS,2BAAA,OAAa,gBAAM,GAAG;;EAEtE","file":"chestfile.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__chestfile: chestfile
  };
}));

//# sourceMappingURL=chestfile.unsound.ddc.js.map
