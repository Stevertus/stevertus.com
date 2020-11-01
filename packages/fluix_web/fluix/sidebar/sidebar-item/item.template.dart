// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'item.dart';
export 'item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/sidebar/sidebar-item/item.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'item.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/common/directives/ng_class.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import16;
import '../../icon/icon.template.dart' as import17;
import '../../icon/icon.dart' as import18;
import 'package:angular/src/core/linker/views/render_view.dart' as import19;
import 'package:angular/src/core/linker/views/host_view.dart' as import20;

final List<dynamic> styles$FluidSidebarItem = [import0.styles];

class ViewFluidSidebarItem0 extends import1.ComponentView<import2.FluidSidebarItem> {
  final import3.TextBinding _textBinding_5 = import3.TextBinding();
  import4.NgClass _NgClass_0_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import4.NgClass _NgClass_4_5;
  var _expr_1;
  var _expr_3;
  static import7.ComponentStyles _componentStyles;
  ViewFluidSidebarItem0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import10.document.createElement('fluid-sidebar-item');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:fluix_web/lib/fluix/sidebar/sidebar-item/item.dart' : null);
  }

  @override
  void build() {
    final import10.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import10.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this._NgClass_0_5 = import4.NgClass(_el_0);
    final _el_1 = import12.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'side');
    this.addShimC(_el_1);
    final _anchor_2 = import12.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_FluidSidebarItem1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import12.appendAnchor(_el_1);
    this._appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_FluidSidebarItem2);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _el_4 = import12.appendDiv(doc, _el_0);
    this.updateChildClass(_el_4, 'text');
    this.addShimC(_el_4);
    this._NgClass_4_5 = import4.NgClass(_el_4);
    _el_4.append(this._textBinding_5.element);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._NgClass_0_5.initialClasses = 'container');
    }
    final currVal_1 = (_ctx.active ? 'active' : '');
    if (import11.checkBinding(this._expr_1, currVal_1, 'active ? \'active\' : \'\'', 'package:fluix_web/fluix/sidebar/sidebar-item/item.html')) {
      this._NgClass_0_5.rawClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgClass_0_5.ngDoCheck();
    }
    this._NgIf_2_9.ngIf = (_ctx.icon != null);
    this._NgIf_3_9.ngIf = (_ctx.icon == null);
    if (firstCheck) {
      (this._NgClass_4_5.initialClasses = 'text');
    }
    final currVal_3 = (_ctx.expanded ? 'expand' : 'shrink');
    if (import11.checkBinding(this._expr_3, currVal_3, 'expanded ? \'expand\' : \'shrink\'', 'package:fluix_web/fluix/sidebar/sidebar-item/item.html')) {
      this._NgClass_4_5.rawClass = currVal_3;
      this._expr_3 = currVal_3;
    }
    if ((!import11.debugThrowIfChanged)) {
      this._NgClass_4_5.ngDoCheck();
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._textBinding_5.updateText(import14.interpolateString0(_ctx.text));
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._NgClass_4_5.ngOnDestroy();
    this._NgClass_0_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$FluidSidebarItem, _debugComponentUrl));
      if (import11.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidSidebarItemNgFactory = ComponentFactory<import2.FluidSidebarItem>('fluid-sidebar-item', viewFactory_FluidSidebarItemHost0);
ComponentFactory<import2.FluidSidebarItem> get FluidSidebarItemNgFactory {
  return _FluidSidebarItemNgFactory;
}

ComponentFactory<import2.FluidSidebarItem> createFluidSidebarItemFactory() {
  return ComponentFactory('fluid-sidebar-item', viewFactory_FluidSidebarItemHost0);
}

class _ViewFluidSidebarItem1 extends import16.EmbeddedView<import2.FluidSidebarItem> {
  import17.ViewFluidIcon0 _compView_0;
  import18.FluidIcon _FluidIcon_0_5;
  var _expr_0;
  _ViewFluidSidebarItem1(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import17.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import18.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.icon;
    if (import11.checkBinding(this._expr_0, currVal_0, 'icon', 'package:fluix_web/fluix/sidebar/sidebar-item/item.html')) {
      this._FluidIcon_0_5.icon = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((!import11.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import16.EmbeddedView<void> viewFactory_FluidSidebarItem1(import19.RenderView parentView, int parentIndex) {
  return _ViewFluidSidebarItem1(parentView, parentIndex);
}

class _ViewFluidSidebarItem2 extends import16.EmbeddedView<import2.FluidSidebarItem> {
  _ViewFluidSidebarItem2(import19.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this.initRootNodesAndSubscriptions(this.projectedNodes[0], null);
  }
}

import16.EmbeddedView<void> viewFactory_FluidSidebarItem2(import19.RenderView parentView, int parentIndex) {
  return _ViewFluidSidebarItem2(parentView, parentIndex);
}

final List<dynamic> styles$FluidSidebarItemHost = const [];

class _ViewFluidSidebarItemHost0 extends import20.HostView<import2.FluidSidebarItem> {
  @override
  void build() {
    this.componentView = ViewFluidSidebarItem0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidSidebarItem();
    this.initRootNode(_el_0);
  }
}

import20.HostView<import2.FluidSidebarItem> viewFactory_FluidSidebarItemHost0() {
  return _ViewFluidSidebarItemHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
