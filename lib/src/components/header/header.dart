import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/appbar/appbar.dart';
import 'package:fluix_web/fluix/bar-align/align.dart';
import 'package:fluix_web/fluix/button/button.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'header',
  styleUrls: ['header.css'],
  templateUrl: 'header.html',
  directives: [FluidAppbar, FluidBarAlign,FluidButton,RouterLink],
)
class HeaderComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
