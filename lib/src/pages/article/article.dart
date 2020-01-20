import 'package:angular/angular.dart';
import 'package:angular/security.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/spinner/spinner.dart';
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
  FullArticle article;
  DomSanitizationService sanitizer;

  ArticlePage(this.sanitizer);

  bool loading = true;

  bool playingVideo = false;

  get safeVideoUrl => sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + article.video + '?rel=0;&autoplay=1');

  @override
  void onActivate(_, RouterState current) async {
    article = await getFullArticle(current.parameters["id"]);
    loading = false;
  }
}
