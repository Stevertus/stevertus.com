import 'package:objd/basic/types/slot.dart';

import 'gui_slot.dart';

/// The `EmptySlot` just makes sure that the specified slot is not filled or cleared at all so the user could put an item in there(This is only necessary when you use fillEmptySlots).

class EmptySlot extends GuiSlot {
  /// The `EmptySlot` just makes sure that the specified slot is not filled or cleared at all so the user could put an item in there(This is only necessary when you use fillEmptySlots).
  EmptySlot({Slot slot}) : super(slot);

  @override
  EmptySlot applyWhenPossible({Slot slot}) =>
      EmptySlot(slot: this.slot ?? slot);
}
