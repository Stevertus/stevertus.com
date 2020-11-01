import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';

@Component(
    selector: 'textarea[fluidMultiInput]',
    styleUrls: ['input.css'],
    templateUrl: 'input.html',
    providers: [],
    directives: [NgIf])
class FluidMultiInput implements OnInit {
  @Input('label')
  String label;
  @Input('error')
  String error;

  HtmlElement element;

  FluidMultiInput(this.element);

  @override
  void ngOnInit() {
    if (error != null && error.isNotEmpty) applyClass("error");
  }

  applyClass(String name, [bool prefix = true]) {
    element.classes.add((prefix ? "fluidMultiInput-" : "") + name);
  }
}
