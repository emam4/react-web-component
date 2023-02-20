"use strict";

var _LeftSideNav = _interopRequireDefault(require("./components/LeftSideNav"));
var _reactToWebcomponent = _interopRequireDefault(require("react-to-webcomponent"));
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reactConponent = (0, _reactToWebcomponent.default)(_LeftSideNav.default, _react.default, _client.default);
customElements.define('test-comp', reactConponent);