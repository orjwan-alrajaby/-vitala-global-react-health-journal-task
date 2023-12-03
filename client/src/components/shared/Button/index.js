import React from "react"
import MuiButton from '@mui/material/Button';
import { CircularProgress, Typography } from "@mui/material";

const Button = ({ label, onClick, variant, isLoading }) => {
  return <MuiButton
    variant={variant || "contained"}
    color="primary"
    type="submit"
    sx={{
      width: "100%",
      height: "42px",
      maxWidth: "479px",
    }}
    onSubmit={onClick}
    onClick={onClick}
    disabled={isLoading}
  >
    <Typography variant="subtitle2" color="white" sx={{
      position: "relative"
    }}>{label}
      {isLoading && <CircularProgress color="primary" size={20} sx={{
        position: "absolute",
        top: "1px",
        right: "-30px",
      }}
      />
      }
    </Typography>
  </MuiButton>
}

export default Button