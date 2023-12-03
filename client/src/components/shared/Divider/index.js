import React from "react"
import Divider from '@mui/material/Divider';
import COLORS from 'theme/colors';

const CustomDivider = ({ color = COLORS.palette.primary, marginy = "24px", marginx = "auto", maxWidth = "none" }) => {
  return <Divider sx={{
    width: "100%",
    maxWidth: maxWidth,
    margin: `${marginy} ${marginx}`,
    borderColor: color
  }}
  />
}

export default CustomDivider