import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';

@Component(
  selector: 'fluid-sidebar-item',
  styleUrls: ['item.css'],
  templateUrl: 'item.html',
  providers: [],
  directives: [NgIf, NgClass, FluidIcon],
)
class FluidSidebarItem {
  @Input('icon')
  String icon;
  @Input('text')
  String text;
  @Input('active')
  set active(bool v) => _active = v;
  bool _active;
  bool get active => _active != null ? _active : false;

  @Input('expanded')
  set expanded(bool v) => _expanded = v;
  bool get expanded => _expanded;

  bool _expanded = false;

  void expand() {
    _expanded = true;
  }

  void shrink() {
    _expanded = false;
  }
}
