// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'app_component.dart' as import2;
import 'package:fluix_web/fluix/shell/fluid_shell.template.dart' as import3;
import 'package:fluix_web/theme/theme.dart' as import4;
import 'package:fluix_web/fluix/shell/fluid_shell.dart' as import5;
import 'src/components/header/header.template.dart' as import6;
import 'src/components/header/header.dart' as import7;
import 'src/components/sidebar/sidebar.template.dart' as import8;
import 'src/components/sidebar/sidebar.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import11;
import 'src/components/footer/footer.template.dart' as import12;
import 'src/components/footer/footer.dart' as import13;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import14;
import 'package:angular/src/core/linker/views/view.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import17;
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/src/runtime/dom_helpers.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:ng_translate/src/translation_service.dart' as import21;
import 'package:angular_router/src/router/router_outlet_token.dart' as import22;
import 'package:angular_router/src/router/router.dart' as import23;
import 'package:angular_router/src/router_hook.dart' as import24;
import 'src/routes.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import27;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends import1.ComponentView<import2.AppComponent> {
  import3.ViewFluidShell0 _compView_0;
  import4.FluidTheme _FluidTheme_0_5;
  import5.FluidShell _FluidShell_0_6;
  import6.ViewHeaderComponent0 _compView_1;
  import7.HeaderComponent _HeaderComponent_1_5;
  import8.ViewSidebarComponent0 _compView_2;
  import9.SidebarComponent _SidebarComponent_2_5;
  ViewContainer _appEl_3;
  import11.RouterOutlet _RouterOutlet_3_8;
  import12.ViewFooterComponent0 _compView_4;
  import13.FooterComponent _FooterComponent_4_5;
  static import14.ComponentStyles _componentStyles;
  ViewAppComponent0(import15.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import17.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:stevertus/lib/app_component.dart' : null);
  }

  @override
  void build() {
    final import17.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewFluidShell0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    import19.setAttribute(_el_0, 'theme', 'richBlue');
    this.addShimC(_el_0);
    this._FluidTheme_0_5 = import4.FluidTheme();
    this._FluidShell_0_6 = import5.FluidShell(this._FluidTheme_0_5);
    this._compView_1 = import6.ViewHeaderComponent0(this, 1);
    final _el_1 = this._compView_1.rootElement;
    import19.setAttribute(_el_1, 'appbar', '');
    this.addShimC(_el_1);
    this._HeaderComponent_1_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import7.HeaderComponent, () {
            return import7.HeaderComponent(this.parentView.injectorGet(import21.TranslationService, this.parentIndex));
          })
        : import7.HeaderComponent(this.parentView.injectorGet(import21.TranslationService, this.parentIndex)));
    this._compView_1.create(this._HeaderComponent_1_5);
    this._compView_2 = import8.ViewSidebarComponent0(this, 2);
    final _el_2 = this._compView_2.rootElement;
    import19.setAttribute(_el_2, 'sidebar', '');
    this.addShimC(_el_2);
    this._SidebarComponent_2_5 = import9.SidebarComponent();
    this._compView_2.create(this._SidebarComponent_2_5);
    final doc = import17.document;
    final _el_3 = doc.createElement('router-outlet');
    this.addShimE(_el_3);
    this._appEl_3 = ViewContainer(3, 0, this, _el_3);
    this._RouterOutlet_3_8 = (import18.isDevMode
        ? import20.debugInjectorWrap(import11.RouterOutlet, () {
            return import11.RouterOutlet(this.parentView.injectorGetOptional(import22.RouterOutletToken, this.parentIndex), this._appEl_3, this.parentView.injectorGet(import23.Router, this.parentIndex), this.parentView.injectorGetOptional(import24.RouterHook, this.parentIndex));
          })
        : import11.RouterOutlet(this.parentView.injectorGetOptional(import22.RouterOutletToken, this.parentIndex), this._appEl_3, this.parentView.injectorGet(import23.Router, this.parentIndex), this.parentView.injectorGetOptional(import24.RouterHook, this.parentIndex)));
    this._compView_4 = import12.ViewFooterComponent0(this, 4);
    final _el_4 = this._compView_4.rootElement;
    this.addShimC(_el_4);
    this._FooterComponent_4_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import13.FooterComponent, () {
            return import13.FooterComponent(this.parentView.injectorGet(import21.TranslationService, this.parentIndex));
          })
        : import13.FooterComponent(this.parentView.injectorGet(import21.TranslationService, this.parentIndex)));
    this._compView_4.create(this._FooterComponent_4_5);
    this._compView_0.createAndProject(this._FluidShell_0_6, [
      const [],
      [_el_1],
      const [],
      [_el_2],
      [this._appEl_3, _el_4]
    ]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.FluidTheme) && (nodeIndex <= 4))) {
      return this._FluidTheme_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      (this._FluidShell_0_6.theme = 'richBlue');
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._FluidShell_0_6.ngOnInit();
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._HeaderComponent_1_5.ngOnInit();
    }
    if (firstCheck) {
      if (!identical(import25.Routes.all, null)) {
        (this._RouterOutlet_3_8.routes = import25.Routes.all);
      }
    }
    if (((!import18.debugThrowIfChanged) && firstCheck)) {
      this._RouterOutlet_3_8.ngOnInit();
    }
    this._appEl_3.detectChangesInNestedViews();
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
    this._compView_2.detectChanges();
    this._compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    this._appEl_3.destroyNestedViews();
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._compView_2.destroyInternalState();
    this._compView_4.destroyInternalState();
    this._RouterOutlet_3_8.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import14.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl));
      if (import18.isDevMode) {
        import14.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _AppComponentNgFactory = ComponentFactory<import2.AppComponent>('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

ComponentFactory<import2.AppComponent> createAppComponentFactory() {
  return ComponentFactory('my-app', viewFactory_AppComponentHost0);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends import27.HostView<import2.AppComponent> {
  import21.TranslationService __TranslationService_0_6;
  import21.TranslationService get _TranslationService_0_6 {
    if ((this.__TranslationService_0_6 == null)) {
      (this.__TranslationService_0_6 = import21.TranslationService());
    }
    return this.__TranslationService_0_6;
  }

  @override
  void build() {
    this.componentView = ViewAppComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.AppComponent();
    this.initRootNode(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.TranslationService) && (0 == nodeIndex))) {
      return this._TranslationService_0_6;
    }
    return notFoundResult;
  }
}

import27.HostView<import2.AppComponent> viewFactory_AppComponentHost0() {
  return _ViewAppComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
