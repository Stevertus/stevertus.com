import 'package:stevertus/src/data/slices.dart';
import 'package:stevertus/src/data/text.dart';

class FullArticle {
  final String img;
  final String title;
  final DateTime date;
  final String video;
  final List<Slice> slices;
  FullArticle(
    this.title,
    this.img,
    this.date, {
    this.video = "",
    this.slices = const [],
  });

  factory FullArticle.fromJson(Map json) {
    String img = "";
    if (json["header"] != null && json["header"]["url"] != null) {
      img = json["header"]["url"];
    }

    String title = "";
    if (json["title"] != null && json["title"][0]["text"] != null) {
      title = json["title"][0]["text"];
    }

    DateTime date = DateTime.tryParse(json["date"]);

    String video;

    if (json["video"] != null && json["video"]["embed_url"] != null) {
      video = json["video"]["embed_url"].contains("v=")
          ? json["video"]["embed_url"].split("v=")[1]
          : json["video"]["embed_url"].split("/").last;
    }

    List<Slice> slices = [];

    if (json["slices"] != null) {
      json["slices"].forEach((slice) {
        Slice ret;

        if (slice["__typename"] == "ArticleSlicesText" &&
            slice["primary"] != null &&
            slice["primary"]["text"] != null) {
          ret = TextSlice.fromJson(slice["primary"]["text"]);
        }
        if (slice["__typename"] == "ArticleSlicesImage") {
          ret = ImageSlice.fromJson(slice);
        }
        if (slice["__typename"] == "ArticleSlicesRecommended" &&
            slice["fields"] != null) {
          ret = RecommendedSlice.fromJson(slice["fields"]);
        }
        if (slice["__typename"] == "ArticleSlicesDownload") {
          ret = DownloadSlice.fromJson(slice);
        }

        if (ret != null) slices.add(ret);
      });
    }

    return FullArticle(title, img, date, video: video, slices: slices);
  }

  @override
  String toString() {
    return "Title: $title \nImg: $img \nDate: $date \nVideo: $video \nSlices: ${slices.length}";
  }
}
