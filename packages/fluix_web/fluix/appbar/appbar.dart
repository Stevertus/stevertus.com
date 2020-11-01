
import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/bar-align/align.dart';
export 'package:fluix_web/fluix/bar-align/align.dart';

@Component(
  selector: 'fluid-appbar',
  styleUrls: ['appbar.css'],
  templateUrl: 'appbar.html',
  providers: [],
  directives: [NgIf,NgClass, FluidBarAlign]
)
class FluidAppbar {

  @Input('fixed') bool fixed = true;

}