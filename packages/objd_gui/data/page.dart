import 'package:objd/basic/types/item.dart';

import 'gui_slot.dart';

/// Your guis can be seperated in multiple pages. The pages can be switched and display different content or have different functionality. So for each page the entire Gui is built again.

class GuiPage {
  List<GuiSlot> slots;
  Item placeholder;
  bool fillEmptySlots;

  /// Your guis can be seperated in multiple pages. The pages can be switched and display different content or have different functionality. So for each page the entire Gui is built again.
  ///
  /// ```dart
  /// GuiModule.chest(
  /// 		Location('-49 56 -36')
  /// 		pages: [
  /// 			GuiPage(
  /// 				[
  /// 					...
  /// 				],
  /// 				fillEmptySlots: true,
  /// 				placeholder: Item(Items.gray_stained_glass_pane)
  /// 			)
  /// 		]
  /// )
  /// ```
  ///
  /// Each Page requires a list of GuiSlots, that should be placed in the current Gui. With the `fillEmptySlots` option you can toggle, whether the slots that are not specified should be filled and blocked with either the `placeholder` provided by the page itself or if not available by the placeholder of the GuiModule.
  GuiPage(
    this.slots, {
    this.placeholder,
    this.fillEmptySlots,
  }) : assert(slots != null);
}
