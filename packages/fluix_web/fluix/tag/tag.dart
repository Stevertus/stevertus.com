import 'package:angular/angular.dart';

@Component(
    selector: 'fluid-tag',
    styleUrls: ['tag.css'],
    templateUrl: 'tag.html',
    providers: [],
    directives: [Input])
class FluidTag {
  @Input('value')
  bool value;
  @Input('disabled')
  bool disabled;
}
