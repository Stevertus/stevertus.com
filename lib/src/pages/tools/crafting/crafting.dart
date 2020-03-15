import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:fluix_web/fluix/checkbox/checkbox.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';
import 'package:fluix_web/fluix/multi_input/input.dart';

import 'package:objd/core.dart';
import 'package:objd_crafting/objd_crafting.dart';
import 'package:stevertus/src/components/objd/item_selector/item.dart';

@Component(
  selector: 'crafting_tool',
  styleUrls: ['crafting.css', '../tools.css'],
  templateUrl: 'crafting.html',
  providers: [ClassProvider(ModalService)],
  directives: [
    NgIf,
    NgFor,
    FluidIcon,
    FluidCard,
    FluidCheckbox,
    FluidButton,
    FluidInput,
    FluidMultiInput,
    ItemSelectorComponent,
    formDirectives
  ],
)
class CraftingToolPage implements OnInit {
  final ModalService modalService;

  CraftingToolPage(this.modalService);

  final slots = List.generate(9, (i) => i + 1);

  CraftingTable table;

  List<Recipe> recipes = [];
  int currentIndex = 0;

  int selectedSlot = 0;

  Recipe get current => recipes[currentIndex];

  @override
  void ngOnInit() {
    if (recipes.isEmpty) addEmptyRecipe();
    table = CraftingTable();
    switchPage(0, false);
  }

  String getItemImage(Item i) =>
      "https://minecraftitemids.com/item/64/${i.getId()}.png";

  Item get selectedItem =>
      selectedSlot > 9 ? current.result : current.ingredients[selectedSlot];
  set selectedItem(Item s) => selectedSlot > 9
      ? current.result = s
      : current.ingredients[selectedSlot] = s;

  void controlPages(bool isRight) {
    if (isRight) {
      if (currentIndex >= recipes.length - 1) {
        addEmptyRecipe();
      }
      switchPage(currentIndex + 1);
    } else {
      switchPage(currentIndex - 1);
    }
  }

  void addEmptyRecipe() {
    recipes.add(
      Recipe({}, null),
    );
  }

  void switchPage(int index, [save = true]) {
    //if(save) this.saveToStorage()
    currentIndex = index;
  }

  void onSelect(int index) {
    modalService.open("crafting_item_selector");
    selectedSlot = index;
  }

  Map<String, String> generatedFiles;
  String result;
  String errorText;

  void generate() {
    errorText = null;
    table.recipes = recipes;

    try {
      generatedFiles = getAllFiles(
        Project(name: table.name, generate: table),
      );

      result = generatedFiles[
              "data/${table.name}/functions/recipes/craft.mcfunction"] +
          "\n" +
          generatedFiles[
              "data/${table.name}/functions/recipes/res_craft.mcfunction"];
    } catch (err) {
      errorText = err.toString();
      print(err);
      generatedFiles = {};
    }
  }

  void download() {
    generate();
    saveAsZip(generatedFiles, table.name + ".zip");
  }
}
