import React, { useEffect, useState } from 'react';
import { Box, Typography, FormControl } from '@mui/material';
import { OutlinedTextField, CustomDivider, BasicSelect, Button } from "components/shared";
import { typeOptions } from "constants/typeOptions";
import { useCreateEntry } from 'hooks';

const CreateActivityPage = () => {
  const { data, isLoading, error, createEntry } = useCreateEntry();
  const [entry, setEntry] = useState({
    title: "",
    description: "",
    type: ""
  });

  const handleInputChange = ({ target: { name, value } }) => {
    const keyName = name || "type";
    setEntry((prev) => ({
      ...prev,
      [keyName]: value
    }));
  };

  const submitActivity = async () => {
     await createEntry(entry);
  }


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
        Have you taken any steps towards self-improvement today?
      </Typography>
      <Typography variant="h3" textAlign="center">
        Record your activities!
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
        <Button label="Create" onClick={submitActivity} isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default CreateActivityPage;
