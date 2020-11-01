define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/list/list', 'packages/fluix_web/fluix/list/list.css.shim'], (function load__packages__fluix_web__fluix__list__list_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__list__list, packages__fluix_web__fluix__list__list$46css$46shim) {
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
  const list = packages__fluix_web__fluix__list__list.fluix__list__list;
  const list$46css$46shim = packages__fluix_web__fluix__list__list$46css$46shim.fluix__list__list$46css$46shim;
  var list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidListL = () => (FluidListL = dart.constFn(dart.legacy(list.FluidList)))();
  var ComponentFactoryOfFluidListL = () => (ComponentFactoryOfFluidListL = dart.constFn(component_factory.ComponentFactory$(FluidListL())))();
  var HostViewOfFluidListL = () => (HostViewOfFluidListL = dart.constFn(host_view.HostView$(FluidListL())))();
  var HostViewLOfFluidListL = () => (HostViewLOfFluidListL = dart.constFn(dart.legacy(HostViewOfFluidListL())))();
  var VoidToHostViewLOfFluidListL = () => (VoidToHostViewLOfFluidListL = dart.constFn(dart.fnType(HostViewLOfFluidListL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/list/list.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(list$46template.ViewFluidList0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(list$46template.viewFactory_FluidListHost0, VoidToHostViewLOfFluidListL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidListL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-list"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  list$46template.ViewFluidList0 = class ViewFluidList0 extends component_view.ComponentView$(dart.legacy(list.FluidList)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/list/list.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
    }
    static _debugClearComponentStyles() {
      list$46template.ViewFluidList0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = list$46template.ViewFluidList0._componentStyles;
      if (styles == null) {
        list$46template.ViewFluidList0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(list$46template.styles$FluidList, list$46template.ViewFluidList0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (list$46template.ViewFluidList0.new = function(parentView, parentIndex) {
    list$46template.ViewFluidList0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-list"));
  }).prototype = list$46template.ViewFluidList0.prototype;
  dart.addTypeTests(list$46template.ViewFluidList0);
  dart.addTypeCaches(list$46template.ViewFluidList0);
  dart.setMethodSignature(list$46template.ViewFluidList0, () => ({
    __proto__: dart.getMethods(list$46template.ViewFluidList0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(list$46template.ViewFluidList0, L0);
  dart.defineLazy(list$46template.ViewFluidList0, {
    /*list$46template.ViewFluidList0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  list$46template._ViewFluidListHost0 = class _ViewFluidListHost0 extends host_view.HostView$(dart.legacy(list.FluidList)) {
    build() {
      this.componentView = new list$46template.ViewFluidList0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new list.FluidList.new();
      this.initRootNode(_el_0);
    }
  };
  (list$46template._ViewFluidListHost0.new = function() {
    list$46template._ViewFluidListHost0.__proto__.new.call(this);
    ;
  }).prototype = list$46template._ViewFluidListHost0.prototype;
  dart.addTypeTests(list$46template._ViewFluidListHost0);
  dart.addTypeCaches(list$46template._ViewFluidListHost0);
  dart.setMethodSignature(list$46template._ViewFluidListHost0, () => ({
    __proto__: dart.getMethods(list$46template._ViewFluidListHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(list$46template._ViewFluidListHost0, L0);
  var C1;
  list$46template.createFluidListFactory = function createFluidListFactory() {
    return new (ComponentFactoryOfFluidListL()).new("fluid-list", C1 || CT.C1);
  };
  list$46template.viewFactory_FluidListHost0 = function viewFactory_FluidListHost0() {
    return new list$46template._ViewFluidListHost0.new();
  };
  list$46template.initReflector = function initReflector() {
    if (dart.test(list$46template._visited)) {
      return;
    }
    list$46template._visited = true;
  };
  dart.copyProperties(list$46template, {
    get FluidListNgFactory() {
      return list$46template._FluidListNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(list$46template, {
    /*list$46template.styles$FluidList*/get styles$FluidList() {
      return [list$46css$46shim.styles];
    },
    /*list$46template._FluidListNgFactory*/get _FluidListNgFactory() {
      return C2 || CT.C2;
    },
    /*list$46template.styles$FluidListHost*/get styles$FluidListHost() {
      return C3 || CT.C3;
    },
    /*list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/list/list.template", {
    "package:fluix_web/fluix/list/list.template.dart": list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,6CAA6C;IAC3E;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACZ,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAGyB,MAAvB,kDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8E,QAAlG,kDAAoB,SAAiC,2CAAO,kCAAkB;AAC9E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;iDA/B4B,YAAgB;AAAe,4DAAM,UAAU,EAAE,WAAW;AAC5D,IAA1B,AAAK;AAC0D,uBAA1D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,+CAAgB;;;;;;;AAiDD,MAAvC,qBAAgB,uCAAe,MAAM;AACpC,kBAAa,AAAc;AACG,MAA/B,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,0CAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,2BAAW;EACb;;;AA7BE,YAAO;IACT;;;;;;;MAzCoB,gCAAgB;YAAG,EAAS;;MAsC1C,mCAAmB;;;MASL,oCAAoB;;;MAgBpC,wBAAQ;YAAG","file":"list.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__list__list$46template: list$46template
  };
}));

//# sourceMappingURL=list.template.unsound.ddc.js.map
