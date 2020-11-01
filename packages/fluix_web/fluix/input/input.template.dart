// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'input.dart';
export 'input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/input/input.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'input.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidInput = [import0.styles];

class ViewFluidInput0 extends import1.ComponentView<import2.FluidInput> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidInput0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('input');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/input/input.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_0);
    this.project(_el_0, 0);
    final _el_1 = import8.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_1);
    final _text_2 = import8.appendText(_el_1, 'test');
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidInput, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidInputNgFactory = ComponentFactory<import2.FluidInput>('input[fluidInput]', viewFactory_FluidInputHost0);
ComponentFactory<import2.FluidInput> get FluidInputNgFactory {
  return _FluidInputNgFactory;
}

ComponentFactory<import2.FluidInput> createFluidInputFactory() {
  return ComponentFactory('input[fluidInput]', viewFactory_FluidInputHost0);
}

final List<dynamic> styles$FluidInputHost = const [];

class _ViewFluidInputHost0 extends import10.HostView<import2.FluidInput> {
  @override
  void build() {
    this.componentView = ViewFluidInput0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidInput(_el_0);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import7.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import10.HostView<import2.FluidInput> viewFactory_FluidInputHost0() {
  return _ViewFluidInputHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
