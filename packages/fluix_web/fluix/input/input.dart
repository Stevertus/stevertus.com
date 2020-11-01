import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';

@Component(
    selector: 'input[fluidInput]',
    styleUrls: ['input.css'],
    templateUrl: 'input.html',
    providers: [],
    directives: [NgIf])
class FluidInput implements OnInit {
  @Input('label')
  String label;
  @Input('error')
  String error;

  HtmlElement element;

  FluidInput(this.element);

  @override
  void ngOnInit() {
    if (error != null && error.isNotEmpty) applyClass("error");
  }

  applyClass(String name, [bool prefix = true]) {
    element.classes.add((prefix ? "fluidInput-" : "") + name);
  }
}
