import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:ng_translate/ng_translate.dart';
import 'package:stevertus/app_component.template.dart' as ng;

import 'main.template.dart' as self;

@GenerateInjector(
  routerProviders, // You can use routerProviders in production
)
final InjectorFactory injector = self.injector$Injector;

void main() async {
  TranslationService.defaultLocale = 'en';
  TranslationService.initializeLocale('en', {
    'view': 'View',
    'download': 'Download',
    'articles': 'Articles',
    'projects': 'Projects',
    'videos': 'Videos',
    'contact': 'Contact',
    'search': 'Search',
    'landing': {
      'section1': {
        'title': 'Experimenting',
        'subtitle': 'With new Ideas',
        'text':
            'Modifing Minecraft to its limits, creating new ideas and tools.'
      },
      'section2': {
        'title': 'Start Creating',
        'subtitle': 'Today',
        'text': 'Use Tools, learn coding and transform Minecraft.',
        'button': 'Learn Programming',
      },
      'learnProgramming': 'Learn Programming',
      'card_objd': {
        'title': 'objD',
        'desc': 'A Framework For Generating Datapacks',
        'button': 'Get Started',
      },
      'card_mcscript': {
        'title': 'mcscript',
        'desc': 'A Programming Language for Minecraft',
      },
      'card_dmanager': {
        'title': 'dManager',
        'desc': 'Application to share, install and manage Datapacks',
      },
      'card_worldedit': {
        'title': 'Vanilla Worldedit',
        'desc': 'Worldedit for Vanilla Minecraft in Datapacks',
      },
    },
    'footer': {
      'about': 'About',
      'tools': 'Tools',
      'madewith': 'Made with',
      'inG': 'in Germany',
      'rightsReserved': 'All rights reserved',
      'privacyPolicy': 'Privacy Policy',
    }
  });
  TranslationService.initializeLocale('de', {
    'view': 'Anzeigen',
    'download': 'Downloaden',
    'articles': 'Artikel',
    'projects': 'Projekte',
    'contact': 'Kontakt',
    'search': 'Suchen',
    'landing': {
      'section1': {
        'title': 'Experimentiere',
        'subtitle': 'Mit neuen Konzepten',
        'text':
            'Bringe Minecraft an seine Grenzen und erschaffe Neues durch Tools'
      },
      'section2': {
        'title': 'Neues erforschen',
        'subtitle': 'Fange heute an',
        'text': 'Benutze Tools, lerne programmieren und verwandle Minecraft.',
        'button': 'Lerne Programmieren',
      },
      'learnProgramming': 'Learn Programming',
      'card_objd': {
        'desc': 'Ein Framework, um Datapacks zu generieren',
        'button': 'Lernen',
      },
      'card_mcscript': {
        'desc': 'Eine Programmiersprache für Minecraft',
      },
      'card_dmanager': {
        'desc': 'App fürs Teilen, Installieren und Verwalten von Datapacks',
      },
      'card_worldedit': {
        'desc': 'Worldedit für Vanilla Minecraft mit Datapacks',
      },
    },
    'footer': {
      'about': 'Über',
      'tools': 'Tools',
      'madewith': 'Mit',
      'inG': 'in Deutschland gemacht',
      'rightsReserved': 'Alle Rechte vorbehalten',
      'privacyPolicy': 'Datenschutzerklärung',
    }
  });

  runApp(ng.AppComponentNgFactory, createInjector: injector);
}
