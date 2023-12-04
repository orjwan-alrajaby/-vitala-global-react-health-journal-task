import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import NavigationBar from '../components/NavigationBar';
import COLORS from 'theme/colors';
import { StyledContainer, StyledBox } from "./styles.js"

const StandardLayout = () => {
  return <StyledContainer maxWidth="lg">
    <NavigationBar />
    <StyledBox sx={{ bgcolor: COLORS.background, height: '100vh', minHeight: "100vh", maxHeight: "100vh", overflow: "auto", padding: "24px" }}>
      <Outlet />
    </StyledBox>
  </StyledContainer>
}

export default StandardLayout;