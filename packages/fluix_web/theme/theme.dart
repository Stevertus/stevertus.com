import 'dart:html';

import 'package:angular/angular.dart';
import './themedata.dart';
export 'themedata.dart';

// main(){
//   var theme = FluidTheme(FluidThemeData.richBlue());
//   print(theme.toCss());
// }

@Injectable()
class FluidTheme {
  FluidThemeData data;
  //Document document;

  Map<String, FluidThemeData> themes = {
    "vibrantCyan": FluidThemeData.vibrantCyan(),
    "richBlue": FluidThemeData.richBlue(),
    "richPurple": FluidThemeData.richPurple(),
    "vibrantMagenta": FluidThemeData.vibrantMagenta(),
  };

  FluidTheme() {
    if (data == null) setTheme(FluidThemeData.fallback());
  }

  setTheme(FluidThemeData theme) {
    if (data != null && data == theme) return;
    data = theme;
    _setCss(toCss());
  }

  setVariable(String name, String value) {
    document.documentElement.style.setProperty(name, value);
  }

  setThemeFromString(String theme, {dynamic brightness}) {
    brightness = brightness == null
        ? FluidBrightness.normal
        : getBrightness(brightness as String);
    setTheme(_stringgetter(theme, brightness));
  }

  FluidBrightness getBrightness(String b) {
    if (b.toLowerCase() == "light") return FluidBrightness.light;
    if (b.toLowerCase() == "dark") return FluidBrightness.dark;
    return FluidBrightness.normal;
  }

  FluidThemeData _stringgetter(String th, FluidBrightness brightness) {
    switch (th.toLowerCase()) {
      case "vibrantcyan":
        return FluidThemeData.vibrantCyan(brightness: brightness);
      case "richblue":
        return FluidThemeData.richBlue(brightness: brightness);
      case "richpurple":
        return FluidThemeData.richPurple(brightness: brightness);
      case "vibrantmagenta":
        return FluidThemeData.vibrantMagenta(brightness: brightness);
    }
    return FluidThemeData.fallback();
  }

  Map toMap() {
    return data.toCss();
  }

  String toCss() {
    List<String> res = [];
    Map<String, String> css = toMap();
    css["appbar-background"] = css["primary"];
    css.forEach((key, val) {
      res.add('--$key:$val;');
    });
    res.add('background:var(--background)');

    return res.join("\n");
  }

  void _setCss(String css) {
    document.documentElement.style.cssText = css;
  }
}
