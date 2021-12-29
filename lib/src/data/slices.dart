import 'package:stevertus/src/data/document.dart';

abstract class Slice {}

class DownloadSlice extends Slice {
  final String title;
  final String link;
  DownloadSlice(this.title, this.link);

  factory DownloadSlice.fromJson(Map j) {
    final p = j['primary'];
    if (p == null || p['link'] == null || p['button_text'] == null) {
      throw ('DownloadSlice not decodable');
    }
    return DownloadSlice(
      p['button_text'][0]['text'],
      p['link']['url'],
    );
  }
}

class ImageSlice extends Slice {
  final double width;
  final double height;
  final String url;
  ImageSlice(this.url, this.width, this.height);

  factory ImageSlice.fromJson(Map j) {
    if (j['primary'] == null || j['primary']['img'] == null) {
      throw ('ImageSlice not decodable');
    }
    final Map img = j['primary']['img'];
    if (img['url'] == null || img['dimensions'] == null) {
      throw ('ImageSlice not decodable');
    }
    return ImageSlice(
      img['url'],
      img['dimensions']['width'],
      img['dimensions']['height'],
    );
  }
}

class RecommendedSlice extends Slice {
  final List<Document> recommended;
  RecommendedSlice(this.recommended);

  factory RecommendedSlice.fromJson(List j) {
    final articles = <Document>[];
    for (Map m in j) {
      if (m['recomm'] != null) {
        try {
          final art = Document.fromJson(m['recomm']);
          articles.add(art);
        } catch (err) {
          print(err);
        }
      }
    }
    return RecommendedSlice(articles);
  }
}
