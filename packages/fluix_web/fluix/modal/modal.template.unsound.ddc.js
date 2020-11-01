define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/modal/modal', 'packages/angular/src/runtime/text_binding', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/modal/modal.css.shim'], (function load__packages__fluix_web__fluix__modal__modal_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__modal__modal, packages__angular__src__runtime__text_binding, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__modal__modal$46css$46shim) {
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
  const modal = packages__fluix_web__fluix__modal__modal.fluix__modal__modal;
  const modal_service = packages__fluix_web__fluix__modal__modal.fluix__modal__modal_service;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const modal$46css$46shim = packages__fluix_web__fluix__modal__modal$46css$46shim.fluix__modal__modal$46css$46shim;
  var modal$46template = Object.create(dart.library);
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
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var ModalServiceL = () => (ModalServiceL = dart.constFn(dart.legacy(modal_service.ModalService)))();
  var FluidModalL = () => (FluidModalL = dart.constFn(dart.legacy(modal.FluidModal)))();
  var ComponentFactoryOfFluidModalL = () => (ComponentFactoryOfFluidModalL = dart.constFn(component_factory.ComponentFactory$(FluidModalL())))();
  var HostViewOfFluidModalL = () => (HostViewOfFluidModalL = dart.constFn(host_view.HostView$(FluidModalL())))();
  var HostViewLOfFluidModalL = () => (HostViewLOfFluidModalL = dart.constFn(dart.legacy(HostViewOfFluidModalL())))();
  var VoidToHostViewLOfFluidModalL = () => (VoidToHostViewLOfFluidModalL = dart.constFn(dart.fnType(HostViewLOfFluidModalL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/modal/modal.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(modal$46template.viewFactory_FluidModal1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(modal$46template.ViewFluidModal0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(modal$46template.viewFactory_FluidModalHost0, VoidToHostViewLOfFluidModalL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfFluidModalL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "fluid-modal"
      });
    }
  }, false);
  var _appEl_1 = dart.privateName(modal$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(modal$46template, "_NgIf_1_9");
  var C0;
  var C1;
  modal$46template.ViewFluidModal0 = class ViewFluidModal0 extends component_view.ComponentView$(dart.legacy(modal.FluidModal)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/modal/modal.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "modal");
      this.addShimC(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "modal-body");
      this.addShimC(_el_2);
      this.project(_el_2, 0);
      let _el_3 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_3, "modal-background");
      this.addShimC(_el_3);
      _el_3[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'close')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.title != null;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      modal$46template.ViewFluidModal0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = modal$46template.ViewFluidModal0._componentStyles;
      if (styles == null) {
        modal$46template.ViewFluidModal0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(modal$46template.styles$FluidModal, modal$46template.ViewFluidModal0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (modal$46template.ViewFluidModal0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    modal$46template.ViewFluidModal0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-modal"));
  }).prototype = modal$46template.ViewFluidModal0.prototype;
  dart.addTypeTests(modal$46template.ViewFluidModal0);
  dart.addTypeCaches(modal$46template.ViewFluidModal0);
  dart.setMethodSignature(modal$46template.ViewFluidModal0, () => ({
    __proto__: dart.getMethods(modal$46template.ViewFluidModal0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(modal$46template.ViewFluidModal0, L0);
  dart.setFieldSignature(modal$46template.ViewFluidModal0, () => ({
    __proto__: dart.getFields(modal$46template.ViewFluidModal0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(modal$46template.ViewFluidModal0, {
    /*modal$46template.ViewFluidModal0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(modal$46template, "_textBinding_1");
  var _compView_2 = dart.privateName(modal$46template, "_compView_2");
  var _FluidIcon_2_5 = dart.privateName(modal$46template, "_FluidIcon_2_5");
  var C2;
  modal$46template._ViewFluidModal1 = class _ViewFluidModal1 extends embedded_view.EmbeddedView$(dart.legacy(modal.FluidModal)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "modal-header");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this[_compView_2] = new icon$46template.ViewFluidIcon0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_0[$append](_el_2);
      dom_helpers.setAttribute(_el_2, "icon", "close");
      this.addShimC(_el_2);
      this[_FluidIcon_2_5] = new icon.FluidIcon.new(_el_2);
      this[_compView_2].createAndProject(this[_FluidIcon_2_5], JSArrayOfObjectL().of([C2 || CT.C2]));
      _el_2[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'close')));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_2_5].icon = "close";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_2_5].ngOnInit();
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.title));
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
  };
  (modal$46template._ViewFluidModal1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_2] = null;
    this[_FluidIcon_2_5] = null;
    modal$46template._ViewFluidModal1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = modal$46template._ViewFluidModal1.prototype;
  dart.addTypeTests(modal$46template._ViewFluidModal1);
  dart.addTypeCaches(modal$46template._ViewFluidModal1);
  dart.setMethodSignature(modal$46template._ViewFluidModal1, () => ({
    __proto__: dart.getMethods(modal$46template._ViewFluidModal1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(modal$46template._ViewFluidModal1, L0);
  dart.setFieldSignature(modal$46template._ViewFluidModal1, () => ({
    __proto__: dart.getFields(modal$46template._ViewFluidModal1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_2]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_2_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _ModalService_0_5 = dart.privateName(modal$46template, "_ModalService_0_5");
  modal$46template._ViewFluidModalHost0 = class _ViewFluidModalHost0 extends host_view.HostView$(dart.legacy(modal.FluidModal)) {
    build() {
      this.componentView = new modal$46template.ViewFluidModal0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_ModalService_0_5] = new modal_service.ModalService.new();
      this.component = new modal.FluidModal.new(this[_ModalService_0_5], _el_0);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 0 === nodeIndex) {
        return this[_ModalService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
    destroyInternal() {
      this.component.ngOnDestroy();
    }
  };
  (modal$46template._ViewFluidModalHost0.new = function() {
    this[_ModalService_0_5] = null;
    modal$46template._ViewFluidModalHost0.__proto__.new.call(this);
    ;
  }).prototype = modal$46template._ViewFluidModalHost0.prototype;
  dart.addTypeTests(modal$46template._ViewFluidModalHost0);
  dart.addTypeCaches(modal$46template._ViewFluidModalHost0);
  dart.setMethodSignature(modal$46template._ViewFluidModalHost0, () => ({
    __proto__: dart.getMethods(modal$46template._ViewFluidModalHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(modal$46template._ViewFluidModalHost0, L0);
  dart.setFieldSignature(modal$46template._ViewFluidModalHost0, () => ({
    __proto__: dart.getFields(modal$46template._ViewFluidModalHost0.__proto__),
    [_ModalService_0_5]: dart.fieldType(dart.legacy(modal_service.ModalService))
  }));
  var C3;
  modal$46template.createFluidModalFactory = function createFluidModalFactory() {
    return new (ComponentFactoryOfFluidModalL()).new("fluid-modal", C3 || CT.C3);
  };
  modal$46template.viewFactory_FluidModal1 = function viewFactory_FluidModal1(parentView, parentIndex) {
    return new modal$46template._ViewFluidModal1.new(parentView, parentIndex);
  };
  modal$46template.viewFactory_FluidModalHost0 = function viewFactory_FluidModalHost0() {
    return new modal$46template._ViewFluidModalHost0.new();
  };
  modal$46template.initReflector = function initReflector() {
    if (dart.test(modal$46template._visited)) {
      return;
    }
    modal$46template._visited = true;
  };
  dart.copyProperties(modal$46template, {
    get FluidModalNgFactory() {
      return modal$46template._FluidModalNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  dart.defineLazy(modal$46template, {
    /*modal$46template.styles$FluidModal*/get styles$FluidModal() {
      return [modal$46css$46shim.styles];
    },
    /*modal$46template._FluidModalNgFactory*/get _FluidModalNgFactory() {
      return C4 || CT.C4;
    },
    /*modal$46template.styles$FluidModalHost*/get styles$FluidModalHost() {
      return C2 || CT.C2;
    },
    /*modal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/modal/modal.template", {
    "package:fluix_web/fluix/modal/modal.template.dart": modal$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwCI,uBAAgB,2BAAY,+CAA+C;IAC7E;;AAIQ,iBAAY;AACQ,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACjB,MAArC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,sBAAY,yBAAsB,KAAK;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AACvC,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,kBAAQ,sBAAmB,GAAG,EAAE,KAAK;AACD,MAA1C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACN,MAAhD,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AAC4C,MAA/D,AAAM,KAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;IACzD;;AAIQ,iBAAY;AACwB,MAArC,AAAU,uBAAQ,AAAK,AAAM,IAAP,UAAU;AACK,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;IAChB;;AAGyB,MAAvB,oDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC+E,QAAnG,oDAAoB,SAAiC,2CAAO,oCAAmB;AAC/E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;mDAvD6B,YAAgB;IAH/B;IACT;AAEuD,8DAAM,UAAU,EAAE,WAAW;AAC7D,IAA1B,AAAK;AAC2D,uBAA3D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,iDAAgB;;;;;;;;;;;AA2EvC,iBAAY;AACZ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACY,MAA5C,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACsB,MAAzC,AAAM,KAAD,UAAa,AAAe;AACkB,MAA9C,oBAAuB,uCAAe,MAAM;AAC3C,kBAAa,AAAY;AACZ,MAAnB,AAAM,KAAD,UAAQ,KAAK;AAC2B,MAA7C,yBAAsB,KAAK,EAAE,QAAQ;AACjB,MAApB,AAAK,cAAS,KAAK;AAC4B,MAA1C,uBAA0B,uBAAU,KAAK;AACoB,MAA7D,AAAY,mCAAsB,sBAAgB;AACQ,MAA/D,AAAM,KAAD,oBAAkB,SAAS,AAAK,6BAAmB,UAAL,IAAI;AAC/B,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIQ,iBAAY;AACb,uBAAkB;AACvB,oBAAI,UAAU;AACwB,QAA9B,AAAe,4BAAO;;AAE9B,qBAAe,gDAAwB,UAAU;AACjB,QAAzB,AAAe;;AAEiD,MAAlE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;AAC/B,MAA3B,AAAY;IACnB;;AAIyC,MAAlC,AAAY;IACnB;;oDArCqC,YAAgB;IAH1B,uBAA0B;IAC7B;IACL;AACiD,+DAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;;;;;;;;AAkDnD,MAAxC,qBAAgB,yCAAgB,MAAM;AACrC,kBAAa,AAAc;AACe,MAA3C,0BAA6B;AACgC,MAA7D,iBAAoB,yBAAgB,yBAAmB,KAAK;AACzC,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,kCAAkB,AAAE,MAAG,SAAS;AAC7D,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;AAI8B,MAAvB,AAAU;IACjB;;;IA9BsB;;;EA+BxB;;;;;;;;;;;;;;;AArFE,UAAO,2CAAiB;EAC1B;8EA8CwE,YAAgB;AACtF,UAAO,2CAAiB,UAAU,EAAE,WAAW;EACjD;;AAuCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;EACb;;;AArGE,YAAO;IACT;;;;;;MAnEoB,kCAAiB;YAAG,EAAS;;MAgE3C,qCAAoB;;;MAyDN,sCAAqB;;;MAwCrC,yBAAQ;YAAG","file":"modal.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__modal__modal$46template: modal$46template
  };
}));

//# sourceMappingURL=modal.template.unsound.ddc.js.map
