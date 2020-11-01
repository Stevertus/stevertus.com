import 'package:objd/basic/types/item.dart';
import 'package:objd/basic/types/slot.dart';

import 'gui_slot.dart';

/// This is a simple item that blocks the corresponding slot, can't be taken out and has no major actions. The placed item is the one specified as `placeholder` by the Module or the current Page. You can override it though by specifying an optional item.
class Placeholder extends GuiSlot {
  final Item item;

  /// This is a simple item that blocks the corresponding slot, can't be taken out and has no major actions. The placed item is the one specified as `placeholder` by the Module or the current Page. You can override it though by specifying an optional item.
  Placeholder({this.item, Slot slot}) : super(slot);

  @override
  Placeholder applyWhenPossible({Item item, Slot slot}) =>
      Placeholder(item: this.item ?? item, slot: this.slot ?? slot);
}
