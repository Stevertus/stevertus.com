import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/shell/fluid_shell.dart';
import 'package:fluix_web/fluix/sidebar/sidebar.dart';
import 'package:stevertus/src/components/footer/footer.dart';
import 'package:stevertus/src/routes.dart';
import 'package:stevertus/src/components/header/header.dart';
import 'package:stevertus/src/components/sidebar/sidebar.dart';
import 'package:stevertus/src/pages/fard/fard_contact/fard_contact.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [routerDirectives,FooterComponent,FardContactPage, HeaderComponent, SidebarComponent, FluidShell,FluidCard,FluidInput,FluidSidebar],
  exports: [RoutePaths, Routes],
)
class AppComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
