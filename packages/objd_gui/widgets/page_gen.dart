import 'package:objd/core.dart';
import 'package:objd_gui/data/change_page.dart';
import 'package:objd_gui/data/gui_slot.dart';
import 'package:objd_gui/data/interactive_slot.dart';
import 'package:objd_gui/data/items.dart';
import 'package:objd_gui/data/page.dart';
import 'package:objd_gui/data/placeholder.dart';
import 'package:objd_gui/gui.dart';

class PageGenerator extends Widget {
  int index;
  int totalPages;
  int fillMax;
  GuiPage page;
  GuiContainer container;
  List<Interactive> _slots;
  List<GuiSlot> globalSlots;
  String countScore;
  String pageScore;
  Item placeholder;

  PageGenerator(
    this.page,
    this.container,
    this.countScore,
    this.fillMax,
    this.pageScore,
    this.globalSlots,
    Item placeholder, [
    this.index,
    this.totalPages,
  ]) {
    this.placeholder = page.placeholder ?? placeholder;
    _slots = _getGenSlots();
  }

  List<Interactive> _getGenSlots() {
    final ret = <Interactive>[];
    final slots = page.slots;

    if (globalSlots != null) slots.addAll(globalSlots);

    final usedSlots = <int>[];

    // get all the ids that are already occupied
    for (var slot in slots) {
      if (slot.slot != null) {
        usedSlots.add(
          container == GuiContainer.inventory
              ? _toInvRow(slot.slot.id)
              : slot.slot.id,
        );
      }
    }

    var slotCounter = 0;

    for (var slot in slots) {
      Slot currentSlot;
      GuiSlot newSlot;

      if (slot.slot == null) {
        while (usedSlots.indexWhere((v) => v == slotCounter) >= 0) {
          slotCounter++;
        }

        currentSlot = _getSlotForContainer(container, slotCounter + 1);

        usedSlots.add(slotCounter);

        newSlot = slot;
        slotCounter++;
      } else {
        newSlot = slot.applyWhenPossible();
        currentSlot = slot.slot.clone();
      }

      if (slot is Placeholder) {
        final item = slot.item ?? placeholder;
        assert(
          item != null,
          'Please provide either an item for each placeholder or give a global placeholder!',
        );
        newSlot = Interactive(item);
      }
      if (slot is ChangePage) {
        final s = Score(Entity.Player(distance: Range.to(8)), pageScore);

        final actions = <Widget>[];

        if (slot.mode == ChangePageMode.exact) {
          actions.add(s >> slot.page);
        }
        if (slot.mode == ChangePageMode.next && index < totalPages) {
          actions.add(s + slot.page);
        }
        if (slot.mode == ChangePageMode.prev && index > 1) {
          actions.add(s - (-slot.page));
        }

        if (slot.mode == ChangePageMode.prev && index <= 1 ||
            slot.mode == ChangePageMode.next && index >= totalPages) {
          print(
            'WARNING! You tried to navigate to a page(${index + slot.page}) that is not in the stack.',
          );
        }

        newSlot = Interactive(slot.item, actions: actions);
      }

      if (newSlot != null && newSlot is Interactive) {
        var s = newSlot;

        final alreadyOccupied = ret.firstWhere(
          (slot) => slot.slot.id == currentSlot.id,
          orElse: () => null,
        );

        if (alreadyOccupied == null) {
          ret.add(
            s.applyWhenPossible(
              item: _createGuiItem(s.item, currentSlot),
              slot: currentSlot,
            ),
          );

          UsedItems.add(s.item.getId());
        }
      }
    }

    if (page.fillEmptySlots != null && page.fillEmptySlots) {
      assert(placeholder != null,
          'You have to provide a placeholder when using fillEmptySlots');

      UsedItems.add(placeholder.getId());

      var length = 27;
      if (fillMax != null) {
        length = fillMax;
      } else {
        if (container == GuiContainer.inventory) length = 36;
        if (container == GuiContainer.dropper) length = 9;
        if (container == GuiContainer.hopper) length = 5;
      }

      for (var i = 0; i < length; i++) {
        if (!usedSlots.contains(i)) {
          final slot = _getSlotForContainer(container, i + 1);
          ret.add(
            Interactive(_createGuiItem(placeholder, slot), slot: slot),
          );
        }
      }
    }

    return ret;
  }

