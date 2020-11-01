import 'dart:async';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';

@Component(
    selector: 'fluid-dropdown',
    styleUrls: ['dropdown.css'],
    templateUrl: 'dropdown.html',
    providers: [],
    directives: [FluidIcon, NgIf, NgFor])
class FluidDropdown {
  @Input('selected')
  int selected;
  @Input('disabled')
  bool disabled;
  @Input('placeholder')
  String placeholder;
  @Input('values')
  List<String> values;

  bool open = false;

  String get displayedText => selected != null ? values[selected] : placeholder;

  final _selectedChange = StreamController<int>();
  @Output('selectedChange')
  Stream<int> get selectedChange => _selectedChange.stream;

  void select(int i) {
    if (i < values.length) {
      selected = i;
      _selectedChange.add(i);
      open = false;
    }
  }

  void toggle() {
    if (disabled == null || !disabled) open = !open;
  }
}
