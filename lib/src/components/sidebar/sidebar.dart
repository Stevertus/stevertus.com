import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/sidebar/sidebar.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'sidebar',
  styleUrls: ['sidebar.css'],
  templateUrl: 'sidebar.html',
  directives: [FluidSidebar, FluidSidebarItem, RouterLink],
)
class SidebarComponent {
  bool isHome = true;
}
