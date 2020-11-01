// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'button.dart';
export 'button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/button/button.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'button.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$FluidButton = [import0.styles];

class ViewFluidButton0 extends import1.ComponentView<import2.FluidButton> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidButton0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('button');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/button/button.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    final _el_0 = import8.appendDiv(doc, parentRenderNode);
    this.addShimC(_el_0);
    this.project(_el_0, 0);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidButton, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidButtonNgFactory = ComponentFactory<import2.FluidButton>('button[fluidBtn],a[fluidBtn]', viewFactory_FluidButtonHost0);
ComponentFactory<import2.FluidButton> get FluidButtonNgFactory {
  return _FluidButtonNgFactory;
}

ComponentFactory<import2.FluidButton> createFluidButtonFactory() {
  return ComponentFactory('button[fluidBtn],a[fluidBtn]', viewFactory_FluidButtonHost0);
}

final List<dynamic> styles$FluidButtonHost = const [];

class _ViewFluidButtonHost0 extends import10.HostView<import2.FluidButton> {
  @override
  void build() {
    this.componentView = ViewFluidButton0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidButton(_el_0);
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

import10.HostView<import2.FluidButton> viewFactory_FluidButtonHost0() {
  return _ViewFluidButtonHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
