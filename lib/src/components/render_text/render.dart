import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:stevertus/src/data/text_parts.dart';

// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'render-text',
  styleUrls: ['render.css'],
  templateUrl: 'render.html',
  directives: [RouterLink, NgFor, NgIf, TextRenderComponent],
)
class TextRenderComponent {
  @Input('text')
  late List<TextPart> text;

  ListTextPart? getListText(TextPart p) => p is ListTextPart ? p : null;

  LinkTextPart? getLinkText(TextPart p) => p is LinkTextPart ? p : null;
  ImgTextPart? getImgText(TextPart p) => p is ImgTextPart ? p : null;
  InternalLinkTextPart? getIntLinkText(TextPart p) =>
      p is InternalLinkTextPart ? p : null;
  bool isRawText(TextPart p) => p.text.isNotEmpty;
}
