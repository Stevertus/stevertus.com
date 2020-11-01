import 'dart:html';

import 'package:angular/angular.dart';

@Component(
    selector: 'fluid-icon',
    styleUrls: ['icon.css'],
    templateUrl: 'icon.html',
    providers: [],
    directives: [NgClass, NgStyle])
class FluidIcon implements OnInit {
  @Input('outline')
  bool outline;
  @Input('size')
  double size = 24;
  @Input('icon')
  String icon;

  Map<String, String> get sizeStyle => {'font-size': "${size}px"};

  HtmlElement element;

  FluidIcon(this.element);

  bool get isOutline => outline != null ? outline : false;

  @override
  void ngOnInit() {
    if (icon != null) applyClass(icon + (isOutline ? "Outline" : ""));
    if (element.firstChild.text != null)
      applyClass(element.firstChild.text + (isOutline ? "Outline" : ""));
  }

  applyClass(String name, [bool prefix = true]) {
    element.classes.add((prefix ? "fluid-icon-" : "") + name);
  }
}
