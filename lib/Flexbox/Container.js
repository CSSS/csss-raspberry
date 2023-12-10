import React from 'react';

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
 * @param {object} props.style - Additional styles
 * @param {array} props.children - Child elements of Container
 */
export default function Container(props) {
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
    style,
    children,
  } = props;

  const flexStyle = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    flexFlow: flow,
    rowGap,
    columnGap,
    gap,
    justifyContent,
    justifyItems,
    alignContent,
    ...style
  };

  return <div style={flexStyle}>{children}</div>;
}
