"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var _react = _interopRequireDefault(require("react"));
require("./Page.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Main page.
 * @param {object} props
 * @param {array} props.children - Child elements of Page
 */
function Page(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mdb-page"
  }, children);
}