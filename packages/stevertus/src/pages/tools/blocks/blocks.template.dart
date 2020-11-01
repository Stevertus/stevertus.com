// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'blocks.dart';
export 'blocks.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/tools/blocks/blocks.css.shim.dart' as import0;
import 'package:stevertus/src/pages/tools/tools.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'blocks.dart' as import3;
import 'package:fluix_web/fluix/list/list.template.dart' as import4;
import 'package:fluix_web/fluix/list/list.dart' as import5;
import 'package:fluix_web/fluix/list/list-item/list-item.template.dart' as import6;
import 'package:fluix_web/fluix/list/list-item/list-item.dart' as import7;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import8;
import 'package:fluix_web/fluix/icon/icon.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import11;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:fluix_web/fluix/button/button.template.dart' as import13;
import 'package:fluix_web/fluix/button/button.dart' as import14;
import '../../../components/objd/item_selector/item.template.dart' as import15;
import 'package:fluix_web/fluix/modal/modal_service.dart' as import16;
import '../../../components/objd/item_selector/item.dart' as import17;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import18;
import 'package:angular/src/core/linker/views/view.dart' as import19;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import21;
import 'package:angular/src/runtime.dart' as import22;
import 'package:angular/src/runtime/dom_helpers.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import26;
import 'package:angular/src/runtime/text_binding.dart' as import27;
import 'package:angular/src/core/linker/views/render_view.dart' as import28;
import 'dart:core';
import 'package:objd/custom_block.dart' as import30;
import 'package:angular/src/runtime/interpolate.dart' as import31;
import 'package:fluix_web/fluix/card/card.template.dart' as import32;
import 'package:fluix_web/fluix/card/card.dart' as import33;
import 'package:fluix_web/fluix/input/input.template.dart' as import34;
import 'package:fluix_web/fluix/input/input.dart' as import35;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import36;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import37;
import 'package:angular_forms/src/directives/ng_model.dart' as import38;
import 'package:fluix_web/fluix/checkbox/checkbox.template.dart' as import39;
import 'package:fluix_web/fluix/checkbox/checkbox.dart' as import40;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import41;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import42;
import 'package:angular_forms/src/directives/ng_control.dart' as import43;
import 'package:fluix_web/fluix/multi_input/input.template.dart' as import44;
import 'package:fluix_web/fluix/multi_input/input.dart' as import45;
import 'package:angular/src/core/linker/views/host_view.dart' as import46;

final List<dynamic> styles$BlocksToolPage = [import0.styles, import1.styles];

