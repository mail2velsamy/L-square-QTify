import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import styles from './Card.module.css';

const CardComponent = ({album}) => {
    return (
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
          <Typography variant="body1" className={styles.albumName}>
              {album.title}
            </Typography>
        </Card>
      );
};

export default CardComponent;