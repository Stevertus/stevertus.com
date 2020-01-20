import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/card/card.dart';
@Component(
  selector: 'landing-card',
  styleUrls: ['card.css'],
  template: '<div><ng-content></ng-content></div>',
  directives: [FluidCard],
)
class LandingCard {
}
