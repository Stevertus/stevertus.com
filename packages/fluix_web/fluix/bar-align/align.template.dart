// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'align.dart';
export 'align.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/bar-align/align.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'align.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidBarAlign = [import0.styles];

class ViewFluidBarAlign0 extends import1.ComponentView<import2.FluidBarAlign> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidBarAlign0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('fluid-bar-align');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/bar-align/align.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    final _el_1 = import8.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'spacer');
    this.addShimC(_el_1);
    this.project(_el_0, 1);
    final _el_2 = import8.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'spacer');
    this.addShimC(_el_2);
    final _el_3 = import8.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'trailing');
    this.addShimC(_el_3);
    this.project(_el_3, 2);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidBarAlign, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidBarAlignNgFactory = ComponentFactory<import2.FluidBarAlign>('fluid-bar-align', viewFactory_FluidBarAlignHost0);
ComponentFactory<import2.FluidBarAlign> get FluidBarAlignNgFactory {
  return _FluidBarAlignNgFactory;
}

ComponentFactory<import2.FluidBarAlign> createFluidBarAlignFactory() {
  return ComponentFactory('fluid-bar-align', viewFactory_FluidBarAlignHost0);
}

final List<dynamic> styles$FluidBarAlignHost = const [];

class _ViewFluidBarAlignHost0 extends import10.HostView<import2.FluidBarAlign> {
  @override
  void build() {
    this.componentView = ViewFluidBarAlign0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidBarAlign();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.FluidBarAlign> viewFactory_FluidBarAlignHost0() {
  return _ViewFluidBarAlignHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
