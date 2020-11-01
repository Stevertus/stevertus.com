// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tag.dart';
export 'tag.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/tag/tag.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'tag.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/views/view.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidTag = [import0.styles];

class ViewFluidTag0 extends import1.ComponentView<import2.FluidTag> {
  var _expr_0;
  var _expr_1;
  import3.DivElement _el_0;
  static import4.ComponentStyles _componentStyles;
  ViewFluidTag0(import5.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import3.document.createElement('fluid-tag');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/tag/tag.dart' : null);
  }

  @override
  void build() {
    final import3.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import3.document;
    this._el_0 = import8.appendDiv(doc, parentRenderNode);
    this.addShimC(this._el_0);
    this.project(this._el_0, 0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.value;
    if (import7.checkBinding(this._expr_0, currVal_0, 'value', 'package:fluix_web/fluix/tag/tag.html')) {
      import8.updateClassBinding(this._el_0, 'active', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import7.checkBinding(this._expr_1, currVal_1, 'disabled', 'package:fluix_web/fluix/tag/tag.html')) {
      import8.updateClassBinding(this._el_0, 'disabled', currVal_1);
      this._expr_1 = currVal_1;
    }
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import4.ComponentStyles.scoped(styles$FluidTag, _debugComponentUrl));
      if (import7.isDevMode) {
        import4.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidTagNgFactory = ComponentFactory<import2.FluidTag>('fluid-tag', viewFactory_FluidTagHost0);
ComponentFactory<import2.FluidTag> get FluidTagNgFactory {
  return _FluidTagNgFactory;
}

ComponentFactory<import2.FluidTag> createFluidTagFactory() {
  return ComponentFactory('fluid-tag', viewFactory_FluidTagHost0);
}

final List<dynamic> styles$FluidTagHost = const [];

class _ViewFluidTagHost0 extends import10.HostView<import2.FluidTag> {
  @override
  void build() {
    this.componentView = ViewFluidTag0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidTag();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.FluidTag> viewFactory_FluidTagHost0() {
  return _ViewFluidTagHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
