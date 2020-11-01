define(['dart_sdk', 'packages/objd/build/context', 'packages/objd/build/gen_options', 'packages/objd/build/io_html', 'packages/archive/src/archive', 'packages/colorize/colorize', 'packages/objd/basic/types/block', 'packages/gson/decoder', 'packages/objd/basic/types/rotation', 'packages/objd/basic/types/particles', 'packages/objd/basic/types/slot', 'packages/gson/values', 'packages/objd/basic/parsable', 'packages/objd/basic/types/attribute', 'packages/objd/external/predicates/tag'], (function load__packages__objd__basic__command(dart_sdk, packages__objd__build__context, packages__objd__build__gen_options, packages__objd__build__io_html, packages__archive__src__archive, packages__colorize__colorize, packages__objd__basic__types__block, packages__gson__decoder, packages__objd__basic__types__rotation, packages__objd__basic__types__particles, packages__objd__basic__types__slot, packages__gson__values, packages__objd__basic__parsable, packages__objd__basic__types__attribute, packages__objd__external__predicates__tag) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const context$ = packages__objd__build__context.build__context;
  const gen_options = packages__objd__build__gen_options.build__gen_options;
  const io_html = packages__objd__build__io_html.build__io_html;
  const archive$ = packages__archive__src__archive.src__archive;
  const archive_file = packages__archive__src__archive.src__archive_file;
  const zip_encoder = packages__archive__src__archive.src__zip_encoder;
  const colorize = packages__colorize__colorize.colorize;
  const block = packages__objd__basic__types__block.basic__types__block;
  const gson = packages__gson__decoder.gson;
  const rotation = packages__objd__basic__types__rotation.basic__types__rotation;
  const particles = packages__objd__basic__types__particles.basic__types__particles;
  const slot$ = packages__objd__basic__types__slot.basic__types__slot;
  const values = packages__gson__values.values;
  const parsable = packages__objd__basic__parsable.basic__parsable;
  const attribute = packages__objd__basic__types__attribute.basic__types__attribute;
  const tag = packages__objd__external__predicates__tag.external__predicates__tag;
  var do_loop = Object.create(dart.library);
  var core$ = Object.create(dart.library);
  var widgets = Object.create(dart.library);
  var player_join = Object.create(dart.library);
  var pass_trait = Object.create(dart.library);
  var widget = Object.create(dart.library);
  var build = Object.create(dart.library);
  var project = Object.create(dart.library);
  var reloader = Object.create(dart.library);
  var buildProject = Object.create(dart.library);
  var findPack = Object.create(dart.library);
  var pack = Object.create(dart.library);
  var module = Object.create(dart.library);
  var rest_action = Object.create(dart.library);
  var strait_widget = Object.create(dart.library);
  var for_list = Object.create(dart.library);
  var file = Object.create(dart.library);
  var comment = Object.create(dart.library);
  var widgets$ = Object.create(dart.library);
  var condition$ = Object.create(dart.library);
  var data$ = Object.create(dart.library);
  var location$ = Object.create(dart.library);
  var command$ = Object.create(dart.library);
  var text = Object.create(dart.library);
  var execute = Object.create(dart.library);
  var widgets$0 = Object.create(dart.library);
  var enchant = Object.create(dart.library);
  var entity$ = Object.create(dart.library);
  var entities = Object.create(dart.library);
  var item = Object.create(dart.library);
  var items = Object.create(dart.library);
  var summon = Object.create(dart.library);
  var effect$ = Object.create(dart.library);
  var text_components = Object.create(dart.library);
  var score$ = Object.create(dart.library);
  var $if = Object.create(dart.library);
  var group = Object.create(dart.library);
  var indexed_file = Object.create(dart.library);
  var scoreboard = Object.create(dart.library);
  var extend = Object.create(dart.library);
  var team$ = Object.create(dart.library);
  var selector = Object.create(dart.library);
  var tag$ = Object.create(dart.library);
  var area = Object.create(dart.library);
  var attribute$ = Object.create(dart.library);
  var spreadplayers = Object.create(dart.library);
  var spawnpoint = Object.create(dart.library);
  var spectate = Object.create(dart.library);
  var gamemode = Object.create(dart.library);
  var tp = Object.create(dart.library);
  var clear = Object.create(dart.library);
  var advancement$ = Object.create(dart.library);
  var bossbar = Object.create(dart.library);
  var trigger = Object.create(dart.library);
  var particle$ = Object.create(dart.library);
  var schedule = Object.create(dart.library);
  var kill = Object.create(dart.library);
  var teleport = Object.create(dart.library);
  var tellraw = Object.create(dart.library);
  var title = Object.create(dart.library);
  var say = Object.create(dart.library);
  var clone = Object.create(dart.library);
  var fill = Object.create(dart.library);
  var setblock = Object.create(dart.library);
  var replaceitem = Object.create(dart.library);
  var give = Object.create(dart.library);
  var predicate = Object.create(dart.library);
  var raw_file = Object.create(dart.library);
  var buildPack = Object.create(dart.library);
  var buildFile = Object.create(dart.library);
  var scan = Object.create(dart.library);
  var version_check = Object.create(dart.library);
  var server_version_check = Object.create(dart.library);
  var storage = Object.create(dart.library);
  var builder = Object.create(dart.library);
  var raycast = Object.create(dart.library);
  var foreach = Object.create(dart.library);
  var repeat = Object.create(dart.library);
  var randomScore = Object.create(dart.library);
  var hologram = Object.create(dart.library);
  var armorstand = Object.create(dart.library);
  var areaeffectcloud = Object.create(dart.library);
  var log = Object.create(dart.library);
  var aroundlocation = Object.create(dart.library);
  var timer = Object.create(dart.library);
  var modules = Object.create(dart.library);
  var click_event = Object.create(dart.library);
  var score_timer = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $indexOf = dartx.indexOf;
  var $first = dartx.first;
  var $any = dartx.any;
  var $last = dartx.last;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $toLowerCase = dartx.toLowerCase;
  var $addAll = dartx.addAll;
  var $replaceAll = dartx.replaceAll;
  var $substring = dartx.substring;
  var $startsWith = dartx.startsWith;
  var $split = dartx.split;
  var $isEmpty = dartx.isEmpty;
  var $insertAll = dartx.insertAll;
  var $insert = dartx.insert;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $trim = dartx.trim;
  var $where = dartx.where;
  var $contains = dartx.contains;
  var $keys = dartx.keys;
  var $_equals = dartx._equals;
  var $entries = dartx.entries;
  var $replaceFirst = dartx.replaceFirst;
  var $hashCode = dartx.hashCode;
  var $cast = dartx.cast;
  var $reversed = dartx.reversed;
  var $containsKey = dartx.containsKey;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $isNegative = dartx.isNegative;
  var $removeAt = dartx.removeAt;
  var $values = dartx.values;
  var $truncate = dartx.truncate;
  var ConditionL = () => (ConditionL = dart.constFn(dart.legacy(condition$.Condition)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var ScoreL = () => (ScoreL = dart.constFn(dart.legacy(score$.Score)))();
  var JSArrayOfScoreL = () => (JSArrayOfScoreL = dart.constFn(_interceptors.JSArray$(ScoreL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListLToNullN = () => (ListLToNullN = dart.constFn(dart.fnType(core.Null, [ListL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var StringLAndStringLToNullN = () => (StringLAndStringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), StringL()])))();
  var BuildFileL = () => (BuildFileL = dart.constFn(dart.legacy(buildFile.BuildFile)))();
  var StringLAndBuildFileLToNullN = () => (StringLAndBuildFileLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), BuildFileL()])))();
  var BuildPackL = () => (BuildPackL = dart.constFn(dart.legacy(buildPack.BuildPack)))();
  var BuildPackLToNullN = () => (BuildPackLToNullN = dart.constFn(dart.fnType(core.Null, [BuildPackL()])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var JSArrayOfBuildPackL = () => (JSArrayOfBuildPackL = dart.constFn(_interceptors.JSArray$(BuildPackL())))();
  var PackL = () => (PackL = dart.constFn(dart.legacy(pack.Pack)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var BuildPackLToboolL = () => (BuildPackLToboolL = dart.constFn(dart.fnType(boolL(), [BuildPackL()])))();
  var BuildPackLToMapL = () => (BuildPackLToMapL = dart.constFn(dart.fnType(MapL(), [BuildPackL()])))();
  var ForL = () => (ForL = dart.constFn(dart.legacy(for_list.For)))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(module.Module)))();
  var ModuleLTodynamic = () => (ModuleLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ModuleL()])))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(file.File)))();
  var FileLToMapL = () => (FileLToMapL = dart.constFn(dart.fnType(MapL(), [FileL()])))();
  var RestActionAbleL = () => (RestActionAbleL = dart.constFn(dart.legacy(rest_action.RestActionAble)))();
  var RestActionL = () => (RestActionL = dart.constFn(dart.legacy(rest_action.RestAction)))();
  var ListOfRestActionL = () => (ListOfRestActionL = dart.constFn(core.List$(RestActionL())))();
  var ListLOfRestActionL = () => (ListLOfRestActionL = dart.constFn(dart.legacy(ListOfRestActionL())))();
  var RestActionLToNullN = () => (RestActionLToNullN = dart.constFn(dart.fnType(core.Null, [RestActionL()])))();
  var ListOfWidgetL = () => (ListOfWidgetL = dart.constFn(core.List$(WidgetL())))();
  var ListLOfWidgetL = () => (ListLOfWidgetL = dart.constFn(dart.legacy(ListOfWidgetL())))();
  var WidgetLTodynamic = () => (WidgetLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [WidgetL()])))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToStringL = () => (intLToStringL = dart.constFn(dart.fnType(StringL(), [intL()])))();
  var JSArrayOfConditionL = () => (JSArrayOfConditionL = dart.constFn(_interceptors.JSArray$(ConditionL())))();
  var ConditionLTovoid = () => (ConditionLTovoid = dart.constFn(dart.fnType(dart.void, [ConditionL()])))();
  var EntityL = () => (EntityL = dart.constFn(dart.legacy(entity$.Entity)))();
  var BlockL = () => (BlockL = dart.constFn(dart.legacy(block.Block)))();
  var TagL = () => (TagL = dart.constFn(dart.legacy(tag$.Tag)))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location$.Location)))();
  var DataL = () => (DataL = dart.constFn(dart.legacy(data$.Data)))();
  var AreaL = () => (AreaL = dart.constFn(dart.legacy(area.Area)))();
  var PredicateL = () => (PredicateL = dart.constFn(dart.legacy(predicate.Predicate)))();
  var _ConditionUtilL = () => (_ConditionUtilL = dart.constFn(dart.legacy(condition$._ConditionUtil)))();
  var JSArrayOf_ConditionUtilL = () => (JSArrayOf_ConditionUtilL = dart.constFn(_interceptors.JSArray$(_ConditionUtilL())))();
  var ListOf_ConditionUtilL = () => (ListOf_ConditionUtilL = dart.constFn(core.List$(_ConditionUtilL())))();
  var ListLOf_ConditionUtilL = () => (ListLOf_ConditionUtilL = dart.constFn(dart.legacy(ListOf_ConditionUtilL())))();
  var JSArrayOfListLOf_ConditionUtilL = () => (JSArrayOfListLOf_ConditionUtilL = dart.constFn(_interceptors.JSArray$(ListLOf_ConditionUtilL())))();
  var ListLOf_ConditionUtilLToNullN = () => (ListLOf_ConditionUtilLToNullN = dart.constFn(dart.fnType(core.Null, [ListLOf_ConditionUtilL()])))();
  var ListLOf_ConditionUtilLToListLOf_ConditionUtilL = () => (ListLOf_ConditionUtilLToListLOf_ConditionUtilL = dart.constFn(dart.fnType(ListLOf_ConditionUtilL(), [ListLOf_ConditionUtilL()])))();
  var ConditionLToNullN = () => (ConditionLToNullN = dart.constFn(dart.fnType(core.Null, [ConditionL()])))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(StringL(), [dart.dynamic])))();
  var ListLToStringL = () => (ListLToStringL = dart.constFn(dart.fnType(StringL(), [ListL()])))();
  var _ConditionTypeL = () => (_ConditionTypeL = dart.constFn(dart.legacy(condition$._ConditionType)))();
  var DataStorageL = () => (DataStorageL = dart.constFn(dart.legacy(data$.DataStorage)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var JSArrayOfListLOfStringL = () => (JSArrayOfListLOfStringL = dart.constFn(_interceptors.JSArray$(ListLOfStringL())))();
  var CommandL = () => (CommandL = dart.constFn(dart.legacy(command$.Command)))();
  var ListOfCommandL = () => (ListOfCommandL = dart.constFn(core.List$(CommandL())))();
  var ListLOfCommandL = () => (ListLOfCommandL = dart.constFn(dart.legacy(ListOfCommandL())))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var StringLToCommandL = () => (StringLToCommandL = dart.constFn(dart.fnType(CommandL(), [StringL()])))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var CommandLToMapLOfStringL$StringL = () => (CommandLToMapLOfStringL$StringL = dart.constFn(dart.fnType(MapLOfStringL$StringL(), [CommandL()])))();
  var GroupL = () => (GroupL = dart.constFn(dart.legacy(group.Group)))();
  var ListLOfStringLToGroupL = () => (ListLOfStringLToGroupL = dart.constFn(dart.fnType(GroupL(), [ListLOfStringL()])))();
  var ListLOfStringLTovoid = () => (ListLOfStringLTovoid = dart.constFn(dart.fnType(dart.void, [ListLOfStringL()])))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var RotationL = () => (RotationL = dart.constFn(dart.legacy(rotation.Rotation)))();
  var DimensionL = () => (DimensionL = dart.constFn(dart.legacy(execute.Dimension)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var FacingL = () => (FacingL = dart.constFn(dart.legacy(execute.Facing)))();
  var ExecuteStoreResultTypeL = () => (ExecuteStoreResultTypeL = dart.constFn(dart.legacy(execute.ExecuteStoreResultType)))();
  var ExecuteStoreVarTypeL = () => (ExecuteStoreVarTypeL = dart.constFn(dart.legacy(execute.ExecuteStoreVarType)))();
  var ScoreLToNullN = () => (ScoreLToNullN = dart.constFn(dart.fnType(core.Null, [ScoreL()])))();
  var StringLToTagL = () => (StringLToTagL = dart.constFn(dart.fnType(TagL(), [StringL()])))();
  var ListLOfWidgetLTodynamic = () => (ListLOfWidgetLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListLOfWidgetL()])))();
  var GamemodeL = () => (GamemodeL = dart.constFn(dart.legacy(entity$.Gamemode)))();
  var SortL = () => (SortL = dart.constFn(dart.legacy(entity$.Sort)))();
  var EntityTypeL = () => (EntityTypeL = dart.constFn(dart.legacy(entity$.EntityType)))();
  var ItemL = () => (ItemL = dart.constFn(dart.legacy(item.Item)))();
  var TextComponentL = () => (TextComponentL = dart.constFn(dart.legacy(text_components.TextComponent)))();
  var TextComponentLToMapL = () => (TextComponentLToMapL = dart.constFn(dart.fnType(MapL(), [TextComponentL()])))();
  var BookPageL = () => (BookPageL = dart.constFn(dart.legacy(item.BookPage)))();
  var BookPageLToStringL = () => (BookPageLToStringL = dart.constFn(dart.fnType(StringL(), [BookPageL()])))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var TextComponentLToStringL = () => (TextComponentLToStringL = dart.constFn(dart.fnType(StringL(), [TextComponentL()])))();
  var JSArrayOfTextComponentL = () => (JSArrayOfTextComponentL = dart.constFn(_interceptors.JSArray$(TextComponentL())))();
  var ListOfTextComponentL = () => (ListOfTextComponentL = dart.constFn(core.List$(TextComponentL())))();
  var ListLOfTextComponentL = () => (ListLOfTextComponentL = dart.constFn(dart.legacy(ListOfTextComponentL())))();
  var StringLAnddynamicToNullN = () => (StringLAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), dart.dynamic])))();
  var EffectL = () => (EffectL = dart.constFn(dart.legacy(effect$.Effect)))();
  var EffectLToMapL = () => (EffectLToMapL = dart.constFn(dart.fnType(MapL(), [EffectL()])))();
  var SummonL = () => (SummonL = dart.constFn(dart.legacy(summon.Summon)))();
  var SummonLToMapL = () => (SummonLToMapL = dart.constFn(dart.fnType(MapL(), [SummonL()])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var JSArrayOfdoubleL = () => (JSArrayOfdoubleL = dart.constFn(_interceptors.JSArray$(doubleL())))();
  var EffectTypeL = () => (EffectTypeL = dart.constFn(dart.legacy(effect$.EffectType)))();
  var IdentityMapOfintL$StringL = () => (IdentityMapOfintL$StringL = dart.constFn(_js_helper.IdentityMap$(intL(), StringL())))();
  var RangeL = () => (RangeL = dart.constFn(dart.legacy(entity$.Range)))();
  var intLToRestActionAbleL = () => (intLToRestActionAbleL = dart.constFn(dart.fnType(RestActionAbleL(), [intL()])))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var StringLTovoid = () => (StringLTovoid = dart.constFn(dart.fnType(dart.void, [StringL()])))();
  var _TeamActionL = () => (_TeamActionL = dart.constFn(dart.legacy(team$._TeamAction)))();
  var ModifyTeamL = () => (ModifyTeamL = dart.constFn(dart.legacy(team$.ModifyTeam)))();
  var IdentityMapOfStringL$doubleL = () => (IdentityMapOfStringL$doubleL = dart.constFn(_js_helper.IdentityMap$(StringL(), doubleL())))();
  var IdentityMapOfStringL$GamemodeL = () => (IdentityMapOfStringL$GamemodeL = dart.constFn(_js_helper.IdentityMap$(StringL(), GamemodeL())))();
  var IdentityMapOfStringL$SortL = () => (IdentityMapOfStringL$SortL = dart.constFn(_js_helper.IdentityMap$(StringL(), SortL())))();
  var AttributeModifierL = () => (AttributeModifierL = dart.constFn(dart.legacy(attribute$.AttributeModifier)))();
  var _AttributeTypeL = () => (_AttributeTypeL = dart.constFn(dart.legacy(attribute$._AttributeType)))();
  var BossbarOptionL = () => (BossbarOptionL = dart.constFn(dart.legacy(bossbar.BossbarOption)))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  var ScheduleModeL = () => (ScheduleModeL = dart.constFn(dart.legacy(schedule.ScheduleMode)))();
  var IdentityMapOfStringL$BuildFileL = () => (IdentityMapOfStringL$BuildFileL = dart.constFn(_js_helper.IdentityMap$(StringL(), BuildFileL())))();
  var FileLToBuildFileL = () => (FileLToBuildFileL = dart.constFn(dart.fnType(BuildFileL(), [FileL()])))();
  var MapEntryOfStringL$ListL = () => (MapEntryOfStringL$ListL = dart.constFn(core.MapEntry$(StringL(), ListL())))();
  var MapEntryLOfStringL$ListL = () => (MapEntryLOfStringL$ListL = dart.constFn(dart.legacy(MapEntryOfStringL$ListL())))();
  var StringLAndBuildFileLToMapEntryLOfStringL$ListL = () => (StringLAndBuildFileLToMapEntryLOfStringL$ListL = dart.constFn(dart.fnType(MapEntryLOfStringL$ListL(), [StringL(), BuildFileL()])))();
  var CommentL = () => (CommentL = dart.constFn(dart.legacy(comment.Comment)))();
  var ScoreboardL = () => (ScoreboardL = dart.constFn(dart.legacy(scoreboard.Scoreboard)))();
  var WidgetLToNullN = () => (WidgetLToNullN = dart.constFn(dart.fnType(core.Null, [WidgetL()])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(text.Text)))();
  var RawFileL = () => (RawFileL = dart.constFn(dart.legacy(raw_file.RawFile)))();
  var ExtendL = () => (ExtendL = dart.constFn(dart.legacy(extend.Extend)))();
  var MapOfStringL$intL = () => (MapOfStringL$intL = dart.constFn(core.Map$(StringL(), intL())))();
  var MapLOfStringL$intL = () => (MapLOfStringL$intL = dart.constFn(dart.legacy(MapOfStringL$intL())))();
  var IdentityMapOfStringL$MapLOfStringL$intL = () => (IdentityMapOfStringL$MapLOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfStringL$intL())))();
  var MapOfStringL$MapLOfStringL$intL = () => (MapOfStringL$MapLOfStringL$intL = dart.constFn(core.Map$(StringL(), MapLOfStringL$intL())))();
  var MapLOfStringL$MapLOfStringL$intL = () => (MapLOfStringL$MapLOfStringL$intL = dart.constFn(dart.legacy(MapOfStringL$MapLOfStringL$intL())))();
  var IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$intL = () => (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapLOfStringL$MapLOfStringL$intL())))();
  var MapOfStringL$MapLOfStringL$MapLOfStringL$intL = () => (MapOfStringL$MapLOfStringL$MapLOfStringL$intL = dart.constFn(core.Map$(StringL(), MapLOfStringL$MapLOfStringL$intL())))();
  var MapLOfStringL$MapLOfStringL$MapLOfStringL$intL = () => (MapLOfStringL$MapLOfStringL$MapLOfStringL$intL = dart.constFn(dart.legacy(MapOfStringL$MapLOfStringL$MapLOfStringL$intL())))();
  var JSArrayOfMapLOfStringL$MapLOfStringL$MapLOfStringL$intL = () => (JSArrayOfMapLOfStringL$MapLOfStringL$MapLOfStringL$intL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$MapLOfStringL$MapLOfStringL$intL())))();
  var _StorageTypeL = () => (_StorageTypeL = dart.constFn(dart.legacy(storage._StorageType)))();
  var StringLToTextComponentL = () => (StringLToTextComponentL = dart.constFn(dart.fnType(TextComponentL(), [StringL()])))();
  var TextComponentLToRestActionAbleL = () => (TextComponentLToRestActionAbleL = dart.constFn(dart.fnType(RestActionAbleL(), [TextComponentL()])))();
  var JSArrayOfMapL = () => (JSArrayOfMapL = dart.constFn(_interceptors.JSArray$(MapL())))();
  var JSArrayOfFileL = () => (JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(FileL())))();
  const CT = Object.create(null);
  var L42 = "package:objd/wrappers/team.dart";
  var L16 = "org-dartlang-app:///packages/objd/basic/types/location.dart";
  var L18 = "package:objd/basic/command.dart";
  var L39 = "package:objd/basic/scoreboard.dart";
  var L53 = "package:objd/wrappers/tp.dart";
  var L20 = "org-dartlang-app:///packages/objd/wrappers/execute.dart";
  var L50 = "package:objd/wrappers/spawnpoint.dart";
  var L66 = "package:objd/wrappers/clone.dart";
  var L69 = "org-dartlang-app:///packages/objd/wrappers/replaceitem.dart";
  var L67 = "package:objd/wrappers/fill.dart";
  var L92 = "package:objd/utils/timer.dart";
  var L38 = "package:objd/basic/indexed_file.dart";
  var L1 = "package:objd/basic/rest_action.dart";
  var L22 = "package:objd/wrappers/enchant.dart";
  var L41 = "package:objd/basic/extend.dart";
  var L68 = "package:objd/wrappers/setblock.dart";
  var L28 = "package:objd/basic/types/items.dart";
  var L26 = "org-dartlang-app:///packages/objd/basic/types/item.dart";
  var L6 = "package:objd/build/buildProject.dart";
  var L51 = "package:objd/wrappers/spectate.dart";
  var L87 = "package:objd/utils/armorstand.dart";
  var L89 = "package:objd/utils/log.dart";
  var L52 = "package:objd/wrappers/gamemode.dart";
  var L79 = "org-dartlang-app:///packages/objd/utils/storage.dart";
  var L13 = "org-dartlang-app:///packages/objd/basic/types/condition.dart";
  var L91 = "org-dartlang-app:///packages/objd/utils/timer.dart";
  var L9 = "package:objd/basic/strait_widget.dart";
  var L14 = "package:objd/basic/types/condition.dart";
  var L65 = "package:objd/wrappers/say.dart";
  var L88 = "package:objd/utils/areaeffectcloud.dart";
  var L48 = "org-dartlang-app:///packages/objd/wrappers/spreadplayers.dart";
  var L83 = "package:objd/utils/foreach.dart";
  var L84 = "package:objd/utils/repeat.dart";
  var L31 = "package:objd/basic/text_components.dart";
  var L63 = "package:objd/wrappers/tellraw.dart";
  var L15 = "package:objd/wrappers/data.dart";
  var L3 = "package:objd/utils/player_join.dart";
  var L33 = "package:objd/basic/score.dart";
  var L24 = "org-dartlang-app:///packages/objd/basic/types/entity.dart";
  var L74 = "package:objd/basic/raw_file.dart";
  var L43 = "package:objd/basic/types/selector.dart";
  var L35 = "package:objd/wrappers/if.dart";
  var L10 = "package:objd/basic/for_list.dart";
  var L94 = "org-dartlang-app:///packages/objd/modules/score_timer.dart";
  var L8 = "package:objd/basic/module.dart";
  var L56 = "package:objd/wrappers/bossbar.dart";
  var L29 = "package:objd/wrappers/summon.dart";
  var L60 = "package:objd/wrappers/schedule.dart";
  var L75 = "package:objd/build/buildPack.dart";
  var L47 = "package:objd/wrappers/attribute.dart";
  var L23 = "package:objd/basic/types/entity.dart";
  var L76 = "package:objd/build/buildFile.dart";
  var L77 = "package:objd/utils/version_check.dart";
  var L72 = "package:objd/wrappers/give.dart";
  var L90 = "package:objd/utils/aroundlocation.dart";
  var L54 = "package:objd/wrappers/clear.dart";
  var L73 = "package:objd/basic/predicate.dart";
  var L61 = "package:objd/wrappers/kill.dart";
  var L2 = "package:objd/utils/do_loop.dart";
  var L71 = "org-dartlang-app:///packages/objd/wrappers/give.dart";
  var L44 = "package:objd/basic/tag.dart";
  var L81 = "package:objd/utils/builder.dart";
  var L49 = "package:objd/wrappers/spreadplayers.dart";
  var L86 = "package:objd/utils/hologram.dart";
  var L37 = "package:objd/basic/group.dart";
  var L32 = "org-dartlang-app:///packages/objd/basic/text_components.dart";
  var L11 = "package:objd/basic/file.dart";
  var L12 = "package:objd/wrappers/comment.dart";
  var L21 = "package:objd/wrappers/execute.dart";
  var L36 = "org-dartlang-app:///packages/objd/basic/group.dart";
  var L57 = "package:objd/wrappers/trigger.dart";
  var L0 = "package:objd/basic/widget.dart";
  var L25 = "package:objd/basic/types/entities.dart";
  var L45 = "package:objd/basic/types/area.dart";
  var L58 = "package:objd/wrappers/particle.dart";
  var L40 = "org-dartlang-app:///packages/objd/basic/extend.dart";
  var L80 = "package:objd/utils/storage.dart";
  var L85 = "package:objd/utils/randomScore.dart";
  var L4 = "package:objd/utils/pass_trait.dart";
  var L62 = "package:objd/wrappers/teleport.dart";
  var L46 = "org-dartlang-app:///packages/objd/wrappers/attribute.dart";
  var L55 = "package:objd/wrappers/advancement.dart";
  var L34 = "org-dartlang-app:///packages/objd/wrappers/if.dart";
  var L5 = "package:objd/build/project.dart";
  var L17 = "package:objd/basic/types/location.dart";
  var L19 = "package:objd/basic/text.dart";
  var L93 = "package:objd/modules/click_event.dart";
  var L27 = "package:objd/basic/types/item.dart";
  var L64 = "package:objd/wrappers/title.dart";
  var L78 = "package:objd/utils/server_version_check.dart";
  var L95 = "package:objd/modules/score_timer.dart";
  var L7 = "package:objd/basic/pack.dart";
  var L59 = "org-dartlang-app:///packages/objd/wrappers/schedule.dart";
  var L70 = "package:objd/wrappers/replaceitem.dart";
  var L30 = "package:objd/wrappers/effect.dart";
  var L82 = "package:objd/utils/raycast.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], StringL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: condition$._ConditionType.prototype,
        [_name$]: "_ConditionType.and",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: condition$._ConditionType.prototype,
        [_name$]: "_ConditionType.or",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: condition$._ConditionType.prototype,
        [_name$]: "_ConditionType.invert",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _ConditionTypeL());
    },
    get C5() {
      return C5 = dart.constMap(StringL(), dart.dynamic, []);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: execute.Facing.prototype,
        [_name$0]: "Facing.eyes",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: execute.ExecuteStoreResultType.prototype,
        [_name$0]: "ExecuteStoreResultType.result",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.int",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: bossbar.BossbarOption.prototype,
        [_name$1]: "BossbarOption.value",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: execute.Facing.prototype,
        [_name$0]: "Facing.feet",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.constList([C6 || CT.C6, C10 || CT.C10], FacingL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: execute.Dimension.prototype,
        [_name$0]: "Dimension.overworld",
        index: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: execute.Dimension.prototype,
        [_name$0]: "Dimension.the_end",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: execute.Dimension.prototype,
        [_name$0]: "Dimension.the_nether",
        index: 2
      });
    },
    get C15() {
      return C15 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], DimensionL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: execute.ExecuteStoreResultType.prototype,
        [_name$0]: "ExecuteStoreResultType.success",
        index: 1
      });
    },
    get C17() {
      return C17 = dart.constList([C7 || CT.C7, C16 || CT.C16], ExecuteStoreResultTypeL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.byte",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.short",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.long",
        index: 3
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.float",
        index: 4
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: execute.ExecuteStoreVarType.prototype,
        [_name$0]: "ExecuteStoreVarType.double",
        index: 5
      });
    },
    get C23() {
      return C23 = dart.constList([C18 || CT.C18, C19 || CT.C19, C8 || CT.C8, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], ExecuteStoreVarTypeL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: block.Block.prototype,
        [Block_nbt]: null,
        [Block_states]: null,
        [Block_tag]: null,
        [Block__id]: "minecraft:air"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: entity$.Gamemode.prototype,
        [_name$2]: "Gamemode.creative",
        index: 0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: entity$.Gamemode.prototype,
        [_name$2]: "Gamemode.adventure",
        index: 1
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: entity$.Gamemode.prototype,
        [_name$2]: "Gamemode.survival",
        index: 2
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: entity$.Gamemode.prototype,
        [_name$2]: "Gamemode.spectator",
        index: 3
      });
    },
    get C29() {
      return C29 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], GamemodeL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: entity$.Sort.prototype,
        [_name$2]: "Sort.random",
        index: 0
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: entity$.Sort.prototype,
        [_name$2]: "Sort.furthest",
        index: 1
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: entity$.Sort.prototype,
        [_name$2]: "Sort.nearest",
        index: 2
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: entity$.Sort.prototype,
        [_name$2]: "Sort.arbitrary",
        index: 3
      });
    },
    get C34() {
      return C34 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], SortL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:area_effect_cloud"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:armor_stand"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:arrow"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:bat"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:bee"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:blaze"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:boat"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:cat"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:cave_spider"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:chest_minecart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:chicken"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:cod"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:command_block_minecart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:cow"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:creeper"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:dolphin"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:donkey"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:dragon_fireball"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:drowned"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:egg"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:elder_guardian"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:end_crystal"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:ender_dragon"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:ender_pearl"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:enderman"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:endermite"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:evoker"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:evoker_fangs"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:experience_bottle"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:experience_orb"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:eye_of_ender"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:falling_block"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:fireball"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:firework_rocket"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:fishing_bobber"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:fox"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:furnace_minecart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:ghast"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:giant"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:guardian"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:hoglin"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:hopper_minecart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:horse"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:husk"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:illusioner"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:iron_golem"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:item"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:item_frame"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:leash_knot"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:lightning_bolt"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:llama"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:llama_spit"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:magma_cube"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:minecart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:mooshroom"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:mule"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:ocelot"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:painting"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:panda"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:parrot"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:phantom"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:pig"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:piglin"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:pillager"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:player"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:polar_bear"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:potion"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:pufferfish"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:rabbit"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:ravager"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:salmon"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:sheep"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:shulker"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:shulker_bullet"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:silverfish"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:skeleton"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:skeleton_horse"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:slime"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:small_fireball"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:snow_golem"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:snowball"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:spawner_minecart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:spectral_arrow"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:spider"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:squid"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:stray"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:strider"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:tnt"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:tnt_minecart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:trader_llama"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:trident"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:tropical_fish"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:turtle"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:vex"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:villager"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:vindicator"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:wandering_trader"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:witch"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:wither"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:wither_skeleton"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:wither_skull"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:wolf"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:zoglin"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:zombie"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:zombie_horse"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:zombie_villager"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: entity$.EntityType.prototype,
        [type$0]: "minecraft:zombified_piglin"
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108, C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134, C135 || CT.C135, C136 || CT.C136, C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], EntityTypeL());
    },
    get C144() {
      return C144 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_boat"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_button"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_door"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_fence"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_fence_gate"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_leaves"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_log"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_planks"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_pressure_plate"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_sapling"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_sign"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_slab"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_stairs"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_trapdoor"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:acacia_wood"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:activator_rail"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:air"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:allium"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:andesite"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:andesite_slab"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:andesite_stairs"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:andesite_wall"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:anvil"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:apple"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:armor_stand"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:arrow"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:azure_bluet"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:baked_potato"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bamboo"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:barrel"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:barrier"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bat_spawn_egg"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beacon"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bedrock"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bee_nest"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bee_spawn_egg"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beef"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beehive"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beetroot"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beetroot_seeds"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:beetroot_soup"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bell"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_boat"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_button"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_door"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_fence"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_fence_gate"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_leaves"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_log"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_planks"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_pressure_plate"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_sapling"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_sign"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_slab"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_stairs"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_trapdoor"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:birch_wood"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_banner"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_bed"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_carpet"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_concrete"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_concrete_powder"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_dye"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_glazed_terracotta"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_shulker_box"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_stained_glass"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_stained_glass_pane"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_terracotta"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:black_wool"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blast_furnace"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blaze_powder"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blaze_rod"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blaze_spawn_egg"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_banner"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_bed"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_carpet"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_concrete"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_concrete_powder"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_dye"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_glazed_terracotta"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_ice"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_orchid"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_shulker_box"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_stained_glass"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_stained_glass_pane"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_terracotta"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blue_wool"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bone"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bone_block"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bone_meal"
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:book"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bookshelf"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bow"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bowl"
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brain_coral"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brain_coral_block"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brain_coral_fan"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bread"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brewing_stand"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brick"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brick_slab"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brick_stairs"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brick_wall"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bricks"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_banner"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_bed"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_carpet"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_concrete"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_concrete_powder"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_dye"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_glazed_terracotta"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_mushroom"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_mushroom_block"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_shulker_box"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_stained_glass"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_stained_glass_pane"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_terracotta"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:brown_wool"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bubble_coral"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bubble_coral_block"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bubble_coral_fan"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:bucket"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cactus"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cake"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:campfire"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:carrot"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:carrot_on_a_stick"
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cartography_table"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:carved_pumpkin"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cat_spawn_egg"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cauldron"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cave_spider_spawn_egg"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chain_command_block"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chainmail_boots"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chainmail_chestplate"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chainmail_helmet"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chainmail_leggings"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:charcoal"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chest"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chest_minecart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chicken"
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chicken_spawn_egg"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chipped_anvil"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_quartz_block"
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_red_sandstone"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_sandstone"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_stone_bricks"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chorus_flower"
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chorus_fruit"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chorus_plant"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:clay"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:clay_ball"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:clock"
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:coal"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:coal_block"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:coal_ore"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:coarse_dirt"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cobblestone"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cobblestone_slab"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cobblestone_stairs"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cobblestone_wall"
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cobweb"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cocoa_beans"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cod"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cod_bucket"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cod_spawn_egg"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:command_block"
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:command_block_minecart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:comparator"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:compass"
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:composter"
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:conduit"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_beef"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_chicken"
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_cod"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_mutton"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_porkchop"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_rabbit"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cooked_salmon"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cookie"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cornflower"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cow_spawn_egg"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cracked_stone_bricks"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crafting_table"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:creeper_banner_pattern"
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:creeper_head"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:creeper_spawn_egg"
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crossbow"
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cut_red_sandstone"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cut_red_sandstone_slab"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cut_sandstone"
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cut_sandstone_slab"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_banner"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_bed"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_carpet"
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_concrete"
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_concrete_powder"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_dye"
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_glazed_terracotta"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_shulker_box"
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_stained_glass"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_stained_glass_pane"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_terracotta"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cyan_wool"
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:damaged_anvil"
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dandelion"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_boat"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_button"
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_door"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_fence"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_fence_gate"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_leaves"
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_log"
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_planks"
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_pressure_plate"
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_sapling"
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_sign"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_slab"
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_stairs"
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_trapdoor"
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_oak_wood"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_prismarine"
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_prismarine_slab"
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dark_prismarine_stairs"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:daylight_detector"
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_brain_coral"
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_brain_coral_block"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_brain_coral_fan"
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_bubble_coral"
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_bubble_coral_block"
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_bubble_coral_fan"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_bush"
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_fire_coral"
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_fire_coral_block"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_fire_coral_fan"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_horn_coral"
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_horn_coral_block"
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_horn_coral_fan"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_tube_coral"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_tube_coral_block"
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dead_tube_coral_fan"
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:debug_stick"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:detector_rail"
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_axe"
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_block"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_boots"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_chestplate"
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_helmet"
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_hoe"
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_horse_armor"
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_leggings"
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_ore"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_pickaxe"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_shovel"
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diamond_sword"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diorite"
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diorite_slab"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diorite_stairs"
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:diorite_wall"
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dirt"
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dispenser"
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dolphin_spawn_egg"
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:donkey_spawn_egg"
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dragon_breath"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dragon_egg"
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dragon_head"
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dried_kelp"
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dried_kelp_block"
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:dropper"
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:drowned_spawn_egg"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:egg"
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:elder_guardian_spawn_egg"
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:elytra"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:emerald"
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:emerald_block"
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:emerald_ore"
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:enchanted_book"
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:enchanted_golden_apple"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:enchanting_table"
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_crystal"
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_portal_frame"
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_rod"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_stone"
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_stone_brick_slab"
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_stone_brick_stairs"
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_stone_brick_wall"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:end_stone_bricks"
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ender_chest"
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ender_eye"
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ender_pearl"
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:enderman_spawn_egg"
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:endermite_spawn_egg"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:evoker_spawn_egg"
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:experience_bottle"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:farmland"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:feather"
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fermented_spider_eye"
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fern"
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:filled_map"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fire_charge"
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fire_coral"
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fire_coral_block"
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fire_coral_fan"
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:firework_rocket"
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:firework_star"
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fishing_rod"
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fletching_table"
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:flint"
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:flint_and_steel"
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:flower_banner_pattern"
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:flower_pot"
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:fox_spawn_egg"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:furnace"
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:furnace_minecart"
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ghast_spawn_egg"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ghast_tear"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glass"
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glass_bottle"
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glass_pane"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glistering_melon_slice"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:globe_banner_pattern"
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glowstone"
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:glowstone_dust"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gold_block"
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gold_ingot"
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gold_nugget"
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gold_ore"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_apple"
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_axe"
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_boots"
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_carrot"
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_chestplate"
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_helmet"
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_hoe"
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_horse_armor"
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_leggings"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_pickaxe"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_shovel"
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:golden_sword"
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:granite"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:granite_slab"
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:granite_stairs"
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:granite_wall"
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:grass"
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:grass_block"
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:grass_path"
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gravel"
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_banner"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_bed"
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_carpet"
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_concrete"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_concrete_powder"
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_dye"
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_glazed_terracotta"
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_shulker_box"
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_stained_glass"
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_stained_glass_pane"
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_terracotta"
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gray_wool"
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_banner"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_bed"
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_carpet"
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_concrete"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_concrete_powder"
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_dye"
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_glazed_terracotta"
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_shulker_box"
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_stained_glass"
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_stained_glass_pane"
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_terracotta"
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:green_wool"
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:grindstone"
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:guardian_spawn_egg"
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gunpowder"
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:hay_block"
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:heart_of_the_sea"
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:heavy_weighted_pressure_plate"
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:honey_block"
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:honey_bottle"
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:honeycomb"
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:honeycomb_block"
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:hopper"
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:hopper_minecart"
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:horn_coral"
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:horn_coral_block"
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:horn_coral_fan"
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:horse_spawn_egg"
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:husk_spawn_egg"
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ice"
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_chiseled_stone_bricks"
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_cobblestone"
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_cracked_stone_bricks"
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_mossy_stone_bricks"
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_stone"
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:infested_stone_bricks"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ink_sac"
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_axe"
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_bars"
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_block"
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_boots"
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_chestplate"
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_door"
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_helmet"
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_hoe"
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_horse_armor"
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_ingot"
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_leggings"
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_nugget"
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_ore"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_pickaxe"
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_shovel"
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_sword"
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:iron_trapdoor"
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:item_frame"
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jack_o_lantern"
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jigsaw"
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jukebox"
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_boat"
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_button"
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_door"
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_fence"
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_fence_gate"
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_leaves"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_log"
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_planks"
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_pressure_plate"
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_sapling"
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_sign"
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_slab"
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_stairs"
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_trapdoor"
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:jungle_wood"
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:kelp"
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:knowledge_book"
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ladder"
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lantern"
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lapis_block"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lapis_lazuli"
      });
    },
    get C583() {
      return C583 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lapis_ore"
      });
    },
    get C584() {
      return C584 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:large_fern"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lava_bucket"
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lead"
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather"
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather_boots"
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather_chestplate"
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather_helmet"
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather_horse_armor"
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:leather_leggings"
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lectern"
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lever"
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_banner"
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_bed"
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_carpet"
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_concrete"
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_concrete_powder"
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_dye"
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_glazed_terracotta"
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_shulker_box"
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_stained_glass"
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_stained_glass_pane"
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_terracotta"
      });
    },
    get C606() {
      return C606 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_blue_wool"
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_banner"
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_bed"
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_carpet"
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_concrete"
      });
    },
    get C611() {
      return C611 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_concrete_powder"
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_dye"
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_glazed_terracotta"
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_shulker_box"
      });
    },
    get C615() {
      return C615 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_stained_glass"
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_stained_glass_pane"
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_terracotta"
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_gray_wool"
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:light_weighted_pressure_plate"
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lilac"
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lily_of_the_valley"
      });
    },
    get C622() {
      return C622 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lily_pad"
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_banner"
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_bed"
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_carpet"
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_concrete"
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_concrete_powder"
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_dye"
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_glazed_terracotta"
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_shulker_box"
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_stained_glass"
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_stained_glass_pane"
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_terracotta"
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lime_wool"
      });
    },
    get C635() {
      return C635 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lingering_potion"
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:llama_spawn_egg"
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:loom"
      });
    },
    get C638() {
      return C638 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_banner"
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_bed"
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_carpet"
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_concrete"
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_concrete_powder"
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_dye"
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_glazed_terracotta"
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_shulker_box"
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_stained_glass"
      });
    },
    get C647() {
      return C647 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_stained_glass_pane"
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_terracotta"
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magenta_wool"
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magma_block"
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magma_cream"
      });
    },
    get C652() {
      return C652 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:magma_cube_spawn_egg"
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:map"
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:melon"
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:melon_seeds"
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:melon_slice"
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:milk_bucket"
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:minecart"
      });
    },
    get C659() {
      return C659 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mojang_banner_pattern"
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mooshroom_spawn_egg"
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_cobblestone"
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_cobblestone_slab"
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_cobblestone_stairs"
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_cobblestone_wall"
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_stone_brick_slab"
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_stone_brick_stairs"
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_stone_brick_wall"
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mossy_stone_bricks"
      });
    },
    get C669() {
      return C669 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mule_spawn_egg"
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mushroom_stem"
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mushroom_stew"
      });
    },
    get C672() {
      return C672 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_11"
      });
    },
    get C673() {
      return C673 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_13"
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_blocks"
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_cat"
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_chirp"
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_far"
      });
    },
    get C678() {
      return C678 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_mall"
      });
    },
    get C679() {
      return C679 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_mellohi"
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_stal"
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_strad"
      });
    },
    get C682() {
      return C682 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_wait"
      });
    },
    get C683() {
      return C683 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_ward"
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mutton"
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:mycelium"
      });
    },
    get C686() {
      return C686 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:name_tag"
      });
    },
    get C687() {
      return C687 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nautilus_shell"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_brick"
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_brick_fence"
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_brick_slab"
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_brick_stairs"
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_brick_wall"
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_bricks"
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_quartz_ore"
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_star"
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_wart"
      });
    },
    get C697() {
      return C697 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_wart_block"
      });
    },
    get C698() {
      return C698 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherrack"
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:note_block"
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_boat"
      });
    },
    get C701() {
      return C701 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_button"
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_door"
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_fence"
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_fence_gate"
      });
    },
    get C705() {
      return C705 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_leaves"
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_log"
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_planks"
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_pressure_plate"
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_sapling"
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_sign"
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_slab"
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_stairs"
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_trapdoor"
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oak_wood"
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:observer"
      });
    },
    get C716() {
      return C716 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:obsidian"
      });
    },
    get C717() {
      return C717 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ocelot_spawn_egg"
      });
    },
    get C718() {
      return C718 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_banner"
      });
    },
    get C719() {
      return C719 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_bed"
      });
    },
    get C720() {
      return C720 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_carpet"
      });
    },
    get C721() {
      return C721 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_concrete"
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_concrete_powder"
      });
    },
    get C723() {
      return C723 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_dye"
      });
    },
    get C724() {
      return C724 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_glazed_terracotta"
      });
    },
    get C725() {
      return C725 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_shulker_box"
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_stained_glass"
      });
    },
    get C727() {
      return C727 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_stained_glass_pane"
      });
    },
    get C728() {
      return C728 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_terracotta"
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_tulip"
      });
    },
    get C730() {
      return C730 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:orange_wool"
      });
    },
    get C731() {
      return C731 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:oxeye_daisy"
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:packed_ice"
      });
    },
    get C733() {
      return C733 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:painting"
      });
    },
    get C734() {
      return C734 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:panda_spawn_egg"
      });
    },
    get C735() {
      return C735 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:paper"
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:parrot_spawn_egg"
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:peony"
      });
    },
    get C738() {
      return C738 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:petrified_oak_slab"
      });
    },
    get C739() {
      return C739 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:phantom_membrane"
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:phantom_spawn_egg"
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pig_spawn_egg"
      });
    },
    get C742() {
      return C742 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pillager_spawn_egg"
      });
    },
    get C743() {
      return C743 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_banner"
      });
    },
    get C744() {
      return C744 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_bed"
      });
    },
    get C745() {
      return C745 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_carpet"
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_concrete"
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_concrete_powder"
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_dye"
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_glazed_terracotta"
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_shulker_box"
      });
    },
    get C751() {
      return C751 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_stained_glass"
      });
    },
    get C752() {
      return C752 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_stained_glass_pane"
      });
    },
    get C753() {
      return C753 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_terracotta"
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_tulip"
      });
    },
    get C755() {
      return C755 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pink_wool"
      });
    },
    get C756() {
      return C756 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:piston"
      });
    },
    get C757() {
      return C757 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:player_head"
      });
    },
    get C758() {
      return C758 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:podzol"
      });
    },
    get C759() {
      return C759 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:poisonous_potato"
      });
    },
    get C760() {
      return C760 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polar_bear_spawn_egg"
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_andesite"
      });
    },
    get C762() {
      return C762 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_andesite_slab"
      });
    },
    get C763() {
      return C763 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_andesite_stairs"
      });
    },
    get C764() {
      return C764 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_diorite"
      });
    },
    get C765() {
      return C765 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_diorite_slab"
      });
    },
    get C766() {
      return C766 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_diorite_stairs"
      });
    },
    get C767() {
      return C767 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_granite"
      });
    },
    get C768() {
      return C768 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_granite_slab"
      });
    },
    get C769() {
      return C769 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_granite_stairs"
      });
    },
    get C770() {
      return C770 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:popped_chorus_fruit"
      });
    },
    get C771() {
      return C771 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:poppy"
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:porkchop"
      });
    },
    get C773() {
      return C773 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:potato"
      });
    },
    get C774() {
      return C774 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:potion"
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:powered_rail"
      });
    },
    get C776() {
      return C776 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine"
      });
    },
    get C777() {
      return C777 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_brick_slab"
      });
    },
    get C778() {
      return C778 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_brick_stairs"
      });
    },
    get C779() {
      return C779 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_bricks"
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_crystals"
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_shard"
      });
    },
    get C782() {
      return C782 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_slab"
      });
    },
    get C783() {
      return C783 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_stairs"
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:prismarine_wall"
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pufferfish"
      });
    },
    get C786() {
      return C786 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pufferfish_bucket"
      });
    },
    get C787() {
      return C787 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pufferfish_spawn_egg"
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pumpkin"
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pumpkin_pie"
      });
    },
    get C790() {
      return C790 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:pumpkin_seeds"
      });
    },
    get C791() {
      return C791 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_banner"
      });
    },
    get C792() {
      return C792 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_bed"
      });
    },
    get C793() {
      return C793 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_carpet"
      });
    },
    get C794() {
      return C794 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_concrete"
      });
    },
    get C795() {
      return C795 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_concrete_powder"
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_dye"
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_glazed_terracotta"
      });
    },
    get C798() {
      return C798 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_shulker_box"
      });
    },
    get C799() {
      return C799 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_stained_glass"
      });
    },
    get C800() {
      return C800 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_stained_glass_pane"
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_terracotta"
      });
    },
    get C802() {
      return C802 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purple_wool"
      });
    },
    get C803() {
      return C803 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purpur_block"
      });
    },
    get C804() {
      return C804 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purpur_pillar"
      });
    },
    get C805() {
      return C805 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purpur_slab"
      });
    },
    get C806() {
      return C806 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:purpur_stairs"
      });
    },
    get C807() {
      return C807 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz"
      });
    },
    get C808() {
      return C808 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz_block"
      });
    },
    get C809() {
      return C809 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz_pillar"
      });
    },
    get C810() {
      return C810 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz_slab"
      });
    },
    get C811() {
      return C811 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz_stairs"
      });
    },
    get C812() {
      return C812 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rabbit"
      });
    },
    get C813() {
      return C813 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rabbit_foot"
      });
    },
    get C814() {
      return C814 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rabbit_hide"
      });
    },
    get C815() {
      return C815 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rabbit_spawn_egg"
      });
    },
    get C816() {
      return C816 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rabbit_stew"
      });
    },
    get C817() {
      return C817 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rail"
      });
    },
    get C818() {
      return C818 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ravager_spawn_egg"
      });
    },
    get C819() {
      return C819 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_banner"
      });
    },
    get C820() {
      return C820 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_bed"
      });
    },
    get C821() {
      return C821 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_carpet"
      });
    },
    get C822() {
      return C822 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_concrete"
      });
    },
    get C823() {
      return C823 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_concrete_powder"
      });
    },
    get C824() {
      return C824 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_dye"
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_glazed_terracotta"
      });
    },
    get C826() {
      return C826 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_mushroom"
      });
    },
    get C827() {
      return C827 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_mushroom_block"
      });
    },
    get C828() {
      return C828 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_nether_brick_slab"
      });
    },
    get C829() {
      return C829 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_nether_brick_stairs"
      });
    },
    get C830() {
      return C830 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_nether_brick_wall"
      });
    },
    get C831() {
      return C831 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_nether_bricks"
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_sand"
      });
    },
    get C833() {
      return C833 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_sandstone"
      });
    },
    get C834() {
      return C834 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_sandstone_slab"
      });
    },
    get C835() {
      return C835 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_sandstone_stairs"
      });
    },
    get C836() {
      return C836 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_sandstone_wall"
      });
    },
    get C837() {
      return C837 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_shulker_box"
      });
    },
    get C838() {
      return C838 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_stained_glass"
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_stained_glass_pane"
      });
    },
    get C840() {
      return C840 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_terracotta"
      });
    },
    get C841() {
      return C841 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_tulip"
      });
    },
    get C842() {
      return C842 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:red_wool"
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:redstone"
      });
    },
    get C844() {
      return C844 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:redstone_block"
      });
    },
    get C845() {
      return C845 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:redstone_lamp"
      });
    },
    get C846() {
      return C846 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:redstone_ore"
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:redstone_torch"
      });
    },
    get C848() {
      return C848 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:repeater"
      });
    },
    get C849() {
      return C849 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:repeating_command_block"
      });
    },
    get C850() {
      return C850 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rose_bush"
      });
    },
    get C851() {
      return C851 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:rotten_flesh"
      });
    },
    get C852() {
      return C852 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:saddle"
      });
    },
    get C853() {
      return C853 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:salmon"
      });
    },
    get C854() {
      return C854 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:salmon_bucket"
      });
    },
    get C855() {
      return C855 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:salmon_spawn_egg"
      });
    },
    get C856() {
      return C856 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sand"
      });
    },
    get C857() {
      return C857 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sandstone"
      });
    },
    get C858() {
      return C858 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sandstone_slab"
      });
    },
    get C859() {
      return C859 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sandstone_stairs"
      });
    },
    get C860() {
      return C860 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sandstone_wall"
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:scaffolding"
      });
    },
    get C862() {
      return C862 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:scute"
      });
    },
    get C863() {
      return C863 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sea_lantern"
      });
    },
    get C864() {
      return C864 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sea_pickle"
      });
    },
    get C865() {
      return C865 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:seagrass"
      });
    },
    get C866() {
      return C866 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shears"
      });
    },
    get C867() {
      return C867 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sheep_spawn_egg"
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shield"
      });
    },
    get C869() {
      return C869 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shulker_box"
      });
    },
    get C870() {
      return C870 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shulker_shell"
      });
    },
    get C871() {
      return C871 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shulker_spawn_egg"
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:silverfish_spawn_egg"
      });
    },
    get C873() {
      return C873 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:skeleton_horse_spawn_egg"
      });
    },
    get C874() {
      return C874 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:skeleton_skull"
      });
    },
    get C875() {
      return C875 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:skeleton_spawn_egg"
      });
    },
    get C876() {
      return C876 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:skull_banner_pattern"
      });
    },
    get C877() {
      return C877 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:slime_ball"
      });
    },
    get C878() {
      return C878 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:slime_block"
      });
    },
    get C879() {
      return C879 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:slime_spawn_egg"
      });
    },
    get C880() {
      return C880 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smithing_table"
      });
    },
    get C881() {
      return C881 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smoker"
      });
    },
    get C882() {
      return C882 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_quartz"
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_quartz_slab"
      });
    },
    get C884() {
      return C884 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_quartz_stairs"
      });
    },
    get C885() {
      return C885 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_red_sandstone"
      });
    },
    get C886() {
      return C886 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_red_sandstone_slab"
      });
    },
    get C887() {
      return C887 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_red_sandstone_stairs"
      });
    },
    get C888() {
      return C888 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_sandstone"
      });
    },
    get C889() {
      return C889 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_sandstone_slab"
      });
    },
    get C890() {
      return C890 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_sandstone_stairs"
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_stone"
      });
    },
    get C892() {
      return C892 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:smooth_stone_slab"
      });
    },
    get C893() {
      return C893 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:snow"
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:snow_block"
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:snowball"
      });
    },
    get C896() {
      return C896 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:soul_sand"
      });
    },
    get C897() {
      return C897 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spawner"
      });
    },
    get C898() {
      return C898 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spectral_arrow"
      });
    },
    get C899() {
      return C899 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spider_eye"
      });
    },
    get C900() {
      return C900 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spider_spawn_egg"
      });
    },
    get C901() {
      return C901 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:splash_potion"
      });
    },
    get C902() {
      return C902 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sponge"
      });
    },
    get C903() {
      return C903 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_boat"
      });
    },
    get C904() {
      return C904 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_button"
      });
    },
    get C905() {
      return C905 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_door"
      });
    },
    get C906() {
      return C906 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_fence"
      });
    },
    get C907() {
      return C907 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_fence_gate"
      });
    },
    get C908() {
      return C908 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_leaves"
      });
    },
    get C909() {
      return C909 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_log"
      });
    },
    get C910() {
      return C910 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_planks"
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_pressure_plate"
      });
    },
    get C912() {
      return C912 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_sapling"
      });
    },
    get C913() {
      return C913 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_sign"
      });
    },
    get C914() {
      return C914 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_slab"
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_stairs"
      });
    },
    get C916() {
      return C916 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_trapdoor"
      });
    },
    get C917() {
      return C917 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:spruce_wood"
      });
    },
    get C918() {
      return C918 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:squid_spawn_egg"
      });
    },
    get C919() {
      return C919 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stick"
      });
    },
    get C920() {
      return C920 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sticky_piston"
      });
    },
    get C921() {
      return C921 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone"
      });
    },
    get C922() {
      return C922 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_axe"
      });
    },
    get C923() {
      return C923 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_brick_slab"
      });
    },
    get C924() {
      return C924 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_brick_stairs"
      });
    },
    get C925() {
      return C925 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_brick_wall"
      });
    },
    get C926() {
      return C926 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_bricks"
      });
    },
    get C927() {
      return C927 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_button"
      });
    },
    get C928() {
      return C928 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_hoe"
      });
    },
    get C929() {
      return C929 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_pickaxe"
      });
    },
    get C930() {
      return C930 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_pressure_plate"
      });
    },
    get C931() {
      return C931 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_shovel"
      });
    },
    get C932() {
      return C932 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_slab"
      });
    },
    get C933() {
      return C933 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_stairs"
      });
    },
    get C934() {
      return C934 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stone_sword"
      });
    },
    get C935() {
      return C935 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stonecutter"
      });
    },
    get C936() {
      return C936 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stray_spawn_egg"
      });
    },
    get C937() {
      return C937 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:string"
      });
    },
    get C938() {
      return C938 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_acacia_log"
      });
    },
    get C939() {
      return C939 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_acacia_wood"
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_birch_log"
      });
    },
    get C941() {
      return C941 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_birch_wood"
      });
    },
    get C942() {
      return C942 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_dark_oak_log"
      });
    },
    get C943() {
      return C943 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_dark_oak_wood"
      });
    },
    get C944() {
      return C944 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_jungle_log"
      });
    },
    get C945() {
      return C945 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_jungle_wood"
      });
    },
    get C946() {
      return C946 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_oak_log"
      });
    },
    get C947() {
      return C947 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_oak_wood"
      });
    },
    get C948() {
      return C948 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_spruce_log"
      });
    },
    get C949() {
      return C949 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_spruce_wood"
      });
    },
    get C950() {
      return C950 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:structure_block"
      });
    },
    get C951() {
      return C951 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:structure_void"
      });
    },
    get C952() {
      return C952 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sugar"
      });
    },
    get C953() {
      return C953 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sugar_cane"
      });
    },
    get C954() {
      return C954 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sunflower"
      });
    },
    get C955() {
      return C955 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:suspicious_stew"
      });
    },
    get C956() {
      return C956 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:sweet_berries"
      });
    },
    get C957() {
      return C957 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tall_grass"
      });
    },
    get C958() {
      return C958 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:terracotta"
      });
    },
    get C959() {
      return C959 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tipped_arrow"
      });
    },
    get C960() {
      return C960 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tnt"
      });
    },
    get C961() {
      return C961 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tnt_minecart"
      });
    },
    get C962() {
      return C962 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:torch"
      });
    },
    get C963() {
      return C963 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:totem_of_undying"
      });
    },
    get C964() {
      return C964 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:trader_llama_spawn_egg"
      });
    },
    get C965() {
      return C965 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:trapped_chest"
      });
    },
    get C966() {
      return C966 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:trident"
      });
    },
    get C967() {
      return C967 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tripwire_hook"
      });
    },
    get C968() {
      return C968 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tropical_fish"
      });
    },
    get C969() {
      return C969 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tropical_fish_bucket"
      });
    },
    get C970() {
      return C970 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tropical_fish_spawn_egg"
      });
    },
    get C971() {
      return C971 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tube_coral"
      });
    },
    get C972() {
      return C972 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tube_coral_block"
      });
    },
    get C973() {
      return C973 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:tube_coral_fan"
      });
    },
    get C974() {
      return C974 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:turtle_egg"
      });
    },
    get C975() {
      return C975 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:turtle_helmet"
      });
    },
    get C976() {
      return C976 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:turtle_spawn_egg"
      });
    },
    get C977() {
      return C977 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:vex_spawn_egg"
      });
    },
    get C978() {
      return C978 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:villager_spawn_egg"
      });
    },
    get C979() {
      return C979 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:vindicator_spawn_egg"
      });
    },
    get C980() {
      return C980 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:vine"
      });
    },
    get C981() {
      return C981 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wandering_trader_spawn_egg"
      });
    },
    get C982() {
      return C982 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:water_bucket"
      });
    },
    get C983() {
      return C983 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wet_sponge"
      });
    },
    get C984() {
      return C984 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wheat"
      });
    },
    get C985() {
      return C985 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wheat_seeds"
      });
    },
    get C986() {
      return C986 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_banner"
      });
    },
    get C987() {
      return C987 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_bed"
      });
    },
    get C988() {
      return C988 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_carpet"
      });
    },
    get C989() {
      return C989 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_concrete"
      });
    },
    get C990() {
      return C990 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_concrete_powder"
      });
    },
    get C991() {
      return C991 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_dye"
      });
    },
    get C992() {
      return C992 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_glazed_terracotta"
      });
    },
    get C993() {
      return C993 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_shulker_box"
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_stained_glass"
      });
    },
    get C995() {
      return C995 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_stained_glass_pane"
      });
    },
    get C996() {
      return C996 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_terracotta"
      });
    },
    get C997() {
      return C997 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_tulip"
      });
    },
    get C998() {
      return C998 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:white_wool"
      });
    },
    get C999() {
      return C999 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:witch_spawn_egg"
      });
    },
    get C1000() {
      return C1000 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wither_rose"
      });
    },
    get C1001() {
      return C1001 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wither_skeleton_skull"
      });
    },
    get C1002() {
      return C1002 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wither_skeleton_spawn_egg"
      });
    },
    get C1003() {
      return C1003 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wolf_spawn_egg"
      });
    },
    get C1004() {
      return C1004 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wooden_axe"
      });
    },
    get C1005() {
      return C1005 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wooden_hoe"
      });
    },
    get C1006() {
      return C1006 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wooden_pickaxe"
      });
    },
    get C1007() {
      return C1007 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wooden_shovel"
      });
    },
    get C1008() {
      return C1008 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:wooden_sword"
      });
    },
    get C1009() {
      return C1009 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:writable_book"
      });
    },
    get C1010() {
      return C1010 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:written_book"
      });
    },
    get C1011() {
      return C1011 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_banner"
      });
    },
    get C1012() {
      return C1012 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_bed"
      });
    },
    get C1013() {
      return C1013 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_carpet"
      });
    },
    get C1014() {
      return C1014 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_concrete"
      });
    },
    get C1015() {
      return C1015 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_concrete_powder"
      });
    },
    get C1016() {
      return C1016 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_dye"
      });
    },
    get C1017() {
      return C1017 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_glazed_terracotta"
      });
    },
    get C1018() {
      return C1018 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_shulker_box"
      });
    },
    get C1019() {
      return C1019 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_stained_glass"
      });
    },
    get C1020() {
      return C1020 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_stained_glass_pane"
      });
    },
    get C1021() {
      return C1021 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_terracotta"
      });
    },
    get C1022() {
      return C1022 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:yellow_wool"
      });
    },
    get C1023() {
      return C1023 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombie_head"
      });
    },
    get C1024() {
      return C1024 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombie_horse_spawn_egg"
      });
    },
    get C1025() {
      return C1025 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombie_pigman_spawn_egg"
      });
    },
    get C1026() {
      return C1026 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombie_spawn_egg"
      });
    },
    get C1027() {
      return C1027 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombie_villager_spawn_egg"
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147, C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157, C158 || CT.C158, C159 || CT.C159, C160 || CT.C160, C161 || CT.C161, C162 || CT.C162, C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173, C174 || CT.C174, C175 || CT.C175, C176 || CT.C176, C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181, C182 || CT.C182, C183 || CT.C183, C184 || CT.C184, C185 || CT.C185, C186 || CT.C186, C187 || CT.C187, C188 || CT.C188, C189 || CT.C189, C190 || CT.C190, C191 || CT.C191, C192 || CT.C192, C193 || CT.C193, C194 || CT.C194, C195 || CT.C195, C196 || CT.C196, C197 || CT.C197, C198 || CT.C198, C199 || CT.C199, C200 || CT.C200, C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204, C205 || CT.C205, C206 || CT.C206, C207 || CT.C207, C208 || CT.C208, C209 || CT.C209, C210 || CT.C210, C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217, C218 || CT.C218, C219 || CT.C219, C220 || CT.C220, C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225, C226 || CT.C226, C227 || CT.C227, C228 || CT.C228, C229 || CT.C229, C230 || CT.C230, C231 || CT.C231, C232 || CT.C232, C233 || CT.C233, C234 || CT.C234, C235 || CT.C235, C236 || CT.C236, C237 || CT.C237, C238 || CT.C238, C239 || CT.C239, C240 || CT.C240, C241 || CT.C241, C242 || CT.C242, C243 || CT.C243, C244 || CT.C244, C245 || CT.C245, C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249, C250 || CT.C250, C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258, C259 || CT.C259, C260 || CT.C260, C261 || CT.C261, C262 || CT.C262, C263 || CT.C263, C264 || CT.C264, C265 || CT.C265, C266 || CT.C266, C267 || CT.C267, C268 || CT.C268, C269 || CT.C269, C270 || CT.C270, C271 || CT.C271, C272 || CT.C272, C273 || CT.C273, C274 || CT.C274, C275 || CT.C275, C276 || CT.C276, C277 || CT.C277, C278 || CT.C278, C279 || CT.C279, C280 || CT.C280, C281 || CT.C281, C282 || CT.C282, C283 || CT.C283, C284 || CT.C284, C285 || CT.C285, C286 || CT.C286, C287 || CT.C287, C288 || CT.C288, C289 || CT.C289, C290 || CT.C290, C291 || CT.C291, C292 || CT.C292, C293 || CT.C293, C294 || CT.C294, C295 || CT.C295, C296 || CT.C296, C297 || CT.C297, C298 || CT.C298, C299 || CT.C299, C300 || CT.C300, C301 || CT.C301, C302 || CT.C302, C303 || CT.C303, C304 || CT.C304, C305 || CT.C305, C306 || CT.C306, C307 || CT.C307, C308 || CT.C308, C309 || CT.C309, C310 || CT.C310, C311 || CT.C311, C312 || CT.C312, C313 || CT.C313, C314 || CT.C314, C315 || CT.C315, C316 || CT.C316, C317 || CT.C317, C318 || CT.C318, C319 || CT.C319, C320 || CT.C320, C321 || CT.C321, C322 || CT.C322, C323 || CT.C323, C324 || CT.C324, C325 || CT.C325, C326 || CT.C326, C327 || CT.C327, C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331, C332 || CT.C332, C333 || CT.C333, C334 || CT.C334, C335 || CT.C335, C336 || CT.C336, C337 || CT.C337, C338 || CT.C338, C339 || CT.C339, C340 || CT.C340, C341 || CT.C341, C342 || CT.C342, C343 || CT.C343, C344 || CT.C344, C345 || CT.C345, C346 || CT.C346, C347 || CT.C347, C348 || CT.C348, C349 || CT.C349, C350 || CT.C350, C351 || CT.C351, C352 || CT.C352, C353 || CT.C353, C354 || CT.C354, C355 || CT.C355, C356 || CT.C356, C357 || CT.C357, C358 || CT.C358, C359 || CT.C359, C360 || CT.C360, C361 || CT.C361, C362 || CT.C362, C363 || CT.C363, C364 || CT.C364, C365 || CT.C365, C366 || CT.C366, C367 || CT.C367, C368 || CT.C368, C369 || CT.C369, C370 || CT.C370, C371 || CT.C371, C372 || CT.C372, C373 || CT.C373, C374 || CT.C374, C375 || CT.C375, C376 || CT.C376, C377 || CT.C377, C378 || CT.C378, C379 || CT.C379, C380 || CT.C380, C381 || CT.C381, C382 || CT.C382, C383 || CT.C383, C384 || CT.C384, C385 || CT.C385, C386 || CT.C386, C387 || CT.C387, C388 || CT.C388, C389 || CT.C389, C390 || CT.C390, C391 || CT.C391, C392 || CT.C392, C393 || CT.C393, C394 || CT.C394, C395 || CT.C395, C396 || CT.C396, C397 || CT.C397, C398 || CT.C398, C399 || CT.C399, C400 || CT.C400, C401 || CT.C401, C402 || CT.C402, C403 || CT.C403, C404 || CT.C404, C405 || CT.C405, C406 || CT.C406, C407 || CT.C407, C408 || CT.C408, C409 || CT.C409, C410 || CT.C410, C411 || CT.C411, C412 || CT.C412, C413 || CT.C413, C414 || CT.C414, C415 || CT.C415, C416 || CT.C416, C417 || CT.C417, C418 || CT.C418, C419 || CT.C419, C420 || CT.C420, C421 || CT.C421, C422 || CT.C422, C423 || CT.C423, C424 || CT.C424, C425 || CT.C425, C426 || CT.C426, C427 || CT.C427, C428 || CT.C428, C429 || CT.C429, C430 || CT.C430, C431 || CT.C431, C432 || CT.C432, C433 || CT.C433, C434 || CT.C434, C435 || CT.C435, C436 || CT.C436, C437 || CT.C437, C438 || CT.C438, C439 || CT.C439, C440 || CT.C440, C441 || CT.C441, C442 || CT.C442, C443 || CT.C443, C444 || CT.C444, C445 || CT.C445, C446 || CT.C446, C447 || CT.C447, C448 || CT.C448, C449 || CT.C449, C450 || CT.C450, C451 || CT.C451, C452 || CT.C452, C453 || CT.C453, C454 || CT.C454, C455 || CT.C455, C456 || CT.C456, C457 || CT.C457, C458 || CT.C458, C459 || CT.C459, C460 || CT.C460, C461 || CT.C461, C462 || CT.C462, C463 || CT.C463, C464 || CT.C464, C465 || CT.C465, C466 || CT.C466, C467 || CT.C467, C468 || CT.C468, C469 || CT.C469, C470 || CT.C470, C471 || CT.C471, C472 || CT.C472, C473 || CT.C473, C474 || CT.C474, C475 || CT.C475, C476 || CT.C476, C477 || CT.C477, C478 || CT.C478, C479 || CT.C479, C480 || CT.C480, C481 || CT.C481, C482 || CT.C482, C483 || CT.C483, C484 || CT.C484, C485 || CT.C485, C486 || CT.C486, C487 || CT.C487, C488 || CT.C488, C489 || CT.C489, C490 || CT.C490, C491 || CT.C491, C492 || CT.C492, C493 || CT.C493, C494 || CT.C494, C495 || CT.C495, C496 || CT.C496, C497 || CT.C497, C498 || CT.C498, C499 || CT.C499, C500 || CT.C500, C501 || CT.C501, C502 || CT.C502, C503 || CT.C503, C504 || CT.C504, C505 || CT.C505, C506 || CT.C506, C507 || CT.C507, C508 || CT.C508, C509 || CT.C509, C510 || CT.C510, C511 || CT.C511, C512 || CT.C512, C513 || CT.C513, C514 || CT.C514, C515 || CT.C515, C516 || CT.C516, C517 || CT.C517, C518 || CT.C518, C519 || CT.C519, C520 || CT.C520, C521 || CT.C521, C522 || CT.C522, C523 || CT.C523, C524 || CT.C524, C525 || CT.C525, C526 || CT.C526, C527 || CT.C527, C528 || CT.C528, C529 || CT.C529, C530 || CT.C530, C531 || CT.C531, C532 || CT.C532, C533 || CT.C533, C534 || CT.C534, C535 || CT.C535, C536 || CT.C536, C537 || CT.C537, C538 || CT.C538, C539 || CT.C539, C540 || CT.C540, C541 || CT.C541, C542 || CT.C542, C543 || CT.C543, C544 || CT.C544, C545 || CT.C545, C546 || CT.C546, C547 || CT.C547, C548 || CT.C548, C549 || CT.C549, C550 || CT.C550, C551 || CT.C551, C552 || CT.C552, C553 || CT.C553, C554 || CT.C554, C555 || CT.C555, C556 || CT.C556, C557 || CT.C557, C558 || CT.C558, C559 || CT.C559, C560 || CT.C560, C561 || CT.C561, C562 || CT.C562, C563 || CT.C563, C564 || CT.C564, C565 || CT.C565, C566 || CT.C566, C567 || CT.C567, C568 || CT.C568, C569 || CT.C569, C570 || CT.C570, C571 || CT.C571, C572 || CT.C572, C573 || CT.C573, C574 || CT.C574, C575 || CT.C575, C576 || CT.C576, C577 || CT.C577, C578 || CT.C578, C579 || CT.C579, C580 || CT.C580, C581 || CT.C581, C582 || CT.C582, C583 || CT.C583, C584 || CT.C584, C585 || CT.C585, C586 || CT.C586, C587 || CT.C587, C588 || CT.C588, C589 || CT.C589, C590 || CT.C590, C591 || CT.C591, C592 || CT.C592, C593 || CT.C593, C594 || CT.C594, C595 || CT.C595, C596 || CT.C596, C597 || CT.C597, C598 || CT.C598, C599 || CT.C599, C600 || CT.C600, C601 || CT.C601, C602 || CT.C602, C603 || CT.C603, C604 || CT.C604, C605 || CT.C605, C606 || CT.C606, C607 || CT.C607, C608 || CT.C608, C609 || CT.C609, C610 || CT.C610, C611 || CT.C611, C612 || CT.C612, C613 || CT.C613, C614 || CT.C614, C615 || CT.C615, C616 || CT.C616, C617 || CT.C617, C618 || CT.C618, C619 || CT.C619, C620 || CT.C620, C621 || CT.C621, C622 || CT.C622, C623 || CT.C623, C624 || CT.C624, C625 || CT.C625, C626 || CT.C626, C627 || CT.C627, C628 || CT.C628, C629 || CT.C629, C630 || CT.C630, C631 || CT.C631, C632 || CT.C632, C633 || CT.C633, C634 || CT.C634, C635 || CT.C635, C636 || CT.C636, C637 || CT.C637, C638 || CT.C638, C639 || CT.C639, C640 || CT.C640, C641 || CT.C641, C642 || CT.C642, C643 || CT.C643, C644 || CT.C644, C645 || CT.C645, C646 || CT.C646, C647 || CT.C647, C648 || CT.C648, C649 || CT.C649, C650 || CT.C650, C651 || CT.C651, C652 || CT.C652, C653 || CT.C653, C654 || CT.C654, C655 || CT.C655, C656 || CT.C656, C657 || CT.C657, C658 || CT.C658, C659 || CT.C659, C660 || CT.C660, C661 || CT.C661, C662 || CT.C662, C663 || CT.C663, C664 || CT.C664, C665 || CT.C665, C666 || CT.C666, C667 || CT.C667, C668 || CT.C668, C669 || CT.C669, C670 || CT.C670, C671 || CT.C671, C672 || CT.C672, C673 || CT.C673, C674 || CT.C674, C675 || CT.C675, C676 || CT.C676, C677 || CT.C677, C678 || CT.C678, C679 || CT.C679, C680 || CT.C680, C681 || CT.C681, C682 || CT.C682, C683 || CT.C683, C684 || CT.C684, C685 || CT.C685, C686 || CT.C686, C687 || CT.C687, C688 || CT.C688, C689 || CT.C689, C690 || CT.C690, C691 || CT.C691, C692 || CT.C692, C693 || CT.C693, C694 || CT.C694, C695 || CT.C695, C696 || CT.C696, C697 || CT.C697, C698 || CT.C698, C699 || CT.C699, C700 || CT.C700, C701 || CT.C701, C702 || CT.C702, C703 || CT.C703, C704 || CT.C704, C705 || CT.C705, C706 || CT.C706, C707 || CT.C707, C708 || CT.C708, C709 || CT.C709, C710 || CT.C710, C711 || CT.C711, C712 || CT.C712, C713 || CT.C713, C714 || CT.C714, C715 || CT.C715, C716 || CT.C716, C717 || CT.C717, C718 || CT.C718, C719 || CT.C719, C720 || CT.C720, C721 || CT.C721, C722 || CT.C722, C723 || CT.C723, C724 || CT.C724, C725 || CT.C725, C726 || CT.C726, C727 || CT.C727, C728 || CT.C728, C729 || CT.C729, C730 || CT.C730, C731 || CT.C731, C732 || CT.C732, C733 || CT.C733, C734 || CT.C734, C735 || CT.C735, C736 || CT.C736, C737 || CT.C737, C738 || CT.C738, C739 || CT.C739, C740 || CT.C740, C741 || CT.C741, C742 || CT.C742, C743 || CT.C743, C744 || CT.C744, C745 || CT.C745, C746 || CT.C746, C747 || CT.C747, C748 || CT.C748, C749 || CT.C749, C750 || CT.C750, C751 || CT.C751, C752 || CT.C752, C753 || CT.C753, C754 || CT.C754, C755 || CT.C755, C756 || CT.C756, C757 || CT.C757, C758 || CT.C758, C759 || CT.C759, C760 || CT.C760, C761 || CT.C761, C762 || CT.C762, C763 || CT.C763, C764 || CT.C764, C765 || CT.C765, C766 || CT.C766, C767 || CT.C767, C768 || CT.C768, C769 || CT.C769, C770 || CT.C770, C771 || CT.C771, C772 || CT.C772, C773 || CT.C773, C774 || CT.C774, C775 || CT.C775, C776 || CT.C776, C777 || CT.C777, C778 || CT.C778, C779 || CT.C779, C780 || CT.C780, C781 || CT.C781, C782 || CT.C782, C783 || CT.C783, C784 || CT.C784, C785 || CT.C785, C786 || CT.C786, C787 || CT.C787, C788 || CT.C788, C789 || CT.C789, C790 || CT.C790, C791 || CT.C791, C792 || CT.C792, C793 || CT.C793, C794 || CT.C794, C795 || CT.C795, C796 || CT.C796, C797 || CT.C797, C798 || CT.C798, C799 || CT.C799, C800 || CT.C800, C801 || CT.C801, C802 || CT.C802, C803 || CT.C803, C804 || CT.C804, C805 || CT.C805, C806 || CT.C806, C807 || CT.C807, C808 || CT.C808, C809 || CT.C809, C810 || CT.C810, C811 || CT.C811, C812 || CT.C812, C813 || CT.C813, C814 || CT.C814, C815 || CT.C815, C816 || CT.C816, C817 || CT.C817, C818 || CT.C818, C819 || CT.C819, C820 || CT.C820, C821 || CT.C821, C822 || CT.C822, C823 || CT.C823, C824 || CT.C824, C825 || CT.C825, C826 || CT.C826, C827 || CT.C827, C828 || CT.C828, C829 || CT.C829, C830 || CT.C830, C831 || CT.C831, C832 || CT.C832, C833 || CT.C833, C834 || CT.C834, C835 || CT.C835, C836 || CT.C836, C837 || CT.C837, C838 || CT.C838, C839 || CT.C839, C840 || CT.C840, C841 || CT.C841, C842 || CT.C842, C843 || CT.C843, C844 || CT.C844, C845 || CT.C845, C846 || CT.C846, C847 || CT.C847, C848 || CT.C848, C849 || CT.C849, C850 || CT.C850, C851 || CT.C851, C852 || CT.C852, C853 || CT.C853, C854 || CT.C854, C855 || CT.C855, C856 || CT.C856, C857 || CT.C857, C858 || CT.C858, C859 || CT.C859, C860 || CT.C860, C861 || CT.C861, C862 || CT.C862, C863 || CT.C863, C864 || CT.C864, C865 || CT.C865, C866 || CT.C866, C867 || CT.C867, C868 || CT.C868, C869 || CT.C869, C870 || CT.C870, C871 || CT.C871, C872 || CT.C872, C873 || CT.C873, C874 || CT.C874, C875 || CT.C875, C876 || CT.C876, C877 || CT.C877, C878 || CT.C878, C879 || CT.C879, C880 || CT.C880, C881 || CT.C881, C882 || CT.C882, C883 || CT.C883, C884 || CT.C884, C885 || CT.C885, C886 || CT.C886, C887 || CT.C887, C888 || CT.C888, C889 || CT.C889, C890 || CT.C890, C891 || CT.C891, C892 || CT.C892, C893 || CT.C893, C894 || CT.C894, C895 || CT.C895, C896 || CT.C896, C897 || CT.C897, C898 || CT.C898, C899 || CT.C899, C900 || CT.C900, C901 || CT.C901, C902 || CT.C902, C903 || CT.C903, C904 || CT.C904, C905 || CT.C905, C906 || CT.C906, C907 || CT.C907, C908 || CT.C908, C909 || CT.C909, C910 || CT.C910, C911 || CT.C911, C912 || CT.C912, C913 || CT.C913, C914 || CT.C914, C915 || CT.C915, C916 || CT.C916, C917 || CT.C917, C918 || CT.C918, C919 || CT.C919, C920 || CT.C920, C921 || CT.C921, C922 || CT.C922, C923 || CT.C923, C924 || CT.C924, C925 || CT.C925, C926 || CT.C926, C927 || CT.C927, C928 || CT.C928, C929 || CT.C929, C930 || CT.C930, C931 || CT.C931, C932 || CT.C932, C933 || CT.C933, C934 || CT.C934, C935 || CT.C935, C936 || CT.C936, C937 || CT.C937, C938 || CT.C938, C939 || CT.C939, C940 || CT.C940, C941 || CT.C941, C942 || CT.C942, C943 || CT.C943, C944 || CT.C944, C945 || CT.C945, C946 || CT.C946, C947 || CT.C947, C948 || CT.C948, C949 || CT.C949, C950 || CT.C950, C951 || CT.C951, C952 || CT.C952, C953 || CT.C953, C954 || CT.C954, C955 || CT.C955, C956 || CT.C956, C957 || CT.C957, C958 || CT.C958, C959 || CT.C959, C960 || CT.C960, C961 || CT.C961, C962 || CT.C962, C963 || CT.C963, C964 || CT.C964, C965 || CT.C965, C966 || CT.C966, C967 || CT.C967, C968 || CT.C968, C969 || CT.C969, C970 || CT.C970, C971 || CT.C971, C972 || CT.C972, C973 || CT.C973, C974 || CT.C974, C975 || CT.C975, C976 || CT.C976, C977 || CT.C977, C978 || CT.C978, C979 || CT.C979, C980 || CT.C980, C981 || CT.C981, C982 || CT.C982, C983 || CT.C983, C984 || CT.C984, C985 || CT.C985, C986 || CT.C986, C987 || CT.C987, C988 || CT.C988, C989 || CT.C989, C990 || CT.C990, C991 || CT.C991, C992 || CT.C992, C993 || CT.C993, C994 || CT.C994, C995 || CT.C995, C996 || CT.C996, C997 || CT.C997, C998 || CT.C998, C999 || CT.C999, C1000 || CT.C1000, C1001 || CT.C1001, C1002 || CT.C1002, C1003 || CT.C1003, C1004 || CT.C1004, C1005 || CT.C1005, C1006 || CT.C1006, C1007 || CT.C1007, C1008 || CT.C1008, C1009 || CT.C1009, C1010 || CT.C1010, C1011 || CT.C1011, C1012 || CT.C1012, C1013 || CT.C1013, C1014 || CT.C1014, C1015 || CT.C1015, C1016 || CT.C1016, C1017 || CT.C1017, C1018 || CT.C1018, C1019 || CT.C1019, C1020 || CT.C1020, C1021 || CT.C1021, C1022 || CT.C1022, C1023 || CT.C1023, C1024 || CT.C1024, C1025 || CT.C1025, C1026 || CT.C1026, C1027 || CT.C1027], ItemL());
    },
    get C1029() {
      return C1029 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:ancient_debris"
      });
    },
    get C1030() {
      return C1030 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:basalt"
      });
    },
    get C1031() {
      return C1031 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blackstone"
      });
    },
    get C1032() {
      return C1032 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blackstone_slab"
      });
    },
    get C1033() {
      return C1033 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blackstone_stairs"
      });
    },
    get C1034() {
      return C1034 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:blackstone_wall"
      });
    },
    get C1035() {
      return C1035 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chain"
      });
    },
    get C1036() {
      return C1036 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_nether_bricks"
      });
    },
    get C1037() {
      return C1037 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:chiseled_polished_blackstone"
      });
    },
    get C1038() {
      return C1038 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cracked_nether_bricks"
      });
    },
    get C1039() {
      return C1039 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:cracked_polished_blackstone_bricks"
      });
    },
    get C1040() {
      return C1040 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_button"
      });
    },
    get C1041() {
      return C1041 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_door"
      });
    },
    get C1042() {
      return C1042 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_fence"
      });
    },
    get C1043() {
      return C1043 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_fence_gate"
      });
    },
    get C1044() {
      return C1044 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_fungus"
      });
    },
    get C1045() {
      return C1045 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_hyphae"
      });
    },
    get C1046() {
      return C1046 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_nylium"
      });
    },
    get C1047() {
      return C1047 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_planks"
      });
    },
    get C1048() {
      return C1048 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_pressure_plate"
      });
    },
    get C1049() {
      return C1049 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_roots"
      });
    },
    get C1050() {
      return C1050 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_sign"
      });
    },
    get C1051() {
      return C1051 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_slab"
      });
    },
    get C1052() {
      return C1052 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_stairs"
      });
    },
    get C1053() {
      return C1053 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_stem"
      });
    },
    get C1054() {
      return C1054 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crimson_trapdoor"
      });
    },
    get C1055() {
      return C1055 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:crying_obsidian"
      });
    },
    get C1056() {
      return C1056 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:gilded_blackstone"
      });
    },
    get C1057() {
      return C1057 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:hoglin_spawn_egg"
      });
    },
    get C1058() {
      return C1058 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:lodestone"
      });
    },
    get C1059() {
      return C1059 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:music_disc_pigstep"
      });
    },
    get C1060() {
      return C1060 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_gold_ore"
      });
    },
    get C1061() {
      return C1061 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:nether_sprouts"
      });
    },
    get C1062() {
      return C1062 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_axe"
      });
    },
    get C1063() {
      return C1063 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_block"
      });
    },
    get C1064() {
      return C1064 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_boots"
      });
    },
    get C1065() {
      return C1065 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_chestplate"
      });
    },
    get C1066() {
      return C1066 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_helmet"
      });
    },
    get C1067() {
      return C1067 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_hoe"
      });
    },
    get C1068() {
      return C1068 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_ingot"
      });
    },
    get C1069() {
      return C1069 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_leggings"
      });
    },
    get C1070() {
      return C1070 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_pickaxe"
      });
    },
    get C1071() {
      return C1071 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_scrap"
      });
    },
    get C1072() {
      return C1072 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_shovel"
      });
    },
    get C1073() {
      return C1073 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:netherite_sword"
      });
    },
    get C1074() {
      return C1074 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:piglin_banner_pattern"
      });
    },
    get C1075() {
      return C1075 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:piglin_spawn_egg"
      });
    },
    get C1076() {
      return C1076 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_basalt"
      });
    },
    get C1077() {
      return C1077 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone"
      });
    },
    get C1078() {
      return C1078 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_brick_slab"
      });
    },
    get C1079() {
      return C1079 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_brick_stairs"
      });
    },
    get C1080() {
      return C1080 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_brick_wall"
      });
    },
    get C1081() {
      return C1081 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_bricks"
      });
    },
    get C1082() {
      return C1082 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_button"
      });
    },
    get C1083() {
      return C1083 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_pressure_plate"
      });
    },
    get C1084() {
      return C1084 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_slab"
      });
    },
    get C1085() {
      return C1085 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_stairs"
      });
    },
    get C1086() {
      return C1086 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:polished_blackstone_wall"
      });
    },
    get C1087() {
      return C1087 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:quartz_bricks"
      });
    },
    get C1088() {
      return C1088 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:respawn_anchor"
      });
    },
    get C1089() {
      return C1089 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:shroomlight"
      });
    },
    get C1090() {
      return C1090 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:soul_campfire"
      });
    },
    get C1091() {
      return C1091 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:soul_lantern"
      });
    },
    get C1092() {
      return C1092 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:soul_soil"
      });
    },
    get C1093() {
      return C1093 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:soul_torch"
      });
    },
    get C1094() {
      return C1094 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:strider_spawn_egg"
      });
    },
    get C1095() {
      return C1095 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_crimson_hyphae"
      });
    },
    get C1096() {
      return C1096 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_crimson_stem"
      });
    },
    get C1097() {
      return C1097 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_warped_hyphae"
      });
    },
    get C1098() {
      return C1098 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:stripped_warped_stem"
      });
    },
    get C1099() {
      return C1099 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:target"
      });
    },
    get C1100() {
      return C1100 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:twisting_vines"
      });
    },
    get C1101() {
      return C1101 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_button"
      });
    },
    get C1102() {
      return C1102 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_door"
      });
    },
    get C1103() {
      return C1103 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_fence"
      });
    },
    get C1104() {
      return C1104 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_fence_gate"
      });
    },
    get C1105() {
      return C1105 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_fungus"
      });
    },
    get C1106() {
      return C1106 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_fungus_on_a_stick"
      });
    },
    get C1107() {
      return C1107 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_hyphae"
      });
    },
    get C1108() {
      return C1108 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_nylium"
      });
    },
    get C1109() {
      return C1109 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_planks"
      });
    },
    get C1110() {
      return C1110 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_pressure_plate"
      });
    },
    get C1111() {
      return C1111 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_roots"
      });
    },
    get C1112() {
      return C1112 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_sign"
      });
    },
    get C1113() {
      return C1113 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_slab"
      });
    },
    get C1114() {
      return C1114 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_stairs"
      });
    },
    get C1115() {
      return C1115 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_stem"
      });
    },
    get C1116() {
      return C1116 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_trapdoor"
      });
    },
    get C1117() {
      return C1117 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:warped_wart_block"
      });
    },
    get C1118() {
      return C1118 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:weeping_vines"
      });
    },
    get C1119() {
      return C1119 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zoglin_spawn_egg"
      });
    },
    get C1120() {
      return C1120 = dart.const({
        __proto__: item.Item.prototype,
        [tag$0]: null,
        [slot$0]: null,
        [damage$]: null,
        [count$]: null,
        [type$1]: "minecraft:zombified_piglin_spawn_egg"
      });
    },
    get C1028() {
      return C1028 = dart.constList([C1029 || CT.C1029, C1030 || CT.C1030, C1031 || CT.C1031, C1032 || CT.C1032, C1033 || CT.C1033, C1034 || CT.C1034, C1035 || CT.C1035, C1036 || CT.C1036, C1037 || CT.C1037, C1038 || CT.C1038, C1039 || CT.C1039, C1040 || CT.C1040, C1041 || CT.C1041, C1042 || CT.C1042, C1043 || CT.C1043, C1044 || CT.C1044, C1045 || CT.C1045, C1046 || CT.C1046, C1047 || CT.C1047, C1048 || CT.C1048, C1049 || CT.C1049, C1050 || CT.C1050, C1051 || CT.C1051, C1052 || CT.C1052, C1053 || CT.C1053, C1054 || CT.C1054, C1055 || CT.C1055, C1056 || CT.C1056, C1057 || CT.C1057, C1058 || CT.C1058, C1059 || CT.C1059, C1060 || CT.C1060, C1061 || CT.C1061, C1062 || CT.C1062, C1063 || CT.C1063, C1064 || CT.C1064, C1065 || CT.C1065, C1066 || CT.C1066, C1067 || CT.C1067, C1068 || CT.C1068, C1069 || CT.C1069, C1070 || CT.C1070, C1071 || CT.C1071, C1072 || CT.C1072, C1073 || CT.C1073, C1074 || CT.C1074, C1075 || CT.C1075, C1076 || CT.C1076, C1077 || CT.C1077, C1078 || CT.C1078, C1079 || CT.C1079, C1080 || CT.C1080, C1081 || CT.C1081, C1082 || CT.C1082, C1083 || CT.C1083, C1084 || CT.C1084, C1085 || CT.C1085, C1086 || CT.C1086, C1087 || CT.C1087, C1088 || CT.C1088, C1089 || CT.C1089, C1090 || CT.C1090, C1091 || CT.C1091, C1092 || CT.C1092, C1093 || CT.C1093, C1094 || CT.C1094, C1095 || CT.C1095, C1096 || CT.C1096, C1097 || CT.C1097, C1098 || CT.C1098, C1099 || CT.C1099, C1100 || CT.C1100, C1101 || CT.C1101, C1102 || CT.C1102, C1103 || CT.C1103, C1104 || CT.C1104, C1105 || CT.C1105, C1106 || CT.C1106, C1107 || CT.C1107, C1108 || CT.C1108, C1109 || CT.C1109, C1110 || CT.C1110, C1111 || CT.C1111, C1112 || CT.C1112, C1113 || CT.C1113, C1114 || CT.C1114, C1115 || CT.C1115, C1116 || CT.C1116, C1117 || CT.C1117, C1118 || CT.C1118, C1119 || CT.C1119, C1120 || CT.C1120], ItemL());
    },
    get C1121() {
      return C1121 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.speed",
        index: 0
      });
    },
    get C1122() {
      return C1122 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.slowness",
        index: 1
      });
    },
    get C1123() {
      return C1123 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.haste",
        index: 2
      });
    },
    get C1124() {
      return C1124 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.mining_fatigue",
        index: 3
      });
    },
    get C1125() {
      return C1125 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.strength",
        index: 4
      });
    },
    get C1126() {
      return C1126 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.instant_health",
        index: 5
      });
    },
    get C1127() {
      return C1127 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.instant_damage",
        index: 6
      });
    },
    get C1128() {
      return C1128 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.jump_boost",
        index: 7
      });
    },
    get C1129() {
      return C1129 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.nausea",
        index: 8
      });
    },
    get C1130() {
      return C1130 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.regeneration",
        index: 9
      });
    },
    get C1131() {
      return C1131 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.resistance",
        index: 10
      });
    },
    get C1132() {
      return C1132 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.fire_resistance",
        index: 11
      });
    },
    get C1133() {
      return C1133 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.water_breathing",
        index: 12
      });
    },
    get C1134() {
      return C1134 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.invisibility",
        index: 13
      });
    },
    get C1135() {
      return C1135 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.blindness",
        index: 14
      });
    },
    get C1136() {
      return C1136 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.night_vision",
        index: 15
      });
    },
    get C1137() {
      return C1137 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.hunger",
        index: 16
      });
    },
    get C1138() {
      return C1138 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.weakness",
        index: 17
      });
    },
    get C1139() {
      return C1139 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.poison",
        index: 18
      });
    },
    get C1140() {
      return C1140 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.wither",
        index: 19
      });
    },
    get C1141() {
      return C1141 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.health_boost",
        index: 20
      });
    },
    get C1142() {
      return C1142 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.absorption",
        index: 21
      });
    },
    get C1143() {
      return C1143 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.saturation",
        index: 22
      });
    },
    get C1144() {
      return C1144 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.glowing",
        index: 23
      });
    },
    get C1145() {
      return C1145 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.levitation",
        index: 24
      });
    },
    get C1146() {
      return C1146 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.luck",
        index: 25
      });
    },
    get C1147() {
      return C1147 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.unluck",
        index: 26
      });
    },
    get C1148() {
      return C1148 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.slow_falling",
        index: 27
      });
    },
    get C1149() {
      return C1149 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.conduit_power",
        index: 28
      });
    },
    get C1150() {
      return C1150 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.dolphins_grace",
        index: 29
      });
    },
    get C1151() {
      return C1151 = dart.const({
        __proto__: effect$.EffectType.prototype,
        [_name$3]: "EffectType.bad_omen",
        index: 30
      });
    },
    get C1152() {
      return C1152 = dart.constList([C1121 || CT.C1121, C1122 || CT.C1122, C1123 || CT.C1123, C1124 || CT.C1124, C1125 || CT.C1125, C1126 || CT.C1126, C1127 || CT.C1127, C1128 || CT.C1128, C1129 || CT.C1129, C1130 || CT.C1130, C1131 || CT.C1131, C1132 || CT.C1132, C1133 || CT.C1133, C1134 || CT.C1134, C1135 || CT.C1135, C1136 || CT.C1136, C1137 || CT.C1137, C1138 || CT.C1138, C1139 || CT.C1139, C1140 || CT.C1140, C1141 || CT.C1141, C1142 || CT.C1142, C1143 || CT.C1143, C1144 || CT.C1144, C1145 || CT.C1145, C1146 || CT.C1146, C1147 || CT.C1147, C1148 || CT.C1148, C1149 || CT.C1149, C1150 || CT.C1150, C1151 || CT.C1151], EffectTypeL());
    },
    get C1153() {
      return C1153 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "white"
      });
    },
    get C1154() {
      return C1154 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "black"
      });
    },
    get C1155() {
      return C1155 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_blue"
      });
    },
    get C1156() {
      return C1156 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_green"
      });
    },
    get C1157() {
      return C1157 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_aqua"
      });
    },
    get C1158() {
      return C1158 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_red"
      });
    },
    get C1159() {
      return C1159 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_purple"
      });
    },
    get C1160() {
      return C1160 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "gold"
      });
    },
    get C1161() {
      return C1161 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "gray"
      });
    },
    get C1162() {
      return C1162 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "dark_gray"
      });
    },
    get C1163() {
      return C1163 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "blue"
      });
    },
    get C1164() {
      return C1164 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "green"
      });
    },
    get C1165() {
      return C1165 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "aqua"
      });
    },
    get C1166() {
      return C1166 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "red"
      });
    },
    get C1167() {
      return C1167 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "light_purple"
      });
    },
    get C1168() {
      return C1168 = dart.const({
        __proto__: text_components.Color.prototype,
        [_color$]: "yellow"
      });
    },
    get C1169() {
      return C1169 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.add",
        index: 0
      });
    },
    get C1170() {
      return C1170 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.empty",
        index: 5
      });
    },
    get C1171() {
      return C1171 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.remove",
        index: 1
      });
    },
    get C1172() {
      return C1172 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.join",
        index: 3
      });
    },
    get C1173() {
      return C1173 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.leave",
        index: 4
      });
    },
    get C1174() {
      return C1174 = dart.const({
        __proto__: team$._TeamAction.prototype,
        [_name$4]: "_TeamAction.modify",
        index: 2
      });
    },
    get C1175() {
      return C1175 = dart.constList([C1169 || CT.C1169, C1171 || CT.C1171, C1174 || CT.C1174, C1172 || CT.C1172, C1173 || CT.C1173, C1170 || CT.C1170], _TeamActionL());
    },
    get C1176() {
      return C1176 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.never",
        index: 0
      });
    },
    get C1177() {
      return C1177 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.always",
        index: 1
      });
    },
    get C1178() {
      return C1178 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.hideForOtherTeams",
        index: 2
      });
    },
    get C1179() {
      return C1179 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.hideForOwnTeam",
        index: 3
      });
    },
    get C1180() {
      return C1180 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.pushOtherTeams",
        index: 4
      });
    },
    get C1181() {
      return C1181 = dart.const({
        __proto__: team$.ModifyTeam.prototype,
        [_name$4]: "ModifyTeam.pushOwnTeam",
        index: 5
      });
    },
    get C1182() {
      return C1182 = dart.constList([C1176 || CT.C1176, C1177 || CT.C1177, C1178 || CT.C1178, C1179 || CT.C1179, C1180 || CT.C1180, C1181 || CT.C1181], ModifyTeamL());
    },
    get C1183() {
      return C1183 = dart.const({
        __proto__: attribute$.AttributeModifier.prototype,
        [_name$5]: "AttributeModifier.add",
        index: 0
      });
    },
    get C1184() {
      return C1184 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.set",
        index: 1
      });
    },
    get C1185() {
      return C1185 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.get_base",
        index: 3
      });
    },
    get C1186() {
      return C1186 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.get_modifier",
        index: 4
      });
    },
    get C1187() {
      return C1187 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.remove",
        index: 5
      });
    },
    get C1188() {
      return C1188 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.add",
        index: 0
      });
    },
    get C1189() {
      return C1189 = dart.const({
        __proto__: attribute$.AttributeModifier.prototype,
        [_name$5]: "AttributeModifier.multiply",
        index: 1
      });
    },
    get C1190() {
      return C1190 = dart.const({
        __proto__: attribute$.AttributeModifier.prototype,
        [_name$5]: "AttributeModifier.multiply_base",
        index: 2
      });
    },
    get C1191() {
      return C1191 = dart.constList([C1183 || CT.C1183, C1189 || CT.C1189, C1190 || CT.C1190], AttributeModifierL());
    },
    get C1192() {
      return C1192 = dart.const({
        __proto__: attribute$._AttributeType.prototype,
        [_name$5]: "_AttributeType.get",
        index: 2
      });
    },
    get C1193() {
      return C1193 = dart.constList([C1188 || CT.C1188, C1184 || CT.C1184, C1192 || CT.C1192, C1185 || CT.C1185, C1186 || CT.C1186, C1187 || CT.C1187], _AttributeTypeL());
    },
    get C1194() {
      return C1194 = dart.const({
        __proto__: bossbar.BossbarOption.prototype,
        [_name$1]: "BossbarOption.max",
        index: 0
      });
    },
    get C1195() {
      return C1195 = dart.const({
        __proto__: bossbar.BossbarOption.prototype,
        [_name$1]: "BossbarOption.players",
        index: 1
      });
    },
    get C1196() {
      return C1196 = dart.const({
        __proto__: bossbar.BossbarOption.prototype,
        [_name$1]: "BossbarOption.visible",
        index: 3
      });
    },
    get C1197() {
      return C1197 = dart.constList([C1194 || CT.C1194, C1195 || CT.C1195, C9 || CT.C9, C1196 || CT.C1196], BossbarOptionL());
    },
    get C1198() {
      return C1198 = dart.const({
        __proto__: schedule.ScheduleMode.prototype,
        [_name$6]: "ScheduleMode.append",
        index: 0
      });
    },
    get C1199() {
      return C1199 = dart.const({
        __proto__: schedule.ScheduleMode.prototype,
        [_name$6]: "ScheduleMode.replace",
        index: 1
      });
    },
    get C1200() {
      return C1200 = dart.const({
        __proto__: schedule.ScheduleMode.prototype,
        [_name$6]: "ScheduleMode.clear",
        index: 2
      });
    },
    get C1201() {
      return C1201 = dart.constList([C1198 || CT.C1198, C1199 || CT.C1199, C1200 || CT.C1200], ScheduleModeL());
    },
    get C1202() {
      return C1202 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.merge",
        index: 0
      });
    },
    get C1203() {
      return C1203 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.get",
        index: 1
      });
    },
    get C1204() {
      return C1204 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.remove",
        index: 2
      });
    },
    get C1205() {
      return C1205 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.modify",
        index: 3
      });
    },
    get C1206() {
      return C1206 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.data",
        index: 4
      });
    },
    get C1207() {
      return C1207 = dart.const({
        __proto__: storage._StorageType.prototype,
        [_name$7]: "_StorageType.score",
        index: 5
      });
    },
    get C1208() {
      return C1208 = dart.constList([C1202 || CT.C1202, C1203 || CT.C1203, C1204 || CT.C1204, C1205 || CT.C1205, C1206 || CT.C1206, C1207 || CT.C1207], _StorageTypeL());
    }
  }, false);
  var _isWhile = dart.privateName(do_loop, "_isWhile");
  var _setValues = dart.privateName(do_loop, "_setValues");
  widget.Widget = class Widget extends core.Object {
    toMap() {
      return null;
    }
  };
  (widget.Widget.new = function() {
    ;
  }).prototype = widget.Widget.prototype;
  dart.addTypeTests(widget.Widget);
  dart.addTypeCaches(widget.Widget);
  dart.setMethodSignature(widget.Widget, () => ({
    __proto__: dart.getMethods(widget.Widget.__proto__),
    toMap: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(widget.Widget, L0);
  var writable = dart.privateName(rest_action, "RestActionAble.writable");
  var called = dart.privateName(rest_action, "RestActionAble.called");
  rest_action.RestActionAble = class RestActionAble extends widget.Widget {
    get writable() {
      return this[writable];
    }
    set writable(value) {
      this[writable] = value;
    }
    get called() {
      return this[called];
    }
    set called(value) {
      this[called] = value;
    }
    queue(writable = null) {
      let t0, t0$;
      if (dart.test(this.called)) {
        dart.throw("Rest action is already executed, cant execute it again");
      }
      this.called = true;
      (t0$ = (t0 = writable, t0 == null ? writable : t0), t0$ == null ? strait_widget.StraitWidget.builder.writable : t0$)[$add](this);
    }
    generate(context) {
      return null;
    }
  };
  (rest_action.RestActionAble.new = function() {
    this[writable] = null;
    this[called] = false;
    ;
  }).prototype = rest_action.RestActionAble.prototype;
  dart.addTypeTests(rest_action.RestActionAble);
  dart.addTypeCaches(rest_action.RestActionAble);
  dart.setMethodSignature(rest_action.RestActionAble, () => ({
    __proto__: dart.getMethods(rest_action.RestActionAble.__proto__),
    queue: dart.fnType(dart.void, [], [dart.legacy(core.List$(dart.legacy(widget.Widget)))]),
    generate: dart.fnType(dart.dynamic, [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(rest_action.RestActionAble, L1);
  dart.setFieldSignature(rest_action.RestActionAble, () => ({
    __proto__: dart.getFields(rest_action.RestActionAble.__proto__),
    writable: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    called: dart.fieldType(dart.legacy(core.bool))
  }));
  var cond = dart.privateName(do_loop, "Do.cond");
  var testBefore$ = dart.privateName(do_loop, "Do.testBefore");
  var translate$ = dart.privateName(do_loop, "Do.translate");
  var then$ = dart.privateName(do_loop, "Do.then");
  do_loop.Do = class Do extends rest_action.RestActionAble {
    get cond() {
      return this[cond];
    }
    set cond(value) {
      this[cond] = value;
    }
    get testBefore() {
      return this[testBefore$];
    }
    set testBefore(value) {
      this[testBefore$] = value;
    }
    get translate() {
      return this[translate$];
    }
    set translate(value) {
      this[translate$] = value;
    }
    get then() {
      return this[then$];
    }
    set then(value) {
      this[then$] = value;
    }
    [_setValues](iswhile, condition) {
      this[_isWhile] = iswhile;
      if (ConditionL().is(condition)) {
        this.cond = condition;
      } else {
        this.cond = new condition$.Condition.new(condition);
      }
    }
    generate(context) {
      if (!dart.test(this[_isWhile])) {
        this.cond = new condition$.Condition.not(this.cond);
      }
      let ex = new execute.Execute.new({If: this.cond, children: JSArrayOfWidgetL().of([new file.File.recursive()])});
      if (this.translate != null) ex = ex.positioned(this.translate);
      this.then[$add](ex);
      let gr = new group.Group.new({filename: "doloop", children: this.then, groupMin: 0});
      if (dart.test(this.testBefore)) return new $if.If.new(this.cond, {then: JSArrayOfWidgetL().of([gr])});
      return gr;
    }
  };
  (do_loop.Do.While = function(condition, opts) {
    let testBefore = opts && 'testBefore' in opts ? opts.testBefore : true;
    let then = opts && 'then' in opts ? opts.then : null;
    let translate = opts && 'translate' in opts ? opts.translate : null;
    this[cond] = null;
    this[_isWhile] = null;
    this[testBefore$] = testBefore;
    this[then$] = then;
    this[translate$] = translate;
    do_loop.Do.__proto__.new.call(this);
    this[_setValues](true, condition);
  }).prototype = do_loop.Do.prototype;
  (do_loop.Do.Until = function(condition, opts) {
    let testBefore = opts && 'testBefore' in opts ? opts.testBefore : true;
    let then = opts && 'then' in opts ? opts.then : null;
    let translate = opts && 'translate' in opts ? opts.translate : null;
    this[cond] = null;
    this[_isWhile] = null;
    this[testBefore$] = testBefore;
    this[then$] = then;
    this[translate$] = translate;
    do_loop.Do.__proto__.new.call(this);
    this[_setValues](false, condition);
  }).prototype = do_loop.Do.prototype;
  dart.addTypeTests(do_loop.Do);
  dart.addTypeCaches(do_loop.Do);
  dart.setMethodSignature(do_loop.Do, () => ({
    __proto__: dart.getMethods(do_loop.Do.__proto__),
    [_setValues]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.dynamic]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(do_loop.Do, L2);
  dart.setFieldSignature(do_loop.Do, () => ({
    __proto__: dart.getFields(do_loop.Do.__proto__),
    cond: dart.fieldType(dart.legacy(condition$.Condition)),
    testBefore: dart.fieldType(dart.legacy(core.bool)),
    [_isWhile]: dart.fieldType(dart.legacy(core.bool)),
    translate: dart.fieldType(dart.legacy(location$.Location)),
    then: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget))))
  }));
  var _isInitial = dart.privateName(player_join, "_isInitial");
  var _then_v = dart.privateName(player_join, "_then_v");
  var target$ = dart.privateName(player_join, "PlayerJoin.target");
  var score$0 = dart.privateName(player_join, "PlayerJoin.score");
  var then$0 = dart.privateName(player_join, "PlayerJoin.then");
  player_join.PlayerJoin = class PlayerJoin extends widget.Widget {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get score() {
      return this[score$0];
    }
    set score(value) {
      super.score = value;
    }
    get then() {
      return this[then$0];
    }
    set then(value) {
      super.then = value;
    }
    generate(context) {
      let t0, t0$;
      let s = new scoreboard.Scoreboard.new(this.score, {type: dart.test(this[_isInitial]) ? "dummy" : "minecraft.custom:minecraft.leave_game"});
      let current = s._get(new entity$.Entity.PlayerName("#current"));
      let self = s._get(new entity$.Entity.Self());
      let t = (t0 = this.target, t0 == null ? new entity$.Entity.All() : t0);
      if (dart.test(this[_isInitial])) {
        return new execute.Execute.new({as: t, If: new condition$.Condition.not(self['>='](0)), children: JSArrayOfWidgetL().of([current.add(1), (t0$ = current, this[_then_v](t0$)), self['>>'](current)])});
      }
      return new execute.Execute.as_(t.copyWith({scores: JSArrayOfScoreL().of([self['>'](0)])}), {children: JSArrayOfWidgetL().of([this.then, self['>>'](0)])});
    }
  };
  (player_join.PlayerJoin.new = function(opts) {
    let then = opts && 'then' in opts ? opts.then : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let score = opts && 'score' in opts ? opts.score : "objd_join";
    this[then$0] = then;
    this[target$] = target;
    this[score$0] = score;
    this[_isInitial] = false;
    this[_then_v] = null;
    ;
  }).prototype = player_join.PlayerJoin.prototype;
  (player_join.PlayerJoin.initial = function(opts) {
    let then = opts && 'then' in opts ? opts.then : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let score = opts && 'score' in opts ? opts.score : "objd_join";
    this[target$] = target;
    this[score$0] = score;
    this[_isInitial] = true;
    this[then$0] = null;
    this[_then_v] = then;
    ;
  }).prototype = player_join.PlayerJoin.prototype;
  dart.addTypeTests(player_join.PlayerJoin);
  dart.addTypeCaches(player_join.PlayerJoin);
  dart.setMethodSignature(player_join.PlayerJoin, () => ({
    __proto__: dart.getMethods(player_join.PlayerJoin.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(player_join.PlayerJoin, L3);
  dart.setFieldSignature(player_join.PlayerJoin, () => ({
    __proto__: dart.getFields(player_join.PlayerJoin.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity)),
    score: dart.finalFieldType(dart.legacy(core.String)),
    then: dart.finalFieldType(dart.legacy(widget.Widget)),
    [_then_v]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(score$.Score)]))),
    [_isInitial]: dart.finalFieldType(dart.legacy(core.bool))
  }));
  const _is_PassTrait_default = Symbol('_is_PassTrait_default');
  var child$ = dart.privateName(pass_trait, "PassTrait.child");
  var trait$ = dart.privateName(pass_trait, "PassTrait.trait");
  pass_trait.PassTrait$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class PassTrait extends widget.Widget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get trait() {
        return this[trait$];
      }
      set trait(value) {
        super.trait = value;
      }
      static of(T, c) {
        return c.traitOf(dart.legacy(T));
      }
      generate(context) {
        context.passTrait(TL(), this.trait);
        return this.child;
      }
    }
    (PassTrait.new = function(trait, opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      this[trait$] = trait;
      this[child$] = child;
      ;
    }).prototype = PassTrait.prototype;
    dart.addTypeTests(PassTrait);
    PassTrait.prototype[_is_PassTrait_default] = true;
    dart.addTypeCaches(PassTrait);
    dart.setMethodSignature(PassTrait, () => ({
      __proto__: dart.getMethods(PassTrait.__proto__),
      generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
    }));
    dart.setLibraryUri(PassTrait, L4);
    dart.setFieldSignature(PassTrait, () => ({
      __proto__: dart.getFields(PassTrait.__proto__),
      child: dart.finalFieldType(dart.legacy(widget.Widget)),
      trait: dart.finalFieldType(dart.legacy(T))
    }));
    return PassTrait;
  });
  pass_trait.PassTrait = pass_trait.PassTrait$();
  dart.addTypeTests(pass_trait.PassTrait, _is_PassTrait_default);
  var C0;
  build.createProject = function createProject(prj, args = C0 || CT.C0) {
    let t0, t0$, t0$0;
    let stopwatchAll = (t0 = new core.Stopwatch.new(), (() => {
      t0.start();
      return t0;
    })());
    let opt = new gen_options.GenOptions.new(args);
    let bPrj = new buildProject.BuildProject.new(prj, {prod: opt.prod});
    if (dart.test(opt.hotreload)) reloader.reloadProject(bPrj);
    if (dart.test(opt.generateZip)) {
      build.saveAsZip(build._getFiles(bPrj, opt), (t0$ = opt.output, t0$ == null ? dart.notNull(bPrj.path) + dart.notNull(bPrj.name) + ".zip" : t0$));
    } else {
      let path = opt.output != null ? io_html.getPath(opt.output, "") : io_html.getPath(bPrj.path, bPrj.name);
      let stopwatchFiles = (t0$0 = new core.Stopwatch.new(), (() => {
        t0$0.start();
        return t0$0;
      })());
      io_html.generateIO(build._getFiles(bPrj, opt), path).then(core.Null, dart.fn(v => {
        core.print("Finished saving " + dart.str(v[$length]) + " files in: " + dart.str(stopwatchFiles.elapsedMilliseconds) + "ms");
        core.print("Total Time: " + dart.str(stopwatchAll.elapsedMilliseconds) + "ms");
      }, ListLToNullN()));
    }
  };
  build.getJsonMap = function getJsonMap(prj, args = C0 || CT.C0) {
    let opt = new gen_options.GenOptions.new(args);
    return new buildProject.BuildProject.new(prj, {prod: opt.prod}).toMap();
  };
  build.getAllFiles = function getAllFiles(prj, args = C0 || CT.C0) {
    let opt = new gen_options.GenOptions.new(args);
    return build._getFiles(new buildProject.BuildProject.new(prj, {prod: opt.prod}), opt);
  };
  build._getFiles = function _getFiles(prj, options) {
    let files = new (IdentityMapOfStringL$StringL()).new();
    if (!dart.test(options.minified) && dart.test(prj.isGenMeta)) {
      let mcmeta = new (IdentityMapOfStringL$dynamic()).from(["pack", new (IdentityMapOfStringL$ObjectL()).from(["pack_format", prj.version, "description", prj.description])]);
      files[$_set]("pack.mcmeta", convert.json.encode(mcmeta));
    }
    let tickJson = new (IdentityMapOfStringL$dynamic()).from(["values", []]);
    let loadJson = new (IdentityMapOfStringL$dynamic()).from(["values", []]);
    if (prj.packs != null && dart.test(prj.packs[$isNotEmpty])) {
      prj.packs[$forEach](dart.fn(pack => {
        if (dart.test(pack.isGen)) {
          if (!dart.test(options.minified)) {
            if (pack.load != null && pack.load[$isNotEmpty] && dart.test(pack.isGenLoad)) {
              dart.dsend(loadJson[$_get]("values"), 'add', [dart.notNull(pack.name) + ":" + dart.notNull(pack.load)]);
            }
            if (pack.main != null && pack.main[$isNotEmpty] && dart.test(pack.isGenMain)) {
              dart.dsend(tickJson[$_get]("values"), 'add', [dart.notNull(pack.name) + ":" + dart.notNull(pack.main)]);
            }
          }
          if (pack.rawFiles != null && dart.test(pack.rawFiles[$isNotEmpty])) {
            pack.rawFiles[$forEach](dart.fn((filepath, file) => {
              files[$_set]("data/" + dart.notNull(pack.name) + dart.notNull(filepath), file);
            }, StringLAndStringLToNullN()));
          }
          if (pack.files != null && dart.test(pack.files[$isNotEmpty])) {
            pack.files[$forEach](dart.fn((filepath, file) => {
              if (dart.test(file.isGen)) {
                files[$_set]("data/" + dart.notNull(pack.name) + "/functions/" + dart.notNull(filepath) + ".mcfunction", file.commands[$join]("\n"));
              }
            }, StringLAndBuildFileLToNullN()));
          }
        }
      }, BuildPackLToNullN()));
    }
    if (!dart.test(options.minified)) {
      if (tickJson[$_get]("values") != null && dart.test(ListL().as(tickJson[$_get]("values"))[$isNotEmpty])) {
        files[$_set]("data/minecraft/tags/functions/tick.json", convert.json.encode(tickJson));
      }
      if (loadJson[$_get]("values") != null && dart.test(ListL().as(loadJson[$_get]("values"))[$isNotEmpty])) {
        files[$_set]("data/minecraft/tags/functions/load.json", convert.json.encode(loadJson));
      }
    }
    if (dart.test(options.debugFile)) {
      files[$_set]("objd.json", convert.json.encode(prj.toMap()));
    }
    return files;
  };
  build.getArchive = function getArchive(files) {
    let archive = new archive$.Archive.new();
    files[$forEach](dart.fn((name, content) => {
      let rawData = convert.utf8.encode(content);
      archive.addFile(new archive_file.ArchiveFile.new(name, rawData[$length], rawData));
    }, StringLAndStringLToNullN()));
    return archive;
  };
  build.saveAsZip = function saveAsZip(files, path) {
    let t0;
    let stopwatch = (t0 = new core.Stopwatch.new(), (() => {
      t0.start();
      return t0;
    })());
    let bytes = new zip_encoder.ZipEncoder.new().encode(build.getArchive(files));
    io_html.saveBytes(bytes, path).then(core.Null, dart.fn(v => {
      core.print("Finished saving the Zip file " + dart.str(path) + " in: " + dart.str(stopwatch.elapsedMilliseconds) + "ms");
      stopwatch.stop();
    }, dynamicToNullN()));
  };
  var target$0 = dart.privateName(project, "Project.target");
  var name$ = dart.privateName(project, "Project.name");
  var description$ = dart.privateName(project, "Project.description");
  var version$ = dart.privateName(project, "Project.version");
  var generate$ = dart.privateName(project, "Project.generate");
  project.Project = class Project extends core.Object {
    get target() {
      return this[target$0];
    }
    set target(value) {
      this[target$0] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get generate() {
      return this[generate$];
    }
    set generate(value) {
      this[generate$] = value;
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["Project", new (IdentityMapOfStringL$dynamic()).from(["name", this.name, "version", this.version, "generate", dart.dsend(this.generate.generate(new context$.Context.new({prefixes: JSArrayOfStringL().of([]), suffixes: JSArrayOfStringL().of([]), packId: ""})), 'toMap', [])])]);
    }
    getPackFormat() {
      if (dart.notNull(this.version) >= 16) return 6;
      if (this.version === 15) return 5;
      return 4;
    }
  };
  (project.Project.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let generate = opts && 'generate' in opts ? opts.generate : null;
    let version = opts && 'version' in opts ? opts.version : 16;
    let target = opts && 'target' in opts ? opts.target : "./";
    let description = opts && 'description' in opts ? opts.description : "This is a datapack generated with objd by Stevertus";
    this[target$0] = "./";
    this[name$] = name;
    this[generate$] = generate;
    this[version$] = version;
    this[target$0] = target;
    this[description$] = description;
    ;
  }).prototype = project.Project.prototype;
  dart.addTypeTests(project.Project);
  dart.addTypeCaches(project.Project);
  dart.setMethodSignature(project.Project, () => ({
    __proto__: dart.getMethods(project.Project.__proto__),
    toMap: dart.fnType(dart.legacy(core.Map), []),
    getPackFormat: dart.fnType(dart.legacy(core.int), [])
  }));
  dart.setLibraryUri(project.Project, L5);
  dart.setFieldSignature(project.Project, () => ({
    __proto__: dart.getFields(project.Project.__proto__),
    target: dart.fieldType(dart.legacy(core.String)),
    name: dart.finalFieldType(dart.legacy(core.String)),
    description: dart.finalFieldType(dart.legacy(core.String)),
    version: dart.finalFieldType(dart.legacy(core.int)),
    generate: dart.fieldType(dart.legacy(widget.Widget))
  }));
  reloader.reloadProject = function reloadProject(prj) {
    colorize.color("Doing Hotreload...", {front: colorize.Styles.CYAN});
    let file = io_html.readFile(dart.notNull(prj.path) + ("/" + dart.str(prj.name) + "/objd.json"));
    if (file == null) return;
    let old = MapLOfStringL$dynamic().as(convert.json.decode(file));
    let newPrj = prj.toMap();
    if (dart.toString(old) == dart.toString(newPrj)) {
      prj.isGen = false;
      colorize.color("Project did not change!", {front: colorize.Styles.LIGHT_YELLOW});
      return;
    }
    if (dart.equals(old[$_get]("description"), newPrj[$_get]("description"))) prj.isGenMeta = false;
    if (old[$_get]("packs") == null) return;
    prj.packs[$forEach](dart.fn(pack => {
      let i = prj.packs[$indexOf](pack);
      let newPack = MapL().as(dart.dsend(newPrj[$_get]("packs"), '_get', [i]));
      let oldPack = MapLOfStringL$dynamic().as(ListL().as(old[$_get]("packs"))[$_get](i));
      if (oldPack == null) return;
      reloader.reloadPack(pack, oldPack, newPack);
    }, BuildPackLToNullN()));
  };
  reloader.reloadPack = function reloadPack(pack, old, newPack) {
    if (dart.toString(old) == dart.toString(newPack)) {
      pack.isGen = false;
      colorize.color("Pack " + dart.str(pack.name) + " did not change!", {front: colorize.Styles.LIGHT_YELLOW});
      return;
    }
    if (dart.equals(old[$_get]("name"), newPack[$_get]("name"))) {
      if (dart.equals(old[$_get]("load"), newPack[$_get]("load"))) pack.isGenLoad = false;
      if (dart.equals(old[$_get]("main"), newPack[$_get]("main"))) pack.isGenMain = false;
      if (newPack[$_get]("files") != null) {
        for (let file of IterableL().as(dart.dload(newPack[$_get]("files"), 'keys'))) {
          if (dart.dsend(old[$_get]("files"), '_get', [file]) != null && dart.toString(dart.dsend(old[$_get]("files"), '_get', [file])) == dart.toString(dart.dsend(newPack[$_get]("files"), '_get', [file]))) {
            pack.files[$_get](file).isGen = false;
          }
        }
      }
    }
  };
  var packs = dart.privateName(buildProject, "BuildProject.packs");
  var path = dart.privateName(buildProject, "BuildProject.path");
  var name = dart.privateName(buildProject, "BuildProject.name");
  var description = dart.privateName(buildProject, "BuildProject.description");
  var version = dart.privateName(buildProject, "BuildProject.version");
  var prod$ = dart.privateName(buildProject, "BuildProject.prod");
  var isGen = dart.privateName(buildProject, "BuildProject.isGen");
  var isGenMeta = dart.privateName(buildProject, "BuildProject.isGenMeta");
  var context = dart.privateName(buildProject, "BuildProject.context");
  buildProject.BuildProject = class BuildProject extends core.Object {
    get packs() {
      return this[packs];
    }
    set packs(value) {
      this[packs] = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      this[path] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    get version() {
      return this[version];
    }
    set version(value) {
      this[version] = value;
    }
    get prod() {
      return this[prod$];
    }
    set prod(value) {
      this[prod$] = value;
    }
    get isGen() {
      return this[isGen];
    }
    set isGen(value) {
      this[isGen] = value;
    }
    get isGenMeta() {
      return this[isGenMeta];
    }
    set isGenMeta(value) {
      this[isGenMeta] = value;
    }
    get context() {
      return this[context];
    }
    set context(value) {
      this[context] = value;
    }
    addPack(pack) {
      if (dart.test(this.packs[$any](dart.fn(pac => pack.name == pac.name, BuildPackLToboolL())))) {
        dart.throw("You specified two packs with the same name!");
      }
      this.packs[$add](new buildPack.BuildPack.new(pack));
      this.packs[$last].generate({prj: this});
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["name", this.name, "path", this.path, "version", this.version, "packs", this.packs[$map](MapL(), dart.fn(pack => pack.toMap(), BuildPackLToMapL()))[$toList](), "description", this.description]);
    }
  };
  (buildProject.BuildProject.new = function(prj, opts) {
    let prod = opts && 'prod' in opts ? opts.prod : false;
    this[packs] = null;
    this[path] = null;
    this[name] = null;
    this[description] = null;
    this[version] = null;
    this[isGen] = true;
    this[isGenMeta] = true;
    this[context] = null;
    this[prod$] = prod;
    this.path = prj.target;
    this.name = prj.name;
    this.description = prj.description;
    this.version = prj.getPackFormat();
    this.context = new context$.Context.new({prod: false});
    this.packs = (() => {
      let t0 = JSArrayOfBuildPackL().of([]);
      if (prj.generate != null) t0[$add](new buildPack.BuildPack.new(PackL().as(findPack.findPack(prj.generate, {context: this.context})), {context: this.context}));
      return t0;
    })();
    this.context.prod = this.prod;
    this.packs[$first].generate({prj: this});
  }).prototype = buildProject.BuildProject.prototype;
  dart.addTypeTests(buildProject.BuildProject);
  dart.addTypeCaches(buildProject.BuildProject);
  dart.setMethodSignature(buildProject.BuildProject, () => ({
    __proto__: dart.getMethods(buildProject.BuildProject.__proto__),
    addPack: dart.fnType(dart.void, [dart.legacy(pack.Pack)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(buildProject.BuildProject, L6);
  dart.setFieldSignature(buildProject.BuildProject, () => ({
    __proto__: dart.getFields(buildProject.BuildProject.__proto__),
    packs: dart.fieldType(dart.legacy(core.List$(dart.legacy(buildPack.BuildPack)))),
    path: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    description: dart.fieldType(dart.legacy(core.String)),
    version: dart.fieldType(dart.legacy(core.int)),
    prod: dart.fieldType(dart.legacy(core.bool)),
    isGen: dart.fieldType(dart.legacy(core.bool)),
    isGenMeta: dart.fieldType(dart.legacy(core.bool)),
    context: dart.fieldType(dart.legacy(context$.Context))
  }));
  findPack.findPack = function findPack$(wid, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    if (PackL().is(wid)) return wid;
    if (ForL().is(wid)) {
      for (let child of wid.children) {
        let res = findPack.findPack(child);
        if (PackL().is(res)) return res;
      }
    }
    return findPack.findPack(WidgetL().as(wid.generate(context)));
  };
  var name$0 = dart.privateName(pack, "Pack.name");
  var main$ = dart.privateName(pack, "Pack.main");
  var load$ = dart.privateName(pack, "Pack.load");
  var modules$ = dart.privateName(pack, "Pack.modules");
  var files$ = dart.privateName(pack, "Pack.files");
  pack.Pack = class Pack extends widget.Widget {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get main() {
      return this[main$];
    }
    set main(value) {
      this[main$] = value;
    }
    get load() {
      return this[load$];
    }
    set load(value) {
      this[load$] = value;
    }
    get modules() {
      return this[modules$];
    }
    set modules(value) {
      this[modules$] = value;
    }
    get files() {
      return this[files$];
    }
    set files(value) {
      this[files$] = value;
    }
    generate(context) {
      return new for_list.For.of(JSArrayOfWidgetL().of([this.main, this.load]));
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["Pack", new (IdentityMapOfStringL$ObjectL()).from(["name", this.name, "main", this.main == null ? null : this.main.toMap(), "load", this.load == null ? null : this.load.toMap(), "modules", this.modules == null ? null : this.modules[$map](dart.dynamic, dart.fn(x => x.toMap(), ModuleLTodynamic()))[$toList](), "files", this.files == null ? null : this.files[$map](MapL(), dart.fn(x => x.toMap(), FileLToMapL()))[$toList]()])]);
    }
  };
  (pack.Pack.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let main = opts && 'main' in opts ? opts.main : null;
    let load = opts && 'load' in opts ? opts.load : null;
    let files = opts && 'files' in opts ? opts.files : null;
    let modules = opts && 'modules' in opts ? opts.modules : null;
    this[name$0] = name;
    this[main$] = main;
    this[load$] = load;
    this[files$] = files;
    this[modules$] = modules;
    if (this.name !== this.name[$toLowerCase]()) {
      dart.throw("Please not that the name of a pack must be lowercase! for pack:" + dart.notNull(this.name));
    }
    if (this.modules != null) {
      if (this.main == null) {
        this.main = new file.File.new("main", {child: new for_list.For.of(this.modules)});
      } else {
        this.main.child = new for_list.For.of((() => {
          let t1 = JSArrayOfWidgetL().of([]);
          for (let t2 of this.modules)
            t1[$add](t2);
          t1[$add](this.main.child);
          return t1;
        })());
      }
    }
  }).prototype = pack.Pack.prototype;
  dart.addTypeTests(pack.Pack);
  dart.addTypeCaches(pack.Pack);
  dart.setMethodSignature(pack.Pack, () => ({
    __proto__: dart.getMethods(pack.Pack.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(pack.Pack, L7);
  dart.setFieldSignature(pack.Pack, () => ({
    __proto__: dart.getFields(pack.Pack.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    main: dart.fieldType(dart.legacy(file.File)),
    load: dart.fieldType(dart.legacy(file.File)),
    modules: dart.fieldType(dart.legacy(core.List$(dart.legacy(module.Module)))),
    files: dart.fieldType(dart.legacy(core.List$(dart.legacy(file.File))))
  }));
  module.Module = class Module extends rest_action.RestActionAble {};
  (module.Module.new = function() {
    module.Module.__proto__.new.call(this);
    ;
  }).prototype = module.Module.prototype;
  dart.addTypeTests(module.Module);
  dart.addTypeCaches(module.Module);
  dart.setLibraryUri(module.Module, L8);
  var _rest$ = dart.privateName(rest_action, "_rest");
  var writable$ = dart.privateName(rest_action, "RestAction.writable");
  rest_action.RestAction = class RestAction extends rest_action.RestActionAble {
    get writable() {
      return this[writable$];
    }
    set writable(value) {
      this[writable$] = value;
    }
    generate(context) {
      return this[_rest$];
    }
  };
  (rest_action.RestAction.new = function(writable, _rest) {
    this[writable$] = writable;
    this[_rest$] = _rest;
    rest_action.RestAction.__proto__.new.call(this);
    if (dart.test(rest_action.RestAction.autoQueue)) this.queue();
  }).prototype = rest_action.RestAction.prototype;
  (rest_action.RestAction.all = function(writable, rest) {
    rest_action.RestAction.new.call(this, writable, new for_list.For.of(rest));
  }).prototype = rest_action.RestAction.prototype;
  dart.addTypeTests(rest_action.RestAction);
  dart.addTypeCaches(rest_action.RestAction);
  dart.setMethodSignature(rest_action.RestAction, () => ({
    __proto__: dart.getMethods(rest_action.RestAction.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(rest_action.RestAction, L1);
  dart.setFieldSignature(rest_action.RestAction, () => ({
    __proto__: dart.getFields(rest_action.RestAction.__proto__),
    [_rest$]: dart.fieldType(dart.legacy(widget.Widget)),
    writable: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget))))
  }));
  dart.defineLazy(rest_action.RestAction, {
    /*rest_action.RestAction.autoQueue*/get autoQueue() {
      return false;
    },
    set autoQueue(_) {}
  }, true);
  var writable$0 = dart.privateName(rest_action, "RestActionBuilder.writable");
  rest_action.RestActionBuilder = class RestActionBuilder extends core.Object {
    get writable() {
      return this[writable$0];
    }
    set writable(value) {
      this[writable$0] = value;
    }
    create(rest) {
      if (RestActionAbleL().is(rest)) {
        rest.writable = this.writable;
        return rest;
      }
      return new rest_action.RestAction.new(this.writable, rest);
    }
    createAll(rest) {
      return new rest_action.RestAction.all(this.writable, rest);
    }
  };
  (rest_action.RestActionBuilder.new = function(writable) {
    this[writable$0] = writable;
    ;
  }).prototype = rest_action.RestActionBuilder.prototype;
  dart.addTypeTests(rest_action.RestActionBuilder);
  dart.addTypeCaches(rest_action.RestActionBuilder);
  dart.setMethodSignature(rest_action.RestActionBuilder, () => ({
    __proto__: dart.getMethods(rest_action.RestActionBuilder.__proto__),
    create: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(widget.Widget)]),
    createAll: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.List$(dart.legacy(widget.Widget)))])
  }));
  dart.setLibraryUri(rest_action.RestActionBuilder, L1);
  dart.setFieldSignature(rest_action.RestActionBuilder, () => ({
    __proto__: dart.getFields(rest_action.RestActionBuilder.__proto__),
    writable: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget))))
  }));
  var result = dart.privateName(strait_widget, "StraitWidget.result");
  strait_widget.StraitWidget = class StraitWidget extends widget.Widget {
    get result() {
      return this[result];
    }
    set result(value) {
      this[result] = value;
    }
    generate(context) {
      return new for_list.For.of(this.result);
    }
  };
  (strait_widget.StraitWidget.new = function(strait) {
    this[result] = null;
    let content = JSArrayOfWidgetL().of([]);
    let b = strait_widget.StraitWidget.builder;
    strait_widget.StraitWidget.builder = new rest_action.RestActionBuilder.new(content);
    let ret = strait(content);
    if (ret != null) {
      if (RestActionL().is(ret)) {
        if (dart.test(ret.called)) ret.queue();
      } else if (ListLOfRestActionL().is(ret)) {
        ret[$forEach](dart.fn(e => {
          if (!dart.test(e.called)) e.queue();
        }, RestActionLToNullN()));
      } else if (WidgetL().is(ret)) {
        content[$add](ret);
      } else if (ListLOfWidgetL().is(ret)) content[$addAll](ret);
    }
    strait_widget.StraitWidget.builder = b;
    this.result = content;
  }).prototype = strait_widget.StraitWidget.prototype;
  dart.addTypeTests(strait_widget.StraitWidget);
  dart.addTypeCaches(strait_widget.StraitWidget);
  dart.setMethodSignature(strait_widget.StraitWidget, () => ({
    __proto__: dart.getMethods(strait_widget.StraitWidget.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(strait_widget.StraitWidget, L9);
  dart.setFieldSignature(strait_widget.StraitWidget, () => ({
    __proto__: dart.getFields(strait_widget.StraitWidget.__proto__),
    result: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget))))
  }));
  dart.defineLazy(strait_widget.StraitWidget, {
    /*strait_widget.StraitWidget.builder*/get builder() {
      return new rest_action.RestActionBuilder.new(JSArrayOfWidgetL().of([]));
    },
    set builder(_) {}
  }, true);
  var _list$ = dart.privateName(for_list, "_list");
  for_list.For = class For extends rest_action.RestActionAble {
    get length() {
      return this[_list$][$length];
    }
    get children() {
      return this[_list$];
    }
    generate(context) {
      return this[_list$];
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["For", this[_list$][$map](dart.dynamic, dart.fn(x => x.toMap(), WidgetLTodynamic()))]);
    }
  };
  (for_list.For.new = function(opts) {
    let create = opts && 'create' in opts ? opts.create : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let from = opts && 'from' in opts ? opts.from : 0;
    let step = opts && 'step' in opts ? opts.step : 1;
    this[_list$] = null;
    for_list.For.__proto__.new.call(this);
    this[_list$] = JSArrayOfWidgetL().of([]);
    for (let i = from; dart.notNull(i) <= dart.notNull(to); i = dart.notNull(i) + dart.notNull(step)) {
      this[_list$][$add](create(i));
    }
  }).prototype = for_list.For.prototype;
  (for_list.For.of = function(_list) {
    this[_list$] = _list;
    for_list.For.__proto__.new.call(this);
    ;
  }).prototype = for_list.For.prototype;
  dart.addTypeTests(for_list.For);
  dart.addTypeCaches(for_list.For);
  dart.setMethodSignature(for_list.For, () => ({
    __proto__: dart.getMethods(for_list.For.__proto__),
    generate: dart.fnType(dart.legacy(core.List$(dart.legacy(widget.Widget))), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setGetterSignature(for_list.For, () => ({
    __proto__: dart.getGetters(for_list.For.__proto__),
    length: dart.legacy(core.int),
    children: dart.legacy(core.List$(dart.legacy(widget.Widget)))
  }));
  dart.setLibraryUri(for_list.For, L10);
  dart.setFieldSignature(for_list.For, () => ({
    __proto__: dart.getFields(for_list.For.__proto__),
    [_list$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget))))
  }));
  var child$0 = dart.privateName(file, "File.child");
  var path$ = dart.privateName(file, "File.path");
  var pack$ = dart.privateName(file, "File.pack");
  var execute$ = dart.privateName(file, "File.execute");
  var create$ = dart.privateName(file, "File.create");
  var isRecursive = dart.privateName(file, "File.isRecursive");
  var header$ = dart.privateName(file, "File.header");
  file.File = class File extends widget.Widget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      this[child$0] = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      this[path$] = value;
    }
    get pack() {
      return this[pack$];
    }
    set pack(value) {
      this[pack$] = value;
    }
    get execute() {
      return this[execute$];
    }
    set execute(value) {
      this[execute$] = value;
    }
    get create() {
      return this[create$];
    }
    set create(value) {
      this[create$] = value;
    }
    get isRecursive() {
      return this[isRecursive];
    }
    set isRecursive(value) {
      this[isRecursive] = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      this[header$] = value;
    }
    static strait(path, opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let execute = opts && 'execute' in opts ? opts.execute : false;
      let pack = opts && 'pack' in opts ? opts.pack : null;
      let create = opts && 'create' in opts ? opts.create : true;
      let header = opts && 'header' in opts ? opts.header : null;
      return new file.File.new(path, {child: new strait_widget.StraitWidget.new(child), execute: execute, pack: pack, create: create, header: header});
    }
    static executeStrait(path, opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let pack = opts && 'pack' in opts ? opts.pack : null;
      let create = opts && 'create' in opts ? opts.create : true;
      let header = opts && 'header' in opts ? opts.header : null;
      return new file.File.new(path, {child: new strait_widget.StraitWidget.new(child), execute: true, pack: pack, create: create, header: header});
    }
    generate(context) {
      if (this.isRecursive != null && dart.test(this.isRecursive)) this.path = context.file;
      this.pack == null ? this.pack = context.packId : null;
      return new command$.Command.new("function " + dart.str(this.pack) + ":" + dart.notNull(this.path));
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["File", new (IdentityMapOfStringL$dynamic()).from(["path", this.path, "child", this.child.toMap(), "execute", this.execute])]);
    }
  };
  (file.File.new = function(path, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let execute = opts && 'execute' in opts ? opts.execute : false;
    let pack = opts && 'pack' in opts ? opts.pack : null;
    let create = opts && 'create' in opts ? opts.create : true;
    let header = opts && 'header' in opts ? opts.header : null;
    this[isRecursive] = null;
    this[path$] = path;
    this[child$0] = child;
    this[execute$] = execute;
    this[pack$] = pack;
    this[create$] = create;
    this[header$] = header;
    this.path[$replaceAll](".mcfunction", "");
    if (this.path[$substring](0, 1) === "/") this.path = this.path[$substring](1);
  }).prototype = file.File.prototype;
  (file.File.execute = function(path, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let pack = opts && 'pack' in opts ? opts.pack : null;
    let create = opts && 'create' in opts ? opts.create : true;
    let header = opts && 'header' in opts ? opts.header : null;
    this[isRecursive] = null;
    this[execute$] = null;
    this[path$] = path;
    this[child$0] = child;
    this[pack$] = pack;
    this[create$] = create;
    this[header$] = header;
    this.path[$replaceAll](".mcfunction", "");
    if (this.path[$substring](0, 1) === "/") this.path = this.path[$substring](1);
    this.execute = true;
  }).prototype = file.File.prototype;
  (file.File.recursive = function() {
    this[isRecursive] = null;
    this[header$] = null;
    this[create$] = null;
    this[pack$] = null;
    this[execute$] = null;
    this[child$0] = null;
    this[path$] = null;
    this.isRecursive = true;
    this.execute = true;
    this.create = false;
  }).prototype = file.File.prototype;
  dart.addTypeTests(file.File);
  dart.addTypeCaches(file.File);
  dart.setMethodSignature(file.File, () => ({
    __proto__: dart.getMethods(file.File.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(file.File, L11);
  dart.setFieldSignature(file.File, () => ({
    __proto__: dart.getFields(file.File.__proto__),
    child: dart.fieldType(dart.legacy(widget.Widget)),
    path: dart.fieldType(dart.legacy(core.String)),
    pack: dart.fieldType(dart.legacy(core.String)),
    execute: dart.fieldType(dart.legacy(core.bool)),
    create: dart.fieldType(dart.legacy(core.bool)),
    isRecursive: dart.fieldType(dart.legacy(core.bool)),
    header: dart.fieldType(dart.legacy(comment.Comment))
  }));
  var _text = dart.privateName(comment, "_text");
  var _separate = dart.privateName(comment, "_separate");
  var force$ = dart.privateName(comment, "Comment.force");
  comment.Comment = class Comment extends rest_action.RestActionAble {
    get force() {
      return this[force$];
    }
    set force(value) {
      this[force$] = value;
    }
    get text() {
      return this[_text];
    }
    [_separate](length = 48) {
      return ListOfStringL().generate(length, dart.fn(i => "#", intLToStringL()))[$join]();
    }
    generate(context) {
      let t3;
      return new text.Text.new((t3 = this[_text], t3 == null ? "" : t3));
    }
  };
  (comment.Comment.new = function(text, opts) {
    let force = opts && 'force' in opts ? opts.force : false;
    this[force$] = false;
    this[force$] = force;
    this[_text] = text[$startsWith]("#") ? text : "# " + dart.notNull(text);
    comment.Comment.__proto__.new.call(this);
    ;
  }).prototype = comment.Comment.prototype;
  (comment.Comment.LineBreak = function() {
    this[force$] = false;
    this[_text] = "";
    comment.Comment.__proto__.new.call(this);
    ;
  }).prototype = comment.Comment.prototype;
  (comment.Comment.Separate = function(length = 48) {
    this[force$] = false;
    this[_text] = null;
    comment.Comment.__proto__.new.call(this);
    this[_text] = this[_separate](length);
  }).prototype = comment.Comment.prototype;
  (comment.Comment.FileHeader = function(desc, opts) {
    let t3;
    let author = opts && 'author' in opts ? opts.author : null;
    let calledFrom = opts && 'calledFrom' in opts ? opts.calledFrom : null;
    let context = opts && 'context' in opts ? opts.context : null;
    this[force$] = false;
    this[_text] = null;
    comment.Comment.__proto__.new.call(this);
    this[_text] = dart.notNull(this[_separate]()) + ("\n#\n# Author:\n#  " + dart.str((t3 = author, t3 == null ? comment.Comment.Author : t3)) + "\n#\n# Description:    \n");
    this[_text] = dart.notNull(this[_text]) + dart.notNull(desc[$split]("\n")[$map](StringL(), dart.fn(s => "#  " + dart.notNull(s), StringLToStringL()))[$join]("\n"));
    if (calledFrom != null) {
      this[_text] = dart.notNull(this[_text]) + "\n#\n# Called in:";
      this[_text] = dart.notNull(this[_text]) + ("\n#  " + dart.notNull(calledFrom));
    }
    if (context != null) {
      this[_text] = dart.notNull(this[_text]) + "\n#\n# Context:";
      this[_text] = dart.notNull(this[_text]) + ("\n#  " + dart.notNull(context));
    }
    this[_text] = dart.notNull(this[_text]) + ("\n#\n" + dart.notNull(this[_separate]()));
  }).prototype = comment.Comment.prototype;
  (comment.Comment.Null = function() {
    this[force$] = false;
    this[_text] = null;
    comment.Comment.__proto__.new.call(this);
    this[_text] = "[null]";
  }).prototype = comment.Comment.prototype;
  dart.addTypeTests(comment.Comment);
  dart.addTypeCaches(comment.Comment);
  dart.setMethodSignature(comment.Comment, () => ({
    __proto__: dart.getMethods(comment.Comment.__proto__),
    [_separate]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.int)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setGetterSignature(comment.Comment, () => ({
    __proto__: dart.getGetters(comment.Comment.__proto__),
    text: dart.legacy(core.String)
  }));
  dart.setLibraryUri(comment.Comment, L12);
  dart.setFieldSignature(comment.Comment, () => ({
    __proto__: dart.getFields(comment.Comment.__proto__),
    [_text]: dart.fieldType(dart.legacy(core.String)),
    force: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(comment.Comment, {
    /*comment.Comment.Author*/get Author() {
      return "";
    },
    set Author(_) {}
  }, true);
  var _children = dart.privateName(condition$, "_children");
  var _generated = dart.privateName(condition$, "_generated");
  var _setCond = dart.privateName(condition$, "_setCond");
  var _invertGenerated = dart.privateName(condition$, "_invertGenerated");
  var type = dart.privateName(condition$, "Condition.type");
  condition$.Condition = class Condition extends core.Object {
    get type() {
      return this[type];
    }
    set type(value) {
      this[type] = value;
    }
    [_setCond](cond, opts) {
      let invert = opts && 'invert' in opts ? opts.invert : false;
      let block = opts && 'block' in opts ? opts.block : null;
      let target = opts && 'target' in opts ? opts.target : null;
      if (cond == null) return;
      if (ConditionL().is(cond)) {
        this[_children][$add](cond);
        if (dart.test(invert)) this[_children][$forEach](dart.fn(child => child[_invertGenerated](), ConditionLTovoid()));
        return;
      }
      if (EntityL().is(cond)) {
        this[_generated] = new condition$._ConditionUtil.new("entity " + dart.notNull(dart.toString(cond)), {invert: invert});
        return;
      }
      if (BlockL().is(cond)) {
        this[_generated] = new condition$._ConditionUtil.new("block ~ ~ ~ " + dart.notNull(dart.toString(cond)), {invert: invert});
        return;
      }
      if (ScoreL().is(cond)) {
        if (cond.getString()[$isEmpty]) {
          dart.throw("Please insert a score condition method into a condition!");
        }
        this[_generated] = new condition$._ConditionUtil.new("score " + dart.notNull(cond.getString()), {invert: invert});
        return;
      }
      if (TagL().is(cond)) {
        this[_generated] = new condition$._ConditionUtil.new("entity " + dart.notNull(cond.getEntity()), {invert: invert});
        return;
      }
      if (LocationL().is(cond)) {
        if (block == null) {
          this[_generated] = new condition$._ConditionUtil.new("block " + dart.notNull(dart.toString(cond)) + " minecraft:air", {invert: !dart.test(invert)});
        } else {
          this[_generated] = new condition$._ConditionUtil.new("block " + dart.notNull(dart.toString(cond)) + " " + dart.notNull(dart.toString(block)), {invert: invert});
        }
        return;
      }
      if (DataL().is(cond)) {
        this[_generated] = new condition$._ConditionUtil.new("data " + dart.notNull(cond.getTarget()) + " " + dart.notNull(cond.path), {invert: invert});
        return;
      }
      if (AreaL().is(cond)) {
        if (target != null) {
          dart.throw("Please use Condition.blocks to test for an area of blocks!");
        }
        this[_generated] = new condition$._ConditionUtil.new("blocks " + dart.notNull(cond.getCoordinates()) + " " + dart.notNull(dart.toString(target)), {invert: invert});
        return;
      }
      if (PredicateL().is(cond)) {
        this[_generated] = new condition$._ConditionUtil.new("predicate " + dart.notNull(cond.name));
        return;
      }
      dart.throw(" A Condition can just take in another Condition, Entity, Block, Data, Score, Predicate or Tag!");
    }
    [_invertGenerated]() {
      if (this[_generated] != null) this[_generated].invert = !dart.test(this[_generated].invert);
      if (this[_children] != null) {
        this[_children][$forEach](dart.fn(child => child[_invertGenerated](), ConditionLTovoid()));
      }
    }
    getList() {
      let list = JSArrayOfListLOf_ConditionUtilL().of([JSArrayOf_ConditionUtilL().of([])]);
      this[_children][$forEach](dart.fn(child => {
        if (list[$length] === 1 && dart.test(list[$_get](0)[$isEmpty])) {
          list = child.getList();
        } else if (this.type == condition$._ConditionType.and) {
          list = child.getList()[$map](ListLOf_ConditionUtilL(), dart.fn(inner => {
            list[$forEach](dart.fn(inner2 => {
              inner[$insertAll](0, inner2);
            }, ListLOf_ConditionUtilLToNullN()));
            return inner;
          }, ListLOf_ConditionUtilLToListLOf_ConditionUtilL()))[$toList]();
        } else {
          list[$addAll](child.getList());
        }
      }, ConditionLToNullN()));
      if (this[_generated] != null) {
        list[$forEach](dart.fn(outer => {
          outer[$insert](0, this[_generated]);
        }, ListLOf_ConditionUtilLToNullN()));
      }
      return list;
    }
    static getPrefixes(conds, invert = false) {
      return conds[$map](StringL(), dart.fn(outer => outer[$map](StringL(), dart.fn(inner => {
        if (_ConditionUtilL().is(inner)) {
          let key = "if";
          if (dart.notNull(invert) !== dart.test(inner.invert)) {
            key = "unless";
          }
          if (inner.str[$isNotEmpty]) return key + " " + dart.notNull(inner.str);
        }
        return "";
      }, dynamicToStringL()))[$join](" ")[$replaceAll]("null ", ""), ListLToStringL()))[$toList]();
    }
  };
  (condition$.Condition.new = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_setCond](cond);
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.score = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_setCond](cond);
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.block = function(cond, opts) {
    let block = opts && 'block' in opts ? opts.block : null;
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_setCond](cond, {block: block});
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.blocks = function(cond, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    if (!(compare != null)) dart.assertFailed(null, L13, 43, 12, "compare != null");
    this[_setCond](cond, {target: compare});
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.entity = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_setCond](cond);
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.predicate = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_generated] = new condition$._ConditionUtil.new("predicate " + dart.notNull(cond.name));
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.tag = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this[_setCond](cond);
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.data = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    if (cond.subcommand !== "get") {
      dart.throw("Please insert a Data.get Widget in Condition.data!");
    }
    this[_setCond](cond);
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.not = function(cond) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this.type = condition$._ConditionType.invert;
    this[_setCond](cond, {invert: true});
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.and = function(conds) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this.type = condition$._ConditionType.and;
    conds[$forEach](dart.fn(cond => {
      if (ConditionL().is(cond)) {
        this[_children][$add](cond);
      } else {
        this[_children][$add](new condition$.Condition.new(cond));
      }
    }, dynamicToNullN()));
  }).prototype = condition$.Condition.prototype;
  (condition$.Condition.or = function(conds) {
    this[_children] = JSArrayOfConditionL().of([]);
    this[type] = null;
    this[_generated] = null;
    this.type = condition$._ConditionType.or;
    conds[$forEach](dart.fn(cond => {
      if (ConditionL().is(cond)) {
        this[_children][$add](cond);
      } else {
        this[_children][$add](new condition$.Condition.new(cond));
      }
    }, dynamicToNullN()));
  }).prototype = condition$.Condition.prototype;
  dart.addTypeTests(condition$.Condition);
  dart.addTypeCaches(condition$.Condition);
  dart.setMethodSignature(condition$.Condition, () => ({
    __proto__: dart.getMethods(condition$.Condition.__proto__),
    [_setCond]: dart.fnType(dart.void, [dart.dynamic], {block: dart.legacy(block.Block), invert: dart.legacy(core.bool), target: dart.legacy(location$.Location)}, {}),
    [_invertGenerated]: dart.fnType(dart.void, []),
    getList: dart.fnType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(condition$._ConditionUtil))))), [])
  }));
  dart.setLibraryUri(condition$.Condition, L14);
  dart.setFieldSignature(condition$.Condition, () => ({
    __proto__: dart.getFields(condition$.Condition.__proto__),
    [_children]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(condition$.Condition)))),
    type: dart.fieldType(dart.legacy(condition$._ConditionType)),
    [_generated]: dart.fieldType(dart.legacy(condition$._ConditionUtil))
  }));
  condition$._ConditionUtil = class _ConditionUtil extends core.Object {
    toString() {
      return "Condition: " + dart.notNull(this.str) + ", Not: " + dart.toString(this.invert);
    }
  };
  (condition$._ConditionUtil.new = function(str, opts) {
    let invert = opts && 'invert' in opts ? opts.invert : false;
    this.invert = false;
    this.str = str;
    this.invert = invert;
    ;
  }).prototype = condition$._ConditionUtil.prototype;
  dart.addTypeTests(condition$._ConditionUtil);
  dart.addTypeCaches(condition$._ConditionUtil);
  dart.setMethodSignature(condition$._ConditionUtil, () => ({
    __proto__: dart.getMethods(condition$._ConditionUtil.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(condition$._ConditionUtil, L14);
  dart.setFieldSignature(condition$._ConditionUtil, () => ({
    __proto__: dart.getFields(condition$._ConditionUtil.__proto__),
    invert: dart.fieldType(dart.legacy(core.bool)),
    str: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(condition$._ConditionUtil, ['toString']);
  var _name$ = dart.privateName(condition$, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  condition$._ConditionType = class _ConditionType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (condition$._ConditionType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = condition$._ConditionType.prototype;
  dart.addTypeTests(condition$._ConditionType);
  dart.addTypeCaches(condition$._ConditionType);
  dart.setMethodSignature(condition$._ConditionType, () => ({
    __proto__: dart.getMethods(condition$._ConditionType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(condition$._ConditionType, L14);
  dart.setFieldSignature(condition$._ConditionType, () => ({
    __proto__: dart.getFields(condition$._ConditionType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(condition$._ConditionType, ['toString']);
  condition$._ConditionType.and = C1 || CT.C1;
  condition$._ConditionType.or = C2 || CT.C2;
  condition$._ConditionType.invert = C3 || CT.C3;
  condition$._ConditionType.values = C4 || CT.C4;
  var C5;
  var _type = dart.privateName(data$, "_type");
  var _typeValue = dart.privateName(data$, "_typeValue");
  var _subcommand = dart.privateName(data$, "_subcommand");
  var _getNbt = dart.privateName(data$, "_getNbt");
  var target$1 = dart.privateName(data$, "Data.target");
  var path$0 = dart.privateName(data$, "Data.path");
  var scale$ = dart.privateName(data$, "Data.scale");
  var datatype$ = dart.privateName(data$, "Data.datatype");
  var score$1 = dart.privateName(data$, "Data.score");
  var modify$ = dart.privateName(data$, "Data.modify");
  var nbt$ = dart.privateName(data$, "Data.nbt");
  var strNbt$ = dart.privateName(data$, "Data.strNbt");
  data$.Data = class Data extends rest_action.RestActionAble {
    get target() {
      return this[target$1];
    }
    set target(value) {
      this[target$1] = value;
    }
    get path() {
      return this[path$0];
    }
    set path(value) {
      this[path$0] = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      this[scale$] = value;
    }
    get datatype() {
      return this[datatype$];
    }
    set datatype(value) {
      this[datatype$] = value;
    }
    get score() {
      return this[score$1];
    }
    set score(value) {
      this[score$1] = value;
    }
    get modify() {
      return this[modify$];
    }
    set modify(value) {
      this[modify$] = value;
    }
    get nbt() {
      return this[nbt$];
    }
    set nbt(value) {
      this[nbt$] = value;
    }
    get strNbt() {
      return this[strNbt$];
    }
    set strNbt(value) {
      this[strNbt$] = value;
    }
    get subcommand() {
      return this[_subcommand];
    }
    get type() {
      return this[_type];
    }
    get typeValue() {
      return this[_typeValue];
    }
    get isGetting() {
      return this.subcommand === "get";
    }
    handleTarget(target) {
      this[_typeValue] = dart.toString(target);
      if (DataStorageL().is(target)) {
        this[_type] = "storage";
      } else if (EntityL().is(target)) {
        this[_type] = "entity";
      } else if (LocationL().is(target)) {
        this[_type] = "block";
      } else {
        dart.throw("Please insert either an entity or location into data");
      }
    }
    getTarget() {
      return dart.notNull(this[_type]) + " " + dart.notNull(this[_typeValue]);
    }
    generate(context) {
      switch (this[_subcommand]) {
        case "merge":
        {
          return new command$.Command.new("data merge " + dart.notNull(this.getTarget()) + " " + dart.notNull(this[_getNbt]()));
        }
        case "get":
        {
          let cmd = JSArrayOfStringL().of(["data get", this.getTarget(), this.path]);
          if (this.scale != null) {
            cmd[$add](dart.notNull(this.scale) < 0.000001 ? this.scale[$toStringAsFixed](10) : dart.toString(this.scale));
          }
          return new command$.Command.new(cmd[$join](" "));
        }
        case "remove":
        {
          return new command$.Command.new("data remove " + dart.notNull(this.getTarget()) + " " + dart.notNull(this.path));
        }
        case "modify":
        {
          return new command$.Command.new("data modify " + dart.notNull(this.getTarget()) + (" " + dart.str(this.path) + " " + dart.str(this.modify)));
        }
        case "score":
        {
          return new command$.Command.new("execute store result " + dart.notNull(this.getTarget()) + (" " + dart.str(this.path) + " " + dart.str(this.datatype) + " " + dart.str(this.scale) + " run scoreboard players get " + dart.str(dart.toString(this.score.entity)) + " " + dart.str(this.score.score)));
        }
      }
      dart.throw("Invalid subcommand!");
    }
    [_getNbt]() {
      if (this.strNbt != null && this.strNbt[$isNotEmpty]) return this.strNbt;
      return gson.gson.encode(this.nbt);
    }
  };
  (data$.Data.new = function(target, opts) {
    let nbt = opts && 'nbt' in opts ? opts.nbt : C5 || CT.C5;
    let type = opts && 'type' in opts ? opts.type : "merge";
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[datatype$] = null;
    this[score$1] = null;
    this[scale$] = null;
    this[strNbt$] = null;
    this[target$1] = target;
    this[nbt$] = nbt;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = type;
  }).prototype = data$.Data.prototype;
  (data$.Data.merge = function(target, opts) {
    let nbt = opts && 'nbt' in opts ? opts.nbt : C5 || CT.C5;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[datatype$] = null;
    this[score$1] = null;
    this[scale$] = null;
    this[target$1] = target;
    this[nbt$] = nbt;
    this[strNbt$] = strNbt;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "merge";
  }).prototype = data$.Data.prototype;
  (data$.Data.get = function(target, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[datatype$] = null;
    this[score$1] = null;
    this[strNbt$] = null;
    this[nbt$] = null;
    this[target$1] = target;
    this[path$0] = path;
    this[scale$] = scale;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "get";
  }).prototype = data$.Data.prototype;
  (data$.Data.remove = function(target, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[datatype$] = null;
    this[score$1] = null;
    this[scale$] = null;
    this[strNbt$] = null;
    this[nbt$] = null;
    this[target$1] = target;
    this[path$0] = path;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "remove";
  }).prototype = data$.Data.prototype;
  (data$.Data.fromScore = function(target, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let score = opts && 'score' in opts ? opts.score : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let datatype = opts && 'datatype' in opts ? opts.datatype : "byte";
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[strNbt$] = null;
    this[nbt$] = null;
    this[target$1] = target;
    this[path$0] = path;
    this[score$1] = score;
    this[scale$] = scale;
    this[datatype$] = datatype;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "score";
  }).prototype = data$.Data.prototype;
  (data$.Data.modify = function(target, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let modify = opts && 'modify' in opts ? opts.modify : null;
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[datatype$] = null;
    this[score$1] = null;
    this[scale$] = null;
    this[strNbt$] = null;
    this[nbt$] = null;
    this[target$1] = target;
    this[path$0] = path;
    this[modify$] = modify;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "modify";
  }).prototype = data$.Data.prototype;
  (data$.Data.copy = function(target, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : null;
    this[_type] = null;
    this[_typeValue] = null;
    this[_subcommand] = null;
    this[path$0] = "";
    this[modify$] = null;
    this[datatype$] = null;
    this[score$1] = null;
    this[scale$] = null;
    this[strNbt$] = null;
    this[nbt$] = null;
    this[target$1] = target;
    this[path$0] = path;
    data$.Data.__proto__.new.call(this);
    this.handleTarget(this.target);
    this[_subcommand] = "modify";
    this.modify = new data$.DataModify.set(from, {fromPath: fromPath});
  }).prototype = data$.Data.prototype;
  dart.addTypeTests(data$.Data);
  dart.addTypeCaches(data$.Data);
  dart.setMethodSignature(data$.Data, () => ({
    __proto__: dart.getMethods(data$.Data.__proto__),
    handleTarget: dart.fnType(dart.void, [dart.dynamic]),
    getTarget: dart.fnType(dart.legacy(core.String), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    [_getNbt]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(data$.Data, () => ({
    __proto__: dart.getGetters(data$.Data.__proto__),
    subcommand: dart.legacy(core.String),
    type: dart.legacy(core.String),
    typeValue: dart.legacy(core.String),
    isGetting: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(data$.Data, L15);
  dart.setFieldSignature(data$.Data, () => ({
    __proto__: dart.getFields(data$.Data.__proto__),
    target: dart.fieldType(dart.dynamic),
    [_type]: dart.fieldType(dart.legacy(core.String)),
    [_typeValue]: dart.fieldType(dart.legacy(core.String)),
    [_subcommand]: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    scale: dart.fieldType(dart.legacy(core.num)),
    datatype: dart.fieldType(dart.legacy(core.String)),
    score: dart.fieldType(dart.legacy(score$.Score)),
    modify: dart.fieldType(dart.legacy(data$.DataModify)),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    strNbt: dart.fieldType(dart.legacy(core.String))
  }));
  var _checkValue = dart.privateName(data$, "_checkValue");
  var type$ = dart.privateName(data$, "DataModify.type");
  var value$ = dart.privateName(data$, "DataModify.value");
  var fromSource = dart.privateName(data$, "DataModify.fromSource");
  var fromType = dart.privateName(data$, "DataModify.fromType");
  var fromPath$ = dart.privateName(data$, "DataModify.fromPath");
  var index$ = dart.privateName(data$, "DataModify.index");
  data$.DataModify = class DataModify extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get fromSource() {
      return this[fromSource];
    }
    set fromSource(value) {
      this[fromSource] = value;
    }
    get fromType() {
      return this[fromType];
    }
    set fromType(value) {
      this[fromType] = value;
    }
    get fromPath() {
      return this[fromPath$];
    }
    set fromPath(value) {
      this[fromPath$] = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      this[index$] = value;
    }
    [_checkValue](value) {
      if (MapL().is(value) || ListL().is(value)) return this.value = gson.gson.encode(value);
      if (numL().is(value) || StringL().is(value)) return this.value = dart.toString(value);
      if (DataStorageL().is(value)) {
        this.fromType = "storage";
        return this.fromSource = value.name;
      }
      if (EntityL().is(value)) {
        this.fromType = "entity";
        return this.fromSource = dart.toString(value);
      }
      if (LocationL().is(value)) {
        this.fromType = "block";
        return this.fromSource = dart.toString(value);
      }
      dart.throw("Please insert a Map, number, String, Entity, DataStorage or Location as value for Data Modify!");
    }
    toString() {
      let str = this.type;
      if (this.index != null) str = dart.notNull(str) + (" " + dart.toString(this.index));
      if (this.fromType != null) {
        str = dart.notNull(str) + " from ";
        str = dart.notNull(str) + (dart.notNull(this.fromType) + " " + dart.notNull(this.fromSource) + " " + dart.notNull(this.fromPath));
      } else {
        str = dart.notNull(str) + (" value " + dart.notNull(this.value));
      }
      return str;
    }
  };
  (data$.DataModify.set = function(value, opts) {
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : "";
    this[type$] = null;
    this[value$] = null;
    this[fromSource] = null;
    this[fromType] = null;
    this[index$] = null;
    this[fromPath$] = fromPath;
    this.type = "set";
    this[_checkValue](value);
  }).prototype = data$.DataModify.prototype;
  (data$.DataModify.merge = function(value, opts) {
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : "";
    this[type$] = null;
    this[value$] = null;
    this[fromSource] = null;
    this[fromType] = null;
    this[index$] = null;
    this[fromPath$] = fromPath;
    this.type = "merge";
    this[_checkValue](value);
  }).prototype = data$.DataModify.prototype;
  (data$.DataModify.prepend = function(value, opts) {
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : "";
    this[type$] = null;
    this[value$] = null;
    this[fromSource] = null;
    this[fromType] = null;
    this[index$] = null;
    this[fromPath$] = fromPath;
    this.type = "prepend";
    this[_checkValue](value);
  }).prototype = data$.DataModify.prototype;
  (data$.DataModify.append = function(value, opts) {
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : "";
    this[type$] = null;
    this[value$] = null;
    this[fromSource] = null;
    this[fromType] = null;
    this[index$] = null;
    this[fromPath$] = fromPath;
    this.type = "append";
    this[_checkValue](value);
  }).prototype = data$.DataModify.prototype;
  (data$.DataModify.insert = function(value, opts) {
    let fromPath = opts && 'fromPath' in opts ? opts.fromPath : "";
    let index = opts && 'index' in opts ? opts.index : 0;
    this[type$] = null;
    this[value$] = null;
    this[fromSource] = null;
    this[fromType] = null;
    this[fromPath$] = fromPath;
    this[index$] = index;
    this.type = "insert";
    this[_checkValue](value);
  }).prototype = data$.DataModify.prototype;
  dart.addTypeTests(data$.DataModify);
  dart.addTypeCaches(data$.DataModify);
  dart.setMethodSignature(data$.DataModify, () => ({
    __proto__: dart.getMethods(data$.DataModify.__proto__),
    [_checkValue]: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(data$.DataModify, L15);
  dart.setFieldSignature(data$.DataModify, () => ({
    __proto__: dart.getFields(data$.DataModify.__proto__),
    type: dart.fieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.legacy(core.String)),
    fromSource: dart.fieldType(dart.legacy(core.String)),
    fromType: dart.fieldType(dart.legacy(core.String)),
    fromPath: dart.fieldType(dart.legacy(core.String)),
    index: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(data$.DataModify, ['toString']);
  var name$1 = dart.privateName(data$, "DataStorage.name");
  data$.DataStorage = class DataStorage extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (data$.DataStorage.new = function(name) {
    this[name$1] = name;
    ;
  }).prototype = data$.DataStorage.prototype;
  dart.addTypeTests(data$.DataStorage);
  dart.addTypeCaches(data$.DataStorage);
  dart.setMethodSignature(data$.DataStorage, () => ({
    __proto__: dart.getMethods(data$.DataStorage.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(data$.DataStorage, L15);
  dart.setFieldSignature(data$.DataStorage, () => ({
    __proto__: dart.getFields(data$.DataStorage.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(data$.DataStorage, ['toString']);
  var x$ = dart.privateName(location$, "Location.x");
  var y$ = dart.privateName(location$, "Location.y");
  var z$ = dart.privateName(location$, "Location.z");
  var location$0 = dart.privateName(location$, "Location.location");
  location$.Location = class Location extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      this[x$] = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      this[y$] = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      this[z$] = value;
    }
    get location() {
      return this[location$0];
    }
    set location(value) {
      this[location$0] = value;
    }
    storeResult(command, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let datatype = opts && 'datatype' in opts ? opts.datatype : "double";
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      if (!(path == null && path[$isEmpty])) dart.assertFailed(null, L16, 70, 12, "path == null && path.isEmpty");
      return new execute.Execute.new({children: JSArrayOfWidgetL().of([command]), encapsulate: false, args: JSArrayOfListLOfStringL().of([JSArrayOfStringL().of(["store " + (dart.test(useSuccess) ? "success" : "result") + " block " + dart.notNull(this.location) + " " + dart.notNull(path) + (" " + dart.str(datatype) + " " + dart.str(scale))])])});
    }
    toString() {
      return (dart.notNull(this.location) + " ")[$replaceAll](".0 ", " ")[$trim]();
    }
  };
  (location$.Location.new = function(location) {
    this[z$] = 0.0;
    this[y$] = null;
    this[x$] = null;
    this[location$0] = location;
    this.x = this.y = this.z = 0.0;
  }).prototype = location$.Location.prototype;
  (location$.Location.glob = function(opts) {
    let x = opts && 'x' in opts ? opts.x : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    let z = opts && 'z' in opts ? opts.z : 0;
    this[z$] = 0.0;
    this[location$0] = null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    this.location = dart.toString(this.x) + " " + dart.toString(this.y) + " " + dart.toString(this.z);
  }).prototype = location$.Location.prototype;
  (location$.Location.rel = function(opts) {
    let x = opts && 'x' in opts ? opts.x : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    let z = opts && 'z' in opts ? opts.z : 0;
    this[z$] = 0.0;
    this[location$0] = null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    this.location = "~" + (this.x === 0 ? "" : dart.toString(this.x)) + " ~" + (this.y === 0 ? "" : dart.toString(this.y)) + " ~" + (this.z === 0 ? "" : dart.toString(this.z));
  }).prototype = location$.Location.prototype;
  (location$.Location.local = function(opts) {
    let x = opts && 'x' in opts ? opts.x : 0;
    let y = opts && 'y' in opts ? opts.y : 0;
    let z = opts && 'z' in opts ? opts.z : 0;
    this[z$] = 0.0;
    this[location$0] = null;
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    this.location = "^" + (this.x === 0 ? "" : dart.toString(this.x)) + " ^" + (this.y === 0 ? "" : dart.toString(this.y)) + " ^" + (this.z === 0 ? "" : dart.toString(this.z));
  }).prototype = location$.Location.prototype;
  (location$.Location.here = function() {
    this[z$] = 0.0;
    this[y$] = null;
    this[x$] = null;
    this[location$0] = null;
    this.location = "~ ~ ~";
    this.x = this.y = this.z = 0.0;
  }).prototype = location$.Location.prototype;
  (location$.Location.clone = function(loc) {
    this[z$] = 0.0;
    this[y$] = null;
    this[x$] = null;
    this[location$0] = null;
    this.x = loc.x;
    this.y = loc.y;
    this.z = loc.z;
    this.location = dart.toString(loc);
  }).prototype = location$.Location.prototype;
  dart.addTypeTests(location$.Location);
  dart.addTypeCaches(location$.Location);
  dart.setMethodSignature(location$.Location, () => ({
    __proto__: dart.getMethods(location$.Location.__proto__),
    storeResult: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(command$.Command)], {datatype: dart.legacy(core.String), path: dart.legacy(core.String), scale: dart.legacy(core.double), useSuccess: dart.legacy(core.bool)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(location$.Location, L17);
  dart.setFieldSignature(location$.Location, () => ({
    __proto__: dart.getFields(location$.Location.__proto__),
    x: dart.fieldType(dart.legacy(core.double)),
    y: dart.fieldType(dart.legacy(core.double)),
    z: dart.fieldType(dart.legacy(core.double)),
    location: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(location$.Location, ['toString']);
  var _commands = dart.privateName(command$, "_commands");
  const _is_CommandList_default = Symbol('_is_CommandList_default');
  command$.CommandList$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var TLToCommandL = () => (TLToCommandL = dart.constFn(dart.fnType(CommandL(), [TL()])))();
    class CommandList extends rest_action.RestActionAble {
      generate(context) {
        return new for_list.For.of(this[_commands]);
      }
      get length() {
        return this[_commands][$length];
      }
      toMap() {
        return new _js_helper.LinkedMap.from(["commands", this[_commands][$map](MapLOfStringL$StringL(), dart.fn(x => x.toMap(), CommandLToMapLOfStringL$StringL()))]);
      }
    }
    (CommandList.new = function(commands) {
      this[_commands] = null;
      CommandList.__proto__.new.call(this);
      if (dart.wrapType(TL())[$toString]() === "String") {
        this[_commands] = commands[$map](CommandL(), dart.fn(x => new command$.Command.new(dart.toString(x)), TLToCommandL()))[$toList]();
      } else if (dart.wrapType(TL())[$toString]() === "Command") {
        this[_commands] = ListLOfCommandL().as(commands);
      } else {
        dart.throw("Please insert a string or a list into CommandList");
      }
    }).prototype = CommandList.prototype;
    (CommandList.str = function(str) {
      this[_commands] = null;
      CommandList.__proto__.new.call(this);
      this[_commands] = str[$replaceAll](core.RegExp.new("[ \\t]{2,}"), "")[$split]("\n")[$where](dart.fn(i => i[$isNotEmpty] && i !== " ", StringLToboolL()))[$map](CommandL(), dart.fn(x => new command$.Command.new(x), StringLToCommandL()))[$toList]();
    }).prototype = CommandList.prototype;
    dart.addTypeTests(CommandList);
    CommandList.prototype[_is_CommandList_default] = true;
    dart.addTypeCaches(CommandList);
    dart.setMethodSignature(CommandList, () => ({
      __proto__: dart.getMethods(CommandList.__proto__),
      generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
      toMap: dart.fnType(dart.legacy(core.Map), [])
    }));
    dart.setGetterSignature(CommandList, () => ({
      __proto__: dart.getGetters(CommandList.__proto__),
      length: dart.legacy(core.int)
    }));
    dart.setLibraryUri(CommandList, L18);
    dart.setFieldSignature(CommandList, () => ({
      __proto__: dart.getFields(CommandList.__proto__),
      [_commands]: dart.fieldType(dart.legacy(core.List$(dart.legacy(command$.Command))))
    }));
    return CommandList;
  });
  command$.CommandList = command$.CommandList$();
  dart.addTypeTests(command$.CommandList, _is_CommandList_default);
  var _command$ = dart.privateName(command$, "_command");
  command$.Command = class Command extends rest_action.RestActionAble {
    generate(context) {
      return new text.Text.new(this[_command$]);
    }
    toString() {
      return this[_command$];
    }
    toMap() {
      return new (IdentityMapOfStringL$StringL()).from(["command", this[_command$]]);
    }
  };
  (command$.Command.new = function(_command) {
    this[_command$] = _command;
    command$.Command.__proto__.new.call(this);
    if (this[_command$][$isNotEmpty] && this[_command$][$substring](0, 1) === "/") {
      this[_command$] = this[_command$][$substring](1);
    }
  }).prototype = command$.Command.prototype;
  dart.addTypeTests(command$.Command);
  dart.addTypeCaches(command$.Command);
  dart.setMethodSignature(command$.Command, () => ({
    __proto__: dart.getMethods(command$.Command.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), [])
  }));
  dart.setLibraryUri(command$.Command, L18);
  dart.setFieldSignature(command$.Command, () => ({
    __proto__: dart.getFields(command$.Command.__proto__),
    [_command$]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(command$.Command, ['toString']);
  var _str$ = dart.privateName(text, "_str");
  text.Text = class Text extends rest_action.RestActionAble {
    generate(context) {
      return this[_str$];
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["Text", this[_str$]]);
    }
  };
  (text.Text.new = function(_str) {
    this[_str$] = _str;
    text.Text.__proto__.new.call(this);
    ;
  }).prototype = text.Text.prototype;
  dart.addTypeTests(text.Text);
  dart.addTypeCaches(text.Text);
  dart.setMethodSignature(text.Text, () => ({
    __proto__: dart.getMethods(text.Text.__proto__),
    generate: dart.fnType(dart.legacy(core.String), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(text.Text, L19);
  dart.setFieldSignature(text.Text, () => ({
    __proto__: dart.getFields(text.Text.__proto__),
    [_str$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _args = dart.privateName(execute, "_args");
  var _name$0 = dart.privateName(execute, "_name");
  var C6;
  var _resolve = dart.privateName(execute, "_resolve");
  var _addArgumentRet = dart.privateName(execute, "_addArgumentRet");
  var C7;
  var C8;
  var _name$1 = dart.privateName(bossbar, "_name");
  var C9;
  var children$ = dart.privateName(execute, "Execute.children");
  var targetFileName$ = dart.privateName(execute, "Execute.targetFileName");
  var targetFilePath$ = dart.privateName(execute, "Execute.targetFilePath");
  var encapsulate$ = dart.privateName(execute, "Execute.encapsulate");
  execute.Execute = class Execute extends rest_action.RestActionAble {
    get children() {
      return this[children$];
    }
    set children(value) {
      this[children$] = value;
    }
    get targetFileName() {
      return this[targetFileName$];
    }
    set targetFileName(value) {
      this[targetFileName$] = value;
    }
    get targetFilePath() {
      return this[targetFilePath$];
    }
    set targetFilePath(value) {
      this[targetFilePath$] = value;
    }
    get encapsulate() {
      return this[encapsulate$];
    }
    set encapsulate(value) {
      this[encapsulate$] = value;
    }
    get args() {
      return this[_args];
    }
    generate(context) {
      let res = this[_args][$map](GroupL(), dart.fn(subargs => {
        let t3, t3$;
        return new group.Group.new({children: this.children, prefix: "execute " + dart.notNull(subargs[$join](" ")) + " run", groupMin: dart.test(this.encapsulate) ? 3 : -1, generateIDs: this.targetFileName == null, path: (t3 = this.targetFilePath, t3 == null ? "objd" : t3), filename: (t3$ = this.targetFileName, t3$ == null ? "execute" : t3$)});
      }, ListLOfStringLToGroupL()))[$toList]();
      if (res[$length] === 1) return res[$_get](0);
      return new for_list.For.of(res);
    }
    [_addArgumentRet](arg) {
      let t3;
      let args = this[_resolve](this[_args]);
      args[$forEach](dart.fn(e => e[$add](arg), ListLOfStringLTovoid()));
      return new execute.Execute.new({children: ListOfWidgetL().from((t3 = this.children, t3 == null ? [] : t3)), encapsulate: this.encapsulate, args: args, writable: this.writable});
    }
    as(entity) {
      return this[_addArgumentRet]("as " + dart.notNull(dart.toString(entity)));
    }
    at(entity) {
      return this[_addArgumentRet]("at " + dart.notNull(dart.toString(entity)));
    }
    asat(entity) {
      return this[_addArgumentRet]("as " + dart.notNull(dart.toString(entity)) + " at @s");
    }
    positioned(loc) {
      if (!(LocationL().is(loc) || EntityL().is(loc))) {
        dart.throw("Please insert either a Location or an Entity into Execute.positioned");
      }
      return this[_addArgumentRet]("positioned " + (EntityL().is(loc) ? "as " : "") + dart.notNull(dart.toString(loc)));
    }
    align(axis) {
      if (!axis[$isNotEmpty]) dart.assertFailed(null, L20, 257, 12, "axis.isNotEmpty");
      return this[_addArgumentRet]("align " + dart.notNull(axis));
    }
    center() {
      return this.align("xyz positioned ~0.5 ~0.5 ~0.5");
    }
    vcenter() {
      return this.align("xz");
    }
    anchored(anchor) {
      return this[_addArgumentRet]("anchored " + dart.notNull(dart.toString(anchor)[$split](".")[$_get](1)));
    }
    facing(target, opts) {
      let facing = opts && 'facing' in opts ? opts.facing : C6 || CT.C6;
      if (LocationL().is(target)) {
        return this[_addArgumentRet]("facing " + dart.notNull(dart.toString(target)));
      }
      if (EntityL().is(target)) {
        return this[_addArgumentRet]("facing entity " + dart.notNull(dart.toString(target)) + " " + dart.notNull(dart.toString(facing)[$split](".")[$_get](1)));
      }
      dart.throw("Please insert either a Location or an Entity into Execute.facing");
    }
    If(c) {
      let prefixes = condition$.Condition.getPrefixes(c.getList());
      let args = this.args;
      this[_args] = JSArrayOfListLOfStringL().of([]);
      prefixes[$forEach](dart.fn(p => {
        let add = JSArrayOfListLOfStringL().of([]);
        args[$forEach](dart.fn(e => add[$add](ListOfStringL().from(e)), ListLOfStringLTovoid()));
        add[$forEach](dart.fn(e => e[$add](p), ListLOfStringLTovoid()));
        this[_args][$addAll](add);
      }, StringLToNullN()));
      return this;
    }
    storeBlock(opts) {
      let result = opts && 'result' in opts ? opts.result : C7 || CT.C7;
      let location = opts && 'location' in opts ? opts.location : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let varType = opts && 'varType' in opts ? opts.varType : C8 || CT.C8;
      return this[_addArgumentRet]("store " + dart.notNull(dart.toString(result)[$split](".")[$_get](1)) + " block " + dart.notNull(dart.toString(location)) + " " + dart.notNull(path) + " " + dart.notNull(dart.toString(varType)[$split](".")[$_get](1)) + " " + dart.toString(scale));
    }
    storeEntity(opts) {
      let result = opts && 'result' in opts ? opts.result : C7 || CT.C7;
      let entity = opts && 'entity' in opts ? opts.entity : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let varType = opts && 'varType' in opts ? opts.varType : C8 || CT.C8;
      return this[_addArgumentRet]("store " + dart.notNull(dart.toString(result)[$split](".")[$_get](1)) + " entity " + dart.notNull(dart.toString(entity)) + " " + dart.notNull(path) + " " + dart.notNull(dart.toString(varType)[$split](".")[$_get](1)) + " " + dart.toString(scale));
    }
    storeScore(opts) {
      let result = opts && 'result' in opts ? opts.result : C7 || CT.C7;
      let entity = opts && 'entity' in opts ? opts.entity : null;
      let score = opts && 'score' in opts ? opts.score : null;
      return this[_addArgumentRet]("store " + dart.notNull(dart.toString(result)[$split](".")[$_get](1)) + " score " + dart.notNull(dart.toString(entity)) + " " + dart.notNull(score));
    }
    storeBossbar(opts) {
      let result = opts && 'result' in opts ? opts.result : C7 || CT.C7;
      let name = opts && 'name' in opts ? opts.name : null;
      let setting = opts && 'setting' in opts ? opts.setting : C9 || CT.C9;
      return this[_addArgumentRet]("store " + dart.notNull(dart.toString(result)[$split](".")[$_get](1)) + " score " + dart.notNull(name) + " " + dart.notNull(dart.toString(setting)[$split](".")[$_get](1)));
    }
    unless(c) {
      return this.If(new condition$.Condition.not(c));
    }
    rotated(rot) {
      if (RotationL().is(rot)) {
        return this[_addArgumentRet]("rotated " + dart.notNull(dart.toString(rot)));
      }
      if (EntityL().is(rot)) {
        return this[_addArgumentRet]("rotated as " + dart.notNull(dart.toString(rot)));
      }
      dart.throw("Please insert either a Rotation or an Entity into Execute.rotated");
    }
    dimension(dimension) {
      let d = dart.toString(dimension);
      if (DimensionL().is(dimension)) {
        d = d[$split](".")[$_get](1);
      }
      return this[_addArgumentRet]("in " + dart.notNull(d));
    }
    In(d) {
      return this.dimension(d);
    }
    run(w) {
      let children = ListOfWidgetL().from(this.children);
      children[$add](w);
      return new execute.Execute.new({children: children, encapsulate: this.encapsulate, args: this[_resolve](this.args), writable: this.writable});
    }
    runStrait(f) {
      return this.run(new strait_widget.StraitWidget.new(f));
    }
    [_resolve](src) {
      let ret = JSArrayOfListLOfStringL().of([]);
      dart.dsend(src, 'forEach', [dart.fn(e => ret[$add](ListOfStringL().from(ListL().as(e))), dynamicTovoid())]);
      return ret;
    }
  };
  (execute.Execute.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let as = opts && 'as' in opts ? opts.as : null;
    let at = opts && 'at' in opts ? opts.at : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let align = opts && 'align' in opts ? opts.align : null;
    let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
    let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let If = opts && 'If' in opts ? opts.If : null;
    let unless = opts && 'unless' in opts ? opts.unless : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    let dimension = opts && 'dimension' in opts ? opts.dimension : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    let args = opts && 'args' in opts ? opts.args : null;
    let writable = opts && 'writable' in opts ? opts.writable : null;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[children$] = children;
    this[targetFilePath$] = targetFilePath;
    this[targetFileName$] = targetFileName;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    if (args != null) this[_args] = args;
    if (as != null) this[_args] = this.as(as).args;
    if (at != null) this[_args] = this.at(at).args;
    if (location != null) this[_args] = this.positioned(location).args;
    if (align != null) this[_args] = this.align(align).args;
    if (anchor != null) this[_args] = this.anchored(anchor).args;
    if (facing != null) this[_args] = this.facing(facing).args;
    if (rotation != null) this[_args] = this.rotated(rotation).args;
    if (dimension != null) this[_args] = this.dimension(dimension).args;
    if (If != null) this[_args] = this.If(If).args;
    if (unless != null) this[_args] = this.unless(unless).args;
    this.children == null ? this.children = JSArrayOfWidgetL().of([]) : null;
    this.writable = writable;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.strait = function(opts) {
    let run = opts && 'run' in opts ? opts.run : null;
    let as = opts && 'as' in opts ? opts.as : null;
    let at = opts && 'at' in opts ? opts.at : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let align = opts && 'align' in opts ? opts.align : null;
    let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
    let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : null;
    let If = opts && 'If' in opts ? opts.If : null;
    let unless = opts && 'unless' in opts ? opts.unless : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    let dimension = opts && 'dimension' in opts ? opts.dimension : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    let args = opts && 'args' in opts ? opts.args : null;
    let writable = opts && 'writable' in opts ? opts.writable : null;
    execute.Execute.new.call(this, {children: JSArrayOfWidgetL().of([new strait_widget.StraitWidget.new(run)]), as: as, at: at, location: location, align: align, targetFilePath: targetFilePath, targetFileName: targetFileName, anchor: anchor, If: If, unless: unless, rotation: rotation, dimension: dimension, encapsulate: encapsulate, args: args, writable: writable});
  }).prototype = execute.Execute.prototype;
  (execute.Execute.as_ = function(entity, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.as(entity).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.at = function(entity, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.at(entity).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.asat = function(entity, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.asat(entity).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.positioned = function(loc, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.positioned(loc).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.align = function(axis, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.align(axis).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.anchored = function(anchor, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.anchored(anchor).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.rotated = function(rot, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.rotated(rot).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.dimension = function(dimension, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.dimension(dimension).args;
  }).prototype = execute.Execute.prototype;
  (execute.Execute.facing = function(target, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    let facing = opts && 'facing' in opts ? opts.facing : C6 || CT.C6;
    this[_args] = JSArrayOfListLOfStringL().of([JSArrayOfStringL().of([])]);
    this[children$] = JSArrayOfWidgetL().of([]);
    this[encapsulate$] = true;
    this[targetFileName$] = null;
    this[targetFilePath$] = null;
    this[children$] = children;
    this[encapsulate$] = encapsulate;
    execute.Execute.__proto__.new.call(this);
    this[_args] = this.facing(target, {facing: facing}).args;
  }).prototype = execute.Execute.prototype;
  dart.addTypeTests(execute.Execute);
  dart.addTypeCaches(execute.Execute);
  dart.setMethodSignature(execute.Execute, () => ({
    __proto__: dart.getMethods(execute.Execute.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    [_addArgumentRet]: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(core.String)]),
    as: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(entity$.Entity)]),
    at: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(entity$.Entity)]),
    asat: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(entity$.Entity)]),
    positioned: dart.fnType(dart.legacy(execute.Execute), [dart.dynamic]),
    align: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(core.String)]),
    center: dart.fnType(dart.legacy(execute.Execute), []),
    vcenter: dart.fnType(dart.legacy(execute.Execute), []),
    anchored: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(execute.Facing)]),
    facing: dart.fnType(dart.legacy(execute.Execute), [dart.dynamic], {facing: dart.legacy(execute.Facing)}, {}),
    If: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(condition$.Condition)]),
    storeBlock: dart.fnType(dart.void, [], {location: dart.legacy(location$.Location), path: dart.legacy(core.String), result: dart.legacy(execute.ExecuteStoreResultType), scale: dart.legacy(core.int), varType: dart.legacy(execute.ExecuteStoreVarType)}, {}),
    storeEntity: dart.fnType(dart.void, [], {entity: dart.legacy(entity$.Entity), path: dart.legacy(core.String), result: dart.legacy(execute.ExecuteStoreResultType), scale: dart.legacy(core.int), varType: dart.legacy(execute.ExecuteStoreVarType)}, {}),
    storeScore: dart.fnType(dart.void, [], {entity: dart.legacy(entity$.Entity), result: dart.legacy(execute.ExecuteStoreResultType), score: dart.legacy(core.String)}, {}),
    storeBossbar: dart.fnType(dart.void, [], {name: dart.legacy(core.String), result: dart.legacy(execute.ExecuteStoreResultType), setting: dart.legacy(bossbar.BossbarOption)}, {}),
    unless: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(condition$.Condition)]),
    rotated: dart.fnType(dart.legacy(execute.Execute), [dart.dynamic]),
    dimension: dart.fnType(dart.legacy(execute.Execute), [dart.dynamic]),
    In: dart.fnType(dart.legacy(execute.Execute), [dart.dynamic]),
    run: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(widget.Widget)]),
    runStrait: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))]))]),
    [_resolve]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.String))))), [dart.dynamic])
  }));
  dart.setGetterSignature(execute.Execute, () => ({
    __proto__: dart.getGetters(execute.Execute.__proto__),
    args: dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.String)))))
  }));
  dart.setLibraryUri(execute.Execute, L21);
  dart.setFieldSignature(execute.Execute, () => ({
    __proto__: dart.getFields(execute.Execute.__proto__),
    [_args]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.String)))))),
    children: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    targetFileName: dart.fieldType(dart.legacy(core.String)),
    targetFilePath: dart.fieldType(dart.legacy(core.String)),
    encapsulate: dart.fieldType(dart.legacy(core.bool))
  }));
  var C10;
  var C11;
  execute.Facing = class Facing extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (execute.Facing.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = execute.Facing.prototype;
  dart.addTypeTests(execute.Facing);
  dart.addTypeCaches(execute.Facing);
  dart.setMethodSignature(execute.Facing, () => ({
    __proto__: dart.getMethods(execute.Facing.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(execute.Facing, L21);
  dart.setFieldSignature(execute.Facing, () => ({
    __proto__: dart.getFields(execute.Facing.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(execute.Facing, ['toString']);
  execute.Facing.eyes = C6 || CT.C6;
  execute.Facing.feet = C10 || CT.C10;
  execute.Facing.values = C11 || CT.C11;
  var C12;
  var C13;
  var C14;
  var C15;
  execute.Dimension = class Dimension extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (execute.Dimension.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = execute.Dimension.prototype;
  dart.addTypeTests(execute.Dimension);
  dart.addTypeCaches(execute.Dimension);
  dart.setMethodSignature(execute.Dimension, () => ({
    __proto__: dart.getMethods(execute.Dimension.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(execute.Dimension, L21);
  dart.setFieldSignature(execute.Dimension, () => ({
    __proto__: dart.getFields(execute.Dimension.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(execute.Dimension, ['toString']);
  execute.Dimension.overworld = C12 || CT.C12;
  execute.Dimension.the_end = C13 || CT.C13;
  execute.Dimension.the_nether = C14 || CT.C14;
  execute.Dimension.values = C15 || CT.C15;
  var C16;
  var C17;
  execute.ExecuteStoreResultType = class ExecuteStoreResultType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (execute.ExecuteStoreResultType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = execute.ExecuteStoreResultType.prototype;
  dart.addTypeTests(execute.ExecuteStoreResultType);
  dart.addTypeCaches(execute.ExecuteStoreResultType);
  dart.setMethodSignature(execute.ExecuteStoreResultType, () => ({
    __proto__: dart.getMethods(execute.ExecuteStoreResultType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(execute.ExecuteStoreResultType, L21);
  dart.setFieldSignature(execute.ExecuteStoreResultType, () => ({
    __proto__: dart.getFields(execute.ExecuteStoreResultType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(execute.ExecuteStoreResultType, ['toString']);
  execute.ExecuteStoreResultType.result = C7 || CT.C7;
  execute.ExecuteStoreResultType.success = C16 || CT.C16;
  execute.ExecuteStoreResultType.values = C17 || CT.C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  execute.ExecuteStoreVarType = class ExecuteStoreVarType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (execute.ExecuteStoreVarType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = execute.ExecuteStoreVarType.prototype;
  dart.addTypeTests(execute.ExecuteStoreVarType);
  dart.addTypeCaches(execute.ExecuteStoreVarType);
  dart.setMethodSignature(execute.ExecuteStoreVarType, () => ({
    __proto__: dart.getMethods(execute.ExecuteStoreVarType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(execute.ExecuteStoreVarType, L21);
  dart.setFieldSignature(execute.ExecuteStoreVarType, () => ({
    __proto__: dart.getFields(execute.ExecuteStoreVarType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(execute.ExecuteStoreVarType, ['toString']);
  execute.ExecuteStoreVarType.byte = C18 || CT.C18;
  execute.ExecuteStoreVarType.short = C19 || CT.C19;
  execute.ExecuteStoreVarType.int = C8 || CT.C8;
  execute.ExecuteStoreVarType.long = C20 || CT.C20;
  execute.ExecuteStoreVarType.float = C21 || CT.C21;
  execute.ExecuteStoreVarType.double = C22 || CT.C22;
  execute.ExecuteStoreVarType.values = C23 || CT.C23;
  var target$2 = dart.privateName(enchant, "Enchant.target");
  var enchantment$ = dart.privateName(enchant, "Enchant.enchantment");
  var level$ = dart.privateName(enchant, "Enchant.level");
  enchant.Enchant = class Enchant extends rest_action.RestActionAble {
    get target() {
      return this[target$2];
    }
    set target(value) {
      super.target = value;
    }
    get enchantment() {
      return this[enchantment$];
    }
    set enchantment(value) {
      super.enchantment = value;
    }
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    generate(context) {
      let cmd = "enchant ";
      cmd = cmd + (dart.notNull(dart.toString(this.target)) + (" " + dart.str(this.enchantment)));
      if (this.level != null) cmd = cmd + (" " + dart.str(this.level));
      return new command$.Command.new(cmd);
    }
  };
  (enchant.Enchant.new = function(target, enchantment, opts) {
    let level = opts && 'level' in opts ? opts.level : null;
    this[target$2] = target;
    this[enchantment$] = enchantment;
    this[level$] = level;
    enchant.Enchant.__proto__.new.call(this);
    ;
  }).prototype = enchant.Enchant.prototype;
  dart.addTypeTests(enchant.Enchant);
  dart.addTypeCaches(enchant.Enchant);
  dart.setMethodSignature(enchant.Enchant, () => ({
    __proto__: dart.getMethods(enchant.Enchant.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(enchant.Enchant, L22);
  dart.setFieldSignature(enchant.Enchant, () => ({
    __proto__: dart.getFields(enchant.Enchant.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity)),
    enchantment: dart.finalFieldType(dart.legacy(core.String)),
    level: dart.finalFieldType(dart.legacy(core.int))
  }));
  var selector$ = dart.privateName(entity$, "EntityClass.selector");
  entity$.EntityClass = class EntityClass extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      this[selector$] = value;
    }
  };
  (entity$.EntityClass.new = function() {
    this[selector$] = null;
    ;
  }).prototype = entity$.EntityClass.prototype;
  dart.addTypeTests(entity$.EntityClass);
  dart.addTypeCaches(entity$.EntityClass);
  dart.setLibraryUri(entity$.EntityClass, L23);
  dart.setFieldSignature(entity$.EntityClass, () => ({
    __proto__: dart.getFields(entity$.EntityClass.__proto__),
    selector: dart.fieldType(dart.legacy(core.String))
  }));
  var _setArguments = dart.privateName(entity$, "_setArguments");
  var Block_nbt = dart.privateName(block, "Block.nbt");
  var Block_states = dart.privateName(block, "Block.states");
  var Block_tag = dart.privateName(block, "Block.tag");
  var Block__id = dart.privateName(block, "Block._id");
  var C24;
  var _addArg = dart.privateName(entity$, "_addArg");
  var selector$0 = dart.privateName(entity$, "Entity.selector");
  var arguments$ = dart.privateName(entity$, "Entity.arguments");
  var playerName$ = dart.privateName(entity$, "Entity.playerName");
  entity$.Entity = class Entity extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      this[selector$0] = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      this[arguments$] = value;
    }
    get playerName() {
      return this[playerName$];
    }
    set playerName(value) {
      this[playerName$] = value;
    }
    setValues(opts) {
      let limit = opts && 'limit' in opts ? opts.limit : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let team = opts && 'team' in opts ? opts.team : null;
      let scores = opts && 'scores' in opts ? opts.scores : null;
      let nbt = opts && 'nbt' in opts ? opts.nbt : null;
      let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let area = opts && 'area' in opts ? opts.area : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let level = opts && 'level' in opts ? opts.level : null;
      let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
      let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
      let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
      let predicate = opts && 'predicate' in opts ? opts.predicate : null;
      this[_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
    }
    [_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, not) {
      let t4, t3;
      let n = "";
      if (not != null && dart.test(not)) {
        n = "!";
      }
      if (distance != null) {
        this.arguments[$_set]("distance", n + dart.notNull(dart.toString(distance)));
      }
      if (level != null) {
        this.arguments[$_set]("level", n + dart.notNull(dart.toString(level)));
      }
      if (limit != null) {
        this.arguments[$_set]("limit", n + dart.toString(limit));
      }
      if (type != null) {
        this.arguments[$_set]("type", n + dart.notNull(dart.toString(type)));
      }
      if (gamemode != null) {
        this.arguments[$_set]("gamemode", n + dart.notNull(dart.toString(gamemode)[$split](".")[$last]));
      }
      if (name != null) {
        this.arguments[$_set]("name", n + dart.notNull(name));
      }
      if (horizontalRotation != null) {
        this.arguments[$_set]("y_rotation", n + dart.notNull(dart.toString(horizontalRotation)));
      }
      if (verticalRotation != null) {
        this.arguments[$_set]("x_rotation", n + dart.notNull(dart.toString(verticalRotation)));
      }
      if (isRotated != null) {
        this.arguments[$_set]("y_rotation", n + dart.toString(isRotated.x));
        this.arguments[$_set]("x_rotation", n + dart.toString(isRotated.y));
      }
      if (area != null) {
        this.arguments[$addAll](area.getRanges());
      }
      if (nbt != null) {
        this.arguments[$_set]("nbt", n + dart.notNull(gson.gsonEncode(nbt)));
      }
      if (strNbt != null && strNbt[$isNotEmpty]) {
        this.arguments[$_set]("nbt", n + dart.notNull(strNbt));
      }
      if (team != null) {
        this.arguments[$_set]("team", n + dart.notNull(team.name));
      }
      if (predicate != null) {
        this.arguments[$_set]("predicate", n + dart.notNull(predicate));
      }
      if (tags != null) {
        t3 = this.arguments;
        t4 = "tag";
        t3[$_get](t4) == null ? t3[$_set](t4, []) : null;
        tags[$forEach](dart.fn(tag => {
          if (TagL().is(tag)) {
            dart.dsend(this.arguments[$_get]("tag"), 'add', [n + dart.notNull(tag.tag)]);
          } else if (StringL().is(tag)) {
            if (tag$.Tag.prefix != null && !tag[$contains](tag$.Tag.prefix)) {
              tag = dart.notNull(tag$.Tag.prefix) + dart.notNull(StringL().as(tag));
            }
            dart.dsend(this.arguments[$_get]("tag"), 'add', [n + dart.notNull(tag)]);
          } else {
            dart.throw("Please insert a Tag or String as tag into Entity!");
          }
        }, dynamicToNullN()));
      }
      if (scores != null) {
        let ret = JSArrayOfStringL().of([]);
        scores[$forEach](dart.fn(score => {
          if (score.getMatch()[$isEmpty]) {
            dart.throw("Please insert a match method in the scores value for an entity!");
          }
          ret[$add](dart.notNull(score.score) + "=" + dart.notNull(score.getMatch()));
        }, ScoreLToNullN()));
        this.arguments[$_set]("scores", n + "{" + dart.notNull(ret[$join](",")) + "}");
      }
    }
    sort(sort) {
      this.arguments[$_set]("sort", dart.toString(sort)[$split](".")[$last]);
      return this;
    }
    not(opts) {
      let limit = opts && 'limit' in opts ? opts.limit : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let team = opts && 'team' in opts ? opts.team : null;
      let scores = opts && 'scores' in opts ? opts.scores : null;
      let nbt = opts && 'nbt' in opts ? opts.nbt : null;
      let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let area = opts && 'area' in opts ? opts.area : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let level = opts && 'level' in opts ? opts.level : null;
      let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
      let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
      let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
      let predicate = opts && 'predicate' in opts ? opts.predicate : null;
      this[_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, true);
      return this;
    }
    storeResult(command, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let datatype = opts && 'datatype' in opts ? opts.datatype : "double";
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      if (!(path != null || path[$isNotEmpty])) dart.assertFailed(null, L24, 503, 12, "path != null || path.isNotEmpty");
      return new execute.Execute.new({children: JSArrayOfWidgetL().of([command]), encapsulate: false, args: JSArrayOfListLOfStringL().of([JSArrayOfStringL().of(["store " + (dart.test(useSuccess) ? "success" : "result") + " entity " + dart.notNull(this.toString()) + " " + dart.notNull(path) + (" " + dart.str(datatype) + " " + dart.str(scale))])])});
    }
    copyWith(opts) {
      let limit = opts && 'limit' in opts ? opts.limit : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let team = opts && 'team' in opts ? opts.team : null;
      let scores = opts && 'scores' in opts ? opts.scores : null;
      let nbt = opts && 'nbt' in opts ? opts.nbt : null;
      let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let area = opts && 'area' in opts ? opts.area : null;
      let distance = opts && 'distance' in opts ? opts.distance : null;
      let level = opts && 'level' in opts ? opts.level : null;
      let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
      let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
      let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
      let predicate = opts && 'predicate' in opts ? opts.predicate : null;
      let temp = new entity$.Entity.clone(this);
      temp[_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
      return temp;
    }
    kill() {
      return strait_widget.StraitWidget.builder.create(new kill.Kill.new(this));
    }
    raycast(opts) {
      let max = opts && 'max' in opts ? opts.max : null;
      let step = opts && 'step' in opts ? opts.step : 1;
      let through = opts && 'through' in opts ? opts.through : C24 || CT.C24;
      let ray = opts && 'ray' in opts ? opts.ray : null;
      let onhit = opts && 'onhit' in opts ? opts.onhit : null;
      let scoreName = opts && 'scoreName' in opts ? opts.scoreName : "objd_count";
      return strait_widget.StraitWidget.builder.create(new raycast.Raycast.new(this, {max: max, step: step, through: through, ray: ray, onhit: onhit, scoreName: scoreName}));
    }
    teleport(opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let entity = opts && 'entity' in opts ? opts.entity : null;
      let facing = opts && 'facing' in opts ? opts.facing : null;
      let rot = opts && 'rot' in opts ? opts.rot : null;
      if (entity != null && facing != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.entity(this, {to: entity, facing: facing}));
      }
      if (entity != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.entity(this, {to: entity}));
      }
      if (location != null && facing != null && rot != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.new(this, {to: location, facing: facing, rot: rot}));
      }
      if (location != null && facing != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.new(this, {to: location, facing: facing}));
      }
      if (location != null && rot != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.new(this, {to: location, rot: rot}));
      }
      if (location != null) {
        return strait_widget.StraitWidget.builder.create(new teleport.Teleport.new(this, {to: location}));
      }
      dart.throw(new core.Error.new());
    }
    give(item) {
      return strait_widget.StraitWidget.builder.create(new give.Give.new(this, {item: item}));
    }
    replaceitem(opts) {
      let item = opts && 'item' in opts ? opts.item : null;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      return strait_widget.StraitWidget.builder.create(new replaceitem.ReplaceItem.new(this, {item: item, slot: slot}));
    }
    particle(opts) {
      let particle = opts && 'particle' in opts ? opts.particle : null;
      let location = opts && 'location' in opts ? opts.location : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let speed = opts && 'speed' in opts ? opts.speed : 1;
      let count = opts && 'count' in opts ? opts.count : 1;
      let force = opts && 'force' in opts ? opts.force : false;
      return strait_widget.StraitWidget.builder.create(new particle$.Particle.new(particle, {location: location, delta: delta, speed: speed, count: count, force: force, player: this}));
    }
    crash() {
      return this.at({children: JSArrayOfWidgetL().of([this.particle({particle: particles.Particles.barrier, location: new location$.Location.here(), count: 1000000000, force: true})])});
    }
    clear(item = null) {
      return strait_widget.StraitWidget.builder.create(new clear.Clear.new(this, item));
    }
    tellraw(opts) {
      let show = opts && 'show' in opts ? opts.show : null;
      return strait_widget.StraitWidget.builder.create(new tellraw.Tellraw.new(this, {show: show}));
    }
    tp(opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let entity = opts && 'entity' in opts ? opts.entity : null;
      let facing = opts && 'facing' in opts ? opts.facing : null;
      let rot = opts && 'rot' in opts ? opts.rot : null;
      if (entity != null && facing != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.entity(this, {to: entity, facing: facing}));
      }
      if (entity != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.entity(this, {to: entity}));
      }
      if (location != null && facing != null && rot != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.new(this, {to: location, facing: facing, rot: rot}));
      }
      if (location != null && facing != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.new(this, {to: location, facing: facing}));
      }
      if (location != null && rot != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.new(this, {to: location, rot: rot}));
      }
      if (location != null) {
        return strait_widget.StraitWidget.builder.create(new tp.Tp.new(this, {to: location}));
      }
      dart.throw(new core.Error.new());
    }
    dataMerge(opts) {
      let nbt = opts && 'nbt' in opts ? opts.nbt : null;
      let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
      if (this.selector === "a" || this.selector === "r" || this.selector === "p" || dart.equals(this.arguments[$_get]("type"), "minecraft:player") || dart.equals(this.arguments[$_get]("type"), "player")) {
        dart.throw("Cannot modify a player's data");
      }
      if ((this.selector === "a" || this.selector === "e") && (this.arguments[$_get]("limit") == null || !dart.equals(this.arguments[$_get]("limit"), "1"))) {
        dart.throw("Cannot work with data of multiple entities in data command");
      }
      return strait_widget.StraitWidget.builder.create(new data$.Data.merge(this, {nbt: nbt, strNbt: strNbt}));
    }
    dataGet(opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      if ((this.selector === "a" || this.selector === "e") && (this.arguments[$_get]("limit") == null || !dart.equals(this.arguments[$_get]("limit"), "1"))) {
        dart.throw("Cannot work with data of multiple entities in data command");
      }
      return strait_widget.StraitWidget.builder.create(new data$.Data.get(this, {path: path, scale: scale}));
    }
    dataRemove(opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      if (this.selector === "a" || this.selector === "r" || this.selector === "p" || dart.equals(this.arguments[$_get]("type"), "minecraft:player") || dart.equals(this.arguments[$_get]("type"), "player")) {
        dart.throw("Cannot modify a player's data");
      }
      if ((this.selector === "a" || this.selector === "e") && (this.arguments[$_get]("limit") == null || !dart.equals(this.arguments[$_get]("limit"), "1"))) {
        dart.throw("Cannot work with data of multiple entities in data command");
      }
      return strait_widget.StraitWidget.builder.create(new data$.Data.remove(this, {path: path}));
    }
    dataModify(opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let modify = opts && 'modify' in opts ? opts.modify : null;
      if (this.selector === "a" || this.selector === "r" || this.selector === "p" || dart.equals(this.arguments[$_get]("type"), "minecraft:player") || dart.equals(this.arguments[$_get]("type"), "player")) {
        dart.throw("Cannot modify a player's data");
      }
      if ((this.selector === "a" || this.selector === "e") && (this.arguments[$_get]("limit") == null || !dart.equals(this.arguments[$_get]("limit"), "1"))) {
        dart.throw("Cannot work with data of multiple entities in data command");
      }
      return strait_widget.StraitWidget.builder.create(new data$.Data.modify(this, {path: path, modify: modify}));
    }
    execute(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return this.as({children: children, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate});
    }
    exec(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return this.as({children: children, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate});
    }
    executeStrait(opts) {
      let run = opts && 'run' in opts ? opts.run : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return this.asStrait({run: run, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate});
    }
    execStrait(opts) {
      let run = opts && 'run' in opts ? opts.run : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return this.asStrait({run: run, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate});
    }
    asat(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.new({children: children, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).asat(this));
    }
    asatStrait(opts) {
      let run = opts && 'run' in opts ? opts.run : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.strait({run: run, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).asat(this));
    }
    as(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.new({children: children, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).as(this));
    }
    asStrait(opts) {
      let run = opts && 'run' in opts ? opts.run : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.strait({run: run, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).as(this));
    }
    at(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.new({children: children, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).at(this));
    }
    atStrait(opts) {
      let run = opts && 'run' in opts ? opts.run : null;
      let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
      let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
      let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
      return strait_widget.StraitWidget.builder.create(new execute.Execute.strait({run: run, targetFilePath: targetFilePath, targetFileName: targetFileName, encapsulate: encapsulate}).at(this));
    }
    addTag(tag) {
      return strait_widget.StraitWidget.builder.create(new tag$.Tag.new(tag, {entity: this, value: true}));
    }
    addTags(tags) {
      return strait_widget.StraitWidget.builder.create(new for_list.For.of(tags[$map](TagL(), dart.fn(tag => new tag$.Tag.new(tag, {entity: this, value: true}), StringLToTagL()))[$toList]()));
    }
    removeTag(tag) {
      return strait_widget.StraitWidget.builder.create(new tag$.Tag.new(tag, {entity: this, value: false}));
    }
    removeTags(tags) {
      return strait_widget.StraitWidget.builder.create(new for_list.For.of(tags[$map](TagL(), dart.fn(tag => new tag$.Tag.new(tag, {entity: this, value: false}), StringLToTagL()))[$toList]()));
    }
    joinTeam(team) {
      return strait_widget.StraitWidget.builder.create(new team$.Team.join(team, this));
    }
    leaveTeam() {
      return strait_widget.StraitWidget.builder.create(new team$.Team.leave(this));
    }
    forEach(fn) {
      return this.asStrait({run: dart.fn(strait => fn(new entity$.Entity.Self(), strait), ListLOfWidgetLTodynamic())});
    }
    toString(args = null) {
      this.arguments == null ? this.arguments = args : null;
      if (this.playerName != null && this.playerName[$isNotEmpty]) return this.playerName;
      let ret = "@" + dart.notNull(this.selector);
      if (dart.test(this.arguments[$isNotEmpty])) {
        ret = ret + "[";
        this.arguments[$keys][$forEach](dart.fn(key => {
          if (ListL().is(this.arguments[$_get](key))) {
            dart.dsend(this.arguments[$_get](key), 'forEach', [dart.fn(item => {
                ret = ret + dart.notNull(this[_addArg](item, key));
                if (!dart.equals(item, dart.dload(this.arguments[$_get](key), 'last'))) ret = ret + ",";
              }, dynamicToNullN())]);
            if (!dart.equals(key, this.arguments[$keys][$last])) ret = ret + ",";
          } else {
            ret = ret + dart.notNull(this[_addArg](this.arguments[$_get](key), key));
            if (!dart.equals(key, this.arguments[$keys][$last])) ret = ret + ",";
          }
        }, dynamicToNullN()));
        ret = ret + "]";
      }
      return ret;
    }
    [_addArg](arg, key) {
      let ret = "";
      if (arg != null) {
        arg = dart.toString(arg)[$replaceAll]("[0-9].0", "");
        ret = ret + (dart.notNull(dart.toString(key)) + "=" + dart.notNull(dart.toString(arg)));
      }
      return ret;
    }
  };
  (entity$.Entity.Player = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = "p";
    this[_setArguments](null, tags, team, scores, nbt, strNbt, null, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.PlayerName = function(name) {
    entity$.Entity.new.call(this, {playerName: name});
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.All = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = "a";
    this[_setArguments](limit, tags, team, scores, nbt, strNbt, null, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.Random = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = "r";
    this[_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.Selected = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = "s";
    this[_setArguments](null, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.Self = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = "s";
    this[_setArguments](null, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.Select = function(selector) {
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = selector.selector;
    this[_setArguments](selector.limit, selector.tags, selector.team, selector.scores, selector.nbt, selector.strNbt, selector.type, selector.area, selector.distance, selector.level, selector.gamemode, selector.name, selector.isRotated, selector.horizontalRotation, selector.verticalRotation, null, false);
    if (selector.sorting != null) {
      this.sort(selector.sorting);
    }
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.clone = function(ent) {
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[playerName$] = null;
    this[selector$0] = null;
    this.selector = ent.selector;
    this.playerName = ent.playerName;
    this.arguments = collection.LinkedHashMap.from(ent.arguments);
  }).prototype = entity$.Entity.prototype;
  (entity$.Entity.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : "e";
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let predicate = opts && 'predicate' in opts ? opts.predicate : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[arguments$] = new _js_helper.LinkedMap.new();
    this[selector$0] = selector;
    this[playerName$] = playerName;
    this[_setArguments](limit, tags, team, scores, nbt, strNbt, type, area, distance, level, gamemode, name, isRotated, horizontalRotation, verticalRotation, predicate, false);
  }).prototype = entity$.Entity.prototype;
  dart.addTypeTests(entity$.Entity);
  dart.addTypeCaches(entity$.Entity);
  entity$.Entity[dart.implements] = () => [entity$.EntityClass];
  dart.setMethodSignature(entity$.Entity, () => ({
    __proto__: dart.getMethods(entity$.Entity.__proto__),
    setValues: dart.fnType(dart.void, [], {area: dart.legacy(area.Area), distance: dart.legacy(entity$.Range), gamemode: dart.legacy(entity$.Gamemode), horizontalRotation: dart.legacy(entity$.Range), isRotated: dart.legacy(rotation.Rotation), level: dart.legacy(entity$.Range), limit: dart.legacy(core.int), name: dart.legacy(core.String), nbt: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), predicate: dart.legacy(core.String), scores: dart.legacy(core.List$(dart.legacy(score$.Score))), strNbt: dart.legacy(core.String), tags: dart.legacy(core.List), team: dart.legacy(team$.Team), type: dart.legacy(entity$.EntityType), verticalRotation: dart.legacy(entity$.Range)}, {}),
    [_setArguments]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.List), dart.legacy(team$.Team), dart.legacy(core.List$(dart.legacy(score$.Score))), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), dart.legacy(core.String), dart.legacy(entity$.EntityType), dart.legacy(area.Area), dart.legacy(entity$.Range), dart.legacy(entity$.Range), dart.legacy(entity$.Gamemode), dart.legacy(core.String), dart.legacy(rotation.Rotation), dart.legacy(entity$.Range), dart.legacy(entity$.Range), dart.legacy(core.String), dart.legacy(core.bool)]),
    sort: dart.fnType(dart.legacy(entity$.Entity), [dart.legacy(entity$.Sort)]),
    not: dart.fnType(dart.legacy(entity$.Entity), [], {area: dart.legacy(area.Area), distance: dart.legacy(entity$.Range), gamemode: dart.legacy(entity$.Gamemode), horizontalRotation: dart.legacy(entity$.Range), isRotated: dart.legacy(rotation.Rotation), level: dart.legacy(entity$.Range), limit: dart.legacy(core.int), name: dart.legacy(core.String), nbt: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), predicate: dart.legacy(core.String), scores: dart.legacy(core.List$(dart.legacy(score$.Score))), strNbt: dart.legacy(core.String), tags: dart.legacy(core.List), team: dart.legacy(team$.Team), type: dart.legacy(entity$.EntityType), verticalRotation: dart.legacy(entity$.Range)}, {}),
    storeResult: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(command$.Command)], {datatype: dart.legacy(core.String), path: dart.legacy(core.String), scale: dart.legacy(core.double), useSuccess: dart.legacy(core.bool)}, {}),
    copyWith: dart.fnType(dart.legacy(entity$.Entity), [], {area: dart.legacy(area.Area), distance: dart.legacy(entity$.Range), gamemode: dart.legacy(entity$.Gamemode), horizontalRotation: dart.legacy(entity$.Range), isRotated: dart.legacy(rotation.Rotation), level: dart.legacy(entity$.Range), limit: dart.legacy(core.int), name: dart.legacy(core.String), nbt: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), predicate: dart.legacy(core.String), scores: dart.legacy(core.List$(dart.legacy(score$.Score))), strNbt: dart.legacy(core.String), tags: dart.legacy(core.List), team: dart.legacy(team$.Team), type: dart.legacy(entity$.EntityType), verticalRotation: dart.legacy(entity$.Range)}, {}),
    kill: dart.fnType(dart.legacy(rest_action.RestActionAble), []),
    raycast: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {max: dart.legacy(core.int), onhit: dart.legacy(core.List$(dart.legacy(widget.Widget))), ray: dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(core.Function), dart.legacy(core.Function)])), scoreName: dart.legacy(core.String), step: dart.legacy(core.double), through: dart.legacy(block.Block)}, {}),
    teleport: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {entity: dart.legacy(entity$.Entity), facing: dart.dynamic, location: dart.legacy(location$.Location), rot: dart.legacy(rotation.Rotation)}, {}),
    give: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(item.Item)]),
    replaceitem: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {item: dart.legacy(item.Item), slot: dart.legacy(slot$.Slot)}, {}),
    particle: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {count: dart.legacy(core.int), delta: dart.legacy(location$.Location), force: dart.legacy(core.bool), location: dart.legacy(location$.Location), particle: dart.legacy(particles.ParticleType), speed: dart.legacy(core.double)}, {}),
    crash: dart.fnType(dart.legacy(rest_action.RestActionAble), []),
    clear: dart.fnType(dart.legacy(rest_action.RestActionAble), [], [dart.legacy(item.Item)]),
    tellraw: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {show: dart.legacy(core.List$(dart.legacy(text_components.TextComponent)))}, {}),
    tp: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {entity: dart.legacy(entity$.Entity), facing: dart.dynamic, location: dart.legacy(location$.Location), rot: dart.legacy(rotation.Rotation)}, {}),
    dataMerge: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {nbt: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), strNbt: dart.legacy(core.String)}, {}),
    dataGet: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {path: dart.legacy(core.String), scale: dart.legacy(core.num)}, {}),
    dataRemove: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {path: dart.legacy(core.String)}, {}),
    dataModify: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {modify: dart.legacy(data$.DataModify), path: dart.legacy(core.String)}, {}),
    execute: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {children: dart.legacy(core.List$(dart.legacy(widget.Widget))), encapsulate: dart.legacy(core.bool), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    exec: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {children: dart.legacy(core.List$(dart.legacy(widget.Widget))), encapsulate: dart.legacy(core.bool), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    executeStrait: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {encapsulate: dart.legacy(core.bool), run: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))])), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    execStrait: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {encapsulate: dart.legacy(core.bool), run: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))])), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    asat: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {children: dart.legacy(core.List$(dart.legacy(widget.Widget))), encapsulate: dart.legacy(core.bool), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    asatStrait: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {encapsulate: dart.legacy(core.bool), run: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))])), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    as: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {children: dart.legacy(core.List$(dart.legacy(widget.Widget))), encapsulate: dart.legacy(core.bool), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    asStrait: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {encapsulate: dart.legacy(core.bool), run: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))])), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    at: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {children: dart.legacy(core.List$(dart.legacy(widget.Widget))), encapsulate: dart.legacy(core.bool), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    atStrait: dart.fnType(dart.legacy(rest_action.RestActionAble), [], {encapsulate: dart.legacy(core.bool), run: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.List$(dart.legacy(widget.Widget)))])), targetFileName: dart.legacy(core.String), targetFilePath: dart.legacy(core.String)}, {}),
    addTag: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.String)]),
    addTags: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.List$(dart.legacy(core.String)))]),
    removeTag: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.String)]),
    removeTags: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.List$(dart.legacy(core.String)))]),
    joinTeam: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(core.String)]),
    leaveTeam: dart.fnType(dart.legacy(rest_action.RestActionAble), []),
    forEach: dart.fnType(dart.legacy(rest_action.RestActionAble), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(entity$.Entity), dart.legacy(core.List$(dart.legacy(widget.Widget)))]))]),
    toString: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.Map)]),
    [$toString]: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.Map)]),
    [_addArg]: dart.fnType(dart.legacy(core.String), [dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(entity$.Entity, L23);
  dart.setFieldSignature(entity$.Entity, () => ({
    __proto__: dart.getFields(entity$.Entity.__proto__),
    selector: dart.fieldType(dart.legacy(core.String)),
    arguments: dart.fieldType(dart.legacy(core.Map)),
    playerName: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(entity$.Entity, ['toString']);
  var from$ = dart.privateName(entity$, "Range.from");
  var to$ = dart.privateName(entity$, "Range.to");
  var exact$ = dart.privateName(entity$, "Range.exact");
  entity$.Range = class Range extends core.Object {
    get from() {
      return this[from$];
    }
    set from(value) {
      this[from$] = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      this[to$] = value;
    }
    get exact() {
      return this[exact$];
    }
    set exact(value) {
      this[exact$] = value;
    }
    toString() {
      let ret = "0";
      if (this.exact != null) {
        ret = dart.toString(this.exact);
      } else if (this.from != null && this.to == null) {
        ret = dart.str(this.from) + "..";
      } else if (this.from == null && this.to != null) {
        ret = ".." + dart.str(this.to);
      } else if (this.from != null && this.to != null) ret = dart.str(this.from) + ".." + dart.str(this.to);
      return ret[$replaceAll]("[0-9].0", "");
    }
  };
  (entity$.Range.new = function(from, to) {
    this[exact$] = null;
    this[from$] = from;
    this[to$] = to;
    ;
  }).prototype = entity$.Range.prototype;
  (entity$.Range.to = function(to) {
    this[exact$] = null;
    this[from$] = null;
    this[to$] = to;
    ;
  }).prototype = entity$.Range.prototype;
  (entity$.Range.from = function(from) {
    this[exact$] = null;
    this[to$] = null;
    this[from$] = from;
    ;
  }).prototype = entity$.Range.prototype;
  (entity$.Range.exact = function(exact) {
    this[to$] = null;
    this[from$] = null;
    this[exact$] = exact;
    ;
  }).prototype = entity$.Range.prototype;
  dart.addTypeTests(entity$.Range);
  dart.addTypeCaches(entity$.Range);
  dart.setMethodSignature(entity$.Range, () => ({
    __proto__: dart.getMethods(entity$.Range.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(entity$.Range, L23);
  dart.setFieldSignature(entity$.Range, () => ({
    __proto__: dart.getFields(entity$.Range.__proto__),
    from: dart.fieldType(dart.legacy(core.num)),
    to: dart.fieldType(dart.legacy(core.num)),
    exact: dart.fieldType(dart.legacy(core.num))
  }));
  dart.defineExtensionMethods(entity$.Range, ['toString']);
  var _name$2 = dart.privateName(entity$, "_name");
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  entity$.Gamemode = class Gamemode extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (entity$.Gamemode.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = entity$.Gamemode.prototype;
  dart.addTypeTests(entity$.Gamemode);
  dart.addTypeCaches(entity$.Gamemode);
  dart.setMethodSignature(entity$.Gamemode, () => ({
    __proto__: dart.getMethods(entity$.Gamemode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(entity$.Gamemode, L23);
  dart.setFieldSignature(entity$.Gamemode, () => ({
    __proto__: dart.getFields(entity$.Gamemode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$2]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(entity$.Gamemode, ['toString']);
  entity$.Gamemode.creative = C25 || CT.C25;
  entity$.Gamemode.adventure = C26 || CT.C26;
  entity$.Gamemode.survival = C27 || CT.C27;
  entity$.Gamemode.spectator = C28 || CT.C28;
  entity$.Gamemode.values = C29 || CT.C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  entity$.Sort = class Sort extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (entity$.Sort.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = entity$.Sort.prototype;
  dart.addTypeTests(entity$.Sort);
  dart.addTypeCaches(entity$.Sort);
  dart.setMethodSignature(entity$.Sort, () => ({
    __proto__: dart.getMethods(entity$.Sort.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(entity$.Sort, L23);
  dart.setFieldSignature(entity$.Sort, () => ({
    __proto__: dart.getFields(entity$.Sort.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$2]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(entity$.Sort, ['toString']);
  entity$.Sort.random = C30 || CT.C30;
  entity$.Sort.furthest = C31 || CT.C31;
  entity$.Sort.nearest = C32 || CT.C32;
  entity$.Sort.arbitrary = C33 || CT.C33;
  entity$.Sort.values = C34 || CT.C34;
  var type$0 = dart.privateName(entity$, "EntityType.type");
  entity$.EntityType = class EntityType extends core.Object {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (EntityTypeL().is(other) && other.type == this.type) {
        return true;
      }
      if (StringL().is(other) && other == this.type) {
        return true;
      }
      return false;
    }
    toString() {
      return this.type;
    }
  };
  (entity$.EntityType.new = function(type) {
    this[type$0] = type;
    ;
  }).prototype = entity$.EntityType.prototype;
  dart.addTypeTests(entity$.EntityType);
  dart.addTypeCaches(entity$.EntityType);
  dart.setMethodSignature(entity$.EntityType, () => ({
    __proto__: dart.getMethods(entity$.EntityType.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(entity$.EntityType, L23);
  dart.setFieldSignature(entity$.EntityType, () => ({
    __proto__: dart.getFields(entity$.EntityType.__proto__),
    type: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(entity$.EntityType, ['_equals', 'toString']);
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C107;
  var C108;
  var C109;
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C123;
  var C124;
  var C125;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C133;
  var C134;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C35;
  entities.Entities = class Entities extends core.Object {};
  (entities.Entities.new = function() {
    ;
  }).prototype = entities.Entities.prototype;
  dart.addTypeTests(entities.Entities);
  dart.addTypeCaches(entities.Entities);
  dart.setLibraryUri(entities.Entities, L25);
  dart.defineLazy(entities.Entities, {
    /*entities.Entities.all*/get all() {
      return C35 || CT.C35;
    },
    /*entities.Entities.area_effect_cloud*/get area_effect_cloud() {
      return C36 || CT.C36;
    },
    /*entities.Entities.armor_stand*/get armor_stand() {
      return C37 || CT.C37;
    },
    /*entities.Entities.arrow*/get arrow() {
      return C38 || CT.C38;
    },
    /*entities.Entities.bat*/get bat() {
      return C39 || CT.C39;
    },
    /*entities.Entities.bee*/get bee() {
      return C40 || CT.C40;
    },
    /*entities.Entities.blaze*/get blaze() {
      return C41 || CT.C41;
    },
    /*entities.Entities.boat*/get boat() {
      return C42 || CT.C42;
    },
    /*entities.Entities.cat*/get cat() {
      return C43 || CT.C43;
    },
    /*entities.Entities.cave_spider*/get cave_spider() {
      return C44 || CT.C44;
    },
    /*entities.Entities.chest_minecart*/get chest_minecart() {
      return C45 || CT.C45;
    },
    /*entities.Entities.chicken*/get chicken() {
      return C46 || CT.C46;
    },
    /*entities.Entities.cod*/get cod() {
      return C47 || CT.C47;
    },
    /*entities.Entities.command_block_minecart*/get command_block_minecart() {
      return C48 || CT.C48;
    },
    /*entities.Entities.cow*/get cow() {
      return C49 || CT.C49;
    },
    /*entities.Entities.creeper*/get creeper() {
      return C50 || CT.C50;
    },
    /*entities.Entities.dolphin*/get dolphin() {
      return C51 || CT.C51;
    },
    /*entities.Entities.donkey*/get donkey() {
      return C52 || CT.C52;
    },
    /*entities.Entities.dragon_fireball*/get dragon_fireball() {
      return C53 || CT.C53;
    },
    /*entities.Entities.drowned*/get drowned() {
      return C54 || CT.C54;
    },
    /*entities.Entities.egg*/get egg() {
      return C55 || CT.C55;
    },
    /*entities.Entities.elder_guardian*/get elder_guardian() {
      return C56 || CT.C56;
    },
    /*entities.Entities.end_crystal*/get end_crystal() {
      return C57 || CT.C57;
    },
    /*entities.Entities.ender_dragon*/get ender_dragon() {
      return C58 || CT.C58;
    },
    /*entities.Entities.ender_pearl*/get ender_pearl() {
      return C59 || CT.C59;
    },
    /*entities.Entities.enderman*/get enderman() {
      return C60 || CT.C60;
    },
    /*entities.Entities.endermite*/get endermite() {
      return C61 || CT.C61;
    },
    /*entities.Entities.evoker*/get evoker() {
      return C62 || CT.C62;
    },
    /*entities.Entities.evoker_fangs*/get evoker_fangs() {
      return C63 || CT.C63;
    },
    /*entities.Entities.experience_bottle*/get experience_bottle() {
      return C64 || CT.C64;
    },
    /*entities.Entities.experience_orb*/get experience_orb() {
      return C65 || CT.C65;
    },
    /*entities.Entities.eye_of_ender*/get eye_of_ender() {
      return C66 || CT.C66;
    },
    /*entities.Entities.falling_block*/get falling_block() {
      return C67 || CT.C67;
    },
    /*entities.Entities.fireball*/get fireball() {
      return C68 || CT.C68;
    },
    /*entities.Entities.firework_rocket*/get firework_rocket() {
      return C69 || CT.C69;
    },
    /*entities.Entities.fishing_bobber*/get fishing_bobber() {
      return C70 || CT.C70;
    },
    /*entities.Entities.fox*/get fox() {
      return C71 || CT.C71;
    },
    /*entities.Entities.furnace_minecart*/get furnace_minecart() {
      return C72 || CT.C72;
    },
    /*entities.Entities.ghast*/get ghast() {
      return C73 || CT.C73;
    },
    /*entities.Entities.giant*/get giant() {
      return C74 || CT.C74;
    },
    /*entities.Entities.guardian*/get guardian() {
      return C75 || CT.C75;
    },
    /*entities.Entities.hoglin*/get hoglin() {
      return C76 || CT.C76;
    },
    /*entities.Entities.hopper_minecart*/get hopper_minecart() {
      return C77 || CT.C77;
    },
    /*entities.Entities.horse*/get horse() {
      return C78 || CT.C78;
    },
    /*entities.Entities.husk*/get husk() {
      return C79 || CT.C79;
    },
    /*entities.Entities.illusioner*/get illusioner() {
      return C80 || CT.C80;
    },
    /*entities.Entities.iron_golem*/get iron_golem() {
      return C81 || CT.C81;
    },
    /*entities.Entities.item*/get item() {
      return C82 || CT.C82;
    },
    /*entities.Entities.item_frame*/get item_frame() {
      return C83 || CT.C83;
    },
    /*entities.Entities.leash_knot*/get leash_knot() {
      return C84 || CT.C84;
    },
    /*entities.Entities.lightning_bolt*/get lightning_bolt() {
      return C85 || CT.C85;
    },
    /*entities.Entities.llama*/get llama() {
      return C86 || CT.C86;
    },
    /*entities.Entities.llama_spit*/get llama_spit() {
      return C87 || CT.C87;
    },
    /*entities.Entities.magma_cube*/get magma_cube() {
      return C88 || CT.C88;
    },
    /*entities.Entities.minecart*/get minecart() {
      return C89 || CT.C89;
    },
    /*entities.Entities.mooshroom*/get mooshroom() {
      return C90 || CT.C90;
    },
    /*entities.Entities.mule*/get mule() {
      return C91 || CT.C91;
    },
    /*entities.Entities.ocelot*/get ocelot() {
      return C92 || CT.C92;
    },
    /*entities.Entities.painting*/get painting() {
      return C93 || CT.C93;
    },
    /*entities.Entities.panda*/get panda() {
      return C94 || CT.C94;
    },
    /*entities.Entities.parrot*/get parrot() {
      return C95 || CT.C95;
    },
    /*entities.Entities.phantom*/get phantom() {
      return C96 || CT.C96;
    },
    /*entities.Entities.pig*/get pig() {
      return C97 || CT.C97;
    },
    /*entities.Entities.piglin*/get piglin() {
      return C98 || CT.C98;
    },
    /*entities.Entities.pillager*/get pillager() {
      return C99 || CT.C99;
    },
    /*entities.Entities.player*/get player() {
      return C100 || CT.C100;
    },
    /*entities.Entities.polar_bear*/get polar_bear() {
      return C101 || CT.C101;
    },
    /*entities.Entities.potion*/get potion() {
      return C102 || CT.C102;
    },
    /*entities.Entities.pufferfish*/get pufferfish() {
      return C103 || CT.C103;
    },
    /*entities.Entities.rabbit*/get rabbit() {
      return C104 || CT.C104;
    },
    /*entities.Entities.ravager*/get ravager() {
      return C105 || CT.C105;
    },
    /*entities.Entities.salmon*/get salmon() {
      return C106 || CT.C106;
    },
    /*entities.Entities.sheep*/get sheep() {
      return C107 || CT.C107;
    },
    /*entities.Entities.shulker*/get shulker() {
      return C108 || CT.C108;
    },
    /*entities.Entities.shulker_bullet*/get shulker_bullet() {
      return C109 || CT.C109;
    },
    /*entities.Entities.silverfish*/get silverfish() {
      return C110 || CT.C110;
    },
    /*entities.Entities.skeleton*/get skeleton() {
      return C111 || CT.C111;
    },
    /*entities.Entities.skeleton_horse*/get skeleton_horse() {
      return C112 || CT.C112;
    },
    /*entities.Entities.slime*/get slime() {
      return C113 || CT.C113;
    },
    /*entities.Entities.small_fireball*/get small_fireball() {
      return C114 || CT.C114;
    },
    /*entities.Entities.snow_golem*/get snow_golem() {
      return C115 || CT.C115;
    },
    /*entities.Entities.snowball*/get snowball() {
      return C116 || CT.C116;
    },
    /*entities.Entities.spawner_minecart*/get spawner_minecart() {
      return C117 || CT.C117;
    },
    /*entities.Entities.spectral_arrow*/get spectral_arrow() {
      return C118 || CT.C118;
    },
    /*entities.Entities.spider*/get spider() {
      return C119 || CT.C119;
    },
    /*entities.Entities.squid*/get squid() {
      return C120 || CT.C120;
    },
    /*entities.Entities.stray*/get stray() {
      return C121 || CT.C121;
    },
    /*entities.Entities.strider*/get strider() {
      return C122 || CT.C122;
    },
    /*entities.Entities.tnt*/get tnt() {
      return C123 || CT.C123;
    },
    /*entities.Entities.tnt_minecart*/get tnt_minecart() {
      return C124 || CT.C124;
    },
    /*entities.Entities.trader_llama*/get trader_llama() {
      return C125 || CT.C125;
    },
    /*entities.Entities.trident*/get trident() {
      return C126 || CT.C126;
    },
    /*entities.Entities.tropical_fish*/get tropical_fish() {
      return C127 || CT.C127;
    },
    /*entities.Entities.turtle*/get turtle() {
      return C128 || CT.C128;
    },
    /*entities.Entities.vex*/get vex() {
      return C129 || CT.C129;
    },
    /*entities.Entities.villager*/get villager() {
      return C130 || CT.C130;
    },
    /*entities.Entities.vindicator*/get vindicator() {
      return C131 || CT.C131;
    },
    /*entities.Entities.wandering_trader*/get wandering_trader() {
      return C132 || CT.C132;
    },
    /*entities.Entities.witch*/get witch() {
      return C133 || CT.C133;
    },
    /*entities.Entities.wither*/get wither() {
      return C134 || CT.C134;
    },
    /*entities.Entities.wither_skeleton*/get wither_skeleton() {
      return C135 || CT.C135;
    },
    /*entities.Entities.wither_skull*/get wither_skull() {
      return C136 || CT.C136;
    },
    /*entities.Entities.wolf*/get wolf() {
      return C137 || CT.C137;
    },
    /*entities.Entities.zoglin*/get zoglin() {
      return C138 || CT.C138;
    },
    /*entities.Entities.zombie*/get zombie() {
      return C139 || CT.C139;
    },
    /*entities.Entities.zombie_horse*/get zombie_horse() {
      return C140 || CT.C140;
    },
    /*entities.Entities.zombie_villager*/get zombie_villager() {
      return C141 || CT.C141;
    },
    /*entities.Entities.zombified_piglin*/get zombified_piglin() {
      return C142 || CT.C142;
    }
  }, true);
  var _checkTags = dart.privateName(item, "_checkTags");
  var type$1 = dart.privateName(item, "Item.type");
  var count$ = dart.privateName(item, "Item.count");
  var damage$ = dart.privateName(item, "Item.damage");
  var slot$0 = dart.privateName(item, "Item.slot");
  var tag$0 = dart.privateName(item, "Item.tag");
  item.Item = class Item extends core.Object {
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    get damage() {
      return this[damage$];
    }
    set damage(value) {
      super.damage = value;
    }
    get slot() {
      return this[slot$0];
    }
    set slot(value) {
      super.slot = value;
    }
    get tag() {
      return this[tag$0];
    }
    set tag(value) {
      super.tag = value;
    }
    static clone(it) {
      return new item.Item.new(it.type, {count: it.count, slot: it.slot.clone(), nbt: it.tag != null ? LinkedHashMapOfStringL$dynamic().from(it.tag) : null});
    }
    static fromJson(json) {
      let type = null;
      let slot = null;
      let damage = null;
      let tag = null;
      if (json[$_get]("item") != null) type = dart.toString(json[$_get]("item"));
      if (json[$_get]("id") != null) type = dart.toString(json[$_get]("id"));
      if (json[$_get]("Slot") != null) {
        slot = new slot$.Slot.new({id: core.int.parse(dart.toString(json[$_get]("Slot")))});
      }
      if (json[$_get]("Count") != null && dart.notNull(core.int.parse(dart.toString(json[$_get]("Count")))) > 0) {
        core.int.parse(dart.toString(json[$_get]("Count")));
      }
      if (json[$_get]("Damage") != null && dart.notNull(core.int.parse(dart.toString(json[$_get]("Damage")))) > 0) {
        damage = core.int.parse(dart.toString(json[$_get]("Damage")));
      }
      if (json[$_get]("tag") != null) tag = MapLOfStringL$dynamic().as(json[$_get]("tag"));
      return new item.Item.new(type, {slot: slot, damage: damage, nbt: tag, model: null});
    }
    [_checkTags](model, type = null, hideFlags = null, name = null, lore = null, nbt = null, t = null) {
      let t5, t5$;
      t == null ? t = this.tag : null;
      if (nbt != null && dart.test(nbt[$isNotEmpty])) t[$addAll](nbt);
      if (this.damage != null) t[$_set]("Damage", this.damage);
      if (model != null) t[$_set]("CustomModelData", model);
      if (hideFlags != null) t[$_set]("HideFlags", hideFlags);
      if (name != null) {
        let n = name.toJson();
        t[$_set]("display", (t5 = t[$_get]("display"), t5 == null ? new _js_helper.LinkedMap.new() : t5));
        if (n != null) {
          dart.dsend(t[$_get]("display"), '_set', ["Name", n]);
        } else {
          dart.dsend(t[$_get]("display"), 'remove', ["Name"]);
        }
      }
      if (lore != null) {
        t[$_set]("display", (t5$ = t[$_get]("display"), t5$ == null ? new _js_helper.LinkedMap.new() : t5$));
        dart.dsend(t[$_get]("display"), '_set', ["Lore", lore[$map](StringL(), dart.fn(lor => lor.toJson(), TextComponentLToStringL()))[$toList]()]);
      }
    }
    getGiveNotation(opts) {
      let withDamage = opts && 'withDamage' in opts ? opts.withDamage : true;
      let result = this.type;
      if (this.tag != null && dart.test(this.tag[$isNotEmpty])) {
        result = dart.notNull(result) + dart.notNull(gson.gson.encode(this.tag));
      }
      result = dart.notNull(result) + " ";
      if (this.count != null) result = dart.notNull(result) + dart.toString(this.count);
      if (this.damage != null && dart.test(withDamage)) result = dart.notNull(result) + (" " + dart.toString(this.damage));
      return result;
    }
    getId() {
      return this.type[$replaceFirst]("minecraft:", "");
    }
    getMap() {
      let map = new (IdentityMapOfStringL$dynamic()).from(["id", "minecraft:" + dart.notNull(this.getId())]);
      if (dart.test(this.tag[$isNotEmpty])) map[$_set]("tag", this.tag);
      if (this.count != null) map[$_set]("Count", new values.Byte.new(this.count));
      if (this.slot != null) {
        if (this.slot.id == null) dart.throw("An Item needs the Slot id!");
        if (dart.notNull(this.slot.id) < 0) {
          core.print("Please note that you are using Item with a negative slot. This is reserved for a selected item and can't be accessed within the Inventory property!");
        }
        map[$_set]("Slot", new values.Byte.new(this.slot.id));
      }
      return map;
    }
    getNbt() {
      return gson.gson.encode(this.getMap());
    }
    copyWith(opts) {
      let t5, t5$, t5$0, t5$1;
      let type = opts && 'type' in opts ? opts.type : null;
      let count = opts && 'count' in opts ? opts.count : null;
      let damage = opts && 'damage' in opts ? opts.damage : null;
      let slot = opts && 'slot' in opts ? opts.slot : null;
      let model = opts && 'model' in opts ? opts.model : null;
      let hideFlags = opts && 'hideFlags' in opts ? opts.hideFlags : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let lore = opts && 'lore' in opts ? opts.lore : null;
      let nbt = opts && 'nbt' in opts ? opts.nbt : null;
      let t = this.tag != null ? item._copyDeepMap(this.tag) : new (IdentityMapOfStringL$dynamic()).new();
      this[_checkTags](model, type, hideFlags, name, lore, nbt, t);
      return new item.Item.new((t5 = type, t5 == null ? this.type : t5), {count: (t5$ = count, t5$ == null ? this.count : t5$), damage: (t5$0 = damage, t5$0 == null ? this.damage : t5$0), slot: (t5$1 = slot, t5$1 == null ? this.slot : t5$1), nbt: t});
    }
    toString() {
      return this.type;
    }
    _equals(o) {
      if (o == null) return false;
      if (this === o) return true;
      return ItemL().is(o) && o.type == this.type && o.count == this.count && o.damage == this.damage && dart.equals(o.slot, this.slot) && dart.equals(o.tag, this.tag);
    }
    get hashCode() {
      return (dart.hashCode(this.type) ^ dart.hashCode(this.count) ^ dart.hashCode(this.damage) ^ dart.notNull(dart.hashCode(this.slot)) ^ dart.notNull(dart.hashCode(this.tag))) >>> 0;
    }
  };
  (item.Item.new = function(type, opts) {
    let count = opts && 'count' in opts ? opts.count : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let damage = opts && 'damage' in opts ? opts.damage : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let hideFlags = opts && 'hideFlags' in opts ? opts.hideFlags : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let lore = opts && 'lore' in opts ? opts.lore : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    this[count$] = count;
    this[slot$0] = slot;
    this[damage$] = damage;
    if (!(StringL().is(type) || ItemL().is(type) || BlockL().is(type))) dart.assertFailed("Please provide either a String, Item or Block", L26, 69, 11, "type is String || type is Item || type is Block");
    this[tag$0] = new (IdentityMapOfStringL$dynamic()).new();
    this[type$1] = dart.toString(type);
    this[_checkTags](model, type, hideFlags, name, lore, nbt);
  }).prototype = item.Item.prototype;
  (item.Item.type = function(type, opts) {
    let count = opts && 'count' in opts ? opts.count : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let damage = opts && 'damage' in opts ? opts.damage : null;
    let tag = opts && 'tag' in opts ? opts.tag : null;
    this[type$1] = type;
    this[count$] = count;
    this[slot$0] = slot;
    this[damage$] = damage;
    this[tag$0] = tag;
    ;
  }).prototype = item.Item.prototype;
  (item.Item.SpawnEgg = function(type, entity, opts) {
    let count = opts && 'count' in opts ? opts.count : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let damage = opts && 'damage' in opts ? opts.damage : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let hideFlags = opts && 'hideFlags' in opts ? opts.hideFlags : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let lore = opts && 'lore' in opts ? opts.lore : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    this[count$] = count;
    this[slot$0] = slot;
    this[damage$] = damage;
    if (!(StringL().is(type) || ItemL().is(type) || BlockL().is(type))) dart.assertFailed("Please provide either a String, Item or Block", L26, 97, 11, "type is String || type is Item || type is Block");
    this[tag$0] = new (IdentityMapOfStringL$dynamic()).new();
    this[type$1] = dart.toString(type);
    if (!(entity != null)) dart.assertFailed("Please provide an entity to spawn!", L26, 102, 12, "entity != null");
    nbt == null ? nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    nbt[$addAll](new (IdentityMapOfStringL$dynamic()).from(["EntityTag", (() => {
        let t3 = new (IdentityMapOfStringL$dynamic()).new();
        t3[$_set]("id", entity.type.type);
        for (let t4 of entity.nbt[$entries])
          t3[$_set](t4.key, t4.value);
        return t3;
      })()]));
    this[_checkTags](model, type, hideFlags, name, lore, nbt);
  }).prototype = item.Item.prototype;
  (item.Item.Book = function(pages, opts) {
    let title = opts && 'title' in opts ? opts.title : "";
    let author = opts && 'author' in opts ? opts.author : "";
    let count = opts && 'count' in opts ? opts.count : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    let damage = opts && 'damage' in opts ? opts.damage : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let hideFlags = opts && 'hideFlags' in opts ? opts.hideFlags : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let lore = opts && 'lore' in opts ? opts.lore : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    this[count$] = count;
    this[slot$0] = slot;
    this[damage$] = damage;
    this[type$1] = dart.toString(items.Items.written_book);
    this[tag$0] = new (IdentityMapOfStringL$dynamic()).new();
    nbt == null ? nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    nbt[$_set]("title", title);
    nbt[$_set]("author", author);
    nbt[$_set]("pages", pages[$map](StringL(), dart.fn(page => convert.json.encode(page.list[$map](MapL(), dart.fn(item => item.toMap(), TextComponentLToMapL()))[$toList]()), BookPageLToStringL()))[$toList]());
    this[_checkTags](model, this.type, hideFlags, name, lore, nbt);
  }).prototype = item.Item.prototype;
  dart.addTypeTests(item.Item);
  dart.addTypeCaches(item.Item);
  dart.setMethodSignature(item.Item, () => ({
    __proto__: dart.getMethods(item.Item.__proto__),
    [_checkTags]: dart.fnType(dart.void, [dart.legacy(core.int)], [dart.dynamic, dart.legacy(core.int), dart.legacy(text_components.TextComponent), dart.legacy(core.List$(dart.legacy(text_components.TextComponent))), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    getGiveNotation: dart.fnType(dart.legacy(core.String), [], {withDamage: dart.legacy(core.bool)}, {}),
    getId: dart.fnType(dart.legacy(core.String), []),
    getMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    getNbt: dart.fnType(dart.legacy(core.String), []),
    copyWith: dart.fnType(dart.legacy(item.Item), [], {count: dart.legacy(core.int), damage: dart.legacy(core.int), hideFlags: dart.legacy(core.int), lore: dart.legacy(core.List$(dart.legacy(text_components.TextComponent))), model: dart.legacy(core.int), name: dart.legacy(text_components.TextComponent), nbt: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), slot: dart.legacy(slot$.Slot), type: dart.legacy(core.String)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(item.Item, () => ({
    __proto__: dart.getGetters(item.Item.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(item.Item, L27);
  dart.setFieldSignature(item.Item, () => ({
    __proto__: dart.getFields(item.Item.__proto__),
    type: dart.finalFieldType(dart.legacy(core.String)),
    count: dart.finalFieldType(dart.legacy(core.int)),
    damage: dart.finalFieldType(dart.legacy(core.int)),
    slot: dart.finalFieldType(dart.legacy(slot$.Slot)),
    tag: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineExtensionMethods(item.Item, ['toString', '_equals']);
  dart.defineExtensionAccessors(item.Item, ['hashCode']);
  var list = dart.privateName(item, "BookPage.list");
  item.BookPage = class BookPage extends core.Object {
    get list() {
      return this[list];
    }
    set list(value) {
      this[list] = value;
    }
  };
  (item.BookPage.new = function(content) {
    this[list] = null;
    if (TextComponentL().is(content)) this.list = JSArrayOfTextComponentL().of([content]);
    if (StringL().is(content)) this.list = JSArrayOfTextComponentL().of([new text_components.TextComponent.new(content)]);
    if (ListLOfTextComponentL().is(content)) this.list = content;
  }).prototype = item.BookPage.prototype;
  (item.BookPage.customFont = function(char) {
    this[list] = null;
    this.list = JSArrayOfTextComponentL().of([new text_components.TextComponent.customFont(char)]);
  }).prototype = item.BookPage.prototype;
  dart.addTypeTests(item.BookPage);
  dart.addTypeCaches(item.BookPage);
  dart.setLibraryUri(item.BookPage, L27);
  dart.setFieldSignature(item.BookPage, () => ({
    __proto__: dart.getFields(item.BookPage.__proto__),
    list: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_components.TextComponent))))
  }));
  item.HideFlags = function HideFlags(opts) {
    let enchantments = opts && 'enchantments' in opts ? opts.enchantments : null;
    let attributes = opts && 'attributes' in opts ? opts.attributes : null;
    let unbreakable = opts && 'unbreakable' in opts ? opts.unbreakable : null;
    let canDestroy = opts && 'canDestroy' in opts ? opts.canDestroy : null;
    let canPlaceOn = opts && 'canPlaceOn' in opts ? opts.canPlaceOn : null;
    let others = opts && 'others' in opts ? opts.others : null;
    let res = 0;
    if (dart.test(enchantments)) res = res + 1;
    if (dart.test(attributes)) res = res + 2;
    if (dart.test(unbreakable)) res = res + 4;
    if (dart.test(canDestroy)) res = res + 8;
    if (dart.test(canPlaceOn)) res = res + 16;
    if (dart.test(others)) res = res + 32;
    return res;
  };
  item._copyDeepMap = function _copyDeepMap(map) {
    let newMap = new (IdentityMapOfStringL$dynamic()).new();
    map[$forEach](dart.fn((key, value) => {
      core.print(value);
      newMap[$_set](key, MapL().is(value) ? item._copyDeepMap(value[$cast](StringL(), dart.dynamic)) : value);
    }, StringLAnddynamicToNullN()));
    return newMap;
  };
  var C144;
  var C145;
  var C146;
  var C147;
  var C148;
  var C149;
  var C150;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C156;
  var C157;
  var C158;
  var C159;
  var C160;
  var C161;
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C167;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C175;
  var C176;
  var C177;
  var C178;
  var C179;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C185;
  var C186;
  var C187;
  var C188;
  var C189;
  var C190;
  var C191;
  var C192;
  var C193;
  var C194;
  var C195;
  var C196;
  var C197;
  var C198;
  var C199;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C205;
  var C206;
  var C207;
  var C208;
  var C209;
  var C210;
  var C211;
  var C212;
  var C213;
  var C214;
  var C215;
  var C216;
  var C217;
  var C218;
  var C219;
  var C220;
  var C221;
  var C222;
  var C223;
  var C224;
  var C225;
  var C226;
  var C227;
  var C228;
  var C229;
  var C230;
  var C231;
  var C232;
  var C233;
  var C234;
  var C235;
  var C236;
  var C237;
  var C238;
  var C239;
  var C240;
  var C241;
  var C242;
  var C243;
  var C244;
  var C245;
  var C246;
  var C247;
  var C248;
  var C249;
  var C250;
  var C251;
  var C252;
  var C253;
  var C254;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C260;
  var C261;
  var C262;
  var C263;
  var C264;
  var C265;
  var C266;
  var C267;
  var C268;
  var C269;
  var C270;
  var C271;
  var C272;
  var C273;
  var C274;
  var C275;
  var C276;
  var C277;
  var C278;
  var C279;
  var C280;
  var C281;
  var C282;
  var C283;
  var C284;
  var C285;
  var C286;
  var C287;
  var C288;
  var C289;
  var C290;
  var C291;
  var C292;
  var C293;
  var C294;
  var C295;
  var C296;
  var C297;
  var C298;
  var C299;
  var C300;
  var C301;
  var C302;
  var C303;
  var C304;
  var C305;
  var C306;
  var C307;
  var C308;
  var C309;
  var C310;
  var C311;
  var C312;
  var C313;
  var C314;
  var C315;
  var C316;
  var C317;
  var C318;
  var C319;
  var C320;
  var C321;
  var C322;
  var C323;
  var C324;
  var C325;
  var C326;
  var C327;
  var C328;
  var C329;
  var C330;
  var C331;
  var C332;
  var C333;
  var C334;
  var C335;
  var C336;
  var C337;
  var C338;
  var C339;
  var C340;
  var C341;
  var C342;
  var C343;
  var C344;
  var C345;
  var C346;
  var C347;
  var C348;
  var C349;
  var C350;
  var C351;
  var C352;
  var C353;
  var C354;
  var C355;
  var C356;
  var C357;
  var C358;
  var C359;
  var C360;
  var C361;
  var C362;
  var C363;
  var C364;
  var C365;
  var C366;
  var C367;
  var C368;
  var C369;
  var C370;
  var C371;
  var C372;
  var C373;
  var C374;
  var C375;
  var C376;
  var C377;
  var C378;
  var C379;
  var C380;
  var C381;
  var C382;
  var C383;
  var C384;
  var C385;
  var C386;
  var C387;
  var C388;
  var C389;
  var C390;
  var C391;
  var C392;
  var C393;
  var C394;
  var C395;
  var C396;
  var C397;
  var C398;
  var C399;
  var C400;
  var C401;
  var C402;
  var C403;
  var C404;
  var C405;
  var C406;
  var C407;
  var C408;
  var C409;
  var C410;
  var C411;
  var C412;
  var C413;
  var C414;
  var C415;
  var C416;
  var C417;
  var C418;
  var C419;
  var C420;
  var C421;
  var C422;
  var C423;
  var C424;
  var C425;
  var C426;
  var C427;
  var C428;
  var C429;
  var C430;
  var C431;
  var C432;
  var C433;
  var C434;
  var C435;
  var C436;
  var C437;
  var C438;
  var C439;
  var C440;
  var C441;
  var C442;
  var C443;
  var C444;
  var C445;
  var C446;
  var C447;
  var C448;
  var C449;
  var C450;
  var C451;
  var C452;
  var C453;
  var C454;
  var C455;
  var C456;
  var C457;
  var C458;
  var C459;
  var C460;
  var C461;
  var C462;
  var C463;
  var C464;
  var C465;
  var C466;
  var C467;
  var C468;
  var C469;
  var C470;
  var C471;
  var C472;
  var C473;
  var C474;
  var C475;
  var C476;
  var C477;
  var C478;
  var C479;
  var C480;
  var C481;
  var C482;
  var C483;
  var C484;
  var C485;
  var C486;
  var C487;
  var C488;
  var C489;
  var C490;
  var C491;
  var C492;
  var C493;
  var C494;
  var C495;
  var C496;
  var C497;
  var C498;
  var C499;
  var C500;
  var C501;
  var C502;
  var C503;
  var C504;
  var C505;
  var C506;
  var C507;
  var C508;
  var C509;
  var C510;
  var C511;
  var C512;
  var C513;
  var C514;
  var C515;
  var C516;
  var C517;
  var C518;
  var C519;
  var C520;
  var C521;
  var C522;
  var C523;
  var C524;
  var C525;
  var C526;
  var C527;
  var C528;
  var C529;
  var C530;
  var C531;
  var C532;
  var C533;
  var C534;
  var C535;
  var C536;
  var C537;
  var C538;
  var C539;
  var C540;
  var C541;
  var C542;
  var C543;
  var C544;
  var C545;
  var C546;
  var C547;
  var C548;
  var C549;
  var C550;
  var C551;
  var C552;
  var C553;
  var C554;
  var C555;
  var C556;
  var C557;
  var C558;
  var C559;
  var C560;
  var C561;
  var C562;
  var C563;
  var C564;
  var C565;
  var C566;
  var C567;
  var C568;
  var C569;
  var C570;
  var C571;
  var C572;
  var C573;
  var C574;
  var C575;
  var C576;
  var C577;
  var C578;
  var C579;
  var C580;
  var C581;
  var C582;
  var C583;
  var C584;
  var C585;
  var C586;
  var C587;
  var C588;
  var C589;
  var C590;
  var C591;
  var C592;
  var C593;
  var C594;
  var C595;
  var C596;
  var C597;
  var C598;
  var C599;
  var C600;
  var C601;
  var C602;
  var C603;
  var C604;
  var C605;
  var C606;
  var C607;
  var C608;
  var C609;
  var C610;
  var C611;
  var C612;
  var C613;
  var C614;
  var C615;
  var C616;
  var C617;
  var C618;
  var C619;
  var C620;
  var C621;
  var C622;
  var C623;
  var C624;
  var C625;
  var C626;
  var C627;
  var C628;
  var C629;
  var C630;
  var C631;
  var C632;
  var C633;
  var C634;
  var C635;
  var C636;
  var C637;
  var C638;
  var C639;
  var C640;
  var C641;
  var C642;
  var C643;
  var C644;
  var C645;
  var C646;
  var C647;
  var C648;
  var C649;
  var C650;
  var C651;
  var C652;
  var C653;
  var C654;
  var C655;
  var C656;
  var C657;
  var C658;
  var C659;
  var C660;
  var C661;
  var C662;
  var C663;
  var C664;
  var C665;
  var C666;
  var C667;
  var C668;
  var C669;
  var C670;
  var C671;
  var C672;
  var C673;
  var C674;
  var C675;
  var C676;
  var C677;
  var C678;
  var C679;
  var C680;
  var C681;
  var C682;
  var C683;
  var C684;
  var C685;
  var C686;
  var C687;
  var C688;
  var C689;
  var C690;
  var C691;
  var C692;
  var C693;
  var C694;
  var C695;
  var C696;
  var C697;
  var C698;
  var C699;
  var C700;
  var C701;
  var C702;
  var C703;
  var C704;
  var C705;
  var C706;
  var C707;
  var C708;
  var C709;
  var C710;
  var C711;
  var C712;
  var C713;
  var C714;
  var C715;
  var C716;
  var C717;
  var C718;
  var C719;
  var C720;
  var C721;
  var C722;
  var C723;
  var C724;
  var C725;
  var C726;
  var C727;
  var C728;
  var C729;
  var C730;
  var C731;
  var C732;
  var C733;
  var C734;
  var C735;
  var C736;
  var C737;
  var C738;
  var C739;
  var C740;
  var C741;
  var C742;
  var C743;
  var C744;
  var C745;
  var C746;
  var C747;
  var C748;
  var C749;
  var C750;
  var C751;
  var C752;
  var C753;
  var C754;
  var C755;
  var C756;
  var C757;
  var C758;
  var C759;
  var C760;
  var C761;
  var C762;
  var C763;
  var C764;
  var C765;
  var C766;
  var C767;
  var C768;
  var C769;
  var C770;
  var C771;
  var C772;
  var C773;
  var C774;
  var C775;
  var C776;
  var C777;
  var C778;
  var C779;
  var C780;
  var C781;
  var C782;
  var C783;
  var C784;
  var C785;
  var C786;
  var C787;
  var C788;
  var C789;
  var C790;
  var C791;
  var C792;
  var C793;
  var C794;
  var C795;
  var C796;
  var C797;
  var C798;
  var C799;
  var C800;
  var C801;
  var C802;
  var C803;
  var C804;
  var C805;
  var C806;
  var C807;
  var C808;
  var C809;
  var C810;
  var C811;
  var C812;
  var C813;
  var C814;
  var C815;
  var C816;
  var C817;
  var C818;
  var C819;
  var C820;
  var C821;
  var C822;
  var C823;
  var C824;
  var C825;
  var C826;
  var C827;
  var C828;
  var C829;
  var C830;
  var C831;
  var C832;
  var C833;
  var C834;
  var C835;
  var C836;
  var C837;
  var C838;
  var C839;
  var C840;
  var C841;
  var C842;
  var C843;
  var C844;
  var C845;
  var C846;
  var C847;
  var C848;
  var C849;
  var C850;
  var C851;
  var C852;
  var C853;
  var C854;
  var C855;
  var C856;
  var C857;
  var C858;
  var C859;
  var C860;
  var C861;
  var C862;
  var C863;
  var C864;
  var C865;
  var C866;
  var C867;
  var C868;
  var C869;
  var C870;
  var C871;
  var C872;
  var C873;
  var C874;
  var C875;
  var C876;
  var C877;
  var C878;
  var C879;
  var C880;
  var C881;
  var C882;
  var C883;
  var C884;
  var C885;
  var C886;
  var C887;
  var C888;
  var C889;
  var C890;
  var C891;
  var C892;
  var C893;
  var C894;
  var C895;
  var C896;
  var C897;
  var C898;
  var C899;
  var C900;
  var C901;
  var C902;
  var C903;
  var C904;
  var C905;
  var C906;
  var C907;
  var C908;
  var C909;
  var C910;
  var C911;
  var C912;
  var C913;
  var C914;
  var C915;
  var C916;
  var C917;
  var C918;
  var C919;
  var C920;
  var C921;
  var C922;
  var C923;
  var C924;
  var C925;
  var C926;
  var C927;
  var C928;
  var C929;
  var C930;
  var C931;
  var C932;
  var C933;
  var C934;
  var C935;
  var C936;
  var C937;
  var C938;
  var C939;
  var C940;
  var C941;
  var C942;
  var C943;
  var C944;
  var C945;
  var C946;
  var C947;
  var C948;
  var C949;
  var C950;
  var C951;
  var C952;
  var C953;
  var C954;
  var C955;
  var C956;
  var C957;
  var C958;
  var C959;
  var C960;
  var C961;
  var C962;
  var C963;
  var C964;
  var C965;
  var C966;
  var C967;
  var C968;
  var C969;
  var C970;
  var C971;
  var C972;
  var C973;
  var C974;
  var C975;
  var C976;
  var C977;
  var C978;
  var C979;
  var C980;
  var C981;
  var C982;
  var C983;
  var C984;
  var C985;
  var C986;
  var C987;
  var C988;
  var C989;
  var C990;
  var C991;
  var C992;
  var C993;
  var C994;
  var C995;
  var C996;
  var C997;
  var C998;
  var C999;
  var C1000;
  var C1001;
  var C1002;
  var C1003;
  var C1004;
  var C1005;
  var C1006;
  var C1007;
  var C1008;
  var C1009;
  var C1010;
  var C1011;
  var C1012;
  var C1013;
  var C1014;
  var C1015;
  var C1016;
  var C1017;
  var C1018;
  var C1019;
  var C1020;
  var C1021;
  var C1022;
  var C1023;
  var C1024;
  var C1025;
  var C1026;
  var C1027;
  var C143;
  var C1029;
  var C1030;
  var C1031;
  var C1032;
  var C1033;
  var C1034;
  var C1035;
  var C1036;
  var C1037;
  var C1038;
  var C1039;
  var C1040;
  var C1041;
  var C1042;
  var C1043;
  var C1044;
  var C1045;
  var C1046;
  var C1047;
  var C1048;
  var C1049;
  var C1050;
  var C1051;
  var C1052;
  var C1053;
  var C1054;
  var C1055;
  var C1056;
  var C1057;
  var C1058;
  var C1059;
  var C1060;
  var C1061;
  var C1062;
  var C1063;
  var C1064;
  var C1065;
  var C1066;
  var C1067;
  var C1068;
  var C1069;
  var C1070;
  var C1071;
  var C1072;
  var C1073;
  var C1074;
  var C1075;
  var C1076;
  var C1077;
  var C1078;
  var C1079;
  var C1080;
  var C1081;
  var C1082;
  var C1083;
  var C1084;
  var C1085;
  var C1086;
  var C1087;
  var C1088;
  var C1089;
  var C1090;
  var C1091;
  var C1092;
  var C1093;
  var C1094;
  var C1095;
  var C1096;
  var C1097;
  var C1098;
  var C1099;
  var C1100;
  var C1101;
  var C1102;
  var C1103;
  var C1104;
  var C1105;
  var C1106;
  var C1107;
  var C1108;
  var C1109;
  var C1110;
  var C1111;
  var C1112;
  var C1113;
  var C1114;
  var C1115;
  var C1116;
  var C1117;
  var C1118;
  var C1119;
  var C1120;
  var C1028;
  items.Items = class Items extends core.Object {};
  (items.Items.new = function() {
    ;
  }).prototype = items.Items.prototype;
  dart.addTypeTests(items.Items);
  dart.addTypeCaches(items.Items);
  dart.setLibraryUri(items.Items, L28);
  dart.defineLazy(items.Items, {
    /*items.Items.all*/get all() {
      return C143 || CT.C143;
    },
    /*items.Items.snapshot*/get snapshot() {
      return C1028 || CT.C1028;
    },
    /*items.Items.acacia_boat*/get acacia_boat() {
      return C144 || CT.C144;
    },
    /*items.Items.acacia_button*/get acacia_button() {
      return C145 || CT.C145;
    },
    /*items.Items.acacia_door*/get acacia_door() {
      return C146 || CT.C146;
    },
    /*items.Items.acacia_fence*/get acacia_fence() {
      return C147 || CT.C147;
    },
    /*items.Items.acacia_fence_gate*/get acacia_fence_gate() {
      return C148 || CT.C148;
    },
    /*items.Items.acacia_leaves*/get acacia_leaves() {
      return C149 || CT.C149;
    },
    /*items.Items.acacia_log*/get acacia_log() {
      return C150 || CT.C150;
    },
    /*items.Items.acacia_planks*/get acacia_planks() {
      return C151 || CT.C151;
    },
    /*items.Items.acacia_pressure_plate*/get acacia_pressure_plate() {
      return C152 || CT.C152;
    },
    /*items.Items.acacia_sapling*/get acacia_sapling() {
      return C153 || CT.C153;
    },
    /*items.Items.acacia_sign*/get acacia_sign() {
      return C154 || CT.C154;
    },
    /*items.Items.acacia_slab*/get acacia_slab() {
      return C155 || CT.C155;
    },
    /*items.Items.acacia_stairs*/get acacia_stairs() {
      return C156 || CT.C156;
    },
    /*items.Items.acacia_trapdoor*/get acacia_trapdoor() {
      return C157 || CT.C157;
    },
    /*items.Items.acacia_wood*/get acacia_wood() {
      return C158 || CT.C158;
    },
    /*items.Items.activator_rail*/get activator_rail() {
      return C159 || CT.C159;
    },
    /*items.Items.air*/get air() {
      return C160 || CT.C160;
    },
    /*items.Items.allium*/get allium() {
      return C161 || CT.C161;
    },
    /*items.Items.andesite*/get andesite() {
      return C162 || CT.C162;
    },
    /*items.Items.andesite_slab*/get andesite_slab() {
      return C163 || CT.C163;
    },
    /*items.Items.andesite_stairs*/get andesite_stairs() {
      return C164 || CT.C164;
    },
    /*items.Items.andesite_wall*/get andesite_wall() {
      return C165 || CT.C165;
    },
    /*items.Items.anvil*/get anvil() {
      return C166 || CT.C166;
    },
    /*items.Items.apple*/get apple() {
      return C167 || CT.C167;
    },
    /*items.Items.armor_stand*/get armor_stand() {
      return C168 || CT.C168;
    },
    /*items.Items.arrow*/get arrow() {
      return C169 || CT.C169;
    },
    /*items.Items.azure_bluet*/get azure_bluet() {
      return C170 || CT.C170;
    },
    /*items.Items.baked_potato*/get baked_potato() {
      return C171 || CT.C171;
    },
    /*items.Items.bamboo*/get bamboo() {
      return C172 || CT.C172;
    },
    /*items.Items.barrel*/get barrel() {
      return C173 || CT.C173;
    },
    /*items.Items.barrier*/get barrier() {
      return C174 || CT.C174;
    },
    /*items.Items.bat_spawn_egg*/get bat_spawn_egg() {
      return C175 || CT.C175;
    },
    /*items.Items.beacon*/get beacon() {
      return C176 || CT.C176;
    },
    /*items.Items.bedrock*/get bedrock() {
      return C177 || CT.C177;
    },
    /*items.Items.bee_nest*/get bee_nest() {
      return C178 || CT.C178;
    },
    /*items.Items.bee_spawn_egg*/get bee_spawn_egg() {
      return C179 || CT.C179;
    },
    /*items.Items.beef*/get beef() {
      return C180 || CT.C180;
    },
    /*items.Items.beehive*/get beehive() {
      return C181 || CT.C181;
    },
    /*items.Items.beetroot*/get beetroot() {
      return C182 || CT.C182;
    },
    /*items.Items.beetroot_seeds*/get beetroot_seeds() {
      return C183 || CT.C183;
    },
    /*items.Items.beetroot_soup*/get beetroot_soup() {
      return C184 || CT.C184;
    },
    /*items.Items.bell*/get bell() {
      return C185 || CT.C185;
    },
    /*items.Items.birch_boat*/get birch_boat() {
      return C186 || CT.C186;
    },
    /*items.Items.birch_button*/get birch_button() {
      return C187 || CT.C187;
    },
    /*items.Items.birch_door*/get birch_door() {
      return C188 || CT.C188;
    },
    /*items.Items.birch_fence*/get birch_fence() {
      return C189 || CT.C189;
    },
    /*items.Items.birch_fence_gate*/get birch_fence_gate() {
      return C190 || CT.C190;
    },
    /*items.Items.birch_leaves*/get birch_leaves() {
      return C191 || CT.C191;
    },
    /*items.Items.birch_log*/get birch_log() {
      return C192 || CT.C192;
    },
    /*items.Items.birch_planks*/get birch_planks() {
      return C193 || CT.C193;
    },
    /*items.Items.birch_pressure_plate*/get birch_pressure_plate() {
      return C194 || CT.C194;
    },
    /*items.Items.birch_sapling*/get birch_sapling() {
      return C195 || CT.C195;
    },
    /*items.Items.birch_sign*/get birch_sign() {
      return C196 || CT.C196;
    },
    /*items.Items.birch_slab*/get birch_slab() {
      return C197 || CT.C197;
    },
    /*items.Items.birch_stairs*/get birch_stairs() {
      return C198 || CT.C198;
    },
    /*items.Items.birch_trapdoor*/get birch_trapdoor() {
      return C199 || CT.C199;
    },
    /*items.Items.birch_wood*/get birch_wood() {
      return C200 || CT.C200;
    },
    /*items.Items.black_banner*/get black_banner() {
      return C201 || CT.C201;
    },
    /*items.Items.black_bed*/get black_bed() {
      return C202 || CT.C202;
    },
    /*items.Items.black_carpet*/get black_carpet() {
      return C203 || CT.C203;
    },
    /*items.Items.black_concrete*/get black_concrete() {
      return C204 || CT.C204;
    },
    /*items.Items.black_concrete_powder*/get black_concrete_powder() {
      return C205 || CT.C205;
    },
    /*items.Items.black_dye*/get black_dye() {
      return C206 || CT.C206;
    },
    /*items.Items.black_glazed_terracotta*/get black_glazed_terracotta() {
      return C207 || CT.C207;
    },
    /*items.Items.black_shulker_box*/get black_shulker_box() {
      return C208 || CT.C208;
    },
    /*items.Items.black_stained_glass*/get black_stained_glass() {
      return C209 || CT.C209;
    },
    /*items.Items.black_stained_glass_pane*/get black_stained_glass_pane() {
      return C210 || CT.C210;
    },
    /*items.Items.black_terracotta*/get black_terracotta() {
      return C211 || CT.C211;
    },
    /*items.Items.black_wool*/get black_wool() {
      return C212 || CT.C212;
    },
    /*items.Items.blast_furnace*/get blast_furnace() {
      return C213 || CT.C213;
    },
    /*items.Items.blaze_powder*/get blaze_powder() {
      return C214 || CT.C214;
    },
    /*items.Items.blaze_rod*/get blaze_rod() {
      return C215 || CT.C215;
    },
    /*items.Items.blaze_spawn_egg*/get blaze_spawn_egg() {
      return C216 || CT.C216;
    },
    /*items.Items.blue_banner*/get blue_banner() {
      return C217 || CT.C217;
    },
    /*items.Items.blue_bed*/get blue_bed() {
      return C218 || CT.C218;
    },
    /*items.Items.blue_carpet*/get blue_carpet() {
      return C219 || CT.C219;
    },
    /*items.Items.blue_concrete*/get blue_concrete() {
      return C220 || CT.C220;
    },
    /*items.Items.blue_concrete_powder*/get blue_concrete_powder() {
      return C221 || CT.C221;
    },
    /*items.Items.blue_dye*/get blue_dye() {
      return C222 || CT.C222;
    },
    /*items.Items.blue_glazed_terracotta*/get blue_glazed_terracotta() {
      return C223 || CT.C223;
    },
    /*items.Items.blue_ice*/get blue_ice() {
      return C224 || CT.C224;
    },
    /*items.Items.blue_orchid*/get blue_orchid() {
      return C225 || CT.C225;
    },
    /*items.Items.blue_shulker_box*/get blue_shulker_box() {
      return C226 || CT.C226;
    },
    /*items.Items.blue_stained_glass*/get blue_stained_glass() {
      return C227 || CT.C227;
    },
    /*items.Items.blue_stained_glass_pane*/get blue_stained_glass_pane() {
      return C228 || CT.C228;
    },
    /*items.Items.blue_terracotta*/get blue_terracotta() {
      return C229 || CT.C229;
    },
    /*items.Items.blue_wool*/get blue_wool() {
      return C230 || CT.C230;
    },
    /*items.Items.bone*/get bone() {
      return C231 || CT.C231;
    },
    /*items.Items.bone_block*/get bone_block() {
      return C232 || CT.C232;
    },
    /*items.Items.bone_meal*/get bone_meal() {
      return C233 || CT.C233;
    },
    /*items.Items.book*/get book() {
      return C234 || CT.C234;
    },
    /*items.Items.bookshelf*/get bookshelf() {
      return C235 || CT.C235;
    },
    /*items.Items.bow*/get bow() {
      return C236 || CT.C236;
    },
    /*items.Items.bowl*/get bowl() {
      return C237 || CT.C237;
    },
    /*items.Items.brain_coral*/get brain_coral() {
      return C238 || CT.C238;
    },
    /*items.Items.brain_coral_block*/get brain_coral_block() {
      return C239 || CT.C239;
    },
    /*items.Items.brain_coral_fan*/get brain_coral_fan() {
      return C240 || CT.C240;
    },
    /*items.Items.bread*/get bread() {
      return C241 || CT.C241;
    },
    /*items.Items.brewing_stand*/get brewing_stand() {
      return C242 || CT.C242;
    },
    /*items.Items.brick*/get brick() {
      return C243 || CT.C243;
    },
    /*items.Items.brick_slab*/get brick_slab() {
      return C244 || CT.C244;
    },
    /*items.Items.brick_stairs*/get brick_stairs() {
      return C245 || CT.C245;
    },
    /*items.Items.brick_wall*/get brick_wall() {
      return C246 || CT.C246;
    },
    /*items.Items.bricks*/get bricks() {
      return C247 || CT.C247;
    },
    /*items.Items.brown_banner*/get brown_banner() {
      return C248 || CT.C248;
    },
    /*items.Items.brown_bed*/get brown_bed() {
      return C249 || CT.C249;
    },
    /*items.Items.brown_carpet*/get brown_carpet() {
      return C250 || CT.C250;
    },
    /*items.Items.brown_concrete*/get brown_concrete() {
      return C251 || CT.C251;
    },
    /*items.Items.brown_concrete_powder*/get brown_concrete_powder() {
      return C252 || CT.C252;
    },
    /*items.Items.brown_dye*/get brown_dye() {
      return C253 || CT.C253;
    },
    /*items.Items.brown_glazed_terracotta*/get brown_glazed_terracotta() {
      return C254 || CT.C254;
    },
    /*items.Items.brown_mushroom*/get brown_mushroom() {
      return C255 || CT.C255;
    },
    /*items.Items.brown_mushroom_block*/get brown_mushroom_block() {
      return C256 || CT.C256;
    },
    /*items.Items.brown_shulker_box*/get brown_shulker_box() {
      return C257 || CT.C257;
    },
    /*items.Items.brown_stained_glass*/get brown_stained_glass() {
      return C258 || CT.C258;
    },
    /*items.Items.brown_stained_glass_pane*/get brown_stained_glass_pane() {
      return C259 || CT.C259;
    },
    /*items.Items.brown_terracotta*/get brown_terracotta() {
      return C260 || CT.C260;
    },
    /*items.Items.brown_wool*/get brown_wool() {
      return C261 || CT.C261;
    },
    /*items.Items.bubble_coral*/get bubble_coral() {
      return C262 || CT.C262;
    },
    /*items.Items.bubble_coral_block*/get bubble_coral_block() {
      return C263 || CT.C263;
    },
    /*items.Items.bubble_coral_fan*/get bubble_coral_fan() {
      return C264 || CT.C264;
    },
    /*items.Items.bucket*/get bucket() {
      return C265 || CT.C265;
    },
    /*items.Items.cactus*/get cactus() {
      return C266 || CT.C266;
    },
    /*items.Items.cake*/get cake() {
      return C267 || CT.C267;
    },
    /*items.Items.campfire*/get campfire() {
      return C268 || CT.C268;
    },
    /*items.Items.carrot*/get carrot() {
      return C269 || CT.C269;
    },
    /*items.Items.carrot_on_a_stick*/get carrot_on_a_stick() {
      return C270 || CT.C270;
    },
    /*items.Items.cartography_table*/get cartography_table() {
      return C271 || CT.C271;
    },
    /*items.Items.carved_pumpkin*/get carved_pumpkin() {
      return C272 || CT.C272;
    },
    /*items.Items.cat_spawn_egg*/get cat_spawn_egg() {
      return C273 || CT.C273;
    },
    /*items.Items.cauldron*/get cauldron() {
      return C274 || CT.C274;
    },
    /*items.Items.cave_spider_spawn_egg*/get cave_spider_spawn_egg() {
      return C275 || CT.C275;
    },
    /*items.Items.chain_command_block*/get chain_command_block() {
      return C276 || CT.C276;
    },
    /*items.Items.chainmail_boots*/get chainmail_boots() {
      return C277 || CT.C277;
    },
    /*items.Items.chainmail_chestplate*/get chainmail_chestplate() {
      return C278 || CT.C278;
    },
    /*items.Items.chainmail_helmet*/get chainmail_helmet() {
      return C279 || CT.C279;
    },
    /*items.Items.chainmail_leggings*/get chainmail_leggings() {
      return C280 || CT.C280;
    },
    /*items.Items.charcoal*/get charcoal() {
      return C281 || CT.C281;
    },
    /*items.Items.chest*/get chest() {
      return C282 || CT.C282;
    },
    /*items.Items.chest_minecart*/get chest_minecart() {
      return C283 || CT.C283;
    },
    /*items.Items.chicken*/get chicken() {
      return C284 || CT.C284;
    },
    /*items.Items.chicken_spawn_egg*/get chicken_spawn_egg() {
      return C285 || CT.C285;
    },
    /*items.Items.chipped_anvil*/get chipped_anvil() {
      return C286 || CT.C286;
    },
    /*items.Items.chiseled_quartz_block*/get chiseled_quartz_block() {
      return C287 || CT.C287;
    },
    /*items.Items.chiseled_red_sandstone*/get chiseled_red_sandstone() {
      return C288 || CT.C288;
    },
    /*items.Items.chiseled_sandstone*/get chiseled_sandstone() {
      return C289 || CT.C289;
    },
    /*items.Items.chiseled_stone_bricks*/get chiseled_stone_bricks() {
      return C290 || CT.C290;
    },
    /*items.Items.chorus_flower*/get chorus_flower() {
      return C291 || CT.C291;
    },
    /*items.Items.chorus_fruit*/get chorus_fruit() {
      return C292 || CT.C292;
    },
    /*items.Items.chorus_plant*/get chorus_plant() {
      return C293 || CT.C293;
    },
    /*items.Items.clay*/get clay() {
      return C294 || CT.C294;
    },
    /*items.Items.clay_ball*/get clay_ball() {
      return C295 || CT.C295;
    },
    /*items.Items.clock*/get clock() {
      return C296 || CT.C296;
    },
    /*items.Items.coal*/get coal() {
      return C297 || CT.C297;
    },
    /*items.Items.coal_block*/get coal_block() {
      return C298 || CT.C298;
    },
    /*items.Items.coal_ore*/get coal_ore() {
      return C299 || CT.C299;
    },
    /*items.Items.coarse_dirt*/get coarse_dirt() {
      return C300 || CT.C300;
    },
    /*items.Items.cobblestone*/get cobblestone() {
      return C301 || CT.C301;
    },
    /*items.Items.cobblestone_slab*/get cobblestone_slab() {
      return C302 || CT.C302;
    },
    /*items.Items.cobblestone_stairs*/get cobblestone_stairs() {
      return C303 || CT.C303;
    },
    /*items.Items.cobblestone_wall*/get cobblestone_wall() {
      return C304 || CT.C304;
    },
    /*items.Items.cobweb*/get cobweb() {
      return C305 || CT.C305;
    },
    /*items.Items.cocoa_beans*/get cocoa_beans() {
      return C306 || CT.C306;
    },
    /*items.Items.cod*/get cod() {
      return C307 || CT.C307;
    },
    /*items.Items.cod_bucket*/get cod_bucket() {
      return C308 || CT.C308;
    },
    /*items.Items.cod_spawn_egg*/get cod_spawn_egg() {
      return C309 || CT.C309;
    },
    /*items.Items.command_block*/get command_block() {
      return C310 || CT.C310;
    },
    /*items.Items.command_block_minecart*/get command_block_minecart() {
      return C311 || CT.C311;
    },
    /*items.Items.comparator*/get comparator() {
      return C312 || CT.C312;
    },
    /*items.Items.compass*/get compass() {
      return C313 || CT.C313;
    },
    /*items.Items.composter*/get composter() {
      return C314 || CT.C314;
    },
    /*items.Items.conduit*/get conduit() {
      return C315 || CT.C315;
    },
    /*items.Items.cooked_beef*/get cooked_beef() {
      return C316 || CT.C316;
    },
    /*items.Items.cooked_chicken*/get cooked_chicken() {
      return C317 || CT.C317;
    },
    /*items.Items.cooked_cod*/get cooked_cod() {
      return C318 || CT.C318;
    },
    /*items.Items.cooked_mutton*/get cooked_mutton() {
      return C319 || CT.C319;
    },
    /*items.Items.cooked_porkchop*/get cooked_porkchop() {
      return C320 || CT.C320;
    },
    /*items.Items.cooked_rabbit*/get cooked_rabbit() {
      return C321 || CT.C321;
    },
    /*items.Items.cooked_salmon*/get cooked_salmon() {
      return C322 || CT.C322;
    },
    /*items.Items.cookie*/get cookie() {
      return C323 || CT.C323;
    },
    /*items.Items.cornflower*/get cornflower() {
      return C324 || CT.C324;
    },
    /*items.Items.cow_spawn_egg*/get cow_spawn_egg() {
      return C325 || CT.C325;
    },
    /*items.Items.cracked_stone_bricks*/get cracked_stone_bricks() {
      return C326 || CT.C326;
    },
    /*items.Items.crafting_table*/get crafting_table() {
      return C327 || CT.C327;
    },
    /*items.Items.creeper_banner_pattern*/get creeper_banner_pattern() {
      return C328 || CT.C328;
    },
    /*items.Items.creeper_head*/get creeper_head() {
      return C329 || CT.C329;
    },
    /*items.Items.creeper_spawn_egg*/get creeper_spawn_egg() {
      return C330 || CT.C330;
    },
    /*items.Items.crossbow*/get crossbow() {
      return C331 || CT.C331;
    },
    /*items.Items.cut_red_sandstone*/get cut_red_sandstone() {
      return C332 || CT.C332;
    },
    /*items.Items.cut_red_sandstone_slab*/get cut_red_sandstone_slab() {
      return C333 || CT.C333;
    },
    /*items.Items.cut_sandstone*/get cut_sandstone() {
      return C334 || CT.C334;
    },
    /*items.Items.cut_sandstone_slab*/get cut_sandstone_slab() {
      return C335 || CT.C335;
    },
    /*items.Items.cyan_banner*/get cyan_banner() {
      return C336 || CT.C336;
    },
    /*items.Items.cyan_bed*/get cyan_bed() {
      return C337 || CT.C337;
    },
    /*items.Items.cyan_carpet*/get cyan_carpet() {
      return C338 || CT.C338;
    },
    /*items.Items.cyan_concrete*/get cyan_concrete() {
      return C339 || CT.C339;
    },
    /*items.Items.cyan_concrete_powder*/get cyan_concrete_powder() {
      return C340 || CT.C340;
    },
    /*items.Items.cyan_dye*/get cyan_dye() {
      return C341 || CT.C341;
    },
    /*items.Items.cyan_glazed_terracotta*/get cyan_glazed_terracotta() {
      return C342 || CT.C342;
    },
    /*items.Items.cyan_shulker_box*/get cyan_shulker_box() {
      return C343 || CT.C343;
    },
    /*items.Items.cyan_stained_glass*/get cyan_stained_glass() {
      return C344 || CT.C344;
    },
    /*items.Items.cyan_stained_glass_pane*/get cyan_stained_glass_pane() {
      return C345 || CT.C345;
    },
    /*items.Items.cyan_terracotta*/get cyan_terracotta() {
      return C346 || CT.C346;
    },
    /*items.Items.cyan_wool*/get cyan_wool() {
      return C347 || CT.C347;
    },
    /*items.Items.damaged_anvil*/get damaged_anvil() {
      return C348 || CT.C348;
    },
    /*items.Items.dandelion*/get dandelion() {
      return C349 || CT.C349;
    },
    /*items.Items.dark_oak_boat*/get dark_oak_boat() {
      return C350 || CT.C350;
    },
    /*items.Items.dark_oak_button*/get dark_oak_button() {
      return C351 || CT.C351;
    },
    /*items.Items.dark_oak_door*/get dark_oak_door() {
      return C352 || CT.C352;
    },
    /*items.Items.dark_oak_fence*/get dark_oak_fence() {
      return C353 || CT.C353;
    },
    /*items.Items.dark_oak_fence_gate*/get dark_oak_fence_gate() {
      return C354 || CT.C354;
    },
    /*items.Items.dark_oak_leaves*/get dark_oak_leaves() {
      return C355 || CT.C355;
    },
    /*items.Items.dark_oak_log*/get dark_oak_log() {
      return C356 || CT.C356;
    },
    /*items.Items.dark_oak_planks*/get dark_oak_planks() {
      return C357 || CT.C357;
    },
    /*items.Items.dark_oak_pressure_plate*/get dark_oak_pressure_plate() {
      return C358 || CT.C358;
    },
    /*items.Items.dark_oak_sapling*/get dark_oak_sapling() {
      return C359 || CT.C359;
    },
    /*items.Items.dark_oak_sign*/get dark_oak_sign() {
      return C360 || CT.C360;
    },
    /*items.Items.dark_oak_slab*/get dark_oak_slab() {
      return C361 || CT.C361;
    },
    /*items.Items.dark_oak_stairs*/get dark_oak_stairs() {
      return C362 || CT.C362;
    },
    /*items.Items.dark_oak_trapdoor*/get dark_oak_trapdoor() {
      return C363 || CT.C363;
    },
    /*items.Items.dark_oak_wood*/get dark_oak_wood() {
      return C364 || CT.C364;
    },
    /*items.Items.dark_prismarine*/get dark_prismarine() {
      return C365 || CT.C365;
    },
    /*items.Items.dark_prismarine_slab*/get dark_prismarine_slab() {
      return C366 || CT.C366;
    },
    /*items.Items.dark_prismarine_stairs*/get dark_prismarine_stairs() {
      return C367 || CT.C367;
    },
    /*items.Items.daylight_detector*/get daylight_detector() {
      return C368 || CT.C368;
    },
    /*items.Items.dead_brain_coral*/get dead_brain_coral() {
      return C369 || CT.C369;
    },
    /*items.Items.dead_brain_coral_block*/get dead_brain_coral_block() {
      return C370 || CT.C370;
    },
    /*items.Items.dead_brain_coral_fan*/get dead_brain_coral_fan() {
      return C371 || CT.C371;
    },
    /*items.Items.dead_bubble_coral*/get dead_bubble_coral() {
      return C372 || CT.C372;
    },
    /*items.Items.dead_bubble_coral_block*/get dead_bubble_coral_block() {
      return C373 || CT.C373;
    },
    /*items.Items.dead_bubble_coral_fan*/get dead_bubble_coral_fan() {
      return C374 || CT.C374;
    },
    /*items.Items.dead_bush*/get dead_bush() {
      return C375 || CT.C375;
    },
    /*items.Items.dead_fire_coral*/get dead_fire_coral() {
      return C376 || CT.C376;
    },
    /*items.Items.dead_fire_coral_block*/get dead_fire_coral_block() {
      return C377 || CT.C377;
    },
    /*items.Items.dead_fire_coral_fan*/get dead_fire_coral_fan() {
      return C378 || CT.C378;
    },
    /*items.Items.dead_horn_coral*/get dead_horn_coral() {
      return C379 || CT.C379;
    },
    /*items.Items.dead_horn_coral_block*/get dead_horn_coral_block() {
      return C380 || CT.C380;
    },
    /*items.Items.dead_horn_coral_fan*/get dead_horn_coral_fan() {
      return C381 || CT.C381;
    },
    /*items.Items.dead_tube_coral*/get dead_tube_coral() {
      return C382 || CT.C382;
    },
    /*items.Items.dead_tube_coral_block*/get dead_tube_coral_block() {
      return C383 || CT.C383;
    },
    /*items.Items.dead_tube_coral_fan*/get dead_tube_coral_fan() {
      return C384 || CT.C384;
    },
    /*items.Items.debug_stick*/get debug_stick() {
      return C385 || CT.C385;
    },
    /*items.Items.detector_rail*/get detector_rail() {
      return C386 || CT.C386;
    },
    /*items.Items.diamond*/get diamond() {
      return C387 || CT.C387;
    },
    /*items.Items.diamond_axe*/get diamond_axe() {
      return C388 || CT.C388;
    },
    /*items.Items.diamond_block*/get diamond_block() {
      return C389 || CT.C389;
    },
    /*items.Items.diamond_boots*/get diamond_boots() {
      return C390 || CT.C390;
    },
    /*items.Items.diamond_chestplate*/get diamond_chestplate() {
      return C391 || CT.C391;
    },
    /*items.Items.diamond_helmet*/get diamond_helmet() {
      return C392 || CT.C392;
    },
    /*items.Items.diamond_hoe*/get diamond_hoe() {
      return C393 || CT.C393;
    },
    /*items.Items.diamond_horse_armor*/get diamond_horse_armor() {
      return C394 || CT.C394;
    },
    /*items.Items.diamond_leggings*/get diamond_leggings() {
      return C395 || CT.C395;
    },
    /*items.Items.diamond_ore*/get diamond_ore() {
      return C396 || CT.C396;
    },
    /*items.Items.diamond_pickaxe*/get diamond_pickaxe() {
      return C397 || CT.C397;
    },
    /*items.Items.diamond_shovel*/get diamond_shovel() {
      return C398 || CT.C398;
    },
    /*items.Items.diamond_sword*/get diamond_sword() {
      return C399 || CT.C399;
    },
    /*items.Items.diorite*/get diorite() {
      return C400 || CT.C400;
    },
    /*items.Items.diorite_slab*/get diorite_slab() {
      return C401 || CT.C401;
    },
    /*items.Items.diorite_stairs*/get diorite_stairs() {
      return C402 || CT.C402;
    },
    /*items.Items.diorite_wall*/get diorite_wall() {
      return C403 || CT.C403;
    },
    /*items.Items.dirt*/get dirt() {
      return C404 || CT.C404;
    },
    /*items.Items.dispenser*/get dispenser() {
      return C405 || CT.C405;
    },
    /*items.Items.dolphin_spawn_egg*/get dolphin_spawn_egg() {
      return C406 || CT.C406;
    },
    /*items.Items.donkey_spawn_egg*/get donkey_spawn_egg() {
      return C407 || CT.C407;
    },
    /*items.Items.dragon_breath*/get dragon_breath() {
      return C408 || CT.C408;
    },
    /*items.Items.dragon_egg*/get dragon_egg() {
      return C409 || CT.C409;
    },
    /*items.Items.dragon_head*/get dragon_head() {
      return C410 || CT.C410;
    },
    /*items.Items.dried_kelp*/get dried_kelp() {
      return C411 || CT.C411;
    },
    /*items.Items.dried_kelp_block*/get dried_kelp_block() {
      return C412 || CT.C412;
    },
    /*items.Items.dropper*/get dropper() {
      return C413 || CT.C413;
    },
    /*items.Items.drowned_spawn_egg*/get drowned_spawn_egg() {
      return C414 || CT.C414;
    },
    /*items.Items.egg*/get egg() {
      return C415 || CT.C415;
    },
    /*items.Items.elder_guardian_spawn_egg*/get elder_guardian_spawn_egg() {
      return C416 || CT.C416;
    },
    /*items.Items.elytra*/get elytra() {
      return C417 || CT.C417;
    },
    /*items.Items.emerald*/get emerald() {
      return C418 || CT.C418;
    },
    /*items.Items.emerald_block*/get emerald_block() {
      return C419 || CT.C419;
    },
    /*items.Items.emerald_ore*/get emerald_ore() {
      return C420 || CT.C420;
    },
    /*items.Items.enchanted_book*/get enchanted_book() {
      return C421 || CT.C421;
    },
    /*items.Items.enchanted_golden_apple*/get enchanted_golden_apple() {
      return C422 || CT.C422;
    },
    /*items.Items.enchanting_table*/get enchanting_table() {
      return C423 || CT.C423;
    },
    /*items.Items.end_crystal*/get end_crystal() {
      return C424 || CT.C424;
    },
    /*items.Items.end_portal_frame*/get end_portal_frame() {
      return C425 || CT.C425;
    },
    /*items.Items.end_rod*/get end_rod() {
      return C426 || CT.C426;
    },
    /*items.Items.end_stone*/get end_stone() {
      return C427 || CT.C427;
    },
    /*items.Items.end_stone_brick_slab*/get end_stone_brick_slab() {
      return C428 || CT.C428;
    },
    /*items.Items.end_stone_brick_stairs*/get end_stone_brick_stairs() {
      return C429 || CT.C429;
    },
    /*items.Items.end_stone_brick_wall*/get end_stone_brick_wall() {
      return C430 || CT.C430;
    },
    /*items.Items.end_stone_bricks*/get end_stone_bricks() {
      return C431 || CT.C431;
    },
    /*items.Items.ender_chest*/get ender_chest() {
      return C432 || CT.C432;
    },
    /*items.Items.ender_eye*/get ender_eye() {
      return C433 || CT.C433;
    },
    /*items.Items.ender_pearl*/get ender_pearl() {
      return C434 || CT.C434;
    },
    /*items.Items.enderman_spawn_egg*/get enderman_spawn_egg() {
      return C435 || CT.C435;
    },
    /*items.Items.endermite_spawn_egg*/get endermite_spawn_egg() {
      return C436 || CT.C436;
    },
    /*items.Items.evoker_spawn_egg*/get evoker_spawn_egg() {
      return C437 || CT.C437;
    },
    /*items.Items.experience_bottle*/get experience_bottle() {
      return C438 || CT.C438;
    },
    /*items.Items.farmland*/get farmland() {
      return C439 || CT.C439;
    },
    /*items.Items.feather*/get feather() {
      return C440 || CT.C440;
    },
    /*items.Items.fermented_spider_eye*/get fermented_spider_eye() {
      return C441 || CT.C441;
    },
    /*items.Items.fern*/get fern() {
      return C442 || CT.C442;
    },
    /*items.Items.filled_map*/get filled_map() {
      return C443 || CT.C443;
    },
    /*items.Items.fire_charge*/get fire_charge() {
      return C444 || CT.C444;
    },
    /*items.Items.fire_coral*/get fire_coral() {
      return C445 || CT.C445;
    },
    /*items.Items.fire_coral_block*/get fire_coral_block() {
      return C446 || CT.C446;
    },
    /*items.Items.fire_coral_fan*/get fire_coral_fan() {
      return C447 || CT.C447;
    },
    /*items.Items.firework_rocket*/get firework_rocket() {
      return C448 || CT.C448;
    },
    /*items.Items.firework_star*/get firework_star() {
      return C449 || CT.C449;
    },
    /*items.Items.fishing_rod*/get fishing_rod() {
      return C450 || CT.C450;
    },
    /*items.Items.fletching_table*/get fletching_table() {
      return C451 || CT.C451;
    },
    /*items.Items.flint*/get flint() {
      return C452 || CT.C452;
    },
    /*items.Items.flint_and_steel*/get flint_and_steel() {
      return C453 || CT.C453;
    },
    /*items.Items.flower_banner_pattern*/get flower_banner_pattern() {
      return C454 || CT.C454;
    },
    /*items.Items.flower_pot*/get flower_pot() {
      return C455 || CT.C455;
    },
    /*items.Items.fox_spawn_egg*/get fox_spawn_egg() {
      return C456 || CT.C456;
    },
    /*items.Items.furnace*/get furnace() {
      return C457 || CT.C457;
    },
    /*items.Items.furnace_minecart*/get furnace_minecart() {
      return C458 || CT.C458;
    },
    /*items.Items.ghast_spawn_egg*/get ghast_spawn_egg() {
      return C459 || CT.C459;
    },
    /*items.Items.ghast_tear*/get ghast_tear() {
      return C460 || CT.C460;
    },
    /*items.Items.glass*/get glass() {
      return C461 || CT.C461;
    },
    /*items.Items.glass_bottle*/get glass_bottle() {
      return C462 || CT.C462;
    },
    /*items.Items.glass_pane*/get glass_pane() {
      return C463 || CT.C463;
    },
    /*items.Items.glistering_melon_slice*/get glistering_melon_slice() {
      return C464 || CT.C464;
    },
    /*items.Items.globe_banner_pattern*/get globe_banner_pattern() {
      return C465 || CT.C465;
    },
    /*items.Items.glowstone*/get glowstone() {
      return C466 || CT.C466;
    },
    /*items.Items.glowstone_dust*/get glowstone_dust() {
      return C467 || CT.C467;
    },
    /*items.Items.gold_block*/get gold_block() {
      return C468 || CT.C468;
    },
    /*items.Items.gold_ingot*/get gold_ingot() {
      return C469 || CT.C469;
    },
    /*items.Items.gold_nugget*/get gold_nugget() {
      return C470 || CT.C470;
    },
    /*items.Items.gold_ore*/get gold_ore() {
      return C471 || CT.C471;
    },
    /*items.Items.golden_apple*/get golden_apple() {
      return C472 || CT.C472;
    },
    /*items.Items.golden_axe*/get golden_axe() {
      return C473 || CT.C473;
    },
    /*items.Items.golden_boots*/get golden_boots() {
      return C474 || CT.C474;
    },
    /*items.Items.golden_carrot*/get golden_carrot() {
      return C475 || CT.C475;
    },
    /*items.Items.golden_chestplate*/get golden_chestplate() {
      return C476 || CT.C476;
    },
    /*items.Items.golden_helmet*/get golden_helmet() {
      return C477 || CT.C477;
    },
    /*items.Items.golden_hoe*/get golden_hoe() {
      return C478 || CT.C478;
    },
    /*items.Items.golden_horse_armor*/get golden_horse_armor() {
      return C479 || CT.C479;
    },
    /*items.Items.golden_leggings*/get golden_leggings() {
      return C480 || CT.C480;
    },
    /*items.Items.golden_pickaxe*/get golden_pickaxe() {
      return C481 || CT.C481;
    },
    /*items.Items.golden_shovel*/get golden_shovel() {
      return C482 || CT.C482;
    },
    /*items.Items.golden_sword*/get golden_sword() {
      return C483 || CT.C483;
    },
    /*items.Items.granite*/get granite() {
      return C484 || CT.C484;
    },
    /*items.Items.granite_slab*/get granite_slab() {
      return C485 || CT.C485;
    },
    /*items.Items.granite_stairs*/get granite_stairs() {
      return C486 || CT.C486;
    },
    /*items.Items.granite_wall*/get granite_wall() {
      return C487 || CT.C487;
    },
    /*items.Items.grass*/get grass() {
      return C488 || CT.C488;
    },
    /*items.Items.grass_block*/get grass_block() {
      return C489 || CT.C489;
    },
    /*items.Items.grass_path*/get grass_path() {
      return C490 || CT.C490;
    },
    /*items.Items.gravel*/get gravel() {
      return C491 || CT.C491;
    },
    /*items.Items.gray_banner*/get gray_banner() {
      return C492 || CT.C492;
    },
    /*items.Items.gray_bed*/get gray_bed() {
      return C493 || CT.C493;
    },
    /*items.Items.gray_carpet*/get gray_carpet() {
      return C494 || CT.C494;
    },
    /*items.Items.gray_concrete*/get gray_concrete() {
      return C495 || CT.C495;
    },
    /*items.Items.gray_concrete_powder*/get gray_concrete_powder() {
      return C496 || CT.C496;
    },
    /*items.Items.gray_dye*/get gray_dye() {
      return C497 || CT.C497;
    },
    /*items.Items.gray_glazed_terracotta*/get gray_glazed_terracotta() {
      return C498 || CT.C498;
    },
    /*items.Items.gray_shulker_box*/get gray_shulker_box() {
      return C499 || CT.C499;
    },
    /*items.Items.gray_stained_glass*/get gray_stained_glass() {
      return C500 || CT.C500;
    },
    /*items.Items.gray_stained_glass_pane*/get gray_stained_glass_pane() {
      return C501 || CT.C501;
    },
    /*items.Items.gray_terracotta*/get gray_terracotta() {
      return C502 || CT.C502;
    },
    /*items.Items.gray_wool*/get gray_wool() {
      return C503 || CT.C503;
    },
    /*items.Items.green_banner*/get green_banner() {
      return C504 || CT.C504;
    },
    /*items.Items.green_bed*/get green_bed() {
      return C505 || CT.C505;
    },
    /*items.Items.green_carpet*/get green_carpet() {
      return C506 || CT.C506;
    },
    /*items.Items.green_concrete*/get green_concrete() {
      return C507 || CT.C507;
    },
    /*items.Items.green_concrete_powder*/get green_concrete_powder() {
      return C508 || CT.C508;
    },
    /*items.Items.green_dye*/get green_dye() {
      return C509 || CT.C509;
    },
    /*items.Items.green_glazed_terracotta*/get green_glazed_terracotta() {
      return C510 || CT.C510;
    },
    /*items.Items.green_shulker_box*/get green_shulker_box() {
      return C511 || CT.C511;
    },
    /*items.Items.green_stained_glass*/get green_stained_glass() {
      return C512 || CT.C512;
    },
    /*items.Items.green_stained_glass_pane*/get green_stained_glass_pane() {
      return C513 || CT.C513;
    },
    /*items.Items.green_terracotta*/get green_terracotta() {
      return C514 || CT.C514;
    },
    /*items.Items.green_wool*/get green_wool() {
      return C515 || CT.C515;
    },
    /*items.Items.grindstone*/get grindstone() {
      return C516 || CT.C516;
    },
    /*items.Items.guardian_spawn_egg*/get guardian_spawn_egg() {
      return C517 || CT.C517;
    },
    /*items.Items.gunpowder*/get gunpowder() {
      return C518 || CT.C518;
    },
    /*items.Items.hay_block*/get hay_block() {
      return C519 || CT.C519;
    },
    /*items.Items.heart_of_the_sea*/get heart_of_the_sea() {
      return C520 || CT.C520;
    },
    /*items.Items.heavy_weighted_pressure_plate*/get heavy_weighted_pressure_plate() {
      return C521 || CT.C521;
    },
    /*items.Items.honey_block*/get honey_block() {
      return C522 || CT.C522;
    },
    /*items.Items.honey_bottle*/get honey_bottle() {
      return C523 || CT.C523;
    },
    /*items.Items.honeycomb*/get honeycomb() {
      return C524 || CT.C524;
    },
    /*items.Items.honeycomb_block*/get honeycomb_block() {
      return C525 || CT.C525;
    },
    /*items.Items.hopper*/get hopper() {
      return C526 || CT.C526;
    },
    /*items.Items.hopper_minecart*/get hopper_minecart() {
      return C527 || CT.C527;
    },
    /*items.Items.horn_coral*/get horn_coral() {
      return C528 || CT.C528;
    },
    /*items.Items.horn_coral_block*/get horn_coral_block() {
      return C529 || CT.C529;
    },
    /*items.Items.horn_coral_fan*/get horn_coral_fan() {
      return C530 || CT.C530;
    },
    /*items.Items.horse_spawn_egg*/get horse_spawn_egg() {
      return C531 || CT.C531;
    },
    /*items.Items.husk_spawn_egg*/get husk_spawn_egg() {
      return C532 || CT.C532;
    },
    /*items.Items.ice*/get ice() {
      return C533 || CT.C533;
    },
    /*items.Items.infested_chiseled_stone_bricks*/get infested_chiseled_stone_bricks() {
      return C534 || CT.C534;
    },
    /*items.Items.infested_cobblestone*/get infested_cobblestone() {
      return C535 || CT.C535;
    },
    /*items.Items.infested_cracked_stone_bricks*/get infested_cracked_stone_bricks() {
      return C536 || CT.C536;
    },
    /*items.Items.infested_mossy_stone_bricks*/get infested_mossy_stone_bricks() {
      return C537 || CT.C537;
    },
    /*items.Items.infested_stone*/get infested_stone() {
      return C538 || CT.C538;
    },
    /*items.Items.infested_stone_bricks*/get infested_stone_bricks() {
      return C539 || CT.C539;
    },
    /*items.Items.ink_sac*/get ink_sac() {
      return C540 || CT.C540;
    },
    /*items.Items.iron_axe*/get iron_axe() {
      return C541 || CT.C541;
    },
    /*items.Items.iron_bars*/get iron_bars() {
      return C542 || CT.C542;
    },
    /*items.Items.iron_block*/get iron_block() {
      return C543 || CT.C543;
    },
    /*items.Items.iron_boots*/get iron_boots() {
      return C544 || CT.C544;
    },
    /*items.Items.iron_chestplate*/get iron_chestplate() {
      return C545 || CT.C545;
    },
    /*items.Items.iron_door*/get iron_door() {
      return C546 || CT.C546;
    },
    /*items.Items.iron_helmet*/get iron_helmet() {
      return C547 || CT.C547;
    },
    /*items.Items.iron_hoe*/get iron_hoe() {
      return C548 || CT.C548;
    },
    /*items.Items.iron_horse_armor*/get iron_horse_armor() {
      return C549 || CT.C549;
    },
    /*items.Items.iron_ingot*/get iron_ingot() {
      return C550 || CT.C550;
    },
    /*items.Items.iron_leggings*/get iron_leggings() {
      return C551 || CT.C551;
    },
    /*items.Items.iron_nugget*/get iron_nugget() {
      return C552 || CT.C552;
    },
    /*items.Items.iron_ore*/get iron_ore() {
      return C553 || CT.C553;
    },
    /*items.Items.iron_pickaxe*/get iron_pickaxe() {
      return C554 || CT.C554;
    },
    /*items.Items.iron_shovel*/get iron_shovel() {
      return C555 || CT.C555;
    },
    /*items.Items.iron_sword*/get iron_sword() {
      return C556 || CT.C556;
    },
    /*items.Items.iron_trapdoor*/get iron_trapdoor() {
      return C557 || CT.C557;
    },
    /*items.Items.item_frame*/get item_frame() {
      return C558 || CT.C558;
    },
    /*items.Items.jack_o_lantern*/get jack_o_lantern() {
      return C559 || CT.C559;
    },
    /*items.Items.jigsaw*/get jigsaw() {
      return C560 || CT.C560;
    },
    /*items.Items.jukebox*/get jukebox() {
      return C561 || CT.C561;
    },
    /*items.Items.jungle_boat*/get jungle_boat() {
      return C562 || CT.C562;
    },
    /*items.Items.jungle_button*/get jungle_button() {
      return C563 || CT.C563;
    },
    /*items.Items.jungle_door*/get jungle_door() {
      return C564 || CT.C564;
    },
    /*items.Items.jungle_fence*/get jungle_fence() {
      return C565 || CT.C565;
    },
    /*items.Items.jungle_fence_gate*/get jungle_fence_gate() {
      return C566 || CT.C566;
    },
    /*items.Items.jungle_leaves*/get jungle_leaves() {
      return C567 || CT.C567;
    },
    /*items.Items.jungle_log*/get jungle_log() {
      return C568 || CT.C568;
    },
    /*items.Items.jungle_planks*/get jungle_planks() {
      return C569 || CT.C569;
    },
    /*items.Items.jungle_pressure_plate*/get jungle_pressure_plate() {
      return C570 || CT.C570;
    },
    /*items.Items.jungle_sapling*/get jungle_sapling() {
      return C571 || CT.C571;
    },
    /*items.Items.jungle_sign*/get jungle_sign() {
      return C572 || CT.C572;
    },
    /*items.Items.jungle_slab*/get jungle_slab() {
      return C573 || CT.C573;
    },
    /*items.Items.jungle_stairs*/get jungle_stairs() {
      return C574 || CT.C574;
    },
    /*items.Items.jungle_trapdoor*/get jungle_trapdoor() {
      return C575 || CT.C575;
    },
    /*items.Items.jungle_wood*/get jungle_wood() {
      return C576 || CT.C576;
    },
    /*items.Items.kelp*/get kelp() {
      return C577 || CT.C577;
    },
    /*items.Items.knowledge_book*/get knowledge_book() {
      return C578 || CT.C578;
    },
    /*items.Items.ladder*/get ladder() {
      return C579 || CT.C579;
    },
    /*items.Items.lantern*/get lantern() {
      return C580 || CT.C580;
    },
    /*items.Items.lapis_block*/get lapis_block() {
      return C581 || CT.C581;
    },
    /*items.Items.lapis_lazuli*/get lapis_lazuli() {
      return C582 || CT.C582;
    },
    /*items.Items.lapis_ore*/get lapis_ore() {
      return C583 || CT.C583;
    },
    /*items.Items.large_fern*/get large_fern() {
      return C584 || CT.C584;
    },
    /*items.Items.lava_bucket*/get lava_bucket() {
      return C585 || CT.C585;
    },
    /*items.Items.lead*/get lead() {
      return C586 || CT.C586;
    },
    /*items.Items.leather*/get leather() {
      return C587 || CT.C587;
    },
    /*items.Items.leather_boots*/get leather_boots() {
      return C588 || CT.C588;
    },
    /*items.Items.leather_chestplate*/get leather_chestplate() {
      return C589 || CT.C589;
    },
    /*items.Items.leather_helmet*/get leather_helmet() {
      return C590 || CT.C590;
    },
    /*items.Items.leather_horse_armor*/get leather_horse_armor() {
      return C591 || CT.C591;
    },
    /*items.Items.leather_leggings*/get leather_leggings() {
      return C592 || CT.C592;
    },
    /*items.Items.lectern*/get lectern() {
      return C593 || CT.C593;
    },
    /*items.Items.lever*/get lever() {
      return C594 || CT.C594;
    },
    /*items.Items.light_blue_banner*/get light_blue_banner() {
      return C595 || CT.C595;
    },
    /*items.Items.light_blue_bed*/get light_blue_bed() {
      return C596 || CT.C596;
    },
    /*items.Items.light_blue_carpet*/get light_blue_carpet() {
      return C597 || CT.C597;
    },
    /*items.Items.light_blue_concrete*/get light_blue_concrete() {
      return C598 || CT.C598;
    },
    /*items.Items.light_blue_concrete_powder*/get light_blue_concrete_powder() {
      return C599 || CT.C599;
    },
    /*items.Items.light_blue_dye*/get light_blue_dye() {
      return C600 || CT.C600;
    },
    /*items.Items.light_blue_glazed_terracotta*/get light_blue_glazed_terracotta() {
      return C601 || CT.C601;
    },
    /*items.Items.light_blue_shulker_box*/get light_blue_shulker_box() {
      return C602 || CT.C602;
    },
    /*items.Items.light_blue_stained_glass*/get light_blue_stained_glass() {
      return C603 || CT.C603;
    },
    /*items.Items.light_blue_stained_glass_pane*/get light_blue_stained_glass_pane() {
      return C604 || CT.C604;
    },
    /*items.Items.light_blue_terracotta*/get light_blue_terracotta() {
      return C605 || CT.C605;
    },
    /*items.Items.light_blue_wool*/get light_blue_wool() {
      return C606 || CT.C606;
    },
    /*items.Items.light_gray_banner*/get light_gray_banner() {
      return C607 || CT.C607;
    },
    /*items.Items.light_gray_bed*/get light_gray_bed() {
      return C608 || CT.C608;
    },
    /*items.Items.light_gray_carpet*/get light_gray_carpet() {
      return C609 || CT.C609;
    },
    /*items.Items.light_gray_concrete*/get light_gray_concrete() {
      return C610 || CT.C610;
    },
    /*items.Items.light_gray_concrete_powder*/get light_gray_concrete_powder() {
      return C611 || CT.C611;
    },
    /*items.Items.light_gray_dye*/get light_gray_dye() {
      return C612 || CT.C612;
    },
    /*items.Items.light_gray_glazed_terracotta*/get light_gray_glazed_terracotta() {
      return C613 || CT.C613;
    },
    /*items.Items.light_gray_shulker_box*/get light_gray_shulker_box() {
      return C614 || CT.C614;
    },
    /*items.Items.light_gray_stained_glass*/get light_gray_stained_glass() {
      return C615 || CT.C615;
    },
    /*items.Items.light_gray_stained_glass_pane*/get light_gray_stained_glass_pane() {
      return C616 || CT.C616;
    },
    /*items.Items.light_gray_terracotta*/get light_gray_terracotta() {
      return C617 || CT.C617;
    },
    /*items.Items.light_gray_wool*/get light_gray_wool() {
      return C618 || CT.C618;
    },
    /*items.Items.light_weighted_pressure_plate*/get light_weighted_pressure_plate() {
      return C619 || CT.C619;
    },
    /*items.Items.lilac*/get lilac() {
      return C620 || CT.C620;
    },
    /*items.Items.lily_of_the_valley*/get lily_of_the_valley() {
      return C621 || CT.C621;
    },
    /*items.Items.lily_pad*/get lily_pad() {
      return C622 || CT.C622;
    },
    /*items.Items.lime_banner*/get lime_banner() {
      return C623 || CT.C623;
    },
    /*items.Items.lime_bed*/get lime_bed() {
      return C624 || CT.C624;
    },
    /*items.Items.lime_carpet*/get lime_carpet() {
      return C625 || CT.C625;
    },
    /*items.Items.lime_concrete*/get lime_concrete() {
      return C626 || CT.C626;
    },
    /*items.Items.lime_concrete_powder*/get lime_concrete_powder() {
      return C627 || CT.C627;
    },
    /*items.Items.lime_dye*/get lime_dye() {
      return C628 || CT.C628;
    },
    /*items.Items.lime_glazed_terracotta*/get lime_glazed_terracotta() {
      return C629 || CT.C629;
    },
    /*items.Items.lime_shulker_box*/get lime_shulker_box() {
      return C630 || CT.C630;
    },
    /*items.Items.lime_stained_glass*/get lime_stained_glass() {
      return C631 || CT.C631;
    },
    /*items.Items.lime_stained_glass_pane*/get lime_stained_glass_pane() {
      return C632 || CT.C632;
    },
    /*items.Items.lime_terracotta*/get lime_terracotta() {
      return C633 || CT.C633;
    },
    /*items.Items.lime_wool*/get lime_wool() {
      return C634 || CT.C634;
    },
    /*items.Items.lingering_potion*/get lingering_potion() {
      return C635 || CT.C635;
    },
    /*items.Items.llama_spawn_egg*/get llama_spawn_egg() {
      return C636 || CT.C636;
    },
    /*items.Items.loom*/get loom() {
      return C637 || CT.C637;
    },
    /*items.Items.magenta_banner*/get magenta_banner() {
      return C638 || CT.C638;
    },
    /*items.Items.magenta_bed*/get magenta_bed() {
      return C639 || CT.C639;
    },
    /*items.Items.magenta_carpet*/get magenta_carpet() {
      return C640 || CT.C640;
    },
    /*items.Items.magenta_concrete*/get magenta_concrete() {
      return C641 || CT.C641;
    },
    /*items.Items.magenta_concrete_powder*/get magenta_concrete_powder() {
      return C642 || CT.C642;
    },
    /*items.Items.magenta_dye*/get magenta_dye() {
      return C643 || CT.C643;
    },
    /*items.Items.magenta_glazed_terracotta*/get magenta_glazed_terracotta() {
      return C644 || CT.C644;
    },
    /*items.Items.magenta_shulker_box*/get magenta_shulker_box() {
      return C645 || CT.C645;
    },
    /*items.Items.magenta_stained_glass*/get magenta_stained_glass() {
      return C646 || CT.C646;
    },
    /*items.Items.magenta_stained_glass_pane*/get magenta_stained_glass_pane() {
      return C647 || CT.C647;
    },
    /*items.Items.magenta_terracotta*/get magenta_terracotta() {
      return C648 || CT.C648;
    },
    /*items.Items.magenta_wool*/get magenta_wool() {
      return C649 || CT.C649;
    },
    /*items.Items.magma_block*/get magma_block() {
      return C650 || CT.C650;
    },
    /*items.Items.magma_cream*/get magma_cream() {
      return C651 || CT.C651;
    },
    /*items.Items.magma_cube_spawn_egg*/get magma_cube_spawn_egg() {
      return C652 || CT.C652;
    },
    /*items.Items.map*/get map() {
      return C653 || CT.C653;
    },
    /*items.Items.melon*/get melon() {
      return C654 || CT.C654;
    },
    /*items.Items.melon_seeds*/get melon_seeds() {
      return C655 || CT.C655;
    },
    /*items.Items.melon_slice*/get melon_slice() {
      return C656 || CT.C656;
    },
    /*items.Items.milk_bucket*/get milk_bucket() {
      return C657 || CT.C657;
    },
    /*items.Items.minecart*/get minecart() {
      return C658 || CT.C658;
    },
    /*items.Items.mojang_banner_pattern*/get mojang_banner_pattern() {
      return C659 || CT.C659;
    },
    /*items.Items.mooshroom_spawn_egg*/get mooshroom_spawn_egg() {
      return C660 || CT.C660;
    },
    /*items.Items.mossy_cobblestone*/get mossy_cobblestone() {
      return C661 || CT.C661;
    },
    /*items.Items.mossy_cobblestone_slab*/get mossy_cobblestone_slab() {
      return C662 || CT.C662;
    },
    /*items.Items.mossy_cobblestone_stairs*/get mossy_cobblestone_stairs() {
      return C663 || CT.C663;
    },
    /*items.Items.mossy_cobblestone_wall*/get mossy_cobblestone_wall() {
      return C664 || CT.C664;
    },
    /*items.Items.mossy_stone_brick_slab*/get mossy_stone_brick_slab() {
      return C665 || CT.C665;
    },
    /*items.Items.mossy_stone_brick_stairs*/get mossy_stone_brick_stairs() {
      return C666 || CT.C666;
    },
    /*items.Items.mossy_stone_brick_wall*/get mossy_stone_brick_wall() {
      return C667 || CT.C667;
    },
    /*items.Items.mossy_stone_bricks*/get mossy_stone_bricks() {
      return C668 || CT.C668;
    },
    /*items.Items.mule_spawn_egg*/get mule_spawn_egg() {
      return C669 || CT.C669;
    },
    /*items.Items.mushroom_stem*/get mushroom_stem() {
      return C670 || CT.C670;
    },
    /*items.Items.mushroom_stew*/get mushroom_stew() {
      return C671 || CT.C671;
    },
    /*items.Items.music_disc_11*/get music_disc_11() {
      return C672 || CT.C672;
    },
    /*items.Items.music_disc_13*/get music_disc_13() {
      return C673 || CT.C673;
    },
    /*items.Items.music_disc_blocks*/get music_disc_blocks() {
      return C674 || CT.C674;
    },
    /*items.Items.music_disc_cat*/get music_disc_cat() {
      return C675 || CT.C675;
    },
    /*items.Items.music_disc_chirp*/get music_disc_chirp() {
      return C676 || CT.C676;
    },
    /*items.Items.music_disc_far*/get music_disc_far() {
      return C677 || CT.C677;
    },
    /*items.Items.music_disc_mall*/get music_disc_mall() {
      return C678 || CT.C678;
    },
    /*items.Items.music_disc_mellohi*/get music_disc_mellohi() {
      return C679 || CT.C679;
    },
    /*items.Items.music_disc_stal*/get music_disc_stal() {
      return C680 || CT.C680;
    },
    /*items.Items.music_disc_strad*/get music_disc_strad() {
      return C681 || CT.C681;
    },
    /*items.Items.music_disc_wait*/get music_disc_wait() {
      return C682 || CT.C682;
    },
    /*items.Items.music_disc_ward*/get music_disc_ward() {
      return C683 || CT.C683;
    },
    /*items.Items.mutton*/get mutton() {
      return C684 || CT.C684;
    },
    /*items.Items.mycelium*/get mycelium() {
      return C685 || CT.C685;
    },
    /*items.Items.name_tag*/get name_tag() {
      return C686 || CT.C686;
    },
    /*items.Items.nautilus_shell*/get nautilus_shell() {
      return C687 || CT.C687;
    },
    /*items.Items.nether_brick*/get nether_brick() {
      return C688 || CT.C688;
    },
    /*items.Items.nether_brick_fence*/get nether_brick_fence() {
      return C689 || CT.C689;
    },
    /*items.Items.nether_brick_slab*/get nether_brick_slab() {
      return C690 || CT.C690;
    },
    /*items.Items.nether_brick_stairs*/get nether_brick_stairs() {
      return C691 || CT.C691;
    },
    /*items.Items.nether_brick_wall*/get nether_brick_wall() {
      return C692 || CT.C692;
    },
    /*items.Items.nether_bricks*/get nether_bricks() {
      return C693 || CT.C693;
    },
    /*items.Items.nether_quartz_ore*/get nether_quartz_ore() {
      return C694 || CT.C694;
    },
    /*items.Items.nether_star*/get nether_star() {
      return C695 || CT.C695;
    },
    /*items.Items.nether_wart*/get nether_wart() {
      return C696 || CT.C696;
    },
    /*items.Items.nether_wart_block*/get nether_wart_block() {
      return C697 || CT.C697;
    },
    /*items.Items.netherrack*/get netherrack() {
      return C698 || CT.C698;
    },
    /*items.Items.note_block*/get note_block() {
      return C699 || CT.C699;
    },
    /*items.Items.oak_boat*/get oak_boat() {
      return C700 || CT.C700;
    },
    /*items.Items.oak_button*/get oak_button() {
      return C701 || CT.C701;
    },
    /*items.Items.oak_door*/get oak_door() {
      return C702 || CT.C702;
    },
    /*items.Items.oak_fence*/get oak_fence() {
      return C703 || CT.C703;
    },
    /*items.Items.oak_fence_gate*/get oak_fence_gate() {
      return C704 || CT.C704;
    },
    /*items.Items.oak_leaves*/get oak_leaves() {
      return C705 || CT.C705;
    },
    /*items.Items.oak_log*/get oak_log() {
      return C706 || CT.C706;
    },
    /*items.Items.oak_planks*/get oak_planks() {
      return C707 || CT.C707;
    },
    /*items.Items.oak_pressure_plate*/get oak_pressure_plate() {
      return C708 || CT.C708;
    },
    /*items.Items.oak_sapling*/get oak_sapling() {
      return C709 || CT.C709;
    },
    /*items.Items.oak_sign*/get oak_sign() {
      return C710 || CT.C710;
    },
    /*items.Items.oak_slab*/get oak_slab() {
      return C711 || CT.C711;
    },
    /*items.Items.oak_stairs*/get oak_stairs() {
      return C712 || CT.C712;
    },
    /*items.Items.oak_trapdoor*/get oak_trapdoor() {
      return C713 || CT.C713;
    },
    /*items.Items.oak_wood*/get oak_wood() {
      return C714 || CT.C714;
    },
    /*items.Items.observer*/get observer() {
      return C715 || CT.C715;
    },
    /*items.Items.obsidian*/get obsidian() {
      return C716 || CT.C716;
    },
    /*items.Items.ocelot_spawn_egg*/get ocelot_spawn_egg() {
      return C717 || CT.C717;
    },
    /*items.Items.orange_banner*/get orange_banner() {
      return C718 || CT.C718;
    },
    /*items.Items.orange_bed*/get orange_bed() {
      return C719 || CT.C719;
    },
    /*items.Items.orange_carpet*/get orange_carpet() {
      return C720 || CT.C720;
    },
    /*items.Items.orange_concrete*/get orange_concrete() {
      return C721 || CT.C721;
    },
    /*items.Items.orange_concrete_powder*/get orange_concrete_powder() {
      return C722 || CT.C722;
    },
    /*items.Items.orange_dye*/get orange_dye() {
      return C723 || CT.C723;
    },
    /*items.Items.orange_glazed_terracotta*/get orange_glazed_terracotta() {
      return C724 || CT.C724;
    },
    /*items.Items.orange_shulker_box*/get orange_shulker_box() {
      return C725 || CT.C725;
    },
    /*items.Items.orange_stained_glass*/get orange_stained_glass() {
      return C726 || CT.C726;
    },
    /*items.Items.orange_stained_glass_pane*/get orange_stained_glass_pane() {
      return C727 || CT.C727;
    },
    /*items.Items.orange_terracotta*/get orange_terracotta() {
      return C728 || CT.C728;
    },
    /*items.Items.orange_tulip*/get orange_tulip() {
      return C729 || CT.C729;
    },
    /*items.Items.orange_wool*/get orange_wool() {
      return C730 || CT.C730;
    },
    /*items.Items.oxeye_daisy*/get oxeye_daisy() {
      return C731 || CT.C731;
    },
    /*items.Items.packed_ice*/get packed_ice() {
      return C732 || CT.C732;
    },
    /*items.Items.painting*/get painting() {
      return C733 || CT.C733;
    },
    /*items.Items.panda_spawn_egg*/get panda_spawn_egg() {
      return C734 || CT.C734;
    },
    /*items.Items.paper*/get paper() {
      return C735 || CT.C735;
    },
    /*items.Items.parrot_spawn_egg*/get parrot_spawn_egg() {
      return C736 || CT.C736;
    },
    /*items.Items.peony*/get peony() {
      return C737 || CT.C737;
    },
    /*items.Items.petrified_oak_slab*/get petrified_oak_slab() {
      return C738 || CT.C738;
    },
    /*items.Items.phantom_membrane*/get phantom_membrane() {
      return C739 || CT.C739;
    },
    /*items.Items.phantom_spawn_egg*/get phantom_spawn_egg() {
      return C740 || CT.C740;
    },
    /*items.Items.pig_spawn_egg*/get pig_spawn_egg() {
      return C741 || CT.C741;
    },
    /*items.Items.pillager_spawn_egg*/get pillager_spawn_egg() {
      return C742 || CT.C742;
    },
    /*items.Items.pink_banner*/get pink_banner() {
      return C743 || CT.C743;
    },
    /*items.Items.pink_bed*/get pink_bed() {
      return C744 || CT.C744;
    },
    /*items.Items.pink_carpet*/get pink_carpet() {
      return C745 || CT.C745;
    },
    /*items.Items.pink_concrete*/get pink_concrete() {
      return C746 || CT.C746;
    },
    /*items.Items.pink_concrete_powder*/get pink_concrete_powder() {
      return C747 || CT.C747;
    },
    /*items.Items.pink_dye*/get pink_dye() {
      return C748 || CT.C748;
    },
    /*items.Items.pink_glazed_terracotta*/get pink_glazed_terracotta() {
      return C749 || CT.C749;
    },
    /*items.Items.pink_shulker_box*/get pink_shulker_box() {
      return C750 || CT.C750;
    },
    /*items.Items.pink_stained_glass*/get pink_stained_glass() {
      return C751 || CT.C751;
    },
    /*items.Items.pink_stained_glass_pane*/get pink_stained_glass_pane() {
      return C752 || CT.C752;
    },
    /*items.Items.pink_terracotta*/get pink_terracotta() {
      return C753 || CT.C753;
    },
    /*items.Items.pink_tulip*/get pink_tulip() {
      return C754 || CT.C754;
    },
    /*items.Items.pink_wool*/get pink_wool() {
      return C755 || CT.C755;
    },
    /*items.Items.piston*/get piston() {
      return C756 || CT.C756;
    },
    /*items.Items.player_head*/get player_head() {
      return C757 || CT.C757;
    },
    /*items.Items.podzol*/get podzol() {
      return C758 || CT.C758;
    },
    /*items.Items.poisonous_potato*/get poisonous_potato() {
      return C759 || CT.C759;
    },
    /*items.Items.polar_bear_spawn_egg*/get polar_bear_spawn_egg() {
      return C760 || CT.C760;
    },
    /*items.Items.polished_andesite*/get polished_andesite() {
      return C761 || CT.C761;
    },
    /*items.Items.polished_andesite_slab*/get polished_andesite_slab() {
      return C762 || CT.C762;
    },
    /*items.Items.polished_andesite_stairs*/get polished_andesite_stairs() {
      return C763 || CT.C763;
    },
    /*items.Items.polished_diorite*/get polished_diorite() {
      return C764 || CT.C764;
    },
    /*items.Items.polished_diorite_slab*/get polished_diorite_slab() {
      return C765 || CT.C765;
    },
    /*items.Items.polished_diorite_stairs*/get polished_diorite_stairs() {
      return C766 || CT.C766;
    },
    /*items.Items.polished_granite*/get polished_granite() {
      return C767 || CT.C767;
    },
    /*items.Items.polished_granite_slab*/get polished_granite_slab() {
      return C768 || CT.C768;
    },
    /*items.Items.polished_granite_stairs*/get polished_granite_stairs() {
      return C769 || CT.C769;
    },
    /*items.Items.popped_chorus_fruit*/get popped_chorus_fruit() {
      return C770 || CT.C770;
    },
    /*items.Items.poppy*/get poppy() {
      return C771 || CT.C771;
    },
    /*items.Items.porkchop*/get porkchop() {
      return C772 || CT.C772;
    },
    /*items.Items.potato*/get potato() {
      return C773 || CT.C773;
    },
    /*items.Items.potion*/get potion() {
      return C774 || CT.C774;
    },
    /*items.Items.powered_rail*/get powered_rail() {
      return C775 || CT.C775;
    },
    /*items.Items.prismarine*/get prismarine() {
      return C776 || CT.C776;
    },
    /*items.Items.prismarine_brick_slab*/get prismarine_brick_slab() {
      return C777 || CT.C777;
    },
    /*items.Items.prismarine_brick_stairs*/get prismarine_brick_stairs() {
      return C778 || CT.C778;
    },
    /*items.Items.prismarine_bricks*/get prismarine_bricks() {
      return C779 || CT.C779;
    },
    /*items.Items.prismarine_crystals*/get prismarine_crystals() {
      return C780 || CT.C780;
    },
    /*items.Items.prismarine_shard*/get prismarine_shard() {
      return C781 || CT.C781;
    },
    /*items.Items.prismarine_slab*/get prismarine_slab() {
      return C782 || CT.C782;
    },
    /*items.Items.prismarine_stairs*/get prismarine_stairs() {
      return C783 || CT.C783;
    },
    /*items.Items.prismarine_wall*/get prismarine_wall() {
      return C784 || CT.C784;
    },
    /*items.Items.pufferfish*/get pufferfish() {
      return C785 || CT.C785;
    },
    /*items.Items.pufferfish_bucket*/get pufferfish_bucket() {
      return C786 || CT.C786;
    },
    /*items.Items.pufferfish_spawn_egg*/get pufferfish_spawn_egg() {
      return C787 || CT.C787;
    },
    /*items.Items.pumpkin*/get pumpkin() {
      return C788 || CT.C788;
    },
    /*items.Items.pumpkin_pie*/get pumpkin_pie() {
      return C789 || CT.C789;
    },
    /*items.Items.pumpkin_seeds*/get pumpkin_seeds() {
      return C790 || CT.C790;
    },
    /*items.Items.purple_banner*/get purple_banner() {
      return C791 || CT.C791;
    },
    /*items.Items.purple_bed*/get purple_bed() {
      return C792 || CT.C792;
    },
    /*items.Items.purple_carpet*/get purple_carpet() {
      return C793 || CT.C793;
    },
    /*items.Items.purple_concrete*/get purple_concrete() {
      return C794 || CT.C794;
    },
    /*items.Items.purple_concrete_powder*/get purple_concrete_powder() {
      return C795 || CT.C795;
    },
    /*items.Items.purple_dye*/get purple_dye() {
      return C796 || CT.C796;
    },
    /*items.Items.purple_glazed_terracotta*/get purple_glazed_terracotta() {
      return C797 || CT.C797;
    },
    /*items.Items.purple_shulker_box*/get purple_shulker_box() {
      return C798 || CT.C798;
    },
    /*items.Items.purple_stained_glass*/get purple_stained_glass() {
      return C799 || CT.C799;
    },
    /*items.Items.purple_stained_glass_pane*/get purple_stained_glass_pane() {
      return C800 || CT.C800;
    },
    /*items.Items.purple_terracotta*/get purple_terracotta() {
      return C801 || CT.C801;
    },
    /*items.Items.purple_wool*/get purple_wool() {
      return C802 || CT.C802;
    },
    /*items.Items.purpur_block*/get purpur_block() {
      return C803 || CT.C803;
    },
    /*items.Items.purpur_pillar*/get purpur_pillar() {
      return C804 || CT.C804;
    },
    /*items.Items.purpur_slab*/get purpur_slab() {
      return C805 || CT.C805;
    },
    /*items.Items.purpur_stairs*/get purpur_stairs() {
      return C806 || CT.C806;
    },
    /*items.Items.quartz*/get quartz() {
      return C807 || CT.C807;
    },
    /*items.Items.quartz_block*/get quartz_block() {
      return C808 || CT.C808;
    },
    /*items.Items.quartz_pillar*/get quartz_pillar() {
      return C809 || CT.C809;
    },
    /*items.Items.quartz_slab*/get quartz_slab() {
      return C810 || CT.C810;
    },
    /*items.Items.quartz_stairs*/get quartz_stairs() {
      return C811 || CT.C811;
    },
    /*items.Items.rabbit*/get rabbit() {
      return C812 || CT.C812;
    },
    /*items.Items.rabbit_foot*/get rabbit_foot() {
      return C813 || CT.C813;
    },
    /*items.Items.rabbit_hide*/get rabbit_hide() {
      return C814 || CT.C814;
    },
    /*items.Items.rabbit_spawn_egg*/get rabbit_spawn_egg() {
      return C815 || CT.C815;
    },
    /*items.Items.rabbit_stew*/get rabbit_stew() {
      return C816 || CT.C816;
    },
    /*items.Items.rail*/get rail() {
      return C817 || CT.C817;
    },
    /*items.Items.ravager_spawn_egg*/get ravager_spawn_egg() {
      return C818 || CT.C818;
    },
    /*items.Items.red_banner*/get red_banner() {
      return C819 || CT.C819;
    },
    /*items.Items.red_bed*/get red_bed() {
      return C820 || CT.C820;
    },
    /*items.Items.red_carpet*/get red_carpet() {
      return C821 || CT.C821;
    },
    /*items.Items.red_concrete*/get red_concrete() {
      return C822 || CT.C822;
    },
    /*items.Items.red_concrete_powder*/get red_concrete_powder() {
      return C823 || CT.C823;
    },
    /*items.Items.red_dye*/get red_dye() {
      return C824 || CT.C824;
    },
    /*items.Items.red_glazed_terracotta*/get red_glazed_terracotta() {
      return C825 || CT.C825;
    },
    /*items.Items.red_mushroom*/get red_mushroom() {
      return C826 || CT.C826;
    },
    /*items.Items.red_mushroom_block*/get red_mushroom_block() {
      return C827 || CT.C827;
    },
    /*items.Items.red_nether_brick_slab*/get red_nether_brick_slab() {
      return C828 || CT.C828;
    },
    /*items.Items.red_nether_brick_stairs*/get red_nether_brick_stairs() {
      return C829 || CT.C829;
    },
    /*items.Items.red_nether_brick_wall*/get red_nether_brick_wall() {
      return C830 || CT.C830;
    },
    /*items.Items.red_nether_bricks*/get red_nether_bricks() {
      return C831 || CT.C831;
    },
    /*items.Items.red_sand*/get red_sand() {
      return C832 || CT.C832;
    },
    /*items.Items.red_sandstone*/get red_sandstone() {
      return C833 || CT.C833;
    },
    /*items.Items.red_sandstone_slab*/get red_sandstone_slab() {
      return C834 || CT.C834;
    },
    /*items.Items.red_sandstone_stairs*/get red_sandstone_stairs() {
      return C835 || CT.C835;
    },
    /*items.Items.red_sandstone_wall*/get red_sandstone_wall() {
      return C836 || CT.C836;
    },
    /*items.Items.red_shulker_box*/get red_shulker_box() {
      return C837 || CT.C837;
    },
    /*items.Items.red_stained_glass*/get red_stained_glass() {
      return C838 || CT.C838;
    },
    /*items.Items.red_stained_glass_pane*/get red_stained_glass_pane() {
      return C839 || CT.C839;
    },
    /*items.Items.red_terracotta*/get red_terracotta() {
      return C840 || CT.C840;
    },
    /*items.Items.red_tulip*/get red_tulip() {
      return C841 || CT.C841;
    },
    /*items.Items.red_wool*/get red_wool() {
      return C842 || CT.C842;
    },
    /*items.Items.redstone*/get redstone() {
      return C843 || CT.C843;
    },
    /*items.Items.redstone_block*/get redstone_block() {
      return C844 || CT.C844;
    },
    /*items.Items.redstone_lamp*/get redstone_lamp() {
      return C845 || CT.C845;
    },
    /*items.Items.redstone_ore*/get redstone_ore() {
      return C846 || CT.C846;
    },
    /*items.Items.redstone_torch*/get redstone_torch() {
      return C847 || CT.C847;
    },
    /*items.Items.repeater*/get repeater() {
      return C848 || CT.C848;
    },
    /*items.Items.repeating_command_block*/get repeating_command_block() {
      return C849 || CT.C849;
    },
    /*items.Items.rose_bush*/get rose_bush() {
      return C850 || CT.C850;
    },
    /*items.Items.rotten_flesh*/get rotten_flesh() {
      return C851 || CT.C851;
    },
    /*items.Items.saddle*/get saddle() {
      return C852 || CT.C852;
    },
    /*items.Items.salmon*/get salmon() {
      return C853 || CT.C853;
    },
    /*items.Items.salmon_bucket*/get salmon_bucket() {
      return C854 || CT.C854;
    },
    /*items.Items.salmon_spawn_egg*/get salmon_spawn_egg() {
      return C855 || CT.C855;
    },
    /*items.Items.sand*/get sand() {
      return C856 || CT.C856;
    },
    /*items.Items.sandstone*/get sandstone() {
      return C857 || CT.C857;
    },
    /*items.Items.sandstone_slab*/get sandstone_slab() {
      return C858 || CT.C858;
    },
    /*items.Items.sandstone_stairs*/get sandstone_stairs() {
      return C859 || CT.C859;
    },
    /*items.Items.sandstone_wall*/get sandstone_wall() {
      return C860 || CT.C860;
    },
    /*items.Items.scaffolding*/get scaffolding() {
      return C861 || CT.C861;
    },
    /*items.Items.scute*/get scute() {
      return C862 || CT.C862;
    },
    /*items.Items.sea_lantern*/get sea_lantern() {
      return C863 || CT.C863;
    },
    /*items.Items.sea_pickle*/get sea_pickle() {
      return C864 || CT.C864;
    },
    /*items.Items.seagrass*/get seagrass() {
      return C865 || CT.C865;
    },
    /*items.Items.shears*/get shears() {
      return C866 || CT.C866;
    },
    /*items.Items.sheep_spawn_egg*/get sheep_spawn_egg() {
      return C867 || CT.C867;
    },
    /*items.Items.shield*/get shield() {
      return C868 || CT.C868;
    },
    /*items.Items.shulker_box*/get shulker_box() {
      return C869 || CT.C869;
    },
    /*items.Items.shulker_shell*/get shulker_shell() {
      return C870 || CT.C870;
    },
    /*items.Items.shulker_spawn_egg*/get shulker_spawn_egg() {
      return C871 || CT.C871;
    },
    /*items.Items.silverfish_spawn_egg*/get silverfish_spawn_egg() {
      return C872 || CT.C872;
    },
    /*items.Items.skeleton_horse_spawn_egg*/get skeleton_horse_spawn_egg() {
      return C873 || CT.C873;
    },
    /*items.Items.skeleton_skull*/get skeleton_skull() {
      return C874 || CT.C874;
    },
    /*items.Items.skeleton_spawn_egg*/get skeleton_spawn_egg() {
      return C875 || CT.C875;
    },
    /*items.Items.skull_banner_pattern*/get skull_banner_pattern() {
      return C876 || CT.C876;
    },
    /*items.Items.slime_ball*/get slime_ball() {
      return C877 || CT.C877;
    },
    /*items.Items.slime_block*/get slime_block() {
      return C878 || CT.C878;
    },
    /*items.Items.slime_spawn_egg*/get slime_spawn_egg() {
      return C879 || CT.C879;
    },
    /*items.Items.smithing_table*/get smithing_table() {
      return C880 || CT.C880;
    },
    /*items.Items.smoker*/get smoker() {
      return C881 || CT.C881;
    },
    /*items.Items.smooth_quartz*/get smooth_quartz() {
      return C882 || CT.C882;
    },
    /*items.Items.smooth_quartz_slab*/get smooth_quartz_slab() {
      return C883 || CT.C883;
    },
    /*items.Items.smooth_quartz_stairs*/get smooth_quartz_stairs() {
      return C884 || CT.C884;
    },
    /*items.Items.smooth_red_sandstone*/get smooth_red_sandstone() {
      return C885 || CT.C885;
    },
    /*items.Items.smooth_red_sandstone_slab*/get smooth_red_sandstone_slab() {
      return C886 || CT.C886;
    },
    /*items.Items.smooth_red_sandstone_stairs*/get smooth_red_sandstone_stairs() {
      return C887 || CT.C887;
    },
    /*items.Items.smooth_sandstone*/get smooth_sandstone() {
      return C888 || CT.C888;
    },
    /*items.Items.smooth_sandstone_slab*/get smooth_sandstone_slab() {
      return C889 || CT.C889;
    },
    /*items.Items.smooth_sandstone_stairs*/get smooth_sandstone_stairs() {
      return C890 || CT.C890;
    },
    /*items.Items.smooth_stone*/get smooth_stone() {
      return C891 || CT.C891;
    },
    /*items.Items.smooth_stone_slab*/get smooth_stone_slab() {
      return C892 || CT.C892;
    },
    /*items.Items.snow*/get snow() {
      return C893 || CT.C893;
    },
    /*items.Items.snow_block*/get snow_block() {
      return C894 || CT.C894;
    },
    /*items.Items.snowball*/get snowball() {
      return C895 || CT.C895;
    },
    /*items.Items.soul_sand*/get soul_sand() {
      return C896 || CT.C896;
    },
    /*items.Items.spawner*/get spawner() {
      return C897 || CT.C897;
    },
    /*items.Items.spectral_arrow*/get spectral_arrow() {
      return C898 || CT.C898;
    },
    /*items.Items.spider_eye*/get spider_eye() {
      return C899 || CT.C899;
    },
    /*items.Items.spider_spawn_egg*/get spider_spawn_egg() {
      return C900 || CT.C900;
    },
    /*items.Items.splash_potion*/get splash_potion() {
      return C901 || CT.C901;
    },
    /*items.Items.sponge*/get sponge() {
      return C902 || CT.C902;
    },
    /*items.Items.spruce_boat*/get spruce_boat() {
      return C903 || CT.C903;
    },
    /*items.Items.spruce_button*/get spruce_button() {
      return C904 || CT.C904;
    },
    /*items.Items.spruce_door*/get spruce_door() {
      return C905 || CT.C905;
    },
    /*items.Items.spruce_fence*/get spruce_fence() {
      return C906 || CT.C906;
    },
    /*items.Items.spruce_fence_gate*/get spruce_fence_gate() {
      return C907 || CT.C907;
    },
    /*items.Items.spruce_leaves*/get spruce_leaves() {
      return C908 || CT.C908;
    },
    /*items.Items.spruce_log*/get spruce_log() {
      return C909 || CT.C909;
    },
    /*items.Items.spruce_planks*/get spruce_planks() {
      return C910 || CT.C910;
    },
    /*items.Items.spruce_pressure_plate*/get spruce_pressure_plate() {
      return C911 || CT.C911;
    },
    /*items.Items.spruce_sapling*/get spruce_sapling() {
      return C912 || CT.C912;
    },
    /*items.Items.spruce_sign*/get spruce_sign() {
      return C913 || CT.C913;
    },
    /*items.Items.spruce_slab*/get spruce_slab() {
      return C914 || CT.C914;
    },
    /*items.Items.spruce_stairs*/get spruce_stairs() {
      return C915 || CT.C915;
    },
    /*items.Items.spruce_trapdoor*/get spruce_trapdoor() {
      return C916 || CT.C916;
    },
    /*items.Items.spruce_wood*/get spruce_wood() {
      return C917 || CT.C917;
    },
    /*items.Items.squid_spawn_egg*/get squid_spawn_egg() {
      return C918 || CT.C918;
    },
    /*items.Items.stick*/get stick() {
      return C919 || CT.C919;
    },
    /*items.Items.sticky_piston*/get sticky_piston() {
      return C920 || CT.C920;
    },
    /*items.Items.stone*/get stone() {
      return C921 || CT.C921;
    },
    /*items.Items.stone_axe*/get stone_axe() {
      return C922 || CT.C922;
    },
    /*items.Items.stone_brick_slab*/get stone_brick_slab() {
      return C923 || CT.C923;
    },
    /*items.Items.stone_brick_stairs*/get stone_brick_stairs() {
      return C924 || CT.C924;
    },
    /*items.Items.stone_brick_wall*/get stone_brick_wall() {
      return C925 || CT.C925;
    },
    /*items.Items.stone_bricks*/get stone_bricks() {
      return C926 || CT.C926;
    },
    /*items.Items.stone_button*/get stone_button() {
      return C927 || CT.C927;
    },
    /*items.Items.stone_hoe*/get stone_hoe() {
      return C928 || CT.C928;
    },
    /*items.Items.stone_pickaxe*/get stone_pickaxe() {
      return C929 || CT.C929;
    },
    /*items.Items.stone_pressure_plate*/get stone_pressure_plate() {
      return C930 || CT.C930;
    },
    /*items.Items.stone_shovel*/get stone_shovel() {
      return C931 || CT.C931;
    },
    /*items.Items.stone_slab*/get stone_slab() {
      return C932 || CT.C932;
    },
    /*items.Items.stone_stairs*/get stone_stairs() {
      return C933 || CT.C933;
    },
    /*items.Items.stone_sword*/get stone_sword() {
      return C934 || CT.C934;
    },
    /*items.Items.stonecutter*/get stonecutter() {
      return C935 || CT.C935;
    },
    /*items.Items.stray_spawn_egg*/get stray_spawn_egg() {
      return C936 || CT.C936;
    },
    /*items.Items.string*/get string() {
      return C937 || CT.C937;
    },
    /*items.Items.stripped_acacia_log*/get stripped_acacia_log() {
      return C938 || CT.C938;
    },
    /*items.Items.stripped_acacia_wood*/get stripped_acacia_wood() {
      return C939 || CT.C939;
    },
    /*items.Items.stripped_birch_log*/get stripped_birch_log() {
      return C940 || CT.C940;
    },
    /*items.Items.stripped_birch_wood*/get stripped_birch_wood() {
      return C941 || CT.C941;
    },
    /*items.Items.stripped_dark_oak_log*/get stripped_dark_oak_log() {
      return C942 || CT.C942;
    },
    /*items.Items.stripped_dark_oak_wood*/get stripped_dark_oak_wood() {
      return C943 || CT.C943;
    },
    /*items.Items.stripped_jungle_log*/get stripped_jungle_log() {
      return C944 || CT.C944;
    },
    /*items.Items.stripped_jungle_wood*/get stripped_jungle_wood() {
      return C945 || CT.C945;
    },
    /*items.Items.stripped_oak_log*/get stripped_oak_log() {
      return C946 || CT.C946;
    },
    /*items.Items.stripped_oak_wood*/get stripped_oak_wood() {
      return C947 || CT.C947;
    },
    /*items.Items.stripped_spruce_log*/get stripped_spruce_log() {
      return C948 || CT.C948;
    },
    /*items.Items.stripped_spruce_wood*/get stripped_spruce_wood() {
      return C949 || CT.C949;
    },
    /*items.Items.structure_block*/get structure_block() {
      return C950 || CT.C950;
    },
    /*items.Items.structure_void*/get structure_void() {
      return C951 || CT.C951;
    },
    /*items.Items.sugar*/get sugar() {
      return C952 || CT.C952;
    },
    /*items.Items.sugar_cane*/get sugar_cane() {
      return C953 || CT.C953;
    },
    /*items.Items.sunflower*/get sunflower() {
      return C954 || CT.C954;
    },
    /*items.Items.suspicious_stew*/get suspicious_stew() {
      return C955 || CT.C955;
    },
    /*items.Items.sweet_berries*/get sweet_berries() {
      return C956 || CT.C956;
    },
    /*items.Items.tall_grass*/get tall_grass() {
      return C957 || CT.C957;
    },
    /*items.Items.terracotta*/get terracotta() {
      return C958 || CT.C958;
    },
    /*items.Items.tipped_arrow*/get tipped_arrow() {
      return C959 || CT.C959;
    },
    /*items.Items.tnt*/get tnt() {
      return C960 || CT.C960;
    },
    /*items.Items.tnt_minecart*/get tnt_minecart() {
      return C961 || CT.C961;
    },
    /*items.Items.torch*/get torch() {
      return C962 || CT.C962;
    },
    /*items.Items.totem_of_undying*/get totem_of_undying() {
      return C963 || CT.C963;
    },
    /*items.Items.trader_llama_spawn_egg*/get trader_llama_spawn_egg() {
      return C964 || CT.C964;
    },
    /*items.Items.trapped_chest*/get trapped_chest() {
      return C965 || CT.C965;
    },
    /*items.Items.trident*/get trident() {
      return C966 || CT.C966;
    },
    /*items.Items.tripwire_hook*/get tripwire_hook() {
      return C967 || CT.C967;
    },
    /*items.Items.tropical_fish*/get tropical_fish() {
      return C968 || CT.C968;
    },
    /*items.Items.tropical_fish_bucket*/get tropical_fish_bucket() {
      return C969 || CT.C969;
    },
    /*items.Items.tropical_fish_spawn_egg*/get tropical_fish_spawn_egg() {
      return C970 || CT.C970;
    },
    /*items.Items.tube_coral*/get tube_coral() {
      return C971 || CT.C971;
    },
    /*items.Items.tube_coral_block*/get tube_coral_block() {
      return C972 || CT.C972;
    },
    /*items.Items.tube_coral_fan*/get tube_coral_fan() {
      return C973 || CT.C973;
    },
    /*items.Items.turtle_egg*/get turtle_egg() {
      return C974 || CT.C974;
    },
    /*items.Items.turtle_helmet*/get turtle_helmet() {
      return C975 || CT.C975;
    },
    /*items.Items.turtle_spawn_egg*/get turtle_spawn_egg() {
      return C976 || CT.C976;
    },
    /*items.Items.vex_spawn_egg*/get vex_spawn_egg() {
      return C977 || CT.C977;
    },
    /*items.Items.villager_spawn_egg*/get villager_spawn_egg() {
      return C978 || CT.C978;
    },
    /*items.Items.vindicator_spawn_egg*/get vindicator_spawn_egg() {
      return C979 || CT.C979;
    },
    /*items.Items.vine*/get vine() {
      return C980 || CT.C980;
    },
    /*items.Items.wandering_trader_spawn_egg*/get wandering_trader_spawn_egg() {
      return C981 || CT.C981;
    },
    /*items.Items.water_bucket*/get water_bucket() {
      return C982 || CT.C982;
    },
    /*items.Items.wet_sponge*/get wet_sponge() {
      return C983 || CT.C983;
    },
    /*items.Items.wheat*/get wheat() {
      return C984 || CT.C984;
    },
    /*items.Items.wheat_seeds*/get wheat_seeds() {
      return C985 || CT.C985;
    },
    /*items.Items.white_banner*/get white_banner() {
      return C986 || CT.C986;
    },
    /*items.Items.white_bed*/get white_bed() {
      return C987 || CT.C987;
    },
    /*items.Items.white_carpet*/get white_carpet() {
      return C988 || CT.C988;
    },
    /*items.Items.white_concrete*/get white_concrete() {
      return C989 || CT.C989;
    },
    /*items.Items.white_concrete_powder*/get white_concrete_powder() {
      return C990 || CT.C990;
    },
    /*items.Items.white_dye*/get white_dye() {
      return C991 || CT.C991;
    },
    /*items.Items.white_glazed_terracotta*/get white_glazed_terracotta() {
      return C992 || CT.C992;
    },
    /*items.Items.white_shulker_box*/get white_shulker_box() {
      return C993 || CT.C993;
    },
    /*items.Items.white_stained_glass*/get white_stained_glass() {
      return C994 || CT.C994;
    },
    /*items.Items.white_stained_glass_pane*/get white_stained_glass_pane() {
      return C995 || CT.C995;
    },
    /*items.Items.white_terracotta*/get white_terracotta() {
      return C996 || CT.C996;
    },
    /*items.Items.white_tulip*/get white_tulip() {
      return C997 || CT.C997;
    },
    /*items.Items.white_wool*/get white_wool() {
      return C998 || CT.C998;
    },
    /*items.Items.witch_spawn_egg*/get witch_spawn_egg() {
      return C999 || CT.C999;
    },
    /*items.Items.wither_rose*/get wither_rose() {
      return C1000 || CT.C1000;
    },
    /*items.Items.wither_skeleton_skull*/get wither_skeleton_skull() {
      return C1001 || CT.C1001;
    },
    /*items.Items.wither_skeleton_spawn_egg*/get wither_skeleton_spawn_egg() {
      return C1002 || CT.C1002;
    },
    /*items.Items.wolf_spawn_egg*/get wolf_spawn_egg() {
      return C1003 || CT.C1003;
    },
    /*items.Items.wooden_axe*/get wooden_axe() {
      return C1004 || CT.C1004;
    },
    /*items.Items.wooden_hoe*/get wooden_hoe() {
      return C1005 || CT.C1005;
    },
    /*items.Items.wooden_pickaxe*/get wooden_pickaxe() {
      return C1006 || CT.C1006;
    },
    /*items.Items.wooden_shovel*/get wooden_shovel() {
      return C1007 || CT.C1007;
    },
    /*items.Items.wooden_sword*/get wooden_sword() {
      return C1008 || CT.C1008;
    },
    /*items.Items.writable_book*/get writable_book() {
      return C1009 || CT.C1009;
    },
    /*items.Items.written_book*/get written_book() {
      return C1010 || CT.C1010;
    },
    /*items.Items.yellow_banner*/get yellow_banner() {
      return C1011 || CT.C1011;
    },
    /*items.Items.yellow_bed*/get yellow_bed() {
      return C1012 || CT.C1012;
    },
    /*items.Items.yellow_carpet*/get yellow_carpet() {
      return C1013 || CT.C1013;
    },
    /*items.Items.yellow_concrete*/get yellow_concrete() {
      return C1014 || CT.C1014;
    },
    /*items.Items.yellow_concrete_powder*/get yellow_concrete_powder() {
      return C1015 || CT.C1015;
    },
    /*items.Items.yellow_dye*/get yellow_dye() {
      return C1016 || CT.C1016;
    },
    /*items.Items.yellow_glazed_terracotta*/get yellow_glazed_terracotta() {
      return C1017 || CT.C1017;
    },
    /*items.Items.yellow_shulker_box*/get yellow_shulker_box() {
      return C1018 || CT.C1018;
    },
    /*items.Items.yellow_stained_glass*/get yellow_stained_glass() {
      return C1019 || CT.C1019;
    },
    /*items.Items.yellow_stained_glass_pane*/get yellow_stained_glass_pane() {
      return C1020 || CT.C1020;
    },
    /*items.Items.yellow_terracotta*/get yellow_terracotta() {
      return C1021 || CT.C1021;
    },
    /*items.Items.yellow_wool*/get yellow_wool() {
      return C1022 || CT.C1022;
    },
    /*items.Items.zombie_head*/get zombie_head() {
      return C1023 || CT.C1023;
    },
    /*items.Items.zombie_horse_spawn_egg*/get zombie_horse_spawn_egg() {
      return C1024 || CT.C1024;
    },
    /*items.Items.zombie_pigman_spawn_egg*/get zombie_pigman_spawn_egg() {
      return C1025 || CT.C1025;
    },
    /*items.Items.zombie_spawn_egg*/get zombie_spawn_egg() {
      return C1026 || CT.C1026;
    },
    /*items.Items.zombie_villager_spawn_egg*/get zombie_villager_spawn_egg() {
      return C1027 || CT.C1027;
    },
    /*items.Items.ancient_debris*/get ancient_debris() {
      return C1029 || CT.C1029;
    },
    /*items.Items.basalt*/get basalt() {
      return C1030 || CT.C1030;
    },
    /*items.Items.blackstone*/get blackstone() {
      return C1031 || CT.C1031;
    },
    /*items.Items.blackstone_slab*/get blackstone_slab() {
      return C1032 || CT.C1032;
    },
    /*items.Items.blackstone_stairs*/get blackstone_stairs() {
      return C1033 || CT.C1033;
    },
    /*items.Items.blackstone_wall*/get blackstone_wall() {
      return C1034 || CT.C1034;
    },
    /*items.Items.chain*/get chain() {
      return C1035 || CT.C1035;
    },
    /*items.Items.chiseled_nether_bricks*/get chiseled_nether_bricks() {
      return C1036 || CT.C1036;
    },
    /*items.Items.chiseled_polished_blackstone*/get chiseled_polished_blackstone() {
      return C1037 || CT.C1037;
    },
    /*items.Items.cracked_nether_bricks*/get cracked_nether_bricks() {
      return C1038 || CT.C1038;
    },
    /*items.Items.cracked_polished_blackstone_bricks*/get cracked_polished_blackstone_bricks() {
      return C1039 || CT.C1039;
    },
    /*items.Items.crimson_button*/get crimson_button() {
      return C1040 || CT.C1040;
    },
    /*items.Items.crimson_door*/get crimson_door() {
      return C1041 || CT.C1041;
    },
    /*items.Items.crimson_fence*/get crimson_fence() {
      return C1042 || CT.C1042;
    },
    /*items.Items.crimson_fence_gate*/get crimson_fence_gate() {
      return C1043 || CT.C1043;
    },
    /*items.Items.crimson_fungus*/get crimson_fungus() {
      return C1044 || CT.C1044;
    },
    /*items.Items.crimson_hyphae*/get crimson_hyphae() {
      return C1045 || CT.C1045;
    },
    /*items.Items.crimson_nylium*/get crimson_nylium() {
      return C1046 || CT.C1046;
    },
    /*items.Items.crimson_planks*/get crimson_planks() {
      return C1047 || CT.C1047;
    },
    /*items.Items.crimson_pressure_plate*/get crimson_pressure_plate() {
      return C1048 || CT.C1048;
    },
    /*items.Items.crimson_roots*/get crimson_roots() {
      return C1049 || CT.C1049;
    },
    /*items.Items.crimson_sign*/get crimson_sign() {
      return C1050 || CT.C1050;
    },
    /*items.Items.crimson_slab*/get crimson_slab() {
      return C1051 || CT.C1051;
    },
    /*items.Items.crimson_stairs*/get crimson_stairs() {
      return C1052 || CT.C1052;
    },
    /*items.Items.crimson_stem*/get crimson_stem() {
      return C1053 || CT.C1053;
    },
    /*items.Items.crimson_trapdoor*/get crimson_trapdoor() {
      return C1054 || CT.C1054;
    },
    /*items.Items.crying_obsidian*/get crying_obsidian() {
      return C1055 || CT.C1055;
    },
    /*items.Items.gilded_blackstone*/get gilded_blackstone() {
      return C1056 || CT.C1056;
    },
    /*items.Items.hoglin_spawn_egg*/get hoglin_spawn_egg() {
      return C1057 || CT.C1057;
    },
    /*items.Items.lodestone*/get lodestone() {
      return C1058 || CT.C1058;
    },
    /*items.Items.music_disc_pigstep*/get music_disc_pigstep() {
      return C1059 || CT.C1059;
    },
    /*items.Items.nether_gold_ore*/get nether_gold_ore() {
      return C1060 || CT.C1060;
    },
    /*items.Items.nether_sprouts*/get nether_sprouts() {
      return C1061 || CT.C1061;
    },
    /*items.Items.netherite_axe*/get netherite_axe() {
      return C1062 || CT.C1062;
    },
    /*items.Items.netherite_block*/get netherite_block() {
      return C1063 || CT.C1063;
    },
    /*items.Items.netherite_boots*/get netherite_boots() {
      return C1064 || CT.C1064;
    },
    /*items.Items.netherite_chestplate*/get netherite_chestplate() {
      return C1065 || CT.C1065;
    },
    /*items.Items.netherite_helmet*/get netherite_helmet() {
      return C1066 || CT.C1066;
    },
    /*items.Items.netherite_hoe*/get netherite_hoe() {
      return C1067 || CT.C1067;
    },
    /*items.Items.netherite_ingot*/get netherite_ingot() {
      return C1068 || CT.C1068;
    },
    /*items.Items.netherite_leggings*/get netherite_leggings() {
      return C1069 || CT.C1069;
    },
    /*items.Items.netherite_pickaxe*/get netherite_pickaxe() {
      return C1070 || CT.C1070;
    },
    /*items.Items.netherite_scrap*/get netherite_scrap() {
      return C1071 || CT.C1071;
    },
    /*items.Items.netherite_shovel*/get netherite_shovel() {
      return C1072 || CT.C1072;
    },
    /*items.Items.netherite_sword*/get netherite_sword() {
      return C1073 || CT.C1073;
    },
    /*items.Items.piglin_banner_pattern*/get piglin_banner_pattern() {
      return C1074 || CT.C1074;
    },
    /*items.Items.piglin_spawn_egg*/get piglin_spawn_egg() {
      return C1075 || CT.C1075;
    },
    /*items.Items.polished_basalt*/get polished_basalt() {
      return C1076 || CT.C1076;
    },
    /*items.Items.polished_blackstone*/get polished_blackstone() {
      return C1077 || CT.C1077;
    },
    /*items.Items.polished_blackstone_brick_slab*/get polished_blackstone_brick_slab() {
      return C1078 || CT.C1078;
    },
    /*items.Items.polished_blackstone_brick_stairs*/get polished_blackstone_brick_stairs() {
      return C1079 || CT.C1079;
    },
    /*items.Items.polished_blackstone_brick_wall*/get polished_blackstone_brick_wall() {
      return C1080 || CT.C1080;
    },
    /*items.Items.polished_blackstone_bricks*/get polished_blackstone_bricks() {
      return C1081 || CT.C1081;
    },
    /*items.Items.polished_blackstone_button*/get polished_blackstone_button() {
      return C1082 || CT.C1082;
    },
    /*items.Items.polished_blackstone_pressure_plate*/get polished_blackstone_pressure_plate() {
      return C1083 || CT.C1083;
    },
    /*items.Items.polished_blackstone_slab*/get polished_blackstone_slab() {
      return C1084 || CT.C1084;
    },
    /*items.Items.polished_blackstone_stairs*/get polished_blackstone_stairs() {
      return C1085 || CT.C1085;
    },
    /*items.Items.polished_blackstone_wall*/get polished_blackstone_wall() {
      return C1086 || CT.C1086;
    },
    /*items.Items.quartz_bricks*/get quartz_bricks() {
      return C1087 || CT.C1087;
    },
    /*items.Items.respawn_anchor*/get respawn_anchor() {
      return C1088 || CT.C1088;
    },
    /*items.Items.shroomlight*/get shroomlight() {
      return C1089 || CT.C1089;
    },
    /*items.Items.soul_campfire*/get soul_campfire() {
      return C1090 || CT.C1090;
    },
    /*items.Items.soul_lantern*/get soul_lantern() {
      return C1091 || CT.C1091;
    },
    /*items.Items.soul_soil*/get soul_soil() {
      return C1092 || CT.C1092;
    },
    /*items.Items.soul_torch*/get soul_torch() {
      return C1093 || CT.C1093;
    },
    /*items.Items.strider_spawn_egg*/get strider_spawn_egg() {
      return C1094 || CT.C1094;
    },
    /*items.Items.stripped_crimson_hyphae*/get stripped_crimson_hyphae() {
      return C1095 || CT.C1095;
    },
    /*items.Items.stripped_crimson_stem*/get stripped_crimson_stem() {
      return C1096 || CT.C1096;
    },
    /*items.Items.stripped_warped_hyphae*/get stripped_warped_hyphae() {
      return C1097 || CT.C1097;
    },
    /*items.Items.stripped_warped_stem*/get stripped_warped_stem() {
      return C1098 || CT.C1098;
    },
    /*items.Items.target*/get target() {
      return C1099 || CT.C1099;
    },
    /*items.Items.twisting_vines*/get twisting_vines() {
      return C1100 || CT.C1100;
    },
    /*items.Items.warped_button*/get warped_button() {
      return C1101 || CT.C1101;
    },
    /*items.Items.warped_door*/get warped_door() {
      return C1102 || CT.C1102;
    },
    /*items.Items.warped_fence*/get warped_fence() {
      return C1103 || CT.C1103;
    },
    /*items.Items.warped_fence_gate*/get warped_fence_gate() {
      return C1104 || CT.C1104;
    },
    /*items.Items.warped_fungus*/get warped_fungus() {
      return C1105 || CT.C1105;
    },
    /*items.Items.warped_fungus_on_a_stick*/get warped_fungus_on_a_stick() {
      return C1106 || CT.C1106;
    },
    /*items.Items.warped_hyphae*/get warped_hyphae() {
      return C1107 || CT.C1107;
    },
    /*items.Items.warped_nylium*/get warped_nylium() {
      return C1108 || CT.C1108;
    },
    /*items.Items.warped_planks*/get warped_planks() {
      return C1109 || CT.C1109;
    },
    /*items.Items.warped_pressure_plate*/get warped_pressure_plate() {
      return C1110 || CT.C1110;
    },
    /*items.Items.warped_roots*/get warped_roots() {
      return C1111 || CT.C1111;
    },
    /*items.Items.warped_sign*/get warped_sign() {
      return C1112 || CT.C1112;
    },
    /*items.Items.warped_slab*/get warped_slab() {
      return C1113 || CT.C1113;
    },
    /*items.Items.warped_stairs*/get warped_stairs() {
      return C1114 || CT.C1114;
    },
    /*items.Items.warped_stem*/get warped_stem() {
      return C1115 || CT.C1115;
    },
    /*items.Items.warped_trapdoor*/get warped_trapdoor() {
      return C1116 || CT.C1116;
    },
    /*items.Items.warped_wart_block*/get warped_wart_block() {
      return C1117 || CT.C1117;
    },
    /*items.Items.weeping_vines*/get weeping_vines() {
      return C1118 || CT.C1118;
    },
    /*items.Items.zoglin_spawn_egg*/get zoglin_spawn_egg() {
      return C1119 || CT.C1119;
    },
    /*items.Items.zombified_piglin_spawn_egg*/get zombified_piglin_spawn_egg() {
      return C1120 || CT.C1120;
    }
  }, true);
  var _addBoolNbt = dart.privateName(summon, "_addBoolNbt");
  var nbt$0 = dart.privateName(summon, "Summon.nbt");
  var location$1 = dart.privateName(summon, "Summon.location");
  var type$2 = dart.privateName(summon, "Summon.type");
  summon.Summon = class Summon extends rest_action.RestActionAble {
    get nbt() {
      return this[nbt$0];
    }
    set nbt(value) {
      this[nbt$0] = value;
    }
    get location() {
      return this[location$1];
    }
    set location(value) {
      this[location$1] = value;
    }
    get type() {
      return this[type$2];
    }
    set type(value) {
      this[type$2] = value;
    }
    getMap() {
      let ret = collection.LinkedHashMap.from(this.nbt);
      ret[$_set]("id", this.type.type);
      return ret;
    }
    [_addBoolNbt](value, path) {
      if (value != null) this.nbt[$_set](path, dart.test(value) ? 1 : 0);
    }
    generate(context) {
      return new command$.Command.new("summon " + dart.notNull(dart.toString(this.type)) + " " + dart.notNull(dart.toString(this.location)) + " " + dart.notNull(gson.gson.encode(this.nbt)));
    }
  };
  (summon.Summon.new = function(type, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nameVisible = opts && 'nameVisible' in opts ? opts.nameVisible : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let invulnerable = opts && 'invulnerable' in opts ? opts.invulnerable : null;
    let persistent = opts && 'persistent' in opts ? opts.persistent : null;
    let noAI = opts && 'noAI' in opts ? opts.noAI : null;
    let silent = opts && 'silent' in opts ? opts.silent : null;
    let gravity = opts && 'gravity' in opts ? opts.gravity : null;
    let glowing = opts && 'glowing' in opts ? opts.glowing : null;
    let passengers = opts && 'passengers' in opts ? opts.passengers : null;
    let effects = opts && 'effects' in opts ? opts.effects : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let fire = opts && 'fire' in opts ? opts.fire : null;
    let small = opts && 'small' in opts ? opts.small : null;
    let age = opts && 'age' in opts ? opts.age : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    this[type$2] = type;
    this[nbt$0] = nbt;
    this[location$1] = location;
    summon.Summon.__proto__.new.call(this);
    this.location == null ? this.location = new location$.Location.here() : null;
    this.nbt == null ? this.nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    if (name != null) this.nbt[$_set]("CustomName", name.toJson());
    this[_addBoolNbt](invulnerable, "Invulnerable");
    this[_addBoolNbt](silent, "Silent");
    this[_addBoolNbt](small, "Small");
    this[_addBoolNbt](glowing, "Glowing");
    this[_addBoolNbt](nameVisible, "CustomNameVisible");
    this[_addBoolNbt](persistent, "PersistenceRequired");
    this[_addBoolNbt](noAI, "NoAI");
    if (gravity != null) this[_addBoolNbt](!dart.test(gravity), "NoGravity");
    if (tags != null && dart.test(tags[$isNotEmpty])) {
      this.nbt[$_set]("Tags", tag$.Tag.prefix != null ? tags[$map](StringL(), dart.fn(t => t[$contains](tag$.Tag.prefix) ? t : dart.notNull(tag$.Tag.prefix) + dart.notNull(t), StringLToStringL()))[$toList]() : tags);
    }
    if (effects != null && dart.test(effects[$isNotEmpty])) {
      this.nbt[$_set]("ActiveEffects", effects[$map](MapL(), dart.fn(effect => effect.getMap(), EffectLToMapL()))[$toList]());
    }
    if (passengers != null) {
      this.nbt[$_set]("Passengers", passengers[$map](MapL(), dart.fn(pass => pass.getMap(), SummonLToMapL()))[$toList]());
    }
    if (fire != null && dart.notNull(fire) > 0) this.nbt[$_set]("Fire", fire);
    if (rotation != null) this.nbt[$_set]("Rotation", JSArrayOfdoubleL().of([rotation.x, rotation.y]));
    if (age != null) this.nbt[$_set]("Age", age);
  }).prototype = summon.Summon.prototype;
  dart.addTypeTests(summon.Summon);
  dart.addTypeCaches(summon.Summon);
  dart.setMethodSignature(summon.Summon, () => ({
    __proto__: dart.getMethods(summon.Summon.__proto__),
    getMap: dart.fnType(dart.legacy(core.Map), []),
    [_addBoolNbt]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(summon.Summon, L29);
  dart.setFieldSignature(summon.Summon, () => ({
    __proto__: dart.getFields(summon.Summon.__proto__),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    location: dart.fieldType(dart.legacy(location$.Location)),
    type: dart.fieldType(dart.legacy(entity$.EntityType))
  }));
  var _type$ = dart.privateName(effect$, "_type");
  var effect$0 = dart.privateName(effect$, "Effect.effect");
  var entity$0 = dart.privateName(effect$, "Effect.entity");
  var duration$ = dart.privateName(effect$, "Effect.duration");
  var amplifier$ = dart.privateName(effect$, "Effect.amplifier");
  var showParticles$ = dart.privateName(effect$, "Effect.showParticles");
  effect$.Effect = class Effect extends rest_action.RestActionAble {
    get effect() {
      return this[effect$0];
    }
    set effect(value) {
      this[effect$0] = value;
    }
    get entity() {
      return this[entity$0];
    }
    set entity(value) {
      this[entity$0] = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get amplifier() {
      return this[amplifier$];
    }
    set amplifier(value) {
      this[amplifier$] = value;
    }
    get showParticles() {
      return this[showParticles$];
    }
    set showParticles(value) {
      this[showParticles$] = value;
    }
    getMap() {
      let ret = new _js_helper.LinkedMap.new();
      ret[$_set]("Id", dart.notNull(effect$.EffectType.values[$indexOf](this.effect)) + 1);
      ret[$_set]("Amplifier", new values.Byte.new(this.amplifier != null ? dart.notNull(this.amplifier) - 1 : 0));
      ret[$_set]("Duration", this.duration != null ? dart.notNull(this.duration) * 20 : 0);
      ret[$_set]("ShowParticles", new values.Byte.new(this.showParticles != null && dart.test(this.showParticles) ? 1 : 0));
      return ret;
    }
    generate(context) {
      if (this[_type$] === "clear") {
        return new command$.Command.new("effect clear " + dart.str(this.entity) + (this.effect != null ? " minecraft:" + dart.notNull(dart.toString(this.effect)[$split](".")[$_get](1)) : ""));
      } else {
        return new command$.Command.new("effect give " + dart.str(this.entity) + " minecraft:" + dart.notNull(dart.toString(this.effect)[$split](".")[$_get](1)) + (" " + dart.str(this.duration) + " " + dart.str(this.amplifier) + " " + dart.str(!dart.test(this.showParticles))));
      }
    }
  };
  (effect$.Effect.new = function(effect, opts) {
    let entity = opts && 'entity' in opts ? opts.entity : null;
    let duration = opts && 'duration' in opts ? opts.duration : 30;
    let amplifier = opts && 'amplifier' in opts ? opts.amplifier : 1;
    let showParticles = opts && 'showParticles' in opts ? opts.showParticles : true;
    this[_type$] = null;
    this[effect$0] = effect;
    this[entity$0] = entity;
    this[duration$] = duration;
    this[amplifier$] = amplifier;
    this[showParticles$] = showParticles;
    effect$.Effect.__proto__.new.call(this);
    this.entity == null ? this.entity = new entity$.Entity.Selected() : null;
    this[_type$] = "give";
  }).prototype = effect$.Effect.prototype;
  (effect$.Effect.clear = function(entity, effect = null) {
    this[_type$] = null;
    this[showParticles$] = null;
    this[amplifier$] = null;
    this[duration$] = null;
    this[entity$0] = entity;
    this[effect$0] = effect;
    effect$.Effect.__proto__.new.call(this);
    this[_type$] = "clear";
  }).prototype = effect$.Effect.prototype;
  dart.addTypeTests(effect$.Effect);
  dart.addTypeCaches(effect$.Effect);
  dart.setMethodSignature(effect$.Effect, () => ({
    __proto__: dart.getMethods(effect$.Effect.__proto__),
    getMap: dart.fnType(dart.legacy(core.Map), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(effect$.Effect, L30);
  dart.setFieldSignature(effect$.Effect, () => ({
    __proto__: dart.getFields(effect$.Effect.__proto__),
    effect: dart.fieldType(dart.legacy(effect$.EffectType)),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    duration: dart.fieldType(dart.legacy(core.int)),
    amplifier: dart.fieldType(dart.legacy(core.int)),
    showParticles: dart.fieldType(dart.legacy(core.bool)),
    [_type$]: dart.fieldType(dart.legacy(core.String))
  }));
  var _name$3 = dart.privateName(effect$, "_name");
  var C1121;
  var C1122;
  var C1123;
  var C1124;
  var C1125;
  var C1126;
  var C1127;
  var C1128;
  var C1129;
  var C1130;
  var C1131;
  var C1132;
  var C1133;
  var C1134;
  var C1135;
  var C1136;
  var C1137;
  var C1138;
  var C1139;
  var C1140;
  var C1141;
  var C1142;
  var C1143;
  var C1144;
  var C1145;
  var C1146;
  var C1147;
  var C1148;
  var C1149;
  var C1150;
  var C1151;
  var C1152;
  effect$.EffectType = class EffectType extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (effect$.EffectType.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = effect$.EffectType.prototype;
  dart.addTypeTests(effect$.EffectType);
  dart.addTypeCaches(effect$.EffectType);
  dart.setMethodSignature(effect$.EffectType, () => ({
    __proto__: dart.getMethods(effect$.EffectType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(effect$.EffectType, L30);
  dart.setFieldSignature(effect$.EffectType, () => ({
    __proto__: dart.getFields(effect$.EffectType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$3]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(effect$.EffectType, ['toString']);
  effect$.EffectType.speed = C1121 || CT.C1121;
  effect$.EffectType.slowness = C1122 || CT.C1122;
  effect$.EffectType.haste = C1123 || CT.C1123;
  effect$.EffectType.mining_fatigue = C1124 || CT.C1124;
  effect$.EffectType.strength = C1125 || CT.C1125;
  effect$.EffectType.instant_health = C1126 || CT.C1126;
  effect$.EffectType.instant_damage = C1127 || CT.C1127;
  effect$.EffectType.jump_boost = C1128 || CT.C1128;
  effect$.EffectType.nausea = C1129 || CT.C1129;
  effect$.EffectType.regeneration = C1130 || CT.C1130;
  effect$.EffectType.resistance = C1131 || CT.C1131;
  effect$.EffectType.fire_resistance = C1132 || CT.C1132;
  effect$.EffectType.water_breathing = C1133 || CT.C1133;
  effect$.EffectType.invisibility = C1134 || CT.C1134;
  effect$.EffectType.blindness = C1135 || CT.C1135;
  effect$.EffectType.night_vision = C1136 || CT.C1136;
  effect$.EffectType.hunger = C1137 || CT.C1137;
  effect$.EffectType.weakness = C1138 || CT.C1138;
  effect$.EffectType.poison = C1139 || CT.C1139;
  effect$.EffectType.wither = C1140 || CT.C1140;
  effect$.EffectType.health_boost = C1141 || CT.C1141;
  effect$.EffectType.absorption = C1142 || CT.C1142;
  effect$.EffectType.saturation = C1143 || CT.C1143;
  effect$.EffectType.glowing = C1144 || CT.C1144;
  effect$.EffectType.levitation = C1145 || CT.C1145;
  effect$.EffectType.luck = C1146 || CT.C1146;
  effect$.EffectType.unluck = C1147 || CT.C1147;
  effect$.EffectType.slow_falling = C1148 || CT.C1148;
  effect$.EffectType.conduit_power = C1149 || CT.C1149;
  effect$.EffectType.dolphins_grace = C1150 || CT.C1150;
  effect$.EffectType.bad_omen = C1151 || CT.C1151;
  effect$.EffectType.values = C1152 || CT.C1152;
  var value$0 = dart.privateName(text_components, "TextComponent.value");
  var color$ = dart.privateName(text_components, "TextComponent.color");
  var bold$ = dart.privateName(text_components, "TextComponent.bold");
  var underlined$ = dart.privateName(text_components, "TextComponent.underlined");
  var strikethrough$ = dart.privateName(text_components, "TextComponent.strikethrough");
  var obfuscated$ = dart.privateName(text_components, "TextComponent.obfuscated");
  var italic$ = dart.privateName(text_components, "TextComponent.italic");
  var clickEvent$ = dart.privateName(text_components, "TextComponent.clickEvent");
  var hoverEvent$ = dart.privateName(text_components, "TextComponent.hoverEvent");
  var insertion$ = dart.privateName(text_components, "TextComponent.insertion");
  text_components.TextComponent = class TextComponent extends core.Object {
    get value() {
      return this[value$0];
    }
    set value(value) {
      this[value$0] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    get bold() {
      return this[bold$];
    }
    set bold(value) {
      this[bold$] = value;
    }
    get underlined() {
      return this[underlined$];
    }
    set underlined(value) {
      this[underlined$] = value;
    }
    get strikethrough() {
      return this[strikethrough$];
    }
    set strikethrough(value) {
      this[strikethrough$] = value;
    }
    get obfuscated() {
      return this[obfuscated$];
    }
    set obfuscated(value) {
      this[obfuscated$] = value;
    }
    get italic() {
      return this[italic$];
    }
    set italic(value) {
      this[italic$] = value;
    }
    get clickEvent() {
      return this[clickEvent$];
    }
    set clickEvent(value) {
      this[clickEvent$] = value;
    }
    get hoverEvent() {
      return this[hoverEvent$];
    }
    set hoverEvent(value) {
      this[hoverEvent$] = value;
    }
    get insertion() {
      return this[insertion$];
    }
    set insertion(value) {
      this[insertion$] = value;
    }
    toMap() {
      if (dart.test(this.value[$containsKey]("text")) && this.value[$_get]("text") == null) return null;
      let ret = new _js_helper.LinkedMap.new();
      ret[$addAll](this.value);
      if (this.color != null) ret[$_set]("color", dart.toString(this.color));
      if (this.bold != null) ret[$_set]("bold", this.bold);
      if (this.italic != null) ret[$_set]("italic", this.italic);
      if (this.underlined != null) ret[$_set]("underlined", this.underlined);
      if (this.strikethrough != null) ret[$_set]("strikethrough", this.strikethrough);
      if (this.obfuscated != null) ret[$_set]("obfuscated", this.obfuscated);
      if (this.clickEvent != null) ret[$_set]("clickEvent", this.clickEvent.toMap());
      if (this.hoverEvent != null) ret[$_set]("hoverEvent", this.hoverEvent.toMap());
      if (this.insertion != null) ret[$_set]("insertion", this.insertion);
      return ret;
    }
    toJson() {
      let m = this.toMap();
      return m != null ? convert.json.encode(m)[$replaceAll]("\\[repl]\\", "\\") : null;
    }
  };
  (text_components.TextComponent.new = function(text, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["text", text]);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.lineBreak = function() {
    this[value$0] = null;
    this[insertion$] = null;
    this[hoverEvent$] = null;
    this[clickEvent$] = null;
    this[obfuscated$] = null;
    this[strikethrough$] = null;
    this[italic$] = null;
    this[underlined$] = null;
    this[bold$] = null;
    this[color$] = null;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["text", "\n"]);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.customFont = function(char, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.color == null ? this.color = text_components.Color.White : null;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["text", char]);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.space = function(pixels, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    let nums = new (IdentityMapOfintL$StringL()).from([1, "", 2, "", 3, "", 4, "", 5, "", 6, "", 7, "", 8, "", 16, "", 32, "", 64, "", 128, "", 256, "", 512, "", 1024, ""]);
    let negnums = new (IdentityMapOfintL$StringL()).from([-1024, "", -512, "", -256, "", -128, "", -64, "", -32, "", -16, "", -8, "", -7, "", -6, "", -5, "", -4, "", -3, "", -2, "", -1, ""]);
    if (pixels === 0) {
      dart.throw("Please insert a pixel amount on how much you want to move characters");
    }
    let res = "";
    if (dart.notNull(pixels) > 0) {
      for (let value of nums[$keys][$toList]()[$reversed]) {
        while (dart.notNull(pixels) >= dart.notNull(value)) {
          res = res + dart.notNull(nums[$_get](value));
          pixels = dart.notNull(pixels) - dart.notNull(value);
        }
      }
    } else {
      for (let value of negnums[$keys]) {
        while (dart.notNull(pixels) <= dart.notNull(value)) {
          res = res + dart.notNull(negnums[$_get](value));
          pixels = dart.notNull(pixels) - dart.notNull(value);
        }
      }
    }
    this.value = new (IdentityMapOfStringL$dynamic()).from(["text", res]);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.translate = function(key, opts) {
    let conversionFlags = opts && 'conversionFlags' in opts ? opts.conversionFlags : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[italic$] = italic;
    this[underlined$] = underlined;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["translate", key]);
    if (conversionFlags != null && dart.test(conversionFlags[$isNotEmpty])) {
      this.value[$_set]("with", []);
      conversionFlags[$forEach](dart.fn(c => {
        if (ListLOfTextComponentL().is(c)) {
          dart.dsend(this.value[$_get]("with"), 'add', [c[$map](MapL(), dart.fn(x => x.toMap(), TextComponentLToMapL()))[$toList]()]);
        }
        if (TextComponentL().is(c)) dart.dsend(this.value[$_get]("with"), 'add', [c.toMap()]);
        if (StringL().is(c)) dart.dsend(this.value[$_get]("with"), 'add', [new text_components.TextComponent.new(c).toMap()]);
      }, dynamicToNullN()));
    }
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.score = function(score, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[italic$] = italic;
    this[underlined$] = underlined;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["score", new (IdentityMapOfStringL$StringL()).from(["name", dart.toString(score.entity), "objective", score.score])]);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.entityNbt = function(entity, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let interpret = opts && 'interpret' in opts ? opts.interpret : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["nbt", path, "entity", dart.toString(entity)]);
    if (interpret != null) this.value[$_set]("interpret", interpret);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.blockNbt = function(location, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let interpret = opts && 'interpret' in opts ? opts.interpret : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["nbt", path, "block", dart.toString(location)]);
    if (interpret != null) this.value[$_set]("interpret", interpret);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.storageNbt = function(name, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let interpret = opts && 'interpret' in opts ? opts.interpret : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["nbt", path, "storage", name]);
    if (interpret != null) this.value[$_set]("interpret", interpret);
  }).prototype = text_components.TextComponent.prototype;
  (text_components.TextComponent.selector = function(entity, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let bold = opts && 'bold' in opts ? opts.bold : null;
    let underlined = opts && 'underlined' in opts ? opts.underlined : null;
    let italic = opts && 'italic' in opts ? opts.italic : null;
    let strikethrough = opts && 'strikethrough' in opts ? opts.strikethrough : null;
    let obfuscated = opts && 'obfuscated' in opts ? opts.obfuscated : null;
    let clickEvent = opts && 'clickEvent' in opts ? opts.clickEvent : null;
    let hoverEvent = opts && 'hoverEvent' in opts ? opts.hoverEvent : null;
    let insertion = opts && 'insertion' in opts ? opts.insertion : null;
    this[value$0] = null;
    this[color$] = color;
    this[bold$] = bold;
    this[underlined$] = underlined;
    this[italic$] = italic;
    this[strikethrough$] = strikethrough;
    this[obfuscated$] = obfuscated;
    this[clickEvent$] = clickEvent;
    this[hoverEvent$] = hoverEvent;
    this[insertion$] = insertion;
    this.value = new (IdentityMapOfStringL$dynamic()).from(["selector", dart.toString(entity)]);
  }).prototype = text_components.TextComponent.prototype;
  dart.addTypeTests(text_components.TextComponent);
  dart.addTypeCaches(text_components.TextComponent);
  dart.setMethodSignature(text_components.TextComponent, () => ({
    __proto__: dart.getMethods(text_components.TextComponent.__proto__),
    toMap: dart.fnType(dart.legacy(core.Map), []),
    toJson: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(text_components.TextComponent, L31);
  dart.setFieldSignature(text_components.TextComponent, () => ({
    __proto__: dart.getFields(text_components.TextComponent.__proto__),
    value: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    color: dart.fieldType(dart.legacy(text_components.Color)),
    bold: dart.fieldType(dart.legacy(core.bool)),
    underlined: dart.fieldType(dart.legacy(core.bool)),
    strikethrough: dart.fieldType(dart.legacy(core.bool)),
    obfuscated: dart.fieldType(dart.legacy(core.bool)),
    italic: dart.fieldType(dart.legacy(core.bool)),
    clickEvent: dart.fieldType(dart.legacy(text_components.TextClickEvent)),
    hoverEvent: dart.fieldType(dart.legacy(text_components.TextHoverEvent)),
    insertion: dart.fieldType(dart.legacy(core.String))
  }));
  var action$ = dart.privateName(text_components, "TextClickEvent.action");
  var value$1 = dart.privateName(text_components, "TextClickEvent.value");
  text_components.TextClickEvent = class TextClickEvent extends core.Object {
    get action() {
      return this[action$];
    }
    set action(value) {
      this[action$] = value;
    }
    get value() {
      return this[value$1];
    }
    set value(value) {
      this[value$1] = value;
    }
    toMap() {
      return new (IdentityMapOfStringL$StringL()).from(["action", this.action, "value", this.value]);
    }
  };
  (text_components.TextClickEvent.new = function(opts) {
    let action = opts && 'action' in opts ? opts.action : null;
    let value = opts && 'value' in opts ? opts.value : null;
    this[action$] = action;
    this[value$1] = value;
    if (!(value != null)) dart.assertFailed(null, L32, 349, 16, "value != null");
    if (!(action != null)) dart.assertFailed(null, L32, 350, 16, "action != null");
    ;
  }).prototype = text_components.TextClickEvent.prototype;
  (text_components.TextClickEvent.open_url = function(url) {
    this[value$1] = null;
    this[action$] = null;
    this.action = "open_url";
    this.value = url;
  }).prototype = text_components.TextClickEvent.prototype;
  (text_components.TextClickEvent.run_command = function(command) {
    let t5;
    this[value$1] = null;
    this[action$] = null;
    this.action = "run_command";
    this.value = "/" + dart.notNull((t5 = command.toMap()[$_get]("command"), t5 == null ? "" : t5));
  }).prototype = text_components.TextClickEvent.prototype;
  (text_components.TextClickEvent.suggest = function(text) {
    this[value$1] = null;
    this[action$] = null;
    this.action = "suggest_command";
    this.value = text;
  }).prototype = text_components.TextClickEvent.prototype;
  (text_components.TextClickEvent.change_page = function(to) {
    this[value$1] = null;
    this[action$] = null;
    this.action = "change_page";
    this.value = dart.toString(to);
  }).prototype = text_components.TextClickEvent.prototype;
  dart.addTypeTests(text_components.TextClickEvent);
  dart.addTypeCaches(text_components.TextClickEvent);
  dart.setMethodSignature(text_components.TextClickEvent, () => ({
    __proto__: dart.getMethods(text_components.TextClickEvent.__proto__),
    toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), [])
  }));
  dart.setLibraryUri(text_components.TextClickEvent, L31);
  dart.setFieldSignature(text_components.TextClickEvent, () => ({
    __proto__: dart.getFields(text_components.TextClickEvent.__proto__),
    action: dart.fieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.legacy(core.String))
  }));
  var action$0 = dart.privateName(text_components, "TextHoverEvent.action");
  var value$2 = dart.privateName(text_components, "TextHoverEvent.value");
  text_components.TextHoverEvent = class TextHoverEvent extends core.Object {
    get action() {
      return this[action$0];
    }
    set action(value) {
      this[action$0] = value;
    }
    get value() {
      return this[value$2];
    }
    set value(value) {
      this[value$2] = value;
    }
    toMap() {
      return new (IdentityMapOfStringL$dynamic()).from(["action", this.action, "value", this.value]);
    }
  };
  (text_components.TextHoverEvent.new = function(opts) {
    let action = opts && 'action' in opts ? opts.action : null;
    let value = opts && 'value' in opts ? opts.value : null;
    this[action$0] = action;
    this[value$2] = value;
    if (!(value != null)) dart.assertFailed(null, L32, 388, 16, "value != null");
    if (!(action != null)) dart.assertFailed(null, L32, 389, 16, "action != null");
    ;
  }).prototype = text_components.TextHoverEvent.prototype;
  (text_components.TextHoverEvent.text = function(texts) {
    this[value$2] = null;
    this[action$0] = null;
    this.action = "show_text";
    this.value = texts[$map](MapL(), dart.fn(item => item.toMap(), TextComponentLToMapL()))[$toList]();
  }).prototype = text_components.TextHoverEvent.prototype;
  (text_components.TextHoverEvent.achievement = function(name) {
    this[value$2] = null;
    this[action$0] = null;
    this.action = "show_achievement";
    this.value = name;
  }).prototype = text_components.TextHoverEvent.prototype;
  (text_components.TextHoverEvent.item = function(item) {
    this[value$2] = null;
    this[action$0] = null;
    this.action = "show_item";
    this.value = dart.toString(item);
  }).prototype = text_components.TextHoverEvent.prototype;
  (text_components.TextHoverEvent.entity = function(name, type, id) {
    this[value$2] = null;
    this[action$0] = null;
    this.action = "show_entity";
    this.value = convert.json.encode(new (IdentityMapOfStringL$StringL()).from(["name", name, "type", type, "id", id]));
  }).prototype = text_components.TextHoverEvent.prototype;
  dart.addTypeTests(text_components.TextHoverEvent);
  dart.addTypeCaches(text_components.TextHoverEvent);
  dart.setMethodSignature(text_components.TextHoverEvent, () => ({
    __proto__: dart.getMethods(text_components.TextHoverEvent.__proto__),
    toMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [])
  }));
  dart.setLibraryUri(text_components.TextHoverEvent, L31);
  dart.setFieldSignature(text_components.TextHoverEvent, () => ({
    __proto__: dart.getFields(text_components.TextHoverEvent.__proto__),
    action: dart.fieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.dynamic)
  }));
  var _color = dart.privateName(text_components, "_color");
  var _color$ = dart.privateName(text_components, "Color._color");
  var C1153;
  var C1154;
  var C1155;
  var C1156;
  var C1157;
  var C1158;
  var C1159;
  var C1160;
  var C1161;
  var C1162;
  var C1163;
  var C1164;
  var C1165;
  var C1166;
  var C1167;
  var C1168;
  text_components.Color = class Color extends core.Object {
    get [_color]() {
      return this[_color$];
    }
    set [_color](value) {
      super[_color] = value;
    }
    static fromInt(color) {
      return new text_components.Color.new("#" + color[$toRadixString](16)[$padLeft](4, "0"));
    }
    static fromRGB(r, g, b) {
      r = dart.notNull(r) < 0 ? -dart.notNull(r) : r;
      g = dart.notNull(g) < 0 ? -dart.notNull(g) : g;
      b = dart.notNull(b) < 0 ? -dart.notNull(b) : b;
      r = dart.notNull(r) > 255 ? 255 : r;
      g = dart.notNull(g) > 255 ? 255 : g;
      b = dart.notNull(b) > 255 ? 255 : b;
      return text_components.Color.fromInt((dart.notNull(r) & 255) << 16 | (dart.notNull(g) & 255) << 8 | dart.notNull(b) & 255);
    }
    toString() {
      return this[_color];
    }
  };
  (text_components.Color.new = function(_color) {
    this[_color$] = _color;
    ;
  }).prototype = text_components.Color.prototype;
  dart.addTypeTests(text_components.Color);
  dart.addTypeCaches(text_components.Color);
  dart.setMethodSignature(text_components.Color, () => ({
    __proto__: dart.getMethods(text_components.Color.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(text_components.Color, L31);
  dart.setFieldSignature(text_components.Color, () => ({
    __proto__: dart.getFields(text_components.Color.__proto__),
    [_color]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(text_components.Color, ['toString']);
  dart.defineLazy(text_components.Color, {
    /*text_components.Color.White*/get White() {
      return C1153 || CT.C1153;
    },
    /*text_components.Color.Black*/get Black() {
      return C1154 || CT.C1154;
    },
    /*text_components.Color.DarkBlue*/get DarkBlue() {
      return C1155 || CT.C1155;
    },
    /*text_components.Color.DarkGreen*/get DarkGreen() {
      return C1156 || CT.C1156;
    },
    /*text_components.Color.DarkAqua*/get DarkAqua() {
      return C1157 || CT.C1157;
    },
    /*text_components.Color.DarkRed*/get DarkRed() {
      return C1158 || CT.C1158;
    },
    /*text_components.Color.DarkPurple*/get DarkPurple() {
      return C1159 || CT.C1159;
    },
    /*text_components.Color.Gold*/get Gold() {
      return C1160 || CT.C1160;
    },
    /*text_components.Color.Gray*/get Gray() {
      return C1161 || CT.C1161;
    },
    /*text_components.Color.DarkGray*/get DarkGray() {
      return C1162 || CT.C1162;
    },
    /*text_components.Color.Blue*/get Blue() {
      return C1163 || CT.C1163;
    },
    /*text_components.Color.Green*/get Green() {
      return C1164 || CT.C1164;
    },
    /*text_components.Color.Aqua*/get Aqua() {
      return C1165 || CT.C1165;
    },
    /*text_components.Color.Red*/get Red() {
      return C1166 || CT.C1166;
    },
    /*text_components.Color.LightPurple*/get LightPurple() {
      return C1167 || CT.C1167;
    },
    /*text_components.Color.Yellow*/get Yellow() {
      return C1168 || CT.C1168;
    }
  }, true);
  var _commands$ = dart.privateName(score$, "_commands");
  var _strGen$ = dart.privateName(score$, "_strGen");
  var _match = dart.privateName(score$, "_match");
  var _getESStr = dart.privateName(score$, "_getESStr");
  var entity$1 = dart.privateName(score$, "Score.entity");
  var score$2 = dart.privateName(score$, "Score.score");
  score$.Score = class Score extends rest_action.RestActionAble {
    get entity() {
      return this[entity$1];
    }
    set entity(value) {
      this[entity$1] = value;
    }
    get score() {
      return this[score$2];
    }
    set score(value) {
      this[score$2] = value;
    }
    get commands() {
      return this[_commands$];
    }
    [_getESStr](opts) {
      let entity = opts && 'entity' in opts ? opts.entity : null;
      let score = opts && 'score' in opts ? opts.score : null;
      entity == null ? entity = this.entity : null;
      score == null ? score = this.score : null;
      return dart.notNull(dart.toString(entity)) + " " + dart.notNull(score);
    }
    addCommandRet(command) {
      let commands = ListOfWidgetL().from(this[_commands$]);
      commands[$add](command);
      return new score$.Score.new(this.entity, this.score, {addNew: false, commands: commands});
    }
    ['+'](other) {
      if (intL().is(other)) return this.add(other);
      if (ScoreL().is(other)) return this.addScore(other);
      dart.throw("Please use either a Score or an Int in the operator +");
    }
    ['-'](other) {
      if (intL().is(other)) return this.subtract(other);
      if (ScoreL().is(other)) return this.subtractScore(other);
      dart.throw("Please use either a Score or an Int in the operator -");
    }
    ['%'](other) {
      if (intL().is(other)) {
        return this.modulo(new score$.Score.con(other));
      }
      if (ScoreL().is(other)) return this.modulo(other);
      dart.throw("Please use either a Score or an Int in the operator %");
    }
    ['/'](other) {
      if (intL().is(other)) {
        return this.divideByScore(new score$.Score.con(other));
      }
      if (ScoreL().is(other)) return this.divideByScore(other);
      dart.throw("Please use either a Score or an Int in the operator /");
    }
    ['*'](other) {
      if (intL().is(other)) {
        return this.multiplyByScore(new score$.Score.con(other));
      }
      if (ScoreL().is(other)) return this.multiplyByScore(other);
      dart.throw("Please use either a Score or an Int in the operator /");
    }
    ['>'](other) {
      if (intL().is(other)) {
        return this.matchesRange(new entity$.Range.from(dart.notNull(other) + 1));
      }
      if (ScoreL().is(other)) return this.isBigger(other);
      dart.throw("Please use either a Score or an Int in the operator >");
    }
    ['<'](other) {
      if (intL().is(other)) {
        return this.matchesRange(new entity$.Range.to(dart.notNull(other) + -1));
      }
      if (ScoreL().is(other)) return this.isSmaller(other);
      dart.throw("Please use either a Score or an Int in the operator >");
    }
    ['>='](other) {
      if (intL().is(other)) {
        return this.matchesRange(new entity$.Range.from(other));
      }
      if (ScoreL().is(other)) return this.isBiggerOrEqual(other);
      dart.throw("Please use either a Score or an Int in the operator >=");
    }
    ['<='](other) {
      if (intL().is(other)) {
        return this.matchesRange(new entity$.Range.to(other));
      }
      if (ScoreL().is(other)) return this.isSmallerOrEqual(other);
      dart.throw("Please use either a Score or an Int in the operator <=");
    }
    ['&'](other) {
      if (intL().is(other)) return this.matches(other);
      if (RangeL().is(other)) return this.matchesRange(other);
      if (ScoreL().is(other)) return this.isEqual(other);
      dart.throw("Please use either a Score, Range or an Int in the operator &");
    }
    ['>>'](other) {
      if (intL().is(other)) return this.set(other);
      if (ScoreL().is(other)) return this.setEqual(other);
      if (DataL().is(other)) return this.setToData(other);
      if (ConditionL().is(other)) return this.setToCondition(other);
      if (CommandL().is(other)) return this.setToResult(other);
      dart.throw("Please use either a Score, Data, Condition, Command or an Int in the operator >>");
    }
    set(val) {
      return this.addCommandRet(new command$.Command.new("scoreboard players set " + dart.notNull(this[_getESStr]()) + " " + dart.toString(val)));
    }
    reset() {
      return this.addCommandRet(new command$.Command.new("scoreboard players reset " + dart.notNull(this[_getESStr]())));
    }
    add(val = 1) {
      return this.addCommandRet(new command$.Command.new("scoreboard players add " + dart.notNull(this[_getESStr]()) + " " + dart.toString(val)));
    }
    subtract(val = 1) {
      return this.addCommandRet(new command$.Command.new("scoreboard players remove " + dart.notNull(this[_getESStr]()) + " " + dart.toString(val)));
    }
    get() {
      return this.addCommandRet(new command$.Command.new("scoreboard players get " + dart.notNull(this[_getESStr]())));
    }
    setEqual(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this.isEqual(score).getString())));
    }
    swapWith(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " >< " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    setToSmallest(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this.isSmaller(score).getString())));
    }
    setToBiggest(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this.isBigger(score).getString())));
    }
    addScore(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " += " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    subtractScore(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " -= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    multiplyByScore(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " *= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    divideByScore(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " /= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    modulo(score) {
      return this.addCommandRet(new command$.Command.new("scoreboard players operation " + dart.notNull(this[_getESStr]()) + " %= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score}))));
    }
    setToData(data) {
      let t5;
      if (!dart.test(data.isGetting)) {
        dart.throw("Please set a score to Data.get and not Data." + dart.notNull(data.subcommand));
      }
      return this.addCommandRet(new command$.Command.new("execute store result score " + dart.notNull(this[_getESStr]()) + " run data get " + dart.notNull(data.getTarget()) + " " + dart.notNull(data.path) + " " + dart.toString((t5 = data.scale, t5 == null ? 1 : t5))));
    }
    setToResult(command, opts) {
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      return this.addCommandRet(new command$.Command.new("execute store " + (dart.test(useSuccess) ? "success" : "result") + " score " + dart.notNull(this[_getESStr]()) + " run " + dart.notNull(dart.toString(command.toMap()[$_get]("command")))));
    }
    setToWidget(widget, opts) {
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      return new group.Group.new({prefix: "execute store " + (dart.test(useSuccess) ? "success" : "result") + " score " + dart.notNull(this[_getESStr]()) + " run", children: JSArrayOfWidgetL().of([widget])});
    }
    setToCondition(cond, opts) {
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      return this.addCommandRet(new command$.Command.new("execute store " + (dart.test(useSuccess) ? "success" : "result") + " score " + dart.notNull(this[_getESStr]()) + " " + dart.notNull(condition$.Condition.getPrefixes(cond.getList())[$_get](0))));
    }
    findSmallest(scores, opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      return new for_list.For.new({to: dart.notNull(scores[$length]) - 1, create: dart.fn(i => {
          let ret = this.setToSmallest(scores[$_get](i));
          if (min != null) {
            return new $if.If.new(scores[$_get](i).matchesRange(new entity$.Range.from(min)), {then: JSArrayOfWidgetL().of([ret])});
          }
          return ret;
        }, intLToRestActionAbleL())});
    }
    findBiggest(scores, opts) {
      let max = opts && 'max' in opts ? opts.max : null;
      return new for_list.For.new({to: dart.notNull(scores[$length]) - 1, create: dart.fn(i => {
          let ret = this.setToBiggest(scores[$_get](i));
          if (max != null) {
            return new $if.If.new(scores[$_get](i).matchesRange(new entity$.Range.to(max)), {then: JSArrayOfWidgetL().of([ret])});
          }
          return ret;
        }, intLToRestActionAbleL())});
    }
    isEqual(score) {
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " = " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score})));
    }
    isSmaller(score) {
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " < " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score})));
    }
    isSmallerOrEqual(score) {
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " <= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score})));
    }
    isBiggerOrEqual(score) {
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " >= " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score})));
    }
    isBigger(score) {
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " > " + dart.notNull(this[_getESStr]({entity: score.entity, score: score.score})));
    }
    getMatch() {
      return this[_match];
    }
    matches(value) {
      this[_match] = dart.toString(value);
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " matches " + dart.notNull(this[_match]), {score: this.score, match: this[_match]});
    }
    matchesRange(range) {
      this[_match] = dart.toString(range);
      return new score$.Score.str(dart.notNull(this[_getESStr]()) + " matches " + dart.notNull(this[_match]), {score: this.score, match: this[_match]});
    }
    generate(context) {
      return new for_list.For.of(this[_commands$]);
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["Score", new for_list.For.of(this[_commands$]).toMap()]);
    }
    getString() {
      return this[_strGen$];
    }
  };
  (score$.Score.new = function(entity, score, opts) {
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    let commands = opts && 'commands' in opts ? opts.commands : null;
    this[_commands$] = JSArrayOfWidgetL().of([]);
    this[_strGen$] = "";
    this[_match] = "0";
    this[entity$1] = entity;
    this[score$2] = score;
    score$.Score.__proto__.new.call(this);
    if (commands != null) this[_commands$] = commands;
    if (dart.test(addNew)) {
      this[_commands$][$add](new scoreboard.Scoreboard.new(this.score));
    }
    if (scoreboard.Scoreboard.prefix != null && !this.score[$contains](scoreboard.Scoreboard.prefix)) {
      this.score = dart.notNull(scoreboard.Scoreboard.prefix) + dart.notNull(this.score);
    }
  }).prototype = score$.Score.prototype;
  (score$.Score.fromSelected = function(score, opts) {
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[_commands$] = JSArrayOfWidgetL().of([]);
    this[_strGen$] = "";
    this[_match] = "0";
    this[entity$1] = null;
    this[score$2] = score;
    score$.Score.__proto__.new.call(this);
    this.entity = new entity$.Entity.Selected();
    if (dart.test(addNew)) {
      this[_commands$][$add](new scoreboard.Scoreboard.new(this.score));
    }
    if (scoreboard.Scoreboard.prefix != null && !this.score[$contains](scoreboard.Scoreboard.prefix)) {
      this.score = dart.notNull(scoreboard.Scoreboard.prefix) + dart.notNull(this.score);
    }
  }).prototype = score$.Score.prototype;
  (score$.Score.str = function(_strGen, opts) {
    let score = opts && 'score' in opts ? opts.score : "";
    let match = opts && 'match' in opts ? opts.match : "0";
    this[_commands$] = JSArrayOfWidgetL().of([]);
    this[_strGen$] = "";
    this[_match] = "0";
    this[entity$1] = null;
    this[_strGen$] = _strGen;
    this[score$2] = score;
    score$.Score.__proto__.new.call(this);
    this[_match] = match;
  }).prototype = score$.Score.prototype;
  (score$.Score.con = function(number, opts) {
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[_commands$] = JSArrayOfWidgetL().of([]);
    this[_strGen$] = "";
    this[_match] = "0";
    this[score$2] = null;
    this[entity$1] = null;
    score$.Score.__proto__.new.call(this);
    this.score = "objd_consts";
    if (scoreboard.Scoreboard.prefix != null && !this.score[$contains](scoreboard.Scoreboard.prefix)) {
      this.score = dart.notNull(scoreboard.Scoreboard.prefix) + dart.notNull(this.score);
    }
    this.entity = new entity$.Entity.PlayerName("#" + dart.toString(number));
    if (dart.test(addNew)) {
      this[_commands$][$add](new scoreboard.Scoreboard.new(this.score));
    }
    this[_commands$][$add](this.set(number));
  }).prototype = score$.Score.prototype;
  dart.addTypeTests(score$.Score);
  dart.addTypeCaches(score$.Score);
  dart.setMethodSignature(score$.Score, () => ({
    __proto__: dart.getMethods(score$.Score.__proto__),
    [_getESStr]: dart.fnType(dart.legacy(core.String), [], {entity: dart.legacy(entity$.Entity), score: dart.legacy(core.String)}, {}),
    addCommandRet: dart.fnType(dart.legacy(score$.Score), [dart.legacy(command$.Command)]),
    '+': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '-': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '%': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '/': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '*': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '>': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '<': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '>=': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '<=': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '&': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    '>>': dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    set: dart.fnType(dart.legacy(score$.Score), [dart.legacy(core.int)]),
    reset: dart.fnType(dart.legacy(score$.Score), []),
    add: dart.fnType(dart.legacy(score$.Score), [], [dart.legacy(core.int)]),
    subtract: dart.fnType(dart.legacy(score$.Score), [], [dart.legacy(core.int)]),
    get: dart.fnType(dart.legacy(score$.Score), []),
    setEqual: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    swapWith: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    setToSmallest: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    setToBiggest: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    addScore: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    subtractScore: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    multiplyByScore: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    divideByScore: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    modulo: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    setToData: dart.fnType(dart.legacy(score$.Score), [dart.legacy(data$.Data)]),
    setToResult: dart.fnType(dart.legacy(score$.Score), [dart.legacy(command$.Command)], {useSuccess: dart.legacy(core.bool)}, {}),
    setToWidget: dart.fnType(dart.legacy(group.Group), [dart.legacy(widget.Widget)], {useSuccess: dart.legacy(core.bool)}, {}),
    setToCondition: dart.fnType(dart.legacy(score$.Score), [dart.legacy(condition$.Condition)], {useSuccess: dart.legacy(core.bool)}, {}),
    findSmallest: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(core.List$(dart.legacy(score$.Score)))], {min: dart.legacy(core.int)}, {}),
    findBiggest: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(core.List$(dart.legacy(score$.Score)))], {max: dart.legacy(core.int)}, {}),
    isEqual: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    isSmaller: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    isSmallerOrEqual: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    isBiggerOrEqual: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    isBigger: dart.fnType(dart.legacy(score$.Score), [dart.legacy(score$.Score)]),
    getMatch: dart.fnType(dart.legacy(core.String), []),
    matches: dart.fnType(dart.legacy(score$.Score), [dart.legacy(core.int)]),
    matchesRange: dart.fnType(dart.legacy(score$.Score), [dart.legacy(entity$.Range)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), []),
    getString: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(score$.Score, () => ({
    __proto__: dart.getGetters(score$.Score.__proto__),
    commands: dart.legacy(core.List$(dart.legacy(widget.Widget)))
  }));
  dart.setLibraryUri(score$.Score, L33);
  dart.setFieldSignature(score$.Score, () => ({
    __proto__: dart.getFields(score$.Score.__proto__),
    [_commands$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    score: dart.fieldType(dart.legacy(core.String)),
    [_strGen$]: dart.fieldType(dart.legacy(core.String)),
    [_match]: dart.fieldType(dart.legacy(core.String))
  }));
  var _getTagVersion = dart.privateName($if, "_getTagVersion");
  var conds = dart.privateName($if, "If.conds");
  var then$1 = dart.privateName($if, "If.then");
  var orElse$ = dart.privateName($if, "If.orElse");
  var elseWidget = dart.privateName($if, "If.elseWidget");
  var invert = dart.privateName($if, "If.invert");
  var assignTag$ = dart.privateName($if, "If.assignTag");
  var useTag$ = dart.privateName($if, "If.useTag");
  var encapsulate$0 = dart.privateName($if, "If.encapsulate");
  var targetFilePath$0 = dart.privateName($if, "If.targetFilePath");
  var targetFileName$0 = dart.privateName($if, "If.targetFileName");
  var predicate$ = dart.privateName($if, "If.predicate");
  $if.If = class If extends rest_action.RestActionAble {
    get conds() {
      return this[conds];
    }
    set conds(value) {
      this[conds] = value;
    }
    get then() {
      return this[then$1];
    }
    set then(value) {
      this[then$1] = value;
    }
    get orElse() {
      return this[orElse$];
    }
    set orElse(value) {
      this[orElse$] = value;
    }
    get elseWidget() {
      return this[elseWidget];
    }
    set elseWidget(value) {
      this[elseWidget] = value;
    }
    get invert() {
      return this[invert];
    }
    set invert(value) {
      this[invert] = value;
    }
    get assignTag() {
      return this[assignTag$];
    }
    set assignTag(value) {
      this[assignTag$] = value;
    }
    get useTag() {
      return this[useTag$];
    }
    set useTag(value) {
      super.useTag = value;
    }
    get encapsulate() {
      return this[encapsulate$0];
    }
    set encapsulate(value) {
      this[encapsulate$0] = value;
    }
    get targetFilePath() {
      return this[targetFilePath$0];
    }
    set targetFilePath(value) {
      this[targetFilePath$0] = value;
    }
    get targetFileName() {
      return this[targetFileName$0];
    }
    set targetFileName(value) {
      this[targetFileName$0] = value;
    }
    get predicate() {
      return this[predicate$];
    }
    set predicate(value) {
      this[predicate$] = value;
    }
    getCondition(condition) {
      if (PredicateL().is(condition)) this.predicate = condition;
      if (ConditionL().is(condition)) {
        this.conds = condition.getList();
      } else {
        this.conds = new condition$.Condition.new(condition).getList();
      }
    }
    generate(context) {
      let prefixes = condition$.Condition.getPrefixes(this.conds, this.invert);
      let children = JSArrayOfWidgetL().of([]);
      if (this.orElse != null || dart.notNull(prefixes[$length]) >= 2 || this.assignTag != null) {
        this.assignTag == null ? this.assignTag = new entity$.Entity.Player() : null;
        if (dart.notNull(this.then[$length]) > 2 && context.file[$isNotEmpty]) {
          this.then[$insert](0, new comment.Comment.new("If statement from file: " + dart.notNull(context.file)));
        }
        if (this.orElse != null && dart.notNull(this.orElse[$length]) > 2 && context.file[$isNotEmpty]) {
          this.orElse[$insert](0, new comment.Comment.new("Else statement from file: " + dart.notNull(context.file)));
        }
        children = this[_getTagVersion](prefixes);
      } else {
        prefixes[$forEach](dart.fn(prefix => {
          let t5;
          children[$add](new group.Group.new({prefix: "execute " + dart.notNull(prefix) + " run", path: this.targetFilePath, generateIDs: this.targetFileName == null, filename: (t5 = this.targetFileName, t5 == null ? "if" : t5), groupMin: dart.test(this.encapsulate) ? 3 : -1, children: this.then}));
        }, StringLToNullN()));
      }
      if (this.elseWidget != null) children[$add](this.elseWidget);
      if (this.predicate != null) children[$add](this.predicate);
      return new for_list.For.of(children);
    }
    [_getTagVersion](prefixes) {
      let t5, t5$;
      let children = JSArrayOfWidgetL().of([]);
      let tag = (t5 = this.useTag, t5 == null ? "objd_isTrue" : t5);
      let id = indexed_file.IndexedFile.getIndexedAndIncrease(tag);
      tag = dart.notNull(tag) + (dart.notNull(id) > 0 ? dart.toString(id) : "");
      prefixes[$forEach](dart.fn(prefix => {
        children[$add](new group.Group.new({prefix: "execute " + dart.notNull(prefix) + " run", children: JSArrayOfWidgetL().of([this.assignTag.addTag(tag)]), groupMin: dart.test(this.encapsulate) ? 3 : -1}));
      }, StringLToNullN()));
      children[$add](new group.Group.new({prefix: "execute as " + dart.notNull(dart.toString(this.assignTag)) + (" if entity @s[tag=" + dart.str(tag) + "] run"), path: this.targetFilePath, generateIDs: this.targetFileName == null, filename: (t5$ = this.targetFileName, t5$ == null ? "if" : t5$), children: this.then}));
      if (this.orElse != null) {
        children[$add](new group.Group.new({prefix: "execute as " + dart.notNull(dart.toString(this.assignTag)) + (" unless entity @s[tag=" + dart.str(tag) + "] run"), path: this.targetFilePath, filename: "else", groupMin: dart.test(this.encapsulate) ? 3 : -1, children: this.orElse}));
      }
      children[$add](this.assignTag.removeTag(tag));
      return children;
    }
  };
  ($if.If.new = function(condition, opts) {
    let then = opts && 'then' in opts ? opts.then : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
    let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    let assignTag = opts && 'assignTag' in opts ? opts.assignTag : null;
    let useTag = opts && 'useTag' in opts ? opts.useTag : "objd_isTrue";
    this[conds] = null;
    this[elseWidget] = null;
    this[invert] = false;
    this[predicate$] = null;
    this[then$1] = then;
    this[orElse$] = orElse;
    this[targetFilePath$0] = targetFilePath;
    this[targetFileName$0] = targetFileName;
    this[encapsulate$0] = encapsulate;
    this[assignTag$] = assignTag;
    this[useTag$] = useTag;
    $if.If.__proto__.new.call(this);
    if (!(this.then != null)) dart.assertFailed(null, L34, 50, 12, "then != null");
    this.getCondition(condition);
  }).prototype = $if.If.prototype;
  ($if.If.not = function(condition, opts) {
    let then = opts && 'then' in opts ? opts.then : null;
    let orElse = opts && 'orElse' in opts ? opts.orElse : null;
    let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
    let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
    let encapsulate = opts && 'encapsulate' in opts ? opts.encapsulate : true;
    let assignTag = opts && 'assignTag' in opts ? opts.assignTag : null;
    let useTag = opts && 'useTag' in opts ? opts.useTag : "objd_isTrue";
    this[conds] = null;
    this[elseWidget] = null;
    this[invert] = false;
    this[predicate$] = null;
    this[then$1] = then;
    this[orElse$] = orElse;
    this[targetFilePath$0] = targetFilePath;
    this[targetFileName$0] = targetFileName;
    this[encapsulate$0] = encapsulate;
    this[assignTag$] = assignTag;
    this[useTag$] = useTag;
    $if.If.__proto__.new.call(this);
    if (!(this.then != null)) dart.assertFailed(null, L34, 73, 12, "then != null");
    if (!dart.test(this.then[$isNotEmpty])) dart.assertFailed(null, L34, 74, 12, "then.isNotEmpty");
    this.invert = true;
    this.getCondition(condition);
  }).prototype = $if.If.prototype;
  dart.addTypeTests($if.If);
  dart.addTypeCaches($if.If);
  dart.setMethodSignature($if.If, () => ({
    __proto__: dart.getMethods($if.If.__proto__),
    getCondition: dart.fnType(dart.void, [dart.dynamic]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    [_getTagVersion]: dart.fnType(dart.legacy(core.List$(dart.legacy(widget.Widget))), [dart.legacy(core.List$(dart.legacy(core.String)))])
  }));
  dart.setLibraryUri($if.If, L35);
  dart.setFieldSignature($if.If, () => ({
    __proto__: dart.getFields($if.If.__proto__),
    conds: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.List)))),
    then: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    orElse: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    elseWidget: dart.fieldType(dart.legacy($if.If)),
    invert: dart.fieldType(dart.legacy(core.bool)),
    assignTag: dart.fieldType(dart.legacy(entity$.Entity)),
    useTag: dart.finalFieldType(dart.legacy(core.String)),
    encapsulate: dart.fieldType(dart.legacy(core.bool)),
    targetFilePath: dart.fieldType(dart.legacy(core.String)),
    targetFileName: dart.fieldType(dart.legacy(core.String)),
    predicate: dart.fieldType(dart.legacy(predicate.Predicate))
  }));
  var prefix$ = dart.privateName(group, "Group.prefix");
  var suffix$ = dart.privateName(group, "Group.suffix");
  var filename$ = dart.privateName(group, "Group.filename");
  var path$1 = dart.privateName(group, "Group.path");
  var children$0 = dart.privateName(group, "Group.children");
  var groupMin$ = dart.privateName(group, "Group.groupMin");
  var generateIDs$ = dart.privateName(group, "Group.generateIDs");
  group.Group = class Group extends rest_action.RestActionAble {
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      this[prefix$] = value;
    }
    get suffix() {
      return this[suffix$];
    }
    set suffix(value) {
      this[suffix$] = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      this[filename$] = value;
    }
    get path() {
      return this[path$1];
    }
    set path(value) {
      this[path$1] = value;
    }
    get children() {
      return this[children$0];
    }
    set children(value) {
      this[children$0] = value;
    }
    get groupMin() {
      return this[groupMin$];
    }
    set groupMin(value) {
      this[groupMin$] = value;
    }
    get generateIDs() {
      return this[generateIDs$];
    }
    set generateIDs(value) {
      this[generateIDs$] = value;
    }
    generate(context) {
      if (dart.notNull(this.groupMin) > -1 && dart.test(this.children[$isNotEmpty]) && dart.notNull(this.children[$length]) >= dart.notNull(this.groupMin)) {
        return new indexed_file.IndexedFile.new(dart.test(this.generateIDs) && this.filename != null ? this.filename : "group", {execute: true, child: new for_list.For.of(this.children), custom: dart.test(this.generateIDs) && this.filename != null ? null : this.filename, path: this.path});
      }
      return new for_list.For.of(this.children);
    }
  };
  (group.Group.new = function(opts) {
    let prefix = opts && 'prefix' in opts ? opts.prefix : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let suffix = opts && 'suffix' in opts ? opts.suffix : null;
    let path = opts && 'path' in opts ? opts.path : "objd";
    let groupMin = opts && 'groupMin' in opts ? opts.groupMin : 3;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let generateIDs = opts && 'generateIDs' in opts ? opts.generateIDs : true;
    this[prefix$] = prefix;
    this[children$0] = children;
    this[suffix$] = suffix;
    this[path$1] = path;
    this[groupMin$] = groupMin;
    this[filename$] = filename;
    this[generateIDs$] = generateIDs;
    if (!(children != null)) dart.assertFailed(null, L36, 40, 15, "children != null");
    group.Group.__proto__.new.call(this);
    ;
  }).prototype = group.Group.prototype;
  dart.addTypeTests(group.Group);
  dart.addTypeCaches(group.Group);
  dart.setMethodSignature(group.Group, () => ({
    __proto__: dart.getMethods(group.Group.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(group.Group, L37);
  dart.setFieldSignature(group.Group, () => ({
    __proto__: dart.getFields(group.Group.__proto__),
    prefix: dart.fieldType(dart.legacy(core.String)),
    suffix: dart.fieldType(dart.legacy(core.String)),
    filename: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    children: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    groupMin: dart.fieldType(dart.legacy(core.int)),
    generateIDs: dart.fieldType(dart.legacy(core.bool))
  }));
  var name$2 = dart.privateName(indexed_file, "IndexedFile.name");
  var custom$ = dart.privateName(indexed_file, "IndexedFile.custom");
  var path$2 = dart.privateName(indexed_file, "IndexedFile.path");
  var pack$0 = dart.privateName(indexed_file, "IndexedFile.pack");
  var child$1 = dart.privateName(indexed_file, "IndexedFile.child");
  var execute$0 = dart.privateName(indexed_file, "IndexedFile.execute");
  indexed_file.IndexedFile = class IndexedFile extends widget.Widget {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    get custom() {
      return this[custom$];
    }
    set custom(value) {
      super.custom = value;
    }
    get path() {
      return this[path$2];
    }
    set path(value) {
      super.path = value;
    }
    get pack() {
      return this[pack$0];
    }
    set pack(value) {
      super.pack = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get execute() {
      return this[execute$0];
    }
    set execute(value) {
      super.execute = value;
    }
    static getIndexed(name) {
      return indexed_file.IndexedFile._indexed[$_get](name) != null && dart.notNull(indexed_file.IndexedFile._indexed[$_get](name)) > 0 ? indexed_file.IndexedFile._indexed[$_get](name) : 0;
    }
    static getIndexedAndIncrease(name) {
      let id = indexed_file.IndexedFile.getIndexed(name);
      indexed_file.IndexedFile._indexed[$_set](name, dart.notNull(id) + 1);
      return id;
    }
    getId() {
      return indexed_file.IndexedFile.getIndexed(this.name);
    }
    generate(context) {
      let _name = null;
      if (this.custom != null) {
        _name = this.custom;
      } else {
        indexed_file.IndexedFile._indexed[$_set](this.name, dart.notNull(this.getId()) + 1);
        _name = dart.notNull(this.name) + dart.toString(this.getId());
      }
      if (this.path != null) _name = this.path[$trim]() + "/" + dart.notNull(_name);
      return new file.File.new(_name, {child: this.child, execute: this.execute, pack: this.pack});
    }
  };
  (indexed_file.IndexedFile.new = function(name, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let custom = opts && 'custom' in opts ? opts.custom : null;
    let path = opts && 'path' in opts ? opts.path : null;
    let execute = opts && 'execute' in opts ? opts.execute : false;
    let pack = opts && 'pack' in opts ? opts.pack : null;
    this[name$2] = name;
    this[child$1] = child;
    this[custom$] = custom;
    this[path$2] = path;
    this[execute$0] = execute;
    this[pack$0] = pack;
    ;
  }).prototype = indexed_file.IndexedFile.prototype;
  dart.addTypeTests(indexed_file.IndexedFile);
  dart.addTypeCaches(indexed_file.IndexedFile);
  dart.setMethodSignature(indexed_file.IndexedFile, () => ({
    __proto__: dart.getMethods(indexed_file.IndexedFile.__proto__),
    getId: dart.fnType(dart.legacy(core.int), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(indexed_file.IndexedFile, L38);
  dart.setFieldSignature(indexed_file.IndexedFile, () => ({
    __proto__: dart.getFields(indexed_file.IndexedFile.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    custom: dart.finalFieldType(dart.legacy(core.String)),
    path: dart.finalFieldType(dart.legacy(core.String)),
    pack: dart.finalFieldType(dart.legacy(core.String)),
    child: dart.finalFieldType(dart.legacy(widget.Widget)),
    execute: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(indexed_file.IndexedFile, {
    /*indexed_file.IndexedFile._indexed*/get _indexed() {
      return new (IdentityMapOfStringL$intL()).new();
    }
  }, true);
  var subcommand = dart.privateName(scoreboard, "Scoreboard.subcommand");
  var name$3 = dart.privateName(scoreboard, "Scoreboard.name");
  var type$3 = dart.privateName(scoreboard, "Scoreboard.type");
  scoreboard.Scoreboard = class Scoreboard extends rest_action.RestActionAble {
    get subcommand() {
      return this[subcommand];
    }
    set subcommand(value) {
      this[subcommand] = value;
    }
    get name() {
      return this[name$3];
    }
    set name(value) {
      this[name$3] = value;
    }
    get type() {
      return this[type$3];
    }
    set type(value) {
      this[type$3] = value;
    }
    prefixName() {
      if (scoreboard.Scoreboard.prefix != null && !this.name[$contains](scoreboard.Scoreboard.prefix)) this.name = dart.notNull(scoreboard.Scoreboard.prefix) + dart.notNull(this.name);
    }
    generate(context) {
      let t5;
      switch (this.subcommand) {
        case "add":
        {
          return new extend.Extend.new((t5 = context.loadFile, t5 == null ? "load" : t5), {child: new command$.Command.new("scoreboard objectives add " + dart.notNull(this.name) + " " + dart.notNull(this.type)), first: true});
        }
        case "addHere":
        {
          return new command$.Command.new("scoreboard objectives add " + dart.notNull(this.name) + " " + dart.notNull(this.type));
        }
        case "remove":
        {
          return new command$.Command.new("scoreboard objectives remove " + dart.notNull(this.name));
        }
        case "setdisplay":
        {
          return new command$.Command.new("scoreboard objectives setdisplay " + dart.notNull(this.type) + " " + dart.notNull(this.name));
        }
      }
      return new comment.Comment.Null();
    }
    _get(target) {
      if (EntityL().is(target)) return new score$.Score.new(target, this.name);
      if (StringL().is(target)) return new score$.Score.new(new entity$.Entity.PlayerName(target), this.name);
      dart.throw("The operator [] just accepts Entity or String!");
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["Scoreboard", new (IdentityMapOfStringL$StringL()).from(["name", this.name, "type", this.type])]);
    }
  };
  (scoreboard.Scoreboard.new = function(name, opts) {
    let type = opts && 'type' in opts ? opts.type : "dummy";
    let display = opts && 'display' in opts ? opts.display : null;
    let addIntoLoad = opts && 'addIntoLoad' in opts ? opts.addIntoLoad : true;
    this[subcommand] = null;
    this[name$3] = name;
    this[type$3] = type;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.subcommand = dart.test(addIntoLoad) ? "add" : "addHere";
    if (display != null) this.type = dart.notNull(this.type) + (" " + dart.notNull(display.toJson()));
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  (scoreboard.Scoreboard.click = function(name, opts) {
    let display = opts && 'display' in opts ? opts.display : null;
    let addIntoLoad = opts && 'addIntoLoad' in opts ? opts.addIntoLoad : true;
    this[subcommand] = null;
    this[type$3] = null;
    this[name$3] = name;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.type = "minecraft.used:minecraft.carrot_on_a_stick";
    this.subcommand = dart.test(addIntoLoad) ? "add" : "addHere";
    if (display != null) this.type = dart.notNull(this.type) + (" " + dart.notNull(display.toJson()));
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  (scoreboard.Scoreboard.trigger = function(name, opts) {
    let display = opts && 'display' in opts ? opts.display : null;
    let addIntoLoad = opts && 'addIntoLoad' in opts ? opts.addIntoLoad : true;
    this[subcommand] = null;
    this[type$3] = null;
    this[name$3] = name;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.type = "trigger";
    this.subcommand = dart.test(addIntoLoad) ? "add" : "addHere";
    if (display != null) this.type = dart.notNull(this.type) + (" " + dart.notNull(display.toJson()));
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  (scoreboard.Scoreboard.add = function(name, opts) {
    let type = opts && 'type' in opts ? opts.type : "dummy";
    let display = opts && 'display' in opts ? opts.display : null;
    this[subcommand] = null;
    this[name$3] = name;
    this[type$3] = type;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.subcommand = "addHere";
    if (display != null) this.type = dart.notNull(this.type) + (" " + dart.notNull(display.toJson()));
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  (scoreboard.Scoreboard.remove = function(name) {
    this[subcommand] = null;
    this[type$3] = null;
    this[name$3] = name;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.subcommand = "remove";
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  (scoreboard.Scoreboard.setdisplay = function(name, opts) {
    let display = opts && 'display' in opts ? opts.display : "sidebar";
    this[subcommand] = null;
    this[type$3] = null;
    this[name$3] = name;
    scoreboard.Scoreboard.__proto__.new.call(this);
    this.subcommand = "setdisplay";
    this.type = display;
    this.prefixName();
  }).prototype = scoreboard.Scoreboard.prototype;
  dart.addTypeTests(scoreboard.Scoreboard);
  dart.addTypeCaches(scoreboard.Scoreboard);
  dart.setMethodSignature(scoreboard.Scoreboard, () => ({
    __proto__: dart.getMethods(scoreboard.Scoreboard.__proto__),
    prefixName: dart.fnType(dart.void, []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    _get: dart.fnType(dart.legacy(score$.Score), [dart.dynamic]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(scoreboard.Scoreboard, L39);
  dart.setFieldSignature(scoreboard.Scoreboard, () => ({
    __proto__: dart.getFields(scoreboard.Scoreboard.__proto__),
    subcommand: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(scoreboard.Scoreboard, {
    /*scoreboard.Scoreboard.prefix*/get prefix() {
      return null;
    },
    set prefix(_) {}
  }, true);
  var child$2 = dart.privateName(extend, "Extend.child");
  var path$3 = dart.privateName(extend, "Extend.path");
  var first$ = dart.privateName(extend, "Extend.first");
  extend.Extend = class Extend extends rest_action.RestActionAble {
    get child() {
      return this[child$2];
    }
    set child(value) {
      this[child$2] = value;
    }
    get path() {
      return this[path$3];
    }
    set path(value) {
      this[path$3] = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      this[first$] = value;
    }
    generate(context) {
      return this.child;
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["File", new (IdentityMapOfStringL$dynamic()).from(["path", this.path, "child", this.child.toMap()])]);
    }
  };
  (extend.Extend.new = function(path, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let first = opts && 'first' in opts ? opts.first : false;
    this[path$3] = path;
    this[child$2] = child;
    this[first$] = first;
    extend.Extend.__proto__.new.call(this);
    if (!(this.path != null)) dart.assertFailed("Please provide a files path to extend", L40, 23, 12, "path != null");
    this.path[$replaceAll](".mcfunction", "");
    if (this.path[$substring](0, 1) === "/") this.path = this.path[$substring](1);
  }).prototype = extend.Extend.prototype;
  dart.addTypeTests(extend.Extend);
  dart.addTypeCaches(extend.Extend);
  dart.setMethodSignature(extend.Extend, () => ({
    __proto__: dart.getMethods(extend.Extend.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(extend.Extend, L41);
  dart.setFieldSignature(extend.Extend, () => ({
    __proto__: dart.getFields(extend.Extend.__proto__),
    child: dart.fieldType(dart.legacy(widget.Widget)),
    path: dart.fieldType(dart.legacy(core.String)),
    first: dart.fieldType(dart.legacy(core.bool))
  }));
  var _action = dart.privateName(team$, "_action");
  var _setModifiers = dart.privateName(team$, "_setModifiers");
  var _genEnum = dart.privateName(team$, "_genEnum");
  var _name$4 = dart.privateName(team$, "_name");
  var C1169;
  var C1170;
  var C1171;
  var C1172;
  var C1173;
  var name$4 = dart.privateName(team$, "Team.name");
  var entity$2 = dart.privateName(team$, "Team.entity");
  var modifiers = dart.privateName(team$, "Team.modifiers");
  team$.Team = class Team extends rest_action.RestActionAble {
    get name() {
      return this[name$4];
    }
    set name(value) {
      this[name$4] = value;
    }
    get entity() {
      return this[entity$2];
    }
    set entity(value) {
      this[entity$2] = value;
    }
    get modifiers() {
      return this[modifiers];
    }
    set modifiers(value) {
      this[modifiers] = value;
    }
    [_setModifiers](display, color, nametag, collision, deathMessage, friendlyFire, prefix, suffix, seeInvisible) {
      if (display != null) this.modifiers[$_set]("displayName", display.toJson());
      if (color != null) this.modifiers[$_set]("color", dart.toString(color));
      if (deathMessage != null) {
        this.modifiers[$_set]("deathMessageVisibility", this[_genEnum](deathMessage));
      }
      if (friendlyFire != null) this.modifiers[$_set]("friendlyFire", friendlyFire);
      if (nametag != null) this.modifiers[$_set]("nametagVisibility", this[_genEnum](nametag));
      if (collision != null) this.modifiers[$_set]("collisionRule", this[_genEnum](collision));
      if (prefix != null) this.modifiers[$_set]("prefix", prefix);
      if (suffix != null) this.modifiers[$_set]("suffix", suffix);
      if (seeInvisible != null) this.modifiers[$_set]("seeFriendlyInvisible", seeInvisible);
    }
    [_genEnum](en) {
      return dart.toString(en)[$split](".")[$_get](1);
    }
    generate(context) {
      let wids = JSArrayOfWidgetL().of([]);
      switch (this[_action]) {
        case C1169 || CT.C1169:
        {
          wids[$add](new command$.Command.new("team add " + dart.str(this.name)));
          break;
        }
        case C1170 || CT.C1170:
        {
          wids[$add](new command$.Command.new("team empty " + dart.str(this.name)));
          break;
        }
        case C1171 || CT.C1171:
        {
          wids[$add](new command$.Command.new("team remove " + dart.str(this.name)));
          break;
        }
        case C1172 || CT.C1172:
        {
          wids[$add](new command$.Command.new("team join " + dart.str(this.name) + " " + dart.str(this.entity)));
          break;
        }
        case C1173 || CT.C1173:
        {
          wids[$add](new command$.Command.new("team leave " + dart.str(this.entity)));
          break;
        }
        default:
      }
      if (dart.test(this.modifiers[$isNotEmpty])) {
        this.modifiers[$keys][$forEach](dart.fn(key => wids[$add](new command$.Command.new("team modify " + dart.str(this.name) + " " + dart.str(key) + " " + dart.str(this.modifiers[$_get](key)))), StringLTovoid()));
      }
      return new for_list.For.of(wids);
    }
  };
  (team$.Team.new = function(name) {
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[entity$2] = null;
    this[name$4] = name;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.add;
  }).prototype = team$.Team.prototype;
  (team$.Team.add = function(name, opts) {
    let display = opts && 'display' in opts ? opts.display : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let nametag = opts && 'nametag' in opts ? opts.nametag : null;
    let collision = opts && 'collision' in opts ? opts.collision : null;
    let deathMessage = opts && 'deathMessage' in opts ? opts.deathMessage : null;
    let friendlyFire = opts && 'friendlyFire' in opts ? opts.friendlyFire : null;
    let prefix = opts && 'prefix' in opts ? opts.prefix : null;
    let suffix = opts && 'suffix' in opts ? opts.suffix : null;
    let seeInvisible = opts && 'seeInvisible' in opts ? opts.seeInvisible : null;
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[entity$2] = null;
    this[name$4] = name;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.add;
    this[_setModifiers](display, color, nametag, collision, deathMessage, friendlyFire, prefix, suffix, seeInvisible);
  }).prototype = team$.Team.prototype;
  (team$.Team.empty = function(name) {
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[entity$2] = null;
    this[name$4] = name;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.empty;
  }).prototype = team$.Team.prototype;
  (team$.Team.join = function(name, entity) {
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[name$4] = name;
    this[entity$2] = entity;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.join;
  }).prototype = team$.Team.prototype;
  (team$.Team.leave = function(entity) {
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[name$4] = null;
    this[entity$2] = entity;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.leave;
  }).prototype = team$.Team.prototype;
  (team$.Team.modify = function(name, opts) {
    let display = opts && 'display' in opts ? opts.display : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let nametag = opts && 'nametag' in opts ? opts.nametag : null;
    let collision = opts && 'collision' in opts ? opts.collision : null;
    let deathMessage = opts && 'deathMessage' in opts ? opts.deathMessage : null;
    let friendlyFire = opts && 'friendlyFire' in opts ? opts.friendlyFire : null;
    let prefix = opts && 'prefix' in opts ? opts.prefix : null;
    let suffix = opts && 'suffix' in opts ? opts.suffix : null;
    let seeInvisible = opts && 'seeInvisible' in opts ? opts.seeInvisible : null;
    this[modifiers] = new (IdentityMapOfStringL$dynamic()).new();
    this[_action] = null;
    this[entity$2] = null;
    this[name$4] = name;
    team$.Team.__proto__.new.call(this);
    this[_action] = team$._TeamAction.modify;
    this[_setModifiers](display, color, nametag, collision, deathMessage, friendlyFire, prefix, suffix, seeInvisible);
  }).prototype = team$.Team.prototype;
  dart.addTypeTests(team$.Team);
  dart.addTypeCaches(team$.Team);
  dart.setMethodSignature(team$.Team, () => ({
    __proto__: dart.getMethods(team$.Team.__proto__),
    [_setModifiers]: dart.fnType(dart.void, [dart.legacy(text_components.TextComponent), dart.legacy(text_components.Color), dart.legacy(team$.ModifyTeam), dart.legacy(team$.ModifyTeam), dart.legacy(team$.ModifyTeam), dart.legacy(core.bool), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.bool)]),
    [_genEnum]: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(team$.Team, L42);
  dart.setFieldSignature(team$.Team, () => ({
    __proto__: dart.getFields(team$.Team.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    modifiers: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    [_action]: dart.fieldType(dart.legacy(team$._TeamAction))
  }));
  var C1174;
  var C1175;
  team$._TeamAction = class _TeamAction extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (team$._TeamAction.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = team$._TeamAction.prototype;
  dart.addTypeTests(team$._TeamAction);
  dart.addTypeCaches(team$._TeamAction);
  dart.setMethodSignature(team$._TeamAction, () => ({
    __proto__: dart.getMethods(team$._TeamAction.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(team$._TeamAction, L42);
  dart.setFieldSignature(team$._TeamAction, () => ({
    __proto__: dart.getFields(team$._TeamAction.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$4]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(team$._TeamAction, ['toString']);
  team$._TeamAction.add = C1169 || CT.C1169;
  team$._TeamAction.remove = C1171 || CT.C1171;
  team$._TeamAction.modify = C1174 || CT.C1174;
  team$._TeamAction.join = C1172 || CT.C1172;
  team$._TeamAction.leave = C1173 || CT.C1173;
  team$._TeamAction.empty = C1170 || CT.C1170;
  team$._TeamAction.values = C1175 || CT.C1175;
  var C1176;
  var C1177;
  var C1178;
  var C1179;
  var C1180;
  var C1181;
  var C1182;
  team$.ModifyTeam = class ModifyTeam extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (team$.ModifyTeam.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = team$.ModifyTeam.prototype;
  dart.addTypeTests(team$.ModifyTeam);
  dart.addTypeCaches(team$.ModifyTeam);
  dart.setMethodSignature(team$.ModifyTeam, () => ({
    __proto__: dart.getMethods(team$.ModifyTeam.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(team$.ModifyTeam, L42);
  dart.setFieldSignature(team$.ModifyTeam, () => ({
    __proto__: dart.getFields(team$.ModifyTeam.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$4]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(team$.ModifyTeam, ['toString']);
  team$.ModifyTeam.never = C1176 || CT.C1176;
  team$.ModifyTeam.always = C1177 || CT.C1177;
  team$.ModifyTeam.hideForOtherTeams = C1178 || CT.C1178;
  team$.ModifyTeam.hideForOwnTeam = C1179 || CT.C1179;
  team$.ModifyTeam.pushOtherTeams = C1180 || CT.C1180;
  team$.ModifyTeam.pushOwnTeam = C1181 || CT.C1181;
  team$.ModifyTeam.values = C1182 || CT.C1182;
  var _fix = dart.privateName(selector, "_fix");
  var _parseString = dart.privateName(selector, "_parseString");
  var _parseRange = dart.privateName(selector, "_parseRange");
  var _parseKeyword = dart.privateName(selector, "_parseKeyword");
  var _parseDouble = dart.privateName(selector, "_parseDouble");
  var _parseInt = dart.privateName(selector, "_parseInt");
  var selector$1 = dart.privateName(selector, "Selector.selector");
  var limit$ = dart.privateName(selector, "Selector.limit");
  var tags$ = dart.privateName(selector, "Selector.tags");
  var team$0 = dart.privateName(selector, "Selector.team");
  var scores$ = dart.privateName(selector, "Selector.scores");
  var nbt$1 = dart.privateName(selector, "Selector.nbt");
  var strNbt$0 = dart.privateName(selector, "Selector.strNbt");
  var type$4 = dart.privateName(selector, "Selector.type");
  var area$ = dart.privateName(selector, "Selector.area");
  var distance$ = dart.privateName(selector, "Selector.distance");
  var level$0 = dart.privateName(selector, "Selector.level");
  var gamemode$ = dart.privateName(selector, "Selector.gamemode");
  var name$5 = dart.privateName(selector, "Selector.name");
  var isRotated$ = dart.privateName(selector, "Selector.isRotated");
  var horizontalRotation$ = dart.privateName(selector, "Selector.horizontalRotation");
  var verticalRotation$ = dart.privateName(selector, "Selector.verticalRotation");
  var sorting$ = dart.privateName(selector, "Selector.sorting");
  var playerName$0 = dart.privateName(selector, "Selector.playerName");
  selector.Selector = class Selector extends core.Object {
    get selector() {
      return this[selector$1];
    }
    set selector(value) {
      this[selector$1] = value;
    }
    get limit() {
      return this[limit$];
    }
    set limit(value) {
      this[limit$] = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      this[tags$] = value;
    }
    get team() {
      return this[team$0];
    }
    set team(value) {
      this[team$0] = value;
    }
    get scores() {
      return this[scores$];
    }
    set scores(value) {
      this[scores$] = value;
    }
    get nbt() {
      return this[nbt$1];
    }
    set nbt(value) {
      this[nbt$1] = value;
    }
    get strNbt() {
      return this[strNbt$0];
    }
    set strNbt(value) {
      this[strNbt$0] = value;
    }
    get type() {
      return this[type$4];
    }
    set type(value) {
      this[type$4] = value;
    }
    get area() {
      return this[area$];
    }
    set area(value) {
      this[area$] = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      this[distance$] = value;
    }
    get level() {
      return this[level$0];
    }
    set level(value) {
      this[level$0] = value;
    }
    get gamemode() {
      return this[gamemode$];
    }
    set gamemode(value) {
      this[gamemode$] = value;
    }
    get name() {
      return this[name$5];
    }
    set name(value) {
      this[name$5] = value;
    }
    get isRotated() {
      return this[isRotated$];
    }
    set isRotated(value) {
      this[isRotated$] = value;
    }
    get horizontalRotation() {
      return this[horizontalRotation$];
    }
    set horizontalRotation(value) {
      this[horizontalRotation$] = value;
    }
    get verticalRotation() {
      return this[verticalRotation$];
    }
    set verticalRotation(value) {
      this[verticalRotation$] = value;
    }
    get sorting() {
      return this[sorting$];
    }
    set sorting(value) {
      this[sorting$] = value;
    }
    get playerName() {
      return this[playerName$0];
    }
    set playerName(value) {
      this[playerName$0] = value;
    }
    [_parseKeyword](T, p, keywordmap) {
      let keyword = this[_parseString](p);
      let ret = null;
      keywordmap[$forEach](dart.fn((k, v) => {
        if (keyword == k) ret = v;
      }, dart.fnType(core.Null, [StringL(), dart.legacy(T)])));
      if (ret == null) {
        p.goBack(1);
        dart.throw(p.error("Unexpected value '" + dart.str(keyword) + "'", {from: keyword.length - 1}));
      }
      return ret;
    }
    [_parseRange](p) {
      let number1 = "";
      let number2 = "";
      let range = false;
      while (dart.test(core.RegExp.new("[0-9\\.]").hasMatch(p.actual()))) {
        if (p.actual() === "." && p.peek(1) === ".") break;
        number1 = number1 + dart.notNull(p.next());
      }
      if (p.actual() === "." && p.peek(1) === ".") {
        p.skip();
        p.skip();
        range = true;
      }
      while (dart.test(core.RegExp.new("[0-9\\.]").hasMatch(p.actual()))) {
        number2 = number2 + dart.notNull(p.next());
      }
      if (!range) return new entity$.Range.exact(core.int.parse(number1));
      if (number1 !== "" && number2 !== "") {
        return new entity$.Range.new(core.num.parse(number1), core.num.parse(number2));
      }
      if (number1 !== "" && number2 === "") return new entity$.Range.from(core.num.parse(number1));
      if (number1 === "" && number2 !== "") return new entity$.Range.to(core.num.parse(number2));
      dart.throw(p.error("Can't use range without number"));
    }
    [_fix]() {
      let tags = this.tags;
      this.tags = [];
      tags[$forEach](dart.fn(tag => {
        if (TagL().is(tag)) {
          this.tags[$add](tag.tag);
        } else if (StringL().is(tag)) {
          this.tags[$add](tag);
        } else {
          dart.throw("Please insert a Tag or String as tag into Entity!");
        }
      }, dynamicToNullN()));
    }
    sort(s) {
      let clone = new selector.Selector.clone(this);
      clone.sorting = s;
      return clone;
    }
    [_parseInt](p) {
      let number = "";
      while (dart.test(core.RegExp.new("[0-9]").hasMatch(p.actual()))) {
        number = number + dart.notNull(p.next());
      }
      return core.int.parse(number);
    }
    [_parseDouble](p) {
      let number = "";
      while (dart.test(core.RegExp.new("[0-9.]").hasMatch(p.actual()))) {
        number = number + dart.notNull(p.next());
      }
      return core.double.parse(number);
    }
    [_parseString](p) {
      let str = "";
      while (dart.test(core.RegExp.new("[\\w-]").hasMatch(p.actual()))) {
        str = str + dart.notNull(p.next());
      }
      return str;
    }
    toString() {
      return new entity$.Entity.Select(this).toString();
    }
  };
  (selector.Selector.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : "e";
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let sorting = opts && 'sorting' in opts ? opts.sorting : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[selector$1] = selector;
    this[limit$] = limit;
    this[tags$] = tags;
    this[team$0] = team;
    this[scores$] = scores;
    this[nbt$1] = nbt;
    this[strNbt$0] = strNbt;
    this[type$4] = type;
    this[area$] = area;
    this[distance$] = distance;
    this[level$0] = level;
    this[gamemode$] = gamemode;
    this[name$5] = name;
    this[isRotated$] = isRotated;
    this[horizontalRotation$] = horizontalRotation;
    this[verticalRotation$] = verticalRotation;
    this[sorting$] = sorting;
    this[playerName$0] = playerName;
    this[_fix]();
  }).prototype = selector.Selector.prototype;
  (selector.Selector.Selected = function(opts) {
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let sorting = opts && 'sorting' in opts ? opts.sorting : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[selector$1] = null;
    this[limit$] = limit;
    this[tags$] = tags;
    this[team$0] = team;
    this[scores$] = scores;
    this[nbt$1] = nbt;
    this[strNbt$0] = strNbt;
    this[type$4] = type;
    this[area$] = area;
    this[distance$] = distance;
    this[level$0] = level;
    this[gamemode$] = gamemode;
    this[name$5] = name;
    this[isRotated$] = isRotated;
    this[horizontalRotation$] = horizontalRotation;
    this[verticalRotation$] = verticalRotation;
    this[sorting$] = sorting;
    this[playerName$0] = playerName;
    this.selector = "s";
    this[_fix]();
  }).prototype = selector.Selector.prototype;
  (selector.Selector.Player = function(opts) {
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let sorting = opts && 'sorting' in opts ? opts.sorting : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[selector$1] = null;
    this[limit$] = limit;
    this[tags$] = tags;
    this[team$0] = team;
    this[scores$] = scores;
    this[nbt$1] = nbt;
    this[strNbt$0] = strNbt;
    this[type$4] = type;
    this[area$] = area;
    this[distance$] = distance;
    this[level$0] = level;
    this[gamemode$] = gamemode;
    this[name$5] = name;
    this[isRotated$] = isRotated;
    this[horizontalRotation$] = horizontalRotation;
    this[verticalRotation$] = verticalRotation;
    this[sorting$] = sorting;
    this[playerName$0] = playerName;
    this.selector = "p";
    this[_fix]();
  }).prototype = selector.Selector.prototype;
  (selector.Selector.All = function(opts) {
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let sorting = opts && 'sorting' in opts ? opts.sorting : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[selector$1] = null;
    this[limit$] = limit;
    this[tags$] = tags;
    this[team$0] = team;
    this[scores$] = scores;
    this[nbt$1] = nbt;
    this[strNbt$0] = strNbt;
    this[type$4] = type;
    this[area$] = area;
    this[distance$] = distance;
    this[level$0] = level;
    this[gamemode$] = gamemode;
    this[name$5] = name;
    this[isRotated$] = isRotated;
    this[horizontalRotation$] = horizontalRotation;
    this[verticalRotation$] = verticalRotation;
    this[sorting$] = sorting;
    this[playerName$0] = playerName;
    this.selector = "a";
    this[_fix]();
  }).prototype = selector.Selector.prototype;
  (selector.Selector.Random = function(opts) {
    let limit = opts && 'limit' in opts ? opts.limit : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let team = opts && 'team' in opts ? opts.team : null;
    let scores = opts && 'scores' in opts ? opts.scores : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let strNbt = opts && 'strNbt' in opts ? opts.strNbt : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let area = opts && 'area' in opts ? opts.area : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let level = opts && 'level' in opts ? opts.level : null;
    let gamemode = opts && 'gamemode' in opts ? opts.gamemode : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let isRotated = opts && 'isRotated' in opts ? opts.isRotated : null;
    let horizontalRotation = opts && 'horizontalRotation' in opts ? opts.horizontalRotation : null;
    let verticalRotation = opts && 'verticalRotation' in opts ? opts.verticalRotation : null;
    let sorting = opts && 'sorting' in opts ? opts.sorting : null;
    let playerName = opts && 'playerName' in opts ? opts.playerName : null;
    this[selector$1] = null;
    this[limit$] = limit;
    this[tags$] = tags;
    this[team$0] = team;
    this[scores$] = scores;
    this[nbt$1] = nbt;
    this[strNbt$0] = strNbt;
    this[type$4] = type;
    this[area$] = area;
    this[distance$] = distance;
    this[level$0] = level;
    this[gamemode$] = gamemode;
    this[name$5] = name;
    this[isRotated$] = isRotated;
    this[horizontalRotation$] = horizontalRotation;
    this[verticalRotation$] = verticalRotation;
    this[sorting$] = sorting;
    this[playerName$0] = playerName;
    this.selector = "r";
    this[_fix]();
  }).prototype = selector.Selector.prototype;
  (selector.Selector.clone = function(s) {
    this[playerName$0] = null;
    this[sorting$] = null;
    this[verticalRotation$] = null;
    this[horizontalRotation$] = null;
    this[isRotated$] = null;
    this[name$5] = null;
    this[gamemode$] = null;
    this[level$0] = null;
    this[distance$] = null;
    this[area$] = null;
    this[type$4] = null;
    this[strNbt$0] = null;
    this[nbt$1] = null;
    this[scores$] = null;
    this[team$0] = null;
    this[tags$] = null;
    this[limit$] = null;
    this[selector$1] = null;
    let scores = null;
    if (s.scores != null) {
      let scores = s.scores;
      s.scores = JSArrayOfScoreL().of([]);
      scores[$forEach](dart.fn(score => {
        s.scores[$add](new score$.Score.new(score.entity, score.score, {addNew: false, commands: score.commands}));
      }, ScoreLToNullN()));
    }
    this.selector = s.selector;
    this.playerName = s.playerName;
    this.limit = s.limit;
    this.tags = core.List.from(s.tags);
    this.team = s.team;
    scores = scores;
    this.nbt = MapLOfStringL$dynamic().as(gson.gson.decode(gson.gson.encode(s.nbt)));
    this.strNbt = s.strNbt;
    this.type = s.type;
    this.area = s.area;
    this.distance = s.distance;
    this.level = s.level;
    this.gamemode = s.gamemode;
    this.name = s.name;
    this.isRotated = s.isRotated;
    this.horizontalRotation = s.horizontalRotation;
    this.verticalRotation = s.verticalRotation;
    this.sorting = s.sorting;
  }).prototype = selector.Selector.prototype;
  (selector.Selector.parse = function(selector) {
    this[playerName$0] = null;
    this[sorting$] = null;
    this[verticalRotation$] = null;
    this[horizontalRotation$] = null;
    this[isRotated$] = null;
    this[name$5] = null;
    this[gamemode$] = null;
    this[level$0] = null;
    this[distance$] = null;
    this[area$] = null;
    this[type$4] = null;
    this[strNbt$0] = null;
    this[nbt$1] = null;
    this[scores$] = null;
    this[team$0] = null;
    this[tags$] = null;
    this[limit$] = null;
    this[selector$1] = null;
    let p = new parsable.Parsable.new(selector);
    if (p.actual() !== "@") {
      dart.throw(p.error("Selector has to start with a '@'-symbol"));
    }
    p.skip();
    let ranges = new (IdentityMapOfStringL$doubleL()).new();
    if (p.actual() !== "e" && p.actual() !== "a" && p.actual() !== "s" && p.actual() !== "p" && p.actual() !== "r") {
      dart.throw(p.error("The second letter of a selector has to be \"a\", \"e\", \"p\", \"r\" or \"s\""));
    }
    this.selector = p.actual();
    if (!dart.test(p.ended)) p.skip();
    if (p.actual() === "[") {
      p.skip();
      let foundComma = true;
      while (p.actual() !== "]") {
        if (!foundComma) dart.throw(p.error("Expecting ',' or ']'"));
        if (!dart.test(core.RegExp.new("[a-z]").hasMatch(p.actual()))) {
          dart.throw(p.error("Needing letter a-z or ']'"));
        }
        let key = "";
        while (dart.test(core.RegExp.new("[a-z]").hasMatch(p.actual()))) {
          key = key + dart.notNull(p.next());
        }
        if (p.next() !== "=") dart.throw(p.error("Expecting '='"));
        switch (key) {
          case "scores":
          {
            if (p.actual() !== "{") {
              dart.throw(p.error("Expecting '{'"));
            }
            let comma = true;
            p.skip();
            while (p.actual() !== "}") {
              if (!comma) dart.throw(p.error("Expecting ',' or '}'"));
              let score = this[_parseString](p);
              if (p.next() !== "=") dart.throw(p.error("Expecting '='"));
              let r = this[_parseRange](p);
              this.scores == null ? this.scores = JSArrayOfScoreL().of([]) : null;
              this.scores[$add](new score$.Score.fromSelected(score).matchesRange(r));
              if (p.actual() === ",") {
                comma = true;
                p.skip();
              }
            }
            p.skip();
            break;
          }
          case "gamemode":
          {
            this.gamemode = this[_parseKeyword](GamemodeL(), p, new (IdentityMapOfStringL$GamemodeL()).from(["survival", entity$.Gamemode.survival, "creative", entity$.Gamemode.creative, "adventure", entity$.Gamemode.adventure, "spectator", entity$.Gamemode.spectator]));
            break;
          }
          case "sort":
          {
            this.sorting = this[_parseKeyword](SortL(), p, new (IdentityMapOfStringL$SortL()).from(["nearest", entity$.Sort.nearest, "furthest", entity$.Sort.furthest, "random", entity$.Sort.random, "arbitrary", entity$.Sort.arbitrary]));
            break;
          }
          case "x":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "y":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "z":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "dx":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "dy":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "dz":
          {
            ranges[$_set](key, this[_parseDouble](p));
            break;
          }
          case "nbt":
          {
            if (this.nbt == null) {
              this.nbt = MapLOfStringL$dynamic().as(gson.gson.decoder.decode(p));
            } else {
              this.nbt[$addAll](MapLOfStringL$dynamic().as(gson.gson.decoder.decode(p)));
            }
            break;
          }
          case "tag":
          {
            if (this.tags == null) {
              this.tags = [this[_parseString](p)];
            } else {
              this.tags[$add](this[_parseString](p));
            }
            break;
          }
          case "name":
          {
            this.name = gson.gson.decoder.decodeString(p);
            break;
          }
          case "team":
          {
            this.team = new team$.Team.new(this[_parseString](p));
            break;
          }
          case "type":
          {
            this.type = new entity$.EntityType.new(this[_parseString](p));
            break;
          }
          case "limit":
          {
            this.limit = this[_parseInt](p);
            break;
          }
          case "level":
          {
            this.level = this[_parseRange](p);
            break;
          }
          case "x_rotation":
          {
            this.verticalRotation = this[_parseRange](p);
            break;
          }
          case "y_rotation":
          {
            this.horizontalRotation = this[_parseRange](p);
            break;
          }
          case "distance":
          {
            this.distance = this[_parseRange](p);
            break;
          }
          default:
          {
            p.goBack(2);
            dart.throw(p.error("Unknown key '" + key + "'", {from: key.length - 1}));
            break;
          }
        }
        if (p.actual() === ",") {
          foundComma = true;
          p.skip();
        }
      }
    }
    if (dart.test(ranges[$isNotEmpty])) {
      this.area = new area.Area.fromRanges({ranges: ranges});
    }
  }).prototype = selector.Selector.prototype;
  dart.addTypeTests(selector.Selector);
  dart.addTypeCaches(selector.Selector);
  dart.setMethodSignature(selector.Selector, () => ({
    __proto__: dart.getMethods(selector.Selector.__proto__),
    [_parseKeyword]: dart.gFnType(T => [dart.legacy(T), [dart.legacy(parsable.Parsable), dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(T)))]]),
    [_parseRange]: dart.fnType(dart.legacy(entity$.Range), [dart.legacy(parsable.Parsable)]),
    [_fix]: dart.fnType(dart.void, []),
    sort: dart.fnType(dart.legacy(selector.Selector), [dart.legacy(entity$.Sort)]),
    [_parseInt]: dart.fnType(dart.legacy(core.int), [dart.legacy(parsable.Parsable)]),
    [_parseDouble]: dart.fnType(dart.legacy(core.double), [dart.legacy(parsable.Parsable)]),
    [_parseString]: dart.fnType(dart.legacy(core.String), [dart.legacy(parsable.Parsable)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(selector.Selector, L43);
  dart.setFieldSignature(selector.Selector, () => ({
    __proto__: dart.getFields(selector.Selector.__proto__),
    selector: dart.fieldType(dart.legacy(core.String)),
    limit: dart.fieldType(dart.legacy(core.int)),
    tags: dart.fieldType(dart.legacy(core.List)),
    team: dart.fieldType(dart.legacy(team$.Team)),
    scores: dart.fieldType(dart.legacy(core.List$(dart.legacy(score$.Score)))),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    strNbt: dart.fieldType(dart.legacy(core.String)),
    type: dart.fieldType(dart.legacy(entity$.EntityType)),
    area: dart.fieldType(dart.legacy(area.Area)),
    distance: dart.fieldType(dart.legacy(entity$.Range)),
    level: dart.fieldType(dart.legacy(entity$.Range)),
    gamemode: dart.fieldType(dart.legacy(entity$.Gamemode)),
    name: dart.fieldType(dart.legacy(core.String)),
    isRotated: dart.fieldType(dart.legacy(rotation.Rotation)),
    horizontalRotation: dart.fieldType(dart.legacy(entity$.Range)),
    verticalRotation: dart.fieldType(dart.legacy(entity$.Range)),
    sorting: dart.fieldType(dart.legacy(entity$.Sort)),
    playerName: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(selector.Selector, ['toString']);
  var value$3 = dart.privateName(tag$, "Tag.value");
  var entity$3 = dart.privateName(tag$, "Tag.entity");
  var tag$1 = dart.privateName(tag$, "Tag.tag");
  tag$.Tag = class Tag extends rest_action.RestActionAble {
    get value() {
      return this[value$3];
    }
    set value(value) {
      this[value$3] = value;
    }
    get entity() {
      return this[entity$3];
    }
    set entity(value) {
      this[entity$3] = value;
    }
    get tag() {
      return this[tag$1];
    }
    set tag(value) {
      this[tag$1] = value;
    }
    add() {
      return new tag$.Tag.new(this.tag, {entity: this.entity, value: true});
    }
    remove() {
      return new tag$.Tag.new(this.tag, {entity: this.entity, value: false});
    }
    toggle(opts) {
      let temp = opts && 'temp' in opts ? opts.temp : "objd_temp";
      let tempTag = new tag$.Tag.new(temp, {entity: this.entity});
      return new for_list.For.of(JSArrayOfWidgetL().of([new $if.If.new(this, {then: JSArrayOfWidgetL().of([tempTag])}), new $if.If.new(tempTag, {then: JSArrayOfWidgetL().of([new tag$.Tag.new(this.tag, {entity: this.entity, value: false})])}), new $if.If.new(this.entity.copyWith().not({tags: [temp]}), {then: JSArrayOfWidgetL().of([new tag$.Tag.new(this.tag, {entity: this.entity, value: true})])}), tempTag.remove()]));
    }
    removeIfExists(opts) {
      let then = opts && 'then' in opts ? opts.then : null;
      return new $if.If.new(this, {then: JSArrayOfWidgetL().of([then, this.remove()])});
    }
    ['&'](other) {
      if (other != null && dart.test(other)) return new condition$.Condition.tag(this);
      return new condition$.Condition.not(new condition$.Condition.tag(this));
    }
    ['>>'](other) {
      if (other != null && dart.test(other)) return new tag$.Tag.new(this.tag, {entity: this.entity, value: true});
      return new tag$.Tag.new(this.tag, {entity: this.entity, value: false});
    }
    getEntity() {
      return dart.toString(this.entity.copyWith({tags: [this.tag]}));
    }
    getCommand() {
      return dart.test(this.value) ? new command$.Command.new("tag " + dart.notNull(dart.toString(this.entity)) + " add " + dart.notNull(this.tag)) : new command$.Command.new("tag " + dart.notNull(dart.toString(this.entity)) + " remove " + dart.notNull(this.tag));
    }
    generate(context) {
      return this.getCommand();
    }
  };
  (tag$.Tag.new = function(tag, opts) {
    let entity = opts && 'entity' in opts ? opts.entity : null;
    let value = opts && 'value' in opts ? opts.value : true;
    this[tag$1] = tag;
    this[entity$3] = entity;
    this[value$3] = value;
    tag$.Tag.__proto__.new.call(this);
    this.entity == null ? this.entity = new entity$.Entity.Selected() : null;
    if (tag$.Tag.prefix != null && !this.tag[$contains](tag$.Tag.prefix)) this.tag = dart.notNull(tag$.Tag.prefix) + dart.notNull(this.tag);
  }).prototype = tag$.Tag.prototype;
  dart.addTypeTests(tag$.Tag);
  dart.addTypeCaches(tag$.Tag);
  dart.setMethodSignature(tag$.Tag, () => ({
    __proto__: dart.getMethods(tag$.Tag.__proto__),
    add: dart.fnType(dart.legacy(tag$.Tag), []),
    remove: dart.fnType(dart.legacy(tag$.Tag), []),
    toggle: dart.fnType(dart.legacy(widget.Widget), [], {temp: dart.legacy(core.String)}, {}),
    removeIfExists: dart.fnType(dart.legacy($if.If), [], {then: dart.legacy(widget.Widget)}, {}),
    '&': dart.fnType(dart.legacy(condition$.Condition), [dart.legacy(core.bool)]),
    '>>': dart.fnType(dart.legacy(tag$.Tag), [dart.legacy(core.bool)]),
    getEntity: dart.fnType(dart.legacy(core.String), []),
    getCommand: dart.fnType(dart.legacy(command$.Command), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(tag$.Tag, L44);
  dart.setFieldSignature(tag$.Tag, () => ({
    __proto__: dart.getFields(tag$.Tag.__proto__),
    value: dart.fieldType(dart.legacy(core.bool)),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    tag: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(tag$.Tag, {
    /*tag$.Tag.prefix*/get prefix() {
      return null;
    },
    set prefix(_) {}
  }, true);
  var _setDifferences = dart.privateName(area, "_setDifferences");
  var dx$ = dart.privateName(area, "Area.dx");
  var dy$ = dart.privateName(area, "Area.dy");
  var dz$ = dart.privateName(area, "Area.dz");
  var loc1$ = dart.privateName(area, "Area.loc1");
  var loc2$ = dart.privateName(area, "Area.loc2");
  area.Area = class Area extends core.Object {
    get dx() {
      return this[dx$];
    }
    set dx(value) {
      this[dx$] = value;
    }
    get dy() {
      return this[dy$];
    }
    set dy(value) {
      this[dy$] = value;
    }
    get dz() {
      return this[dz$];
    }
    set dz(value) {
      this[dz$] = value;
    }
    get loc1() {
      return this[loc1$];
    }
    set loc1(value) {
      this[loc1$] = value;
    }
    get loc2() {
      return this[loc2$];
    }
    set loc2(value) {
      this[loc2$] = value;
    }
    [_setDifferences]() {
      let t5, t5$, t5$0;
      if (this.loc1.x != null && this.loc2.x != null) this.dx = (t5 = area._abs(dart.notNull(this.loc2.x) - dart.notNull(this.loc1.x)), t5 == null ? -1.0 : t5);
      if (this.loc1.y != null && this.loc2.y != null) this.dy = (t5$ = area._abs(dart.notNull(this.loc2.y) - dart.notNull(this.loc1.y)), t5$ == null ? -1.0 : t5$);
      if (this.loc1.z != null && this.loc2.z != null) this.dz = (t5$0 = area._abs(dart.notNull(this.loc2.z) - dart.notNull(this.loc1.z)), t5$0 == null ? -1.0 : t5$0);
    }
    getRanges() {
      let ret = new (IdentityMapOfStringL$doubleL()).new();
      if (this.loc1.x != null) ret[$_set]("x", this.loc1.x);
      if (this.loc1.y != null) ret[$_set]("y", this.loc1.y);
      if (this.loc1.z != null) ret[$_set]("z", this.loc1.z);
      if (this.dx != null && dart.notNull(this.dx) >= 0) ret[$_set]("dx", this.dx);
      if (this.dy != null && dart.notNull(this.dy) >= 0) ret[$_set]("dy", this.dy);
      if (this.dz != null && dart.notNull(this.dz) >= 0) ret[$_set]("dz", this.dz);
      return ret;
    }
    getCoordinates() {
      return dart.notNull(dart.toString(this.loc1)) + " " + dart.notNull(dart.toString(this.loc2));
    }
  };
  (area.Area.new = function(opts) {
    let x1 = opts && 'x1' in opts ? opts.x1 : null;
    let y1 = opts && 'y1' in opts ? opts.y1 : null;
    let z1 = opts && 'z1' in opts ? opts.z1 : null;
    let x2 = opts && 'x2' in opts ? opts.x2 : null;
    let y2 = opts && 'y2' in opts ? opts.y2 : null;
    let z2 = opts && 'z2' in opts ? opts.z2 : null;
    this[dx$] = null;
    this[dy$] = null;
    this[dz$] = -1.0;
    this[loc2$] = null;
    this[loc1$] = null;
    this.loc1 = new location$.Location.glob({x: area._min(x1, x2), y: area._min(y1, y2), z: area._min(z1, z2)});
    this.loc2 = new location$.Location.glob({x: area._max(x1, x2), y: area._max(y1, y2), z: area._max(z1, z2)});
    this[_setDifferences]();
  }).prototype = area.Area.prototype;
  (area.Area.rel = function(opts) {
    let x1 = opts && 'x1' in opts ? opts.x1 : null;
    let y1 = opts && 'y1' in opts ? opts.y1 : null;
    let z1 = opts && 'z1' in opts ? opts.z1 : null;
    let x2 = opts && 'x2' in opts ? opts.x2 : null;
    let y2 = opts && 'y2' in opts ? opts.y2 : null;
    let z2 = opts && 'z2' in opts ? opts.z2 : null;
    this[dx$] = null;
    this[dy$] = null;
    this[dz$] = -1.0;
    this[loc2$] = null;
    this[loc1$] = null;
    this.loc1 = new location$.Location.rel({x: area._min(x1, x2), y: area._min(y1, y2), z: area._min(z1, z2)});
    this.loc2 = new location$.Location.rel({x: area._max(x1, x2), y: area._max(y1, y2), z: area._max(z1, z2)});
    this[_setDifferences]();
  }).prototype = area.Area.prototype;
  (area.Area.fromRanges = function(opts) {
    let t5, t5$, t5$0, t5$1, t5$2, t5$3;
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    let z = opts && 'z' in opts ? opts.z : null;
    let dx = opts && 'dx' in opts ? opts.dx : null;
    let dy = opts && 'dy' in opts ? opts.dy : null;
    let dz = opts && 'dz' in opts ? opts.dz : null;
    let ranges = opts && 'ranges' in opts ? opts.ranges : null;
    this[dx$] = null;
    this[dy$] = null;
    this[dz$] = -1.0;
    this[loc2$] = null;
    this[loc1$] = null;
    x = (t5 = x, t5 == null ? ranges[$_get]("x") : t5);
    y = (t5$ = y, t5$ == null ? ranges[$_get]("y") : t5$);
    z = (t5$0 = z, t5$0 == null ? ranges[$_get]("z") : t5$0);
    dx = (t5$1 = dx, t5$1 == null ? ranges[$_get]("dx") : t5$1);
    dy = (t5$2 = dy, t5$2 == null ? ranges[$_get]("dy") : t5$2);
    dz = (t5$3 = dz, t5$3 == null ? ranges[$_get]("dz") : t5$3);
    let x2 = x != null && dx != null ? dart.notNull(x) + dart.notNull(dx) : null;
    let y2 = y != null && dy != null ? dart.notNull(y) + dart.notNull(dy) : null;
    let z2 = z != null && dz != null ? dart.notNull(z) + dart.notNull(dz) : null;
    this.loc1 = new location$.Location.glob({x: area._min(x, x2), y: area._min(y, y2), z: area._min(z, z2)});
    this.loc2 = new location$.Location.glob({x: area._max(x, x2), y: area._max(y, y2), z: area._max(z, z2)});
    this[_setDifferences]();
  }).prototype = area.Area.prototype;
  (area.Area.fromLocations = function(loc1, loc2) {
    this[dx$] = null;
    this[dy$] = null;
    this[dz$] = -1.0;
    this[loc1$] = loc1;
    this[loc2$] = loc2;
    this[_setDifferences]();
  }).prototype = area.Area.prototype;
  dart.addTypeTests(area.Area);
  dart.addTypeCaches(area.Area);
  dart.setMethodSignature(area.Area, () => ({
    __proto__: dart.getMethods(area.Area.__proto__),
    [_setDifferences]: dart.fnType(dart.void, []),
    getRanges: dart.fnType(dart.legacy(core.Map), []),
    getCoordinates: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(area.Area, L45);
  dart.setFieldSignature(area.Area, () => ({
    __proto__: dart.getFields(area.Area.__proto__),
    dx: dart.fieldType(dart.legacy(core.double)),
    dy: dart.fieldType(dart.legacy(core.double)),
    dz: dart.fieldType(dart.legacy(core.double)),
    loc1: dart.fieldType(dart.legacy(location$.Location)),
    loc2: dart.fieldType(dart.legacy(location$.Location))
  }));
  area._abs = function _abs(val) {
    if (val != null && val[$isNegative]) return 0 - dart.notNull(val);
    return val;
  };
  area._min = function _min(one, two) {
    if (one == null) return two;
    if (two == null) return one;
    if (dart.notNull(one) > dart.notNull(two)) return two;
    return one;
  };
  area._max = function _max(one, two) {
    if (one == null) return two;
    if (two == null) return one;
    if (dart.notNull(one) < dart.notNull(two)) return two;
    return one;
  };
  var _name$5 = dart.privateName(attribute$, "_name");
  var C1183;
  var _type$0 = dart.privateName(attribute$, "_type");
  var C1184;
  var C1185;
  var C1186;
  var C1187;
  var C1188;
  var target$3 = dart.privateName(attribute$, "Attribute.target");
  var attribute$0 = dart.privateName(attribute$, "Attribute.attribute");
  var uuid$ = dart.privateName(attribute$, "Attribute.uuid");
  var name$6 = dart.privateName(attribute$, "Attribute.name");
  var scale$0 = dart.privateName(attribute$, "Attribute.scale");
  var value$4 = dart.privateName(attribute$, "Attribute.value");
  var modifyType$ = dart.privateName(attribute$, "Attribute.modifyType");
  attribute$.Attribute = class Attribute extends rest_action.RestActionAble {
    get target() {
      return this[target$3];
    }
    set target(value) {
      super.target = value;
    }
    get attribute() {
      return this[attribute$0];
    }
    set attribute(value) {
      super.attribute = value;
    }
    get uuid() {
      return this[uuid$];
    }
    set uuid(value) {
      this[uuid$] = value;
    }
    get name() {
      return this[name$6];
    }
    set name(value) {
      this[name$6] = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      this[scale$0] = value;
    }
    get value() {
      return this[value$4];
    }
    set value(value) {
      this[value$4] = value;
    }
    get modifyType() {
      return this[modifyType$];
    }
    set modifyType(value) {
      this[modifyType$] = value;
    }
    generate(context) {
      let cmd = "attribute " + dart.str(this.target) + " " + dart.str(this.attribute) + " ";
      switch (this[_type$0]) {
        case C1184 || CT.C1184:
        {
          cmd = cmd + ("base set " + dart.str(this.value));
          break;
        }
        case C1185 || CT.C1185:
        {
          cmd = cmd + "base get";
          break;
        }
        case C1186 || CT.C1186:
        {
          cmd = cmd + ("modifier value get " + dart.str(this.uuid));
          break;
        }
        case C1187 || CT.C1187:
        {
          cmd = cmd + ("modifier remove " + dart.str(this.uuid));
          break;
        }
        case C1188 || CT.C1188:
        {
          let modify = "add";
          if (this.modifyType == attribute$.AttributeModifier.multiply) {
            modify = "multiply";
          } else if (this.modifyType == attribute$.AttributeModifier.multiply_base) {
            modify = "multiply_base";
          }
          cmd = cmd + ("modifier add " + dart.str(this.uuid) + " " + dart.str(this.name) + " " + dart.str(this.value) + " " + modify);
          break;
        }
        default:
        {
          cmd = cmd + "get";
        }
      }
      if (this.scale != null) cmd = cmd + (" " + dart.str(this.scale));
      return new command$.Command.new(cmd);
    }
  };
  (attribute$.Attribute.add = function(target, attribute, opts) {
    let uuid = opts && 'uuid' in opts ? opts.uuid : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let modifyType = opts && 'modifyType' in opts ? opts.modifyType : C1183 || CT.C1183;
    this[scale$0] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[uuid$] = uuid;
    this[value$4] = value;
    this[name$6] = name;
    this[modifyType$] = modifyType;
    this[_type$0] = attribute$._AttributeType.add;
    if (!(uuid != null)) dart.assertFailed(null, L46, 29, 16, "uuid != null");
    if (!(value != null)) dart.assertFailed(null, L46, 30, 16, "value != null");
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  (attribute$.Attribute.set = function(target, attribute, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    this[scale$0] = null;
    this[modifyType$] = null;
    this[name$6] = null;
    this[uuid$] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[value$4] = value;
    this[_type$0] = attribute$._AttributeType.set;
    if (!(value != null)) dart.assertFailed(null, L46, 38, 16, "value != null");
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  (attribute$.Attribute.remove = function(target, attribute, opts) {
    let uuid = opts && 'uuid' in opts ? opts.uuid : null;
    this[scale$0] = null;
    this[modifyType$] = null;
    this[name$6] = null;
    this[value$4] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[uuid$] = uuid;
    this[_type$0] = attribute$._AttributeType.remove;
    if (!(uuid != null)) dart.assertFailed(null, L46, 46, 16, "uuid != null");
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  (attribute$.Attribute.get = function(target, attribute, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[modifyType$] = null;
    this[name$6] = null;
    this[value$4] = null;
    this[uuid$] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[scale$0] = scale;
    this[_type$0] = attribute$._AttributeType.get;
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  (attribute$.Attribute.get_base = function(target, attribute, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[modifyType$] = null;
    this[name$6] = null;
    this[value$4] = null;
    this[uuid$] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[scale$0] = scale;
    this[_type$0] = attribute$._AttributeType.get_base;
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  (attribute$.Attribute.get_modifier = function(target, attribute, opts) {
    let uuid = opts && 'uuid' in opts ? opts.uuid : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[modifyType$] = null;
    this[name$6] = null;
    this[value$4] = null;
    this[target$3] = target;
    this[attribute$0] = attribute;
    this[uuid$] = uuid;
    this[scale$0] = scale;
    this[_type$0] = attribute$._AttributeType.get_modifier;
    if (!(uuid != null)) dart.assertFailed(null, L46, 69, 16, "uuid != null");
    attribute$.Attribute.__proto__.new.call(this);
    ;
  }).prototype = attribute$.Attribute.prototype;
  dart.addTypeTests(attribute$.Attribute);
  dart.addTypeCaches(attribute$.Attribute);
  dart.setMethodSignature(attribute$.Attribute, () => ({
    __proto__: dart.getMethods(attribute$.Attribute.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(attribute$.Attribute, L47);
  dart.setFieldSignature(attribute$.Attribute, () => ({
    __proto__: dart.getFields(attribute$.Attribute.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity)),
    attribute: dart.finalFieldType(dart.legacy(attribute.AttributeType)),
    uuid: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    scale: dart.fieldType(dart.legacy(core.double)),
    value: dart.fieldType(dart.legacy(core.double)),
    modifyType: dart.fieldType(dart.legacy(attribute$.AttributeModifier)),
    [_type$0]: dart.finalFieldType(dart.legacy(attribute$._AttributeType))
  }));
  var C1189;
  var C1190;
  var C1191;
  attribute$.AttributeModifier = class AttributeModifier extends core.Object {
    toString() {
      return this[_name$5];
    }
  };
  (attribute$.AttributeModifier.new = function(index, _name) {
    this.index = index;
    this[_name$5] = _name;
    ;
  }).prototype = attribute$.AttributeModifier.prototype;
  dart.addTypeTests(attribute$.AttributeModifier);
  dart.addTypeCaches(attribute$.AttributeModifier);
  dart.setMethodSignature(attribute$.AttributeModifier, () => ({
    __proto__: dart.getMethods(attribute$.AttributeModifier.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(attribute$.AttributeModifier, L47);
  dart.setFieldSignature(attribute$.AttributeModifier, () => ({
    __proto__: dart.getFields(attribute$.AttributeModifier.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$5]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(attribute$.AttributeModifier, ['toString']);
  attribute$.AttributeModifier.add = C1183 || CT.C1183;
  attribute$.AttributeModifier.multiply = C1189 || CT.C1189;
  attribute$.AttributeModifier.multiply_base = C1190 || CT.C1190;
  attribute$.AttributeModifier.values = C1191 || CT.C1191;
  var C1192;
  var C1193;
  attribute$._AttributeType = class _AttributeType extends core.Object {
    toString() {
      return this[_name$5];
    }
  };
  (attribute$._AttributeType.new = function(index, _name) {
    this.index = index;
    this[_name$5] = _name;
    ;
  }).prototype = attribute$._AttributeType.prototype;
  dart.addTypeTests(attribute$._AttributeType);
  dart.addTypeCaches(attribute$._AttributeType);
  dart.setMethodSignature(attribute$._AttributeType, () => ({
    __proto__: dart.getMethods(attribute$._AttributeType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(attribute$._AttributeType, L47);
  dart.setFieldSignature(attribute$._AttributeType, () => ({
    __proto__: dart.getFields(attribute$._AttributeType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$5]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(attribute$._AttributeType, ['toString']);
  attribute$._AttributeType.add = C1188 || CT.C1188;
  attribute$._AttributeType.set = C1184 || CT.C1184;
  attribute$._AttributeType.get = C1192 || CT.C1192;
  attribute$._AttributeType.get_base = C1185 || CT.C1185;
  attribute$._AttributeType.get_modifier = C1186 || CT.C1186;
  attribute$._AttributeType.remove = C1187 || CT.C1187;
  attribute$._AttributeType.values = C1193 || CT.C1193;
  var target$4 = dart.privateName(spreadplayers, "SpreadPlayers.target");
  var center$ = dart.privateName(spreadplayers, "SpreadPlayers.center");
  var distance$0 = dart.privateName(spreadplayers, "SpreadPlayers.distance");
  var maxRange$ = dart.privateName(spreadplayers, "SpreadPlayers.maxRange");
  var maximumHeight$ = dart.privateName(spreadplayers, "SpreadPlayers.maximumHeight");
  var respectTeams$ = dart.privateName(spreadplayers, "SpreadPlayers.respectTeams");
  spreadplayers.SpreadPlayers = class SpreadPlayers extends rest_action.RestActionAble {
    get target() {
      return this[target$4];
    }
    set target(value) {
      super.target = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get distance() {
      return this[distance$0];
    }
    set distance(value) {
      super.distance = value;
    }
    get maxRange() {
      return this[maxRange$];
    }
    set maxRange(value) {
      super.maxRange = value;
    }
    get maximumHeight() {
      return this[maximumHeight$];
    }
    set maximumHeight(value) {
      super.maximumHeight = value;
    }
    get respectTeams() {
      return this[respectTeams$];
    }
    set respectTeams(value) {
      super.respectTeams = value;
    }
    generate(context) {
      let locations = dart.toString(this.center)[$split](" ");
      locations[$removeAt](1);
      return new command$.Command.new("spreadplayers " + dart.str(locations[$join](" ")) + " " + dart.str(this.distance) + " " + dart.str(this.maxRange) + (this.maximumHeight == null ? "" : " under " + dart.toString(this.maximumHeight)) + " " + dart.str(this.respectTeams) + " " + dart.str(this.target));
    }
  };
  (spreadplayers.SpreadPlayers.new = function(center, opts) {
    let target = opts && 'target' in opts ? opts.target : null;
    let distance = opts && 'distance' in opts ? opts.distance : null;
    let maxRange = opts && 'maxRange' in opts ? opts.maxRange : null;
    let maximumHeight = opts && 'maximumHeight' in opts ? opts.maximumHeight : null;
    let respectTeams = opts && 'respectTeams' in opts ? opts.respectTeams : false;
    this[center$] = center;
    this[target$4] = target;
    this[distance$0] = distance;
    this[maxRange$] = maxRange;
    this[maximumHeight$] = maximumHeight;
    this[respectTeams$] = respectTeams;
    if (!(center != null)) dart.assertFailed(null, L48, 24, 16, "center != null");
    if (!(distance != null)) dart.assertFailed(null, L48, 25, 16, "distance != null");
    if (!(target != null)) dart.assertFailed(null, L48, 26, 16, "target != null");
    if (!(maxRange != null)) dart.assertFailed(null, L48, 27, 16, "maxRange != null");
    spreadplayers.SpreadPlayers.__proto__.new.call(this);
    ;
  }).prototype = spreadplayers.SpreadPlayers.prototype;
  dart.addTypeTests(spreadplayers.SpreadPlayers);
  dart.addTypeCaches(spreadplayers.SpreadPlayers);
  dart.setMethodSignature(spreadplayers.SpreadPlayers, () => ({
    __proto__: dart.getMethods(spreadplayers.SpreadPlayers.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(spreadplayers.SpreadPlayers, L49);
  dart.setFieldSignature(spreadplayers.SpreadPlayers, () => ({
    __proto__: dart.getFields(spreadplayers.SpreadPlayers.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity)),
    center: dart.finalFieldType(dart.legacy(location$.Location)),
    distance: dart.finalFieldType(dart.legacy(core.double)),
    maxRange: dart.finalFieldType(dart.legacy(core.double)),
    maximumHeight: dart.finalFieldType(dart.legacy(core.double)),
    respectTeams: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var entity$4 = dart.privateName(spawnpoint, "Spawnpoint.entity");
  var position$ = dart.privateName(spawnpoint, "Spawnpoint.position");
  spawnpoint.Spawnpoint = class Spawnpoint extends rest_action.RestActionAble {
    get entity() {
      return this[entity$4];
    }
    set entity(value) {
      super.entity = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    generate(context) {
      let cmd = "spawnpoint";
      if (this.entity != null) {
        cmd = cmd + (" " + dart.notNull(dart.toString(this.entity)));
        if (this.position != null) cmd = cmd + (" " + dart.notNull(dart.toString(this.position)));
      }
      return new command$.Command.new(cmd);
    }
  };
  (spawnpoint.Spawnpoint.new = function(opts) {
    let entity = opts && 'entity' in opts ? opts.entity : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[entity$4] = entity;
    this[position$] = position;
    spawnpoint.Spawnpoint.__proto__.new.call(this);
    ;
  }).prototype = spawnpoint.Spawnpoint.prototype;
  dart.addTypeTests(spawnpoint.Spawnpoint);
  dart.addTypeCaches(spawnpoint.Spawnpoint);
  dart.setMethodSignature(spawnpoint.Spawnpoint, () => ({
    __proto__: dart.getMethods(spawnpoint.Spawnpoint.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(spawnpoint.Spawnpoint, L50);
  dart.setFieldSignature(spawnpoint.Spawnpoint, () => ({
    __proto__: dart.getFields(spawnpoint.Spawnpoint.__proto__),
    entity: dart.finalFieldType(dart.legacy(entity$.Entity)),
    position: dart.finalFieldType(dart.legacy(location$.Location))
  }));
  var target$5 = dart.privateName(spectate, "Spectate.target");
  spectate.Spectate = class Spectate extends rest_action.RestActionAble {
    get target() {
      return this[target$5];
    }
    set target(value) {
      super.target = value;
    }
    generate(context) {
      return new command$.Command.new("spectate " + dart.notNull(dart.toString(this.target)));
    }
  };
  (spectate.Spectate.new = function(target) {
    this[target$5] = target;
    spectate.Spectate.__proto__.new.call(this);
    ;
  }).prototype = spectate.Spectate.prototype;
  dart.addTypeTests(spectate.Spectate);
  dart.addTypeCaches(spectate.Spectate);
  dart.setMethodSignature(spectate.Spectate, () => ({
    __proto__: dart.getMethods(spectate.Spectate.__proto__),
    generate: dart.fnType(dart.legacy(command$.Command), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(spectate.Spectate, L51);
  dart.setFieldSignature(spectate.Spectate, () => ({
    __proto__: dart.getFields(spectate.Spectate.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity))
  }));
  var target$6 = dart.privateName(gamemode, "SetGamemode.target");
  var mode$ = dart.privateName(gamemode, "SetGamemode.mode");
  gamemode.SetGamemode = class SetGamemode extends rest_action.RestActionAble {
    get target() {
      return this[target$6];
    }
    set target(value) {
      super.target = value;
    }
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    generate(context) {
      let t5;
      return new command$.Command.new("gamemode " + dart.notNull(dart.toString(this.mode)[$split](".")[$_get](1)) + " " + dart.notNull(dart.toString((t5 = this.target, t5 == null ? new entity$.Entity.Self() : t5))));
    }
  };
  (gamemode.SetGamemode.new = function(mode, opts) {
    let target = opts && 'target' in opts ? opts.target : null;
    this[mode$] = mode;
    this[target$6] = target;
    gamemode.SetGamemode.__proto__.new.call(this);
    ;
  }).prototype = gamemode.SetGamemode.prototype;
  dart.addTypeTests(gamemode.SetGamemode);
  dart.addTypeCaches(gamemode.SetGamemode);
  dart.setMethodSignature(gamemode.SetGamemode, () => ({
    __proto__: dart.getMethods(gamemode.SetGamemode.__proto__),
    generate: dart.fnType(dart.legacy(command$.Command), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(gamemode.SetGamemode, L52);
  dart.setFieldSignature(gamemode.SetGamemode, () => ({
    __proto__: dart.getFields(gamemode.SetGamemode.__proto__),
    target: dart.finalFieldType(dart.legacy(entity$.Entity)),
    mode: dart.finalFieldType(dart.legacy(entity$.Gamemode))
  }));
  var _setFacing = dart.privateName(tp, "_setFacing");
  var entity$5 = dart.privateName(tp, "Tp.entity");
  var to$0 = dart.privateName(tp, "Tp.to");
  tp.Tp = class Tp extends rest_action.RestActionAble {
    get entity() {
      return this[entity$5];
    }
    set entity(value) {
      this[entity$5] = value;
    }
    get to() {
      return this[to$0];
    }
    set to(value) {
      this[to$0] = value;
    }
    [_setFacing](facing) {
      if (facing != null) {
        if (LocationL().is(facing)) {
          this.to = dart.notNull(this.to) + (" facing " + dart.notNull(dart.toString(facing)));
        } else if (EntityL().is(facing)) {
          this.to = dart.notNull(this.to) + (" facing entity " + dart.notNull(dart.toString(facing)));
        } else {
          dart.throw("Please set the facing part either to a entity or location");
        }
      }
    }
    generate(context) {
      return new command$.Command.new("tp " + dart.notNull(dart.toString(this.entity)) + " " + dart.notNull(this.to));
    }
  };
  (tp.Tp.new = function(entity, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    let rot = opts && 'rot' in opts ? opts.rot : null;
    this[to$0] = null;
    this[entity$5] = entity;
    tp.Tp.__proto__.new.call(this);
    this.to = dart.toString(to);
    if (rot != null) this.to = dart.notNull(this.to) + (" " + dart.notNull(dart.toString(rot)));
    this[_setFacing](facing);
  }).prototype = tp.Tp.prototype;
  (tp.Tp.entity = function(entity, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    this[to$0] = null;
    this[entity$5] = entity;
    tp.Tp.__proto__.new.call(this);
    this.to = dart.toString(to);
    this[_setFacing](facing);
  }).prototype = tp.Tp.prototype;
  dart.addTypeTests(tp.Tp);
  dart.addTypeCaches(tp.Tp);
  dart.setMethodSignature(tp.Tp, () => ({
    __proto__: dart.getMethods(tp.Tp.__proto__),
    [_setFacing]: dart.fnType(dart.void, [dart.dynamic]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(tp.Tp, L53);
  dart.setFieldSignature(tp.Tp, () => ({
    __proto__: dart.getFields(tp.Tp.__proto__),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    to: dart.fieldType(dart.legacy(core.String))
  }));
  var target$7 = dart.privateName(clear, "Clear.target");
  var item$ = dart.privateName(clear, "Clear.item");
  clear.Clear = class Clear extends rest_action.RestActionAble {
    get target() {
      return this[target$7];
    }
    set target(value) {
      this[target$7] = value;
    }
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    generate(context) {
      return new command$.Command.new("clear " + dart.str(dart.toString(this.target)) + " " + dart.str(this.item.getGiveNotation({withDamage: false})));
    }
  };
  (clear.Clear.new = function(target, item) {
    this[target$7] = target;
    this[item$] = item;
    clear.Clear.__proto__.new.call(this);
    ;
  }).prototype = clear.Clear.prototype;
  dart.addTypeTests(clear.Clear);
  dart.addTypeCaches(clear.Clear);
  dart.setMethodSignature(clear.Clear, () => ({
    __proto__: dart.getMethods(clear.Clear.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(clear.Clear, L54);
  dart.setFieldSignature(clear.Clear, () => ({
    __proto__: dart.getFields(clear.Clear.__proto__),
    target: dart.fieldType(dart.legacy(entity$.Entity)),
    item: dart.fieldType(dart.legacy(item.Item))
  }));
  var entity$6 = dart.privateName(advancement$, "Advancement.entity");
  var revoke$ = dart.privateName(advancement$, "Advancement.revoke");
  var mode$0 = dart.privateName(advancement$, "Advancement.mode");
  var advancement$0 = dart.privateName(advancement$, "Advancement.advancement");
  var criteria$ = dart.privateName(advancement$, "Advancement.criteria");
  advancement$.Advancement = class Advancement extends rest_action.RestActionAble {
    get entity() {
      return this[entity$6];
    }
    set entity(value) {
      this[entity$6] = value;
    }
    get revoke() {
      return this[revoke$];
    }
    set revoke(value) {
      this[revoke$] = value;
    }
    get mode() {
      return this[mode$0];
    }
    set mode(value) {
      this[mode$0] = value;
    }
    get advancement() {
      return this[advancement$0];
    }
    set advancement(value) {
      this[advancement$0] = value;
    }
    get criteria() {
      return this[criteria$];
    }
    set criteria(value) {
      this[criteria$] = value;
    }
    generate(context) {
      let res = "advancement ";
      res = res + (dart.test(this.revoke) ? "revoke" : "grant");
      res = res + (" " + dart.str(dart.toString(this.entity)) + " " + dart.str(this.mode) + " " + dart.str(this.advancement));
      if (this.criteria != null) res = res + (" " + dart.str(this.criteria));
      return new command$.Command.new(res);
    }
  };
  (advancement$.Advancement.grant = function(entity, advancement, opts) {
    let mode = opts && 'mode' in opts ? opts.mode : "only";
    let criteria = opts && 'criteria' in opts ? opts.criteria : null;
    this[revoke$] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[mode$0] = mode;
    this[criteria$] = criteria;
    advancement$.Advancement.__proto__.new.call(this);
    this.revoke = false;
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.revoke = function(entity, advancement, opts) {
    let mode = opts && 'mode' in opts ? opts.mode : "only";
    let criteria = opts && 'criteria' in opts ? opts.criteria : null;
    this[revoke$] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[mode$0] = mode;
    this[criteria$] = criteria;
    advancement$.Advancement.__proto__.new.call(this);
    this.revoke = true;
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.everything = function(entity, opts) {
    let revoke = opts && 'revoke' in opts ? opts.revoke : false;
    this[criteria$] = null;
    this[mode$0] = null;
    this[advancement$0] = null;
    this[entity$6] = entity;
    this[revoke$] = revoke;
    advancement$.Advancement.__proto__.new.call(this);
    this.mode = "everything";
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.only = function(entity, advancement, opts) {
    let revoke = opts && 'revoke' in opts ? opts.revoke : false;
    let criteria = opts && 'criteria' in opts ? opts.criteria : null;
    this[mode$0] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[revoke$] = revoke;
    this[criteria$] = criteria;
    advancement$.Advancement.__proto__.new.call(this);
    this.mode = "only";
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.from = function(entity, advancement, opts) {
    let revoke = opts && 'revoke' in opts ? opts.revoke : false;
    this[criteria$] = null;
    this[mode$0] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[revoke$] = revoke;
    advancement$.Advancement.__proto__.new.call(this);
    this.mode = "from";
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.until = function(entity, advancement, opts) {
    let revoke = opts && 'revoke' in opts ? opts.revoke : false;
    this[criteria$] = null;
    this[mode$0] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[revoke$] = revoke;
    advancement$.Advancement.__proto__.new.call(this);
    this.mode = "until";
  }).prototype = advancement$.Advancement.prototype;
  (advancement$.Advancement.through = function(entity, advancement, opts) {
    let revoke = opts && 'revoke' in opts ? opts.revoke : false;
    this[criteria$] = null;
    this[mode$0] = null;
    this[entity$6] = entity;
    this[advancement$0] = advancement;
    this[revoke$] = revoke;
    advancement$.Advancement.__proto__.new.call(this);
    this.mode = "through";
  }).prototype = advancement$.Advancement.prototype;
  dart.addTypeTests(advancement$.Advancement);
  dart.addTypeCaches(advancement$.Advancement);
  dart.setMethodSignature(advancement$.Advancement, () => ({
    __proto__: dart.getMethods(advancement$.Advancement.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(advancement$.Advancement, L55);
  dart.setFieldSignature(advancement$.Advancement, () => ({
    __proto__: dart.getFields(advancement$.Advancement.__proto__),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    revoke: dart.fieldType(dart.legacy(core.bool)),
    mode: dart.fieldType(dart.legacy(core.String)),
    advancement: dart.fieldType(dart.legacy(core.String)),
    criteria: dart.fieldType(dart.legacy(core.String))
  }));
  var _type$1 = dart.privateName(bossbar, "_type");
  var _option = dart.privateName(bossbar, "_option");
  var _getNameJson = dart.privateName(bossbar, "_getNameJson");
  var C1194;
  var id$ = dart.privateName(bossbar, "Bossbar.id");
  var name$7 = dart.privateName(bossbar, "Bossbar.name");
  var nameTexts = dart.privateName(bossbar, "Bossbar.nameTexts");
  var modifiers$ = dart.privateName(bossbar, "Bossbar.modifiers");
  bossbar.Bossbar = class Bossbar extends rest_action.RestActionAble {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$7];
    }
    set name(value) {
      this[name$7] = value;
    }
    get nameTexts() {
      return this[nameTexts];
    }
    set nameTexts(value) {
      this[nameTexts] = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      this[modifiers$] = value;
    }
    remove() {
      this[_type$1] = "remove";
      return this;
    }
    get(option) {
      this[_option] = option;
      this[_type$1] = "get";
      return this;
    }
    show(player) {
      this.modifiers[$_set]("players", dart.toString(player));
      return this;
    }
    set(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let nameTexts = opts && 'nameTexts' in opts ? opts.nameTexts : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let players = opts && 'players' in opts ? opts.players : null;
      if (name != null) this.nameTexts = JSArrayOfTextComponentL().of([new text_components.TextComponent.new(name)]);
      if (nameTexts != null) this.nameTexts = nameTexts;
      if (color != null) this.modifiers[$_set]("color", dart.toString(color));
      if (style != null) this.modifiers[$_set]("style", style);
      if (value != null) this.modifiers[$_set]("value", dart.toString(value));
      if (max != null) this.modifiers[$_set]("max", dart.toString(max));
      if (visible != null) this.modifiers[$_set]("visible", dart.toString(visible));
      if (players != null) this.modifiers[$_set]("players", dart.toString(players));
      this[_type$1] = "set";
      return this;
    }
    generate(context) {
      switch (this[_type$1]) {
        case "add":
        {
          return new command$.Command.new("bossbar add " + dart.str(this.id) + " {\"text\":\"" + dart.str(this.name) + "\"}");
        }
        case "remove":
        {
          return new command$.Command.new("bossbar remove " + dart.str(this.id));
        }
        case "get":
        {
          return new command$.Command.new("bossbar get " + dart.str(this.id) + " " + dart.str(dart.toString(this[_option])[$split](".")[$_get](1)));
        }
        case "set":
        {
          {
            let widgets = JSArrayOfWidgetL().of([]);
            if (this.nameTexts != null) {
              widgets[$add](new command$.Command.new("bossbar set " + dart.str(this.id) + " name " + dart.str(this[_getNameJson]())));
            }
            this.modifiers[$forEach](dart.fn((key, value) => {
              widgets[$add](new command$.Command.new("bossbar set " + dart.str(this.id) + " " + dart.str(key) + " " + dart.str(value)));
            }, StringLAndStringLToNullN()));
            return new for_list.For.of(widgets);
          }
        }
        default:
        {
          return null;
        }
      }
    }
    [_getNameJson]() {
      if (this.nameTexts[$length] === 1) return this.nameTexts[$_get](0).toJson();
      return convert.json.encode(this.nameTexts[$map](MapL(), dart.fn(text => text.toMap(), TextComponentLToMapL()))[$toList]());
    }
    storeResult(command, option, opts) {
      let useSuccess = opts && 'useSuccess' in opts ? opts.useSuccess : false;
      let strOption = null;
      switch (option) {
        case C1194 || CT.C1194:
        {
          strOption = "max";
          break;
        }
        case C9 || CT.C9:
        {
          strOption = "value";
          break;
        }
        default:
        {
          dart.throw("Please use BossbarOption.max or BossbarOption.value with storeResult!");
        }
      }
      ;
      return new execute.Execute.new({children: JSArrayOfWidgetL().of([command]), encapsulate: false, args: JSArrayOfListLOfStringL().of([JSArrayOfStringL().of(["store " + (dart.test(useSuccess) ? "success" : "result") + (" bossbar " + dart.str(this.id) + " " + dart.str(strOption))])])});
    }
  };
  (bossbar.Bossbar.new = function(id, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[_type$1] = null;
    this[nameTexts] = null;
    this[_option] = null;
    this[modifiers$] = new (IdentityMapOfStringL$StringL()).new();
    this[id$] = id;
    this[name$7] = name;
    bossbar.Bossbar.__proto__.new.call(this);
    this.name == null ? this.name = this.id : null;
    this[_type$1] = "add";
  }).prototype = bossbar.Bossbar.prototype;
  dart.addTypeTests(bossbar.Bossbar);
  dart.addTypeCaches(bossbar.Bossbar);
  dart.setMethodSignature(bossbar.Bossbar, () => ({
    __proto__: dart.getMethods(bossbar.Bossbar.__proto__),
    remove: dart.fnType(dart.legacy(bossbar.Bossbar), []),
    get: dart.fnType(dart.legacy(bossbar.Bossbar), [dart.legacy(bossbar.BossbarOption)]),
    show: dart.fnType(dart.legacy(bossbar.Bossbar), [dart.legacy(entity$.Entity)]),
    set: dart.fnType(dart.legacy(bossbar.Bossbar), [], {color: dart.legacy(text_components.Color), max: dart.legacy(core.int), name: dart.legacy(core.String), nameTexts: dart.legacy(core.List$(dart.legacy(text_components.TextComponent))), players: dart.legacy(entity$.Entity), style: dart.legacy(core.String), value: dart.legacy(core.int), visible: dart.legacy(core.bool)}, {}),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    [_getNameJson]: dart.fnType(dart.legacy(core.String), []),
    storeResult: dart.fnType(dart.legacy(execute.Execute), [dart.legacy(command$.Command), dart.legacy(bossbar.BossbarOption)], {useSuccess: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(bossbar.Bossbar, L56);
  dart.setFieldSignature(bossbar.Bossbar, () => ({
    __proto__: dart.getFields(bossbar.Bossbar.__proto__),
    [_type$1]: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    nameTexts: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_components.TextComponent)))),
    [_option]: dart.fieldType(dart.legacy(bossbar.BossbarOption)),
    modifiers: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))
  }));
  var C1195;
  var C1196;
  var C1197;
  bossbar.BossbarOption = class BossbarOption extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (bossbar.BossbarOption.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = bossbar.BossbarOption.prototype;
  dart.addTypeTests(bossbar.BossbarOption);
  dart.addTypeCaches(bossbar.BossbarOption);
  dart.setMethodSignature(bossbar.BossbarOption, () => ({
    __proto__: dart.getMethods(bossbar.BossbarOption.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(bossbar.BossbarOption, L56);
  dart.setFieldSignature(bossbar.BossbarOption, () => ({
    __proto__: dart.getFields(bossbar.BossbarOption.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$1]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(bossbar.BossbarOption, ['toString']);
  bossbar.BossbarOption.max = C1194 || CT.C1194;
  bossbar.BossbarOption.players = C1195 || CT.C1195;
  bossbar.BossbarOption.value = C9 || CT.C9;
  bossbar.BossbarOption.visible = C1196 || CT.C1196;
  bossbar.BossbarOption.values = C1197 || CT.C1197;
  var _mode = dart.privateName(trigger, "_mode");
  var objective$ = dart.privateName(trigger, "Trigger.objective");
  var enableScore$ = dart.privateName(trigger, "Trigger.enableScore");
  var addNew$ = dart.privateName(trigger, "Trigger.addNew");
  trigger.Trigger = class Trigger extends rest_action.RestActionAble {
    get objective() {
      return this[objective$];
    }
    set objective(value) {
      this[objective$] = value;
    }
    get enableScore() {
      return this[enableScore$];
    }
    set enableScore(value) {
      this[enableScore$] = value;
    }
    get addNew() {
      return this[addNew$];
    }
    set addNew(value) {
      this[addNew$] = value;
    }
    generate(context) {
      let t5;
      let command = new command$.Command.new("trigger " + dart.str(this.objective) + " " + dart.notNull((t5 = this[_mode], t5 == null ? "" : t5)));
      if (this[_mode] === "enable") {
        command = new command$.Command.new("scoreboard players enable " + dart.notNull(dart.toString(this.enableScore.entity)) + " " + dart.notNull(this.enableScore.score));
      }
      if (this.addNew != null && dart.test(this.addNew)) {
        return new for_list.For.of(JSArrayOfWidgetL().of([new scoreboard.Scoreboard.trigger(this.objective), command]));
      }
      return command;
    }
  };
  (trigger.Trigger.new = function(objective, opts) {
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[objective$] = "";
    this[_mode] = null;
    this[enableScore$] = null;
    this[objective$] = objective;
    this[addNew$] = addNew;
    trigger.Trigger.__proto__.new.call(this);
    ;
  }).prototype = trigger.Trigger.prototype;
  (trigger.Trigger.set = function(objective, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[objective$] = "";
    this[_mode] = null;
    this[enableScore$] = null;
    this[objective$] = objective;
    this[addNew$] = addNew;
    trigger.Trigger.__proto__.new.call(this);
    this[_mode] = "set " + dart.toString(value);
  }).prototype = trigger.Trigger.prototype;
  (trigger.Trigger.add = function(objective, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[objective$] = "";
    this[_mode] = null;
    this[enableScore$] = null;
    this[objective$] = objective;
    this[addNew$] = addNew;
    trigger.Trigger.__proto__.new.call(this);
    this[_mode] = "add " + dart.toString(value);
  }).prototype = trigger.Trigger.prototype;
  (trigger.Trigger.enable = function(enableScore, opts) {
    let addNew = opts && 'addNew' in opts ? opts.addNew : true;
    this[objective$] = "";
    this[_mode] = null;
    this[enableScore$] = enableScore;
    this[addNew$] = addNew;
    trigger.Trigger.__proto__.new.call(this);
    this[_mode] = "enable";
  }).prototype = trigger.Trigger.prototype;
  dart.addTypeTests(trigger.Trigger);
  dart.addTypeCaches(trigger.Trigger);
  dart.setMethodSignature(trigger.Trigger, () => ({
    __proto__: dart.getMethods(trigger.Trigger.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(trigger.Trigger, L57);
  dart.setFieldSignature(trigger.Trigger, () => ({
    __proto__: dart.getFields(trigger.Trigger.__proto__),
    objective: dart.fieldType(dart.legacy(core.String)),
    enableScore: dart.fieldType(dart.legacy(score$.Score)),
    [_mode]: dart.fieldType(dart.legacy(core.String)),
    addNew: dart.fieldType(dart.legacy(core.bool))
  }));
  var _gen = dart.privateName(particle$, "_gen");
  particle$.Particle = class Particle extends rest_action.RestActionAble {
    generate(context) {
      return new command$.Command.new("particle " + dart.notNull(this[_gen]));
    }
  };
  (particle$.Particle.new = function(particle, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let delta = opts && 'delta' in opts ? opts.delta : null;
    let speed = opts && 'speed' in opts ? opts.speed : 0;
    let count = opts && 'count' in opts ? opts.count : 1;
    let force = opts && 'force' in opts ? opts.force : false;
    let player = opts && 'player' in opts ? opts.player : null;
    this[_gen] = null;
    particle$.Particle.__proto__.new.call(this);
    this[_gen] = dart.toString(particle);
    if (location != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(location)));
    if (delta != null) {
      if (speed == null || count == null || location == null) {
        dart.throw("If you decide to use the full particle command add a delta, location, speed and count property!");
      }
      this[_gen] = dart.notNull(this[_gen]) + (" " + dart.str(delta) + " " + dart.str(speed) + " " + dart.str(count) + " ");
      this[_gen] = dart.notNull(this[_gen]) + (dart.test(force) ? "force" : "normal");
      if (player != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(player)));
    }
  }).prototype = particle$.Particle.prototype;
  (particle$.Particle.block = function(block, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let delta = opts && 'delta' in opts ? opts.delta : null;
    let speed = opts && 'speed' in opts ? opts.speed : 0;
    let count = opts && 'count' in opts ? opts.count : 1;
    let force = opts && 'force' in opts ? opts.force : null;
    let player = opts && 'player' in opts ? opts.player : null;
    this[_gen] = null;
    particle$.Particle.__proto__.new.call(this);
    this[_gen] = "minecraft:block ";
    this[_gen] = dart.notNull(this[_gen]) + dart.notNull(dart.toString(block));
    if (location != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(location)));
    if (delta != null) {
      if (speed == null || count == null || location == null) {
        dart.throw("If you decide to use the full particle command add a delta, location, speed and count property!");
      }
      this[_gen] = dart.notNull(this[_gen]) + (" " + dart.str(delta) + " " + dart.str(speed) + " " + dart.str(count) + " ");
      this[_gen] = dart.notNull(this[_gen]) + (dart.test(force) ? "force" : "normal");
      if (player != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(player)));
    }
  }).prototype = particle$.Particle.prototype;
  (particle$.Particle.item = function(item, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let delta = opts && 'delta' in opts ? opts.delta : null;
    let speed = opts && 'speed' in opts ? opts.speed : 0;
    let count = opts && 'count' in opts ? opts.count : 1;
    let force = opts && 'force' in opts ? opts.force : false;
    let player = opts && 'player' in opts ? opts.player : null;
    this[_gen] = null;
    particle$.Particle.__proto__.new.call(this);
    this[_gen] = "minecraft:item ";
    this[_gen] = dart.notNull(this[_gen]) + dart.notNull(item.getId());
    if (location != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(location)));
    if (delta != null) {
      if (speed == null || count == null) {
        dart.throw("If you decide to use the full particle command add a delta, speed and count property!");
      }
      this[_gen] = dart.notNull(this[_gen]) + (" " + dart.str(delta) + " " + dart.str(speed) + " " + dart.str(count));
      this[_gen] = dart.notNull(this[_gen]) + (dart.test(force) ? "force" : "normal");
      if (player != null) this[_gen] = dart.notNull(this[_gen]) + (" " + dart.notNull(dart.toString(player)));
    }
  }).prototype = particle$.Particle.prototype;
  dart.addTypeTests(particle$.Particle);
  dart.addTypeCaches(particle$.Particle);
  dart.setMethodSignature(particle$.Particle, () => ({
    __proto__: dart.getMethods(particle$.Particle.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(particle$.Particle, L58);
  dart.setFieldSignature(particle$.Particle, () => ({
    __proto__: dart.getFields(particle$.Particle.__proto__),
    [_gen]: dart.fieldType(dart.legacy(core.String))
  }));
  var _file$ = dart.privateName(schedule, "_file");
  var _name$6 = dart.privateName(schedule, "_name");
  var mode$1 = dart.privateName(schedule, "Schedule.mode");
  var ticks$ = dart.privateName(schedule, "Schedule.ticks");
  schedule.Schedule = class Schedule extends rest_action.RestActionAble {
    get mode() {
      return this[mode$1];
    }
    set mode(value) {
      this[mode$1] = value;
    }
    get ticks() {
      return this[ticks$];
    }
    set ticks(value) {
      this[ticks$] = value;
    }
    generate(context) {
      const getMode = () => {
        if (this.mode == null) return "";
        if (this.mode == schedule.ScheduleMode.append) return " append";
        return " replace";
      };
      dart.fn(getMode, VoidToStringL());
      if (this[_file$] != null) {
        return new group.Group.new({prefix: "schedule", children: JSArrayOfWidgetL().of([this[_file$]]), suffix: " " + dart.toString(this.ticks) + "t" + dart.notNull(getMode())});
      }
      if (this.mode == schedule.ScheduleMode.clear) {
        return new command$.Command.new("schedule clear " + dart.notNull(context.packId) + ":" + dart.notNull(this[_name$6]));
      }
      return new command$.Command.new("schedule function " + dart.notNull(context.packId) + ":" + dart.notNull(this[_name$6]) + " " + dart.toString(this.ticks) + "t" + dart.notNull(getMode()));
    }
  };
  (schedule.Schedule.new = function(_name, opts) {
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    this[_file$] = null;
    this[_name$6] = _name;
    this[ticks$] = ticks;
    this[mode$1] = mode;
    if (!(ticks != null)) dart.assertFailed(null, L59, 16, 16, "ticks != null");
    schedule.Schedule.__proto__.new.call(this);
    ;
  }).prototype = schedule.Schedule.prototype;
  (schedule.Schedule.file = function(_file, opts) {
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    this[_name$6] = null;
    this[_file$] = _file;
    this[ticks$] = ticks;
    this[mode$1] = mode;
    if (!(ticks != null)) dart.assertFailed(null, L59, 18, 16, "ticks != null");
    schedule.Schedule.__proto__.new.call(this);
    this[_file$].execute = true;
  }).prototype = schedule.Schedule.prototype;
  (schedule.Schedule.append = function(_name, opts) {
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    this[_file$] = null;
    this[mode$1] = null;
    this[_name$6] = _name;
    this[ticks$] = ticks;
    if (!(ticks != null)) dart.assertFailed(null, L59, 23, 64, "ticks != null");
    schedule.Schedule.__proto__.new.call(this);
    this.mode = schedule.ScheduleMode.append;
  }).prototype = schedule.Schedule.prototype;
  (schedule.Schedule.clear = function(_name) {
    this[_file$] = null;
    this[mode$1] = null;
    this[ticks$] = null;
    this[_name$6] = _name;
    schedule.Schedule.__proto__.new.call(this);
    this.mode = schedule.ScheduleMode.clear;
  }).prototype = schedule.Schedule.prototype;
  (schedule.Schedule.appendFile = function(_file, opts) {
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    this[mode$1] = null;
    this[_name$6] = null;
    this[_file$] = _file;
    this[ticks$] = ticks;
    if (!(ticks != null)) dart.assertFailed(null, L59, 32, 16, "ticks != null");
    schedule.Schedule.__proto__.new.call(this);
    this.mode = schedule.ScheduleMode.append;
  }).prototype = schedule.Schedule.prototype;
  dart.addTypeTests(schedule.Schedule);
  dart.addTypeCaches(schedule.Schedule);
  dart.setMethodSignature(schedule.Schedule, () => ({
    __proto__: dart.getMethods(schedule.Schedule.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(schedule.Schedule, L60);
  dart.setFieldSignature(schedule.Schedule, () => ({
    __proto__: dart.getFields(schedule.Schedule.__proto__),
    [_name$6]: dart.fieldType(dart.legacy(core.String)),
    [_file$]: dart.fieldType(dart.legacy(file.File)),
    mode: dart.fieldType(dart.legacy(schedule.ScheduleMode)),
    ticks: dart.fieldType(dart.legacy(core.int))
  }));
  var C1198;
  var C1199;
  var C1200;
  var C1201;
  schedule.ScheduleMode = class ScheduleMode extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (schedule.ScheduleMode.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = schedule.ScheduleMode.prototype;
  dart.addTypeTests(schedule.ScheduleMode);
  dart.addTypeCaches(schedule.ScheduleMode);
  dart.setMethodSignature(schedule.ScheduleMode, () => ({
    __proto__: dart.getMethods(schedule.ScheduleMode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(schedule.ScheduleMode, L60);
  dart.setFieldSignature(schedule.ScheduleMode, () => ({
    __proto__: dart.getFields(schedule.ScheduleMode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$6]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(schedule.ScheduleMode, ['toString']);
  schedule.ScheduleMode.append = C1198 || CT.C1198;
  schedule.ScheduleMode.replace = C1199 || CT.C1199;
  schedule.ScheduleMode.clear = C1200 || CT.C1200;
  schedule.ScheduleMode.values = C1201 || CT.C1201;
  var target$8 = dart.privateName(kill, "Kill.target");
  kill.Kill = class Kill extends rest_action.RestActionAble {
    get target() {
      return this[target$8];
    }
    set target(value) {
      this[target$8] = value;
    }
    generate(context) {
      if (this.target == null) return new command$.Command.new("kill");
      return new command$.Command.new("kill " + dart.notNull(dart.toString(this.target)));
    }
  };
  (kill.Kill.new = function(target = null) {
    this[target$8] = target;
    kill.Kill.__proto__.new.call(this);
    ;
  }).prototype = kill.Kill.prototype;
  dart.addTypeTests(kill.Kill);
  dart.addTypeCaches(kill.Kill);
  dart.setMethodSignature(kill.Kill, () => ({
    __proto__: dart.getMethods(kill.Kill.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(kill.Kill, L61);
  dart.setFieldSignature(kill.Kill, () => ({
    __proto__: dart.getFields(kill.Kill.__proto__),
    target: dart.fieldType(dart.legacy(entity$.Entity))
  }));
  var _setFacing$ = dart.privateName(teleport, "_setFacing");
  var entity$7 = dart.privateName(teleport, "Teleport.entity");
  var to$1 = dart.privateName(teleport, "Teleport.to");
  teleport.Teleport = class Teleport extends rest_action.RestActionAble {
    get entity() {
      return this[entity$7];
    }
    set entity(value) {
      this[entity$7] = value;
    }
    get to() {
      return this[to$1];
    }
    set to(value) {
      this[to$1] = value;
    }
    [_setFacing$](facing) {
      if (facing != null) {
        if (LocationL().is(facing)) {
          this.to = dart.notNull(this.to) + (" facing " + dart.notNull(dart.toString(facing)));
        } else if (EntityL().is(facing)) {
          this.to = dart.notNull(this.to) + (" facing entity " + dart.notNull(dart.toString(facing)));
        } else {
          dart.throw("Please set the facing part either to a entity or location");
        }
      }
    }
    generate(context) {
      return new command$.Command.new("teleport " + dart.notNull(dart.toString(this.entity)) + " " + dart.notNull(this.to));
    }
  };
  (teleport.Teleport.new = function(entity, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    let rot = opts && 'rot' in opts ? opts.rot : null;
    this[to$1] = null;
    this[entity$7] = entity;
    teleport.Teleport.__proto__.new.call(this);
    this.to = dart.toString(to);
    if (rot != null) this.to = dart.notNull(this.to) + (" " + dart.notNull(dart.toString(rot)));
    this[_setFacing$](facing);
  }).prototype = teleport.Teleport.prototype;
  (teleport.Teleport.entity = function(entity, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let facing = opts && 'facing' in opts ? opts.facing : null;
    this[to$1] = null;
    this[entity$7] = entity;
    teleport.Teleport.__proto__.new.call(this);
    this.to = dart.toString(to);
    this[_setFacing$](facing);
  }).prototype = teleport.Teleport.prototype;
  dart.addTypeTests(teleport.Teleport);
  dart.addTypeCaches(teleport.Teleport);
  dart.setMethodSignature(teleport.Teleport, () => ({
    __proto__: dart.getMethods(teleport.Teleport.__proto__),
    [_setFacing$]: dart.fnType(dart.void, [dart.dynamic]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(teleport.Teleport, L62);
  dart.setFieldSignature(teleport.Teleport, () => ({
    __proto__: dart.getFields(teleport.Teleport.__proto__),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    to: dart.fieldType(dart.legacy(core.String))
  }));
  var jsonText = dart.privateName(tellraw, "Tellraw.jsonText");
  var entity = dart.privateName(tellraw, "Tellraw.entity");
  tellraw.Tellraw = class Tellraw extends rest_action.RestActionAble {
    get jsonText() {
      return this[jsonText];
    }
    set jsonText(value) {
      this[jsonText] = value;
    }
    get entity() {
      return this[entity];
    }
    set entity(value) {
      this[entity] = value;
    }
    generate(context) {
      return new command$.Command.new("tellraw " + dart.notNull(this.entity) + " " + dart.notNull(this.jsonText));
    }
  };
  (tellraw.Tellraw.new = function(selector, opts) {
    let show = opts && 'show' in opts ? opts.show : null;
    this[jsonText] = null;
    this[entity] = null;
    tellraw.Tellraw.__proto__.new.call(this);
    this.entity = dart.toString(selector);
    this.jsonText = convert.json.encode(show[$map](MapL(), dart.fn(text => text.toMap(), TextComponentLToMapL()))[$toList]())[$replaceAll]("\\", "\\");
    ;
  }).prototype = tellraw.Tellraw.prototype;
  dart.addTypeTests(tellraw.Tellraw);
  dart.addTypeCaches(tellraw.Tellraw);
  dart.setMethodSignature(tellraw.Tellraw, () => ({
    __proto__: dart.getMethods(tellraw.Tellraw.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(tellraw.Tellraw, L63);
  dart.setFieldSignature(tellraw.Tellraw, () => ({
    __proto__: dart.getFields(tellraw.Tellraw.__proto__),
    jsonText: dart.fieldType(dart.legacy(core.String)),
    entity: dart.fieldType(dart.legacy(core.String))
  }));
  var type$5 = dart.privateName(title, "Title.type");
  var jsonText$ = dart.privateName(title, "Title.jsonText");
  var entity$8 = dart.privateName(title, "Title.entity");
  title.Title = class Title extends rest_action.RestActionAble {
    get type() {
      return this[type$5];
    }
    set type(value) {
      this[type$5] = value;
    }
    get jsonText() {
      return this[jsonText$];
    }
    set jsonText(value) {
      this[jsonText$] = value;
    }
    get entity() {
      return this[entity$8];
    }
    set entity(value) {
      this[entity$8] = value;
    }
    generate(context) {
      this.jsonText = this.jsonText[$replaceAll]("\\[repl]\\", "\\");
      return new command$.Command.new("title " + dart.notNull(this.entity) + " " + dart.notNull(this.type) + " " + dart.notNull(this.jsonText));
    }
  };
  (title.Title.new = function(selector, opts) {
    let show = opts && 'show' in opts ? opts.show : null;
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "title";
    this.entity = dart.toString(selector);
    this.jsonText = convert.json.encode(show[$map](MapL(), dart.fn(text => text.toMap(), TextComponentLToMapL()))[$toList]());
  }).prototype = title.Title.prototype;
  (title.Title.subtitle = function(selector, opts) {
    let show = opts && 'show' in opts ? opts.show : null;
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "subtitle";
    this.entity = dart.toString(selector);
    this.jsonText = convert.json.encode(show[$map](MapL(), dart.fn(text => text.toMap(), TextComponentLToMapL()))[$toList]());
  }).prototype = title.Title.prototype;
  (title.Title.actionbar = function(selector, opts) {
    let show = opts && 'show' in opts ? opts.show : null;
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "actionbar";
    this.entity = dart.toString(selector);
    this.jsonText = convert.json.encode(show[$map](MapL(), dart.fn(text => text.toMap(), TextComponentLToMapL()))[$toList]());
  }).prototype = title.Title.prototype;
  (title.Title.clear = function(selector) {
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "clear";
    this.entity = dart.toString(selector);
    this.jsonText = "";
  }).prototype = title.Title.prototype;
  (title.Title.times = function(selector, opts) {
    let fadein = opts && 'fadein' in opts ? opts.fadein : 20;
    let display = opts && 'display' in opts ? opts.display : 60;
    let fadeout = opts && 'fadeout' in opts ? opts.fadeout : 20;
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "times";
    this.entity = dart.toString(selector);
    this.jsonText = dart.toString(fadein) + " " + dart.toString(display) + " " + dart.toString(fadeout);
  }).prototype = title.Title.prototype;
  (title.Title.resetTimes = function(selector) {
    this[type$5] = null;
    this[jsonText$] = null;
    this[entity$8] = null;
    title.Title.__proto__.new.call(this);
    this.type = "reset";
    this.entity = dart.toString(selector);
    this.jsonText = "";
  }).prototype = title.Title.prototype;
  dart.addTypeTests(title.Title);
  dart.addTypeCaches(title.Title);
  dart.setMethodSignature(title.Title, () => ({
    __proto__: dart.getMethods(title.Title.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(title.Title, L64);
  dart.setFieldSignature(title.Title, () => ({
    __proto__: dart.getFields(title.Title.__proto__),
    type: dart.fieldType(dart.legacy(core.String)),
    jsonText: dart.fieldType(dart.legacy(core.String)),
    entity: dart.fieldType(dart.legacy(core.String))
  }));
  var message = dart.privateName(say, "Say.message");
  say.Say = class Say extends rest_action.RestActionAble {
    get message() {
      return this[message];
    }
    set message(value) {
      this[message] = value;
    }
    generate(context) {
      return new command$.Command.new("say " + dart.notNull(this.message));
    }
  };
  (say.Say.new = function(msg) {
    this[message] = null;
    say.Say.__proto__.new.call(this);
    if (EntityL().is(msg)) {
      this.message = dart.toString(msg);
    } else if (StringL().is(msg)) {
      this.message = msg;
    } else {
      dart.throw("Please insert either an entity or a string!");
    }
  }).prototype = say.Say.prototype;
  dart.addTypeTests(say.Say);
  dart.addTypeCaches(say.Say);
  dart.setMethodSignature(say.Say, () => ({
    __proto__: dart.getMethods(say.Say.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(say.Say, L65);
  dart.setFieldSignature(say.Say, () => ({
    __proto__: dart.getFields(say.Say.__proto__),
    message: dart.fieldType(dart.legacy(core.String))
  }));
  var area$0 = dart.privateName(clone, "Clone.area");
  var to$2 = dart.privateName(clone, "Clone.to");
  var type$6 = dart.privateName(clone, "Clone.type");
  clone.Clone = class Clone extends rest_action.RestActionAble {
    get area() {
      return this[area$0];
    }
    set area(value) {
      this[area$0] = value;
    }
    get to() {
      return this[to$2];
    }
    set to(value) {
      this[to$2] = value;
    }
    get type() {
      return this[type$6];
    }
    set type(value) {
      this[type$6] = value;
    }
    generate(context) {
      if (this.type[$isNotEmpty]) this.type = " " + dart.notNull(this.type);
      return new command$.Command.new("clone " + dart.notNull(this.area.getCoordinates()) + " " + dart.notNull(dart.toString(this.to)) + dart.notNull(this.type));
    }
  };
  (clone.Clone.new = function(area, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    this[type$6] = "";
    this[area$0] = area;
    this[to$2] = to;
    clone.Clone.__proto__.new.call(this);
    ;
  }).prototype = clone.Clone.prototype;
  (clone.Clone.filtered = function(area, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let block = opts && 'block' in opts ? opts.block : C24 || CT.C24;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    this[type$6] = "";
    this[area$0] = area;
    this[to$2] = to;
    clone.Clone.__proto__.new.call(this);
    this.type = "filtered " + dart.notNull(dart.toString(block));
    if (mode != null && mode[$isNotEmpty]) this.type = dart.notNull(this.type) + (" " + dart.notNull(mode));
  }).prototype = clone.Clone.prototype;
  (clone.Clone.masked = function(area, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    this[type$6] = "";
    this[area$0] = area;
    this[to$2] = to;
    clone.Clone.__proto__.new.call(this);
    this.type = "masked";
    if (mode != null && mode[$isNotEmpty]) this.type = dart.notNull(this.type) + (" " + dart.notNull(mode));
  }).prototype = clone.Clone.prototype;
  (clone.Clone.replace = function(area, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let mode = opts && 'mode' in opts ? opts.mode : null;
    this[type$6] = "";
    this[area$0] = area;
    this[to$2] = to;
    clone.Clone.__proto__.new.call(this);
    this.type = "replace";
    if (mode != null && mode[$isNotEmpty]) this.type = dart.notNull(this.type) + (" " + dart.notNull(mode));
  }).prototype = clone.Clone.prototype;
  dart.addTypeTests(clone.Clone);
  dart.addTypeCaches(clone.Clone);
  dart.setMethodSignature(clone.Clone, () => ({
    __proto__: dart.getMethods(clone.Clone.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(clone.Clone, L66);
  dart.setFieldSignature(clone.Clone, () => ({
    __proto__: dart.getFields(clone.Clone.__proto__),
    area: dart.fieldType(dart.legacy(area.Area)),
    to: dart.fieldType(dart.legacy(location$.Location)),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  var area$1 = dart.privateName(fill, "Fill.area");
  var block$ = dart.privateName(fill, "Fill.block");
  var type$7 = dart.privateName(fill, "Fill.type");
  fill.Fill = class Fill extends rest_action.RestActionAble {
    get area() {
      return this[area$1];
    }
    set area(value) {
      this[area$1] = value;
    }
    get block() {
      return this[block$];
    }
    set block(value) {
      this[block$] = value;
    }
    get type() {
      return this[type$7];
    }
    set type(value) {
      this[type$7] = value;
    }
    generate(context) {
      if (this.type[$isNotEmpty]) this.type = " " + dart.notNull(this.type);
      return new command$.Command.new("fill " + dart.notNull(this.area.getCoordinates()) + " " + dart.notNull(dart.toString(this.block)) + dart.notNull(this.type));
    }
  };
  (fill.Fill.new = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    ;
  }).prototype = fill.Fill.prototype;
  (fill.Fill.destroy = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    this.type = "destroy";
  }).prototype = fill.Fill.prototype;
  (fill.Fill.hollow = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    this.type = "hollow";
  }).prototype = fill.Fill.prototype;
  (fill.Fill.outline = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    this.type = "outline";
  }).prototype = fill.Fill.prototype;
  (fill.Fill.keep = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    this.type = "keep";
  }).prototype = fill.Fill.prototype;
  (fill.Fill.replace = function(block, opts) {
    let area = opts && 'area' in opts ? opts.area : null;
    let replace = opts && 'replace' in opts ? opts.replace : null;
    this[type$7] = "";
    this[block$] = block;
    this[area$1] = area;
    fill.Fill.__proto__.new.call(this);
    if (replace != null) this.type = "replace " + dart.notNull(dart.toString(replace));
  }).prototype = fill.Fill.prototype;
  dart.addTypeTests(fill.Fill);
  dart.addTypeCaches(fill.Fill);
  dart.setMethodSignature(fill.Fill, () => ({
    __proto__: dart.getMethods(fill.Fill.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(fill.Fill, L67);
  dart.setFieldSignature(fill.Fill, () => ({
    __proto__: dart.getFields(fill.Fill.__proto__),
    area: dart.fieldType(dart.legacy(area.Area)),
    block: dart.fieldType(dart.legacy(block.Block)),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  var location$2 = dart.privateName(setblock, "SetBlock.location");
  var block$0 = dart.privateName(setblock, "SetBlock.block");
  var nbt$2 = dart.privateName(setblock, "SetBlock.nbt");
  setblock.SetBlock = class SetBlock extends rest_action.RestActionAble {
    get location() {
      return this[location$2];
    }
    set location(value) {
      this[location$2] = value;
    }
    get block() {
      return this[block$0];
    }
    set block(value) {
      this[block$0] = value;
    }
    get nbt() {
      return this[nbt$2];
    }
    set nbt(value) {
      this[nbt$2] = value;
    }
    generate(context) {
      return new command$.Command.new("setblock " + dart.notNull(dart.toString(this.location)) + " " + dart.notNull(dart.toString(this.block)) + dart.notNull(this.nbt == null ? "" : gson.gson.encode(this.nbt)));
    }
  };
  (setblock.SetBlock.new = function(block, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    this[block$0] = block;
    this[location$2] = location;
    this[nbt$2] = nbt;
    setblock.SetBlock.__proto__.new.call(this);
    this.location == null ? this.location = new location$.Location.here() : null;
  }).prototype = setblock.SetBlock.prototype;
  dart.addTypeTests(setblock.SetBlock);
  dart.addTypeCaches(setblock.SetBlock);
  dart.setMethodSignature(setblock.SetBlock, () => ({
    __proto__: dart.getMethods(setblock.SetBlock.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(setblock.SetBlock, L68);
  dart.setFieldSignature(setblock.SetBlock, () => ({
    __proto__: dart.getFields(setblock.SetBlock.__proto__),
    location: dart.fieldType(dart.legacy(location$.Location)),
    block: dart.fieldType(dart.legacy(block.Block)),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  var _loc$ = dart.privateName(replaceitem, "_loc");
  var entity$9 = dart.privateName(replaceitem, "ReplaceItem.entity");
  var slot$1 = dart.privateName(replaceitem, "ReplaceItem.slot");
  var item$0 = dart.privateName(replaceitem, "ReplaceItem.item");
  replaceitem.ReplaceItem = class ReplaceItem extends rest_action.RestActionAble {
    get entity() {
      return this[entity$9];
    }
    set entity(value) {
      this[entity$9] = value;
    }
    get slot() {
      return this[slot$1];
    }
    set slot(value) {
      this[slot$1] = value;
    }
    get item() {
      return this[item$0];
    }
    set item(value) {
      this[item$0] = value;
    }
    generate(context) {
      if (this.slot.slot == null) {
        dart.throw("The Slot for a ReplaceItem needs a slot property!");
      }
      if (this.entity != null) {
        return new command$.Command.new("replaceitem entity " + dart.str(this.entity) + " " + dart.str(this.slot.slot) + " " + dart.str(this.item.getGiveNotation()));
      }
      if (this[_loc$] != null) {
        return new command$.Command.new("replaceitem block " + dart.str(this[_loc$]) + " " + dart.str(this.slot.slot) + " " + dart.str(this.item.getGiveNotation()));
      }
      dart.throw("You have to give an entity or a location to the replaceitem-widget");
    }
  };
  (replaceitem.ReplaceItem.new = function(entity, opts) {
    let item = opts && 'item' in opts ? opts.item : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    this[_loc$] = null;
    this[entity$9] = entity;
    this[item$0] = item;
    this[slot$1] = slot;
    if (!(item != null)) dart.assertFailed(null, L69, 19, 16, "item != null");
    replaceitem.ReplaceItem.__proto__.new.call(this);
    ;
  }).prototype = replaceitem.ReplaceItem.prototype;
  (replaceitem.ReplaceItem.block = function(_loc, opts) {
    let item = opts && 'item' in opts ? opts.item : null;
    let slot = opts && 'slot' in opts ? opts.slot : null;
    this[entity$9] = null;
    this[_loc$] = _loc;
    this[item$0] = item;
    this[slot$1] = slot;
    if (!(item != null)) dart.assertFailed(null, L69, 21, 16, "item != null");
    replaceitem.ReplaceItem.__proto__.new.call(this);
    ;
  }).prototype = replaceitem.ReplaceItem.prototype;
  dart.addTypeTests(replaceitem.ReplaceItem);
  dart.addTypeCaches(replaceitem.ReplaceItem);
  dart.setMethodSignature(replaceitem.ReplaceItem, () => ({
    __proto__: dart.getMethods(replaceitem.ReplaceItem.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(replaceitem.ReplaceItem, L70);
  dart.setFieldSignature(replaceitem.ReplaceItem, () => ({
    __proto__: dart.getFields(replaceitem.ReplaceItem.__proto__),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    [_loc$]: dart.fieldType(dart.legacy(location$.Location)),
    slot: dart.fieldType(dart.legacy(slot$.Slot)),
    item: dart.fieldType(dart.legacy(item.Item))
  }));
  var entity$10 = dart.privateName(give, "Give.entity");
  var item$1 = dart.privateName(give, "Give.item");
  give.Give = class Give extends rest_action.RestActionAble {
    get entity() {
      return this[entity$10];
    }
    set entity(value) {
      this[entity$10] = value;
    }
    get item() {
      return this[item$1];
    }
    set item(value) {
      this[item$1] = value;
    }
    generate(context) {
      return new command$.Command.new("give " + dart.notNull(dart.toString(this.entity)) + " " + dart.notNull(this.item.getGiveNotation()));
    }
  };
  (give.Give.new = function(entity, opts) {
    let item = opts && 'item' in opts ? opts.item : null;
    this[entity$10] = entity;
    this[item$1] = item;
    if (!(item != null)) dart.assertFailed(null, L71, 14, 53, "item != null");
    give.Give.__proto__.new.call(this);
    ;
  }).prototype = give.Give.prototype;
  dart.addTypeTests(give.Give);
  dart.addTypeCaches(give.Give);
  dart.setMethodSignature(give.Give, () => ({
    __proto__: dart.getMethods(give.Give.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(give.Give, L72);
  dart.setFieldSignature(give.Give, () => ({
    __proto__: dart.getFields(give.Give.__proto__),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    item: dart.fieldType(dart.legacy(item.Item))
  }));
  var name$8 = dart.privateName(predicate, "Predicate.name");
  var contents$ = dart.privateName(predicate, "Predicate.contents");
  predicate.Predicate = class Predicate extends widget.Widget {
    get name() {
      return this[name$8];
    }
    set name(value) {
      super.name = value;
    }
    get contents() {
      return this[contents$];
    }
    set contents(value) {
      super.contents = value;
    }
    generate(context) {
      return new raw_file.RawFile.new(dart.notNull(this.name) + ".json", this.contents != null ? convert.json.encode(this.contents.getJson()) : "", {path: "/predicates/"});
    }
  };
  (predicate.Predicate.new = function(name, opts) {
    let contents = opts && 'contents' in opts ? opts.contents : null;
    this[name$8] = name;
    this[contents$] = contents;
    ;
  }).prototype = predicate.Predicate.prototype;
  dart.addTypeTests(predicate.Predicate);
  dart.addTypeCaches(predicate.Predicate);
  dart.setMethodSignature(predicate.Predicate, () => ({
    __proto__: dart.getMethods(predicate.Predicate.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(predicate.Predicate, L73);
  dart.setFieldSignature(predicate.Predicate, () => ({
    __proto__: dart.getFields(predicate.Predicate.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    contents: dart.finalFieldType(dart.legacy(tag.Tag))
  }));
  var name$9 = dart.privateName(raw_file, "RawFile.name");
  var content$ = dart.privateName(raw_file, "RawFile.content");
  var path$4 = dart.privateName(raw_file, "RawFile.path");
  raw_file.RawFile = class RawFile extends widget.Widget {
    get name() {
      return this[name$9];
    }
    set name(value) {
      super.name = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get path() {
      return this[path$4];
    }
    set path(value) {
      super.path = value;
    }
    get fullPath() {
      return dart.notNull(this.path) + dart.notNull(this.name);
    }
    generate(context) {
      return null;
    }
  };
  (raw_file.RawFile.new = function(name, content, opts) {
    let path = opts && 'path' in opts ? opts.path : "/";
    this[name$9] = name;
    this[content$] = content;
    this[path$4] = path;
    ;
  }).prototype = raw_file.RawFile.prototype;
  dart.addTypeTests(raw_file.RawFile);
  dart.addTypeCaches(raw_file.RawFile);
  dart.setMethodSignature(raw_file.RawFile, () => ({
    __proto__: dart.getMethods(raw_file.RawFile.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setGetterSignature(raw_file.RawFile, () => ({
    __proto__: dart.getGetters(raw_file.RawFile.__proto__),
    fullPath: dart.legacy(core.String)
  }));
  dart.setLibraryUri(raw_file.RawFile, L74);
  dart.setFieldSignature(raw_file.RawFile, () => ({
    __proto__: dart.getFields(raw_file.RawFile.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    content: dart.finalFieldType(dart.legacy(core.String)),
    path: dart.finalFieldType(dart.legacy(core.String))
  }));
  var name$10 = dart.privateName(buildPack, "BuildPack.name");
  var files = dart.privateName(buildPack, "BuildPack.files");
  var rawFiles = dart.privateName(buildPack, "BuildPack.rawFiles");
  var scoreboards = dart.privateName(buildPack, "BuildPack.scoreboards");
  var main = dart.privateName(buildPack, "BuildPack.main");
  var load = dart.privateName(buildPack, "BuildPack.load");
  var context$0 = dart.privateName(buildPack, "BuildPack.context");
  var isGen$ = dart.privateName(buildPack, "BuildPack.isGen");
  var isGenLoad = dart.privateName(buildPack, "BuildPack.isGenLoad");
  var isGenMain = dart.privateName(buildPack, "BuildPack.isGenMain");
  buildPack.BuildPack = class BuildPack extends core.Object {
    get name() {
      return this[name$10];
    }
    set name(value) {
      this[name$10] = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      this[files] = value;
    }
    get rawFiles() {
      return this[rawFiles];
    }
    set rawFiles(value) {
      this[rawFiles] = value;
    }
    get scoreboards() {
      return this[scoreboards];
    }
    set scoreboards(value) {
      this[scoreboards] = value;
    }
    get main() {
      return this[main];
    }
    set main(value) {
      this[main] = value;
    }
    get load() {
      return this[load];
    }
    set load(value) {
      this[load] = value;
    }
    get context() {
      return this[context$0];
    }
    set context(value) {
      this[context$0] = value;
    }
    get isGen() {
      return this[isGen$];
    }
    set isGen(value) {
      this[isGen$] = value;
    }
    get isGenLoad() {
      return this[isGenLoad];
    }
    set isGenLoad(value) {
      this[isGenLoad] = value;
    }
    get isGenMain() {
      return this[isGenMain];
    }
    set isGenMain(value) {
      this[isGenMain] = value;
    }
    addScoreboard(name) {
      if (!dart.test(this.scoreboards[$contains](name))) {
        this.scoreboards[$add](name);
        return true;
      }
      return false;
    }
    addRawFile(file, prj) {
      this.rawFiles[$_set](file.fullPath, file.content);
    }
    addFile(file, prj) {
      this.files[$_set](file.path, new buildFile.BuildFile.new(file));
    }
    extendFile(file, opts) {
      let front = opts && 'front' in opts ? opts.front : null;
      let prj = opts && 'prj' in opts ? opts.prj : null;
      let myfile = new buildFile.BuildFile.extended(file);
      if (this.files[$_get](file.path) == null) {
        this.files[$_set](file.path, myfile);
        return;
      }
      myfile.generate({context: this.context, pack: this, prj: prj});
      if (dart.test(front)) {
        this.files[$_get](file.path).commands[$insertAll](0, myfile.commands);
      } else {
        this.files[$_get](file.path).commands[$addAll](myfile.commands);
      }
    }
    generate(opts) {
      let prj = opts && 'prj' in opts ? opts.prj : null;
      if (dart.test(prj.prod)) this.context.prod = true;
      for (let i = 0; i < dart.notNull(this.files[$length]); i = i + 1) {
        this.context.file = this.files[$values][$toList]()[$_get](i).path;
        this.files[$values][$toList]()[$_get](i).generate({context: this.context, pack: this, prj: prj});
      }
    }
    toMap() {
      return new _js_helper.LinkedMap.from(["name", this.name, "files", this.files[$map](StringL(), ListL(), dart.fn((key, file) => new (MapEntryOfStringL$ListL()).__(key, file.toMap()), StringLAndBuildFileLToMapEntryLOfStringL$ListL())), "main", this.main, "load", this.load]);
    }
  };
  (buildPack.BuildPack.new = function(pack, opts) {
    let t5, t5$;
    let context = opts && 'context' in opts ? opts.context : null;
    this[name$10] = null;
    this[files] = new (IdentityMapOfStringL$BuildFileL()).new();
    this[rawFiles] = new (IdentityMapOfStringL$StringL()).new();
    this[scoreboards] = null;
    this[main] = null;
    this[load] = null;
    this[isGen$] = true;
    this[isGenLoad] = true;
    this[isGenMain] = true;
    this[context$0] = context;
    let stopwatch = (t5 = new core.Stopwatch.new(), (() => {
      t5.start();
      return t5;
    })());
    this.name = pack.name;
    this.scoreboards = JSArrayOfStringL().of([]);
    this.context == null ? this.context = new context$.Context.new() : null;
    this.context = (t5$ = new context$.Context.clone(this.context), (() => {
      t5$.packId = this.name;
      t5$.loadFile = this.load;
      t5$.mainFile = this.main;
      return t5$;
    })());
    if (pack.main != null) {
      this.main = pack.main.path;
      this.files[$_set](this.main, new buildFile.BuildFile.new(pack.main));
    }
    if (pack.load != null) {
      this.load = pack.load.path;
      this.files[$_set](this.load, new buildFile.BuildFile.new(pack.load));
    }
    if (pack.files != null) {
      pack.files[$forEach](dart.fn(file => {
        let t7, t6, t5;
        t5 = this.files;
        t6 = file.path;
        t7 = new buildFile.BuildFile.new(file);
        t5[$_set](t6, t7);
        return t7;
      }, FileLToBuildFileL()));
    }
    core.print("Compiled Pack " + dart.str(this.name) + " in " + dart.str(stopwatch.elapsedMilliseconds) + "ms");
  }).prototype = buildPack.BuildPack.prototype;
  dart.addTypeTests(buildPack.BuildPack);
  dart.addTypeCaches(buildPack.BuildPack);
  dart.setMethodSignature(buildPack.BuildPack, () => ({
    __proto__: dart.getMethods(buildPack.BuildPack.__proto__),
    addScoreboard: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    addRawFile: dart.fnType(dart.void, [dart.legacy(raw_file.RawFile), dart.legacy(buildProject.BuildProject)]),
    addFile: dart.fnType(dart.void, [dart.legacy(file.File), dart.legacy(buildProject.BuildProject)]),
    extendFile: dart.fnType(dart.void, [dart.legacy(extend.Extend)], {front: dart.legacy(core.bool), prj: dart.legacy(buildProject.BuildProject)}, {}),
    generate: dart.fnType(dart.void, [], {prj: dart.legacy(buildProject.BuildProject)}, {}),
    toMap: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setLibraryUri(buildPack.BuildPack, L75);
  dart.setFieldSignature(buildPack.BuildPack, () => ({
    __proto__: dart.getFields(buildPack.BuildPack.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    files: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(buildFile.BuildFile)))),
    rawFiles: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    scoreboards: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    main: dart.fieldType(dart.legacy(core.String)),
    load: dart.fieldType(dart.legacy(core.String)),
    context: dart.fieldType(dart.legacy(context$.Context)),
    isGen: dart.fieldType(dart.legacy(core.bool)),
    isGenLoad: dart.fieldType(dart.legacy(core.bool)),
    isGenMain: dart.fieldType(dart.legacy(core.bool))
  }));
  var commands = dart.privateName(buildFile, "BuildFile.commands");
  var path$5 = dart.privateName(buildFile, "BuildFile.path");
  var child = dart.privateName(buildFile, "BuildFile.child");
  var isGen$0 = dart.privateName(buildFile, "BuildFile.isGen");
  buildFile.BuildFile = class BuildFile extends core.Object {
    get commands() {
      return this[commands];
    }
    set commands(value) {
      this[commands] = value;
    }
    get path() {
      return this[path$5];
    }
    set path(value) {
      this[path$5] = value;
    }
    get child() {
      return this[child];
    }
    set child(value) {
      this[child] = value;
    }
    get isGen() {
      return this[isGen$0];
    }
    set isGen(value) {
      this[isGen$0] = value;
    }
    add(str) {
      if (str != null && str[$isNotEmpty]) {
        this.commands[$add](str);
      }
    }
    toMap() {
      return this.commands;
    }
    generate(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let pack = opts && 'pack' in opts ? opts.pack : null;
      let prj = opts && 'prj' in opts ? opts.prj : null;
      scan.scan(this.child, {context: context, file: this, pack: pack, project: prj});
    }
  };
  (buildFile.BuildFile.new = function(file) {
    this[commands] = null;
    this[path$5] = null;
    this[child] = null;
    this[isGen$0] = true;
    this.path = file.path;
    this.child = file.child;
    this.commands = JSArrayOfStringL().of([]);
    if (file.header != null) this.commands[$add](file.header.text);
  }).prototype = buildFile.BuildFile.prototype;
  (buildFile.BuildFile.extended = function(file) {
    this[commands] = null;
    this[path$5] = null;
    this[child] = null;
    this[isGen$0] = true;
    this.path = file.path;
    this.child = file.child;
    this.commands = JSArrayOfStringL().of([]);
  }).prototype = buildFile.BuildFile.prototype;
  dart.addTypeTests(buildFile.BuildFile);
  dart.addTypeCaches(buildFile.BuildFile);
  dart.setMethodSignature(buildFile.BuildFile, () => ({
    __proto__: dart.getMethods(buildFile.BuildFile.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.String)]),
    toMap: dart.fnType(dart.legacy(core.List), []),
    generate: dart.fnType(dart.void, [], {context: dart.legacy(context$.Context), pack: dart.legacy(buildPack.BuildPack), prj: dart.legacy(buildProject.BuildProject)}, {})
  }));
  dart.setLibraryUri(buildFile.BuildFile, L76);
  dart.setFieldSignature(buildFile.BuildFile, () => ({
    __proto__: dart.getFields(buildFile.BuildFile.__proto__),
    commands: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    path: dart.fieldType(dart.legacy(core.String)),
    child: dart.fieldType(dart.legacy(widget.Widget)),
    isGen: dart.fieldType(dart.legacy(core.bool))
  }));
  buildFile.addAndReturn = function addAndReturn(list, item) {
    list[$add](item);
    return list;
  };
  scan.scan = function scan$(wid, opts) {
    let file = opts && 'file' in opts ? opts.file : null;
    let pack = opts && 'pack' in opts ? opts.pack : null;
    let project = opts && 'project' in opts ? opts.project : null;
    let context = opts && 'context' in opts ? opts.context : null;
    file.add(scan._findText(wid, context));
    if (dart.test(scan.findFile(wid, {context: context, pack: pack, project: project}))) return;
    if (GroupL().is(wid)) {
      scan.scan(wid.generate(context), {context: new context$.Context.clone(context).addPrefix(wid.prefix).addSuffix(wid.suffix), file: file, pack: pack, project: project});
      return;
    }
    if (CommentL().is(wid) && !dart.test(wid.force) && (wid.text === "[null]" || dart.test(context.prod))) {
      return;
    }
    if (ScoreboardL().is(wid) && wid.subcommand === "add") {
      if (!dart.test(pack.addScoreboard(wid.name))) return;
    }
    if (WidgetL().is(wid)) {
      let child = wid.generate(context);
      if (ModuleL().is(wid)) {
        let files = wid.registerFiles();
        if (files != null && dart.test(files[$isNotEmpty]) && WidgetL().is(child)) {
          child = (() => {
            let t5 = JSArrayOfWidgetL().of([]);
            t5[$add](WidgetL().as(child));
            for (let t6 of files)
              t5[$add](t6);
            return t5;
          })();
        }
      }
      if (WidgetL().is(child)) {
        scan.scan(child, {file: file, pack: pack, project: project, context: context});
        return;
      }
      if (ListLOfWidgetL().is(child)) {
        child[$forEach](dart.fn(x => {
          scan.scan(x, {file: file, pack: pack, project: project, context: context});
        }, WidgetLToNullN()));
      }
    }
  };
  scan._findText = function _findText(wid, context) {
    if (TextL().is(wid)) {
      let suffixes = "";
      let prefixes = "";
      if (dart.test(context.prefixes[$isNotEmpty])) {
        prefixes = dart.notNull(context.prefixes[$join](" ")) + " ";
      }
      if (dart.test(context.suffixes[$isNotEmpty])) {
        suffixes = dart.notNull(context.suffixes[$join](" ")) + " ";
      }
      return prefixes + dart.notNull(wid.generate(context)) + suffixes;
    }
    return "";
  };
  scan.findFile = function findFile(wid, opts) {
    let pack = opts && 'pack' in opts ? opts.pack : null;
    let project = opts && 'project' in opts ? opts.project : null;
    let context = opts && 'context' in opts ? opts.context : null;
    if (RawFileL().is(wid)) {
      pack.addRawFile(wid, project);
      return true;
    }
    if (FileL().is(wid)) {
      if (dart.test(wid.create)) pack.addFile(wid, project);
      return !dart.test(wid.execute);
    }
    if (ExtendL().is(wid)) {
      pack.extendFile(wid, {front: wid.first});
      return true;
    }
    if (PackL().is(wid)) {
      project.addPack(wid);
      return true;
    }
    return false;
  };
  var score$3 = dart.privateName(version_check, "VersionCheck.score");
  var currentVersion$ = dart.privateName(version_check, "VersionCheck.currentVersion");
  var onUpdate$ = dart.privateName(version_check, "VersionCheck.onUpdate");
  var onDowndate$ = dart.privateName(version_check, "VersionCheck.onDowndate");
  var then$2 = dart.privateName(version_check, "VersionCheck.then");
  version_check.VersionCheck = class VersionCheck extends widget.Widget {
    get score() {
      return this[score$3];
    }
    set score(value) {
      this[score$3] = value;
    }
    get currentVersion() {
      return this[currentVersion$];
    }
    set currentVersion(value) {
      this[currentVersion$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onDowndate() {
      return this[onDowndate$];
    }
    set onDowndate(value) {
      this[onDowndate$] = value;
    }
    get then() {
      return this[then$2];
    }
    set then(value) {
      this[then$2] = value;
    }
    generate(context) {
      let t10;
      let s = new scoreboard.Scoreboard.new(this.score);
      let prev = s._get("build_number.prev");
      let current = s._get("build_number");
      return new for_list.For.of((() => {
        let t7 = JSArrayOfWidgetL().of([]);
        t7[$add](prev['>>'](current));
        t7[$add](current['>>'](this.currentVersion));
        if (this.onUpdate != null) t7[$add](new $if.If.new(prev['<'](current), {then: this.onUpdate}));
        t7[$add](new $if.If.new(prev['>'](current), {then: (() => {
            let t8 = JSArrayOfWidgetL().of([]);
            if (this.onDowndate != null) for (let t9 of this.onDowndate)
              t8[$add](t9);
            t8[$add](current['>>'](prev));
            return t8;
          })()}));
        if (this.then != null) t7[$add]((t10 = current, this.then(t10)));
        t7[$add](prev.reset());
        return t7;
      })());
    }
  };
  (version_check.VersionCheck.new = function(currentVersion, opts) {
    let score = opts && 'score' in opts ? opts.score : "objd_data";
    let onDowndate = opts && 'onDowndate' in opts ? opts.onDowndate : null;
    let onUpdate = opts && 'onUpdate' in opts ? opts.onUpdate : null;
    let then = opts && 'then' in opts ? opts.then : null;
    this[currentVersion$] = currentVersion;
    this[score$3] = score;
    this[onDowndate$] = onDowndate;
    this[onUpdate$] = onUpdate;
    this[then$2] = then;
    ;
  }).prototype = version_check.VersionCheck.prototype;
  dart.addTypeTests(version_check.VersionCheck);
  dart.addTypeCaches(version_check.VersionCheck);
  dart.setMethodSignature(version_check.VersionCheck, () => ({
    __proto__: dart.getMethods(version_check.VersionCheck.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(version_check.VersionCheck, L77);
  dart.setFieldSignature(version_check.VersionCheck, () => ({
    __proto__: dart.getFields(version_check.VersionCheck.__proto__),
    score: dart.fieldType(dart.legacy(core.String)),
    currentVersion: dart.fieldType(dart.legacy(core.int)),
    onUpdate: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    onDowndate: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    then: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(score$.Score)])))
  }));
  var minVersion$ = dart.privateName(server_version_check, "ServerVersionCheck.minVersion");
  var versionTooLow$ = dart.privateName(server_version_check, "ServerVersionCheck.versionTooLow");
  var then$3 = dart.privateName(server_version_check, "ServerVersionCheck.then");
  var serverVersion$ = dart.privateName(server_version_check, "ServerVersionCheck.serverVersion");
  server_version_check.ServerVersionCheck = class ServerVersionCheck extends widget.Widget {
    get minVersion() {
      return this[minVersion$];
    }
    set minVersion(value) {
      super.minVersion = value;
    }
    get versionTooLow() {
      return this[versionTooLow$];
    }
    set versionTooLow(value) {
      super.versionTooLow = value;
    }
    get then() {
      return this[then$3];
    }
    set then(value) {
      super.then = value;
    }
    get serverVersion() {
      return this[serverVersion$];
    }
    set serverVersion(value) {
      super.serverVersion = value;
    }
    generate(context) {
      let t10, t11;
      let e = new entity$.Entity.new({type: entities.Entities.armor_stand, tags: ["objd_version_check"]});
      let s = (t10 = this.serverVersion, t10 == null ? new score$.Score.new(new entity$.Entity.PlayerName("server_version"), "objd_data") : t10);
      return new for_list.For.of((() => {
        let t10 = JSArrayOfWidgetL().of([]);
        t10[$add](new armorstand.ArmorStand.staticMarker(new location$.Location.new("~ 0 ~"), {small: true, tags: JSArrayOfStringL().of(["objd_version_check"]), mainHand: new item.Item.new(items.Items.trident, {count: 1, nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$intL()).from(["update", 13])])}), offHand: new item.Item.new(items.Items.lectern, {count: 1, nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$intL()).from(["update", 14])])}), head: new item.Item.new(items.Items.bee_spawn_egg, {count: 1, nbt: new (IdentityMapOfStringL$dynamic()).from(["objd", new (IdentityMapOfStringL$intL()).from(["update", 15])])})}));
        t10[$add](new $if.If.new(e.copyWith({nbt: new (IdentityMapOfStringL$dynamic()).from(["HandItems", JSArrayOfMapLOfStringL$MapLOfStringL$MapLOfStringL$intL().of([new (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$intL()).from(["tag", new (IdentityMapOfStringL$MapLOfStringL$intL()).from(["fard", new (IdentityMapOfStringL$intL()).from(["update", 13])])])])])}), {then: JSArrayOfWidgetL().of([s['>>'](13)])}));
        t10[$add](new $if.If.new(e.copyWith({nbt: new (IdentityMapOfStringL$dynamic()).from(["HandItems", JSArrayOfMapLOfStringL$MapLOfStringL$MapLOfStringL$intL().of([new (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$intL()).from(["tag", new (IdentityMapOfStringL$MapLOfStringL$intL()).from(["fard", new (IdentityMapOfStringL$intL()).from(["update", 14])])])])])}), {then: JSArrayOfWidgetL().of([s['>>'](14)])}));
        t10[$add](new $if.If.new(e.copyWith({nbt: new (IdentityMapOfStringL$dynamic()).from(["ArmorItems", JSArrayOfMapLOfStringL$MapLOfStringL$MapLOfStringL$intL().of([new (IdentityMapOfStringL$MapLOfStringL$MapLOfStringL$intL()).from(["tag", new (IdentityMapOfStringL$MapLOfStringL$intL()).from(["fard", new (IdentityMapOfStringL$intL()).from(["update", 14])])])])])}), {then: JSArrayOfWidgetL().of([s['>>'](15)])}));
        if (this.then != null) t10[$add]((t11 = s, this.then(t11)));
        if (this.minVersion != null && this.versionTooLow != null) t10[$add](new $if.If.new(new condition$.Condition.not(s['>='](15)), {then: this.versionTooLow}));
        t10[$add](new kill.Kill.new(e));
        return t10;
      })());
    }
  };
  (server_version_check.ServerVersionCheck.new = function(opts) {
    let minVersion = opts && 'minVersion' in opts ? opts.minVersion : null;
    let versionTooLow = opts && 'versionTooLow' in opts ? opts.versionTooLow : null;
    let serverVersion = opts && 'serverVersion' in opts ? opts.serverVersion : null;
    let then = opts && 'then' in opts ? opts.then : null;
    this[minVersion$] = minVersion;
    this[versionTooLow$] = versionTooLow;
    this[serverVersion$] = serverVersion;
    this[then$3] = then;
    ;
  }).prototype = server_version_check.ServerVersionCheck.prototype;
  dart.addTypeTests(server_version_check.ServerVersionCheck);
  dart.addTypeCaches(server_version_check.ServerVersionCheck);
  dart.setMethodSignature(server_version_check.ServerVersionCheck, () => ({
    __proto__: dart.getMethods(server_version_check.ServerVersionCheck.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(server_version_check.ServerVersionCheck, L78);
  dart.setFieldSignature(server_version_check.ServerVersionCheck, () => ({
    __proto__: dart.getFields(server_version_check.ServerVersionCheck.__proto__),
    minVersion: dart.finalFieldType(dart.legacy(core.int)),
    versionTooLow: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    then: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(score$.Score)]))),
    serverVersion: dart.finalFieldType(dart.legacy(score$.Score))
  }));
  var _modify = dart.privateName(storage, "_modify");
  var _type$2 = dart.privateName(storage, "_type");
  var name$11 = dart.privateName(storage, "Storage.name");
  var autoNamespace$ = dart.privateName(storage, "Storage.autoNamespace");
  var nbt$3 = dart.privateName(storage, "Storage.nbt");
  var key$ = dart.privateName(storage, "Storage.key");
  var data$0 = dart.privateName(storage, "Storage.data");
  var score$4 = dart.privateName(storage, "Storage.score");
  var scale$1 = dart.privateName(storage, "Storage.scale");
  var datatype$0 = dart.privateName(storage, "Storage.datatype");
  storage.Storage = class Storage extends widget.Widget {
    get name() {
      return this[name$11];
    }
    set name(value) {
      super.name = value;
    }
    get autoNamespace() {
      return this[autoNamespace$];
    }
    set autoNamespace(value) {
      super.autoNamespace = value;
    }
    get nbt() {
      return this[nbt$3];
    }
    set nbt(value) {
      this[nbt$3] = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      this[key$] = value;
    }
    get data() {
      return this[data$0];
    }
    set data(value) {
      this[data$0] = value;
    }
    get score() {
      return this[score$4];
    }
    set score(value) {
      this[score$4] = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      this[scale$1] = value;
    }
    get datatype() {
      return this[datatype$0];
    }
    set datatype(value) {
      this[datatype$0] = value;
    }
    set(key, value) {
      return new storage.Storage.set(this.name, {autoNamespace: this.autoNamespace, key: key, value: value});
    }
    merge(nbt) {
      return new storage.Storage.merge(this.name, {autoNamespace: this.autoNamespace, nbt: nbt});
    }
    get(key) {
      return new storage.Storage.get(this.name, {autoNamespace: this.autoNamespace, key: key});
    }
    remove(key) {
      return new storage.Storage.remove(this.name, {autoNamespace: this.autoNamespace, key: key});
    }
    modify(modify) {
      return new storage.Storage.modify(this.name, {autoNamespace: this.autoNamespace, modify: modify});
    }
    copyData(key, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      return new storage.Storage.copyData(this.name, {autoNamespace: this.autoNamespace, key: key, data: data});
    }
    copyScore(key, opts) {
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let datatype = opts && 'datatype' in opts ? opts.datatype : "byte";
      let score = opts && 'score' in opts ? opts.score : null;
      return new storage.Storage.copyScore(this.name, {autoNamespace: this.autoNamespace, key: key, datatype: datatype, score: score});
    }
    toData(target = null) {
      target == null ? target = new data$.DataStorage.new(this.name) : null;
      if (this[_type$2] == storage._StorageType.merge) return new data$.Data.merge(target, {nbt: this.nbt});
      if (this[_type$2] == storage._StorageType.get) {
        return new data$.Data.get(target, {path: this.key, scale: this.scale});
      }
      if (this[_type$2] == storage._StorageType.remove) return new data$.Data.remove(target, {path: this.key});
      if (this[_type$2] == storage._StorageType.modify) {
        return new data$.Data.modify(target, {path: this.key, modify: this[_modify]});
      }
      if (this[_type$2] == storage._StorageType.data) {
        return new data$.Data.modify(target, {path: this.key, modify: new data$.DataModify.set(this.data.target, {fromPath: this.data.path})});
      }
      if (this[_type$2] == storage._StorageType.score) {
        return new data$.Data.fromScore(target, {path: this.key, score: this.score, scale: 1, datatype: this.datatype});
      }
      return null;
    }
    generate(context) {
      let target = new data$.DataStorage.new(this.autoNamespace != null && dart.test(this.autoNamespace) ? dart.notNull(context.packId) + (":" + dart.str(this.name)) : this.name);
      let data = this.toData(target);
      if (data != null) {
        return data;
      } else {
        return new comment.Comment.Null();
      }
    }
  };
  (storage.Storage.new = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[_modify] = null;
    this[scale$1] = null;
    this[_type$2] = null;
    this[nbt$3] = null;
    this[key$] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.set = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[_modify] = null;
    this[scale$1] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[key$] = key;
    this[nbt$3] = new (IdentityMapOfStringL$dynamic()).from([key, value]);
    this[_type$2] = storage._StorageType.merge;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.merge = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[_modify] = null;
    this[scale$1] = null;
    this[key$] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[nbt$3] = nbt;
    if (!(nbt != null)) dart.assertFailed(null, L79, 46, 16, "nbt != null");
    this[_type$2] = storage._StorageType.merge;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.get = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let key = opts && 'key' in opts ? opts.key : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[_modify] = null;
    this[nbt$3] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[scale$1] = scale;
    this[key$] = key;
    if (!(key != null)) dart.assertFailed(null, L79, 55, 16, "key != null");
    this[_type$2] = storage._StorageType.get;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.remove = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let key = opts && 'key' in opts ? opts.key : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[_modify] = null;
    this[scale$1] = null;
    this[nbt$3] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[key$] = key;
    if (!(key != null)) dart.assertFailed(null, L79, 63, 16, "key != null");
    this[_type$2] = storage._StorageType.remove;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.modify = function(name, opts) {
    let toPath = opts && 'toPath' in opts ? opts.toPath : null;
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let modify = opts && 'modify' in opts ? opts.modify : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[data$0] = null;
    this[scale$1] = null;
    this[nbt$3] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    if (!(modify != null)) dart.assertFailed(null, L79, 72, 16, "modify != null");
    if (!(toPath != null)) dart.assertFailed(null, L79, 73, 16, "toPath != null");
    this[_modify] = modify;
    this[key$] = toPath;
    this[_type$2] = storage._StorageType.modify;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.copyData = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    this[score$4] = null;
    this[datatype$0] = null;
    this[_modify] = null;
    this[scale$1] = null;
    this[nbt$3] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[key$] = key;
    this[data$0] = data;
    if (!(data != null)) dart.assertFailed(null, L79, 84, 16, "data != null");
    if (!(key != null)) dart.assertFailed(null, L79, 85, 16, "key != null");
    if (!(data.subcommand === "get")) dart.assertFailed("You have to insert a Data.get into copyData!", L79, 86, 16, "data.subcommand == 'get'");
    this[_type$2] = storage._StorageType.data;
    ;
  }).prototype = storage.Storage.prototype;
  (storage.Storage.copyScore = function(name, opts) {
    let autoNamespace = opts && 'autoNamespace' in opts ? opts.autoNamespace : true;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let datatype = opts && 'datatype' in opts ? opts.datatype : "byte";
    let key = opts && 'key' in opts ? opts.key : null;
    let score = opts && 'score' in opts ? opts.score : null;
    this[data$0] = null;
    this[_modify] = null;
    this[nbt$3] = null;
    this[name$11] = name;
    this[autoNamespace$] = autoNamespace;
    this[scale$1] = scale;
    this[datatype$0] = datatype;
    this[key$] = key;
    this[score$4] = score;
    if (!(score != null)) dart.assertFailed(null, L79, 98, 16, "score != null");
    if (!(key != null)) dart.assertFailed(null, L79, 99, 16, "key != null");
    this[_type$2] = storage._StorageType.score;
    ;
  }).prototype = storage.Storage.prototype;
  dart.addTypeTests(storage.Storage);
  dart.addTypeCaches(storage.Storage);
  dart.setMethodSignature(storage.Storage, () => ({
    __proto__: dart.getMethods(storage.Storage.__proto__),
    set: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.String), dart.dynamic]),
    merge: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    get: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.String)]),
    remove: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.String)]),
    modify: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(data$.DataModify)]),
    copyData: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.String)], {data: dart.legacy(data$.Data)}, {}),
    copyScore: dart.fnType(dart.legacy(storage.Storage), [dart.legacy(core.String)], {datatype: dart.legacy(core.String), scale: dart.legacy(core.double), score: dart.legacy(score$.Score)}, {}),
    toData: dart.fnType(dart.legacy(data$.Data), [], [dart.legacy(data$.DataStorage)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(storage.Storage, L80);
  dart.setFieldSignature(storage.Storage, () => ({
    __proto__: dart.getFields(storage.Storage.__proto__),
    [_type$2]: dart.fieldType(dart.legacy(storage._StorageType)),
    name: dart.finalFieldType(dart.legacy(core.String)),
    autoNamespace: dart.finalFieldType(dart.legacy(core.bool)),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    key: dart.fieldType(dart.legacy(core.String)),
    [_modify]: dart.fieldType(dart.legacy(data$.DataModify)),
    data: dart.fieldType(dart.legacy(data$.Data)),
    score: dart.fieldType(dart.legacy(score$.Score)),
    scale: dart.fieldType(dart.legacy(core.double)),
    datatype: dart.fieldType(dart.legacy(core.String))
  }));
  var _name$7 = dart.privateName(storage, "_name");
  var C1202;
  var C1203;
  var C1204;
  var C1205;
  var C1206;
  var C1207;
  var C1208;
  storage._StorageType = class _StorageType extends core.Object {
    toString() {
      return this[_name$7];
    }
  };
  (storage._StorageType.new = function(index, _name) {
    this.index = index;
    this[_name$7] = _name;
    ;
  }).prototype = storage._StorageType.prototype;
  dart.addTypeTests(storage._StorageType);
  dart.addTypeCaches(storage._StorageType);
  dart.setMethodSignature(storage._StorageType, () => ({
    __proto__: dart.getMethods(storage._StorageType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(storage._StorageType, L80);
  dart.setFieldSignature(storage._StorageType, () => ({
    __proto__: dart.getFields(storage._StorageType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$7]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(storage._StorageType, ['toString']);
  storage._StorageType.merge = C1202 || CT.C1202;
  storage._StorageType.get = C1203 || CT.C1203;
  storage._StorageType.remove = C1204 || CT.C1204;
  storage._StorageType.modify = C1205 || CT.C1205;
  storage._StorageType.data = C1206 || CT.C1206;
  storage._StorageType.score = C1207 || CT.C1207;
  storage._StorageType.values = C1208 || CT.C1208;
  var build$ = dart.privateName(builder, "Builder.build");
  builder.Builder = class Builder extends widget.Widget {
    get build() {
      return this[build$];
    }
    set build(value) {
      super.build = value;
    }
    generate(context) {
      let t11;
      t11 = context;
      return this.build(t11);
    }
  };
  (builder.Builder.new = function(build) {
    this[build$] = build;
    ;
  }).prototype = builder.Builder.prototype;
  dart.addTypeTests(builder.Builder);
  dart.addTypeCaches(builder.Builder);
  dart.setMethodSignature(builder.Builder, () => ({
    __proto__: dart.getMethods(builder.Builder.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(builder.Builder, L81);
  dart.setFieldSignature(builder.Builder, () => ({
    __proto__: dart.getFields(builder.Builder.__proto__),
    build: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])))
  }));
  var _useStop = dart.privateName(raycast, "_useStop");
  var _maxScore = dart.privateName(raycast, "_maxScore");
  var _isHit = dart.privateName(raycast, "_isHit");
  var _isStopped = dart.privateName(raycast, "_isStopped");
  var _hit = dart.privateName(raycast, "_hit");
  var _stop = dart.privateName(raycast, "_stop");
  var id = dart.privateName(raycast, "Raycast.id");
  var entity$11 = dart.privateName(raycast, "Raycast.entity");
  var max$ = dart.privateName(raycast, "Raycast.max");
  var step$ = dart.privateName(raycast, "Raycast.step");
  var through$ = dart.privateName(raycast, "Raycast.through");
  var ray$ = dart.privateName(raycast, "Raycast.ray");
  var onhit$ = dart.privateName(raycast, "Raycast.onhit");
  raycast.Raycast = class Raycast extends rest_action.RestActionAble {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get entity() {
      return this[entity$11];
    }
    set entity(value) {
      this[entity$11] = value;
    }
    get max() {
      return this[max$];
    }
    set max(value) {
      this[max$] = value;
    }
    get step() {
      return this[step$];
    }
    set step(value) {
      this[step$] = value;
    }
    get through() {
      return this[through$];
    }
    set through(value) {
      this[through$] = value;
    }
    get ray() {
      return this[ray$];
    }
    set ray(value) {
      this[ray$] = value;
    }
    get onhit() {
      return this[onhit$];
    }
    set onhit(value) {
      this[onhit$] = value;
    }
    [_hit]() {
      return this[_isHit].add();
    }
    [_stop]() {
      this[_useStop] = true;
      return this[_isStopped].add();
    }
    generate(context) {
      let t12, t11;
      this.id = dart.notNull(indexed_file.IndexedFile.getIndexed("ray")) + 1;
      let children = JSArrayOfWidgetL().of([new $if.If.not(this.through, {then: JSArrayOfWidgetL().of([this[_isHit].add()])})]);
      if (this.ray != null) children[$insert](0, (t11 = dart.bind(this, _stop), t12 = dart.bind(this, _hit), this.ray(t11, t12)));
      if (this[_maxScore] != null) {
        this[_maxScore].entity = new entity$.Entity.Selected();
        children[$add](this[_maxScore].add());
      }
      ;
      let conds = JSArrayOfConditionL().of([new condition$.Condition.not(this[_isHit])]);
      if (dart.test(this[_useStop])) conds[$add](new condition$.Condition.not(this[_isStopped]));
      if (this[_maxScore] != null) {
        conds[$add](new condition$.Condition.new(this[_maxScore].matchesRange(new entity$.Range.to(this.max))));
      }
      children[$add](new execute.Execute.new({If: new condition$.Condition.and(conds), children: JSArrayOfWidgetL().of([new file.File.recursive()])}).positioned(new location$.Location.local({z: this.step})));
      this.onhit[$insert](0, new comment.Comment.new("This is the raycast result from your raycast widget in " + dart.str(context.file)));
      children[$addAll](JSArrayOfWidgetL().of([new $if.If.new(new condition$.Condition.and([this[_isHit], dart.test(this[_useStop]) ? new condition$.Condition.not(this[_isStopped]) : null]), {then: JSArrayOfWidgetL().of([new file.File.execute("objd/rayhit" + dart.str(this.id), {child: new for_list.For.of(this.onhit)})])}), this[_isHit].removeIfExists()]));
      if (dart.test(this[_useStop])) children[$add](this[_isStopped].remove());
      let ex = new execute.Execute.new({children: JSArrayOfWidgetL().of([new group.Group.new({filename: "ray", children: children, groupMin: 0})])});
      if (this.entity.selector !== "s") ex = ex.asat(this.entity);
      ex = ex.anchored(execute.Facing.eyes).positioned(new location$.Location.local()).anchored(execute.Facing.feet);
      if (this[_maxScore] != null) return new for_list.For.of(JSArrayOfWidgetL().of([this[_maxScore].set(0), ex]));
      return ex;
    }
  };
  (raycast.Raycast.new = function(entity, opts) {
    let max = opts && 'max' in opts ? opts.max : null;
    let step = opts && 'step' in opts ? opts.step : 1;
    let through = opts && 'through' in opts ? opts.through : C24 || CT.C24;
    let ray = opts && 'ray' in opts ? opts.ray : null;
    let onhit = opts && 'onhit' in opts ? opts.onhit : null;
    let scoreName = opts && 'scoreName' in opts ? opts.scoreName : "objd_count";
    this[id] = null;
    this[_useStop] = false;
    this[_maxScore] = null;
    this[_isHit] = new tag$.Tag.new("objd_ray_hit", {entity: new entity$.Entity.Selected()});
    this[_isStopped] = new tag$.Tag.new("objd_ray_stop", {entity: new entity$.Entity.Selected()});
    this[entity$11] = entity;
    this[max$] = max;
    this[step$] = step;
    this[through$] = through;
    this[ray$] = ray;
    this[onhit$] = onhit;
    raycast.Raycast.__proto__.new.call(this);
    if (this.max != null && dart.notNull(this.max) > 0) {
      this[_maxScore] = new score$.Score.new(this.entity, scoreName);
      this.max = (dart.notNull(this.max) / dart.notNull(this.step))[$truncate]();
    }
    this.onhit == null ? this.onhit = JSArrayOfWidgetL().of([]) : null;
  }).prototype = raycast.Raycast.prototype;
  dart.addTypeTests(raycast.Raycast);
  dart.addTypeCaches(raycast.Raycast);
  dart.setMethodSignature(raycast.Raycast, () => ({
    __proto__: dart.getMethods(raycast.Raycast.__proto__),
    [_hit]: dart.fnType(dart.legacy(widget.Widget), []),
    [_stop]: dart.fnType(dart.legacy(widget.Widget), []),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(raycast.Raycast, L82);
  dart.setFieldSignature(raycast.Raycast, () => ({
    __proto__: dart.getFields(raycast.Raycast.__proto__),
    id: dart.fieldType(dart.legacy(core.int)),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    max: dart.fieldType(dart.legacy(core.int)),
    step: dart.fieldType(dart.legacy(core.double)),
    through: dart.fieldType(dart.legacy(block.Block)),
    ray: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(core.Function), dart.legacy(core.Function)]))),
    onhit: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    [_useStop]: dart.fieldType(dart.legacy(core.bool)),
    [_maxScore]: dart.fieldType(dart.legacy(score$.Score)),
    [_isHit]: dart.finalFieldType(dart.legacy(tag$.Tag)),
    [_isStopped]: dart.finalFieldType(dart.legacy(tag$.Tag))
  }));
  var _countScore = dart.privateName(foreach, "_countScore");
  var score$5 = dart.privateName(foreach, "ForEach.score");
  var from$0 = dart.privateName(foreach, "ForEach.from");
  var step$0 = dart.privateName(foreach, "ForEach.step");
  var counter$ = dart.privateName(foreach, "ForEach.counter");
  var then$4 = dart.privateName(foreach, "ForEach.then");
  var translate$0 = dart.privateName(foreach, "ForEach.translate");
  foreach.ForEach = class ForEach extends rest_action.RestActionAble {
    get score() {
      return this[score$5];
    }
    set score(value) {
      this[score$5] = value;
    }
    get from() {
      return this[from$0];
    }
    set from(value) {
      this[from$0] = value;
    }
    get step() {
      return this[step$0];
    }
    set step(value) {
      this[step$0] = value;
    }
    get counter() {
      return this[counter$];
    }
    set counter(value) {
      this[counter$] = value;
    }
    get then() {
      return this[then$4];
    }
    set then(value) {
      this[then$4] = value;
    }
    get translate() {
      return this[translate$0];
    }
    set translate(value) {
      this[translate$0] = value;
    }
    generate(context) {
      let t11;
      let c = new condition$.Condition.new(dart.notNull(this.step) < 0 ? this[_countScore].isBiggerOrEqual(this.score) : this[_countScore].isSmallerOrEqual(this.score));
      let gr = new group.Group.new({filename: "foreach", children: JSArrayOfWidgetL().of([(t11 = this[_countScore], this.then(t11)), dart.notNull(this.step) < 0 ? this[_countScore].subtract(-dart.notNull(this.step)) : this[_countScore].add(this.step), new execute.Execute.new({If: c, location: this.translate, children: JSArrayOfWidgetL().of([new file.File.recursive()])})])});
      return new for_list.For.of(JSArrayOfWidgetL().of([this[_countScore].set(this.from), new $if.If.new(dart.notNull(this.step) < 0 ? this[_countScore].isBigger(this.score) : this[_countScore].isSmaller(this.score), {then: JSArrayOfWidgetL().of([gr])})]));
    }
  };
  (foreach.ForEach.new = function(score, opts) {
    let then = opts && 'then' in opts ? opts.then : null;
    let from = opts && 'from' in opts ? opts.from : 0;
    let counter = opts && 'counter' in opts ? opts.counter : null;
    let step = opts && 'step' in opts ? opts.step : 1;
    let translate = opts && 'translate' in opts ? opts.translate : null;
    this[_countScore] = null;
    this[score$5] = score;
    this[then$4] = then;
    this[from$0] = from;
    this[counter$] = counter;
    this[step$0] = step;
    this[translate$0] = translate;
    foreach.ForEach.__proto__.new.call(this);
    this.counter == null ? this.counter = new entity$.Entity.PlayerName("#objd_foreach") : null;
    this[_countScore] = new score$.Score.new(this.counter, "objd_count");
  }).prototype = foreach.ForEach.prototype;
  dart.addTypeTests(foreach.ForEach);
  dart.addTypeCaches(foreach.ForEach);
  dart.setMethodSignature(foreach.ForEach, () => ({
    __proto__: dart.getMethods(foreach.ForEach.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(foreach.ForEach, L83);
  dart.setFieldSignature(foreach.ForEach, () => ({
    __proto__: dart.getFields(foreach.ForEach.__proto__),
    score: dart.fieldType(dart.legacy(score$.Score)),
    [_countScore]: dart.fieldType(dart.legacy(score$.Score)),
    from: dart.fieldType(dart.legacy(core.int)),
    step: dart.fieldType(dart.legacy(core.int)),
    counter: dart.fieldType(dart.legacy(entity$.Entity)),
    then: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(score$.Score)]))),
    translate: dart.fieldType(dart.legacy(location$.Location))
  }));
  var name$12 = dart.privateName(repeat, "Repeat.name");
  var path$6 = dart.privateName(repeat, "Repeat.path");
  var child$3 = dart.privateName(repeat, "Repeat.child");
  var counter$0 = dart.privateName(repeat, "Repeat.counter");
  var to$3 = dart.privateName(repeat, "Repeat.to");
  var ticks$0 = dart.privateName(repeat, "Repeat.ticks");
  repeat.Repeat = class Repeat extends rest_action.RestActionAble {
    get name() {
      return this[name$12];
    }
    set name(value) {
      this[name$12] = value;
    }
    get path() {
      return this[path$6];
    }
    set path(value) {
      this[path$6] = value;
    }
    get child() {
      return this[child$3];
    }
    set child(value) {
      this[child$3] = value;
    }
    get counter() {
      return this[counter$0];
    }
    set counter(value) {
      this[counter$0] = value;
    }
    get to() {
      return this[to$3];
    }
    set to(value) {
      this[to$3] = value;
    }
    get ticks() {
      return this[ticks$0];
    }
    set ticks(value) {
      this[ticks$0] = value;
    }
    generate(context) {
      let score = new score$.Score.new(new entity$.Entity.PlayerName(this.name), this.counter);
      let filePath = dart.notNull(this.path) + "/" + dart.notNull(this.name);
      return new for_list.For.of(JSArrayOfWidgetL().of([score.set(0), new file.File.execute(filePath, {child: new for_list.For.of(JSArrayOfWidgetL().of([this.child, score.add(1), new $if.If.new(score.matchesRange(new entity$.Range.to(this.to)), {then: JSArrayOfWidgetL().of([new schedule.Schedule.new(filePath, {ticks: this.ticks})])})]))})]));
    }
  };
  (repeat.Repeat.new = function(name, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let counter = opts && 'counter' in opts ? opts.counter : "objd_repeat";
    let path = opts && 'path' in opts ? opts.path : "timers";
    let ticks = opts && 'ticks' in opts ? opts.ticks : 1;
    this[name$12] = name;
    this[child$3] = child;
    this[to$3] = to;
    this[counter$0] = counter;
    this[path$6] = path;
    this[ticks$0] = ticks;
    repeat.Repeat.__proto__.new.call(this);
    ;
  }).prototype = repeat.Repeat.prototype;
  dart.addTypeTests(repeat.Repeat);
  dart.addTypeCaches(repeat.Repeat);
  dart.setMethodSignature(repeat.Repeat, () => ({
    __proto__: dart.getMethods(repeat.Repeat.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(repeat.Repeat, L84);
  dart.setFieldSignature(repeat.Repeat, () => ({
    __proto__: dart.getFields(repeat.Repeat.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    child: dart.fieldType(dart.legacy(widget.Widget)),
    counter: dart.fieldType(dart.legacy(core.String)),
    to: dart.fieldType(dart.legacy(core.int)),
    ticks: dart.fieldType(dart.legacy(core.int))
  }));
  var _diff = dart.privateName(randomScore, "_diff");
  var targetFilePath$1 = dart.privateName(randomScore, "RandomScore.targetFilePath");
  var targetFileName$1 = dart.privateName(randomScore, "RandomScore.targetFileName");
  var entity$12 = dart.privateName(randomScore, "RandomScore.entity");
  var objective$0 = dart.privateName(randomScore, "RandomScore.objective");
  var to$4 = dart.privateName(randomScore, "RandomScore.to");
  var from$1 = dart.privateName(randomScore, "RandomScore.from");
  randomScore.RandomScore = class RandomScore extends rest_action.RestActionAble {
    get targetFilePath() {
      return this[targetFilePath$1];
    }
    set targetFilePath(value) {
      this[targetFilePath$1] = value;
    }
    get targetFileName() {
      return this[targetFileName$1];
    }
    set targetFileName(value) {
      this[targetFileName$1] = value;
    }
    get entity() {
      return this[entity$12];
    }
    set entity(value) {
      this[entity$12] = value;
    }
    get objective() {
      return this[objective$0];
    }
    set objective(value) {
      this[objective$0] = value;
    }
    get to() {
      return this[to$4];
    }
    set to(value) {
      this[to$4] = value;
    }
    get from() {
      return this[from$1];
    }
    set from(value) {
      this[from$1] = value;
    }
    get score() {
      return new score$.Score.new(this.entity, this.objective);
    }
    generate(context) {
      let t11;
      let s = new scoreboard.Scoreboard.new(this.objective);
      return new for_list.For.of(JSArrayOfWidgetL().of([new score$.Score.new(new entity$.Entity.PlayerName("#max"), this.objective).set(this[_diff]), new group.Group.new({path: this.targetFilePath, filename: (t11 = this.targetFileName, t11 == null ? "random" : t11), generateIDs: this.targetFileName == null, children: JSArrayOfWidgetL().of([new comment.Comment.new("Random UUID Generator from " + dart.str(context.file)), new areaeffectcloud.AreaEffectCloud.new(new location$.Location.here(), {tags: JSArrayOfStringL().of(["objd_random"])}), s._get(this.entity).setToResult(new command$.Command.new("data get entity @e[tag=objd_random,sort=nearest,limit=1] UUIDMost 0.0000000001")), s._get(this.entity).modulo(s._get("#max"))])}), dart.notNull(this.from) > 0 ? this.score.add(this.from) : null]));
    }
  };
  (randomScore.RandomScore.new = function(entity, opts) {
    let from = opts && 'from' in opts ? opts.from : 0;
    let to = opts && 'to' in opts ? opts.to : null;
    let objective = opts && 'objective' in opts ? opts.objective : "objd_random";
    let targetFilePath = opts && 'targetFilePath' in opts ? opts.targetFilePath : "objd";
    let targetFileName = opts && 'targetFileName' in opts ? opts.targetFileName : null;
    this[_diff] = null;
    this[entity$12] = entity;
    this[from$1] = from;
    this[to$4] = to;
    this[objective$0] = objective;
    this[targetFilePath$1] = targetFilePath;
    this[targetFileName$1] = targetFileName;
    randomScore.RandomScore.__proto__.new.call(this);
    this[_diff] = dart.notNull(this.to) - dart.notNull(this.from) + 1;
  }).prototype = randomScore.RandomScore.prototype;
  dart.addTypeTests(randomScore.RandomScore);
  dart.addTypeCaches(randomScore.RandomScore);
  dart.setMethodSignature(randomScore.RandomScore, () => ({
    __proto__: dart.getMethods(randomScore.RandomScore.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setGetterSignature(randomScore.RandomScore, () => ({
    __proto__: dart.getGetters(randomScore.RandomScore.__proto__),
    score: dart.legacy(score$.Score)
  }));
  dart.setLibraryUri(randomScore.RandomScore, L85);
  dart.setFieldSignature(randomScore.RandomScore, () => ({
    __proto__: dart.getFields(randomScore.RandomScore.__proto__),
    targetFilePath: dart.fieldType(dart.legacy(core.String)),
    targetFileName: dart.fieldType(dart.legacy(core.String)),
    entity: dart.fieldType(dart.legacy(entity$.Entity)),
    objective: dart.fieldType(dart.legacy(core.String)),
    to: dart.fieldType(dart.legacy(core.int)),
    from: dart.fieldType(dart.legacy(core.int)),
    [_diff]: dart.fieldType(dart.legacy(core.int))
  }));
  var texts$ = dart.privateName(hologram, "Hologram.texts");
  var tags$0 = dart.privateName(hologram, "Hologram.tags");
  var location$3 = dart.privateName(hologram, "Hologram.location");
  var space$ = dart.privateName(hologram, "Hologram.space");
  hologram.Hologram = class Hologram extends rest_action.RestActionAble {
    get texts() {
      return this[texts$];
    }
    set texts(value) {
      this[texts$] = value;
    }
    get tags() {
      return this[tags$0];
    }
    set tags(value) {
      this[tags$0] = value;
    }
    get location() {
      return this[location$3];
    }
    set location(value) {
      this[location$3] = value;
    }
    get space() {
      return this[space$];
    }
    set space(value) {
      this[space$] = value;
    }
    generate(context) {
      let i = this.texts[$length];
      if (i === 1) {
        return new armorstand.ArmorStand.staticMarker(this.location, {name: this.texts[$_get](0), nameVisible: true, tags: this.tags});
      }
      return new execute.Execute.positioned(this.location, {children: this.texts[$map](RestActionAbleL(), dart.fn(text => {
          i = dart.notNull(i) - 1;
          if (text != null) {
            return new armorstand.ArmorStand.staticMarker(new location$.Location.rel({x: 0.0, y: dart.notNull(i) * dart.notNull(this.space), z: 0.0}), {name: text, nameVisible: true, tags: this.tags});
          }
          return new comment.Comment.Null();
        }, TextComponentLToRestActionAbleL()))[$toList]()});
    }
  };
  (hologram.Hologram.new = function(str, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let space = opts && 'space' in opts ? opts.space : 0.25;
    this[texts$] = null;
    this[location$3] = location;
    this[tags$0] = tags;
    this[space$] = space;
    hologram.Hologram.__proto__.new.call(this);
    if (this.tags == null) {
      this.tags = JSArrayOfStringL().of(["objd_hologram"]);
    } else {
      this.tags[$add]("objd_hologram");
    }
    this.texts = str[$split]("\n")[$map](TextComponentL(), dart.fn(line => line[$isNotEmpty] ? new text_components.TextComponent.new(line, {color: color}) : null, StringLToTextComponentL()))[$toList]();
  }).prototype = hologram.Hologram.prototype;
  (hologram.Hologram.multiple = function(texts, opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let space = opts && 'space' in opts ? opts.space : 0.25;
    this[texts$] = texts;
    this[location$3] = location;
    this[tags$0] = tags;
    this[space$] = space;
    hologram.Hologram.__proto__.new.call(this);
    if (this.tags == null) {
      this.tags = JSArrayOfStringL().of(["objd_hologram"]);
    } else {
      this.tags[$add]("objd_hologram");
    }
  }).prototype = hologram.Hologram.prototype;
  dart.addTypeTests(hologram.Hologram);
  dart.addTypeCaches(hologram.Hologram);
  dart.setMethodSignature(hologram.Hologram, () => ({
    __proto__: dart.getMethods(hologram.Hologram.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(hologram.Hologram, L86);
  dart.setFieldSignature(hologram.Hologram, () => ({
    __proto__: dart.getFields(hologram.Hologram.__proto__),
    texts: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_components.TextComponent)))),
    tags: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    location: dart.fieldType(dart.legacy(location$.Location)),
    space: dart.fieldType(dart.legacy(core.double))
  }));
  var _addBoolNbt$ = dart.privateName(armorstand, "_addBoolNbt");
  var _addSlots = dart.privateName(armorstand, "_addSlots");
  var name$13 = dart.privateName(armorstand, "ArmorStand.name");
  var nbt$4 = dart.privateName(armorstand, "ArmorStand.nbt");
  var location$4 = dart.privateName(armorstand, "ArmorStand.location");
  var invulnerable$ = dart.privateName(armorstand, "ArmorStand.invulnerable");
  var gravity$ = dart.privateName(armorstand, "ArmorStand.gravity");
  var small$ = dart.privateName(armorstand, "ArmorStand.small");
  var nameVisible$ = dart.privateName(armorstand, "ArmorStand.nameVisible");
  var glowing$ = dart.privateName(armorstand, "ArmorStand.glowing");
  var mainHand$ = dart.privateName(armorstand, "ArmorStand.mainHand");
  var offHand$ = dart.privateName(armorstand, "ArmorStand.offHand");
  var head$ = dart.privateName(armorstand, "ArmorStand.head");
  var chest$ = dart.privateName(armorstand, "ArmorStand.chest");
  var legs$ = dart.privateName(armorstand, "ArmorStand.legs");
  var boots$ = dart.privateName(armorstand, "ArmorStand.boots");
  var tags$1 = dart.privateName(armorstand, "ArmorStand.tags");
  var fire$ = dart.privateName(armorstand, "ArmorStand.fire");
  var rotation$ = dart.privateName(armorstand, "ArmorStand.rotation");
  var passengers$ = dart.privateName(armorstand, "ArmorStand.passengers");
  armorstand.ArmorStand = class ArmorStand extends rest_action.RestActionAble {
    get name() {
      return this[name$13];
    }
    set name(value) {
      this[name$13] = value;
    }
    get nbt() {
      return this[nbt$4];
    }
    set nbt(value) {
      this[nbt$4] = value;
    }
    get location() {
      return this[location$4];
    }
    set location(value) {
      this[location$4] = value;
    }
    get invulnerable() {
      return this[invulnerable$];
    }
    set invulnerable(value) {
      this[invulnerable$] = value;
    }
    get gravity() {
      return this[gravity$];
    }
    set gravity(value) {
      this[gravity$] = value;
    }
    get small() {
      return this[small$];
    }
    set small(value) {
      this[small$] = value;
    }
    get nameVisible() {
      return this[nameVisible$];
    }
    set nameVisible(value) {
      this[nameVisible$] = value;
    }
    get glowing() {
      return this[glowing$];
    }
    set glowing(value) {
      this[glowing$] = value;
    }
    get mainHand() {
      return this[mainHand$];
    }
    set mainHand(value) {
      this[mainHand$] = value;
    }
    get offHand() {
      return this[offHand$];
    }
    set offHand(value) {
      this[offHand$] = value;
    }
    get head() {
      return this[head$];
    }
    set head(value) {
      this[head$] = value;
    }
    get chest() {
      return this[chest$];
    }
    set chest(value) {
      this[chest$] = value;
    }
    get legs() {
      return this[legs$];
    }
    set legs(value) {
      this[legs$] = value;
    }
    get boots() {
      return this[boots$];
    }
    set boots(value) {
      this[boots$] = value;
    }
    get tags() {
      return this[tags$1];
    }
    set tags(value) {
      this[tags$1] = value;
    }
    get fire() {
      return this[fire$];
    }
    set fire(value) {
      this[fire$] = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      this[rotation$] = value;
    }
    get passengers() {
      return this[passengers$];
    }
    set passengers(value) {
      this[passengers$] = value;
    }
    [_addSlots]() {
      if ((this.mainHand != null || this.offHand != null) && this.nbt[$_get]("HandItems") == null) {
        this.nbt[$_set]("HandItems", JSArrayOfMapL().of([new _js_helper.LinkedMap.new(), new _js_helper.LinkedMap.new()]));
      }
      if (!(this.head == null && this.chest == null && this.legs == null && this.boots == null)) {
        this.nbt[$_set]("ArmorItems", JSArrayOfMapL().of([new _js_helper.LinkedMap.new(), new _js_helper.LinkedMap.new(), new _js_helper.LinkedMap.new(), new _js_helper.LinkedMap.new()]));
      }
      if (this.mainHand != null) dart.dsend(this.nbt[$_get]("HandItems"), '_set', [0, this.mainHand.getMap()]);
      if (this.offHand != null) dart.dsend(this.nbt[$_get]("HandItems"), '_set', [1, this.offHand.getMap()]);
      if (this.head != null) dart.dsend(this.nbt[$_get]("ArmorItems"), '_set', [3, this.head.getMap()]);
      if (this.chest != null) dart.dsend(this.nbt[$_get]("ArmorItems"), '_set', [2, this.chest.getMap()]);
      if (this.legs != null) dart.dsend(this.nbt[$_get]("ArmorItems"), '_set', [1, this.legs.getMap()]);
      if (this.boots != null) dart.dsend(this.nbt[$_get]("ArmorItems"), '_set', [0, this.boots.getMap()]);
    }
    [_addBoolNbt$](value, path) {
      if (value != null) this.nbt[$_set](path, dart.test(value) ? 1 : 0);
    }
    generate(context) {
      return new summon.Summon.new(entities.Entities.armor_stand, {location: this.location, tags: this.tags, name: this.name, nameVisible: this.nameVisible, nbt: this.nbt, invulnerable: this.invulnerable, glowing: this.glowing, gravity: this.gravity, small: this.small, passengers: this.passengers, rotation: this.rotation});
    }
  };
  (armorstand.ArmorStand.new = function(location, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nameVisible = opts && 'nameVisible' in opts ? opts.nameVisible : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let invisible = opts && 'invisible' in opts ? opts.invisible : null;
    let invulnerable = opts && 'invulnerable' in opts ? opts.invulnerable : null;
    let marker = opts && 'marker' in opts ? opts.marker : null;
    let hasArms = opts && 'hasArms' in opts ? opts.hasArms : null;
    let basePlate = opts && 'basePlate' in opts ? opts.basePlate : null;
    let mainHand = opts && 'mainHand' in opts ? opts.mainHand : null;
    let offHand = opts && 'offHand' in opts ? opts.offHand : null;
    let head = opts && 'head' in opts ? opts.head : null;
    let chest = opts && 'chest' in opts ? opts.chest : null;
    let legs = opts && 'legs' in opts ? opts.legs : null;
    let boots = opts && 'boots' in opts ? opts.boots : null;
    let gravity = opts && 'gravity' in opts ? opts.gravity : null;
    let glowing = opts && 'glowing' in opts ? opts.glowing : null;
    let fire = opts && 'fire' in opts ? opts.fire : null;
    let small = opts && 'small' in opts ? opts.small : null;
    let passengers = opts && 'passengers' in opts ? opts.passengers : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    this[location$4] = location;
    this[name$13] = name;
    this[nameVisible$] = nameVisible;
    this[nbt$4] = nbt;
    this[invulnerable$] = invulnerable;
    this[mainHand$] = mainHand;
    this[offHand$] = offHand;
    this[head$] = head;
    this[chest$] = chest;
    this[legs$] = legs;
    this[boots$] = boots;
    this[gravity$] = gravity;
    this[glowing$] = glowing;
    this[fire$] = fire;
    this[small$] = small;
    this[passengers$] = passengers;
    this[tags$1] = tags;
    this[rotation$] = rotation;
    armorstand.ArmorStand.__proto__.new.call(this);
    this.nbt == null ? this.nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    this[_addBoolNbt$](marker, "Marker");
    this[_addBoolNbt$](hasArms, "ShowArms");
    this[_addBoolNbt$](invisible, "Invisible");
    if (basePlate != null) this[_addBoolNbt$](!dart.test(basePlate), "NoBasePlate");
    this[_addSlots]();
  }).prototype = armorstand.ArmorStand.prototype;
  (armorstand.ArmorStand.staticMarker = function(location, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nameVisible = opts && 'nameVisible' in opts ? opts.nameVisible : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let invisible = opts && 'invisible' in opts ? opts.invisible : true;
    let invulnerable = opts && 'invulnerable' in opts ? opts.invulnerable : true;
    let gravity = opts && 'gravity' in opts ? opts.gravity : false;
    let mainHand = opts && 'mainHand' in opts ? opts.mainHand : null;
    let offHand = opts && 'offHand' in opts ? opts.offHand : null;
    let head = opts && 'head' in opts ? opts.head : null;
    let chest = opts && 'chest' in opts ? opts.chest : null;
    let legs = opts && 'legs' in opts ? opts.legs : null;
    let boots = opts && 'boots' in opts ? opts.boots : null;
    let glowing = opts && 'glowing' in opts ? opts.glowing : null;
    let fire = opts && 'fire' in opts ? opts.fire : null;
    let small = opts && 'small' in opts ? opts.small : null;
    let passengers = opts && 'passengers' in opts ? opts.passengers : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let rotation = opts && 'rotation' in opts ? opts.rotation : null;
    this[location$4] = location;
    this[name$13] = name;
    this[nameVisible$] = nameVisible;
    this[nbt$4] = nbt;
    this[invulnerable$] = invulnerable;
    this[gravity$] = gravity;
    this[mainHand$] = mainHand;
    this[offHand$] = offHand;
    this[head$] = head;
    this[chest$] = chest;
    this[legs$] = legs;
    this[boots$] = boots;
    this[glowing$] = glowing;
    this[fire$] = fire;
    this[small$] = small;
    this[passengers$] = passengers;
    this[tags$1] = tags;
    this[rotation$] = rotation;
    armorstand.ArmorStand.__proto__.new.call(this);
    this.nbt == null ? this.nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    this[_addBoolNbt$](true, "Marker");
    this[_addBoolNbt$](invisible, "Invisible");
    this[_addSlots]();
  }).prototype = armorstand.ArmorStand.prototype;
  dart.addTypeTests(armorstand.ArmorStand);
  dart.addTypeCaches(armorstand.ArmorStand);
  dart.setMethodSignature(armorstand.ArmorStand, () => ({
    __proto__: dart.getMethods(armorstand.ArmorStand.__proto__),
    [_addSlots]: dart.fnType(dart.void, []),
    [_addBoolNbt$]: dart.fnType(dart.void, [dart.legacy(core.bool), dart.legacy(core.String)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(armorstand.ArmorStand, L87);
  dart.setFieldSignature(armorstand.ArmorStand, () => ({
    __proto__: dart.getFields(armorstand.ArmorStand.__proto__),
    name: dart.fieldType(dart.legacy(text_components.TextComponent)),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    location: dart.fieldType(dart.legacy(location$.Location)),
    invulnerable: dart.fieldType(dart.legacy(core.bool)),
    gravity: dart.fieldType(dart.legacy(core.bool)),
    small: dart.fieldType(dart.legacy(core.bool)),
    nameVisible: dart.fieldType(dart.legacy(core.bool)),
    glowing: dart.fieldType(dart.legacy(core.bool)),
    mainHand: dart.fieldType(dart.legacy(item.Item)),
    offHand: dart.fieldType(dart.legacy(item.Item)),
    head: dart.fieldType(dart.legacy(item.Item)),
    chest: dart.fieldType(dart.legacy(item.Item)),
    legs: dart.fieldType(dart.legacy(item.Item)),
    boots: dart.fieldType(dart.legacy(item.Item)),
    tags: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    fire: dart.fieldType(dart.legacy(core.int)),
    rotation: dart.fieldType(dart.legacy(rotation.Rotation)),
    passengers: dart.fieldType(dart.legacy(core.List$(dart.legacy(summon.Summon))))
  }));
  var _addIfExist = dart.privateName(areaeffectcloud, "_addIfExist");
  var name$14 = dart.privateName(areaeffectcloud, "AreaEffectCloud.name");
  var nbt$5 = dart.privateName(areaeffectcloud, "AreaEffectCloud.nbt");
  var location$5 = dart.privateName(areaeffectcloud, "AreaEffectCloud.location");
  var age$ = dart.privateName(areaeffectcloud, "AreaEffectCloud.age");
  var tags$2 = dart.privateName(areaeffectcloud, "AreaEffectCloud.tags");
  areaeffectcloud.AreaEffectCloud = class AreaEffectCloud extends rest_action.RestActionAble {
    get name() {
      return this[name$14];
    }
    set name(value) {
      this[name$14] = value;
    }
    get nbt() {
      return this[nbt$5];
    }
    set nbt(value) {
      this[nbt$5] = value;
    }
    get location() {
      return this[location$5];
    }
    set location(value) {
      this[location$5] = value;
    }
    get age() {
      return this[age$];
    }
    set age(value) {
      this[age$] = value;
    }
    get tags() {
      return this[tags$2];
    }
    set tags(value) {
      this[tags$2] = value;
    }
    [_addIfExist](val, tag) {
      if (val != null) this.nbt[$_set](tag, val);
    }
    generate(context) {
      return new summon.Summon.new(entities.Entities.area_effect_cloud, {location: this.location, tags: this.tags, name: this.name, nbt: this.nbt, age: this.age});
    }
  };
  (areaeffectcloud.AreaEffectCloud.new = function(location, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let age = opts && 'age' in opts ? opts.age : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let applicationDelay = opts && 'applicationDelay' in opts ? opts.applicationDelay : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let waitTime = opts && 'waitTime' in opts ? opts.waitTime : null;
    this[location$5] = location;
    this[name$14] = name;
    this[nbt$5] = nbt;
    this[age$] = age;
    this[tags$2] = tags;
    areaeffectcloud.AreaEffectCloud.__proto__.new.call(this);
    this.nbt == null ? this.nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    this[_addIfExist](radius, "Radius");
    this[_addIfExist](applicationDelay, "ReapplicationDelay");
    this[_addIfExist](duration, "Duration");
    this[_addIfExist](waitTime, "WaitTime");
  }).prototype = areaeffectcloud.AreaEffectCloud.prototype;
  (areaeffectcloud.AreaEffectCloud.persistent = function(location, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let nbt = opts && 'nbt' in opts ? opts.nbt : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let applicationDelay = opts && 'applicationDelay' in opts ? opts.applicationDelay : null;
    this[age$] = null;
    this[location$5] = location;
    this[name$14] = name;
    this[nbt$5] = nbt;
    this[tags$2] = tags;
    areaeffectcloud.AreaEffectCloud.__proto__.new.call(this);
    this.nbt == null ? this.nbt = new (IdentityMapOfStringL$dynamic()).new() : null;
    let inf = -2147483648;
    this.age = inf;
    this[_addIfExist](radius, "Radius");
    this[_addIfExist](applicationDelay, "ReapplicationDelay");
    this[_addIfExist](-1, "Duration");
    this[_addIfExist](inf, "WaitTime");
  }).prototype = areaeffectcloud.AreaEffectCloud.prototype;
  dart.addTypeTests(areaeffectcloud.AreaEffectCloud);
  dart.addTypeCaches(areaeffectcloud.AreaEffectCloud);
  dart.setMethodSignature(areaeffectcloud.AreaEffectCloud, () => ({
    __proto__: dart.getMethods(areaeffectcloud.AreaEffectCloud.__proto__),
    [_addIfExist]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(core.String)]),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(areaeffectcloud.AreaEffectCloud, L88);
  dart.setFieldSignature(areaeffectcloud.AreaEffectCloud, () => ({
    __proto__: dart.getFields(areaeffectcloud.AreaEffectCloud.__proto__),
    name: dart.fieldType(dart.legacy(text_components.TextComponent)),
    nbt: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))),
    location: dart.fieldType(dart.legacy(location$.Location)),
    age: dart.fieldType(dart.legacy(core.int)),
    tags: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var msg$ = dart.privateName(log, "Log.msg");
  var to$5 = dart.privateName(log, "Log.to");
  var color$0 = dart.privateName(log, "Log.color");
  var desc$ = dart.privateName(log, "Log.desc");
  log.Log = class Log extends rest_action.RestActionAble {
    get msg() {
      return this[msg$];
    }
    set msg(value) {
      this[msg$] = value;
    }
    get to() {
      return this[to$5];
    }
    set to(value) {
      this[to$5] = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      this[color$0] = value;
    }
    get desc() {
      return this[desc$];
    }
    set desc(value) {
      this[desc$] = value;
    }
    generate(context) {
      if (dart.test(context.prod)) return new comment.Comment.Null();
      let text = new text_components.TextComponent.new("undefined");
      if (numL().is(this.msg) || boolL().is(this.msg)) text = new text_components.TextComponent.new(dart.toString(this.msg));
      if (StringL().is(this.msg)) text = new text_components.TextComponent.new(StringL().as(this.msg));
      if (ScoreL().is(this.msg)) text = new text_components.TextComponent.score(ScoreL().as(this.msg));
      if (EntityL().is(this.msg)) text = new text_components.TextComponent.selector(EntityL().as(this.msg));
      return new tellraw.Tellraw.new(this.to, {show: (() => {
          let t11 = JSArrayOfTextComponentL().of([]);
          t11[$add](new text_components.TextComponent.new("Console > ", {color: this.color}));
          if (this.desc != null) t11[$add](new text_components.TextComponent.new(dart.str(this.desc) + " "));
          t11[$add](text);
          return t11;
        })()});
    }
  };
  (log.Log.new = function(msg, opts) {
    let to = opts && 'to' in opts ? opts.to : null;
    let desc = opts && 'desc' in opts ? opts.desc : null;
    let color = opts && 'color' in opts ? opts.color : C1157 || CT.C1157;
    this[msg$] = msg;
    this[to$5] = to;
    this[desc$] = desc;
    this[color$0] = color;
    log.Log.__proto__.new.call(this);
    this.to == null ? this.to = new entity$.Entity.All() : null;
  }).prototype = log.Log.prototype;
  dart.addTypeTests(log.Log);
  dart.addTypeCaches(log.Log);
  dart.setMethodSignature(log.Log, () => ({
    __proto__: dart.getMethods(log.Log.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(log.Log, L89);
  dart.setFieldSignature(log.Log, () => ({
    __proto__: dart.getFields(log.Log.__proto__),
    msg: dart.fieldType(dart.dynamic),
    to: dart.fieldType(dart.legacy(entity$.Entity)),
    color: dart.fieldType(dart.legacy(text_components.Color)),
    desc: dart.fieldType(dart.legacy(core.String))
  }));
  var rel$ = dart.privateName(aroundlocation, "AroundLocation.rel");
  var build$0 = dart.privateName(aroundlocation, "AroundLocation.build");
  var top$ = dart.privateName(aroundlocation, "AroundLocation.top");
  var bottom$ = dart.privateName(aroundlocation, "AroundLocation.bottom");
  var left$ = dart.privateName(aroundlocation, "AroundLocation.left");
  var right$ = dart.privateName(aroundlocation, "AroundLocation.right");
  var front$ = dart.privateName(aroundlocation, "AroundLocation.front");
  var back$ = dart.privateName(aroundlocation, "AroundLocation.back");
  aroundlocation.AroundLocation = class AroundLocation extends rest_action.RestActionAble {
    get rel() {
      return this[rel$];
    }
    set rel(value) {
      this[rel$] = value;
    }
    get build() {
      return this[build$0];
    }
    set build(value) {
      this[build$0] = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      this[top$] = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      this[bottom$] = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      this[left$] = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      this[right$] = value;
    }
    get front() {
      return this[front$];
    }
    set front(value) {
      this[front$] = value;
    }
    get back() {
      return this[back$];
    }
    set back(value) {
      this[back$] = value;
    }
    generate(context) {
      let t12, t12$, t12$0, t12$1, t12$2, t12$3;
      let builds = JSArrayOfWidgetL().of([]);
      if (dart.test(this.left)) builds[$add]((t12 = new location$.Location.rel({x: this.rel, y: 0.0, z: 0.0}), this.build(t12)));
      if (dart.test(this.right)) builds[$add]((t12$ = new location$.Location.rel({x: -dart.notNull(this.rel), y: 0.0, z: 0.0}), this.build(t12$)));
      if (dart.test(this.top)) builds[$add]((t12$0 = new location$.Location.rel({x: 0.0, y: this.rel, z: 0.0}), this.build(t12$0)));
      if (dart.test(this.bottom)) builds[$add]((t12$1 = new location$.Location.rel({x: 0.0, y: -dart.notNull(this.rel), z: 0.0}), this.build(t12$1)));
      if (dart.test(this.front)) builds[$add]((t12$2 = new location$.Location.rel({x: 0.0, y: 0.0, z: this.rel}), this.build(t12$2)));
      if (dart.test(this.back)) builds[$add]((t12$3 = new location$.Location.rel({x: 0.0, y: 0.0, z: -dart.notNull(this.rel)}), this.build(t12$3)));
      return new for_list.For.of(builds);
    }
  };
  (aroundlocation.AroundLocation.new = function(rel, opts) {
    let build = opts && 'build' in opts ? opts.build : null;
    let top = opts && 'top' in opts ? opts.top : true;
    let bottom = opts && 'bottom' in opts ? opts.bottom : true;
    let left = opts && 'left' in opts ? opts.left : true;
    let right = opts && 'right' in opts ? opts.right : true;
    let front = opts && 'front' in opts ? opts.front : true;
    let back = opts && 'back' in opts ? opts.back : true;
    this[rel$] = rel;
    this[build$0] = build;
    this[top$] = top;
    this[bottom$] = bottom;
    this[left$] = left;
    this[right$] = right;
    this[front$] = front;
    this[back$] = back;
    aroundlocation.AroundLocation.__proto__.new.call(this);
    ;
  }).prototype = aroundlocation.AroundLocation.prototype;
  dart.addTypeTests(aroundlocation.AroundLocation);
  dart.addTypeCaches(aroundlocation.AroundLocation);
  dart.setMethodSignature(aroundlocation.AroundLocation, () => ({
    __proto__: dart.getMethods(aroundlocation.AroundLocation.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(aroundlocation.AroundLocation, L90);
  dart.setFieldSignature(aroundlocation.AroundLocation, () => ({
    __proto__: dart.getFields(aroundlocation.AroundLocation.__proto__),
    rel: dart.fieldType(dart.legacy(core.double)),
    build: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(widget.Widget), [dart.legacy(location$.Location)]))),
    top: dart.fieldType(dart.legacy(core.bool)),
    bottom: dart.fieldType(dart.legacy(core.bool)),
    left: dart.fieldType(dart.legacy(core.bool)),
    right: dart.fieldType(dart.legacy(core.bool)),
    front: dart.fieldType(dart.legacy(core.bool)),
    back: dart.fieldType(dart.legacy(core.bool))
  }));
  var name$15 = dart.privateName(timer, "Timeout.name");
  var path$7 = dart.privateName(timer, "Timeout.path");
  var children$1 = dart.privateName(timer, "Timeout.children");
  var ticks$1 = dart.privateName(timer, "Timeout.ticks");
  timer.Timeout = class Timeout extends rest_action.RestActionAble {
    get name() {
      return this[name$15];
    }
    set name(value) {
      this[name$15] = value;
    }
    get path() {
      return this[path$7];
    }
    set path(value) {
      this[path$7] = value;
    }
    get children() {
      return this[children$1];
    }
    set children(value) {
      this[children$1] = value;
    }
    get ticks() {
      return this[ticks$1];
    }
    set ticks(value) {
      this[ticks$1] = value;
    }
    generate(context) {
      return new schedule.Schedule.file(new file.File.execute(dart.notNull(this.path) + "/" + dart.notNull(this.name), {child: new for_list.For.of(this.children)}), {ticks: this.ticks});
    }
  };
  (timer.Timeout.new = function(name, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    let path = opts && 'path' in opts ? opts.path : "timers";
    this[name$15] = name;
    this[children$1] = children;
    this[ticks$1] = ticks;
    this[path$7] = path;
    if (!(ticks != null)) dart.assertFailed(null, L91, 20, 16, "ticks != null");
    timer.Timeout.__proto__.new.call(this);
    ;
  }).prototype = timer.Timeout.prototype;
  dart.addTypeTests(timer.Timeout);
  dart.addTypeCaches(timer.Timeout);
  dart.setMethodSignature(timer.Timeout, () => ({
    __proto__: dart.getMethods(timer.Timeout.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(timer.Timeout, L92);
  dart.setFieldSignature(timer.Timeout, () => ({
    __proto__: dart.getFields(timer.Timeout.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    children: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    ticks: dart.fieldType(dart.legacy(core.int))
  }));
  var _stop$ = dart.privateName(timer, "_stop");
  var name$16 = dart.privateName(timer, "Timer.name");
  var path$8 = dart.privateName(timer, "Timer.path");
  var children$2 = dart.privateName(timer, "Timer.children");
  var ticks$2 = dart.privateName(timer, "Timer.ticks");
  var infinite$ = dart.privateName(timer, "Timer.infinite");
  timer.Timer = class Timer extends rest_action.RestActionAble {
    get name() {
      return this[name$16];
    }
    set name(value) {
      this[name$16] = value;
    }
    get path() {
      return this[path$8];
    }
    set path(value) {
      this[path$8] = value;
    }
    get children() {
      return this[children$2];
    }
    set children(value) {
      this[children$2] = value;
    }
    get ticks() {
      return this[ticks$2];
    }
    set ticks(value) {
      this[ticks$2] = value;
    }
    get infinite() {
      return this[infinite$];
    }
    set infinite(value) {
      this[infinite$] = value;
    }
    generate(context) {
      if (dart.equals(this[_stop$], true)) return new entity$.Entity.All().addTag("objd_" + dart.notNull(this.name));
      if (dart.test(this.infinite)) {
        this.children[$add](new schedule.Schedule.new(dart.notNull(this.path) + "/" + dart.notNull(this.name), {ticks: this.ticks}));
      } else {
        this.children[$addAll](JSArrayOfWidgetL().of([new $if.If.new(new condition$.Condition.not(new entity$.Entity.All({tags: ["objd_" + dart.notNull(this.name)]})), {then: JSArrayOfWidgetL().of([new schedule.Schedule.new(dart.notNull(this.path) + "/" + dart.notNull(this.name), {ticks: this.ticks})])}), new entity$.Entity.All().removeTag("objd_" + dart.notNull(this.name))]));
      }
      return new file.File.execute(dart.notNull(this.path) + "/" + dart.notNull(this.name), {child: new for_list.For.of(this.children)});
    }
  };
  (timer.Timer.new = function(name, opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    let path = opts && 'path' in opts ? opts.path : "timers";
    let infinite = opts && 'infinite' in opts ? opts.infinite : true;
    this[_stop$] = null;
    this[name$16] = name;
    this[children$2] = children;
    this[ticks$2] = ticks;
    this[path$8] = path;
    this[infinite$] = infinite;
    if (!(ticks != null)) dart.assertFailed(null, L91, 46, 15, "ticks != null");
    timer.Timer.__proto__.new.call(this);
    ;
  }).prototype = timer.Timer.prototype;
  (timer.Timer.stop = function(name) {
    this[_stop$] = null;
    this[infinite$] = null;
    this[path$8] = null;
    this[ticks$2] = null;
    this[children$2] = null;
    this[name$16] = name;
    timer.Timer.__proto__.new.call(this);
    this[_stop$] = true;
  }).prototype = timer.Timer.prototype;
  dart.addTypeTests(timer.Timer);
  dart.addTypeCaches(timer.Timer);
  dart.setMethodSignature(timer.Timer, () => ({
    __proto__: dart.getMethods(timer.Timer.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)])
  }));
  dart.setLibraryUri(timer.Timer, L92);
  dart.setFieldSignature(timer.Timer, () => ({
    __proto__: dart.getFields(timer.Timer.__proto__),
    [_stop$]: dart.fieldType(dart.legacy(core.bool)),
    name: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    children: dart.fieldType(dart.legacy(core.List$(dart.legacy(widget.Widget)))),
    ticks: dart.fieldType(dart.legacy(core.int)),
    infinite: dart.fieldType(dart.legacy(core.bool))
  }));
  var _score = dart.privateName(click_event, "_score");
  var path$9 = dart.privateName(click_event, "ClickEvent.path");
  var name$17 = dart.privateName(click_event, "ClickEvent.name");
  var onClick$ = dart.privateName(click_event, "ClickEvent.onClick");
  var selectedItem$ = dart.privateName(click_event, "ClickEvent.selectedItem");
  click_event.ClickEvent = class ClickEvent extends module.Module {
    get path() {
      return this[path$9];
    }
    set path(value) {
      this[path$9] = value;
    }
    get name() {
      return this[name$17];
    }
    set name(value) {
      this[name$17] = value;
    }
    get onClick() {
      return this[onClick$];
    }
    set onClick(value) {
      this[onClick$] = value;
    }
    get selectedItem() {
      return this[selectedItem$];
    }
    set selectedItem(value) {
      this[selectedItem$] = value;
    }
    generate(context) {
      return new for_list.For.of(JSArrayOfWidgetL().of([new scoreboard.Scoreboard.new("objd_click", {type: "minecraft.used:minecraft.carrot_on_a_stick"}), new execute.Execute.asat(new entity$.Entity.All({scores: JSArrayOfScoreL().of([this[_score].matchesRange(new entity$.Range.from(1))]), nbt: this.selectedItem != null ? new (IdentityMapOfStringL$dynamic()).from(["SelectedItem", this.selectedItem.getMap()]) : null}), {children: JSArrayOfWidgetL().of([new file.File.execute(dart.notNull(this.path) + dart.notNull(this.name), {create: false})])})]));
    }
    registerFiles() {
      return JSArrayOfFileL().of([new file.File.new(dart.notNull(this.path) + dart.notNull(this.name), {child: new for_list.For.of(JSArrayOfWidgetL().of([this.onClick, this[_score].reset()]))})]);
    }
  };
  (click_event.ClickEvent.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : "objd_click";
    let onClick = opts && 'onClick' in opts ? opts.onClick : null;
    let selectedItem = opts && 'selectedItem' in opts ? opts.selectedItem : null;
    let path = opts && 'path' in opts ? opts.path : "events/";
    this[_score] = new score$.Score.fromSelected("objd_click");
    this[name$17] = name;
    this[onClick$] = onClick;
    this[selectedItem$] = selectedItem;
    this[path$9] = path;
    click_event.ClickEvent.__proto__.new.call(this);
    ;
  }).prototype = click_event.ClickEvent.prototype;
  dart.addTypeTests(click_event.ClickEvent);
  dart.addTypeCaches(click_event.ClickEvent);
  dart.setMethodSignature(click_event.ClickEvent, () => ({
    __proto__: dart.getMethods(click_event.ClickEvent.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    registerFiles: dart.fnType(dart.legacy(core.List$(dart.legacy(file.File))), [])
  }));
  dart.setLibraryUri(click_event.ClickEvent, L93);
  dart.setFieldSignature(click_event.ClickEvent, () => ({
    __proto__: dart.getFields(click_event.ClickEvent.__proto__),
    path: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    onClick: dart.fieldType(dart.legacy(widget.Widget)),
    selectedItem: dart.fieldType(dart.legacy(item.Item)),
    [_score]: dart.finalFieldType(dart.legacy(score$.Score))
  }));
  var _score$ = dart.privateName(score_timer, "_score");
  var name$18 = dart.privateName(score_timer, "ScoreTimerModule.name");
  var path$10 = dart.privateName(score_timer, "ScoreTimerModule.path");
  var child$4 = dart.privateName(score_timer, "ScoreTimerModule.child");
  var selector$2 = dart.privateName(score_timer, "ScoreTimerModule.selector");
  var steps$ = dart.privateName(score_timer, "ScoreTimerModule.steps");
  var ticks$3 = dart.privateName(score_timer, "ScoreTimerModule.ticks");
  var start$ = dart.privateName(score_timer, "ScoreTimerModule.start");
  score_timer.ScoreTimerModule = class ScoreTimerModule extends module.Module {
    get name() {
      return this[name$18];
    }
    set name(value) {
      this[name$18] = value;
    }
    get path() {
      return this[path$10];
    }
    set path(value) {
      this[path$10] = value;
    }
    get child() {
      return this[child$4];
    }
    set child(value) {
      this[child$4] = value;
    }
    get selector() {
      return this[selector$2];
    }
    set selector(value) {
      this[selector$2] = value;
    }
    get steps() {
      return this[steps$];
    }
    set steps(value) {
      this[steps$] = value;
    }
    get ticks() {
      return this[ticks$3];
    }
    set ticks(value) {
      this[ticks$3] = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      this[start$] = value;
    }
    generate(context) {
      return new for_list.For.of((() => {
        let t12 = JSArrayOfWidgetL().of([]);
        if (dart.notNull(this.steps) >= 0) t12[$add](this[_score$].add(this.steps));
        if (dart.notNull(this.steps) < 0) t12[$add](this[_score$].subtract(this.steps));
        t12[$add](new $if.If.new(this[_score$].matches(this.ticks), {then: JSArrayOfWidgetL().of([new file.File.new(dart.notNull(this.path) + dart.notNull(this.name), {execute: true, create: false})])}));
        return t12;
      })());
    }
    registerFiles() {
      return JSArrayOfFileL().of([new file.File.new(dart.notNull(this.path) + dart.notNull(this.name), {child: new for_list.For.of(JSArrayOfWidgetL().of([this.child, this[_score$].set(this.start)]))})]);
    }
  };
  (score_timer.ScoreTimerModule.new = function(name, opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let steps = opts && 'steps' in opts ? opts.steps : 1;
    let path = opts && 'path' in opts ? opts.path : "timers/";
    let ticks = opts && 'ticks' in opts ? opts.ticks : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    this[_score$] = null;
    this[name$18] = name;
    this[child$4] = child;
    this[selector$2] = selector;
    this[steps$] = steps;
    this[path$10] = path;
    this[ticks$3] = ticks;
    this[start$] = start;
    score_timer.ScoreTimerModule.__proto__.new.call(this);
    this.selector == null ? this.selector = new entity$.Entity.PlayerName(this.name) : null;
    this[_score$] = new score$.Score.new(this.selector, this.name);
    if (!(this.ticks != null)) dart.assertFailed(null, L94, 52, 12, "ticks != null");
  }).prototype = score_timer.ScoreTimerModule.prototype;
  dart.addTypeTests(score_timer.ScoreTimerModule);
  dart.addTypeCaches(score_timer.ScoreTimerModule);
  dart.setMethodSignature(score_timer.ScoreTimerModule, () => ({
    __proto__: dart.getMethods(score_timer.ScoreTimerModule.__proto__),
    generate: dart.fnType(dart.legacy(widget.Widget), [dart.legacy(context$.Context)]),
    registerFiles: dart.fnType(dart.legacy(core.List$(dart.legacy(file.File))), [])
  }));
  dart.setLibraryUri(score_timer.ScoreTimerModule, L95);
  dart.setFieldSignature(score_timer.ScoreTimerModule, () => ({
    __proto__: dart.getFields(score_timer.ScoreTimerModule.__proto__),
    [_score$]: dart.fieldType(dart.legacy(score$.Score)),
    name: dart.fieldType(dart.legacy(core.String)),
    path: dart.fieldType(dart.legacy(core.String)),
    child: dart.fieldType(dart.legacy(widget.Widget)),
    selector: dart.fieldType(dart.legacy(entity$.Entity)),
    steps: dart.fieldType(dart.legacy(core.int)),
    ticks: dart.fieldType(dart.legacy(core.int)),
    start: dart.fieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/objd/basic/command", {
    "package:objd/utils/do_loop.dart": do_loop,
    "package:objd/core.dart": core$,
    "package:objd/utils/widgets.dart": widgets,
    "package:objd/utils/player_join.dart": player_join,
    "package:objd/utils/pass_trait.dart": pass_trait,
    "package:objd/basic/widget.dart": widget,
    "package:objd/build/build.dart": build,
    "package:objd/build/project.dart": project,
    "package:objd/build/reloader.dart": reloader,
    "package:objd/build/buildProject.dart": buildProject,
    "package:objd/build/findPack.dart": findPack,
    "package:objd/basic/pack.dart": pack,
    "package:objd/basic/module.dart": module,
    "package:objd/basic/rest_action.dart": rest_action,
    "package:objd/basic/strait_widget.dart": strait_widget,
    "package:objd/basic/for_list.dart": for_list,
    "package:objd/basic/file.dart": file,
    "package:objd/wrappers/comment.dart": comment,
    "package:objd/basic/widgets.dart": widgets$,
    "package:objd/basic/types/condition.dart": condition$,
    "package:objd/wrappers/data.dart": data$,
    "package:objd/basic/types/location.dart": location$,
    "package:objd/basic/command.dart": command$,
    "package:objd/basic/text.dart": text,
    "package:objd/wrappers/execute.dart": execute,
    "package:objd/wrappers/widgets.dart": widgets$0,
    "package:objd/wrappers/enchant.dart": enchant,
    "package:objd/basic/types/entity.dart": entity$,
    "package:objd/basic/types/entities.dart": entities,
    "package:objd/basic/types/item.dart": item,
    "package:objd/basic/types/items.dart": items,
    "package:objd/wrappers/summon.dart": summon,
    "package:objd/wrappers/effect.dart": effect$,
    "package:objd/basic/text_components.dart": text_components,
    "package:objd/basic/score.dart": score$,
    "package:objd/wrappers/if.dart": $if,
    "package:objd/basic/group.dart": group,
    "package:objd/basic/indexed_file.dart": indexed_file,
    "package:objd/basic/scoreboard.dart": scoreboard,
    "package:objd/basic/extend.dart": extend,
    "package:objd/wrappers/team.dart": team$,
    "package:objd/basic/types/selector.dart": selector,
    "package:objd/basic/tag.dart": tag$,
    "package:objd/basic/types/area.dart": area,
    "package:objd/wrappers/attribute.dart": attribute$,
    "package:objd/wrappers/spreadplayers.dart": spreadplayers,
    "package:objd/wrappers/spawnpoint.dart": spawnpoint,
    "package:objd/wrappers/spectate.dart": spectate,
    "package:objd/wrappers/gamemode.dart": gamemode,
    "package:objd/wrappers/tp.dart": tp,
    "package:objd/wrappers/clear.dart": clear,
    "package:objd/wrappers/advancement.dart": advancement$,
    "package:objd/wrappers/bossbar.dart": bossbar,
    "package:objd/wrappers/trigger.dart": trigger,
    "package:objd/wrappers/particle.dart": particle$,
    "package:objd/wrappers/schedule.dart": schedule,
    "package:objd/wrappers/kill.dart": kill,
    "package:objd/wrappers/teleport.dart": teleport,
    "package:objd/wrappers/tellraw.dart": tellraw,
    "package:objd/wrappers/title.dart": title,
    "package:objd/wrappers/say.dart": say,
    "package:objd/wrappers/clone.dart": clone,
    "package:objd/wrappers/fill.dart": fill,
    "package:objd/wrappers/setblock.dart": setblock,
    "package:objd/wrappers/replaceitem.dart": replaceitem,
    "package:objd/wrappers/give.dart": give,
    "package:objd/basic/predicate.dart": predicate,
    "package:objd/basic/raw_file.dart": raw_file,
    "package:objd/build/buildPack.dart": buildPack,
    "package:objd/build/buildFile.dart": buildFile,
    "package:objd/build/scan.dart": scan,
    "package:objd/utils/version_check.dart": version_check,
    "package:objd/utils/server_version_check.dart": server_version_check,
    "package:objd/utils/storage.dart": storage,
    "package:objd/utils/builder.dart": builder,
    "package:objd/utils/raycast.dart": raycast,
    "package:objd/utils/foreach.dart": foreach,
    "package:objd/utils/repeat.dart": repeat,
    "package:objd/utils/randomScore.dart": randomScore,
    "package:objd/utils/hologram.dart": hologram,
    "package:objd/utils/armorstand.dart": armorstand,
    "package:objd/utils/areaeffectcloud.dart": areaeffectcloud,
    "package:objd/utils/log.dart": log,
    "package:objd/utils/aroundlocation.dart": aroundlocation,
    "package:objd/utils/timer.dart": timer,
    "package:objd/modules/modules.dart": modules,
    "package:objd/modules/click_event.dart": click_event,
    "package:objd/modules/score_timer.dart": score_timer
  }, {
  // Exports:
  return {
    utils__do_loop: do_loop,
    core: core$,
    utils__widgets: widgets,
    utils__player_join: player_join,
    utils__pass_trait: pass_trait,
    basic__widget: widget,
    build__build: build,
    build__project: project,
    build__reloader: reloader,
    build__buildProject: buildProject,
    build__findPack: findPack,
    basic__pack: pack,
    basic__module: module,
    basic__rest_action: rest_action,
    basic__strait_widget: strait_widget,
    basic__for_list: for_list,
    basic__file: file,
    wrappers__comment: comment,
    basic__widgets: widgets$,
    basic__types__condition: condition$,
    wrappers__data: data$,
    basic__types__location: location$,
    basic__command: command$,
    basic__text: text,
    wrappers__execute: execute,
    wrappers__widgets: widgets$0,
    wrappers__enchant: enchant,
    basic__types__entity: entity$,
    basic__types__entities: entities,
    basic__types__item: item,
    basic__types__items: items,
    wrappers__summon: summon,
    wrappers__effect: effect$,
    basic__text_components: text_components,
    basic__score: score$,
    wrappers__if: $if,
    basic__group: group,
    basic__indexed_file: indexed_file,
    basic__scoreboard: scoreboard,
    basic__extend: extend,
    wrappers__team: team$,
    basic__types__selector: selector,
    basic__tag: tag$,
    basic__types__area: area,
    wrappers__attribute: attribute$,
    wrappers__spreadplayers: spreadplayers,
    wrappers__spawnpoint: spawnpoint,
    wrappers__spectate: spectate,
    wrappers__gamemode: gamemode,
    wrappers__tp: tp,
    wrappers__clear: clear,
    wrappers__advancement: advancement$,
    wrappers__bossbar: bossbar,
    wrappers__trigger: trigger,
    wrappers__particle: particle$,
    wrappers__schedule: schedule,
    wrappers__kill: kill,
    wrappers__teleport: teleport,
    wrappers__tellraw: tellraw,
    wrappers__title: title,
    wrappers__say: say,
    wrappers__clone: clone,
    wrappers__fill: fill,
    wrappers__setblock: setblock,
    wrappers__replaceitem: replaceitem,
    wrappers__give: give,
    basic__predicate: predicate,
    basic__raw_file: raw_file,
    build__buildPack: buildPack,
    build__buildFile: buildFile,
    build__scan: scan,
    utils__version_check: version_check,
    utils__server_version_check: server_version_check,
    utils__storage: storage,
    utils__builder: builder,
    utils__raycast: raycast,
    utils__foreach: foreach,
    utils__repeat: repeat,
    utils__randomScore: randomScore,
    utils__hologram: hologram,
    utils__armorstand: armorstand,
    utils__areaeffectcloud: areaeffectcloud,
    utils__log: log,
    utils__aroundlocation: aroundlocation,
    utils__timer: timer,
    modules__modules: modules,
    modules__click_event: click_event,
    modules__score_timer: score_timer
  };
}));

//# sourceMappingURL=command.unsound.ddc.js.map