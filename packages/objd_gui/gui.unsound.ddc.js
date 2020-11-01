define(['dart_sdk', 'packages/objd_gui/data/interactive_slot', 'packages/objd_gui/data/placeholder', 'packages/objd_gui/data/change_page', 'packages/objd/basic/command', 'packages/objd_gui/data/items', 'packages/gson/decoder', 'packages/gson/values', 'packages/objd/build/context', 'packages/objd_gui/data/page', 'packages/objd_gui/data/gui_slot', 'packages/objd/basic/types/slot', 'packages/objd/basic/types/block', 'packages/objd_gui/widgets/all_tag'], (function load__packages__objd_gui__gui(dart_sdk, packages__objd_gui__data__interactive_slot, packages__objd_gui__data__placeholder, packages__objd_gui__data__change_page, packages__objd__basic__command, packages__objd_gui__data__items, packages__gson__decoder, packages__gson__values, packages__objd__build__context, packages__objd_gui__data__page, packages__objd_gui__data__gui_slot, packages__objd__basic__types__slot, packages__objd__basic__types__block, packages__objd_gui__widgets__all_tag) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interactive_slot = packages__objd_gui__data__interactive_slot.data__interactive_slot;
  const placeholder = packages__objd_gui__data__placeholder.data__placeholder;
  const change_page = packages__objd_gui__data__change_page.data__change_page;
  const score$ = packages__objd__basic__command.basic__score;
  const entity = packages__objd__basic__command.basic__types__entity;
  const widget = packages__objd__basic__command.basic__widget;
  const replaceitem = packages__objd__basic__command.wrappers__replaceitem;
  const item = packages__objd__basic__command.basic__types__item;
  const items = packages__objd__basic__command.basic__types__items;
  const location = packages__objd__basic__command.basic__types__location;
  const $if = packages__objd__basic__command.wrappers__if;
  const data = packages__objd__basic__command.wrappers__data;
  const summon = packages__objd__basic__command.wrappers__summon;
  const entities = packages__objd__basic__command.basic__types__entities;
  const rest_action = packages__objd__basic__command.basic__rest_action;
  const for_list = packages__objd__basic__command.basic__for_list;
  const condition = packages__objd__basic__command.basic__types__condition;
  const kill = packages__objd__basic__command.wrappers__kill;
  const teleport = packages__objd__basic__command.wrappers__teleport;
  const clear = packages__objd__basic__command.wrappers__clear;
  const file = packages__objd__basic__command.basic__file;
  const builder = packages__objd__basic__command.utils__builder;
  const execute = packages__objd__basic__command.wrappers__execute;
  const tag = packages__objd__basic__command.basic__tag;
  const module = packages__objd__basic__command.basic__module;
  const text_components = packages__objd__basic__command.basic__text_components;
  const items$ = packages__objd_gui__data__items.data__items;
  const gson = packages__gson__decoder.gson;
  const values = packages__gson__values.values;
  const context = packages__objd__build__context.build__context;
  const page = packages__objd_gui__data__page.data__page;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const slot = packages__objd__basic__types__slot.basic__types__slot;
  const blocks = packages__objd__basic__types__block.basic__types__blocks;
  const all_tag = packages__objd_gui__widgets__all_tag.widgets__all_tag;
  var page_gen = Object.create(dart.library);
  var gui = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var $indexWhere = dartx.indexWhere;
  var $firstWhere = dartx.firstWhere;
  var $contains = dartx.contains;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $indexOf = dartx.indexOf;
  var $first = dartx.first;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toString = dartx.toString;
  var InteractiveL = () => (InteractiveL = dart.constFn(dart.legacy(interactive_slot.Interactive)))();
  var JSArrayOfInteractiveL = () => (JSArrayOfInteractiveL = dart.constFn(_interceptors.JSArray$(InteractiveL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var intLToboolL = () => (intLToboolL = dart.constFn(dart.fnType(boolL(), [intL()])))();
  var PlaceholderL = () => (PlaceholderL = dart.constFn(dart.legacy(placeholder.Placeholder)))();
  var ChangePageL = () => (ChangePageL = dart.constFn(dart.legacy(change_page.ChangePage)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var InteractiveLToboolL = () => (InteractiveLToboolL = dart.constFn(dart.fnType(boolL(), [InteractiveL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var ReplaceItemL = () => (ReplaceItemL = dart.constFn(dart.legacy(replaceitem.ReplaceItem)))();
  var InteractiveLToReplaceItemL = () => (InteractiveLToReplaceItemL = dart.constFn(dart.fnType(ReplaceItemL(), [InteractiveL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var MapOfStringL$boolL = () => (MapOfStringL$boolL = dart.constFn(core.Map$(StringL(), boolL())))();
  var MapLOfStringL$boolL = () => (MapLOfStringL$boolL = dart.constFn(dart.legacy(MapOfStringL$boolL())))();
  var IdentityMapOfStringL$MapLOfStringL$boolL = () => (IdentityMapOfStringL$MapLOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfStringL$boolL())))();
  var MapOfStringL$MapLOfStringL$boolL = () => (MapOfStringL$MapLOfStringL$boolL = dart.constFn(core.Map$(StringL(), MapLOfStringL$boolL())))();
  var MapLOfStringL$MapLOfStringL$boolL = () => (MapLOfStringL$MapLOfStringL$boolL = dart.constFn(dart.legacy(MapOfStringL$MapLOfStringL$boolL())))();
  var IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$boolL = () => (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfStringL$MapLOfStringL$boolL())))();
  var RestActionAbleL = () => (RestActionAbleL = dart.constFn(dart.legacy(rest_action.RestActionAble)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var InteractiveLToRestActionAbleL = () => (InteractiveLToRestActionAbleL = dart.constFn(dart.fnType(RestActionAbleL(), [InteractiveL()])))();
  var DataL = () => (DataL = dart.constFn(dart.legacy(data.Data)))();
  var ContextL = () => (ContextL = dart.constFn(dart.legacy(context.Context)))();
  var ContextLToDataL = () => (ContextLToDataL = dart.constFn(dart.fnType(DataL(), [ContextL()])))();
  var PageGeneratorL = () => (PageGeneratorL = dart.constFn(dart.legacy(page_gen.PageGenerator)))();
  var GuiPageL = () => (GuiPageL = dart.constFn(dart.legacy(page.GuiPage)))();
  var GuiPageLToPageGeneratorL = () => (GuiPageLToPageGeneratorL = dart.constFn(dart.fnType(PageGeneratorL(), [GuiPageL()])))();
  var IfL = () => (IfL = dart.constFn(dart.legacy($if.If)))();
  var PageGeneratorLToIfL = () => (PageGeneratorLToIfL = dart.constFn(dart.fnType(IfL(), [PageGeneratorL()])))();
  var ForL = () => (ForL = dart.constFn(dart.legacy(for_list.For)))();
  var ContextLToForL = () => (ContextLToForL = dart.constFn(dart.fnType(ForL(), [ContextL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(file.File)))();
  var JSArrayOfFileL = () => (JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(FileL())))();
  var GuiContainerL = () => (GuiContainerL = dart.constFn(dart.legacy(gui.GuiContainer)))();
  const CT = Object.create(null);
  var L2 = "org-dartlang-app:///packages/objd_gui/gui.dart";
  var L1 = "package:objd_gui/widgets/page_gen.dart";
  var L3 = "package:objd_gui/gui.dart";
  var L0 = "org-dartlang-app:///packages/objd_gui/widgets/page_gen.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.inventory",
        index: 3
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.enderchest",
        index: 2
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.minecart",
        index: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.chest",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.dropper",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: gui.GuiContainer.prototype,
        [_name$]: "GuiContainer.hopper",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C4 || CT.C4, C3 || CT.C3, C1 || CT.C1, C0 || CT.C0, C2 || CT.C2, C5 || CT.C5], GuiContainerL());
    }
  }, false);
  var _slots = dart.privateName(page_gen, "_slots");
  var _getGenSlots = dart.privateName(page_gen, "_getGenSlots");
  var _name$ = dart.privateName(gui, "_name");
  var C0;
  var C1;
  var C2;
  var index$ = dart.privateName(page_gen, "PageGenerator.index");
  var totalPages$ = dart.privateName(page_gen, "PageGenerator.totalPages");
  var fillMax$ = dart.privateName(page_gen, "PageGenerator.fillMax");
  var page$ = dart.privateName(page_gen, "PageGenerator.page");
  var container$ = dart.privateName(page_gen, "PageGenerator.container");
  var globalSlots$ = dart.privateName(page_gen, "PageGenerator.globalSlots");
  var countScore$ = dart.privateName(page_gen, "PageGenerator.countScore");
  var pageScore$ = dart.privateName(page_gen, "PageGenerator.pageScore");
  var placeholder$ = dart.privateName(page_gen, "PageGenerator.placeholder");
  page_gen.PageGenerator = class PageGenerator extends widget.Widget {
    get index() {
      return this[index$];
    }
    set index(value) {
      this[index$] = value;
    }
    get totalPages() {
      return this[totalPages$];
    }
    set totalPages(value) {
      this[totalPages$] = value;
    }
    get fillMax() {
      return this[fillMax$];
    }
    set fillMax(value) {
      this[fillMax$] = value;
    }
    get page() {
      return this[page$];
    }
    set page(value) {
      this[page$] = value;
    }
    get container() {
      return this[container$];
    }
    set container(value) {
      this[container$] = value;
    }
    get globalSlots() {
      return this[globalSlots$];
    }
    set globalSlots(value) {
      this[globalSlots$] = value;
    }
    get countScore() {
      return this[countScore$];
    }
    set countScore(value) {
      this[countScore$] = value;
    }
    get pageScore() {
      return this[pageScore$];
    }
    set pageScore(value) {
      this[pageScore$] = value;
    }
    get placeholder() {
      return this[placeholder$];
    }
    set placeholder(value) {
      this[placeholder$] = value;
    }
    [_getGenSlots]() {
      let t0;
      let ret = JSArrayOfInteractiveL().of([]);
      let slots = this.page.slots;
      if (this.globalSlots != null) slots[$addAll](this.globalSlots);
      let usedSlots = JSArrayOfintL().of([]);
      for (let slot of slots) {
        if (slot.slot != null) {
          usedSlots[$add](this.container == gui.GuiContainer.inventory ? page_gen._toInvRow(slot.slot.id) : slot.slot.id);
        }
      }
      let slotCounter = 0;
      for (let slot of slots) {
        let currentSlot = null;
        let newSlot = null;
        if (slot.slot == null) {
          while (dart.notNull(usedSlots[$indexWhere](dart.fn(v => v === slotCounter, intLToboolL()))) >= 0) {
            slotCounter = slotCounter + 1;
          }
          currentSlot = page_gen._getSlotForContainer(this.container, slotCounter + 1);
          usedSlots[$add](slotCounter);
          newSlot = slot;
          slotCounter = slotCounter + 1;
        } else {
          newSlot = slot.applyWhenPossible();
          currentSlot = slot.slot.clone();
        }
        if (PlaceholderL().is(slot)) {
          let item = (t0 = slot.item, t0 == null ? this.placeholder : t0);
          if (!(item != null)) dart.assertFailed("Please provide either an item for each placeholder or give a global placeholder!", L0, 81, 11, "item != null");
          newSlot = new interactive_slot.Interactive.new(item);
        }
        if (ChangePageL().is(slot)) {
          let s = new score$.Score.new(new entity.Entity.Player({distance: new entity.Range.to(8)}), this.pageScore);
          let actions = JSArrayOfWidgetL().of([]);
          if (slot.mode == change_page.ChangePageMode.exact) {
            actions[$add](s['>>'](slot.page));
          }
          if (slot.mode == change_page.ChangePageMode.next && dart.notNull(this.index) < dart.notNull(this.totalPages)) {
            actions[$add](s['+'](slot.page));
          }
          if (slot.mode == change_page.ChangePageMode.prev && dart.notNull(this.index) > 1) {
            actions[$add](s['-'](-dart.notNull(slot.page)));
          }
          if (slot.mode == change_page.ChangePageMode.prev && dart.notNull(this.index) <= 1 || slot.mode == change_page.ChangePageMode.next && dart.notNull(this.index) >= dart.notNull(this.totalPages)) {
            core.print("WARNING! You tried to navigate to a page(" + dart.str(dart.notNull(this.index) + dart.notNull(slot.page)) + ") that is not in the stack.");
          }
          newSlot = new interactive_slot.Interactive.new(slot.item, {actions: actions});
        }
        if (newSlot != null && InteractiveL().is(newSlot)) {
          let s = newSlot;
          let alreadyOccupied = ret[$firstWhere](dart.fn(slot => slot.slot.id == currentSlot.id, InteractiveLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
          if (alreadyOccupied == null) {
            ret[$add](s.applyWhenPossible({item: page_gen._createGuiItem(s.item, currentSlot), slot: currentSlot}));
            items$.UsedItems.add(s.item.getId());
          }
        }
      }
      if (this.page.fillEmptySlots != null && dart.test(this.page.fillEmptySlots)) {
        if (!(this.placeholder != null)) dart.assertFailed("You have to provide a placeholder when using fillEmptySlots", L0, 133, 14, "placeholder != null");
        items$.UsedItems.add(this.placeholder.getId());
        let length = 27;
        if (this.fillMax != null) {
          length = this.fillMax;
        } else {
          if (this.container == gui.GuiContainer.inventory) length = 36;
          if (this.container == gui.GuiContainer.dropper) length = 9;
          if (this.container == gui.GuiContainer.hopper) length = 5;
        }
        for (let i = 0; i < dart.notNull(length); i = i + 1) {
          if (!dart.test(usedSlots[$contains](i))) {
            let slot = page_gen._getSlotForContainer(this.container, i + 1);
            ret[$add](new interactive_slot.Interactive.new(page_gen._createGuiItem(this.placeholder, slot), {slot: slot}));
          }
        }
      }
      return ret;
    }
    clear() {
      if (this.container == gui.GuiContainer.inventory || this.container == gui.GuiContainer.enderchest || this.container == gui.GuiContainer.minecart) {
        return this[_slots][$map](ReplaceItemL(), dart.fn(s => new replaceitem.ReplaceItem.new(new entity.Entity.Self(), {item: new item.Item.new(items.Items.air), slot: s.slot}), InteractiveLToReplaceItemL()))[$toList]();
      }
      return this[_slots][$map](ReplaceItemL(), dart.fn(s => new replaceitem.ReplaceItem.block(new location.Location.here(), {item: new item.Item.new(items.Items.air), slot: s.slot}), InteractiveLToReplaceItemL()))[$toList]();
    }
    setItems() {
      if (this.container == gui.GuiContainer.inventory || this.container == gui.GuiContainer.enderchest || this.container == gui.GuiContainer.minecart) {
        return this[_slots][$map](ReplaceItemL(), dart.fn(s => new replaceitem.ReplaceItem.new(new entity.Entity.Self(), {item: s.item, slot: s.slot}), InteractiveLToReplaceItemL()))[$toList]();
      }
      return this[_slots][$map](ReplaceItemL(), dart.fn(s => new replaceitem.ReplaceItem.block(new location.Location.here(), {item: s.item, slot: s.slot}), InteractiveLToReplaceItemL()))[$toList]();
    }
    buildActionCommands(s, opts) {
      let copyFrom = opts && 'copyFrom' in opts ? opts.copyFrom : null;
      let copyFromPath = opts && 'copyFromPath' in opts ? opts.copyFromPath : null;
      return (() => {
        let t0 = JSArrayOfWidgetL().of([]);
        if (s.actions != null) for (let t1 of s.actions)
          t0[$add](t1);
        t0[$add](new $if.If.new(new data.Data.get(copyFrom, {path: dart.str(copyFromPath) + "[{Slot:" + dart.str(s.slot.id) + "b}]"}), {then: JSArrayOfWidgetL().of([new summon.Summon.new(entities.Entities.item, {tags: JSArrayOfStringL().of(["objd_gui_dropitem"]), nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new item.Item.new(items.Items.stone, {count: 1, nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])}).getMap()])}), new data.Data.copy(new entity.Entity.new({type: entities.Entities.item, limit: 1, nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$boolL()).from(["tag", new (IdentityMapOfStringL$MapLOfStringL$boolL()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])])])}).sort(entity.Sort.nearest), {path: "Item", from: copyFrom, fromPath: dart.str(copyFromPath) + "[{Slot:" + dart.str(s.slot.id) + "b}]"})])}));
        return t0;
      })();
    }
    itemActions() {
      return this[_slots][$map](RestActionAbleL(), dart.fn(s => {
        let item = gson.gson.encode(new (IdentityMapOfStringL$ObjectL()).from(["Slot", new values.Byte.new(s.slot.id), "tag", new (IdentityMapOfStringL$MapLOfStringL$boolL()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])]));
        let checkItem = null;
        let copyFrom = null;
        let copyFromPath = "Items";
        switch (this.container) {
          case C0 || CT.C0:
          {
            {
              checkItem = new data.Data.get(new entity.Entity.Self(), {path: "Inventory[" + dart.str(item) + "]"});
              copyFrom = new entity.Entity.Self();
              copyFromPath = "Inventory";
              break;
            }
          }
          case C1 || CT.C1:
          {
            {
              checkItem = new data.Data.get(new entity.Entity.Self(), {path: "EnderItems[" + dart.str(item) + "]"});
              copyFrom = new entity.Entity.Self();
              copyFromPath = "EnderItems";
              break;
            }
          }
          case C2 || CT.C2:
          {
            {
              checkItem = new data.Data.get(new entity.Entity.Self(), {path: "Items[" + dart.str(item) + "]"});
              copyFrom = new entity.Entity.Self();
              break;
            }
          }
          default:
          {
            {
              checkItem = new data.Data.get(new location.Location.here(), {path: "Items[" + dart.str(item) + "]"});
              copyFrom = new location.Location.here();
            }
          }
        }
        if (this[_slots][$length] === 1) {
          return new for_list.For.of(this.buildActionCommands(s, {copyFrom: copyFrom, copyFromPath: copyFromPath}));
        }
        return new $if.If.new(new condition.Condition.not(checkItem), {then: this.buildActionCommands(s, {copyFrom: copyFrom, copyFromPath: copyFromPath})});
      }, InteractiveLToRestActionAbleL()))[$toList]();
    }
    generate(context) {
      let page = new score$.Score.new(new entity.Entity.Player({distance: new entity.Range.to(8)}), this.pageScore);
      let reset = (() => {
        let t2 = JSArrayOfWidgetL().of([]);
        t2[$add](new kill.Kill.new(new entity.Entity.new({type: entities.Entities.item, nbt: new (IdentityMapOfStringL$dynamic()).from(["Item", new (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$boolL()).from(["tag", new (IdentityMapOfStringL$MapLOfStringL$boolL()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])])])})));
        for (let t3 of this.itemActions())
          t2[$add](t3);
        t2[$add](new teleport.Teleport.entity(new entity.Entity.new({type: entities.Entities.item, tags: ["objd_gui_dropitem"]}), {to: new entity.Entity.Player({distance: new entity.Range.to(8)})}));
        t2[$add](new clear.Clear.new(new entity.Entity.All({distance: new entity.Range.to(20)}), new item.Item.new("#" + dart.str(context.packId) + ":all", {nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])})));
        t2[$add](new file.File.execute("gui/reset_gui" + dart.str(this.index), {child: new for_list.For.of(this.setItems())}));
        t2[$add](new $if.If.new(new condition.Condition.not(page['&'](this.index)), {then: JSArrayOfWidgetL().of([new file.File.execute("gui/clear" + dart.str(this.index), {child: new for_list.For.of(this.clear())})])}));
        return t2;
      })();
      let s = new score$.Score.new(new entity.Entity.Player({distance: new entity.Range.to(8)}), this.countScore);
      let getItemCount = null;
      let isPlayer = false;
      switch (this.container) {
        case C0 || CT.C0:
        {
          {
            isPlayer = true;
            getItemCount = new data.Data.get(new entity.Entity.Self(), {path: "Inventory[].tag.objd.gui"});
            break;
          }
        }
        case C1 || CT.C1:
        {
          {
            isPlayer = true;
            getItemCount = new data.Data.get(new entity.Entity.Self(), {path: "EnderItems[].tag.objd.gui"});
            break;
          }
        }
        case C2 || CT.C2:
        {
          {
            getItemCount = new data.Data.get(new entity.Entity.Self(), {path: "Items[].tag.objd.gui"});
            break;
          }
        }
        default:
        {
          getItemCount = new data.Data.get(new location.Location.here(), {path: "Items[].tag.objd.gui"});
        }
      }
      let children = JSArrayOfWidgetL().of([s, s.setToCondition(new condition.Condition.data(getItemCount)), new $if.If.new(s['&'](0), {then: JSArrayOfWidgetL().of([new file.File.execute("gui/reset_gui" + dart.str(this.index), {create: false})])}), new $if.If.new(new condition.Condition.not(s['&'](this[_slots][$length])), {then: JSArrayOfWidgetL().of([new file.File.execute("gui/actions" + dart.str(this.index), {child: new for_list.For.of(reset)})])})]);
      for (let slot of this[_slots]) {
        if (slot.countScore != null) {
          children[$add](new $if.If.new(slot.countScore['>'](0), {then: JSArrayOfWidgetL().of([new builder.Builder.new(dart.fn(c => {
                if (isPlayer) {
                  core.print("WARNING! Currently you can't modify the data of a player. The count of the slot " + dart.str(slot.slot.slot) + " cannot be modified!");
                }
                if (this.container == gui.GuiContainer.inventory) {
                  return new data.Data.fromScore(new entity.Entity.Self(), {path: "Inventory[{\"Slot\":" + dart.str(slot.slot.id) + "b }].Count", score: slot.countScore});
                }
                if (this.container == gui.GuiContainer.enderchest) {
                  return new data.Data.fromScore(new entity.Entity.Self(), {path: "EnderItems[{\"Slot\":" + dart.str(slot.slot.id) + "b }].Count", score: slot.countScore});
                }
                if (this.container == gui.GuiContainer.minecart) {
                  return new data.Data.fromScore(new entity.Entity.Self(), {path: "Items[{\"Slot\":" + dart.str(slot.slot.id) + "b }].Count", score: slot.countScore});
                }
                return new data.Data.fromScore(new location.Location.here(), {path: "Items[{\"Slot\":" + dart.str(slot.slot.id) + "b }].Count", score: slot.countScore});
              }, ContextLToDataL()))])}));
        }
      }
      return new for_list.For.of(children);
    }
  };
  (page_gen.PageGenerator.new = function(page, container, countScore, fillMax, pageScore, globalSlots, placeholder, index = null, totalPages = null) {
    let t0;
    this[_slots] = null;
    this[placeholder$] = null;
    this[page$] = page;
    this[container$] = container;
    this[countScore$] = countScore;
    this[fillMax$] = fillMax;
    this[pageScore$] = pageScore;
    this[globalSlots$] = globalSlots;
    this[index$] = index;
    this[totalPages$] = totalPages;
    this.placeholder = (t0 = this.page.placeholder, t0 == null ? placeholder : t0);
    this[_slots] = this[_getGenSlots]();
  }).prototype = page_gen.PageGenerator.prototype;
  dart.addTypeTests(page_gen.PageGenerator);
  dart.addTypeCaches(page_gen.PageGenerator);
  dart.setMethodSignature(page_gen.PageGenerator, () => ({
    __proto__: dart.getMethods(page_gen.PageGenerator.__proto__),
    [_getGenSlots]: dart.fnType(dart.legacy(core.List$(dart.legacy(interactive_slot.Interactive))), []),
    clear: dart.fnType(dart.legacy(core.List$(dart.legacy(widget.Widget))), []),
    setItems: dart.fnType(dart.legacy(core.List$(dart.legacy(replaceitem.ReplaceItem))), []),
    buildActionCommands: dart.fnType(dart.legacy(core.List$(dart.legacy(widget.Widget))), [dart.legacy(interactive_slot.Interactive)], {copyFrom: dart.dynamic, copyFromPath: dart.legacy(core.String)}, {}),
    itemActions: dart.fnType(dart.legacy(core.List$(dart.legacy(widget.Widget))), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)])
  }));
  dart.setLibraryUri(page_gen.PageGenerator, L1);
  dart.setFieldSignature(page_gen.PageGenerator, () => ({
    __proto__: dart.getFields(page_gen.PageGenerator.__proto__),
    index: dart.fieldType(dart.legacy(core.int)),
    totalPages: dart.fieldType(dart.legacy(core.int)),
    fillMax: dart.fieldType(dart.legacy(core.int)),
    page: dart.fieldType(dart.legacy(page.GuiPage)),
    container: dart.fieldType(dart.legacy(gui.GuiContainer)),
    [_slots]: dart.fieldType(dart.legacy(core.List$(dart.legacy(interactive_slot.Interactive)))),
    globalSlots: dart.fieldType(dart.legacy(core.List$(dart.legacy(gui_slot.GuiSlot)))),
    countScore: dart.fieldType(dart.legacy(core.String)),
    pageScore: dart.fieldType(dart.legacy(core.String)),
    placeholder: dart.fieldType(dart.legacy(item.Item))
  }));
  var C3;
  var C4;
  var C5;
  page_gen._toInvRow = function _toInvRow(id) {
    return dart.notNull(id) < 9 ? dart.notNull(id) + 27 : dart.notNull(id) - 9;
  };
  page_gen._getSlotForContainer = function _getSlotForContainer(container, s) {
    switch (container) {
      case C0 || CT.C0:
      {
        {
          if (dart.notNull(s) > 36) {
            dart.throw("You specified too many items for the inventory!");
          }
          return slot.Slot.inv(s);
        }
      }
      case C3 || CT.C3:
      {
        return slot.Slot.chest(s);
      }
      case C4 || CT.C4:
      {
        return slot.Slot.drop(s);
      }
      case C2 || CT.C2:
      {
        {
          if (dart.notNull(s) > 27) {
            dart.throw("You specified too many items for the minecart!");
          }
          return slot.Slot.chest(s);
        }
      }
      case C5 || CT.C5:
      {
        {
          if (dart.notNull(s) > 5) {
            dart.throw("You specified too many items for the hopper!");
          }
          return slot.Slot.chest(s);
        }
      }
      case C1 || CT.C1:
      {
        return slot.Slot.chest(s, null, true);
      }
    }
    dart.throw(new core.UnsupportedError.new(dart.str(container) + " is not supported"));
  };
  page_gen._createGuiItem = function _createGuiItem(i, s) {
    return i.copyWith({slot: s, nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$boolL()).from(["gui", true])])});
  };
  var _pageGens = dart.privateName(gui, "_pageGens");
  var _mainContent = dart.privateName(gui, "_mainContent");
  var container$0 = dart.privateName(gui, "GuiModule.container");
  var blockLocation$ = dart.privateName(gui, "GuiModule.blockLocation");
  var targetEntity$ = dart.privateName(gui, "GuiModule.targetEntity");
  var pages$ = dart.privateName(gui, "GuiModule.pages");
  var globalSlots$0 = dart.privateName(gui, "GuiModule.globalSlots");
  var placeholder$0 = dart.privateName(gui, "GuiModule.placeholder");
  var countScore$0 = dart.privateName(gui, "GuiModule.countScore");
  var pageScore$0 = dart.privateName(gui, "GuiModule.pageScore");
  var fillMax$0 = dart.privateName(gui, "GuiModule.fillMax");
  var triggerGui$ = dart.privateName(gui, "GuiModule.triggerGui");
  var offset$ = dart.privateName(gui, "GuiModule.offset");
  var minecartAlwaysActive$ = dart.privateName(gui, "GuiModule.minecartAlwaysActive");
  var minecartName$ = dart.privateName(gui, "GuiModule.minecartName");
  gui.GuiModule = class GuiModule extends module.Module {
    get container() {
      return this[container$0];
    }
    set container(value) {
      this[container$0] = value;
    }
    get blockLocation() {
      return this[blockLocation$];
    }
    set blockLocation(value) {
      this[blockLocation$] = value;
    }
    get targetEntity() {
      return this[targetEntity$];
    }
    set targetEntity(value) {
      this[targetEntity$] = value;
    }
    get pages() {
      return this[pages$];
    }
    set pages(value) {
      this[pages$] = value;
    }
    get globalSlots() {
      return this[globalSlots$0];
    }
    set globalSlots(value) {
      this[globalSlots$0] = value;
    }
    get placeholder() {
      return this[placeholder$0];
    }
    set placeholder(value) {
      this[placeholder$0] = value;
    }
    get countScore() {
      return this[countScore$0];
    }
    set countScore(value) {
      this[countScore$0] = value;
    }
    get pageScore() {
      return this[pageScore$0];
    }
    set pageScore(value) {
      this[pageScore$0] = value;
    }
    get fillMax() {
      return this[fillMax$0];
    }
    set fillMax(value) {
      this[fillMax$0] = value;
    }
    get triggerGui() {
      return this[triggerGui$];
    }
    set triggerGui(value) {
      this[triggerGui$] = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      this[offset$] = value;
    }
    get minecartAlwaysActive() {
      return this[minecartAlwaysActive$];
    }
    set minecartAlwaysActive(value) {
      this[minecartAlwaysActive$] = value;
    }
    get minecartName() {
      return this[minecartName$];
    }
    set minecartName(value) {
      this[minecartName$] = value;
    }
    static chest(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.chest, target, null, pages, placeholder, countScore, pageScore, globalSlots);
    }
    static dropper(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.dropper, target, null, pages, placeholder, countScore, pageScore, globalSlots);
    }
    static hopper(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.hopper, target, null, pages, placeholder, countScore, pageScore, globalSlots);
    }
    static inventory(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let fillHotbar = opts && 'fillHotbar' in opts ? opts.fillHotbar : false;
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.inventory, null, target, pages, placeholder, countScore, pageScore, globalSlots, {fillMax: dart.test(fillHotbar) ? null : 27});
    }
    static enderchest(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.enderchest, null, target, pages, placeholder, countScore, pageScore, globalSlots);
    }
    static minecart(target, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.minecart, null, target, pages, placeholder, countScore, pageScore, globalSlots);
    }
    static item(handItem, opts) {
      let pages = opts && 'pages' in opts ? opts.pages : null;
      let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
      let countScore = opts && 'countScore' in opts ? opts.countScore : "objd_gui_count";
      let pageScore = opts && 'pageScore' in opts ? opts.pageScore : "objd_gui_page";
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let alwaysActive = opts && 'alwaysActive' in opts ? opts.alwaysActive : true;
      let name = opts && 'name' in opts ? opts.name : null;
      let globalSlots = opts && 'globalSlots' in opts ? opts.globalSlots : null;
      return new gui.GuiModule.__(gui.GuiContainer.minecart, null, null, pages, placeholder, countScore, pageScore, globalSlots, {triggerGui: handItem, offset: offset, minecartAlwaysActive: alwaysActive, minecartName: name});
    }
    [_mainContent](targetE) {
      this[_pageGens] = this.pages[$map](PageGeneratorL(), dart.fn(p => new page_gen.PageGenerator.new(p, this.container, this.countScore, this.fillMax, this.pageScore, this.globalSlots, this.placeholder, dart.notNull(this.pages[$indexOf](p)) + 1, this.pages[$length]), GuiPageLToPageGeneratorL()))[$toList]();
      let main = new file.File.execute("gui/main", {child: new builder.Builder.new(dart.fn(context => {
          let score = new score$.Score.new(new entity.Entity.Player({distance: new entity.Range.to(8)}), this.pageScore);
          return new for_list.For.of((() => {
            let t4 = JSArrayOfWidgetL().of([]);
            if (this[_pageGens][$length] === 1) t4[$add](this[_pageGens][$first]);
            if (dart.notNull(this[_pageGens][$length]) > 1) t4[$add](new $if.If.new(new condition.Condition.not(score['>'](0)), {then: JSArrayOfWidgetL().of([score['>>'](1)])}));
            if (dart.notNull(this[_pageGens][$length]) > 1) for (let t5 of this[_pageGens][$map](IfL(), dart.fn(p => new $if.If.new(score['&'](p.index), {then: JSArrayOfWidgetL().of([score, new file.File.execute("gui/gui" + dart.str(p.index), {child: p})])}), PageGeneratorLToIfL()))[$toList]())
              t4[$add](t5);
            if (this.blockLocation != null || this.container == gui.GuiContainer.minecart) t4[$add](new $if.If.new(new condition.Condition.block(new location.Location.rel({y: -1.0}), {block: blocks.Blocks.hopper}), {then: JSArrayOfWidgetL().of([new data.Data.merge(new location.Location.rel({y: -1.0}), {nbt: new (IdentityMapOfStringL$dynamic()).from(["TransferCooldown", 20])})])}));
            return t4;
          })());
        }, ContextLToForL()))});
      if (this.blockLocation != null) {
        return new execute.Execute.positioned(this.blockLocation, {children: JSArrayOfWidgetL().of([main, new all_tag.TagAll.new()])});
      }
      if (targetE != null) {
        return new execute.Execute.asat(targetE, {children: JSArrayOfWidgetL().of([main, new all_tag.TagAll.new()])});
      }
      dart.throw("Please provide a non-null argument in the GuiModule");
    }
    generate(context) {
      if (!(this.pages != null && dart.test(this.pages[$isNotEmpty]))) dart.assertFailed(null, L2, 280, 12, "pages != null && pages.isNotEmpty");
      let target = this.targetEntity;
      let dOffset = this.offset;
      let main = JSArrayOfWidgetL().of([]);
      if (this.triggerGui != null) {
        target == null ? target = new entity.Entity.new({type: entities.Entities.chest_minecart, tags: ["objd_gui_container"]}) : null;
        dOffset == null ? dOffset = dart.test(this.minecartAlwaysActive) ? new location.Location.local({z: 3.0}) : new location.Location.rel({y: -0.69}) : null;
        main[$addAll](JSArrayOfWidgetL().of([new execute.Execute.as_(new entity.Entity.All({nbt: new (IdentityMapOfStringL$dynamic()).from(["SelectedItem", this.triggerGui.getMap()]), verticalRotation: dart.test(this.minecartAlwaysActive) ? null : new entity.Range.from(80)}), {children: JSArrayOfWidgetL().of([new tag.Tag.new("objd_has_gui_item")])}), new execute.Execute.asat(target, {children: JSArrayOfWidgetL().of([new $if.If.new(new condition.Condition.not(new entity.Entity.new({tags: ["objd_has_gui_item"], distance: new entity.Range.to(8)})), {then: JSArrayOfWidgetL().of([new file.File.execute("gui/removecart", {child: new for_list.For.of(JSArrayOfWidgetL().of([new teleport.Teleport.new(new entity.Entity.Self(), {to: new location.Location.new("~ -500 ~")}), new data.Data.merge(new entity.Entity.Self(), {nbt: new (IdentityMapOfStringL$dynamic()).from(["Items", []])}), new kill.Kill.new()]))})])})])}), new execute.Execute.as_(new entity.Entity.new({tags: ["objd_had_gui_item"]}).not({tags: ["objd_has_gui_item"]}), {children: JSArrayOfWidgetL().of([new tag.Tag.new("objd_had_gui_item").remove()])}), new execute.Execute.asat(new entity.Entity.All({tags: ["objd_has_gui_item"]}).not({tags: ["objd_had_gui_item"]}), {children: JSArrayOfWidgetL().of([new file.File.execute("gui/summoncart", {child: new summon.Summon.new(entities.Entities.chest_minecart, {location: dOffset, name: this.minecartName, tags: JSArrayOfStringL().of(["objd_gui_container"]), nbt: new (IdentityMapOfStringL$dynamic()).from(["CustomDisplayTile", 1, "DisplayState", new (IdentityMapOfStringL$StringL()).from(["Name", "air"]), "DisplayOffset", 1])})})])}).anchored(execute.Facing.eyes), new execute.Execute.asat(new entity.Entity.All({tags: ["objd_has_gui_item"]}), {children: JSArrayOfWidgetL().of([new teleport.Teleport.new(target.copyWith({distance: new entity.Range.to(8)}).sort(entity.Sort.nearest), {to: dOffset}), new tag.Tag.new("objd_had_gui_item"), new tag.Tag.new("objd_has_gui_item").remove()])}).anchored(execute.Facing.eyes)]));
      }
      main[$add](this[_mainContent](target));
      return new for_list.For.of(main);
    }
    registerFiles() {
      return JSArrayOfFileL().of([new file.File.new("gui/clear", {child: new builder.Builder.new(dart.fn(context => {
            if (this[_pageGens][$length] === 1) return new for_list.For.of(this[_pageGens][$first].clear());
            let score = new score$.Score.new(new entity.Entity.Player({distance: new entity.Range.to(8)}), this.pageScore);
            return new for_list.For.of(this[_pageGens][$map](IfL(), dart.fn(p => new $if.If.new(score['&'](p.index), {then: JSArrayOfWidgetL().of([new file.File.execute("/gui/clear" + dart.str(p.index), {create: false})])}), PageGeneratorLToIfL()))[$toList]());
          }, ContextLToForL()))})]);
    }
  };
  (gui.GuiModule.__ = function(container, blockLocation, targetEntity, pages, placeholder, countScore, pageScore, globalSlots, opts) {
    let fillMax = opts && 'fillMax' in opts ? opts.fillMax : null;
    let triggerGui = opts && 'triggerGui' in opts ? opts.triggerGui : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let minecartAlwaysActive = opts && 'minecartAlwaysActive' in opts ? opts.minecartAlwaysActive : null;
    let minecartName = opts && 'minecartName' in opts ? opts.minecartName : null;
    this[_pageGens] = null;
    this[container$0] = container;
    this[blockLocation$] = blockLocation;
    this[targetEntity$] = targetEntity;
    this[pages$] = pages;
    this[placeholder$0] = placeholder;
    this[countScore$0] = countScore;
    this[pageScore$0] = pageScore;
    this[globalSlots$0] = globalSlots;
    this[fillMax$0] = fillMax;
    this[triggerGui$] = triggerGui;
    this[offset$] = offset;
    this[minecartAlwaysActive$] = minecartAlwaysActive;
    this[minecartName$] = minecartName;
    gui.GuiModule.__proto__.new.call(this);
    ;
  }).prototype = gui.GuiModule.prototype;
  dart.addTypeTests(gui.GuiModule);
  dart.addTypeCaches(gui.GuiModule);
  dart.setMethodSignature(gui.GuiModule, () => ({
    __proto__: dart.getMethods(gui.GuiModule.__proto__),
    [_mainContent]: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(entity.Entity)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context.Context)]),
    registerFiles: dart.fnType(dart.legacy(core.List$(dart.legacy(file.File))), [])
  }));
  dart.setLibraryUri(gui.GuiModule, L3);
  dart.setFieldSignature(gui.GuiModule, () => ({
    __proto__: dart.getFields(gui.GuiModule.__proto__),
    container: dart.fieldType(dart.legacy(gui.GuiContainer)),
    blockLocation: dart.fieldType(dart.legacy(location.Location)),
    targetEntity: dart.fieldType(dart.legacy(entity.Entity)),
    pages: dart.fieldType(dart.legacy(core.List$(dart.legacy(page.GuiPage)))),
    globalSlots: dart.fieldType(dart.legacy(core.List$(dart.legacy(gui_slot.GuiSlot)))),
    placeholder: dart.fieldType(dart.legacy(item.Item)),
    countScore: dart.fieldType(dart.legacy(core.String)),
    pageScore: dart.fieldType(dart.legacy(core.String)),
    fillMax: dart.fieldType(dart.legacy(core.int)),
    triggerGui: dart.fieldType(dart.legacy(item.Item)),
    offset: dart.fieldType(dart.legacy(location.Location)),
    minecartAlwaysActive: dart.fieldType(dart.legacy(core.bool)),
    minecartName: dart.fieldType(dart.legacy(text_components.TextComponent)),
    [_pageGens]: dart.fieldType(dart.legacy(core.List$(dart.legacy(page_gen.PageGenerator))))
  }));
  var C6;
  gui.GuiContainer = class GuiContainer extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (gui.GuiContainer.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = gui.GuiContainer.prototype;
  dart.addTypeTests(gui.GuiContainer);
  dart.addTypeCaches(gui.GuiContainer);
  dart.setMethodSignature(gui.GuiContainer, () => ({
    __proto__: dart.getMethods(gui.GuiContainer.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(gui.GuiContainer, L3);
  dart.setFieldSignature(gui.GuiContainer, () => ({
    __proto__: dart.getFields(gui.GuiContainer.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(gui.GuiContainer, ['toString']);
  gui.GuiContainer.dropper = C4 || CT.C4;
  gui.GuiContainer.chest = C3 || CT.C3;
  gui.GuiContainer.enderchest = C1 || CT.C1;
  gui.GuiContainer.inventory = C0 || CT.C0;
  gui.GuiContainer.minecart = C2 || CT.C2;
  gui.GuiContainer.hopper = C5 || CT.C5;
  gui.GuiContainer.values = C6 || CT.C6;
  dart.defineLazy(gui, {
    /*gui._DEF_Count*/get _DEF_Count() {
      return "objd_gui_count";
    },
    /*gui._DEF_Page*/get _DEF_Page() {
      return "objd_gui_page";
    }
  }, true);
  dart.trackLibraries("packages/objd_gui/gui", {
    "package:objd_gui/widgets/page_gen.dart": page_gen,
    "package:objd_gui/gui.dart": gui
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widgets/page_gen.dart","gui.dart"],"names":[],"mappings":"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","file":"gui.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__page_gen: page_gen,
    gui: gui
  };
}));

//# sourceMappingURL=gui.unsound.ddc.js.map
