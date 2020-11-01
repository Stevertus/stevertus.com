// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'spinner.dart';
export 'spinner.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/spinner/spinner.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'spinner.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidSpinner = [import0.styles];

class ViewFluidSpinner0 extends import1.ComponentView<import2.FluidSpinner> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidSpinner0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('fluid-spinner');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/spinner/spinner.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    import8.setAttribute(_el_0, 'id', 'spinner');
    this.addShimC(_el_0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidSpinner, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidSpinnerNgFactory = ComponentFactory<import2.FluidSpinner>('fluid-spinner', viewFactory_FluidSpinnerHost0);
ComponentFactory<import2.FluidSpinner> get FluidSpinnerNgFactory {
  return _FluidSpinnerNgFactory;
}

ComponentFactory<import2.FluidSpinner> createFluidSpinnerFactory() {
  return ComponentFactory('fluid-spinner', viewFactory_FluidSpinnerHost0);
}

final List<dynamic> styles$FluidSpinnerHost = const [];

class _ViewFluidSpinnerHost0 extends import10.HostView<import2.FluidSpinner> {
  @override
  void build() {
    this.componentView = ViewFluidSpinner0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidSpinner();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.FluidSpinner> viewFactory_FluidSpinnerHost0() {
  return _ViewFluidSpinnerHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
