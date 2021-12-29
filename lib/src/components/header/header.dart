import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/appbar/appbar.dart';
import 'package:fluix_web/fluix/bar-align/align.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/dropdown/dropdown.dart';
import 'package:ng_translate/ng_translate.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'header',
  styleUrls: ['header.css'],
  templateUrl: 'header.html',
  directives: [
    FluidAppbar,
    FluidBarAlign,
    FluidButton,
    RouterLink,
    FluidDropdown,
    TranslationDirective,
  ],
  pipes: [TranslationPipe],
)
class HeaderComponent implements OnInit {
  // Nothing here yet. All logic is in TodoListComponent.

  TranslationService lang;

  final List<String> locales;
  late int selected;

  HeaderComponent(this.lang) : locales = TranslationService.supportedLocales;

  @override
  void ngOnInit() {
    if (window.localStorage.containsKey('lang')) {
      lang.setLocale(window.localStorage['lang']!);
    } else {
      lang.setLocale(window.navigator.language);
      saveCurrent(lang.currentLocale);
    }

    selected = locales.indexOf(lang.currentLocale);
  }

  void changeLang(int i) {
    lang.setLocale(locales[i]);
    saveCurrent(locales[i]);
  }

  void saveCurrent(String lang) {
    window.localStorage['lang'] = lang;
  }
}
