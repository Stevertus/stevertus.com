// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'contact.dart';
export 'contact.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/contact/contact.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'contact.dart' as import2;
import 'package:fluix_web/fluix/card/card.template.dart' as import3;
import 'package:fluix_web/fluix/card/card.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:fluix_web/fluix/input/input.template.dart' as import7;
import 'package:fluix_web/fluix/input/input.dart' as import8;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import9;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import10;
import 'package:angular_forms/src/directives/ng_model.dart' as import11;
import 'package:fluix_web/fluix/multi_input/input.template.dart' as import12;
import 'package:fluix_web/fluix/multi_input/input.dart' as import13;
import 'package:fluix_web/fluix/button/button.template.dart' as import14;
import 'package:fluix_web/fluix/button/button.dart' as import15;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import16;
import 'package:angular/src/core/linker/views/view.dart' as import17;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import19;
import 'package:angular/src/runtime.dart' as import20;
import 'package:angular/src/runtime/dom_helpers.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import23;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import24;
import 'package:angular_forms/src/directives/ng_control.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import27;
import 'package:angular/src/runtime/text_binding.dart' as import28;
import 'package:angular/src/core/linker/views/render_view.dart' as import29;
import 'package:angular/src/runtime/interpolate.dart' as import30;
import 'package:angular/src/core/linker/views/host_view.dart' as import31;

final List<dynamic> styles$ContactPage = [import0.styles];

