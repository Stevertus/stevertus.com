// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'grid.dart';
export 'grid.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/doc_grid/grid.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'grid.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import '../doc_preview/doc.template.dart' as import14;
import '../doc_preview/doc.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import '../../data/document.dart' as import17;
import 'package:angular/src/core/linker/views/host_view.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:angular_router/src/router/router.dart' as import20;

final List<dynamic> styles$DocumentGridComponent = [import0.styles];

class ViewDocumentGridComponent0 extends import1.ComponentView<import2.DocumentGridComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_1;
  import5.DivElement _el_0;
  static import6.ComponentStyles _componentStyles;
  ViewDocumentGridComponent0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import5.document.createElement('doc-grid');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:stevertus/lib/src/components/doc_grid/grid.dart' : null);
  }

  @override
  void build() {
    final import5.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import5.document;
    this._el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'grid');
    this.addShimC(this._el_0);
    final _anchor_1 = import10.appendAnchor(this._el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_DocumentGridComponent1);
    this._NgFor_1_9 = import4.NgFor(this._appEl_1, _TemplateRef_1_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_1 = _ctx.documents;
    if (import9.checkBinding(this._expr_1, currVal_1, 'documents', 'package:stevertus/src/components/doc_grid/grid.html')) {
      this._NgFor_1_9.ngForOf = currVal_1;
      this._expr_1 = currVal_1;
    }
    if ((!import9.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.scroll;
    if (import9.checkBinding(this._expr_0, currVal_0, 'scroll', 'package:stevertus/src/components/doc_grid/grid.html')) {
      import10.updateClassBinding(this._el_0, 'scrollable', currVal_0);
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$DocumentGridComponent, _debugComponentUrl));
      if (import9.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _DocumentGridComponentNgFactory = ComponentFactory<import2.DocumentGridComponent>('doc-grid', viewFactory_DocumentGridComponentHost0);
ComponentFactory<import2.DocumentGridComponent> get DocumentGridComponentNgFactory {
  return _DocumentGridComponentNgFactory;
}

ComponentFactory<import2.DocumentGridComponent> createDocumentGridComponentFactory() {
  return ComponentFactory('doc-grid', viewFactory_DocumentGridComponentHost0);
}

class _ViewDocumentGridComponent1 extends import13.EmbeddedView<import2.DocumentGridComponent> {
  import14.ViewDocumentPreviewComponent0 _compView_0;
  import15.DocumentPreviewComponent _DocumentPreviewComponent_0_5;
  var _expr_0;
  _ViewDocumentGridComponent1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewDocumentPreviewComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._DocumentPreviewComponent_0_5 = import15.DocumentPreviewComponent();
    this._compView_0.create(this._DocumentPreviewComponent_0_5);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_doc = import9.unsafeCast<import17.Document>(this.locals['\$implicit']);
    final currVal_0 = local_doc;
    if (import9.checkBinding(this._expr_0, currVal_0, 'doc', 'package:stevertus/src/components/doc_grid/grid.html')) {
      this._DocumentPreviewComponent_0_5.doc = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_doc = import9.unsafeCast<import17.Document>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.openDocument(local_doc);
  }
}

import13.EmbeddedView<void> viewFactory_DocumentGridComponent1(import16.RenderView parentView, int parentIndex) {
  return _ViewDocumentGridComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DocumentGridComponentHost = const [];

class _ViewDocumentGridComponentHost0 extends import18.HostView<import2.DocumentGridComponent> {
  @override
  void build() {
    this.componentView = ViewDocumentGridComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import19.debugInjectorWrap(import2.DocumentGridComponent, () {
            return import2.DocumentGridComponent(this.injectorGet(import20.Router, this.parentIndex));
          })
        : import2.DocumentGridComponent(this.injectorGet(import20.Router, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import18.HostView<import2.DocumentGridComponent> viewFactory_DocumentGridComponentHost0() {
  return _ViewDocumentGridComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
