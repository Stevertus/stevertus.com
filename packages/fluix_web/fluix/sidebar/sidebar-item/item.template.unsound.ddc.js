define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/sidebar/sidebar-item/item', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/fluix_web/fluix/sidebar/sidebar-item/item.css.shim'], (function load__packages__fluix_web__fluix__sidebar__sidebar_item__item_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__sidebar__sidebar_item__item, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__fluix_web__fluix__sidebar__sidebar_item__item$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const item = packages__fluix_web__fluix__sidebar__sidebar_item__item.fluix__sidebar__sidebar_item__item;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const item$46css$46shim = packages__fluix_web__fluix__sidebar__sidebar_item__item$46css$46shim.fluix__sidebar__sidebar_item__item$46css$46shim;
  var item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var FluidSidebarItemL = () => (FluidSidebarItemL = dart.constFn(dart.legacy(item.FluidSidebarItem)))();
  var ComponentFactoryOfFluidSidebarItemL = () => (ComponentFactoryOfFluidSidebarItemL = dart.constFn(component_factory.ComponentFactory$(FluidSidebarItemL())))();
  var HostViewOfFluidSidebarItemL = () => (HostViewOfFluidSidebarItemL = dart.constFn(host_view.HostView$(FluidSidebarItemL())))();
  var HostViewLOfFluidSidebarItemL = () => (HostViewLOfFluidSidebarItemL = dart.constFn(dart.legacy(HostViewOfFluidSidebarItemL())))();
  var VoidToHostViewLOfFluidSidebarItemL = () => (VoidToHostViewLOfFluidSidebarItemL = dart.constFn(dart.fnType(HostViewLOfFluidSidebarItemL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/sidebar/sidebar-item/item.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(item$46template.viewFactory_FluidSidebarItem1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(item$46template.viewFactory_FluidSidebarItem2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(item$46template.ViewFluidSidebarItem0._debugClearComponentStyles, VoidTovoid());
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.fn(item$46template.viewFactory_FluidSidebarItemHost0, VoidToHostViewLOfFluidSidebarItemL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfFluidSidebarItemL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "fluid-sidebar-item"
      });
    }
  }, false);
  var _textBinding_5 = dart.privateName(item$46template, "_textBinding_5");
  var _NgClass_0_5 = dart.privateName(item$46template, "_NgClass_0_5");
  var _appEl_2 = dart.privateName(item$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(item$46template, "_NgIf_2_9");
  var _appEl_3 = dart.privateName(item$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(item$46template, "_NgIf_3_9");
  var _NgClass_4_5 = dart.privateName(item$46template, "_NgClass_4_5");
  var _expr_1 = dart.privateName(item$46template, "_expr_1");
  var _expr_3 = dart.privateName(item$46template, "_expr_3");
  var C0;
  var C1;
  var C2;
  item$46template.ViewFluidSidebarItem0 = class ViewFluidSidebarItem0 extends component_view.ComponentView$(dart.legacy(item.FluidSidebarItem)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/sidebar/sidebar-item/item.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this[_NgClass_0_5] = new ng_class.NgClass.new(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "side");
      this.addShimC(_el_1);
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C1 || CT.C1);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _el_4 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_4, "text");
      this.addShimC(_el_4);
      this[_NgClass_4_5] = new ng_class.NgClass.new(_el_4);
      _el_4[$append](this[_textBinding_5].element);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_NgClass_0_5].initialClasses = "container";
      }
      let currVal_1 = dart.test(_ctx.active) ? "active" : "";
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "active ? 'active' : ''", "package:fluix_web/fluix/sidebar/sidebar-item/item.html"))) {
        this[_NgClass_0_5].rawClass = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_0_5].ngDoCheck();
      }
      this[_NgIf_2_9].ngIf = _ctx.icon != null;
      this[_NgIf_3_9].ngIf = _ctx.icon == null;
      if (dart.test(firstCheck)) {
        this[_NgClass_4_5].initialClasses = "text";
      }
      let currVal_3 = dart.test(_ctx.expanded) ? "expand" : "shrink";
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "expanded ? 'expand' : 'shrink'", "package:fluix_web/fluix/sidebar/sidebar-item/item.html"))) {
        this[_NgClass_4_5].rawClass = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_4_5].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_textBinding_5].updateText(interpolate.interpolateString0(_ctx.text));
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_NgClass_4_5].ngOnDestroy();
      this[_NgClass_0_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      item$46template.ViewFluidSidebarItem0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = item$46template.ViewFluidSidebarItem0._componentStyles;
      if (styles == null) {
        item$46template.ViewFluidSidebarItem0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(item$46template.styles$FluidSidebarItem, item$46template.ViewFluidSidebarItem0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C2 || CT.C2);
        }
      }
      this.componentStyles = styles;
    }
  };
  (item$46template.ViewFluidSidebarItem0.new = function(parentView, parentIndex) {
    this[_textBinding_5] = new text_binding.TextBinding.new();
    this[_NgClass_0_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_NgClass_4_5] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    item$46template.ViewFluidSidebarItem0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-sidebar-item"));
  }).prototype = item$46template.ViewFluidSidebarItem0.prototype;
  dart.addTypeTests(item$46template.ViewFluidSidebarItem0);
  dart.addTypeCaches(item$46template.ViewFluidSidebarItem0);
  dart.setMethodSignature(item$46template.ViewFluidSidebarItem0, () => ({
    __proto__: dart.getMethods(item$46template.ViewFluidSidebarItem0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template.ViewFluidSidebarItem0, L0);
  dart.setFieldSignature(item$46template.ViewFluidSidebarItem0, () => ({
    __proto__: dart.getFields(item$46template.ViewFluidSidebarItem0.__proto__),
    [_textBinding_5]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_NgClass_0_5]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_NgClass_4_5]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(item$46template.ViewFluidSidebarItem0, {
    /*item$46template.ViewFluidSidebarItem0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(item$46template, "_compView_0");
  var _FluidIcon_0_5 = dart.privateName(item$46template, "_FluidIcon_0_5");
  var _expr_0 = dart.privateName(item$46template, "_expr_0");
  var C3;
  item$46template._ViewFluidSidebarItem1 = class _ViewFluidSidebarItem1 extends embedded_view.EmbeddedView$(dart.legacy(item.FluidSidebarItem)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C3 || CT.C3]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let currVal_0 = _ctx.icon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "icon", "package:fluix_web/fluix/sidebar/sidebar-item/item.html"))) {
        this[_FluidIcon_0_5].icon = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (item$46template._ViewFluidSidebarItem1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    this[_expr_0] = null;
    item$46template._ViewFluidSidebarItem1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewFluidSidebarItem1.prototype;
  dart.addTypeTests(item$46template._ViewFluidSidebarItem1);
  dart.addTypeCaches(item$46template._ViewFluidSidebarItem1);
  dart.setMethodSignature(item$46template._ViewFluidSidebarItem1, () => ({
    __proto__: dart.getMethods(item$46template._ViewFluidSidebarItem1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template._ViewFluidSidebarItem1, L0);
  dart.setFieldSignature(item$46template._ViewFluidSidebarItem1, () => ({
    __proto__: dart.getFields(item$46template._ViewFluidSidebarItem1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  item$46template._ViewFluidSidebarItem2 = class _ViewFluidSidebarItem2 extends embedded_view.EmbeddedView$(dart.legacy(item.FluidSidebarItem)) {
    build() {
      this.initRootNodesAndSubscriptions(ListLOfObjectL().as(this.projectedNodes[$_get](0)), null);
    }
  };
  (item$46template._ViewFluidSidebarItem2.new = function(parentView, parentIndex) {
    item$46template._ViewFluidSidebarItem2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewFluidSidebarItem2.prototype;
  dart.addTypeTests(item$46template._ViewFluidSidebarItem2);
  dart.addTypeCaches(item$46template._ViewFluidSidebarItem2);
  dart.setMethodSignature(item$46template._ViewFluidSidebarItem2, () => ({
    __proto__: dart.getMethods(item$46template._ViewFluidSidebarItem2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template._ViewFluidSidebarItem2, L0);
  item$46template._ViewFluidSidebarItemHost0 = class _ViewFluidSidebarItemHost0 extends host_view.HostView$(dart.legacy(item.FluidSidebarItem)) {
    build() {
      this.componentView = new item$46template.ViewFluidSidebarItem0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new item.FluidSidebarItem.new();
      this.initRootNode(_el_0);
    }
  };
  (item$46template._ViewFluidSidebarItemHost0.new = function() {
    item$46template._ViewFluidSidebarItemHost0.__proto__.new.call(this);
    ;
  }).prototype = item$46template._ViewFluidSidebarItemHost0.prototype;
  dart.addTypeTests(item$46template._ViewFluidSidebarItemHost0);
  dart.addTypeCaches(item$46template._ViewFluidSidebarItemHost0);
  dart.setMethodSignature(item$46template._ViewFluidSidebarItemHost0, () => ({
    __proto__: dart.getMethods(item$46template._ViewFluidSidebarItemHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template._ViewFluidSidebarItemHost0, L0);
  var C4;
  item$46template.createFluidSidebarItemFactory = function createFluidSidebarItemFactory() {
    return new (ComponentFactoryOfFluidSidebarItemL()).new("fluid-sidebar-item", C4 || CT.C4);
  };
  item$46template.viewFactory_FluidSidebarItem1 = function viewFactory_FluidSidebarItem1(parentView, parentIndex) {
    return new item$46template._ViewFluidSidebarItem1.new(parentView, parentIndex);
  };
  item$46template.viewFactory_FluidSidebarItem2 = function viewFactory_FluidSidebarItem2(parentView, parentIndex) {
    return new item$46template._ViewFluidSidebarItem2.new(parentView, parentIndex);
  };
  item$46template.viewFactory_FluidSidebarItemHost0 = function viewFactory_FluidSidebarItemHost0() {
    return new item$46template._ViewFluidSidebarItemHost0.new();
  };
  item$46template.initReflector = function initReflector() {
    if (dart.test(item$46template._visited)) {
      return;
    }
    item$46template._visited = true;
  };
  dart.copyProperties(item$46template, {
    get FluidSidebarItemNgFactory() {
      return item$46template._FluidSidebarItemNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(item$46template, {
    /*item$46template.styles$FluidSidebarItem*/get styles$FluidSidebarItem() {
      return [item$46css$46shim.styles];
    },
    /*item$46template._FluidSidebarItemNgFactory*/get _FluidSidebarItemNgFactory() {
      return C5 || CT.C5;
    },
    /*item$46template.styles$FluidSidebarItemHost*/get styles$FluidSidebarItemHost() {
      return C3 || CT.C3;
    },
    /*item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/sidebar/sidebar-item/item.template", {
    "package:fluix_web/fluix/sidebar/sidebar-item/item.template.dart": item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["item.template.dart"],"names":[],"mappings":"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","file":"item.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__sidebar__sidebar_item__item$46template: item$46template
  };
}));

//# sourceMappingURL=item.template.unsound.ddc.js.map
