import 'dart:html';

import 'package:angular/angular.dart';

@Component(
    selector: 'fluid-card',
    styleUrls: ['card.css'],
    templateUrl: 'card.html',
    providers: [],
    directives: [])
class FluidCard implements OnInit {
  @Input('elevation')
  int elevation;

  HtmlElement element;

  FluidCard(this.element);

  @override
  void ngOnInit() {
    if (elevation != null && elevation > 0) applyClass(elevation.toString());
  }

  applyClass(String name, [bool prefix = true]) {
    element.classes.add((prefix ? "fluidCard-" : "") + name);
  }
}
