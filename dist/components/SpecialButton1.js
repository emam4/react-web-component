"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import * as ReactDOM from "react-dom/client"
// When using React 16 and 17 import ReactDom with the commented statement below instead:
// import ReactDom from "react-dom"

const Greeting = _ref => {
  let {
    name
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hi from react"), /*#__PURE__*/_react.default.createElement("h6", null, "testing web components"));
};
var _default = Greeting;
exports.default = _default;