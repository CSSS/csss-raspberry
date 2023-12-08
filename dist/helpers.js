"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMediaQuery = checkMediaQuery;
exports.watchMediaQuery = watchMediaQuery;
/**
 * Checks if a media query matches.
 * @param {String} query - The media query to check.
 * @returns {Boolean} - The result of checking the media query.
 */
function checkMediaQuery(query) {
  return window.matchMedia(query).matches;
}

/**
 * Watches a given media query, calling the provided function on change.
 * @param {String} query - The media query to watch.
 * @param {Function} onChange - The function to call on change.
 */
function watchMediaQuery(query, onChange) {
  window.matchMedia(query).addEventListener('change', e => onChange(e.matches));
}