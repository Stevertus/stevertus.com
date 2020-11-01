// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modal.dart';
export 'modal.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:fluix_web/fluix/modal/modal.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'modal.dart' as import2;
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
import 'package:angular/src/runtime/text_binding.dart' as import14;
import '../icon/icon.template.dart' as import15;
import '../icon/icon.dart' as import16;
import 'package:angular/src/core/linker/views/render_view.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;
import 'package:angular/src/core/linker/views/host_view.dart' as import19;
import 'modal_service.dart' as import20;

final List<dynamic> styles$FluidModal = [import0.styles];

class ViewFluidModal0 extends import1.ComponentView<import2.FluidModal> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewFluidModal0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('fluid-modal');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:fluix_web/lib/fluix/modal/modal.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'modal');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_FluidModal1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _el_2 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'modal-body');
    this.addShimC(_el_2);
    this.project(_el_2, 0);
    final _el_3 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_3, 'modal-background');
    this.addShimC(_el_3);
    _el_3.addEventListener('click', this.eventHandler0(_ctx.close));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = (_ctx.title != null);
    this._appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$FluidModal, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _FluidModalNgFactory = ComponentFactory<import2.FluidModal>('fluid-modal', viewFactory_FluidModalHost0);
ComponentFactory<import2.FluidModal> get FluidModalNgFactory {
  return _FluidModalNgFactory;
}

ComponentFactory<import2.FluidModal> createFluidModalFactory() {
  return ComponentFactory('fluid-modal', viewFactory_FluidModalHost0);
}

class _ViewFluidModal1 extends import13.EmbeddedView<import2.FluidModal> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  import15.ViewFluidIcon0 _compView_2;
  import16.FluidIcon _FluidIcon_2_5;
  _ViewFluidModal1(import17.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _ctx = this.ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'modal-header');
    this.addShimC(_el_0);
    _el_0.append(this._textBinding_1.element);
    this._compView_2 = import15.ViewFluidIcon0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    import10.setAttribute(_el_2, 'icon', 'close');
    this.addShimC(_el_2);
    this._FluidIcon_2_5 = import16.FluidIcon(_el_2);
    this._compView_2.createAndProject(this._FluidIcon_2_5, [const []]);
    _el_2.addEventListener('click', this.eventHandler0(_ctx.close));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidIcon_2_5.icon = 'close');
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_2_5.ngOnInit();
    }
    this._textBinding_1.updateText(import18.interpolateString0(_ctx.title));
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_2.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_FluidModal1(import17.RenderView parentView, int parentIndex) {
  return _ViewFluidModal1(parentView, parentIndex);
}

final List<dynamic> styles$FluidModalHost = const [];

class _ViewFluidModalHost0 extends import19.HostView<import2.FluidModal> {
  import20.ModalService _ModalService_0_5;
  @override
  void build() {
    this.componentView = ViewFluidModal0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._ModalService_0_5 = import20.ModalService();
    this.component = import2.FluidModal(this._ModalService_0_5, _el_0);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.ModalService) && (0 == nodeIndex))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }

  @override
  void destroyInternal() {
    this.component.ngOnDestroy();
  }
}

import19.HostView<import2.FluidModal> viewFactory_FluidModalHost0() {
  return _ViewFluidModalHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
