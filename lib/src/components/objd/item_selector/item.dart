import 'dart:async';
import 'dart:convert';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:fluix_web/fluix/button/button.dart';
import 'package:fluix_web/fluix/input/input.dart';
import 'package:fluix_web/fluix/modal/modal_service.dart';
import 'package:fluix_web/fluix/multi_input/input.dart';
import 'package:objd/core.dart';
import 'package:fluix_web/fluix/modal/modal.dart';

@Component(
    selector: 'item-selector',
    styleUrls: ['item.css'],
    templateUrl: 'item.html',
    directives: [
      NgIf,
      Input,
      Output,
      FluidModal,
      FluidInput,
      FluidMultiInput,
      FluidButton,
      formDirectives
    ],
    providers: [ClassProvider(ModalService)])
class ItemSelectorComponent implements AfterChanges {
  // Nothing here yet. All logic is in TodoListComponent.

  final ModalService service;

  ItemSelectorComponent(this.service);

  @Input('item')
  Item item;

  final _itemChange = StreamController<Item>();
  @Output('itemChange')
  Stream<Item> get itemChange => _itemChange.stream;

  String errorMsg;

  String id;
  int _count;
  String get count => _count?.toString() ?? "";
  set count(String s) => _count = int.tryParse(s);
  String nbt;

  @override
  void ngAfterChanges() {
    print("check");
    if (item == null) item = Item("");
    id = item.getId();
    _count = item.count;
    nbt = json.encode(item.tag);

    print(id);
  }

  void submit() {
    errorMsg = null;
    item.type = ItemType(id);
    item.count = _count;
    try {
      item.tag = nbt.isNotEmpty ? json.decode(nbt) : {};
      _itemChange.add(item);
      service.close("crafting_item_selector");
    } catch (err) {
      errorMsg = err.toString();
      print(err);
    }
  }
}
