import 'dart:html';

import 'package:angular/angular.dart';
import 'package:fluix_web/theme/theme.dart';


@Component(
  selector: 'fluid-shell',
  styleUrls: ['shell.css'],
  templateUrl: 'fluid_shell.html',
  providers: [FluidTheme],
  directives: []
)
class FluidShell implements OnInit {

  @Input('theme') String theme;
  @Input('brightness') String brightness;
  FluidTheme themeService;

  FluidShell(this.themeService);

  @override
  void ngOnInit() {
    if(theme != null) themeService.setThemeFromString(theme,brightness: brightness);
  }

}