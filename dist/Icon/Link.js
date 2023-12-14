"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Link;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Link (arrow) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 */
function Link(props) {
  const {
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', className || '']),
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "28",
    y1: "4",
    x2: "4",
    y2: "28"
  }), /*#__PURE__*/_react.default.createElement("polyline", {
    points: "12,4 28,4 28,20 "
  }));
}