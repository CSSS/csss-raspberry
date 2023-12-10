"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hamburger;
var _react = _interopRequireDefault(require("react"));
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Hamburger menu icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 */
function Hamburger(props) {
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
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "8",
    x2: "28",
    y2: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "16",
    x2: "28",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "24",
    x2: "28",
    y2: "24"
  }));
}