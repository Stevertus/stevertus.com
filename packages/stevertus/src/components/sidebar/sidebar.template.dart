// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'sidebar.dart';
export 'sidebar.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:stevertus/src/components/sidebar/sidebar.css.shim.dart' as import0;
import 'package:angular/src/core/linker/views/component_view.dart' as import1;
import 'sidebar.dart' as import2;
import 'package:fluix_web/fluix/sidebar/sidebar.template.dart' as import3;
import 'package:fluix_web/fluix/sidebar/sidebar.dart' as import4;
import 'package:fluix_web/fluix/sidebar/sidebar-item/item.template.dart' as import5;
import 'package:fluix_web/fluix/sidebar/sidebar-item/item.dart' as import6;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/views/view.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/di/errors.dart' as import14;
import 'package:angular_router/src/directives/router_link_directive.dart' as import15;
import 'package:angular_router/src/router/router.dart' as import16;
import 'package:angular_router/src/location/location.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/views/host_view.dart' as import19;

final List<dynamic> styles$SidebarComponent = [import0.styles];

class ViewSidebarComponent0 extends import1.ComponentView<import2.SidebarComponent> {
  import3.ViewFluidSidebar0 _compView_0;
  import4.FluidSidebar _FluidSidebar_0_5;
  import5.ViewFluidSidebarItem0 _compView_1;
  import6.FluidSidebarItem _FluidSidebarItem_1_5;
  import7.RouterLinkNgCd _RouterLink_1_6;
  var _expr_3;
  import8.Element _el_1;
  static import9.ComponentStyles _componentStyles;
  ViewSidebarComponent0(import10.View parentView, int parentIndex) : super(parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    this.initComponentStyles();
    this.rootElement = import8.document.createElement('sidebar');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:stevertus/lib/src/components/sidebar/sidebar.dart' : null);
  }

  @override
  void build() {
    final import8.HtmlElement parentRenderNode = this.initViewRoot();
    this._compView_0 = import3.ViewFluidSidebar0(this, 0);
    final _el_0 = this._compView_0.rootElement;
    parentRenderNode.append(_el_0);
    this.addShimC(_el_0);
    this._FluidSidebar_0_5 = import4.FluidSidebar();
    this._compView_1 = import5.ViewFluidSidebarItem0(this, 1);
    this._el_1 = this._compView_1.rootElement;
    import13.setAttribute(this._el_1, 'icon', 'home');
    import13.setAttribute(this._el_1, 'routerLink', '');
    this.addShimC(this._el_1);
    this._FluidSidebarItem_1_5 = import6.FluidSidebarItem();
    this._RouterLink_1_6 = import7.RouterLinkNgCd((import12.isDevMode
        ? import14.debugInjectorWrap(import15.RouterLink, () {
            return import15.RouterLink(this.parentView.injectorGet(import16.Router, this.parentIndex), this.parentView.injectorGet(import17.Location, this.parentIndex), null, this._el_1);
          })
        : import15.RouterLink(this.parentView.injectorGet(import16.Router, this.parentIndex), this.parentView.injectorGet(import17.Location, this.parentIndex), null, this._el_1)));
    this._compView_1.createAndProject(this._FluidSidebarItem_1_5, [const []]);
    final doc = import8.document;
    final _el_2 = doc.createElement('a');
    import13.setAttribute(_el_2, 'href', 'https://objd.stevertus.com');
    this.addShimC(_el_2);
    final _el_3 = import13.appendElement(doc, _el_2, 'img');
    import13.setAttribute(_el_3, 'alt', '');
    import13.setAttribute(_el_3, 'src', '/assets/logos/objd.png');
    this.addShimE(_el_3);
    final _text_4 = import13.createText(' ');
    final _el_5 = doc.createElement('a');
    import13.setAttribute(_el_5, 'href', 'https://stevertus.com/mcscript');
    this.addShimC(_el_5);
    final _el_6 = import13.appendElement(doc, _el_5, 'img');
    import13.setAttribute(_el_6, 'alt', '');
    import13.setAttribute(_el_6, 'src', '/assets/logos/mcscript.png');
    this.addShimE(_el_6);
    final _text_7 = import13.createText(' ');
    final _el_8 = doc.createElement('a');
    import13.setAttribute(_el_8, 'href', 'https://dmanager.stevertus.com');
    this.addShimC(_el_8);
    final _el_9 = import13.appendElement(doc, _el_8, 'img');
    import13.setAttribute(_el_9, 'alt', '');
    import13.setAttribute(_el_9, 'src', '/assets/logos/dmanager.png');
    this.addShimE(_el_9);
    final _text_10 = import13.createText(' ');
    final _el_11 = doc.createElement('a');
    import13.setAttribute(_el_11, 'href', 'https://stevertus.com/worldedit/package');
    this.addShimC(_el_11);
    final _el_12 = import13.appendElement(doc, _el_11, 'img');
    import13.setAttribute(_el_12, 'alt', '');
    import13.setAttribute(_el_12, 'src', '/assets/logos/worldedit.png');
    this.addShimE(_el_12);
    this._FluidSidebar_0_5.children = [this._FluidSidebarItem_1_5];
    this._compView_0.createAndProject(this._FluidSidebar_0_5, [
      [this._el_1, _el_2, _text_4, _el_5, _text_7, _el_8, _text_10, _el_11]
    ]);
    this._el_1.addEventListener('click', this.eventHandler1(this._RouterLink_1_6.instance.onClick));
  }

