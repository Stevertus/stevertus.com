define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/button/button', 'packages/fluix_web/fluix/button/button.css.shim'], (function load__packages__fluix_web__fluix__button__button_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__button__button, packages__fluix_web__fluix__button__button$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const button = packages__fluix_web__fluix__button__button.fluix__button__button;
  const button$46css$46shim = packages__fluix_web__fluix__button__button$46css$46shim.fluix__button__button$46css$46shim;
  var button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidButtonL = () => (FluidButtonL = dart.constFn(dart.legacy(button.FluidButton)))();
  var ComponentFactoryOfFluidButtonL = () => (ComponentFactoryOfFluidButtonL = dart.constFn(component_factory.ComponentFactory$(FluidButtonL())))();
  var HostViewOfFluidButtonL = () => (HostViewOfFluidButtonL = dart.constFn(host_view.HostView$(FluidButtonL())))();
  var HostViewLOfFluidButtonL = () => (HostViewLOfFluidButtonL = dart.constFn(dart.legacy(HostViewOfFluidButtonL())))();
  var VoidToHostViewLOfFluidButtonL = () => (VoidToHostViewLOfFluidButtonL = dart.constFn(dart.fnType(HostViewLOfFluidButtonL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/button/button.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(button$46template.ViewFluidButton0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(button$46template.viewFactory_FluidButtonHost0, VoidToHostViewLOfFluidButtonL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidButtonL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "button[fluidBtn],a[fluidBtn]"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  button$46template.ViewFluidButton0 = class ViewFluidButton0 extends component_view.ComponentView$(dart.legacy(button.FluidButton)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/button/button.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      this.project(_el_0, 0);
    }
    static _debugClearComponentStyles() {
      button$46template.ViewFluidButton0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = button$46template.ViewFluidButton0._componentStyles;
      if (styles == null) {
        button$46template.ViewFluidButton0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(button$46template.styles$FluidButton, button$46template.ViewFluidButton0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (button$46template.ViewFluidButton0.new = function(parentView, parentIndex) {
    button$46template.ViewFluidButton0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("button"));
  }).prototype = button$46template.ViewFluidButton0.prototype;
  dart.addTypeTests(button$46template.ViewFluidButton0);
  dart.addTypeCaches(button$46template.ViewFluidButton0);
  dart.setMethodSignature(button$46template.ViewFluidButton0, () => ({
    __proto__: dart.getMethods(button$46template.ViewFluidButton0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(button$46template.ViewFluidButton0, L0);
  dart.defineLazy(button$46template.ViewFluidButton0, {
    /*button$46template.ViewFluidButton0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  button$46template._ViewFluidButtonHost0 = class _ViewFluidButtonHost0 extends host_view.HostView$(dart.legacy(button.FluidButton)) {
    build() {
      this.componentView = new button$46template.ViewFluidButton0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new button.FluidButton.new(_el_0);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (button$46template._ViewFluidButtonHost0.new = function() {
    button$46template._ViewFluidButtonHost0.__proto__.new.call(this);
    ;
  }).prototype = button$46template._ViewFluidButtonHost0.prototype;
  dart.addTypeTests(button$46template._ViewFluidButtonHost0);
  dart.addTypeCaches(button$46template._ViewFluidButtonHost0);
  dart.setMethodSignature(button$46template._ViewFluidButtonHost0, () => ({
    __proto__: dart.getMethods(button$46template._ViewFluidButtonHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(button$46template._ViewFluidButtonHost0, L0);
  var C1;
  button$46template.createFluidButtonFactory = function createFluidButtonFactory() {
    return new (ComponentFactoryOfFluidButtonL()).new("button[fluidBtn],a[fluidBtn]", C1 || CT.C1);
  };
  button$46template.viewFactory_FluidButtonHost0 = function viewFactory_FluidButtonHost0() {
    return new button$46template._ViewFluidButtonHost0.new();
  };
  button$46template.initReflector = function initReflector() {
    if (dart.test(button$46template._visited)) {
      return;
    }
    button$46template._visited = true;
  };
  dart.copyProperties(button$46template, {
    get FluidButtonNgFactory() {
      return button$46template._FluidButtonNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(button$46template, {
    /*button$46template.styles$FluidButton*/get styles$FluidButton() {
      return [button$46css$46shim.styles];
    },
    /*button$46template._FluidButtonNgFactory*/get _FluidButtonNgFactory() {
      return C2 || CT.C2;
    },
    /*button$46template.styles$FluidButtonHost*/get styles$FluidButtonHost() {
      return C3 || CT.C3;
    },
    /*button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/button/button.template", {
    "package:fluix_web/fluix/button/button.template.dart": button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,iDAAiD;IAC/E;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACjC,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAGyB,MAAvB,sDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACgF,QAApG,sDAAoB,SAAiC,2CAAO,sCAAoB;AAChF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;qDA9B8B,YAAgB;AAAe,gEAAM,UAAU,EAAE,WAAW;AAC9D,IAA1B,AAAK;AACsD,uBAAtD,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,mDAAgB;;;;;;;AAgDC,MAAzC,qBAAgB,2CAAiB,MAAM;AACtC,kBAAa,AAAc;AACU,MAAtC,iBAAoB,2BAAY,KAAK;AAClB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,4CAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,6BAAW;EACb;;;AAtCE,YAAO;IACT;;;;;;;MAxCoB,oCAAkB;YAAG,EAAS;;MAqC5C,uCAAqB;;;MASP,wCAAsB;;;MAyBtC,0BAAQ;YAAG","file":"button.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__button__button$46template: button$46template
  };
}));

//# sourceMappingURL=button.template.unsound.ddc.js.map
