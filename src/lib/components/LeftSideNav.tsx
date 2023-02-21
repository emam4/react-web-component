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

// from helpers
import { toggleButtonGroupStyle, iconInactiveToggleButtonStyle, iconActiveToggleButtonStyle, ToggleButton } from './helpers/chatViewLayoutStyles';

export const SideNav = (): JSX.Element => {
  const [currentTap, setCurrentTab] = useState<string | null>(null)
  const [isActive, setActive] = useState<any>({});


  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTab: string,
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
            <img alt='avocado icon' 
            src="https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/avocado.svg" />
          </Box>

          {/* container of items */}
          <Stack direction={"column"} alignItems={"center"} spacing={1}>
            <ToggleButtonGroup orientation='vertical'
              onChange={handleChange} value={currentTap} exclusive>



              <ToggleButton aria-label='Dashboard' style={toggleButtonGroupStyle} value='Dashboard'>
                <DashboardIcon style={isActive!.Dashboard ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Library'  style={toggleButtonGroupStyle} value='Library'>
                <LibraryAddIcon style={isActive!.Library ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Chat'  style={toggleButtonGroupStyle} value='Chat'>
                <ChatIcon style={isActive!.Chat ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Account'  style={toggleButtonGroupStyle} value='Account'>
                <AccountBoxIcon style={isActive!.Account ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Search' style={toggleButtonGroupStyle} value='Search'>
                <SearchIcon style={isActive!.Search ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Apps'  style={toggleButtonGroupStyle} value='Apps'>
                <AppsIcon style={isActive!.Apps ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>



              <ToggleButton aria-label='Settings'  style={toggleButtonGroupStyle} value='Settings'>
                <SettingsIcon style={isActive!.Settings ? iconActiveToggleButtonStyle : iconInactiveToggleButtonStyle} />
              </ToggleButton>

            </ToggleButtonGroup>
          </Stack>
        </Stack>

        <Stack display={"flex"} flexDirection={"column-reverse"} alignItems={"center"}>
          <Avatar alt="Profile Image" 
          src="https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/nour.jpg" 
          sx={{ mb: '20px' }} />

          <NotificationsNoneOutlinedIcon sx={{ mb: '20px', borderRadius: 50 }} style={{ color: '#94A3B8' }} />

          <Avatar alt="Language" src='https://twerlo-clients.s3.me-south-1.amazonaws.com/onezy/english.webp' 
          sx={{ mb: '20px' }} />
        </Stack>
      </Stack>

    </Box>
  );
}