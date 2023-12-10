import React from 'react';

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
 * @param {object} props.style - Additional styles
 * @param {array} props.children - Child elements of Item
 */
export default function Item(props) {
  const {
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    justifySelf,
    alignSelf,
    style,
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
    ...style
  };

  return <div style={gridStyle}>{children}</div>;
}
