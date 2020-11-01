import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:stevertus/src/data/document.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'doc-preview',
  styleUrls: ['doc.css'],
  templateUrl: 'doc.html',
  directives: [FluidCard, RouterLink, Input, NgIf],
)
class DocumentPreviewComponent {
  @Input('document')
  Document doc;
  // Nothing here yet. All logic is in TodoListComponent.
}