class ViewContactPage0 extends import1.ComponentView<import2.ContactPage> {
  import3.ViewFluidCard0 _compView_1;
  import4.FluidCard _FluidCard_1_5;
  ViewContainer _appEl_20;
  NgIf _NgIf_20_9;
  ViewContainer _appEl_21;
  NgIf _NgIf_21_9;
  import7.ViewFluidInput0 _compView_22;
  import8.FluidInput _FluidInput_22_5;
  import9.DefaultValueAccessor _DefaultValueAccessor_22_6;
  List<import10.ControlValueAccessor<dynamic>> _NgValueAccessor_22_7;
  import11.NgModel _NgModel_22_8;
  import7.ViewFluidInput0 _compView_26;
  import8.FluidInput _FluidInput_26_5;
  import9.DefaultValueAccessor _DefaultValueAccessor_26_6;
  List<import10.ControlValueAccessor<dynamic>> _NgValueAccessor_26_7;
  import11.NgModel _NgModel_26_8;
  import12.ViewFluidMultiInput0 _compView_30;
  import13.FluidMultiInput _FluidMultiInput_30_5;
  import9.DefaultValueAccessor _DefaultValueAccessor_30_6;
  List<import10.ControlValueAccessor<dynamic>> _NgValueAccessor_30_7;
  import11.NgModel _NgModel_30_8;
  import14.ViewFluidButton0 _compView_32;
  import15.FluidButton _FluidButton_32_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import16.ComponentStyles _componentStyles;
  ViewContactPage0(import17.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import19.document.createElement('contact');
  }
  static String get _debugComponentUrl {
    return (import20.isDevMode ? 'asset:stevertus/lib/src/pages/contact/contact.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import19.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import19.document;
    final _el_0 = import21.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    this._compView_1 = import3.ViewFluidCard0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    this.addShimC(_el_1);
    this._FluidCard_1_5 = import4.FluidCard(_el_1);
    final _el_2 = doc.createElement('img');
    import21.setAttribute(_el_2, 'alt', '');
    import21.setAttribute(_el_2, 'src', '/assets/yt_banner.png');
    this.addShimE(_el_2);
    final _el_3 = doc.createElement('h2');
    this.addShimE(_el_3);
    final _text_4 = import21.appendText(_el_3, 'Hello!');
    final _el_5 = doc.createElement('p');
    this.addShimE(_el_5);
    final _text_6 = import21.appendText(_el_5, 'I am Stevertus and I make stuff with Minecraft! You have a problem, question or want to help with my obsession?');
    final _el_7 = doc.createElement('b');
    this.addShimE(_el_7);
    final _text_8 = import21.appendText(_el_7, 'Great!');
    final _text_9 = import21.createText(' ');
    final _el_10 = doc.createElement('br');
    this.addShimE(_el_10);
    final _el_11 = doc.createElement('p');
    this.addShimE(_el_11);
    final _text_12 = import21.appendText(_el_11, 'Just write me an ');
    final _el_13 = import21.appendElement(doc, _el_11, 'a');
    import21.setAttribute(_el_13, 'href', 'mailto://contact@stevertus.com');
    this.addShimC(_el_13);
    final _text_14 = import21.appendText(_el_13, 'Email');
    final _text_15 = import21.appendText(_el_11, ', visit my ');
    final _el_16 = import21.appendElement(doc, _el_11, 'a');
    import21.setAttribute(_el_16, 'href', 'https://discord.gg/McYXVC8');
    this.addShimC(_el_16);
    final _text_17 = import21.appendText(_el_16, 'Discord');
    final _text_18 = import21.appendText(_el_11, ' or write me a kind message below, I\'ll try to answer asap.');
    final _el_19 = doc.createElement('div');
    this.updateChildClass(_el_19, 'inputs');
    this.addShimC(_el_19);
    final _anchor_20 = import21.appendAnchor(_el_19);
    this._appEl_20 = ViewContainer(20, 19, this, _anchor_20);
    TemplateRef _TemplateRef_20_8 = TemplateRef(this._appEl_20, viewFactory_ContactPage1);
    this._NgIf_20_9 = NgIf(this._appEl_20, _TemplateRef_20_8);
    final _anchor_21 = import21.appendAnchor(_el_19);
    this._appEl_21 = ViewContainer(21, 19, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(this._appEl_21, viewFactory_ContactPage2);
    this._NgIf_21_9 = NgIf(this._appEl_21, _TemplateRef_21_8);
    this._compView_22 = import7.ViewFluidInput0(this, 22);
    final _el_22 = this._compView_22.rootElement;
    _el_19.append(_el_22);
    import21.setAttribute(_el_22, 'fluidInput', '');
    import21.setAttribute(_el_22, 'placeholder', 'Your name');
    import21.setAttribute(_el_22, 'type', 'text');
    this.addShimC(_el_22);
    this._FluidInput_22_5 = import8.FluidInput(_el_22);
    this._DefaultValueAccessor_22_6 = import9.DefaultValueAccessor(_el_22);
    this._NgValueAccessor_22_7 = [this._DefaultValueAccessor_22_6];
    this._NgModel_22_8 = import11.NgModel(null, this._NgValueAccessor_22_7);
    this._compView_22.createAndProject(this._FluidInput_22_5, [const []]);
    final _text_23 = import21.appendText(_el_19, ' ');
    final _el_24 = import21.appendElement(doc, _el_19, 'br');
    this.addShimE(_el_24);
    final _text_25 = import21.appendText(_el_19, ' ');
    this._compView_26 = import7.ViewFluidInput0(this, 26);
    final _el_26 = this._compView_26.rootElement;
    _el_19.append(_el_26);
    import21.setAttribute(_el_26, 'fluidInput', '');
    import21.setAttribute(_el_26, 'placeholder', 'email to contact you');
    import21.setAttribute(_el_26, 'type', 'email');
    this.addShimC(_el_26);
    this._FluidInput_26_5 = import8.FluidInput(_el_26);
    this._DefaultValueAccessor_26_6 = import9.DefaultValueAccessor(_el_26);
    this._NgValueAccessor_26_7 = [this._DefaultValueAccessor_26_6];
    this._NgModel_26_8 = import11.NgModel(null, this._NgValueAccessor_26_7);
    this._compView_26.createAndProject(this._FluidInput_26_5, [const []]);
    final _text_27 = import21.appendText(_el_19, ' ');
    final _el_28 = import21.appendElement(doc, _el_19, 'br');
    this.addShimE(_el_28);
    final _text_29 = import21.appendText(_el_19, ' ');
    this._compView_30 = import12.ViewFluidMultiInput0(this, 30);
    final _el_30 = this._compView_30.rootElement;
    _el_19.append(_el_30);
    import21.setAttribute(_el_30, 'fluidMultiInput', '');
    import21.setAttribute(_el_30, 'placeholder', 'Your message...');
    import21.setAttribute(_el_30, 'rows', '15');
    this.addShimC(_el_30);
    this._FluidMultiInput_30_5 = import13.FluidMultiInput(_el_30);
    this._DefaultValueAccessor_30_6 = import9.DefaultValueAccessor(_el_30);
    this._NgValueAccessor_30_7 = [this._DefaultValueAccessor_30_6];
    this._NgModel_30_8 = import11.NgModel(null, this._NgValueAccessor_30_7);
    this._compView_30.createAndProject(this._FluidMultiInput_30_5, [const []]);
    final _text_31 = import21.appendText(_el_19, ' ');
    this._compView_32 = import14.ViewFluidButton0(this, 32);
    final _el_32 = this._compView_32.rootElement;
    _el_19.append(_el_32);
    import21.setAttribute(_el_32, 'fluidBtn', '');
    import21.setAttribute(_el_32, 'full', '');
    this.addShimC(_el_32);
    this._FluidButton_32_5 = import15.FluidButton(_el_32);
    final _text_33 = import21.createText('Send');
    this._compView_32.createAndProject(this._FluidButton_32_5, [
      [_text_33]
    ]);
    this._compView_1.createAndProject(this._FluidCard_1_5, [
      [_el_2, _el_3, _el_5, _el_7, _text_9, _el_10, _el_11, _el_19]
    ]);
    _el_22.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_22_6.touchHandler));
    _el_22.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_22_8.update.listen(this.eventHandler1(this._handleEvent_1));
    _el_26.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_26_6.touchHandler));
    _el_26.addEventListener('input', this.eventHandler1(this._handleEvent_2));
    final subscription_1 = this._NgModel_26_8.update.listen(this.eventHandler1(this._handleEvent_3));
    _el_30.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_30_6.touchHandler));
    _el_30.addEventListener('input', this.eventHandler1(this._handleEvent_4));
    final subscription_2 = this._NgModel_30_8.update.listen(this.eventHandler1(this._handleEvent_5));
    _el_32.addEventListener('click', this.eventHandler0(_ctx.submit));
    this.initSubscriptions([subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((22 == nodeIndex)) {
      if (identical(token, const import23.MultiToken<import24.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_22_7;
      }
      if ((identical(token, import11.NgModel) || identical(token, import25.NgControl))) {
        return this._NgModel_22_8;
      }
    }
    if ((26 == nodeIndex)) {
      if (identical(token, const import23.MultiToken<import24.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_26_7;
      }
      if ((identical(token, import11.NgModel) || identical(token, import25.NgControl))) {
        return this._NgModel_26_8;
      }
    }
    if ((30 == nodeIndex)) {
      if (identical(token, const import23.MultiToken<import24.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_30_7;
      }
      if ((identical(token, import11.NgModel) || identical(token, import25.NgControl))) {
        return this._NgModel_30_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._FluidCard_1_5.ngOnInit();
    }
    this._NgIf_20_9.ngIf = _ctx.error.isNotEmpty;
    this._NgIf_21_9.ngIf = _ctx.success;
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_22_5.ngOnInit();
    }
    changed = false;
    final currVal_0 = _ctx.name;
    if (import20.checkBinding(this._expr_0, currVal_0, 'name', 'package:stevertus/src/pages/contact/contact.html')) {
      this._NgModel_22_8.model = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) {
      this._NgModel_22_8.ngAfterChanges();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_22_8.ngOnInit();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_26_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.email;
    if (import20.checkBinding(this._expr_1, currVal_1, 'email', 'package:stevertus/src/pages/contact/contact.html')) {
      this._NgModel_26_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_26_8.ngAfterChanges();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_26_8.ngOnInit();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._FluidMultiInput_30_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = _ctx.message;
    if (import20.checkBinding(this._expr_2, currVal_2, 'message', 'package:stevertus/src/pages/contact/contact.html')) {
      this._NgModel_30_8.model = currVal_2;
      changed = true;
      this._expr_2 = currVal_2;
    }
    if (changed) {
      this._NgModel_30_8.ngAfterChanges();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_30_8.ngOnInit();
    }
    if (((!import20.debugThrowIfChanged) && firstCheck)) {
      this._FluidButton_32_5.ngOnInit();
    }
    this._appEl_20.detectChangesInNestedViews();
    this._appEl_21.detectChangesInNestedViews();
    this._compView_1.detectChanges();
    this._compView_22.detectChanges();
    this._compView_26.detectChanges();
    this._compView_30.detectChanges();
    this._compView_32.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_20.destroyNestedViews();
    this._appEl_21.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._compView_22.destroyInternalState();
    this._compView_26.destroyInternalState();
    this._compView_30.destroyInternalState();
    this._compView_32.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_22_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.name = $event;
  }

  void _handleEvent_2($event) {
    this._DefaultValueAccessor_26_6.handleChange($event.target.value);
  }

  void _handleEvent_3($event) {
    final _ctx = this.ctx;
    _ctx.email = $event;
  }

  void _handleEvent_4($event) {
    this._DefaultValueAccessor_30_6.handleChange($event.target.value);
  }

  void _handleEvent_5($event) {
    final _ctx = this.ctx;
    _ctx.message = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import16.ComponentStyles.scoped(styles$ContactPage, _debugComponentUrl));
      if (import20.isDevMode) {
        import16.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ContactPageNgFactory = ComponentFactory<import2.ContactPage>('contact', viewFactory_ContactPageHost0);
ComponentFactory<import2.ContactPage> get ContactPageNgFactory {
  return _ContactPageNgFactory;
}

ComponentFactory<import2.ContactPage> createContactPageFactory() {
  return ComponentFactory('contact', viewFactory_ContactPageHost0);
}

class _ViewContactPage1 extends import27.EmbeddedView<import2.ContactPage> {
  final import28.TextBinding _textBinding_1 = import28.TextBinding();
  _ViewContactPage1(import29.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import19.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'error');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import30.interpolateString0(_ctx.error));
  }
}

import27.EmbeddedView<void> viewFactory_ContactPage1(import29.RenderView parentView, int parentIndex) {
  return _ViewContactPage1(parentView, parentIndex);
}

class _ViewContactPage2 extends import27.EmbeddedView<import2.ContactPage> {
  _ViewContactPage2(import29.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import19.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'success');
    this.addShimE(_el_0);
    final _text_1 = import21.appendText(_el_0, 'Thank you for your message! I\'ll try to respond as soon as possible.');
    this.initRootNode(_el_0);
  }
}

import27.EmbeddedView<void> viewFactory_ContactPage2(import29.RenderView parentView, int parentIndex) {
  return _ViewContactPage2(parentView, parentIndex);
}

final List<dynamic> styles$ContactPageHost = const [];

class _ViewContactPageHost0 extends import31.HostView<import2.ContactPage> {
  @override
  void build() {
    this.componentView = ViewContactPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.ContactPage();
    this.initRootNode(_el_0);
  }
}

import31.HostView<import2.ContactPage> viewFactory_ContactPageHost0() {
  return _ViewContactPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
