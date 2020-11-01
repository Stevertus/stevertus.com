// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'footer.dart';
export 'footer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/footer/footer.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'footer.dart' as import2;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import3;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import4;
import 'package:fluix_web/fluix/icon/icon.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/di/errors.dart' as import12;
import 'package:angular_router/src/directives/router_link_directive.dart' as import13;
import 'package:angular_router/src/router/router.dart' as import14;
import 'package:angular_router/src/location/location.dart' as import15;
import 'package:ng_translate/src/translation_directive.dart' as import16;
import 'package:ng_translate/src/translation_service.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import19;

final List<dynamic> styles$FooterComponent = [import0.styles];

class ViewFooterComponent0 extends import1.ComponentView<import2.FooterComponent> {
  import3.RouterLinkNgCd _RouterLink_1_5;
  import3.RouterLinkNgCd _RouterLink_9_5;
  import3.RouterLinkNgCd _RouterLink_12_5;
  import4.ViewFluidIcon0 _compView_34;
  import5.FluidIcon _FluidIcon_34_5;
  import4.ViewFluidIcon0 _compView_39;
  import5.FluidIcon _FluidIcon_39_5;
  import6.DivElement _el_1;
  import6.AnchorElement _el_9;
  import6.AnchorElement _el_12;
  static import7.ComponentStyles _componentStyles;
  ViewFooterComponent0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('footer');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:stevertus/lib/src/components/footer/footer.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this._el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_1, 'logo');
    import11.setAttribute(this._el_1, 'routerLink', '/');
    this.addShimC(this._el_1);
    this._RouterLink_1_5 = import3.RouterLinkNgCd((import10.isDevMode
        ? import12.debugInjectorWrap(import13.RouterLink, () {
            return import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_1);
          })
        : import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_1)));
    final _el_2 = import11.appendElement(doc, this._el_1, 'img');
    import11.setAttribute(_el_2, 'alt', '');
    import11.setAttribute(_el_2, 'src', '/assets/logo_blue.svg');
    this.addShimE(_el_2);
    final _el_3 = import11.appendElement(doc, this._el_1, 'h2');
    this.addShimE(_el_3);
    final _text_4 = import11.appendText(_el_3, 'Stevertus');
    final _el_5 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_5, 'links');
    this.addShimC(_el_5);
    final _el_6 = import11.appendElement(doc, _el_5, 'a');
    import11.setAttribute(_el_6, 'href', '');
    import11.setAttribute(_el_6, 'ngtranslate', '');
    this.addShimC(_el_6);
    final _text_7 = import11.appendText(_el_6, 'footer.about');
    import16.TranslationDirective(_el_6, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _text_8 = import11.appendText(_el_5, ' ');
    this._el_9 = import11.appendElement(doc, _el_5, 'a');
    import11.setAttribute(this._el_9, 'ngtranslate', '');
    import11.setAttribute(this._el_9, 'routerLink', '/fard');
    this.addShimC(this._el_9);
    this._RouterLink_9_5 = import3.RouterLinkNgCd((import10.isDevMode
        ? import12.debugInjectorWrap(import13.RouterLink, () {
            return import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_9);
          })
        : import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_9)));
    final _text_10 = import11.appendText(this._el_9, 'contact');
    import16.TranslationDirective(this._el_9, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _text_11 = import11.appendText(_el_5, ' ');
    this._el_12 = import11.appendElement(doc, _el_5, 'a');
    import11.setAttribute(this._el_12, 'ngtranslate', '');
    import11.setAttribute(this._el_12, 'routerLink', '/articles?type=tool');
    this.addShimC(this._el_12);
    this._RouterLink_12_5 = import3.RouterLinkNgCd((import10.isDevMode
        ? import12.debugInjectorWrap(import13.RouterLink, () {
            return import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_12);
          })
        : import13.RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.Location, this.parentIndex), null, this._el_12)));
    final _text_13 = import11.appendText(this._el_12, 'footer.tools');
    import16.TranslationDirective(this._el_12, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _el_14 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_14, 'social');
    this.addShimC(_el_14);
    final _el_15 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_15, 'href', 'https://www.youtube.com/channel/UCpXIIRHJ_U0LosNt_MIVl4A');
    this.addShimC(_el_15);
    final _el_16 = import11.appendElement(doc, _el_15, 'img');
    import11.setAttribute(_el_16, 'src', '/assets/social/yt.svg');
    this.addShimE(_el_16);
    final _text_17 = import11.appendText(_el_14, ' ');
    final _el_18 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_18, 'href', 'https://twitter.com/stevertus');
    this.addShimC(_el_18);
    final _el_19 = import11.appendElement(doc, _el_18, 'img');
    import11.setAttribute(_el_19, 'src', '/assets/social/twitter.png');
    this.addShimE(_el_19);
    final _text_20 = import11.appendText(_el_14, ' ');
    final _el_21 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_21, 'href', 'https://discord.gg/McYXVC8');
    this.addShimC(_el_21);
    final _el_22 = import11.appendElement(doc, _el_21, 'img');
    import11.setAttribute(_el_22, 'src', '/assets/social/discord.png');
    this.addShimE(_el_22);
    final _text_23 = import11.appendText(_el_14, ' ');
    final _el_24 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_24, 'href', 'https://dmanager.stevertus.com/packs/search/by:Stevertus');
    this.addShimC(_el_24);
    final _el_25 = import11.appendElement(doc, _el_24, 'img');
    import11.setAttribute(_el_25, 'src', '/assets/social/dmanager.svg');
    this.addShimE(_el_25);
    final _text_26 = import11.appendText(_el_14, ' ');
    final _el_27 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_27, 'href', 'mailto:contact@stevertus.com');
    this.addShimC(_el_27);
    final _el_28 = import11.appendElement(doc, _el_27, 'img');
    import11.setAttribute(_el_28, 'src', '/assets/social/mail.svg');
    this.addShimE(_el_28);
    final _text_29 = import11.appendText(_el_14, ' ');
    final _el_30 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_30, 'href', 'https://github.com/Stevertus');
    this.addShimC(_el_30);
    final _el_31 = import11.appendElement(doc, _el_30, 'img');
    import11.setAttribute(_el_31, 'src', '/assets/social/github.svg');
    this.addShimE(_el_31);
    final _text_32 = import11.appendText(_el_14, ' ');
    final _el_33 = import11.appendElement(doc, _el_14, 'a');
    import11.setAttribute(_el_33, 'href', 'https://github.com/Stevertus');
    this.addShimC(_el_33);
    this._compView_34 = import4.ViewFluidIcon0(this, 34);
    final _el_34 = this._compView_34.rootElement;
    _el_33.append(_el_34);
    this.addShimC(_el_34);
    this._FluidIcon_34_5 = import5.FluidIcon(_el_34);
    final _text_35 = import11.createText('email');
    this._compView_34.createAndProject(this._FluidIcon_34_5, [
      [_text_35]
    ]);
    final _el_36 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_36, 'madein');
    this.addShimC(_el_36);
    final _el_37 = import11.appendSpan(doc, _el_36);
    import11.setAttribute(_el_37, 'ngtranslate', '');
    this.addShimE(_el_37);
    final _text_38 = import11.appendText(_el_37, 'footer.madewith');
    import16.TranslationDirective(_el_37, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    this._compView_39 = import4.ViewFluidIcon0(this, 39);
    final _el_39 = this._compView_39.rootElement;
    _el_36.append(_el_39);
    this.addShimC(_el_39);
    this._FluidIcon_39_5 = import5.FluidIcon(_el_39);
    final _text_40 = import11.createText('heart');
    this._compView_39.createAndProject(this._FluidIcon_39_5, [
      [_text_40]
    ]);
    final _el_41 = import11.appendSpan(doc, _el_36);
    import11.setAttribute(_el_41, 'ngtranslate', '');
    this.addShimE(_el_41);
    final _text_42 = import11.appendText(_el_41, 'footer.inG');
    import16.TranslationDirective(_el_41, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _el_43 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_43, 'rights');
    this.addShimC(_el_43);
    final _el_44 = import11.appendElement(doc, _el_43, 'p');
    this.addShimE(_el_44);
    final _el_45 = import11.appendSpan(doc, _el_44);
    import11.setAttribute(_el_45, 'ngtranslate', '');
    this.addShimE(_el_45);
    final _text_46 = import11.appendText(_el_45, 'footer.rightsReserved');
    import16.TranslationDirective(_el_45, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _el_47 = import11.appendElement(doc, _el_44, 'a');
    import11.setAttribute(_el_47, 'href', 'https://dmanager.stevertus.com/privacy/en');
    import11.setAttribute(_el_47, 'ngtranslate', '');
    this.addShimC(_el_47);
    final _text_48 = import11.appendText(_el_47, 'footer.privacyPolicy');
    import16.TranslationDirective(_el_47, this.parentView.injectorGet(import17.TranslationService, this.parentIndex), '');
    final _text_49 = import11.appendText(_el_43, '© 2020 Stevertus');
    this._el_1.addEventListener('click', this.eventHandler1(this._RouterLink_1_5.instance.onClick));
    this._el_9.addEventListener('click', this.eventHandler1(this._RouterLink_9_5.instance.onClick));
    this._el_12.addEventListener('click', this.eventHandler1(this._RouterLink_12_5.instance.onClick));
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._RouterLink_1_5.instance.routerLink = '/';
      this._RouterLink_9_5.instance.routerLink = '/fard';
      this._RouterLink_12_5.instance.routerLink = '/articles?type=tool';
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_34_5.ngOnInit();
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_39_5.ngOnInit();
    }
    this._RouterLink_1_5.detectHostChanges(this, this._el_1);
    this._RouterLink_9_5.detectHostChanges(this, this._el_9);
    this._RouterLink_12_5.detectHostChanges(this, this._el_12);
    this._compView_34.detectChanges();
    this._compView_39.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_34.destroyInternalState();
    this._compView_39.destroyInternalState();
    this._RouterLink_1_5.instance.ngOnDestroy();
    this._RouterLink_9_5.instance.ngOnDestroy();
    this._RouterLink_12_5.instance.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$FooterComponent, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FooterComponentNgFactory = ComponentFactory<import2.FooterComponent>('footer', viewFactory_FooterComponentHost0);
ComponentFactory<import2.FooterComponent> get FooterComponentNgFactory {
  return _FooterComponentNgFactory;
}

ComponentFactory<import2.FooterComponent> createFooterComponentFactory() {
  return ComponentFactory('footer', viewFactory_FooterComponentHost0);
}

final List<dynamic> styles$FooterComponentHost = const [];

class _ViewFooterComponentHost0 extends import19.HostView<import2.FooterComponent> {
  @override
  void build() {
    this.componentView = ViewFooterComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import10.isDevMode
        ? import12.debugInjectorWrap(import2.FooterComponent, () {
            return import2.FooterComponent(this.injectorGet(import17.TranslationService, this.parentIndex));
          })
        : import2.FooterComponent(this.injectorGet(import17.TranslationService, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import19.HostView<import2.FooterComponent> viewFactory_FooterComponentHost0() {
  return _ViewFooterComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
