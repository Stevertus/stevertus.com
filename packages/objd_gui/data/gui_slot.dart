import 'package:objd/basic/types/slot.dart';

/// The data class GuiSlot actually defines what should happen where. Generally they can be defined as a pair of Item and Slot.
/// You give the generator the slot to place an item. Simple right?
/// Well it is a bit more customizable. There are multiple GuiSlot types that do different actions within the gui.
abstract class GuiSlot {
  final Slot slot;

  /// The data class GuiSlot actually defines what should happen where. Generally they can be defined as a pair of Item and Slot.
  /// You give the generator the slot to place an item. Simple right?
  /// Well it is a bit more customizable. There are multiple GuiSlot types that do different actions within the gui.

  GuiSlot(this.slot);

  GuiSlot applyWhenPossible();
}
