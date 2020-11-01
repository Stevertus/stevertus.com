define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/dropdown/dropdown', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/fluix_web/fluix/dropdown/dropdown.css.shim'], (function load__packages__fluix_web__fluix__dropdown__dropdown_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__dropdown__dropdown, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__fluix_web__fluix__dropdown__dropdown$46css$46shim) {
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
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dropdown = packages__fluix_web__fluix__dropdown__dropdown.fluix__dropdown__dropdown;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const dropdown$46css$46shim = packages__fluix_web__fluix__dropdown__dropdown$46css$46shim.fluix__dropdown__dropdown$46css$46shim;
  var dropdown$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FluidDropdownL = () => (FluidDropdownL = dart.constFn(dart.legacy(dropdown.FluidDropdown)))();
  var ComponentFactoryOfFluidDropdownL = () => (ComponentFactoryOfFluidDropdownL = dart.constFn(component_factory.ComponentFactory$(FluidDropdownL())))();
  var HostViewOfFluidDropdownL = () => (HostViewOfFluidDropdownL = dart.constFn(host_view.HostView$(FluidDropdownL())))();
  var HostViewLOfFluidDropdownL = () => (HostViewLOfFluidDropdownL = dart.constFn(dart.legacy(HostViewOfFluidDropdownL())))();
  var VoidToHostViewLOfFluidDropdownL = () => (VoidToHostViewLOfFluidDropdownL = dart.constFn(dart.fnType(HostViewLOfFluidDropdownL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/dropdown/dropdown.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dropdown$46template.viewFactory_FluidDropdown1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(dropdown$46template.viewFactory_FluidDropdown2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(dropdown$46template.viewFactory_FluidDropdown3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(dropdown$46template.ViewFluidDropdown0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.fn(dropdown$46template.viewFactory_FluidDropdown4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(dropdown$46template.viewFactory_FluidDropdownHost0, VoidToHostViewLOfFluidDropdownL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfFluidDropdownL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "fluid-dropdown"
      });
    }
  }, false);
  var _textBinding_3 = dart.privateName(dropdown$46template, "_textBinding_3");
  var _appEl_4 = dart.privateName(dropdown$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(dropdown$46template, "_NgIf_4_9");
  var _appEl_5 = dart.privateName(dropdown$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(dropdown$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(dropdown$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(dropdown$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(dropdown$46template, "_expr_0");
  var _expr_1 = dart.privateName(dropdown$46template, "_expr_1");
  var _expr_2 = dart.privateName(dropdown$46template, "_expr_2");
  var _el_0 = dart.privateName(dropdown$46template, "_el_0");
  var _el_1 = dart.privateName(dropdown$46template, "_el_1");
  var C0;
  var C1;
  var C2;
  var C3;
  dropdown$46template.ViewFluidDropdown0 = class ViewFluidDropdown0 extends component_view.ComponentView$(dart.legacy(dropdown.FluidDropdown)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/dropdown/dropdown.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "container");
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "dp_c");
      this.addShimC(this[_el_1]);
      let _el_2 = dom_helpers.appendSpan(doc, this[_el_1]);
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C0 || CT.C0);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C1 || CT.C1);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C2 || CT.C2);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_el_1][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'toggle')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.open);
      this[_NgIf_5_9].ngIf = _ctx.open;
      this[_NgIf_6_9].ngIf = _ctx.open;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.open;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "open", "package:fluix_web/fluix/dropdown/dropdown.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "opened", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.selected != null;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "selected != null", "package:fluix_web/fluix/dropdown/dropdown.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "selected", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "disabled", "package:fluix_web/fluix/dropdown/dropdown.html"))) {
        dom_helpers.updateClassBinding(this[_el_1], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.displayedText));
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      dropdown$46template.ViewFluidDropdown0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = dropdown$46template.ViewFluidDropdown0._componentStyles;
      if (styles == null) {
        dropdown$46template.ViewFluidDropdown0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(dropdown$46template.styles$FluidDropdown, dropdown$46template.ViewFluidDropdown0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (dropdown$46template.ViewFluidDropdown0.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    dropdown$46template.ViewFluidDropdown0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-dropdown"));
  }).prototype = dropdown$46template.ViewFluidDropdown0.prototype;
  dart.addTypeTests(dropdown$46template.ViewFluidDropdown0);
  dart.addTypeCaches(dropdown$46template.ViewFluidDropdown0);
  dart.setMethodSignature(dropdown$46template.ViewFluidDropdown0, () => ({
    __proto__: dart.getMethods(dropdown$46template.ViewFluidDropdown0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown$46template.ViewFluidDropdown0, L0);
  dart.setFieldSignature(dropdown$46template.ViewFluidDropdown0, () => ({
    __proto__: dart.getFields(dropdown$46template.ViewFluidDropdown0.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(dropdown$46template.ViewFluidDropdown0, {
    /*dropdown$46template.ViewFluidDropdown0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(dropdown$46template, "_compView_0");
  var _FluidIcon_0_5 = dart.privateName(dropdown$46template, "_FluidIcon_0_5");
  var C4;
  dropdown$46template._ViewFluidDropdown1 = class _ViewFluidDropdown1 extends embedded_view.EmbeddedView$(dart.legacy(dropdown.FluidDropdown)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "icon", "arrowDown");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C4 || CT.C4]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5].icon = "arrowDown";
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
  (dropdown$46template._ViewFluidDropdown1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    dropdown$46template._ViewFluidDropdown1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown$46template._ViewFluidDropdown1.prototype;
  dart.addTypeTests(dropdown$46template._ViewFluidDropdown1);
  dart.addTypeCaches(dropdown$46template._ViewFluidDropdown1);
  dart.setMethodSignature(dropdown$46template._ViewFluidDropdown1, () => ({
    __proto__: dart.getMethods(dropdown$46template._ViewFluidDropdown1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown$46template._ViewFluidDropdown1, L0);
  dart.setFieldSignature(dropdown$46template._ViewFluidDropdown1, () => ({
    __proto__: dart.getFields(dropdown$46template._ViewFluidDropdown1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  dropdown$46template._ViewFluidDropdown2 = class _ViewFluidDropdown2 extends embedded_view.EmbeddedView$(dart.legacy(dropdown.FluidDropdown)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "icon", "arrowTop");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C4 || CT.C4]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5].icon = "arrowTop";
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
  (dropdown$46template._ViewFluidDropdown2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    dropdown$46template._ViewFluidDropdown2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown$46template._ViewFluidDropdown2.prototype;
  dart.addTypeTests(dropdown$46template._ViewFluidDropdown2);
  dart.addTypeCaches(dropdown$46template._ViewFluidDropdown2);
  dart.setMethodSignature(dropdown$46template._ViewFluidDropdown2, () => ({
    __proto__: dart.getMethods(dropdown$46template._ViewFluidDropdown2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown$46template._ViewFluidDropdown2, L0);
  dart.setFieldSignature(dropdown$46template._ViewFluidDropdown2, () => ({
    __proto__: dart.getFields(dropdown$46template._ViewFluidDropdown2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _appEl_1 = dart.privateName(dropdown$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(dropdown$46template, "_NgFor_1_9");
  var C5;
  dropdown$46template._ViewFluidDropdown3 = class _ViewFluidDropdown3 extends embedded_view.EmbeddedView$(dart.legacy(dropdown.FluidDropdown)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C5 || CT.C5);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.values;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "values", "package:fluix_web/fluix/dropdown/dropdown.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (dropdown$46template._ViewFluidDropdown3.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    dropdown$46template._ViewFluidDropdown3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown$46template._ViewFluidDropdown3.prototype;
  dart.addTypeTests(dropdown$46template._ViewFluidDropdown3);
  dart.addTypeCaches(dropdown$46template._ViewFluidDropdown3);
  dart.setMethodSignature(dropdown$46template._ViewFluidDropdown3, () => ({
    __proto__: dart.getMethods(dropdown$46template._ViewFluidDropdown3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown$46template._ViewFluidDropdown3, L0);
  dart.setFieldSignature(dropdown$46template._ViewFluidDropdown3, () => ({
    __proto__: dart.getFields(dropdown$46template._ViewFluidDropdown3.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1 = dart.privateName(dropdown$46template, "_textBinding_1");
  var _handleEvent_0 = dart.privateName(dropdown$46template, "_handleEvent_0");
  dropdown$46template._ViewFluidDropdown4 = class _ViewFluidDropdown4 extends embedded_view.EmbeddedView$(dart.legacy(dropdown.FluidDropdown)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "dp_item");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      this.initRootNode(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let local_item = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.selected == local_i;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "selected == i", "package:fluix_web/fluix/dropdown/dropdown.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_item));
    }
    [_handleEvent_0]($36event) {
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.select(local_i);
    }
  };
  (dropdown$46template._ViewFluidDropdown4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    dropdown$46template._ViewFluidDropdown4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = dropdown$46template._ViewFluidDropdown4.prototype;
  dart.addTypeTests(dropdown$46template._ViewFluidDropdown4);
  dart.addTypeCaches(dropdown$46template._ViewFluidDropdown4);
  dart.setMethodSignature(dropdown$46template._ViewFluidDropdown4, () => ({
    __proto__: dart.getMethods(dropdown$46template._ViewFluidDropdown4.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(dropdown$46template._ViewFluidDropdown4, L0);
  dart.setFieldSignature(dropdown$46template._ViewFluidDropdown4, () => ({
    __proto__: dart.getFields(dropdown$46template._ViewFluidDropdown4.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dropdown$46template._ViewFluidDropdownHost0 = class _ViewFluidDropdownHost0 extends host_view.HostView$(dart.legacy(dropdown.FluidDropdown)) {
    build() {
      this.componentView = new dropdown$46template.ViewFluidDropdown0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new dropdown.FluidDropdown.new();
      this.initRootNode(_el_0);
    }
  };
  (dropdown$46template._ViewFluidDropdownHost0.new = function() {
    dropdown$46template._ViewFluidDropdownHost0.__proto__.new.call(this);
    ;
  }).prototype = dropdown$46template._ViewFluidDropdownHost0.prototype;
  dart.addTypeTests(dropdown$46template._ViewFluidDropdownHost0);
  dart.addTypeCaches(dropdown$46template._ViewFluidDropdownHost0);
  dart.setMethodSignature(dropdown$46template._ViewFluidDropdownHost0, () => ({
    __proto__: dart.getMethods(dropdown$46template._ViewFluidDropdownHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dropdown$46template._ViewFluidDropdownHost0, L0);
  var C6;
  dropdown$46template.createFluidDropdownFactory = function createFluidDropdownFactory() {
    return new (ComponentFactoryOfFluidDropdownL()).new("fluid-dropdown", C6 || CT.C6);
  };
  dropdown$46template.viewFactory_FluidDropdown1 = function viewFactory_FluidDropdown1(parentView, parentIndex) {
    return new dropdown$46template._ViewFluidDropdown1.new(parentView, parentIndex);
  };
  dropdown$46template.viewFactory_FluidDropdown2 = function viewFactory_FluidDropdown2(parentView, parentIndex) {
    return new dropdown$46template._ViewFluidDropdown2.new(parentView, parentIndex);
  };
  dropdown$46template.viewFactory_FluidDropdown3 = function viewFactory_FluidDropdown3(parentView, parentIndex) {
    return new dropdown$46template._ViewFluidDropdown3.new(parentView, parentIndex);
  };
  dropdown$46template.viewFactory_FluidDropdown4 = function viewFactory_FluidDropdown4(parentView, parentIndex) {
    return new dropdown$46template._ViewFluidDropdown4.new(parentView, parentIndex);
  };
  dropdown$46template.viewFactory_FluidDropdownHost0 = function viewFactory_FluidDropdownHost0() {
    return new dropdown$46template._ViewFluidDropdownHost0.new();
  };
  dropdown$46template.initReflector = function initReflector() {
    if (dart.test(dropdown$46template._visited)) {
      return;
    }
    dropdown$46template._visited = true;
  };
  dart.copyProperties(dropdown$46template, {
    get FluidDropdownNgFactory() {
      return dropdown$46template._FluidDropdownNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C7;
  dart.defineLazy(dropdown$46template, {
    /*dropdown$46template.styles$FluidDropdown*/get styles$FluidDropdown() {
      return [dropdown$46css$46shim.styles];
    },
    /*dropdown$46template._FluidDropdownNgFactory*/get _FluidDropdownNgFactory() {
      return C7 || CT.C7;
    },
    /*dropdown$46template.styles$FluidDropdownHost*/get styles$FluidDropdownHost() {
      return C4 || CT.C4;
    },
    /*dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/dropdown/dropdown.template", {
    "package:fluix_web/fluix/dropdown/dropdown.template.dart": dropdown$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown.template.dart"],"names":[],"mappings":"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","file":"dropdown.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__dropdown__dropdown$46template: dropdown$46template
  };
}));

//# sourceMappingURL=dropdown.template.unsound.ddc.js.map
