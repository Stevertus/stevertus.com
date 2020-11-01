// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'header.dart';
export 'header.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/header/header.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'header.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:fluix_web/fluix/appbar/appbar.template.dart' as import4;
import 'package:fluix_web/fluix/appbar/appbar.dart' as import5;
import 'package:fluix_web/fluix/bar-align/align.template.dart' as import6;
import 'package:fluix_web/fluix/bar-align/align.dart' as import7;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import8;
import 'package:fluix_web/fluix/button/button.template.dart' as import9;
import 'package:fluix_web/fluix/button/button.dart' as import10;
import 'package:fluix_web/fluix/dropdown/dropdown.template.dart' as import11;
import 'package:fluix_web/fluix/dropdown/dropdown.dart' as import12;
import 'package:ng_translate/src/translation_pipe.dart' as import13;
import 'dart:html' as import14;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import15;
import 'package:angular/src/core/linker/views/view.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/src/runtime/dom_helpers.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_router/src/directives/router_link_directive.dart' as import21;
import 'package:angular_router/src/router/router.dart' as import22;
import 'package:angular_router/src/location/location.dart' as import23;
import 'package:ng_translate/src/translation_directive.dart' as import24;
import 'package:ng_translate/src/translation_service.dart' as import25;
import 'package:angular/src/runtime/interpolate.dart' as import26;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import28;

final List<dynamic> styles$HeaderComponent = [import0.styles];

