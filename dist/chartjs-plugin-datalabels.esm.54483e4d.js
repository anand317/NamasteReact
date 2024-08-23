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
})({"iVRgY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fc4c9dca54483e4d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2HIEm":[function(require,module,exports) {
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>plugin);
var _helpers = require("chart.js/helpers");
var _chartJs = require("chart.js");
var devicePixelRatio = function() {
    if (typeof window !== "undefined") {
        if (window.devicePixelRatio) return window.devicePixelRatio;
        // devicePixelRatio is undefined on IE10
        // https://stackoverflow.com/a/20204180/8837887
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85
        var screen = window.screen;
        if (screen) return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
    }
    return 1;
}();
var utils = {
    // @todo move this in Chart.helpers.toTextLines
    toTextLines: function(inputs) {
        var lines = [];
        var input;
        inputs = [].concat(inputs);
        while(inputs.length){
            input = inputs.pop();
            if (typeof input === "string") lines.unshift.apply(lines, input.split("\n"));
            else if (Array.isArray(input)) inputs.push.apply(inputs, input);
            else if (!(0, _helpers.isNullOrUndef)(inputs)) lines.unshift("" + input);
        }
        return lines;
    },
    // @todo move this in Chart.helpers.canvas.textSize
    // @todo cache calls of measureText if font doesn't change?!
    textSize: function(ctx, lines, font) {
        var items = [].concat(lines);
        var ilen = items.length;
        var prev = ctx.font;
        var width = 0;
        var i;
        ctx.font = font.string;
        for(i = 0; i < ilen; ++i)width = Math.max(ctx.measureText(items[i]).width, width);
        ctx.font = prev;
        return {
            height: ilen * font.lineHeight,
            width: width
        };
    },
    /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */ bound: function(min, value, max) {
        return Math.max(min, Math.min(value, max));
    },
    /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */ arrayDiff: function(a0, a1) {
        var prev = a0.slice();
        var updates = [];
        var i, j, ilen, v;
        for(i = 0, ilen = a1.length; i < ilen; ++i){
            v = a1[i];
            j = prev.indexOf(v);
            if (j === -1) updates.push([
                v,
                1
            ]);
            else prev.splice(j, 1);
        }
        for(i = 0, ilen = prev.length; i < ilen; ++i)updates.push([
            prev[i],
            -1
        ]);
        return updates;
    },
    /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */ rasterize: function(v) {
        return Math.round(v * devicePixelRatio) / devicePixelRatio;
    }
};
function orient(point, origin) {
    var x0 = origin.x;
    var y0 = origin.y;
    if (x0 === null) return {
        x: 0,
        y: -1
    };
    if (y0 === null) return {
        x: 1,
        y: 0
    };
    var dx = point.x - x0;
    var dy = point.y - y0;
    var ln = Math.sqrt(dx * dx + dy * dy);
    return {
        x: ln ? dx / ln : 0,
        y: ln ? dy / ln : -1
    };
}
function aligned(x, y, vx, vy, align) {
    switch(align){
        case "center":
            vx = vy = 0;
            break;
        case "bottom":
            vx = 0;
            vy = 1;
            break;
        case "right":
            vx = 1;
            vy = 0;
            break;
        case "left":
            vx = -1;
            vy = 0;
            break;
        case "top":
            vx = 0;
            vy = -1;
            break;
        case "start":
            vx = -vx;
            vy = -vy;
            break;
        case "end":
            break;
        default:
            // clockwise rotation (in degree)
            align *= Math.PI / 180;
            vx = Math.cos(align);
            vy = Math.sin(align);
            break;
    }
    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy
    };
}
// Line clipping (Cohen–Sutherland algorithm)
// https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm
var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;
function region(x, y, rect) {
    var res = R_INSIDE;
    if (x < rect.left) res |= R_LEFT;
    else if (x > rect.right) res |= R_RIGHT;
    if (y < rect.top) res |= R_TOP;
    else if (y > rect.bottom) res |= R_BOTTOM;
    return res;
}
function clipped(segment, area) {
    var x0 = segment.x0;
    var y0 = segment.y0;
    var x1 = segment.x1;
    var y1 = segment.y1;
    var r0 = region(x0, y0, area);
    var r1 = region(x1, y1, area);
    var r, x, y;
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (!(r0 | r1) || r0 & r1) break;
        // at least one point is outside
        r = r0 || r1;
        if (r & R_TOP) {
            x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
            y = area.top;
        } else if (r & R_BOTTOM) {
            x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
            y = area.bottom;
        } else if (r & R_RIGHT) {
            y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
            x = area.right;
        } else if (r & R_LEFT) {
            y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
            x = area.left;
        }
        if (r === r0) {
            x0 = x;
            y0 = y;
            r0 = region(x0, y0, area);
        } else {
            x1 = x;
            y1 = y;
            r1 = region(x1, y1, area);
        }
    }
    return {
        x0: x0,
        x1: x1,
        y0: y0,
        y1: y1
    };
}
function compute$1(range, config) {
    var anchor = config.anchor;
    var segment = range;
    var x, y;
    if (config.clamp) segment = clipped(segment, config.area);
    if (anchor === "start") {
        x = segment.x0;
        y = segment.y0;
    } else if (anchor === "end") {
        x = segment.x1;
        y = segment.y1;
    } else {
        x = (segment.x0 + segment.x1) / 2;
        y = (segment.y0 + segment.y1) / 2;
    }
    return aligned(x, y, range.vx, range.vy, config.align);
}
var positioners = {
    arc: function(el, config) {
        var angle = (el.startAngle + el.endAngle) / 2;
        var vx = Math.cos(angle);
        var vy = Math.sin(angle);
        var r0 = el.innerRadius;
        var r1 = el.outerRadius;
        return compute$1({
            x0: el.x + vx * r0,
            y0: el.y + vy * r0,
            x1: el.x + vx * r1,
            y1: el.y + vy * r1,
            vx: vx,
            vy: vy
        }, config);
    },
    point: function(el, config) {
        var v = orient(el, config.origin);
        var rx = v.x * el.options.radius;
        var ry = v.y * el.options.radius;
        return compute$1({
            x0: el.x - rx,
            y0: el.y - ry,
            x1: el.x + rx,
            y1: el.y + ry,
            vx: v.x,
            vy: v.y
        }, config);
    },
    bar: function(el, config) {
        var v = orient(el, config.origin);
        var x = el.x;
        var y = el.y;
        var sx = 0;
        var sy = 0;
        if (el.horizontal) {
            x = Math.min(el.x, el.base);
            sx = Math.abs(el.base - el.x);
        } else {
            y = Math.min(el.y, el.base);
            sy = Math.abs(el.base - el.y);
        }
        return compute$1({
            x0: x,
            y0: y + sy,
            x1: x + sx,
            y1: y,
            vx: v.x,
            vy: v.y
        }, config);
    },
    fallback: function(el, config) {
        var v = orient(el, config.origin);
        return compute$1({
            x0: el.x,
            y0: el.y,
            x1: el.x + (el.width || 0),
            y1: el.y + (el.height || 0),
            vx: v.x,
            vy: v.y
        }, config);
    }
};
var rasterize = utils.rasterize;
function boundingRects(model) {
    var borderWidth = model.borderWidth || 0;
    var padding = model.padding;
    var th = model.size.height;
    var tw = model.size.width;
    var tx = -tw / 2;
    var ty = -th / 2;
    return {
        frame: {
            x: tx - padding.left - borderWidth,
            y: ty - padding.top - borderWidth,
            w: tw + padding.width + borderWidth * 2,
            h: th + padding.height + borderWidth * 2
        },
        text: {
            x: tx,
            y: ty,
            w: tw,
            h: th
        }
    };
}
function getScaleOrigin(el, context) {
    var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;
    if (!scale) return null;
    if (scale.xCenter !== undefined && scale.yCenter !== undefined) return {
        x: scale.xCenter,
        y: scale.yCenter
    };
    var pixel = scale.getBasePixel();
    return el.horizontal ? {
        x: pixel,
        y: null
    } : {
        x: null,
        y: pixel
    };
}
function getPositioner(el) {
    if (el instanceof (0, _chartJs.ArcElement)) return positioners.arc;
    if (el instanceof (0, _chartJs.PointElement)) return positioners.point;
    if (el instanceof (0, _chartJs.BarElement)) return positioners.bar;
    return positioners.fallback;
}
function drawRoundedRect(ctx, x, y, w, h, radius) {
    var HALF_PI = Math.PI / 2;
    if (radius) {
        var r = Math.min(radius, h / 2, w / 2);
        var left = x + r;
        var top = y + r;
        var right = x + w - r;
        var bottom = y + h - r;
        ctx.moveTo(x, top);
        if (left < right && top < bottom) {
            ctx.arc(left, top, r, -Math.PI, -HALF_PI);
            ctx.arc(right, top, r, -HALF_PI, 0);
            ctx.arc(right, bottom, r, 0, HALF_PI);
            ctx.arc(left, bottom, r, HALF_PI, Math.PI);
        } else if (left < right) {
            ctx.moveTo(left, y);
            ctx.arc(right, top, r, -HALF_PI, HALF_PI);
            ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
        } else if (top < bottom) {
            ctx.arc(left, top, r, -Math.PI, 0);
            ctx.arc(left, bottom, r, 0, Math.PI);
        } else ctx.arc(left, top, r, -Math.PI, Math.PI);
        ctx.closePath();
        ctx.moveTo(x, y);
    } else ctx.rect(x, y, w, h);
}
function drawFrame(ctx, rect, model) {
    var bgColor = model.backgroundColor;
    var borderColor = model.borderColor;
    var borderWidth = model.borderWidth;
    if (!bgColor && (!borderColor || !borderWidth)) return;
    ctx.beginPath();
    drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
    ctx.closePath();
    if (bgColor) {
        ctx.fillStyle = bgColor;
        ctx.fill();
    }
    if (borderColor && borderWidth) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = "miter";
        ctx.stroke();
    }
}
function textGeometry(rect, align, font) {
    var h = font.lineHeight;
    var w = rect.w;
    var x = rect.x;
    var y = rect.y + h / 2;
    if (align === "center") x += w / 2;
    else if (align === "end" || align === "right") x += w;
    return {
        h: h,
        w: w,
        x: x,
        y: y
    };
}
function drawTextLine(ctx, text, cfg) {
    var shadow = ctx.shadowBlur;
    var stroked = cfg.stroked;
    var x = rasterize(cfg.x);
    var y = rasterize(cfg.y);
    var w = rasterize(cfg.w);
    if (stroked) ctx.strokeText(text, x, y, w);
    if (cfg.filled) {
        if (shadow && stroked) // Prevent drawing shadow on both the text stroke and fill, so
        // if the text is stroked, remove the shadow for the text fill.
        ctx.shadowBlur = 0;
        ctx.fillText(text, x, y, w);
        if (shadow && stroked) ctx.shadowBlur = shadow;
    }
}
function drawText(ctx, lines, rect, model) {
    var align = model.textAlign;
    var color = model.color;
    var filled = !!color;
    var font = model.font;
    var ilen = lines.length;
    var strokeColor = model.textStrokeColor;
    var strokeWidth = model.textStrokeWidth;
    var stroked = strokeColor && strokeWidth;
    var i;
    if (!ilen || !filled && !stroked) return;
    // Adjust coordinates based on text alignment and line height
    rect = textGeometry(rect, align, font);
    ctx.font = font.string;
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    ctx.shadowBlur = model.textShadowBlur;
    ctx.shadowColor = model.textShadowColor;
    if (filled) ctx.fillStyle = color;
    if (stroked) {
        ctx.lineJoin = "round";
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColor;
    }
    for(i = 0, ilen = lines.length; i < ilen; ++i)drawTextLine(ctx, lines[i], {
        stroked: stroked,
        filled: filled,
        w: rect.w,
        x: rect.x,
        y: rect.y + rect.h * i
    });
}
var Label = function(config, ctx, el, index) {
    var me = this;
    me._config = config;
    me._index = index;
    me._model = null;
    me._rects = null;
    me._ctx = ctx;
    me._el = el;
};
(0, _helpers.merge)(Label.prototype, {
    /**
   * @private
   */ _modelize: function(display, lines, config, context) {
        var me = this;
        var index = me._index;
        var font = (0, _helpers.toFont)((0, _helpers.resolve)([
            config.font,
            {}
        ], context, index));
        var color = (0, _helpers.resolve)([
            config.color,
            (0, _chartJs.defaults).color
        ], context, index);
        return {
            align: (0, _helpers.resolve)([
                config.align,
                "center"
            ], context, index),
            anchor: (0, _helpers.resolve)([
                config.anchor,
                "center"
            ], context, index),
            area: context.chart.chartArea,
            backgroundColor: (0, _helpers.resolve)([
                config.backgroundColor,
                null
            ], context, index),
            borderColor: (0, _helpers.resolve)([
                config.borderColor,
                null
            ], context, index),
            borderRadius: (0, _helpers.resolve)([
                config.borderRadius,
                0
            ], context, index),
            borderWidth: (0, _helpers.resolve)([
                config.borderWidth,
                0
            ], context, index),
            clamp: (0, _helpers.resolve)([
                config.clamp,
                false
            ], context, index),
            clip: (0, _helpers.resolve)([
                config.clip,
                false
            ], context, index),
            color: color,
            display: display,
            font: font,
            lines: lines,
            offset: (0, _helpers.resolve)([
                config.offset,
                4
            ], context, index),
            opacity: (0, _helpers.resolve)([
                config.opacity,
                1
            ], context, index),
            origin: getScaleOrigin(me._el, context),
            padding: (0, _helpers.toPadding)((0, _helpers.resolve)([
                config.padding,
                4
            ], context, index)),
            positioner: getPositioner(me._el),
            rotation: (0, _helpers.resolve)([
                config.rotation,
                0
            ], context, index) * (Math.PI / 180),
            size: utils.textSize(me._ctx, lines, font),
            textAlign: (0, _helpers.resolve)([
                config.textAlign,
                "start"
            ], context, index),
            textShadowBlur: (0, _helpers.resolve)([
                config.textShadowBlur,
                0
            ], context, index),
            textShadowColor: (0, _helpers.resolve)([
                config.textShadowColor,
                color
            ], context, index),
            textStrokeColor: (0, _helpers.resolve)([
                config.textStrokeColor,
                color
            ], context, index),
            textStrokeWidth: (0, _helpers.resolve)([
                config.textStrokeWidth,
                0
            ], context, index)
        };
    },
    update: function(context) {
        var me = this;
        var model = null;
        var rects = null;
        var index = me._index;
        var config = me._config;
        var value, label, lines;
        // We first resolve the display option (separately) to avoid computing
        // other options in case the label is hidden (i.e. display: false).
        var display = (0, _helpers.resolve)([
            config.display,
            true
        ], context, index);
        if (display) {
            value = context.dataset.data[index];
            label = (0, _helpers.valueOrDefault)((0, _helpers.callback)(config.formatter, [
                value,
                context
            ]), value);
            lines = (0, _helpers.isNullOrUndef)(label) ? [] : utils.toTextLines(label);
            if (lines.length) {
                model = me._modelize(display, lines, config, context);
                rects = boundingRects(model);
            }
        }
        me._model = model;
        me._rects = rects;
    },
    geometry: function() {
        return this._rects ? this._rects.frame : {};
    },
    rotation: function() {
        return this._model ? this._model.rotation : 0;
    },
    visible: function() {
        return this._model && this._model.opacity;
    },
    model: function() {
        return this._model;
    },
    draw: function(chart, center) {
        var me = this;
        var ctx = chart.ctx;
        var model = me._model;
        var rects = me._rects;
        var area;
        if (!this.visible()) return;
        ctx.save();
        if (model.clip) {
            area = model.area;
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
        }
        ctx.globalAlpha = utils.bound(0, model.opacity, 1);
        ctx.translate(rasterize(center.x), rasterize(center.y));
        ctx.rotate(model.rotation);
        drawFrame(ctx, rects.frame, model);
        drawText(ctx, model.lines, rects.text, model);
        ctx.restore();
    }
});
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger
function rotated(point, center, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var cx = center.x;
    var cy = center.y;
    return {
        x: cx + cos * (point.x - cx) - sin * (point.y - cy),
        y: cy + sin * (point.x - cx) + cos * (point.y - cy)
    };
}
function projected(points, axis) {
    var min = MAX_INTEGER;
    var max = MIN_INTEGER;
    var origin = axis.origin;
    var i, pt, vx, vy, dp;
    for(i = 0; i < points.length; ++i){
        pt = points[i];
        vx = pt.x - origin.x;
        vy = pt.y - origin.y;
        dp = axis.vx * vx + axis.vy * vy;
        min = Math.min(min, dp);
        max = Math.max(max, dp);
    }
    return {
        min: min,
        max: max
    };
}
function toAxis(p0, p1) {
    var vx = p1.x - p0.x;
    var vy = p1.y - p0.y;
    var ln = Math.sqrt(vx * vx + vy * vy);
    return {
        vx: (p1.x - p0.x) / ln,
        vy: (p1.y - p0.y) / ln,
        origin: p0,
        ln: ln
    };
}
var HitBox = function() {
    this._rotation = 0;
    this._rect = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
};
(0, _helpers.merge)(HitBox.prototype, {
    center: function() {
        var r = this._rect;
        return {
            x: r.x + r.w / 2,
            y: r.y + r.h / 2
        };
    },
    update: function(center, rect, rotation) {
        this._rotation = rotation;
        this._rect = {
            x: rect.x + center.x,
            y: rect.y + center.y,
            w: rect.w,
            h: rect.h
        };
    },
    contains: function(point) {
        var me = this;
        var margin = 1;
        var rect = me._rect;
        point = rotated(point, me.center(), -me._rotation);
        return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
    },
    // Separating Axis Theorem
    // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
    intersects: function(other) {
        var r0 = this._points();
        var r1 = other._points();
        var axes = [
            toAxis(r0[0], r0[1]),
            toAxis(r0[0], r0[3])
        ];
        var i, pr0, pr1;
        if (this._rotation !== other._rotation) // Only separate with r1 axis if the rotation is different,
        // else it's enough to separate r0 and r1 with r0 axis only!
        axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
        for(i = 0; i < axes.length; ++i){
            pr0 = projected(r0, axes[i]);
            pr1 = projected(r1, axes[i]);
            if (pr0.max < pr1.min || pr1.max < pr0.min) return false;
        }
        return true;
    },
    /**
   * @private
   */ _points: function() {
        var me = this;
        var rect = me._rect;
        var angle = me._rotation;
        var center = me.center();
        return [
            rotated({
                x: rect.x,
                y: rect.y
            }, center, angle),
            rotated({
                x: rect.x + rect.w,
                y: rect.y
            }, center, angle),
            rotated({
                x: rect.x + rect.w,
                y: rect.y + rect.h
            }, center, angle),
            rotated({
                x: rect.x,
                y: rect.y + rect.h
            }, center, angle)
        ];
    }
});
function coordinates(el, model, geometry) {
    var point = model.positioner(el, model);
    var vx = point.vx;
    var vy = point.vy;
    if (!vx && !vy) // if aligned center, we don't want to offset the center point
    return {
        x: point.x,
        y: point.y
    };
    var w = geometry.w;
    var h = geometry.h;
    // take in account the label rotation
    var rotation = model.rotation;
    var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
    var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));
    // scale the unit vector (vx, vy) to get at least dx or dy equal to
    // w or h respectively (else we would calculate the distance to the
    // ellipse inscribed in the bounding rect)
    var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
    dx *= vx * vs;
    dy *= vy * vs;
    // finally, include the explicit offset
    dx += model.offset * vx;
    dy += model.offset * vy;
    return {
        x: point.x + dx,
        y: point.y + dy
    };
}
function collide(labels, collider) {
    var i, j, s0, s1;
    // IMPORTANT Iterate in the reverse order since items at the end of the
    // list have an higher weight/priority and thus should be less impacted
    // by the overlapping strategy.
    for(i = labels.length - 1; i >= 0; --i){
        s0 = labels[i].$layout;
        for(j = i - 1; j >= 0 && s0._visible; --j){
            s1 = labels[j].$layout;
            if (s1._visible && s0._box.intersects(s1._box)) collider(s0, s1);
        }
    }
    return labels;
}
function compute(labels) {
    var i, ilen, label, state, geometry, center, proxy;
    // Initialize labels for overlap detection
    for(i = 0, ilen = labels.length; i < ilen; ++i){
        label = labels[i];
        state = label.$layout;
        if (state._visible) {
            // Chart.js 3 removed el._model in favor of getProps(), making harder to
            // abstract reading values in positioners. Also, using string arrays to
            // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
            // positioners inefficient in the normal case (i.e. not the final values)
            // and the code a bit ugly, so let's use a Proxy instead.
            proxy = new Proxy(label._el, {
                get: (el, p)=>el.getProps([
                        p
                    ], true)[p]
            });
            geometry = label.geometry();
            center = coordinates(proxy, label.model(), geometry);
            state._box.update(center, geometry, label.rotation());
        }
    }
    // Auto hide overlapping labels
    return collide(labels, function(s0, s1) {
        var h0 = s0._hidable;
        var h1 = s1._hidable;
        if (h0 && h1 || h1) s1._visible = false;
        else if (h0) s0._visible = false;
    });
}
var layout = {
    prepare: function(datasets) {
        var labels = [];
        var i, j, ilen, jlen, label;
        for(i = 0, ilen = datasets.length; i < ilen; ++i)for(j = 0, jlen = datasets[i].length; j < jlen; ++j){
            label = datasets[i][j];
            labels.push(label);
            label.$layout = {
                _box: new HitBox(),
                _hidable: false,
                _visible: true,
                _set: i,
                _idx: label._index
            };
        }
        // TODO New `z` option: labels with a higher z-index are drawn
        // of top of the ones with a lower index. Lowest z-index labels
        // are also discarded first when hiding overlapping labels.
        labels.sort(function(a, b) {
            var sa = a.$layout;
            var sb = b.$layout;
            return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
        });
        this.update(labels);
        return labels;
    },
    update: function(labels) {
        var dirty = false;
        var i, ilen, label, model, state;
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            label = labels[i];
            model = label.model();
            state = label.$layout;
            state._hidable = model && model.display === "auto";
            state._visible = label.visible();
            dirty |= state._hidable;
        }
        if (dirty) compute(labels);
    },
    lookup: function(labels, point) {
        var i, state;
        // IMPORTANT Iterate in the reverse order since items at the end of
        // the list have an higher z-index, thus should be picked first.
        for(i = labels.length - 1; i >= 0; --i){
            state = labels[i].$layout;
            if (state && state._visible && state._box.contains(point)) return labels[i];
        }
        return null;
    },
    draw: function(chart, labels) {
        var i, ilen, label, state, geometry, center;
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            label = labels[i];
            state = label.$layout;
            if (state._visible) {
                geometry = label.geometry();
                center = coordinates(label._el, label.model(), geometry);
                state._box.update(center, geometry, label.rotation());
                label.draw(chart, center);
            }
        }
    }
};
var formatter = function(value) {
    if ((0, _helpers.isNullOrUndef)(value)) return null;
    var label = value;
    var keys, klen, k;
    if ((0, _helpers.isObject)(value)) {
        if (!(0, _helpers.isNullOrUndef)(value.label)) label = value.label;
        else if (!(0, _helpers.isNullOrUndef)(value.r)) label = value.r;
        else {
            label = "";
            keys = Object.keys(value);
            for(k = 0, klen = keys.length; k < klen; ++k)label += (k !== 0 ? ", " : "") + keys[k] + ": " + value[keys[k]];
        }
    }
    return "" + label;
};
/**
 * IMPORTANT: make sure to also update tests and TypeScript definition
 * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
 */ var defaults = {
    align: "center",
    anchor: "center",
    backgroundColor: null,
    borderColor: null,
    borderRadius: 0,
    borderWidth: 0,
    clamp: false,
    clip: false,
    color: undefined,
    display: true,
    font: {
        family: undefined,
        lineHeight: 1.2,
        size: undefined,
        style: undefined,
        weight: null
    },
    formatter: formatter,
    labels: undefined,
    listeners: {},
    offset: 4,
    opacity: 1,
    padding: {
        top: 4,
        right: 4,
        bottom: 4,
        left: 4
    },
    rotation: 0,
    textAlign: "start",
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    textShadowBlur: 0,
    textShadowColor: undefined
};
/**
 * @see https://github.com/chartjs/Chart.js/issues/4176
 */ var EXPANDO_KEY = "$datalabels";
