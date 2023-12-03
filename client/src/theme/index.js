import { createTheme } from '@mui/material/styles';
import COLORS from './colors';
import {
  FONT_FAMILY,
  FONT_WEIGHT,
  FONT_SIZE,
  LINE_HEIGHT
} from './fonts';
import BREAKPOINTS from './breakpoints';

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary
    },
    secondary: {
      main: COLORS.accent,
    },
    purple: {
      main: COLORS.palette.softPurple,
      light: COLORS.palette.lightLavendar,
      dark: COLORS.palette.amethyst, 
      contrastText: COLORS.palette.fadedPurple,
    },
    background: {
      default: COLORS.background
    }
  },
  breakpoints: {
    values: {
      xs: BREAKPOINTS.xs,
      sm: BREAKPOINTS.sm,
      md: BREAKPOINTS.md,
      lg: BREAKPOINTS.lg,
      xl: BREAKPOINTS.xl,
    },
  },
  typography: {
    fontFamily: `${FONT_FAMILY.raleway}, Arial`,
    htmlFontSize: 16,
    h1: {
      fontSize: FONT_SIZE["32"],
      lineHeight: LINE_HEIGHT["32"],
      fontWeight: FONT_WEIGHT.bold,
      color: COLORS.palette.white,
      [`@media (min-width: ${BREAKPOINTS.sm})`]: {
        fontSize: FONT_SIZE["40"],
        lineHeight: LINE_HEIGHT["40"],
      }
    },
    h2: {
      fontSize: FONT_SIZE["32"],
      lineHeight: LINE_HEIGHT["32"],
      fontWeight: FONT_WEIGHT.bold,
      color: COLORS.primary
    },
    h3: {
      fontSize: FONT_SIZE["24"],
      lineHeight: LINE_HEIGHT["24"],
      fontWeight: FONT_WEIGHT.semiBold,
      color: COLORS.primary
    },
    subtitle1: {
      fontSize: FONT_SIZE["20"],
      lineHeight: LINE_HEIGHT["20"],
      fontWeight: FONT_WEIGHT.bold,
      color: COLORS.palette.white
    },
    subtitle2: {
      fontSize: FONT_SIZE["16"],
      lineHeight: LINE_HEIGHT["16"],
      fontWeight: FONT_WEIGHT.medium,
      color: COLORS.palette.amethyst
    },
    body1: {
      fontSize: FONT_SIZE["14"],
      lineHeight: LINE_HEIGHT["14"],
      fontWeight: FONT_WEIGHT.medium,
      color: COLORS.palette.amethyst
    },
    body2: {
      fontSize: FONT_SIZE["14"],
      lineHeight: LINE_HEIGHT["14"],
      fontWeight: FONT_WEIGHT.medium,
      color: COLORS.palette.amethyst
    },
  },
});

export default theme
