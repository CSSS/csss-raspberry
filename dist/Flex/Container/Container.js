"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../../helpers");
require("./Container.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A flexbox container.
 * @param {object} props
 * @param {string} props.direction - Direction of flex items (row, or column)
 * @param {string} props.wrap
 * - Whether to wrap items if width is exceeded. (E.g., wrap, nowrap,
 *   wrap-reverse.)
 * @param {string} props.flow - Shorthand for direction and wrap; 'row nowrap'
 * @param {string} props.rowGap - Vertical gap between items
 * @param {string} props.columnGap - Horizontal gap between items
 * @param {string} props.gap - Shorthand for row and column; '2px 4px'
 * @param {string} props.justifyContent
 * @param {string} props.alignItems
 * @param {string} props.alignContent
 * - See https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * @param {string} props.flex - Flex item grow, shrink, and basis shorthand
 * @param {string} props.area - Grid area name
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {array} props.children - Child elements of Container
 */
function Container(props) {
  const {
    direction,
    wrap,
    flow,
    rowGap,
    columnGap,
    gap,
    justifyContent,
    alignItems,
    alignContent,
    flex,
    area,
    style,
    className,
    children
  } = props;
  const flexStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    flexFlow: flow,
    rowGap,
    columnGap,
    gap,
    justifyContent,
    alignItems,
    alignContent,
    flex,
    gridArea: area,
    ...style
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: flexStyle,
    className: (0, _helpers.classList)(['mdb-flex-container', className])
  }, children);
}