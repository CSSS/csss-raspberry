"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sun;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Sun icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 */
function Sun(props) {
  const {
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "8"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "4",
    x2: "16",
    y2: "0"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "24.5",
    y1: "7.5",
    x2: "27.3",
    y2: "4.7"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "28",
    y1: "16",
    x2: "32",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "24.5",
    y1: "24.5",
    x2: "27.3",
    y2: "27.3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "16",
    y1: "28",
    x2: "16",
    y2: "32"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7.5",
    y1: "24.5",
    x2: "4.7",
    y2: "27.3"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "16",
    x2: "0",
    y2: "16"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "7.5",
    y1: "7.5",
    x2: "4.7",
    y2: "4.7"
  }));
}