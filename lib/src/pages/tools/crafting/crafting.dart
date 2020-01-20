import 'package:angular/angular.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';

import 'package:objd/core.dart';
import 'package:objd_crafting/objd_crafting.dart';
import 'package:stevertus/src/components/objd/item_selector/item.dart';

@Component(
  selector: 'crafting_tool',
  styleUrls: ['crafting.css'],
  templateUrl: 'crafting.html',
  providers: [ClassProvider(ModalService)],
  directives: [NgIf, NgFor, FluidIcon, ItemSelectorComponent],
)
class CraftingToolPage implements OnInit {
  final ModalService modalService;

  CraftingToolPage(this.modalService);

  final slots = List.generate(9, (i) => i);

  List<Recipe> recipes = [];
  int currentIndex = 0;

  int selectedSlot = 0;

  Recipe get current => recipes[currentIndex];

  @override
  void ngOnInit() {
    if (recipes.isEmpty) addEmptyRecipe();
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
    recipes.add(Recipe(
      {1: Item(Items.carrot)},
      Item("stone"),
    ));
  }

  void switchPage(int index, [save = true]) {
    //if(save) this.saveToStorage()
    currentIndex = index;
  }

  void onSelect(int index) {
    print(index);
    modalService.open("crafting_item_selector");
    selectedSlot = index;
  }
}
