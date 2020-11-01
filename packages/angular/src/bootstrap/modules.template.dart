// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modules.dart';
export 'modules.dart';

import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular/src/bootstrap/modules.dart' as _i3;
import 'package:angular/src/core/linker/component_loader.dart' as _i4;
import 'package:angular/src/security/dom_sanitization_service_impl.dart' as _i5;
import 'package:angular/src/platform/browser/exceptions.dart' as _i6;
import 'package:angular/src/security/dom_sanitization_service.dart' as _i7;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as _i8;
import 'package:angular_compiler/v1/src/metadata/di_tokens.dart' as _i9;
import 'package:angular/src/security/sanitization_service.dart' as _i10;
import 'package:angular/src/facade/exception_handler.dart' as _i11;

_i1.Injector minimalApp$Injector([_i1.Injector parent]) => _Injector$minimalApp._(parent);

class _Injector$minimalApp extends _i2.HierarchicalInjector implements _i1.Injector {
  _Injector$minimalApp._([_i1.Injector parent]) : super(parent);

  _i3.ThrowingSlowComponentLoader _field0;

  _i4.ComponentLoader _field1;

  dynamic _field2;

  _i5.DomSanitizationServiceImpl _field3;

  _i6.BrowserExceptionHandler _field5;

  _i3.ThrowingSlowComponentLoader _getThrowingSlowComponentLoader$0() => _field0 ??= _i3.ThrowingSlowComponentLoader();
  _i4.ComponentLoader _getComponentLoader$1() => _field1 ??= _i4.ComponentLoader();
  dynamic _getdynamic$2() => _field2 ??= _i3.createRandomAppId();
  _i5.DomSanitizationServiceImpl _getDomSanitizationServiceImpl$3() => _field3 ??= _i5.DomSanitizationServiceImpl();
  dynamic _getExisting$4() => this.get(_i7.DomSanitizationService);
  _i6.BrowserExceptionHandler _getBrowserExceptionHandler$5() => _field5 ??= _i6.BrowserExceptionHandler();
  _i1.Injector _getInjector$6() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i8.SlowComponentLoader)) {
      return _getThrowingSlowComponentLoader$0();
    }
    if (identical(token, _i4.ComponentLoader)) {
      return _getComponentLoader$1();
    }
    if (identical(token, const _i9.OpaqueToken<String>('APP_ID'))) {
      return _getdynamic$2();
    }
    if (identical(token, _i7.DomSanitizationService)) {
      return _getDomSanitizationServiceImpl$3();
    }
    if (identical(token, _i10.SanitizationService)) {
      return _getExisting$4();
    }
    if (identical(token, _i11.ExceptionHandler)) {
      return _getBrowserExceptionHandler$5();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$6();
    }
    return orElse;
  }
}

// No initReflector() linking required.
void initReflector() {}