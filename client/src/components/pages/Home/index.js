import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "constants/links"

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(NAV_LINKS.myActivity.href)
  }, [navigate])

  return <Box sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }}>
    <CircularProgress />
  </Box>
}

export default HomePage;