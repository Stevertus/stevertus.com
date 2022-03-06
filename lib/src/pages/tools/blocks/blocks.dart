import 'dart:html';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/card/card.dart';
import 'package:fluix_web/fluix/checkbox/checkbox.dart';
import 'package:fluix_web/fluix/icon/icon.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/list/list.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';
import 'package:fluix_web/fluix/multi_input/input.dart';

import 'package:objd/core.dart';
import 'package:objd/custom_block.dart';
import 'package:stevertus/src/components/objd/item_selector/item.dart';
import 'package:stevertus/src/components/version_dropdown/dropdown.dart';

@Component(
  selector: 'blocks_tool',
  styleUrls: ['blocks.css', '../tools.css'],
  templateUrl: 'blocks.html',
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
    FluidList,
    FluidListItem,
    ItemSelectorComponent,
    VersionDropdown,
    formDirectives
  ],
)
class BlocksToolPage implements OnInit {
  final ModalService modalService;

  BlocksToolPage(this.modalService);

  var blocks = <CustomBlock>[];
  int selectedIndex = 0;
  CustomBlock? selected;
  int mcversion = 18;

  String get id => selected!.id.isNotEmpty
      ? selected!.id
      : selected!.name!.toLowerCase().replaceAll(RegExp(r'\s'), '_');
  set id(String s) => s == id ? null : selected!.id = s;

  set blockid(String s) => selected!.block = Block(s);
  String get blockid => selected!.block.toString();
  set tags(String s) => selected!.tags = s.split(' ');
  String get tags => selected!.tags.join(' ');

  @override
  void ngOnInit() {
    add();
  }

  void add() {
    selectedIndex = blocks.length;
    var b = CustomBlock(
      '',
      Item('chicken_spawn_egg'),
      block: Block(''),
      name: 'Untitled',
      generatePack: false,
    );
    blocks.add(b);
    selected = b;
  }

  void changeSelected(int i) {
    selected?.id = id;

    if (blocks.length > i) {
      selectedIndex = i;
      selected = blocks[i];
    }
  }

  String? errorText;

  Map<String, String> generatedFiles = {};

  void generate() {
    selected?.id = id;
    errorText = null;

    try {
      for (final b in blocks) {
        b.breakItem = Item(b.block);
      }

      generatedFiles = getAllFiles(
        Project(
          name: '',
          version: mcversion,
          generate: Pack(
            name: 'customblocks',
            modules: blocks,
          ),
        ),
      );
    } catch (err) {
      errorText = err.toString();
      print(err);
      generatedFiles = {};
    }
  }

  void download() {
    generate();
    if (generatedFiles.isNotEmpty && errorText == null) {
      saveAsZip(generatedFiles, 'Custom Blocks Generated by Stevertus.zip');
    }
  }
}
