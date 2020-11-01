// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'gui.dart';
export 'gui.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/tools/gui/gui.css.shim.dart' as import0;
import 'package:stevertus/src/pages/tools/tools.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'gui.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:fluix_web/fluix/card/card.template.dart' as import8;
import 'package:fluix_web/fluix/card/card.dart' as import9;
import 'package:fluix_web/fluix/checkbox/checkbox.template.dart' as import10;
import 'package:fluix_web/fluix/checkbox/checkbox.dart' as import11;
import 'package:fluix_web/fluix/button/button.template.dart' as import12;
import 'package:fluix_web/fluix/button/button.dart' as import13;
import 'package:fluix_web/fluix/input/input.template.dart' as import14;
import 'package:fluix_web/fluix/input/input.dart' as import15;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import17;
import 'package:angular_forms/src/directives/ng_model.dart' as import18;
import 'package:fluix_web/fluix/dropdown/dropdown.template.dart' as import19;
import 'package:fluix_web/fluix/dropdown/dropdown.dart' as import20;
import '../../../components/objd/item_selector/item.template.dart' as import21;
import 'package:fluix_web/fluix/modal/modal_service.dart' as import22;
import '../../../components/objd/item_selector/item.dart' as import23;
import 'package:ng_translate/src/translation_pipe.dart' as import24;
import 'dart:html' as import25;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import26;
import 'package:angular/src/core/linker/views/view.dart' as import27;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import29;
import 'package:angular/src/runtime/dom_helpers.dart' as import30;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import32;
import 'package:ng_translate/src/translation_service.dart' as import33;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import34;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import35;
import 'package:angular_forms/src/directives/ng_control.dart' as import36;
import 'package:angular/src/runtime/interpolate.dart' as import37;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import39;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import40;
import 'package:fluix_web/fluix/icon/icon.dart' as import41;
import 'package:angular/src/core/linker/views/render_view.dart' as import42;
import 'dart:core';
import 'package:angular/src/core/linker/app_view_utils.dart' as import44;
import 'package:fluix_web/fluix/multi_input/input.template.dart' as import45;
import 'package:fluix_web/fluix/multi_input/input.dart' as import46;
import 'package:angular_forms/src/directives/number_value_accessor.dart' as import47;
import 'package:angular/src/core/linker/views/host_view.dart' as import48;

final List<dynamic> styles$GuiToolPage = [import0.styles, import1.styles];

