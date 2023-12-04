"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
var _react = _interopRequireWildcard(require("react"));
var _Dropdown = _interopRequireDefault(require("../../Dropdown"));
require("./Navbar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
    children
  } = props;
  const [isSmallScreen, setIsSmallScreen] = (0, _react.useState)(window.matchMedia('(min-width: 768px)').matches);
  (0, _react.useEffect)(() => {
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => setIsSmallScreen(e.matches));
  }, []);
  if (isSmallScreen) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "mdb-navigation-navbar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "group"
    }, leading), /*#__PURE__*/_react.default.createElement("div", {
      className: `group children ${align || ''}`
    }, children), /*#__PURE__*/_react.default.createElement("div", {
      className: "group"
    }, trailing))), /*#__PURE__*/_react.default.createElement("div", {
      className: "mdb-navigation-navbar-spacer"
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-navigation-navbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "group"
  }, leading), /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    type: "nav icon",
    align: "right",
    icon: "hamburger"
  }, children, /*#__PURE__*/_react.default.createElement("hr", null), trailing))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-navigation-navbar-spacer"
  }));
}