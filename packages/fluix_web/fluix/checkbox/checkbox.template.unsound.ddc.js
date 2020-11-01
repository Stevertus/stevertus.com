define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/checkbox/checkbox', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/checkbox/checkbox.css.shim'], (function load__packages__fluix_web__fluix__checkbox__checkbox_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__checkbox__checkbox, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__checkbox__checkbox$46css$46shim) {
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
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const checkbox = packages__fluix_web__fluix__checkbox__checkbox.fluix__checkbox__checkbox;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const checkbox$46css$46shim = packages__fluix_web__fluix__checkbox__checkbox$46css$46shim.fluix__checkbox__checkbox$46css$46shim;
  var checkbox$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FluidCheckboxL = () => (FluidCheckboxL = dart.constFn(dart.legacy(checkbox.FluidCheckbox)))();
  var ComponentFactoryOfFluidCheckboxL = () => (ComponentFactoryOfFluidCheckboxL = dart.constFn(component_factory.ComponentFactory$(FluidCheckboxL())))();
  var HostViewOfFluidCheckboxL = () => (HostViewOfFluidCheckboxL = dart.constFn(host_view.HostView$(FluidCheckboxL())))();
  var HostViewLOfFluidCheckboxL = () => (HostViewLOfFluidCheckboxL = dart.constFn(dart.legacy(HostViewOfFluidCheckboxL())))();
  var VoidToHostViewLOfFluidCheckboxL = () => (VoidToHostViewLOfFluidCheckboxL = dart.constFn(dart.fnType(HostViewLOfFluidCheckboxL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/checkbox/checkbox.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(checkbox$46template.viewFactory_FluidCheckbox1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(checkbox$46template.viewFactory_FluidCheckbox2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(checkbox$46template.viewFactory_FluidCheckbox3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(checkbox$46template.ViewFluidCheckbox0._debugClearComponentStyles, VoidTovoid());
    },
    get C4() {
      return C4 = dart.fn(checkbox$46template.viewFactory_FluidCheckboxHost0, VoidToHostViewLOfFluidCheckboxL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfFluidCheckboxL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "fluid-checkbox"
      });
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(checkbox$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(checkbox$46template, "_NgIf_0_9");
  var _appEl_1 = dart.privateName(checkbox$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(checkbox$46template, "_NgIf_1_9");
  var _appEl_2 = dart.privateName(checkbox$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(checkbox$46template, "_NgIf_2_9");
  var C0;
  var C1;
  var C2;
  var C3;
  checkbox$46template.ViewFluidCheckbox0 = class ViewFluidCheckbox0 extends component_view.ComponentView$(dart.legacy(checkbox.FluidCheckbox)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/checkbox/checkbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C2 || CT.C2);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      parentRenderNode[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'onClick')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = boolL().as(_ctx.value);
      this[_NgIf_1_9].ngIf = !dart.dtest(_ctx.value);
      this[_NgIf_2_9].ngIf = _ctx.label != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      checkbox$46template.ViewFluidCheckbox0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = checkbox$46template.ViewFluidCheckbox0._componentStyles;
      if (styles == null) {
        checkbox$46template.ViewFluidCheckbox0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(checkbox$46template.styles$FluidCheckbox, checkbox$46template.ViewFluidCheckbox0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C3 || CT.C3);
        }
      }
      this.componentStyles = styles;
    }
  };
  (checkbox$46template.ViewFluidCheckbox0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    checkbox$46template.ViewFluidCheckbox0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-checkbox"));
  }).prototype = checkbox$46template.ViewFluidCheckbox0.prototype;
  dart.addTypeTests(checkbox$46template.ViewFluidCheckbox0);
  dart.addTypeCaches(checkbox$46template.ViewFluidCheckbox0);
  dart.setMethodSignature(checkbox$46template.ViewFluidCheckbox0, () => ({
    __proto__: dart.getMethods(checkbox$46template.ViewFluidCheckbox0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(checkbox$46template.ViewFluidCheckbox0, L0);
  dart.setFieldSignature(checkbox$46template.ViewFluidCheckbox0, () => ({
    __proto__: dart.getFields(checkbox$46template.ViewFluidCheckbox0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(checkbox$46template.ViewFluidCheckbox0, {
    /*checkbox$46template.ViewFluidCheckbox0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(checkbox$46template, "_compView_0");
  var _FluidIcon_0_5 = dart.privateName(checkbox$46template, "_FluidIcon_0_5");
  checkbox$46template._ViewFluidCheckbox1 = class _ViewFluidCheckbox1 extends embedded_view.EmbeddedView$(dart.legacy(checkbox.FluidCheckbox)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "filled");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      let _text_1 = dom_helpers.createText("checkboxFilled");
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_1])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (checkbox$46template._ViewFluidCheckbox1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    checkbox$46template._ViewFluidCheckbox1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = checkbox$46template._ViewFluidCheckbox1.prototype;
  dart.addTypeTests(checkbox$46template._ViewFluidCheckbox1);
  dart.addTypeCaches(checkbox$46template._ViewFluidCheckbox1);
  dart.setMethodSignature(checkbox$46template._ViewFluidCheckbox1, () => ({
    __proto__: dart.getMethods(checkbox$46template._ViewFluidCheckbox1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(checkbox$46template._ViewFluidCheckbox1, L0);
  dart.setFieldSignature(checkbox$46template._ViewFluidCheckbox1, () => ({
    __proto__: dart.getFields(checkbox$46template._ViewFluidCheckbox1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  checkbox$46template._ViewFluidCheckbox2 = class _ViewFluidCheckbox2 extends embedded_view.EmbeddedView$(dart.legacy(checkbox.FluidCheckbox)) {
    build() {
      this[_compView_0] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      this.updateChildClassNonHtml(_el_0, "empty");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      let _text_1 = dom_helpers.createText("checkboxEmpty");
      this[_compView_0].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_1])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (checkbox$46template._ViewFluidCheckbox2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidIcon_0_5] = null;
    checkbox$46template._ViewFluidCheckbox2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = checkbox$46template._ViewFluidCheckbox2.prototype;
  dart.addTypeTests(checkbox$46template._ViewFluidCheckbox2);
  dart.addTypeCaches(checkbox$46template._ViewFluidCheckbox2);
  dart.setMethodSignature(checkbox$46template._ViewFluidCheckbox2, () => ({
    __proto__: dart.getMethods(checkbox$46template._ViewFluidCheckbox2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(checkbox$46template._ViewFluidCheckbox2, L0);
  dart.setFieldSignature(checkbox$46template._ViewFluidCheckbox2, () => ({
    __proto__: dart.getFields(checkbox$46template._ViewFluidCheckbox2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _textBinding_1 = dart.privateName(checkbox$46template, "_textBinding_1");
  checkbox$46template._ViewFluidCheckbox3 = class _ViewFluidCheckbox3 extends embedded_view.EmbeddedView$(dart.legacy(checkbox.FluidCheckbox)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.label));
    }
  };
  (checkbox$46template._ViewFluidCheckbox3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    checkbox$46template._ViewFluidCheckbox3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = checkbox$46template._ViewFluidCheckbox3.prototype;
  dart.addTypeTests(checkbox$46template._ViewFluidCheckbox3);
  dart.addTypeCaches(checkbox$46template._ViewFluidCheckbox3);
  dart.setMethodSignature(checkbox$46template._ViewFluidCheckbox3, () => ({
    __proto__: dart.getMethods(checkbox$46template._ViewFluidCheckbox3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(checkbox$46template._ViewFluidCheckbox3, L0);
  dart.setFieldSignature(checkbox$46template._ViewFluidCheckbox3, () => ({
    __proto__: dart.getFields(checkbox$46template._ViewFluidCheckbox3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  checkbox$46template._ViewFluidCheckboxHost0 = class _ViewFluidCheckboxHost0 extends host_view.HostView$(dart.legacy(checkbox.FluidCheckbox)) {
    build() {
      this.componentView = new checkbox$46template.ViewFluidCheckbox0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new checkbox.FluidCheckbox.new();
      this.initRootNode(_el_0);
    }
  };
  (checkbox$46template._ViewFluidCheckboxHost0.new = function() {
    checkbox$46template._ViewFluidCheckboxHost0.__proto__.new.call(this);
    ;
  }).prototype = checkbox$46template._ViewFluidCheckboxHost0.prototype;
  dart.addTypeTests(checkbox$46template._ViewFluidCheckboxHost0);
  dart.addTypeCaches(checkbox$46template._ViewFluidCheckboxHost0);
  dart.setMethodSignature(checkbox$46template._ViewFluidCheckboxHost0, () => ({
    __proto__: dart.getMethods(checkbox$46template._ViewFluidCheckboxHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(checkbox$46template._ViewFluidCheckboxHost0, L0);
  var C4;
  checkbox$46template.createFluidCheckboxFactory = function createFluidCheckboxFactory() {
    return new (ComponentFactoryOfFluidCheckboxL()).new("fluid-checkbox", C4 || CT.C4);
  };
  checkbox$46template.viewFactory_FluidCheckbox1 = function viewFactory_FluidCheckbox1(parentView, parentIndex) {
    return new checkbox$46template._ViewFluidCheckbox1.new(parentView, parentIndex);
  };
  checkbox$46template.viewFactory_FluidCheckbox2 = function viewFactory_FluidCheckbox2(parentView, parentIndex) {
    return new checkbox$46template._ViewFluidCheckbox2.new(parentView, parentIndex);
  };
  checkbox$46template.viewFactory_FluidCheckbox3 = function viewFactory_FluidCheckbox3(parentView, parentIndex) {
    return new checkbox$46template._ViewFluidCheckbox3.new(parentView, parentIndex);
  };
  checkbox$46template.viewFactory_FluidCheckboxHost0 = function viewFactory_FluidCheckboxHost0() {
    return new checkbox$46template._ViewFluidCheckboxHost0.new();
  };
  checkbox$46template.initReflector = function initReflector() {
    if (dart.test(checkbox$46template._visited)) {
      return;
    }
    checkbox$46template._visited = true;
  };
  dart.copyProperties(checkbox$46template, {
    get FluidCheckboxNgFactory() {
      return checkbox$46template._FluidCheckboxNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  var C6;
  dart.defineLazy(checkbox$46template, {
    /*checkbox$46template.styles$FluidCheckbox*/get styles$FluidCheckbox() {
      return [checkbox$46css$46shim.styles];
    },
    /*checkbox$46template._FluidCheckboxNgFactory*/get _FluidCheckboxNgFactory() {
      return C5 || CT.C5;
    },
    /*checkbox$46template.styles$FluidCheckboxHost*/get styles$FluidCheckboxHost() {
      return C6 || CT.C6;
    },
    /*checkbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/checkbox/checkbox.template", {
    "package:fluix_web/fluix/checkbox/checkbox.template.dart": checkbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["checkbox.template.dart"],"names":[],"mappings":"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","file":"checkbox.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__checkbox__checkbox$46template: checkbox$46template
  };
}));

//# sourceMappingURL=checkbox.template.unsound.ddc.js.map
