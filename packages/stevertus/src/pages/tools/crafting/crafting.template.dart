// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'crafting.dart';
export 'crafting.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/tools/crafting/crafting.css.shim.dart' as import0;
import 'package:stevertus/src/pages/tools/tools.css.shim.dart' as import1;
import 'package:angular/src/core/linker/views/component_view.dart' as import2;
import 'crafting.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import8;
import 'package:fluix_web/fluix/icon/icon.dart' as import9;
import 'package:fluix_web/fluix/card/card.template.dart' as import10;
import 'package:fluix_web/fluix/card/card.dart' as import11;
import 'package:fluix_web/fluix/input/input.template.dart' as import12;
import 'package:fluix_web/fluix/input/input.dart' as import13;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/number_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/ng_model.dart' as import17;
import 'package:fluix_web/fluix/checkbox/checkbox.template.dart' as import18;
import 'package:fluix_web/fluix/checkbox/checkbox.dart' as import19;
import 'package:fluix_web/fluix/button/button.template.dart' as import20;
import 'package:fluix_web/fluix/button/button.dart' as import21;
import '../../../components/objd/item_selector/item.template.dart' as import22;
import 'package:fluix_web/fluix/modal/modal_service.dart' as import23;
import '../../../components/objd/item_selector/item.dart' as import24;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import25;
import 'package:angular/src/core/linker/views/view.dart' as import26;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import28;
import 'package:angular/src/runtime.dart' as import29;
import 'package:angular/src/runtime/dom_helpers.dart' as import30;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import32;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import33;
import 'package:angular_forms/src/directives/ng_control.dart' as import34;
import 'package:angular/src/runtime/interpolate.dart' as import35;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import37;
import 'package:angular/src/core/linker/views/render_view.dart' as import38;
import 'dart:core';
import 'package:angular/src/core/linker/app_view_utils.dart' as import40;
import 'package:fluix_web/fluix/multi_input/input.template.dart' as import41;
import 'package:fluix_web/fluix/multi_input/input.dart' as import42;
import 'package:angular/src/core/linker/views/host_view.dart' as import43;

final List<dynamic> styles$CraftingToolPage = [import0.styles, import1.styles];

