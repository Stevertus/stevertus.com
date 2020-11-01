// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'card.dart';
export 'card.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/landing/card/card.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'card.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/views/view.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/src/runtime/dom_helpers.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import10;

final List<dynamic> styles$LandingCard = [import0.styles];

class ViewLandingCard0 extends import1.ComponentView<import2.LandingCard> {
  static import3.ComponentStyles _componentStyles;
  ViewLandingCard0(import4.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('landing-card');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:stevertus/lib/src/pages/landing/card/card.dart' : null);
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
      _componentStyles = (styles = import3.ComponentStyles.scoped(styles$LandingCard, _debugComponentUrl));
      if (import7.isDevMode) {
        import3.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _LandingCardNgFactory = ComponentFactory<import2.LandingCard>('landing-card', viewFactory_LandingCardHost0);
ComponentFactory<import2.LandingCard> get LandingCardNgFactory {
  return _LandingCardNgFactory;
}

ComponentFactory<import2.LandingCard> createLandingCardFactory() {
  return ComponentFactory('landing-card', viewFactory_LandingCardHost0);
}

final List<dynamic> styles$LandingCardHost = const [];

class _ViewLandingCardHost0 extends import10.HostView<import2.LandingCard> {
  @override
  void build() {
    this.componentView = ViewLandingCard0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.LandingCard();
    this.initRootNode(_el_0);
  }
}

import10.HostView<import2.LandingCard> viewFactory_LandingCardHost0() {
  return _ViewLandingCardHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
