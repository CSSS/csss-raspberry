"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Arrow;
var _react = _interopRequireDefault(require("react"));
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Arrow icon.
 * @param {Object} props
 * @param {String} props.className - Additional class(es) for SVG icon
 */
function Arrow(props) {
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
    points: "4,12 16,24 28,12 "
  }));
}