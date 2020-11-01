define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/shell/fluid_shell', 'packages/fluix_web/theme/theme', 'packages/fluix_web/fluix/shell/shell.css.shim'], (function load__packages__fluix_web__fluix__shell__fluid_shell_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__shell__fluid_shell, packages__fluix_web__theme__theme, packages__fluix_web__fluix__shell__shell$46css$46shim) {
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
  const fluid_shell = packages__fluix_web__fluix__shell__fluid_shell.fluix__shell__fluid_shell;
  const theme = packages__fluix_web__theme__theme.theme__theme;
  const shell$46css$46shim = packages__fluix_web__fluix__shell__shell$46css$46shim.fluix__shell__shell$46css$46shim;
  var fluid_shell$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FluidThemeL = () => (FluidThemeL = dart.constFn(dart.legacy(theme.FluidTheme)))();
  var FluidShellL = () => (FluidShellL = dart.constFn(dart.legacy(fluid_shell.FluidShell)))();
  var ComponentFactoryOfFluidShellL = () => (ComponentFactoryOfFluidShellL = dart.constFn(component_factory.ComponentFactory$(FluidShellL())))();
  var HostViewOfFluidShellL = () => (HostViewOfFluidShellL = dart.constFn(host_view.HostView$(FluidShellL())))();
  var HostViewLOfFluidShellL = () => (HostViewLOfFluidShellL = dart.constFn(dart.legacy(HostViewOfFluidShellL())))();
  var VoidToHostViewLOfFluidShellL = () => (VoidToHostViewLOfFluidShellL = dart.constFn(dart.fnType(HostViewLOfFluidShellL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/shell/fluid_shell.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(fluid_shell$46template.ViewFluidShell0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(fluid_shell$46template.viewFactory_FluidShellHost0, VoidToHostViewLOfFluidShellL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFluidShellL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "fluid-shell"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var C0;
  fluid_shell$46template.ViewFluidShell0 = class ViewFluidShell0 extends component_view.ComponentView$(dart.legacy(fluid_shell.FluidShell)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:fluix_web/lib/fluix/shell/fluid_shell.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this.project(parentRenderNode, 0);
      let _text_0 = dom_helpers.appendText(parentRenderNode, " ");
      this.project(parentRenderNode, 1);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "shell-grid");
      this.addShimC(_el_1);
      this.project(_el_1, 2);
      let _text_2 = dom_helpers.appendText(_el_1, " ");
      this.project(_el_1, 3);
      let _el_3 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_3, "shell-body");
      dom_helpers.setAttribute(_el_3, "style", "width: 100%");
      this.addShimC(_el_3);
      this.project(_el_3, 4);
    }
    static _debugClearComponentStyles() {
      fluid_shell$46template.ViewFluidShell0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = fluid_shell$46template.ViewFluidShell0._componentStyles;
      if (styles == null) {
        fluid_shell$46template.ViewFluidShell0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(fluid_shell$46template.styles$FluidShell, fluid_shell$46template.ViewFluidShell0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (fluid_shell$46template.ViewFluidShell0.new = function(parentView, parentIndex) {
    fluid_shell$46template.ViewFluidShell0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("fluid-shell"));
  }).prototype = fluid_shell$46template.ViewFluidShell0.prototype;
  dart.addTypeTests(fluid_shell$46template.ViewFluidShell0);
  dart.addTypeCaches(fluid_shell$46template.ViewFluidShell0);
  dart.setMethodSignature(fluid_shell$46template.ViewFluidShell0, () => ({
    __proto__: dart.getMethods(fluid_shell$46template.ViewFluidShell0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fluid_shell$46template.ViewFluidShell0, L0);
  dart.defineLazy(fluid_shell$46template.ViewFluidShell0, {
    /*fluid_shell$46template.ViewFluidShell0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _FluidTheme_0_5 = dart.privateName(fluid_shell$46template, "_FluidTheme_0_5");
  fluid_shell$46template._ViewFluidShellHost0 = class _ViewFluidShellHost0 extends host_view.HostView$(dart.legacy(fluid_shell.FluidShell)) {
    build() {
      this.componentView = new fluid_shell$46template.ViewFluidShell0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_FluidTheme_0_5] = new theme.FluidTheme.new();
      this.component = new fluid_shell.FluidShell.new(this[_FluidTheme_0_5]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(FluidThemeL()) && 0 === nodeIndex) {
        return this[_FluidTheme_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (fluid_shell$46template._ViewFluidShellHost0.new = function() {
    this[_FluidTheme_0_5] = null;
    fluid_shell$46template._ViewFluidShellHost0.__proto__.new.call(this);
    ;
  }).prototype = fluid_shell$46template._ViewFluidShellHost0.prototype;
  dart.addTypeTests(fluid_shell$46template._ViewFluidShellHost0);
  dart.addTypeCaches(fluid_shell$46template._ViewFluidShellHost0);
  dart.setMethodSignature(fluid_shell$46template._ViewFluidShellHost0, () => ({
    __proto__: dart.getMethods(fluid_shell$46template._ViewFluidShellHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(fluid_shell$46template._ViewFluidShellHost0, L0);
  dart.setFieldSignature(fluid_shell$46template._ViewFluidShellHost0, () => ({
    __proto__: dart.getFields(fluid_shell$46template._ViewFluidShellHost0.__proto__),
    [_FluidTheme_0_5]: dart.fieldType(dart.legacy(theme.FluidTheme))
  }));
  var C1;
  fluid_shell$46template.createFluidShellFactory = function createFluidShellFactory() {
    return new (ComponentFactoryOfFluidShellL()).new("fluid-shell", C1 || CT.C1);
  };
  fluid_shell$46template.viewFactory_FluidShellHost0 = function viewFactory_FluidShellHost0() {
    return new fluid_shell$46template._ViewFluidShellHost0.new();
  };
  fluid_shell$46template.initReflector = function initReflector() {
    if (dart.test(fluid_shell$46template._visited)) {
      return;
    }
    fluid_shell$46template._visited = true;
  };
  dart.copyProperties(fluid_shell$46template, {
    get FluidShellNgFactory() {
      return fluid_shell$46template._FluidShellNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(fluid_shell$46template, {
    /*fluid_shell$46template.styles$FluidShell*/get styles$FluidShell() {
      return [shell$46css$46shim.styles];
    },
    /*fluid_shell$46template._FluidShellNgFactory*/get _FluidShellNgFactory() {
      return C2 || CT.C2;
    },
    /*fluid_shell$46template.styles$FluidShellHost*/get styles$FluidShellHost() {
      return C3 || CT.C3;
    },
    /*fluid_shell$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/shell/fluid_shell.template", {
    "package:fluix_web/fluix/shell/fluid_shell.template.dart": fluid_shell$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fluid_shell.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6BI,uBAAgB,2BAAY,qDAAqD;IACnF;;AAI4B,6BAAmB,AAAK;AACjB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACzB,oBAAU,uBAAmB,gBAAgB,EAAE;AACpB,MAAjC,AAAK,aAAQ,gBAAgB,EAAE;AACzB,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACX,MAA1C,AAAK,sBAAiB,KAAK,EAAE;AACT,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,oBAAU,uBAAmB,KAAK,EAAE;AACpB,MAAtB,AAAK,aAAQ,KAAK,EAAE;AACd,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACA,MAA1C,AAAK,sBAAiB,KAAK,EAAE;AACsB,MAAnD,yBAAqB,KAAK,EAAE,SAAS;AACjB,MAApB,AAAK,cAAS,KAAK;AACG,MAAtB,AAAK,aAAQ,KAAK,EAAE;IACtB;;AAGyB,MAAvB,0DAAmB;IACrB;;AAGM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC+E,QAAnG,0DAAoB,SAAiC,2CAAO,0CAAmB;AAC/E,sBAAY;AACsD,UAAxC;;;AAGC,MAAxB,uBAAkB,MAAM;IAC/B;;yDAzC6B,YAAgB;AAAe,oEAAM,UAAU,EAAE,WAAW;AAC7D,IAA1B,AAAK;AAC2D,uBAA3D,kBAAsB,AAAS,8BAAc;EACpD;;;;;;;;;MAJ+B,uDAAgB;;;;;;;;AA4DA,MAAxC,qBAAgB,+CAAgB,MAAM;AACrC,kBAAa,AAAc;AACW,MAAvC,wBAA2B;AACyB,MAApD,iBAAoB,+BAAgB;AACjB,MAAxB,AAAK,kBAAa,KAAK;IACzB;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,gCAAgB,AAAE,MAAG,SAAS;AAC3D,cAAY;;AAEd,YAAO,eAAc;IACvB;;AAIO,uBAAkB;AACvB,qBAAe,gDAAwB,UAAU;AACtB,QAApB,AAAU;;AAEiB,MAA7B,AAAc;IACrB;;;IAzBoB;;;EA0BtB;;;;;;;;;;;;;;;AAhCE,UAAO,2CAAiB;EAC1B;;AAkCE,UAAO;EACT;;AAIE,kBAAI;AACF;;AAEa,IAAf,kCAAW;EACb;;;AAhDE,YAAO;IACT;;;;;;;MAnDoB,wCAAiB;YAAG,EAAS;;MAgD3C,2CAAoB;;;MASN,4CAAqB;;;MAmCrC,+BAAQ;YAAG","file":"fluid_shell.template.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__shell__fluid_shell$46template: fluid_shell$46template
  };
}));

//# sourceMappingURL=fluid_shell.template.unsound.ddc.js.map
