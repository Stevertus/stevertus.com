define(['dart_sdk', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks'], (function load__packages__fluix_web__fluix__modal__modal(dart_sdk, packages__angular_compiler__v1__src__metadata__lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  var modal = Object.create(dart.library);
  var modal_service = Object.create(dart.library);
  var $append = dartx.append;
  var $classes = dartx.classes;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $_get = dartx._get;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FluidModalL = () => (FluidModalL = dart.constFn(dart.legacy(modal.FluidModal)))();
  var IdentityMapOfStringL$FluidModalL = () => (IdentityMapOfStringL$FluidModalL = dart.constFn(_js_helper.IdentityMap$(StringL(), FluidModalL())))();
  const CT = Object.create(null);
  var L0 = "package:fluix_web/fluix/modal/modal.dart";
  var L1 = "package:fluix_web/fluix/modal/modal_service.dart";
  var modalService$ = dart.privateName(modal, "FluidModal.modalService");
  var element$ = dart.privateName(modal, "FluidModal.element");
  var id = dart.privateName(modal, "FluidModal.id");
  var title = dart.privateName(modal, "FluidModal.title");
  modal.FluidModal = class FluidModal extends core.Object {
    get modalService() {
      return this[modalService$];
    }
    set modalService(value) {
      this[modalService$] = value;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
    ngOnInit() {
      if (this.id != null) {
        html.document.body[$append](this.element);
        this.modalService.add(this);
      } else {
        this.open();
      }
    }
    open() {
      this.element[$classes].add("fluidModal-open");
    }
    close() {
      this.element[$classes].remove("fluidModal-open");
    }
    ngOnDestroy() {
      if (this.id != null) {
        this.modalService.remove(this.id);
      }
    }
  };
  (modal.FluidModal.new = function(modalService, element) {
    this[id] = null;
    this[title] = null;
    this[modalService$] = modalService;
    this[element$] = element;
    ;
  }).prototype = modal.FluidModal.prototype;
  dart.addTypeTests(modal.FluidModal);
  dart.addTypeCaches(modal.FluidModal);
  modal.FluidModal[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(modal.FluidModal, () => ({
    __proto__: dart.getMethods(modal.FluidModal.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(modal.FluidModal, L0);
  dart.setFieldSignature(modal.FluidModal, () => ({
    __proto__: dart.getFields(modal.FluidModal.__proto__),
    modalService: dart.fieldType(dart.legacy(modal_service.ModalService)),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    id: dart.fieldType(dart.legacy(core.String)),
    title: dart.fieldType(dart.legacy(core.String))
  }));
  modal_service.ModalService = class ModalService extends core.Object {
    add(modal) {
      if (modal.id != null) {
        modal_service.modals[$_set](modal.id, modal);
      }
    }
    remove(id) {
      modal_service.modals[$remove](id);
    }
    open(id) {
      let mod = modal_service.modals[$_get](id);
      if (mod != null) mod.open();
    }
    close(id) {
      let mod = modal_service.modals[$_get](id);
      if (mod != null) mod.close();
    }
  };
  (modal_service.ModalService.new = function() {
    ;
  }).prototype = modal_service.ModalService.prototype;
  dart.addTypeTests(modal_service.ModalService);
  dart.addTypeCaches(modal_service.ModalService);
  dart.setMethodSignature(modal_service.ModalService, () => ({
    __proto__: dart.getMethods(modal_service.ModalService.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(modal.FluidModal)]),
    remove: dart.fnType(dart.void, [dart.legacy(core.String)]),
    open: dart.fnType(dart.void, [dart.legacy(core.String)]),
    close: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(modal_service.ModalService, L1);
  dart.defineLazy(modal_service, {
    /*modal_service.modals*/get modals() {
      return new (IdentityMapOfStringL$FluidModalL()).new();
    }
  }, true);
  dart.trackLibraries("packages/fluix_web/fluix/modal/modal", {
    "package:fluix_web/fluix/modal/modal.dart": modal,
    "package:fluix_web/fluix/modal/modal_service.dart": modal_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.dart","modal_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IACD;;;;;;IAKL;;;;;;IAGA;;;;;;;AAIL,UAAI,WAAM;AACqB,QAA7B,AAAS,AAAK,4BAAO;AACC,QAAtB,AAAa,sBAAI;;AAEX,QAAN;;IAEJ;;AAGwC,MAAtC,AAAQ,AAAQ,2BAAI;IACtB;;AAG2C,MAAzC,AAAQ,AAAQ,8BAAO;IACzB;;AAGE,UAAI,WAAM;AACe,QAAvB,AAAa,yBAAO;;IAGxB;;mCA/BgB,cAAmB;IAG5B;IAGA;IANS;IAAmB;;EAAQ;;;;;;;;;;;;;;;;;;;;QCZvB;AAElB,UAAI,AAAM,KAAD,OAAO;AACU,QAAxB,AAAM,4BAAC,AAAM,KAAD,KAAO,KAAK;;IAE5B;WAEmB;AAEA,MAAjB,AAAO,8BAAO,EAAE;IAClB;SAEiB;AAET,gBAAM,AAAM,4BAAC,EAAE;AACrB,UAAI,GAAG,IAAI,MAAM,AAAI,AAAM,GAAP;IACtB;UAEkB;AAEV,gBAAM,AAAM,4BAAC,EAAE;AACrB,UAAI,GAAG,IAAI,MAAM,AAAI,AAAO,GAAR;IACtB;;;;EACF;;;;;;;;;;;;MA1B8B,oBAAM;YAAG","file":"modal.unsound.ddc.js"}');
  // Exports:
  return {
    fluix__modal__modal: modal,
    fluix__modal__modal_service: modal_service
  };
}));

//# sourceMappingURL=modal.unsound.ddc.js.map
