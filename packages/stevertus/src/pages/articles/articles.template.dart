// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'articles.dart';
export 'articles.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/articles/articles.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'articles.dart' as import2;
import 'package:fluix_web/fluix/input/input.template.dart' as import3;
import 'package:fluix_web/fluix/input/input.dart' as import4;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import5;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import6;
import 'package:angular_forms/src/directives/ng_model.dart' as import7;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import8;
import 'package:fluix_web/fluix/icon/icon.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import11;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:ng_translate/src/translation_pipe.dart' as import13;
import 'dart:html' as import14;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import15;
import 'package:angular/src/core/linker/views/view.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/src/runtime/dom_helpers.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import21;
import 'package:ng_translate/src/translation_service.dart' as import22;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as import23;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import24;
import 'package:angular_forms/src/directives/ng_control.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/embedded_view.dart' as import27;
import 'package:angular/src/runtime/text_binding.dart' as import28;
import 'package:fluix_web/fluix/tag/tag.template.dart' as import29;
import 'package:fluix_web/fluix/tag/tag.dart' as import30;
import 'package:angular/src/core/linker/views/render_view.dart' as import31;
import 'dart:core';
import 'package:angular/src/runtime/interpolate.dart' as import33;
import 'package:fluix_web/fluix/spinner/spinner.template.dart' as import34;
import 'package:fluix_web/fluix/spinner/spinner.dart' as import35;
import '../../components/doc_grid/grid.template.dart' as import36;
import '../../components/doc_grid/grid.dart' as import37;
import 'package:angular_router/src/router/router.dart' as import38;
import 'package:angular/src/core/linker/views/host_view.dart' as import39;

final List<dynamic> styles$ArticlesPage = [import0.styles];

