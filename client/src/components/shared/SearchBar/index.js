import React from "react"
import { TextField } from '@mui/material';

const SearchBar = ({
  name,
  label,
  placeholder,
  value,
  handleInputChange,
  fullWidth = false
}) => {
  return <TextField
    id="outlined-textfield"
    variant="outlined"
    name={name}
    label={label}
    placeholder={placeholder}
    onChange={handleInputChange}
    value={value}
    fullWidth={fullWidth}
  />
}

export default SearchBar