define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/sidebar/sidebar-item/item.template', 'packages/fluix_web/fluix/sidebar/sidebar-item/item', 'packages/fluix_web/fluix/sidebar/sidebar', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/fluix_web/fluix/sidebar/sidebar.css.shim'], (function load__packages__fluix_web__fluix__sidebar__sidebar_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__sidebar__sidebar_item__item$46template, packages__fluix_web__fluix__sidebar__sidebar_item__item, packages__fluix_web__fluix__sidebar__sidebar, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__fluix_web__fluix__sidebar__sidebar$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const item$46template = packages__fluix_web__fluix__sidebar__sidebar_item__item$46template.fluix__sidebar__sidebar_item__item$46template;
  const item = packages__fluix_web__fluix__sidebar__sidebar_item__item.fluix__sidebar__sidebar_item__item;
  const sidebar = packages__fluix_web__fluix__sidebar__sidebar.fluix__sidebar__sidebar;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const sidebar$46css$46shim = packages__fluix_web__fluix__sidebar__sidebar$46css$46shim.fluix__sidebar__sidebar$46css$46shim;
  var sidebar$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var FluidSidebarItemL = () => (FluidSidebarItemL = dart.constFn(dart.legacy(item.FluidSidebarItem)))();
  var JSArrayOfFluidSidebarItemL = () => (JSArrayOfFluidSidebarItemL = dart.constFn(_interceptors.JSArray$(FluidSidebarItemL())))();
  var FluidSidebarL = () => (FluidSidebarL = dart.constFn(dart.legacy(sidebar.FluidSidebar)))();
  var ComponentFactoryOfFluidSidebarL = () => (ComponentFactoryOfFluidSidebarL = dart.constFn(component_factory.ComponentFactory$(FluidSidebarL())))();
  var HostViewOfFluidSidebarL = () => (HostViewOfFluidSidebarL = dart.constFn(host_view.HostView$(FluidSidebarL())))();
  var HostViewLOfFluidSidebarL = () => (HostViewLOfFluidSidebarL = dart.constFn(dart.legacy(HostViewOfFluidSidebarL())))();
  var VoidToHostViewLOfFluidSidebarL = () => (VoidToHostViewLOfFluidSidebarL = dart.constFn(dart.fnType(HostViewLOfFluidSidebarL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/sidebar/sidebar.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(sidebar$46template.viewFactory_FluidSidebar1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(sidebar$46template.viewFactory_FluidSidebar2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(sidebar$46template.ViewFluidSidebar0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(sidebar$46template.viewFactory_FluidSidebarHost0, VoidToHostViewLOfFluidSidebarL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfFluidSidebarL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "fluid-sidebar"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(sidebar$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(sidebar$46template, "_NgIf_0_9");
  var _NgClass_1_5 = dart.privateName(sidebar$46template, "_NgClass_1_5");
  var _compView_4 = dart.privateName(sidebar$46template, "_compView_4");
  var _FluidSidebarItem_4_5 = dart.privateName(sidebar$46template, "_FluidSidebarItem_4_5");
  var _appEl_5 = dart.privateName(sidebar$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(sidebar$46template, "_NgIf_5_9");
  var _expr_0 = dart.privateName(sidebar$46template, "_expr_0");
  var C0;
  var C1;
  var C2;
  var C3;
  sidebar$46template.ViewFluidSidebar0 = class ViewFluidSidebar0 extends component_view.ComponentView$(dart.legacy(sidebar.FluidSidebar)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/sidebar/sidebar.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_1);
      this[_NgClass_1_5] = new ng_class.NgClass.new(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "container");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "scrollable");
      this.addShimC(_el_3);
      this.project(_el_3, 0);
      this[_compView_4] = new item$46template.ViewFluidSidebarItem0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      _el_3[$append](_el_4);
      this.addShimC(_el_4);
      this[_FluidSidebarItem_4_5] = new item.FluidSidebarItem.new();
      this[_compView_4].createAndProject(this[_FluidSidebarItem_4_5], JSArrayOfObjectL().of([C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 2, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C2 || CT.C2);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.fixed;
      let currVal_0 = dart.test(_ctx.expandable) ? dart.test(_ctx.expanded) ? "expand expanded" : "shrink" : "";
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "expandable ? (expanded ? 'expand expanded' : 'shrink') : ''", "package:fluix_web/fluix/sidebar/sidebar.html"))) {
        this[_NgClass_1_5].rawClass = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_1_5].ngDoCheck();
      }
      this[_NgIf_5_9].ngIf = _ctx.expandable;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_NgClass_1_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      sidebar$46template.ViewFluidSidebar0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = sidebar$46template.ViewFluidSidebar0._componentStyles;
      if (styles == null) {
        sidebar$46template.ViewFluidSidebar0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(sidebar$46template.styles$FluidSidebar, sidebar$46template.ViewFluidSidebar0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (sidebar$46template.ViewFluidSidebar0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_NgClass_1_5] = null;
    this[_compView_4] = null;
    this[_FluidSidebarItem_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    sidebar$46template.ViewFluidSidebar0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-sidebar"));
  }).prototype = sidebar$46template.ViewFluidSidebar0.prototype;
  dart.addTypeTests(sidebar$46template.ViewFluidSidebar0);
  dart.addTypeCaches(sidebar$46template.ViewFluidSidebar0);
  dart.setMethodSignature(sidebar$46template.ViewFluidSidebar0, () => ({
    __proto__: dart.getMethods(sidebar$46template.ViewFluidSidebar0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template.ViewFluidSidebar0, L0);
  dart.setFieldSignature(sidebar$46template.ViewFluidSidebar0, () => ({
    __proto__: dart.getFields(sidebar$46template.ViewFluidSidebar0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_NgClass_1_5]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_compView_4]: dart.fieldType(dart.legacy(item$46template.ViewFluidSidebarItem0)),
    [_FluidSidebarItem_4_5]: dart.fieldType(dart.legacy(item.FluidSidebarItem)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(sidebar$46template.ViewFluidSidebar0, {
    /*sidebar$46template.ViewFluidSidebar0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  sidebar$46template._ViewFluidSidebar1 = class _ViewFluidSidebar1 extends embedded_view.EmbeddedView$(dart.legacy(sidebar.FluidSidebar)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "bar-spacer");
      this.addShimC(HtmlElementL().as(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (sidebar$46template._ViewFluidSidebar1.new = function(parentView, parentIndex) {
    sidebar$46template._ViewFluidSidebar1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = sidebar$46template._ViewFluidSidebar1.prototype;
  dart.addTypeTests(sidebar$46template._ViewFluidSidebar1);
  dart.addTypeCaches(sidebar$46template._ViewFluidSidebar1);
  dart.setMethodSignature(sidebar$46template._ViewFluidSidebar1, () => ({
    __proto__: dart.getMethods(sidebar$46template._ViewFluidSidebar1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template._ViewFluidSidebar1, L0);
  var _compView_1 = dart.privateName(sidebar$46template, "_compView_1");
  var _FluidIcon_1_5 = dart.privateName(sidebar$46template, "_FluidIcon_1_5");
  sidebar$46template._ViewFluidSidebar2 = class _ViewFluidSidebar2 extends embedded_view.EmbeddedView$(dart.legacy(sidebar.FluidSidebar)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "expand");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new icon$46template.ViewFluidIcon0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_FluidIcon_1_5] = new icon.FluidIcon.new(_el_1);
      let _text_2 = dom_helpers.createText("listView");
      this[_compView_1].createAndProject(this[_FluidIcon_1_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_2])]));
      _el_0[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleToggleExpand')));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (sidebar$46template._ViewFluidSidebar2.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FluidIcon_1_5] = null;
    sidebar$46template._ViewFluidSidebar2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = sidebar$46template._ViewFluidSidebar2.prototype;
  dart.addTypeTests(sidebar$46template._ViewFluidSidebar2);
  dart.addTypeCaches(sidebar$46template._ViewFluidSidebar2);
  dart.setMethodSignature(sidebar$46template._ViewFluidSidebar2, () => ({
    __proto__: dart.getMethods(sidebar$46template._ViewFluidSidebar2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template._ViewFluidSidebar2, L0);
  dart.setFieldSignature(sidebar$46template._ViewFluidSidebar2, () => ({
    __proto__: dart.getFields(sidebar$46template._ViewFluidSidebar2.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_1_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  sidebar$46template._ViewFluidSidebarHost0 = class _ViewFluidSidebarHost0 extends host_view.HostView$(dart.legacy(sidebar.FluidSidebar)) {
    build() {
      this.componentView = new sidebar$46template.ViewFluidSidebar0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new sidebar.FluidSidebar.new();
      this.component.children = JSArrayOfFluidSidebarItemL().of([]);
      this.initRootNode(_el_0);
    }
  };
  (sidebar$46template._ViewFluidSidebarHost0.new = function() {
    sidebar$46template._ViewFluidSidebarHost0.__proto__.new.call(this);
    ;
  }).prototype = sidebar$46template._ViewFluidSidebarHost0.prototype;
  dart.addTypeTests(sidebar$46template._ViewFluidSidebarHost0);
  dart.addTypeCaches(sidebar$46template._ViewFluidSidebarHost0);
  dart.setMethodSignature(sidebar$46template._ViewFluidSidebarHost0, () => ({
    __proto__: dart.getMethods(sidebar$46template._ViewFluidSidebarHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template._ViewFluidSidebarHost0, L0);
  var C4;
  sidebar$46template.createFluidSidebarFactory = function createFluidSidebarFactory() {
    return new (ComponentFactoryOfFluidSidebarL()).new("fluid-sidebar", C4 || CT.C4);
  };
  sidebar$46template.viewFactory_FluidSidebar1 = function viewFactory_FluidSidebar1(parentView, parentIndex) {
    return new sidebar$46template._ViewFluidSidebar1.new(parentView, parentIndex);
  };
  sidebar$46template.viewFactory_FluidSidebar2 = function viewFactory_FluidSidebar2(parentView, parentIndex) {
    return new sidebar$46template._ViewFluidSidebar2.new(parentView, parentIndex);
  };
  sidebar$46template.viewFactory_FluidSidebarHost0 = function viewFactory_FluidSidebarHost0() {
    return new sidebar$46template._ViewFluidSidebarHost0.new();
  };
  sidebar$46template.initReflector = function initReflector() {
    if (dart.test(sidebar$46template._visited)) {
      return;
    }
    sidebar$46template._visited = true;
  };
  dart.copyProperties(sidebar$46template, {
    get FluidSidebarNgFactory() {
      return sidebar$46template._FluidSidebarNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(sidebar$46template, {
    /*sidebar$46template.styles$FluidSidebar*/get styles$FluidSidebar() {
      return [sidebar$46css$46shim.styles];
    },
    /*sidebar$46template._FluidSidebarNgFactory*/get _FluidSidebarNgFactory() {
      return C5 || CT.C5;
    },
    /*sidebar$46template.styles$FluidSidebarHost*/get styles$FluidSidebarHost() {
      return C1 || CT.C1;
    },
    /*sidebar$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/sidebar/sidebar.template", {
    "package:fluix_web/fluix/sidebar/sidebar.template.dart": sidebar$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sidebar.template.dart"],"names":[],"mappings":"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","file":"sidebar.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__sidebar__sidebar$46template: sidebar$46template
  };
}));

//# sourceMappingURL=sidebar.template.unsound.ddc.js.map
