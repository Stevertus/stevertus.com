// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'input.dart';
export 'input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/multi_input/input.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'input.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import9;

final List<dynamic> styles$FluidMultiInput = [import0.styles];

class ViewFluidMultiInput0 extends import1.ComponentView<import2.FluidMultiInput> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidMultiInput0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('textarea');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/multi_input/input.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    this.project(parentRenderNode, 0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidMultiInput, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidMultiInputNgFactory = ComponentFactory<import2.FluidMultiInput>('textarea[fluidMultiInput]', viewFactory_FluidMultiInputHost0);
ComponentFactory<import2.FluidMultiInput> get FluidMultiInputNgFactory {
  return _FluidMultiInputNgFactory;
}

ComponentFactory<import2.FluidMultiInput> createFluidMultiInputFactory() {
  return ComponentFactory('textarea[fluidMultiInput]', viewFactory_FluidMultiInputHost0);
}

final List<dynamic> styles$FluidMultiInputHost = const [];

class _ViewFluidMultiInputHost0 extends import9.HostView<import2.FluidMultiInput> {
  @override
  void build() {
    this.componentView = ViewFluidMultiInput0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidMultiInput(_el_0);
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

import9.HostView<import2.FluidMultiInput> viewFactory_FluidMultiInputHost0() {
  return _ViewFluidMultiInputHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
