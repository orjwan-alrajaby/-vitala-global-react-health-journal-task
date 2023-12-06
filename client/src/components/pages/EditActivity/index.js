import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Box, Typography, FormControl, Button as MuiButton } from '@mui/material';
import { OutlinedTextField, CustomDivider, BasicSelect, Button } from "components/shared";
import { typeOptions } from "constants/typeOptions";
import { ActivityContext } from 'context';
import dayjs from 'dayjs';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE_LINKS } from "constants/links"

const EditActivityPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { activityState, setActivityState } = useContext(ActivityContext)

  const [entry, setEntry] = useState({
    id: "",
    title: "",
    description: "",
    type: "",
    created_at: "",
    last_modified_at: ""
  });

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    const keyName = name || "type";
    setEntry((prev) => ({
      ...prev,
      [keyName]: value
    }));
  }, []);

  const handleEditActivity = useCallback(() => {
    const formattedDate = dayjs().format('ddd, MMM D, YYYY h:mm A');
    entry.last_modified_at = formattedDate;
    const filteredState = activityState.list.filter(ele => ele.id !== params.id);
    const newList = [...filteredState, entry];
    setActivityState((prev) => ({
      ...prev,
      list: newList
    }));
    navigate(ROUTE_LINKS.myActivities.href);
  }, [activityState.list, entry, navigate, params.id, setActivityState])

  useEffect(() => {
    if (Boolean(params.id)) {
      const currentEntry = activityState.list.find(ele => ele.id === params.id);
      if (Boolean(currentEntry)) {
        setEntry(currentEntry);
      } else {
        navigate(ROUTE_LINKS.notFound.href)
      }
    }
  }, [activityState.list, navigate, params.id])

  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          width: "100%",
          maxWidth: "550px",
          margin: "0px auto"
        }}
      >
        Edit Activity
      </Typography>
      <CustomDivider color={"rgba(67, 44, 129, 0.25)"} maxWidth="600px" />
      <Box
        sx={{
          display: "block",
          width: "100%",
          maxWidth: "479px",
          margin: "0px auto"
        }}
      >
        <FormControl sx={{ display: "block", marginBottom: "20px" }}>
          <OutlinedTextField
            name="title"
            label="Enter activity title"
            type="text"
            fullWidth={true}
            value={entry.title}
            handleInputChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ display: "block", marginBottom: "20px" }}>
          <OutlinedTextField
            name="description"
            label="Enter activity description"
            type="text"
            multiline={true}
            rows={6}
            fullWidth={true}
            value={entry.description}
            handleInputChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ display: "block", marginBottom: "20px" }}>
          <BasicSelect
            label="Select activity type"
            options={typeOptions}
            value={entry.type}
            handleSelectChange={handleInputChange}
          />
        </FormControl>
        <Button label="Edit" onClick={handleEditActivity} isDisabled={Boolean(!entry.title) || Boolean(!entry.description) || Boolean(!entry.type)} />
        <MuiButton component={Link} to={ROUTE_LINKS.home.href} variant="outlined" sx={{
          display: "block",
          margin: "16px auto",
          width: "479px",
          height: "42px",
        }}>
          <Typography variant="subtitle1" textAlign="center" color="primary">Cancel</Typography>
        </MuiButton>
      </Box>
    </Box>
  );
};

export default EditActivityPage;
