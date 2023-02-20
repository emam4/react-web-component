import React, { useState } from 'react';
import { Box, Stack, ToggleButtonGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';

// icons from @mui
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// images from assets
import avocadoSVG from './images/avocado.svg';
import profileImage from './images/nour.jpg';
import languageIcon from './images/english.webp';

// from helpers
import * as styles from './helpers/chatViewLayoutStyles';

const SideNav = () => {
  const [currentTap, setCurrentTab] = useState<string | null>(null)
  const [isActive, setActive] = useState<any>({});


  const handleChange = (
    event,
    newTab
  ) => {
    setCurrentTab(newTab);
    setActive({[newTab]:true})
  };


  return (
    <Box
      sx={{
        height: "100vh",
        width: 72,
        backgroundColor: "#F2F4F7",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}>
        <Stack alignItems={"center"} spacing={2}>
          <Box sx={{  //Avocado Logo 
            display: "flex",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 1.5,
            border: "1px solid #E6E7EB",
            backgroundColor: "#F8FAFB",
            mt: 3
          }} p={.6}>
            <img alt='avocado icon' src={avocadoSVG} />
          </Box>

          {/* container of items */}
          <Stack direction={"column"} alignItems={"center"} spacing={1}>
            <ToggleButtonGroup orientation='vertical'
              onChange={handleChange} value={currentTap} exclusive>



              <styles.ToggleButton aria-label='Dashboard' style={styles.toggleButtonGroupStyle} value='Dashboard'>
                <DashboardIcon style={isActive.Dashboard ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Library'  style={styles.toggleButtonGroupStyle} value='Library'>
                <LibraryAddIcon style={isActive.Library ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Chat'  style={styles.toggleButtonGroupStyle} value='Chat'>
                <ChatIcon style={isActive.Chat ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Account'  style={styles.toggleButtonGroupStyle} value='Account'>
                <AccountBoxIcon style={isActive.Account ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Search' style={styles.toggleButtonGroupStyle} value='Search'>
                <SearchIcon style={isActive.Search ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Apps'  style={styles.toggleButtonGroupStyle} value='Apps'>
                <AppsIcon style={isActive.Apps ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>



              <styles.ToggleButton aria-label='Settings'  style={styles.toggleButtonGroupStyle} value='Settings'>
                <SettingsIcon style={isActive.Settings ? styles.iconActiveToggleButtonStyle : styles.iconInactiveToggleButtonStyle} />
              </styles.ToggleButton>

            </ToggleButtonGroup>
          </Stack>
        </Stack>

        <Stack display={"flex"} flexDirection={"column-reverse"} alignItems={"center"}>
          <Avatar alt="Profile Image" src={profileImage} sx={{ mb: '20px' }} />

          <NotificationsNoneOutlinedIcon sx={{ mb: '20px', borderRadius: 50 }} style={{ color: '#94A3B8' }} />

          <Avatar alt="Language" src={languageIcon} sx={{ mb: '20px' }} />
        </Stack>
      </Stack>

    </Box>
  );
}

export default SideNav;