  @override
  void detectChangesInternal() {
    final _ctx = this.ctx;
    bool firstCheck = this.firstCheck;
    if (firstCheck) {
      this._FluidSidebar_0_5.fixed = false;
      this._FluidSidebar_0_5.expandable = false;
      this._FluidSidebarItem_1_5.icon = 'home';
    }
    final currVal_3 = _ctx.isHome;
    if (import12.checkBinding(this._expr_3, currVal_3, 'isHome', 'package:stevertus/src/components/sidebar/sidebar.html')) {
      this._FluidSidebarItem_1_5.active = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (firstCheck) {
      (this._RouterLink_1_6.instance.routerLink = '');
    }
    this._RouterLink_1_6.detectHostChanges(this._compView_1, this._el_1);
    this._compView_0.detectChanges();
    this._compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    this._compView_0.destroyInternalState();
    this._compView_1.destroyInternalState();
    this._RouterLink_1_6.instance.ngOnDestroy();
  }

  static void _debugClearComponentStyles() {
    _componentStyles = null;
  }

  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      _componentStyles = (styles = import9.ComponentStyles.scoped(styles$SidebarComponent, _debugComponentUrl));
      if (import12.isDevMode) {
        import9.ComponentStyles.debugOnClear(_debugClearComponentStyles);
      }
    }
    this.componentStyles = styles;
  }
}

const _SidebarComponentNgFactory = ComponentFactory<import2.SidebarComponent>('sidebar', viewFactory_SidebarComponentHost0);
ComponentFactory<import2.SidebarComponent> get SidebarComponentNgFactory {
  return _SidebarComponentNgFactory;
}

ComponentFactory<import2.SidebarComponent> createSidebarComponentFactory() {
  return ComponentFactory('sidebar', viewFactory_SidebarComponentHost0);
}

final List<dynamic> styles$SidebarComponentHost = const [];

class _ViewSidebarComponentHost0 extends import19.HostView<import2.SidebarComponent> {
  @override
  void build() {
    this.componentView = ViewSidebarComponent0(this, 0);
    final _el_0 = this.componentView.rootElement;
    this.component = import2.SidebarComponent();
    this.initRootNode(_el_0);
  }
}

import19.HostView<import2.SidebarComponent> viewFactory_SidebarComponentHost0() {
  return _ViewSidebarComponentHost0();
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
}
