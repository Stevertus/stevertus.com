// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'item.dart';
export 'item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/objd/item_selector/item.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'item.dart' as import2;
import 'package:fluix_web/fluix/modal/modal.template.dart' as import3;
import 'package:fluix_web/fluix/modal/modal_service.dart' as import4;
import 'package:fluix_web/fluix/modal/modal.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:fluix_web/fluix/button/button.template.dart' as import8;
import 'package:fluix_web/fluix/button/button.dart' as import9;
import 'package:ng_translate/src/translation_pipe.dart' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/views/view.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import14;
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import18;
import 'package:ng_translate/src/translation_service.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import21;
import 'package:fluix_web/fluix/input/input.template.dart' as import22;
import 'package:fluix_web/fluix/input/input.dart' as import23;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import24;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import25;
import 'package:angular_forms/src/directives/ng_model.dart' as import26;
import 'package:angular/src/core/linker/views/render_view.dart' as import27;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import28;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import29;
import 'package:angular_forms/src/directives/ng_control.dart' as import30;
import 'package:angular_forms/src/directives/number_value_accessor.dart' as import31;
import 'package:fluix_web/fluix/multi_input/input.template.dart' as import32;
import 'package:fluix_web/fluix/multi_input/input.dart' as import33;
import 'package:angular/src/runtime/text_binding.dart' as import34;
import 'package:angular/src/runtime/interpolate.dart' as import35;
import 'package:angular/src/core/linker/views/host_view.dart' as import36;

final List<dynamic> styles$ItemSelectorComponent = [import0.styles];

