"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Film = Film;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
require("./Icon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Photographic film icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
function Film(props) {
  const {
    className,
    style
  } = props;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: (0, _helpers.classList)(['mdb-icon', 'mdb-icon-film', className || '']),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    style: style
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,1.3h1.3c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3H0v1.3h0.7C1.4,6.7,2,7.3,2,8v16c0,0.7-0.6,1.3-1.3,1.3H0v1.3h1.3 c0.7,0,1.3,0.6,1.3,1.3v1.3c0,0.7-0.6,1.3-1.3,1.3H0V32h32v-1.3h-1.3c-0.7,0-1.3-0.6-1.3-1.3V28c0-0.7,0.6-1.3,1.3-1.3H32v-1.3h-0.7 c-0.7,0-1.3-0.6-1.3-1.3V8c0-0.7,0.6-1.3,1.3-1.3H32V5.3h-1.3c-0.7,0-1.3-0.6-1.3-1.3V2.7c0-0.7,0.6-1.3,1.3-1.3H32V0H0V1.3z M25.3,26.7c0.7,0,1.3,0.6,1.3,1.3v1.3c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V28c0-0.7,0.6-1.3,1.3-1.3H25.3z M17.3,26.7c0.7,0,1.3,0.6,1.3,1.3v1.3c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V28c0-0.7,0.6-1.3,1.3-1.3H17.3z M9.3,26.7c0.7,0,1.3,0.6,1.3,1.3v1.3c0,0.7-0.6,1.3-1.3,1.3H6.7c-0.7,0-1.3-0.6-1.3-1.3V28c0-0.7,0.6-1.3,1.3-1.3H9.3z M28,6.7 c0.7,0,1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3H4c-0.7,0-1.3-0.6-1.3-1.3V8c0-0.7,0.6-1.3,1.3-1.3H28z M25.3,1.3 c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V2.7c0-0.7,0.6-1.3,1.3-1.3H25.3z M17.3,1.3 c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3h-2.7c-0.7,0-1.3-0.6-1.3-1.3V2.7c0-0.7,0.6-1.3,1.3-1.3H17.3z M9.3,1.3 c0.7,0,1.3,0.6,1.3,1.3V4c0,0.7-0.6,1.3-1.3,1.3H6.7C5.9,5.3,5.3,4.7,5.3,4V2.7c0-0.7,0.6-1.3,1.3-1.3H9.3z"
  }));
}