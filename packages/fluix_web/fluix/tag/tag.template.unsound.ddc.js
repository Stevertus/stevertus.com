define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/tag/tag', 'packages/fluix_web/fluix/tag/tag.css.shim'], (function load__packages__fluix_web__fluix__tag__tag_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__tag__tag, packages__fluix_web__fluix__tag__tag$46css$46shim) {
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
  const tag = packages__fluix_web__fluix__tag__tag.fluix__tag__tag;
  const tag$46css$46shim = packages__fluix_web__fluix__tag__tag$46css$46shim.fluix__tag__tag$46css$46shim;
  var tag$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidTagL = () => (FluidTagL = dart.constFn(dart.legacy(tag.FluidTag)))();
  var ComponentFactoryOfFluidTagL = () => (ComponentFactoryOfFluidTagL = dart.constFn(component_factory.ComponentFactory$(FluidTagL())))();
  var HostViewOfFluidTagL = () => (HostViewOfFluidTagL = dart.constFn(host_view.HostView$(FluidTagL())))();
  var HostViewLOfFluidTagL = () => (HostViewLOfFluidTagL = dart.constFn(dart.legacy(HostViewOfFluidTagL())))();
  var VoidToHostViewLOfFluidTagL = () => (VoidToHostViewLOfFluidTagL = dart.constFn(dart.fnType(HostViewLOfFluidTagL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/tag/tag.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(tag$46template.ViewFluidTag0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(tag$46template.viewFactory_FluidTagHost0, VoidToHostViewLOfFluidTagL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidTagL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-tag"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(tag$46template, "_expr_0");
  var _expr_1 = dart.privateName(tag$46template, "_expr_1");
  var _el_0 = dart.privateName(tag$46template, "_el_0");
  var C0;
  tag$46template.ViewFluidTag0 = class ViewFluidTag0 extends component_view.ComponentView$(dart.legacy(tag.FluidTag)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/tag/tag.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.value;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "value", "package:fluix_web/fluix/tag/tag.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "active", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "disabled", "package:fluix_web/fluix/tag/tag.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    static _debugClearComponentStyles() {
      tag$46template.ViewFluidTag0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = tag$46template.ViewFluidTag0._componentStyles;
      if (styles == null) {
        tag$46template.ViewFluidTag0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(tag$46template.styles$FluidTag, tag$46template.ViewFluidTag0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (tag$46template.ViewFluidTag0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    tag$46template.ViewFluidTag0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-tag"));
  }).prototype = tag$46template.ViewFluidTag0.prototype;
  dart.addTypeTests(tag$46template.ViewFluidTag0);
  dart.addTypeCaches(tag$46template.ViewFluidTag0);
  dart.setMethodSignature(tag$46template.ViewFluidTag0, () => ({
    __proto__: dart.getMethods(tag$46template.ViewFluidTag0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tag$46template.ViewFluidTag0, L0);
  dart.setFieldSignature(tag$46template.ViewFluidTag0, () => ({
    __proto__: dart.getFields(tag$46template.ViewFluidTag0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(tag$46template.ViewFluidTag0, {
    /*tag$46template.ViewFluidTag0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  tag$46template._ViewFluidTagHost0 = class _ViewFluidTagHost0 extends host_view.HostView$(dart.legacy(tag.FluidTag)) {
    build() {
      this.componentView = new tag$46template.ViewFluidTag0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new tag.FluidTag.new();
      this.initRootNode(_el_0);
    }
  };
  (tag$46template._ViewFluidTagHost0.new = function() {
    tag$46template._ViewFluidTagHost0.__proto__.new.call(this);
    ;
  }).prototype = tag$46template._ViewFluidTagHost0.prototype;
  dart.addTypeTests(tag$46template._ViewFluidTagHost0);
  dart.addTypeCaches(tag$46template._ViewFluidTagHost0);
  dart.setMethodSignature(tag$46template._ViewFluidTagHost0, () => ({
    __proto__: dart.getMethods(tag$46template._ViewFluidTagHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tag$46template._ViewFluidTagHost0, L0);
  var C1;
  tag$46template.createFluidTagFactory = function createFluidTagFactory() {
    return new (ComponentFactoryOfFluidTagL()).new("fluid-tag", C1 || CT.C1);
  };
  tag$46template.viewFactory_FluidTagHost0 = function viewFactory_FluidTagHost0() {
    return new tag$46template._ViewFluidTagHost0.new();
  };
  tag$46template.initReflector = function initReflector() {
    if (dart.test(tag$46template._visited)) {
      return;
    }
    tag$46template._visited = true;
  };
  dart.copyProperties(tag$46template, {
    get FluidTagNgFactory() {
      return tag$46template._FluidTagNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(tag$46template, {
    /*tag$46template.styles$FluidTag*/get styles$FluidTag() {
      return [tag$46css$46shim.styles];
    },
    /*tag$46template._FluidTagNgFactory*/get _FluidTagNgFactory() {
      return C2 || CT.C2;
    },
    /*tag$46template.styles$FluidTagHost*/get styles$FluidTagHost() {
      return C3 || CT.C3;
    },
    /*tag$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/tag/tag.template", {
    "package:fluix_web/fluix/tag/tag.template.dart": tag$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tag.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BI,uBAAgB,2BAAY,2CAA2C;IACzE;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACiC,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AAC3B,MAAzB,AAAK,cAAc;AACQ,MAA3B,AAAK,aAAa,aAAO;IAC3B;;AAIQ,iBAAY;AACZ,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,SAAS;AACE,QAA3D,+BAAgC,aAAO,UAAU,SAAS;AAClC,QAAnB,gBAAU,SAAS;;AAEpB,sBAAY,AAAK,IAAD;AACtB,oBAAI,2BAA0B,eAAS,SAAS,EAAE,YAAY;AACC,QAA7D,+BAAgC,aAAO,YAAY,SAAS;AACpC,QAAnB,gBAAU,SAAS;;IAE5B;;AAGyB,MAAvB,gDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC6E,QAAjG,gDAAoB,SAAiC,2CAAO,gCAAiB;AAC7E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;+CA7C2B,YAAgB;IAJvC;IACA;IACe;AAEuC,0DAAM,UAAU,EAAE,WAAW;AAC3D,IAA1B,AAAK;AACyD,uBAAzD,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;;;;;;;MAJ+B,6CAAgB;;;;;;;AA+DF,MAAtC,qBAAgB,qCAAc,MAAM;AACnC,kBAAa,AAAc;AACE,MAA9B,iBAAoB;AACD,MAAxB,AAAK,kBAAa,KAAK;IACzB;;;;;EACF;;;;;;;;;;AAbE,UAAO,yCAAiB;EAC1B;;AAeE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,0BAAW;EACb;;;AA7BE,YAAO;IACT;;;;;;;MA1DoB,8BAAe;YAAG,EAAS;;MAuDzC,iCAAkB;;;MASJ,kCAAmB;;;MAgBnC,uBAAQ;YAAG","file":"tag.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__tag__tag$46template: tag$46template
  };
}));

//# sourceMappingURL=tag.template.unsound.ddc.js.map
