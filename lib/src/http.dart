import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:stevertus/src/data/article.dart';
import 'package:stevertus/src/data/document.dart';

const httpURI = "https://stevertus.com/";

const uri = "https://stevertuscom.cdn.prismic.io/";
const guri = uri + "graphql";

final client = http.Client();
String token;

Future _getToken() async {
  final res = await http.get(uri + 'api');
  if (res.body == null || res.statusCode != 200) return null;
  final body = json.decode(res.body);

  if (body["refs"] == null) return null;

  token = body["refs"][0]["ref"];
  return token;
}

Future<Map> query(String q) async {
  await _getToken();
  final res =
      await http.get(guri + "?query=" + q, headers: {"Prismic-ref": token});
  if (res.body == null || res.statusCode != 200) throw ("Request failed!");
  final body = json.decode(res.body);
  if (body == null) throw ("No Json body!");
  return body;
}

Future<List<Document>> getArticlePreviews(
    [List<String> tags, String search = ""]) async {
  String sTags = json.encode(tags);

  Map res = await query("""{
  allArticles(sortBy:date_DESC,fulltext: "${search}",tags_in:$sTags,lang:"en-us") {
    edges {
      node {
        header
        title
        description
        _meta {
          uid
        }
      }
    }
  }
}
""");
  if (res["data"] == null ||
      res["data"]["allArticles"] == null ||
      res["data"]["allArticles"]["edges"] == null) return [];

  List<Document> ret = [];

  for (Map<String, dynamic> article in res["data"]["allArticles"]["edges"]) {
    if (article["node"] != null) {
      final node = article["node"];
      ret.add(Document.fromJson(node));
    }
  }

  return ret;
}

Future<String> getTextFile(String url) async {
  final res = await http.get(url.startsWith("http") ? url : httpURI + url);
  if (res.body == null || res.statusCode != 200) throw ("Request failed!");
  return res.body;
}

Future<dynamic> getJsonFile(String url) async {
  final String inp = await getTextFile(url);
  return json.decode(inp);
}

Future<List<Document>> getProjects() async {
  Map res = await query("""{
  allProjects(sortBy:meta_firstPublicationDate_DESC,lang:"en-us") {
    edges {
      node {
        header
        link
        title
        description
      }
    }
  }
}
""");
  if (res["data"] == null ||
      res["data"]["allProjects"] == null ||
      res["data"]["allProjects"]["edges"] == null) return [];

  List<Document> ret = [];

  for (Map<String, dynamic> article in res["data"]["allProjects"]["edges"]) {
    if (article["node"] != null) {
      final node = article["node"];
      ret.add(Document.fromJson(node));
    }
  }

  return ret;
}

Future<FullArticle> getFullArticle(String uid) async {
  Map res = await query(r'''{
article(uid:"''' +
      uid +
      '''",lang: "en-us"){
  _meta{uid}
  header
  title
  date
  video
      slices {
        __typename
      ...on ArticleSlicesDownload{
        primary {
          button_text
          link {
          ...on _ExternalLink {url}
          ...on _FileLink {url}
          ...on _ImageLink{url}
        }
        }
      }
      ...on ArticleSlicesText {primary{text}}
      ...on ArticleSlicesRecommended {fields{recomm{...on Article{header,description,title,_meta{uid}}}}}
      ...on ArticleSlicesImage {primary{img}}
    }
}
}
''');

  if (res["data"] == null || res["data"]["article"] == null) return null;

  return FullArticle.fromJson(res["data"]["article"]);
}
