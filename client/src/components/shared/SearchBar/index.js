import React, { useEffect, useState } from "react"
import { Button, TextField } from '@mui/material';
import COLORS from "theme/colors"

const SearchBar = ({
  name,
  label,
  placeholder,
  value,
  handleInputChange,
  handleSubmit,
  fullWidth = false
}) => {
  return <form onSubmit={handleSubmit}>
    <TextField
      id="outlined-textfield"
      variant="outlined"
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      fullWidth={fullWidth}
    />
    <Button sx={{ display: "none" }} type="submit" />
  </form>
}

export default SearchBar