define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/input/input', 'packages/fluix_web/fluix/input/input.css.shim'], (function load__packages__fluix_web__fluix__input__input_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__input__input, packages__fluix_web__fluix__input__input$46css$46shim) {
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
  const input = packages__fluix_web__fluix__input__input.fluix__input__input;
  const input$46css$46shim = packages__fluix_web__fluix__input__input$46css$46shim.fluix__input__input$46css$46shim;
  var input$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidInputL = () => (FluidInputL = dart.constFn(dart.legacy(input.FluidInput)))();
  var ComponentFactoryOfFluidInputL = () => (ComponentFactoryOfFluidInputL = dart.constFn(component_factory.ComponentFactory$(FluidInputL())))();
  var HostViewOfFluidInputL = () => (HostViewOfFluidInputL = dart.constFn(host_view.HostView$(FluidInputL())))();
  var HostViewLOfFluidInputL = () => (HostViewLOfFluidInputL = dart.constFn(dart.legacy(HostViewOfFluidInputL())))();
  var VoidToHostViewLOfFluidInputL = () => (VoidToHostViewLOfFluidInputL = dart.constFn(dart.fnType(HostViewLOfFluidInputL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/input/input.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(input$46template.ViewFluidInput0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(input$46template.viewFactory_FluidInputHost0, VoidToHostViewLOfFluidInputL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidInputL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "input[fluidInput]"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  input$46template.ViewFluidInput0 = class ViewFluidInput0 extends component_view.ComponentView$(dart.legacy(input.FluidInput)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/input/input.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "test");
    }
    static _debugClearComponentStyles() {
      input$46template.ViewFluidInput0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = input$46template.ViewFluidInput0._componentStyles;
      if (styles == null) {
        input$46template.ViewFluidInput0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(input$46template.styles$FluidInput, input$46template.ViewFluidInput0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (input$46template.ViewFluidInput0.new = function(parentView, parentIndex) {
    input$46template.ViewFluidInput0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("input"));
  }).prototype = input$46template.ViewFluidInput0.prototype;
  dart.addTypeTests(input$46template.ViewFluidInput0);
  dart.addTypeCaches(input$46template.ViewFluidInput0);
  dart.setMethodSignature(input$46template.ViewFluidInput0, () => ({
    __proto__: dart.getMethods(input$46template.ViewFluidInput0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(input$46template.ViewFluidInput0, L0);
  dart.defineLazy(input$46template.ViewFluidInput0, {
    /*input$46template.ViewFluidInput0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  input$46template._ViewFluidInputHost0 = class _ViewFluidInputHost0 extends host_view.HostView$(dart.legacy(input.FluidInput)) {
    build() {
      this.componentView = new input$46template.ViewFluidInput0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new input.FluidInput.new(_el_0);
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
  (input$46template._ViewFluidInputHost0.new = function() {
    input$46template._ViewFluidInputHost0.__proto__.new.call(this);
    ;
  }).prototype = input$46template._ViewFluidInputHost0.prototype;
  dart.addTypeTests(input$46template._ViewFluidInputHost0);
  dart.addTypeCaches(input$46template._ViewFluidInputHost0);
  dart.setMethodSignature(input$46template._ViewFluidInputHost0, () => ({
    __proto__: dart.getMethods(input$46template._ViewFluidInputHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(input$46template._ViewFluidInputHost0, L0);
  var C1;
  input$46template.createFluidInputFactory = function createFluidInputFactory() {
    return new (ComponentFactoryOfFluidInputL()).new("input[fluidInput]", C1 || CT.C1);
  };
  input$46template.viewFactory_FluidInputHost0 = function viewFactory_FluidInputHost0() {
    return new input$46template._ViewFluidInputHost0.new();
  };
  input$46template.initReflector = function initReflector() {
    if (dart.test(input$46template._visited)) {
      return;
    }
    input$46template._visited = true;
  };
  dart.copyProperties(input$46template, {
    get FluidInputNgFactory() {
      return input$46template._FluidInputNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(input$46template, {
    /*input$46template.styles$FluidInput*/get styles$FluidInput() {
      return [input$46css$46shim.styles];
    },
    /*input$46template._FluidInputNgFactory*/get _FluidInputNgFactory() {
      return C2 || CT.C2;
    },
    /*input$46template.styles$FluidInputHost*/get styles$FluidInputHost() {
      return C3 || CT.C3;
    },
    /*input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/input/input.template", {
    "package:fluix_web/fluix/input/input.template.dart": input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,+CAA+C;IAC7E;;AAI4B,6BAAmB,AAAK;AAC5C,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACjC,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACjC,MAApB,AAAK,cAAS,KAAK;AACb,oBAAU,uBAAmB,KAAK,EAAE;IAC5C;;AAGyB,MAAvB,oDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC+E,QAAnG,oDAAoB,SAAiC,2CAAO,oCAAmB;AAC/E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;mDAjC6B,YAAgB;AAAe,8DAAM,UAAU,EAAE,WAAW;AAC7D,IAA1B,AAAK;AACqD,uBAArD,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,iDAAgB;;;;;;;AAmDA,MAAxC,qBAAgB,yCAAgB,MAAM;AACrC,kBAAa,AAAc;AACS,MAArC,iBAAoB,yBAAW,KAAK;AACjB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,2CAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;EACb;;;AAtCE,YAAO;IACT;;;;;;;MA3CoB,kCAAiB;YAAG,EAAS;;MAwC3C,qCAAoB;;;MASN,sCAAqB;;;MAyBrC,yBAAQ;YAAG","file":"input.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__input__input$46template: input$46template
  };
}));

//# sourceMappingURL=input.template.unsound.ddc.js.map
