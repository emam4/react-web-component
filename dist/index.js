"use strict";

var _SpecialButton = _interopRequireDefault(require("./components/SpecialButton1"));
var _reactToWebcomponent = _interopRequireDefault(require("react-to-webcomponent"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reactConponent = (0, _reactToWebcomponent.default)(_SpecialButton.default, _react.default, _reactDom.default);
customElements.define('test-comp', reactConponent);