  List<Widget> clear() {
    if (container == GuiContainer.inventory ||
        container == GuiContainer.enderchest ||
        container == GuiContainer.minecart) {
      return _slots
          .map((s) =>
              ReplaceItem(Entity.Self(), item: Item(Items.air), slot: s.slot))
          .toList();
    }

    return _slots
        .map((s) => ReplaceItem.block(
              Location.here(),
              item: Item(Items.air),
              slot: s.slot,
            ))
        .toList();
  }

  List<ReplaceItem> setItems() {
    if (container == GuiContainer.inventory ||
        container == GuiContainer.enderchest ||
        container == GuiContainer.minecart) {
      return _slots
          .map((s) => ReplaceItem(Entity.Self(), item: s.item, slot: s.slot))
          .toList();
    }

    return _slots
        .map((s) => ReplaceItem.block(
              Location.here(),
              item: s.item,
              slot: s.slot,
            ))
        .toList();
  }

  List<Widget> buildActionCommands(Interactive s,
          {dynamic copyFrom, String copyFromPath}) =>
      [
        if (s.actions != null) ...s.actions,
        If(Data.get(copyFrom, path: '$copyFromPath[{Slot:${s.slot.id}b}]'),
            then: [
              Summon(
                Entities.item,
                tags: ['objd_gui_dropitem'],
                nbt: {
                  'Item': Item(
                    Items.stone,
                    count: 1,
                    nbt: {
                      'objd': {'gui': true},
                    },
                  ).getMap(),
                },
              ),
              Data.copy(
                Entity(type: Entities.item, limit: 1, nbt: {
                  'Item': {
                    'tag': {
                      'objd': {'gui': true},
                    },
                  }
                }).sort(Sort.nearest),
                path: 'Item',
                from: copyFrom,
                fromPath: '$copyFromPath[{Slot:${s.slot.id}b}]',
              )
            ])
      ];

  List<Widget> itemActions() {
    return _slots.map((s) {
      var item = gson.encode(
        {
          'Slot': Byte(s.slot.id),
          'tag': {
            'objd': {'gui': true},
          },
        },
      );

      Data checkItem;
      var copyFrom;
      var copyFromPath = 'Items';

      switch (container) {
        case GuiContainer.inventory:
          {
            checkItem = Data.get(Entity.Self(), path: 'Inventory[$item]');
            copyFrom = Entity.Self();
            copyFromPath = 'Inventory';
            break;
          }
        case GuiContainer.enderchest:
          {
            checkItem = Data.get(Entity.Self(), path: 'EnderItems[$item]');
            copyFrom = Entity.Self();
            copyFromPath = 'EnderItems';
            break;
          }
        case GuiContainer.minecart:
          {
            checkItem = Data.get(Entity.Self(), path: 'Items[$item]');
            copyFrom = Entity.Self();
            break;
          }

        default:
          {
            checkItem = Data.get(Location.here(), path: 'Items[$item]');
            copyFrom = Location.here();
          }
      }

      // edge case if just one slot is occupied. Check for slot not needed
      if (_slots.length == 1) {
        return For.of(
          buildActionCommands(
            s,
            copyFrom: copyFrom,
            copyFromPath: copyFromPath,
          ),
        );
      }

      return If(
        Condition.not(checkItem),
        then: buildActionCommands(
          s,
          copyFrom: copyFrom,
          copyFromPath: copyFromPath,
        ),
      );
    }).toList();
  }

