"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Area;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Area(props) {
  const {
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    style,
    children
  } = props;
  const gridStyle = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: gridStyle
  }, children);
}