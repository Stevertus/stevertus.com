define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/card/card', 'packages/fluix_web/fluix/card/card.css.shim'], (function load__packages__fluix_web__fluix__card__card_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__card__card, packages__fluix_web__fluix__card__card$46css$46shim) {
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
  const card = packages__fluix_web__fluix__card__card.fluix__card__card;
  const card$46css$46shim = packages__fluix_web__fluix__card__card$46css$46shim.fluix__card__card$46css$46shim;
  var card$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidCardL = () => (FluidCardL = dart.constFn(dart.legacy(card.FluidCard)))();
  var ComponentFactoryOfFluidCardL = () => (ComponentFactoryOfFluidCardL = dart.constFn(component_factory.ComponentFactory$(FluidCardL())))();
  var HostViewOfFluidCardL = () => (HostViewOfFluidCardL = dart.constFn(host_view.HostView$(FluidCardL())))();
  var HostViewLOfFluidCardL = () => (HostViewLOfFluidCardL = dart.constFn(dart.legacy(HostViewOfFluidCardL())))();
  var VoidToHostViewLOfFluidCardL = () => (VoidToHostViewLOfFluidCardL = dart.constFn(dart.fnType(HostViewLOfFluidCardL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/card/card.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(card$46template.ViewFluidCard0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(card$46template.viewFactory_FluidCardHost0, VoidToHostViewLOfFluidCardL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidCardL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-card"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  card$46template.ViewFluidCard0 = class ViewFluidCard0 extends component_view.ComponentView$(dart.legacy(card.FluidCard)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/card/card.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      this.project(_el_0, 0);
    }
    static _debugClearComponentStyles() {
      card$46template.ViewFluidCard0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = card$46template.ViewFluidCard0._componentStyles;
      if (styles == null) {
        card$46template.ViewFluidCard0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(card$46template.styles$FluidCard, card$46template.ViewFluidCard0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (card$46template.ViewFluidCard0.new = function(parentView, parentIndex) {
    card$46template.ViewFluidCard0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-card"));
  }).prototype = card$46template.ViewFluidCard0.prototype;
  dart.addTypeTests(card$46template.ViewFluidCard0);
  dart.addTypeCaches(card$46template.ViewFluidCard0);
  dart.setMethodSignature(card$46template.ViewFluidCard0, () => ({
    __proto__: dart.getMethods(card$46template.ViewFluidCard0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(card$46template.ViewFluidCard0, L0);
  dart.defineLazy(card$46template.ViewFluidCard0, {
    /*card$46template.ViewFluidCard0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  card$46template._ViewFluidCardHost0 = class _ViewFluidCardHost0 extends host_view.HostView$(dart.legacy(card.FluidCard)) {
    build() {
      this.componentView = new card$46template.ViewFluidCard0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new card.FluidCard.new(_el_0);
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
  (card$46template._ViewFluidCardHost0.new = function() {
    card$46template._ViewFluidCardHost0.__proto__.new.call(this);
    ;
  }).prototype = card$46template._ViewFluidCardHost0.prototype;
  dart.addTypeTests(card$46template._ViewFluidCardHost0);
  dart.addTypeCaches(card$46template._ViewFluidCardHost0);
  dart.setMethodSignature(card$46template._ViewFluidCardHost0, () => ({
    __proto__: dart.getMethods(card$46template._ViewFluidCardHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(card$46template._ViewFluidCardHost0, L0);
  var C1;
  card$46template.createFluidCardFactory = function createFluidCardFactory() {
    return new (ComponentFactoryOfFluidCardL()).new("fluid-card", C1 || CT.C1);
  };
  card$46template.viewFactory_FluidCardHost0 = function viewFactory_FluidCardHost0() {
    return new card$46template._ViewFluidCardHost0.new();
  };
  card$46template.initReflector = function initReflector() {
    if (dart.test(card$46template._visited)) {
      return;
    }
    card$46template._visited = true;
  };
  dart.copyProperties(card$46template, {
    get FluidCardNgFactory() {
      return card$46template._FluidCardNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(card$46template, {
    /*card$46template.styles$FluidCard*/get styles$FluidCard() {
      return [card$46css$46shim.styles];
    },
    /*card$46template._FluidCardNgFactory*/get _FluidCardNgFactory() {
      return C2 || CT.C2;
    },
    /*card$46template.styles$FluidCardHost*/get styles$FluidCardHost() {
      return C3 || CT.C3;
    },
    /*card$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/card/card.template", {
    "package:fluix_web/fluix/card/card.template.dart": card$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["card.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,6CAA6C;IAC3E;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACjC,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAGyB,MAAvB,kDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8E,QAAlG,kDAAoB,SAAiC,2CAAO,kCAAkB;AAC9E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iDA9B4B,YAAgB;AAAe,4DAAM,UAAU,EAAE,WAAW;AAC5D,IAA1B,AAAK;AAC0D,uBAA1D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,+CAAgB;;;;;;;AAgDD,MAAvC,qBAAgB,uCAAe,MAAM;AACpC,kBAAa,AAAc;AACQ,MAApC,iBAAoB,uBAAU,KAAK;AAChB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,0CAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,2BAAW;EACb;;;AAtCE,YAAO;IACT;;;;;;;MAxCoB,gCAAgB;YAAG,EAAS;;MAqC1C,mCAAmB;;;MASL,oCAAoB;;;MAyBpC,wBAAQ;YAAG","file":"card.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__card__card$46template: card$46template
  };
}));

//# sourceMappingURL=card.template.unsound.ddc.js.map
