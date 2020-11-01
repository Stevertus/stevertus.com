/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/angular/angular": "packages/angular/angular.unsound.ddc",
 "packages/angular/core": "packages/angular/core.unsound.ddc",
 "packages/angular/di": "packages/angular/di.unsound.ddc",
 "packages/angular/security": "packages/angular/security.unsound.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.unsound.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.unsound.ddc",
 "packages/angular/src/core/change_detection/directive_change_detector": "packages/angular/src/core/change_detection/directive_change_detector.unsound.ddc",
 "packages/angular/src/core/change_detection/pipe_transform": "packages/angular/src/core/change_detection/pipe_transform.unsound.ddc",
 "packages/angular/src/runtime/interpolate": "packages/angular/src/runtime/interpolate.unsound.ddc",
 "packages/angular/src/runtime/proxies": "packages/angular/src/runtime/proxies.unsound.ddc",
 "packages/angular/src/runtime/text_binding": "packages/angular/src/runtime/text_binding.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata": "packages/angular_compiler/v1/src/metadata.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/change_detection_constants": "packages/angular_compiler/v1/src/metadata/change_detection_constants.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/change_detection_link": "packages/angular_compiler/v1/src/metadata/change_detection_link.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/di_arguments": "packages/angular_compiler/v1/src/metadata/di_arguments.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/di_providers": "packages/angular_compiler/v1/src/metadata/di_providers.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/di_tokens": "packages/angular_compiler/v1/src/metadata/di_tokens.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/directives": "packages/angular_compiler/v1/src/metadata/directives.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/lifecycle_hooks": "packages/angular_compiler/v1/src/metadata/lifecycle_hooks.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/runtime_shim": "packages/angular_compiler/v1/src/metadata/runtime_shim.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/typed": "packages/angular_compiler/v1/src/metadata/typed.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/view": "packages/angular_compiler/v1/src/metadata/view.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/view_type": "packages/angular_compiler/v1/src/metadata/view_type.unsound.ddc",
 "packages/angular_compiler/v1/src/metadata/visibility": "packages/angular_compiler/v1/src/metadata/visibility.unsound.ddc",
 "packages/angular_forms/angular_forms": "packages/angular_forms/angular_forms.unsound.ddc",
 "packages/angular_forms/src/directives": "packages/angular_forms/src/directives.unsound.ddc",
 "packages/angular_router/angular_router": "packages/angular_router/angular_router.unsound.ddc",
 "packages/angular_router/src/constants": "packages/angular_router/src/constants.unsound.ddc",
 "packages/angular_router/src/directives/router_link_directive.template": "packages/angular_router/src/directives/router_link_directive.template.unsound.ddc",
 "packages/angular_router/src/directives/router_outlet_directive": "packages/angular_router/src/directives/router_outlet_directive.unsound.ddc",
 "packages/archive/archive": "packages/archive/archive.unsound.ddc",
 "packages/archive/src/archive": "packages/archive/src/archive.unsound.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.unsound.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.unsound.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.unsound.ddc",
 "packages/collection/collection": "packages/collection/collection.unsound.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.unsound.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.unsound.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.unsound.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.unsound.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.unsound.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.unsound.ddc",
 "packages/colorize/colorize": "packages/colorize/colorize.unsound.ddc",
 "packages/convert/convert": "packages/convert/convert.unsound.ddc",
 "packages/crypto/crypto": "packages/crypto/crypto.unsound.ddc",
 "packages/fluix_web/fluix/appbar/appbar": "packages/fluix_web/fluix/appbar/appbar.unsound.ddc",
 "packages/fluix_web/fluix/appbar/appbar.css.shim": "packages/fluix_web/fluix/appbar/appbar.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/appbar/appbar.template": "packages/fluix_web/fluix/appbar/appbar.template.unsound.ddc",
 "packages/fluix_web/fluix/bar-align/align": "packages/fluix_web/fluix/bar-align/align.unsound.ddc",
 "packages/fluix_web/fluix/bar-align/align.css.shim": "packages/fluix_web/fluix/bar-align/align.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/bar-align/align.template": "packages/fluix_web/fluix/bar-align/align.template.unsound.ddc",
 "packages/fluix_web/fluix/button/button": "packages/fluix_web/fluix/button/button.unsound.ddc",
 "packages/fluix_web/fluix/button/button.css.shim": "packages/fluix_web/fluix/button/button.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/button/button.template": "packages/fluix_web/fluix/button/button.template.unsound.ddc",
 "packages/fluix_web/fluix/card/card": "packages/fluix_web/fluix/card/card.unsound.ddc",
 "packages/fluix_web/fluix/card/card.css.shim": "packages/fluix_web/fluix/card/card.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/card/card.template": "packages/fluix_web/fluix/card/card.template.unsound.ddc",
 "packages/fluix_web/fluix/checkbox/checkbox": "packages/fluix_web/fluix/checkbox/checkbox.unsound.ddc",
 "packages/fluix_web/fluix/checkbox/checkbox.css.shim": "packages/fluix_web/fluix/checkbox/checkbox.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/checkbox/checkbox.template": "packages/fluix_web/fluix/checkbox/checkbox.template.unsound.ddc",
 "packages/fluix_web/fluix/dropdown/dropdown": "packages/fluix_web/fluix/dropdown/dropdown.unsound.ddc",
 "packages/fluix_web/fluix/dropdown/dropdown.css.shim": "packages/fluix_web/fluix/dropdown/dropdown.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/dropdown/dropdown.template": "packages/fluix_web/fluix/dropdown/dropdown.template.unsound.ddc",
 "packages/fluix_web/fluix/icon/icon": "packages/fluix_web/fluix/icon/icon.unsound.ddc",
 "packages/fluix_web/fluix/icon/icon.css.shim": "packages/fluix_web/fluix/icon/icon.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/icon/icon.template": "packages/fluix_web/fluix/icon/icon.template.unsound.ddc",
 "packages/fluix_web/fluix/input/input": "packages/fluix_web/fluix/input/input.unsound.ddc",
 "packages/fluix_web/fluix/input/input.css.shim": "packages/fluix_web/fluix/input/input.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/input/input.template": "packages/fluix_web/fluix/input/input.template.unsound.ddc",
 "packages/fluix_web/fluix/list/list": "packages/fluix_web/fluix/list/list.unsound.ddc",
 "packages/fluix_web/fluix/list/list-item/list-item": "packages/fluix_web/fluix/list/list-item/list-item.unsound.ddc",
 "packages/fluix_web/fluix/list/list-item/list-item.css.shim": "packages/fluix_web/fluix/list/list-item/list-item.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/list/list-item/list-item.template": "packages/fluix_web/fluix/list/list-item/list-item.template.unsound.ddc",
 "packages/fluix_web/fluix/list/list.css.shim": "packages/fluix_web/fluix/list/list.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/list/list.template": "packages/fluix_web/fluix/list/list.template.unsound.ddc",
 "packages/fluix_web/fluix/modal/modal": "packages/fluix_web/fluix/modal/modal.unsound.ddc",
 "packages/fluix_web/fluix/modal/modal.css.shim": "packages/fluix_web/fluix/modal/modal.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/modal/modal.template": "packages/fluix_web/fluix/modal/modal.template.unsound.ddc",
 "packages/fluix_web/fluix/multi_input/input": "packages/fluix_web/fluix/multi_input/input.unsound.ddc",
 "packages/fluix_web/fluix/multi_input/input.css.shim": "packages/fluix_web/fluix/multi_input/input.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/multi_input/input.template": "packages/fluix_web/fluix/multi_input/input.template.unsound.ddc",
 "packages/fluix_web/fluix/shell/fluid_shell": "packages/fluix_web/fluix/shell/fluid_shell.unsound.ddc",
 "packages/fluix_web/fluix/shell/fluid_shell.template": "packages/fluix_web/fluix/shell/fluid_shell.template.unsound.ddc",
 "packages/fluix_web/fluix/shell/shell.css.shim": "packages/fluix_web/fluix/shell/shell.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar": "packages/fluix_web/fluix/sidebar/sidebar.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar-item/item": "packages/fluix_web/fluix/sidebar/sidebar-item/item.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar-item/item.css.shim": "packages/fluix_web/fluix/sidebar/sidebar-item/item.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar-item/item.template": "packages/fluix_web/fluix/sidebar/sidebar-item/item.template.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar.css.shim": "packages/fluix_web/fluix/sidebar/sidebar.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/sidebar/sidebar.template": "packages/fluix_web/fluix/sidebar/sidebar.template.unsound.ddc",
 "packages/fluix_web/fluix/spinner/spinner": "packages/fluix_web/fluix/spinner/spinner.unsound.ddc",
 "packages/fluix_web/fluix/spinner/spinner.css.shim": "packages/fluix_web/fluix/spinner/spinner.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/spinner/spinner.template": "packages/fluix_web/fluix/spinner/spinner.template.unsound.ddc",
 "packages/fluix_web/fluix/tag/tag": "packages/fluix_web/fluix/tag/tag.unsound.ddc",
 "packages/fluix_web/fluix/tag/tag.css.shim": "packages/fluix_web/fluix/tag/tag.css.shim.unsound.ddc",
 "packages/fluix_web/fluix/tag/tag.template": "packages/fluix_web/fluix/tag/tag.template.unsound.ddc",
 "packages/fluix_web/theme/colors": "packages/fluix_web/theme/colors.unsound.ddc",
 "packages/fluix_web/theme/theme": "packages/fluix_web/theme/theme.unsound.ddc",
 "packages/fluix_web/theme/themedata": "packages/fluix_web/theme/themedata.unsound.ddc",
 "packages/gson/decoder": "packages/gson/decoder.unsound.ddc",
 "packages/gson/encoder": "packages/gson/encoder.unsound.ddc",
 "packages/gson/parsable": "packages/gson/parsable.unsound.ddc",
 "packages/gson/prog": "packages/gson/prog.unsound.ddc",
 "packages/gson/terminal_web": "packages/gson/terminal_web.unsound.ddc",
 "packages/gson/values": "packages/gson/values.unsound.ddc",
 "packages/http/http": "packages/http/http.unsound.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.unsound.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.unsound.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.unsound.ddc",
 "packages/intl/intl": "packages/intl/intl.unsound.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.unsound.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.unsound.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.unsound.ddc",
 "packages/js/js": "packages/js/js.unsound.ddc",
 "packages/js/js_util": "packages/js/js_util.unsound.ddc",
 "packages/logging/logging": "packages/logging/logging.unsound.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.unsound.ddc",
 "packages/meta/meta": "packages/meta/meta.unsound.ddc",
 "packages/ng_translate/ng_translate": "packages/ng_translate/ng_translate.unsound.ddc",
 "packages/ng_translate/src/translation_directive": "packages/ng_translate/src/translation_directive.unsound.ddc",
 "packages/objd/basic/command": "packages/objd/basic/command.unsound.ddc",
 "packages/objd/basic/parsable": "packages/objd/basic/parsable.unsound.ddc",
 "packages/objd/basic/types/attribute": "packages/objd/basic/types/attribute.unsound.ddc",
 "packages/objd/basic/types/block": "packages/objd/basic/types/block.unsound.ddc",
 "packages/objd/basic/types/particles": "packages/objd/basic/types/particles.unsound.ddc",
 "packages/objd/basic/types/rotation": "packages/objd/basic/types/rotation.unsound.ddc",
 "packages/objd/basic/types/slot": "packages/objd/basic/types/slot.unsound.ddc",
 "packages/objd/build/context": "packages/objd/build/context.unsound.ddc",
 "packages/objd/build/gen_options": "packages/objd/build/gen_options.unsound.ddc",
 "packages/objd/build/io_ex": "packages/objd/build/io_ex.unsound.ddc",
 "packages/objd/build/io_html": "packages/objd/build/io_html.unsound.ddc",
 "packages/objd/custom_block": "packages/objd/custom_block.unsound.ddc",
 "packages/objd/external/predicates/tag": "packages/objd/external/predicates/tag.unsound.ddc",
 "packages/objd_crafting/objd_crafting": "packages/objd_crafting/objd_crafting.unsound.ddc",
 "packages/objd_crafting/widgets/checkarea": "packages/objd_crafting/widgets/checkarea.unsound.ddc",
 "packages/objd_crafting/widgets/chestfile": "packages/objd_crafting/widgets/chestfile.unsound.ddc",
 "packages/objd_crafting/widgets/craftingtable": "packages/objd_crafting/widgets/craftingtable.unsound.ddc",
 "packages/objd_crafting/widgets/dropitem": "packages/objd_crafting/widgets/dropitem.unsound.ddc",
 "packages/objd_crafting/widgets/getcommand": "packages/objd_crafting/widgets/getcommand.unsound.ddc",
 "packages/objd_crafting/widgets/placeholder_setdetect": "packages/objd_crafting/widgets/placeholder_setdetect.unsound.ddc",
 "packages/objd_crafting/widgets/recipe": "packages/objd_crafting/widgets/recipe.unsound.ddc",
 "packages/objd_crafting/widgets/setarmorstand": "packages/objd_crafting/widgets/setarmorstand.unsound.ddc",
 "packages/objd_gui/data/change_page": "packages/objd_gui/data/change_page.unsound.ddc",
 "packages/objd_gui/data/empty": "packages/objd_gui/data/empty.unsound.ddc",
 "packages/objd_gui/data/gui_slot": "packages/objd_gui/data/gui_slot.unsound.ddc",
 "packages/objd_gui/data/interactive_slot": "packages/objd_gui/data/interactive_slot.unsound.ddc",
 "packages/objd_gui/data/items": "packages/objd_gui/data/items.unsound.ddc",
 "packages/objd_gui/data/page": "packages/objd_gui/data/page.unsound.ddc",
 "packages/objd_gui/data/placeholder": "packages/objd_gui/data/placeholder.unsound.ddc",
 "packages/objd_gui/gui": "packages/objd_gui/gui.unsound.ddc",
 "packages/objd_gui/widgets/all_tag": "packages/objd_gui/widgets/all_tag.unsound.ddc",
 "packages/path/path": "packages/path/path.unsound.ddc",
 "packages/pedantic/pedantic": "packages/pedantic/pedantic.unsound.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.unsound.ddc",
 "packages/stack_trace/src/chain": "packages/stack_trace/src/chain.unsound.ddc",
 "packages/stevertus/app_component": "packages/stevertus/app_component.unsound.ddc",
 "packages/stevertus/app_component.css.shim": "packages/stevertus/app_component.css.shim.unsound.ddc",
 "packages/stevertus/app_component.template": "packages/stevertus/app_component.template.unsound.ddc",
 "packages/stevertus/src/components/doc_grid/grid.css.shim": "packages/stevertus/src/components/doc_grid/grid.css.shim.unsound.ddc",
 "packages/string_scanner/src/eager_span_scanner": "packages/string_scanner/src/eager_span_scanner.unsound.ddc",
 "packages/term_glyph/src/generated/ascii_glyph_set": "packages/term_glyph/src/generated/ascii_glyph_set.unsound.ddc",
 "packages/typed_data/src/typed_buffer": "packages/typed_data/src/typed_buffer.unsound.ddc",
 "packages/typed_data/src/typed_queue": "packages/typed_data/src/typed_queue.unsound.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.unsound.ddc",
 "web/main": "main.unsound.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'main.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.unsound.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 12);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.unsound.ddc')) {
    return moduleMap.name + '.unsound.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main.dart.bootstrap", ["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk.dart.nonNullAsserts(false);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.web__main || app.main).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "main.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main.dart.bootstrap", {
    "main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
