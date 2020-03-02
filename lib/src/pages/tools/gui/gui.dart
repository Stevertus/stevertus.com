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
import 'package:objd_gui/gui.dart';
import 'package:stevertus/src/components/objd/item_selector/item.dart';

@Component(
  selector: 'gui_tool',
  styleUrls: ['gui.css', '../tools.css'],
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

  GuiToolPage(this.modalService) {
    addEmptyPage();
  }

  int currentPageIndex = 0;
  GuiPage get currentPage =>
      module.pages.isEmpty ? null : module.pages[currentPageIndex];

  GuiModule module = GuiModule.chest(
    Location(''),
    pages: [],
  );

  void containerChanged(int i) {
    selectedContainer = i;
    switch (i) {
      case 0:
        {
          module.container = GuiContainer.chest;
          module.targetEntity = null;
          module.blockLocation = Location('');
          break;
        }
      case 1:
        {
          module.container = GuiContainer.minecart;
          module.offset = Location('');
          module.minecartAlwaysActive = true;
          module.minecartName = TextComponent('');
          module.targetEntity = null;
          module.blockLocation = null;
          break;
        }
      case 2:
        {
          module.container = GuiContainer.minecart;
          module.targetEntity = Entity(tags: ['objd_gui_cart']);
          module.blockLocation = null;
          break;
        }
      case 3:
        {
          module.container = GuiContainer.dropper;
          module.blockLocation = Location('');
          module.targetEntity = null;
          break;
        }
      case 4:
        {
          module.container = GuiContainer.inventory;
          module.targetEntity = Entity.All();
          module.blockLocation = null;
          break;
        }
      case 5:
        {
          module.container = GuiContainer.enderchest;
          module.targetEntity = Entity.All();
          module.blockLocation = null;
          break;
        }
      case 6:
        {
          module.container = GuiContainer.hopper;
          module.targetEntity = null;
          module.blockLocation = Location('');
          break;
        }
    }
  }

  final guiSlots = [
    'None',
    'Interactive',
    'Empty',
    'Next Page',
    'Previous Page',
    'Specific Page',
    'Placeholder',
  ];
  int selectedGuiSlot;
  int selectedGuiType = 0;
  Item selectedSlotItem;
  int selectedSlotPage;
  String selectedSlotActions = '';
  String selectedCountScore = '';
  String selectedCountScoreEntity = '';

  void changeSlot(int i) {
    selectedGuiSlot = i;
    if (currentPage.slots.isNotEmpty) print(currentPage.slots.first.slot);
    final data = getSlotforIndex(i);

    if (data != null) {
      if (data is Interactive) {
        selectedGuiType = 1;
        selectedSlotActions = data.actions.map((a) => a.toString()).join('\n');
        selectedCountScore = data.countScore?.score ?? '';
        selectedCountScoreEntity = data.countScore?.entity?.toString() ?? '';
        selectedSlotItem = data.item;
      }
      if (data is EmptySlot) {
        selectedGuiType = 2;
      }
      if (data is ChangePage) {
        selectedSlotItem = data.item;
        switch (data.mode) {
          case ChangePageMode.next:
            {
              selectedGuiType = 3;
              break;
            }
          case ChangePageMode.prev:
            {
              selectedGuiType = 4;
              break;
            }
          case ChangePageMode.exact:
            {
              selectedSlotPage = data.page;
              selectedGuiType = 5;
              break;
            }
        }
      }
      if (data is Placeholder) {
        selectedSlotItem = Item.clone(data.item);
        selectedGuiType = 6;
      }
    } else {
      selectedGuiType = 0;
      selectedSlotItem = null;
      selectedSlotPage = null;
      selectedSlotActions = '';
      selectedCountScore = '';
      selectedCountScoreEntity = '';
    }
    modalService.open('gui_slot');
  }

  void slotChanged(Item i) {
    final existingData = getSlotforIndex(selectedGuiSlot);
    if (selectedGuiType == 0) {
      if (existingData != null) {
        currentPage.slots.remove(existingData);
      }
      return;
    }

    Slot slot = Slot.chest(selectedGuiSlot + 1);

    if (selected == 'Inventory') slot = Slot.inv(selectedGuiSlot + 1);

    GuiSlot selectedSlot;
    switch (selectedGuiType) {
      case 1:
        {
          List<Command> commands =
              selectedSlotActions.split('\n').map((a) => Command(a)).toList();

          Score score;

          if (selectedCountScore.isNotEmpty &&
              selectedCountScoreEntity.isNotEmpty) {
            score = Score(
                Entity.Select(Selector.parse(selectedCountScoreEntity)),
                selectedCountScore);
          }
          selectedSlot = Interactive(
            i,
            slot: slot,
            actions: commands,
            countScore: score,
          );
          break;
        }

      case 2:
        {
          selectedSlot = EmptySlot(slot: slot);
          break;
        }
      case 3:
        {
          selectedSlot = ChangePage.next(i, slot: slot);
          break;
        }
      case 4:
        {
          selectedSlot = ChangePage.prev(i, slot: slot);
          break;
        }
      case 5:
        {
          selectedSlot = ChangePage(selectedSlotPage, i, slot: slot);
          break;
        }
      case 6:
        {
          selectedSlot = Placeholder(
            item: i.getId().isNotEmpty ? i : null,
            slot: slot,
          );
          break;
        }
    }

    if (existingData != null) {
      currentPage.slots.remove(existingData);
    }

    currentPage.slots.add(selectedSlot);
  }

  bool get showItemInputs => selectedGuiType != 0 && selectedGuiType != 2;

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

  void controlPages(bool isRight) {
    if (isRight) {
      if (currentPageIndex >= module.pages.length - 1) {
        addEmptyPage();
      }
      currentPageIndex++;
    } else {
      currentPageIndex--;
    }
  }

  void addEmptyPage() {
    module.pages.add(
      GuiPage([],
          fillEmptySlots: currentPage?.fillEmptySlots ?? false,
          placeholder: currentPage?.placeholder != null
              ? Item.clone(currentPage.placeholder)
              : null),
    );
  }

  String getImageUrl(int i) {
    final slot = getSlotforIndex(i);
    print(slot?.slot);
    if (slot == null) return '';
    if (slot is Interactive && slot.item.getId() != null) {
      return "https://minecraftitemids.com/item/64/${slot.item.getId()}.png";
    }
    if (slot is Placeholder && slot.item.getId() != null) {
      return "https://minecraftitemids.com/item/64/${slot.item.getId()}.png";
    }
    if (slot is ChangePage && slot.item.getId() != null) {
      return "https://minecraftitemids.com/item/64/${slot.item.getId()}.png";
    }
    return '';
  }

  String getTextForIndex(int i) {
    final slot = getSlotforIndex(i);
    if (slot == null) return '';
    if (slot is EmptySlot) return 'Empty';
    if (slot is Placeholder) return 'Placeholder';
    if (slot is Interactive) return slot.item?.count?.toString() ?? '';
    if (slot is ChangePage) {
      switch (slot.mode) {
        case ChangePageMode.exact:
          return 'Page: ${slot.page}';
        case ChangePageMode.next:
          return 'Next Page';
        case ChangePageMode.prev:
          return 'Prev Page';
      }
    }
    return '';
  }

  GuiSlot getSlotforIndex(int i) {
    //if(selected == 'Inventory') i = Slot.
    return currentPage.slots.firstWhere(
      (s) => s.slot.id == i,
      orElse: () => null,
    );
  }

  String getWidth() =>
      selected == 'Hopper' ? '58%' : (selected == 'Dropper' ? '40%' : null);

  bool get showLocation =>
      selected == 'Hopper' || selected == 'Dropper' || selected == 'Chest';

  String namespace = 'custom_gui';
  Map<String, String> generatedFiles;
  String errorText;

  void generate() {
    errorText = null;
    //table.recipes = recipes;

    // try {
    generatedFiles = getAllFiles(
      Project(
        name: '',
        generate: Pack(
          name: namespace,
          main: File('main'),
          load: File('load'),
          modules: [module],
        ),
      ),
    );
    // } catch (err) {
    //   errorText = err.toString();
    //   print(err);
    // }
  }

  void download() {
    if (module.offset != null && module.offset.location.isEmpty) {
      module.offset = null;
    }
    if (module.minecartName != null &&
        module.minecartName.value['text'].isEmpty) module.minecartName = null;
    generate();
    if (errorText == null) {
      saveAsZip(
        generatedFiles,
        namespace + ' - A GUI Datapack Generated by objD.zip',
      );
    }
  }
}
