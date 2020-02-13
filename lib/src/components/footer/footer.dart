import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:ng_translate/ng_translate.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'footer',
  styleUrls: ['footer.css'],
  templateUrl: 'footer.html',
  directives: [FluidIcon, RouterLink, TranslationDirective],
)
class FooterComponent {
  TranslationService lang;

  FooterComponent(this.lang);
  // Nothing here yet. All logic is in TodoListComponent.
}
