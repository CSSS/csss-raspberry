import React from 'react';

/**
 * A grid container.
 * @param {Object} props
 * @param {String} props.columns
 * - Template for grid columns. White-space separated values, with optional
 *   names.
 * @param {String} props.rows
 * - Template for grid rows. White-space separated values, with optional names.
 * @param {Array} props.areas
 * - Template for grid areas. Array of strings for each row. Each string should
 *   be white-space separated names for areas, '.' for empty cells, and 'none'
 *   for default settings.
 * @param {Object} props.style - Additional styles
 * @param {Object} props.children - Child elements of Container
 */
export default function Container(props) {
  const {
    columns,
    rows,
    areas,
    gap,
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
    gridGap: gap,
    ...style
  };

  return <div style={gridStyle}>{children}</div>;
}
