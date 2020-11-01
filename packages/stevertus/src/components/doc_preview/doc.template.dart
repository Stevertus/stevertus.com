// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'doc.dart';
export 'doc.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/doc_preview/doc.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'doc.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:fluix_web/fluix/card/card.template.dart' as import4;
import 'package:fluix_web/fluix/card/card.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/interpolate.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import18;
import 'package:angular/src/core/linker/views/render_view.dart' as import19;
import 'package:angular/src/core/linker/views/host_view.dart' as import20;

final List<dynamic> styles$DocumentPreviewComponent = [import0.styles];

class ViewDocumentPreviewComponent0 extends import1.ComponentView<import2.DocumentPreviewComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  import4.ViewFluidCard0 _compView_0;
  import5.FluidCard _FluidCard_0_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  import8.Element _el_2;
  static import9.ComponentStyles _componentStyles;
  ViewDocumentPreviewComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('doc-preview');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:stevertus/lib/src/components/doc_preview/doc.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import4.ViewFluidCard0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._FluidCard_0_5 = import5.FluidCard(_el_0);
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'img-container');
    this.addShimC(_el_1);
    this._el_2 = import13.appendElement(doc, _el_1, 'img');
    import13.setAttribute(this._el_2, 'alt', '');
    this.addShimE(this._el_2);
    final _el_3 = doc.createElement('h3');
    this.addShimE(_el_3);
    _el_3.append(this._textBinding_4.element);
    final _anchor_5 = import13.createAnchor();
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_DocumentPreviewComponent1);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    this._compView_0.createAndProject(this._FluidCard_0_5, [
      [_el_1, _el_3, this._appEl_5]
    ]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_0_5.ngOnInit();
    }
    this._NgIf_5_9.ngIf = _ctx.doc.description.isNotEmpty;
    this._appEl_5.detectChangesInNestedViews();
    final currVal_0 = _ctx.doc.img;
    if (import12.checkBinding(this._expr_0, currVal_0, 'doc.img', 'package:stevertus/src/components/doc_preview/doc.html')) {
      import13.setProperty(this._el_2, 'src', import15.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    this._textBinding_4.updateText(import16.interpolateString0(_ctx.doc.title));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_5.destroyNestedViews();
    this._compView_0.destroyInternalState();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$DocumentPreviewComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _DocumentPreviewComponentNgFactory = ComponentFactory<import2.DocumentPreviewComponent>('doc-preview', viewFactory_DocumentPreviewComponentHost0);
ComponentFactory<import2.DocumentPreviewComponent> get DocumentPreviewComponentNgFactory {
  return _DocumentPreviewComponentNgFactory;
}

ComponentFactory<import2.DocumentPreviewComponent> createDocumentPreviewComponentFactory() {
  return ComponentFactory('doc-preview', viewFactory_DocumentPreviewComponentHost0);
}

class _ViewDocumentPreviewComponent1 extends import18.EmbeddedView<import2.DocumentPreviewComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewDocumentPreviewComponent1(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import16.interpolateString0(_ctx.doc.description));
  }
}

import18.EmbeddedView<void> viewFactory_DocumentPreviewComponent1(import19.RenderView parentView, int parentIndex) {
  return _ViewDocumentPreviewComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DocumentPreviewComponentHost = const [];

class _ViewDocumentPreviewComponentHost0 extends import20.HostView<import2.DocumentPreviewComponent> {
  @override
  void build() {
    this.componentView = ViewDocumentPreviewComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.DocumentPreviewComponent();
    this.initRootNode(_el_0);
  }
}

import20.HostView<import2.DocumentPreviewComponent> viewFactory_DocumentPreviewComponentHost0() {
  return _ViewDocumentPreviewComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
