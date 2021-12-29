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
  late int selected;
  @Input('min')
  late int min;
  @Input('max')
  late int max;
  @Input('values')
  List<int>? values;

  List<String> get items =>
      (values ?? List.generate(max - min + 1, (i) => max - i))
          .map((v) => '1.$v')
          .toList();
  int get selectedIndex =>
      values != null ? values!.indexOf(selected) : max - selected;

  final _versionChange = StreamController<int>();
  @Output('versionChange')
  Stream<int> get versionChange => _versionChange.stream;

  void change(int index) {
    _versionChange.add(values != null ? values![index] : max - index);
  }
}
