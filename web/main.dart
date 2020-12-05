import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:ng_translate/ng_translate.dart';
import 'package:stevertus/app_component.template.dart' as ng;

import 'main.template.dart' as self;

@GenerateInjector(
  routerProvidersHash, // You can use routerProviders in production
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
    'selectItem': 'Please select your item',
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
    'selectItem': 'Item auswählen',
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
  TranslationService.initializeLocale('zh', {
    'view': '浏览',
    'download': '下载',
    'articles': '文章',
    'projects': '项目',
    'videos': '视频',
    'contact': '联系',
    'search': '搜索',
    'page': '页面',
    'of': 'of',
    'project': '项目',
    'namespace': '项目命名空间',
    'selectItem': '请选择你的物品',
    'landing': {
      'section1': {
        'title': '体验',
        'subtitle': '全新的点子',
        'text': '将Minecraft推至其极限，创造新的点子及工具'
      },
      'section2': {
        'title': '创造',
        'subtitle': '从现在开始',
        'text': '使用工具，编程来改造Minecraft',
        'button': '学习编程'
      },
      'learnProgramming': '学习编程',
      'card_objd': {'title': 'objD', 'desc': '数据包生成框架', 'button': '开始使用'},
      'card_mcscript': {'title': 'mcscript', 'desc': '为Minecraft服务的编程语言'},
      'card_dmanager': {'title': 'dManager', 'desc': '用于分享，安装，管理数据包的应用'},
      'card_worldedit': {
        'title': 'Vanilla Worldedit',
        'desc': '用于原版Minecraft的Worldedit数据包'
      }
    },
    'footer': {
      'about': '关于',
      'tools': '工具',
      'madewith': 'Made with',
      'inG': 'in Germany',
      'rightsReserved': 'All rights reserved',
      'privacyPolicy': 'Privacy Policy'
    },
    'gui': {
      'fillEmptySlots': '使用以下占位符填满所有未被占用的槽位',
      'blockLocation': '方块位置',
      'gui_trigger': '选择会触发GUI的物品',
      'minecartName': '自定义矿车名称',
      'minecartAlwaysActive': '矿车总会在玩家面前显示',
      'offset': '自定义偏移量',
      'executeCommands': '执行命令...',
      'countScoreboard': '数量计分板',
      'countEntity': '数量实体',
      'pageNumber': '页码...',
      'selectItem': '选择你的物品',
      'placeholderItem': '该物品会替换所有未被定义的Placeholder槽位或所有未被占用的槽位',
      'handItem': '手持该物品会在你面前生成运输矿车'
    }
  });

  runApp(ng.AppComponentNgFactory, createInjector: injector);
}
