import 'dart:html';

import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:stevertus/src/components/doc_grid/grid.dart';
import 'package:stevertus/src/components/render_text/render.dart';
import 'package:stevertus/src/data/slices.dart';
import 'package:stevertus/src/data/text.dart';

@Component(
  selector: 'article-slices',
  styleUrls: ['slices.css'],
  templateUrl: 'slices.html',
  directives: [
    Input,
    NgFor,
    NgIf,
    FluidButton,
    TextRenderComponent,
    DocumentGridComponent
  ],
)
class SlicesComponent {
  @Input('slices')
  List<Slice> slices;

  bool checkType<T>(val) => val is T;
  DownloadSlice checkDownload(val) => val is DownloadSlice ? val : null;
  ImageSlice checkImage(val) => val is ImageSlice ? val : null;
  TextSlice checkText(val) => val is TextSlice ? val : null;
  RecommendedSlice checkRecommendations(val) =>
      val is RecommendedSlice ? val : null;

  openDownloadLink(DownloadSlice slice) {
    window.location.href = slice.link;
  }
}
