// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'render.dart';
export 'render.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/render_text/render.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'render.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import '../../data/text_parts.dart' as import16;
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/src/runtime/text_binding.dart' as import18;
import 'package:angular/src/runtime/interpolate.dart' as import19;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import20;
import 'package:angular/src/di/errors.dart' as import21;
import 'package:angular_router/src/directives/router_link_directive.dart' as import22;
import 'package:angular_router/src/router/router.dart' as import23;
import 'package:angular_router/src/location/location.dart' as import24;
import 'package:angular/src/core/linker/views/host_view.dart' as import25;

final List<dynamic> styles$TextRenderComponent = [import0.styles];

class ViewTextRenderComponent0 extends import1.ComponentView<import2.TextRenderComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewTextRenderComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('render-text');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:stevertus/lib/src/components/render_text/render.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_TextRenderComponent1);
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.text;
    if (import9.checkBinding(this._expr_0, currVal_0, 'text', 'package:stevertus/src/components/render_text/render.html')) {
      this._NgFor_0_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_0_9.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$TextRenderComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _TextRenderComponentNgFactory = ComponentFactory<import2.TextRenderComponent>('render-text', viewFactory_TextRenderComponentHost0);
ComponentFactory<import2.TextRenderComponent> get TextRenderComponentNgFactory {
  return _TextRenderComponentNgFactory;
}

ComponentFactory<import2.TextRenderComponent> createTextRenderComponentFactory() {
  return ComponentFactory('render-text', viewFactory_TextRenderComponentHost0);
}

class _ViewTextRenderComponent1 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  _ViewTextRenderComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_TextRenderComponent2);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _text_1 = import10.createText(' ');
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_TextRenderComponent3);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import10.createAnchor();
    this._appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_TextRenderComponent9);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, _text_1, this._appEl_2, this._appEl_3], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(this.locals['\$implicit']);
    this._NgIf_0_9.ngIf = (_ctx.getImgText(local_t) != null);
    this._NgIf_2_9.ngIf = _ctx.isRawText(local_t);
    this._NgIf_3_9.ngIf = (!_ctx.isRawText(local_t));
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent1(parentView, parentIndex);
}

class _ViewTextRenderComponent2 extends import13.EmbeddedView<import2.TextRenderComponent> {
  var _expr_0;
  var _expr_1;
  import8.Element _el_0;
  _ViewTextRenderComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('img');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.getImgText(local_t).url;
    if (import9.checkBinding(this._expr_0, currVal_0, 'getImgText(t).url', 'package:stevertus/src/components/render_text/render.html')) {
      import10.setProperty(this._el_0, 'src', import17.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    final currVal_1 = local_t.text;
    if (import9.checkBinding(this._expr_1, currVal_1, 't.text', 'package:stevertus/src/components/render_text/render.html')) {
      import10.setProperty(this._el_0, 'alt', currVal_1);
      this._expr_1 = currVal_1;
    }
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent2(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent2(parentView, parentIndex);
}

class _ViewTextRenderComponent3 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  _ViewTextRenderComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_TextRenderComponent4);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _text_1 = import10.createText(' ');
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_TextRenderComponent5);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _text_3 = import10.createText(' ');
    final _anchor_4 = import10.createAnchor();
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_TextRenderComponent6);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _text_5 = import10.createText(' ');
    final _anchor_6 = import10.createAnchor();
    this._appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_TextRenderComponent7);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _text_7 = import10.createText(' ');
    final _anchor_8 = import10.createAnchor();
    this._appEl_8 = ViewContainer(8, null, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_TextRenderComponent8);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, _text_1, this._appEl_2, _text_3, this._appEl_4, _text_5, this._appEl_6, _text_7, this._appEl_8], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_0_9.ngIf = (local_t.type == 'text');
    this._NgIf_2_9.ngIf = (local_t.type == 'strong');
    this._NgIf_4_9.ngIf = (local_t.type == 'em');
    this._NgIf_6_9.ngIf = (_ctx.getLinkText(local_t) != null);
    this._NgIf_8_9.ngIf = (_ctx.getIntLinkText(local_t) != null);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent3(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent3(parentView, parentIndex);
}

