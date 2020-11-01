import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';

@Component(
    selector: 'fluid-checkbox',
    styleUrls: ['checkbox.css'],
    templateUrl: 'checkbox.html',
    providers: [],
    directives: [FluidIcon, NgIf])
class FluidCheckbox {
  bool _value;
  @Input('value')
  set value(bool val) => _value = val;
  @Input('disabled')
  bool disabled;
  @Input('label')
  String label;

  final _valueChange = StreamController<bool>();
  @Output()
  Stream<bool> get valueChange => _valueChange.stream;

  @HostListener('click')
  void onClick() {
    _valueChange.add(!_value);
  }

  get value => _value != null ? _value : false;
}
