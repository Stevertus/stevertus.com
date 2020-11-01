// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'section.dart';
export 'section.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/landing/section/section.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'section.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$LandingSection = [import0.styles];

class ViewLandingSection0 extends import1.ComponentView<import2.LandingSection> {
  static import3.ComponentStyles _componentStyles;
  ViewLandingSection0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('landing-section');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:stevertus/lib/src/pages/landing/section/section.dart' : null);
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
    this.updateChildClass(_el_1, 'content');
    this.addShimC(_el_1);
    this.project(_el_1, 1);
    this.project(_el_0, 2);
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$LandingSection, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _LandingSectionNgFactory = ComponentFactory<import2.LandingSection>('landing-section', viewFactory_LandingSectionHost0);
ComponentFactory<import2.LandingSection> get LandingSectionNgFactory {
  return _LandingSectionNgFactory;
}

ComponentFactory<import2.LandingSection> createLandingSectionFactory() {
  return ComponentFactory('landing-section', viewFactory_LandingSectionHost0);
}

final List<dynamic> styles$LandingSectionHost = const [];

class _ViewLandingSectionHost0 extends import10.HostView<import2.LandingSection> {
  @override
  void build() {
    this.componentView = ViewLandingSection0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.LandingSection();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.LandingSection> viewFactory_LandingSectionHost0() {
  return _ViewLandingSectionHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
