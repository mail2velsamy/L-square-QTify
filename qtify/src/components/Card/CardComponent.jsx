import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import styles from './Card.module.css';

const CardComponent = ({album}) => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardMedia
          component="img"
          alt="Album Image"
          height="250"
          image={album.image}
          className={styles.image}
        />
        <CardContent className={styles.content}>
          <Chip
            label={`${album.follows} Follows`} className={styles.chip}
          />
        </CardContent>
      </Card>
      <p className={styles.albumName}>{album.title}</p>
    </div>
  );
};

export default CardComponent;