class ViewItemSelectorComponent0 extends import1.ComponentView<import2.ItemSelectorComponent> {
  import3.ViewFluidModal0 _compView_0;
  import4.ModalService _ModalService_0_5;
  import5.FluidModal _FluidModal_0_6;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  import8.ViewFluidButton0 _compView_15;
  import9.FluidButton _FluidButton_15_5;
  var _expr_0;
  var _expr_1;
  import10.TranslationPipe _pipe_ngtranslate_0;
  static import11.ComponentStyles _componentStyles;
  ViewItemSelectorComponent0(import12.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import14.document.createElement('item-selector');
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:stevertus/lib/src/components/objd/item_selector/item.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import14.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewFluidModal0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._ModalService_0_5 = import4.ModalService();
    this._FluidModal_0_6 = import5.FluidModal(this._ModalService_0_5, _el_0);
    final _text_1 = import16.createText(' ');
    final _anchor_2 = import16.createAnchor();
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ItemSelectorComponent1);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final doc = import14.document;
    final _el_3 = doc.createElement('br');
    this.addShimE(_el_3);
    final _text_4 = import16.createText(' ');
    final _anchor_5 = import16.createAnchor();
    this._appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_ItemSelectorComponent2);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _el_6 = doc.createElement('br');
    this.addShimE(_el_6);
    final _text_7 = import16.createText(' ');
    final _anchor_8 = import16.createAnchor();
    this._appEl_8 = ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_ItemSelectorComponent3);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    final _el_9 = doc.createElement('br');
    this.addShimE(_el_9);
    final _text_10 = import16.createText(' ');
    final _anchor_11 = import16.createAnchor();
    this._appEl_11 = ViewContainer(11, 0, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(this._appEl_11, viewFactory_ItemSelectorComponent4);
    this._NgIf_11_9 = NgIf(this._appEl_11, _TemplateRef_11_8);
    final _el_12 = doc.createElement('br');
    this.addShimE(_el_12);
    final _text_13 = import16.createText(' ');
    final _anchor_14 = import16.createAnchor();
    this._appEl_14 = ViewContainer(14, 0, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(this._appEl_14, viewFactory_ItemSelectorComponent5);
    this._NgIf_14_9 = NgIf(this._appEl_14, _TemplateRef_14_8);
    this._compView_15 = import8.ViewFluidButton0(this, 15);
    final _el_15 = this._compView_15.rootElement;
    import16.setAttribute(_el_15, 'fluidBtn', '');
    this.addShimC(_el_15);
    this._FluidButton_15_5 = import9.FluidButton(_el_15);
    final _text_16 = import16.createText('Apply');
    this._compView_15.createAndProject(this._FluidButton_15_5, [
      [_text_16]
    ]);
    final _text_17 = import16.createText(' ');
    this._compView_0.createAndProject(this._FluidModal_0_6, [
      <dynamic>[this.projectedNodes[0]]..addAll([_text_1, this._appEl_2, _el_3, _text_4, this._appEl_5, _el_6, _text_7, this._appEl_8, _el_9, _text_10, this._appEl_11, _el_12, _text_13])..addAll(this.projectedNodes[1])..addAll([this._appEl_14, _el_15, _text_17])..addAll(this.projectedNodes[2])
    ]);
    _el_15.addEventListener('click', this.eventHandler0(_ctx.submit));
    import18.debugInjectorEnter(import10.TranslationPipe);
    this._pipe_ngtranslate_0 = import10.TranslationPipe(this.parentView.injectorGet(import19.TranslationService, this.parentIndex));
    import18.debugInjectorLeave(import10.TranslationPipe);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.ModalService) && (nodeIndex <= 17))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final currVal_0 = _ctx.name;
    if (import15.checkBinding(this._expr_0, currVal_0, 'name', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._FluidModal_0_6.id = currVal_0;
      this._expr_0 = currVal_0;
    }
    final currVal_1 = this._pipe_ngtranslate_0.transform('selectItem');
    if (import15.checkBinding(this._expr_1, currVal_1, '\'selectItem\' | ngtranslate', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._FluidModal_0_6.title = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidModal_0_6.ngOnInit();
    }
    this._NgIf_2_9.ngIf = _ctx.showId;
    this._NgIf_5_9.ngIf = _ctx.showCount;
    this._NgIf_8_9.ngIf = _ctx.showModel;
    this._NgIf_11_9.ngIf = _ctx.showNbt;
    this._NgIf_14_9.ngIf = (_ctx.errorMsg != null);
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_15_5.ngOnInit();
    }
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._appEl_11.detectChangesInNestedViews();
    this._appEl_14.detectChangesInNestedViews();
    this._compView_0.detectChanges();
    this._compView_15.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._appEl_11.destroyNestedViews();
    this._appEl_14.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_15.destroyInternalState();
    this._FluidModal_0_6.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import11.ComponentStyles.scoped(styles$ItemSelectorComponent, _debugComponentUrl));
      if (import15.isDevMode) {
        import11.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ItemSelectorComponentNgFactory = ComponentFactory<import2.ItemSelectorComponent>('item-selector', viewFactory_ItemSelectorComponentHost0);
ComponentFactory<import2.ItemSelectorComponent> get ItemSelectorComponentNgFactory {
  return _ItemSelectorComponentNgFactory;
}

ComponentFactory<import2.ItemSelectorComponent> createItemSelectorComponentFactory() {
  return ComponentFactory('item-selector', viewFactory_ItemSelectorComponentHost0);
}

class _ViewItemSelectorComponent1 extends import21.EmbeddedView<import2.ItemSelectorComponent> {
  import22.ViewFluidInput0 _compView_0;
  import23.FluidInput _FluidInput_0_5;
  import24.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import26.NgModel _NgModel_0_8;
  var _expr_0;
  _ViewItemSelectorComponent1(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import22.ViewFluidInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import16.setAttribute(_el_0, 'fluidInput', '');
    import16.setAttribute(_el_0, 'placeholder', 'Item ID');
    import16.setAttribute(_el_0, 'type', 'text');
    this.addShimC(_el_0);
    this._FluidInput_0_5 = import23.FluidInput(_el_0);
    this._DefaultValueAccessor_0_6 = import24.DefaultValueAccessor(_el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import26.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    _el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    _el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import28.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import26.NgModel) || identical(token, import30.NgControl))) {
        return this._NgModel_0_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.id;
    if (import15.checkBinding(this._expr_0, currVal_0, 'id', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._NgModel_0_8.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_0_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.id = $event;
  }
}

import21.EmbeddedView<void> viewFactory_ItemSelectorComponent1(import27.RenderView parentView, int parentIndex) {
  return _ViewItemSelectorComponent1(parentView, parentIndex);
}

class _ViewItemSelectorComponent2 extends import21.EmbeddedView<import2.ItemSelectorComponent> {
  import22.ViewFluidInput0 _compView_0;
  import23.FluidInput _FluidInput_0_5;
  import24.DefaultValueAccessor _DefaultValueAccessor_0_6;
  import31.NumberValueAccessor _NumberValueAccessor_0_7;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_0_8;
  import26.NgModel _NgModel_0_9;
  var _expr_0;
  _ViewItemSelectorComponent2(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import22.ViewFluidInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import16.setAttribute(_el_0, 'fluidInput', '');
    import16.setAttribute(_el_0, 'placeholder', 'Count');
    import16.setAttribute(_el_0, 'type', 'number');
    this.addShimC(_el_0);
    this._FluidInput_0_5 = import23.FluidInput(_el_0);
    this._DefaultValueAccessor_0_6 = import24.DefaultValueAccessor(_el_0);
    this._NumberValueAccessor_0_7 = import31.NumberValueAccessor(_el_0);
    this._NgValueAccessor_0_8 = [this._DefaultValueAccessor_0_6, this._NumberValueAccessor_0_7];
    this._NgModel_0_9 = import26.NgModel(null, this._NgValueAccessor_0_8);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    _el_0.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    _el_0.addEventListener('input', this.eventHandler1(this._handleEvent_1));
    _el_0.addEventListener('change', this.eventHandler1(this._handleEvent_2));
    final subscription_0 = this._NgModel_0_9.update.listen(this.eventHandler1(this._handleEvent_3));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import28.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_8;
      }
      if ((identical(token, import26.NgModel) || identical(token, import30.NgControl))) {
        return this._NgModel_0_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.count;
    if (import15.checkBinding(this._expr_0, currVal_0, 'count', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._NgModel_0_9.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_9.ngAfterChanges();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_9.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_0_6.touchHandler();
    this._NumberValueAccessor_0_7.touchHandler();
  }

  void _handleEvent_1($event) {
    this._DefaultValueAccessor_0_6.handleChange($event.target.value);
    this._NumberValueAccessor_0_7.handleChange($event.target.value);
  }

  void _handleEvent_2($event) {
    this._NumberValueAccessor_0_7.handleChange($event.target.value);
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.count = $event;
  }
}

import21.EmbeddedView<void> viewFactory_ItemSelectorComponent2(import27.RenderView parentView, int parentIndex) {
  return _ViewItemSelectorComponent2(parentView, parentIndex);
}

class _ViewItemSelectorComponent3 extends import21.EmbeddedView<import2.ItemSelectorComponent> {
  import22.ViewFluidInput0 _compView_0;
  import23.FluidInput _FluidInput_0_5;
  import24.DefaultValueAccessor _DefaultValueAccessor_0_6;
  import31.NumberValueAccessor _NumberValueAccessor_0_7;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_0_8;
  import26.NgModel _NgModel_0_9;
  var _expr_0;
  _ViewItemSelectorComponent3(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import22.ViewFluidInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import16.setAttribute(_el_0, 'fluidInput', '');
    import16.setAttribute(_el_0, 'placeholder', 'Modelid');
    import16.setAttribute(_el_0, 'type', 'number');
    this.addShimC(_el_0);
    this._FluidInput_0_5 = import23.FluidInput(_el_0);
    this._DefaultValueAccessor_0_6 = import24.DefaultValueAccessor(_el_0);
    this._NumberValueAccessor_0_7 = import31.NumberValueAccessor(_el_0);
    this._NgValueAccessor_0_8 = [this._DefaultValueAccessor_0_6, this._NumberValueAccessor_0_7];
    this._NgModel_0_9 = import26.NgModel(null, this._NgValueAccessor_0_8);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    _el_0.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    _el_0.addEventListener('input', this.eventHandler1(this._handleEvent_1));
    _el_0.addEventListener('change', this.eventHandler1(this._handleEvent_2));
    final subscription_0 = this._NgModel_0_9.update.listen(this.eventHandler1(this._handleEvent_3));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import28.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_8;
      }
      if ((identical(token, import26.NgModel) || identical(token, import30.NgControl))) {
        return this._NgModel_0_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.model;
    if (import15.checkBinding(this._expr_0, currVal_0, 'model', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._NgModel_0_9.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_9.ngAfterChanges();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_9.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_0_6.touchHandler();
    this._NumberValueAccessor_0_7.touchHandler();
  }

  void _handleEvent_1($event) {
    this._DefaultValueAccessor_0_6.handleChange($event.target.value);
    this._NumberValueAccessor_0_7.handleChange($event.target.value);
  }

  void _handleEvent_2($event) {
    this._NumberValueAccessor_0_7.handleChange($event.target.value);
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.model = $event;
  }
}

import21.EmbeddedView<void> viewFactory_ItemSelectorComponent3(import27.RenderView parentView, int parentIndex) {
  return _ViewItemSelectorComponent3(parentView, parentIndex);
}

class _ViewItemSelectorComponent4 extends import21.EmbeddedView<import2.ItemSelectorComponent> {
  import32.ViewFluidMultiInput0 _compView_0;
  import33.FluidMultiInput _FluidMultiInput_0_5;
  import24.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import25.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import26.NgModel _NgModel_0_8;
  var _expr_0;
  _ViewItemSelectorComponent4(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import32.ViewFluidMultiInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import16.setAttribute(_el_0, 'fluidMultiInput', '');
    import16.setAttribute(_el_0, 'placeholder', 'Nbt tag');
    this.addShimC(_el_0);
    this._FluidMultiInput_0_5 = import33.FluidMultiInput(_el_0);
    this._DefaultValueAccessor_0_6 = import24.DefaultValueAccessor(_el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import26.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidMultiInput_0_5, [const []]);
    _el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    _el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import28.MultiToken<import29.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import26.NgModel) || identical(token, import30.NgControl))) {
        return this._NgModel_0_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._FluidMultiInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.nbt;
    if (import15.checkBinding(this._expr_0, currVal_0, 'nbt', 'package:stevertus/src/components/objd/item_selector/item.html')) {
      this._NgModel_0_8.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import15.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_0_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.nbt = $event;
  }
}

import21.EmbeddedView<void> viewFactory_ItemSelectorComponent4(import27.RenderView parentView, int parentIndex) {
  return _ViewItemSelectorComponent4(parentView, parentIndex);
}

class _ViewItemSelectorComponent5 extends import21.EmbeddedView<import2.ItemSelectorComponent> {
  final import34.TextBinding _textBinding_1 = import34.TextBinding();
  _ViewItemSelectorComponent5(import27.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import14.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'err');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import35.interpolateString0(_ctx.errorMsg));
  }
}

import21.EmbeddedView<void> viewFactory_ItemSelectorComponent5(import27.RenderView parentView, int parentIndex) {
  return _ViewItemSelectorComponent5(parentView, parentIndex);
}

final List<dynamic> styles$ItemSelectorComponentHost = const [];

class _ViewItemSelectorComponentHost0 extends import36.HostView<import2.ItemSelectorComponent> {
  import4.ModalService _ModalService_0_5;
  @override
  void build() {
    this.componentView = ViewItemSelectorComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._ModalService_0_5 = import4.ModalService();
    this.component = import2.ItemSelectorComponent(this._ModalService_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.ModalService) && (0 == nodeIndex))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }
}

import36.HostView<import2.ItemSelectorComponent> viewFactory_ItemSelectorComponentHost0() {
  return _ViewItemSelectorComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
