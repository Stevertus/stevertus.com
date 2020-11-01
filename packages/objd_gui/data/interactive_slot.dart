import 'package:objd/basic/score.dart';
import 'package:objd/basic/types/item.dart';
import 'package:objd/basic/types/slot.dart';
import 'package:objd/basic/widget.dart';

import 'gui_slot.dart';

/// With this type you can literally do everything. In its core it is just an clickable item in your Gui.  You can optionally specify a set of Widgets(actions) that should run when the item has been clicked. Additionally you can also give it a `countScore` that modifies the count of the item(Great for option gui, sliders, displaying data, etc). The Item is required here.

class Interactive extends GuiSlot {
  final Item item;
  final List<Widget> _actions;
  final Score countScore;

  List<Widget> get actions => _actions ?? [];

  /// With this type you can literally do everything. In its core it is just an clickable item in your Gui.  You can optionally specify a set of Widgets(actions) that should run when the item has been clicked. Additionally you can also give it a `countScore` that modifies the count of the item(Great for option gui, sliders, displaying data, etc). The Item is required here.
  Interactive(
    this.item, {
    Slot slot,
    List<Widget> actions,
    this.countScore,
  })  : _actions = actions,
        assert(item != null),
        super(slot);

  @override
  Interactive applyWhenPossible({
    Item item,
    Slot slot,
    List<Widget> actions,
    Score count,
  }) =>
      Interactive(
        item ?? this.item,
        slot: slot ?? this.slot,
        actions: actions ?? this.actions,
        countScore: count ?? countScore,
      );
}
