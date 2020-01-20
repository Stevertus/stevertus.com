import 'package:stevertus/src/data/document.dart';

abstract class Slice {}

class DownloadSlice extends Slice {
  final String title;
  final String link;
  DownloadSlice(this.title, this.link);

  factory DownloadSlice.fromJson(Map j) {
    final p = j["primary"];
    if (j == null ||
        p == null ||
        p["link"] == null ||
        p["button_text"] == null) {
      return null;
    }
    return DownloadSlice(
      p["button_text"][0]["text"],
      p["link"]["url"],
    );
  }
}

class ImageSlice extends Slice {
  final double width;
  final double height;
  final String url;
  ImageSlice(this.url, this.width, this.height);

  factory ImageSlice.fromJson(Map j) {
    if (j == null || j["primary"] == null || j["primary"]["img"] == null) {
      return null;
    }
    final Map img = j["primary"]["img"];
    if (img["url"] == null || img["dimensions"] == null) return null;
    return ImageSlice(
      img["url"],
      img["dimensions"]["width"],
      img["dimensions"]["height"],
    );
  }
}

class RecommendedSlice extends Slice {
  final List<Document> recommended;
  RecommendedSlice(this.recommended);

  factory RecommendedSlice.fromJson(List j) {
    List<Document> articles = [];
    for (Map m in j) {
      if (m["recomm"] != null) {
        final art = Document.fromJson(m["recomm"]);
        if (art != null) articles.add(art);
      }
    }
    return articles.isNotEmpty ? RecommendedSlice(articles) : null;
  }
}
