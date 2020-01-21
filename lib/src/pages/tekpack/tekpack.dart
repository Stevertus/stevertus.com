import 'dart:html' as html;
import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:stevertus/src/http.dart' as http;
import 'package:stevertus/src/services/safe_url.dart';

@Component(
  selector: 'tekpack',
  styleUrls: ['tekpack.component.css'],
  templateUrl: 'tekpack.component.html',
  directives: [FluidCard, FluidButton, NgIf, NgFor],
  pipes: [SafeURLPipe],
)
class TekPackPage implements OnInit {
  List<TekPackItem> items = [];

  String video;
  Map changes;

  ngOnInit() {
    http.getJsonFile('tekpack.json').then((res) {
      video = res["video"];
      changes = res["changes"] ?? {};
      if (res["items"] != null) {
        for (var i = 0; i < res["items"].length; i++) {
          items.add(TekPackItem.fromJson(res["items"][i]));
        }
        print(items);
      }
    }).catchError((err) => print(err));
  }

  List getKeys(Map obj) => obj.keys.toList();

  void openLink(String url) {
    html.window.location.href = url;
  }
}

class TekPackItem {
  String name;
  String desc;
  bool isNotBlue;
  String texture;
  List<String> ingredients;

  TekPackItem(
    this.name,
    this.desc,
    this.texture,
    this.ingredients, {
    this.isNotBlue = false,
  });

  TekPackItem.fromJson(Map j) {
    name = j["name"] ?? "";
    desc = j["description"]?.replaceAll('\n', "<br>") ?? "";
    texture = j["texture"] ?? "";
    if (texture.startsWith('/')) texture = 'assets/tekpack' + texture;

    isNotBlue = j["isNotBlue"] != null ? j["isNotBlue"] : false;
    ingredients = [];

    // go through each possible slot
    for (int i = 0; i <= 8; i++) {
      // find the item with the current slot
      Map item = (j["crafting"] as List)
          .firstWhere((x) => x["slot"] == i, orElse: () => null);
      String texture;

      // if there is an item

      if (item != null && item["texture"] != null) {
        // set the texture
        texture = item["texture"];
        if (texture.startsWith('/')) texture = 'assets/tekpack' + texture;
      }

      // add the current texture(or null) to the list
      ingredients.add(texture);
    }
  }
}
