define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/spinner/spinner', 'packages/fluix_web/fluix/spinner/spinner.css.shim'], (function load__packages__fluix_web__fluix__spinner__spinner_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__spinner__spinner, packages__fluix_web__fluix__spinner__spinner$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const spinner = packages__fluix_web__fluix__spinner__spinner.fluix__spinner__spinner;
  const spinner$46css$46shim = packages__fluix_web__fluix__spinner__spinner$46css$46shim.fluix__spinner__spinner$46css$46shim;
  var spinner$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidSpinnerL = () => (FluidSpinnerL = dart.constFn(dart.legacy(spinner.FluidSpinner)))();
  var ComponentFactoryOfFluidSpinnerL = () => (ComponentFactoryOfFluidSpinnerL = dart.constFn(component_factory.ComponentFactory$(FluidSpinnerL())))();
  var HostViewOfFluidSpinnerL = () => (HostViewOfFluidSpinnerL = dart.constFn(host_view.HostView$(FluidSpinnerL())))();
  var HostViewLOfFluidSpinnerL = () => (HostViewLOfFluidSpinnerL = dart.constFn(dart.legacy(HostViewOfFluidSpinnerL())))();
  var VoidToHostViewLOfFluidSpinnerL = () => (VoidToHostViewLOfFluidSpinnerL = dart.constFn(dart.fnType(HostViewLOfFluidSpinnerL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/spinner/spinner.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(spinner$46template.ViewFluidSpinner0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(spinner$46template.viewFactory_FluidSpinnerHost0, VoidToHostViewLOfFluidSpinnerL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidSpinnerL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-spinner"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  spinner$46template.ViewFluidSpinner0 = class ViewFluidSpinner0 extends component_view.ComponentView$(dart.legacy(spinner.FluidSpinner)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/spinner/spinner.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_0, "id", "spinner");
      this.addShimC(_el_0);
    }
    static _debugClearComponentStyles() {
      spinner$46template.ViewFluidSpinner0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = spinner$46template.ViewFluidSpinner0._componentStyles;
      if (styles == null) {
        spinner$46template.ViewFluidSpinner0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(spinner$46template.styles$FluidSpinner, spinner$46template.ViewFluidSpinner0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (spinner$46template.ViewFluidSpinner0.new = function(parentView, parentIndex) {
    spinner$46template.ViewFluidSpinner0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-spinner"));
  }).prototype = spinner$46template.ViewFluidSpinner0.prototype;
  dart.addTypeTests(spinner$46template.ViewFluidSpinner0);
  dart.addTypeCaches(spinner$46template.ViewFluidSpinner0);
  dart.setMethodSignature(spinner$46template.ViewFluidSpinner0, () => ({
    __proto__: dart.getMethods(spinner$46template.ViewFluidSpinner0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(spinner$46template.ViewFluidSpinner0, L0);
  dart.defineLazy(spinner$46template.ViewFluidSpinner0, {
    /*spinner$46template.ViewFluidSpinner0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  spinner$46template._ViewFluidSpinnerHost0 = class _ViewFluidSpinnerHost0 extends host_view.HostView$(dart.legacy(spinner.FluidSpinner)) {
    build() {
      this.componentView = new spinner$46template.ViewFluidSpinner0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new spinner.FluidSpinner.new();
      this.initRootNode(_el_0);
    }
  };
  (spinner$46template._ViewFluidSpinnerHost0.new = function() {
    spinner$46template._ViewFluidSpinnerHost0.__proto__.new.call(this);
    ;
  }).prototype = spinner$46template._ViewFluidSpinnerHost0.prototype;
  dart.addTypeTests(spinner$46template._ViewFluidSpinnerHost0);
  dart.addTypeCaches(spinner$46template._ViewFluidSpinnerHost0);
  dart.setMethodSignature(spinner$46template._ViewFluidSpinnerHost0, () => ({
    __proto__: dart.getMethods(spinner$46template._ViewFluidSpinnerHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(spinner$46template._ViewFluidSpinnerHost0, L0);
  var C1;
  spinner$46template.createFluidSpinnerFactory = function createFluidSpinnerFactory() {
    return new (ComponentFactoryOfFluidSpinnerL()).new("fluid-spinner", C1 || CT.C1);
  };
  spinner$46template.viewFactory_FluidSpinnerHost0 = function viewFactory_FluidSpinnerHost0() {
    return new spinner$46template._ViewFluidSpinnerHost0.new();
  };
  spinner$46template.initReflector = function initReflector() {
    if (dart.test(spinner$46template._visited)) {
      return;
    }
    spinner$46template._visited = true;
  };
  dart.copyProperties(spinner$46template, {
    get FluidSpinnerNgFactory() {
      return spinner$46template._FluidSpinnerNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(spinner$46template, {
    /*spinner$46template.styles$FluidSpinner*/get styles$FluidSpinner() {
      return [spinner$46css$46shim.styles];
    },
    /*spinner$46template._FluidSpinnerNgFactory*/get _FluidSpinnerNgFactory() {
      return C2 || CT.C2;
    },
    /*spinner$46template.styles$FluidSpinnerHost*/get styles$FluidSpinnerHost() {
      return C3 || CT.C3;
    },
    /*spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/spinner/spinner.template", {
    "package:fluix_web/fluix/spinner/spinner.template.dart": spinner$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["spinner.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,mDAAmD;IACjF;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACT,MAA5C,yBAAqB,KAAK,EAAE,MAAM;AACd,MAApB,AAAK,cAAS,KAAK;IACrB;;AAGyB,MAAvB,wDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACiF,QAArG,wDAAoB,SAAiC,2CAAO,wCAAqB;AACjF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;uDA9B+B,YAAgB;AAAe,kEAAM,UAAU,EAAE,WAAW;AAC/D,IAA1B,AAAK;AAC6D,uBAA7D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,qDAAgB;;;;;;;AAgDE,MAA1C,qBAAgB,6CAAkB,MAAM;AACvC,kBAAa,AAAc;AACM,MAAlC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,6CAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,8BAAW;EACb;;;AA7BE,YAAO;IACT;;;;;;;MAxCoB,sCAAmB;YAAG,EAAS;;MAqC7C,yCAAsB;;;MASR,0CAAuB;;;MAgBvC,2BAAQ;YAAG","file":"spinner.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__spinner__spinner$46template: spinner$46template
  };
}));

//# sourceMappingURL=spinner.template.unsound.ddc.js.map
