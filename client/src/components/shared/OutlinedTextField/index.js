import React, { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';

const OutlinedTextField = ({ name, label, placeholder, multiline = false, rows = 1, value, handleInputChange, fullWidth = false }) => {

  return <TextField
    id="outlined-textfield"
    variant="outlined"
    name={name}
    label={label}
    placeholder={placeholder}
    onChange={handleInputChange}
    value={value}
    multiline={multiline}
    rows={rows}
    fullWidth={fullWidth}
  />
}

export default OutlinedTextField