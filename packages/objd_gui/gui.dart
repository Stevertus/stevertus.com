library objd_gui;

import 'package:meta/meta.dart';
import 'package:objd/core.dart';
import 'package:objd_gui/data/gui_slot.dart';
import 'package:objd_gui/data/page.dart';
import 'package:objd_gui/widgets/all_tag.dart';
import 'package:objd_gui/widgets/page_gen.dart';

export 'package:objd_gui/data/page.dart';
export 'package:objd_gui/data/placeholder.dart';
export 'package:objd_gui/data/interactive_slot.dart';
export 'package:objd_gui/data/change_page.dart';
export 'package:objd_gui/data/empty.dart';
export 'package:objd_gui/data/gui_slot.dart';

const _DEF_Count = 'objd_gui_count';
const _DEF_Page = 'objd_gui_page';

/// You can use this in your `modules` list in a pack or include it as usual widget somewhere in case you want to run it conditionally.
///
/// For each container type and size there is one constructor: GuiModule.chest, GuiModule.dropper, GuiModule.hopper, GuiModule.enderchest,   GuiModule.inventory, GuiModule.minecart and GuiModule.item.

class GuiModule extends Module {
  GuiContainer container;
  Location blockLocation;
  Entity targetEntity;
  List<GuiPage> pages;
  List<GuiSlot> globalSlots;
  Item placeholder;
  String countScore;
  String pageScore;
  int fillMax;
  Item triggerGui;
  Location offset;
  bool minecartAlwaysActive;
  TextComponent minecartName;

  GuiModule._(
    this.container,
    this.blockLocation,
    this.targetEntity,
    this.pages,
    this.placeholder,
    this.countScore,
    this.pageScore,
    this.globalSlots, {
    this.fillMax,
    this.triggerGui,
    this.offset,
    this.minecartAlwaysActive,
    this.minecartName,
  });

  factory GuiModule.chest(
    Location target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.chest,
        target,
        null,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
      );

  factory GuiModule.dropper(
    Location target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.dropper,
        target,
        null,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
      );
  factory GuiModule.hopper(
    Location target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.hopper,
        target,
        null,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
      );
  factory GuiModule.inventory(
    Entity target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    bool fillHotbar = false,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.inventory,
        null,
        target,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
        fillMax: fillHotbar ? null : 27,
      );

  factory GuiModule.enderchest(
    Entity target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.enderchest,
        null,
        target,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
      );
  factory GuiModule.minecart(
    Entity target, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.minecart,
        null,
        target,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
      );

  /// objd_gui also includes the feature to show and hide the gui(as a minecart) if the player holds a specific item in their hand. So this acts kind of like a game menu or portable menu. Therefore a few additional arguments can be specified.
  ///
  /// ```dart
  /// GuiModule.item(
  /// 	Item(Items.stone),
  /// 	alwaysActive: false,
  /// 	name: TextComponent('my awesome gui'),
  /// )
  /// ```
  ///
  /// The Item is obviously the item that you want to detect, you can also provide nbt or custommodels here.
  /// With the alwaysActive option you can toggle whether the Gui should appear always in front of the player or just in the floor when you look straight down (you can also provide a custom location with `offset`).
  /// And you can give the corresponding Minecart a custom name that will be displayed in the gui.
  factory GuiModule.item(
    Item handItem, {
    @required List<GuiPage> pages,
    Item placeholder,
    String countScore = _DEF_Count,
    String pageScore = _DEF_Page,
    Location offset,
    bool alwaysActive = true,
    TextComponent name,
    List<GuiSlot> globalSlots,
  }) =>
      GuiModule._(
        GuiContainer.minecart,
        null,
        null,
        pages,
        placeholder,
        countScore,
        pageScore,
        globalSlots,
        triggerGui: handItem,
        offset: offset,
        minecartAlwaysActive: alwaysActive,
        minecartName: name,
      );

  List<PageGenerator> _pageGens;

