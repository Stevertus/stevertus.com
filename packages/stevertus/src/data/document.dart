class Document {
  final String img;
  final String title;
  final String description;
  final String url;

  Document(this.title, this.url, {this.description, this.img});

  factory Document.fromJson(Map json) {
    String url = "";

    if (json["_meta"] != null && json["_meta"]["uid"] != null) {
      url = "/article/" + json["_meta"]["uid"];
    }
    if (json["link"] != null) url = json["link"];

    String img = json["header"]["url"];

    if (json["header"]["thumbnail"] != null) {
      img = json["header"]["thumbnail"]["url"];
    }

    return Document(
      json["title"][0]["text"],
      url,
      description: json["description"][0]["text"],
      img: img,
    );
  }
}
