"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A grid item.
 * @param {object} props
 * @param {string} props.columnStart - Starting column for item or area
 * @param {string} props.columnEnd - Ending column for item or area
 * @param {string} props.rowStart - Starting row for item or area
 * @param {string} props.rowEnd - Ending row for item or area
 * @param {string} props.area
 * - Area name; should be used with areas for a grid container
 * @param {string} props.justifySelf
 * @param {string} props.alignSelf
 * - See https://css-tricks.com/snippets/css/complete-guide-grid/
 * @param {string} props.flex - Flex item grow, shrink, and basis shorthand
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {array} props.children - Child elements of Item
 */
function Item(props) {
  const {
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    justifySelf,
    alignSelf,
    flex,
    style,
    className,
    children
  } = props;
  const gridStyle = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    justifySelf,
    alignSelf,
    flex,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: gridStyle,
    className: className
  }, children);
}