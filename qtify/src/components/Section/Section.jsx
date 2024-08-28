import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../Card/CardComponent';
import styles from './Section.module.css';
import Carousel from '../Carousal/Carousal';

const Section = ({albums,title}) => {
   
    const [collapsed, setCollapsed] = useState(false);

   

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h4>{title}</h4>
                <button onClick={toggleCollapse} className={styles.collapseButton}>
                 {collapsed ? 'Show All' : 'Collapse'}
                </button>
            </div>
            <div>
            {collapsed ? (
        <Carousel items={albums.map((album) => <CardComponent key={album.id} album={album} />)} />
      ) : (
        <div className={`${styles.grid} ${collapsed ? styles.collapsed : ''}`}>
                {albums.map((album) => (
                    <CardComponent key={album.id} album={album} />
                ))}
            </div>
      )}
            </div>
        </div>
    );
};

export default Section;
