import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EntryCard from '../EntryCard';

const EntriesList = ({ itemsList = [], itemsUrl }) => {
  return (
    <List sx={{ padding: "0px" }}>
      {itemsList.map(ele => <ListItem key={ele.id} sx={{ padding: "0px 0px 15px" }}>
        <EntryCard title={ele.title} description={ele.description} type={ele.type} created_at={ele.created_at} itemUrl={`${itemsUrl}/${ele.id}`}/>
      </ListItem>)}
    </List>
  );
}

export default EntriesList;