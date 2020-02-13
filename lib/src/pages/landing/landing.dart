import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:stevertus/src/pages/landing/card/card.dart';
import 'package:stevertus/src/pages/landing/section/section.dart';

import 'package:ng_translate/ng_translate.dart';

@Component(
  selector: 'landing',
  styleUrls: ['landing.css'],
  templateUrl: 'landing.html',
  directives: [
    RouterLink,
    LandingSection,
    LandingCard,
    FluidButton,
    TranslationDirective,
  ],
  pipes: [TranslationPipe],
)
class LandingPage {
  void navigateTo(String url) {
    window.location.assign(url);
  }
}
