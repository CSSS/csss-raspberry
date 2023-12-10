/**
 * Checks if a media query matches.
 * @param {string} query - The media query to check.
 * @returns {boolean} - The result of checking the media query.
 */
export function checkMediaQuery(query) {
  return window.matchMedia(query).matches;
}

/**
 * Watches a given media query, calling the provided function on change.
 * @param {string} query - The media query to watch.
 * @param {function} onChange - The function to call on change.
 */
export function watchMediaQuery(query, onChange) {
  window.matchMedia(query).addEventListener('change', e => onChange(e.matches));
}
