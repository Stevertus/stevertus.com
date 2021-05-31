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

import 'package:ng_translate/ng_translate.dart';

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
  providers: [ClassProvider(ModalService)],
  pipes: [TranslationPipe],
)
class ItemSelectorComponent implements AfterChanges {
  // Nothing here yet. All logic is in TodoListComponent.

  final ModalService service;

  ItemSelectorComponent(this.service);

  @Input()
  Item item;
  @Input()
  String name;
  @Input()
  bool showId = true;
  @Input()
  bool showCount = true;
  @Input()
  bool showNbt = true;
  @Input()
  bool showModel = true;

  final _itemChange = StreamController<Item>();
  @Output('itemChange')
  Stream<Item> get itemChange => _itemChange.stream;

  String errorMsg;

  String id;
  int model;
  int count;
  String nbt;

  @override
  void ngAfterChanges() {
    name ??= 'item_selector';
    item ??= Item('');
    id = item.getId();
    model = item.tag['CustomModelData'];
    count = item.count;
    nbt = gson.encode(item.tag);
    if (nbt == '{}') nbt = '';
  }

  void submit() {
    errorMsg = null;
    try {
      Map<String, dynamic> tag = nbt.isNotEmpty ? gson.decode(nbt) : {};
      _itemChange.add(
        id.isEmpty
            ? null
            : item.copyWith(nbt: tag, type: id, model: model, count: count),
      );
      item = Item('');
      service.close(name);
    } catch (err) {
      errorMsg = err.toString();
      print(err);
    }
  }
}
