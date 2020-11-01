//import 'package:meta/meta.dart';

import 'colors.dart';

//import 'package:fluix/widgets/button.dart';

class FluidThemeData {
  Liquid primary;
  Liquid accent;
  Color background;
  Color hintColor;
  Color inputBackground;
  Color toggleBackground;
  Color disabledInput;
  Color disabledColor;
  Color errorColor;
  Color labelColor;
  Color cardColor;
  Color hoverColor;
  Color dropdownHover;
  Color dropdownBackground;
  FluidBrightness brightness;
  // FluidButtonTheme primaryButton;
  // FluidButtonTheme secondaryButton;
  // FluidButtonTheme highlightButton;
  // FluidButtonTheme ghostButton;
  // IconThemeData iconTheme;
  // FluixTypography typography;
  // TextStyle defaultTextStyle;
  String fontFamily;

  FluidThemeData({
    this.primary,
    this.accent,
    this.background,
    this.hintColor,
    this.brightness,
    //this.iconTheme,
    this.hoverColor,
    this.inputBackground,
    this.toggleBackground,
    this.disabledInput,
    this.disabledColor,
    this.errorColor,
    this.labelColor,
    this.dropdownHover,
    this.dropdownBackground,
    // this.primaryButton,
    // this.typography,
    // this.defaultTextStyle,
    this.fontFamily,
    this.cardColor,
    //this.highlightButton,
  })  : assert(primary != null),
        assert(accent != null) {
    // primaryButton ??= FluidButtonTheme(
    //   this.primary,
    //   Liquids.white,
    //   disabledForeground: Color(0x7FFFFFFF),
    // );
    toggleBackground ??= Liquids.sensitiveGrey.dark;
    // secondaryButton ??= FluidButtonTheme(
    //   Liquids.sensitiveGrey,
    //   this.primary,
    //   disabledForeground: Liquids.sensitiveGrey.darker,
    // );
    // highlightButton ??= FluidButtonTheme(
    //   this.accent,
    //   Liquids.black,
    //   disabledForeground: Color(0x4C000000),
    // );
    // ghostButton ??= FluidButtonTheme(
    //   null,
    //   this.primary,
    //   disabledForeground: Color(0x4C000000),
    //   activeBackground: Liquids.sensitiveGrey.lighter.withAlpha(20),
    // );

    // defaultTextStyle ??= TextStyle(fontFamily: "Lato");

    // final FluixTypography defaultTextTheme = FluixTypography.defaults();
    // typography = defaultTextTheme.merge(typography);

    // if (fontFamily != null) {
    //   typography = typography.apply(TextStyle(fontFamily: fontFamily,color:Liquids.black));
    // }
    if (brightness == FluidBrightness.normal) {
      inputBackground ??= Liquids.white;
      dropdownBackground ??= Liquids.white;
      dropdownHover ??= Liquids.sensitiveGrey;
      background ??= Liquids.sensitiveGrey;
      cardColor ??= Liquids.white;
      // sidebar ??= SidebarTheme();
    }
    if (brightness == FluidBrightness.light) {
      inputBackground ??= Liquids.sensitiveGrey;
      dropdownBackground ??= Liquids.white;
      dropdownHover ??= Liquids.sensitiveGrey;
      background ??= Liquids.white;
      cardColor ??= Liquids.sensitiveGrey;
      // sidebar ??= SidebarTheme(
      //   background: Liquids.sensitiveGrey,
      // );
    }

    if (brightness == FluidBrightness.dark) {
      background ??= Liquids.richBlack.darkest;
      inputBackground ??= Liquids.richBlack;
      cardColor ??= Liquids.richBlack.dark;

      hintColor ??= Liquids.richBlack.lightest;
      labelColor ??= Liquids.richBlack.lightest;
      disabledColor ??= Liquids.sensitiveGrey.darker;
      hoverColor ??= Liquids.sensitiveGrey.darker;
    } else {
      hintColor ??= Liquids.richBlack.lightest;
      labelColor ??= Liquids.richBlack.lightest;
      disabledColor ??= Liquids.sensitiveGrey.darker;
      hoverColor ??= Liquids.sensitiveGrey.darker;
    }
  }

  Map<String, String> toCss() {
    Map<String, String> res = {};
    res["background"] = background.toHex();
    res["cardColor"] = cardColor.toHex();
    res["inputBackground"] = inputBackground.toHex();
    res["hintColor"] = hintColor.toHex();
    res["disabledColor"] = disabledColor.toHex();
    res["errorColor"] = errorColor.toHex();
    res["dropdown-background"] = dropdownBackground.toHex();
    res["dropdown-hover"] = dropdownHover.toHex();
    res.addAll(primary.toCss("primary"));
    res.addAll(accent.toCss("accent"));

    return res;
  }

  bool operator ==(dynamic other) {
    if (other is FluidThemeData)
      return this.primary.primary == other.primary.primary;
    return false;
  }

  factory FluidThemeData.vibrantCyan(
          {FluidBrightness brightness = FluidBrightness.normal}) =>
      FluidThemeData(
        primary: Liquids.vibrantCyan,
        accent: Liquids.vibrantYellow,
        brightness: brightness,
        errorColor: Liquids.richRed,
        //iconTheme: IconThemeData(color: Liquids.richBlack,size: 20,opacity: 1)
      );
  factory FluidThemeData.richBlue(
          {FluidBrightness brightness = FluidBrightness.normal}) =>
      FluidThemeData(
        primary: Liquids.richBlue,
        accent: Liquids.vibrantYellow,
        brightness: brightness,
        errorColor: Liquids.richRed,
        //iconTheme: IconThemeData(color: Liquids.richBlack,size: 20,opacity: 1)
      );
  factory FluidThemeData.richPurple(
          {FluidBrightness brightness = FluidBrightness.normal}) =>
      FluidThemeData(
        primary: Liquids.richPurple,
        accent: Liquids.vibrantCyan,
        brightness: brightness,
        errorColor: Liquids.richRed,
        //iconTheme: IconThemeData(color: Liquids.richBlack,size: 20,opacity: 1)
      );
  factory FluidThemeData.vibrantMagenta(
          {FluidBrightness brightness = FluidBrightness.normal}) =>
      FluidThemeData(
        primary: Liquids.vibrantMagenta,
        accent: Liquids.richPurple,
        brightness: brightness,
        errorColor: Liquids.richRed,
        //iconTheme: IconThemeData(color: Liquids.richBlack,size: 20,opacity: 1)
      );
  factory FluidThemeData.fallback() => FluidThemeData.vibrantCyan();
}

enum FluidBrightness { light, normal, dark }
