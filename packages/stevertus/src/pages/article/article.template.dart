// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'article.dart';
export 'article.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/pages/article/article.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'article.dart' as import2;
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
import 'package:fluix_web/fluix/spinner/spinner.template.dart' as import14;
import 'package:fluix_web/fluix/spinner/spinner.dart' as import15;
import 'package:angular/src/core/linker/views/render_view.dart' as import16;
import 'slices/slices.template.dart' as import17;
import 'slices/slices.dart' as import18;
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:fluix_web/fluix/icon/icon.template.dart' as import20;
import 'package:fluix_web/fluix/icon/icon.dart' as import21;
import 'package:angular/src/runtime/text_binding.dart' as import22;
import 'package:angular/src/runtime/interpolate.dart' as import23;
import 'package:angular/src/core/linker/views/host_view.dart' as import24;
import 'package:angular/src/di/errors.dart' as import25;
import 'package:angular/src/security/dom_sanitization_service.dart' as import26;
import 'package:ng_translate/src/translation_service.dart' as import27;

final List<dynamic> styles$ArticlePage = [import0.styles];

class ViewArticlePage0 extends import1.ComponentView<import2.ArticlePage> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static import5.ComponentStyles _componentStyles;
  ViewArticlePage0(import6.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('article');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:stevertus/lib/src/pages/article/article.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    final doc = import8.document;
    final _el_0 = import10.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'container');
    this.addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    this._appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(this._appEl_1, viewFactory_ArticlePage1);
    this._NgIf_1_9 = NgIf(this._appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ArticlePage2);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_1_9.ngIf = _ctx.loading;
    this._NgIf_2_9.ngIf = ((!_ctx.loading) && (_ctx.article != null));
    this._appEl_1.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    this._appEl_1.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import5.ComponentStyles.scoped(styles$ArticlePage, _debugComponentUrl));
      if (import9.isDevMode) {
        import5.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _ArticlePageNgFactory = ComponentFactory<import2.ArticlePage>('article', viewFactory_ArticlePageHost0);
ComponentFactory<import2.ArticlePage> get ArticlePageNgFactory {
  return _ArticlePageNgFactory;
}

ComponentFactory<import2.ArticlePage> createArticlePageFactory() {
  return ComponentFactory('article', viewFactory_ArticlePageHost0);
}

class _ViewArticlePage1 extends import13.EmbeddedView<import2.ArticlePage> {
  import14.ViewFluidSpinner0 _compView_0;
  import15.FluidSpinner _FluidSpinner_0_5;
  _ViewArticlePage1(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    this._compView_0 = import14.ViewFluidSpinner0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    this.addShimC(_el_0);
    this._FluidSpinner_0_5 = import15.FluidSpinner();
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

import13.EmbeddedView<void> viewFactory_ArticlePage1(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage1(parentView, parentIndex);
}

class _ViewArticlePage2 extends import13.EmbeddedView<import2.ArticlePage> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import17.ViewSlicesComponent0 _compView_4;
  import18.SlicesComponent _SlicesComponent_4_5;
  var _expr_0;
  _ViewArticlePage2(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final _anchor_0 = import10.createAnchor();
    this._appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(this._appEl_0, viewFactory_ArticlePage3);
    this._NgIf_0_9 = NgIf(this._appEl_0, _TemplateRef_0_8);
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'content');
    this.addShimC(_el_1);
    final _anchor_2 = import10.appendAnchor(_el_1);
    this._appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ArticlePage6);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import10.appendAnchor(_el_1);
    this._appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_ArticlePage7);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this._compView_4 = import17.ViewSlicesComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    _el_1.append(_el_4);
    this.addShimC(_el_4);
    this._SlicesComponent_4_5 = import18.SlicesComponent();
    this._compView_4.create(this._SlicesComponent_4_5);
    this.initRootNodesAndSubscriptions([this._appEl_0, _el_1], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_0_9.ngIf = _ctx.article.img.isNotEmpty;
    this._NgIf_2_9.ngIf = (_ctx.article.date != null);
    this._NgIf_3_9.ngIf = _ctx.article.title.isNotEmpty;
    final currVal_0 = _ctx.article.slices;
    if (import9.checkBinding(this._expr_0, currVal_0, 'article.slices', 'package:stevertus/src/pages/article/article.html')) {
      this._SlicesComponent_4_5.slices = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._appEl_0.detectChangesInNestedViews();
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    this._compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_0.destroyNestedViews();
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
    this._compView_4.destroyInternalState();
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage2(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage2(parentView, parentIndex);
}

class _ViewArticlePage3 extends import13.EmbeddedView<import2.ArticlePage> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_0;
  import8.Element _el_1;
  _ViewArticlePage3(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'img-container');
    this.addShimC(_el_0);
    this._el_1 = import10.appendElement(doc, _el_0, 'img');
    import10.setAttribute(this._el_1, 'alt', 'Header Image');
    this.addShimE(this._el_1);
    final _anchor_2 = import10.appendAnchor(_el_0);
    this._appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(this._appEl_2, viewFactory_ArticlePage4);
    this._NgIf_2_9 = NgIf(this._appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import10.appendAnchor(_el_0);
    this._appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(this._appEl_3, viewFactory_ArticlePage5);
    this._NgIf_3_9 = NgIf(this._appEl_3, _TemplateRef_3_8);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._NgIf_2_9.ngIf = ((_ctx.article.video != null) && (!_ctx.playingVideo));
    this._NgIf_3_9.ngIf = ((_ctx.article.video != null) && _ctx.playingVideo);
    this._appEl_2.detectChangesInNestedViews();
    this._appEl_3.detectChangesInNestedViews();
    final currVal_0 = _ctx.article.img;
    if (import9.checkBinding(this._expr_0, currVal_0, 'article.img', 'package:stevertus/src/pages/article/article.html')) {
      import10.setProperty(this._el_1, 'src', import19.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    this._appEl_2.destroyNestedViews();
    this._appEl_3.destroyNestedViews();
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage3(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage3(parentView, parentIndex);
}

class _ViewArticlePage4 extends import13.EmbeddedView<import2.ArticlePage> {
  import20.ViewFluidIcon0 _compView_1;
  import21.FluidIcon _FluidIcon_1_5;
  _ViewArticlePage4(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'startVideo');
    this.addShimC(_el_0);
    this._compView_1 = import20.ViewFluidIcon0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    _el_0.append(_el_1);
    import10.setAttribute(_el_1, 'icon', 'mediaPlay');
    this.addShimC(_el_1);
    this._FluidIcon_1_5 = import21.FluidIcon(_el_1);
    this._compView_1.createAndProject(this._FluidIcon_1_5, [const []]);
    _el_0.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidIcon_1_5.size = 40;
      this._FluidIcon_1_5.icon = 'mediaPlay';
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
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
    _ctx.playingVideo = true;
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage4(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage4(parentView, parentIndex);
}

class _ViewArticlePage5 extends import13.EmbeddedView<import2.ArticlePage> {
  import20.ViewFluidIcon0 _compView_3;
  import21.FluidIcon _FluidIcon_3_5;
  var _expr_0;
  import8.IFrameElement _el_1;
  _ViewArticlePage5(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'video');
    this.addShimC(_el_0);
    this._el_1 = import10.appendElement(doc, _el_0, 'iframe');
    import10.setAttribute(this._el_1, 'allow', 'autoplay');
    import10.setAttribute(this._el_1, 'allowfullscreen', '');
    import10.setAttribute(this._el_1, 'frameborder', '0');
    this.addShimC(this._el_1);
    final _el_2 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'stopVideo');
    this.addShimC(_el_2);
    this._compView_3 = import20.ViewFluidIcon0(this, 3);
    final _el_3 = this._compView_3.rootElement;
    _el_2.append(_el_3);
    import10.setAttribute(_el_3, 'icon', 'close');
    this.addShimC(_el_3);
    this._FluidIcon_3_5 = import21.FluidIcon(_el_3);
    this._compView_3.createAndProject(this._FluidIcon_3_5, [const []]);
    _el_2.addEventListener('click', this.eventHandler1(this._handleEvent_0));
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidIcon_3_5.size = 20;
      this._FluidIcon_3_5.icon = 'close';
    }
    if (((!import9.debugThrowIfChanged) && firstCheck)) {
      this._FluidIcon_3_5.ngOnInit();
    }
    final currVal_0 = _ctx.safeVideoUrl;
    if (import9.checkBinding(this._expr_0, currVal_0, 'safeVideoUrl', 'package:stevertus/src/pages/article/article.html')) {
      import10.setProperty(this._el_1, 'src', import19.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_0));
      this._expr_0 = currVal_0;
    }
    this._compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_3.destroyInternalState();
  }

  void _handleEvent_0($event) {
    final _ctx = this.ctx;
    _ctx.playingVideo = false;
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage5(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage5(parentView, parentIndex);
}

class _ViewArticlePage6 extends import13.EmbeddedView<import2.ArticlePage> {
  final import22.TextBinding _textBinding_1 = import22.TextBinding();
  final import22.TextBinding _textBinding_3 = import22.TextBinding();
  final import22.TextBinding _textBinding_5 = import22.TextBinding();
  _ViewArticlePage6(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'date');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    final _text_2 = import10.appendText(_el_0, '/');
    _el_0.append(this._textBinding_3.element);
    final _text_4 = import10.appendText(_el_0, '/');
    _el_0.append(this._textBinding_5.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateTextWithPrimitive(_ctx.article.date.day);
    this._textBinding_3.updateTextWithPrimitive(_ctx.article.date.month);
    this._textBinding_5.updateTextWithPrimitive(_ctx.article.date.year);
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage6(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage6(parentView, parentIndex);
}

class _ViewArticlePage7 extends import13.EmbeddedView<import2.ArticlePage> {
  final import22.TextBinding _textBinding_1 = import22.TextBinding();
  _ViewArticlePage7(import16.RenderView parentView, int parentIndex) : super(parentView, parentIndex);
  @override
  void build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('h1');
    this.updateChildClass(_el_0, 'title');
    this.addShimE(_el_0);
    _el_0.append(this._textBinding_1.element);
    this.initRootNode(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    this._textBinding_1.updateText(import23.interpolateString0(_ctx.article.title));
  }
}

import13.EmbeddedView<void> viewFactory_ArticlePage7(import16.RenderView parentView, int parentIndex) {
  return _ViewArticlePage7(parentView, parentIndex);
}

final List<dynamic> styles$ArticlePageHost = const [];

class _ViewArticlePageHost0 extends import24.HostView<import2.ArticlePage> {
  @override
  void build() {
    this.componentView = ViewArticlePage0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = (import9.isDevMode
        ? import25.debugInjectorWrap(import2.ArticlePage, () {
            return import2.ArticlePage(this.injectorGet(import26.DomSanitizationService, this.parentIndex), this.injectorGet(import27.TranslationService, this.parentIndex));
          })
        : import2.ArticlePage(this.injectorGet(import26.DomSanitizationService, this.parentIndex), this.injectorGet(import27.TranslationService, this.parentIndex)));
    this.initRootNode(_el_0);
  }
}

import24.HostView<import2.ArticlePage> viewFactory_ArticlePageHost0() {
  return _ViewArticlePageHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
