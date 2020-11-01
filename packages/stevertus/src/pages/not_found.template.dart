// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'not_found.dart';
export 'not_found.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/src/core/linker/views/component_view.dart' as import0;
import 'not_found.dart' as import1;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import2;
import 'package:angular/src/core/linker/views/view.dart' as import3;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import5;
import 'package:angular/src/runtime.dart' as import6;
import 'package:angular/src/runtime/dom_helpers.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import9;

final List<dynamic> styles$NotFoundComponent = const [];

class ViewNotFoundComponent0 extends import0.ComponentView<import1.NotFoundComponent> {
  static import2.ComponentStyles _componentStyles;
  ViewNotFoundComponent0(import3.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import5.document.createElement('my-not-found');
  }
  static String get _debugComponentUrl {
    return (import6.isDevMode ? 'asset:stevertus/lib/src/pages/not_found.dart' : null);
  }

  @override
  void build() {
    final import5.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import5.document;
    final _el_0 = import7.appendElement(doc, parentRenderNode, 'h2');
    final _text_1 = import7.appendText(_el_0, 'Page not found');
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import2.ComponentStyles.unscoped(styles$NotFoundComponent, _debugComponentUrl));
      if (import6.isDevMode) {
        import2.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _NotFoundComponentNgFactory = ComponentFactory<import1.NotFoundComponent>('my-not-found', viewFactory_NotFoundComponentHost0);
ComponentFactory<import1.NotFoundComponent> get NotFoundComponentNgFactory {
  return _NotFoundComponentNgFactory;
}

ComponentFactory<import1.NotFoundComponent> createNotFoundComponentFactory() {
  return ComponentFactory('my-not-found', viewFactory_NotFoundComponentHost0);
}

final List<dynamic> styles$NotFoundComponentHost = const [];

class _ViewNotFoundComponentHost0 extends import9.HostView<import1.NotFoundComponent> {
  @override
  void build() {
    this.componentView = ViewNotFoundComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import1.NotFoundComponent();
    this.initRootNode(_el_0);
  }
}

import9.HostView<import1.NotFoundComponent> viewFactory_NotFoundComponentHost0() {
  return _ViewNotFoundComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
