"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _LibraryAdd = _interopRequireDefault(require("@mui/icons-material/LibraryAdd"));
var _Dashboard = _interopRequireDefault(require("@mui/icons-material/Dashboard"));
var _Chat = _interopRequireDefault(require("@mui/icons-material/Chat"));
var _AccountBox = _interopRequireDefault(require("@mui/icons-material/AccountBox"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Apps = _interopRequireDefault(require("@mui/icons-material/Apps"));
var _Settings = _interopRequireDefault(require("@mui/icons-material/Settings"));
var _NotificationsNoneOutlined = _interopRequireDefault(require("@mui/icons-material/NotificationsNoneOutlined"));
var _avocado = _interopRequireDefault(require("./images/avocado.svg"));
var _nour = _interopRequireDefault(require("./images/nour.jpg"));
var _english = _interopRequireDefault(require("./images/english.webp"));
var styles = _interopRequireWildcard(require("./helpers/chatViewLayoutStyles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// icons from @mui

// images from assets

// from helpers

const SideNav = () => {
  const [currentTap, setCurrentTab] = _react.useState < string | null > null;
  const [isActive, setActive] = _react.useState < any > {};
  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
    setActive({
      [newTab]: true
    });
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      height: "100vh",
      width: 72,
      backgroundColor: "#F2F4F7",
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      //Avocado Logo 
      display: "flex",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 1.5,
      border: "1px solid #E6E7EB",
      backgroundColor: "#F8FAFB",
      mt: 3
    },
    p: .6
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "avocado icon",
    src: _avocado.default
  })), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "column",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_material.ToggleButtonGroup, {
    orientation: "vertical",
    onChange: handleChange,
    value: currentTap,
    exclusive: true
  }, /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Dashboard",
    style: styles.toggleButtonGroupStyle,
    value: "Dashboard"
  }, /*#__PURE__*/_react.default.createElement(_Dashboard.default, {
    style: isActive.Dashboard ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Library",
    style: styles.toggleButtonGroupStyle,
    value: "Library"
  }, /*#__PURE__*/_react.default.createElement(_LibraryAdd.default, {
    style: isActive.Library ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Chat",
    style: styles.toggleButtonGroupStyle,
    value: "Chat"
  }, /*#__PURE__*/_react.default.createElement(_Chat.default, {
    style: isActive.Chat ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Account",
    style: styles.toggleButtonGroupStyle,
    value: "Account"
  }, /*#__PURE__*/_react.default.createElement(_AccountBox.default, {
    style: isActive.Account ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Search",
    style: styles.toggleButtonGroupStyle,
    value: "Search"
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    style: isActive.Search ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Apps",
    style: styles.toggleButtonGroupStyle,
    value: "Apps"
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, {
    style: isActive.Apps ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(styles.ToggleButton, {
    "aria-label": "Settings",
    style: styles.toggleButtonGroupStyle,
    value: "Settings"
  }, /*#__PURE__*/_react.default.createElement(_Settings.default, {
    style: isActive.Settings ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle
  }))))), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "Profile Image",
    src: _nour.default,
    sx: {
      mb: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_NotificationsNoneOutlined.default, {
    sx: {
      mb: '20px',
      borderRadius: 50
    },
    style: {
      color: '#94A3B8'
    }
  }), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "Language",
    src: _english.default,
    sx: {
      mb: '20px'
    }
  }))));
};
var _default = SideNav;
exports.default = _default;