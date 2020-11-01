// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tekpack.dart';
export 'tekpack.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/tekpack/tekpack.component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'tekpack.dart' as import2;
import 'package:fluix_web/fluix/card/card.template.dart' as import3;
import 'package:fluix_web/fluix/card/card.dart' as import4;
import 'package:fluix_web/fluix/button/button.template.dart' as import5;
import 'package:fluix_web/fluix/button/button.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../services/safe_url.dart' as import9;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import10;
import 'package:angular/src/core/linker/views/view.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import17;
import 'package:angular/src/security/dom_sanitization_service.dart' as import18;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import20;
import 'package:angular/src/core/linker/views/render_view.dart' as import21;
import 'package:angular/src/runtime/proxies.dart' as import22;
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/common/directives/ng_for.dart' as import24;
import 'package:angular/src/runtime/text_binding.dart' as import25;
import 'package:angular/src/runtime/interpolate.dart' as import26;
import 'dart:core';
import 'package:angular/src/core/linker/views/host_view.dart' as import28;

final List<dynamic> styles$TekPackPage = [import0.styles];

class ViewTekPackPage0 extends import1.ComponentView<import2.TekPackPage> {
  import3.ViewFluidCard0 _compView_3;
  import4.FluidCard _FluidCard_3_5;
  import5.ViewFluidButton0 _compView_11;
  import6.FluidButton _FluidButton_11_5;
  import5.ViewFluidButton0 _compView_15;
  import6.FluidButton _FluidButton_15_5;
  ViewContainer _appEl_18;
  NgIf _NgIf_18_9;
  ViewContainer _appEl_19;
  NgIf _NgIf_19_9;
  ViewContainer _appEl_20;
  NgIf _NgIf_20_9;
  import9.SafeURLPipe _pipe_safeURL_0;
  static import10.ComponentStyles _componentStyles;
  ViewTekPackPage0(import11.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import13.document.createElement('tekpack');
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:stevertus/lib/src/pages/tekpack/tekpack.dart' : null);
  }

