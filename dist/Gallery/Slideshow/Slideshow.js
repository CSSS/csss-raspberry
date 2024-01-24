"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slideshow = Slideshow;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../../Button");
var Flex = _interopRequireWildcard(require("../../Flex"));
var Icon = _interopRequireWildcard(require("../../Icon"));
var _helpers = require("../../helpers");
require("./Slideshow.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Gallery of photos as a slideshow.
 * @param {object} props
 * @param {array} props.photos - File paths to full-resolution photos
 * @param {array} props.thumbnails - File paths to photo thumbnails
 * @param {boolean} props.showControls - Whether to show or not show controls
 * @param {boolean} props.showCounter - Whether to show or not show the counter
 * @param {boolean} props.noSlide
 *  - Whether to not slide through photos automatically
 * @param {integer} props.pace - Pace to slide through photos (ms)
 * @param {object} props.className - Additional classes
 * @param {object} props.style - Additional styles
 */
function Slideshow(props) {
  const {
    photos,
    thumbnails,
    showControls,
    showCounter,
    noSlide,
    pace,
    className,
    style
  } = props;
  const [selected, setSelected] = (0, _react.useState)(0);
  const [photo, setPhoto] = (0, _react.useState)(null);
  const [playing, setPlaying] = (0, _react.useState)(true);
  function slide() {
    setPlaying(prevPlaying => {
      // only slide if playing
      if (prevPlaying) {
        setSelected(prevSelected => {
          let newSelected = prevSelected + 1;
          if (newSelected >= photos.length) newSelected = 0;
          return newSelected;
        });
      }

      // don't update playing
      return prevPlaying;
    });
  }
  function togglePlaying() {
    setPlaying(!noSlide && !playing ? true : false);
  }
  (0, _react.useEffect)(() => {
    setPhoto(thumbnails[selected]);

    // wait for the full resolution photo to load before updating photo
    const fullResPhoto = new Image();
    fullResPhoto.src = photos[selected];
    fullResPhoto.onload = () => setPhoto(photos[selected]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  (0, _react.useEffect)(() => {
    let intervalId = null;
    if (!noSlide) intervalId = setInterval(slide, pace || 5000);
    return () => {
      if (intervalId !== null) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const controls = /*#__PURE__*/_react.default.createElement(Flex.Container, {
    flow: "row nowrap",
    alignItems: "center",
    gap: "4px",
    className: "controls"
  }, showControls && !noSlide ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "small transparent icon",
    style: {
      padding: '6px'
    },
    onClick: togglePlaying
  }, playing ? /*#__PURE__*/_react.default.createElement(Icon.Pause, null) : /*#__PURE__*/_react.default.createElement(Icon.Play, null)) : [], showControls ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: (0, _helpers.classList)(['small transparent icon', playing ? 'disabled' : '']),
    style: {
      padding: '6px'
    },
    onClick: () => {
      if (playing) return;
      setSelected(selected > 0 ? selected - 1 : selected);
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.Arrow, {
    style: {
      transform: 'rotate(90deg)'
    }
  })) : [], showCounter ? /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: '0 8px',
      fontSize: '10pt'
    }
  }, selected + 1, " / ", photos.length) : [], showControls ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: (0, _helpers.classList)(['small transparent icon', playing ? 'disabled' : '']),
    style: {
      padding: '6px'
    },
    onClick: () => {
      if (playing) return;
      setSelected(selected < photos.length - 1 ? selected + 1 : selected);
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.Arrow, {
    style: {
      transform: 'rotate(-90deg)'
    }
  })) : []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _helpers.classList)(['mdb-gallery-slideshow', className]),
    style: style
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: photo,
    alt: selected
  }), showControls || showCounter ? controls : []);
}