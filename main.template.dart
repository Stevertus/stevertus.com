// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'main.dart';
export 'main.dart';

import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular_router/src/router/router_impl.dart' as _i3;
import 'package:angular_router/src/location/location.dart' as _i4;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i5;
import 'package:angular_router/src/location/path_location_strategy.dart' as _i6;
import 'package:angular_router/src/router_hook.dart' as _i7;
import 'package:angular_router/src/location/location_strategy.dart' as _i8;
import 'package:angular_router/src/location/platform_location.dart' as _i9;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i10;
import 'package:angular_router/src/router/router.dart' as _i11;

_i1.Injector injector$Injector([_i1.Injector parent]) => _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector implements _i1.Injector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  _i3.RouterImpl _field0;

  _i4.Location _field1;

  _i5.BrowserPlatformLocation _field2;

  _i6.PathLocationStrategy _field3;

  _i3.RouterImpl _getRouterImpl$0() => _field0 ??= _i3.RouterImpl(this.get(_i4.Location), provideUntyped(_i7.RouterHook, null));
  _i4.Location _getLocation$1() => _field1 ??= _i4.Location(this.get(_i8.LocationStrategy));
  _i5.BrowserPlatformLocation _getBrowserPlatformLocation$2() => _field2 ??= _i5.BrowserPlatformLocation();
  _i6.PathLocationStrategy _getPathLocationStrategy$3() => _field3 ??= _i6.PathLocationStrategy(this.get(_i9.PlatformLocation), provideUntyped(const _i10.OpaqueToken<String>('appBaseHref'), null));
  _i1.Injector _getInjector$4() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i11.Router)) {
      return _getRouterImpl$0();
    }
    if (identical(token, _i4.Location)) {
      return _getLocation$1();
    }
    if (identical(token, _i9.PlatformLocation)) {
      return _getBrowserPlatformLocation$2();
    }
    if (identical(token, _i8.LocationStrategy)) {
      return _getPathLocationStrategy$3();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$4();
    }
    return orElse;
  }
}

// No initReflector() linking required.
void initReflector() {}
