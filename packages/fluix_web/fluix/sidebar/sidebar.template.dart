// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'sidebar.dart';
export 'sidebar.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/sidebar/sidebar.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'sidebar.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_class.dart' as import5;
import 'sidebar-item/item.template.dart' as import6;
import 'sidebar-item/item.dart' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/views/view.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import '../icon/icon.template.dart' as import18;
import '../icon/icon.dart' as import19;
import 'package:angular/src/core/linker/views/host_view.dart' as import20;

final List<dynamic> styles$FluidSidebar = [import0.styles];

class ViewFluidSidebar0 extends import1.ComponentView<import2.FluidSidebar> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  import5.NgClass _NgClass_1_5;
  import6.ViewFluidSidebarItem0 _compView_4;
  import7.FluidSidebarItem _FluidSidebarItem_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  static import8.ComponentStyles _componentStyles;
  ViewFluidSidebar0(import9.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import11.document.createElement('fluid-sidebar');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:fluix_web/lib/fluix/sidebar/sidebar.dart' : null);
  }

  @override
  void build() {
    final import11.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import13.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_FluidSidebar1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final doc = import11.document;
    final _el_1 = import13.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_1);
    this._NgClass_1_5 = import5.NgClass(_el_1);
    final _el_2 = import13.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'container');
    this.addShimC(_el_2);
    final _el_3 = import13.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'scrollable');
    this.addShimC(_el_3);
    this.project(_el_3, 0);
    this._compView_4 = import6.ViewFluidSidebarItem0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_3.append(_el_4);
    this.addShimC(_el_4);
    this._FluidSidebarItem_4_5 = import7.FluidSidebarItem();
    this._compView_4.createAndProject(this._FluidSidebarItem_4_5, [const []]);
    final _anchor_5 = import13.appendAnchor(_el_2);
    this._appEl_5 = ViewContainer(5, 2, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_FluidSidebar2);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.fixed;
    final currVal_0 = (_ctx.expandable ? (_ctx.expanded ? 'expand expanded' : 'shrink') : '');
    if (import12.checkBinding(this._expr_0, currVal_0, 'expandable ? (expanded ? \'expand expanded\' : \'shrink\') : \'\'', 'package:fluix_web/fluix/sidebar/sidebar.html')) {
      this._NgClass_1_5.rawClass = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import12.debugThrowIfChanged)) {
      this._NgClass_1_5.ngDoCheck();
    }
    this._NgIf_5_9.ngIf = _ctx.expandable;
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._compView_4.destroyInternalState();
    this._NgClass_1_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import8.ComponentStyles.scoped(styles$FluidSidebar, _debugComponentUrl));
      if (import12.isDevMode) {
        import8.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidSidebarNgFactory = ComponentFactory<import2.FluidSidebar>('fluid-sidebar', viewFactory_FluidSidebarHost0);
ComponentFactory<import2.FluidSidebar> get FluidSidebarNgFactory {
  return _FluidSidebarNgFactory;
}

ComponentFactory<import2.FluidSidebar> createFluidSidebarFactory() {
  return ComponentFactory('fluid-sidebar', viewFactory_FluidSidebarHost0);
}

class _ViewFluidSidebar1 extends import16.EmbeddedView<import2.FluidSidebar> {
  _ViewFluidSidebar1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'bar-spacer');
    this.addShimC(_el_0);
    this.initRootNode(_el_0);
  }
}

import16.EmbeddedView<void> viewFactory_FluidSidebar1(import17.RenderView parentView, int parentIndex) {
  return _ViewFluidSidebar1(parentView, parentIndex);
}

class _ViewFluidSidebar2 extends import16.EmbeddedView<import2.FluidSidebar> {
  import18.ViewFluidIcon0 _compView_1;
  import19.FluidIcon _FluidIcon_1_5;
  _ViewFluidSidebar2(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'expand');
    this.addShimC(_el_0);
    this._compView_1 = import18.ViewFluidIcon0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._FluidIcon_1_5 = import19.FluidIcon(_el_1);
    final _text_2 = import13.createText('listView');
    this._compView_1.createAndProject(this._FluidIcon_1_5, [
      [_text_2]
    ]);
    _el_0.addEventListener('click', this.eventHandler0(_ctx.handleToggleExpand));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import12.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_1_5.ngOnInit();
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }
}

import16.EmbeddedView<void> viewFactory_FluidSidebar2(import17.RenderView parentView, int parentIndex) {
  return _ViewFluidSidebar2(parentView, parentIndex);
}

final List<dynamic> styles$FluidSidebarHost = const [];

class _ViewFluidSidebarHost0 extends import20.HostView<import2.FluidSidebar> {
  @override
  void build() {
    this.componentView = ViewFluidSidebar0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidSidebar();
    this.component.children = [];
    this.initRootNode(_el_0);
  }
}

import20.HostView<import2.FluidSidebar> viewFactory_FluidSidebarHost0() {
  return _ViewFluidSidebarHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
