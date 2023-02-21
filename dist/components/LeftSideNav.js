"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNav = void 0;
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
var _chatViewLayoutStyles = require("./helpers/chatViewLayoutStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// icons from @mui

// from helpers

const SideNav = () => {
  const [currentTap, setCurrentTab] = (0, _react.useState)(null);
  const [isActive, setActive] = (0, _react.useState)({});
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
    src: "https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/avocado.svg"
  })), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "column",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_material.ToggleButtonGroup, {
    orientation: "vertical",
    onChange: handleChange,
    value: currentTap,
    exclusive: true
  }, /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Dashboard",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Dashboard"
  }, /*#__PURE__*/_react.default.createElement(_Dashboard.default, {
    style: isActive.Dashboard ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Library",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Library"
  }, /*#__PURE__*/_react.default.createElement(_LibraryAdd.default, {
    style: isActive.Library ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Chat",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Chat"
  }, /*#__PURE__*/_react.default.createElement(_Chat.default, {
    style: isActive.Chat ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Account",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Account"
  }, /*#__PURE__*/_react.default.createElement(_AccountBox.default, {
    style: isActive.Account ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Search",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Search"
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    style: isActive.Search ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Apps",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Apps"
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, {
    style: isActive.Apps ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  })), /*#__PURE__*/_react.default.createElement(_chatViewLayoutStyles.ToggleButton, {
    "aria-label": "Settings",
    style: _chatViewLayoutStyles.toggleButtonGroupStyle,
    value: "Settings"
  }, /*#__PURE__*/_react.default.createElement(_Settings.default, {
    style: isActive.Settings ? _chatViewLayoutStyles.iconActiveToggleButtonStyle : _chatViewLayoutStyles.iconInactiveToggleButtonStyle
  }))))), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "Profile Image",
    src: "https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/nour.jpg",
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
    src: "https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/english.webp",
    sx: {
      mb: '20px'
    }
  }))));
};
exports.SideNav = SideNav;