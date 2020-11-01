// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'router_link_directive.dart';
export 'router_link_directive.dart';

import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'router_link_directive.dart' as import1;
import 'package:angular/src/core/linker/views/render_view.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/runtime.dart' as import4;
import 'package:angular/src/runtime/dom_helpers.dart' as import5;

class RouterLinkNgCd extends import0.DirectiveChangeDetector {
  final import1.RouterLink instance;
  var _expr_0;
  RouterLinkNgCd(this.instance);
  void detectHostChanges(import2.RenderView view, import3.Element el) {
    final currVal_0 = this.instance.visibleHref;
    if (import4.checkBinding(this._expr_0, currVal_0, null, null)) {
      import5.updateAttribute(el, 'href', currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}

// No initReflector() linking required.
void initReflector() {}
