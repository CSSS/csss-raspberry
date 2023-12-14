"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
var Flex = _interopRequireWildcard(require("../Flex"));
var _Icon = require("../Icon");
var _helpers = require("../helpers");
require("./Dropdown.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Dropdown menu.
 * @param {object} props
 * @param {string} props.className
 * - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon',
 *   'secondary icon', ..., and/or size of button; e.g., 'small'
 * @param {string} props.style - Additional styles (for the Button)
 * @param {integer} props.depth - Depth of menu
 * @param {array} props.text - Button text
 * @param {string} props.icon - Button icon; e.g., 'arrow', 'hamburger'
 * @param {string} props.iconAlign
 * - Alignment of dropdown icon; e.g., 'left', 'right'; default is right align
 * @param {string} props.align - Alignment of dropdown menu relative to button
 * @param {boolean} props.isDroppedDownInitially
 * - Whether to be dropped down initially or not
 * @param {boolean} props.isStaticDropdown
 * - Whether to display dropdown items statically or not
 * @param {array} props.children - Child elements of Dropdown
 */
function Dropdown(props) {
  const {
    className,
    style,
    depth,
    text,
    icon,
    iconAlign,
    align,
    isDroppedDownInitially,
    isStaticDropdown,
    children
  } = props;
  const [isDroppedDown, setIsDroppedDown] = (0, _react.useState)(!!isDroppedDownInitially);
  let iconElement = [];
  if (icon === 'arrow') {
    if (isStaticDropdown) {
      iconElement = isDroppedDown ? /*#__PURE__*/_react.default.createElement(_Icon.Arrow, null) : /*#__PURE__*/_react.default.createElement(_Icon.Arrow, {
        className: "rotate90"
      });
    } else {
      iconElement = isDroppedDown ? /*#__PURE__*/_react.default.createElement(_Icon.Arrow, {
        className: "rotate180"
      }) : /*#__PURE__*/_react.default.createElement(_Icon.Arrow, null);
    }
  } else if (icon === 'hamburger') {
    iconElement = isDroppedDown ? /*#__PURE__*/_react.default.createElement(_Icon.Cross, null) : /*#__PURE__*/_react.default.createElement(_Icon.Hamburger, null);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-dropdown",
    onBlur: e => {
      if (!e.currentTarget.contains(e.relatedTarget) && !isStaticDropdown) setIsDroppedDown(false);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, text ? text : 'Menu'), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: className,
    style: style,
    depth: depth,
    onClick: () => setIsDroppedDown(!isDroppedDown)
  }, iconAlign === 'left' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, iconElement, text ? text : []) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, text ? text : [], iconElement)), /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    className: (0, _helpers.classList)(['mdb-dropdown-flex', align || 'center', isDroppedDown ? '' : 'hidden', isStaticDropdown ? 'static' : ''])
  }, children));
}