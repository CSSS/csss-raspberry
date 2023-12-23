"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumbnails = Thumbnails;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../../Button");
var Flex = _interopRequireWildcard(require("../../Flex"));
var Icon = _interopRequireWildcard(require("../../Icon"));
var _helpers = require("../../helpers");
require("./Thumbnails.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Gallery of photos with thumbnails.
 * @param {object} props
 * @param {array} props.photos - File paths to full-resolution photos
 * @param {array} props.thumbnails - File paths to photo thumbnails
 * @param {string} props.maxWidth
 * - Maximum width for the selected photo (not expanded) (CSS expression)
 * @param {string} props.maxHeight
 * - Maximum height for the selected photo (not expanded) (CSS expression)
 */
function Thumbnails(props) {
  const {
    photos,
    thumbnails,
    maxWidth,
    maxHeight
  } = props;
  const [selected, setSelected] = (0, _react.useState)(0);
  const [expand, setExpand] = (0, _react.useState)(false);
  const photo = /*#__PURE__*/_react.default.createElement("img", {
    src: photos[selected - 1],
    alt: `${selected}`,
    onClick: () => setExpand(true),
    className: "mdb-gallery-thumbnails-img",
    style: {
      maxWidth: expand ? '100%' : maxWidth,
      maxHeight: expand ? '100%' : maxHeight,
      backgroundImage: `url(${thumbnails[selected - 1]})`
    }
  });
  const controls = /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    alignItems: "center",
    gap: "8px"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "small transparent icon",
    style: {
      padding: '6px'
    },
    onClick: () => {
      setSelected(selected > 1 ? selected - 1 : selected);
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.Arrow, {
    style: {
      transform: 'rotate(90deg)'
    }
  })), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: '0 8px',
      fontSize: '10pt'
    }
  }, selected, " / ", photos.length), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "small transparent icon",
    style: {
      padding: '6px'
    },
    onClick: () => {
      setSelected(selected < photos.length ? selected + 1 : selected);
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.Arrow, {
    style: {
      transform: 'rotate(-90deg)'
    }
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "small transparent icon",
    style: {
      padding: '6px'
    },
    onClick: () => {
      setSelected(0);
      setExpand(false);
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.Cross, null)), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "small transparent icon",
    style: {
      padding: '6px'
    },
    onClick: () => setExpand(!expand)
  }, expand ? /*#__PURE__*/_react.default.createElement(Icon.Shrink, null) : /*#__PURE__*/_react.default.createElement(Icon.Expand, null)));
  return /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "column nowrap",
    alignItems: "flex-start",
    gap: "2px"
  }, selected !== 0 ? /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    gap: expand ? '8px' : '2px',
    className: expand ? 'mdb-gallery-thumbnails-flex-expand' : undefined
  }, expand ? /*#__PURE__*/_react.default.createElement(Flex.Item, {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: photos[selected - 1]
  }, photo)) : photo, controls) : /*#__PURE__*/_react.default.createElement("p", {
    className: "mdb-gallery-thumbnails-prompt"
  }, "Click on a photo to view it."), /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row wrap",
    alignItems: "center",
    gap: "4px"
  }, thumbnails.map((thumbnail, index) => /*#__PURE__*/_react.default.createElement("img", {
    src: thumbnail,
    alt: `${index + 1} (Thumbnail)`,
    onClick: () => setSelected(index + 1),
    className: (0, _helpers.classList)(['mdb-gallery-thumbnails-thumbnail', selected === index + 1 ? 'selected' : ''])
  }))));
}