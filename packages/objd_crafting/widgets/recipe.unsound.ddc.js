define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd/basic/types/block', 'packages/objd/basic/types/slot'], (function load__packages__objd_crafting__widgets__recipe(dart_sdk, packages__objd__basic__command, packages__objd__basic__types__block, packages__objd__basic__types__slot) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const item$ = packages__objd__basic__command.basic__types__item;
  const score = packages__objd__basic__command.basic__score;
  const widget = packages__objd__basic__command.basic__widget;
  const extend = packages__objd__basic__command.basic__extend;
  const $if = packages__objd__basic__command.wrappers__if;
  const entity = packages__objd__basic__command.basic__types__entity;
  const condition = packages__objd__basic__command.basic__types__condition;
  const for_list = packages__objd__basic__command.basic__for_list;
  const replaceitem = packages__objd__basic__command.wrappers__replaceitem;
  const location = packages__objd__basic__command.basic__types__location;
  const blocks = packages__objd__basic__types__block.basic__types__blocks;
  const block = packages__objd__basic__types__block.basic__types__block;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  var recipe = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $remove = dartx.remove;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ItemL = () => (ItemL = dart.constFn(dart.legacy(item$.Item)))();
  var IdentityMapOfintL$ItemL = () => (IdentityMapOfintL$ItemL = dart.constFn(_js_helper.IdentityMap$(intL(), ItemL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLAnddynamicToboolL = () => (StringLAnddynamicToboolL = dart.constFn(dart.fnType(boolL(), [StringL()], [dart.dynamic])))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var MapLOfStringL$dynamicToNullN = () => (MapLOfStringL$dynamicToNullN = dart.constFn(dart.fnType(core.Null, [MapLOfStringL$dynamic()])))();
  var IdentityMapOfintL$StringL = () => (IdentityMapOfintL$StringL = dart.constFn(_js_helper.IdentityMap$(intL(), StringL())))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var intLAndStringLToNullN = () => (intLAndStringLToNullN = dart.constFn(dart.fnType(core.Null, [intL(), StringL()])))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var JSArrayOfMapL = () => (JSArrayOfMapL = dart.constFn(_interceptors.JSArray$(MapL())))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var intLAndItemLToNullN = () => (intLAndItemLToNullN = dart.constFn(dart.fnType(core.Null, [intL(), ItemL()])))();
  var ConditionL = () => (ConditionL = dart.constFn(dart.legacy(condition.Condition)))();
  var JSArrayOfConditionL = () => (JSArrayOfConditionL = dart.constFn(_interceptors.JSArray$(ConditionL())))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var MapOfStringL$intL = () => (MapOfStringL$intL = dart.constFn(core.Map$(StringL(), intL())))();
  var MapLOfStringL$intL = () => (MapLOfStringL$intL = dart.constFn(dart.legacy(MapOfStringL$intL())))();
  var JSArrayOfMapLOfStringL$intL = () => (JSArrayOfMapLOfStringL$intL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$intL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var intLToNullN = () => (intLToNullN = dart.constFn(dart.fnType(core.Null, [intL()])))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/recipe.dart";
  var _idScore = dart.privateName(recipe, "_idScore");
  var isShapeless = dart.privateName(recipe, "Recipe.isShapeless");
  var exactlyPlaced$ = dart.privateName(recipe, "Recipe.exactlyPlaced");
  var exactResult$ = dart.privateName(recipe, "Recipe.exactResult");
  var result$ = dart.privateName(recipe, "Recipe.result");
  var ingredients$ = dart.privateName(recipe, "Recipe.ingredients");
  var id$ = dart.privateName(recipe, "Recipe.id");
  recipe.Recipe = class Recipe extends core.Object {
    get isShapeless() {
      return this[isShapeless];
    }
    set isShapeless(value) {
      this[isShapeless] = value;
    }
    get exactlyPlaced() {
      return this[exactlyPlaced$];
    }
    set exactlyPlaced(value) {
      this[exactlyPlaced$] = value;
    }
    get exactResult() {
      return this[exactResult$];
    }
    set exactResult(value) {
      this[exactResult$] = value;
    }
    get result() {
      return this[result$];
    }
    set result(value) {
      this[result$] = value;
    }
    get ingredients() {
      return this[ingredients$];
    }
    set ingredients(value) {
      this[ingredients$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    setid() {
      if (this.id != null) return;
      this.id = recipe.Recipe.recipeId;
      recipe.Recipe.recipeId = dart.notNull(recipe.Recipe.recipeId) + 1;
      core.print(this.id);
    }
    getCommands(opts) {
      let packid = opts && 'packid' in opts ? opts.packid : "tpcraft";
      let useBarrel = opts && 'useBarrel' in opts ? opts.useBarrel : false;
      let _block = blocks.Blocks.chest;
      if (useBarrel != null && dart.test(useBarrel)) _block = blocks.Blocks.barrel;
      this[_idScore] = new score.Score.fromSelected(dart.notNull(packid) + "ID");
      let items = JSArrayOfMapL().of([]);
      let res = JSArrayOfWidgetL().of([]);
      let unused = JSArrayOfintL().of([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      this.ingredients[$forEach](dart.fn((i, it) => {
        if (dart.notNull(i) < 1 || dart.notNull(i) > 9) {
          dart.throw("Please insert a number between 1 and 9 as recipe ingredient!");
        }
        unused[$remove](i);
        let cloned = it.copyWith({count: null, slot: dart.test(this.isShapeless) ? null : slot.Slot.craft(i)});
        items[$add](cloned.getMap());
        if (it.count != null && dart.notNull(it.count) > 0) {
          let mycount = new score.Score.fromSelected(dart.notNull(packid) + ("Count" + dart.str(i)));
          res[$addAll](JSArrayOfWidgetL().of([new extend.Extend.new("load", {child: new score.Score.con(it.count)}), new $if.If.not(mycount.matchesRange(new entity.Range.from(it.count)), {then: JSArrayOfWidgetL().of([mycount.reset()])}), mycount.divideByScore(new score.Score.con(it.count))]));
        }
      }, intLAndItemLToNullN()));
      let unusedConditions = JSArrayOfConditionL().of([]);
      if (dart.test(this.exactlyPlaced)) {
        unused[$forEach](dart.fn(i => {
          unusedConditions[$add](new condition.Condition.not(new block.Block.nbt(_block, {nbt: new (IdentityMapOfStringL$dynamic()).from(["Items", JSArrayOfMapLOfStringL$intL().of([new (IdentityMapOfStringL$intL()).from(["Slot", slot.Slot.craft(i).id])])])})));
        }, intLToNullN()));
      }
      let setid = new $if.If.new(new condition.Condition.and((() => {
        let t0 = [];
        t0[$add](new block.Block.nbt(_block, {nbt: new (IdentityMapOfStringL$dynamic()).from(["Items", items])}));
        if (dart.test(unusedConditions[$isNotEmpty])) for (let t1 of unusedConditions)
          t0[$add](t1);
        return t0;
      })()), {then: JSArrayOfWidgetL().of([this[_idScore].set(this.id)])});
      return new for_list.For.of((() => {
        let t2 = JSArrayOfWidgetL().of([]);
        t2[$add](setid);
        if (dart.test(res[$isNotEmpty])) t2[$add](new $if.If.new(this[_idScore].matches(this.id), {then: res, encapsulate: false}));
        return t2;
      })());
    }
    getResult(opts) {
      let packid = opts && 'packid' in opts ? opts.packid : "tpcraft";
      let _resScore = new score.Score.fromSelected(dart.notNull(packid) + "Count");
      this[_idScore] = new score.Score.fromSelected(dart.notNull(packid) + "ID");
      let replace = new replaceitem.ReplaceItem.block(new location.Location.here(), {slot: slot.Slot.Container15, item: this.result});
      let count = null;
      if (this.result.count != null) {
        count = new for_list.For.of(JSArrayOfWidgetL().of([new extend.Extend.new("load", {child: new score.Score.con(this.result.count)}), _resScore.multiplyByScore(new score.Score.con(this.result.count))]));
      }
      return new $if.If.new(this[_idScore].matches(this.id), {then: (() => {
          let t3 = JSArrayOfWidgetL().of([]);
          t3[$add](replace);
          t3[$add](count);
          if (this.exactResult != null && dart.notNull(this.exactResult) > 0) t3[$add](new $if.If.new(_resScore.matchesRange(new entity.Range.from(dart.notNull(this.exactResult) + 1)), {then: JSArrayOfWidgetL().of([_resScore.set(this.exactResult)])}));
          return t3;
        })()});
    }
  };
  (recipe.Recipe.new = function(ingredients, result, opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let exactlyPlaced = opts && 'exactlyPlaced' in opts ? opts.exactlyPlaced : false;
    let exactResult = opts && 'exactResult' in opts ? opts.exactResult : null;
    this[isShapeless] = false;
    this[exactlyPlaced$] = false;
    this[_idScore] = null;
    this[ingredients$] = ingredients;
    this[result$] = result;
    this[id$] = id;
    this[exactlyPlaced$] = exactlyPlaced;
    this[exactResult$] = exactResult;
    ;
  }).prototype = recipe.Recipe.prototype;
  (recipe.Recipe.shapeless = function(ingreds, result, opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let exactlyPlaced = opts && 'exactlyPlaced' in opts ? opts.exactlyPlaced : false;
    let exactResult = opts && 'exactResult' in opts ? opts.exactResult : null;
    this[isShapeless] = false;
    this[exactlyPlaced$] = false;
    this[_idScore] = null;
    this[ingredients$] = null;
    this[result$] = result;
    this[id$] = id;
    this[exactlyPlaced$] = exactlyPlaced;
    this[exactResult$] = exactResult;
    this.ingredients = new (IdentityMapOfintL$ItemL()).new();
    for (let i = 0; i < dart.notNull(ingreds[$length]); i = i + 1) {
      this.ingredients[$_set](i + 1, ingreds[$_get](i));
    }
    this.isShapeless = true;
  }).prototype = recipe.Recipe.prototype;
  (recipe.Recipe.fromJson = function(json, opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let exactlyPlaced = opts && 'exactlyPlaced' in opts ? opts.exactlyPlaced : false;
    let exactResult = opts && 'exactResult' in opts ? opts.exactResult : null;
    this[isShapeless] = false;
    this[exactlyPlaced$] = false;
    this[_idScore] = null;
    this[result$] = null;
    this[ingredients$] = null;
    this[id$] = id;
    this[exactlyPlaced$] = exactlyPlaced;
    this[exactResult$] = exactResult;
    function exists(key, value = null) {
      if (value != null) return json[$_get](key) != null && dart.equals(json[$_get](key), value);
      return json[$_get](key) != null;
    }
    dart.fn(exists, StringLAnddynamicToboolL());
    if (dart.test(exists("type", "minecraft:crafting_shapeless"))) this.isShapeless = true;
    let i = 1;
    if (dart.test(exists("ingredients"))) {
      dart.dsend(json[$_get]("ingredients"), 'forEach', [dart.fn(item => {
          this.ingredients[$_set](i, item$.Item.fromJson(item));
          i = i + 1;
        }, MapLOfStringL$dynamicToNullN())]);
    }
    if (dart.test(exists("result"))) {
      this.result = item$.Item.fromJson(MapLOfStringL$dynamic().as(json[$_get]("result")));
    }
    if (dart.test(exists("pattern")) && dart.test(exists("key"))) {
      this.ingredients = new (IdentityMapOfintL$ItemL()).new();
      let pattern = new (IdentityMapOfintL$StringL()).new();
      let keys = MapLOfStringL$dynamic().as(json[$_get]("key"));
      i = 1;
      dart.dsend(json[$_get]("pattern"), 'forEach', [dart.fn(row => {
          if (row[$isNotEmpty] && row[$_get](0) !== " ") pattern[$_set](i, row[$_get](0));
          if (row.length > 1 && row[$_get](1) !== " ") pattern[$_set](i + 1, row[$_get](1));
          if (row.length > 2 && row[$_get](2) !== " ") pattern[$_set](i + 2, row[$_get](2));
          i = i + 3;
        }, StringLToNullN())]);
      pattern[$forEach](dart.fn((i, key) => {
        this.ingredients[$_set](i, item$.Item.fromJson(MapLOfStringL$dynamic().as(keys[$_get](key))));
      }, intLAndStringLToNullN()));
    }
  }).prototype = recipe.Recipe.prototype;
  dart.addTypeTests(recipe.Recipe);
  dart.addTypeCaches(recipe.Recipe);
  dart.setMethodSignature(recipe.Recipe, () => ({
    __proto__: dart.getMethods(recipe.Recipe.__proto__),
    setid: dart.fnType(dart.void, []),
    getCommands: dart.fnType(dart.legacy(widget.Widget), [], {packid: dart.legacy(core.String), useBarrel: dart.legacy(core.bool)}, {}),
    getResult: dart.fnType(dart.legacy(widget.Widget), [], {packid: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(recipe.Recipe, L0);
  dart.setFieldSignature(recipe.Recipe, () => ({
    __proto__: dart.getFields(recipe.Recipe.__proto__),
    isShapeless: dart.fieldType(dart.legacy(core.bool)),
    exactlyPlaced: dart.fieldType(dart.legacy(core.bool)),
    exactResult: dart.fieldType(dart.legacy(core.int)),
    result: dart.fieldType(dart.legacy(item$.Item)),
    ingredients: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.int), dart.legacy(item$.Item)))),
    id: dart.fieldType(dart.legacy(core.int)),
    [_idScore]: dart.fieldType(dart.legacy(score.Score))
  }));
  dart.defineLazy(recipe.Recipe, {
    /*recipe.Recipe.recipeId*/get recipeId() {
      return 0;
    },
    set recipeId(_) {}
  }, true);
  dart.trackLibraries("packages/objd_crafting/widgets/recipe", {
    "package:objd_crafting/widgets/recipe.dart": recipe
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["recipe.dart"],"names":[],"mappings":"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","file":"recipe.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__recipe: recipe
  };
}));

//# sourceMappingURL=recipe.unsound.ddc.js.map
