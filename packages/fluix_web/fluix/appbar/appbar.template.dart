// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'appbar.dart';
export 'appbar.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/appbar/appbar.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'appbar.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_class.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/views/view.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import14;
import 'package:angular/src/core/linker/views/render_view.dart' as import15;
import 'package:angular/src/core/linker/views/host_view.dart' as import16;

final List<dynamic> styles$FluidAppbar = [import0.styles];

class ViewFluidAppbar0 extends import1.ComponentView<import2.FluidAppbar> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  import5.NgClass _NgClass_1_5;
  var _expr_1;
  static import6.ComponentStyles _componentStyles;
  ViewFluidAppbar0(import7.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import9.document.createElement('fluid-appbar');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:fluix_web/lib/fluix/appbar/appbar.dart' : null);
  }

  @override
  void build() {
    final import9.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_FluidAppbar1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final doc = import9.document;
    final _el_1 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'fluid-bar');
    this.addShimC(_el_1);
    this._NgClass_1_5 = import5.NgClass(_el_1);
    this.project(_el_1, 0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    this._NgIf_0_9.ngIf = _ctx.fixed;
    if (firstCheck) {
      (this._NgClass_1_5.initialClasses = 'fluid-bar');
    }
    final currVal_1 = (_ctx.fixed ? 'fluid-bar-fixed' : '');
    if (import10.checkBinding(this._expr_1, currVal_1, 'fixed ? \'fluid-bar-fixed\' : \'\'', 'package:fluix_web/fluix/appbar/appbar.html')) {
      this._NgClass_1_5.rawClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._NgClass_1_5.ngDoCheck();
    }
    this._appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._NgClass_1_5.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import6.ComponentStyles.scoped(styles$FluidAppbar, _debugComponentUrl));
      if (import10.isDevMode) {
        import6.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidAppbarNgFactory = ComponentFactory<import2.FluidAppbar>('fluid-appbar', viewFactory_FluidAppbarHost0);
ComponentFactory<import2.FluidAppbar> get FluidAppbarNgFactory {
  return _FluidAppbarNgFactory;
}

ComponentFactory<import2.FluidAppbar> createFluidAppbarFactory() {
  return ComponentFactory('fluid-appbar', viewFactory_FluidAppbarHost0);
}

class _ViewFluidAppbar1 extends import14.EmbeddedView<import2.FluidAppbar> {
  _ViewFluidAppbar1(import15.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'fluid-bar-spacer');
    this.addShimC(_el_0);
    this.initRootNode(_el_0);
  }
}

import14.EmbeddedView<void> viewFactory_FluidAppbar1(import15.RenderView parentView, int parentIndex) {
  return _ViewFluidAppbar1(parentView, parentIndex);
}

final List<dynamic> styles$FluidAppbarHost = const [];

class _ViewFluidAppbarHost0 extends import16.HostView<import2.FluidAppbar> {
  @override
  void build() {
    this.componentView = ViewFluidAppbar0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidAppbar();
    this.initRootNode(_el_0);
  }
}

import16.HostView<import2.FluidAppbar> viewFactory_FluidAppbarHost0() {
  return _ViewFluidAppbarHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
