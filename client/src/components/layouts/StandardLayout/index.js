import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import NavigationBar from '../components/NavigationBar';
import COLORS from 'theme/colors';
import { StyledContainer, StyledBox } from "./styles.js"

const StandardLayout = () => {
  return <Box sx={{
    bgcolor: "#1E1E1E",
    minHeight: "100vh",
    paddingRight: "0px",
    paddingLeft: "0px",
  }}>
    <StyledContainer maxWidth="lg" sx={{
      paddingRight: "0px",
      paddingLeft: "0px",
      backgroundColor: COLORS.background,
      minHeight: "100vh",
    }}>
      <Box>
        <NavigationBar />
        <StyledBox>
          <Outlet />
        </StyledBox>
      </Box>
    </StyledContainer>
  </Box>
}

export default StandardLayout;

// 64 + 48 + 36 = c