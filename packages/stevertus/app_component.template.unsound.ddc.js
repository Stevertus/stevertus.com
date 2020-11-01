define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/bootstrap/modules', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/constants', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/ng_translate/src/translation_directive', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/stevertus/src/components/doc_grid/grid.css.shim', 'packages/fluix_web/fluix/sidebar/sidebar.template', 'packages/fluix_web/fluix/sidebar/sidebar', 'packages/fluix_web/fluix/sidebar/sidebar-item/item.template', 'packages/fluix_web/fluix/sidebar/sidebar-item/item', 'packages/angular/src/runtime/text_binding', 'packages/fluix_web/fluix/appbar/appbar.template', 'packages/fluix_web/fluix/appbar/appbar', 'packages/fluix_web/fluix/bar-align/align.template', 'packages/fluix_web/fluix/bar-align/align', 'packages/fluix_web/fluix/button/button.template', 'packages/fluix_web/fluix/button/button', 'packages/fluix_web/fluix/dropdown/dropdown.template', 'packages/fluix_web/fluix/dropdown/dropdown', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/shell/fluid_shell.template', 'packages/fluix_web/theme/theme', 'packages/fluix_web/fluix/shell/fluid_shell', 'packages/stevertus/app_component', 'packages/stevertus/app_component.css.shim'], (function load__packages__stevertus__app_component_template(dart_sdk, packages__angular__src__core__change_detection__pipe_transform, packages__angular__src__bootstrap__modules, packages__angular_router__src__directives__router_link_directive$46template, packages__angular_router__src__constants, packages__angular_router__src__directives__router_outlet_directive, packages__ng_translate__src__translation_directive, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__stevertus__src__components__doc_grid__grid$46css$46shim, packages__fluix_web__fluix__sidebar__sidebar$46template, packages__fluix_web__fluix__sidebar__sidebar, packages__fluix_web__fluix__sidebar__sidebar_item__item$46template, packages__fluix_web__fluix__sidebar__sidebar_item__item, packages__angular__src__runtime__text_binding, packages__fluix_web__fluix__appbar__appbar$46template, packages__fluix_web__fluix__appbar__appbar, packages__fluix_web__fluix__bar_align__align$46template, packages__fluix_web__fluix__bar_align__align, packages__fluix_web__fluix__button__button$46template, packages__fluix_web__fluix__button__button, packages__fluix_web__fluix__dropdown__dropdown$46template, packages__fluix_web__fluix__dropdown__dropdown, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__shell__fluid_shell$46template, packages__fluix_web__theme__theme, packages__fluix_web__fluix__shell__fluid_shell, packages__stevertus__app_component, packages__stevertus__app_component$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const router_link_directive$46template = packages__angular_router__src__directives__router_link_directive$46template.src__directives__router_link_directive$46template;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const router_outlet_directive = packages__angular_router__src__directives__router_outlet_directive.src__directives__router_outlet_directive;
  const router_outlet_token = packages__angular_router__src__directives__router_outlet_directive.src__router__router_outlet_token;
  const router_hook = packages__angular_router__src__directives__router_outlet_directive.src__router_hook;
  const translation_directive = packages__ng_translate__src__translation_directive.src__translation_directive;
  const translation_service = packages__ng_translate__src__translation_directive.src__translation_service;
  const translation_pipe = packages__ng_translate__src__translation_directive.src__translation_pipe;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const footer = packages__stevertus__src__components__doc_grid__grid$46css$46shim.src__components__footer__footer;
  const sidebar = packages__stevertus__src__components__doc_grid__grid$46css$46shim.src__components__sidebar__sidebar;
  const header = packages__stevertus__src__components__doc_grid__grid$46css$46shim.src__components__header__header;
  const routes = packages__stevertus__src__components__doc_grid__grid$46css$46shim.src__routes;
  const sidebar$46template = packages__fluix_web__fluix__sidebar__sidebar$46template.fluix__sidebar__sidebar$46template;
  const sidebar$ = packages__fluix_web__fluix__sidebar__sidebar.fluix__sidebar__sidebar;
  const item$46template = packages__fluix_web__fluix__sidebar__sidebar_item__item$46template.fluix__sidebar__sidebar_item__item$46template;
  const item = packages__fluix_web__fluix__sidebar__sidebar_item__item.fluix__sidebar__sidebar_item__item;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const appbar$46template = packages__fluix_web__fluix__appbar__appbar$46template.fluix__appbar__appbar$46template;
  const appbar = packages__fluix_web__fluix__appbar__appbar.fluix__appbar__appbar;
  const align$46template = packages__fluix_web__fluix__bar_align__align$46template.fluix__bar_align__align$46template;
  const align = packages__fluix_web__fluix__bar_align__align.fluix__bar_align__align;
  const button$46template = packages__fluix_web__fluix__button__button$46template.fluix__button__button$46template;
  const button = packages__fluix_web__fluix__button__button.fluix__button__button;
  const dropdown$46template = packages__fluix_web__fluix__dropdown__dropdown$46template.fluix__dropdown__dropdown$46template;
  const dropdown = packages__fluix_web__fluix__dropdown__dropdown.fluix__dropdown__dropdown;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const fluid_shell$46template = packages__fluix_web__fluix__shell__fluid_shell$46template.fluix__shell__fluid_shell$46template;
  const theme = packages__fluix_web__theme__theme.theme__theme;
  const fluid_shell = packages__fluix_web__fluix__shell__fluid_shell.fluix__shell__fluid_shell;
  const app_component = packages__stevertus__app_component.app_component;
  const app_component$46css$46shim = packages__stevertus__app_component$46css$46shim.app_component$46css$46shim;
  var footer$46template = Object.create(dart.library);
  var footer$46css$46shim = Object.create(dart.library);
  var sidebar$46template$ = Object.create(dart.library);
  var sidebar$46css$46shim = Object.create(dart.library);
  var header$46template = Object.create(dart.library);
  var header$46css$46shim = Object.create(dart.library);
  var app_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $createElementNS = dartx.createElementNS;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var RouterLinkL = () => (RouterLinkL = dart.constFn(dart.legacy(router_link_directive.RouterLink)))();
  var RouterL = () => (RouterL = dart.constFn(dart.legacy(router.Router)))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location.Location)))();
  var VoidToRouterLinkL = () => (VoidToRouterLinkL = dart.constFn(dart.fnType(RouterLinkL(), [])))();
  var TranslationServiceL = () => (TranslationServiceL = dart.constFn(dart.legacy(translation_service.TranslationService)))();
  var AnchorElementL = () => (AnchorElementL = dart.constFn(dart.legacy(html.AnchorElement)))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FooterComponentL = () => (FooterComponentL = dart.constFn(dart.legacy(footer.FooterComponent)))();
  var VoidToFooterComponentL = () => (VoidToFooterComponentL = dart.constFn(dart.fnType(FooterComponentL(), [])))();
  var ComponentFactoryOfFooterComponentL = () => (ComponentFactoryOfFooterComponentL = dart.constFn(component_factory.ComponentFactory$(FooterComponentL())))();
  var HostViewOfFooterComponentL = () => (HostViewOfFooterComponentL = dart.constFn(host_view.HostView$(FooterComponentL())))();
  var HostViewLOfFooterComponentL = () => (HostViewLOfFooterComponentL = dart.constFn(dart.legacy(HostViewOfFooterComponentL())))();
  var VoidToHostViewLOfFooterComponentL = () => (VoidToHostViewLOfFooterComponentL = dart.constFn(dart.fnType(HostViewLOfFooterComponentL(), [])))();
  var FluidSidebarItemL = () => (FluidSidebarItemL = dart.constFn(dart.legacy(item.FluidSidebarItem)))();
  var JSArrayOfFluidSidebarItemL = () => (JSArrayOfFluidSidebarItemL = dart.constFn(_interceptors.JSArray$(FluidSidebarItemL())))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var SidebarComponentL = () => (SidebarComponentL = dart.constFn(dart.legacy(sidebar.SidebarComponent)))();
  var ComponentFactoryOfSidebarComponentL = () => (ComponentFactoryOfSidebarComponentL = dart.constFn(component_factory.ComponentFactory$(SidebarComponentL())))();
  var HostViewOfSidebarComponentL = () => (HostViewOfSidebarComponentL = dart.constFn(host_view.HostView$(SidebarComponentL())))();
  var HostViewLOfSidebarComponentL = () => (HostViewLOfSidebarComponentL = dart.constFn(dart.legacy(HostViewOfSidebarComponentL())))();
  var VoidToHostViewLOfSidebarComponentL = () => (VoidToHostViewLOfSidebarComponentL = dart.constFn(dart.fnType(HostViewLOfSidebarComponentL(), [])))();
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var TranslationPipeL = () => (TranslationPipeL = dart.constFn(dart.legacy(translation_pipe.TranslationPipe)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var HeaderComponentL = () => (HeaderComponentL = dart.constFn(dart.legacy(header.HeaderComponent)))();
  var VoidToHeaderComponentL = () => (VoidToHeaderComponentL = dart.constFn(dart.fnType(HeaderComponentL(), [])))();
  var ComponentFactoryOfHeaderComponentL = () => (ComponentFactoryOfHeaderComponentL = dart.constFn(component_factory.ComponentFactory$(HeaderComponentL())))();
  var HostViewOfHeaderComponentL = () => (HostViewOfHeaderComponentL = dart.constFn(host_view.HostView$(HeaderComponentL())))();
  var HostViewLOfHeaderComponentL = () => (HostViewLOfHeaderComponentL = dart.constFn(dart.legacy(HostViewOfHeaderComponentL())))();
  var VoidToHostViewLOfHeaderComponentL = () => (VoidToHostViewLOfHeaderComponentL = dart.constFn(dart.fnType(HostViewLOfHeaderComponentL(), [])))();
  var RouterOutletL = () => (RouterOutletL = dart.constFn(dart.legacy(router_outlet_directive.RouterOutlet)))();
  var RouterOutletTokenL = () => (RouterOutletTokenL = dart.constFn(dart.legacy(router_outlet_token.RouterOutletToken)))();
  var RouterHookL = () => (RouterHookL = dart.constFn(dart.legacy(router_hook.RouterHook)))();
  var VoidToRouterOutletL = () => (VoidToRouterOutletL = dart.constFn(dart.fnType(RouterOutletL(), [])))();
  var FluidThemeL = () => (FluidThemeL = dart.constFn(dart.legacy(theme.FluidTheme)))();
  var AppComponentL = () => (AppComponentL = dart.constFn(dart.legacy(app_component.AppComponent)))();
  var ComponentFactoryOfAppComponentL = () => (ComponentFactoryOfAppComponentL = dart.constFn(component_factory.ComponentFactory$(AppComponentL())))();
  var HostViewOfAppComponentL = () => (HostViewOfAppComponentL = dart.constFn(host_view.HostView$(AppComponentL())))();
  var HostViewLOfAppComponentL = () => (HostViewLOfAppComponentL = dart.constFn(dart.legacy(HostViewOfAppComponentL())))();
  var VoidToHostViewLOfAppComponentL = () => (VoidToHostViewLOfAppComponentL = dart.constFn(dart.fnType(HostViewLOfAppComponentL(), [])))();
  const CT = Object.create(null);
  var L1 = "package:stevertus/src/components/sidebar/sidebar.template.dart";
  var L3 = "package:stevertus/app_component.template.dart";
  var L0 = "package:stevertus/src/components/footer/footer.template.dart";
  var L2 = "package:stevertus/src/components/header/header.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(footer$46template.ViewFooterComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C1() {
      return C1 = dart.fn(footer$46template.viewFactory_FooterComponentHost0, VoidToHostViewLOfFooterComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFooterComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "footer"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.fn(sidebar$46template$.ViewSidebarComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C5() {
      return C5 = dart.fn(sidebar$46template$.viewFactory_SidebarComponentHost0, VoidToHostViewLOfSidebarComponentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfSidebarComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "sidebar"
      });
    },
    get C7() {
      return C7 = dart.fn(header$46template.ViewHeaderComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C8() {
      return C8 = dart.fn(header$46template.viewFactory_HeaderComponentHost0, VoidToHostViewLOfHeaderComponentL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ComponentFactoryOfHeaderComponentL().prototype,
        [ComponentFactory__viewFactory]: C8 || CT.C8,
        [ComponentFactory_selector]: "header"
      });
    },
    get C10() {
      return C10 = dart.fn(app_component$46template.ViewAppComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C11() {
      return C11 = dart.fn(app_component$46template.viewFactory_AppComponentHost0, VoidToHostViewLOfAppComponentL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ComponentFactoryOfAppComponentL().prototype,
        [ComponentFactory__viewFactory]: C11 || CT.C11,
        [ComponentFactory_selector]: "my-app"
      });
    }
  }, false);
  var _RouterLink_1_5 = dart.privateName(footer$46template, "_RouterLink_1_5");
  var _RouterLink_9_5 = dart.privateName(footer$46template, "_RouterLink_9_5");
  var _RouterLink_12_5 = dart.privateName(footer$46template, "_RouterLink_12_5");
  var _compView_34 = dart.privateName(footer$46template, "_compView_34");
  var _FluidIcon_34_5 = dart.privateName(footer$46template, "_FluidIcon_34_5");
  var _compView_39 = dart.privateName(footer$46template, "_compView_39");
  var _FluidIcon_39_5 = dart.privateName(footer$46template, "_FluidIcon_39_5");
  var _el_1 = dart.privateName(footer$46template, "_el_1");
  var _el_9 = dart.privateName(footer$46template, "_el_9");
  var _el_12 = dart.privateName(footer$46template, "_el_12");
  var C0;
  footer$46template.ViewFooterComponent0 = class ViewFooterComponent0 extends component_view.ComponentView$(dart.legacy(footer.FooterComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/footer/footer.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_1], "logo");
      dom_helpers.setAttribute(this[_el_1], "routerLink", "/");
      this.addShimC(this[_el_1]);
      this[_RouterLink_1_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_1]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_1]));
      let _el_2 = dom_helpers.appendElement(doc, this[_el_1], "img");
      dom_helpers.setAttribute(_el_2, "alt", "");
      dom_helpers.setAttribute(_el_2, "src", "/assets/logo_blue.svg");
      this.addShimE(_el_2);
      let _el_3 = dom_helpers.appendElement(doc, this[_el_1], "h2");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, "Stevertus");
      let _el_5 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_5, "links");
      this.addShimC(_el_5);
      let _el_6 = dom_helpers.appendElement(doc, _el_5, "a");
      dom_helpers.setAttribute(_el_6, "href", "");
      dom_helpers.setAttribute(_el_6, "ngtranslate", "");
      this.addShimC(HtmlElementL().as(_el_6));
      let _text_7 = dom_helpers.appendText(_el_6, "footer.about");
      translation_directive.TranslationDirective(_el_6, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _text_8 = dom_helpers.appendText(_el_5, " ");
      this[_el_9] = AnchorElementL().as(dom_helpers.appendElement(doc, _el_5, "a"));
      dom_helpers.setAttribute(this[_el_9], "ngtranslate", "");
      dom_helpers.setAttribute(this[_el_9], "routerLink", "/fard");
      this.addShimC(this[_el_9]);
      this[_RouterLink_9_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_9]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_9]));
      let _text_10 = dom_helpers.appendText(this[_el_9], "contact");
      translation_directive.TranslationDirective(this[_el_9], TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _text_11 = dom_helpers.appendText(_el_5, " ");
      this[_el_12] = AnchorElementL().as(dom_helpers.appendElement(doc, _el_5, "a"));
      dom_helpers.setAttribute(this[_el_12], "ngtranslate", "");
      dom_helpers.setAttribute(this[_el_12], "routerLink", "/articles?type=tool");
      this.addShimC(this[_el_12]);
      this[_RouterLink_12_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_12]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_12]));
      let _text_13 = dom_helpers.appendText(this[_el_12], "footer.tools");
      translation_directive.TranslationDirective(this[_el_12], TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_14 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_14, "social");
      this.addShimC(_el_14);
      let _el_15 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_15, "href", "https://www.youtube.com/channel/UCpXIIRHJ_U0LosNt_MIVl4A");
      this.addShimC(HtmlElementL().as(_el_15));
      let _el_16 = dom_helpers.appendElement(doc, _el_15, "img");
      dom_helpers.setAttribute(_el_16, "src", "/assets/social/yt.svg");
      this.addShimE(_el_16);
      let _text_17 = dom_helpers.appendText(_el_14, " ");
      let _el_18 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_18, "href", "https://twitter.com/stevertus");
      this.addShimC(HtmlElementL().as(_el_18));
      let _el_19 = dom_helpers.appendElement(doc, _el_18, "img");
      dom_helpers.setAttribute(_el_19, "src", "/assets/social/twitter.png");
      this.addShimE(_el_19);
      let _text_20 = dom_helpers.appendText(_el_14, " ");
      let _el_21 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_21, "href", "https://discord.gg/McYXVC8");
      this.addShimC(HtmlElementL().as(_el_21));
      let _el_22 = dom_helpers.appendElement(doc, _el_21, "img");
      dom_helpers.setAttribute(_el_22, "src", "/assets/social/discord.png");
      this.addShimE(_el_22);
      let _text_23 = dom_helpers.appendText(_el_14, " ");
      let _el_24 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_24, "href", "https://dmanager.stevertus.com/packs/search/by:Stevertus");
      this.addShimC(HtmlElementL().as(_el_24));
      let _el_25 = dom_helpers.appendElement(doc, _el_24, "img");
      dom_helpers.setAttribute(_el_25, "src", "/assets/social/dmanager.svg");
      this.addShimE(_el_25);
      let _text_26 = dom_helpers.appendText(_el_14, " ");
      let _el_27 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_27, "href", "mailto:contact@stevertus.com");
      this.addShimC(HtmlElementL().as(_el_27));
      let _el_28 = dom_helpers.appendElement(doc, _el_27, "img");
      dom_helpers.setAttribute(_el_28, "src", "/assets/social/mail.svg");
      this.addShimE(_el_28);
      let _text_29 = dom_helpers.appendText(_el_14, " ");
      let _el_30 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_30, "href", "https://github.com/Stevertus");
      this.addShimC(HtmlElementL().as(_el_30));
      let _el_31 = dom_helpers.appendElement(doc, _el_30, "img");
      dom_helpers.setAttribute(_el_31, "src", "/assets/social/github.svg");
      this.addShimE(_el_31);
      let _text_32 = dom_helpers.appendText(_el_14, " ");
      let _el_33 = dom_helpers.appendElement(doc, _el_14, "a");
      dom_helpers.setAttribute(_el_33, "href", "https://github.com/Stevertus");
      this.addShimC(HtmlElementL().as(_el_33));
      this[_compView_34] = new icon$46template.ViewFluidIcon0.new(this, 34);
      let _el_34 = this[_compView_34].rootElement;
      _el_33[$append](_el_34);
      this.addShimC(_el_34);
      this[_FluidIcon_34_5] = new icon.FluidIcon.new(_el_34);
      let _text_35 = dom_helpers.createText("email");
      this[_compView_34].createAndProject(this[_FluidIcon_34_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_35])]));
      let _el_36 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_36, "madein");
      this.addShimC(_el_36);
      let _el_37 = dom_helpers.appendSpan(doc, _el_36);
      dom_helpers.setAttribute(_el_37, "ngtranslate", "");
      this.addShimE(_el_37);
      let _text_38 = dom_helpers.appendText(_el_37, "footer.madewith");
      translation_directive.TranslationDirective(_el_37, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_39] = new icon$46template.ViewFluidIcon0.new(this, 39);
      let _el_39 = this[_compView_39].rootElement;
      _el_36[$append](_el_39);
      this.addShimC(_el_39);
      this[_FluidIcon_39_5] = new icon.FluidIcon.new(_el_39);
      let _text_40 = dom_helpers.createText("heart");
      this[_compView_39].createAndProject(this[_FluidIcon_39_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_40])]));
      let _el_41 = dom_helpers.appendSpan(doc, _el_36);
      dom_helpers.setAttribute(_el_41, "ngtranslate", "");
      this.addShimE(_el_41);
      let _text_42 = dom_helpers.appendText(_el_41, "footer.inG");
      translation_directive.TranslationDirective(_el_41, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_43 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_43, "rights");
      this.addShimC(_el_43);
      let _el_44 = dom_helpers.appendElement(doc, _el_43, "p");
      this.addShimE(_el_44);
      let _el_45 = dom_helpers.appendSpan(doc, _el_44);
      dom_helpers.setAttribute(_el_45, "ngtranslate", "");
      this.addShimE(_el_45);
      let _text_46 = dom_helpers.appendText(_el_45, "footer.rightsReserved");
      translation_directive.TranslationDirective(_el_45, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_47 = dom_helpers.appendElement(doc, _el_44, "a");
      dom_helpers.setAttribute(_el_47, "href", "https://dmanager.stevertus.com/privacy/en");
      dom_helpers.setAttribute(_el_47, "ngtranslate", "");
      this.addShimC(HtmlElementL().as(_el_47));
      let _text_48 = dom_helpers.appendText(_el_47, "footer.privacyPolicy");
      translation_directive.TranslationDirective(_el_47, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _text_49 = dom_helpers.appendText(_el_43, "© 2020 Stevertus");
      this[_el_1][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_1_5].instance, 'onClick')));
      this[_el_9][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_9_5].instance, 'onClick')));
      this[_el_12][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_12_5].instance, 'onClick')));
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_RouterLink_1_5].instance.routerLink = "/";
        this[_RouterLink_9_5].instance.routerLink = "/fard";
        this[_RouterLink_12_5].instance.routerLink = "/articles?type=tool";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_34_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_39_5].ngOnInit();
      }
      this[_RouterLink_1_5].detectHostChanges(this, this[_el_1]);
      this[_RouterLink_9_5].detectHostChanges(this, this[_el_9]);
      this[_RouterLink_12_5].detectHostChanges(this, this[_el_12]);
      this[_compView_34].detectChanges();
      this[_compView_39].detectChanges();
    }
    destroyInternal() {
      this[_compView_34].destroyInternalState();
      this[_compView_39].destroyInternalState();
      this[_RouterLink_1_5].instance.ngOnDestroy();
      this[_RouterLink_9_5].instance.ngOnDestroy();
      this[_RouterLink_12_5].instance.ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      footer$46template.ViewFooterComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = footer$46template.ViewFooterComponent0._componentStyles;
      if (styles == null) {
        footer$46template.ViewFooterComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(footer$46template.styles$FooterComponent, footer$46template.ViewFooterComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C0 || CT.C0);
        }
      }
      this.componentStyles = styles;
    }
  };
  (footer$46template.ViewFooterComponent0.new = function(parentView, parentIndex) {
    this[_RouterLink_1_5] = null;
    this[_RouterLink_9_5] = null;
    this[_RouterLink_12_5] = null;
    this[_compView_34] = null;
    this[_FluidIcon_34_5] = null;
    this[_compView_39] = null;
    this[_FluidIcon_39_5] = null;
    this[_el_1] = null;
    this[_el_9] = null;
    this[_el_12] = null;
    footer$46template.ViewFooterComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("footer"));
  }).prototype = footer$46template.ViewFooterComponent0.prototype;
  dart.addTypeTests(footer$46template.ViewFooterComponent0);
  dart.addTypeCaches(footer$46template.ViewFooterComponent0);
  dart.setMethodSignature(footer$46template.ViewFooterComponent0, () => ({
    __proto__: dart.getMethods(footer$46template.ViewFooterComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(footer$46template.ViewFooterComponent0, L0);
  dart.setFieldSignature(footer$46template.ViewFooterComponent0, () => ({
    __proto__: dart.getFields(footer$46template.ViewFooterComponent0.__proto__),
    [_RouterLink_1_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_RouterLink_9_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_RouterLink_12_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_compView_34]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_34_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_compView_39]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_39_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_9]: dart.fieldType(dart.legacy(html.AnchorElement)),
    [_el_12]: dart.fieldType(dart.legacy(html.AnchorElement))
  }));
  dart.defineLazy(footer$46template.ViewFooterComponent0, {
    /*footer$46template.ViewFooterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  footer$46template._ViewFooterComponentHost0 = class _ViewFooterComponentHost0 extends host_view.HostView$(dart.legacy(footer.FooterComponent)) {
    build() {
      this.componentView = new footer$46template.ViewFooterComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FooterComponentL(), dart.wrapType(FooterComponentL()), dart.fn(() => new footer.FooterComponent.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToFooterComponentL())) : new footer.FooterComponent.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (footer$46template._ViewFooterComponentHost0.new = function() {
    footer$46template._ViewFooterComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = footer$46template._ViewFooterComponentHost0.prototype;
  dart.addTypeTests(footer$46template._ViewFooterComponentHost0);
  dart.addTypeCaches(footer$46template._ViewFooterComponentHost0);
  dart.setMethodSignature(footer$46template._ViewFooterComponentHost0, () => ({
    __proto__: dart.getMethods(footer$46template._ViewFooterComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(footer$46template._ViewFooterComponentHost0, L0);
  var C1;
  footer$46template.createFooterComponentFactory = function createFooterComponentFactory() {
    return new (ComponentFactoryOfFooterComponentL()).new("footer", C1 || CT.C1);
  };
  footer$46template.viewFactory_FooterComponentHost0 = function viewFactory_FooterComponentHost0() {
    return new footer$46template._ViewFooterComponentHost0.new();
  };
  footer$46template.initReflector = function initReflector() {
    if (dart.test(footer$46template._visited)) {
      return;
    }
    footer$46template._visited = true;
  };
  dart.copyProperties(footer$46template, {
    get FooterComponentNgFactory() {
      return footer$46template._FooterComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C3;
  dart.defineLazy(footer$46template, {
    /*footer$46template.styles$FooterComponent*/get styles$FooterComponent() {
      return [footer$46css$46shim.styles];
    },
    /*footer$46template._FooterComponentNgFactory*/get _FooterComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*footer$46template.styles$FooterComponentHost*/get styles$FooterComponentHost() {
      return C3 || CT.C3;
    },
    /*footer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(footer$46css$46shim, {
    /*footer$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;background:#e9e9ed;min-height:414px;display:flex;flex-direction:column;justify-content:center;align-items:center}.rights._ngcontent-%ID%{background:#d5d5d9;height:70px;display:flex;flex-direction:column;justify-content:center;align-items:center}.rights._ngcontent-%ID% p._ngcontent-%ID%{margin:4px 0}.rights._ngcontent-%ID% p._ngcontent-%ID% a._ngcontent-%ID%{color:black;font-weight:700;text-decoration:none;margin:0 4px}.rights._ngcontent-%ID% p._ngcontent-%ID% a:hover._ngcontent-%ID%{color:var(--primary)}.madein._ngcontent-%ID% fluid-icon._ngcontent-%ID%{padding:0 4px;color:var(--primary)}.logo._ngcontent-%ID%{cursor:pointer;display:flex;flex-direction:row;align-items:center;margin:40px 0}.logo._ngcontent-%ID% h2._ngcontent-%ID%{margin:0;margin-left:16px;color:#767680}.links._ngcontent-%ID%{padding:24px 0}.links._ngcontent-%ID% a._ngcontent-%ID%{padding:8px;color:black;text-decoration:none}.links._ngcontent-%ID% a:hover._ngcontent-%ID%{color:var(--primary)}.social._ngcontent-%ID%{width:380px;display:flex;flex-direction:row;justify-content:space-between;margin-top:24px;margin-bottom:60px}.social._ngcontent-%ID% img._ngcontent-%ID%{height:25px;margin-right:auto}"];
    }
  }, true);
  var _compView_0 = dart.privateName(sidebar$46template$, "_compView_0");
  var _FluidSidebar_0_5 = dart.privateName(sidebar$46template$, "_FluidSidebar_0_5");
  var _compView_1 = dart.privateName(sidebar$46template$, "_compView_1");
  var _FluidSidebarItem_1_5 = dart.privateName(sidebar$46template$, "_FluidSidebarItem_1_5");
  var _RouterLink_1_6 = dart.privateName(sidebar$46template$, "_RouterLink_1_6");
  var _expr_3 = dart.privateName(sidebar$46template$, "_expr_3");
  var _el_1$ = dart.privateName(sidebar$46template$, "_el_1");
  var C4;
  sidebar$46template$.ViewSidebarComponent0 = class ViewSidebarComponent0 extends component_view.ComponentView$(dart.legacy(sidebar.SidebarComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/sidebar/sidebar.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new sidebar$46template.ViewFluidSidebar0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FluidSidebar_0_5] = new sidebar$.FluidSidebar.new();
      this[_compView_1] = new item$46template.ViewFluidSidebarItem0.new(this, 1);
      this[_el_1$] = this[_compView_1].rootElement;
      dom_helpers.setAttribute(this[_el_1$], "icon", "home");
      dom_helpers.setAttribute(this[_el_1$], "routerLink", "");
      this.addShimC(HtmlElementL().as(this[_el_1$]));
      this[_FluidSidebarItem_1_5] = new item.FluidSidebarItem.new();
      this[_RouterLink_1_6] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_1$]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_1$]));
      this[_compView_1].createAndProject(this[_FluidSidebarItem_1_5], JSArrayOfObjectL().of([C3 || CT.C3]));
      let doc = html.document;
      let _el_2 = doc[$createElement]("a");
      dom_helpers.setAttribute(_el_2, "href", "https://objd.stevertus.com");
      this.addShimC(HtmlElementL().as(_el_2));
      let _el_3 = dom_helpers.appendElement(doc, _el_2, "img");
      dom_helpers.setAttribute(_el_3, "alt", "");
      dom_helpers.setAttribute(_el_3, "src", "/assets/logos/objd.png");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.createText(" ");
      let _el_5 = doc[$createElement]("a");
      dom_helpers.setAttribute(_el_5, "href", "https://stevertus.com/mcscript");
      this.addShimC(HtmlElementL().as(_el_5));
      let _el_6 = dom_helpers.appendElement(doc, _el_5, "img");
      dom_helpers.setAttribute(_el_6, "alt", "");
      dom_helpers.setAttribute(_el_6, "src", "/assets/logos/mcscript.png");
      this.addShimE(_el_6);
      let _text_7 = dom_helpers.createText(" ");
      let _el_8 = doc[$createElement]("a");
      dom_helpers.setAttribute(_el_8, "href", "https://dmanager.stevertus.com");
      this.addShimC(HtmlElementL().as(_el_8));
      let _el_9 = dom_helpers.appendElement(doc, _el_8, "img");
      dom_helpers.setAttribute(_el_9, "alt", "");
      dom_helpers.setAttribute(_el_9, "src", "/assets/logos/dmanager.png");
      this.addShimE(_el_9);
      let _text_10 = dom_helpers.createText(" ");
      let _el_11 = doc[$createElement]("a");
      dom_helpers.setAttribute(_el_11, "href", "https://stevertus.com/worldedit/package");
      this.addShimC(HtmlElementL().as(_el_11));
      let _el_12 = dom_helpers.appendElement(doc, _el_11, "img");
      dom_helpers.setAttribute(_el_12, "alt", "");
      dom_helpers.setAttribute(_el_12, "src", "/assets/logos/worldedit.png");
      this.addShimE(_el_12);
      this[_FluidSidebar_0_5].children = JSArrayOfFluidSidebarItemL().of([this[_FluidSidebarItem_1_5]]);
      this[_compView_0].createAndProject(this[_FluidSidebar_0_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([this[_el_1$], _el_2, _text_4, _el_5, _text_7, _el_8, _text_10, _el_11])]));
      this[_el_1$][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_1_6].instance, 'onClick')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidSidebar_0_5].fixed = false;
        this[_FluidSidebar_0_5].expandable = false;
        this[_FluidSidebarItem_1_5].icon = "home";
      }
      let currVal_3 = _ctx.isHome;
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "isHome", "package:stevertus/src/components/sidebar/sidebar.html"))) {
        this[_FluidSidebarItem_1_5].active = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (dart.test(firstCheck)) {
        this[_RouterLink_1_6].instance.routerLink = "";
      }
      this[_RouterLink_1_6].detectHostChanges(this[_compView_1], this[_el_1$]);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_RouterLink_1_6].instance.ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      sidebar$46template$.ViewSidebarComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = sidebar$46template$.ViewSidebarComponent0._componentStyles;
      if (styles == null) {
        sidebar$46template$.ViewSidebarComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(sidebar$46template$.styles$SidebarComponent, sidebar$46template$.ViewSidebarComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C4 || CT.C4);
        }
      }
      this.componentStyles = styles;
    }
  };
  (sidebar$46template$.ViewSidebarComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidSidebar_0_5] = null;
    this[_compView_1] = null;
    this[_FluidSidebarItem_1_5] = null;
    this[_RouterLink_1_6] = null;
    this[_expr_3] = null;
    this[_el_1$] = null;
    sidebar$46template$.ViewSidebarComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("sidebar"));
  }).prototype = sidebar$46template$.ViewSidebarComponent0.prototype;
  dart.addTypeTests(sidebar$46template$.ViewSidebarComponent0);
  dart.addTypeCaches(sidebar$46template$.ViewSidebarComponent0);
  dart.setMethodSignature(sidebar$46template$.ViewSidebarComponent0, () => ({
    __proto__: dart.getMethods(sidebar$46template$.ViewSidebarComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template$.ViewSidebarComponent0, L1);
  dart.setFieldSignature(sidebar$46template$.ViewSidebarComponent0, () => ({
    __proto__: dart.getFields(sidebar$46template$.ViewSidebarComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(sidebar$46template.ViewFluidSidebar0)),
    [_FluidSidebar_0_5]: dart.fieldType(dart.legacy(sidebar$.FluidSidebar)),
    [_compView_1]: dart.fieldType(dart.legacy(item$46template.ViewFluidSidebarItem0)),
    [_FluidSidebarItem_1_5]: dart.fieldType(dart.legacy(item.FluidSidebarItem)),
    [_RouterLink_1_6]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_1$]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(sidebar$46template$.ViewSidebarComponent0, {
    /*sidebar$46template$.ViewSidebarComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  sidebar$46template$._ViewSidebarComponentHost0 = class _ViewSidebarComponentHost0 extends host_view.HostView$(dart.legacy(sidebar.SidebarComponent)) {
    build() {
      this.componentView = new sidebar$46template$.ViewSidebarComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new sidebar.SidebarComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (sidebar$46template$._ViewSidebarComponentHost0.new = function() {
    sidebar$46template$._ViewSidebarComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = sidebar$46template$._ViewSidebarComponentHost0.prototype;
  dart.addTypeTests(sidebar$46template$._ViewSidebarComponentHost0);
  dart.addTypeCaches(sidebar$46template$._ViewSidebarComponentHost0);
  dart.setMethodSignature(sidebar$46template$._ViewSidebarComponentHost0, () => ({
    __proto__: dart.getMethods(sidebar$46template$._ViewSidebarComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sidebar$46template$._ViewSidebarComponentHost0, L1);
  var C5;
  sidebar$46template$.createSidebarComponentFactory = function createSidebarComponentFactory() {
    return new (ComponentFactoryOfSidebarComponentL()).new("sidebar", C5 || CT.C5);
  };
  sidebar$46template$.viewFactory_SidebarComponentHost0 = function viewFactory_SidebarComponentHost0() {
    return new sidebar$46template$._ViewSidebarComponentHost0.new();
  };
  sidebar$46template$.initReflector = function initReflector$() {
    if (dart.test(sidebar$46template$._visited)) {
      return;
    }
    sidebar$46template$._visited = true;
  };
  dart.copyProperties(sidebar$46template$, {
    get SidebarComponentNgFactory() {
      return sidebar$46template$._SidebarComponentNgFactory;
    }
  });
  var C6;
  dart.defineLazy(sidebar$46template$, {
    /*sidebar$46template$.styles$SidebarComponent*/get styles$SidebarComponent() {
      return [sidebar$46css$46shim.styles];
    },
    /*sidebar$46template$._SidebarComponentNgFactory*/get _SidebarComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*sidebar$46template$.styles$SidebarComponentHost*/get styles$SidebarComponentHost() {
      return C3 || CT.C3;
    },
    /*sidebar$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(sidebar$46css$46shim, {
    /*sidebar$46css$46shim.styles*/get styles() {
      return ["img._ngcontent-%ID%{margin:16px;width:48px}img:hover._ngcontent-%ID%{margin:15px;width:50px}"];
    }
  }, true);
  var _textBinding_45 = dart.privateName(header$46template, "_textBinding_45");
  var _compView_0$ = dart.privateName(header$46template, "_compView_0");
  var _FluidAppbar_0_5 = dart.privateName(header$46template, "_FluidAppbar_0_5");
  var _compView_1$ = dart.privateName(header$46template, "_compView_1");
  var _FluidBarAlign_1_5 = dart.privateName(header$46template, "_FluidBarAlign_1_5");
  var _RouterLink_2_5 = dart.privateName(header$46template, "_RouterLink_2_5");
  var _RouterLink_35_5 = dart.privateName(header$46template, "_RouterLink_35_5");
  var _RouterLink_38_5 = dart.privateName(header$46template, "_RouterLink_38_5");
  var _compView_44 = dart.privateName(header$46template, "_compView_44");
  var _FluidButton_44_5 = dart.privateName(header$46template, "_FluidButton_44_5");
  var _RouterLink_44_6 = dart.privateName(header$46template, "_RouterLink_44_6");
  var _compView_46 = dart.privateName(header$46template, "_compView_46");
  var _FluidDropdown_46_5 = dart.privateName(header$46template, "_FluidDropdown_46_5");
  var _expr_5 = dart.privateName(header$46template, "_expr_5");
  var _pipe_ngtranslate_0 = dart.privateName(header$46template, "_pipe_ngtranslate_0");
  var _el_2 = dart.privateName(header$46template, "_el_2");
  var _el_35 = dart.privateName(header$46template, "_el_35");
  var _el_38 = dart.privateName(header$46template, "_el_38");
  var _el_44 = dart.privateName(header$46template, "_el_44");
  var C7;
  header$46template.ViewHeaderComponent0 = class ViewHeaderComponent0 extends component_view.ComponentView$(dart.legacy(header.HeaderComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/header/header.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0$] = new appbar$46template.ViewFluidAppbar0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FluidAppbar_0_5] = new appbar.FluidAppbar.new();
      this[_compView_1$] = new align$46template.ViewFluidBarAlign0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      this.addShimC(_el_1);
      this[_FluidBarAlign_1_5] = new align.FluidBarAlign.new();
      let doc = html.document;
      this[_el_2] = AnchorElementL().as(doc[$createElement]("a"));
      this.updateChildClass(this[_el_2], "logo-title");
      dom_helpers.setAttribute(this[_el_2], "routerLink", "/");
      this.addShimC(this[_el_2]);
      this[_RouterLink_2_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_2]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_2]));
      let _el_3 = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
      this[_el_2][$append](_el_3);
      dom_helpers.setAttribute(_el_3, "fill", "none");
      dom_helpers.setAttribute(_el_3, "height", "60");
      dom_helpers.setAttribute(_el_3, "viewBox", "0 0 175 60");
      dom_helpers.setAttribute(_el_3, "width", "175");
      dom_helpers.setAttribute(_el_3, "xmlns", "http://www.w3.org/2000/svg");
      this.addShimE(_el_3);
      let _el_4 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_4);
      dom_helpers.setAttribute(_el_4, "clip-rule", "evenodd");
      dom_helpers.setAttribute(_el_4, "d", "M0 3.16807C0.553237 2.10288 1.12555 1.04665 1.71507 0H164.084C168.608 3.29484 172.163 7.33978 173.819 12.9544C178.625 29.2496 167.851 45.4278 158.005 60H0V3.16807Z");
      dom_helpers.setAttribute(_el_4, "fill", "#6FA5CF");
      dom_helpers.setAttribute(_el_4, "fill-rule", "evenodd");
      this.addShimE(_el_4);
      let _el_5 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_5);
      dom_helpers.setAttribute(_el_5, "d", "M53 35.4737L47.2105 38.8947V45.7369L53 42.3067V35.4737Z");
      dom_helpers.setAttribute(_el_5, "fill", "#494953");
      this.addShimE(_el_5);
      let _el_6 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_6);
      dom_helpers.setAttribute(_el_6, "d", "M53 19.6842L47.2105 23.1053V29.9474L53 26.5172V19.6842Z");
      dom_helpers.setAttribute(_el_6, "fill", "white");
      this.addShimE(_el_6);
      let _el_7 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_7);
      dom_helpers.setAttribute(_el_7, "d", "M40.3684 19.6842L46.1579 23.1053V29.9474L40.3684 26.5172V19.6842Z");
      dom_helpers.setAttribute(_el_7, "fill", "white");
      this.addShimE(_el_7);
      let _el_8 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_8);
      dom_helpers.setAttribute(_el_8, "d", "M52.6776 19.0263L46.8202 22.3296L40.8947 18.9086L46.7601 15.6098L52.6776 19.0263Z");
      dom_helpers.setAttribute(_el_8, "fill", "white");
      this.addShimE(_el_8);
      let _el_9 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_9);
      dom_helpers.setAttribute(_el_9, "d", "M38.9934 11.1316L33.1359 14.4349L27.2105 11.0138L33.0758 7.71509L38.9934 11.1316Z");
      dom_helpers.setAttribute(_el_9, "fill", "#494953");
      this.addShimE(_el_9);
      let _el_10 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_10);
      dom_helpers.setAttribute(_el_10, "d", "M32.4737 15.7368L26.6842 19.1579V26L32.4737 22.5698V15.7368Z");
      dom_helpers.setAttribute(_el_10, "fill", "#494953");
      this.addShimE(_el_10);
      let _el_11 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_11);
      dom_helpers.setAttribute(_el_11, "d", "M32.1513 15.0789L26.2938 18.3822L20.3684 14.9612L26.2337 11.6624L32.1513 15.0789Z");
      dom_helpers.setAttribute(_el_11, "fill", "#494953");
      this.addShimE(_el_11);
      let _el_12 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_12);
      dom_helpers.setAttribute(_el_12, "d", "M46.1579 39.4211L40.3684 42.8421V49.6842L46.1579 46.2541V39.4211Z");
      dom_helpers.setAttribute(_el_12, "fill", "#494953");
      this.addShimE(_el_12);
      let _el_13 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_13);
      dom_helpers.setAttribute(_el_13, "d", "M45.8355 38.7632L39.978 42.0665L34.0526 38.6454L39.9179 35.3467L45.8355 38.7632Z");
      dom_helpers.setAttribute(_el_13, "fill", "#494953");
      this.addShimE(_el_13);
      let _el_14 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_14);
      dom_helpers.setAttribute(_el_14, "d", "M53 27.5789L47.2105 31V37.8421L53 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_14, "fill", "#494953");
      this.addShimE(_el_14);
      let _el_15 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_15);
      dom_helpers.setAttribute(_el_15, "d", "M40.3684 27.5789L46.1579 31V37.8421L40.3684 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_15, "fill", "#494953");
      this.addShimE(_el_15);
      let _el_16 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_16);
      dom_helpers.setAttribute(_el_16, "d", "M45.8354 15.0789L39.978 18.3822L34.0525 14.9612L39.9179 11.6624L45.8354 15.0789Z");
      dom_helpers.setAttribute(_el_16, "fill", "white");
      this.addShimE(_el_16);
      let _el_17 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_17);
      dom_helpers.setAttribute(_el_17, "d", "M33.5263 15.7368L39.3157 19.1579V26L33.5263 22.5698V15.7368Z");
      dom_helpers.setAttribute(_el_17, "fill", "white");
      this.addShimE(_el_17);
      let _el_18 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_18);
      dom_helpers.setAttribute(_el_18, "d", "M13 35.4737L18.7895 38.8947V45.7369L13 42.3067V35.4737Z");
      dom_helpers.setAttribute(_el_18, "fill", "white");
      this.addShimE(_el_18);
      let _el_19 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_19);
      dom_helpers.setAttribute(_el_19, "d", "M32.1512 38.7632L26.2938 42.0665L20.3683 38.6454L26.2337 35.3467L32.1512 38.7632Z");
      dom_helpers.setAttribute(_el_19, "fill", "white");
      this.addShimE(_el_19);
      let _el_20 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_20);
      dom_helpers.setAttribute(_el_20, "d", "M19.8421 39.4211L25.6315 42.8421V49.6842L19.8421 46.2541V39.4211Z");
      dom_helpers.setAttribute(_el_20, "fill", "white");
      this.addShimE(_el_20);
      let _el_21 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_21);
      dom_helpers.setAttribute(_el_21, "d", "M39.3158 43.3684L33.5263 46.7895V53.6316L39.3158 50.2014V43.3684Z");
      dom_helpers.setAttribute(_el_21, "fill", "#494953");
      this.addShimE(_el_21);
      let _el_22 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_22);
      dom_helpers.setAttribute(_el_22, "d", "M38.9934 42.7105L33.1359 46.0138L27.2105 42.5928L33.0758 39.294L38.9934 42.7105Z");
      dom_helpers.setAttribute(_el_22, "fill", "#494953");
      this.addShimE(_el_22);
      let _el_23 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_23);
      dom_helpers.setAttribute(_el_23, "d", "M26.6842 43.3684L32.4737 46.7895V53.6316L26.6842 50.2014V43.3684Z");
      dom_helpers.setAttribute(_el_23, "fill", "#494953");
      this.addShimE(_el_23);
      let _el_24 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_24);
      dom_helpers.setAttribute(_el_24, "d", "M39.3158 27.5789L33.5263 31V37.8421L39.3158 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_24, "fill", "white");
      this.addShimE(_el_24);
      let _el_25 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_25);
      dom_helpers.setAttribute(_el_25, "d", "M38.9934 26.921L33.1359 30.2243L27.2105 26.8033L33.0758 23.5046L38.9934 26.921Z");
      dom_helpers.setAttribute(_el_25, "fill", "white");
      this.addShimE(_el_25);
      let _el_26 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_26);
      dom_helpers.setAttribute(_el_26, "d", "M26.6842 27.5789L32.4737 31V37.8421L26.6842 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_26, "fill", "white");
      this.addShimE(_el_26);
      let _el_27 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_27);
      dom_helpers.setAttribute(_el_27, "d", "M13 27.5789L18.7895 31V37.8421L13 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_27, "fill", "#494953");
      this.addShimE(_el_27);
      let _el_28 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_28);
      dom_helpers.setAttribute(_el_28, "d", "M25.6316 27.5789L19.8421 31V37.8421L25.6316 34.4119V27.5789Z");
      dom_helpers.setAttribute(_el_28, "fill", "#494953");
      this.addShimE(_el_28);
      let _el_29 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_29);
      dom_helpers.setAttribute(_el_29, "d", "M25.3092 19.0263L19.4517 22.3296L13.5263 18.9086L19.3916 15.6098L25.3092 19.0263Z");
      dom_helpers.setAttribute(_el_29, "fill", "#494953");
      this.addShimE(_el_29);
      let _el_30 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_30);
      dom_helpers.setAttribute(_el_30, "d", "M13 19.6842L18.7895 23.1053V29.9474L13 26.5172V19.6842Z");
      dom_helpers.setAttribute(_el_30, "fill", "#494953");
      this.addShimE(_el_30);
      let _el_31 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
      _el_3[$append](_el_31);
      dom_helpers.setAttribute(_el_31, "d", "M25.6316 19.6842L19.8421 23.1053V29.9474L25.6316 26.5172V19.6842Z");
      dom_helpers.setAttribute(_el_31, "fill", "#494953");
      this.addShimE(_el_31);
      let _el_32 = dom_helpers.appendElement(doc, this[_el_2], "p");
      this.addShimE(_el_32);
      let _text_33 = dom_helpers.appendText(_el_32, "Stevertus.com");
      let _el_34 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_34), "links");
      this.addShimC(HtmlElementL().as(_el_34));
      this[_el_35] = AnchorElementL().as(dom_helpers.appendElement(doc, _el_34, "a"));
      dom_helpers.setAttribute(this[_el_35], "ngtranslate", "");
      dom_helpers.setAttribute(this[_el_35], "routerLink", "/articles");
      this.addShimC(this[_el_35]);
      this[_RouterLink_35_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_35]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_35]));
      let _text_36 = dom_helpers.appendText(this[_el_35], "articles");
      translation_directive.TranslationDirective(this[_el_35], TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _text_37 = dom_helpers.appendText(_el_34, " ");
      this[_el_38] = AnchorElementL().as(dom_helpers.appendElement(doc, _el_34, "a"));
      dom_helpers.setAttribute(this[_el_38], "ngtranslate", "");
      dom_helpers.setAttribute(this[_el_38], "routerLink", "/projects");
      this.addShimC(this[_el_38]);
      this[_RouterLink_38_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_38]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_38]));
      let _text_39 = dom_helpers.appendText(this[_el_38], "projects");
      translation_directive.TranslationDirective(this[_el_38], TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _text_40 = dom_helpers.appendText(_el_34, " ");
      let _el_41 = dom_helpers.appendElement(doc, _el_34, "a");
      dom_helpers.setAttribute(_el_41, "href", "https://www.youtube.com/channel/UCpXIIRHJ_U0LosNt_MIVl4A/videos");
      dom_helpers.setAttribute(_el_41, "ngtranslate", "");
      this.addShimC(HtmlElementL().as(_el_41));
      let _text_42 = dom_helpers.appendText(_el_41, "videos");
      translation_directive.TranslationDirective(_el_41, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_43 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_43, "trailing", "");
      this.addShimC(HtmlElementL().as(_el_43));
      this[_compView_44] = new button$46template.ViewFluidButton0.new(this, 44);
      this[_el_44] = ButtonElementL().as(this[_compView_44].rootElement);
      _el_43[$append](this[_el_44]);
      dom_helpers.setAttribute(this[_el_44], "fluidBtn", "");
      dom_helpers.setAttribute(this[_el_44], "routerLink", "/contact");
      dom_helpers.setAttribute(this[_el_44], "small", "");
      this.addShimC(this[_el_44]);
      this[_FluidButton_44_5] = new button.FluidButton.new(this[_el_44]);
      this[_RouterLink_44_6] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_44]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_44]));
      this[_compView_44].createAndProject(this[_FluidButton_44_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_45].element])]));
      this[_compView_46] = new dropdown$46template.ViewFluidDropdown0.new(this, 46);
      let _el_46 = this[_compView_46].rootElement;
      _el_43[$append](_el_46);
      this.addShimC(_el_46);
      this[_FluidDropdown_46_5] = new dropdown.FluidDropdown.new();
      this[_compView_46].create(this[_FluidDropdown_46_5]);
      this[_compView_1$].createAndProject(this[_FluidBarAlign_1_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([this[_el_2], _el_34]), C3 || CT.C3, JSArrayOfElementL().of([_el_43])]));
      this[_compView_0$].createAndProject(this[_FluidAppbar_0_5], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_1])]));
      this[_el_2][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_2_5].instance, 'onClick')));
      this[_el_35][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_35_5].instance, 'onClick')));
      this[_el_38][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_38_5].instance, 'onClick')));
      this[_el_44][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_44_6].instance, 'onClick')));
      let subscription_0 = this[_FluidDropdown_46_5].selectedChange.listen(this.eventHandler1(intL(), intL(), dart.bind(_ctx, 'changeLang')));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_RouterLink_2_5].instance.routerLink = "/";
        this[_RouterLink_35_5].instance.routerLink = "/articles";
        this[_RouterLink_38_5].instance.routerLink = "/projects";
        this[_FluidButton_44_5].small = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_44_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_RouterLink_44_6].instance.routerLink = "/contact";
        if (_ctx.locales != null) {
          this[_FluidDropdown_46_5].values = _ctx.locales;
        }
      }
      let currVal_5 = _ctx.selected;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "selected", "package:stevertus/src/components/header/header.html"))) {
        this[_FluidDropdown_46_5].selected = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_RouterLink_2_5].detectHostChanges(this, this[_el_2]);
      this[_RouterLink_35_5].detectHostChanges(this, this[_el_35]);
      this[_RouterLink_38_5].detectHostChanges(this, this[_el_38]);
      this[_RouterLink_44_6].detectHostChanges(this[_compView_44], this[_el_44]);
      this[_textBinding_45].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0].transform("contact"))));
      this[_compView_0$].detectChanges();
      this[_compView_1$].detectChanges();
      this[_compView_44].detectChanges();
      this[_compView_46].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_1$].destroyInternalState();
      this[_compView_44].destroyInternalState();
      this[_compView_46].destroyInternalState();
      this[_RouterLink_2_5].instance.ngOnDestroy();
      this[_RouterLink_35_5].instance.ngOnDestroy();
      this[_RouterLink_38_5].instance.ngOnDestroy();
      this[_RouterLink_44_6].instance.ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      header$46template.ViewHeaderComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = header$46template.ViewHeaderComponent0._componentStyles;
      if (styles == null) {
        header$46template.ViewHeaderComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(header$46template.styles$HeaderComponent, header$46template.ViewHeaderComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C7 || CT.C7);
        }
      }
      this.componentStyles = styles;
    }
  };
  (header$46template.ViewHeaderComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_45] = new text_binding.TextBinding.new();
    this[_compView_0$] = null;
    this[_FluidAppbar_0_5] = null;
    this[_compView_1$] = null;
    this[_FluidBarAlign_1_5] = null;
    this[_RouterLink_2_5] = null;
    this[_RouterLink_35_5] = null;
    this[_RouterLink_38_5] = null;
    this[_compView_44] = null;
    this[_FluidButton_44_5] = null;
    this[_RouterLink_44_6] = null;
    this[_compView_46] = null;
    this[_FluidDropdown_46_5] = null;
    this[_expr_5] = null;
    this[_pipe_ngtranslate_0] = null;
    this[_el_2] = null;
    this[_el_35] = null;
    this[_el_38] = null;
    this[_el_44] = null;
    header$46template.ViewHeaderComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("header"));
  }).prototype = header$46template.ViewHeaderComponent0.prototype;
  dart.addTypeTests(header$46template.ViewHeaderComponent0);
  dart.addTypeCaches(header$46template.ViewHeaderComponent0);
  dart.setMethodSignature(header$46template.ViewHeaderComponent0, () => ({
    __proto__: dart.getMethods(header$46template.ViewHeaderComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(header$46template.ViewHeaderComponent0, L2);
  dart.setFieldSignature(header$46template.ViewHeaderComponent0, () => ({
    __proto__: dart.getFields(header$46template.ViewHeaderComponent0.__proto__),
    [_textBinding_45]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$]: dart.fieldType(dart.legacy(appbar$46template.ViewFluidAppbar0)),
    [_FluidAppbar_0_5]: dart.fieldType(dart.legacy(appbar.FluidAppbar)),
    [_compView_1$]: dart.fieldType(dart.legacy(align$46template.ViewFluidBarAlign0)),
    [_FluidBarAlign_1_5]: dart.fieldType(dart.legacy(align.FluidBarAlign)),
    [_RouterLink_2_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_RouterLink_35_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_RouterLink_38_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_compView_44]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_44_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_RouterLink_44_6]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_compView_46]: dart.fieldType(dart.legacy(dropdown$46template.ViewFluidDropdown0)),
    [_FluidDropdown_46_5]: dart.fieldType(dart.legacy(dropdown.FluidDropdown)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_2]: dart.fieldType(dart.legacy(html.AnchorElement)),
    [_el_35]: dart.fieldType(dart.legacy(html.AnchorElement)),
    [_el_38]: dart.fieldType(dart.legacy(html.AnchorElement)),
    [_el_44]: dart.fieldType(dart.legacy(html.ButtonElement))
  }));
  dart.defineLazy(header$46template.ViewHeaderComponent0, {
    /*header$46template.ViewHeaderComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  header$46template._ViewHeaderComponentHost0 = class _ViewHeaderComponentHost0 extends host_view.HostView$(dart.legacy(header.HeaderComponent)) {
    build() {
      this.componentView = new header$46template.ViewHeaderComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(HeaderComponentL(), dart.wrapType(HeaderComponentL()), dart.fn(() => new header.HeaderComponent.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToHeaderComponentL())) : new header.HeaderComponent.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
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
  (header$46template._ViewHeaderComponentHost0.new = function() {
    header$46template._ViewHeaderComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = header$46template._ViewHeaderComponentHost0.prototype;
  dart.addTypeTests(header$46template._ViewHeaderComponentHost0);
  dart.addTypeCaches(header$46template._ViewHeaderComponentHost0);
  dart.setMethodSignature(header$46template._ViewHeaderComponentHost0, () => ({
    __proto__: dart.getMethods(header$46template._ViewHeaderComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(header$46template._ViewHeaderComponentHost0, L2);
  var C8;
  header$46template.createHeaderComponentFactory = function createHeaderComponentFactory() {
    return new (ComponentFactoryOfHeaderComponentL()).new("header", C8 || CT.C8);
  };
  header$46template.viewFactory_HeaderComponentHost0 = function viewFactory_HeaderComponentHost0() {
    return new header$46template._ViewHeaderComponentHost0.new();
  };
  header$46template.initReflector = function initReflector$0() {
    if (dart.test(header$46template._visited)) {
      return;
    }
    header$46template._visited = true;
  };
  dart.copyProperties(header$46template, {
    get HeaderComponentNgFactory() {
      return header$46template._HeaderComponentNgFactory;
    }
  });
  var C9;
  dart.defineLazy(header$46template, {
    /*header$46template.styles$HeaderComponent*/get styles$HeaderComponent() {
      return [header$46css$46shim.styles];
    },
    /*header$46template._HeaderComponentNgFactory*/get _HeaderComponentNgFactory() {
      return C9 || CT.C9;
    },
    /*header$46template.styles$HeaderComponentHost*/get styles$HeaderComponentHost() {
      return C3 || CT.C3;
    },
    /*header$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(header$46css$46shim, {
    /*header$46css$46shim.styles*/get styles() {
      return ["fluid-appbar._ngcontent-%ID%{--appbar-background:white;--appbar-text:black;border-bottom:1px solid #f3f3f7}[trailing]._ngcontent-%ID%{display:flex;flex-direction:row;align-items:center;justify-content:space-around;--inputBackground:#f3f3f7}[trailing]._ngcontent-%ID% *._ngcontent-%ID%{margin:0 8px;min-width:80px}.logo-title._ngcontent-%ID%{position:relative;margin-left:-16px}.logo-title._ngcontent-%ID% p._ngcontent-%ID%{position:absolute;top:3px;right:9px;font-weight:700;color:white;font-size:17px}.links._ngcontent-%ID%{display:flex;flex-direction:row}.links._ngcontent-%ID% a._ngcontent-%ID%{padding:0 16px;font-weight:500;color:black;text-decoration:none;cursor:pointer}.links._ngcontent-%ID% a:hover._ngcontent-%ID%{color:var(--primary)}.links._ngcontent-%ID% div:nth-child(1n+2)._ngcontent-%ID%{border-left:1px solid #f3f3f7}@media screen AND (max-width:960px){.links._ngcontent-%ID%{display:none}}"];
    }
  }, true);
  var _compView_0$0 = dart.privateName(app_component$46template, "_compView_0");
  var _FluidTheme_0_5 = dart.privateName(app_component$46template, "_FluidTheme_0_5");
  var _FluidShell_0_6 = dart.privateName(app_component$46template, "_FluidShell_0_6");
  var _compView_1$0 = dart.privateName(app_component$46template, "_compView_1");
  var _HeaderComponent_1_5 = dart.privateName(app_component$46template, "_HeaderComponent_1_5");
  var _compView_2 = dart.privateName(app_component$46template, "_compView_2");
  var _SidebarComponent_2_5 = dart.privateName(app_component$46template, "_SidebarComponent_2_5");
  var _appEl_3 = dart.privateName(app_component$46template, "_appEl_3");
  var _RouterOutlet_3_8 = dart.privateName(app_component$46template, "_RouterOutlet_3_8");
  var _compView_4 = dart.privateName(app_component$46template, "_compView_4");
  var _FooterComponent_4_5 = dart.privateName(app_component$46template, "_FooterComponent_4_5");
  var C10;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends component_view.ComponentView$(dart.legacy(app_component.AppComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/app_component.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0$0] = new fluid_shell$46template.ViewFluidShell0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      parentRenderNode[$append](_el_0);
      dom_helpers.setAttribute(_el_0, "theme", "richBlue");
      this.addShimC(_el_0);
      this[_FluidTheme_0_5] = new theme.FluidTheme.new();
      this[_FluidShell_0_6] = new fluid_shell.FluidShell.new(this[_FluidTheme_0_5]);
      this[_compView_1$0] = new header$46template.ViewHeaderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$0].rootElement;
      dom_helpers.setAttribute(_el_1, "appbar", "");
      this.addShimC(_el_1);
      this[_HeaderComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(HeaderComponentL(), dart.wrapType(HeaderComponentL()), dart.fn(() => new header.HeaderComponent.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToHeaderComponentL())) : new header.HeaderComponent.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this[_compView_1$0].create(this[_HeaderComponent_1_5]);
      this[_compView_2] = new sidebar$46template$.ViewSidebarComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      dom_helpers.setAttribute(_el_2, "sidebar", "");
      this.addShimC(_el_2);
      this[_SidebarComponent_2_5] = new sidebar.SidebarComponent.new();
      this[_compView_2].create(this[_SidebarComponent_2_5]);
      let doc = html.document;
      let _el_3 = doc[$createElement]("router-outlet");
      this.addShimE(_el_3);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _el_3);
      this[_RouterOutlet_3_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterOutletL(), dart.wrapType(RouterOutletL()), dart.fn(() => new router_outlet_directive.RouterOutlet.new(RouterOutletTokenL().as(this.parentView.injectorGetOptional(dart.wrapType(RouterOutletTokenL()), this.parentIndex)), this[_appEl_3], RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), RouterHookL().as(this.parentView.injectorGetOptional(dart.wrapType(RouterHookL()), this.parentIndex))), VoidToRouterOutletL())) : new router_outlet_directive.RouterOutlet.new(RouterOutletTokenL().as(this.parentView.injectorGetOptional(dart.wrapType(RouterOutletTokenL()), this.parentIndex)), this[_appEl_3], RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), RouterHookL().as(this.parentView.injectorGetOptional(dart.wrapType(RouterHookL()), this.parentIndex)));
      this[_compView_4] = new footer$46template.ViewFooterComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      this.addShimC(_el_4);
      this[_FooterComponent_4_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FooterComponentL(), dart.wrapType(FooterComponentL()), dart.fn(() => new footer.FooterComponent.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToFooterComponentL())) : new footer.FooterComponent.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this[_compView_4].create(this[_FooterComponent_4_5]);
      this[_compView_0$0].createAndProject(this[_FluidShell_0_6], JSArrayOfObjectL().of([C3 || CT.C3, JSArrayOfHtmlElementL().of([_el_1]), C3 || CT.C3, JSArrayOfHtmlElementL().of([_el_2]), JSArrayOfObjectL().of([this[_appEl_3], _el_4])]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(FluidThemeL()) && dart.notNull(nodeIndex) <= 4) {
        return this[_FluidTheme_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidShell_0_6].theme = "richBlue";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidShell_0_6].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_HeaderComponent_1_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        if (routes.Routes.all != null) {
          this[_RouterOutlet_3_8].routes = routes.Routes.all;
        }
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_RouterOutlet_3_8].ngOnInit();
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0$0].detectChanges();
      this[_compView_1$0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_compView_0$0].destroyInternalState();
      this[_compView_1$0].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_RouterOutlet_3_8].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      app_component$46template.ViewAppComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C10 || CT.C10);
        }
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_FluidTheme_0_5] = null;
    this[_FluidShell_0_6] = null;
    this[_compView_1$0] = null;
    this[_HeaderComponent_1_5] = null;
    this[_compView_2] = null;
    this[_SidebarComponent_2_5] = null;
    this[_appEl_3] = null;
    this[_RouterOutlet_3_8] = null;
    this[_compView_4] = null;
    this[_FooterComponent_4_5] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("my-app"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.addTypeCaches(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, L3);
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(fluid_shell$46template.ViewFluidShell0)),
    [_FluidTheme_0_5]: dart.fieldType(dart.legacy(theme.FluidTheme)),
    [_FluidShell_0_6]: dart.fieldType(dart.legacy(fluid_shell.FluidShell)),
    [_compView_1$0]: dart.fieldType(dart.legacy(header$46template.ViewHeaderComponent0)),
    [_HeaderComponent_1_5]: dart.fieldType(dart.legacy(header.HeaderComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(sidebar$46template$.ViewSidebarComponent0)),
    [_SidebarComponent_2_5]: dart.fieldType(dart.legacy(sidebar.SidebarComponent)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_RouterOutlet_3_8]: dart.fieldType(dart.legacy(router_outlet_directive.RouterOutlet)),
    [_compView_4]: dart.fieldType(dart.legacy(footer$46template.ViewFooterComponent0)),
    [_FooterComponent_4_5]: dart.fieldType(dart.legacy(footer.FooterComponent))
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var __TranslationService_0_6 = dart.privateName(app_component$46template, "__TranslationService_0_6");
  var _TranslationService_0_6 = dart.privateName(app_component$46template, "_TranslationService_0_6");
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends host_view.HostView$(dart.legacy(app_component.AppComponent)) {
    get [_TranslationService_0_6]() {
      if (this[__TranslationService_0_6] == null) {
        this[__TranslationService_0_6] = new translation_service.TranslationService.new();
      }
      return this[__TranslationService_0_6];
    }
    build() {
      this.componentView = new app_component$46template.ViewAppComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new app_component.AppComponent.new();
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(TranslationServiceL()) && 0 === nodeIndex) {
        return this[_TranslationService_0_6];
      }
      return notFoundResult;
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function() {
    this[__TranslationService_0_6] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.addTypeCaches(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_TranslationService_0_6]: dart.legacy(translation_service.TranslationService)
  }));
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, L3);
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [__TranslationService_0_6]: dart.fieldType(dart.legacy(translation_service.TranslationService))
  }));
  var C11;
  app_component$46template.createAppComponentFactory = function createAppComponentFactory() {
    return new (ComponentFactoryOfAppComponentL()).new("my-app", C11 || CT.C11);
  };
  app_component$46template.viewFactory_AppComponentHost0 = function viewFactory_AppComponentHost0() {
    return new app_component$46template._ViewAppComponentHost0.new();
  };
  app_component$46template.initReflector = function initReflector$1() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
  };
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  var C12;
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    },
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return C12 || CT.C12;
    },
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return C3 || CT.C3;
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/stevertus/app_component.template", {
    "package:stevertus/src/components/footer/footer.template.dart": footer$46template,
    "package:stevertus/src/components/footer/footer.css.shim.dart": footer$46css$46shim,
    "package:stevertus/src/components/sidebar/sidebar.template.dart": sidebar$46template$,
    "package:stevertus/src/components/sidebar/sidebar.css.shim.dart": sidebar$46css$46shim,
    "package:stevertus/src/components/header/header.template.dart": header$46template,
    "package:stevertus/src/components/header/header.css.shim.dart": header$46css$46shim,
    "package:stevertus/app_component.template.dart": app_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/components/footer/footer.template.dart","src/components/footer/footer.css.shim.dart","src/components/sidebar/sidebar.template.dart","src/components/sidebar/sidebar.css.shim.dart","src/components/header/header.template.dart","src/components/header/header.css.shim.dart","app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.unsound.ddc.js"}');
  // Exports:
  return {
    src__components__footer__footer$46template: footer$46template,
    src__components__footer__footer$46css$46shim: footer$46css$46shim,
    src__components__sidebar__sidebar$46template: sidebar$46template$,
    src__components__sidebar__sidebar$46css$46shim: sidebar$46css$46shim,
    src__components__header__header$46template: header$46template,
    src__components__header__header$46css$46shim: header$46css$46shim,
    app_component$46template: app_component$46template
  };
}));

//# sourceMappingURL=app_component.template.unsound.ddc.js.map
