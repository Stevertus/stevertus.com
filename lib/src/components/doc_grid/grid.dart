import 'dart:html' as html;

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:stevertus/src/components/doc_preview/doc.dart';
import 'package:stevertus/src/data/document.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'doc-grid',
  styleUrls: ['grid.css'],
  templateUrl: 'grid.html',
  directives: [DocumentPreviewComponent, NgFor, RouterLink],
)
class DocumentGridComponent {
  Router router;

  DocumentGridComponent(this.router);

  @Input('documents')
  late List<Document> documents;
  @Input('scroll')
  bool scroll = false;

  String? getInternalLink(Document doc) =>
      doc.url.startsWith('http') ? null : doc.url;

  void openDocument(Document doc) {
    final isExternal = doc.url.startsWith('http');

    if (isExternal) {
      html.window.location.href = doc.url;
    } else {
      router.navigateByUrl(doc.url);
    }
  }
}
