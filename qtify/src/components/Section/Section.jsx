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
            { title !== 'Songs' ? ( <h4>{title}</h4>):null}
                <button onClick={toggleCollapse} className={styles.collapseButton}>
                    
                 { title !== 'Songs' ? (collapsed ? 'Show all' : 'Collapse'):null }
                </button>
            </div>
            <div>
            {collapsed || title ==='Songs' ? (
        <Carousel items={albums.map((album) => <CardComponent key={album.id} album={album} />)} />
      ) : (
        <div className={`${styles.grid} ${collapsed ? styles.collapsed : ''}`}>
                {albums.map((album) => (
                    <CardComponent key={album.id} album={album}  title={title}/>
                ))}
            </div>
      )}
            </div>
        </div>
    );
};

export default Section;