class ViewArticlesPage0 extends import1.ComponentView<import2.ArticlesPage> {
  import3.ViewFluidInput0 _compView_1;
  import4.FluidInput _FluidInput_1_5;
  import5.DefaultValueAccessor _DefaultValueAccessor_1_6;
  List<import6.ControlValueAccessor<dynamic>> _NgValueAccessor_1_7;
  import7.NgModel _NgModel_1_8;
  import8.ViewFluidIcon0 _compView_2;
  import9.FluidIcon _FluidIcon_2_5;
  ViewContainer _appEl_4;
  import11.NgFor _NgFor_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  var _expr_0;
  var _expr_1;
  import13.TranslationPipe _pipe_ngtranslate_0;
  import14.InputElement _el_1;
  static import15.ComponentStyles _componentStyles;
  ViewArticlesPage0(import16.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import14.document.createElement('articles');
  }
  static String get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:stevertus/lib/src/pages/articles/articles.dart' : null);
  }

  @override
  void build() {
    final _ctx = this.ctx;
    final import14.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import14.document;
    final _el_0 = import19.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'search');
    this.addShimC(_el_0);
    this._compView_1 = import3.ViewFluidInput0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    _el_0.append(this._el_1);
    import19.setAttribute(this._el_1, 'fluidInput', '');
    import19.setAttribute(this._el_1, 'type', 'text');
    this.addShimC(this._el_1);
    this._FluidInput_1_5 = import4.FluidInput(this._el_1);
    this._DefaultValueAccessor_1_6 = import5.DefaultValueAccessor(this._el_1);
    this._NgValueAccessor_1_7 = [this._DefaultValueAccessor_1_6];
    this._NgModel_1_8 = import7.NgModel(null, this._NgValueAccessor_1_7);
    this._compView_1.createAndProject(this._FluidInput_1_5, [const []]);
    this._compView_2 = import8.ViewFluidIcon0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    _el_0.append(_el_2);
    import19.setAttribute(_el_2, 'icon', 'search');
    this.addShimC(_el_2);
    this._FluidIcon_2_5 = import9.FluidIcon(_el_2);
    this._compView_2.createAndProject(this._FluidIcon_2_5, [const []]);
    final _el_3 = import19.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'tags');
    this.addShimC(_el_3);
    final _anchor_4 = import19.appendAnchor(_el_3);
    this._appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(this._appEl_4, viewFactory_ArticlesPage1);
    this._NgFor_4_9 = import11.NgFor(this._appEl_4, _TemplateRef_4_8);
    final _el_5 = import19.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_5, 'container');
    this.addShimC(_el_5);
    final _anchor_6 = import19.appendAnchor(_el_5);
    this._appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(this._appEl_6, viewFactory_ArticlesPage2);
    this._NgIf_6_9 = NgIf(this._appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import19.appendAnchor(_el_5);
    this._appEl_7 = ViewContainer(7, 5, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(this._appEl_7, viewFactory_ArticlesPage3);
    this._NgIf_7_9 = NgIf(this._appEl_7, _TemplateRef_7_8);
    final _anchor_8 = import19.appendAnchor(_el_5);
    this._appEl_8 = ViewContainer(8, 5, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(this._appEl_8, viewFactory_ArticlesPage4);
    this._NgIf_8_9 = NgIf(this._appEl_8, _TemplateRef_8_8);
    this._el_1.addEventListener('keyup', this.eventHandler0(_ctx.onSearch));
    this._el_1.addEventListener('blur', this.eventHandler0(this._DefaultValueAccessor_1_6.touchHandler));
    this._el_1.addEventListener('input', this.eventHandler1(this._handleEvent_0));
    final subscription_0 = this._NgModel_1_8.update.listen(this.eventHandler1(this._handleEvent_1));
    _el_2.addEventListener('click', this.eventHandler0(_ctx.onSearch));
    import21.debugInjectorEnter(import13.TranslationPipe);
    this._pipe_ngtranslate_0 = import13.TranslationPipe(this.parentView.injectorGet(import22.TranslationService, this.parentIndex));
    import21.debugInjectorLeave(import13.TranslationPipe);
    this.initSubscriptions([subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((1 == nodeIndex)) {
      if (identical(token, const import23.MultiToken<import24.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return this._NgValueAccessor_1_7;
      }
      if ((identical(token, import7.NgModel) || identical(token, import25.NgControl))) {
        return this._NgModel_1_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool changed = false;
    bool firstCheck = this.firstCheck;
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._FluidInput_1_5.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.searchInput;
    if (import18.checkBinding(this._expr_1, currVal_1, 'searchInput', 'package:stevertus/src/pages/articles/articles.html')) {
      this._NgModel_1_8.model = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) {
      this._NgModel_1_8.ngAfterChanges();
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._NgModel_1_8.ngOnInit();
    }
    if (firstCheck) {
      (this._FluidIcon_2_5.icon = 'search');
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_2_5.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(_ctx.allTags, null)) {
        (this._NgFor_4_9.ngForOf = _ctx.allTags);
      }
    }
    if ((!import18.debugThrowIfChanged)) {
      this._NgFor_4_9.ngDoCheck();
    }
    this._NgIf_6_9.ngIf = _ctx.loading;
    this._NgIf_7_9.ngIf = ((!_ctx.loading) && _ctx.articles.isNotEmpty);
    this._NgIf_8_9.ngIf = ((!_ctx.loading) && _ctx.articles.isEmpty);
    this._appEl_4.detectChangesInNestedViews();
    this._appEl_6.detectChangesInNestedViews();
    this._appEl_7.detectChangesInNestedViews();
    this._appEl_8.detectChangesInNestedViews();
    final currVal_0 = this._pipe_ngtranslate_0.transform('search');
    if (import18.checkBinding(this._expr_0, currVal_0, '\'search\' | ngtranslate', 'package:stevertus/src/pages/articles/articles.html')) {
      import19.setProperty(this._el_1, 'placeholder', currVal_0);
      this._expr_0 = currVal_0;
    }
    this._compView_1.detectChanges();
    this._compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_4.destroyNestedViews();
    this._appEl_6.destroyNestedViews();
    this._appEl_7.destroyNestedViews();
    this._appEl_8.destroyNestedViews();
    this._compView_1.destroyInternalState();
    this._compView_2.destroyInternalState();
  }

  void _handleEvent_0($event) {
    this._DefaultValueAccessor_1_6.handleChange($event.target.value);
  }

  void _handleEvent_1($event) {
    final _ctx = this.ctx;
    _ctx.searchInput = $event;
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import15.ComponentStyles.scoped(styles$ArticlesPage, _debugComponentUrl));
      if (import18.isDevMode) {
        import15.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ArticlesPageNgFactory = ComponentFactory<import2.ArticlesPage>('articles', viewFactory_ArticlesPageHost0);
ComponentFactory<import2.ArticlesPage> get ArticlesPageNgFactory {
  return _ArticlesPageNgFactory;
}

ComponentFactory<import2.ArticlesPage> createArticlesPageFactory() {
  return ComponentFactory('articles', viewFactory_ArticlesPageHost0);
}

class _ViewArticlesPage1 extends import27.EmbeddedView<import2.ArticlesPage> {
  final import28.TextBinding _textBinding_1 = import28.TextBinding();
  import29.ViewFluidTag0 _compView_0;
  import30.FluidTag _FluidTag_0_5;
  var _expr_0;
  _ViewArticlesPage1(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import29.ViewFluidTag0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidTag_0_5 = import30.FluidTag();
    this._compView_0.createAndProject(this._FluidTag_0_5, [
      [this._textBinding_1.element]
    ]);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final local_tag = import18.unsafeCast<String>(this.locals['\$implicit']);
    final currVal_0 = (_ctx.tags[local_tag] != null);
    if (import18.checkBinding(this._expr_0, currVal_0, 'tags[tag] != null', 'package:stevertus/src/pages/articles/articles.html')) {
      this._FluidTag_0_5.value = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._textBinding_1.updateText(import33.interpolateString0(local_tag));
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final local_tag = import18.unsafeCast<String>(this.locals['\$implicit']);
    final _ctx = this.ctx;
    _ctx.toggleTag(local_tag);
  }
}

import27.EmbeddedView<void> viewFactory_ArticlesPage1(import31.RenderView parentView, int parentIndex) {
  return _ViewArticlesPage1(parentView, parentIndex);
}

class _ViewArticlesPage2 extends import27.EmbeddedView<import2.ArticlesPage> {
  import34.ViewFluidSpinner0 _compView_0;
  import35.FluidSpinner _FluidSpinner_0_5;
  _ViewArticlesPage2(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import34.ViewFluidSpinner0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidSpinner_0_5 = import35.FluidSpinner();
    this._compView_0.create(this._FluidSpinner_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import27.EmbeddedView<void> viewFactory_ArticlesPage2(import31.RenderView parentView, int parentIndex) {
  return _ViewArticlesPage2(parentView, parentIndex);
}

class _ViewArticlesPage3 extends import27.EmbeddedView<import2.ArticlesPage> {
  import36.ViewDocumentGridComponent0 _compView_0;
  import37.DocumentGridComponent _DocumentGridComponent_0_5;
  var _expr_0;
  _ViewArticlesPage3(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import36.ViewDocumentGridComponent0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._DocumentGridComponent_0_5 = (import18.isDevMode
        ? import21.debugInjectorWrap(import37.DocumentGridComponent, () {
            return import37.DocumentGridComponent(this.parentView.parentView.injectorGet(import38.Router, this.parentView.parentIndex));
          })
        : import37.DocumentGridComponent(this.parentView.parentView.injectorGet(import38.Router, this.parentView.parentIndex)));
    this._compView_0.create(this._DocumentGridComponent_0_5);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    final currVal_0 = _ctx.articles;
    if (import18.checkBinding(this._expr_0, currVal_0, 'articles', 'package:stevertus/src/pages/articles/articles.html')) {
      this._DocumentGridComponent_0_5.documents = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
  }
}

import27.EmbeddedView<void> viewFactory_ArticlesPage3(import31.RenderView parentView, int parentIndex) {
  return _ViewArticlesPage3(parentView, parentIndex);
}

class _ViewArticlesPage4 extends import27.EmbeddedView<import2.ArticlesPage> {
  _ViewArticlesPage4(import31.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import14.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'error');
    this.addShimE(_el_0);
    final _text_1 = import19.appendText(_el_0, 'No articles have been found!');
    this.initRootNode(_el_0);
  }
}

import27.EmbeddedView<void> viewFactory_ArticlesPage4(import31.RenderView parentView, int parentIndex) {
  return _ViewArticlesPage4(parentView, parentIndex);
}

final List<dynamic> styles$ArticlesPageHost = const [];

class _ViewArticlesPageHost0 extends import39.HostView<import2.ArticlesPage> {
  @override
  void build() {
    this.componentView = ViewArticlesPage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import18.isDevMode
        ? import21.debugInjectorWrap(import2.ArticlesPage, () {
            return import2.ArticlesPage(this.injectorGet(import22.TranslationService, this.parentIndex));
          })
        : import2.ArticlesPage(this.injectorGet(import22.TranslationService, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import39.HostView<import2.ArticlesPage> viewFactory_ArticlesPageHost0() {
  return _ViewArticlesPageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
