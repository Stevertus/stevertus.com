define(['dart_sdk', 'packages/objd_gui/gui', 'packages/objd/basic/command', 'packages/objd_gui/data/page', 'packages/objd_gui/data/interactive_slot', 'packages/objd_gui/data/empty', 'packages/objd_gui/data/change_page', 'packages/objd_gui/data/placeholder', 'packages/objd/basic/types/slot', 'packages/objd_gui/data/gui_slot', 'packages/fluix_web/fluix/modal/modal', 'packages/gson/decoder', 'packages/angular_compiler/v1/src/metadata/lifecycle_hooks', 'packages/ng_translate/src/translation_directive', 'packages/http/http', 'packages/http/src/base_client', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/fluix_web/fluix/modal/modal.template', 'packages/angular/src/bootstrap/modules', 'packages/fluix_web/fluix/button/button.template', 'packages/fluix_web/fluix/button/button', 'packages/fluix_web/fluix/input/input.template', 'packages/fluix_web/fluix/input/input', 'packages/angular_forms/src/directives', 'packages/angular_compiler/v1/src/metadata/di_tokens', 'packages/fluix_web/fluix/multi_input/input.template', 'packages/fluix_web/fluix/multi_input/input', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/fluix_web/fluix/list/list.template', 'packages/fluix_web/fluix/list/list', 'packages/fluix_web/fluix/list/list-item/list-item.template', 'packages/fluix_web/fluix/list/list-item/list-item', 'packages/fluix_web/fluix/icon/icon.template', 'packages/fluix_web/fluix/icon/icon', 'packages/objd/custom_block', 'packages/objd/basic/types/block', 'packages/fluix_web/fluix/card/card.template', 'packages/fluix_web/fluix/card/card', 'packages/fluix_web/fluix/checkbox/checkbox.template', 'packages/fluix_web/fluix/checkbox/checkbox', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/constants', 'packages/fluix_web/fluix/spinner/spinner.template', 'packages/fluix_web/fluix/spinner/spinner', 'packages/fluix_web/fluix/dropdown/dropdown.template', 'packages/fluix_web/fluix/dropdown/dropdown', 'packages/objd_crafting/widgets/recipe', 'packages/objd_crafting/widgets/craftingtable', 'packages/angular/src/runtime/proxies', 'packages/fluix_web/fluix/tag/tag.template', 'packages/fluix_web/fluix/tag/tag'], (function load__packages__stevertus__src__components__doc_grid__grid_css_shim(dart_sdk, packages__objd_gui__gui, packages__objd__basic__command, packages__objd_gui__data__page, packages__objd_gui__data__interactive_slot, packages__objd_gui__data__empty, packages__objd_gui__data__change_page, packages__objd_gui__data__placeholder, packages__objd__basic__types__slot, packages__objd_gui__data__gui_slot, packages__fluix_web__fluix__modal__modal, packages__gson__decoder, packages__angular_compiler__v1__src__metadata__lifecycle_hooks, packages__ng_translate__src__translation_directive, packages__http__http, packages__http__src__base_client, packages__angular_router__src__directives__router_outlet_directive, packages__angular__src__core__change_detection__pipe_transform, packages__fluix_web__fluix__modal__modal$46template, packages__angular__src__bootstrap__modules, packages__fluix_web__fluix__button__button$46template, packages__fluix_web__fluix__button__button, packages__fluix_web__fluix__input__input$46template, packages__fluix_web__fluix__input__input, packages__angular_forms__src__directives, packages__angular_compiler__v1__src__metadata__di_tokens, packages__fluix_web__fluix__multi_input__input$46template, packages__fluix_web__fluix__multi_input__input, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__fluix_web__fluix__list__list$46template, packages__fluix_web__fluix__list__list, packages__fluix_web__fluix__list__list_item__list_item$46template, packages__fluix_web__fluix__list__list_item__list_item, packages__fluix_web__fluix__icon__icon$46template, packages__fluix_web__fluix__icon__icon, packages__objd__custom_block, packages__objd__basic__types__block, packages__fluix_web__fluix__card__card$46template, packages__fluix_web__fluix__card__card, packages__fluix_web__fluix__checkbox__checkbox$46template, packages__fluix_web__fluix__checkbox__checkbox, packages__angular_router__src__directives__router_link_directive$46template, packages__angular_router__src__constants, packages__fluix_web__fluix__spinner__spinner$46template, packages__fluix_web__fluix__spinner__spinner, packages__fluix_web__fluix__dropdown__dropdown$46template, packages__fluix_web__fluix__dropdown__dropdown, packages__objd_crafting__widgets__recipe, packages__objd_crafting__widgets__craftingtable, packages__angular__src__runtime__proxies, packages__fluix_web__fluix__tag__tag$46template, packages__fluix_web__fluix__tag__tag) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gui = packages__objd_gui__gui.gui;
  const location = packages__objd__basic__command.basic__types__location;
  const text_components = packages__objd__basic__command.basic__text_components;
  const entity = packages__objd__basic__command.basic__types__entity;
  const widget = packages__objd__basic__command.basic__widget;
  const item = packages__objd__basic__command.basic__types__item;
  const command = packages__objd__basic__command.basic__command;
  const score$ = packages__objd__basic__command.basic__score;
  const selector = packages__objd__basic__command.basic__types__selector;
  const build = packages__objd__basic__command.build__build;
  const project = packages__objd__basic__command.build__project;
  const pack = packages__objd__basic__command.basic__pack;
  const file = packages__objd__basic__command.basic__file;
  const module = packages__objd__basic__command.basic__module;
  const page = packages__objd_gui__data__page.data__page;
  const interactive_slot = packages__objd_gui__data__interactive_slot.data__interactive_slot;
  const empty = packages__objd_gui__data__empty.data__empty;
  const change_page = packages__objd_gui__data__change_page.data__change_page;
  const placeholder = packages__objd_gui__data__placeholder.data__placeholder;
  const slot$ = packages__objd__basic__types__slot.basic__types__slot;
  const gui_slot = packages__objd_gui__data__gui_slot.data__gui_slot;
  const modal_service = packages__fluix_web__fluix__modal__modal.fluix__modal__modal_service;
  const modal = packages__fluix_web__fluix__modal__modal.fluix__modal__modal;
  const gson = packages__gson__decoder.gson;
  const lifecycle_hooks = packages__angular_compiler__v1__src__metadata__lifecycle_hooks.v1__src__metadata__lifecycle_hooks;
  const translation_service = packages__ng_translate__src__translation_directive.src__translation_service;
  const translation_pipe = packages__ng_translate__src__translation_directive.src__translation_pipe;
  const translation_directive = packages__ng_translate__src__translation_directive.src__translation_directive;
  const http = packages__http__http.http;
  const client = packages__http__src__base_client.src__client;
  const response = packages__http__src__base_client.src__response;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const lifecycle = packages__angular_router__src__directives__router_outlet_directive.src__lifecycle;
  const router_state = packages__angular_router__src__directives__router_outlet_directive.src__router__router_state;
  const location$ = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const route_path = packages__angular_router__src__directives__router_outlet_directive.src__route_path;
  const route_definition = packages__angular_router__src__directives__router_outlet_directive.src__route_definition;
  const optimizations = packages__angular__src__core__change_detection__pipe_transform.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__pipe_transform.src__di__errors;
  const check_binding = packages__angular__src__core__change_detection__pipe_transform.src__runtime__check_binding;
  const pipe_transform = packages__angular__src__core__change_detection__pipe_transform.src__core__change_detection__pipe_transform;
  const modal$46template = packages__fluix_web__fluix__modal__modal$46template.fluix__modal__modal$46template;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const embedded_view = packages__angular__src__bootstrap__modules.src__core__linker__views__embedded_view;
  const render_view = packages__angular__src__bootstrap__modules.src__core__linker__views__render_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_view = packages__angular__src__bootstrap__modules.src__core__linker__views__component_view;
  const host_view = packages__angular__src__bootstrap__modules.src__core__linker__views__host_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const dom_sanitization_service = packages__angular__src__bootstrap__modules.src__security__dom_sanitization_service;
  const button$46template = packages__fluix_web__fluix__button__button$46template.fluix__button__button$46template;
  const button = packages__fluix_web__fluix__button__button.fluix__button__button;
  const input$46template = packages__fluix_web__fluix__input__input$46template.fluix__input__input$46template;
  const input = packages__fluix_web__fluix__input__input.fluix__input__input;
  const default_value_accessor = packages__angular_forms__src__directives.src__directives__default_value_accessor;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const number_value_accessor = packages__angular_forms__src__directives.src__directives__number_value_accessor;
  const di_tokens = packages__angular_compiler__v1__src__metadata__di_tokens.v1__src__metadata__di_tokens;
  const input$46template$ = packages__fluix_web__fluix__multi_input__input$46template.fluix__multi_input__input$46template;
  const input$ = packages__fluix_web__fluix__multi_input__input.fluix__multi_input__input;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const list$46template = packages__fluix_web__fluix__list__list$46template.fluix__list__list$46template;
  const list = packages__fluix_web__fluix__list__list.fluix__list__list;
  const list_item$46template = packages__fluix_web__fluix__list__list_item__list_item$46template.fluix__list__list_item__list_item$46template;
  const list_item = packages__fluix_web__fluix__list__list_item__list_item.fluix__list__list_item__list_item;
  const icon$46template = packages__fluix_web__fluix__icon__icon$46template.fluix__icon__icon$46template;
  const icon = packages__fluix_web__fluix__icon__icon.fluix__icon__icon;
  const custom_block = packages__objd__custom_block.custom_block;
  const block = packages__objd__basic__types__block.basic__types__block;
  const card$46template = packages__fluix_web__fluix__card__card$46template.fluix__card__card$46template;
  const card = packages__fluix_web__fluix__card__card.fluix__card__card;
  const checkbox$46template = packages__fluix_web__fluix__checkbox__checkbox$46template.fluix__checkbox__checkbox$46template;
  const checkbox = packages__fluix_web__fluix__checkbox__checkbox.fluix__checkbox__checkbox;
  const router_link_directive$46template = packages__angular_router__src__directives__router_link_directive$46template.src__directives__router_link_directive$46template;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  const spinner$46template = packages__fluix_web__fluix__spinner__spinner$46template.fluix__spinner__spinner$46template;
  const spinner = packages__fluix_web__fluix__spinner__spinner.fluix__spinner__spinner;
  const dropdown$46template = packages__fluix_web__fluix__dropdown__dropdown$46template.fluix__dropdown__dropdown$46template;
  const dropdown = packages__fluix_web__fluix__dropdown__dropdown.fluix__dropdown__dropdown;
  const recipe = packages__objd_crafting__widgets__recipe.widgets__recipe;
  const craftingtable = packages__objd_crafting__widgets__craftingtable.widgets__craftingtable;
  const proxies = packages__angular__src__runtime__proxies.src__runtime__proxies;
  const tag$46template = packages__fluix_web__fluix__tag__tag$46template.fluix__tag__tag$46template;
  const tag = packages__fluix_web__fluix__tag__tag.fluix__tag__tag;
  var sidebar = Object.create(dart.library);
  var gui$ = Object.create(dart.library);
  var item$ = Object.create(dart.library);
  var render$46css$46shim = Object.create(dart.library);
  var projects = Object.create(dart.library);
  var http$ = Object.create(dart.library);
  var document = Object.create(dart.library);
  var article = Object.create(dart.library);
  var text = Object.create(dart.library);
  var text_parts = Object.create(dart.library);
  var slices$ = Object.create(dart.library);
  var grid = Object.create(dart.library);
  var doc = Object.create(dart.library);
  var projects$46css$46shim = Object.create(dart.library);
  var header = Object.create(dart.library);
  var slices = Object.create(dart.library);
  var render = Object.create(dart.library);
  var item$46template = Object.create(dart.library);
  var item$46css$46shim = Object.create(dart.library);
  var blocks$46template = Object.create(dart.library);
  var blocks = Object.create(dart.library);
  var tools$46css$46shim = Object.create(dart.library);
  var blocks$46css$46shim = Object.create(dart.library);
  var tekpack$46component$46css$46shim = Object.create(dart.library);
  var grid$46template = Object.create(dart.library);
  var doc$46template = Object.create(dart.library);
  var doc$46css$46shim = Object.create(dart.library);
  var grid$46css$46shim = Object.create(dart.library);
  var not_found$46template = Object.create(dart.library);
  var not_found = Object.create(dart.library);
  var landing = Object.create(dart.library);
  var section = Object.create(dart.library);
  var card$ = Object.create(dart.library);
  var articles = Object.create(dart.library);
  var render$46template = Object.create(dart.library);
  var article$46template = Object.create(dart.library);
  var slices$46template = Object.create(dart.library);
  var slices$46css$46shim = Object.create(dart.library);
  var article$ = Object.create(dart.library);
  var safe_url = Object.create(dart.library);
  var article$46css$46shim = Object.create(dart.library);
  var contact = Object.create(dart.library);
  var routes = Object.create(dart.library);
  var gui$46template = Object.create(dart.library);
  var gui$46css$46shim = Object.create(dart.library);
  var crafting$46template = Object.create(dart.library);
  var crafting = Object.create(dart.library);
  var crafting$46css$46shim = Object.create(dart.library);
  var tekpack$46template = Object.create(dart.library);
  var tekpack = Object.create(dart.library);
  var projects$46template = Object.create(dart.library);
  var articles$46template = Object.create(dart.library);
  var articles$46css$46shim = Object.create(dart.library);
  var landing$46template = Object.create(dart.library);
  var card$46template$ = Object.create(dart.library);
  var card$46css$46shim = Object.create(dart.library);
  var section$46template = Object.create(dart.library);
  var section$46css$46shim = Object.create(dart.library);
  var landing$46css$46shim = Object.create(dart.library);
  var contact$46template = Object.create(dart.library);
  var contact$46css$46shim = Object.create(dart.library);
  var footer = Object.create(dart.library);
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $map = dartx.map;
  var $join = dartx.join;
  var $remove = dartx.remove;
  var $split = dartx.split;
  var $toList = dartx.toList;
  var $add = dartx.add;
  var $length = dartx.length;
  var $toString = dartx.toString;
  var $firstWhere = dartx.firstWhere;
  var $trim = dartx.trim;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $location = dartx.location;
  var $containsKey = dartx.containsKey;
  var $language = dartx.language;
  var $indexOf = dartx.indexOf;
  var $_set = dartx._set;
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $toLowerCase = dartx.toLowerCase;
  var $replaceAll = dartx.replaceAll;
  var $keys = dartx.keys;
  var $setProperty = dartx.setProperty;
  var $writeText = dartx.writeText;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var GuiPageL = () => (GuiPageL = dart.constFn(dart.legacy(page.GuiPage)))();
  var JSArrayOfGuiPageL = () => (JSArrayOfGuiPageL = dart.constFn(_interceptors.JSArray$(GuiPageL())))();
  var InteractiveL = () => (InteractiveL = dart.constFn(dart.legacy(interactive_slot.Interactive)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(widget.Widget)))();
  var WidgetLToStringL = () => (WidgetLToStringL = dart.constFn(dart.fnType(StringL(), [WidgetL()])))();
  var EmptySlotL = () => (EmptySlotL = dart.constFn(dart.legacy(empty.EmptySlot)))();
  var ChangePageL = () => (ChangePageL = dart.constFn(dart.legacy(change_page.ChangePage)))();
  var PlaceholderL = () => (PlaceholderL = dart.constFn(dart.legacy(placeholder.Placeholder)))();
  var CommandL = () => (CommandL = dart.constFn(dart.legacy(command.Command)))();
  var StringLToCommandL = () => (StringLToCommandL = dart.constFn(dart.fnType(CommandL(), [StringL()])))();
  var GuiSlotL = () => (GuiSlotL = dart.constFn(dart.legacy(gui_slot.GuiSlot)))();
  var JSArrayOfGuiSlotL = () => (JSArrayOfGuiSlotL = dart.constFn(_interceptors.JSArray$(GuiSlotL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var GuiSlotLToboolL = () => (GuiSlotLToboolL = dart.constFn(dart.fnType(boolL(), [GuiSlotL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(module.Module)))();
  var JSArrayOfModuleL = () => (JSArrayOfModuleL = dart.constFn(_interceptors.JSArray$(ModuleL())))();
  var ItemL = () => (ItemL = dart.constFn(dart.legacy(item.Item)))();
  var StreamControllerOfItemL = () => (StreamControllerOfItemL = dart.constFn(async.StreamController$(ItemL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(document.Document)))();
  var JSArrayOfDocumentL = () => (JSArrayOfDocumentL = dart.constFn(_interceptors.JSArray$(DocumentL())))();
  var ListOfDocumentL = () => (ListOfDocumentL = dart.constFn(core.List$(DocumentL())))();
  var ListLOfDocumentL = () => (ListLOfDocumentL = dart.constFn(dart.legacy(ListOfDocumentL())))();
  var ListLOfDocumentLToNullN = () => (ListLOfDocumentLToNullN = dart.constFn(dart.fnType(core.Null, [ListLOfDocumentL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var FutureOrOfMapL = () => (FutureOrOfMapL = dart.constFn(async.FutureOr$(MapL())))();
  var FutureOrLOfMapL = () => (FutureOrLOfMapL = dart.constFn(dart.legacy(FutureOrOfMapL())))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var FullArticleL = () => (FullArticleL = dart.constFn(dart.legacy(article.FullArticle)))();
  var SliceL = () => (SliceL = dart.constFn(dart.legacy(slices$.Slice)))();
  var JSArrayOfSliceL = () => (JSArrayOfSliceL = dart.constFn(_interceptors.JSArray$(SliceL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var TextPartL = () => (TextPartL = dart.constFn(dart.legacy(text_parts.TextPart)))();
  var JSArrayOfTextPartL = () => (JSArrayOfTextPartL = dart.constFn(_interceptors.JSArray$(TextPartL())))();
  var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var DownloadSliceL = () => (DownloadSliceL = dart.constFn(dart.legacy(slices$.DownloadSlice)))();
  var ImageSliceL = () => (ImageSliceL = dart.constFn(dart.legacy(slices$.ImageSlice)))();
  var TextSliceL = () => (TextSliceL = dart.constFn(dart.legacy(text.TextSlice)))();
  var RecommendedSliceL = () => (RecommendedSliceL = dart.constFn(dart.legacy(slices$.RecommendedSlice)))();
  var ListTextPartL = () => (ListTextPartL = dart.constFn(dart.legacy(text_parts.ListTextPart)))();
  var LinkTextPartL = () => (LinkTextPartL = dart.constFn(dart.legacy(text_parts.LinkTextPart)))();
  var ImgTextPartL = () => (ImgTextPartL = dart.constFn(dart.legacy(text_parts.ImgTextPart)))();
  var InternalLinkTextPartL = () => (InternalLinkTextPartL = dart.constFn(dart.legacy(text_parts.InternalLinkTextPart)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EmbeddedViewOfvoid = () => (EmbeddedViewOfvoid = dart.constFn(embedded_view.EmbeddedView$(dart.void)))();
  var EmbeddedViewLOfvoid = () => (EmbeddedViewLOfvoid = dart.constFn(dart.legacy(EmbeddedViewOfvoid())))();
  var RenderViewL = () => (RenderViewL = dart.constFn(dart.legacy(render_view.RenderView)))();
  var RenderViewLAndintLToEmbeddedViewLOfvoid = () => (RenderViewLAndintLToEmbeddedViewLOfvoid = dart.constFn(dart.fnType(EmbeddedViewLOfvoid(), [RenderViewL(), intL()])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var TranslationPipeL = () => (TranslationPipeL = dart.constFn(dart.legacy(translation_pipe.TranslationPipe)))();
  var TranslationServiceL = () => (TranslationServiceL = dart.constFn(dart.legacy(translation_service.TranslationService)))();
  var ModalServiceL = () => (ModalServiceL = dart.constFn(dart.legacy(modal_service.ModalService)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ControlValueAccessorL = () => (ControlValueAccessorL = dart.constFn(dart.legacy(control_value_accessor.ControlValueAccessor)))();
  var JSArrayOfControlValueAccessorL = () => (JSArrayOfControlValueAccessorL = dart.constFn(_interceptors.JSArray$(ControlValueAccessorL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var MultiTokenOfControlValueAccessorL = () => (MultiTokenOfControlValueAccessorL = dart.constFn(di_tokens.MultiToken$(ControlValueAccessorL())))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var ItemSelectorComponentL = () => (ItemSelectorComponentL = dart.constFn(dart.legacy(item$.ItemSelectorComponent)))();
  var ComponentFactoryOfItemSelectorComponentL = () => (ComponentFactoryOfItemSelectorComponentL = dart.constFn(component_factory.ComponentFactory$(ItemSelectorComponentL())))();
  var HostViewOfItemSelectorComponentL = () => (HostViewOfItemSelectorComponentL = dart.constFn(host_view.HostView$(ItemSelectorComponentL())))();
  var HostViewLOfItemSelectorComponentL = () => (HostViewLOfItemSelectorComponentL = dart.constFn(dart.legacy(HostViewOfItemSelectorComponentL())))();
  var VoidToHostViewLOfItemSelectorComponentL = () => (VoidToHostViewLOfItemSelectorComponentL = dart.constFn(dart.fnType(HostViewLOfItemSelectorComponentL(), [])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var CustomBlockL = () => (CustomBlockL = dart.constFn(dart.legacy(custom_block.CustomBlock)))();
  var JSArrayOfCustomBlockL = () => (JSArrayOfCustomBlockL = dart.constFn(_interceptors.JSArray$(CustomBlockL())))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var BlocksToolPageL = () => (BlocksToolPageL = dart.constFn(dart.legacy(blocks.BlocksToolPage)))();
  var ComponentFactoryOfBlocksToolPageL = () => (ComponentFactoryOfBlocksToolPageL = dart.constFn(component_factory.ComponentFactory$(BlocksToolPageL())))();
  var HostViewOfBlocksToolPageL = () => (HostViewOfBlocksToolPageL = dart.constFn(host_view.HostView$(BlocksToolPageL())))();
  var HostViewLOfBlocksToolPageL = () => (HostViewLOfBlocksToolPageL = dart.constFn(dart.legacy(HostViewOfBlocksToolPageL())))();
  var VoidToHostViewLOfBlocksToolPageL = () => (VoidToHostViewLOfBlocksToolPageL = dart.constFn(dart.fnType(HostViewLOfBlocksToolPageL(), [])))();
  var DocumentGridComponentL = () => (DocumentGridComponentL = dart.constFn(dart.legacy(grid.DocumentGridComponent)))();
  var RouterL = () => (RouterL = dart.constFn(dart.legacy(router.Router)))();
  var VoidToDocumentGridComponentL = () => (VoidToDocumentGridComponentL = dart.constFn(dart.fnType(DocumentGridComponentL(), [])))();
  var ComponentFactoryOfDocumentGridComponentL = () => (ComponentFactoryOfDocumentGridComponentL = dart.constFn(component_factory.ComponentFactory$(DocumentGridComponentL())))();
  var HostViewOfDocumentGridComponentL = () => (HostViewOfDocumentGridComponentL = dart.constFn(host_view.HostView$(DocumentGridComponentL())))();
  var HostViewLOfDocumentGridComponentL = () => (HostViewLOfDocumentGridComponentL = dart.constFn(dart.legacy(HostViewOfDocumentGridComponentL())))();
  var VoidToHostViewLOfDocumentGridComponentL = () => (VoidToHostViewLOfDocumentGridComponentL = dart.constFn(dart.fnType(HostViewLOfDocumentGridComponentL(), [])))();
  var DocumentPreviewComponentL = () => (DocumentPreviewComponentL = dart.constFn(dart.legacy(doc.DocumentPreviewComponent)))();
  var ComponentFactoryOfDocumentPreviewComponentL = () => (ComponentFactoryOfDocumentPreviewComponentL = dart.constFn(component_factory.ComponentFactory$(DocumentPreviewComponentL())))();
  var HostViewOfDocumentPreviewComponentL = () => (HostViewOfDocumentPreviewComponentL = dart.constFn(host_view.HostView$(DocumentPreviewComponentL())))();
  var HostViewLOfDocumentPreviewComponentL = () => (HostViewLOfDocumentPreviewComponentL = dart.constFn(dart.legacy(HostViewOfDocumentPreviewComponentL())))();
  var VoidToHostViewLOfDocumentPreviewComponentL = () => (VoidToHostViewLOfDocumentPreviewComponentL = dart.constFn(dart.fnType(HostViewLOfDocumentPreviewComponentL(), [])))();
  var NotFoundComponentL = () => (NotFoundComponentL = dart.constFn(dart.legacy(not_found.NotFoundComponent)))();
  var ComponentFactoryOfNotFoundComponentL = () => (ComponentFactoryOfNotFoundComponentL = dart.constFn(component_factory.ComponentFactory$(NotFoundComponentL())))();
  var HostViewOfNotFoundComponentL = () => (HostViewOfNotFoundComponentL = dart.constFn(host_view.HostView$(NotFoundComponentL())))();
  var HostViewLOfNotFoundComponentL = () => (HostViewLOfNotFoundComponentL = dart.constFn(dart.legacy(HostViewOfNotFoundComponentL())))();
  var VoidToHostViewLOfNotFoundComponentL = () => (VoidToHostViewLOfNotFoundComponentL = dart.constFn(dart.fnType(HostViewLOfNotFoundComponentL(), [])))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  var StringLTovoid = () => (StringLTovoid = dart.constFn(dart.fnType(dart.void, [StringL()])))();
  var _ViewTextRenderComponent1L = () => (_ViewTextRenderComponent1L = dart.constFn(dart.legacy(render$46template._ViewTextRenderComponent1)))();
  var AnchorElementL = () => (AnchorElementL = dart.constFn(dart.legacy(html.AnchorElement)))();
  var RouterLinkL = () => (RouterLinkL = dart.constFn(dart.legacy(router_link_directive.RouterLink)))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location$.Location)))();
  var VoidToRouterLinkL = () => (VoidToRouterLinkL = dart.constFn(dart.fnType(RouterLinkL(), [])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var TextRenderComponentL = () => (TextRenderComponentL = dart.constFn(dart.legacy(render.TextRenderComponent)))();
  var ComponentFactoryOfTextRenderComponentL = () => (ComponentFactoryOfTextRenderComponentL = dart.constFn(component_factory.ComponentFactory$(TextRenderComponentL())))();
  var HostViewOfTextRenderComponentL = () => (HostViewOfTextRenderComponentL = dart.constFn(host_view.HostView$(TextRenderComponentL())))();
  var HostViewLOfTextRenderComponentL = () => (HostViewLOfTextRenderComponentL = dart.constFn(dart.legacy(HostViewOfTextRenderComponentL())))();
  var VoidToHostViewLOfTextRenderComponentL = () => (VoidToHostViewLOfTextRenderComponentL = dart.constFn(dart.fnType(HostViewLOfTextRenderComponentL(), [])))();
  var IFrameElementL = () => (IFrameElementL = dart.constFn(dart.legacy(html.IFrameElement)))();
  var ArticlePageL = () => (ArticlePageL = dart.constFn(dart.legacy(article$.ArticlePage)))();
  var DomSanitizationServiceL = () => (DomSanitizationServiceL = dart.constFn(dart.legacy(dom_sanitization_service.DomSanitizationService)))();
  var VoidToArticlePageL = () => (VoidToArticlePageL = dart.constFn(dart.fnType(ArticlePageL(), [])))();
  var ComponentFactoryOfArticlePageL = () => (ComponentFactoryOfArticlePageL = dart.constFn(component_factory.ComponentFactory$(ArticlePageL())))();
  var HostViewOfArticlePageL = () => (HostViewOfArticlePageL = dart.constFn(host_view.HostView$(ArticlePageL())))();
  var HostViewLOfArticlePageL = () => (HostViewLOfArticlePageL = dart.constFn(dart.legacy(HostViewOfArticlePageL())))();
  var VoidToHostViewLOfArticlePageL = () => (VoidToHostViewLOfArticlePageL = dart.constFn(dart.fnType(HostViewLOfArticlePageL(), [])))();
  var _ViewSlicesComponent1L = () => (_ViewSlicesComponent1L = dart.constFn(dart.legacy(slices$46template._ViewSlicesComponent1)))();
  var SlicesComponentL = () => (SlicesComponentL = dart.constFn(dart.legacy(slices.SlicesComponent)))();
  var ComponentFactoryOfSlicesComponentL = () => (ComponentFactoryOfSlicesComponentL = dart.constFn(component_factory.ComponentFactory$(SlicesComponentL())))();
  var HostViewOfSlicesComponentL = () => (HostViewOfSlicesComponentL = dart.constFn(host_view.HostView$(SlicesComponentL())))();
  var HostViewLOfSlicesComponentL = () => (HostViewLOfSlicesComponentL = dart.constFn(dart.legacy(HostViewOfSlicesComponentL())))();
  var VoidToHostViewLOfSlicesComponentL = () => (VoidToHostViewLOfSlicesComponentL = dart.constFn(dart.fnType(HostViewLOfSlicesComponentL(), [])))();
  var ResponseL = () => (ResponseL = dart.constFn(dart.legacy(response.Response)))();
  var ResponseLToNullN = () => (ResponseLToNullN = dart.constFn(dart.fnType(core.Null, [ResponseL()])))();
  var TekPackPageL = () => (TekPackPageL = dart.constFn(dart.legacy(tekpack.TekPackPage)))();
  var ComponentFactoryOfTekPackPageL = () => (ComponentFactoryOfTekPackPageL = dart.constFn(component_factory.ComponentFactory$(TekPackPageL())))();
  var ComponentFactoryLOfTekPackPageL = () => (ComponentFactoryLOfTekPackPageL = dart.constFn(dart.legacy(ComponentFactoryOfTekPackPageL())))();
  var FutureOfComponentFactoryLOfTekPackPageL = () => (FutureOfComponentFactoryLOfTekPackPageL = dart.constFn(async.Future$(ComponentFactoryLOfTekPackPageL())))();
  var FutureLOfComponentFactoryLOfTekPackPageL = () => (FutureLOfComponentFactoryLOfTekPackPageL = dart.constFn(dart.legacy(FutureOfComponentFactoryLOfTekPackPageL())))();
  var VoidToFutureLOfComponentFactoryLOfTekPackPageL = () => (VoidToFutureLOfComponentFactoryLOfTekPackPageL = dart.constFn(dart.fnType(FutureLOfComponentFactoryLOfTekPackPageL(), [])))();
  var CraftingToolPageL = () => (CraftingToolPageL = dart.constFn(dart.legacy(crafting.CraftingToolPage)))();
  var ComponentFactoryOfCraftingToolPageL = () => (ComponentFactoryOfCraftingToolPageL = dart.constFn(component_factory.ComponentFactory$(CraftingToolPageL())))();
  var ComponentFactoryLOfCraftingToolPageL = () => (ComponentFactoryLOfCraftingToolPageL = dart.constFn(dart.legacy(ComponentFactoryOfCraftingToolPageL())))();
  var FutureOfComponentFactoryLOfCraftingToolPageL = () => (FutureOfComponentFactoryLOfCraftingToolPageL = dart.constFn(async.Future$(ComponentFactoryLOfCraftingToolPageL())))();
  var FutureLOfComponentFactoryLOfCraftingToolPageL = () => (FutureLOfComponentFactoryLOfCraftingToolPageL = dart.constFn(dart.legacy(FutureOfComponentFactoryLOfCraftingToolPageL())))();
  var VoidToFutureLOfComponentFactoryLOfCraftingToolPageL = () => (VoidToFutureLOfComponentFactoryLOfCraftingToolPageL = dart.constFn(dart.fnType(FutureLOfComponentFactoryLOfCraftingToolPageL(), [])))();
  var GuiToolPageL = () => (GuiToolPageL = dart.constFn(dart.legacy(gui$.GuiToolPage)))();
  var ComponentFactoryOfGuiToolPageL = () => (ComponentFactoryOfGuiToolPageL = dart.constFn(component_factory.ComponentFactory$(GuiToolPageL())))();
  var ComponentFactoryLOfGuiToolPageL = () => (ComponentFactoryLOfGuiToolPageL = dart.constFn(dart.legacy(ComponentFactoryOfGuiToolPageL())))();
  var FutureOfComponentFactoryLOfGuiToolPageL = () => (FutureOfComponentFactoryLOfGuiToolPageL = dart.constFn(async.Future$(ComponentFactoryLOfGuiToolPageL())))();
  var FutureLOfComponentFactoryLOfGuiToolPageL = () => (FutureLOfComponentFactoryLOfGuiToolPageL = dart.constFn(dart.legacy(FutureOfComponentFactoryLOfGuiToolPageL())))();
  var VoidToFutureLOfComponentFactoryLOfGuiToolPageL = () => (VoidToFutureLOfComponentFactoryLOfGuiToolPageL = dart.constFn(dart.fnType(FutureLOfComponentFactoryLOfGuiToolPageL(), [])))();
  var ComponentFactoryLOfBlocksToolPageL = () => (ComponentFactoryLOfBlocksToolPageL = dart.constFn(dart.legacy(ComponentFactoryOfBlocksToolPageL())))();
  var FutureOfComponentFactoryLOfBlocksToolPageL = () => (FutureOfComponentFactoryLOfBlocksToolPageL = dart.constFn(async.Future$(ComponentFactoryLOfBlocksToolPageL())))();
  var FutureLOfComponentFactoryLOfBlocksToolPageL = () => (FutureLOfComponentFactoryLOfBlocksToolPageL = dart.constFn(dart.legacy(FutureOfComponentFactoryLOfBlocksToolPageL())))();
  var VoidToFutureLOfComponentFactoryLOfBlocksToolPageL = () => (VoidToFutureLOfComponentFactoryLOfBlocksToolPageL = dart.constFn(dart.fnType(FutureLOfComponentFactoryLOfBlocksToolPageL(), [])))();
  var RouteDefinitionL = () => (RouteDefinitionL = dart.constFn(dart.legacy(route_definition.RouteDefinition)))();
  var JSArrayOfRouteDefinitionL = () => (JSArrayOfRouteDefinitionL = dart.constFn(_interceptors.JSArray$(RouteDefinitionL())))();
  var InputElementL = () => (InputElementL = dart.constFn(dart.legacy(html.InputElement)))();
  var TextAreaElementL = () => (TextAreaElementL = dart.constFn(dart.legacy(html.TextAreaElement)))();
  var HostViewOfGuiToolPageL = () => (HostViewOfGuiToolPageL = dart.constFn(host_view.HostView$(GuiToolPageL())))();
  var HostViewLOfGuiToolPageL = () => (HostViewLOfGuiToolPageL = dart.constFn(dart.legacy(HostViewOfGuiToolPageL())))();
  var VoidToHostViewLOfGuiToolPageL = () => (VoidToHostViewLOfGuiToolPageL = dart.constFn(dart.fnType(HostViewLOfGuiToolPageL(), [])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var intLTointL = () => (intLTointL = dart.constFn(dart.fnType(intL(), [intL()])))();
  var RecipeL = () => (RecipeL = dart.constFn(dart.legacy(recipe.Recipe)))();
  var JSArrayOfRecipeL = () => (JSArrayOfRecipeL = dart.constFn(_interceptors.JSArray$(RecipeL())))();
  var IdentityMapOfintL$ItemL = () => (IdentityMapOfintL$ItemL = dart.constFn(_js_helper.IdentityMap$(intL(), ItemL())))();
  var _ViewCraftingToolPage4L = () => (_ViewCraftingToolPage4L = dart.constFn(dart.legacy(crafting$46template._ViewCraftingToolPage4)))();
  var HostViewOfCraftingToolPageL = () => (HostViewOfCraftingToolPageL = dart.constFn(host_view.HostView$(CraftingToolPageL())))();
  var HostViewLOfCraftingToolPageL = () => (HostViewLOfCraftingToolPageL = dart.constFn(dart.legacy(HostViewOfCraftingToolPageL())))();
  var VoidToHostViewLOfCraftingToolPageL = () => (VoidToHostViewLOfCraftingToolPageL = dart.constFn(dart.fnType(HostViewLOfCraftingToolPageL(), [])))();
  var SafeURLPipeL = () => (SafeURLPipeL = dart.constFn(dart.legacy(safe_url.SafeURLPipe)))();
  var TekPackItemL = () => (TekPackItemL = dart.constFn(dart.legacy(tekpack.TekPackItem)))();
  var JSArrayOfTekPackItemL = () => (JSArrayOfTekPackItemL = dart.constFn(_interceptors.JSArray$(TekPackItemL())))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var ViewTekPackPage0L = () => (ViewTekPackPage0L = dart.constFn(dart.legacy(tekpack$46template.ViewTekPackPage0)))();
  var _ViewTekPackPage4L = () => (_ViewTekPackPage4L = dart.constFn(dart.legacy(tekpack$46template._ViewTekPackPage4)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var HostViewOfTekPackPageL = () => (HostViewOfTekPackPageL = dart.constFn(host_view.HostView$(TekPackPageL())))();
  var HostViewLOfTekPackPageL = () => (HostViewLOfTekPackPageL = dart.constFn(dart.legacy(HostViewOfTekPackPageL())))();
  var VoidToHostViewLOfTekPackPageL = () => (VoidToHostViewLOfTekPackPageL = dart.constFn(dart.fnType(HostViewLOfTekPackPageL(), [])))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var ProjectsPageL = () => (ProjectsPageL = dart.constFn(dart.legacy(projects.ProjectsPage)))();
  var VoidToProjectsPageL = () => (VoidToProjectsPageL = dart.constFn(dart.fnType(ProjectsPageL(), [])))();
  var ComponentFactoryOfProjectsPageL = () => (ComponentFactoryOfProjectsPageL = dart.constFn(component_factory.ComponentFactory$(ProjectsPageL())))();
  var HostViewOfProjectsPageL = () => (HostViewOfProjectsPageL = dart.constFn(host_view.HostView$(ProjectsPageL())))();
  var HostViewLOfProjectsPageL = () => (HostViewLOfProjectsPageL = dart.constFn(dart.legacy(HostViewOfProjectsPageL())))();
  var VoidToHostViewLOfProjectsPageL = () => (VoidToHostViewLOfProjectsPageL = dart.constFn(dart.fnType(HostViewLOfProjectsPageL(), [])))();
  var ArticlesPageL = () => (ArticlesPageL = dart.constFn(dart.legacy(articles.ArticlesPage)))();
  var VoidToArticlesPageL = () => (VoidToArticlesPageL = dart.constFn(dart.fnType(ArticlesPageL(), [])))();
  var ComponentFactoryOfArticlesPageL = () => (ComponentFactoryOfArticlesPageL = dart.constFn(component_factory.ComponentFactory$(ArticlesPageL())))();
  var HostViewOfArticlesPageL = () => (HostViewOfArticlesPageL = dart.constFn(host_view.HostView$(ArticlesPageL())))();
  var HostViewLOfArticlesPageL = () => (HostViewLOfArticlesPageL = dart.constFn(dart.legacy(HostViewOfArticlesPageL())))();
  var VoidToHostViewLOfArticlesPageL = () => (VoidToHostViewLOfArticlesPageL = dart.constFn(dart.fnType(HostViewLOfArticlesPageL(), [])))();
  var LandingPageL = () => (LandingPageL = dart.constFn(dart.legacy(landing.LandingPage)))();
  var ComponentFactoryOfLandingPageL = () => (ComponentFactoryOfLandingPageL = dart.constFn(component_factory.ComponentFactory$(LandingPageL())))();
  var HostViewOfLandingPageL = () => (HostViewOfLandingPageL = dart.constFn(host_view.HostView$(LandingPageL())))();
  var HostViewLOfLandingPageL = () => (HostViewLOfLandingPageL = dart.constFn(dart.legacy(HostViewOfLandingPageL())))();
  var VoidToHostViewLOfLandingPageL = () => (VoidToHostViewLOfLandingPageL = dart.constFn(dart.fnType(HostViewLOfLandingPageL(), [])))();
  var LandingCardL = () => (LandingCardL = dart.constFn(dart.legacy(card$.LandingCard)))();
  var ComponentFactoryOfLandingCardL = () => (ComponentFactoryOfLandingCardL = dart.constFn(component_factory.ComponentFactory$(LandingCardL())))();
  var HostViewOfLandingCardL = () => (HostViewOfLandingCardL = dart.constFn(host_view.HostView$(LandingCardL())))();
  var HostViewLOfLandingCardL = () => (HostViewLOfLandingCardL = dart.constFn(dart.legacy(HostViewOfLandingCardL())))();
  var VoidToHostViewLOfLandingCardL = () => (VoidToHostViewLOfLandingCardL = dart.constFn(dart.fnType(HostViewLOfLandingCardL(), [])))();
  var LandingSectionL = () => (LandingSectionL = dart.constFn(dart.legacy(section.LandingSection)))();
  var ComponentFactoryOfLandingSectionL = () => (ComponentFactoryOfLandingSectionL = dart.constFn(component_factory.ComponentFactory$(LandingSectionL())))();
  var HostViewOfLandingSectionL = () => (HostViewOfLandingSectionL = dart.constFn(host_view.HostView$(LandingSectionL())))();
  var HostViewLOfLandingSectionL = () => (HostViewLOfLandingSectionL = dart.constFn(dart.legacy(HostViewOfLandingSectionL())))();
  var VoidToHostViewLOfLandingSectionL = () => (VoidToHostViewLOfLandingSectionL = dart.constFn(dart.fnType(HostViewLOfLandingSectionL(), [])))();
  var ContactPageL = () => (ContactPageL = dart.constFn(dart.legacy(contact.ContactPage)))();
  var ComponentFactoryOfContactPageL = () => (ComponentFactoryOfContactPageL = dart.constFn(component_factory.ComponentFactory$(ContactPageL())))();
  var HostViewOfContactPageL = () => (HostViewOfContactPageL = dart.constFn(host_view.HostView$(ContactPageL())))();
  var HostViewLOfContactPageL = () => (HostViewLOfContactPageL = dart.constFn(dart.legacy(HostViewOfContactPageL())))();
  var VoidToHostViewLOfContactPageL = () => (VoidToHostViewLOfContactPageL = dart.constFn(dart.fnType(HostViewLOfContactPageL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:stevertus/src/components/sidebar/sidebar.dart";
  var L23 = "package:stevertus/src/pages/landing/card/card.dart";
  var L22 = "package:stevertus/src/pages/landing/section/section.dart";
  var L25 = "package:stevertus/src/components/render_text/render.template.dart";
  var L16 = "package:stevertus/src/pages/tools/blocks/blocks.template.dart";
  var L13 = "package:stevertus/src/components/render_text/render.dart";
  var L12 = "package:stevertus/src/pages/article/slices/slices.dart";
  var L32 = "package:stevertus/src/pages/tools/gui/gui.template.dart";
  var L41 = "package:stevertus/src/pages/landing/section/section.template.dart";
  var L38 = "package:stevertus/src/pages/articles/articles.template.dart";
  var L28 = "package:stevertus/src/pages/article/slices/slices.template.dart";
  var L42 = "package:stevertus/src/pages/contact/contact.template.dart";
  var L37 = "package:stevertus/src/pages/projects/projects.template.dart";
  var L39 = "package:stevertus/src/pages/landing/landing.template.dart";
  var L3 = "package:stevertus/src/pages/projects/projects.dart";
  var L1 = "package:stevertus/src/pages/tools/gui/gui.dart";
  var L9 = "package:stevertus/src/components/doc_grid/grid.dart";
  var L30 = "package:stevertus/src/pages/contact/contact.dart";
  var L35 = "package:stevertus/src/pages/tekpack/tekpack.dart";
  var L10 = "package:stevertus/src/components/doc_preview/doc.dart";
  var L36 = "package:stevertus/src/pages/tekpack/tekpack.template.dart";
  var L6 = "package:stevertus/src/data/slices.dart";
  var L2 = "package:stevertus/src/components/objd/item_selector/item.dart";
  var L34 = "package:stevertus/src/pages/tools/crafting/crafting.template.dart";
  var L8 = "package:stevertus/src/data/text_parts.dart";
  var L33 = "package:stevertus/src/pages/tools/crafting/crafting.dart";
  var L24 = "package:stevertus/src/pages/articles/articles.dart";
  var L27 = "package:stevertus/src/pages/article/article.template.dart";
  var L5 = "package:stevertus/src/data/article.dart";
  var L26 = "package:stevertus/src/pages/article/article.dart";
  var L18 = "package:stevertus/src/components/doc_preview/doc.template.dart";
  var L17 = "package:stevertus/src/components/doc_grid/grid.template.dart";
  var L21 = "package:stevertus/src/pages/landing/landing.dart";
  var L14 = "package:stevertus/src/components/objd/item_selector/item.template.dart";
  var L7 = "package:stevertus/src/data/text.dart";
  var L19 = "package:stevertus/src/pages/not_found.dart";
  var L11 = "package:stevertus/src/components/header/header.dart";
  var L40 = "package:stevertus/src/pages/landing/card/card.template.dart";
  var L31 = "package:stevertus/src/routes.dart";
  var L15 = "package:stevertus/src/pages/tools/blocks/blocks.dart";
  var L4 = "package:stevertus/src/data/document.dart";
  var L43 = "package:stevertus/src/components/footer/footer.dart";
  var L20 = "package:stevertus/src/pages/not_found.template.dart";
  var L29 = "package:stevertus/src/services/safe_url.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name]: "ChangePageMode.next",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name]: "ChangePageMode.prev",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: change_page.ChangePageMode.prototype,
        [_name]: "ChangePageMode.exact",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([], SliceL());
    },
    get C4() {
      return C4 = dart.fn(item$46template.viewFactory_ItemSelectorComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C5() {
      return C5 = dart.fn(item$46template.viewFactory_ItemSelectorComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(item$46template.viewFactory_ItemSelectorComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(item$46template.viewFactory_ItemSelectorComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(item$46template.viewFactory_ItemSelectorComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(item$46template.ViewItemSelectorComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C10() {
      return C10 = dart.constList([], dart.dynamic);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: MultiTokenOfControlValueAccessorL().prototype,
        [OpaqueToken__uniqueName]: "NgValueAccessor"
      });
    },
    get C12() {
      return C12 = dart.fn(item$46template.viewFactory_ItemSelectorComponentHost0, VoidToHostViewLOfItemSelectorComponentL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ComponentFactoryOfItemSelectorComponentL().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "item-selector"
      });
    },
    get C14() {
      return C14 = dart.fn(blocks$46template.viewFactory_BlocksToolPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C15() {
      return C15 = dart.fn(blocks$46template.viewFactory_BlocksToolPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C16() {
      return C16 = dart.fn(blocks$46template.viewFactory_BlocksToolPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C17() {
      return C17 = dart.fn(blocks$46template.viewFactory_BlocksToolPage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C18() {
      return C18 = dart.fn(blocks$46template.ViewBlocksToolPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C19() {
      return C19 = dart.fn(blocks$46template.viewFactory_BlocksToolPageHost0, VoidToHostViewLOfBlocksToolPageL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ComponentFactoryOfBlocksToolPageL().prototype,
        [ComponentFactory__viewFactory]: C19 || CT.C19,
        [ComponentFactory_selector]: "blocks_tool"
      });
    },
    get C21() {
      return C21 = dart.fn(grid$46template.viewFactory_DocumentGridComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C22() {
      return C22 = dart.fn(grid$46template.ViewDocumentGridComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C23() {
      return C23 = dart.fn(grid$46template.viewFactory_DocumentGridComponentHost0, VoidToHostViewLOfDocumentGridComponentL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ComponentFactoryOfDocumentGridComponentL().prototype,
        [ComponentFactory__viewFactory]: C23 || CT.C23,
        [ComponentFactory_selector]: "doc-grid"
      });
    },
    get C25() {
      return C25 = dart.fn(doc$46template.viewFactory_DocumentPreviewComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C26() {
      return C26 = dart.fn(doc$46template.ViewDocumentPreviewComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C27() {
      return C27 = dart.fn(doc$46template.viewFactory_DocumentPreviewComponentHost0, VoidToHostViewLOfDocumentPreviewComponentL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ComponentFactoryOfDocumentPreviewComponentL().prototype,
        [ComponentFactory__viewFactory]: C27 || CT.C27,
        [ComponentFactory_selector]: "doc-preview"
      });
    },
    get C29() {
      return C29 = dart.fn(not_found$46template.ViewNotFoundComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C30() {
      return C30 = dart.fn(not_found$46template.viewFactory_NotFoundComponentHost0, VoidToHostViewLOfNotFoundComponentL());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ComponentFactoryOfNotFoundComponentL().prototype,
        [ComponentFactory__viewFactory]: C30 || CT.C30,
        [ComponentFactory_selector]: "my-not-found"
      });
    },
    get C32() {
      return C32 = dart.fn(render$46template.viewFactory_TextRenderComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C33() {
      return C33 = dart.fn(render$46template.ViewTextRenderComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C34() {
      return C34 = dart.fn(render$46template.viewFactory_TextRenderComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C35() {
      return C35 = dart.fn(render$46template.viewFactory_TextRenderComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C36() {
      return C36 = dart.fn(render$46template.viewFactory_TextRenderComponent9, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C37() {
      return C37 = dart.fn(render$46template.viewFactory_TextRenderComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C38() {
      return C38 = dart.fn(render$46template.viewFactory_TextRenderComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C39() {
      return C39 = dart.fn(render$46template.viewFactory_TextRenderComponent6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C40() {
      return C40 = dart.fn(render$46template.viewFactory_TextRenderComponent7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C41() {
      return C41 = dart.fn(render$46template.viewFactory_TextRenderComponent8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C42() {
      return C42 = dart.fn(render$46template.viewFactory_TextRenderComponent10, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C43() {
      return C43 = dart.fn(render$46template.viewFactory_TextRenderComponent11, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C44() {
      return C44 = dart.fn(render$46template.viewFactory_TextRenderComponent12, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C45() {
      return C45 = dart.fn(render$46template.viewFactory_TextRenderComponent13, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C46() {
      return C46 = dart.fn(render$46template.viewFactory_TextRenderComponent14, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C47() {
      return C47 = dart.fn(render$46template.viewFactory_TextRenderComponent15, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C48() {
      return C48 = dart.fn(render$46template.viewFactory_TextRenderComponent16, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C49() {
      return C49 = dart.fn(render$46template.viewFactory_TextRenderComponent17, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C50() {
      return C50 = dart.fn(render$46template.viewFactory_TextRenderComponent18, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C51() {
      return C51 = dart.fn(render$46template.viewFactory_TextRenderComponent19, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C52() {
      return C52 = dart.fn(render$46template.viewFactory_TextRenderComponent20, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C53() {
      return C53 = dart.fn(render$46template.viewFactory_TextRenderComponentHost0, VoidToHostViewLOfTextRenderComponentL());
    },
    get C54() {
      return C54 = dart.const({
        __proto__: ComponentFactoryOfTextRenderComponentL().prototype,
        [ComponentFactory__viewFactory]: C53 || CT.C53,
        [ComponentFactory_selector]: "render-text"
      });
    },
    get C55() {
      return C55 = dart.fn(article$46template.viewFactory_ArticlePage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C56() {
      return C56 = dart.fn(article$46template.viewFactory_ArticlePage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C57() {
      return C57 = dart.fn(article$46template.ViewArticlePage0._debugClearComponentStyles, VoidTovoid());
    },
    get C58() {
      return C58 = dart.fn(article$46template.viewFactory_ArticlePage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C59() {
      return C59 = dart.fn(article$46template.viewFactory_ArticlePage6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C60() {
      return C60 = dart.fn(article$46template.viewFactory_ArticlePage7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C61() {
      return C61 = dart.fn(article$46template.viewFactory_ArticlePage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C62() {
      return C62 = dart.fn(article$46template.viewFactory_ArticlePage5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C63() {
      return C63 = dart.fn(article$46template.viewFactory_ArticlePageHost0, VoidToHostViewLOfArticlePageL());
    },
    get C64() {
      return C64 = dart.const({
        __proto__: ComponentFactoryOfArticlePageL().prototype,
        [ComponentFactory__viewFactory]: C63 || CT.C63,
        [ComponentFactory_selector]: "article"
      });
    },
    get C65() {
      return C65 = dart.fn(slices$46template.viewFactory_SlicesComponent1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C66() {
      return C66 = dart.fn(slices$46template.ViewSlicesComponent0._debugClearComponentStyles, VoidTovoid());
    },
    get C67() {
      return C67 = dart.fn(slices$46template.viewFactory_SlicesComponent2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C68() {
      return C68 = dart.fn(slices$46template.viewFactory_SlicesComponent3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C69() {
      return C69 = dart.fn(slices$46template.viewFactory_SlicesComponent4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C70() {
      return C70 = dart.fn(slices$46template.viewFactory_SlicesComponent5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C71() {
      return C71 = dart.fn(slices$46template.viewFactory_SlicesComponentHost0, VoidToHostViewLOfSlicesComponentL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ComponentFactoryOfSlicesComponentL().prototype,
        [ComponentFactory__viewFactory]: C71 || CT.C71,
        [ComponentFactory_selector]: "article-slices"
      });
    },
    get C73() {
      return C73 = dart.fn(gui$46template.viewFactory_GuiToolPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C74() {
      return C74 = dart.fn(gui$46template.viewFactory_GuiToolPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C75() {
      return C75 = dart.fn(gui$46template.viewFactory_GuiToolPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C76() {
      return C76 = dart.fn(gui$46template.viewFactory_GuiToolPage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C77() {
      return C77 = dart.fn(gui$46template.viewFactory_GuiToolPage5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C78() {
      return C78 = dart.fn(gui$46template.viewFactory_GuiToolPage6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C79() {
      return C79 = dart.fn(gui$46template.viewFactory_GuiToolPage7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C80() {
      return C80 = dart.fn(gui$46template.viewFactory_GuiToolPage8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C81() {
      return C81 = dart.fn(gui$46template.viewFactory_GuiToolPage9, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C82() {
      return C82 = dart.fn(gui$46template.viewFactory_GuiToolPage10, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C83() {
      return C83 = dart.fn(gui$46template.viewFactory_GuiToolPage11, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C84() {
      return C84 = dart.fn(gui$46template.viewFactory_GuiToolPage12, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C85() {
      return C85 = dart.fn(gui$46template.viewFactory_GuiToolPage13, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C86() {
      return C86 = dart.fn(gui$46template.ViewGuiToolPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C87() {
      return C87 = dart.fn(gui$46template.viewFactory_GuiToolPageHost0, VoidToHostViewLOfGuiToolPageL());
    },
    get C88() {
      return C88 = dart.const({
        __proto__: ComponentFactoryOfGuiToolPageL().prototype,
        [ComponentFactory__viewFactory]: C87 || CT.C87,
        [ComponentFactory_selector]: "gui_tool"
      });
    },
    get C89() {
      return C89 = dart.fn(crafting$46template.viewFactory_CraftingToolPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C90() {
      return C90 = dart.fn(crafting$46template.viewFactory_CraftingToolPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C91() {
      return C91 = dart.fn(crafting$46template.viewFactory_CraftingToolPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C92() {
      return C92 = dart.fn(crafting$46template.viewFactory_CraftingToolPage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C93() {
      return C93 = dart.fn(crafting$46template.viewFactory_CraftingToolPage6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C94() {
      return C94 = dart.fn(crafting$46template.viewFactory_CraftingToolPage7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C95() {
      return C95 = dart.fn(crafting$46template.viewFactory_CraftingToolPage8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C96() {
      return C96 = dart.fn(crafting$46template.ViewCraftingToolPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C97() {
      return C97 = dart.fn(crafting$46template.viewFactory_CraftingToolPage5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C98() {
      return C98 = dart.fn(crafting$46template.viewFactory_CraftingToolPageHost0, VoidToHostViewLOfCraftingToolPageL());
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ComponentFactoryOfCraftingToolPageL().prototype,
        [ComponentFactory__viewFactory]: C98 || CT.C98,
        [ComponentFactory_selector]: "crafting_tool"
      });
    },
    get C100() {
      return C100 = dart.fn(tekpack$46template.viewFactory_TekPackPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C101() {
      return C101 = dart.fn(tekpack$46template.viewFactory_TekPackPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C102() {
      return C102 = dart.fn(tekpack$46template.viewFactory_TekPackPage6, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C103() {
      return C103 = dart.fn(tekpack$46template.ViewTekPackPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C104() {
      return C104 = dart.fn(tekpack$46template.viewFactory_TekPackPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C105() {
      return C105 = dart.fn(tekpack$46template.viewFactory_TekPackPage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C106() {
      return C106 = dart.fn(tekpack$46template.viewFactory_TekPackPage5, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C107() {
      return C107 = dart.fn(tekpack$46template.viewFactory_TekPackPage7, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C108() {
      return C108 = dart.fn(tekpack$46template.viewFactory_TekPackPage8, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C109() {
      return C109 = dart.fn(tekpack$46template.viewFactory_TekPackPageHost0, VoidToHostViewLOfTekPackPageL());
    },
    get C110() {
      return C110 = dart.const({
        __proto__: ComponentFactoryOfTekPackPageL().prototype,
        [ComponentFactory__viewFactory]: C109 || CT.C109,
        [ComponentFactory_selector]: "tekpack"
      });
    },
    get C111() {
      return C111 = dart.fn(projects$46template.viewFactory_ProjectsPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C112() {
      return C112 = dart.fn(projects$46template.viewFactory_ProjectsPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C113() {
      return C113 = dart.fn(projects$46template.viewFactory_ProjectsPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C114() {
      return C114 = dart.fn(projects$46template.ViewProjectsPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C115() {
      return C115 = dart.fn(projects$46template.viewFactory_ProjectsPageHost0, VoidToHostViewLOfProjectsPageL());
    },
    get C116() {
      return C116 = dart.const({
        __proto__: ComponentFactoryOfProjectsPageL().prototype,
        [ComponentFactory__viewFactory]: C115 || CT.C115,
        [ComponentFactory_selector]: "projects"
      });
    },
    get C117() {
      return C117 = dart.fn(articles$46template.viewFactory_ArticlesPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C118() {
      return C118 = dart.fn(articles$46template.viewFactory_ArticlesPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C119() {
      return C119 = dart.fn(articles$46template.viewFactory_ArticlesPage3, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C120() {
      return C120 = dart.fn(articles$46template.viewFactory_ArticlesPage4, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C121() {
      return C121 = dart.fn(articles$46template.ViewArticlesPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C122() {
      return C122 = dart.fn(articles$46template.viewFactory_ArticlesPageHost0, VoidToHostViewLOfArticlesPageL());
    },
    get C123() {
      return C123 = dart.const({
        __proto__: ComponentFactoryOfArticlesPageL().prototype,
        [ComponentFactory__viewFactory]: C122 || CT.C122,
        [ComponentFactory_selector]: "articles"
      });
    },
    get C124() {
      return C124 = dart.fn(landing$46template.ViewLandingPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C125() {
      return C125 = dart.fn(landing$46template.viewFactory_LandingPageHost0, VoidToHostViewLOfLandingPageL());
    },
    get C126() {
      return C126 = dart.const({
        __proto__: ComponentFactoryOfLandingPageL().prototype,
        [ComponentFactory__viewFactory]: C125 || CT.C125,
        [ComponentFactory_selector]: "landing"
      });
    },
    get C127() {
      return C127 = dart.fn(card$46template$.ViewLandingCard0._debugClearComponentStyles, VoidTovoid());
    },
    get C128() {
      return C128 = dart.fn(card$46template$.viewFactory_LandingCardHost0, VoidToHostViewLOfLandingCardL());
    },
    get C129() {
      return C129 = dart.const({
        __proto__: ComponentFactoryOfLandingCardL().prototype,
        [ComponentFactory__viewFactory]: C128 || CT.C128,
        [ComponentFactory_selector]: "landing-card"
      });
    },
    get C130() {
      return C130 = dart.fn(section$46template.ViewLandingSection0._debugClearComponentStyles, VoidTovoid());
    },
    get C131() {
      return C131 = dart.fn(section$46template.viewFactory_LandingSectionHost0, VoidToHostViewLOfLandingSectionL());
    },
    get C132() {
      return C132 = dart.const({
        __proto__: ComponentFactoryOfLandingSectionL().prototype,
        [ComponentFactory__viewFactory]: C131 || CT.C131,
        [ComponentFactory_selector]: "landing-section"
      });
    },
    get C133() {
      return C133 = dart.fn(contact$46template.viewFactory_ContactPage1, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C134() {
      return C134 = dart.fn(contact$46template.viewFactory_ContactPage2, RenderViewLAndintLToEmbeddedViewLOfvoid());
    },
    get C135() {
      return C135 = dart.fn(contact$46template.ViewContactPage0._debugClearComponentStyles, VoidTovoid());
    },
    get C136() {
      return C136 = dart.fn(contact$46template.viewFactory_ContactPageHost0, VoidToHostViewLOfContactPageL());
    },
    get C137() {
      return C137 = dart.const({
        __proto__: ComponentFactoryOfContactPageL().prototype,
        [ComponentFactory__viewFactory]: C136 || CT.C136,
        [ComponentFactory_selector]: "contact"
      });
    }
  }, false);
  var isHome = dart.privateName(sidebar, "SidebarComponent.isHome");
  sidebar.SidebarComponent = class SidebarComponent extends core.Object {
    get isHome() {
      return this[isHome];
    }
    set isHome(value) {
      this[isHome] = value;
    }
  };
  (sidebar.SidebarComponent.new = function() {
    this[isHome] = true;
    ;
  }).prototype = sidebar.SidebarComponent.prototype;
  dart.addTypeTests(sidebar.SidebarComponent);
  dart.addTypeCaches(sidebar.SidebarComponent);
  dart.setLibraryUri(sidebar.SidebarComponent, L0);
  dart.setFieldSignature(sidebar.SidebarComponent, () => ({
    __proto__: dart.getFields(sidebar.SidebarComponent.__proto__),
    isHome: dart.fieldType(dart.legacy(core.bool))
  }));
  var _name = dart.privateName(change_page, "_name");
  var C0;
  var C1;
  var C2;
  var modalService$ = dart.privateName(gui$, "GuiToolPage.modalService");
  var containers = dart.privateName(gui$, "GuiToolPage.containers");
  var selectedContainer = dart.privateName(gui$, "GuiToolPage.selectedContainer");
  var currentPageIndex = dart.privateName(gui$, "GuiToolPage.currentPageIndex");
  var module$ = dart.privateName(gui$, "GuiToolPage.module");
  var guiSlots = dart.privateName(gui$, "GuiToolPage.guiSlots");
  var selectedGuiSlot = dart.privateName(gui$, "GuiToolPage.selectedGuiSlot");
  var selectedGuiType = dart.privateName(gui$, "GuiToolPage.selectedGuiType");
  var selectedSlotItem = dart.privateName(gui$, "GuiToolPage.selectedSlotItem");
  var selectedSlotPage = dart.privateName(gui$, "GuiToolPage.selectedSlotPage");
  var selectedSlotActions = dart.privateName(gui$, "GuiToolPage.selectedSlotActions");
  var selectedCountScore = dart.privateName(gui$, "GuiToolPage.selectedCountScore");
  var selectedCountScoreEntity = dart.privateName(gui$, "GuiToolPage.selectedCountScoreEntity");
  var namespace = dart.privateName(gui$, "GuiToolPage.namespace");
  var generatedFiles = dart.privateName(gui$, "GuiToolPage.generatedFiles");
  var errorText = dart.privateName(gui$, "GuiToolPage.errorText");
  gui$.GuiToolPage = class GuiToolPage extends core.Object {
    get modalService() {
      return this[modalService$];
    }
    set modalService(value) {
      super.modalService = value;
    }
    get containers() {
      return this[containers];
    }
    set containers(value) {
      super.containers = value;
    }
    get selectedContainer() {
      return this[selectedContainer];
    }
    set selectedContainer(value) {
      this[selectedContainer] = value;
    }
    get currentPageIndex() {
      return this[currentPageIndex];
    }
    set currentPageIndex(value) {
      this[currentPageIndex] = value;
    }
    get module() {
      return this[module$];
    }
    set module(value) {
      this[module$] = value;
    }
    get guiSlots() {
      return this[guiSlots];
    }
    set guiSlots(value) {
      super.guiSlots = value;
    }
    get selectedGuiSlot() {
      return this[selectedGuiSlot];
    }
    set selectedGuiSlot(value) {
      this[selectedGuiSlot] = value;
    }
    get selectedGuiType() {
      return this[selectedGuiType];
    }
    set selectedGuiType(value) {
      this[selectedGuiType] = value;
    }
    get selectedSlotItem() {
      return this[selectedSlotItem];
    }
    set selectedSlotItem(value) {
      this[selectedSlotItem] = value;
    }
    get selectedSlotPage() {
      return this[selectedSlotPage];
    }
    set selectedSlotPage(value) {
      this[selectedSlotPage] = value;
    }
    get selectedSlotActions() {
      return this[selectedSlotActions];
    }
    set selectedSlotActions(value) {
      this[selectedSlotActions] = value;
    }
    get selectedCountScore() {
      return this[selectedCountScore];
    }
    set selectedCountScore(value) {
      this[selectedCountScore] = value;
    }
    get selectedCountScoreEntity() {
      return this[selectedCountScoreEntity];
    }
    set selectedCountScoreEntity(value) {
      this[selectedCountScoreEntity] = value;
    }
    get namespace() {
      return this[namespace];
    }
    set namespace(value) {
      this[namespace] = value;
    }
    get generatedFiles() {
      return this[generatedFiles];
    }
    set generatedFiles(value) {
      this[generatedFiles] = value;
    }
    get errorText() {
      return this[errorText];
    }
    set errorText(value) {
      this[errorText] = value;
    }
    get selected() {
      return this.containers[$_get](this.selectedContainer);
    }
    get currentPage() {
      return dart.test(this.module.pages[$isEmpty]) ? null : this.module.pages[$_get](this.currentPageIndex);
    }
    containerChanged(i) {
      this.selectedContainer = i;
      switch (i) {
        case 0:
        {
          {
            this.module.container = gui.GuiContainer.chest;
            this.module.targetEntity = null;
            this.module.blockLocation = new location.Location.new("");
            break;
          }
        }
        case 1:
        {
          {
            this.module.container = gui.GuiContainer.minecart;
            this.module.offset = new location.Location.new("");
            this.module.minecartAlwaysActive = true;
            this.module.minecartName = new text_components.TextComponent.new("");
            this.module.targetEntity = null;
            this.module.blockLocation = null;
            break;
          }
        }
        case 2:
        {
          {
            this.module.container = gui.GuiContainer.minecart;
            this.module.targetEntity = new entity.Entity.new({tags: ["objd_gui_cart"]});
            this.module.blockLocation = null;
            break;
          }
        }
        case 3:
        {
          {
            this.module.container = gui.GuiContainer.dropper;
            this.module.blockLocation = new location.Location.new("");
            this.module.targetEntity = null;
            break;
          }
        }
        case 4:
        {
          {
            this.module.container = gui.GuiContainer.inventory;
            this.module.targetEntity = new entity.Entity.All();
            this.module.blockLocation = null;
            break;
          }
        }
        case 5:
        {
          {
            this.module.container = gui.GuiContainer.enderchest;
            this.module.targetEntity = new entity.Entity.All();
            this.module.blockLocation = null;
            break;
          }
        }
        case 6:
        {
          {
            this.module.container = gui.GuiContainer.hopper;
            this.module.targetEntity = null;
            this.module.blockLocation = new location.Location.new("");
            break;
          }
        }
      }
    }
    changeSlot(i) {
      let t0, t0$, t0$0, t0$1, t0$2;
      this.selectedGuiSlot = i;
      if (dart.test(this.currentPage.slots[$isNotEmpty])) core.print(this.currentPage.slots[$first].slot);
      let data = this.getSlotforIndex(i);
      if (data != null) {
        if (InteractiveL().is(data)) {
          this.selectedGuiType = 1;
          this.selectedSlotActions = data.actions[$map](StringL(), dart.fn(a => dart.toString(a), WidgetLToStringL()))[$join]("\n");
          this.selectedCountScore = (t0$ = (t0 = data.countScore, t0 == null ? null : t0.score), t0$ == null ? "" : t0$);
          this.selectedCountScoreEntity = (t0$2 = (t0$1 = (t0$0 = data.countScore, t0$0 == null ? null : t0$0.entity), t0$1 == null ? null : dart.toString(t0$1)), t0$2 == null ? "" : t0$2);
          this.selectedSlotItem = data.item;
        }
        if (EmptySlotL().is(data)) {
          this.selectedGuiType = 2;
        }
        if (ChangePageL().is(data)) {
          this.selectedSlotItem = data.item;
          switch (data.mode) {
            case C0 || CT.C0:
            {
              {
                this.selectedGuiType = 3;
                break;
              }
            }
            case C1 || CT.C1:
            {
              {
                this.selectedGuiType = 4;
                break;
              }
            }
            case C2 || CT.C2:
            {
              {
                this.selectedSlotPage = data.page;
                this.selectedGuiType = 5;
                break;
              }
            }
          }
        }
        if (PlaceholderL().is(data)) {
          this.selectedSlotItem = item.Item.clone(data.item);
          this.selectedGuiType = 6;
        }
      } else {
        this.selectedGuiType = 0;
        this.selectedSlotItem = null;
        this.selectedSlotPage = null;
        this.selectedSlotActions = "";
        this.selectedCountScore = "";
        this.selectedCountScoreEntity = "";
      }
      this.modalService.open("gui_slot");
    }
    slotChanged(i) {
      let existingData = this.getSlotforIndex(this.selectedGuiSlot);
      if (this.selectedGuiType === 0) {
        if (existingData != null) {
          this.currentPage.slots[$remove](existingData);
        }
        return;
      }
      let slot = slot$.Slot.chest(dart.notNull(this.selectedGuiSlot) + 1);
      if (this.selected === "Inventory") slot = slot$.Slot.inv(dart.notNull(this.selectedGuiSlot) + 1);
      let selectedSlot = null;
      switch (this.selectedGuiType) {
        case 1:
        {
          {
            let commands = this.selectedSlotActions[$split]("\n")[$map](CommandL(), dart.fn(a => new command.Command.new(a), StringLToCommandL()))[$toList]();
            let score = null;
            if (this.selectedCountScore[$isNotEmpty] && this.selectedCountScoreEntity[$isNotEmpty]) {
              score = new score$.Score.new(new entity.Entity.Select(new selector.Selector.parse(this.selectedCountScoreEntity)), this.selectedCountScore);
            }
            selectedSlot = new interactive_slot.Interactive.new(i, {slot: slot, actions: commands, countScore: score});
            break;
          }
        }
        case 2:
        {
          {
            selectedSlot = new empty.EmptySlot.new({slot: slot});
            break;
          }
        }
        case 3:
        {
          {
            selectedSlot = change_page.ChangePage.next(i, {slot: slot});
            break;
          }
        }
        case 4:
        {
          {
            selectedSlot = change_page.ChangePage.prev(i, {slot: slot});
            break;
          }
        }
        case 5:
        {
          {
            selectedSlot = new change_page.ChangePage.new(this.selectedSlotPage, i, {slot: slot});
            break;
          }
        }
        case 6:
        {
          {
            selectedSlot = new placeholder.Placeholder.new({item: i.getId()[$isNotEmpty] ? i : null, slot: slot});
            break;
          }
        }
      }
      if (existingData != null) {
        this.currentPage.slots[$remove](existingData);
      }
      this.currentPage.slots[$add](selectedSlot);
    }
    get showItemInputs() {
      return this.selectedGuiType !== 0 && this.selectedGuiType !== 2;
    }
    get columns() {
      if (this.selected === "Hopper") return 5;
      if (this.selected === "Dropper") return 3;
      return 9;
    }
    get slotCount() {
      if (this.selected === "Hopper") return core.List.new(5);
      if (this.selected === "Dropper") return core.List.new(9);
      if (this.selected === "Inventory") return core.List.new(36);
      return core.List.new(27);
    }
    controlPages(isRight) {
      if (dart.test(isRight)) {
        if (dart.notNull(this.currentPageIndex) >= dart.notNull(this.module.pages[$length]) - 1) {
          this.addEmptyPage();
        }
        this.currentPageIndex = dart.notNull(this.currentPageIndex) + 1;
      } else {
        this.currentPageIndex = dart.notNull(this.currentPageIndex) - 1;
      }
    }
    addEmptyPage() {
      let t0, t0$, t0$0;
      this.module.pages[$add](new page.GuiPage.new(JSArrayOfGuiSlotL().of([]), {fillEmptySlots: (t0$ = (t0 = this.currentPage, t0 == null ? null : t0.fillEmptySlots), t0$ == null ? false : t0$), placeholder: (t0$0 = this.currentPage, t0$0 == null ? null : t0$0.placeholder) != null ? item.Item.clone(this.currentPage.placeholder) : null}));
    }
    getImageUrl(i) {
      let t0;
      let slot = this.getSlotforIndex(i);
      core.print((t0 = slot, t0 == null ? null : t0.slot));
      if (slot == null) return "";
      if (InteractiveL().is(slot) && slot.item.getId() != null) {
        return "https://minecraftitemids.com/item/64/" + dart.str(slot.item.getId()) + ".png";
      }
      if (PlaceholderL().is(slot) && slot.item.getId() != null) {
        return "https://minecraftitemids.com/item/64/" + dart.str(slot.item.getId()) + ".png";
      }
      if (ChangePageL().is(slot) && slot.item.getId() != null) {
        return "https://minecraftitemids.com/item/64/" + dart.str(slot.item.getId()) + ".png";
      }
      return "";
    }
    getTextForIndex(i) {
      let t0, t0$, t0$0;
      let slot = this.getSlotforIndex(i);
      if (slot == null) return "";
      if (EmptySlotL().is(slot)) return "Empty";
      if (PlaceholderL().is(slot)) return "Placeholder";
      if (InteractiveL().is(slot)) {
        t0$0 = (t0$ = (t0 = slot.item, t0 == null ? null : t0.count), t0$ == null ? null : dart.toString(t0$));
        return t0$0 == null ? "" : t0$0;
      }
      if (ChangePageL().is(slot)) {
        switch (slot.mode) {
          case C2 || CT.C2:
          {
            return "Page: " + dart.str(slot.page);
          }
          case C0 || CT.C0:
          {
            return "Next Page";
          }
          case C1 || CT.C1:
          {
            return "Prev Page";
          }
        }
      }
      return "";
    }
    getSlotforIndex(i) {
      return this.currentPage.slots[$firstWhere](dart.fn(s => s.slot.id == i, GuiSlotLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
    }
    getWidth() {
      return this.selected === "Hopper" ? "58%" : this.selected === "Dropper" ? "40%" : null;
    }
    get showLocation() {
      return this.selected === "Hopper" || this.selected === "Dropper" || this.selected === "Chest";
    }
    generate() {
      this.errorText = null;
      try {
        this.generatedFiles = build.getAllFiles(new project.Project.new({name: "", generate: new pack.Pack.new({name: this.namespace, main: new file.File.new("main"), load: new file.File.new("load"), modules: JSArrayOfModuleL().of([this.module])})}));
      } catch (e) {
        let err = dart.getThrown(e);
        this.errorText = dart.toString(err);
        core.print(err);
      }
    }
    download() {
      if (this.module.offset != null && this.module.offset.location[$trim]()[$isEmpty]) {
        this.module.offset = null;
      }
      if (this.module.blockLocation != null && this.module.blockLocation.location[$trim]()[$isEmpty]) {
        this.module.blockLocation = new location.Location.here();
      }
      if (this.module.minecartName != null && dart.dtest(dart.dload(this.module.minecartName.value[$_get]("text"), 'isEmpty'))) this.module.minecartName = null;
      this.generate();
      if (this.errorText == null) {
        build.saveAsZip(this.generatedFiles, dart.notNull(this.namespace) + " - A GUI Datapack Generated by objD.zip");
      }
    }
  };
  (gui$.GuiToolPage.new = function(modalService) {
    this[containers] = JSArrayOfStringL().of(["Chest", "HandItem", "Minecart", "Dropper", "Inventory", "Enderchest", "Hopper"]);
    this[selectedContainer] = 0;
    this[currentPageIndex] = 0;
    this[module$] = gui.GuiModule.chest(new location.Location.new(""), {pages: JSArrayOfGuiPageL().of([])});
    this[guiSlots] = JSArrayOfStringL().of(["None", "Interactive", "Empty", "Next Page", "Previous Page", "Specific Page", "Placeholder"]);
    this[selectedGuiSlot] = null;
    this[selectedGuiType] = 0;
    this[selectedSlotItem] = null;
    this[selectedSlotPage] = null;
    this[selectedSlotActions] = "";
    this[selectedCountScore] = "";
    this[selectedCountScoreEntity] = "";
    this[namespace] = "custom_gui";
    this[generatedFiles] = null;
    this[errorText] = null;
    this[modalService$] = modalService;
    this.addEmptyPage();
  }).prototype = gui$.GuiToolPage.prototype;
  dart.addTypeTests(gui$.GuiToolPage);
  dart.addTypeCaches(gui$.GuiToolPage);
  dart.setMethodSignature(gui$.GuiToolPage, () => ({
    __proto__: dart.getMethods(gui$.GuiToolPage.__proto__),
    containerChanged: dart.fnType(dart.void, [dart.legacy(core.int)]),
    changeSlot: dart.fnType(dart.void, [dart.legacy(core.int)]),
    slotChanged: dart.fnType(dart.void, [dart.legacy(item.Item)]),
    controlPages: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    addEmptyPage: dart.fnType(dart.void, []),
    getImageUrl: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    getTextForIndex: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    getSlotforIndex: dart.fnType(dart.legacy(gui_slot.GuiSlot), [dart.legacy(core.int)]),
    getWidth: dart.fnType(dart.legacy(core.String), []),
    generate: dart.fnType(dart.void, []),
    download: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(gui$.GuiToolPage, () => ({
    __proto__: dart.getGetters(gui$.GuiToolPage.__proto__),
    selected: dart.legacy(core.String),
    currentPage: dart.legacy(page.GuiPage),
    showItemInputs: dart.legacy(core.bool),
    columns: dart.legacy(core.int),
    slotCount: dart.legacy(core.List),
    showLocation: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(gui$.GuiToolPage, L1);
  dart.setFieldSignature(gui$.GuiToolPage, () => ({
    __proto__: dart.getFields(gui$.GuiToolPage.__proto__),
    modalService: dart.finalFieldType(dart.legacy(modal_service.ModalService)),
    containers: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    selectedContainer: dart.fieldType(dart.legacy(core.int)),
    currentPageIndex: dart.fieldType(dart.legacy(core.int)),
    module: dart.fieldType(dart.legacy(gui.GuiModule)),
    guiSlots: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    selectedGuiSlot: dart.fieldType(dart.legacy(core.int)),
    selectedGuiType: dart.fieldType(dart.legacy(core.int)),
    selectedSlotItem: dart.fieldType(dart.legacy(item.Item)),
    selectedSlotPage: dart.fieldType(dart.legacy(core.int)),
    selectedSlotActions: dart.fieldType(dart.legacy(core.String)),
    selectedCountScore: dart.fieldType(dart.legacy(core.String)),
    selectedCountScoreEntity: dart.fieldType(dart.legacy(core.String)),
    namespace: dart.fieldType(dart.legacy(core.String)),
    generatedFiles: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    errorText: dart.fieldType(dart.legacy(core.String))
  }));
  var _itemChange = dart.privateName(item$, "_itemChange");
  var service$ = dart.privateName(item$, "ItemSelectorComponent.service");
  var item$0 = dart.privateName(item$, "ItemSelectorComponent.item");
  var name = dart.privateName(item$, "ItemSelectorComponent.name");
  var showId = dart.privateName(item$, "ItemSelectorComponent.showId");
  var showCount = dart.privateName(item$, "ItemSelectorComponent.showCount");
  var showNbt = dart.privateName(item$, "ItemSelectorComponent.showNbt");
  var showModel = dart.privateName(item$, "ItemSelectorComponent.showModel");
  var errorMsg = dart.privateName(item$, "ItemSelectorComponent.errorMsg");
  var id = dart.privateName(item$, "ItemSelectorComponent.id");
  var model = dart.privateName(item$, "ItemSelectorComponent.model");
  var count = dart.privateName(item$, "ItemSelectorComponent.count");
  var nbt = dart.privateName(item$, "ItemSelectorComponent.nbt");
  item$.ItemSelectorComponent = class ItemSelectorComponent extends core.Object {
    get service() {
      return this[service$];
    }
    set service(value) {
      super.service = value;
    }
    get item() {
      return this[item$0];
    }
    set item(value) {
      this[item$0] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get showId() {
      return this[showId];
    }
    set showId(value) {
      this[showId] = value;
    }
    get showCount() {
      return this[showCount];
    }
    set showCount(value) {
      this[showCount] = value;
    }
    get showNbt() {
      return this[showNbt];
    }
    set showNbt(value) {
      this[showNbt] = value;
    }
    get showModel() {
      return this[showModel];
    }
    set showModel(value) {
      this[showModel] = value;
    }
    get errorMsg() {
      return this[errorMsg];
    }
    set errorMsg(value) {
      this[errorMsg] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
    get count() {
      return this[count];
    }
    set count(value) {
      this[count] = value;
    }
    get nbt() {
      return this[nbt];
    }
    set nbt(value) {
      this[nbt] = value;
    }
    get itemChange() {
      return this[_itemChange].stream;
    }
    ngAfterChanges() {
      this.name == null ? this.name = "item_selector" : null;
      this.item == null ? this.item = new item.Item.new("") : null;
      this.id = this.item.getId();
      this.model = intL().as(this.item.tag[$_get]("CustomModelData"));
      this.count = this.item.count;
      this.nbt = gson.gson.encode(this.item.tag);
    }
    submit() {
      this.errorMsg = null;
      try {
        let tag = this.nbt[$isNotEmpty] ? gson.gson.decode(this.nbt, {simplify: true}) : new _js_helper.LinkedMap.new();
        this[_itemChange].add(this.id[$isEmpty] ? null : this.item.copyWith({nbt: MapLOfStringL$dynamic().as(tag), type: this.id, model: this.model, count: this.count}));
        this.item = new item.Item.new("");
        this.service.close(this.name);
      } catch (e) {
        let err = dart.getThrown(e);
        this.errorMsg = dart.toString(err);
        core.print(err);
      }
    }
  };
  (item$.ItemSelectorComponent.new = function(service) {
    this[item$0] = null;
    this[name] = null;
    this[showId] = true;
    this[showCount] = true;
    this[showNbt] = true;
    this[showModel] = true;
    this[_itemChange] = StreamControllerOfItemL().new();
    this[errorMsg] = null;
    this[id] = null;
    this[model] = null;
    this[count] = null;
    this[nbt] = null;
    this[service$] = service;
    ;
  }).prototype = item$.ItemSelectorComponent.prototype;
  dart.addTypeTests(item$.ItemSelectorComponent);
  dart.addTypeCaches(item$.ItemSelectorComponent);
  item$.ItemSelectorComponent[dart.implements] = () => [lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(item$.ItemSelectorComponent, () => ({
    __proto__: dart.getMethods(item$.ItemSelectorComponent.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    submit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(item$.ItemSelectorComponent, () => ({
    __proto__: dart.getGetters(item$.ItemSelectorComponent.__proto__),
    itemChange: dart.legacy(async.Stream$(dart.legacy(item.Item)))
  }));
  dart.setLibraryUri(item$.ItemSelectorComponent, L2);
  dart.setFieldSignature(item$.ItemSelectorComponent, () => ({
    __proto__: dart.getFields(item$.ItemSelectorComponent.__proto__),
    service: dart.finalFieldType(dart.legacy(modal_service.ModalService)),
    item: dart.fieldType(dart.legacy(item.Item)),
    name: dart.fieldType(dart.legacy(core.String)),
    showId: dart.fieldType(dart.legacy(core.bool)),
    showCount: dart.fieldType(dart.legacy(core.bool)),
    showNbt: dart.fieldType(dart.legacy(core.bool)),
    showModel: dart.fieldType(dart.legacy(core.bool)),
    [_itemChange]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(item.Item)))),
    errorMsg: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    model: dart.fieldType(dart.legacy(core.int)),
    count: dart.fieldType(dart.legacy(core.int)),
    nbt: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(render$46css$46shim, {
    /*render$46css$46shim.styles*/get styles() {
      return ["img._ngcontent-%ID%{width:70%;margin:0 15%}pre._ngcontent-%ID%{background:#f3f3f7;border:1px solid #d5d5d9;border-left:3px solid var(--primary);border-radius:3px;color:#494953;page-break-inside:avoid;font-family:monospace;font-size:15px;line-height:1.6;margin-bottom:1.6em;max-width:100%;overflow:auto;padding:1em 1.5em;display:block;word-wrap:break-word}i._ngcontent-%ID%{background:#f3f3f7;border:1px solid #d5d5d9;color:#494953;font-family:monospace;border-radius:2px;padding:2px 4px;font-style:normal}a._ngcontent-%ID%{color:var(--primary);text-decoration:none}a:hover._ngcontent-%ID%{color:var(--primary-darker);text-decoration:underline;text-underline-position:under}"];
    }
  }, true);
  var loading = dart.privateName(projects, "ProjectsPage.loading");
  var lang$ = dart.privateName(projects, "ProjectsPage.lang");
  var projects$ = dart.privateName(projects, "ProjectsPage.projects");
  projects.ProjectsPage = class ProjectsPage extends core.Object {
    get loading() {
      return this[loading];
    }
    set loading(value) {
      this[loading] = value;
    }
    get lang() {
      return this[lang$];
    }
    set lang(value) {
      this[lang$] = value;
    }
    get projects() {
      return this[projects$];
    }
    set projects(value) {
      this[projects$] = value;
    }
    ngOnInit() {
      this.loadProjects(this.lang.currentLocale);
      this.lang.localeChange.addListener(dart.bind(this, 'loadProjects'));
    }
    loadProjects(locale) {
      this.loading = true;
      http$.getProjects(this.lang.currentLocale).then(core.Null, dart.fn(val => {
        this.loading = false;
        this.projects = val;
      }, ListLOfDocumentLToNullN()));
    }
  };
  (projects.ProjectsPage.new = function(lang) {
    this[loading] = true;
    this[projects$] = JSArrayOfDocumentL().of([]);
    this[lang$] = lang;
    ;
  }).prototype = projects.ProjectsPage.prototype;
  dart.addTypeTests(projects.ProjectsPage);
  dart.addTypeCaches(projects.ProjectsPage);
  projects.ProjectsPage[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(projects.ProjectsPage, () => ({
    __proto__: dart.getMethods(projects.ProjectsPage.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    loadProjects: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(projects.ProjectsPage, L3);
  dart.setFieldSignature(projects.ProjectsPage, () => ({
    __proto__: dart.getFields(projects.ProjectsPage.__proto__),
    loading: dart.fieldType(dart.legacy(core.bool)),
    lang: dart.fieldType(dart.legacy(translation_service.TranslationService)),
    projects: dart.fieldType(dart.legacy(core.List$(dart.legacy(document.Document))))
  }));
  http$._getToken = function _getToken() {
    return async.async(dart.dynamic, function* _getToken() {
      let res = (yield http.get(dart.notNull(http$.uri) + "api"));
      if (res.body == null || res.statusCode !== 200) return null;
      let body = convert.json.decode(res.body);
      if (dart.dsend(body, '_get', ["refs"]) == null) return null;
      http$.token = StringL().as(dart.dsend(dart.dsend(dart.dsend(body, '_get', ["refs"]), '_get', [0]), '_get', ["ref"]));
      return http$.token;
    });
  };
  http$.query = function query(q) {
    return async.async(MapL(), function* query() {
      yield http$._getToken();
      let res = (yield http.get(dart.notNull(http$.guri) + "?query=" + dart.notNull(q), {headers: new (IdentityMapOfStringL$StringL()).from(["Prismic-ref", http$.token, "Content-Type", "application/octet-stream; charset=UTF-8"])}));
      if (res.body == null || res.statusCode !== 200) dart.throw("Request failed!");
      let body = convert.json.decode(new convert.Utf8Decoder.new().convert(res.bodyBytes));
      if (body == null) dart.throw("No Json body!");
      return FutureOrLOfMapL().as(body);
    });
  };
  http$.getArticlePreviews = function getArticlePreviews(locale, tags = null, search = "") {
    return async.async(ListLOfDocumentL(), function* getArticlePreviews() {
      let sTags = convert.json.encode(tags);
      locale = http$._getPrismicLocale(locale);
      let res = (yield http$.query("{\n  allArticles(sortBy:date_DESC,fulltext: \"" + dart.str(search) + "\",tags_in:" + dart.str(sTags) + ",lang:\"" + dart.str(locale) + "\",where: {public: true}) {\n    edges {\n      node {\n        header\n        title\n        description\n        _meta {\n          uid\n        }\n      }\n    }\n  }\n}\n"));
      if (res[$_get]("data") == null || dart.dsend(res[$_get]("data"), '_get', ["allArticles"]) == null || dart.dsend(dart.dsend(res[$_get]("data"), '_get', ["allArticles"]), '_get', ["edges"]) == null) return JSArrayOfDocumentL().of([]);
      let ret = JSArrayOfDocumentL().of([]);
      for (let t2 of IterableL().as(dart.dsend(dart.dsend(res[$_get]("data"), '_get', ["allArticles"]), '_get', ["edges"]))) {
        let article = MapLOfStringL$dynamic().as(t2);
        if (article[$_get]("node") != null) {
          let node = article[$_get]("node");
          ret[$add](document.Document.fromJson(MapL().as(node)));
        }
      }
      return ret;
    });
  };
  http$.getTextFile = function getTextFile(url) {
    return async.async(StringL(), function* getTextFile() {
      let res = (yield http.get(url[$startsWith]("http") ? url : "https://stevertus.com/" + dart.notNull(url)));
      if (res.body == null || res.statusCode !== 200) dart.throw("Request failed!");
      return res.body;
    });
  };
  http$.getJsonFile = function getJsonFile(url) {
    return async.async(dart.dynamic, function* getJsonFile() {
      let inp = (yield http$.getTextFile(url));
      return convert.json.decode(inp);
    });
  };
  http$.getProjects = function getProjects(locale) {
    return async.async(ListLOfDocumentL(), function* getProjects() {
      locale = http$._getPrismicLocale(locale);
      let res = (yield http$.query("{\n  allProjects(sortBy:date_DESC,lang:\"" + dart.str(locale) + "\") {\n    edges {\n      node {\n        header\n        link\n        title\n        description\n      }\n    }\n  }\n}\n"));
      if (res[$_get]("data") == null || dart.dsend(res[$_get]("data"), '_get', ["allProjects"]) == null || dart.dsend(dart.dsend(res[$_get]("data"), '_get', ["allProjects"]), '_get', ["edges"]) == null) return JSArrayOfDocumentL().of([]);
      let ret = JSArrayOfDocumentL().of([]);
      for (let t3 of IterableL().as(dart.dsend(dart.dsend(res[$_get]("data"), '_get', ["allProjects"]), '_get', ["edges"]))) {
        let article = MapLOfStringL$dynamic().as(t3);
        if (article[$_get]("node") != null) {
          let node = article[$_get]("node");
          ret[$add](document.Document.fromJson(MapL().as(node)));
        }
      }
      return ret;
    });
  };
  http$._getPrismicLocale = function _getPrismicLocale(locale) {
    if (locale === "de") return "de-de";
    if (locale === "zh") return "zh-cn";
    return "en-us";
  };
  http$.getFullArticle = function getFullArticle(uid, locale) {
    return async.async(FullArticleL(), function* getFullArticle() {
      locale = http$._getPrismicLocale(locale);
      let res = (yield http$.query("{\narticle(uid:\"" + dart.notNull(uid) + ("\",lang: \"" + dart.str(locale) + "\"){\n  _meta{uid}\n  header\n  title\n  date\n  video\n      slices {\n        __typename\n      ...on ArticleSlicesDownload{\n        primary {\n          button_text\n          link {\n          ...on _ExternalLink {url}\n          ...on _FileLink {url}\n          ...on _ImageLink{url}\n        }\n        }\n      }\n      ...on ArticleSlicesText {primary{text}}\n      ...on ArticleSlicesRecommended {fields{recomm{...on Article{header,description,title,_meta{uid}}}}}\n      ...on ArticleSlicesImage {primary{img}}\n    }\n}\n}\n")));
      if (res[$_get]("data") == null || dart.dsend(res[$_get]("data"), '_get', ["article"]) == null) return null;
      return article.FullArticle.fromJson(MapL().as(dart.dsend(res[$_get]("data"), '_get', ["article"])));
    });
  };
  dart.defineLazy(http$, {
    /*http$.httpURI*/get httpURI() {
      return "https://stevertus.com/";
    },
    /*http$.uri*/get uri() {
      return "https://stevertuscom.cdn.prismic.io/";
    },
    /*http$.guri*/get guri() {
      return "https://stevertuscom.cdn.prismic.io/graphql";
    },
    /*http$.client*/get client() {
      return client.Client.new();
    },
    /*http$.token*/get token() {
      return null;
    },
    set token(_) {}
  }, true);
  var img$ = dart.privateName(document, "Document.img");
  var title$ = dart.privateName(document, "Document.title");
  var description$ = dart.privateName(document, "Document.description");
  var url$ = dart.privateName(document, "Document.url");
  document.Document = class Document extends core.Object {
    get img() {
      return this[img$];
    }
    set img(value) {
      super.img = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    static fromJson(json) {
      let url = "";
      if (json[$_get]("_meta") != null && dart.dsend(json[$_get]("_meta"), '_get', ["uid"]) != null) {
        url = "/article/" + dart.notNull(core.String.as(dart.dsend(json[$_get]("_meta"), '_get', ["uid"])));
      }
      if (json[$_get]("link") != null) url = StringL().as(json[$_get]("link"));
      let img = StringL().as(dart.dsend(json[$_get]("header"), '_get', ["url"]));
      if (dart.dsend(json[$_get]("header"), '_get', ["thumbnail"]) != null) {
        img = StringL().as(dart.dsend(dart.dsend(json[$_get]("header"), '_get', ["thumbnail"]), '_get', ["url"]));
      }
      return new document.Document.new(StringL().as(dart.dsend(dart.dsend(json[$_get]("title"), '_get', [0]), '_get', ["text"])), url, {description: StringL().as(dart.dsend(dart.dsend(json[$_get]("description"), '_get', [0]), '_get', ["text"])), img: img});
    }
  };
  (document.Document.new = function(title, url, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let img = opts && 'img' in opts ? opts.img : null;
    this[title$] = title;
    this[url$] = url;
    this[description$] = description;
    this[img$] = img;
    ;
  }).prototype = document.Document.prototype;
  dart.addTypeTests(document.Document);
  dart.addTypeCaches(document.Document);
  dart.setLibraryUri(document.Document, L4);
  dart.setFieldSignature(document.Document, () => ({
    __proto__: dart.getFields(document.Document.__proto__),
    img: dart.finalFieldType(dart.legacy(core.String)),
    title: dart.finalFieldType(dart.legacy(core.String)),
    description: dart.finalFieldType(dart.legacy(core.String)),
    url: dart.finalFieldType(dart.legacy(core.String))
  }));
  var C3;
  var img$0 = dart.privateName(article, "FullArticle.img");
  var title$0 = dart.privateName(article, "FullArticle.title");
  var date$ = dart.privateName(article, "FullArticle.date");
  var video$ = dart.privateName(article, "FullArticle.video");
  var slices$0 = dart.privateName(article, "FullArticle.slices");
  article.FullArticle = class FullArticle extends core.Object {
    get img() {
      return this[img$0];
    }
    set img(value) {
      super.img = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get video() {
      return this[video$];
    }
    set video(value) {
      super.video = value;
    }
    get slices() {
      return this[slices$0];
    }
    set slices(value) {
      super.slices = value;
    }
    static fromJson(json) {
      let img = "";
      if (json[$_get]("header") != null && dart.dsend(json[$_get]("header"), '_get', ["url"]) != null) {
        img = StringL().as(dart.dsend(json[$_get]("header"), '_get', ["url"]));
      }
      let title = "";
      if (json[$_get]("title") != null && dart.dsend(dart.dsend(json[$_get]("title"), '_get', [0]), '_get', ["text"]) != null) {
        title = StringL().as(dart.dsend(dart.dsend(json[$_get]("title"), '_get', [0]), '_get', ["text"]));
      }
      let date = core.DateTime.tryParse(core.String.as(json[$_get]("date")));
      let video = null;
      if (json[$_get]("video") != null && dart.dsend(json[$_get]("video"), '_get', ["embed_url"]) != null) {
        video = StringL().as(dart.dtest(dart.dsend(dart.dsend(json[$_get]("video"), '_get', ["embed_url"]), 'contains', ["v="])) ? dart.dsend(dart.dsend(dart.dsend(json[$_get]("video"), '_get', ["embed_url"]), 'split', ["v="]), '_get', [1]) : dart.dload(dart.dsend(dart.dsend(json[$_get]("video"), '_get', ["embed_url"]), 'split', ["/"]), 'last'));
      }
      let slices = JSArrayOfSliceL().of([]);
      if (json[$_get]("slices") != null) {
        dart.dsend(json[$_get]("slices"), 'forEach', [dart.fn(slice => {
            let ret = null;
            if (dart.equals(dart.dsend(slice, '_get', ["__typename"]), "ArticleSlicesText") && dart.dsend(slice, '_get', ["primary"]) != null && dart.dsend(dart.dsend(slice, '_get', ["primary"]), '_get', ["text"]) != null) {
              ret = text.TextSlice.fromJson(ListL().as(dart.dsend(dart.dsend(slice, '_get', ["primary"]), '_get', ["text"])));
            }
            if (dart.equals(dart.dsend(slice, '_get', ["__typename"]), "ArticleSlicesImage")) {
              ret = slices$.ImageSlice.fromJson(MapL().as(slice));
            }
            if (dart.equals(dart.dsend(slice, '_get', ["__typename"]), "ArticleSlicesRecommended") && dart.dsend(slice, '_get', ["fields"]) != null) {
              ret = slices$.RecommendedSlice.fromJson(ListL().as(dart.dsend(slice, '_get', ["fields"])));
            }
            if (dart.equals(dart.dsend(slice, '_get', ["__typename"]), "ArticleSlicesDownload")) {
              ret = slices$.DownloadSlice.fromJson(MapL().as(slice));
            }
            if (ret != null) slices[$add](ret);
          }, dynamicToNullN())]);
      }
      return new article.FullArticle.new(title, img, date, {video: video, slices: slices});
    }
    toString() {
      return "Title: " + dart.str(this.title) + " \nImg: " + dart.str(this.img) + " \nDate: " + dart.str(this.date) + " \nVideo: " + dart.str(this.video) + " \nSlices: " + dart.str(this.slices[$length]);
    }
  };
  (article.FullArticle.new = function(title, img, date, opts) {
    let video = opts && 'video' in opts ? opts.video : "";
    let slices = opts && 'slices' in opts ? opts.slices : C3 || CT.C3;
    this[title$0] = title;
    this[img$0] = img;
    this[date$] = date;
    this[video$] = video;
    this[slices$0] = slices;
    ;
  }).prototype = article.FullArticle.prototype;
  dart.addTypeTests(article.FullArticle);
  dart.addTypeCaches(article.FullArticle);
  dart.setMethodSignature(article.FullArticle, () => ({
    __proto__: dart.getMethods(article.FullArticle.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(article.FullArticle, L5);
  dart.setFieldSignature(article.FullArticle, () => ({
    __proto__: dart.getFields(article.FullArticle.__proto__),
    img: dart.finalFieldType(dart.legacy(core.String)),
    title: dart.finalFieldType(dart.legacy(core.String)),
    date: dart.finalFieldType(dart.legacy(core.DateTime)),
    video: dart.finalFieldType(dart.legacy(core.String)),
    slices: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(slices$.Slice))))
  }));
  dart.defineExtensionMethods(article.FullArticle, ['toString']);
  slices$.Slice = class Slice extends core.Object {};
  (slices$.Slice.new = function() {
    ;
  }).prototype = slices$.Slice.prototype;
  dart.addTypeTests(slices$.Slice);
  dart.addTypeCaches(slices$.Slice);
  dart.setLibraryUri(slices$.Slice, L6);
  var body$ = dart.privateName(text, "TextSlice.body");
  text.TextSlice = class TextSlice extends slices$.Slice {
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    static fromJson(j) {
      let body = JSArrayOfTextPartL().of([]);
      let i = 0;
      while (i < dart.notNull(j[$length])) {
        let t = j[$_get](i);
        if (t != null && dart.dsend(t, '_get', ["type"]) != null) {
          switch (dart.dsend(t, '_get', ["type"])) {
            case "list-item":
            {
              {
                let items = JSArrayOfTextPartL().of([]);
                while (i < dart.notNull(j[$length]) && dart.equals(dart.dsend(j[$_get](i), '_get', ["type"]), "list-item")) {
                  items[$add](new text_parts.TextPart.new(text_parts.getSpanParts(MapL().as(j[$_get](i))), StringL().as(dart.dsend(j[$_get](i), '_get', ["type"]))));
                  i = i + 1;
                }
                i = i - 1;
                body[$add](new text_parts.ListTextPart.new(items));
                break;
              }
            }
            case "o-list-item":
            {
              {
                let items = JSArrayOfTextPartL().of([]);
                while (i < dart.notNull(j[$length]) && dart.equals(dart.dsend(j[$_get](i), '_get', ["type"]), "o-list-item")) {
                  items[$add](new text_parts.TextPart.new(text_parts.getSpanParts(MapL().as(j[$_get](i))), StringL().as(dart.dsend(j[$_get](i), '_get', ["type"]))));
                  i = i + 1;
                }
                i = i - 1;
                body[$add](new text_parts.ListTextPart.ordered(items));
                break;
              }
            }
            case "image":
            {
              {
                core.print(t);
                body[$add](new text_parts.ImgTextPart.new(StringL().as(dart.dsend(t, '_get', ["url"])), StringL().as(dart.dsend(t, '_get', ["alt"]))));
                break;
              }
            }
            default:
            {
              body[$add](new text_parts.TextPart.new(text_parts.getSpanParts(MapL().as(t)), StringL().as(dart.dsend(t, '_get', ["type"]))));
            }
          }
        }
        i = i + 1;
      }
      return new text.TextSlice.new(body);
    }
  };
  (text.TextSlice.new = function(body) {
    this[body$] = body;
    ;
  }).prototype = text.TextSlice.prototype;
  dart.addTypeTests(text.TextSlice);
  dart.addTypeCaches(text.TextSlice);
  dart.setLibraryUri(text.TextSlice, L7);
  dart.setFieldSignature(text.TextSlice, () => ({
    __proto__: dart.getFields(text.TextSlice.__proto__),
    body: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(text_parts.TextPart))))
  }));
  var spans$ = dart.privateName(text_parts, "TextPart.spans");
  var type$ = dart.privateName(text_parts, "TextPart.type");
  var text$ = dart.privateName(text_parts, "TextPart.text");
  text_parts.TextPart = class TextPart extends core.Object {
    get spans() {
      return this[spans$];
    }
    set spans(value) {
      super.spans = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    toString() {
      return "spans: " + dart.str(this.spans) + "\ntype: " + dart.str(this.type) + "\ntext: " + dart.str(this.text) + "  \n  ";
    }
  };
  (text_parts.TextPart.new = function(spans, type, opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    this[spans$] = spans;
    this[type$] = type;
    this[text$] = text;
    ;
  }).prototype = text_parts.TextPart.prototype;
  (text_parts.TextPart.text = function(text, type) {
    this[text$] = text;
    this[type$] = type;
    this[spans$] = JSArrayOfTextPartL().of([]);
    ;
  }).prototype = text_parts.TextPart.prototype;
  dart.addTypeTests(text_parts.TextPart);
  dart.addTypeCaches(text_parts.TextPart);
  dart.setMethodSignature(text_parts.TextPart, () => ({
    __proto__: dart.getMethods(text_parts.TextPart.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(text_parts.TextPart, L8);
  dart.setFieldSignature(text_parts.TextPart, () => ({
    __proto__: dart.getFields(text_parts.TextPart.__proto__),
    spans: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(text_parts.TextPart)))),
    type: dart.finalFieldType(dart.legacy(core.String)),
    text: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(text_parts.TextPart, ['toString']);
  var link$ = dart.privateName(text_parts, "LinkTextPart.link");
  text_parts.LinkTextPart = class LinkTextPart extends text_parts.TextPart {
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
  };
  (text_parts.LinkTextPart.new = function(text, link) {
    this[link$] = link;
    text_parts.LinkTextPart.__proto__.new.call(this, JSArrayOfTextPartL().of([]), "hyperlink", {text: text});
    ;
  }).prototype = text_parts.LinkTextPart.prototype;
  dart.addTypeTests(text_parts.LinkTextPart);
  dart.addTypeCaches(text_parts.LinkTextPart);
  dart.setLibraryUri(text_parts.LinkTextPart, L8);
  dart.setFieldSignature(text_parts.LinkTextPart, () => ({
    __proto__: dart.getFields(text_parts.LinkTextPart.__proto__),
    link: dart.finalFieldType(dart.legacy(core.String))
  }));
  var url$0 = dart.privateName(text_parts, "ImgTextPart.url");
  text_parts.ImgTextPart = class ImgTextPart extends text_parts.TextPart {
    get url() {
      return this[url$0];
    }
    set url(value) {
      super.url = value;
    }
  };
  (text_parts.ImgTextPart.new = function(url, alt) {
    this[url$0] = url;
    text_parts.ImgTextPart.__proto__.new.call(this, JSArrayOfTextPartL().of([]), "image", {text: alt});
    ;
  }).prototype = text_parts.ImgTextPart.prototype;
  dart.addTypeTests(text_parts.ImgTextPart);
  dart.addTypeCaches(text_parts.ImgTextPart);
  dart.setLibraryUri(text_parts.ImgTextPart, L8);
  dart.setFieldSignature(text_parts.ImgTextPart, () => ({
    __proto__: dart.getFields(text_parts.ImgTextPart.__proto__),
    url: dart.finalFieldType(dart.legacy(core.String))
  }));
  var uid$ = dart.privateName(text_parts, "InternalLinkTextPart.uid");
  var type$0 = dart.privateName(text_parts, "InternalLinkTextPart.type");
  text_parts.InternalLinkTextPart = class InternalLinkTextPart extends text_parts.TextPart {
    get uid() {
      return this[uid$];
    }
    set uid(value) {
      super.uid = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
  };
  (text_parts.InternalLinkTextPart.new = function(text, uid, type) {
    this[uid$] = uid;
    this[type$0] = type;
    text_parts.InternalLinkTextPart.__proto__.new.call(this, JSArrayOfTextPartL().of([]), "link", {text: text});
    ;
  }).prototype = text_parts.InternalLinkTextPart.prototype;
  dart.addTypeTests(text_parts.InternalLinkTextPart);
  dart.addTypeCaches(text_parts.InternalLinkTextPart);
  dart.setLibraryUri(text_parts.InternalLinkTextPart, L8);
  dart.setFieldSignature(text_parts.InternalLinkTextPart, () => ({
    __proto__: dart.getFields(text_parts.InternalLinkTextPart.__proto__),
    uid: dart.finalFieldType(dart.legacy(core.String)),
    type: dart.finalFieldType(dart.legacy(core.String))
  }));
  var items$ = dart.privateName(text_parts, "ListTextPart.items");
  text_parts.ListTextPart = class ListTextPart extends text_parts.TextPart {
    get items() {
      return this[items$];
    }
    set items(value) {
      this[items$] = value;
    }
  };
  (text_parts.ListTextPart.new = function(items) {
    this[items$] = items;
    text_parts.ListTextPart.__proto__.new.call(this, JSArrayOfTextPartL().of([]), "list");
    ;
  }).prototype = text_parts.ListTextPart.prototype;
  (text_parts.ListTextPart.ordered = function(items) {
    this[items$] = items;
    text_parts.ListTextPart.__proto__.new.call(this, JSArrayOfTextPartL().of([]), "o-list");
    ;
  }).prototype = text_parts.ListTextPart.prototype;
  dart.addTypeTests(text_parts.ListTextPart);
  dart.addTypeCaches(text_parts.ListTextPart);
  dart.setLibraryUri(text_parts.ListTextPart, L8);
  dart.setFieldSignature(text_parts.ListTextPart, () => ({
    __proto__: dart.getFields(text_parts.ListTextPart.__proto__),
    items: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_parts.TextPart))))
  }));
  text_parts.getSpanParts = function getSpanParts(p) {
    let text = StringL().as(p[$_get]("text"));
    let ret = JSArrayOfTextPartL().of([]);
    let start = 0;
    if (p[$_get]("spans") != null && dart.dtest(dart.dsend(dart.dload(p[$_get]("spans"), 'length'), '>', [0]))) {
      for (let i = 0; i < dart.notNull(core.num.as(dart.dload(p[$_get]("spans"), 'length'))); i = i + 1) {
        let span = dart.dsend(p[$_get]("spans"), '_get', [i]);
        if (!dart.equals(dart.dsend(span, '_get', ["start"]), start)) {
          ret[$add](new text_parts.TextPart.text(text[$substring](start, intN().as(dart.dsend(span, '_get', ["start"]))), "text"));
        }
        if (dart.equals(dart.dsend(span, '_get', ["type"]), "hyperlink") && dart.dsend(span, '_get', ["data"]) != null) {
          if (dart.equals(dart.dsend(dart.dsend(span, '_get', ["data"]), '_get', ["link_type"]), "Document")) {
            ret[$add](new text_parts.InternalLinkTextPart.new(text[$substring](core.int.as(dart.dsend(span, '_get', ["start"])), intN().as(dart.dsend(span, '_get', ["end"]))), StringL().as(dart.dsend(dart.dsend(span, '_get', ["data"]), '_get', ["uid"])), StringL().as(dart.dsend(dart.dsend(span, '_get', ["data"]), '_get', ["type"]))));
          } else {
            ret[$add](new text_parts.LinkTextPart.new(text[$substring](core.int.as(dart.dsend(span, '_get', ["start"])), intN().as(dart.dsend(span, '_get', ["end"]))), StringL().as(dart.dsend(dart.dsend(span, '_get', ["data"]), '_get', ["url"]))));
          }
        } else {
          ret[$add](new text_parts.TextPart.text(text[$substring](core.int.as(dart.dsend(span, '_get', ["start"])), intN().as(dart.dsend(span, '_get', ["end"]))), StringL().as(dart.dsend(span, '_get', ["type"]))));
        }
        start = intL().as(dart.dsend(span, '_get', ["end"]));
      }
    }
    if (dart.notNull(start) < text.length) {
      ret[$add](new text_parts.TextPart.text(text[$substring](start, text.length), "text"));
    }
    return ret;
  };
  var title$1 = dart.privateName(slices$, "DownloadSlice.title");
  var link$0 = dart.privateName(slices$, "DownloadSlice.link");
  slices$.DownloadSlice = class DownloadSlice extends slices$.Slice {
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get link() {
      return this[link$0];
    }
    set link(value) {
      super.link = value;
    }
    static fromJson(j) {
      let p = j[$_get]("primary");
      if (j == null || p == null || dart.dsend(p, '_get', ["link"]) == null || dart.dsend(p, '_get', ["button_text"]) == null) {
        return null;
      }
      return new slices$.DownloadSlice.new(StringL().as(dart.dsend(dart.dsend(dart.dsend(p, '_get', ["button_text"]), '_get', [0]), '_get', ["text"])), StringL().as(dart.dsend(dart.dsend(p, '_get', ["link"]), '_get', ["url"])));
    }
  };
  (slices$.DownloadSlice.new = function(title, link) {
    this[title$1] = title;
    this[link$0] = link;
    ;
  }).prototype = slices$.DownloadSlice.prototype;
  dart.addTypeTests(slices$.DownloadSlice);
  dart.addTypeCaches(slices$.DownloadSlice);
  dart.setLibraryUri(slices$.DownloadSlice, L6);
  dart.setFieldSignature(slices$.DownloadSlice, () => ({
    __proto__: dart.getFields(slices$.DownloadSlice.__proto__),
    title: dart.finalFieldType(dart.legacy(core.String)),
    link: dart.finalFieldType(dart.legacy(core.String))
  }));
  var width$ = dart.privateName(slices$, "ImageSlice.width");
  var height$ = dart.privateName(slices$, "ImageSlice.height");
  var url$1 = dart.privateName(slices$, "ImageSlice.url");
  slices$.ImageSlice = class ImageSlice extends slices$.Slice {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get url() {
      return this[url$1];
    }
    set url(value) {
      super.url = value;
    }
    static fromJson(j) {
      if (j == null || j[$_get]("primary") == null || dart.dsend(j[$_get]("primary"), '_get', ["img"]) == null) {
        return null;
      }
      let img = MapL().as(dart.dsend(j[$_get]("primary"), '_get', ["img"]));
      if (img[$_get]("url") == null || img[$_get]("dimensions") == null) return null;
      return new slices$.ImageSlice.new(StringL().as(img[$_get]("url")), doubleL().as(dart.dsend(img[$_get]("dimensions"), '_get', ["width"])), doubleL().as(dart.dsend(img[$_get]("dimensions"), '_get', ["height"])));
    }
  };
  (slices$.ImageSlice.new = function(url, width, height) {
    this[url$1] = url;
    this[width$] = width;
    this[height$] = height;
    ;
  }).prototype = slices$.ImageSlice.prototype;
  dart.addTypeTests(slices$.ImageSlice);
  dart.addTypeCaches(slices$.ImageSlice);
  dart.setLibraryUri(slices$.ImageSlice, L6);
  dart.setFieldSignature(slices$.ImageSlice, () => ({
    __proto__: dart.getFields(slices$.ImageSlice.__proto__),
    width: dart.finalFieldType(dart.legacy(core.double)),
    height: dart.finalFieldType(dart.legacy(core.double)),
    url: dart.finalFieldType(dart.legacy(core.String))
  }));
  var recommended$ = dart.privateName(slices$, "RecommendedSlice.recommended");
  slices$.RecommendedSlice = class RecommendedSlice extends slices$.Slice {
    get recommended() {
      return this[recommended$];
    }
    set recommended(value) {
      super.recommended = value;
    }
    static fromJson(j) {
      let articles = JSArrayOfDocumentL().of([]);
      for (let t4 of j) {
        let m = MapL().as(t4);
        if (m[$_get]("recomm") != null) {
          let art = document.Document.fromJson(MapL().as(m[$_get]("recomm")));
          if (art != null) articles[$add](art);
        }
      }
      return dart.test(articles[$isNotEmpty]) ? new slices$.RecommendedSlice.new(articles) : null;
    }
  };
  (slices$.RecommendedSlice.new = function(recommended) {
    this[recommended$] = recommended;
    ;
  }).prototype = slices$.RecommendedSlice.prototype;
  dart.addTypeTests(slices$.RecommendedSlice);
  dart.addTypeCaches(slices$.RecommendedSlice);
  dart.setLibraryUri(slices$.RecommendedSlice, L6);
  dart.setFieldSignature(slices$.RecommendedSlice, () => ({
    __proto__: dart.getFields(slices$.RecommendedSlice.__proto__),
    recommended: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(document.Document))))
  }));
  var router$ = dart.privateName(grid, "DocumentGridComponent.router");
  var documents = dart.privateName(grid, "DocumentGridComponent.documents");
  var scroll = dart.privateName(grid, "DocumentGridComponent.scroll");
  grid.DocumentGridComponent = class DocumentGridComponent extends core.Object {
    get router() {
      return this[router$];
    }
    set router(value) {
      this[router$] = value;
    }
    get documents() {
      return this[documents];
    }
    set documents(value) {
      this[documents] = value;
    }
    get scroll() {
      return this[scroll];
    }
    set scroll(value) {
      this[scroll] = value;
    }
    getInternalLink(doc) {
      return doc.url[$startsWith]("http") ? null : doc.url;
    }
    openDocument(doc) {
      let isExternal = doc.url[$startsWith]("http");
      if (isExternal) {
        html.window[$location].href = doc.url;
      } else {
        this.router.navigateByUrl(doc.url);
      }
    }
  };
  (grid.DocumentGridComponent.new = function(router) {
    this[documents] = null;
    this[scroll] = null;
    this[router$] = router;
    ;
  }).prototype = grid.DocumentGridComponent.prototype;
  dart.addTypeTests(grid.DocumentGridComponent);
  dart.addTypeCaches(grid.DocumentGridComponent);
  dart.setMethodSignature(grid.DocumentGridComponent, () => ({
    __proto__: dart.getMethods(grid.DocumentGridComponent.__proto__),
    getInternalLink: dart.fnType(dart.legacy(core.String), [dart.legacy(document.Document)]),
    openDocument: dart.fnType(dart.void, [dart.legacy(document.Document)])
  }));
  dart.setLibraryUri(grid.DocumentGridComponent, L9);
  dart.setFieldSignature(grid.DocumentGridComponent, () => ({
    __proto__: dart.getFields(grid.DocumentGridComponent.__proto__),
    router: dart.fieldType(dart.legacy(router.Router)),
    documents: dart.fieldType(dart.legacy(core.List$(dart.legacy(document.Document)))),
    scroll: dart.fieldType(dart.legacy(core.bool))
  }));
  var doc$ = dart.privateName(doc, "DocumentPreviewComponent.doc");
  doc.DocumentPreviewComponent = class DocumentPreviewComponent extends core.Object {
    get doc() {
      return this[doc$];
    }
    set doc(value) {
      this[doc$] = value;
    }
  };
  (doc.DocumentPreviewComponent.new = function() {
    this[doc$] = null;
    ;
  }).prototype = doc.DocumentPreviewComponent.prototype;
  dart.addTypeTests(doc.DocumentPreviewComponent);
  dart.addTypeCaches(doc.DocumentPreviewComponent);
  dart.setLibraryUri(doc.DocumentPreviewComponent, L10);
  dart.setFieldSignature(doc.DocumentPreviewComponent, () => ({
    __proto__: dart.getFields(doc.DocumentPreviewComponent.__proto__),
    doc: dart.fieldType(dart.legacy(document.Document))
  }));
  dart.defineLazy(projects$46css$46shim, {
    /*projects$46css$46shim.styles*/get styles() {
      return ["fluid-spinner._ngcontent-%ID%{position:absolute;top:40%;left:50%}.container._ngcontent-%ID%{box-sizing:border-box;padding:32px;width:100%;min-height:100vh}.search._ngcontent-%ID%{padding:32px;display:flex;align-items:center}.search._ngcontent-%ID% input._ngcontent-%ID%{width:30%;height:40px}.search._ngcontent-%ID% fluid-icon._ngcontent-%ID%{color:var(--primary);margin-left:-48px;margin-right:24px}.search._ngcontent-%ID% .tags._ngcontent-%ID%{margin-left:8px;display:flex;align-items:center}.search._ngcontent-%ID% .tags._ngcontent-%ID% fluid-tag._ngcontent-%ID%{cursor:pointer;margin:0 4px}@media screen AND (max-width:960px){.search._ngcontent-%ID%{display:block}.search._ngcontent-%ID% input._ngcontent-%ID%{width:calc(100% - 32px);height:40px}}"];
    }
  }, true);
  var lang$0 = dart.privateName(header, "HeaderComponent.lang");
  var locales = dart.privateName(header, "HeaderComponent.locales");
  var selected = dart.privateName(header, "HeaderComponent.selected");
  header.HeaderComponent = class HeaderComponent extends core.Object {
    get lang() {
      return this[lang$0];
    }
    set lang(value) {
      this[lang$0] = value;
    }
    get locales() {
      return this[locales];
    }
    set locales(value) {
      super.locales = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    ngOnInit() {
      if (dart.test(html.window.localStorage[$containsKey]("lang"))) {
        this.lang.setLocale(html.window.localStorage[$_get]("lang"));
      } else {
        this.lang.setLocale(html.window.navigator[$language]);
        this.saveCurrent(this.lang.currentLocale);
      }
      this.selected = this.locales[$indexOf](this.lang.currentLocale);
    }
    changeLang(i) {
      this.lang.setLocale(this.locales[$_get](i));
      this.saveCurrent(this.locales[$_get](i));
    }
    saveCurrent(lang) {
      html.window.localStorage[$_set]("lang", lang);
    }
  };
  (header.HeaderComponent.new = function(lang) {
    this[selected] = null;
    this[lang$0] = lang;
    this[locales] = translation_service.TranslationService.supportedLocales;
    ;
  }).prototype = header.HeaderComponent.prototype;
  dart.addTypeTests(header.HeaderComponent);
  dart.addTypeCaches(header.HeaderComponent);
  header.HeaderComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(header.HeaderComponent, () => ({
    __proto__: dart.getMethods(header.HeaderComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    changeLang: dart.fnType(dart.void, [dart.legacy(core.int)]),
    saveCurrent: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(header.HeaderComponent, L11);
  dart.setFieldSignature(header.HeaderComponent, () => ({
    __proto__: dart.getFields(header.HeaderComponent.__proto__),
    lang: dart.fieldType(dart.legacy(translation_service.TranslationService)),
    locales: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    selected: dart.fieldType(dart.legacy(core.int))
  }));
  var slices$1 = dart.privateName(slices, "SlicesComponent.slices");
  slices.SlicesComponent = class SlicesComponent extends core.Object {
    get slices() {
      return this[slices$1];
    }
    set slices(value) {
      this[slices$1] = value;
    }
    checkType(T, val) {
      return dart.legacy(T).is(val);
    }
    checkDownload(val) {
      return DownloadSliceL().is(val) ? val : null;
    }
    checkImage(val) {
      return ImageSliceL().is(val) ? val : null;
    }
    checkText(val) {
      return TextSliceL().is(val) ? val : null;
    }
    checkRecommendations(val) {
      return RecommendedSliceL().is(val) ? val : null;
    }
    openDownloadLink(slice) {
      html.window[$location].href = slice.link;
    }
  };
  (slices.SlicesComponent.new = function() {
    this[slices$1] = null;
    ;
  }).prototype = slices.SlicesComponent.prototype;
  dart.addTypeTests(slices.SlicesComponent);
  dart.addTypeCaches(slices.SlicesComponent);
  dart.setMethodSignature(slices.SlicesComponent, () => ({
    __proto__: dart.getMethods(slices.SlicesComponent.__proto__),
    checkType: dart.gFnType(T => [dart.legacy(core.bool), [dart.dynamic]]),
    checkDownload: dart.fnType(dart.legacy(slices$.DownloadSlice), [dart.dynamic]),
    checkImage: dart.fnType(dart.legacy(slices$.ImageSlice), [dart.dynamic]),
    checkText: dart.fnType(dart.legacy(text.TextSlice), [dart.dynamic]),
    checkRecommendations: dart.fnType(dart.legacy(slices$.RecommendedSlice), [dart.dynamic]),
    openDownloadLink: dart.fnType(dart.dynamic, [dart.legacy(slices$.DownloadSlice)])
  }));
  dart.setLibraryUri(slices.SlicesComponent, L12);
  dart.setFieldSignature(slices.SlicesComponent, () => ({
    __proto__: dart.getFields(slices.SlicesComponent.__proto__),
    slices: dart.fieldType(dart.legacy(core.List$(dart.legacy(slices$.Slice))))
  }));
  var text$0 = dart.privateName(render, "TextRenderComponent.text");
  render.TextRenderComponent = class TextRenderComponent extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      this[text$0] = value;
    }
    getListText(p) {
      return ListTextPartL().is(p) ? p : null;
    }
    getLinkText(p) {
      return LinkTextPartL().is(p) ? p : null;
    }
    getImgText(p) {
      return ImgTextPartL().is(p) ? p : null;
    }
    getIntLinkText(p) {
      return InternalLinkTextPartL().is(p) ? p : null;
    }
    isRawText(p) {
      return p.text[$isNotEmpty];
    }
  };
  (render.TextRenderComponent.new = function() {
    this[text$0] = null;
    ;
  }).prototype = render.TextRenderComponent.prototype;
  dart.addTypeTests(render.TextRenderComponent);
  dart.addTypeCaches(render.TextRenderComponent);
  dart.setMethodSignature(render.TextRenderComponent, () => ({
    __proto__: dart.getMethods(render.TextRenderComponent.__proto__),
    getListText: dart.fnType(dart.legacy(text_parts.ListTextPart), [dart.legacy(text_parts.TextPart)]),
    getLinkText: dart.fnType(dart.legacy(text_parts.LinkTextPart), [dart.legacy(text_parts.TextPart)]),
    getImgText: dart.fnType(dart.legacy(text_parts.ImgTextPart), [dart.legacy(text_parts.TextPart)]),
    getIntLinkText: dart.fnType(dart.legacy(text_parts.InternalLinkTextPart), [dart.legacy(text_parts.TextPart)]),
    isRawText: dart.fnType(dart.legacy(core.bool), [dart.legacy(text_parts.TextPart)])
  }));
  dart.setLibraryUri(render.TextRenderComponent, L13);
  dart.setFieldSignature(render.TextRenderComponent, () => ({
    __proto__: dart.getFields(render.TextRenderComponent.__proto__),
    text: dart.fieldType(dart.legacy(core.List$(dart.legacy(text_parts.TextPart))))
  }));
  var _compView_0 = dart.privateName(item$46template, "_compView_0");
  var _ModalService_0_5 = dart.privateName(item$46template, "_ModalService_0_5");
  var _FluidModal_0_6 = dart.privateName(item$46template, "_FluidModal_0_6");
  var _appEl_2 = dart.privateName(item$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(item$46template, "_NgIf_2_9");
  var _appEl_5 = dart.privateName(item$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(item$46template, "_NgIf_5_9");
  var _appEl_8 = dart.privateName(item$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(item$46template, "_NgIf_8_9");
  var _appEl_11 = dart.privateName(item$46template, "_appEl_11");
  var _NgIf_11_9 = dart.privateName(item$46template, "_NgIf_11_9");
  var _appEl_14 = dart.privateName(item$46template, "_appEl_14");
  var _NgIf_14_9 = dart.privateName(item$46template, "_NgIf_14_9");
  var _compView_15 = dart.privateName(item$46template, "_compView_15");
  var _FluidButton_15_5 = dart.privateName(item$46template, "_FluidButton_15_5");
  var _expr_0 = dart.privateName(item$46template, "_expr_0");
  var _expr_1 = dart.privateName(item$46template, "_expr_1");
  var _pipe_ngtranslate_0 = dart.privateName(item$46template, "_pipe_ngtranslate_0");
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  item$46template.ViewItemSelectorComponent0 = class ViewItemSelectorComponent0 extends component_view.ComponentView$(dart.legacy(item$.ItemSelectorComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/objd/item_selector/item.dart" : null;
    }
    build() {
      let t5;
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      this[_compView_0] = new modal$46template.ViewFluidModal0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_ModalService_0_5] = new modal_service.ModalService.new();
      this[_FluidModal_0_6] = new modal.FluidModal.new(this[_ModalService_0_5], _el_0);
      let _text_1 = dom_helpers.createText(" ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C4 || CT.C4);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      let _el_3 = doc[$createElement]("br");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.createText(" ");
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C5 || CT.C5);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _el_6 = doc[$createElement]("br");
      this.addShimE(_el_6);
      let _text_7 = dom_helpers.createText(" ");
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8] = new view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C6 || CT.C6);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      let _el_9 = doc[$createElement]("br");
      this.addShimE(_el_9);
      let _text_10 = dom_helpers.createText(" ");
      let _anchor_11 = dom_helpers.createAnchor();
      this[_appEl_11] = new view_container.ViewContainer.new(11, 0, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C7 || CT.C7);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _el_12 = doc[$createElement]("br");
      this.addShimE(_el_12);
      let _text_13 = dom_helpers.createText(" ");
      let _anchor_14 = dom_helpers.createAnchor();
      this[_appEl_14] = new view_container.ViewContainer.new(14, 0, this, _anchor_14);
      let _TemplateRef_14_8 = new template_ref.TemplateRef.new(this[_appEl_14], C8 || CT.C8);
      this[_NgIf_14_9] = new ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      this[_compView_15] = new button$46template.ViewFluidButton0.new(this, 15);
      let _el_15 = this[_compView_15].rootElement;
      dom_helpers.setAttribute(_el_15, "fluidBtn", "");
      this.addShimC(_el_15);
      this[_FluidButton_15_5] = new button.FluidButton.new(_el_15);
      let _text_16 = dom_helpers.createText("Apply");
      this[_compView_15].createAndProject(this[_FluidButton_15_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_16])]));
      let _text_17 = dom_helpers.createText(" ");
      this[_compView_0].createAndProject(this[_FluidModal_0_6], JSArrayOfObjectL().of([(t5 = [this.projectedNodes[$_get](0)], (() => {
          t5[$addAll]([_text_1, this[_appEl_2], _el_3, _text_4, this[_appEl_5], _el_6, _text_7, this[_appEl_8], _el_9, _text_10, this[_appEl_11], _el_12, _text_13]);
          t5[$addAll](core.Iterable.as(this.projectedNodes[$_get](1)));
          t5[$addAll]([this[_appEl_14], _el_15, _text_17]);
          t5[$addAll](core.Iterable.as(this.projectedNodes[$_get](2)));
          return t5;
        })())]));
      _el_15[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'submit')));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && dart.notNull(nodeIndex) <= 17) {
        return this[_ModalService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let currVal_0 = _ctx.name;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "name", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_FluidModal_0_6].id = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this[_pipe_ngtranslate_0].transform("selectItem");
      if (dart.test(check_binding.checkBinding(this[_expr_1], currVal_1, "'selectItem' | ngtranslate", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_FluidModal_0_6].title = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidModal_0_6].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = _ctx.showId;
      this[_NgIf_5_9].ngIf = _ctx.showCount;
      this[_NgIf_8_9].ngIf = _ctx.showModel;
      this[_NgIf_11_9].ngIf = _ctx.showNbt;
      this[_NgIf_14_9].ngIf = _ctx.errorMsg != null;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_15_5].ngOnInit();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
      this[_compView_15].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_15].destroyInternalState();
      this[_FluidModal_0_6].ngOnDestroy();
    }
    static _debugClearComponentStyles() {
      item$46template.ViewItemSelectorComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = item$46template.ViewItemSelectorComponent0._componentStyles;
      if (styles == null) {
        item$46template.ViewItemSelectorComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(item$46template.styles$ItemSelectorComponent, item$46template.ViewItemSelectorComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C9 || CT.C9);
        }
      }
      this.componentStyles = styles;
    }
  };
  (item$46template.ViewItemSelectorComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ModalService_0_5] = null;
    this[_FluidModal_0_6] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_compView_15] = null;
    this[_FluidButton_15_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_pipe_ngtranslate_0] = null;
    item$46template.ViewItemSelectorComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("item-selector"));
  }).prototype = item$46template.ViewItemSelectorComponent0.prototype;
  dart.addTypeTests(item$46template.ViewItemSelectorComponent0);
  dart.addTypeCaches(item$46template.ViewItemSelectorComponent0);
  dart.setMethodSignature(item$46template.ViewItemSelectorComponent0, () => ({
    __proto__: dart.getMethods(item$46template.ViewItemSelectorComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template.ViewItemSelectorComponent0, L14);
  dart.setFieldSignature(item$46template.ViewItemSelectorComponent0, () => ({
    __proto__: dart.getFields(item$46template.ViewItemSelectorComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(modal$46template.ViewFluidModal0)),
    [_ModalService_0_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_FluidModal_0_6]: dart.fieldType(dart.legacy(modal.FluidModal)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_11]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_11_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_14]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_14_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_15]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_15_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe))
  }));
  dart.defineLazy(item$46template.ViewItemSelectorComponent0, {
    /*item$46template.ViewItemSelectorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _FluidInput_0_5 = dart.privateName(item$46template, "_FluidInput_0_5");
  var _DefaultValueAccessor_0_6 = dart.privateName(item$46template, "_DefaultValueAccessor_0_6");
  var _NgValueAccessor_0_7 = dart.privateName(item$46template, "_NgValueAccessor_0_7");
  var _NgModel_0_8 = dart.privateName(item$46template, "_NgModel_0_8");
  var C10;
  var _handleEvent_0 = dart.privateName(item$46template, "_handleEvent_0");
  var _handleEvent_1 = dart.privateName(item$46template, "_handleEvent_1");
  var OpaqueToken__uniqueName = dart.privateName(di_tokens, "OpaqueToken._uniqueName");
  var C11;
  item$46template._ViewItemSelectorComponent1 = class _ViewItemSelectorComponent1 extends embedded_view.EmbeddedView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      this[_compView_0] = new input$46template.ViewFluidInput0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "fluidInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "Item ID");
      dom_helpers.setAttribute(_el_0, "type", "text");
      this.addShimC(_el_0);
      this[_FluidInput_0_5] = new input.FluidInput.new(_el_0);
      this[_DefaultValueAccessor_0_6] = new default_value_accessor.DefaultValueAccessor.new(_el_0);
      this[_NgValueAccessor_0_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6]]);
      this[_NgModel_0_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7]);
      this[_compView_0].createAndProject(this[_FluidInput_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6], 'touchHandler')));
      _el_0[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      let subscription_0 = this[_NgModel_0_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.id;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "id", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_NgModel_0_8].model = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_NgModel_0_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_DefaultValueAccessor_0_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.id = StringL().as($36event);
    }
  };
  (item$46template._ViewItemSelectorComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidInput_0_5] = null;
    this[_DefaultValueAccessor_0_6] = null;
    this[_NgValueAccessor_0_7] = null;
    this[_NgModel_0_8] = null;
    this[_expr_0] = null;
    item$46template._ViewItemSelectorComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewItemSelectorComponent1.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponent1);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponent1);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponent1, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponent1, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponent1, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _NumberValueAccessor_0_7 = dart.privateName(item$46template, "_NumberValueAccessor_0_7");
  var _NgValueAccessor_0_8 = dart.privateName(item$46template, "_NgValueAccessor_0_8");
  var _NgModel_0_9 = dart.privateName(item$46template, "_NgModel_0_9");
  var _handleEvent_2 = dart.privateName(item$46template, "_handleEvent_2");
  var _handleEvent_3 = dart.privateName(item$46template, "_handleEvent_3");
  item$46template._ViewItemSelectorComponent2 = class _ViewItemSelectorComponent2 extends embedded_view.EmbeddedView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      this[_compView_0] = new input$46template.ViewFluidInput0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "fluidInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "Count");
      dom_helpers.setAttribute(_el_0, "type", "number");
      this.addShimC(_el_0);
      this[_FluidInput_0_5] = new input.FluidInput.new(_el_0);
      this[_DefaultValueAccessor_0_6] = new default_value_accessor.DefaultValueAccessor.new(_el_0);
      this[_NumberValueAccessor_0_7] = new number_value_accessor.NumberValueAccessor.new(_el_0);
      this[_NgValueAccessor_0_8] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6], this[_NumberValueAccessor_0_7]]);
      this[_NgModel_0_9] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_8]);
      this[_compView_0].createAndProject(this[_FluidInput_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      _el_0[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      _el_0[$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2)));
      let subscription_0 = this[_NgModel_0_9].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_3)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_8];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.count;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "count", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_NgModel_0_9].model = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_NgModel_0_9].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_9].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_DefaultValueAccessor_0_6].touchHandler();
      this[_NumberValueAccessor_0_7].touchHandler();
    }
    [_handleEvent_1]($36event) {
      this[_DefaultValueAccessor_0_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_0_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_2]($36event) {
      this[_NumberValueAccessor_0_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_3]($36event) {
      let _ctx = this.ctx;
      _ctx.count = intL().as($36event);
    }
  };
  (item$46template._ViewItemSelectorComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidInput_0_5] = null;
    this[_DefaultValueAccessor_0_6] = null;
    this[_NumberValueAccessor_0_7] = null;
    this[_NgValueAccessor_0_8] = null;
    this[_NgModel_0_9] = null;
    this[_expr_0] = null;
    item$46template._ViewItemSelectorComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewItemSelectorComponent2.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponent2);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponent2);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponent2, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponent2, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponent2, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_0_7]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_0_8]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_9]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  item$46template._ViewItemSelectorComponent3 = class _ViewItemSelectorComponent3 extends embedded_view.EmbeddedView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      this[_compView_0] = new input$46template.ViewFluidInput0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "fluidInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "Modelid");
      dom_helpers.setAttribute(_el_0, "type", "number");
      this.addShimC(_el_0);
      this[_FluidInput_0_5] = new input.FluidInput.new(_el_0);
      this[_DefaultValueAccessor_0_6] = new default_value_accessor.DefaultValueAccessor.new(_el_0);
      this[_NumberValueAccessor_0_7] = new number_value_accessor.NumberValueAccessor.new(_el_0);
      this[_NgValueAccessor_0_8] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6], this[_NumberValueAccessor_0_7]]);
      this[_NgModel_0_9] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_8]);
      this[_compView_0].createAndProject(this[_FluidInput_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      _el_0[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1)));
      _el_0[$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2)));
      let subscription_0 = this[_NgModel_0_9].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_3)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_8];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.model;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "model", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_NgModel_0_9].model = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_NgModel_0_9].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_9].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_DefaultValueAccessor_0_6].touchHandler();
      this[_NumberValueAccessor_0_7].touchHandler();
    }
    [_handleEvent_1]($36event) {
      this[_DefaultValueAccessor_0_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_0_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_2]($36event) {
      this[_NumberValueAccessor_0_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_3]($36event) {
      let _ctx = this.ctx;
      _ctx.model = intL().as($36event);
    }
  };
  (item$46template._ViewItemSelectorComponent3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidInput_0_5] = null;
    this[_DefaultValueAccessor_0_6] = null;
    this[_NumberValueAccessor_0_7] = null;
    this[_NgValueAccessor_0_8] = null;
    this[_NgModel_0_9] = null;
    this[_expr_0] = null;
    item$46template._ViewItemSelectorComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewItemSelectorComponent3.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponent3);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponent3);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponent3, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponent3.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponent3, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponent3, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponent3.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_0_7]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_0_8]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_9]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _FluidMultiInput_0_5 = dart.privateName(item$46template, "_FluidMultiInput_0_5");
  item$46template._ViewItemSelectorComponent4 = class _ViewItemSelectorComponent4 extends embedded_view.EmbeddedView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      this[_compView_0] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this[_compView_0].rootElement;
      dom_helpers.setAttribute(_el_0, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "Nbt tag");
      this.addShimC(_el_0);
      this[_FluidMultiInput_0_5] = new input$.FluidMultiInput.new(_el_0);
      this[_DefaultValueAccessor_0_6] = new default_value_accessor.DefaultValueAccessor.new(_el_0);
      this[_NgValueAccessor_0_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6]]);
      this[_NgModel_0_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7]);
      this[_compView_0].createAndProject(this[_FluidMultiInput_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6], 'touchHandler')));
      _el_0[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0)));
      let subscription_0 = this[_NgModel_0_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.nbt;
      if (dart.test(check_binding.checkBinding(this[_expr_0], currVal_0, "nbt", "package:stevertus/src/components/objd/item_selector/item.html"))) {
        this[_NgModel_0_8].model = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_NgModel_0_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handleEvent_0]($36event) {
      this[_DefaultValueAccessor_0_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1]($36event) {
      let _ctx = this.ctx;
      _ctx.nbt = StringL().as($36event);
    }
  };
  (item$46template._ViewItemSelectorComponent4.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FluidMultiInput_0_5] = null;
    this[_DefaultValueAccessor_0_6] = null;
    this[_NgValueAccessor_0_7] = null;
    this[_NgModel_0_8] = null;
    this[_expr_0] = null;
    item$46template._ViewItemSelectorComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewItemSelectorComponent4.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponent4);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponent4);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponent4, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponent4.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponent4, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponent4, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponent4.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5]: dart.fieldType(dart.legacy(input$.FluidMultiInput)),
    [_DefaultValueAccessor_0_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1 = dart.privateName(item$46template, "_textBinding_1");
  item$46template._ViewItemSelectorComponent5 = class _ViewItemSelectorComponent5 extends embedded_view.EmbeddedView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "err");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.errorMsg));
    }
  };
  (item$46template._ViewItemSelectorComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    item$46template._ViewItemSelectorComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = item$46template._ViewItemSelectorComponent5.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponent5);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponent5);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponent5, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponent5, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponent5, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  item$46template._ViewItemSelectorComponentHost0 = class _ViewItemSelectorComponentHost0 extends host_view.HostView$(dart.legacy(item$.ItemSelectorComponent)) {
    build() {
      this.componentView = new item$46template.ViewItemSelectorComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_ModalService_0_5] = new modal_service.ModalService.new();
      this.component = new item$.ItemSelectorComponent.new(this[_ModalService_0_5]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 0 === nodeIndex) {
        return this[_ModalService_0_5];
      }
      return notFoundResult;
    }
  };
  (item$46template._ViewItemSelectorComponentHost0.new = function() {
    this[_ModalService_0_5] = null;
    item$46template._ViewItemSelectorComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = item$46template._ViewItemSelectorComponentHost0.prototype;
  dart.addTypeTests(item$46template._ViewItemSelectorComponentHost0);
  dart.addTypeCaches(item$46template._ViewItemSelectorComponentHost0);
  dart.setMethodSignature(item$46template._ViewItemSelectorComponentHost0, () => ({
    __proto__: dart.getMethods(item$46template._ViewItemSelectorComponentHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(item$46template._ViewItemSelectorComponentHost0, L14);
  dart.setFieldSignature(item$46template._ViewItemSelectorComponentHost0, () => ({
    __proto__: dart.getFields(item$46template._ViewItemSelectorComponentHost0.__proto__),
    [_ModalService_0_5]: dart.fieldType(dart.legacy(modal_service.ModalService))
  }));
  var C12;
  item$46template.createItemSelectorComponentFactory = function createItemSelectorComponentFactory() {
    return new (ComponentFactoryOfItemSelectorComponentL()).new("item-selector", C12 || CT.C12);
  };
  item$46template.viewFactory_ItemSelectorComponent1 = function viewFactory_ItemSelectorComponent1(parentView, parentIndex) {
    return new item$46template._ViewItemSelectorComponent1.new(parentView, parentIndex);
  };
  item$46template.viewFactory_ItemSelectorComponent2 = function viewFactory_ItemSelectorComponent2(parentView, parentIndex) {
    return new item$46template._ViewItemSelectorComponent2.new(parentView, parentIndex);
  };
  item$46template.viewFactory_ItemSelectorComponent3 = function viewFactory_ItemSelectorComponent3(parentView, parentIndex) {
    return new item$46template._ViewItemSelectorComponent3.new(parentView, parentIndex);
  };
  item$46template.viewFactory_ItemSelectorComponent4 = function viewFactory_ItemSelectorComponent4(parentView, parentIndex) {
    return new item$46template._ViewItemSelectorComponent4.new(parentView, parentIndex);
  };
  item$46template.viewFactory_ItemSelectorComponent5 = function viewFactory_ItemSelectorComponent5(parentView, parentIndex) {
    return new item$46template._ViewItemSelectorComponent5.new(parentView, parentIndex);
  };
  item$46template.viewFactory_ItemSelectorComponentHost0 = function viewFactory_ItemSelectorComponentHost0() {
    return new item$46template._ViewItemSelectorComponentHost0.new();
  };
  item$46template.initReflector = function initReflector() {
    if (dart.test(item$46template._visited)) {
      return;
    }
    item$46template._visited = true;
  };
  dart.copyProperties(item$46template, {
    get ItemSelectorComponentNgFactory() {
      return item$46template._ItemSelectorComponentNgFactory;
    }
  });
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C13;
  dart.defineLazy(item$46template, {
    /*item$46template.styles$ItemSelectorComponent*/get styles$ItemSelectorComponent() {
      return [item$46css$46shim.styles];
    },
    /*item$46template._ItemSelectorComponentNgFactory*/get _ItemSelectorComponentNgFactory() {
      return C13 || CT.C13;
    },
    /*item$46template.styles$ItemSelectorComponentHost*/get styles$ItemSelectorComponentHost() {
      return C10 || CT.C10;
    },
    /*item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(item$46css$46shim, {
    /*item$46css$46shim.styles*/get styles() {
      return ["fluid-modal._ngcontent-%ID%{--inputBackground:#f8f8fc}fluid-modal._ngcontent-%ID% [fluidInput]._ngcontent-%ID%,fluid-modal._ngcontent-%ID% [fluidMultiInput]._ngcontent-%ID%{width:80%;margin:8px 0}.err._ngcontent-%ID%{color:var(--errorColor)}"];
    }
  }, true);
  var _compView_2 = dart.privateName(blocks$46template, "_compView_2");
  var _FluidList_2_5 = dart.privateName(blocks$46template, "_FluidList_2_5");
  var _compView_3 = dart.privateName(blocks$46template, "_compView_3");
  var _FluidListItem_3_5 = dart.privateName(blocks$46template, "_FluidListItem_3_5");
  var _compView_6 = dart.privateName(blocks$46template, "_compView_6");
  var _FluidIcon_6_5 = dart.privateName(blocks$46template, "_FluidIcon_6_5");
  var _appEl_7 = dart.privateName(blocks$46template, "_appEl_7");
  var _NgFor_7_9 = dart.privateName(blocks$46template, "_NgFor_7_9");
  var _appEl_8$ = dart.privateName(blocks$46template, "_appEl_8");
  var _NgIf_8_9$ = dart.privateName(blocks$46template, "_NgIf_8_9");
  var _appEl_9 = dart.privateName(blocks$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(blocks$46template, "_NgIf_9_9");
  var _compView_11 = dart.privateName(blocks$46template, "_compView_11");
  var _FluidButton_11_5 = dart.privateName(blocks$46template, "_FluidButton_11_5");
  var _appEl_14$ = dart.privateName(blocks$46template, "_appEl_14");
  var _NgIf_14_9$ = dart.privateName(blocks$46template, "_NgIf_14_9");
  var _compView_15$ = dart.privateName(blocks$46template, "_compView_15");
  var _ModalService_15_5 = dart.privateName(blocks$46template, "_ModalService_15_5");
  var _ItemSelectorComponent_15_6 = dart.privateName(blocks$46template, "_ItemSelectorComponent_15_6");
  var _compView_16 = dart.privateName(blocks$46template, "_compView_16");
  var _ModalService_16_5 = dart.privateName(blocks$46template, "_ModalService_16_5");
  var _ItemSelectorComponent_16_6 = dart.privateName(blocks$46template, "_ItemSelectorComponent_16_6");
  var _expr_2 = dart.privateName(blocks$46template, "_expr_2");
  var _expr_4 = dart.privateName(blocks$46template, "_expr_4");
  var _expr_6 = dart.privateName(blocks$46template, "_expr_6");
  var C14;
  var C15;
  var C16;
  var C17;
  var _handleEvent_0$ = dart.privateName(blocks$46template, "_handleEvent_0");
  var _handleEvent_1$ = dart.privateName(blocks$46template, "_handleEvent_1");
  var C18;
  var modalService$0 = dart.privateName(blocks, "BlocksToolPage.modalService");
  var blocks$ = dart.privateName(blocks, "BlocksToolPage.blocks");
  var selectedIndex = dart.privateName(blocks, "BlocksToolPage.selectedIndex");
  var selected$ = dart.privateName(blocks, "BlocksToolPage.selected");
  var errorText$ = dart.privateName(blocks, "BlocksToolPage.errorText");
  var generatedFiles$ = dart.privateName(blocks, "BlocksToolPage.generatedFiles");
  blocks.BlocksToolPage = class BlocksToolPage extends core.Object {
    get modalService() {
      return this[modalService$0];
    }
    set modalService(value) {
      super.modalService = value;
    }
    get blocks() {
      return this[blocks$];
    }
    set blocks(value) {
      this[blocks$] = value;
    }
    get selectedIndex() {
      return this[selectedIndex];
    }
    set selectedIndex(value) {
      this[selectedIndex] = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      this[selected$] = value;
    }
    get errorText() {
      return this[errorText$];
    }
    set errorText(value) {
      this[errorText$] = value;
    }
    get generatedFiles() {
      return this[generatedFiles$];
    }
    set generatedFiles(value) {
      this[generatedFiles$] = value;
    }
    get id() {
      return this.selected.id != null && this.selected.id[$isNotEmpty] ? this.selected.id : this.selected.name[$toLowerCase]()[$replaceAll](core.RegExp.new("\\s"), "_");
    }
    set id(s) {
      return s == this.id ? null : this.selected.id = s;
    }
    set blockid(s) {
      return this.selected.block = new block.Block.new(s);
    }
    get blockid() {
      return dart.toString(this.selected.block);
    }
    set tags(s) {
      return this.selected.tags = s[$split](" ");
    }
    get tags() {
      return this.selected.tags[$join](" ");
    }
    ngOnInit() {
      this.add();
    }
    add() {
      this.selectedIndex = this.blocks[$length];
      let b = new custom_block.CustomBlock.new("", new item.Item.new("chicken_spawn_egg"), {block: new block.Block.new(""), name: "Untitled", generatePack: false});
      this.blocks[$add](b);
      this.selected = b;
    }
    changeSelected(i) {
      let t5;
      t5 = this.selected;
      t5 == null ? null : t5.id = this.id;
      if (dart.notNull(this.blocks[$length]) > dart.notNull(i)) {
        this.selectedIndex = i;
        this.selected = this.blocks[$_get](i);
      }
    }
    generate() {
      let t5;
      t5 = this.selected;
      t5 == null ? null : t5.id = this.id;
      this.errorText = null;
      try {
        this.generatedFiles = build.getAllFiles(new project.Project.new({name: "", generate: new pack.Pack.new({name: "customblocks", modules: this.blocks})}));
      } catch (e) {
        let err = dart.getThrown(e);
        this.errorText = dart.toString(err);
        core.print(err);
        this.generatedFiles = new (IdentityMapOfStringL$StringL()).new();
      }
    }
    download() {
      this.generate();
      if (dart.test(this.generatedFiles[$isNotEmpty]) && this.errorText == null) {
        build.saveAsZip(this.generatedFiles, "Custom Blocks Generated by Stevertus.zip");
      }
    }
  };
  (blocks.BlocksToolPage.new = function(modalService) {
    this[blocks$] = JSArrayOfCustomBlockL().of([]);
    this[selectedIndex] = null;
    this[selected$] = null;
    this[errorText$] = null;
    this[generatedFiles$] = null;
    this[modalService$0] = modalService;
    ;
  }).prototype = blocks.BlocksToolPage.prototype;
  dart.addTypeTests(blocks.BlocksToolPage);
  dart.addTypeCaches(blocks.BlocksToolPage);
  blocks.BlocksToolPage[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(blocks.BlocksToolPage, () => ({
    __proto__: dart.getMethods(blocks.BlocksToolPage.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, []),
    changeSelected: dart.fnType(dart.void, [dart.legacy(core.int)]),
    generate: dart.fnType(dart.void, []),
    download: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(blocks.BlocksToolPage, () => ({
    __proto__: dart.getGetters(blocks.BlocksToolPage.__proto__),
    id: dart.legacy(core.String),
    blockid: dart.legacy(core.String),
    tags: dart.legacy(core.String)
  }));
  dart.setSetterSignature(blocks.BlocksToolPage, () => ({
    __proto__: dart.getSetters(blocks.BlocksToolPage.__proto__),
    id: dart.legacy(core.String),
    blockid: dart.legacy(core.String),
    tags: dart.legacy(core.String)
  }));
  dart.setLibraryUri(blocks.BlocksToolPage, L15);
  dart.setFieldSignature(blocks.BlocksToolPage, () => ({
    __proto__: dart.getFields(blocks.BlocksToolPage.__proto__),
    modalService: dart.finalFieldType(dart.legacy(modal_service.ModalService)),
    blocks: dart.fieldType(dart.legacy(core.List$(dart.legacy(custom_block.CustomBlock)))),
    selectedIndex: dart.fieldType(dart.legacy(core.int)),
    selected: dart.fieldType(dart.legacy(custom_block.CustomBlock)),
    errorText: dart.fieldType(dart.legacy(core.String)),
    generatedFiles: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))
  }));
  blocks$46template.ViewBlocksToolPage0 = class ViewBlocksToolPage0 extends component_view.ComponentView$(dart.legacy(blocks.BlocksToolPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/tools/blocks/blocks.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "split");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "list");
      this.addShimC(_el_1);
      this[_compView_2] = new list$46template.ViewFluidList0.new(this, 2);
      let _el_2 = this[_compView_2].rootElement;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_FluidList_2_5] = new list.FluidList.new();
      this[_compView_3] = new list_item$46template.ViewFluidListItem0.new(this, 3);
      let _el_3 = this[_compView_3].rootElement;
      dom_helpers.setAttribute(_el_3, "clickable", "");
      this.addShimC(_el_3);
      this[_FluidListItem_3_5] = new list_item.FluidListItem.new();
      let _el_4 = doc[$createElement]("b");
      this.addShimE(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, "Add Block");
      this[_compView_6] = new icon$46template.ViewFluidIcon0.new(this, 6);
      let _el_6 = this[_compView_6].rootElement;
      dom_helpers.setAttribute(_el_6, "icon", "plus");
      dom_helpers.setAttribute(_el_6, "trailing", "");
      this.addShimC(_el_6);
      this[_FluidIcon_6_5] = new icon.FluidIcon.new(_el_6);
      this[_compView_6].createAndProject(this[_FluidIcon_6_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_compView_3].createAndProject(this[_FluidListItem_3_5], JSArrayOfObjectL().of([C10 || CT.C10, JSArrayOfElementL().of([_el_4]), JSArrayOfHtmlElementL().of([_el_6])]));
      let _anchor_7 = dom_helpers.createAnchor();
      this[_appEl_7] = new view_container.ViewContainer.new(7, 2, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C14 || CT.C14);
      this[_NgFor_7_9] = new ng_for.NgFor.new(this[_appEl_7], _TemplateRef_7_8);
      this[_compView_2].createAndProject(this[_FluidList_2_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_el_3, this[_appEl_7]])]));
      let _anchor_8 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_8$] = new view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8$], C15 || CT.C15);
      this[_NgIf_8_9$] = new ng_if.NgIf.new(this[_appEl_8$], _TemplateRef_8_8);
      let _anchor_9 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 0, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C16 || CT.C16);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _el_10 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_10, "id", "center");
      dom_helpers.setAttribute(_el_10, "style", "min-height: 300px");
      this.addShimC(_el_10);
      this[_compView_11] = new button$46template.ViewFluidButton0.new(this, 11);
      let _el_11 = this[_compView_11].rootElement;
      _el_10[$append](_el_11);
      this.updateChildClass(_el_11, "full");
      dom_helpers.setAttribute(_el_11, "fluidBtn", "");
      dom_helpers.setAttribute(_el_11, "highlight", "");
      this.addShimC(_el_11);
      this[_FluidButton_11_5] = new button.FluidButton.new(_el_11);
      let _text_12 = dom_helpers.createText("Download Datapack");
      this[_compView_11].createAndProject(this[_FluidButton_11_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_12])]));
      let _text_13 = dom_helpers.appendText(_el_10, " ");
      let _anchor_14 = dom_helpers.appendAnchor(_el_10);
      this[_appEl_14$] = new view_container.ViewContainer.new(14, 10, this, _anchor_14);
      let _TemplateRef_14_8 = new template_ref.TemplateRef.new(this[_appEl_14$], C17 || CT.C17);
      this[_NgIf_14_9$] = new ng_if.NgIf.new(this[_appEl_14$], _TemplateRef_14_8);
      this[_compView_15$] = new item$46template.ViewItemSelectorComponent0.new(this, 15);
      let _el_15 = this[_compView_15$].rootElement;
      parentRenderNode[$append](_el_15);
      dom_helpers.setAttribute(_el_15, "name", "blocks_item");
      this.addShimC(_el_15);
      this[_ModalService_15_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_15_6] = new item$.ItemSelectorComponent.new(this[_ModalService_15_5]);
      this[_compView_15$].createAndProject(this[_ItemSelectorComponent_15_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      this[_compView_16] = new item$46template.ViewItemSelectorComponent0.new(this, 16);
      let _el_16 = this[_compView_16].rootElement;
      parentRenderNode[$append](_el_16);
      dom_helpers.setAttribute(_el_16, "name", "blocks_block");
      this.addShimC(_el_16);
      this[_ModalService_16_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_16_6] = new item$.ItemSelectorComponent.new(this[_ModalService_16_5]);
      this[_compView_16].createAndProject(this[_ItemSelectorComponent_16_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      _el_3[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'add')));
      _el_11[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'download')));
      let subscription_0 = this[_ItemSelectorComponent_15_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_0$)));
      let subscription_1 = this[_ItemSelectorComponent_16_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_1$)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 15 === nodeIndex) {
        return this[_ModalService_15_5];
      }
      if (token === dart.wrapType(ModalServiceL()) && 16 === nodeIndex) {
        return this[_ModalService_16_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidListItem_3_5].clickable = true;
        this[_FluidIcon_6_5].icon = "plus";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_6_5].ngOnInit();
      }
      let currVal_2 = _ctx.blocks;
      if (dart.test(check_binding.checkBinding(this[_expr_2], currVal_2, "blocks", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_NgFor_7_9].ngForOf = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_7_9].ngDoCheck();
      }
      this[_NgIf_8_9$].ngIf = _ctx.selected == null;
      this[_NgIf_9_9].ngIf = _ctx.selected != null;
      if (dart.test(firstCheck)) {
        this[_FluidButton_11_5].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_11_5].ngOnInit();
      }
      this[_NgIf_14_9$].ngIf = _ctx.errorText != null;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_15_6].name = "blocks_item";
        changed = true;
      }
      let currVal_4 = _ctx.selected.item;
      if (dart.test(check_binding.checkBinding(this[_expr_4], currVal_4, "selected.item", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_ItemSelectorComponent_15_6].item = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_ItemSelectorComponent_15_6].ngAfterChanges();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_16_6].name = "blocks_block";
        changed = true;
      }
      let currVal_6 = _ctx.selected.blockModel;
      if (dart.test(check_binding.checkBinding(this[_expr_6], currVal_6, "selected.blockModel", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_ItemSelectorComponent_16_6].item = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_ItemSelectorComponent_16_6].ngAfterChanges();
      }
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8$].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_14$].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_11].detectChanges();
      this[_compView_15$].detectChanges();
      this[_compView_16].detectChanges();
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8$].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_14$].destroyNestedViews();
      this[_compView_2].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_11].destroyInternalState();
      this[_compView_15$].destroyInternalState();
      this[_compView_16].destroyInternalState();
    }
    [_handleEvent_0$]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.item = ItemL().as($36event);
    }
    [_handleEvent_1$]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.blockModel = ItemL().as($36event);
    }
    static _debugClearComponentStyles() {
      blocks$46template.ViewBlocksToolPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = blocks$46template.ViewBlocksToolPage0._componentStyles;
      if (styles == null) {
        blocks$46template.ViewBlocksToolPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(blocks$46template.styles$BlocksToolPage, blocks$46template.ViewBlocksToolPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C18 || CT.C18);
        }
      }
      this.componentStyles = styles;
    }
  };
  (blocks$46template.ViewBlocksToolPage0.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_FluidList_2_5] = null;
    this[_compView_3] = null;
    this[_FluidListItem_3_5] = null;
    this[_compView_6] = null;
    this[_FluidIcon_6_5] = null;
    this[_appEl_7] = null;
    this[_NgFor_7_9] = null;
    this[_appEl_8$] = null;
    this[_NgIf_8_9$] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_compView_11] = null;
    this[_FluidButton_11_5] = null;
    this[_appEl_14$] = null;
    this[_NgIf_14_9$] = null;
    this[_compView_15$] = null;
    this[_ModalService_15_5] = null;
    this[_ItemSelectorComponent_15_6] = null;
    this[_compView_16] = null;
    this[_ModalService_16_5] = null;
    this[_ItemSelectorComponent_16_6] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    blocks$46template.ViewBlocksToolPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("blocks_tool"));
  }).prototype = blocks$46template.ViewBlocksToolPage0.prototype;
  dart.addTypeTests(blocks$46template.ViewBlocksToolPage0);
  dart.addTypeCaches(blocks$46template.ViewBlocksToolPage0);
  dart.setMethodSignature(blocks$46template.ViewBlocksToolPage0, () => ({
    __proto__: dart.getMethods(blocks$46template.ViewBlocksToolPage0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(blocks$46template.ViewBlocksToolPage0, L16);
  dart.setFieldSignature(blocks$46template.ViewBlocksToolPage0, () => ({
    __proto__: dart.getFields(blocks$46template.ViewBlocksToolPage0.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(list$46template.ViewFluidList0)),
    [_FluidList_2_5]: dart.fieldType(dart.legacy(list.FluidList)),
    [_compView_3]: dart.fieldType(dart.legacy(list_item$46template.ViewFluidListItem0)),
    [_FluidListItem_3_5]: dart.fieldType(dart.legacy(list_item.FluidListItem)),
    [_compView_6]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_6_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_7_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_appEl_8$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_11]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_11_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_appEl_14$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_14_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_15$]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_15_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_15_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_compView_16]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_16_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_16_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(blocks$46template.ViewBlocksToolPage0, {
    /*blocks$46template.ViewBlocksToolPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_2 = dart.privateName(blocks$46template, "_textBinding_2");
  var _compView_1 = dart.privateName(blocks$46template, "_compView_1");
  var _FluidListItem_1_5 = dart.privateName(blocks$46template, "_FluidListItem_1_5");
  var _expr_1$ = dart.privateName(blocks$46template, "_expr_1");
  blocks$46template._ViewBlocksToolPage1 = class _ViewBlocksToolPage1 extends embedded_view.EmbeddedView$(dart.legacy(blocks.BlocksToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new list_item$46template.ViewFluidListItem0.new(this, 1);
      let _el_1 = this[_compView_1].rootElement;
      _el_0[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "clickable", "");
      this.addShimC(_el_1);
      this[_FluidListItem_1_5] = new list_item.FluidListItem.new();
      this[_compView_1].createAndProject(this[_FluidListItem_1_5], JSArrayOfObjectL().of([C10 || CT.C10, JSArrayOfTextL().of([this[_textBinding_2].element]), C10 || CT.C10]));
      _el_1[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let local_block = optimizations.unsafeCast(CustomBlockL(), this.locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_FluidListItem_1_5].clickable = true;
      }
      let currVal_1 = _ctx.selectedIndex == local_i;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "selectedIndex == i", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_FluidListItem_1_5].selected = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      this[_textBinding_2].updateText(interpolate.interpolateString0(local_block.name));
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
    [_handleEvent_0$]($36event) {
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.changeSelected(local_i);
    }
  };
  (blocks$46template._ViewBlocksToolPage1.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_compView_1] = null;
    this[_FluidListItem_1_5] = null;
    this[_expr_1$] = null;
    blocks$46template._ViewBlocksToolPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = blocks$46template._ViewBlocksToolPage1.prototype;
  dart.addTypeTests(blocks$46template._ViewBlocksToolPage1);
  dart.addTypeCaches(blocks$46template._ViewBlocksToolPage1);
  dart.setMethodSignature(blocks$46template._ViewBlocksToolPage1, () => ({
    __proto__: dart.getMethods(blocks$46template._ViewBlocksToolPage1.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(blocks$46template._ViewBlocksToolPage1, L16);
  dart.setFieldSignature(blocks$46template._ViewBlocksToolPage1, () => ({
    __proto__: dart.getFields(blocks$46template._ViewBlocksToolPage1.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_1]: dart.fieldType(dart.legacy(list_item$46template.ViewFluidListItem0)),
    [_FluidListItem_1_5]: dart.fieldType(dart.legacy(list_item.FluidListItem)),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  blocks$46template._ViewBlocksToolPage2 = class _ViewBlocksToolPage2 extends embedded_view.EmbeddedView$(dart.legacy(blocks.BlocksToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_0, "style", "position: relative");
      this.addShimC(HtmlElementL().as(_el_0));
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h3");
      this.updateChildClass(HtmlElementL().as(_el_1), "centered");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "Please select a block");
      this.initRootNode(_el_0);
    }
  };
  (blocks$46template._ViewBlocksToolPage2.new = function(parentView, parentIndex) {
    blocks$46template._ViewBlocksToolPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = blocks$46template._ViewBlocksToolPage2.prototype;
  dart.addTypeTests(blocks$46template._ViewBlocksToolPage2);
  dart.addTypeCaches(blocks$46template._ViewBlocksToolPage2);
  dart.setMethodSignature(blocks$46template._ViewBlocksToolPage2, () => ({
    __proto__: dart.getMethods(blocks$46template._ViewBlocksToolPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(blocks$46template._ViewBlocksToolPage2, L16);
  var _textBinding_3 = dart.privateName(blocks$46template, "_textBinding_3");
  var _compView_0$ = dart.privateName(blocks$46template, "_compView_0");
  var _FluidCard_0_5 = dart.privateName(blocks$46template, "_FluidCard_0_5");
  var _compView_4 = dart.privateName(blocks$46template, "_compView_4");
  var _FluidInput_4_5 = dart.privateName(blocks$46template, "_FluidInput_4_5");
  var _DefaultValueAccessor_4_6 = dart.privateName(blocks$46template, "_DefaultValueAccessor_4_6");
  var _NgValueAccessor_4_7 = dart.privateName(blocks$46template, "_NgValueAccessor_4_7");
  var _NgModel_4_8 = dart.privateName(blocks$46template, "_NgModel_4_8");
  var _compView_7 = dart.privateName(blocks$46template, "_compView_7");
  var _FluidInput_7_5 = dart.privateName(blocks$46template, "_FluidInput_7_5");
  var _DefaultValueAccessor_7_6 = dart.privateName(blocks$46template, "_DefaultValueAccessor_7_6");
  var _NgValueAccessor_7_7 = dart.privateName(blocks$46template, "_NgValueAccessor_7_7");
  var _NgModel_7_8 = dart.privateName(blocks$46template, "_NgModel_7_8");
  var _compView_10 = dart.privateName(blocks$46template, "_compView_10");
  var _FluidButton_10_5 = dart.privateName(blocks$46template, "_FluidButton_10_5");
  var _compView_12 = dart.privateName(blocks$46template, "_compView_12");
  var _FluidCheckbox_12_5 = dart.privateName(blocks$46template, "_FluidCheckbox_12_5");
  var _compView_13 = dart.privateName(blocks$46template, "_compView_13");
  var _FluidCheckbox_13_5 = dart.privateName(blocks$46template, "_FluidCheckbox_13_5");
  var _compView_14 = dart.privateName(blocks$46template, "_compView_14");
  var _FluidCheckbox_14_5 = dart.privateName(blocks$46template, "_FluidCheckbox_14_5");
  var _FluidButton_15_5$ = dart.privateName(blocks$46template, "_FluidButton_15_5");
  var _compView_19 = dart.privateName(blocks$46template, "_compView_19");
  var _FluidInput_19_5 = dart.privateName(blocks$46template, "_FluidInput_19_5");
  var _DefaultValueAccessor_19_6 = dart.privateName(blocks$46template, "_DefaultValueAccessor_19_6");
  var _NgValueAccessor_19_7 = dart.privateName(blocks$46template, "_NgValueAccessor_19_7");
  var _NgModel_19_8 = dart.privateName(blocks$46template, "_NgModel_19_8");
  var _compView_22 = dart.privateName(blocks$46template, "_compView_22");
  var _FluidInput_22_5 = dart.privateName(blocks$46template, "_FluidInput_22_5");
  var _DefaultValueAccessor_22_6 = dart.privateName(blocks$46template, "_DefaultValueAccessor_22_6");
  var _NgValueAccessor_22_7 = dart.privateName(blocks$46template, "_NgValueAccessor_22_7");
  var _NgModel_22_8 = dart.privateName(blocks$46template, "_NgModel_22_8");
  var _expr_0$ = dart.privateName(blocks$46template, "_expr_0");
  var _expr_5 = dart.privateName(blocks$46template, "_expr_5");
  var _expr_7 = dart.privateName(blocks$46template, "_expr_7");
  var _expr_9 = dart.privateName(blocks$46template, "_expr_9");
  var _expr_12 = dart.privateName(blocks$46template, "_expr_12");
  var _expr_13 = dart.privateName(blocks$46template, "_expr_13");
  var _handleEvent_2$ = dart.privateName(blocks$46template, "_handleEvent_2");
  var _handleEvent_3$ = dart.privateName(blocks$46template, "_handleEvent_3");
  var _handleEvent_4 = dart.privateName(blocks$46template, "_handleEvent_4");
  var _handleEvent_5 = dart.privateName(blocks$46template, "_handleEvent_5");
  var _handleEvent_6 = dart.privateName(blocks$46template, "_handleEvent_6");
  var _handleEvent_7 = dart.privateName(blocks$46template, "_handleEvent_7");
  var _handleEvent_8 = dart.privateName(blocks$46template, "_handleEvent_8");
  var _handleEvent_9 = dart.privateName(blocks$46template, "_handleEvent_9");
  var _handleEvent_10 = dart.privateName(blocks$46template, "_handleEvent_10");
  var _handleEvent_11 = dart.privateName(blocks$46template, "_handleEvent_11");
  var _handleEvent_12 = dart.privateName(blocks$46template, "_handleEvent_12");
  blocks$46template._ViewBlocksToolPage3 = class _ViewBlocksToolPage3 extends embedded_view.EmbeddedView$(dart.legacy(blocks.BlocksToolPage)) {
    build() {
      this[_compView_0$] = new card$46template.ViewFluidCard0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClassNonHtml(_el_0, "card blockSettings");
      this.addShimC(_el_0);
      this[_FluidCard_0_5] = new card.FluidCard.new(_el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("h2");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "Editing ");
      _el_1[$append](this[_textBinding_3].element);
      this[_compView_4] = new input$46template.ViewFluidInput0.new(this, 4);
      let _el_4 = this[_compView_4].rootElement;
      dom_helpers.setAttribute(_el_4, "fluidInput", "");
      dom_helpers.setAttribute(_el_4, "placeholder", "Display Name");
      this.addShimC(_el_4);
      this[_FluidInput_4_5] = new input.FluidInput.new(_el_4);
      this[_DefaultValueAccessor_4_6] = new default_value_accessor.DefaultValueAccessor.new(_el_4);
      this[_NgValueAccessor_4_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_4_6]]);
      this[_NgModel_4_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_4_7]);
      this[_compView_4].createAndProject(this[_FluidInput_4_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_5 = doc[$createElement]("br");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.createText(" ");
      this[_compView_7] = new input$46template.ViewFluidInput0.new(this, 7);
      let _el_7 = this[_compView_7].rootElement;
      dom_helpers.setAttribute(_el_7, "fluidInput", "");
      dom_helpers.setAttribute(_el_7, "placeholder", "Customblock ID");
      this.addShimC(_el_7);
      this[_FluidInput_7_5] = new input.FluidInput.new(_el_7);
      this[_DefaultValueAccessor_7_6] = new default_value_accessor.DefaultValueAccessor.new(_el_7);
      this[_NgValueAccessor_7_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_7_6]]);
      this[_NgModel_7_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_7_7]);
      this[_compView_7].createAndProject(this[_FluidInput_7_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_8 = doc[$createElement]("br");
      this.addShimE(_el_8);
      let _text_9 = dom_helpers.createText(" ");
      this[_compView_10] = new button$46template.ViewFluidButton0.new(this, 10);
      let _el_10 = this[_compView_10].rootElement;
      dom_helpers.setAttribute(_el_10, "fluidBtn", "");
      dom_helpers.setAttribute(_el_10, "secondary", "");
      dom_helpers.setAttribute(_el_10, "small", "");
      this.addShimC(_el_10);
      this[_FluidButton_10_5] = new button.FluidButton.new(_el_10);
      let _text_11 = dom_helpers.createText("Select Item");
      this[_compView_10].createAndProject(this[_FluidButton_10_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_11])]));
      this[_compView_12] = new checkbox$46template.ViewFluidCheckbox0.new(this, 12);
      let _el_12 = this[_compView_12].rootElement;
      dom_helpers.setAttribute(_el_12, "label", "Generate seperate Pack");
      this.addShimC(_el_12);
      this[_FluidCheckbox_12_5] = new checkbox.FluidCheckbox.new();
      this[_compView_12].create(this[_FluidCheckbox_12_5]);
      this[_compView_13] = new checkbox$46template.ViewFluidCheckbox0.new(this, 13);
      let _el_13 = this[_compView_13].rootElement;
      dom_helpers.setAttribute(_el_13, "label", "Use an ItemFrame as display");
      this.addShimC(_el_13);
      this[_FluidCheckbox_13_5] = new checkbox.FluidCheckbox.new();
      this[_compView_13].create(this[_FluidCheckbox_13_5]);
      this[_compView_14] = new checkbox$46template.ViewFluidCheckbox0.new(this, 14);
      let _el_14 = this[_compView_14].rootElement;
      dom_helpers.setAttribute(_el_14, "label", "Set the entity on fire");
      this.addShimC(_el_14);
      this[_FluidCheckbox_14_5] = new checkbox.FluidCheckbox.new();
      this[_compView_14].create(this[_FluidCheckbox_14_5]);
      this[_compView_15$] = new button$46template.ViewFluidButton0.new(this, 15);
      let _el_15 = this[_compView_15$].rootElement;
      dom_helpers.setAttribute(_el_15, "fluidBtn", "");
      dom_helpers.setAttribute(_el_15, "secondary", "");
      dom_helpers.setAttribute(_el_15, "small", "");
      this.addShimC(_el_15);
      this[_FluidButton_15_5$] = new button.FluidButton.new(_el_15);
      let _text_16 = dom_helpers.createText("Select Custom Blockmodel");
      this[_compView_15$].createAndProject(this[_FluidButton_15_5$], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_16])]));
      let _el_17 = doc[$createElement]("br");
      this.addShimE(_el_17);
      let _text_18 = dom_helpers.createText(" ");
      this[_compView_19] = new input$46template.ViewFluidInput0.new(this, 19);
      let _el_19 = this[_compView_19].rootElement;
      dom_helpers.setAttribute(_el_19, "fluidInput", "");
      dom_helpers.setAttribute(_el_19, "placeholder", "Block to use underneath");
      this.addShimC(_el_19);
      this[_FluidInput_19_5] = new input.FluidInput.new(_el_19);
      this[_DefaultValueAccessor_19_6] = new default_value_accessor.DefaultValueAccessor.new(_el_19);
      this[_NgValueAccessor_19_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_19_6]]);
      this[_NgModel_19_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_19_7]);
      this[_compView_19].createAndProject(this[_FluidInput_19_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_20 = doc[$createElement]("br");
      this.addShimE(_el_20);
      let _text_21 = dom_helpers.createText(" ");
      this[_compView_22] = new input$46template.ViewFluidInput0.new(this, 22);
      let _el_22 = this[_compView_22].rootElement;
      dom_helpers.setAttribute(_el_22, "fluidInput", "");
      dom_helpers.setAttribute(_el_22, "placeholder", "Custom Entity Tags");
      this.addShimC(_el_22);
      this[_FluidInput_22_5] = new input.FluidInput.new(_el_22);
      this[_DefaultValueAccessor_22_6] = new default_value_accessor.DefaultValueAccessor.new(_el_22);
      this[_NgValueAccessor_22_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_22_6]]);
      this[_NgModel_22_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_22_7]);
      this[_compView_22].createAndProject(this[_FluidInput_22_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_23 = doc[$createElement]("br");
      this.addShimE(_el_23);
      this[_compView_0$].createAndProject(this[_FluidCard_0_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_el_1, _el_4, _el_5, _text_6, _el_7, _el_8, _text_9, _el_10, _el_12, _el_13, _el_14, _el_15, _el_17, _text_18, _el_19, _el_20, _text_21, _el_22, _el_23])]));
      _el_4[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_4_6], 'touchHandler')));
      _el_4[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$)));
      let subscription_0 = this[_NgModel_4_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$)));
      _el_7[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_7_6], 'touchHandler')));
      _el_7[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$)));
      let subscription_1 = this[_NgModel_7_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_3$)));
      _el_10[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_4)));
      let subscription_2 = this[_FluidCheckbox_12_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_5)));
      let subscription_3 = this[_FluidCheckbox_13_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_6)));
      let subscription_4 = this[_FluidCheckbox_14_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_7)));
      _el_15[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_8)));
      _el_19[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_19_6], 'touchHandler')));
      _el_19[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_9)));
      let subscription_5 = this[_NgModel_19_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_10)));
      _el_22[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_22_6], 'touchHandler')));
      _el_22[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_11)));
      let subscription_6 = this[_NgModel_22_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_12)));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_4_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_4_8];
        }
      }
      if (7 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_7_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_7_8];
        }
      }
      if (19 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_19_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_19_8];
        }
      }
      if (22 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_22_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_22_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_0_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_4_5].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.selected.name;
      if (dart.test(check_binding.checkBinding(this[_expr_0$], currVal_0, "selected.name", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_NgModel_4_8].model = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_NgModel_4_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_4_8].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_7_5].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.id;
      if (dart.test(check_binding.checkBinding(this[_expr_1$], currVal_1, "id", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_NgModel_7_8].model = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_NgModel_7_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_7_8].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_10_5].secondary = true;
        this[_FluidButton_10_5].small = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_10_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_12_5].label = "Generate seperate Pack";
      }
      let currVal_5 = _ctx.selected.generatePack;
      if (dart.test(check_binding.checkBinding(this[_expr_5], currVal_5, "selected.generatePack", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_FluidCheckbox_12_5].value = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_13_5].label = "Use an ItemFrame as display";
      }
      let currVal_7 = _ctx.selected.useItemFrame;
      if (dart.test(check_binding.checkBinding(this[_expr_7], currVal_7, "selected.useItemFrame", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_FluidCheckbox_13_5].value = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_14_5].label = "Set the entity on fire";
      }
      let currVal_9 = _ctx.selected.fire;
      if (dart.test(check_binding.checkBinding(this[_expr_9], currVal_9, "selected.fire", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_FluidCheckbox_14_5].value = currVal_9;
        this[_expr_9] = currVal_9;
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_15_5$].secondary = true;
        this[_FluidButton_15_5$].small = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_15_5$].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_19_5].ngOnInit();
      }
      changed = false;
      let currVal_12 = _ctx.blockid;
      if (dart.test(check_binding.checkBinding(this[_expr_12], currVal_12, "blockid", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_NgModel_19_8].model = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      if (changed) {
        this[_NgModel_19_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_19_8].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_22_5].ngOnInit();
      }
      changed = false;
      let currVal_13 = _ctx.tags;
      if (dart.test(check_binding.checkBinding(this[_expr_13], currVal_13, "tags", "package:stevertus/src/pages/tools/blocks/blocks.html"))) {
        this[_NgModel_22_8].model = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_NgModel_22_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_22_8].ngOnInit();
      }
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.selected.name));
      this[_compView_0$].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      this[_compView_10].detectChanges();
      this[_compView_12].detectChanges();
      this[_compView_13].detectChanges();
      this[_compView_14].detectChanges();
      this[_compView_15$].detectChanges();
      this[_compView_19].detectChanges();
      this[_compView_22].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_compView_10].destroyInternalState();
      this[_compView_12].destroyInternalState();
      this[_compView_13].destroyInternalState();
      this[_compView_14].destroyInternalState();
      this[_compView_15$].destroyInternalState();
      this[_compView_19].destroyInternalState();
      this[_compView_22].destroyInternalState();
    }
    [_handleEvent_0$]($36event) {
      this[_DefaultValueAccessor_4_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.name = StringL().as($36event);
    }
    [_handleEvent_2$]($36event) {
      this[_DefaultValueAccessor_7_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_3$]($36event) {
      let _ctx = this.ctx;
      _ctx.id = StringL().as($36event);
    }
    [_handleEvent_4]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("blocks_item");
    }
    [_handleEvent_5]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.generatePack = boolL().as($36event);
    }
    [_handleEvent_6]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.useItemFrame = boolL().as($36event);
    }
    [_handleEvent_7]($36event) {
      let _ctx = this.ctx;
      _ctx.selected.fire = boolL().as($36event);
    }
    [_handleEvent_8]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("blocks_block");
    }
    [_handleEvent_9]($36event) {
      this[_DefaultValueAccessor_19_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_10]($36event) {
      let _ctx = this.ctx;
      _ctx.blockid = StringL().as($36event);
    }
    [_handleEvent_11]($36event) {
      this[_DefaultValueAccessor_22_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_12]($36event) {
      let _ctx = this.ctx;
      _ctx.tags = StringL().as($36event);
    }
  };
  (blocks$46template._ViewBlocksToolPage3.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_compView_0$] = null;
    this[_FluidCard_0_5] = null;
    this[_compView_4] = null;
    this[_FluidInput_4_5] = null;
    this[_DefaultValueAccessor_4_6] = null;
    this[_NgValueAccessor_4_7] = null;
    this[_NgModel_4_8] = null;
    this[_compView_7] = null;
    this[_FluidInput_7_5] = null;
    this[_DefaultValueAccessor_7_6] = null;
    this[_NgValueAccessor_7_7] = null;
    this[_NgModel_7_8] = null;
    this[_compView_10] = null;
    this[_FluidButton_10_5] = null;
    this[_compView_12] = null;
    this[_FluidCheckbox_12_5] = null;
    this[_compView_13] = null;
    this[_FluidCheckbox_13_5] = null;
    this[_compView_14] = null;
    this[_FluidCheckbox_14_5] = null;
    this[_compView_15$] = null;
    this[_FluidButton_15_5$] = null;
    this[_compView_19] = null;
    this[_FluidInput_19_5] = null;
    this[_DefaultValueAccessor_19_6] = null;
    this[_NgValueAccessor_19_7] = null;
    this[_NgModel_19_8] = null;
    this[_compView_22] = null;
    this[_FluidInput_22_5] = null;
    this[_DefaultValueAccessor_22_6] = null;
    this[_NgValueAccessor_22_7] = null;
    this[_NgModel_22_8] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    blocks$46template._ViewBlocksToolPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = blocks$46template._ViewBlocksToolPage3.prototype;
  dart.addTypeTests(blocks$46template._ViewBlocksToolPage3);
  dart.addTypeCaches(blocks$46template._ViewBlocksToolPage3);
  dart.setMethodSignature(blocks$46template._ViewBlocksToolPage3, () => ({
    __proto__: dart.getMethods(blocks$46template._ViewBlocksToolPage3.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_6]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_7]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_8]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_9]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_10]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_11]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_12]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(blocks$46template._ViewBlocksToolPage3, L16);
  dart.setFieldSignature(blocks$46template._ViewBlocksToolPage3, () => ({
    __proto__: dart.getFields(blocks$46template._ViewBlocksToolPage3.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_0_5]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_compView_4]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_4_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_4_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_4_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_4_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_7]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_7_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_7_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_7_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_7_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_10]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_10_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_12]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_12_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_13]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_13_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_14]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_14_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_15$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_15_5$]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_19]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_19_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_19_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_19_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_19_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_22]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_22_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_22_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_22_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_22_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1$ = dart.privateName(blocks$46template, "_textBinding_1");
  var _FluidMultiInput_0_5$ = dart.privateName(blocks$46template, "_FluidMultiInput_0_5");
  blocks$46template._ViewBlocksToolPage4 = class _ViewBlocksToolPage4 extends embedded_view.EmbeddedView$(dart.legacy(blocks.BlocksToolPage)) {
    build() {
      this[_compView_0$] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this[_compView_0$].rootElement;
      this.updateChildClass(_el_0, "error");
      dom_helpers.setAttribute(_el_0, "cols", "30");
      dom_helpers.setAttribute(_el_0, "disabled", "");
      dom_helpers.setAttribute(_el_0, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "ERROR");
      dom_helpers.setAttribute(_el_0, "rows", "10");
      this.addShimC(_el_0);
      this[_FluidMultiInput_0_5$] = new input$.FluidMultiInput.new(_el_0);
      this[_compView_0$].createAndProject(this[_FluidMultiInput_0_5$], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$].element])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5$].ngOnInit();
      }
      this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.errorText));
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (blocks$46template._ViewBlocksToolPage4.new = function(parentView, parentIndex) {
    this[_textBinding_1$] = new text_binding.TextBinding.new();
    this[_compView_0$] = null;
    this[_FluidMultiInput_0_5$] = null;
    blocks$46template._ViewBlocksToolPage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = blocks$46template._ViewBlocksToolPage4.prototype;
  dart.addTypeTests(blocks$46template._ViewBlocksToolPage4);
  dart.addTypeCaches(blocks$46template._ViewBlocksToolPage4);
  dart.setMethodSignature(blocks$46template._ViewBlocksToolPage4, () => ({
    __proto__: dart.getMethods(blocks$46template._ViewBlocksToolPage4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(blocks$46template._ViewBlocksToolPage4, L16);
  dart.setFieldSignature(blocks$46template._ViewBlocksToolPage4, () => ({
    __proto__: dart.getFields(blocks$46template._ViewBlocksToolPage4.__proto__),
    [_textBinding_1$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5$]: dart.fieldType(dart.legacy(input$.FluidMultiInput))
  }));
  var _ModalService_0_5$ = dart.privateName(blocks$46template, "_ModalService_0_5");
  blocks$46template._ViewBlocksToolPageHost0 = class _ViewBlocksToolPageHost0 extends host_view.HostView$(dart.legacy(blocks.BlocksToolPage)) {
    build() {
      this.componentView = new blocks$46template.ViewBlocksToolPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_ModalService_0_5$] = new modal_service.ModalService.new();
      this.component = new blocks.BlocksToolPage.new(this[_ModalService_0_5$]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 0 === nodeIndex) {
        return this[_ModalService_0_5$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (blocks$46template._ViewBlocksToolPageHost0.new = function() {
    this[_ModalService_0_5$] = null;
    blocks$46template._ViewBlocksToolPageHost0.__proto__.new.call(this);
    ;
  }).prototype = blocks$46template._ViewBlocksToolPageHost0.prototype;
  dart.addTypeTests(blocks$46template._ViewBlocksToolPageHost0);
  dart.addTypeCaches(blocks$46template._ViewBlocksToolPageHost0);
  dart.setMethodSignature(blocks$46template._ViewBlocksToolPageHost0, () => ({
    __proto__: dart.getMethods(blocks$46template._ViewBlocksToolPageHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(blocks$46template._ViewBlocksToolPageHost0, L16);
  dart.setFieldSignature(blocks$46template._ViewBlocksToolPageHost0, () => ({
    __proto__: dart.getFields(blocks$46template._ViewBlocksToolPageHost0.__proto__),
    [_ModalService_0_5$]: dart.fieldType(dart.legacy(modal_service.ModalService))
  }));
  var C19;
  blocks$46template.createBlocksToolPageFactory = function createBlocksToolPageFactory() {
    return new (ComponentFactoryOfBlocksToolPageL()).new("blocks_tool", C19 || CT.C19);
  };
  blocks$46template.viewFactory_BlocksToolPage1 = function viewFactory_BlocksToolPage1(parentView, parentIndex) {
    return new blocks$46template._ViewBlocksToolPage1.new(parentView, parentIndex);
  };
  blocks$46template.viewFactory_BlocksToolPage2 = function viewFactory_BlocksToolPage2(parentView, parentIndex) {
    return new blocks$46template._ViewBlocksToolPage2.new(parentView, parentIndex);
  };
  blocks$46template.viewFactory_BlocksToolPage3 = function viewFactory_BlocksToolPage3(parentView, parentIndex) {
    return new blocks$46template._ViewBlocksToolPage3.new(parentView, parentIndex);
  };
  blocks$46template.viewFactory_BlocksToolPage4 = function viewFactory_BlocksToolPage4(parentView, parentIndex) {
    return new blocks$46template._ViewBlocksToolPage4.new(parentView, parentIndex);
  };
  blocks$46template.viewFactory_BlocksToolPageHost0 = function viewFactory_BlocksToolPageHost0() {
    return new blocks$46template._ViewBlocksToolPageHost0.new();
  };
  blocks$46template.initReflector = function initReflector$() {
    if (dart.test(blocks$46template._visited)) {
      return;
    }
    blocks$46template._visited = true;
  };
  dart.copyProperties(blocks$46template, {
    get BlocksToolPageNgFactory() {
      return blocks$46template._BlocksToolPageNgFactory;
    }
  });
  var C20;
  dart.defineLazy(blocks$46template, {
    /*blocks$46template.styles$BlocksToolPage*/get styles$BlocksToolPage() {
      return [blocks$46css$46shim.styles, tools$46css$46shim.styles];
    },
    /*blocks$46template._BlocksToolPageNgFactory*/get _BlocksToolPageNgFactory() {
      return C20 || CT.C20;
    },
    /*blocks$46template.styles$BlocksToolPageHost*/get styles$BlocksToolPageHost() {
      return C10 || CT.C10;
    },
    /*blocks$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(tools$46css$46shim, {
    /*tools$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{position:relative;width:100%}.card._ngcontent-%ID%{--inputBackground:#f8f8fc}.card._ngcontent-%ID% .split._ngcontent-%ID%{display:grid;grid-template-columns:1fr 1fr}.card._ngcontent-%ID% button.full._ngcontent-%ID%{margin:8px;width:47%}.card._ngcontent-%ID% *._ngcontent-%ID%{margin:8px 0}.icon._ngcontent-%ID%{color:gray}.icon:hover._ngcontent-%ID%{color:var(--primary)}#rightControl._ngcontent-%ID%{position:absolute;right:-60px;top:50%;transform:translateY(-50%);font-size:50px;color:black}#leftControl._ngcontent-%ID%{position:absolute;left:-60px;top:50%;transform:translateY(-50%);font-size:50px;color:black}#leftControl._ngcontent-%ID% .tooltip._ngcontent-%ID%{position:absolute;right:0px}.errorText._ngcontent-%ID%{color:red}.grid._ngcontent-%ID%{display:grid;grid-template-columns:repeat(var(--columns),1fr);margin:16px 0;grid-gap:5px;background-color:#505050;padding:10px}.slot._ngcontent-%ID%{width:100%;position:relative}.slot._ngcontent-%ID%:before{content:\"\";display:inline-block;width:5px;height:0;padding-bottom:100%;position:relative}.slot._ngcontent-%ID% .content._ngcontent-%ID%{position:absolute;top:0;bottom:0;background-color:white;width:100%}.slot._ngcontent-%ID% .content.selected._ngcontent-%ID%,.slot._ngcontent-%ID% .content:hover._ngcontent-%ID%{background-color:#dedede}.slot._ngcontent-%ID% .content._ngcontent-%ID% img._ngcontent-%ID%{position:absolute;width:40%;left:50%;top:50%;transform:translate(-50%,-50%)}.slot._ngcontent-%ID% .content._ngcontent-%ID% p._ngcontent-%ID%{width:100%;position:absolute;bottom:5%;text-align:center;margin:0}"];
    }
  }, true);
  dart.defineLazy(blocks$46css$46shim, {
    /*blocks$46css$46shim.styles*/get styles() {
      return [".split._ngcontent-%ID%{margin:16px;margin-bottom:0;display:grid;grid-template-columns:1fr 2fr;column-gap:16px}.blockSettings._ngcontent-%ID%{height:557px}fluid-list._ngcontent-%ID%{width:100%}.list._ngcontent-%ID%{max-height:557px;background-color:white;overflow:auto}.centered._ngcontent-%ID%{position:absolute;width:100%;text-align:center;top:50%;transform:translateY(-50%)}.centeredX._ngcontent-%ID%{position:absolute;width:100%;text-align:center;left:50%;transform:translateX(-50%)}.error._ngcontent-%ID%{margin-top:8px;width:90%;height:90%;resize:none}"];
    }
  }, true);
  dart.defineLazy(tekpack$46component$46css$46shim, {
    /*tekpack$46component$46css$46shim.styles*/get styles() {
      return ["@font-face {font-family:\"Minecraft\";font-style:normal;font-weight:400;src:url(\"fonts/minecraft_font.woff\") format(\"woff\")}.container._ngcontent-%ID%{position:relative}.logo._ngcontent-%ID%{width:20vw;margin:2% calc(40vw - 2.25rem)}.floatingCard._ngcontent-%ID%{margin:8% 6%;width:45%}fluid-card._ngcontent-%ID%{margin:8% 6%;width:45%}.video._ngcontent-%ID%{width:35vw;position:absolute;right:5%;background:black;height:19.69vw;margin-top:-24vw}.video._ngcontent-%ID% iframe._ngcontent-%ID%{height:100%;width:100%}.grid._ngcontent-%ID%{margin:5vw;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:1vw}.item._ngcontent-%ID%{min-height:200px}.item._ngcontent-%ID% h5._ngcontent-%ID%{font-family:Minecraft;text-align:center;border-bottom:1px solid #373737;padding:2% 0;margin:0 4%;font-weight:500;font-size:1.25rem}.item._ngcontent-%ID% .icon._ngcontent-%ID%{image-rendering:pixelated;width:30%;margin:4% 35%}.item:hover._ngcontent-%ID%{border:2px solid #373737;border-right-color:#fff;border-bottom-color:#fff;background:#c6c6c6;border-radius:5px;transform:scale(1.1)}.item:hover._ngcontent-%ID% .crafting-grid._ngcontent-%ID%{display:none}.item:hover._ngcontent-%ID% .description._ngcontent-%ID%{line-height:2rem;height:12vw;visibility:visible;margin:5% 8%}.description._ngcontent-%ID%{font-family:Minecraft;visibility:hidden;height:5px;font-size:14px;color:#555}.crafting-grid._ngcontent-%ID%{padding:3% 6%;background:#c6c6c6;width:calc(12vw + 12%);margin:2% auto;display:grid;grid-template-columns:1fr 1fr 1fr}.crafting-blue._ngcontent-%ID%{background:#4a6e9e}.crafting-blue._ngcontent-%ID% .crafting-item._ngcontent-%ID%{background-color:#344e70;border:3px solid #1c2a3d;border-right-color:#6ea4ea;border-bottom-color:#6ea4ea}.crafting-item._ngcontent-%ID%{height:4vw;background-color:#8b8b8b;border:3px solid #373737;border-right-color:#fff;border-bottom-color:#fff}.crafting-item._ngcontent-%ID% img._ngcontent-%ID%{image-rendering:pixelated;height:100%;width:100%}"];
    }
  }, true);
  var _appEl_1 = dart.privateName(grid$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(grid$46template, "_NgFor_1_9");
  var _expr_0$0 = dart.privateName(grid$46template, "_expr_0");
  var _expr_1$0 = dart.privateName(grid$46template, "_expr_1");
  var _el_0 = dart.privateName(grid$46template, "_el_0");
  var C21;
  var C22;
  grid$46template.ViewDocumentGridComponent0 = class ViewDocumentGridComponent0 extends component_view.ComponentView$(dart.legacy(grid.DocumentGridComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/doc_grid/grid.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "grid");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C21 || CT.C21);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.documents;
      if (dart.test(check_binding.checkBinding(this[_expr_1$0], currVal_1, "documents", "package:stevertus/src/components/doc_grid/grid.html"))) {
        this[_NgFor_1_9].ngForOf = currVal_1;
        this[_expr_1$0] = currVal_1;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.scroll;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "scroll", "package:stevertus/src/components/doc_grid/grid.html"))) {
        dom_helpers.updateClassBinding(this[_el_0], "scrollable", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      grid$46template.ViewDocumentGridComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = grid$46template.ViewDocumentGridComponent0._componentStyles;
      if (styles == null) {
        grid$46template.ViewDocumentGridComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(grid$46template.styles$DocumentGridComponent, grid$46template.ViewDocumentGridComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C22 || CT.C22);
        }
      }
      this.componentStyles = styles;
    }
  };
  (grid$46template.ViewDocumentGridComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_el_0] = null;
    grid$46template.ViewDocumentGridComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("doc-grid"));
  }).prototype = grid$46template.ViewDocumentGridComponent0.prototype;
  dart.addTypeTests(grid$46template.ViewDocumentGridComponent0);
  dart.addTypeCaches(grid$46template.ViewDocumentGridComponent0);
  dart.setMethodSignature(grid$46template.ViewDocumentGridComponent0, () => ({
    __proto__: dart.getMethods(grid$46template.ViewDocumentGridComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(grid$46template.ViewDocumentGridComponent0, L17);
  dart.setFieldSignature(grid$46template.ViewDocumentGridComponent0, () => ({
    __proto__: dart.getFields(grid$46template.ViewDocumentGridComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(grid$46template.ViewDocumentGridComponent0, {
    /*grid$46template.ViewDocumentGridComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$0 = dart.privateName(grid$46template, "_compView_0");
  var _DocumentPreviewComponent_0_5 = dart.privateName(grid$46template, "_DocumentPreviewComponent_0_5");
  var _handleEvent_0$0 = dart.privateName(grid$46template, "_handleEvent_0");
  grid$46template._ViewDocumentGridComponent1 = class _ViewDocumentGridComponent1 extends embedded_view.EmbeddedView$(dart.legacy(grid.DocumentGridComponent)) {
    build() {
      this[_compView_0$0] = new doc$46template.ViewDocumentPreviewComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootElement;
      this.addShimC(_el_0);
      this[_DocumentPreviewComponent_0_5] = new doc.DocumentPreviewComponent.new();
      this[_compView_0$0].create(this[_DocumentPreviewComponent_0_5]);
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$0)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_doc = optimizations.unsafeCast(DocumentL(), this.locals[$_get]("$implicit"));
      let currVal_0 = local_doc;
      if (dart.test(check_binding.checkBinding(this[_expr_0$0], currVal_0, "doc", "package:stevertus/src/components/doc_grid/grid.html"))) {
        this[_DocumentPreviewComponent_0_5].doc = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
    [_handleEvent_0$0]($36event) {
      let local_doc = optimizations.unsafeCast(DocumentL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openDocument(local_doc);
    }
  };
  (grid$46template._ViewDocumentGridComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_DocumentPreviewComponent_0_5] = null;
    this[_expr_0$0] = null;
    grid$46template._ViewDocumentGridComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = grid$46template._ViewDocumentGridComponent1.prototype;
  dart.addTypeTests(grid$46template._ViewDocumentGridComponent1);
  dart.addTypeCaches(grid$46template._ViewDocumentGridComponent1);
  dart.setMethodSignature(grid$46template._ViewDocumentGridComponent1, () => ({
    __proto__: dart.getMethods(grid$46template._ViewDocumentGridComponent1.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(grid$46template._ViewDocumentGridComponent1, L17);
  dart.setFieldSignature(grid$46template._ViewDocumentGridComponent1, () => ({
    __proto__: dart.getFields(grid$46template._ViewDocumentGridComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(doc$46template.ViewDocumentPreviewComponent0)),
    [_DocumentPreviewComponent_0_5]: dart.fieldType(dart.legacy(doc.DocumentPreviewComponent)),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  grid$46template._ViewDocumentGridComponentHost0 = class _ViewDocumentGridComponentHost0 extends host_view.HostView$(dart.legacy(grid.DocumentGridComponent)) {
    build() {
      this.componentView = new grid$46template.ViewDocumentGridComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DocumentGridComponentL(), dart.wrapType(DocumentGridComponentL()), dart.fn(() => new grid.DocumentGridComponent.new(RouterL().as(this.injectorGet(dart.wrapType(RouterL()), this.parentIndex))), VoidToDocumentGridComponentL())) : new grid.DocumentGridComponent.new(RouterL().as(this.injectorGet(dart.wrapType(RouterL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (grid$46template._ViewDocumentGridComponentHost0.new = function() {
    grid$46template._ViewDocumentGridComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = grid$46template._ViewDocumentGridComponentHost0.prototype;
  dart.addTypeTests(grid$46template._ViewDocumentGridComponentHost0);
  dart.addTypeCaches(grid$46template._ViewDocumentGridComponentHost0);
  dart.setMethodSignature(grid$46template._ViewDocumentGridComponentHost0, () => ({
    __proto__: dart.getMethods(grid$46template._ViewDocumentGridComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(grid$46template._ViewDocumentGridComponentHost0, L17);
  var C23;
  grid$46template.createDocumentGridComponentFactory = function createDocumentGridComponentFactory() {
    return new (ComponentFactoryOfDocumentGridComponentL()).new("doc-grid", C23 || CT.C23);
  };
  grid$46template.viewFactory_DocumentGridComponent1 = function viewFactory_DocumentGridComponent1(parentView, parentIndex) {
    return new grid$46template._ViewDocumentGridComponent1.new(parentView, parentIndex);
  };
  grid$46template.viewFactory_DocumentGridComponentHost0 = function viewFactory_DocumentGridComponentHost0() {
    return new grid$46template._ViewDocumentGridComponentHost0.new();
  };
  grid$46template.initReflector = function initReflector$0() {
    if (dart.test(grid$46template._visited)) {
      return;
    }
    grid$46template._visited = true;
  };
  dart.copyProperties(grid$46template, {
    get DocumentGridComponentNgFactory() {
      return grid$46template._DocumentGridComponentNgFactory;
    }
  });
  var C24;
  dart.defineLazy(grid$46template, {
    /*grid$46template.styles$DocumentGridComponent*/get styles$DocumentGridComponent() {
      return [grid$46css$46shim.styles];
    },
    /*grid$46template._DocumentGridComponentNgFactory*/get _DocumentGridComponentNgFactory() {
      return C24 || CT.C24;
    },
    /*grid$46template.styles$DocumentGridComponentHost*/get styles$DocumentGridComponentHost() {
      return C10 || CT.C10;
    },
    /*grid$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _textBinding_4 = dart.privateName(doc$46template, "_textBinding_4");
  var _compView_0$1 = dart.privateName(doc$46template, "_compView_0");
  var _FluidCard_0_5$ = dart.privateName(doc$46template, "_FluidCard_0_5");
  var _appEl_5$ = dart.privateName(doc$46template, "_appEl_5");
  var _NgIf_5_9$ = dart.privateName(doc$46template, "_NgIf_5_9");
  var _expr_0$1 = dart.privateName(doc$46template, "_expr_0");
  var _el_2 = dart.privateName(doc$46template, "_el_2");
  var C25;
  var C26;
  doc$46template.ViewDocumentPreviewComponent0 = class ViewDocumentPreviewComponent0 extends component_view.ComponentView$(dart.legacy(doc.DocumentPreviewComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/doc_preview/doc.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      this[_compView_0$1] = new card$46template.ViewFluidCard0.new(this, 0);
      let _el_0 = this[_compView_0$1].rootElement;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FluidCard_0_5$] = new card.FluidCard.new(_el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "img-container");
      this.addShimC(HtmlElementL().as(_el_1));
      this[_el_2] = dom_helpers.appendElement(doc, _el_1, "img");
      dom_helpers.setAttribute(this[_el_2], "alt", "");
      this.addShimE(this[_el_2]);
      let _el_3 = doc[$createElement]("h3");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4].element);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5$] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$], C25 || CT.C25);
      this[_NgIf_5_9$] = new ng_if.NgIf.new(this[_appEl_5$], _TemplateRef_5_8);
      this[_compView_0$1].createAndProject(this[_FluidCard_0_5$], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_el_1, _el_3, this[_appEl_5$]])]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_0_5$].ngOnInit();
      }
      this[_NgIf_5_9$].ngIf = _ctx.doc.description[$isNotEmpty];
      this[_appEl_5$].detectChangesInNestedViews();
      let currVal_0 = _ctx.doc.img;
      if (dart.test(check_binding.checkBinding(this[_expr_0$1], currVal_0, "doc.img", "package:stevertus/src/components/doc_preview/doc.html"))) {
        dom_helpers.setProperty(this[_el_2], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$1] = currVal_0;
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.doc.title));
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5$].destroyNestedViews();
      this[_compView_0$1].destroyInternalState();
    }
    static _debugClearComponentStyles() {
      doc$46template.ViewDocumentPreviewComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = doc$46template.ViewDocumentPreviewComponent0._componentStyles;
      if (styles == null) {
        doc$46template.ViewDocumentPreviewComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(doc$46template.styles$DocumentPreviewComponent, doc$46template.ViewDocumentPreviewComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C26 || CT.C26);
        }
      }
      this.componentStyles = styles;
    }
  };
  (doc$46template.ViewDocumentPreviewComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_compView_0$1] = null;
    this[_FluidCard_0_5$] = null;
    this[_appEl_5$] = null;
    this[_NgIf_5_9$] = null;
    this[_expr_0$1] = null;
    this[_el_2] = null;
    doc$46template.ViewDocumentPreviewComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("doc-preview"));
  }).prototype = doc$46template.ViewDocumentPreviewComponent0.prototype;
  dart.addTypeTests(doc$46template.ViewDocumentPreviewComponent0);
  dart.addTypeCaches(doc$46template.ViewDocumentPreviewComponent0);
  dart.setMethodSignature(doc$46template.ViewDocumentPreviewComponent0, () => ({
    __proto__: dart.getMethods(doc$46template.ViewDocumentPreviewComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(doc$46template.ViewDocumentPreviewComponent0, L18);
  dart.setFieldSignature(doc$46template.ViewDocumentPreviewComponent0, () => ({
    __proto__: dart.getFields(doc$46template.ViewDocumentPreviewComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$1]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_0_5$]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_appEl_5$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$1]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(doc$46template.ViewDocumentPreviewComponent0, {
    /*doc$46template.ViewDocumentPreviewComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1$0 = dart.privateName(doc$46template, "_textBinding_1");
  doc$46template._ViewDocumentPreviewComponent1 = class _ViewDocumentPreviewComponent1 extends embedded_view.EmbeddedView$(dart.legacy(doc.DocumentPreviewComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$0].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1$0].updateText(interpolate.interpolateString0(_ctx.doc.description));
    }
  };
  (doc$46template._ViewDocumentPreviewComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1$0] = new text_binding.TextBinding.new();
    doc$46template._ViewDocumentPreviewComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = doc$46template._ViewDocumentPreviewComponent1.prototype;
  dart.addTypeTests(doc$46template._ViewDocumentPreviewComponent1);
  dart.addTypeCaches(doc$46template._ViewDocumentPreviewComponent1);
  dart.setMethodSignature(doc$46template._ViewDocumentPreviewComponent1, () => ({
    __proto__: dart.getMethods(doc$46template._ViewDocumentPreviewComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(doc$46template._ViewDocumentPreviewComponent1, L18);
  dart.setFieldSignature(doc$46template._ViewDocumentPreviewComponent1, () => ({
    __proto__: dart.getFields(doc$46template._ViewDocumentPreviewComponent1.__proto__),
    [_textBinding_1$0]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  doc$46template._ViewDocumentPreviewComponentHost0 = class _ViewDocumentPreviewComponentHost0 extends host_view.HostView$(dart.legacy(doc.DocumentPreviewComponent)) {
    build() {
      this.componentView = new doc$46template.ViewDocumentPreviewComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new doc.DocumentPreviewComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (doc$46template._ViewDocumentPreviewComponentHost0.new = function() {
    doc$46template._ViewDocumentPreviewComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = doc$46template._ViewDocumentPreviewComponentHost0.prototype;
  dart.addTypeTests(doc$46template._ViewDocumentPreviewComponentHost0);
  dart.addTypeCaches(doc$46template._ViewDocumentPreviewComponentHost0);
  dart.setMethodSignature(doc$46template._ViewDocumentPreviewComponentHost0, () => ({
    __proto__: dart.getMethods(doc$46template._ViewDocumentPreviewComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(doc$46template._ViewDocumentPreviewComponentHost0, L18);
  var C27;
  doc$46template.createDocumentPreviewComponentFactory = function createDocumentPreviewComponentFactory() {
    return new (ComponentFactoryOfDocumentPreviewComponentL()).new("doc-preview", C27 || CT.C27);
  };
  doc$46template.viewFactory_DocumentPreviewComponent1 = function viewFactory_DocumentPreviewComponent1(parentView, parentIndex) {
    return new doc$46template._ViewDocumentPreviewComponent1.new(parentView, parentIndex);
  };
  doc$46template.viewFactory_DocumentPreviewComponentHost0 = function viewFactory_DocumentPreviewComponentHost0() {
    return new doc$46template._ViewDocumentPreviewComponentHost0.new();
  };
  doc$46template.initReflector = function initReflector$1() {
    if (dart.test(doc$46template._visited)) {
      return;
    }
    doc$46template._visited = true;
  };
  dart.copyProperties(doc$46template, {
    get DocumentPreviewComponentNgFactory() {
      return doc$46template._DocumentPreviewComponentNgFactory;
    }
  });
  var C28;
  dart.defineLazy(doc$46template, {
    /*doc$46template.styles$DocumentPreviewComponent*/get styles$DocumentPreviewComponent() {
      return [doc$46css$46shim.styles];
    },
    /*doc$46template._DocumentPreviewComponentNgFactory*/get _DocumentPreviewComponentNgFactory() {
      return C28 || CT.C28;
    },
    /*doc$46template.styles$DocumentPreviewComponentHost*/get styles$DocumentPreviewComponentHost() {
      return C10 || CT.C10;
    },
    /*doc$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(doc$46css$46shim, {
    /*doc$46css$46shim.styles*/get styles() {
      return ["fluid-card._ngcontent-%ID%{height:100%!important;cursor:pointer}fluid-card:hover._ngcontent-%ID%{box-shadow:0px 30px 40px rgba(0,0,0,0.2),0px 2px 4px rgba(0,0,0,0.05)}fluid-card:hover._ngcontent-%ID% h3._ngcontent-%ID%{text-decoration:underline;text-underline-position:under}h3._ngcontent-%ID%{font-size:14pt;text-align:center;margin:8px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}p._ngcontent-%ID%{display:block;display:-webkit-box;font-size:12pt;line-height:120%;height:60px;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis}.img-container._ngcontent-%ID%{overflow:hidden;height:0;padding-top:56.25%;position:relative;margin:-4%;margin-bottom:4px}img._ngcontent-%ID%{position:absolute;top:0;width:100%;height:100%;border-radius:5px;object-fit:cover}"];
    }
  }, true);
  dart.defineLazy(grid$46css$46shim, {
    /*grid$46css$46shim.styles*/get styles() {
      return [".grid:not(.scrollable)._ngcontent-%ID%{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:24px;grid-row-gap:24px}.scrollable._ngcontent-%ID%{display:flex;flex-direction:row;overflow-x:auto;justify-content:center}.scrollable._ngcontent-%ID% doc-preview._ngcontent-%ID%{padding:0 10px;width:75%;min-width:250px}@media screen AND (max-width:960px){.grid:not(.scrollable)._ngcontent-%ID%{grid-template-columns:1fr 1fr}}@media screen AND (max-width:480px){.grid:not(.scrollable)._ngcontent-%ID%{grid-template-columns:1fr}}"];
    }
  }, true);
  var C29;
  not_found.NotFoundComponent = class NotFoundComponent extends core.Object {};
  (not_found.NotFoundComponent.new = function() {
    ;
  }).prototype = not_found.NotFoundComponent.prototype;
  dart.addTypeTests(not_found.NotFoundComponent);
  dart.addTypeCaches(not_found.NotFoundComponent);
  dart.setLibraryUri(not_found.NotFoundComponent, L19);
  not_found$46template.ViewNotFoundComponent0 = class ViewNotFoundComponent0 extends component_view.ComponentView$(dart.legacy(not_found.NotFoundComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/not_found.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h2");
      let _text_1 = dom_helpers.appendText(_el_0, "Page not found");
    }
    static _debugClearComponentStyles() {
      not_found$46template.ViewNotFoundComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = not_found$46template.ViewNotFoundComponent0._componentStyles;
      if (styles == null) {
        not_found$46template.ViewNotFoundComponent0._componentStyles = styles = new style_encapsulation._UnscopedComponentStyles.new(not_found$46template.styles$NotFoundComponent, not_found$46template.ViewNotFoundComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C29 || CT.C29);
        }
      }
      this.componentStyles = styles;
    }
  };
  (not_found$46template.ViewNotFoundComponent0.new = function(parentView, parentIndex) {
    not_found$46template.ViewNotFoundComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("my-not-found"));
  }).prototype = not_found$46template.ViewNotFoundComponent0.prototype;
  dart.addTypeTests(not_found$46template.ViewNotFoundComponent0);
  dart.addTypeCaches(not_found$46template.ViewNotFoundComponent0);
  dart.setMethodSignature(not_found$46template.ViewNotFoundComponent0, () => ({
    __proto__: dart.getMethods(not_found$46template.ViewNotFoundComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(not_found$46template.ViewNotFoundComponent0, L20);
  dart.defineLazy(not_found$46template.ViewNotFoundComponent0, {
    /*not_found$46template.ViewNotFoundComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  not_found$46template._ViewNotFoundComponentHost0 = class _ViewNotFoundComponentHost0 extends host_view.HostView$(dart.legacy(not_found.NotFoundComponent)) {
    build() {
      this.componentView = new not_found$46template.ViewNotFoundComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new not_found.NotFoundComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (not_found$46template._ViewNotFoundComponentHost0.new = function() {
    not_found$46template._ViewNotFoundComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = not_found$46template._ViewNotFoundComponentHost0.prototype;
  dart.addTypeTests(not_found$46template._ViewNotFoundComponentHost0);
  dart.addTypeCaches(not_found$46template._ViewNotFoundComponentHost0);
  dart.setMethodSignature(not_found$46template._ViewNotFoundComponentHost0, () => ({
    __proto__: dart.getMethods(not_found$46template._ViewNotFoundComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(not_found$46template._ViewNotFoundComponentHost0, L20);
  var C30;
  not_found$46template.createNotFoundComponentFactory = function createNotFoundComponentFactory() {
    return new (ComponentFactoryOfNotFoundComponentL()).new("my-not-found", C30 || CT.C30);
  };
  not_found$46template.viewFactory_NotFoundComponentHost0 = function viewFactory_NotFoundComponentHost0() {
    return new not_found$46template._ViewNotFoundComponentHost0.new();
  };
  not_found$46template.initReflector = function initReflector$2() {
    if (dart.test(not_found$46template._visited)) {
      return;
    }
    not_found$46template._visited = true;
  };
  dart.copyProperties(not_found$46template, {
    get NotFoundComponentNgFactory() {
      return not_found$46template._NotFoundComponentNgFactory;
    }
  });
  var C31;
  dart.defineLazy(not_found$46template, {
    /*not_found$46template.styles$NotFoundComponent*/get styles$NotFoundComponent() {
      return C10 || CT.C10;
    },
    /*not_found$46template._NotFoundComponentNgFactory*/get _NotFoundComponentNgFactory() {
      return C31 || CT.C31;
    },
    /*not_found$46template.styles$NotFoundComponentHost*/get styles$NotFoundComponentHost() {
      return C10 || CT.C10;
    },
    /*not_found$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  landing.LandingPage = class LandingPage extends core.Object {
    navigateTo(url) {
      html.window[$location].assign(url);
    }
  };
  (landing.LandingPage.new = function() {
    ;
  }).prototype = landing.LandingPage.prototype;
  dart.addTypeTests(landing.LandingPage);
  dart.addTypeCaches(landing.LandingPage);
  dart.setMethodSignature(landing.LandingPage, () => ({
    __proto__: dart.getMethods(landing.LandingPage.__proto__),
    navigateTo: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(landing.LandingPage, L21);
  section.LandingSection = class LandingSection extends core.Object {};
  (section.LandingSection.new = function() {
    ;
  }).prototype = section.LandingSection.prototype;
  dart.addTypeTests(section.LandingSection);
  dart.addTypeCaches(section.LandingSection);
  dart.setLibraryUri(section.LandingSection, L22);
  card$.LandingCard = class LandingCard extends core.Object {};
  (card$.LandingCard.new = function() {
    ;
  }).prototype = card$.LandingCard.prototype;
  dart.addTypeTests(card$.LandingCard);
  dart.addTypeCaches(card$.LandingCard);
  dart.setLibraryUri(card$.LandingCard, L23);
  var lang$1 = dart.privateName(articles, "ArticlesPage.lang");
  var loading$ = dart.privateName(articles, "ArticlesPage.loading");
  var searchInput = dart.privateName(articles, "ArticlesPage.searchInput");
  var articles$ = dart.privateName(articles, "ArticlesPage.articles");
  var allTags = dart.privateName(articles, "ArticlesPage.allTags");
  var tags = dart.privateName(articles, "ArticlesPage.tags");
  articles.ArticlesPage = class ArticlesPage extends core.Object {
    get lang() {
      return this[lang$1];
    }
    set lang(value) {
      this[lang$1] = value;
    }
    get loading() {
      return this[loading$];
    }
    set loading(value) {
      this[loading$] = value;
    }
    get searchInput() {
      return this[searchInput];
    }
    set searchInput(value) {
      this[searchInput] = value;
    }
    get articles() {
      return this[articles$];
    }
    set articles(value) {
      this[articles$] = value;
    }
    get allTags() {
      return this[allTags];
    }
    set allTags(value) {
      super.allTags = value;
    }
    get tags() {
      return this[tags];
    }
    set tags(value) {
      this[tags] = value;
    }
    toggleTag(tag) {
      if (this.tags[$_get](tag) != null) {
        this.tags[$remove](tag);
      } else {
        this.tags[$_set](tag, true);
      }
      this.onSearch();
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        if (current.queryParameters[$_get]("type") != null) {
          this.tags = new (IdentityMapOfStringL$boolL()).from([current.queryParameters[$_get]("type"), true]);
        }
        if (current.queryParameters[$_get]("q") != null) {
          this.searchInput = current.queryParameters[$_get]("q");
        }
        this.onSearch();
        this.lang.localeChange.addListener(dart.fn(l => this.onSearch(), StringLTovoid()));
      }).bind(this));
    }
    onSearch() {
      this.loading = true;
      http$.getArticlePreviews(this.lang.currentLocale, this.tags[$keys][$toList](), this.searchInput).then(core.Null, dart.fn(val => {
        this.loading = false;
        this.articles = val;
      }, ListLOfDocumentLToNullN()));
    }
  };
  (articles.ArticlesPage.new = function(lang) {
    this[loading$] = true;
    this[searchInput] = "";
    this[articles$] = JSArrayOfDocumentL().of([]);
    this[allTags] = JSArrayOfStringL().of(["worldedit", "tool", "objd"]);
    this[tags] = new (IdentityMapOfStringL$boolL()).new();
    this[lang$1] = lang;
    ;
  }).prototype = articles.ArticlesPage.prototype;
  dart.addTypeTests(articles.ArticlesPage);
  dart.addTypeCaches(articles.ArticlesPage);
  articles.ArticlesPage[dart.implements] = () => [lifecycle.OnActivate];
  dart.setMethodSignature(articles.ArticlesPage, () => ({
    __proto__: dart.getMethods(articles.ArticlesPage.__proto__),
    toggleTag: dart.fnType(dart.void, [dart.legacy(core.String)]),
    onActivate: dart.fnType(dart.void, [dart.legacy(router_state.RouterState), dart.legacy(router_state.RouterState)]),
    onSearch: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles.ArticlesPage, L24);
  dart.setFieldSignature(articles.ArticlesPage, () => ({
    __proto__: dart.getFields(articles.ArticlesPage.__proto__),
    lang: dart.fieldType(dart.legacy(translation_service.TranslationService)),
    loading: dart.fieldType(dart.legacy(core.bool)),
    searchInput: dart.fieldType(dart.legacy(core.String)),
    articles: dart.fieldType(dart.legacy(core.List$(dart.legacy(document.Document)))),
    allTags: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    tags: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.bool))))
  }));
  var _appEl_0 = dart.privateName(render$46template, "_appEl_0");
  var _NgFor_0_9 = dart.privateName(render$46template, "_NgFor_0_9");
  var _expr_0$2 = dart.privateName(render$46template, "_expr_0");
  var C32;
  var C33;
  render$46template.ViewTextRenderComponent0 = class ViewTextRenderComponent0 extends component_view.ComponentView$(dart.legacy(render.TextRenderComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/components/render_text/render.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C32 || CT.C32);
      this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.text;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "text", "package:stevertus/src/components/render_text/render.html"))) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_0_9].ngDoCheck();
      }
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      render$46template.ViewTextRenderComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = render$46template.ViewTextRenderComponent0._componentStyles;
      if (styles == null) {
        render$46template.ViewTextRenderComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(render$46template.styles$TextRenderComponent, render$46template.ViewTextRenderComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C33 || CT.C33);
        }
      }
      this.componentStyles = styles;
    }
  };
  (render$46template.ViewTextRenderComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0$2] = null;
    render$46template.ViewTextRenderComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("render-text"));
  }).prototype = render$46template.ViewTextRenderComponent0.prototype;
  dart.addTypeTests(render$46template.ViewTextRenderComponent0);
  dart.addTypeCaches(render$46template.ViewTextRenderComponent0);
  dart.setMethodSignature(render$46template.ViewTextRenderComponent0, () => ({
    __proto__: dart.getMethods(render$46template.ViewTextRenderComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template.ViewTextRenderComponent0, L25);
  dart.setFieldSignature(render$46template.ViewTextRenderComponent0, () => ({
    __proto__: dart.getFields(render$46template.ViewTextRenderComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(render$46template.ViewTextRenderComponent0, {
    /*render$46template.ViewTextRenderComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _NgIf_0_9 = dart.privateName(render$46template, "_NgIf_0_9");
  var _appEl_2$ = dart.privateName(render$46template, "_appEl_2");
  var _NgIf_2_9$ = dart.privateName(render$46template, "_NgIf_2_9");
  var _appEl_3 = dart.privateName(render$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(render$46template, "_NgIf_3_9");
  var C34;
  var C35;
  var C36;
  render$46template._ViewTextRenderComponent1 = class _ViewTextRenderComponent1 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C34 || CT.C34);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _text_1 = dom_helpers.createText(" ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C35 || CT.C35);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C36 || CT.C36);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], _text_1, this[_appEl_2$], this[_appEl_3]]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), this.locals[$_get]("$implicit"));
      this[_NgIf_0_9].ngIf = _ctx.getImgText(local_t) != null;
      this[_NgIf_2_9$].ngIf = _ctx.isRawText(local_t);
      this[_NgIf_3_9].ngIf = !dart.test(_ctx.isRawText(local_t));
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
    }
  };
  (render$46template._ViewTextRenderComponent1.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    render$46template._ViewTextRenderComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent1.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent1);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent1);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent1, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent1, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent1, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent1.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _expr_1$1 = dart.privateName(render$46template, "_expr_1");
  var _el_0$ = dart.privateName(render$46template, "_el_0");
  render$46template._ViewTextRenderComponent2 = class _ViewTextRenderComponent2 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("img");
      this.addShimE(this[_el_0$]);
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.getImgText(local_t).url;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "getImgText(t).url", "package:stevertus/src/components/render_text/render.html"))) {
        dom_helpers.setProperty(this[_el_0$], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$2] = currVal_0;
      }
      let currVal_1 = local_t.text;
      if (dart.test(check_binding.checkBinding(this[_expr_1$1], currVal_1, "t.text", "package:stevertus/src/components/render_text/render.html"))) {
        dom_helpers.setProperty(this[_el_0$], "alt", currVal_1);
        this[_expr_1$1] = currVal_1;
      }
    }
  };
  (render$46template._ViewTextRenderComponent2.new = function(parentView, parentIndex) {
    this[_expr_0$2] = null;
    this[_expr_1$1] = null;
    this[_el_0$] = null;
    render$46template._ViewTextRenderComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent2.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent2);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent2);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent2, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent2, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent2, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent2.__proto__),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_expr_1$1]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _appEl_4 = dart.privateName(render$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(render$46template, "_NgIf_4_9");
  var _appEl_6 = dart.privateName(render$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(render$46template, "_NgIf_6_9");
  var _appEl_8$0 = dart.privateName(render$46template, "_appEl_8");
  var _NgIf_8_9$0 = dart.privateName(render$46template, "_NgIf_8_9");
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  render$46template._ViewTextRenderComponent3 = class _ViewTextRenderComponent3 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C37 || CT.C37);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _text_1 = dom_helpers.createText(" ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C38 || CT.C38);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = dom_helpers.createText(" ");
      let _anchor_4 = dom_helpers.createAnchor();
      this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C39 || CT.C39);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.createText(" ");
      let _anchor_6 = dom_helpers.createAnchor();
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C40 || CT.C40);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.createText(" ");
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8$0] = new view_container.ViewContainer.new(8, null, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8$0], C41 || CT.C41);
      this[_NgIf_8_9$0] = new ng_if.NgIf.new(this[_appEl_8$0], _TemplateRef_8_8);
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], _text_1, this[_appEl_2$], _text_3, this[_appEl_4], _text_5, this[_appEl_6], _text_7, this[_appEl_8$0]]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView).locals[$_get]("$implicit"));
      this[_NgIf_0_9].ngIf = local_t.type === "text";
      this[_NgIf_2_9$].ngIf = local_t.type === "strong";
      this[_NgIf_4_9].ngIf = local_t.type === "em";
      this[_NgIf_6_9].ngIf = _ctx.getLinkText(local_t) != null;
      this[_NgIf_8_9$0].ngIf = _ctx.getIntLinkText(local_t) != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_8$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_8$0].destroyNestedViews();
    }
  };
  (render$46template._ViewTextRenderComponent3.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_8$0] = null;
    this[_NgIf_8_9$0] = null;
    render$46template._ViewTextRenderComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent3.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent3);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent3);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent3, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent3, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent3, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent3.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _textBinding_0 = dart.privateName(render$46template, "_textBinding_0");
  render$46template._ViewTextRenderComponent4 = class _ViewTextRenderComponent4 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      this.initRootNode(this[_textBinding_0].element);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      this[_textBinding_0].updateText(interpolate.interpolateString0(local_t.text));
    }
  };
  (render$46template._ViewTextRenderComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_0] = new text_binding.TextBinding.new();
    render$46template._ViewTextRenderComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent4.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent4);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent4);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent4, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent4, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent4, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent4.__proto__),
    [_textBinding_0]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _textBinding_1$1 = dart.privateName(render$46template, "_textBinding_1");
  render$46template._ViewTextRenderComponent5 = class _ViewTextRenderComponent5 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("b");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      this[_textBinding_1$1].updateText(interpolate.interpolateString0(local_t.text));
    }
  };
  (render$46template._ViewTextRenderComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1$1] = new text_binding.TextBinding.new();
    render$46template._ViewTextRenderComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent5.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent5);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent5);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent5, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent5, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent5, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent5.__proto__),
    [_textBinding_1$1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  render$46template._ViewTextRenderComponent6 = class _ViewTextRenderComponent6 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("i");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$1].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      this[_textBinding_1$1].updateText(interpolate.interpolateString0(local_t.text));
    }
  };
  (render$46template._ViewTextRenderComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_1$1] = new text_binding.TextBinding.new();
    render$46template._ViewTextRenderComponent6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent6.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent6);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent6);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent6, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent6, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent6, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent6.__proto__),
    [_textBinding_1$1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  render$46template._ViewTextRenderComponent7 = class _ViewTextRenderComponent7 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = AnchorElementL().as(doc[$createElement]("a"));
      this.addShimC(this[_el_0$]);
      this[_el_0$][$append](this[_textBinding_1$1].element);
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.getLinkText(local_t).link;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "getLinkText(t).link", "package:stevertus/src/components/render_text/render.html"))) {
        dom_helpers.setProperty(this[_el_0$], "href", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$2] = currVal_0;
      }
      this[_textBinding_1$1].updateText(interpolate.interpolateString0(local_t.text));
    }
  };
  (render$46template._ViewTextRenderComponent7.new = function(parentView, parentIndex) {
    this[_textBinding_1$1] = new text_binding.TextBinding.new();
    this[_expr_0$2] = null;
    this[_el_0$] = null;
    render$46template._ViewTextRenderComponent7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent7.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent7);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent7);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent7, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent7, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent7, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent7.__proto__),
    [_textBinding_1$1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.AnchorElement))
  }));
  var _RouterLink_0_5 = dart.privateName(render$46template, "_RouterLink_0_5");
  render$46template._ViewTextRenderComponent8 = class _ViewTextRenderComponent8 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = AnchorElementL().as(doc[$createElement]("a"));
      this.addShimC(this[_el_0$]);
      this[_RouterLink_0_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(RouterLinkL(), dart.wrapType(RouterLinkL()), dart.fn(() => new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_0$]), VoidToRouterLinkL())) : new router_link_directive.RouterLink.new(RouterL().as(this.parentView.injectorGet(dart.wrapType(RouterL()), this.parentIndex)), LocationL().as(this.parentView.injectorGet(dart.wrapType(LocationL()), this.parentIndex)), null, this[_el_0$]));
      this[_el_0$][$append](this[_textBinding_1$1].element);
      this[_el_0$][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this.initRootNode(this[_el_0$]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = "/article/" + dart.notNull(_ctx.getIntLinkText(local_t).uid);
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "'/article/' + getIntLinkText(t).uid", "package:stevertus/src/components/render_text/render.html"))) {
        this[_RouterLink_0_5].instance.routerLink = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0$]);
      this[_textBinding_1$1].updateText(interpolate.interpolateString0(local_t.text));
    }
    destroyInternal() {
      this[_RouterLink_0_5].instance.ngOnDestroy();
    }
  };
  (render$46template._ViewTextRenderComponent8.new = function(parentView, parentIndex) {
    this[_textBinding_1$1] = new text_binding.TextBinding.new();
    this[_RouterLink_0_5] = null;
    this[_expr_0$2] = null;
    this[_el_0$] = null;
    render$46template._ViewTextRenderComponent8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent8.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent8);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent8);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent8, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent8, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent8, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent8.__proto__),
    [_textBinding_1$1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_RouterLink_0_5]: dart.fieldType(dart.legacy(router_link_directive$46template.RouterLinkNgCd)),
    [_expr_0$2]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.AnchorElement))
  }));
  var _appEl_1$ = dart.privateName(render$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(render$46template, "_NgIf_1_9");
  var _appEl_5$0 = dart.privateName(render$46template, "_appEl_5");
  var _NgIf_5_9$0 = dart.privateName(render$46template, "_NgIf_5_9");
  var _appEl_7$ = dart.privateName(render$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(render$46template, "_NgIf_7_9");
  var _appEl_9$ = dart.privateName(render$46template, "_appEl_9");
  var _NgIf_9_9$ = dart.privateName(render$46template, "_NgIf_9_9");
  var _appEl_10 = dart.privateName(render$46template, "_appEl_10");
  var _NgIf_10_9 = dart.privateName(render$46template, "_NgIf_10_9");
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
  render$46template._ViewTextRenderComponent9 = class _ViewTextRenderComponent9 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C42 || CT.C42);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], C43 || CT.C43);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C44 || CT.C44);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C45 || CT.C45);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.createAnchor();
      this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C46 || CT.C46);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5$0] = new view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$0], C47 || CT.C47);
      this[_NgIf_5_9$0] = new ng_if.NgIf.new(this[_appEl_5$0], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.createAnchor();
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C48 || CT.C48);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.createAnchor();
      this[_appEl_7$] = new view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$], C49 || CT.C49);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7$], _TemplateRef_7_8);
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8$0] = new view_container.ViewContainer.new(8, null, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8$0], C50 || CT.C50);
      this[_NgIf_8_9$0] = new ng_if.NgIf.new(this[_appEl_8$0], _TemplateRef_8_8);
      let _anchor_9 = dom_helpers.createAnchor();
      this[_appEl_9$] = new view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9$], C51 || CT.C51);
      this[_NgIf_9_9$] = new ng_if.NgIf.new(this[_appEl_9$], _TemplateRef_9_8);
      let _anchor_10 = dom_helpers.createAnchor();
      this[_appEl_10] = new view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C52 || CT.C52);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1$], this[_appEl_2$], this[_appEl_3], this[_appEl_4], this[_appEl_5$0], this[_appEl_6], this[_appEl_7$], this[_appEl_8$0], this[_appEl_9$], this[_appEl_10]]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView).locals[$_get]("$implicit"));
      this[_NgIf_0_9].ngIf = local_t.type === "heading1";
      this[_NgIf_1_9].ngIf = local_t.type === "heading2";
      this[_NgIf_2_9$].ngIf = local_t.type === "heading3";
      this[_NgIf_3_9].ngIf = local_t.type === "heading4";
      this[_NgIf_4_9].ngIf = local_t.type === "heading5";
      this[_NgIf_5_9$0].ngIf = local_t.type === "heading6";
      this[_NgIf_6_9].ngIf = local_t.type === "paragraph";
      this[_NgIf_7_9].ngIf = local_t.type === "preformatted";
      this[_NgIf_8_9$0].ngIf = local_t.type === "list" && _ctx.getListText(local_t) != null;
      this[_NgIf_9_9$].ngIf = local_t.type === "o-list" && _ctx.getListText(local_t) != null;
      this[_NgIf_10_9].ngIf = local_t.type === "list-item" || local_t.type === "o-list-item";
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5$0].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7$].detectChangesInNestedViews();
      this[_appEl_8$0].detectChangesInNestedViews();
      this[_appEl_9$].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5$0].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7$].destroyNestedViews();
      this[_appEl_8$0].destroyNestedViews();
      this[_appEl_9$].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
    }
  };
  (render$46template._ViewTextRenderComponent9.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1$] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5$0] = null;
    this[_NgIf_5_9$0] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7$] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8$0] = null;
    this[_NgIf_8_9$0] = null;
    this[_appEl_9$] = null;
    this[_NgIf_9_9$] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    render$46template._ViewTextRenderComponent9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent9.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent9);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent9);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent9, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent9.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent9, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent9, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent9.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _compView_1$ = dart.privateName(render$46template, "_compView_1");
  var _TextRenderComponent_1_5 = dart.privateName(render$46template, "_TextRenderComponent_1_5");
  render$46template._ViewTextRenderComponent10 = class _ViewTextRenderComponent10 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h1");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent10.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent10.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent10);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent10);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent10, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent10.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent10, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent10, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent10.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent11 = class _ViewTextRenderComponent11 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h2");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent11.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent11.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent11);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent11);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent11, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent11.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent11, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent11, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent11.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent12 = class _ViewTextRenderComponent12 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h3");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent12.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent12.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent12);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent12);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent12, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent12, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent12, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent12.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent13 = class _ViewTextRenderComponent13 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h4");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent13.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent13.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent13);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent13);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent13, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent13.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent13, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent13, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent13.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent14 = class _ViewTextRenderComponent14 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h5");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent14.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent14.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent14.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent14);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent14);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent14, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent14.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent14, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent14, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent14.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent15 = class _ViewTextRenderComponent15 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h6");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent15.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent15.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent15.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent15);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent15);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent15, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent15.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent15, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent15, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent15.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent16 = class _ViewTextRenderComponent16 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent16.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent16.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent16.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent16);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent16);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent16, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent16.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent16, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent16, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent16.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  var _compView_2$ = dart.privateName(render$46template, "_compView_2");
  var _TextRenderComponent_2_5 = dart.privateName(render$46template, "_TextRenderComponent_2_5");
  render$46template._ViewTextRenderComponent17 = class _ViewTextRenderComponent17 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("code");
      this.addShimE(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "pre");
      this.addShimE(_el_1);
      this[_compView_2$] = new render$46template.ViewTextRenderComponent0.new(this, 2);
      let _el_2 = this[_compView_2$].rootElement;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_TextRenderComponent_2_5] = new render.TextRenderComponent.new();
      this[_compView_2$].create(this[_TextRenderComponent_2_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_2_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_2$].detectChanges();
    }
    destroyInternal() {
      this[_compView_2$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent17.new = function(parentView, parentIndex) {
    this[_compView_2$] = null;
    this[_TextRenderComponent_2_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent17.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent17.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent17);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent17);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent17, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent17.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent17, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent17, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent17.__proto__),
    [_compView_2$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_2_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent18 = class _ViewTextRenderComponent18 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("ul");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.getListText(local_t).items;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "getListText(t).items", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent18.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent18.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent18.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent18);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent18);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent18, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent18.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent18, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent18, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent18.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent19 = class _ViewTextRenderComponent19 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("ol");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.getListText(local_t).items;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "getListText(t).items", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent19.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent19.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent19.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent19);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent19);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent19, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent19.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent19, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent19, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent19.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponent20 = class _ViewTextRenderComponent20 extends embedded_view.EmbeddedView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("li");
      this.addShimE(_el_0);
      this[_compView_1$] = new render$46template.ViewTextRenderComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_TextRenderComponent_1_5] = new render.TextRenderComponent.new();
      this[_compView_1$].create(this[_TextRenderComponent_1_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_t = optimizations.unsafeCast(TextPartL(), optimizations.unsafeCast(_ViewTextRenderComponent1L(), this.parentView.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_t.spans;
      if (dart.test(check_binding.checkBinding(this[_expr_0$2], currVal_0, "t.spans", "package:stevertus/src/components/render_text/render.html"))) {
        this[_TextRenderComponent_1_5].text = currVal_0;
        this[_expr_0$2] = currVal_0;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$].destroyInternalState();
    }
  };
  (render$46template._ViewTextRenderComponent20.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_TextRenderComponent_1_5] = null;
    this[_expr_0$2] = null;
    render$46template._ViewTextRenderComponent20.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = render$46template._ViewTextRenderComponent20.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponent20);
  dart.addTypeCaches(render$46template._ViewTextRenderComponent20);
  dart.setMethodSignature(render$46template._ViewTextRenderComponent20, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponent20.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponent20, L25);
  dart.setFieldSignature(render$46template._ViewTextRenderComponent20, () => ({
    __proto__: dart.getFields(render$46template._ViewTextRenderComponent20.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_1_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$2]: dart.fieldType(dart.dynamic)
  }));
  render$46template._ViewTextRenderComponentHost0 = class _ViewTextRenderComponentHost0 extends host_view.HostView$(dart.legacy(render.TextRenderComponent)) {
    build() {
      this.componentView = new render$46template.ViewTextRenderComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new render.TextRenderComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (render$46template._ViewTextRenderComponentHost0.new = function() {
    render$46template._ViewTextRenderComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = render$46template._ViewTextRenderComponentHost0.prototype;
  dart.addTypeTests(render$46template._ViewTextRenderComponentHost0);
  dart.addTypeCaches(render$46template._ViewTextRenderComponentHost0);
  dart.setMethodSignature(render$46template._ViewTextRenderComponentHost0, () => ({
    __proto__: dart.getMethods(render$46template._ViewTextRenderComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(render$46template._ViewTextRenderComponentHost0, L25);
  var C53;
  render$46template.createTextRenderComponentFactory = function createTextRenderComponentFactory() {
    return new (ComponentFactoryOfTextRenderComponentL()).new("render-text", C53 || CT.C53);
  };
  render$46template.viewFactory_TextRenderComponent1 = function viewFactory_TextRenderComponent1(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent1.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent2 = function viewFactory_TextRenderComponent2(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent2.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent3 = function viewFactory_TextRenderComponent3(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent3.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent4 = function viewFactory_TextRenderComponent4(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent4.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent5 = function viewFactory_TextRenderComponent5(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent5.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent6 = function viewFactory_TextRenderComponent6(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent6.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent7 = function viewFactory_TextRenderComponent7(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent7.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent8 = function viewFactory_TextRenderComponent8(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent8.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent9 = function viewFactory_TextRenderComponent9(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent9.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent10 = function viewFactory_TextRenderComponent10(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent10.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent11 = function viewFactory_TextRenderComponent11(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent11.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent12 = function viewFactory_TextRenderComponent12(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent12.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent13 = function viewFactory_TextRenderComponent13(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent13.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent14 = function viewFactory_TextRenderComponent14(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent14.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent15 = function viewFactory_TextRenderComponent15(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent15.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent16 = function viewFactory_TextRenderComponent16(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent16.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent17 = function viewFactory_TextRenderComponent17(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent17.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent18 = function viewFactory_TextRenderComponent18(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent18.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent19 = function viewFactory_TextRenderComponent19(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent19.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponent20 = function viewFactory_TextRenderComponent20(parentView, parentIndex) {
    return new render$46template._ViewTextRenderComponent20.new(parentView, parentIndex);
  };
  render$46template.viewFactory_TextRenderComponentHost0 = function viewFactory_TextRenderComponentHost0() {
    return new render$46template._ViewTextRenderComponentHost0.new();
  };
  render$46template.initReflector = function initReflector$3() {
    if (dart.test(render$46template._visited)) {
      return;
    }
    render$46template._visited = true;
  };
  dart.copyProperties(render$46template, {
    get TextRenderComponentNgFactory() {
      return render$46template._TextRenderComponentNgFactory;
    }
  });
  var C54;
  dart.defineLazy(render$46template, {
    /*render$46template.styles$TextRenderComponent*/get styles$TextRenderComponent() {
      return [render$46css$46shim.styles];
    },
    /*render$46template._TextRenderComponentNgFactory*/get _TextRenderComponentNgFactory() {
      return C54 || CT.C54;
    },
    /*render$46template.styles$TextRenderComponentHost*/get styles$TextRenderComponentHost() {
      return C10 || CT.C10;
    },
    /*render$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _appEl_1$0 = dart.privateName(article$46template, "_appEl_1");
  var _NgIf_1_9$ = dart.privateName(article$46template, "_NgIf_1_9");
  var _appEl_2$0 = dart.privateName(article$46template, "_appEl_2");
  var _NgIf_2_9$0 = dart.privateName(article$46template, "_NgIf_2_9");
  var C55;
  var C56;
  var C57;
  var lang$2 = dart.privateName(article$, "ArticlePage.lang");
  var article$0 = dart.privateName(article$, "ArticlePage.article");
  var sanitizer$ = dart.privateName(article$, "ArticlePage.sanitizer");
  var loading$0 = dart.privateName(article$, "ArticlePage.loading");
  var playingVideo = dart.privateName(article$, "ArticlePage.playingVideo");
  article$.ArticlePage = class ArticlePage extends core.Object {
    get lang() {
      return this[lang$2];
    }
    set lang(value) {
      this[lang$2] = value;
    }
    get article() {
      return this[article$0];
    }
    set article(value) {
      this[article$0] = value;
    }
    get sanitizer() {
      return this[sanitizer$];
    }
    set sanitizer(value) {
      this[sanitizer$] = value;
    }
    get loading() {
      return this[loading$0];
    }
    set loading(value) {
      this[loading$0] = value;
    }
    get playingVideo() {
      return this[playingVideo];
    }
    set playingVideo(value) {
      this[playingVideo] = value;
    }
    get safeVideoUrl() {
      return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + dart.notNull(this.article.video) + "?rel=0;&autoplay=1");
    }
    getArticle(id) {
      return async.async(dart.void, (function* getArticle() {
        this.loading = true;
        this.article = (yield http$.getFullArticle(id, this.lang.currentLocale));
        this.loading = false;
      }).bind(this));
    }
    onActivate(_, current) {
      this.getArticle(current.parameters[$_get]("id"));
      this.lang.localeChange.addListener(dart.fn(l => this.getArticle(current.parameters[$_get]("id")), StringLTovoid()));
    }
  };
  (article$.ArticlePage.new = function(sanitizer, lang) {
    this[article$0] = null;
    this[loading$0] = true;
    this[playingVideo] = false;
    this[sanitizer$] = sanitizer;
    this[lang$2] = lang;
    ;
  }).prototype = article$.ArticlePage.prototype;
  dart.addTypeTests(article$.ArticlePage);
  dart.addTypeCaches(article$.ArticlePage);
  article$.ArticlePage[dart.implements] = () => [lifecycle.OnActivate];
  dart.setMethodSignature(article$.ArticlePage, () => ({
    __proto__: dart.getMethods(article$.ArticlePage.__proto__),
    getArticle: dart.fnType(dart.void, [dart.legacy(core.String)]),
    onActivate: dart.fnType(dart.void, [dart.legacy(router_state.RouterState), dart.legacy(router_state.RouterState)])
  }));
  dart.setGetterSignature(article$.ArticlePage, () => ({
    __proto__: dart.getGetters(article$.ArticlePage.__proto__),
    safeVideoUrl: dart.legacy(dom_sanitization_service.SafeResourceUrl)
  }));
  dart.setLibraryUri(article$.ArticlePage, L26);
  dart.setFieldSignature(article$.ArticlePage, () => ({
    __proto__: dart.getFields(article$.ArticlePage.__proto__),
    lang: dart.fieldType(dart.legacy(translation_service.TranslationService)),
    article: dart.fieldType(dart.legacy(article.FullArticle)),
    sanitizer: dart.fieldType(dart.legacy(dom_sanitization_service.DomSanitizationService)),
    loading: dart.fieldType(dart.legacy(core.bool)),
    playingVideo: dart.fieldType(dart.legacy(core.bool))
  }));
  article$46template.ViewArticlePage0 = class ViewArticlePage0 extends component_view.ComponentView$(dart.legacy(article$.ArticlePage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/article/article.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], C55 || CT.C55);
      this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], C56 || CT.C56);
      this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9$].ngIf = _ctx.loading;
      this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.loading) && _ctx.article != null;
      this[_appEl_1$0].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$0].destroyNestedViews();
      this[_appEl_2$0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      article$46template.ViewArticlePage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = article$46template.ViewArticlePage0._componentStyles;
      if (styles == null) {
        article$46template.ViewArticlePage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(article$46template.styles$ArticlePage, article$46template.ViewArticlePage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C57 || CT.C57);
        }
      }
      this.componentStyles = styles;
    }
  };
  (article$46template.ViewArticlePage0.new = function(parentView, parentIndex) {
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$0] = null;
    article$46template.ViewArticlePage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("article"));
  }).prototype = article$46template.ViewArticlePage0.prototype;
  dart.addTypeTests(article$46template.ViewArticlePage0);
  dart.addTypeCaches(article$46template.ViewArticlePage0);
  dart.setMethodSignature(article$46template.ViewArticlePage0, () => ({
    __proto__: dart.getMethods(article$46template.ViewArticlePage0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template.ViewArticlePage0, L27);
  dart.setFieldSignature(article$46template.ViewArticlePage0, () => ({
    __proto__: dart.getFields(article$46template.ViewArticlePage0.__proto__),
    [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(article$46template.ViewArticlePage0, {
    /*article$46template.ViewArticlePage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$2 = dart.privateName(article$46template, "_compView_0");
  var _FluidSpinner_0_5 = dart.privateName(article$46template, "_FluidSpinner_0_5");
  article$46template._ViewArticlePage1 = class _ViewArticlePage1 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      this[_compView_0$2] = new spinner$46template.ViewFluidSpinner0.new(this, 0);
      let _el_0 = this[_compView_0$2].rootElement;
      this.addShimC(_el_0);
      this[_FluidSpinner_0_5] = new spinner.FluidSpinner.new();
      this[_compView_0$2].create(this[_FluidSpinner_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
  };
  (article$46template._ViewArticlePage1.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_FluidSpinner_0_5] = null;
    article$46template._ViewArticlePage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage1.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage1);
  dart.addTypeCaches(article$46template._ViewArticlePage1);
  dart.setMethodSignature(article$46template._ViewArticlePage1, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage1, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage1, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage1.__proto__),
    [_compView_0$2]: dart.fieldType(dart.legacy(spinner$46template.ViewFluidSpinner0)),
    [_FluidSpinner_0_5]: dart.fieldType(dart.legacy(spinner.FluidSpinner))
  }));
  var _appEl_0$ = dart.privateName(article$46template, "_appEl_0");
  var _NgIf_0_9$ = dart.privateName(article$46template, "_NgIf_0_9");
  var _appEl_3$ = dart.privateName(article$46template, "_appEl_3");
  var _NgIf_3_9$ = dart.privateName(article$46template, "_NgIf_3_9");
  var _compView_4$ = dart.privateName(article$46template, "_compView_4");
  var _SlicesComponent_4_5 = dart.privateName(article$46template, "_SlicesComponent_4_5");
  var _expr_0$3 = dart.privateName(article$46template, "_expr_0");
  var C58;
  var C59;
  var C60;
  article$46template._ViewArticlePage2 = class _ViewArticlePage2 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let _anchor_0 = dom_helpers.createAnchor();
      this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$], C58 || CT.C58);
      this[_NgIf_0_9$] = new ng_if.NgIf.new(this[_appEl_0$], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "content");
      this.addShimC(HtmlElementL().as(_el_1));
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2$0] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], C59 || CT.C59);
      this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_3$] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$], C60 || CT.C60);
      this[_NgIf_3_9$] = new ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      this[_compView_4$] = new slices$46template.ViewSlicesComponent0.new(this, 4);
      let _el_4 = this[_compView_4$].rootElement;
      _el_1[$append](_el_4);
      this.addShimC(_el_4);
      this[_SlicesComponent_4_5] = new slices.SlicesComponent.new();
      this[_compView_4$].create(this[_SlicesComponent_4_5]);
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_appEl_0$], _el_1]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.article.img[$isNotEmpty];
      this[_NgIf_2_9$0].ngIf = _ctx.article.date != null;
      this[_NgIf_3_9$].ngIf = _ctx.article.title[$isNotEmpty];
      let currVal_0 = _ctx.article.slices;
      if (dart.test(check_binding.checkBinding(this[_expr_0$3], currVal_0, "article.slices", "package:stevertus/src/pages/article/article.html"))) {
        this[_SlicesComponent_4_5].slices = currVal_0;
        this[_expr_0$3] = currVal_0;
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_2$0].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      this[_compView_4$].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_2$0].destroyNestedViews();
      this[_appEl_3$].destroyNestedViews();
      this[_compView_4$].destroyInternalState();
    }
  };
  (article$46template._ViewArticlePage2.new = function(parentView, parentIndex) {
    this[_appEl_0$] = null;
    this[_NgIf_0_9$] = null;
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$0] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_compView_4$] = null;
    this[_SlicesComponent_4_5] = null;
    this[_expr_0$3] = null;
    article$46template._ViewArticlePage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage2.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage2);
  dart.addTypeCaches(article$46template._ViewArticlePage2);
  dart.setMethodSignature(article$46template._ViewArticlePage2, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage2, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage2, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage2.__proto__),
    [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4$]: dart.fieldType(dart.legacy(slices$46template.ViewSlicesComponent0)),
    [_SlicesComponent_4_5]: dart.fieldType(dart.legacy(slices.SlicesComponent)),
    [_expr_0$3]: dart.fieldType(dart.dynamic)
  }));
  var _el_1 = dart.privateName(article$46template, "_el_1");
  var C61;
  var C62;
  article$46template._ViewArticlePage3 = class _ViewArticlePage3 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "img-container");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_el_1] = dom_helpers.appendElement(doc, _el_0, "img");
      dom_helpers.setAttribute(this[_el_1], "alt", "Header Image");
      this.addShimE(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], C61 || CT.C61);
      this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_3$] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$], C62 || CT.C62);
      this[_NgIf_3_9$] = new ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9$0].ngIf = _ctx.article.video != null && !dart.test(_ctx.playingVideo);
      this[_NgIf_3_9$].ngIf = _ctx.article.video != null && dart.test(_ctx.playingVideo);
      this[_appEl_2$0].detectChangesInNestedViews();
      this[_appEl_3$].detectChangesInNestedViews();
      let currVal_0 = _ctx.article.img;
      if (dart.test(check_binding.checkBinding(this[_expr_0$3], currVal_0, "article.img", "package:stevertus/src/pages/article/article.html"))) {
        dom_helpers.setProperty(this[_el_1], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$3] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2$0].destroyNestedViews();
      this[_appEl_3$].destroyNestedViews();
    }
  };
  (article$46template._ViewArticlePage3.new = function(parentView, parentIndex) {
    this[_appEl_2$0] = null;
    this[_NgIf_2_9$0] = null;
    this[_appEl_3$] = null;
    this[_NgIf_3_9$] = null;
    this[_expr_0$3] = null;
    this[_el_1] = null;
    article$46template._ViewArticlePage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage3.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage3);
  dart.addTypeCaches(article$46template._ViewArticlePage3);
  dart.setMethodSignature(article$46template._ViewArticlePage3, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage3, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage3, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage3.__proto__),
    [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$3]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _compView_1$0 = dart.privateName(article$46template, "_compView_1");
  var _FluidIcon_1_5 = dart.privateName(article$46template, "_FluidIcon_1_5");
  var _handleEvent_0$1 = dart.privateName(article$46template, "_handleEvent_0");
  article$46template._ViewArticlePage4 = class _ViewArticlePage4 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "startVideo");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1$0] = new icon$46template.ViewFluidIcon0.new(this, 1);
      let _el_1 = this[_compView_1$0].rootElement;
      _el_0[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "icon", "mediaPlay");
      this.addShimC(_el_1);
      this[_FluidIcon_1_5] = new icon.FluidIcon.new(_el_1);
      this[_compView_1$0].createAndProject(this[_FluidIcon_1_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$1)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_1_5].size = 40.0;
        this[_FluidIcon_1_5].icon = "mediaPlay";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_1_5].ngOnInit();
      }
      this[_compView_1$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$0].destroyInternalState();
    }
    [_handleEvent_0$1]($36event) {
      let _ctx = this.ctx;
      _ctx.playingVideo = true;
    }
  };
  (article$46template._ViewArticlePage4.new = function(parentView, parentIndex) {
    this[_compView_1$0] = null;
    this[_FluidIcon_1_5] = null;
    article$46template._ViewArticlePage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage4.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage4);
  dart.addTypeCaches(article$46template._ViewArticlePage4);
  dart.setMethodSignature(article$46template._ViewArticlePage4, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage4.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage4, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage4, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage4.__proto__),
    [_compView_1$0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_1_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _compView_3$ = dart.privateName(article$46template, "_compView_3");
  var _FluidIcon_3_5 = dart.privateName(article$46template, "_FluidIcon_3_5");
  article$46template._ViewArticlePage5 = class _ViewArticlePage5 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "video");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_el_1] = IFrameElementL().as(dom_helpers.appendElement(doc, _el_0, "iframe"));
      dom_helpers.setAttribute(this[_el_1], "allow", "autoplay");
      dom_helpers.setAttribute(this[_el_1], "allowfullscreen", "");
      dom_helpers.setAttribute(this[_el_1], "frameborder", "0");
      this.addShimC(this[_el_1]);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "stopVideo");
      this.addShimC(_el_2);
      this[_compView_3$] = new icon$46template.ViewFluidIcon0.new(this, 3);
      let _el_3 = this[_compView_3$].rootElement;
      _el_2[$append](_el_3);
      dom_helpers.setAttribute(_el_3, "icon", "close");
      this.addShimC(_el_3);
      this[_FluidIcon_3_5] = new icon.FluidIcon.new(_el_3);
      this[_compView_3$].createAndProject(this[_FluidIcon_3_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$1)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_3_5].size = 20.0;
        this[_FluidIcon_3_5].icon = "close";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_3_5].ngOnInit();
      }
      let currVal_0 = _ctx.safeVideoUrl;
      if (dart.test(check_binding.checkBinding(this[_expr_0$3], currVal_0, "safeVideoUrl", "package:stevertus/src/pages/article/article.html"))) {
        dom_helpers.setProperty(this[_el_1], "src", app_view_utils.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_0));
        this[_expr_0$3] = currVal_0;
      }
      this[_compView_3$].detectChanges();
    }
    destroyInternal() {
      this[_compView_3$].destroyInternalState();
    }
    [_handleEvent_0$1]($36event) {
      let _ctx = this.ctx;
      _ctx.playingVideo = false;
    }
  };
  (article$46template._ViewArticlePage5.new = function(parentView, parentIndex) {
    this[_compView_3$] = null;
    this[_FluidIcon_3_5] = null;
    this[_expr_0$3] = null;
    this[_el_1] = null;
    article$46template._ViewArticlePage5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage5.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage5);
  dart.addTypeCaches(article$46template._ViewArticlePage5);
  dart.setMethodSignature(article$46template._ViewArticlePage5, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage5.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage5, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage5, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage5.__proto__),
    [_compView_3$]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_3_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_expr_0$3]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.IFrameElement))
  }));
  var _textBinding_1$2 = dart.privateName(article$46template, "_textBinding_1");
  var _textBinding_3$ = dart.privateName(article$46template, "_textBinding_3");
  var _textBinding_5 = dart.privateName(article$46template, "_textBinding_5");
  article$46template._ViewArticlePage6 = class _ViewArticlePage6 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "date");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$2].element);
      let _text_2 = dom_helpers.appendText(_el_0, "/");
      _el_0[$append](this[_textBinding_3$].element);
      let _text_4 = dom_helpers.appendText(_el_0, "/");
      _el_0[$append](this[_textBinding_5].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1$2].updateTextWithPrimitive(_ctx.article.date.day);
      this[_textBinding_3$].updateTextWithPrimitive(_ctx.article.date.month);
      this[_textBinding_5].updateTextWithPrimitive(_ctx.article.date.year);
    }
  };
  (article$46template._ViewArticlePage6.new = function(parentView, parentIndex) {
    this[_textBinding_1$2] = new text_binding.TextBinding.new();
    this[_textBinding_3$] = new text_binding.TextBinding.new();
    this[_textBinding_5] = new text_binding.TextBinding.new();
    article$46template._ViewArticlePage6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage6.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage6);
  dart.addTypeCaches(article$46template._ViewArticlePage6);
  dart.setMethodSignature(article$46template._ViewArticlePage6, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage6, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage6, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage6.__proto__),
    [_textBinding_1$2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_3$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_5]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  article$46template._ViewArticlePage7 = class _ViewArticlePage7 extends embedded_view.EmbeddedView$(dart.legacy(article$.ArticlePage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h1");
      this.updateChildClass(HtmlElementL().as(_el_0), "title");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$2].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1$2].updateText(interpolate.interpolateString0(_ctx.article.title));
    }
  };
  (article$46template._ViewArticlePage7.new = function(parentView, parentIndex) {
    this[_textBinding_1$2] = new text_binding.TextBinding.new();
    article$46template._ViewArticlePage7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = article$46template._ViewArticlePage7.prototype;
  dart.addTypeTests(article$46template._ViewArticlePage7);
  dart.addTypeCaches(article$46template._ViewArticlePage7);
  dart.setMethodSignature(article$46template._ViewArticlePage7, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePage7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePage7, L27);
  dart.setFieldSignature(article$46template._ViewArticlePage7, () => ({
    __proto__: dart.getFields(article$46template._ViewArticlePage7.__proto__),
    [_textBinding_1$2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  article$46template._ViewArticlePageHost0 = class _ViewArticlePageHost0 extends host_view.HostView$(dart.legacy(article$.ArticlePage)) {
    build() {
      this.componentView = new article$46template.ViewArticlePage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ArticlePageL(), dart.wrapType(ArticlePageL()), dart.fn(() => new article$.ArticlePage.new(DomSanitizationServiceL().as(this.injectorGet(dart.wrapType(DomSanitizationServiceL()), this.parentIndex)), TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToArticlePageL())) : new article$.ArticlePage.new(DomSanitizationServiceL().as(this.injectorGet(dart.wrapType(DomSanitizationServiceL()), this.parentIndex)), TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (article$46template._ViewArticlePageHost0.new = function() {
    article$46template._ViewArticlePageHost0.__proto__.new.call(this);
    ;
  }).prototype = article$46template._ViewArticlePageHost0.prototype;
  dart.addTypeTests(article$46template._ViewArticlePageHost0);
  dart.addTypeCaches(article$46template._ViewArticlePageHost0);
  dart.setMethodSignature(article$46template._ViewArticlePageHost0, () => ({
    __proto__: dart.getMethods(article$46template._ViewArticlePageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(article$46template._ViewArticlePageHost0, L27);
  var C63;
  article$46template.createArticlePageFactory = function createArticlePageFactory() {
    return new (ComponentFactoryOfArticlePageL()).new("article", C63 || CT.C63);
  };
  article$46template.viewFactory_ArticlePage1 = function viewFactory_ArticlePage1(parentView, parentIndex) {
    return new article$46template._ViewArticlePage1.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage2 = function viewFactory_ArticlePage2(parentView, parentIndex) {
    return new article$46template._ViewArticlePage2.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage3 = function viewFactory_ArticlePage3(parentView, parentIndex) {
    return new article$46template._ViewArticlePage3.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage4 = function viewFactory_ArticlePage4(parentView, parentIndex) {
    return new article$46template._ViewArticlePage4.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage5 = function viewFactory_ArticlePage5(parentView, parentIndex) {
    return new article$46template._ViewArticlePage5.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage6 = function viewFactory_ArticlePage6(parentView, parentIndex) {
    return new article$46template._ViewArticlePage6.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePage7 = function viewFactory_ArticlePage7(parentView, parentIndex) {
    return new article$46template._ViewArticlePage7.new(parentView, parentIndex);
  };
  article$46template.viewFactory_ArticlePageHost0 = function viewFactory_ArticlePageHost0() {
    return new article$46template._ViewArticlePageHost0.new();
  };
  article$46template.initReflector = function initReflector$4() {
    if (dart.test(article$46template._visited)) {
      return;
    }
    article$46template._visited = true;
  };
  dart.copyProperties(article$46template, {
    get ArticlePageNgFactory() {
      return article$46template._ArticlePageNgFactory;
    }
  });
  var C64;
  dart.defineLazy(article$46template, {
    /*article$46template.styles$ArticlePage*/get styles$ArticlePage() {
      return [article$46css$46shim.styles];
    },
    /*article$46template._ArticlePageNgFactory*/get _ArticlePageNgFactory() {
      return C64 || CT.C64;
    },
    /*article$46template.styles$ArticlePageHost*/get styles$ArticlePageHost() {
      return C10 || CT.C10;
    },
    /*article$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _appEl_0$0 = dart.privateName(slices$46template, "_appEl_0");
  var _NgFor_0_9$ = dart.privateName(slices$46template, "_NgFor_0_9");
  var _expr_0$4 = dart.privateName(slices$46template, "_expr_0");
  var C65;
  var C66;
  slices$46template.ViewSlicesComponent0 = class ViewSlicesComponent0 extends component_view.ComponentView$(dart.legacy(slices.SlicesComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/article/slices/slices.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$0], C65 || CT.C65);
      this[_NgFor_0_9$] = new ng_for.NgFor.new(this[_appEl_0$0], _TemplateRef_0_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.slices;
      if (dart.test(check_binding.checkBinding(this[_expr_0$4], currVal_0, "slices", "package:stevertus/src/pages/article/slices/slices.html"))) {
        this[_NgFor_0_9$].ngForOf = currVal_0;
        this[_expr_0$4] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_0_9$].ngDoCheck();
      }
      this[_appEl_0$0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      slices$46template.ViewSlicesComponent0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = slices$46template.ViewSlicesComponent0._componentStyles;
      if (styles == null) {
        slices$46template.ViewSlicesComponent0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(slices$46template.styles$SlicesComponent, slices$46template.ViewSlicesComponent0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C66 || CT.C66);
        }
      }
      this.componentStyles = styles;
    }
  };
  (slices$46template.ViewSlicesComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0$0] = null;
    this[_NgFor_0_9$] = null;
    this[_expr_0$4] = null;
    slices$46template.ViewSlicesComponent0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("article-slices"));
  }).prototype = slices$46template.ViewSlicesComponent0.prototype;
  dart.addTypeTests(slices$46template.ViewSlicesComponent0);
  dart.addTypeCaches(slices$46template.ViewSlicesComponent0);
  dart.setMethodSignature(slices$46template.ViewSlicesComponent0, () => ({
    __proto__: dart.getMethods(slices$46template.ViewSlicesComponent0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template.ViewSlicesComponent0, L28);
  dart.setFieldSignature(slices$46template.ViewSlicesComponent0, () => ({
    __proto__: dart.getFields(slices$46template.ViewSlicesComponent0.__proto__),
    [_appEl_0$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_0_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(slices$46template.ViewSlicesComponent0, {
    /*slices$46template.ViewSlicesComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _appEl_1$1 = dart.privateName(slices$46template, "_appEl_1");
  var _NgIf_1_9$0 = dart.privateName(slices$46template, "_NgIf_1_9");
  var _appEl_3$0 = dart.privateName(slices$46template, "_appEl_3");
  var _NgIf_3_9$0 = dart.privateName(slices$46template, "_NgIf_3_9");
  var _appEl_4$ = dart.privateName(slices$46template, "_appEl_4");
  var _NgIf_4_9$ = dart.privateName(slices$46template, "_NgIf_4_9");
  var _appEl_5$1 = dart.privateName(slices$46template, "_appEl_5");
  var _NgIf_5_9$1 = dart.privateName(slices$46template, "_NgIf_5_9");
  var C67;
  var C68;
  var C69;
  var C70;
  slices$46template._ViewSlicesComponent1 = class _ViewSlicesComponent1 extends embedded_view.EmbeddedView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "slice");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$1], C67 || CT.C67);
      this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(_el_0, " ");
      let _anchor_3 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_3$0] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$0], C68 || CT.C68);
      this[_NgIf_3_9$0] = new ng_if.NgIf.new(this[_appEl_3$0], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4$] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$], C69 || CT.C69);
      this[_NgIf_4_9$] = new ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5$1] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$1], C70 || CT.C70);
      this[_NgIf_5_9$1] = new ng_if.NgIf.new(this[_appEl_5$1], _TemplateRef_5_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_slice = optimizations.unsafeCast(SliceL(), this.locals[$_get]("$implicit"));
      this[_NgIf_1_9$0].ngIf = _ctx.checkDownload(local_slice) != null;
      this[_NgIf_3_9$0].ngIf = _ctx.checkImage(local_slice) != null;
      this[_NgIf_4_9$].ngIf = _ctx.checkText(local_slice) != null;
      this[_NgIf_5_9$1].ngIf = _ctx.checkRecommendations(local_slice) != null;
      this[_appEl_1$1].detectChangesInNestedViews();
      this[_appEl_3$0].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      this[_appEl_5$1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$1].destroyNestedViews();
      this[_appEl_3$0].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
      this[_appEl_5$1].destroyNestedViews();
    }
  };
  (slices$46template._ViewSlicesComponent1.new = function(parentView, parentIndex) {
    this[_appEl_1$1] = null;
    this[_NgIf_1_9$0] = null;
    this[_appEl_3$0] = null;
    this[_NgIf_3_9$0] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_appEl_5$1] = null;
    this[_NgIf_5_9$1] = null;
    slices$46template._ViewSlicesComponent1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = slices$46template._ViewSlicesComponent1.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponent1);
  dart.addTypeCaches(slices$46template._ViewSlicesComponent1);
  dart.setMethodSignature(slices$46template._ViewSlicesComponent1, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponent1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponent1, L28);
  dart.setFieldSignature(slices$46template._ViewSlicesComponent1, () => ({
    __proto__: dart.getFields(slices$46template._ViewSlicesComponent1.__proto__),
    [_appEl_1$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _textBinding_1$3 = dart.privateName(slices$46template, "_textBinding_1");
  var _compView_0$3 = dart.privateName(slices$46template, "_compView_0");
  var _FluidButton_0_5 = dart.privateName(slices$46template, "_FluidButton_0_5");
  var _handleEvent_0$2 = dart.privateName(slices$46template, "_handleEvent_0");
  slices$46template._ViewSlicesComponent2 = class _ViewSlicesComponent2 extends embedded_view.EmbeddedView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      this[_compView_0$3] = new button$46template.ViewFluidButton0.new(this, 0);
      let _el_0 = this[_compView_0$3].rootElement;
      this.updateChildClass(_el_0, "download");
      dom_helpers.setAttribute(_el_0, "fluidBtn", "");
      dom_helpers.setAttribute(_el_0, "highlight", "");
      this.addShimC(_el_0);
      this[_FluidButton_0_5] = new button.FluidButton.new(_el_0);
      this[_compView_0$3].createAndProject(this[_FluidButton_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$3].element])]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$2)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let t6;
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_slice = optimizations.unsafeCast(SliceL(), optimizations.unsafeCast(_ViewSlicesComponent1L(), this.parentView).locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_FluidButton_0_5].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_0_5].ngOnInit();
      }
      this[_textBinding_1$3].updateText(StringL().as(interpolate.interpolate0((t6 = _ctx.checkDownload(local_slice).title, t6 == null ? "Download" : t6))));
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroyInternalState();
    }
    [_handleEvent_0$2]($36event) {
      let local_slice = optimizations.unsafeCast(SliceL(), optimizations.unsafeCast(_ViewSlicesComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.openDownloadLink(DownloadSliceL().as(local_slice));
    }
  };
  (slices$46template._ViewSlicesComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1$3] = new text_binding.TextBinding.new();
    this[_compView_0$3] = null;
    this[_FluidButton_0_5] = null;
    slices$46template._ViewSlicesComponent2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = slices$46template._ViewSlicesComponent2.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponent2);
  dart.addTypeCaches(slices$46template._ViewSlicesComponent2);
  dart.setMethodSignature(slices$46template._ViewSlicesComponent2, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponent2.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponent2, L28);
  dart.setFieldSignature(slices$46template._ViewSlicesComponent2, () => ({
    __proto__: dart.getFields(slices$46template._ViewSlicesComponent2.__proto__),
    [_textBinding_1$3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$3]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_0_5]: dart.fieldType(dart.legacy(button.FluidButton))
  }));
  var _el_0$0 = dart.privateName(slices$46template, "_el_0");
  slices$46template._ViewSlicesComponent3 = class _ViewSlicesComponent3 extends embedded_view.EmbeddedView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$0] = doc[$createElement]("img");
      dom_helpers.setAttribute(this[_el_0$0], "alt", "");
      this.updateChildClass(HtmlElementL().as(this[_el_0$0]), "img");
      this.addShimE(this[_el_0$0]);
      this.initRootNode(this[_el_0$0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_slice = optimizations.unsafeCast(SliceL(), optimizations.unsafeCast(_ViewSlicesComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.checkImage(local_slice).url;
      if (dart.test(check_binding.checkBinding(this[_expr_0$4], currVal_0, "checkImage(slice).url", "package:stevertus/src/pages/article/slices/slices.html"))) {
        dom_helpers.setProperty(this[_el_0$0], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$4] = currVal_0;
      }
    }
  };
  (slices$46template._ViewSlicesComponent3.new = function(parentView, parentIndex) {
    this[_expr_0$4] = null;
    this[_el_0$0] = null;
    slices$46template._ViewSlicesComponent3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = slices$46template._ViewSlicesComponent3.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponent3);
  dart.addTypeCaches(slices$46template._ViewSlicesComponent3);
  dart.setMethodSignature(slices$46template._ViewSlicesComponent3, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponent3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponent3, L28);
  dart.setFieldSignature(slices$46template._ViewSlicesComponent3, () => ({
    __proto__: dart.getFields(slices$46template._ViewSlicesComponent3.__proto__),
    [_expr_0$4]: dart.fieldType(dart.dynamic),
    [_el_0$0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _TextRenderComponent_0_5 = dart.privateName(slices$46template, "_TextRenderComponent_0_5");
  slices$46template._ViewSlicesComponent4 = class _ViewSlicesComponent4 extends embedded_view.EmbeddedView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      this[_compView_0$3] = new render$46template.ViewTextRenderComponent0.new(this, 0);
      let _el_0 = this[_compView_0$3].rootElement;
      this.addShimC(_el_0);
      this[_TextRenderComponent_0_5] = new render.TextRenderComponent.new();
      this[_compView_0$3].create(this[_TextRenderComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_slice = optimizations.unsafeCast(SliceL(), optimizations.unsafeCast(_ViewSlicesComponent1L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.checkText(local_slice).body;
      if (dart.test(check_binding.checkBinding(this[_expr_0$4], currVal_0, "checkText(slice).body", "package:stevertus/src/pages/article/slices/slices.html"))) {
        this[_TextRenderComponent_0_5].text = currVal_0;
        this[_expr_0$4] = currVal_0;
      }
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroyInternalState();
    }
  };
  (slices$46template._ViewSlicesComponent4.new = function(parentView, parentIndex) {
    this[_compView_0$3] = null;
    this[_TextRenderComponent_0_5] = null;
    this[_expr_0$4] = null;
    slices$46template._ViewSlicesComponent4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = slices$46template._ViewSlicesComponent4.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponent4);
  dart.addTypeCaches(slices$46template._ViewSlicesComponent4);
  dart.setMethodSignature(slices$46template._ViewSlicesComponent4, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponent4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponent4, L28);
  dart.setFieldSignature(slices$46template._ViewSlicesComponent4, () => ({
    __proto__: dart.getFields(slices$46template._ViewSlicesComponent4.__proto__),
    [_compView_0$3]: dart.fieldType(dart.legacy(render$46template.ViewTextRenderComponent0)),
    [_TextRenderComponent_0_5]: dart.fieldType(dart.legacy(render.TextRenderComponent)),
    [_expr_0$4]: dart.fieldType(dart.dynamic)
  }));
  var _DocumentGridComponent_0_5 = dart.privateName(slices$46template, "_DocumentGridComponent_0_5");
  slices$46template._ViewSlicesComponent5 = class _ViewSlicesComponent5 extends embedded_view.EmbeddedView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      this[_compView_0$3] = new grid$46template.ViewDocumentGridComponent0.new(this, 0);
      let _el_0 = this[_compView_0$3].rootElement;
      dom_helpers.setAttribute(_el_0, "scroll", "");
      this.addShimC(_el_0);
      this[_DocumentGridComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DocumentGridComponentL(), dart.wrapType(DocumentGridComponentL()), dart.fn(() => new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex))), VoidToDocumentGridComponentL())) : new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex)));
      this[_compView_0$3].create(this[_DocumentGridComponent_0_5]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      let local_slice = optimizations.unsafeCast(SliceL(), optimizations.unsafeCast(_ViewSlicesComponent1L(), this.parentView).locals[$_get]("$implicit"));
      if (dart.test(firstCheck)) {
        this[_DocumentGridComponent_0_5].scroll = true;
      }
      let currVal_0 = _ctx.checkRecommendations(local_slice).recommended;
      if (dart.test(check_binding.checkBinding(this[_expr_0$4], currVal_0, "checkRecommendations(slice).recommended", "package:stevertus/src/pages/article/slices/slices.html"))) {
        this[_DocumentGridComponent_0_5].documents = currVal_0;
        this[_expr_0$4] = currVal_0;
      }
      this[_compView_0$3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$3].destroyInternalState();
    }
  };
  (slices$46template._ViewSlicesComponent5.new = function(parentView, parentIndex) {
    this[_compView_0$3] = null;
    this[_DocumentGridComponent_0_5] = null;
    this[_expr_0$4] = null;
    slices$46template._ViewSlicesComponent5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = slices$46template._ViewSlicesComponent5.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponent5);
  dart.addTypeCaches(slices$46template._ViewSlicesComponent5);
  dart.setMethodSignature(slices$46template._ViewSlicesComponent5, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponent5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponent5, L28);
  dart.setFieldSignature(slices$46template._ViewSlicesComponent5, () => ({
    __proto__: dart.getFields(slices$46template._ViewSlicesComponent5.__proto__),
    [_compView_0$3]: dart.fieldType(dart.legacy(grid$46template.ViewDocumentGridComponent0)),
    [_DocumentGridComponent_0_5]: dart.fieldType(dart.legacy(grid.DocumentGridComponent)),
    [_expr_0$4]: dart.fieldType(dart.dynamic)
  }));
  slices$46template._ViewSlicesComponentHost0 = class _ViewSlicesComponentHost0 extends host_view.HostView$(dart.legacy(slices.SlicesComponent)) {
    build() {
      this.componentView = new slices$46template.ViewSlicesComponent0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new slices.SlicesComponent.new();
      this.initRootNode(_el_0);
    }
  };
  (slices$46template._ViewSlicesComponentHost0.new = function() {
    slices$46template._ViewSlicesComponentHost0.__proto__.new.call(this);
    ;
  }).prototype = slices$46template._ViewSlicesComponentHost0.prototype;
  dart.addTypeTests(slices$46template._ViewSlicesComponentHost0);
  dart.addTypeCaches(slices$46template._ViewSlicesComponentHost0);
  dart.setMethodSignature(slices$46template._ViewSlicesComponentHost0, () => ({
    __proto__: dart.getMethods(slices$46template._ViewSlicesComponentHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(slices$46template._ViewSlicesComponentHost0, L28);
  var C71;
  slices$46template.createSlicesComponentFactory = function createSlicesComponentFactory() {
    return new (ComponentFactoryOfSlicesComponentL()).new("article-slices", C71 || CT.C71);
  };
  slices$46template.viewFactory_SlicesComponent1 = function viewFactory_SlicesComponent1(parentView, parentIndex) {
    return new slices$46template._ViewSlicesComponent1.new(parentView, parentIndex);
  };
  slices$46template.viewFactory_SlicesComponent2 = function viewFactory_SlicesComponent2(parentView, parentIndex) {
    return new slices$46template._ViewSlicesComponent2.new(parentView, parentIndex);
  };
  slices$46template.viewFactory_SlicesComponent3 = function viewFactory_SlicesComponent3(parentView, parentIndex) {
    return new slices$46template._ViewSlicesComponent3.new(parentView, parentIndex);
  };
  slices$46template.viewFactory_SlicesComponent4 = function viewFactory_SlicesComponent4(parentView, parentIndex) {
    return new slices$46template._ViewSlicesComponent4.new(parentView, parentIndex);
  };
  slices$46template.viewFactory_SlicesComponent5 = function viewFactory_SlicesComponent5(parentView, parentIndex) {
    return new slices$46template._ViewSlicesComponent5.new(parentView, parentIndex);
  };
  slices$46template.viewFactory_SlicesComponentHost0 = function viewFactory_SlicesComponentHost0() {
    return new slices$46template._ViewSlicesComponentHost0.new();
  };
  slices$46template.initReflector = function initReflector$5() {
    if (dart.test(slices$46template._visited)) {
      return;
    }
    slices$46template._visited = true;
  };
  dart.copyProperties(slices$46template, {
    get SlicesComponentNgFactory() {
      return slices$46template._SlicesComponentNgFactory;
    }
  });
  var C72;
  dart.defineLazy(slices$46template, {
    /*slices$46template.styles$SlicesComponent*/get styles$SlicesComponent() {
      return [slices$46css$46shim.styles];
    },
    /*slices$46template._SlicesComponentNgFactory*/get _SlicesComponentNgFactory() {
      return C72 || CT.C72;
    },
    /*slices$46template.styles$SlicesComponentHost*/get styles$SlicesComponentHost() {
      return C10 || CT.C10;
    },
    /*slices$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(slices$46css$46shim, {
    /*slices$46css$46shim.styles*/get styles() {
      return [".download._ngcontent-%ID%{width:60%;min-width:200px;margin:16px 20%}.img._ngcontent-%ID%{width:80%;margin:16px 10%}doc-grid._ngcontent-%ID%{margin:16px -32px;width:100vw}"];
    }
  }, true);
  var sanitizer$0 = dart.privateName(safe_url, "SafeURLPipe.sanitizer");
  safe_url.SafeURLPipe = class SafeURLPipe extends core.Object {
    get sanitizer() {
      return this[sanitizer$0];
    }
    set sanitizer(value) {
      this[sanitizer$0] = value;
    }
    transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(StringL().as(url));
    }
  };
  (safe_url.SafeURLPipe.new = function(sanitizer) {
    this[sanitizer$0] = sanitizer;
    ;
  }).prototype = safe_url.SafeURLPipe.prototype;
  dart.addTypeTests(safe_url.SafeURLPipe);
  dart.addTypeCaches(safe_url.SafeURLPipe);
  safe_url.SafeURLPipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(safe_url.SafeURLPipe, () => ({
    __proto__: dart.getMethods(safe_url.SafeURLPipe.__proto__),
    transform: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setLibraryUri(safe_url.SafeURLPipe, L29);
  dart.setFieldSignature(safe_url.SafeURLPipe, () => ({
    __proto__: dart.getFields(safe_url.SafeURLPipe.__proto__),
    sanitizer: dart.fieldType(dart.legacy(dom_sanitization_service.DomSanitizationService))
  }));
  dart.defineLazy(article$46css$46shim, {
    /*article$46css$46shim.styles*/get styles() {
      return ["fluid-spinner._ngcontent-%ID%{position:absolute;top:20%;left:50%}.container._ngcontent-%ID%{min-height:100vh;max-width:860px;margin:auto;padding:32px 16px}.content._ngcontent-%ID%{padding:4px 20px}.date._ngcontent-%ID%{text-align:end}.title._ngcontent-%ID%{font-family:Lato;font-style:normal;font-weight:900;font-size:32px;color:var(--primary);margin:4px 0}.img-container._ngcontent-%ID%{overflow:hidden;height:0;padding-top:30%;position:relative;background-color:var(--primary-dark);border-radius:10px}.img-container._ngcontent-%ID% img._ngcontent-%ID%{position:absolute;top:0;width:100%;height:100%;object-fit:cover;object-position:center}.img-container._ngcontent-%ID% .startVideo._ngcontent-%ID%{position:absolute;top:50%;left:50%;width:60px;height:60px;border-radius:30px;background:rgba(58,58,58,0.2);transform:translate(-50%,-50%);cursor:pointer}.img-container._ngcontent-%ID% .startVideo._ngcontent-%ID% fluid-icon._ngcontent-%ID%{position:absolute;color:rgba(255,255,255,0.7);top:10px;left:12px}.img-container._ngcontent-%ID% .startVideo:hover._ngcontent-%ID%{background:rgba(58,58,58,0.6)}.img-container._ngcontent-%ID% .startVideo:hover._ngcontent-%ID% fluid-icon._ngcontent-%ID%{color:white}.img-container._ngcontent-%ID% .startVideo:active._ngcontent-%ID%{background:#3a3a3a}.img-container._ngcontent-%ID% .video._ngcontent-%ID%{position:absolute;top:0;width:60%;height:100%;padding:0 20%}.img-container._ngcontent-%ID% .video._ngcontent-%ID% iframe._ngcontent-%ID%{width:100%;height:100%;background-color:black}.img-container._ngcontent-%ID% .video._ngcontent-%ID% .stopVideo._ngcontent-%ID%{position:absolute;top:calc(50% - 20px);right:calc(20% - 20px);width:40px;height:40px;border-radius:20px;background:rgba(58,58,58,0.4);cursor:pointer}.img-container._ngcontent-%ID% .video._ngcontent-%ID% .stopVideo._ngcontent-%ID% fluid-icon._ngcontent-%ID%{position:absolute;color:rgba(255,255,255,0.7);top:10px;left:12px}.img-container._ngcontent-%ID% .video._ngcontent-%ID% .stopVideo:hover._ngcontent-%ID%{background:rgba(58,58,58,0.6)}.img-container._ngcontent-%ID% .video._ngcontent-%ID% .stopVideo:hover._ngcontent-%ID% fluid-icon._ngcontent-%ID%{color:white}.img-container._ngcontent-%ID% .video._ngcontent-%ID% .stopVideo:active._ngcontent-%ID%{background:#3a3a3a}"];
    }
  }, true);
  var name$ = dart.privateName(contact, "ContactPage.name");
  var email = dart.privateName(contact, "ContactPage.email");
  var message = dart.privateName(contact, "ContactPage.message");
  var error = dart.privateName(contact, "ContactPage.error");
  var success = dart.privateName(contact, "ContactPage.success");
  contact.ContactPage = class ContactPage extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get message() {
      return this[message];
    }
    set message(value) {
      this[message] = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get success() {
      return this[success];
    }
    set success(value) {
      this[success] = value;
    }
    submit() {
      this.error = "";
      if (this.name[$isEmpty]) {
        this.error = "Please enter your name!";
        return;
      }
      let regexp = core.RegExp.new("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
      if (this.email[$isEmpty] || !dart.test(regexp.hasMatch(this.email))) {
        this.error = "Please enter a valid email!";
        return;
      }
      if (this.message[$isEmpty]) {
        this.error = "Please enter your message!";
        return;
      }
      http.post(contact.URL, {body: new (IdentityMapOfStringL$StringL()).from(["name", this.name, "email", this.email, "message", this.message])}).then(core.Null, dart.fn(res => {
        if (res != null) {
          this.success = true;
          this.name = "";
          this.email = "";
          this.message = "";
        }
      }, ResponseLToNullN())).catchError(dart.fn(err => {
        this.error = "An error occured, please try again!";
      }, dynamicToNullN()));
    }
  };
  (contact.ContactPage.new = function() {
    this[name$] = "";
    this[email] = "";
    this[message] = "";
    this[error] = "";
    this[success] = null;
    ;
  }).prototype = contact.ContactPage.prototype;
  dart.addTypeTests(contact.ContactPage);
  dart.addTypeCaches(contact.ContactPage);
  dart.setMethodSignature(contact.ContactPage, () => ({
    __proto__: dart.getMethods(contact.ContactPage.__proto__),
    submit: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(contact.ContactPage, L30);
  dart.setFieldSignature(contact.ContactPage, () => ({
    __proto__: dart.getFields(contact.ContactPage.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    email: dart.fieldType(dart.legacy(core.String)),
    message: dart.fieldType(dart.legacy(core.String)),
    error: dart.fieldType(dart.legacy(core.String)),
    success: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(contact, {
    /*contact.URL*/get URL() {
      return "https://end5dyr2pyfxi28.m.pipedream.net";
    }
  }, true);
  routes.RoutePaths = class RoutePaths extends core.Object {};
  (routes.RoutePaths.new = function() {
    ;
  }).prototype = routes.RoutePaths.prototype;
  dart.addTypeTests(routes.RoutePaths);
  dart.addTypeCaches(routes.RoutePaths);
  dart.setLibraryUri(routes.RoutePaths, L31);
  dart.defineLazy(routes.RoutePaths, {
    /*routes.RoutePaths.home*/get home() {
      return new route_path.RoutePath.new({path: ""});
    },
    /*routes.RoutePaths.contact*/get contact() {
      return new route_path.RoutePath.new({path: "contact"});
    },
    /*routes.RoutePaths.articles*/get articles() {
      return new route_path.RoutePath.new({path: "articles"});
    },
    /*routes.RoutePaths.projects*/get projects() {
      return new route_path.RoutePath.new({path: "projects"});
    },
    /*routes.RoutePaths.article*/get article() {
      return new route_path.RoutePath.new({path: "article/:id"});
    },
    /*routes.RoutePaths.tekpack*/get tekpack() {
      return new route_path.RoutePath.new({path: "tekpack"});
    },
    /*routes.RoutePaths.craftingTool*/get craftingTool() {
      return new route_path.RoutePath.new({path: "tools/crafting"});
    },
    /*routes.RoutePaths.guiTool*/get guiTool() {
      return new route_path.RoutePath.new({path: "tools/gui"});
    },
    /*routes.RoutePaths.blocksTool*/get blocksTool() {
      return new route_path.RoutePath.new({path: "tools/blocks"});
    }
  }, true);
  routes.Routes = class Routes extends core.Object {};
  (routes.Routes.new = function() {
    ;
  }).prototype = routes.Routes.prototype;
  dart.addTypeTests(routes.Routes);
  dart.addTypeCaches(routes.Routes);
  dart.setLibraryUri(routes.Routes, L31);
  dart.defineLazy(routes.Routes, {
    /*routes.Routes.contact*/get contact() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.contact, component: contact$46template.ContactPageNgFactory});
    },
    /*routes.Routes.home*/get home() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.home, component: landing$46template.LandingPageNgFactory, useAsDefault: true});
    },
    /*routes.Routes.article*/get article() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.article, component: article$46template.ArticlePageNgFactory});
    },
    /*routes.Routes.articles*/get articles() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.articles, component: articles$46template.ArticlesPageNgFactory});
    },
    /*routes.Routes.projects*/get projects() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.projects, component: projects$46template.ProjectsPageNgFactory});
    },
    /*routes.Routes.tekpack*/get tekpack() {
      return new route_definition.DeferredRouteDefinition.__({routePath: routes.RoutePaths.tekpack, loader: dart.fn(() => async.async(ComponentFactoryLOfTekPackPageL(), function*() {
          yield dart.loadLibrary();
          true;
          return tekpack$46template.TekPackPageNgFactory;
        }), VoidToFutureLOfComponentFactoryLOfTekPackPageL())});
    },
    /*routes.Routes.craftingTool*/get craftingTool() {
      return new route_definition.DeferredRouteDefinition.__({routePath: routes.RoutePaths.craftingTool, loader: dart.fn(() => async.async(ComponentFactoryLOfCraftingToolPageL(), function*() {
          yield dart.loadLibrary();
          true;
          return crafting$46template.CraftingToolPageNgFactory;
        }), VoidToFutureLOfComponentFactoryLOfCraftingToolPageL())});
    },
    /*routes.Routes.guiTool*/get guiTool() {
      return new route_definition.DeferredRouteDefinition.__({routePath: routes.RoutePaths.guiTool, loader: dart.fn(() => async.async(ComponentFactoryLOfGuiToolPageL(), function*() {
          yield dart.loadLibrary();
          true;
          return gui$46template.GuiToolPageNgFactory;
        }), VoidToFutureLOfComponentFactoryLOfGuiToolPageL())});
    },
    /*routes.Routes.blocksTool*/get blocksTool() {
      return new route_definition.DeferredRouteDefinition.__({routePath: routes.RoutePaths.blocksTool, loader: dart.fn(() => async.async(ComponentFactoryLOfBlocksToolPageL(), function*() {
          yield dart.loadLibrary();
          true;
          return blocks$46template.BlocksToolPageNgFactory;
        }), VoidToFutureLOfComponentFactoryLOfBlocksToolPageL())});
    },
    /*routes.Routes.all*/get all() {
      return (() => {
        let t6 = JSArrayOfRouteDefinitionL().of([]);
        t6[$add](routes.Routes.contact);
        t6[$add](routes.Routes.home);
        t6[$add](routes.Routes.article);
        t6[$add](routes.Routes.articles);
        t6[$add](routes.Routes.projects);
        t6[$add](routes.Routes.tekpack);
        t6[$add](routes.Routes.craftingTool);
        t6[$add](routes.Routes.guiTool);
        t6[$add](routes.Routes.blocksTool);
        for (let t7 of routes.redirects)
          t6[$add](t7);
        t6[$add](new route_definition.ComponentRouteDefinition.__({path: ".+", component: not_found$46template.NotFoundComponentNgFactory}));
        return t6;
      })();
    }
  }, true);
  routes.redirectTo = function redirectTo(path, redirect) {
    return new route_definition.RedirectRouteDefinition.__({path: path, redirectTo: redirect});
  };
  dart.defineLazy(routes, {
    /*routes.redirects*/get redirects() {
      return JSArrayOfRouteDefinitionL().of([routes.redirectTo("worldedit/package", "/article/worldedit-package"), routes.redirectTo("worldedit/cyl", "/article/worldedit-cyl"), routes.redirectTo("worldedit/qb", "/article/worldedit-qb"), routes.redirectTo("worldedit/li", "/article/worldedit-li"), routes.redirectTo("worldedit/br", "/article/worldedit-br"), routes.redirectTo("worldedit/tb", "/article/worldedit-tb"), routes.redirectTo("worldedit/sel", "/article/worldedit-sel"), routes.redirectTo("worldedit/cp", "/article/worldedit-cp"), routes.redirectTo("tools/guiguide", "/article/guiguide"), routes.redirectTo("tools/mccam", "/article/cam"), routes.redirectTo("tekPack", "/tekpack"), routes.redirectTo("fard", "/contact")]);
    }
  }, true);
  var _textBinding_10 = dart.privateName(gui$46template, "_textBinding_10");
  var _textBinding_12 = dart.privateName(gui$46template, "_textBinding_12");
  var _textBinding_14 = dart.privateName(gui$46template, "_textBinding_14");
  var _textBinding_16 = dart.privateName(gui$46template, "_textBinding_16");
  var _textBinding_19 = dart.privateName(gui$46template, "_textBinding_19");
  var _textBinding_21 = dart.privateName(gui$46template, "_textBinding_21");
  var _textBinding_33 = dart.privateName(gui$46template, "_textBinding_33");
  var _textBinding_38 = dart.privateName(gui$46template, "_textBinding_38");
  var _textBinding_52 = dart.privateName(gui$46template, "_textBinding_52");
  var _appEl_3$1 = dart.privateName(gui$46template, "_appEl_3");
  var _NgIf_3_9$1 = dart.privateName(gui$46template, "_NgIf_3_9");
  var _appEl_4$0 = dart.privateName(gui$46template, "_appEl_4");
  var _NgIf_4_9$0 = dart.privateName(gui$46template, "_NgIf_4_9");
  var _appEl_5$2 = dart.privateName(gui$46template, "_appEl_5");
  var _NgIf_5_9$2 = dart.privateName(gui$46template, "_NgIf_5_9");
  var _appEl_7$0 = dart.privateName(gui$46template, "_appEl_7");
  var _NgFor_7_9$ = dart.privateName(gui$46template, "_NgFor_7_9");
  var _compView_8 = dart.privateName(gui$46template, "_compView_8");
  var _FluidCard_8_5 = dart.privateName(gui$46template, "_FluidCard_8_5");
  var _compView_17 = dart.privateName(gui$46template, "_compView_17");
  var _FluidCheckbox_17_5 = dart.privateName(gui$46template, "_FluidCheckbox_17_5");
  var _compView_18 = dart.privateName(gui$46template, "_compView_18");
  var _FluidButton_18_5 = dart.privateName(gui$46template, "_FluidButton_18_5");
  var _compView_22$ = dart.privateName(gui$46template, "_compView_22");
  var _FluidInput_22_5$ = dart.privateName(gui$46template, "_FluidInput_22_5");
  var _DefaultValueAccessor_22_6$ = dart.privateName(gui$46template, "_DefaultValueAccessor_22_6");
  var _NgValueAccessor_22_7$ = dart.privateName(gui$46template, "_NgValueAccessor_22_7");
  var _NgModel_22_8$ = dart.privateName(gui$46template, "_NgModel_22_8");
  var _compView_24 = dart.privateName(gui$46template, "_compView_24");
  var _FluidDropdown_24_5 = dart.privateName(gui$46template, "_FluidDropdown_24_5");
  var _appEl_25 = dart.privateName(gui$46template, "_appEl_25");
  var _NgIf_25_9 = dart.privateName(gui$46template, "_NgIf_25_9");
  var _appEl_28 = dart.privateName(gui$46template, "_appEl_28");
  var _NgIf_28_9 = dart.privateName(gui$46template, "_NgIf_28_9");
  var _appEl_30 = dart.privateName(gui$46template, "_appEl_30");
  var _NgIf_30_9 = dart.privateName(gui$46template, "_NgIf_30_9");
  var _compView_32 = dart.privateName(gui$46template, "_compView_32");
  var _FluidButton_32_5 = dart.privateName(gui$46template, "_FluidButton_32_5");
  var _compView_35 = dart.privateName(gui$46template, "_compView_35");
  var _ModalService_35_5 = dart.privateName(gui$46template, "_ModalService_35_5");
  var _ItemSelectorComponent_35_6 = dart.privateName(gui$46template, "_ItemSelectorComponent_35_6");
  var _compView_39 = dart.privateName(gui$46template, "_compView_39");
  var _FluidDropdown_39_5 = dart.privateName(gui$46template, "_FluidDropdown_39_5");
  var _appEl_42 = dart.privateName(gui$46template, "_appEl_42");
  var _NgIf_42_9 = dart.privateName(gui$46template, "_NgIf_42_9");
  var _appEl_44 = dart.privateName(gui$46template, "_appEl_44");
  var _NgIf_44_9 = dart.privateName(gui$46template, "_NgIf_44_9");
  var _appEl_46 = dart.privateName(gui$46template, "_appEl_46");
  var _NgIf_46_9 = dart.privateName(gui$46template, "_NgIf_46_9");
  var _appEl_48 = dart.privateName(gui$46template, "_appEl_48");
  var _NgIf_48_9 = dart.privateName(gui$46template, "_NgIf_48_9");
  var _appEl_49 = dart.privateName(gui$46template, "_appEl_49");
  var _NgIf_49_9 = dart.privateName(gui$46template, "_NgIf_49_9");
  var _compView_50 = dart.privateName(gui$46template, "_compView_50");
  var _ModalService_50_5 = dart.privateName(gui$46template, "_ModalService_50_5");
  var _ItemSelectorComponent_50_6 = dart.privateName(gui$46template, "_ItemSelectorComponent_50_6");
  var _appEl_53 = dart.privateName(gui$46template, "_appEl_53");
  var _NgIf_53_9 = dart.privateName(gui$46template, "_NgIf_53_9");
  var _expr_0$5 = dart.privateName(gui$46template, "_expr_0");
  var _expr_1$2 = dart.privateName(gui$46template, "_expr_1");
  var _expr_2$ = dart.privateName(gui$46template, "_expr_2");
  var _expr_3 = dart.privateName(gui$46template, "_expr_3");
  var _expr_4$ = dart.privateName(gui$46template, "_expr_4");
  var _expr_6$ = dart.privateName(gui$46template, "_expr_6");
  var _expr_7$ = dart.privateName(gui$46template, "_expr_7");
  var _expr_8 = dart.privateName(gui$46template, "_expr_8");
  var _expr_11 = dart.privateName(gui$46template, "_expr_11");
  var _expr_12$ = dart.privateName(gui$46template, "_expr_12");
  var _expr_13$ = dart.privateName(gui$46template, "_expr_13");
  var _expr_14 = dart.privateName(gui$46template, "_expr_14");
  var _expr_15 = dart.privateName(gui$46template, "_expr_15");
  var _expr_17 = dart.privateName(gui$46template, "_expr_17");
  var _pipe_ngtranslate_0$ = dart.privateName(gui$46template, "_pipe_ngtranslate_0");
  var _pipe_ngtranslate_1 = dart.privateName(gui$46template, "_pipe_ngtranslate_1");
  var _pipe_ngtranslate_2 = dart.privateName(gui$46template, "_pipe_ngtranslate_2");
  var _pipe_ngtranslate_3 = dart.privateName(gui$46template, "_pipe_ngtranslate_3");
  var _pipe_ngtranslate_4 = dart.privateName(gui$46template, "_pipe_ngtranslate_4");
  var _pipe_ngtranslate_5 = dart.privateName(gui$46template, "_pipe_ngtranslate_5");
  var _pipe_ngtranslate_6 = dart.privateName(gui$46template, "_pipe_ngtranslate_6");
  var _pipe_ngtranslate_7 = dart.privateName(gui$46template, "_pipe_ngtranslate_7");
  var _pipe_ngtranslate_8 = dart.privateName(gui$46template, "_pipe_ngtranslate_8");
  var _el_1$ = dart.privateName(gui$46template, "_el_1");
  var _el_6 = dart.privateName(gui$46template, "_el_6");
  var _el_22 = dart.privateName(gui$46template, "_el_22");
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
  var _handleEvent_0$3 = dart.privateName(gui$46template, "_handleEvent_0");
  var _handleEvent_1$0 = dart.privateName(gui$46template, "_handleEvent_1");
  var _handleEvent_2$0 = dart.privateName(gui$46template, "_handleEvent_2");
  var _handleEvent_3$0 = dart.privateName(gui$46template, "_handleEvent_3");
  var _handleEvent_4$ = dart.privateName(gui$46template, "_handleEvent_4");
  var _handleEvent_5$ = dart.privateName(gui$46template, "_handleEvent_5");
  var _handleEvent_6$ = dart.privateName(gui$46template, "_handleEvent_6");
  var C86;
  gui$46template.ViewGuiToolPage0 = class ViewGuiToolPage0 extends component_view.ComponentView$(dart.legacy(gui$.GuiToolPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/tools/gui/gui.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_0, "id", "center");
      this.addShimC(_el_0);
      this[_el_1$] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_1$], "container");
      this.addShimC(this[_el_1$]);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_1$]);
      dom_helpers.setAttribute(_el_2, "id", "rightControl");
      this.addShimC(_el_2);
      let _anchor_3 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_3$1] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$1], C73 || CT.C73);
      this[_NgIf_3_9$1] = new ng_if.NgIf.new(this[_appEl_3$1], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_4$0] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$0], C74 || CT.C74);
      this[_NgIf_4_9$0] = new ng_if.NgIf.new(this[_appEl_4$0], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_1$]);
      this[_appEl_5$2] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$2], C75 || CT.C75);
      this[_NgIf_5_9$2] = new ng_if.NgIf.new(this[_appEl_5$2], _TemplateRef_5_8);
      this[_el_6] = dom_helpers.appendDiv(doc, this[_el_1$]);
      this.updateChildClass(this[_el_6], "grid");
      this.addShimC(this[_el_6]);
      let _anchor_7 = dom_helpers.appendAnchor(this[_el_6]);
      this[_appEl_7$0] = new view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$0], C76 || CT.C76);
      this[_NgFor_7_9$] = new ng_for.NgFor.new(this[_appEl_7$0], _TemplateRef_7_8);
      this[_compView_8] = new card$46template.ViewFluidCard0.new(this, 8);
      let _el_8 = this[_compView_8].rootElement;
      _el_0[$append](_el_8);
      this.updateChildClassNonHtml(_el_8, "card");
      this.addShimC(_el_8);
      this[_FluidCard_8_5] = new card.FluidCard.new(_el_8);
      let _el_9 = doc[$createElement]("h3");
      this.addShimE(_el_9);
      _el_9[$append](this[_textBinding_10].element);
      let _text_11 = dom_helpers.appendText(_el_9, " ");
      _el_9[$append](this[_textBinding_12].element);
      let _text_13 = dom_helpers.appendText(_el_9, " ");
      _el_9[$append](this[_textBinding_14].element);
      let _text_15 = dom_helpers.appendText(_el_9, " ");
      _el_9[$append](this[_textBinding_16].element);
      this[_compView_17] = new checkbox$46template.ViewFluidCheckbox0.new(this, 17);
      let _el_17 = this[_compView_17].rootElement;
      this.addShimC(_el_17);
      this[_FluidCheckbox_17_5] = new checkbox.FluidCheckbox.new();
      this[_compView_17].create(this[_FluidCheckbox_17_5]);
      this[_compView_18] = new button$46template.ViewFluidButton0.new(this, 18);
      let _el_18 = this[_compView_18].rootElement;
      dom_helpers.setAttribute(_el_18, "fluidBtn", "");
      dom_helpers.setAttribute(_el_18, "secondary", "");
      this.addShimC(_el_18);
      this[_FluidButton_18_5] = new button.FluidButton.new(_el_18);
      this[_compView_18].createAndProject(this[_FluidButton_18_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_19].element])]));
      let _el_20 = doc[$createElement]("h3");
      this.addShimE(_el_20);
      _el_20[$append](this[_textBinding_21].element);
      this[_compView_22$] = new input$46template.ViewFluidInput0.new(this, 22);
      this[_el_22] = InputElementL().as(this[_compView_22$].rootElement);
      dom_helpers.setAttribute(this[_el_22], "fluidInput", "");
      this.addShimC(this[_el_22]);
      this[_FluidInput_22_5$] = new input.FluidInput.new(this[_el_22]);
      this[_DefaultValueAccessor_22_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_22]);
      this[_NgValueAccessor_22_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_22_6$]]);
      this[_NgModel_22_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_22_7$]);
      this[_compView_22$].createAndProject(this[_FluidInput_22_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_23 = doc[$createElement]("br");
      this.addShimE(_el_23);
      this[_compView_24] = new dropdown$46template.ViewFluidDropdown0.new(this, 24);
      let _el_24 = this[_compView_24].rootElement;
      this.addShimC(_el_24);
      this[_FluidDropdown_24_5] = new dropdown.FluidDropdown.new();
      this[_compView_24].create(this[_FluidDropdown_24_5]);
      let _anchor_25 = dom_helpers.createAnchor();
      this[_appEl_25] = new view_container.ViewContainer.new(25, 8, this, _anchor_25);
      let _TemplateRef_25_8 = new template_ref.TemplateRef.new(this[_appEl_25], C77 || CT.C77);
      this[_NgIf_25_9] = new ng_if.NgIf.new(this[_appEl_25], _TemplateRef_25_8);
      let _el_26 = doc[$createElement]("br");
      this.addShimE(_el_26);
      let _text_27 = dom_helpers.createText(" ");
      let _anchor_28 = dom_helpers.createAnchor();
      this[_appEl_28] = new view_container.ViewContainer.new(28, 8, this, _anchor_28);
      let _TemplateRef_28_8 = new template_ref.TemplateRef.new(this[_appEl_28], C78 || CT.C78);
      this[_NgIf_28_9] = new ng_if.NgIf.new(this[_appEl_28], _TemplateRef_28_8);
      let _text_29 = dom_helpers.createText(" ");
      let _anchor_30 = dom_helpers.createAnchor();
      this[_appEl_30] = new view_container.ViewContainer.new(30, 8, this, _anchor_30);
      let _TemplateRef_30_8 = new template_ref.TemplateRef.new(this[_appEl_30], C79 || CT.C79);
      this[_NgIf_30_9] = new ng_if.NgIf.new(this[_appEl_30], _TemplateRef_30_8);
      let _text_31 = dom_helpers.createText(" ");
      this[_compView_32] = new button$46template.ViewFluidButton0.new(this, 32);
      let _el_32 = this[_compView_32].rootElement;
      this.updateChildClass(_el_32, "full");
      dom_helpers.setAttribute(_el_32, "fluidBtn", "");
      this.addShimC(_el_32);
      this[_FluidButton_32_5] = new button.FluidButton.new(_el_32);
      let _text_34 = dom_helpers.createText(" Datapack");
      this[_compView_32].createAndProject(this[_FluidButton_32_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_33].element, _text_34])]));
      this[_compView_8].createAndProject(this[_FluidCard_8_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_el_9, _el_17, _el_18, _el_20, this[_el_22], _el_23, _el_24, this[_appEl_25], _el_26, _text_27, this[_appEl_28], _text_29, this[_appEl_30], _text_31, _el_32])]));
      this[_compView_35] = new item$46template.ViewItemSelectorComponent0.new(this, 35);
      let _el_35 = this[_compView_35].rootElement;
      parentRenderNode[$append](_el_35);
      dom_helpers.setAttribute(_el_35, "name", "gui_slot");
      this.addShimC(_el_35);
      this[_ModalService_35_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_35_6] = new item$.ItemSelectorComponent.new(this[_ModalService_35_5]);
      let _el_36 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_36, "before", "");
      this.addShimC(HtmlElementL().as(_el_36));
      let _el_37 = dom_helpers.appendElement(doc, _el_36, "p");
      this.addShimE(_el_37);
      _el_37[$append](this[_textBinding_38].element);
      this[_compView_39] = new dropdown$46template.ViewFluidDropdown0.new(this, 39);
      let _el_39 = this[_compView_39].rootElement;
      _el_36[$append](_el_39);
      this.addShimC(_el_39);
      this[_FluidDropdown_39_5] = new dropdown.FluidDropdown.new();
      this[_compView_39].create(this[_FluidDropdown_39_5]);
      let _el_40 = dom_helpers.appendElement(doc, _el_36, "br");
      this.addShimE(_el_40);
      let _text_41 = dom_helpers.appendText(_el_36, " ");
      let _anchor_42 = dom_helpers.appendAnchor(_el_36);
      this[_appEl_42] = new view_container.ViewContainer.new(42, 36, this, _anchor_42);
      let _TemplateRef_42_8 = new template_ref.TemplateRef.new(this[_appEl_42], C80 || CT.C80);
      this[_NgIf_42_9] = new ng_if.NgIf.new(this[_appEl_42], _TemplateRef_42_8);
      let _text_43 = dom_helpers.appendText(_el_36, " ");
      let _anchor_44 = dom_helpers.appendAnchor(_el_36);
      this[_appEl_44] = new view_container.ViewContainer.new(44, 36, this, _anchor_44);
      let _TemplateRef_44_8 = new template_ref.TemplateRef.new(this[_appEl_44], C81 || CT.C81);
      this[_NgIf_44_9] = new ng_if.NgIf.new(this[_appEl_44], _TemplateRef_44_8);
      let _text_45 = dom_helpers.appendText(_el_36, " ");
      let _anchor_46 = dom_helpers.appendAnchor(_el_36);
      this[_appEl_46] = new view_container.ViewContainer.new(46, 36, this, _anchor_46);
      let _TemplateRef_46_8 = new template_ref.TemplateRef.new(this[_appEl_46], C82 || CT.C82);
      this[_NgIf_46_9] = new ng_if.NgIf.new(this[_appEl_46], _TemplateRef_46_8);
      let _text_47 = dom_helpers.appendText(_el_36, " ");
      let _anchor_48 = dom_helpers.appendAnchor(_el_36);
      this[_appEl_48] = new view_container.ViewContainer.new(48, 36, this, _anchor_48);
      let _TemplateRef_48_8 = new template_ref.TemplateRef.new(this[_appEl_48], C83 || CT.C83);
      this[_NgIf_48_9] = new ng_if.NgIf.new(this[_appEl_48], _TemplateRef_48_8);
      let _anchor_49 = dom_helpers.appendAnchor(_el_36);
      this[_appEl_49] = new view_container.ViewContainer.new(49, 36, this, _anchor_49);
      let _TemplateRef_49_8 = new template_ref.TemplateRef.new(this[_appEl_49], C84 || CT.C84);
      this[_NgIf_49_9] = new ng_if.NgIf.new(this[_appEl_49], _TemplateRef_49_8);
      this[_compView_35].createAndProject(this[_ItemSelectorComponent_35_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_36]), C10 || CT.C10, C10 || CT.C10]));
      this[_compView_50] = new item$46template.ViewItemSelectorComponent0.new(this, 50);
      let _el_50 = this[_compView_50].rootElement;
      parentRenderNode[$append](_el_50);
      dom_helpers.setAttribute(_el_50, "name", "gui_placeholder");
      this.addShimC(_el_50);
      this[_ModalService_50_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_50_6] = new item$.ItemSelectorComponent.new(this[_ModalService_50_5]);
      let _el_51 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_51, "before", "");
      this.addShimE(_el_51);
      _el_51[$append](this[_textBinding_52].element);
      this[_compView_50].createAndProject(this[_ItemSelectorComponent_50_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_51]), C10 || CT.C10, C10 || CT.C10]));
      let _anchor_53 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_53] = new view_container.ViewContainer.new(53, null, this, _anchor_53);
      let _TemplateRef_53_8 = new template_ref.TemplateRef.new(this[_appEl_53], C85 || CT.C85);
      this[_NgIf_53_9] = new ng_if.NgIf.new(this[_appEl_53], _TemplateRef_53_8);
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      let subscription_0 = this[_FluidCheckbox_17_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_1$0)));
      _el_18[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$0)));
      this[_el_22][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_22_6$], 'touchHandler')));
      this[_el_22][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_3$0)));
      let subscription_1 = this[_NgModel_22_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_4$)));
      let subscription_2 = this[_FluidDropdown_24_5].selectedChange.listen(this.eventHandler1(intL(), intL(), dart.bind(_ctx, 'containerChanged')));
      _el_32[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'download')));
      let subscription_3 = this[_ItemSelectorComponent_35_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(_ctx, 'slotChanged')));
      let subscription_4 = this[_FluidDropdown_39_5].selectedChange.listen(this.eventHandler1(intL(), intL(), dart.bind(this, _handleEvent_5$)));
      let subscription_5 = this[_ItemSelectorComponent_50_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_6$)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_1] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_2] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_3] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_4] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_5] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_6] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_7] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_8] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (22 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_22_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_22_8$];
        }
      }
      if (token === dart.wrapType(ModalServiceL()) && 35 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 49) {
        return this[_ModalService_35_5];
      }
      if (token === dart.wrapType(ModalServiceL()) && 50 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 52) {
        return this[_ModalService_50_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t8;
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      this[_NgIf_3_9$1].ngIf = dart.notNull(_ctx.currentPageIndex) + 1 === _ctx.module.pages[$length];
      this[_NgIf_4_9$0].ngIf = dart.notNull(_ctx.currentPageIndex) + 1 !== _ctx.module.pages[$length];
      this[_NgIf_5_9$2].ngIf = dart.notNull(_ctx.currentPageIndex) > 0;
      let currVal_2 = _ctx.slotCount;
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "slotCount", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgFor_7_9$].ngForOf = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_7_9$].ngDoCheck();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_8_5].ngOnInit();
      }
      let currVal_3 = this[_pipe_ngtranslate_2].transform("gui.fillEmptySlots");
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "'gui.fillEmptySlots' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidCheckbox_17_5].label = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.currentPage.fillEmptySlots;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "currentPage.fillEmptySlots", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidCheckbox_17_5].value = currVal_4;
        this[_expr_4$] = currVal_4;
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_18_5].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_18_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_22_5$].ngOnInit();
      }
      changed = false;
      let currVal_7 = _ctx.namespace;
      if (dart.test(check_binding.checkBinding(this[_expr_7$], currVal_7, "namespace", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_22_8$].model = currVal_7;
        changed = true;
        this[_expr_7$] = currVal_7;
      }
      if (changed) {
        this[_NgModel_22_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_22_8$].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        if (_ctx.containers != null) {
          this[_FluidDropdown_24_5].values = _ctx.containers;
        }
      }
      let currVal_8 = _ctx.selectedContainer;
      if (dart.test(check_binding.checkBinding(this[_expr_8], currVal_8, "selectedContainer", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidDropdown_24_5].selected = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_25_9].ngIf = _ctx.showLocation;
      this[_NgIf_28_9].ngIf = _ctx.selected === "HandItem";
      this[_NgIf_30_9].ngIf = _ctx.errorText != null;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_32_5].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_35_6].name = "gui_slot";
        changed = true;
      }
      let currVal_11 = _ctx.showItemInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_11], currVal_11, "showItemInputs", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_35_6].showId = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.showItemInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_12$], currVal_12, "showItemInputs", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_35_6].showCount = currVal_12;
        changed = true;
        this[_expr_12$] = currVal_12;
      }
      let currVal_13 = _ctx.showItemInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_13$], currVal_13, "showItemInputs", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_35_6].showNbt = currVal_13;
        changed = true;
        this[_expr_13$] = currVal_13;
      }
      let currVal_14 = _ctx.showItemInputs;
      if (dart.test(check_binding.checkBinding(this[_expr_14], currVal_14, "showItemInputs", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_35_6].showModel = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      if (changed) {
        this[_ItemSelectorComponent_35_6].ngAfterChanges();
      }
      if (dart.test(firstCheck)) {
        if (_ctx.guiSlots != null) {
          this[_FluidDropdown_39_5].values = _ctx.guiSlots;
        }
      }
      let currVal_15 = _ctx.selectedGuiType;
      if (dart.test(check_binding.checkBinding(this[_expr_15], currVal_15, "selectedGuiType", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidDropdown_39_5].selected = currVal_15;
        this[_expr_15] = currVal_15;
      }
      this[_NgIf_42_9].ngIf = _ctx.selectedGuiType === 1;
      this[_NgIf_44_9].ngIf = _ctx.selectedGuiType === 1;
      this[_NgIf_46_9].ngIf = _ctx.selectedGuiType === 1;
      this[_NgIf_48_9].ngIf = _ctx.selectedGuiType === 5;
      this[_NgIf_49_9].ngIf = _ctx.showItemInputs;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_50_6].name = "gui_placeholder";
        changed = true;
      }
      let currVal_17 = _ctx.currentPage.placeholder;
      if (dart.test(check_binding.checkBinding(this[_expr_17], currVal_17, "currentPage.placeholder", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_50_6].item = currVal_17;
        changed = true;
        this[_expr_17] = currVal_17;
      }
      if (changed) {
        this[_ItemSelectorComponent_50_6].ngAfterChanges();
      }
      this[_NgIf_53_9].ngIf = _ctx.selected === "HandItem";
      this[_appEl_3$1].detectChangesInNestedViews();
      this[_appEl_4$0].detectChangesInNestedViews();
      this[_appEl_5$2].detectChangesInNestedViews();
      this[_appEl_7$0].detectChangesInNestedViews();
      this[_appEl_25].detectChangesInNestedViews();
      this[_appEl_28].detectChangesInNestedViews();
      this[_appEl_30].detectChangesInNestedViews();
      this[_appEl_42].detectChangesInNestedViews();
      this[_appEl_44].detectChangesInNestedViews();
      this[_appEl_46].detectChangesInNestedViews();
      this[_appEl_48].detectChangesInNestedViews();
      this[_appEl_49].detectChangesInNestedViews();
      this[_appEl_53].detectChangesInNestedViews();
      let currVal_0 = _ctx.getWidth();
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "getWidth()", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_el_1$].style[$setProperty]("max-width", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      let currVal_1 = _ctx.columns;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "columns", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_el_6].style[$setProperty]("--columns", (t8 = currVal_1, t8 == null ? null : dart.toString(t8)));
        this[_expr_1$2] = currVal_1;
      }
      this[_textBinding_10].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0$].transform("page"))));
      this[_textBinding_12].updateText(StringL().as(interpolate.interpolate0(dart.notNull(_ctx.currentPageIndex) + 1)));
      this[_textBinding_14].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_1].transform("of"))));
      this[_textBinding_16].updateTextWithPrimitive(_ctx.module.pages[$length]);
      this[_textBinding_19].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_3].transform("gui.gui_placeholder"))));
      this[_textBinding_21].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_4].transform("project"))));
      let currVal_6 = this[_pipe_ngtranslate_5].transform("namespace");
      if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "'namespace' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_22], "placeholder", currVal_6);
        this[_expr_6$] = currVal_6;
      }
      this[_textBinding_33].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_6].transform("download"))));
      this[_textBinding_38].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_7].transform("gui.actionSelect"))));
      this[_textBinding_52].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_8].transform("gui.placeholderItem"))));
      this[_compView_8].detectChanges();
      this[_compView_17].detectChanges();
      this[_compView_18].detectChanges();
      this[_compView_22$].detectChanges();
      this[_compView_24].detectChanges();
      this[_compView_32].detectChanges();
      this[_compView_35].detectChanges();
      this[_compView_39].detectChanges();
      this[_compView_50].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3$1].destroyNestedViews();
      this[_appEl_4$0].destroyNestedViews();
      this[_appEl_5$2].destroyNestedViews();
      this[_appEl_7$0].destroyNestedViews();
      this[_appEl_25].destroyNestedViews();
      this[_appEl_28].destroyNestedViews();
      this[_appEl_30].destroyNestedViews();
      this[_appEl_42].destroyNestedViews();
      this[_appEl_44].destroyNestedViews();
      this[_appEl_46].destroyNestedViews();
      this[_appEl_48].destroyNestedViews();
      this[_appEl_49].destroyNestedViews();
      this[_appEl_53].destroyNestedViews();
      this[_compView_8].destroyInternalState();
      this[_compView_17].destroyInternalState();
      this[_compView_18].destroyInternalState();
      this[_compView_22$].destroyInternalState();
      this[_compView_24].destroyInternalState();
      this[_compView_32].destroyInternalState();
      this[_compView_35].destroyInternalState();
      this[_compView_39].destroyInternalState();
      this[_compView_50].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      let _ctx = this.ctx;
      _ctx.controlPages(true);
    }
    [_handleEvent_1$0]($36event) {
      let _ctx = this.ctx;
      _ctx.currentPage.fillEmptySlots = boolL().as($36event);
    }
    [_handleEvent_2$0]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("gui_placeholder");
    }
    [_handleEvent_3$0]($36event) {
      this[_DefaultValueAccessor_22_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_4$]($36event) {
      let _ctx = this.ctx;
      _ctx.namespace = StringL().as($36event);
    }
    [_handleEvent_5$]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedGuiType = intL().as($36event);
    }
    [_handleEvent_6$]($36event) {
      let _ctx = this.ctx;
      _ctx.currentPage.placeholder = ItemL().as($36event);
    }
    static _debugClearComponentStyles() {
      gui$46template.ViewGuiToolPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = gui$46template.ViewGuiToolPage0._componentStyles;
      if (styles == null) {
        gui$46template.ViewGuiToolPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(gui$46template.styles$GuiToolPage, gui$46template.ViewGuiToolPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C86 || CT.C86);
        }
      }
      this.componentStyles = styles;
    }
  };
  (gui$46template.ViewGuiToolPage0.new = function(parentView, parentIndex) {
    this[_textBinding_10] = new text_binding.TextBinding.new();
    this[_textBinding_12] = new text_binding.TextBinding.new();
    this[_textBinding_14] = new text_binding.TextBinding.new();
    this[_textBinding_16] = new text_binding.TextBinding.new();
    this[_textBinding_19] = new text_binding.TextBinding.new();
    this[_textBinding_21] = new text_binding.TextBinding.new();
    this[_textBinding_33] = new text_binding.TextBinding.new();
    this[_textBinding_38] = new text_binding.TextBinding.new();
    this[_textBinding_52] = new text_binding.TextBinding.new();
    this[_appEl_3$1] = null;
    this[_NgIf_3_9$1] = null;
    this[_appEl_4$0] = null;
    this[_NgIf_4_9$0] = null;
    this[_appEl_5$2] = null;
    this[_NgIf_5_9$2] = null;
    this[_appEl_7$0] = null;
    this[_NgFor_7_9$] = null;
    this[_compView_8] = null;
    this[_FluidCard_8_5] = null;
    this[_compView_17] = null;
    this[_FluidCheckbox_17_5] = null;
    this[_compView_18] = null;
    this[_FluidButton_18_5] = null;
    this[_compView_22$] = null;
    this[_FluidInput_22_5$] = null;
    this[_DefaultValueAccessor_22_6$] = null;
    this[_NgValueAccessor_22_7$] = null;
    this[_NgModel_22_8$] = null;
    this[_compView_24] = null;
    this[_FluidDropdown_24_5] = null;
    this[_appEl_25] = null;
    this[_NgIf_25_9] = null;
    this[_appEl_28] = null;
    this[_NgIf_28_9] = null;
    this[_appEl_30] = null;
    this[_NgIf_30_9] = null;
    this[_compView_32] = null;
    this[_FluidButton_32_5] = null;
    this[_compView_35] = null;
    this[_ModalService_35_5] = null;
    this[_ItemSelectorComponent_35_6] = null;
    this[_compView_39] = null;
    this[_FluidDropdown_39_5] = null;
    this[_appEl_42] = null;
    this[_NgIf_42_9] = null;
    this[_appEl_44] = null;
    this[_NgIf_44_9] = null;
    this[_appEl_46] = null;
    this[_NgIf_46_9] = null;
    this[_appEl_48] = null;
    this[_NgIf_48_9] = null;
    this[_appEl_49] = null;
    this[_NgIf_49_9] = null;
    this[_compView_50] = null;
    this[_ModalService_50_5] = null;
    this[_ItemSelectorComponent_50_6] = null;
    this[_appEl_53] = null;
    this[_NgIf_53_9] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_expr_2$] = null;
    this[_expr_3] = null;
    this[_expr_4$] = null;
    this[_expr_6$] = null;
    this[_expr_7$] = null;
    this[_expr_8] = null;
    this[_expr_11] = null;
    this[_expr_12$] = null;
    this[_expr_13$] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_17] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_pipe_ngtranslate_1] = null;
    this[_pipe_ngtranslate_2] = null;
    this[_pipe_ngtranslate_3] = null;
    this[_pipe_ngtranslate_4] = null;
    this[_pipe_ngtranslate_5] = null;
    this[_pipe_ngtranslate_6] = null;
    this[_pipe_ngtranslate_7] = null;
    this[_pipe_ngtranslate_8] = null;
    this[_el_1$] = null;
    this[_el_6] = null;
    this[_el_22] = null;
    gui$46template.ViewGuiToolPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("gui_tool"));
  }).prototype = gui$46template.ViewGuiToolPage0.prototype;
  dart.addTypeTests(gui$46template.ViewGuiToolPage0);
  dart.addTypeCaches(gui$46template.ViewGuiToolPage0);
  dart.setMethodSignature(gui$46template.ViewGuiToolPage0, () => ({
    __proto__: dart.getMethods(gui$46template.ViewGuiToolPage0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_6$]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(gui$46template.ViewGuiToolPage0, L32);
  dart.setFieldSignature(gui$46template.ViewGuiToolPage0, () => ({
    __proto__: dart.getFields(gui$46template.ViewGuiToolPage0.__proto__),
    [_textBinding_10]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_12]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_14]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_16]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_19]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_21]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_33]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_38]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_52]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_3$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9$2]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_7_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_compView_8]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_8_5]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_compView_17]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_17_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_18]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_18_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_22$]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_22_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_22_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_22_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_22_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_24]: dart.fieldType(dart.legacy(dropdown$46template.ViewFluidDropdown0)),
    [_FluidDropdown_24_5]: dart.fieldType(dart.legacy(dropdown.FluidDropdown)),
    [_appEl_25]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_25_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_28]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_28_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_30]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_30_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_32]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_32_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_35]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_35_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_35_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_compView_39]: dart.fieldType(dart.legacy(dropdown$46template.ViewFluidDropdown0)),
    [_FluidDropdown_39_5]: dart.fieldType(dart.legacy(dropdown.FluidDropdown)),
    [_appEl_42]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_42_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_44]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_44_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_46]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_46_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_48]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_48_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_49]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_49_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_50]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_50_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_50_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_appEl_53]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_53_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_7$]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12$]: dart.fieldType(dart.dynamic),
    [_expr_13$]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_1]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_2]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_3]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_4]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_5]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_6]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_7]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_8]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_1$]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_6]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_22]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  dart.defineLazy(gui$46template.ViewGuiToolPage0, {
    /*gui$46template.ViewGuiToolPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$4 = dart.privateName(gui$46template, "_compView_0");
  var _FluidIcon_0_5 = dart.privateName(gui$46template, "_FluidIcon_0_5");
  gui$46template._ViewGuiToolPage1 = class _ViewGuiToolPage1 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0$4].rootElement;
      this.updateChildClassNonHtml(_el_0, "icon");
      dom_helpers.setAttribute(_el_0, "icon", "plus");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0$4].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5].size = 32.0;
        this[_FluidIcon_0_5].icon = "plus";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5].ngOnInit();
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
  };
  (gui$46template._ViewGuiToolPage1.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidIcon_0_5] = null;
    gui$46template._ViewGuiToolPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage1.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage1);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage1);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage1, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage1, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage1, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage1.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  gui$46template._ViewGuiToolPage2 = class _ViewGuiToolPage2 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0$4].rootElement;
      this.updateChildClassNonHtml(_el_0, "icon");
      dom_helpers.setAttribute(_el_0, "icon", "arrowRight");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5] = new icon.FluidIcon.new(_el_0);
      this[_compView_0$4].createAndProject(this[_FluidIcon_0_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5].size = 32.0;
        this[_FluidIcon_0_5].icon = "arrowRight";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5].ngOnInit();
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
  };
  (gui$46template._ViewGuiToolPage2.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidIcon_0_5] = null;
    gui$46template._ViewGuiToolPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage2.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage2);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage2);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage2, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage2, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage2, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage2.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _compView_1$1 = dart.privateName(gui$46template, "_compView_1");
  var _FluidIcon_1_5$ = dart.privateName(gui$46template, "_FluidIcon_1_5");
  gui$46template._ViewGuiToolPage3 = class _ViewGuiToolPage3 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_0, "id", "leftControl");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1$1] = new icon$46template.ViewFluidIcon0.new(this, 1);
      let _el_1 = this[_compView_1$1].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "icon");
      dom_helpers.setAttribute(_el_1, "icon", "arrowLeft");
      this.addShimC(_el_1);
      this[_FluidIcon_1_5$] = new icon.FluidIcon.new(_el_1);
      this[_compView_1$1].createAndProject(this[_FluidIcon_1_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_1_5$].size = 32.0;
        this[_FluidIcon_1_5$].icon = "arrowLeft";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_1_5$].ngOnInit();
      }
      this[_compView_1$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$1].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      let _ctx = this.ctx;
      _ctx.controlPages(false);
    }
  };
  (gui$46template._ViewGuiToolPage3.new = function(parentView, parentIndex) {
    this[_compView_1$1] = null;
    this[_FluidIcon_1_5$] = null;
    gui$46template._ViewGuiToolPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage3.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage3);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage3);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage3, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage3.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage3, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage3, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage3.__proto__),
    [_compView_1$1]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_1_5$]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _textBinding_4$ = dart.privateName(gui$46template, "_textBinding_4");
  var _el_2$ = dart.privateName(gui$46template, "_el_2");
  gui$46template._ViewGuiToolPage4 = class _ViewGuiToolPage4 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "slot");
      this.addShimC(HtmlElementL().as(_el_0));
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      this[_el_2$] = dom_helpers.appendElement(doc, _el_1, "img");
      this.addShimE(this[_el_2$]);
      let _el_3 = dom_helpers.appendElement(doc, _el_1, "p");
      this.addShimE(_el_3);
      _el_3[$append](this[_textBinding_4$].element);
      _el_1[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let currVal_0 = _ctx.getImageUrl(local_i);
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "getImageUrl(i)", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_2$], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$5] = currVal_0;
      }
      this[_textBinding_4$].updateText(interpolate.interpolateString0(_ctx.getTextForIndex(local_i)));
    }
    [_handleEvent_0$3]($36event) {
      let local_i = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.changeSlot(local_i);
    }
  };
  (gui$46template._ViewGuiToolPage4.new = function(parentView, parentIndex) {
    this[_textBinding_4$] = new text_binding.TextBinding.new();
    this[_expr_0$5] = null;
    this[_el_2$] = null;
    gui$46template._ViewGuiToolPage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage4.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage4);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage4);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage4, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage4.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage4, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage4, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage4.__proto__),
    [_textBinding_4$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_el_2$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _FluidInput_0_5$ = dart.privateName(gui$46template, "_FluidInput_0_5");
  var _DefaultValueAccessor_0_6$ = dart.privateName(gui$46template, "_DefaultValueAccessor_0_6");
  var _NgValueAccessor_0_7$ = dart.privateName(gui$46template, "_NgValueAccessor_0_7");
  var _NgModel_0_8$ = dart.privateName(gui$46template, "_NgModel_0_8");
  var _el_0$1 = dart.privateName(gui$46template, "_el_0");
  gui$46template._ViewGuiToolPage5 = class _ViewGuiToolPage5 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template.ViewFluidInput0.new(this, 0);
      this[_el_0$1] = InputElementL().as(this[_compView_0$4].rootElement);
      dom_helpers.setAttribute(this[_el_0$1], "fluidInput", "");
      this.addShimC(this[_el_0$1]);
      this[_FluidInput_0_5$] = new input.FluidInput.new(this[_el_0$1]);
      this[_DefaultValueAccessor_0_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_0$1]);
      this[_NgValueAccessor_0_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6$]]);
      this[_NgModel_0_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7$]);
      this[_compView_0$4].createAndProject(this[_FluidInput_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_el_0$1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6$], 'touchHandler')));
      this[_el_0$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      let subscription_0 = this[_NgModel_0_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$0)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$1]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5$].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.module.blockLocation.location;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "module.blockLocation.location", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_0_8$].model = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      if (changed) {
        this[_NgModel_0_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8$].ngOnInit();
      }
      let currVal_0 = this[_pipe_ngtranslate_0$].transform("gui.blockLocation");
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "'gui.blockLocation' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_0$1], "placeholder", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      this[_DefaultValueAccessor_0_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$0]($36event) {
      let _ctx = this.ctx;
      _ctx.module.blockLocation.location = StringL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage5.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidInput_0_5$] = null;
    this[_DefaultValueAccessor_0_6$] = null;
    this[_NgValueAccessor_0_7$] = null;
    this[_NgModel_0_8$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_el_0$1] = null;
    gui$46template._ViewGuiToolPage5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage5.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage5);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage5);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage5, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage5.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage5, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage5, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage5.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_0$1]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  var _textBinding_1$4 = dart.privateName(gui$46template, "_textBinding_1");
  var _FluidButton_0_5$ = dart.privateName(gui$46template, "_FluidButton_0_5");
  var _compView_4$0 = dart.privateName(gui$46template, "_compView_4");
  var _FluidInput_4_5$ = dart.privateName(gui$46template, "_FluidInput_4_5");
  var _DefaultValueAccessor_4_6$ = dart.privateName(gui$46template, "_DefaultValueAccessor_4_6");
  var _NgValueAccessor_4_7$ = dart.privateName(gui$46template, "_NgValueAccessor_4_7");
  var _NgModel_4_8$ = dart.privateName(gui$46template, "_NgModel_4_8");
  var _compView_6$ = dart.privateName(gui$46template, "_compView_6");
  var _FluidCheckbox_6_5 = dart.privateName(gui$46template, "_FluidCheckbox_6_5");
  var _compView_7$ = dart.privateName(gui$46template, "_compView_7");
  var _FluidInput_7_5$ = dart.privateName(gui$46template, "_FluidInput_7_5");
  var _DefaultValueAccessor_7_6$ = dart.privateName(gui$46template, "_DefaultValueAccessor_7_6");
  var _NgValueAccessor_7_7$ = dart.privateName(gui$46template, "_NgValueAccessor_7_7");
  var _NgModel_7_8$ = dart.privateName(gui$46template, "_NgModel_7_8");
  var _expr_5$ = dart.privateName(gui$46template, "_expr_5");
  var _el_4 = dart.privateName(gui$46template, "_el_4");
  var _el_7 = dart.privateName(gui$46template, "_el_7");
  gui$46template._ViewGuiToolPage6 = class _ViewGuiToolPage6 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new button$46template.ViewFluidButton0.new(this, 0);
      let _el_0 = this[_compView_0$4].rootElement;
      dom_helpers.setAttribute(_el_0, "fluidBtn", "");
      dom_helpers.setAttribute(_el_0, "secondary", "");
      this.addShimC(_el_0);
      this[_FluidButton_0_5$] = new button.FluidButton.new(_el_0);
      this[_compView_0$4].createAndProject(this[_FluidButton_0_5$], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$4].element])]));
      let doc = html.document;
      let _el_2 = doc[$createElement]("br");
      this.addShimE(_el_2);
      let _text_3 = dom_helpers.createText(" ");
      this[_compView_4$0] = new input$46template.ViewFluidInput0.new(this, 4);
      this[_el_4] = InputElementL().as(this[_compView_4$0].rootElement);
      dom_helpers.setAttribute(this[_el_4], "fluidInput", "");
      this.addShimC(this[_el_4]);
      this[_FluidInput_4_5$] = new input.FluidInput.new(this[_el_4]);
      this[_DefaultValueAccessor_4_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_4]);
      this[_NgValueAccessor_4_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_4_6$]]);
      this[_NgModel_4_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_4_7$]);
      this[_compView_4$0].createAndProject(this[_FluidInput_4_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_5 = doc[$createElement]("br");
      this.addShimE(_el_5);
      this[_compView_6$] = new checkbox$46template.ViewFluidCheckbox0.new(this, 6);
      let _el_6 = this[_compView_6$].rootElement;
      this.addShimC(_el_6);
      this[_FluidCheckbox_6_5] = new checkbox.FluidCheckbox.new();
      this[_compView_6$].create(this[_FluidCheckbox_6_5]);
      this[_compView_7$] = new input$46template.ViewFluidInput0.new(this, 7);
      this[_el_7] = InputElementL().as(this[_compView_7$].rootElement);
      dom_helpers.setAttribute(this[_el_7], "fluidInput", "");
      this.addShimC(this[_el_7]);
      this[_FluidInput_7_5$] = new input.FluidInput.new(this[_el_7]);
      this[_DefaultValueAccessor_7_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_7]);
      this[_NgValueAccessor_7_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_7_6$]]);
      this[_NgModel_7_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_7_7$]);
      this[_compView_7$].createAndProject(this[_FluidInput_7_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_8 = doc[$createElement]("br");
      this.addShimE(_el_8);
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      this[_el_4][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_4_6$], 'touchHandler')));
      this[_el_4][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1$0)));
      let subscription_0 = this[_NgModel_4_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_2$0)));
      let subscription_1 = this[_FluidCheckbox_6_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_3$0)));
      this[_el_7][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_7_6$], 'touchHandler')));
      this[_el_7][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_4$)));
      let subscription_2 = this[_NgModel_7_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_5$)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_1] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_2] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_3] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0, _el_2, _text_3, this[_el_4], _el_5, _el_6, this[_el_7], _el_8]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_4_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_4_8$];
        }
      }
      if (7 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_7_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_7_8$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidButton_0_5$].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_0_5$].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_4_5$].ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.module.minecartName.value[$_get]("text");
      if (dart.test(check_binding.checkBinding(this[_expr_2$], currVal_2, "module.minecartName.value['text']", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_4_8$].model = currVal_2;
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      if (changed) {
        this[_NgModel_4_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_4_8$].ngOnInit();
      }
      let currVal_3 = this[_pipe_ngtranslate_2].transform("gui.minecartAlwaysActive");
      if (dart.test(check_binding.checkBinding(this[_expr_3], currVal_3, "'gui.minecartAlwaysActive' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidCheckbox_6_5].label = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.module.minecartAlwaysActive;
      if (dart.test(check_binding.checkBinding(this[_expr_4$], currVal_4, "module.minecartAlwaysActive", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_FluidCheckbox_6_5].value = currVal_4;
        this[_expr_4$] = currVal_4;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_7_5$].ngOnInit();
      }
      changed = false;
      let currVal_6 = _ctx.module.offset.location;
      if (dart.test(check_binding.checkBinding(this[_expr_6$], currVal_6, "module.offset.location", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_7_8$].model = currVal_6;
        changed = true;
        this[_expr_6$] = currVal_6;
      }
      if (changed) {
        this[_NgModel_7_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_7_8$].ngOnInit();
      }
      this[_textBinding_1$4].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0$].transform("gui.gui_trigger"))));
      let currVal_1 = this[_pipe_ngtranslate_1].transform("gui.minecartName");
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "'gui.minecartName' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_4], "placeholder", currVal_1);
        this[_expr_1$2] = currVal_1;
      }
      let currVal_5 = this[_pipe_ngtranslate_3].transform("gui.offset");
      if (dart.test(check_binding.checkBinding(this[_expr_5$], currVal_5, "'gui.offset' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_7], "placeholder", currVal_5);
        this[_expr_5$] = currVal_5;
      }
      this[_compView_0$4].detectChanges();
      this[_compView_4$0].detectChanges();
      this[_compView_6$].detectChanges();
      this[_compView_7$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
      this[_compView_4$0].destroyInternalState();
      this[_compView_6$].destroyInternalState();
      this[_compView_7$].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("gui_trigger");
    }
    [_handleEvent_1$0]($36event) {
      this[_DefaultValueAccessor_4_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_2$0]($36event) {
      let _ctx = this.ctx;
      _ctx.module.minecartName.value[$_set]("text", $36event);
    }
    [_handleEvent_3$0]($36event) {
      let _ctx = this.ctx;
      _ctx.module.minecartAlwaysActive = boolL().as($36event);
    }
    [_handleEvent_4$]($36event) {
      this[_DefaultValueAccessor_7_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_5$]($36event) {
      let _ctx = this.ctx;
      _ctx.module.offset.location = StringL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage6.new = function(parentView, parentIndex) {
    this[_textBinding_1$4] = new text_binding.TextBinding.new();
    this[_compView_0$4] = null;
    this[_FluidButton_0_5$] = null;
    this[_compView_4$0] = null;
    this[_FluidInput_4_5$] = null;
    this[_DefaultValueAccessor_4_6$] = null;
    this[_NgValueAccessor_4_7$] = null;
    this[_NgModel_4_8$] = null;
    this[_compView_6$] = null;
    this[_FluidCheckbox_6_5] = null;
    this[_compView_7$] = null;
    this[_FluidInput_7_5$] = null;
    this[_DefaultValueAccessor_7_6$] = null;
    this[_NgValueAccessor_7_7$] = null;
    this[_NgModel_7_8$] = null;
    this[_expr_1$2] = null;
    this[_expr_2$] = null;
    this[_expr_3] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_pipe_ngtranslate_1] = null;
    this[_pipe_ngtranslate_2] = null;
    this[_pipe_ngtranslate_3] = null;
    this[_el_4] = null;
    this[_el_7] = null;
    gui$46template._ViewGuiToolPage6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage6.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage6);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage6);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage6, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage6.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage6, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage6, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage6.__proto__),
    [_textBinding_1$4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$4]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_0_5$]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_4$0]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_4_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_4_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_4_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_4_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_6$]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_6_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_7$]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_7_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_7_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_7_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_7_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_1]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_2]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_3]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_4]: dart.fieldType(dart.legacy(html.InputElement)),
    [_el_7]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  var _FluidMultiInput_0_5$0 = dart.privateName(gui$46template, "_FluidMultiInput_0_5");
  gui$46template._ViewGuiToolPage7 = class _ViewGuiToolPage7 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this[_compView_0$4].rootElement;
      this.updateChildClass(_el_0, "error");
      dom_helpers.setAttribute(_el_0, "cols", "30");
      dom_helpers.setAttribute(_el_0, "disabled", "");
      dom_helpers.setAttribute(_el_0, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "ERROR");
      dom_helpers.setAttribute(_el_0, "rows", "10");
      this.addShimC(_el_0);
      this[_FluidMultiInput_0_5$0] = new input$.FluidMultiInput.new(_el_0);
      this[_compView_0$4].createAndProject(this[_FluidMultiInput_0_5$0], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$4].element])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5$0].ngOnInit();
      }
      this[_textBinding_1$4].updateText(interpolate.interpolateString0(_ctx.errorText));
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
  };
  (gui$46template._ViewGuiToolPage7.new = function(parentView, parentIndex) {
    this[_textBinding_1$4] = new text_binding.TextBinding.new();
    this[_compView_0$4] = null;
    this[_FluidMultiInput_0_5$0] = null;
    gui$46template._ViewGuiToolPage7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage7.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage7);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage7);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage7, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage7, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage7, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage7.__proto__),
    [_textBinding_1$4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5$0]: dart.fieldType(dart.legacy(input$.FluidMultiInput))
  }));
  gui$46template._ViewGuiToolPage8 = class _ViewGuiToolPage8 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      this[_el_0$1] = TextAreaElementL().as(this[_compView_0$4].rootElement);
      dom_helpers.setAttribute(this[_el_0$1], "cols", "30");
      dom_helpers.setAttribute(this[_el_0$1], "fluidMultiInput", "");
      dom_helpers.setAttribute(this[_el_0$1], "rows", "5");
      dom_helpers.setAttribute(this[_el_0$1], "style", "width: 90%");
      this.addShimC(this[_el_0$1]);
      this[_FluidMultiInput_0_5$0] = new input$.FluidMultiInput.new(this[_el_0$1]);
      this[_DefaultValueAccessor_0_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_0$1]);
      this[_NgValueAccessor_0_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6$]]);
      this[_NgModel_0_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7$]);
      this[_compView_0$4].createAndProject(this[_FluidMultiInput_0_5$0], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_el_0$1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6$], 'touchHandler')));
      this[_el_0$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      let subscription_0 = this[_NgModel_0_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$0)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$1]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5$0].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.selectedSlotActions;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "selectedSlotActions", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_0_8$].model = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      if (changed) {
        this[_NgModel_0_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8$].ngOnInit();
      }
      let currVal_0 = this[_pipe_ngtranslate_0$].transform("gui.executeCommands");
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "'gui.executeCommands' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_0$1], "placeholder", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      this[_DefaultValueAccessor_0_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$0]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedSlotActions = StringL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage8.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidMultiInput_0_5$0] = null;
    this[_DefaultValueAccessor_0_6$] = null;
    this[_NgValueAccessor_0_7$] = null;
    this[_NgModel_0_8$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_el_0$1] = null;
    gui$46template._ViewGuiToolPage8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage8.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage8);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage8);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage8, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage8.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage8, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage8, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage8.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5$0]: dart.fieldType(dart.legacy(input$.FluidMultiInput)),
    [_DefaultValueAccessor_0_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_0$1]: dart.fieldType(dart.legacy(html.TextAreaElement))
  }));
  gui$46template._ViewGuiToolPage9 = class _ViewGuiToolPage9 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template.ViewFluidInput0.new(this, 0);
      this[_el_0$1] = InputElementL().as(this[_compView_0$4].rootElement);
      dom_helpers.setAttribute(this[_el_0$1], "fluidInput", "");
      this.addShimC(this[_el_0$1]);
      this[_FluidInput_0_5$] = new input.FluidInput.new(this[_el_0$1]);
      this[_DefaultValueAccessor_0_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_0$1]);
      this[_NgValueAccessor_0_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6$]]);
      this[_NgModel_0_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7$]);
      this[_compView_0$4].createAndProject(this[_FluidInput_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_el_0$1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6$], 'touchHandler')));
      this[_el_0$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      let subscription_0 = this[_NgModel_0_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$0)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$1]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5$].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.selectedCountScore;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "selectedCountScore", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_0_8$].model = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      if (changed) {
        this[_NgModel_0_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8$].ngOnInit();
      }
      let currVal_0 = this[_pipe_ngtranslate_0$].transform("gui.countScoreboard");
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "'gui.countScoreboard' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_0$1], "placeholder", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      this[_DefaultValueAccessor_0_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$0]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedCountScore = StringL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage9.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidInput_0_5$] = null;
    this[_DefaultValueAccessor_0_6$] = null;
    this[_NgValueAccessor_0_7$] = null;
    this[_NgModel_0_8$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_el_0$1] = null;
    gui$46template._ViewGuiToolPage9.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage9.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage9);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage9);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage9, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage9.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage9, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage9, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage9.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_0$1]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  gui$46template._ViewGuiToolPage10 = class _ViewGuiToolPage10 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template.ViewFluidInput0.new(this, 0);
      this[_el_0$1] = InputElementL().as(this[_compView_0$4].rootElement);
      dom_helpers.setAttribute(this[_el_0$1], "fluidInput", "");
      this.addShimC(this[_el_0$1]);
      this[_FluidInput_0_5$] = new input.FluidInput.new(this[_el_0$1]);
      this[_DefaultValueAccessor_0_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_0$1]);
      this[_NgValueAccessor_0_7$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6$]]);
      this[_NgModel_0_8$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_7$]);
      this[_compView_0$4].createAndProject(this[_FluidInput_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_el_0$1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_0_6$], 'touchHandler')));
      this[_el_0$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      let subscription_0 = this[_NgModel_0_8$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$0)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$1]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_7$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_8$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5$].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.selectedCountScoreEntity;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "selectedCountScoreEntity", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_0_8$].model = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      if (changed) {
        this[_NgModel_0_8$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_8$].ngOnInit();
      }
      let currVal_0 = this[_pipe_ngtranslate_0$].transform("gui.countEntity");
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "'gui.countEntity' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_0$1], "placeholder", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      this[_DefaultValueAccessor_0_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$0]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedCountScoreEntity = StringL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage10.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidInput_0_5$] = null;
    this[_DefaultValueAccessor_0_6$] = null;
    this[_NgValueAccessor_0_7$] = null;
    this[_NgModel_0_8$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_el_0$1] = null;
    gui$46template._ViewGuiToolPage10.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage10.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage10);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage10);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage10, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage10.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage10, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage10, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage10.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_0_7$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_8$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_0$1]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  var _NumberValueAccessor_0_7$ = dart.privateName(gui$46template, "_NumberValueAccessor_0_7");
  var _NgValueAccessor_0_8$ = dart.privateName(gui$46template, "_NgValueAccessor_0_8");
  var _NgModel_0_9$ = dart.privateName(gui$46template, "_NgModel_0_9");
  gui$46template._ViewGuiToolPage11 = class _ViewGuiToolPage11 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new input$46template.ViewFluidInput0.new(this, 0);
      this[_el_0$1] = InputElementL().as(this[_compView_0$4].rootElement);
      dom_helpers.setAttribute(this[_el_0$1], "fluidInput", "");
      dom_helpers.setAttribute(this[_el_0$1], "type", "number");
      this.addShimC(this[_el_0$1]);
      this[_FluidInput_0_5$] = new input.FluidInput.new(this[_el_0$1]);
      this[_DefaultValueAccessor_0_6$] = new default_value_accessor.DefaultValueAccessor.new(this[_el_0$1]);
      this[_NumberValueAccessor_0_7$] = new number_value_accessor.NumberValueAccessor.new(this[_el_0$1]);
      this[_NgValueAccessor_0_8$] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_0_6$], this[_NumberValueAccessor_0_7$]]);
      this[_NgModel_0_9$] = new ng_model.NgModel.new(null, this[_NgValueAccessor_0_8$]);
      this[_compView_0$4].createAndProject(this[_FluidInput_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_el_0$1][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$3)));
      this[_el_0$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1$0)));
      this[_el_0$1][$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$0)));
      let subscription_0 = this[_NgModel_0_9$].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_3$0)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([this[_el_0$1]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_0_8$];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_9$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_0_5$].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.selectedSlotPage;
      if (dart.test(check_binding.checkBinding(this[_expr_1$2], currVal_1, "selectedSlotPage", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_NgModel_0_9$].model = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      if (changed) {
        this[_NgModel_0_9$].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_0_9$].ngOnInit();
      }
      let currVal_0 = this[_pipe_ngtranslate_0$].transform("gui.pageNumber");
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "'gui.pageNumber' | ngtranslate", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        dom_helpers.setProperty(this[_el_0$1], "placeholder", currVal_0);
        this[_expr_0$5] = currVal_0;
      }
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      this[_DefaultValueAccessor_0_6$].touchHandler();
      this[_NumberValueAccessor_0_7$].touchHandler();
    }
    [_handleEvent_1$0]($36event) {
      this[_DefaultValueAccessor_0_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_0_7$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_2$0]($36event) {
      this[_NumberValueAccessor_0_7$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_3$0]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedSlotPage = intL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage11.new = function(parentView, parentIndex) {
    this[_compView_0$4] = null;
    this[_FluidInput_0_5$] = null;
    this[_DefaultValueAccessor_0_6$] = null;
    this[_NumberValueAccessor_0_7$] = null;
    this[_NgValueAccessor_0_8$] = null;
    this[_NgModel_0_9$] = null;
    this[_expr_0$5] = null;
    this[_expr_1$2] = null;
    this[_pipe_ngtranslate_0$] = null;
    this[_el_0$1] = null;
    gui$46template._ViewGuiToolPage11.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage11.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage11);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage11);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage11, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage11.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage11, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage11, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage11.__proto__),
    [_compView_0$4]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_0_5$]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_0_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_0_7$]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_0_8$]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_0_9$]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_expr_1$2]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_0$1]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  gui$46template._ViewGuiToolPage12 = class _ViewGuiToolPage12 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("h3");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$4].element);
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      this[_textBinding_1$4].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0$].transform("gui.selectItem"))));
    }
  };
  (gui$46template._ViewGuiToolPage12.new = function(parentView, parentIndex) {
    this[_textBinding_1$4] = new text_binding.TextBinding.new();
    this[_pipe_ngtranslate_0$] = null;
    gui$46template._ViewGuiToolPage12.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage12.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage12);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage12);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage12, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage12.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage12, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage12, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage12.__proto__),
    [_textBinding_1$4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe))
  }));
  var _textBinding_2$ = dart.privateName(gui$46template, "_textBinding_2");
  var _ModalService_0_5$0 = dart.privateName(gui$46template, "_ModalService_0_5");
  var _ItemSelectorComponent_0_6 = dart.privateName(gui$46template, "_ItemSelectorComponent_0_6");
  gui$46template._ViewGuiToolPage13 = class _ViewGuiToolPage13 extends embedded_view.EmbeddedView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this[_compView_0$4] = new item$46template.ViewItemSelectorComponent0.new(this, 0);
      let _el_0 = this[_compView_0$4].rootElement;
      dom_helpers.setAttribute(_el_0, "name", "gui_trigger");
      this.addShimC(_el_0);
      this[_ModalService_0_5$0] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_0_6] = new item$.ItemSelectorComponent.new(this[_ModalService_0_5$0]);
      let doc = html.document;
      let _el_1 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_1, "before", "");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$].element);
      this[_compView_0$4].createAndProject(this[_ItemSelectorComponent_0_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1]), C10 || CT.C10, C10 || CT.C10]));
      let subscription_0 = this[_ItemSelectorComponent_0_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_0$3)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initRootNodesAndSubscriptions(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && dart.notNull(nodeIndex) <= 2) {
        return this[_ModalService_0_5$0];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_0_6].name = "gui_trigger";
        changed = true;
      }
      let currVal_0 = _ctx.module.triggerGui;
      if (dart.test(check_binding.checkBinding(this[_expr_0$5], currVal_0, "module.triggerGui", "package:stevertus/src/pages/tools/gui/gui.html"))) {
        this[_ItemSelectorComponent_0_6].item = currVal_0;
        changed = true;
        this[_expr_0$5] = currVal_0;
      }
      if (changed) {
        this[_ItemSelectorComponent_0_6].ngAfterChanges();
      }
      this[_textBinding_2$].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0$].transform("gui.handItem"))));
      this[_compView_0$4].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$4].destroyInternalState();
    }
    [_handleEvent_0$3]($36event) {
      let _ctx = this.ctx;
      _ctx.module.triggerGui = ItemL().as($36event);
    }
  };
  (gui$46template._ViewGuiToolPage13.new = function(parentView, parentIndex) {
    this[_textBinding_2$] = new text_binding.TextBinding.new();
    this[_compView_0$4] = null;
    this[_ModalService_0_5$0] = null;
    this[_ItemSelectorComponent_0_6] = null;
    this[_expr_0$5] = null;
    this[_pipe_ngtranslate_0$] = null;
    gui$46template._ViewGuiToolPage13.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = gui$46template._ViewGuiToolPage13.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPage13);
  dart.addTypeCaches(gui$46template._ViewGuiToolPage13);
  dart.setMethodSignature(gui$46template._ViewGuiToolPage13, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPage13.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPage13, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPage13, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPage13.__proto__),
    [_textBinding_2$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$4]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_0_5$0]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_0_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_expr_0$5]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe))
  }));
  gui$46template._ViewGuiToolPageHost0 = class _ViewGuiToolPageHost0 extends host_view.HostView$(dart.legacy(gui$.GuiToolPage)) {
    build() {
      this.componentView = new gui$46template.ViewGuiToolPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_ModalService_0_5$0] = new modal_service.ModalService.new();
      this.component = new gui$.GuiToolPage.new(this[_ModalService_0_5$0]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 0 === nodeIndex) {
        return this[_ModalService_0_5$0];
      }
      return notFoundResult;
    }
  };
  (gui$46template._ViewGuiToolPageHost0.new = function() {
    this[_ModalService_0_5$0] = null;
    gui$46template._ViewGuiToolPageHost0.__proto__.new.call(this);
    ;
  }).prototype = gui$46template._ViewGuiToolPageHost0.prototype;
  dart.addTypeTests(gui$46template._ViewGuiToolPageHost0);
  dart.addTypeCaches(gui$46template._ViewGuiToolPageHost0);
  dart.setMethodSignature(gui$46template._ViewGuiToolPageHost0, () => ({
    __proto__: dart.getMethods(gui$46template._ViewGuiToolPageHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(gui$46template._ViewGuiToolPageHost0, L32);
  dart.setFieldSignature(gui$46template._ViewGuiToolPageHost0, () => ({
    __proto__: dart.getFields(gui$46template._ViewGuiToolPageHost0.__proto__),
    [_ModalService_0_5$0]: dart.fieldType(dart.legacy(modal_service.ModalService))
  }));
  var C87;
  gui$46template.createGuiToolPageFactory = function createGuiToolPageFactory() {
    return new (ComponentFactoryOfGuiToolPageL()).new("gui_tool", C87 || CT.C87);
  };
  gui$46template.viewFactory_GuiToolPage1 = function viewFactory_GuiToolPage1(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage1.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage2 = function viewFactory_GuiToolPage2(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage2.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage3 = function viewFactory_GuiToolPage3(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage3.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage4 = function viewFactory_GuiToolPage4(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage4.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage5 = function viewFactory_GuiToolPage5(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage5.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage6 = function viewFactory_GuiToolPage6(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage6.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage7 = function viewFactory_GuiToolPage7(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage7.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage8 = function viewFactory_GuiToolPage8(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage8.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage9 = function viewFactory_GuiToolPage9(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage9.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage10 = function viewFactory_GuiToolPage10(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage10.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage11 = function viewFactory_GuiToolPage11(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage11.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage12 = function viewFactory_GuiToolPage12(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage12.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPage13 = function viewFactory_GuiToolPage13(parentView, parentIndex) {
    return new gui$46template._ViewGuiToolPage13.new(parentView, parentIndex);
  };
  gui$46template.viewFactory_GuiToolPageHost0 = function viewFactory_GuiToolPageHost0() {
    return new gui$46template._ViewGuiToolPageHost0.new();
  };
  gui$46template.initReflector = function initReflector$6() {
    if (dart.test(gui$46template._visited)) {
      return;
    }
    gui$46template._visited = true;
  };
  dart.copyProperties(gui$46template, {
    get GuiToolPageNgFactory() {
      return gui$46template._GuiToolPageNgFactory;
    }
  });
  var C88;
  dart.defineLazy(gui$46template, {
    /*gui$46template.styles$GuiToolPage*/get styles$GuiToolPage() {
      return [gui$46css$46shim.styles, tools$46css$46shim.styles];
    },
    /*gui$46template._GuiToolPageNgFactory*/get _GuiToolPageNgFactory() {
      return C88 || CT.C88;
    },
    /*gui$46template.styles$GuiToolPageHost*/get styles$GuiToolPageHost() {
      return C10 || CT.C10;
    },
    /*gui$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(gui$46css$46shim, {
    /*gui$46css$46shim.styles*/get styles() {
      return [""];
    }
  }, true);
  var _textBinding_18 = dart.privateName(crafting$46template, "_textBinding_18");
  var _textBinding_20 = dart.privateName(crafting$46template, "_textBinding_20");
  var _appEl_3$2 = dart.privateName(crafting$46template, "_appEl_3");
  var _NgIf_3_9$2 = dart.privateName(crafting$46template, "_NgIf_3_9");
  var _appEl_4$1 = dart.privateName(crafting$46template, "_appEl_4");
  var _NgIf_4_9$1 = dart.privateName(crafting$46template, "_NgIf_4_9");
  var _appEl_5$3 = dart.privateName(crafting$46template, "_appEl_5");
  var _NgIf_5_9$3 = dart.privateName(crafting$46template, "_NgIf_5_9");
  var _appEl_7$1 = dart.privateName(crafting$46template, "_appEl_7");
  var _NgFor_7_9$0 = dart.privateName(crafting$46template, "_NgFor_7_9");
  var _compView_8$ = dart.privateName(crafting$46template, "_compView_8");
  var _FluidIcon_8_5 = dart.privateName(crafting$46template, "_FluidIcon_8_5");
  var _appEl_12 = dart.privateName(crafting$46template, "_appEl_12");
  var _NgIf_12_9 = dart.privateName(crafting$46template, "_NgIf_12_9");
  var _compView_13$ = dart.privateName(crafting$46template, "_compView_13");
  var _FluidCard_13_5 = dart.privateName(crafting$46template, "_FluidCard_13_5");
  var _compView_21 = dart.privateName(crafting$46template, "_compView_21");
  var _FluidInput_21_5 = dart.privateName(crafting$46template, "_FluidInput_21_5");
  var _DefaultValueAccessor_21_6 = dart.privateName(crafting$46template, "_DefaultValueAccessor_21_6");
  var _NumberValueAccessor_21_7 = dart.privateName(crafting$46template, "_NumberValueAccessor_21_7");
  var _NgValueAccessor_21_8 = dart.privateName(crafting$46template, "_NgValueAccessor_21_8");
  var _NgModel_21_9 = dart.privateName(crafting$46template, "_NgModel_21_9");
  var _compView_22$0 = dart.privateName(crafting$46template, "_compView_22");
  var _FluidCheckbox_22_5 = dart.privateName(crafting$46template, "_FluidCheckbox_22_5");
  var _compView_23 = dart.privateName(crafting$46template, "_compView_23");
  var _FluidCheckbox_23_5 = dart.privateName(crafting$46template, "_FluidCheckbox_23_5");
  var _compView_24$ = dart.privateName(crafting$46template, "_compView_24");
  var _FluidInput_24_5 = dart.privateName(crafting$46template, "_FluidInput_24_5");
  var _DefaultValueAccessor_24_6 = dart.privateName(crafting$46template, "_DefaultValueAccessor_24_6");
  var _NumberValueAccessor_24_7 = dart.privateName(crafting$46template, "_NumberValueAccessor_24_7");
  var _NgValueAccessor_24_8 = dart.privateName(crafting$46template, "_NgValueAccessor_24_8");
  var _NgModel_24_9 = dart.privateName(crafting$46template, "_NgModel_24_9");
  var _compView_27 = dart.privateName(crafting$46template, "_compView_27");
  var _FluidInput_27_5 = dart.privateName(crafting$46template, "_FluidInput_27_5");
  var _DefaultValueAccessor_27_6 = dart.privateName(crafting$46template, "_DefaultValueAccessor_27_6");
  var _NgValueAccessor_27_7 = dart.privateName(crafting$46template, "_NgValueAccessor_27_7");
  var _NgModel_27_8 = dart.privateName(crafting$46template, "_NgModel_27_8");
  var _compView_30 = dart.privateName(crafting$46template, "_compView_30");
  var _FluidInput_30_5 = dart.privateName(crafting$46template, "_FluidInput_30_5");
  var _DefaultValueAccessor_30_6 = dart.privateName(crafting$46template, "_DefaultValueAccessor_30_6");
  var _NumberValueAccessor_30_7 = dart.privateName(crafting$46template, "_NumberValueAccessor_30_7");
  var _NgValueAccessor_30_8 = dart.privateName(crafting$46template, "_NgValueAccessor_30_8");
  var _NgModel_30_9 = dart.privateName(crafting$46template, "_NgModel_30_9");
  var _compView_31 = dart.privateName(crafting$46template, "_compView_31");
  var _FluidCheckbox_31_5 = dart.privateName(crafting$46template, "_FluidCheckbox_31_5");
  var _compView_32$ = dart.privateName(crafting$46template, "_compView_32");
  var _FluidCheckbox_32_5 = dart.privateName(crafting$46template, "_FluidCheckbox_32_5");
  var _compView_33 = dart.privateName(crafting$46template, "_compView_33");
  var _FluidButton_33_5 = dart.privateName(crafting$46template, "_FluidButton_33_5");
  var _compView_36 = dart.privateName(crafting$46template, "_compView_36");
  var _FluidButton_36_5 = dart.privateName(crafting$46template, "_FluidButton_36_5");
  var _compView_39$ = dart.privateName(crafting$46template, "_compView_39");
  var _FluidButton_39_5 = dart.privateName(crafting$46template, "_FluidButton_39_5");
  var _compView_41 = dart.privateName(crafting$46template, "_compView_41");
  var _FluidCheckbox_41_5 = dart.privateName(crafting$46template, "_FluidCheckbox_41_5");
  var _compView_43 = dart.privateName(crafting$46template, "_compView_43");
  var _FluidButton_43_5 = dart.privateName(crafting$46template, "_FluidButton_43_5");
  var _compView_44 = dart.privateName(crafting$46template, "_compView_44");
  var _FluidIcon_44_5 = dart.privateName(crafting$46template, "_FluidIcon_44_5");
  var _appEl_47 = dart.privateName(crafting$46template, "_appEl_47");
  var _NgIf_47_9 = dart.privateName(crafting$46template, "_NgIf_47_9");
  var _appEl_48$ = dart.privateName(crafting$46template, "_appEl_48");
  var _NgIf_48_9$ = dart.privateName(crafting$46template, "_NgIf_48_9");
  var _compView_49 = dart.privateName(crafting$46template, "_compView_49");
  var _FluidButton_49_5 = dart.privateName(crafting$46template, "_FluidButton_49_5");
  var _compView_52 = dart.privateName(crafting$46template, "_compView_52");
  var _FluidButton_52_5 = dart.privateName(crafting$46template, "_FluidButton_52_5");
  var _compView_54 = dart.privateName(crafting$46template, "_compView_54");
  var _ModalService_54_5 = dart.privateName(crafting$46template, "_ModalService_54_5");
  var _ItemSelectorComponent_54_6 = dart.privateName(crafting$46template, "_ItemSelectorComponent_54_6");
  var _compView_55 = dart.privateName(crafting$46template, "_compView_55");
  var _ModalService_55_5 = dart.privateName(crafting$46template, "_ModalService_55_5");
  var _ItemSelectorComponent_55_6 = dart.privateName(crafting$46template, "_ItemSelectorComponent_55_6");
  var _compView_56 = dart.privateName(crafting$46template, "_compView_56");
  var _ModalService_56_5 = dart.privateName(crafting$46template, "_ModalService_56_5");
  var _ItemSelectorComponent_56_6 = dart.privateName(crafting$46template, "_ItemSelectorComponent_56_6");
  var _compView_57 = dart.privateName(crafting$46template, "_compView_57");
  var _ModalService_57_5 = dart.privateName(crafting$46template, "_ModalService_57_5");
  var _ItemSelectorComponent_57_6 = dart.privateName(crafting$46template, "_ItemSelectorComponent_57_6");
  var _expr_2$0 = dart.privateName(crafting$46template, "_expr_2");
  var _expr_4$0 = dart.privateName(crafting$46template, "_expr_4");
  var _expr_6$0 = dart.privateName(crafting$46template, "_expr_6");
  var _expr_7$0 = dart.privateName(crafting$46template, "_expr_7");
  var _expr_8$ = dart.privateName(crafting$46template, "_expr_8");
  var _expr_9$ = dart.privateName(crafting$46template, "_expr_9");
  var _expr_11$ = dart.privateName(crafting$46template, "_expr_11");
  var _expr_13$0 = dart.privateName(crafting$46template, "_expr_13");
  var _expr_18 = dart.privateName(crafting$46template, "_expr_18");
  var _expr_21 = dart.privateName(crafting$46template, "_expr_21");
  var _expr_23 = dart.privateName(crafting$46template, "_expr_23");
  var _expr_25 = dart.privateName(crafting$46template, "_expr_25");
  var _expr_27 = dart.privateName(crafting$46template, "_expr_27");
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var _handleEvent_0$4 = dart.privateName(crafting$46template, "_handleEvent_0");
  var _handleEvent_1$1 = dart.privateName(crafting$46template, "_handleEvent_1");
  var _handleEvent_2$1 = dart.privateName(crafting$46template, "_handleEvent_2");
  var _handleEvent_3$1 = dart.privateName(crafting$46template, "_handleEvent_3");
  var _handleEvent_4$0 = dart.privateName(crafting$46template, "_handleEvent_4");
  var _handleEvent_5$0 = dart.privateName(crafting$46template, "_handleEvent_5");
  var _handleEvent_6$0 = dart.privateName(crafting$46template, "_handleEvent_6");
  var _handleEvent_7$ = dart.privateName(crafting$46template, "_handleEvent_7");
  var _handleEvent_8$ = dart.privateName(crafting$46template, "_handleEvent_8");
  var _handleEvent_9$ = dart.privateName(crafting$46template, "_handleEvent_9");
  var _handleEvent_10$ = dart.privateName(crafting$46template, "_handleEvent_10");
  var _handleEvent_11$ = dart.privateName(crafting$46template, "_handleEvent_11");
  var _handleEvent_12$ = dart.privateName(crafting$46template, "_handleEvent_12");
  var _handleEvent_13 = dart.privateName(crafting$46template, "_handleEvent_13");
  var _handleEvent_14 = dart.privateName(crafting$46template, "_handleEvent_14");
  var _handleEvent_15 = dart.privateName(crafting$46template, "_handleEvent_15");
  var _handleEvent_16 = dart.privateName(crafting$46template, "_handleEvent_16");
  var _handleEvent_17 = dart.privateName(crafting$46template, "_handleEvent_17");
  var _handleEvent_18 = dart.privateName(crafting$46template, "_handleEvent_18");
  var _handleEvent_19 = dart.privateName(crafting$46template, "_handleEvent_19");
  var _handleEvent_20 = dart.privateName(crafting$46template, "_handleEvent_20");
  var _handleEvent_21 = dart.privateName(crafting$46template, "_handleEvent_21");
  var _handleEvent_22 = dart.privateName(crafting$46template, "_handleEvent_22");
  var _handleEvent_23 = dart.privateName(crafting$46template, "_handleEvent_23");
  var _handleEvent_24 = dart.privateName(crafting$46template, "_handleEvent_24");
  var _handleEvent_25 = dart.privateName(crafting$46template, "_handleEvent_25");
  var _handleEvent_26 = dart.privateName(crafting$46template, "_handleEvent_26");
  var _handleEvent_27 = dart.privateName(crafting$46template, "_handleEvent_27");
  var C96;
  var modalService$1 = dart.privateName(crafting, "CraftingToolPage.modalService");
  var slots = dart.privateName(crafting, "CraftingToolPage.slots");
  var table = dart.privateName(crafting, "CraftingToolPage.table");
  var recipes = dart.privateName(crafting, "CraftingToolPage.recipes");
  var currentIndex = dart.privateName(crafting, "CraftingToolPage.currentIndex");
  var selectedSlot = dart.privateName(crafting, "CraftingToolPage.selectedSlot");
  var generatedFiles$0 = dart.privateName(crafting, "CraftingToolPage.generatedFiles");
  var result = dart.privateName(crafting, "CraftingToolPage.result");
  var errorText$0 = dart.privateName(crafting, "CraftingToolPage.errorText");
  crafting.CraftingToolPage = class CraftingToolPage extends core.Object {
    get modalService() {
      return this[modalService$1];
    }
    set modalService(value) {
      super.modalService = value;
    }
    get slots() {
      return this[slots];
    }
    set slots(value) {
      super.slots = value;
    }
    get table() {
      return this[table];
    }
    set table(value) {
      this[table] = value;
    }
    get recipes() {
      return this[recipes];
    }
    set recipes(value) {
      this[recipes] = value;
    }
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get selectedSlot() {
      return this[selectedSlot];
    }
    set selectedSlot(value) {
      this[selectedSlot] = value;
    }
    get generatedFiles() {
      return this[generatedFiles$0];
    }
    set generatedFiles(value) {
      this[generatedFiles$0] = value;
    }
    get result() {
      return this[result];
    }
    set result(value) {
      this[result] = value;
    }
    get errorText() {
      return this[errorText$0];
    }
    set errorText(value) {
      this[errorText$0] = value;
    }
    get current() {
      return this.recipes[$_get](this.currentIndex);
    }
    ngOnInit() {
      if (dart.test(this.recipes[$isEmpty])) this.addEmptyRecipe();
      this.table = new craftingtable.CraftingTable.new();
      this.switchPage(0, false);
    }
    getItemImage(i) {
      return "https://minecraftitemids.com/item/64/" + dart.str(i.getId()) + ".png";
    }
    get selectedItem() {
      return dart.notNull(this.selectedSlot) > 9 ? this.current.result : this.current.ingredients[$_get](this.selectedSlot);
    }
    set selectedItem(s) {
      let t10, t9, t8;
      return dart.notNull(this.selectedSlot) > 9 ? this.current.result = s : (t8 = this.current.ingredients, t9 = this.selectedSlot, t10 = s, t8[$_set](t9, t10), t10);
    }
    controlPages(isRight) {
      if (dart.test(isRight)) {
        if (dart.notNull(this.currentIndex) >= dart.notNull(this.recipes[$length]) - 1) {
          this.addEmptyRecipe();
        }
        this.switchPage(dart.notNull(this.currentIndex) + 1);
      } else {
        this.switchPage(dart.notNull(this.currentIndex) - 1);
      }
    }
    addEmptyRecipe() {
      this.recipes[$add](new recipe.Recipe.new(new (IdentityMapOfintL$ItemL()).new(), null));
    }
    switchPage(index, save = true) {
      this.currentIndex = index;
    }
    onSelect(index) {
      this.modalService.open("crafting_item_selector");
      this.selectedSlot = index;
    }
    generate() {
      this.errorText = null;
      this.table.recipes = this.recipes;
      try {
        this.generatedFiles = build.getAllFiles(new project.Project.new({name: this.table.name, generate: this.table}));
        core.print(this.generatedFiles);
        this.result = dart.notNull(this.generatedFiles[$_get]("data/" + dart.str(this.table.name) + "/functions/recipes/craft.mcfunction")) + "\n" + dart.notNull(this.generatedFiles[$_get]("data/" + dart.str(this.table.name) + "/functions/recipes/res_craft.mcfunction"));
      } catch (e) {
        let err = dart.getThrown(e);
        this.errorText = dart.toString(err);
        core.print(err);
        this.generatedFiles = new (IdentityMapOfStringL$StringL()).new();
      }
    }
    download() {
      this.generate();
      build.saveAsZip(this.generatedFiles, dart.notNull(this.table.name) + ".zip");
    }
    copy() {
      if (this.result != null) html.window.navigator.clipboard[$writeText](this.result);
    }
  };
  (crafting.CraftingToolPage.new = function(modalService) {
    this[slots] = ListOfintL().generate(9, dart.fn(i => dart.notNull(i) + 1, intLTointL()));
    this[table] = null;
    this[recipes] = JSArrayOfRecipeL().of([]);
    this[currentIndex] = 0;
    this[selectedSlot] = 0;
    this[generatedFiles$0] = null;
    this[result] = null;
    this[errorText$0] = null;
    this[modalService$1] = modalService;
    ;
  }).prototype = crafting.CraftingToolPage.prototype;
  dart.addTypeTests(crafting.CraftingToolPage);
  dart.addTypeCaches(crafting.CraftingToolPage);
  crafting.CraftingToolPage[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(crafting.CraftingToolPage, () => ({
    __proto__: dart.getMethods(crafting.CraftingToolPage.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    getItemImage: dart.fnType(dart.legacy(core.String), [dart.legacy(item.Item)]),
    controlPages: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    addEmptyRecipe: dart.fnType(dart.void, []),
    switchPage: dart.fnType(dart.void, [dart.legacy(core.int)], [dart.dynamic]),
    onSelect: dart.fnType(dart.void, [dart.legacy(core.int)]),
    generate: dart.fnType(dart.void, []),
    download: dart.fnType(dart.void, []),
    copy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(crafting.CraftingToolPage, () => ({
    __proto__: dart.getGetters(crafting.CraftingToolPage.__proto__),
    current: dart.legacy(recipe.Recipe),
    selectedItem: dart.legacy(item.Item)
  }));
  dart.setSetterSignature(crafting.CraftingToolPage, () => ({
    __proto__: dart.getSetters(crafting.CraftingToolPage.__proto__),
    selectedItem: dart.legacy(item.Item)
  }));
  dart.setLibraryUri(crafting.CraftingToolPage, L33);
  dart.setFieldSignature(crafting.CraftingToolPage, () => ({
    __proto__: dart.getFields(crafting.CraftingToolPage.__proto__),
    modalService: dart.finalFieldType(dart.legacy(modal_service.ModalService)),
    slots: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    table: dart.fieldType(dart.legacy(craftingtable.CraftingTable)),
    recipes: dart.fieldType(dart.legacy(core.List$(dart.legacy(recipe.Recipe)))),
    currentIndex: dart.fieldType(dart.legacy(core.int)),
    selectedSlot: dart.fieldType(dart.legacy(core.int)),
    generatedFiles: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    result: dart.fieldType(dart.legacy(core.String)),
    errorText: dart.fieldType(dart.legacy(core.String))
  }));
  crafting$46template.ViewCraftingToolPage0 = class ViewCraftingToolPage0 extends component_view.ComponentView$(dart.legacy(crafting.CraftingToolPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/tools/crafting/crafting.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_0, "id", "center");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "container");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      dom_helpers.setAttribute(_el_2, "id", "rightControl");
      this.addShimC(_el_2);
      let _anchor_3 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_3$2] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$2], C89 || CT.C89);
      this[_NgIf_3_9$2] = new ng_if.NgIf.new(this[_appEl_3$2], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_4$1] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$1], C90 || CT.C90);
      this[_NgIf_4_9$1] = new ng_if.NgIf.new(this[_appEl_4$1], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_5$3] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$3], C91 || CT.C91);
      this[_NgIf_5_9$3] = new ng_if.NgIf.new(this[_appEl_5$3], _TemplateRef_5_8);
      let _el_6 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_6, "grid");
      dom_helpers.setAttribute(_el_6, "style", "--columns: 3; width: 50%;");
      this.addShimC(_el_6);
      let _anchor_7 = dom_helpers.appendAnchor(_el_6);
      this[_appEl_7$1] = new view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$1], C92 || CT.C92);
      this[_NgFor_7_9$0] = new ng_for.NgFor.new(this[_appEl_7$1], _TemplateRef_7_8);
      this[_compView_8$] = new icon$46template.ViewFluidIcon0.new(this, 8);
      let _el_8 = this[_compView_8$].rootElement;
      _el_1[$append](_el_8);
      dom_helpers.setAttribute(_el_8, "icon", "mediaFastForward");
      dom_helpers.setAttribute(_el_8, "id", "convertIcon");
      this.addShimC(_el_8);
      this[_FluidIcon_8_5] = new icon.FluidIcon.new(_el_8);
      this[_compView_8$].createAndProject(this[_FluidIcon_8_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_9 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_9, "result");
      this.addShimC(_el_9);
      let _el_10 = dom_helpers.appendDiv(doc, _el_9);
      this.updateChildClass(_el_10, "slot");
      this.addShimC(_el_10);
      let _el_11 = dom_helpers.appendDiv(doc, _el_10);
      this.updateChildClass(_el_11, "content");
      this.addShimC(_el_11);
      let _anchor_12 = dom_helpers.appendAnchor(_el_11);
      this[_appEl_12] = new view_container.ViewContainer.new(12, 11, this, _anchor_12);
      let _TemplateRef_12_8 = new template_ref.TemplateRef.new(this[_appEl_12], C93 || CT.C93);
      this[_NgIf_12_9] = new ng_if.NgIf.new(this[_appEl_12], _TemplateRef_12_8);
      this[_compView_13$] = new card$46template.ViewFluidCard0.new(this, 13);
      let _el_13 = this[_compView_13$].rootElement;
      _el_0[$append](_el_13);
      this.updateChildClassNonHtml(_el_13, "card");
      this.addShimC(_el_13);
      this[_FluidCard_13_5] = new card.FluidCard.new(_el_13);
      let _el_14 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_14), "split");
      this.addShimC(HtmlElementL().as(_el_14));
      let _el_15 = dom_helpers.appendDiv(doc, _el_14);
      this.addShimC(_el_15);
      let _el_16 = dom_helpers.appendElement(doc, _el_15, "h3");
      this.addShimE(_el_16);
      let _text_17 = dom_helpers.appendText(_el_16, "Recipe ");
      _el_16[$append](this[_textBinding_18].element);
      let _text_19 = dom_helpers.appendText(_el_16, " of ");
      _el_16[$append](this[_textBinding_20].element);
      this[_compView_21] = new input$46template.ViewFluidInput0.new(this, 21);
      let _el_21 = this[_compView_21].rootElement;
      _el_15[$append](_el_21);
      dom_helpers.setAttribute(_el_21, "fluidInput", "");
      dom_helpers.setAttribute(_el_21, "placeholder", "Override Recipe ID");
      dom_helpers.setAttribute(_el_21, "type", "number");
      this.addShimC(_el_21);
      this[_FluidInput_21_5] = new input.FluidInput.new(_el_21);
      this[_DefaultValueAccessor_21_6] = new default_value_accessor.DefaultValueAccessor.new(_el_21);
      this[_NumberValueAccessor_21_7] = new number_value_accessor.NumberValueAccessor.new(_el_21);
      this[_NgValueAccessor_21_8] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_21_6], this[_NumberValueAccessor_21_7]]);
      this[_NgModel_21_9] = new ng_model.NgModel.new(null, this[_NgValueAccessor_21_8]);
      this[_compView_21].createAndProject(this[_FluidInput_21_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_compView_22$0] = new checkbox$46template.ViewFluidCheckbox0.new(this, 22);
      let _el_22 = this[_compView_22$0].rootElement;
      _el_15[$append](_el_22);
      dom_helpers.setAttribute(_el_22, "label", "Shapeless");
      this.addShimC(_el_22);
      this[_FluidCheckbox_22_5] = new checkbox.FluidCheckbox.new();
      this[_compView_22$0].create(this[_FluidCheckbox_22_5]);
      this[_compView_23] = new checkbox$46template.ViewFluidCheckbox0.new(this, 23);
      let _el_23 = this[_compView_23].rootElement;
      _el_15[$append](_el_23);
      dom_helpers.setAttribute(_el_23, "label", "Check for Empty Slots");
      this.addShimC(_el_23);
      this[_FluidCheckbox_23_5] = new checkbox.FluidCheckbox.new();
      this[_compView_23].create(this[_FluidCheckbox_23_5]);
      this[_compView_24$] = new input$46template.ViewFluidInput0.new(this, 24);
      let _el_24 = this[_compView_24$].rootElement;
      _el_15[$append](_el_24);
      dom_helpers.setAttribute(_el_24, "fluidInput", "");
      dom_helpers.setAttribute(_el_24, "placeholder", "exact Output Count");
      dom_helpers.setAttribute(_el_24, "type", "number");
      this.addShimC(_el_24);
      this[_FluidInput_24_5] = new input.FluidInput.new(_el_24);
      this[_DefaultValueAccessor_24_6] = new default_value_accessor.DefaultValueAccessor.new(_el_24);
      this[_NumberValueAccessor_24_7] = new number_value_accessor.NumberValueAccessor.new(_el_24);
      this[_NgValueAccessor_24_8] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_24_6], this[_NumberValueAccessor_24_7]]);
      this[_NgModel_24_9] = new ng_model.NgModel.new(null, this[_NgValueAccessor_24_8]);
      this[_compView_24$].createAndProject(this[_FluidInput_24_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_25 = dom_helpers.appendElement(doc, _el_15, "h3");
      this.addShimE(_el_25);
      let _text_26 = dom_helpers.appendText(_el_25, "Project");
      this[_compView_27] = new input$46template.ViewFluidInput0.new(this, 27);
      let _el_27 = this[_compView_27].rootElement;
      _el_15[$append](_el_27);
      dom_helpers.setAttribute(_el_27, "fluidInput", "");
      dom_helpers.setAttribute(_el_27, "placeholder", "Project namespace");
      this.addShimC(_el_27);
      this[_FluidInput_27_5] = new input.FluidInput.new(_el_27);
      this[_DefaultValueAccessor_27_6] = new default_value_accessor.DefaultValueAccessor.new(_el_27);
      this[_NgValueAccessor_27_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_27_6]]);
      this[_NgModel_27_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_27_7]);
      this[_compView_27].createAndProject(this[_FluidInput_27_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_28 = dom_helpers.appendElement(doc, _el_15, "br");
      this.addShimE(_el_28);
      let _text_29 = dom_helpers.appendText(_el_15, " ");
      this[_compView_30] = new input$46template.ViewFluidInput0.new(this, 30);
      let _el_30 = this[_compView_30].rootElement;
      _el_15[$append](_el_30);
      dom_helpers.setAttribute(_el_30, "fluidInput", "");
      dom_helpers.setAttribute(_el_30, "placeholder", "Base Id for all recipes");
      dom_helpers.setAttribute(_el_30, "type", "number");
      this.addShimC(_el_30);
      this[_FluidInput_30_5] = new input.FluidInput.new(_el_30);
      this[_DefaultValueAccessor_30_6] = new default_value_accessor.DefaultValueAccessor.new(_el_30);
      this[_NumberValueAccessor_30_7] = new number_value_accessor.NumberValueAccessor.new(_el_30);
      this[_NgValueAccessor_30_8] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_30_6], this[_NumberValueAccessor_30_7]]);
      this[_NgModel_30_9] = new ng_model.NgModel.new(null, this[_NgValueAccessor_30_8]);
      this[_compView_30].createAndProject(this[_FluidInput_30_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_compView_31] = new checkbox$46template.ViewFluidCheckbox0.new(this, 31);
      let _el_31 = this[_compView_31].rootElement;
      _el_15[$append](_el_31);
      dom_helpers.setAttribute(_el_31, "label", "use a barrel instead of a chest");
      this.addShimC(_el_31);
      this[_FluidCheckbox_31_5] = new checkbox.FluidCheckbox.new();
      this[_compView_31].create(this[_FluidCheckbox_31_5]);
      this[_compView_32$] = new checkbox$46template.ViewFluidCheckbox0.new(this, 32);
      let _el_32 = this[_compView_32$].rootElement;
      _el_15[$append](_el_32);
      dom_helpers.setAttribute(_el_32, "label", "make the chest invisible(just up to 1.14)");
      this.addShimC(_el_32);
      this[_FluidCheckbox_32_5] = new checkbox.FluidCheckbox.new();
      this[_compView_32$].create(this[_FluidCheckbox_32_5]);
      this[_compView_33] = new button$46template.ViewFluidButton0.new(this, 33);
      let _el_33 = this[_compView_33].rootElement;
      _el_15[$append](_el_33);
      dom_helpers.setAttribute(_el_33, "fluidBtn", "");
      dom_helpers.setAttribute(_el_33, "secondary", "");
      this.addShimC(_el_33);
      this[_FluidButton_33_5] = new button.FluidButton.new(_el_33);
      let _text_34 = dom_helpers.createText("Select Placeholder Item");
      this[_compView_33].createAndProject(this[_FluidButton_33_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_34])]));
      let _text_35 = dom_helpers.appendText(_el_15, " ");
      this[_compView_36] = new button$46template.ViewFluidButton0.new(this, 36);
      let _el_36 = this[_compView_36].rootElement;
      _el_15[$append](_el_36);
      dom_helpers.setAttribute(_el_36, "fluidBtn", "");
      dom_helpers.setAttribute(_el_36, "secondary", "");
      this.addShimC(_el_36);
      this[_FluidButton_36_5] = new button.FluidButton.new(_el_36);
      let _text_37 = dom_helpers.createText("Select Gui Item");
      this[_compView_36].createAndProject(this[_FluidButton_36_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_37])]));
      let _text_38 = dom_helpers.appendText(_el_15, " ");
      this[_compView_39$] = new button$46template.ViewFluidButton0.new(this, 39);
      let _el_39 = this[_compView_39$].rootElement;
      _el_15[$append](_el_39);
      dom_helpers.setAttribute(_el_39, "fluidBtn", "");
      dom_helpers.setAttribute(_el_39, "secondary", "");
      this.addShimC(_el_39);
      this[_FluidButton_39_5] = new button.FluidButton.new(_el_39);
      let _text_40 = dom_helpers.createText("Select Block Model");
      this[_compView_39$].createAndProject(this[_FluidButton_39_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_40])]));
      this[_compView_41] = new checkbox$46template.ViewFluidCheckbox0.new(this, 41);
      let _el_41 = this[_compView_41].rootElement;
      _el_15[$append](_el_41);
      dom_helpers.setAttribute(_el_41, "label", " include a function to generate recipes in minecraft");
      this.addShimC(_el_41);
      this[_FluidCheckbox_41_5] = new checkbox.FluidCheckbox.new();
      this[_compView_41].create(this[_FluidCheckbox_41_5]);
      let _el_42 = dom_helpers.appendDiv(doc, _el_14);
      this.updateChildClass(_el_42, "output");
      this.addShimC(_el_42);
      this[_compView_43] = new button$46template.ViewFluidButton0.new(this, 43);
      let _el_43 = this[_compView_43].rootElement;
      _el_42[$append](_el_43);
      dom_helpers.setAttribute(_el_43, "fluidBtn", "");
      dom_helpers.setAttribute(_el_43, "highlight", "");
      this.addShimC(_el_43);
      this[_FluidButton_43_5] = new button.FluidButton.new(_el_43);
      this[_compView_44] = new icon$46template.ViewFluidIcon0.new(this, 44);
      let _el_44 = this[_compView_44].rootElement;
      this.addShimC(_el_44);
      this[_FluidIcon_44_5] = new icon.FluidIcon.new(_el_44);
      let _text_45 = dom_helpers.createText("clip");
      this[_compView_44].createAndProject(this[_FluidIcon_44_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_45])]));
      this[_compView_43].createAndProject(this[_FluidButton_43_5], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_44])]));
      let _text_46 = dom_helpers.appendText(_el_42, " ");
      let _anchor_47 = dom_helpers.appendAnchor(_el_42);
      this[_appEl_47] = new view_container.ViewContainer.new(47, 42, this, _anchor_47);
      let _TemplateRef_47_8 = new template_ref.TemplateRef.new(this[_appEl_47], C94 || CT.C94);
      this[_NgIf_47_9] = new ng_if.NgIf.new(this[_appEl_47], _TemplateRef_47_8);
      let _anchor_48 = dom_helpers.appendAnchor(_el_14);
      this[_appEl_48$] = new view_container.ViewContainer.new(48, 14, this, _anchor_48);
      let _TemplateRef_48_8 = new template_ref.TemplateRef.new(this[_appEl_48$], C95 || CT.C95);
      this[_NgIf_48_9$] = new ng_if.NgIf.new(this[_appEl_48$], _TemplateRef_48_8);
      this[_compView_49] = new button$46template.ViewFluidButton0.new(this, 49);
      let _el_49 = this[_compView_49].rootElement;
      this.updateChildClass(_el_49, "full");
      dom_helpers.setAttribute(_el_49, "fluidBtn", "");
      dom_helpers.setAttribute(_el_49, "highlight", "");
      this.addShimC(_el_49);
      this[_FluidButton_49_5] = new button.FluidButton.new(_el_49);
      let _text_50 = dom_helpers.createText("Download Datapack");
      this[_compView_49].createAndProject(this[_FluidButton_49_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_50])]));
      let _text_51 = dom_helpers.createText(" ");
      this[_compView_52] = new button$46template.ViewFluidButton0.new(this, 52);
      let _el_52 = this[_compView_52].rootElement;
      this.updateChildClass(_el_52, "full");
      dom_helpers.setAttribute(_el_52, "fluidBtn", "");
      this.addShimC(_el_52);
      this[_FluidButton_52_5] = new button.FluidButton.new(_el_52);
      let _text_53 = dom_helpers.createText("Generate");
      this[_compView_52].createAndProject(this[_FluidButton_52_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_53])]));
      this[_compView_13$].createAndProject(this[_FluidCard_13_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_el_14, _el_49, _text_51, _el_52])]));
      this[_compView_54] = new item$46template.ViewItemSelectorComponent0.new(this, 54);
      let _el_54 = this[_compView_54].rootElement;
      parentRenderNode[$append](_el_54);
      dom_helpers.setAttribute(_el_54, "name", "crafting_item_selector");
      this.addShimC(_el_54);
      this[_ModalService_54_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_54_6] = new item$.ItemSelectorComponent.new(this[_ModalService_54_5]);
      this[_compView_54].createAndProject(this[_ItemSelectorComponent_54_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      this[_compView_55] = new item$46template.ViewItemSelectorComponent0.new(this, 55);
      let _el_55 = this[_compView_55].rootElement;
      parentRenderNode[$append](_el_55);
      dom_helpers.setAttribute(_el_55, "name", "crafting_placeholder");
      this.addShimC(_el_55);
      this[_ModalService_55_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_55_6] = new item$.ItemSelectorComponent.new(this[_ModalService_55_5]);
      this[_compView_55].createAndProject(this[_ItemSelectorComponent_55_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      this[_compView_56] = new item$46template.ViewItemSelectorComponent0.new(this, 56);
      let _el_56 = this[_compView_56].rootElement;
      parentRenderNode[$append](_el_56);
      dom_helpers.setAttribute(_el_56, "name", "crafting_gui");
      this.addShimC(_el_56);
      this[_ModalService_56_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_56_6] = new item$.ItemSelectorComponent.new(this[_ModalService_56_5]);
      this[_compView_56].createAndProject(this[_ItemSelectorComponent_56_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      this[_compView_57] = new item$46template.ViewItemSelectorComponent0.new(this, 57);
      let _el_57 = this[_compView_57].rootElement;
      parentRenderNode[$append](_el_57);
      dom_helpers.setAttribute(_el_57, "name", "crafting_block");
      this.addShimC(_el_57);
      this[_ModalService_57_5] = new modal_service.ModalService.new();
      this[_ItemSelectorComponent_57_6] = new item$.ItemSelectorComponent.new(this[_ModalService_57_5]);
      this[_compView_57].createAndProject(this[_ItemSelectorComponent_57_6], JSArrayOfObjectL().of([C10 || CT.C10, C10 || CT.C10, C10 || CT.C10]));
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$4)));
      _el_9[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1$1)));
      _el_21[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$1)));
      _el_21[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_3$1)));
      _el_21[$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_4$0)));
      let subscription_0 = this[_NgModel_21_9].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_5$0)));
      let subscription_1 = this[_FluidCheckbox_22_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_6$0)));
      let subscription_2 = this[_FluidCheckbox_23_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_7$)));
      _el_24[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_8$)));
      _el_24[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_9$)));
      _el_24[$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_10$)));
      let subscription_3 = this[_NgModel_24_9].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_11$)));
      _el_27[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_27_6], 'touchHandler')));
      _el_27[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_12$)));
      let subscription_4 = this[_NgModel_27_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_13)));
      _el_30[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_14)));
      _el_30[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_15)));
      _el_30[$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_16)));
      let subscription_5 = this[_NgModel_30_9].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_17)));
      _el_31[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_18)));
      let subscription_6 = this[_FluidCheckbox_32_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_19)));
      _el_33[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_20)));
      _el_36[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_21)));
      _el_39[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_22)));
      let subscription_7 = this[_FluidCheckbox_41_5].valueChange.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handleEvent_23)));
      _el_43[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'copy')));
      _el_49[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'download')));
      _el_52[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'generate')));
      let subscription_8 = this[_ItemSelectorComponent_54_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_24)));
      let subscription_9 = this[_ItemSelectorComponent_55_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_25)));
      let subscription_10 = this[_ItemSelectorComponent_56_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_26)));
      let subscription_11 = this[_ItemSelectorComponent_57_6].itemChange.listen(this.eventHandler1(ItemL(), ItemL(), dart.bind(this, _handleEvent_27)));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9, subscription_10, subscription_11]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (21 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_21_8];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_21_9];
        }
      }
      if (24 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_24_8];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_24_9];
        }
      }
      if (27 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_27_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_27_8];
        }
      }
      if (30 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_30_8];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_30_9];
        }
      }
      if (token === dart.wrapType(ModalServiceL()) && 54 === nodeIndex) {
        return this[_ModalService_54_5];
      }
      if (token === dart.wrapType(ModalServiceL()) && 55 === nodeIndex) {
        return this[_ModalService_55_5];
      }
      if (token === dart.wrapType(ModalServiceL()) && 56 === nodeIndex) {
        return this[_ModalService_56_5];
      }
      if (token === dart.wrapType(ModalServiceL()) && 57 === nodeIndex) {
        return this[_ModalService_57_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      this[_NgIf_3_9$2].ngIf = dart.notNull(_ctx.currentIndex) + 1 === _ctx.recipes[$length];
      this[_NgIf_4_9$1].ngIf = dart.notNull(_ctx.currentIndex) + 1 !== _ctx.recipes[$length];
      this[_NgIf_5_9$3].ngIf = dart.notNull(_ctx.currentIndex) > 0;
      if (dart.test(firstCheck)) {
        if (_ctx.slots != null) {
          this[_NgFor_7_9$0].ngForOf = _ctx.slots;
        }
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_7_9$0].ngDoCheck();
      }
      if (dart.test(firstCheck)) {
        this[_FluidIcon_8_5].icon = "mediaFastForward";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_8_5].ngOnInit();
      }
      this[_NgIf_12_9].ngIf = _ctx.current.result != null;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_13_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_21_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.current.id;
      if (dart.test(check_binding.checkBinding(this[_expr_2$0], currVal_2, "current.id", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_NgModel_21_9].model = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      if (changed) {
        this[_NgModel_21_9].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_21_9].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_22_5].label = "Shapeless";
      }
      let currVal_4 = _ctx.current.isShapeless;
      if (dart.test(check_binding.checkBinding(this[_expr_4$0], currVal_4, "current.isShapeless", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_FluidCheckbox_22_5].value = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_23_5].label = "Check for Empty Slots";
      }
      let currVal_6 = _ctx.current.exactlyPlaced;
      if (dart.test(check_binding.checkBinding(this[_expr_6$0], currVal_6, "current.exactlyPlaced", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_FluidCheckbox_23_5].value = currVal_6;
        this[_expr_6$0] = currVal_6;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_24_5].ngOnInit();
      }
      changed = false;
      let currVal_7 = _ctx.current.exactResult;
      if (dart.test(check_binding.checkBinding(this[_expr_7$0], currVal_7, "current.exactResult", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_NgModel_24_9].model = currVal_7;
        changed = true;
        this[_expr_7$0] = currVal_7;
      }
      if (changed) {
        this[_NgModel_24_9].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_24_9].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_27_5].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.table.name;
      if (dart.test(check_binding.checkBinding(this[_expr_8$], currVal_8, "table.name", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_NgModel_27_8].model = currVal_8;
        changed = true;
        this[_expr_8$] = currVal_8;
      }
      if (changed) {
        this[_NgModel_27_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_27_8].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_30_5].ngOnInit();
      }
      changed = false;
      let currVal_9 = _ctx.table.id;
      if (dart.test(check_binding.checkBinding(this[_expr_9$], currVal_9, "table.id", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_NgModel_30_9].model = currVal_9;
        changed = true;
        this[_expr_9$] = currVal_9;
      }
      if (changed) {
        this[_NgModel_30_9].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_30_9].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_31_5].label = "use a barrel instead of a chest";
      }
      let currVal_11 = _ctx.table.useBarrel;
      if (dart.test(check_binding.checkBinding(this[_expr_11$], currVal_11, "table.useBarrel", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_FluidCheckbox_31_5].value = currVal_11;
        this[_expr_11$] = currVal_11;
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_32_5].label = "make the chest invisible(just up to 1.14)";
      }
      let currVal_13 = _ctx.table.invisibleHitbox;
      if (dart.test(check_binding.checkBinding(this[_expr_13$0], currVal_13, "table.invisibleHitbox", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_FluidCheckbox_32_5].value = currVal_13;
        this[_expr_13$0] = currVal_13;
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_33_5].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_33_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_36_5].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_36_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_39_5].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_39_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidCheckbox_41_5].label = " include a function to generate recipes in minecraft";
      }
      let currVal_18 = _ctx.table.giveCommandFunction;
      if (dart.test(check_binding.checkBinding(this[_expr_18], currVal_18, "table.giveCommandFunction", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_FluidCheckbox_41_5].value = currVal_18;
        this[_expr_18] = currVal_18;
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_43_5].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_43_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_44_5].ngOnInit();
      }
      this[_NgIf_47_9].ngIf = _ctx.errorText == null;
      this[_NgIf_48_9$].ngIf = _ctx.errorText != null;
      if (dart.test(firstCheck)) {
        this[_FluidButton_49_5].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_49_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_52_5].ngOnInit();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_54_6].name = "crafting_item_selector";
        changed = true;
      }
      let currVal_21 = _ctx.selectedItem;
      if (dart.test(check_binding.checkBinding(this[_expr_21], currVal_21, "selectedItem", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_ItemSelectorComponent_54_6].item = currVal_21;
        changed = true;
        this[_expr_21] = currVal_21;
      }
      if (changed) {
        this[_ItemSelectorComponent_54_6].ngAfterChanges();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_55_6].name = "crafting_placeholder";
        changed = true;
      }
      let currVal_23 = _ctx.table.placeholder;
      if (dart.test(check_binding.checkBinding(this[_expr_23], currVal_23, "table.placeholder", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_ItemSelectorComponent_55_6].item = currVal_23;
        changed = true;
        this[_expr_23] = currVal_23;
      }
      if (changed) {
        this[_ItemSelectorComponent_55_6].ngAfterChanges();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_56_6].name = "crafting_gui";
        changed = true;
      }
      let currVal_25 = _ctx.table.guiModel;
      if (dart.test(check_binding.checkBinding(this[_expr_25], currVal_25, "table.guiModel", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_ItemSelectorComponent_56_6].item = currVal_25;
        changed = true;
        this[_expr_25] = currVal_25;
      }
      if (changed) {
        this[_ItemSelectorComponent_56_6].ngAfterChanges();
      }
      changed = false;
      if (dart.test(firstCheck)) {
        this[_ItemSelectorComponent_57_6].name = "crafting_block";
        changed = true;
      }
      let currVal_27 = _ctx.table.blockModel;
      if (dart.test(check_binding.checkBinding(this[_expr_27], currVal_27, "table.blockModel", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        this[_ItemSelectorComponent_57_6].item = currVal_27;
        changed = true;
        this[_expr_27] = currVal_27;
      }
      if (changed) {
        this[_ItemSelectorComponent_57_6].ngAfterChanges();
      }
      this[_appEl_3$2].detectChangesInNestedViews();
      this[_appEl_4$1].detectChangesInNestedViews();
      this[_appEl_5$3].detectChangesInNestedViews();
      this[_appEl_7$1].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      this[_appEl_47].detectChangesInNestedViews();
      this[_appEl_48$].detectChangesInNestedViews();
      this[_textBinding_18].updateText(StringL().as(interpolate.interpolate0(dart.notNull(_ctx.currentIndex) + 1)));
      this[_textBinding_20].updateTextWithPrimitive(_ctx.recipes[$length]);
      this[_compView_8$].detectChanges();
      this[_compView_13$].detectChanges();
      this[_compView_21].detectChanges();
      this[_compView_22$0].detectChanges();
      this[_compView_23].detectChanges();
      this[_compView_24$].detectChanges();
      this[_compView_27].detectChanges();
      this[_compView_30].detectChanges();
      this[_compView_31].detectChanges();
      this[_compView_32$].detectChanges();
      this[_compView_33].detectChanges();
      this[_compView_36].detectChanges();
      this[_compView_39$].detectChanges();
      this[_compView_41].detectChanges();
      this[_compView_43].detectChanges();
      this[_compView_44].detectChanges();
      this[_compView_49].detectChanges();
      this[_compView_52].detectChanges();
      this[_compView_54].detectChanges();
      this[_compView_55].detectChanges();
      this[_compView_56].detectChanges();
      this[_compView_57].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3$2].destroyNestedViews();
      this[_appEl_4$1].destroyNestedViews();
      this[_appEl_5$3].destroyNestedViews();
      this[_appEl_7$1].destroyNestedViews();
      this[_appEl_12].destroyNestedViews();
      this[_appEl_47].destroyNestedViews();
      this[_appEl_48$].destroyNestedViews();
      this[_compView_8$].destroyInternalState();
      this[_compView_13$].destroyInternalState();
      this[_compView_21].destroyInternalState();
      this[_compView_22$0].destroyInternalState();
      this[_compView_23].destroyInternalState();
      this[_compView_24$].destroyInternalState();
      this[_compView_27].destroyInternalState();
      this[_compView_30].destroyInternalState();
      this[_compView_31].destroyInternalState();
      this[_compView_32$].destroyInternalState();
      this[_compView_33].destroyInternalState();
      this[_compView_36].destroyInternalState();
      this[_compView_39$].destroyInternalState();
      this[_compView_41].destroyInternalState();
      this[_compView_43].destroyInternalState();
      this[_compView_44].destroyInternalState();
      this[_compView_49].destroyInternalState();
      this[_compView_52].destroyInternalState();
      this[_compView_54].destroyInternalState();
      this[_compView_55].destroyInternalState();
      this[_compView_56].destroyInternalState();
      this[_compView_57].destroyInternalState();
    }
    [_handleEvent_0$4]($36event) {
      let _ctx = this.ctx;
      _ctx.controlPages(true);
    }
    [_handleEvent_1$1]($36event) {
      let _ctx = this.ctx;
      _ctx.onSelect(10);
    }
    [_handleEvent_2$1]($36event) {
      this[_DefaultValueAccessor_21_6].touchHandler();
      this[_NumberValueAccessor_21_7].touchHandler();
    }
    [_handleEvent_3$1]($36event) {
      this[_DefaultValueAccessor_21_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_21_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_4$0]($36event) {
      this[_NumberValueAccessor_21_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_5$0]($36event) {
      let _ctx = this.ctx;
      _ctx.current.id = intL().as($36event);
    }
    [_handleEvent_6$0]($36event) {
      let _ctx = this.ctx;
      _ctx.current.isShapeless = boolL().as($36event);
    }
    [_handleEvent_7$]($36event) {
      let _ctx = this.ctx;
      _ctx.current.exactlyPlaced = boolL().as($36event);
    }
    [_handleEvent_8$]($36event) {
      this[_DefaultValueAccessor_24_6].touchHandler();
      this[_NumberValueAccessor_24_7].touchHandler();
    }
    [_handleEvent_9$]($36event) {
      this[_DefaultValueAccessor_24_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_24_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_10$]($36event) {
      this[_NumberValueAccessor_24_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_11$]($36event) {
      let _ctx = this.ctx;
      _ctx.current.exactResult = intL().as($36event);
    }
    [_handleEvent_12$]($36event) {
      this[_DefaultValueAccessor_27_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_13]($36event) {
      let _ctx = this.ctx;
      _ctx.table.name = StringL().as($36event);
    }
    [_handleEvent_14]($36event) {
      this[_DefaultValueAccessor_30_6].touchHandler();
      this[_NumberValueAccessor_30_7].touchHandler();
    }
    [_handleEvent_15]($36event) {
      this[_DefaultValueAccessor_30_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
      this[_NumberValueAccessor_30_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_16]($36event) {
      this[_NumberValueAccessor_30_7].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_17]($36event) {
      let _ctx = this.ctx;
      _ctx.table.id = intL().as($36event);
    }
    [_handleEvent_18]($36event) {
      let _ctx = this.ctx;
      _ctx.table.useBarrel = !dart.test(_ctx.table.useBarrel);
    }
    [_handleEvent_19]($36event) {
      let _ctx = this.ctx;
      _ctx.table.invisibleHitbox = boolL().as($36event);
    }
    [_handleEvent_20]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("crafting_placeholder");
    }
    [_handleEvent_21]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("crafting_gui");
    }
    [_handleEvent_22]($36event) {
      let _ctx = this.ctx;
      _ctx.modalService.open("crafting_block");
    }
    [_handleEvent_23]($36event) {
      let _ctx = this.ctx;
      _ctx.table.giveCommandFunction = boolL().as($36event);
    }
    [_handleEvent_24]($36event) {
      let _ctx = this.ctx;
      _ctx.selectedItem = ItemL().as($36event);
    }
    [_handleEvent_25]($36event) {
      let _ctx = this.ctx;
      _ctx.table.placeholder = ItemL().as($36event);
    }
    [_handleEvent_26]($36event) {
      let _ctx = this.ctx;
      _ctx.table.guiModel = ItemL().as($36event);
    }
    [_handleEvent_27]($36event) {
      let _ctx = this.ctx;
      _ctx.table.blockModel = ItemL().as($36event);
    }
    static _debugClearComponentStyles() {
      crafting$46template.ViewCraftingToolPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = crafting$46template.ViewCraftingToolPage0._componentStyles;
      if (styles == null) {
        crafting$46template.ViewCraftingToolPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(crafting$46template.styles$CraftingToolPage, crafting$46template.ViewCraftingToolPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C96 || CT.C96);
        }
      }
      this.componentStyles = styles;
    }
  };
  (crafting$46template.ViewCraftingToolPage0.new = function(parentView, parentIndex) {
    this[_textBinding_18] = new text_binding.TextBinding.new();
    this[_textBinding_20] = new text_binding.TextBinding.new();
    this[_appEl_3$2] = null;
    this[_NgIf_3_9$2] = null;
    this[_appEl_4$1] = null;
    this[_NgIf_4_9$1] = null;
    this[_appEl_5$3] = null;
    this[_NgIf_5_9$3] = null;
    this[_appEl_7$1] = null;
    this[_NgFor_7_9$0] = null;
    this[_compView_8$] = null;
    this[_FluidIcon_8_5] = null;
    this[_appEl_12] = null;
    this[_NgIf_12_9] = null;
    this[_compView_13$] = null;
    this[_FluidCard_13_5] = null;
    this[_compView_21] = null;
    this[_FluidInput_21_5] = null;
    this[_DefaultValueAccessor_21_6] = null;
    this[_NumberValueAccessor_21_7] = null;
    this[_NgValueAccessor_21_8] = null;
    this[_NgModel_21_9] = null;
    this[_compView_22$0] = null;
    this[_FluidCheckbox_22_5] = null;
    this[_compView_23] = null;
    this[_FluidCheckbox_23_5] = null;
    this[_compView_24$] = null;
    this[_FluidInput_24_5] = null;
    this[_DefaultValueAccessor_24_6] = null;
    this[_NumberValueAccessor_24_7] = null;
    this[_NgValueAccessor_24_8] = null;
    this[_NgModel_24_9] = null;
    this[_compView_27] = null;
    this[_FluidInput_27_5] = null;
    this[_DefaultValueAccessor_27_6] = null;
    this[_NgValueAccessor_27_7] = null;
    this[_NgModel_27_8] = null;
    this[_compView_30] = null;
    this[_FluidInput_30_5] = null;
    this[_DefaultValueAccessor_30_6] = null;
    this[_NumberValueAccessor_30_7] = null;
    this[_NgValueAccessor_30_8] = null;
    this[_NgModel_30_9] = null;
    this[_compView_31] = null;
    this[_FluidCheckbox_31_5] = null;
    this[_compView_32$] = null;
    this[_FluidCheckbox_32_5] = null;
    this[_compView_33] = null;
    this[_FluidButton_33_5] = null;
    this[_compView_36] = null;
    this[_FluidButton_36_5] = null;
    this[_compView_39$] = null;
    this[_FluidButton_39_5] = null;
    this[_compView_41] = null;
    this[_FluidCheckbox_41_5] = null;
    this[_compView_43] = null;
    this[_FluidButton_43_5] = null;
    this[_compView_44] = null;
    this[_FluidIcon_44_5] = null;
    this[_appEl_47] = null;
    this[_NgIf_47_9] = null;
    this[_appEl_48$] = null;
    this[_NgIf_48_9$] = null;
    this[_compView_49] = null;
    this[_FluidButton_49_5] = null;
    this[_compView_52] = null;
    this[_FluidButton_52_5] = null;
    this[_compView_54] = null;
    this[_ModalService_54_5] = null;
    this[_ItemSelectorComponent_54_6] = null;
    this[_compView_55] = null;
    this[_ModalService_55_5] = null;
    this[_ItemSelectorComponent_55_6] = null;
    this[_compView_56] = null;
    this[_ModalService_56_5] = null;
    this[_ItemSelectorComponent_56_6] = null;
    this[_compView_57] = null;
    this[_ModalService_57_5] = null;
    this[_ItemSelectorComponent_57_6] = null;
    this[_expr_2$0] = null;
    this[_expr_4$0] = null;
    this[_expr_6$0] = null;
    this[_expr_7$0] = null;
    this[_expr_8$] = null;
    this[_expr_9$] = null;
    this[_expr_11$] = null;
    this[_expr_13$0] = null;
    this[_expr_18] = null;
    this[_expr_21] = null;
    this[_expr_23] = null;
    this[_expr_25] = null;
    this[_expr_27] = null;
    crafting$46template.ViewCraftingToolPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("crafting_tool"));
  }).prototype = crafting$46template.ViewCraftingToolPage0.prototype;
  dart.addTypeTests(crafting$46template.ViewCraftingToolPage0);
  dart.addTypeCaches(crafting$46template.ViewCraftingToolPage0);
  dart.setMethodSignature(crafting$46template.ViewCraftingToolPage0, () => ({
    __proto__: dart.getMethods(crafting$46template.ViewCraftingToolPage0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$4]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_6$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_7$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_8$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_9$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_10$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_11$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_12$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_13]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_14]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_15]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_16]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_17]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_18]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_19]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_20]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_21]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_22]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_23]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_24]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_25]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_26]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_27]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template.ViewCraftingToolPage0, L34);
  dart.setFieldSignature(crafting$46template.ViewCraftingToolPage0, () => ({
    __proto__: dart.getFields(crafting$46template.ViewCraftingToolPage0.__proto__),
    [_textBinding_18]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_20]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_3$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$2]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5$3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9$3]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_7_9$0]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_compView_8$]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_8_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_appEl_12]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_12_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_13$]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_13_5]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_compView_21]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_21_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_21_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_21_7]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_21_8]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_21_9]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_22$0]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_22_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_23]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_23_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_24$]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_24_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_24_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_24_7]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_24_8]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_24_9]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_27]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_27_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_27_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_27_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_27_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_30]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_30_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_30_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NumberValueAccessor_30_7]: dart.fieldType(dart.legacy(number_value_accessor.NumberValueAccessor)),
    [_NgValueAccessor_30_8]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_30_9]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_31]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_31_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_32$]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_32_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_33]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_33_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_36]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_36_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_39$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_39_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_41]: dart.fieldType(dart.legacy(checkbox$46template.ViewFluidCheckbox0)),
    [_FluidCheckbox_41_5]: dart.fieldType(dart.legacy(checkbox.FluidCheckbox)),
    [_compView_43]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_43_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_44]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_44_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_appEl_47]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_47_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_48$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_48_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_49]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_49_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_52]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_52_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_54]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_54_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_54_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_compView_55]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_55_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_55_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_compView_56]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_56_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_56_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_compView_57]: dart.fieldType(dart.legacy(item$46template.ViewItemSelectorComponent0)),
    [_ModalService_57_5]: dart.fieldType(dart.legacy(modal_service.ModalService)),
    [_ItemSelectorComponent_57_6]: dart.fieldType(dart.legacy(item$.ItemSelectorComponent)),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic),
    [_expr_6$0]: dart.fieldType(dart.dynamic),
    [_expr_7$0]: dart.fieldType(dart.dynamic),
    [_expr_8$]: dart.fieldType(dart.dynamic),
    [_expr_9$]: dart.fieldType(dart.dynamic),
    [_expr_11$]: dart.fieldType(dart.dynamic),
    [_expr_13$0]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_expr_21]: dart.fieldType(dart.dynamic),
    [_expr_23]: dart.fieldType(dart.dynamic),
    [_expr_25]: dart.fieldType(dart.dynamic),
    [_expr_27]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(crafting$46template.ViewCraftingToolPage0, {
    /*crafting$46template.ViewCraftingToolPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$5 = dart.privateName(crafting$46template, "_compView_0");
  var _FluidIcon_0_5$ = dart.privateName(crafting$46template, "_FluidIcon_0_5");
  crafting$46template._ViewCraftingToolPage1 = class _ViewCraftingToolPage1 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      this[_compView_0$5] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0$5].rootElement;
      this.updateChildClassNonHtml(_el_0, "icon");
      dom_helpers.setAttribute(_el_0, "icon", "plus");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5$] = new icon.FluidIcon.new(_el_0);
      this[_compView_0$5].createAndProject(this[_FluidIcon_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5$].size = 32.0;
        this[_FluidIcon_0_5$].icon = "plus";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5$].ngOnInit();
      }
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroyInternalState();
    }
  };
  (crafting$46template._ViewCraftingToolPage1.new = function(parentView, parentIndex) {
    this[_compView_0$5] = null;
    this[_FluidIcon_0_5$] = null;
    crafting$46template._ViewCraftingToolPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage1.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage1);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage1);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage1, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage1, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage1, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage1.__proto__),
    [_compView_0$5]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5$]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  crafting$46template._ViewCraftingToolPage2 = class _ViewCraftingToolPage2 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      this[_compView_0$5] = new icon$46template.ViewFluidIcon0.new(this, 0);
      let _el_0 = this[_compView_0$5].rootElement;
      this.updateChildClassNonHtml(_el_0, "icon");
      dom_helpers.setAttribute(_el_0, "icon", "arrowRight");
      this.addShimC(_el_0);
      this[_FluidIcon_0_5$] = new icon.FluidIcon.new(_el_0);
      this[_compView_0$5].createAndProject(this[_FluidIcon_0_5$], JSArrayOfObjectL().of([C10 || CT.C10]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_0_5$].size = 32.0;
        this[_FluidIcon_0_5$].icon = "arrowRight";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_0_5$].ngOnInit();
      }
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroyInternalState();
    }
  };
  (crafting$46template._ViewCraftingToolPage2.new = function(parentView, parentIndex) {
    this[_compView_0$5] = null;
    this[_FluidIcon_0_5$] = null;
    crafting$46template._ViewCraftingToolPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage2.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage2);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage2);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage2, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage2, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage2, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage2.__proto__),
    [_compView_0$5]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_0_5$]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _compView_1$2 = dart.privateName(crafting$46template, "_compView_1");
  var _FluidIcon_1_5$0 = dart.privateName(crafting$46template, "_FluidIcon_1_5");
  crafting$46template._ViewCraftingToolPage3 = class _ViewCraftingToolPage3 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_0, "id", "leftControl");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1$2] = new icon$46template.ViewFluidIcon0.new(this, 1);
      let _el_1 = this[_compView_1$2].rootElement;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "icon");
      dom_helpers.setAttribute(_el_1, "icon", "arrowLeft");
      this.addShimC(_el_1);
      this[_FluidIcon_1_5$0] = new icon.FluidIcon.new(_el_1);
      this[_compView_1$2].createAndProject(this[_FluidIcon_1_5$0], JSArrayOfObjectL().of([C10 || CT.C10]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$4)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidIcon_1_5$0].size = 32.0;
        this[_FluidIcon_1_5$0].icon = "arrowLeft";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_1_5$0].ngOnInit();
      }
      this[_compView_1$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_1$2].destroyInternalState();
    }
    [_handleEvent_0$4]($36event) {
      let _ctx = this.ctx;
      _ctx.controlPages(false);
    }
  };
  (crafting$46template._ViewCraftingToolPage3.new = function(parentView, parentIndex) {
    this[_compView_1$2] = null;
    this[_FluidIcon_1_5$0] = null;
    crafting$46template._ViewCraftingToolPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage3.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage3);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage3);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage3, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage3.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$4]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage3, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage3, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage3.__proto__),
    [_compView_1$2]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_1_5$0]: dart.fieldType(dart.legacy(icon.FluidIcon))
  }));
  var _appEl_2$1 = dart.privateName(crafting$46template, "_appEl_2");
  var _NgIf_2_9$1 = dart.privateName(crafting$46template, "_NgIf_2_9");
  var C97;
  crafting$46template._ViewCraftingToolPage4 = class _ViewCraftingToolPage4 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "slot");
      this.addShimC(HtmlElementL().as(_el_0));
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2$1] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$1], C97 || CT.C97);
      this[_NgIf_2_9$1] = new ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
      _el_1[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$4)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_slot = optimizations.unsafeCast(intL(), this.locals[$_get]("$implicit"));
      this[_NgIf_2_9$1].ngIf = _ctx.current.ingredients[$_get](local_slot) != null;
      this[_appEl_2$1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2$1].destroyNestedViews();
    }
    [_handleEvent_0$4]($36event) {
      let local_slot = optimizations.unsafeCast(intL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onSelect(local_slot);
    }
  };
  (crafting$46template._ViewCraftingToolPage4.new = function(parentView, parentIndex) {
    this[_appEl_2$1] = null;
    this[_NgIf_2_9$1] = null;
    crafting$46template._ViewCraftingToolPage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage4.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage4);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage4);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage4, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage4.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$4]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage4, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage4, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage4.__proto__),
    [_appEl_2$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _expr_0$6 = dart.privateName(crafting$46template, "_expr_0");
  var _expr_1$3 = dart.privateName(crafting$46template, "_expr_1");
  var _el_0$2 = dart.privateName(crafting$46template, "_el_0");
  crafting$46template._ViewCraftingToolPage5 = class _ViewCraftingToolPage5 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      let doc = html.document;
      this[_el_0$2] = doc[$createElement]("img");
      this.addShimE(this[_el_0$2]);
      this.initRootNode(this[_el_0$2]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_slot = optimizations.unsafeCast(intL(), optimizations.unsafeCast(_ViewCraftingToolPage4L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = _ctx.getItemImage(_ctx.current.ingredients[$_get](local_slot));
      if (dart.test(check_binding.checkBinding(this[_expr_0$6], currVal_0, "getItemImage(current.ingredients[slot])", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        dom_helpers.setProperty(this[_el_0$2], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$6] = currVal_0;
      }
      let currVal_1 = _ctx.current.ingredients[$_get](local_slot).getId();
      if (dart.test(check_binding.checkBinding(this[_expr_1$3], currVal_1, "current.ingredients[slot].getId()", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        dom_helpers.setProperty(this[_el_0$2], "alt", currVal_1);
        this[_expr_1$3] = currVal_1;
      }
    }
  };
  (crafting$46template._ViewCraftingToolPage5.new = function(parentView, parentIndex) {
    this[_expr_0$6] = null;
    this[_expr_1$3] = null;
    this[_el_0$2] = null;
    crafting$46template._ViewCraftingToolPage5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage5.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage5);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage5);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage5, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage5, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage5, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage5.__proto__),
    [_expr_0$6]: dart.fieldType(dart.dynamic),
    [_expr_1$3]: dart.fieldType(dart.dynamic),
    [_el_0$2]: dart.fieldType(dart.legacy(html.Element))
  }));
  crafting$46template._ViewCraftingToolPage6 = class _ViewCraftingToolPage6 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      let doc = html.document;
      this[_el_0$2] = doc[$createElement]("img");
      this.addShimE(this[_el_0$2]);
      this.initRootNode(this[_el_0$2]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.getItemImage(_ctx.current.result);
      if (dart.test(check_binding.checkBinding(this[_expr_0$6], currVal_0, "getItemImage(current.result)", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        dom_helpers.setProperty(this[_el_0$2], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$6] = currVal_0;
      }
      let currVal_1 = _ctx.current.result.getId();
      if (dart.test(check_binding.checkBinding(this[_expr_1$3], currVal_1, "current.result.getId()", "package:stevertus/src/pages/tools/crafting/crafting.html"))) {
        dom_helpers.setProperty(this[_el_0$2], "alt", currVal_1);
        this[_expr_1$3] = currVal_1;
      }
    }
  };
  (crafting$46template._ViewCraftingToolPage6.new = function(parentView, parentIndex) {
    this[_expr_0$6] = null;
    this[_expr_1$3] = null;
    this[_el_0$2] = null;
    crafting$46template._ViewCraftingToolPage6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage6.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage6);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage6);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage6, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage6, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage6, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage6.__proto__),
    [_expr_0$6]: dart.fieldType(dart.dynamic),
    [_expr_1$3]: dart.fieldType(dart.dynamic),
    [_el_0$2]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _textBinding_1$5 = dart.privateName(crafting$46template, "_textBinding_1");
  var _FluidMultiInput_0_5$1 = dart.privateName(crafting$46template, "_FluidMultiInput_0_5");
  crafting$46template._ViewCraftingToolPage7 = class _ViewCraftingToolPage7 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      this[_compView_0$5] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this[_compView_0$5].rootElement;
      this.updateChildClass(_el_0, "result_text");
      dom_helpers.setAttribute(_el_0, "cols", "30");
      dom_helpers.setAttribute(_el_0, "disabled", "");
      dom_helpers.setAttribute(_el_0, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "Result");
      dom_helpers.setAttribute(_el_0, "rows", "10");
      this.addShimC(_el_0);
      this[_FluidMultiInput_0_5$1] = new input$.FluidMultiInput.new(_el_0);
      this[_compView_0$5].createAndProject(this[_FluidMultiInput_0_5$1], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$5].element])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5$1].ngOnInit();
      }
      this[_textBinding_1$5].updateText(interpolate.interpolateString0(_ctx.result));
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroyInternalState();
    }
  };
  (crafting$46template._ViewCraftingToolPage7.new = function(parentView, parentIndex) {
    this[_textBinding_1$5] = new text_binding.TextBinding.new();
    this[_compView_0$5] = null;
    this[_FluidMultiInput_0_5$1] = null;
    crafting$46template._ViewCraftingToolPage7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage7.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage7);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage7);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage7, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage7, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage7, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage7.__proto__),
    [_textBinding_1$5]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$5]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5$1]: dart.fieldType(dart.legacy(input$.FluidMultiInput))
  }));
  crafting$46template._ViewCraftingToolPage8 = class _ViewCraftingToolPage8 extends embedded_view.EmbeddedView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      this[_compView_0$5] = new input$46template$.ViewFluidMultiInput0.new(this, 0);
      let _el_0 = this[_compView_0$5].rootElement;
      this.updateChildClass(_el_0, "error");
      dom_helpers.setAttribute(_el_0, "cols", "30");
      dom_helpers.setAttribute(_el_0, "disabled", "");
      dom_helpers.setAttribute(_el_0, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_0, "placeholder", "ERROR");
      dom_helpers.setAttribute(_el_0, "rows", "10");
      this.addShimC(_el_0);
      this[_FluidMultiInput_0_5$1] = new input$.FluidMultiInput.new(_el_0);
      this[_compView_0$5].createAndProject(this[_FluidMultiInput_0_5$1], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$5].element])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_0_5$1].ngOnInit();
      }
      this[_textBinding_1$5].updateText(interpolate.interpolateString0(_ctx.errorText));
      this[_compView_0$5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$5].destroyInternalState();
    }
  };
  (crafting$46template._ViewCraftingToolPage8.new = function(parentView, parentIndex) {
    this[_textBinding_1$5] = new text_binding.TextBinding.new();
    this[_compView_0$5] = null;
    this[_FluidMultiInput_0_5$1] = null;
    crafting$46template._ViewCraftingToolPage8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPage8.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPage8);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPage8);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPage8, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPage8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPage8, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPage8, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPage8.__proto__),
    [_textBinding_1$5]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$5]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_0_5$1]: dart.fieldType(dart.legacy(input$.FluidMultiInput))
  }));
  var _ModalService_0_5$1 = dart.privateName(crafting$46template, "_ModalService_0_5");
  crafting$46template._ViewCraftingToolPageHost0 = class _ViewCraftingToolPageHost0 extends host_view.HostView$(dart.legacy(crafting.CraftingToolPage)) {
    build() {
      this.componentView = new crafting$46template.ViewCraftingToolPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this[_ModalService_0_5$1] = new modal_service.ModalService.new();
      this.component = new crafting.CraftingToolPage.new(this[_ModalService_0_5$1]);
      this.initRootNode(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ModalServiceL()) && 0 === nodeIndex) {
        return this[_ModalService_0_5$1];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (crafting$46template._ViewCraftingToolPageHost0.new = function() {
    this[_ModalService_0_5$1] = null;
    crafting$46template._ViewCraftingToolPageHost0.__proto__.new.call(this);
    ;
  }).prototype = crafting$46template._ViewCraftingToolPageHost0.prototype;
  dart.addTypeTests(crafting$46template._ViewCraftingToolPageHost0);
  dart.addTypeCaches(crafting$46template._ViewCraftingToolPageHost0);
  dart.setMethodSignature(crafting$46template._ViewCraftingToolPageHost0, () => ({
    __proto__: dart.getMethods(crafting$46template._ViewCraftingToolPageHost0.__proto__),
    build: dart.fnType(dart.void, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(crafting$46template._ViewCraftingToolPageHost0, L34);
  dart.setFieldSignature(crafting$46template._ViewCraftingToolPageHost0, () => ({
    __proto__: dart.getFields(crafting$46template._ViewCraftingToolPageHost0.__proto__),
    [_ModalService_0_5$1]: dart.fieldType(dart.legacy(modal_service.ModalService))
  }));
  var C98;
  crafting$46template.createCraftingToolPageFactory = function createCraftingToolPageFactory() {
    return new (ComponentFactoryOfCraftingToolPageL()).new("crafting_tool", C98 || CT.C98);
  };
  crafting$46template.viewFactory_CraftingToolPage1 = function viewFactory_CraftingToolPage1(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage1.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage2 = function viewFactory_CraftingToolPage2(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage2.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage3 = function viewFactory_CraftingToolPage3(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage3.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage4 = function viewFactory_CraftingToolPage4(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage4.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage5 = function viewFactory_CraftingToolPage5(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage5.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage6 = function viewFactory_CraftingToolPage6(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage6.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage7 = function viewFactory_CraftingToolPage7(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage7.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPage8 = function viewFactory_CraftingToolPage8(parentView, parentIndex) {
    return new crafting$46template._ViewCraftingToolPage8.new(parentView, parentIndex);
  };
  crafting$46template.viewFactory_CraftingToolPageHost0 = function viewFactory_CraftingToolPageHost0() {
    return new crafting$46template._ViewCraftingToolPageHost0.new();
  };
  crafting$46template.initReflector = function initReflector$7() {
    if (dart.test(crafting$46template._visited)) {
      return;
    }
    crafting$46template._visited = true;
  };
  dart.copyProperties(crafting$46template, {
    get CraftingToolPageNgFactory() {
      return crafting$46template._CraftingToolPageNgFactory;
    }
  });
  var C99;
  dart.defineLazy(crafting$46template, {
    /*crafting$46template.styles$CraftingToolPage*/get styles$CraftingToolPage() {
      return [crafting$46css$46shim.styles, tools$46css$46shim.styles];
    },
    /*crafting$46template._CraftingToolPageNgFactory*/get _CraftingToolPageNgFactory() {
      return C99 || CT.C99;
    },
    /*crafting$46template.styles$CraftingToolPageHost*/get styles$CraftingToolPageHost() {
      return C10 || CT.C10;
    },
    /*crafting$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(crafting$46css$46shim, {
    /*crafting$46css$46shim.styles*/get styles() {
      return ["#card._ngcontent-%ID% .split._ngcontent-%ID%{display:grid;grid-template-columns:1fr 1fr}.result._ngcontent-%ID%{position:absolute;right:5%;margin-top:-37%;width:calc(100% / 6);border:8px solid #505050;text-align:center}#convertIcon._ngcontent-%ID%{position:absolute;right:35%;margin-top:-32%;height:50px;text-align:center;font-size:50px}.centered._ngcontent-%ID%{position:absolute;width:100%;text-align:center;top:50%;transform:translateY(-50%)}.output._ngcontent-%ID% button._ngcontent-%ID%{position:absolute;top:16px;right:16px;display:none}.output._ngcontent-%ID% textarea._ngcontent-%ID%{width:90%;height:90%;resize:none}.output:hover._ngcontent-%ID% button._ngcontent-%ID%{display:block}"];
    }
  }, true);
  var _compView_3$0 = dart.privateName(tekpack$46template, "_compView_3");
  var _FluidCard_3_5 = dart.privateName(tekpack$46template, "_FluidCard_3_5");
  var _compView_11$ = dart.privateName(tekpack$46template, "_compView_11");
  var _FluidButton_11_5$ = dart.privateName(tekpack$46template, "_FluidButton_11_5");
  var _compView_15$0 = dart.privateName(tekpack$46template, "_compView_15");
  var _FluidButton_15_5$0 = dart.privateName(tekpack$46template, "_FluidButton_15_5");
  var _appEl_18 = dart.privateName(tekpack$46template, "_appEl_18");
  var _NgIf_18_9 = dart.privateName(tekpack$46template, "_NgIf_18_9");
  var _appEl_19 = dart.privateName(tekpack$46template, "_appEl_19");
  var _NgIf_19_9 = dart.privateName(tekpack$46template, "_NgIf_19_9");
  var _appEl_20 = dart.privateName(tekpack$46template, "_appEl_20");
  var _NgIf_20_9 = dart.privateName(tekpack$46template, "_NgIf_20_9");
  var _pipe_safeURL_0 = dart.privateName(tekpack$46template, "_pipe_safeURL_0");
  var C100;
  var C101;
  var C102;
  var _handleEvent_0$5 = dart.privateName(tekpack$46template, "_handleEvent_0");
  var _handleEvent_1$2 = dart.privateName(tekpack$46template, "_handleEvent_1");
  var C103;
  var items = dart.privateName(tekpack, "TekPackPage.items");
  var video = dart.privateName(tekpack, "TekPackPage.video");
  var changes = dart.privateName(tekpack, "TekPackPage.changes");
  tekpack.TekPackPage = class TekPackPage extends core.Object {
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    get video() {
      return this[video];
    }
    set video(value) {
      this[video] = value;
    }
    get changes() {
      return this[changes];
    }
    set changes(value) {
      this[changes] = value;
    }
    ngOnInit() {
      http$.getJsonFile("tekpack.json").then(core.Null, dart.fn(res => {
        let t9;
        this.video = StringL().as(dart.dsend(res, '_get', ["video"]));
        this.changes = MapL().as((t9 = dart.dsend(res, '_get', ["changes"]), t9 == null ? new _js_helper.LinkedMap.new() : t9));
        if (dart.dsend(res, '_get', ["items"]) != null) {
          for (let i = 0; i < dart.notNull(core.num.as(dart.dload(dart.dsend(res, '_get', ["items"]), 'length'))); i = i + 1) {
            this.items[$add](new tekpack.TekPackItem.fromJson(MapL().as(dart.dsend(dart.dsend(res, '_get', ["items"]), '_get', [i]))));
          }
        }
      }, dynamicToNullN())).catchError(dart.fn(err => core.print(err), dynamicTovoid()));
    }
    getKeys(obj) {
      return obj[$keys][$toList]();
    }
    openLink(url) {
      html.window[$location].href = url;
    }
  };
  (tekpack.TekPackPage.new = function() {
    this[items] = JSArrayOfTekPackItemL().of([]);
    this[video] = null;
    this[changes] = null;
    ;
  }).prototype = tekpack.TekPackPage.prototype;
  dart.addTypeTests(tekpack.TekPackPage);
  dart.addTypeCaches(tekpack.TekPackPage);
  tekpack.TekPackPage[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(tekpack.TekPackPage, () => ({
    __proto__: dart.getMethods(tekpack.TekPackPage.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    getKeys: dart.fnType(dart.legacy(core.List), [dart.legacy(core.Map)]),
    openLink: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(tekpack.TekPackPage, L35);
  dart.setFieldSignature(tekpack.TekPackPage, () => ({
    __proto__: dart.getFields(tekpack.TekPackPage.__proto__),
    items: dart.fieldType(dart.legacy(core.List$(dart.legacy(tekpack.TekPackItem)))),
    video: dart.fieldType(dart.legacy(core.String)),
    changes: dart.fieldType(dart.legacy(core.Map))
  }));
  tekpack$46template.ViewTekPackPage0 = class ViewTekPackPage0 extends component_view.ComponentView$(dart.legacy(tekpack.TekPackPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/tekpack/tekpack.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "img");
      dom_helpers.setAttribute(_el_1, "alt", "tekpack");
      this.updateChildClass(HtmlElementL().as(_el_1), "logo");
      dom_helpers.setAttribute(_el_1, "src", "assets/tekpack/logo.png");
      this.addShimE(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "floatingCard");
      this.addShimC(_el_2);
      this[_compView_3$0] = new card$46template.ViewFluidCard0.new(this, 3);
      let _el_3 = this[_compView_3$0].rootElement;
      _el_2[$append](_el_3);
      this.addShimC(_el_3);
      this[_FluidCard_3_5] = new card.FluidCard.new(_el_3);
      let _el_4 = doc[$createElement]("h2");
      this.addShimE(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, "tekPack is a concept and demonstration of ideas and the power of datapacks together with Stevertus's programming language ");
      let _el_6 = dom_helpers.appendElement(doc, _el_4, "a");
      dom_helpers.setAttribute(_el_6, "routerLink", "/mcscript");
      this.addShimC(HtmlElementL().as(_el_6));
      let _text_7 = dom_helpers.appendText(_el_6, "mcScript");
      let _text_8 = dom_helpers.appendText(_el_4, ".");
      let _el_9 = dom_helpers.appendElement(doc, _el_4, "br");
      this.addShimE(_el_9);
      let _text_10 = dom_helpers.appendText(_el_4, " It introduces multiple technical parts and blocks to enrich the vanilla gameplay.");
      this[_compView_11$] = new button$46template.ViewFluidButton0.new(this, 11);
      let _el_11 = this[_compView_11$].rootElement;
      dom_helpers.setAttribute(_el_11, "fluidBtn", "");
      dom_helpers.setAttribute(_el_11, "highlight", "");
      dom_helpers.setAttribute(_el_11, "style", "width: 50%;height: 60px;line-height: 30px");
      this.addShimC(_el_11);
      this[_FluidButton_11_5$] = new button.FluidButton.new(_el_11);
      let _text_12 = dom_helpers.createText("Get it via ");
      let _el_13 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_13, "alt", "dmanager");
      dom_helpers.setAttribute(_el_13, "src", "assets/dManager-icon.ico");
      dom_helpers.setAttribute(_el_13, "style", "height:25px;margin-left:5px");
      this.addShimE(_el_13);
      this[_compView_11$].createAndProject(this[_FluidButton_11_5$], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_12, _el_13])]));
      let _text_14 = dom_helpers.createText(" ");
      this[_compView_15$0] = new button$46template.ViewFluidButton0.new(this, 15);
      let _el_15 = this[_compView_15$0].rootElement;
      dom_helpers.setAttribute(_el_15, "fluidBtn", "");
      dom_helpers.setAttribute(_el_15, "secondary", "");
      this.addShimC(_el_15);
      this[_FluidButton_15_5$0] = new button.FluidButton.new(_el_15);
      let _text_16 = dom_helpers.createText("Opensource on ");
      let _el_17 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_17, "alt", "");
      dom_helpers.setAttribute(_el_17, "src", "assets/gitHub_icon.svg");
      dom_helpers.setAttribute(_el_17, "style", "height:25px");
      this.addShimE(_el_17);
      this[_compView_15$0].createAndProject(this[_FluidButton_15_5$0], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_16, _el_17])]));
      this[_compView_3$0].createAndProject(this[_FluidCard_3_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_el_4, _el_11, _text_14, _el_15])]));
      let _anchor_18 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_18] = new view_container.ViewContainer.new(18, 0, this, _anchor_18);
      let _TemplateRef_18_8 = new template_ref.TemplateRef.new(this[_appEl_18], C100 || CT.C100);
      this[_NgIf_18_9] = new ng_if.NgIf.new(this[_appEl_18], _TemplateRef_18_8);
      let _anchor_19 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_19] = new view_container.ViewContainer.new(19, 0, this, _anchor_19);
      let _TemplateRef_19_8 = new template_ref.TemplateRef.new(this[_appEl_19], C101 || CT.C101);
      this[_NgIf_19_9] = new ng_if.NgIf.new(this[_appEl_19], _TemplateRef_19_8);
      let _anchor_20 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_20] = new view_container.ViewContainer.new(20, 0, this, _anchor_20);
      let _TemplateRef_20_8 = new template_ref.TemplateRef.new(this[_appEl_20], C102 || CT.C102);
      this[_NgIf_20_9] = new ng_if.NgIf.new(this[_appEl_20], _TemplateRef_20_8);
      _el_11[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$5)));
      _el_15[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1$2)));
      errors.debugInjectorEnter(dart.wrapType(SafeURLPipeL()));
      this[_pipe_safeURL_0] = new safe_url.SafeURLPipe.new(DomSanitizationServiceL().as(this.parentView.injectorGet(dart.wrapType(DomSanitizationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(SafeURLPipeL()));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_3_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_11_5$].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_11_5$].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidButton_15_5$0].secondary = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_15_5$0].ngOnInit();
      }
      this[_NgIf_18_9].ngIf = _ctx.video != null;
      this[_NgIf_19_9].ngIf = _ctx.items != null && dart.test(_ctx.items[$isNotEmpty]);
      this[_NgIf_20_9].ngIf = _ctx.changes != null && dart.test(_ctx.changes[$isNotEmpty]);
      this[_appEl_18].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      this[_appEl_20].detectChangesInNestedViews();
      this[_compView_3$0].detectChanges();
      this[_compView_11$].detectChanges();
      this[_compView_15$0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_18].destroyNestedViews();
      this[_appEl_19].destroyNestedViews();
      this[_appEl_20].destroyNestedViews();
      this[_compView_3$0].destroyInternalState();
      this[_compView_11$].destroyInternalState();
      this[_compView_15$0].destroyInternalState();
    }
    [_handleEvent_0$5]($36event) {
      let _ctx = this.ctx;
      _ctx.openLink("https://dmanager.stevertus.com/pack/open/stevertus:tekpack");
    }
    [_handleEvent_1$2]($36event) {
      let _ctx = this.ctx;
      _ctx.openLink("https://github.com/Stevertus/tekPack");
    }
    static _debugClearComponentStyles() {
      tekpack$46template.ViewTekPackPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = tekpack$46template.ViewTekPackPage0._componentStyles;
      if (styles == null) {
        tekpack$46template.ViewTekPackPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(tekpack$46template.styles$TekPackPage, tekpack$46template.ViewTekPackPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C103 || CT.C103);
        }
      }
      this.componentStyles = styles;
    }
  };
  (tekpack$46template.ViewTekPackPage0.new = function(parentView, parentIndex) {
    this[_compView_3$0] = null;
    this[_FluidCard_3_5] = null;
    this[_compView_11$] = null;
    this[_FluidButton_11_5$] = null;
    this[_compView_15$0] = null;
    this[_FluidButton_15_5$0] = null;
    this[_appEl_18] = null;
    this[_NgIf_18_9] = null;
    this[_appEl_19] = null;
    this[_NgIf_19_9] = null;
    this[_appEl_20] = null;
    this[_NgIf_20_9] = null;
    this[_pipe_safeURL_0] = null;
    tekpack$46template.ViewTekPackPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("tekpack"));
  }).prototype = tekpack$46template.ViewTekPackPage0.prototype;
  dart.addTypeTests(tekpack$46template.ViewTekPackPage0);
  dart.addTypeCaches(tekpack$46template.ViewTekPackPage0);
  dart.setMethodSignature(tekpack$46template.ViewTekPackPage0, () => ({
    __proto__: dart.getMethods(tekpack$46template.ViewTekPackPage0.__proto__),
    [_handleEvent_0$5]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template.ViewTekPackPage0, L36);
  dart.setFieldSignature(tekpack$46template.ViewTekPackPage0, () => ({
    __proto__: dart.getFields(tekpack$46template.ViewTekPackPage0.__proto__),
    [_compView_3$0]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_3_5]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_compView_11$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_11_5$]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_15$0]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_15_5$0]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_appEl_18]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_18_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_19]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_19_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_20]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_20_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_pipe_safeURL_0]: dart.fieldType(dart.legacy(safe_url.SafeURLPipe))
  }));
  dart.defineLazy(tekpack$46template.ViewTekPackPage0, {
    /*tekpack$46template.ViewTekPackPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _expr_0$7 = dart.privateName(tekpack$46template, "_expr_0");
  var _pipe_safeURL_0_0 = dart.privateName(tekpack$46template, "_pipe_safeURL_0_0");
  var _el_1$0 = dart.privateName(tekpack$46template, "_el_1");
  tekpack$46template._ViewTekPackPage1 = class _ViewTekPackPage1 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "video");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_el_1$0] = IFrameElementL().as(dom_helpers.appendElement(doc, _el_0, "iframe"));
      dom_helpers.setAttribute(this[_el_1$0], "allow", "autoplay; encrypted-media");
      dom_helpers.setAttribute(this[_el_1$0], "allowfullscreen", "");
      dom_helpers.setAttribute(this[_el_1$0], "frameborder", "0");
      this.addShimC(this[_el_1$0]);
      this[_pipe_safeURL_0_0] = proxies.pureProxy1(dart.dynamic, dart.dynamic, dart.bind(optimizations.unsafeCast(ViewTekPackPage0L(), this.parentView)[_pipe_safeURL_0], 'transform'));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let t9;
      let _ctx = this.ctx;
      let currVal_0 = (t9 = "https://www.youtube.com/embed/" + dart.notNull(_ctx.video) + "?rel=0&amp;controls=0&amp;showinfo=0", this[_pipe_safeURL_0_0](t9));
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "'https://www.youtube.com/embed/' + video + '?rel=0&amp;controls=0&amp;showinfo=0' | safeURL", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        dom_helpers.setProperty(this[_el_1$0], "src", app_view_utils.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_0));
        this[_expr_0$7] = currVal_0;
      }
    }
  };
  (tekpack$46template._ViewTekPackPage1.new = function(parentView, parentIndex) {
    this[_expr_0$7] = null;
    this[_pipe_safeURL_0_0] = null;
    this[_el_1$0] = null;
    tekpack$46template._ViewTekPackPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage1.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage1);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage1);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage1, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage1, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage1, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage1.__proto__),
    [_expr_0$7]: dart.fieldType(dart.dynamic),
    [_pipe_safeURL_0_0]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.dynamic]))),
    [_el_1$0]: dart.fieldType(dart.legacy(html.IFrameElement))
  }));
  var _appEl_1$2 = dart.privateName(tekpack$46template, "_appEl_1");
  var _NgFor_1_9$ = dart.privateName(tekpack$46template, "_NgFor_1_9");
  var C104;
  tekpack$46template._ViewTekPackPage2 = class _ViewTekPackPage2 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "grid");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$2] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$2], C104 || CT.C104);
      this[_NgFor_1_9$] = new ng_for.NgFor.new(this[_appEl_1$2], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "items", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        this[_NgFor_1_9$].ngForOf = currVal_0;
        this[_expr_0$7] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_1_9$].ngDoCheck();
      }
      this[_appEl_1$2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$2].destroyNestedViews();
    }
  };
  (tekpack$46template._ViewTekPackPage2.new = function(parentView, parentIndex) {
    this[_appEl_1$2] = null;
    this[_NgFor_1_9$] = null;
    this[_expr_0$7] = null;
    tekpack$46template._ViewTekPackPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage2.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage2);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage2);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage2, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage2, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage2, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage2.__proto__),
    [_appEl_1$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$7]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_2$0 = dart.privateName(tekpack$46template, "_textBinding_2");
  var _appEl_5$4 = dart.privateName(tekpack$46template, "_appEl_5");
  var _NgFor_5_9 = dart.privateName(tekpack$46template, "_NgFor_5_9");
  var _expr_1$4 = dart.privateName(tekpack$46template, "_expr_1");
  var _expr_2$1 = dart.privateName(tekpack$46template, "_expr_2");
  var _expr_3$ = dart.privateName(tekpack$46template, "_expr_3");
  var _el_3 = dart.privateName(tekpack$46template, "_el_3");
  var _el_4$ = dart.privateName(tekpack$46template, "_el_4");
  var _el_6$ = dart.privateName(tekpack$46template, "_el_6");
  var C105;
  tekpack$46template._ViewTekPackPage3 = class _ViewTekPackPage3 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "item");
      this.addShimC(HtmlElementL().as(_el_0));
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h5");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$0].element);
      this[_el_3] = dom_helpers.appendElement(doc, _el_0, "img");
      dom_helpers.setAttribute(this[_el_3], "alt", "");
      this.updateChildClass(HtmlElementL().as(this[_el_3]), "icon");
      this.addShimE(this[_el_3]);
      this[_el_4$] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_4$], "crafting-grid");
      this.addShimC(this[_el_4$]);
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_4$]);
      this[_appEl_5$4] = new view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5$4], C105 || CT.C105);
      this[_NgFor_5_9] = new ng_for.NgFor.new(this[_appEl_5$4], _TemplateRef_5_8);
      this[_el_6$] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_6$], "description");
      this.addShimC(this[_el_6$]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_item = optimizations.unsafeCast(TekPackItemL(), this.locals[$_get]("$implicit"));
      let currVal_2 = local_item.ingredients;
      if (dart.test(check_binding.checkBinding(this[_expr_2$1], currVal_2, "item.ingredients", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        this[_NgFor_5_9].ngForOf = currVal_2;
        this[_expr_2$1] = currVal_2;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      this[_appEl_5$4].detectChangesInNestedViews();
      this[_textBinding_2$0].updateText(interpolate.interpolateString0(local_item.name));
      let currVal_0 = local_item.texture;
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "item.texture", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        dom_helpers.setProperty(this[_el_3], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$7] = currVal_0;
      }
      let currVal_1 = !dart.test(local_item.isNotBlue);
      if (dart.test(check_binding.checkBinding(this[_expr_1$4], currVal_1, "!item.isNotBlue", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        dom_helpers.updateClassBinding(this[_el_4$], "crafting-blue", currVal_1);
        this[_expr_1$4] = currVal_1;
      }
      let currVal_3 = local_item.desc;
      if (dart.test(check_binding.checkBinding(this[_expr_3$], currVal_3, "item.desc", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        dom_helpers.setProperty(this[_el_6$], "innerHTML", app_view_utils.appViewUtils.sanitizer.sanitizeHtml(currVal_3));
        this[_expr_3$] = currVal_3;
      }
    }
    destroyInternal() {
      this[_appEl_5$4].destroyNestedViews();
    }
  };
  (tekpack$46template._ViewTekPackPage3.new = function(parentView, parentIndex) {
    this[_textBinding_2$0] = new text_binding.TextBinding.new();
    this[_appEl_5$4] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0$7] = null;
    this[_expr_1$4] = null;
    this[_expr_2$1] = null;
    this[_expr_3$] = null;
    this[_el_3] = null;
    this[_el_4$] = null;
    this[_el_6$] = null;
    tekpack$46template._ViewTekPackPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage3.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage3);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage3);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage3, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage3, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage3, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage3.__proto__),
    [_textBinding_2$0]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_5$4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_5_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$7]: dart.fieldType(dart.dynamic),
    [_expr_1$4]: dart.fieldType(dart.dynamic),
    [_expr_2$1]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(dart.legacy(html.Element)),
    [_el_4$]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_6$]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _NgIf_1_9$1 = dart.privateName(tekpack$46template, "_NgIf_1_9");
  var C106;
  tekpack$46template._ViewTekPackPage4 = class _ViewTekPackPage4 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "crafting-item");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$2] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$2], C106 || CT.C106);
      this[_NgIf_1_9$1] = new ng_if.NgIf.new(this[_appEl_1$2], _TemplateRef_1_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_craft = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      this[_NgIf_1_9$1].ngIf = local_craft != null;
      this[_appEl_1$2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$2].destroyNestedViews();
    }
  };
  (tekpack$46template._ViewTekPackPage4.new = function(parentView, parentIndex) {
    this[_appEl_1$2] = null;
    this[_NgIf_1_9$1] = null;
    tekpack$46template._ViewTekPackPage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage4.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage4);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage4);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage4, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage4, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage4, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage4.__proto__),
    [_appEl_1$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _el_0$3 = dart.privateName(tekpack$46template, "_el_0");
  tekpack$46template._ViewTekPackPage5 = class _ViewTekPackPage5 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      this[_el_0$3] = doc[$createElement]("img");
      this.addShimE(this[_el_0$3]);
      this.initRootNode(this[_el_0$3]);
    }
    detectChangesInternal() {
      let local_craft = optimizations.unsafeCast(StringL(), optimizations.unsafeCast(_ViewTekPackPage4L(), this.parentView).locals[$_get]("$implicit"));
      let currVal_0 = local_craft;
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "craft", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        dom_helpers.setProperty(this[_el_0$3], "src", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$7] = currVal_0;
      }
    }
  };
  (tekpack$46template._ViewTekPackPage5.new = function(parentView, parentIndex) {
    this[_expr_0$7] = null;
    this[_el_0$3] = null;
    tekpack$46template._ViewTekPackPage5.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage5.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage5);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage5);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage5, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage5.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage5, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage5, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage5.__proto__),
    [_expr_0$7]: dart.fieldType(dart.dynamic),
    [_el_0$3]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _compView_0$6 = dart.privateName(tekpack$46template, "_compView_0");
  var _FluidCard_0_5$0 = dart.privateName(tekpack$46template, "_FluidCard_0_5");
  var _appEl_3$3 = dart.privateName(tekpack$46template, "_appEl_3");
  var _NgFor_3_9 = dart.privateName(tekpack$46template, "_NgFor_3_9");
  var C107;
  tekpack$46template._ViewTekPackPage6 = class _ViewTekPackPage6 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      this[_compView_0$6] = new card$46template.ViewFluidCard0.new(this, 0);
      let _el_0 = this[_compView_0$6].rootElement;
      this.addShimC(_el_0);
      this[_FluidCard_0_5$0] = new card.FluidCard.new(_el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("h2");
      dom_helpers.setAttribute(_el_1, "id", "changelog");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "Changelog");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3$3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$3], C107 || CT.C107);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3$3], _TemplateRef_3_8);
      this[_compView_0$6].createAndProject(this[_FluidCard_0_5$0], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_el_1, this[_appEl_3$3]])]));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_0_5$0].ngOnInit();
      }
      let currVal_0 = _ctx.getKeys(_ctx.changes);
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "getKeys(changes)", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0$7] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_3$3].detectChangesInNestedViews();
      this[_compView_0$6].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3$3].destroyNestedViews();
      this[_compView_0$6].destroyInternalState();
    }
  };
  (tekpack$46template._ViewTekPackPage6.new = function(parentView, parentIndex) {
    this[_compView_0$6] = null;
    this[_FluidCard_0_5$0] = null;
    this[_appEl_3$3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0$7] = null;
    tekpack$46template._ViewTekPackPage6.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage6.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage6);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage6);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage6, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage6.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage6, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage6, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage6.__proto__),
    [_compView_0$6]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_0_5$0]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_appEl_3$3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_3_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$7]: dart.fieldType(dart.dynamic)
  }));
  var _appEl_4$2 = dart.privateName(tekpack$46template, "_appEl_4");
  var _NgFor_4_9 = dart.privateName(tekpack$46template, "_NgFor_4_9");
  var C108;
  tekpack$46template._ViewTekPackPage7 = class _ViewTekPackPage7 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(HtmlElementL().as(_el_0));
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h4");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$0].element);
      let _el_3 = dom_helpers.appendElement(doc, _el_0, "ul");
      this.addShimC(HtmlElementL().as(_el_3));
      let _anchor_4 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_4$2] = new view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$2], C108 || CT.C108);
      this[_NgFor_4_9] = new ng_for.NgFor.new(this[_appEl_4$2], _TemplateRef_4_8);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_version = this.locals[$_get]("$implicit");
      let currVal_0 = _ctx.changes[$_get](local_version);
      if (dart.test(check_binding.checkBinding(this[_expr_0$7], currVal_0, "changes[version]", "package:stevertus/src/pages/tekpack/tekpack.component.html"))) {
        this[_NgFor_4_9].ngForOf = IterableLOfObjectL().as(currVal_0);
        this[_expr_0$7] = currVal_0;
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_4_9].ngDoCheck();
      }
      this[_appEl_4$2].detectChangesInNestedViews();
      this[_textBinding_2$0].updateText(StringL().as(interpolate.interpolate0(local_version)));
    }
    destroyInternal() {
      this[_appEl_4$2].destroyNestedViews();
    }
  };
  (tekpack$46template._ViewTekPackPage7.new = function(parentView, parentIndex) {
    this[_textBinding_2$0] = new text_binding.TextBinding.new();
    this[_appEl_4$2] = null;
    this[_NgFor_4_9] = null;
    this[_expr_0$7] = null;
    tekpack$46template._ViewTekPackPage7.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage7.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage7);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage7);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage7, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage7.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage7, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage7, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage7.__proto__),
    [_textBinding_2$0]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_4$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_4_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$7]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1$6 = dart.privateName(tekpack$46template, "_textBinding_1");
  tekpack$46template._ViewTekPackPage8 = class _ViewTekPackPage8 extends embedded_view.EmbeddedView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("li");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$6].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let local_change = this.locals[$_get]("$implicit");
      this[_textBinding_1$6].updateText(StringL().as(interpolate.interpolate0(local_change)));
    }
  };
  (tekpack$46template._ViewTekPackPage8.new = function(parentView, parentIndex) {
    this[_textBinding_1$6] = new text_binding.TextBinding.new();
    tekpack$46template._ViewTekPackPage8.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = tekpack$46template._ViewTekPackPage8.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPage8);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPage8);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPage8, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPage8.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPage8, L36);
  dart.setFieldSignature(tekpack$46template._ViewTekPackPage8, () => ({
    __proto__: dart.getFields(tekpack$46template._ViewTekPackPage8.__proto__),
    [_textBinding_1$6]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  tekpack$46template._ViewTekPackPageHost0 = class _ViewTekPackPageHost0 extends host_view.HostView$(dart.legacy(tekpack.TekPackPage)) {
    build() {
      this.componentView = new tekpack$46template.ViewTekPackPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new tekpack.TekPackPage.new();
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (tekpack$46template._ViewTekPackPageHost0.new = function() {
    tekpack$46template._ViewTekPackPageHost0.__proto__.new.call(this);
    ;
  }).prototype = tekpack$46template._ViewTekPackPageHost0.prototype;
  dart.addTypeTests(tekpack$46template._ViewTekPackPageHost0);
  dart.addTypeCaches(tekpack$46template._ViewTekPackPageHost0);
  dart.setMethodSignature(tekpack$46template._ViewTekPackPageHost0, () => ({
    __proto__: dart.getMethods(tekpack$46template._ViewTekPackPageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tekpack$46template._ViewTekPackPageHost0, L36);
  var C109;
  tekpack$46template.createTekPackPageFactory = function createTekPackPageFactory() {
    return new (ComponentFactoryOfTekPackPageL()).new("tekpack", C109 || CT.C109);
  };
  tekpack$46template.viewFactory_TekPackPage1 = function viewFactory_TekPackPage1(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage1.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage2 = function viewFactory_TekPackPage2(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage2.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage3 = function viewFactory_TekPackPage3(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage3.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage4 = function viewFactory_TekPackPage4(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage4.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage5 = function viewFactory_TekPackPage5(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage5.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage6 = function viewFactory_TekPackPage6(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage6.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage7 = function viewFactory_TekPackPage7(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage7.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPage8 = function viewFactory_TekPackPage8(parentView, parentIndex) {
    return new tekpack$46template._ViewTekPackPage8.new(parentView, parentIndex);
  };
  tekpack$46template.viewFactory_TekPackPageHost0 = function viewFactory_TekPackPageHost0() {
    return new tekpack$46template._ViewTekPackPageHost0.new();
  };
  tekpack$46template.initReflector = function initReflector$8() {
    if (dart.test(tekpack$46template._visited)) {
      return;
    }
    tekpack$46template._visited = true;
  };
  dart.copyProperties(tekpack$46template, {
    get TekPackPageNgFactory() {
      return tekpack$46template._TekPackPageNgFactory;
    }
  });
  var C110;
  dart.defineLazy(tekpack$46template, {
    /*tekpack$46template.styles$TekPackPage*/get styles$TekPackPage() {
      return [tekpack$46component$46css$46shim.styles];
    },
    /*tekpack$46template._TekPackPageNgFactory*/get _TekPackPageNgFactory() {
      return C110 || CT.C110;
    },
    /*tekpack$46template.styles$TekPackPageHost*/get styles$TekPackPageHost() {
      return C10 || CT.C10;
    },
    /*tekpack$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var name$0 = dart.privateName(tekpack, "TekPackItem.name");
  var desc$ = dart.privateName(tekpack, "TekPackItem.desc");
  var isNotBlue$ = dart.privateName(tekpack, "TekPackItem.isNotBlue");
  var texture$ = dart.privateName(tekpack, "TekPackItem.texture");
  var ingredients$ = dart.privateName(tekpack, "TekPackItem.ingredients");
  tekpack.TekPackItem = class TekPackItem extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get desc() {
      return this[desc$];
    }
    set desc(value) {
      this[desc$] = value;
    }
    get isNotBlue() {
      return this[isNotBlue$];
    }
    set isNotBlue(value) {
      this[isNotBlue$] = value;
    }
    get texture() {
      return this[texture$];
    }
    set texture(value) {
      this[texture$] = value;
    }
    get ingredients() {
      return this[ingredients$];
    }
    set ingredients(value) {
      this[ingredients$] = value;
    }
  };
  (tekpack.TekPackItem.new = function(name, desc, texture, ingredients, opts) {
    let isNotBlue = opts && 'isNotBlue' in opts ? opts.isNotBlue : false;
    this[name$0] = name;
    this[desc$] = desc;
    this[texture$] = texture;
    this[ingredients$] = ingredients;
    this[isNotBlue$] = isNotBlue;
    ;
  }).prototype = tekpack.TekPackItem.prototype;
  (tekpack.TekPackItem.fromJson = function(j) {
    let t9, t9$, t9$0, t9$1;
    this[isNotBlue$] = null;
    this[ingredients$] = null;
    this[texture$] = null;
    this[desc$] = null;
    this[name$0] = null;
    this.name = StringL().as((t9 = j[$_get]("name"), t9 == null ? "" : t9));
    this.desc = StringL().as((t9$0 = (t9$ = j[$_get]("description"), t9$ == null ? null : dart.dsend(t9$, 'replaceAll', ["\n", "<br>"])), t9$0 == null ? "" : t9$0));
    this.texture = StringL().as((t9$1 = j[$_get]("texture"), t9$1 == null ? "" : t9$1));
    if (this.texture[$startsWith]("/")) this.texture = "assets/tekpack" + dart.notNull(this.texture);
    this.isNotBlue = boolL().as(j[$_get]("isNotBlue") != null ? j[$_get]("isNotBlue") : false);
    this.ingredients = JSArrayOfStringL().of([]);
    for (let i = 0; i <= 8; i = i + 1) {
      let item = MapL().as(ListL().as(j[$_get]("crafting"))[$firstWhere](dart.fn(x => dart.equals(dart.dsend(x, '_get', ["slot"]), i), dynamicToboolL()), {orElse: dart.fn(() => null, VoidToNullN())}));
      let texture = null;
      if (item != null && item[$_get]("texture") != null) {
        texture = StringL().as(item[$_get]("texture"));
        if (texture[$startsWith]("/")) texture = "assets/tekpack" + dart.notNull(texture);
      }
      this.ingredients[$add](texture);
    }
  }).prototype = tekpack.TekPackItem.prototype;
  dart.addTypeTests(tekpack.TekPackItem);
  dart.addTypeCaches(tekpack.TekPackItem);
  dart.setLibraryUri(tekpack.TekPackItem, L35);
  dart.setFieldSignature(tekpack.TekPackItem, () => ({
    __proto__: dart.getFields(tekpack.TekPackItem.__proto__),
    name: dart.fieldType(dart.legacy(core.String)),
    desc: dart.fieldType(dart.legacy(core.String)),
    isNotBlue: dart.fieldType(dart.legacy(core.bool)),
    texture: dart.fieldType(dart.legacy(core.String)),
    ingredients: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var _appEl_1$3 = dart.privateName(projects$46template, "_appEl_1");
  var _NgIf_1_9$2 = dart.privateName(projects$46template, "_NgIf_1_9");
  var _appEl_2$2 = dart.privateName(projects$46template, "_appEl_2");
  var _NgIf_2_9$2 = dart.privateName(projects$46template, "_NgIf_2_9");
  var _appEl_3$4 = dart.privateName(projects$46template, "_appEl_3");
  var _NgIf_3_9$3 = dart.privateName(projects$46template, "_NgIf_3_9");
  var C111;
  var C112;
  var C113;
  var C114;
  projects$46template.ViewProjectsPage0 = class ViewProjectsPage0 extends component_view.ComponentView$(dart.legacy(projects.ProjectsPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/projects/projects.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1$3] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$3], C111 || CT.C111);
      this[_NgIf_1_9$2] = new ng_if.NgIf.new(this[_appEl_1$3], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2$2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$2], C112 || CT.C112);
      this[_NgIf_2_9$2] = new ng_if.NgIf.new(this[_appEl_2$2], _TemplateRef_2_8);
      let _anchor_3 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_3$4] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$4], C113 || CT.C113);
      this[_NgIf_3_9$3] = new ng_if.NgIf.new(this[_appEl_3$4], _TemplateRef_3_8);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9$2].ngIf = _ctx.loading;
      this[_NgIf_2_9$2].ngIf = !dart.test(_ctx.loading) && dart.test(_ctx.projects[$isNotEmpty]);
      this[_NgIf_3_9$3].ngIf = !dart.test(_ctx.loading) && dart.test(_ctx.projects[$isEmpty]);
      this[_appEl_1$3].detectChangesInNestedViews();
      this[_appEl_2$2].detectChangesInNestedViews();
      this[_appEl_3$4].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$3].destroyNestedViews();
      this[_appEl_2$2].destroyNestedViews();
      this[_appEl_3$4].destroyNestedViews();
    }
    static _debugClearComponentStyles() {
      projects$46template.ViewProjectsPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = projects$46template.ViewProjectsPage0._componentStyles;
      if (styles == null) {
        projects$46template.ViewProjectsPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(projects$46template.styles$ProjectsPage, projects$46template.ViewProjectsPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C114 || CT.C114);
        }
      }
      this.componentStyles = styles;
    }
  };
  (projects$46template.ViewProjectsPage0.new = function(parentView, parentIndex) {
    this[_appEl_1$3] = null;
    this[_NgIf_1_9$2] = null;
    this[_appEl_2$2] = null;
    this[_NgIf_2_9$2] = null;
    this[_appEl_3$4] = null;
    this[_NgIf_3_9$3] = null;
    projects$46template.ViewProjectsPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("projects"));
  }).prototype = projects$46template.ViewProjectsPage0.prototype;
  dart.addTypeTests(projects$46template.ViewProjectsPage0);
  dart.addTypeCaches(projects$46template.ViewProjectsPage0);
  dart.setMethodSignature(projects$46template.ViewProjectsPage0, () => ({
    __proto__: dart.getMethods(projects$46template.ViewProjectsPage0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(projects$46template.ViewProjectsPage0, L37);
  dart.setFieldSignature(projects$46template.ViewProjectsPage0, () => ({
    __proto__: dart.getFields(projects$46template.ViewProjectsPage0.__proto__),
    [_appEl_1$3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$2]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$2]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3$4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9$3]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(projects$46template.ViewProjectsPage0, {
    /*projects$46template.ViewProjectsPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$7 = dart.privateName(projects$46template, "_compView_0");
  var _FluidSpinner_0_5$ = dart.privateName(projects$46template, "_FluidSpinner_0_5");
  projects$46template._ViewProjectsPage1 = class _ViewProjectsPage1 extends embedded_view.EmbeddedView$(dart.legacy(projects.ProjectsPage)) {
    build() {
      this[_compView_0$7] = new spinner$46template.ViewFluidSpinner0.new(this, 0);
      let _el_0 = this[_compView_0$7].rootElement;
      this.addShimC(_el_0);
      this[_FluidSpinner_0_5$] = new spinner.FluidSpinner.new();
      this[_compView_0$7].create(this[_FluidSpinner_0_5$]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      this[_compView_0$7].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$7].destroyInternalState();
    }
  };
  (projects$46template._ViewProjectsPage1.new = function(parentView, parentIndex) {
    this[_compView_0$7] = null;
    this[_FluidSpinner_0_5$] = null;
    projects$46template._ViewProjectsPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = projects$46template._ViewProjectsPage1.prototype;
  dart.addTypeTests(projects$46template._ViewProjectsPage1);
  dart.addTypeCaches(projects$46template._ViewProjectsPage1);
  dart.setMethodSignature(projects$46template._ViewProjectsPage1, () => ({
    __proto__: dart.getMethods(projects$46template._ViewProjectsPage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(projects$46template._ViewProjectsPage1, L37);
  dart.setFieldSignature(projects$46template._ViewProjectsPage1, () => ({
    __proto__: dart.getFields(projects$46template._ViewProjectsPage1.__proto__),
    [_compView_0$7]: dart.fieldType(dart.legacy(spinner$46template.ViewFluidSpinner0)),
    [_FluidSpinner_0_5$]: dart.fieldType(dart.legacy(spinner.FluidSpinner))
  }));
  var _DocumentGridComponent_0_5$ = dart.privateName(projects$46template, "_DocumentGridComponent_0_5");
  var _expr_0$8 = dart.privateName(projects$46template, "_expr_0");
  projects$46template._ViewProjectsPage2 = class _ViewProjectsPage2 extends embedded_view.EmbeddedView$(dart.legacy(projects.ProjectsPage)) {
    build() {
      this[_compView_0$7] = new grid$46template.ViewDocumentGridComponent0.new(this, 0);
      let _el_0 = this[_compView_0$7].rootElement;
      this.addShimC(_el_0);
      this[_DocumentGridComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DocumentGridComponentL(), dart.wrapType(DocumentGridComponentL()), dart.fn(() => new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex))), VoidToDocumentGridComponentL())) : new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex)));
      this[_compView_0$7].create(this[_DocumentGridComponent_0_5$]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.projects;
      if (dart.test(check_binding.checkBinding(this[_expr_0$8], currVal_0, "projects", "package:stevertus/src/pages/projects/projects.html"))) {
        this[_DocumentGridComponent_0_5$].documents = currVal_0;
        this[_expr_0$8] = currVal_0;
      }
      this[_compView_0$7].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$7].destroyInternalState();
    }
  };
  (projects$46template._ViewProjectsPage2.new = function(parentView, parentIndex) {
    this[_compView_0$7] = null;
    this[_DocumentGridComponent_0_5$] = null;
    this[_expr_0$8] = null;
    projects$46template._ViewProjectsPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = projects$46template._ViewProjectsPage2.prototype;
  dart.addTypeTests(projects$46template._ViewProjectsPage2);
  dart.addTypeCaches(projects$46template._ViewProjectsPage2);
  dart.setMethodSignature(projects$46template._ViewProjectsPage2, () => ({
    __proto__: dart.getMethods(projects$46template._ViewProjectsPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(projects$46template._ViewProjectsPage2, L37);
  dart.setFieldSignature(projects$46template._ViewProjectsPage2, () => ({
    __proto__: dart.getFields(projects$46template._ViewProjectsPage2.__proto__),
    [_compView_0$7]: dart.fieldType(dart.legacy(grid$46template.ViewDocumentGridComponent0)),
    [_DocumentGridComponent_0_5$]: dart.fieldType(dart.legacy(grid.DocumentGridComponent)),
    [_expr_0$8]: dart.fieldType(dart.dynamic)
  }));
  projects$46template._ViewProjectsPage3 = class _ViewProjectsPage3 extends embedded_view.EmbeddedView$(dart.legacy(projects.ProjectsPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "error");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "No projects have been found!");
      this.initRootNode(_el_0);
    }
  };
  (projects$46template._ViewProjectsPage3.new = function(parentView, parentIndex) {
    projects$46template._ViewProjectsPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = projects$46template._ViewProjectsPage3.prototype;
  dart.addTypeTests(projects$46template._ViewProjectsPage3);
  dart.addTypeCaches(projects$46template._ViewProjectsPage3);
  dart.setMethodSignature(projects$46template._ViewProjectsPage3, () => ({
    __proto__: dart.getMethods(projects$46template._ViewProjectsPage3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(projects$46template._ViewProjectsPage3, L37);
  projects$46template._ViewProjectsPageHost0 = class _ViewProjectsPageHost0 extends host_view.HostView$(dart.legacy(projects.ProjectsPage)) {
    build() {
      this.componentView = new projects$46template.ViewProjectsPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ProjectsPageL(), dart.wrapType(ProjectsPageL()), dart.fn(() => new projects.ProjectsPage.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToProjectsPageL())) : new projects.ProjectsPage.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this.component.ngOnInit();
      }
      this.componentView.detectChanges();
    }
  };
  (projects$46template._ViewProjectsPageHost0.new = function() {
    projects$46template._ViewProjectsPageHost0.__proto__.new.call(this);
    ;
  }).prototype = projects$46template._ViewProjectsPageHost0.prototype;
  dart.addTypeTests(projects$46template._ViewProjectsPageHost0);
  dart.addTypeCaches(projects$46template._ViewProjectsPageHost0);
  dart.setMethodSignature(projects$46template._ViewProjectsPageHost0, () => ({
    __proto__: dart.getMethods(projects$46template._ViewProjectsPageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(projects$46template._ViewProjectsPageHost0, L37);
  var C115;
  projects$46template.createProjectsPageFactory = function createProjectsPageFactory() {
    return new (ComponentFactoryOfProjectsPageL()).new("projects", C115 || CT.C115);
  };
  projects$46template.viewFactory_ProjectsPage1 = function viewFactory_ProjectsPage1(parentView, parentIndex) {
    return new projects$46template._ViewProjectsPage1.new(parentView, parentIndex);
  };
  projects$46template.viewFactory_ProjectsPage2 = function viewFactory_ProjectsPage2(parentView, parentIndex) {
    return new projects$46template._ViewProjectsPage2.new(parentView, parentIndex);
  };
  projects$46template.viewFactory_ProjectsPage3 = function viewFactory_ProjectsPage3(parentView, parentIndex) {
    return new projects$46template._ViewProjectsPage3.new(parentView, parentIndex);
  };
  projects$46template.viewFactory_ProjectsPageHost0 = function viewFactory_ProjectsPageHost0() {
    return new projects$46template._ViewProjectsPageHost0.new();
  };
  projects$46template.initReflector = function initReflector$9() {
    if (dart.test(projects$46template._visited)) {
      return;
    }
    projects$46template._visited = true;
  };
  dart.copyProperties(projects$46template, {
    get ProjectsPageNgFactory() {
      return projects$46template._ProjectsPageNgFactory;
    }
  });
  var C116;
  dart.defineLazy(projects$46template, {
    /*projects$46template.styles$ProjectsPage*/get styles$ProjectsPage() {
      return [projects$46css$46shim.styles];
    },
    /*projects$46template._ProjectsPageNgFactory*/get _ProjectsPageNgFactory() {
      return C116 || CT.C116;
    },
    /*projects$46template.styles$ProjectsPageHost*/get styles$ProjectsPageHost() {
      return C10 || CT.C10;
    },
    /*projects$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _compView_1$3 = dart.privateName(articles$46template, "_compView_1");
  var _FluidInput_1_5 = dart.privateName(articles$46template, "_FluidInput_1_5");
  var _DefaultValueAccessor_1_6 = dart.privateName(articles$46template, "_DefaultValueAccessor_1_6");
  var _NgValueAccessor_1_7 = dart.privateName(articles$46template, "_NgValueAccessor_1_7");
  var _NgModel_1_8 = dart.privateName(articles$46template, "_NgModel_1_8");
  var _compView_2$0 = dart.privateName(articles$46template, "_compView_2");
  var _FluidIcon_2_5 = dart.privateName(articles$46template, "_FluidIcon_2_5");
  var _appEl_4$3 = dart.privateName(articles$46template, "_appEl_4");
  var _NgFor_4_9$ = dart.privateName(articles$46template, "_NgFor_4_9");
  var _appEl_6$ = dart.privateName(articles$46template, "_appEl_6");
  var _NgIf_6_9$ = dart.privateName(articles$46template, "_NgIf_6_9");
  var _appEl_7$2 = dart.privateName(articles$46template, "_appEl_7");
  var _NgIf_7_9$ = dart.privateName(articles$46template, "_NgIf_7_9");
  var _appEl_8$1 = dart.privateName(articles$46template, "_appEl_8");
  var _NgIf_8_9$1 = dart.privateName(articles$46template, "_NgIf_8_9");
  var _expr_0$9 = dart.privateName(articles$46template, "_expr_0");
  var _expr_1$5 = dart.privateName(articles$46template, "_expr_1");
  var _pipe_ngtranslate_0$0 = dart.privateName(articles$46template, "_pipe_ngtranslate_0");
  var _el_1$1 = dart.privateName(articles$46template, "_el_1");
  var C117;
  var C118;
  var C119;
  var C120;
  var _handleEvent_0$6 = dart.privateName(articles$46template, "_handleEvent_0");
  var _handleEvent_1$3 = dart.privateName(articles$46template, "_handleEvent_1");
  var C121;
  articles$46template.ViewArticlesPage0 = class ViewArticlesPage0 extends component_view.ComponentView$(dart.legacy(articles.ArticlesPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/articles/articles.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "search");
      this.addShimC(_el_0);
      this[_compView_1$3] = new input$46template.ViewFluidInput0.new(this, 1);
      this[_el_1$1] = InputElementL().as(this[_compView_1$3].rootElement);
      _el_0[$append](this[_el_1$1]);
      dom_helpers.setAttribute(this[_el_1$1], "fluidInput", "");
      dom_helpers.setAttribute(this[_el_1$1], "type", "text");
      this.addShimC(this[_el_1$1]);
      this[_FluidInput_1_5] = new input.FluidInput.new(this[_el_1$1]);
      this[_DefaultValueAccessor_1_6] = new default_value_accessor.DefaultValueAccessor.new(this[_el_1$1]);
      this[_NgValueAccessor_1_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_1_6]]);
      this[_NgModel_1_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_1_7]);
      this[_compView_1$3].createAndProject(this[_FluidInput_1_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      this[_compView_2$0] = new icon$46template.ViewFluidIcon0.new(this, 2);
      let _el_2 = this[_compView_2$0].rootElement;
      _el_0[$append](_el_2);
      dom_helpers.setAttribute(_el_2, "icon", "search");
      this.addShimC(_el_2);
      this[_FluidIcon_2_5] = new icon.FluidIcon.new(_el_2);
      this[_compView_2$0].createAndProject(this[_FluidIcon_2_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "tags");
      this.addShimC(_el_3);
      let _anchor_4 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_4$3] = new view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$3], C117 || CT.C117);
      this[_NgFor_4_9$] = new ng_for.NgFor.new(this[_appEl_4$3], _TemplateRef_4_8);
      let _el_5 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_5, "container");
      this.addShimC(_el_5);
      let _anchor_6 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_6$] = new view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6$], C118 || CT.C118);
      this[_NgIf_6_9$] = new ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_7$2] = new view_container.ViewContainer.new(7, 5, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$2], C119 || CT.C119);
      this[_NgIf_7_9$] = new ng_if.NgIf.new(this[_appEl_7$2], _TemplateRef_7_8);
      let _anchor_8 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_8$1] = new view_container.ViewContainer.new(8, 5, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8$1], C120 || CT.C120);
      this[_NgIf_8_9$1] = new ng_if.NgIf.new(this[_appEl_8$1], _TemplateRef_8_8);
      this[_el_1$1][$addEventListener]("keyup", this.eventHandler0(EventL(), dart.bind(_ctx, 'onSearch')));
      this[_el_1$1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_1_6], 'touchHandler')));
      this[_el_1$1][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$6)));
      let subscription_0 = this[_NgModel_1_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$3)));
      _el_2[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'onSearch')));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$0] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_1_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_1_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_1_5].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.searchInput;
      if (dart.test(check_binding.checkBinding(this[_expr_1$5], currVal_1, "searchInput", "package:stevertus/src/pages/articles/articles.html"))) {
        this[_NgModel_1_8].model = currVal_1;
        changed = true;
        this[_expr_1$5] = currVal_1;
      }
      if (changed) {
        this[_NgModel_1_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_1_8].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        this[_FluidIcon_2_5].icon = "search";
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidIcon_2_5].ngOnInit();
      }
      if (dart.test(firstCheck)) {
        if (_ctx.allTags != null) {
          this[_NgFor_4_9$].ngForOf = _ctx.allTags;
        }
      }
      if (!dart.test(check_binding.debugThrowIfChanged)) {
        this[_NgFor_4_9$].ngDoCheck();
      }
      this[_NgIf_6_9$].ngIf = _ctx.loading;
      this[_NgIf_7_9$].ngIf = !dart.test(_ctx.loading) && dart.test(_ctx.articles[$isNotEmpty]);
      this[_NgIf_8_9$1].ngIf = !dart.test(_ctx.loading) && dart.test(_ctx.articles[$isEmpty]);
      this[_appEl_4$3].detectChangesInNestedViews();
      this[_appEl_6$].detectChangesInNestedViews();
      this[_appEl_7$2].detectChangesInNestedViews();
      this[_appEl_8$1].detectChangesInNestedViews();
      let currVal_0 = this[_pipe_ngtranslate_0$0].transform("search");
      if (dart.test(check_binding.checkBinding(this[_expr_0$9], currVal_0, "'search' | ngtranslate", "package:stevertus/src/pages/articles/articles.html"))) {
        dom_helpers.setProperty(this[_el_1$1], "placeholder", currVal_0);
        this[_expr_0$9] = currVal_0;
      }
      this[_compView_1$3].detectChanges();
      this[_compView_2$0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_4$3].destroyNestedViews();
      this[_appEl_6$].destroyNestedViews();
      this[_appEl_7$2].destroyNestedViews();
      this[_appEl_8$1].destroyNestedViews();
      this[_compView_1$3].destroyInternalState();
      this[_compView_2$0].destroyInternalState();
    }
    [_handleEvent_0$6]($36event) {
      this[_DefaultValueAccessor_1_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$3]($36event) {
      let _ctx = this.ctx;
      _ctx.searchInput = StringL().as($36event);
    }
    static _debugClearComponentStyles() {
      articles$46template.ViewArticlesPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = articles$46template.ViewArticlesPage0._componentStyles;
      if (styles == null) {
        articles$46template.ViewArticlesPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(articles$46template.styles$ArticlesPage, articles$46template.ViewArticlesPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C121 || CT.C121);
        }
      }
      this.componentStyles = styles;
    }
  };
  (articles$46template.ViewArticlesPage0.new = function(parentView, parentIndex) {
    this[_compView_1$3] = null;
    this[_FluidInput_1_5] = null;
    this[_DefaultValueAccessor_1_6] = null;
    this[_NgValueAccessor_1_7] = null;
    this[_NgModel_1_8] = null;
    this[_compView_2$0] = null;
    this[_FluidIcon_2_5] = null;
    this[_appEl_4$3] = null;
    this[_NgFor_4_9$] = null;
    this[_appEl_6$] = null;
    this[_NgIf_6_9$] = null;
    this[_appEl_7$2] = null;
    this[_NgIf_7_9$] = null;
    this[_appEl_8$1] = null;
    this[_NgIf_8_9$1] = null;
    this[_expr_0$9] = null;
    this[_expr_1$5] = null;
    this[_pipe_ngtranslate_0$0] = null;
    this[_el_1$1] = null;
    articles$46template.ViewArticlesPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("articles"));
  }).prototype = articles$46template.ViewArticlesPage0.prototype;
  dart.addTypeTests(articles$46template.ViewArticlesPage0);
  dart.addTypeCaches(articles$46template.ViewArticlesPage0);
  dart.setMethodSignature(articles$46template.ViewArticlesPage0, () => ({
    __proto__: dart.getMethods(articles$46template.ViewArticlesPage0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$6]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$3]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles$46template.ViewArticlesPage0, L38);
  dart.setFieldSignature(articles$46template.ViewArticlesPage0, () => ({
    __proto__: dart.getFields(articles$46template.ViewArticlesPage0.__proto__),
    [_compView_1$3]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_1_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_1_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_1_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_1_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_2$0]: dart.fieldType(dart.legacy(icon$46template.ViewFluidIcon0)),
    [_FluidIcon_2_5]: dart.fieldType(dart.legacy(icon.FluidIcon)),
    [_appEl_4$3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_4_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_appEl_6$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7$2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$9]: dart.fieldType(dart.dynamic),
    [_expr_1$5]: dart.fieldType(dart.dynamic),
    [_pipe_ngtranslate_0$0]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_el_1$1]: dart.fieldType(dart.legacy(html.InputElement))
  }));
  dart.defineLazy(articles$46template.ViewArticlesPage0, {
    /*articles$46template.ViewArticlesPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1$7 = dart.privateName(articles$46template, "_textBinding_1");
  var _compView_0$8 = dart.privateName(articles$46template, "_compView_0");
  var _FluidTag_0_5 = dart.privateName(articles$46template, "_FluidTag_0_5");
  articles$46template._ViewArticlesPage1 = class _ViewArticlesPage1 extends embedded_view.EmbeddedView$(dart.legacy(articles.ArticlesPage)) {
    build() {
      this[_compView_0$8] = new tag$46template.ViewFluidTag0.new(this, 0);
      let _el_0 = this[_compView_0$8].rootElement;
      this.addShimC(_el_0);
      this[_FluidTag_0_5] = new tag.FluidTag.new();
      this[_compView_0$8].createAndProject(this[_FluidTag_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1$7].element])]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$6)));
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_tag = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.tags[$_get](local_tag) != null;
      if (dart.test(check_binding.checkBinding(this[_expr_0$9], currVal_0, "tags[tag] != null", "package:stevertus/src/pages/articles/articles.html"))) {
        this[_FluidTag_0_5].value = currVal_0;
        this[_expr_0$9] = currVal_0;
      }
      this[_textBinding_1$7].updateText(interpolate.interpolateString0(local_tag));
      this[_compView_0$8].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$8].destroyInternalState();
    }
    [_handleEvent_0$6]($36event) {
      let local_tag = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.toggleTag(local_tag);
    }
  };
  (articles$46template._ViewArticlesPage1.new = function(parentView, parentIndex) {
    this[_textBinding_1$7] = new text_binding.TextBinding.new();
    this[_compView_0$8] = null;
    this[_FluidTag_0_5] = null;
    this[_expr_0$9] = null;
    articles$46template._ViewArticlesPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = articles$46template._ViewArticlesPage1.prototype;
  dart.addTypeTests(articles$46template._ViewArticlesPage1);
  dart.addTypeCaches(articles$46template._ViewArticlesPage1);
  dart.setMethodSignature(articles$46template._ViewArticlesPage1, () => ({
    __proto__: dart.getMethods(articles$46template._ViewArticlesPage1.__proto__),
    build: dart.fnType(dart.void, []),
    [_handleEvent_0$6]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(articles$46template._ViewArticlesPage1, L38);
  dart.setFieldSignature(articles$46template._ViewArticlesPage1, () => ({
    __proto__: dart.getFields(articles$46template._ViewArticlesPage1.__proto__),
    [_textBinding_1$7]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0$8]: dart.fieldType(dart.legacy(tag$46template.ViewFluidTag0)),
    [_FluidTag_0_5]: dart.fieldType(dart.legacy(tag.FluidTag)),
    [_expr_0$9]: dart.fieldType(dart.dynamic)
  }));
  var _FluidSpinner_0_5$0 = dart.privateName(articles$46template, "_FluidSpinner_0_5");
  articles$46template._ViewArticlesPage2 = class _ViewArticlesPage2 extends embedded_view.EmbeddedView$(dart.legacy(articles.ArticlesPage)) {
    build() {
      this[_compView_0$8] = new spinner$46template.ViewFluidSpinner0.new(this, 0);
      let _el_0 = this[_compView_0$8].rootElement;
      this.addShimC(_el_0);
      this[_FluidSpinner_0_5$0] = new spinner.FluidSpinner.new();
      this[_compView_0$8].create(this[_FluidSpinner_0_5$0]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      this[_compView_0$8].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$8].destroyInternalState();
    }
  };
  (articles$46template._ViewArticlesPage2.new = function(parentView, parentIndex) {
    this[_compView_0$8] = null;
    this[_FluidSpinner_0_5$0] = null;
    articles$46template._ViewArticlesPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = articles$46template._ViewArticlesPage2.prototype;
  dart.addTypeTests(articles$46template._ViewArticlesPage2);
  dart.addTypeCaches(articles$46template._ViewArticlesPage2);
  dart.setMethodSignature(articles$46template._ViewArticlesPage2, () => ({
    __proto__: dart.getMethods(articles$46template._ViewArticlesPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles$46template._ViewArticlesPage2, L38);
  dart.setFieldSignature(articles$46template._ViewArticlesPage2, () => ({
    __proto__: dart.getFields(articles$46template._ViewArticlesPage2.__proto__),
    [_compView_0$8]: dart.fieldType(dart.legacy(spinner$46template.ViewFluidSpinner0)),
    [_FluidSpinner_0_5$0]: dart.fieldType(dart.legacy(spinner.FluidSpinner))
  }));
  var _DocumentGridComponent_0_5$0 = dart.privateName(articles$46template, "_DocumentGridComponent_0_5");
  articles$46template._ViewArticlesPage3 = class _ViewArticlesPage3 extends embedded_view.EmbeddedView$(dart.legacy(articles.ArticlesPage)) {
    build() {
      this[_compView_0$8] = new grid$46template.ViewDocumentGridComponent0.new(this, 0);
      let _el_0 = this[_compView_0$8].rootElement;
      this.addShimC(_el_0);
      this[_DocumentGridComponent_0_5$0] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DocumentGridComponentL(), dart.wrapType(DocumentGridComponentL()), dart.fn(() => new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex))), VoidToDocumentGridComponentL())) : new grid.DocumentGridComponent.new(RouterL().as(this.parentView.parentView.injectorGet(dart.wrapType(RouterL()), this.parentView.parentIndex)));
      this[_compView_0$8].create(this[_DocumentGridComponent_0_5$0]);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.articles;
      if (dart.test(check_binding.checkBinding(this[_expr_0$9], currVal_0, "articles", "package:stevertus/src/pages/articles/articles.html"))) {
        this[_DocumentGridComponent_0_5$0].documents = currVal_0;
        this[_expr_0$9] = currVal_0;
      }
      this[_compView_0$8].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$8].destroyInternalState();
    }
  };
  (articles$46template._ViewArticlesPage3.new = function(parentView, parentIndex) {
    this[_compView_0$8] = null;
    this[_DocumentGridComponent_0_5$0] = null;
    this[_expr_0$9] = null;
    articles$46template._ViewArticlesPage3.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = articles$46template._ViewArticlesPage3.prototype;
  dart.addTypeTests(articles$46template._ViewArticlesPage3);
  dart.addTypeCaches(articles$46template._ViewArticlesPage3);
  dart.setMethodSignature(articles$46template._ViewArticlesPage3, () => ({
    __proto__: dart.getMethods(articles$46template._ViewArticlesPage3.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles$46template._ViewArticlesPage3, L38);
  dart.setFieldSignature(articles$46template._ViewArticlesPage3, () => ({
    __proto__: dart.getFields(articles$46template._ViewArticlesPage3.__proto__),
    [_compView_0$8]: dart.fieldType(dart.legacy(grid$46template.ViewDocumentGridComponent0)),
    [_DocumentGridComponent_0_5$0]: dart.fieldType(dart.legacy(grid.DocumentGridComponent)),
    [_expr_0$9]: dart.fieldType(dart.dynamic)
  }));
  articles$46template._ViewArticlesPage4 = class _ViewArticlesPage4 extends embedded_view.EmbeddedView$(dart.legacy(articles.ArticlesPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "error");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "No articles have been found!");
      this.initRootNode(_el_0);
    }
  };
  (articles$46template._ViewArticlesPage4.new = function(parentView, parentIndex) {
    articles$46template._ViewArticlesPage4.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = articles$46template._ViewArticlesPage4.prototype;
  dart.addTypeTests(articles$46template._ViewArticlesPage4);
  dart.addTypeCaches(articles$46template._ViewArticlesPage4);
  dart.setMethodSignature(articles$46template._ViewArticlesPage4, () => ({
    __proto__: dart.getMethods(articles$46template._ViewArticlesPage4.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles$46template._ViewArticlesPage4, L38);
  articles$46template._ViewArticlesPageHost0 = class _ViewArticlesPageHost0 extends host_view.HostView$(dart.legacy(articles.ArticlesPage)) {
    build() {
      this.componentView = new articles$46template.ViewArticlesPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ArticlesPageL(), dart.wrapType(ArticlesPageL()), dart.fn(() => new articles.ArticlesPage.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex))), VoidToArticlesPageL())) : new articles.ArticlesPage.new(TranslationServiceL().as(this.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      this.initRootNode(_el_0);
    }
  };
  (articles$46template._ViewArticlesPageHost0.new = function() {
    articles$46template._ViewArticlesPageHost0.__proto__.new.call(this);
    ;
  }).prototype = articles$46template._ViewArticlesPageHost0.prototype;
  dart.addTypeTests(articles$46template._ViewArticlesPageHost0);
  dart.addTypeCaches(articles$46template._ViewArticlesPageHost0);
  dart.setMethodSignature(articles$46template._ViewArticlesPageHost0, () => ({
    __proto__: dart.getMethods(articles$46template._ViewArticlesPageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(articles$46template._ViewArticlesPageHost0, L38);
  var C122;
  articles$46template.createArticlesPageFactory = function createArticlesPageFactory() {
    return new (ComponentFactoryOfArticlesPageL()).new("articles", C122 || CT.C122);
  };
  articles$46template.viewFactory_ArticlesPage1 = function viewFactory_ArticlesPage1(parentView, parentIndex) {
    return new articles$46template._ViewArticlesPage1.new(parentView, parentIndex);
  };
  articles$46template.viewFactory_ArticlesPage2 = function viewFactory_ArticlesPage2(parentView, parentIndex) {
    return new articles$46template._ViewArticlesPage2.new(parentView, parentIndex);
  };
  articles$46template.viewFactory_ArticlesPage3 = function viewFactory_ArticlesPage3(parentView, parentIndex) {
    return new articles$46template._ViewArticlesPage3.new(parentView, parentIndex);
  };
  articles$46template.viewFactory_ArticlesPage4 = function viewFactory_ArticlesPage4(parentView, parentIndex) {
    return new articles$46template._ViewArticlesPage4.new(parentView, parentIndex);
  };
  articles$46template.viewFactory_ArticlesPageHost0 = function viewFactory_ArticlesPageHost0() {
    return new articles$46template._ViewArticlesPageHost0.new();
  };
  articles$46template.initReflector = function initReflector$10() {
    if (dart.test(articles$46template._visited)) {
      return;
    }
    articles$46template._visited = true;
  };
  dart.copyProperties(articles$46template, {
    get ArticlesPageNgFactory() {
      return articles$46template._ArticlesPageNgFactory;
    }
  });
  var C123;
  dart.defineLazy(articles$46template, {
    /*articles$46template.styles$ArticlesPage*/get styles$ArticlesPage() {
      return [articles$46css$46shim.styles];
    },
    /*articles$46template._ArticlesPageNgFactory*/get _ArticlesPageNgFactory() {
      return C123 || CT.C123;
    },
    /*articles$46template.styles$ArticlesPageHost*/get styles$ArticlesPageHost() {
      return C10 || CT.C10;
    },
    /*articles$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(articles$46css$46shim, {
    /*articles$46css$46shim.styles*/get styles() {
      return ["fluid-spinner._ngcontent-%ID%{position:absolute;top:40%;left:50%}.container._ngcontent-%ID%{box-sizing:border-box;padding:32px;width:100%;min-height:100vh}.search._ngcontent-%ID%{padding:32px;display:flex;align-items:center}.search._ngcontent-%ID% input._ngcontent-%ID%{width:30%;height:40px}.search._ngcontent-%ID% fluid-icon._ngcontent-%ID%{color:var(--primary);margin-left:-48px;margin-right:24px}.search._ngcontent-%ID% .tags._ngcontent-%ID%{margin-left:8px;display:flex;align-items:center}.search._ngcontent-%ID% .tags._ngcontent-%ID% fluid-tag._ngcontent-%ID%{cursor:pointer;margin:0 4px}@media screen AND (max-width:960px){.search._ngcontent-%ID%{display:block}.search._ngcontent-%ID% input._ngcontent-%ID%{width:calc(100% - 32px);height:40px}}"];
    }
  }, true);
  var _textBinding_21$ = dart.privateName(landing$46template, "_textBinding_21");
  var _textBinding_29 = dart.privateName(landing$46template, "_textBinding_29");
  var _textBinding_37 = dart.privateName(landing$46template, "_textBinding_37");
  var _textBinding_45 = dart.privateName(landing$46template, "_textBinding_45");
  var _textBinding_56 = dart.privateName(landing$46template, "_textBinding_56");
  var _compView_2$1 = dart.privateName(landing$46template, "_compView_2");
  var _LandingSection_2_5 = dart.privateName(landing$46template, "_LandingSection_2_5");
  var _compView_14$ = dart.privateName(landing$46template, "_compView_14");
  var _LandingCard_14_5 = dart.privateName(landing$46template, "_LandingCard_14_5");
  var _compView_20 = dart.privateName(landing$46template, "_compView_20");
  var _FluidButton_20_5 = dart.privateName(landing$46template, "_FluidButton_20_5");
  var _compView_22$1 = dart.privateName(landing$46template, "_compView_22");
  var _LandingCard_22_5 = dart.privateName(landing$46template, "_LandingCard_22_5");
  var _compView_28 = dart.privateName(landing$46template, "_compView_28");
  var _FluidButton_28_5 = dart.privateName(landing$46template, "_FluidButton_28_5");
  var _compView_30$ = dart.privateName(landing$46template, "_compView_30");
  var _LandingCard_30_5 = dart.privateName(landing$46template, "_LandingCard_30_5");
  var _compView_36$ = dart.privateName(landing$46template, "_compView_36");
  var _FluidButton_36_5$ = dart.privateName(landing$46template, "_FluidButton_36_5");
  var _compView_38 = dart.privateName(landing$46template, "_compView_38");
  var _LandingCard_38_5 = dart.privateName(landing$46template, "_LandingCard_38_5");
  var _compView_44$ = dart.privateName(landing$46template, "_compView_44");
  var _FluidButton_44_5 = dart.privateName(landing$46template, "_FluidButton_44_5");
  var _compView_46 = dart.privateName(landing$46template, "_compView_46");
  var _LandingSection_46_5 = dart.privateName(landing$46template, "_LandingSection_46_5");
  var _compView_55$ = dart.privateName(landing$46template, "_compView_55");
  var _FluidButton_55_5 = dart.privateName(landing$46template, "_FluidButton_55_5");
  var _pipe_ngtranslate_0$1 = dart.privateName(landing$46template, "_pipe_ngtranslate_0");
  var _pipe_ngtranslate_1$ = dart.privateName(landing$46template, "_pipe_ngtranslate_1");
  var _pipe_ngtranslate_2$ = dart.privateName(landing$46template, "_pipe_ngtranslate_2");
  var _pipe_ngtranslate_3$ = dart.privateName(landing$46template, "_pipe_ngtranslate_3");
  var _pipe_ngtranslate_4$ = dart.privateName(landing$46template, "_pipe_ngtranslate_4");
  var _handleEvent_0$7 = dart.privateName(landing$46template, "_handleEvent_0");
  var _handleEvent_1$4 = dart.privateName(landing$46template, "_handleEvent_1");
  var _handleEvent_2$2 = dart.privateName(landing$46template, "_handleEvent_2");
  var _handleEvent_3$2 = dart.privateName(landing$46template, "_handleEvent_3");
  var C124;
  landing$46template.ViewLandingPage0 = class ViewLandingPage0 extends component_view.ComponentView$(dart.legacy(landing.LandingPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/landing/landing.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "img");
      dom_helpers.setAttribute(_el_1, "alt", "");
      this.updateChildClass(HtmlElementL().as(_el_1), "banner");
      dom_helpers.setAttribute(_el_1, "src", "/assets/yt_banner.webp");
      this.addShimE(_el_1);
      this[_compView_2$1] = new section$46template.ViewLandingSection0.new(this, 2);
      let _el_2 = this[_compView_2$1].rootElement;
      _el_0[$append](_el_2);
      this.addShimC(_el_2);
      this[_LandingSection_2_5] = new section.LandingSection.new();
      let _el_3 = doc[$createElement]("h1");
      dom_helpers.setAttribute(_el_3, "ngtranslate", "");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, "landing.section1.title");
      translation_directive.TranslationDirective(_el_3, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_5 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_5, "ngtranslate", "");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "landing.section1.subtitle");
      translation_directive.TranslationDirective(_el_5, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_7 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_7), "spacer");
      this.addShimC(HtmlElementL().as(_el_7));
      let _el_8 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_8, "ngtranslate", "");
      this.addShimE(_el_8);
      let _text_9 = dom_helpers.appendText(_el_8, "landing.section1.text");
      translation_directive.TranslationDirective(_el_8, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_10 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_10), "spacer");
      this.addShimC(HtmlElementL().as(_el_10));
      let _el_11 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_11, "alt", "");
      dom_helpers.setAttribute(_el_11, "right", "");
      dom_helpers.setAttribute(_el_11, "src", "/assets/blob1.svg");
      this.addShimE(_el_11);
      this[_compView_2$1].createAndProject(this[_LandingSection_2_5], JSArrayOfObjectL().of([C10 || CT.C10, JSArrayOfElementL().of([_el_3, _el_5, _el_7, _el_8, _el_10]), JSArrayOfElementL().of([_el_11])]));
      let _el_12 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_12, "cards");
      this.addShimC(_el_12);
      let _el_13 = dom_helpers.appendDiv(doc, _el_12);
      this.updateChildClass(_el_13, "scroll-content");
      this.addShimC(_el_13);
      this[_compView_14$] = new card$46template$.ViewLandingCard0.new(this, 14);
      let _el_14 = this[_compView_14$].rootElement;
      _el_13[$append](_el_14);
      this.addShimC(_el_14);
      this[_LandingCard_14_5] = new card$.LandingCard.new();
      let _el_15 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_15, "alt", "");
      dom_helpers.setAttribute(_el_15, "src", "/assets/logos/objd.png");
      this.addShimE(_el_15);
      let _el_16 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_16, "ngtranslate", "");
      this.addShimE(_el_16);
      let _text_17 = dom_helpers.appendText(_el_16, "landing.card_objd.title");
      translation_directive.TranslationDirective(_el_16, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_18 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_18, "ngtranslate", "");
      this.addShimE(_el_18);
      let _text_19 = dom_helpers.appendText(_el_18, "landing.card_objd.desc");
      translation_directive.TranslationDirective(_el_18, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_20] = new button$46template.ViewFluidButton0.new(this, 20);
      let _el_20 = this[_compView_20].rootElement;
      dom_helpers.setAttribute(_el_20, "fluidBtn", "");
      dom_helpers.setAttribute(_el_20, "highlight", "");
      this.addShimC(_el_20);
      this[_FluidButton_20_5] = new button.FluidButton.new(_el_20);
      this[_compView_20].createAndProject(this[_FluidButton_20_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_21$].element])]));
      this[_compView_14$].createAndProject(this[_LandingCard_14_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_15, _el_16, _el_18, _el_20])]));
      this[_compView_22$1] = new card$46template$.ViewLandingCard0.new(this, 22);
      let _el_22 = this[_compView_22$1].rootElement;
      _el_13[$append](_el_22);
      this.addShimC(_el_22);
      this[_LandingCard_22_5] = new card$.LandingCard.new();
      let _el_23 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_23, "alt", "");
      dom_helpers.setAttribute(_el_23, "src", "/assets/logos/mcscript.png");
      this.addShimE(_el_23);
      let _el_24 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_24, "ngtranslate", "");
      this.addShimE(_el_24);
      let _text_25 = dom_helpers.appendText(_el_24, "landing.card_mcscript.title");
      translation_directive.TranslationDirective(_el_24, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_26 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_26, "ngtranslate", "");
      this.addShimE(_el_26);
      let _text_27 = dom_helpers.appendText(_el_26, "landing.card_mcscript.desc");
      translation_directive.TranslationDirective(_el_26, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_28] = new button$46template.ViewFluidButton0.new(this, 28);
      let _el_28 = this[_compView_28].rootElement;
      dom_helpers.setAttribute(_el_28, "fluidBtn", "");
      this.addShimC(_el_28);
      this[_FluidButton_28_5] = new button.FluidButton.new(_el_28);
      this[_compView_28].createAndProject(this[_FluidButton_28_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_29].element])]));
      this[_compView_22$1].createAndProject(this[_LandingCard_22_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_23, _el_24, _el_26, _el_28])]));
      this[_compView_30$] = new card$46template$.ViewLandingCard0.new(this, 30);
      let _el_30 = this[_compView_30$].rootElement;
      _el_13[$append](_el_30);
      this.addShimC(_el_30);
      this[_LandingCard_30_5] = new card$.LandingCard.new();
      let _el_31 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_31, "alt", "");
      dom_helpers.setAttribute(_el_31, "src", "/assets/logos/dmanager.png");
      this.addShimE(_el_31);
      let _el_32 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_32, "ngtranslate", "");
      this.addShimE(_el_32);
      let _text_33 = dom_helpers.appendText(_el_32, "landing.card_dmanager.title");
      translation_directive.TranslationDirective(_el_32, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_34 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_34, "ngtranslate", "");
      this.addShimE(_el_34);
      let _text_35 = dom_helpers.appendText(_el_34, "landing.card_dmanager.desc");
      translation_directive.TranslationDirective(_el_34, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_36$] = new button$46template.ViewFluidButton0.new(this, 36);
      let _el_36 = this[_compView_36$].rootElement;
      dom_helpers.setAttribute(_el_36, "fluidBtn", "");
      this.addShimC(_el_36);
      this[_FluidButton_36_5$] = new button.FluidButton.new(_el_36);
      this[_compView_36$].createAndProject(this[_FluidButton_36_5$], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_37].element])]));
      this[_compView_30$].createAndProject(this[_LandingCard_30_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_31, _el_32, _el_34, _el_36])]));
      this[_compView_38] = new card$46template$.ViewLandingCard0.new(this, 38);
      let _el_38 = this[_compView_38].rootElement;
      _el_13[$append](_el_38);
      this.addShimC(_el_38);
      this[_LandingCard_38_5] = new card$.LandingCard.new();
      let _el_39 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_39, "alt", "");
      dom_helpers.setAttribute(_el_39, "src", "/assets/logos/worldedit.png");
      this.addShimE(_el_39);
      let _el_40 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_40, "ngtranslate", "");
      this.addShimE(_el_40);
      let _text_41 = dom_helpers.appendText(_el_40, "landing.card_worldedit.title");
      translation_directive.TranslationDirective(_el_40, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_42 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_42, "ngtranslate", "");
      this.addShimE(_el_42);
      let _text_43 = dom_helpers.appendText(_el_42, "landing.card_worldedit.desc");
      translation_directive.TranslationDirective(_el_42, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_44$] = new button$46template.ViewFluidButton0.new(this, 44);
      let _el_44 = this[_compView_44$].rootElement;
      dom_helpers.setAttribute(_el_44, "fluidBtn", "");
      this.addShimC(_el_44);
      this[_FluidButton_44_5] = new button.FluidButton.new(_el_44);
      this[_compView_44$].createAndProject(this[_FluidButton_44_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_45].element])]));
      this[_compView_38].createAndProject(this[_LandingCard_38_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_39, _el_40, _el_42, _el_44])]));
      this[_compView_46] = new section$46template.ViewLandingSection0.new(this, 46);
      let _el_46 = this[_compView_46].rootElement;
      _el_0[$append](_el_46);
      this.addShimC(_el_46);
      this[_LandingSection_46_5] = new section.LandingSection.new();
      let _el_47 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_47, "alt", "");
      dom_helpers.setAttribute(_el_47, "left", "");
      dom_helpers.setAttribute(_el_47, "src", "/assets/blob2.svg");
      this.addShimE(_el_47);
      let _el_48 = doc[$createElement]("h1");
      dom_helpers.setAttribute(_el_48, "ngtranslate", "");
      this.addShimE(_el_48);
      let _text_49 = dom_helpers.appendText(_el_48, "landing.section2.title");
      translation_directive.TranslationDirective(_el_48, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_50 = doc[$createElement]("h3");
      dom_helpers.setAttribute(_el_50, "ngtranslate", "");
      this.addShimE(_el_50);
      let _text_51 = dom_helpers.appendText(_el_50, "landing.section2.subtitle");
      translation_directive.TranslationDirective(_el_50, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      let _el_52 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_52), "spacer");
      this.addShimC(HtmlElementL().as(_el_52));
      let _el_53 = doc[$createElement]("p");
      dom_helpers.setAttribute(_el_53, "ngtranslate", "");
      this.addShimE(_el_53);
      let _text_54 = dom_helpers.appendText(_el_53, "landing.section2.text");
      translation_directive.TranslationDirective(_el_53, TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)), "");
      this[_compView_55$] = new button$46template.ViewFluidButton0.new(this, 55);
      let _el_55 = this[_compView_55$].rootElement;
      dom_helpers.setAttribute(_el_55, "fluidBtn", "");
      this.addShimC(_el_55);
      this[_FluidButton_55_5] = new button.FluidButton.new(_el_55);
      this[_compView_55$].createAndProject(this[_FluidButton_55_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_56].element])]));
      let _el_57 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_57), "spacer");
      this.addShimC(HtmlElementL().as(_el_57));
      this[_compView_46].createAndProject(this[_LandingSection_46_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_47]), JSArrayOfElementL().of([_el_48, _el_50, _el_52, _el_53, _el_55, _el_57]), C10 || CT.C10]));
      _el_14[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$7)));
      _el_22[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_1$4)));
      _el_30[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$2)));
      _el_38[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_3$2)));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_0$1] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_1$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_2$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_3$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
      errors.debugInjectorEnter(dart.wrapType(TranslationPipeL()));
      this[_pipe_ngtranslate_4$] = new translation_pipe.TranslationPipe.new(TranslationServiceL().as(this.parentView.injectorGet(dart.wrapType(TranslationServiceL()), this.parentIndex)));
      errors.debugInjectorLeave(dart.wrapType(TranslationPipeL()));
    }
    detectChangesInternal() {
      let firstCheck = this.firstCheck;
      if (dart.test(firstCheck)) {
        this[_FluidButton_20_5].highlight = true;
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_20_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_28_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_36_5$].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_44_5].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_55_5].ngOnInit();
      }
      this[_textBinding_21$].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_0$1].transform("landing.card_objd.button"))));
      this[_textBinding_29].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_1$].transform("view"))));
      this[_textBinding_37].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_2$].transform("download"))));
      this[_textBinding_45].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_3$].transform("view"))));
      this[_textBinding_56].updateText(StringL().as(interpolate.interpolate0(this[_pipe_ngtranslate_4$].transform("landing.section2.button"))));
      this[_compView_2$1].detectChanges();
      this[_compView_14$].detectChanges();
      this[_compView_20].detectChanges();
      this[_compView_22$1].detectChanges();
      this[_compView_28].detectChanges();
      this[_compView_30$].detectChanges();
      this[_compView_36$].detectChanges();
      this[_compView_38].detectChanges();
      this[_compView_44$].detectChanges();
      this[_compView_46].detectChanges();
      this[_compView_55$].detectChanges();
    }
    destroyInternal() {
      this[_compView_2$1].destroyInternalState();
      this[_compView_14$].destroyInternalState();
      this[_compView_20].destroyInternalState();
      this[_compView_22$1].destroyInternalState();
      this[_compView_28].destroyInternalState();
      this[_compView_30$].destroyInternalState();
      this[_compView_36$].destroyInternalState();
      this[_compView_38].destroyInternalState();
      this[_compView_44$].destroyInternalState();
      this[_compView_46].destroyInternalState();
      this[_compView_55$].destroyInternalState();
    }
    [_handleEvent_0$7]($36event) {
      let _ctx = this.ctx;
      _ctx.navigateTo("https://objd.stevertus.com");
    }
    [_handleEvent_1$4]($36event) {
      let _ctx = this.ctx;
      _ctx.navigateTo("https://stevertus.com/mscript");
    }
    [_handleEvent_2$2]($36event) {
      let _ctx = this.ctx;
      _ctx.navigateTo("https://dmanager.stevertus.com");
    }
    [_handleEvent_3$2]($36event) {
      let _ctx = this.ctx;
      _ctx.navigateTo("https://stevertus.com/worldedit/package");
    }
    static _debugClearComponentStyles() {
      landing$46template.ViewLandingPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = landing$46template.ViewLandingPage0._componentStyles;
      if (styles == null) {
        landing$46template.ViewLandingPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(landing$46template.styles$LandingPage, landing$46template.ViewLandingPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C124 || CT.C124);
        }
      }
      this.componentStyles = styles;
    }
  };
  (landing$46template.ViewLandingPage0.new = function(parentView, parentIndex) {
    this[_textBinding_21$] = new text_binding.TextBinding.new();
    this[_textBinding_29] = new text_binding.TextBinding.new();
    this[_textBinding_37] = new text_binding.TextBinding.new();
    this[_textBinding_45] = new text_binding.TextBinding.new();
    this[_textBinding_56] = new text_binding.TextBinding.new();
    this[_compView_2$1] = null;
    this[_LandingSection_2_5] = null;
    this[_compView_14$] = null;
    this[_LandingCard_14_5] = null;
    this[_compView_20] = null;
    this[_FluidButton_20_5] = null;
    this[_compView_22$1] = null;
    this[_LandingCard_22_5] = null;
    this[_compView_28] = null;
    this[_FluidButton_28_5] = null;
    this[_compView_30$] = null;
    this[_LandingCard_30_5] = null;
    this[_compView_36$] = null;
    this[_FluidButton_36_5$] = null;
    this[_compView_38] = null;
    this[_LandingCard_38_5] = null;
    this[_compView_44$] = null;
    this[_FluidButton_44_5] = null;
    this[_compView_46] = null;
    this[_LandingSection_46_5] = null;
    this[_compView_55$] = null;
    this[_FluidButton_55_5] = null;
    this[_pipe_ngtranslate_0$1] = null;
    this[_pipe_ngtranslate_1$] = null;
    this[_pipe_ngtranslate_2$] = null;
    this[_pipe_ngtranslate_3$] = null;
    this[_pipe_ngtranslate_4$] = null;
    landing$46template.ViewLandingPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("landing"));
  }).prototype = landing$46template.ViewLandingPage0.prototype;
  dart.addTypeTests(landing$46template.ViewLandingPage0);
  dart.addTypeCaches(landing$46template.ViewLandingPage0);
  dart.setMethodSignature(landing$46template.ViewLandingPage0, () => ({
    __proto__: dart.getMethods(landing$46template.ViewLandingPage0.__proto__),
    [_handleEvent_0$7]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$4]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$2]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(landing$46template.ViewLandingPage0, L39);
  dart.setFieldSignature(landing$46template.ViewLandingPage0, () => ({
    __proto__: dart.getFields(landing$46template.ViewLandingPage0.__proto__),
    [_textBinding_21$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_29]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_37]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_45]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_56]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_2$1]: dart.fieldType(dart.legacy(section$46template.ViewLandingSection0)),
    [_LandingSection_2_5]: dart.fieldType(dart.legacy(section.LandingSection)),
    [_compView_14$]: dart.fieldType(dart.legacy(card$46template$.ViewLandingCard0)),
    [_LandingCard_14_5]: dart.fieldType(dart.legacy(card$.LandingCard)),
    [_compView_20]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_20_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_22$1]: dart.fieldType(dart.legacy(card$46template$.ViewLandingCard0)),
    [_LandingCard_22_5]: dart.fieldType(dart.legacy(card$.LandingCard)),
    [_compView_28]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_28_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_30$]: dart.fieldType(dart.legacy(card$46template$.ViewLandingCard0)),
    [_LandingCard_30_5]: dart.fieldType(dart.legacy(card$.LandingCard)),
    [_compView_36$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_36_5$]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_38]: dart.fieldType(dart.legacy(card$46template$.ViewLandingCard0)),
    [_LandingCard_38_5]: dart.fieldType(dart.legacy(card$.LandingCard)),
    [_compView_44$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_44_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_compView_46]: dart.fieldType(dart.legacy(section$46template.ViewLandingSection0)),
    [_LandingSection_46_5]: dart.fieldType(dart.legacy(section.LandingSection)),
    [_compView_55$]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_55_5]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_pipe_ngtranslate_0$1]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_1$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_2$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_3$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe)),
    [_pipe_ngtranslate_4$]: dart.fieldType(dart.legacy(translation_pipe.TranslationPipe))
  }));
  dart.defineLazy(landing$46template.ViewLandingPage0, {
    /*landing$46template.ViewLandingPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  landing$46template._ViewLandingPageHost0 = class _ViewLandingPageHost0 extends host_view.HostView$(dart.legacy(landing.LandingPage)) {
    build() {
      this.componentView = new landing$46template.ViewLandingPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new landing.LandingPage.new();
      this.initRootNode(_el_0);
    }
  };
  (landing$46template._ViewLandingPageHost0.new = function() {
    landing$46template._ViewLandingPageHost0.__proto__.new.call(this);
    ;
  }).prototype = landing$46template._ViewLandingPageHost0.prototype;
  dart.addTypeTests(landing$46template._ViewLandingPageHost0);
  dart.addTypeCaches(landing$46template._ViewLandingPageHost0);
  dart.setMethodSignature(landing$46template._ViewLandingPageHost0, () => ({
    __proto__: dart.getMethods(landing$46template._ViewLandingPageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(landing$46template._ViewLandingPageHost0, L39);
  var C125;
  landing$46template.createLandingPageFactory = function createLandingPageFactory() {
    return new (ComponentFactoryOfLandingPageL()).new("landing", C125 || CT.C125);
  };
  landing$46template.viewFactory_LandingPageHost0 = function viewFactory_LandingPageHost0() {
    return new landing$46template._ViewLandingPageHost0.new();
  };
  landing$46template.initReflector = function initReflector$11() {
    if (dart.test(landing$46template._visited)) {
      return;
    }
    landing$46template._visited = true;
  };
  dart.copyProperties(landing$46template, {
    get LandingPageNgFactory() {
      return landing$46template._LandingPageNgFactory;
    }
  });
  var C126;
  dart.defineLazy(landing$46template, {
    /*landing$46template.styles$LandingPage*/get styles$LandingPage() {
      return [landing$46css$46shim.styles];
    },
    /*landing$46template._LandingPageNgFactory*/get _LandingPageNgFactory() {
      return C126 || CT.C126;
    },
    /*landing$46template.styles$LandingPageHost*/get styles$LandingPageHost() {
      return C10 || CT.C10;
    },
    /*landing$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var C127;
  card$46template$.ViewLandingCard0 = class ViewLandingCard0 extends component_view.ComponentView$(dart.legacy(card$.LandingCard)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/landing/card/card.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      this.project(_el_0, 0);
    }
    static _debugClearComponentStyles() {
      card$46template$.ViewLandingCard0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = card$46template$.ViewLandingCard0._componentStyles;
      if (styles == null) {
        card$46template$.ViewLandingCard0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(card$46template$.styles$LandingCard, card$46template$.ViewLandingCard0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C127 || CT.C127);
        }
      }
      this.componentStyles = styles;
    }
  };
  (card$46template$.ViewLandingCard0.new = function(parentView, parentIndex) {
    card$46template$.ViewLandingCard0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("landing-card"));
  }).prototype = card$46template$.ViewLandingCard0.prototype;
  dart.addTypeTests(card$46template$.ViewLandingCard0);
  dart.addTypeCaches(card$46template$.ViewLandingCard0);
  dart.setMethodSignature(card$46template$.ViewLandingCard0, () => ({
    __proto__: dart.getMethods(card$46template$.ViewLandingCard0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(card$46template$.ViewLandingCard0, L40);
  dart.defineLazy(card$46template$.ViewLandingCard0, {
    /*card$46template$.ViewLandingCard0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  card$46template$._ViewLandingCardHost0 = class _ViewLandingCardHost0 extends host_view.HostView$(dart.legacy(card$.LandingCard)) {
    build() {
      this.componentView = new card$46template$.ViewLandingCard0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new card$.LandingCard.new();
      this.initRootNode(_el_0);
    }
  };
  (card$46template$._ViewLandingCardHost0.new = function() {
    card$46template$._ViewLandingCardHost0.__proto__.new.call(this);
    ;
  }).prototype = card$46template$._ViewLandingCardHost0.prototype;
  dart.addTypeTests(card$46template$._ViewLandingCardHost0);
  dart.addTypeCaches(card$46template$._ViewLandingCardHost0);
  dart.setMethodSignature(card$46template$._ViewLandingCardHost0, () => ({
    __proto__: dart.getMethods(card$46template$._ViewLandingCardHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(card$46template$._ViewLandingCardHost0, L40);
  var C128;
  card$46template$.createLandingCardFactory = function createLandingCardFactory() {
    return new (ComponentFactoryOfLandingCardL()).new("landing-card", C128 || CT.C128);
  };
  card$46template$.viewFactory_LandingCardHost0 = function viewFactory_LandingCardHost0() {
    return new card$46template$._ViewLandingCardHost0.new();
  };
  card$46template$.initReflector = function initReflector$12() {
    if (dart.test(card$46template$._visited)) {
      return;
    }
    card$46template$._visited = true;
  };
  dart.copyProperties(card$46template$, {
    get LandingCardNgFactory() {
      return card$46template$._LandingCardNgFactory;
    }
  });
  var C129;
  dart.defineLazy(card$46template$, {
    /*card$46template$.styles$LandingCard*/get styles$LandingCard() {
      return [card$46css$46shim.styles];
    },
    /*card$46template$._LandingCardNgFactory*/get _LandingCardNgFactory() {
      return C129 || CT.C129;
    },
    /*card$46template$.styles$LandingCardHost*/get styles$LandingCardHost() {
      return C10 || CT.C10;
    },
    /*card$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(card$46css$46shim, {
    /*card$46css$46shim.styles*/get styles() {
      return ["div._ngcontent-%ID%{background:white;box-sizing:border-box;min-height:500px;display:flex;flex-direction:column;justify-content:flex-end;align-content:center;width:20vw;margin:16px;padding:15%;cursor:pointer}div:hover._ngcontent-%ID%{box-shadow:0px 5px 10px rgba(0,0,0,0.05)}._nghost-%ID% {text-align:center;text-decoration:none;color:black}._nghost-%ID%  img{margin-bottom:2%;height:140px;align-self:center}._nghost-%ID%  button{width:200px;align-self:center}._nghost-%ID%  p{margin-bottom:20%;font-size:18px;color:#767680;text-decoration:none}@media screen AND (max-width:960px){div._ngcontent-%ID%{width:300px}}"];
    }
  }, true);
  var C130;
  section$46template.ViewLandingSection0 = class ViewLandingSection0 extends component_view.ComponentView$(dart.legacy(section.LandingSection)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/landing/section/section.dart" : null;
    }
    build() {
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      this.project(_el_1, 1);
      this.project(_el_0, 2);
    }
    static _debugClearComponentStyles() {
      section$46template.ViewLandingSection0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = section$46template.ViewLandingSection0._componentStyles;
      if (styles == null) {
        section$46template.ViewLandingSection0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(section$46template.styles$LandingSection, section$46template.ViewLandingSection0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C130 || CT.C130);
        }
      }
      this.componentStyles = styles;
    }
  };
  (section$46template.ViewLandingSection0.new = function(parentView, parentIndex) {
    section$46template.ViewLandingSection0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("landing-section"));
  }).prototype = section$46template.ViewLandingSection0.prototype;
  dart.addTypeTests(section$46template.ViewLandingSection0);
  dart.addTypeCaches(section$46template.ViewLandingSection0);
  dart.setMethodSignature(section$46template.ViewLandingSection0, () => ({
    __proto__: dart.getMethods(section$46template.ViewLandingSection0.__proto__),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(section$46template.ViewLandingSection0, L41);
  dart.defineLazy(section$46template.ViewLandingSection0, {
    /*section$46template.ViewLandingSection0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  section$46template._ViewLandingSectionHost0 = class _ViewLandingSectionHost0 extends host_view.HostView$(dart.legacy(section.LandingSection)) {
    build() {
      this.componentView = new section$46template.ViewLandingSection0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new section.LandingSection.new();
      this.initRootNode(_el_0);
    }
  };
  (section$46template._ViewLandingSectionHost0.new = function() {
    section$46template._ViewLandingSectionHost0.__proto__.new.call(this);
    ;
  }).prototype = section$46template._ViewLandingSectionHost0.prototype;
  dart.addTypeTests(section$46template._ViewLandingSectionHost0);
  dart.addTypeCaches(section$46template._ViewLandingSectionHost0);
  dart.setMethodSignature(section$46template._ViewLandingSectionHost0, () => ({
    __proto__: dart.getMethods(section$46template._ViewLandingSectionHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(section$46template._ViewLandingSectionHost0, L41);
  var C131;
  section$46template.createLandingSectionFactory = function createLandingSectionFactory() {
    return new (ComponentFactoryOfLandingSectionL()).new("landing-section", C131 || CT.C131);
  };
  section$46template.viewFactory_LandingSectionHost0 = function viewFactory_LandingSectionHost0() {
    return new section$46template._ViewLandingSectionHost0.new();
  };
  section$46template.initReflector = function initReflector$13() {
    if (dart.test(section$46template._visited)) {
      return;
    }
    section$46template._visited = true;
  };
  dart.copyProperties(section$46template, {
    get LandingSectionNgFactory() {
      return section$46template._LandingSectionNgFactory;
    }
  });
  var C132;
  dart.defineLazy(section$46template, {
    /*section$46template.styles$LandingSection*/get styles$LandingSection() {
      return [section$46css$46shim.styles];
    },
    /*section$46template._LandingSectionNgFactory*/get _LandingSectionNgFactory() {
      return C132 || CT.C132;
    },
    /*section$46template.styles$LandingSectionHost*/get styles$LandingSectionHost() {
      return C10 || CT.C10;
    },
    /*section$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(section$46css$46shim, {
    /*section$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{display:flex;justify-content:space-evenly;margin:32px 0}.content._ngcontent-%ID%{display:flex;flex-direction:column;align-items:center}._nghost-%ID%  h1{margin:12px 0;font-size:54px;color:var(--primary);font-weight:900}._nghost-%ID%  img{width:20%}._nghost-%ID%  h3{margin:6px 0;font-size:26px;color:#494953;font-weight:800}._nghost-%ID%  p{margin:24px 0;font-size:18px;color:#767680;width:80%}._nghost-%ID%  .spacer{flex-grow:1}@media screen AND (max-width:960px){.container._ngcontent-%ID%{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:16px 0}._nghost-%ID%  img{width:60%;margin:16px}.container._ngcontent-%ID%{margin:8px 4px}.banner._ngcontent-%ID%{margin:0;box-sizing:border-box;width:100%;border-radius:4px}}"];
    }
  }, true);
  dart.defineLazy(landing$46css$46shim, {
    /*landing$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{margin:20px 32px}.banner._ngcontent-%ID%{margin:0 10%;width:80%;border-radius:15px}.cards._ngcontent-%ID%{width:100%;overflow:auto}.cards._ngcontent-%ID% .scroll-content._ngcontent-%ID%{display:flex;justify-content:space-between;min-width:750px}@media screen AND (max-width:960px){.container._ngcontent-%ID%{margin:8px 4px}.banner._ngcontent-%ID%{margin:0;box-sizing:border-box;width:100%;border-radius:4px}}"];
    }
  }, true);
  var _compView_1$4 = dart.privateName(contact$46template, "_compView_1");
  var _FluidCard_1_5 = dart.privateName(contact$46template, "_FluidCard_1_5");
  var _appEl_20$ = dart.privateName(contact$46template, "_appEl_20");
  var _NgIf_20_9$ = dart.privateName(contact$46template, "_NgIf_20_9");
  var _appEl_21 = dart.privateName(contact$46template, "_appEl_21");
  var _NgIf_21_9 = dart.privateName(contact$46template, "_NgIf_21_9");
  var _compView_22$2 = dart.privateName(contact$46template, "_compView_22");
  var _FluidInput_22_5$0 = dart.privateName(contact$46template, "_FluidInput_22_5");
  var _DefaultValueAccessor_22_6$0 = dart.privateName(contact$46template, "_DefaultValueAccessor_22_6");
  var _NgValueAccessor_22_7$0 = dart.privateName(contact$46template, "_NgValueAccessor_22_7");
  var _NgModel_22_8$0 = dart.privateName(contact$46template, "_NgModel_22_8");
  var _compView_26 = dart.privateName(contact$46template, "_compView_26");
  var _FluidInput_26_5 = dart.privateName(contact$46template, "_FluidInput_26_5");
  var _DefaultValueAccessor_26_6 = dart.privateName(contact$46template, "_DefaultValueAccessor_26_6");
  var _NgValueAccessor_26_7 = dart.privateName(contact$46template, "_NgValueAccessor_26_7");
  var _NgModel_26_8 = dart.privateName(contact$46template, "_NgModel_26_8");
  var _compView_30$0 = dart.privateName(contact$46template, "_compView_30");
  var _FluidMultiInput_30_5 = dart.privateName(contact$46template, "_FluidMultiInput_30_5");
  var _DefaultValueAccessor_30_6$ = dart.privateName(contact$46template, "_DefaultValueAccessor_30_6");
  var _NgValueAccessor_30_7 = dart.privateName(contact$46template, "_NgValueAccessor_30_7");
  var _NgModel_30_8 = dart.privateName(contact$46template, "_NgModel_30_8");
  var _compView_32$0 = dart.privateName(contact$46template, "_compView_32");
  var _FluidButton_32_5$ = dart.privateName(contact$46template, "_FluidButton_32_5");
  var _expr_0$10 = dart.privateName(contact$46template, "_expr_0");
  var _expr_1$6 = dart.privateName(contact$46template, "_expr_1");
  var _expr_2$2 = dart.privateName(contact$46template, "_expr_2");
  var C133;
  var C134;
  var _handleEvent_0$8 = dart.privateName(contact$46template, "_handleEvent_0");
  var _handleEvent_1$5 = dart.privateName(contact$46template, "_handleEvent_1");
  var _handleEvent_2$3 = dart.privateName(contact$46template, "_handleEvent_2");
  var _handleEvent_3$3 = dart.privateName(contact$46template, "_handleEvent_3");
  var _handleEvent_4$1 = dart.privateName(contact$46template, "_handleEvent_4");
  var _handleEvent_5$1 = dart.privateName(contact$46template, "_handleEvent_5");
  var C135;
  contact$46template.ViewContactPage0 = class ViewContactPage0 extends component_view.ComponentView$(dart.legacy(contact.ContactPage)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:stevertus/lib/src/pages/contact/contact.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let parentRenderNode = this.initViewRoot();
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "container");
      this.addShimC(_el_0);
      this[_compView_1$4] = new card$46template.ViewFluidCard0.new(this, 1);
      let _el_1 = this[_compView_1$4].rootElement;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_FluidCard_1_5] = new card.FluidCard.new(_el_1);
      let _el_2 = doc[$createElement]("img");
      dom_helpers.setAttribute(_el_2, "alt", "");
      dom_helpers.setAttribute(_el_2, "src", "/assets/yt_banner.png");
      this.addShimE(_el_2);
      let _el_3 = doc[$createElement]("h2");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, "Hello!");
      let _el_5 = doc[$createElement]("p");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "I am Stevertus and I make stuff with Minecraft! You have a problem, question or want to help with my obsession?");
      let _el_7 = doc[$createElement]("b");
      this.addShimE(_el_7);
      let _text_8 = dom_helpers.appendText(_el_7, "Great!");
      let _text_9 = dom_helpers.createText(" ");
      let _el_10 = doc[$createElement]("br");
      this.addShimE(_el_10);
      let _el_11 = doc[$createElement]("p");
      this.addShimE(_el_11);
      let _text_12 = dom_helpers.appendText(_el_11, "Just write me an ");
      let _el_13 = dom_helpers.appendElement(doc, _el_11, "a");
      dom_helpers.setAttribute(_el_13, "href", "mailto://contact@stevertus.com");
      this.addShimC(HtmlElementL().as(_el_13));
      let _text_14 = dom_helpers.appendText(_el_13, "Email");
      let _text_15 = dom_helpers.appendText(_el_11, ", visit my ");
      let _el_16 = dom_helpers.appendElement(doc, _el_11, "a");
      dom_helpers.setAttribute(_el_16, "href", "https://discord.gg/McYXVC8");
      this.addShimC(HtmlElementL().as(_el_16));
      let _text_17 = dom_helpers.appendText(_el_16, "Discord");
      let _text_18 = dom_helpers.appendText(_el_11, " or write me a kind message below, I'll try to answer asap.");
      let _el_19 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_19), "inputs");
      this.addShimC(HtmlElementL().as(_el_19));
      let _anchor_20 = dom_helpers.appendAnchor(_el_19);
      this[_appEl_20$] = new view_container.ViewContainer.new(20, 19, this, _anchor_20);
      let _TemplateRef_20_8 = new template_ref.TemplateRef.new(this[_appEl_20$], C133 || CT.C133);
      this[_NgIf_20_9$] = new ng_if.NgIf.new(this[_appEl_20$], _TemplateRef_20_8);
      let _anchor_21 = dom_helpers.appendAnchor(_el_19);
      this[_appEl_21] = new view_container.ViewContainer.new(21, 19, this, _anchor_21);
      let _TemplateRef_21_8 = new template_ref.TemplateRef.new(this[_appEl_21], C134 || CT.C134);
      this[_NgIf_21_9] = new ng_if.NgIf.new(this[_appEl_21], _TemplateRef_21_8);
      this[_compView_22$2] = new input$46template.ViewFluidInput0.new(this, 22);
      let _el_22 = this[_compView_22$2].rootElement;
      _el_19[$append](_el_22);
      dom_helpers.setAttribute(_el_22, "fluidInput", "");
      dom_helpers.setAttribute(_el_22, "placeholder", "Your name");
      dom_helpers.setAttribute(_el_22, "type", "text");
      this.addShimC(_el_22);
      this[_FluidInput_22_5$0] = new input.FluidInput.new(_el_22);
      this[_DefaultValueAccessor_22_6$0] = new default_value_accessor.DefaultValueAccessor.new(_el_22);
      this[_NgValueAccessor_22_7$0] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_22_6$0]]);
      this[_NgModel_22_8$0] = new ng_model.NgModel.new(null, this[_NgValueAccessor_22_7$0]);
      this[_compView_22$2].createAndProject(this[_FluidInput_22_5$0], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _text_23 = dom_helpers.appendText(_el_19, " ");
      let _el_24 = dom_helpers.appendElement(doc, _el_19, "br");
      this.addShimE(_el_24);
      let _text_25 = dom_helpers.appendText(_el_19, " ");
      this[_compView_26] = new input$46template.ViewFluidInput0.new(this, 26);
      let _el_26 = this[_compView_26].rootElement;
      _el_19[$append](_el_26);
      dom_helpers.setAttribute(_el_26, "fluidInput", "");
      dom_helpers.setAttribute(_el_26, "placeholder", "email to contact you");
      dom_helpers.setAttribute(_el_26, "type", "email");
      this.addShimC(_el_26);
      this[_FluidInput_26_5] = new input.FluidInput.new(_el_26);
      this[_DefaultValueAccessor_26_6] = new default_value_accessor.DefaultValueAccessor.new(_el_26);
      this[_NgValueAccessor_26_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_26_6]]);
      this[_NgModel_26_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_26_7]);
      this[_compView_26].createAndProject(this[_FluidInput_26_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _text_27 = dom_helpers.appendText(_el_19, " ");
      let _el_28 = dom_helpers.appendElement(doc, _el_19, "br");
      this.addShimE(_el_28);
      let _text_29 = dom_helpers.appendText(_el_19, " ");
      this[_compView_30$0] = new input$46template$.ViewFluidMultiInput0.new(this, 30);
      let _el_30 = this[_compView_30$0].rootElement;
      _el_19[$append](_el_30);
      dom_helpers.setAttribute(_el_30, "fluidMultiInput", "");
      dom_helpers.setAttribute(_el_30, "placeholder", "Your message...");
      dom_helpers.setAttribute(_el_30, "rows", "15");
      this.addShimC(_el_30);
      this[_FluidMultiInput_30_5] = new input$.FluidMultiInput.new(_el_30);
      this[_DefaultValueAccessor_30_6$] = new default_value_accessor.DefaultValueAccessor.new(_el_30);
      this[_NgValueAccessor_30_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_30_6$]]);
      this[_NgModel_30_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_30_7]);
      this[_compView_30$0].createAndProject(this[_FluidMultiInput_30_5], JSArrayOfObjectL().of([C10 || CT.C10]));
      let _text_31 = dom_helpers.appendText(_el_19, " ");
      this[_compView_32$0] = new button$46template.ViewFluidButton0.new(this, 32);
      let _el_32 = this[_compView_32$0].rootElement;
      _el_19[$append](_el_32);
      dom_helpers.setAttribute(_el_32, "fluidBtn", "");
      dom_helpers.setAttribute(_el_32, "full", "");
      this.addShimC(_el_32);
      this[_FluidButton_32_5$] = new button.FluidButton.new(_el_32);
      let _text_33 = dom_helpers.createText("Send");
      this[_compView_32$0].createAndProject(this[_FluidButton_32_5$], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_33])]));
      this[_compView_1$4].createAndProject(this[_FluidCard_1_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_el_2, _el_3, _el_5, _el_7, _text_9, _el_10, _el_11, _el_19])]));
      _el_22[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_22_6$0], 'touchHandler')));
      _el_22[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_0$8)));
      let subscription_0 = this[_NgModel_22_8$0].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_1$5)));
      _el_26[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_26_6], 'touchHandler')));
      _el_26[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_2$3)));
      let subscription_1 = this[_NgModel_26_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_3$3)));
      _el_30[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_DefaultValueAccessor_30_6$], 'touchHandler')));
      _el_30[$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handleEvent_4$1)));
      let subscription_2 = this[_NgModel_30_8].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handleEvent_5$1)));
      _el_32[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'submit')));
      this.initSubscriptions(JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (22 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_22_7$0];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_22_8$0];
        }
      }
      if (26 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_26_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_26_8];
        }
      }
      if (30 === nodeIndex) {
        if (token === (C11 || CT.C11)) {
          return this[_NgValueAccessor_30_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_30_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.firstCheck;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidCard_1_5].ngOnInit();
      }
      this[_NgIf_20_9$].ngIf = _ctx.error[$isNotEmpty];
      this[_NgIf_21_9].ngIf = _ctx.success;
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_22_5$0].ngOnInit();
      }
      changed = false;
      let currVal_0 = _ctx.name;
      if (dart.test(check_binding.checkBinding(this[_expr_0$10], currVal_0, "name", "package:stevertus/src/pages/contact/contact.html"))) {
        this[_NgModel_22_8$0].model = currVal_0;
        changed = true;
        this[_expr_0$10] = currVal_0;
      }
      if (changed) {
        this[_NgModel_22_8$0].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_22_8$0].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidInput_26_5].ngOnInit();
      }
      changed = false;
      let currVal_1 = _ctx.email;
      if (dart.test(check_binding.checkBinding(this[_expr_1$6], currVal_1, "email", "package:stevertus/src/pages/contact/contact.html"))) {
        this[_NgModel_26_8].model = currVal_1;
        changed = true;
        this[_expr_1$6] = currVal_1;
      }
      if (changed) {
        this[_NgModel_26_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_26_8].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidMultiInput_30_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = _ctx.message;
      if (dart.test(check_binding.checkBinding(this[_expr_2$2], currVal_2, "message", "package:stevertus/src/pages/contact/contact.html"))) {
        this[_NgModel_30_8].model = currVal_2;
        changed = true;
        this[_expr_2$2] = currVal_2;
      }
      if (changed) {
        this[_NgModel_30_8].ngAfterChanges();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_NgModel_30_8].ngOnInit();
      }
      if (!dart.test(check_binding.debugThrowIfChanged) && dart.test(firstCheck)) {
        this[_FluidButton_32_5$].ngOnInit();
      }
      this[_appEl_20$].detectChangesInNestedViews();
      this[_appEl_21].detectChangesInNestedViews();
      this[_compView_1$4].detectChanges();
      this[_compView_22$2].detectChanges();
      this[_compView_26].detectChanges();
      this[_compView_30$0].detectChanges();
      this[_compView_32$0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_20$].destroyNestedViews();
      this[_appEl_21].destroyNestedViews();
      this[_compView_1$4].destroyInternalState();
      this[_compView_22$2].destroyInternalState();
      this[_compView_26].destroyInternalState();
      this[_compView_30$0].destroyInternalState();
      this[_compView_32$0].destroyInternalState();
    }
    [_handleEvent_0$8]($36event) {
      this[_DefaultValueAccessor_22_6$0].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_1$5]($36event) {
      let _ctx = this.ctx;
      _ctx.name = StringL().as($36event);
    }
    [_handleEvent_2$3]($36event) {
      this[_DefaultValueAccessor_26_6].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_3$3]($36event) {
      let _ctx = this.ctx;
      _ctx.email = StringL().as($36event);
    }
    [_handleEvent_4$1]($36event) {
      this[_DefaultValueAccessor_30_6$].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    [_handleEvent_5$1]($36event) {
      let _ctx = this.ctx;
      _ctx.message = StringL().as($36event);
    }
    static _debugClearComponentStyles() {
      contact$46template.ViewContactPage0._componentStyles = null;
    }
    initComponentStyles() {
      let styles = contact$46template.ViewContactPage0._componentStyles;
      if (styles == null) {
        contact$46template.ViewContactPage0._componentStyles = styles = style_encapsulation.ComponentStyles.scoped(contact$46template.styles$ContactPage, contact$46template.ViewContactPage0._debugComponentUrl);
        if (dart.test(optimizations.isDevMode)) {
          style_encapsulation.ComponentStyles.debugOnClear(C135 || CT.C135);
        }
      }
      this.componentStyles = styles;
    }
  };
  (contact$46template.ViewContactPage0.new = function(parentView, parentIndex) {
    this[_compView_1$4] = null;
    this[_FluidCard_1_5] = null;
    this[_appEl_20$] = null;
    this[_NgIf_20_9$] = null;
    this[_appEl_21] = null;
    this[_NgIf_21_9] = null;
    this[_compView_22$2] = null;
    this[_FluidInput_22_5$0] = null;
    this[_DefaultValueAccessor_22_6$0] = null;
    this[_NgValueAccessor_22_7$0] = null;
    this[_NgModel_22_8$0] = null;
    this[_compView_26] = null;
    this[_FluidInput_26_5] = null;
    this[_DefaultValueAccessor_26_6] = null;
    this[_NgValueAccessor_26_7] = null;
    this[_NgModel_26_8] = null;
    this[_compView_30$0] = null;
    this[_FluidMultiInput_30_5] = null;
    this[_DefaultValueAccessor_30_6$] = null;
    this[_NgValueAccessor_30_7] = null;
    this[_NgModel_30_8] = null;
    this[_compView_32$0] = null;
    this[_FluidButton_32_5$] = null;
    this[_expr_0$10] = null;
    this[_expr_1$6] = null;
    this[_expr_2$2] = null;
    contact$46template.ViewContactPage0.__proto__.new.call(this, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootElement = HtmlElementL().as(html.document[$createElement]("contact"));
  }).prototype = contact$46template.ViewContactPage0.prototype;
  dart.addTypeTests(contact$46template.ViewContactPage0);
  dart.addTypeCaches(contact$46template.ViewContactPage0);
  dart.setMethodSignature(contact$46template.ViewContactPage0, () => ({
    __proto__: dart.getMethods(contact$46template.ViewContactPage0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handleEvent_0$8]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_1$5]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_2$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_3$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_4$1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handleEvent_5$1]: dart.fnType(dart.void, [dart.dynamic]),
    initComponentStyles: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(contact$46template.ViewContactPage0, L42);
  dart.setFieldSignature(contact$46template.ViewContactPage0, () => ({
    __proto__: dart.getFields(contact$46template.ViewContactPage0.__proto__),
    [_compView_1$4]: dart.fieldType(dart.legacy(card$46template.ViewFluidCard0)),
    [_FluidCard_1_5]: dart.fieldType(dart.legacy(card.FluidCard)),
    [_appEl_20$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_20_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_21]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_21_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_22$2]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_22_5$0]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_22_6$0]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_22_7$0]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_22_8$0]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_26]: dart.fieldType(dart.legacy(input$46template.ViewFluidInput0)),
    [_FluidInput_26_5]: dart.fieldType(dart.legacy(input.FluidInput)),
    [_DefaultValueAccessor_26_6]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_26_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_26_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_30$0]: dart.fieldType(dart.legacy(input$46template$.ViewFluidMultiInput0)),
    [_FluidMultiInput_30_5]: dart.fieldType(dart.legacy(input$.FluidMultiInput)),
    [_DefaultValueAccessor_30_6$]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_NgValueAccessor_30_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_30_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_compView_32$0]: dart.fieldType(dart.legacy(button$46template.ViewFluidButton0)),
    [_FluidButton_32_5$]: dart.fieldType(dart.legacy(button.FluidButton)),
    [_expr_0$10]: dart.fieldType(dart.dynamic),
    [_expr_1$6]: dart.fieldType(dart.dynamic),
    [_expr_2$2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(contact$46template.ViewContactPage0, {
    /*contact$46template.ViewContactPage0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1$8 = dart.privateName(contact$46template, "_textBinding_1");
  contact$46template._ViewContactPage1 = class _ViewContactPage1 extends embedded_view.EmbeddedView$(dart.legacy(contact.ContactPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "error");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1$8].element);
      this.initRootNode(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1$8].updateText(interpolate.interpolateString0(_ctx.error));
    }
  };
  (contact$46template._ViewContactPage1.new = function(parentView, parentIndex) {
    this[_textBinding_1$8] = new text_binding.TextBinding.new();
    contact$46template._ViewContactPage1.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = contact$46template._ViewContactPage1.prototype;
  dart.addTypeTests(contact$46template._ViewContactPage1);
  dart.addTypeCaches(contact$46template._ViewContactPage1);
  dart.setMethodSignature(contact$46template._ViewContactPage1, () => ({
    __proto__: dart.getMethods(contact$46template._ViewContactPage1.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(contact$46template._ViewContactPage1, L42);
  dart.setFieldSignature(contact$46template._ViewContactPage1, () => ({
    __proto__: dart.getFields(contact$46template._ViewContactPage1.__proto__),
    [_textBinding_1$8]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  contact$46template._ViewContactPage2 = class _ViewContactPage2 extends embedded_view.EmbeddedView$(dart.legacy(contact.ContactPage)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "success");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Thank you for your message! I'll try to respond as soon as possible.");
      this.initRootNode(_el_0);
    }
  };
  (contact$46template._ViewContactPage2.new = function(parentView, parentIndex) {
    contact$46template._ViewContactPage2.__proto__.new.call(this, parentView, parentIndex);
    ;
  }).prototype = contact$46template._ViewContactPage2.prototype;
  dart.addTypeTests(contact$46template._ViewContactPage2);
  dart.addTypeCaches(contact$46template._ViewContactPage2);
  dart.setMethodSignature(contact$46template._ViewContactPage2, () => ({
    __proto__: dart.getMethods(contact$46template._ViewContactPage2.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(contact$46template._ViewContactPage2, L42);
  contact$46template._ViewContactPageHost0 = class _ViewContactPageHost0 extends host_view.HostView$(dart.legacy(contact.ContactPage)) {
    build() {
      this.componentView = new contact$46template.ViewContactPage0.new(this, 0);
      let _el_0 = this.componentView.rootElement;
      this.component = new contact.ContactPage.new();
      this.initRootNode(_el_0);
    }
  };
  (contact$46template._ViewContactPageHost0.new = function() {
    contact$46template._ViewContactPageHost0.__proto__.new.call(this);
    ;
  }).prototype = contact$46template._ViewContactPageHost0.prototype;
  dart.addTypeTests(contact$46template._ViewContactPageHost0);
  dart.addTypeCaches(contact$46template._ViewContactPageHost0);
  dart.setMethodSignature(contact$46template._ViewContactPageHost0, () => ({
    __proto__: dart.getMethods(contact$46template._ViewContactPageHost0.__proto__),
    build: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(contact$46template._ViewContactPageHost0, L42);
  var C136;
  contact$46template.createContactPageFactory = function createContactPageFactory() {
    return new (ComponentFactoryOfContactPageL()).new("contact", C136 || CT.C136);
  };
  contact$46template.viewFactory_ContactPage1 = function viewFactory_ContactPage1(parentView, parentIndex) {
    return new contact$46template._ViewContactPage1.new(parentView, parentIndex);
  };
  contact$46template.viewFactory_ContactPage2 = function viewFactory_ContactPage2(parentView, parentIndex) {
    return new contact$46template._ViewContactPage2.new(parentView, parentIndex);
  };
  contact$46template.viewFactory_ContactPageHost0 = function viewFactory_ContactPageHost0() {
    return new contact$46template._ViewContactPageHost0.new();
  };
  contact$46template.initReflector = function initReflector$14() {
    if (dart.test(contact$46template._visited)) {
      return;
    }
    contact$46template._visited = true;
  };
  dart.copyProperties(contact$46template, {
    get ContactPageNgFactory() {
      return contact$46template._ContactPageNgFactory;
    }
  });
  var C137;
  dart.defineLazy(contact$46template, {
    /*contact$46template.styles$ContactPage*/get styles$ContactPage() {
      return [contact$46css$46shim.styles];
    },
    /*contact$46template._ContactPageNgFactory*/get _ContactPageNgFactory() {
      return C137 || CT.C137;
    },
    /*contact$46template.styles$ContactPageHost*/get styles$ContactPageHost() {
      return C10 || CT.C10;
    },
    /*contact$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(contact$46css$46shim, {
    /*contact$46css$46shim.styles*/get styles() {
      return [".container._ngcontent-%ID%{min-height:100vh;padding:2% 30%}img._ngcontent-%ID%{width:100%;border-radius:10px}.inputs._ngcontent-%ID%{margin:48px 16px;--inputBackground:#e9e9ed}.inputs._ngcontent-%ID% .error._ngcontent-%ID%{color:var(--errorColor)}.inputs._ngcontent-%ID% .success._ngcontent-%ID%{color:var(--primary)}.inputs._ngcontent-%ID% input._ngcontent-%ID%,.inputs._ngcontent-%ID% textarea._ngcontent-%ID%{margin:8px 0;width:calc(100% - 16px)}.inputs._ngcontent-%ID% button._ngcontent-%ID%{width:200px;margin:16px calc(50% - 108px)}@media screen AND (max-width:960px){.container._ngcontent-%ID%{padding:2% 16px}}"];
    }
  }, true);
  var lang$3 = dart.privateName(footer, "FooterComponent.lang");
  footer.FooterComponent = class FooterComponent extends core.Object {
    get lang() {
      return this[lang$3];
    }
    set lang(value) {
      this[lang$3] = value;
    }
  };
  (footer.FooterComponent.new = function(lang) {
    this[lang$3] = lang;
    ;
  }).prototype = footer.FooterComponent.prototype;
  dart.addTypeTests(footer.FooterComponent);
  dart.addTypeCaches(footer.FooterComponent);
  dart.setLibraryUri(footer.FooterComponent, L43);
  dart.setFieldSignature(footer.FooterComponent, () => ({
    __proto__: dart.getFields(footer.FooterComponent.__proto__),
    lang: dart.fieldType(dart.legacy(translation_service.TranslationService))
  }));
  dart.trackLibraries("packages/stevertus/src/components/doc_grid/grid.css.shim", {
    "package:stevertus/src/components/sidebar/sidebar.dart": sidebar,
    "package:stevertus/src/pages/tools/gui/gui.dart": gui$,
    "package:stevertus/src/components/objd/item_selector/item.dart": item$,
    "package:stevertus/src/components/render_text/render.css.shim.dart": render$46css$46shim,
    "package:stevertus/src/pages/projects/projects.dart": projects,
    "package:stevertus/src/http.dart": http$,
    "package:stevertus/src/data/document.dart": document,
    "package:stevertus/src/data/article.dart": article,
    "package:stevertus/src/data/text.dart": text,
    "package:stevertus/src/data/text_parts.dart": text_parts,
    "package:stevertus/src/data/slices.dart": slices$,
    "package:stevertus/src/components/doc_grid/grid.dart": grid,
    "package:stevertus/src/components/doc_preview/doc.dart": doc,
    "package:stevertus/src/pages/projects/projects.css.shim.dart": projects$46css$46shim,
    "package:stevertus/src/components/header/header.dart": header,
    "package:stevertus/src/pages/article/slices/slices.dart": slices,
    "package:stevertus/src/components/render_text/render.dart": render,
    "package:stevertus/src/components/objd/item_selector/item.template.dart": item$46template,
    "package:stevertus/src/components/objd/item_selector/item.css.shim.dart": item$46css$46shim,
    "package:stevertus/src/pages/tools/blocks/blocks.template.dart": blocks$46template,
    "package:stevertus/src/pages/tools/blocks/blocks.dart": blocks,
    "package:stevertus/src/pages/tools/tools.css.shim.dart": tools$46css$46shim,
    "package:stevertus/src/pages/tools/blocks/blocks.css.shim.dart": blocks$46css$46shim,
    "package:stevertus/src/pages/tekpack/tekpack.component.css.shim.dart": tekpack$46component$46css$46shim,
    "package:stevertus/src/components/doc_grid/grid.template.dart": grid$46template,
    "package:stevertus/src/components/doc_preview/doc.template.dart": doc$46template,
    "package:stevertus/src/components/doc_preview/doc.css.shim.dart": doc$46css$46shim,
    "package:stevertus/src/components/doc_grid/grid.css.shim.dart": grid$46css$46shim,
    "package:stevertus/src/pages/not_found.template.dart": not_found$46template,
    "package:stevertus/src/pages/not_found.dart": not_found,
    "package:stevertus/src/pages/landing/landing.dart": landing,
    "package:stevertus/src/pages/landing/section/section.dart": section,
    "package:stevertus/src/pages/landing/card/card.dart": card$,
    "package:stevertus/src/pages/articles/articles.dart": articles,
    "package:stevertus/src/components/render_text/render.template.dart": render$46template,
    "package:stevertus/src/pages/article/article.template.dart": article$46template,
    "package:stevertus/src/pages/article/slices/slices.template.dart": slices$46template,
    "package:stevertus/src/pages/article/slices/slices.css.shim.dart": slices$46css$46shim,
    "package:stevertus/src/pages/article/article.dart": article$,
    "package:stevertus/src/services/safe_url.dart": safe_url,
    "package:stevertus/src/pages/article/article.css.shim.dart": article$46css$46shim,
    "package:stevertus/src/pages/contact/contact.dart": contact,
    "package:stevertus/src/routes.dart": routes,
    "package:stevertus/src/pages/tools/gui/gui.template.dart": gui$46template,
    "package:stevertus/src/pages/tools/gui/gui.css.shim.dart": gui$46css$46shim,
    "package:stevertus/src/pages/tools/crafting/crafting.template.dart": crafting$46template,
    "package:stevertus/src/pages/tools/crafting/crafting.dart": crafting,
    "package:stevertus/src/pages/tools/crafting/crafting.css.shim.dart": crafting$46css$46shim,
    "package:stevertus/src/pages/tekpack/tekpack.template.dart": tekpack$46template,
    "package:stevertus/src/pages/tekpack/tekpack.dart": tekpack,
    "package:stevertus/src/pages/projects/projects.template.dart": projects$46template,
    "package:stevertus/src/pages/articles/articles.template.dart": articles$46template,
    "package:stevertus/src/pages/articles/articles.css.shim.dart": articles$46css$46shim,
    "package:stevertus/src/pages/landing/landing.template.dart": landing$46template,
    "package:stevertus/src/pages/landing/card/card.template.dart": card$46template$,
    "package:stevertus/src/pages/landing/card/card.css.shim.dart": card$46css$46shim,
    "package:stevertus/src/pages/landing/section/section.template.dart": section$46template,
    "package:stevertus/src/pages/landing/section/section.css.shim.dart": section$46css$46shim,
    "package:stevertus/src/pages/landing/landing.css.shim.dart": landing$46css$46shim,
    "package:stevertus/src/pages/contact/contact.template.dart": contact$46template,
    "package:stevertus/src/pages/contact/contact.css.shim.dart": contact$46css$46shim,
    "package:stevertus/src/components/footer/footer.dart": footer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../sidebar/sidebar.dart","../../pages/tools/gui/gui.dart","../objd/item_selector/item.dart","../render_text/render.css.shim.dart","../../pages/projects/projects.dart","../../http.dart","../../data/document.dart","../../data/article.dart","../../data/slices.dart","../../data/text.dart","../../data/text_parts.dart","grid.dart","../doc_preview/doc.dart","../../pages/projects/projects.css.shim.dart","../header/header.dart","../../pages/article/slices/slices.dart","../render_text/render.dart","../objd/item_selector/item.template.dart","../objd/item_selector/item.css.shim.dart","../../pages/tools/blocks/blocks.dart","../../pages/tools/blocks/blocks.template.dart","../../pages/tools/tools.css.shim.dart","../../pages/tools/blocks/blocks.css.shim.dart","../../pages/tekpack/tekpack.component.css.shim.dart","grid.template.dart","../doc_preview/doc.template.dart","../doc_preview/doc.css.shim.dart","grid.css.shim.dart","../../pages/not_found.dart","../../pages/not_found.template.dart","../../pages/landing/landing.dart","../../pages/landing/section/section.dart","../../pages/landing/card/card.dart","../../pages/articles/articles.dart","../render_text/render.template.dart","../../pages/article/article.dart","../../pages/article/article.template.dart","../../pages/article/slices/slices.template.dart","../../pages/article/slices/slices.css.shim.dart","../../services/safe_url.dart","../../pages/article/article.css.shim.dart","../../pages/contact/contact.dart","../../routes.dart","../../pages/tools/gui/gui.template.dart","../../pages/tools/gui/gui.css.shim.dart","../../pages/tools/crafting/crafting.dart","../../pages/tools/crafting/crafting.template.dart","../../pages/tools/crafting/crafting.css.shim.dart","../../pages/tekpack/tekpack.dart","../../pages/tekpack/tekpack.template.dart","../../pages/projects/projects.template.dart","../../pages/articles/articles.template.dart","../../pages/articles/articles.css.shim.dart","../../pages/landing/landing.template.dart","../../pages/landing/card/card.template.dart","../../pages/landing/card/card.css.shim.dart","../../pages/landing/section/section.template.dart","../../pages/landing/section/section.css.shim.dart","../../pages/landing/landing.css.shim.dart","../../pages/contact/contact.template.dart","../../pages/contact/contact.css.shim.dart","../footer/footer.dart"],"names":[],"mappings":"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","file":"grid.css.shim.unsound.ddc.js"}');
  // Exports:
  return {
    src__components__sidebar__sidebar: sidebar,
    src__pages__tools__gui__gui: gui$,
    src__components__objd__item_selector__item: item$,
    src__components__render_text__render$46css$46shim: render$46css$46shim,
    src__pages__projects__projects: projects,
    src__http: http$,
    src__data__document: document,
    src__data__article: article,
    src__data__text: text,
    src__data__text_parts: text_parts,
    src__data__slices: slices$,
    src__components__doc_grid__grid: grid,
    src__components__doc_preview__doc: doc,
    src__pages__projects__projects$46css$46shim: projects$46css$46shim,
    src__components__header__header: header,
    src__pages__article__slices__slices: slices,
    src__components__render_text__render: render,
    src__components__objd__item_selector__item$46template: item$46template,
    src__components__objd__item_selector__item$46css$46shim: item$46css$46shim,
    src__pages__tools__blocks__blocks$46template: blocks$46template,
    src__pages__tools__blocks__blocks: blocks,
    src__pages__tools__tools$46css$46shim: tools$46css$46shim,
    src__pages__tools__blocks__blocks$46css$46shim: blocks$46css$46shim,
    src__pages__tekpack__tekpack$46component$46css$46shim: tekpack$46component$46css$46shim,
    src__components__doc_grid__grid$46template: grid$46template,
    src__components__doc_preview__doc$46template: doc$46template,
    src__components__doc_preview__doc$46css$46shim: doc$46css$46shim,
    src__components__doc_grid__grid$46css$46shim: grid$46css$46shim,
    src__pages__not_found$46template: not_found$46template,
    src__pages__not_found: not_found,
    src__pages__landing__landing: landing,
    src__pages__landing__section__section: section,
    src__pages__landing__card__card: card$,
    src__pages__articles__articles: articles,
    src__components__render_text__render$46template: render$46template,
    src__pages__article__article$46template: article$46template,
    src__pages__article__slices__slices$46template: slices$46template,
    src__pages__article__slices__slices$46css$46shim: slices$46css$46shim,
    src__pages__article__article: article$,
    src__services__safe_url: safe_url,
    src__pages__article__article$46css$46shim: article$46css$46shim,
    src__pages__contact__contact: contact,
    src__routes: routes,
    src__pages__tools__gui__gui$46template: gui$46template,
    src__pages__tools__gui__gui$46css$46shim: gui$46css$46shim,
    src__pages__tools__crafting__crafting$46template: crafting$46template,
    src__pages__tools__crafting__crafting: crafting,
    src__pages__tools__crafting__crafting$46css$46shim: crafting$46css$46shim,
    src__pages__tekpack__tekpack$46template: tekpack$46template,
    src__pages__tekpack__tekpack: tekpack,
    src__pages__projects__projects$46template: projects$46template,
    src__pages__articles__articles$46template: articles$46template,
    src__pages__articles__articles$46css$46shim: articles$46css$46shim,
    src__pages__landing__landing$46template: landing$46template,
    src__pages__landing__card__card$46template: card$46template$,
    src__pages__landing__card__card$46css$46shim: card$46css$46shim,
    src__pages__landing__section__section$46template: section$46template,
    src__pages__landing__section__section$46css$46shim: section$46css$46shim,
    src__pages__landing__landing$46css$46shim: landing$46css$46shim,
    src__pages__contact__contact$46template: contact$46template,
    src__pages__contact__contact$46css$46shim: contact$46css$46shim,
    src__components__footer__footer: footer
  };
}));

//# sourceMappingURL=grid.css.shim.unsound.ddc.js.map
