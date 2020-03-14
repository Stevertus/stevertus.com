import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:ng_translate/ng_translate.dart';
import 'package:stevertus/app_component.template.dart' as ng;

import 'main.template.dart' as self;

@GenerateInjector(routerProviders // You can use routerProviders in production
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
    'page': 'Page',
    'of': 'of',
    'project': 'Project',
    'namespace': 'Project namespace',
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
    },
    'gui': {
      'fillEmptySlots': 'Fill all empty slots with the placeholder below',
      'gui_placeholder': 'Select Placeholder Item',
      'blockLocation': 'Location of the block',
      'gui_trigger': 'Select Item that should trigger the GUI',
      'minecartName': 'Custom Minecart Name',
      'minecartAlwaysActive': 'Minecart is not hidden in front of the player',
      'offset': 'Custom Offset Location',
      'actionSelect': 'Please select your desired action:',
      'executeCommands': 'Commands to execute...',
      'countScoreboard': 'Count Scoreboard',
      'countEntity': 'Count Score Entity',
      'pageNumber': 'Page number...',
      'selectItem': 'Select your Item',
      'placeholderItem':
          'This item is applied to all placeholder slots that you did not specify or fills up the rest.',
      'handItem':
          'Hold this item in your hand and a minecart will be summoned in front of you.',
    }
  });
  TranslationService.initializeLocale('de', {
    'view': 'Anzeigen',
    'download': 'Download',
    'articles': 'Artikel',
    'projects': 'Projekte',
    'contact': 'Kontakt',
    'search': 'Suchen',
    'page': 'Seite',
    'of': 'von',
    'project': 'Projekt',
    'namespace': 'Projekt namespace',
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
    },
    'gui': {
      'fillEmptySlots': 'Fülle alle leeren Slots mit dem Placeholder',
      'gui_placeholder': 'Wähle Placeholder Item',
      'blockLocation': 'Location des Blockes',
      'gui_trigger': 'Wähle ein Item, das die GUI auslöst',
      'minecartAlwaysActive': 'Minecart wird immer vor dem Spieler angezeigt',
      'actionSelect': 'Bitte wähle deine Aktion:',
      'executeCommands': 'Commands zum Ausführen...',
      'pageNumber': 'Seitenzahl...',
      'selectItem': 'Wähle dein Item',
      'placeholderItem':
          'Dieses Item wird auf alle placeholder slots angewandt, die nicht überschrieben werden, oder füllt leere Slots',
      'handItem':
          'Halte dieses Item in deiner Hand und ein Minecart wird vor dir auftauchen.',
    }
  });

  runApp(ng.AppComponentNgFactory, createInjector: injector);
}
