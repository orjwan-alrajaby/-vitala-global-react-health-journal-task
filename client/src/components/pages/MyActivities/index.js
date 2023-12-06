import React, { useCallback, useState, useContext } from 'react';
import { Box, FormControl, Typography } from '@mui/material';
import { CustomDivider, SearchBar, EntriesList, BasicSelect, Button } from 'components/shared';
import Grid from '@mui/material/Grid';
import { typeOptions } from "constants/typeOptions";
import { ActivityContext } from 'context';
import { ROUTE_LINKS } from 'constants/links';
import dayjs from 'dayjs';

const MyActivitiesPage = () => {
  const { activityState } = useContext(ActivityContext)
  const [filteredList, setFilteredList] = useState(activityState.list || [])
  const [filters, setFilters] = useState({
    searchTerm: "",
    typeOption: ""
  });

  const sortedList = filteredList.sort((a, b) => {
    return dayjs(b.last_modified_at).unix() - dayjs(a.last_modified_at).unix()
  })

  const handleSearchClick = useCallback((e) => {
    e.preventDefault();
    let filtered = activityState.list;
    if (Boolean(!filters.searchTerm) && Boolean(!filters.typeOption)) {
      filtered = activityState.list;
    } else if (filters.searchTerm) {
      filtered = filtered.filter(ele => {
        return (ele.title.toLowerCase().includes(filters.searchTerm) || ele.description.toLowerCase().includes(filters.searchTerm))
      });
    } else if (filters.typeOption) {
      filtered = filtered.filter(ele => ele.type.toLowerCase() === filters.typeOption);
    }
    setFilteredList(filtered)
  }, [activityState.list, filters.searchTerm, filters.typeOption]);

  const handleFiltersChange = useCallback(({ target: { value } }, keyName) => {
    const lowercaseVal = value.toLowerCase();
    setFilters((prev) => ({
      ...prev,
      [keyName]: lowercaseVal
    }));
  }, [])

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <Typography variant="h2" component="h1">
            MY ACTIVITIES {sortedList.length > 0 && `(${sortedList.length})`}
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
            filteredList && filteredList.length > 0 ? <EntriesList itemsList={filteredList} editUrl={ROUTE_LINKS.editActivity.href} deleteUrl={ROUTE_LINKS.deleteActivity.href} /> : <Typography variant="h4" color="red">
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
