// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'fluid_shell.dart';
export 'fluid_shell.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/shell/shell.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'fluid_shell.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;
import '../../theme/theme.dart' as import11;

final List<dynamic> styles$FluidShell = [import0.styles];

class ViewFluidShell0 extends import1.ComponentView<import2.FluidShell> {
  static import3.ComponentStyles _componentStyles;
  ViewFluidShell0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('fluid-shell');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:fluix_web/lib/fluix/shell/fluid_shell.dart' : null);
  }

  @override
  void build() {
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    this.project(parentRenderNode, 0);
    final _text_0 = import8.appendText(parentRenderNode, ' ');
    this.project(parentRenderNode, 1);
    final doc = import6.document;
    final _el_1 = import8.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'shell-grid');
    this.addShimC(_el_1);
    this.project(_el_1, 2);
    final _text_2 = import8.appendText(_el_1, ' ');
    this.project(_el_1, 3);
    final _el_3 = import8.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'shell-body');
    import8.setAttribute(_el_3, 'style', 'width: 100%');
    this.addShimC(_el_3);
    this.project(_el_3, 4);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$FluidShell, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidShellNgFactory = ComponentFactory<import2.FluidShell>('fluid-shell', viewFactory_FluidShellHost0);
ComponentFactory<import2.FluidShell> get FluidShellNgFactory {
  return _FluidShellNgFactory;
}

ComponentFactory<import2.FluidShell> createFluidShellFactory() {
  return ComponentFactory('fluid-shell', viewFactory_FluidShellHost0);
}

final List<dynamic> styles$FluidShellHost = const [];

class _ViewFluidShellHost0 extends import10.HostView<import2.FluidShell> {
  import11.FluidTheme _FluidTheme_0_5;
  @override
  void build() {
    this.componentView = ViewFluidShell0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._FluidTheme_0_5 = import11.FluidTheme();
    this.component = import2.FluidShell(this._FluidTheme_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.FluidTheme) && (0 == nodeIndex))) {
      return this._FluidTheme_0_5;
    }
    return notFoundResult;
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

import10.HostView<import2.FluidShell> viewFactory_FluidShellHost0() {
  return _ViewFluidShellHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
