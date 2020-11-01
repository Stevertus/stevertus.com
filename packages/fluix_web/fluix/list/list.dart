import 'package:angular/angular.dart';
import './list-item/list-item.dart';
export './list-item/list-item.dart';

@Component(
  selector: 'fluid-list',
  styleUrls: ['list.css'],
  templateUrl: 'list.html',
  providers: [],
  directives: [
    FluidListItem
  ]
)
class FluidList {


}