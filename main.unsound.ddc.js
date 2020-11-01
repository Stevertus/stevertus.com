define(['dart_sdk', 'packages/ng_translate/src/translation_directive', 'packages/angular/src/bootstrap/modules', 'packages/stevertus/app_component', 'packages/stevertus/app_component.template', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_compiler/v1/src/metadata/di_tokens'], (function load__web__main(dart_sdk, packages__ng_translate__src__translation_directive, packages__angular__src__bootstrap__modules, packages__stevertus__app_component, packages__stevertus__app_component$46template, packages__angular__src__core__change_detection__pipe_transform, packages__angular_router__src__directives__router_outlet_directive, packages__angular_compiler__v1__src__metadata__di_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const translation_service = packages__ng_translate__src__translation_directive.src__translation_service;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const app_component = packages__stevertus__app_component.app_component;
  const app_component$46template = packages__stevertus__app_component$46template.app_component$46template;
  const injector = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__injector;
  const hierarchical = packages__angular__src__core__change_detection__pipe_transform.src__di__injector__hierarchical;
  const router_impl = packages__angular_router__src__directives__router_outlet_directive.src__router__router_impl;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const router_hook = packages__angular_router__src__directives__router_outlet_directive.src__router_hook;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const browser_platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__browser_platform_location;
  const path_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__path_location_strategy;
  const platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__platform_location;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  var main = Object.create(dart.library);
  var main$46template = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var AppComponentL = () => (AppComponentL = dart.constFn(dart.legacy(app_component.AppComponent)))();
  var InjectorL = () => (InjectorL = dart.constFn(dart.legacy(injector.Injector)))();
  var InjectorLToInjectorL = () => (InjectorLToInjectorL = dart.constFn(dart.fnType(InjectorL(), [], [InjectorL()])))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location.Location)))();
  var RouterHookL = () => (RouterHookL = dart.constFn(dart.legacy(router_hook.RouterHook)))();
  var LocationStrategyL = () => (LocationStrategyL = dart.constFn(dart.legacy(location_strategy.LocationStrategy)))();
  var PlatformLocationL = () => (PlatformLocationL = dart.constFn(dart.legacy(platform_location.PlatformLocation)))();
  var OpaqueTokenOfStringL = () => (OpaqueTokenOfStringL = dart.constFn(di_tokens.OpaqueToken$(StringL())))();
  var RouterL = () => (RouterL = dart.constFn(dart.legacy(router.Router)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///web/main.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(main$46template.injector$Injector, InjectorLToInjectorL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: OpaqueTokenOfStringL().prototype,
        [OpaqueToken__uniqueName]: "appBaseHref"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.Object.prototype
      });
    }
  }, false);
  main.main = function main$() {
    return async.async(dart.void, function* main$() {
      translation_service.TranslationService.defaultLocale = "en";
      translation_service.TranslationService.initializeLocale("en", new (IdentityMapOfStringL$dynamic()).from(["view", "View", "download", "Download", "articles", "Articles", "projects", "Projects", "videos", "Videos", "contact", "Contact", "search", "Search", "page", "Page", "of", "of", "project", "Project", "namespace", "Project namespace", "selectItem", "Please select your item", "landing", new (IdentityMapOfStringL$ObjectL()).from(["section1", new (IdentityMapOfStringL$StringL()).from(["title", "Experimenting", "subtitle", "With new Ideas", "text", "Modifing Minecraft to its limits, creating new ideas and tools."]), "section2", new (IdentityMapOfStringL$StringL()).from(["title", "Start Creating", "subtitle", "Today", "text", "Use Tools, learn coding and transform Minecraft.", "button", "Learn Programming"]), "learnProgramming", "Learn Programming", "card_objd", new (IdentityMapOfStringL$StringL()).from(["title", "objD", "desc", "A Framework For Generating Datapacks", "button", "Get Started"]), "card_mcscript", new (IdentityMapOfStringL$StringL()).from(["title", "mcscript", "desc", "A Programming Language for Minecraft"]), "card_dmanager", new (IdentityMapOfStringL$StringL()).from(["title", "dManager", "desc", "Application to share, install and manage Datapacks"]), "card_worldedit", new (IdentityMapOfStringL$StringL()).from(["title", "Vanilla Worldedit", "desc", "Worldedit for Vanilla Minecraft in Datapacks"])]), "footer", new (IdentityMapOfStringL$StringL()).from(["about", "About", "tools", "Tools", "madewith", "Made with", "inG", "in Germany", "rightsReserved", "All rights reserved", "privacyPolicy", "Privacy Policy"]), "gui", new (IdentityMapOfStringL$StringL()).from(["fillEmptySlots", "Fill all empty slots with the placeholder below", "gui_placeholder", "Select Placeholder Item", "blockLocation", "Location of the block", "gui_trigger", "Select Item that should trigger the GUI", "minecartName", "Custom Minecart Name", "minecartAlwaysActive", "Minecart is not hidden in front of the player", "offset", "Custom Offset Location", "actionSelect", "Please select your desired action:", "executeCommands", "Commands to execute...", "countScoreboard", "Count Scoreboard", "countEntity", "Count Score Entity", "pageNumber", "Page number...", "selectItem", "Select your Item", "placeholderItem", "This item is applied to all placeholder slots that you did not specify or fills up the rest.", "handItem", "Hold this item in your hand and a minecart will be summoned in front of you."])]));
      translation_service.TranslationService.initializeLocale("de", new (IdentityMapOfStringL$dynamic()).from(["view", "Anzeigen", "download", "Download", "articles", "Artikel", "projects", "Projekte", "contact", "Kontakt", "search", "Suchen", "page", "Seite", "of", "von", "project", "Projekt", "namespace", "Projekt namespace", "selectItem", "Item auswählen", "landing", new (IdentityMapOfStringL$ObjectL()).from(["section1", new (IdentityMapOfStringL$StringL()).from(["title", "Experimentiere", "subtitle", "Mit neuen Konzepten", "text", "Bringe Minecraft an seine Grenzen und erschaffe Neues durch Tools"]), "section2", new (IdentityMapOfStringL$StringL()).from(["title", "Neues erforschen", "subtitle", "Fange heute an", "text", "Benutze Tools, lerne programmieren und verwandle Minecraft.", "button", "Lerne Programmieren"]), "learnProgramming", "Learn Programming", "card_objd", new (IdentityMapOfStringL$StringL()).from(["desc", "Ein Framework, um Datapacks zu generieren", "button", "Lernen"]), "card_mcscript", new (IdentityMapOfStringL$StringL()).from(["desc", "Eine Programmiersprache für Minecraft"]), "card_dmanager", new (IdentityMapOfStringL$StringL()).from(["desc", "App fürs Teilen, Installieren und Verwalten von Datapacks"]), "card_worldedit", new (IdentityMapOfStringL$StringL()).from(["desc", "Worldedit für Vanilla Minecraft mit Datapacks"])]), "footer", new (IdentityMapOfStringL$StringL()).from(["about", "Über", "tools", "Tools", "madewith", "Mit", "inG", "in Deutschland gemacht", "rightsReserved", "Alle Rechte vorbehalten", "privacyPolicy", "Datenschutzerklärung"]), "gui", new (IdentityMapOfStringL$StringL()).from(["fillEmptySlots", "Fülle alle leeren Slots mit dem Placeholder", "gui_placeholder", "Wähle Placeholder Item", "blockLocation", "Location des Blockes", "gui_trigger", "Wähle ein Item, das die GUI auslöst", "minecartAlwaysActive", "Minecart wird immer vor dem Spieler angezeigt", "actionSelect", "Bitte wähle deine Aktion:", "executeCommands", "Commands zum Ausführen...", "pageNumber", "Seitenzahl...", "selectItem", "Wähle dein Item", "placeholderItem", "Dieses Item wird auf alle placeholder slots angewandt, die nicht überschrieben werden, oder füllt leere Slots", "handItem", "Halte dieses Item in deiner Hand und ein Minecart wird vor dir auftauchen."])]));
      translation_service.TranslationService.initializeLocale("zh", new (IdentityMapOfStringL$dynamic()).from(["view", "浏览", "download", "下载", "articles", "文章", "projects", "项目", "videos", "视频", "contact", "联系", "search", "搜索", "page", "页面", "of", "of", "project", "项目", "namespace", "项目命名空间", "selectItem", "请选择你的物品", "landing", new (IdentityMapOfStringL$ObjectL()).from(["section1", new (IdentityMapOfStringL$StringL()).from(["title", "体验", "subtitle", "全新的点子", "text", "将Minecraft推至其极限，创造新的点子及工具"]), "section2", new (IdentityMapOfStringL$StringL()).from(["title", "创造", "subtitle", "从现在开始", "text", "使用工具，编程来改造Minecraft", "button", "学习编程"]), "learnProgramming", "学习编程", "card_objd", new (IdentityMapOfStringL$StringL()).from(["title", "objD", "desc", "数据包生成框架", "button", "开始使用"]), "card_mcscript", new (IdentityMapOfStringL$StringL()).from(["title", "mcscript", "desc", "为Minecraft服务的编程语言"]), "card_dmanager", new (IdentityMapOfStringL$StringL()).from(["title", "dManager", "desc", "用于分享，安装，管理数据包的应用"]), "card_worldedit", new (IdentityMapOfStringL$StringL()).from(["title", "Vanilla Worldedit", "desc", "用于原版Minecraft的Worldedit数据包"])]), "footer", new (IdentityMapOfStringL$StringL()).from(["about", "关于", "tools", "工具", "madewith", "Made with", "inG", "in Germany", "rightsReserved", "All rights reserved", "privacyPolicy", "Privacy Policy"]), "gui", new (IdentityMapOfStringL$StringL()).from(["fillEmptySlots", "使用以下占位符填满所有未被占用的槽位", "blockLocation", "方块位置", "gui_trigger", "选择会触发GUI的物品", "minecartName", "自定义矿车名称", "minecartAlwaysActive", "矿车总会在玩家面前显示", "offset", "自定义偏移量", "executeCommands", "执行命令...", "countScoreboard", "数量计分板", "countEntity", "数量实体", "pageNumber", "页码...", "selectItem", "选择你的物品", "placeholderItem", "该物品会替换所有未被定义的Placeholder槽位或所有未被占用的槽位", "handItem", "手持该物品会在你面前生成运输矿车"])]));
      run.runApp(AppComponentL(), app_component$46template.AppComponentNgFactory, {createInjector: main.injector});
    });
  };
  var C0;
  dart.defineLazy(main, {
    /*main.injector*/get injector() {
      return C0 || CT.C0;
    }
  }, true);
  var _field0 = dart.privateName(main$46template, "_field0");
  var _field1 = dart.privateName(main$46template, "_field1");
  var _field2 = dart.privateName(main$46template, "_field2");
  var _field3 = dart.privateName(main$46template, "_field3");
  var _getRouterImpl$0 = dart.privateName(main$46template, "_getRouterImpl$0");
  var _getLocation$1 = dart.privateName(main$46template, "_getLocation$1");
  var _getBrowserPlatformLocation$2 = dart.privateName(main$46template, "_getBrowserPlatformLocation$2");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C1;
  var _getPathLocationStrategy$3 = dart.privateName(main$46template, "_getPathLocationStrategy$3");
  var _getInjector$4 = dart.privateName(main$46template, "_getInjector$4");
  var C2;
  main$46template._Injector$injector = class _Injector$36injector extends hierarchical.HierarchicalInjector {
    [_getRouterImpl$0]() {
      let t0;
      t0 = this[_field0];
      return t0 == null ? this[_field0] = new router_impl.RouterImpl.new(LocationL().as(this.get(dart.wrapType(LocationL()))), RouterHookL().as(this.provideUntyped(dart.wrapType(RouterHookL()), null))) : t0;
    }
    [_getLocation$1]() {
      let t0;
      t0 = this[_field1];
      return t0 == null ? this[_field1] = new location.Location.new(LocationStrategyL().as(this.get(dart.wrapType(LocationStrategyL())))) : t0;
    }
    [_getBrowserPlatformLocation$2]() {
      let t0;
      t0 = this[_field2];
      return t0 == null ? this[_field2] = new browser_platform_location.BrowserPlatformLocation.new() : t0;
    }
    [_getPathLocationStrategy$3]() {
      let t0;
      t0 = this[_field3];
      return t0 == null ? this[_field3] = new path_location_strategy.PathLocationStrategy.new(PlatformLocationL().as(this.get(dart.wrapType(PlatformLocationL()))), StringL().as(this.provideUntyped(C1 || CT.C1, null))) : t0;
    }
    [_getInjector$4]() {
      return this;
    }
    injectFromSelfOptional(token, orElse = C2 || CT.C2) {
      if (token === dart.wrapType(RouterL())) {
        return this[_getRouterImpl$0]();
      }
      if (token === dart.wrapType(LocationL())) {
        return this[_getLocation$1]();
      }
      if (token === dart.wrapType(PlatformLocationL())) {
        return this[_getBrowserPlatformLocation$2]();
      }
      if (token === dart.wrapType(LocationStrategyL())) {
        return this[_getPathLocationStrategy$3]();
      }
      if (token === dart.wrapType(InjectorL())) {
        return this[_getInjector$4]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$injector.__ = function(parent = null) {
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    main$46template._Injector$injector.__proto__.new.call(this, parent);
    ;
  }).prototype = main$46template._Injector$injector.prototype;
  dart.addTypeTests(main$46template._Injector$injector);
  dart.addTypeCaches(main$46template._Injector$injector);
  main$46template._Injector$injector[dart.implements] = () => [injector.Injector];
  dart.setMethodSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$injector.__proto__),
    [_getRouterImpl$0]: dart.fnType(dart.legacy(router_impl.RouterImpl), []),
    [_getLocation$1]: dart.fnType(dart.legacy(location.Location), []),
    [_getBrowserPlatformLocation$2]: dart.fnType(dart.legacy(browser_platform_location.BrowserPlatformLocation), []),
    [_getPathLocationStrategy$3]: dart.fnType(dart.legacy(path_location_strategy.PathLocationStrategy), []),
    [_getInjector$4]: dart.fnType(dart.legacy(injector.Injector), []),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(main$46template._Injector$injector, L0);
  dart.setFieldSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getFields(main$46template._Injector$injector.__proto__),
    [_field0]: dart.fieldType(dart.legacy(router_impl.RouterImpl)),
    [_field1]: dart.fieldType(dart.legacy(location.Location)),
    [_field2]: dart.fieldType(dart.legacy(browser_platform_location.BrowserPlatformLocation)),
    [_field3]: dart.fieldType(dart.legacy(path_location_strategy.PathLocationStrategy))
  }));
  main$46template.injector$Injector = function injector$36Injector(parent = null) {
    return new main$46template._Injector$injector.__(parent);
  };
  main$46template.initReflector = function initReflector() {
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main,
    "org-dartlang-app:///web/main.template.dart": main$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","main.template.dart"],"names":[],"mappings":"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","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main,
    web__main$46template: main$46template
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
