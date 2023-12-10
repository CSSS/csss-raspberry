import React from 'react';

/**
 * A grid container.
 * @param {object} props
 * @param {string} props.columns
 * - Template for grid columns. White-space separated values, with optional
 *   names.
 * @param {string} props.rows
 * - Template for grid rows. White-space separated values, with optional names.
 * @param {array} props.areas
 * - Template for grid areas. Array of strings for each row. Each string should
 *   be white-space separated names for areas, '.' for empty cells, and 'none'
 *   for default settings.
 * @param {string} props.rowGap - Vertical gap between items
 * @param {string} props.columnGap - Horizontal gap between items
 * @param {string} props.gap - Shorthand for row and column; '2px 4px'
 * @param {string} props.justifyItems
 * @param {string} props.alignItems
 * @param {string} props.justifyContent
 * @param {string} props.alignContent
 * - See https://css-tricks.com/snippets/css/complete-guide-grid/
 * @param {object} props.style - Additional styles
 * @param {array} props.children - Child elements of Container
 */
export default function Container(props) {
  const {
    columns,
    rows,
    areas,
    rowGap,
    columnGap,
    gap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    style,
    children
  } = props;

  let areasString = '';

  // compute areas string
  areas.forEach((area, index) => {
    areasString += `"${area}"${index < areas.length - 1 ? ' ' : ''}`;
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gridTemplateAreas: areasString,
    rowGap,
    columnGap,
    gap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    ...style
  };

  return <div style={gridStyle}>{children}</div>;
}
