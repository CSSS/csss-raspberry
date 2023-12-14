"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;
var _react = _interopRequireDefault(require("react"));
var Flex = _interopRequireWildcard(require("../../Flex"));
require("./Sidebar.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Vertical navigation bar. Position is decided upon by usage.
 * @param {object} props
 * @param {array} props.children - Child elements of Sidebar
 */
function Sidebar(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    className: "mdb-navigation-sidebar"
  }, children);
}