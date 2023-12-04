import React, { useEffect, useState } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import { CustomDivider, SearchBar, EntriesList, BasicSelect } from 'components/shared';
import Grid from '@mui/material/Grid';
import { ACTIVITIES } from "database";
import { typeOptions } from "constants/typeOptions";


const MyActivitiesPage = () => {
  const [data, setData] = useState({
    type: "",
    search: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    const keyName = name || "type";
    setData((prev) => ({
      ...prev,
      [keyName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <Typography variant="h2" component="h1">MY ACTIVITIES (34)</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <CustomDivider marginy="15px" />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        direction={{
          xs: "column-reverse",
          sm: "row",
        }}
      >
        <Grid item xs={12} sm={7}>
          <EntriesList itemsList={ACTIVITIES} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl
            sx={{
              display: "block",
              paddingBottom: "24px",
            }}
          >
            <SearchBar
              name="search"
              label="Search for activities"
              fullWidth={true}
              handleSubmit={handleSubmit}
              handleInputChange={handleChange}
              value={data.search}
            />
          </FormControl>
          <FormControl
            sx={{ display: "block", paddingBottom: "24px" }}
          >

            <BasicSelect
              label="Select activity type"
              placeholder="Select activity type"
              options={typeOptions}
              value={data.type}
              handleSelectChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}


export default MyActivitiesPage;
