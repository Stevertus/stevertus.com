// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dropdown.dart';
export 'dropdown.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/dropdown/dropdown.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'dropdown.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/views/view.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import15;
import '../icon/icon.template.dart' as import16;
import '../icon/icon.dart' as import17;
import 'package:angular/src/core/linker/views/render_view.dart' as import18;
import 'package:angular/src/common/directives/ng_for.dart' as import19;
import 'dart:core';
import 'package:angular/src/core/linker/views/host_view.dart' as import21;

final List<dynamic> styles$FluidDropdown = [import0.styles];

class ViewFluidDropdown0 extends import1.ComponentView<import2.FluidDropdown> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import6.DivElement _el_0;
  import6.DivElement _el_1;
  static import7.ComponentStyles _componentStyles;
  ViewFluidDropdown0(import8.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import6.document.createElement('fluid-dropdown');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:fluix_web/lib/fluix/dropdown/dropdown.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import6.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import6.document;
    this._el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(this._el_0, 'container');
    this.addShimC(this._el_0);
    this._el_1 = import11.appendDiv(doc, this._el_0);
    this.updateChildClass(this._el_1, 'dp_c');
    this.addShimC(this._el_1);
    final _el_2 = import11.appendSpan(doc, this._el_1);
    this.addShimE(_el_2);
    _el_2.append(this._textBinding_3.element);
    final _anchor_4 = import11.appendAnchor(this._el_1);
    this._appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_FluidDropdown1);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import11.appendAnchor(this._el_1);
    this._appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_FluidDropdown2);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import11.appendAnchor(this._el_0);
    this._appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_FluidDropdown3);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    this._el_1.addEventListener('click', this.eventHandler0(_ctx.toggle));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_4_9.ngIf = (!_ctx.open);
    this._NgIf_5_9.ngIf = _ctx.open;
    this._NgIf_6_9.ngIf = _ctx.open;
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.open;
    if (import10.checkBinding(this._expr_0, currVal_0, 'open', 'package:fluix_web/fluix/dropdown/dropdown.html')) {
      import11.updateClassBinding(this._el_0, 'opened', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.selected != null);
    if (import10.checkBinding(this._expr_1, currVal_1, 'selected != null', 'package:fluix_web/fluix/dropdown/dropdown.html')) {
      import11.updateClassBinding(this._el_1, 'selected', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import10.checkBinding(this._expr_2, currVal_2, 'disabled', 'package:fluix_web/fluix/dropdown/dropdown.html')) {
      import11.updateClassBinding(this._el_1, 'disabled', currVal_2);
      this._expr_2 = currVal_2;
    }
    this._textBinding_3.updateText(import13.interpolateString0(_ctx.displayedText));
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import7.ComponentStyles.scoped(styles$FluidDropdown, _debugComponentUrl));
      if (import10.isDevMode) {
        import7.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidDropdownNgFactory = ComponentFactory<import2.FluidDropdown>('fluid-dropdown', viewFactory_FluidDropdownHost0);
ComponentFactory<import2.FluidDropdown> get FluidDropdownNgFactory {
  return _FluidDropdownNgFactory;
}

ComponentFactory<import2.FluidDropdown> createFluidDropdownFactory() {
  return ComponentFactory('fluid-dropdown', viewFactory_FluidDropdownHost0);
}

class _ViewFluidDropdown1 extends import15.EmbeddedView<import2.FluidDropdown> {
  import16.ViewFluidIcon0 _compView_0;
  import17.FluidIcon _FluidIcon_0_5;
  _ViewFluidDropdown1(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import11.setAttribute(_el_0, 'icon', 'arrowDown');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import17.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidIcon_0_5.icon = 'arrowDown');
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import15.EmbeddedView<void> viewFactory_FluidDropdown1(import18.RenderView parentView, int parentIndex) {
  return _ViewFluidDropdown1(parentView, parentIndex);
}

class _ViewFluidDropdown2 extends import15.EmbeddedView<import2.FluidDropdown> {
  import16.ViewFluidIcon0 _compView_0;
  import17.FluidIcon _FluidIcon_0_5;
  _ViewFluidDropdown2(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import16.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import11.setAttribute(_el_0, 'icon', 'arrowTop');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import17.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidIcon_0_5.icon = 'arrowTop');
    }
    if (((!import10.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import15.EmbeddedView<void> viewFactory_FluidDropdown2(import18.RenderView parentView, int parentIndex) {
  return _ViewFluidDropdown2(parentView, parentIndex);
}

class _ViewFluidDropdown3 extends import15.EmbeddedView<import2.FluidDropdown> {
  ViewContainer _appEl_1;
  import19.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewFluidDropdown3(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'menu');
    this.addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_FluidDropdown4);
    this._NgFor_1_9 = import19.NgFor(this._appEl_1, _TemplateRef_1_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.values;
    if (import10.checkBinding(this._expr_0, currVal_0, 'values', 'package:fluix_web/fluix/dropdown/dropdown.html')) {
      this._NgFor_1_9.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if ((!import10.debugThrowIfChanged)) {
      this._NgFor_1_9.ngDoCheck();
    }
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }
}

import15.EmbeddedView<void> viewFactory_FluidDropdown3(import18.RenderView parentView, int parentIndex) {
  return _ViewFluidDropdown3(parentView, parentIndex);
}

class _ViewFluidDropdown4 extends import15.EmbeddedView<import2.FluidDropdown> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  var _expr_0;
  import6.DivElement _el_0;
  _ViewFluidDropdown4(import18.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import6.document;
    this._el_0 = doc.createElement('div');
    this.updateChildClass(this._el_0, 'dp_item');
    this.addShimC(this._el_0);
    this._el_0.append(this._textBinding_1.element);
    this._el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_i = import10.unsafeCast<int>(this.locals['index']);
    final local_item = import10.unsafeCast<String>(this.locals['\$implicit']);
    final currVal_0 = (_ctx.selected == local_i);
    if (import10.checkBinding(this._expr_0, currVal_0, 'selected == i', 'package:fluix_web/fluix/dropdown/dropdown.html')) {
      import11.updateClassBinding(this._el_0, 'active', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import13.interpolateString0(local_item));
  }

  void _handleEvent_0($event) {
    final local_i = import10.unsafeCast<int>(this.locals['index']);
    final _ctx = this.ctx;
    _ctx.select(local_i);
  }
}

import15.EmbeddedView<void> viewFactory_FluidDropdown4(import18.RenderView parentView, int parentIndex) {
  return _ViewFluidDropdown4(parentView, parentIndex);
}

final List<dynamic> styles$FluidDropdownHost = const [];

class _ViewFluidDropdownHost0 extends import21.HostView<import2.FluidDropdown> {
  @override
  void build() {
    this.componentView = ViewFluidDropdown0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidDropdown();
    this.initRootNode(_el_0);
  }
}

import21.HostView<import2.FluidDropdown> viewFactory_FluidDropdownHost0() {
  return _ViewFluidDropdownHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
