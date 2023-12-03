import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationBar from '../components/NavigationBar';
import COLORS from '../../../theme/colors';
import { StyledContainer } from "./styles.js"

const StandardLayout = ({ children }) => {
  return <StyledContainer maxWidth="lg">
    <NavigationBar />
    <Box sx={{ bgcolor: COLORS.background, height: '100vh', padding: "24px" }}>
      {children}
    </Box>
  </StyledContainer>
}

export default StandardLayout;