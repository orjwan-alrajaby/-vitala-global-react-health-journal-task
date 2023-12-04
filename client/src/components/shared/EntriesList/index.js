import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EntryCard from '../EntryCard';

const EntriesList = ({ itemsList = [1, 2, 3, 4, 5, 6, 7, 8] }) => {
  return (
    <List sx={{ overflowY: "scroll", padding: "0px" }}>
      {itemsList.map(ele => <ListItem key={ele.id} sx={{ padding: "0px 0px 15px" }}>
        <EntryCard {...ele} />
      </ListItem>)}
    </List>
  );
}

export default EntriesList;