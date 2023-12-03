import * as React from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const BasicSelect = ({ label, options = [], value, handleSelectChange }) => {
  return (
    <>
      <InputLabel id="basic-select">{label}</InputLabel>
      <Select
        fullWidth
        labelId="basic-select"
        id="basic-select"
        value={value}
        label={label}
        onChange={handleSelectChange}
        IconComponent={() => <ArrowDropDownIcon color="primary" fontSize="large" />}
        sx={{
          "& .MuiSvgIcon-root": {
            marginRight: "5px"
          }
        }}
      >
        {options?.map((option) => <MenuItem key={option.name} value={option.value}>{option.name}</MenuItem>)}
      </Select>
    </>
  );
}

export default BasicSelect