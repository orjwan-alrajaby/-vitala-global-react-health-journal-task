import * as React from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import COLORS from 'theme/colors';
import { FONT_WEIGHT } from 'theme/fonts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const EntryCard = ({ title, description, type, created_at, itemUrl }) => {
  return (
    <Card sx={{ position: "relative", minHeight: "150px", width: "100%" }}>
      <CardHeader
        title={
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "15px" }}>
            <Typography variant="h4" component="h3" textTransform="uppercase" color="primary">{title}</Typography>
            <Box sx={{ minWidth: "60px" }}>
              <Link to={itemUrl || "#"}>
                <EditIcon sx={{ marginLeft: "5px" }} />
              </Link>
              <Link to={itemUrl || "#"}>
                <DeleteIcon sx={{ marginLeft: "5px" }} />
              </Link>
            </Box>
          </Box>
        }
        subheader={<Typography variant="subtitle2" color={COLORS.palette.black}>{description}</Typography>}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography color={COLORS.palette.amethyst} variant="body2" textTransform="uppercase" fontWeight={FONT_WEIGHT.semiBold} >
            {type}
          </Typography>
          <Typography variant="body2" color={COLORS.palette.fadedPurple}>
            {created_at}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default EntryCard;