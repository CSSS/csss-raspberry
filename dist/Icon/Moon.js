"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Moon;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Moon icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 */
function Moon(props) {
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
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M27.5,19.5C26,24.4,21.4,28,16,28C9.4,28,4,22.6,4,16c0-5.4,3.6-10,8.5-11.5C12.2,5.6,12,6.8,12,8c0,6.6,5.4,12,12,12C25.2,20,26.4,19.8,27.5,19.5z"
  }));
}