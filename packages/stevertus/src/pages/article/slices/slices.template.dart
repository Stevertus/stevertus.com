// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'slices.dart';
export 'slices.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/article/slices/slices.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'slices.dart' as import2;
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
import '../../../data/slices.dart' as import16;
import 'package:angular/src/runtime/text_binding.dart' as import17;
import 'package:fluix_web/fluix/button/button.template.dart' as import18;
import 'package:fluix_web/fluix/button/button.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import 'package:angular/src/core/linker/app_view_utils.dart' as import21;
import '../../../components/render_text/render.template.dart' as import22;
import '../../../components/render_text/render.dart' as import23;
import '../../../components/doc_grid/grid.template.dart' as import24;
import '../../../components/doc_grid/grid.dart' as import25;
import 'package:angular/src/di/errors.dart' as import26;
import 'package:angular_router/src/router/router.dart' as import27;
import 'package:angular/src/core/linker/views/host_view.dart' as import28;

final List<dynamic> styles$SlicesComponent = [import0.styles];

class ViewSlicesComponent0 extends import1.ComponentView<import2.SlicesComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewSlicesComponent0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('article-slices');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:stevertus/lib/src/pages/article/slices/slices.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_SlicesComponent1);
    this._NgFor_0_9 = import4.NgFor(this._appEl_0, _TemplateRef_0_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.slices;
    if (import9.checkBinding(this._expr_0, currVal_0, 'slices', 'package:stevertus/src/pages/article/slices/slices.html')) {
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
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$SlicesComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _SlicesComponentNgFactory = ComponentFactory<import2.SlicesComponent>('article-slices', viewFactory_SlicesComponentHost0);
ComponentFactory<import2.SlicesComponent> get SlicesComponentNgFactory {
  return _SlicesComponentNgFactory;
}

ComponentFactory<import2.SlicesComponent> createSlicesComponentFactory() {
  return ComponentFactory('article-slices', viewFactory_SlicesComponentHost0);
}

class _ViewSlicesComponent1 extends import13.EmbeddedView<import2.SlicesComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  _ViewSlicesComponent1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'slice');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_SlicesComponent2);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _text_2 = import10.appendText(_el_0, ' ');
    final _anchor_3 = import10.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_SlicesComponent3);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import10.appendAnchor(_el_0);
    this._appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_SlicesComponent4);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import10.appendAnchor(_el_0);
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_SlicesComponent5);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_slice = import9.unsafeCast<import16.Slice>(this.locals['\$implicit']);
    this._NgIf_1_9.ngIf = (_ctx.checkDownload(local_slice) != null);
    this._NgIf_3_9.ngIf = (_ctx.checkImage(local_slice) != null);
    this._NgIf_4_9.ngIf = (_ctx.checkText(local_slice) != null);
    this._NgIf_5_9.ngIf = (_ctx.checkRecommendations(local_slice) != null);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_SlicesComponent1(import15.RenderView parentView, int parentIndex) {
  return _ViewSlicesComponent1(parentView, parentIndex);
}

