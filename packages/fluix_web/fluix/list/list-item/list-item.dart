import 'dart:async';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/bar-align/align.dart';
import 'package:fluix_web/fluix/icon/icon.dart';

@Component(
    selector: 'fluid-list-item',
    styleUrls: ['list-item.css'],
    templateUrl: 'list-item.html',
    providers: [],
    directives: [FluidBarAlign, NgIf, NgClass, FluidIcon])
class FluidListItem {
  @Input('icon')
  String icon;
  bool _clickable;
  @Input('clickable')
  set clickable(bool val) => _clickable = val;
  bool get clickable => _clickable != null ? _clickable : false;

  bool _selected;
  @Input('selected')
  set selected(bool val) => _selected = val;
  bool get selected => _selected != null ? _selected : false;

  Map<String, bool> get cssClasses => {
        'clickable': clickable,
        'selected': selected,
      };
}
