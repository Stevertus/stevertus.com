import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/tag/tag.dart';
import 'package:ng_translate/ng_translate.dart';
import 'package:stevertus/src/components/doc_grid/grid.dart';
import 'package:stevertus/src/data/document.dart';
import 'package:stevertus/src/http.dart';
import 'package:fluix_web/fluix/spinner/spinner.dart';

@Component(
    selector: 'articles',
    styleUrls: ['articles.css'],
    templateUrl: 'articles.html',
    directives: [
      coreDirectives,
      DocumentGridComponent,
      FluidSpinner,
      FluidIcon,
      FluidInput,
      FluidTag,
      NgFor,
      NgIf,
      routerDirectives,
      formDirectives
    ],
    pipes: [TranslationPipe])
class ArticlesPage implements OnActivate {
  TranslationService lang;

  ArticlesPage(this.lang);

  bool loading = true;

  String searchInput = '';

  List<Document> articles = [];

  final List<String> allTags = ['worldedit', 'tool', 'objd'];

  Map<String, bool> tags = {};

  void toggleTag(String tag) {
    if (tags[tag] != null) {
      tags.remove(tag);
    } else {
      tags[tag] = true;
    }
    onSearch();
  }

  @override
  void onActivate(_, RouterState current) async {
    if (current.queryParameters['type'] != null) {
      tags = {current.queryParameters['type']!: true};
    }
    if (current.queryParameters['q'] != null) {
      searchInput = current.queryParameters['q']!;
    }
    onSearch();

    lang.localeChange.addListener((l) => onSearch());
  }

  void onSearch() {
    loading = true;
    getArticlePreviews(lang.currentLocale, tags.keys.toList(), searchInput)
        .then((val) {
      loading = false;
      articles = val;
    });
  }
}
