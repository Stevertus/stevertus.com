// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'list.dart';
export 'list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/list/list.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'list.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidList = [import0.styles];

class ViewFluidList0 extends import1.ComponentView<import2.FluidList> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidList0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('fluid-list');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/list/list.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this.project(_el_0, 0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidList, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidListNgFactory = ComponentFactory<import2.FluidList>('fluid-list', viewFactory_FluidListHost0);
ComponentFactory<import2.FluidList> get FluidListNgFactory {
  return _FluidListNgFactory;
}

ComponentFactory<import2.FluidList> createFluidListFactory() {
  return ComponentFactory('fluid-list', viewFactory_FluidListHost0);
}

final List<dynamic> styles$FluidListHost = const [];

class _ViewFluidListHost0 extends import10.HostView<import2.FluidList> {
  @override
  void build() {
    this.componentView = ViewFluidList0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidList();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.FluidList> viewFactory_FluidListHost0() {
  return _ViewFluidListHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
