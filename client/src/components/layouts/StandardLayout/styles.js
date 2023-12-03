import { styled } from '@mui/system';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "0px",
  }
}));