var DEFAULT_KEY = "$default";
function configure(dataset, options) {
    var override = dataset.datalabels;
    var listeners = {};
    var configs = [];
    var labels, keys;
    if (override === false) return null;
    if (override === true) override = {};
    options = (0, _helpers.merge)({}, [
        options,
        override
    ]);
    labels = options.labels || {};
    keys = Object.keys(labels);
    delete options.labels;
    if (keys.length) keys.forEach(function(key) {
        if (labels[key]) configs.push((0, _helpers.merge)({}, [
            options,
            labels[key],
            {
                _key: key
            }
        ]));
    });
    else // Default label if no "named" label defined.
    configs.push(options);
    // listeners: {<event-type>: {<label-key>: <fn>}}
    listeners = configs.reduce(function(target, config) {
        (0, _helpers.each)(config.listeners || {}, function(fn, event) {
            target[event] = target[event] || {};
            target[event][config._key || DEFAULT_KEY] = fn;
        });
        delete config.listeners;
        return target;
    }, {});
    return {
        labels: configs,
        listeners: listeners
    };
}
function dispatchEvent(chart, listeners, label, event) {
    if (!listeners) return;
    var context = label.$context;
    var groups = label.$groups;
    var callback$1;
    if (!listeners[groups._set]) return;
    callback$1 = listeners[groups._set][groups._key];
    if (!callback$1) return;
    if ((0, _helpers.callback)(callback$1, [
        context,
        event
    ]) === true) {
        // Users are allowed to tweak the given context by injecting values that can be
        // used in scriptable options to display labels differently based on the current
        // event (e.g. highlight an hovered label). That's why we update the label with
        // the output context and schedule a new chart render by setting it dirty.
        chart[EXPANDO_KEY]._dirty = true;
        label.update(context);
    }
}
function dispatchMoveEvents(chart, listeners, previous, label, event) {
    var enter, leave;
    if (!previous && !label) return;
    if (!previous) enter = true;
    else if (!label) leave = true;
    else if (previous !== label) leave = enter = true;
    if (leave) dispatchEvent(chart, listeners.leave, previous, event);
    if (enter) dispatchEvent(chart, listeners.enter, label, event);
}
function handleMoveEvents(chart, event) {
    var expando = chart[EXPANDO_KEY];
    var listeners = expando._listeners;
    var previous, label;
    if (!listeners.enter && !listeners.leave) return;
    if (event.type === "mousemove") label = layout.lookup(expando._labels, event);
    else if (event.type !== "mouseout") return;
    previous = expando._hovered;
    expando._hovered = label;
    dispatchMoveEvents(chart, listeners, previous, label, event);
}
function handleClickEvents(chart, event) {
    var expando = chart[EXPANDO_KEY];
    var handlers = expando._listeners.click;
    var label = handlers && layout.lookup(expando._labels, event);
    if (label) dispatchEvent(chart, handlers, label, event);
}
var plugin = {
    id: "datalabels",
    defaults: defaults,
    beforeInit: function(chart) {
        chart[EXPANDO_KEY] = {
            _actives: []
        };
    },
    beforeUpdate: function(chart) {
        var expando = chart[EXPANDO_KEY];
        expando._listened = false;
        expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}
        expando._datasets = []; // per dataset labels: [Label[]]
        expando._labels = []; // layouted labels: Label[]
    },
    afterDatasetUpdate: function(chart, args, options) {
        var datasetIndex = args.index;
        var expando = chart[EXPANDO_KEY];
        var labels = expando._datasets[datasetIndex] = [];
        var visible = chart.isDatasetVisible(datasetIndex);
        var dataset = chart.data.datasets[datasetIndex];
        var config = configure(dataset, options);
        var elements = args.meta.data || [];
        var ctx = chart.ctx;
        var i, j, ilen, jlen, cfg, key, el, label;
        ctx.save();
        for(i = 0, ilen = elements.length; i < ilen; ++i){
            el = elements[i];
            el[EXPANDO_KEY] = [];
            if (visible && el && chart.getDataVisibility(i) && !el.skip) for(j = 0, jlen = config.labels.length; j < jlen; ++j){
                cfg = config.labels[j];
                key = cfg._key;
                label = new Label(cfg, ctx, el, i);
                label.$groups = {
                    _set: datasetIndex,
                    _key: key || DEFAULT_KEY
                };
                label.$context = {
                    active: false,
                    chart: chart,
                    dataIndex: i,
                    dataset: dataset,
                    datasetIndex: datasetIndex
                };
                label.update(label.$context);
                el[EXPANDO_KEY].push(label);
                labels.push(label);
            }
        }
        ctx.restore();
        // Store listeners at the chart level and per event type to optimize
        // cases where no listeners are registered for a specific event.
        (0, _helpers.merge)(expando._listeners, config.listeners, {
            merger: function(event, target, source) {
                target[event] = target[event] || {};
                target[event][args.index] = source[event];
                expando._listened = true;
            }
        });
    },
    afterUpdate: function(chart) {
        chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
    },
    // Draw labels on top of all dataset elements
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
    afterDatasetsDraw: function(chart) {
        layout.draw(chart, chart[EXPANDO_KEY]._labels);
    },
    beforeEvent: function(chart, args) {
        // If there is no listener registered for this chart, `listened` will be false,
        // meaning we can immediately ignore the incoming event and avoid useless extra
        // computation for users who don't implement label interactions.
        if (chart[EXPANDO_KEY]._listened) {
            var event = args.event;
            switch(event.type){
                case "mousemove":
                case "mouseout":
                    handleMoveEvents(chart, event);
                    break;
                case "click":
                    handleClickEvents(chart, event);
                    break;
            }
        }
    },
    afterEvent: function(chart) {
        var expando = chart[EXPANDO_KEY];
        var previous = expando._actives;
        var actives = expando._actives = chart.getActiveElements();
        var updates = utils.arrayDiff(previous, actives);
        var i, ilen, j, jlen, update, label, labels;
        for(i = 0, ilen = updates.length; i < ilen; ++i){
            update = updates[i];
            if (update[1]) {
                labels = update[0].element[EXPANDO_KEY] || [];
                for(j = 0, jlen = labels.length; j < jlen; ++j){
                    label = labels[j];
                    label.$context.active = update[1] === 1;
                    label.update(label.$context);
                }
            }
        }
        if (expando._dirty || updates.length) {
            layout.update(expando._labels);
            chart.render();
        }
        delete expando._dirty;
    }
};

},{"chart.js/helpers":"7ZUAe","chart.js":"d3eK4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZUAe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersMjs = require("../dist/helpers.mjs");
parcelHelpers.exportAll(_helpersMjs, exports);

},{"../dist/helpers.mjs":"7gYQu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gYQu":[function(require,module,exports) {
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HALF_PI", ()=>(0, _helpersSegmentMjs.H));
parcelHelpers.export(exports, "INFINITY", ()=>(0, _helpersSegmentMjs.b1));
parcelHelpers.export(exports, "PI", ()=>(0, _helpersSegmentMjs.P));
parcelHelpers.export(exports, "PITAU", ()=>(0, _helpersSegmentMjs.b0));
parcelHelpers.export(exports, "QUARTER_PI", ()=>(0, _helpersSegmentMjs.b3));
parcelHelpers.export(exports, "RAD_PER_DEG", ()=>(0, _helpersSegmentMjs.b2));
parcelHelpers.export(exports, "TAU", ()=>(0, _helpersSegmentMjs.T));
parcelHelpers.export(exports, "TWO_THIRDS_PI", ()=>(0, _helpersSegmentMjs.b4));
parcelHelpers.export(exports, "_addGrace", ()=>(0, _helpersSegmentMjs.D));
parcelHelpers.export(exports, "_alignPixel", ()=>(0, _helpersSegmentMjs.J));
parcelHelpers.export(exports, "_alignStartEnd", ()=>(0, _helpersSegmentMjs.S));
parcelHelpers.export(exports, "_angleBetween", ()=>(0, _helpersSegmentMjs.p));
parcelHelpers.export(exports, "_angleDiff", ()=>(0, _helpersSegmentMjs.b5));
parcelHelpers.export(exports, "_arrayUnique", ()=>(0, _helpersSegmentMjs._));
parcelHelpers.export(exports, "_attachContext", ()=>(0, _helpersSegmentMjs.a9));
parcelHelpers.export(exports, "_bezierCurveTo", ()=>(0, _helpersSegmentMjs.at));
parcelHelpers.export(exports, "_bezierInterpolation", ()=>(0, _helpersSegmentMjs.aq));
parcelHelpers.export(exports, "_boundSegment", ()=>(0, _helpersSegmentMjs.ay));
parcelHelpers.export(exports, "_boundSegments", ()=>(0, _helpersSegmentMjs.ao));
parcelHelpers.export(exports, "_capitalize", ()=>(0, _helpersSegmentMjs.W));
parcelHelpers.export(exports, "_computeSegments", ()=>(0, _helpersSegmentMjs.an));
parcelHelpers.export(exports, "_createResolver", ()=>(0, _helpersSegmentMjs.aa));
parcelHelpers.export(exports, "_decimalPlaces", ()=>(0, _helpersSegmentMjs.aL));
parcelHelpers.export(exports, "_deprecated", ()=>(0, _helpersSegmentMjs.aU));
parcelHelpers.export(exports, "_descriptors", ()=>(0, _helpersSegmentMjs.ab));
parcelHelpers.export(exports, "_elementsEqual", ()=>(0, _helpersSegmentMjs.ai));
parcelHelpers.export(exports, "_factorize", ()=>(0, _helpersSegmentMjs.A));
parcelHelpers.export(exports, "_filterBetween", ()=>(0, _helpersSegmentMjs.aN));
parcelHelpers.export(exports, "_getParentNode", ()=>(0, _helpersSegmentMjs.a2));
parcelHelpers.export(exports, "_getStartAndCountOfVisiblePoints", ()=>(0, _helpersSegmentMjs.q));
parcelHelpers.export(exports, "_int16Range", ()=>(0, _helpersSegmentMjs.I));
parcelHelpers.export(exports, "_isBetween", ()=>(0, _helpersSegmentMjs.ak));
parcelHelpers.export(exports, "_isClickEvent", ()=>(0, _helpersSegmentMjs.aj));
parcelHelpers.export(exports, "_isDomSupported", ()=>(0, _helpersSegmentMjs.a6));
parcelHelpers.export(exports, "_isPointInArea", ()=>(0, _helpersSegmentMjs.$));
parcelHelpers.export(exports, "_limitValue", ()=>(0, _helpersSegmentMjs.E));
parcelHelpers.export(exports, "_longestText", ()=>(0, _helpersSegmentMjs.aM));
parcelHelpers.export(exports, "_lookup", ()=>(0, _helpersSegmentMjs.aO));
parcelHelpers.export(exports, "_lookupByKey", ()=>(0, _helpersSegmentMjs.Z));
parcelHelpers.export(exports, "_measureText", ()=>(0, _helpersSegmentMjs.G));
parcelHelpers.export(exports, "_merger", ()=>(0, _helpersSegmentMjs.aS));
parcelHelpers.export(exports, "_mergerIf", ()=>(0, _helpersSegmentMjs.aT));
parcelHelpers.export(exports, "_normalizeAngle", ()=>(0, _helpersSegmentMjs.az));
parcelHelpers.export(exports, "_parseObjectDataRadialScale", ()=>(0, _helpersSegmentMjs.y));
parcelHelpers.export(exports, "_pointInLine", ()=>(0, _helpersSegmentMjs.ar));
parcelHelpers.export(exports, "_readValueToProps", ()=>(0, _helpersSegmentMjs.al));
parcelHelpers.export(exports, "_rlookupByKey", ()=>(0, _helpersSegmentMjs.Y));
parcelHelpers.export(exports, "_scaleRangesChanged", ()=>(0, _helpersSegmentMjs.w));
parcelHelpers.export(exports, "_setMinAndMaxByKey", ()=>(0, _helpersSegmentMjs.aH));
parcelHelpers.export(exports, "_splitKey", ()=>(0, _helpersSegmentMjs.aV));
parcelHelpers.export(exports, "_steppedInterpolation", ()=>(0, _helpersSegmentMjs.ap));
parcelHelpers.export(exports, "_steppedLineTo", ()=>(0, _helpersSegmentMjs.as));
parcelHelpers.export(exports, "_textX", ()=>(0, _helpersSegmentMjs.aC));
parcelHelpers.export(exports, "_toLeftRightCenter", ()=>(0, _helpersSegmentMjs.R));
parcelHelpers.export(exports, "_updateBezierControlPoints", ()=>(0, _helpersSegmentMjs.am));
parcelHelpers.export(exports, "addRoundedRectPath", ()=>(0, _helpersSegmentMjs.av));
parcelHelpers.export(exports, "almostEquals", ()=>(0, _helpersSegmentMjs.aK));
parcelHelpers.export(exports, "almostWhole", ()=>(0, _helpersSegmentMjs.aJ));
parcelHelpers.export(exports, "callback", ()=>(0, _helpersSegmentMjs.C));
parcelHelpers.export(exports, "clearCanvas", ()=>(0, _helpersSegmentMjs.ag));
parcelHelpers.export(exports, "clipArea", ()=>(0, _helpersSegmentMjs.L));
parcelHelpers.export(exports, "clone", ()=>(0, _helpersSegmentMjs.aR));
parcelHelpers.export(exports, "color", ()=>(0, _helpersSegmentMjs.c));
parcelHelpers.export(exports, "createContext", ()=>(0, _helpersSegmentMjs.h));
parcelHelpers.export(exports, "debounce", ()=>(0, _helpersSegmentMjs.ae));
parcelHelpers.export(exports, "defined", ()=>(0, _helpersSegmentMjs.j));
parcelHelpers.export(exports, "distanceBetweenPoints", ()=>(0, _helpersSegmentMjs.aG));
parcelHelpers.export(exports, "drawPoint", ()=>(0, _helpersSegmentMjs.au));
parcelHelpers.export(exports, "drawPointLegend", ()=>(0, _helpersSegmentMjs.aE));
parcelHelpers.export(exports, "each", ()=>(0, _helpersSegmentMjs.Q));
parcelHelpers.export(exports, "easingEffects", ()=>(0, _helpersSegmentMjs.e));
parcelHelpers.export(exports, "finiteOrDefault", ()=>(0, _helpersSegmentMjs.B));
parcelHelpers.export(exports, "fontString", ()=>(0, _helpersSegmentMjs.a_));
parcelHelpers.export(exports, "formatNumber", ()=>(0, _helpersSegmentMjs.o));
parcelHelpers.export(exports, "getAngleFromPoint", ()=>(0, _helpersSegmentMjs.a0));
parcelHelpers.export(exports, "getHoverColor", ()=>(0, _helpersSegmentMjs.aQ));
parcelHelpers.export(exports, "getMaximumSize", ()=>(0, _helpersSegmentMjs.a1));
parcelHelpers.export(exports, "getRelativePosition", ()=>(0, _helpersSegmentMjs.X));
parcelHelpers.export(exports, "getRtlAdapter", ()=>(0, _helpersSegmentMjs.aA));
parcelHelpers.export(exports, "getStyle", ()=>(0, _helpersSegmentMjs.aZ));
parcelHelpers.export(exports, "isArray", ()=>(0, _helpersSegmentMjs.b));
parcelHelpers.export(exports, "isFinite", ()=>(0, _helpersSegmentMjs.g));
parcelHelpers.export(exports, "isFunction", ()=>(0, _helpersSegmentMjs.a8));
parcelHelpers.export(exports, "isNullOrUndef", ()=>(0, _helpersSegmentMjs.k));
parcelHelpers.export(exports, "isNumber", ()=>(0, _helpersSegmentMjs.x));
parcelHelpers.export(exports, "isObject", ()=>(0, _helpersSegmentMjs.i));
parcelHelpers.export(exports, "isPatternOrGradient", ()=>(0, _helpersSegmentMjs.aP));
parcelHelpers.export(exports, "listenArrayEvents", ()=>(0, _helpersSegmentMjs.l));
parcelHelpers.export(exports, "log10", ()=>(0, _helpersSegmentMjs.z));
parcelHelpers.export(exports, "merge", ()=>(0, _helpersSegmentMjs.V));
parcelHelpers.export(exports, "mergeIf", ()=>(0, _helpersSegmentMjs.ac));
parcelHelpers.export(exports, "niceNum", ()=>(0, _helpersSegmentMjs.aI));
parcelHelpers.export(exports, "noop", ()=>(0, _helpersSegmentMjs.aF));
parcelHelpers.export(exports, "overrideTextDirection", ()=>(0, _helpersSegmentMjs.aB));
parcelHelpers.export(exports, "readUsedSize", ()=>(0, _helpersSegmentMjs.a3));
parcelHelpers.export(exports, "renderText", ()=>(0, _helpersSegmentMjs.M));
parcelHelpers.export(exports, "requestAnimFrame", ()=>(0, _helpersSegmentMjs.r));
parcelHelpers.export(exports, "resolve", ()=>(0, _helpersSegmentMjs.a));
parcelHelpers.export(exports, "resolveObjectKey", ()=>(0, _helpersSegmentMjs.f));
parcelHelpers.export(exports, "restoreTextDirection", ()=>(0, _helpersSegmentMjs.aD));
parcelHelpers.export(exports, "retinaScale", ()=>(0, _helpersSegmentMjs.af));
parcelHelpers.export(exports, "setsEqual", ()=>(0, _helpersSegmentMjs.ah));
parcelHelpers.export(exports, "sign", ()=>(0, _helpersSegmentMjs.s));
parcelHelpers.export(exports, "splineCurve", ()=>(0, _helpersSegmentMjs.aX));
parcelHelpers.export(exports, "splineCurveMonotone", ()=>(0, _helpersSegmentMjs.aY));
parcelHelpers.export(exports, "supportsEventListenerOptions", ()=>(0, _helpersSegmentMjs.a5));
parcelHelpers.export(exports, "throttled", ()=>(0, _helpersSegmentMjs.a4));
parcelHelpers.export(exports, "toDegrees", ()=>(0, _helpersSegmentMjs.F));
parcelHelpers.export(exports, "toDimension", ()=>(0, _helpersSegmentMjs.n));
parcelHelpers.export(exports, "toFont", ()=>(0, _helpersSegmentMjs.O));
parcelHelpers.export(exports, "toFontString", ()=>(0, _helpersSegmentMjs.aW));
parcelHelpers.export(exports, "toLineHeight", ()=>(0, _helpersSegmentMjs.a$));
parcelHelpers.export(exports, "toPadding", ()=>(0, _helpersSegmentMjs.K));
parcelHelpers.export(exports, "toPercentage", ()=>(0, _helpersSegmentMjs.m));
parcelHelpers.export(exports, "toRadians", ()=>(0, _helpersSegmentMjs.t));
parcelHelpers.export(exports, "toTRBL", ()=>(0, _helpersSegmentMjs.aw));
parcelHelpers.export(exports, "toTRBLCorners", ()=>(0, _helpersSegmentMjs.ax));
parcelHelpers.export(exports, "uid", ()=>(0, _helpersSegmentMjs.ad));
parcelHelpers.export(exports, "unclipArea", ()=>(0, _helpersSegmentMjs.N));
parcelHelpers.export(exports, "unlistenArrayEvents", ()=>(0, _helpersSegmentMjs.u));
parcelHelpers.export(exports, "valueOrDefault", ()=>(0, _helpersSegmentMjs.v));
var _helpersSegmentMjs = require("./chunks/helpers.segment.mjs");

},{"./chunks/helpers.segment.mjs":"SiqvY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iVRgY"], null, "parcelRequire21de")

//# sourceMappingURL=chartjs-plugin-datalabels.esm.54483e4d.js.map
