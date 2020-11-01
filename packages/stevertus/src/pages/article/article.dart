import 'package:angular/angular.dart';
import 'package:angular/security.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/spinner/spinner.dart';
import 'package:ng_translate/ng_translate.dart';
import 'package:stevertus/src/data/article.dart';
import 'package:stevertus/src/http.dart';
import 'package:stevertus/src/pages/article/slices/slices.dart';
import 'package:stevertus/src/services/safe_url.dart';

@Component(
  selector: 'article',
  styleUrls: ['article.css'],
  templateUrl: 'article.html',
  directives: [
    coreDirectives,
    NgIf,
    FluidSpinner,
    FluidIcon,
    SafeURLPipe,
    SlicesComponent,
  ],
)
class ArticlePage implements OnActivate {
  TranslationService lang;

  FullArticle article;
  DomSanitizationService sanitizer;

  ArticlePage(this.sanitizer, this.lang);

  bool loading = true;

  bool playingVideo = false;

  SafeResourceUrl get safeVideoUrl => sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + article.video + '?rel=0;&autoplay=1');

  void getArticle(String id) async {
    loading = true;
    article = await getFullArticle(id, lang.currentLocale);
    loading = false;
  }

  @override
  void onActivate(_, RouterState current) {
    getArticle(current.parameters['id']);

    lang.localeChange.addListener((l) => getArticle(current.parameters['id']));
  }
}
