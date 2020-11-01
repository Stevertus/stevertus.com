define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/icon/icon', 'packages/fluix_web/fluix/icon/icon.css.shim'], (function load__packages__fluix_web__fluix__icon__icon_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__icon__icon, packages__fluix_web__fluix__icon__icon$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const ng_style = packages__angular__src__bootstrap__modules.src__common__directives__ng_style;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const icon$46css$46shim = packages__fluix_web__fluix__icon__icon$46css$46shim.fluix__icon__icon$46css$46shim;
  var icon$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidIconL = () => (FluidIconL = dart.constFn(dart.legacy(icon.FluidIcon)))();
  var ComponentFactoryOfFluidIconL = () => (ComponentFactoryOfFluidIconL = dart.constFn(component_factory.ComponentFactory$(FluidIconL())))();
  var HostViewOfFluidIconL = () => (HostViewOfFluidIconL = dart.constFn(host_view.HostView$(FluidIconL())))();
  var HostViewLOfFluidIconL = () => (HostViewLOfFluidIconL = dart.constFn(dart.legacy(HostViewOfFluidIconL())))();
  var VoidToHostViewLOfFluidIconL = () => (VoidToHostViewLOfFluidIconL = dart.constFn(dart.fnType(HostViewLOfFluidIconL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/icon/icon.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(icon$46template.ViewFluidIcon0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(icon$46template.viewFactory_FluidIconHost0, VoidToHostViewLOfFluidIconL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidIconL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-icon"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _NgStyle_1_5 = dart.privateName(icon$46template, "_NgStyle_1_5");
  var _expr_0 = dart.privateName(icon$46template, "_expr_0");
  var C0;
  icon$46template.ViewFluidIcon0 = class ViewFluidIcon0 extends component_view.ComponentView$(dart.legacy(icon.FluidIcon)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/icon/icon.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      let _el_1 = dom_helpers.appendElement(doc, parentRenderNode, "i");
      this.addShimE(_el_1);
      this[_NgStyle_1_5] = new ng_style.NgStyle.new(_el_1);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.sizeStyle;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "sizeStyle", "package:fluix_web/fluix/icon/icon.html"))) {
        this[_NgStyle_1_5].rawStyle = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgStyle_1_5].ngDoCheck();
      }
    }
    static _debugClearComponentStyles() {
      icon$46template.ViewFluidIcon0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = icon$46template.ViewFluidIcon0._componentStyles;
      if (styles == null) {
        icon$46template.ViewFluidIcon0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(icon$46template.styles$FluidIcon, icon$46template.ViewFluidIcon0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (icon$46template.ViewFluidIcon0.new = function(parentView, parentIndex) {
    this[_NgStyle_1_5] = null;
    this[_expr_0] = null;
    icon$46template.ViewFluidIcon0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-icon"));
  }).prototype = icon$46template.ViewFluidIcon0.prototype;
  dart.addTypeTests(icon$46template.ViewFluidIcon0);
  dart.addTypeCaches(icon$46template.ViewFluidIcon0);
  dart.setMethodSignature(icon$46template.ViewFluidIcon0, () => ({
    __proto__: dart.getMethods(icon$46template.ViewFluidIcon0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(icon$46template.ViewFluidIcon0, L0);
  dart.setFieldSignature(icon$46template.ViewFluidIcon0, () => ({
    __proto__: dart.getFields(icon$46template.ViewFluidIcon0.__proto__),
    [_NgStyle_1_5]: dart.fieldType(dart.legacy(ng_style.NgStyle)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(icon$46template.ViewFluidIcon0, {
    /*icon$46template.ViewFluidIcon0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  icon$46template._ViewFluidIconHost0 = class _ViewFluidIconHost0 extends host_view.HostView$(dart.legacy(icon.FluidIcon)) {
    build() {
      this.componentView = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new icon.FluidIcon.new(_el_0);
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
  (icon$46template._ViewFluidIconHost0.new = function() {
    icon$46template._ViewFluidIconHost0.__proto__.new.call(this);
    ;
  }).prototype = icon$46template._ViewFluidIconHost0.prototype;
  dart.addTypeTests(icon$46template._ViewFluidIconHost0);
  dart.addTypeCaches(icon$46template._ViewFluidIconHost0);
  dart.setMethodSignature(icon$46template._ViewFluidIconHost0, () => ({
    __proto__: dart.getMethods(icon$46template._ViewFluidIconHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(icon$46template._ViewFluidIconHost0, L0);
  var C1;
  icon$46template.createFluidIconFactory = function createFluidIconFactory() {
    return new (ComponentFactoryOfFluidIconL()).new("fluid-icon", C1 || CT.C1);
  };
  icon$46template.viewFactory_FluidIconHost0 = function viewFactory_FluidIconHost0() {
    return new icon$46template._ViewFluidIconHost0.new();
  };
  icon$46template.initReflector = function initReflector() {
    if (dart.test(icon$46template._visited)) {
      return;
    }
    icon$46template._visited = true;
  };
  dart.copyProperties(icon$46template, {
    get FluidIconNgFactory() {
      return icon$46template._FluidIconNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(icon$46template, {
    /*icon$46template.styles$FluidIcon*/get styles$FluidIcon() {
      return [icon$46css$46shim.styles];
    },
    /*icon$46template._FluidIconNgFactory*/get _FluidIconNgFactory() {
      return C2 || CT.C2;
    },
    /*icon$46template.styles$FluidIconHost*/get styles$FluidIconHost() {
      return C3 || CT.C3;
    },
    /*icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/icon/icon.template", {
    "package:fluix_web/fluix/icon/icon.template.dart": icon$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BI,uBAAgB,2BAAY,6CAA6C;IAC3E;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACjC,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,0BAAsB,GAAG,EAAE,gBAAgB,EAAE;AACvC,MAApB,AAAK,cAAS,KAAK;AACuB,MAArC,qBAAuB,yBAAQ,KAAK;IAC3C;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,aAAa;AACvB,QAAjC,AAAa,8BAAW,SAAS;AACd,QAAnB,gBAAU,SAAS;;AAE1B,qBAAc;AACiB,QAAxB,AAAa;;IAEtB;;AAGyB,MAAvB,kDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8E,QAAlG,kDAAoB,SAAiC,2CAAO,kCAAkB;AAC9E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iDA9C4B,YAAgB;IAH5B;IACZ;AAEuD,4DAAM,UAAU,EAAE,WAAW;AAC5D,IAA1B,AAAK;AAC0D,uBAA1D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;MAJ+B,+CAAgB;;;;;;;AAgED,MAAvC,qBAAgB,uCAAe,MAAM;AACpC,kBAAa,AAAc;AACQ,MAApC,iBAAoB,uBAAU,KAAK;AAChB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,0CAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,2BAAW;EACb;;;AAtCE,YAAO;IACT;;;;;;;MA1DoB,gCAAgB;YAAG,EAAS;;MAuD1C,mCAAmB;;;MASL,oCAAoB;;;MAyBpC,wBAAQ;YAAG","file":"icon.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__icon__icon$46template: icon$46template
  };
}));

//# sourceMappingURL=icon.template.unsound.ddc.js.map
