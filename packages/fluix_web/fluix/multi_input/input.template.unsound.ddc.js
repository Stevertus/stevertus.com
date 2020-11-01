define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/multi_input/input', 'packages/fluix_web/fluix/multi_input/input.css.shim'], (function load__packages__fluix_web__fluix__multi_input__input_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__multi_input__input, packages__fluix_web__fluix__multi_input__input$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const input = packages__fluix_web__fluix__multi_input__input.fluix__multi_input__input;
  const input$46css$46shim = packages__fluix_web__fluix__multi_input__input$46css$46shim.fluix__multi_input__input$46css$46shim;
  var input$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidMultiInputL = () => (FluidMultiInputL = dart.constFn(dart.legacy(input.FluidMultiInput)))();
  var ComponentFactoryOfFluidMultiInputL = () => (ComponentFactoryOfFluidMultiInputL = dart.constFn(component_factory.ComponentFactory$(FluidMultiInputL())))();
  var HostViewOfFluidMultiInputL = () => (HostViewOfFluidMultiInputL = dart.constFn(host_view.HostView$(FluidMultiInputL())))();
  var HostViewLOfFluidMultiInputL = () => (HostViewLOfFluidMultiInputL = dart.constFn(dart.legacy(HostViewOfFluidMultiInputL())))();
  var VoidToHostViewLOfFluidMultiInputL = () => (VoidToHostViewLOfFluidMultiInputL = dart.constFn(dart.fnType(HostViewLOfFluidMultiInputL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/multi_input/input.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(input$46template.ViewFluidMultiInput0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(input$46template.viewFactory_FluidMultiInputHost0, VoidToHostViewLOfFluidMultiInputL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidMultiInputL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "textarea[fluidMultiInput]"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  input$46template.ViewFluidMultiInput0 = class ViewFluidMultiInput0 extends component_view.ComponentView$(dart.legacy(input.FluidMultiInput)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/multi_input/input.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this.project(parentRenderNode, 0);
    }
    static _debugClearComponentStyles() {
      input$46template.ViewFluidMultiInput0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = input$46template.ViewFluidMultiInput0._componentStyles;
      if (styles == null) {
        input$46template.ViewFluidMultiInput0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(input$46template.styles$FluidMultiInput, input$46template.ViewFluidMultiInput0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (input$46template.ViewFluidMultiInput0.new = function(parentView, parentIndex) {
    input$46template.ViewFluidMultiInput0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("textarea"));
  }).prototype = input$46template.ViewFluidMultiInput0.prototype;
  dart.addTypeTests(input$46template.ViewFluidMultiInput0);
  dart.addTypeCaches(input$46template.ViewFluidMultiInput0);
  dart.setMethodSignature(input$46template.ViewFluidMultiInput0, () => ({
    __proto__: dart.getMethods(input$46template.ViewFluidMultiInput0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(input$46template.ViewFluidMultiInput0, L0);
  dart.defineLazy(input$46template.ViewFluidMultiInput0, {
    /*input$46template.ViewFluidMultiInput0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  input$46template._ViewFluidMultiInputHost0 = class _ViewFluidMultiInputHost0 extends host_view.HostView$(dart.legacy(input.FluidMultiInput)) {
    build() {
      this.componentView = new input$46template.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new input.FluidMultiInput.new(_el_0);
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
  (input$46template._ViewFluidMultiInputHost0.new = function() {
    input$46template._ViewFluidMultiInputHost0.__proto__.new.call(this);
    ;
  }).prototype = input$46template._ViewFluidMultiInputHost0.prototype;
  dart.addTypeTests(input$46template._ViewFluidMultiInputHost0);
  dart.addTypeCaches(input$46template._ViewFluidMultiInputHost0);
  dart.setMethodSignature(input$46template._ViewFluidMultiInputHost0, () => ({
    __proto__: dart.getMethods(input$46template._ViewFluidMultiInputHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(input$46template._ViewFluidMultiInputHost0, L0);
  var C1;
  input$46template.createFluidMultiInputFactory = function createFluidMultiInputFactory() {
    return new (ComponentFactoryOfFluidMultiInputL()).new("textarea[fluidMultiInput]", C1 || CT.C1);
  };
  input$46template.viewFactory_FluidMultiInputHost0 = function viewFactory_FluidMultiInputHost0() {
    return new input$46template._ViewFluidMultiInputHost0.new();
  };
  input$46template.initReflector = function initReflector() {
    if (dart.test(input$46template._visited)) {
      return;
    }
    input$46template._visited = true;
  };
  dart.copyProperties(input$46template, {
    get FluidMultiInputNgFactory() {
      return input$46template._FluidMultiInputNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(input$46template, {
    /*input$46template.styles$FluidMultiInput*/get styles$FluidMultiInput() {
      return [input$46css$46shim.styles];
    },
    /*input$46template._FluidMultiInputNgFactory*/get _FluidMultiInputNgFactory() {
      return C2 || CT.C2;
    },
    /*input$46template.styles$FluidMultiInputHost*/get styles$FluidMultiInputHost() {
      return C3 || CT.C3;
    },
    /*input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/multi_input/input.template", {
    "package:fluix_web/fluix/multi_input/input.template.dart": input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["input.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BI,uBAAgB,2BAAY,qDAAqD;IACnF;;AAI4B,6BAAmB,AAAK;AACjB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;IACjC;;AAGyB,MAAvB,yDAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACoF,QAAxG,yDAAoB,SAAiC,2CAAO,yCAAwB;AACpF,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;wDA3BkC,YAAgB;AAAe,mEAAM,UAAU,EAAE,WAAW;AAClE,IAA1B,AAAK;AACwD,uBAAxD,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,sDAAgB;;;;;;;AA6CK,MAA7C,qBAAgB,8CAAqB,MAAM;AAC1C,kBAAa,AAAc;AACc,MAA1C,iBAAoB,8BAAgB,KAAK;AACtB,MAAxB,AAAK,kBAAa,KAAK;IACzB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;;;EACF;;;;;;;;;;AAtBE,UAAO,gDAAiB;EAC1B;;AAwBE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;EACb;;;AAtCE,YAAO;IACT;;;;;;;MArCoB,uCAAsB;YAAG,EAAS;;MAkChD,0CAAyB;;;MASX,2CAA0B;;;MAyB1C,yBAAQ;YAAG","file":"input.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__multi_input__input$46template: input$46template
  };
}));

//# sourceMappingURL=input.template.unsound.ddc.js.map
