import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:fluix_web/fluix/checkbox/checkbox.dart';
import 'package:fluix_web/fluix/dropdown/dropdown.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';
import 'package:fluix_web/fluix/multi_input/input.dart';

import 'package:objd/core.dart';
// import 'package:objd_gui/objd_gui.dart';
import 'package:stevertus/src/components/objd/item_selector/item.dart';

@Component(
  selector: 'gui_tool',
  styleUrls: ['gui.css'],
  templateUrl: 'gui.html',
  providers: [ClassProvider(ModalService)],
  directives: [
    NgIf,
    NgFor,
    FluidIcon,
    FluidCard,
    FluidCheckbox,
    FluidButton,
    FluidInput,
    FluidDropdown,
    FluidMultiInput,
    ItemSelectorComponent,
    formDirectives
  ],
)
class GuiToolPage {
  final ModalService modalService;

  final containers = [
    'Chest',
    'HandItem',
    'Minecart',
    'Dropper',
    'Inventory',
    'Enderchest',
    'Hopper',
  ];

  String get selected => containers[selectedContainer];

  int selectedContainer = 0;

  GuiToolPage(this.modalService);

  Map<String, String> generatedFiles;
  String result;
  String errorText;

  void generate() {
    errorText = null;
    //table.recipes = recipes;

    try {
      // generatedFiles = getAllFiles(
      //   Project(name: table.name, generate: table),
      // );

      result = generatedFiles["data/craft/functions/recipes/craft.mcfunction"] +
          "\n" +
          generatedFiles["data/craft/functions/recipes/res_craft.mcfunction"];
    } catch (err) {
      errorText = err.toString();
      generatedFiles = {};
      print(err);
    }
  }

  int get columns {
    if (selected == 'Hopper') return 5;
    if (selected == 'Dropper') return 3;
    return 9;
  }

  List get slotCount {
    if (selected == 'Hopper') return List(5);
    if (selected == 'Dropper') return List(9);
    if (selected == 'Inventory') return List(36);
    return List(27);
  }

  String getWidth() =>
      selected == 'Hopper' ? '58%' : (selected == 'Dropper' ? '40%' : null);

  void download() {
    generate();
    //saveAsZip(generatedFiles, table.name + ".zip");
  }
}
