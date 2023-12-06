import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ROUTE_LINKS } from "constants/links"
import { Link } from "react-router-dom";
import COLORS from "theme/colors";

const NotFoundPage = () => {
  return <Box sx={{
    height: "800px"
  }}>
    <Typography variant="h1" color="primary" textAlign="center" sx={{
      marginBottom: "16px"
    }}>
      404 Page Not Found
    </Typography>
    <Typography variant="h4" color={COLORS.palette.amethyst} textAlign="center" sx={{
      marginBottom: "24px"
    }}>
      The page you're looking for doesn't exist.
    </Typography>
    <Button variant="contained" component={Link} to={ROUTE_LINKS.home.href} sx={{
      display: "block",
      margin: "auto",
      width: "fit-content",
    }}>Go back home</Button>
  </Box>
}

export default NotFoundPage;