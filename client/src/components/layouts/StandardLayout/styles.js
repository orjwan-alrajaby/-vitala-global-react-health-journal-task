import { styled } from '@mui/system';
import { Container, Box } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "0px",
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "24px 12px",
  }
}));