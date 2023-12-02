"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
var _react = _interopRequireDefault(require("react"));
require("./Navbar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Horizontal navigation bar displayed at the top of the screen.
 * @param {Object} props
 * @param {String} props.align - Alignment of Navbar's children (between leading and trailing)
 * @param {Array} props.leading - Leading elements (usually icon, icon and title, or just title)
 * @param {Array} props.trailing - Trailing elements (usually page status information)
 * @param {Array} props.children - Child elements of Navbar
 */
function Navbar(props) {
  const {
    align,
    leading,
    trailing,
    revealer,
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-navigation-navbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "leading"
  }, leading), /*#__PURE__*/_react.default.createElement("div", {
    className: `children ${align}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "revealer"
  }, revealer || 'MENU'), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "trailing"
  }, trailing)));
}