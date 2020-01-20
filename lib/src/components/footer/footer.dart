import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/icon/icon.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'footer',
  styleUrls: ['footer.css'],
  templateUrl: 'footer.html',
  directives: [FluidIcon,RouterLink],
)
class FooterComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