class _ViewSlicesComponent2 extends import13.EmbeddedView<import2.SlicesComponent> {
  final import17.TextBinding _textBinding_1 = import17.TextBinding();
  import18.ViewFluidButton0 _compView_0;
  import19.FluidButton _FluidButton_0_5;
  _ViewSlicesComponent2(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import18.ViewFluidButton0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClass(_el_0, 'download');
    import10.setAttribute(_el_0, 'fluidBtn', '');
    import10.setAttribute(_el_0, 'highlight', '');
    this.addShimC(_el_0);
    this._FluidButton_0_5 = import19.FluidButton(_el_0);
    this._compView_0.createAndProject(this._FluidButton_0_5, [
      [this._textBinding_1.element]
    ]);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final local_slice = import9.unsafeCast<import16.Slice>(import9.unsafeCast<_ViewSlicesComponent1>(this.parentView).locals['\$implicit']);
    if (firstCheck) {
      (this._FluidButton_0_5.highlight = true);
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_0_5.ngOnInit();
    }
    this._textBinding_1.updateText(import20.interpolate0((_ctx.checkDownload(local_slice).title ?? 'Download')));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_slice = import9.unsafeCast<import16.Slice>(import9.unsafeCast<_ViewSlicesComponent1>(this.parentView).locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.openDownloadLink(local_slice);
  }
}

import13.EmbeddedView<void> viewFactory_SlicesComponent2(import15.RenderView parentView, int parentIndex) {
  return _ViewSlicesComponent2(parentView, parentIndex);
}

class _ViewSlicesComponent3 extends import13.EmbeddedView<import2.SlicesComponent> {
  var _expr_0;
  import8.Element _el_0;
  _ViewSlicesComponent3(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    this._el_0 = doc.createElement('img');
    import10.setAttribute(this._el_0, 'alt', '');
    this.updateChildClass(this._el_0, 'img');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_slice = import9.unsafeCast<import16.Slice>(import9.unsafeCast<_ViewSlicesComponent1>(this.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.checkImage(local_slice).url;
    if (import9.checkBinding(this._expr_0, currVal_0, 'checkImage(slice).url', 'package:stevertus/src/pages/article/slices/slices.html')) {
      import10.setProperty(this._el_0, 'src', import21.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
  }
}

import13.EmbeddedView<void> viewFactory_SlicesComponent3(import15.RenderView parentView, int parentIndex) {
  return _ViewSlicesComponent3(parentView, parentIndex);
}

class _ViewSlicesComponent4 extends import13.EmbeddedView<import2.SlicesComponent> {
  import22.ViewTextRenderComponent0 _compView_0;
  import23.TextRenderComponent _TextRenderComponent_0_5;
  var _expr_0;
  _ViewSlicesComponent4(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import22.ViewTextRenderComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._TextRenderComponent_0_5 = import23.TextRenderComponent();
    this._compView_0.create(this._TextRenderComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_slice = import9.unsafeCast<import16.Slice>(import9.unsafeCast<_ViewSlicesComponent1>(this.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.checkText(local_slice).body;
    if (import9.checkBinding(this._expr_0, currVal_0, 'checkText(slice).body', 'package:stevertus/src/pages/article/slices/slices.html')) {
      this._TextRenderComponent_0_5.text = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_SlicesComponent4(import15.RenderView parentView, int parentIndex) {
  return _ViewSlicesComponent4(parentView, parentIndex);
}

class _ViewSlicesComponent5 extends import13.EmbeddedView<import2.SlicesComponent> {
  import24.ViewDocumentGridComponent0 _compView_0;
  import25.DocumentGridComponent _DocumentGridComponent_0_5;
  var _expr_0;
  _ViewSlicesComponent5(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import24.ViewDocumentGridComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import10.setAttribute(_el_0, 'scroll', '');
    this.addShimC(_el_0);
    this._DocumentGridComponent_0_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import25.DocumentGridComponent, () {
            return import25.DocumentGridComponent(this.parentView.parentView.injectorGet(import27.Router, this.parentView.parentIndex));
          })
        : import25.DocumentGridComponent(this.parentView.parentView.injectorGet(import27.Router, this.parentView.parentIndex)));
    this._compView_0.create(this._DocumentGridComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final local_slice = import9.unsafeCast<import16.Slice>(import9.unsafeCast<_ViewSlicesComponent1>(this.parentView).locals['\$implicit']);
    if (firstCheck) {
      (this._DocumentGridComponent_0_5.scroll = true);
    }
    final currVal_0 = _ctx.checkRecommendations(local_slice).recommended;
    if (import9.checkBinding(this._expr_0, currVal_0, 'checkRecommendations(slice).recommended', 'package:stevertus/src/pages/article/slices/slices.html')) {
      this._DocumentGridComponent_0_5.documents = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_SlicesComponent5(import15.RenderView parentView, int parentIndex) {
  return _ViewSlicesComponent5(parentView, parentIndex);
}

final List<dynamic> styles$SlicesComponentHost = const [];

class _ViewSlicesComponentHost0 extends import28.HostView<import2.SlicesComponent> {
  @override
  void build() {
    this.componentView = ViewSlicesComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.SlicesComponent();
    this.initRootNode(_el_0);
  }
}

import28.HostView<import2.SlicesComponent> viewFactory_SlicesComponentHost0() {
  return _ViewSlicesComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
