define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular__security(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_sanitization_service_impl = packages__angular__src__bootstrap__modules.src__security__dom_sanitization_service_impl;
  var security = Object.create(dart.library);
  var safe_inner_html = Object.create(dart.library);
  var $setInnerHtml = dartx.setInnerHtml;
  var SafeHtmlImplL = () => (SafeHtmlImplL = dart.constFn(dart.legacy(dom_sanitization_service_impl.SafeHtmlImpl)))();
  const CT = Object.create(null);
  var L0 = "package:angular/src/security/safe_inner_html.dart";
  var _element$ = dart.privateName(safe_inner_html, "_element");
  safe_inner_html.SafeInnerHtmlDirective = class SafeInnerHtmlDirective extends core.Object {
    set safeInnerHtml(safeInnerHtml) {
      if (SafeHtmlImplL().is(safeInnerHtml)) {
        this[_element$][$setInnerHtml](safeInnerHtml.changingThisWillBypassSecurityTrust, {treeSanitizer: html.NodeTreeSanitizer.trusted});
      } else if (safeInnerHtml == null) {
        this[_element$][$setInnerHtml]("");
      } else {
        dart.throw(new core.UnsupportedError.new("SafeHtml required (got " + dart.str(safeInnerHtml) + ")"));
      }
    }
  };
  (safe_inner_html.SafeInnerHtmlDirective.new = function(_element) {
    this[_element$] = _element;
    ;
  }).prototype = safe_inner_html.SafeInnerHtmlDirective.prototype;
  dart.addTypeTests(safe_inner_html.SafeInnerHtmlDirective);
  dart.addTypeCaches(safe_inner_html.SafeInnerHtmlDirective);
  dart.setSetterSignature(safe_inner_html.SafeInnerHtmlDirective, () => ({
    __proto__: dart.getSetters(safe_inner_html.SafeInnerHtmlDirective.__proto__),
    safeInnerHtml: dart.dynamic
  }));
  dart.setLibraryUri(safe_inner_html.SafeInnerHtmlDirective, L0);
  dart.setFieldSignature(safe_inner_html.SafeInnerHtmlDirective, () => ({
    __proto__: dart.getFields(safe_inner_html.SafeInnerHtmlDirective.__proto__),
    [_element$]: dart.finalFieldType(dart.legacy(html.Element))
  }));
  dart.trackLibraries("packages/angular/security", {
    "package:angular/security.dart": security,
    "package:angular/src/security/safe_inner_html.dart": safe_inner_html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/security/safe_inner_html.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;sBA4CoB;AAChB,UAAkB,mBAAd,aAAa;AAId,QAHD,AAAS,+BACP,AAAc,aAAD,sDACoB;YAE9B,KAAI,AAAc,aAAD,IAAI;AACD,QAAzB,AAAS,+BAAa;;AAUrB,QAFD,WAAM,8BACJ,AAAwC,qCAAf,aAAa;;IAG5C;;;IAtB4B;;EAAS","file":"security.unsound.ddc.js"}');
  // Exports:
  return {
    security: security,
    src__security__safe_inner_html: safe_inner_html
  };
}));

//# sourceMappingURL=security.unsound.ddc.js.map
