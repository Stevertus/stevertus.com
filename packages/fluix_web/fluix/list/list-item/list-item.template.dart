// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'list-item.dart';
export 'list-item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/list/list-item/list-item.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'list-item.dart' as import2;
import 'package:angular/src/common/directives/ng_class.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import '../../icon/icon.template.dart' as import15;
import '../../icon/icon.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import 'package:angular/src/core/linker/views/host_view.dart' as import18;

final List<dynamic> styles$FluidListItem = [import0.styles];

class ViewFluidListItem0 extends import1.ComponentView<import2.FluidListItem> {
  import3.NgClass _NgClass_0_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_1;
  static import6.ComponentStyles _componentStyles;
  ViewFluidListItem0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('fluid-list-item');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:fluix_web/lib/fluix/list/list-item/list-item.dart' : null);
  }

  @override
  void build() {
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import9.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'fluid-item');
    this.addShimC(_el_0);
    this._NgClass_0_5 = import3.NgClass(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.addShimC(_el_1);
    final _el_2 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'leading');
    this.addShimC(_el_2);
    this.project(_el_2, 0);
    final _anchor_3 = import11.appendAnchor(_el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_FluidListItem1);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.project(_el_1, 1);
    this.project(_el_0, 2);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._NgClass_0_5.initialClasses = 'fluid-item');
    }
    final currVal_1 = _ctx.cssClasses;
    if (import10.checkBinding(this._expr_1, currVal_1, 'cssClasses', 'package:fluix_web/fluix/list/list-item/list-item.html')) {
      this._NgClass_0_5.rawClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._NgClass_0_5.ngDoCheck();
    }
    this._NgIf_3_9.ngIf = (_ctx.icon != null);
    this._appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._NgClass_0_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$FluidListItem, _debugComponentUrl));
      if (import10.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidListItemNgFactory = ComponentFactory<import2.FluidListItem>('fluid-list-item', viewFactory_FluidListItemHost0);
ComponentFactory<import2.FluidListItem> get FluidListItemNgFactory {
  return _FluidListItemNgFactory;
}

ComponentFactory<import2.FluidListItem> createFluidListItemFactory() {
  return ComponentFactory('fluid-list-item', viewFactory_FluidListItemHost0);
}

class _ViewFluidListItem1 extends import14.EmbeddedView<import2.FluidListItem> {
  import15.ViewFluidIcon0 _compView_0;
  import16.FluidIcon _FluidIcon_0_5;
  var _expr_0;
  _ViewFluidListItem1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import15.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import16.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.icon;
    if (import10.checkBinding(this._expr_0, currVal_0, 'icon', 'package:fluix_web/fluix/list/list-item/list-item.html')) {
      this._FluidIcon_0_5.icon = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import14.EmbeddedView<void> viewFactory_FluidListItem1(import17.RenderView parentView, int parentIndex) {
  return _ViewFluidListItem1(parentView, parentIndex);
}

final List<dynamic> styles$FluidListItemHost = const [];

class _ViewFluidListItemHost0 extends import18.HostView<import2.FluidListItem> {
  @override
  void build() {
    this.componentView = ViewFluidListItem0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidListItem();
    this.initRootNode(_el_0);
  }
}

import18.HostView<import2.FluidListItem> viewFactory_FluidListItemHost0() {
  return _ViewFluidListItemHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
