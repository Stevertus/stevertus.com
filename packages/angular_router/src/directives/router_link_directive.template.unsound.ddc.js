define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_router/src/constants'], (function load__packages__angular_router__src__directives__router_link_directive_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_router__src__constants) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  var router_link_directive$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_router/src/directives/router_link_directive.template.dart";
  var _expr_0 = dart.privateName(router_link_directive$46template, "_expr_0");
  var instance$ = dart.privateName(router_link_directive$46template, "RouterLinkNgCd.instance");
  router_link_directive$46template.RouterLinkNgCd = class RouterLinkNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.visibleHref;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, null, null))) {
        dom_helpers.updateAttribute(el, "href", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (router_link_directive$46template.RouterLinkNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    ;
  }).prototype = router_link_directive$46template.RouterLinkNgCd.prototype;
  dart.addTypeTests(router_link_directive$46template.RouterLinkNgCd);
  dart.addTypeCaches(router_link_directive$46template.RouterLinkNgCd);
  dart.setMethodSignature(router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getMethods(router_link_directive$46template.RouterLinkNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(render_view.RenderView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(router_link_directive$46template.RouterLinkNgCd, L0);
  dart.setFieldSignature(router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getFields(router_link_directive$46template.RouterLinkNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(router_link_directive.RouterLink)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  router_link_directive$46template.initReflector = function initReflector() {
  };
  dart.trackLibraries("packages/angular_router/src/directives/router_link_directive.template", {
    "package:angular_router/src/directives/router_link_directive.template.dart": router_link_directive$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["router_link_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAe2B;;;;;;sBAGiB,MAAsB;AACxD,sBAAiB,AAAS;AAChC,oBAAI,2BAA0B,eAAS,SAAS,EAAE,MAAM;AACR,QAA9C,4BAAwB,EAAE,EAAE,QAAQ,SAAS;AACrB,QAAnB,gBAAU,SAAS;;IAE5B;;kEAPoB;IADhB;IACgB;;EAAS;;;;;;;;;;;;;;EAWT","file":"router_link_directive.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive$46template: router_link_directive$46template
  };
}));

//# sourceMappingURL=router_link_directive.template.unsound.ddc.js.map
