// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'landing.dart';
export 'landing.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/landing/landing.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'landing.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'section/section.template.dart' as import4;
import 'section/section.dart' as import5;
import 'card/card.template.dart' as import6;
import 'card/card.dart' as import7;
import 'package:fluix_web/fluix/button/button.template.dart' as import8;
import 'package:fluix_web/fluix/button/button.dart' as import9;
import 'package:ng_translate/src/translation_pipe.dart' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:ng_translate/src/translation_directive.dart' as import17;
import 'package:ng_translate/src/translation_service.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import22;

final List<dynamic> styles$LandingPage = [import0.styles];

class ViewLandingPage0 extends import1.ComponentView<import2.LandingPage> {
  final import3.TextBinding _textBinding_21 = import3.TextBinding();
  final import3.TextBinding _textBinding_29 = import3.TextBinding();
  final import3.TextBinding _textBinding_37 = import3.TextBinding();
  final import3.TextBinding _textBinding_45 = import3.TextBinding();
  final import3.TextBinding _textBinding_56 = import3.TextBinding();
  import4.ViewLandingSection0 _compView_2;
  import5.LandingSection _LandingSection_2_5;
  import6.ViewLandingCard0 _compView_14;
  import7.LandingCard _LandingCard_14_5;
  import8.ViewFluidButton0 _compView_20;
  import9.FluidButton _FluidButton_20_5;
  import6.ViewLandingCard0 _compView_22;
  import7.LandingCard _LandingCard_22_5;
  import8.ViewFluidButton0 _compView_28;
  import9.FluidButton _FluidButton_28_5;
  import6.ViewLandingCard0 _compView_30;
  import7.LandingCard _LandingCard_30_5;
  import8.ViewFluidButton0 _compView_36;
  import9.FluidButton _FluidButton_36_5;
  import6.ViewLandingCard0 _compView_38;
  import7.LandingCard _LandingCard_38_5;
  import8.ViewFluidButton0 _compView_44;
  import9.FluidButton _FluidButton_44_5;
  import4.ViewLandingSection0 _compView_46;
  import5.LandingSection _LandingSection_46_5;
  import8.ViewFluidButton0 _compView_55;
  import9.FluidButton _FluidButton_55_5;
  import10.TranslationPipe _pipe_ngtranslate_0;
  import10.TranslationPipe _pipe_ngtranslate_1;
  import10.TranslationPipe _pipe_ngtranslate_2;
  import10.TranslationPipe _pipe_ngtranslate_3;
  import10.TranslationPipe _pipe_ngtranslate_4;
  static import11.ComponentStyles _componentStyles;
  ViewLandingPage0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import14.document.createElement('landing');
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:stevertus/lib/src/pages/landing/landing.dart' : null);
  }

  @override
  void build() {
    final import14.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import14.document;
    final _el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    final _el_1 = import16.appendElement(doc, _el_0, 'img');
    import16.setAttribute(_el_1, 'alt', '');
    this.updateChildClass(_el_1, 'banner');
    import16.setAttribute(_el_1, 'src', '/assets/yt_banner.webp');
    this.addShimE(_el_1);
    this._compView_2 = import4.ViewLandingSection0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    this.addShimC(_el_2);
    this._LandingSection_2_5 = import5.LandingSection();
    final _el_3 = doc.createElement('h1');
    import16.setAttribute(_el_3, 'ngtranslate', '');
    this.addShimE(_el_3);
    final _text_4 = import16.appendText(_el_3, 'landing.section1.title');
    import17.TranslationDirective(_el_3, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_5 = doc.createElement('h3');
    import16.setAttribute(_el_5, 'ngtranslate', '');
    this.addShimE(_el_5);
    final _text_6 = import16.appendText(_el_5, 'landing.section1.subtitle');
    import17.TranslationDirective(_el_5, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_7 = doc.createElement('div');
    this.updateChildClass(_el_7, 'spacer');
    this.addShimC(_el_7);
    final _el_8 = doc.createElement('p');
    import16.setAttribute(_el_8, 'ngtranslate', '');
    this.addShimE(_el_8);
    final _text_9 = import16.appendText(_el_8, 'landing.section1.text');
    import17.TranslationDirective(_el_8, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_10 = doc.createElement('div');
    this.updateChildClass(_el_10, 'spacer');
    this.addShimC(_el_10);
    final _el_11 = doc.createElement('img');
    import16.setAttribute(_el_11, 'alt', '');
    import16.setAttribute(_el_11, 'right', '');
    import16.setAttribute(_el_11, 'src', '/assets/blob1.svg');
    this.addShimE(_el_11);
    this._compView_2.createAndProject(this._LandingSection_2_5, [
      const [],
      [_el_3, _el_5, _el_7, _el_8, _el_10],
      [_el_11]
    ]);
    final _el_12 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'cards');
    this.addShimC(_el_12);
    final _el_13 = import16.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'scroll-content');
    this.addShimC(_el_13);
    this._compView_14 = import6.ViewLandingCard0(this, 14);
    final _el_14 = this._compView_14.rootElement;
    _el_13.append(_el_14);
    this.addShimC(_el_14);
    this._LandingCard_14_5 = import7.LandingCard();
    final _el_15 = doc.createElement('img');
    import16.setAttribute(_el_15, 'alt', '');
    import16.setAttribute(_el_15, 'src', '/assets/logos/objd.png');
    this.addShimE(_el_15);
    final _el_16 = doc.createElement('h3');
    import16.setAttribute(_el_16, 'ngtranslate', '');
    this.addShimE(_el_16);
    final _text_17 = import16.appendText(_el_16, 'landing.card_objd.title');
    import17.TranslationDirective(_el_16, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_18 = doc.createElement('p');
    import16.setAttribute(_el_18, 'ngtranslate', '');
    this.addShimE(_el_18);
    final _text_19 = import16.appendText(_el_18, 'landing.card_objd.desc');
    import17.TranslationDirective(_el_18, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    this._compView_20 = import8.ViewFluidButton0(this, 20);
    final _el_20 = this._compView_20.rootElement;
    import16.setAttribute(_el_20, 'fluidBtn', '');
    import16.setAttribute(_el_20, 'highlight', '');
    this.addShimC(_el_20);
    this._FluidButton_20_5 = import9.FluidButton(_el_20);
    this._compView_20.createAndProject(this._FluidButton_20_5, [
      [this._textBinding_21.element]
    ]);
    this._compView_14.createAndProject(this._LandingCard_14_5, [
      [_el_15, _el_16, _el_18, _el_20]
    ]);
    this._compView_22 = import6.ViewLandingCard0(this, 22);
    final _el_22 = this._compView_22.rootElement;
    _el_13.append(_el_22);
    this.addShimC(_el_22);
    this._LandingCard_22_5 = import7.LandingCard();
    final _el_23 = doc.createElement('img');
    import16.setAttribute(_el_23, 'alt', '');
    import16.setAttribute(_el_23, 'src', '/assets/logos/mcscript.png');
    this.addShimE(_el_23);
    final _el_24 = doc.createElement('h3');
    import16.setAttribute(_el_24, 'ngtranslate', '');
    this.addShimE(_el_24);
    final _text_25 = import16.appendText(_el_24, 'landing.card_mcscript.title');
    import17.TranslationDirective(_el_24, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_26 = doc.createElement('p');
    import16.setAttribute(_el_26, 'ngtranslate', '');
    this.addShimE(_el_26);
    final _text_27 = import16.appendText(_el_26, 'landing.card_mcscript.desc');
    import17.TranslationDirective(_el_26, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    this._compView_28 = import8.ViewFluidButton0(this, 28);
    final _el_28 = this._compView_28.rootElement;
    import16.setAttribute(_el_28, 'fluidBtn', '');
    this.addShimC(_el_28);
    this._FluidButton_28_5 = import9.FluidButton(_el_28);
    this._compView_28.createAndProject(this._FluidButton_28_5, [
      [this._textBinding_29.element]
    ]);
    this._compView_22.createAndProject(this._LandingCard_22_5, [
      [_el_23, _el_24, _el_26, _el_28]
    ]);
    this._compView_30 = import6.ViewLandingCard0(this, 30);
    final _el_30 = this._compView_30.rootElement;
    _el_13.append(_el_30);
    this.addShimC(_el_30);
    this._LandingCard_30_5 = import7.LandingCard();
    final _el_31 = doc.createElement('img');
    import16.setAttribute(_el_31, 'alt', '');
    import16.setAttribute(_el_31, 'src', '/assets/logos/dmanager.png');
    this.addShimE(_el_31);
    final _el_32 = doc.createElement('h3');
    import16.setAttribute(_el_32, 'ngtranslate', '');
    this.addShimE(_el_32);
    final _text_33 = import16.appendText(_el_32, 'landing.card_dmanager.title');
    import17.TranslationDirective(_el_32, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_34 = doc.createElement('p');
    import16.setAttribute(_el_34, 'ngtranslate', '');
    this.addShimE(_el_34);
    final _text_35 = import16.appendText(_el_34, 'landing.card_dmanager.desc');
    import17.TranslationDirective(_el_34, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    this._compView_36 = import8.ViewFluidButton0(this, 36);
    final _el_36 = this._compView_36.rootElement;
    import16.setAttribute(_el_36, 'fluidBtn', '');
    this.addShimC(_el_36);
    this._FluidButton_36_5 = import9.FluidButton(_el_36);
    this._compView_36.createAndProject(this._FluidButton_36_5, [
      [this._textBinding_37.element]
    ]);
    this._compView_30.createAndProject(this._LandingCard_30_5, [
      [_el_31, _el_32, _el_34, _el_36]
    ]);
    this._compView_38 = import6.ViewLandingCard0(this, 38);
    final _el_38 = this._compView_38.rootElement;
    _el_13.append(_el_38);
    this.addShimC(_el_38);
    this._LandingCard_38_5 = import7.LandingCard();
    final _el_39 = doc.createElement('img');
    import16.setAttribute(_el_39, 'alt', '');
    import16.setAttribute(_el_39, 'src', '/assets/logos/worldedit.png');
    this.addShimE(_el_39);
    final _el_40 = doc.createElement('h3');
    import16.setAttribute(_el_40, 'ngtranslate', '');
    this.addShimE(_el_40);
    final _text_41 = import16.appendText(_el_40, 'landing.card_worldedit.title');
    import17.TranslationDirective(_el_40, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_42 = doc.createElement('p');
    import16.setAttribute(_el_42, 'ngtranslate', '');
    this.addShimE(_el_42);
    final _text_43 = import16.appendText(_el_42, 'landing.card_worldedit.desc');
    import17.TranslationDirective(_el_42, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    this._compView_44 = import8.ViewFluidButton0(this, 44);
    final _el_44 = this._compView_44.rootElement;
    import16.setAttribute(_el_44, 'fluidBtn', '');
    this.addShimC(_el_44);
    this._FluidButton_44_5 = import9.FluidButton(_el_44);
    this._compView_44.createAndProject(this._FluidButton_44_5, [
      [this._textBinding_45.element]
    ]);
    this._compView_38.createAndProject(this._LandingCard_38_5, [
      [_el_39, _el_40, _el_42, _el_44]
    ]);
    this._compView_46 = import4.ViewLandingSection0(this, 46);
    final _el_46 = this._compView_46.rootElement;
    _el_0.append(_el_46);
    this.addShimC(_el_46);
    this._LandingSection_46_5 = import5.LandingSection();
    final _el_47 = doc.createElement('img');
    import16.setAttribute(_el_47, 'alt', '');
    import16.setAttribute(_el_47, 'left', '');
    import16.setAttribute(_el_47, 'src', '/assets/blob2.svg');
    this.addShimE(_el_47);
    final _el_48 = doc.createElement('h1');
    import16.setAttribute(_el_48, 'ngtranslate', '');
    this.addShimE(_el_48);
    final _text_49 = import16.appendText(_el_48, 'landing.section2.title');
    import17.TranslationDirective(_el_48, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_50 = doc.createElement('h3');
    import16.setAttribute(_el_50, 'ngtranslate', '');
    this.addShimE(_el_50);
    final _text_51 = import16.appendText(_el_50, 'landing.section2.subtitle');
    import17.TranslationDirective(_el_50, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    final _el_52 = doc.createElement('div');
    this.updateChildClass(_el_52, 'spacer');
    this.addShimC(_el_52);
    final _el_53 = doc.createElement('p');
    import16.setAttribute(_el_53, 'ngtranslate', '');
    this.addShimE(_el_53);
    final _text_54 = import16.appendText(_el_53, 'landing.section2.text');
    import17.TranslationDirective(_el_53, this.parentView.injectorGet(import18.TranslationService, this.parentIndex), '');
    this._compView_55 = import8.ViewFluidButton0(this, 55);
    final _el_55 = this._compView_55.rootElement;
    import16.setAttribute(_el_55, 'fluidBtn', '');
    this.addShimC(_el_55);
    this._FluidButton_55_5 = import9.FluidButton(_el_55);
    this._compView_55.createAndProject(this._FluidButton_55_5, [
      [this._textBinding_56.element]
    ]);
    final _el_57 = doc.createElement('div');
    this.updateChildClass(_el_57, 'spacer');
    this.addShimC(_el_57);
    this._compView_46.createAndProject(this._LandingSection_46_5, [
      [_el_47],
      [_el_48, _el_50, _el_52, _el_53, _el_55, _el_57],
      const []
    ]);
    _el_14.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    _el_22.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    _el_30.addEventListener('click', this.eventHandler1(this._handleEvent_2));
    _el_38.addEventListener('click', this.eventHandler1(this._handleEvent_3));
    import19.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_0 = import10.TranslationPipe(this.parentView.injectorGet(import18.TranslationService, this.parentIndex));
    import19.debugInjectorLeave(import10.TranslationPipe);
    import19.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_1 = import10.TranslationPipe(this.parentView.injectorGet(import18.TranslationService, this.parentIndex));
    import19.debugInjectorLeave(import10.TranslationPipe);
    import19.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_2 = import10.TranslationPipe(this.parentView.injectorGet(import18.TranslationService, this.parentIndex));
    import19.debugInjectorLeave(import10.TranslationPipe);
    import19.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_3 = import10.TranslationPipe(this.parentView.injectorGet(import18.TranslationService, this.parentIndex));
    import19.debugInjectorLeave(import10.TranslationPipe);
    import19.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_4 = import10.TranslationPipe(this.parentView.injectorGet(import18.TranslationService, this.parentIndex));
    import19.debugInjectorLeave(import10.TranslationPipe);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidButton_20_5.highlight = true);
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_20_5.ngOnInit();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_28_5.ngOnInit();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_36_5.ngOnInit();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_44_5.ngOnInit();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_55_5.ngOnInit();
    }
    this._textBinding_21.updateText(import20.interpolate0(this._pipe_ngtranslate_0.transform('landing.card_objd.button')));
    this._textBinding_29.updateText(import20.interpolate0(this._pipe_ngtranslate_1.transform('view')));
    this._textBinding_37.updateText(import20.interpolate0(this._pipe_ngtranslate_2.transform('download')));
    this._textBinding_45.updateText(import20.interpolate0(this._pipe_ngtranslate_3.transform('view')));
    this._textBinding_56.updateText(import20.interpolate0(this._pipe_ngtranslate_4.transform('landing.section2.button')));
    this._compView_2.detectChanges();
    this._compView_14.detectChanges();
    this._compView_20.detectChanges();
    this._compView_22.detectChanges();
    this._compView_28.detectChanges();
    this._compView_30.detectChanges();
    this._compView_36.detectChanges();
    this._compView_38.detectChanges();
    this._compView_44.detectChanges();
    this._compView_46.detectChanges();
    this._compView_55.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
    this._compView_14.destroyInternalState();
    this._compView_20.destroyInternalState();
    this._compView_22.destroyInternalState();
    this._compView_28.destroyInternalState();
    this._compView_30.destroyInternalState();
    this._compView_36.destroyInternalState();
    this._compView_38.destroyInternalState();
    this._compView_44.destroyInternalState();
    this._compView_46.destroyInternalState();
    this._compView_55.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.navigateTo('https://objd.stevertus.com');
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.navigateTo('https://stevertus.com/mscript');
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.navigateTo('https://dmanager.stevertus.com');
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.navigateTo('https://stevertus.com/worldedit/package');
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$LandingPage, _debugComponentUrl));
      if (import15.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _LandingPageNgFactory = ComponentFactory<import2.LandingPage>('landing', viewFactory_LandingPageHost0);
ComponentFactory<import2.LandingPage> get LandingPageNgFactory {
  return _LandingPageNgFactory;
}

ComponentFactory<import2.LandingPage> createLandingPageFactory() {
  return ComponentFactory('landing', viewFactory_LandingPageHost0);
}

final List<dynamic> styles$LandingPageHost = const [];

class _ViewLandingPageHost0 extends import22.HostView<import2.LandingPage> {
  @override
  void build() {
    this.componentView = ViewLandingPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.LandingPage();
    this.initRootNode(_el_0);
  }
}

import22.HostView<import2.LandingPage> viewFactory_LandingPageHost0() {
  return _ViewLandingPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
