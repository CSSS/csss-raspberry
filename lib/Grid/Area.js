import React from 'react';

export default function Area(props) {
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

  return <div style={gridStyle}>{children}</div>;
}
