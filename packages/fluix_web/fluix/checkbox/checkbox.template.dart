// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'checkbox.dart';
export 'checkbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/checkbox/checkbox.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'checkbox.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/views/view.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import13;
import '../icon/icon.template.dart' as import14;
import '../icon/icon.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import 'package:angular/src/runtime/text_binding.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;

final List<dynamic> styles$FluidCheckbox = [import0.styles];

class ViewFluidCheckbox0 extends import1.ComponentView<import2.FluidCheckbox> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static import5.ComponentStyles _componentStyles;
  ViewFluidCheckbox0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('fluid-checkbox');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:fluix_web/lib/fluix/checkbox/checkbox.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_FluidCheckbox1);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    this._appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_FluidCheckbox2);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(parentRenderNode);
    this._appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_FluidCheckbox3);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    parentRenderNode.addEventListener('click', this.eventHandler0(_ctx.onClick));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.value;
    this._NgIf_1_9.ngIf = (!_ctx.value);
    this._NgIf_2_9.ngIf = (_ctx.label != null);
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$FluidCheckbox, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidCheckboxNgFactory = ComponentFactory<import2.FluidCheckbox>('fluid-checkbox', viewFactory_FluidCheckboxHost0);
ComponentFactory<import2.FluidCheckbox> get FluidCheckboxNgFactory {
  return _FluidCheckboxNgFactory;
}

ComponentFactory<import2.FluidCheckbox> createFluidCheckboxFactory() {
  return ComponentFactory('fluid-checkbox', viewFactory_FluidCheckboxHost0);
}

class _ViewFluidCheckbox1 extends import13.EmbeddedView<import2.FluidCheckbox> {
  import14.ViewFluidIcon0 _compView_0;
  import15.FluidIcon _FluidIcon_0_5;
  _ViewFluidCheckbox1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'filled');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import15.FluidIcon(_el_0);
    final _text_1 = import10.createText('checkboxFilled');
    this._compView_0.createAndProject(this._FluidIcon_0_5, [
      [_text_1]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_FluidCheckbox1(import16.RenderView parentView, int parentIndex) {
  return _ViewFluidCheckbox1(parentView, parentIndex);
}

class _ViewFluidCheckbox2 extends import13.EmbeddedView<import2.FluidCheckbox> {
  import14.ViewFluidIcon0 _compView_0;
  import15.FluidIcon _FluidIcon_0_5;
  _ViewFluidCheckbox2(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'empty');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import15.FluidIcon(_el_0);
    final _text_1 = import10.createText('checkboxEmpty');
    this._compView_0.createAndProject(this._FluidIcon_0_5, [
      [_text_1]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_FluidCheckbox2(import16.RenderView parentView, int parentIndex) {
  return _ViewFluidCheckbox2(parentView, parentIndex);
}

class _ViewFluidCheckbox3 extends import13.EmbeddedView<import2.FluidCheckbox> {
  final import17.TextBinding _textBinding_1 = import17.TextBinding();
  _ViewFluidCheckbox3(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import18.interpolateString0(_ctx.label));
  }
}

import13.EmbeddedView<void> viewFactory_FluidCheckbox3(import16.RenderView parentView, int parentIndex) {
  return _ViewFluidCheckbox3(parentView, parentIndex);
}

final List<dynamic> styles$FluidCheckboxHost = const [];

class _ViewFluidCheckboxHost0 extends import19.HostView<import2.FluidCheckbox> {
  @override
  void build() {
    this.componentView = ViewFluidCheckbox0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.FluidCheckbox();
    this.initRootNode(_el_0);
  }
}

import19.HostView<import2.FluidCheckbox> viewFactory_FluidCheckboxHost0() {
  return _ViewFluidCheckboxHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
