"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bar;
var _react = _interopRequireDefault(require("react"));
var _Dropdown = _interopRequireDefault(require("../../Dropdown"));
var Flex = _interopRequireWildcard(require("../../Flex"));
require("./Bar.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Horizontal navigation bar displayed at the top of the screen.
 * @param {object} props
 * @param {string} props.align
 * - Alignment of Bar's children (between leading and trailing)
 * @param {array} props.leading
 * - Leading elements (usually icon, icon and title, or just title)
 * @param {array} props.trailing
 * - Trailing elements (usually page status information)
 * @param {boolean} props.compress
 * - Whether to compress the navigation bar or not
 * @param {array} props.children - Child elements of Bar
 */
function Bar(props) {
  const {
    align,
    leading,
    trailing,
    compress,
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-navigation-bar"
  }, /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    className: "mdb-navigation-bar-flex"
  }, /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center"
  }, leading, align === 'left' && !compress ? children : []), compress ? /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    className: "transparent large icon",
    align: "navigation-bar-stretch",
    icon: "hamburger"
  }, children, /*#__PURE__*/_react.default.createElement("hr", null), trailing) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !align || align === 'center' ? /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    className: "mdb-navigation-bar-flex-center"
  }, children) : [], /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center"
  }, align === 'right' ? children : [], trailing))));
}