// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4MuEU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
// MUTE STATE
let isMuted = false;
let linkedClicked = false;
let muteState = sessionStorage.getItem("muteState");
let musicState = sessionStorage.getItem("musicTime");
if (muteState) {
    mutestate = muteState == "true" ? muteState = true : muteState = false;
    isMuted = muteState;
}
// MUSIC ONLOAD
music = new Audio();
music.loop = true;
music.src = "https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/Music/ps-website-music-v2.mp3";
const music_volume = 0.2;
music.volume = music_volume;
$(document).ready(function() {
    if (musicState) music.currentTime = musicState + 10;
    fadeInMusic();
});
// MUSIC FADE-OUT
window.onbeforeunload = function() {
    sessionStorage.setItem("musicTime", music.currentTime);
    sessionStorage.setItem("muteState", isMuted);
    if (!isMuted && !linkClicked) fadeToggle(music, music_volume);
};
// UI AUDIO
// open hamburger-menu sound
frog_ui_open_menu = new Audio();
frog_ui_open_menu.volume = 0.5;
addSrc(frog_ui_open_menu, "frog_ui_open_WET");
// close hamburger-menu sound
frog_ui_close_menu = new Audio();
frog_ui_close_menu.volume = 0.4;
addSrc(frog_ui_close_menu, "frog_ui_close_WET");
// menu click sounds
frog_ui_single_click_1 = new Audio();
frog_ui_single_click_1.volume = 0.5;
addSrc(frog_ui_single_click_1, "frog_ui_single_1_WET");
frog_ui_single_click_2 = new Audio();
frog_ui_single_click_2.volume = 0.5;
addSrc(frog_ui_single_click_2, "frog_ui_single_2_WET");
// menu hover clack sound
wood_clack_hover_menu = new Audio();
wood_clack_hover_menu.volume = 0.3;
addSrc(wood_clack_hover_menu, "wood_clack");
// project hover & click sounds
project_hover = new Audio();
project_hover.volume = 0.2;
addSrc(project_hover, "ui_hover_WET");
project_click = new Audio();
project_click.volume = 0.35;
addSrc(project_click, "ui_click_WET");
// text hover sound
text_hover = new Audio();
text_hover.volume = 0.02;
addSrc(text_hover, "text_hover");
// logo click sound
home_ui = new Audio();
home_ui.volume = 0.5;
addSrc(home_ui, "home_ui");
// logo hover sound
ps_logo_hover = new Audio();
ps_logo_hover.loop = true;
const logo_hover_volume = 0.8;
ps_logo_hover.volume = logo_hover_volume;
addSrc(ps_logo_hover, "logo_hover");
// UI SOUNDS ARRAY
const uiSounds = [
    frog_ui_open_menu,
    frog_ui_close_menu,
    frog_ui_single_click_1,
    frog_ui_single_click_2,
    wood_clack_hover_menu,
    project_hover,
    project_click,
    text_hover,
    ps_logo_hover,
    home_ui
];
// MUTE LOTTIE FUNCTIONALITY 
const mute_btn = document.querySelector("#mute-btn-container");
// need bodymovin cdn for this to work
const mute_lottie = bodymovin.loadAnimation({
    container: mute_btn,
    path: "https://uploads-ssl.webflow.com/636c26b00ea4fb2b2333fb0e/637d4ee86ce1a663a05bb9e5_audio_wave_updated.json",
    renderer: "svg",
    loop: true,
    autoplay: true
});
mute_btn.addEventListener("click", function() {
    fadeToggle(music, music_volume);
    muteToggle();
    if (!isMuted) {
        mute_lottie.setSpeed(1);
        mute_lottie.loop = true;
        mute_lottie.play();
    } else {
        mute_lottie.setSpeed(1.5);
        mute_lottie.loop = false;
    }
});
// MUTE ALL if user muted
if (muteState !== null && isMuted) {
    muteAll(uiSounds);
    fadeToggle(music, music_volume);
    mute_lottie.autoplay = false;
}
// PLAY MUSIC WHEN CLICKED ANYWHERE (IF NO PRELOADER)
document.body.addEventListener("click", function() {
    if (!isMuted && music.paused) music.play();
});
// PRELOADER TRIGGER
//const preloader_trigger = document.querySelectorAll('#trigger');
//playSound(preloader_trigger, music);
//playSound(preloader_trigger, home_ui);
// MENU NAV-LINKS
const menu_links = document.querySelectorAll(".menu-link-box");
playSound(menu_links, frog_ui_single_click_1, wood_clack_hover_menu);
menu_links.forEach((link)=>{
    link.addEventListener("click", function() {
        wood_clack_hover_menu.muted = true;
        fadeOutMusic();
    });
});
// TEAM CARDS
const team_links = document.querySelectorAll(".team-link-box");
playSound(team_links, project_click, project_hover);
// PROJECT LINKS
const project_links = document.querySelectorAll(".project-link-wrapper, .project-link");
playSound(project_links, project_click, project_hover);
// UNDERLINED TEXT 
const underline_links = document.querySelectorAll(".gets-underlined, .underlined");
playSound(underline_links, project_click, project_hover);
// TAG-TEXT
const tag_text = document.querySelectorAll(".tag-text, .button-text");
playSound(tag_text, frog_ui_single_click_2, text_hover);
// CAREERS ACCORDION
const careers_accordion = document.querySelectorAll(".career-subtitle-box");
playSound(careers_accordion, frog_ui_single_click_1);
// CAREERS ARROW-BTNS
const arrow_btns = document.querySelectorAll(".arrow");
playSound(arrow_btns, frog_ui_single_click_2);
// HAMBURGER-MENU OPEN & CLOSE
const hamburger_menu = document.querySelectorAll(".hamburger-box");
hamburger_menu.forEach((menu)=>{
    menu.addEventListener("click", function() {
        if ($(this).hasClass("close")) {
            frog_ui_close_menu.currentTime = 0;
            frog_ui_close_menu.play();
        } else {
            frog_ui_open_menu.currentTime = 0;
            frog_ui_open_menu.play();
        }
    });
    menu.addEventListener("mouseenter", function() {
        if (!$(this).hasClass("close")) {
            wood_clack_hover_menu.currentTime = 0;
            const closeAudio = wood_clack_hover_menu;
            closeAudio.volume = 0.2;
            closeAudio.play();
        }
    });
});
// LOGO HOME CLICK & HOVER
const home_link = document.querySelectorAll("#ps-logo-wrap, #ps-logo-wrap-black");
home_link.forEach((link)=>{
    link.addEventListener("click", function() {
        project_hover.pause();
        home_ui.play();
        fadeOutMusic();
    });
// OPTIONAL PS-LOGO HOVER SOUNDS 
//  link.addEventListener('mouseenter', function() {
//    wood_clack_hover_menu.currentTime = 0
// wood_clack_hover_menu.loop = true;
//     wood_clack_hover_menu.volume =  0.2;
//     if (isMuted == false) wood_clack_hover_menu.muted = false;
//     wood_clack_hover_menu.play();
//   });
//  link.addEventListener('mouseleave', function() {
// project_hover.loop = false;
//	if (isMuted == false) fadeToggle(wood_clack_hover_menu,  0.2);
//  });
});
// FUNCTIONS
function addSrc(audio, file) {
    audio.src = `https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/UI/${file}.mp3`;
}
function playSound(triggerLink, clickSound, hoverSound) {
    triggerLink.forEach((trigger)=>{
        trigger.addEventListener("click", function() {
            if (trigger.nodeName == "A") fadeOutMusic();
            clickSound.currentTime = 0;
            clickSound.play();
        });
        trigger.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
}
function fadeOutMusic() {
    if (!isMuted) fadeToggle(music, music_volume);
    linkedClicked = true;
}
function fadeInMusic() {
    $(window).on("load", function() {
        music.play();
        if (!isMuted) {
            music.volume = 0;
            $(music).animate({
                volume: music_volume
            }, 3000, "linear");
        }
    });
}
function fadeToggle(audio, maxVolume) {
    let muted = audio.muted;
    if (muted) audio.muted = false;
    $(audio).animate({
        volume: muted ? maxVolume : 0
    }, 1500, function() {
        audio.muted = !muted;
    });
}
function muteToggle() {
    if (isMuted) {
        unmuteAll(uiSounds);
        isMuted = false;
    } else {
        muteAll(uiSounds);
        isMuted = true;
    }
}
function muteAll(audioArr) {
    audioArr.forEach((audio)=>{
        audio.muted = true;
    });
}
function unmuteAll(audioArr) {
    audioArr.forEach((audio)=>{
        audio.muted = false;
    });
}

},{}]},["4MuEU","igcvL"], "igcvL", "parcelRequirea207")

//# sourceMappingURL=app.js.map
