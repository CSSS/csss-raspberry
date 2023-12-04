"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Option;
var _react = _interopRequireDefault(require("react"));
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Option (rightwards arrow) icon.
 * @param {Object} props
 * @param {String} props.className - Additional class(es) for SVG icon
 */
function Option(props) {
  const {
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: `mdb-icon ${className || ''}`,
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20,8 28,16 20,24 "
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4,4c0,0,0,6,0,8s2,4,4,4s20,0,20,0"
  }));
}