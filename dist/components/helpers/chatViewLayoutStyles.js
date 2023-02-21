"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleButtonGroupStyle = exports.iconInactiveToggleButtonStyle = exports.iconActiveToggleButtonStyle = exports.ToggleButton = void 0;
var _ToggleButton = _interopRequireDefault(require("@mui/material/ToggleButton"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const toggleButtonGroupStyle = {
  border: '0px',
  width: '100%',
  justifyContent: 'flex-start',
  borderRadius: 15,
  textTransform: 'capitalize'
};
exports.toggleButtonGroupStyle = toggleButtonGroupStyle;
const iconInactiveToggleButtonStyle = {
  color: '#94A3B8',
  marginRight: 5
};
exports.iconInactiveToggleButtonStyle = iconInactiveToggleButtonStyle;
const iconActiveToggleButtonStyle = {
  color: '#2D7BDB',
  marginRight: 5
};
exports.iconActiveToggleButtonStyle = iconActiveToggleButtonStyle;
const ToggleButton = (0, _styles.styled)(_ToggleButton.default)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: '#3E721D',
    backgroundColor: '#fff'
  }
});
exports.ToggleButton = ToggleButton;