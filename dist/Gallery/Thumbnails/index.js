"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Thumbnails = require("./Thumbnails");
Object.keys(_Thumbnails).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Thumbnails[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Thumbnails[key];
    }
  });
});