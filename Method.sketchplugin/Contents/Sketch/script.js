var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: settings, MethodPage, About, Round, MoveRight, MoveTop, MoveLeft, MoveDown, ResizeRight, ResizeLeft, ResizeTop, ResizeDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodPage", function() { return MethodPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Round", function() { return Round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveRight", function() { return MoveRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveTop", function() { return MoveTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveLeft", function() { return MoveLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveDown", function() { return MoveDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeRight", function() { return ResizeRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeLeft", function() { return ResizeLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeTop", function() { return ResizeTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeDown", function() { return ResizeDown; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var document = sketch.getSelectedDocument();
var selectedLayers = document.selectedLayers;
var selectedCount = selectedLayers.length;
var Rectangle = sketch.Rectangle;
var Settings = sketch.Settings;
var UI = sketch.UI;
var pxSeleccion = parseInt(Settings.settingForKey('miMultiploPreferido'));
/* ************************************************************** */

function settings(context) {
  var theme = UI.getTheme();

  if (theme === 'dark') {} else {}

  UI.getInputFromUser("Select the value of which all actions will be multiple", {
    initialValue: Settings.settingForKey('miMultiploPreferido') || '8',
    type: UI.INPUT_TYPE.selection,
    possibleValues: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
  }, function (err, value) {
    if (err) {
      return;
    }

    Settings.setSettingForKey('miMultiploPreferido', value);
  });
}
;
/* ************************************************************** */

function MethodPage(context) {
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://www.kikesainz.com/method/"));
}
;
function About(context) {
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("http://www.kikesainz.com/"));
}
;
/* ************************************************************** */

function Round(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected.😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      var resizeW = layer.frame.width % pxSeleccion;
      var resizeH = layer.frame.height % pxSeleccion;

      if (resizeW >= pxSeleccion / 2) {
        resizeW = resizeW - pxSeleccion;
      }

      if (resizeH >= pxSeleccion / 2) {
        resizeH = resizeH - pxSeleccion;
      }

      layer.frame = new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width - resizeW, layer.frame.height - resizeH);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function MoveRight(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x + pxSeleccion, layer.frame.y, layer.frame.width, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function MoveTop(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y - pxSeleccion, layer.frame.width, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function MoveLeft(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x - pxSeleccion, layer.frame.y, layer.frame.width, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function MoveDown(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y + pxSeleccion, layer.frame.width, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function ResizeRight(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width + pxSeleccion, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function ResizeLeft(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width - pxSeleccion, layer.frame.height);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function ResizeTop(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height - pxSeleccion);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;
function ResizeDown(context) {
  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected 😅');
  } else {
    selectedLayers.forEach(function (layer, i) {
      layer.frame = new Rectangle(layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height + pxSeleccion);
      document.sketchObject.inspectorController().reload();
    });
  }
}
;

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['settings'] = __skpm_run.bind(this, 'settings');
that['onRun'] = __skpm_run.bind(this, 'default');
that['MethodPage'] = __skpm_run.bind(this, 'MethodPage');
that['About'] = __skpm_run.bind(this, 'About');
that['Round'] = __skpm_run.bind(this, 'Round');
that['MoveRight'] = __skpm_run.bind(this, 'MoveRight');
that['MoveLeft'] = __skpm_run.bind(this, 'MoveLeft');
that['MoveTop'] = __skpm_run.bind(this, 'MoveTop');
that['MoveDown'] = __skpm_run.bind(this, 'MoveDown');
that['ResizeRight'] = __skpm_run.bind(this, 'ResizeRight');
that['ResizeLeft'] = __skpm_run.bind(this, 'ResizeLeft');
that['ResizeTop'] = __skpm_run.bind(this, 'ResizeTop');
that['ResizeDown'] = __skpm_run.bind(this, 'ResizeDown')

//# sourceMappingURL=script.js.map