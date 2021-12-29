class TextPart {
  final List<TextPart> spans;
  final String type;
  final String text;

  TextPart(this.spans, this.type, {this.text = ''});
  TextPart.text(this.text, this.type) : spans = [];

  @override
  String toString() => '''
spans: $spans
type: $type
text: $text  
  ''';
}

class LinkTextPart extends TextPart {
  final String link;
  LinkTextPart(String text, this.link) : super([], 'hyperlink', text: text);
}

class ImgTextPart extends TextPart {
  final String url;
  ImgTextPart(this.url, String alt) : super([], 'image', text: alt);
}

class InternalLinkTextPart extends TextPart {
  final String uid;
  @override
  final String type;
  InternalLinkTextPart(
    String text,
    this.uid,
    this.type,
  ) : super([], 'link', text: text);
}

class ListTextPart extends TextPart {
  List<TextPart> items;
  ListTextPart(this.items) : super([], 'list');
  ListTextPart.ordered(this.items) : super([], 'o-list');

  @override
  String toString() => 'ListTextPart(items: $items)';
}

List<TextPart> getSpanParts(Map p) {
  final String text = p['text'];
  final ret = <TextPart>[];
  var start = 0;
  if (p['spans'] != null && p['spans'].length > 0) {
    for (var i = 0; i < p['spans'].length; i++) {
      final span = p['spans'][i];
      if (span['start'] != start) {
        ret.add(TextPart.text(text.substring(start, span['start']), 'text'));
      }

      if (span['type'] == 'hyperlink' && span['data'] != null) {
        if (span['data']['link_type'] == 'Document') {
          ret.add(InternalLinkTextPart(
            text.substring(span['start'], span['end']),
            span['data']['uid'],
            span['data']['type'],
          ));
        } else {
          ret.add(LinkTextPart(
            text.substring(span['start'], span['end']),
            span['data']['url'],
          ));
        }
      } else {
        ret.add(
          TextPart.text(
            text.substring(span['start'], span['end']),
            span['type'],
          ),
        );
      }

      start = span['end'];
    }
  }

  if (start < text.length) {
    ret.add(TextPart.text(
      text.substring(start, text.length),
      'text',
    ));
  }

  return ret;
}
