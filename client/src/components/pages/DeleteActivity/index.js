import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Box, Typography, Button as MuiButton } from '@mui/material';
import { CustomDivider, Button } from "components/shared";
import { ActivityContext } from 'context';
import dayjs from 'dayjs';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE_LINKS } from "constants/links";
import COLORS from 'theme/colors';

const DeleteActivityPage = () => {
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

  const handleDeleteActivity = useCallback(() => {
    const formattedDate = dayjs().format('ddd, MMM D, YYYY h:mm A');
    entry.last_modified_at = formattedDate;
    const filteredState = activityState.list.filter(ele => ele.id !== params.id);
    setActivityState((prev) => ({
      ...prev,
      list: filteredState
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
        color="primary"
        textAlign="center"
        sx={{
          width: "100%",
          maxWidth: "550px",
          margin: "0px auto"
        }}
      >
        Delete Activity
      </Typography>
      <CustomDivider color={"rgba(67, 44, 129, 0.25)"} maxWidth="600px" />
      <Box
        sx={{
          display: "block",
          width: "100%",
          maxWidth: "479px",
          margin: "16px auto"
        }}
      >
        <Typography
          variant="h4"
          color={COLORS.palette.amethyst}
          textAlign="center"
          sx={{
            width: "100%",
            maxWidth: "550px",
            margin: "24px auto"
          }}
        >
          Are you sure you wanna delete the activity titled "{entry.title}"?
        </Typography>
        <Button label="Yes, Delete" onClick={handleDeleteActivity} />
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

export default DeleteActivityPage;
