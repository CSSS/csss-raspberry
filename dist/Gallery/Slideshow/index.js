"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Slideshow = require("./Slideshow");
Object.keys(_Slideshow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Slideshow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Slideshow[key];
    }
  });
});