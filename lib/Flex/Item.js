import React from 'react';

/**
 * A flexbox item.
 * @param {object} props
 * @param {string} props.order
 * @param {string} props.grow
 * @param {string} props.shrink
 * @param {string} props.basis
 * @param {string} props.flex
 * @param {string} props.alignSelf
 * - See https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * @param {string} props.area - Grid area name
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {array} props.children - Child elements of Item
 */
export default function Item(props) {
  const {
    order,
    grow,
    shrink,
    basis,
    flex,
    alignSelf,
    area,
    style,
    className,
    children
  } = props;

  const flexStyle = {
    order,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    flex,
    alignSelf,
    gridArea: area,
    ...style
  };

  return <div style={flexStyle} className={className}>{children}</div>;
}