class _ViewTextRenderComponent4 extends import13.EmbeddedView<import2.TextRenderComponent> {
  final import18.TextBinding _textBinding_0 = import18.TextBinding();
  _ViewTextRenderComponent4(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNode(this._textBinding_0.element);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_0.updateText(import19.interpolateString0(local_t.text));
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent4(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent4(parentView, parentIndex);
}

class _ViewTextRenderComponent5 extends import13.EmbeddedView<import2.TextRenderComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  _ViewTextRenderComponent5(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('b');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import19.interpolateString0(local_t.text));
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent5(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent5(parentView, parentIndex);
}

class _ViewTextRenderComponent6 extends import13.EmbeddedView<import2.TextRenderComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  _ViewTextRenderComponent6(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('i');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    this._textBinding_1.updateText(import19.interpolateString0(local_t.text));
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent6(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent6(parentView, parentIndex);
}

class _ViewTextRenderComponent7 extends import13.EmbeddedView<import2.TextRenderComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  var _expr_0;
  import8.AnchorElement _el_0;
  _ViewTextRenderComponent7(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('a');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.getLinkText(local_t).link;
    if (import9.checkBinding(this._expr_0, currVal_0, 'getLinkText(t).link', 'package:stevertus/src/components/render_text/render.html')) {
      import10.setProperty(this._el_0, 'href', import17.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import19.interpolateString0(local_t.text));
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent7(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent7(parentView, parentIndex);
}

class _ViewTextRenderComponent8 extends import13.EmbeddedView<import2.TextRenderComponent> {
  final import18.TextBinding _textBinding_1 = import18.TextBinding();
  import20.RouterLinkNgCd _RouterLink_0_5;
  var _expr_0;
  import8.AnchorElement _el_0;
  _ViewTextRenderComponent8(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('a');
    this.addShimC(this._el_0);
    this._RouterLink_0_5 = import20.RouterLinkNgCd((import9.isDevMode
        ? import21.debugInjectorWrap(import22.RouterLink, () {
            return import22.RouterLink(this.parentView.injectorGet(import23.Router, this.parentIndex), this.parentView.injectorGet(import24.Location, this.parentIndex), null, this._el_0);
          })
        : import22.RouterLink(this.parentView.injectorGet(import23.Router, this.parentIndex), this.parentView.injectorGet(import24.Location, this.parentIndex), null, this._el_0)));
    this._el_0.append(this._textBinding_1.element);
    this._el_0.addEventListener('click', this.eventHandler1(this._RouterLink_0_5.instance.onClick));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = ('/article/' + _ctx.getIntLinkText(local_t).uid);
    if (import9.checkBinding(this._expr_0, currVal_0, '\'/article/\' + getIntLinkText(t).uid', 'package:stevertus/src/components/render_text/render.html')) {
      this._RouterLink_0_5.instance.routerLink = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._RouterLink_0_5.detectHostChanges(this, this._el_0);
    this._textBinding_1.updateText(import19.interpolateString0(local_t.text));
  }

  @override
  void destroyInternal() {
    this._RouterLink_0_5.instance.ngOnDestroy();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent8(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent8(parentView, parentIndex);
}

class _ViewTextRenderComponent9 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  _ViewTextRenderComponent9(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_TextRenderComponent10);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.createAnchor();
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_TextRenderComponent11);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.createAnchor();
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_TextRenderComponent12);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import10.createAnchor();
    this._appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_TextRenderComponent13);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import10.createAnchor();
    this._appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_TextRenderComponent14);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import10.createAnchor();
    this._appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_TextRenderComponent15);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import10.createAnchor();
    this._appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_TextRenderComponent16);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import10.createAnchor();
    this._appEl_7 = ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_TextRenderComponent17);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _anchor_8 = import10.createAnchor();
    this._appEl_8 = ViewContainer(8, null, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_TextRenderComponent18);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    final _anchor_9 = import10.createAnchor();
    this._appEl_9 = ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(this._appEl_9, viewFactory_TextRenderComponent19);
    this._NgIf_9_9 = NgIf(this._appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import10.createAnchor();
    this._appEl_10 = ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(this._appEl_10, viewFactory_TextRenderComponent20);
    this._NgIf_10_9 = NgIf(this._appEl_10, _TemplateRef_10_8);
    this.initRootNodesAndSubscriptions([this._appEl_0, this._appEl_1, this._appEl_2, this._appEl_3, this._appEl_4, this._appEl_5, this._appEl_6, this._appEl_7, this._appEl_8, this._appEl_9, this._appEl_10], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView).locals['\$implicit']);
    this._NgIf_0_9.ngIf = (local_t.type == 'heading1');
    this._NgIf_1_9.ngIf = (local_t.type == 'heading2');
    this._NgIf_2_9.ngIf = (local_t.type == 'heading3');
    this._NgIf_3_9.ngIf = (local_t.type == 'heading4');
    this._NgIf_4_9.ngIf = (local_t.type == 'heading5');
    this._NgIf_5_9.ngIf = (local_t.type == 'heading6');
    this._NgIf_6_9.ngIf = (local_t.type == 'paragraph');
    this._NgIf_7_9.ngIf = (local_t.type == 'preformatted');
    this._NgIf_8_9.ngIf = ((local_t.type == 'list') && (_ctx.getListText(local_t) != null));
    this._NgIf_9_9.ngIf = ((local_t.type == 'o-list') && (_ctx.getListText(local_t) != null));
    this._NgIf_10_9.ngIf = ((local_t.type == 'list-item') || (local_t.type == 'o-list-item'));
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._appEl_9.detectChangesInNestedViews();
    this._appEl_10.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._appEl_9.destroyNestedViews();
    this._appEl_10.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent9(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent9(parentView, parentIndex);
}

class _ViewTextRenderComponent10 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent10(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h1');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent10(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent10(parentView, parentIndex);
}

class _ViewTextRenderComponent11 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent11(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h2');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent11(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent11(parentView, parentIndex);
}

class _ViewTextRenderComponent12 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent12(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h3');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent12(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent12(parentView, parentIndex);
}

class _ViewTextRenderComponent13 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent13(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h4');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent13(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent13(parentView, parentIndex);
}

class _ViewTextRenderComponent14 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent14(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h5');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent14(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent14(parentView, parentIndex);
}

class _ViewTextRenderComponent15 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent15(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h6');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent15(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent15(parentView, parentIndex);
}

class _ViewTextRenderComponent16 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent16(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent16(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent16(parentView, parentIndex);
}

class _ViewTextRenderComponent17 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_2;
  import2.TextRenderComponent _TextRenderComponent_2_5;
  var _expr_0;
  _ViewTextRenderComponent17(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('code');
    this.addShimE(_el_0);
    final _el_1 = import10.appendElement(doc, _el_0, 'pre');
    this.addShimE(_el_1);
    this._compView_2 = ViewTextRenderComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_1.append(_el_2);
    this.addShimC(_el_2);
    this._TextRenderComponent_2_5 = import2.TextRenderComponent();
    this._compView_2.create(this._TextRenderComponent_2_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_2_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent17(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent17(parentView, parentIndex);
}

class _ViewTextRenderComponent18 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent18(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('ul');
    this.addShimC(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.getListText(local_t).items;
    if (import9.checkBinding(this._expr_0, currVal_0, 'getListText(t).items', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent18(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent18(parentView, parentIndex);
}

class _ViewTextRenderComponent19 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent19(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('ol');
    this.addShimC(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.getListText(local_t).items;
    if (import9.checkBinding(this._expr_0, currVal_0, 'getListText(t).items', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent19(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent19(parentView, parentIndex);
}

class _ViewTextRenderComponent20 extends import13.EmbeddedView<import2.TextRenderComponent> {
  ViewTextRenderComponent0 _compView_1;
  import2.TextRenderComponent _TextRenderComponent_1_5;
  var _expr_0;
  _ViewTextRenderComponent20(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('li');
    this.addShimE(_el_0);
    this._compView_1 = ViewTextRenderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._TextRenderComponent_1_5 = import2.TextRenderComponent();
    this._compView_1.create(this._TextRenderComponent_1_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_t = import9.unsafeCast<import16.TextPart>(import9.unsafeCast<_ViewTextRenderComponent1>(this.parentView.parentView).locals['\$implicit']);
    final currVal_0 = local_t.spans;
    if (import9.checkBinding(this._expr_0, currVal_0, 't.spans', 'package:stevertus/src/components/render_text/render.html')) {
      this._TextRenderComponent_1_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_TextRenderComponent20(import15.RenderView parentView, int parentIndex) {
  return _ViewTextRenderComponent20(parentView, parentIndex);
}

final List<dynamic> styles$TextRenderComponentHost = const [];

class _ViewTextRenderComponentHost0 extends import25.HostView<import2.TextRenderComponent> {
  @override
  void build() {
    this.componentView = ViewTextRenderComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.TextRenderComponent();
    this.initRootNode(_el_0);
  }
}

import25.HostView<import2.TextRenderComponent> viewFactory_TextRenderComponentHost0() {
  return _ViewTextRenderComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
