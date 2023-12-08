"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireWildcard(require("react"));
require("./Button.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Button.
 * @param {Object} props
 * @param {String} props.type
 * - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon',
 *   'secondary icon', ...
 * @param {Function} props.onClick - Function to run when clicked
 * @param {String} props.href - URL to go to when clicked
 * @param {Array} props.children - Child elements of Button
 */
function Button(props) {
  const {
    type,
    onClick,
    href,
    children
  } = props;

  // any 'string' children should become <span> elements
  const mappedChildren = _react.Children.map(children, child => {
    return typeof child === 'string' ? /*#__PURE__*/_react.default.createElement("span", null, child) : child;
  });
  if (href !== undefined) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: `mdb-button ${type || ''}`,
      href: href
    }, mappedChildren);
  }
  return /*#__PURE__*/_react.default.createElement("button", {
    className: `mdb-button ${type || ''}`,
    onClick: onClick
  }, mappedChildren);
}