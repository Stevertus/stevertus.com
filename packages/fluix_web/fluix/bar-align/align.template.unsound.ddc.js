define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/bar-align/align', 'packages/fluix_web/fluix/bar-align/align.css.shim'], (function load__packages__fluix_web__fluix__bar_align__align_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__bar_align__align, packages__fluix_web__fluix__bar_align__align$46css$46shim) {
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
  const align = packages__fluix_web__fluix__bar_align__align.fluix__bar_align__align;
  const align$46css$46shim = packages__fluix_web__fluix__bar_align__align$46css$46shim.fluix__bar_align__align$46css$46shim;
  var align$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidBarAlignL = () => (FluidBarAlignL = dart.constFn(dart.legacy(align.FluidBarAlign)))();
  var ComponentFactoryOfFluidBarAlignL = () => (ComponentFactoryOfFluidBarAlignL = dart.constFn(component_factory.ComponentFactory$(FluidBarAlignL())))();
  var HostViewOfFluidBarAlignL = () => (HostViewOfFluidBarAlignL = dart.constFn(host_view.HostView$(FluidBarAlignL())))();
  var HostViewLOfFluidBarAlignL = () => (HostViewLOfFluidBarAlignL = dart.constFn(dart.legacy(HostViewOfFluidBarAlignL())))();
  var VoidToHostViewLOfFluidBarAlignL = () => (VoidToHostViewLOfFluidBarAlignL = dart.constFn(dart.fnType(HostViewLOfFluidBarAlignL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/bar-align/align.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(align$46template.ViewFluidBarAlign0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(align$46template.viewFactory_FluidBarAlignHost0, VoidToHostViewLOfFluidBarAlignL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidBarAlignL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-bar-align"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  align$46template.ViewFluidBarAlign0 = class ViewFluidBarAlign0 extends component_view.ComponentView$(dart.legacy(align.FluidBarAlign)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/bar-align/align.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "spacer");
      this.addShimC(_el_1);
      this.project(_el_0, 1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "spacer");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "trailing");
      this.addShimC(_el_3);
      this.project(_el_3, 2);
    }
    static _debugClearComponentStyles() {
      align$46template.ViewFluidBarAlign0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = align$46template.ViewFluidBarAlign0._componentStyles;
      if (styles == null) {
        align$46template.ViewFluidBarAlign0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(align$46template.styles$FluidBarAlign, align$46template.ViewFluidBarAlign0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (align$46template.ViewFluidBarAlign0.new = function(parentView, parentIndex) {
    align$46template.ViewFluidBarAlign0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-bar-align"));
  }).prototype = align$46template.ViewFluidBarAlign0.prototype;
  dart.addTypeTests(align$46template.ViewFluidBarAlign0);
  dart.addTypeCaches(align$46template.ViewFluidBarAlign0);
  dart.setMethodSignature(align$46template.ViewFluidBarAlign0, () => ({
    __proto__: dart.getMethods(align$46template.ViewFluidBarAlign0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(align$46template.ViewFluidBarAlign0, L0);
  dart.defineLazy(align$46template.ViewFluidBarAlign0, {
    /*align$46template.ViewFluidBarAlign0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  align$46template._ViewFluidBarAlignHost0 = class _ViewFluidBarAlignHost0 extends host_view.HostView$(dart.legacy(align.FluidBarAlign)) {
    build() {
      this.componentView = new align$46template.ViewFluidBarAlign0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new align.FluidBarAlign.new();
      this.initRootNode(_el_0);
    }
  };
  (align$46template._ViewFluidBarAlignHost0.new = function() {
    align$46template._ViewFluidBarAlignHost0.__proto__.new.call(this);
    ;
  }).prototype = align$46template._ViewFluidBarAlignHost0.prototype;
  dart.addTypeTests(align$46template._ViewFluidBarAlignHost0);
  dart.addTypeCaches(align$46template._ViewFluidBarAlignHost0);
  dart.setMethodSignature(align$46template._ViewFluidBarAlignHost0, () => ({
    __proto__: dart.getMethods(align$46template._ViewFluidBarAlignHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(align$46template._ViewFluidBarAlignHost0, L0);
  var C1;
  align$46template.createFluidBarAlignFactory = function createFluidBarAlignFactory() {
    return new (ComponentFactoryOfFluidBarAlignL()).new("fluid-bar-align", C1 || CT.C1);
  };
  align$46template.viewFactory_FluidBarAlignHost0 = function viewFactory_FluidBarAlignHost0() {
    return new align$46template._ViewFluidBarAlignHost0.new();
  };
  align$46template.initReflector = function initReflector() {
    if (dart.test(align$46template._visited)) {
      return;
    }
    align$46template._visited = true;
  };
  dart.copyProperties(align$46template, {
    get FluidBarAlignNgFactory() {
      return align$46template._FluidBarAlignNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(align$46template, {
    /*align$46template.styles$FluidBarAlign*/get styles$FluidBarAlign() {
      return [align$46css$46shim.styles];
    },
    /*align$46template._FluidBarAlignNgFactory*/get _FluidBarAlignNgFactory() {
      return C2 || CT.C2;
    },
    /*align$46template.styles$FluidBarAlignHost*/get styles$FluidBarAlignHost() {
      return C3 || CT.C3;
    },
    /*align$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/bar-align/align.template", {
    "package:fluix_web/fluix/bar-align/align.template.dart": align$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["align.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,mDAAmD;IACjF;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACZ,MAAzC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACJ,MAAtC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACJ,MAAtC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACb,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACF,MAAxC,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAGyB,MAAvB,uDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACkF,QAAtG,uDAAoB,SAAiC,2CAAO,uCAAsB;AAClF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;sDA1CgC,YAAgB;AAAe,iEAAM,UAAU,EAAE,WAAW;AAChE,IAA1B,AAAK;AAC+D,uBAA/D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,oDAAgB;;;;;;;AA4DG,MAA3C,qBAAgB,4CAAmB,MAAM;AACxC,kBAAa,AAAc;AACO,MAAnC,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,8CAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;EACb;;;AA7BE,YAAO;IACT;;;;;;;MApDoB,qCAAoB;YAAG,EAAS;;MAiD9C,wCAAuB;;;MAST,yCAAwB;;;MAgBxC,yBAAQ;YAAG","file":"align.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__bar_align__align$46template: align$46template
  };
}));

//# sourceMappingURL=align.template.unsound.ddc.js.map