  @override
  Widget generate(Context context) {
    final page = Score(Entity.Player(distance: Range.to(8)), pageScore);
    final reset = [
      Kill(
        Entity(
          type: Entities.item,
          nbt: {
            'Item': {
              'tag': {
                'objd': {'gui': true}
              },
            },
          },
        ),
      ),
      ...itemActions(),
      Teleport.entity(
        Entity(
          type: Entities.item,
          tags: ['objd_gui_dropitem'],
        ),
        to: Entity.Player(
          distance: Range.to(8),
        ),
      ),
      Clear(
        Entity.All(distance: Range.to(20)),
        Item('#${context.packId}:all', nbt: {
          'objd': {'gui': true}
        }),
      ),
      File.execute(
        'gui/reset_gui${index}',
        child: For.of(setItems()),
      ),
      If(Condition.not(page & index), then: [
        File.execute(
          'gui/clear$index',
          child: For.of(clear()),
        ),
      ])
    ];

    final s = Score(Entity.Player(distance: Range.to(8)), countScore);

    Data getItemCount;
    var isPlayer = false;

    switch (container) {
      case GuiContainer.inventory:
        {
          isPlayer = true;
          getItemCount =
              Data.get(Entity.Self(), path: 'Inventory[].tag.objd.gui');
          break;
        }
      case GuiContainer.enderchest:
        {
          isPlayer = true;
          getItemCount =
              Data.get(Entity.Self(), path: 'EnderItems[].tag.objd.gui');
          break;
        }
      case GuiContainer.minecart:
        {
          getItemCount = Data.get(Entity.Self(), path: 'Items[].tag.objd.gui');
          break;
        }

      default:
        getItemCount = Data.get(Location.here(), path: 'Items[].tag.objd.gui');
    }

    var children = <Widget>[
      s,
      s.setToCondition(Condition.data(getItemCount)),
      If(s & 0, then: [
        File.execute(
          'gui/reset_gui${index}',
          create: false,
        ),
      ]),
      If(Condition.not(s & _slots.length), then: [
        File.execute(
          'gui/actions${index}',
          child: For.of(reset),
        ),
      ]),
    ];

    for (var slot in _slots) {
      if (slot.countScore != null) {
        children.add(If(slot.countScore > 0, then: [
          Builder((c) {
            if (isPlayer) {
              print(
                'WARNING! Currently you can\'t modify the data of a player. The count of the slot ${slot.slot.slot} cannot be modified!',
              );
            }
            if (container == GuiContainer.inventory) {
              return Data.fromScore(
                Entity.Self(),
                path: 'Inventory[{"Slot":${slot.slot.id}b }].Count',
                score: slot.countScore,
              );
            }
            if (container == GuiContainer.enderchest) {
              return Data.fromScore(
                Entity.Self(),
                path: 'EnderItems[{"Slot":${slot.slot.id}b }].Count',
                score: slot.countScore,
              );
            }
            if (container == GuiContainer.minecart) {
              return Data.fromScore(
                Entity.Self(),
                path: 'Items[{"Slot":${slot.slot.id}b }].Count',
                score: slot.countScore,
              );
            }
            return Data.fromScore(
              Location.here(),
              path: 'Items[{"Slot":${slot.slot.id}b }].Count',
              score: slot.countScore,
            );
          })
        ]));
      }
    }

    return For.of(children);
  }
}

int _toInvRow(int id) => id < 9 ? id + 27 : id - 9;

Slot _getSlotForContainer(GuiContainer container, int s) {
  switch (container) {
    case GuiContainer.inventory:
      {
        if (s > 36) {
          throw ('You specified too many items for the inventory!');
        }
        return Slot.inv(s);
      }
    case GuiContainer.chest:
      return Slot.chest(s);

    case GuiContainer.dropper:
      return Slot.drop(s);

    case GuiContainer.minecart:
      {
        if (s > 27) {
          throw ('You specified too many items for the minecart!');
        }
        return Slot.chest(s);
      }
    case GuiContainer.hopper:
      {
        if (s > 5) {
          throw ('You specified too many items for the hopper!');
        }
        return Slot.chest(s);
      }
    case GuiContainer.enderchest:
      return Slot.chest(s, null, true);
  }
  throw (UnsupportedError('$container is not supported'));
}

Item _createGuiItem(Item i, Slot s) => i.copyWith(
      slot: s,
      nbt: {
        'objd': {'gui': true}
      },
    );
