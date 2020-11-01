
import 'package:angular/angular.dart';


@Component(
  selector: 'fluid-bar-align',
  styleUrls: ['align.css'],
  templateUrl: 'align.html',
  providers: [],
  directives: []
)
class FluidBarAlign {

  @Input('fixed') bool fixed = true;

}