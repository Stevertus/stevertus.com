// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'projects.dart';
export 'projects.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/projects/projects.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'projects.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import 'package:fluix_web/fluix/spinner/spinner.template.dart' as import14;
import 'package:fluix_web/fluix/spinner/spinner.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import '../../components/doc_grid/grid.template.dart' as import17;
import '../../components/doc_grid/grid.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:angular_router/src/router/router.dart' as import20;
import 'package:angular/src/core/linker/views/host_view.dart' as import21;
import 'package:ng_translate/src/translation_service.dart' as import22;

final List<dynamic> styles$ProjectsPage = [import0.styles];

class ViewProjectsPage0 extends import1.ComponentView<import2.ProjectsPage> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  static import5.ComponentStyles _componentStyles;
  ViewProjectsPage0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('projects');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:stevertus/lib/src/pages/projects/projects.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_ProjectsPage1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ProjectsPage2);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import10.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_ProjectsPage3);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.loading;
    this._NgIf_2_9.ngIf = ((!_ctx.loading) && _ctx.projects.isNotEmpty);
    this._NgIf_3_9.ngIf = ((!_ctx.loading) && _ctx.projects.isEmpty);
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$ProjectsPage, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ProjectsPageNgFactory = ComponentFactory<import2.ProjectsPage>('projects', viewFactory_ProjectsPageHost0);
ComponentFactory<import2.ProjectsPage> get ProjectsPageNgFactory {
  return _ProjectsPageNgFactory;
}

ComponentFactory<import2.ProjectsPage> createProjectsPageFactory() {
  return ComponentFactory('projects', viewFactory_ProjectsPageHost0);
}

class _ViewProjectsPage1 extends import13.EmbeddedView<import2.ProjectsPage> {
  import14.ViewFluidSpinner0 _compView_0;
  import15.FluidSpinner _FluidSpinner_0_5;
  _ViewProjectsPage1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidSpinner0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidSpinner_0_5 = import15.FluidSpinner();
    this._compView_0.create(this._FluidSpinner_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_ProjectsPage1(import16.RenderView parentView, int parentIndex) {
  return _ViewProjectsPage1(parentView, parentIndex);
}

class _ViewProjectsPage2 extends import13.EmbeddedView<import2.ProjectsPage> {
  import17.ViewDocumentGridComponent0 _compView_0;
  import18.DocumentGridComponent _DocumentGridComponent_0_5;
  var _expr_0;
  _ViewProjectsPage2(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import17.ViewDocumentGridComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._DocumentGridComponent_0_5 = (import9.isDevMode
        ? import19.debugInjectorWrap(import18.DocumentGridComponent, () {
            return import18.DocumentGridComponent(this.parentView.parentView.injectorGet(import20.Router, this.parentView.parentIndex));
          })
        : import18.DocumentGridComponent(this.parentView.parentView.injectorGet(import20.Router, this.parentView.parentIndex)));
    this._compView_0.create(this._DocumentGridComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.projects;
    if (import9.checkBinding(this._expr_0, currVal_0, 'projects', 'package:stevertus/src/pages/projects/projects.html')) {
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

import13.EmbeddedView<void> viewFactory_ProjectsPage2(import16.RenderView parentView, int parentIndex) {
  return _ViewProjectsPage2(parentView, parentIndex);
}

class _ViewProjectsPage3 extends import13.EmbeddedView<import2.ProjectsPage> {
  _ViewProjectsPage3(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'error');
    this.addShimE(_el_0);
    final _text_1 = import10.appendText(_el_0, 'No projects have been found!');
    this.initRootNode(_el_0);
  }
}

import13.EmbeddedView<void> viewFactory_ProjectsPage3(import16.RenderView parentView, int parentIndex) {
  return _ViewProjectsPage3(parentView, parentIndex);
}

final List<dynamic> styles$ProjectsPageHost = const [];

class _ViewProjectsPageHost0 extends import21.HostView<import2.ProjectsPage> {
  @override
  void build() {
    this.componentView = ViewProjectsPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import19.debugInjectorWrap(import2.ProjectsPage, () {
            return import2.ProjectsPage(this.injectorGet(import22.TranslationService, this.parentIndex));
          })
        : import2.ProjectsPage(this.injectorGet(import22.TranslationService, this.parentIndex)));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import21.HostView<import2.ProjectsPage> viewFactory_ProjectsPageHost0() {
  return _ViewProjectsPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