class ViewGuiToolPage0 extends import2.ComponentView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_10 = import4.TextBinding();
  final import4.TextBinding _textBinding_12 = import4.TextBinding();
  final import4.TextBinding _textBinding_14 = import4.TextBinding();
  final import4.TextBinding _textBinding_16 = import4.TextBinding();
  final import4.TextBinding _textBinding_19 = import4.TextBinding();
  final import4.TextBinding _textBinding_21 = import4.TextBinding();
  final import4.TextBinding _textBinding_33 = import4.TextBinding();
  final import4.TextBinding _textBinding_38 = import4.TextBinding();
  final import4.TextBinding _textBinding_52 = import4.TextBinding();
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  import7.NgFor _NgFor_7_9;
  import8.ViewFluidCard0 _compView_8;
  import9.FluidCard _FluidCard_8_5;
  import10.ViewFluidCheckbox0 _compView_17;
  import11.FluidCheckbox _FluidCheckbox_17_5;
  import12.ViewFluidButton0 _compView_18;
  import13.FluidButton _FluidButton_18_5;
  import14.ViewFluidInput0 _compView_22;
  import15.FluidInput _FluidInput_22_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_22_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_22_7;
  import18.NgModel _NgModel_22_8;
  import19.ViewFluidDropdown0 _compView_24;
  import20.FluidDropdown _FluidDropdown_24_5;
  ViewContainer _appEl_25;
  NgIf _NgIf_25_9;
  ViewContainer _appEl_28;
  NgIf _NgIf_28_9;
  ViewContainer _appEl_30;
  NgIf _NgIf_30_9;
  import12.ViewFluidButton0 _compView_32;
  import13.FluidButton _FluidButton_32_5;
  import21.ViewItemSelectorComponent0 _compView_35;
  import22.ModalService _ModalService_35_5;
  import23.ItemSelectorComponent _ItemSelectorComponent_35_6;
  import19.ViewFluidDropdown0 _compView_39;
  import20.FluidDropdown _FluidDropdown_39_5;
  ViewContainer _appEl_42;
  NgIf _NgIf_42_9;
  ViewContainer _appEl_44;
  NgIf _NgIf_44_9;
  ViewContainer _appEl_46;
  NgIf _NgIf_46_9;
  ViewContainer _appEl_48;
  NgIf _NgIf_48_9;
  ViewContainer _appEl_49;
  NgIf _NgIf_49_9;
  import21.ViewItemSelectorComponent0 _compView_50;
  import22.ModalService _ModalService_50_5;
  import23.ItemSelectorComponent _ItemSelectorComponent_50_6;
  ViewContainer _appEl_53;
  NgIf _NgIf_53_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_17;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import24.TranslationPipe _pipe_ngtranslate_1;
  import24.TranslationPipe _pipe_ngtranslate_2;
  import24.TranslationPipe _pipe_ngtranslate_3;
  import24.TranslationPipe _pipe_ngtranslate_4;
  import24.TranslationPipe _pipe_ngtranslate_5;
  import24.TranslationPipe _pipe_ngtranslate_6;
  import24.TranslationPipe _pipe_ngtranslate_7;
  import24.TranslationPipe _pipe_ngtranslate_8;
  import25.DivElement _el_1;
  import25.DivElement _el_6;
  import25.InputElement _el_22;
  static import26.ComponentStyles _componentStyles;
  ViewGuiToolPage0(import27.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import25.document.createElement('gui_tool');
  }
  static String get _debugComponentUrl {
    return (import29.isDevMode ? 'asset:stevertus/lib/src/pages/tools/gui/gui.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import25.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import25.document;
    final _el_0 = import30.appendDiv(doc, parentRenderNode);
    import30.setAttribute(_el_0, 'id', 'center');
    this.addShimC(_el_0);
    this._el_1 = import30.appendDiv(doc, _el_0);
    this.updateChildClass(this._el_1, 'container');
    this.addShimC(this._el_1);
    final _el_2 = import30.appendDiv(doc, this._el_1);
    import30.setAttribute(_el_2, 'id', 'rightControl');
    this.addShimC(_el_2);
    final _anchor_3 = import30.appendAnchor(_el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_GuiToolPage1);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import30.appendAnchor(_el_2);
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_GuiToolPage2);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import30.appendAnchor(this._el_1);
    this._appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_GuiToolPage3);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    this._el_6 = import30.appendDiv(doc, this._el_1);
    this.updateChildClass(this._el_6, 'grid');
    this.addShimC(this._el_6);
    final _anchor_7 = import30.appendAnchor(this._el_6);
    this._appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_GuiToolPage4);
    this._NgFor_7_9 = import7.NgFor(this._appEl_7, _TemplateRef_7_8);
    this._compView_8 = import8.ViewFluidCard0(this, 8);
    final _el_8 = this._compView_8.rootElement;
    _el_0.append(_el_8);
    this.updateChildClassNonHtml(_el_8, 'card');
    this.addShimC(_el_8);
    this._FluidCard_8_5 = import9.FluidCard(_el_8);
    final _el_9 = doc.createElement('h3');
    this.addShimE(_el_9);
    _el_9.append(this._textBinding_10.element);
    final _text_11 = import30.appendText(_el_9, ' ');
    _el_9.append(this._textBinding_12.element);
    final _text_13 = import30.appendText(_el_9, ' ');
    _el_9.append(this._textBinding_14.element);
    final _text_15 = import30.appendText(_el_9, ' ');
    _el_9.append(this._textBinding_16.element);
    this._compView_17 = import10.ViewFluidCheckbox0(this, 17);
    final _el_17 = this._compView_17.rootElement;
    this.addShimC(_el_17);
    this._FluidCheckbox_17_5 = import11.FluidCheckbox();
    this._compView_17.create(this._FluidCheckbox_17_5);
    this._compView_18 = import12.ViewFluidButton0(this, 18);
    final _el_18 = this._compView_18.rootElement;
    import30.setAttribute(_el_18, 'fluidBtn', '');
    import30.setAttribute(_el_18, 'secondary', '');
    this.addShimC(_el_18);
    this._FluidButton_18_5 = import13.FluidButton(_el_18);
    this._compView_18.createAndProject(this._FluidButton_18_5, [
      [this._textBinding_19.element]
    ]);
    final _el_20 = doc.createElement('h3');
    this.addShimE(_el_20);
    _el_20.append(this._textBinding_21.element);
    this._compView_22 = import14.ViewFluidInput0(this, 22);
    this._el_22 = this._compView_22.rootElement;
    import30.setAttribute(this._el_22, 'fluidInput', '');
    this.addShimC(this._el_22);
    this._FluidInput_22_5 = import15.FluidInput(this._el_22);
    this._DefaultValueAccessor_22_6 = import16.DefaultValueAccessor(this._el_22);
    this._NgValueAccessor_22_7 = [this._DefaultValueAccessor_22_6];
    this._NgModel_22_8 = import18.NgModel(null, this._NgValueAccessor_22_7);
    this._compView_22.createAndProject(this._FluidInput_22_5, [const []]);
    final _el_23 = doc.createElement('br');
    this.addShimE(_el_23);
    this._compView_24 = import19.ViewFluidDropdown0(this, 24);
    final _el_24 = this._compView_24.rootElement;
    this.addShimC(_el_24);
    this._FluidDropdown_24_5 = import20.FluidDropdown();
    this._compView_24.create(this._FluidDropdown_24_5);
    final _anchor_25 = import30.createAnchor();
    this._appEl_25 = ViewContainer(25, 8, this, _anchor_25);
    TemplateRef _TemplateRef_25_8 = TemplateRef(this._appEl_25, viewFactory_GuiToolPage5);
    this._NgIf_25_9 = NgIf(this._appEl_25, _TemplateRef_25_8);
    final _el_26 = doc.createElement('br');
    this.addShimE(_el_26);
    final _text_27 = import30.createText(' ');
    final _anchor_28 = import30.createAnchor();
    this._appEl_28 = ViewContainer(28, 8, this, _anchor_28);
    TemplateRef _TemplateRef_28_8 = TemplateRef(this._appEl_28, viewFactory_GuiToolPage6);
    this._NgIf_28_9 = NgIf(this._appEl_28, _TemplateRef_28_8);
    final _text_29 = import30.createText(' ');
    final _anchor_30 = import30.createAnchor();
    this._appEl_30 = ViewContainer(30, 8, this, _anchor_30);
    TemplateRef _TemplateRef_30_8 = TemplateRef(this._appEl_30, viewFactory_GuiToolPage7);
    this._NgIf_30_9 = NgIf(this._appEl_30, _TemplateRef_30_8);
    final _text_31 = import30.createText(' ');
    this._compView_32 = import12.ViewFluidButton0(this, 32);
    final _el_32 = this._compView_32.rootElement;
    this.updateChildClass(_el_32, 'full');
    import30.setAttribute(_el_32, 'fluidBtn', '');
    this.addShimC(_el_32);
    this._FluidButton_32_5 = import13.FluidButton(_el_32);
    final _text_34 = import30.createText(' Datapack');
    this._compView_32.createAndProject(this._FluidButton_32_5, [
      [this._textBinding_33.element, _text_34]
    ]);
    this._compView_8.createAndProject(this._FluidCard_8_5, [
      [_el_9, _el_17, _el_18, _el_20, this._el_22, _el_23, _el_24, this._appEl_25, _el_26, _text_27, this._appEl_28, _text_29, this._appEl_30, _text_31, _el_32]
    ]);
    this._compView_35 = import21.ViewItemSelectorComponent0(this, 35);
    final _el_35 = this._compView_35.rootElement;
    parentRenderNode.append(_el_35);
    import30.setAttribute(_el_35, 'name', 'gui_slot');
    this.addShimC(_el_35);
    this._ModalService_35_5 = import22.ModalService();
    this._ItemSelectorComponent_35_6 = import23.ItemSelectorComponent(this._ModalService_35_5);
    final _el_36 = doc.createElement('div');
    import30.setAttribute(_el_36, 'before', '');
    this.addShimC(_el_36);
    final _el_37 = import30.appendElement(doc, _el_36, 'p');
    this.addShimE(_el_37);
    _el_37.append(this._textBinding_38.element);
    this._compView_39 = import19.ViewFluidDropdown0(this, 39);
    final _el_39 = this._compView_39.rootElement;
    _el_36.append(_el_39);
    this.addShimC(_el_39);
    this._FluidDropdown_39_5 = import20.FluidDropdown();
    this._compView_39.create(this._FluidDropdown_39_5);
    final _el_40 = import30.appendElement(doc, _el_36, 'br');
    this.addShimE(_el_40);
    final _text_41 = import30.appendText(_el_36, ' ');
    final _anchor_42 = import30.appendAnchor(_el_36);
    this._appEl_42 = ViewContainer(42, 36, this, _anchor_42);
    TemplateRef _TemplateRef_42_8 = TemplateRef(this._appEl_42, viewFactory_GuiToolPage8);
    this._NgIf_42_9 = NgIf(this._appEl_42, _TemplateRef_42_8);
    final _text_43 = import30.appendText(_el_36, ' ');
    final _anchor_44 = import30.appendAnchor(_el_36);
    this._appEl_44 = ViewContainer(44, 36, this, _anchor_44);
    TemplateRef _TemplateRef_44_8 = TemplateRef(this._appEl_44, viewFactory_GuiToolPage9);
    this._NgIf_44_9 = NgIf(this._appEl_44, _TemplateRef_44_8);
    final _text_45 = import30.appendText(_el_36, ' ');
    final _anchor_46 = import30.appendAnchor(_el_36);
    this._appEl_46 = ViewContainer(46, 36, this, _anchor_46);
    TemplateRef _TemplateRef_46_8 = TemplateRef(this._appEl_46, viewFactory_GuiToolPage10);
    this._NgIf_46_9 = NgIf(this._appEl_46, _TemplateRef_46_8);
    final _text_47 = import30.appendText(_el_36, ' ');
    final _anchor_48 = import30.appendAnchor(_el_36);
    this._appEl_48 = ViewContainer(48, 36, this, _anchor_48);
    TemplateRef _TemplateRef_48_8 = TemplateRef(this._appEl_48, viewFactory_GuiToolPage11);
    this._NgIf_48_9 = NgIf(this._appEl_48, _TemplateRef_48_8);
    final _anchor_49 = import30.appendAnchor(_el_36);
    this._appEl_49 = ViewContainer(49, 36, this, _anchor_49);
    TemplateRef _TemplateRef_49_8 = TemplateRef(this._appEl_49, viewFactory_GuiToolPage12);
    this._NgIf_49_9 = NgIf(this._appEl_49, _TemplateRef_49_8);
    this._compView_35.createAndProject(this._ItemSelectorComponent_35_6, [
      [_el_36],
      const [],
      const []
    ]);
    this._compView_50 = import21.ViewItemSelectorComponent0(this, 50);
    final _el_50 = this._compView_50.rootElement;
    parentRenderNode.append(_el_50);
    import30.setAttribute(_el_50, 'name', 'gui_placeholder');
    this.addShimC(_el_50);
    this._ModalService_50_5 = import22.ModalService();
    this._ItemSelectorComponent_50_6 = import23.ItemSelectorComponent(this._ModalService_50_5);
    final _el_51 = doc.createElement('p');
    import30.setAttribute(_el_51, 'before', '');
    this.addShimE(_el_51);
    _el_51.append(this._textBinding_52.element);
    this._compView_50.createAndProject(this._ItemSelectorComponent_50_6, [
      [_el_51],
      const [],
      const []
    ]);
    final _anchor_53 = import30.appendAnchor(parentRenderNode);
    this._appEl_53 = ViewContainer(53, null, this, _anchor_53);
    TemplateRef _TemplateRef_53_8 = TemplateRef(this._appEl_53, viewFactory_GuiToolPage13);
    this._NgIf_53_9 = NgIf(this._appEl_53, _TemplateRef_53_8);
    _el_2.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._FluidCheckbox_17_5.valueChange.listen(this.eventHandler1(this._handleEvent_1));
    _el_18.addEventListener('click', this.eventHandler1(this._handleEvent_2));
    this._el_22.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_22_6.touchHandler));
    this._el_22.addEventListener('input', this.eventHandler1(this._handleEvent_3));
    final subscription_1 = this._NgModel_22_8.update.listen(this.eventHandler1(this._handleEvent_4));
    final subscription_2 = this._FluidDropdown_24_5.selectedChange.listen(this.eventHandler1(_ctx.containerChanged));
    _el_32.addEventListener('click', this.eventHandler0(_ctx.download));
    final subscription_3 = this._ItemSelectorComponent_35_6.itemChange.listen(this.eventHandler1(_ctx.slotChanged));
    final subscription_4 = this._FluidDropdown_39_5.selectedChange.listen(this.eventHandler1(this._handleEvent_5));
    final subscription_5 = this._ItemSelectorComponent_50_6.itemChange.listen(this.eventHandler1(this._handleEvent_6));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_1 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_2 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_3 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_4 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_5 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_6 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_7 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_8 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((22 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_22_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
        return this._NgModel_22_8;
      }
    }
    if ((identical(token, import22.ModalService) && ((35 <= nodeIndex) && (nodeIndex <= 49)))) {
      return this._ModalService_35_5;
    }
    if ((identical(token, import22.ModalService) && ((50 <= nodeIndex) && (nodeIndex <= 52)))) {
      return this._ModalService_50_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    this._NgIf_3_9.ngIf = ((_ctx.currentPageIndex + 1) == _ctx.module.pages.length);
    this._NgIf_4_9.ngIf = ((_ctx.currentPageIndex + 1) != _ctx.module.pages.length);
    this._NgIf_5_9.ngIf = (_ctx.currentPageIndex > 0);
    final currVal_2 = _ctx.slotCount;
    if (import29.checkBinding(this._expr_2, currVal_2, 'slotCount', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgFor_7_9.ngForOf = currVal_2;
      this._expr_2 = currVal_2;
    }
    if ((!import29.debugThrowIfChanged)) {
      this._NgFor_7_9.ngDoCheck();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_8_5.ngOnInit();
    }
    final currVal_3 = this._pipe_ngtranslate_2.transform('gui.fillEmptySlots');
    if (import29.checkBinding(this._expr_3, currVal_3, '\'gui.fillEmptySlots\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidCheckbox_17_5.label = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.currentPage.fillEmptySlots;
    if (import29.checkBinding(this._expr_4, currVal_4, 'currentPage.fillEmptySlots', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidCheckbox_17_5.value = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (firstCheck) {
      (this._FluidButton_18_5.secondary = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_18_5.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_22_5.ngOnInit();
    }
    changed = false;
    final currVal_7 = _ctx.namespace;
    if (import29.checkBinding(this._expr_7, currVal_7, 'namespace', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_22_8.model = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._NgModel_22_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_22_8.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.containers, null)) {
        (this._FluidDropdown_24_5.values = _ctx.containers);
      }
    }
    final currVal_8 = _ctx.selectedContainer;
    if (import29.checkBinding(this._expr_8, currVal_8, 'selectedContainer', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidDropdown_24_5.selected = currVal_8;
      this._expr_8 = currVal_8;
    }
    this._NgIf_25_9.ngIf = _ctx.showLocation;
    this._NgIf_28_9.ngIf = (_ctx.selected == 'HandItem');
    this._NgIf_30_9.ngIf = (_ctx.errorText != null);
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_32_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_35_6.name = 'gui_slot';
      changed = true;
    }
    final currVal_11 = _ctx.showItemInputs;
    if (import29.checkBinding(this._expr_11, currVal_11, 'showItemInputs', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_35_6.showId = currVal_11;
      changed = true;
      this._expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.showItemInputs;
    if (import29.checkBinding(this._expr_12, currVal_12, 'showItemInputs', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_35_6.showCount = currVal_12;
      changed = true;
      this._expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.showItemInputs;
    if (import29.checkBinding(this._expr_13, currVal_13, 'showItemInputs', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_35_6.showNbt = currVal_13;
      changed = true;
      this._expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.showItemInputs;
    if (import29.checkBinding(this._expr_14, currVal_14, 'showItemInputs', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_35_6.showModel = currVal_14;
      changed = true;
      this._expr_14 = currVal_14;
    }
    if (changed) {
      this._ItemSelectorComponent_35_6.ngAfterChanges();
    }
    if (firstCheck) {
      if (!identical(_ctx.guiSlots, null)) {
        (this._FluidDropdown_39_5.values = _ctx.guiSlots);
      }
    }
    final currVal_15 = _ctx.selectedGuiType;
    if (import29.checkBinding(this._expr_15, currVal_15, 'selectedGuiType', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidDropdown_39_5.selected = currVal_15;
      this._expr_15 = currVal_15;
    }
    this._NgIf_42_9.ngIf = (_ctx.selectedGuiType == 1);
    this._NgIf_44_9.ngIf = (_ctx.selectedGuiType == 1);
    this._NgIf_46_9.ngIf = (_ctx.selectedGuiType == 1);
    this._NgIf_48_9.ngIf = (_ctx.selectedGuiType == 5);
    this._NgIf_49_9.ngIf = _ctx.showItemInputs;
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_50_6.name = 'gui_placeholder';
      changed = true;
    }
    final currVal_17 = _ctx.currentPage.placeholder;
    if (import29.checkBinding(this._expr_17, currVal_17, 'currentPage.placeholder', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_50_6.item = currVal_17;
      changed = true;
      this._expr_17 = currVal_17;
    }
    if (changed) {
      this._ItemSelectorComponent_50_6.ngAfterChanges();
    }
    this._NgIf_53_9.ngIf = (_ctx.selected == 'HandItem');
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_25.detectChangesInNestedViews();
    this._appEl_28.detectChangesInNestedViews();
    this._appEl_30.detectChangesInNestedViews();
    this._appEl_42.detectChangesInNestedViews();
    this._appEl_44.detectChangesInNestedViews();
    this._appEl_46.detectChangesInNestedViews();
    this._appEl_48.detectChangesInNestedViews();
    this._appEl_49.detectChangesInNestedViews();
    this._appEl_53.detectChangesInNestedViews();
    final currVal_0 = _ctx.getWidth();
    if (import29.checkBinding(this._expr_0, currVal_0, 'getWidth()', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._el_1.style.setProperty('max-width', currVal_0);
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.columns;
    if (import29.checkBinding(this._expr_1, currVal_1, 'columns', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._el_6.style.setProperty('--columns', currVal_1?.toString());
      this._expr_1 = currVal_1;
    }
    this._textBinding_10.updateText(import37.interpolate0(this._pipe_ngtranslate_0.transform('page')));
    this._textBinding_12.updateText(import37.interpolate0((_ctx.currentPageIndex + 1)));
    this._textBinding_14.updateText(import37.interpolate0(this._pipe_ngtranslate_1.transform('of')));
    this._textBinding_16.updateTextWithPrimitive(_ctx.module.pages.length);
    this._textBinding_19.updateText(import37.interpolate0(this._pipe_ngtranslate_3.transform('gui.gui_placeholder')));
    this._textBinding_21.updateText(import37.interpolate0(this._pipe_ngtranslate_4.transform('project')));
    final currVal_6 = this._pipe_ngtranslate_5.transform('namespace');
    if (import29.checkBinding(this._expr_6, currVal_6, '\'namespace\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_22, 'placeholder', currVal_6);
      this._expr_6 = currVal_6;
    }
    this._textBinding_33.updateText(import37.interpolate0(this._pipe_ngtranslate_6.transform('download')));
    this._textBinding_38.updateText(import37.interpolate0(this._pipe_ngtranslate_7.transform('gui.actionSelect')));
    this._textBinding_52.updateText(import37.interpolate0(this._pipe_ngtranslate_8.transform('gui.placeholderItem')));
    this._compView_8.detectChanges();
    this._compView_17.detectChanges();
    this._compView_18.detectChanges();
    this._compView_22.detectChanges();
    this._compView_24.detectChanges();
    this._compView_32.detectChanges();
    this._compView_35.detectChanges();
    this._compView_39.detectChanges();
    this._compView_50.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_25.destroyNestedViews();
    this._appEl_28.destroyNestedViews();
    this._appEl_30.destroyNestedViews();
    this._appEl_42.destroyNestedViews();
    this._appEl_44.destroyNestedViews();
    this._appEl_46.destroyNestedViews();
    this._appEl_48.destroyNestedViews();
    this._appEl_49.destroyNestedViews();
    this._appEl_53.destroyNestedViews();
    this._compView_8.destroyInternalState();
    this._compView_17.destroyInternalState();
    this._compView_18.destroyInternalState();
    this._compView_22.destroyInternalState();
    this._compView_24.destroyInternalState();
    this._compView_32.destroyInternalState();
    this._compView_35.destroyInternalState();
    this._compView_39.destroyInternalState();
    this._compView_50.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.controlPages(true);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.currentPage.fillEmptySlots = $event;
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('gui_placeholder');
  }

  void _handleEvent_3($event) {
    this._DefaultValueAccessor_22_6.handleChange($event.target.value);
  }

  void _handleEvent_4($event) {
    final _ctx = this.ctx;
    _ctx.namespace = $event;
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.selectedGuiType = $event;
  }

  void _handleEvent_6($event) {
    final _ctx = this.ctx;
    _ctx.currentPage.placeholder = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import26.ComponentStyles.scoped(styles$GuiToolPage, _debugComponentUrl));
      if (import29.isDevMode) {
        import26.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _GuiToolPageNgFactory = ComponentFactory<import3.GuiToolPage>('gui_tool', viewFactory_GuiToolPageHost0);
ComponentFactory<import3.GuiToolPage> get GuiToolPageNgFactory {
  return _GuiToolPageNgFactory;
}

ComponentFactory<import3.GuiToolPage> createGuiToolPageFactory() {
  return ComponentFactory('gui_tool', viewFactory_GuiToolPageHost0);
}

class _ViewGuiToolPage1 extends import39.EmbeddedView<import3.GuiToolPage> {
  import40.ViewFluidIcon0 _compView_0;
  import41.FluidIcon _FluidIcon_0_5;
  _ViewGuiToolPage1(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import40.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import30.setAttribute(_el_0, 'icon', 'plus');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import41.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidIcon_0_5.size = 32;
      this._FluidIcon_0_5.icon = 'plus';
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage1(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage1(parentView, parentIndex);
}

class _ViewGuiToolPage2 extends import39.EmbeddedView<import3.GuiToolPage> {
  import40.ViewFluidIcon0 _compView_0;
  import41.FluidIcon _FluidIcon_0_5;
  _ViewGuiToolPage2(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import40.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import30.setAttribute(_el_0, 'icon', 'arrowRight');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import41.FluidIcon(_el_0);
    this._compView_0.createAndProject(this._FluidIcon_0_5, [const []]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidIcon_0_5.size = 32;
      this._FluidIcon_0_5.icon = 'arrowRight';
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_0_5.ngOnInit();
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage2(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage2(parentView, parentIndex);
}

class _ViewGuiToolPage3 extends import39.EmbeddedView<import3.GuiToolPage> {
  import40.ViewFluidIcon0 _compView_1;
  import41.FluidIcon _FluidIcon_1_5;
  _ViewGuiToolPage3(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import25.document;
    final _el_0 = doc.createElement('div');
    import30.setAttribute(_el_0, 'id', 'leftControl');
    this.addShimC(_el_0);
    this._compView_1 = import40.ViewFluidIcon0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'icon');
    import30.setAttribute(_el_1, 'icon', 'arrowLeft');
    this.addShimC(_el_1);
    this._FluidIcon_1_5 = import41.FluidIcon(_el_1);
    this._compView_1.createAndProject(this._FluidIcon_1_5, [const []]);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidIcon_1_5.size = 32;
      this._FluidIcon_1_5.icon = 'arrowLeft';
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_1_5.ngOnInit();
    }
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_1.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.controlPages(false);
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage3(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage3(parentView, parentIndex);
}

class _ViewGuiToolPage4 extends import39.EmbeddedView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_4 = import4.TextBinding();
  var _expr_0;
  import25.Element _el_2;
  _ViewGuiToolPage4(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import25.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'slot');
    this.addShimC(_el_0);
    final _el_1 = import30.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'content');
    this.addShimC(_el_1);
    this._el_2 = import30.appendElement(doc, _el_1, 'img');
    this.addShimE(this._el_2);
    final _el_3 = import30.appendElement(doc, _el_1, 'p');
    this.addShimE(_el_3);
    _el_3.append(this._textBinding_4.element);
    _el_1.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_i = import29.unsafeCast<int>(this.locals['index']);
    final currVal_0 = _ctx.getImageUrl(local_i);
    if (import29.checkBinding(this._expr_0, currVal_0, 'getImageUrl(i)', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_2, 'src', import44.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    this._textBinding_4.updateText(import37.interpolateString0(_ctx.getTextForIndex(local_i)));
  }

  void _handleEvent_0($event) {
    final local_i = import29.unsafeCast<int>(this.locals['index']);
    final _ctx = this.ctx;
    _ctx.changeSlot(local_i);
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage4(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage4(parentView, parentIndex);
}

class _ViewGuiToolPage5 extends import39.EmbeddedView<import3.GuiToolPage> {
  import14.ViewFluidInput0 _compView_0;
  import15.FluidInput _FluidInput_0_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import18.NgModel _NgModel_0_8;
  var _expr_0;
  var _expr_1;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import25.InputElement _el_0;
  _ViewGuiToolPage5(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidInput0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import30.setAttribute(this._el_0, 'fluidInput', '');
    this.addShimC(this._el_0);
    this._FluidInput_0_5 = import15.FluidInput(this._el_0);
    this._DefaultValueAccessor_0_6 = import16.DefaultValueAccessor(this._el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import18.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    this._el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    this._el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
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
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.module.blockLocation.location;
    if (import29.checkBinding(this._expr_1, currVal_1, 'module.blockLocation.location', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_0_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    final currVal_0 = this._pipe_ngtranslate_0.transform('gui.blockLocation');
    if (import29.checkBinding(this._expr_0, currVal_0, '\'gui.blockLocation\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_0, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
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
    _ctx.module.blockLocation.location = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage5(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage5(parentView, parentIndex);
}

class _ViewGuiToolPage6 extends import39.EmbeddedView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import12.ViewFluidButton0 _compView_0;
  import13.FluidButton _FluidButton_0_5;
  import14.ViewFluidInput0 _compView_4;
  import15.FluidInput _FluidInput_4_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_4_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_4_7;
  import18.NgModel _NgModel_4_8;
  import10.ViewFluidCheckbox0 _compView_6;
  import11.FluidCheckbox _FluidCheckbox_6_5;
  import14.ViewFluidInput0 _compView_7;
  import15.FluidInput _FluidInput_7_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_7_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_7_7;
  import18.NgModel _NgModel_7_8;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import24.TranslationPipe _pipe_ngtranslate_1;
  import24.TranslationPipe _pipe_ngtranslate_2;
  import24.TranslationPipe _pipe_ngtranslate_3;
  import25.InputElement _el_4;
  import25.InputElement _el_7;
  _ViewGuiToolPage6(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import12.ViewFluidButton0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import30.setAttribute(_el_0, 'fluidBtn', '');
    import30.setAttribute(_el_0, 'secondary', '');
    this.addShimC(_el_0);
    this._FluidButton_0_5 = import13.FluidButton(_el_0);
    this._compView_0.createAndProject(this._FluidButton_0_5, [
      [this._textBinding_1.element]
    ]);
    final doc = import25.document;
    final _el_2 = doc.createElement('br');
    this.addShimE(_el_2);
    final _text_3 = import30.createText(' ');
    this._compView_4 = import14.ViewFluidInput0(this, 4);
    this._el_4 = this._compView_4.rootElement;
    import30.setAttribute(this._el_4, 'fluidInput', '');
    this.addShimC(this._el_4);
    this._FluidInput_4_5 = import15.FluidInput(this._el_4);
    this._DefaultValueAccessor_4_6 = import16.DefaultValueAccessor(this._el_4);
    this._NgValueAccessor_4_7 = [this._DefaultValueAccessor_4_6];
    this._NgModel_4_8 = import18.NgModel(null, this._NgValueAccessor_4_7);
    this._compView_4.createAndProject(this._FluidInput_4_5, [const []]);
    final _el_5 = doc.createElement('br');
    this.addShimE(_el_5);
    this._compView_6 = import10.ViewFluidCheckbox0(this, 6);
    final _el_6 = this._compView_6.rootElement;
    this.addShimC(_el_6);
    this._FluidCheckbox_6_5 = import11.FluidCheckbox();
    this._compView_6.create(this._FluidCheckbox_6_5);
    this._compView_7 = import14.ViewFluidInput0(this, 7);
    this._el_7 = this._compView_7.rootElement;
    import30.setAttribute(this._el_7, 'fluidInput', '');
    this.addShimC(this._el_7);
    this._FluidInput_7_5 = import15.FluidInput(this._el_7);
    this._DefaultValueAccessor_7_6 = import16.DefaultValueAccessor(this._el_7);
    this._NgValueAccessor_7_7 = [this._DefaultValueAccessor_7_6];
    this._NgModel_7_8 = import18.NgModel(null, this._NgValueAccessor_7_7);
    this._compView_7.createAndProject(this._FluidInput_7_5, [const []]);
    final _el_8 = doc.createElement('br');
    this.addShimE(_el_8);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this._el_4.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_4_6.touchHandler));
    this._el_4.addEventListener('input', this.eventHandler1(this._handleEvent_1));
    final subscription_0 = this._NgModel_4_8.update.listen(this.eventHandler1(this._handleEvent_2));
    final subscription_1 = this._FluidCheckbox_6_5.valueChange.listen(this.eventHandler1(this._handleEvent_3));
    this._el_7.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_7_6.touchHandler));
    this._el_7.addEventListener('input', this.eventHandler1(this._handleEvent_4));
    final subscription_2 = this._NgModel_7_8.update.listen(this.eventHandler1(this._handleEvent_5));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_1 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_2 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_3 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([_el_0, _el_2, _text_3, this._el_4, _el_5, _el_6, this._el_7, _el_8], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((4 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_4_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
        return this._NgModel_4_8;
      }
    }
    if ((7 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_7_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
        return this._NgModel_7_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidButton_0_5.secondary = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_0_5.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_4_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = _ctx.module.minecartName.value['text'];
    if (import29.checkBinding(this._expr_2, currVal_2, 'module.minecartName.value[\'text\']', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_4_8.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._NgModel_4_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_4_8.ngOnInit();
    }
    final currVal_3 = this._pipe_ngtranslate_2.transform('gui.minecartAlwaysActive');
    if (import29.checkBinding(this._expr_3, currVal_3, '\'gui.minecartAlwaysActive\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidCheckbox_6_5.label = currVal_3;
      this._expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.module.minecartAlwaysActive;
    if (import29.checkBinding(this._expr_4, currVal_4, 'module.minecartAlwaysActive', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._FluidCheckbox_6_5.value = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_7_5.ngOnInit();
    }
    changed = false;
    final currVal_6 = _ctx.module.offset.location;
    if (import29.checkBinding(this._expr_6, currVal_6, 'module.offset.location', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_7_8.model = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) {
      this._NgModel_7_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_7_8.ngOnInit();
    }
    this._textBinding_1.updateText(import37.interpolate0(this._pipe_ngtranslate_0.transform('gui.gui_trigger')));
    final currVal_1 = this._pipe_ngtranslate_1.transform('gui.minecartName');
    if (import29.checkBinding(this._expr_1, currVal_1, '\'gui.minecartName\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_4, 'placeholder', currVal_1);
      this._expr_1 = currVal_1;
    }
    final currVal_5 = this._pipe_ngtranslate_3.transform('gui.offset');
    if (import29.checkBinding(this._expr_5, currVal_5, '\'gui.offset\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_7, 'placeholder', currVal_5);
      this._expr_5 = currVal_5;
    }
    this._compView_0.detectChanges();
    this._compView_4.detectChanges();
    this._compView_6.detectChanges();
    this._compView_7.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._compView_6.destroyInternalState();
    this._compView_7.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('gui_trigger');
  }

  void _handleEvent_1($event) {
    this._DefaultValueAccessor_4_6.handleChange($event.target.value);
  }

  void _handleEvent_2($event) {
    final _ctx = this.ctx;
    _ctx.module.minecartName.value['text'] = $event;
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.module.minecartAlwaysActive = $event;
  }

  void _handleEvent_4($event) {
    this._DefaultValueAccessor_7_6.handleChange($event.target.value);
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.module.offset.location = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage6(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage6(parentView, parentIndex);
}

class _ViewGuiToolPage7 extends import39.EmbeddedView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import45.ViewFluidMultiInput0 _compView_0;
  import46.FluidMultiInput _FluidMultiInput_0_5;
  _ViewGuiToolPage7(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import45.ViewFluidMultiInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClass(_el_0, 'error');
    import30.setAttribute(_el_0, 'cols', '30');
    import30.setAttribute(_el_0, 'disabled', '');
    import30.setAttribute(_el_0, 'fluidMultiInput', '');
    import30.setAttribute(_el_0, 'placeholder', 'ERROR');
    import30.setAttribute(_el_0, 'rows', '10');
    this.addShimC(_el_0);
    this._FluidMultiInput_0_5 = import46.FluidMultiInput(_el_0);
    this._compView_0.createAndProject(this._FluidMultiInput_0_5, [
      [this._textBinding_1.element]
    ]);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidMultiInput_0_5.ngOnInit();
    }
    this._textBinding_1.updateText(import37.interpolateString0(_ctx.errorText));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage7(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage7(parentView, parentIndex);
}

class _ViewGuiToolPage8 extends import39.EmbeddedView<import3.GuiToolPage> {
  import45.ViewFluidMultiInput0 _compView_0;
  import46.FluidMultiInput _FluidMultiInput_0_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import18.NgModel _NgModel_0_8;
  var _expr_0;
  var _expr_1;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import25.TextAreaElement _el_0;
  _ViewGuiToolPage8(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import45.ViewFluidMultiInput0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import30.setAttribute(this._el_0, 'cols', '30');
    import30.setAttribute(this._el_0, 'fluidMultiInput', '');
    import30.setAttribute(this._el_0, 'rows', '5');
    import30.setAttribute(this._el_0, 'style', 'width: 90%');
    this.addShimC(this._el_0);
    this._FluidMultiInput_0_5 = import46.FluidMultiInput(this._el_0);
    this._DefaultValueAccessor_0_6 = import16.DefaultValueAccessor(this._el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import18.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidMultiInput_0_5, [const []]);
    this._el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    this._el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
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
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidMultiInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.selectedSlotActions;
    if (import29.checkBinding(this._expr_1, currVal_1, 'selectedSlotActions', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_0_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    final currVal_0 = this._pipe_ngtranslate_0.transform('gui.executeCommands');
    if (import29.checkBinding(this._expr_0, currVal_0, '\'gui.executeCommands\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_0, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
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
    _ctx.selectedSlotActions = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage8(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage8(parentView, parentIndex);
}

class _ViewGuiToolPage9 extends import39.EmbeddedView<import3.GuiToolPage> {
  import14.ViewFluidInput0 _compView_0;
  import15.FluidInput _FluidInput_0_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import18.NgModel _NgModel_0_8;
  var _expr_0;
  var _expr_1;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import25.InputElement _el_0;
  _ViewGuiToolPage9(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidInput0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import30.setAttribute(this._el_0, 'fluidInput', '');
    this.addShimC(this._el_0);
    this._FluidInput_0_5 = import15.FluidInput(this._el_0);
    this._DefaultValueAccessor_0_6 = import16.DefaultValueAccessor(this._el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import18.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    this._el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    this._el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
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
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.selectedCountScore;
    if (import29.checkBinding(this._expr_1, currVal_1, 'selectedCountScore', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_0_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    final currVal_0 = this._pipe_ngtranslate_0.transform('gui.countScoreboard');
    if (import29.checkBinding(this._expr_0, currVal_0, '\'gui.countScoreboard\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_0, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
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
    _ctx.selectedCountScore = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage9(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage9(parentView, parentIndex);
}

class _ViewGuiToolPage10 extends import39.EmbeddedView<import3.GuiToolPage> {
  import14.ViewFluidInput0 _compView_0;
  import15.FluidInput _FluidInput_0_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_0_6;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_0_7;
  import18.NgModel _NgModel_0_8;
  var _expr_0;
  var _expr_1;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import25.InputElement _el_0;
  _ViewGuiToolPage10(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidInput0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import30.setAttribute(this._el_0, 'fluidInput', '');
    this.addShimC(this._el_0);
    this._FluidInput_0_5 = import15.FluidInput(this._el_0);
    this._DefaultValueAccessor_0_6 = import16.DefaultValueAccessor(this._el_0);
    this._NgValueAccessor_0_7 = [this._DefaultValueAccessor_0_6];
    this._NgModel_0_8 = import18.NgModel(null, this._NgValueAccessor_0_7);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    this._el_0.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_0_6.touchHandler));
    this._el_0.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_0_8.update.listen(this.eventHandler1(this._handleEvent_1));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_7;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
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
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.selectedCountScoreEntity;
    if (import29.checkBinding(this._expr_1, currVal_1, 'selectedCountScoreEntity', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_0_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_8.ngOnInit();
    }
    final currVal_0 = this._pipe_ngtranslate_0.transform('gui.countEntity');
    if (import29.checkBinding(this._expr_0, currVal_0, '\'gui.countEntity\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_0, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
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
    _ctx.selectedCountScoreEntity = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage10(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage10(parentView, parentIndex);
}

class _ViewGuiToolPage11 extends import39.EmbeddedView<import3.GuiToolPage> {
  import14.ViewFluidInput0 _compView_0;
  import15.FluidInput _FluidInput_0_5;
  import16.DefaultValueAccessor _DefaultValueAccessor_0_6;
  import47.NumberValueAccessor _NumberValueAccessor_0_7;
  List<import17.ControlValueAccessor<dynamic>> _NgValueAccessor_0_8;
  import18.NgModel _NgModel_0_9;
  var _expr_0;
  var _expr_1;
  import24.TranslationPipe _pipe_ngtranslate_0;
  import25.InputElement _el_0;
  _ViewGuiToolPage11(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidInput0(this, 0);
    this._el_0 = this._compView_0.rootElement;
    import30.setAttribute(this._el_0, 'fluidInput', '');
    import30.setAttribute(this._el_0, 'type', 'number');
    this.addShimC(this._el_0);
    this._FluidInput_0_5 = import15.FluidInput(this._el_0);
    this._DefaultValueAccessor_0_6 = import16.DefaultValueAccessor(this._el_0);
    this._NumberValueAccessor_0_7 = import47.NumberValueAccessor(this._el_0);
    this._NgValueAccessor_0_8 = [this._DefaultValueAccessor_0_6, this._NumberValueAccessor_0_7];
    this._NgModel_0_9 = import18.NgModel(null, this._NgValueAccessor_0_8);
    this._compView_0.createAndProject(this._FluidInput_0_5, [const []]);
    this._el_0.addEventListener('blur', this.eventHandler1(this._handleEvent_0));
    this._el_0.addEventListener('input', this.eventHandler1(this._handleEvent_1));
    this._el_0.addEventListener('change', this.eventHandler1(this._handleEvent_2));
    final subscription_0 = this._NgModel_0_9.update.listen(this.eventHandler1(this._handleEvent_3));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([this._el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, const import34.MultiToken<import35.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_0_8;
      }
      if ((identical(token, import18.NgModel) || identical(token, import36.NgControl))) {
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
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_0_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.selectedSlotPage;
    if (import29.checkBinding(this._expr_1, currVal_1, 'selectedSlotPage', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._NgModel_0_9.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_0_9.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_0_9.ngOnInit();
    }
    final currVal_0 = this._pipe_ngtranslate_0.transform('gui.pageNumber');
    if (import29.checkBinding(this._expr_0, currVal_0, '\'gui.pageNumber\' | ngtranslate', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      import30.setProperty(this._el_0, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
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
    _ctx.selectedSlotPage = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage11(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage11(parentView, parentIndex);
}

class _ViewGuiToolPage12 extends import39.EmbeddedView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import24.TranslationPipe _pipe_ngtranslate_0;
  _ViewGuiToolPage12(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import25.document;
    final _el_0 = doc.createElement('h3');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    this._textBinding_1.updateText(import37.interpolate0(this._pipe_ngtranslate_0.transform('gui.selectItem')));
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage12(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage12(parentView, parentIndex);
}

class _ViewGuiToolPage13 extends import39.EmbeddedView<import3.GuiToolPage> {
  final import4.TextBinding _textBinding_2 = import4.TextBinding();
  import21.ViewItemSelectorComponent0 _compView_0;
  import22.ModalService _ModalService_0_5;
  import23.ItemSelectorComponent _ItemSelectorComponent_0_6;
  var _expr_0;
  import24.TranslationPipe _pipe_ngtranslate_0;
  _ViewGuiToolPage13(import42.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import21.ViewItemSelectorComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    import30.setAttribute(_el_0, 'name', 'gui_trigger');
    this.addShimC(_el_0);
    this._ModalService_0_5 = import22.ModalService();
    this._ItemSelectorComponent_0_6 = import23.ItemSelectorComponent(this._ModalService_0_5);
    final doc = import25.document;
    final _el_1 = doc.createElement('p');
    import30.setAttribute(_el_1, 'before', '');
    this.addShimE(_el_1);
    _el_1.append(this._textBinding_2.element);
    this._compView_0.createAndProject(this._ItemSelectorComponent_0_6, [
      [_el_1],
      const [],
      const []
    ]);
    final subscription_0 = this._ItemSelectorComponent_0_6.itemChange.listen(this.eventHandler1(this._handleEvent_0));
    import32.debugInjectorEnter(import24.TranslationPipe);
    this._pipe_ngtranslate_0 = import24.TranslationPipe(this.parentView.injectorGet(import33.TranslationService, this.parentIndex));
    import32.debugInjectorLeave(import24.TranslationPipe);
    this.initRootNodesAndSubscriptions([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.ModalService) && (nodeIndex <= 2))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_0_6.name = 'gui_trigger';
      changed = true;
    }
    final currVal_0 = _ctx.module.triggerGui;
    if (import29.checkBinding(this._expr_0, currVal_0, 'module.triggerGui', 'package:stevertus/src/pages/tools/gui/gui.html')) {
      this._ItemSelectorComponent_0_6.item = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._ItemSelectorComponent_0_6.ngAfterChanges();
    }
    this._textBinding_2.updateText(import37.interpolate0(this._pipe_ngtranslate_0.transform('gui.handItem')));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.module.triggerGui = $event;
  }
}

import39.EmbeddedView<void> viewFactory_GuiToolPage13(import42.RenderView parentView, int parentIndex) {
  return _ViewGuiToolPage13(parentView, parentIndex);
}

final List<dynamic> styles$GuiToolPageHost = const [];

class _ViewGuiToolPageHost0 extends import48.HostView<import3.GuiToolPage> {
  import22.ModalService _ModalService_0_5;
  @override
  void build() {
    this.componentView = ViewGuiToolPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._ModalService_0_5 = import22.ModalService();
    this.component = import3.GuiToolPage(this._ModalService_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.ModalService) && (0 == nodeIndex))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }
}

import48.HostView<import3.GuiToolPage> viewFactory_GuiToolPageHost0() {
  return _ViewGuiToolPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
