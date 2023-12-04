"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
var _Icon = require("../Icon");
require("./Dropdown.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Dropdown menu.
 * @param {Object} props
 * @param {String} props.type - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon', 'secondary icon', ...
 * @param {String} props.text - Button text
 * @param {String} props.icon - Button icon; e.g., 'arrow', 'hamburger'
 * @param {String} props.align - Alignment of dropdown menu relative to button
 * @param {Array} props.children - Child elements of Dropdown
 */
function Dropdown(props) {
  const {
    type,
    text,
    icon,
    align,
    children
  } = props;
  const [isDroppedDown, setIsDroppedDown] = (0, _react.useState)(false);
  let iconElement = [];
  if (icon === 'arrow') {
    iconElement = isDroppedDown ? /*#__PURE__*/_react.default.createElement(_Icon.Arrow, {
      className: "rotate"
    }) : /*#__PURE__*/_react.default.createElement(_Icon.Arrow, null);
  } else if (icon === 'hamburger') {
    iconElement = isDroppedDown ? /*#__PURE__*/_react.default.createElement(_Icon.Cross, null) : /*#__PURE__*/_react.default.createElement(_Icon.Hamburger, null);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `mdb-dropdown ${type || ''}`,
    onBlur: e => {
      if (!e.currentTarget.contains(e.relatedTarget)) setIsDroppedDown(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: type,
    onClick: () => setIsDroppedDown(!isDroppedDown)
  }, text ? text : [], iconElement), /*#__PURE__*/_react.default.createElement("div", {
    className: `container ${align || 'center'} ${isDroppedDown ? '' : 'hidden'}`
  }, children));
}