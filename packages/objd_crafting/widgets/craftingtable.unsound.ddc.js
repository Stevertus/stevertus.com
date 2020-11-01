define(['dart_sdk', 'packages/objd/basic/command', 'packages/objd_crafting/widgets/recipe', 'packages/objd_crafting/widgets/checkarea', 'packages/objd_crafting/widgets/chestfile', 'packages/objd_crafting/widgets/setarmorstand', 'packages/objd_crafting/widgets/getcommand', 'packages/objd/build/context'], (function load__packages__objd_crafting__widgets__craftingtable(dart_sdk, packages__objd__basic__command, packages__objd_crafting__widgets__recipe, packages__objd_crafting__widgets__checkarea, packages__objd_crafting__widgets__chestfile, packages__objd_crafting__widgets__setarmorstand, packages__objd_crafting__widgets__getcommand, packages__objd__build__context) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_components = packages__objd__basic__command.basic__text_components;
  const pack = packages__objd__basic__command.basic__pack;
  const file = packages__objd__basic__command.basic__file;
  const for_list = packages__objd__basic__command.basic__for_list;
  const widget = packages__objd__basic__command.basic__widget;
  const execute = packages__objd__basic__command.wrappers__execute;
  const entity = packages__objd__basic__command.basic__types__entity;
  const entities = packages__objd__basic__command.basic__types__entities;
  const condition = packages__objd__basic__command.basic__types__condition;
  const item = packages__objd__basic__command.basic__types__item;
  const recipe = packages__objd_crafting__widgets__recipe.widgets__recipe;
  const checkarea = packages__objd_crafting__widgets__checkarea.widgets__checkarea;
  const chestfile = packages__objd_crafting__widgets__chestfile.widgets__chestfile;
  const setarmorstand = packages__objd_crafting__widgets__setarmorstand.widgets__setarmorstand;
  const getcommand = packages__objd_crafting__widgets__getcommand.widgets__getcommand;
  const context = packages__objd__build__context.build__context;
  var craftingtable = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  var RecipeL = () => (RecipeL = dart.constFn(dart.legacy(recipe.Recipe)))();
  var RecipeLTovoid = () => (RecipeLTovoid = dart.constFn(dart.fnType(dart.void, [RecipeL()])))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(file.File)))();
  var JSArrayOfFileL = () => (JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(FileL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToWidgetL = () => (intLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [intL()])))();
  const CT = Object.create(null);
  var L0 = "package:objd_crafting/widgets/craftingtable.dart";
  var name$ = dart.privateName(craftingtable, "CraftingTable.name");
  var displayName$ = dart.privateName(craftingtable, "CraftingTable.displayName");
  var id$ = dart.privateName(craftingtable, "CraftingTable.id");
  var recipes$ = dart.privateName(craftingtable, "CraftingTable.recipes");
  var recipeSource$ = dart.privateName(craftingtable, "CraftingTable.recipeSource");
  var recipeResultSource$ = dart.privateName(craftingtable, "CraftingTable.recipeResultSource");
  var placeholder$ = dart.privateName(craftingtable, "CraftingTable.placeholder");
  var guiModel$ = dart.privateName(craftingtable, "CraftingTable.guiModel");
  var main$ = dart.privateName(craftingtable, "CraftingTable.main");
  var blockModel$ = dart.privateName(craftingtable, "CraftingTable.blockModel");
  var onDestroy$ = dart.privateName(craftingtable, "CraftingTable.onDestroy");
  var giveCommandFunction$ = dart.privateName(craftingtable, "CraftingTable.giveCommandFunction");
  var useBarrel$ = dart.privateName(craftingtable, "CraftingTable.useBarrel");
  var invisibleHitbox$ = dart.privateName(craftingtable, "CraftingTable.invisibleHitbox");
  craftingtable.CraftingTable = class CraftingTable extends widget.Widget {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get recipes() {
      return this[recipes$];
    }
    set recipes(value) {
      this[recipes$] = value;
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
    get main() {
      return this[main$];
    }
    set main(value) {
      this[main$] = value;
    }
    get blockModel() {
      return this[blockModel$];
    }
    set blockModel(value) {
      this[blockModel$] = value;
    }
    get onDestroy() {
      return this[onDestroy$];
    }
    set onDestroy(value) {
      this[onDestroy$] = value;
    }
    get giveCommandFunction() {
      return this[giveCommandFunction$];
    }
    set giveCommandFunction(value) {
      this[giveCommandFunction$] = value;
    }
    get useBarrel() {
      return this[useBarrel$];
    }
    set useBarrel(value) {
      this[useBarrel$] = value;
    }
    get invisibleHitbox() {
      return this[invisibleHitbox$];
    }
    set invisibleHitbox(value) {
      this[invisibleHitbox$] = value;
    }
    generate(context) {
      recipe.Recipe.recipeId = this.id;
      if (this.id != null && this.recipes != null) this.recipes[$forEach](dart.fn(rec => rec.setid(), RecipeLTovoid()));
      return new pack.Pack.new({name: this.name, load: new file.File.new("load"), main: new file.File.new("main", {child: new for_list.For.of((() => {
            let t0 = JSArrayOfWidgetL().of([]);
            if (this.main != null) for (let t1 of this.main)
              t0[$add](t1);
            t0[$add](new execute.Execute.new({as: new entity.Entity.new({type: entities.Entities.armor_stand, tags: [dart.notNull(this.name) + "Table"]}), at: new entity.Entity.Selected(), If: new condition.Condition.new(new entity.Entity.Player({distance: new entity.Range.to(6)})), children: JSArrayOfWidgetL().of([new file.File.execute("checkarea", {child: new checkarea.CheckArea.new(this.onDestroy, this.displayName, this.useBarrel, this.invisibleHitbox)}), new file.File.execute("crafting", {create: false})])}));
            return t0;
          })())}), files: (() => {
          let t2 = JSArrayOfFileL().of([]);
          t2[$add](new file.File.new("crafting", {child: new chestfile.ChestFile.new(this.recipes != null, this.recipeSource, this.recipeResultSource, this.placeholder, this.guiModel, this.useBarrel)}));
          if (this.recipes != null) t2[$add](new file.File.new("recipes/" + dart.str(this.name), {child: new for_list.For.new({to: dart.notNull(this.recipes[$length]) - 1, create: dart.fn(i => this.recipes[$_get](i).getCommands({packid: this.name, useBarrel: this.useBarrel}), intLToWidgetL())})}));
          if (this.recipes != null) t2[$add](new file.File.new("recipes/res_" + dart.str(this.name), {child: new for_list.For.new({to: dart.notNull(this.recipes[$length]) - 1, create: dart.fn(i => this.recipes[$_get](i).getResult({packid: this.name}), intLToWidgetL())})}));
          t2[$add](new file.File.new("set", {child: new setarmorstand.SetArmorstand.new(this.blockModel, this.displayName, this.useBarrel, this.invisibleHitbox)}));
          if (this.giveCommandFunction != null && dart.test(this.giveCommandFunction)) t2[$add](new file.File.new("getcommand", {child: new getcommand.GetCommand.new(this.useBarrel)}));
          return t2;
        })()});
    }
  };
  (craftingtable.CraftingTable.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : "craft";
    let id = opts && 'id' in opts ? opts.id : 0;
    let recipes = opts && 'recipes' in opts ? opts.recipes : null;
    let recipeSource = opts && 'recipeSource' in opts ? opts.recipeSource : null;
    let recipeResultSource = opts && 'recipeResultSource' in opts ? opts.recipeResultSource : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let blockModel = opts && 'blockModel' in opts ? opts.blockModel : null;
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let giveCommandFunction = opts && 'giveCommandFunction' in opts ? opts.giveCommandFunction : false;
    let onDestroy = opts && 'onDestroy' in opts ? opts.onDestroy : null;
    let guiModel = opts && 'guiModel' in opts ? opts.guiModel : null;
    let main = opts && 'main' in opts ? opts.main : null;
    let useBarrel = opts && 'useBarrel' in opts ? opts.useBarrel : false;
    let invisibleHitbox = opts && 'invisibleHitbox' in opts ? opts.invisibleHitbox : true;
    this[giveCommandFunction$] = false;
    this[useBarrel$] = false;
    this[name$] = name;
    this[id$] = id;
    this[recipes$] = recipes;
    this[recipeSource$] = recipeSource;
    this[recipeResultSource$] = recipeResultSource;
    this[placeholder$] = placeholder;
    this[blockModel$] = blockModel;
    this[displayName$] = displayName;
    this[giveCommandFunction$] = giveCommandFunction;
    this[onDestroy$] = onDestroy;
    this[guiModel$] = guiModel;
    this[main$] = main;
    this[useBarrel$] = useBarrel;
    this[invisibleHitbox$] = invisibleHitbox;
    this.displayName == null ? this.displayName = new text_components.TextComponent.new("Custom Crafting Table") : null;
  }).prototype = craftingtable.CraftingTable.prototype;
  dart.addTypeTests(craftingtable.CraftingTable);
  dart.addTypeCaches(craftingtable.CraftingTable);
  dart.setMethodSignature(craftingtable.CraftingTable, () => ({
    __proto__: dart.getMethods(craftingtable.CraftingTable.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(craftingtable.CraftingTable, L0);
  dart.setFieldSignature(craftingtable.CraftingTable, () => ({
    __proto__: dart.getFields(craftingtable.CraftingTable.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    displayName: dart.fieldType(dart.legacy(text_components.TextComponent)),
    id: dart.fieldType(dart.legacy(core.int)),
    recipes: dart.fieldType(dart.legacy(core.List$(dart.legacy(recipe.Recipe)))),
    recipeSource: dart.fieldType(dart.legacy(core.String)),
    recipeResultSource: dart.fieldType(dart.legacy(core.String)),
    placeholder: dart.fieldType(dart.legacy(item.Item)),
    guiModel: dart.fieldType(dart.legacy(item.Item)),
    main: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    blockModel: dart.fieldType(dart.legacy(item.Item)),
    onDestroy: dart.fieldType(dart.legacy(widget.Widget)),
    giveCommandFunction: dart.fieldType(dart.legacy(core.bool)),
    useBarrel: dart.fieldType(dart.legacy(core.bool)),
    invisibleHitbox: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/objd_crafting/widgets/craftingtable", {
    "package:objd_crafting/widgets/craftingtable.dart": craftingtable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["craftingtable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUS;;;;;;IACO;;;;;;IACV;;;;;;IACS;;;;;;IACN;;;;;;IACA;;;;;;IACF;;;;;;IACA;;;;;;IACQ;;;;;;IACR;;;;;;IACE;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;aA6CmB;AACF,MAAb,yBAAW;AAClB,UAAI,WAAM,QAAQ,gBAAW,MAAM,AAAQ,AAA6B,uBAArB,QAAC,OAAQ,AAAI,GAAD;AAC/D,YAAO,0BACG,iBACA,kBAAK,eACL,kBACJ,gBACW,oBAAG;;AAEZ,gBAAI,aAAQ,MACV,cAAG;AAAH;AACF,kDACQ,6BAAsB,qCAAmB,CAAM,aAAL,aAAO,gBAC1C,kCACP,4BACK,oCAAuB,oBAAG,iBAIzB,uBACH,sBACH,qBACO,4BACL,gBACA,kBACA,gBACA,yBAGC,sBAAQ,qBAAoB;;0BAIpC;;AAEL,qCAAK,oBACM,4BAAU,AAAQ,gBAAG,MAAM,mBAC9B,yBAAoB,kBAAa,eAAU;AAGnD,cAAI,gBAAW,MACb,2BACE,AAAe,sBAAL,oBACH,0BACc,aAAf,AAAQ,yBAAS,WACb,QAAC,KACL,AAAO,AAAI,oBAAH,CAAC,uBAAsB,sBAAiB;AAK1D,cAAI,gBAAW,MACb,2BACE,AAAmB,0BAAL,oBACP,0BACc,aAAf,AAAQ,yBAAS,WACb,QAAC,KAAM,AAAO,AAAI,oBAAH,CAAC,qBAAoB;AAGlD,qCACE,eACO,oCACL,iBACA,kBACA,gBACA;AAGJ,cAAI,4BAAuB,kBAAQ,2BACjC,2BAAK,sBAAqB,8BAAW;;;IAE/C;;;QA3FO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAzCF,6BAAsB;IACtB,mBAAY;IA2BV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAEiD,IAAtD,AAAY,oBAAA,OAAZ,mBAAgB,sCAAc,2BAAlB;EACd","file":"craftingtable.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__craftingtable: craftingtable
  };
}));

//# sourceMappingURL=craftingtable.unsound.ddc.js.map
