define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/list/list-item/list-item', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/fluix_web/fluix/list/list-item/list-item.css.shim'], (function load__packages__fluix_web__fluix__list__list_item__list_item_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__list__list_item__list_item, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__fluix_web__fluix__list__list_item__list_item$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
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
  const list_item = packages__fluix_web__fluix__list__list_item__list_item.fluix__list__list_item__list_item;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const list_item$46css$46shim = packages__fluix_web__fluix__list__list_item__list_item$46css$46shim.fluix__list__list_item__list_item$46css$46shim;
  var list_item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FluidListItemL = () => (FluidListItemL = dart.constFn(dart.legacy(list_item.FluidListItem)))();
  var ComponentFactoryOfFluidListItemL = () => (ComponentFactoryOfFluidListItemL = dart.constFn(component_factory.ComponentFactory$(FluidListItemL())))();
  var HostViewOfFluidListItemL = () => (HostViewOfFluidListItemL = dart.constFn(host_view.HostView$(FluidListItemL())))();
  var HostViewLOfFluidListItemL = () => (HostViewLOfFluidListItemL = dart.constFn(dart.legacy(HostViewOfFluidListItemL())))();
  var VoidToHostViewLOfFluidListItemL = () => (VoidToHostViewLOfFluidListItemL = dart.constFn(dart.fnType(HostViewLOfFluidListItemL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/list/list-item/list-item.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(list_item$46template.viewFactory_FluidListItem1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(list_item$46template.ViewFluidListItem0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(list_item$46template.viewFactory_FluidListItemHost0, VoidToHostViewLOfFluidListItemL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfFluidListItemL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "fluid-list-item"
      });
    }
  }, false);
  var _NgClass_0_5 = dart.privateName(list_item$46template, "_NgClass_0_5");
  var _appEl_3 = dart.privateName(list_item$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(list_item$46template, "_NgIf_3_9");
  var _expr_1 = dart.privateName(list_item$46template, "_expr_1");
  var C0;
  var C1;
  list_item$46template.ViewFluidListItem0 = class ViewFluidListItem0 extends component_view.ComponentView$(dart.legacy(list_item.FluidListItem)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/list/list-item/list-item.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "fluid-item");
      this.addShimC(_el_0);
      this[_NgClass_0_5] = new ng_class.NgClass.new(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "leading");
      this.addShimC(_el_2);
      this.project(_el_2, 0);
      let _anchor_3 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C0 || CT.C0);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.project(_el_1, 1);
      this.project(_el_0, 2);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_NgClass_0_5].initialClasses = "fluid-item";
      }
      let currVal_1 = _ctx.cssClasses;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "cssClasses", "package:fluix_web/fluix/list/list-item/list-item.html"))) {
        this[_NgClass_0_5].rawClass = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_0_5].ngDoCheck();
      }
      this[_NgIf_3_9].ngIf = _ctx.icon != null;
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_NgClass_0_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      list_item$46template.ViewFluidListItem0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = list_item$46template.ViewFluidListItem0._componentStyles;
      if (styles == null) {
        list_item$46template.ViewFluidListItem0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(list_item$46template.styles$FluidListItem, list_item$46template.ViewFluidListItem0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (list_item$46template.ViewFluidListItem0.new = function(parentView, parentIndex) {
    this[_NgClass_0_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_1] = null;
    list_item$46template.ViewFluidListItem0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-list-item"));
  }).prototype = list_item$46template.ViewFluidListItem0.prototype;
  dart.addTypeTests(list_item$46template.ViewFluidListItem0);
  dart.addTypeCaches(list_item$46template.ViewFluidListItem0);
  dart.setMethodSignature(list_item$46template.ViewFluidListItem0, () => ({
    __proto__: dart.getMethods(list_item$46template.ViewFluidListItem0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(list_item$46template.ViewFluidListItem0, L0);
  dart.setFieldSignature(list_item$46template.ViewFluidListItem0, () => ({
    __proto__: dart.getFields(list_item$46template.ViewFluidListItem0.__proto__),
    [_NgClass_0_5]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(list_item$46template.ViewFluidListItem0, {
    /*list_item$46template.ViewFluidListItem0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(list_item$46template, "_compView_0");
  var _FluidIcon_0_5 = dart.privateName(list_item$46template, "_FluidIcon_0_5");
  var _expr_0 = dart.privateName(list_item$46template, "_expr_0");
  var C2;
  list_item$46template._ViewFluidListItem1 = class _ViewFluidListItem1 extends embedded_view.EmbeddedView$(dart.legacy(list_item.FluidListItem)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C2 || CT.C2]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let currVal_0 = _ctx.icon;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "icon", "package:fluix_web/fluix/list/list-item/list-item.html"))) {
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
  (list_item$46template._ViewFluidListItem1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    this[_expr_0] = null;
    list_item$46template._ViewFluidListItem1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = list_item$46template._ViewFluidListItem1.prototype;
  dart.addTypeTests(list_item$46template._ViewFluidListItem1);
  dart.addTypeCaches(list_item$46template._ViewFluidListItem1);
  dart.setMethodSignature(list_item$46template._ViewFluidListItem1, () => ({
    __proto__: dart.getMethods(list_item$46template._ViewFluidListItem1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(list_item$46template._ViewFluidListItem1, L0);
  dart.setFieldSignature(list_item$46template._ViewFluidListItem1, () => ({
    __proto__: dart.getFields(list_item$46template._ViewFluidListItem1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  list_item$46template._ViewFluidListItemHost0 = class _ViewFluidListItemHost0 extends host_view.HostView$(dart.legacy(list_item.FluidListItem)) {
    build() {
      this.componentView = new list_item$46template.ViewFluidListItem0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new list_item.FluidListItem.new();
      this.initRootNode(_el_0);
    }
  };
  (list_item$46template._ViewFluidListItemHost0.new = function() {
    list_item$46template._ViewFluidListItemHost0.__proto__.new.call(this);
    ;
  }).prototype = list_item$46template._ViewFluidListItemHost0.prototype;
  dart.addTypeTests(list_item$46template._ViewFluidListItemHost0);
  dart.addTypeCaches(list_item$46template._ViewFluidListItemHost0);
  dart.setMethodSignature(list_item$46template._ViewFluidListItemHost0, () => ({
    __proto__: dart.getMethods(list_item$46template._ViewFluidListItemHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(list_item$46template._ViewFluidListItemHost0, L0);
  var C3;
  list_item$46template.createFluidListItemFactory = function createFluidListItemFactory() {
    return new (ComponentFactoryOfFluidListItemL()).new("fluid-list-item", C3 || CT.C3);
  };
  list_item$46template.viewFactory_FluidListItem1 = function viewFactory_FluidListItem1(parentView, parentIndex) {
    return new list_item$46template._ViewFluidListItem1.new(parentView, parentIndex);
  };
  list_item$46template.viewFactory_FluidListItemHost0 = function viewFactory_FluidListItemHost0() {
    return new list_item$46template._ViewFluidListItemHost0.new();
  };
  list_item$46template.initReflector = function initReflector() {
    if (dart.test(list_item$46template._visited)) {
      return;
    }
    list_item$46template._visited = true;
  };
  dart.copyProperties(list_item$46template, {
    get FluidListItemNgFactory() {
      return list_item$46template._FluidListItemNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  dart.defineLazy(list_item$46template, {
    /*list_item$46template.styles$FluidListItem*/get styles$FluidListItem() {
      return [list_item$46css$46shim.styles];
    },
    /*list_item$46template._FluidListItemNgFactory*/get _FluidListItemNgFactory() {
      return C4 || CT.C4;
    },
    /*list_item$46template.styles$FluidListItemHost*/get styles$FluidListItemHost() {
      return C2 || CT.C2;
    },
    /*list_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/list/list-item/list-item.template", {
    "package:fluix_web/fluix/list/list-item/list-item.template.dart": list_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list-item.template.dart"],"names":[],"mappings":"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","file":"list-item.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__list__list_item__list_item$46template: list_item$46template
  };
}));

//# sourceMappingURL=list-item.template.unsound.ddc.js.map