  Widget _mainContent(Entity targetE) {
    _pageGens = pages
        .map(
          (p) => PageGenerator(
            p,
            container,
            countScore,
            fillMax,
            pageScore,
            globalSlots,
            placeholder,
            pages.indexOf(p) + 1,
            pages.length,
          ),
        )
        .toList();
    final main = File.execute(
      'gui/main',
      child: Builder(
        (context) {
          final score = Score(
            Entity.Player(distance: Range.to(8)),
            pageScore,
          );
          return For.of([
            if (_pageGens.length == 1) _pageGens.first,
            if (_pageGens.length > 1)
              If(Condition.not(score > 0), then: [score >> 1]),
            if (_pageGens.length > 1)
              ..._pageGens
                  .map(
                    (p) => If(
                      score & p.index,
                      then: [
                        score,
                        File.execute(
                          'gui/gui${p.index}',
                          child: p,
                        )
                      ],
                    ),
                  )
                  .toList(),
            if (blockLocation != null || container == GuiContainer.minecart)
              If(
                Condition.block(Location.rel(y: -1), block: Blocks.hopper),
                then: [
                  Data.merge(
                    Location.rel(y: -1),
                    nbt: {
                      'TransferCooldown': 20,
                    },
                  )
                ],
              )
          ]);
        },
      ),
    );
    if (blockLocation != null) {
      return Execute.positioned(blockLocation, children: [main, TagAll()]);
    }
    if (targetE != null) {
      return Execute.asat(targetE, children: [main, TagAll()]);
    }

    throw ('Please provide a non-null argument in the GuiModule');
  }

  @override
  Widget generate(Context context) {
    assert(pages != null && pages.isNotEmpty);

    var target = targetEntity;

    var dOffset = offset;
    final main = <Widget>[];

    if (triggerGui != null) {
      target ??=
          Entity(type: Entities.chest_minecart, tags: ['objd_gui_container']);
      dOffset ??= (minecartAlwaysActive
          ? Location.local(z: 3)
          : Location.rel(y: -0.69));
      main.addAll([
        Execute.as(
          Entity.All(
            nbt: {'SelectedItem': triggerGui.getMap()},
            verticalRotation: minecartAlwaysActive ? null : Range.from(80),
          ),
          children: [
            Tag('objd_has_gui_item'),
          ],
        ),
        Execute.asat(
          target,
          children: [
            If(
                Condition.not(
                  Entity(tags: ['objd_has_gui_item'], distance: Range.to(8)),
                ),
                then: [
                  File.execute(
                    'gui/removecart',
                    child: For.of([
                      Teleport(Entity.Self(), to: Location('~ -500 ~')),
                      Data.merge(Entity.Self(), nbt: {'Items': []}),
                      Kill(),
                    ]),
                  )
                ]),
          ],
        ),
        Execute.as(
          Entity(tags: ['objd_had_gui_item']).not(tags: ['objd_has_gui_item']),
          children: [
            Tag('objd_had_gui_item').remove(),
          ],
        ),
        Execute.asat(
          Entity.All(tags: ['objd_has_gui_item'])
              .not(tags: ['objd_had_gui_item']),
          children: [
            File.execute(
              'gui/summoncart',
              child: Summon(
                Entities.chest_minecart,
                location: dOffset,
                name: minecartName,
                tags: ['objd_gui_container'],
                nbt: {
                  'CustomDisplayTile': 1,
                  'DisplayState': {'Name': 'air'},
                  'DisplayOffset': 1
                },
              ),
            ),
          ],
        ).anchored(Facing.eyes),
        Execute.asat(
          Entity.All(tags: ['objd_has_gui_item']),
          children: [
            Teleport(
              target.copyWith(distance: Range.to(8)).sort(Sort.nearest),
              to: dOffset,
            ),
            Tag('objd_had_gui_item'),
            Tag('objd_has_gui_item').remove(),
          ],
        ).anchored(Facing.eyes),
      ]);
    }

    main.add(_mainContent(target));

    return For.of(main);
  }

  @override
  List<File> registerFiles() => [
        File(
          'gui/clear',
          child: Builder(
            (context) {
              if (_pageGens.length == 1) return For.of(_pageGens.first.clear());

              final score = Score(
                Entity.Player(distance: Range.to(8)),
                pageScore,
              );
              return For.of(
                _pageGens
                    .map(
                      (p) => If(
                        score & p.index,
                        then: [
                          File.execute('/gui/clear${p.index}', create: false)
                        ],
                      ),
                    )
                    .toList(),
              );
            },
          ),
        ),
      ];
}

enum GuiContainer {
  dropper,
  chest,
  enderchest,
  inventory,
  minecart,
  hopper,
}