  @override
  void build() {
    final import13.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import13.document;
    final _el_0 = import15.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    final _el_1 = import15.appendElement(doc, _el_0, 'img');
    import15.setAttribute(_el_1, 'alt', 'tekpack');
    this.updateChildClass(_el_1, 'logo');
    import15.setAttribute(_el_1, 'src', 'assets/tekpack/logo.png');
    this.addShimE(_el_1);
    final _el_2 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'floatingCard');
    this.addShimC(_el_2);
    this._compView_3 = import3.ViewFluidCard0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    _el_2.append(_el_3);
    this.addShimC(_el_3);
    this._FluidCard_3_5 = import4.FluidCard(_el_3);
    final _el_4 = doc.createElement('h2');
    this.addShimE(_el_4);
    final _text_5 = import15.appendText(_el_4, 'tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus\'s programming language ');
    final _el_6 = import15.appendElement(doc, _el_4, 'a');
    import15.setAttribute(_el_6, 'routerLink', '/mcscript');
    this.addShimC(_el_6);
    final _text_7 = import15.appendText(_el_6, 'mcScript');
    final _text_8 = import15.appendText(_el_4, '.');
    final _el_9 = import15.appendElement(doc, _el_4, 'br');
    this.addShimE(_el_9);
    final _text_10 = import15.appendText(_el_4, ' It introduces multiple technical parts and blocks to enrich the vanilla gameplay.');
    this._compView_11 = import5.ViewFluidButton0(this, 11);
    final _el_11 = this._compView_11.rootElement;
    import15.setAttribute(_el_11, 'fluidBtn', '');
    import15.setAttribute(_el_11, 'highlight', '');
    import15.setAttribute(_el_11, 'style', 'width: 50%;height: 60px;line-height: 30px');
    this.addShimC(_el_11);
    this._FluidButton_11_5 = import6.FluidButton(_el_11);
    final _text_12 = import15.createText('Get it via ');
    final _el_13 = doc.createElement('img');
    import15.setAttribute(_el_13, 'alt', 'dmanager');
    import15.setAttribute(_el_13, 'src', 'assets/dManager-icon.ico');
    import15.setAttribute(_el_13, 'style', 'height:25px;margin-left:5px');
    this.addShimE(_el_13);
    this._compView_11.createAndProject(this._FluidButton_11_5, [
      [_text_12, _el_13]
    ]);
    final _text_14 = import15.createText(' ');
    this._compView_15 = import5.ViewFluidButton0(this, 15);
    final _el_15 = this._compView_15.rootElement;
    import15.setAttribute(_el_15, 'fluidBtn', '');
    import15.setAttribute(_el_15, 'secondary', '');
    this.addShimC(_el_15);
    this._FluidButton_15_5 = import6.FluidButton(_el_15);
    final _text_16 = import15.createText('Opensource on ');
    final _el_17 = doc.createElement('img');
    import15.setAttribute(_el_17, 'alt', '');
    import15.setAttribute(_el_17, 'src', 'assets/gitHub_icon.svg');
    import15.setAttribute(_el_17, 'style', 'height:25px');
    this.addShimE(_el_17);
    this._compView_15.createAndProject(this._FluidButton_15_5, [
      [_text_16, _el_17]
    ]);
    this._compView_3.createAndProject(this._FluidCard_3_5, [
      [_el_4, _el_11, _text_14, _el_15]
    ]);
    final _anchor_18 = import15.appendAnchor(_el_0);
    this._appEl_18 = ViewContainer(18, 0, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = TemplateRef(this._appEl_18, viewFactory_TekPackPage1);
    this._NgIf_18_9 = NgIf(this._appEl_18, _TemplateRef_18_8);
    final _anchor_19 = import15.appendAnchor(_el_0);
    this._appEl_19 = ViewContainer(19, 0, this, _anchor_19);
    TemplateRef _TemplateRef_19_8 = TemplateRef(this._appEl_19, viewFactory_TekPackPage2);
    this._NgIf_19_9 = NgIf(this._appEl_19, _TemplateRef_19_8);
    final _anchor_20 = import15.appendAnchor(_el_0);
    this._appEl_20 = ViewContainer(20, 0, this, _anchor_20);
    TemplateRef _TemplateRef_20_8 = TemplateRef(this._appEl_20, viewFactory_TekPackPage6);
    this._NgIf_20_9 = NgIf(this._appEl_20, _TemplateRef_20_8);
    _el_11.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    _el_15.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    import17.debugInjectorEnter(import9.SafeURLPipe);
    this._pipe_safeURL_0 = import9.SafeURLPipe(this.parentView.injectorGet(import18.DomSanitizationService, this.parentIndex));
    import17.debugInjectorLeave(import9.SafeURLPipe);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_3_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidButton_11_5.highlight = true);
    }
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_11_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidButton_15_5.secondary = true);
    }
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_15_5.ngOnInit();
    }
    this._NgIf_18_9.ngIf = (_ctx.video != null);
    this._NgIf_19_9.ngIf = ((_ctx.items != null) && _ctx.items.isNotEmpty);
    this._NgIf_20_9.ngIf = ((_ctx.changes != null) && _ctx.changes.isNotEmpty);
    this._appEl_18.detectChangesInNestedViews();
    this._appEl_19.detectChangesInNestedViews();
    this._appEl_20.detectChangesInNestedViews();
    this._compView_3.detectChanges();
    this._compView_11.detectChanges();
    this._compView_15.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_18.destroyNestedViews();
    this._appEl_19.destroyNestedViews();
    this._appEl_20.destroyNestedViews();
    this._compView_3.destroyInternalState();
    this._compView_11.destroyInternalState();
    this._compView_15.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.openLink('https://dmanager.stevertus.com/pack/open/stevertus:tekpack');
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.openLink('https://github.com/Stevertus/tekPack');
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import10.ComponentStyles.scoped(styles$TekPackPage, _debugComponentUrl));
      if (import14.isDevMode) {
        import10.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _TekPackPageNgFactory = ComponentFactory<import2.TekPackPage>('tekpack', viewFactory_TekPackPageHost0);
ComponentFactory<import2.TekPackPage> get TekPackPageNgFactory {
  return _TekPackPageNgFactory;
}

ComponentFactory<import2.TekPackPage> createTekPackPageFactory() {
  return ComponentFactory('tekpack', viewFactory_TekPackPageHost0);
}

class _ViewTekPackPage1 extends import20.EmbeddedView<import2.TekPackPage> {
  var _expr_0;
  dynamic Function(dynamic) _pipe_safeURL_0_0;
  import13.IFrameElement _el_1;
  _ViewTekPackPage1(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'video');
    this.addShimC(_el_0);
    this._el_1 = import15.appendElement(doc, _el_0, 'iframe');
    import15.setAttribute(this._el_1, 'allow', 'autoplay; encrypted-media');
    import15.setAttribute(this._el_1, 'allowfullscreen', '');
    import15.setAttribute(this._el_1, 'frameborder', '0');
    this.addShimC(this._el_1);
    this._pipe_safeURL_0_0 = import22.pureProxy1(import14.unsafeCast<ViewTekPackPage0>(this.parentView)._pipe_safeURL_0.transform);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = this._pipe_safeURL_0_0((('https://www.youtube.com/embed/' + _ctx.video) + '?rel=0&amp;controls=0&amp;showinfo=0'));
    if (import14.checkBinding(this._expr_0, currVal_0, '\'https://www.youtube.com/embed/\' + video + \'?rel=0&amp;controls=0&amp;showinfo=0\' | safeURL', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      import15.setProperty(this._el_1, 'src', import23.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage1(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage1(parentView, parentIndex);
}

class _ViewTekPackPage2 extends import20.EmbeddedView<import2.TekPackPage> {
  ViewContainer _appEl_1;
  import24.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewTekPackPage2(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'grid');
    this.addShimC(_el_0);
    final _anchor_1 = import15.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_TekPackPage3);
    this._NgFor_1_9 = import24.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.items;
    if (import14.checkBinding(this._expr_0, currVal_0, 'items', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage2(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage2(parentView, parentIndex);
}

class _ViewTekPackPage3 extends import20.EmbeddedView<import2.TekPackPage> {
  final import25.TextBinding _textBinding_2 = import25.TextBinding();
  ViewContainer _appEl_5;
  import24.NgFor _NgFor_5_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import13.Element _el_3;
  import13.DivElement _el_4;
  import13.DivElement _el_6;
  _ViewTekPackPage3(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'item');
    this.addShimC(_el_0);
    final _el_1 = import15.appendElement(doc, _el_0, 'h5');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    this._el_3 = import15.appendElement(doc, _el_0, 'img');
    import15.setAttribute(this._el_3, 'alt', '');
    this.updateChildClass(this._el_3, 'icon');
    this.addShimE(this._el_3);
    this._el_4 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_4, 'crafting-grid');
    this.addShimC(this._el_4);
    final _anchor_5 = import15.appendAnchor(this._el_4);
    this._appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_TekPackPage4);
    this._NgFor_5_9 = import24.NgFor(this._appEl_5, _TemplateRef_5_8);
    this._el_6 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_6, 'description');
    this.addShimC(this._el_6);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import14.unsafeCast<import2.TekPackItem>(this.locals['\$implicit']);
    final currVal_2 = local_item.ingredients;
    if (import14.checkBinding(this._expr_2, currVal_2, 'item.ingredients', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      this._NgFor_5_9.ngForOf = currVal_2;
      this._expr_2 = currVal_2;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_5_9.ngDoCheck();
    }
    this._appEl_5.detectChangesInNestedViews();
    this._textBinding_2.updateText(import26.interpolateString0(local_item.name));
    final currVal_0 = local_item.texture;
    if (import14.checkBinding(this._expr_0, currVal_0, 'item.texture', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      import15.setProperty(this._el_3, 'src', import23.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    final bool currVal_1 = (!local_item.isNotBlue);
    if (import14.checkBinding(this._expr_1, currVal_1, '!item.isNotBlue', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      import15.updateClassBinding(this._el_4, 'crafting-blue', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_3 = local_item.desc;
    if (import14.checkBinding(this._expr_3, currVal_3, 'item.desc', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      import15.setProperty(this._el_6, 'innerHTML', import23.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
      this._expr_3 = currVal_3;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_5.destroyNestedViews();
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage3(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage3(parentView, parentIndex);
}

class _ViewTekPackPage4 extends import20.EmbeddedView<import2.TekPackPage> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewTekPackPage4(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'crafting-item');
    this.addShimC(_el_0);
    final _anchor_1 = import15.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_TekPackPage5);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_craft = import14.unsafeCast<String>(this.locals['\$implicit']);
    this._NgIf_1_9.ngIf = (local_craft != null);
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage4(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage4(parentView, parentIndex);
}

class _ViewTekPackPage5 extends import20.EmbeddedView<import2.TekPackPage> {
  var _expr_0;
  import13.Element _el_0;
  _ViewTekPackPage5(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    this._el_0 = doc.createElement('img');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final local_craft = import14.unsafeCast<String>(import14.unsafeCast<_ViewTekPackPage4>(this.parentView).locals['\$implicit']);
    final currVal_0 = local_craft;
    if (import14.checkBinding(this._expr_0, currVal_0, 'craft', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      import15.setProperty(this._el_0, 'src', import23.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage5(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage5(parentView, parentIndex);
}

class _ViewTekPackPage6 extends import20.EmbeddedView<import2.TekPackPage> {
  import3.ViewFluidCard0 _compView_0;
  import4.FluidCard _FluidCard_0_5;
  ViewContainer _appEl_3;
  import24.NgFor _NgFor_3_9;
  var _expr_0;
  _ViewTekPackPage6(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import3.ViewFluidCard0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidCard_0_5 = import4.FluidCard(_el_0);
    final doc = import13.document;
    final _el_1 = doc.createElement('h2');
    import15.setAttribute(_el_1, 'id', 'changelog');
    this.addShimE(_el_1);
    final _text_2 = import15.appendText(_el_1, 'Changelog');
    final _anchor_3 = import15.createAnchor();
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_TekPackPage7);
    this._NgFor_3_9 = import24.NgFor(this._appEl_3, _TemplateRef_3_8);
    this._compView_0.createAndProject(this._FluidCard_0_5, [
      [_el_1, this._appEl_3]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_0_5.ngOnInit();
    }
    final currVal_0 = _ctx.getKeys(_ctx.changes);
    if (import14.checkBinding(this._expr_0, currVal_0, 'getKeys(changes)', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      this._NgFor_3_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_3_9.ngDoCheck();
    }
    this._appEl_3.detectChangesInNestedViews();
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._compView_0.destroyInternalState();
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage6(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage6(parentView, parentIndex);
}

class _ViewTekPackPage7 extends import20.EmbeddedView<import2.TekPackPage> {
  final import25.TextBinding _textBinding_2 = import25.TextBinding();
  ViewContainer _appEl_4;
  import24.NgFor _NgFor_4_9;
  var _expr_0;
  _ViewTekPackPage7(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('div');
    this.addShimC(_el_0);
    final _el_1 = import15.appendElement(doc, _el_0, 'h4');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    final _el_3 = import15.appendElement(doc, _el_0, 'ul');
    this.addShimC(_el_3);
    final _anchor_4 = import15.appendAnchor(_el_3);
    this._appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_TekPackPage8);
    this._NgFor_4_9 = import24.NgFor(this._appEl_4, _TemplateRef_4_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_version = this.locals['\$implicit'];
    final currVal_0 = _ctx.changes[local_version];
    if (import14.checkBinding(this._expr_0, currVal_0, 'changes[version]', 'package:stevertus/src/pages/tekpack/tekpack.component.html')) {
      this._NgFor_4_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import14.debugThrowIfChanged)) {
      this._NgFor_4_9.ngDoCheck();
    }
    this._appEl_4.detectChangesInNestedViews();
    this._textBinding_2.updateText(import26.interpolate0(local_version));
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage7(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage7(parentView, parentIndex);
}

class _ViewTekPackPage8 extends import20.EmbeddedView<import2.TekPackPage> {
  final import25.TextBinding _textBinding_1 = import25.TextBinding();
  _ViewTekPackPage8(import21.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import13.document;
    final _el_0 = doc.createElement('li');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_change = this.locals['\$implicit'];
    this._textBinding_1.updateText(import26.interpolate0(local_change));
  }
}

import20.EmbeddedView<void> viewFactory_TekPackPage8(import21.RenderView parentView, int parentIndex) {
  return _ViewTekPackPage8(parentView, parentIndex);
}

final List<dynamic> styles$TekPackPageHost = const [];

class _ViewTekPackPageHost0 extends import28.HostView<import2.TekPackPage> {
  @override
  void build() {
    this.componentView = ViewTekPackPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.TekPackPage();
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import14.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import28.HostView<import2.TekPackPage> viewFactory_TekPackPageHost0() {
  return _ViewTekPackPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
