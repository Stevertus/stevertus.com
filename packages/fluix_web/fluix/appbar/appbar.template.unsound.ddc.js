define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/appbar/appbar', 'packages/fluix_web/fluix/appbar/appbar.css.shim'], (function load__packages__fluix_web__fluix__appbar__appbar_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__appbar__appbar, packages__fluix_web__fluix__appbar__appbar$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
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
  const appbar = packages__fluix_web__fluix__appbar__appbar.fluix__appbar__appbar;
  const appbar$46css$46shim = packages__fluix_web__fluix__appbar__appbar$46css$46shim.fluix__appbar__appbar$46css$46shim;
  var appbar$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidAppbarL = () => (FluidAppbarL = dart.constFn(dart.legacy(appbar.FluidAppbar)))();
  var ComponentFactoryOfFluidAppbarL = () => (ComponentFactoryOfFluidAppbarL = dart.constFn(component_factory.ComponentFactory$(FluidAppbarL())))();
  var HostViewOfFluidAppbarL = () => (HostViewOfFluidAppbarL = dart.constFn(host_view.HostView$(FluidAppbarL())))();
  var HostViewLOfFluidAppbarL = () => (HostViewLOfFluidAppbarL = dart.constFn(dart.legacy(HostViewOfFluidAppbarL())))();
  var VoidToHostViewLOfFluidAppbarL = () => (VoidToHostViewLOfFluidAppbarL = dart.constFn(dart.fnType(HostViewLOfFluidAppbarL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/appbar/appbar.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(appbar$46template.viewFactory_FluidAppbar1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(appbar$46template.ViewFluidAppbar0._debugClearComponentStyles, VoidTovoid());
    },
    get C2() {
      return C2 = dart.fn(appbar$46template.viewFactory_FluidAppbarHost0, VoidToHostViewLOfFluidAppbarL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfFluidAppbarL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "fluid-appbar"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(appbar$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(appbar$46template, "_NgIf_0_9");
  var _NgClass_1_5 = dart.privateName(appbar$46template, "_NgClass_1_5");
  var _expr_1 = dart.privateName(appbar$46template, "_expr_1");
  var C0;
  var C1;
  appbar$46template.ViewFluidAppbar0 = class ViewFluidAppbar0 extends component_view.ComponentView$(dart.legacy(appbar.FluidAppbar)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/appbar/appbar.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "fluid-bar");
      this.addShimC(_el_1);
      this[_NgClass_1_5] = new ng_class.NgClass.new(_el_1);
      this.project(_el_1, 0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      this[_NgIf_0_9].ngIf = _ctx.fixed;
      if (dart.test(firstCheck)) {
        this[_NgClass_1_5].initialClasses = "fluid-bar";
      }
      let currVal_1 = dart.test(_ctx.fixed) ? "fluid-bar-fixed" : "";
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "fixed ? 'fluid-bar-fixed' : ''", "package:fluix_web/fluix/appbar/appbar.html"))) {
        this[_NgClass_1_5].rawClass = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgClass_1_5].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_NgClass_1_5].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      appbar$46template.ViewFluidAppbar0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = appbar$46template.ViewFluidAppbar0._componentStyles;
      if (styles == null) {
        appbar$46template.ViewFluidAppbar0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(appbar$46template.styles$FluidAppbar, appbar$46template.ViewFluidAppbar0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C1 || CT.C1);
        }
      }
      this.componentStyles = styles;
    }
  };
  (appbar$46template.ViewFluidAppbar0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_NgClass_1_5] = null;
    this[_expr_1] = null;
    appbar$46template.ViewFluidAppbar0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-appbar"));
  }).prototype = appbar$46template.ViewFluidAppbar0.prototype;
  dart.addTypeTests(appbar$46template.ViewFluidAppbar0);
  dart.addTypeCaches(appbar$46template.ViewFluidAppbar0);
  dart.setMethodSignature(appbar$46template.ViewFluidAppbar0, () => ({
    __proto__: dart.getMethods(appbar$46template.ViewFluidAppbar0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(appbar$46template.ViewFluidAppbar0, L0);
  dart.setFieldSignature(appbar$46template.ViewFluidAppbar0, () => ({
    __proto__: dart.getFields(appbar$46template.ViewFluidAppbar0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_NgClass_1_5]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(appbar$46template.ViewFluidAppbar0, {
    /*appbar$46template.ViewFluidAppbar0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  appbar$46template._ViewFluidAppbar1 = class _ViewFluidAppbar1 extends embedded_view.EmbeddedView$(dart.legacy(appbar.FluidAppbar)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "fluid-bar-spacer");
      this.addShimC(HtmlElementL().as(_el_0));
      this.initRootNode(_el_0);
    }
  };
  (appbar$46template._ViewFluidAppbar1.new = function(parentView, parentIndex) {
    appbar$46template._ViewFluidAppbar1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = appbar$46template._ViewFluidAppbar1.prototype;
  dart.addTypeTests(appbar$46template._ViewFluidAppbar1);
  dart.addTypeCaches(appbar$46template._ViewFluidAppbar1);
  dart.setMethodSignature(appbar$46template._ViewFluidAppbar1, () => ({
    __proto__: dart.getMethods(appbar$46template._ViewFluidAppbar1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(appbar$46template._ViewFluidAppbar1, L0);
  appbar$46template._ViewFluidAppbarHost0 = class _ViewFluidAppbarHost0 extends host_view.HostView$(dart.legacy(appbar.FluidAppbar)) {
    build() {
      this.componentView = new appbar$46template.ViewFluidAppbar0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new appbar.FluidAppbar.new();
      this.initRootNode(_el_0);
    }
  };
  (appbar$46template._ViewFluidAppbarHost0.new = function() {
    appbar$46template._ViewFluidAppbarHost0.__proto__.new.call(this);
    ;
  }).prototype = appbar$46template._ViewFluidAppbarHost0.prototype;
  dart.addTypeTests(appbar$46template._ViewFluidAppbarHost0);
  dart.addTypeCaches(appbar$46template._ViewFluidAppbarHost0);
  dart.setMethodSignature(appbar$46template._ViewFluidAppbarHost0, () => ({
    __proto__: dart.getMethods(appbar$46template._ViewFluidAppbarHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(appbar$46template._ViewFluidAppbarHost0, L0);
  var C2;
  appbar$46template.createFluidAppbarFactory = function createFluidAppbarFactory() {
    return new (ComponentFactoryOfFluidAppbarL()).new("fluid-appbar", C2 || CT.C2);
  };
  appbar$46template.viewFactory_FluidAppbar1 = function viewFactory_FluidAppbar1(parentView, parentIndex) {
    return new appbar$46template._ViewFluidAppbar1.new(parentView, parentIndex);
  };
  appbar$46template.viewFactory_FluidAppbarHost0 = function viewFactory_FluidAppbarHost0() {
    return new appbar$46template._ViewFluidAppbarHost0.new();
  };
  appbar$46template.initReflector = function initReflector() {
    if (dart.test(appbar$46template._visited)) {
      return;
    }
    appbar$46template._visited = true;
  };
  dart.copyProperties(appbar$46template, {
    get FluidAppbarNgFactory() {
      return appbar$46template._FluidAppbarNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C4;
  dart.defineLazy(appbar$46template, {
    /*appbar$46template.styles$FluidAppbar*/get styles$FluidAppbar() {
      return [appbar$46css$46shim.styles];
    },
    /*appbar$46template._FluidAppbarNgFactory*/get _FluidAppbarNgFactory() {
      return C3 || CT.C3;
    },
    /*appbar$46template.styles$FluidAppbarHost*/get styles$FluidAppbarHost() {
      return C4 || CT.C4;
    },
    /*appbar$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/appbar/appbar.template", {
    "package:fluix_web/fluix/appbar/appbar.template.dart": appbar$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["appbar.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsCI,uBAAiB,2BAAY,iDAAiD;IAChF;;AAI4B,6BAAmB,AAAK;AAC5C,sBAAY,yBAAsB,gBAAgB;AACD,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AAC1C,6BAAmB,iCAAiB;AACM,MAAjD,kBAAY,mBAAU,gBAAU,gBAAgB;AAC/C,gBAAc;AACd,kBAAQ,sBAAmB,GAAG,EAAE,gBAAgB;AACb,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACuB,MAArC,qBAAuB,yBAAQ,KAAK;AACnB,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAIQ,iBAAY;AACb,uBAAkB;AACS,MAA3B,AAAU,uBAAO,AAAK,IAAD;AAC1B,oBAAI,UAAU;AACoC,QAA1C,AAAa,oCAAiB;;AAEhC,gCAAa,AAAK,IAAD,UAAS,oBAAoB;AACpD,oBAAI,2BAA2B,eAAS,SAAS,EAAE,kCAAsC;AACjD,QAAjC,AAAa,8BAAW,SAAS;AACd,QAAnB,gBAAU,SAAS;;AAE1B,qBAAe;AACgB,QAAxB,AAAa;;AAEsB,MAArC,AAAS;IAChB;;AAIoC,MAA7B,AAAS;AACiB,MAA1B,AAAa;IACpB;;AAGyB,MAAvB,sDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACgF,QAApG,sDAAoB,SAAiC,2CAAO,sCAAoB;AAChF,sBAAa;AACqD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;qDA7D8B,YAAgB;IALhC;IACT;IACW;IACZ;AAEyD,gEAAM,UAAU,EAAE,WAAW;AAC9D,IAA1B,AAAK;AAC4D,uBAA5D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;;MAJ+B,mDAAgB;;;;;;;AA8EvC,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACgB,MAAhD,AAAK,wCAAiB,KAAK,GAAE;AACT,MAApB,AAAK,gCAAS,KAAK;AACK,MAAxB,AAAK,kBAAa,KAAK;IACzB;;sDARsC,YAAgB;AAAe,iEAAM,UAAU,EAAE,WAAW;;EAAC;;;;;;;;;;AAoBnD,MAAzC,qBAAgB,2CAAiB,MAAM;AACtC,kBAAa,AAAc;AACK,MAAjC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AA7BE,UAAO,4CAAiB;EAC1B;iFAcyE,YAAgB;AACvF,UAAO,6CAAkB,UAAU,EAAE,WAAW;EAClD;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,6BAAW;EACb;;;AA7CE,YAAO;IACT;;;;;;;MA3EoB,oCAAkB;YAAG,EAAS;;MAwE5C,uCAAqB;;;MAyBP,wCAAsB;;;MAgBtC,0BAAQ;YAAG","file":"appbar.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__appbar__appbar$46template: appbar$46template
  };
}));

//# sourceMappingURL=appbar.template.unsound.ddc.js.map
