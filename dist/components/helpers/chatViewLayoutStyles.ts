import { CSSProperties } from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";


export const toggleButtonGroupStyle: CSSProperties = {
    border: '0px',
    width: '100%',
    justifyContent: 'flex-start',
    borderRadius: 15,
    textTransform: 'capitalize',
};

export const iconInactiveToggleButtonStyle: CSSProperties= {
    color: '#94A3B8',
    marginRight: 5
}

export const iconActiveToggleButtonStyle: CSSProperties= {
    color: '#2D7BDB',
    marginRight: 5
}


export const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color:'#3E721D',
    backgroundColor: '#fff'
  }
});