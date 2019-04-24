/* eslint-disable */
if (document.currentScript) {
  const url = new URL(document.currentScript.src);
  __webpack_public_path__ = `${url.origin}${__webpack_public_path__}`;
  console.log(__webpack_public_path__);
}
