import * as React from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import COLORS from 'theme/colors';
import { FONT_WEIGHT } from 'theme/fonts';

const EntryTypeButton = ({ title, isSelected = false, icon }) => {
  return (
    <Button name={title} disableElevation disableRipple sx={{
        backgroundColor: isSelected ? COLORS.palette.softPurple : COLORS.palette.lightLavendar,
        height: "115px", width: "100%",
        maxWidth: "342px",
        borderRadius: "12px",
        textAlign: "center",
        border: isSelected ? `3px solid ${COLORS.primary}` : `3px solid transparent`,
        fontWeight: FONT_WEIGHT.bold
      }}
    >
      {title}
    </Button>
  );
}

export default EntryTypeButton;