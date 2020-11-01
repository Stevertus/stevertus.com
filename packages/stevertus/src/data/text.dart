import 'package:stevertus/src/data/slices.dart';
import 'package:stevertus/src/data/text_parts.dart';

class TextSlice extends Slice {
  final List<TextPart> body;
  TextSlice(this.body);

  factory TextSlice.fromJson(List j) {
    List<TextPart> body = [];
    int i = 0;
    while (i < j.length) {
      final t = j[i];
      if (t != null && t["type"] != null) {
        switch (t["type"]) {
          case "list-item":
            {
              List<TextPart> items = [];
              while (i < j.length && j[i]["type"] == "list-item") {
                items.add(TextPart(getSpanParts(j[i]), j[i]["type"]));
                i++;
              }
              i--;
              body.add(ListTextPart(items));
              break;
            }
          case "o-list-item":
            {
              List<TextPart> items = [];
              while (i < j.length && j[i]["type"] == "o-list-item") {
                items.add(TextPart(getSpanParts(j[i]), j[i]["type"]));
                i++;
              }
              i--;
              body.add(ListTextPart.ordered(items));
              break;
            }
          case "image":
            {
              print(t);
              body.add(ImgTextPart(t["url"], t["alt"]));

              break;
            }

          default:
            body.add(TextPart(getSpanParts(t), t["type"]));
        }
      }
      i++;
    }

    return TextSlice(body);
  }
}
