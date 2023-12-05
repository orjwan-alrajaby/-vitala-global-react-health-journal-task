import { styled } from '@mui/system';
import { Container, Box } from '@mui/material';
import COLORS from 'theme/colors';

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingRight: "0px",
    paddingLeft: "0px"
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: "24px",
  [theme.breakpoints.down("sm")]: {
  padding: "24px 12px",
}
}));