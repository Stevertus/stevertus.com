import 'dart:async';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/dropdown/dropdown.dart';

@Component(
  selector: 'version-dropdown',
  templateUrl: 'dropdown.html',
  providers: [],
  directives: [FluidDropdown],
)
class VersionDropdown {
  @Input('selected')
  int selected;
  @Input('min')
  int min;
  @Input('max')
  int max;
  @Input('values')
  List<int> values;

  List<String> get items =>
      (values ?? List.generate(max - min + 1, (i) => max - i))
          .map((v) => '1.$v')
          .toList();
  int get selectedIndex =>
      values != null ? values.indexOf(selected) ?? 0 : max - selected;

  final _versionChange = StreamController<int>();
  @Output('versionChange')
  Stream<int> get versionChange => _versionChange.stream;

  void change(int index) {
    _versionChange.add(values != null ? values[index] : max - index);
  }
}