class ViewHeaderComponent0 extends import1.ComponentView<import2.HeaderComponent> {
  final import3.TextBinding _textBinding_45 = import3.TextBinding();
  import4.ViewFluidAppbar0 _compView_0;
  import5.FluidAppbar _FluidAppbar_0_5;
  import6.ViewFluidBarAlign0 _compView_1;
  import7.FluidBarAlign _FluidBarAlign_1_5;
  import8.RouterLinkNgCd _RouterLink_2_5;
  import8.RouterLinkNgCd _RouterLink_35_5;
  import8.RouterLinkNgCd _RouterLink_38_5;
  import9.ViewFluidButton0 _compView_44;
  import10.FluidButton _FluidButton_44_5;
  import8.RouterLinkNgCd _RouterLink_44_6;
  import11.ViewFluidDropdown0 _compView_46;
  import12.FluidDropdown _FluidDropdown_46_5;
  var _expr_5;
  import13.TranslationPipe _pipe_ngtranslate_0;
  import14.AnchorElement _el_2;
  import14.AnchorElement _el_35;
  import14.AnchorElement _el_38;
  import14.ButtonElement _el_44;
  static import15.ComponentStyles _componentStyles;
  ViewHeaderComponent0(import16.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import14.document.createElement('header');
  }
  static String get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:stevertus/lib/src/components/header/header.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import14.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import4.ViewFluidAppbar0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._FluidAppbar_0_5 = import5.FluidAppbar();
    this._compView_1 = import6.ViewFluidBarAlign0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    this.addShimC(_el_1);
    this._FluidBarAlign_1_5 = import7.FluidBarAlign();
    final doc = import14.document;
    this._el_2 = doc.createElement('a');
    this.updateChildClass(this._el_2, 'logo-title');
    import19.setAttribute(this._el_2, 'routerLink', '/');
    this.addShimC(this._el_2);
    this._RouterLink_2_5 = import8.RouterLinkNgCd((import18.isDevMode
        ? import20.debugInjectorWrap(import21.RouterLink, () {
            return import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_2);
          })
        : import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_2)));
    final _el_3 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._el_2.append(_el_3);
    import19.setAttribute(_el_3, 'fill', 'none');
    import19.setAttribute(_el_3, 'height', '60');
    import19.setAttribute(_el_3, 'viewBox', '0 0 175 60');
    import19.setAttribute(_el_3, 'width', '175');
    import19.setAttribute(_el_3, 'xmlns', 'http://www.w3.org/2000/svg');
    this.addShimE(_el_3);
    final _el_4 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_4);
    import19.setAttribute(_el_4, 'clip-rule', 'evenodd');
    import19.setAttribute(_el_4, 'd', 'M0 3.16807C0.553237 2.10288 1.12555 1.04665 1.71507 0H164.084C168.608 3.29484 172.163 7.33978 173.819 12.9544C178.625 29.2496 167.851 45.4278 158.005 60H0V3.16807Z');
    import19.setAttribute(_el_4, 'fill', '#6FA5CF');
    import19.setAttribute(_el_4, 'fill-rule', 'evenodd');
    this.addShimE(_el_4);
    final _el_5 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_5);
    import19.setAttribute(_el_5, 'd', 'M53 35.4737L47.2105 38.8947V45.7369L53 42.3067V35.4737Z');
    import19.setAttribute(_el_5, 'fill', '#494953');
    this.addShimE(_el_5);
    final _el_6 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_6);
    import19.setAttribute(_el_6, 'd', 'M53 19.6842L47.2105 23.1053V29.9474L53 26.5172V19.6842Z');
    import19.setAttribute(_el_6, 'fill', 'white');
    this.addShimE(_el_6);
    final _el_7 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_7);
    import19.setAttribute(_el_7, 'd', 'M40.3684 19.6842L46.1579 23.1053V29.9474L40.3684 26.5172V19.6842Z');
    import19.setAttribute(_el_7, 'fill', 'white');
    this.addShimE(_el_7);
    final _el_8 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_8);
    import19.setAttribute(_el_8, 'd', 'M52.6776 19.0263L46.8202 22.3296L40.8947 18.9086L46.7601 15.6098L52.6776 19.0263Z');
    import19.setAttribute(_el_8, 'fill', 'white');
    this.addShimE(_el_8);
    final _el_9 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_9);
    import19.setAttribute(_el_9, 'd', 'M38.9934 11.1316L33.1359 14.4349L27.2105 11.0138L33.0758 7.71509L38.9934 11.1316Z');
    import19.setAttribute(_el_9, 'fill', '#494953');
    this.addShimE(_el_9);
    final _el_10 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_10);
    import19.setAttribute(_el_10, 'd', 'M32.4737 15.7368L26.6842 19.1579V26L32.4737 22.5698V15.7368Z');
    import19.setAttribute(_el_10, 'fill', '#494953');
    this.addShimE(_el_10);
    final _el_11 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_11);
    import19.setAttribute(_el_11, 'd', 'M32.1513 15.0789L26.2938 18.3822L20.3684 14.9612L26.2337 11.6624L32.1513 15.0789Z');
    import19.setAttribute(_el_11, 'fill', '#494953');
    this.addShimE(_el_11);
    final _el_12 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_12);
    import19.setAttribute(_el_12, 'd', 'M46.1579 39.4211L40.3684 42.8421V49.6842L46.1579 46.2541V39.4211Z');
    import19.setAttribute(_el_12, 'fill', '#494953');
    this.addShimE(_el_12);
    final _el_13 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_13);
    import19.setAttribute(_el_13, 'd', 'M45.8355 38.7632L39.978 42.0665L34.0526 38.6454L39.9179 35.3467L45.8355 38.7632Z');
    import19.setAttribute(_el_13, 'fill', '#494953');
    this.addShimE(_el_13);
    final _el_14 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_14);
    import19.setAttribute(_el_14, 'd', 'M53 27.5789L47.2105 31V37.8421L53 34.4119V27.5789Z');
    import19.setAttribute(_el_14, 'fill', '#494953');
    this.addShimE(_el_14);
    final _el_15 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_15);
    import19.setAttribute(_el_15, 'd', 'M40.3684 27.5789L46.1579 31V37.8421L40.3684 34.4119V27.5789Z');
    import19.setAttribute(_el_15, 'fill', '#494953');
    this.addShimE(_el_15);
    final _el_16 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_16);
    import19.setAttribute(_el_16, 'd', 'M45.8354 15.0789L39.978 18.3822L34.0525 14.9612L39.9179 11.6624L45.8354 15.0789Z');
    import19.setAttribute(_el_16, 'fill', 'white');
    this.addShimE(_el_16);
    final _el_17 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_17);
    import19.setAttribute(_el_17, 'd', 'M33.5263 15.7368L39.3157 19.1579V26L33.5263 22.5698V15.7368Z');
    import19.setAttribute(_el_17, 'fill', 'white');
    this.addShimE(_el_17);
    final _el_18 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_18);
    import19.setAttribute(_el_18, 'd', 'M13 35.4737L18.7895 38.8947V45.7369L13 42.3067V35.4737Z');
    import19.setAttribute(_el_18, 'fill', 'white');
    this.addShimE(_el_18);
    final _el_19 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_19);
    import19.setAttribute(_el_19, 'd', 'M32.1512 38.7632L26.2938 42.0665L20.3683 38.6454L26.2337 35.3467L32.1512 38.7632Z');
    import19.setAttribute(_el_19, 'fill', 'white');
    this.addShimE(_el_19);
    final _el_20 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_20);
    import19.setAttribute(_el_20, 'd', 'M19.8421 39.4211L25.6315 42.8421V49.6842L19.8421 46.2541V39.4211Z');
    import19.setAttribute(_el_20, 'fill', 'white');
    this.addShimE(_el_20);
    final _el_21 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_21);
    import19.setAttribute(_el_21, 'd', 'M39.3158 43.3684L33.5263 46.7895V53.6316L39.3158 50.2014V43.3684Z');
    import19.setAttribute(_el_21, 'fill', '#494953');
    this.addShimE(_el_21);
    final _el_22 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_22);
    import19.setAttribute(_el_22, 'd', 'M38.9934 42.7105L33.1359 46.0138L27.2105 42.5928L33.0758 39.294L38.9934 42.7105Z');
    import19.setAttribute(_el_22, 'fill', '#494953');
    this.addShimE(_el_22);
    final _el_23 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_23);
    import19.setAttribute(_el_23, 'd', 'M26.6842 43.3684L32.4737 46.7895V53.6316L26.6842 50.2014V43.3684Z');
    import19.setAttribute(_el_23, 'fill', '#494953');
    this.addShimE(_el_23);
    final _el_24 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_24);
    import19.setAttribute(_el_24, 'd', 'M39.3158 27.5789L33.5263 31V37.8421L39.3158 34.4119V27.5789Z');
    import19.setAttribute(_el_24, 'fill', 'white');
    this.addShimE(_el_24);
    final _el_25 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_25);
    import19.setAttribute(_el_25, 'd', 'M38.9934 26.921L33.1359 30.2243L27.2105 26.8033L33.0758 23.5046L38.9934 26.921Z');
    import19.setAttribute(_el_25, 'fill', 'white');
    this.addShimE(_el_25);
    final _el_26 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_26);
    import19.setAttribute(_el_26, 'd', 'M26.6842 27.5789L32.4737 31V37.8421L26.6842 34.4119V27.5789Z');
    import19.setAttribute(_el_26, 'fill', 'white');
    this.addShimE(_el_26);
    final _el_27 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_27);
    import19.setAttribute(_el_27, 'd', 'M13 27.5789L18.7895 31V37.8421L13 34.4119V27.5789Z');
    import19.setAttribute(_el_27, 'fill', '#494953');
    this.addShimE(_el_27);
    final _el_28 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_28);
    import19.setAttribute(_el_28, 'd', 'M25.6316 27.5789L19.8421 31V37.8421L25.6316 34.4119V27.5789Z');
    import19.setAttribute(_el_28, 'fill', '#494953');
    this.addShimE(_el_28);
    final _el_29 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_29);
    import19.setAttribute(_el_29, 'd', 'M25.3092 19.0263L19.4517 22.3296L13.5263 18.9086L19.3916 15.6098L25.3092 19.0263Z');
    import19.setAttribute(_el_29, 'fill', '#494953');
    this.addShimE(_el_29);
    final _el_30 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_30);
    import19.setAttribute(_el_30, 'd', 'M13 19.6842L18.7895 23.1053V29.9474L13 26.5172V19.6842Z');
    import19.setAttribute(_el_30, 'fill', '#494953');
    this.addShimE(_el_30);
    final _el_31 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_3.append(_el_31);
    import19.setAttribute(_el_31, 'd', 'M25.6316 19.6842L19.8421 23.1053V29.9474L25.6316 26.5172V19.6842Z');
    import19.setAttribute(_el_31, 'fill', '#494953');
    this.addShimE(_el_31);
    final _el_32 = import19.appendElement(doc, this._el_2, 'p');
    this.addShimE(_el_32);
    final _text_33 = import19.appendText(_el_32, 'Stevertus.com');
    final _el_34 = doc.createElement('div');
    this.updateChildClass(_el_34, 'links');
    this.addShimC(_el_34);
    this._el_35 = import19.appendElement(doc, _el_34, 'a');
    import19.setAttribute(this._el_35, 'ngtranslate', '');
    import19.setAttribute(this._el_35, 'routerLink', '/articles');
    this.addShimC(this._el_35);
    this._RouterLink_35_5 = import8.RouterLinkNgCd((import18.isDevMode
        ? import20.debugInjectorWrap(import21.RouterLink, () {
            return import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_35);
          })
        : import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_35)));
    final _text_36 = import19.appendText(this._el_35, 'articles');
    import24.TranslationDirective(this._el_35, this.parentView.injectorGet(import25.TranslationService, this.parentIndex), '');
    final _text_37 = import19.appendText(_el_34, ' ');
    this._el_38 = import19.appendElement(doc, _el_34, 'a');
    import19.setAttribute(this._el_38, 'ngtranslate', '');
    import19.setAttribute(this._el_38, 'routerLink', '/projects');
    this.addShimC(this._el_38);
    this._RouterLink_38_5 = import8.RouterLinkNgCd((import18.isDevMode
        ? import20.debugInjectorWrap(import21.RouterLink, () {
            return import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_38);
          })
        : import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_38)));
    final _text_39 = import19.appendText(this._el_38, 'projects');
    import24.TranslationDirective(this._el_38, this.parentView.injectorGet(import25.TranslationService, this.parentIndex), '');
    final _text_40 = import19.appendText(_el_34, ' ');
    final _el_41 = import19.appendElement(doc, _el_34, 'a');
    import19.setAttribute(_el_41, 'href', 'https://www.youtube.com/channel/UCpXIIRHJ_U0LosNt_MIVl4A/videos');
    import19.setAttribute(_el_41, 'ngtranslate', '');
    this.addShimC(_el_41);
    final _text_42 = import19.appendText(_el_41, 'videos');
    import24.TranslationDirective(_el_41, this.parentView.injectorGet(import25.TranslationService, this.parentIndex), '');
    final _el_43 = doc.createElement('div');
    import19.setAttribute(_el_43, 'trailing', '');
    this.addShimC(_el_43);
    this._compView_44 = import9.ViewFluidButton0(this, 44);
    this._el_44 = this._compView_44.rootElement;
    _el_43.append(this._el_44);
    import19.setAttribute(this._el_44, 'fluidBtn', '');
    import19.setAttribute(this._el_44, 'routerLink', '/contact');
    import19.setAttribute(this._el_44, 'small', '');
    this.addShimC(this._el_44);
    this._FluidButton_44_5 = import10.FluidButton(this._el_44);
    this._RouterLink_44_6 = import8.RouterLinkNgCd((import18.isDevMode
        ? import20.debugInjectorWrap(import21.RouterLink, () {
            return import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_44);
          })
        : import21.RouterLink(this.parentView.injectorGet(import22.Router, this.parentIndex), this.parentView.injectorGet(import23.Location, this.parentIndex), null, this._el_44)));
    this._compView_44.createAndProject(this._FluidButton_44_5, [
      [this._textBinding_45.element]
    ]);
    this._compView_46 = import11.ViewFluidDropdown0(this, 46);
    final _el_46 = this._compView_46.rootElement;
    _el_43.append(_el_46);
    this.addShimC(_el_46);
    this._FluidDropdown_46_5 = import12.FluidDropdown();
    this._compView_46.create(this._FluidDropdown_46_5);
    this._compView_1.createAndProject(this._FluidBarAlign_1_5, [
      [this._el_2, _el_34],
      const [],
      [_el_43]
    ]);
    this._compView_0.createAndProject(this._FluidAppbar_0_5, [
      [_el_1]
    ]);
    this._el_2.addEventListener('click', this.eventHandler1(this._RouterLink_2_5.instance.onClick));
    this._el_35.addEventListener('click', this.eventHandler1(this._RouterLink_35_5.instance.onClick));
    this._el_38.addEventListener('click', this.eventHandler1(this._RouterLink_38_5.instance.onClick));
    this._el_44.addEventListener('click', this.eventHandler1(this._RouterLink_44_6.instance.onClick));
    final subscription_0 = this._FluidDropdown_46_5.selectedChange.listen(this.eventHandler1(_ctx.changeLang));
    import20.debugInjectorEnter(import13.TranslationPipe);
    this._pipe_ngtranslate_0 = import13.TranslationPipe(this.parentView.injectorGet(import25.TranslationService, this.parentIndex));
    import20.debugInjectorLeave(import13.TranslationPipe);
    this.initSubscriptions([subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._RouterLink_2_5.instance.routerLink = '/';
      this._RouterLink_35_5.instance.routerLink = '/articles';
      this._RouterLink_38_5.instance.routerLink = '/projects';
      this._FluidButton_44_5.small = true;
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_44_5.ngOnInit();
    }
    if (firstCheck) {
      this._RouterLink_44_6.instance.routerLink = '/contact';
      if (!identical(_ctx.locales, null)) {
        (this._FluidDropdown_46_5.values = _ctx.locales);
      }
    }
    final currVal_5 = _ctx.selected;
    if (import18.checkBinding(this._expr_5, currVal_5, 'selected', 'package:stevertus/src/components/header/header.html')) {
      this._FluidDropdown_46_5.selected = currVal_5;
      this._expr_5 = currVal_5;
    }
    this._RouterLink_2_5.detectHostChanges(this, this._el_2);
    this._RouterLink_35_5.detectHostChanges(this, this._el_35);
    this._RouterLink_38_5.detectHostChanges(this, this._el_38);
    this._RouterLink_44_6.detectHostChanges(this._compView_44, this._el_44);
    this._textBinding_45.updateText(import26.interpolate0(this._pipe_ngtranslate_0.transform('contact')));
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    this._compView_44.detectChanges();
    this._compView_46.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._compView_44.destroyInternalState();
    this._compView_46.destroyInternalState();
    this._RouterLink_2_5.instance.ngOnDestroy();
    this._RouterLink_35_5.instance.ngOnDestroy();
    this._RouterLink_38_5.instance.ngOnDestroy();
    this._RouterLink_44_6.instance.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import15.ComponentStyles.scoped(styles$HeaderComponent, _debugComponentUrl));
      if (import18.isDevMode) {
        import15.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _HeaderComponentNgFactory = ComponentFactory<import2.HeaderComponent>('header', viewFactory_HeaderComponentHost0);
ComponentFactory<import2.HeaderComponent> get HeaderComponentNgFactory {
  return _HeaderComponentNgFactory;
}

ComponentFactory<import2.HeaderComponent> createHeaderComponentFactory() {
  return ComponentFactory('header', viewFactory_HeaderComponentHost0);
}

final List<dynamic> styles$HeaderComponentHost = const [];

class _ViewHeaderComponentHost0 extends import28.HostView<import2.HeaderComponent> {
  @override
  void build() {
    this.componentView = ViewHeaderComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import18.isDevMode
        ? import20.debugInjectorWrap(import2.HeaderComponent, () {
            return import2.HeaderComponent(this.injectorGet(import25.TranslationService, this.parentIndex));
          })
        : import2.HeaderComponent(this.injectorGet(import25.TranslationService, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import28.HostView<import2.HeaderComponent> viewFactory_HeaderComponentHost0() {
  return _ViewHeaderComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
