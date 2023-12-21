"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = Option;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Option (rightwards arrow) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
function Option(props) {
  const {
    className,
    style
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    style: style
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20,8 28,16 20,24 "
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4,4c0,0,0,6,0,8s2,4,4,4s20,0,20,0"
  }));
}