class ViewCraftingToolPage0 extends import2.ComponentView<import3.CraftingToolPage> {
  final import4.TextBinding _textBinding_18 = import4.TextBinding();
  final import4.TextBinding _textBinding_20 = import4.TextBinding();
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  import7.NgFor _NgFor_7_9;
  import8.ViewFluidIcon0 _compView_8;
  import9.FluidIcon _FluidIcon_8_5;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  import10.ViewFluidCard0 _compView_13;
  import11.FluidCard _FluidCard_13_5;
  import12.ViewFluidInput0 _compView_21;
  import13.FluidInput _FluidInput_21_5;
  import14.DefaultValueAccessor _DefaultValueAccessor_21_6;
  import15.NumberValueAccessor _NumberValueAccessor_21_7;
  List<import16.ControlValueAccessor<dynamic>> _NgValueAccessor_21_8;
  import17.NgModel _NgModel_21_9;
  import18.ViewFluidCheckbox0 _compView_22;
  import19.FluidCheckbox _FluidCheckbox_22_5;
  import18.ViewFluidCheckbox0 _compView_23;
  import19.FluidCheckbox _FluidCheckbox_23_5;
  import12.ViewFluidInput0 _compView_24;
  import13.FluidInput _FluidInput_24_5;
  import14.DefaultValueAccessor _DefaultValueAccessor_24_6;
  import15.NumberValueAccessor _NumberValueAccessor_24_7;
  List<import16.ControlValueAccessor<dynamic>> _NgValueAccessor_24_8;
  import17.NgModel _NgModel_24_9;
  import12.ViewFluidInput0 _compView_27;
  import13.FluidInput _FluidInput_27_5;
  import14.DefaultValueAccessor _DefaultValueAccessor_27_6;
  List<import16.ControlValueAccessor<dynamic>> _NgValueAccessor_27_7;
  import17.NgModel _NgModel_27_8;
  import12.ViewFluidInput0 _compView_30;
  import13.FluidInput _FluidInput_30_5;
  import14.DefaultValueAccessor _DefaultValueAccessor_30_6;
  import15.NumberValueAccessor _NumberValueAccessor_30_7;
  List<import16.ControlValueAccessor<dynamic>> _NgValueAccessor_30_8;
  import17.NgModel _NgModel_30_9;
  import18.ViewFluidCheckbox0 _compView_31;
  import19.FluidCheckbox _FluidCheckbox_31_5;
  import18.ViewFluidCheckbox0 _compView_32;
  import19.FluidCheckbox _FluidCheckbox_32_5;
  import20.ViewFluidButton0 _compView_33;
  import21.FluidButton _FluidButton_33_5;
  import20.ViewFluidButton0 _compView_36;
  import21.FluidButton _FluidButton_36_5;
  import20.ViewFluidButton0 _compView_39;
  import21.FluidButton _FluidButton_39_5;
  import18.ViewFluidCheckbox0 _compView_41;
  import19.FluidCheckbox _FluidCheckbox_41_5;
  import20.ViewFluidButton0 _compView_43;
  import21.FluidButton _FluidButton_43_5;
  import8.ViewFluidIcon0 _compView_44;
  import9.FluidIcon _FluidIcon_44_5;
  ViewContainer _appEl_47;
  NgIf _NgIf_47_9;
  ViewContainer _appEl_48;
  NgIf _NgIf_48_9;
  import20.ViewFluidButton0 _compView_49;
  import21.FluidButton _FluidButton_49_5;
  import20.ViewFluidButton0 _compView_52;
  import21.FluidButton _FluidButton_52_5;
  import22.ViewItemSelectorComponent0 _compView_54;
  import23.ModalService _ModalService_54_5;
  import24.ItemSelectorComponent _ItemSelectorComponent_54_6;
  import22.ViewItemSelectorComponent0 _compView_55;
  import23.ModalService _ModalService_55_5;
  import24.ItemSelectorComponent _ItemSelectorComponent_55_6;
  import22.ViewItemSelectorComponent0 _compView_56;
  import23.ModalService _ModalService_56_5;
  import24.ItemSelectorComponent _ItemSelectorComponent_56_6;
  import22.ViewItemSelectorComponent0 _compView_57;
  import23.ModalService _ModalService_57_5;
  import24.ItemSelectorComponent _ItemSelectorComponent_57_6;
  var _expr_2;
  var _expr_4;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_11;
  var _expr_13;
  var _expr_18;
  var _expr_21;
  var _expr_23;
  var _expr_25;
  var _expr_27;
  static import25.ComponentStyles _componentStyles;
  ViewCraftingToolPage0(import26.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import28.document.createElement('crafting_tool');
  }
  static String get _debugComponentUrl {
    return (import29.isDevMode ? 'asset:stevertus/lib/src/pages/tools/crafting/crafting.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import28.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import28.document;
    final _el_0 = import30.appendDiv(doc, parentRenderNode);
    import30.setAttribute(_el_0, 'id', 'center');
    this.addShimC(_el_0);
    final _el_1 = import30.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'container');
    this.addShimC(_el_1);
    final _el_2 = import30.appendDiv(doc, _el_1);
    import30.setAttribute(_el_2, 'id', 'rightControl');
    this.addShimC(_el_2);
    final _anchor_3 = import30.appendAnchor(_el_2);
    this._appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_CraftingToolPage1);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import30.appendAnchor(_el_2);
    this._appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_CraftingToolPage2);
    this._NgIf_4_9 = NgIf(this._appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import30.appendAnchor(_el_1);
    this._appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(this._appEl_5, viewFactory_CraftingToolPage3);
    this._NgIf_5_9 = NgIf(this._appEl_5, _TemplateRef_5_8);
    final _el_6 = import30.appendDiv(doc, _el_1);
    this.updateChildClass(_el_6, 'grid');
    import30.setAttribute(_el_6, 'style', '--columns: 3; width: 50%;');
    this.addShimC(_el_6);
    final _anchor_7 = import30.appendAnchor(_el_6);
    this._appEl_7 = ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_CraftingToolPage4);
    this._NgFor_7_9 = import7.NgFor(this._appEl_7, _TemplateRef_7_8);
    this._compView_8 = import8.ViewFluidIcon0(this, 8);
    final _el_8 = this._compView_8.rootElement;
    _el_1.append(_el_8);
    import30.setAttribute(_el_8, 'icon', 'mediaFastForward');
    import30.setAttribute(_el_8, 'id', 'convertIcon');
    this.addShimC(_el_8);
    this._FluidIcon_8_5 = import9.FluidIcon(_el_8);
    this._compView_8.createAndProject(this._FluidIcon_8_5, [const []]);
    final _el_9 = import30.appendDiv(doc, _el_1);
    this.updateChildClass(_el_9, 'result');
    this.addShimC(_el_9);
    final _el_10 = import30.appendDiv(doc, _el_9);
    this.updateChildClass(_el_10, 'slot');
    this.addShimC(_el_10);
    final _el_11 = import30.appendDiv(doc, _el_10);
    this.updateChildClass(_el_11, 'content');
    this.addShimC(_el_11);
    final _anchor_12 = import30.appendAnchor(_el_11);
    this._appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(this._appEl_12, viewFactory_CraftingToolPage6);
    this._NgIf_12_9 = NgIf(this._appEl_12, _TemplateRef_12_8);
    this._compView_13 = import10.ViewFluidCard0(this, 13);
    final _el_13 = this._compView_13.rootElement;
    _el_0.append(_el_13);
    this.updateChildClassNonHtml(_el_13, 'card');
    this.addShimC(_el_13);
    this._FluidCard_13_5 = import11.FluidCard(_el_13);
    final _el_14 = doc.createElement('div');
    this.updateChildClass(_el_14, 'split');
    this.addShimC(_el_14);
    final _el_15 = import30.appendDiv(doc, _el_14);
    this.addShimC(_el_15);
    final _el_16 = import30.appendElement(doc, _el_15, 'h3');
    this.addShimE(_el_16);
    final _text_17 = import30.appendText(_el_16, 'Recipe ');
    _el_16.append(this._textBinding_18.element);
    final _text_19 = import30.appendText(_el_16, ' of ');
    _el_16.append(this._textBinding_20.element);
    this._compView_21 = import12.ViewFluidInput0(this, 21);
    final _el_21 = this._compView_21.rootElement;
    _el_15.append(_el_21);
    import30.setAttribute(_el_21, 'fluidInput', '');
    import30.setAttribute(_el_21, 'placeholder', 'Override Recipe ID');
    import30.setAttribute(_el_21, 'type', 'number');
    this.addShimC(_el_21);
    this._FluidInput_21_5 = import13.FluidInput(_el_21);
    this._DefaultValueAccessor_21_6 = import14.DefaultValueAccessor(_el_21);
    this._NumberValueAccessor_21_7 = import15.NumberValueAccessor(_el_21);
    this._NgValueAccessor_21_8 = [this._DefaultValueAccessor_21_6, this._NumberValueAccessor_21_7];
    this._NgModel_21_9 = import17.NgModel(null, this._NgValueAccessor_21_8);
    this._compView_21.createAndProject(this._FluidInput_21_5, [const []]);
    this._compView_22 = import18.ViewFluidCheckbox0(this, 22);
    final _el_22 = this._compView_22.rootElement;
    _el_15.append(_el_22);
    import30.setAttribute(_el_22, 'label', 'Shapeless');
    this.addShimC(_el_22);
    this._FluidCheckbox_22_5 = import19.FluidCheckbox();
    this._compView_22.create(this._FluidCheckbox_22_5);
    this._compView_23 = import18.ViewFluidCheckbox0(this, 23);
    final _el_23 = this._compView_23.rootElement;
    _el_15.append(_el_23);
    import30.setAttribute(_el_23, 'label', 'Check for Empty Slots');
    this.addShimC(_el_23);
    this._FluidCheckbox_23_5 = import19.FluidCheckbox();
    this._compView_23.create(this._FluidCheckbox_23_5);
    this._compView_24 = import12.ViewFluidInput0(this, 24);
    final _el_24 = this._compView_24.rootElement;
    _el_15.append(_el_24);
    import30.setAttribute(_el_24, 'fluidInput', '');
    import30.setAttribute(_el_24, 'placeholder', 'exact Output Count');
    import30.setAttribute(_el_24, 'type', 'number');
    this.addShimC(_el_24);
    this._FluidInput_24_5 = import13.FluidInput(_el_24);
    this._DefaultValueAccessor_24_6 = import14.DefaultValueAccessor(_el_24);
    this._NumberValueAccessor_24_7 = import15.NumberValueAccessor(_el_24);
    this._NgValueAccessor_24_8 = [this._DefaultValueAccessor_24_6, this._NumberValueAccessor_24_7];
    this._NgModel_24_9 = import17.NgModel(null, this._NgValueAccessor_24_8);
    this._compView_24.createAndProject(this._FluidInput_24_5, [const []]);
    final _el_25 = import30.appendElement(doc, _el_15, 'h3');
    this.addShimE(_el_25);
    final _text_26 = import30.appendText(_el_25, 'Project');
    this._compView_27 = import12.ViewFluidInput0(this, 27);
    final _el_27 = this._compView_27.rootElement;
    _el_15.append(_el_27);
    import30.setAttribute(_el_27, 'fluidInput', '');
    import30.setAttribute(_el_27, 'placeholder', 'Project namespace');
    this.addShimC(_el_27);
    this._FluidInput_27_5 = import13.FluidInput(_el_27);
    this._DefaultValueAccessor_27_6 = import14.DefaultValueAccessor(_el_27);
    this._NgValueAccessor_27_7 = [this._DefaultValueAccessor_27_6];
    this._NgModel_27_8 = import17.NgModel(null, this._NgValueAccessor_27_7);
    this._compView_27.createAndProject(this._FluidInput_27_5, [const []]);
    final _el_28 = import30.appendElement(doc, _el_15, 'br');
    this.addShimE(_el_28);
    final _text_29 = import30.appendText(_el_15, ' ');
    this._compView_30 = import12.ViewFluidInput0(this, 30);
    final _el_30 = this._compView_30.rootElement;
    _el_15.append(_el_30);
    import30.setAttribute(_el_30, 'fluidInput', '');
    import30.setAttribute(_el_30, 'placeholder', 'Base Id for all recipes');
    import30.setAttribute(_el_30, 'type', 'number');
    this.addShimC(_el_30);
    this._FluidInput_30_5 = import13.FluidInput(_el_30);
    this._DefaultValueAccessor_30_6 = import14.DefaultValueAccessor(_el_30);
    this._NumberValueAccessor_30_7 = import15.NumberValueAccessor(_el_30);
    this._NgValueAccessor_30_8 = [this._DefaultValueAccessor_30_6, this._NumberValueAccessor_30_7];
    this._NgModel_30_9 = import17.NgModel(null, this._NgValueAccessor_30_8);
    this._compView_30.createAndProject(this._FluidInput_30_5, [const []]);
    this._compView_31 = import18.ViewFluidCheckbox0(this, 31);
    final _el_31 = this._compView_31.rootElement;
    _el_15.append(_el_31);
    import30.setAttribute(_el_31, 'label', 'use a barrel instead of a chest');
    this.addShimC(_el_31);
    this._FluidCheckbox_31_5 = import19.FluidCheckbox();
    this._compView_31.create(this._FluidCheckbox_31_5);
    this._compView_32 = import18.ViewFluidCheckbox0(this, 32);
    final _el_32 = this._compView_32.rootElement;
    _el_15.append(_el_32);
    import30.setAttribute(_el_32, 'label', 'make the chest invisible(just up to 1.14)');
    this.addShimC(_el_32);
    this._FluidCheckbox_32_5 = import19.FluidCheckbox();
    this._compView_32.create(this._FluidCheckbox_32_5);
    this._compView_33 = import20.ViewFluidButton0(this, 33);
    final _el_33 = this._compView_33.rootElement;
    _el_15.append(_el_33);
    import30.setAttribute(_el_33, 'fluidBtn', '');
    import30.setAttribute(_el_33, 'secondary', '');
    this.addShimC(_el_33);
    this._FluidButton_33_5 = import21.FluidButton(_el_33);
    final _text_34 = import30.createText('Select Placeholder Item');
    this._compView_33.createAndProject(this._FluidButton_33_5, [
      [_text_34]
    ]);
    final _text_35 = import30.appendText(_el_15, ' ');
    this._compView_36 = import20.ViewFluidButton0(this, 36);
    final _el_36 = this._compView_36.rootElement;
    _el_15.append(_el_36);
    import30.setAttribute(_el_36, 'fluidBtn', '');
    import30.setAttribute(_el_36, 'secondary', '');
    this.addShimC(_el_36);
    this._FluidButton_36_5 = import21.FluidButton(_el_36);
    final _text_37 = import30.createText('Select Gui Item');
    this._compView_36.createAndProject(this._FluidButton_36_5, [
      [_text_37]
    ]);
    final _text_38 = import30.appendText(_el_15, ' ');
    this._compView_39 = import20.ViewFluidButton0(this, 39);
    final _el_39 = this._compView_39.rootElement;
    _el_15.append(_el_39);
    import30.setAttribute(_el_39, 'fluidBtn', '');
    import30.setAttribute(_el_39, 'secondary', '');
    this.addShimC(_el_39);
    this._FluidButton_39_5 = import21.FluidButton(_el_39);
    final _text_40 = import30.createText('Select Block Model');
    this._compView_39.createAndProject(this._FluidButton_39_5, [
      [_text_40]
    ]);
    this._compView_41 = import18.ViewFluidCheckbox0(this, 41);
    final _el_41 = this._compView_41.rootElement;
    _el_15.append(_el_41);
    import30.setAttribute(_el_41, 'label', ' include a function to generate recipes in minecraft');
    this.addShimC(_el_41);
    this._FluidCheckbox_41_5 = import19.FluidCheckbox();
    this._compView_41.create(this._FluidCheckbox_41_5);
    final _el_42 = import30.appendDiv(doc, _el_14);
    this.updateChildClass(_el_42, 'output');
    this.addShimC(_el_42);
    this._compView_43 = import20.ViewFluidButton0(this, 43);
    final _el_43 = this._compView_43.rootElement;
    _el_42.append(_el_43);
    import30.setAttribute(_el_43, 'fluidBtn', '');
    import30.setAttribute(_el_43, 'highlight', '');
    this.addShimC(_el_43);
    this._FluidButton_43_5 = import21.FluidButton(_el_43);
    this._compView_44 = import8.ViewFluidIcon0(this, 44);
    final _el_44 = this._compView_44.rootElement;
    this.addShimC(_el_44);
    this._FluidIcon_44_5 = import9.FluidIcon(_el_44);
    final _text_45 = import30.createText('clip');
    this._compView_44.createAndProject(this._FluidIcon_44_5, [
      [_text_45]
    ]);
    this._compView_43.createAndProject(this._FluidButton_43_5, [
      [_el_44]
    ]);
    final _text_46 = import30.appendText(_el_42, ' ');
    final _anchor_47 = import30.appendAnchor(_el_42);
    this._appEl_47 = ViewContainer(47, 42, this, _anchor_47);
    TemplateRef _TemplateRef_47_8 = TemplateRef(this._appEl_47, viewFactory_CraftingToolPage7);
    this._NgIf_47_9 = NgIf(this._appEl_47, _TemplateRef_47_8);
    final _anchor_48 = import30.appendAnchor(_el_14);
    this._appEl_48 = ViewContainer(48, 14, this, _anchor_48);
    TemplateRef _TemplateRef_48_8 = TemplateRef(this._appEl_48, viewFactory_CraftingToolPage8);
    this._NgIf_48_9 = NgIf(this._appEl_48, _TemplateRef_48_8);
    this._compView_49 = import20.ViewFluidButton0(this, 49);
    final _el_49 = this._compView_49.rootElement;
    this.updateChildClass(_el_49, 'full');
    import30.setAttribute(_el_49, 'fluidBtn', '');
    import30.setAttribute(_el_49, 'highlight', '');
    this.addShimC(_el_49);
    this._FluidButton_49_5 = import21.FluidButton(_el_49);
    final _text_50 = import30.createText('Download Datapack');
    this._compView_49.createAndProject(this._FluidButton_49_5, [
      [_text_50]
    ]);
    final _text_51 = import30.createText(' ');
    this._compView_52 = import20.ViewFluidButton0(this, 52);
    final _el_52 = this._compView_52.rootElement;
    this.updateChildClass(_el_52, 'full');
    import30.setAttribute(_el_52, 'fluidBtn', '');
    this.addShimC(_el_52);
    this._FluidButton_52_5 = import21.FluidButton(_el_52);
    final _text_53 = import30.createText('Generate');
    this._compView_52.createAndProject(this._FluidButton_52_5, [
      [_text_53]
    ]);
    this._compView_13.createAndProject(this._FluidCard_13_5, [
      [_el_14, _el_49, _text_51, _el_52]
    ]);
    this._compView_54 = import22.ViewItemSelectorComponent0(this, 54);
    final _el_54 = this._compView_54.rootElement;
    parentRenderNode.append(_el_54);
    import30.setAttribute(_el_54, 'name', 'crafting_item_selector');
    this.addShimC(_el_54);
    this._ModalService_54_5 = import23.ModalService();
    this._ItemSelectorComponent_54_6 = import24.ItemSelectorComponent(this._ModalService_54_5);
    this._compView_54.createAndProject(this._ItemSelectorComponent_54_6, [const [], const [], const []]);
    this._compView_55 = import22.ViewItemSelectorComponent0(this, 55);
    final _el_55 = this._compView_55.rootElement;
    parentRenderNode.append(_el_55);
    import30.setAttribute(_el_55, 'name', 'crafting_placeholder');
    this.addShimC(_el_55);
    this._ModalService_55_5 = import23.ModalService();
    this._ItemSelectorComponent_55_6 = import24.ItemSelectorComponent(this._ModalService_55_5);
    this._compView_55.createAndProject(this._ItemSelectorComponent_55_6, [const [], const [], const []]);
    this._compView_56 = import22.ViewItemSelectorComponent0(this, 56);
    final _el_56 = this._compView_56.rootElement;
    parentRenderNode.append(_el_56);
    import30.setAttribute(_el_56, 'name', 'crafting_gui');
    this.addShimC(_el_56);
    this._ModalService_56_5 = import23.ModalService();
    this._ItemSelectorComponent_56_6 = import24.ItemSelectorComponent(this._ModalService_56_5);
    this._compView_56.createAndProject(this._ItemSelectorComponent_56_6, [const [], const [], const []]);
    this._compView_57 = import22.ViewItemSelectorComponent0(this, 57);
    final _el_57 = this._compView_57.rootElement;
    parentRenderNode.append(_el_57);
    import30.setAttribute(_el_57, 'name', 'crafting_block');
    this.addShimC(_el_57);
    this._ModalService_57_5 = import23.ModalService();
    this._ItemSelectorComponent_57_6 = import24.ItemSelectorComponent(this._ModalService_57_5);
    this._compView_57.createAndProject(this._ItemSelectorComponent_57_6, [const [], const [], const []]);
    _el_2.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    _el_9.addEventListener('click', this.eventHandler1(this._handleEvent_1));
    _el_21.addEventListener('blur', this.eventHandler1(this._handleEvent_2));
    _el_21.addEventListener('input', this.eventHandler1(this._handleEvent_3));
    _el_21.addEventListener('change', this.eventHandler1(this._handleEvent_4));
    final subscription_0 = this._NgModel_21_9.update.listen(this.eventHandler1(this._handleEvent_5));
    final subscription_1 = this._FluidCheckbox_22_5.valueChange.listen(this.eventHandler1(this._handleEvent_6));
    final subscription_2 = this._FluidCheckbox_23_5.valueChange.listen(this.eventHandler1(this._handleEvent_7));
    _el_24.addEventListener('blur', this.eventHandler1(this._handleEvent_8));
    _el_24.addEventListener('input', this.eventHandler1(this._handleEvent_9));
    _el_24.addEventListener('change', this.eventHandler1(this._handleEvent_10));
    final subscription_3 = this._NgModel_24_9.update.listen(this.eventHandler1(this._handleEvent_11));
    _el_27.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_27_6.touchHandler));
    _el_27.addEventListener('input', this.eventHandler1(this._handleEvent_12));
    final subscription_4 = this._NgModel_27_8.update.listen(this.eventHandler1(this._handleEvent_13));
    _el_30.addEventListener('blur', this.eventHandler1(this._handleEvent_14));
    _el_30.addEventListener('input', this.eventHandler1(this._handleEvent_15));
    _el_30.addEventListener('change', this.eventHandler1(this._handleEvent_16));
    final subscription_5 = this._NgModel_30_9.update.listen(this.eventHandler1(this._handleEvent_17));
    _el_31.addEventListener('click', this.eventHandler1(this._handleEvent_18));
    final subscription_6 = this._FluidCheckbox_32_5.valueChange.listen(this.eventHandler1(this._handleEvent_19));
    _el_33.addEventListener('click', this.eventHandler1(this._handleEvent_20));
    _el_36.addEventListener('click', this.eventHandler1(this._handleEvent_21));
    _el_39.addEventListener('click', this.eventHandler1(this._handleEvent_22));
    final subscription_7 = this._FluidCheckbox_41_5.valueChange.listen(this.eventHandler1(this._handleEvent_23));
    _el_43.addEventListener('click', this.eventHandler0(_ctx.copy));
    _el_49.addEventListener('click', this.eventHandler0(_ctx.download));
    _el_52.addEventListener('click', this.eventHandler0(_ctx.generate));
    final subscription_8 = this._ItemSelectorComponent_54_6.itemChange.listen(this.eventHandler1(this._handleEvent_24));
    final subscription_9 = this._ItemSelectorComponent_55_6.itemChange.listen(this.eventHandler1(this._handleEvent_25));
    final subscription_10 = this._ItemSelectorComponent_56_6.itemChange.listen(this.eventHandler1(this._handleEvent_26));
    final subscription_11 = this._ItemSelectorComponent_57_6.itemChange.listen(this.eventHandler1(this._handleEvent_27));
    this.initSubscriptions([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((21 == nodeIndex)) {
      if (identical(token, const import32.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_21_8;
      }
      if ((identical(token, import17.NgModel) || identical(token, import34.NgControl))) {
        return this._NgModel_21_9;
      }
    }
    if ((24 == nodeIndex)) {
      if (identical(token, const import32.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_24_8;
      }
      if ((identical(token, import17.NgModel) || identical(token, import34.NgControl))) {
        return this._NgModel_24_9;
      }
    }
    if ((27 == nodeIndex)) {
      if (identical(token, const import32.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_27_7;
      }
      if ((identical(token, import17.NgModel) || identical(token, import34.NgControl))) {
        return this._NgModel_27_8;
      }
    }
    if ((30 == nodeIndex)) {
      if (identical(token, const import32.MultiToken<import33.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_30_8;
      }
      if ((identical(token, import17.NgModel) || identical(token, import34.NgControl))) {
        return this._NgModel_30_9;
      }
    }
    if ((identical(token, import23.ModalService) && (54 == nodeIndex))) {
      return this._ModalService_54_5;
    }
    if ((identical(token, import23.ModalService) && (55 == nodeIndex))) {
      return this._ModalService_55_5;
    }
    if ((identical(token, import23.ModalService) && (56 == nodeIndex))) {
      return this._ModalService_56_5;
    }
    if ((identical(token, import23.ModalService) && (57 == nodeIndex))) {
      return this._ModalService_57_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    this._NgIf_3_9.ngIf = ((_ctx.currentIndex + 1) == _ctx.recipes.length);
    this._NgIf_4_9.ngIf = ((_ctx.currentIndex + 1) != _ctx.recipes.length);
    this._NgIf_5_9.ngIf = (_ctx.currentIndex > 0);
    if (firstCheck) {
      if (!identical(_ctx.slots, null)) {
        (this._NgFor_7_9.ngForOf = _ctx.slots);
      }
    }
    if ((!import29.debugThrowIfChanged)) {
      this._NgFor_7_9.ngDoCheck();
    }
    if (firstCheck) {
      (this._FluidIcon_8_5.icon = 'mediaFastForward');
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_8_5.ngOnInit();
    }
    this._NgIf_12_9.ngIf = (_ctx.current.result != null);
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_13_5.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_21_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = _ctx.current.id;
    if (import29.checkBinding(this._expr_2, currVal_2, 'current.id', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._NgModel_21_9.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._NgModel_21_9.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_21_9.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidCheckbox_22_5.label = 'Shapeless');
    }
    final currVal_4 = _ctx.current.isShapeless;
    if (import29.checkBinding(this._expr_4, currVal_4, 'current.isShapeless', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._FluidCheckbox_22_5.value = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (firstCheck) {
      (this._FluidCheckbox_23_5.label = 'Check for Empty Slots');
    }
    final currVal_6 = _ctx.current.exactlyPlaced;
    if (import29.checkBinding(this._expr_6, currVal_6, 'current.exactlyPlaced', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._FluidCheckbox_23_5.value = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_24_5.ngOnInit();
    }
    changed = false;
    final currVal_7 = _ctx.current.exactResult;
    if (import29.checkBinding(this._expr_7, currVal_7, 'current.exactResult', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._NgModel_24_9.model = currVal_7;
      changed = true;
      this._expr_7 = currVal_7;
    }
    if (changed) {
      this._NgModel_24_9.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_24_9.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_27_5.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.table.name;
    if (import29.checkBinding(this._expr_8, currVal_8, 'table.name', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._NgModel_27_8.model = currVal_8;
      changed = true;
      this._expr_8 = currVal_8;
    }
    if (changed) {
      this._NgModel_27_8.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_27_8.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_30_5.ngOnInit();
    }
    changed = false;
    final currVal_9 = _ctx.table.id;
    if (import29.checkBinding(this._expr_9, currVal_9, 'table.id', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._NgModel_30_9.model = currVal_9;
      changed = true;
      this._expr_9 = currVal_9;
    }
    if (changed) {
      this._NgModel_30_9.ngAfterChanges();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_30_9.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidCheckbox_31_5.label = 'use a barrel instead of a chest');
    }
    final currVal_11 = _ctx.table.useBarrel;
    if (import29.checkBinding(this._expr_11, currVal_11, 'table.useBarrel', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._FluidCheckbox_31_5.value = currVal_11;
      this._expr_11 = currVal_11;
    }
    if (firstCheck) {
      (this._FluidCheckbox_32_5.label = 'make the chest invisible(just up to 1.14)');
    }
    final currVal_13 = _ctx.table.invisibleHitbox;
    if (import29.checkBinding(this._expr_13, currVal_13, 'table.invisibleHitbox', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._FluidCheckbox_32_5.value = currVal_13;
      this._expr_13 = currVal_13;
    }
    if (firstCheck) {
      (this._FluidButton_33_5.secondary = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_33_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidButton_36_5.secondary = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_36_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidButton_39_5.secondary = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_39_5.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidCheckbox_41_5.label = ' include a function to generate recipes in minecraft');
    }
    final currVal_18 = _ctx.table.giveCommandFunction;
    if (import29.checkBinding(this._expr_18, currVal_18, 'table.giveCommandFunction', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._FluidCheckbox_41_5.value = currVal_18;
      this._expr_18 = currVal_18;
    }
    if (firstCheck) {
      (this._FluidButton_43_5.highlight = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_43_5.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_44_5.ngOnInit();
    }
    this._NgIf_47_9.ngIf = (_ctx.errorText == null);
    this._NgIf_48_9.ngIf = (_ctx.errorText != null);
    if (firstCheck) {
      (this._FluidButton_49_5.highlight = true);
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_49_5.ngOnInit();
    }
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_52_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_54_6.name = 'crafting_item_selector';
      changed = true;
    }
    final currVal_21 = _ctx.selectedItem;
    if (import29.checkBinding(this._expr_21, currVal_21, 'selectedItem', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._ItemSelectorComponent_54_6.item = currVal_21;
      changed = true;
      this._expr_21 = currVal_21;
    }
    if (changed) {
      this._ItemSelectorComponent_54_6.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_55_6.name = 'crafting_placeholder';
      changed = true;
    }
    final currVal_23 = _ctx.table.placeholder;
    if (import29.checkBinding(this._expr_23, currVal_23, 'table.placeholder', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._ItemSelectorComponent_55_6.item = currVal_23;
      changed = true;
      this._expr_23 = currVal_23;
    }
    if (changed) {
      this._ItemSelectorComponent_55_6.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_56_6.name = 'crafting_gui';
      changed = true;
    }
    final currVal_25 = _ctx.table.guiModel;
    if (import29.checkBinding(this._expr_25, currVal_25, 'table.guiModel', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._ItemSelectorComponent_56_6.item = currVal_25;
      changed = true;
      this._expr_25 = currVal_25;
    }
    if (changed) {
      this._ItemSelectorComponent_56_6.ngAfterChanges();
    }
    changed = false;
    if (firstCheck) {
      this._ItemSelectorComponent_57_6.name = 'crafting_block';
      changed = true;
    }
    final currVal_27 = _ctx.table.blockModel;
    if (import29.checkBinding(this._expr_27, currVal_27, 'table.blockModel', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      this._ItemSelectorComponent_57_6.item = currVal_27;
      changed = true;
      this._expr_27 = currVal_27;
    }
    if (changed) {
      this._ItemSelectorComponent_57_6.ngAfterChanges();
    }
    this._appEl_3.detectChangesInNestedViews();
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_5.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_12.detectChangesInNestedViews();
    this._appEl_47.detectChangesInNestedViews();
    this._appEl_48.detectChangesInNestedViews();
    this._textBinding_18.updateText(import35.interpolate0((_ctx.currentIndex + 1)));
    this._textBinding_20.updateTextWithPrimitive(_ctx.recipes.length);
    this._compView_8.detectChanges();
    this._compView_13.detectChanges();
    this._compView_21.detectChanges();
    this._compView_22.detectChanges();
    this._compView_23.detectChanges();
    this._compView_24.detectChanges();
    this._compView_27.detectChanges();
    this._compView_30.detectChanges();
    this._compView_31.detectChanges();
    this._compView_32.detectChanges();
    this._compView_33.detectChanges();
    this._compView_36.detectChanges();
    this._compView_39.detectChanges();
    this._compView_41.detectChanges();
    this._compView_43.detectChanges();
    this._compView_44.detectChanges();
    this._compView_49.detectChanges();
    this._compView_52.detectChanges();
    this._compView_54.detectChanges();
    this._compView_55.detectChanges();
    this._compView_56.detectChanges();
    this._compView_57.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._appEl_4.destroyNestedViews();
    this._appEl_5.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_12.destroyNestedViews();
    this._appEl_47.destroyNestedViews();
    this._appEl_48.destroyNestedViews();
    this._compView_8.destroyInternalState();
    this._compView_13.destroyInternalState();
    this._compView_21.destroyInternalState();
    this._compView_22.destroyInternalState();
    this._compView_23.destroyInternalState();
    this._compView_24.destroyInternalState();
    this._compView_27.destroyInternalState();
    this._compView_30.destroyInternalState();
    this._compView_31.destroyInternalState();
    this._compView_32.destroyInternalState();
    this._compView_33.destroyInternalState();
    this._compView_36.destroyInternalState();
    this._compView_39.destroyInternalState();
    this._compView_41.destroyInternalState();
    this._compView_43.destroyInternalState();
    this._compView_44.destroyInternalState();
    this._compView_49.destroyInternalState();
    this._compView_52.destroyInternalState();
    this._compView_54.destroyInternalState();
    this._compView_55.destroyInternalState();
    this._compView_56.destroyInternalState();
    this._compView_57.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.controlPages(true);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.onSelect(10);
  }

  void _handleEvent_2($event) {
    this._DefaultValueAccessor_21_6.touchHandler();
    this._NumberValueAccessor_21_7.touchHandler();
  }

  void _handleEvent_3($event) {
    this._DefaultValueAccessor_21_6.handleChange($event.target.value);
    this._NumberValueAccessor_21_7.handleChange($event.target.value);
  }

  void _handleEvent_4($event) {
    this._NumberValueAccessor_21_7.handleChange($event.target.value);
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.current.id = $event;
  }

  void _handleEvent_6($event) {
    final _ctx = this.ctx;
    _ctx.current.isShapeless = $event;
  }

  void _handleEvent_7($event) {
    final _ctx = this.ctx;
    _ctx.current.exactlyPlaced = $event;
  }

  void _handleEvent_8($event) {
    this._DefaultValueAccessor_24_6.touchHandler();
    this._NumberValueAccessor_24_7.touchHandler();
  }

  void _handleEvent_9($event) {
    this._DefaultValueAccessor_24_6.handleChange($event.target.value);
    this._NumberValueAccessor_24_7.handleChange($event.target.value);
  }

  void _handleEvent_10($event) {
    this._NumberValueAccessor_24_7.handleChange($event.target.value);
  }

  void _handleEvent_11($event) {
    final _ctx = this.ctx;
    _ctx.current.exactResult = $event;
  }

  void _handleEvent_12($event) {
    this._DefaultValueAccessor_27_6.handleChange($event.target.value);
  }

  void _handleEvent_13($event) {
    final _ctx = this.ctx;
    _ctx.table.name = $event;
  }

  void _handleEvent_14($event) {
    this._DefaultValueAccessor_30_6.touchHandler();
    this._NumberValueAccessor_30_7.touchHandler();
  }

  void _handleEvent_15($event) {
    this._DefaultValueAccessor_30_6.handleChange($event.target.value);
    this._NumberValueAccessor_30_7.handleChange($event.target.value);
  }

  void _handleEvent_16($event) {
    this._NumberValueAccessor_30_7.handleChange($event.target.value);
  }

  void _handleEvent_17($event) {
    final _ctx = this.ctx;
    _ctx.table.id = $event;
  }

  void _handleEvent_18($event) {
    final _ctx = this.ctx;
    _ctx.table.useBarrel = (!_ctx.table.useBarrel);
  }

  void _handleEvent_19($event) {
    final _ctx = this.ctx;
    _ctx.table.invisibleHitbox = $event;
  }

  void _handleEvent_20($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('crafting_placeholder');
  }

  void _handleEvent_21($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('crafting_gui');
  }

  void _handleEvent_22($event) {
    final _ctx = this.ctx;
    _ctx.modalService.open('crafting_block');
  }

  void _handleEvent_23($event) {
    final _ctx = this.ctx;
    _ctx.table.giveCommandFunction = $event;
  }

  void _handleEvent_24($event) {
    final _ctx = this.ctx;
    _ctx.selectedItem = $event;
  }

  void _handleEvent_25($event) {
    final _ctx = this.ctx;
    _ctx.table.placeholder = $event;
  }

  void _handleEvent_26($event) {
    final _ctx = this.ctx;
    _ctx.table.guiModel = $event;
  }

  void _handleEvent_27($event) {
    final _ctx = this.ctx;
    _ctx.table.blockModel = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import25.ComponentStyles.scoped(styles$CraftingToolPage, _debugComponentUrl));
      if (import29.isDevMode) {
        import25.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _CraftingToolPageNgFactory = ComponentFactory<import3.CraftingToolPage>('crafting_tool', viewFactory_CraftingToolPageHost0);
ComponentFactory<import3.CraftingToolPage> get CraftingToolPageNgFactory {
  return _CraftingToolPageNgFactory;
}

ComponentFactory<import3.CraftingToolPage> createCraftingToolPageFactory() {
  return ComponentFactory('crafting_tool', viewFactory_CraftingToolPageHost0);
}

class _ViewCraftingToolPage1 extends import37.EmbeddedView<import3.CraftingToolPage> {
  import8.ViewFluidIcon0 _compView_0;
  import9.FluidIcon _FluidIcon_0_5;
  _ViewCraftingToolPage1(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import8.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import30.setAttribute(_el_0, 'icon', 'plus');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import9.FluidIcon(_el_0);
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

import37.EmbeddedView<void> viewFactory_CraftingToolPage1(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage1(parentView, parentIndex);
}

class _ViewCraftingToolPage2 extends import37.EmbeddedView<import3.CraftingToolPage> {
  import8.ViewFluidIcon0 _compView_0;
  import9.FluidIcon _FluidIcon_0_5;
  _ViewCraftingToolPage2(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import8.ViewFluidIcon0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import30.setAttribute(_el_0, 'icon', 'arrowRight');
    this.addShimC(_el_0);
    this._FluidIcon_0_5 = import9.FluidIcon(_el_0);
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

import37.EmbeddedView<void> viewFactory_CraftingToolPage2(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage2(parentView, parentIndex);
}

class _ViewCraftingToolPage3 extends import37.EmbeddedView<import3.CraftingToolPage> {
  import8.ViewFluidIcon0 _compView_1;
  import9.FluidIcon _FluidIcon_1_5;
  _ViewCraftingToolPage3(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import28.document;
    final _el_0 = doc.createElement('div');
    import30.setAttribute(_el_0, 'id', 'leftControl');
    this.addShimC(_el_0);
    this._compView_1 = import8.ViewFluidIcon0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'icon');
    import30.setAttribute(_el_1, 'icon', 'arrowLeft');
    this.addShimC(_el_1);
    this._FluidIcon_1_5 = import9.FluidIcon(_el_1);
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

import37.EmbeddedView<void> viewFactory_CraftingToolPage3(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage3(parentView, parentIndex);
}

class _ViewCraftingToolPage4 extends import37.EmbeddedView<import3.CraftingToolPage> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewCraftingToolPage4(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import28.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'slot');
    this.addShimC(_el_0);
    final _el_1 = import30.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'content');
    this.addShimC(_el_1);
    final _anchor_2 = import30.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_CraftingToolPage5);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    _el_1.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_slot = import29.unsafeCast<int>(this.locals['\$implicit']);
    this._NgIf_2_9.ngIf = (_ctx.current.ingredients[local_slot] != null);
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
  }

  void _handleEvent_0($event) {
    final local_slot = import29.unsafeCast<int>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.onSelect(local_slot);
  }
}

import37.EmbeddedView<void> viewFactory_CraftingToolPage4(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage4(parentView, parentIndex);
}

class _ViewCraftingToolPage5 extends import37.EmbeddedView<import3.CraftingToolPage> {
  var _expr_0;
  var _expr_1;
  import28.Element _el_0;
  _ViewCraftingToolPage5(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import28.document;
    this._el_0 = doc.createElement('img');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_slot = import29.unsafeCast<int>(import29.unsafeCast<_ViewCraftingToolPage4>(this.parentView).locals['\$implicit']);
    final currVal_0 = _ctx.getItemImage(_ctx.current.ingredients[local_slot]);
    if (import29.checkBinding(this._expr_0, currVal_0, 'getItemImage(current.ingredients[slot])', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      import30.setProperty(this._el_0, 'src', import40.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.current.ingredients[local_slot].getId();
    if (import29.checkBinding(this._expr_1, currVal_1, 'current.ingredients[slot].getId()', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      import30.setProperty(this._el_0, 'alt', currVal_1);
      this._expr_1 = currVal_1;
    }
  }
}

import37.EmbeddedView<void> viewFactory_CraftingToolPage5(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage5(parentView, parentIndex);
}

class _ViewCraftingToolPage6 extends import37.EmbeddedView<import3.CraftingToolPage> {
  var _expr_0;
  var _expr_1;
  import28.Element _el_0;
  _ViewCraftingToolPage6(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import28.document;
    this._el_0 = doc.createElement('img');
    this.addShimE(this._el_0);
    this.initRootNode(this._el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.getItemImage(_ctx.current.result);
    if (import29.checkBinding(this._expr_0, currVal_0, 'getItemImage(current.result)', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      import30.setProperty(this._el_0, 'src', import40.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.current.result.getId();
    if (import29.checkBinding(this._expr_1, currVal_1, 'current.result.getId()', 'package:stevertus/src/pages/tools/crafting/crafting.html')) {
      import30.setProperty(this._el_0, 'alt', currVal_1);
      this._expr_1 = currVal_1;
    }
  }
}

import37.EmbeddedView<void> viewFactory_CraftingToolPage6(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage6(parentView, parentIndex);
}

class _ViewCraftingToolPage7 extends import37.EmbeddedView<import3.CraftingToolPage> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import41.ViewFluidMultiInput0 _compView_0;
  import42.FluidMultiInput _FluidMultiInput_0_5;
  _ViewCraftingToolPage7(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import41.ViewFluidMultiInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClass(_el_0, 'result_text');
    import30.setAttribute(_el_0, 'cols', '30');
    import30.setAttribute(_el_0, 'disabled', '');
    import30.setAttribute(_el_0, 'fluidMultiInput', '');
    import30.setAttribute(_el_0, 'placeholder', 'Result');
    import30.setAttribute(_el_0, 'rows', '10');
    this.addShimC(_el_0);
    this._FluidMultiInput_0_5 = import42.FluidMultiInput(_el_0);
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
    this._textBinding_1.updateText(import35.interpolateString0(_ctx.result));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import37.EmbeddedView<void> viewFactory_CraftingToolPage7(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage7(parentView, parentIndex);
}

class _ViewCraftingToolPage8 extends import37.EmbeddedView<import3.CraftingToolPage> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import41.ViewFluidMultiInput0 _compView_0;
  import42.FluidMultiInput _FluidMultiInput_0_5;
  _ViewCraftingToolPage8(import38.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import41.ViewFluidMultiInput0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.updateChildClass(_el_0, 'error');
    import30.setAttribute(_el_0, 'cols', '30');
    import30.setAttribute(_el_0, 'disabled', '');
    import30.setAttribute(_el_0, 'fluidMultiInput', '');
    import30.setAttribute(_el_0, 'placeholder', 'ERROR');
    import30.setAttribute(_el_0, 'rows', '10');
    this.addShimC(_el_0);
    this._FluidMultiInput_0_5 = import42.FluidMultiInput(_el_0);
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
    this._textBinding_1.updateText(import35.interpolateString0(_ctx.errorText));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import37.EmbeddedView<void> viewFactory_CraftingToolPage8(import38.RenderView parentView, int parentIndex) {
  return _ViewCraftingToolPage8(parentView, parentIndex);
}

final List<dynamic> styles$CraftingToolPageHost = const [];

class _ViewCraftingToolPageHost0 extends import43.HostView<import3.CraftingToolPage> {
  import23.ModalService _ModalService_0_5;
  @override
  void build() {
    this.componentView = ViewCraftingToolPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this._ModalService_0_5 = import23.ModalService();
    this.component = import3.CraftingToolPage(this._ModalService_0_5);
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import23.ModalService) && (0 == nodeIndex))) {
      return this._ModalService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (((!import29.debugThrowIfChanged) && firstCheck)) {
      this.component.ngOnInit();
    }
    this.componentView.detectChanges();
  }
}

import43.HostView<import3.CraftingToolPage> viewFactory_CraftingToolPageHost0() {
  return _ViewCraftingToolPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
