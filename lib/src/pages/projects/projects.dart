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
  selector: 'projects',
  styleUrls: ['projects.css'],
  templateUrl: 'projects.html',
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
    formDirectives,
  ],
)
class ProjectsPage implements OnInit {
  bool loading = true;
  TranslationService lang;

  ProjectsPage(this.lang);

  List<Document> projects = [];

  @override
  void ngOnInit() {
    loadProjects(lang.currentLocale);

    lang.localeChange.addListener(loadProjects);
  }

  void loadProjects(String locale) {
    loading = true;
    getProjects(lang.currentLocale).then((val) {
      loading = false;
      projects = val;
    });
  }
}