class ViewBlocksToolPage0 extends import2.ComponentView<import3.BlocksToolPage> {
  import4.ViewFluidList0 _compView_2;
  import5.FluidList _FluidList_2_5;
  import6.ViewFluidListItem0 _compView_3;
  import7.FluidListItem _FluidListItem_3_5;
  import8.ViewFluidIcon0 _compView_6;
  import9.FluidIcon _FluidIcon_6_5;
  ViewContainer _appEl_7;
  import11.NgFor _NgFor_7_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  import13.ViewFluidButton0 _compView_11;
  import14.FluidButton _FluidButton_11_5;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  import15.ViewItemSelectorComponent0 _compView_15;
  import16.ModalService _ModalService_15_5;
  import17.ItemSelectorComponent _ItemSelectorComponent_15_6;
  import15.ViewItemSelectorComponent0 _compView_16;
  import16.ModalService _ModalService_16_5;
  import17.ItemSelectorComponent _ItemSelectorComponent_16_6;
  var _expr_2;
  var _expr_4;
  var _expr_6;
  static import18.ComponentStyles _componentStyles;
  ViewBlocksToolPage0(import19.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import21.document.createElement('blocks_tool');
  }
  static String get _debugComponentUrl {
    return (import22.isDevMode ? 'asset:stevertus/lib/src/pages/tools/blocks/blocks.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import21.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import21.document;
    final _el_0 = import23.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'split');
    this.addShimC(_el_0);
    final _el_1 = import23.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'list');
    this.addShimC(_el_1);
    this._compView_2 = import4.ViewFluidList0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_1.append(_el_2);
    this.addShimC(_el_2);
    this._FluidList_2_5 = import5.FluidList();
    this._compView_3 = import6.ViewFluidListItem0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    import23.setAttribute(_el_3, 'clickable', '');
    this.addShimC(_el_3);
    this._FluidListItem_3_5 = import7.FluidListItem();
    final _el_4 = doc.createElement('b');
    this.addShimE(_el_4);
    final _text_5 = import23.appendText(_el_4, 'Add Block');
    this._compView_6 = import8.ViewFluidIcon0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    import23.setAttribute(_el_6, 'icon', 'plus');
    import23.setAttribute(_el_6, 'trailing', '');
    this.addShimC(_el_6);
    this._FluidIcon_6_5 = import9.FluidIcon(_el_6);
    this._compView_6.createAndProject(this._FluidIcon_6_5, [const []]);
    this._compView_3.createAndProject(this._FluidListItem_3_5, [
      const [],
      [_el_4],
      [_el_6]
    ]);
    final _anchor_7 = import23.createAnchor();
    this._appEl_7 = ViewContainer(7, 2, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_BlocksToolPage1);
    this._NgFor_7_9 = import11.NgFor(this._appEl_7, _TemplateRef_7_8);
    this._compView_2.createAndProject(this._FluidList_2_5, [
      [_el_3, this._appEl_7]
    ]);
    final _anchor_8 = import23.appendAnchor(_el_0);
    this._appEl_8 = ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_BlocksToolPage2);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    final _anchor_9 = import23.appendAnchor(_el_0);
    this._appEl_9 = ViewContainer(9, 0, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(this._appEl_9, viewFactory_BlocksToolPage3);
    this._NgIf_9_9 = NgIf(this._appEl_9, _TemplateRef_9_8);
    final _el_10 = import23.appendDiv(doc, parentRenderNode);
    import23.setAttribute(_el_10, 'id', 'center');
    import23.setAttribute(_el_10, 'style', 'min-height: 300px');
    this.addShimC(_el_10);
    this._compView_11 = import13.ViewFluidButton0(this, 11);
    final _el_11 = this._compView_11.rootElement;
    _el_10.append(_el_11);
    this.updateChildClass(_el_11, 'full');
    import23.setAttribute(_el_11, 'fluidBtn', '');
    import23.setAttribute(_el_11, 'highlight', '');
    this.addShimC(_el_11);
    this._FluidButton_11_5 = import14.FluidButton(_el_11);
    final _text_12 = import23.createText('Download Datapack');
    this._compView_11.createAndProject(this._FluidButton_11_5, [
      [_text_12]
    ]);
    final _text_13 = import23.appendText(_el_10, ' ');
    final _anchor_14 = import23.appendAnchor(_el_10);
    this._appEl_14 = ViewContainer(14, 10, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(this._appEl_14, viewFactory_BlocksToolPage4);
    this._NgIf_14_9 = NgIf(this._appEl_14, _TemplateRef_14_8);
    this._compView_15 = import15.ViewItemSelectorComponent0(this, 15);
    final _el_15 = this._compView_15.rootElement;
    parentRenderNode.append(_el_15);
    import23.setAttribute(_el_15, 'name', 'blocks_item');
    this.addShimC(_el_15);
    this._ModalService_15_5 = import16.ModalService();
    this._ItemSelectorComponent_15_6 = import17.ItemSelectorComponent(this._ModalService_15_5);
    this._compView_15.createAndProject(this._ItemSelectorComponent_15_6, [const [], const [], const []]);
    this._compView_16 = import15.ViewItemSelectorComponent0(this, 16);
    final _el_16 = this._compView_16.rootElement;
    parentRenderNode.append(_el_16);
    import23.setAttribute(_el_16, 'name', 'blocks_block');
    this.addShimC(_el_16);
    this._ModalService_16_5 = import16.ModalService();
    this._ItemSelectorComponent_16_6 = import17.ItemSelectorComponent(this._ModalService_16_5);
    this._compView_16.createAndProject(this._ItemSelectorComponent_16_6, [const [], const [], const []]);
    _el_3.addEventListener('click', this.eventHandler0(_ctx.add));
    _el_11.addEventListener('click', this.eventHandler0(_ctx.download));
    final subscription_0 = this._ItemSelectorComponent_15_6.itemChange.listen(this.eventHandler1(this._handleEvent_0));
    final subscription_1 = this._ItemSelectorComponent_16_6.itemChange.listen(this.eventHandler1(this._handleEvent_1));
    this.initSubscriptions([subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ModalService) && (15 == nodeIndex))) {
      return this._ModalService_15_5;
    }
    if ((identical(token, import16.ModalService) && (16 == nodeIndex))) {
      return this._ModalService_16_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidListItem_3_5.clickable = true;
      this._FluidIcon_6_5.icon = 'plus';
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_6_5.ngOnInit();
    }
    final currVal_2 = _ctx.blocks;
    if (import22.checkBinding(this._expr_2, currVal_2, 'blocks', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._NgFor_7_9.ngForOf = currVal_2;
      this._expr_2 = currVal_2;
    }
    if ((!import22.debugThrowIfChanged)) {
      this._NgFor_7_9.ngDoCheck();
    }
    this._NgIf_8_9.ngIf = (_ctx.selected == null);
    this._NgIf_9_9.ngIf = (_ctx.selected != null);
    if (firstCheck) {
      (this._FluidButton_11_5.highlight = true);
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_11_5.ngOnInit();
    }
    this._NgIf_14_9.ngIf = (_ctx.errorText != null);
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_15_6.name = 'blocks_item';
      changed = true;
    }
    final currVal_4 = _ctx.selected.item;
    if (import22.checkBinding(this._expr_4, currVal_4, 'selected.item', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._ItemSelectorComponent_15_6.item = currVal_4;
      changed = true;
      this._expr_4 = currVal_4;
    }
    if (changed) {
      this._ItemSelectorComponent_15_6.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_16_6.name = 'blocks_block';
      changed = true;
    }
    final currVal_6 = _ctx.selected.blockModel;
    if (import22.checkBinding(this._expr_6, currVal_6, 'selected.blockModel', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._ItemSelectorComponent_16_6.item = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._ItemSelectorComponent_16_6.ngAfterChanges();
    }
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    this._appEl_9.detectChangesInNestedViews();
    this._appEl_14.detectChangesInNestedViews();
    this._compView_2.detectChanges();
    this._compView_3.detectChanges();
    this._compView_6.detectChanges();
    this._compView_11.detectChanges();
    this._compView_15.detectChanges();
    this._compView_16.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_7.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._appEl_9.destroyNestedViews();
    this._appEl_14.destroyNestedViews();
    this._compView_2.destroyInternalState();
    this._compView_3.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_11.destroyInternalState();
    this._compView_15.destroyInternalState();
    this._compView_16.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.selected.item = $event;
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.selected.blockModel = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import18.ComponentStyles.scoped(styles$BlocksToolPage, _debugComponentUrl));
      if (import22.isDevMode) {
        import18.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _BlocksToolPageNgFactory = ComponentFactory<import3.BlocksToolPage>('blocks_tool', viewFactory_BlocksToolPageHost0);
ComponentFactory<import3.BlocksToolPage> get BlocksToolPageNgFactory {
  return _BlocksToolPageNgFactory;
}

ComponentFactory<import3.BlocksToolPage> createBlocksToolPageFactory() {
  return ComponentFactory('blocks_tool', viewFactory_BlocksToolPageHost0);
}

class _ViewBlocksToolPage1 extends import26.EmbeddedView<import3.BlocksToolPage> {
  final import27.TextBinding _textBinding_2 = import27.TextBinding();
  import6.ViewFluidListItem0 _compView_1;
  import7.FluidListItem _FluidListItem_1_5;
  var _expr_1;
  _ViewBlocksToolPage1(import28.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('div');
    this.addShimC(_el_0);
    this._compView_1 = import6.ViewFluidListItem0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    import23.setAttribute(_el_1, 'clickable', '');
    this.addShimC(_el_1);
    this._FluidListItem_1_5 = import7.FluidListItem();
    this._compView_1.createAndProject(this._FluidListItem_1_5, [
      const [],
      [this._textBinding_2.element],
      const []
    ]);
    _el_1.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    final local_i = import22.unsafeCast<int>(this.locals['index']);
    final local_block = import22.unsafeCast<import30.CustomBlock>(this.locals['\$implicit']);
    if (firstCheck) {
      (this._FluidListItem_1_5.clickable = true);
    }
    final currVal_1 = (_ctx.selectedIndex == local_i);
    if (import22.checkBinding(this._expr_1, currVal_1, 'selectedIndex == i', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._FluidListItem_1_5.selected = currVal_1;
      this._expr_1 = currVal_1;
    }
    this._textBinding_2.updateText(import31.interpolateString0(local_block.name));
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_i = import22.unsafeCast<int>(this.locals['index']);
    final _ctx = this.ctx;
    _ctx.changeSelected(local_i);
  }
}

import26.EmbeddedView<void> viewFactory_BlocksToolPage1(import28.RenderView parentView, int parentIndex) {
  return _ViewBlocksToolPage1(parentView, parentIndex);
}

class _ViewBlocksToolPage2 extends import26.EmbeddedView<import3.BlocksToolPage> {
  _ViewBlocksToolPage2(import28.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('div');
    import23.setAttribute(_el_0, 'style', 'position: relative');
    this.addShimC(_el_0);
    final _el_1 = import23.appendElement(doc, _el_0, 'h3');
    this.updateChildClass(_el_1, 'centered');
    this.addShimE(_el_1);
    final _text_2 = import23.appendText(_el_1, 'Please select a block');
    this.initRootNode(_el_0);
  }
}

import26.EmbeddedView<void> viewFactory_BlocksToolPage2(import28.RenderView parentView, int parentIndex) {
  return _ViewBlocksToolPage2(parentView, parentIndex);
}

class _ViewBlocksToolPage3 extends import26.EmbeddedView<import3.BlocksToolPage> {
  final import27.TextBinding _textBinding_3 = import27.TextBinding();
  import32.ViewFluidCard0 _compView_0;
  import33.FluidCard _FluidCard_0_5;
  import34.ViewFluidInput0 _compView_4;
  import35.FluidInput _FluidInput_4_5;
  import36.DefaultValueAccessor _DefaultValueAccessor_4_6;
  List<import37.ControlValueAccessor<dynamic>> _NgValueAccessor_4_7;
  import38.NgModel _NgModel_4_8;
  import34.ViewFluidInput0 _compView_7;
  import35.FluidInput _FluidInput_7_5;
  import36.DefaultValueAccessor _DefaultValueAccessor_7_6;
  List<import37.ControlValueAccessor<dynamic>> _NgValueAccessor_7_7;
  import38.NgModel _NgModel_7_8;
  import13.ViewFluidButton0 _compView_10;
  import14.FluidButton _FluidButton_10_5;
  import39.ViewFluidCheckbox0 _compView_12;
  import40.FluidCheckbox _FluidCheckbox_12_5;
  import39.ViewFluidCheckbox0 _compView_13;
  import40.FluidCheckbox _FluidCheckbox_13_5;
  import39.ViewFluidCheckbox0 _compView_14;
  import40.FluidCheckbox _FluidCheckbox_14_5;
  import13.ViewFluidButton0 _compView_15;
  import14.FluidButton _FluidButton_15_5;
  import34.ViewFluidInput0 _compView_19;
  import35.FluidInput _FluidInput_19_5;
  import36.DefaultValueAccessor _DefaultValueAccessor_19_6;
  List<import37.ControlValueAccessor<dynamic>> _NgValueAccessor_19_7;
  import38.NgModel _NgModel_19_8;
  import34.ViewFluidInput0 _compView_22;
  import35.FluidInput _FluidInput_22_5;
  import36.DefaultValueAccessor _DefaultValueAccessor_22_6;
  List<import37.ControlValueAccessor<dynamic>> _NgValueAccessor_22_7;
  import38.NgModel _NgModel_22_8;
  var _expr_0;
  var _expr_1;
  var _expr_5;
  var _expr_7;
  var _expr_9;
  var _expr_12;
  var _expr_13;
  _ViewBlocksToolPage3(import28.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import32.ViewFluidCard0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'card blockSettings');
    this.addShimC(_el_0);
    this._FluidCard_0_5 = import33.FluidCard(_el_0);
    final doc = import21.document;
    final _el_1 = doc.createElement('h2');
    this.addShimE(_el_1);
    final _text_2 = import23.appendText(_el_1, 'Editing ');
    _el_1.append(this._textBinding_3.element);
    this._compView_4 = import34.ViewFluidInput0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    import23.setAttribute(_el_4, 'fluidInput', '');
    import23.setAttribute(_el_4, 'placeholder', 'Display Name');
    this.addShimC(_el_4);
    this._FluidInput_4_5 = import35.FluidInput(_el_4);
    this._DefaultValueAccessor_4_6 = import36.DefaultValueAccessor(_el_4);
    this._NgValueAccessor_4_7 = [this._DefaultValueAccessor_4_6];
    this._NgModel_4_8 = import38.NgModel(null, this._NgValueAccessor_4_7);
    this._compView_4.createAndProject(this._FluidInput_4_5, [const []]);
    final _el_5 = doc.createElement('br');
    this.addShimE(_el_5);
    final _text_6 = import23.createText(' ');
    this._compView_7 = import34.ViewFluidInput0(this, 7);
    final _el_7 = this._compView_7.rootElement;
    import23.setAttribute(_el_7, 'fluidInput', '');
    import23.setAttribute(_el_7, 'placeholder', 'Customblock ID');
    this.addShimC(_el_7);
    this._FluidInput_7_5 = import35.FluidInput(_el_7);
    this._DefaultValueAccessor_7_6 = import36.DefaultValueAccessor(_el_7);
    this._NgValueAccessor_7_7 = [this._DefaultValueAccessor_7_6];
    this._NgModel_7_8 = import38.NgModel(null, this._NgValueAccessor_7_7);
    this._compView_7.createAndProject(this._FluidInput_7_5, [const []]);
    final _el_8 = doc.createElement('br');
    this.addShimE(_el_8);
    final _text_9 = import23.createText(' ');
    this._compView_10 = import13.ViewFluidButton0(this, 10);
    final _el_10 = this._compView_10.rootElement;
    import23.setAttribute(_el_10, 'fluidBtn', '');
    import23.setAttribute(_el_10, 'secondary', '');
    import23.setAttribute(_el_10, 'small', '');
    this.addShimC(_el_10);
    this._FluidButton_10_5 = import14.FluidButton(_el_10);
    final _text_11 = import23.createText('Select Item');
    this._compView_10.createAndProject(this._FluidButton_10_5, [
      [_text_11]
    ]);
    this._compView_12 = import39.ViewFluidCheckbox0(this, 12);
    final _el_12 = this._compView_12.rootElement;
    import23.setAttribute(_el_12, 'label', 'Generate seperate Pack');
    this.addShimC(_el_12);
    this._FluidCheckbox_12_5 = import40.FluidCheckbox();
    this._compView_12.create(this._FluidCheckbox_12_5);
    this._compView_13 = import39.ViewFluidCheckbox0(this, 13);
    final _el_13 = this._compView_13.rootElement;
    import23.setAttribute(_el_13, 'label', 'Use an ItemFrame as display');
    this.addShimC(_el_13);
    this._FluidCheckbox_13_5 = import40.FluidCheckbox();
    this._compView_13.create(this._FluidCheckbox_13_5);
    this._compView_14 = import39.ViewFluidCheckbox0(this, 14);
    final _el_14 = this._compView_14.rootElement;
    import23.setAttribute(_el_14, 'label', 'Set the entity on fire');
    this.addShimC(_el_14);
    this._FluidCheckbox_14_5 = import40.FluidCheckbox();
    this._compView_14.create(this._FluidCheckbox_14_5);
    this._compView_15 = import13.ViewFluidButton0(this, 15);
    final _el_15 = this._compView_15.rootElement;
    import23.setAttribute(_el_15, 'fluidBtn', '');
    import23.setAttribute(_el_15, 'secondary', '');
    import23.setAttribute(_el_15, 'small', '');
    this.addShimC(_el_15);
    this._FluidButton_15_5 = import14.FluidButton(_el_15);
    final _text_16 = import23.createText('Select Custom Blockmodel');
    this._compView_15.createAndProject(this._FluidButton_15_5, [
      [_text_16]
    ]);
    final _el_17 = doc.createElement('br');
    this.addShimE(_el_17);
    final _text_18 = import23.createText(' ');
    this._compView_19 = import34.ViewFluidInput0(this, 19);
    final _el_19 = this._compView_19.rootElement;
    import23.setAttribute(_el_19, 'fluidInput', '');
    import23.setAttribute(_el_19, 'placeholder', 'Block to use underneath');
    this.addShimC(_el_19);
    this._FluidInput_19_5 = import35.FluidInput(_el_19);
    this._DefaultValueAccessor_19_6 = import36.DefaultValueAccessor(_el_19);
    this._NgValueAccessor_19_7 = [this._DefaultValueAccessor_19_6];
    this._NgModel_19_8 = import38.NgModel(null, this._NgValueAccessor_19_7);
    this._compView_19.createAndProject(this._FluidInput_19_5, [const []]);
    final _el_20 = doc.createElement('br');
    this.addShimE(_el_20);
    final _text_21 = import23.createText(' ');
    this._compView_22 = import34.ViewFluidInput0(this, 22);
    final _el_22 = this._compView_22.rootElement;
    import23.setAttribute(_el_22, 'fluidInput', '');
    import23.setAttribute(_el_22, 'placeholder', 'Custom Entity Tags');
    this.addShimC(_el_22);
    this._FluidInput_22_5 = import35.FluidInput(_el_22);
    this._DefaultValueAccessor_22_6 = import36.DefaultValueAccessor(_el_22);
    this._NgValueAccessor_22_7 = [this._DefaultValueAccessor_22_6];
    this._NgModel_22_8 = import38.NgModel(null, this._NgValueAccessor_22_7);
    this._compView_22.createAndProject(this._FluidInput_22_5, [const []]);
    final _el_23 = doc.createElement('br');
    this.addShimE(_el_23);
    this._compView_0.createAndProject(this._FluidCard_0_5, [
      [_el_1, _el_4, _el_5, _text_6, _el_7, _el_8, _text_9, _el_10, _el_12, _el_13, _el_14, _el_15, _el_17, _text_18, _el_19, _el_20, _text_21, _el_22, _el_23]
    ]);
    _el_4.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_4_6.touchHandler));
    _el_4.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_4_8.update.listen(this.eventHandler1(this._handleEvent_1));
    _el_7.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_7_6.touchHandler));
    _el_7.addEventListener('input', this.eventHandler1(this._handleEvent_2));
    final subscription_1 = this._NgModel_7_8.update.listen(this.eventHandler1(this._handleEvent_3));
    _el_10.addEventListener('click', this.eventHandler1(this._handleEvent_4));
    final subscription_2 = this._FluidCheckbox_12_5.valueChange.listen(this.eventHandler1(this._handleEvent_5));
    final subscription_3 = this._FluidCheckbox_13_5.valueChange.listen(this.eventHandler1(this._handleEvent_6));
    final subscription_4 = this._FluidCheckbox_14_5.valueChange.listen(this.eventHandler1(this._handleEvent_7));
    _el_15.addEventListener('click', this.eventHandler1(this._handleEvent_8));
    _el_19.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_19_6.touchHandler));
    _el_19.addEventListener('input', this.eventHandler1(this._handleEvent_9));
    final subscription_5 = this._NgModel_19_8.update.listen(this.eventHandler1(this._handleEvent_10));
    _el_22.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_22_6.touchHandler));
    _el_22.addEventListener('input', this.eventHandler1(this._handleEvent_11));
    final subscription_6 = this._NgModel_22_8.update.listen(this.eventHandler1(this._handleEvent_12));
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((4 == nodeIndex)) {
      if (identical(token, const import41.MultiToken<import42.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_4_7;
      }
      if ((identical(token, import38.NgModel) || identical(token, import43.NgControl))) {
        return this._NgModel_4_8;
      }
    }
    if ((7 == nodeIndex)) {
      if (identical(token, const import41.MultiToken<import42.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_7_7;
      }
      if ((identical(token, import38.NgModel) || identical(token, import43.NgControl))) {
        return this._NgModel_7_8;
      }
    }
    if ((19 == nodeIndex)) {
      if (identical(token, const import41.MultiToken<import42.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_19_7;
      }
      if ((identical(token, import38.NgModel) || identical(token, import43.NgControl))) {
        return this._NgModel_19_8;
      }
    }
    if ((22 == nodeIndex)) {
      if (identical(token, const import41.MultiToken<import42.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_22_7;
      }
      if ((identical(token, import38.NgModel) || identical(token, import43.NgControl))) {
        return this._NgModel_22_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_0_5.ngOnInit();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_4_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.selected.name;
    if (import22.checkBinding(this._expr_0, currVal_0, 'selected.name', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._NgModel_4_8.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_4_8.ngAfterChanges();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_4_8.ngOnInit();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_7_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.id;
    if (import22.checkBinding(this._expr_1, currVal_1, 'id', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._NgModel_7_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_7_8.ngAfterChanges();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_7_8.ngOnInit();
    }
    if (firstCheck) {
      this._FluidButton_10_5.secondary = true;
      this._FluidButton_10_5.small = true;
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_10_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidCheckbox_12_5.label = 'Generate seperate Pack');
    }
    final currVal_5 = _ctx.selected.generatePack;
    if (import22.checkBinding(this._expr_5, currVal_5, 'selected.generatePack', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._FluidCheckbox_12_5.value = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (firstCheck) {
      (this._FluidCheckbox_13_5.label = 'Use an ItemFrame as display');
    }
    final currVal_7 = _ctx.selected.useItemFrame;
    if (import22.checkBinding(this._expr_7, currVal_7, 'selected.useItemFrame', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._FluidCheckbox_13_5.value = currVal_7;
      this._expr_7 = currVal_7;
    }
    if (firstCheck) {
      (this._FluidCheckbox_14_5.label = 'Set the entity on fire');
    }
    final currVal_9 = _ctx.selected.fire;
    if (import22.checkBinding(this._expr_9, currVal_9, 'selected.fire', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._FluidCheckbox_14_5.value = currVal_9;
      this._expr_9 = currVal_9;
    }
    if (firstCheck) {
      this._FluidButton_15_5.secondary = true;
      this._FluidButton_15_5.small = true;
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_15_5.ngOnInit();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_19_5.ngOnInit();
    }
    changed = false;
    final currVal_12 = _ctx.blockid;
    if (import22.checkBinding(this._expr_12, currVal_12, 'blockid', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._NgModel_19_8.model = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    if (changed) {
      this._NgModel_19_8.ngAfterChanges();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_19_8.ngOnInit();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_22_5.ngOnInit();
    }
    changed = false;
    final currVal_13 = _ctx.tags;
    if (import22.checkBinding(this._expr_13, currVal_13, 'tags', 'package:stevertus/src/pages/tools/blocks/blocks.html')) {
      this._NgModel_22_8.model = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    if (changed) {
      this._NgModel_22_8.ngAfterChanges();
    }
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_22_8.ngOnInit();
    }
    this._textBinding_3.updateText(import31.interpolateString0(_ctx.selected.name));
    this._compView_0.detectChanges();
    this._compView_4.detectChanges();
    this._compView_7.detectChanges();
    this._compView_10.detectChanges();
    this._compView_12.detectChanges();
    this._compView_13.detectChanges();
    this._compView_14.detectChanges();
    this._compView_15.detectChanges();
    this._compView_19.detectChanges();
    this._compView_22.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._compView_7.destroyInternalState();
    this._compView_10.destroyInternalState();
    this._compView_12.destroyInternalState();
    this._compView_13.destroyInternalState();
    this._compView_14.destroyInternalState();
    this._compView_15.destroyInternalState();
    this._compView_19.destroyInternalState();
    this._compView_22.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_4_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.selected.name = $event;
  }

  void _handleEvent_2($event) {
    this._DefaultValueAccessor_7_6.handleChange($event.target.value);
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.id = $event;
  }

  void _handleEvent_4($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('blocks_item');
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.selected.generatePack = $event;
  }

  void _handleEvent_6($event) {
    final _ctx = this.ctx;
    _ctx.selected.useItemFrame = $event;
  }

  void _handleEvent_7($event) {
    final _ctx = this.ctx;
    _ctx.selected.fire = $event;
  }

  void _handleEvent_8($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('blocks_block');
  }

  void _handleEvent_9($event) {
    this._DefaultValueAccessor_19_6.handleChange($event.target.value);
  }

  void _handleEvent_10($event) {
    final _ctx = this.ctx;
    _ctx.blockid = $event;
  }

  void _handleEvent_11($event) {
    this._DefaultValueAccessor_22_6.handleChange($event.target.value);
  }

  void _handleEvent_12($event) {
    final _ctx = this.ctx;
    _ctx.tags = $event;
  }
}

import26.EmbeddedView<void> viewFactory_BlocksToolPage3(import28.RenderView parentView, int parentIndex) {
  return _ViewBlocksToolPage3(parentView, parentIndex);
}

class _ViewBlocksToolPage4 extends import26.EmbeddedView<import3.BlocksToolPage> {
  final import27.TextBinding _textBinding_1 = import27.TextBinding();
  import44.ViewFluidMultiInput0 _compView_0;
  import45.FluidMultiInput _FluidMultiInput_0_5;
  _ViewBlocksToolPage4(import28.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import44.ViewFluidMultiInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClass(_el_0, 'error');
    import23.setAttribute(_el_0, 'cols', '30');
    import23.setAttribute(_el_0, 'disabled', '');
    import23.setAttribute(_el_0, 'fluidMultiInput', '');
    import23.setAttribute(_el_0, 'placeholder', 'ERROR');
    import23.setAttribute(_el_0, 'rows', '10');
    this.addShimC(_el_0);
    this._FluidMultiInput_0_5 = import45.FluidMultiInput(_el_0);
    this._compView_0.createAndProject(this._FluidMultiInput_0_5, [
      [this._textBinding_1.element]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this._FluidMultiInput_0_5.ngOnInit();
    }
    this._textBinding_1.updateText(import31.interpolateString0(_ctx.errorText));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import26.EmbeddedView<void> viewFactory_BlocksToolPage4(import28.RenderView parentView, int parentIndex) {
  return _ViewBlocksToolPage4(parentView, parentIndex);
}

final List<dynamic> styles$BlocksToolPageHost = const [];

class _ViewBlocksToolPageHost0 extends import46.HostView<import3.BlocksToolPage> {
  import16.ModalService _ModalService_0_5;
  @override
  void build() {
    this.componentView = ViewBlocksToolPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._ModalService_0_5 = import16.ModalService();
    this.component = import3.BlocksToolPage(this._ModalService_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.ModalService) && (0 == nodeIndex))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import22.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import46.HostView<import3.BlocksToolPage> viewFactory_BlocksToolPageHost0() {
  return _ViewBlocksToolPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
