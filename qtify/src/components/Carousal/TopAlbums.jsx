import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Carousel from './Carousel';
import CardComponent from './CardComponent';

const TopAlbums = ({ albums }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div className="header">
        <h2>Top Albums</h2>
        <Button onClick={toggleCollapse}>
          {isCollapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      {isCollapsed ? (
        <Carousel items={albums.map((album) => <CardComponent album={album} />)} />
      ) : (
        <Grid container spacing={2}>
          {albums.map((album, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardComponent album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default TopAlbums;
