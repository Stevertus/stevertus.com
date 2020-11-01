import 'dart:async';
import 'dart:html';

import 'package:angular/angular.dart';

@Component(
  selector: 'button[fluidBtn],a[fluidBtn]',
  styleUrls: ['button.css'],
  templateUrl: 'button.html',
  providers: [],
)
class FluidButton implements OnInit {
  @Input('look')
  String look;
  @Input('primary')
  bool primary;
  @Input('secondary')
  bool secondary;
  @Input('highlight')
  bool highlight;
  @Input('ghost')
  bool ghost;
  @Input('small')
  bool small;

  HtmlElement element;

  FluidButton(this.element);

  @override
  void ngOnInit() {
    if (small != null && small) applyClass('small');
    if (primary != null && primary) setPrimary();
    if (secondary != null && secondary) setSecondary();
    if (highlight != null && highlight) setHighlight();
    if (ghost != null && ghost) setGhost();
    if (look != null && look.isNotEmpty) {
      switch (look) {
        case "primary":
          setPrimary();
          break;
        case "secondary":
          setSecondary();
          break;
        case "highlight":
          setHighlight();
          break;
        case "ghost":
          setGhost();
          break;
      }
    }
  }

  applyClass(String name, [bool prefix = true]) {
    element.classes.add((prefix ? "fluidBtn-" : "") + name);
  }

  setPrimary() {
    applyClass("primary");
  }

  setSecondary() {
    applyClass("secondary");
  }

  setHighlight() {
    applyClass("highlight");
  }

  setGhost() {
    applyClass("ghost");
  }
}
