define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/fluix_web/theme/theme'], (function load__packages__fluix_web__fluix__shell__fluid_shell(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__fluix_web__theme__theme) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const theme = packages__fluix_web__theme__theme.theme__theme;
  var fluid_shell = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/shell/fluid_shell.dart";
  var theme$ = dart.privateName(fluid_shell, "FluidShell.theme");
  var brightness = dart.privateName(fluid_shell, "FluidShell.brightness");
  var themeService$ = dart.privateName(fluid_shell, "FluidShell.themeService");
  fluid_shell.FluidShell = class FluidShell extends core.Object {
    get theme() {
      return this[theme$];
    }
    set theme(value) {
      this[theme$] = value;
    }
    get brightness() {
      return this[brightness];
    }
    set brightness(value) {
      this[brightness] = value;
    }
    get themeService() {
      return this[themeService$];
    }
    set themeService(value) {
      this[themeService$] = value;
    }
    ngOnInit() {
      if (this.theme != null) this.themeService.setThemeFromString(this.theme, {brightness: this.brightness});
    }
  };
  (fluid_shell.FluidShell.new = function(themeService) {
    this[theme$] = null;
    this[brightness] = null;
    this[themeService$] = themeService;
    ;
  }).prototype = fluid_shell.FluidShell.prototype;
  dart.addTypeTests(fluid_shell.FluidShell);
  dart.addTypeCaches(fluid_shell.FluidShell);
  fluid_shell.FluidShell[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(fluid_shell.FluidShell, () => ({
    __proto__: dart.getMethods(fluid_shell.FluidShell.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fluid_shell.FluidShell, L0);
  dart.setFieldSignature(fluid_shell.FluidShell, () => ({
    __proto__: dart.getFields(fluid_shell.FluidShell.__proto__),
    theme: dart.fieldType(dart.legacy(core.String)),
    brightness: dart.fieldType(dart.legacy(core.String)),
    themeService: dart.fieldType(dart.legacy(theme.FluidTheme))
  }));
  dart.trackLibraries("packages/fluix_web/fluix/shell/fluid_shell", {
    "package:fluix_web/fluix/shell/fluid_shell.dart": fluid_shell
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fluid_shell.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAeyB;;;;;;IACK;;;;;;IACjB;;;;;;;AAMT,UAAG,cAAS,MAAM,AAAa,AAAgD,qCAA7B,yBAAkB;IACtE;;yCALgB;IAJO;IACK;IAGZ;;EAAa","file":"fluid_shell.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__shell__fluid_shell: fluid_shell
  };
}));

//# sourceMappingURL=fluid_shell.unsound.ddc.js.map
