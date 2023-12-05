import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import { CustomDivider, SearchBar, EntriesList, BasicSelect, Button } from 'components/shared';
import Grid from '@mui/material/Grid';
import { ACTIVITIES } from "database";
import { typeOptions } from "constants/typeOptions";

const MyActivitiesPage = () => {
  const [list, setList] = useState(ACTIVITIES || []);
  const [filters, setFilters] = useState({
    searchTerm: "",
    typeOption: ""
  });

  const handleSearchClick = useCallback((e) => {
    e.preventDefault();
    let filtered = [];
    if (!!!filters.searchTerm && !!!filters.typeOption) {
      filtered = ACTIVITIES;
    } else if (filters.searchTerm && filters.typeOption) {
      filtered = ACTIVITIES.filter(ele => ele.title.toLowerCase().includes(filters.searchTerm) && ele.type.toLowerCase() === filters.typeOption);
    } else if (filters.searchTerm) {
      filtered = ACTIVITIES.filter(ele => ele.title.includes(filters.searchTerm));
    } else if (filters.typeOption) {
      filtered = ACTIVITIES.filter(ele => ele.type.toLowerCase() === filters.typeOption);
    }
    setList(filtered)
  }, [filters.searchTerm, filters.typeOption]);

  const handleFiltersChange = useCallback(({ target: { value } }, keyName) => {
    const lowercase_val = value.toLowerCase();
    setFilters((prev) => ({
      ...prev,
      [keyName]: lowercase_val
    }));
  }, [])

  useEffect(() => {
    console.log("filters", filters)
  }, [filters])

  useEffect(() => {
    console.log("list", list)
  }, [list])

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <Typography variant="h2" component="h1">
            MY ACTIVITIES {ACTIVITIES.length && `(${list.length})`}
          </Typography>
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
        rowSpacing={{ xs: 6 }}
      >
        <Grid item xs={12} sm={7}>
          {
            list && list.length > 0 ? <EntriesList itemsList={list} /> : <Typography variant="h4" color="red">
              No activities were found!
            </Typography>
          }
        </Grid>
        <Grid item xs={6} sm={4}>
          <form>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle2" color="primary" sx={{ paddingBottom: "15px" }}>Search & Filter Activities</Typography>
            </Box>
            <Box>
              <FormControl
                sx={{
                  display: "block",
                  paddingBottom: "15px"
                }}
              >
                <SearchBar
                  name="search"
                  label="Search for activities"
                  fullWidth={true}
                  handleInputChange={(e) => handleFiltersChange(e, "searchTerm")}
                  value={filters.searchTerm}
                />
              </FormControl>
              <FormControl
                sx={{ display: "block", paddingBottom: "15px" }}
              >
                <BasicSelect
                  label="Select activity type"
                  placeholder="Select activity type"
                  options={typeOptions}
                  value={filters.typeOption}
                  handleSelectChange={(e) => handleFiltersChange(e, "typeOption")}
                />
              </FormControl>
            </Box>
            <Button label="Search & Filter" styles={{ maxWidth: "none" }} onClick={handleSearchClick} />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyActivitiesPage;
