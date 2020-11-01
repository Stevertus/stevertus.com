// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'icon.dart';
export 'icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/icon/icon.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'icon.dart' as import2;
import 'package:angular/src/common/directives/ng_style.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import11;

final List<dynamic> styles$FluidIcon = [import0.styles];

class ViewFluidIcon0 extends import1.ComponentView<import2.FluidIcon> {
  import3.NgStyle _NgStyle_1_5;
  var _expr_0;
  static import4.ComponentStyles _componentStyles;
  ViewFluidIcon0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import7.document.createElement('fluid-icon');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:fluix_web/lib/fluix/icon/icon.dart' : null);
  }

  @override
  void build() {
    final import7.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import7.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    final _el_1 = import9.appendElement(doc, parentRenderNode, 'i');
    this.addShimE(_el_1);
    this._NgStyle_1_5 = import3.NgStyle(_el_1);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.sizeStyle;
    if (import8.checkBinding(this._expr_0, currVal_0, 'sizeStyle', 'package:fluix_web/fluix/icon/icon.html')) {
      this._NgStyle_1_5.rawStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import8.debugThrowIfChanged)) {
      this._NgStyle_1_5.ngDoCheck();
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$FluidIcon, _debugComponentUrl));
      if (import8.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidIconNgFactory = ComponentFactory<import2.FluidIcon>('fluid-icon', viewFactory_FluidIconHost0);
ComponentFactory<import2.FluidIcon> get FluidIconNgFactory {
  return _FluidIconNgFactory;
}

ComponentFactory<import2.FluidIcon> createFluidIconFactory() {
  return ComponentFactory('fluid-icon', viewFactory_FluidIconHost0);
}

final List<dynamic> styles$FluidIconHost = const [];

class _ViewFluidIconHost0 extends import11.HostView<import2.FluidIcon> {
  @override
  void build() {
    this.componentView = ViewFluidIcon0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidIcon(_el_0);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import8.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import11.HostView<import2.FluidIcon> viewFactory_FluidIconHost0() {
  return _ViewFluidIconHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
